/*
 * The Strata — Depth world (immersive v3, phase 2).
 *
 * A three-layer hardware stack (Blender asset: assets/worlds/strata.glb, built by
 * source/blender/strata.py): a glass display in a copper bezel (Experience), a brass
 * plate with a lock cylinder (Trust) and an anodised housing with a circuit board
 * (Foundation). The slabs slide on four steel guide rods, so the exploded view is
 * a real mechanism.
 *
 * The existing page controls drive it, so nothing about the section's behaviour
 * changed: the scroll scrub, "Assembled" / "Exploded" / "Scroll driven", the drag
 * and Rotate controls and the layer buttons all write to #system-rig, and this world
 * reads from there every frame.
 *
 * Realism comes from physically based materials (anodised aluminium, brushed copper,
 * brass, steel, rubber, smoked glass), real shadows between the layers on capable
 * GPUs, and a baked contact shadow everywhere. Integrated GPUs get Blender-baked
 * matcaps with no lights.
 */
import {
  CanvasTexture, CircleGeometry, Color, DirectionalLight, DoubleSide, Fog, Group, MathUtils, Mesh,
  MeshBasicMaterial, MeshMatcapMaterial, MeshPhysicalMaterial, MeshStandardMaterial, PCFSoftShadowMap,
  PerspectiveCamera, PlaneGeometry, Scene, SRGBColorSpace, TextureLoader, Vector3
} from 'three';
import { GLTFLoader } from './loaders.js';

const BG = 0x0c0b0a;
const AMBER = new Color(0xdcad7e);
// Separation of the layers when exploded, and the stack's resting heights. These match
// source/blender/strata.py (the glTF nodes carry the resting heights themselves).
const LIFT = { foundation: 0, trust: 0.55, experience: 1.1 };
const TOP_WASHER = 0.283;          // top of the assembled stack (experience bezel + washer)
const NUT_SEAT = 0.04;             // the rod ends inside the acorn nut
const LAYERS = ['foundation', 'trust', 'experience'];
const BASE_YAW = -0.52;

