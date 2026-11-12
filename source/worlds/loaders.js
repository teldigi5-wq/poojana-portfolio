// Shared by every world that loads a Blender model. Its own file so it is its own chunk
// (counted separately from the render engine in scripts/quality-gate.mjs).
export { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
