# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters hiring backend interns at engineering employers in Sri Lanka, named targets being IFS, WSO2 and Cisco Labs. They are judging whether Poojana Kaveesh, a BSc (Hons) Information Technology student at SLIIT, is credible for a backend internship. In practice they scan the work, check whether claims hold up (GitHub, CI runs, live apps), then open the CV or send an email.

## Product Purpose

A personal engineering portfolio that turns a backend-internship application into evidence a reviewer can check. Success means a reviewer at a target employer leaves trusting what they read, and moves on to the CV, GitHub or email.

## Positioning

Restrained, evidence-first and professional. Other student portfolios list skills and polish screenshots. This one shows small systems the visitor can operate in the browser (a simulated API with a token-bucket rate limit, an index-vs-scan query plan, an access decision model), and every project states its real maturity, what has been verified and where the limits are. Credibility comes from accuracy and restraint, not from spectacle.

## Operating Context

- Reviewers usually arrive from a CV, a LinkedIn profile or an application link, often on a laptop between other candidates, and sometimes on a phone.
- The usual path: the hero, then the Work section with its status and evidence, then outbound links to GitHub, CI runs, live apps and the CV PDFs (`assets/Poojana_Kaveesh_ATS_2026.pdf`, `assets/Poojana_Kaveesh_CV.pdf`).
- Contact is by email, GitHub (`teldigi5-wq`) and LinkedIn. There is no contact form or backend.

## Capabilities and Constraints

- The canonical surface is the Trace homepage (`index.html`, `trace.css`, `trace.js`). It is organized as the trace of a single request: Client → Gateway → Services → Data → Response.
- The site is static and served directly from the repo root on Vercel. All assets are self-hosted. `vercel.json` and `staticwebapp.config.json` keep a strict CSP and matching security headers. CI (`.github/workflows/portfolio-ci.yml`, `scripts/quality-gate.mjs`, `tests/`) validates syntax, references, accessibility markers, budgets and header parity.
- No new libraries. Use only the existing runtime (vanilla JS, plus the vendored GSAP/ScrollTrigger and React bundles that are already there).
- No 3D. A 3D Work/Lab layer was removed because it was too fancy and hard to read.
- No backend, analytics, accounts or paid APIs.
- Content must still work without JavaScript or motion. Reduced-motion and `?motion=off` must be respected.
- Legacy surfaces (`classic.html` and the older stylesheets such as `luxe.css`, `studio.css` and `stage*.css`) are not where new work goes.

## Brand Commitments

- Name: Poojana Kaveesh. Role line: backend engineer · SLIIT, open to engineering internships. Focus: backend, AI and security.
- Palette "Porcelain & Ink", as defined in `trace.css`, is binding and stays.
- Voice: plain, specific, first person, honest about limits. For example: "I build the systems behind the screen." and "Three projects. Honest status on each."

## Evidence on Hand

- **BoundaryLab:** local-first authorization verification. Pre-release prototype. Product overview at https://boundarylab.vercel.app/. The in-browser model on the site demonstrates the rules only; it does not validate the emulator or any live system.
- **Aetheris Platform:** backend services behind a single gateway (Java, Spring, PostgreSQL, Redis, RabbitMQ). Research stage, hardware validation pending. There is a CI-verified claim: 8 relay workers competed for 24 events and each event was claimed once. This proves that controlled test only, not exactly-once delivery, and the platform is not production-ready.
- **Wayfarer:** a public travel planning app with no live booking. Live app and source on GitHub.
- Portraits and headshots in `assets/images/` and `assets/trace/`, plus the two CV PDFs.
- Absent, and not to be fabricated: testimonials, employer endorsements, performance benchmarks, user counts, production deployments, Core Web Vitals or accessibility certification claims.

## Product Principles

1. **Evidence before adjectives.** Every claim links to something a reviewer can open, or it is labelled with its limit.
2. **Restraint is the signal.** Professional calm beats spectacle. Cut anything that slows a reviewer down or reads as showing off.
3. **Let people operate it.** Small working models stand in for skill lists, and each is clearly labelled as a teaching sketch with synthetic data.
4. **Honest maturity.** Status labels (prototype, research, public, no live booking) are never softened or upgraded.
5. **Quick route to action.** A reviewer should reach the CV, GitHub or email from anywhere without hunting.

## Accessibility & Inclusion

Accessibility is a firm requirement. Keyboard and screen-reader access, visible focus, readable minimum text sizes, 44px touch targets on touch devices, and support for reduced motion, reduced transparency and more contrast (already implemented) must all be preserved. Never claim formal conformance certification.
