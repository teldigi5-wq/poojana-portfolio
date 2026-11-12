# Immersive v3 — plan for approval

Branch: `preview/immersive-v3` (from `preview/all-improvements`). Nothing goes to `main`. Each phase is pushed as a preview and reported with screenshots and measurements.

**Status: plan only. Waiting for approval before any building.**

## 1. The idea in one line

The site is one request travelling through a system. Each section is a **world** the request passes through, with its own light, material and camera language, all joined by one continuous journey. The request rail that already exists becomes its spine.

## 2. The worlds

| # | Section | World | What you see | What stays HTML (accessible truth) |
|---|---|---|---|---|
| 1 | Hero | **The Gateway** | Your portrait in a real-time 3D space: a shaft of warm volumetric light, drifting dust, a copper gateway arch behind you, slow camera drift. The request is born as a point of light and drops towards the page. | Name, headline, intro, CTA, CV |
| 2 | Depth | **The Strata** | The three-layer sculpture rebuilt as a real Blender model: machined copper, smoked glass, engraved labels. Scrolling separates the layers. The existing Experience/Trust/Foundation controls drive it. | Copy, layer buttons, description |
| 3 | BoundaryLab | **The Vault** | The current Three.js gate scene upgraded with Blender assets: a vault corridor, beveled gate frames, a lock core, light beams. It still mirrors the policy explorer's decision and never decides itself. | Policy explorer (unchanged), trace, status |
| 4 | Aetheris | **The Engine Room** | A kinetic machine: service blocks, a queue drum and conduits where messages travel as light. Visual only, with no simulation widget. | Facts, CI evidence, case study |
| 5 | Wayfarer | **The Atlas** | A stylised low-poly Sri Lanka with routes drawn in light between Kandy, Ella and Galle. Coastline from public-domain data; relief is stylised and labelled as such. Visual only, with no planner. | Facts, live-app link, case study |
| 6 | About | **The Studio** | A calm close-up: the lanyard under soft key light, depth of field, warm tones. | Bio, lanyard (existing) |
| 7 | Contact | **200 OK** | The request resolves: every light in the journey converges into one quiet, bright scene in sage green. | Invitation, email, CV, links |

Transitions are continuous: a camera flight plus a colour-grade crossfade on **one shared canvas**, not separate boxes stacked down the page.

## 3. Production pipeline

### 3.1 Assets in Blender (your laptop)

- **Reproducible scripts:** every asset is built by a Python script in `source/blender/` (for example `strata.py` or `vault.py`). That means it can be rebuilt and reviewed, not hand-tweaked in a file nobody can repeat. The `.blend` files are saved next to the scripts.
- **Export format:** glTF 2.0 (`.glb`) with WebP textures, from Blender's built-in exporter.
- **Draco compression:** no Draco at first. It needs a WASM decoder and a CSP change (`wasm-unsafe-eval`). The meshes are mostly hard-surface and low-poly, so plain `.glb` should fit the budgets. Draco is added only if a world measures over budget, and the CSP change would be explained in both `vercel.json` and `staticwebapp.config.json`.
- **Baking and stills:** lighting and ambient occlusion are baked into textures where that saves runtime cost. Rendering uses **EEVEE**, because Cycles on this CPU (i3-1315U, no separate GPU) would take hours per bake.
- **Fallback images:** every world gets designed still frames (desktop and phone, WebP, about 60–120 KB each) for no-WebGL, reduced motion and `?motion=off`. No empty boxes.
- **Map data:** coastline from Natural Earth 10 m (public domain). Elevation is stylised unless we decide to use SRTM, which is also public domain.

### 3.2 Runtime

- **One shared renderer:** a single persistent full-viewport WebGL canvas (the "world stage") sits behind the content. Each world is its own Three.js scene, loaded on demand. This replaces the separate BoundaryLab canvas, so there's never more than one WebGL context.
- **Libraries:** Three.js r187, self-hosted and bundled with Bun as now. No React Three Fiber, because a single shared canvas outside the React islands is simpler and lighter.
- **Post-processing:** selective bloom, depth of field, film grain and colour grading through Three.js's EffectComposer, all switchable by quality tier.
- **Custom shaders:** light conduits, the dissolve between worlds, map route lines and volumetric light. No stock-looking effects.
- **Scroll driving:** GSAP ScrollTrigger (already present) drives the camera paths. Lenis stays.

