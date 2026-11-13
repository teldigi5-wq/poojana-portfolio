/* Intro hologram: a clean, luminous projection of the real intro video, revealed by scroll.
   The film is shipped as colour | matte side by side (assets/trace/intro-holo.mp4), so only the person is projected.
   Three.js: podium, soft light cone, floor glow. Custom GLSL: reveal sweep, scanlines + fine grid, slice distortion,
   chromatic fringe, matte-edge rim glow. Scroll scrubs everything (damped).
   Build: node scripts/build-holo.mjs  ->  assets/trace/holo.js */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Points, Color,
  PlaneGeometry, CylinderGeometry, RingGeometry, BufferGeometry, BufferAttribute,
  ShaderMaterial, MeshBasicMaterial, VideoTexture, LinearFilter, DoubleSide, NormalBlending, AdditiveBlending, NoColorSpace,
} from 'three';

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

const VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

const HOLO_F = `
precision highp float;
uniform sampler2D uTex; uniform vec2 uPx; uniform float uTime, uReveal, uFade, uHasVideo;
varying vec2 vUv;
float hash(float n){ return fract(sin(n * 91.345) * 43758.5453); }
float sstep(float a, float b, float x){ float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
vec3 colAt(vec2 uv){ return texture2D(uTex, vec2(clamp(uv.x, 0.002, 0.498), uv.y)).rgb; }
float matAt(vec2 uv){ return texture2D(uTex, vec2(0.5 + clamp(uv.x, 0.002, 0.498), uv.y)).r; }
void main(){
  float y = vUv.y;
  float front = uReveal * 1.12 - 0.06;                       // reveal sweeps bottom -> top
  if (y > front) discard;
  float near = 1.0 - sstep(0.0, 0.06, front - y);
  float row = floor(y * 80.0);
  float burst = step(0.988, hash(floor(uTime * 3.0) + 7.0));
  float slice = (hash(row + floor(uTime * 9.0)) - 0.5) * (0.03 * near + 0.04 * burst + 0.002);
  vec2 uv = vec2(vUv.x * 0.5 + slice * 0.5, y);
  float ca = 0.0016 + 0.006 * near + 0.006 * burst;
  vec3 c = vec3(colAt(uv + vec2(ca, 0.0)).r, colAt(uv).g, colAt(uv - vec2(ca, 0.0)).b);
  float m = matAt(uv);
  if (uHasVideo < 0.5) { c = vec3(0.2); m = smoothstep(0.0, 0.3, 0.5 - abs(vUv.x - 0.5)) * 0.4; }
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  // luminous blue: deep blue in the shadows, ice blue in the highlights
  vec3 holo = mix(vec3(0.16, 0.38, 0.92), vec3(0.78, 0.92, 1.0), clamp(l * 2.4, 0.0, 1.0));
  holo = mix(holo, c * vec3(0.8, 1.0, 1.4) + 0.12, 0.3);
  // matte edge -> rim light
  vec2 e = vec2(0.03, 0.03 * 1.07);
  float mx = 0.25 * (matAt(uv + vec2(e.x, 0.0)) + matAt(uv - vec2(e.x, 0.0)) + matAt(uv + vec2(0.0, e.y)) + matAt(uv - vec2(0.0, e.y)));
  float rim = clamp((m - mx) * 4.0 + (1.0 - m) * 0.0, 0.0, 1.0) * m;
  float inner = clamp((mx < m ? (m - mx) : 0.0) * 5.0, 0.0, 1.0);
  holo += vec3(0.3, 0.65, 1.0) * (inner * 0.32 + rim * 0.12);
  // scanlines + fine grid (like the reference's woven shirt)
  float px = gl_FragCoord.y;
  float scan = 0.93 + 0.07 * sin(px * 2.2 + uTime * 5.0);
  float grid = 0.975 + 0.025 * sin(vUv.x * 300.0) * sin(y * 240.0 + uTime * 0.8);
  float band = 0.95 + 0.05 * sin(y * 9.0 - uTime * 1.4);
  holo *= scan * grid * band * (0.98 + 0.02 * sin(uTime * 47.0));
  holo += vec3(0.3, 0.6, 1.0) * near * 0.55;
  float fadeBottom = sstep(0.0, 0.3, y);                    // dissolves into the beam
  float a = m * uFade * fadeBottom * (0.8 + 0.2 * l) + near * m * 0.2;
  gl_FragColor = vec4(holo, clamp(a, 0.0, 1.0));
}`;

