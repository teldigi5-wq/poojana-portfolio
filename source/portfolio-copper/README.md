# Poojana Kaveesh — Engineering with intent

A copper cinematic portfolio inspired by the two supplied videos and refined around the portrait supplied on 29 October 2026. This source package is retained inside the production portfolio repository; the deployable static files live at the repository root.

## Run

The page remains a static site with a React navigation island. All image, font, animation and runtime assets are self-hosted. The Sites manifest points to `dist/`.

Use Node 24 and pnpm 11.25.0:

```sh
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

Serve `dist/` with a static HTTP server. The committed `dist` can also be served directly without installing packages. Rebuild it whenever the React or navbar styles change.

## Liquid-glass navigation

`components/ui/liquid-glass-navbar.tsx` integrates the user-supplied Nimbus UI “Waterline” component. Its WebGL shader, spring-driven liquid selection, droplets, ripples, pointer lens and SVG refraction are retained, with a champagne/copper palette. Lucide supplies the icons. A CSS lens works when WebGL is unavailable or its context is lost. Static links remain if JavaScript does not load.

The previous source had no React, TypeScript or Tailwind build. Those are now configured, together with a shadcn-compatible `components.json`; no context providers are required. Setup is already complete, so there is no need to run `shadcn init` over this project.

- `components/ui/`: reusable components and the supplied `demo.tsx`. This is the configured shadcn UI directory; keeping it here makes `@/components/ui/...` imports and future CLI additions consistent.
- `components/portfolio-navigation.tsx`: Home, Work, Depth, About and Contact props, section tracking and integration with the existing motion preference.
- `src/navbar.tsx`: React entry point mounted at `#liquid-nav-root`.
- `styles/globals.css`: Tailwind v4 theme and utilities; Preflight is intentionally omitted to preserve the existing page reset.
- `styles/liquid-glass-navbar.css`: component appearance, icon animation and responsive header styles.
- `components/ui/liquid-glass-shaders.ts`: the small GPU water shader.
- `lib/utils.ts`, `tsconfig.json`, `components.json`: shadcn class utility and `@/` aliases rooted at the repository.

The portfolio passes `tone="dark"`, `compact={false}`, `sound={false}` and controlled `active`/`onChange` props. The navbar also accepts `motion` and `webgl` overrides for accessibility and fallback testing. It follows live OS reduced-motion settings and the page's Motion control. Arrow keys move link focus; Enter follows the actual section link. The render loop stops when interaction settles and pauses off-screen or in a hidden document. GPU resources and observers are cleaned up on unmount. No stock images are needed for this component; the supplied portrait and existing work remain in place.

For local manual browser checks, run `node scripts/build-navbar-qa.mjs` and open `/__qa/` or `/__qa/responsive.html`. The fixture provides shader diagnostics, context-loss controls, a forced CSS fallback and fixed-width frames. Every production build removes these fixtures from `dist`.

## Experience

- Responsive hero centered on the supplied transparent portrait, with warm black, champagne and copper colors. The earlier architectural artwork remains a subtle backdrop.
- Short GSAP ScrollTrigger portrait and system-layer sequences on desktop; unpinned layouts on mobile and short landscape screens.
- A CSS 3D system model with scroll-driven, assembled, exploded and rotate controls; subtle pointer tilt on project cards. WebGL is scoped to the navigation capsule, with no continuous idle particle rendering.
- Reduced-motion support and a persistent animation-off control.
- Seven project stories with native dialogs and external project links: BoundaryLab, Aetheris, Wayfarer, FinalForge, Averis, Sentinel and FloodGuard.
- A deterministic, browser-local ownership-rule example for BoundaryLab, explicitly labeled illustrative.
- Existing portrait, CV, email, social links and project descriptions sourced from the user's current portfolio and GitHub profile README.
- No contact backend, analytics, accounts, paid APIs, or real security scans.

## Content provenance

The current `teldigi5-wq/poojana-portfolio/index.html` and `teldigi5-wq/teldigi5-wq/README.md` were read using the connected GitHub account. Project maturity follows the profile README and preserves prototype/validation qualifications. Repository claims have not been re-audited as part of this design task. The source document SHA values were `e27e413cebdfc15ff8299e45500ee1e441c4fa35` and `8d87dcd83227f24b65ee68cc2eb5a9f5ab5577f4` respectively. The portrait is reused unchanged from `assets/images/poojana-studio-960.webp` (SHA `b93874a68139c484f038c6ab0e7240b15a808c88`).

Additional project READMEs were reviewed for this edition: Wayfarer `7342e9f06701f94ae2389b36f887b0b03c62aa06`, Sentinel `71e23c0fed7be7a2e68e0f6d1f071c1b060cd0f1`, FloodGuard `aeb25e6f9cc6d47534e8033de2fdae51e7d3efad`. Their descriptions preserve optional-provider, local-test and hardware-validation limits.

## Assets and licenses

- The exact supplied portrait is retained outside this public release. The two deployed WebP sizes preserve its alpha channel and appearance.
- `dist/assets/wayfarer.webp`: existing Wayfarer project artwork from `assets/wayfarer-hero-v3.webp`, Git blob `846eadb215d1f9677739e2486165aa4a1969446a`.

- `dist/assets/vault.webp` and `vault-mobile.webp`: original built-in image-generation artwork, optimized to WebP. Conceptual architecture, not an actual workplace or data center. Source prompt: a wide photographic black-metal computing vault, ribbed industrial walls, a controlled amber-lit rectangular opening toward center-right, dark negative space for live typography; no people, logos, UI, spheres or neon grids. Local source image: `/workspace/scratch/7b5d334bcbb6/generated_images/exec-9a6bc14b-b58d-4545-9ad3-31ddaa3d25e4.png`.
- Nimbus Sans and Nimbus Sans Narrow Latin subsets: license retained in `dist/assets/FONT-LICENSE.txt`.
- Liquid navbar adapted from the user-supplied Nimbus UI component by https://guglielmogiannattasio.it; attribution retained in source. React and Lucide legal notices are retained with the bundle.
- GSAP and ScrollTrigger reused from the existing portfolio vendor files; original license banners preserved. GSAP license: https://gsap.com/standard-license/ .
- Illustrative project compositions are HTML/CSS, with a simplified Aetheris architecture. No performance, customer or production-security statistics are invented.

## Verification scope

Static integrity and JavaScript syntax checks; browser checks recorded separately in `VERIFICATION.md`. No claim of measured production Core Web Vitals, comprehensive WCAG conformance or physical-device testing.

The production root supplies the canonical URL, indexable metadata, structured data and hosting security headers. Recheck project maturity and external destinations whenever the content changes.