### 3.3 Quality tiers (adaptive)

| Tier | Who | Settings |
|---|---|---|
| High | Laptops/desktops with headroom | DPR ≤ 1.75, bloom + DoF + grain, full particles |
| Medium | Integrated GPUs (like this laptop) | DPR ≤ 1.25, bloom only, half particles |
| Low | Phones, weak GPUs | DPR 1, no post-processing, simplified scenes |
| Still | No WebGL, reduced motion, `?motion=off`, Save-Data | Designed stills only |

The tier is chosen at start, then adjusted live: if frame time stays over 22 ms for about 2 seconds, it drops a tier.

## 4. Budgets (enforced in the quality gate)

- **Before any 3D loads:** LCP ≤ 2.5 s (Lighthouse mobile), CLS < 0.05, no long task over 200 ms in the first 5 s.
- **Per-world 3D assets:** ≤ 1.5 MB compressed. Total ≤ 6 MB. Assets load in idle time, one world ahead.
- **Engine code:** ≤ 180 KB gzip, including Three.js and post-processing.
- **Frame rate:** 60 fps target on a mid-range laptop GPU, ≥ 30 fps on this i3 laptop at Medium and on a mid-range Android phone at Low.
- **Scrolling:** total blocking during a full-page scroll ≤ 150 ms (Long Animation Frames). Today it's 88 ms.
- **Accessibility:** tap targets ≥ 44 px and text ≥ 10 px at 360, 390, 768 and 1440 px.

## 5. Constraints kept

- **Security:** strict CSP and everything self-hosted: no CDNs, no third-party scripts, no `eval`.
- **React bundles:** the bundles in `assets/` stay untouched, because CI rebuilds them byte-for-byte.
- **Honesty:** every limitation stays (pre-release, research, not production-ready, simulated). No invented metrics, clients or testimonials.
- **Accessibility:** WCAG 2.2 AA. 3D is `aria-hidden` decoration over real HTML, keyboard paths are unchanged, and nothing exists only in WebGL. The site works without JavaScript.
- **Controls:** no new always-visible toggles. Sound stays optional and off.
- **Removed features stay removed:** the claim race and trip planner don't come back.

## 6. Phases (each ends with a preview link, screenshots and numbers)

0. **Foundation:** world stage, tier system, asset loader, still fallbacks, budget checks in the quality gate, Playwright suite at four sizes. Visible change: none, apart from the BoundaryLab scene moving onto the shared canvas.
1. **The Gateway (hero):** arch, light shaft, dust, portrait integration, request birth.
2. **The Strata (Depth):** the Blender sculpture replaces the CSS 3D model, wired to the existing controls.
3. **The Vault (BoundaryLab):** Blender corridor and gates, upgraded from the current scene.
4. **The Engine Room (Aetheris).**
5. **The Atlas (Wayfarer).**
6. **The Studio + 200 OK (About and Contact).**
7. **Journey polish:** transitions between worlds, mobile scenes, optional sound design, performance tuning, `IMMERSIVE-V3-RELEASE.md` and making-of updates with real numbers.

Each phase is independently reviewable. You can stop after any phase and keep what's there.

## 7. Risks and honest limits

- **The portrait is a photograph.** I can light and frame it in 3D space (layered planes, light, particles, parallax) but can't turn it into a 3D head. A real 3D likeness would need a photogrammetry scan.
- **Weak GPUs:** an i3 laptop with integrated graphics is a hard target for bloom, DoF and volumetrics together. The Medium tier exists for exactly this, and I'll measure on your machine.
- **Recruiter attention:** immersive pages can bury content. Every world keeps the HTML content readable first, and the recruiter path (who, what, CV, contact) must stay obvious within 10 seconds. If a world hurts that, it gets simplified.
- **Size of the job:** this is the largest change the site has had. Expect several sessions. Phases 0–3 carry most of the value.
- **Real-device checks:** only you can test the phone and the i3 laptop in person. I'll ask for a quick look after phases 1 and 3.

## 8. Decisions needed from you

1. **Approve the world concepts** (section 2), or change any of them.
2. **Map relief for Wayfarer:** stylised, or real elevation (SRTM)?
3. **Start with phases 0–1** and review, or go straight through to phase 3?
