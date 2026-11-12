/*
 * The Gateway — hero world (immersive v3, phase 1, revision 2).
 *
 * A corridor of machined copper gateways (Blender asset: assets/worlds/gateway.glb,
 * built by source/blender/gateway.py) recedes behind the portrait.
 *
 * Story: a request starts deep in the corridor and passes through each gateway.
 * Each gateway it passes flashes, and a protocol label appears (GET, TLS, AUTHZ,
 * 200 OK). It then leaves the corridor towards the visitor. Light runs along the
 * seams continuously; the gateways reflect in a dark floor; dust glows only
 * inside the light shaft.
 *
 * On reveal the scene "ignites": gateways light from near to far while the camera
 * settles into place.
 */
import {
  AdditiveBlending, BufferAttribute, BufferGeometry, CanvasTexture, CatmullRomCurve3, Color, DoubleSide,
  Fog, Group, MathUtils, Mesh, MeshBasicMaterial, MeshMatcapMaterial, PerspectiveCamera, PlaneGeometry,
  PointLight, Points, Scene, ShaderMaterial, SpotLight, Sprite, SpriteMaterial, SRGBColorSpace, TextureLoader,
  UniformsLib, UniformsUtils, Vector3
} from 'three';
import { GLTFLoader } from './loaders.js';

const BG = 0x0c0b0a;
const AMBER = 0xdcad7e;
const FLOOR_Y = -0.235;
const GATE_COUNT = 6;
const GATE_SPACING = 3.6;
const LEG = 2.3;          // matches source/blender/gateway.py
const SEAM_R = 1.124;
const SEAM_LENGTH = 2 * LEG + Math.PI * SEAM_R;

/* ---------- helpers ---------- */

function glowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,.5)');
  g.addColorStop(0.6, 'rgba(255,255,255,.1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

/** A crisp monospace label rendered once to a texture (no DOM, no web fonts). */
function labelSprite(text, tone) {
  const pad = 18, h = 64;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = '500 30px ui-monospace, SFMono-Regular, Consolas, monospace';
  ctx.font = font;
  const w = Math.ceil(ctx.measureText(text).width) + pad * 2 + 22;
  canvas.width = w; canvas.height = h;
  ctx.font = font;
  ctx.fillStyle = 'rgba(14,11,9,0.78)';
  ctx.strokeStyle = tone === 'ok' ? 'rgba(169,199,154,0.7)' : 'rgba(220,173,126,0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(1, 1, w - 2, h - 2, 6); else ctx.rect(1, 1, w - 2, h - 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = tone === 'ok' ? '#a9c79a' : '#dcad7e';
  ctx.beginPath(); ctx.arc(pad + 5, h / 2, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#f3eddf';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, pad + 20, h / 2 + 1);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  // Constant on-screen size (sizeAttenuation off): readable, never huge as it nears the camera.
  const material = new SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false, opacity: 0, fog: false, sizeAttenuation: false });
  const sprite = new Sprite(material);
  sprite.userData.aspect = w / h;
  sprite.renderOrder = 10;
  return { sprite, texture, material };
}

/* Seam glow and halo: light pulses travel along the arch, a flash when the request passes,
   and an ignition wipe from the crown. Custom shaders (no lighting maths), shared by every
   quality tier; parameterised by position along the arch, so no UVs are needed. */
const ARCH_GLSL = `
  uniform float uTime, uIgnite, uFlash, uOffset, uDim;
  varying vec3 vArch;
  float archParam(vec3 p) {
    float h = -p.z;
    if (h < ${LEG.toFixed(3)}) return p.x < 0.0 ? h : ${SEAM_LENGTH.toFixed(4)} - h;
    float a = atan(h - ${LEG.toFixed(3)}, p.x);
    return ${LEG.toFixed(3)} + (3.14159265 - a) * ${SEAM_R.toFixed(4)};
  }
  float archEnergy(out float lit) {
    float s = archParam(vArch) / ${SEAM_LENGTH.toFixed(4)};
    lit = smoothstep(0.0, 0.06, uIgnite * 1.12 - abs(s - 0.5) * 2.0);
    float f1 = fract(s - uTime * 0.11 + uOffset);
    float f2 = fract(s + uTime * 0.07 + uOffset * 1.7);
    return exp(-pow((f1 - 0.5) * 18.0, 2.0)) + 0.6 * exp(-pow((f2 - 0.5) * 24.0, 2.0));
  }`;

