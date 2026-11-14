/* Intro hologram: the real intro video projected as a luminous hologram on a dark studio stage, revealed by scroll.
   The film is shipped as colour | matte side by side (assets/trace/intro-holo.mp4), so only the person is projected.
   Three.js: machined podium with glowing rings, volumetric light cone, orbiting rings, rising particles, glossy floor with
   reflections. Custom GLSL: reveal sweep, scanlines, slice glitch, chromatic fringe, matte-edge rim glow. Scroll scrubs everything.
   Build: node scripts/build-holo.mjs  ->  assets/trace/holo.js */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Points, Color,
  PlaneGeometry, CylinderGeometry, RingGeometry, TorusGeometry, BufferGeometry, BufferAttribute, LatheGeometry, SphereGeometry, BoxGeometry, PMREMGenerator, MeshStandardMaterial, Vector2, BackSide, CanvasTexture, RepeatWrapping,
  ShaderMaterial, MeshBasicMaterial, VideoTexture, LinearFilter, DoubleSide, NormalBlending, AdditiveBlending, NoColorSpace,
} from 'three';

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const FLOOR = -2.44;

const VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

const BG_V = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`;
const BG_F = `
precision highp float; varying vec2 vUv; uniform float uOn;
void main(){
  float y = vUv.y;                                            // 1 at the top of the frame
  vec3 top = vec3(0.006, 0.012, 0.035), mid = vec3(0.012, 0.035, 0.1), low = vec3(0.02, 0.055, 0.15);
  vec3 c = mix(low, mid, smoothstep(0.0, 0.55, y)); c = mix(c, top, smoothstep(0.45, 1.0, y));
  c += vec3(0.0, 0.03, 0.09) * smoothstep(0.34, 0.5, y) * (1.0 - smoothstep(0.5, 0.7, y)) * 0.6;   // faint sheen where the floor meets the dark
  float v = length((vUv - vec2(0.5, 0.42)) * vec2(1.0, 1.25));
  c *= 1.0 - 0.45 * smoothstep(0.45, 1.0, v);                 // vignette
  gl_FragColor = vec4(c, 1.0);
}`;

const HOLO_F = `
precision highp float;
uniform sampler2D uTex; uniform float uTime, uReveal, uFade, uHasVideo, uMir;
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
  float row = floor(y * 90.0);
  float burst = step(0.985, hash(floor(uTime * 3.0) + 7.0));
  float slice = (hash(row + floor(uTime * 9.0)) - 0.5) * (0.035 * near + 0.05 * burst + 0.0025);
  vec2 uv = vec2(vUv.x * 0.5 + slice * 0.5, y);
  float ca = 0.002 + 0.007 * near + 0.007 * burst;
  vec3 c = vec3(colAt(uv + vec2(ca, 0.0)).r, colAt(uv).g, colAt(uv - vec2(ca, 0.0)).b);
  float m = matAt(uv);
  if (uHasVideo < 0.5) { c = vec3(0.25); m = smoothstep(0.0, 0.3, 0.5 - abs(vUv.x - 0.5)) * 0.4; }
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  float lt = clamp(l * 2.1, 0.0, 1.0);
  // light, not paint: deep blue in the shadows, electric blue in the mids, ice white in the highlights
  vec3 holo = mix(vec3(0.03, 0.2, 0.85), vec3(0.16, 0.6, 1.0), smoothstep(0.0, 0.55, lt));
  holo = mix(holo, vec3(0.86, 0.97, 1.0), smoothstep(0.5, 1.0, lt));
  holo = mix(holo, c * vec3(0.5, 0.95, 1.6) + 0.04, 0.2);
  vec2 e = vec2(0.03, 0.03 * 1.07);
  float mx = 0.25 * (matAt(uv + vec2(e.x, 0.0)) + matAt(uv - vec2(e.x, 0.0)) + matAt(uv + vec2(0.0, e.y)) + matAt(uv - vec2(0.0, e.y)));
  float rim = clamp((m - mx) * 4.0, 0.0, 1.0) * m;           // matte edge -> bright rim light
  float inner = clamp((mx < m ? (m - mx) : 0.0) * 5.0, 0.0, 1.0);
  holo += vec3(0.25, 0.7, 1.0) * (inner * 0.55 + rim * 0.4);
  float px = gl_FragCoord.y;
  float scan = 0.8 + 0.2 * sin(px * 2.4 + uTime * 6.0);
  float grid = 0.95 + 0.05 * sin(vUv.x * 320.0) * sin(y * 260.0 + uTime * 0.8);
  float band = 0.92 + 0.08 * sin(y * 8.0 - uTime * 1.5);
  holo *= scan * grid * band * (0.97 + 0.03 * sin(uTime * 47.0)) * 1.18;
  holo += vec3(0.3, 0.75, 1.0) * near * 0.7;
  float fadeBottom = sstep(0.0, 0.3, y);                    // dissolves into the beam
  float a = m * uFade * fadeBottom * (0.5 + 0.5 * pow(lt, 0.85)) + near * m * 0.3 + rim * 0.25 * fadeBottom;
  if (uMir > 0.5) { a *= (1.0 - sstep(0.05, 0.65, y)) * 0.5; }
  if (a < 0.04) discard;
  gl_FragColor = vec4(holo, clamp(a, 0.0, 1.0));
}`;

const CONE_V = `varying vec2 vUv; varying float vF; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * normal); vF = pow(abs(dot(n, normalize(-mv.xyz))), 1.3); gl_Position = projectionMatrix * mv; }`;
const CONE_F = `
precision highp float;
uniform float uTime, uCone, uGain, uStreak; varying vec2 vUv; varying float vF;
float hash(float n){ return fract(sin(n * 127.1) * 43758.5453); }
void main(){
  float h = vUv.y;                                          // 0 at the base, 1 at the top
  float up = smoothstep(0.0, 1.0, uCone * 1.35 - h * 0.7);
  float k = floor(vUv.x * 140.0), f = fract(vUv.x * 140.0);
  float s = hash(k);
  float streak = mix(1.0, 0.25 + 0.75 * s, uStreak) * (0.8 + 0.2 * sin(uTime * (1.2 + s * 2.0) + s * 20.0 + h * 9.0));
  streak *= 0.7 + 0.3 * smoothstep(0.0, 0.5, f) * smoothstep(1.0, 0.5, f);
  float wave = 0.82 + 0.18 * sin(h * 22.0 - uTime * 1.8);
  float a = pow(1.0 - h, 1.35) * up * uGain * streak * wave * (0.3 + 0.7 * vF);
  vec3 col = mix(vec3(0.08, 0.38, 1.0), vec3(0.55, 0.88, 1.0), pow(1.0 - h, 3.0));
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
}`;

const GLOW_F = `
precision highp float; uniform float uOn, uTime; varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5) * 14.0; float r = length(p);
  float core = exp(-r * r * 0.5) * 0.95 + exp(-r * r * 0.07) * 0.28;
  float ring = smoothstep(0.02, 0.0, abs(r - 1.9)) * 0.55 + smoothstep(0.02, 0.0, abs(r - 2.6)) * 0.3 + smoothstep(0.015, 0.0, abs(r - 3.5)) * 0.18 + smoothstep(0.012, 0.0, abs(r - 6.4)) * 0.12;
  float a = (core + ring * (0.8 + 0.2 * sin(uTime * 1.5 - r))) * uOn * (1.0 - smoothstep(5.0, 7.0, r));
  gl_FragColor = vec4(vec3(0.1, 0.45, 1.0), clamp(a, 0.0, 1.0));
}`;
const FLOOR_F = `
precision highp float; varying vec2 vUv;
void main(){
  float r = length((vUv - 0.5) * 60.0);
  float a = 0.72 * (1.0 - smoothstep(4.0, 24.0, r));
  gl_FragColor = vec4(vec3(0.012, 0.035, 0.1), a);
}`;
const HALO_F = `precision highp float; uniform float uOn; varying vec2 vUv; void main(){ float r = length((vUv - 0.5) * 2.0); gl_FragColor = vec4(vec3(0.05, 0.28, 1.0), pow(max(0.0, 1.0 - r), 2.2) * 0.4 * uOn); }`;

const RING_V = `varying vec2 vP; varying float vD; void main(){ vP = position.xy; vec4 mv = modelViewMatrix * vec4(position, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }`;
const RING_F = `
precision highp float;
uniform float uR, uW, uOn, uTime, uSpeed, uNear, uDash, uGain; varying vec2 vP; varying float vD;
void main(){
  float r = length(vP), ang = atan(vP.y, vP.x);
  float d = abs(r - uR) / uW, prof = exp(-d * d * 2.2);
  float phase = fract(ang * 0.15915 - uTime * uSpeed * 0.15915);
  float comet = pow(phase, 4.0);                              // bright head, long fading tail, like light travelling round the ring
  float base = 0.2 + 0.8 * comet;
  float dash = step(0.5, fract(ang * 3.8197));                // 24 tick marks
  base *= mix(1.0, 0.18 + 0.82 * dash, uDash);
  float depth = mix(0.28, 1.0, smoothstep(1.5, -1.5, vD - uNear));   // far side of the ring is dimmer, near side brighter
  float a = prof * base * depth * uOn * uGain;
  vec3 col = mix(vec3(0.12, 0.45, 1.0), vec3(0.85, 0.97, 1.0), comet * prof);
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
}`;
const DOT_V = `
attribute float aSeed; uniform float uSize, uOn, uNear; varying float vA;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vA = (0.35 + 0.65 * aSeed) * uOn * mix(0.25, 1.0, smoothstep(1.5, -1.5, -mv.z - uNear));
  gl_PointSize = uSize * (0.45 + aSeed * 1.2) * (4.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const DOT_F = `precision highp float; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float g = smoothstep(1.0, 0.0, d); gl_FragColor = vec4(mix(vec3(0.3, 0.65, 1.0), vec3(0.9, 0.98, 1.0), g * g), g * g * vA); }`;

const PART_V = `
attribute float aSeed; uniform float uTime, uSize, uOn; varying float vA;
void main(){
  float t = fract(aSeed * 7.13 + uTime * (0.04 + aSeed * 0.05));
  vec3 p = position; p.y = -2.1 + t * 4.4;
  float rad = mix(0.7, 1.6, t); p.x *= rad; p.z *= rad;
  vA = sin(t * 3.14159) * uOn;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uSize * (0.5 + aSeed) * (3.5 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const PART_F = `precision highp float; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.45, 0.78, 1.0), smoothstep(1.0, 0.0, d) * vA * 0.7); }`;
const STAR_V = `
attribute float aSeed; uniform float uTime, uSize, uOn; varying float vA;
void main(){
  vA = (0.3 + 0.7 * (0.5 + 0.5 * sin(uTime * (0.6 + aSeed * 1.4) + aSeed * 40.0))) * uOn * (0.3 + 0.7 * aSeed);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uSize * (0.4 + aSeed) * (6.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;

export function mountHolo(sec) {
  const stage = sec.querySelector('#holoStage');
  const src = sec.dataset.holoSrc;
  const hud = sec.querySelector('#holoHud');
  const cue = sec.querySelector('#holoCue');
  const head = sec.querySelector('.holo-head');
  if (!stage || !src) return null;

  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' }); }
  catch (e) { return null; }
  if (!renderer.getContext()) return null;
  const small = matchMedia('(max-width: 700px)').matches;
  renderer.setClearColor(0x030816, 1);
  stage.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  // the projected film (colour | matte). The visible <video id="clip"> stays as the plain fallback.
  const video = document.createElement('video');
  video.muted = true; video.playsInline = true; video.loop = false; video.preload = 'auto'; video.setAttribute('aria-hidden', 'true');
  video.style.cssText = 'position:absolute;left:0;top:0;width:2px;height:2px;opacity:.01;pointer-events:none';
  video.src = src; stage.appendChild(video);

  const scene = new Scene();
  const camera = new PerspectiveCamera(40, 1, 0.1, 80);
  const world = new Group(); scene.add(world);

  const bgU = { uOn: { value: 0 } };
  const bg = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ vertexShader: BG_V, fragmentShader: BG_F, uniforms: bgU, depthTest: false, depthWrite: false }));
  bg.frustumCulled = false; bg.renderOrder = -100; scene.add(bg);

  const tex = new VideoTexture(video); tex.minFilter = LinearFilter; tex.magFilter = LinearFilter; tex.colorSpace = NoColorSpace; tex.generateMipmaps = false;
  const U = { uTime: { value: 0 }, uReveal: { value: 0 }, uFade: { value: 1 }, uTex: { value: tex }, uHasVideo: { value: 0 }, uMir: { value: 0 } };
  const UM = { ...U, uMir: { value: 1 } };
  const PH = 4.3, PW = PH * 640 / 600;
  const holoMat = (u, extra = {}) => new ShaderMaterial({ uniforms: u, vertexShader: VERT, fragmentShader: HOLO_F, transparent: true, depthWrite: true, blending: NormalBlending, ...extra });
  const holo = new Mesh(new PlaneGeometry(PW, PH), holoMat(U));
  holo.position.y = -2.1 + PH / 2; holo.renderOrder = 7; world.add(holo);

  // podium: machined navy metal, lit by a small procedural studio (blue strip lights + softbox) through PMREM
  const plat = new Group(); plat.position.y = -2.3; world.add(plat);
  const env = (() => {
    const es = new Scene();
    const dome = new Mesh(new SphereGeometry(20, 32, 16), new ShaderMaterial({ side: BackSide, vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }', fragmentShader: 'varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 top = vec3(0.04,0.09,0.24), hor = vec3(0.1,0.24,0.62), bot = vec3(0.0,0.01,0.05); vec3 c = h > 0.0 ? mix(hor, top, pow(h, 0.7)) : mix(hor * 0.4, bot, pow(-h, 0.5)); gl_FragColor = vec4(c, 1.0); }' }));
    es.add(dome);
    const box = (w, h, x, y, z, r, g, b) => { const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(r, g, b), side: DoubleSide })); m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m); };
    box(12, 2.2, 0, 12, 5, 4.2, 5.2, 7); box(2.2, 10, -13, 3, 3, 1.2, 3.2, 8); box(2.2, 10, 13, 3, -3, 1.2, 3.2, 8); box(9, 1.2, 0, 2, -14, 1.6, 3.4, 7); box(6, 0.8, 0, 1.2, 14, 1.2, 2.6, 6);
    const pm = new PMREMGenerator(renderer); const t = pm.fromScene(es, 0.03).texture; pm.dispose(); return t;
  })();
  const brushed = (() => { const c = document.createElement('canvas'); c.width = 1024; c.height = 8; const g = c.getContext('2d'); for (let x = 0; x < 1024; x++) { const v = 150 + Math.random() * 105; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, 0, 1, 8); } const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(3, 1); return t; })();
  const metal = (rough, color = 0x3a4f88) => new MeshStandardMaterial({ color: new Color(color), metalness: 1, roughness: rough, roughnessMap: brushed, envMap: env, envMapIntensity: 1.25 });
  const prof = [[0, -0.14], [1.46, -0.14], [1.56, -0.11], [1.6, -0.04], [1.6, 0.03], [1.57, 0.07], [1.5, 0.09], [1.42, 0.095], [1.4, 0.11], [1.36, 0.115], [1.33, 0.15], [1.3, 0.19], [1.25, 0.205], [1.14, 0.205], [1.12, 0.19], [1.08, 0.19], [1.06, 0.205], [0.95, 0.205], [0.9, 0.195], [0.4, 0.185], [0, 0.18]].map(q => new Vector2(q[0], q[1]));
  plat.add(new Mesh(new LatheGeometry(prof, 160), metal(0.28)));
  const dark = new MeshStandardMaterial({ color: new Color(0x050b1e), metalness: 0.9, roughness: 0.45, envMap: env, envMapIntensity: 0.9 });
  const SEG = 28;                                              // segmented collar around the base; some blocks are lit
  const lit = new MeshBasicMaterial({ color: new Color(0.35, 0.8, 1.6), toneMapped: false });
  for (let i = 0; i < SEG; i++) { const a = (i / SEG) * Math.PI * 2; const blk = new Mesh(new BoxGeometry(0.2, 0.07, 0.1), i % 7 === 0 ? lit : i % 2 ? dark : metal(0.4, 0x2a3a6e)); blk.position.set(Math.cos(a) * 1.6, -0.035, Math.sin(a) * 1.6); blk.rotation.y = -a + Math.PI / 2; plat.add(blk); }
  const glowMat = (color, op) => new MeshBasicMaterial({ color: new Color(color), transparent: true, opacity: op, depthWrite: false, blending: AdditiveBlending, side: DoubleSide });
  const flat = (geo, mat, y) => { const m = new Mesh(geo, mat); m.rotation.x = -Math.PI / 2; m.position.y = y; plat.add(m); return m; };
  // glowing edges: a thin hot core plus a wide soft halo for each (a cheap bloom)
  const edges = [];
  for (const [r, y, w] of [[1.425, 0.118, 0.012], [1.125, 0.198, 0.011], [0.93, 0.208, 0.012], [0.62, 0.19, 0.01]]) {
    const core = new Mesh(new TorusGeometry(r, w, 8, 200), new MeshBasicMaterial({ color: new Color(0.5, 0.88, 1.6), toneMapped: false })); core.rotation.x = Math.PI / 2; core.position.y = y; plat.add(core);
    const halo = flat(new RingGeometry(r - 0.1, r + 0.1, 160), glowMat(0x2f7bff, 0), y + 0.004); edges.push(halo);
  }
  const lens = flat(new RingGeometry(0, 0.92, 96), new MeshBasicMaterial({ color: new Color(0x2a6cff), transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending }), 0.192);
  const core = flat(new RingGeometry(0, 0.5, 64), glowMat(0xaadcff, 0), 0.196);
  const edge = new Mesh(new CylinderGeometry(1.62, 1.62, 0.05, 96, 1, true), glowMat(0x3b8cff, 0)); edge.position.y = -0.1; plat.add(edge);
  const leds = [];                                              // side light bars on the collar, like the reference
  for (const a of [0.0, Math.PI, 0.5, Math.PI - 0.5, -0.5, Math.PI + 0.5]) { const l = new Mesh(new PlaneGeometry(0.34, 0.075), glowMat(0x5cc4ff, 0)); l.position.set(Math.cos(a) * 1.625, -0.035, Math.sin(a) * 1.625); l.rotation.y = -a + Math.PI / 2; plat.add(l); leds.push(l); }

  // floor: dark glossy surface that fades out (no horizon edge), a pool of light, and a mirrored podium + figure
  const floor = new Mesh(new PlaneGeometry(60, 60), new ShaderMaterial({ vertexShader: VERT, fragmentShader: FLOOR_F, transparent: true, depthWrite: false }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR; floor.renderOrder = 3; world.add(floor);
  const glowU = { uOn: { value: 0 }, uTime: U.uTime };
  const pool = new Mesh(new PlaneGeometry(14, 14), new ShaderMaterial({ uniforms: glowU, vertexShader: VERT, fragmentShader: GLOW_F, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  pool.rotation.x = -Math.PI / 2; pool.position.y = FLOOR + 0.01; pool.renderOrder = 4; world.add(pool);
  const mir = new Group(); mir.scale.y = -1; mir.position.y = FLOOR * 2; world.add(mir);
  const platM = plat.clone(true); mir.add(platM);
  const holoM = new Mesh(holo.geometry, holoMat(UM, { depthWrite: false })); holoM.position.copy(holo.position); holoM.renderOrder = 1; mir.add(holoM);

  const halo = new Mesh(new PlaneGeometry(9, 9), new ShaderMaterial({ uniforms: bgU, vertexShader: VERT, fragmentShader: HALO_F, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  halo.position.set(0, 0.0, -2.4); halo.renderOrder = 2; world.add(halo);

  // volumetric beam: a wide soft cone and a narrower, brighter core, both with fine vertical light streaks that drift
  const coneU = { uTime: U.uTime, uCone: { value: 0 }, uGain: { value: 0.5 }, uStreak: { value: 0.8 } };
  const coneU2 = { uTime: U.uTime, uCone: coneU.uCone, uGain: { value: 0.55 }, uStreak: { value: 0.35 } };
  const mkCone = (rt, rb, h, y, u) => { const m = new Mesh(new CylinderGeometry(rt, rb, h, 128, 1, true), new ShaderMaterial({ uniforms: u, vertexShader: CONE_V, fragmentShader: CONE_F, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })); m.position.y = y; m.renderOrder = 6; world.add(m); return m; };
  mkCone(1.95, 0.98, 4.5, -0.05, coneU); mkCone(1.2, 0.78, 3.3, -0.65, coneU2);

  // orbiting rings with travelling light dots (back halves hide behind the figure, front halves cross it)
  const orbits = [];
  const mkOrbit = (R, y, tx, tz, speed, n, dash) => {
    const g = new Group(); g.position.y = -1.95; g.rotation.x = tx; g.rotation.z = tz; world.add(g);
    const on = { value: 0 }, near = { value: 8 };
    const layer = (w, gain, dsh, Rr, ro) => { const m = new Mesh(new RingGeometry(Rr - 0.3, Rr + 0.3, 256, 1), new ShaderMaterial({ uniforms: { uR: { value: Rr }, uW: { value: w }, uOn: on, uTime: U.uTime, uSpeed: { value: speed }, uNear: near, uDash: { value: dsh }, uGain: { value: gain } }, vertexShader: RING_V, fragmentShader: RING_F, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })); m.rotation.x = -Math.PI / 2; m.renderOrder = ro; g.add(m); };
    layer(0.055, 0.45, 0, R, 8); layer(0.01, 2.2, 0, R, 8); if (dash) layer(0.008, 1.6, 1, R + 0.09, 8);
    const inner = new Group(); g.add(inner);
    const pos = new Float32Array(n * 3), sd = new Float32Array(n);
    for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2; pos[i * 3] = Math.cos(a) * R; pos[i * 3 + 1] = (Math.random() - 0.5) * 0.03; pos[i * 3 + 2] = Math.sin(a) * R; sd[i] = Math.random(); }
    const geo = new BufferGeometry(); geo.setAttribute('position', new BufferAttribute(pos, 3)); geo.setAttribute('aSeed', new BufferAttribute(sd, 1));
    const du = { uSize: { value: small ? 8 : 11 }, uOn: on, uNear: near };
    const pts = new Points(geo, new ShaderMaterial({ uniforms: du, vertexShader: DOT_V, fragmentShader: DOT_F, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    pts.frustumCulled = false; pts.renderOrder = 9; inner.add(pts);
    orbits.push({ g, inner, on, near, speed, y, k: orbits.length });
  };
  mkOrbit(2.1, 0.5, 0.3, 0.05, 0.9, 34, true); mkOrbit(1.8, 1.0, -0.2, 0.2, -1.1, 30, false); mkOrbit(2.55, 0.15, 0.1, -0.22, 0.6, 40, true); mkOrbit(1.55, 1.55, 0.42, 0.08, 1.3, 24, false);
  const ripples = [0.95, 1.15, 1.4].map((r, i) => { const m = new Mesh(new TorusGeometry(r, 0.0035, 6, 160), glowMat(0x58b4ff, 0)); m.rotation.x = Math.PI / 2; m.position.y = -1.3 - i * 0.22; m.userData.op = 0.35 - i * 0.07; world.add(m); return m; });

  const PN = small ? 60 : 110, pp = new Float32Array(PN * 3), ps = new Float32Array(PN);
  for (let i = 0; i < PN; i++) { const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()); pp[i * 3] = Math.cos(a) * r; pp[i * 3 + 2] = Math.sin(a) * r; ps[i] = Math.random(); }
  const pg = new BufferGeometry(); pg.setAttribute('position', new BufferAttribute(pp, 3)); pg.setAttribute('aSeed', new BufferAttribute(ps, 1));
  const partU = { uTime: U.uTime, uSize: { value: 17 }, uOn: { value: 0 } };
  const pts = new Points(pg, new ShaderMaterial({ uniforms: partU, vertexShader: PART_V, fragmentShader: PART_F, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  pts.frustumCulled = false; pts.renderOrder = 10; world.add(pts);
  const SN = small ? 40 : 80, sp0 = new Float32Array(SN * 3), ss = new Float32Array(SN);
  for (let i = 0; i < SN; i++) { sp0[i * 3] = (Math.random() - 0.5) * 16; sp0[i * 3 + 1] = -1.6 + Math.random() * 6.5; sp0[i * 3 + 2] = -1.5 - Math.random() * 4; ss[i] = Math.random(); }
  const sg = new BufferGeometry(); sg.setAttribute('position', new BufferAttribute(sp0, 3)); sg.setAttribute('aSeed', new BufferAttribute(ss, 1));
  const starU = { uTime: U.uTime, uSize: { value: 9 }, uOn: { value: 0 } };
  const stars = new Points(sg, new ShaderMaterial({ uniforms: starU, vertexShader: STAR_V, fragmentShader: PART_F, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  stars.frustumCulled = false; stars.renderOrder = 2; world.add(stars);

  let W = 0, H = 0;
  const resize = () => {
    const r = stage.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.6 : 2)); renderer.setSize(W, H, false);
    renderer.domElement.style.width = W + 'px'; renderer.domElement.style.height = H + 'px';
    // the scene is framed in the area below the headline; the headline sits over extra dark sky at the top of the same canvas
    const d = head ? clamp(Math.round(head.getBoundingClientRect().bottom - r.top + 6), 0, H * 0.5) : 0;
    const He = Math.max(1, H - d), aspect = W / He;
    camera.aspect = aspect;
    const t = Math.tan((camera.fov * Math.PI) / 360), wide = aspect >= 0.8;
    camera.userData.dist = 1.07 * Math.max((wide ? 3.15 : 3.0) / t, 3.1 / (t * aspect));
    camera.userData.shift = wide ? -0.78 : -1.05;
    camera.setViewOffset(W, He, 0, -d, W, H);
    camera.updateProjectionMatrix();
  };
  resize(); addEventListener('resize', resize);
  if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);

  let hudOn = false;
  const setHud = on => { if (on === hudOn) return; hudOn = on; hud && hud.classList.toggle('on', on); };
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
    const pulse = 0.92 + 0.08 * Math.sin(t / 1000 * 1.7);
    U.uTime.value = t / 1000; U.uReveal.value = reveal; U.uHasVideo.value = video.readyState >= 2 ? 1 : 0;
    glowU.uOn.value = on; bgU.uOn.value = sstep(0.0, 0.25, p); coneU.uCone.value = coneP; partU.uOn.value = sstep(0.1, 0.45, p); starU.uOn.value = sstep(0.0, 0.3, p);
    edges.forEach((m, i) => { m.material.opacity = (0.16 + 0.1 * (i === 3)) * (0.15 + 0.85 * on) * pulse; });
    lens.material.opacity = 0.14 + 0.32 * on; core.material.opacity = (0.1 + 0.5 * on) * pulse; edge.material.opacity = (0.1 + 0.5 * on) * pulse;
    leds.forEach((m, i) => { m.material.opacity = (0.25 + 0.75 * on) * (0.8 + 0.2 * Math.sin(t / 1000 * 2 + i)); });
    const cd = camera.position.length();
    orbits.forEach(o => {                                       // rings leave the podium with the reveal and climb to their orbits
      const e0 = clamp((reveal - 0.04 * o.k) / (0.62 - 0.04 * o.k)), e = 1 - Math.pow(1 - e0, 3);
      o.g.position.y = -1.95 + (o.y + 1.95) * e; o.g.scale.setScalar(0.45 + 0.55 * e);
      o.on.value = sstep(0.0, 0.2, e0); o.near.value = cd; o.inner.rotation.y = (t / 1000) * o.speed * 0.4;
    });
    ripples.forEach((m, i) => { m.material.opacity = m.userData.op * sstep(0.1, 0.5, reveal) * (0.7 + 0.3 * Math.sin(t / 1000 * 1.3 + i * 1.7)); });
    const push = 1 - 0.07 * sstep(0.1, 0.7, p);
    camera.position.set(px * 0.3, 0.3 + camera.userData.shift, camera.userData.dist * push);
    camera.lookAt(px * 0.08, camera.userData.shift, 0);
    holo.rotation.y = holoM.rotation.y = px * 0.05; holo.scale.setScalar(0.985 + 0.015 * reveal); holoM.scale.copy(holo.scale);
    if (reveal > 0.55) { if (video.paused) video.play().catch(() => {}); }
    else if (reveal < 0.2) { if (!video.paused) video.pause(); if (video.currentTime > 0) { try { video.currentTime = 0; } catch (_) {} } setHud(false); }
    if (cue) cue.style.opacity = String(1 - sstep(0.04, 0.22, p));
    sec.style.setProperty('--hp', p.toFixed(3));
    renderer.render(scene, camera);
    if (inView) raf = requestAnimationFrame(frame);
  };
  function kick() { if (!raf && inView && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  kick();
  return { destroy() { cancelAnimationFrame(raf); renderer.dispose(); } };
}
