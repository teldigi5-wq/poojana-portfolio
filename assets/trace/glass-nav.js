/*
 * Liquid-glass navigation (WebGL2).
 *
 * Draws only what real glass changes: the bent, dispersed light at the rim,
 * the specular edge, and a liquid lens that slides under the active link.
 * The middle of the pill stays transparent, so the page behind it still shows
 * through (CSS backdrop-filter supplies the frosting there).
 *
 * The refracted pixels come from the same fixed scene image the page uses as
 * its backdrop, mapped with the same "cover" maths, so the bend lines up with
 * what is really behind the bar.
 */
const VERT = `#version 300 es
in vec2 aPos; out vec2 vUv;
void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos,0.,1.); }`;

const FRAG = `#version 300 es
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D uTex;
uniform vec2 uSize;     // canvas size, css px
uniform vec2 uOrigin;   // canvas top-left in viewport, css px
uniform vec2 uView;     // viewport size, css px
uniform float uImgA;    // image aspect
uniform vec3 uBlob;     // x centre (css px), width, squash
uniform vec2 uLight;    // light direction
uniform float uHasTex;

float sdCap(vec2 p, float hx, float r){ vec2 q = vec2(max(abs(p.x)-hx,0.), p.y); return length(q)-r; }
float sdMain(vec2 p){ float R=uSize.y*0.5; return sdCap(p, uSize.x*0.5-R, R); }
float sdBlob(vec2 p){ float r=uSize.y*0.5*0.80*uBlob.z; vec2 c=vec2(uBlob.x-uSize.x*0.5,0.); return sdCap(p-c, max(uBlob.y*0.5-r,0.), r); }

vec3 scene(vec2 viewPx){
  vec2 uv = viewPx/uView;
  float va = uView.x/uView.y;
  vec2 s = va>uImgA ? vec2(1., uImgA/va) : vec2(va/uImgA, 1.);
  uv = (uv-0.5)*s+0.5;
  return texture(uTex, vec2(uv.x, 1.-uv.y)).rgb;
}
vec2 grad(float d0, float dx, float dy, float dxm, float dym){ return normalize(vec2(dx-dxm, dy-dym)+1e-5); }

void main(){
  vec2 p = vUv*uSize - uSize*0.5; p.y = -p.y;               // origin at centre, y up
  vec2 e = vec2(1.0,0.);
  float dM = sdMain(p);
  vec2 nM = grad(dM, sdMain(p+e.xy), sdMain(p+e.yx), sdMain(p-e.xy), sdMain(p-e.yx));
  float dB = sdBlob(p);
  vec2 nB = grad(dB, sdBlob(p+e.xy), sdBlob(p+e.yx), sdBlob(p-e.xy), sdBlob(p-e.yx));

  // convex-lens profile: strongest bend at the rim, none in the middle
  float bezelM = uSize.y*0.30;
  float tM = clamp(-dM/bezelM, 0., 1.);
  float bendM = pow(1.-tM, 2.2) * (dM<0.?1.:0.);
  float bezelB = uSize.y*0.26;
  float tB = clamp(-dB/bezelB, 0., 1.);
  float bendB = pow(1.-tB, 1.8) * (dB<0.?1.:0.);

  vec2 dir = -(nM*bendM*uSize.y*0.55 + nB*bendB*uSize.y*0.70);
  dir.y = -dir.y;                                            // back to screen space (y down)
  vec2 base = uOrigin + vUv*uSize; base.y = uOrigin.y + (1.-vUv.y)*uSize.y;
  vec3 col;
  if(uHasTex>0.5){
    col = vec3(scene(base+dir*1.00).r, scene(base+dir*1.07).g, scene(base+dir*1.16).b);
  } else { col = vec3(0.92,0.94,1.0); }
  col = mix(col, vec3(1.0), 0.10);

  float ring = clamp(bendM*1.15 + bendB*1.1, 0., 1.);
  float inside = 1. - smoothstep(-0.6, 0.6, dM);

  // specular rim + blob rim
  float ndlM = dot(nM, normalize(uLight));
  float rimM = smoothstep(-2.2,-0.4,dM) * (1.-smoothstep(-0.4,0.8,dM));
  float specM = rimM * (0.38 + 0.62*pow(abs(ndlM), 1.6));
  float ndlB = dot(nB, normalize(uLight));
  float rimB = smoothstep(-2.0,-0.3,dB) * (1.-smoothstep(-0.3,0.8,dB));
  float specB = rimB * (0.30 + 0.70*pow(max(ndlB,0.), 1.4));
  // soft body light on the lower inside of the blob, like light pooling in thick glass
  float pool = (1.-smoothstep(0.,1.,tB)) * step(dB,0.) * (0.5+0.5*clamp(-ndlB,0.,1.)) * 0.22;

  float spec = clamp(specM + specB + pool, 0., 1.);
  float a = clamp(ring*0.96 + spec, 0., 1.) * inside;
  vec3 rgb = mix(col, vec3(1.), clamp(spec,0.,1.));
  outColor = vec4(rgb*a, a);
}`;

