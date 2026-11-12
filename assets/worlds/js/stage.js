import{_,D,le,ce,he,ue,X,de,fe,pe,v,T,a,n,e,s,d,o,t,Y,u,f,m,l,Z,G,U,g,be,h,De,Q,B,Be,oe,Ge}from"./stage-82qjsrsf.js";var Ie,Me,re,Oe=(i,c)=>{for(var[p,b,r]of Ie||[])for(var M=[i],x=globalThis,P=x.document,F,C,N,S,A;C=M.pop();)if(!Me[C]&&(N=b[C])){Me[C]=1;for(S=1;S<N.length;S++)M.push(r[N[S]]);if(!c&&C!==i&&(F=P&&P.head)){if(re===void 0)re=(S=P.querySelector("meta[property=csp-nonce]"))&&(S.nonce||S.getAttribute("nonce"))||"";if(A=P.createElement("link"),A.rel="modulepreload",A.crossOrigin="",re)A.nonce=re;A.href=new x.URL(N[0],p),F.appendChild(A)}}},Ke=(i,c,p,b)=>{for(var r={},M=0;M<c.length;M++)r[c[M]]=p[M];(Ie||=[]).push([i,r,c]),Me||={},Oe(c[b],1)};Ke(import.meta.url,["zvvxv4ty","qaykmg3n","82qjsrsf"],[["./stage.js",2],["./strata-qaykmg3n.js",2],["./stage-82qjsrsf.js"]],0);
class we extends Y{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let i=new G;i.deleteAttribute("uv");let c=new h({side:_}),p=new h,b=new Q(16777215,900,28,2);b.position.set(0.418,16.199,0.3),this.add(b);let r=new l(i,c);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let M=new Z(i,p,6),x=new o;x.position.set(-10.906,2.009,1.846),x.rotation.set(0,-0.195,0),x.scale.set(2.328,7.905,4.651),x.updateMatrix(),M.setMatrixAt(0,x.matrix),x.position.set(-5.607,-0.754,-0.758),x.rotation.set(0,0.994,0),x.scale.set(1.97,1.534,3.955),x.updateMatrix(),M.setMatrixAt(1,x.matrix),x.position.set(6.167,0.857,7.803),x.rotation.set(0,0.561,0),x.scale.set(3.927,6.285,3.687),x.updateMatrix(),M.setMatrixAt(2,x.matrix),x.position.set(-2.017,0.018,6.124),x.rotation.set(0,0.333,0),x.scale.set(2.002,4.566,2.064),x.updateMatrix(),M.setMatrixAt(3,x.matrix),x.position.set(2.291,-0.756,-2.621),x.rotation.set(0,-0.286,0),x.scale.set(1.546,1.552,1.496),x.updateMatrix(),M.setMatrixAt(4,x.matrix),x.position.set(-2.193,-0.369,-5.547),x.rotation.set(0,0.516,0),x.scale.set(3.875,3.487,2.986),x.updateMatrix(),M.setMatrixAt(5,x.matrix),this.add(M);let P=new l(i,k(50));P.position.set(-16.116,14.37,8.208),P.scale.set(0.1,2.428,2.739),this.add(P);let F=new l(i,k(50));F.position.set(-16.109,18.021,-8.207),F.scale.set(0.1,2.425,2.751),this.add(F);let C=new l(i,k(17));C.position.set(14.904,12.198,-1.832),C.scale.set(0.15,4.265,6.331),this.add(C);let N=new l(i,k(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let S=new l(i,k(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,0.1),this.add(S);let A=new l(i,k(100));A.position.set(0,20,0),A.scale.set(1,0.1,1),this.add(A)}dispose(){let i=new Set;this.traverse((c)=>{if(c.isMesh)i.add(c.geometry),i.add(c.material)});for(let c of i)c.dispose()}}function k(i){return new De({color:0,emissive:16777215,emissiveIntensity:i})}var q={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class O{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Xe=new B(-1,1,1,-1,0,1);class ze extends f{constructor(){super();this.setAttribute("position",new u([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new u([0,2,0,0,2,0],2))}}var je=new ze;class V{constructor(i){this._mesh=new l(je,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,Xe)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class j extends O{constructor(i,c="tDiffuse"){super();if(this.textureID=c,this.uniforms=null,this.material=null,i instanceof g)this.uniforms=i.uniforms,this.material=i;else if(i)this.uniforms=U.clone(i.uniforms),this.material=new g({name:i.name!==void 0?i.name:"unspecified",defines:Object.assign({},i.defines),uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});this._fsQuad=new V(this.material)}render(i,c,p){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=p.texture;if(this._fsQuad.material=this.material,this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(c),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ae extends O{constructor(i,c){super();this.scene=i,this.camera=c,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(i,c,p){let b=i.getContext(),r=i.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let M,x;if(this.inverse)M=0,x=1;else M=1,x=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(b.REPLACE,b.REPLACE,b.REPLACE),r.buffers.stencil.setFunc(b.ALWAYS,M,4294967295),r.buffers.stencil.setClear(x),r.buffers.stencil.setLocked(!0),i.setRenderTarget(p),this.clear)i.clear();if(i.render(this.scene,this.camera),i.setRenderTarget(c),this.clear)i.clear();i.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(b.EQUAL,1,4294967295),r.buffers.stencil.setOp(b.KEEP,b.KEEP,b.KEEP),r.buffers.stencil.setLocked(!0)}}class Te extends O{constructor(){super();this.needsSwap=!1}render(i){i.state.buffers.stencil.setLocked(!1),i.state.buffers.stencil.setTest(!1)}}class _e{constructor(i,c){if(this.renderer=i,this._pixelRatio=i.getPixelRatio(),c===void 0){let p=i.getSize(new n);this._width=p.width,this._height=p.height,c=new d(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:v}),c.texture.name="EffectComposer.rt1"}else this._width=c.width,this._height=c.height;this.renderTarget1=c,this.renderTarget2=c.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new j(q),this.copyPass.material.blending=D,this.timer=new Be}swapBuffers(){let i=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=i}addPass(i){this.passes.push(i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(i,c){this.passes.splice(c,0,i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(i){let c=this.passes.indexOf(i);if(c!==-1)this.passes.splice(c,1)}isLastEnabledPass(i){for(let c=i+1;c<this.passes.length;c++)if(this.passes[c].enabled)return!1;return!0}render(i){if(this.timer.update(),i===void 0)i=this.timer.getDelta();let c=this.renderer.getRenderTarget(),p=!1;for(let b=0,r=this.passes.length;b<r;b++){let M=this.passes[b];if(M.enabled===!1)continue;if(M.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(b),M.render(this.renderer,this.writeBuffer,this.readBuffer,i,p),M.needsSwap){if(p){let x=this.renderer.getContext(),P=this.renderer.state.buffers.stencil;P.setFunc(x.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,i),P.setFunc(x.EQUAL,1,4294967295)}this.swapBuffers()}if(ae!==void 0){if(M instanceof ae)p=!0;else if(M instanceof Te)p=!1}}this.renderer.setRenderTarget(c)}reset(i){if(i===void 0){let c=this.renderer.getSize(new n);this._pixelRatio=this.renderer.getPixelRatio(),this._width=c.width,this._height=c.height,i=this.renderTarget1.clone(),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=i,this.renderTarget2=i.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(i,c){this._width=i,this._height=c;let p=this._width*this._pixelRatio,b=this._height*this._pixelRatio;this.renderTarget1.setSize(p,b),this.renderTarget2.setSize(p,b);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(p,b)}setPixelRatio(i){this._pixelRatio=i,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Se extends O{constructor(i,c,p=null,b=null,r=null){super();this.scene=i,this.camera=c,this.overrideMaterial=p,this.clearColor=b,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t}render(i,c,p){let b=i.autoClear;i.autoClear=!1;let r,M;if(this.overrideMaterial!==null)M=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)i.getClearColor(this._oldClearColor),i.setClearColor(this.clearColor,i.getClearAlpha());if(this.clearAlpha!==null)r=i.getClearAlpha(),i.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)i.clearDepth();if(i.setRenderTarget(this.renderToScreen?null:p),this.clear===!0)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);if(i.render(this.scene,this.camera),this.clearColor!==null)i.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)i.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=M;i.autoClear=b}}var Ve={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class H extends O{constructor(i,c=1,p,b){super();this.strength=c,this.radius=p,this.threshold=b,this.resolution=i!==void 0?new n(i.x,i.y):new n(256,256),this.clearColor=new t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),M=Math.round(this.resolution.y/2);this.renderTargetBright=new d(r,M,{type:v,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let C=0;C<this.nMips;C++){let N=new d(r,M,{type:v,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+C,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let S=new d(r,M,{type:v,depthBuffer:!1});S.texture.name="UnrealBloomPass.v"+C,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),r=Math.round(r/2),M=Math.round(M/2)}let x=Ve;this.highPassUniforms=U.clone(x.uniforms),this.highPassUniforms.luminosityThreshold.value=b,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new g({uniforms:this.highPassUniforms,vertexShader:x.vertexShader,fragmentShader:x.fragmentShader}),this.separableBlurMaterials=[];let P=[6,10,14,18,22];r=Math.round(this.resolution.x/2),M=Math.round(this.resolution.y/2);for(let C=0;C<this.nMips;C++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(P[C])),this.separableBlurMaterials[C].uniforms.invSize.value=new n(1/r,1/M),r=Math.round(r/2),M=Math.round(M/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=c,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let F=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=F,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=U.clone(q.uniforms),this.blendMaterial=new g({uniforms:this.copyUniforms,vertexShader:q.vertexShader,fragmentShader:q.fragmentShader,premultipliedAlpha:!0,blending:le,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t,this._oldClearAlpha=1,this._basic=new m,this._fsQuad=new V(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose();for(let i=0;i<this.separableBlurMaterials.length;i++)this.separableBlurMaterials[i].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(i,c){let p=Math.round(i/2),b=Math.round(c/2);this.renderTargetBright.setSize(p,b);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(p,b),this.renderTargetsVertical[r].setSize(p,b),this.separableBlurMaterials[r].uniforms.invSize.value=new n(1/p,1/b),p=Math.round(p/2),b=Math.round(b/2)}render(i,c,p,b,r){i.getClearColor(this._oldClearColor),this._oldClearAlpha=i.getClearAlpha();let M=i.autoClear;if(i.autoClear=!1,i.setClearColor(this.clearColor,0),r)i.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=p.texture,i.setRenderTarget(null),i.clear(),this._fsQuad.render(i);this.highPassUniforms.tDiffuse.value=p.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,i.setRenderTarget(this.renderTargetBright),i.clear(),this._fsQuad.render(i);let x=this.renderTargetBright;for(let P=0;P<this.nMips;P++)this._fsQuad.material=this.separableBlurMaterials[P],this.separableBlurMaterials[P].uniforms.colorTexture.value=x.texture,this.separableBlurMaterials[P].uniforms.direction.value=H.BlurDirectionX,i.setRenderTarget(this.renderTargetsHorizontal[P]),i.clear(),this._fsQuad.render(i),this.separableBlurMaterials[P].uniforms.colorTexture.value=this.renderTargetsHorizontal[P].texture,this.separableBlurMaterials[P].uniforms.direction.value=H.BlurDirectionY,i.setRenderTarget(this.renderTargetsVertical[P]),i.clear(),this._fsQuad.render(i),x=this.renderTargetsVertical[P];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,i.setRenderTarget(this.renderTargetsHorizontal[0]),i.clear(),this._fsQuad.render(i),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)i.state.buffers.stencil.setTest(!0);if(this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else i.setRenderTarget(p),this._fsQuad.render(i);i.setClearColor(this._oldClearColor,this._oldClearAlpha),i.autoClear=M}_getSeparableBlurMaterial(i){let c=[],p=i/3;for(let M=0;M<i;M++)c.push(0.39894*Math.exp(-0.5*M*M/(p*p))/p);let b=[],r=[];for(let M=1;M<i;M+=2){let x=c[M],P=M+1<i?c[M+1]:0,F=x+P;b.push((M*x+(M+1)*P)/F),r.push(F)}return new g({defines:{KERNEL_PAIRS:b.length},uniforms:{colorTexture:{value:null},invSize:{value:new n(0.5,0.5)},direction:{value:new n(0.5,0.5)},centerWeight:{value:c[0]},gaussianOffsets:{value:b},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(i){return new g({defines:{NUM_MIPS:i},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}H.BlurDirectionX=new n(1,0);H.BlurDirectionY=new n(0,1);var J={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ce extends O{constructor(){super();this.isOutputPass=!0,this.uniforms=U.clone(J.uniforms),this.material=new be({name:J.name,uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader}),this._fsQuad=new V(this.material),this._outputColorSpace=null,this._toneMapping=null}render(i,c,p){if(this.uniforms.tDiffuse.value=p.texture,this.uniforms.toneMappingExposure.value=i.toneMappingExposure,this._outputColorSpace!==i.outputColorSpace||this._toneMapping!==i.toneMapping){if(this._outputColorSpace=i.outputColorSpace,this._toneMapping=i.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===a)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ce)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===he)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===ue)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===X)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===fe)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===pe)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===de)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(c),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var ee=["still","low","medium","high"],Pe={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Qe({gpu:i="",coarse:c=!1,width:p=1440,memory:b=8,cores:r=8,override:M=null}={}){if(M&&ee.includes(M))return M;if(/swiftshader|llvmpipe|software|basic render/i.test(i))return"still";if(c&&p<760)return"low";if(b&&b<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(i))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(i))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(i)||b<=4||r<=4)return"medium";return"high"}function He({slowMs:i=22,verySlowMs:c=40,window:p=90,warmup:b=45}={}){let r=[],M=b;return{sample(x,P){if(M>0)return M--,null;if(r.push(x),r.length<p)return null;let F=r.reduce((N,S)=>N+S,0)/r.length;r.length=0;let C=ee.indexOf(P);if(P==="low"&&F>c)return"still";if(F>i&&C>1)return ee[C-1];return null},reset(){r.length=0,M=b}}}var Ye={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function Je(){if(document.readyState==="loading")await new Promise((i)=>document.addEventListener("DOMContentLoaded",i,{once:!0}));if(K.dataset.introState!=="loading")return;return new Promise((i)=>{addEventListener("portfolio:intro-complete",i,{once:!0}),setTimeout(i,9000)})}var We=()=>new Promise((i)=>requestAnimationFrame(()=>i()));async function Ze(i,c,p,b){let{scene:r,camera:M}=c,x=[];r.traverse((S)=>{if((S.isMesh||S.isPoints||S.isSprite)&&S.material)x.push(S)});let P=(S)=>`${S.type}|${S.name}|${S.vertexShader?.length||0}|${S.fragmentShader?.length||0}|${S.customProgramCacheKey?.()||""}`,F=new Map;for(let S of x){let A=P(S.material);if(!F.has(A))F.set(A,S)}let C=x.map((S)=>S.visible),N=i.getScissorTest();i.setScissorTest(!0),i.setScissor(0,0,1,1);try{for(let S of F.values())x.forEach((A)=>{A.visible=A===S}),i.setRenderTarget(p),i.render(r,M),i.setRenderTarget(null),await We();if(x.forEach((S,A)=>{S.visible=C[A]}),b)b.render(0.016),await We()}finally{x.forEach((S,A)=>{S.visible=C[A]}),i.setScissorTest(N),i.setScissor(0,0,i.domElement.width,i.domElement.height)}return F.size}var Ee={strata:{host:"#dimension .system-object",section:"#dimension",load:()=>(Oe("qaykmg3n"),import("./strata-qaykmg3n.js")),prefetch:!0}},K=document.documentElement,Re=new URLSearchParams(location.search);function et(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Re.get("motion")==="off"||K.classList.contains("motion-off")}function tt(i){try{let c=i.getExtension("WEBGL_debug_renderer_info");return c?String(i.getParameter(c.UNMASKED_RENDERER_WEBGL)):String(i.getParameter(i.RENDERER))}catch{return""}}function it(){if(et())return;let i={boot:Math.round(performance.now())},c=(w)=>{i[w]=Math.round(performance.now())},p=new Ge({antialias:!0,alpha:!1,powerPreference:"high-performance"}),b=p.getContext(),r=Qe({gpu:tt(b),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Re.get("tier")}),M=ee.includes(Re.get("tier"));if(K.dataset.worldTier=r,r==="still"){p.dispose();return}p.outputColorSpace=T,p.toneMapping=X,p.toneMappingExposure=1;let x=p.domElement;x.className="world-canvas",x.setAttribute("aria-hidden","true"),x.tabIndex=-1;let P=null,F=()=>{if(!P){let w=new oe(p);P=w.fromScene(new we,0.04).texture,w.dispose(),c("environment")}return P},C={tier:r,settings:Pe[r],pointer:new n,pointerTarget:new n,progress:0},N=new Map,S=He(),A=0,E=null,L=null,te=null,z=null,Ae=!1,W=0,ie=!1,ne=()=>{if(!E)return;let{width:w,height:R}=E.host.getBoundingClientRect();if(!w||!R)return;if(p.setPixelRatio(Math.min(devicePixelRatio||1,C.settings.dpr)),p.setSize(w,R,!1),E.world.resize(w,R,C),L){L.setPixelRatio(p.getPixelRatio()),L.setSize(w,R);let y=p.getPixelRatio()*C.settings.bloomScale;te?.setSize(Math.max(64,Math.round(w*y)),Math.max(64,Math.round(R*y)))}},ye=()=>{if(L?.dispose(),L=null,te=null,z=null,!E||!C.settings.bloom)return;L=new _e(p),L.addPass(new Se(E.world.scene,E.world.camera));let w=E.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};te=new H(new n(256,256),w.strength,w.radius,w.threshold),L.addPass(te),L.addPass(new Ce);let R=E.world.finish;if(R)z=new j(Ye),z.uniforms.uVignette.value=R.vignette,z.uniforms.uGrain.value=R.grain,L.addPass(z)},me=(w)=>{if(w===r)return;if(r=w,K.dataset.worldTier=r,r==="still"){se(),ve(),x.remove();return}if(C.tier=r,C.settings=Pe[r],S.reset(),E)E.world.setTier?.(C),E.world.tierApplied=r;ye(),ne()},Fe=(w)=>{if(C.pointer.lerp(C.pointerTarget,Math.min(1,w*3)),E.section){let R=E.section.getBoundingClientRect();C.progress=Math.min(1,Math.max(0,-R.top/Math.max(1,R.height)))}if(E.world.update(w,C),z)z.uniforms.uTime.value+=w;if(L)L.render(w);else p.render(E.world.scene,E.world.camera)},Ue=()=>{if(W=0,!E||!ie||document.hidden)return;let w=performance.now(),R=Math.min(0.05,(w-A)/1000);A=w;let y=performance.now();Fe(R);let I=M?null:S.sample(Math.max(R*1000,performance.now()-y),r);if(I)me(I);if(r!=="still")W=requestAnimationFrame(Ue)},ge=()=>{if(!W&&E&&ie&&Ae)A=performance.now(),W=requestAnimationFrame(Ue)},se=()=>{cancelAnimationFrame(W),W=0},ve=()=>{if(!E)return;E.host.classList.remove("world-live"),E.section?.classList.remove("world-live"),E=null},xe=new Map;function Ne(w){if(!xe.has(w))xe.set(w,(async()=>{let R=await Ee[w].load();c(`${w}:module`);let y=await R.create({renderer:p,getEnvironment:F,state:C});c(`${w}:created`);try{await p.compileAsync(y.scene,y.camera)}catch{}return c(`${w}:compiled`),y.tierApplied=r,N.set(w,y),y})());return xe.get(w)}async function ke(w){if(E?.name===w)return;let R=Ee[w],y=document.querySelector(R.host);if(!y)return;let I=await Ne(w);if(I.tierApplied!==r)I.setTier?.(C),I.tierApplied=r;if(r==="still")return;if(ve(),E={name:w,world:I,host:y,section:document.querySelector(R.section)},y.prepend(x),ye(),ne(),S.reset(),!I.warmed){if(i[`${w}:warm-programs`]=await Ze(p,I,L?L.readBuffer:null,L),I.warmed=!0,c(`${w}:warmed`),E?.name!==w)return}if(Fe(0.016),c(`${w}:first-frame`),await Je(),c(`${w}:intro-settled`),E?.name!==w)return;Ae=!0,requestAnimationFrame(()=>{y.classList.add("world-live"),E?.section?.classList.add("world-live"),E?.world.ignite?.(),c(`${w}:revealed`)}),ge()}let $e=new IntersectionObserver((w)=>{w.forEach((R)=>{let y=R.target.dataset.world;if(R.isIntersecting)ie=!0,ke(y).catch((I)=>{K.dataset.worldError=String(I?.message||I).slice(0,120)}),ge();else if(E?.name===y)ie=!1,se()})},{rootMargin:"80px 0px"}),qe=window.requestIdleCallback?(w)=>requestIdleCallback(w,{timeout:2500}):(w)=>setTimeout(w,300),Le=new IntersectionObserver((w)=>{w.forEach((R)=>{if(!R.isIntersecting)return;Le.unobserve(R.target),qe(()=>{if(r!=="still")Ne(R.target.dataset.world).catch(()=>{})})})},{rootMargin:"150% 0px"});Object.entries(Ee).forEach(([w,R])=>{let y=document.querySelector(R.section);if(!y)return;if(y.dataset.world=w,$e.observe(y),R.prefetch)Le.observe(y)}),addEventListener("pointermove",(w)=>{C.pointerTarget.set(w.clientX/innerWidth*2-1,w.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",ne,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)ge();else se()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(w)=>{if(w.matches)me("still")}),x.addEventListener("webglcontextlost",(w)=>{w.preventDefault(),se(),ve(),x.remove(),K.dataset.worldTier="still"}),window.__worldStage={get tier(){return r},get active(){return E?.name||null},setTier:me,timings:i,get world(){return E?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{it()}catch(i){document.documentElement.dataset.worldError=String(i?.message||i).slice(0,120)}
