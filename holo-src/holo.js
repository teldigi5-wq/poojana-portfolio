/* Intro hologram: the real intro video is projected as a hologram that is revealed by scroll.
   Three.js scene (platform, light cone, orbit rings, particles) + custom GLSL (scanlines, slice distortion,
   chromatic fringe, rim glow, reveal sweep). Scroll progress drives everything (scrubbed, damped).
   Build: node scripts/build-holo.mjs  ->  assets/trace/holo.js */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Points, LineLoop, Color,
  PlaneGeometry, CylinderGeometry, LineSegments, RingGeometry, BufferGeometry, BufferAttribute,
  ShaderMaterial, MeshBasicMaterial, VideoTexture, LinearFilter, DoubleSide, AdditiveBlending, NoColorSpace,
} from 'three';

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

const HOLO_V = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const HOLO_F = `
precision highp float;
uniform sampler2D uTex; uniform float uTime, uReveal, uFade, uHasVideo;
varying vec2 vUv;
float hash(float n){ return fract(sin(n * 91.345) * 43758.5453); }
float sstep(float a, float b, float x){ float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
void main(){
  float y = vUv.y;
  float front = uReveal * 1.16 - 0.08;                    // reveal sweeps bottom -> top
  if (y > front) discard;
  float near = 1.0 - sstep(0.0, 0.07, front - y);          // 1 right at the sweep line
  float row = floor(y * 70.0);
  float burst = step(0.985, hash(floor(uTime * 3.0) + 7.0));
  float slice = (hash(row + floor(uTime * 9.0)) - 0.5) * (0.035 * near + 0.05 * burst + 0.004);
  vec2 uv = vec2(0.21 + (vUv.x + slice) * 0.58, y);
  float ca = 0.0035 + 0.012 * near + 0.01 * burst;
  vec3 c = vec3(texture2D(uTex, uv + vec2(ca, 0.0)).r, texture2D(uTex, uv).g, texture2D(uTex, uv - vec2(ca, 0.0)).b);
  if (uHasVideo < 0.5) c = vec3(0.05, 0.12, 0.25);
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(c, vec3(0.22, 0.5, 1.2) * (l * 1.5 + 0.06), 0.42);   // holographic blue tint
  c *= 1.0 + 0.5 * smoothstep(0.55, 1.0, l);
  float rowPx = gl_FragCoord.y;
  float scan = 0.86 + 0.14 * sin(rowPx * 2.4 + uTime * 6.0);
  float band = 0.94 + 0.06 * sin(y * 11.0 - uTime * 1.6);
  c *= scan * band * (0.97 + 0.03 * sin(uTime * 53.0));
  float dx = abs(vUv.x - 0.5);
  float mask = (1.0 - sstep(0.2, 0.5, dx)) * sstep(0.0, 0.34, y) * (1.0 - sstep(0.72, 0.99, y));
  mask *= 0.4 + 0.6 * sstep(0.02, 0.22, l);
  float rim = sstep(0.16, 0.34, dx) * (1.0 - sstep(0.34, 0.5, dx));
  c += vec3(0.1, 0.45, 1.0) * (rim * 0.4 + near * 0.8) * (0.5 + l);
  c += vec3(0.4, 0.8, 1.0) * near * 0.2;
  float a = mask * uFade * 0.96;
  gl_FragColor = vec4(c, a);
}`;

