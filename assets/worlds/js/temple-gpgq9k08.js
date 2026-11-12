import{re}from"./stage-23fw8kph.js";import{S,I,G,y,d,n,R,e,a,i,v,t,Y,B,C,m,f,Te,Oe,h,r,D,J,le,Ge,Ie,P,p,u,j,z,We,_,ne}from"./stage-j5r47h6c.js";var St=789258,q=3.4,Bt=9,Et=3.5,Mt=q*Bt,te=-(Mt+2.4),Wt=4,we=-(q/2+Wt*q),Ut=new e(0.8,7.9,te+0.1),Nt=new e(0,15.5,te+0.6),it=12;function Rt(){let k=document.createElement("canvas");k.width=k.height=128;let V=k.getContext("2d"),g=V.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(0.22,"rgba(255,255,255,.55)"),g.addColorStop(0.55,"rgba(255,255,255,.12)"),g.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=g,V.fillRect(0,0,128,128);let w=new le(k);return w.colorSpace=y,w}function st(A,k,V,g){let w=k!=="low",W=w?new u({roughness:g.roughness,metalness:0,envMapIntensity:g.env??0.35}):new j;if(W.name=`${A}-${w?"pbr":"lit"}`,W.vertexColors=!!g.vertexColors,W.color.set(g.tint??16777215),g.floor)W.map=g.map,W.transparent=w&&g.reflective,W.opacity=1;return W.onBeforeCompile=(F)=>{Object.assign(F.uniforms,V.uniforms,{uStone:{value:g.stone||g.map},uScale:{value:g.scale??0.5},uFloorAlpha:{value:g.floorAlpha??1}}),F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTpPos; varying vec3 vTpNrm;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 tpWorld = vec4(transformed, 1.0);
        vec3 tpN = objectNormal;
        #ifdef USE_INSTANCING
          tpWorld = instanceMatrix * tpWorld;
          tpN = mat3(instanceMatrix) * tpN;
        #endif
        tpWorld = modelMatrix * tpWorld;
        vTpPos = tpWorld.xyz;
        vTpNrm = normalize(mat3(modelMatrix) * tpN);`);let ke=`
      uniform vec4 uTorches[${it}];
      uniform vec3 uTorchColor; uniform float uTorchPower;
      uniform vec4 uOrb; uniform vec3 uOrbColor;
      uniform vec4 uPoolA; uniform vec4 uPoolB; uniform vec3 uSkyColor; uniform float uPools;
      uniform float uWake; uniform vec4 uFill;
      vec3 warmLight(vec3 p, vec3 n) {
        // Warm fill from the entrance (the visitor's side), fading with depth into the hall.
        vec3 sum = uTorchColor * 0.55 * uFill.w * (max(dot(n, normalize(uFill.xyz - p)), 0.0) * 0.8 + 0.2)
          * exp(-max(0.0, uFill.z - p.z) * 0.06);
        for (int i = 0; i < ${it}; i++) {
          vec4 t = uTorches[i];
          vec3 d = t.xyz - p;
          float r2 = dot(d, d);
          float lambert = max(dot(n, d * inversesqrt(r2)), 0.0) * 0.8 + 0.2;
          sum += uTorchColor * t.w * lambert / (1.0 + r2 * 0.32);
        }
        vec3 o = uOrb.xyz - p;
        float o2 = dot(o, o);
        sum += uOrbColor * uOrb.w * (max(dot(n, o * inversesqrt(o2 + 1e-4)), 0.0) * 0.75 + 0.25) / (1.0 + o2 * 1.6);
        return sum * uTorchPower;
      }
      // Daylight pools for the low tier: a soft vertical cone from the skylight and the oculus.
      vec3 skyPools(vec3 p, vec3 n) {
        float a = exp(-dot(p.xz - uPoolA.xy, p.xz - uPoolA.xy) / uPoolA.z) * uPoolA.w;
        float b = exp(-dot(p.xz - uPoolB.xy, p.xz - uPoolB.xy) / uPoolB.z) * uPoolB.w;
        return uSkyColor * (a + b) * (max(n.y, 0.0) * 0.7 + 0.3) * uPools;
      }`;if(F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vTpPos; varying vec3 vTpNrm;
        uniform sampler2D uStone; uniform float uScale; uniform float uFloorAlpha;
        ${ke}`).replace("#include <map_fragment>",g.floor?`
        vec4 floorTex = texture2D(map, vec2((vTpPos.x + 7.0) / 14.0, -vTpPos.z / ${q.toFixed(2)}));
        diffuseColor.rgb *= floorTex.rgb;
        // Contact shadow at every column base and under the plinths (exact, analytic).
        float cz = mod(-vTpPos.z - ${(q/2).toFixed(2)} + ${(q/2).toFixed(2)}, ${q.toFixed(2)}) - ${(q/2).toFixed(2)};
        float colD = length(vec2(abs(vTpPos.x) - ${Et.toFixed(2)}, cz));
        float contact = mix(0.35, 1.0, smoothstep(0.62, 1.5, colD));
        if (-vTpPos.z > ${(Mt-1.2).toFixed(2)} + 1.5) contact = 1.0;
        vec2 pq = abs(vec2(vTpPos.x, vTpPos.z - ${te.toFixed(2)})) - vec2(1.75, 1.35);
        contact *= mix(0.4, 1.0, smoothstep(-0.05, 0.9, length(max(pq, 0.0)) + min(max(pq.x, pq.y), 0.0)));
        vec2 ped = vec2(abs(vTpPos.x) - 5.35, mod(-vTpPos.z, ${(2*q).toFixed(2)}) - ${q.toFixed(2)});
        contact *= mix(0.55, 1.0, smoothstep(0.35, 1.1, length(max(abs(ped) - vec2(0.4), 0.0))));
        diffuseColor.rgb *= contact;
        float tpAO = contact;
        float tpRough = floorTex.a;`:`
${w?`
        vec3 bw = pow(abs(vTpNrm), vec3(4.0)); bw /= dot(bw, vec3(1.0));
        vec3 tx = texture2D(uStone, vTpPos.zy * uScale).rgb;
        vec3 ty = texture2D(uStone, vTpPos.xz * uScale).rgb;
        vec3 tz = texture2D(uStone, vTpPos.xy * uScale).rgb;
        vec3 stoneTex = tx * bw.x + ty * bw.y + tz * bw.z;`:`
        // Low tier: one fetch along the dominant axis instead of three (measured: the triplanar
        // fetches were the single largest cost of the scene on a software rasteriser).
        vec3 an = abs(vTpNrm);
        vec2 tuv = (an.x > an.y && an.x > an.z) ? vTpPos.zy : (an.y > an.z ? vTpPos.xz : vTpPos.xy);
        vec3 stoneTex = texture2D(uStone, tuv * uScale).rgb;`}
        diffuseColor.rgb *= stoneTex;
        float tpAO = 1.0;
        float tpRough = 0.0;`).replace("#include <color_fragment>",g.vertexColors?`
        #ifdef USE_COLOR
          tpAO = vColor.r;
          // Edge wear: convex arrises are paler (handled stone) and break into chips.
          float edge = smoothstep(0.53, 0.68, vColor.g);
          float chip = step(0.52, fract(sin(dot(floor(vTpPos * 24.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.22 + 0.025, edge * (0.45 + 0.55 * chip));
          diffuseColor.rgb *= mix(0.28, 1.0, tpAO);
        #endif`:"").replace("#include <opaque_fragment>",`
        vec3 tpLit = warmLight(vTpPos, normalize(vTpNrm)) + skyPools(vTpPos, normalize(vTpNrm));
        outgoingLight += diffuseColor.rgb * tpLit * mix(0.45, 1.0, tpAO);
        outgoingLight *= uWake;
        #include <opaque_fragment>`),w)F.fragmentShader=F.fragmentShader.replace("#include <roughnessmap_fragment>",g.floor?`#include <roughnessmap_fragment>
roughnessFactor = clamp(tpRough * 1.1, 0.18, 1.0);`:`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + (0.5 - stoneTex.r) * 0.35, 0.2, 1.0);`);if(g.floor&&w&&g.reflective)F.fragmentShader=F.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.a = mix(0.72, 0.97, smoothstep(0.25, 0.6, tpRough));`)},W.customProgramCacheKey=()=>`temple-${A}-${k}-${!!g.reflective}`,W}function $t(A){return new p({uniforms:{uTime:A.uniforms.uTime,uWake:A.uniforms.uWake,uLevel:{value:0}},vertexShader:`varying vec3 vP; varying float vH; uniform float uTime;
      void main() {
        vec3 p = position; vH = clamp(p.y, 0.0, 1.0);
        vec4 origin = vec4(0.0, 0.0, 0.0, 1.0);
        #ifdef USE_INSTANCING
          origin = instanceMatrix * origin;
        #endif
        float seed = origin.x * 3.1 + origin.z * 1.7;
        float sway = sin(uTime * 7.0 + seed) * 0.12 + sin(uTime * 12.3 + seed * 2.0) * 0.07;
        p.x += sway * vH * vH; p.z += sway * 0.6 * vH * vH;
        p.y *= 0.88 + 0.14 * sin(uTime * 9.0 + seed * 3.0);
        vec4 local = vec4(p, 1.0);
        #ifdef USE_INSTANCING
          local = instanceMatrix * local;
        #endif
        vP = p; gl_Position = projectionMatrix * modelViewMatrix * local;
      }`,fragmentShader:`varying vec3 vP; varying float vH; uniform float uLevel; uniform float uWake;
      void main() {
        vec3 hot = vec3(1.0, 0.86, 0.62), warm = vec3(1.0, 0.48, 0.16);
        vec3 c = mix(hot * 4.0, warm * 2.4, vH);
        gl_FragColor = vec4(c * uLevel * uWake, 1.0);
      }`})}function It(A,k){return new p({transparent:!0,depthWrite:!1,side:S,blending:I,uniforms:{uTime:{value:0},uSeed:{value:A},uStrength:{value:0},uColor:{value:new t(k)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime, uSeed, uStrength; uniform vec3 uColor; varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      void main() {
        float across = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 2.2);
        float along = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
        float n = noise(vec2(vUv.x * 6.0 + uSeed, vUv.y * 2.0 - uTime * 0.06)) * 0.5 + 0.5;
        gl_FragColor = vec4(uColor, across * along * n * uStrength);
      }`})}function Gt(A,k,V){return new p({transparent:!0,depthWrite:!1,blending:I,uniforms:{uMap:{value:A},uTime:V.uniforms.uTime,uSize:{value:24*k},uLevel:{value:0},uA:{value:new e(0.4,0,we+0.9)},uB:{value:new e(0.1,0,te+0.3)}},vertexShader:`
      attribute float aSeed; uniform float uTime, uSize; uniform vec3 uA, uB; varying float vLight;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        // Shafts lean slightly (sun from the right): offset the axis with height.
        vec2 a = world.xz - (uA.xz + vec2(-0.12, 0.0) * world.y);
        vec2 b = world.xz - (uB.xz + vec2(-0.05, 0.0) * world.y);
        float d = min(dot(a, a) / 1.6, dot(b, b) / 1.1);
        vLight = 0.04 + exp(-d) * (0.65 + 0.35 * sin(uTime * 1.5 + aSeed * 6.2831));
        vec4 mv = viewMatrix * world;
        gl_PointSize = uSize * (0.55 + fract(aSeed * 13.7) * 0.9) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uLevel; varying float vLight;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vLight, t.a * vLight * uLevel);
      }`})}async function Yt({renderer:A,getEnvironment:k,state:V}){let g=new B;g.background=new t(St),g.fog=new Y(St,16,70),g.environmentIntensity=0.25;let w=new _(38,1,0.1,90),W=new e,F=Rt(),ke=[F],b=(o)=>(ke.push(o),o),je=new z,[lt,qe,He,ye]=await Promise.all([new re().loadAsync("assets/worlds/temple.glb"),je.loadAsync("assets/worlds/temple-limestone.webp"),je.loadAsync("assets/worlds/temple-marble.webp"),je.loadAsync("assets/worlds/temple-floor.webp")]);for(let o of[qe,He,ye])o.colorSpace=y,o.wrapS=o.wrapT=G,b(o);let oe=[],L={uniforms:{uTime:{value:0},uWake:{value:0},uTorches:{value:Array.from({length:it},()=>new a)},uTorchColor:{value:new t(1,0.52,0.22)},uTorchPower:{value:1},uOrb:{value:new a},uOrbColor:{value:new t(1,0.78,0.52)},uPoolA:{value:new a(0,we+1,4,0.9)},uPoolB:{value:new a(0,te+0.4,3,1.4)},uSkyColor:{value:new t(0.55,0.68,0.95)},uPools:{value:0},uFill:{value:new a(0,4.5,6,0)}}};lt.scene.updateMatrixWorld(!0);let Le=new Map,Tt=[];lt.scene.traverse((o)=>{if(!o.isMesh)return;let s=`${o.geometry.uuid}|${o.material.name}`;if(!Le.has(s))Le.set(s,[]);Le.get(s).push(o)});let be=new v;g.add(be);let O=[],ee=new i;for(let o of Le.values()){let s=o[0],c=(s.material.name||"").replace(/\.\d+$/,""),l;if(o.length>1)l=new D(s.geometry,s.material,o.length),o.forEach((Q,Fe)=>l.setMatrixAt(Fe,ee.copy(Q.matrixWorld))),l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere();else l=new r(s.geometry,s.material),l.matrixAutoUpdate=!1,l.matrix.copy(s.matrixWorld),Tt.push(l);l.name=s.name||s.parent?.name||c;let M=[[/Column/,1],[/Pedestal|Figure|Colossus|Plinth/,2],[/Entablature/,3],[/Wall/,4],[/Vault/,5],[/Apse/,6],[/Floor/,7]].find(([Q])=>Q.test(l.name));l.renderOrder=M?M[1]:3,l.userData.kind=c,l.userData.node=s.parent?.name||s.name||"",be.add(l),O.push(l)}let me=O.find((o)=>o.isInstancedMesh&&/^Column(?!Far)/.test(o.name)),ae=O.find((o)=>o.isInstancedMesh&&/^ColumnFar/.test(o.name)),E=null;if(me&&ae){E=new D(ae.geometry,ae.material,me.count+ae.count);for(let o=0;o<me.count;o++)me.getMatrixAt(o,ee),E.setMatrixAt(o,ee);for(let o=0;o<ae.count;o++)ae.getMatrixAt(o,ee),E.setMatrixAt(me.count+o,ee);E.instanceMatrix.needsUpdate=!0,E.computeBoundingSphere(),E.name="ColumnLow",E.userData.kind=ae.userData.kind,E.renderOrder=1,be.add(E),O.push(E)}let Ve=[],Z=new C;O.filter((o)=>o.userData.kind==="Flame").forEach((o)=>{o.geometry.computeBoundingBox();let s=o.isInstancedMesh?o.count:1;for(let c=0;c<s;c++){if(o.isInstancedMesh)o.getMatrixAt(c,ee);else ee.copy(o.matrix);Z.copy(o.geometry.boundingBox).applyMatrix4(ee);let l=new e((Z.min.x+Z.max.x)/2,Z.min.y,(Z.min.z+Z.max.z)/2);Ve.push({base:l,height:Z.max.y-Z.min.y}),oe.push(l.clone().setY(l.y+(Z.max.y-Z.min.y)*0.45))}be.remove(o)});for(let o=O.length-1;o>=0;o--)if(O[o].userData.kind==="Flame")O.splice(o,1);oe.sort((o,s)=>s.z-o.z);let Ye=oe.map(()=>0),de={},Pt=(o)=>{let s=o==="low"?"low":o;if(de[s])return de[s];let c=o!=="low";return de[s]={Limestone:b(st("limestone",o,L,{stone:qe,scale:0.42,roughness:0.82,tint:15918804,vertexColors:!0})),Marble:b(st("marble",o,L,{stone:He,scale:0.5,roughness:0.42,tint:16774890,vertexColors:!0,env:0.5})),FloorStone:b(st("floor",o,L,{map:ye,floor:!0,reflective:c,roughness:0.4})),Bronze:b(o==="low"?new j({color:5911072,emissive:1707013}):new u({color:10115636,metalness:1,roughness:0.38,envMapIntensity:0.9}))},de[s]},_e=b($t(L)),Ct=[[0,0],[0.09,0.05],[0.13,0.16],[0.1,0.3],[0.05,0.44],[0,0.55]].map(([o,s])=>new n(o/0.55,s/0.55)),pe=new D(b(new Ie(Ct,12)),_e,Ve.length);Ve.forEach(({base:o,height:s},c)=>{pe.setMatrixAt(c,ee.compose(o,new R,new e(s,s,s)))}),pe.instanceMatrix.needsUpdate=!0,pe.computeBoundingSphere(),pe.userData.kind="Flame",be.add(pe),O.push(pe);let zt=b(new h({color:new t(0.62,0.78,1).multiplyScalar(2.2),fog:!1})),At=(o)=>{let s=Pt(o);O.forEach((c)=>{let l=c.userData.kind;if(l==="Flame")c.material=_e;else if(l==="Glass")c.material=zt;else if(s[l])c.material=s[l]}),ct.forEach((c)=>{if(s[c.userData.kind])c.material=s[c.userData.kind];else if(c.userData.kind==="Flame")c.material=_e})},De=new v;De.scale.y=-1;let ct=[];O.forEach((o)=>{if(o===E)return;if(!["Flame","Marble","Bronze"].includes(o.userData.kind)&&!/Column|Pedestal|Plinth/.test(o.name))return;let s=o.clone();s.userData={...o.userData},De.add(s),ct.push(s)}),g.add(De);let Ze=new We(9413572,2759954,0);g.add(Ze);let U=new ne(12900095,0,30,0.34,0.55,1.2);U.position.copy(Nt),U.target.position.set(0,4,te+0.3);let ve=new ne(13162751,0,30,0.36,0.6,1.2);ve.position.set(1.4,18,we+2.4),ve.target.position.set(-0.3,0,we-0.6),g.add(U,U.target,ve,ve.target),U.shadow.mapSize.set(1024,1024),U.shadow.bias=-0.0006,U.shadow.camera.near=4,U.shadow.camera.far=22;let Ke=[],ut=(o,s,c,l,M,Q,Fe)=>{let se=new v;for(let ie=0;ie<4;ie++){let ce=b(It(Q+ie*1.3,Fe)),xe=new r(b(new P(l+ie*0.35,c)),ce);xe.rotation.y=ie*0.45,se.add(xe),Ke.push(ce)}return se.position.set(o,c/2,s),se.rotation.z=M,g.add(se),se};ut(0.2,we+0.9,12,1.6,0.12,0,12374271),ut(0.1,te+0.3,15,1.4,0.05,2,13162751);let Se=1100,K=new Float32Array(Se*3),Me=new Float32Array(Se);for(let o=0;o<Se;o++){let s=o%3===0;K[o*3]=d.randFloat(-2.4,2.4),K[o*3+1]=d.randFloat(0.1,s?11:9),K[o*3+2]=s?te+d.randFloat(-2.5,2.5):we+d.randFloat(-3,4),Me[o]=Math.random()}let Pe=b(new f);Pe.setAttribute("position",new m(K,3)),Pe.setAttribute("aSeed",new m(Me,1));let Be=b(Gt(F,A.getPixelRatio(),L)),ft=new J(Pe,Be);ft.frustumCulled=!1,g.add(ft);let Ft=oe.map((o,s)=>{let c=s===oe.length-1&&o.y>5,l=new Oe(b(new Te({map:F,color:16754789,transparent:!0,depthWrite:!1,blending:I,opacity:0})));return l.position.copy(o),l.scale.setScalar(c?2.6:1.5),g.add(l),l}),H=new v,Xe=new r(b(new P(0.42,0.42)),b(new h({map:F,color:16774114,transparent:!0,blending:I,depthWrite:!1,fog:!1}))),Je=new r(b(new P(1.8,1.8)),b(new h({map:F,color:14462334,transparent:!0,opacity:0.5,blending:I,depthWrite:!1,fog:!1})));H.add(Je,Xe),g.add(H);let Ce=48,X=new Float32Array(Ce*3),Ee=new Float32Array(Ce*3),ze=b(new f);ze.setAttribute("position",new m(X,3)),ze.setAttribute("color",new m(Ee,3));let Qe=b(new p({transparent:!0,depthWrite:!1,blending:I,vertexColors:!0,uniforms:{uMap:{value:F},uSize:{value:60*A.getPixelRatio()}},vertexShader:"uniform float uSize; varying vec3 vColor; void main() { vColor = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uSize / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D uMap; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, texture2D(uMap, gl_PointCoord).a); }"})),mt=new J(ze,Qe);mt.frustumCulled=!1,g.add(mt);let he=(o)=>-(q/2+o*q),dt=new Ge([Ut.clone(),new e(0.5,6.4,te+2),new e(0,3.6,he(8)+0.4),new e(-0.35,2.5,he(7)),new e(0.35,2.3,he(5)),new e(-0.3,2.2,he(3)),new e(0.2,2.1,he(1)),new e(-1.4,1.9,1.2),new e(-4.6,1.3,4.2)],!1,"centripetal",0.5),kt=(o)=>{let s=0,c=1/0;for(let l=0;l<=500;l++){let M=Math.abs(dt.getPointAt(l/500).z-o);if(M<c)c=M,s=l/500}return s},et=7,Lt=3,_t=et+Lt,pt=kt(he(0))+0.02,vt=b(new h({color:789258,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,fog:!1})),tt=new r(b(new P(4,4)),vt);tt.position.z=-0.2,tt.renderOrder=999,w.add(tt);let ht=b(new h({map:F,color:15983560,transparent:!0,opacity:0,blending:I,depthTest:!1,depthWrite:!1,fog:!1})),Ue=new r(b(new P(1.4,1.4)),ht);Ue.position.z=-0.25,Ue.renderOrder=1000,w.add(Ue),g.add(w);let ot=Se,Ne=V.tier,gt=(o)=>{Ne=o.tier;for(let l of[qe,He,ye]){let M=o.tier==="high"?l===ye?8:4:o.tier==="medium"&&l===ye?4:1;if(l.anisotropy!==M)l.anisotropy=M,l.needsUpdate=!0}let s=o.tier!=="low";if(At(o.tier),De.visible=s,E)E.visible=!s,me.visible=ae.visible=s;U.visible=ve.visible=s,Ze.visible=!0,g.environment=s?k():null,L.uniforms.uPools.value=s?0:1;let c=o.tier==="high";if(A.shadowMap.enabled!==c)A.shadowMap.enabled=c,Object.values(de).forEach((l)=>Object.values(l).forEach((M)=>{M.needsUpdate=!0}));U.castShadow=c,O.forEach((l)=>{let M=l.userData.kind;l.castShadow=c&&(M==="Marble"||/Column/.test(l.name)),l.receiveShadow=c&&(M==="FloorStone"||M==="Limestone")}),ot=Math.floor(Se*o.settings.particles),Pe.setDrawRange(0,ot),Ke.forEach((l,M)=>{l.visible=M%4<(o.tier==="low"?2:4)}),Be.uniforms.uSize.value=24*A.getPixelRatio(),Qe.uniforms.uSize.value=60*A.getPixelRatio()};gt(V);let ue=!1,Dt=(o,s)=>{if(w.aspect=o/s,ue=w.aspect<0.9,ue)w.setViewOffset(o,s,0,s*0.16,o,s);else w.setViewOffset(o,s,o*0.07,0,o,s);w.updateProjectionMatrix(),Be.uniforms.uSize.value=24*A.getPixelRatio(),Qe.uniforms.uSize.value=60*A.getPixelRatio()},ge=-1,N=0,Ot=()=>{if(ge<0)ge=N},Ae=(o,s=1.4)=>ge<0?0:d.clamp((N-ge-o)/s,0,1),xt=(o)=>1-Math.pow(1-o,3),wt=new e,at=0;return{scene:g,camera:w,update:(o,s)=>{N+=o,L.uniforms.uTime.value=N,at+=(s.progress-at)*Math.min(1,o*6);let c=at,l=c<0.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2,M=xt(Ae(0,3.4)),Q=xt(Ae(0,2.2));L.uniforms.uWake.value=Q,vt.opacity=1-Q;let Fe=ue?4.6:3.2,se=(ue?50:38)-l*(ue?5:4.5);if(Math.abs(w.fov-se)>0.01)w.fov=se,w.updateProjectionMatrix();w.position.set(Math.sin(N*0.09)*0.12+s.pointer.x*0.32,(ue?1.8:1.72)+Math.sin(N*0.13)*0.04-s.pointer.y*0.12+l*0.35+(1-M)*0.25,Fe-l*15.5+(1-M)*2.4),W.set(s.pointer.x*0.6,(ue?3.6:3.1)+l*1.4,-22),w.lookAt(W);let ie=oe.length;oe.forEach((x,T)=>{let nt=T===ie-1,rt=nt?Ae(1.9,0.8):Ae(0.35+T*0.12,0.6),bt=0.88+0.08*Math.sin(N*8.3+T*1.7)+0.05*Math.sin(N*13.1+T*3.1);Ye[T]=rt,L.uniforms.uTorches.value[T].set(x.x,x.y,x.z,rt*bt*(nt?7:3.2)),Ft[T].material.opacity=rt*(nt?0.85:0.6)*bt}),_e.uniforms.uLevel.value=Math.max(...Ye.slice(0,-1),0)*0.5+0.5*Ye[ie-1];let ce=Ae(0.9,2),xe=ce*(0.85+0.45*l);Ze.intensity=(Ne==="low"?1:0.55)*Q,L.uniforms.uFill.value.w=(Ne==="low"?1:0.7)*Q,U.intensity=420*xe,ve.intensity=260*ce*(1-0.3*l),U.target.position.x=-0.2+0.5*l,L.uniforms.uPoolA.value.w=0.55*ce*(1-0.3*l),L.uniforms.uPoolB.value.w=1.1*xe,Ke.forEach((x,T)=>{x.uniforms.uTime.value=N,x.uniforms.uStrength.value=T<4?0.16*ce*(1-0.3*l):0.2*xe}),Be.uniforms.uLevel.value=ce;for(let x=0;x<ot;x++){let T=x*3;if(K[T+1]+=o*(0.03+Me[x]*0.05)*(Me[x]>0.5?1:-0.6),K[T]+=Math.sin(N*0.25+Me[x]*50)*o*0.05,K[T+1]>11)K[T+1]=0.1;if(K[T+1]<0.1)K[T+1]=11}Pe.attributes.position.needsUpdate=!0;let yt=ge<0?-1:N-ge-2.6,fe=0,Re=0,$e=0;if(yt>=0){if($e=yt%_t,$e<et)Re=d.smootherstep($e/et,0,1),dt.getPointAt(Re,wt),H.position.copy(wt),fe=Math.min(1,$e/0.6)*(1-d.smoothstep(Re,pt,pt+0.07)),H.scale.setScalar(0.75+Re*0.6)}fe*=1-d.smoothstep(c,0.35,0.75),L.uniforms.uOrb.value.set(H.position.x,H.position.y,H.position.z,fe*3.2),H.visible=fe>0.01,Xe.material.opacity=fe,Je.material.opacity=fe*0.45,Xe.lookAt(w.position),Je.lookAt(w.position);for(let x=Ce-1;x>0;x--)X[x*3]=X[(x-1)*3],X[x*3+1]=X[(x-1)*3+1],X[x*3+2]=X[(x-1)*3+2];X[0]=H.position.x,X[1]=H.position.y,X[2]=H.position.z;for(let x=0;x<Ce;x++){let T=Math.pow(1-x/Ce,1.8)*fe*0.8;Ee[x*3]=T,Ee[x*3+1]=0.76*T,Ee[x*3+2]=0.5*T}ze.attributes.position.needsUpdate=!0,ze.attributes.color.needsUpdate=!0,ht.opacity=d.smoothstep(c,0.78,0.97)*0.55,Ue.scale.setScalar(1+d.smoothstep(c,0.78,1)*1.6)},resize:Dt,setTier:gt,dispose:()=>{ke.forEach((o)=>o.dispose?.()),Object.values(de).forEach((o)=>Object.values(o).forEach((s)=>s.dispose?.())),O.forEach((o)=>o.geometry.dispose())},ignite:Ot,debug:{torches:oe,get tier(){return Ne},advance(o){N+=o}},bloom:{strength:0.75,radius:0.55,threshold:0.86},finish:{vignette:0.48,grain:0.03}}}export{Yt as create};
