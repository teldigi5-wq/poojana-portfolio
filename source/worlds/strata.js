/*
 * The Temple of Depth — Depth world (immersive v3, phase 2, Greek direction).
 *
 * A Greek temple built from three layers, procedurally (no model file):
 *   Foundation  the stepped stylobate (marble)
 *   Trust       the colonnade: fluted columns, capitals, a cella wall
 *   Experience  the entablature and pediment, with gold acroteria and a lit oculus
 *
 * The existing page controls drive it: scroll scrub, Assembled / Exploded / Scroll driven,
 * drag and Rotate, and the layer buttons all write to #system-rig, and this world reads
 * from there every frame, so the section behaves as before.
 *
 * Realism: procedural veined marble, fluted columns with entasis, a gilded metal, soft
 * shadows between the layers and a baked contact shadow. Integrated GPUs skip the
 * environment and shadow map and are lit by simple lights.
 */
import {
  BoxGeometry, CanvasTexture, CircleGeometry, Color, ConeGeometry, CylinderGeometry, DirectionalLight,
  ExtrudeGeometry, Fog, Group, HemisphereLight, MathUtils, Mesh, MeshBasicMaterial,
  MeshStandardMaterial, PCFSoftShadowMap, PerspectiveCamera, PlaneGeometry, RepeatWrapping, Scene, Shape,
  SphereGeometry, SRGBColorSpace, TorusGeometry, Vector3
} from 'three';

const BG = 0x0c0b0a;
const AMBER = new Color(0xdcad7e);
const LIFT = { foundation: 0, trust: 0.45, experience: 0.9 };
const REST = { foundation: 0, trust: 0.24, experience: 1.02 };
const LAYERS = ['foundation', 'trust', 'experience'];
const BASE_YAW = -0.5;

