import{T,k,I,_e,xe,ve,ae,ye,Se,Me,A,y,c,n,e,s,M,l,t,B,g,f,h,r,D,Q,H,p,Pe,u,j,he,X,Xe,ge,Ze}from"./stage-j5r47h6c.js";var Ie,de,re,me=(i,a)=>{for(var[d,w,o]of Ie||[])for(var v=[i],m=globalThis,S=m.document,F,_,U,b,R;_=v.pop();)if(!de[_]&&(U=w[_])){de[_]=1;for(b=1;b<U.length;b++)v.push(o[U[b]]);if(!a&&_!==i&&(F=S&&S.head)){if(re===void 0)re=(b=S.querySelector("meta[property=csp-nonce]"))&&(b.nonce||b.getAttribute("nonce"))||"";if(R=S.createElement("link"),R.rel="modulepreload",R.crossOrigin="",re)R.nonce=re;R.href=new m.URL(U[0],d),F.appendChild(R)}}},$e=(i,a,d,w)=>{for(var o={},v=0;v<a.length;v++)o[a[v]]=d[v];(Ie||=[]).push([i,o,a]),de||={},me(a[w],1)};$e(import.meta.url,["jp03dh1n","gpgq9k08","4jnmnw09","j5r47h6c","23fw8kph"],[["./stage.js",3],["./temple-gpgq9k08.js",4,3],["./strata-4jnmnw09.js",4,3],["./stage-j5r47h6c.js"],["./stage-23fw8kph.js",3]],0);
class pe extends B{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let i=new Q;i.deleteAttribute("uv");let a=new u({side:T}),d=new u,w=new he(16777215,900,28,2);w.position.set(0.418,16.199,0.3),this.add(w);let o=new r(i,a);o.position.set(-0.757,13.219,0.717),o.scale.set(31.713,28.305,28.591),this.add(o);let v=new D(i,d,6),m=new l;m.position.set(-10.906,2.009,1.846),m.rotation.set(0,-0.195,0),m.scale.set(2.328,7.905,4.651),m.updateMatrix(),v.setMatrixAt(0,m.matrix),m.position.set(-5.607,-0.754,-0.758),m.rotation.set(0,0.994,0),m.scale.set(1.97,1.534,3.955),m.updateMatrix(),v.setMatrixAt(1,m.matrix),m.position.set(6.167,0.857,7.803),m.rotation.set(0,0.561,0),m.scale.set(3.927,6.285,3.687),m.updateMatrix(),v.setMatrixAt(2,m.matrix),m.position.set(-2.017,0.018,6.124),m.rotation.set(0,0.333,0),m.scale.set(2.002,4.566,2.064),m.updateMatrix(),v.setMatrixAt(3,m.matrix),m.position.set(2.291,-0.756,-2.621),m.rotation.set(0,-0.286,0),m.scale.set(1.546,1.552,1.496),m.updateMatrix(),v.setMatrixAt(4,m.matrix),m.position.set(-2.193,-0.369,-5.547),m.rotation.set(0,0.516,0),m.scale.set(3.875,3.487,2.986),m.updateMatrix(),v.setMatrixAt(5,m.matrix),this.add(v);let S=new r(i,q(50));S.position.set(-16.116,14.37,8.208),S.scale.set(0.1,2.428,2.739),this.add(S);let F=new r(i,q(50));F.position.set(-16.109,18.021,-8.207),F.scale.set(0.1,2.425,2.751),this.add(F);let _=new r(i,q(17));_.position.set(14.904,12.198,-1.832),_.scale.set(0.15,4.265,6.331),this.add(_);let U=new r(i,q(43));U.position.set(-0.462,8.89,14.52),U.scale.set(4.38,5.441,0.088),this.add(U);let b=new r(i,q(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,0.1),this.add(b);let R=new r(i,q(100));R.position.set(0,20,0),R.scale.set(1,0.1,1),this.add(R)}dispose(){let i=new Set;this.traverse((a)=>{if(a.isMesh)i.add(a.geometry),i.add(a.material)});for(let a of i)a.dispose()}}function q(i){return new j({color:0,emissive:16777215,emissiveIntensity:i})}var K={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class O{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var qe=new X(-1,1,1,-1,0,1);class Oe extends f{constructor(){super();this.setAttribute("position",new g([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new g([0,2,0,0,2,0],2))}}var Ke=new Oe;class G{constructor(i){this._mesh=new r(Ke,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,qe)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class J extends O{constructor(i,a="tDiffuse"){super();if(this.textureID=a,this.uniforms=null,this.material=null,i instanceof p)this.uniforms=i.uniforms,this.material=i;else if(i)this.uniforms=H.clone(i.uniforms),this.material=new p({name:i.name!==void 0?i.name:"unspecified",defines:Object.assign({},i.defines),uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});this._fsQuad=new G(this.material)}render(i,a,d){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=d.texture;if(this._fsQuad.material=this.material,this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(a),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class oe extends O{constructor(i,a){super();this.scene=i,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(i,a,d){let w=i.getContext(),o=i.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let v,m;if(this.inverse)v=0,m=1;else v=1,m=0;if(o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(w.REPLACE,w.REPLACE,w.REPLACE),o.buffers.stencil.setFunc(w.ALWAYS,v,4294967295),o.buffers.stencil.setClear(m),o.buffers.stencil.setLocked(!0),i.setRenderTarget(d),this.clear)i.clear();if(i.render(this.scene,this.camera),i.setRenderTarget(a),this.clear)i.clear();i.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(w.EQUAL,1,4294967295),o.buffers.stencil.setOp(w.KEEP,w.KEEP,w.KEEP),o.buffers.stencil.setLocked(!0)}}class we extends O{constructor(){super();this.needsSwap=!1}render(i){i.state.buffers.stencil.setLocked(!1),i.state.buffers.stencil.setTest(!1)}}class Te{constructor(i,a){if(this.renderer=i,this._pixelRatio=i.getPixelRatio(),a===void 0){let d=i.getSize(new n);this._width=d.width,this._height=d.height,a=new M(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:A}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new J(K),this.copyPass.material.blending=k,this.timer=new Xe}swapBuffers(){let i=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=i}addPass(i){this.passes.push(i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(i,a){this.passes.splice(a,0,i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(i){let a=this.passes.indexOf(i);if(a!==-1)this.passes.splice(a,1)}isLastEnabledPass(i){for(let a=i+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(i){if(this.timer.update(),i===void 0)i=this.timer.getDelta();let a=this.renderer.getRenderTarget(),d=!1;for(let w=0,o=this.passes.length;w<o;w++){let v=this.passes[w];if(v.enabled===!1)continue;if(v.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(w),v.render(this.renderer,this.writeBuffer,this.readBuffer,i,d),v.needsSwap){if(d){let m=this.renderer.getContext(),S=this.renderer.state.buffers.stencil;S.setFunc(m.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,i),S.setFunc(m.EQUAL,1,4294967295)}this.swapBuffers()}if(oe!==void 0){if(v instanceof oe)d=!0;else if(v instanceof we)d=!1}}this.renderer.setRenderTarget(a)}reset(i){if(i===void 0){let a=this.renderer.getSize(new n);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,i=this.renderTarget1.clone(),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=i,this.renderTarget2=i.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(i,a){this._width=i,this._height=a;let d=this._width*this._pixelRatio,w=this._height*this._pixelRatio;this.renderTarget1.setSize(d,w),this.renderTarget2.setSize(d,w);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(d,w)}setPixelRatio(i){this._pixelRatio=i,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class be extends O{constructor(i,a,d=null,w=null,o=null){super();this.scene=i,this.camera=a,this.overrideMaterial=d,this.clearColor=w,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t}render(i,a,d){let w=i.autoClear;i.autoClear=!1;let o,v;if(this.overrideMaterial!==null)v=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)i.getClearColor(this._oldClearColor),i.setClearColor(this.clearColor,i.getClearAlpha());if(this.clearAlpha!==null)o=i.getClearAlpha(),i.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)i.clearDepth();if(i.setRenderTarget(this.renderToScreen?null:d),this.clear===!0)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);if(i.render(this.scene,this.camera),this.clearColor!==null)i.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)i.setClearAlpha(o);if(this.overrideMaterial!==null)this.scene.overrideMaterial=v;i.autoClear=w}}var ze={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class V extends O{constructor(i,a=1,d,w){super();this.strength=a,this.radius=d,this.threshold=w,this.resolution=i!==void 0?new n(i.x,i.y):new n(256,256),this.clearColor=new t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),v=Math.round(this.resolution.y/2);this.renderTargetBright=new M(o,v,{type:A,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){let U=new M(o,v,{type:A,depthBuffer:!1});U.texture.name="UnrealBloomPass.h"+_,U.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(U);let b=new M(o,v,{type:A,depthBuffer:!1});b.texture.name="UnrealBloomPass.v"+_,b.texture.generateMipmaps=!1,this.renderTargetsVertical.push(b),o=Math.round(o/2),v=Math.round(v/2)}let m=ze;this.highPassUniforms=H.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=w,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new p({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this.separableBlurMaterials=[];let S=[6,10,14,18,22];o=Math.round(this.resolution.x/2),v=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(S[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new n(1/o,1/v),o=Math.round(o/2),v=Math.round(v/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let F=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=F,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=H.clone(K.uniforms),this.blendMaterial=new p({uniforms:this.copyUniforms,vertexShader:K.vertexShader,fragmentShader:K.fragmentShader,premultipliedAlpha:!0,blending:I,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t,this._oldClearAlpha=1,this._basic=new h,this._fsQuad=new G(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose();for(let i=0;i<this.separableBlurMaterials.length;i++)this.separableBlurMaterials[i].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(i,a){let d=Math.round(i/2),w=Math.round(a/2);this.renderTargetBright.setSize(d,w);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(d,w),this.renderTargetsVertical[o].setSize(d,w),this.separableBlurMaterials[o].uniforms.invSize.value=new n(1/d,1/w),d=Math.round(d/2),w=Math.round(w/2)}render(i,a,d,w,o){i.getClearColor(this._oldClearColor),this._oldClearAlpha=i.getClearAlpha();let v=i.autoClear;if(i.autoClear=!1,i.setClearColor(this.clearColor,0),o)i.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=d.texture,i.setRenderTarget(null),i.clear(),this._fsQuad.render(i);this.highPassUniforms.tDiffuse.value=d.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,i.setRenderTarget(this.renderTargetBright),i.clear(),this._fsQuad.render(i);let m=this.renderTargetBright;for(let S=0;S<this.nMips;S++)this._fsQuad.material=this.separableBlurMaterials[S],this.separableBlurMaterials[S].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[S].uniforms.direction.value=V.BlurDirectionX,i.setRenderTarget(this.renderTargetsHorizontal[S]),i.clear(),this._fsQuad.render(i),this.separableBlurMaterials[S].uniforms.colorTexture.value=this.renderTargetsHorizontal[S].texture,this.separableBlurMaterials[S].uniforms.direction.value=V.BlurDirectionY,i.setRenderTarget(this.renderTargetsVertical[S]),i.clear(),this._fsQuad.render(i),m=this.renderTargetsVertical[S];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,i.setRenderTarget(this.renderTargetsHorizontal[0]),i.clear(),this._fsQuad.render(i),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o)i.state.buffers.stencil.setTest(!0);if(this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else i.setRenderTarget(d),this._fsQuad.render(i);i.setClearColor(this._oldClearColor,this._oldClearAlpha),i.autoClear=v}_getSeparableBlurMaterial(i){let a=[],d=i/3;for(let v=0;v<i;v++)a.push(0.39894*Math.exp(-0.5*v*v/(d*d))/d);let w=[],o=[];for(let v=1;v<i;v+=2){let m=a[v],S=v+1<i?a[v+1]:0,F=m+S;w.push((v*m+(v+1)*S)/F),o.push(F)}return new p({defines:{KERNEL_PAIRS:w.length},uniforms:{colorTexture:{value:null},invSize:{value:new n(0.5,0.5)},direction:{value:new n(0.5,0.5)},centerWeight:{value:a[0]},gaussianOffsets:{value:w},gaussianWeights:{value:o}},vertexShader:`

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

				}`})}_getCompositeMaterial(i){return new p({defines:{NUM_MIPS:i},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}V.BlurDirectionX=new n(1,0);V.BlurDirectionY=new n(0,1);var Z={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ce extends O{constructor(){super();this.isOutputPass=!0,this.uniforms=H.clone(Z.uniforms),this.material=new Pe({name:Z.name,uniforms:this.uniforms,vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader}),this._fsQuad=new G(this.material),this._outputColorSpace=null,this._toneMapping=null}render(i,a,d){if(this.uniforms.tDiffuse.value=d.texture,this.uniforms.toneMappingExposure.value=i.toneMappingExposure,this._outputColorSpace!==i.outputColorSpace||this._toneMapping!==i.toneMapping){if(this._outputColorSpace=i.outputColorSpace,this._toneMapping=i.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===c)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===_e)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===xe)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===ve)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===ae)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Se)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Me)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ye)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(a),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var ee=["still","low","medium","high"],Ee={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Ge({gpu:i="",coarse:a=!1,width:d=1440,memory:w=8,cores:o=8,override:v=null}={}){if(v&&ee.includes(v))return v;if(/swiftshader|llvmpipe|software|basic render/i.test(i))return"still";if(a&&d<760)return"low";if(w&&w<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(i))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(i))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(i)||w<=4||o<=4)return"medium";return"high"}function Ve({slowMs:i=22,verySlowMs:a=40,window:d=90,warmup:w=45}={}){let o=[],v=w;return{sample(m,S){if(v>0)return v--,null;if(o.push(m),o.length<d)return null;let F=o.reduce((U,b)=>U+b,0)/o.length;o.length=0;let _=ee.indexOf(S);if(S==="low"&&F>a)return"still";if(F>i&&_>1)return ee[_-1];return null},reset(){o.length=0,v=w}}}var je={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function Ye(){if(document.readyState==="loading")await new Promise((i)=>document.addEventListener("DOMContentLoaded",i,{once:!0}));if(Y.dataset.introState!=="loading")return;return new Promise((i)=>{addEventListener("portfolio:intro-complete",i,{once:!0}),setTimeout(i,9000)})}var Qe=()=>new Promise((i)=>requestAnimationFrame(()=>i()));async function Je(i,a,d,w){let{scene:o,camera:v}=a,m=[];o.traverse((b)=>{if((b.isMesh||b.isPoints||b.isSprite)&&b.material)m.push(b)});let S=(b)=>`${b.type}|${b.name}|${b.vertexShader?.length||0}|${b.fragmentShader?.length||0}|${b.customProgramCacheKey?.()||""}`,F=new Map;for(let b of m){let R=S(b.material);if(!F.has(R))F.set(R,b)}let _=m.map((b)=>b.visible),U=i.getScissorTest();i.setScissorTest(!0),i.setScissor(0,0,1,1);try{for(let b of F.values())m.forEach((R)=>{R.visible=R===b}),i.setRenderTarget(d),i.render(o,v),i.setRenderTarget(null),await Qe();if(m.forEach((b,R)=>{b.visible=_[R]}),w)w.render(0.016),await Qe()}finally{m.forEach((b,R)=>{b.visible=_[R]}),i.setScissorTest(U),i.setScissor(0,0,i.domElement.width,i.domElement.height)}return F.size}var Re={temple:{host:"#home .hero-visual",section:"#home",load:()=>(me("gpgq9k08"),import("./temple-gpgq9k08.js"))},strata:{host:"#dimension .system-object",section:"#dimension",load:()=>(me("4jnmnw09"),import("./strata-4jnmnw09.js")),prefetch:!0}},Y=document.documentElement,Ae=new URLSearchParams(location.search);function et(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Ae.get("motion")==="off"||Y.classList.contains("motion-off")}function tt(i){try{let a=i.getExtension("WEBGL_debug_renderer_info");return a?String(i.getParameter(a.UNMASKED_RENDERER_WEBGL)):String(i.getParameter(i.RENDERER))}catch{return""}}function it(){if(et())return;let i={boot:Math.round(performance.now())},a=(x)=>{i[x]=Math.round(performance.now())},d=new Ze({antialias:!0,alpha:!1,powerPreference:"high-performance"}),w=d.getContext(),o=Ge({gpu:tt(w),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Ae.get("tier")}),v=ee.includes(Ae.get("tier"));if(Y.dataset.worldTier=o,o==="still"){d.dispose();return}d.outputColorSpace=y,d.toneMapping=ae,d.toneMappingExposure=1;let m=d.domElement;m.className="world-canvas",m.setAttribute("aria-hidden","true"),m.tabIndex=-1;let S=null,F=()=>{if(!S){let x=new ge(d);S=x.fromScene(new pe,0.04).texture,x.dispose(),a("environment")}return S},_={tier:o,settings:Ee[o],pointer:new n,pointerTarget:new n,progress:0},U=new Map,b=Ve(),R=0,C=null,N=null,te=null,z=null,Fe=!1,W=0,ie=!1,ne=()=>{if(!C)return;let{width:x,height:P}=C.host.getBoundingClientRect();if(!x||!P)return;if(d.setPixelRatio(Math.min(devicePixelRatio||1,_.settings.dpr)),d.setSize(x,P,!1),C.world.resize(x,P,_),N){N.setPixelRatio(d.getPixelRatio()),N.setSize(x,P);let E=d.getPixelRatio()*_.settings.bloomScale;te?.setSize(Math.max(64,Math.round(x*E)),Math.max(64,Math.round(P*E)))}},Be=()=>{if(N?.dispose(),N=null,te=null,z=null,!C||!_.settings.bloom)return;N=new Te(d),N.addPass(new be(C.world.scene,C.world.camera));let x=C.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};te=new V(new n(256,256),x.strength,x.radius,x.threshold),N.addPass(te),N.addPass(new Ce);let P=C.world.finish;if(P)z=new J(je),z.uniforms.uVignette.value=P.vignette,z.uniforms.uGrain.value=P.grain,N.addPass(z)},le=(x)=>{if(x===o)return;if(o=x,Y.dataset.worldTier=o,o==="still"){se(),fe(),m.remove();return}if(_.tier=o,_.settings=Ee[o],b.reset(),C)C.world.setTier?.(_),C.world.tierApplied=o;Be(),ne()},De=(x)=>{if(_.pointer.lerp(_.pointerTarget,Math.min(1,x*3)),C.section){let P=C.section.worldProgress;if(typeof P==="number")_.progress=P;else{let E=C.section.getBoundingClientRect();_.progress=Math.min(1,Math.max(0,-E.top/Math.max(1,E.height)))}}if(C.world.update(x,_),z)z.uniforms.uTime.value+=x;if(N)N.render(x);else d.render(C.world.scene,C.world.camera)},Ue=()=>{if(W=0,!C||!ie||document.hidden)return;let x=performance.now(),P=Math.min(0.05,(x-R)/1000);R=x;let E=performance.now();De(P);let L=v?null:b.sample(Math.max(P*1000,performance.now()-E),o);if(L)le(L);if(o!=="still")W=requestAnimationFrame(Ue)},ue=()=>{if(!W&&C&&ie&&Fe)R=performance.now(),W=requestAnimationFrame(Ue)},se=()=>{cancelAnimationFrame(W),W=0},fe=()=>{if(!C)return;C.host.classList.remove("world-live"),C.section?.classList.remove("world-live"),C=null},ce=new Map;function Ne(x){if(!ce.has(x))ce.set(x,(async()=>{let P=await Re[x].load();a(`${x}:module`);let E=await P.create({renderer:d,getEnvironment:F,state:_});a(`${x}:created`);try{await d.compileAsync(E.scene,E.camera)}catch{}return a(`${x}:compiled`),E.tierApplied=o,U.set(x,E),E})());return ce.get(x)}async function He(x){if(C?.name===x)return;let P=Re[x],E=document.querySelector(P.host);if(!E)return;let L=await Ne(x);if(L.tierApplied!==o)L.setTier?.(_),L.tierApplied=o;if(o==="still")return;if(fe(),C={name:x,world:L,host:E,section:document.querySelector(P.section)},E.prepend(m),Be(),ne(),b.reset(),!L.warmed){if(i[`${x}:warm-programs`]=await Je(d,L,N?N.readBuffer:null,N),L.warmed=!0,a(`${x}:warmed`),C?.name!==x)return}if(De(0.016),a(`${x}:first-frame`),await Ye(),a(`${x}:intro-settled`),C?.name!==x)return;Fe=!0,requestAnimationFrame(()=>{E.classList.add("world-live"),C?.section?.classList.add("world-live"),C?.world.ignite?.(),a(`${x}:revealed`)}),ue()}let We=new IntersectionObserver((x)=>{x.forEach((P)=>{let E=P.target.dataset.world;if(P.isIntersecting)ie=!0,He(E).catch((L)=>{Y.dataset.worldError=String(L?.message||L).slice(0,120)}),ue();else if(C?.name===E)ie=!1,se()})},{rootMargin:"80px 0px"}),ke=window.requestIdleCallback?(x)=>requestIdleCallback(x,{timeout:2500}):(x)=>setTimeout(x,300),Le=new IntersectionObserver((x)=>{x.forEach((P)=>{if(!P.isIntersecting)return;Le.unobserve(P.target),ke(()=>{if(o!=="still")Ne(P.target.dataset.world).catch(()=>{})})})},{rootMargin:"150% 0px"});Object.entries(Re).forEach(([x,P])=>{let E=document.querySelector(P.section);if(!E)return;if(E.dataset.world=x,We.observe(E),P.prefetch)Le.observe(E)}),addEventListener("pointermove",(x)=>{_.pointerTarget.set(x.clientX/innerWidth*2-1,x.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",ne,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)ue();else se()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(x)=>{if(x.matches)le("still")}),m.addEventListener("webglcontextlost",(x)=>{x.preventDefault(),se(),fe(),m.remove(),Y.dataset.worldTier="still"}),window.__worldStage={get tier(){return o},get active(){return C?.name||null},setTier:le,timings:i,get world(){return C?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{it()}catch(i){document.documentElement.dataset.worldError=String(i?.message||i).slice(0,120)}
