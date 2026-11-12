/*
 * World stage — immersive v3 foundation.
 *
 * One WebGL renderer for the whole site. Each "world" (a section's scene) is a
 * code-split module loaded on demand. Only the most visible world renders; the
 * canvas moves into that world's host element. Everything else on the page is
 * plain HTML, so the site reads the same without WebGL.
 *
 * Quality tiers: high → medium → low → still. The starting tier comes from the
 * device; it drops automatically when frames run slow. `?tier=` overrides it.
 */
import {
  ACESFilmicToneMapping, Clock, PMREMGenerator, SRGBColorSpace, Vector2, WebGLRenderer
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { TIERS, TIER_SETTINGS, initialTier, createGovernor } from './tiers.js';

const WORLDS = {
  gateway: { host: '#home .hero-visual', section: '#home', load: () => import('./gateway.js') }
};

const root = document.documentElement;
const query = new URLSearchParams(location.search);

function reducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches || query.get('motion') === 'off' ||
    root.classList.contains('motion-off');
}

function gpuName(gl) {
  try {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    return ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : String(gl.getParameter(gl.RENDERER));
  } catch { return ''; }
}

function boot() {
  if (reducedMotion()) return;
  const renderer = new WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  const gl = renderer.getContext();
  let tier = initialTier({
    gpu: gpuName(gl),
    coarse: matchMedia('(pointer: coarse)').matches,
    width: innerWidth,
    memory: navigator.deviceMemory || 8,
    cores: navigator.hardwareConcurrency || 8,
    override: query.get('tier')
  });
  const pinned = TIERS.includes(query.get('tier'));
  root.dataset.worldTier = tier;
  if (tier === 'still') { renderer.dispose(); return; }

  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  const canvas = renderer.domElement;
  canvas.className = 'world-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.tabIndex = -1;

  // Shared studio reflections for metals (generated once, in idle time).
  const pmrem = new PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const state = { tier, settings: TIER_SETTINGS[tier], pointer: new Vector2(), pointerTarget: new Vector2(), progress: 0 };
  const loaded = new Map();
  const governor = createGovernor();
  const clock = new Clock(false);
  let active = null;      // { name, world, host, section }
  let composer = null;
  let bloomPass = null;
  let frame = 0;
  let visible = false;

  const size = () => {
    if (!active) return;
    const { width, height } = active.host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, state.settings.dpr));
    renderer.setSize(width, height, false);
    active.world.resize(width, height, state);
    if (composer) {
      composer.setPixelRatio(renderer.getPixelRatio());
      composer.setSize(width, height);
      bloomPass?.resolution.set(width * state.settings.bloomScale, height * state.settings.bloomScale);
    }
  };

  const buildComposer = () => {
    composer?.dispose();
    composer = null;
    bloomPass = null;
    if (!active || !state.settings.bloom) return;
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(active.world.scene, active.world.camera));
    const bloom = active.world.bloom || { strength: 0.7, radius: 0.5, threshold: 0.82 };
    bloomPass = new UnrealBloomPass(new Vector2(256, 256), bloom.strength, bloom.radius, bloom.threshold);
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());
  };

  const setTier = next => {
    if (next === tier) return;
    tier = next;
    root.dataset.worldTier = tier;
    if (tier === 'still') { stop(); detach(); canvas.remove(); return; }
    state.tier = tier;
    state.settings = TIER_SETTINGS[tier];
    governor.reset();
    active?.world.setTier?.(state);
    buildComposer();
    size();
  };

  const render = dt => {
    state.pointer.lerp(state.pointerTarget, Math.min(1, dt * 3));
    if (active.section) {
      const r = active.section.getBoundingClientRect();
      state.progress = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
    }
    active.world.update(dt, state);
    if (composer) composer.render(dt); else renderer.render(active.world.scene, active.world.camera);
  };

  const loop = () => {
    frame = 0;
    if (!active || !visible || document.hidden) return;
    const dt = Math.min(0.05, clock.getDelta());
    const t0 = performance.now();
    render(dt);
    // Frame cost on the main thread plus the time between frames: both signal a struggling device.
    // A `?tier=` override pins the tier (used for reviews and automated checks).
    const next = pinned ? null : governor.sample(Math.max(dt * 1000, performance.now() - t0), tier);
    if (next) setTier(next);
    if (tier !== 'still') frame = requestAnimationFrame(loop);
  };
  const start = () => { if (!frame && active && visible) { clock.start(); clock.getDelta(); frame = requestAnimationFrame(loop); } };
  const stop = () => { cancelAnimationFrame(frame); frame = 0; clock.stop(); };

  const detach = () => {
    if (!active) return;
    active.host.classList.remove('world-live');
    active.section?.classList.remove('world-live');
    active = null;
  };

  async function activate(name) {
    if (active?.name === name) return;
    const spec = WORLDS[name];
    const host = document.querySelector(spec.host);
    if (!host) return;
    let world = loaded.get(name);
    if (!world) {
      const module = await spec.load();
      world = await module.create({ renderer, environment, state });
      // Compile shaders before the first visible frame.
      try { await renderer.compileAsync(world.scene, world.camera); } catch { /* older drivers: compile on first frame */ }
      loaded.set(name, world);
    }
    if (tier === 'still') return;
    detach();
    active = { name, world, host, section: document.querySelector(spec.section) };
    host.prepend(canvas);
    buildComposer();
    size();
    governor.reset();
    // Reveal only after the first frame exists, so the fallback never flashes to black.
    render(0.016);
    requestAnimationFrame(() => {
      host.classList.add('world-live');
      active?.section?.classList.add('world-live');
    });
    start();
  }

  // Which world is on screen?
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const name = entry.target.dataset.world;
      if (entry.isIntersecting) {
        visible = true;
        activate(name).catch(error => { root.dataset.worldError = String(error?.message || error).slice(0, 120); });
        start();
      } else if (active?.name === name) {
        visible = false;
        stop();
      }
    });
  }, { rootMargin: '80px 0px' });
  Object.entries(WORLDS).forEach(([name, spec]) => {
    const section = document.querySelector(spec.section);
    if (!section) return;
    section.dataset.world = name;
    io.observe(section);
  });

  addEventListener('pointermove', event => {
    state.pointerTarget.set(event.clientX / innerWidth * 2 - 1, event.clientY / innerHeight * 2 - 1);
  }, { passive: true });
  addEventListener('resize', size, { passive: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); else stop(); });
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change', event => { if (event.matches) setTier('still'); });

  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); stop(); detach(); canvas.remove(); root.dataset.worldTier = 'still'; });

  // Debug handle for the visual-audit script (read-only information).
  window.__worldStage = { get tier() { return tier; }, get active() { return active?.name || null; }, setTier };
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  try { boot(); } catch (error) { document.documentElement.dataset.worldError = String(error?.message || error).slice(0, 120); }
}
