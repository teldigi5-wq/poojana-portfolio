# Inspectable policy demo and evidence clarity

Based on production commit `67648d65ab805b6f846ae1eb0940d659e8aeccc2`. This is a preview change.

## Visitor-facing changes

- BoundaryLab's one-rule example becomes a working local policy explorer: four synthetic identities, private/shared resources, read/write operations and two policies. A three-step trace explains sign-in, workspace and permission decisions, including checks skipped after a denial.
- Aetheris evidence is described in plain English and linked to its existing passing CI run. “Not yet production-ready” replaces the unexplained activation shorthand.
- Toolkit ribbons are replaced by the supplied two-row integration carousel, with 88 repository-backed technologies, local icons, search and category filters. Both rows loop continuously in opposite directions; hover does not pause them. See `TECH-STACK-INVENTORY.md`.
- The request-to-reliable-behavior statement has a larger desktop scale and tighter spacing. The portrait-led palette, intro, lanyard and signature footer remain intact.

## Scope and evidence

The browser evaluator is an educational model, not the BoundaryLab emulator, a scanner, or a backend authorization boundary. It uses no network calls, persistent storage or real identities. Unknown inputs deny by default. Its controls are enabled only after initialization; without JavaScript the page explicitly shows a static example.

The Aetheris caption was checked against the workflow and `UserOutboxConcurrentPostgresIT.java` at commit `1624e5af9bf76c868a9609b924f42902368ed054`, in [CI run 42329287377](https://github.com/teldigi5-wq/aetheris-platform/actions/runs/42329287377). That test asserts all 24 event IDs are claimed without duplicates and marked delivered by eight workers in disposable PostgreSQL. It is not a claim of exactly-once delivery under arbitrary failures.

## Validation

- TypeScript and production builds pass. The 3,611-byte policy bundle is independent of React/GSAP and adds no package dependency.
- 20 Node tests pass, including an explicit 32-case policy matrix, malformed inputs, trace ordering, loader regressions and fuzzy search.
- Asset budgets, local HTML references and nine generated-bundle checks pass. The optional toolkit is 49,587 bytes (15,840 gzip); the main cinematic bundle decreased from 400,409 to 395,922 bytes.
- Toolkit search (including project context), category filters and empty states work. Opposing tracks have identical repeated groups and infinite iterations. Static-motion mode has no carousel animation; the no-JavaScript disclosure exposes all 88 names.
- The Depth pin uses current document geometry with refresh priority; catalog height changes refresh ScrollTrigger. Direct toolkit loads and opening/closing the catalog no longer overlap the 3D section.
- Frozen dependency installation succeeds; the production dependency audit reports zero known advisories.
- Browser checks cover owner/teammate/outsider/guest decisions, native-select keyboard use, mobile menu open/Escape, static-motion mode and the no-JavaScript fallback.
- Desktop-browser iframe layouts checked at 360, 390, 768, 1440 and 2560 pixels: no horizontal page overflow. These are responsive checks, not real-phone performance measurements.
- Only one Depth heading was found in the live page; no duplicate was reproduced while scrolling. The existing scene is retained.

Lighthouse, field Core Web Vitals and physical-device performance were not measured. Real project recordings, a delivery-backed contact form and a new owned email address are separate work; none is fabricated by this release.
