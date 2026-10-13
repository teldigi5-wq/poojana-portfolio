# Motion assets

Drop the exported Higgsfield files in this folder using these exact names:

- `hero.webm` and `hero.mp4` — 5-second hero, 16:9, muted, under 3 MB each.
- `loop-system.webm` and `loop-system.mp4` — 4-second seamless system loop.
- `floodguard.webm` and `floodguard.mp4` — 5-second FloodGuard chapter clip.

The hero uses the hero sources. Stage 2 lazy-loads the system loop in Aetheris and the FloodGuard clip only when their desktop chapters approach the viewport. Mobile and reduced-motion layouts do not load chapter videos.
