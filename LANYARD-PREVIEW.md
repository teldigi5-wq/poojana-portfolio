# Portrait lanyard preview — 7 November 2026

Base: production commit `04c4e642a84d714581a25705ebbf9ebec62545e8`.

## Design and behavior

- Preserve the original orange-lit hero portrait and its scroll layers. Place the new lanyard beside the About copy, replacing that section's static portrait.
- Adapt the user-supplied Team Lanyard Rail with React, TypeScript, Tailwind, CSS 3D and spring/pendulum motion. No new package, WebGL engine, provider or paid service is needed.
- Use a charcoal/evergreen badge, warm ivory text, copper trim, a larger rectangular portrait, woven strap and metallic hardware. This is a CSS material study, not a photographed physical product.
- Drag the badge, click or press Enter/Space to flip, and use Escape to return. The reverse links to the existing CV and primary GitHub account. Vertical touch scrolling stays native.
- Lazy-load the 35 KB component near About, reuse the existing React runtime, stop its animation when settled/off-screen/hidden, and honor reduced motion and `?motion=off`. Keep a static portrait and CV link if enhancement cannot load.
- Remove the old contact business card. Keep the invitation, email/copy control and internship status. Preserve the pixelated signature footer and original loading screen without a skip control.
- Tighten generic section copy and add inspectable project evidence without inventing metrics or claiming production readiness.

## Evidence provenance

- **BoundaryLab:** its repository README states that it is independent of Aetheris Platform. The three-identity ownership-rule example is a browser-local illustration; it does not execute a Firebase emulator. No passing test count or public security certification is claimed. The linked public overview is https://boundarylab.vercel.app/.
- **Aetheris:** public successful [run 42329287377](https://github.com/teldigi5-wq/aetheris-platform/actions/runs/42329287377), commit `1624e5af9bf76c868a9609b924f42902368ed054`, includes the eight-worker/24-outbox-row disposable PostgreSQL race and signed cross-JVM User/RabbitMQ/Audit proof. Its explicit **NO_GO** release restriction is retained. This is test evidence, not production activation.
- **Wayfarer:** the public [project](https://github.com/teldigi5-wq/wayfarer-world-travel) describes six deterministic local planning assistants. The linked [application](https://wayfarer-world-travel.vercel.app/) does not imply a live booking backend, authenticated AI provider or validated travel inventory.

## Verification

- TypeScript check and source production build pass.
- All seven existing preloader regression tests pass.
- Static quality gate: 43 IDs, 46 asset/link references and 23 budgets pass. Existing critical budgets are unchanged; new lanyard assets have separate limits.
- JavaScript syntax and Git whitespace checks pass. CI reproduces the new lanyard assets as well as the existing bundles byte for byte.
- Browser interaction checks cover mouse drag, Enter flip, Tab access to the CV, Escape focus restoration, phone badge flipping, mobile menu-to-contact navigation, and desktop/mobile contact layout.
- Responsive browser frames include 320 px and 390 px phones, tablet, short landscape, and a no-JavaScript fallback. The tested phone layouts have no horizontal document overflow.

These are desktop-browser layout and interaction checks. Physical Android/iOS testing, Lighthouse, production Core Web Vitals and comprehensive accessibility conformance are not measured here. No production promotion is included in this preview.