/* Brushed metal: faint streaks in the roughness, so highlights stretch like machined metal. */
function brushed(material, key) {
  material.onBeforeCompile = shader => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vBrush;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBrush = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vBrush;
        float brushHash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        float streak = brushHash(vec2(floor(vBrush.x * 700.0), floor(vBrush.z * 14.0)));
        roughnessFactor = clamp(roughnessFactor * (0.8 + 0.4 * streak), 0.06, 1.0);`);
  };
  material.customProgramCacheKey = () => `strata-brushed-${key}`;
}

/* The physically based look of each material. */
function pbr(kind) {
  switch (kind) {
    case 'copper': { const m = new MeshStandardMaterial({ color: new Color(0.70, 0.34, 0.17), metalness: 1, roughness: 0.34, envMapIntensity: 0.9 }); brushed(m, 'copper'); return m; }
    case 'brass': { const m = new MeshStandardMaterial({ color: new Color(0.62, 0.45, 0.21), metalness: 1, roughness: 0.32, envMapIntensity: 0.9 }); brushed(m, 'brass'); return m; }
    case 'anodised': { const m = new MeshStandardMaterial({ color: new Color(0.05, 0.048, 0.052), metalness: 0.85, roughness: 0.46, envMapIntensity: 0.8 }); brushed(m, 'anodised'); return m; }
    case 'steel': return new MeshStandardMaterial({ color: new Color(0.66, 0.67, 0.69), metalness: 1, roughness: 0.3, envMapIntensity: 0.9 });
    case 'rubber': return new MeshStandardMaterial({ color: new Color(0.02, 0.02, 0.02), metalness: 0, roughness: 0.95, envMapIntensity: 0.3 });
    case 'silicon': return new MeshStandardMaterial({ color: new Color(0.016, 0.016, 0.019), metalness: 0.1, roughness: 0.4, envMapIntensity: 0.7 });
    case 'panel': return new MeshStandardMaterial({ color: new Color(0.03, 0.028, 0.03), metalness: 0.2, roughness: 0.62, envMapIntensity: 0.5 });
    case 'lettering': return new MeshStandardMaterial({ color: new Color(0.86, 0.66, 0.46), metalness: 0.7, roughness: 0.34, envMapIntensity: 0.8 });
    case 'glass': return new MeshPhysicalMaterial({
      color: new Color(0.02, 0.019, 0.018), metalness: 0, roughness: 0.04, transparent: true, opacity: 0.3,
      clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.6, depthWrite: false, side: DoubleSide
    });
    default: return new MeshBasicMaterial({ color: AMBER.clone().multiplyScalar(2.4), toneMapped: false });   // glow
  }
}

/* The low tier: a Blender-baked matcap per metal. No lights, no environment, tiny shaders. */
function matcapFor(kind, caps) {
  const dark = { matcap: caps.dark };
  switch (kind) {
    case 'copper': return new MeshMatcapMaterial({ matcap: caps.copper });
    case 'brass': return new MeshMatcapMaterial({ matcap: caps.copper, color: new Color(1.0, 0.9, 0.56) });
    case 'lettering': return new MeshMatcapMaterial({ matcap: caps.copper, color: new Color(1.25, 1.05, 0.9) });
    case 'anodised': return new MeshMatcapMaterial({ ...dark, color: new Color(0.9, 0.9, 0.95) });
    case 'steel': return new MeshMatcapMaterial({ ...dark, color: new Color(2.6, 2.6, 2.7) });
    case 'rubber': return new MeshMatcapMaterial({ ...dark, color: new Color(0.3, 0.3, 0.3) });
    case 'silicon': return new MeshMatcapMaterial({ ...dark, color: new Color(0.5, 0.5, 0.55) });
    case 'panel': return new MeshMatcapMaterial({ ...dark, color: new Color(0.55, 0.55, 0.58) });
    case 'glass': return new MeshMatcapMaterial({ ...dark, color: new Color(0.9, 0.9, 1), transparent: true, opacity: 0.4, depthWrite: false });
    default: return new MeshBasicMaterial({ color: AMBER.clone().multiplyScalar(2.2), toneMapped: false });
  }
}

/* A soft radial gradient, used for the floor falloff and the contact shadow. */
function gradientTexture(stops) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([at, color]) => g.addColorStop(at, color));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

const stripName = name => name.replace(/\d{3}$/, '');

export async function create({ renderer, getEnvironment, state }) {
  const scene = new Scene();
  scene.background = new Color(BG);
  scene.fog = new Fog(BG, 7, 16);
  scene.environmentIntensity = 0.5;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const camera = new PerspectiveCamera(30, 1, 0.1, 40);
  const disposables = [];
  const track = item => { disposables.push(item); return item; };

  const textures = new TextureLoader();
  const [gltf, copperCap, darkCap] = await Promise.all([
    new GLTFLoader().loadAsync('assets/worlds/strata.glb'),
    textures.loadAsync('assets/worlds/matcap-copper.webp'),
    textures.loadAsync('assets/worlds/matcap-darkmetal.webp')
  ]);
  copperCap.colorSpace = darkCap.colorSpace = SRGBColorSpace;
  track(copperCap); track(darkCap);
  const caps = { copper: copperCap, dark: darkCap };

  /* --- the model: layers, rods, per-layer materials --- */
  const root = new Group();            // yaw and pointer sway
  const stack = new Group();
  root.add(stack);
  scene.add(root);

  const layer = {};
  let shaftSource = null;
  let nutSource = null;
  for (const child of [...gltf.scene.children]) {
    const name = stripName(child.name);
    const match = LAYERS.find(l => name === `Layer_${l[0].toUpperCase()}${l.slice(1)}`);
    if (match) layer[match] = child;
    else if (name === 'RodShaft') shaftSource = child;
    else if (name.startsWith('RodNut')) nutSource = child;
  }
  if (!LAYERS.every(l => layer[l]) || !shaftSource || !nutSource) throw new Error('strata.glb is missing parts');

  const rest = {};
  const sets = [];                      // { object, layer, kind, pbr, matcap, base }
  const materialCache = new Map();
  const getMaterial = (look, layerName, kind) => {
    const key = `${look}|${layerName}|${kind}`;
    if (!materialCache.has(key)) {
      const m = look === 'pbr' ? pbr(kind) : matcapFor(kind, caps);
      m.userData.base = m.color.clone();
      m.userData.baseOpacity = m.opacity;
      materialCache.set(key, track(m));
    }
    return materialCache.get(key);
  };

  const register = (object, layerName) => {
    object.traverse(node => {
      if (!node.isMesh) return;
      const kind = stripName(node.material.name || '');
      node.userData.kind = kind;
      node.userData.layer = layerName;
      node.castShadow = kind !== 'glow' && kind !== 'glass';
      node.receiveShadow = kind !== 'glow';
      sets.push(node);
    });
  };
  for (const name of LAYERS) {
    rest[name] = layer[name].position.y;
    stack.add(layer[name]);
    register(layer[name], name);
  }

  // Guide rods: four shafts and acorn nuts cloned from the Blender prototypes.
  const rods = [];
  const rodPositions = [[-0.8, -0.5], [-0.8, 0.5], [0.8, -0.5], [0.8, 0.5]];
  const rodGroup = new Group();
  stack.add(rodGroup);
  for (const [x, z] of rodPositions) {
    const shaft = shaftSource.clone();
    const nut = nutSource.clone();
    shaft.position.set(x, 0, z);
    nut.position.set(x, 0, z);
    rodGroup.add(shaft, nut);
    rods.push({ shaft, nut });
    register(shaft, 'rod');
    register(nut, 'rod');
  }

  /* --- ground: a dark worktop with a baked contact shadow --- */
  const floorTexture = track(gradientTexture([[0, '#2b251d'], [0.6, '#211b14'], [1, '#1c1711']]));
  const floorPbr = track(new MeshStandardMaterial({ color: 0x14110f, metalness: 0.1, roughness: 0.5, envMapIntensity: 0.55 }));
  const floorFlat = track(new MeshBasicMaterial({ map: floorTexture }));
  const floor = new Mesh(new CircleGeometry(9, 64), floorFlat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.026;
  floor.receiveShadow = true;
  scene.add(floor);
  track(floor.geometry);

  const shadowTexture = track(gradientTexture([[0, 'rgba(0,0,0,0.85)'], [0.5, 'rgba(0,0,0,0.4)'], [1, 'rgba(0,0,0,0)']]));
  const contact = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false }));
  contact.rotation.x = -Math.PI / 2;
  contact.position.y = -0.0245;
  scene.add(contact);
  track(contact.geometry); track(contact.material);

  /* --- lights (capable GPUs only) --- */
  const key = new DirectionalLight(0xffe4c8, 0);
  key.position.set(-3.2, 5.2, 3.6);
  key.castShadow = true;
  key.shadow.camera.left = key.shadow.camera.bottom = -2.6;
  key.shadow.camera.right = key.shadow.camera.top = 2.6;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 14;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  key.target.position.set(0, 0.5, 0);
  const rim = new DirectionalLight(0xff9a58, 0);
  rim.position.set(3.4, 2.4, -3.6);
  scene.add(key, key.target, rim);

  /* --- tiers --- */
  let look = 'pbr';
  const applyLook = tier => {
    look = tier === 'low' ? 'matcap' : 'pbr';
    for (const node of sets) node.material = getMaterial(look, node.userData.layer, node.userData.kind);
    floor.material = look === 'pbr' ? floorPbr : floorFlat;
    // Page colour, so the canvas melts into the section. (Tone mapping lifts the composer path a little.)
    scene.background.set(look === 'pbr' ? 0x14100c : 0x1c1711);
    scene.fog.color.copy(scene.background);
    key.visible = rim.visible = look === 'pbr';
    scene.environment = look === 'pbr' ? getEnvironment() : null;
    contact.material.opacity = look === 'pbr' ? 0.5 : 0.8;
  };
  const setTier = s => {
    applyLook(s.tier);
    const size = s.tier === 'high' ? 2048 : 1024;
    if (key.shadow.mapSize.x !== size) {
      key.shadow.mapSize.set(size, size);
      key.shadow.map?.dispose();
      key.shadow.map = null;
    }
    key.castShadow = s.tier !== 'low';
  };
  setTier(state);

  /* --- page state: the existing controls write to #system-rig --- */
  const rig = document.getElementById('system-rig');
  const readNumber = (property, fallback) => {
    const value = parseFloat(rig?.style.getPropertyValue(property));
    return Number.isFinite(value) ? value : fallback;
  };

  const host = rig?.closest('.system-object');
  let aspect = 1;
  let boxWidth = 1;
  let boxHeight = 1;
  let visibleHeight = 1;          // how much of the box is on screen (short laptops cut it off)
  let shiftY = 0;
  let time = 0;
  let igniteAt = -1;
  let spread = 0.05;
  let yaw = 0;
  let focus = 0.3;
  const dim = { foundation: 1, trust: 1, experience: 1 };
  const lastDim = { foundation: -1, trust: -1, experience: -1 };
  const lookAt = new Vector3();

  const resize = (width, height) => {
    aspect = width / Math.max(1, height);
    boxWidth = width; boxHeight = height; visibleHeight = height;
    camera.aspect = aspect;
    camera.fov = aspect < 0.9 ? 34 : 30;
    camera.updateProjectionMatrix();
  };
  const ignite = () => { if (igniteAt < 0) igniteAt = time; };

  const update = (dt, s) => {
    time += dt;
    const ease = rate => 1 - Math.exp(-dt * rate);
    const view = rig?.dataset.view || 'auto';
    const target = view === 'assembled' ? 0 : view === 'exploded' ? 1 : MathUtils.clamp(readNumber('--scroll-spread', 0.7), 0, 1);
    spread += (target - spread) * ease(view === 'auto' ? 10 : 4.2);

    // Layers slide along the rods.
    for (const name of LAYERS) layer[name].position.y = rest[name] + LIFT[name] * spread;
    const nutY = TOP_WASHER + LIFT.experience * spread;
    for (const { shaft, nut } of rods) {
      shaft.scale.y = nutY + NUT_SEAT;
      nut.position.y = nutY;
    }

    // Which layer is being inspected: the others recede a little, like the old CSS plates.
    const selected = rig?.dataset.layer || 'experience';
    for (const name of LAYERS) {
      dim[name] += ((name === selected ? 1 : 0.7) - dim[name]) * ease(7);
      if (Math.abs(dim[name] - lastDim[name]) > 0.002) {
        lastDim[name] = dim[name];
        for (const [key2, m] of materialCache) {
          if (key2.split('|')[1] !== name || m.userData.base === undefined) continue;
          m.color.copy(m.userData.base).multiplyScalar(dim[name]);
        }
      }
    }

    // Turn: the page's drag and Rotate control, plus a little pointer sway.
    const manual = readNumber('--manual-rotation', 0) * Math.PI / 180;
    yaw += ((BASE_YAW - manual) - yaw) * ease(14);
    const entrance = igniteAt < 0 ? 0 : MathUtils.clamp((time - igniteAt) / 2.2, 0, 1);
    const settle = Math.pow(1 - entrance, 3);
    root.rotation.y = yaw + s.pointer.x * 0.1 + settle * 0.5;
    root.rotation.x = s.pointer.y * 0.025;

    // Frame what is actually visible: the box can extend below a short viewport (header above, controls below).
    if (host) {
      const r = host.getBoundingClientRect();
      const top = Math.max(r.top, 76);
      const bottom = Math.min(r.bottom, innerHeight - 8);
      const visible = MathUtils.clamp(bottom - top, 220, boxHeight);
      const shift = Math.round((top + bottom) / 2 - (r.top + r.height / 2));
      if (Math.abs(shift - shiftY) > 1 || Math.abs(visible - visibleHeight) > 1) {
        shiftY = shift; visibleHeight = visible;
        camera.setViewOffset(boxWidth, boxHeight, 0, -shiftY, boxWidth, boxHeight);
      }
    }

    // Camera: far enough to hold the whole stack, rising a little as it opens.
    const halfTan = Math.tan(MathUtils.degToRad(camera.fov / 2));
    const e0 = MathUtils.degToRad(27 + 14 * spread);
    const needHeight = ((0.45 + 1.45 * spread) * Math.cos(e0) + 2.0 * Math.sin(e0)) * 1.08;
    const needWidth = 2.3 * 1.05;
    const distance = Math.max(needHeight / (2 * halfTan) * (boxHeight / visibleHeight), needWidth / (2 * halfTan * aspect)) * (1 + settle * 0.25);
    const elevation = e0;
    const selectedLift = rest[selected] + LIFT[selected] * spread;
    focus += ((0.12 + 0.52 * spread + (selectedLift - (0.12 + 0.52 * spread)) * 0.1) - focus) * ease(5);
    lookAt.set(0, focus, 0);
    camera.position.set(0, focus + Math.sin(elevation) * distance, Math.cos(elevation) * distance);
    camera.lookAt(lookAt);

    // Lighting and the baked contact shadow follow the opening.
    const lit = igniteAt < 0 ? 0 : MathUtils.clamp((time - igniteAt) / 1.4, 0, 1);
    key.intensity = 3.1 * lit;
    rim.intensity = 1.5 * lit;
    const spreadGrow = 1 + spread * 0.16;
    contact.scale.set(2.9 * spreadGrow, 2.1 * spreadGrow, 1);
    contact.rotation.z = root.rotation.y;
    contact.material.opacity = (look === 'pbr' ? 0.5 : 0.8) * (1 - spread * 0.35) * (0.3 + 0.7 * lit);

    // The display is alive: a slow breath in the light lines, brighter when the layer is inspected.
    const glowColor = AMBER.clone().multiplyScalar((2.0 + Math.sin(time * 1.4) * 0.35) * (0.45 + 0.55 * dim.experience) * (0.25 + 0.75 * lit));
    for (const [k, m] of materialCache) if (k.endsWith('|glow')) m.color.copy(glowColor);
  };

  const dispose = () => {
    disposables.forEach(item => item.dispose?.());
    gltf.scene.traverse(object => { if (object.isMesh) object.geometry.dispose(); });
    key.shadow.map?.dispose();
  };

  return {
    scene, camera, update, resize, setTier, dispose, ignite,
    debug: { get spread() { return spread; }, get yaw() { return yaw; }, dim },
    bloom: { strength: 0.42, radius: 0.5, threshold: 0.92 },
    finish: { vignette: 0.38, grain: 0.03 }
  };
}
