# Contact section (React + Tailwind + TypeScript)

`components/ui/contact-with-globe.tsx` is the shadcn-style component (`components/ui/` is the path shadcn expects, which is why the files live there), with `button.tsx`, `lib/utils.ts` and `main.tsx`.

Build: `node scripts/build-contact.mjs` -> `assets/trace/contact.js` + `assets/trace/contact.css` (committed; the page loads them only when the section is near the viewport).

Differences from the original prompt, all because the site is static with a strict CSP and the build sandbox had no npm access:
- `motion/react`, `lucide-react`, `@radix-ui/react-slot` and `@radix-ui/react-separator` are small local shims in `shims/` with the same API for the parts used.
- The world map is `assets/trace/world-110.json` (public-domain GeoJSON), not a jsDelivr TopoJSON fetch, so `topojson-client` is not needed.
- Tailwind v4 is compiled with theme + utilities only (no preflight) so it cannot restyle the rest of the page.

In a normal project: `npx shadcn@latest init`, then `npm i d3 motion lucide-react topojson-client topojson-specification @radix-ui/react-separator @radix-ui/react-slot class-variance-authority`, and drop the original file in `components/ui/`.
