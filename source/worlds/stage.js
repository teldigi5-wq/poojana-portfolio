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
  ACESFilmicToneMapping, PMREMGenerator, SRGBColorSpace, Vector2, WebGLRenderer
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { TIERS, TIER_SETTINGS, initialTier, createGovernor } from './tiers.js';

/* Film finish in display space: soft vignette and fine animated grain. */
const FinishShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVignette: { value: 0.4 }, uGrain: { value: 0.03 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`
};

/** Resolves when the opening introduction has finished (or immediately if there is none). */
async function introSettled() {
  // The intro script is deferred; wait until it has run before reading its state.
  if (document.readyState === 'loading') await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  if (root.dataset.introState !== 'loading') return;
  return new Promise(resolve => {
    addEventListener('portfolio:intro-complete', resolve, { once: true });
    // Never wait forever on the intro.
    setTimeout(resolve, 9000);
  });
}

const nextFrame = () => new Promise(resolve => requestAnimationFrame(() => resolve()));

/*
 * Progressive shader warm-up. Some drivers (notably ANGLE on Direct3D, i.e. Chrome on
 * Windows) finish compiling a shader only on its first draw, which can stall the page
 * for over a second if everything is drawn at once. Instead, draw one kind of material
 * per frame into a 1×1 scissor while the canvas is still hidden.
 */
async function warmUp(renderer, world, target, composer) {
  const { scene, camera } = world;
  const items = [];
  scene.traverse(object => { if ((object.isMesh || object.isPoints || object.isSprite) && object.material) items.push(object); });
  const programKey = material => `${material.type}|${material.name}|${material.vertexShader?.length || 0}|${material.fragmentShader?.length || 0}|${material.customProgramCacheKey?.() || ''}`;
  const groups = new Map();
  for (const object of items) {
    const key = programKey(object.material);
    if (!groups.has(key)) groups.set(key, object);
  }
  const visible = items.map(object => object.visible);
  const scissor = renderer.getScissorTest();
  renderer.setScissorTest(true);
  renderer.setScissor(0, 0, 1, 1);
  try {
    for (const representative of groups.values()) {
      items.forEach(object => { object.visible = object === representative; });
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      await nextFrame();
    }
    items.forEach((object, i) => { object.visible = visible[i]; });
    if (composer) { composer.render(0.016); await nextFrame(); }   // bloom and finish passes
  } finally {
    items.forEach((object, i) => { object.visible = visible[i]; });
    renderer.setScissorTest(scissor);
    renderer.setScissor(0, 0, renderer.domElement.width, renderer.domElement.height);
  }
  return groups.size;
}

const WORLDS = {
  strata: { host: '#dimension .system-object', section: '#dimension', load: () => import('./strata.js'), prefetch: true }
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
  const timings = { boot: Math.round(performance.now()) };
  const mark = name => { timings[name] = Math.round(performance.now()); };
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

  // Shared studio reflections for physically based metals. Generated only when a tier needs
  // them: the low tier uses baked matcaps, which skips this cost entirely on weaker GPUs.
  let environment = null;
  const getEnvironment = () => {
    if (!environment) {
      const pmrem = new PMREMGenerator(renderer);
      environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      pmrem.dispose();
      mark('environment');
    }
    return environment;
  };

  const state = { tier, settings: TIER_SETTINGS[tier], pointer: new Vector2(), pointerTarget: new Vector2(), progress: 0 };
  const loaded = new Map();
  const governor = createGovernor();
  let lastFrame = 0;
  let active = null;      // { name, world, host, section }
  let composer = null;
  let bloomPass = null;
  let finishPass = null;
  let revealed = false;
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
      // composer.setSize sized bloom at full resolution; scale it down per tier (the expensive part on integrated GPUs).
      const ratio = renderer.getPixelRatio() * state.settings.bloomScale;
      bloomPass?.setSize(Math.max(64, Math.round(width * ratio)), Math.max(64, Math.round(height * ratio)));
    }
  };

  const buildComposer = () => {
    composer?.dispose();
    composer = null;
    bloomPass = null;
    finishPass = null;
    if (!active || !state.settings.bloom) return;
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(active.world.scene, active.world.camera));
    const bloom = active.world.bloom || { strength: 0.7, radius: 0.5, threshold: 0.82 };
    bloomPass = new UnrealBloomPass(new Vector2(256, 256), bloom.strength, bloom.radius, bloom.threshold);
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());
    const finish = active.world.finish;
    if (finish) {
      finishPass = new ShaderPass(FinishShader);
      finishPass.uniforms.uVignette.value = finish.vignette;
      finishPass.uniforms.uGrain.value = finish.grain;
      composer.addPass(finishPass);
    }
  };

  const setTier = next => {
    if (next === tier) return;
    tier = next;
    root.dataset.worldTier = tier;
    if (tier === 'still') { stop(); detach(); canvas.remove(); return; }
    state.tier = tier;
    state.settings = TIER_SETTINGS[tier];
    governor.reset();
    if (active) { active.world.setTier?.(state); active.world.tierApplied = tier; }
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
    if (finishPass) finishPass.uniforms.uTime.value += dt;
    if (composer) composer.render(dt); else renderer.render(active.world.scene, active.world.camera);
  };

  const loop = () => {
    frame = 0;
    if (!active || !visible || document.hidden) return;
    const now = performance.now();
    const dt = Math.min(0.05, (now - lastFrame) / 1000);
    lastFrame = now;
    const t0 = performance.now();
    render(dt);
    // Frame cost on the main thread plus the time between frames: both signal a struggling device.
    // A `?tier=` override pins the tier (used for reviews and automated checks).
    const next = pinned ? null : governor.sample(Math.max(dt * 1000, performance.now() - t0), tier);
    if (next) setTier(next);
    if (tier !== 'still') frame = requestAnimationFrame(loop);
  };
  const start = () => { if (!frame && active && visible && revealed) { lastFrame = performance.now(); frame = requestAnimationFrame(loop); } };
  const stop = () => { cancelAnimationFrame(frame); frame = 0; };

  const detach = () => {
    if (!active) return;
    active.host.classList.remove('world-live');
    active.section?.classList.remove('world-live');
    active = null;
  };

  // Load, build and compile a world once; later activations reuse it.
  const preparing = new Map();
  function prepare(name) {
    if (!preparing.has(name)) {
      preparing.set(name, (async () => {
        const module = await WORLDS[name].load();
        mark(`${name}:module`);
        const world = await module.create({ renderer, getEnvironment, state });
        mark(`${name}:created`);
        // Compile shaders before the first visible frame.
        try { await renderer.compileAsync(world.scene, world.camera); } catch { /* older drivers: compile on first frame */ }
        mark(`${name}:compiled`);
        world.tierApplied = tier;
        loaded.set(name, world);
        return world;
      })());
    }
    return preparing.get(name);
  }

  async function activate(name) {
    if (active?.name === name) return;
    const spec = WORLDS[name];
    const host = document.querySelector(spec.host);
    if (!host) return;
    const world = await prepare(name);
    if (world.tierApplied !== tier) { world.setTier?.(state); world.tierApplied = tier; }
    if (tier === 'still') return;
    detach();
    active = { name, world, host, section: document.querySelector(spec.section) };
    host.prepend(canvas);
    buildComposer();
    size();
    governor.reset();
    if (!world.warmed) {
      timings[`${name}:warm-programs`] = await warmUp(renderer, world, composer ? composer.readBuffer : null, composer);
      world.warmed = true;
      mark(`${name}:warmed`);
      if (active?.name !== name) return;
    }
    // Render one (dark, un-ignited) frame so nothing flashes, then wait for the intro to finish
    // and ignite the moment the hero is actually on screen.
    render(0.016);
    mark(`${name}:first-frame`);
    await introSettled();
    mark(`${name}:intro-settled`);
    if (active?.name !== name) return;
    revealed = true;
    requestAnimationFrame(() => {
      host.classList.add('world-live');
      active?.section?.classList.add('world-live');
      active?.world.ignite?.();
      mark(`${name}:revealed`);
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
  // Worlds further down the page are built a little before they are needed, when the browser is idle.
  const idle = window.requestIdleCallback ? callback => requestIdleCallback(callback, { timeout: 2500 }) : callback => setTimeout(callback, 300);
  const prefetch = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      prefetch.unobserve(entry.target);
      idle(() => { if (tier !== 'still') prepare(entry.target.dataset.world).catch(() => {}); });
    });
  }, { rootMargin: '150% 0px' });
  Object.entries(WORLDS).forEach(([name, spec]) => {
    const section = document.querySelector(spec.section);
    if (!section) return;
    section.dataset.world = name;
    io.observe(section);
    if (spec.prefetch) prefetch.observe(section);
  });

  addEventListener('pointermove', event => {
    state.pointerTarget.set(event.clientX / innerWidth * 2 - 1, event.clientY / innerHeight * 2 - 1);
  }, { passive: true });
  addEventListener('resize', size, { passive: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); else stop(); });
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change', event => { if (event.matches) setTier('still'); });

  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); stop(); detach(); canvas.remove(); root.dataset.worldTier = 'still'; });

  // Debug handle for the visual-audit script (read-only information).

  window.__worldStage = { get tier() { return tier; }, get active() { return active?.name || null; }, setTier, timings, get world() { return active?.world || null; } };
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  try { boot(); } catch (error) { document.documentElement.dataset.worldError = String(error?.message || error).slice(0, 120); }
}
