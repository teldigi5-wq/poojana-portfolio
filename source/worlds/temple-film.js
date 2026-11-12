/*
 * The Temple, photoreal — hero world.
 *
 * The hall is path-traced offline in Blender (source/blender/temple_photoreal.py) as a short
 * walk down the nave; this world plays those frames back on the shared world stage as the
 * hero scrolls. Real-time lighting on an integrated GPU cannot look like a photograph — a
 * textured quad costs almost nothing on any GPU.
 *
 * - Frames are fetched in idle time after the scene ignites, kept compressed, and decoded on
 *   demand into a small window of ImageBitmaps around the current position (memory stays low
 *   on phones). Two textures hold the neighbouring frames; the shader crossfades between them.
 * - Phone (portrait) and desktop use different crops of the same renders.
 * - Pointer parallax: a slight shift and scale of the image.
 * - Medium/high add drifting dust in the light and the stage's bloom/grain; low shows frames only.
 * - The first frame matches the poster image in the HTML, so the canvas fades in over it seamlessly.
 */
import {
  AdditiveBlending, BufferAttribute, BufferGeometry, CanvasTexture, Color, LinearFilter, Mesh, OrthographicCamera,
  PlaneGeometry, Points, Scene, ShaderMaterial, SRGBColorSpace, Texture, Vector2
} from 'three';

const FRAMES = 32;
const BG = 0x0c0b0a;
const sets = {
  desktop: { dir: 'assets/worlds/temple/desktop/', w: 1280, h: 720 },
  phone: { dir: 'assets/worlds/temple/phone/', w: 720, h: 1280 }
};
const name = i => `${String(i).padStart(2, '0')}.webp`;

function glowTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,.25)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

