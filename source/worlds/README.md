# World stage (immersive v3)

Source for `assets/worlds/js/` — the shared WebGL "world stage" and its worlds.

- `stage.js` — one renderer for the site, quality tiers, on-demand world loading, pausing off-screen.
- `tiers.js` — pure tier logic (tested in `tests/world-tiers.test.mjs`).
- `temple-film.js` — the hero world: a photoreal temple, path-traced offline in Blender (`source/blender/temple_photoreal.py`) and played back as a scroll-scrubbed frame sequence (`assets/worlds/temple/{desktop,phone}/NN.webp`, posters `assets/worlds/temple/poster-{desktop,phone}.webp`). One draw call; cheap on any GPU.
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

Temple (photoreal sequence):

```sh
python source/blender/fetch_assets.py <cc0_dir>            # CC0 scans/textures/HDRI from Poly Haven
python source/blender/temple_photoreal.py <out_dir> --assets <cc0_dir> --frames 32 --size 1280 --samples 40
cp <out_dir>/poster-*.webp assets/worlds/temple/
cp <out_dir>/frames/desktop/*.webp assets/worlds/temple/desktop/
cp <out_dir>/frames/phone/*.webp assets/worlds/temple/phone/
```

(`python` = Blender's Python or the `bpy` 5.0 module with Pillow; `blender --background --python … -- …`
works too.) About 2 hours on a 4-core CPU. `--review` renders two quick check frames; `--poster-only`
renders only the posters. `temple.py` provides the architecture modules it reuses.

Strata: `blender --background --python source/blender/strata.py -- <output_dir>`.

After every rebuild of `assets/worlds/js` run `node scripts/update-worlds-boot.mjs`: it inlines
`worlds-boot.js` into `index.html` with the new hashed chunk names, so all chunks preload in parallel.
