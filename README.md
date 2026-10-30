# Poojana Kaveesh — Engineering with intent

Production portfolio: https://poojana-portfolio.vercel.app/

This release is a static, portrait-led engineering portfolio with React navigation and cinematic experience islands sharing one runtime. It presents seven projects with explicit maturity labels, a CSS 3D systems sculpture, local GSAP/ScrollTrigger storytelling and the Nimbus UI “Waterline” WebGL navigation adapted to a warm copper palette.

The welcome edition adds a finite shutter and masked-text entrance, one-pass code typing, rolling link text, two crossed toolkit ribbons with a pause control, three inline engineering timelines and a horizontal project gallery. Spacious desktop screens use a bounded pinned gallery and Lenis; narrow, short and reduced-motion layouts use native horizontal scrolling. Hero and landscape-image parallax have been removed. The supplied portrait remains the visual anchor.

## Runtime

Vercel serves the committed root files directly. All production images, fonts, scripts and styles are self-hosted. There is no contact backend, analytics, account system, paid API or live security scanner.

The page remains usable without React, WebGL or animation:

- Native anchor links are present before React mounts.
- The navbar falls back to a CSS lens if WebGL is unavailable or its context is lost.
- Reduced-motion preferences and the page Motion control disable nonessential movement.
- Content remains visible if GSAP, ScrollTrigger or JavaScript does not run.

## Source

The reusable React/TypeScript/Tailwind source is in `source/portfolio-copper/`. Its shadcn-compatible structure uses `components/ui`, `components.json` and `@/` aliases. Production consumes `assets/portfolio-v2.js`, `assets/portfolio-v2.css` and `assets/liquid-navbar.css`. The combined entry avoids shipping a second copy of React or GSAP. The standalone navbar bundle is retained for independent reuse.

To rebuild the navbar locally:

```sh
cd source/portfolio-copper
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

The source build writes to `source/portfolio-copper/dist/assets`. Copy the generated navbar and portfolio assets, including legal notices, into root `assets/` after review. CI rebuilds all four JS/CSS files and compares them byte-for-byte with the deployed copies. `node scripts/quality-gate.mjs` validates the deployed root.

See [CINEMATIC-RELEASE.md](CINEMATIC-RELEASE.md) for component paths, motion ownership, research and the verified browser scope. No additional framework, account system or paid service is required.

## Security and release controls

`vercel.json` and `staticwebapp.config.json` preserve matching CSP and baseline browser security headers. GitHub Actions validates syntax, local references, accessibility markers, budgets, security-header parity and source/output markers before merge.

The source and factual limits are documented in `source/portfolio-copper/VERIFICATION.md`. Browser checks are layout and interaction checks, not a claim of physical-device certification, Core Web Vitals compliance or exhaustive accessibility conformance.

## Attribution

- Liquid navigation adapted from the user-supplied Nimbus UI “Waterline” component by https://guglielmogiannattasio.it; attribution is retained in source.
- GSAP and ScrollTrigger license banners are preserved. License: https://gsap.com/standard-license/.
- Nimbus Sans font license is retained in `assets/FONT-LICENSE.txt`.
- Lenis is MIT-licensed; its license is retained in `assets/LENIS-LICENSE.txt`.
- The supplied Osmo React/GSAP/Lenis example informed the cinematic component's technology. Its demo images and logo are not used.
