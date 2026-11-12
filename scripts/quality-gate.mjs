import { existsSync, readFileSync, statSync } from "node:fs";
import { extname } from "node:path";

const failures = [];
const fail = message => failures.push(message);
const required = [
  "assets/integration-hero.js", "assets/integration-hero.css", "source/portfolio-copper/components/ui/integration-hero.tsx", "source/portfolio-copper/components/ui/button.tsx",
  "assets/boundary-demo.js", "boundary-demo.css", "source/portfolio-copper/lib/boundary-policy.ts", "source/portfolio-copper/src/boundary-demo.ts",
  "index.html", "styles.css", "luxe.css", "project-explorers.css", "art-direction.css", "design-tokens.css", "clarity.css", "app.js", "motion.js", "preloader-boot.js",
  "assets/liquid-navbar.js", "assets/liquid-navbar.css",
  "assets/portfolio-v2.js", "assets/portfolio-v2.css",
  "assets/portrait-lanyard.js", "assets/portrait-lanyard.css", "assets/poojana-lanyard-portrait.png", "lanyard.css",
  "source/portfolio-copper/components/ui/team-lanyard-rail.tsx",
  "source/portfolio-copper/components/portrait-lanyard.tsx",
  "assets/hero-portrait.webp", "assets/hero-portrait-mobile.webp",
  "assets/Poojana_Kaveesh_ATS_2026.pdf", "README.md", "vercel.json",
  "staticwebapp.config.json",
  "source/portfolio-copper/components/ui/liquid-glass-navbar.tsx",
  "source/portfolio-copper/components/ui/liquid-glass-shaders.ts",
  "source/portfolio-copper/components/ui/parallax-scrolling.tsx",
  "source/portfolio-copper/components/ui/project-explorers.tsx",
  "source/portfolio-copper/components/ui/wild-hunt-footer.tsx",
  "source/portfolio-copper/components/ui/text-roll.tsx",
  "source/portfolio-copper/components/ui/cinematic-contact.tsx",
  "source/portfolio-copper/components/ui/old-masters-preloader.tsx",
  "source/portfolio-copper/components/portfolio-preloader.tsx",
  "assets/intro-apollo.webp", "assets/intro-hercules.webp", "assets/intro-flowers.webp", "assets/intro-david.webp"
];
required.forEach(file => { if (!existsSync(file)) fail(`missing ${file}`); });

// Optional toolkit assets must be deployable without third-party icon hosts.
const toolkit = JSON.parse(readFileSync("source/portfolio-copper/lib/tech-stack.json", "utf8"));
const evidence = JSON.parse(readFileSync("scripts/tech-sources.json", "utf8"));
if (new Set(toolkit.map(tool => tool.id)).size !== toolkit.length) fail("duplicate toolkit IDs");
let iconBytes = 0;
for (const icon of new Set(toolkit.map(tool => tool.icon).filter(Boolean))) {
  if (!/^[a-z0-9]+$/.test(icon)) { fail(`invalid toolkit icon path: ${icon}`); continue; }
  const path = `assets/tech/${icon}.svg`;
  if (!existsSync(path)) { fail(`missing toolkit icon: ${path}`); continue; }
  const svg = readFileSync(path, "utf8");
  if (/<script|<foreignObject|\son\w+=|(?:href|src)\s*=/i.test(svg)) fail(`unexpected active SVG content: ${path}`);
  iconBytes += statSync(path).size;
}
if (iconBytes > 192 * 1024) fail("toolkit icons exceed aggregate 192 KiB budget");
for (const tool of toolkit) if (!evidence[tool.evidence] || !tool.project) fail(`missing toolkit evidence: ${tool.name}`);

const html = readFileSync("index.html", "utf8");
const styles = `${readFileSync("styles.css", "utf8")}\n${readFileSync("luxe.css", "utf8")}\n${readFileSync("assets/liquid-navbar.css", "utf8")}\n${readFileSync("assets/portfolio-v2.css", "utf8")}`;
const app = readFileSync("app.js", "utf8");
const motion = readFileSync("motion.js", "utf8");
const navbar = readFileSync("source/portfolio-copper/components/ui/liquid-glass-navbar.tsx", "utf8");
const shader = readFileSync("source/portfolio-copper/components/ui/liquid-glass-shaders.ts", "utf8");
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) fail(`duplicate IDs: ${duplicateIds.join(", ")}`);

for (const marker of [
  'class="skip-link"', 'name="viewport"', 'rel="canonical"', 'property="og:url"',
  'name="robots" content="index,follow', 'type="application/ld+json"', 'id="main"',
  'id="liquid-nav-root"', 'id="dimension"', 'id="work"', 'id="about"', 'id="contact"'
]) if (!html.includes(marker)) fail(`missing production/accessibility marker: ${marker}`);
if (/noindex|nofollow/i.test(html)) fail("production HTML must remain indexable");
if (!html.includes("https://poojana-portfolio.vercel.app/")) fail("missing production canonical URL");
if (!styles.includes("prefers-reduced-motion") || !navbar.includes("prefers-reduced-motion")) fail("missing reduced-motion fallback");
if (!navbar.includes("webglcontextlost") || !navbar.includes("IntersectionObserver") || !shader.includes("gl_FragColor")) fail("liquid navigation fallback or shader source missing");
if (!app.includes("showModal") || !motion.includes("ScrollTrigger")) fail("project dialogs or scroll storytelling missing");

