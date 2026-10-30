# Navigation and architectural footer — 30 October 2026

Base: `teldigi5-wq/poojana-portfolio` main `6f10695cda65c6e7b0ea246c858548da9c2a3e64`, released through PR #17. Existing draft PRs #6 and #10 are unrelated and remain untouched. This note supersedes the interaction descriptions in the preceding `CINEMATIC-RELEASE.md` while preserving it as a historical checkpoint.

## Changes

- The desktop liquid pill, mobile index and footer follow actual document order: Home, Depth, Work, About, Contact. The desktop pill is centered independently of brand/CTA widths. At 900px and below, a native full-screen dialog provides the index, contact and CV links. Native modality contains focus; Close/Escape restores the menu button and section navigation focuses the destination.
- The visible Motion and ribbon-pause controls are removed. OS reduced-motion and forced-color preferences still disable nonessential motion. `?motion=off` supplies a static view without introducing another on-page control. A stale preference stored by the previous control no longer overrides the OS.
- The supplied GSAP/ScrollTrigger choreography now drives the architectural background, wordmark, welcome copy and supplied portrait at 70/55/40/10 percent. Phones use smaller 18/15/7/4-percent travel, without a hero pin.
- Hero code repeatedly types three lines, holds and erases. Its GSAP timeline pauses outside the viewport and in hidden tabs; the accessible engineering summary stays static. Ribbon loops pause off-screen, when hidden or hovered.
- `components/ui/wild-hunt-footer.tsx` contains the supplied React/Canvas 2D/SVG footer, adapted through `src/footer.tsx`. It uses the existing architectural image, KAVEESH wordmark, copper/ivory palette, actual project/social/contact/CV links, an ordered-dither dissolve, bitmap letter resolution, SVG flourish, pointer reticle and click scan. It has text/canvas and no-JavaScript fallbacks and stops drawing when idle, hidden or off-screen. Mobile cell sizing and footer spacing keep the wordmark separate from links.
- Lenis shares the existing GSAP clock. Waking primes its first frame and includes a short idle grace period so a wheel batch cannot lose its initial animation frame. Touch remains native; owned timelines, event listeners, observers and ticker callbacks are cleaned up.

## Structure and dependencies

The project already supports React, TypeScript, Tailwind v4 and shadcn-compatible aliases. Reusable components belong in `source/portfolio-copper/components/ui/`; Tailwind lives in `styles/globals.css`, with `styles/cinematic.css` and `styles/liquid-glass-navbar.css` for these integrations. No setup migration or new dependency is needed. The maintained pinned `lenis` package replaces the old `@studio-freight/lenis` package name. No providers are required.

The page loads one combined React bundle and shares the self-hosted GSAP/ScrollTrigger runtime. The supplied footer adds approximately 11 KB gzip. The uncompressed combined-JS budget is explicitly raised from 300 to 340 KiB for this implementation; the current bundle is approximately 335 KB / 107 KB gzip. No new image, external script, analytics, account system, paid service or backend is added. Security headers are unchanged.

## Verification

- Strict TypeScript, production JavaScript syntax, whitespace and source builds pass. Root JS/CSS outputs are copied from the source build and are reproduced by the existing CI workflow. The static quality gate reports 36 IDs, 32 asset/link references and 11 budgets.
- Chromium desktop checks confirm the order, working wheel start, different scroll transforms for all four hero layers, completed footer raster/flourish, real footer links and idle renderer state. Code playback pauses when the hero is off-screen.
- The 390×844 mobile frame confirms menu opening, Close/Escape focus recovery and Work navigation with destination focus. Frames at 390×844, 320×740, 768×1024 and 844×390 have no horizontal document overflow and no pinned sections. The no-JavaScript frame retains native navigation, toolkit, project content and footer links.

Limits: browser-frame verification is not physical-device, actual-touch or cross-browser certification. OS preference emulation and real WebGL/GPU profiling are not available in this verification browser. Field Core Web Vitals and exhaustive WCAG conformance remain unmeasured. The static-view query exercises the same shared motion-off path, including the footer.

References: the user-supplied Osmo scroll example and Wild Hunt Footer source, GSAP ScrollTrigger documentation at https://gsap.com/docs/v3/Plugins/ScrollTrigger/ and the official Lenis repository at https://github.com/darkroomengineering/lenis.