function glowMaterialsFor(gateIndex) {
  const uniforms = {
    uTime: { value: 0 }, uIgnite: { value: 0 }, uFlash: { value: 0 },
    uOffset: { value: gateIndex * 0.37 }, uDim: { value: Math.pow(0.6, gateIndex) },
    uColor: { value: new Color(1.0, 0.66, 0.40) }
  };
  const seam = new ShaderMaterial({
    fog: true,
    uniforms: UniformsUtils.clone(UniformsLib.fog),
    vertexShader: `varying vec3 vArch;
      #include <fog_pars_vertex>
      void main() { vArch = position; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `uniform vec3 uColor; ${ARCH_GLSL}
      #include <fog_pars_fragment>
      void main() {
        float lit; float pulse = archEnergy(lit);
        vec3 c = uColor * 6.0 * (lit * uDim * (0.55 + 1.25 * pulse) + uFlash * 2.2 * lit);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`
  });
  const halo = new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, fog: true,
    uniforms: UniformsUtils.clone(UniformsLib.fog),
    vertexShader: `varying vec3 vArch; varying vec3 vNormalV; varying vec3 vViewV;
      #include <fog_pars_vertex>
      void main() { vArch = position; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vNormalV = normalize(normalMatrix * normal); vViewV = -mvPosition.xyz; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `uniform vec3 uColor; ${ARCH_GLSL}
      varying vec3 vNormalV; varying vec3 vViewV;
      #include <fog_pars_fragment>
      void main() {
        float lit; float pulse = archEnergy(lit);
        float facing = pow(abs(dot(normalize(vNormalV), normalize(vViewV))), 2.2);
        float e = lit * uDim * (0.35 + 0.9 * pulse) + uFlash * 1.6 * lit;
        gl_FragColor = vec4(uColor * e * 0.55, facing * clamp(e, 0.0, 1.0) * 0.5);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`
  });
  // Both materials read the same uniform objects, so one update drives the whole gateway.
  Object.assign(seam.uniforms, uniforms);
  Object.assign(halo.uniforms, uniforms);
  return { seam, halo, uniforms };
}

/* Brushed copper: micro-variation in roughness so highlights break up like real metal. */
function upgradeCopper(material) {
  material.onBeforeCompile = shader => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vBrush;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBrush = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vBrush;
        float brushHash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        float streak = brushHash(vec2(floor(vBrush.x * 900.0 + vBrush.z * 40.0), floor(vBrush.y * 30.0)));
        roughnessFactor = clamp(roughnessFactor * (0.78 + 0.44 * streak), 0.08, 1.0);`);
  };
  material.customProgramCacheKey = () => 'gateway-copper';
}

function floorMaterial() {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uGlow: { value: new Color(AMBER) }, uBase: { value: new Color(BG) }, uIgnite: { value: 0 } },
    vertexShader: /* glsl */`
      varying vec3 vWorld;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`
      uniform float uTime, uIgnite; uniform vec3 uGlow, uBase;
      varying vec3 vWorld;
      float gridLine(vec2 p, float scale) {
        vec2 g = abs(fract(p * scale - 0.5) - 0.5) / fwidth(p * scale);
        return 1.0 - min(min(g.x, g.y), 1.0);
      }
      void main() {
        float d = length(vWorld.xz - vec2(0.0, -4.0));
        float fade = smoothstep(18.0, 2.0, d);
        float grid = (gridLine(vWorld.xz, 1.0) * 0.16 + gridLine(vWorld.xz, 4.0) * 0.04) * fade * uIgnite;
        float pool = exp(-pow(length(vWorld.xz - vec2(0.2, 0.8)) * 0.5, 2.0)) * uIgnite;
        // Mostly opaque: the mirrored gateways below show through faintly, like polished stone.
        vec3 col = mix(uBase, uGlow, grid + pool * 0.16);
        gl_FragColor = vec4(col, 0.84 - pool * 0.08);
      }`
  });
}

