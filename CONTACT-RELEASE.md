# Cinematic contact studio — 30 October 2026

Base: `7c748dc6e9cf88d4d16924b2a37a84a7e6a6f64e` (PR #19). This change replaces the beige contact section shown in the request, preserving the surrounding copper portfolio.

The new charcoal studio pairs ivory typography and an italic copper “next.” with a physical calling card. CSS provides front/back/edge planes, a foil monogram, a paper backing, brushed texture and floor shadow. The card's turn, paper spread, light sweep and closing rule follow a GSAP/ScrollTrigger timeline. A separate wrapper adds restrained fine-pointer tilt. The section is unpinned; on phones, motion is measured against the artwork rather than the much taller section. Contact triggers refresh after the preceding gallery pin so scroll positions stay correct in either direction. See the GSAP [refreshPriority documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).

The heading retains the existing WAAPI character roll. The CTA opens `mailto:teldigi5@gmail.com`; the email/copy control and the three existing social destinations remain. Artwork is decorative (`aria-hidden`), while the actual heading, links and copy status are ordinary HTML. Static CSS preserves the composition without animation; the shared reduced-motion/forced-colors preference and `?motion=off` disable the enhancement. No-JavaScript hides the copy button and keeps native email/navigation links.

Implementation lives in `source/portfolio-copper/components/ui/cinematic-contact.tsx` and `styles/cinematic-contact.css`. It uses the existing React, GSAP and ScrollTrigger runtime; no dependencies, images, external services or new continuous render loop are added. Cleanup is scoped to the component. New asset version queries bypass previously cached immutable JS/CSS.

Local validation passed:

- Strict TypeScript and production build; generated assets copied into root `assets/`.
- Existing quality gate: 36 unique IDs, 32 asset/link references and 11 size budgets. JavaScript syntax and staged whitespace checks pass.
- Desktop Chromium visual inspection; card transform and progress reverse from 0.981 to 0.348 on upward scroll and return to 0.955 on downward scroll. Fine-pointer tilt changes independently and resets on leave.
- Responsive frames at 390×844, 320×740, 768×1024 and 844×390 show no horizontal document overflow (client/scroll widths 375, 305, 753 and 829 pixels). Phone artwork progress advances from 0.302 to 1.000 as it enters view. Tablet keyboard navigation reaches contact.
- No-JavaScript contact retains its heading and mailto and hides copy. `?motion=off#contact` has no contact animation marker and displays the static card. Accessible heading exposes the complete sentence once.
- The cloud browser denies clipboard access; the copy control's fallback selects the exact email and announces “Select the email address to copy it.” Successful system-clipboard writing is not claimed.
- No app-origin warnings/errors observed in the checked local preview. Browser extension metadata errors are unrelated to the page.

Portfolio output is 339,617 bytes JS / 108,534 gzip and 29,326 bytes CSS / 7,387 gzip. Combined gzip grows by 3,544 bytes from PR #19. The CSS budget increases from 24 KiB to 32 KiB to accommodate physical card materials and responsive/static fallbacks; the 340 KiB JavaScript budget is unchanged. Navbar output is unchanged.

These checks cover browser layout and interaction, not physical-device performance, field Core Web Vitals or an exhaustive accessibility audit. OS motion emulation was unavailable; the shared static query pathway was exercised. Existing project claims, unrelated PRs, security headers, hero, gallery, ribbons and footer are outside this contact refinement.
