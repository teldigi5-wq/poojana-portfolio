/* Work section: an orbitable 3D system model of the selected project.
   Glass nodes, request packets flowing along the edges and a boundary shell; selecting another project
   morphs every node, edge and shell to the new topology. Drag to orbit; scroll nudges the camera. */
import {
  IcosahedronGeometry, SphereGeometry, CylinderGeometry, Mesh, Group, Vector3, Quaternion, LineSegments, WireframeGeometry,
  LineBasicMaterial, MeshBasicMaterial, AdditiveBlending, GridHelper, Color
} from 'three';
import { createView, glassMat, glowSprite, labels, damp, clamp, reduce } from './common.js';

const C = { edge: '#7aa2ff', sec: '#35e0b4', data: '#ffc27a', bad: '#ff7b86', ai: '#c59bff' };
// topology per project: nodes [label, kind, x, y, z, size], edges [a, b, tone], shell [x, y, z, radius, opacity]
const SCENES = [
  { // BoundaryLab: where a request is allowed or refused
    nodes: [['client', 'edge', -3.5, -0.7, 0.4, 0.95], ['gateway', 'edge', -2.0, 0.6, -0.2, 1], ['sign-in', 'sec', -0.5, -0.5, 0.6, 1], ['policy', 'sec', 1.0, 0.7, 0, 1.2], ['resource', 'data', 2.7, -0.2, 0.4, 1.1], ['deny', 'bad', 1.5, -1.8, -0.3, 0.85], ['audit log', 'data', 3.0, 1.7, -0.5, 0.8]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5, 'bad'], [4, 6]], shell: [2.0, 0.25, 0.1, 2.5, 0.5]
  },
  { // Aetheris: gateway, services, queue, data stores and an independent AI runtime
    nodes: [['gateway', 'edge', -2.9, 0, 0, 1.2], ['auth', 'sec', -1.2, 1.6, 0.3, 0.9], ['orders', 'edge', -0.7, -0.4, -0.4, 1.05], ['queue', 'data', 1.0, 1.0, 0.5, 0.95], ['relay ×8', 'data', 2.6, 0.2, -0.2, 0.95], ['postgres', 'data', 1.3, -1.6, 0.2, 1.1], ['redis', 'data', -0.9, -2.1, 0.3, 0.8], ['ai runtime', 'ai', -2.8, -2.0, -0.5, 1]],
    edges: [[0, 1], [0, 2], [2, 5], [2, 6], [2, 3], [3, 4], [4, 5], [0, 7]], shell: [-2.8, -2.0, -0.5, 1.25, 0.55]
  },
  { // Wayfarer: discovery to arrival, rule-based assistants, local persistence
    nodes: [['discover', 'edge', -3.3, -0.9, 0.3, 1], ['plan', 'sec', -1.4, 0.7, 0.6, 1.2], ['itinerary', 'edge', 0.5, 0.2, 0, 1.1], ['saved locally', 'data', 1.6, -1.3, 0.4, 0.95], ['arrive', 'sec', 3.1, 0.5, -0.1, 1], ['rules', 'ai', -2.3, 2.0, -0.4, 0.75], ['assist', 'ai', -0.3, 2.0, -0.5, 0.75], ['map', 'data', 0.2, -1.9, -0.4, 0.8]],
    edges: [[0, 1], [1, 2], [2, 3], [2, 4], [1, 5], [1, 6], [0, 7], [7, 2]], shell: [0, 0.1, -0.8, 3.6, 0.22]
  }
];
const MAXN = 8, MAXE = 8;
const UP = new Vector3(0, 1, 0);

