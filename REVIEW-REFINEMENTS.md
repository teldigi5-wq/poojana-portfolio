# Portfolio clarity review — 6 November 2026

Preview branch: `preview/portfolio-clarity-20261106`.
Base: flagship materials preview, remote commit `7dc1fcacc0e40054c95129329e6201306e956d55`.
This work does not merge or promote a production release.

## Decisions

- Keep the portrait-led copper, ivory, charcoal and evergreen section identity. `design-tokens.css` defines named roles; the cool accent is limited to interactive focus. There is no new grain overlay.
- Replace the generic welcome with **“Backend systems. Built with intent.”** The supporting sentence names backend, applied AI and authorization work. The portrait and original loading screen are unchanged.
- Use readable 12px labels and 16px prose where practical, with larger controls and complete code lines. Small lettering on decorative 3D objects is not essential content; equivalent information is provided in ordinary text.
- Keep the existing scroll-spy, progress and smooth-scroll implementation. Disable the navbar's optional WebGL lens on this portfolio and retain the spring-driven CSS active indicator with a flat finish. The reusable component still supports WebGL.
- Add a native dialog command menu in `components/ui/command-palette.tsx`, without a new dependency. Search is local. Links remain ordinary links; Escape closes, arrow keys navigate results, and focus returns to the opener. Another open project/intro modal cannot be covered by the command menu.
- Keep every section navigable without the command menu. The mobile menu gains a quick-access entry and an additional bottom close control. No-JS navigation remains visible.
- Make the system model explanatory: select Experience, Trust or Foundation to inspect its responsibility. Mouse drag has short, bounded inertia; touch scrolling is untouched. The Rotate button supplies a keyboard/touch alternative. Reduced motion removes inertia.
- Add a restrained word-color reveal and bounded ribbon acceleration (maximum 1.8×). Ribbons do not pause on hover. Motion is canceled or paused when appropriate, and respects the existing OS/static-mode controls.
- Add three project fact rows with scope, focus, maturity and review links. These are implementation summaries, not measured outcomes. Keep the working BoundaryLab example, Aetheris request explorer and Wayfarer chapters.
- Clarify the contact invitation and current focus; keep the 3D card and signature footer. Contact remains an honest email action and copy button. A form must not claim delivery without a configured service.

## Verification

Run from the repository root:

```sh
cd source/portfolio-copper
npm run check
npm run build
cd ../..
node scripts/quality-gate.mjs
node --test tests/preloader-boot.test.mjs
node --check app.js
node --check motion.js
git diff --check
```

Rebuilt assets must be copied from `source/portfolio-copper/dist/assets/` to root `assets/`. Existing bundle budgets remain in place; the two new CSS files have separate 2KB/14KB limits. Security headers and CSP are unchanged.

Browser regression checks cover command search, empty results, email-copy feedback, keyboard selection, project anchor scrolling, Escape/focus return, mobile-menu handoff, layer selection, mouse drag, static navigation and no-JS content. Responsive checks use browser viewports/iframes, not physical-device certification.

## Evidence limits

- Lighthouse, field Core Web Vitals, sustained frame rate, thermal behavior and real Android-device performance have **not** been measured by this pass. No numerical rating is published as a result.
- No invented test counts, performance gains, live-backend results or testimonials are added. The model is CSS 3D geometry, not a photorealistic asset or PBR render.
- New screenshots from the live project products and independently reproducible outcome metrics still need to be collected and tied to exact project releases. Existing visuals and demonstrations retain their illustrative labels. Project links provide the next route to evidence.
- The portrait was supplied by the owner; its texture and lighting have not been modified.
- Full accessibility conformance requires a separate audit, including assistive technology and real-device testing.