for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
  if (!/rel="[^"]*noopener/.test(tag[0])) fail(`external link missing noopener: ${tag[0]}`);
}
const refs = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(match => match[1]);
for (const ref of refs) {
  if (/^(https?:|mailto:|tel:|\/\/)/.test(ref)) continue;
  const path = ref.split("?")[0];
  if (path && path !== "/" && !existsSync(path)) fail(`missing local asset: ${path}`);
}
for (const ref of [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1])) {
  if (!ids.includes(ref)) fail(`missing fragment target: #${ref}`);
}

const budgets = {
  // Optional toolkit catalog: shared React, local icons, no CDN dependency.
  "assets/integration-hero.js": 56 * 1024, "assets/integration-hero.css": 10 * 1024,
  "assets/boundary-demo.js": 8 * 1024, "boundary-demo.css": 6 * 1024,
  "index.html": 64 * 1024, "styles.css": 48 * 1024, "luxe.css": 48 * 1024,
  "app.js": 32 * 1024, "motion.js": 24 * 1024,
  "project-explorers.css": 8 * 1024, "art-direction.css": 12 * 1024, "design-tokens.css": 2 * 1024, "clarity.css": 14 * 1024,
  "assets/liquid-navbar.js": 300 * 1024, "assets/liquid-navbar.css": 24 * 1024,
  // Includes the supplied React/SVG/Canvas loader; shared React/GSAP. See PRELOADER-RELEASE.md.
  "assets/portfolio-v2.js": 400 * 1024, "preloader-boot.js": 4 * 1024,
  // Optional CSS 3D badge, sharing React. Existing critical budgets stay unchanged.
  "assets/portrait-lanyard.js": 36 * 1024, "assets/portrait-lanyard.css": 20 * 1024, "lanyard.css": 12 * 1024,
  "assets/poojana-lanyard-portrait.png": 260 * 1024,
  // CSS 3D contact materials and responsive/static fallbacks; see CONTACT-RELEASE.md.
  "assets/portfolio-v2.css": 32 * 1024,
  "assets/hero-portrait.webp": 300 * 1024, "assets/hero-portrait-mobile.webp": 120 * 1024,
  "assets/intro-apollo.webp": 40 * 1024, "assets/intro-hercules.webp": 24 * 1024,
  "assets/intro-flowers.webp": 20 * 1024, "assets/intro-david.webp": 30 * 1024
};
for (const [file, budget] of Object.entries(budgets)) if (statSync(file).size > budget) fail(`${file} exceeds ${budget} bytes`);
for (const file of required.filter(path => [".js", ".css", ".html", ".json", ".tsx", ".ts"].includes(extname(path)))) {
  if (existsSync(file) && statSync(file).size === 0) fail(`${file} is empty`);
}

const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
const azure = JSON.parse(readFileSync("staticwebapp.config.json", "utf8"));
const headers = vercel.headers.find(rule => rule.source === "/(.*)")?.headers ?? [];
const value = key => headers.find(header => header.key === key)?.value;
if (value("Content-Security-Policy") !== azure.globalHeaders["Content-Security-Policy"]) fail("CSP differs between hosts");
for (const name of ["Cross-Origin-Opener-Policy", "Permissions-Policy", "Referrer-Policy", "X-Content-Type-Options", "X-Frame-Options"]) {
  if (!value(name) || value(name) !== azure.globalHeaders[name]) fail(`${name} missing or inconsistent`);
}
if (/https:\/\/cdn\.|unsafe-eval/i.test(value("Content-Security-Policy") ?? "")) fail("CSP permits an unnecessary CDN or eval");

// Immersive v3 world stage: per-world asset and code budgets (see IMMERSIVE-V3-PLAN.md).
{
  const { readdirSync } = await import("node:fs");
  const { gzipSync } = await import("node:zlib");
  const worldsDir = "assets/worlds";
  if (existsSync(worldsDir)) {
    const models = readdirSync(worldsDir).filter(name => /\.(glb|webp|ktx2)$/.test(name));
    let total = 0;
    for (const name of models) {
      const bytes = statSync(`${worldsDir}/${name}`).size;
      total += bytes;
      if (bytes > 1.5 * 1024 * 1024) fail(`${worldsDir}/${name} exceeds the 1.5 MB per-world budget`);
    }
    if (total > 6 * 1024 * 1024) fail("world assets exceed the 6 MB total budget");
    const jsDir = `${worldsDir}/js`;
    if (existsSync(jsDir)) {
      const chunks = readdirSync(jsDir).filter(name => name.endsWith(".js"));
      const gz = name => gzipSync(readFileSync(`${jsDir}/${name}`)).length;
      const engine = chunks.filter(name => name === "stage.js" || name.startsWith("stage-")).reduce((sum, name) => sum + gz(name), 0);
      if (engine > 165 * 1024) fail(`world engine is ${engine} bytes gzip (budget 165 KiB)`);
      for (const name of chunks.filter(name => !name.startsWith("stage"))) if (gz(name) > 30 * 1024) fail(`${jsDir}/${name} exceeds the 30 KiB gzip per-world budget`);
      for (const name of chunks) if (/\beval\(|new Function\(/.test(readFileSync(`${jsDir}/${name}`, "utf8"))) fail(`${jsDir}/${name} uses eval`);
    }
  }
}

if (failures.length) {
  failures.forEach(message => console.error(`QUALITY GATE FAILED: ${message}`));
  process.exit(1);
}
console.log(`Portfolio quality gate passed: ${ids.length} IDs, ${refs.length} asset/link references, ${Object.keys(budgets).length} budgets.`);
