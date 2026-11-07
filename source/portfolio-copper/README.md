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

This package builds browser assets into `dist/assets/`. The complete static page and its images live at the repository root. Rebuild the assets whenever React components or their styles change; the production copies are committed in root `assets/`.

## Welcome and cinematic experience

`components/ui/parallax-scrolling.tsx` adapts the supplied React/GSAP/Lenis example into `CinematicExperience`; the registry alias `ParallaxComponent` remains available. The rendered portfolio uses welcome text, looping typing/erasing, rolling links, crossed toolkit ribbons, inline project timelines and interactive architecture/journey explorers. The previous vertical shutter layer is removed. Four hero layers scrub together at 70/55/40/10 percent on desktop and smaller distances on mobile. `parallax-scrolling-demo.tsx` is the integration example. No context provider is required.

Default reusable component path: `components/ui/` (inside this source package). Default Tailwind styles: `styles/globals.css`; cinematic styles: `styles/cinematic.css`. The `@/` alias resolves from the package root. The folder is already configured in `components.json`, so there is no need to run shadcn initialization again; it keeps registry imports and future shadcn additions consistent.

The implementation uses the maintained `lenis` package (`1.3.27`) rather than the old `@studio-freight/lenis` package name. GSAP and ScrollTrigger share the existing page instance through the production build adapter in `scripts/build-cinematic.mjs`. Ordinary React projects can use the same package imports without that adapter. Do not load another Lenis instance alongside it.

`src/portfolio.tsx` mounts the navigation, cinematic and footer islands in one production bundle. `src/navbar.tsx` is still independently buildable. `src/cinematic.tsx` mounts at `#cinematic-ribbon-root`; `src/footer.tsx` configures `components/ui/wild-hunt-footer.tsx` at `#portfolio-footer-root`. Each island preserves an error fallback. The static root HTML provides hero, project, timeline and fallback footer content before React mounts.

The component follows live OS reduced-motion and forced-color preferences; `?motion=off` provides a static view without an on-page control. Ribbons use WAAPI and keep moving under the pointer; they pause off-screen or when hidden. Hero code playback pauses off-screen and when hidden. Lenis smooths wheel input on fine-pointer devices at every viewport size and keeps touch scrolling native. Its ticker is primed when waking, covers the start of wheel batches and stops after scrolling settles. Keyboard section links move focus to their destination; browser history cancels in-flight transitions. The static-view query disables CSS smooth scrolling. GSAP cleanup is scoped with context/matchMedia.

`components/ui/text-roll.tsx` adapts Motion Primitives' paired 3D letter faces to WAAPI. Welcome lines play once when visible and replay on hover; the hero CTA and three project links roll on hover or keyboard focus. Static HTML copy remains available before React mounts, and only one accessible text label is exposed. OS reduced-motion and `?motion=off` keep letters static. The MIT attribution is retained in the component and generated legal notice; no additional animation runtime is installed.

The supplied footer keeps its React/Canvas 2D/SVG implementation: ordered dithering, bitmap blackletter, staged raster resolution, drawn flourish, pointer reticle and click scan. It uses existing self-hosted artwork, actual portfolio links and copper colors. It respects reduced motion, has a readable canvas fallback, fits narrow screens and stops its RAF loop when idle, hidden or off-screen.

`components/ui/old-masters-preloader.tsx` retains the supplied React/CSS/SVG-mask/Canvas implementation; `old-masters-preloader-demo.tsx` is its standalone example. `components/portfolio-preloader.tsx` passes the Poojana wordmark, copper palette, local images, `fontHref={null}`, `skippable={false}` and `cta={null}`. Readiness tracks settled hero/intro images and fonts, with bounded failures, rather than simulating network progress. `src/preloader.tsx` mounts it in the existing shared React bundle. No provider or additional dependency is required.

The static native dialog and `preloader-boot.js` provide an independent 8-second release deadline. The loader closes automatically, restores normal document scrolling, and unmounts its loops. Deep links, restored history, hidden tabs and reduced-motion/static views do not wait for it. `styles/preloader.css` handles the dialog and responsive overrides. Hero text/typing and React scroll scenes start after the intro releases, avoiding simultaneous opening animations. The original Google Fonts default is retained for reusable component consumers; production explicitly disables it and uses Georgia plus the existing local Studio face.

`components/ui/cinematic-contact.tsx` enhances the static `#contact` markup with an unpinned GSAP card turn, paper spread, light sweep and masked heading entrance. `styles/cinematic-contact.css` supplies the charcoal studio, copper card faces/edges, shadows and responsive layout. Fine-pointer tilt uses a separate transform wrapper and one demand-driven RAF. Contact triggers refresh after earlier pinned scenes; phones measure the artwork's viewport entry. Every owned event and animation is cleaned up. The existing email, copy fallback and social destinations remain; the card is decorative and hidden from assistive technology. The shared motion preference disables the enhancement. See root `CONTACT-RELEASE.md` for validation and limits.

## Liquid-glass navigation

`components/ui/liquid-glass-navbar.tsx` integrates the user-supplied Nimbus UI “Waterline” component. Its WebGL shader, spring-driven liquid selection, droplets, ripples, pointer lens and SVG refraction are retained, with a champagne/copper palette. Lucide supplies the icons. A CSS lens works when WebGL is unavailable or its context is lost. Static links remain if JavaScript does not load.