function shaftMaterial(seed) {
  return new ShaderMaterial({
    transparent: true, depthWrite: false, side: DoubleSide, blending: AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uSeed: { value: seed }, uStrength: { value: 0 }, uColor: { value: new Color(0xffc690) } },
    vertexShader: /* glsl */`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uTime, uSeed, uStrength; uniform vec3 uColor; varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      void main() {
        float across = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 2.4);
        float along = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
        float n = noise(vec2(vUv.x * 7.0 + uSeed, vUv.y * 2.5 - uTime * 0.1)) * 0.55 + 0.45;
        gl_FragColor = vec4(uColor, across * along * n * uStrength);
      }`
  });
}

/* Dust that is bright inside the light shaft and nearly invisible outside it. */
function dustMaterial(texture, pixelRatio) {
  return new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending,
    uniforms: {
      uMap: { value: texture }, uTime: { value: 0 }, uSize: { value: 26 * pixelRatio }, uIgnite: { value: 0 },
      uShaftPoint: { value: new Vector3(1.0, 4.3, 0.4) }, uShaftDir: { value: new Vector3(-0.315, 0.949, 0).normalize() }
    },
    vertexShader: /* glsl */`
      attribute float aSeed;
      uniform float uTime, uSize; uniform vec3 uShaftPoint, uShaftDir;
      varying float vLight;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vec3 rel = world.xyz - uShaftPoint;
        float d = length(rel - dot(rel, uShaftDir) * uShaftDir);
        vLight = 0.08 + exp(-d * d / 0.55) * (0.65 + 0.35 * sin(uTime * 1.7 + aSeed * 6.2831));
        vec4 mv = viewMatrix * world;
        gl_PointSize = uSize * (0.6 + fract(aSeed * 13.7) * 0.8) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uMap; uniform float uIgnite; varying float vLight;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(vec3(1.0, 0.86, 0.7) * vLight, t.a * vLight * uIgnite);
      }`
  });
}

/* ---------- the world ---------- */