/* Veined marble, painted once into a canvas. */
function marbleTexture(seed, tint) {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  let state = seed;
  const rand = () => { state = (state * 16807) % 2147483647; return state / 2147483647; };
  ctx.fillStyle = tint;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 90; i++) {            // soft clouds
    const g = ctx.createRadialGradient(rand() * size, rand() * size, 0, rand() * size, rand() * size, 60 + rand() * 120);
    g.addColorStop(0, `rgba(120,112,100,${0.04 + rand() * 0.05})`);
    g.addColorStop(1, 'rgba(120,112,100,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  ctx.filter = 'blur(0.8px)';
  for (let v = 0; v < 16; v++) {            // veins
    let x = rand() * size; let y = rand() * size; let a = rand() * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(x, y);
    const steps = 30 + Math.floor(rand() * 40);
    for (let k = 0; k < steps; k++) {
      a += (rand() - 0.5) * 0.9;
      x += Math.cos(a) * (6 + rand() * 9); y += Math.sin(a) * (6 + rand() * 9);
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(${96 + rand() * 30},${90 + rand() * 24},${84 + rand() * 24},${0.18 + rand() * 0.3})`;
    ctx.lineWidth = 0.6 + rand() * 1.8;
    ctx.stroke();
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

/* A column shaft: tapered (entasis) with 20 flutes. */
function flutedShaft(rBottom, rTop, height) {
  const geometry = new CylinderGeometry(rTop, rBottom, height, 100, 12, true);
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i); const z = pos.getZ(i);
    const a = Math.atan2(z, x);
    const flute = 1 - 0.07 * (1 - Math.pow(Math.abs(Math.sin(a * 10)), 0.55));
    pos.setX(i, x * flute); pos.setZ(i, z * flute);
  }
  geometry.computeVertexNormals();
  return geometry;
}

/* The low tier skips shadows and environment; the page colour is matched either way. */
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

export async function create({ renderer, getEnvironment, state }) {
  const scene = new Scene();
  scene.background = new Color(BG);
  scene.fog = new Fog(BG, 8, 18);
  scene.environmentIntensity = 0.55;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const camera = new PerspectiveCamera(30, 1, 0.1, 40);
  const disposables = [];
  const track = item => { disposables.push(item); return item; };

  const root = new Group();
  const stack = new Group();
  root.add(stack);
  scene.add(root);

  /* --- materials: one marble per layer so a layer can recede on its own --- */
  const tints = { foundation: '#d9d2c5', trust: '#efe9de', experience: '#f4efe6' };
  const seeds = { foundation: 11, trust: 29, experience: 47 };
  const layerMats = {};
  const marble = name => {
    const map = track(marbleTexture(seeds[name], tints[name]));
    const m = track(new MeshStandardMaterial({ map, color: new Color(0.74, 0.72, 0.7), roughness: 0.34, metalness: 0, envMapIntensity: 1.1 }));
    m.userData.base = m.color.clone();
    (layerMats[name] ||= []).push(m);
    return m;
  };
  const shade = name => {   // slightly darker marble for the cella and recesses
    const m = marble(name);
    m.userData.base = new Color(0.46, 0.45, 0.43);
    m.color.copy(m.userData.base);
    return m;
  };
  const gold = name => {
    const m = track(new MeshStandardMaterial({ color: new Color(0.85, 0.6, 0.26), metalness: 1, roughness: 0.28, envMapIntensity: 1.2 }));
    m.userData.base = m.color.clone();
    (layerMats[name] ||= []).push(m);
    return m;
  };
  const dark = name => {
    const m = track(new MeshStandardMaterial({ color: new Color(0.045, 0.04, 0.038), roughness: 0.55, metalness: 0.3 }));
    m.userData.base = m.color.clone();
    (layerMats[name] ||= []).push(m);
    return m;
  };
  const glowMaterials = [];
  const glow = () => { const m = track(new MeshBasicMaterial({ color: AMBER.clone().multiplyScalar(2.2), toneMapped: false })); glowMaterials.push(m); return m; };

  const mesh = (parent, geometry, material, x = 0, y = 0, z = 0) => {
    track(geometry);
    const o = new Mesh(geometry, material);
    o.position.set(x, y, z);
    o.castShadow = o.receiveShadow = true;
    parent.add(o);
    return o;
  };

  const layer = { foundation: new Group(), trust: new Group(), experience: new Group() };
  for (const name of LAYERS) { layer[name].position.y = REST[name]; stack.add(layer[name]); }

  /* Foundation: the stylobate, three steps. */
  {
    const m = marble('foundation');
    [[2.6, 1.7], [2.4, 1.5], [2.2, 1.3]].forEach(([w, d], i) => mesh(layer.foundation, new BoxGeometry(w, 0.08, d), m, 0, 0.04 + i * 0.08, 0));
  }

  /* Trust: cella wall, a door, and twelve fluted columns. */
  {
    const m = marble('trust');
    const wall = shade('trust');
    mesh(layer.trust, new BoxGeometry(1.46, 0.78, 0.5), wall, 0, 0.39, 0);
    mesh(layer.trust, new BoxGeometry(0.2, 0.44, 0.02), dark('trust'), 0, 0.22, 0.26);
    const g = gold('trust');
    mesh(layer.trust, new BoxGeometry(0.24, 0.02, 0.03), g, 0, 0.45, 0.26);
    const xs = [-0.95, -0.57, -0.19, 0.19, 0.57, 0.95];
    for (const z of [-0.52, 0.52]) for (const x of xs) {
      const col = new Group();
      col.position.set(x, 0, z);
      layer.trust.add(col);
      mesh(col, new CylinderGeometry(0.095, 0.1, 0.03, 40), m, 0, 0.015, 0);                 // plinth
      mesh(col, new TorusGeometry(0.083, 0.014, 10, 40).rotateX(Math.PI / 2), m, 0, 0.045, 0); // base moulding
      mesh(col, flutedShaft(0.08, 0.062, 0.62), m, 0, 0.375, 0);                           // shaft
      mesh(col, new CylinderGeometry(0.095, 0.064, 0.05, 40), m, 0, 0.71, 0);              // echinus
      mesh(col, new BoxGeometry(0.2, 0.03, 0.2), m, 0, 0.75, 0);                           // abacus
    }
  }

  /* Experience: entablature, pediment, acroteria, and a lit oculus. */
  {
    const m = marble('experience');
    const g = gold('experience');
    mesh(layer.experience, new BoxGeometry(2.2, 0.1, 1.3), m, 0, 0.05, 0);                  // architrave
    mesh(layer.experience, new BoxGeometry(2.16, 0.1, 1.26), shade('experience'), 0, 0.15, 0); // frieze
    const triglyph = dark('experience');
    for (let i = 0; i < 12; i++) for (const z of [-0.633, 0.633]) {
      mesh(layer.experience, new BoxGeometry(0.07, 0.08, 0.012), triglyph, -0.99 + i * 0.18, 0.15, z);
    }
    mesh(layer.experience, new BoxGeometry(2.3, 0.04, 1.4), m, 0, 0.22, 0);                 // cornice
    const tri = new Shape();
    tri.moveTo(-1.1, 0); tri.lineTo(1.1, 0); tri.lineTo(0, 0.3); tri.closePath();
    const roof = new ExtrudeGeometry(tri, { depth: 1.3, bevelEnabled: false });
    roof.translate(0, 0.24, -0.65);
    mesh(layer.experience, roof, m);
    const oculus = mesh(layer.experience, new CircleGeometry(0.065, 32), glow(), 0, 0.33, 0.653);
    oculus.castShadow = oculus.receiveShadow = false;
    mesh(layer.experience, new TorusGeometry(0.075, 0.01, 10, 40), g, 0, 0.33, 0.654);
    for (const [x, y] of [[0, 0.56], [-1.1, 0.27], [1.1, 0.27]]) {
      mesh(layer.experience, new ConeGeometry(0.05, 0.13, 6), g, x, y, 0.645);
      mesh(layer.experience, new SphereGeometry(0.022, 14, 10), g, x, y + 0.08, 0.645);
    }
  }

  /* --- ground and contact shadow --- */
  const floorTexture = track(gradientTexture([[0, '#2b251d'], [0.6, '#211b14'], [1, '#1c1711']]));
  const floorPbr = track(new MeshStandardMaterial({ color: 0x14110f, metalness: 0.1, roughness: 0.5, envMapIntensity: 0.55 }));
  const floorFlat = track(new MeshBasicMaterial({ map: floorTexture }));
  const floor = new Mesh(new CircleGeometry(9, 64), floorFlat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.002;
  floor.receiveShadow = true;
  scene.add(floor);
  track(floor.geometry);

  const shadowTexture = track(gradientTexture([[0, 'rgba(0,0,0,0.85)'], [0.5, 'rgba(0,0,0,0.4)'], [1, 'rgba(0,0,0,0)']]));
  const contact = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false }));
  contact.rotation.x = -Math.PI / 2;
  contact.position.y = 0.0;
  scene.add(contact);
  track(contact.geometry); track(contact.material);

  /* --- lights --- */
  const key = new DirectionalLight(0xffe4c8, 0);
  key.position.set(-3.4, 5.2, 3.8);
  key.castShadow = true;
  key.shadow.camera.left = key.shadow.camera.bottom = -3;
  key.shadow.camera.right = key.shadow.camera.top = 3;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 14;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  key.target.position.set(0, 0.8, 0);
  const rim = new DirectionalLight(0xff9a58, 0);
  rim.position.set(3.4, 2.4, -3.6);
  const fill = new HemisphereLight(0xfff1dc, 0x2a2118, 0);
  scene.add(key, key.target, rim, fill);

  /* --- tiers --- */
  let look = 'pbr';
  const setTier = s => {
    look = s.tier === 'low' ? 'flat' : 'pbr';
    floor.material = look === 'pbr' ? floorPbr : floorFlat;
    scene.background.set(look === 'pbr' ? 0x14100c : 0x1c1711);
    scene.fog.color.copy(scene.background);
    scene.environment = look === 'pbr' ? getEnvironment() : null;
    const size = s.tier === 'high' ? 2048 : 1024;
    if (key.shadow.mapSize.x !== size) {
      key.shadow.mapSize.set(size, size);
      key.shadow.map?.dispose();
      key.shadow.map = null;
    }
    key.castShadow = s.tier !== 'low';
  };
  setTier(state);

  /* --- page state --- */
  const rig = document.getElementById('system-rig');
  const readNumber = (property, fallback) => {
    const value = parseFloat(rig?.style.getPropertyValue(property));
    return Number.isFinite(value) ? value : fallback;
  };

  const host = rig?.closest('.system-object');
  let aspect = 1;
  let boxWidth = 1;
  let boxHeight = 1;
  let visibleHeight = 1;
  let shiftY = 0;
  let time = 0;
  let igniteAt = -1;
  let spread = 0.05;
  let yaw = 0;
  let focus = 0.8;
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

    for (const name of LAYERS) layer[name].position.y = REST[name] + LIFT[name] * spread;

    const selected = rig?.dataset.layer || 'experience';
    for (const name of LAYERS) {
      dim[name] += ((name === selected ? 1 : 0.72) - dim[name]) * ease(7);
      if (Math.abs(dim[name] - lastDim[name]) > 0.002) {
        lastDim[name] = dim[name];
        for (const m of layerMats[name]) m.color.copy(m.userData.base).multiplyScalar(dim[name]);
      }
    }

    const manual = readNumber('--manual-rotation', 0) * Math.PI / 180;
    yaw += ((BASE_YAW - manual) - yaw) * ease(14);
    const entrance = igniteAt < 0 ? 0 : MathUtils.clamp((time - igniteAt) / 2.2, 0, 1);
    const settle = Math.pow(1 - entrance, 3);
    root.rotation.y = yaw + s.pointer.x * 0.1 + settle * 0.5;
    root.rotation.x = s.pointer.y * 0.025;

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

    const halfTan = Math.tan(MathUtils.degToRad(camera.fov / 2));
    const e0 = MathUtils.degToRad(20 + 12 * spread);
    const needHeight = ((1.65 + 0.9 * spread) * Math.cos(e0) + 2.5 * Math.sin(e0)) * 1.1;
    const needWidth = 2.7 * 1.05;
    const distance = Math.max(needHeight / (2 * halfTan) * (boxHeight / visibleHeight), needWidth / (2 * halfTan * aspect)) * (1 + settle * 0.25);
    const selectedLift = REST[selected] + LIFT[selected] * spread;
    const mid = 0.78 + 0.45 * spread;
    focus += ((mid + (selectedLift - mid) * 0.1) - focus) * ease(5);
    lookAt.set(0, focus, 0);
    camera.position.set(0, focus + Math.sin(e0) * distance, Math.cos(e0) * distance);
    camera.lookAt(lookAt);

    const lit = igniteAt < 0 ? 0 : MathUtils.clamp((time - igniteAt) / 1.4, 0, 1);
    key.intensity = (look === 'pbr' ? 2.2 : 1.8) * lit;
    rim.intensity = 1.6 * lit;
    fill.intensity = (look === 'pbr' ? 0.25 : 1.3) * lit;
    const grow = 1 + spread * 0.14;
    contact.scale.set(3.3 * grow, 2.3 * grow, 1);
    contact.rotation.z = root.rotation.y;
    contact.material.opacity = (look === 'pbr' ? 0.55 : 0.8) * (1 - spread * 0.3) * (0.3 + 0.7 * lit);

    const glowColor = AMBER.clone().multiplyScalar((2.0 + Math.sin(time * 1.4) * 0.35) * (0.45 + 0.55 * dim.experience) * (0.25 + 0.75 * lit));
    for (const m of glowMaterials) m.color.copy(glowColor);
  };

  const dispose = () => {
    disposables.forEach(item => item.dispose?.());
    key.shadow.map?.dispose();
  };

  return {
    scene, camera, update, resize, setTier, dispose, ignite,
    debug: { get spread() { return spread; }, get yaw() { return yaw; }, dim },
    bloom: { strength: 0.18, radius: 0.4, threshold: 1.6 },
    finish: { vignette: 0.38, grain: 0.03 }
  };
}
