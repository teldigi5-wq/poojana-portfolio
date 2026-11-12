/*
 * The Temple — hero world (replaces the copper Gateway).
 *
 * An original Greek temple interior (Blender asset: assets/worlds/temple.glb, built by
 * source/blender/temple.py). Scrolling walks the camera down the nave towards the
 * torch-bearer in the apse. A small flame — the request — leaves her torch and travels
 * down the aisle between the columns, clearing GET → TLS → AUTHZ → 200 OK on the way.
 *
 * Cost model (the low tier must hold 60 fps on an Intel UHD):
 *  - every bay module is ONE instanced draw (columns, entablature, vault, walls);
 *  - ambient occlusion and edge wear are baked into vertex colours in Blender;
 *  - braziers, the torch, the request flame and (on low) the daylight pools are added
 *    analytically in the material shader: a few distance falloffs per pixel, no lights,
 *    no shadow maps;
 *  - medium/high swap to physically based materials with real spot lights, a floor
 *    reflection and bloom; high adds shadows from the oculus.
 */
import {
  AdditiveBlending, Box3, BufferAttribute, BufferGeometry, CanvasTexture, CatmullRomCurve3, Color, DoubleSide,
  Fog, Group, HemisphereLight, InstancedMesh, LatheGeometry, MathUtils, Matrix4, Mesh, MeshBasicMaterial, MeshLambertMaterial,
  MeshStandardMaterial, PerspectiveCamera, PlaneGeometry, Points, Quaternion, RepeatWrapping, Scene, ShaderMaterial,
  SpotLight, Sprite, SpriteMaterial, SRGBColorSpace, TextureLoader, Vector2, Vector3, Vector4
} from 'three';
import { GLTFLoader } from './loaders.js';

const BG = 0x0c0b0a;
const BAY = 3.4;            // matches source/blender/temple.py
const BAYS = 9;
const COL_X = 3.5;
const NAVE_END = BAY * BAYS;
const STATUE_Z = -(NAVE_END + 2.4);
const SKY_BAY = 4;
const SKY_Z = -(BAY / 2 + SKY_BAY * BAY);
const TORCH = new Vector3(0.8, 7.9, STATUE_Z + 0.1);
const OCULUS = new Vector3(0.0, 15.5, STATUE_Z + 0.6);
const MAX_TORCHES = 12;

/* ---------- small helpers ---------- */

function glowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.22, 'rgba(255,255,255,.55)');
  g.addColorStop(0.55, 'rgba(255,255,255,.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

/** A protocol chip, rendered once to a texture: ivory text, copper hairline, engraved feel. */
function labelSprite(text, tone) {
  const pad = 18, h = 64;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = '500 28px ui-monospace, SFMono-Regular, Consolas, monospace';
  ctx.font = font;
  const w = Math.ceil(ctx.measureText(text).width) + pad * 2 + 24;
  canvas.width = w; canvas.height = h;
  ctx.font = font;
  ctx.fillStyle = 'rgba(16,13,10,0.84)';
  ctx.strokeStyle = tone === 'ok' ? 'rgba(243,237,223,0.75)' : 'rgba(192,138,91,0.75)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(1, 1, w - 2, h - 2, 3); else ctx.rect(1, 1, w - 2, h - 2);
  ctx.fill(); ctx.stroke();
  // Inner hairline: a quiet "engraved plaque" double rule.
  ctx.strokeStyle = 'rgba(192,138,91,0.25)';
  ctx.lineWidth = 1;
  ctx.strokeRect(5.5, 5.5, w - 11, h - 11);
  ctx.fillStyle = tone === 'ok' ? '#f3eddf' : '#c08a5b';
  ctx.beginPath(); ctx.arc(pad + 6, h / 2, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#f3eddf';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, pad + 22, h / 2 + 1);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  const material = new SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false, opacity: 0, fog: false, sizeAttenuation: false });
  const sprite = new Sprite(material);
  sprite.userData.aspect = w / h;
  sprite.renderOrder = 10;
  return { sprite, texture, material };
}

/* ---------- the stone shader (shared by every tier) ----------
   Injected into MeshLambertMaterial (low) or MeshStandardMaterial (medium/high):
   triplanar texture, baked AO + edge wear from vertex colours, and analytic warm light
   from the braziers, the statue's torch and the travelling request. */
function stoneMaterial(kind, tier, shared, options) {
  const pbr = tier !== 'low';
  const base = pbr
    ? new MeshStandardMaterial({ roughness: options.roughness, metalness: 0, envMapIntensity: options.env ?? 0.35 })
    : new MeshLambertMaterial();
  base.name = `${kind}-${pbr ? 'pbr' : 'lit'}`;
  base.vertexColors = !!options.vertexColors;
  base.color.set(options.tint ?? 0xffffff);
  if (options.floor) {
    base.map = options.map;   // sampled from world position below; set so three declares the sampler
    base.transparent = pbr && options.reflective;
    base.opacity = 1;
  }
  base.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, shared.uniforms, {
      uStone: { value: options.stone || options.map }, uScale: { value: options.scale ?? 0.5 },
      uFloorAlpha: { value: options.floorAlpha ?? 1 }
    });
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vTpPos; varying vec3 vTpNrm;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        vec4 tpWorld = vec4(transformed, 1.0);
        vec3 tpN = objectNormal;
        #ifdef USE_INSTANCING
          tpWorld = instanceMatrix * tpWorld;
          tpN = mat3(instanceMatrix) * tpN;
        #endif
        tpWorld = modelMatrix * tpWorld;
        vTpPos = tpWorld.xyz;
        vTpNrm = normalize(mat3(modelMatrix) * tpN);`);
    const lights = `
      uniform vec4 uTorches[${MAX_TORCHES}];
      uniform vec3 uTorchColor; uniform float uTorchPower;
      uniform vec4 uOrb; uniform vec3 uOrbColor;
      uniform vec4 uPoolA; uniform vec4 uPoolB; uniform vec3 uSkyColor; uniform float uPools;
      uniform float uWake; uniform vec4 uFill;
      vec3 warmLight(vec3 p, vec3 n) {
        // Warm fill from the entrance (the visitor's side), fading with depth into the hall.
        vec3 sum = uTorchColor * 0.55 * uFill.w * (max(dot(n, normalize(uFill.xyz - p)), 0.0) * 0.8 + 0.2)
          * exp(-max(0.0, uFill.z - p.z) * 0.06);
        for (int i = 0; i < ${MAX_TORCHES}; i++) {
          vec4 t = uTorches[i];
          vec3 d = t.xyz - p;
          float r2 = dot(d, d);
          float lambert = max(dot(n, d * inversesqrt(r2)), 0.0) * 0.8 + 0.2;
          sum += uTorchColor * t.w * lambert / (1.0 + r2 * 0.32);
        }
        vec3 o = uOrb.xyz - p;
        float o2 = dot(o, o);
        sum += uOrbColor * uOrb.w * (max(dot(n, o * inversesqrt(o2 + 1e-4)), 0.0) * 0.75 + 0.25) / (1.0 + o2 * 1.6);
        return sum * uTorchPower;
      }
      // Daylight pools for the low tier: a soft vertical cone from the skylight and the oculus.
      vec3 skyPools(vec3 p, vec3 n) {
        float a = exp(-dot(p.xz - uPoolA.xy, p.xz - uPoolA.xy) / uPoolA.z) * uPoolA.w;
        float b = exp(-dot(p.xz - uPoolB.xy, p.xz - uPoolB.xy) / uPoolB.z) * uPoolB.w;
        return uSkyColor * (a + b) * (max(n.y, 0.0) * 0.7 + 0.3) * uPools;
      }`;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vTpPos; varying vec3 vTpNrm;
        uniform sampler2D uStone; uniform float uScale; uniform float uFloorAlpha;
        ${lights}`)
      .replace('#include <map_fragment>', options.floor ? `
        vec4 floorTex = texture2D(map, vec2((vTpPos.x + 7.0) / 14.0, -vTpPos.z / ${BAY.toFixed(2)}));
        diffuseColor.rgb *= floorTex.rgb;
        // Contact shadow at every column base and under the plinths (exact, analytic).
        float cz = mod(-vTpPos.z - ${(BAY / 2).toFixed(2)} + ${(BAY / 2).toFixed(2)}, ${BAY.toFixed(2)}) - ${(BAY / 2).toFixed(2)};
        float colD = length(vec2(abs(vTpPos.x) - ${COL_X.toFixed(2)}, cz));
        float contact = mix(0.35, 1.0, smoothstep(0.62, 1.5, colD));
        if (-vTpPos.z > ${(NAVE_END - 1.2).toFixed(2)} + 1.5) contact = 1.0;
        vec2 pq = abs(vec2(vTpPos.x, vTpPos.z - ${STATUE_Z.toFixed(2)})) - vec2(1.75, 1.35);
        contact *= mix(0.4, 1.0, smoothstep(-0.05, 0.9, length(max(pq, 0.0)) + min(max(pq.x, pq.y), 0.0)));
        vec2 ped = vec2(abs(vTpPos.x) - 5.35, mod(-vTpPos.z, ${(2 * BAY).toFixed(2)}) - ${BAY.toFixed(2)});
        contact *= mix(0.55, 1.0, smoothstep(0.35, 1.1, length(max(abs(ped) - vec2(0.4), 0.0))));
        diffuseColor.rgb *= contact;
        float tpAO = contact;
        float tpRough = floorTex.a;` : `
${pbr ? `
        vec3 bw = pow(abs(vTpNrm), vec3(4.0)); bw /= dot(bw, vec3(1.0));
        vec3 tx = texture2D(uStone, vTpPos.zy * uScale).rgb;
        vec3 ty = texture2D(uStone, vTpPos.xz * uScale).rgb;
        vec3 tz = texture2D(uStone, vTpPos.xy * uScale).rgb;
        vec3 stoneTex = tx * bw.x + ty * bw.y + tz * bw.z;` : `
        // Low tier: one fetch along the dominant axis instead of three (measured: the triplanar
        // fetches were the single largest cost of the scene on a software rasteriser).
        vec3 an = abs(vTpNrm);
        vec2 tuv = (an.x > an.y && an.x > an.z) ? vTpPos.zy : (an.y > an.z ? vTpPos.xz : vTpPos.xy);
        vec3 stoneTex = texture2D(uStone, tuv * uScale).rgb;`}
        diffuseColor.rgb *= stoneTex;
        float tpAO = 1.0;
        float tpRough = 0.0;`)
      .replace('#include <color_fragment>', options.vertexColors ? `
        #ifdef USE_COLOR
          tpAO = vColor.r;
          // Edge wear: convex arrises are paler (handled stone) and break into chips.
          float edge = smoothstep(0.53, 0.68, vColor.g);
          float chip = step(0.52, fract(sin(dot(floor(vTpPos * 24.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.22 + 0.025, edge * (0.45 + 0.55 * chip));
          diffuseColor.rgb *= mix(0.28, 1.0, tpAO);
        #endif` : '')
      .replace('#include <opaque_fragment>', `
        vec3 tpLit = warmLight(vTpPos, normalize(vTpNrm)) + skyPools(vTpPos, normalize(vTpNrm));
        outgoingLight += diffuseColor.rgb * tpLit * mix(0.45, 1.0, tpAO);
        outgoingLight *= uWake;
        #include <opaque_fragment>`);
    if (pbr) {
      shader.fragmentShader = shader.fragmentShader.replace('#include <roughnessmap_fragment>', options.floor
        ? '#include <roughnessmap_fragment>\nroughnessFactor = clamp(tpRough * 1.1, 0.18, 1.0);'
        : '#include <roughnessmap_fragment>\nroughnessFactor = clamp(roughnessFactor + (0.5 - stoneTex.r) * 0.35, 0.2, 1.0);');
    }
    if (options.floor && pbr && options.reflective) {
      // The mirrored hall shows through the polished centre, less through rough joints.
      shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>',
        '#include <opaque_fragment>\ngl_FragColor.a = mix(0.72, 0.97, smoothstep(0.25, 0.6, tpRough));');
    }
  };
  base.customProgramCacheKey = () => `temple-${kind}-${tier}-${!!options.reflective}`;
  return base;
}