The previous source had no React, TypeScript or Tailwind build. Those are now configured, together with a shadcn-compatible `components.json`; no context providers are required. Setup is already complete, so there is no need to run `shadcn init` over this project.

- `components/ui/`: reusable components and the supplied `demo.tsx`. This is the configured shadcn UI directory; keeping it here makes `@/components/ui/...` imports and future CLI additions consistent.
- `components/portfolio-navigation.tsx`: Home, Depth, Work, About and Contact props, matching section tracking and integration with the system motion preference. A native dialog supplies mobile focus containment, Escape, close and section navigation.
- `src/navbar.tsx`: React entry point mounted at `#liquid-nav-root`.
- `styles/globals.css`: Tailwind v4 theme and utilities; Preflight is intentionally omitted to preserve the existing page reset.
- `styles/liquid-glass-navbar.css`: component appearance, icon animation and responsive header styles.
- `components/ui/liquid-glass-shaders.ts`: the small GPU water shader.
- `lib/utils.ts`, `tsconfig.json`, `components.json`: shadcn class utility and `@/` aliases rooted at the repository.

The portfolio passes `tone="dark"`, `compact={false}`, `sound={false}` and controlled `active`/`onChange` props. The navbar also accepts `motion` and `webgl` overrides for accessibility and fallback testing. It follows live OS reduced-motion settings and the static-view query. Arrow keys move link focus; Enter follows the actual section link. The render loop stops when interaction settles and pauses off-screen or in a hidden document. GPU resources and observers are cleaned up on unmount.

For local manual browser checks, run `node scripts/build-navbar-qa.mjs` and open `/__qa/` or `/__qa/responsive.html`. The fixture provides shader diagnostics, context-loss controls, a forced CSS fallback and fixed-width frames. Every production build removes these fixtures from `dist`.

## Experience

- Responsive hero centered on the supplied transparent portrait, with warm black, champagne and copper colors. The earlier architectural artwork remains a subtle backdrop.
- Short GSAP ScrollTrigger portrait and system-layer sequences on desktop; unpinned layouts on mobile and short landscape screens.
- A CSS 3D system model with scroll-driven, assembled, exploded and rotate controls; subtle pointer tilt on project cards. WebGL is scoped to the navigation capsule, with no continuous idle particle rendering.
- Reduced-motion support and a static-view query, without visible motion buttons.
- Three flagship stories with native dialogs and external project links: BoundaryLab, Aetheris and Wayfarer.
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

## Interactive project preview — November 6

`components/ui/project-explorers.tsx` progressively enables the existing Aetheris architecture and Wayfarer artwork. Architecture nodes expose their responsibilities and an interruptible GSAP walkthrough illustrates a request path; it makes no backend call or live-performance claim. Wayfarer uses keyboard-accessible journey tabs with short WAAPI transitions. Static HTML and case-study copy remain available without React; motion preferences remove animation while retaining the controls. `project-explorers.css` keeps the existing project palettes.

Fresh home visits and reloads (including `#home` and `#main`) show the original Old Masters introduction even if the browser restores a scroll offset. Section deep links, history restoration and motion/accessibility preferences bypass it. Loading progress uses elapsed time independently of decorative pointer smoothing; the existing eight-second emergency release and native Escape behavior remain intact. No on-screen Skip control is added.

## Flagship materials preview — November 6

The selected-work section and footer now feature only BoundaryLab, Aetheris and Wayfarer. The smaller exploration gallery, its dialog data and its scroll/keyboard handlers are removed. Project maturity labels and evidence limitations remain unchanged.

Root `art-direction.css` harmonizes warm ivory, charcoal, copper and Wayfarer evergreen while preserving the established section identities. The CSS 3D system plates have all four edges and an underside, shallow metal profiles and small recessed fasteners. The contact card uses a 2px edge and reduced tilt; raised diagram panels use soft contact shadows. These remain lightweight CSS material studies, not photographed products or physically based WebGL renders. No dependencies, model downloads or background noise layer are added. The original loader, portrait, rich footer, smooth scrolling and accessibility fallbacks are retained.

Validation: TypeScript, cinematic build, static quality gate and all seven loader tests pass. Browser checks cover three project cards, removed gallery links, depth controls, project selection, case dialogs, static/no-JavaScript fallbacks and responsive widths from 305px to 829px without page overflow. Responsive desktop-browser checks are not a claim of physical-device testing or measured Core Web Vitals. This is a preview branch; production is not promoted.


## 6 November clarity preview

`components/ui/command-palette.tsx` adds native-dialog quick access, rendered through the existing React runtime. `portfolio-navigation.tsx` selects the flat CSS indicator with `webgl={false}`. The optional WebGL component is retained for reuse. Root `design-tokens.css` and `clarity.css` preserve the section palettes while improving readable text and mobile navigation. `motion.js` owns the mouse-drag/layer controls; native buttons remain the keyboard and touch alternative. See the root `REVIEW-REFINEMENTS.md` for decisions and verification limits. No new packages or providers are required.
