# BoundaryLab 3D request trace

`boundary-3d.js` is the source of `assets/boundary-3d.js`. It is a Three.js (r187, WebGL) scene that mirrors the BoundaryLab policy explorer: it reads the decision trace the explorer renders and animates a request through the Sign-in, Workspace and Permission gates. It never decides access itself.

`boundary-3d-boot.js` (repo root) loads the bundle only when the BoundaryLab card is within ~900px of the viewport and WebGL is available. Without WebGL, with Save-Data, or without JavaScript, the page is unchanged.

Behaviour:

- Animation pauses when the scene is off-screen or the tab is hidden.
- Reduced motion (`prefers-reduced-motion` or `?motion=off`) renders a still frame of the final state.
- WebGL context loss shows a short note; the scene is rebuilt when the context is restored.
- Drag turns the scene; the pointer adds slight parallax. The canvas and labels are `aria-hidden`; the explorer's status region remains the accessible output.

## Rebuild

```sh
mkdir -p /tmp/b3d && cd /tmp/b3d
npm install three@0.187.0
cp <repo>/source/boundary-3d/boundary-3d.js .
bun build boundary-3d.js --minify --format=iife --target=browser --outfile=<repo>/assets/boundary-3d.js
```

The Three.js MIT license is kept in `assets/boundary-3d.js.LEGAL.txt`.
