/*
 * Real liquid-glass refraction for the nav pill (Chromium).
 *
 * An SVG filter used as `backdrop-filter: url(#…)` bends whatever is really behind the bar
 * (hero, terminal, text, cards), not a fixed image. The displacement map is built from
 * Snell's law through a convex squircle bezel; red/green/blue are displaced by slightly
 * different amounts (chromatic dispersion); a specular rim is composited on top.
 * Browsers without SVG backdrop filters keep the WebGL + frosted fallback.
 */
const NS = 'http://www.w3.org/2000/svg';
const prof = x => { x = Math.min(Math.max(x, 0), 1); return Math.pow(1 - Math.pow(1 - x, 4), 0.25); };

function supported() {
  const b = navigator.userAgentData && navigator.userAgentData.brands;
  if (b) return b.some(x => /Chromium/i.test(x.brand));
  return /Chrome\//.test(navigator.userAgent) && !/CriOS|Edg\/.*Mobile/.test(navigator.userAgent);
}

function buildMaps(W, H, S, thick) {
  const k = 2, w = Math.round(W * k), h = Math.round(H * k);
  const disp = document.createElement('canvas'); disp.width = w; disp.height = h;
  const spec = document.createElement('canvas'); spec.width = w; spec.height = h;
  const dc = disp.getContext('2d'), sc = spec.getContext('2d');
  const di = dc.createImageData(w, h), si = sc.createImageData(w, h);
  const R = H / 2, hx = Math.max(W / 2 - R, 0), B = H * 0.46, eta = 1 / 1.5;
  const L = [-0.55, -0.85]; const ll = Math.hypot(L[0], L[1]); L[0] /= ll; L[1] /= ll;
  const sd = (px, py) => { const qx = Math.max(Math.abs(px) - hx, 0); return Math.hypot(qx, py) - R; };
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const px = (i + 0.5) / k - W / 2, py = (j + 0.5) / k - H / 2;
    const d = sd(px, py), o = (j * w + i) * 4;
    let dx = 0, dy = 0, a = 0;
    if (d < 0) {
      const gx = sd(px + 0.5, py) - sd(px - 0.5, py), gy = sd(px, py + 0.5) - sd(px, py - 0.5), gl = Math.hypot(gx, gy) || 1;
      const nx = gx / gl, ny = gy / gl;                          // outward normal (y down)
      const x = Math.min(-d / B, 1), e = 0.004;
      const slope = Math.min((prof(x + e) - prof(x)) / e * (thick / B), 4.5);
      // incidence angle from the surface tilt, then Snell: sin(t) = eta * sin(i); lateral shift per unit depth = tan(i) - tan(t)
      const ti = Math.atan(slope), tt = Math.asin(Math.min(Math.sin(ti) * eta, 0.999));
      const bend = Math.tan(ti) - Math.tan(tt);
      const path = thick * prof(x) + 3;
      const shift = Math.min(bend * path, S);                         // px, sampled from further inside
      dx = -nx * shift; dy = -ny * shift;
      // specular rim
      const edge = Math.exp(-Math.pow((-d - 0.6) / 1.1, 2));
      const nlv = Math.abs(nx * L[0] + ny * L[1]);
      const wide = Math.max(1 - -d / (H * 0.3), 0);
      a = Math.min(edge * (0.22 + 0.78 * Math.pow(nlv, 2.4)) + wide * wide * 0.10 * Math.max(-(nx * L[0] + ny * L[1]), 0), 1);
    }
    di.data[o] = Math.round(127.5 + (dx / (2 * S)) * 255); di.data[o + 1] = Math.round(127.5 + (dy / (2 * S)) * 255); di.data[o + 2] = 128; di.data[o + 3] = 255;
    si.data[o] = si.data[o + 1] = si.data[o + 2] = 255; si.data[o + 3] = Math.round(a * 235);
  }
  dc.putImageData(di, 0, 0); sc.putImageData(si, 0, 0);
  return { disp: disp.toDataURL('image/png'), spec: spec.toDataURL('image/png') };
}

export function mountRefraction(host, { id = 'lgNav', thickness = 20, maxShift = 26 } = {}) {
  if (!supported() || !('CSS' in window) || !CSS.supports('backdrop-filter', 'url(#x)')) return false;
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('width', '0'); svg.setAttribute('height', '0'); svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;pointer-events:none';
  document.body.appendChild(svg);
  let timer = 0, lastKey = '';
  const render = () => {
    const r = host.getBoundingClientRect(); const W = Math.round(r.width), H = Math.round(r.height);
    if (!W || !H || `${W}x${H}` === lastKey) return; lastKey = `${W}x${H}`;
    const S = maxShift, m = buildMaps(W, H, S, thickness);
    const ch = (scale, row, res) => `<feDisplacementMap in="b" in2="map" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="d${res}"/>` +
      `<feColorMatrix in="d${res}" type="matrix" values="${row}" result="${res}"/>`;
    svg.innerHTML = `<filter id="${id}" x="0" y="0" width="${W}" height="${H}" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">` +
      `<feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="b"/>` +
      `<feImage href="${m.disp}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="none" result="map"/>` +
      ch(2 * S * 0.94, '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0', 'r') +
      ch(2 * S * 1.0, '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0', 'g') +
      ch(2 * S * 1.07, '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0', 'bl') +
      `<feBlend in="r" in2="g" mode="screen" result="rg"/><feBlend in="rg" in2="bl" mode="screen" result="rgb"/>` +
      `<feImage href="${m.spec}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="none" result="sp"/>` +
      `<feBlend in="sp" in2="rgb" mode="normal"/></filter>`;
  };
  const sched = () => { clearTimeout(timer); timer = setTimeout(render, 80); };
  new ResizeObserver(sched).observe(host);
  render();
  host.classList.add('lg-real');
  return true;
}
