# Welcome edition — 30 October 2026

Base: `teldigi5-wq/poojana-portfolio` main `15b3f57be7853d6ec325e837429f4cf6d428f769` (PR #16). All local baseline files were checked against the corresponding Git blob SHAs before modification. Existing draft PRs #6 and #10 are separate work.

## Result

- The supplied portrait anchors warm black `#100e0d`, ivory `#f3eddf`, copper `#dcad7e` and muted sage. Existing self-hosted Studio/Nimbus Sans and Georgia pair contemporary sans with an editorial italic serif.
- The hero reads “Welcome to my portfolio.” Its finite shutter, masked type and one-pass code reveal complete without an entry gate. Keyboard Tab completes the entrance immediately.
- Two opposing toolkit ribbons list React, Next.js, TypeScript, Tailwind CSS, GSAP, Java, Spring Boot, Python, FastAPI, PostgreSQL, Firebase and Docker as tools used across different projects. These are not claimed to be all used by this portfolio.
- BoundaryLab, Aetheris and Wayfarer gain inline question/implementation/evidence timelines. Their existing project dialogs and qualifications remain.
- FinalForge, Averis, Sentinel and FloodGuard use a horizontal gallery. Desktop pinning is limited to actual content travel; phones, tablets, short screens and motion-off mode retain native horizontal scrolling.
- Hero and travel-image parallax have been removed. Existing CSS 3D and liquid-navigation WebGL remain.

## Technical choices

React/TypeScript/Tailwind integrate the reusable component at `source/portfolio-copper/components/ui/parallax-scrolling.tsx`. GSAP 3.13.0 and ScrollTrigger share the self-hosted runtime already used by the page. Lenis 1.3.27 is pinned and self-hosted in the combined bundle; WAAPI handles ribbon and link playback. The production page loads one copy of React. A migration to Next.js, Astro, Webflow or another 3D engine would add build/runtime surface without improving this static portfolio's current behavior.

GSAP context/matchMedia owns each scene. Cleanup removes only owned scenes, observers, listeners, WAAPI animations and the Lenis ticker. Reduced motion or the page control destroys Lenis and removes pin spacing. Disabling motion inside the active gallery preserves its viewport position. Ribbons pause outside the viewport and when the tab is hidden; visitors can pause them explicitly.

Static HTML contains the hero and project facts. When JavaScript is unavailable, native links, inline timelines, horizontal scrolling, CV and contact links remain. No third-party demo imagery, analytics, paid API or new backend is introduced.

## Research

The user's crossed-ribbon image guided composition, adapted to copper and sage. Source references consulted:

- Webflow card-stack collection: https://webflow.com/made-in-webflow/card-stack — interaction references, not a numeric quality rating of this portfolio.
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ — bounded scrub/pin scenes and responsive invalidation.
- GSAP matchMedia: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ — breakpoint and reduced-motion cleanup.
- Lenis official repository and showcase: https://github.com/darkroomengineering/lenis and https://lenis.dev/showcase?filters=scrollytelling — native-scroll integration and scene synchronization.
- Web Animations API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API — playback control and cancellation.
- Awwwards presentation: https://assets.awwwards.com/assets/files/live-presentation.pdf — typography, color, navigation and scroll-storytelling considerations. Specific award score pages were unavailable through retrieval; no unverified ratings are asserted.

## Verification checkpoint

Completed locally in the browser and source toolchain:

- Strict TypeScript, syntax and static integrity checks passed. Quality gate: 35 IDs, 30 references and 11 asset budgets.
- Both standalone navbar and combined experience assets were rebuilt. Root outputs match source outputs byte-for-byte. The combined JS is approximately 303 KB / 96 KB gzip; it replaces the standalone navbar script on the page.
- Production dependency audit reported 0 known advisories across the resolved runtime dependencies. This is an advisory lookup, not a security certification.
- Desktop welcome hero, completed typing, hidden shutters, Work navigation and project dialogs rendered without app-origin console errors.
- Pinned gallery advanced to one-third of its scroll travel. Disabling motion retained its top at approximately 80 px, removed all pin spacers and destroyed Lenis. Re-enabling restored scene behavior.
- Ribbon pause/resume changed its pressed state and actual transforms; off-screen playback pauses.
- Responsive browser frames: 390×844, 320×740, 768×1024 and 844×390. No horizontal document overflow; galleries remained natively scrollable and unpinned at these widths. Phone Next control advanced the gallery by 304 px.
- A sandboxed no-JavaScript frame kept welcome text, code, project timelines, native navigation and the horizontal gallery; the fallback toolkit remained readable.

Limits: these are Chromium browser-frame and code checks, not physical-device or cross-browser certification. OS preference emulation was unavailable; the explicit Motion-off pathway was exercised. Browser WebGL was unavailable, so the established CSS liquid-nav fallback was used. Field Core Web Vitals, real touch/GPU profiling, comprehensive WCAG conformance and external product runtime claims remain unmeasured.
