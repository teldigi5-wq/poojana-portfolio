# World stage (immersive v3)

Source for `assets/worlds/js/` — the shared WebGL "world stage" and its worlds.

- `stage.js` — one renderer for the site, quality tiers, on-demand world loading, pausing off-screen.
- `tiers.js` — pure tier logic (tested in `tests/world-tiers.test.mjs`).
- `gateway.js` — the hero world. Its model comes from `source/blender/gateway.py` → `assets/worlds/gateway.glb`.

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
blender --background --python source/blender/gateway.py -- <output_dir>
```

Writes `export/gateway.glb`, `blend/gateway.blend` and a preview render.

After every rebuild run `node scripts/update-worlds-boot.mjs`: it inlines `worlds-boot.js`
into `index.html` with the new hashed chunk names, so all chunks preload in parallel.
