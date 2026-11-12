/*
 * The Gateway — hero world (immersive v3, phase 1).
 *
 * A corridor of machined copper gateways (Blender asset, assets/worlds/gateway.glb)
 * recedes behind the portrait. A shaft of warm light falls through the first
 * gateway, dust drifts in it, and every few seconds a request is born at the
 * gateway's seam and travels out towards the visitor. Scrolling the hero moves
 * the camera forward through the gateway.
 */
import {
  AdditiveBlending, BufferAttribute, BufferGeometry, CanvasTexture, Color, DoubleSide, Fog, Group,
  MathUtils, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, PointLight, Points,
  PointsMaterial, Scene, ShaderMaterial, SpotLight, SRGBColorSpace, Vector3
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const BG = 0x0c0b0a;
const AMBER = 0xdcad7e;
const COPPER = 0xc08a5b;

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

/* Floor: a dark plane with a fine engraved grid that fades with distance and a warm pool of light. */
function floorMaterial() {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uGlow: { value: new Color(AMBER) }, uFade: { value: 1 } },
    vertexShader: /* glsl */`
      varying vec3 vWorld;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform vec3 uGlow; uniform float uFade;
      varying vec3 vWorld;
      float gridLine(vec2 p, float scale) {
        vec2 g = abs(fract(p * scale - 0.5) - 0.5) / fwidth(p * scale);
        return 1.0 - min(min(g.x, g.y), 1.0);
      }
      void main() {
        float d = length(vWorld.xz - vec2(0.0, -2.0));
        float fade = smoothstep(16.0, 2.0, d);
        float grid = gridLine(vWorld.xz, 1.0) * 0.18 + gridLine(vWorld.xz, 4.0) * 0.05;
        float pool = exp(-pow(length(vWorld.xz - vec2(0.0, 0.6)) * 0.55, 2.0));
        // a slow pulse travelling down the corridor
        float lane = exp(-pow(vWorld.x * 2.2, 2.0)) * (0.5 + 0.5 * sin(vWorld.z * 1.4 + uTime * 1.6));
        vec3 col = uGlow * (grid * fade + pool * 0.22 + lane * 0.05 * fade);
        float alpha = clamp((grid * fade + pool * 0.5 + lane * 0.08 * fade) * uFade, 0.0, 1.0);
        gl_FragColor = vec4(col, alpha);
      }`
  });
}

