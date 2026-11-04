# Contact and footer clarity — local review, 31 October 2026

Prepared on `review/contact-footer-clarity-20261031` from the released PR #21 content (remote main `ada700b50cec8e7327dd59f080a5a168b90496c4`). This is a local review only: no remote branch, pull request, merge or deployment was created. The cancelled unified-closing design remains stashed and is not used here.

Both existing sections are retained. The contact keeps its heading, copper `next.` text roll, email, copy utility and CSS 3D card. It now describes internship interests and includes a compact status list for roles, BoundaryLab and Sri Lanka / UTC+05:30. The card has a larger name, gentler final tilt and a native CV download anchor with an accessible name. Repeated slogans and the duplicate social strip are removed.

The original Wild Hunt footer retains its architecture, ordered dither, staged bitmap KAVEESH, coordinates, pointer response, click scan, SVG flourish, navigation and decorative engravings. The thinner flourish sits behind the letters. Side slogans, repeated email column and extra bottom tagline are removed. Profiles remain in Elsewhere; Resume contains the existing CV. Footer links and captions use brighter 12px text; interactive targets are at least 44px high. The two engravings have decorative titles and remain hidden from assistive technology; no theme or motion controls were added.

No new dependencies, images, services or render loops are introduced. The combined portfolio JavaScript is 390,247 bytes (122,965 gzip); its CSS is 29,860 bytes (7,510 gzip). Hero, preloader, project maturity labels and project claims are unchanged. Only changed portfolio JS/CSS URLs get a cache version update.

## Verification

- TypeScript check and production build pass. Shared React and GSAP architecture remains intact; scoped animation cleanup is retained. Native anchors work independently of React.
- Root quality gate passes: 38 IDs, 32 local asset/link references and 16 size budgets. The six existing preloader lifecycle tests pass.
- Browser frames at 390×844, 320×740, 768×1024 and 844×390 have matching client/scroll widths of 375, 305, 753 and 829px. The no-JavaScript frame is 375px with no horizontal overflow. Contact facts and CV remain available.
- The phone menu opens and its Contact link closes the dialog and transfers focus to the section. The `?motion=off#contact` path has the static class and no contact scroll-animation marker.
- Desktop and phone contact/card and footer composition were visually inspected. The footer reports `data-canvas="ready"` and `data-rendering="idle"` after its entrance. Footer side captions are absent; the copyright appears once in its legal line.
- The card is exposed as “Download Poojana Kaveesh’s CV (PDF)” and keyboard navigation proceeds from it into the footer. The same-origin download target is the existing 7,947-byte PDF. The local HTTP browser did not report a native completed-download event, so activation is not claimed as end-to-end verified. Email copy exercises its native selection fallback in this HTTP environment.
- Static color-pair calculations on the declared backgrounds give 8.62:1 for contact labels, 9.98:1 for footer headings, 13.00:1 for footer links and 10.96:1 for copyright. These calculations are not a complete contrast or accessibility audit.

No Lighthouse score, field Core Web Vitals, physical-device performance or comprehensive WCAG result is claimed. Claude’s numerical ratings were estimates. The existing page already includes Person JSON-LD structured data. Project metrics, shipped status, achievements and testimonials have not been invented from the critique.