export async function create({ renderer, getEnvironment, state }) {
  const scene = new Scene();
  scene.background = new Color(BG);
  scene.fog = new Fog(BG, 6, 20);
  scene.environmentIntensity = 0.32;

  const camera = new PerspectiveCamera(32, 1, 0.1, 60);
  const lookAt = new Vector3();
  const glow = glowTexture();
  const disposables = [glow];
  const track = item => { disposables.push(item); return item; };

  /* --- gateways (Blender asset) --- */
  const textures = new TextureLoader();
  const [gltf, copperCap, darkCap] = await Promise.all([
    new GLTFLoader().loadAsync('assets/worlds/gateway.glb'),
    textures.loadAsync('assets/worlds/matcap-copper.webp'),
    textures.loadAsync('assets/worlds/matcap-darkmetal.webp')
  ]);
  copperCap.colorSpace = darkCap.colorSpace = SRGBColorSpace;
  track(copperCap); track(darkCap);
  const template = gltf.scene;
  // Two looks for the metal: physically based (lit, reflective) for capable GPUs, and a
  // Blender-baked matcap for integrated GPUs and phones (no lights, tiny shaders).
  const looks = { pbr: {}, matcap: {} };
  template.traverse(object => {
    if (!object.isMesh) return;
    const m = object.material;
    m.side = 0;
    if (m.name.startsWith('Copper')) {
      // Saturated copper: neutral studio reflections otherwise read as pale gold.
      m.metalness = 1; m.roughness = 0.34; m.envMapIntensity = 0.75; m.color.setRGB(0.66, 0.30, 0.15); upgradeCopper(m);
      looks.pbr.copper = m;
      looks.matcap.copper ||= track(new MeshMatcapMaterial({ matcap: copperCap, name: 'CopperMatcap' }));
      object.userData.metal = 'copper';
    }
    if (m.name.startsWith('DarkMetal')) {
      m.envMapIntensity = 0.6;
      looks.pbr.dark = m;
      looks.matcap.dark ||= track(new MeshMatcapMaterial({ matcap: darkCap, name: 'DarkMatcap' }));
      object.userData.metal = 'dark';
    }
    if (m.name.startsWith('Glow')) object.userData.glow = 'seam';
    if (m.name.startsWith('Halo')) object.userData.glow = 'halo';
  });

  const corridor = new Group();
  // Recede to the left, into the open space between the headline and the portrait.
  corridor.rotation.y = 0.55;
  scene.add(corridor);
  const gates = [];
  for (let i = 0; i < GATE_COUNT; i++) {
    const gate = template.clone(true);
    gate.scale.setScalar(1.05 * Math.pow(0.975, i));
    gate.position.set(Math.sin(i * 0.7) * 0.05, 0, -i * GATE_SPACING);
    // One glow material set per gateway, so each can flash and ignite on its own.
    const { seam, halo: haloMat, uniforms } = glowMaterialsFor(i);
    track(seam); track(haloMat);
    gate.traverse(object => {
      if (object.userData.glow === 'seam') object.material = seam;
      if (object.userData.glow === 'halo') { object.material = haloMat; object.renderOrder = 2; }
    });
    corridor.add(gate);
    gates.push({ object: gate, uniforms, flash: 0 });
  }

  /* --- reflections: the corridor mirrored under a mostly opaque floor (shares materials) --- */
  const mirror = corridor.clone(true);
  mirror.scale.y = -1;
  mirror.position.y = 2 * FLOOR_Y;
  scene.add(mirror);

  const floorMat = track(floorMaterial());
  const floor = new Mesh(track(new PlaneGeometry(70, 70)), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR_Y;
  floor.renderOrder = 1;
  scene.add(floor);

  /* --- light --- */
  const key = new SpotLight(0xffd2a6, 0, 24, 0.42, 0.65, 1.6);
  key.position.set(3.2, 8.5, 3.0);
  key.target.position.set(0, 0.6, 0);
  const rim = new SpotLight(0x88a6c4, 0, 22, 0.6, 0.8, 1.6);
  rim.position.set(-4, 4, -6);
  rim.target.position.set(0, 1.5, 0);
  const seamLight = new PointLight(AMBER, 0, 5, 1.8);
  seamLight.position.set(0, 2.6, 0.3);
  scene.add(key, key.target, rim, rim.target, seamLight);

  /* --- light shaft --- */
  const shaft = new Group();
  const shaftMats = [0.0, 1.7, 3.1, 4.4].map(seed => track(shaftMaterial(seed)));
  shaftMats.forEach((mat, i) => {
    const plane = new Mesh(track(new PlaneGeometry(1.4 + i * 0.45, 11.5)), mat);
    plane.rotation.y = i * 0.5;
    shaft.add(plane);
  });
  shaft.position.set(1.0, 4.3, 0.4);
  shaft.rotation.z = 0.32;
  scene.add(shaft);

  /* --- dust --- */
  const DUST_MAX = 900;
  const dustPositions = new Float32Array(DUST_MAX * 3);
  const dustSeeds = new Float32Array(DUST_MAX);
  for (let i = 0; i < DUST_MAX; i++) {
    dustPositions[i * 3] = MathUtils.randFloat(-2.6, 3.4);
    dustPositions[i * 3 + 1] = MathUtils.randFloat(-0.1, 6.0);
    dustPositions[i * 3 + 2] = MathUtils.randFloat(-4.0, 3.0);
    dustSeeds[i] = Math.random();
  }
  const dustGeometry = track(new BufferGeometry());
  dustGeometry.setAttribute('position', new BufferAttribute(dustPositions, 3));
  dustGeometry.setAttribute('aSeed', new BufferAttribute(dustSeeds, 1));
  const dustMat = track(dustMaterial(glow, renderer.getPixelRatio()));
  scene.add(new Points(dustGeometry, dustMat));

  /* --- the request and its journey --- */
  const request = new Group();
  const core = new Mesh(track(new PlaneGeometry(0.55, 0.55)), track(new MeshBasicMaterial({ map: glow, color: 0xfff3e2, transparent: true, blending: AdditiveBlending, depthWrite: false })));
  const halo = new Mesh(track(new PlaneGeometry(2.0, 2.0)), track(new MeshBasicMaterial({ map: glow, color: AMBER, transparent: true, opacity: 0.5, blending: AdditiveBlending, depthWrite: false })));
  const requestLight = new PointLight(0xffd8b0, 0, 4.5, 1.6);
  request.add(halo, core, requestLight);
  scene.add(request);

  const TRAIL = 56;
  const trailPositions = new Float32Array(TRAIL * 3);
  const trailColors = new Float32Array(TRAIL * 3);
  const trailGeometry = track(new BufferGeometry());
  trailGeometry.setAttribute('position', new BufferAttribute(trailPositions, 3));
  trailGeometry.setAttribute('color', new BufferAttribute(trailColors, 3));
  const trailMat = track(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, vertexColors: true,
    uniforms: { uMap: { value: glow }, uSize: { value: 70 * renderer.getPixelRatio() } },
    vertexShader: 'uniform float uSize; varying vec3 vColor; void main() { vColor = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uSize / -mv.z; gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform sampler2D uMap; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, texture2D(uMap, gl_PointCoord).a); }'
  }));
  scene.add(new Points(trailGeometry, trailMat));

  // Path: from deep in the corridor, through each gateway's centre, out towards the visitor.
  const gateCentres = gates.map((g, i) => new Vector3(g.object.position.x, 1.75 - i * 0.02, g.object.position.z));
  const path = new CatmullRomCurve3([
    new Vector3(0, 1.9, -(GATE_COUNT + 0.6) * GATE_SPACING),
    ...gateCentres.slice().reverse(),
    // Exit towards the lower left (in front of the headline column), never behind the portrait.
    new Vector3(-3.2, 1.4, 2.6),
    new Vector3(-6.9, 0.5, 4.6)
  ], false, 'centripetal', 0.4);
  const gateParams = gateCentres.map(c => {
    let best = 0, bestD = Infinity;
    for (let k = 0; k <= 400; k++) { const d = path.getPointAt(k / 400).distanceTo(c); if (d < bestD) { bestD = d; best = k / 400; } }
    return best;
  });
  const JOURNEY = 5.2, REST = 3.4, CYCLE = JOURNEY + REST;

  // Illustrative protocol steps. The current step rides with the request as a small status chip.
  const labels = [
    { text: 'GET /work', gate: 4, tone: 'step' },
    { text: 'TLS ✓', gate: 3, tone: 'step' },
    { text: 'AUTHZ ✓ scope:read', gate: 1, tone: 'step' },
    { text: '200 OK', gate: 0, tone: 'ok' }
  ].map(spec => {
    const l = labelSprite(spec.text, spec.tone);
    track(l.texture); track(l.material);
    scene.add(l.sprite);
    return { ...l, param: gateParams[spec.gate], opacity: 0, slot: 0 };
  });

  /* --- tiers --- */
  let dustCount = DUST_MAX;
  const metals = [];
  scene.traverse(object => { if (object.isMesh && object.userData.metal) metals.push(object); });
  const lights = [key, rim, seamLight];
  const setTier = s => {
    const look = s.tier === 'low' ? looks.matcap : looks.pbr;
    metals.forEach(object => { object.material = look[object.userData.metal]; });
    lights.forEach(light => { light.visible = s.tier !== 'low'; });
    requestLight.visible = s.tier === 'high';
    scene.environment = s.tier === 'low' ? null : getEnvironment();
    dustCount = Math.floor(DUST_MAX * s.settings.particles);
    dustGeometry.setDrawRange(0, dustCount);
    shaftMats.forEach((m, i) => { m.visible = i < (s.tier === 'low' ? 2 : 4); });
    mirror.visible = s.tier !== 'low';
    dustMat.uniforms.uSize.value = 26 * renderer.getPixelRatio();
    trailMat.uniforms.uSize.value = 70 * renderer.getPixelRatio();
  };
  setTier(state);

  /* --- framing --- */
  let narrow = false;
  let chipHeight = 0.034;
  let viewHeight = 900;
  const resize = (width, height) => {
    camera.aspect = width / height;
    narrow = camera.aspect < 0.9;
    camera.fov = narrow ? 44 : 32;
    // Chip height as a fraction of the view: about 26–30 CSS px on any screen.
    chipHeight = MathUtils.clamp(28 / height, 0.02, 0.05);
    viewHeight = height;
    if (narrow) camera.setViewOffset(width, height, 0, -height * 0.3, width, height);
    else camera.setViewOffset(width, height, -width * 0.15, -height * 0.02, width, height);
    camera.updateProjectionMatrix();
    dustMat.uniforms.uSize.value = 26 * renderer.getPixelRatio();
    trailMat.uniforms.uSize.value = 70 * renderer.getPixelRatio();
  };

  /* --- ignition --- */
  let igniteAt = -1;
  let time = 0;
  const ignite = () => { if (igniteAt < 0) igniteAt = time; };
  const igniteLevel = delay => igniteAt < 0 ? 0 : MathUtils.clamp((time - igniteAt - delay) / 1.4, 0, 1);

  const base = new Vector3();
  const camRight = new Vector3();
  const camUp = new Vector3();
  const tmp = new Vector3();
  const up = new Vector3(0, 1, 0);

  const update = (dt, s) => {
    time += dt;
    const p = s.progress;
    const entrance = 1 - Math.pow(1 - MathUtils.clamp(igniteAt < 0 ? 0 : (time - igniteAt) / 3.2, 0, 1), 3);

    // Camera: settles from a closer, higher start; then drifts; walks through the gateway on scroll.
    if (narrow) base.set(0.0, 2.1, 12.5); else base.set(0.9, 1.9, 10.2);
    camera.position.set(
      base.x + Math.sin(time * 0.11) * 0.25 + s.pointer.x * 0.45 + (1 - entrance) * 0.6,
      base.y + Math.sin(time * 0.17) * 0.08 - s.pointer.y * 0.22 + p * 0.25 + (1 - entrance) * 0.9,
      base.z - p * 6.5 - (1 - entrance) * 3.2
    );
    lookAt.set(0, 1.75 + p * 0.3, -p * 4);
    camera.lookAt(lookAt);

    // Lights and atmosphere come up with ignition.
    key.intensity = 46 * igniteLevel(0);
    rim.intensity = 22 * igniteLevel(0.3);
    floorMat.uniforms.uIgnite.value = igniteLevel(0.2);
    floorMat.uniforms.uTime.value = time;
    dustMat.uniforms.uTime.value = time;
    dustMat.uniforms.uIgnite.value = igniteLevel(0.6);
    shaftMats.forEach(m => { m.uniforms.uTime.value = time; m.uniforms.uStrength.value = 0.32 * igniteLevel(0.4) * (1 - p * 0.6); });

    // Gateways ignite near → far, each seam lighting outward from its crown.
    gates.forEach((gate, i) => {
      gate.flash = Math.max(0, gate.flash - dt * 2.2);
      gate.uniforms.uTime.value = time;
      gate.uniforms.uIgnite.value = igniteLevel(0.15 + i * 0.22);
      gate.uniforms.uFlash.value = gate.flash;
      gate.object.position.y = Math.sin(time * 0.6 + i) * 0.006;
    });

    for (let i = 0; i < dustCount; i++) {
      const k = i * 3;
      dustPositions[k + 1] += dt * (0.04 + dustSeeds[i] * 0.06);
      dustPositions[k] += Math.sin(time * 0.3 + dustSeeds[i] * 50) * dt * 0.04;
      if (dustPositions[k + 1] > 6.0) dustPositions[k + 1] = -0.1;
    }
    dustGeometry.attributes.position.needsUpdate = true;

    // Request journey (starts once the near gateways have lit).
    const clock = igniteAt < 0 ? -1 : time - igniteAt - 1.4;
    let intensity = 0, u = 0, t = 0;
    if (clock >= 0) {
      t = clock % CYCLE;
      if (t < JOURNEY) {
        u = MathUtils.smootherstep(t / JOURNEY, 0, 1);
        path.getPointAt(u, tmp);
        tmp.applyAxisAngle(up, corridor.rotation.y);
        request.position.copy(tmp);
        // Fade out soon after the last gateway, before it crosses the headline column.
        const exitStart = gateParams[0] + 0.05;
        intensity = Math.min(1, t / 0.5) * (1 - MathUtils.smoothstep(u, exitStart, exitStart + 0.09));
        request.scale.setScalar(0.7 + u * 0.9);
        gateParams.forEach((gp, i) => { if (Math.abs(u - gp) < 0.012) gates[i].flash = 1; });
      }
    }
    // Which step is current: the last checkpoint the request has cleared.
    let current = -1;
    labels.forEach((l, i) => { if (clock >= 0 && t < JOURNEY && u > l.param - 0.01) current = i; });
    camRight.setFromMatrixColumn(camera.matrixWorld, 0);
    camUp.setFromMatrixColumn(camera.matrixWorld, 1);
    // A live request log: the newest step sits beside the request; earlier steps stack above and dim.
    const dist = camera.position.distanceTo(request.position);
    const pxToWorld = 2 * dist * Math.tan(MathUtils.degToRad(camera.fov) / 2) / viewHeight;
    labels.forEach((l, i) => {
      const slot = current - i;
      const weight = slot < 0 ? 0 : [1, 0.6, 0.38, 0.24][Math.min(slot, 3)];
      const target = weight * intensity;
      l.opacity += (target - l.opacity) * Math.min(1, dt * (target > l.opacity ? 9 : 6));
      l.slot += ((slot < 0 ? 0 : slot) - l.slot) * Math.min(1, dt * 8);
      l.material.opacity = l.opacity * (1 - p);
      l.sprite.visible = l.material.opacity > 0.01;
      l.sprite.scale.set(chipHeight * l.sprite.userData.aspect, chipHeight, 1);
      const chipPx = chipHeight * viewHeight;
      l.sprite.position.copy(request.position)
        .addScaledVector(camUp, (chipPx * 0.9 + l.slot * chipPx * 1.25) * pxToWorld)
        .addScaledVector(camRight, (18 + chipPx * l.sprite.userData.aspect * 0.5) * pxToWorld);
    });
    request.visible = intensity > 0.01;
    core.material.opacity = intensity;
    halo.material.opacity = intensity * 0.45;
    requestLight.intensity = intensity * 5.5;
    core.lookAt(camera.position);
    halo.lookAt(camera.position);
    seamLight.intensity = (4.5 + Math.sin(time * 2.2) * 0.8) * igniteLevel(0.15) + gates[0].flash * 6;

    for (let i = TRAIL - 1; i > 0; i--) {
      trailPositions[i * 3] = trailPositions[(i - 1) * 3];
      trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
      trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
    }
    trailPositions[0] = request.position.x; trailPositions[1] = request.position.y; trailPositions[2] = request.position.z;
    for (let i = 0; i < TRAIL; i++) {
      const f = Math.pow(1 - i / TRAIL, 1.8) * intensity * 0.85;
      trailColors[i * 3] = f; trailColors[i * 3 + 1] = 0.74 * f; trailColors[i * 3 + 2] = 0.48 * f;
    }
    trailGeometry.attributes.position.needsUpdate = true;
    trailGeometry.attributes.color.needsUpdate = true;
  };

  const dispose = () => {
    disposables.forEach(item => item.dispose?.());
    template.traverse(object => { if (object.isMesh) { object.geometry.dispose(); object.material.dispose(); } });
  };

  return {
    scene, camera, update, resize, setTier, dispose, ignite,
    debug: { labels, gateParams },
    bloom: { strength: 0.9, radius: 0.6, threshold: 0.84 },
    finish: { vignette: 0.42, grain: 0.035 }
  };
}
