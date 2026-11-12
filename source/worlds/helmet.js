/*
 * The Corinthian helmet — a bronze Spartan-style helmet that stands in the Hellenic hero.
 *
 * Blender asset: assets/worlds/helmet.glb (built by source/blender/helmet.py). It has its own
 * small transparent renderer instead of the shared stage canvas, because the stage paints an
 * opaque page-coloured background and this model has to float over the temple video.
 *
 * It turns with the hero's scroll (window.__templeProgress, written by hellenic-hero.js), eases
 * toward the pointer, and only renders while the hero is on screen. Bronze gets physically based
 * reflections from a studio environment plus a faint hammered roughness; the crest is horsehair
 * with a sheen. Skipped on phones, for reduced motion and when WebGL is unavailable.
 */
import {
  ACESFilmicToneMapping, Box3, Color, DirectionalLight, DoubleSide, Group, MathUtils, MeshPhysicalMaterial,
  PerspectiveCamera, PMREMGenerator, Scene, SRGBColorSpace, Sphere, Vector3, WebGLRenderer
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFLoader } from './loaders.js';

/* Hammered bronze: faint, fine variation in the roughness so highlights break up like cast metal. */
function hammered(material) {
  material.onBeforeCompile = shader => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vHammer;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvHammer = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vHammer;
        float hmHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float hmNoise(vec3 p) {
          vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(hmHash(i), hmHash(i + vec3(1,0,0)), f.x), mix(hmHash(i + vec3(0,1,0)), hmHash(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(hmHash(i + vec3(0,0,1)), hmHash(i + vec3(1,0,1)), f.x), mix(hmHash(i + vec3(0,1,1)), hmHash(i + vec3(1,1,1)), f.x), f.y), f.z);
        }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        float hm = hmNoise(vHammer * 160.0) * 0.6 + hmNoise(vHammer * 38.0) * 0.4;
        roughnessFactor = clamp(roughnessFactor * (0.78 + 0.5 * hm), 0.08, 1.0);`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        diffuseColor.rgb *= 0.9 + 0.2 * hmNoise(vHammer * 14.0);`);
  };
  material.customProgramCacheKey = () => 'helmet-hammered';
}

export async function mount({ host, tier = 'medium' }) {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.82;
  const canvas = renderer.domElement;
  canvas.className = 'helmet-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.tabIndex = -1;
  host.append(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(26, 1, 0.1, 20);
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.6;
  pmrem.dispose();

  // Warm key from the upper left (torchlight), cool rim from behind on the right (the dome's daylight).
  const key = new DirectionalLight(new Color(1.0, 0.74, 0.5), 2.1);
  key.position.set(-2.2, 2.6, 3.0);
  const rim = new DirectionalLight(new Color(0.6, 0.76, 1.0), 2.2);
  rim.position.set(3.0, 1.2, -2.4);
  const fill = new DirectionalLight(new Color(1.0, 0.62, 0.4), 0.5);
  fill.position.set(0.5, -2, 2);
  scene.add(key, rim, fill);

  const pivot = new Group();
  scene.add(pivot);

  const gltf = await new GLTFLoader().loadAsync('assets/worlds/helmet.glb');
  const model = gltf.scene;
  model.traverse(object => {
    if (!object.isMesh) return;
    const old = object.material;
    const make = (extra = {}) => new MeshPhysicalMaterial({ color: old.color, metalness: old.metalness, roughness: old.roughness, ...extra });
    if (old.name === 'horsehair') {
      object.material = make({ metalness: 0, roughness: 0.92, sheen: 0.5, sheenColor: new Color(0.62, 0.07, 0.04), sheenRoughness: 0.6, side: DoubleSide, envMapIntensity: 0.5 });
    } else {
      object.material = make({ envMapIntensity: old.name === 'bronze_dark' ? 0.8 : 1.15, clearcoat: old.name === 'bronze' ? 0.18 : 0, clearcoatRoughness: 0.35 });
      if (old.name === 'bronze') hammered(object.material);
    }
    old.dispose();
  });
  // Centre on the helmet's own centre so it turns about its middle, and frame it.
  const box = new Box3().setFromObject(model);
  const centre = box.getCenter(new Vector3());
  model.position.sub(centre);
  pivot.add(model);
  const sphere = box.getBoundingSphere(new Sphere());
  const fit = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return false;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, tier === 'high' ? 2 : 1.25));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    const vfov = MathUtils.degToRad(camera.fov);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * camera.aspect);
    const dist = (sphere.radius * 1.06) / Math.sin(Math.min(vfov, hfov) / 2);
    camera.position.set(0, sphere.radius * 0.1, dist);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    return true;
  };
  fit();
  addEventListener('resize', fit, { passive: true });

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', event => {
    pointer.tx = event.clientX / innerWidth * 2 - 1;
    pointer.ty = event.clientY / innerHeight * 2 - 1;
  }, { passive: true });

  let onScreen = false;
  new IntersectionObserver(entries => { onScreen = entries[0].isIntersecting; if (onScreen) start(); }, { rootMargin: '60px' }).observe(host);

  let frame = 0;
  let last = performance.now();
  let time = 0;
  let yaw = -1.1;
  const ease = t => t * t * (3 - 2 * t);
  const loop = now => {
    frame = 0;
    if (!onScreen || document.hidden) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    time += dt;
    const p = MathUtils.clamp(window.__templeProgress ?? 0, 0, 1);
    // Rotates through the hero's chapters: three-quarter left, to front, to three-quarter right.
    const targetYaw = MathUtils.lerp(-1.1, 0.7, ease(MathUtils.clamp((p - 0.16) / 0.84, 0, 1)));
    yaw += (targetYaw - yaw) * Math.min(1, dt * 5);
    pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 3);
    pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 3);
    pivot.rotation.set(0.04 + pointer.y * 0.05 + Math.sin(time * 0.7) * 0.012, yaw + pointer.x * 0.12, 0);
    pivot.position.y = Math.sin(time * 0.9) * 0.004;
    // Skip the draw while it is faded out (before chapter I).
    if (p > 0.1) renderer.render(scene, camera);
    frame = requestAnimationFrame(loop);
  };
  function start() { if (!frame) { last = performance.now(); frame = requestAnimationFrame(loop); } }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); cancelAnimationFrame(frame); canvas.remove(); });

  renderer.render(scene, camera);
  host.dataset.ready = 'true';
  window.__helmet = { get yaw() { return yaw; }, renderer, scene, camera };
  start();
}
