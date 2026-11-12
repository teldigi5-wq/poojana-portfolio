# The Temple — hero world (preview, photoreal revision)

Branch `preview/hellenic-temple` (from `main`, fast-forwarded to `preview/immersive-v3`, which holds
the world-stage architecture). Nothing goes to `main`.

## Why it changed

The first revision drew the temple in real time with WebGL. On an integrated GPU that can't look
like a photograph — it read as artificial. This revision path-traces the hall offline in Blender
(Cycles: real sky light through a glass dome, volumetric haze, scanned materials) and plays the
renders back as you scroll. The browser only shows images, which is also far cheaper than real-time.

## The scene (original; composed after the brief's reference for mood only)

- `source/blender/temple_photoreal.py`: a short nave of fluted Ionic columns in warm stone, five
  draped figures on pedestals staggered along the aisle, niches with braziers, a coffered vault,
  and a rotunda whose coffered glass dome lights a colossal torch-bearing figure on a carved plinth.
  Architecture reuses the modules in `temple.py`.
- Real-world detail from **CC0 1.0** scans (Poly Haven; `source/blender/fetch_assets.py`, credits
  written next to the downloads): a marble bust gives every figure a real carved head and shoulders
  (the drapery is modelled); cream ashlar walls (`marble_01`), terrazzo floor (`marble_mosaic_tiles`),
  scanned stone relief on the columns (`large_sandstone_blocks_01` normals), clear-sky HDRI
  (`kloofendal_43d_clear_puresky`). The downloads don't ship; only the renders do.
- Camera: level with lens shift, like an architectural photograph (verticals stay vertical). Each
  frame is rendered square once and cropped twice: desktop 16:9 (vanishing point centred, horizon at
  two thirds) and phone 9:16 (rotunda in the upper third, above the headline).

## Runtime

- `source/worlds/temple-film.js` replaces the real-time temple on the same world stage (tiers,
  governor, `?tier=`, `?motion=off`, reduced motion unchanged). One quad, two textures, crossfade
  between neighbouring frames by scroll progress, slight pointer parallax. Frames are fetched after the
  scene ignites, kept compressed, and decoded in a window of six. Medium/high add drifting dust and a
  gentle bloom; low shows frames only. Already tone-mapped frames skip the engine's filmic curve.
- The poster (`assets/worlds/temple/poster-*.webp`) is the HTML image under the canvas: LCP element,
  reduced-motion still and no-WebGL fallback in one. It matches frame 0, so the canvas fades in
  without a jump.
- The hero layout, copy and scroll choreography from the first revision are unchanged (protocol chips
  removed on request).

## Measured (cloud container, software WebGL — not your GPU)

Isolated bench, 480×300, same harness: frame player 60 fps (vsync cap; 1 draw, 2 triangles); old
Gateway 12.7 fps (43 draws, 57k triangles); the real-time temple 0.74 fps (186k triangles). At
1440×900 the frame player still does 13.6 fps in software, where everything else fell to about 1.

## Rebuild

See `source/worlds/README.md`.
