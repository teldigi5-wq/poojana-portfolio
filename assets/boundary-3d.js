(()=>{var al="187";var ol=0,Xr=1,ll=2;var Ki=1,cl=2,Ti=3,wi=0,Fe=1,We=2,Qn=0,Qi=1,Ye=2,qr=3,Yr=4,hl=5;var Ai=100,ul=101,dl=102,fl=103,pl=104,ml=200,gl=201,_l=202,xl=203,vl=204,yl=205,Sl=206,Ml=207,bl=208,El=209,Tl=210,wl=211,Al=212,Rl=213,Cl=214,Il=0,Pl=1,Ll=2,Zr=3,Nl=4,Dl=5,Ul=6,Fl=7,Ol=0,Bl=1,zl=2,hn=0,Jr=1,$r=2,Kr=3,ji=4,Qr=5,jr=6,ta=7;var ts=301,Ri=302,Vs=303,Xs=304,Gl=1000,qs=1001,kl=1002,Fn=1003,Hl=1004;var es=1005;var Ze=1006,Ys=1007;var On=1008;var nn=1009,Wl=1010,Vl=1011,ns=1012,ea=1013,Bn=1014,bn=1015,un=1016,na=1017,ia=1018,jn=1020,Xl=35902,ql=35899,Yl=1021,Zl=1022,En=1023,Ci=1026,zn=1027,Jl=1028,sa=1029,ti=1030,ra=1031;var aa=1033,Zs=33776,Js=33777,$s=33778,Ks=33779,oa=35840,la=35841,ca=35842,ha=35843,ua=36196,da=37492,fa=37496,pa=37488,ma=37489,Qs=37490,ga=37491,_a=37808,xa=37809,va=37810,ya=37811,Sa=37812,Ma=37813,ba=37814,Ea=37815,Ta=37816,wa=37817,Aa=37818,Ra=37819,Ca=37820,Ia=37821,Pa=36492,La=36494,Na=36495,Da=36283,Ua=36284,js=36285,Fa=36286;var Oa=0,$l=1,ei="",is="srgb",Ba="srgb-linear",za="linear",oe="srgb";var Kl=512,Ql=513,jl=514,Ga=515,tc=516,ec=517,ka=518,Ha=519;var Wa="300 es",Va=2000;function oh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function $i(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nc(){let t=$i("canvas");return t.style.display="block",t}var Lo={},bi=null;function Xa(...t){let e="THREE."+t.shift();if(bi)bi("log",e,...t);else console.log(e,...t)}function ic(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ft(...t){t=ic(t);let e="THREE."+t.shift();if(bi)bi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Bt(...t){t=ic(t);let e="THREE."+t.shift();if(bi)bi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Yi(...t){let e=t.join(" ");if(e in Lo)return;Lo[e]=!0,Ft(...t)}function sc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var rc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Tn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=1234567,Zi=Math.PI/180,Ei=180/Math.PI;function Ii(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[t&255]+De[t>>8&255]+De[t>>16&255]+De[t>>24&255]+"-"+De[e&255]+De[e>>8&255]+"-"+De[e>>16&15|64]+De[e>>24&255]+"-"+De[n&63|128]+De[n>>8&255]+"-"+De[n>>16&255]+De[n>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function qa(t,e){return(t%e+e)%e}function ch(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function hh(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function Ji(t,e,n){return(1-n)*t+n*e}function uh(t,e,n,i){return Ji(t,e,1-Math.exp(-n*i))}function dh(t,e=1){return e-Math.abs(qa(t,e*2)-e)}function fh(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function ph(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function mh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gh(t,e){return t+Math.random()*(e-t)}function _h(t){return t*(0.5-Math.random())}function xh(t){if(t!==void 0)No=t;let e=No+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vh(t){return t*Zi}function yh(t){return t*Ei}function Sh(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Mh(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ya(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function bh(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),d=a((e-i)/2),g=r((i-e)/2),y=a((i-e)/2);switch(s){case"XYX":t.set(o*u,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*y,l*g,o*c);break;case"YXY":t.set(l*g,o*u,l*y,o*c);break;case"ZYZ":t.set(l*y,l*g,o*u,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Za(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ac(t,e){if(e.constructor===Float32Array)return t;let n=Za(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function oc(t,e){if(e.constructor===Float32Array)return t;let n=Za(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var wn={DEG2RAD:Zi,RAD2DEG:Ei,generateUUID:Ii,clamp:$t,euclideanModulo:qa,mapLinear:ch,inverseLerp:hh,lerp:Ji,damp:uh,pingpong:dh,smoothstep:fh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:_h,seededRandom:xh,degToRad:vh,radToDeg:yh,isPowerOfTwo:Sh,ceilPowerOfTwo:Mh,floorPowerOfTwo:Ya,setQuaternionFromProperEuler:bh,normalize:oc,denormalize:ac};class Vt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],f=s[r+0],d=s[r+1],g=s[r+2],y=s[r+3];if(u!==y||o!==f||l!==d||c!==g){let S=o*f+l*d+c*g+u*y;if(S<0)f=-f,d=-d,g=-g,y=-y,S=-S;let p=1-a;if(S<0.9995){let h=Math.acos(S),b=Math.sin(h);p=Math.sin(p*h)/b,a=Math.sin(a*h)/b,o=o*p+f*a,l=l*p+d*a,c=c*p+g*a,u=u*p+y*a}else{o=o*p+f*a,l=l*p+d*a,c=c*p+g*a,u=u*p+y*a;let h=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=h,l*=h,c*=h,u*=h}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],f=s[r+1],d=s[r+2],g=s[r+3];return t[e]=a*g+c*u+o*d-l*f,t[e+1]=o*g+c*f+l*u-a*d,t[e+2]=l*g+c*d+a*f-o*u,t[e+3]=c*g-a*u-o*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),f=o(n/2),d=o(i/2),g=o(s/2);switch(r){case"XYZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"YXZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"ZXY":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"ZYX":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"YZX":this._x=f*c*u+l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u-f*d*g;break;case"XZY":this._x=f*c*u-l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u+f*d*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){let d=0.5/Math.sqrt(f+1);this._w=0.25/d,this._x=(c-o)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(c-o)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(o+c)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Do.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Er.copy(this).projectOnVector(t),this.sub(Er)}reflect(t){return this.sub(Er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Er=new F,Do=new sn;class Gt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=i[0],S=i[3],p=i[6],h=i[1],b=i[4],T=i[7],E=i[2],w=i[5],R=i[8];return s[0]=r*y+a*h+o*E,s[3]=r*S+a*b+o*w,s[6]=r*p+a*T+o*R,s[1]=l*y+c*h+u*E,s[4]=l*S+c*b+u*w,s[7]=l*p+c*T+u*R,s[2]=f*y+d*h+g*E,s[5]=f*S+d*b+g*w,s[8]=f*p+d*T+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,f=a*o-c*s,d=l*s-r*o,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(i*l-c*n)*y,t[2]=(a*n-i*r)*y,t[3]=f*y,t[4]=(c*e-i*o)*y,t[5]=(i*s-a*e)*y,t[6]=d*y,t[7]=(n*o-l*e)*y,t[8]=(r*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Tr=new Gt,Uo=new Gt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Fo=new Gt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Eh(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Uo,fromXYZ:Fo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Uo,fromXYZ:Fo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Jt=Eh();function Mn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Mi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var li;class Ja{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(li===void 0)li=$i("canvas");li.width=t.width,li.height=t.height;let i=li.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$i("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Mn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Mn(e[n]/255)*255);else e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Th=0;class ss{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width||0,e.height||0,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(wr(i[r].image));else s.push(wr(i[r]))}else s=wr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function wr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Ja.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ft("Texture: Unable to serialize Texture."),{}}var wh=0,Ar=new F;class Ce extends Tn{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ce.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ii(),this.name="",this.source=new ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ar).x}get height(){return this.source.getSize(Ar).y}get depth(){return this.source.getSize(Ar).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=300;Ce.DEFAULT_ANISOTROPY=1;class pe{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],f=o[1],d=o[5],g=o[9],y=o[2],S=o[6],p=o[10];if(Math.abs(c-f)<0.01&&Math.abs(u-y)<0.01&&Math.abs(g-S)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(u+y)<0.1&&Math.abs(g+S)<0.1&&Math.abs(l+d+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,T=(d+1)/2,E=(p+1)/2,w=(c+f)/4,R=(u+y)/4,m=(g+S)/4;if(b>T&&b>E)if(b<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(b),i=w/n,s=R/n;else if(T>E)if(T<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(T),n=w/i,s=m/i;else if(E<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(E),n=R/s,i=m/s;return this.set(n,i,s,e),this}let h=Math.sqrt((S-g)*(S-g)+(u-y)*(u-y)+(f-c)*(f-c));if(Math.abs(h)<0.001)h=1;return this.x=(S-g)/h,this.y=(u-y)/h,this.z=(f-c)/h,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $a extends Tn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ce({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)e.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ss(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Je extends $a{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class tr extends Ce{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ka extends Ce{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ie{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,f,d,g,y,S){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,f,d,g,y,S)}set(t,e,n,i,s,r,a,o,l,c,u,f,d,g,y,S){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),s=1/ci.setFromMatrixColumn(t,1).length(),r=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=r*c,d=r*u,g=a*c,y=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*o,e[2]=y-f*l,e[6]=g+d*l,e[10]=r*o}else if(t.order==="YXZ"){let f=o*c,d=o*u,g=l*c,y=l*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=r*o}else if(t.order==="ZXY"){let f=o*c,d=o*u,g=l*c,y=l*u;e[0]=f-y*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*c,e[9]=y-f*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let f=r*c,d=r*u,g=a*c,y=a*u;e[0]=o*c,e[4]=g*l-d,e[8]=f*l+y,e[1]=o*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let f=r*o,d=r*l,g=a*o,y=a*l;e[0]=o*c,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=r*o,d=r*l,g=a*o,y=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=f*u+y,e[5]=r*c,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*c,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ah,t,Rh)}lookAt(t,e,n){let i=this.elements;if(ke.subVectors(t,e),ke.lengthSq()===0)ke.z=1;if(ke.normalize(),Pn.crossVectors(n,ke),Pn.lengthSq()===0){if(Math.abs(n.z)===1)ke.x+=0.0001;else ke.z+=0.0001;ke.normalize(),Pn.crossVectors(n,ke)}return Pn.normalize(),ys.crossVectors(ke,Pn),i[0]=Pn.x,i[4]=ys.x,i[8]=ke.x,i[1]=Pn.y,i[5]=ys.y,i[9]=ke.y,i[2]=Pn.z,i[6]=ys.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],S=n[10],p=n[14],h=n[3],b=n[7],T=n[11],E=n[15],w=i[0],R=i[4],m=i[8],x=i[12],A=i[1],U=i[5],P=i[9],k=i[13],Q=i[2],C=i[6],Y=i[10],z=i[14],B=i[3],lt=i[7],X=i[11],tt=i[15];return s[0]=r*w+a*A+o*Q+l*B,s[4]=r*R+a*U+o*C+l*lt,s[8]=r*m+a*P+o*Y+l*X,s[12]=r*x+a*k+o*z+l*tt,s[1]=c*w+u*A+f*Q+d*B,s[5]=c*R+u*U+f*C+d*lt,s[9]=c*m+u*P+f*Y+d*X,s[13]=c*x+u*k+f*z+d*tt,s[2]=g*w+y*A+S*Q+p*B,s[6]=g*R+y*U+S*C+p*lt,s[10]=g*m+y*P+S*Y+p*X,s[14]=g*x+y*k+S*z+p*tt,s[3]=h*w+b*A+T*Q+E*B,s[7]=h*R+b*U+T*C+E*lt,s[11]=h*m+b*P+T*Y+E*X,s[15]=h*x+b*k+T*z+E*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],S=t[11],p=t[15],h=o*d-l*f,b=a*d-l*u,T=a*f-o*u,E=r*d-l*c,w=r*f-o*c,R=r*u-a*c;return e*(y*h-S*b+p*T)-n*(g*h-S*E+p*w)+i*(g*b-y*E+p*R)-s*(g*T-y*w+S*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],S=t[14],p=t[15],h=e*a-n*r,b=e*o-i*r,T=e*l-s*r,E=n*o-i*a,w=n*l-s*a,R=i*l-s*o,m=c*y-u*g,x=c*S-f*g,A=c*p-d*g,U=u*S-f*y,P=u*p-d*y,k=f*p-d*S,Q=h*k-b*P+T*U+E*A-w*x+R*m;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/Q;return t[0]=(a*k-o*P+l*U)*C,t[1]=(i*P-n*k-s*U)*C,t[2]=(y*R-S*w+p*E)*C,t[3]=(f*w-u*R-d*E)*C,t[4]=(o*A-r*k-l*x)*C,t[5]=(e*k-i*A+s*x)*C,t[6]=(S*T-g*R-p*b)*C,t[7]=(c*R-f*T+d*b)*C,t[8]=(r*P-a*A+l*m)*C,t[9]=(n*A-e*P-s*m)*C,t[10]=(g*w-y*T+p*h)*C,t[11]=(u*T-c*w-d*h)*C,t[12]=(a*x-r*U-o*m)*C,t[13]=(e*U-n*x+i*m)*C,t[14]=(y*b-g*E-S*h)*C,t[15]=(c*E-u*b+f*h)*C,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,u=a+a,f=s*l,d=s*c,g=s*u,y=r*c,S=r*u,p=a*u,h=o*l,b=o*c,T=o*u,{x:E,y:w,z:R}=n;return i[0]=(1-(y+p))*E,i[1]=(d+T)*E,i[2]=(g-b)*E,i[3]=0,i[4]=(d-T)*w,i[5]=(1-(f+p))*w,i[6]=(S+h)*w,i[7]=0,i[8]=(g+b)*R,i[9]=(S-h)*R,i[10]=(1-(f+y))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=ci.set(i[0],i[1],i[2]).length(),a=ci.set(i[4],i[5],i[6]).length(),o=ci.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Qe.copy(this);let l=1/r,c=1/a,u=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=c,Qe.elements[5]*=c,Qe.elements[6]*=c,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),g,y;if(o)g=s/(r-s),y=r*s/(r-s);else if(a===2000)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(a===2001)g=-r/(r-s),y=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),g,y;if(o)g=1/(r-s),y=r/(r-s);else if(a===2000)g=-2/(r-s),y=-(r+s)/(r-s);else if(a===2001)g=-1/(r-s),y=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ci=new F,Qe=new ie,Ah=new F(0,0,0),Rh=new F(1,1,1),Pn=new F,ys=new F,ke=new F,Oo=new ie,Bo=new sn;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":if(this._y=Math.asin($t(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,d),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin($t(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,d),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin($t(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,d);break;case"XZY":if(this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,d),this._y=0;break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class er{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Ch=0,zo=new F,hi=new sn,_n=new ie,Ss=new F,ki=new F,Ih=new F,Ph=new sn,Go=new F(1,0,0),ko=new F(0,1,0),Ho=new F(0,0,1),Wo={type:"added"},Lh={type:"removed"},ui={type:"childadded",child:null},Rr={type:"childremoved",child:null};class xe extends Tn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();let t=new F,e=new qe,n=new sn,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Gt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Go,t)}rotateY(t){return this.rotateOnAxis(ko,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Go,t)}translateY(t){return this.translateOnAxis(ko,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Ss.copy(t);else Ss.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)_n.lookAt(ki,Ss,this.up);else _n.lookAt(Ss,ki,this.up);if(this.quaternion.setFromRotationMatrix(_n),i)_n.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(_n),this.quaternion.premultiply(hi.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Bt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),ui.child=t,this.dispatchEvent(ui),ui.child=null;else Bt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld);return t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(f.length>0)n.skeletons=f;if(d.length>0)n.animations=d;if(g.length>0)n.nodes=g}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xe.DEFAULT_UP=new F(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class en extends xe{constructor(){super();this.isGroup=!0,this.type="Group"}}var Nh={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let S=e.getJointPose(y,n),p=this._getHandJoint(l,y);if(S!==null)p.matrix.fromArray(S.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=S.radius;p.visible=S!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),d=0.02,g=0.005;if(l.inputState.pinching&&f>d+g)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&f<=d-g)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Nh)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Cr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=qa(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Cr(r,s,t+0.3333333333333333),this.g=Cr(r,s,t),this.b=Cr(r,s,t-0.3333333333333333)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ft("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=lc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ft("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Jt.workingToColorSpace(Ue.copy(this),t),Math.round($t(Ue.r*255,0,255))*65536+Math.round($t(Ue.g*255,0,255))*256+Math.round($t(Ue.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Ue.copy(this),e);let{r:n,g:i,b:s}=Ue,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t="srgb"){Jt.workingToColorSpace(Ue.copy(this),t);let{r:e,g:n,b:i}=Ue;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Ms);let n=Ji(Ln.h,Ms.h,e),i=Ji(Ln.s,Ms.s,e),s=Ji(Ln.l,Ms.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ue=new Ot;Ot.NAMES=lc;class as{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new as(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pi extends xe{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var je=new F,xn=new F,Ir=new F,vn=new F,di=new F,fi=new F,Vo=new F,Pr=new F,Lr=new F,Nr=new F,Dr=new pe,Ur=new pe,Fr=new pe;class Xe{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){je.subVectors(i,e),xn.subVectors(n,e),Ir.subVectors(t,e);let r=je.dot(je),a=je.dot(xn),o=je.dot(Ir),l=xn.dot(xn),c=xn.dot(Ir),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*o-a*c)*f,g=(r*c-a*o)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,vn)===null)return!1;return vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,vn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,vn.x),o.addScaledVector(r,vn.y),o.addScaledVector(a,vn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Dr.setScalar(0),Ur.setScalar(0),Fr.setScalar(0),Dr.fromBufferAttribute(t,e),Ur.fromBufferAttribute(t,n),Fr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Dr,s.x),r.addScaledVector(Ur,s.y),r.addScaledVector(Fr,s.z),r}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),xn.subVectors(t,e),je.cross(xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),je.cross(xn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;di.subVectors(i,n),fi.subVectors(s,n),Pr.subVectors(t,n);let o=di.dot(Pr),l=fi.dot(Pr);if(o<=0&&l<=0)return e.copy(n);Lr.subVectors(t,i);let c=di.dot(Lr),u=fi.dot(Lr);if(c>=0&&u<=c)return e.copy(i);let f=o*u-c*l;if(f<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(n).addScaledVector(di,r);Nr.subVectors(t,s);let d=di.dot(Nr),g=fi.dot(Nr);if(g>=0&&d<=g)return e.copy(s);let y=d*l-o*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(fi,a);let S=c*g-d*u;if(S<=0&&u-c>=0&&d-g>=0)return Vo.subVectors(s,i),a=(u-c)/(u-c+(d-g)),e.copy(i).addScaledVector(Vo,a);let p=1/(S+y+f);return r=y*p,a=f*p,e.copy(n).addScaledVector(di,r).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class An{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=tn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,tn);else tn.fromBufferAttribute(s,r);tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();bs.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();bs.copy(n.boundingBox)}bs.applyMatrix4(t.matrixWorld),this.union(bs)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),Es.subVectors(this.max,Hi),pi.subVectors(t.a,Hi),mi.subVectors(t.b,Hi),gi.subVectors(t.c,Hi),Nn.subVectors(mi,pi),Dn.subVectors(gi,mi),Yn.subVectors(pi,gi);let e=[0,-Nn.z,Nn.y,0,-Dn.z,Dn.y,0,-Yn.z,Yn.y,Nn.z,0,-Nn.x,Dn.z,0,-Dn.x,Yn.z,0,-Yn.x,-Nn.y,Nn.x,0,-Dn.y,Dn.x,0,-Yn.y,Yn.x,0];if(!Or(e,pi,mi,gi,Es))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Or(e,pi,mi,gi,Es))return!1;return Ts.crossVectors(Nn,Dn),e=[Ts.x,Ts.y,Ts.z],Or(e,pi,mi,gi,Es)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(tn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var yn=[new F,new F,new F,new F,new F,new F,new F,new F],tn=new F,bs=new An,pi=new F,mi=new F,gi=new F,Nn=new F,Dn=new F,Yn=new F,Hi=new F,Es=new F,Ts=new F,Zn=new F;function Or(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Zn.fromArray(t,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=e.dot(Zn),c=n.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var _e=new F,ws=new Vt,Dh=0;class Ie extends Tn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?Za(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=this._denormalize(e);return e}setX(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=this._denormalize(e);return e}setY(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=this._denormalize(e);return e}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=this._denormalize(e);return e}setW(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ac(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):oc(t,this.array)}}class nr extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ir extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Uh=new An,Wi=new F,Br=new F;class Gn{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Uh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);let e=Wi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Br)),this.expandByPoint(Wi.copy(t.center).sub(Br));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Fh=0,Ve=new ie,zr=new xe,_i=new F,He=new An,Vi=new An,Te=new F;class ve extends Tn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((oh(t))?ir:nr)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new An;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(He.setFromBufferAttribute(s),this.morphTargetsRelative)Te.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Te);else this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Gn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Vi.setFromBufferAttribute(a),this.morphTargetsRelative)Te.addVectors(He.min,Vi.min),He.expandByPoint(Te),Te.addVectors(He.max,Vi.max),He.expandByPoint(Te);else He.expandByPoint(Vi.min),He.expandByPoint(Vi.max)}He.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Te.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Te.fromBufferAttribute(a,l),o)_i.fromBufferAttribute(t,l),Te.add(_i);i=Math.max(i,n.distanceToSquared(Te))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let x=0;x<n.count;x++)a[x]=new F,o[x]=new F;let c=new F,u=new F,f=new F,d=new Vt,g=new Vt,y=new Vt,S=new F,p=new F;function h(x,A,U){l[x]=l[A]=l[U]=1,c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,U),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,A),y.fromBufferAttribute(s,U),u.sub(c),f.sub(c),g.sub(d),y.sub(d);let P=1/(g.x*y.y-y.x*g.y);if(!isFinite(P))return;S.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(P),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(P),a[x].add(S),a[A].add(S),a[U].add(S),o[x].add(p),o[A].add(p),o[U].add(p)}let b=this.groups;if(b.length===0)b=[{start:0,count:t.count}];for(let x=0,A=b.length;x<A;++x){let U=b[x],{start:P,count:k}=U;for(let Q=P,C=P+k;Q<C;Q+=3)h(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let T=new F,E=new F,w=new F,R=new F;function m(x){w.fromBufferAttribute(i,x),R.copy(w);let A=a[x];T.copy(A),T.sub(w.multiplyScalar(w.dot(A))).normalize(),E.crossVectors(R,A);let P=E.dot(o[x])<0?-1:1;r.setXYZW(x,T.x,T.y,T.z,P)}for(let x=0,A=n.count;x<A;++x)if(l[x])m(x);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new F,s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),S=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,S),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,S),a.add(c),o.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,f=new l.constructor(o.length*c),d=0,g=0;for(let y=0,S=o.length;y<S;y++){if(a.isInterleavedBufferAttribute)d=o[y]*a.data.stride+a.offset;else d=o[y]*c;for(let p=0;p<c;p++)f[g++]=l[d++]}return new Ie(f,c,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ve,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let f=l[c],d=t(f,n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];c.push(d.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Gr=new F,Oh=new F,Bh=new Gt;class cn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Gr.subVectors(n,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Gr),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bh.getNormalMatrix(t),i=this.coplanarPoint(Gr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var zh=0;class Rn extends Tn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Ot().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new cn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Vt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var Sn=new F,kr=new F,As=new F,Rs=new F;class sr{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){kr.copy(t).add(e).multiplyScalar(0.5),As.copy(e).sub(t).normalize(),Rs.copy(this.origin).sub(kr);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(As),a=Rs.dot(this.direction),o=-Rs.dot(As),l=Rs.lengthSq(),c=Math.abs(1-r*r),u,f,d,g;if(c>0)if(u=r*o-a,f=r*a-o,g=s*c,u>=0)if(f>=-g)if(f<=g){let y=1/c;u*=y,f*=y,d=u*(u+r*f+2*a)+f*(r*u+f+2*o)+l}else f=s,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*o)+l;else f=-s,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*o)+l;else if(f<=-g)u=Math.max(0,-(-r*s+a)),f=u>0?-s:Math.min(Math.max(-s,-o),s),d=-u*u+f*(f+2*o)+l;else if(f<=g)u=0,f=Math.min(Math.max(-s,-o),s),d=f*(f+2*o)+l;else u=Math.max(0,-(r*s+a)),f=u>0?s:Math.min(Math.max(-s,-o),s),d=-u*u+f*(f+2*o)+l;else f=r>0?-s:s,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(kr).addScaledVector(As,f);return d}intersectSphere(t,e){if(t.radius<0)return null;Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l;else n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l;if(c>=0)s=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c;else s=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-f.z)*u,o=(t.max.z-f.z)*u;else a=(t.max.z-f.z)*u,o=(t.min.z-f.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,u=t.x-r.x,f=t.y-r.y,d=t.z-r.z,g=e.x-r.x,y=e.y-r.y,S=e.z-r.z,p=n.x-r.x,h=n.y-r.y,b=n.z-r.z,T=Math.abs(o),E=Math.abs(l),w=Math.abs(c),R,m,x,A,U,P,k,Q,C,Y,z,B;if(T>=E&&T>=w)if(x=o,P=u,C=g,B=p,o>=0)R=l,m=c,A=f,U=d,k=y,Q=S,Y=h,z=b;else R=c,m=l,A=d,U=f,k=S,Q=y,Y=b,z=h;else if(E>=w)if(x=l,P=f,C=y,B=h,l>=0)R=c,m=o,A=d,U=u,k=S,Q=g,Y=b,z=p;else R=o,m=c,A=u,U=d,k=g,Q=S,Y=p,z=b;else if(x=c,P=d,C=S,B=b,c>=0)R=o,m=l,A=u,U=f,k=g,Q=y,Y=p,z=h;else R=l,m=o,A=f,U=u,k=y,Q=g,Y=h,z=p;if(x===0)return null;let lt=R/x,X=m/x,tt=1/x,at=A-lt*P,vt=U-X*P,q=k-lt*C,st=Q-X*C,bt=Y-lt*B,It=z-X*B,Lt=bt*st-It*q,Et=at*It-vt*bt,Qt=q*vt-st*at;if(i){if(Lt<0||Et<0||Qt<0)return null}else if((Lt<0||Et<0||Qt<0)&&(Lt>0||Et>0||Qt>0))return null;let Ht=Lt+Et+Qt;if(Ht===0)return null;let zt=tt*(Lt*P+Et*C+Qt*B);if(Ht>0?zt<0:zt>0)return null;return this.at(zt/Ht,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn extends Rn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Xo=new ie,Jn=new sr,Cs=new Gn,qo=new F,Is=new F,Ps=new F,Ls=new F,Hr=new F,Ns=new F,Yo=new F,Ds=new F;class ne extends xe{constructor(t=new ve,e=new rn){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(Hr.fromBufferAttribute(u,t),r)Ns.addScaledVector(Hr,c);else Ns.addScaledVector(Hr.sub(e),c)}e.add(Ns)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Jn.copy(t.ray).recast(t.near),Cs.containsPoint(Jn.origin)===!1){if(Jn.intersectSphere(Cs,qo)===null)return;if(Jn.origin.distanceToSquared(qo)>(t.far-t.near)**2)return}if(Xo.copy(s).invert(),Jn.copy(t.ray).applyMatrix4(Xo),n.boundingBox!==null){if(Jn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Jn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:f,drawRange:d}=s;if(a!==null)if(Array.isArray(r))for(let g=0,y=f.length;g<y;g++){let S=f[g],p=r[S.materialIndex],h=Math.max(S.start,d.start),b=Math.min(a.count,Math.min(S.start+S.count,d.start+d.count));for(let T=h,E=b;T<E;T+=3){let w=a.getX(T),R=a.getX(T+1),m=a.getX(T+2);if(i=Us(this,p,t,n,l,c,u,w,R,m),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let S=g,p=y;S<p;S+=3){let h=a.getX(S),b=a.getX(S+1),T=a.getX(S+2);if(i=Us(this,r,t,n,l,c,u,h,b,T),i)i.faceIndex=Math.floor(S/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,y=f.length;g<y;g++){let S=f[g],p=r[S.materialIndex],h=Math.max(S.start,d.start),b=Math.min(o.count,Math.min(S.start+S.count,d.start+d.count));for(let T=h,E=b;T<E;T+=3){let w=T,R=T+1,m=T+2;if(i=Us(this,p,t,n,l,c,u,w,R,m),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let S=g,p=y;S<p;S+=3){let h=S,b=S+1,T=S+2;if(i=Us(this,r,t,n,l,c,u,h,b,T),i)i.faceIndex=Math.floor(S/3),e.push(i)}}}}function Gh(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Ds.copy(o),Ds.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ds);if(c<n.near||c>n.far)return null;return{distance:c,point:Ds.clone(),object:t}}function Us(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Is),t.getVertexPosition(l,Ps),t.getVertexPosition(c,Ls);let u=Gh(t,e,n,i,Is,Ps,Ls,Yo);if(u){let f=new F;if(Xe.getBarycoord(Yo,Is,Ps,Ls,f),s)u.uv=Xe.getInterpolatedAttribute(s,o,l,c,f,new Vt);if(r)u.uv1=Xe.getInterpolatedAttribute(r,o,l,c,f,new Vt);if(a){if(u.normal=Xe.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let d={a:o,b:l,c,normal:new F,materialIndex:0};Xe.getNormal(Is,Ps,Ls,d.normal),u.face=d,u.barycoord=f}return u}class rr extends Ce{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,f){super(null,r,a,o,l,c,i,s,u,f);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws extends Ie{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var xi=new ie,Zo=new ie,Fs=[],Jo=new An,kh=new ie,Xi=new ne,qi=new Gn;class Li extends ne{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kh)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new An;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Jo.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(Jo)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new Gn;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),qi.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,xi),Zo.multiplyMatrices(n,xi),Xi.matrixWorld=Zo,Xi.raycast(t,Fs);for(let r=0,a=Fs.length;r<a;r++){let o=Fs[r];o.instanceId=s,o.object=this,e.push(o)}Fs.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new rr(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var $n=new Gn,Hh=new Vt(0.5,0.5),Os=new F;class Kn{constructor(t=new cn,e=new cn,n=new cn,i=new cn,s=new cn,r=new cn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],g=s[8],y=s[9],S=s[10],p=s[11],h=s[12],b=s[13],T=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,p-g,E-h).normalize(),i[1].setComponents(l+r,d+c,p+g,E+h).normalize(),i[2].setComponents(l+a,d+u,p+y,E+b).normalize(),i[3].setComponents(l-a,d-u,p-y,E-b).normalize(),n)i[4].setComponents(o,f,S,T).normalize(),i[5].setComponents(l-o,d-f,p-S,E-T).normalize();else if(i[4].setComponents(l-o,d-f,p-S,E-T).normalize(),e===2000)i[5].setComponents(l+o,d+f,p+S,E+T).normalize();else if(e===2001)i[5].setComponents(o,f,S,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=Hh.distanceTo(t.center);return $n.radius=0.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Os.x=i.normal.x>0?t.max.x:t.min.x,Os.y=i.normal.y>0?t.max.y:t.min.y,Os.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var $o=new ie;class ar{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];if($o.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new Kn;n[i].setFromProjectionMatrix($o,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++){if(e[i]===void 0)e[i]=new Kn;e[i].copy(n[i])}return this._count=t._count,this}clone(){return new ar().copy(this)}}class Cn extends Rn{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Ko=new ie,Vr=new sr,Bs=new Gn,zs=new F;class kn extends xe{constructor(t=new ve,e=new Cn){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=s,t.ray.intersectsSphere(Bs)===!1)return;Ko.copy(i).invert(),Vr.copy(t.ray).applyMatrix4(Ko);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=f,y=d;g<y;g++){let S=l.getX(g);zs.fromBufferAttribute(u,S),Qo(zs,S,o,i,t,e,this)}}else{let f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,y=d;g<y;g++)zs.fromBufferAttribute(u,g),Qo(zs,g,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qo(t,e,n,i,s,r,a){let o=Vr.distanceSqToPoint(t);if(o<n){let l=new F;Vr.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class or extends Ce{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lr extends Ce{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn extends Ce{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class cr extends Hn{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hr extends Ce{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class an extends ve{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(u,2));function g(y,S,p,h,b,T,E,w,R,m,x){let A=T/R,U=E/m,P=T/2,k=E/2,Q=w/2,C=R+1,Y=m+1,z=0,B=0,lt=new F;for(let X=0;X<Y;X++){let tt=X*U-k;for(let at=0;at<C;at++){let vt=at*A-P;lt[y]=vt*h,lt[S]=tt*b,lt[p]=Q,l.push(lt.x,lt.y,lt.z),lt[y]=0,lt[S]=0,lt[p]=w>0?1:-1,c.push(lt.x,lt.y,lt.z),u.push(at/R),u.push(1-X/m),z+=1}}for(let X=0;X<m;X++)for(let tt=0;tt<R;tt++){let at=f+tt+C*X,vt=f+tt+C*(X+1),q=f+(tt+1)+C*(X+1),st=f+(tt+1)+C*X;o.push(at,vt,st),o.push(vt,q,st),B+=6}a.addGroup(d,B,x),d+=B,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ni extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new F,c=new Vt;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,o.push(c.x,c.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Di extends ve{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],f=[],d=[],g=0,y=[],S=n/2,p=0;if(h(),r===!1){if(t>0)b(!0);if(e>0)b(!1)}this.setIndex(c),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function h(){let T=new F,E=new F,w=0,R=(e-t)/n;for(let m=0;m<=s;m++){let x=[],A=m/s,U=A*(e-t)+t;for(let P=0;P<=i;P++){let k=P/i,Q=k*o+a,C=Math.sin(Q),Y=Math.cos(Q);E.x=U*C,E.y=-A*n+S,E.z=U*Y,u.push(E.x,E.y,E.z),T.set(C,R,Y).normalize(),f.push(T.x,T.y,T.z),d.push(k,1-A),x.push(g++)}y.push(x)}for(let m=0;m<i;m++)for(let x=0;x<s;x++){let A=y[x][m],U=y[x+1][m],P=y[x+1][m+1],k=y[x][m+1];if(t>0||x!==0)c.push(A,U,k),w+=3;if(e>0||x!==s-1)c.push(U,P,k),w+=3}l.addGroup(p,w,0),p+=w}function b(T){let E=g,w=new Vt,R=new F,m=0,x=T===!0?t:e,A=T===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,S*A,0),f.push(0,A,0),d.push(0.5,0.5),g++;let U=g;for(let P=0;P<=i;P++){let Q=P/i*o+a,C=Math.cos(Q),Y=Math.sin(Q);R.x=x*Y,R.y=S*A,R.z=x*C,u.push(R.x,R.y,R.z),f.push(0,A,0),w.x=C*0.5+0.5,w.y=Y*0.5*A+0.5,d.push(w.x,w.y),g++}for(let P=0;P<i;P++){let k=E+P,Q=U+P;if(T===!0)c.push(Q,Q+1,k);else c.push(Q+1,Q,k);m+=3}l.addGroup(p,m,T===!0?1:2),p+=m}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class os extends ve{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(s.slice(),3)),this.setAttribute("uv",new ue(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(h){let b=new F,T=new F,E=new F;for(let w=0;w<e.length;w+=3)d(e[w+0],b),d(e[w+1],T),d(e[w+2],E),o(b,T,E,h)}function o(h,b,T,E){let w=E+1,R=[];for(let m=0;m<=w;m++){R[m]=[];let x=h.clone().lerp(T,m/w),A=b.clone().lerp(T,m/w),U=w-m;for(let P=0;P<=U;P++)if(P===0&&m===w)R[m][P]=x;else R[m][P]=x.clone().lerp(A,P/U)}for(let m=0;m<w;m++)for(let x=0;x<2*(w-m)-1;x++){let A=Math.floor(x/2);if(x%2===0)f(R[m][A+1]),f(R[m+1][A]),f(R[m][A]);else f(R[m][A+1]),f(R[m+1][A+1]),f(R[m+1][A])}}function l(h){let b=new F;for(let T=0;T<s.length;T+=3)b.x=s[T+0],b.y=s[T+1],b.z=s[T+2],b.normalize().multiplyScalar(h),s[T+0]=b.x,s[T+1]=b.y,s[T+2]=b.z}function c(){let h=new F;for(let b=0;b<s.length;b+=3){h.x=s[b+0],h.y=s[b+1],h.z=s[b+2];let T=S(h)/2/Math.PI+0.5,E=p(h)/Math.PI+0.5;r.push(T,1-E)}g(),u()}function u(){for(let h=0;h<r.length;h+=6){let b=r[h+0],T=r[h+2],E=r[h+4],w=Math.max(b,T,E),R=Math.min(b,T,E);if(w>0.9&&R<0.1){if(b<0.2)r[h+0]+=1;if(T<0.2)r[h+2]+=1;if(E<0.2)r[h+4]+=1}}}function f(h){s.push(h.x,h.y,h.z)}function d(h,b){let T=h*3;b.x=t[T+0],b.y=t[T+1],b.z=t[T+2]}function g(){let h=new F,b=new F,T=new F,E=new F,w=new Vt,R=new Vt,m=new Vt;for(let x=0,A=0;x<s.length;x+=9,A+=6){h.set(s[x+0],s[x+1],s[x+2]),b.set(s[x+3],s[x+4],s[x+5]),T.set(s[x+6],s[x+7],s[x+8]),w.set(r[A+0],r[A+1]),R.set(r[A+2],r[A+3]),m.set(r[A+4],r[A+5]),E.copy(h).add(b).add(T).divideScalar(3);let U=S(E);y(w,A+0,h,U),y(R,A+2,b,U),y(m,A+4,T,U)}}function y(h,b,T,E){if(E<0&&h.x===1)r[b]=h.x-1;if(T.x===0&&T.z===0)r[b]=E/2/Math.PI+0.5}function S(h){return Math.atan2(h.z,-h.x)}function p(h){return Math.atan2(-h.y,Math.sqrt(h.x*h.x+h.z*h.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.vertices,t.indices,t.radius,t.detail)}}class ls extends os{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ls(t.radius,t.detail)}}class cs extends os{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e);this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cs(t.radius,t.detail)}}class hs extends ve{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,f=e/o,d=[],g=[],y=[],S=[];for(let p=0;p<c;p++){let h=p*f-r;for(let b=0;b<l;b++){let T=b*u-s;g.push(T,-h,0),y.push(0,0,1),S.push(b/a),S.push(1-p/o)}}for(let p=0;p<o;p++)for(let h=0;h<a;h++){let b=h+l*p,T=h+l*(p+1),E=h+1+l*(p+1),w=h+1+l*p;d.push(b,T,w),d.push(T,E,w)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ui extends ve{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new F,f=new F,d=[],g=[],y=[],S=[];for(let p=0;p<=n;p++){let h=[],b=p/n,T=r+b*a,E=t*Math.cos(T),w=Math.sqrt(t*t-E*E),R=0;if(p===0&&r===0)R=0.5/e;else if(p===n&&o===Math.PI)R=-0.5/e;for(let m=0;m<=e;m++){let x=m/e,A=i+x*s;u.x=-w*Math.cos(A),u.y=E,u.z=w*Math.sin(A),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),S.push(x+R,1-b),h.push(l++)}c.push(h)}for(let p=0;p<n;p++)for(let h=0;h<e;h++){let b=c[p][h+1],T=c[p][h],E=c[p+1][h],w=c[p+1][h+1];if(p!==0||r>0)d.push(b,T,w);if(p!==n-1||o<Math.PI)d.push(T,E,w)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fi extends ve{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],u=[],f=new F,d=new F,g=new F;for(let y=0;y<=n;y++){let S=r+y/n*a;for(let p=0;p<=i;p++){let h=p/i*s;d.x=(t+e*Math.cos(S))*Math.cos(h),d.y=(t+e*Math.cos(S))*Math.sin(h),d.z=e*Math.sin(S),l.push(d.x,d.y,d.z),f.x=t*Math.cos(h),f.y=t*Math.sin(h),g.subVectors(d,f).normalize(),c.push(g.x,g.y,g.z),u.push(p/i),u.push(y/n)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){let p=(i+1)*y+S-1,h=(i+1)*(y-1)+S-1,b=(i+1)*(y-1)+S,T=(i+1)*y+S;o.push(p,h,T),o.push(h,b,T)}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ni(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(jo(s))if(s.isRenderTargetTexture)Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(jo(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Oe(t){let e={};for(let n=0;n<t.length;n++){let i=ni(t[n]);for(let s in i)e[s]=i[s]}return e}function jo(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Wh(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qa(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Jt.workingColorSpace}var cc={clone:ni,merge:Oe},Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Rn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class ja extends on{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends Rn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ur extends Rn{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class to extends Rn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eo extends Rn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function vi(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Gs(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class ii{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class no extends ii{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),y=g*g,S=y*g,p=-f*S+2*f*y-f*g,h=(1+f)*S+(-1.5-2*f)*y+(-0.5+f)*g+1,b=(-1-d)*S+(1.5+d)*y+0.5*g,T=d*S-d*y;for(let E=0;E!==a;++E)s[E]=p*r[c+E]+h*r[l+E]+b*r[o+E]+T*r[u+E];return s}}class io extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let f=0;f!==a;++f)s[f]=r[l+f]*u+r[o+f]*c;return s}}class so extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ro extends ii{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let g=(n-e)/(i-e),y=1-g;for(let S=0;S!==a;++S)s[S]=r[l+S]*y+r[o+S]*g;return s}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let y=r[l+g],S=r[o+g],p=d*f+g*2,h=u[p],b=u[p+1],T=t*f+g*2,E=c[T],w=c[T+1],R=Yh(n,e,h,E,i);s[g]=hc(R,y,b,w,S)}return s}}function hc(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function qh(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Yh(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=hc(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=qh(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class $e{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vi(e,this.TimeBufferType),this.values=vi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vi(t.times,Array),values:vi(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Gs(t.settings))n.settings={inTangents:vi(t.settings.inTangents,Array),outTangents:vi(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;if(Gs(this.settings))tl(this.settings.inTangents,t),tl(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Gs(this.settings))el(this.settings.inTangents,t),el(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Bt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Bt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Bt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Bt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(lh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,f=r*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Gs(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function tl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function el(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=2301;class si extends $e{constructor(t,e,n){super(t,e,n)}}si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=2300;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends $e{constructor(t,e,n,i){super(t,e,n,i)}}ao.prototype.ValueTypeName="color";class oo extends $e{constructor(t,e,n,i){super(t,e,n,i)}}oo.prototype.ValueTypeName="number";class lo extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)sn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class dr extends $e{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;class ri extends $e{constructor(t,e,n){super(t,e,n)}}ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=2300;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends $e{constructor(t,e,n,i){super(t,e,n,i)}}co.prototype.ValueTypeName="vector";class ho{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global)d.lastIndex=0;if(d.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var uc=new ho;class uo{constructor(t){if(this.manager=t!==void 0?t:uc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}uo.DEFAULT_MATERIAL_NAME="__DEFAULT";class fr extends xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}var Wr=new ie,nl=new F,il=new F;class pr{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kn,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(nl),il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(il),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wr,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var ks=new F,Hs=new sn,ln=new F;class mr extends xe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ks,Hs,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ks,Hs,ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ks,Hs,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ks,Hs,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Un=new F,sl=new Vt,rl=new Vt;class ze extends mr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Ei*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zi*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(Zi*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zi*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class dc extends pr{constructor(){super(new ze(90,1,0.5,500));this.isPointLightShadow=!0}}class ai extends fr{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class gr extends mr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class fc extends pr{constructor(){super(new gr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class us extends fr{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new fc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var yi=-90,Si=1;class ds extends xe{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ze(yi,Si,t,e);i.layers=this.layers,this.add(i);let s=new ze(yi,Si,t,e);s.layers=this.layers,this.add(s);let r=new ze(yi,Si,t,e);r.layers=this.layers,this.add(r);let a=new ze(yi,Si,t,e);a.layers=this.layers,this.add(a);let o=new ze(yi,Si,t,e);o.layers=this.layers,this.add(o);let l=new ze(yi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let S=!1;if(t.isWebGLRenderer===!0)S=t.state.buffers.depth.getReversed();else S=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,i),S&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fo extends ze{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}var po="\\[\\]\\.:\\/",Zh=new RegExp("["+po+"]","g"),mo="[^"+po+"]",Jh="[^"+po.replace("\\.","")+"]",$h=/((?:WC+[\/:])*)/.source.replace("WC",mo),Kh=/(WCOD+)?/.source.replace("WCOD",Jh),Qh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mo),jh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mo),tu=new RegExp("^"+$h+Kh+Qh+jh+"$"),eu=["material","materials","bones","map"];class pc{constructor(t,e,n){let i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class se{constructor(t,e,n){this.path=e,this.parsedPath=n||se.parseTrackName(e),this.node=se.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new se(t,e,n);else return new se.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zh,"")}static parseTrackName(t){let e=tu.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(eu.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=se.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}se.Composite=pc;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zm=new Float32Array(1);class mc{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function go(t,e,n,i){let s=nu(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function nu(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)Ft("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Oc(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function iu(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)g=t.HALF_FLOAT;else g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let{array:u,updateRanges:f}=l;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((g,y)=>g.start-y.start);let d=0;for(let g=1;g<f.length;g++){let y=f[d],S=f[g];if(S.start<=y.start+y.count+1)y.count=Math.max(y.count,S.start+S.count-y.start);else++d,f[d]=S}f.length=d+1;for(let g=0,y=f.length;g<y;g++){let S=f[g];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ju=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ed=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:su,alphahash_pars_fragment:ru,alphamap_fragment:au,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:hu,aomap_pars_fragment:uu,batching_pars_vertex:du,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:xu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:yu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:Mu,color_fragment:bu,color_pars_fragment:Eu,color_pars_vertex:Tu,color_vertex:wu,common:Au,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Cu,displacementmap_vertex:Iu,emissivemap_fragment:Pu,emissivemap_pars_fragment:Lu,colorspace_fragment:Nu,colorspace_pars_fragment:Du,envmap_fragment:Uu,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Ou,envmap_pars_vertex:Bu,envmap_physical_pars_fragment:Ju,envmap_vertex:zu,fog_vertex:Gu,fog_pars_vertex:ku,fog_fragment:Hu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Vu,lightmap_pars_fragment:Xu,lights_lambert_fragment:qu,lights_lambert_pars_fragment:Yu,lights_pars_begin:Zu,lights_toon_fragment:$u,lights_toon_pars_fragment:Ku,lights_phong_fragment:Qu,lights_phong_pars_fragment:ju,lights_physical_fragment:td,lights_physical_pars_fragment:ed,lights_fragment_begin:nd,lights_fragment_maps:id,lights_fragment_end:sd,lightprobes_pars_fragment:rd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:ud,map_particle_fragment:dd,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphinstance_vertex:gd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:vd,morphtarget_vertex:yd,normal_fragment_begin:Sd,normal_fragment_maps:Md,normal_pars_fragment:bd,normal_pars_vertex:Ed,normal_vertex:Td,normalmap_pars_fragment:wd,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Id,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Nd,project_vertex:Dd,dithering_fragment:Ud,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Gd,shadowmap_vertex:kd,shadowmask_pars_fragment:Hd,skinbase_vertex:Wd,skinning_pars_vertex:Vd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:Zd,tonemapping_fragment:Jd,tonemapping_pars_fragment:$d,transmission_fragment:Kd,transmission_pars_fragment:Qd,uv_pars_fragment:jd,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:lf,cube_frag:cf,depth_vert:hf,depth_frag:uf,distance_vert:df,distance_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:_f,meshbasic_vert:xf,meshbasic_frag:vf,meshlambert_vert:yf,meshlambert_frag:Sf,meshmatcap_vert:Mf,meshmatcap_frag:bf,meshnormal_vert:Ef,meshnormal_frag:Tf,meshphong_vert:wf,meshphong_frag:Af,meshphysical_vert:Rf,meshphysical_frag:Cf,meshtoon_vert:If,meshtoon_frag:Pf,points_vert:Lf,points_frag:Nf,shadow_vert:Df,shadow_frag:Uf,sprite_vert:Ff,sprite_frag:Of},gt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Vt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},pn={basic:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Oe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Oe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Oe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Oe([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Oe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Oe([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Oe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Oe([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Oe([gt.common,gt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Oe([gt.lights,gt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};pn.physical={uniforms:Oe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var _r={r:0,b:0,g:0},Bf=new ie,Bc=new Gt;Bc.set(-1,0,0,0,1,0,0,0,1);function zf(t,e,n,i,s,r){let a=new Ot(0),o=s===!0?0:1,l,c,u=null,f=0,d=null;function g(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let E=b.backgroundBlurriness>0;T=e.get(T,E)}return T}function y(b){let T=!1,E=g(b);if(E===null)p(a,o);else if(E&&E.isColor)p(E,1),T=!0;let w=t.xr.getEnvironmentBlendMode();if(w==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(w==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||T)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function S(b,T){let E=g(T);if(E&&E.isCubeTexture){if(c===void 0)c=new ne(new an(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:ni(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Bc);if(c.material.toneMapped=Jt.getTransfer(E.colorSpace)!==oe,u!==E||f!==E.version||d!==t.toneMapping)c.material.needsUpdate=!0,u=E,f=E.version,d=t.toneMapping;c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)}else if(E&&E.isTexture){if(l===void 0)l=new ne(new hs(2,2),new on({name:"BackgroundMaterial",uniforms:ni(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(E.colorSpace)!==oe,E.matrixAutoUpdate===!0)E.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(E.matrix),u!==E||f!==E.version||d!==t.toneMapping)l.material.needsUpdate=!0,u=E,f=E.version,d=t.toneMapping;l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)}}function p(b,T){b.getRGB(_r,Qa(t)),n.buffers.color.setClear(_r.r,_r.g,_r.b,T,r)}function h(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:y,addToRenderList:S,dispose:h}}function Gf(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(P,k,Q,C,Y){let z=!1,B=f(P,C,Q,k);if(r!==B)r=B,c(r.object);if(z=g(P,C,Q,Y),z)y(P,C,Q,Y);if(Y!==null)e.update(Y,t.ELEMENT_ARRAY_BUFFER);if(z||a){if(a=!1,E(P,k,Q,C),Y!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer)}}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function f(P,k,Q,C){let Y=C.wireframe===!0,z=i[k.id];if(z===void 0)z={},i[k.id]=z;let B=P.isInstancedMesh===!0?P.id:0,lt=z[B];if(lt===void 0)lt={},z[B]=lt;let X=lt[Q.id];if(X===void 0)X={},lt[Q.id]=X;let tt=X[Y];if(tt===void 0)tt=d(l()),X[Y]=tt;return tt}function d(P){let k=[],Q=[],C=[];for(let Y=0;Y<n;Y++)k[Y]=0,Q[Y]=0,C[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:C,object:P,attributes:{},index:null}}function g(P,k,Q,C){let Y=r.attributes,z=k.attributes,B=0,lt=Q.getAttributes();for(let X in lt)if(lt[X].location>=0){let at=Y[X],vt=z[X];if(vt===void 0){if(X==="instanceMatrix"&&P.instanceMatrix)vt=P.instanceMatrix;if(X==="instanceColor"&&P.instanceColor)vt=P.instanceColor}if(at===void 0)return!0;if(at.attribute!==vt)return!0;if(vt&&at.data!==vt.data)return!0;B++}if(r.attributesNum!==B)return!0;if(r.index!==C)return!0;return!1}function y(P,k,Q,C){let Y={},z=k.attributes,B=0,lt=Q.getAttributes();for(let X in lt)if(lt[X].location>=0){let at=z[X];if(at===void 0){if(X==="instanceMatrix"&&P.instanceMatrix)at=P.instanceMatrix;if(X==="instanceColor"&&P.instanceColor)at=P.instanceColor}let vt={};if(vt.attribute=at,at&&at.data)vt.data=at.data;Y[X]=vt,B++}r.attributes=Y,r.attributesNum=B,r.index=C}function S(){let P=r.newAttributes;for(let k=0,Q=P.length;k<Q;k++)P[k]=0}function p(P){h(P,0)}function h(P,k){let Q=r.newAttributes,C=r.enabledAttributes,Y=r.attributeDivisors;if(Q[P]=1,C[P]===0)t.enableVertexAttribArray(P),C[P]=1;if(Y[P]!==k)t.vertexAttribDivisor(P,k),Y[P]=k}function b(){let P=r.newAttributes,k=r.enabledAttributes;for(let Q=0,C=k.length;Q<C;Q++)if(k[Q]!==P[Q])t.disableVertexAttribArray(Q),k[Q]=0}function T(P,k,Q,C,Y,z,B){if(B===!0)t.vertexAttribIPointer(P,k,Q,Y,z);else t.vertexAttribPointer(P,k,Q,C,Y,z)}function E(P,k,Q,C){S();let Y=C.attributes,z=Q.getAttributes(),B=k.defaultAttributeValues;for(let lt in z){let X=z[lt];if(X.location>=0){let tt=Y[lt];if(tt===void 0){if(lt==="instanceMatrix"&&P.instanceMatrix)tt=P.instanceMatrix;if(lt==="instanceColor"&&P.instanceColor)tt=P.instanceColor}if(tt!==void 0){let at=tt.normalized,vt=tt.itemSize,q=e.get(tt);if(q===void 0)continue;let{buffer:st,type:bt,bytesPerElement:It}=q,Lt=bt===t.INT||bt===t.UNSIGNED_INT||tt.gpuType===ea;if(tt.isInterleavedBufferAttribute){let Et=tt.data,Qt=Et.isInterleavedBuffer===!0?Et.stride:Et.itemSize,Ht=tt.offset;if(Et.isInstancedInterleavedBuffer||Et.isInstancedBufferAttribute){for(let zt=0;zt<X.locationSize;zt++)h(X.location+zt,Et.meshPerAttribute);if(P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=Et.meshPerAttribute*Et.count}else for(let zt=0;zt<X.locationSize;zt++)p(X.location+zt);t.bindBuffer(t.ARRAY_BUFFER,st);for(let zt=0;zt<X.locationSize;zt++)T(X.location+zt,vt/X.locationSize,bt,at,Qt*It,(Ht+vt/X.locationSize*zt)*It,Lt)}else{if(tt.isInstancedBufferAttribute){for(let Et=0;Et<X.locationSize;Et++)h(X.location+Et,tt.meshPerAttribute);if(P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=tt.meshPerAttribute*tt.count}else for(let Et=0;Et<X.locationSize;Et++)p(X.location+Et);t.bindBuffer(t.ARRAY_BUFFER,st);for(let Et=0;Et<X.locationSize;Et++)T(X.location+Et,vt/X.locationSize,bt,at,vt*It,vt/X.locationSize*Et*It,Lt)}}else if(B!==void 0){let at=B[lt];if(at!==void 0)switch(at.length){case 2:t.vertexAttrib2fv(X.location,at);break;case 3:t.vertexAttrib3fv(X.location,at);break;case 4:t.vertexAttrib4fv(X.location,at);break;default:t.vertexAttrib1fv(X.location,at)}}}}b()}function w(){A();for(let P in i){let k=i[P];for(let Q in k){let C=k[Q];for(let Y in C){let z=C[Y];for(let B in z)u(z[B].object),delete z[B];delete C[Y]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let Q in k){let C=k[Q];for(let Y in C){let z=C[Y];for(let B in z)u(z[B].object),delete z[B];delete C[Y]}}delete i[P.id]}function m(P){for(let k in i){let Q=i[k];for(let C in Q){let Y=Q[C];if(Y[P.id]===void 0)continue;let z=Y[P.id];for(let B in z)u(z[B].object),delete z[B];delete Y[P.id]}}}function x(P){for(let k in i){let Q=i[k],C=P.isInstancedMesh===!0?P.id:0,Y=Q[C];if(Y===void 0)continue;for(let z in Y){let B=Y[z];for(let lt in B)u(B[lt].object),delete B[lt];delete Y[z]}if(delete Q[C],Object.keys(Q).length===0)delete i[k]}}function A(){if(U(),a=!0,r===s)return;r=s,c(r.object)}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:m,initAttributes:S,enableAttribute:p,disableUnusedAttributes:b}}function kf(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let g=0;g<u;g++)d+=c[g];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hf(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){if(m!==En&&i.convert(m)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(m){let x=m===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(m!==nn&&m!==bn&&!x&&i.convert(m)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(m){if(m==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";m="mediump"}if(m==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Ft("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&f===!1;if(n.reversedDepthBuffer===!0&&f===!1)Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&f===!0)Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,maxSamples:w,samples:R}}function Wf(t){let e=this,n=null,i=0,s=!1,r=!1,a=new cn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let g=f.length!==0||d||i!==0||s;return s=d,i=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,g){let{clippingPlanes:y,clipIntersection:S,clipShadows:p}=f,h=t.get(f);if(!s||y===null||y.length===0||r&&!p)if(r)u(null);else c();else{let b=r?0:i,T=b*4,E=h.clippingState||null;l.value=E,E=u(y,d,T,g);for(let w=0;w!==T;++w)E[w]=n[w];h.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(f,d,g,y){let S=f!==null?f.length:0,p=null;if(S!==0){if(p=l.value,y!==!0||p===null){let h=g+S*4,b=d.matrixWorldInverse;if(o.getNormalMatrix(b),p===null||p.length<h)p=new Float32Array(h);for(let T=0,E=g;T!==S;++T,E+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}class vr extends Je{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new or(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Qn});s.uniforms.tEquirect.value=e;let r=new ne(i,s),a=e.minFilter;if(e.minFilter===On)e.minFilter=Ze;return new ds(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var gc=256,Vf=3,Xf=20,zc=256,Gc=16,qf=3,Yf=new F,Zf=new Ot;class Oi{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ds(1,10,null),this._boxMesh=new ne(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Yf}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(e>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:u,autoClearColor:f,autoClearDepth:d,autoClearStencil:g}=o,y=t.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,y===null)t.background=o.getClearColor(Zf);let S=new ds(n,i,c);if(S.position.copy(a),S.update(o,t),o.autoClear=u,o.autoClearColor=f,o.autoClearDepth=d,o.autoClearStencil=g,t.background=y,e>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,e);return this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gc,Ya(t))}_fromTexture(t,e){if(t.mapping===ts||t.mapping===Ri)this._setSize(t.image.length===0?gc:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=_c(t,!1,!1),n=Math.log2(t)-Vf;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==e||t&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=_c(e,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;if(t.mapping===ts||t.mapping===Ri){if(this._cubemapMaterial===null)this._cubemapMaterial=vc();e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=xc();e=this._equirectMaterial}e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=Jf(),this._integrationMaterial=$f();let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Gc);for(let r=0;r<=n;r++){let a=Oi.lodToRoughness(r,n);if(r>n-qf)s.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let o=a>0?Math.log2(e)+0.5*Math.log2(6/(zc*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){if(this._blurMaterial===null)this._blurMaterial=Kf();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function _c(t,e,n){return new vr(t,{minFilter:On,generateMipmaps:e,type:un,colorSpace:Ba,depthBuffer:n})}function gs(t,e,n){return new on({name:t,uniforms:e,vertexShader:Xt.cube_vert,fragmentShader:n,side:Fe,blending:Qn,depthTest:!1,depthWrite:!1})}function Jf(){return gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $f(){return gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Kf(){return gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xc(){return gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vc(){return gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qf(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,g=!1){if(d===null||d===void 0)return null;if(g)return a(d);return r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===Vs||g===Xs)if(e.has(d)){let y=e.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let S=new vr(y.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let g=d.mapping,y=g===Vs||g===Xs,S=g===ts||g===Ri;if(y||S){let p=n.get(d),h=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h){if(i===null)i=new Oi(t);return p=y?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture}else if(p!==void 0)return p.texture;else{let b=d.image;if(y&&b&&b.height>0||S&&b&&l(b)){if(i===null)i=new Oi(t);return p=y?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",u),p.texture}else return null}}}return d}function o(d,g){if(g===Vs)d.mapping=ts;else if(g===Xs)d.mapping=Ri;return d}function l(d){let g=0,y=6;for(let S=0;S<y;S++)if(d[S]!==void 0)g++;return g===y}function c(d){let g=d.target;g.removeEventListener("dispose",c);let y=e.get(g);if(y!==void 0)e.delete(g),y.dispose()}function u(d){let g=d.target;g.removeEventListener("dispose",u);let y=n.get(g);if(y!==void 0)n.delete(g),y.dispose()}function f(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:f}}function jf(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Yi("WebGLRenderer: "+i+" extension not supported.");return s}}}function tp(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((y)=>delete s[y]);function o(y){l(y.target)}function l(y){if(y.index!==null)e.remove(y.index);for(let p in y.attributes)e.remove(y.attributes[p]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let S=r.get(y);if(S)e.remove(S),r.delete(y);if(i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0)delete y._maxInstanceCount;n.memory.geometries--}function c(y,S){if(s[S.id]!==void 0)return S;return S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),n.memory.geometries++,S}function u(y){let S=y.attributes;for(let p in S)e.update(S[p],t.ARRAY_BUFFER)}function f(y){let S=y.index,p=y.attributes.position,h=0;if(p===void 0)return;let b=S!==null?S.array.length:p.array.length/3-1,E=new(p.count>=65535?ir:nr)(Math.ceil(b/3)*6,1),w=E.array;if(S!==null){let m=S.array;h=S.version;for(let x=0,A=0;x<b;x+=3){let U=m[x+0],P=m[x+1],k=m[x+2];w[A++]=U,w[A++]=P,w[A++]=P,w[A++]=k,w[A++]=k,w[A++]=U}}else{h=p.version;for(let m=0,x=0;m<b;m+=3){let A=m+0,U=m+1,P=m+2;w[x++]=A,w[x++]=U,w[x++]=U,w[x++]=P,w[x++]=P,w[x++]=A}}E.version=h;let R=r.get(y);if(R)e.remove(R);r.set(y,E)}function d(y){let S=r.get(y);if(S){let p=y.index;if(p!==null){if(S.version<p.version)f(y)}}else f(y);return r.get(y)}function g(){for(let y in s){let S=s[y].deref();if(S!==void 0)l(S)}}return{get:c,update:u,getWireframeAttribute:d,dispose:g}}function ep(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*a),n.update(d,i,1)}function c(f,d,g){if(g===0)return;t.drawElementsInstanced(i,d,r,f*a,g),n.update(d,i,g)}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let S=0;for(let p=0;p<g;p++)S+=d[p];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function np(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ip(t,e,n){let i=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==f){let A=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",A)};if(d!==void 0)d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;if(g===!0)T=1;if(y===!0)T=2;if(S===!0)T=3;let E=o.attributes.position.count*T,w=1;if(E>e.maxTextureSize)w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize;let R=new Float32Array(E*w*4*f),m=new tr(R,E,w,f);m.type=bn,m.needsUpdate=!0;let x=T*4;for(let U=0;U<f;U++){let P=p[U],k=h[U],Q=b[U],C=E*w*4*U;for(let Y=0;Y<P.count;Y++){let z=Y*x;if(g===!0)s.fromBufferAttribute(P,Y),R[C+z+0]=s.x,R[C+z+1]=s.y,R[C+z+2]=s.z,R[C+z+3]=0;if(y===!0)s.fromBufferAttribute(k,Y),R[C+z+4]=s.x,R[C+z+5]=s.y,R[C+z+6]=s.z,R[C+z+7]=0;if(S===!0)s.fromBufferAttribute(Q,Y),R[C+z+8]=s.x,R[C+z+9]=s.y,R[C+z+10]=s.z,R[C+z+11]=Q.itemSize===4?s.w:1}}d={count:f,texture:m,size:new Vt(E,w)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let S=0;S<c.length;S++)g+=c[S];let y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function sp(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u)e.update(d),r.set(d,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let g=c.skeleton;if(r.get(g)!==u)g.update(),r.set(g,u)}return d}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var rp={[Jr]:"LINEAR_TONE_MAPPING",[$r]:"REINHARD_TONE_MAPPING",[Kr]:"CINEON_TONE_MAPPING",[ji]:"ACES_FILMIC_TONE_MAPPING",[jr]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[Qr]:"CUSTOM_TONE_MAPPING"};function ap(t,e,n,i,s,r){let a=new Je(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new ve;u.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ue([0,2,0,0,2,0],2));let f=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ne(u,f),g=new gr(-1,1,1,-1,0,1),y=null,S=null,p=!1,h,b=null,T=[],E=!1;this.setSize=function(w,R){if(a.setSize(w,R),o!==null)o.setSize(w,R);if(l!==null)l.setSize(w,R);for(let m=0;m<T.length;m++){let x=T[m];if(x.setSize)x.setSize(w,R)}},this.setEffects=function(w){T=w,E=T.length>0&&T[0].isRenderPass===!0;let{width:R,height:m}=a;if(T.length>0&&o===null)o=new Je(R,m,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Je(R,m,{type:un,depthBuffer:!1,stencilBuffer:!1});let x=s===!0&&T.some((A)=>A.needsDepthTexture===!0);if(x!==(a.depthTexture!==null)){if(x===!0&&c===null){if(c=new Hn(R,m),r===!0)c.format=zn,c.type=jn}a.dispose(),a.depthTexture=x?c:null,a.resolveDepthBuffer=x,a.storeMultisampledDepthBuffer=x}for(let A=0;A<T.length;A++){let U=T[A];if(U.setSize)U.setSize(R,m);if(x&&U.needsDepthTexture===!0&&U.setDepthTexture)U.setDepthTexture(c)}},this.begin=function(w,R){if(p)return!1;if(w.toneMapping===hn&&T.length===0)return!1;if(b=R,R!==null){let{width:m,height:x}=R;if(a.width!==m||a.height!==x)this.setSize(m,x)}if(E===!1)w.setRenderTarget(a);return h=w.toneMapping,w.toneMapping=hn,!0},this.hasRenderPass=function(){return E},this.end=function(w,R){w.toneMapping=h,p=!0;let m=a,x=o;for(let A=0;A<T.length;A++){let U=T[A];if(U.enabled===!1)continue;if(U.render(w,x,m,R),U.needsSwap!==!1)m=x,x=x===o?l:o}if(y!==w.outputColorSpace||S!==w.toneMapping){if(y=w.outputColorSpace,S=w.toneMapping,f.defines={},Jt.getTransfer(y)===oe)f.defines.SRGB_TRANSFER="";let A=rp[S];if(A)f.defines[A]="";f.needsUpdate=!0}f.uniforms.tDiffuse.value=m.texture,w.setRenderTarget(b),w.render(d,g),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();u.dispose(),f.dispose()}}var kc=new Ce,Hc=new Hn(1,1),Wc=new cr(1),Vc=new tr,Xc=new Ka,qc=new or,yc=[],Sc=[],Mc=new Float32Array(16),bc=new Float32Array(9),Ec=new Float32Array(4);function Bi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=yc[s];if(r===void 0)r=new Float32Array(s),yc[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function ye(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Se(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yr(t,e){let n=Sc[e];if(n===void 0)n=new Int32Array(e),Sc[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function op(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function lp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ye(n,e))return;t.uniform2fv(this.addr,e),Se(n,e)}}function cp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(ye(n,e))return;t.uniform3fv(this.addr,e),Se(n,e)}}function hp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ye(n,e))return;t.uniform4fv(this.addr,e),Se(n,e)}}function up(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ye(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Se(n,e)}else{if(ye(n,i))return;Ec.set(i),t.uniformMatrix2fv(this.addr,!1,Ec),Se(n,i)}}function dp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ye(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Se(n,e)}else{if(ye(n,i))return;bc.set(i),t.uniformMatrix3fv(this.addr,!1,bc),Se(n,i)}}function fp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ye(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Se(n,e)}else{if(ye(n,i))return;Mc.set(i),t.uniformMatrix4fv(this.addr,!1,Mc),Se(n,i)}}function pp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function mp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ye(n,e))return;t.uniform2iv(this.addr,e),Se(n,e)}}function gp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ye(n,e))return;t.uniform3iv(this.addr,e),Se(n,e)}}function _p(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ye(n,e))return;t.uniform4iv(this.addr,e),Se(n,e)}}function xp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function vp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ye(n,e))return;t.uniform2uiv(this.addr,e),Se(n,e)}}function yp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ye(n,e))return;t.uniform3uiv(this.addr,e),Se(n,e)}}function Sp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ye(n,e))return;t.uniform4uiv(this.addr,e),Se(n,e)}}function Sr(t){if(t.version===0)t.compareFunction=Ha,t.needsUpdate=!0;return t}function Mp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)r=Sr(Hc);else r=kc;n.setTexture2D(e||r,s)}function bp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Xc,s)}function Ep(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_CUBE_SHADOW)r=Sr(Wc);else r=qc;n.setTextureCube(e||r,s)}function Tp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Vc,s)}function wp(t){switch(t){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}function Ap(t,e){t.uniform1fv(this.addr,e)}function Rp(t,e){let n=Bi(e,this.size,2);t.uniform2fv(this.addr,n)}function Cp(t,e){let n=Bi(e,this.size,3);t.uniform3fv(this.addr,n)}function Ip(t,e){let n=Bi(e,this.size,4);t.uniform4fv(this.addr,n)}function Pp(t,e){let n=Bi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Lp(t,e){let n=Bi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Np(t,e){let n=Bi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dp(t,e){t.uniform1iv(this.addr,e)}function Up(t,e){t.uniform2iv(this.addr,e)}function Fp(t,e){t.uniform3iv(this.addr,e)}function Op(t,e){t.uniform4iv(this.addr,e)}function Bp(t,e){t.uniform1uiv(this.addr,e)}function zp(t,e){t.uniform2uiv(this.addr,e)}function Gp(t,e){t.uniform3uiv(this.addr,e)}function kp(t,e){t.uniform4uiv(this.addr,e)}function Hp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!ye(i,r))t.uniform1iv(this.addr,r),Se(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Sr(Hc);else a=kc;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Wp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!ye(i,r))t.uniform1iv(this.addr,r),Se(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Xc,r[a])}function Vp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!ye(i,r))t.uniform1iv(this.addr,r),Se(i,r);let a;if(this.type===t.SAMPLER_CUBE_SHADOW)a=Sr(Wc);else a=qc;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function Xp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!ye(i,r))t.uniform1iv(this.addr,r),Se(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Vc,r[a])}function qp(t){switch(t){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Ip;case 35674:return Pp;case 35675:return Lp;case 35676:return Np;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return zp;case 36295:return Gp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}}class Zc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class Jc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var _o=/(\w+)(\])?(\[|\.)?/g;function Tc(t,e){t.seq.push(e),t.map[e.id]=e}function Yp(t,e,n){let i=t.name,s=i.length;_o.lastIndex=0;while(!0){let r=_o.exec(i),a=_o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Tc(n,c===void 0?new Yc(o,t,e):new Zc(o,t,e));break}else{let f=n.map[o];if(f===void 0)f=new Jc(o),Tc(n,f);n=f}}}class ms{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Yp(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function wc(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Zp=37297,Jp=0;function $p(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ac=new Gt;function Kp(t){Jt._getMatrix(Ac,Jt.workingColorSpace,t);let e=`mat3( ${Ac.elements.map((n)=>n.toFixed(4))} )`;switch(Jt.getTransfer(t)){case za:return[e,"LinearTransferOETF"];case oe:return[e,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rc(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+$p(t.getShaderSource(e),o)}else return r}function Qp(t,e){let n=Kp(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var jp={[Jr]:"Linear",[$r]:"Reinhard",[Kr]:"Cineon",[ji]:"ACESFilmic",[jr]:"AgX",[ta]:"Neutral",[Qr]:"Custom"};function tm(t,e){let n=jp[e];if(n===void 0)return Ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var xr=new F;function em(){Jt.getLuminanceCoefficients(xr);let t=xr.x.toFixed(4),e=xr.y.toFixed(4),n=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function nm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function im(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function sm(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ps(t){return t!==""}function Cc(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ic(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(t){return t.replace(rm,am)}function am(t,e){let n=Xt[e];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return vo(n)}var om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(t){return t.replace(om,lm)}function lm(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lc(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var cm={[Ki]:"SHADOWMAP_TYPE_PCF",[Ti]:"SHADOWMAP_TYPE_VSM"};function hm(t){return cm[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var um={[Ri]:"ENVMAP_MODE_REFRACTION"};function dm(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return um[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fm={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[Bl]:"ENVMAP_BLENDING_MIX",[zl]:"ENVMAP_BLENDING_ADD"};function pm(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return fm[t.combine]||"ENVMAP_BLENDING_NONE"}function mm(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=hm(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=dm(n),f=pm(n),d=nm(n),g=im(r),y=s.createProgram(),S,p,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ps).join(`
`),S.length>0)S+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ps).join(`
`),p.length>0)p+=`
`}else S=[Lc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[Lc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hn?"#define TONE_MAPPING":"",n.toneMapping!==hn?Xt.tonemapping_pars_fragment:"",n.toneMapping!==hn?tm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Qp("linearToOutputTexel",n.outputColorSpace),em(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`);if(a=vo(a),a=Cc(a,n),a=Ic(a,n),o=vo(o),o=Cc(o,n),o=Ic(o,n),a=Pc(a),o=Pc(o),n.isRawShaderMaterial!==!0)h=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",n.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let b=h+S+a,T=h+p+o,E=wc(s,s.VERTEX_SHADER,b),w=wc(s,s.FRAGMENT_SHADER,T);if(s.attachShader(y,E),s.attachShader(y,w),n.index0AttributeName!==void 0)s.bindAttribLocation(y,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(y,0,"position");s.linkProgram(y);function R(U){if(t.debug.checkShaderErrors){let P=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(E)||"",Q=s.getShaderInfoLog(w)||"",C=P.trim(),Y=k.trim(),z=Q.trim(),B=!0,lt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,y,E,w);else{let X=Rc(s,E,"vertex"),tt=Rc(s,w,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+C+`
`+X+`
`+tt)}else if(C!=="")Ft("WebGLProgram: Program Info Log:",C);else if(Y===""||z==="")lt=!1;if(lt)U.diagnostics={runnable:B,programLog:C,vertexShader:{log:Y,prefix:S},fragmentShader:{log:z,prefix:p}}}s.deleteShader(E),s.deleteShader(w),m=new ms(s,y),x=sm(s,y)}let m;this.getUniforms=function(){if(m===void 0)R(this);return m};let x;this.getAttributes=function(){if(x===void 0)R(this);return x};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(A===!1)A=s.getProgramParameter(y,Zp);return A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}var gm=0;class $c{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Kc(t),e.set(t,n);return n}}class Kc{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function _m(t){return t===ti||t===Qs||t===js}function xm(t,e,n,i,s,r){let a=new er,o=new $c,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){if(l.add(m),m===0)return"uv";return`uv${m}`}function y(m,x,A,U,P,k){let Q=U.fog,C=P.geometry,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?U.environment:null,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,B=e.get(m.envMap||Y,z),lt=d[m.type],X=i.precision;if(m.precision!==null){if(X=i.getMaxPrecision(m.precision),X!==m.precision)Ft("WebGLProgram.getParameters:",m.precision,"not supported, using",X,"instead.")}let tt=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,at=tt!==void 0?tt.length:0,vt=0;if(C.morphAttributes.position!==void 0)vt=1;if(C.morphAttributes.normal!==void 0)vt=2;if(C.morphAttributes.color!==void 0)vt=3;let q,st,bt,It;if(lt){let xt=pn[lt];q=xt.vertexShader,st=xt.fragmentShader}else{q=m.vertexShader,st=m.fragmentShader;let xt=o.getVertexShaderStage(m),re=o.getFragmentShaderStage(m);o.update(m,xt,re),bt=xt.id,It=re.id}let Lt=t.getRenderTarget(),Et=t.state.buffers.depth.getReversed(),Qt=P.isInstancedMesh===!0,Ht=P.isBatchedMesh===!0,zt=!!m.map,te=!!m.matcap,qt=!!B,le=qt&&B.isPMREMTexture===!0,ce=!!m.aoMap,Me=!!m.lightMap,Pe=!!m.bumpMap&&m.wireframe===!1,de=!!m.normalMap,me=!!m.displacementMap,we=!!m.emissiveMap,Ae=!!m.metalnessMap,Ge=!!m.roughnessMap,N=m.anisotropy>0,Z=m.clearcoat>0,ot=m.diffuseRoughness>0,Dt=m.dispersion>0,nt=m.retroreflectivity>0,Ut=m.iridescence>0,St=m.sheen>0,Mt=m.transmission>0,et=N&&!!m.anisotropyMap,M=Z&&!!m.clearcoatMap,_=Z&&!!m.clearcoatNormalMap,D=Z&&!!m.clearcoatRoughnessMap,it=ot&&!!m.diffuseRoughnessMap,j=Ut&&!!m.iridescenceMap,ct=Ut&&!!m.iridescenceThicknessMap,dt=St&&!!m.sheenColorMap,W=St&&!!m.sheenRoughnessMap,K=!!m.specularMap,ut=!!m.specularColorMap,I=!!m.specularIntensityMap,J=Mt&&!!m.transmissionMap,V=Mt&&!!m.thicknessMap,rt=!!m.gradientMap,ht=!!m.alphaMap,mt=m.alphaTest>0,Pt=!!m.alphaHash,Ct=!!m.extensions,_t=hn;if(m.toneMapped){if(Lt===null||Lt.isXRRenderTarget===!0)_t=t.toneMapping}let Nt=le?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Wt={shaderID:lt,shaderType:m.type,shaderName:m.name,vertexShader:q,fragmentShader:st,defines:m.defines,customVertexShaderID:bt,customFragmentShaderID:It,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:X,batching:Ht,batchingColor:Ht&&P._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&P.instanceColor!==null,instancingMorph:Qt&&P.morphTexture!==null,outputColorSpace:Lt===null?t.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:zt,matcap:te,envMap:qt,envMapMode:qt&&B.mapping,envMapPMREM:le,envMapMaxLod:le?Nt.length-1:null,envMapSize:le?Nt[0].width:null,aoMap:ce,lightMap:Me,bumpMap:Pe,normalMap:de,displacementMap:me,emissiveMap:we,normalMapObjectSpace:de&&m.normalMapType===$l,normalMapTangentSpace:de&&m.normalMapType===Oa,packedNormalMap:de&&m.normalMapType===Oa&&_m(m.normalMap.format),metalnessMap:Ae,roughnessMap:Ge,anisotropy:N,anisotropyMap:et,clearcoat:Z,clearcoatMap:M,clearcoatNormalMap:_,clearcoatRoughnessMap:D,diffuseRoughness:ot,diffuseRoughnessMap:it,dispersion:Dt,retroreflection:nt,iridescence:Ut,iridescenceMap:j,iridescenceThicknessMap:ct,sheen:St,sheenColorMap:dt,sheenRoughnessMap:W,specularMap:K,specularColorMap:ut,specularIntensityMap:I,transmission:Mt,transmissionMap:J,thicknessMap:V,gradientMap:rt,opaque:m.transparent===!1&&m.blending===Qi&&m.alphaToCoverage===!1,alphaMap:ht,alphaTest:mt,alphaHash:Pt,combine:m.combine,mapUv:zt&&g(m.map.channel),aoMapUv:ce&&g(m.aoMap.channel),lightMapUv:Me&&g(m.lightMap.channel),bumpMapUv:Pe&&g(m.bumpMap.channel),normalMapUv:de&&g(m.normalMap.channel),displacementMapUv:me&&g(m.displacementMap.channel),emissiveMapUv:we&&g(m.emissiveMap.channel),metalnessMapUv:Ae&&g(m.metalnessMap.channel),roughnessMapUv:Ge&&g(m.roughnessMap.channel),anisotropyMapUv:et&&g(m.anisotropyMap.channel),clearcoatMapUv:M&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&g(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&g(m.diffuseRoughnessMap.channel),iridescenceMapUv:j&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:W&&g(m.sheenRoughnessMap.channel),specularMapUv:K&&g(m.specularMap.channel),specularColorMapUv:ut&&g(m.specularColorMap.channel),specularIntensityMapUv:I&&g(m.specularIntensityMap.channel),transmissionMapUv:J&&g(m.transmissionMap.channel),thicknessMapUv:V&&g(m.thicknessMap.channel),alphaMapUv:ht&&g(m.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(de||N),vertexNormals:!!C.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(zt||ht),fog:!!Q,useFog:m.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||C.attributes.normal===void 0&&de===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Et,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:vt,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:k.filter((xt)=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:zt&&m.map.isVideoTexture===!0&&Jt.getTransfer(m.map.colorSpace)===oe,decodeVideoTextureEmissive:we&&m.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(m.emissiveMap.colorSpace)===oe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===We,flipSided:m.side===Fe,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ct&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&m.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function S(m){let x=[];if(m.shaderID)x.push(m.shaderID);else x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID);if(m.defines!==void 0)for(let A in m.defines)x.push(A),x.push(m.defines[A]);if(m.isRawShaderMaterial===!1)p(x,m),h(x,m),x.push(t.outputColorSpace);return x.push(m.customProgramCacheKey),x.join()}function p(m,x){m.push(x.precision),m.push(x.outputColorSpace),m.push(x.envMapMode),m.push(x.envMapPMREM),m.push(x.envMapMaxLod),m.push(x.envMapSize),m.push(x.mapUv),m.push(x.alphaMapUv),m.push(x.lightMapUv),m.push(x.aoMapUv),m.push(x.bumpMapUv),m.push(x.normalMapUv),m.push(x.displacementMapUv),m.push(x.emissiveMapUv),m.push(x.metalnessMapUv),m.push(x.roughnessMapUv),m.push(x.anisotropyMapUv),m.push(x.clearcoatMapUv),m.push(x.clearcoatNormalMapUv),m.push(x.clearcoatRoughnessMapUv),m.push(x.diffuseRoughnessMapUv),m.push(x.iridescenceMapUv),m.push(x.iridescenceThicknessMapUv),m.push(x.sheenColorMapUv),m.push(x.sheenRoughnessMapUv),m.push(x.specularMapUv),m.push(x.specularColorMapUv),m.push(x.specularIntensityMapUv),m.push(x.transmissionMapUv),m.push(x.thicknessMapUv),m.push(x.combine),m.push(x.fogExp2),m.push(x.sizeAttenuation),m.push(x.morphTargetsCount),m.push(x.numSunLights),m.push(x.numDirLights),m.push(x.numPointLights),m.push(x.numSpotLights),m.push(x.numSpotLightMaps),m.push(x.numHemiLights),m.push(x.numRectAreaLights),m.push(x.numSunLightShadows),m.push(x.numDirLightShadows),m.push(x.numPointLightShadows),m.push(x.numSpotLightShadows),m.push(x.numSpotLightShadowsWithMaps),m.push(x.numLightProbes),m.push(x.numLightProbeGrids),m.push(x.shadowMapType),m.push(x.toneMapping),m.push(x.numClippingPlanes),m.push(x.numClipIntersection),m.push(x.depthPacking)}function h(m,x){if(a.disableAll(),x.instancing)a.enable(0);if(x.instancingColor)a.enable(1);if(x.instancingMorph)a.enable(2);if(x.matcap)a.enable(3);if(x.envMap)a.enable(4);if(x.normalMapObjectSpace)a.enable(5);if(x.normalMapTangentSpace)a.enable(6);if(x.clearcoat)a.enable(7);if(x.iridescence)a.enable(8);if(x.alphaTest)a.enable(9);if(x.vertexColors)a.enable(10);if(x.vertexAlphas)a.enable(11);if(x.vertexUv1s)a.enable(12);if(x.vertexUv2s)a.enable(13);if(x.vertexUv3s)a.enable(14);if(x.vertexTangents)a.enable(15);if(x.anisotropy)a.enable(16);if(x.alphaHash)a.enable(17);if(x.batching)a.enable(18);if(x.dispersion)a.enable(19);if(x.retroreflection)a.enable(24);if(x.diffuseRoughness)a.enable(25);if(x.batchingColor)a.enable(20);if(x.gradientMap)a.enable(21);if(x.packedNormalMap)a.enable(22);if(x.vertexNormals)a.enable(23);if(m.push(a.mask),a.disableAll(),x.fog)a.enable(0);if(x.useFog)a.enable(1);if(x.flatShading)a.enable(2);if(x.logarithmicDepthBuffer)a.enable(3);if(x.reversedDepthBuffer)a.enable(4);if(x.skinning)a.enable(5);if(x.morphTargets)a.enable(6);if(x.morphNormals)a.enable(7);if(x.morphColors)a.enable(8);if(x.premultipliedAlpha)a.enable(9);if(x.shadowMapEnabled)a.enable(10);if(x.doubleSided)a.enable(11);if(x.flipSided)a.enable(12);if(x.useDepthPacking)a.enable(13);if(x.dithering)a.enable(14);if(x.transmission)a.enable(15);if(x.sheen)a.enable(16);if(x.opaque)a.enable(17);if(x.pointsUvs)a.enable(18);if(x.decodeVideoTexture)a.enable(19);if(x.decodeVideoTextureEmissive)a.enable(20);if(x.alphaToCoverage)a.enable(21);if(x.numLightProbeGrids>0)a.enable(22);if(x.hasPositionAttribute)a.enable(23);m.push(a.mask)}function b(m){let x=d[m.type],A;if(x){let U=pn[x];A=cc.clone(U.uniforms)}else A=m.uniforms;return A}function T(m,x){let A=u.get(x);if(A!==void 0)++A.usedTimes;else A=new mm(t,x,m,s),c.push(A),u.set(x,A);return A}function E(m){if(--m.usedTimes===0){let x=c.indexOf(m);c[x]=c[c.length-1],c.pop(),u.delete(m.cacheKey),m.destroy()}}function w(m){o.remove(m)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:b,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:R}}function vm(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function ym(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Nc(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Dc(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d){let g=0;if(d.isInstancedMesh)g+=2;if(d.isSkinnedMesh)g+=1;return g}function o(d,g,y,S,p,h){let b=t[e];if(b===void 0)b={id:d.id,object:d,geometry:g,material:y,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:p,group:h},t[e]=b;else b.id=d.id,b.object=d,b.geometry=g,b.material=y,b.materialVariant=a(d),b.groupOrder=S,b.renderOrder=d.renderOrder,b.z=p,b.group=h;return e++,b}function l(d,g,y,S,p,h,b){if(b.reversedDepth===!0)p=-p;let T=o(d,g,y,S,p,h);if(y.transmission>0)i.push(T);else if(y.transparent===!0)s.push(T);else n.push(T)}function c(d,g,y,S,p,h){let b=o(d,g,y,S,p,h);if(y.transmission>0)i.unshift(b);else if(y.transparent===!0)s.unshift(b);else n.unshift(b)}function u(d,g){if(n.length>1)n.sort(d||ym);if(i.length>1)i.sort(g||Nc);if(s.length>1)s.sort(g||Nc)}function f(){for(let d=e,g=t.length;d<g;d++){let y=t[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Sm(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Dc,t.set(i,[a]);else if(s>=r.length)a=new Dc,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Mm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Ot};break;case"SpotLight":n={position:new F,direction:new F,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":n={color:new Ot,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function bm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Em=0;function Tm(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wm(t){let e=new Mm,n=bm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new ie,a=new ie;function o(c){let u=0,f=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,y=0,S=0,p=0,h=0,b=0,T=0,E=0,w=0,R=0,m=0,x=0,A=0,U=0;c.sort(Tm);for(let k=0,Q=c.length;k<Q;k++){let C=c[k],{color:Y,intensity:z,distance:B}=C,lt=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===ti)lt=C.shadow.map.texture;else lt=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)u+=Y.r*z,f+=Y.g*z,d+=Y.b*z;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],z);U++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,at=n.get(C);at.shadowIntensity=tt.intensity,at.shadowBias=tt.bias,at.shadowNormalBias=tt.normalBias,at.shadowRadius=tt.radius,at.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[y]=at,i.sunShadowMap[y]=lt;let vt=tt.getViewportCount();for(let q=0;q<vt;q++)i.sunShadowMatrix[S+q]=tt.getMatrix(q),i.sunShadowCascade[S+q]=tt._cascadeData[q];S+=vt,y++}i.sun[g]=X,g++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,at=n.get(C);at.shadowIntensity=tt.intensity,at.shadowBias=tt.bias,at.shadowNormalBias=tt.normalBias,at.shadowRadius=tt.radius,at.shadowMapSize=tt.mapSize,i.directionalShadow[p]=at,i.directionalShadowMap[p]=lt,i.directionalShadowMatrix[p]=C.shadow.matrix,w++}i.directional[p]=X,p++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(Y).multiplyScalar(z),X.distance=B,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[b]=X;let tt=C.shadow;if(C.map){if(i.spotLightMap[x]=C.map,x++,tt.updateMatrices(C),C.castShadow)A++}if(i.spotLightMatrix[b]=tt.matrix,C.castShadow){let at=n.get(C);at.shadowIntensity=tt.intensity,at.shadowBias=tt.bias,at.shadowNormalBias=tt.normalBias,at.shadowRadius=tt.radius,at.shadowMapSize=tt.mapSize,i.spotShadow[b]=at,i.spotShadowMap[b]=lt,m++}b++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(Y).multiplyScalar(z),X.halfWidth.set(C.width*0.5,0,0),X.halfHeight.set(0,C.height*0.5,0),i.rectArea[T]=X,T++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let tt=C.shadow,at=n.get(C);at.shadowIntensity=tt.intensity,at.shadowBias=tt.bias,at.shadowNormalBias=tt.normalBias,at.shadowRadius=tt.radius,at.shadowMapSize=tt.mapSize,at.shadowCameraNear=tt.camera.near,at.shadowCameraFar=tt.camera.far,i.pointShadow[h]=at,i.pointShadowMap[h]=lt,i.pointShadowMatrix[h]=C.shadow.matrix,R++}i.point[h]=X,h++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(z),X.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[E]=X,E++}}if(T>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2;else i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let P=i.hash;if(P.sunLength!==g||P.directionalLength!==p||P.pointLength!==h||P.spotLength!==b||P.rectAreaLength!==T||P.hemiLength!==E||P.numSunShadows!==y||P.numDirectionalShadows!==w||P.numPointShadows!==R||P.numSpotShadows!==m||P.numSpotMaps!==x||P.numLightProbes!==U)i.sun.length=g,i.directional.length=p,i.spot.length=b,i.rectArea.length=T,i.point.length=h,i.hemi.length=E,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=m,i.spotShadowMap.length=m,i.spotLightMatrix.length=m+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,P.sunLength=g,P.directionalLength=p,P.pointLength=h,P.spotLength=b,P.rectAreaLength=T,P.hemiLength=E,P.numSunShadows=y,P.numDirectionalShadows=w,P.numPointShadows=R,P.numSpotShadows=m,P.numSpotMaps=x,P.numLightProbes=U,i.version=Em++}function l(c,u){let f=0,d=0,g=0,y=0,S=0,p=0,h=u.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let E=c[b];if(E.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(h),f++}else if(E.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(E.isSpotLight){let w=i.spot[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),y++}else if(E.isRectAreaLight){let w=i.rectArea[S];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(h),a.identity(),r.copy(E.matrixWorld),r.premultiply(h),a.extractRotation(r),w.halfWidth.set(E.width*0.5,0,0),w.halfHeight.set(0,E.height*0.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){let w=i.point[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(h),g++}else if(E.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(h),p++}}}return{setup:o,setupView:l,state:i}}function Uc(t){let e=new wm(t),n=[],i=[],s=[];function r(f){u.camera=f,n.length=0,i.length=0,s.length=0}function a(f){if(f.isLightProbeGrid)s.push(f);else n.push(f)}function o(f){i.push(f)}function l(){e.setup(n),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(n,f)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Am(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Uc(t),e.set(s,[o]);else if(r>=a.length)o=new Uc(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Im=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Pm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Fc=new ie,fs=new F,xo=new F;function Lm(t,e,n){let i=new Kn,s=new Vt,r=new Vt,a=new pe,o=new to,l=new eo,c={},u=n.maxTextureSize,f={[wi]:Fe,[Fe]:wi,[We]:We},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Rm,fragmentShader:Cm}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let y=new ve;y.setAttribute("position",new Ie(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let S=new ne(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let h=this.type;this.render=function(R,m,x){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(R.length===0)return;if(this.type===cl)Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki;let A=t.getRenderTarget(),U=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;if(k.setBlending(Qn),k.buffers.depth.getReversed()===!0)k.buffers.color.setClear(0,0,0,0);else k.buffers.color.setClear(1,1,1,1);k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Q=h!==this.type;if(Q)m.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((Y)=>Y.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,Y=R.length;C<Y;C++){let z=R[C],B=z.shadow;if(B===void 0){Ft("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let lt=B.getFrameExtents();if(s.multiply(lt),r.copy(B.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,B.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,B.mapSize.y=r.y}let X=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||Q===!0){if(B.map!==null){if(B.map.depthTexture!==null)B.map.depthTexture.dispose(),B.map.depthTexture=null;B.map.dispose()}if(this.type===Ti){if(z.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Je(s.x,s.y,{format:ti,type:un,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Hn(s.x,s.y,bn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Ci,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fn,B.map.depthTexture.magFilter=Fn}else{if(z.isPointLight)B.map=new vr(s.x),B.map.depthTexture=new cr(s.x,Bn);else B.map=new Je(s.x,s.y),B.map.depthTexture=new Hn(s.x,s.y,Bn);if(B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Ci,this.type===Ki)B.map.depthTexture.compareFunction=X?ka:Ga,B.map.depthTexture.minFilter=Ze,B.map.depthTexture.magFilter=Ze;else B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fn,B.map.depthTexture.magFilter=Fn}B.camera.updateProjectionMatrix()}if(B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y))B.map.setSize(s.x,s.y);let tt=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();if(z.isPointLight!==!0)B.updateMatrices(z,x);let at=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:x.layers;for(let vt=0;vt<tt;vt++){let q=B.getCamera(vt);if(z.isPointLight){let{camera:st,matrix:bt}=B,It=z.distance||st.far;if(It!==st.far)st.far=It,st.updateProjectionMatrix();fs.setFromMatrixPosition(z.matrixWorld),st.position.copy(fs),xo.copy(st.position),xo.add(Im[vt]),st.up.copy(Pm[vt]),st.lookAt(xo),st.updateMatrixWorld(),bt.makeTranslation(-fs.x,-fs.y,-fs.z),Fc.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Fc,st.coordinateSystem,st.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,vt),t.clear();else{if(vt===0)t.setRenderTarget(B.map),t.clear();let st=B.getViewport(vt);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),k.viewport(a)}i=B.getFrustum(vt),E(m,x,q,z,at,this.type)}if(B.isPointLightShadow!==!0&&this.type===Ti)b(B,x);B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(A,U,P)};function b(R,m){let x=e.update(S);if(d.defines.VSM_SAMPLES!==R.blurSamples)d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new Je(s.x,s.y,{format:ti,type:un});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(m,null,x,d,S,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(m,null,x,g,S,null)}function T(R,m,x,A){let U=null,P=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)U=P;else if(U=x.isPointLight===!0?l:o,t.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let k=U.uuid,Q=m.uuid,C=c[k];if(C===void 0)C={},c[k]=C;let Y=C[Q];if(Y===void 0)Y=U.clone(),C[Q]=Y,m.addEventListener("dispose",w);U=Y}if(U.visible=m.visible,U.wireframe=m.wireframe,A===Ti)U.side=m.shadowSide!==null?m.shadowSide:m.side;else U.side=m.shadowSide!==null?m.shadowSide:f[m.side];if(U.alphaMap=m.alphaMap,U.alphaTest=m.alphaToCoverage===!0?0.5:m.alphaTest,U.map=m.map,U.clipShadows=m.clipShadows,U.clippingPlanes=m.clippingPlanes,U.clipIntersection=m.clipIntersection,U.displacementMap=m.displacementMap,U.displacementScale=m.displacementScale,U.displacementBias=m.displacementBias,U.wireframeLinewidth=m.wireframeLinewidth,U.linewidth=m.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let k=t.properties.get(U);k.light=x}return U}function E(R,m,x,A,U,P){if(R.visible===!1)return;if(R.layers.test(U)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&P===Ti)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);let C=e.update(R),Y=R.material;if(Array.isArray(Y)){let z=C.groups;for(let B=0,lt=z.length;B<lt;B++){let X=z[B],tt=Y[X.materialIndex];if(tt&&tt.visible){let at=T(R,tt,A,P);R.onBeforeShadow(t,R,m,x,C,at,X),t.renderBufferDirect(x,null,C,at,R,X),R.onAfterShadow(t,R,m,x,C,at,X)}}}else if(Y.visible){let z=T(R,Y,A,P);R.onBeforeShadow(t,R,m,x,C,z,null),t.renderBufferDirect(x,null,C,z,R,null),R.onAfterShadow(t,R,m,x,C,z,null)}}}let Q=R.children;for(let C=0,Y=Q.length;C<Y;C++)E(Q[C],m,x,A,U,P)}function w(R){R.target.removeEventListener("dispose",w);for(let x in c){let A=c[x],U=R.target.uuid;if(U in A)A[U].dispose(),delete A[U]}}}function Nm(t,e){function n(){let I=!1,J=new pe,V=null,rt=new pe(0,0,0,0);return{setMask:function(ht){if(V!==ht&&!I)t.colorMask(ht,ht,ht,ht),V=ht},setLocked:function(ht){I=ht},setClear:function(ht,mt,Pt,Ct,_t){if(_t===!0)ht*=Ct,mt*=Ct,Pt*=Ct;if(J.set(ht,mt,Pt,Ct),rt.equals(J)===!1)t.clearColor(ht,mt,Pt,Ct),rt.copy(J)},reset:function(){I=!1,V=null,rt.set(-1,0,0,0)}}}function i(){let I=!1,J=!1,V=null,rt=null,ht=null;return{setReversed:function(mt){if(J!==mt){let Pt=e.get("EXT_clip_control");if(mt)Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT);else Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);J=mt;let Ct=ht;ht=null,this.setClear(Ct)}},getReversed:function(){return J},setTest:function(mt){if(mt)Et(t.DEPTH_TEST);else Qt(t.DEPTH_TEST)},setMask:function(mt){if(V!==mt&&!I)t.depthMask(mt),V=mt},setFunc:function(mt){if(J)mt=rc[mt];if(rt!==mt){switch(mt){case Il:t.depthFunc(t.NEVER);break;case Pl:t.depthFunc(t.ALWAYS);break;case Ll:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case Nl:t.depthFunc(t.EQUAL);break;case Dl:t.depthFunc(t.GEQUAL);break;case Ul:t.depthFunc(t.GREATER);break;case Fl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}rt=mt}},setLocked:function(mt){I=mt},setClear:function(mt){if(ht!==mt){if(ht=mt,J)mt=1-mt;t.clearDepth(mt)}},reset:function(){I=!1,V=null,rt=null,ht=null,J=!1}}}function s(){let I=!1,J=null,V=null,rt=null,ht=null,mt=null,Pt=null,Ct=null,_t=null;return{setTest:function(Nt){if(!I)if(Nt)Et(t.STENCIL_TEST);else Qt(t.STENCIL_TEST)},setMask:function(Nt){if(J!==Nt&&!I)t.stencilMask(Nt),J=Nt},setFunc:function(Nt,Wt,xt){if(V!==Nt||rt!==Wt||ht!==xt)t.stencilFunc(Nt,Wt,xt),V=Nt,rt=Wt,ht=xt},setOp:function(Nt,Wt,xt){if(mt!==Nt||Pt!==Wt||Ct!==xt)t.stencilOp(Nt,Wt,xt),mt=Nt,Pt=Wt,Ct=xt},setLocked:function(Nt){I=Nt},setClear:function(Nt){if(_t!==Nt)t.clearStencil(Nt),_t=Nt},reset:function(){I=!1,J=null,V=null,rt=null,ht=null,mt=null,Pt=null,Ct=null,_t=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,u={},f={},d={},g=new WeakMap,y=[],S=null,p=!1,h=null,b=null,T=null,E=null,w=null,R=null,m=null,x=new Ot(0,0,0),A=0,U=!1,P=null,k=null,Q=null,C=null,Y=null,z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,lt=0,X=t.getParameter(t.VERSION);if(X.indexOf("WebGL")!==-1)lt=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=lt>=1;else if(X.indexOf("OpenGL ES")!==-1)lt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=lt>=2;let tt=null,at={},vt=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),st=new pe().fromArray(vt),bt=new pe().fromArray(q);function It(I,J,V,rt){let ht=new Uint8Array(4),mt=t.createTexture();t.bindTexture(I,mt),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pt=0;Pt<V;Pt++)if(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)t.texImage3D(J,0,t.RGBA,1,1,rt,0,t.RGBA,t.UNSIGNED_BYTE,ht);else t.texImage2D(J+Pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ht);return mt}let Lt={};Lt[t.TEXTURE_2D]=It(t.TEXTURE_2D,t.TEXTURE_2D,1),Lt[t.TEXTURE_CUBE_MAP]=It(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[t.TEXTURE_2D_ARRAY]=It(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Lt[t.TEXTURE_3D]=It(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Et(t.DEPTH_TEST),a.setFunc(Zr),Pe(!1),de(Xr),Et(t.CULL_FACE),ce(Qn);function Et(I){if(u[I]!==!0)t.enable(I),u[I]=!0}function Qt(I){if(u[I]!==!1)t.disable(I),u[I]=!1}function Ht(I,J){if(d[I]!==J){if(t.bindFramebuffer(I,J),d[I]=J,I===t.DRAW_FRAMEBUFFER)d[t.FRAMEBUFFER]=J;if(I===t.FRAMEBUFFER)d[t.DRAW_FRAMEBUFFER]=J;return!0}return!1}function zt(I,J){let V=y,rt=!1;if(I){if(V=g.get(J),V===void 0)V=[],g.set(J,V);let ht=I.textures;if(V.length!==ht.length||V[0]!==t.COLOR_ATTACHMENT0){for(let mt=0,Pt=ht.length;mt<Pt;mt++)V[mt]=t.COLOR_ATTACHMENT0+mt;V.length=ht.length,rt=!0}}else if(V[0]!==t.BACK)V[0]=t.BACK,rt=!0;if(rt)t.drawBuffers(V)}function te(I){if(S!==I)return t.useProgram(I),S=I,!0;return!1}let qt={[Ai]:t.FUNC_ADD,[ul]:t.FUNC_SUBTRACT,[dl]:t.FUNC_REVERSE_SUBTRACT};qt[fl]=t.MIN,qt[pl]=t.MAX;let le={[ml]:t.ZERO,[gl]:t.ONE,[_l]:t.SRC_COLOR,[vl]:t.SRC_ALPHA,[Tl]:t.SRC_ALPHA_SATURATE,[bl]:t.DST_COLOR,[Sl]:t.DST_ALPHA,[xl]:t.ONE_MINUS_SRC_COLOR,[yl]:t.ONE_MINUS_SRC_ALPHA,[El]:t.ONE_MINUS_DST_COLOR,[Ml]:t.ONE_MINUS_DST_ALPHA,[wl]:t.CONSTANT_COLOR,[Al]:t.ONE_MINUS_CONSTANT_COLOR,[Rl]:t.CONSTANT_ALPHA,[Cl]:t.ONE_MINUS_CONSTANT_ALPHA};function ce(I,J,V,rt,ht,mt,Pt,Ct,_t,Nt){if(I===Qn){if(p===!0)Qt(t.BLEND),p=!1;return}if(p===!1)Et(t.BLEND),p=!0;if(I!==hl){if(I!==h||Nt!==U){if(b!==Ai||w!==Ai)t.blendEquation(t.FUNC_ADD),b=Ai,w=Ai;if(Nt)switch(I){case Qi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ye:t.blendFunc(t.ONE,t.ONE);break;case qr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yr:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Bt("WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ye:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case qr:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yr:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",I);break}T=null,E=null,R=null,m=null,x.set(0,0,0),A=0,h=I,U=Nt}return}if(ht=ht||J,mt=mt||V,Pt=Pt||rt,J!==b||ht!==w)t.blendEquationSeparate(qt[J],qt[ht]),b=J,w=ht;if(V!==T||rt!==E||mt!==R||Pt!==m)t.blendFuncSeparate(le[V],le[rt],le[mt],le[Pt]),T=V,E=rt,R=mt,m=Pt;if(Ct.equals(x)===!1||_t!==A)t.blendColor(Ct.r,Ct.g,Ct.b,_t),x.copy(Ct),A=_t;h=I,U=!1}function Me(I,J){I.side===We?Qt(t.CULL_FACE):Et(t.CULL_FACE);let V=I.side===Fe;if(J)V=!V;Pe(V),I.blending===Qi&&I.transparent===!1?ce(Qn):ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let rt=I.stencilWrite;if(o.setTest(rt),rt)o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass);we(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Et(t.SAMPLE_ALPHA_TO_COVERAGE):Qt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(I){if(P!==I){if(I)t.frontFace(t.CW);else t.frontFace(t.CCW);P=I}}function de(I){if(I!==ol){if(Et(t.CULL_FACE),I!==k)if(I===Xr)t.cullFace(t.BACK);else if(I===ll)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Qt(t.CULL_FACE);k=I}function me(I){if(I!==Q){if(B)t.lineWidth(I);Q=I}}function we(I,J,V){if(I){if(Et(t.POLYGON_OFFSET_FILL),C!==J||Y!==V){if(C=J,Y=V,a.getReversed())J=-J,V=-V;t.polygonOffset(J,V)}}else Qt(t.POLYGON_OFFSET_FILL)}function Ae(I){if(I)Et(t.SCISSOR_TEST);else Qt(t.SCISSOR_TEST)}function Ge(I){if(I===void 0)I=t.TEXTURE0+z-1;if(tt!==I)t.activeTexture(I),tt=I}function N(I,J,V){if(V===void 0)if(tt===null)V=t.TEXTURE0+z-1;else V=tt;let rt=at[V];if(rt===void 0)rt={type:void 0,texture:void 0},at[V]=rt;if(rt.type!==I||rt.texture!==J){if(tt!==V)t.activeTexture(V),tt=V;t.bindTexture(I,J||Lt[I]),rt.type=I,rt.texture=J}}function Z(){let I=at[tt];if(I!==void 0&&I.type!==void 0)t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0}function ot(){try{t.compressedTexImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function Dt(){try{t.compressedTexImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function nt(){try{t.texSubImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function Ut(){try{t.texSubImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function St(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function Mt(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function et(){try{t.texStorage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function M(){try{t.texStorage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function _(){try{t.texImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function D(){try{t.texImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function it(I){if(f[I]!==void 0)return f[I];else return t.getParameter(I)}function j(I,J){if(f[I]!==J)t.pixelStorei(I,J),f[I]=J}function ct(I){if(st.equals(I)===!1)t.scissor(I.x,I.y,I.z,I.w),st.copy(I)}function dt(I){if(bt.equals(I)===!1)t.viewport(I.x,I.y,I.z,I.w),bt.copy(I)}function W(I,J){let V=c.get(J);if(V===void 0)V=new WeakMap,c.set(J,V);let rt=V.get(I);if(rt===void 0)rt=t.getUniformBlockIndex(J,I.name),t.uniformBlockBinding(J,rt,rt),V.set(I,rt)}function K(I,J,V){let ht=c.get(J).get(I);if(l[ht]!==V)t.bindBufferBase(t.UNIFORM_BUFFER,ht,V),l[ht]=V}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},tt=null,at={},d={},l={},g=new WeakMap,y=[],S=null,p=!1,h=null,b=null,T=null,E=null,w=null,R=null,m=null,x=new Ot(0,0,0),A=0,U=!1,P=null,k=null,Q=null,C=null,Y=null,st.set(0,0,t.canvas.width,t.canvas.height),bt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Et,disable:Qt,bindFramebuffer:Ht,drawBuffers:zt,useProgram:te,setBlending:ce,setMaterial:Me,setFlipSided:Pe,setCullFace:de,setLineWidth:me,setPolygonOffset:we,setScissorTest:Ae,activeTexture:Ge,bindTexture:N,unbindTexture:Z,compressedTexImage2D:ot,compressedTexImage3D:Dt,texImage2D:_,texImage3D:D,pixelStorei:j,getParameter:it,updateUBOMapping:W,uniformBlockBinding:K,texStorage2D:et,texStorage3D:M,texSubImage2D:nt,texSubImage3D:Ut,compressedTexSubImage2D:St,compressedTexSubImage3D:Mt,scissor:ct,viewport:dt,reset:ut}}function Dm(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap,f=new Set,d,g=new WeakMap,y=new Set,S=new FinalizationRegistry((M)=>y.delete(M)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function h(M,_){return p?new OffscreenCanvas(M,_):$i("canvas")}function b(M,_,D){let it=1,j=et(M);if(j.width>D||j.height>D)it=D/Math.max(j.width,j.height);if(it<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ct=Math.floor(it*j.width),dt=Math.floor(it*j.height);if(d===void 0)d=h(ct,dt);let W=_?h(ct,dt):d;return W.width=ct,W.height=dt,W.getContext("2d").drawImage(M,0,0,ct,dt),Ft("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ct+"x"+dt+")."),W}else{if("data"in M)Ft("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+").");return M}return M}function T(M){return M.generateMipmaps}function E(M){t.generateMipmap(M)}function w(M){if(M.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function R(M,_,D,it,j,ct=!1){if(M!==null){if(t[M]!==void 0)return t[M];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let dt;if(it){if(dt=e.get("EXT_texture_norm16"),!dt)Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let W=_;if(_===t.RED){if(D===t.FLOAT)W=t.R32F;if(D===t.HALF_FLOAT)W=t.R16F;if(D===t.UNSIGNED_BYTE)W=t.R8;if(D===t.UNSIGNED_SHORT&&dt)W=dt.R16_EXT;if(D===t.SHORT&&dt)W=dt.R16_SNORM_EXT}if(_===t.RED_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.R8UI;if(D===t.UNSIGNED_SHORT)W=t.R16UI;if(D===t.UNSIGNED_INT)W=t.R32UI;if(D===t.BYTE)W=t.R8I;if(D===t.SHORT)W=t.R16I;if(D===t.INT)W=t.R32I}if(_===t.RG){if(D===t.FLOAT)W=t.RG32F;if(D===t.HALF_FLOAT)W=t.RG16F;if(D===t.UNSIGNED_BYTE)W=t.RG8;if(D===t.UNSIGNED_SHORT&&dt)W=dt.RG16_EXT;if(D===t.SHORT&&dt)W=dt.RG16_SNORM_EXT}if(_===t.RG_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.RG8UI;if(D===t.UNSIGNED_SHORT)W=t.RG16UI;if(D===t.UNSIGNED_INT)W=t.RG32UI;if(D===t.BYTE)W=t.RG8I;if(D===t.SHORT)W=t.RG16I;if(D===t.INT)W=t.RG32I}if(_===t.RGB_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.RGB8UI;if(D===t.UNSIGNED_SHORT)W=t.RGB16UI;if(D===t.UNSIGNED_INT)W=t.RGB32UI;if(D===t.BYTE)W=t.RGB8I;if(D===t.SHORT)W=t.RGB16I;if(D===t.INT)W=t.RGB32I}if(_===t.RGBA_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.RGBA8UI;if(D===t.UNSIGNED_SHORT)W=t.RGBA16UI;if(D===t.UNSIGNED_INT)W=t.RGBA32UI;if(D===t.BYTE)W=t.RGBA8I;if(D===t.SHORT)W=t.RGBA16I;if(D===t.INT)W=t.RGBA32I}if(_===t.RGB){if(D===t.UNSIGNED_SHORT&&dt)W=dt.RGB16_EXT;if(D===t.SHORT&&dt)W=dt.RGB16_SNORM_EXT;if(D===t.UNSIGNED_INT_5_9_9_9_REV)W=t.RGB9_E5;if(D===t.UNSIGNED_INT_10F_11F_11F_REV)W=t.R11F_G11F_B10F}if(_===t.RGBA){let K=ct?za:Jt.getTransfer(j);if(D===t.FLOAT)W=t.RGBA32F;if(D===t.HALF_FLOAT)W=t.RGBA16F;if(D===t.UNSIGNED_BYTE)W=K===oe?t.SRGB8_ALPHA8:t.RGBA8;if(D===t.UNSIGNED_SHORT&&dt)W=dt.RGBA16_EXT;if(D===t.SHORT&&dt)W=dt.RGBA16_SNORM_EXT;if(D===t.UNSIGNED_SHORT_4_4_4_4)W=t.RGBA4;if(D===t.UNSIGNED_SHORT_5_5_5_1)W=t.RGB5_A1}if(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)e.get("EXT_color_buffer_float");return W}function m(M,_){let D;if(M){if(_===null||_===Bn||_===jn)D=t.DEPTH24_STENCIL8;else if(_===bn)D=t.DEPTH32F_STENCIL8;else if(_===ns)D=t.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===Bn||_===jn)D=t.DEPTH_COMPONENT24;else if(_===bn)D=t.DEPTH_COMPONENT32F;else if(_===ns)D=t.DEPTH_COMPONENT16;return D}function x(M,_){if(T(M)===!0||M.isFramebufferTexture&&M.minFilter!==Fn&&M.minFilter!==Ze)return Math.log2(Math.max(_.width,_.height))+1;else if(M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return _.mipmaps.length;else return 1}function A(M){let _=new WeakRef(M);i.get(M).__ref=_,y.add(_),S.register(M,_,_)}function U(M){let _=i.get(M).__ref;if(_===void 0)return;y.delete(_),S.unregister(_)}function P(M){Q(M.target)}function k(M){C(M.target)}function Q(M){if(M.removeEventListener("dispose",P),U(M),z(M),M.isVideoTexture)u.delete(M);if(M.isHTMLTexture)f.delete(M)}function C(M){M.removeEventListener("dispose",k),U(M),lt(M)}function Y(){for(let M of y){let _=M.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)C(_);else Q(_)}y.clear(),f.clear()}function z(M){let _=i.get(M);if(_.__webglInit===void 0)return;let D=M.source,it=g.get(D);if(it){let j=it[_.__cacheKey];if(j.usedTimes--,j.usedTimes===0)B(M);if(Object.keys(it).length===0)g.delete(D)}i.remove(M)}function B(M){let _=i.get(M);t.deleteTexture(_.__webglTexture);let D=M.source,it=g.get(D);delete it[_.__cacheKey],a.memory.textures--}function lt(M){let _=i.get(M);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let D=M.depthTexture;if(D&&D.renderTarget===M)Q(D);if(M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let ct=0;ct<_.__webglFramebuffer[j].length;ct++)t.deleteFramebuffer(_.__webglFramebuffer[j][ct]);else t.deleteFramebuffer(_.__webglFramebuffer[j]);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)t.deleteFramebuffer(_.__webglFramebuffer[j]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)t.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let j=0;j<_.__webglColorRenderbuffer.length;j++)if(_.__webglColorRenderbuffer[j])t.deleteRenderbuffer(_.__webglColorRenderbuffer[j])}if(_.__webglDepthRenderbuffer)t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let it=M.textures;for(let j=0,ct=it.length;j<ct;j++){let dt=i.get(it[j]);if(dt.__webglTexture)t.deleteTexture(dt.__webglTexture),a.memory.textures--;i.remove(it[j])}i.remove(M)}let X=0;function tt(){X=0}function at(){return X}function vt(M){X=M}function q(){let M=X;if(M>=s.maxTextures)Ft("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return X+=1,M}function st(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.mipmapsAutoUpdate),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function bt(M,_){let D=i.get(M);if(M.isVideoTexture)St(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){let it=M.image;if(it===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(D,M,_);return}}else if(M.isExternalTexture)D.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+_)}function It(M,_){let D=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Me(D,M,_);return}else if(M.isExternalTexture)D.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+_)}function Lt(M,_){let D=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Me(D,M,_);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+_)}function Et(M,_){let D=i.get(M);if(M.version>0&&D.__version!==M.version){Pe(D,M,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+_)}let Qt={[Gl]:t.REPEAT,[qs]:t.CLAMP_TO_EDGE,[kl]:t.MIRRORED_REPEAT},Ht={[Fn]:t.NEAREST,[Hl]:t.NEAREST_MIPMAP_NEAREST,[es]:t.NEAREST_MIPMAP_LINEAR,[Ze]:t.LINEAR,[Ys]:t.LINEAR_MIPMAP_NEAREST,[On]:t.LINEAR_MIPMAP_LINEAR},zt={[Kl]:t.NEVER,[Ha]:t.ALWAYS,[Ql]:t.LESS,[Ga]:t.LEQUAL,[jl]:t.EQUAL,[ka]:t.GEQUAL,[tc]:t.GREATER,[ec]:t.NOTEQUAL};function te(M,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ze||_.magFilter===Ys||_.magFilter===es||_.magFilter===On||_.minFilter===Ze||_.minFilter===Ys||_.minFilter===es||_.minFilter===On))Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(M,t.TEXTURE_WRAP_S,Qt[_.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,Qt[_.wrapT]),M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)t.texParameteri(M,t.TEXTURE_WRAP_R,Qt[_.wrapR]);if(t.texParameteri(M,t.TEXTURE_MAG_FILTER,Ht[_.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Ht[_.minFilter]),_.compareFunction)t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,zt[_.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Fn)return;if(_.minFilter!==es&&_.minFilter!==On)return;if(_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function qt(M,_){let D=!1;if(M.__webglInit===void 0)M.__webglInit=!0,_.addEventListener("dispose",P),A(_);let it=_.source,j=g.get(it);if(j===void 0)j={},g.set(it,j);let ct=st(_);if(ct!==M.__cacheKey){if(j[ct]===void 0)j[ct]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0;j[ct].usedTimes++;let dt=j[M.__cacheKey];if(dt!==void 0){if(j[M.__cacheKey].usedTimes--,dt.usedTimes===0)B(_)}M.__cacheKey=ct,M.__webglTexture=j[ct].texture}return D}function le(M,_,D){return Math.floor(Math.floor(M/D)/_)}function ce(M,_,D,it){let ct=M.updateRanges;if(ct.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,D,it,_.data);else{ct.sort((I,J)=>I.start-J.start);let dt=0;for(let I=1;I<ct.length;I++){let J=ct[dt],V=ct[I],rt=J.start+J.count,ht=le(V.start,_.width,4),mt=le(J.start,_.width,4);if(V.start<=rt+1&&ht===mt&&le(V.start+V.count-1,_.width,4)===ht)J.count=Math.max(J.count,V.start+V.count-J.start);else++dt,ct[dt]=V}ct.length=dt+1;let W=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),ut=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let I=0,J=ct.length;I<J;I++){let V=ct[I],rt=Math.floor(V.start/4),ht=Math.ceil(V.count/4),mt=rt%_.width,Pt=Math.floor(rt/_.width),Ct=ht,_t=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(t.UNPACK_SKIP_ROWS,Pt),n.texSubImage2D(t.TEXTURE_2D,0,mt,Pt,Ct,1,D,it,_.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,W),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,ut)}}function Me(M,_,D){let it=t.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)it=t.TEXTURE_2D_ARRAY;if(_.isData3DTexture)it=t.TEXTURE_3D;let j=qt(M,_),ct=_.source;n.bindTexture(it,M.__webglTexture,t.TEXTURE0+D);let dt=i.get(ct);if(ct.version!==dt.__version||j===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let _t=Jt.getPrimaries(Jt.workingColorSpace),Nt=_.colorSpace===ei?null:Jt.getPrimaries(_.colorSpace),Wt=_.colorSpace===ei||_t===Nt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let K=b(_.image,!1,s.maxTextureSize);K=Mt(_,K);let ut=r.convert(_.format,_.colorSpace),I=r.convert(_.type),J=R(_.internalFormat,ut,I,_.normalized,_.colorSpace,_.isVideoTexture);te(it,_);let V,rt=_.mipmaps,ht=_.isVideoTexture!==!0,mt=dt.__version===void 0||j===!0,Pt=ct.dataReady,Ct=x(_,K);if(_.isDepthTexture){if(J=m(_.format===zn,_.type),mt)if(ht)n.texStorage2D(t.TEXTURE_2D,1,J,K.width,K.height);else n.texImage2D(t.TEXTURE_2D,0,J,K.width,K.height,0,ut,I,null)}else if(_.isDataTexture)if(rt.length>0){if(ht&&mt)n.texStorage2D(t.TEXTURE_2D,Ct,J,rt[0].width,rt[0].height);for(let _t=0,Nt=rt.length;_t<Nt;_t++)if(V=rt[_t],ht){if(Pt)n.texSubImage2D(t.TEXTURE_2D,_t,0,0,V.width,V.height,ut,I,V.data)}else n.texImage2D(t.TEXTURE_2D,_t,J,V.width,V.height,0,ut,I,V.data);_.generateMipmaps=!1}else if(ht){if(mt)n.texStorage2D(t.TEXTURE_2D,Ct,J,K.width,K.height);if(Pt)ce(_,K,ut,I)}else n.texImage2D(t.TEXTURE_2D,0,J,K.width,K.height,0,ut,I,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(ht&&mt)n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,J,rt[0].width,rt[0].height,K.depth);for(let _t=0,Nt=rt.length;_t<Nt;_t++)if(V=rt[_t],_.format!==En)if(ut!==null)if(ht){if(Pt)if(_.layerUpdates.size>0){let Wt=go(V.width,V.height,_.format,_.type);for(let xt of _.layerUpdates){let re=V.data.subarray(xt*Wt/V.data.BYTES_PER_ELEMENT,(xt+1)*Wt/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_t,0,0,xt,V.width,V.height,1,ut,re)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_t,0,0,0,V.width,V.height,K.depth,ut,V.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_t,J,V.width,V.height,K.depth,0,V.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ht){if(Pt)n.texSubImage3D(t.TEXTURE_2D_ARRAY,_t,0,0,0,V.width,V.height,K.depth,ut,I,V.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,_t,J,V.width,V.height,K.depth,0,ut,I,V.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(ht&&mt)n.texStorage2D(t.TEXTURE_2D,Ct,J,rt[0].width,rt[0].height);for(let _t=0,Nt=rt.length;_t<Nt;_t++)if(V=rt[_t],_.format!==En)if(ut!==null)if(ht){if(Pt)n.compressedTexSubImage2D(t.TEXTURE_2D,_t,0,0,V.width,V.height,ut,V.data)}else n.compressedTexImage2D(t.TEXTURE_2D,_t,J,V.width,V.height,0,V.data);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ht){if(Pt)n.texSubImage2D(t.TEXTURE_2D,_t,0,0,V.width,V.height,ut,I,V.data)}else n.texImage2D(t.TEXTURE_2D,_t,J,V.width,V.height,0,ut,I,V.data)}else if(_.isDataArrayTexture)if(ht){if(mt)n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,J,K.width,K.height,K.depth);if(Pt)if(_.layerUpdates.size>0){let _t=go(K.width,K.height,_.format,_.type);for(let Nt of _.layerUpdates){let Wt=K.data.subarray(Nt*_t/K.data.BYTES_PER_ELEMENT,(Nt+1)*_t/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Nt,K.width,K.height,1,ut,I,Wt)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,I,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ut,I,K.data);else if(_.isData3DTexture)if(ht){if(mt)n.texStorage3D(t.TEXTURE_3D,Ct,J,K.width,K.height,K.depth);if(Pt)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,I,K.data)}else n.texImage3D(t.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ut,I,K.data);else if(_.isFramebufferTexture){if(mt)if(ht)n.texStorage2D(t.TEXTURE_2D,Ct,J,K.width,K.height);else{let _t=K.width,Nt=K.height;for(let Wt=0;Wt<Ct;Wt++)n.texImage2D(t.TEXTURE_2D,Wt,J,_t,Nt,0,ut,I,null),_t>>=1,Nt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let _t=t.canvas;if(!_t.hasAttribute("layoutsubtree"))_t.setAttribute("layoutsubtree","true");if(K.parentNode!==_t){_t.appendChild(K),f.add(_),_t.onpaint=(Nt)=>{let Wt=Nt.changedElements;for(let xt of f)if(Wt.includes(xt.image))xt.needsUpdate=!0},_t.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{let{RGBA:Wt,RGBA:xt,UNSIGNED_BYTE:re}=t;t.texElementImage2D(t.TEXTURE_2D,0,Wt,xt,re,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(rt.length>0){if(ht&&mt){let _t=et(rt[0]);n.texStorage2D(t.TEXTURE_2D,Ct,J,_t.width,_t.height)}for(let _t=0,Nt=rt.length;_t<Nt;_t++)if(V=rt[_t],ht){if(Pt)n.texSubImage2D(t.TEXTURE_2D,_t,0,0,ut,I,V)}else n.texImage2D(t.TEXTURE_2D,_t,J,ut,I,V);_.generateMipmaps=!1}else if(ht){if(mt){let _t=et(K);n.texStorage2D(t.TEXTURE_2D,Ct,J,_t.width,_t.height)}if(Pt)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ut,I,K)}else n.texImage2D(t.TEXTURE_2D,0,J,ut,I,K);if(T(_)&&_.mipmapsAutoUpdate===!0)E(it);if(dt.__version=ct.version,_.onUpdate)_.onUpdate(_)}M.__version=_.version}function Pe(M,_,D){if(_.image.length!==6)return;let it=qt(M,_),j=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+D);let ct=i.get(j);if(j.version!==ct.__version||it===!0){n.activeTexture(t.TEXTURE0+D);let dt=Jt.getPrimaries(Jt.workingColorSpace),W=_.colorSpace===ei?null:Jt.getPrimaries(_.colorSpace),K=_.colorSpace===ei||dt===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=_.isCompressedTexture||_.image[0].isCompressedTexture,I=_.image[0]&&_.image[0].isDataTexture,J=[];for(let xt=0;xt<6;xt++){if(!ut&&!I)J[xt]=b(_.image[xt],!0,s.maxCubemapSize);else J[xt]=I?_.image[xt].image:_.image[xt];J[xt]=Mt(_,J[xt])}let V=J[0],rt=r.convert(_.format,_.colorSpace),ht=r.convert(_.type),mt=R(_.internalFormat,rt,ht,_.normalized,_.colorSpace),Pt=_.isVideoTexture!==!0,Ct=ct.__version===void 0||it===!0,_t=j.dataReady,Nt=x(_,V);te(t.TEXTURE_CUBE_MAP,_);let Wt;if(_.isDepthTexture){if(mt=m(_.format===zn,_.type),Ct)if(Pt)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,mt,V.width,V.height);else for(let xt=0;xt<6;xt++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,mt,V.width,V.height,0,rt,ht,null)}else if(ut){if(Pt&&Ct)n.texStorage2D(t.TEXTURE_CUBE_MAP,Nt,mt,V.width,V.height);for(let xt=0;xt<6;xt++){Wt=J[xt].mipmaps;for(let re=0;re<Wt.length;re++){let be=Wt[re];if(_.format!==En)if(rt!==null)if(Pt){if(_t)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re,0,0,be.width,be.height,rt,be.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re,mt,be.width,be.height,0,be.data);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Pt){if(_t)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re,0,0,be.width,be.height,rt,ht,be.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re,mt,be.width,be.height,0,rt,ht,be.data)}}}else{if(Wt=_.mipmaps,Pt&&Ct){if(Wt.length>0)Nt++;let xt=et(J[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Nt,mt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(I){if(Pt){if(_t)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,J[xt].width,J[xt].height,rt,ht,J[xt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,mt,J[xt].width,J[xt].height,0,rt,ht,J[xt].data);for(let re=0;re<Wt.length;re++){let mn=Wt[re].image[xt].image;if(Pt){if(_t)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re+1,0,0,mn.width,mn.height,rt,ht,mn.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re+1,mt,mn.width,mn.height,0,rt,ht,mn.data)}}else{if(Pt){if(_t)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,rt,ht,J[xt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,mt,rt,ht,J[xt]);for(let re=0;re<Wt.length;re++){let be=Wt[re];if(Pt){if(_t)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re+1,0,0,rt,ht,be.image[xt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,re+1,mt,rt,ht,be.image[xt])}}}if(T(_)&&_.mipmapsAutoUpdate===!0)E(t.TEXTURE_CUBE_MAP);if(ct.__version=j.version,_.onUpdate)_.onUpdate(_)}M.__version=_.version}function de(M,_,D,it,j,ct){let dt=r.convert(D.format,D.colorSpace),W=r.convert(D.type),K=R(D.internalFormat,dt,W,D.normalized,D.colorSpace),ut=i.get(_),I=i.get(D);if(I.__renderTarget=_,!ut.__hasExternalTextures){let J=Math.max(1,_.width>>ct),V=Math.max(1,_.height>>ct);if(j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY)n.texImage3D(j,ct,K,J,V,_.depth,0,dt,W,null);else n.texImage2D(j,ct,K,J,V,0,dt,W,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,M),Ut(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,it,j,I.__webglTexture,0,nt(_));else if(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,it,j,I.__webglTexture,ct);n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(M,_,D){if(t.bindRenderbuffer(t.RENDERBUFFER,M),_.depthBuffer){let it=_.depthTexture,j=it&&it.isDepthTexture?it.type:null,ct=m(_.stencilBuffer,j),dt=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(Ut(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nt(_),ct,_.width,_.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,nt(_),ct,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,ct,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,dt,t.RENDERBUFFER,M)}else{let it=_.textures;for(let j=0;j<it.length;j++){let ct=it[j],dt=r.convert(ct.format,ct.colorSpace),W=r.convert(ct.type),K=R(ct.internalFormat,dt,W,ct.normalized,ct.colorSpace);if(Ut(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nt(_),K,_.width,_.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,nt(_),K,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,K,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(M,_,D){let it=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(_.depthTexture);j.__renderTarget=_;let ct=it?_.depthTexture.image[0]:_.depthTexture.image;if(!j.__webglTexture||ct.width!==_.width||ct.height!==_.height)ct.width=_.width,ct.height=_.height,_.depthTexture.needsUpdate=!0;if(it)Et(_.depthTexture,0);else bt(_.depthTexture,0);let dt=j.__webglTexture,W=nt(_),K=it?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,ut=_.depthTexture.format===zn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ci)if(Ut(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ut,K,dt,0,W);else t.framebufferTexture2D(t.FRAMEBUFFER,ut,K,dt,0);else if(_.depthTexture.format===zn)if(Ut(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ut,K,dt,0,W);else t.framebufferTexture2D(t.FRAMEBUFFER,ut,K,dt,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(M){let _=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){let it=M.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(it){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,it.removeEventListener("dispose",j)};it.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=it}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let it=0;it<6;it++)we(_.__webglFramebuffer[it],M,it);else if(M.texture.mipmaps.length>0)we(_.__webglFramebuffer[0],M,0);else we(_.__webglFramebuffer,M,0);else if(D){_.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[it]),_.__webglDepthbuffer[it]===void 0)_.__webglDepthbuffer[it]=t.createRenderbuffer(),me(_.__webglDepthbuffer[it],M,!1);else{let j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer[it];t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,ct)}}else{if(M.texture.mipmaps.length>0)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),me(_.__webglDepthbuffer,M,!1);else{let j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,ct)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(M,_,D){let it=i.get(M);if(_!==void 0)de(it.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(D!==void 0)Ae(M)}function N(M){let _=M.texture,D=i.get(M),it=i.get(_);M.addEventListener("dispose",k),A(M);let j=M.textures,ct=M.isWebGLCubeRenderTarget===!0,dt=j.length>1;if(!dt){if(it.__webglTexture===void 0)it.__webglTexture=t.createTexture();it.__version=_.version,a.memory.textures++}if(ct){D.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps.length>0){D.__webglFramebuffer[W]=[];for(let K=0;K<_.mipmaps.length;K++)D.__webglFramebuffer[W][K]=t.createFramebuffer()}else D.__webglFramebuffer[W]=t.createFramebuffer()}else{if(_.mipmaps.length>0){D.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)D.__webglFramebuffer[W]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(dt)for(let W=0,K=j.length;W<K;W++){let ut=i.get(j[W]);if(ut.__webglTexture===void 0)ut.__webglTexture=t.createTexture(),a.memory.textures++}if(M.samples>0&&Ut(M)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let W=0;W<j.length;W++){let K=j[W];D.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[W]);let ut=r.convert(K.format,K.colorSpace),I=r.convert(K.type),J=R(K.internalFormat,ut,I,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),V=nt(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,V,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,D.__webglColorRenderbuffer[W])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer)D.__webglDepthRenderbuffer=t.createRenderbuffer(),me(D.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ct){n.bindTexture(t.TEXTURE_CUBE_MAP,it.__webglTexture),te(t.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)de(D.__webglFramebuffer[W][K],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else de(D.__webglFramebuffer[W],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);if(T(_))E(t.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}else if(dt){for(let W=0,K=j.length;W<K;W++){let ut=j[W],I=i.get(ut),J=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)J=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(J,I.__webglTexture),te(J,ut),de(D.__webglFramebuffer,M,ut,t.COLOR_ATTACHMENT0+W,J,0),T(ut))E(J)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)W=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(W,it.__webglTexture),te(W,_),_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)de(D.__webglFramebuffer[K],M,_,t.COLOR_ATTACHMENT0,W,K);else de(D.__webglFramebuffer,M,_,t.COLOR_ATTACHMENT0,W,0);if(T(_))E(W);else if(_.mipmaps.length>0)t.texParameteri(W,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}if(M.depthBuffer)Ae(M)}function Z(M){let _=M.textures;for(let D=0,it=_.length;D<it;D++){let j=_[D];if(T(j)&&j.mipmapsAutoUpdate===!0){let ct=w(M),dt=i.get(j).__webglTexture;n.bindTexture(ct,dt),E(ct),n.unbindTexture()}}}let ot=[];function Dt(M){if(M.samples>0){if(Ut(M)===!1){let{textures:_,width:D,height:it}=M,j=t.COLOR_BUFFER_BIT,ct=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=i.get(M),W=_.length>1;if(W)for(let ut=0;ut<_.length;ut++)n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.TEXTURE_2D,null,0);if(n.bindFramebuffer(t.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(M.resolveDepthBuffer){if(M.depthBuffer)j|=t.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)j|=t.STENCIL_BUFFER_BIT}if(W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,dt.__webglColorRenderbuffer[ut]);let I=i.get(_[ut]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}if(t.blitFramebuffer(0,0,D,it,0,0,D,it,j,t.NEAREST),l===!0){if(ot.length=0,ot.push(t.COLOR_ATTACHMENT0+ut),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)ot.push(ct);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ot)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let ut=0;ut<_.length;ut++){n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.RENDERBUFFER,dt.__webglColorRenderbuffer[ut]);let I=i.get(_[ut]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let _=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function nt(M){return Math.min(s.maxSamples,M.samples)}function Ut(M){let _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function St(M){let _=a.render.frame;if(u.get(M)!==_)u.set(M,_),M.update()}function Mt(M,_){let{colorSpace:D,format:it,type:j}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return _;if(D!==Ba&&D!==ei)if(Jt.getTransfer(D)===oe){if(it!==En||j!==nn)Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Bt("WebGLTextures: Unsupported texture color space:",D);return _}function et(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=q,this.resetTextureUnits=tt,this.getTextureUnits=at,this.setTextureUnits=vt,this.setTexture2D=bt,this.setTexture2DArray=It,this.setTexture3D=Lt,this.setTextureCube=Et,this.rebindTextures=Ge,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ut,this.dispose=Y}function Um(t,e){function n(i,s=ei){let r,a=Jt.getTransfer(s);if(i===nn)return t.UNSIGNED_BYTE;if(i===na)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ia)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xl)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ql)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return t.BYTE;if(i===Vl)return t.SHORT;if(i===ns)return t.UNSIGNED_SHORT;if(i===ea)return t.INT;if(i===Bn)return t.UNSIGNED_INT;if(i===bn)return t.FLOAT;if(i===un)return t.HALF_FLOAT;if(i===Yl)return t.ALPHA;if(i===Zl)return t.RGB;if(i===En)return t.RGBA;if(i===Ci)return t.DEPTH_COMPONENT;if(i===zn)return t.DEPTH_STENCIL;if(i===Jl)return t.RED;if(i===sa)return t.RED_INTEGER;if(i===ti)return t.RG;if(i===ra)return t.RG_INTEGER;if(i===aa)return t.RGBA_INTEGER;if(i===Zs||i===Js||i===$s||i===Ks)if(a===oe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oa||i===la||i===ca||i===ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ua||i===da||i===fa||i===pa||i===ma||i===Qs||i===ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ua||i===da)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pa)return r.COMPRESSED_R11_EAC;if(i===ma)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qs)return r.COMPRESSED_RG11_EAC;if(i===ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_a||i===xa||i===va||i===ya||i===Sa||i===Ma||i===ba||i===Ea||i===Ta||i===wa||i===Aa||i===Ra||i===Ca||i===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_a)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===va)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Aa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ca)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ia)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===La||i===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Da||i===Ua||i===js||i===Fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===jn)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hr(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new hs(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jc extends Tn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",S=new Qc,p={},h=e.getContextAttributes(),b=null,T=null,E=[],w=[],R=new Vt,m=null,x=null,A=new ze;A.viewport=new pe;let U=new ze;U.viewport=new pe;let P=[A,U],k=new fo,Q=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=E[q];if(st===void 0)st=new rs,E[q]=st;return st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=E[q];if(st===void 0)st=new rs,E[q]=st;return st.getGripSpace()},this.getHand=function(q){let st=E[q];if(st===void 0)st=new rs,E[q]=st;return st.getHandSpace()};function Y(q){let st=w.indexOf(q.inputSource);if(st===-1)return;let bt=E[st];if(bt!==void 0)bt.update(q.inputSource,q.frame,l||r),bt.dispatchEvent({type:q.type,data:q.inputSource})}function z(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let q=0;q<E.length;q++){let st=w[q];if(st===null)continue;w[q]=null,E[q].disconnect(st)}Q=null,C=null,S.reset();for(let q in p)delete p[q];if(t.setRenderTarget(b),d=null,f=null,u=null,i=null,T=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(m),t.setSize(R.width,R.height,!1),x!==null){let q=x.camera;q.fov=x.fov,q.zoom=x.zoom,q.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(s=q,n.isPresenting===!0)Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(a=q,n.isPresenting===!0)Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){if(u===null&&y)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),h.xrCompatible!==!0)await e.makeXRCompatible();if(m=t.getPixelRatio(),t.getSize(R),!(y&&("createProjectionLayer"in XRWebGLBinding.prototype))){let bt={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,bt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Je(d.framebufferWidth,d.framebufferHeight,{format:En,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let bt=null,It=null,Lt=null;if(h.depth)Lt=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=h.stencil?zn:Ci,It=h.stencil?jn:Bn;let Et={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Je(f.textureWidth,f.textureHeight,{format:En,type:nn,depthTexture:new Hn(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),vt.setContext(i),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(q){for(let st=0;st<q.removed.length;st++){let bt=q.removed[st],It=w.indexOf(bt);if(It>=0)w[It]=null,E[It].disconnect(bt)}for(let st=0;st<q.added.length;st++){let bt=q.added[st],It=w.indexOf(bt);if(It===-1){for(let Et=0;Et<E.length;Et++)if(Et>=w.length){w.push(bt),It=Et;break}else if(w[Et]===null){w[Et]=bt,It=Et;break}if(It===-1)break}let Lt=E[It];if(Lt)Lt.connect(bt)}}function lt(q,st){if(st===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let{near:st,far:bt}=q;if(S.texture!==null){if(S.depthNear>0)st=S.depthNear;if(S.depthFar>0)bt=S.depthFar}if(k.near=U.near=A.near=st,k.far=U.far=A.far=bt,Q!==k.near||C!==k.far)i.updateRenderState({depthNear:k.near,depthFar:k.far}),Q=k.near,C=k.far;k.layers.mask=q.layers.mask|6,A.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let It=q.parent,Lt=k.cameras;lt(k,It);for(let Et=0;Et<Lt.length;Et++)lt(Lt[Et],It);if(k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),x===null&&q.isPerspectiveCamera)x={camera:q,fov:q.fov,zoom:q.zoom};X(q,k,It)};function X(q,st,bt){if(bt===null)q.matrix.copy(st.matrixWorld);else q.matrix.copy(bt.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=Ei*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return k},this.getFoveation=function(){if(f===null&&d===null)return;return o},this.setFoveation=function(q){if(o=q,f!==null)f.fixedFoveation=q;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=q},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(q){return p[q]};let tt=null;function at(q,st){if(c=st.getViewerPose(l||r),g=st,c!==null){let bt=c.views;if(d!==null)t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T);let It=!1;if(bt.length!==k.cameras.length)k.cameras.length=0,It=!0;for(let Ht=0;Ht<bt.length;Ht++){let zt=bt[Ht],te=null;if(d!==null)te=d.getViewport(zt);else{let le=u.getViewSubImage(f,zt);if(te=le.viewport,Ht===0)t.setRenderTargetTextures(T,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(T)}let qt=P[Ht];if(qt===void 0)qt=new ze,qt.layers.enable(Ht),qt.viewport=new pe,P[Ht]=qt;if(qt.matrix.fromArray(zt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(zt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(te.x,te.y,te.width,te.height),Ht===0)k.matrix.copy(qt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);if(It===!0)k.cameras.push(qt)}let Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Ht=u.getDepthInformation(bt[0]);if(Ht&&Ht.isValid&&Ht.texture)S.init(Ht,i.renderState)}if(Lt&&Lt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let Ht=0;Ht<bt.length;Ht++){let zt=bt[Ht].camera;if(zt){let te=p[zt];if(!te)te=new hr,p[zt]=te;let qt=u.getCameraImage(zt);te.sourceTexture=qt}}}}for(let bt=0;bt<E.length;bt++){let It=w[bt],Lt=E[bt];if(It!==null&&Lt!==void 0)Lt.update(It,st,l||r)}if(tt)tt(q,st);if(st.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:st});g=null}let vt=new Oc;vt.setAnimationLoop(at),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}}var Bm=new ie,th=new Gt;th.set(-1,0,0,0,1,0,0,0,1);function zm(t,e){function n(p,h){if(p.matrixAutoUpdate===!0)p.updateMatrix();h.value.copy(p.matrix)}function i(p,h){if(h.color.getRGB(p.fogColor.value,Qa(t)),h.isFog)p.fogNear.value=h.near,p.fogFar.value=h.far;else if(h.isFogExp2)p.fogDensity.value=h.density}function s(p,h,b,T,E){if(h.isNodeMaterial)h.uniformsNeedUpdate=!1;else if(h.isMeshBasicMaterial)r(p,h);else if(h.isMeshLambertMaterial){if(r(p,h),h.envMap)p.envMapIntensity.value=h.envMapIntensity}else if(h.isMeshToonMaterial)r(p,h),f(p,h);else if(h.isMeshPhongMaterial){if(r(p,h),u(p,h),h.envMap)p.envMapIntensity.value=h.envMapIntensity}else if(h.isMeshStandardMaterial){if(r(p,h),d(p,h),h.isMeshPhysicalMaterial)g(p,h,E)}else if(h.isMeshMatcapMaterial)r(p,h),y(p,h);else if(h.isMeshDepthMaterial)r(p,h);else if(h.isMeshDistanceMaterial)r(p,h),S(p,h);else if(h.isMeshNormalMaterial)r(p,h);else if(h.isLineBasicMaterial){if(a(p,h),h.isLineDashedMaterial)o(p,h)}else if(h.isPointsMaterial)l(p,h,b,T);else if(h.isSpriteMaterial)c(p,h);else if(h.isShadowMaterial)p.color.value.copy(h.color),p.opacity.value=h.opacity;else if(h.isShaderMaterial)h.uniformsNeedUpdate=!1}function r(p,h){if(p.opacity.value=h.opacity,h.color)p.diffuse.value.copy(h.color);if(h.emissive)p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity);if(h.map)p.map.value=h.map,n(h.map,p.mapTransform);if(h.alphaMap)p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform);if(h.bumpMap){if(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Fe)p.bumpScale.value*=-1}if(h.normalMap){if(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Fe)p.normalScale.value.negate()}if(h.displacementMap)p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias;if(h.emissiveMap)p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform);if(h.specularMap)p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform);if(h.alphaTest>0)p.alphaTest.value=h.alphaTest;let b=e.get(h),{envMap:T,envMapRotation:E}=b;if(T){if(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(th);p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio}if(h.lightMap)p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform);if(h.aoMap)p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform)}function a(p,h){if(p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map)p.map.value=h.map,n(h.map,p.mapTransform)}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,T){if(p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=T*0.5,h.map)p.map.value=h.map,n(h.map,p.uvTransform);if(h.alphaMap)p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform);if(h.alphaTest>0)p.alphaTest.value=h.alphaTest}function c(p,h){if(p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map)p.map.value=h.map,n(h.map,p.mapTransform);if(h.alphaMap)p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform);if(h.alphaTest>0)p.alphaTest.value=h.alphaTest}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,0.0001)}function f(p,h){if(h.gradientMap)p.gradientMap.value=h.gradientMap}function d(p,h){if(p.metalness.value=h.metalness,h.metalnessMap)p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=h.roughness,h.roughnessMap)p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform);if(h.envMap)p.envMapIntensity.value=h.envMapIntensity}function g(p,h,b){if(p.ior.value=h.ior,h.diffuseRoughness>0){if(p.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap)p.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(h.sheen>0){if(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap)p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform);if(h.sheenRoughnessMap)p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(h.clearcoat>0){if(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap)p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform);if(h.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(h.clearcoatNormalMap){if(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fe)p.clearcoatNormalScale.value.negate()}}if(h.dispersion>0)p.dispersion.value=h.dispersion;if(h.retroreflectivity>0)p.retroreflectivity.value=h.retroreflectivity;if(h.iridescence>0){if(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap)p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform);if(h.iridescenceThicknessMap)p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(h.transmission>0){if(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap)p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=h.thickness,h.thicknessMap)p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)}if(h.anisotropy>0){if(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap)p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap)p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform);if(h.specularIntensityMap)p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform)}function y(p,h){if(h.matcap)p.matcap.value=h.matcap}function S(p,h){let b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gm(t,e,n,i){let s={},r={};function a(b,T){let E=T.program;i.uniformBlockBinding(b,E,s[b.id])}function o(b,T){let E=s[b.id];if(E===void 0)y(b),E=l(b),s[b.id]=E,b.addEventListener("dispose",p);let w=T.program;i.updateUBOMapping(b,w);let R=e.render.frame;if(r[b.id]!==R)c(b),r[b.id]=R}function l(b){let T=t.createBuffer(),{__size:E,usage:w}=b;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,E,w),t.bindBuffer(t.UNIFORM_BUFFER,null),T}function c(b){let T=s[b.id],{uniforms:E,__cache:w}=b;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,m=E.length;R<m;R++){let x=E[R];if(Array.isArray(x))for(let A=0,U=x.length;A<U;A++)u(x[A],R,A,w);else u(x,R,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(b,T,E,w){if(d(b,T,E,w)===!0){let{__offset:R,value:m}=b;if(Array.isArray(m)){let x=0;for(let A=0;A<m.length;A++){let U=m[A],P=S(U,!0);f(U,b.__data,x),x+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(m,b.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,b.__data)}}function f(b,T,E){if(typeof b==="number"||typeof b==="boolean")T[E]=b;else if(b.isMatrix3)T[E]=b.elements[0],T[E+1]=b.elements[1],T[E+2]=b.elements[2],T[E+3]=0,T[E+4]=b.elements[3],T[E+5]=b.elements[4],T[E+6]=b.elements[5],T[E+7]=0,T[E+8]=b.elements[6],T[E+9]=b.elements[7],T[E+10]=b.elements[8],T[E+11]=0;else if(ArrayBuffer.isView(b))T.set(b.subarray(0,T.length-E),E);else b.toArray(T,E)}function d(b,T,E,w){let R=b.value,m=T+"_"+E;if(Array.isArray(R)){if(w[m]===void 0)w[m]=[];let x=w[m],A=!1;for(let U=0;U<R.length;U++)if(g(R[U],x,U)===!0)A=!0;return A}return g(R,w,m)}function g(b,T,E){if(T[E]===void 0){if(typeof b==="number"||typeof b==="boolean")T[E]=b;else if(ArrayBuffer.isView(b))T[E]=b.slice();else T[E]=b.clone();return!0}else{let w=T[E];if(typeof b==="number"||typeof b==="boolean"){if(w!==b)return T[E]=b,!0}else if(ArrayBuffer.isView(b))return!0;else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function y(b){let T=b.uniforms,E=0,w=16;for(let m=0,x=T.length;m<x;m++){let A=Array.isArray(T[m])?T[m]:[T[m]];for(let U=0,P=A.length;U<P;U++){let k=A[U],Q=Array.isArray(k.value)?k.value:[k.value],C=Array.isArray(T[m])||Array.isArray(k.value),Y=E;for(let B=0,lt=Q.length;B<lt;B++){let X=Q[B],tt=S(X,C),at=E%w,vt=at%tt.boundary,q=at+vt;if(E+=vt,q!==0&&w-q<tt.storage)E+=w-q;if(B===0)Y=E;E+=tt.storage}let z=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new z((E-Y)/Float32Array.BYTES_PER_ELEMENT),k.__offset=Y}}let R=E%w;if(R>0)E+=w-R;return b.__size=E,b.__cache={},this}function S(b,T){let E={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")E.boundary=4,E.storage=4;else if(b.isVector2)E.boundary=8,E.storage=8;else if(b.isVector3||b.isColor)E.boundary=16,E.storage=12;else if(b.isVector4)E.boundary=16,E.storage=16;else if(b.isMatrix3)E.boundary=16,E.storage=48;else if(b.isMatrix4)E.boundary=16,E.storage=64;else if(b.isTexture)Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))E.boundary=16,E.storage=b.byteLength;else Ft("WebGLRenderer: Unsupported uniform value type.",b);if(T===!0)E.boundary=16,E.storage=Math.ceil(E.storage/16)*16;return E}function p(b){let T=b.target;T.removeEventListener("dispose",p),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(let b in s)t.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:h}}var km=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null;function Hm(){if(fn===null)fn=new rr(km,16,16,ti,un),fn.name="DFG_LUT",fn.minFilter=Ze,fn.magFilter=Ze,fn.wrapS=qs,fn.wrapT=qs,fn.generateMipmaps=!1,fn.needsUpdate=!0;return fn}class yo{constructor(t={}){let{canvas:e=nc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;let y=d,S=new Set([aa,ra,sa]),p=new Set([nn,Bn,ns,jn,na,ia]),h=new Uint32Array(4),b=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},E=null,w=null,R=[],m=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,U=!1,P=null,k=null,Q=null,C=null;this._outputColorSpace=is;let Y=0,z=0,B=null,lt=-1,X=null,tt=new pe,at=new pe,vt=null,q=new Ot(0),st=0,{width:bt,height:It}=e,Lt=1,Et=null,Qt=null,Ht=new pe(0,0,bt,It),zt=new pe(0,0,bt,It),te=!1,qt=new Kn,le=new ar,ce=!1,Me=!1,Pe=new ie,de=new F,me=new pe,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Ge(){return B===null?Lt:1}let N=n;function Z(v,L){return e.getContext(v,L)}let ot,Dt,nt,Ut,St,Mt,et,M,_,D,it,j,ct,dt,W,K,ut,I,J,V,rt,ht,mt;try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${al}`);if(e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),N===null){if(N=Z("webgl2",v),N===null)if(Z("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(v){throw e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),Bt("WebGLRenderer: "+v.message),v}function Pt(){if(ot=new jf(N),ot.init(),rt=new Um(N,ot),Dt=new Hf(N,ot,t,rt),nt=new Nm(N,ot),Dt.reversedDepthBuffer&&f)nt.buffers.depth.setReversed(!0);k=N.createFramebuffer(),Q=N.createFramebuffer(),C=N.createFramebuffer(),Ut=new np(N),St=new vm,Mt=new Dm(N,ot,nt,St,Dt,rt,Ut),et=new Qf(A),M=new iu(N),ht=new Gf(N,M),_=new tp(N,M,Ut,ht),D=new sp(N,_,M,ht,Ut),I=new ip(N,Dt,Mt),W=new Wf(St),it=new xm(A,et,ot,Dt,ht,W),j=new zm(A,St),ct=new Sm,dt=new Am(ot),ut=new zf(A,et,nt,D,g,o),K=new Lm(A,D,Dt),mt=new Gm(N,Ut,Dt,nt),J=new kf(N,ot,Ut),V=new ep(N,ot,Ut),Ut.programs=it.programs,A.capabilities=Dt,A.extensions=ot,A.properties=St,A.renderLists=ct,A.shadowMap=K,A.state=nt,A.info=Ut}if(y!==nn)x=new ap(y,e.width,e.height,a,i,s);let Ct=new jc(A,N);this.xr=Ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ot.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=ot.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(v){if(v===void 0)return;Lt=v,this.setSize(bt,It,!1)},this.getSize=function(v){return v.set(bt,It)},this.setSize=function(v,L,H=!0){if(Ct.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}if(bt=v,It=L,e.width=Math.floor(v*Lt),e.height=Math.floor(L*Lt),H===!0)e.style.width=v+"px",e.style.height=L+"px";if(x!==null)x.setSize(e.width,e.height);this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(bt*Lt,It*Lt).floor()},this.setDrawingBufferSize=function(v,L,H){bt=v,It=L,Lt=H,e.width=Math.floor(v*H),e.height=Math.floor(L*H),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(y===nn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(Ht)},this.setViewport=function(v,L,H,O){if(v.isVector4)Ht.set(v.x,v.y,v.z,v.w);else Ht.set(v,L,H,O);nt.viewport(tt.copy(Ht).multiplyScalar(Ge()).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,L,H,O){if(v.isVector4)zt.set(v.x,v.y,v.z,v.w);else zt.set(v,L,H,O);nt.scissor(at.copy(zt).multiplyScalar(Ge()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){nt.setScissorTest(te=v)},this.setOpaqueSort=function(v){Et=v},this.setTransparentSort=function(v){Qt=v},this.getClearColor=function(v){return v.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,H=!0){let O=0;if(v){let G=!1;if(B!==null){let pt=B.texture.format;G=S.has(pt)}if(G){let pt=B.texture.type,Tt=p.has(pt),ft=ut.getClearColor(),yt=ut.getClearAlpha(),{r:Rt,g:kt,b:Yt}=ft;if(Tt)h[0]=Rt,h[1]=kt,h[2]=Yt,h[3]=yt,N.clearBufferuiv(N.COLOR,0,h);else b[0]=Rt,b[1]=kt,b[2]=Yt,b[3]=yt,N.clearBufferiv(N.COLOR,0,b)}else O|=N.COLOR_BUFFER_BIT}if(L)O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H)O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(O!==0)N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),P=v},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),ut.dispose(),ct.dispose(),dt.dispose(),Mt.dispose(),St.dispose(),et.dispose(),D.dispose(),_.dispose(),ht.dispose(),mt.dispose(),it.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Mo),Ct.removeEventListener("sessionend",bo),Vn.stop()};function _t(v){v.preventDefault(),Xa("WebGLRenderer: Context Lost."),U=!0}function Nt(){Xa("WebGLRenderer: Context Restored."),U=!1;let v=Ut.autoReset,L=K.enabled,H=K.autoUpdate,O=K.needsUpdate,G=K.type;Pt(),Ut.autoReset=v,K.enabled=L,K.autoUpdate=H,K.needsUpdate=O,K.type=G}function Wt(v){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function xt(v){let L=v.target;L.removeEventListener("dispose",xt),re(L)}function re(v){be(v),St.remove(v)}function be(v){let L=St.get(v).programs;if(L!==void 0){if(L.forEach(function(H){it.releaseProgram(H)}),v.isShaderMaterial)it.releaseShaderCache(v)}}this.renderBufferDirect=function(v,L,H,O,G,pt){if(L===null)L=we;let Tt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=sh(v,L,H,O,G);nt.setMaterial(O,Tt);let yt=H.index,Rt=1;if(O.wireframe===!0){if(yt=_.getWireframeAttribute(H),yt===void 0)return;Rt=2}let kt=H.drawRange,Yt=H.attributes.position,wt=kt.start*Rt,Zt=(kt.start+kt.count)*Rt;if(pt!==null)wt=Math.max(wt,pt.start*Rt),Zt=Math.min(Zt,(pt.start+pt.count)*Rt);if(yt!==null)wt=Math.max(wt,0),Zt=Math.min(Zt,yt.count);else if(Yt!==void 0&&Yt!==null)wt=Math.max(wt,0),Zt=Math.min(Zt,Yt.count);let ge=Zt-wt;if(ge<0||ge===1/0)return;ht.setup(G,O,ft,H,yt);let he,ae=J;if(yt!==null)he=M.get(yt),ae=V,ae.setIndex(he);if(G.isMesh)if(O.wireframe===!0)nt.setLineWidth(O.wireframeLinewidth*Ge()),ae.setMode(N.LINES);else ae.setMode(N.TRIANGLES);else if(G.isLine){let Le=O.linewidth;if(Le===void 0)Le=1;if(nt.setLineWidth(Le*Ge()),G.isLineSegments)ae.setMode(N.LINES);else if(G.isLineLoop)ae.setMode(N.LINE_LOOP);else ae.setMode(N.LINE_STRIP)}else if(G.isPoints)ae.setMode(N.POINTS);else if(G.isSprite)ae.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(!ot.get("WEBGL_multi_draw")){let{_multiDrawStarts:Le,_multiDrawCounts:At,_multiDrawCount:Be}=G,ee=yt?M.get(yt).bytesPerElement:1,Xn=St.get(O).currentProgram.getUniforms();for(let Ne=0;Ne<Be;Ne++)Xn.setValue(N,"_gl_DrawID",Ne),ae.render(Le[Ne]/ee,At[Ne])}else ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ae.renderInstances(wt,ge,G.count);else if(H.isInstancedBufferGeometry){let Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,Le);ae.renderInstances(wt,ge,At)}else ae.render(wt,ge)};function mn(v,L,H,O){if(P!==null&&v.isNodeMaterial)P.setObject(O,v);if(ce===!0)W.setState(v,H,!1);if(v.transparent===!0&&v.side===We&&v.forceSinglePass===!1)v.side=Fe,v.needsUpdate=!0,Gi(v,L,O),v.side=wi,v.needsUpdate=!0,Gi(v,L,O),v.side=We;else Gi(v,L,O)}this.compile=function(v,L,H=null){if(H===null)H=v;if(P!==null)P.renderStart(v,L,H);if(w=dt.get(H),w.init(L),m.push(w),H.traverseVisible(function(G){if(G.isLight&&G.layers.test(L.layers)){if(w.pushLight(G),G.castShadow)w.pushShadow(G)}}),v!==H)v.traverseVisible(function(G){if(G.isLight&&G.layers.test(L.layers)){if(w.pushLight(G),G.castShadow)w.pushShadow(G)}});if(w.setupLights(),P!==null)P.updateLights(w.state.lightsArray);if(Me=this.localClippingEnabled,ce=W.init(this.clippingPlanes,Me),ce===!0)W.setGlobalState(this.clippingPlanes,L);if(P!==null)K.render(w.state.shadowsArray,H,L);let O=new Set;if(v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){let ft=pt[Tt];mn(ft,H,L,G),O.add(ft)}else mn(pt,H,L,G),O.add(pt)}),w=m.pop(),P!==null)P.renderEnd();return O},this.compileAsync=function(v,L,H=null){let O=this.compile(v,L,H);return new Promise((G)=>{function pt(){if(O.forEach(function(Tt){let yt=St.get(Tt).currentProgram;if(yt===void 0||yt.isReady())O.delete(Tt)}),O.size===0){G(v);return}setTimeout(pt,10)}if(ot.get("KHR_parallel_shader_compile")!==null)pt();else setTimeout(pt,10)})};let Mr=null;function nh(v){if(Mr)Mr(v)}function Mo(){Vn.stop()}function bo(){Vn.start()}let Vn=new Oc;if(Vn.setAnimationLoop(nh),typeof self<"u")Vn.setContext(self);this.setAnimationLoop=function(v){Mr=v,Ct.setAnimationLoop(v),v===null?Vn.stop():Vn.start()},Ct.addEventListener("sessionstart",Mo),Ct.addEventListener("sessionend",bo),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P!==null)P.renderStart(v,L);let H=Ct.enabled===!0&&Ct.isPresenting===!0,O=x!==null&&(B===null||H)&&x.begin(A,B);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(Ct.enabled===!0&&Ct.isPresenting===!0&&(x===null||x.isCompositing()===!1)){if(Ct.cameraAutoUpdate===!0)Ct.updateCamera(L);L=Ct.getCamera()}if(v.isScene===!0)v.onBeforeRender(A,v,L,B);if(w=dt.get(v,m.length),w.init(L),w.state.textureUnits=Mt.getTextureUnits(),m.push(w),Pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera)le.setFromArrayCamera(L);else qt.setFromProjectionMatrix(Pe,Va,L.reversedDepth);if(Me=this.localClippingEnabled,ce=W.init(this.clippingPlanes,Me),E=ct.get(v,R.length),E.init(),R.push(E),this.info.render.frame++,Ct.enabled===!0&&Ct.isPresenting===!0){let Tt=A.xr.getDepthSensingMesh();if(Tt!==null)br(Tt,L,-1/0,A.sortObjects)}if(br(v,L,0,A.sortObjects),E.finish(),P!==null)P.updateLights(w.state.lightsArray);if(A.sortObjects===!0)E.sort(Et,Qt);if(Ae=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Ae)ut.addToRenderList(E,v);if(this.info.autoReset===!0)this.info.reset();if(ce===!0)W.beginShadows();let G=w.state.shadowsArray;if(K.render(G,v,L),ce===!0)W.endShadows();if((O&&x.hasRenderPass())===!1){let Tt=E.opaque,ft=E.transmissive;if(w.setupLights(),L.isArrayCamera){let yt=L.cameras;if(ft.length>0)for(let Rt=0,kt=yt.length;Rt<kt;Rt++){let Yt=yt[Rt];To(Tt,ft,v,Yt)}if(Ae)ut.render(v);for(let Rt=0,kt=yt.length;Rt<kt;Rt++){let Yt=yt[Rt];Eo(E,v,Yt,Yt.viewport)}}else{if(ft.length>0)To(Tt,ft,v,L);if(Ae)ut.render(v);Eo(E,v,L)}}if(B!==null&&z===0)Mt.updateMultisampleRenderTarget(B),Mt.updateRenderTargetMipmap(B);if(O)x.end(A);if(v.isScene===!0)v.onAfterRender(A,v,L);if(ht.resetDefaultState(),lt=-1,X=null,m.pop(),m.length>0){if(w=m[m.length-1],Mt.setTextureUnits(w.state.textureUnits),ce===!0)W.setGlobalState(A.clippingPlanes,w.state.camera)}else w=null;if(R.pop(),R.length>0)E=R[R.length-1];else E=null;if(P!==null)P.renderEnd()};function br(v,L,H,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(L)}else if(v.isLight){if(w.pushLight(v),v.castShadow)w.pushShadow(v)}else if(v.isSprite){let Tt=L.isArrayCamera?le:qt;if(!v.frustumCulled||v.intersectsFrustum(Tt)){if(O)me.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Pe);let ft=D.update(v),yt=v.material;if(yt.visible)E.push(v,ft,yt,H,me.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){let Tt=L.isArrayCamera?le:qt;if(!v.frustumCulled||v.intersectsFrustum(Tt)){let ft=D.update(v),yt=v.material;if(O){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();me.copy(v.boundingSphere.center)}else{if(ft.boundingSphere===null)ft.computeBoundingSphere();me.copy(ft.boundingSphere.center)}me.applyMatrix4(v.matrixWorld).applyMatrix4(Pe)}if(Array.isArray(yt)){let Rt=ft.groups;for(let kt=0,Yt=Rt.length;kt<Yt;kt++){let wt=Rt[kt],Zt=yt[wt.materialIndex];if(Zt&&Zt.visible)E.push(v,ft,Zt,H,me.z,wt,L)}}else if(yt.visible)E.push(v,ft,yt,H,me.z,null,L)}}}let pt=v.children;for(let Tt=0,ft=pt.length;Tt<ft;Tt++)br(pt[Tt],L,H,O)}function Eo(v,L,H,O){let{opaque:G,transmissive:pt,transparent:Tt}=v;if(w.setupLightsView(H),ce===!0)W.setGlobalState(A.clippingPlanes,H);if(O)nt.viewport(tt.copy(O));if(G.length>0)xs(G,L,H);if(pt.length>0)xs(pt,L,H);if(Tt.length>0)xs(Tt,L,H);nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function To(v,L,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let wt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Je(1,1,{generateMipmaps:!0,type:wt?un:nn,minFilter:On,samples:Math.max(4,Dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let pt=w.state.transmissionRenderTarget[O.id],Tt=O.viewport||tt;pt.setSize(Tt.z*A.transmissionResolutionScale,Tt.w*A.transmissionResolutionScale);let ft=A.getRenderTarget(),yt=A.getActiveCubeFace(),Rt=A.getActiveMipmapLevel();if(A.setRenderTarget(pt),A.getClearColor(q),st=A.getClearAlpha(),st<1)A.setClearColor(16777215,0.5);if(A.clear(),Ae)ut.render(H);let kt=A.toneMapping;A.toneMapping=hn;let Yt=O.viewport;if(O.viewport!==void 0)O.viewport=void 0;if(w.setupLightsView(O),ce===!0)W.setGlobalState(A.clippingPlanes,O);if(xs(v,H,O),Mt.updateMultisampleRenderTarget(pt),Mt.updateRenderTargetMipmap(pt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Zt=0,ge=L.length;Zt<ge;Zt++){let he=L[Zt],{object:ae,geometry:Le,material:At,group:Be}=he;if(At.side===We&&ae.layers.test(O.layers)){let ee=At.side;At.side=Fe,At.needsUpdate=!0,wo(ae,H,O,Le,At,Be),At.side=ee,At.needsUpdate=!0,wt=!0}}if(wt===!0)Mt.updateMultisampleRenderTarget(pt),Mt.updateRenderTargetMipmap(pt)}if(A.setRenderTarget(ft,yt,Rt),A.setClearColor(q,st),Yt!==void 0)O.viewport=Yt;A.toneMapping=kt}function xs(v,L,H){let O=L.isScene===!0?L.overrideMaterial:null;for(let G=0,pt=v.length;G<pt;G++){let Tt=v[G],{object:ft,geometry:yt,group:Rt}=Tt,kt=Tt.material;if(kt.allowOverride===!0&&O!==null)kt=O;if(ft.layers.test(H.layers))wo(ft,L,H,yt,kt,Rt)}}function wo(v,L,H,O,G,pt){if(P!==null&&G.isNodeMaterial)P.setObject(v,G);if(v.onBeforeRender(A,L,H,O,G,pt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(A,L,H,O,v,pt),G.transparent===!0&&G.side===We&&G.forceSinglePass===!1)G.side=Fe,G.needsUpdate=!0,A.renderBufferDirect(H,L,O,G,v,pt),G.side=wi,G.needsUpdate=!0,A.renderBufferDirect(H,L,O,G,v,pt),G.side=We;else A.renderBufferDirect(H,L,O,G,v,pt);v.onAfterRender(A,L,H,O,G,pt)}function Ao(v){let L=0;for(let H of v)if(H.texture!==null)L++;return L}function Gi(v,L,H){if(L.isScene!==!0)L=we;let O=St.get(v),G=w.state.lights,pt=w.state.shadowsArray,Tt=G.state.version,ft=it.getParameters(v,G.state,pt,L,H,w.state.lightProbeGridArray),yt=it.getProgramCacheKey(ft),Rt=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;let kt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(O.envMap=et.get(v.envMap||O.environment,kt),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Rt===void 0)v.addEventListener("dispose",xt),Rt=new Map,O.programs=Rt,O.programVariants=new Map;let Yt=Rt.get(yt);if(Yt!==void 0){if(O.currentProgram===Yt&&O.lightsStateVersion===Tt)return Co(v,ft),Yt}else{if(ft.uniforms=it.getUniforms(v),P!==null&&v.isNodeMaterial)P.build(v,H,ft);v.onBeforeCompile(ft,A),Yt=it.acquireProgram(ft,yt),Rt.set(yt,Yt),O.uniforms=ft.uniforms}let wt=O.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)wt.clippingPlanes=W.uniform;if(Co(v,ft),O.needsLights=ah(v),O.lightsStateVersion=Tt,O.needsLights)wt.ambientLightColor.value=G.state.ambient,wt.lightProbe.value=G.state.probe,wt.sunLights.value=G.state.sun,wt.sunLightShadows.value=G.state.sunShadow,wt.directionalLights.value=G.state.directional,wt.directionalLightShadows.value=G.state.directionalShadow,wt.spotLights.value=G.state.spot,wt.spotLightShadows.value=G.state.spotShadow,wt.rectAreaLights.value=G.state.rectArea,wt.ltc_1.value=G.state.rectAreaLTC1,wt.ltc_2.value=G.state.rectAreaLTC2,wt.pointLights.value=G.state.point,wt.pointLightShadows.value=G.state.pointShadow,wt.hemisphereLights.value=G.state.hemi,wt.sunShadowMatrix.value=G.state.sunShadowMatrix,wt.sunShadowCascade.value=G.state.sunShadowCascade,wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,wt.spotLightMatrix.value=G.state.spotLightMatrix,wt.spotLightMap.value=G.state.spotLightMap,wt.pointShadowMatrix.value=G.state.pointShadowMatrix;return O.numLightProbeGrids=Ao(w.state.lightProbeGridArray),O.currentProgram=Yt,O.uniformsList=null,Yt}function ih(v,L,H,O,G){let pt=St.get(v),Tt=pt.currentProgram.id+","+O+","+G,ft=pt.programVariants.get(Tt);if(ft===void 0)ft=Gi(v,L,H),pt.programVariants.set(Tt,ft);else pt.currentProgram=ft,pt.uniformsList=null,pt.outputColorSpace=O,pt.toneMapping=G;return ft}function Ro(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=ms.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Co(v,L){let H=St.get(v);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function sh(v,L,H,O,G){if(L.isScene!==!0)L=we;Mt.resetTextureUnits();let pt=L.fog,Tt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,ft=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Jt.workingColorSpace,yt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Rt=et.get(O.envMap||Tt,yt),kt=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Yt=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),wt=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color,he=hn;if(O.toneMapped){if(B===null||B.isXRRenderTarget===!0)he=A.toneMapping}let ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Le=ae!==void 0?ae.length:0,At=St.get(O),Be=w.state.lights;if(ce===!0){if(Me===!0||v!==X){let fe=v===X&&O.id===lt;W.setState(O,v,fe)}}let ee=!1,Xn=!1;if(O.version===At.__version){if(At.needsLights&&At.lightsStateVersion!==Be.state.version)ee=!0;else if(G.isBatchedMesh&&At.batching===!1)ee=!0;else if(!G.isBatchedMesh&&At.batching===!0)ee=!0;else if(G.isBatchedMesh&&At.batchingColor===!0&&G._colorsTexture===null)ee=!0;else if(G.isBatchedMesh&&At.batchingColor===!1&&G._colorsTexture!==null)ee=!0;else if(G.isInstancedMesh&&At.instancing===!1)ee=!0;else if(!G.isInstancedMesh&&At.instancing===!0)ee=!0;else if(G.isSkinnedMesh&&At.skinning===!1)ee=!0;else if(!G.isSkinnedMesh&&At.skinning===!0)ee=!0;else if(G.isInstancedMesh&&At.instancingColor===!0&&G.instanceColor===null)ee=!0;else if(G.isInstancedMesh&&At.instancingColor===!1&&G.instanceColor!==null)ee=!0;else if(G.isInstancedMesh&&At.instancingMorph===!0&&G.morphTexture===null)ee=!0;else if(G.isInstancedMesh&&At.instancingMorph===!1&&G.morphTexture!==null)ee=!0;else if(At.envMap!==Rt)ee=!0;else if(O.fog===!0&&At.fog!==pt)ee=!0;else if(At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==W.numPlanes||At.numIntersection!==W.numIntersection))ee=!0;else if(At.vertexAlphas!==kt)ee=!0;else if(At.vertexTangents!==Yt)ee=!0;else if(At.morphTargets!==wt)ee=!0;else if(At.morphNormals!==Zt)ee=!0;else if(At.morphColors!==ge)ee=!0;else if(At.morphTargetsCount!==Le)ee=!0;else if(At.numLightProbeGrids!==Ao(w.state.lightProbeGridArray))ee=!0;else if(At.outputColorSpace!==ft||At.toneMapping!==he)Xn=!0}else ee=!0,At.__version=O.version;let Ne=At.currentProgram;if(ee===!0||Xn===!0){if(Ne=Xn===!0?ih(O,L,G,ft,he):Gi(O,L,G),P&&O.isNodeMaterial)P.onUpdateProgram(O,Ne,At)}let vs=!1,In=!1,qn=!1,Kt=Ne.getUniforms(),Re=At.uniforms;if(nt.useProgram(Ne.program))vs=!0,In=!0,qn=!0;if(O.id!==lt)lt=O.id,In=!0;if(vs||X!==v){if(nt.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();Kt.setValue(N,"projectionMatrix",v.projectionMatrix),Kt.setValue(N,"viewMatrix",v.matrixWorldInverse);let Ee=Kt.map.cameraPosition;if(Ee!==void 0)Ee.setValue(N,de.setFromMatrixPosition(v.matrixWorld));if(Dt.logarithmicDepthBuffer)Kt.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)Kt.setValue(N,"isOrthographic",v.isOrthographicCamera===!0);if(X!==v)X=v,In=!0,qn=!0}if(At.needsLights){if(Be.state.sunShadowMap.length>0)Kt.setValue(N,"sunShadowMap",Be.state.sunShadowMap,Mt);if(Be.state.directionalShadowMap.length>0)Kt.setValue(N,"directionalShadowMap",Be.state.directionalShadowMap,Mt);if(Be.state.spotShadowMap.length>0)Kt.setValue(N,"spotShadowMap",Be.state.spotShadowMap,Mt);if(Be.state.pointShadowMap.length>0)Kt.setValue(N,"pointShadowMap",Be.state.pointShadowMap,Mt)}if(G.isSkinnedMesh){Kt.setOptional(N,G,"bindMatrix"),Kt.setOptional(N,G,"bindMatrixInverse");let fe=G.skeleton;if(fe){if(fe.boneTexture===null)fe.computeBoneTexture();Kt.setValue(N,"boneTexture",fe.boneTexture,Mt)}}if(G.isBatchedMesh){if(Kt.setOptional(N,G,"batchingTexture"),Kt.setValue(N,"batchingTexture",G._matricesTexture,Mt),Kt.setOptional(N,G,"batchingIdTexture"),Kt.setValue(N,"batchingIdTexture",G._indirectTexture,Mt),Kt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null)Kt.setValue(N,"batchingColorTexture",G._colorsTexture,Mt)}let Ke=H.morphAttributes;if(Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)I.update(G,H,Ne);if(In||At.receiveShadow!==G.receiveShadow)At.receiveShadow=G.receiveShadow,Kt.setValue(N,"receiveShadow",G.receiveShadow);if((O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null)Re.envMapIntensity.value=L.environmentIntensity;if(Re.dfgLUT!==void 0)Re.dfgLUT.value=Hm();if(In){if(Kt.setValue(N,"toneMappingExposure",A.toneMappingExposure),At.needsLights)rh(Re,qn);if(pt&&O.fog===!0)j.refreshFogUniforms(Re,pt);if(j.refreshMaterialUniforms(Re,O,Lt,It,w.state.transmissionRenderTarget[v.id]),At.needsLights&&At.numLightProbeGrids>0){let fe=T,Ee=0;for(let gn of w.state.lightProbeGridArray){if(gn.texture===null)continue;fe.textures[Ee]=gn.texture,fe.min[Ee]=gn.boundingBox.min,fe.max[Ee]=gn.boundingBox.max,fe.resolution[Ee]=gn.resolution,Ee++}for(let gn in fe)fe[gn].length=Ee;Re.probesSH.value=fe.textures,Re.probesMin.value=fe.min,Re.probesMax.value=fe.max,Re.probesResolution.value=fe.resolution}ms.upload(N,Ro(At),Re,Mt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0)ms.upload(N,Ro(At),Re,Mt),O.uniformsNeedUpdate=!1;if(O.isSpriteMaterial)Kt.setValue(N,"center",G.center);if(Kt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Kt.setValue(N,"normalMatrix",G.normalMatrix),Kt.setValue(N,"modelMatrix",G.matrixWorld),O.uniformsGroups!==void 0){let fe=O.uniformsGroups;for(let Ee=0,gn=fe.length;Ee<gn;Ee++){let Po=fe[Ee];mt.update(Po,Ne),mt.bind(Po,Ne)}}return Ne}function rh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function ah(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,L,H){let O=St.get(v);if(O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1)O.__useRenderToTexture=!1;St.get(v.texture).__webglTexture=L,St.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let H=St.get(v);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,H=0){B=v,Y=L,z=H;let O=null,G=!1,pt=!1;if(v){let ft=St.get(v);if(ft.__useDefaultFramebuffer!==void 0){nt.bindFramebuffer(N.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(v.viewport),at.copy(v.scissor),vt=v.scissorTest,nt.viewport(tt),nt.scissor(at),nt.setScissorTest(vt),lt=-1;return}else if(ft.__webglFramebuffer===void 0)Mt.setupRenderTarget(v);else if(ft.__hasExternalTextures)Mt.rebindTextures(v,St.get(v.texture).__webglTexture,St.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let kt=v.depthTexture;if(ft.__boundDepthTexture!==kt){if(kt!==null&&St.has(kt)&&(v.width!==kt.image.width||v.height!==kt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(v)}}let yt=v.texture;if(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)pt=!0;let Rt=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Rt[L]))O=Rt[L][H];else O=Rt[L];G=!0}else if(v.samples>0&&Mt.useMultisampledRTT(v)===!1)O=St.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Rt))O=Rt[H];else O=Rt;tt.copy(v.viewport),at.copy(v.scissor),vt=v.scissorTest}else tt.copy(Ht).multiplyScalar(Lt).floor(),at.copy(zt).multiplyScalar(Lt).floor(),vt=te;if(H!==0)O=k;if(nt.bindFramebuffer(N.FRAMEBUFFER,O))nt.drawBuffers(v,O);if(nt.viewport(tt),nt.scissor(at),nt.setScissorTest(vt),G){let ft=St.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,H)}else if(pt){let ft=L;for(let yt=0;yt<v.textures.length;yt++){let Rt=St.get(v.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,Rt.__webglTexture,H,ft)}}else if(v!==null&&H!==0){let ft=St.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,H)}lt=-1};function Io(v){let L=St.get(v);if(L.__readFormat!==v.format||L.__readType!==v.type)L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=Dt.textureFormatReadable(v.format),L.__typeReadable=Dt.textureTypeReadable(v.type);return L}if(this.readRenderTargetPixels=function(v,L,H,O,G,pt,Tt,ft=0){if(!(v&&v.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0){if(yt=yt[Tt],Array.isArray(yt))yt=yt[0]}if(yt){nt.bindFramebuffer(N.FRAMEBUFFER,yt);try{let Rt=v.textures[ft],{format:kt,type:Yt}=Rt;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ft);let wt=Io(Rt);if(wt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=v.width-O&&(H>=0&&H<=v.height-G))N.readPixels(L,H,O,G,rt.convert(kt),rt.convert(Yt),pt)}finally{let Rt=B!==null?St.get(B).__webglFramebuffer:null;nt.bindFramebuffer(N.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(v,L,H,O,G,pt,Tt,ft=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0){if(yt=yt[Tt],Array.isArray(yt))yt=yt[0]}if(yt)if(L>=0&&L<=v.width-O&&(H>=0&&H<=v.height-G)){nt.bindFramebuffer(N.FRAMEBUFFER,yt);let Rt=v.textures[ft],{format:kt,type:Yt}=Rt;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ft);let wt=Io(Rt);if(wt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Zt),N.bufferData(N.PIXEL_PACK_BUFFER,pt.byteLength,N.STREAM_READ),N.readPixels(L,H,O,G,rt.convert(kt),rt.convert(Yt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ge=B!==null?St.get(B).__webglFramebuffer:null;nt.bindFramebuffer(N.FRAMEBUFFER,ge);let he=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await sc(N,he,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Zt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Zt),N.deleteSync(he),pt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,H=0){let O=Math.pow(2,-H),G=Math.floor(v.image.width*O),pt=Math.floor(v.image.height*O),Tt=L!==null?L.x:0,ft=L!==null?L.y:0;Mt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,Tt,ft,G,pt),nt.unbindTexture()},this.copyTextureToTexture=function(v,L,H=null,O=null,G=0,pt=0){let Tt,ft,yt,Rt,kt,Yt,wt,Zt,ge,he=v.isCompressedTexture?v.mipmaps[pt]:v.image;if(H!==null)Tt=H.max.x-H.min.x,ft=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,kt=H.min.y,Yt=H.isBox3?H.min.z:0;else{let Kt=Math.pow(2,-G);if(Tt=Math.floor(he.width*Kt),ft=Math.floor(he.height*Kt),v.isDataArrayTexture)yt=he.depth;else if(v.isData3DTexture)yt=Math.floor(he.depth*Kt);else yt=1;Rt=0,kt=0,Yt=0}if(O!==null)wt=O.x,Zt=O.y,ge=O.z;else wt=0,Zt=0,ge=0;let ae=rt.convert(L.format),Le=rt.convert(L.type),At;if(L.isData3DTexture)Mt.setTexture3D(L,0),At=N.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Mt.setTexture2DArray(L,0),At=N.TEXTURE_2D_ARRAY;else Mt.setTexture2D(L,0),At=N.TEXTURE_2D;nt.activeTexture(N.TEXTURE0),nt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),nt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),nt.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Be=nt.getParameter(N.UNPACK_ROW_LENGTH),ee=nt.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=nt.getParameter(N.UNPACK_SKIP_PIXELS),Ne=nt.getParameter(N.UNPACK_SKIP_ROWS),vs=nt.getParameter(N.UNPACK_SKIP_IMAGES);nt.pixelStorei(N.UNPACK_ROW_LENGTH,he.width),nt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he.height),nt.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),nt.pixelStorei(N.UNPACK_SKIP_ROWS,kt),nt.pixelStorei(N.UNPACK_SKIP_IMAGES,Yt);let In=v.isDataArrayTexture||v.isData3DTexture,qn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let Kt=St.get(v),Re=St.get(L),Ke=St.get(Kt.__renderTarget),fe=St.get(Re.__renderTarget);nt.bindFramebuffer(N.READ_FRAMEBUFFER,Ke.__webglFramebuffer),nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ee=0;Ee<yt;Ee++){if(In)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(v).__webglTexture,G,Yt+Ee),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(L).__webglTexture,pt,ge+Ee);N.blitFramebuffer(Rt,kt,Rt+Tt,kt+ft,wt,Zt,wt+Tt,Zt+ft,N.DEPTH_BUFFER_BIT,N.NEAREST)}nt.bindFramebuffer(N.READ_FRAMEBUFFER,null),nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||St.has(v)){let Kt=St.get(v),Re=St.get(L);nt.bindFramebuffer(N.READ_FRAMEBUFFER,Q),nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,C);for(let Ke=0;Ke<yt;Ke++){if(In)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,G,Yt+Ke);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,G);if(qn)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,pt,ge+Ke);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,pt);if(G!==0)N.blitFramebuffer(Rt,kt,Rt+Tt,kt+ft,wt,Zt,wt+Tt,Zt+ft,N.COLOR_BUFFER_BIT,N.NEAREST);else if(qn)N.copyTexSubImage3D(At,pt,wt,Zt,ge+Ke,Rt,kt,Tt,ft);else N.copyTexSubImage2D(At,pt,wt,Zt,Rt,kt,Tt,ft)}nt.bindFramebuffer(N.READ_FRAMEBUFFER,null),nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(qn)if(v.isDataTexture||v.isData3DTexture)N.texSubImage3D(At,pt,wt,Zt,ge,Tt,ft,yt,ae,Le,he.data);else if(L.isCompressedArrayTexture)N.compressedTexSubImage3D(At,pt,wt,Zt,ge,Tt,ft,yt,ae,he.data);else N.texSubImage3D(At,pt,wt,Zt,ge,Tt,ft,yt,ae,Le,he);else if(v.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,pt,wt,Zt,Tt,ft,ae,Le,he.data);else if(v.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,pt,wt,Zt,he.width,he.height,ae,he.data);else N.texSubImage2D(N.TEXTURE_2D,pt,wt,Zt,Tt,ft,ae,Le,he);if(nt.pixelStorei(N.UNPACK_ROW_LENGTH,Be),nt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee),nt.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),nt.pixelStorei(N.UNPACK_SKIP_ROWS,Ne),nt.pixelStorei(N.UNPACK_SKIP_IMAGES,vs),pt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0)N.generateMipmap(At);nt.unbindTexture()},this.initRenderTarget=function(v){if(St.get(v).__webglFramebuffer===void 0)Mt.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)Mt.setTextureCube(v,0);else if(v.isData3DTexture)Mt.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)Mt.setTexture2DArray(v,0);else Mt.setTexture2D(v,0);nt.unbindTexture()},this.resetState=function(){Y=0,z=0,B=null,nt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Va}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class So extends Pi{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let t=new an;t.deleteAttribute("uv");let e=new dn({side:Fe}),n=new dn,i=new ai(16777215,900,28,2);i.position.set(0.418,16.199,0.3),this.add(i);let s=new ne(t,e);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new Li(t,n,6),a=new xe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-0.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),r.setMatrixAt(0,a.matrix),a.position.set(-5.607,-0.754,-0.758),a.rotation.set(0,0.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),r.setMatrixAt(1,a.matrix),a.position.set(6.167,0.857,7.803),a.rotation.set(0,0.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),r.setMatrixAt(2,a.matrix),a.position.set(-2.017,0.018,6.124),a.rotation.set(0,0.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),r.setMatrixAt(3,a.matrix),a.position.set(2.291,-0.756,-2.621),a.rotation.set(0,-0.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),r.setMatrixAt(4,a.matrix),a.position.set(-2.193,-0.369,-5.547),a.rotation.set(0,0.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),r.setMatrixAt(5,a.matrix),this.add(r);let o=new ne(t,zi(50));o.position.set(-16.116,14.37,8.208),o.scale.set(0.1,2.428,2.739),this.add(o);let l=new ne(t,zi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ne(t,zi(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let u=new ne(t,zi(43));u.position.set(-0.462,8.89,14.52),u.scale.set(4.38,5.441,0.088),this.add(u);let f=new ne(t,zi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,0.1),this.add(f);let d=new ne(t,zi(100));d.position.set(0,20,0),d.scale.set(1,0.1,1),this.add(d)}dispose(){let t=new Set;this.traverse((e)=>{if(e.isMesh)t.add(e.geometry),t.add(e.material)});for(let e of t)e.dispose()}}function zi(t){return new ur({color:0,emissive:16777215,emissiveIntensity:t})}var jt={chamber:1183243,copper:12618331,ivory:15986143,amber:14462334,pass:11126682,deny:14705738,idle:7166536},Wn=[{key:"Sign-in",label:"SIGN-IN",x:-2.3},{key:"Workspace",label:"WORKSPACE",x:-0.35},{key:"Permission",label:"PERMISSION",x:1.6}],_s=-4.7,oi=3.65,Wm=2.4,Vm=()=>matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.classList.contains("motion-off")||new URLSearchParams(location.search).get("motion")==="off";function Xm(){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(0.22,"rgba(255,255,255,.55)"),i.addColorStop(0.55,"rgba(255,255,255,.12)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);let s=new lr(e);return s.colorSpace=is,s}function eh(t){let e=[...t.querySelectorAll("#decision-trace li")],n=Wn.map((s)=>e.find((a)=>a.textContent.includes(s.key))?.dataset.state||"skipped"),i=!t.querySelector("#access-result")?.classList.contains("is-denied");return{states:n,allowed:i,signature:`${n.join("|")}|${i}`}}function qm(t,e){let n=Vm(),i=new yo({antialias:!0,alpha:!1,powerPreference:"default"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,innerWidth<760?1.5:1.75)),i.toneMapping=ji,i.toneMappingExposure=1.05,i.outputColorSpace=is,i.setClearColor(jt.chamber,1),i.domElement.className="b3d-canvas",i.domElement.setAttribute("aria-hidden","true"),t.prepend(i.domElement);let s=new Pi;s.fog=new as(jt.chamber,9,17);let r=new Oi(i),a=r.fromScene(new So,0.04);s.environment=a.texture,s.environmentIntensity=0.55,r.dispose();let o=new ze(34,1,0.1,40),l=new F(-3.4,2.5,7.6),c=new F(0.5,-0.05,0);o.position.copy(l),o.lookAt(c);let u=new en;s.add(u);let f=new us(16769732,1.6);f.position.set(-4,6,5),s.add(f);let d=new us(9414328,0.5);d.position.set(5,2,-6),s.add(d);let g=Xm(),y=[a,g],S=(Z)=>(y.push(Z),Z);{let nt=new Float32Array(3036),Ut=0;for(let et=0;et<46;et++)for(let M=0;M<22;M++)nt[Ut++]=(et-23)*0.36,nt[Ut++]=-1.32,nt[Ut++]=(M-11)*0.36;let St=S(new ve);St.setAttribute("position",new Ie(nt,3));let Mt=S(new Cn({color:jt.copper,size:0.035,transparent:!0,opacity:0.55,depthWrite:!1}));u.add(new kn(St,Mt))}{let Z=S(new Di(0.008,0.008,oi-_s,8,1,!0));Z.rotateZ(Math.PI/2);let ot=S(new rn({color:jt.amber,transparent:!0,opacity:0.22,depthWrite:!1})),Dt=new ne(Z,ot);Dt.position.x=(oi+_s)/2,u.add(Dt)}let p=(()=>{let ot=new Float32Array(480),Dt=new Float32Array(160);for(let Mt=0;Mt<160;Mt++)ot[Mt*3]=wn.randFloatSpread(12),ot[Mt*3+1]=wn.randFloat(-1.2,2.6),ot[Mt*3+2]=wn.randFloatSpread(7),Dt[Mt]=Math.random()*Math.PI*2;let nt=S(new ve);nt.setAttribute("position",new Ie(ot,3));let Ut=S(new Cn({map:g,color:jt.amber,size:0.06,transparent:!0,opacity:0.5,blending:Ye,depthWrite:!1})),St=new kn(nt,Ut);return u.add(St),{points:St,positions:ot,seeds:Dt,count:160}})(),h=S(new Fi(1.05,0.065,28,120)),b=S(new Fi(1.24,0.011,8,160)),T=S(new Ni(1,72)),E=S(new an(0.035,0.16,0.035)),w=S(new Ui(0.06,20,20)),R=S(new an(0.5,0.08,0.5)),m=Wn.map((Z,ot)=>{let Dt=new en;Dt.position.set(Z.x,0,0),Dt.rotation.y=Math.PI/2+0.3;let nt=S(new dn({color:jt.copper,metalness:1,roughness:0.26,emissive:new Ot(jt.copper),emissiveIntensity:0.04})),Ut=new ne(h,nt);Dt.add(Ut);let St=S(new rn({color:jt.amber,transparent:!0,opacity:0.35,blending:Ye,depthWrite:!1})),Mt=new ne(b,St);Dt.add(Mt);let et=S(new rn({color:jt.amber,transparent:!0,opacity:0.05,side:We,blending:Ye,depthWrite:!1})),M=new ne(T,et);Dt.add(M);let _=S(new dn({color:jt.ivory,metalness:0.6,roughness:0.35})),D=new Li(E,_,24),it=new ie,j=new sn,ct=new F,dt=new F(1,1,1);for(let J=0;J<24;J++){let V=J/24*Math.PI*2,rt=J%6===0;ct.set(Math.cos(V)*1.13,Math.sin(V)*1.13,0),j.setFromEuler(new qe(0,0,V-Math.PI/2)),dt.set(1,rt?1.6:0.8,1),D.setMatrixAt(J,it.compose(ct,j,dt))}Dt.add(D);let W=S(new rn({color:jt.idle})),K=new ne(w,W);K.position.set(0,1.36,0),Dt.add(K);let ut=S(new dn({color:2760987,metalness:0.8,roughness:0.5})),I=new ne(R,ut);return I.position.y=-1.26,Dt.add(I),u.add(Dt),{index:ot,spec:Z,group:Dt,ring:Ut,halo:Mt,membrane:M,lamp:K,ringMaterial:nt,membraneMaterial:et,haloMaterial:St,lampMaterial:W,state:"idle",flash:0,spin:0,target:new Ot(jt.amber),current:new Ot(jt.amber)}}),x=(()=>{let Z=new en;Z.position.set(oi,0,0);let ot=S(new dn({color:jt.ivory,metalness:0.9,roughness:0.18,flatShading:!0,transparent:!0,opacity:0.92})),Dt=new ne(S(new ls(0.58,0)),ot),nt=S(new rn({color:jt.amber})),Ut=new ne(S(new cs(0.24,0)),nt),St=S(new rn({map:g,color:jt.amber,transparent:!0,opacity:0.35,blending:Ye,depthWrite:!1})),Mt=new ne(S(new Ni(1.6,48)),St);Mt.rotation.x=-Math.PI/2,Mt.position.y=-1.3;let et=S(new on({transparent:!0,depthWrite:!1,blending:Ye,side:We,uniforms:{uColor:{value:new Ot(jt.pass)},uStrength:{value:0}},vertexShader:"varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; void main(){ float a = pow(1.0 - vY, 1.6) * uStrength * 0.55; gl_FragColor = vec4(uColor, a); }"})),M=new ne(S(new Di(0.42,0.62,4.4,40,1,!0)),et);M.position.y=1;let _=new ai(jt.amber,2.2,6,1.6);return Z.add(Dt,Ut,Mt,M,_),u.add(Z),{group:Z,shell:Dt,heart:Ut,aura:Mt,beam:M,beamMaterial:et,auraMaterial:St,heartMaterial:nt,light:_,pulse:0,open:0}})(),A=(()=>{let Z=new en,ot=S(new rn({color:jt.ivory})),Dt=new ne(S(new Ui(0.13,24,24)),ot),nt=S(new Cn({map:g,color:jt.amber,size:1.7,transparent:!0,blending:Ye,depthWrite:!1})),Ut=S(new ve);Ut.setAttribute("position",new Ie(new Float32Array(3),3));let St=new kn(Ut,nt),Mt=new ai(jt.amber,3.2,3.2,1.8);Z.add(Dt,St,Mt),u.add(Z);let et=34,M=new Float32Array(et*3),_=new Float32Array(et*3),D=S(new ve);D.setAttribute("position",new Ie(M,3)),D.setAttribute("color",new Ie(_,3));let it=S(new Cn({map:g,size:0.34,vertexColors:!0,transparent:!0,blending:Ye,depthWrite:!1})),j=new kn(D,it);return u.add(j),{group:Z,body:Dt,halo:St,light:Mt,bodyMaterial:ot,haloMaterial:nt,trail:j,trailPositions:M,trailColors:_,trailGeometry:D,trailCount:et,scale:1}})(),U=(()=>{let ot=new Float32Array(270),Dt=new Float32Array(270),nt=S(new ve);nt.setAttribute("position",new Ie(ot,3));let Ut=S(new Cn({map:g,color:jt.deny,size:0.16,transparent:!0,opacity:0,blending:Ye,depthWrite:!1})),St=new kn(nt,Ut);return u.add(St),{points:St,positions:ot,velocity:Dt,count:90,geometry:nt,material:Ut,life:0}})();function P(Z){for(let ot=0;ot<U.count;ot++){U.positions[ot*3]=Z.x,U.positions[ot*3+1]=Z.y,U.positions[ot*3+2]=Z.z;let Dt=Math.random()*Math.PI*2,nt=Math.acos(wn.randFloat(-1,1)),Ut=wn.randFloat(0.8,2.6);U.velocity[ot*3]=-Math.abs(Math.sin(nt)*Math.cos(Dt))*Ut*0.9,U.velocity[ot*3+1]=Math.cos(nt)*Ut,U.velocity[ot*3+2]=Math.sin(nt)*Math.sin(Dt)*Ut}U.geometry.attributes.position.needsUpdate=!0,U.life=1}let k=document.createElement("div");k.className="b3d-labels",k.setAttribute("aria-hidden","true");let Q=[...Wn.map((Z,ot)=>`0${ot+1} ${Z.label}`),"RESOURCE"].map((Z)=>{let ot=document.createElement("span");return ot.className="b3d-label",ot.innerHTML=`<i></i>${Z}`,k.append(ot),ot});t.append(k);let C=[...Wn.map((Z)=>new F(Z.x,1.62,0)),new F(oi,1.05,0)],Y=eh(e),z={x:_s,phase:"travel",stopIndex:-1,hold:0,passed:new Set};function B(){z.x=_s,z.phase="travel",z.passed.clear(),z.hold=0,z.stopIndex=Y.states.findIndex((Z)=>Z==="deny"),A.scale=1,m.forEach((Z)=>{Z.state="idle",Z.target.set(jt.amber)}),x.open=0;for(let Z=0;Z<A.trailCount;Z++)A.trailPositions[Z*3]=_s,A.trailPositions[Z*3+1]=0,A.trailPositions[Z*3+2]=0;X()}function lt(Z,ot){if(Z.state=ot,ot==="pass")Z.target.set(jt.pass),Z.flash=1,Z.spin=1;if(ot==="deny")Z.target.set(jt.deny),Z.flash=1.4;if(ot==="skipped")Z.target.set(jt.idle);X()}function X(){m.forEach((Z,ot)=>{Q[ot].dataset.state=Z.state}),Q[3].dataset.state=x.open>0.5?"pass":z.stopIndex>=0&&z.phase!=="travel"?"deny":"idle"}function tt(){if(B(),Y.states.forEach((Z,ot)=>lt(m[ot],Z==="skipped"?"skipped":Z)),m.forEach((Z)=>{Z.current.copy(Z.target),Z.flash=0,Z.spin=0}),z.stopIndex>=0)z.x=Wn[z.stopIndex].x-0.32,z.phase="denied";else z.x=oi-0.85,z.phase="granted",x.open=1;for(let Z=0;Z<A.trailCount;Z++)A.trailPositions[Z*3]=z.x;X()}function at(){let Z=eh(e);if(Z.signature===Y.signature)return;if(Y=Z,t.dataset.decision=Y.allowed?"allow":"deny",n)tt();else B();me()}let vt={x:0,y:0,tx:0,ty:0},q={value:0,target:0,dragging:!1,startX:0,startYaw:0,idle:0},st=(Z)=>{let ot=t.getBoundingClientRect();if(vt.tx=((Z.clientX-ot.left)/ot.width-0.5)*2,vt.ty=((Z.clientY-ot.top)/ot.height-0.5)*2,q.dragging)q.target=wn.clamp(q.startYaw+(Z.clientX-q.startX)/ot.width*1.6,-0.6,0.6);me()},bt=(Z)=>{if(Z.button!==0)return;q.dragging=!0,q.startX=Z.clientX,q.startYaw=q.target,t.setPointerCapture?.(Z.pointerId),t.classList.add("is-dragging")},It=(Z)=>{q.dragging=!1,q.idle=0,t.releasePointerCapture?.(Z.pointerId),t.classList.remove("is-dragging")},Lt=()=>{vt.tx=0,vt.ty=0};t.addEventListener("pointermove",st),t.addEventListener("pointerdown",bt),t.addEventListener("pointerup",It),t.addEventListener("pointercancel",It),t.addEventListener("pointerleave",Lt);let Et=()=>{let{width:Z,height:ot}=t.getBoundingClientRect();if(!Z||!ot)return;i.setSize(Z,ot,!1),o.aspect=Z/ot;let Dt=wn.clamp(1.55/o.aspect,1,1.9);l.set(-3.4*Dt,2.5*Dt,7.6*Dt),o.updateProjectionMatrix(),me()},Qt=new ResizeObserver(Et);Qt.observe(t);let Ht=new F,zt=performance.now(),te=0;function qt(Z){if(te+=Z,vt.x+=(vt.tx-vt.x)*Math.min(1,Z*3),vt.y+=(vt.ty-vt.y)*Math.min(1,Z*3),!q.dragging){if(q.idle+=Z,q.idle>2.5)q.target+=(0-q.target)*Math.min(1,Z*0.8)}if(q.value+=(q.target-q.value)*Math.min(1,Z*6),u.rotation.y=q.value,o.position.set(l.x+vt.x*0.55,l.y-vt.y*0.3,l.z),o.lookAt(c),!n)if(z.phase==="travel"){let et=Wn.findIndex((_,D)=>!z.passed.has(D)),M=z.stopIndex>=0?Wn[z.stopIndex].x-0.32:oi-0.85;if(z.x=Math.min(z.x+Wm*Z,M),et>=0&&et!==z.stopIndex&&z.x>=Wn[et].x)z.passed.add(et),lt(m[et],"pass");if(z.x>=M){if(z.stopIndex>=0)z.phase="denied",lt(m[z.stopIndex],"deny"),m.forEach((_,D)=>{if(D>z.stopIndex)lt(_,"skipped")}),P(new F(z.x+0.2,0,0));else z.phase="granted",x.pulse=1;z.hold=0,X()}}else{if(z.hold+=Z,z.phase==="denied")z.x-=Z*0.35*Math.max(0,1-z.hold),A.scale=Math.max(0,1-z.hold*1.4);else z.x=Math.min(z.x+Z*1.2,oi),A.scale=Math.max(0,1-z.hold*1.8),x.open=Math.min(1,x.open+Z*2),X();if(z.hold>(z.phase==="granted"?2.6:2.2))B()}let ot=n?0:Math.sin(te*6)*0.025;A.group.position.set(z.x,ot,0),A.group.scale.setScalar(Math.max(0.0001,A.scale)),A.light.intensity=3.2*A.scale;let Dt=z.phase==="denied"?jt.deny:z.phase==="granted"?jt.pass:jt.amber;if(A.haloMaterial.color.lerp(new Ot(Dt),Math.min(1,Z*6)),A.light.color.copy(A.haloMaterial.color),!n){for(let et=A.trailCount-1;et>0;et--)A.trailPositions[et*3]=A.trailPositions[(et-1)*3],A.trailPositions[et*3+1]=A.trailPositions[(et-1)*3+1],A.trailPositions[et*3+2]=A.trailPositions[(et-1)*3+2];A.trailPositions[0]=z.x,A.trailPositions[1]=ot,A.trailPositions[2]=0}let nt=A.haloMaterial.color;for(let et=0;et<A.trailCount;et++){let M=Math.pow(1-et/A.trailCount,1.6)*0.7*A.scale;A.trailColors[et*3]=nt.r*M,A.trailColors[et*3+1]=nt.g*M,A.trailColors[et*3+2]=nt.b*M}if(A.trailGeometry.attributes.position.needsUpdate=!0,A.trailGeometry.attributes.color.needsUpdate=!0,m.forEach((et)=>{et.current.lerp(et.target,Math.min(1,Z*(n?60:5))),et.flash=Math.max(0,et.flash-Z*1.6),et.spin=Math.max(0,et.spin-Z*0.9);let M=et.state==="idle"?0.05:et.state==="skipped"?0.02:et.state==="deny"?0.2:0.09;if(et.membraneMaterial.color.copy(et.current),et.membraneMaterial.opacity=M+et.flash*0.35,et.haloMaterial.color.copy(et.current),et.haloMaterial.opacity=(et.state==="skipped"?0.12:0.35)+et.flash*0.4,et.lampMaterial.color.copy(et.state==="idle"?new Ot(jt.idle):et.current),et.ringMaterial.emissive.copy(et.current),et.ringMaterial.emissiveIntensity=0.04+et.flash*0.5+(et.state==="deny"?0.18:0),!n)if(et.halo.rotation.z+=Z*(0.15+et.spin*3.5)*(et.index%2?-1:1),et.ring.rotation.z+=Z*et.spin*2.2,et.state==="deny")et.group.position.y=Math.sin(te*40)*0.012*et.flash;else et.group.position.y=0}),x.pulse=Math.max(0,x.pulse-Z*1.2),!n)x.shell.rotation.y+=Z*0.35,x.shell.rotation.x+=Z*0.12,x.heart.rotation.y-=Z*0.9;let Ut=1+x.pulse*0.18+(n?0:Math.sin(te*2)*0.015);if(x.shell.scale.setScalar(Ut),x.beamMaterial.uniforms.uStrength.value+=((x.open?1:0)-x.beamMaterial.uniforms.uStrength.value)*Math.min(1,Z*3),x.heartMaterial.color.lerpColors(new Ot(jt.amber),new Ot(jt.pass),x.open),x.auraMaterial.color.copy(x.heartMaterial.color),x.auraMaterial.opacity=0.3+x.open*0.25+x.pulse*0.3,x.light.color.copy(x.heartMaterial.color),x.light.intensity=2+x.open*2.2+x.pulse*4,U.life>0){U.life=Math.max(0,U.life-Z*0.9);for(let et=0;et<U.count;et++)U.velocity[et*3+1]-=Z*2.2,U.positions[et*3]+=U.velocity[et*3]*Z,U.positions[et*3+1]+=U.velocity[et*3+1]*Z,U.positions[et*3+2]+=U.velocity[et*3+2]*Z;U.geometry.attributes.position.needsUpdate=!0}if(U.material.opacity=U.life,!n){for(let et=0;et<p.count;et++)if(p.positions[et*3+1]+=Math.sin(te*0.4+p.seeds[et])*Z*0.06,p.positions[et*3]+=Z*0.04,p.positions[et*3]>6)p.positions[et*3]=-6;p.points.geometry.attributes.position.needsUpdate=!0}let{width:St,height:Mt}=t.getBoundingClientRect();u.updateMatrixWorld(),C.forEach((et,M)=>{Ht.copy(et).applyMatrix4(u.matrixWorld).project(o);let _=(Ht.x*0.5+0.5)*St,D=(-Ht.y*0.5+0.5)*Mt;Q[M].style.transform=`translate(${_.toFixed(1)}px, ${D.toFixed(1)}px) translate(-50%, -100%)`})}let le=!1,ce=0,Me=!1;function Pe(Z){ce=0;let ot=Math.min(0.05,(Z-zt)/1000);if(zt=Z,qt(ot),i.render(s,o),!n&&le&&!document.hidden)ce=requestAnimationFrame(Pe)}function de(){if(ce)return;zt=performance.now(),ce=requestAnimationFrame(Pe)}function me(){if(!n)return;if(Me)return;Me=!0,requestAnimationFrame((Z)=>{Me=!1,zt=Z-16;for(let ot=0;ot<30;ot++)qt(0.03333333333333333);i.render(s,o)})}let we=new IntersectionObserver(([Z])=>{if(le=Z.isIntersecting,le&&!n)de()},{rootMargin:"120px"});we.observe(t);let Ae=()=>{if(!document.hidden&&le&&!n)de()};document.addEventListener("visibilitychange",Ae);let Ge=new MutationObserver(at);if(Ge.observe(e,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["class"]}),t.dataset.decision=Y.allowed?"allow":"deny",n)tt();else B();Et(),me();function N(){cancelAnimationFrame(ce),we.disconnect(),Ge.disconnect(),Qt.disconnect(),document.removeEventListener("visibilitychange",Ae),t.removeEventListener("pointermove",st),t.removeEventListener("pointerdown",bt),t.removeEventListener("pointerup",It),t.removeEventListener("pointercancel",It),t.removeEventListener("pointerleave",Lt),y.forEach((Z)=>Z.dispose?.()),i.dispose(),i.domElement.remove(),k.remove()}return{renderer:i,dispose:N}}function Ym(){let t=document.querySelector("[data-policy-demo]"),e=document.querySelector(".boundary-intro");if(!t||!e||document.querySelector(".b3d-chamber"))return;let n=document.createElement("figure");n.className="b3d-chamber",n.innerHTML='<figcaption class="b3d-caption"><span><b></b>REQUEST TRACE · 3D</span><span class="b3d-hint">DRAG TO TURN</span></figcaption>'+'<p class="visually-hidden">A three-dimensional illustration of the request above travelling through the sign-in, workspace and permission checks. It mirrors the decision trace in the explorer.</p><p class="b3d-fallback" hidden>3D view paused. The decision trace on the right is unaffected.</p>',e.append(n);let i,s=()=>{try{i=qm(n,t),n.dataset.ready="true"}catch(a){n.remove();return}let r=i.renderer.domElement;r.addEventListener("webglcontextlost",(a)=>{a.preventDefault(),n.dataset.ready="lost",n.querySelector(".b3d-fallback").hidden=!1}),r.addEventListener("webglcontextrestored",()=>{i.dispose(),n.querySelector(".b3d-fallback").hidden=!0,s()})};if(t.dataset.ready==="true")s();else{let r=new MutationObserver(()=>{if(t.dataset.ready==="true")r.disconnect(),s()});r.observe(t,{attributes:!0,attributeFilter:["data-ready"]}),setTimeout(()=>{if(!n.dataset.ready)r.disconnect(),s()},3000)}}Ym();})();
