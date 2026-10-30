# Poojana Kaveesh — Engineering with intent

Production portfolio: https://poojana-portfolio.vercel.app/

This release is a static, portrait-led engineering portfolio with React navigation and cinematic experience islands sharing one runtime. It presents seven projects with explicit maturity labels, a CSS 3D systems sculpture, local GSAP/ScrollTrigger storytelling and the Nimbus UI “Waterline” WebGL navigation adapted to a warm copper palette.

The welcome edition includes a finite shutter and masked-text entrance, looping code typing and erasing, rolling link text, crossed toolkit ribbons, three inline engineering timelines and a horizontal project gallery. Four hero layers follow the supplied GSAP scroll choreography, with smaller travel on phones. The architectural footer adapts the supplied Wild Hunt component with canvas dithering, a bitmap wordmark and SVG flourish. Desktop, mobile and footer navigation follow the document order: Home, Depth, Work, About, Contact.

## Runtime

Vercel serves the committed root files directly. All production images, fonts, scripts and styles are self-hosted. There is no contact backend, analytics, account system, paid API or live security scanner.

The page remains usable without React, WebGL or animation:

- Native anchor links are present before React mounts.
- The navbar falls back to a CSS lens if WebGL is unavailable or its context is lost.
- OS reduced-motion preferences or `?motion=off` disable nonessential movement. The visible Motion and ribbon-pause buttons were removed at the user's request.
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

See [NAVIGATION-FOOTER-RELEASE.md](NAVIGATION-FOOTER-RELEASE.md) for the latest changes and verification; [CINEMATIC-RELEASE.md](CINEMATIC-RELEASE.md) records the preceding edition. No additional framework, account system or paid service is required.

## Security and release controls

`vercel.json` and `staticwebapp.config.json` preserve matching CSP and baseline browser security headers. GitHub Actions validates syntax, local references, accessibility markers, budgets, security-header parity and source/output markers before merge.

The source and factual limits are documented in `source/portfolio-copper/VERIFICATION.md`. Browser checks are layout and interaction checks, not a claim of physical-device certification, Core Web Vitals compliance or exhaustive accessibility conformance.

## Attribution

- Liquid navigation adapted from the user-supplied Nimbus UI “Waterline” component by https://guglielmogiannattasio.it; attribution is retained in source.
- GSAP and ScrollTrigger license banners are preserved. License: https://gsap.com/standard-license/.
- Nimbus Sans font license is retained in `assets/FONT-LICENSE.txt`.
- Lenis is MIT-licensed; its license is retained in `assets/LENIS-LICENSE.txt`.
- The supplied Osmo React/GSAP/Lenis example informed the cinematic component's technology. Its demo images and logo are not used.
- The user-supplied Wild Hunt Footer source provides the canvas raster/dither and SVG flourish implementation. The portfolio passes its own wordmark, existing architectural artwork, palette and working links.