export function mountGlassNav(host, { imgSrc, activeSelector = '[aria-current="true"]' } = {}) {
  const canvas = host.querySelector('canvas.glass-gl');
  if (!canvas) return null;
  const gl = canvas.getContext('webgl2', { premultipliedAlpha: true, alpha: true, antialias: false });
  if (!gl) { host.classList.add('no-gl'); return null; }

  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram();
  try { gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog); }
  catch (err) { host.classList.add('no-gl'); return null; }
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { host.classList.add('no-gl'); return null; }
  gl.useProgram(prog);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'aPos'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = n => gl.getUniformLocation(prog, n);
  const u = { tex: U('uTex'), size: U('uSize'), origin: U('uOrigin'), view: U('uView'), imgA: U('uImgA'), blob: U('uBlob'), light: U('uLight'), hasTex: U('uHasTex') };

  const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([235, 240, 255, 255]));
  let hasTex = 0, imgA = 16 / 9;
  const img = new Image(); img.decoding = 'async';
  img.onload = () => { gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    hasTex = 1; imgA = img.naturalWidth / img.naturalHeight; kick(); };
  img.src = imgSrc;

  const links = [...host.querySelectorAll('nav a')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, dpr = 1;
  // spring state for the liquid lens (x centre, width)
  const st = { x: 0, w: 80, vx: 0, vw: 0, tx: 0, tw: 80 };
  let light = [-0.55, 0.85], tlight = [-0.55, 0.85];
  let raf = 0, last = 0;

  const resize = () => {
    const r = host.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px'; gl.viewport(0, 0, canvas.width, canvas.height);
    retarget(true);
  };
  const retarget = (snap) => {
    const hr = host.getBoundingClientRect();
    const el = hovered || links.find(a => a.matches(activeSelector)) || links[0];
    if (!el) return;
    const r = el.getBoundingClientRect();
    st.tx = r.left - hr.left + r.width / 2; st.tw = r.width + 22;
    if (snap || reduce) { st.x = st.tx; st.w = st.tw; st.vx = st.vw = 0; }
    kick();
  };
  let hovered = null;
  links.forEach(a => {
    a.addEventListener('pointerenter', () => { hovered = a; retarget(); });
    a.addEventListener('focus', () => { hovered = a; retarget(); });
  });
  host.addEventListener('pointerleave', () => { hovered = null; tlight = [-0.55, 0.85]; retarget(); });
  host.addEventListener('pointermove', e => {
    const r = host.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    tlight = [-0.55 + nx * 0.9, 0.85]; kick();
  });
  new ResizeObserver(resize).observe(host);
  addEventListener('resize', resize);
  const mo = new MutationObserver(() => retarget()); links.forEach(a => mo.observe(a, { attributes: true, attributeFilter: ['aria-current'] }));

  function draw() {
    const hr = host.getBoundingClientRect();
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1i(u.tex, 0); gl.uniform2f(u.size, W, H); gl.uniform2f(u.origin, hr.left, hr.top);
    gl.uniform2f(u.view, innerWidth, innerHeight); gl.uniform1f(u.imgA, imgA);
    const squash = 1 - Math.min(Math.abs(st.vx) / 9000, 0.18) + Math.min(Math.abs(st.vw) / 6000, 0.06);
    const stretch = st.w + Math.min(Math.abs(st.vx) * 0.018, 26);
    gl.uniform3f(u.blob, st.x, stretch, squash);
    gl.uniform2f(u.light, light[0], light[1]); gl.uniform1f(u.hasTex, hasTex);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  function tick(t) {
    const dt = Math.min((t - last) / 1000 || 0.016, 0.033); last = t;
    // critically-damped-ish spring: snappy with a little overshoot, so it feels like liquid
    const k = 420, c = 26;
    st.vx += ((st.tx - st.x) * k - st.vx * c) * dt; st.x += st.vx * dt;
    st.vw += ((st.tw - st.w) * k - st.vw * c) * dt; st.w += st.vw * dt;
    light[0] += (tlight[0] - light[0]) * Math.min(dt * 8, 1); light[1] += (tlight[1] - light[1]) * Math.min(dt * 8, 1);
    draw();
    const moving = Math.abs(st.tx - st.x) > 0.2 || Math.abs(st.vx) > 4 || Math.abs(st.tw - st.w) > 0.2 || Math.abs(tlight[0] - light[0]) > 0.003;
    raf = moving ? requestAnimationFrame(tick) : 0;
  }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }
  document.addEventListener('visibilitychange', () => { if (document.hidden && raf) { cancelAnimationFrame(raf); raf = 0; } else kick(); });
  resize();
  host.classList.add('has-gl');
  return { redraw: kick };
}
