# Trace crew belt

`belt.src.js` is the source of `assets/trace/belt.js` (Three.js scene: rail, trolleys, PBD strap, rigid cards, SAT collisions, pointer drag).
It is loaded on demand by `trace.js` when the contact section nears the viewport.

Rebuild:

    npm i three@0.187.0 esbuild
    npx esbuild source/trace-belt/belt.src.js --bundle --minify --format=esm --target=es2020 \
      --legal-comments=none --outfile=assets/trace/belt.js

Three.js is MIT licensed, see `assets/trace/THREE-LICENSE.txt`.
