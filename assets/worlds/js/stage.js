import{g,B,E,ue,de,fe,K,pe,me,ge,x,S,l,i,e,r,p,c,n,Q,v,f,M,o,j,X,I,h,Ae,F,Fe,O,k,Ge,he,Ve}from"./stage-mqbvddj2.js";var Be,xe,oe,De=(t,a)=>{for(var[u,T,s]of Be||[])for(var d=[t],m=globalThis,w=m.document,y,_,A,R,U;_=d.pop();)if(!xe[_]&&(A=T[_])){xe[_]=1;for(R=1;R<A.length;R++)d.push(s[A[R]]);if(!a&&_!==t&&(y=w&&w.head)){if(oe===void 0)oe=(R=w.querySelector("meta[property=csp-nonce]"))&&(R.nonce||R.getAttribute("nonce"))||"";if(U=w.createElement("link"),U.rel="modulepreload",U.crossOrigin="",oe)U.nonce=oe;U.href=new m.URL(A[0],u),y.appendChild(U)}}},We=(t,a,u,T)=>{for(var s={},d=0;d<a.length;d++)s[a[d]]=u[d];(Be||=[]).push([t,s,a]),xe||={},De(a[T],1)};We(import.meta.url,["afr03d5f","4v53j0t8","mqbvddj2"],[["./stage.js",2],["./gateway-4v53j0t8.js",2],["./stage-mqbvddj2.js"]],0);
class Me extends Q{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let t=new X;t.deleteAttribute("uv");let a=new F({side:g}),u=new F,T=new O(16777215,900,28,2);T.position.set(0.418,16.199,0.3),this.add(T);let s=new o(t,a);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let d=new j(t,u,6),m=new c;m.position.set(-10.906,2.009,1.846),m.rotation.set(0,-0.195,0),m.scale.set(2.328,7.905,4.651),m.updateMatrix(),d.setMatrixAt(0,m.matrix),m.position.set(-5.607,-0.754,-0.758),m.rotation.set(0,0.994,0),m.scale.set(1.97,1.534,3.955),m.updateMatrix(),d.setMatrixAt(1,m.matrix),m.position.set(6.167,0.857,7.803),m.rotation.set(0,0.561,0),m.scale.set(3.927,6.285,3.687),m.updateMatrix(),d.setMatrixAt(2,m.matrix),m.position.set(-2.017,0.018,6.124),m.rotation.set(0,0.333,0),m.scale.set(2.002,4.566,2.064),m.updateMatrix(),d.setMatrixAt(3,m.matrix),m.position.set(2.291,-0.756,-2.621),m.rotation.set(0,-0.286,0),m.scale.set(1.546,1.552,1.496),m.updateMatrix(),d.setMatrixAt(4,m.matrix),m.position.set(-2.193,-0.369,-5.547),m.rotation.set(0,0.516,0),m.scale.set(3.875,3.487,2.986),m.updateMatrix(),d.setMatrixAt(5,m.matrix),this.add(d);let w=new o(t,q(50));w.position.set(-16.116,14.37,8.208),w.scale.set(0.1,2.428,2.739),this.add(w);let y=new o(t,q(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(0.1,2.425,2.751),this.add(y);let _=new o(t,q(17));_.position.set(14.904,12.198,-1.832),_.scale.set(0.15,4.265,6.331),this.add(_);let A=new o(t,q(43));A.position.set(-0.462,8.89,14.52),A.scale.set(4.38,5.441,0.088),this.add(A);let R=new o(t,q(20));R.position.set(3.235,11.486,-12.541),R.scale.set(2.5,2,0.1),this.add(R);let U=new o(t,q(100));U.position.set(0,20,0),U.scale.set(1,0.1,1),this.add(U)}dispose(){let t=new Set;this.traverse((a)=>{if(a.isMesh)t.add(a.geometry),t.add(a.material)});for(let a of t)a.dispose()}}function q(t){return new Fe({color:0,emissive:16777215,emissiveIntensity:t})}var Y={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class z{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var ke=new k(-1,1,1,-1,0,1);class Ue extends f{constructor(){super();this.setAttribute("position",new v([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new v([0,2,0,0,2,0],2))}}var je=new Ue;class V{constructor(t){this._mesh=new o(je,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ke)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Z extends z{constructor(t,a="tDiffuse"){super();if(this.textureID=a,this.uniforms=null,this.material=null,t instanceof h)this.uniforms=t.uniforms,this.material=t;else if(t)this.uniforms=I.clone(t.uniforms),this.material=new h({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader});this._fsQuad=new V(this.material)}render(t,a,u){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=u.texture;if(this._fsQuad.material=this.material,this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(a),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ae extends z{constructor(t,a){super();this.scene=t,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,a,u){let T=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let d,m;if(this.inverse)d=0,m=1;else d=1,m=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(T.REPLACE,T.REPLACE,T.REPLACE),s.buffers.stencil.setFunc(T.ALWAYS,d,4294967295),s.buffers.stencil.setClear(m),s.buffers.stencil.setLocked(!0),t.setRenderTarget(u),this.clear)t.clear();if(t.render(this.scene,this.camera),t.setRenderTarget(a),this.clear)t.clear();t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(T.EQUAL,1,4294967295),s.buffers.stencil.setOp(T.KEEP,T.KEEP,T.KEEP),s.buffers.stencil.setLocked(!0)}}class Te extends z{constructor(){super();this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class be{constructor(t,a){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),a===void 0){let u=t.getSize(new i);this._width=u.width,this._height=u.height,a=new p(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:x}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Z(Y),this.copyPass.material.blending=B,this.timer=new Ge}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,a){this.passes.splice(a,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let a=this.passes.indexOf(t);if(a!==-1)this.passes.splice(a,1)}isLastEnabledPass(t){for(let a=t+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(t){if(this.timer.update(),t===void 0)t=this.timer.getDelta();let a=this.renderer.getRenderTarget(),u=!1;for(let T=0,s=this.passes.length;T<s;T++){let d=this.passes[T];if(d.enabled===!1)continue;if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(T),d.render(this.renderer,this.writeBuffer,this.readBuffer,t,u),d.needsSwap){if(u){let m=this.renderer.getContext(),w=this.renderer.state.buffers.stencil;w.setFunc(m.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),w.setFunc(m.EQUAL,1,4294967295)}this.swapBuffers()}if(ae!==void 0){if(d instanceof ae)u=!0;else if(d instanceof Te)u=!1}}this.renderer.setRenderTarget(a)}reset(t){if(t===void 0){let a=this.renderer.getSize(new i);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,a){this._width=t,this._height=a;let u=this._width*this._pixelRatio,T=this._height*this._pixelRatio;this.renderTarget1.setSize(u,T),this.renderTarget2.setSize(u,T);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(u,T)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _e extends z{constructor(t,a,u=null,T=null,s=null){super();this.scene=t,this.camera=a,this.overrideMaterial=u,this.clearColor=T,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new n}render(t,a,u){let T=t.autoClear;t.autoClear=!1;let s,d;if(this.overrideMaterial!==null)d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha());if(this.clearAlpha!==null)s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)t.clearDepth();if(t.setRenderTarget(this.renderToScreen?null:u),this.clear===!0)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);if(t.render(this.scene,this.camera),this.clearColor!==null)t.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)t.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=d;t.autoClear=T}}var Ne={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new n(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class H extends z{constructor(t,a=1,u,T){super();this.strength=a,this.radius=u,this.threshold=T,this.resolution=t!==void 0?new i(t.x,t.y):new i(256,256),this.clearColor=new n(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new p(s,d,{type:x,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){let A=new p(s,d,{type:x,depthBuffer:!1});A.texture.name="UnrealBloomPass.h"+_,A.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(A);let R=new p(s,d,{type:x,depthBuffer:!1});R.texture.name="UnrealBloomPass.v"+_,R.texture.generateMipmaps=!1,this.renderTargetsVertical.push(R),s=Math.round(s/2),d=Math.round(d/2)}let m=Ne;this.highPassUniforms=I.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=T,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new h({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this.separableBlurMaterials=[];let w=[6,10,14,18,22];s=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(w[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new i(1/s,1/d),s=Math.round(s/2),d=Math.round(d/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let y=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=y,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=I.clone(Y.uniforms),this.blendMaterial=new h({uniforms:this.copyUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader,premultipliedAlpha:!0,blending:E,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new n,this._oldClearAlpha=1,this._basic=new M,this._fsQuad=new V(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,a){let u=Math.round(t/2),T=Math.round(a/2);this.renderTargetBright.setSize(u,T);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(u,T),this.renderTargetsVertical[s].setSize(u,T),this.separableBlurMaterials[s].uniforms.invSize.value=new i(1/u,1/T),u=Math.round(u/2),T=Math.round(T/2)}render(t,a,u,T,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let d=t.autoClear;if(t.autoClear=!1,t.setClearColor(this.clearColor,0),s)t.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=u.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t);this.highPassUniforms.tDiffuse.value=u.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let m=this.renderTargetBright;for(let w=0;w<this.nMips;w++)this._fsQuad.material=this.separableBlurMaterials[w],this.separableBlurMaterials[w].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[w].uniforms.direction.value=H.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[w]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[w].uniforms.colorTexture.value=this.renderTargetsHorizontal[w].texture,this.separableBlurMaterials[w].uniforms.direction.value=H.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[w]),t.clear(),this._fsQuad.render(t),m=this.renderTargetsVertical[w];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)t.state.buffers.stencil.setTest(!0);if(this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else t.setRenderTarget(u),this._fsQuad.render(t);t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=d}_getSeparableBlurMaterial(t){let a=[],u=t/3;for(let d=0;d<t;d++)a.push(0.39894*Math.exp(-0.5*d*d/(u*u))/u);let T=[],s=[];for(let d=1;d<t;d+=2){let m=a[d],w=d+1<t?a[d+1]:0,y=m+w;T.push((d*m+(d+1)*w)/y),s.push(y)}return new h({defines:{KERNEL_PAIRS:T.length},uniforms:{colorTexture:{value:null},invSize:{value:new i(0.5,0.5)},direction:{value:new i(0.5,0.5)},centerWeight:{value:a[0]},gaussianOffsets:{value:T},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new h({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}H.BlurDirectionX=new i(1,0);H.BlurDirectionY=new i(0,1);var ee={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class we extends z{constructor(){super();this.isOutputPass=!0,this.uniforms=I.clone(ee.uniforms),this.material=new Ae({name:ee.name,uniforms:this.uniforms,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader}),this._fsQuad=new V(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,a,u){if(this.uniforms.tDiffuse.value=u.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping){if(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},r.getTransfer(this._outputColorSpace)===l)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ue)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===de)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===fe)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===K)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===me)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===ge)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===pe)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(a),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var te=["still","low","medium","high"],Se={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Le({gpu:t="",coarse:a=!1,width:u=1440,memory:T=8,cores:s=8,override:d=null}={}){if(d&&te.includes(d))return d;if(/swiftshader|llvmpipe|software|basic render/i.test(t))return"still";if(a&&u<760)return"low";if(T&&T<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(t))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(t))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(t)||T<=4||s<=4)return"medium";return"high"}function Oe({slowMs:t=22,verySlowMs:a=40,window:u=90,warmup:T=45}={}){let s=[],d=T;return{sample(m,w){if(d>0)return d--,null;if(s.push(m),s.length<u)return null;let y=s.reduce((A,R)=>A+R,0)/s.length;s.length=0;let _=te.indexOf(w);if(w==="low"&&y>a)return"still";if(y>t&&_>1)return te[_-1];return null},reset(){s.length=0,d=T}}}var Ke={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function qe(){if(document.readyState==="loading")await new Promise((t)=>document.addEventListener("DOMContentLoaded",t,{once:!0}));if(J.dataset.introState!=="loading")return;return new Promise((t)=>{addEventListener("portfolio:intro-complete",t,{once:!0}),setTimeout(t,9000)})}var Ie={gateway:{host:"#home .hero-visual",section:"#home",load:()=>(De("4v53j0t8"),import("./gateway-4v53j0t8.js"))}},J=document.documentElement,Ce=new URLSearchParams(location.search);function Xe(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Ce.get("motion")==="off"||J.classList.contains("motion-off")}function $e(t){try{let a=t.getExtension("WEBGL_debug_renderer_info");return a?String(t.getParameter(a.UNMASKED_RENDERER_WEBGL)):String(t.getParameter(t.RENDERER))}catch{return""}}function Ye(){if(Xe())return;let t={boot:Math.round(performance.now())},a=(b)=>{t[b]=Math.round(performance.now())},u=new Ve({antialias:!0,alpha:!1,powerPreference:"high-performance"}),T=u.getContext(),s=Le({gpu:$e(T),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Ce.get("tier")}),d=te.includes(Ce.get("tier"));if(J.dataset.worldTier=s,s==="still"){u.dispose();return}u.outputColorSpace=S,u.toneMapping=K,u.toneMappingExposure=1;let m=u.domElement;m.className="world-canvas",m.setAttribute("aria-hidden","true"),m.tabIndex=-1;let w=null,y=()=>{if(!w){let b=new he(u);w=b.fromScene(new Me,0.04).texture,b.dispose(),a("environment")}return w},_={tier:s,settings:Se[s],pointer:new i,pointerTarget:new i,progress:0},A=new Map,R=Oe(),U=0,C=null,N=null,ie=null,G=null,Pe=!1,W=0,se=!1,ne=()=>{if(!C)return;let{width:b,height:P}=C.host.getBoundingClientRect();if(!b||!P)return;if(u.setPixelRatio(Math.min(devicePixelRatio||1,_.settings.dpr)),u.setSize(b,P,!1),C.world.resize(b,P,_),N){N.setPixelRatio(u.getPixelRatio()),N.setSize(b,P);let D=u.getPixelRatio()*_.settings.bloomScale;ie?.setSize(Math.max(64,Math.round(b*D)),Math.max(64,Math.round(P*D)))}},Ee=()=>{if(N?.dispose(),N=null,ie=null,G=null,!C||!_.settings.bloom)return;N=new be(u),N.addPass(new _e(C.world.scene,C.world.camera));let b=C.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};ie=new H(new i(256,256),b.strength,b.radius,b.threshold),N.addPass(ie),N.addPass(new we);let P=C.world.finish;if(P)G=new Z(Ke),G.uniforms.uVignette.value=P.vignette,G.uniforms.uGrain.value=P.grain,N.addPass(G)},le=(b)=>{if(b===s)return;if(s=b,J.dataset.worldTier=s,s==="still"){re(),ve(),m.remove();return}_.tier=s,_.settings=Se[s],R.reset(),C?.world.setTier?.(_),Ee(),ne()},Re=(b)=>{if(_.pointer.lerp(_.pointerTarget,Math.min(1,b*3)),C.section){let P=C.section.getBoundingClientRect();_.progress=Math.min(1,Math.max(0,-P.top/Math.max(1,P.height)))}if(C.world.update(b,_),G)G.uniforms.uTime.value+=b;if(N)N.render(b);else u.render(C.world.scene,C.world.camera)},ye=()=>{if(W=0,!C||!se||document.hidden)return;let b=performance.now(),P=Math.min(0.05,(b-U)/1000);U=b;let D=performance.now();Re(P);let L=d?null:R.sample(Math.max(P*1000,performance.now()-D),s);if(L)le(L);if(s!=="still")W=requestAnimationFrame(ye)},ce=()=>{if(!W&&C&&se&&Pe)U=performance.now(),W=requestAnimationFrame(ye)},re=()=>{cancelAnimationFrame(W),W=0},ve=()=>{if(!C)return;C.host.classList.remove("world-live"),C.section?.classList.remove("world-live"),C=null};async function ze(b){if(C?.name===b)return;let P=Ie[b],D=document.querySelector(P.host);if(!D)return;let L=A.get(b);if(!L){let He=await P.load();a(`${b}:module`),L=await He.create({renderer:u,getEnvironment:y,state:_}),a(`${b}:created`);try{await u.compileAsync(L.scene,L.camera)}catch{}a(`${b}:compiled`),A.set(b,L)}if(s==="still")return;if(ve(),C={name:b,world:L,host:D,section:document.querySelector(P.section)},D.prepend(m),Ee(),ne(),R.reset(),Re(0.016),a(`${b}:first-frame`),await qe(),a(`${b}:intro-settled`),C?.name!==b)return;Pe=!0,requestAnimationFrame(()=>{D.classList.add("world-live"),C?.section?.classList.add("world-live"),C?.world.ignite?.(),a(`${b}:revealed`)}),ce()}let Qe=new IntersectionObserver((b)=>{b.forEach((P)=>{let D=P.target.dataset.world;if(P.isIntersecting)se=!0,ze(D).catch((L)=>{J.dataset.worldError=String(L?.message||L).slice(0,120)}),ce();else if(C?.name===D)se=!1,re()})},{rootMargin:"80px 0px"});Object.entries(Ie).forEach(([b,P])=>{let D=document.querySelector(P.section);if(!D)return;D.dataset.world=b,Qe.observe(D)}),addEventListener("pointermove",(b)=>{_.pointerTarget.set(b.clientX/innerWidth*2-1,b.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",ne,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)ce();else re()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(b)=>{if(b.matches)le("still")}),m.addEventListener("webglcontextlost",(b)=>{b.preventDefault(),re(),ve(),m.remove(),J.dataset.worldTier="still"}),window.__worldStage={get tier(){return s},get active(){return C?.name||null},setTier:le,timings:t,get world(){return C?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{Ye()}catch(t){document.documentElement.dataset.worldError=String(t?.message||t).slice(0,120)}
