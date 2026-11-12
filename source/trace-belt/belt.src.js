/* Crew belt: a Three.js lanyard scene in the spirit of a hanging name-tag rail.
   - cards are rigid bodies hanging from trolleys on a rail by a multi-point strap (PBD rope + curved ribbon mesh)
   - drag with the pointer (raycast + spring), cards collide (SAT), scroll nudges them
   - card art is drawn to canvas textures at runtime from the portrait image
   - progressive: CSS swaying placeholder first, WebGL on top, static frame for reduced motion
   Build: see source/trace-belt/README.md */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, Group, Shape, ExtrudeGeometry, PlaneGeometry, BufferGeometry,
  BufferAttribute, MeshBasicMaterial, CanvasTexture, Raycaster, Vector2, Vector3, CatmullRomCurve3,
  SRGBColorSpace, AdditiveBlending, RepeatWrapping, DoubleSide
} from 'three';

const TAGS = [
  { id: 'me', kind: 'id', name: ['Poojana', 'Kaveesh'], role: 'BACKEND · AI · SECURITY', sub: 'SLIIT · IT UNDERGRADUATE', c: ['#2b4bff', '#0fa37f'], label: 'Poojana Kaveesh, backend engineer' },
];
const CW = 1, CH = 1.5, BAND_W = 0.13, BAND_L = 0.82, SEG = BAND_L / 3, G = 9.5;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* ---------- textures ---------- */
const SANS = '"Inter", "SF Pro Display", -apple-system, "Segoe UI", system-ui, sans-serif';
const MONO = '"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace';
function arcs(ctx, W, H, c, seed, ring2 = true) {
  const g = ctx.createLinearGradient(0, H * 0.1, W, H * 0.7); g.addColorStop(0, c[0]); g.addColorStop(1, c[1]);
  ctx.save(); ctx.strokeStyle = g; ctx.lineCap = 'butt';
  const cx = ring2 ? W * (0.86 - seed * 0.1) : W * 1.04, cy = ring2 ? H * 0.3 : H * 0.17, R = ring2 ? W * 0.5 : W * 0.36;
  ctx.lineWidth = ring2 ? W * 0.2 : W * 0.15; ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI * 0.55, Math.PI * 1.55); ctx.stroke();
  if (!ring2) { ctx.restore(); return; }
  ctx.lineWidth = W * 0.09; ctx.globalAlpha = 0.85; ctx.beginPath(); ctx.arc(W * (0.86 - seed * 0.1), H * 0.3, W * 0.78, Math.PI * 0.62, Math.PI * 1.38); ctx.stroke();
  ctx.restore();
}
function drawTag(t, img, i) {
  const W = 720, H = 1080, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const x = cv.getContext('2d');
  const bg = x.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#111729'); bg.addColorStop(1, '#090d1a'); x.fillStyle = bg; x.fillRect(0, 0, W, H);
  arcs(x, W, H, t.c, i * 0.4, t.kind !== 'id');
  const vg = x.createRadialGradient(W * 0.5, H * 1.05, 20, W * 0.5, H * 0.9, W * 0.9); vg.addColorStop(0, t.c[0] + '55'); vg.addColorStop(1, 'transparent'); x.fillStyle = vg; x.fillRect(0, 0, W, H);
  x.fillStyle = '#fff'; x.textBaseline = 'alphabetic';
  if (t.kind === 'id') {
    const fade = x.createLinearGradient(0, H * 0.42, 0, H * 0.9); fade.addColorStop(0, 'rgba(9,13,26,0)'); fade.addColorStop(1, 'rgba(9,13,26,.96)'); x.fillStyle = fade; x.fillRect(0, 0, W, H); x.fillStyle = '#fff';
    if (img) {   // portrait with a soft top/side fade so the arcs behind it stay visible
      const ar = img.naturalWidth / img.naturalHeight, w = W * 0.98, h = w / ar, oc = document.createElement('canvas'); oc.width = W; oc.height = H; const o = oc.getContext('2d');
      o.drawImage(img, (W - w) / 2, H - h, w, h); o.globalCompositeOperation = 'destination-in';
      const m1 = o.createLinearGradient(0, H - h, 0, H - h + h * 0.42); m1.addColorStop(0, 'rgba(0,0,0,0)'); m1.addColorStop(1, 'rgba(0,0,0,1)'); o.fillStyle = m1; o.fillRect(0, 0, W, H);
      const m2 = o.createLinearGradient(0, 0, W, 0); m2.addColorStop(0, 'rgba(0,0,0,0)'); m2.addColorStop(.12, 'rgba(0,0,0,1)'); m2.addColorStop(.88, 'rgba(0,0,0,1)'); m2.addColorStop(1, 'rgba(0,0,0,0)'); o.fillRect(0, 0, W, H);
      x.drawImage(oc, 0, 0);
    }
    x.font = `700 92px ${SANS}`; x.fillText(t.name[0], 44, 130); x.fillText(t.name[1], 44, 224);
    x.font = `500 24px ${MONO}`; x.fillStyle = '#9fb0ff'; x.fillText(t.role, 46, 274);
    x.fillStyle = '#8a95b3'; x.font = `400 21px ${MONO}`; x.fillText(t.sub, 46, 312);
    x.fillStyle = 'rgba(8,12,24,.78)'; roundRect(x, 36, H - 86, 316, 54, 27); x.fill(); x.strokeStyle = 'rgba(124,240,200,.45)'; x.lineWidth = 2; x.stroke();
    x.fillStyle = '#7cf0c8'; x.beginPath(); x.arc(66, H - 59, 7, 0, 7); x.fill(); x.fillStyle = '#d8fff1'; x.font = `500 22px ${MONO}`; x.fillText('Open to internships', 86, H - 51);
  } else {
    x.font = `700 ${t.name.length > 9 ? 84 : 100}px ${SANS}`; x.fillText(t.name, 44, 150);
    x.fillStyle = 'rgba(8,12,24,.7)'; x.strokeStyle = t.c[1]; x.lineWidth = 2; roundRect(x, 44, 190, 52 + t.status.length * 15, 50, 25); x.fill(); x.stroke();
    x.fillStyle = '#fff'; x.font = `500 24px ${MONO}`; x.fillText(t.status, 70, 224);
    x.fillStyle = '#c9d1e6'; x.font = `500 38px ${SANS}`; t.line.forEach((l, k) => x.fillText(l, 46, H - 190 + k * 48));
    x.fillStyle = t.c[1]; x.font = `500 24px ${MONO}`; x.fillText('tap to see the work →', 46, H - 70);
  }
  x.fillStyle = 'rgba(255,255,255,.88)'; x.font = `800 40px ${SANS}`; x.fillText('pk.', W - 104, H - 44);
  x.strokeStyle = 'rgba(160,185,255,.25)'; x.lineWidth = 3; roundRect(x, 1.5, 1.5, W - 3, H - 3, 44); x.stroke();
  return cv;
}
function roundRect(x, a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }
function bandCanvas() {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 640; const x = cv.getContext('2d');
  const g = x.createLinearGradient(0, 0, 128, 0); g.addColorStop(0, '#e2dccb'); g.addColorStop(.5, '#f7f3e8'); g.addColorStop(1, '#dcd5c3'); x.fillStyle = g; x.fillRect(0, 0, 128, 640);
  x.fillStyle = 'rgba(14,17,22,.78)'; x.font = `800 27px ${SANS}`; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.save(); x.translate(64, 320); x.rotate(Math.PI / 2); x.letterSpacing = '5px'; x.fillText('POOJANA KAVEESH', 0, 0); x.restore();
  x.strokeStyle = 'rgba(14,17,22,.25)'; x.lineWidth = 3; x.strokeRect(10, -4, 108, 648);
  return cv;
}
function sheenCanvas() {
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 256; const x = cv.getContext('2d');
  const g = x.createLinearGradient(0, 0, 256, 256); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(.42, 'rgba(255,255,255,0)'); g.addColorStop(.5, 'rgba(255,255,255,.9)'); g.addColorStop(.58, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256); return cv;
}

