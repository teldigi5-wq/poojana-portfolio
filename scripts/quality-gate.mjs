import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const fail = (message) => {
  console.error(`QUALITY GATE FAILED: ${message}`);
  process.exitCode = 1;
};

const required = [
  "index.html",
  "cinematic.css",
  "cinematic.js",
  "styles.css",
  "main.js",
  "stage3.css",
  "stage4.css",
  "stage6.css",
  "stage6.js",
  "assets/vendor/gsap.min.js",
  "assets/vendor/ScrollTrigger.min.js",
  "cursor-halo.js",
  "staticwebapp.config.json"
];

required.forEach((file) => {
  if (!existsSync(file)) fail(`missing ${file}`);
});

const html = readFileSync("index.html", "utf8");
const scriptSources = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(match => match[1].split('?')[0]);
if (new Set(scriptSources).size !== scriptSources.length) fail('duplicate script imports');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length) fail(`duplicate IDs: ${[...new Set(duplicates)].join(", ")}`);

const requiredMarkup = [
  'class="skip-link"',
  'name="viewport"',
  'rel="canonical"',
  'property="og:url"',
  'id="main"',
  'prefers-reduced-motion'
];
requiredMarkup.forEach((token) => {
  const source = token === "prefers-reduced-motion" ? `${readFileSync("styles.css", "utf8")} ${readFileSync("main.js", "utf8")}` : html;
  if (!source.includes(token)) fail(`missing accessibility/performance marker: ${token}`);
});

for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
  if (!/rel="[^"]*noopener/.test(tag[0])) fail(`external link missing noopener: ${tag[0]}`);
}

const budget = {
  "index.html": 64 * 1024,
  "styles.css": 64 * 1024,
  "main.js": 64 * 1024,
  "cinematic.css": 32 * 1024,
  "cinematic.js": 32 * 1024,
  "stage4.css": 8 * 1024,
  "stage6.css": 24 * 1024,
  "stage6.js": 8 * 1024
};
Object.entries(budget).forEach(([file, bytes]) => {
  const size = statSync(file).size;
  if (size > bytes) fail(`${file} is ${size} bytes; budget is ${bytes}`);
});

const videoDir = "assets/video";
if (existsSync(videoDir)) {
  readdirSync(videoDir).forEach((name) => {
    if (![".mp4", ".webm"].includes(extname(name).toLowerCase())) return;
    const size = statSync(join(videoDir, name)).size;
    if (size > 3 * 1024 * 1024) fail(`${name} exceeds the 3 MB video budget`);
  });
}

JSON.parse(readFileSync("staticwebapp.config.json", "utf8"));
JSON.parse(readFileSync('vercel.json', 'utf8'));
if (!html.includes('https://poojana-portfolio.vercel.app/')) fail('missing production canonical');
if (/azurestaticapps|data-src=/.test(html)) fail('stale canonical or absent video request');
for (const id of ['aetheris', 'averis', 'finalforge', 'floodguard']) {
  const article = html.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?</article>`))?.[0];
  if (!article?.includes('case-study')) fail(`missing detailed case study: ${id}`);
}
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const ref = match[1];
  if (/^(https?:|mailto:|tel:|\/\/)/.test(ref)) continue;
  const path = ref.split('?')[0];
  if (!existsSync(path)) fail(`missing local asset: ${path}`);
}
const venueStart=html.indexOf('<section class="venue-showcase shell" id="lounge-concept"');
const venueEnd=html.indexOf('</section>',venueStart);
const venue=venueStart>=0&&venueEnd>venueStart?html.slice(venueStart,venueEnd):'';
if(!venue.includes('Independent, non-official design prototype')||
   !venue.includes('https://999-lounge-wellawaya.vercel.app/')||
   !venue.toLowerCase().includes('email draft only')||
   /<img\b|github\.com\/teldigi5-wq\/999-lounge-wellawaya/i.test(venue)) {
  fail('Restaurant portfolio entry must be accurately labeled, media-free and link to the live concept instead of the private repository');
}
const caseCSS = readFileSync('lounge-case.css','utf8');
const caseMotion = readFileSync('lounge-case-motion.js','utf8');
if (!html.includes('lounge-case.css?v=2') || !html.includes('lounge-case-motion.js?v=2') ||
    !caseCSS.includes('var(--s6-blue)') || /#d0b08a|#c8ac8c/i.test(caseCSS) ||
    !caseMotion.includes('ScrollTrigger') || !caseMotion.includes('prefers-reduced-motion') ||
    !caseMotion.includes('saveData') || !caseMotion.includes('once:true')) {
  fail('Restaurant case must use matching blue tokens, local GSAP, finite and accessible motion');
}
if (!process.exitCode) console.log("Portfolio quality gate passed.");
