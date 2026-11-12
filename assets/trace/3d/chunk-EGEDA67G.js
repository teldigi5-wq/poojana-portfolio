import{H as E,I,L as P,b as S,d as z,k as F,l as V,p as G,q as A,w as O}from"./chunk-XY2SDXS4.js";var T=matchMedia("(prefers-reduced-motion: reduce)").matches,U=(t,o=0,n=1)=>Math.min(n,Math.max(o,t)),W=(t,o,n,a=8)=>t+(o-t)*(1-Math.exp(-n*a)),j=`
varying vec3 vN; varying vec3 vV; varying vec3 vC;
void main(){
  vec4 mv;
  #ifdef USE_INSTANCING
    mat4 im = instanceMatrix; mv = modelViewMatrix * im * vec4(position,1.); vN = normalize(normalMatrix * mat3(im) * normal);
  #else
    mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal);
  #endif
  #ifdef USE_INSTANCING_COLOR
    vC = instanceColor;
  #else
    vC = vec3(1.);
  #endif
  vV = -mv.xyz; gl_Position = projectionMatrix * mv;
}`,_=`
uniform vec3 uColor; uniform float uOpacity; uniform float uGlow; uniform float uFill;
varying vec3 vN; varying vec3 vV; varying vec3 vC;
void main(){
  vec3 N = normalize(vN), V = normalize(vV);
  float f = pow(1. - abs(dot(N, V)), 2.3);
  vec3 base = uColor * vC;
  vec3 c = base * (uFill * 1.15 + 0.95 * f + uGlow) + vec3(.82,.92,1.) * pow(f, 6.) * .75;
  float a = uOpacity * (uFill + (1. - uFill) * f + uGlow * .7);
  gl_FragColor = vec4(c, clamp(a, 0., 1.));
}`;function q(t="#6f8cff",o=1,n=.14){return new E({uniforms:{uColor:{value:new F(t)},uOpacity:{value:o},uGlow:{value:0},uFill:{value:n}},vertexShader:j,fragmentShader:_,transparent:!0,depthWrite:!1,blending:S})}var w;function $(t="#9ec1ff",o=.6,n=.9){if(!w){let e=document.createElement("canvas");e.width=e.height=128;let s=e.getContext("2d"),i=s.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=i,s.fillRect(0,0,128,128),w=new O(e),w.colorSpace=z}let a=new A(new G({map:w,color:t,transparent:!0,depthWrite:!1,blending:S,opacity:n}));return a.scale.setScalar(o),a}function k(t,{fov:o=38,z:n=9,dprCap:a=2}={}){let e;try{e=new P({canvas:t,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}if(!e.getContext())return null;e.setClearColor(0,0);let s=new V,i=new I(o,1,.1,80);i.position.set(0,0,n);let l=0,d=0,u=0,c=!1,h=0,x=0,C=()=>{},y=!1,b=()=>{let r=t.getBoundingClientRect();!r.width||!r.height||(l=r.width,d=r.height,e.setPixelRatio(Math.min(devicePixelRatio||1,a)),e.setSize(l,d,!1),i.aspect=l/d,i.updateProjectionMatrix(),v.onResize&&v.onResize(l,d),m())},M=r=>{if(u=0,y)return;let p=Math.min((r-h)/1e3||.016,.05);if(h=r,T)for(let g=0;g<30;g++)C(.06,x+=.06);else x+=p;let f=!0;try{f=T?!1:C(p,x),e.render(s,i)}catch(g){v.warned||(v.warned=!0,console.warn("3D scene error",g))}c&&!document.hidden&&f!==!1&&(u=requestAnimationFrame(M))};function m(){!u&&c&&!y&&(h=performance.now(),u=requestAnimationFrame(M))}let N=new IntersectionObserver(([r])=>{c=r.isIntersecting,c&&m()},{rootMargin:"160px"});N.observe(t);let R=new ResizeObserver(b);R.observe(t),document.addEventListener("visibilitychange",m);let v={renderer:e,scene:s,camera:i,invalidate:m,onResize:null,setUpdate(r){C=r,m()},get size(){return[l,d]},project(r,p=[0,0]){let f=r.clone().project(i);return p[0]=(f.x*.5+.5)*l,p[1]=(-f.y*.5+.5)*d,p[2]=f.z,p},dispose(){y=!0,N.disconnect(),R.disconnect(),e.dispose()}};return b(),v}function D(t,o){let n=Array.from({length:o},()=>{let e=document.createElement("span");return e.className="n3d",e.setAttribute("aria-hidden","true"),t.appendChild(e),e}),a=[0,0,0];return{els:n,place(e,s,i,l,d=22,u=1){let c=n[s];l!==void 0&&c.dataset.t!==l&&(c.textContent=l,c.dataset.t=l),e.project(i,a),c.style.opacity=a[2]>1?0:u,c.style.transform=`translate(${a[0].toFixed(1)}px,${(a[1]+d).toFixed(1)}px) translate(-50%,0)`},hide(e){n[e].style.opacity=0}}}export{U as a,W as b,q as c,$ as d,k as e,D as f};
