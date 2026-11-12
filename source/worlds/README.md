# World stage (immersive v3)

Source for `assets/worlds/js/` — the shared WebGL "world stage" and its worlds.

- `stage.js` — one renderer for the site, quality tiers, on-demand world loading, pausing off-screen.
- `tiers.js` — pure tier logic (tested in `tests/world-tiers.test.mjs`).
- `temple.js` — the hero world (an original Greek temple interior; replaced the copper Gateway). Its model and textures come from `source/blender/temple.py` → `assets/worlds/temple.glb` + `temple-{floor,limestone,marble}.webp`; reduced-motion stills `temple-still{,-mobile}.webp` come from the same script (Cycles).
- `strata.js` — the Depth world (`source/blender/strata.py`).

Loaded by `worlds-boot.js` in browser idle time; skipped for reduced motion, `?motion=off`, Save-Data and devices without WebGL. `?tier=high|medium|low|still` pins a tier for review.

## Rebuild

```sh
mkdir -p /tmp/worlds && cd /tmp/worlds && npm install three@0.187.0
cp <repo>/source/worlds/*.js .
bun build stage.js --splitting --format=esm --minify --target=browser \
  --outdir=<repo>/assets/worlds/js --entry-naming='[name].[ext]' --chunk-naming='[name]-[hash].[ext]'
```

Chunk names are content-hashed; the entry gets a fresh `?v=` from the update script.

## Blender assets

```sh
# Blender 5.x (or the `bpy` 5.0 Python module: python source/blender/temple.py <output_dir>)
blender --background --python source/blender/temple.py -- <output_dir> --samples 64
# Quantize (KHR_mesh_quantization: decoded natively by GLTFLoader — no WASM, no CSP change)
npx @gltf-transform/cli@4 weld <output_dir>/export/temple.glb /tmp/w.glb
npx @gltf-transform/cli@4 quantize /tmp/w.glb assets/worlds/temple.glb --quantize-position 14 --quantize-normal 10 --quantize-color 8
cp <output_dir>/export/temple-{floor,limestone,marble,still,still-mobile}.webp assets/worlds/
```

`temple.py` writes the GLB (geometry + AO/edge-wear baked into vertex colours), the three
tileable textures, the two Cycles stills and `blend/temple.blend`. `--no-render` skips the
stills; `--closeup` adds review renders of the statues (not shipped).

After every rebuild run `node scripts/update-worlds-boot.mjs`: it inlines `worlds-boot.js`
into `index.html` with the new hashed chunk names, so all chunks preload in parallel.