function flameMaterial(shared) {
  return new ShaderMaterial({
    uniforms: { uTime: shared.uniforms.uTime, uWake: shared.uniforms.uWake, uLevel: { value: 0 } },
    // Unit-height flame (LatheGeometry, base at 0); each instance is scaled to its burner.
    vertexShader: `varying vec3 vP; varying float vH; uniform float uTime;
      void main() {
        vec3 p = position; vH = clamp(p.y, 0.0, 1.0);
        vec4 origin = vec4(0.0, 0.0, 0.0, 1.0);
        #ifdef USE_INSTANCING
          origin = instanceMatrix * origin;
        #endif
        float seed = origin.x * 3.1 + origin.z * 1.7;
        float sway = sin(uTime * 7.0 + seed) * 0.12 + sin(uTime * 12.3 + seed * 2.0) * 0.07;
        p.x += sway * vH * vH; p.z += sway * 0.6 * vH * vH;
        p.y *= 0.88 + 0.14 * sin(uTime * 9.0 + seed * 3.0);
        vec4 local = vec4(p, 1.0);
        #ifdef USE_INSTANCING
          local = instanceMatrix * local;
        #endif
        vP = p; gl_Position = projectionMatrix * modelViewMatrix * local;
      }`,
    fragmentShader: `varying vec3 vP; varying float vH; uniform float uLevel; uniform float uWake;
      void main() {
        vec3 hot = vec3(1.0, 0.86, 0.62), warm = vec3(1.0, 0.48, 0.16);
        vec3 c = mix(hot * 4.0, warm * 2.4, vH);
        gl_FragColor = vec4(c * uLevel * uWake, 1.0);
      }`
  });
}

