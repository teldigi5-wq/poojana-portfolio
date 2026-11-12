import{u,x,I,P,L,N,b,D,U,F,d,y,s,t,e,i,c,o,n,T,r,f,_,a,Y,l,v,h,W,g,Z,K,R,Q,C,j}from"./stage-gbjw0g6q.js";var Oe,_e,ge,ze=(m,M)=>{for(var[w,B,p]of Oe||[])for(var E=[m],S=globalThis,G=S.document,X,z,J,O,k;z=E.pop();)if(!_e[z]&&(J=B[z])){_e[z]=1;for(O=1;O<J.length;O++)E.push(p[J[O]]);if(!M&&z!==m&&(X=G&&G.head)){if(ge===void 0)ge=(O=G.querySelector("meta[property=csp-nonce]"))&&(O.nonce||O.getAttribute("nonce"))||"";if(k=G.createElement("link"),k.rel="modulepreload",k.crossOrigin="",ge)k.nonce=ge;k.href=new S.URL(J[0],w),X.appendChild(k)}}},Ke=(m,M,w,B)=>{for(var p={},E=0;E<M.length;E++)p[M[E]]=w[E];(Oe||=[]).push([m,p,M]),_e||={},ze(M[B],1)};Ke(import.meta.url,["hgzk304w","w2d2v86y","gbjw0g6q"],[["./stage.js",2],["./strata-w2d2v86y.js",2],["./stage-gbjw0g6q.js"]],0);
class Se extends T{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let m=new l;m.deleteAttribute("uv");let M=new g({side:u}),w=new g,B=new K(16777215,900,28,2);B.position.set(0.418,16.199,0.3),this.add(B);let p=new a(m,M);p.position.set(-0.757,13.219,0.717),p.scale.set(31.713,28.305,28.591),this.add(p);let E=new Y(m,w,6),S=new o;S.position.set(-10.906,2.009,1.846),S.rotation.set(0,-0.195,0),S.scale.set(2.328,7.905,4.651),S.updateMatrix(),E.setMatrixAt(0,S.matrix),S.position.set(-5.607,-0.754,-0.758),S.rotation.set(0,0.994,0),S.scale.set(1.97,1.534,3.955),S.updateMatrix(),E.setMatrixAt(1,S.matrix),S.position.set(6.167,0.857,7.803),S.rotation.set(0,0.561,0),S.scale.set(3.927,6.285,3.687),S.updateMatrix(),E.setMatrixAt(2,S.matrix),S.position.set(-2.017,0.018,6.124),S.rotation.set(0,0.333,0),S.scale.set(2.002,4.566,2.064),S.updateMatrix(),E.setMatrixAt(3,S.matrix),S.position.set(2.291,-0.756,-2.621),S.rotation.set(0,-0.286,0),S.scale.set(1.546,1.552,1.496),S.updateMatrix(),E.setMatrixAt(4,S.matrix),S.position.set(-2.193,-0.369,-5.547),S.rotation.set(0,0.516,0),S.scale.set(3.875,3.487,2.986),S.updateMatrix(),E.setMatrixAt(5,S.matrix),this.add(E);let G=new a(m,ne(50));G.position.set(-16.116,14.37,8.208),G.scale.set(0.1,2.428,2.739),this.add(G);let X=new a(m,ne(50));X.position.set(-16.109,18.021,-8.207),X.scale.set(0.1,2.425,2.751),this.add(X);let z=new a(m,ne(17));z.position.set(14.904,12.198,-1.832),z.scale.set(0.15,4.265,6.331),this.add(z);let J=new a(m,ne(43));J.position.set(-0.462,8.89,14.52),J.scale.set(4.38,5.441,0.088),this.add(J);let O=new a(m,ne(20));O.position.set(3.235,11.486,-12.541),O.scale.set(2.5,2,0.1),this.add(O);let k=new a(m,ne(100));k.position.set(0,20,0),k.scale.set(1,0.1,1),this.add(k)}dispose(){let m=new Set;this.traverse((M)=>{if(M.isMesh)m.add(M.geometry),m.add(M.material)});for(let M of m)M.dispose()}}function ne(m){return new Z({color:0,emissive:16777215,emissiveIntensity:m})}var le={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ie{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Xe=new R(-1,1,1,-1,0,1);class Ge extends f{constructor(){super();this.setAttribute("position",new r([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new r([0,2,0,0,2,0],2))}}var je=new Ge;class re{constructor(m){this._mesh=new a(je,m)}dispose(){this._mesh.geometry.dispose()}render(m){m.render(this._mesh,Xe)}get material(){return this._mesh.material}set material(m){this._mesh.material=m}}class he extends ie{constructor(m,M="tDiffuse"){super();if(this.textureID=M,this.uniforms=null,this.material=null,m instanceof h)this.uniforms=m.uniforms,this.material=m;else if(m)this.uniforms=v.clone(m.uniforms),this.material=new h({name:m.name!==void 0?m.name:"unspecified",defines:Object.assign({},m.defines),uniforms:this.uniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader});this._fsQuad=new re(this.material)}render(m,M,w){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=w.texture;if(this._fsQuad.material=this.material,this.renderToScreen)m.setRenderTarget(null),this._fsQuad.render(m);else{if(m.setRenderTarget(M),this.clear)m.clear(m.autoClearColor,m.autoClearDepth,m.autoClearStencil);this._fsQuad.render(m)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ve extends ie{constructor(m,M){super();this.scene=m,this.camera=M,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(m,M,w){let B=m.getContext(),p=m.state;p.buffers.color.setMask(!1),p.buffers.depth.setMask(!1),p.buffers.color.setLocked(!0),p.buffers.depth.setLocked(!0);let E,S;if(this.inverse)E=0,S=1;else E=1,S=0;if(p.buffers.stencil.setTest(!0),p.buffers.stencil.setOp(B.REPLACE,B.REPLACE,B.REPLACE),p.buffers.stencil.setFunc(B.ALWAYS,E,4294967295),p.buffers.stencil.setClear(S),p.buffers.stencil.setLocked(!0),m.setRenderTarget(w),this.clear)m.clear();if(m.render(this.scene,this.camera),m.setRenderTarget(M),this.clear)m.clear();m.render(this.scene,this.camera),p.buffers.color.setLocked(!1),p.buffers.depth.setLocked(!1),p.buffers.color.setMask(!0),p.buffers.depth.setMask(!0),p.buffers.stencil.setLocked(!1),p.buffers.stencil.setFunc(B.EQUAL,1,4294967295),p.buffers.stencil.setOp(B.KEEP,B.KEEP,B.KEEP),p.buffers.stencil.setLocked(!0)}}class Ce extends ie{constructor(){super();this.needsSwap=!1}render(m){m.state.buffers.stencil.setLocked(!1),m.state.buffers.stencil.setTest(!1)}}class Pe{constructor(m,M){if(this.renderer=m,this._pixelRatio=m.getPixelRatio(),M===void 0){let w=m.getSize(new t);this._width=w.width,this._height=w.height,M=new c(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:d}),M.texture.name="EffectComposer.rt1"}else this._width=M.width,this._height=M.height;this.renderTarget1=M,this.renderTarget2=M.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new he(le),this.copyPass.material.blending=x,this.timer=new Q}swapBuffers(){let m=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=m}addPass(m){this.passes.push(m),m.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(m,M){this.passes.splice(M,0,m),m.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(m){let M=this.passes.indexOf(m);if(M!==-1)this.passes.splice(M,1)}isLastEnabledPass(m){for(let M=m+1;M<this.passes.length;M++)if(this.passes[M].enabled)return!1;return!0}render(m){if(this.timer.update(),m===void 0)m=this.timer.getDelta();let M=this.renderer.getRenderTarget(),w=!1;for(let B=0,p=this.passes.length;B<p;B++){let E=this.passes[B];if(E.enabled===!1)continue;if(E.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(B),E.render(this.renderer,this.writeBuffer,this.readBuffer,m,w),E.needsSwap){if(w){let S=this.renderer.getContext(),G=this.renderer.state.buffers.stencil;G.setFunc(S.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,m),G.setFunc(S.EQUAL,1,4294967295)}this.swapBuffers()}if(ve!==void 0){if(E instanceof ve)w=!0;else if(E instanceof Ce)w=!1}}this.renderer.setRenderTarget(M)}reset(m){if(m===void 0){let M=this.renderer.getSize(new t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=M.width,this._height=M.height,m=this.renderTarget1.clone(),m.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=m,this.renderTarget2=m.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(m,M){this._width=m,this._height=M;let w=this._width*this._pixelRatio,B=this._height*this._pixelRatio;this.renderTarget1.setSize(w,B),this.renderTarget2.setSize(w,B);for(let p=0;p<this.passes.length;p++)this.passes[p].setSize(w,B)}setPixelRatio(m){this._pixelRatio=m,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ee extends ie{constructor(m,M,w=null,B=null,p=null){super();this.scene=m,this.camera=M,this.overrideMaterial=w,this.clearColor=B,this.clearAlpha=p,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new n}render(m,M,w){let B=m.autoClear;m.autoClear=!1;let p,E;if(this.overrideMaterial!==null)E=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)m.getClearColor(this._oldClearColor),m.setClearColor(this.clearColor,m.getClearAlpha());if(this.clearAlpha!==null)p=m.getClearAlpha(),m.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)m.clearDepth();if(m.setRenderTarget(this.renderToScreen?null:w),this.clear===!0)m.clear(m.autoClearColor,m.autoClearDepth,m.autoClearStencil);if(m.render(this.scene,this.camera),this.clearColor!==null)m.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)m.setClearAlpha(p);if(this.overrideMaterial!==null)this.scene.overrideMaterial=E;m.autoClear=B}}var Ve={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new n(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class oe extends ie{constructor(m,M=1,w,B){super();this.strength=M,this.radius=w,this.threshold=B,this.resolution=m!==void 0?new t(m.x,m.y):new t(256,256),this.clearColor=new n(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let p=Math.round(this.resolution.x/2),E=Math.round(this.resolution.y/2);this.renderTargetBright=new c(p,E,{type:d,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let z=0;z<this.nMips;z++){let J=new c(p,E,{type:d,depthBuffer:!1});J.texture.name="UnrealBloomPass.h"+z,J.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(J);let O=new c(p,E,{type:d,depthBuffer:!1});O.texture.name="UnrealBloomPass.v"+z,O.texture.generateMipmaps=!1,this.renderTargetsVertical.push(O),p=Math.round(p/2),E=Math.round(E/2)}let S=Ve;this.highPassUniforms=v.clone(S.uniforms),this.highPassUniforms.luminosityThreshold.value=B,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new h({uniforms:this.highPassUniforms,vertexShader:S.vertexShader,fragmentShader:S.fragmentShader}),this.separableBlurMaterials=[];let G=[6,10,14,18,22];p=Math.round(this.resolution.x/2),E=Math.round(this.resolution.y/2);for(let z=0;z<this.nMips;z++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(G[z])),this.separableBlurMaterials[z].uniforms.invSize.value=new t(1/p,1/E),p=Math.round(p/2),E=Math.round(E/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=M,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let X=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=X,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=v.clone(le.uniforms),this.blendMaterial=new h({uniforms:this.copyUniforms,vertexShader:le.vertexShader,fragmentShader:le.fragmentShader,premultipliedAlpha:!0,blending:I,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new n,this._oldClearAlpha=1,this._basic=new _,this._fsQuad=new re(null)}dispose(){for(let m=0;m<this.renderTargetsHorizontal.length;m++)this.renderTargetsHorizontal[m].dispose();for(let m=0;m<this.renderTargetsVertical.length;m++)this.renderTargetsVertical[m].dispose();this.renderTargetBright.dispose();for(let m=0;m<this.separableBlurMaterials.length;m++)this.separableBlurMaterials[m].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(m,M){let w=Math.round(m/2),B=Math.round(M/2);this.renderTargetBright.setSize(w,B);for(let p=0;p<this.nMips;p++)this.renderTargetsHorizontal[p].setSize(w,B),this.renderTargetsVertical[p].setSize(w,B),this.separableBlurMaterials[p].uniforms.invSize.value=new t(1/w,1/B),w=Math.round(w/2),B=Math.round(B/2)}render(m,M,w,B,p){m.getClearColor(this._oldClearColor),this._oldClearAlpha=m.getClearAlpha();let E=m.autoClear;if(m.autoClear=!1,m.setClearColor(this.clearColor,0),p)m.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=w.texture,m.setRenderTarget(null),m.clear(),this._fsQuad.render(m);this.highPassUniforms.tDiffuse.value=w.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,m.setRenderTarget(this.renderTargetBright),m.clear(),this._fsQuad.render(m);let S=this.renderTargetBright;for(let G=0;G<this.nMips;G++)this._fsQuad.material=this.separableBlurMaterials[G],this.separableBlurMaterials[G].uniforms.colorTexture.value=S.texture,this.separableBlurMaterials[G].uniforms.direction.value=oe.BlurDirectionX,m.setRenderTarget(this.renderTargetsHorizontal[G]),m.clear(),this._fsQuad.render(m),this.separableBlurMaterials[G].uniforms.colorTexture.value=this.renderTargetsHorizontal[G].texture,this.separableBlurMaterials[G].uniforms.direction.value=oe.BlurDirectionY,m.setRenderTarget(this.renderTargetsVertical[G]),m.clear(),this._fsQuad.render(m),S=this.renderTargetsVertical[G];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,m.setRenderTarget(this.renderTargetsHorizontal[0]),m.clear(),this._fsQuad.render(m),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,p)m.state.buffers.stencil.setTest(!0);if(this.renderToScreen)m.setRenderTarget(null),this._fsQuad.render(m);else m.setRenderTarget(w),this._fsQuad.render(m);m.setClearColor(this._oldClearColor,this._oldClearAlpha),m.autoClear=E}_getSeparableBlurMaterial(m){let M=[],w=m/3;for(let E=0;E<m;E++)M.push(0.39894*Math.exp(-0.5*E*E/(w*w))/w);let B=[],p=[];for(let E=1;E<m;E+=2){let S=M[E],G=E+1<m?M[E+1]:0,X=S+G;B.push((E*S+(E+1)*G)/X),p.push(X)}return new h({defines:{KERNEL_PAIRS:B.length},uniforms:{colorTexture:{value:null},invSize:{value:new t(0.5,0.5)},direction:{value:new t(0.5,0.5)},centerWeight:{value:M[0]},gaussianOffsets:{value:B},gaussianWeights:{value:p}},vertexShader:`

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

				}`})}_getCompositeMaterial(m){return new h({defines:{NUM_MIPS:m},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}oe.BlurDirectionX=new t(1,0);oe.BlurDirectionY=new t(0,1);var fe={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Re extends ie{constructor(){super();this.isOutputPass=!0,this.uniforms=v.clone(fe.uniforms),this.material=new W({name:fe.name,uniforms:this.uniforms,vertexShader:fe.vertexShader,fragmentShader:fe.fragmentShader}),this._fsQuad=new re(this.material),this._outputColorSpace=null,this._toneMapping=null}render(m,M,w){if(this.uniforms.tDiffuse.value=w.texture,this.uniforms.toneMappingExposure.value=m.toneMappingExposure,this._outputColorSpace!==m.outputColorSpace||this._toneMapping!==m.toneMapping){if(this._outputColorSpace=m.outputColorSpace,this._toneMapping=m.toneMapping,this.material.defines={},i.getTransfer(this._outputColorSpace)===s)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===P)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===L)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===N)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===b)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===U)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===F)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===D)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)m.setRenderTarget(null),this._fsQuad.render(m);else{if(m.setRenderTarget(M),this.clear)m.clear(m.autoClearColor,m.autoClearDepth,m.autoClearStencil);this._fsQuad.render(m)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var ce=["still","low","medium","high"],Ae={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Qe({gpu:m="",coarse:M=!1,width:w=1440,memory:B=8,cores:p=8,override:E=null}={}){if(E&&ce.includes(E))return E;if(/swiftshader|llvmpipe|software|basic render/i.test(m))return"still";if(M&&w<760)return"low";if(B&&B<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(m))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(m))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(m)||B<=4||p<=4)return"medium";return"high"}function He({slowMs:m=22,verySlowMs:M=40,window:w=90,warmup:B=45}={}){let p=[],E=B;return{sample(S,G){if(E>0)return E--,null;if(p.push(S),p.length<w)return null;let X=p.reduce((J,O)=>J+O,0)/p.length;p.length=0;let z=ce.indexOf(G);if(G==="low"&&X>M)return"still";if(X>m&&z>1)return ce[z-1];return null},reset(){p.length=0,E=B}}}var Ye={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function Je(){if(document.readyState==="loading")await new Promise((m)=>document.addEventListener("DOMContentLoaded",m,{once:!0}));if(ue.dataset.introState!=="loading")return;return new Promise((m)=>{addEventListener("portfolio:intro-complete",m,{once:!0}),setTimeout(m,9000)})}var We=()=>new Promise((m)=>requestAnimationFrame(()=>m()));async function Ze(m,M,w,B){let{scene:p,camera:E}=M,S=[];p.traverse((O)=>{if((O.isMesh||O.isPoints||O.isSprite)&&O.material)S.push(O)});let G=(O)=>`${O.type}|${O.name}|${O.vertexShader?.length||0}|${O.fragmentShader?.length||0}|${O.customProgramCacheKey?.()||""}`,X=new Map;for(let O of S){let k=G(O.material);if(!X.has(k))X.set(k,O)}let z=S.map((O)=>O.visible),J=m.getScissorTest();m.setScissorTest(!0),m.setScissor(0,0,1,1);try{for(let O of X.values())S.forEach((k)=>{k.visible=k===O}),m.setRenderTarget(w),m.render(p,E),m.setRenderTarget(null),await We();if(S.forEach((O,k)=>{O.visible=z[k]}),B)B.render(0.016),await We()}finally{S.forEach((O,k)=>{O.visible=z[k]}),m.setScissorTest(J),m.setScissor(0,0,m.domElement.width,m.domElement.height)}return X.size}var ye={strata:{host:"#dimension .system-object",section:"#dimension",load:()=>(ze("w2d2v86y"),import("./strata-w2d2v86y.js")),prefetch:!0}},ue=document.documentElement,Fe=new URLSearchParams(location.search);function et(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Fe.get("motion")==="off"||ue.classList.contains("motion-off")}function tt(m){try{let M=m.getExtension("WEBGL_debug_renderer_info");return M?String(m.getParameter(M.UNMASKED_RENDERER_WEBGL)):String(m.getParameter(m.RENDERER))}catch{return""}}function it(){if(et())return;let m={boot:Math.round(performance.now())},M=(A)=>{m[A]=Math.round(performance.now())},w=new j({antialias:!0,alpha:!1,powerPreference:"high-performance"}),B=w.getContext(),p=Qe({gpu:tt(B),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Fe.get("tier")}),E=ce.includes(Fe.get("tier"));if(ue.dataset.worldTier=p,p==="still"){w.dispose();return}w.outputColorSpace=y,w.toneMapping=b,w.toneMappingExposure=1;let S=w.domElement;S.className="world-canvas",S.setAttribute("aria-hidden","true"),S.tabIndex=-1;let G=null,X=()=>{if(!G){let A=new C(w);G=A.fromScene(new Se,0.04).texture,A.dispose(),M("environment")}return G},z={tier:p,settings:Ae[p],pointer:new t,pointerTarget:new t,progress:0},J=new Map,O=He(),k=0,V=null,ee=null,de=null,se=null,Be=!1,ae=0,me=!1,xe=()=>{if(!V)return;let{width:A,height:H}=V.host.getBoundingClientRect();if(!A||!H)return;if(w.setPixelRatio(Math.min(devicePixelRatio||1,z.settings.dpr)),w.setSize(A,H,!1),V.world.resize(A,H,z),ee){ee.setPixelRatio(w.getPixelRatio()),ee.setSize(A,H);let q=w.getPixelRatio()*z.settings.bloomScale;de?.setSize(Math.max(64,Math.round(A*q)),Math.max(64,Math.round(H*q)))}},De=()=>{if(ee?.dispose(),ee=null,de=null,se=null,!V||!z.settings.bloom)return;ee=new Pe(w),ee.addPass(new Ee(V.world.scene,V.world.camera));let A=V.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};de=new oe(new t(256,256),A.strength,A.radius,A.threshold),ee.addPass(de),ee.addPass(new Re);let H=V.world.finish;if(H)se=new he(Ye),se.uniforms.uVignette.value=H.vignette,se.uniforms.uGrain.value=H.grain,ee.addPass(se)},Me=(A)=>{if(A===p)return;if(p=A,ue.dataset.worldTier=p,p==="still"){pe(),Te(),S.remove();return}if(z.tier=p,z.settings=Ae[p],O.reset(),V)V.world.setTier?.(z),V.world.tierApplied=p;De(),xe()},Ue=(A)=>{if(z.pointer.lerp(z.pointerTarget,Math.min(1,A*3)),V.section){let H=V.section.getBoundingClientRect();z.progress=Math.min(1,Math.max(0,-H.top/Math.max(1,H.height)))}if(V.world.update(A,z),se)se.uniforms.uTime.value+=A;if(ee)ee.render(A);else w.render(V.world.scene,V.world.camera)},Ne=()=>{if(ae=0,!V||!me||document.hidden)return;let A=performance.now(),H=Math.min(0.05,(A-k)/1000);k=A;let q=performance.now();Ue(H);let te=E?null:O.sample(Math.max(H*1000,performance.now()-q),p);if(te)Me(te);if(p!=="still")ae=requestAnimationFrame(Ne)},we=()=>{if(!ae&&V&&me&&Be)k=performance.now(),ae=requestAnimationFrame(Ne)},pe=()=>{cancelAnimationFrame(ae),ae=0},Te=()=>{if(!V)return;V.host.classList.remove("world-live"),V.section?.classList.remove("world-live"),V=null},be=new Map;function Le(A){if(!be.has(A))be.set(A,(async()=>{let H=await ye[A].load();M(`${A}:module`);let q=await H.create({renderer:w,getEnvironment:X,state:z});M(`${A}:created`);try{await w.compileAsync(q.scene,q.camera)}catch{}return M(`${A}:compiled`),q.tierApplied=p,J.set(A,q),q})());return be.get(A)}async function ke(A){if(V?.name===A)return;let H=ye[A],q=document.querySelector(H.host);if(!q)return;let te=await Le(A);if(te.tierApplied!==p)te.setTier?.(z),te.tierApplied=p;if(p==="still")return;if(Te(),V={name:A,world:te,host:q,section:document.querySelector(H.section)},q.prepend(S),De(),xe(),O.reset(),!te.warmed){if(m[`${A}:warm-programs`]=await Ze(w,te,ee?ee.readBuffer:null,ee),te.warmed=!0,M(`${A}:warmed`),V?.name!==A)return}if(Ue(0.016),M(`${A}:first-frame`),await Je(),M(`${A}:intro-settled`),V?.name!==A)return;Be=!0,requestAnimationFrame(()=>{q.classList.add("world-live"),V?.section?.classList.add("world-live"),V?.world.ignite?.(),M(`${A}:revealed`)}),we()}let $e=new IntersectionObserver((A)=>{A.forEach((H)=>{let q=H.target.dataset.world;if(H.isIntersecting)me=!0,ke(q).catch((te)=>{ue.dataset.worldError=String(te?.message||te).slice(0,120)}),we();else if(V?.name===q)me=!1,pe()})},{rootMargin:"80px 0px"}),qe=window.requestIdleCallback?(A)=>requestIdleCallback(A,{timeout:2500}):(A)=>setTimeout(A,300),Ie=new IntersectionObserver((A)=>{A.forEach((H)=>{if(!H.isIntersecting)return;Ie.unobserve(H.target),qe(()=>{if(p!=="still")Le(H.target.dataset.world).catch(()=>{})})})},{rootMargin:"150% 0px"});Object.entries(ye).forEach(([A,H])=>{let q=document.querySelector(H.section);if(!q)return;if(q.dataset.world=A,$e.observe(q),H.prefetch)Ie.observe(q)}),addEventListener("pointermove",(A)=>{z.pointerTarget.set(A.clientX/innerWidth*2-1,A.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",xe,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)we();else pe()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(A)=>{if(A.matches)Me("still")}),S.addEventListener("webglcontextlost",(A)=>{A.preventDefault(),pe(),Te(),S.remove(),ue.dataset.worldTier="still"}),window.__worldStage={get tier(){return p},get active(){return V?.name||null},setTier:Me,timings:m,get world(){return V?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{it()}catch(m){document.documentElement.dataset.worldError=String(m?.message||m).slice(0,120)}