/* Light shaft: layered soft planes with drifting noise, additive. */
function shaftMaterial(seed) {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    blending: AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uSeed: { value: seed }, uStrength: { value: 0.32 }, uColor: { value: new Color(0xffc690) } },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform float uSeed; uniform float uStrength; uniform vec3 uColor;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
      }
      void main() {
        float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
        float beam = pow(clamp(across, 0.0, 1.0), 2.2);
        float along = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
        float n = noise(vec2(vUv.x * 6.0 + uSeed, vUv.y * 2.0 - uTime * 0.12)) * 0.6 + 0.4;
        gl_FragColor = vec4(uColor, beam * along * n * uStrength);
      }`
  });
}

export async function create({ renderer, environment, state }) {
  const scene = new Scene();
  scene.background = new Color(BG);
  scene.fog = new Fog(BG, 6, 24);
  scene.environment = environment;
  scene.environmentIntensity = 0.42;

  const camera = new PerspectiveCamera(32, 1, 0.1, 60);
  const lookAt = new Vector3(0, 1.75, 0);
  const glow = glowTexture();
  const disposables = [glow];
  const track = item => { disposables.push(item); return item; };

  /* --- the gateway corridor (Blender asset) --- */
  const gltf = await new GLTFLoader().loadAsync('assets/worlds/gateway.glb');
  const template = gltf.scene;
  const materials = {};
  template.traverse(object => {
    if (!object.isMesh) return;
    const m = object.material;
    const key = m.name.split('.')[0];
    materials[key] = m;
    m.side = 0; // FrontSide: the closed mesh doesn't need double-sided cost
    if (key === 'Copper') { m.metalness = 1; m.roughness = 0.28; m.envMapIntensity = 1.1; }
  });

  const corridor = new Group();
  scene.add(corridor);
  const gates = [];
  const GATE_COUNT = 6;
  for (let i = 0; i < GATE_COUNT; i++) {
    const gate = i === 0 ? template : template.clone(true);
    const s = 1.05 * Math.pow(0.97, i);
    gate.scale.setScalar(s);
    gate.position.set(Math.sin(i * 0.7) * 0.06, 0, -i * 3.6);
    corridor.add(gate);
    gates.push(gate);
  }
  // Seams further down the corridor glow less (a sense of distance and sequence).
  if (materials.Glow) {
    materials.Glow.emissiveIntensity = 6;
    gates.forEach((gate, i) => {
      if (i === 0) return;
      gate.traverse(object => {
        if (object.isMesh && object.material.name.startsWith('Glow')) {
          object.material = object.material.clone();
          object.material.emissiveIntensity = 6 * Math.pow(0.55, i);
          track(object.material);
        }
      });
    });
  }
  corridor.rotation.y = -0.38;

  /* --- floor --- */
  const floorMat = track(floorMaterial());
  const floor = new Mesh(track(new PlaneGeometry(60, 60)), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.235;
  scene.add(floor);

  /* --- light --- */
  const key = new SpotLight(0xffd2a6, 70, 22, 0.42, 0.65, 1.6);
  key.position.set(3.2, 8.5, 3.0);
  key.target.position.set(0, 0.6, 0);
  scene.add(key, key.target);
  const rim = new SpotLight(0x88a6c4, 22, 20, 0.6, 0.8, 1.6);
  rim.position.set(-4, 4, -6);
  rim.target.position.set(0, 1.5, 0);
  scene.add(rim, rim.target);
  const seamLight = new PointLight(AMBER, 6, 5, 1.8);
  seamLight.position.set(0, 2.6, 0.25);
  scene.add(seamLight);

  /* --- light shaft through the first gateway --- */
  const shaft = new Group();
  const shaftMats = [0.0, 1.7, 3.1].map(seed => track(shaftMaterial(seed)));
  shaftMats.forEach((mat, i) => {
    const plane = new Mesh(track(new PlaneGeometry(1.6 + i * 0.5, 11, 1, 1)), mat);
    plane.rotation.y = i * 0.6;
    shaft.add(plane);
  });
  shaft.position.set(1.0, 4.3, 0.4);
  shaft.rotation.z = 0.32;
  scene.add(shaft);

  /* --- dust in the shaft --- */
  const DUST_MAX = 700;
  const dustPositions = new Float32Array(DUST_MAX * 3);
  const dustSeeds = new Float32Array(DUST_MAX);
  for (let i = 0; i < DUST_MAX; i++) {
    dustPositions[i * 3] = MathUtils.randFloat(-2.4, 3.2);
    dustPositions[i * 3 + 1] = MathUtils.randFloat(-0.1, 5.5);
    dustPositions[i * 3 + 2] = MathUtils.randFloat(-3.5, 2.5);
    dustSeeds[i] = Math.random() * 100;
  }
  const dustGeometry = track(new BufferGeometry());
  dustGeometry.setAttribute('position', new BufferAttribute(dustPositions, 3));
  const dustMaterial = track(new PointsMaterial({ map: glow, color: 0xffd9b0, size: 0.045, transparent: true, opacity: 0.65, blending: AdditiveBlending, depthWrite: false }));
  const dust = new Points(dustGeometry, dustMaterial);
  scene.add(dust);

  /* --- the request: born at the seam, travels towards the visitor --- */
  const request = new Group();
  const core = new Mesh(track(new PlaneGeometry(0.5, 0.5)), track(new MeshBasicMaterial({ map: glow, color: 0xfff1df, transparent: true, blending: AdditiveBlending, depthWrite: false })));
  const halo = new Mesh(track(new PlaneGeometry(1.8, 1.8)), track(new MeshBasicMaterial({ map: glow, color: AMBER, transparent: true, opacity: 0.5, blending: AdditiveBlending, depthWrite: false })));
  request.add(halo, core);
  const requestLight = new PointLight(0xffd8b0, 0, 4, 1.6);
  request.add(requestLight);
  scene.add(request);
  const TRAIL = 40;
  const trailPositions = new Float32Array(TRAIL * 3);
  const trailColors = new Float32Array(TRAIL * 3);
  const trailGeometry = track(new BufferGeometry());
  trailGeometry.setAttribute('position', new BufferAttribute(trailPositions, 3));
  trailGeometry.setAttribute('color', new BufferAttribute(trailColors, 3));
  const trail = new Points(trailGeometry, track(new PointsMaterial({ map: glow, size: 0.16, vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false })));
  scene.add(trail);
  const requestStart = new Vector3(0.0, 2.45, 0.0);
  const requestEnd = new Vector3(-2.6, 0.6, 5.5);
  const requestMid = new Vector3(-0.6, 3.2, 2.6);
  const CYCLE = 7.5;

  /* --- per-tier settings --- */
  let dustCount = DUST_MAX;
  const setTier = s => {
    dustCount = Math.floor(DUST_MAX * s.settings.particles);
    dustGeometry.setDrawRange(0, dustCount);
    shaftMats.forEach((m, i) => { m.visible = i < (s.tier === 'low' ? 1 : 3); });
    key.castShadow = false;
  };
  setTier(state);

  /* --- framing: keep the gateway behind the portrait --- */
  let narrow = false;
  const resize = (width, height) => {
    camera.aspect = width / height;
    narrow = camera.aspect < 0.9;
    camera.fov = narrow ? 44 : 32;
    // Shift the image so the gateway sits behind the portrait (right side on wide screens).
    // Phones: drop the gateway behind the portrait, below the headline.
    if (narrow) camera.setViewOffset(width, height, 0, -height * 0.3, width, height);
    else camera.setViewOffset(width, height, -width * 0.15, -height * 0.02, width, height);
    camera.updateProjectionMatrix();
  };

  let time = 0;
  const tmp = new Vector3();
  const update = (dt, s) => {
    time += dt;
    const p = s.progress; // 0 at top of hero → 1 when the hero has scrolled away

    // Camera: slow breathing drift + pointer parallax + walk forward through the gateway on scroll.
    const base = narrow ? new Vector3(0.0, 2.1, 12.5) : new Vector3(0.9, 1.9, 10.2);
    camera.position.set(
      base.x + Math.sin(time * 0.11) * 0.25 + s.pointer.x * 0.45,
      base.y + Math.sin(time * 0.17) * 0.08 - s.pointer.y * 0.22 + p * 0.25,
      base.z - p * 6.5
    );
    lookAt.set(0, 1.75 + p * 0.3, -p * 4);
    camera.lookAt(lookAt);

    floorMat.uniforms.uTime.value = time;
    shaftMats.forEach(m => { m.uniforms.uTime.value = time; m.uniforms.uStrength.value = 0.3 * (1 - p * 0.6); });
    gates.forEach((gate, i) => { gate.position.y = Math.sin(time * 0.6 + i) * 0.006; });

    // Dust: slow rise and sway; only the drawn range is updated.
    for (let i = 0; i < dustCount; i++) {
      const k = i * 3;
      dustPositions[k + 1] += dt * (0.05 + (dustSeeds[i] % 1) * 0.06);
      dustPositions[k] += Math.sin(time * 0.3 + dustSeeds[i]) * dt * 0.04;
      if (dustPositions[k + 1] > 5.6) dustPositions[k + 1] = -0.1;
    }
    dustGeometry.attributes.position.needsUpdate = true;

    // Request lifecycle: gather (0–1.2s), launch along a curve (1.2–3.4s), rest.
    const t = time % CYCLE;
    let intensity = 0;
    if (t < 1.2) {
      const g = t / 1.2;
      request.position.copy(requestStart);
      request.scale.setScalar(0.2 + g * 0.8);
      intensity = g;
    } else if (t < 3.4) {
      const f = MathUtils.smootherstep((t - 1.2) / 2.2, 0, 1);
      // quadratic Bézier start → mid → end
      tmp.copy(requestStart).multiplyScalar((1 - f) * (1 - f))
        .addScaledVector(requestMid, 2 * (1 - f) * f)
        .addScaledVector(requestEnd, f * f);
      request.position.copy(tmp);
      request.scale.setScalar(1 + f * 0.6);
      intensity = 1 - f * 0.85;
    } else {
      intensity = 0;
    }
    request.position.applyAxisAngle(new Vector3(0, 1, 0), corridor.rotation.y);
    request.visible = intensity > 0.01;
    core.material.opacity = intensity;
    halo.material.opacity = intensity * 0.45;
    requestLight.intensity = intensity * 5;
    core.lookAt(camera.position);
    halo.lookAt(camera.position);
    seamLight.intensity = 5 + Math.sin(time * 2.2) * 0.8 + (t < 1.2 ? (t / 1.2) * 6 : 0);

    for (let i = TRAIL - 1; i > 0; i--) {
      trailPositions[i * 3] = trailPositions[(i - 1) * 3];
      trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
      trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
    }
    trailPositions[0] = request.position.x;
    trailPositions[1] = request.position.y;
    trailPositions[2] = request.position.z;
    for (let i = 0; i < TRAIL; i++) {
      const f = Math.pow(1 - i / TRAIL, 1.7) * intensity * 0.8;
      trailColors[i * 3] = 1.0 * f; trailColors[i * 3 + 1] = 0.75 * f; trailColors[i * 3 + 2] = 0.5 * f;
    }
    trailGeometry.attributes.position.needsUpdate = true;
    trailGeometry.attributes.color.needsUpdate = true;
  };

  const dispose = () => {
    disposables.forEach(item => item.dispose?.());
    template.traverse(object => { if (object.isMesh) { object.geometry.dispose(); object.material.dispose(); } });
  };

  return {
    scene, camera, update, resize, setTier, dispose,
    bloom: { strength: 0.85, radius: 0.55, threshold: 0.78 }
  };
}