/* ---------- geometry helpers ---------- */
function roundedShape(w, h, r) {
  const s = new Shape(), x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s;
}
function cardGeometry() {
  const g = new ExtrudeGeometry(roundedShape(CW, CH, 0.06), { depth: 0.018, bevelEnabled: false, curveSegments: 8 });
  g.translate(0, 0, -0.009); return g;
}
const rect = (w, h) => new PlaneGeometry(w, h);

/* ---------- main ---------- */
export async function mountBelt(root, opts = {}) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stage = root.querySelector('.belt-stage'); if (!stage) return null;
  const portrait = await new Promise(res => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = opts.portrait; });
  try { await document.fonts.ready; } catch (_) {}
  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return fallback(root, stage, portrait); }
  if (!renderer.getContext()) return fallback(root, stage, portrait);
  renderer.setClearColor(0x000000, 0); renderer.outputColorSpace = SRGBColorSpace;
  const canvas = renderer.domElement; canvas.className = 'belt-canvas'; canvas.setAttribute('aria-hidden', 'true'); stage.appendChild(canvas);

  const scene = new Scene(), camera = new PerspectiveCamera(20, 1, 0.1, 100), ray = new Raycaster(), ndc = new Vector2();
  const bandTex = new CanvasTexture(bandCanvas()); bandTex.colorSpace = SRGBColorSpace; bandTex.wrapT = RepeatWrapping; bandTex.anisotropy = 4;
  const sheenTex = new CanvasTexture(sheenCanvas());
  const tagTex = TAGS.map((t, i) => { const tx = new CanvasTexture(drawTag(t, portrait, i)); tx.colorSpace = SRGBColorSpace; tx.anisotropy = 8; return tx; });
  const cardG = cardGeometry(), clipG = rect(0.2, 0.15), trolleyG = rect(0.26, 0.1), railG = rect(1, 0.014);
  const edgeM = new MeshBasicMaterial({ color: 0x1b2340, depthTest: false, depthWrite: false });
  const cream = new MeshBasicMaterial({ color: 0xf1ecdd, depthTest: false, depthWrite: false });
  const railM = new MeshBasicMaterial({ color: 0xbac4e4, depthTest: false, depthWrite: false });
  const rail = new Mesh(railG, railM); rail.renderOrder = -1; scene.add(rail);

  let railYw = 0, rigs = [], W = 0, H = 0, U = 200, visible = true, raf = 0, last = 0, running = false, hold = null, hover = null, tick = 0, dead = false;
  const pointer = new Vector3();

  function build() {
    rigs.forEach(r => { scene.remove(r.band, r.group, r.trolley); r.band.geometry.dispose(); });
    rigs = [];
    const n = 1;
    U = clamp(Math.min(W / 1.5, H / 3.15), 130, 300);
    const Hw = H / U, Ww = W / U, railY = Hw / 2 - 0.42; railYw = railY; const pitch = Math.min(1.34, Ww / n);
    camera.aspect = W / H; camera.fov = 20; const dist = (Hw / 2) / Math.tan(Math.PI * 20 / 360); camera.position.set(0, 0, dist); camera.far = dist * 3; camera.updateProjectionMatrix(); camera.lookAt(0, 0, 0);
    rail.scale.set(Ww + 0.4, 1, 1); rail.position.set(0, railY, -0.02);
    for (let i = 0; i < n; i++) {
      const ax = (i - (n - 1) / 2) * pitch, ay = railY, t = TAGS[i];
      const mat = new MeshBasicMaterial({ map: tagTex[i], depthTest: false, depthWrite: false });
      mat.map.repeat.set(1 / CW, 1 / CH); mat.map.offset.set(0.5, 0.5);
      const card = new Mesh(cardG, [mat, edgeM]); card.renderOrder = 5 * i + 2;
      const outline = new Mesh(cardG, new MeshBasicMaterial({ color: 0x2c3a66, depthTest: false, depthWrite: false })); outline.scale.set(1.012, 1.008, 1); outline.position.z = -0.012; outline.renderOrder = 5 * i + 1;
      const sheen = new Mesh(rect(CW, CH), new MeshBasicMaterial({ map: sheenTex.clone(), transparent: true, opacity: 0.5, blending: AdditiveBlending, depthTest: false, depthWrite: false })); sheen.material.map.needsUpdate = true; sheen.position.z = 0.012; sheen.renderOrder = 5 * i + 3;
      const clip = new Mesh(clipG, cream); clip.position.set(0, CH / 2 + 0.01, 0.02); clip.renderOrder = 5 * i + 4;
      const group = new Group(); group.add(outline, card, sheen, clip); scene.add(group);
      const trolley = new Mesh(trolleyG, cream); trolley.position.set(ax, ay, 0); trolley.renderOrder = 5 * i + 5; scene.add(trolley);
      const bg = new BufferGeometry(), N = 25;
      bg.setAttribute('position', new BufferAttribute(new Float32Array(N * 6), 3)); bg.setAttribute('uv', new BufferAttribute(new Float32Array(N * 4), 2));
      const idx = []; for (let k = 0; k < N - 1; k++) { const a = 2 * k; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } bg.setIndex(idx);
      const band = new Mesh(bg, new MeshBasicMaterial({ map: bandTex, side: DoubleSide, depthTest: false, depthWrite: false })); band.frustumCulled = false; band.renderOrder = 5 * i; scene.add(band);
      const hh = CH / 2, body = { x: ax, y: ay - BAND_L - 0.05 - hh, a: 0, vx: (i % 2 ? 1 : -1) * (reduce ? 0 : 1.4 + i * 0.25), vy: 0, w: (i % 2 ? -1 : 1) * (reduce ? 0 : 1.1), turn: 0 };
      const p = [0, 1].map(k => ({ x: ax, y: ay - SEG * (k + 1), px: ax, py: ay - SEG * (k + 1) }));
      rigs.push({ i, tag: t, ax, ay, body, p, group, card, clip, band, trolley, curve: new CatmullRomCurve3([new Vector3(), new Vector3(), new Vector3(), new Vector3()], false, 'chordal'), N });
    }
    if (reduce) { for (let k = 0; k < 40; k++) physics(1 / 60); rigs.forEach(r => { r.body.vx = r.body.vy = r.body.w = 0; }); }
    sync(); renderer.render(scene, camera);
  }

  /* ---------- physics ---------- */
  const attach = r => { const b = r.body, hh = CH / 2; return { rx: -Math.sin(b.a) * hh, ry: Math.cos(b.a) * hh }; };
  const MI = 0.36;
  function physics(frameDt) {
    const SUB = 10, dt = frameDt / SUB;
    for (let s = 0; s < SUB; s++) {
      for (const r of rigs) {
        const b = r.body; let fx = 0, fy = -G, tq = 0;
        if (hold && hold.rig === r) {
          const c = Math.cos(b.a), sn = Math.sin(b.a), px = b.x + c * hold.lx - sn * hold.ly, py = b.y + sn * hold.lx + c * hold.ly;
          const rx = px - b.x, ry = py - b.y, vpx = b.vx - b.w * ry, vpy = b.vy + b.w * rx;
          let Fx = 90 * (pointer.x - px) - 14 * vpx, Fy = 90 * (pointer.y - py) - 14 * vpy; const m = Math.hypot(Fx, Fy); if (m > 60) { Fx *= 60 / m; Fy *= 60 / m; }
          fx += Fx; fy += Fy; tq += rx * Fy - ry * Fx;
        }
        b.vx += fx * dt; b.vy += fy * dt; b.w += (tq / MI) * dt;
        const dm = Math.exp(-0.32 * dt), da = Math.exp(-1.1 * dt); b.vx *= dm; b.vy *= dm; b.w *= da;
        r._x0 = b.x; r._y0 = b.y; r._a0 = b.a; b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.w * dt;
        for (const q of r.p) { const vx = (q.x - q.px) * 0.985, vy = (q.y - q.py) * 0.985; q.px = q.x; q.py = q.y; q.x += vx; q.y += vy - G * 0.35 * dt * dt; }
      }
      for (let it = 0; it < 5; it++) for (const r of rigs) {
        const b = r.body, [p1, p2] = r.p;
        link(r.ax, r.ay, 0, p1, null, SEG);
        link(null, null, 0, p1, p2, SEG);
        const at = attach(r), cx = b.x + at.rx, cy = b.y + at.ry; let dx = cx - p2.x, dy = cy - p2.y; const d = Math.hypot(dx, dy) || 1e-6; dx /= d; dy /= d;
        if (cy > r.ay - 0.14) { const e = cy - (r.ay - 0.14); b.y -= e; if (b.vy > 0) b.vy *= 0.5; }
        const lo = SEG * 0.9, err = d > SEG ? d - SEG : d < lo ? d - lo : 0;
        if (err) { const rxn = at.rx * dy - at.ry * dx, wb = 1 / 1 + rxn * rxn / MI, wp = 1 / 0.08, lam = err / (wb + wp); p2.x += dx * lam * wp; p2.y += dy * lam * wp; b.x -= dx * lam; b.y -= dy * lam; b.a -= rxn * lam / MI; }
      }
      for (const r of rigs) { const b = r.body; b.vx += (b.x - r._x0) / dt - b.vx; b.vy += (b.y - r._y0) / dt - b.vy; b.w += (b.a - r._a0) / dt - b.w; b.vx = clamp(b.vx, -9, 9); b.vy = clamp(b.vy, -9, 9); b.w = clamp(b.w, -9, 9); b.a = clamp(b.a, -1.5, 1.5); }
      collide();
    }
    for (const r of rigs) { const b = r.body; const t = clamp(b.vx * 0.1 + 0.05 * b.w, -0.34, 0.34); b.turn += (t - b.turn) * Math.min(1, 5 * frameDt); }
  }
  function link(ax, ay, _, p, q, len) {   // keep |p - anchor/q| within [0.9 len, len]
    const fixed = q === null; const x2 = fixed ? ax : q.x, y2 = fixed ? ay : q.y; let dx = p.x - x2, dy = p.y - y2; const d = Math.hypot(dx, dy) || 1e-6;
    const err = d > len ? d - len : d < len * 0.9 ? d - len * 0.9 : 0; if (!err) return; dx /= d; dy /= d;
    if (fixed) { p.x -= dx * err; p.y -= dy * err; } else { p.x -= dx * err * 0.5; p.y -= dy * err * 0.5; q.x += dx * err * 0.5; q.y += dy * err * 0.5; }
  }
  function corners(b) { const c = Math.cos(b.a), s = Math.sin(b.a); return [[c, s], [-s, c]]; }
  function collide() {
    for (let i = 0; i < rigs.length; i++) for (let j = i + 1; j < rigs.length; j++) {
      const A = rigs[i].body, B = rigs[j].body, dx = B.x - A.x, dy = B.y - A.y; if (Math.hypot(dx, dy) > 1.9) continue;
      const axes = [...corners(A), ...corners(B)]; let best = 1e9, nx = 0, ny = 0, hit = true;
      for (const [ax, ay] of axes) {
        const ra = CW / 2 * Math.abs(corners(A)[0][0] * ax + corners(A)[0][1] * ay) + CH / 2 * Math.abs(corners(A)[1][0] * ax + corners(A)[1][1] * ay);
        const rb = CW / 2 * Math.abs(corners(B)[0][0] * ax + corners(B)[0][1] * ay) + CH / 2 * Math.abs(corners(B)[1][0] * ax + corners(B)[1][1] * ay);
        const ov = ra + rb - Math.abs(dx * ax + dy * ay); if (ov <= 0) { hit = false; break; } if (ov < best) { best = ov; const sgn = dx * ax + dy * ay >= 0 ? 1 : -1; nx = ax * sgn; ny = ay * sgn; }
      }
      if (!hit) continue;
      const heldA = hold && hold.rig === rigs[i], heldB = hold && hold.rig === rigs[j], wa = heldA ? 0 : heldB ? 1 : 0.5, wb = 1 - wa;
      A.x -= nx * best * wa; A.y -= ny * best * wa; B.x += nx * best * wb; B.y += ny * best * wb;
      const rv = (B.vx - A.vx) * nx + (B.vy - A.vy) * ny; if (rv < 0) { const imp = -(1 + 0.12) * rv * 0.45; A.vx -= nx * imp; A.vy -= ny * imp; B.vx += nx * imp; B.vy += ny * imp; A.w -= 0.6 * imp * (nx > 0 ? 1 : -1); B.w += 0.6 * imp * (nx > 0 ? 1 : -1); }
    }
  }

  /* ---------- render sync ---------- */
  const V = new Vector3();
  function sync() {
    for (const r of rigs) {
      const b = r.body; r.group.position.set(b.x, b.y, 0); r.group.rotation.set(0, b.turn, b.a, 'ZYX');
      r.group.children[2].material.map.offset.x = clamp(0.5 - b.a * 0.9 - b.turn * 1.4, -0.4, 1.4); r.group.children[2].material.opacity = 0.35 + Math.min(0.4, Math.abs(b.turn) * 1.6);
      const at = attach(r), c = r.curve.points; c[0].set(r.ax, r.ay, 0); c[1].set(r.p[0].x, r.p[0].y, 0); c[2].set(r.p[1].x, r.p[1].y, 0); c[3].set(b.x + at.rx, b.y + at.ry, 0);
      const pos = r.band.geometry.attributes.position, uv = r.band.geometry.attributes.uv, N = r.N; let len = 0, prev = null;
      for (let k = 0; k < N; k++) {
        r.curve.getPoint(k / (N - 1), V); if (prev) len += Math.hypot(V.x - prev.x, V.y - prev.y);
        const nxt = r.curve.getPoint(Math.min(1, (k + 1) / (N - 1))), pre = r.curve.getPoint(Math.max(0, (k - 1) / (N - 1)));
        let tx = nxt.x - pre.x, ty = nxt.y - pre.y; const tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl; const px = -ty * BAND_W / 2, py = tx * BAND_W / 2;
        pos.setXYZ(2 * k, V.x + px, V.y + py, 0); pos.setXYZ(2 * k + 1, V.x - px, V.y - py, 0);
        const v = len / 1.9; uv.setXY(2 * k, 0, v); uv.setXY(2 * k + 1, 1, v); prev = { x: V.x, y: V.y };
      }
      pos.needsUpdate = true; uv.needsUpdate = true;
    }
  }
  const moving = () => !!hold || rigs.some(r => { const b = r.body; return b.vx * b.vx + b.vy * b.vy > 4e-5 || Math.abs(b.w) > 0.01 || Math.abs(b.turn) > 0.002 || r.p.some(q => (q.x - q.px) ** 2 + (q.y - q.py) ** 2 > 1e-8); });
  function frame(now) {
    raf = 0; if (!running || dead) return;
    const dt = clamp((now - last) / 1000 || 1 / 60, 1 / 240, 1 / 30); last = now;
    physics(dt); sync(); renderer.render(scene, camera);
    if (!visible || document.hidden || (!moving() && ++tick > 30)) { running = false; tick = 0; return; }
    if (moving()) tick = 0;
    raf = requestAnimationFrame(frame);
  }
  const wake = () => { if (reduce || running || dead) return; running = true; tick = 0; last = performance.now(); raf = requestAnimationFrame(frame); };

  /* ---------- pointer ---------- */
  function toWorld(e) {
    const rc = canvas.getBoundingClientRect(); ndc.set((e.clientX - rc.left) / rc.width * 2 - 1, -((e.clientY - rc.top) / rc.height) * 2 + 1); ray.setFromCamera(ndc, camera);
    const o = ray.ray.origin, d = ray.ray.direction, t = -o.z / d.z; return pointer.set(o.x + d.x * t, o.y + d.y * t, 0);
  }
  function pick(e) { toWorld(e); const hits = ray.intersectObjects(rigs.flatMap(r => [r.card, r.clip]), false); if (!hits.length) return null; const m = hits[0].object; return rigs.find(r => r.card === m || r.clip === m) || null; }
  let down = null;
  canvas.addEventListener('pointerdown', e => {
    if (e.button !== 0 || reduce) return; const r = pick(e); if (!r) return; const p = toWorld(e), b = r.body, c = Math.cos(b.a), s = Math.sin(b.a), rx = p.x - b.x, ry = p.y - b.y;
    hold = { rig: r, lx: c * rx + s * ry, ly: -s * rx + c * ry, id: e.pointerId }; down = { x: e.clientX, y: e.clientY, t: performance.now(), r, moved: 0 };
    canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; e.preventDefault(); wake();
  });
  canvas.addEventListener('pointermove', e => {
    if (hold && hold.id === e.pointerId) { toWorld(e); const lim = (H / U) / 2 - 0.2, limx = (W / U) / 2 - 0.2; pointer.x = clamp(pointer.x, -limx, limx); pointer.y = clamp(pointer.y, -lim, railYw - 0.45); down.moved = Math.max(down.moved, Math.hypot(e.clientX - down.x, e.clientY - down.y)); wake(); return; }
    if (e.pointerType === 'mouse') { const h = pick(e); canvas.style.cursor = h ? 'grab' : ''; hover = h; }
  });
  const release = e => {
    if (!hold) return; const tap = down && down.moved < 7 && performance.now() - down.t < 450, r = down && down.r; hold = null; down = null; canvas.style.cursor = ''; try { canvas.releasePointerCapture(e.pointerId); } catch (_) {} wake();
    if (tap && e.type === 'pointerup' && r && r.tag.href) { opts.onOpen && opts.onOpen(r.tag); }
  };
  canvas.addEventListener('pointerup', release); canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); dead = true; });

  let lastY = scrollY;
  const onScroll = () => { const dy = scrollY - lastY; lastY = scrollY; if (!visible || reduce || Math.abs(dy) < 2) return; const k = clamp(dy * 0.006, -0.9, 0.9); rigs.forEach((r, i) => { r.body.vx += k * (0.6 + 0.2 * i); r.body.w += k * 0.8; }); wake(); };
  addEventListener('scroll', onScroll, { passive: true });
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) { renderer.render(scene, camera); wake(); } }, { threshold: 0.05 }); io.observe(root);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) wake(); });
  let rz = 0;
  const ro = new ResizeObserver(() => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { const rc = stage.getBoundingClientRect(); const nw = Math.round(rc.width), nh = Math.round(rc.height); if (!nw || !nh || (nw === W && nh === H)) return; W = nw; H = nh; renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); renderer.setSize(W, H, false); canvas.style.width = W + 'px'; canvas.style.height = H + 'px'; build(); wake(); }); });
  ro.observe(stage);
  root.classList.add('is-live');
  wake();
  return { destroy() { dead = true; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); removeEventListener('scroll', onScroll); renderer.dispose(); canvas.remove(); root.classList.remove('is-live'); } };
}

/* ---------- no WebGL: the same cards, hanging in the DOM with a CSS sway ---------- */
function fallback(root, stage, portrait) {
  const ul = document.createElement('ul'); ul.className = 'belt-fb'; ul.setAttribute('aria-hidden', 'true');
  TAGS.forEach((t, i) => { const li = document.createElement('li'); li.style.setProperty('--i', i); const im = new Image(); im.alt = ''; im.src = drawTag(t, portrait, i).toDataURL('image/webp', 0.85); li.append(document.createElement('span'), im); ul.append(li); });
  stage.append(ul); root.classList.add('is-fallback'); return { destroy() { ul.remove(); } };
}
