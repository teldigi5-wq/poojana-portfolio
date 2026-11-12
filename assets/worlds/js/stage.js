import{m,U,w,ce,he,ue,Z,de,fe,pe,_,T,o,n,e,s,f,l,t,J,x,d,v,a,Q,W,O,h,Se,N,Ie,D,G,Ue,Fe,le,ze}from"./stage-6dnb08hf.js";var Ee,ne,te,Re=(i,u)=>{for(var[p,M,r]of Ee||[])for(var c=[i],g=globalThis,b=g.document,y,P,R,S,E;P=c.pop();)if(!ne[P]&&(R=M[P])){ne[P]=1;for(S=1;S<R.length;S++)c.push(r[R[S]]);if(!u&&P!==i&&(y=b&&b.head)){if(te===void 0)te=(S=b.querySelector("meta[property=csp-nonce]"))&&(S.nonce||S.getAttribute("nonce"))||"";if(E=b.createElement("link"),E.rel="modulepreload",E.crossOrigin="",te)E.nonce=te;E.href=new g.URL(R[0],p),y.appendChild(E)}}},Ge=(i,u,p,M)=>{for(var r={},c=0;c<u.length;c++)r[u[c]]=p[c];(Ee||=[]).push([i,r,u]),ne||={},Re(u[M],1)};Ge(import.meta.url,["ks40myta","28ktev5z","6dnb08hf"],[["./stage.js",2],["./gateway-28ktev5z.js",2],["./stage-6dnb08hf.js"]],0);
class me extends J{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let i=new W;i.deleteAttribute("uv");let u=new N({side:m}),p=new N,M=new D(16777215,900,28,2);M.position.set(0.418,16.199,0.3),this.add(M);let r=new a(i,u);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let c=new Q(i,p,6),g=new l;g.position.set(-10.906,2.009,1.846),g.rotation.set(0,-0.195,0),g.scale.set(2.328,7.905,4.651),g.updateMatrix(),c.setMatrixAt(0,g.matrix),g.position.set(-5.607,-0.754,-0.758),g.rotation.set(0,0.994,0),g.scale.set(1.97,1.534,3.955),g.updateMatrix(),c.setMatrixAt(1,g.matrix),g.position.set(6.167,0.857,7.803),g.rotation.set(0,0.561,0),g.scale.set(3.927,6.285,3.687),g.updateMatrix(),c.setMatrixAt(2,g.matrix),g.position.set(-2.017,0.018,6.124),g.rotation.set(0,0.333,0),g.scale.set(2.002,4.566,2.064),g.updateMatrix(),c.setMatrixAt(3,g.matrix),g.position.set(2.291,-0.756,-2.621),g.rotation.set(0,-0.286,0),g.scale.set(1.546,1.552,1.496),g.updateMatrix(),c.setMatrixAt(4,g.matrix),g.position.set(-2.193,-0.369,-5.547),g.rotation.set(0,0.516,0),g.scale.set(3.875,3.487,2.986),g.updateMatrix(),c.setMatrixAt(5,g.matrix),this.add(c);let b=new a(i,H(50));b.position.set(-16.116,14.37,8.208),b.scale.set(0.1,2.428,2.739),this.add(b);let y=new a(i,H(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(0.1,2.425,2.751),this.add(y);let P=new a(i,H(17));P.position.set(14.904,12.198,-1.832),P.scale.set(0.15,4.265,6.331),this.add(P);let R=new a(i,H(43));R.position.set(-0.462,8.89,14.52),R.scale.set(4.38,5.441,0.088),this.add(R);let S=new a(i,H(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,0.1),this.add(S);let E=new a(i,H(100));E.position.set(0,20,0),E.scale.set(1,0.1,1),this.add(E)}dispose(){let i=new Set;this.traverse((u)=>{if(u.isMesh)i.add(u.geometry),i.add(u.material)});for(let u of i)u.dispose()}}function H(i){return new Ie({color:0,emissive:16777215,emissiveIntensity:i})}var k={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class F{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Qe=new G(-1,1,1,-1,0,1);class Ae extends d{constructor(){super();this.setAttribute("position",new x([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new x([0,2,0,0,2,0],2))}}var Ve=new Ae;class I{constructor(i){this._mesh=new a(Ve,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,Qe)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class ge extends F{constructor(i,u="tDiffuse"){super();if(this.textureID=u,this.uniforms=null,this.material=null,i instanceof h)this.uniforms=i.uniforms,this.material=i;else if(i)this.uniforms=O.clone(i.uniforms),this.material=new h({name:i.name!==void 0?i.name:"unspecified",defines:Object.assign({},i.defines),uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});this._fsQuad=new I(this.material)}render(i,u,p){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=p.texture;if(this._fsQuad.material=this.material,this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(u),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ie extends F{constructor(i,u){super();this.scene=i,this.camera=u,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(i,u,p){let M=i.getContext(),r=i.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let c,g;if(this.inverse)c=0,g=1;else c=1,g=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(M.REPLACE,M.REPLACE,M.REPLACE),r.buffers.stencil.setFunc(M.ALWAYS,c,4294967295),r.buffers.stencil.setClear(g),r.buffers.stencil.setLocked(!0),i.setRenderTarget(p),this.clear)i.clear();if(i.render(this.scene,this.camera),i.setRenderTarget(u),this.clear)i.clear();i.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(M.EQUAL,1,4294967295),r.buffers.stencil.setOp(M.KEEP,M.KEEP,M.KEEP),r.buffers.stencil.setLocked(!0)}}class ve extends F{constructor(){super();this.needsSwap=!1}render(i){i.state.buffers.stencil.setLocked(!1),i.state.buffers.stencil.setTest(!1)}}class xe{constructor(i,u){if(this.renderer=i,this._pixelRatio=i.getPixelRatio(),u===void 0){let p=i.getSize(new n);this._width=p.width,this._height=p.height,u=new f(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),u.texture.name="EffectComposer.rt1"}else this._width=u.width,this._height=u.height;this.renderTarget1=u,this.renderTarget2=u.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ge(k),this.copyPass.material.blending=U,this.timer=new Ue}swapBuffers(){let i=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=i}addPass(i){this.passes.push(i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(i,u){this.passes.splice(u,0,i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(i){let u=this.passes.indexOf(i);if(u!==-1)this.passes.splice(u,1)}isLastEnabledPass(i){for(let u=i+1;u<this.passes.length;u++)if(this.passes[u].enabled)return!1;return!0}render(i){if(this.timer.update(),i===void 0)i=this.timer.getDelta();let u=this.renderer.getRenderTarget(),p=!1;for(let M=0,r=this.passes.length;M<r;M++){let c=this.passes[M];if(c.enabled===!1)continue;if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(M),c.render(this.renderer,this.writeBuffer,this.readBuffer,i,p),c.needsSwap){if(p){let g=this.renderer.getContext(),b=this.renderer.state.buffers.stencil;b.setFunc(g.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,i),b.setFunc(g.EQUAL,1,4294967295)}this.swapBuffers()}if(ie!==void 0){if(c instanceof ie)p=!0;else if(c instanceof ve)p=!1}}this.renderer.setRenderTarget(u)}reset(i){if(i===void 0){let u=this.renderer.getSize(new n);this._pixelRatio=this.renderer.getPixelRatio(),this._width=u.width,this._height=u.height,i=this.renderTarget1.clone(),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=i,this.renderTarget2=i.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(i,u){this._width=i,this._height=u;let p=this._width*this._pixelRatio,M=this._height*this._pixelRatio;this.renderTarget1.setSize(p,M),this.renderTarget2.setSize(p,M);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(p,M)}setPixelRatio(i){this._pixelRatio=i,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Me extends F{constructor(i,u,p=null,M=null,r=null){super();this.scene=i,this.camera=u,this.overrideMaterial=p,this.clearColor=M,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t}render(i,u,p){let M=i.autoClear;i.autoClear=!1;let r,c;if(this.overrideMaterial!==null)c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)i.getClearColor(this._oldClearColor),i.setClearColor(this.clearColor,i.getClearAlpha());if(this.clearAlpha!==null)r=i.getClearAlpha(),i.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)i.clearDepth();if(i.setRenderTarget(this.renderToScreen?null:p),this.clear===!0)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);if(i.render(this.scene,this.camera),this.clearColor!==null)i.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)i.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=c;i.autoClear=M}}var ye={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class z extends F{constructor(i,u=1,p,M){super();this.strength=u,this.radius=p,this.threshold=M,this.resolution=i!==void 0?new n(i.x,i.y):new n(256,256),this.clearColor=new t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new f(r,c,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let P=0;P<this.nMips;P++){let R=new f(r,c,{type:_,depthBuffer:!1});R.texture.name="UnrealBloomPass.h"+P,R.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(R);let S=new f(r,c,{type:_,depthBuffer:!1});S.texture.name="UnrealBloomPass.v"+P,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),r=Math.round(r/2),c=Math.round(c/2)}let g=ye;this.highPassUniforms=O.clone(g.uniforms),this.highPassUniforms.luminosityThreshold.value=M,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new h({uniforms:this.highPassUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader}),this.separableBlurMaterials=[];let b=[6,10,14,18,22];r=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let P=0;P<this.nMips;P++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(b[P])),this.separableBlurMaterials[P].uniforms.invSize.value=new n(1/r,1/c),r=Math.round(r/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=u,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let y=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=y,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=O.clone(k.uniforms),this.blendMaterial=new h({uniforms:this.copyUniforms,vertexShader:k.vertexShader,fragmentShader:k.fragmentShader,premultipliedAlpha:!0,blending:w,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t,this._oldClearAlpha=1,this._basic=new v,this._fsQuad=new I(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose();for(let i=0;i<this.separableBlurMaterials.length;i++)this.separableBlurMaterials[i].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(i,u){let p=Math.round(i/2),M=Math.round(u/2);this.renderTargetBright.setSize(p,M);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(p,M),this.renderTargetsVertical[r].setSize(p,M),this.separableBlurMaterials[r].uniforms.invSize.value=new n(1/p,1/M),p=Math.round(p/2),M=Math.round(M/2)}render(i,u,p,M,r){i.getClearColor(this._oldClearColor),this._oldClearAlpha=i.getClearAlpha();let c=i.autoClear;if(i.autoClear=!1,i.setClearColor(this.clearColor,0),r)i.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=p.texture,i.setRenderTarget(null),i.clear(),this._fsQuad.render(i);this.highPassUniforms.tDiffuse.value=p.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,i.setRenderTarget(this.renderTargetBright),i.clear(),this._fsQuad.render(i);let g=this.renderTargetBright;for(let b=0;b<this.nMips;b++)this._fsQuad.material=this.separableBlurMaterials[b],this.separableBlurMaterials[b].uniforms.colorTexture.value=g.texture,this.separableBlurMaterials[b].uniforms.direction.value=z.BlurDirectionX,i.setRenderTarget(this.renderTargetsHorizontal[b]),i.clear(),this._fsQuad.render(i),this.separableBlurMaterials[b].uniforms.colorTexture.value=this.renderTargetsHorizontal[b].texture,this.separableBlurMaterials[b].uniforms.direction.value=z.BlurDirectionY,i.setRenderTarget(this.renderTargetsVertical[b]),i.clear(),this._fsQuad.render(i),g=this.renderTargetsVertical[b];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,i.setRenderTarget(this.renderTargetsHorizontal[0]),i.clear(),this._fsQuad.render(i),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)i.state.buffers.stencil.setTest(!0);if(this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else i.setRenderTarget(p),this._fsQuad.render(i);i.setClearColor(this._oldClearColor,this._oldClearAlpha),i.autoClear=c}_getSeparableBlurMaterial(i){let u=[],p=i/3;for(let c=0;c<i;c++)u.push(0.39894*Math.exp(-0.5*c*c/(p*p))/p);let M=[],r=[];for(let c=1;c<i;c+=2){let g=u[c],b=c+1<i?u[c+1]:0,y=g+b;M.push((c*g+(c+1)*b)/y),r.push(y)}return new h({defines:{KERNEL_PAIRS:M.length},uniforms:{colorTexture:{value:null},invSize:{value:new n(0.5,0.5)},direction:{value:new n(0.5,0.5)},centerWeight:{value:u[0]},gaussianOffsets:{value:M},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(i){return new h({defines:{NUM_MIPS:i},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}z.BlurDirectionX=new n(1,0);z.BlurDirectionY=new n(0,1);var K={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Te extends F{constructor(){super();this.isOutputPass=!0,this.uniforms=O.clone(K.uniforms),this.material=new Se({name:K.name,uniforms:this.uniforms,vertexShader:K.vertexShader,fragmentShader:K.fragmentShader}),this._fsQuad=new I(this.material),this._outputColorSpace=null,this._toneMapping=null}render(i,u,p){if(this.uniforms.tDiffuse.value=p.texture,this.uniforms.toneMappingExposure.value=i.toneMappingExposure,this._outputColorSpace!==i.outputColorSpace||this._toneMapping!==i.toneMapping){if(this._outputColorSpace=i.outputColorSpace,this._toneMapping=i.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===o)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ce)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===he)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===ue)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Z)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===fe)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===pe)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===de)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(u),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var j=["still","low","medium","high"],be={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Be({gpu:i="",coarse:u=!1,width:p=1440,memory:M=8,cores:r=8,override:c=null}={}){if(c&&j.includes(c))return c;if(/swiftshader|llvmpipe|software|basic render/i.test(i))return"still";if(u&&p<760)return"low";if(M&&M<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(i))return"high";if(/intel|uhd|iris|mali|adreno|powervr|radeon(tm)? graphics|vega/i.test(i)||M<=4||r<=4)return"medium";return"high"}function Ne({slowMs:i=22,verySlowMs:u=40,window:p=90,warmup:M=45}={}){let r=[],c=M;return{sample(g,b){if(c>0)return c--,null;if(r.push(g),r.length<p)return null;let y=r.reduce((R,S)=>R+S,0)/r.length;r.length=0;let P=j.indexOf(b);if(b==="low"&&y>u)return"still";if(y>i&&P>1)return j[P-1];return null},reset(){r.length=0,c=M}}}var De={gateway:{host:"#home .hero-visual",section:"#home",load:()=>(Re("28ktev5z"),import("./gateway-28ktev5z.js"))}},q=document.documentElement,_e=new URLSearchParams(location.search);function He(){return matchMedia("(prefers-reduced-motion: reduce)").matches||_e.get("motion")==="off"||q.classList.contains("motion-off")}function We(i){try{let u=i.getExtension("WEBGL_debug_renderer_info");return u?String(i.getParameter(u.UNMASKED_RENDERER_WEBGL)):String(i.getParameter(i.RENDERER))}catch{return""}}function ke(){if(He())return;let i=new ze({antialias:!0,alpha:!1,powerPreference:"high-performance"}),u=i.getContext(),p=Be({gpu:We(u),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:_e.get("tier")}),M=j.includes(_e.get("tier"));if(q.dataset.worldTier=p,p==="still"){i.dispose();return}i.outputColorSpace=T,i.toneMapping=Z,i.toneMappingExposure=1;let r=i.domElement;r.className="world-canvas",r.setAttribute("aria-hidden","true"),r.tabIndex=-1;let c=new le(i),g=c.fromScene(new me,0.04).texture;c.dispose();let b={tier:p,settings:be[p],pointer:new n,pointerTarget:new n,progress:0},y=new Map,P=Ne(),R=new Fe(!1),S=null,E=null,X=null,V=0,Y=!1,se=()=>{if(!S)return;let{width:C,height:A}=S.host.getBoundingClientRect();if(!C||!A)return;if(i.setPixelRatio(Math.min(devicePixelRatio||1,b.settings.dpr)),i.setSize(C,A,!1),S.world.resize(C,A,b),E){E.setPixelRatio(i.getPixelRatio()),E.setSize(C,A);let B=i.getPixelRatio()*b.settings.bloomScale;X?.setSize(Math.max(64,Math.round(C*B)),Math.max(64,Math.round(A*B)))}},we=()=>{if(E?.dispose(),E=null,X=null,!S||!b.settings.bloom)return;E=new xe(i),E.addPass(new Me(S.world.scene,S.world.camera));let C=S.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};X=new z(new n(256,256),C.strength,C.radius,C.threshold),E.addPass(X),E.addPass(new Te)},re=(C)=>{if(C===p)return;if(p=C,q.dataset.worldTier=p,p==="still"){ee(),ae(),r.remove();return}b.tier=p,b.settings=be[p],P.reset(),S?.world.setTier?.(b),we(),se()},Ce=(C)=>{if(b.pointer.lerp(b.pointerTarget,Math.min(1,C*3)),S.section){let A=S.section.getBoundingClientRect();b.progress=Math.min(1,Math.max(0,-A.top/Math.max(1,A.height)))}if(S.world.update(C,b),E)E.render(C);else i.render(S.world.scene,S.world.camera)},Pe=()=>{if(V=0,!S||!Y||document.hidden)return;let C=Math.min(0.05,R.getDelta()),A=performance.now();Ce(C);let B=M?null:P.sample(Math.max(C*1000,performance.now()-A),p);if(B)re(B);if(p!=="still")V=requestAnimationFrame(Pe)},oe=()=>{if(!V&&S&&Y)R.start(),R.getDelta(),V=requestAnimationFrame(Pe)},ee=()=>{cancelAnimationFrame(V),V=0,R.stop()},ae=()=>{if(!S)return;S.host.classList.remove("world-live"),S.section?.classList.remove("world-live"),S=null};async function Le(C){if(S?.name===C)return;let A=De[C],B=document.querySelector(A.host);if(!B)return;let L=y.get(C);if(!L){L=await(await A.load()).create({renderer:i,environment:g,state:b});try{await i.compileAsync(L.scene,L.camera)}catch{}y.set(C,L)}if(p==="still")return;ae(),S={name:C,world:L,host:B,section:document.querySelector(A.section)},B.prepend(r),we(),se(),P.reset(),Ce(0.016),requestAnimationFrame(()=>{B.classList.add("world-live"),S?.section?.classList.add("world-live")}),oe()}let Oe=new IntersectionObserver((C)=>{C.forEach((A)=>{let B=A.target.dataset.world;if(A.isIntersecting)Y=!0,Le(B).catch((L)=>{q.dataset.worldError=String(L?.message||L).slice(0,120)}),oe();else if(S?.name===B)Y=!1,ee()})},{rootMargin:"80px 0px"});Object.entries(De).forEach(([C,A])=>{let B=document.querySelector(A.section);if(!B)return;B.dataset.world=C,Oe.observe(B)}),addEventListener("pointermove",(C)=>{b.pointerTarget.set(C.clientX/innerWidth*2-1,C.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",se,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)oe();else ee()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(C)=>{if(C.matches)re("still")}),r.addEventListener("webglcontextlost",(C)=>{C.preventDefault(),ee(),ae(),r.remove(),q.dataset.worldTier="still"}),window.__worldStage={get tier(){return p},get active(){return S?.name||null},setTier:re}}if(typeof window<"u"&&typeof document<"u")try{ke()}catch(i){document.documentElement.dataset.worldError=String(i?.message||i).slice(0,120)}
