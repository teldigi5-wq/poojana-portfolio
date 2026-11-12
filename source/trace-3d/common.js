/* Shared Three.js helpers for the Work + Lab scenes: a visibility-aware view, a fresnel "glass" material,
   glow sprites and a tiny DOM-label projector. Every scene is progressive: the DOM version stays underneath. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, ShaderMaterial, AdditiveBlending, Color, CanvasTexture, SRGBColorSpace,
  SpriteMaterial, Sprite, Vector3
} from 'three';

export const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const damp = (cur, target, dt, k = 8) => cur + (target - cur) * (1 - Math.exp(-dt * k));

const VERT = `
varying vec3 vN; varying vec3 vV; varying vec3 vC;
void main(){
  vec4 mv;
  #ifdef USE_INSTANCING
    mat4 im = instanceMatrix; mv = modelViewMatrix * im * vec4(position,1.); vN = normalize(normalMatrix * mat3(im) * normal);
  #else
    mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal);
  #endif
  #ifdef USE_INSTANCING_COLOR
    vC = instanceColor;
  #else
    vC = vec3(1.);
  #endif
  vV = -mv.xyz; gl_Position = projectionMatrix * mv;
}`;
const FRAG = `
uniform vec3 uColor; uniform float uOpacity; uniform float uGlow; uniform float uFill;
varying vec3 vN; varying vec3 vV; varying vec3 vC;
void main(){
  vec3 N = normalize(vN), V = normalize(vV);
  float f = pow(1. - abs(dot(N, V)), 2.3);
  vec3 base = uColor * vC;
  vec3 c = base * (uFill * 1.15 + 0.95 * f + uGlow) + vec3(.82,.92,1.) * pow(f, 6.) * .75;
  float a = uOpacity * (uFill + (1. - uFill) * f + uGlow * .7);
  gl_FragColor = vec4(c, clamp(a, 0., 1.));
}`;

/** fresnel glass: bright rims, see-through middle; works for Mesh and InstancedMesh (instanceColor tints it) */
export function glassMat(color = '#6f8cff', opacity = 1, fill = 0.14) {
  return new ShaderMaterial({
    uniforms: { uColor: { value: new Color(color) }, uOpacity: { value: opacity }, uGlow: { value: 0 }, uFill: { value: fill } },
    vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: AdditiveBlending
  });
}

let glowTex;
export function glowSprite(color = '#9ec1ff', size = 0.6, opacity = 0.9) {
  if (!glowTex) {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128); glowTex = new CanvasTexture(c); glowTex.colorSpace = SRGBColorSpace;
  }
  const s = new Sprite(new SpriteMaterial({ map: glowTex, color, transparent: true, depthWrite: false, blending: AdditiveBlending, opacity }));
  s.scale.setScalar(size); return s;
}

/** A canvas + scene + camera that only renders while on screen. update(dt,T) may return false to go idle. */
export function createView(canvas, { fov = 38, z = 9, dprCap = 2 } = {}) {
  let renderer;
  try { renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' }); }
  catch (e) { return null; }
  if (!renderer.getContext()) return null;
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene(), camera = new PerspectiveCamera(fov, 1, 0.1, 80); camera.position.set(0, 0, z);
  let w = 0, h = 0, raf = 0, visible = false, last = 0, T = 0, update = () => {}, dead = false;
  const resize = () => {
    const r = canvas.getBoundingClientRect(); if (!r.width || !r.height) return; w = r.width; h = r.height;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, dprCap)); renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix(); view.onResize && view.onResize(w, h); invalidate();
  };
  const frame = now => {
    raf = 0; if (dead) return;
    const dt = Math.min((now - last) / 1000 || 0.016, 0.05); last = now;
    if (reduce) { for (let i = 0; i < 30; i++) update(0.06, T += 0.06); } else { T += dt; }
    let keep = true;
    try { keep = reduce ? false : update(dt, T); renderer.render(scene, camera); } catch (err) { if (!view.warned) { view.warned = true; console.warn('3D scene error', err); } }
    if (visible && !document.hidden && keep !== false) raf = requestAnimationFrame(frame);
  };
  function invalidate() { if (!raf && visible && !dead) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) invalidate(); }, { rootMargin: '160px' }); io.observe(canvas);
  const ro = new ResizeObserver(resize); ro.observe(canvas);
  document.addEventListener('visibilitychange', invalidate);
  const view = {
    renderer, scene, camera, invalidate, onResize: null,
    setUpdate(fn) { update = fn; invalidate(); },
    get size() { return [w, h]; },
    project(v, out = [0, 0]) { const p = v.clone().project(camera); out[0] = (p.x * 0.5 + 0.5) * w; out[1] = (-p.y * 0.5 + 0.5) * h; out[2] = p.z; return out; },
    dispose() { dead = true; io.disconnect(); ro.disconnect(); renderer.dispose(); }
  };
  resize();
  return view;
}

/** HTML chips pinned to 3D points. */
export function labels(host, count) {
  const els = Array.from({ length: count }, () => { const e = document.createElement('span'); e.className = 'n3d'; e.setAttribute('aria-hidden', 'true'); host.appendChild(e); return e; });
  const tmp = [0, 0, 0];
  return {
    els,
    place(view, i, v3, text, dy = 22, alpha = 1) {
      const e = els[i]; if (text !== undefined && e.dataset.t !== text) { e.textContent = text; e.dataset.t = text; }
      view.project(v3, tmp); e.style.opacity = tmp[2] > 1 ? 0 : alpha; e.style.transform = `translate(${tmp[0].toFixed(1)}px,${(tmp[1] + dy).toFixed(1)}px) translate(-50%,0)`;
    },
    hide(i) { els[i].style.opacity = 0; }
  };
}
export { Vector3, Color };
