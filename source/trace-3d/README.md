# Trace 3D layer (Work stage, Lab instruments, lanyard)

Sources: `source/trace-3d/*.js` (Work stage, Lab instruments, shared helpers) and `source/trace-belt/belt.src.js` (lanyard).
They share one tree-shaken `three` chunk via esbuild code splitting.

```
npm i three@0.187.0 esbuild
rm -f assets/trace/3d/*.js
npx esbuild belt=source/trace-belt/belt.src.js stage=source/trace-3d/stage.js lab=source/trace-3d/lab.js \
  --bundle --splitting --minify --format=esm --target=es2020 --legal-comments=none \
  --outdir=assets/trace/3d --entry-names=[name] --chunk-names=chunk-[hash]
```

`/assets/*` is served immutable, so bump the `?v=` on the entry imports in `trace.js` whenever an entry file changes
(shared chunks are content-hashed and need nothing). Three.js is MIT licensed: `assets/trace/THREE-LICENSE.txt`.