export function mountStage(root) {
  const canvas = root.querySelector('canvas'); if (!canvas) return null;
  const view = createView(canvas, { fov: 36, z: 10 }); if (!view) return null;
  const { scene, camera } = view;
  const lab = labels(root, MAXN);
  const group = new Group(); scene.add(group);

  // faint floor grid for depth
  const grid = new GridHelper(14, 28, 0x3b4f95, 0x22305f); grid.position.y = -2.7; grid.material.transparent = true; grid.material.opacity = 0.32; grid.material.depthWrite = false; group.add(grid);

  const geo = new IcosahedronGeometry(0.3, 2), core = glowSprite('#ffffff', 0.5, 0.9);
  const nodes = Array.from({ length: MAXN }, () => {
    const m = new Mesh(geo, glassMat('#7aa2ff', 1)); const halo = glowSprite('#7aa2ff', 1.4, 0.55); m.add(halo); const c = glowSprite('#ffffff', 0.42, 0.9); m.add(c);
    group.add(m); return { m, halo, c, p: new Vector3(), tp: new Vector3(), s: 0, ts: 0, kind: 'edge' };
  });
  const tube = new CylinderGeometry(0.022, 0.022, 1, 8, 1, true);
  const edges = Array.from({ length: MAXE }, () => {
    const m = new Mesh(tube, new MeshBasicMaterial({ color: '#7aa2ff', transparent: true, opacity: 0.6, blending: AdditiveBlending, depthWrite: false })); group.add(m);
    const pk = [0, 1].map(() => { const s = glowSprite('#bcd2ff', 0.55, 1); group.add(s); return s; });
    return { m, pk, a: 0, b: 1, v: 0, tv: 0, u: [Math.random(), Math.random()], sp: 0.22 + Math.random() * 0.12, tone: '' };
  });
  const shell = new LineSegments(new WireframeGeometry(new IcosahedronGeometry(1, 2)), new LineBasicMaterial({ color: 0x88a8ff, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false }));
  group.add(shell); const sh = { p: new Vector3(0, 0, 0), s: 0.01, o: 0, tp: new Vector3(), ts: 0.01, to: 0 };

  let cur = 0, ready = false;
  const col = new Color();
  function setProject(i, snap) {
    cur = clamp(i, 0, SCENES.length - 1); const S = SCENES[cur];
    nodes.forEach((n, k) => {
      const d = S.nodes[k];
      if (d) { n.tp.set(d[2], d[3], d[4]); n.ts = d[5]; n.kind = d[1]; n.label = d[0]; col.set(C[d[1]]); n.m.material.uniforms.uColor.value.copy(col); n.halo.material.color.copy(col); }
      else { n.ts = 0; n.label = null; }
      if (snap || !ready) { n.p.copy(n.tp); n.s = n.ts; }
    });
    edges.forEach((e, k) => {
      const d = S.edges[k];
      if (d) { e.a = d[0]; e.b = d[1]; e.tv = 1; e.tone = d[2] || ''; col.set(e.tone === 'bad' ? C.bad : C.edge); e.m.material.color.copy(col); e.pk.forEach(p => p.material.color.set(e.tone === 'bad' ? '#ff9aa2' : '#cfe0ff')); }
      else e.tv = 0;
      if (snap || !ready) e.v = e.tv;
    });
    sh.tp.set(S.shell[0], S.shell[1], S.shell[2]); sh.ts = S.shell[3]; sh.to = S.shell[4];
    if (snap || !ready) { sh.p.copy(sh.tp); sh.s = sh.ts; sh.o = sh.to; }
    ready = true; view.invalidate();
  }

  // orbit: drag with inertia, slow idle drift, small scroll nudge
  let yaw = -0.35, pitch = 0.22, vy = 0, vp = 0, dragging = false, lx = 0, ly = 0, idleT = 0;
  canvas.style.touchAction = 'pan-y'; canvas.style.cursor = 'grab';
  canvas.addEventListener('pointerdown', e => { dragging = true; idleT = 0; lx = e.clientX; ly = e.clientY; canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; root.classList.add('touched'); view.invalidate(); });
  canvas.addEventListener('pointermove', e => { if (!dragging) return; const dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY; vy = dx * 0.006; vp = dy * 0.004; yaw += vy; pitch = clamp(pitch + vp, -0.15, 0.7); view.invalidate(); });
  const up = () => { dragging = false; canvas.style.cursor = 'grab'; };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('keydown', e => { const k = { ArrowLeft: [-.18, 0], ArrowRight: [.18, 0], ArrowUp: [0, -.1], ArrowDown: [0, .1] }[e.key]; if (k) { e.preventDefault(); yaw += k[0]; pitch = clamp(pitch + k[1], -0.15, 0.7); view.invalidate(); } });

  const tmp = new Vector3(), q = new Quaternion(), dirv = new Vector3();
  view.setUpdate((dt, T) => {
    // camera
    if (!dragging) { vy *= Math.exp(-dt * 3); yaw += vy; idleT += dt; if (idleT > 3.5) { const d = ((-0.35 - yaw + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; yaw += d * (1 - Math.exp(-dt * 0.9)); pitch = damp(pitch, 0.22, dt, 0.9); } }
    const R = 10.2 / clamp(view.size[0] / view.size[1] / 1.6, 0.62, 1.15);
    const rect = root.getBoundingClientRect(), prog = clamp(1 - (rect.top + rect.height / 2) / innerHeight, 0, 1);
    const yw = yaw + Math.sin(T * 0.22) * 0.22 + (prog - 0.5) * 0.5, pt = pitch + Math.sin(T * 0.17) * 0.03;
    camera.position.set(Math.sin(yw) * Math.cos(pt) * R, Math.sin(pt) * R, Math.cos(yw) * Math.cos(pt) * R); camera.lookAt(0, 0, 0);
    // nodes + labels
    let moving = Math.abs(vy) > 0.0006 || dragging;
    nodes.forEach((n, k) => {
      n.p.x = damp(n.p.x, n.tp.x, dt, 6); n.p.y = damp(n.p.y, n.tp.y, dt, 6); n.p.z = damp(n.p.z, n.tp.z, dt, 6); n.s = damp(n.s, n.ts, dt, 7);
      if (Math.abs(n.s - n.ts) > 0.003 || n.p.distanceToSquared(n.tp) > 1e-5) moving = true;
      const bob = Math.sin(T * 1.1 + k * 1.7) * 0.05;
      n.m.position.set(n.p.x, n.p.y + bob, n.p.z); n.m.scale.setScalar(Math.max(n.s, 0.0001)); n.m.rotation.y = T * 0.25 + k; n.m.rotation.x = Math.sin(T * 0.3 + k) * 0.2; n.m.visible = n.s > 0.01;
      n.m.material.uniforms.uGlow.value = 0.18 + 0.12 * Math.sin(T * 1.6 + k);
      if (n.label && n.s > 0.3) lab.place(view, k, tmp.set(n.p.x, n.p.y + bob - 0.55 * n.s, n.p.z), n.label, 4, clamp((n.s - 0.3) * 3)); else lab.hide(k);
    });
    // edges + packets
    edges.forEach(e => {
      e.v = damp(e.v, e.tv, dt, 6); const a = nodes[e.a], b = nodes[e.b]; const on = e.v > 0.02 && a.s > 0.05 && b.s > 0.05;
      e.m.visible = on; e.pk.forEach(p => p.visible = on); if (!on) return;
      const pa = a.m.position, pb = b.m.position; dirv.subVectors(pb, pa); const len = dirv.length(); dirv.normalize();
      e.m.position.copy(pa).addScaledVector(dirv, len / 2); q.setFromUnitVectors(UP, dirv); e.m.quaternion.copy(q); e.m.scale.set(1, len * e.v, 1);
      e.pk.forEach((p, i) => { const u = (e.u[i] = (e.u[i] + dt * e.sp * (e.tone === 'bad' ? 0.6 : 1)) % 1); p.position.copy(pa).addScaledVector(dirv, len * u); p.material.opacity = Math.sin(u * Math.PI) * 0.95 * e.v; });
    });
    // shell
    sh.p.x = damp(sh.p.x, sh.tp.x, dt, 5); sh.p.y = damp(sh.p.y, sh.tp.y, dt, 5); sh.p.z = damp(sh.p.z, sh.tp.z, dt, 5); sh.s = damp(sh.s, sh.ts, dt, 5); sh.o = damp(sh.o, sh.to, dt, 5);
    if (Math.abs(sh.s - sh.ts) > 0.003) moving = true;
    shell.position.copy(sh.p); shell.scale.setScalar(Math.max(sh.s, 0.01)); shell.rotation.y = T * 0.08; shell.material.opacity = sh.o * (0.55 + 0.25 * Math.sin(T * 0.9));
    return true;
  });
  return { setProject, root };
}
