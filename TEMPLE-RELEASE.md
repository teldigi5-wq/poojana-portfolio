# The Temple — hero world (preview)

Branch `preview/hellenic-temple`, cut from `main` and fast-forwarded to `preview/immersive-v3` (the
world-stage architecture — `stage.js`, tiers, governor — exists only there). Nothing goes to `main`.

## What changed

- **Scene.** The copper Gateway is replaced by an original Greek temple interior built entirely in
  code: `source/blender/temple.py` (Blender 5.0). A nave of 24-flute Ionic columns with entasis and
  apophyge, a continuous three-fascia architrave with a meander frieze and dentils, a coffered barrel
  vault with one glazed bay, niches with bronze braziers, an apse with a coffered half-dome and an
  oculus, a colossal torch-bearing figure on a carved plinth, and four pairs of draped figures on
  pedestals. Figures are generic draped forms, not copies of any known statue. The reference photo
  was used for mood/composition only; nothing was traced.
- **Materials.** Tileable limestone and veined marble (generated, WebP), a per-bay patterned floor
  (ivory slabs, porphyry discs, meander borders; roughness in alpha). AO is baked with Cycles into
  vertex colours; convexity for edge wear and chips is baked alongside it.
- **Runtime** (`source/worlds/temple.js`). Each bay module is one instanced draw. Braziers, the
  statue's torch, the travelling request and (low tier) the daylight pools are lit analytically in
  the stone shader; medium/high add PBR, two real spot lights, a floor reflection and bloom; high adds
  oculus shadows. Contact shadows at column bases and plinths are analytic in the floor shader.
- **Story.** After the Old Masters intro closes, the temple wakes: the hall fades up, braziers ignite
  near → far, daylight comes up, the torch lights last; then a flame leaves the torch and walks the
  aisle between the columns. (The protocol chips — GET /work, TLS, AUTHZ, 200 OK — were removed on
  request; the flame stays.)
- **Hero** (`index.html`, `temple.css`, `temple-hero.js`). Kicker, a Cormorant Garamond headline with
  one italic word, one value line, two actions (View work, Download CV), a quiet scroll cue, a
  numerals-only index rail and a meander divider. The portrait markup is unchanged. On desktop the
  hero pins for 1.25 viewport heights: the camera walks down the nave, the copy exits through line
  masks, the portrait drifts forward, and a meander-edged wipe hands over to the next section.
  Phones don't pin; the walk follows the hero scrolling away. GSAP/ScrollTrigger/Lenis are reused.
- **Removed.** `gateway.js`, `gateway.py`, `gateway.glb`, the hero wordmark and code block.
- **Fonts.** Cormorant Garamond 500 regular + italic, self-hosted (SIL OFL, `assets/fonts/`).

## Budgets (quality gate)

| Item | Size | Budget |
|---|---|---|
| `temple.glb` (quantized, KHR_mesh_quantization — no decoder, no CSP change) | 1,001,596 B | 1.5 MB |
| World assets total (incl. Strata) | 2.33 MB | 6 MB |
| `temple-*.js` chunk | 23.4 KB (9.1 KB gzip) | 30 KB gzip |
| `temple-hero.js` / `temple.css` | 7.4 / 9.7 KB | 8 / 12 KB (new) |
| Stills desktop / phone | 55 / 33 KB | 120 / 80 KB (new) |

New budgets were added only for new files (reason in `scripts/quality-gate.mjs`). No existing budget
changed. CSP unchanged in both `vercel.json` and `staticwebapp.config.json`.

## Measured here (cloud container, software WebGL — not your GPU)

- Low tier triangles 186k (36 draws); medium 408k with the reflection.
- Same harness, 480×300, low tier: Temple 5.0 fps vs the old Gateway 18.7 fps. First build was 0.62
  fps; fixes: one texture fetch instead of three on low, anisotropic filtering only on medium/high,
  near/far column LODs, low tier uses the far LOD everywhere, explicit front-to-back draw order.
- Preloader end → scene ignite: 3–70 ms (scene compiled and warmed before the intro closes).
- LCP, Lighthouse-style throttling (1.6 Mbps, 150 ms RTT, 4× CPU), served locally:
  1440×900 **2.76 s** (previous branch 3.85 s; LCP element = the scene still, now preloaded per
  viewport). 390×844 **3.38 s** (previous 3.22 s; LCP element = the portrait, unchanged by this work,
  difference within run-to-run noise). CLS 0.013 / 0.003.
- No page errors; no horizontal overflow at 1440×900 or 390×844 (all tiers + reduced motion).
- **Not measured:** real fps on an Intel UHD. The software rasteriser is vertex-bound in a way a GPU is
  not, so its numbers only rank changes. The governor still protects you: on low, average frame time
  > 40 ms drops to the designed still.

## What looked fake and what changed

| Looked fake | Fix |
|---|---|
| Flat ceiling, dome never in frame | Coffered barrel vault + apse half-dome framing the statue |
| One orange tone everywhere | Weaker warm fill, cool daylight key, darker ambience |
| Vinyl-looking floor (saturated discs) | Darker porphyry, polished centre via roughness, reflection on medium/high |
| Camouflage blotches on walls (pointiness on big faces) | Bevel-normal edge mask; chips only on real arrises |
| Mannequin statue, lampshade overfold | Blended anatomy masses, body-following overfold with dipping hem, diagonal sash |
| Floating columns | Analytic contact shadow at every base and plinth |
| Aisle figures faced the wall | Rotation fixed; all figures draped |

Still honest limits: faces and hands are blank at close range (procedural figures; a real sculpt or
scan would fix that); the vessel figure's silhouette is odd; light shafts are fake planes; the Cycles
stills are cleaner than the real-time scene.

## Rebuild

See `source/worlds/README.md` (Blender → quantize → copy WebP; bun build; then
`node scripts/update-worlds-boot.mjs`).