function shaftMaterial(seed, color) {
  return new ShaderMaterial({
    transparent: true, depthWrite: false, side: DoubleSide, blending: AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uSeed: { value: seed }, uStrength: { value: 0 }, uColor: { value: new Color(color) } },
    vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      uniform float uTime, uSeed, uStrength; uniform vec3 uColor; varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      void main() {
        float across = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 2.2);
        float along = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
        float n = noise(vec2(vUv.x * 6.0 + uSeed, vUv.y * 2.0 - uTime * 0.06)) * 0.5 + 0.5;
        gl_FragColor = vec4(uColor, across * along * n * uStrength);
      }`
  });
}

/* Dust that glows inside either daylight shaft and is nearly invisible elsewhere. */
function dustMaterial(texture, pixelRatio, shared) {
  return new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending,
    uniforms: {
      uMap: { value: texture }, uTime: shared.uniforms.uTime, uSize: { value: 24 * pixelRatio }, uLevel: { value: 0 },
      uA: { value: new Vector3(0.4, 0, SKY_Z + 0.9) }, uB: { value: new Vector3(0.1, 0, STATUE_Z + 0.3) }
    },
    vertexShader: `
      attribute float aSeed; uniform float uTime, uSize; uniform vec3 uA, uB; varying float vLight;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        // Shafts lean slightly (sun from the right): offset the axis with height.
        vec2 a = world.xz - (uA.xz + vec2(-0.12, 0.0) * world.y);
        vec2 b = world.xz - (uB.xz + vec2(-0.05, 0.0) * world.y);
        float d = min(dot(a, a) / 1.6, dot(b, b) / 1.1);
        vLight = 0.04 + exp(-d) * (0.65 + 0.35 * sin(uTime * 1.5 + aSeed * 6.2831));
        vec4 mv = viewMatrix * world;
        gl_PointSize = uSize * (0.55 + fract(aSeed * 13.7) * 0.9) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform sampler2D uMap; uniform float uLevel; varying float vLight;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vLight, t.a * vLight * uLevel);
      }`
  });
}

/* ---------- the world ---------- */

export async function create({ renderer, getEnvironment, state }) {
  const scene = new Scene();
  scene.background = new Color(BG);
  scene.fog = new Fog(BG, 16, 70);
  scene.environmentIntensity = 0.25;

  const camera = new PerspectiveCamera(38, 1, 0.1, 90);
  const lookAt = new Vector3();
  const glow = glowTexture();
  const disposables = [glow];
  const track = item => { disposables.push(item); return item; };

  const loader = new TextureLoader();
  const [gltf, limestone, marble, floorMap] = await Promise.all([
    new GLTFLoader().loadAsync('assets/worlds/temple.glb'),
    loader.loadAsync('assets/worlds/temple-limestone.webp'),
    loader.loadAsync('assets/worlds/temple-marble.webp'),
    loader.loadAsync('assets/worlds/temple-floor.webp')
  ]);
  for (const t of [limestone, marble, floorMap]) {
    t.colorSpace = SRGBColorSpace;
    t.wrapS = t.wrapT = RepeatWrapping;
    track(t);
  }

  /* --- shared uniforms: light that every stone material receives --- */
  const torchPositions = [];
  const shared = {
    uniforms: {
      uTime: { value: 0 }, uWake: { value: 0 },
      uTorches: { value: Array.from({ length: MAX_TORCHES }, () => new Vector4()) },
      uTorchColor: { value: new Color(1.0, 0.52, 0.22) }, uTorchPower: { value: 1 },
      uOrb: { value: new Vector4() }, uOrbColor: { value: new Color(1.0, 0.78, 0.52) },
      // xy = centre (x, z), z = spread, w = strength
      uPoolA: { value: new Vector4(0.0, SKY_Z + 1.0, 4.0, 0.9) },
      uPoolB: { value: new Vector4(0.0, STATUE_Z + 0.4, 3.0, 1.4) },
      uSkyColor: { value: new Color(0.55, 0.68, 0.95) }, uPools: { value: 0 },
      uFill: { value: new Vector4(0.0, 4.5, 6.0, 0) }
    }
  };

  /* --- the model: group every repeated module into one instanced draw --- */
  gltf.scene.updateMatrixWorld(true);
  const groups = new Map();
  const singles = [];
  gltf.scene.traverse(object => {
    if (!object.isMesh) return;
    const key = `${object.geometry.uuid}|${object.material.name}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(object);
  });
  const hall = new Group();
  scene.add(hall);
  const meshes = [];   // { mesh, kind }
  const matrix = new Matrix4();
  for (const list of groups.values()) {
    const first = list[0];
    const kind = (first.material.name || '').replace(/\.\d+$/, '');
    let mesh;
    if (list.length > 1) {
      mesh = new InstancedMesh(first.geometry, first.material, list.length);
      list.forEach((object, i) => mesh.setMatrixAt(i, matrix.copy(object.matrixWorld)));
      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
    } else {
      mesh = new Mesh(first.geometry, first.material);
      mesh.matrixAutoUpdate = false;
      mesh.matrix.copy(first.matrixWorld);
      singles.push(mesh);
    }
    mesh.name = first.name || first.parent?.name || kind;
    // Draw near/large occluders first so the depth test rejects the walls and vault behind them.
    const order = [[/Column/, 1], [/Pedestal|Figure|Colossus|Plinth/, 2], [/Entablature/, 3], [/Wall/, 4], [/Vault/, 5], [/Apse/, 6], [/Floor/, 7]]
      .find(([re]) => re.test(mesh.name));
    mesh.renderOrder = order ? order[1] : 3;
    mesh.userData.kind = kind;
    mesh.userData.node = first.parent?.name || first.name || '';
    hall.add(mesh);
    meshes.push(mesh);
  }

  // Low tier: every column pair uses the light LOD (the near LOD is ~2× the triangles; the
  // difference is only visible close up, and the low tier is for GPUs that need the headroom).
  const nearCols = meshes.find(m => m.isInstancedMesh && /^Column(?!Far)/.test(m.name));
  const farCols = meshes.find(m => m.isInstancedMesh && /^ColumnFar/.test(m.name));
  let lowCols = null;
  if (nearCols && farCols) {
    lowCols = new InstancedMesh(farCols.geometry, farCols.material, nearCols.count + farCols.count);
    for (let i = 0; i < nearCols.count; i++) { nearCols.getMatrixAt(i, matrix); lowCols.setMatrixAt(i, matrix); }
    for (let i = 0; i < farCols.count; i++) { farCols.getMatrixAt(i, matrix); lowCols.setMatrixAt(nearCols.count + i, matrix); }
    lowCols.instanceMatrix.needsUpdate = true;
    lowCols.computeBoundingSphere();
    lowCols.name = 'ColumnLow';
    lowCols.userData.kind = farCols.userData.kind;
    lowCols.renderOrder = 1;
    hall.add(lowCols);
    meshes.push(lowCols);
  }

  // Flames: the GLB marks where they burn; they are redrawn here as one instanced, animated
  // cone set (positions are read from world-space bounds — the GLB's vertices are quantized).
  const flameBases = [];
  const box = new Box3();
  meshes.filter(m => m.userData.kind === 'Flame').forEach(m => {
    m.geometry.computeBoundingBox();
    const count = m.isInstancedMesh ? m.count : 1;
    for (let i = 0; i < count; i++) {
      if (m.isInstancedMesh) m.getMatrixAt(i, matrix); else matrix.copy(m.matrix);
      box.copy(m.geometry.boundingBox).applyMatrix4(matrix);
      const base = new Vector3((box.min.x + box.max.x) / 2, box.min.y, (box.min.z + box.max.z) / 2);
      flameBases.push({ base, height: box.max.y - box.min.y });
      torchPositions.push(base.clone().setY(base.y + (box.max.y - box.min.y) * 0.45));
    }
    hall.remove(m);
  });
  for (let i = meshes.length - 1; i >= 0; i--) if (meshes[i].userData.kind === 'Flame') meshes.splice(i, 1);
  torchPositions.sort((a, b) => b.z - a.z);   // near → far (ignite order)
  // The statue's torch is the brightest and lives in the last slot.
  const torchLevels = torchPositions.map(() => 0);

  /* --- materials per tier --- */
  const looks = {};
  const lookFor = tier => {
    const key = tier === 'low' ? 'low' : tier;
    if (looks[key]) return looks[key];
    const reflective = tier !== 'low';
    looks[key] = {
      Limestone: track(stoneMaterial('limestone', tier, shared, { stone: limestone, scale: 0.42, roughness: 0.82, tint: 0xf2e6d4, vertexColors: true })),
      Marble: track(stoneMaterial('marble', tier, shared, { stone: marble, scale: 0.5, roughness: 0.42, tint: 0xfff6ea, vertexColors: true, env: 0.5 })),
      FloorStone: track(stoneMaterial('floor', tier, shared, { map: floorMap, floor: true, reflective, roughness: 0.4 })),
      Bronze: track(tier === 'low'
        ? new MeshLambertMaterial({ color: 0x5a3220, emissive: 0x1a0c05 })
        : new MeshStandardMaterial({ color: 0x9a5a34, metalness: 1, roughness: 0.38, envMapIntensity: 0.9 })),
    };
    return looks[key];
  };
  const flameMat = track(flameMaterial(shared));
  const flameProfile = [[0, 0], [0.09, 0.05], [0.13, 0.16], [0.1, 0.3], [0.05, 0.44], [0, 0.55]].map(([x, y]) => new Vector2(x / 0.55, y / 0.55));
  const flames = new InstancedMesh(track(new LatheGeometry(flameProfile, 12)), flameMat, flameBases.length);
  flameBases.forEach(({ base, height }, i) => {
    flames.setMatrixAt(i, matrix.compose(base, new Quaternion(), new Vector3(height, height, height)));
  });
  flames.instanceMatrix.needsUpdate = true;
  flames.computeBoundingSphere();
  flames.userData.kind = 'Flame';
  hall.add(flames);
  meshes.push(flames);
  const glassMat = track(new MeshBasicMaterial({ color: new Color(0.62, 0.78, 1.0).multiplyScalar(2.2), fog: false }));
  const setMaterials = tier => {
    const look = lookFor(tier);
    meshes.forEach(m => {
      const k = m.userData.kind;
      if (k === 'Flame') m.material = flameMat;
      else if (k === 'Glass') m.material = glassMat;
      else if (look[k]) m.material = look[k];
    });
    mirrorMeshes.forEach(m => { if (look[m.userData.kind]) m.material = look[m.userData.kind]; else if (m.userData.kind === 'Flame') m.material = flameMat; });
  };

  /* --- floor reflection (medium/high): the lower hall mirrored under a translucent floor --- */
  const mirror = new Group();
  mirror.scale.y = -1;
  const mirrorMeshes = [];
  meshes.forEach(m => {
    // Only what stands on the floor reflects (columns, statues, pedestals, plinth, flames).
    if (m === lowCols) return;
    if (!['Flame', 'Marble', 'Bronze'].includes(m.userData.kind) && !/Column|Pedestal|Plinth/.test(m.name)) return;
    const copy = m.clone();
    copy.userData = { ...m.userData };
    mirror.add(copy);
    mirrorMeshes.push(copy);
  });
  scene.add(mirror);
  // On medium/high the floor is translucent (drawn after the mirrored hall); on low it is opaque.

  /* --- real lights (medium/high) --- */
  const hemi = new HemisphereLight(0x8fa3c4, 0x2a1d12, 0.0);
  scene.add(hemi);
  const oculus = new SpotLight(0xc4d6ff, 0, 30, 0.34, 0.55, 1.2);
  oculus.position.copy(OCULUS);
  oculus.target.position.set(0, 4.0, STATUE_Z + 0.3);
  const skylight = new SpotLight(0xc8d8ff, 0, 30, 0.36, 0.6, 1.2);
  skylight.position.set(1.4, 18, SKY_Z + 2.4);
  skylight.target.position.set(-0.3, 0, SKY_Z - 0.6);
  scene.add(oculus, oculus.target, skylight, skylight.target);
  oculus.shadow.mapSize.set(1024, 1024);
  oculus.shadow.bias = -0.0006;
  oculus.shadow.camera.near = 4;
  oculus.shadow.camera.far = 22;

  /* --- shafts of daylight --- */
  const shafts = [];
  const shaft = (x, z, height, width, lean, seed, color) => {
    const group = new Group();
    for (let i = 0; i < 4; i++) {
      const mat = track(shaftMaterial(seed + i * 1.3, color));
      const plane = new Mesh(track(new PlaneGeometry(width + i * 0.35, height)), mat);
      plane.rotation.y = i * 0.45;
      group.add(plane);
      shafts.push(mat);
    }
    group.position.set(x, height / 2, z);
    group.rotation.z = lean;
    scene.add(group);
    return group;
  };
  shaft(0.2, SKY_Z + 0.9, 12, 1.6, 0.12, 0, 0xbcd0ff);
  shaft(0.1, STATUE_Z + 0.3, 15, 1.4, 0.05, 2.0, 0xc8d8ff);

  /* --- dust --- */
  const DUST_MAX = 1100;
  const dustPositions = new Float32Array(DUST_MAX * 3);
  const dustSeeds = new Float32Array(DUST_MAX);
  for (let i = 0; i < DUST_MAX; i++) {
    const inStatue = i % 3 === 0;
    dustPositions[i * 3] = MathUtils.randFloat(-2.4, 2.4);
    dustPositions[i * 3 + 1] = MathUtils.randFloat(0.1, inStatue ? 11 : 9);
    dustPositions[i * 3 + 2] = inStatue ? STATUE_Z + MathUtils.randFloat(-2.5, 2.5) : SKY_Z + MathUtils.randFloat(-3, 4);
    dustSeeds[i] = Math.random();
  }
  const dustGeometry = track(new BufferGeometry());
  dustGeometry.setAttribute('position', new BufferAttribute(dustPositions, 3));
  dustGeometry.setAttribute('aSeed', new BufferAttribute(dustSeeds, 1));
  const dustMat = track(dustMaterial(glow, renderer.getPixelRatio(), shared));
  const dust = new Points(dustGeometry, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  /* --- flame halos (cheap warm glow on every tier) --- */
  const halos = torchPositions.map((p, i) => {
    const isStatue = i === torchPositions.length - 1 && p.y > 5;
    const sprite = new Sprite(track(new SpriteMaterial({ map: glow, color: 0xffa865, transparent: true, depthWrite: false, blending: AdditiveBlending, opacity: 0 })));
    sprite.position.copy(p);
    sprite.scale.setScalar(isStatue ? 2.6 : 1.5);
    scene.add(sprite);
    return sprite;
  });

  /* --- the request: a flame that leaves the torch and walks the aisle --- */
  const request = new Group();
  const core = new Mesh(track(new PlaneGeometry(0.42, 0.42)), track(new MeshBasicMaterial({ map: glow, color: 0xfff3e2, transparent: true, blending: AdditiveBlending, depthWrite: false, fog: false })));
  const halo = new Mesh(track(new PlaneGeometry(1.8, 1.8)), track(new MeshBasicMaterial({ map: glow, color: 0xdcad7e, transparent: true, opacity: 0.5, blending: AdditiveBlending, depthWrite: false, fog: false })));
  request.add(halo, core);
  scene.add(request);

  const TRAIL = 48;
  const trailPositions = new Float32Array(TRAIL * 3);
  const trailColors = new Float32Array(TRAIL * 3);
  const trailGeometry = track(new BufferGeometry());
  trailGeometry.setAttribute('position', new BufferAttribute(trailPositions, 3));
  trailGeometry.setAttribute('color', new BufferAttribute(trailColors, 3));
  const trailMat = track(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, vertexColors: true,
    uniforms: { uMap: { value: glow }, uSize: { value: 60 * renderer.getPixelRatio() } },
    vertexShader: 'uniform float uSize; varying vec3 vColor; void main() { vColor = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uSize / -mv.z; gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform sampler2D uMap; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, texture2D(uMap, gl_PointCoord).a); }'
  }));
  const trail = new Points(trailGeometry, trailMat);
  trail.frustumCulled = false;
  scene.add(trail);

  // From the torch, down into the aisle, weaving between the column pairs, out past the visitor (lower left).
  const pairZ = k => -(BAY / 2 + k * BAY);
  const path = new CatmullRomCurve3([
    TORCH.clone(),
    new Vector3(0.5, 6.4, STATUE_Z + 2.0),
    new Vector3(0.0, 3.6, pairZ(8) + 0.4),
    new Vector3(-0.35, 2.5, pairZ(7)),
    new Vector3(0.35, 2.3, pairZ(5)),
    new Vector3(-0.3, 2.2, pairZ(3)),
    new Vector3(0.2, 2.1, pairZ(1)),
    new Vector3(-1.4, 1.9, 1.2),
    new Vector3(-4.6, 1.3, 4.2)
  ], false, 'centripetal', 0.5);
  const paramAtZ = z => {
    let best = 0, bestD = Infinity;
    for (let k = 0; k <= 500; k++) { const d = Math.abs(path.getPointAt(k / 500).z - z); if (d < bestD) { bestD = d; best = k / 500; } }
    return best;
  };
  const JOURNEY = 7.0, REST = 3.0, CYCLE = JOURNEY + REST;
  const labels = [
    { text: 'GET /work', z: pairZ(7), tone: 'step' },
    { text: 'TLS ✓', z: pairZ(5), tone: 'step' },
    { text: 'AUTHZ ✓ scope:read', z: pairZ(3), tone: 'step' },
    { text: '200 OK', z: pairZ(1), tone: 'ok' }
  ].map(spec => {
    const l = labelSprite(spec.text, spec.tone);
    track(l.texture); track(l.material);
    scene.add(l.sprite);
    return { ...l, param: paramAtZ(spec.z), opacity: 0, slot: 0 };
  });
  const exitParam = paramAtZ(pairZ(0)) + 0.02;

  /* --- veil: the hall wakes from darkness, and flares to light at the hand-off --- */
  const veilMat = track(new MeshBasicMaterial({ color: 0x0c0b0a, transparent: true, opacity: 1, depthTest: false, depthWrite: false, fog: false }));
  const veil = new Mesh(track(new PlaneGeometry(4, 4)), veilMat);
  veil.position.z = -0.2;
  veil.renderOrder = 999;
  camera.add(veil);
  const flareMat = track(new MeshBasicMaterial({ map: glow, color: 0xf3e3c8, transparent: true, opacity: 0, blending: AdditiveBlending, depthTest: false, depthWrite: false, fog: false }));
  const flare = new Mesh(track(new PlaneGeometry(1.4, 1.4)), flareMat);
  flare.position.z = -0.25;
  flare.renderOrder = 1000;
  camera.add(flare);
  scene.add(camera);

  /* --- tiers --- */
  let dustCount = DUST_MAX;
  let tierName = state.tier;
  const setTier = s => {
    tierName = s.tier;
    // Anisotropic filtering only where it is cheap; the floor benefits most (grazing angle).
    for (const t of [limestone, marble, floorMap]) {
      const a = s.tier === 'high' ? (t === floorMap ? 8 : 4) : s.tier === 'medium' && t === floorMap ? 4 : 1;
      if (t.anisotropy !== a) { t.anisotropy = a; t.needsUpdate = true; }
    }
    const pbr = s.tier !== 'low';
    setMaterials(s.tier);
    mirror.visible = pbr;
    if (lowCols) { lowCols.visible = !pbr; nearCols.visible = farCols.visible = pbr; }
    oculus.visible = skylight.visible = pbr;
    hemi.visible = true;
    scene.environment = pbr ? getEnvironment() : null;
    shared.uniforms.uPools.value = pbr ? 0 : 1;
    const shadows = s.tier === 'high';
    if (renderer.shadowMap.enabled !== shadows) {
      renderer.shadowMap.enabled = shadows;
      Object.values(looks).forEach(look => Object.values(look).forEach(m => { m.needsUpdate = true; }));
    }
    oculus.castShadow = shadows;
    meshes.forEach(m => {
      const k = m.userData.kind;
      m.castShadow = shadows && (k === 'Marble' || /Column/.test(m.name));
      m.receiveShadow = shadows && (k === 'FloorStone' || k === 'Limestone');
    });
    dustCount = Math.floor(DUST_MAX * s.settings.particles);
    dustGeometry.setDrawRange(0, dustCount);
    shafts.forEach((m, i) => { m.visible = (i % 4) < (s.tier === 'low' ? 2 : 4); });
    dustMat.uniforms.uSize.value = 24 * renderer.getPixelRatio();
    trailMat.uniforms.uSize.value = 60 * renderer.getPixelRatio();
  };
  setTier(state);

  /* --- framing --- */
  let narrow = false, chipHeight = 0.034, viewHeight = 900;
  const resize = (width, height) => {
    camera.aspect = width / height;
    narrow = camera.aspect < 0.9;
    chipHeight = MathUtils.clamp(26 / height, 0.02, 0.05);
    viewHeight = height;
    // Desktop: the vanishing point sits left of centre, in the gap between the headline and
    // the portrait. Phone: centred and lifted into the window above the headline.
    if (narrow) camera.setViewOffset(width, height, 0, height * 0.16, width, height);
    else camera.setViewOffset(width, height, width * 0.07, 0, width, height);
    camera.updateProjectionMatrix();
    dustMat.uniforms.uSize.value = 24 * renderer.getPixelRatio();
    trailMat.uniforms.uSize.value = 60 * renderer.getPixelRatio();
  };

  /* --- ignition: the temple wakes up after the preloader --- */
  let igniteAt = -1;
  let time = 0;
  const ignite = () => { if (igniteAt < 0) igniteAt = time; };
  const after = (delay, dur = 1.4) => igniteAt < 0 ? 0 : MathUtils.clamp((time - igniteAt - delay) / dur, 0, 1);
  const ease3 = t => 1 - Math.pow(1 - t, 3);

  const camRight = new Vector3(), camUp = new Vector3(), tmp = new Vector3();
  let walk = 0;   // smoothed scroll progress

  const update = (dt, s) => {
    time += dt;
    shared.uniforms.uTime.value = time;
    // Scrubbed progress is already smoothed by ScrollTrigger; a little more damping hides wheel steps.
    walk += (s.progress - walk) * Math.min(1, dt * 6);
    const p = walk;
    const pe = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;   // power3.inOut
    const entrance = ease3(after(0, 3.4));
    const wake = ease3(after(0, 2.2));
    shared.uniforms.uWake.value = wake;
    veilMat.opacity = 1 - wake;

    // Camera: settles from a step behind the threshold, then walks down the nave on scroll.
    const baseZ = narrow ? 4.6 : 3.2;
    const fov = (narrow ? 50 : 38) - pe * (narrow ? 5 : 4.5);
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
    camera.position.set(
      Math.sin(time * 0.09) * 0.12 + s.pointer.x * 0.32,
      (narrow ? 1.8 : 1.72) + Math.sin(time * 0.13) * 0.04 - s.pointer.y * 0.12 + pe * 0.35 + (1 - entrance) * 0.25,
      baseZ - pe * 15.5 + (1 - entrance) * 2.4
    );
    lookAt.set(s.pointer.x * 0.6, (narrow ? 3.6 : 3.1) + pe * 1.4, -22);
    camera.lookAt(lookAt);

    // Light: braziers ignite near → far; daylight comes up; the statue's torch last.
    const n = torchPositions.length;
    torchPositions.forEach((pos, i) => {
      const isStatue = i === n - 1;
      const level = isStatue ? after(1.9, 0.8) : after(0.35 + i * 0.12, 0.6);
      const flicker = 0.88 + 0.08 * Math.sin(time * 8.3 + i * 1.7) + 0.05 * Math.sin(time * 13.1 + i * 3.1);
      torchLevels[i] = level;
      shared.uniforms.uTorches.value[i].set(pos.x, pos.y, pos.z, level * flicker * (isStatue ? 7.0 : 3.2));
      halos[i].material.opacity = level * (isStatue ? 0.85 : 0.6) * flicker;
    });
    flameMat.uniforms.uLevel.value = Math.max(...torchLevels.slice(0, -1), 0) * 0.5 + 0.5 * torchLevels[n - 1];
    const day = after(0.9, 2.0);
    // As you walk in, the dome light strengthens and swings a little (the sun moving across the oculus).
    const dome = day * (0.85 + 0.45 * pe);
    hemi.intensity = (tierName === 'low' ? 1.0 : 0.55) * wake;
    shared.uniforms.uFill.value.w = (tierName === 'low' ? 1.0 : 0.7) * wake;
    oculus.intensity = 420 * dome;
    skylight.intensity = 260 * day * (1 - 0.3 * pe);
    oculus.target.position.x = -0.2 + 0.5 * pe;
    shared.uniforms.uPoolA.value.w = 0.55 * day * (1 - 0.3 * pe);
    shared.uniforms.uPoolB.value.w = 1.1 * dome;
    shafts.forEach((m, i) => { m.uniforms.uTime.value = time; m.uniforms.uStrength.value = (i < 4 ? 0.16 * day * (1 - 0.3 * pe) : 0.2 * dome); });
    dustMat.uniforms.uLevel.value = day;

    for (let i = 0; i < dustCount; i++) {
      const k = i * 3;
      dustPositions[k + 1] += dt * (0.03 + dustSeeds[i] * 0.05) * (dustSeeds[i] > 0.5 ? 1 : -0.6);
      dustPositions[k] += Math.sin(time * 0.25 + dustSeeds[i] * 50) * dt * 0.05;
      if (dustPositions[k + 1] > 11) dustPositions[k + 1] = 0.1;
      if (dustPositions[k + 1] < 0.1) dustPositions[k + 1] = 11;
    }
    dustGeometry.attributes.position.needsUpdate = true;

    // The request: leaves the torch once it is lit, walks the aisle, rests, repeats.
    const clock = igniteAt < 0 ? -1 : time - igniteAt - 2.6;
    let intensity = 0, u = 0, t = 0;
    if (clock >= 0) {
      t = clock % CYCLE;
      if (t < JOURNEY) {
        u = MathUtils.smootherstep(t / JOURNEY, 0, 1);
        path.getPointAt(u, tmp);
        request.position.copy(tmp);
        intensity = Math.min(1, t / 0.6) * (1 - MathUtils.smoothstep(u, exitParam, exitParam + 0.07));
        request.scale.setScalar(0.75 + u * 0.6);
      }
    }
    // Fades as the visitor walks in: the hero copy hands over to the work below.
    intensity *= 1 - MathUtils.smoothstep(p, 0.35, 0.75);
    shared.uniforms.uOrb.value.set(request.position.x, request.position.y, request.position.z, intensity * 3.2);
    request.visible = intensity > 0.01;
    core.material.opacity = intensity;
    halo.material.opacity = intensity * 0.45;
    core.lookAt(camera.position);
    halo.lookAt(camera.position);

    let current = -1;
    labels.forEach((l, i) => { if (clock >= 0 && t < JOURNEY && u > l.param - 0.01) current = i; });
    camRight.setFromMatrixColumn(camera.matrixWorld, 0);
    camUp.setFromMatrixColumn(camera.matrixWorld, 1);
    const dist = camera.position.distanceTo(request.position);
    const pxToWorld = 2 * dist * Math.tan(MathUtils.degToRad(camera.fov) / 2) / viewHeight;
    labels.forEach((l, i) => {
      const slot = current - i;
      const weight = slot < 0 ? 0 : [1, 0.6, 0.38, 0.24][Math.min(slot, 3)];
      const target = weight * intensity;
      l.opacity += (target - l.opacity) * Math.min(1, dt * (target > l.opacity ? 9 : 6));
      l.slot += ((slot < 0 ? 0 : slot) - l.slot) * Math.min(1, dt * 8);
      l.material.opacity = l.opacity;
      l.sprite.visible = l.material.opacity > 0.01;
      l.sprite.scale.set(chipHeight * l.sprite.userData.aspect, chipHeight, 1);
      const chipPx = chipHeight * viewHeight;
      l.sprite.position.copy(request.position)
        .addScaledVector(camUp, (chipPx * 0.9 + l.slot * chipPx * 1.25) * pxToWorld)
        .addScaledVector(camRight, (18 + chipPx * l.sprite.userData.aspect * 0.5) * pxToWorld);
    });

    for (let i = TRAIL - 1; i > 0; i--) {
      trailPositions[i * 3] = trailPositions[(i - 1) * 3];
      trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
      trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
    }
    trailPositions[0] = request.position.x; trailPositions[1] = request.position.y; trailPositions[2] = request.position.z;
    for (let i = 0; i < TRAIL; i++) {
      const f = Math.pow(1 - i / TRAIL, 1.8) * intensity * 0.8;
      trailColors[i * 3] = f; trailColors[i * 3 + 1] = 0.76 * f; trailColors[i * 3 + 2] = 0.5 * f;
    }
    trailGeometry.attributes.position.needsUpdate = true;
    trailGeometry.attributes.color.needsUpdate = true;

    // Hand-off to the next section: a soft ivory flare as the hero releases.
    flareMat.opacity = MathUtils.smoothstep(p, 0.78, 0.97) * 0.55;
    flare.scale.setScalar(1 + MathUtils.smoothstep(p, 0.78, 1) * 1.6);
  };

  const dispose = () => {
    disposables.forEach(item => item.dispose?.());
    Object.values(looks).forEach(look => Object.values(look).forEach(m => m.dispose?.()));
    meshes.forEach(m => m.geometry.dispose());
  };

  return {
    scene, camera, update, resize, setTier, dispose, ignite,
    // Review hook: jump the world clock forward (software-rendered screenshots run at ~1 fps,
    // so the 50 ms frame-step cap would otherwise keep them inside the wake-up fade).
    debug: { labels, torches: torchPositions, get tier() { return tierName; }, advance(seconds) { time += seconds; } },
    bloom: { strength: 0.75, radius: 0.55, threshold: 0.86 },
    finish: { vignette: 0.48, grain: 0.03 }
  };
}
