# Poojana Kaveesh — Engineering with intent

Production portfolio: https://poojana-portfolio.vercel.app/

This release is a static, portrait-led engineering portfolio with a small React navigation island. It presents seven projects with explicit maturity labels, a CSS 3D systems sculpture, local GSAP/ScrollTrigger storytelling and the Nimbus UI “Waterline” WebGL liquid navigation adapted to a warm copper palette.

## Runtime

Vercel serves the committed root files directly. All production images, fonts, scripts and styles are self-hosted. There is no contact backend, analytics, account system, paid API or live security scanner.

The page remains usable without React, WebGL or animation:

- Native anchor links are present before React mounts.
- The navbar falls back to a CSS lens if WebGL is unavailable or its context is lost.
- Reduced-motion preferences and the page Motion control disable nonessential movement.
- Content remains visible if GSAP, ScrollTrigger or JavaScript does not run.

## Source

The reusable React/TypeScript/Tailwind source is in `source/portfolio-copper/`. Its shadcn-compatible structure uses `components/ui`, `components.json` and `@/` aliases. Production consumes the committed bundles in `assets/liquid-navbar.js` and `assets/liquid-navbar.css`.

To rebuild the navbar locally:

```sh
cd source/portfolio-copper
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

The source build writes to `source/portfolio-copper/dist`. Copy the two generated liquid-navbar assets to the repository root only after their hashes and browser behavior have been reviewed. `node scripts/quality-gate.mjs` validates the deployed root.

## Security and release controls

`vercel.json` and `staticwebapp.config.json` preserve matching CSP and baseline browser security headers. GitHub Actions validates syntax, local references, accessibility markers, budgets, security-header parity and source/output markers before merge.

The source and factual limits are documented in `source/portfolio-copper/VERIFICATION.md`. Browser checks are layout and interaction checks, not a claim of physical-device certification, Core Web Vitals compliance or exhaustive accessibility conformance.

## Attribution

- Liquid navigation adapted from the user-supplied Nimbus UI “Waterline” component by https://guglielmogiannattasio.it; attribution is retained in source.
- GSAP and ScrollTrigger license banners are preserved. License: https://gsap.com/standard-license/.
- Nimbus Sans font license is retained in `assets/FONT-LICENSE.txt`.