const CONE_F = `
precision highp float;
uniform float uTime, uCone; varying vec2 vUv;
void main(){
  float h = vUv.y;                                          // 0 at base, 1 at top
  float up = smoothstep(0.0, 1.0, uCone * 1.3 - h * 0.7);
  float a = pow(1.0 - h, 1.2) * up * 0.42;
  a *= 0.9 + 0.1 * sin(uTime * 1.6 + h * 7.0);
  gl_FragColor = vec4(vec3(0.28, 0.58, 1.0), a);
}`;
const CONE_V = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

const GLOW_F = `
precision highp float; uniform float uOn, uTime; varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p);
  float core = pow(max(0.0, 1.0 - r), 2.4);
  float ring = smoothstep(0.012, 0.0, abs(r - 0.62)) * 0.5 + smoothstep(0.012, 0.0, abs(r - 0.84)) * 0.35;
  float a = (core * 0.85 + ring * (0.8 + 0.2 * sin(uTime * 1.5))) * uOn;
  gl_FragColor = vec4(vec3(0.2, 0.5, 1.0), clamp(a, 0.0, 1.0));
}`;

const PART_V = `
attribute float aSeed; uniform float uTime, uSize, uOn; varying float vA;
void main(){
  float t = fract(aSeed * 7.13 + uTime * (0.04 + aSeed * 0.05));
  vec3 p = position; p.y = -2.1 + t * 4.0;
  float rad = mix(0.7, 1.5, t); p.x *= rad; p.z *= rad;
  vA = sin(t * 3.14159) * uOn;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uSize * (0.5 + aSeed) * (3.5 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const PART_F = `precision highp float; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.35, 0.65, 1.0), smoothstep(1.0, 0.0, d) * vA * 0.55); }`;

export function mountHolo(sec) {
  const stage = sec.querySelector('#holoStage');
  const src = sec.dataset.holoSrc;
  const hud = sec.querySelector('#holoHud');
  const cue = sec.querySelector('#holoCue');
  const btn = sec.querySelector('#clipBtn');
  if (!stage || !src) return null;

  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { return null; }
  if (!renderer.getContext()) return null;
  const small = matchMedia('(max-width: 700px)').matches;
  renderer.setClearColor(0x000000, 0);
  stage.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  // the projected film (colour | matte). The visible <video id="clip"> stays as the plain fallback.
  const video = document.createElement('video');
  video.muted = true; video.playsInline = true; video.loop = false; video.preload = 'auto'; video.setAttribute('aria-hidden', 'true');
  video.style.cssText = 'position:absolute;left:0;top:0;width:2px;height:2px;opacity:.01;pointer-events:none';
  video.src = src; stage.appendChild(video);

  const scene = new Scene();
  const camera = new PerspectiveCamera(40, 1, 0.1, 60);
  const world = new Group(); scene.add(world);

  const tex = new VideoTexture(video); tex.minFilter = LinearFilter; tex.magFilter = LinearFilter; tex.colorSpace = NoColorSpace; tex.generateMipmaps = false;
  const U = { uTime: { value: 0 }, uReveal: { value: 0 }, uFade: { value: 1 }, uTex: { value: tex }, uHasVideo: { value: 0 }, uPx: { value: [1, 1] } };
  const PH = 4.3, PW = PH * 640 / 600;
  const holo = new Mesh(new PlaneGeometry(PW, PH), new ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: HOLO_F, transparent: true, depthWrite: false, blending: NormalBlending }));
  holo.position.y = -2.1 + PH / 2; holo.renderOrder = 3; world.add(holo);

  // podium: dark glossy disc, glowing blue rings, bright lens
  const plat = new Group(); plat.position.y = -2.3; world.add(plat);
  plat.add(new Mesh(new CylinderGeometry(1.32, 1.5, 0.2, 80), new MeshBasicMaterial({ color: new Color(0x0a1230) })));
  const mkRing = (a, b, color, y, op) => { const m = new Mesh(new RingGeometry(a, b, 128), new MeshBasicMaterial({ color: new Color(color), transparent: true, opacity: 0, depthWrite: false, side: DoubleSide })); m.rotation.x = -Math.PI / 2; m.position.y = y; m.userData.op = op; plat.add(m); return m; };
  const pr = [mkRing(1.18, 1.3, 0x2f7bff, 0.112, 1), mkRing(0.98, 1.04, 0x7fb6ff, 0.114, 0.9), mkRing(0.62, 0.66, 0x9fd0ff, 0.116, 0.8)];
  const lens = new Mesh(new RingGeometry(0, 0.95, 80), new MeshBasicMaterial({ color: new Color(0x2a6cff), transparent: true, opacity: 0, depthWrite: false })); lens.rotation.x = -Math.PI / 2; lens.position.y = 0.105; plat.add(lens);
  const edge = new Mesh(new CylinderGeometry(1.5, 1.5, 0.025, 80, 1, true), new MeshBasicMaterial({ color: new Color(0x3b8cff), transparent: true, opacity: 0, depthWrite: false })); edge.position.y = 0.0; plat.add(edge);

  const glowU = { uOn: { value: 0 }, uTime: U.uTime };
  const glow = new Mesh(new PlaneGeometry(8.5, 8.5), new ShaderMaterial({ uniforms: glowU, vertexShader: VERT, fragmentShader: GLOW_F, transparent: true, depthWrite: false, blending: NormalBlending }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = -2.19; glow.renderOrder = 1; world.add(glow);

  const coneU = { uTime: U.uTime, uCone: { value: 0 } };
  const cone = new Mesh(new CylinderGeometry(1.9, 0.95, 4.4, 96, 1, true), new ShaderMaterial({ uniforms: coneU, vertexShader: CONE_V, fragmentShader: CONE_F, transparent: true, depthWrite: false, blending: NormalBlending, side: DoubleSide }));
  cone.position.y = -0.1; cone.renderOrder = 2; world.add(cone);

  const PN = small ? 50 : 90, pp = new Float32Array(PN * 3), ps = new Float32Array(PN);
  for (let i = 0; i < PN; i++) { const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()); pp[i * 3] = Math.cos(a) * r; pp[i * 3 + 2] = Math.sin(a) * r; ps[i] = Math.random(); }
  const pg = new BufferGeometry(); pg.setAttribute('position', new BufferAttribute(pp, 3)); pg.setAttribute('aSeed', new BufferAttribute(ps, 1));
  const partU = { uTime: U.uTime, uSize: { value: 18 }, uOn: { value: 0 } };
  const pts = new Points(pg, new ShaderMaterial({ uniforms: partU, vertexShader: PART_V, fragmentShader: PART_F, transparent: true, depthWrite: false, blending: NormalBlending }));
  pts.frustumCulled = false; pts.renderOrder = 5; world.add(pts);

  let W = 0, H = 0, aspect = 1;
  const resize = () => {
    const r = stage.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height); aspect = W / H;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.6 : 2)); renderer.setSize(W, H, false);
    renderer.domElement.style.width = W + 'px'; renderer.domElement.style.height = H + 'px';
    camera.aspect = aspect;
    const t = Math.tan((camera.fov * Math.PI) / 360), wide = aspect >= 0.8;
    camera.userData.dist = Math.max((wide ? 4.0 : 3.6) / t, 3.0 / (t * aspect));
    camera.userData.shift = wide ? 0.22 : -0.05;
    camera.updateProjectionMatrix();
  };
  resize(); addEventListener('resize', resize);
  if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);

  let userPaused = false, hudOn = false;
  const setHud = on => { if (on === hudOn) return; hudOn = on; hud && hud.classList.toggle('on', on); };
  const syncBtn = () => { if (!btn) return; btn.setAttribute('aria-pressed', String(video.paused)); btn.setAttribute('aria-label', video.paused ? 'Play the intro video' : 'Pause the intro video'); btn.firstElementChild.textContent = video.paused ? '▶' : '❚❚'; };
  if (btn) btn.addEventListener('click', () => { if (video.paused) { userPaused = false; if (video.ended) video.currentTime = 0; video.play().catch(() => {}); } else { userPaused = true; video.pause(); } syncBtn(); });
  video.addEventListener('pause', syncBtn); video.addEventListener('play', syncBtn);
  video.addEventListener('timeupdate', () => { if (video.currentTime >= 1.5 && U.uReveal.value > 0.85) setHud(true); });

  let target = 0, sp = 0, inView = true, last = 0, raf = 0, px = 0, tpx = 0;
  const measure = () => { const r = sec.getBoundingClientRect(), vh = innerHeight, total = Math.max(1, sec.offsetHeight - vh); target = clamp((-r.top + vh * 0.3) / (total + vh * 0.3)); };
  addEventListener('scroll', measure, { passive: true }); measure(); sp = target;
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; document.documentElement.classList.toggle('holo-view', inView); if (inView) kick(); else video.pause(); }, { rootMargin: '120px 0px' }).observe(sec);
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); else kick(); });
  addEventListener('pointermove', e => { if (e.pointerType === 'mouse') tpx = (e.clientX / innerWidth - 0.5) * 2; }, { passive: true });

  const frame = t => {
    raf = 0; if (!inView || document.hidden) return;
    const dt = Math.min((t - last) / 1000 || 0.016, 0.05); last = t;
    sp += (target - sp) * (1 - Math.exp(-dt * 7)); px += (tpx - px) * (1 - Math.exp(-dt * 3));
    const p = sp, on = sstep(0.0, 0.2, p), coneP = sstep(0.04, 0.3, p), reveal = sstep(0.16, 0.58, p);
    U.uTime.value = t / 1000; U.uReveal.value = reveal; U.uHasVideo.value = video.readyState >= 2 ? 1 : 0;
    glowU.uOn.value = on; coneU.uCone.value = coneP; partU.uOn.value = sstep(0.1, 0.45, p);
    pr.forEach(m => { m.material.opacity = m.userData.op * (0.15 + 0.85 * on); }); lens.material.opacity = 0.12 + 0.3 * on; edge.material.opacity = 0.2 + 0.7 * on;
    const push = 1 - 0.07 * sstep(0.1, 0.7, p);
    camera.position.set(px * 0.3, 0.3 + camera.userData.shift, camera.userData.dist * push);
    camera.lookAt(px * 0.08, camera.userData.shift, 0);
    holo.rotation.y = px * 0.05; holo.scale.setScalar(0.985 + 0.015 * reveal);
    if (reveal > 0.55 && !userPaused) { if (video.paused) video.play().catch(() => {}); }
    else if (reveal < 0.2) { if (!video.paused) video.pause(); if (video.currentTime > 0) { try { video.currentTime = 0; } catch (_) {} } setHud(false); }
    if (cue) cue.style.opacity = String(1 - sstep(0.04, 0.22, p));
    sec.style.setProperty('--hp', p.toFixed(3));
    renderer.render(scene, camera);
    if (inView) raf = requestAnimationFrame(frame);
  };
  function kick() { if (!raf && inView && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  kick(); syncBtn();
  return { destroy() { cancelAnimationFrame(raf); renderer.dispose(); } };
}
