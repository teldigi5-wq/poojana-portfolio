# Old Masters introduction — 31 October 2026

Base: `2a74500315a73124cc92ed676b55f0bcc8cc9d90` (PR #20). Scope: integrate the supplied preloader and remove the vertical hero shutter shapes marked in the screenshot. The contact studio and unrelated draft PRs remain unchanged.

The component is copied into `source/portfolio-copper/components/ui/old-masters-preloader.tsx`, retaining React, CSS transitions, SVG luminance masks, the engraved meander, wordmark fill and Canvas 2D light/dust. The demo's four embedded WebP files are extracted unchanged into `assets/intro-*.webp` (97,266 bytes total); original photo credits are preserved in source. No substitute animation library, renderer, generated image or dependency is introduced.

Integration uses the Poojana wordmark, the portfolio's copper/ivory palette and local assets. `fontHref={null}` avoids Google Fonts requests; Georgia and the existing Studio font provide the faces. The pasted source had literal line breaks inside three string delimiters; these were repaired to escaped newlines. The CTA prop also accepts null so the production instance contains no controls. `skippable={false}` and `cta={null}` implement the explicit request for no Skip control. The standalone example retains the final stage for component review; production closes automatically.

`preloader-boot.js` opens a native dialog before the React island mounts, with a readable fallback wordmark. A separate 8-second watchdog closes it if React or animation fails. Unavailable/slow images and fonts settle after bounded waits; the number describes this readiness set, not byte-download progress. Normal completion unmounts the component and cancels its loops. Hidden tabs, live motion changes and native dialog closure release the page. Deep links, back/forward restoration, reduced motion, forced colors and `?motion=off` bypass it. No-JavaScript leaves the dialog closed and ordinary page content available.

The old `.hero-shutters` markup, CSS and GSAP animation are removed. React hero text/typing and scroll scenes wait until the intro releases. Existing text roll provides the headline entrance without a second split-text animation. Native email, navigation, projects, ribbons and footer remain.

Checks completed locally:

- Strict TypeScript, production builds, JavaScript syntax and static quality gate pass (38 IDs, 33 references, 16 budgets).
- Six Node lifecycle tests cover missing-bundle deadline, idempotent release, bypass cases, native close, hidden/preference changes and failed `showModal`. CI runs them before reproducing bundles.
- Chromium: normal automatic completion recorded reason `animation` at 5,790 ms in the checked run; no loader buttons, horizontal overflow or remaining hero shutter elements. The hero returns with a readable complete headline.
- Standalone component visual review verifies the final three-figure stage, SVG masks, loaded images and wordmark. Production has a finite automatic transition instead of this review hold.
- A deliberately missing React-bundle fixture released the dialog at 8,007 ms, removed the scroll lock and retained seven native header links. These are observed functional timings, not a performance benchmark.
- An image-blocking CSP fixture still completed through the normal animation callback at 5,731 ms and removed the dialog/scroll lock. The injected CSP and deliberately missing script exist only in ignored QA fixtures.
- Phone/tablet/landscape frames at 390×844, 320×740, 768×1024 and 844×390 all completed automatically, removed the shutter layer and had equal client/scroll widths (375, 305, 753, 829 px). The no-JavaScript frame retained its hero with the dialog closed. Mobile navigation opened and followed the contact link after release.

The current portfolio bundle is 390,091 bytes JavaScript (123,004 gzip) and 30,566 bytes CSS (7,632 gzip). The JavaScript budget increases from 340 to 400 KiB for the requested supplied component; CSS stays under the existing 32 KiB budget. The standalone navbar outputs remain byte-for-byte unchanged. Asset version queries change for returning browsers. There are no dependency, security-header or account-permission changes. The introduction adds transfer and presentation time; no measured Core Web Vitals, physical-device smoothness or exhaustive accessibility conformance is claimed.
