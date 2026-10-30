# Character roll and continuous ribbons — 30 October 2026

Base: `723a73bafd8613cd7242212b98ec2186c35851d1` (PR #18). This is a focused refinement of the existing copper portfolio.

`source/portfolio-copper/components/ui/text-roll.tsx` adapts the paired 3D letter faces from ibelick/Motion Primitives Text Roll at commit `120f64f6ca60348e251f929e9c81f11ccbe45eda`. Each character has an outgoing face, incoming face and invisible size placeholder, with a single accessible text label. The welcome lines play on entry; welcome copy and the four selected CTAs can replay on hover, with keyboard focus supported on links. Animation is finite, cancels safely when hidden/off-screen, and respects the existing motion preference. Original static HTML copy remains available before React mounts or if JavaScript is absent.

The linked 21st.dev page was unavailable through retrieval; the corresponding original source was read through GitHub. The original uses Motion. This adaptation preserves its character-face choreography using the portfolio's existing WAAPI stack, without adding another animation runtime. MIT attribution is retained in source and the generated legal notice.

Toolkit ribbon pointer-enter/leave pause listeners are removed. Ribbons keep running under the cursor; off-screen, hidden-tab and reduced-motion behavior remains. This supersedes the hover-pause behavior recorded in `NAVIGATION-FOOTER-RELEASE.md`.

The updated script and stylesheet URLs include a release version query. Production assets have immutable year-long caching; changing their URLs ensures returning browsers fetch this edition. Existing image/font cache and security policies are preserved.

Verification uses strict TypeScript, reproducible builds, the existing asset/header quality gate and targeted Chromium checks for text entry/replay, keyboard focus, continuous ribbon motion during hover, responsive text layout and the static view. No dependency pins or security headers change. Physical-device and field performance measurements are outside this refinement.

Local checks passed: six enhanced targets and 104 character cells render; the welcome replay count advances from 1 to 2 on hover and the CTA plays on keyboard focus. The accessible headline remains intact. With the cursor inside the toolkit, its state stays `playing` and the track transform continues changing. Frames at 390×844, 320×740, 768×1024 and 844×390 have zero horizontal document overflow. The no-JavaScript frame keeps its original copy, and `?motion=off` keeps all six roll counts at zero. TypeScript, generated bundle comparison, syntax and the static quality gate pass; no app-origin console warnings/errors were observed in the checked preview.

Reference: https://motion-primitives.com/docs/text-roll and https://github.com/ibelick/motion-primitives/blob/120f64f6ca60348e251f929e9c81f11ccbe45eda/components/core/text-roll.tsx.
