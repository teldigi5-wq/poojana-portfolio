# Verification — initial edition, 29 October 2026

## Passed

- JavaScript syntax check: `node --check dist/app.js`.
- Static HTML integrity: unique IDs, existing fragment targets and local assets, explicit button types and external-link opener protection.
- Desktop Chrome preview at 1363 × 936: visual hero inspection, fonts and main image loaded; no horizontal document overflow.
- Responsive iframe viewports: 390 × 844, 768 × 1024, 320 × 740 and 844 × 390. All tested document widths fit their viewports after correction of a 320 px layout overflow.
- Narrow-screen contact composition visually inspected.
- All four project-story dialogs open with their matching content. Escape closes a dialog and restores focus to its opener.
- Boundary example: owner allows, another user denies, anonymous guest denies; correct reasons displayed. Also exercised on mobile.
- Mobile menu opens, disables background interaction, navigates to work, closes and restores background interaction.
- Animation toggle turns animation off and back on; saved preference is restored on subsequent page loads.
- Scroll-linked hero movement verified: image transform advanced from identity to scale 1.2324 while the hero remained pinned at top 0.
- Native approach disclosure opens.
- Portrait loads at 960 px native width.
- JavaScript-disabled iframe retains visible content, portrait slot, standard links and navigation. Dynamic controls are hidden.
- Email-copy fallback selects the address and gives an honest status when the HTTP preview clipboard API is unavailable.
- Only browser extension metadata errors appeared in the inspected browser logs; no app-origin errors observed.

## Limits

- Responsive frame checks are browser layout checks, not physical phone/tablet tests.
- Operating-system reduced-motion is implemented with a media query but was not toggled through OS emulation in this environment.
- Clipboard success on a secure production origin is not established by the HTTP-preview fallback test.
- No Core Web Vitals benchmark, production load test, exhaustive accessibility audit, or independent verification of project maturity claims was performed.
- External CV and project links are reused from the existing profile and portfolio source. Every external destination was not re-audited.
- The temporary responsive test harness was removed before publication.


## Copper edition — Vercel preview

- `node --check` passes for `dist/app.js` and `dist/motion.js`.
- Supplied portrait optimized to 227,478-byte desktop and 74,286-byte mobile WebP images; both retain transparency. The original PNG is retained outside `dist`.
- Desktop Chrome viewport 1363 × 936: portrait composition and conceptual 3D sculpture visually reviewed. Hero scroll advanced to scale 1.039 at scroll Y 421 while pinned at top 0.
- System scroll spread advanced from 0.05 to 0.681484. Assembled and exploded controls update the rig; exploded top plate reaches Z 125 px. Rotate control advanced the model by 45 degrees.
- Motion-off mode removes both pin spacers. Preference persisted across reload/navigation; mobile navigation and scene controls worked with motion off.
- All seven project-story dialogs opened with the correct matching titles. Escape closes the dialog and returns focus to the opener.
- Responsive iframe widths 390, 320, 768 and 844 px: document scroll widths matched client widths (375, 305, 753 and 829 px respectively, allowing for the scrollbar). Fixed initial heading overflow at the smallest sizes.
- Mobile menu opened, made the main content inert, navigated to the 3D section and closed. Mobile exploded-view control worked.
- A JavaScript-disabled frame retained the hero portrait, heading and ordinary navigation.
- App-origin console errors were not observed; the browser extension emitted metadata errors.
- System reduced-motion is enforced in code and CSS; the OS preference was not changed through device emulation. No physical-device, Web Vitals or exhaustive accessibility claim is made.
- Temporary responsive harness removed before upload. Production promotion is outside this preview task.

## Liquid-glass navbar — 30 October 2026

Passed:

- Strict TypeScript checking, including the reusable component and local browser fixture; syntax checks for the existing page scripts.
- Production esbuild and Tailwind build. Navbar output: 270,731 bytes JavaScript (86,445 bytes gzip) and 11,580 bytes CSS (3,295 bytes gzip). React and Lucide are bundled locally.
- Production dependency audit reported zero known advisories for the resolved production dependencies. This is not a comprehensive security audit.
- Static integrity: 32 unique HTML IDs, all local asset references and fragment targets exist. Production build removes `dist/__qa`.
- Desktop browser visual check: the warm glass navigation matches the copper hero; five section links and icons appear. Initial Home selection was visible, and clicking Work changed the active item to Work.
- In that browser, the component selected its CSS fallback (`data-gl="off"`). Idle rendering reported `data-animating="false"`; clicking Work restarted the animation. No app-origin error was observed in the inspected log; an extension metadata error was present.
- The vertex and fragment shaders compiled and linked successfully in an OpenGL ES context using Mesa 25.2.8 / llvmpipe. This checks GLSL compatibility; it does not establish browser WebGL playback or visual output.

Implemented but not fully verified in this revision:

- Mobile and tablet navbar layouts; native-link keyboard navigation; scroll tracking across every section; Motion toggle synchronization and live OS reduced-motion changes.
- Browser WebGL rendering, context loss/restoration and off-screen/hidden-document pausing. The browser-control connection ended before the remaining live checks could be completed. The reason the first browser selected the fallback was not established.
- The previous edition's responsive and motion checks above do not count as a full regression pass for this new navbar.

`node scripts/build-navbar-qa.mjs` prepares local browser fixtures for the remaining checks. These fixtures are retained in source but excluded from deployment. Sound is disabled in the portfolio. The existing production portfolio is not promoted or replaced.
