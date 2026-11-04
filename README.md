# Poojana Kaveesh — Engineering with intent

Production portfolio: https://poojana-portfolio.vercel.app/

This release is a static, portrait-led engineering portfolio with React navigation and cinematic experience islands sharing one runtime. It presents seven projects with explicit maturity labels, a CSS 3D systems sculpture, local GSAP/ScrollTrigger storytelling and the Nimbus UI “Waterline” WebGL navigation adapted to a warm copper palette.

The opening uses the supplied Old Masters React/SVG/Canvas preloader, with a filling Poojana wordmark, luminance-masked statues and warm light. It has no Skip or Enter button and closes automatically. The previous vertical hero shutters are removed. The hero keeps looping code typing/erasing, rolling text, crossed toolkit ribbons, three inline engineering timelines and a horizontal project gallery. Four hero layers follow the supplied GSAP scroll choreography, with smaller travel on phones. The architectural footer uses canvas dithering, a bitmap wordmark and SVG flourish. Desktop, mobile and footer navigation follow the document order: Home, Depth, Work, About, Contact.

The contact section is a dark correspondence studio with ivory/copper typography and a physical calling card made from CSS 3D faces. GSAP turns the card, spreads its paper backing and moves a light sweep with scroll; fine pointer movement adds a small independent tilt. It stacks on phones and stays readable in the static view without adding a pin or another rendering library.

## Runtime

Vercel serves the committed root files directly. All production images, fonts, scripts and styles are self-hosted. There is no contact backend, analytics, account system, paid API or live security scanner.

The page remains usable without React, WebGL or animation:

- Native anchor links are present before React mounts.
- The navbar falls back to a CSS lens if WebGL is unavailable or its context is lost.
- OS reduced-motion preferences or `?motion=off` disable nonessential movement. The visible Motion and ribbon-pause buttons were removed at the user's request.
- Content remains visible if GSAP, ScrollTrigger or JavaScript does not run.
- The native intro dialog is closed by default without JavaScript. A separate 8-second watchdog releases it if the React bundle or an asset fails. Deep links, history restoration and reduced-motion/static views bypass the introduction.

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

See [PRELOADER-RELEASE.md](PRELOADER-RELEASE.md) for the current opening and removed shutters, [CONTACT-RELEASE.md](CONTACT-RELEASE.md) for cinematic contact, [TEXT-ROLL-RELEASE.md](TEXT-ROLL-RELEASE.md) for character roll and continuous ribbons, [NAVIGATION-FOOTER-RELEASE.md](NAVIGATION-FOOTER-RELEASE.md) for navigation/footer and [CINEMATIC-RELEASE.md](CINEMATIC-RELEASE.md) for the welcome edition. No additional framework, account system or paid service is required.

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
- Character text roll adapts Motion Primitives by ibelick (MIT), using the existing WAAPI runtime for paired, staggered 3D letter faces. Source and license are retained in `components/ui/text-roll.tsx` and the generated bundle notice. Toolkit ribbons continue on hover.
- Old Masters Preloader and four embedded WebP images come from the supplied component/demo. Its photo credits remain in source; the deployed files are extracted unchanged. The integration loads no external fonts or stock-image services.