export async function create({ renderer, state }) {
  const scene = new Scene();
  scene.background = new Color(BG);
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 2);
  camera.position.z = 1;

  let set = sets.desktop;
  const blobs = new Map();       // index → Blob (compressed, small)
  const bitmaps = new Map();     // index → ImageBitmap (decoded window)
  const decoding = new Map();
  let aborted = false;

  const textures = [new Texture(), new Texture()];
  textures.forEach(t => { t.colorSpace = SRGBColorSpace; t.minFilter = t.magFilter = LinearFilter; t.generateMipmaps = false; });
  const shown = [-1, -1];

  const material = new ShaderMaterial({
    depthTest: false, depthWrite: false,
    uniforms: {
      uA: { value: textures[0] }, uB: { value: textures[1] }, uMix: { value: 0 }, uReady: { value: 0 },
      uScale: { value: new Vector2(1, 1) }, uOffset: { value: new Vector2() }, uWake: { value: 0 }, uFlare: { value: 0 }
    },
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: `
      uniform sampler2D uA, uB; uniform float uMix, uReady, uWake, uFlare; uniform vec2 uScale, uOffset; varying vec2 vUv;
      void main() {
        vec2 uv = (vUv - 0.5) * uScale + 0.5 + uOffset;
        uv.y = 1.0 - uv.y;   // ImageBitmaps upload top-down (three ignores flipY for them)
        vec3 a = texture2D(uA, uv).rgb;
        vec3 b = texture2D(uB, uv).rgb;
        vec3 c = mix(a, b, uMix) * uReady;
        // The hall wakes from darkness after the intro; a warm ivory flare at the hand-off.
        c *= uWake;
        c = mix(c, vec3(0.95, 0.89, 0.78), uFlare * smoothstep(0.9, 0.0, length(vUv - vec2(0.45, 0.42))));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`
  });
  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  quad.frustumCulled = false;
  scene.add(quad);

  /* Dust motes drifting in the light (medium/high). Screen-space, cheap. */
  const glow = glowTexture();
  const DUST = 160;
  const pos = new Float32Array(DUST * 3), seed = new Float32Array(DUST);
  for (let i = 0; i < DUST; i++) { pos[i * 3] = Math.random() * 2 - 1; pos[i * 3 + 1] = Math.random() * 2 - 1; pos[i * 3 + 2] = 0; seed[i] = Math.random(); }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new BufferAttribute(pos, 3));
  dustGeo.setAttribute('aSeed', new BufferAttribute(seed, 1));
  const dustMat = new ShaderMaterial({
    transparent: true, depthTest: false, depthWrite: false, blending: AdditiveBlending,
    uniforms: { uMap: { value: glow }, uTime: { value: 0 }, uLevel: { value: 0 }, uPx: { value: renderer.getPixelRatio() }, uPointer: { value: new Vector2() } },
    vertexShader: `attribute float aSeed; uniform float uTime, uPx; uniform vec2 uPointer; varying float vA;
      void main() {
        vec2 p = position.xy;
        p.y = mod(p.y + 1.0 + uTime * (0.006 + aSeed * 0.012), 2.0) - 1.0;
        p.x += sin(uTime * 0.3 + aSeed * 40.0) * 0.02 + uPointer.x * (0.004 + aSeed * 0.01);
        // Brighter where the dome light falls (upper middle of the frame).
        vA = (0.25 + 0.75 * exp(-pow((p.x - 0.0) / 0.45, 2.0))) * (0.6 + 0.4 * sin(uTime * 1.3 + aSeed * 6.28));
        gl_PointSize = (2.0 + aSeed * 3.5) * uPx;
        gl_Position = vec4(p, 0.0, 1.0);
      }`,
    fragmentShader: `uniform sampler2D uMap; uniform float uLevel; varying float vA;
      void main() { float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0, 0.95, 0.86) * vA, a * vA * uLevel * 0.55); }`
  });
  const dust = new Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  /* --- loading --- */
  const fetchFrame = async i => {
    if (blobs.has(i) || aborted) return;
    const response = await fetch(set.dir + name(i));
    if (!response.ok) throw new Error(`frame ${i}: ${response.status}`);
    blobs.set(i, await response.blob());
  };
  const decode = i => {
    if (bitmaps.has(i)) return Promise.resolve(bitmaps.get(i));
    if (decoding.has(i)) return decoding.get(i);
    const job = (async () => {
      await fetchFrame(i);
      const bmp = await createImageBitmap(blobs.get(i));
      bitmaps.set(i, bmp);
      decoding.delete(i);
      // Keep a small decoded window around the current frame.
      if (bitmaps.size > 6) {
        const far = [...bitmaps.keys()].sort((a, b) => Math.abs(b - current) - Math.abs(a - current))[0];
        if (far !== i) { bitmaps.get(far).close?.(); bitmaps.delete(far); }
      }
      return bmp;
    })().catch(() => { decoding.delete(i); return null; });
    decoding.set(i, job);
    return job;
  };
  // Frame 0 first (it is what you see at rest), then the rest in order, one at a time.
  let current = 0;
  const loadAll = async () => {
    await decode(0);
    for (let i = 1; i < FRAMES && !aborted; i++) {
      await fetchFrame(i).catch(() => {});
      await new Promise(r => (window.requestIdleCallback ? requestIdleCallback(r, { timeout: 400 }) : setTimeout(r, 30)));
    }
  };
  const chooseSet = aspect => {
    const next = aspect < 0.9 ? sets.phone : sets.desktop;
    if (next === set) return false;
    set = next;
    blobs.clear(); bitmaps.forEach(b => b.close?.()); bitmaps.clear(); decoding.clear();
    shown[0] = shown[1] = -1;
    material.uniforms.uReady.value = 0;
    return true;
  };
  chooseSet(innerWidth / Math.max(1, innerHeight));
  await decode(0);
  loadAll();

  const upload = (slot, index) => {
    if (shown[slot] === index) return true;
    const bmp = bitmaps.get(index);
    if (!bmp) return false;
    textures[slot].image = bmp;
    textures[slot].needsUpdate = true;
    shown[slot] = index;
    return true;
  };

  /* --- framing: cover the host, like object-fit: cover --- */
  let aspect = 16 / 9;
  const fit = () => {
    const img = set.w / set.h;
    const sx = aspect > img ? 1 : aspect / img;
    const sy = aspect > img ? img / aspect : 1;
    material.uniforms.uScale.value.set(sx * 0.98, sy * 0.98);   // 2 % margin for the pointer parallax
  };
  const resize = (width, height) => {
    aspect = width / height;
    if (chooseSet(aspect)) { decode(0); loadAll(); }
    fit();
    dustMat.uniforms.uPx.value = renderer.getPixelRatio();
  };

  let tierName = state.tier;
  const setTier = s => { tierName = s.tier; dust.visible = s.tier !== 'low'; };
  setTier(state);

  let igniteAt = -1, time = 0, walk = 0;
  const ignite = () => { if (igniteAt < 0) igniteAt = time; };

  const update = (dt, s) => {
    time += dt;
    walk += (s.progress - walk) * Math.min(1, dt * 7);
    const f = walk * (FRAMES - 1);
    const i0 = Math.floor(f), i1 = Math.min(FRAMES - 1, i0 + 1);
    current = i0;
    decode(i0); decode(i1); decode(Math.min(FRAMES - 1, i1 + 1)); decode(Math.max(0, i0 - 1));
    // Show the nearest frames that are ready; never show an empty texture.
    const a = upload(0, i0) ? i0 : shown[0];
    const b = upload(1, i1) ? i1 : shown[1];
    const ready = shown[0] >= 0;
    material.uniforms.uReady.value = ready ? 1 : 0;
    material.uniforms.uMix.value = b === i1 && a === i0 ? f - i0 : 0;
    if (shown[1] < 0 && ready) { textures[1].image = textures[0].image; textures[1].needsUpdate = true; shown[1] = shown[0]; }

    const wake = igniteAt < 0 ? 0 : Math.min(1, (time - igniteAt) / 1.6);
    material.uniforms.uWake.value = 1 - Math.pow(1 - wake, 3);
    material.uniforms.uOffset.value.set(s.pointer.x * 0.008, s.pointer.y * 0.006);
    material.uniforms.uFlare.value = Math.max(0, Math.min(1, (walk - 0.82) / 0.16)) * 0.35;
    dustMat.uniforms.uTime.value = time;
    dustMat.uniforms.uLevel.value = wake * (1 - walk * 0.5);
    dustMat.uniforms.uPointer.value.copy(s.pointer);
  };

  const dispose = () => {
    aborted = true;
    bitmaps.forEach(b => b.close?.());
    textures.forEach(t => t.dispose());
    material.dispose(); dustMat.dispose(); dustGeo.dispose(); glow.dispose();
  };

  return {
    scene, camera, update, resize, setTier, dispose, ignite,
    debug: { get tier() { return tierName; }, get loaded() { return blobs.size; }, advance(seconds) { time += seconds; } },
    toneMapping: 'none',   // the frames are already tone-mapped (AgX in Blender)
    bloom: { strength: 0.28, radius: 0.5, threshold: 0.9 },
    finish: { vignette: 0.35, grain: 0.025 }
  };
}