const CONE_V = `varying vec2 vUv; varying vec3 vP; void main(){ vUv = uv; vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const CONE_F = `
precision highp float;
uniform float uTime, uCone; varying vec2 vUv; varying vec3 vP;
void main(){
  float ang = atan(vP.z, vP.x);
  float streak = 0.55 + 0.45 * sin(ang * 46.0 + uTime * 0.6) * sin(ang * 13.0 - uTime * 0.4);
  float h = vUv.y;                                          // 0 at base, 1 at top
  float up = smoothstep(0.0, 1.0, uCone * 1.25 - h * 0.6);
  float a = pow(1.0 - h, 1.7) * streak * up * 0.34;
  a *= 0.85 + 0.15 * sin(uTime * 2.0 + h * 9.0);
  gl_FragColor = vec4(vec3(0.12, 0.3, 1.0) * 1.25, a);
}`;

const RING_V = `varying float vA; uniform float uTime; void main(){ vA = atan(position.z, position.x); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const RING_F = `
precision highp float; uniform float uTime, uOn; varying float vA;
void main(){
  float d = 0.5 + 0.5 * sin(vA * 3.0 - uTime * 1.3);
  float a = (0.15 + 0.85 * d * d) * uOn;
  gl_FragColor = vec4(vec3(0.3, 0.5, 1.0) * 1.5, a);
}`;

const FLOOR_F = `
precision highp float; uniform float uTime, uOn; varying vec2 vUv;
void main(){
  vec2 p = vUv - 0.5; float r = length(p) * 2.0;
  float glow = pow(max(0.0, 1.0 - r), 2.2);
  float ring = smoothstep(0.03, 0.0, abs(fract(r * 3.0 - uTime * 0.25) - 0.5) - 0.46) * (1.0 - r);
  float a = (glow * 0.9 + ring * 0.5) * uOn;
  gl_FragColor = vec4(vec3(0.1, 0.22, 1.0) * 1.5, a);
}`;

const STREAK_V = `
attribute vec4 aS;   // x, z, h, seed
attribute vec2 aQ;   // side (-1|1), t (0 base | 1 tip)
uniform float uTime, uOn; varying float vT; varying float vA;
void main(){
  float p = fract(uTime * (0.05 + aS.w * 0.08) + aS.w * 7.0);
  float base = -2.1 + p * 2.9;
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 pos = vec3(aS.x, base + aQ.y * aS.z, aS.y) + right * aQ.x * 0.012;
  vT = aQ.y; vA = sin(p * 3.14159) * uOn * (0.35 + 0.65 * aQ.y);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
}`;
const STREAK_F = `precision highp float; varying float vT; varying float vA; void main(){ vec3 col = mix(vec3(0.15, 0.3, 1.0), vec3(1.0, 0.25, 0.9), smoothstep(0.35, 1.0, vT)); gl_FragColor = vec4(col * 1.6, vA); }`;
const GLASS_V = `varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vY = position.y; gl_Position = projectionMatrix * mv; }`;
const GLASS_F = `precision highp float; uniform float uOn; varying vec3 vN; varying vec3 vV; varying float vY; void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2); float a = (0.07 + f * 0.6) * uOn * (0.6 + 0.4 * smoothstep(-0.5, 0.5, vY)); gl_FragColor = vec4(vec3(0.2, 0.4, 1.0) * 1.5, a); }`;

const PART_V = `
attribute float aSeed; uniform float uTime, uSize, uOn; varying float vA; varying float vS;
void main(){
  float t = fract(aSeed * 7.13 + uTime * (0.05 + aSeed * 0.07));
  vec3 p = position; p.y = -2.1 + t * 4.4;
  float rad = mix(0.9, 1.9, t); p.x *= rad; p.z *= rad;
  p.x += sin(uTime * 0.7 + aSeed * 40.0) * 0.05;
  vA = sin(t * 3.14159) * uOn; vS = aSeed;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uSize * (0.5 + aSeed) * (3.5 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const PART_F = `precision highp float; varying float vA; varying float vS; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, d) * vA * 0.5; vec3 col = vS > 0.78 ? vec3(0.2, 1.0, 0.85) : vec3(0.45, 0.65, 1.0); gl_FragColor = vec4(col, a); }`;

export function mountHolo(sec, opts = {}) {
  const stage = sec.querySelector('#holoStage');
  const video = sec.querySelector('#clip');
  const hud = sec.querySelector('#holoHud');
  const cue = sec.querySelector('#holoCue');
  const btn = sec.querySelector('#clipBtn');
  if (!stage || !video) return null;

  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { return null; }
  if (!renderer.getContext()) return null;
  const small = matchMedia('(max-width: 700px)').matches;
  renderer.setClearColor(0x000000, 0);
  stage.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const scene = new Scene();
  const camera = new PerspectiveCamera(40, 1, 0.1, 60);
  const world = new Group(); scene.add(world);

  // video texture (the real intro film)
  const tex = new VideoTexture(video); tex.minFilter = LinearFilter; tex.magFilter = LinearFilter; tex.colorSpace = NoColorSpace; tex.generateMipmaps = false;
  const U = { uTime: { value: 0 }, uReveal: { value: 0 }, uFade: { value: 1 }, uTex: { value: tex }, uHasVideo: { value: 0 } };
  const holo = new Mesh(new PlaneGeometry(4.3, 4.3 * 900 / 896, 1, 1), new ShaderMaterial({ uniforms: U, vertexShader: HOLO_V, fragmentShader: HOLO_F, transparent: true, depthWrite: false }));
  holo.position.y = 0.15; holo.renderOrder = 3; world.add(holo);

  // projector platform
  const plat = new Group(); plat.position.y = -2.3; world.add(plat);
  const base = new Mesh(new CylinderGeometry(1.25, 1.5, 0.22, 64), new MeshBasicMaterial({ color: new Color(0x0a1020) })); plat.add(base);
  const topRing = new Mesh(new RingGeometry(0.95, 1.22, 96), new MeshBasicMaterial({ color: new Color(0x3b6bff), transparent: true, opacity: 0.9, blending: AdditiveBlending, depthWrite: false })); topRing.rotation.x = -Math.PI / 2; topRing.position.y = 0.125; plat.add(topRing);
  const lens = new Mesh(new RingGeometry(0, 0.9, 64), new MeshBasicMaterial({ color: new Color(0x1f3cff), transparent: true, opacity: 0.55, blending: AdditiveBlending, depthWrite: false })); lens.rotation.x = -Math.PI / 2; lens.position.y = 0.13; plat.add(lens);
  const edge = new Mesh(new CylinderGeometry(1.5, 1.5, 0.03, 64, 1, true), new MeshBasicMaterial({ color: new Color(0x2f58ff), transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false })); edge.position.y = -0.1; plat.add(edge);

  // glass podium (reference look): translucent cylinder with a bright rim, concentric rings, dotted ring
  const glassU = { uOn: { value: 0 } };
  const glass = new Mesh(new CylinderGeometry(1.0, 1.0, 0.85, 72, 1, true), new ShaderMaterial({ uniforms: glassU, vertexShader: GLASS_V, fragmentShader: GLASS_F, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide }));
  glass.position.y = 0.55; plat.add(glass);
  const rim = new Mesh(new RingGeometry(0.97, 1.0, 96), new MeshBasicMaterial({ color: new Color(0x6f9bff), transparent: true, opacity: 0.0, blending: AdditiveBlending, depthWrite: false, side: DoubleSide })); rim.rotation.x = -Math.PI / 2; rim.position.y = 0.97; plat.add(rim);
  const thin = [];
  [1.32, 1.62, 1.9].forEach(r => { const m = new Mesh(new RingGeometry(r - 0.012, r + 0.012, 128), new MeshBasicMaterial({ color: new Color(0x5a8bff), transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, side: DoubleSide })); m.rotation.x = -Math.PI / 2; m.position.y = 0.14; plat.add(m); thin.push(m); });
  const dotN = 160, dp = new Float32Array(dotN * 3), dseed = new Float32Array(dotN);
  for (let i = 0; i < dotN; i++) { const a = (i / dotN) * Math.PI * 2; dp[i * 3] = Math.cos(a) * 1.75; dp[i * 3 + 1] = 0.16; dp[i * 3 + 2] = Math.sin(a) * 1.75; dseed[i] = 0.2 + (i % 5) * 0.2; }
  const dg = new BufferGeometry(); dg.setAttribute('position', new BufferAttribute(dp, 3)); dg.setAttribute('aSeed', new BufferAttribute(dseed, 1));
  const dotU = { uTime: U.uTime, uSize: { value: 11 }, uOn: { value: 0 } };
  const dots = new Points(dg, new ShaderMaterial({ uniforms: dotU, vertexShader: `attribute float aSeed; uniform float uSize; varying float vA; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vA = 0.9; gl_PointSize = uSize * (3.5 / -mv.z); gl_Position = projectionMatrix * mv; }`, fragmentShader: `precision highp float; uniform float uOn; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.6, 0.8, 1.0), smoothstep(1.0, 0.0, d) * vA * uOn); }`, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  dots.frustumCulled = false; plat.add(dots);

  // neon streaks rising around the podium (magenta tips, blue bases)
  const SN = small ? 22 : 34, sPos = [], sQ = [], sIdx = [];
  for (let i = 0; i < SN; i++) {
    const a = Math.random() * Math.PI * 2, r = 1.55 + Math.random() * 0.85, h = 0.45 + Math.random() * 1.5, sd = Math.random();
    const x = Math.cos(a) * r, z = Math.sin(a) * r, b = i * 4;
    [[-1, 0], [1, 0], [-1, 1], [1, 1]].forEach(q => { sPos.push(x, z, h, sd); sQ.push(q[0], q[1]); });
    sIdx.push(b, b + 1, b + 2, b + 2, b + 1, b + 3);
  }
  const sg = new BufferGeometry(); sg.setAttribute('aS', new BufferAttribute(new Float32Array(sPos), 4)); sg.setAttribute('aQ', new BufferAttribute(new Float32Array(sQ), 2)); sg.setAttribute('position', new BufferAttribute(new Float32Array(SN * 12), 3)); sg.setIndex(sIdx);
  const streakU = { uTime: U.uTime, uOn: { value: 0 } };
  const streaks = new Mesh(sg, new ShaderMaterial({ uniforms: streakU, vertexShader: STREAK_V, fragmentShader: STREAK_F, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide }));
  streaks.frustumCulled = false; streaks.renderOrder = 4; world.add(streaks);

  // light rays running across the floor toward the podium
  const rp = [];
  for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2 + 0.3; rp.push(Math.cos(a) * 2.3, 0, Math.sin(a) * 2.3, Math.cos(a) * 6.5, 0, Math.sin(a) * 6.5); }
  const rg = new BufferGeometry(); rg.setAttribute('position', new BufferAttribute(new Float32Array(rp), 3));
  const rayMat = new ShaderMaterial({ uniforms: { uOn: { value: 0 } }, vertexShader: `varying float vD; void main(){ vD = length(position.xz); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`, fragmentShader: `precision highp float; uniform float uOn; varying float vD; void main(){ gl_FragColor = vec4(vec3(0.15,0.3,1.0), (1.0 - smoothstep(2.3, 6.5, vD)) * 0.45 * uOn); }`, transparent: true, depthWrite: false, blending: AdditiveBlending });
  const rays = new Group(); rays.position.y = -2.18; rays.add(new (LineSegments)(rg, rayMat)); world.add(rays);

  const floorMat = new ShaderMaterial({ uniforms: { uTime: U.uTime, uOn: { value: 0 } }, vertexShader: HOLO_V, fragmentShader: FLOOR_F, transparent: true, depthWrite: false, blending: AdditiveBlending });
  const floor = new Mesh(new PlaneGeometry(7.5, 7.5), floorMat); floor.rotation.x = -Math.PI / 2; floor.position.y = -2.17; floor.renderOrder = 1; world.add(floor);

  // light cone
  const coneMat = new ShaderMaterial({ uniforms: { uTime: U.uTime, uCone: { value: 0 } }, vertexShader: CONE_V, fragmentShader: CONE_F, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide });
  const cone = new Mesh(new CylinderGeometry(2.0, 0.95, 4.6, 96, 1, true), coneMat); cone.position.y = 0.0; cone.renderOrder = 2; world.add(cone);

  // orbit rings
  const ringU = { uTime: U.uTime, uOn: { value: 0 } };
  const rings = new Group(); world.add(rings); rings.position.y = -0.1;
  const mkRing = (rx, rz, tilt, spin) => {
    const N = 256, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { const a = (i / N) * Math.PI * 2; pos[i * 3] = Math.cos(a) * rx; pos[i * 3 + 1] = 0; pos[i * 3 + 2] = Math.sin(a) * rz; }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(pos, 3));
    const l = new LineLoop(g, new ShaderMaterial({ uniforms: ringU, vertexShader: RING_V, fragmentShader: RING_F, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    l.rotation.x = tilt; l.userData.spin = spin; l.renderOrder = 4; rings.add(l); return l;
  };
  const ringList = [mkRing(3.3, 1.05, 0.32, 0.22), mkRing(3.0, 0.9, 0.2, -0.17), mkRing(3.7, 1.3, 0.44, 0.12), mkRing(2.6, 0.75, 0.1, -0.28)];
  ringList[0].rotation.z = 0.08; ringList[1].rotation.z = -0.12; ringList[2].rotation.z = 0.04;

  // particles in the beam
  const PN = small ? 90 : 170, pp = new Float32Array(PN * 3), ps = new Float32Array(PN);
  for (let i = 0; i < PN; i++) { const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()); pp[i * 3] = Math.cos(a) * r; pp[i * 3 + 1] = 0; pp[i * 3 + 2] = Math.sin(a) * r; ps[i] = Math.random(); }
  const pg = new BufferGeometry(); pg.setAttribute('position', new BufferAttribute(pp, 3)); pg.setAttribute('aSeed', new BufferAttribute(ps, 1));
  const partU = { uTime: U.uTime, uSize: { value: 26 }, uOn: { value: 0 } };
  const pts = new Points(pg, new ShaderMaterial({ uniforms: partU, vertexShader: PART_V, fragmentShader: PART_F, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  pts.frustumCulled = false; pts.renderOrder = 5; world.add(pts);

  // layout
  let W = 0, H = 0, aspect = 1;
  const resize = () => {
    const r = stage.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height); aspect = W / H;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.6 : 2)); renderer.setSize(W, H, false);
    renderer.domElement.style.width = W + 'px'; renderer.domElement.style.height = H + 'px';
    camera.aspect = aspect;
    const t = Math.tan((camera.fov * Math.PI) / 360);
    const wide = aspect >= 0.8;
    const distV = (wide ? 3.85 : 3.5) / t, distH = 3.0 / (t * aspect);
    camera.userData.dist = Math.max(distV, distH);
    camera.userData.shift = wide ? 0.4 : -0.05;
    camera.updateProjectionMatrix();
  };
  resize(); addEventListener('resize', resize);
  if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);

  // video control
  video.preload = 'auto'; video.muted = true; video.playsInline = true; video.loop = false;
  let userPaused = false, hudOn = false, wasPlaying = false;
  const setHud = on => { if (on === hudOn) return; hudOn = on; hud && hud.classList.toggle('on', on); };
  const syncBtn = () => { if (!btn) return; btn.setAttribute('aria-pressed', String(video.paused)); btn.setAttribute('aria-label', video.paused ? 'Play the intro video' : 'Pause the intro video'); btn.firstElementChild.textContent = video.paused ? '▶' : '❚❚'; };
  if (btn) btn.addEventListener('click', () => { if (video.paused) { userPaused = false; if (video.ended) video.currentTime = 0; video.play().catch(() => {}); } else { userPaused = true; video.pause(); } syncBtn(); });
  video.addEventListener('pause', syncBtn); video.addEventListener('play', syncBtn);
  video.addEventListener('timeupdate', () => { if (video.currentTime >= 1.5 && U.uReveal.value > 0.85) setHud(true); });

  // scroll state
  let target = 0, sp = 0, inView = true, last = 0, raf = 0, px = 0, tpx = 0;
  const measure = () => {
    const r = sec.getBoundingClientRect(), vh = innerHeight, total = Math.max(1, sec.offsetHeight - vh);
    target = clamp((-r.top + vh * 0.3) / (total + vh * 0.3));
  };
  addEventListener('scroll', measure, { passive: true }); measure(); sp = target;
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; document.documentElement.classList.toggle('holo-view', inView); if (inView) kick(); else { video.pause(); } }, { rootMargin: '120px 0px' }).observe(sec);
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); else kick(); });
  addEventListener('pointermove', e => { if (e.pointerType === 'mouse') tpx = (e.clientX / innerWidth - 0.5) * 2; }, { passive: true });

  const frame = t => {
    raf = 0; if (!inView || document.hidden) return;
    const dt = Math.min((t - last) / 1000 || 0.016, 0.05); last = t;
    sp += (target - sp) * (1 - Math.exp(-dt * 7)); px += (tpx - px) * (1 - Math.exp(-dt * 3));
    const p = sp;
    const on = sstep(0.0, 0.2, p), coneP = sstep(0.04, 0.3, p), reveal = sstep(0.16, 0.58, p);
    U.uTime.value = t / 1000; U.uReveal.value = reveal; U.uHasVideo.value = video.readyState >= 2 ? 1 : 0;
    floorMat.uniforms.uOn.value = on; coneMat.uniforms.uCone.value = coneP; ringU.uOn.value = sstep(0.1, 0.5, p); partU.uOn.value = sstep(0.08, 0.4, p);
    glassU.uOn.value = on; dotU.uOn.value = on; streakU.uOn.value = sstep(0.04, 0.35, p); rayMat.uniforms.uOn.value = on; rim.material.opacity = 0.9 * on; thin.forEach((m, i) => { m.material.opacity = (0.55 - i * 0.12) * on; });
    topRing.material.opacity = 0.15 + 0.8 * on; lens.material.opacity = 0.1 + 0.55 * on; edge.material.opacity = 0.2 + 0.7 * on;
    ringList.forEach(l => { l.rotation.y += l.userData.spin * dt * (0.4 + 1.6 * sstep(0.1, 0.6, p)); });
    const push = 1 - 0.1 * sstep(0.1, 0.7, p);
    camera.position.set(px * 0.35, 0.35 + camera.userData.shift, camera.userData.dist * push);
    camera.lookAt(px * 0.1, 0.0 + camera.userData.shift, 0);
    holo.rotation.y = px * 0.06; holo.scale.setScalar(0.985 + 0.015 * reveal);
    // playback is cued by the reveal
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
