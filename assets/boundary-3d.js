(()=>{var al="187";var ol=0,Xr=1,ll=2;var Ki=1,cl=2,Ti=3,wi=0,Ue=1,He=2,Qn=0,Qi=1,Ye=2,qr=3,Yr=4,hl=5;var Ai=100,ul=101,dl=102,fl=103,pl=104,ml=200,gl=201,_l=202,xl=203,vl=204,yl=205,Sl=206,Ml=207,bl=208,El=209,Tl=210,wl=211,Al=212,Rl=213,Cl=214,Il=0,Pl=1,Ll=2,Zr=3,Nl=4,Dl=5,Ul=6,Fl=7,Ol=0,Bl=1,zl=2,hn=0,Jr=1,$r=2,Kr=3,ji=4,Qr=5,jr=6,ta=7;var ts=301,Ri=302,Vs=303,Xs=304,Gl=1000,qs=1001,kl=1002,Fn=1003,Hl=1004;var es=1005;var Ze=1006,Ys=1007;var On=1008;var nn=1009,Wl=1010,Vl=1011,ns=1012,ea=1013,Bn=1014,bn=1015,un=1016,na=1017,ia=1018,jn=1020,Xl=35902,ql=35899,Yl=1021,Zl=1022,En=1023,Ci=1026,zn=1027,Jl=1028,sa=1029,ti=1030,ra=1031;var aa=1033,Zs=33776,Js=33777,$s=33778,Ks=33779,oa=35840,la=35841,ca=35842,ha=35843,ua=36196,da=37492,fa=37496,pa=37488,ma=37489,Qs=37490,ga=37491,_a=37808,xa=37809,va=37810,ya=37811,Sa=37812,Ma=37813,ba=37814,Ea=37815,Ta=37816,wa=37817,Aa=37818,Ra=37819,Ca=37820,Ia=37821,Pa=36492,La=36494,Na=36495,Da=36283,Ua=36284,js=36285,Fa=36286;var Oa=0,$l=1,ei="",is="srgb",Ba="srgb-linear",za="linear",oe="srgb";var Kl=512,Ql=513,jl=514,Ga=515,tc=516,ec=517,ka=518,Ha=519;var Wa="300 es",Va=2000;function oh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function $i(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nc(){let t=$i("canvas");return t.style.display="block",t}var Lo={},bi=null;function Xa(...t){let e="THREE."+t.shift();if(bi)bi("log",e,...t);else console.log(e,...t)}function ic(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Nt(...t){t=ic(t);let e="THREE."+t.shift();if(bi)bi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Ut(...t){t=ic(t);let e="THREE."+t.shift();if(bi)bi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Yi(...t){let e=t.join(" ");if(e in Lo)return;Lo[e]=!0,Nt(...t)}function sc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var rc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Tn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=1234567,Zi=Math.PI/180,Ei=180/Math.PI;function Ii(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[t&255]+Ne[t>>8&255]+Ne[t>>16&255]+Ne[t>>24&255]+"-"+Ne[e&255]+Ne[e>>8&255]+"-"+Ne[e>>16&15|64]+Ne[e>>24&255]+"-"+Ne[n&63|128]+Ne[n>>8&255]+"-"+Ne[n>>16&255]+Ne[n>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function qa(t,e){return(t%e+e)%e}function ch(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function hh(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function Ji(t,e,n){return(1-n)*t+n*e}function uh(t,e,n,i){return Ji(t,e,1-Math.exp(-n*i))}function dh(t,e=1){return e-Math.abs(qa(t,e*2)-e)}function fh(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function ph(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function mh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gh(t,e){return t+Math.random()*(e-t)}function _h(t){return t*(0.5-Math.random())}function xh(t){if(t!==void 0)No=t;let e=No+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vh(t){return t*Zi}function yh(t){return t*Ei}function Sh(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Mh(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ya(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function bh(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),d=a((e+i)/2),p=r((e-i)/2),f=a((e-i)/2),_=r((i-e)/2),y=a((i-e)/2);switch(s){case"XYX":t.set(o*d,l*p,l*f,o*c);break;case"YZY":t.set(l*f,o*d,l*p,o*c);break;case"ZXZ":t.set(l*p,l*f,o*d,o*c);break;case"XZX":t.set(o*d,l*y,l*_,o*c);break;case"YXY":t.set(l*_,o*d,l*y,o*c);break;case"ZYZ":t.set(l*y,l*_,o*d,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Za(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ac(t,e){if(e.constructor===Float32Array)return t;let n=Za(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function oc(t,e){if(e.constructor===Float32Array)return t;let n=Za(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var wn={DEG2RAD:Zi,RAD2DEG:Ei,generateUUID:Ii,clamp:Zt,euclideanModulo:qa,mapLinear:ch,inverseLerp:hh,lerp:Ji,damp:uh,pingpong:dh,smoothstep:fh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:_h,seededRandom:xh,degToRad:vh,radToDeg:yh,isPowerOfTwo:Sh,ceilPowerOfTwo:Mh,floorPowerOfTwo:Ya,setQuaternionFromProperEuler:bh,normalize:oc,denormalize:ac};class kt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3],p=s[r+0],f=s[r+1],_=s[r+2],y=s[r+3];if(d!==y||o!==p||l!==f||c!==_){let S=o*p+l*f+c*_+d*y;if(S<0)p=-p,f=-f,_=-_,y=-y,S=-S;let m=1-a;if(S<0.9995){let u=Math.acos(S),M=Math.sin(u);m=Math.sin(m*u)/M,a=Math.sin(a*u)/M,o=o*m+p*a,l=l*m+f*a,c=c*m+_*a,d=d*m+y*a}else{o=o*m+p*a,l=l*m+f*a,c=c*m+_*a,d=d*m+y*a;let u=1/Math.sqrt(o*o+l*l+c*c+d*d);o*=u,l*=u,c*=u,d*=u}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],d=s[r],p=s[r+1],f=s[r+2],_=s[r+3];return t[e]=a*_+c*d+o*f-l*p,t[e+1]=o*_+c*p+l*d-a*f,t[e+2]=l*_+c*f+a*p-o*d,t[e+3]=c*_-a*d-o*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),d=a(s/2),p=o(n/2),f=o(i/2),_=o(s/2);switch(r){case"XYZ":this._x=p*c*d+l*f*_,this._y=l*f*d-p*c*_,this._z=l*c*_+p*f*d,this._w=l*c*d-p*f*_;break;case"YXZ":this._x=p*c*d+l*f*_,this._y=l*f*d-p*c*_,this._z=l*c*_-p*f*d,this._w=l*c*d+p*f*_;break;case"ZXY":this._x=p*c*d-l*f*_,this._y=l*f*d+p*c*_,this._z=l*c*_+p*f*d,this._w=l*c*d-p*f*_;break;case"ZYX":this._x=p*c*d-l*f*_,this._y=l*f*d+p*c*_,this._z=l*c*_-p*f*d,this._w=l*c*d+p*f*_;break;case"YZX":this._x=p*c*d+l*f*_,this._y=l*f*d+p*c*_,this._z=l*c*_-p*f*d,this._w=l*c*d-p*f*_;break;case"XZY":this._x=p*c*d-l*f*_,this._y=l*f*d-p*c*_,this._z=l*c*_+p*f*d,this._w=l*c*d+p*f*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10],p=n+a+d;if(p>0){let f=0.5/Math.sqrt(p+1);this._w=0.25/f,this._x=(c-o)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(c-o)/f,this._x=0.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+r)/f,this._y=0.25*f,this._z=(o+c)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(o+c)/f,this._z=0.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Do.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),d=2*(s*n-r*e);return this.x=e+o*l+r*d-a*c,this.y=n+o*c+a*l-s*d,this.z=i+o*d+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Er.copy(this).projectOnVector(t),this.sub(Er)}reflect(t){return this.sub(Er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Er=new F,Do=new sn;class Ot{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],d=n[7],p=n[2],f=n[5],_=n[8],y=i[0],S=i[3],m=i[6],u=i[1],M=i[4],T=i[7],b=i[2],w=i[5],R=i[8];return s[0]=r*y+a*u+o*b,s[3]=r*S+a*M+o*w,s[6]=r*m+a*T+o*R,s[1]=l*y+c*u+d*b,s[4]=l*S+c*M+d*w,s[7]=l*m+c*T+d*R,s[2]=p*y+f*u+_*b,s[5]=p*S+f*M+_*w,s[8]=p*m+f*T+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=c*r-a*l,p=a*o-c*s,f=l*s-r*o,_=e*d+n*p+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(i*l-c*n)*y,t[2]=(a*n-i*r)*y,t[3]=p*y,t[4]=(c*e-i*o)*y,t[5]=(i*s-a*e)*y,t[6]=f*y,t[7]=(n*o-l*e)*y,t[8]=(r*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Tr=new Ot,Uo=new Ot().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Fo=new Ot().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Eh(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Uo,fromXYZ:Fo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Uo,fromXYZ:Fo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Yt=Eh();function Mn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Mi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var li;class Ja{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(li===void 0)li=$i("canvas");li.width=t.width,li.height=t.height;let i=li.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$i("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Mn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Mn(e[n]/255)*255);else e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Th=0;class ss{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width||0,e.height||0,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(wr(i[r].image));else s.push(wr(i[r]))}else s=wr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function wr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Ja.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Nt("Texture: Unable to serialize Texture."),{}}var wh=0,Ar=new F;class Ce extends Tn{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ce.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ii(),this.name="",this.source=new ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ar).x}get height(){return this.source.getSize(Ar).y}get depth(){return this.source.getSize(Ar).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=300;Ce.DEFAULT_ANISOTROPY=1;class fe{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],d=o[8],p=o[1],f=o[5],_=o[9],y=o[2],S=o[6],m=o[10];if(Math.abs(c-p)<0.01&&Math.abs(d-y)<0.01&&Math.abs(_-S)<0.01){if(Math.abs(c+p)<0.1&&Math.abs(d+y)<0.1&&Math.abs(_+S)<0.1&&Math.abs(l+f+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,T=(f+1)/2,b=(m+1)/2,w=(c+p)/4,R=(d+y)/4,g=(_+S)/4;if(M>T&&M>b)if(M<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(M),i=w/n,s=R/n;else if(T>b)if(T<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(T),n=w/i,s=g/i;else if(b<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(b),n=R/s,i=g/s;return this.set(n,i,s,e),this}let u=Math.sqrt((S-_)*(S-_)+(d-y)*(d-y)+(p-c)*(p-c));if(Math.abs(u)<0.001)u=1;return this.x=(S-_)/u,this.y=(d-y)/u,this.z=(p-c)/u,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $a extends Tn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ce({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)e.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ss(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Je extends $a{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class tr extends Ce{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ka extends Ce{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ne{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,d,p,f,_,y,S){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,d,p,f,_,y,S)}set(t,e,n,i,s,r,a,o,l,c,d,p,f,_,y,S){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=d,m[14]=p,m[3]=f,m[7]=_,m[11]=y,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),s=1/ci.setFromMatrixColumn(t,1).length(),r=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let p=r*c,f=r*d,_=a*c,y=a*d;e[0]=o*c,e[4]=-o*d,e[8]=l,e[1]=f+_*l,e[5]=p-y*l,e[9]=-a*o,e[2]=y-p*l,e[6]=_+f*l,e[10]=r*o}else if(t.order==="YXZ"){let p=o*c,f=o*d,_=l*c,y=l*d;e[0]=p+y*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*c,e[9]=-a,e[2]=f*a-_,e[6]=y+p*a,e[10]=r*o}else if(t.order==="ZXY"){let p=o*c,f=o*d,_=l*c,y=l*d;e[0]=p-y*a,e[4]=-r*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*c,e[9]=y-p*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let p=r*c,f=r*d,_=a*c,y=a*d;e[0]=o*c,e[4]=_*l-f,e[8]=p*l+y,e[1]=o*d,e[5]=y*l+p,e[9]=f*l-_,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let p=r*o,f=r*l,_=a*o,y=a*l;e[0]=o*c,e[4]=y-p*d,e[8]=_*d+f,e[1]=d,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=f*d+_,e[10]=p-y*d}else if(t.order==="XZY"){let p=r*o,f=r*l,_=a*o,y=a*l;e[0]=o*c,e[4]=-d,e[8]=l*c,e[1]=p*d+y,e[5]=r*c,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*c,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ah,t,Rh)}lookAt(t,e,n){let i=this.elements;if(Ge.subVectors(t,e),Ge.lengthSq()===0)Ge.z=1;if(Ge.normalize(),Pn.crossVectors(n,Ge),Pn.lengthSq()===0){if(Math.abs(n.z)===1)Ge.x+=0.0001;else Ge.z+=0.0001;Ge.normalize(),Pn.crossVectors(n,Ge)}return Pn.normalize(),ys.crossVectors(Ge,Pn),i[0]=Pn.x,i[4]=ys.x,i[8]=Ge.x,i[1]=Pn.y,i[5]=ys.y,i[9]=Ge.y,i[2]=Pn.z,i[6]=ys.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],d=n[5],p=n[9],f=n[13],_=n[2],y=n[6],S=n[10],m=n[14],u=n[3],M=n[7],T=n[11],b=n[15],w=i[0],R=i[4],g=i[8],x=i[12],A=i[1],U=i[5],P=i[9],k=i[13],tt=i[2],C=i[6],J=i[10],z=i[14],B=i[3],lt=i[7],q=i[11],et=i[15];return s[0]=r*w+a*A+o*tt+l*B,s[4]=r*R+a*U+o*C+l*lt,s[8]=r*g+a*P+o*J+l*q,s[12]=r*x+a*k+o*z+l*et,s[1]=c*w+d*A+p*tt+f*B,s[5]=c*R+d*U+p*C+f*lt,s[9]=c*g+d*P+p*J+f*q,s[13]=c*x+d*k+p*z+f*et,s[2]=_*w+y*A+S*tt+m*B,s[6]=_*R+y*U+S*C+m*lt,s[10]=_*g+y*P+S*J+m*q,s[14]=_*x+y*k+S*z+m*et,s[3]=u*w+M*A+T*tt+b*B,s[7]=u*R+M*U+T*C+b*lt,s[11]=u*g+M*P+T*J+b*q,s[15]=u*x+M*k+T*z+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],d=t[6],p=t[10],f=t[14],_=t[3],y=t[7],S=t[11],m=t[15],u=o*f-l*p,M=a*f-l*d,T=a*p-o*d,b=r*f-l*c,w=r*p-o*c,R=r*d-a*c;return e*(y*u-S*M+m*T)-n*(_*u-S*b+m*w)+i*(_*M-y*b+m*R)-s*(_*T-y*w+S*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=t[9],p=t[10],f=t[11],_=t[12],y=t[13],S=t[14],m=t[15],u=e*a-n*r,M=e*o-i*r,T=e*l-s*r,b=n*o-i*a,w=n*l-s*a,R=i*l-s*o,g=c*y-d*_,x=c*S-p*_,A=c*m-f*_,U=d*S-p*y,P=d*m-f*y,k=p*m-f*S,tt=u*k-M*P+T*U+b*A-w*x+R*g;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/tt;return t[0]=(a*k-o*P+l*U)*C,t[1]=(i*P-n*k-s*U)*C,t[2]=(y*R-S*w+m*b)*C,t[3]=(p*w-d*R-f*b)*C,t[4]=(o*A-r*k-l*x)*C,t[5]=(e*k-i*A+s*x)*C,t[6]=(S*T-_*R-m*M)*C,t[7]=(c*R-p*T+f*M)*C,t[8]=(r*P-a*A+l*g)*C,t[9]=(n*A-e*P-s*g)*C,t[10]=(_*w-y*T+m*u)*C,t[11]=(d*T-c*w-f*u)*C,t[12]=(a*x-r*U-o*g)*C,t[13]=(e*U-n*x+i*g)*C,t[14]=(y*M-_*b-S*u)*C,t[15]=(c*b-d*M+p*u)*C,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,d=a+a,p=s*l,f=s*c,_=s*d,y=r*c,S=r*d,m=a*d,u=o*l,M=o*c,T=o*d,{x:b,y:w,z:R}=n;return i[0]=(1-(y+m))*b,i[1]=(f+T)*b,i[2]=(_-M)*b,i[3]=0,i[4]=(f-T)*w,i[5]=(1-(p+m))*w,i[6]=(S+u)*w,i[7]=0,i[8]=(_+M)*R,i[9]=(S-u)*R,i[10]=(1-(p+y))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=ci.set(i[0],i[1],i[2]).length(),a=ci.set(i[4],i[5],i[6]).length(),o=ci.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Qe.copy(this);let l=1/r,c=1/a,d=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=c,Qe.elements[5]*=c,Qe.elements[6]*=c,Qe.elements[8]*=d,Qe.elements[9]*=d,Qe.elements[10]*=d,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),d=2*s/(n-i),p=(e+t)/(e-t),f=(n+i)/(n-i),_,y;if(o)_=s/(r-s),y=r*s/(r-s);else if(a===2000)_=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(a===2001)_=-r/(r-s),y=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),d=2/(n-i),p=-(e+t)/(e-t),f=-(n+i)/(n-i),_,y;if(o)_=1/(r-s),y=r/(r-s);else if(a===2000)_=-2/(r-s),y=-(r+s)/(r-s);else if(a===2001)_=-1/(r-s),y=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ci=new F,Qe=new ne,Ah=new F(0,0,0),Rh=new F(1,1,1),Pn=new F,ys=new F,Ge=new F,Oo=new ne,Bo=new sn;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],d=i[2],p=i[6],f=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s);else this._x=Math.atan2(p,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,f),this._z=Math.atan2(o,l);else this._y=Math.atan2(-d,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<0.9999999)this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<0.9999999)this._x=Math.atan2(p,f),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Zt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s);else this._x=0,this._y=Math.atan2(a,f);break;case"XZY":if(this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(p,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,f),this._y=0;break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class er{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Ch=0,zo=new F,hi=new sn,_n=new ne,Ss=new F,ki=new F,Ih=new F,Ph=new sn,Go=new F(1,0,0),ko=new F(0,1,0),Ho=new F(0,0,1),Wo={type:"added"},Lh={type:"removed"},ui={type:"childadded",child:null},Rr={type:"childremoved",child:null};class xe extends Tn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();let t=new F,e=new qe,n=new sn,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ot}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Go,t)}rotateY(t){return this.rotateOnAxis(ko,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Go,t)}translateY(t){return this.translateOnAxis(ko,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Ss.copy(t);else Ss.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)_n.lookAt(ki,Ss,this.up);else _n.lookAt(Ss,ki,this.up);if(this.quaternion.setFromRotationMatrix(_n),i)_n.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(_n),this.quaternion.premultiply(hi.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Ut("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),ui.child=t,this.dispatchEvent(ui),ui.child=null;else Ut("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld);return t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let d=o[l];s(t.shapes,d)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),d=r(t.shapes),p=r(t.skeletons),f=r(t.animations),_=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(d.length>0)n.shapes=d;if(p.length>0)n.skeletons=p;if(f.length>0)n.animations=f;if(_.length>0)n.nodes=_}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xe.DEFAULT_UP=new F(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class en extends xe{constructor(){super();this.isGroup=!0,this.type="Group"}}var Nh={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let S=e.getJointPose(y,n),m=this._getHandJoint(l,y);if(S!==null)m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=S.radius;m.visible=S!==null}let c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=c.position.distanceTo(d.position),f=0.02,_=0.005;if(l.inputState.pinching&&p>f+_)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&p<=f-_)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Nh)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Cr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=qa(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Cr(r,s,t+0.3333333333333333),this.g=Cr(r,s,t),this.b=Cr(r,s,t-0.3333333333333333)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Nt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=lc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Nt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Yt.workingToColorSpace(De.copy(this),t),Math.round(Zt(De.r*255,0,255))*65536+Math.round(Zt(De.g*255,0,255))*256+Math.round(Zt(De.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(De.copy(this),e);let{r:n,g:i,b:s}=De,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let d=r-a;switch(l=c<=0.5?d/(r+a):d/(2-r-a),r){case n:o=(i-s)/d+(i<s?6:0);break;case i:o=(s-n)/d+2;break;case s:o=(n-i)/d+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t="srgb"){Yt.workingToColorSpace(De.copy(this),t);let{r:e,g:n,b:i}=De;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Ms);let n=Ji(Ln.h,Ms.h,e),i=Ji(Ln.s,Ms.s,e),s=Ji(Ln.l,Ms.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var De=new Dt;Dt.NAMES=lc;class as{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new as(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pi extends xe{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var je=new F,xn=new F,Ir=new F,vn=new F,di=new F,fi=new F,Vo=new F,Pr=new F,Lr=new F,Nr=new F,Dr=new fe,Ur=new fe,Fr=new fe;class Xe{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){je.subVectors(i,e),xn.subVectors(n,e),Ir.subVectors(t,e);let r=je.dot(je),a=je.dot(xn),o=je.dot(Ir),l=xn.dot(xn),c=xn.dot(Ir),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;let p=1/d,f=(l*o-a*c)*p,_=(r*c-a*o)*p;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,vn)===null)return!1;return vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,vn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,vn.x),o.addScaledVector(r,vn.y),o.addScaledVector(a,vn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Dr.setScalar(0),Ur.setScalar(0),Fr.setScalar(0),Dr.fromBufferAttribute(t,e),Ur.fromBufferAttribute(t,n),Fr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Dr,s.x),r.addScaledVector(Ur,s.y),r.addScaledVector(Fr,s.z),r}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),xn.subVectors(t,e),je.cross(xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),je.cross(xn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;di.subVectors(i,n),fi.subVectors(s,n),Pr.subVectors(t,n);let o=di.dot(Pr),l=fi.dot(Pr);if(o<=0&&l<=0)return e.copy(n);Lr.subVectors(t,i);let c=di.dot(Lr),d=fi.dot(Lr);if(c>=0&&d<=c)return e.copy(i);let p=o*d-c*l;if(p<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(n).addScaledVector(di,r);Nr.subVectors(t,s);let f=di.dot(Nr),_=fi.dot(Nr);if(_>=0&&f<=_)return e.copy(s);let y=f*l-o*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(fi,a);let S=c*_-f*d;if(S<=0&&d-c>=0&&f-_>=0)return Vo.subVectors(s,i),a=(d-c)/(d-c+(f-_)),e.copy(i).addScaledVector(Vo,a);let m=1/(S+y+p);return r=y*m,a=p*m,e.copy(n).addScaledVector(di,r).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class An{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=tn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,tn);else tn.fromBufferAttribute(s,r);tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();bs.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();bs.copy(n.boundingBox)}bs.applyMatrix4(t.matrixWorld),this.union(bs)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),Es.subVectors(this.max,Hi),pi.subVectors(t.a,Hi),mi.subVectors(t.b,Hi),gi.subVectors(t.c,Hi),Nn.subVectors(mi,pi),Dn.subVectors(gi,mi),Yn.subVectors(pi,gi);let e=[0,-Nn.z,Nn.y,0,-Dn.z,Dn.y,0,-Yn.z,Yn.y,Nn.z,0,-Nn.x,Dn.z,0,-Dn.x,Yn.z,0,-Yn.x,-Nn.y,Nn.x,0,-Dn.y,Dn.x,0,-Yn.y,Yn.x,0];if(!Or(e,pi,mi,gi,Es))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Or(e,pi,mi,gi,Es))return!1;return Ts.crossVectors(Nn,Dn),e=[Ts.x,Ts.y,Ts.z],Or(e,pi,mi,gi,Es)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(tn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var yn=[new F,new F,new F,new F,new F,new F,new F,new F],tn=new F,bs=new An,pi=new F,mi=new F,gi=new F,Nn=new F,Dn=new F,Yn=new F,Hi=new F,Es=new F,Ts=new F,Zn=new F;function Or(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Zn.fromArray(t,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=e.dot(Zn),c=n.dot(Zn),d=i.dot(Zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var _e=new F,ws=new kt,Dh=0;class Ie extends Tn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?Za(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=this._denormalize(e);return e}setX(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=this._denormalize(e);return e}setY(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=this._denormalize(e);return e}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=this._denormalize(e);return e}setW(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ac(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):oc(t,this.array)}}class nr extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ir extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Uh=new An,Wi=new F,Br=new F;class Gn{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Uh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);let e=Wi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Br)),this.expandByPoint(Wi.copy(t.center).sub(Br));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Fh=0,Ve=new ne,zr=new xe,_i=new F,ke=new An,Vi=new An,Te=new F;class ve extends Tn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((oh(t))?ir:nr)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new An;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(ke.setFromBufferAttribute(s),this.morphTargetsRelative)Te.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Te);else this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Gn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Vi.setFromBufferAttribute(a),this.morphTargetsRelative)Te.addVectors(ke.min,Vi.min),ke.expandByPoint(Te),Te.addVectors(ke.max,Vi.max),ke.expandByPoint(Te);else ke.expandByPoint(Vi.min),ke.expandByPoint(Vi.max)}ke.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Te.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Te.fromBufferAttribute(a,l),o)_i.fromBufferAttribute(t,l),Te.add(_i);i=Math.max(i,n.distanceToSquared(Te))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let x=0;x<n.count;x++)a[x]=new F,o[x]=new F;let c=new F,d=new F,p=new F,f=new kt,_=new kt,y=new kt,S=new F,m=new F;function u(x,A,U){l[x]=l[A]=l[U]=1,c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,A),p.fromBufferAttribute(n,U),f.fromBufferAttribute(s,x),_.fromBufferAttribute(s,A),y.fromBufferAttribute(s,U),d.sub(c),p.sub(c),_.sub(f),y.sub(f);let P=1/(_.x*y.y-y.x*_.y);if(!isFinite(P))return;S.copy(d).multiplyScalar(y.y).addScaledVector(p,-_.y).multiplyScalar(P),m.copy(p).multiplyScalar(_.x).addScaledVector(d,-y.x).multiplyScalar(P),a[x].add(S),a[A].add(S),a[U].add(S),o[x].add(m),o[A].add(m),o[U].add(m)}let M=this.groups;if(M.length===0)M=[{start:0,count:t.count}];for(let x=0,A=M.length;x<A;++x){let U=M[x],{start:P,count:k}=U;for(let tt=P,C=P+k;tt<C;tt+=3)u(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let T=new F,b=new F,w=new F,R=new F;function g(x){w.fromBufferAttribute(i,x),R.copy(w);let A=a[x];T.copy(A),T.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(R,A);let P=b.dot(o[x])<0?-1:1;r.setXYZW(x,T.x,T.y,T.z,P)}for(let x=0,A=n.count;x<A;++x)if(l[x])g(x);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let i=new F,s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,d=new F;if(t)for(let p=0,f=t.count;p<f;p+=3){let _=t.getX(p+0),y=t.getX(p+1),S=t.getX(p+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,S),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),a.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,S),a.add(c),o.add(c),l.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),n.setXYZ(p+0,c.x,c.y,c.z),n.setXYZ(p+1,c.x,c.y,c.z),n.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:d}=a,p=new l.constructor(o.length*c),f=0,_=0;for(let y=0,S=o.length;y<S;y++){if(a.isInterleavedBufferAttribute)f=o[y]*a.data.stride+a.offset;else f=o[y]*c;for(let m=0;m<c;m++)p[_++]=l[f++]}return new Ie(p,c,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ve,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,d=l.length;c<d;c++){let p=l[c],f=t(p,n);o.push(f)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];c.push(f.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],d=s[l];for(let p=0,f=d.length;p<f;p++)c.push(d[p].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Gr=new F,Oh=new F,Bh=new Ot;class cn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Gr.subVectors(n,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Gr),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bh.getNormalMatrix(t),i=this.coplanarPoint(Gr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var zh=0;class Rn extends Tn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Dt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new cn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new kt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var Sn=new F,kr=new F,As=new F,Rs=new F;class sr{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){kr.copy(t).add(e).multiplyScalar(0.5),As.copy(e).sub(t).normalize(),Rs.copy(this.origin).sub(kr);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(As),a=Rs.dot(this.direction),o=-Rs.dot(As),l=Rs.lengthSq(),c=Math.abs(1-r*r),d,p,f,_;if(c>0)if(d=r*o-a,p=r*a-o,_=s*c,d>=0)if(p>=-_)if(p<=_){let y=1/c;d*=y,p*=y,f=d*(d+r*p+2*a)+p*(r*d+p+2*o)+l}else p=s,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*o)+l;else p=-s,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*o)+l;else if(p<=-_)d=Math.max(0,-(-r*s+a)),p=d>0?-s:Math.min(Math.max(-s,-o),s),f=-d*d+p*(p+2*o)+l;else if(p<=_)d=0,p=Math.min(Math.max(-s,-o),s),f=p*(p+2*o)+l;else d=Math.max(0,-(r*s+a)),p=d>0?s:Math.min(Math.max(-s,-o),s),f=-d*d+p*(p+2*o)+l;else p=r>0?-s:s,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,d);if(i)i.copy(kr).addScaledVector(As,p);return f}intersectSphere(t,e){if(t.radius<0)return null;Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,p=this.origin;if(l>=0)n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l;else n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l;if(c>=0)s=(t.min.y-p.y)*c,r=(t.max.y-p.y)*c;else s=(t.max.y-p.y)*c,r=(t.min.y-p.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(d>=0)a=(t.min.z-p.z)*d,o=(t.max.z-p.z)*d;else a=(t.max.z-p.z)*d,o=(t.min.z-p.z)*d;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,d=t.x-r.x,p=t.y-r.y,f=t.z-r.z,_=e.x-r.x,y=e.y-r.y,S=e.z-r.z,m=n.x-r.x,u=n.y-r.y,M=n.z-r.z,T=Math.abs(o),b=Math.abs(l),w=Math.abs(c),R,g,x,A,U,P,k,tt,C,J,z,B;if(T>=b&&T>=w)if(x=o,P=d,C=_,B=m,o>=0)R=l,g=c,A=p,U=f,k=y,tt=S,J=u,z=M;else R=c,g=l,A=f,U=p,k=S,tt=y,J=M,z=u;else if(b>=w)if(x=l,P=p,C=y,B=u,l>=0)R=c,g=o,A=f,U=d,k=S,tt=_,J=M,z=m;else R=o,g=c,A=d,U=f,k=_,tt=S,J=m,z=M;else if(x=c,P=f,C=S,B=M,c>=0)R=o,g=l,A=d,U=p,k=_,tt=y,J=m,z=u;else R=l,g=o,A=p,U=d,k=y,tt=_,J=u,z=m;if(x===0)return null;let lt=R/x,q=g/x,et=1/x,at=A-lt*P,xt=U-q*P,Y=k-lt*C,st=tt-q*C,St=J-lt*B,Ct=z-q*B,Pt=St*st-Ct*Y,Mt=at*Ct-xt*St,$t=Y*xt-st*at;if(i){if(Pt<0||Mt<0||$t<0)return null}else if((Pt<0||Mt<0||$t<0)&&(Pt>0||Mt>0||$t>0))return null;let zt=Pt+Mt+$t;if(zt===0)return null;let Ft=et*(Pt*P+Mt*C+$t*B);if(zt>0?Ft<0:Ft>0)return null;return this.at(Ft/zt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn extends Rn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Xo=new ne,Jn=new sr,Cs=new Gn,qo=new F,Is=new F,Ps=new F,Ls=new F,Hr=new F,Ns=new F,Yo=new F,Ds=new F;class te extends xe{constructor(t=new ve,e=new rn){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],d=s[o];if(c===0)continue;if(Hr.fromBufferAttribute(d,t),r)Ns.addScaledVector(Hr,c);else Ns.addScaledVector(Hr.sub(e),c)}e.add(Ns)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Jn.copy(t.ray).recast(t.near),Cs.containsPoint(Jn.origin)===!1){if(Jn.intersectSphere(Cs,qo)===null)return;if(Jn.origin.distanceToSquared(qo)>(t.far-t.near)**2)return}if(Xo.copy(s).invert(),Jn.copy(t.ray).applyMatrix4(Xo),n.boundingBox!==null){if(Jn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Jn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,{groups:p,drawRange:f}=s;if(a!==null)if(Array.isArray(r))for(let _=0,y=p.length;_<y;_++){let S=p[_],m=r[S.materialIndex],u=Math.max(S.start,f.start),M=Math.min(a.count,Math.min(S.start+S.count,f.start+f.count));for(let T=u,b=M;T<b;T+=3){let w=a.getX(T),R=a.getX(T+1),g=a.getX(T+2);if(i=Us(this,m,t,n,l,c,d,w,R,g),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let _=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let S=_,m=y;S<m;S+=3){let u=a.getX(S),M=a.getX(S+1),T=a.getX(S+2);if(i=Us(this,r,t,n,l,c,d,u,M,T),i)i.faceIndex=Math.floor(S/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let _=0,y=p.length;_<y;_++){let S=p[_],m=r[S.materialIndex],u=Math.max(S.start,f.start),M=Math.min(o.count,Math.min(S.start+S.count,f.start+f.count));for(let T=u,b=M;T<b;T+=3){let w=T,R=T+1,g=T+2;if(i=Us(this,m,t,n,l,c,d,w,R,g),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let _=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let S=_,m=y;S<m;S+=3){let u=S,M=S+1,T=S+2;if(i=Us(this,r,t,n,l,c,d,u,M,T),i)i.faceIndex=Math.floor(S/3),e.push(i)}}}}function Gh(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Ds.copy(o),Ds.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ds);if(c<n.near||c>n.far)return null;return{distance:c,point:Ds.clone(),object:t}}function Us(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Is),t.getVertexPosition(l,Ps),t.getVertexPosition(c,Ls);let d=Gh(t,e,n,i,Is,Ps,Ls,Yo);if(d){let p=new F;if(Xe.getBarycoord(Yo,Is,Ps,Ls,p),s)d.uv=Xe.getInterpolatedAttribute(s,o,l,c,p,new kt);if(r)d.uv1=Xe.getInterpolatedAttribute(r,o,l,c,p,new kt);if(a){if(d.normal=Xe.getInterpolatedAttribute(a,o,l,c,p,new F),d.normal.dot(i.direction)>0)d.normal.multiplyScalar(-1)}let f={a:o,b:l,c,normal:new F,materialIndex:0};Xe.getNormal(Is,Ps,Ls,f.normal),d.face=f,d.barycoord=p}return d}class rr extends Ce{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,d,p){super(null,r,a,o,l,c,i,s,d,p);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws extends Ie{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var xi=new ne,Zo=new ne,Fs=[],Jo=new An,kh=new ne,Xi=new te,qi=new Gn;class Li extends te{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kh)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new An;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Jo.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(Jo)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new Gn;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),qi.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,xi),Zo.multiplyMatrices(n,xi),Xi.matrixWorld=Zo,Xi.raycast(t,Fs);for(let r=0,a=Fs.length;r<a;r++){let o=Fs[r];o.instanceId=s,o.object=this,e.push(o)}Fs.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new rr(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var $n=new Gn,Hh=new kt(0.5,0.5),Os=new F;class Kn{constructor(t=new cn,e=new cn,n=new cn,i=new cn,s=new cn,r=new cn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],p=s[6],f=s[7],_=s[8],y=s[9],S=s[10],m=s[11],u=s[12],M=s[13],T=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,m-_,b-u).normalize(),i[1].setComponents(l+r,f+c,m+_,b+u).normalize(),i[2].setComponents(l+a,f+d,m+y,b+M).normalize(),i[3].setComponents(l-a,f-d,m-y,b-M).normalize(),n)i[4].setComponents(o,p,S,T).normalize(),i[5].setComponents(l-o,f-p,m-S,b-T).normalize();else if(i[4].setComponents(l-o,f-p,m-S,b-T).normalize(),e===2000)i[5].setComponents(l+o,f+p,m+S,b+T).normalize();else if(e===2001)i[5].setComponents(o,p,S,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=Hh.distanceTo(t.center);return $n.radius=0.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Os.x=i.normal.x>0?t.max.x:t.min.x,Os.y=i.normal.y>0?t.max.y:t.min.y,Os.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var $o=new ne;class ar{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];if($o.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new Kn;n[i].setFromProjectionMatrix($o,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++){if(e[i]===void 0)e[i]=new Kn;e[i].copy(n[i])}return this._count=t._count,this}clone(){return new ar().copy(this)}}class Cn extends Rn{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Ko=new ne,Vr=new sr,Bs=new Gn,zs=new F;class kn extends xe{constructor(t=new ve,e=new Cn){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=s,t.ray.intersectsSphere(Bs)===!1)return;Ko.copy(i).invert(),Vr.copy(t.ray).applyMatrix4(Ko);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,d=n.attributes.position;if(l!==null){let p=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let _=p,y=f;_<y;_++){let S=l.getX(_);zs.fromBufferAttribute(d,S),Qo(zs,S,o,i,t,e,this)}}else{let p=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let _=p,y=f;_<y;_++)zs.fromBufferAttribute(d,_),Qo(zs,_,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qo(t,e,n,i,s,r,a){let o=Vr.distanceSqToPoint(t);if(o<n){let l=new F;Vr.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class or extends Ce{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lr extends Ce{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn extends Ce{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,d=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class cr extends Hn{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hr extends Ce{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class an extends ve{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],d=[],p=0,f=0;_("z","y","x",-1,-1,n,e,t,r,s,0),_("z","y","x",1,-1,n,e,-t,r,s,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(d,2));function _(y,S,m,u,M,T,b,w,R,g,x){let A=T/R,U=b/g,P=T/2,k=b/2,tt=w/2,C=R+1,J=g+1,z=0,B=0,lt=new F;for(let q=0;q<J;q++){let et=q*U-k;for(let at=0;at<C;at++){let xt=at*A-P;lt[y]=xt*u,lt[S]=et*M,lt[m]=tt,l.push(lt.x,lt.y,lt.z),lt[y]=0,lt[S]=0,lt[m]=w>0?1:-1,c.push(lt.x,lt.y,lt.z),d.push(at/R),d.push(1-q/g),z+=1}}for(let q=0;q<g;q++)for(let et=0;et<R;et++){let at=p+et+C*q,xt=p+et+C*(q+1),Y=p+(et+1)+C*(q+1),st=p+(et+1)+C*q;o.push(at,xt,st),o.push(xt,Y,st),B+=6}a.addGroup(f,B,x),f+=B,p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ni extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new F,c=new kt;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let d=0,p=3;d<=e;d++,p+=3){let f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[p]/t+1)/2,c.y=(r[p+1]/t+1)/2,o.push(c.x,c.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Di extends ve{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],d=[],p=[],f=[],_=0,y=[],S=n/2,m=0;if(u(),r===!1){if(t>0)M(!0);if(e>0)M(!1)}this.setIndex(c),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(p,3)),this.setAttribute("uv",new ce(f,2));function u(){let T=new F,b=new F,w=0,R=(e-t)/n;for(let g=0;g<=s;g++){let x=[],A=g/s,U=A*(e-t)+t;for(let P=0;P<=i;P++){let k=P/i,tt=k*o+a,C=Math.sin(tt),J=Math.cos(tt);b.x=U*C,b.y=-A*n+S,b.z=U*J,d.push(b.x,b.y,b.z),T.set(C,R,J).normalize(),p.push(T.x,T.y,T.z),f.push(k,1-A),x.push(_++)}y.push(x)}for(let g=0;g<i;g++)for(let x=0;x<s;x++){let A=y[x][g],U=y[x+1][g],P=y[x+1][g+1],k=y[x][g+1];if(t>0||x!==0)c.push(A,U,k),w+=3;if(e>0||x!==s-1)c.push(U,P,k),w+=3}l.addGroup(m,w,0),m+=w}function M(T){let b=_,w=new kt,R=new F,g=0,x=T===!0?t:e,A=T===!0?1:-1;for(let P=1;P<=i;P++)d.push(0,S*A,0),p.push(0,A,0),f.push(0.5,0.5),_++;let U=_;for(let P=0;P<=i;P++){let tt=P/i*o+a,C=Math.cos(tt),J=Math.sin(tt);R.x=x*J,R.y=S*A,R.z=x*C,d.push(R.x,R.y,R.z),p.push(0,A,0),w.x=C*0.5+0.5,w.y=J*0.5*A+0.5,f.push(w.x,w.y),_++}for(let P=0;P<i;P++){let k=b+P,tt=U+P;if(T===!0)c.push(tt,tt+1,k);else c.push(tt+1,tt,k);g+=3}l.addGroup(m,g,T===!0?1:2),m+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class os extends ve{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(s.slice(),3)),this.setAttribute("uv",new ce(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(u){let M=new F,T=new F,b=new F;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],T),f(e[w+2],b),o(M,T,b,u)}function o(u,M,T,b){let w=b+1,R=[];for(let g=0;g<=w;g++){R[g]=[];let x=u.clone().lerp(T,g/w),A=M.clone().lerp(T,g/w),U=w-g;for(let P=0;P<=U;P++)if(P===0&&g===w)R[g][P]=x;else R[g][P]=x.clone().lerp(A,P/U)}for(let g=0;g<w;g++)for(let x=0;x<2*(w-g)-1;x++){let A=Math.floor(x/2);if(x%2===0)p(R[g][A+1]),p(R[g+1][A]),p(R[g][A]);else p(R[g][A+1]),p(R[g+1][A+1]),p(R[g+1][A])}}function l(u){let M=new F;for(let T=0;T<s.length;T+=3)M.x=s[T+0],M.y=s[T+1],M.z=s[T+2],M.normalize().multiplyScalar(u),s[T+0]=M.x,s[T+1]=M.y,s[T+2]=M.z}function c(){let u=new F;for(let M=0;M<s.length;M+=3){u.x=s[M+0],u.y=s[M+1],u.z=s[M+2];let T=S(u)/2/Math.PI+0.5,b=m(u)/Math.PI+0.5;r.push(T,1-b)}_(),d()}function d(){for(let u=0;u<r.length;u+=6){let M=r[u+0],T=r[u+2],b=r[u+4],w=Math.max(M,T,b),R=Math.min(M,T,b);if(w>0.9&&R<0.1){if(M<0.2)r[u+0]+=1;if(T<0.2)r[u+2]+=1;if(b<0.2)r[u+4]+=1}}}function p(u){s.push(u.x,u.y,u.z)}function f(u,M){let T=u*3;M.x=t[T+0],M.y=t[T+1],M.z=t[T+2]}function _(){let u=new F,M=new F,T=new F,b=new F,w=new kt,R=new kt,g=new kt;for(let x=0,A=0;x<s.length;x+=9,A+=6){u.set(s[x+0],s[x+1],s[x+2]),M.set(s[x+3],s[x+4],s[x+5]),T.set(s[x+6],s[x+7],s[x+8]),w.set(r[A+0],r[A+1]),R.set(r[A+2],r[A+3]),g.set(r[A+4],r[A+5]),b.copy(u).add(M).add(T).divideScalar(3);let U=S(b);y(w,A+0,u,U),y(R,A+2,M,U),y(g,A+4,T,U)}}function y(u,M,T,b){if(b<0&&u.x===1)r[M]=u.x-1;if(T.x===0&&T.z===0)r[M]=b/2/Math.PI+0.5}function S(u){return Math.atan2(u.z,-u.x)}function m(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.vertices,t.indices,t.radius,t.detail)}}class ls extends os{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ls(t.radius,t.detail)}}class cs extends os{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e);this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cs(t.radius,t.detail)}}class hs extends ve{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,d=t/a,p=e/o,f=[],_=[],y=[],S=[];for(let m=0;m<c;m++){let u=m*p-r;for(let M=0;M<l;M++){let T=M*d-s;_.push(T,-u,0),y.push(0,0,1),S.push(M/a),S.push(1-m/o)}}for(let m=0;m<o;m++)for(let u=0;u<a;u++){let M=u+l*m,T=u+l*(m+1),b=u+1+l*(m+1),w=u+1+l*m;f.push(M,T,w),f.push(T,b,w)}this.setIndex(f),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ui extends ve{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],d=new F,p=new F,f=[],_=[],y=[],S=[];for(let m=0;m<=n;m++){let u=[],M=m/n,T=r+M*a,b=t*Math.cos(T),w=Math.sqrt(t*t-b*b),R=0;if(m===0&&r===0)R=0.5/e;else if(m===n&&o===Math.PI)R=-0.5/e;for(let g=0;g<=e;g++){let x=g/e,A=i+x*s;d.x=-w*Math.cos(A),d.y=b,d.z=w*Math.sin(A),_.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),S.push(x+R,1-M),u.push(l++)}c.push(u)}for(let m=0;m<n;m++)for(let u=0;u<e;u++){let M=c[m][u+1],T=c[m][u],b=c[m+1][u],w=c[m+1][u+1];if(m!==0||r>0)f.push(M,T,w);if(m!==n-1||o<Math.PI)f.push(T,b,w)}this.setIndex(f),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fi extends ve{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],d=[],p=new F,f=new F,_=new F;for(let y=0;y<=n;y++){let S=r+y/n*a;for(let m=0;m<=i;m++){let u=m/i*s;f.x=(t+e*Math.cos(S))*Math.cos(u),f.y=(t+e*Math.cos(S))*Math.sin(u),f.z=e*Math.sin(S),l.push(f.x,f.y,f.z),p.x=t*Math.cos(u),p.y=t*Math.sin(u),_.subVectors(f,p).normalize(),c.push(_.x,_.y,_.z),d.push(m/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){let m=(i+1)*y+S-1,u=(i+1)*(y-1)+S-1,M=(i+1)*(y-1)+S,T=(i+1)*y+S;o.push(m,u,T),o.push(u,M,T)}this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ni(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(jo(s))if(s.isRenderTargetTexture)Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(jo(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Fe(t){let e={};for(let n=0;n<t.length;n++){let i=ni(t[n]);for(let s in i)e[s]=i[s]}return e}function jo(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Wh(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qa(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Yt.workingColorSpace}var cc={clone:ni,merge:Fe},Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Rn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(i.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class ja extends on{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends Rn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ur extends Rn{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class to extends Rn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eo extends Rn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function vi(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Gs(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class ii{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class no extends ii{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),y=_*_,S=y*_,m=-p*S+2*p*y-p*_,u=(1+p)*S+(-1.5-2*p)*y+(-0.5+p)*_+1,M=(-1-f)*S+(1.5+f)*y+0.5*_,T=f*S-f*y;for(let b=0;b!==a;++b)s[b]=m*r[c+b]+u*r[l+b]+M*r[o+b]+T*r[d+b];return s}}class io extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),d=1-c;for(let p=0;p!==a;++p)s[p]=r[l+p]*d+r[o+p]*c;return s}}class so extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ro extends ii{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let _=(n-e)/(i-e),y=1-_;for(let S=0;S!==a;++S)s[S]=r[l+S]*y+r[o+S]*_;return s}let p=a*2,f=t-1;for(let _=0;_!==a;++_){let y=r[l+_],S=r[o+_],m=f*p+_*2,u=d[m],M=d[m+1],T=t*p+_*2,b=c[T],w=c[T+1],R=Yh(n,e,u,b,i);s[_]=hc(R,y,M,w,S)}return s}}function hc(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function qh(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Yh(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=hc(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=qh(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class $e{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vi(e,this.TimeBufferType),this.values=vi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vi(t.times,Array),values:vi(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Gs(t.settings))n.settings={inTangents:vi(t.settings.inTangents,Array),outTangents:vi(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;if(Gs(this.settings))tl(this.settings.inTangents,t),tl(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Gs(this.settings))el(this.settings.inTangents,t),el(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Ut("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Ut("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Ut("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Ut("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(lh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let d=a*n,p=d-n,f=d+n;for(let _=0;_!==n;++_){let y=e[d+_];if(y!==e[p+_]||y!==e[f+_]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let d=a*n,p=r*n;for(let f=0;f!==n;++f)e[p+f]=e[d+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Gs(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function tl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function el(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=2301;class si extends $e{constructor(t,e,n){super(t,e,n)}}si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=2300;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends $e{constructor(t,e,n,i){super(t,e,n,i)}}ao.prototype.ValueTypeName="color";class oo extends $e{constructor(t,e,n,i){super(t,e,n,i)}}oo.prototype.ValueTypeName="number";class lo extends ii{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)sn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class dr extends $e{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;class ri extends $e{constructor(t,e,n){super(t,e,n)}}ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=2300;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends $e{constructor(t,e,n,i){super(t,e,n,i)}}co.prototype.ValueTypeName="vector";class ho{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){let d=l.indexOf(c);if(d!==-1)l.splice(d,2);return this},this.getHandler=function(c){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],_=l[d+1];if(f.global)f.lastIndex=0;if(f.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var uc=new ho;class uo{constructor(t){if(this.manager=t!==void 0?t:uc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}uo.DEFAULT_MATERIAL_NAME="__DEFAULT";class fr extends xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}var Wr=new ne,nl=new F,il=new F;class pr{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kn,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(nl),il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(il),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wr,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var ks=new F,Hs=new sn,ln=new F;class mr extends xe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ks,Hs,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ks,Hs,ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ks,Hs,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ks,Hs,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Un=new F,sl=new kt,rl=new kt;class Be extends mr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Ei*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zi*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(Zi*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zi*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class dc extends pr{constructor(){super(new Be(90,1,0.5,500));this.isPointLightShadow=!0}}class ai extends fr{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class gr extends mr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class fc extends pr{constructor(){super(new gr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class us extends fr{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new fc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var yi=-90,Si=1;class ds extends xe{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Be(yi,Si,t,e);i.layers=this.layers,this.add(i);let s=new Be(yi,Si,t,e);s.layers=this.layers,this.add(s);let r=new Be(yi,Si,t,e);r.layers=this.layers,this.add(r);let a=new Be(yi,Si,t,e);a.layers=this.layers,this.add(a);let o=new Be(yi,Si,t,e);o.layers=this.layers,this.add(o);let l=new Be(yi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let S=!1;if(t.isWebGLRenderer===!0)S=t.state.buffers.depth.getReversed();else S=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,i),S&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(d,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fo extends Be{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}var po="\\[\\]\\.:\\/",Zh=new RegExp("["+po+"]","g"),mo="[^"+po+"]",Jh="[^"+po.replace("\\.","")+"]",$h=/((?:WC+[\/:])*)/.source.replace("WC",mo),Kh=/(WCOD+)?/.source.replace("WCOD",Jh),Qh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mo),jh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mo),tu=new RegExp("^"+$h+Kh+Qh+jh+"$"),eu=["material","materials","bones","map"];class pc{constructor(t,e,n){let i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ie{constructor(t,e,n){this.path=e,this.parsedPath=n||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ie(t,e,n);else return new ie.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zh,"")}static parseTrackName(t){let e=tu.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(eu.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=ie.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=pc;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zm=new Float32Array(1);class mc{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function go(t,e,n,i){let s=nu(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function nu(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)Nt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Oc(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function iu(t){let e=new WeakMap;function n(o,l){let{array:c,usage:d}=o,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let _;if(c instanceof Float32Array)_=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)_=t.HALF_FLOAT;else _=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=t.SHORT;else if(c instanceof Uint32Array)_=t.UNSIGNED_INT;else if(c instanceof Int32Array)_=t.INT;else if(c instanceof Int8Array)_=t.BYTE;else if(c instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let{array:d,updateRanges:p}=l;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((_,y)=>_.start-y.start);let f=0;for(let _=1;_<p.length;_++){let y=p[f],S=p[_];if(S.start<=y.start+y.count+1)y.count=Math.max(y.count,S.start+S.count-y.start);else++f,p[f]=S}p.length=f+1;for(let _=0,y=p.length;_<y;_++){let S=p[_];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let d=e.get(o);if(!d||d.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var su=`#ifdef USE_ALPHAHASH
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
}`,Ht={alphahash_fragment:su,alphahash_pars_fragment:ru,alphamap_fragment:au,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:hu,aomap_pars_fragment:uu,batching_pars_vertex:du,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:xu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:yu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:Mu,color_fragment:bu,color_pars_fragment:Eu,color_pars_vertex:Tu,color_vertex:wu,common:Au,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Cu,displacementmap_vertex:Iu,emissivemap_fragment:Pu,emissivemap_pars_fragment:Lu,colorspace_fragment:Nu,colorspace_pars_fragment:Du,envmap_fragment:Uu,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Ou,envmap_pars_vertex:Bu,envmap_physical_pars_fragment:Ju,envmap_vertex:zu,fog_vertex:Gu,fog_pars_vertex:ku,fog_fragment:Hu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Vu,lightmap_pars_fragment:Xu,lights_lambert_fragment:qu,lights_lambert_pars_fragment:Yu,lights_pars_begin:Zu,lights_toon_fragment:$u,lights_toon_pars_fragment:Ku,lights_phong_fragment:Qu,lights_phong_pars_fragment:ju,lights_physical_fragment:td,lights_physical_pars_fragment:ed,lights_fragment_begin:nd,lights_fragment_maps:id,lights_fragment_end:sd,lightprobes_pars_fragment:rd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:ud,map_particle_fragment:dd,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphinstance_vertex:gd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:vd,morphtarget_vertex:yd,normal_fragment_begin:Sd,normal_fragment_maps:Md,normal_pars_fragment:bd,normal_pars_vertex:Ed,normal_vertex:Td,normalmap_pars_fragment:wd,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Id,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Nd,project_vertex:Dd,dithering_fragment:Ud,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Gd,shadowmap_vertex:kd,shadowmask_pars_fragment:Hd,skinbase_vertex:Wd,skinning_pars_vertex:Vd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:Zd,tonemapping_fragment:Jd,tonemapping_pars_fragment:$d,transmission_fragment:Kd,transmission_pars_fragment:Qd,uv_pars_fragment:jd,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:lf,cube_frag:cf,depth_vert:hf,depth_frag:uf,distance_vert:df,distance_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:_f,meshbasic_vert:xf,meshbasic_frag:vf,meshlambert_vert:yf,meshlambert_frag:Sf,meshmatcap_vert:Mf,meshmatcap_frag:bf,meshnormal_vert:Ef,meshnormal_frag:Tf,meshphong_vert:wf,meshphong_frag:Af,meshphysical_vert:Rf,meshphysical_frag:Cf,meshtoon_vert:If,meshtoon_frag:Pf,points_vert:Lf,points_frag:Nf,shadow_vert:Df,shadow_frag:Uf,sprite_vert:Ff,sprite_frag:Of},mt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new kt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},pn={basic:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Fe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Fe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Fe([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Fe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Fe([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Fe([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Fe([mt.common,mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Fe([mt.lights,mt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};pn.physical={uniforms:Fe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var _r={r:0,b:0,g:0},Bf=new ne,Bc=new Ot;Bc.set(-1,0,0,0,1,0,0,0,1);function zf(t,e,n,i,s,r){let a=new Dt(0),o=s===!0?0:1,l,c,d=null,p=0,f=null;function _(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let b=M.backgroundBlurriness>0;T=e.get(T,b)}return T}function y(M){let T=!1,b=_(M);if(b===null)m(a,o);else if(b&&b.isColor)m(b,1),T=!0;let w=t.xr.getEnvironmentBlendMode();if(w==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(w==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||T)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function S(M,T){let b=_(T);if(b&&b.isCubeTexture){if(c===void 0)c=new te(new an(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:ni(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Bc);if(c.material.toneMapped=Yt.getTransfer(b.colorSpace)!==oe,d!==b||p!==b.version||f!==t.toneMapping)c.material.needsUpdate=!0,d=b,p=b.version,f=t.toneMapping;c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)}else if(b&&b.isTexture){if(l===void 0)l=new te(new hs(2,2),new on({name:"BackgroundMaterial",uniforms:ni(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0)b.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(b.matrix),d!==b||p!==b.version||f!==t.toneMapping)l.material.needsUpdate=!0,d=b,p=b.version,f=t.toneMapping;l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)}}function m(M,T){M.getRGB(_r,Qa(t)),n.buffers.color.setClear(_r.r,_r.g,_r.b,T,r)}function u(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:y,addToRenderList:S,dispose:u}}function Gf(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(P,k,tt,C,J){let z=!1,B=p(P,C,tt,k);if(r!==B)r=B,c(r.object);if(z=_(P,C,tt,J),z)y(P,C,tt,J);if(J!==null)e.update(J,t.ELEMENT_ARRAY_BUFFER);if(z||a){if(a=!1,b(P,k,tt,C),J!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer)}}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function p(P,k,tt,C){let J=C.wireframe===!0,z=i[k.id];if(z===void 0)z={},i[k.id]=z;let B=P.isInstancedMesh===!0?P.id:0,lt=z[B];if(lt===void 0)lt={},z[B]=lt;let q=lt[tt.id];if(q===void 0)q={},lt[tt.id]=q;let et=q[J];if(et===void 0)et=f(l()),q[J]=et;return et}function f(P){let k=[],tt=[],C=[];for(let J=0;J<n;J++)k[J]=0,tt[J]=0,C[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:tt,attributeDivisors:C,object:P,attributes:{},index:null}}function _(P,k,tt,C){let J=r.attributes,z=k.attributes,B=0,lt=tt.getAttributes();for(let q in lt)if(lt[q].location>=0){let at=J[q],xt=z[q];if(xt===void 0){if(q==="instanceMatrix"&&P.instanceMatrix)xt=P.instanceMatrix;if(q==="instanceColor"&&P.instanceColor)xt=P.instanceColor}if(at===void 0)return!0;if(at.attribute!==xt)return!0;if(xt&&at.data!==xt.data)return!0;B++}if(r.attributesNum!==B)return!0;if(r.index!==C)return!0;return!1}function y(P,k,tt,C){let J={},z=k.attributes,B=0,lt=tt.getAttributes();for(let q in lt)if(lt[q].location>=0){let at=z[q];if(at===void 0){if(q==="instanceMatrix"&&P.instanceMatrix)at=P.instanceMatrix;if(q==="instanceColor"&&P.instanceColor)at=P.instanceColor}let xt={};if(xt.attribute=at,at&&at.data)xt.data=at.data;J[q]=xt,B++}r.attributes=J,r.attributesNum=B,r.index=C}function S(){let P=r.newAttributes;for(let k=0,tt=P.length;k<tt;k++)P[k]=0}function m(P){u(P,0)}function u(P,k){let tt=r.newAttributes,C=r.enabledAttributes,J=r.attributeDivisors;if(tt[P]=1,C[P]===0)t.enableVertexAttribArray(P),C[P]=1;if(J[P]!==k)t.vertexAttribDivisor(P,k),J[P]=k}function M(){let P=r.newAttributes,k=r.enabledAttributes;for(let tt=0,C=k.length;tt<C;tt++)if(k[tt]!==P[tt])t.disableVertexAttribArray(tt),k[tt]=0}function T(P,k,tt,C,J,z,B){if(B===!0)t.vertexAttribIPointer(P,k,tt,J,z);else t.vertexAttribPointer(P,k,tt,C,J,z)}function b(P,k,tt,C){S();let J=C.attributes,z=tt.getAttributes(),B=k.defaultAttributeValues;for(let lt in z){let q=z[lt];if(q.location>=0){let et=J[lt];if(et===void 0){if(lt==="instanceMatrix"&&P.instanceMatrix)et=P.instanceMatrix;if(lt==="instanceColor"&&P.instanceColor)et=P.instanceColor}if(et!==void 0){let at=et.normalized,xt=et.itemSize,Y=e.get(et);if(Y===void 0)continue;let{buffer:st,type:St,bytesPerElement:Ct}=Y,Pt=St===t.INT||St===t.UNSIGNED_INT||et.gpuType===ea;if(et.isInterleavedBufferAttribute){let Mt=et.data,$t=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,zt=et.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let Ft=0;Ft<q.locationSize;Ft++)u(q.location+Ft,Mt.meshPerAttribute);if(P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=Mt.meshPerAttribute*Mt.count}else for(let Ft=0;Ft<q.locationSize;Ft++)m(q.location+Ft);t.bindBuffer(t.ARRAY_BUFFER,st);for(let Ft=0;Ft<q.locationSize;Ft++)T(q.location+Ft,xt/q.locationSize,St,at,$t*Ct,(zt+xt/q.locationSize*Ft)*Ct,Pt)}else{if(et.isInstancedBufferAttribute){for(let Mt=0;Mt<q.locationSize;Mt++)u(q.location+Mt,et.meshPerAttribute);if(P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=et.meshPerAttribute*et.count}else for(let Mt=0;Mt<q.locationSize;Mt++)m(q.location+Mt);t.bindBuffer(t.ARRAY_BUFFER,st);for(let Mt=0;Mt<q.locationSize;Mt++)T(q.location+Mt,xt/q.locationSize,St,at,xt*Ct,xt/q.locationSize*Mt*Ct,Pt)}}else if(B!==void 0){let at=B[lt];if(at!==void 0)switch(at.length){case 2:t.vertexAttrib2fv(q.location,at);break;case 3:t.vertexAttrib3fv(q.location,at);break;case 4:t.vertexAttrib4fv(q.location,at);break;default:t.vertexAttrib1fv(q.location,at)}}}}M()}function w(){A();for(let P in i){let k=i[P];for(let tt in k){let C=k[tt];for(let J in C){let z=C[J];for(let B in z)d(z[B].object),delete z[B];delete C[J]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let tt in k){let C=k[tt];for(let J in C){let z=C[J];for(let B in z)d(z[B].object),delete z[B];delete C[J]}}delete i[P.id]}function g(P){for(let k in i){let tt=i[k];for(let C in tt){let J=tt[C];if(J[P.id]===void 0)continue;let z=J[P.id];for(let B in z)d(z[B].object),delete z[B];delete J[P.id]}}}function x(P){for(let k in i){let tt=i[k],C=P.isInstancedMesh===!0?P.id:0,J=tt[C];if(J===void 0)continue;for(let z in J){let B=J[z];for(let lt in B)d(B[lt].object),delete B[lt];delete J[z]}if(delete tt[C],Object.keys(tt).length===0)delete i[k]}}function A(){if(U(),a=!0,r===s)return;r=s,c(r.object)}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function kf(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){if(d===0)return;t.drawArraysInstanced(i,l,c,d),n.update(c,i,d)}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let _=0;_<d;_++)f+=c[_];n.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hf(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){if(g!==En&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(g){let x=g===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(g!==nn&&g!==bn&&!x&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",d=l(c);if(d!==c)Nt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d;let p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&p===!1;if(n.reversedDepthBuffer===!0&&p===!1)Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&p===!0)Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let _=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:w,samples:R}}function Wf(t){let e=this,n=null,i=0,s=!1,r=!1,a=new cn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let _=p.length!==0||f||i!==0||s;return s=f,i=p.length,_},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,_){let{clippingPlanes:y,clipIntersection:S,clipShadows:m}=p,u=t.get(p);if(!s||y===null||y.length===0||r&&!m)if(r)d(null);else c();else{let M=r?0:i,T=M*4,b=u.clippingState||null;l.value=b,b=d(y,f,T,_);for(let w=0;w!==T;++w)b[w]=n[w];u.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function d(p,f,_,y){let S=p!==null?p.length:0,m=null;if(S!==0){if(m=l.value,y!==!0||m===null){let u=_+S*4,M=f.matrixWorldInverse;if(o.getNormalMatrix(M),m===null||m.length<u)m=new Float32Array(u);for(let T=0,b=_;T!==S;++T,b+=4)a.copy(p[T]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class vr extends Je{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new or(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new an(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Qn});s.uniforms.tEquirect.value=e;let r=new te(i,s),a=e.minFilter;if(e.minFilter===On)e.minFilter=Ze;return new ds(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var gc=256,Vf=3,Xf=20,zc=256,Gc=16,qf=3,Yf=new F,Zf=new Dt;class Oi{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ds(1,10,null),this._boxMesh=new te(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Yf}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(e>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:d,autoClearColor:p,autoClearDepth:f,autoClearStencil:_}=o,y=t.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,y===null)t.background=o.getClearColor(Zf);let S=new ds(n,i,c);if(S.position.copy(a),S.update(o,t),o.autoClear=d,o.autoClearColor=p,o.autoClearDepth=f,o.autoClearStencil=_,t.background=y,e>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,e);return this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gc,Ya(t))}_fromTexture(t,e){if(t.mapping===ts||t.mapping===Ri)this._setSize(t.image.length===0?gc:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=_c(t,!1,!1),n=Math.log2(t)-Vf;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==e||t&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=_c(e,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;if(t.mapping===ts||t.mapping===Ri){if(this._cubemapMaterial===null)this._cubemapMaterial=vc();e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=xc();e=this._equirectMaterial}e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=Jf(),this._integrationMaterial=$f();let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Gc);for(let r=0;r<=n;r++){let a=Oi.lodToRoughness(r,n);if(r>n-qf)s.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let o=a>0?Math.log2(e)+0.5*Math.log2(6/(zc*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){if(this._blurMaterial===null)this._blurMaterial=Kf();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function _c(t,e,n){return new vr(t,{minFilter:On,generateMipmaps:e,type:un,colorSpace:Ba,depthBuffer:n})}function gs(t,e,n){return new on({name:t,uniforms:e,vertexShader:Ht.cube_vert,fragmentShader:n,side:Ue,blending:Qn,depthTest:!1,depthWrite:!1})}function Jf(){return gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Qf(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,_=!1){if(f===null||f===void 0)return null;if(_)return a(f);return r(f)}function r(f){if(f&&f.isTexture){let _=f.mapping;if(_===Vs||_===Xs)if(e.has(f)){let y=e.get(f).texture;return o(y,f.mapping)}else{let y=f.image;if(y&&y.height>0){let S=new vr(y.height);return S.fromEquirectangularTexture(t,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let _=f.mapping,y=_===Vs||_===Xs,S=_===ts||_===Ri;if(y||S){let m=n.get(f),u=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u){if(i===null)i=new Oi(t);return m=y?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture}else if(m!==void 0)return m.texture;else{let M=f.image;if(y&&M&&M.height>0||S&&M&&l(M)){if(i===null)i=new Oi(t);return m=y?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",d),m.texture}else return null}}}return f}function o(f,_){if(_===Vs)f.mapping=ts;else if(_===Xs)f.mapping=Ri;return f}function l(f){let _=0,y=6;for(let S=0;S<y;S++)if(f[S]!==void 0)_++;return _===y}function c(f){let _=f.target;_.removeEventListener("dispose",c);let y=e.get(_);if(y!==void 0)e.delete(_),y.dispose()}function d(f){let _=f.target;_.removeEventListener("dispose",d);let y=n.get(_);if(y!==void 0)n.delete(_),y.dispose()}function p(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:p}}function jf(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Yi("WebGLRenderer: "+i+" extension not supported.");return s}}}function tp(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((y)=>delete s[y]);function o(y){l(y.target)}function l(y){if(y.index!==null)e.remove(y.index);for(let m in y.attributes)e.remove(y.attributes[m]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let S=r.get(y);if(S)e.remove(S),r.delete(y);if(i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0)delete y._maxInstanceCount;n.memory.geometries--}function c(y,S){if(s[S.id]!==void 0)return S;return S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),n.memory.geometries++,S}function d(y){let S=y.attributes;for(let m in S)e.update(S[m],t.ARRAY_BUFFER)}function p(y){let S=y.index,m=y.attributes.position,u=0;if(m===void 0)return;let M=S!==null?S.array.length:m.array.length/3-1,b=new(m.count>=65535?ir:nr)(Math.ceil(M/3)*6,1),w=b.array;if(S!==null){let g=S.array;u=S.version;for(let x=0,A=0;x<M;x+=3){let U=g[x+0],P=g[x+1],k=g[x+2];w[A++]=U,w[A++]=P,w[A++]=P,w[A++]=k,w[A++]=k,w[A++]=U}}else{u=m.version;for(let g=0,x=0;g<M;g+=3){let A=g+0,U=g+1,P=g+2;w[x++]=A,w[x++]=U,w[x++]=U,w[x++]=P,w[x++]=P,w[x++]=A}}b.version=u;let R=r.get(y);if(R)e.remove(R);r.set(y,b)}function f(y){let S=r.get(y);if(S){let m=y.index;if(m!==null){if(S.version<m.version)p(y)}}else p(y);return r.get(y)}function _(){for(let y in s){let S=s[y].deref();if(S!==void 0)l(S)}}return{get:c,update:d,getWireframeAttribute:f,dispose:_}}function ep(t,e,n){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,r,p*a),n.update(f,i,1)}function c(p,f,_){if(_===0)return;t.drawElementsInstanced(i,f,r,p*a,_),n.update(f,i,_)}function d(p,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,_);let S=0;for(let m=0;m<_;m++)S+=f[m];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function np(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ip(t,e,n){let i=new WeakMap,s=new fe;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,f=i.get(o);if(f===void 0||f.count!==p){let A=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",A)};if(f!==void 0)f.texture.dispose();let _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;if(_===!0)T=1;if(y===!0)T=2;if(S===!0)T=3;let b=o.attributes.position.count*T,w=1;if(b>e.maxTextureSize)w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize;let R=new Float32Array(b*w*4*p),g=new tr(R,b,w,p);g.type=bn,g.needsUpdate=!0;let x=T*4;for(let U=0;U<p;U++){let P=m[U],k=u[U],tt=M[U],C=b*w*4*U;for(let J=0;J<P.count;J++){let z=J*x;if(_===!0)s.fromBufferAttribute(P,J),R[C+z+0]=s.x,R[C+z+1]=s.y,R[C+z+2]=s.z,R[C+z+3]=0;if(y===!0)s.fromBufferAttribute(k,J),R[C+z+4]=s.x,R[C+z+5]=s.y,R[C+z+6]=s.z,R[C+z+7]=0;if(S===!0)s.fromBufferAttribute(tt,J),R[C+z+8]=s.x,R[C+z+9]=s.y,R[C+z+10]=s.z,R[C+z+11]=tt.itemSize===4?s.w:1}}f={count:p,texture:g,size:new kt(b,w)},i.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let S=0;S<c.length;S++)_+=c[S];let y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function sp(t,e,n,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,p=c.geometry,f=e.get(c,p);if(r.get(f)!==d)e.update(f),r.set(f,d);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==d){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,d)}}if(c.isSkinnedMesh){let _=c.skeleton;if(r.get(_)!==d)_.update(),r.set(_,d)}return f}function o(){r=new WeakMap}function l(c){let d=c.target;if(d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null)n.remove(d.instanceColor)}return{update:a,dispose:o}}var rp={[Jr]:"LINEAR_TONE_MAPPING",[$r]:"REINHARD_TONE_MAPPING",[Kr]:"CINEON_TONE_MAPPING",[ji]:"ACES_FILMIC_TONE_MAPPING",[jr]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[Qr]:"CUSTOM_TONE_MAPPING"};function ap(t,e,n,i,s,r){let a=new Je(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new ve;d.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ce([0,2,0,0,2,0],2));let p=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new te(d,p),_=new gr(-1,1,1,-1,0,1),y=null,S=null,m=!1,u,M=null,T=[],b=!1;this.setSize=function(w,R){if(a.setSize(w,R),o!==null)o.setSize(w,R);if(l!==null)l.setSize(w,R);for(let g=0;g<T.length;g++){let x=T[g];if(x.setSize)x.setSize(w,R)}},this.setEffects=function(w){T=w,b=T.length>0&&T[0].isRenderPass===!0;let{width:R,height:g}=a;if(T.length>0&&o===null)o=new Je(R,g,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Je(R,g,{type:un,depthBuffer:!1,stencilBuffer:!1});let x=s===!0&&T.some((A)=>A.needsDepthTexture===!0);if(x!==(a.depthTexture!==null)){if(x===!0&&c===null){if(c=new Hn(R,g),r===!0)c.format=zn,c.type=jn}a.dispose(),a.depthTexture=x?c:null,a.resolveDepthBuffer=x,a.storeMultisampledDepthBuffer=x}for(let A=0;A<T.length;A++){let U=T[A];if(U.setSize)U.setSize(R,g);if(x&&U.needsDepthTexture===!0&&U.setDepthTexture)U.setDepthTexture(c)}},this.begin=function(w,R){if(m)return!1;if(w.toneMapping===hn&&T.length===0)return!1;if(M=R,R!==null){let{width:g,height:x}=R;if(a.width!==g||a.height!==x)this.setSize(g,x)}if(b===!1)w.setRenderTarget(a);return u=w.toneMapping,w.toneMapping=hn,!0},this.hasRenderPass=function(){return b},this.end=function(w,R){w.toneMapping=u,m=!0;let g=a,x=o;for(let A=0;A<T.length;A++){let U=T[A];if(U.enabled===!1)continue;if(U.render(w,x,g,R),U.needsSwap!==!1)g=x,x=x===o?l:o}if(y!==w.outputColorSpace||S!==w.toneMapping){if(y=w.outputColorSpace,S=w.toneMapping,p.defines={},Yt.getTransfer(y)===oe)p.defines.SRGB_TRANSFER="";let A=rp[S];if(A)p.defines[A]="";p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(M),w.render(f,_),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();d.dispose(),p.dispose()}}var kc=new Ce,Hc=new Hn(1,1),Wc=new cr(1),Vc=new tr,Xc=new Ka,qc=new or,yc=[],Sc=[],Mc=new Float32Array(16),bc=new Float32Array(9),Ec=new Float32Array(4);function Bi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=yc[s];if(r===void 0)r=new Float32Array(s),yc[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Se(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Me(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yr(t,e){let n=Sc[e];if(n===void 0)n=new Int32Array(e),Sc[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function op(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function lp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Se(n,e))return;t.uniform2fv(this.addr,e),Me(n,e)}}function cp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Se(n,e))return;t.uniform3fv(this.addr,e),Me(n,e)}}function hp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Se(n,e))return;t.uniform4fv(this.addr,e),Me(n,e)}}function up(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Se(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Me(n,e)}else{if(Se(n,i))return;Ec.set(i),t.uniformMatrix2fv(this.addr,!1,Ec),Me(n,i)}}function dp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Se(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Me(n,e)}else{if(Se(n,i))return;bc.set(i),t.uniformMatrix3fv(this.addr,!1,bc),Me(n,i)}}function fp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Se(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Me(n,e)}else{if(Se(n,i))return;Mc.set(i),t.uniformMatrix4fv(this.addr,!1,Mc),Me(n,i)}}function pp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function mp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Se(n,e))return;t.uniform2iv(this.addr,e),Me(n,e)}}function gp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Se(n,e))return;t.uniform3iv(this.addr,e),Me(n,e)}}function _p(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Se(n,e))return;t.uniform4iv(this.addr,e),Me(n,e)}}function xp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function vp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Se(n,e))return;t.uniform2uiv(this.addr,e),Me(n,e)}}function yp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Se(n,e))return;t.uniform3uiv(this.addr,e),Me(n,e)}}function Sp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Se(n,e))return;t.uniform4uiv(this.addr,e),Me(n,e)}}function Sr(t){if(t.version===0)t.compareFunction=Ha,t.needsUpdate=!0;return t}function Mp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)r=Sr(Hc);else r=kc;n.setTexture2D(e||r,s)}function bp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Xc,s)}function Ep(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_CUBE_SHADOW)r=Sr(Wc);else r=qc;n.setTextureCube(e||r,s)}function Tp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Vc,s)}function wp(t){switch(t){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}function Ap(t,e){t.uniform1fv(this.addr,e)}function Rp(t,e){let n=Bi(e,this.size,2);t.uniform2fv(this.addr,n)}function Cp(t,e){let n=Bi(e,this.size,3);t.uniform3fv(this.addr,n)}function Ip(t,e){let n=Bi(e,this.size,4);t.uniform4fv(this.addr,n)}function Pp(t,e){let n=Bi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Lp(t,e){let n=Bi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Np(t,e){let n=Bi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dp(t,e){t.uniform1iv(this.addr,e)}function Up(t,e){t.uniform2iv(this.addr,e)}function Fp(t,e){t.uniform3iv(this.addr,e)}function Op(t,e){t.uniform4iv(this.addr,e)}function Bp(t,e){t.uniform1uiv(this.addr,e)}function zp(t,e){t.uniform2uiv(this.addr,e)}function Gp(t,e){t.uniform3uiv(this.addr,e)}function kp(t,e){t.uniform4uiv(this.addr,e)}function Hp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Sr(Hc);else a=kc;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Wp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Xc,r[a])}function Vp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);let a;if(this.type===t.SAMPLER_CUBE_SHADOW)a=Sr(Wc);else a=qc;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function Xp(t,e,n){let i=this.cache,s=e.length,r=yr(n,s);if(!Se(i,r))t.uniform1iv(this.addr,r),Me(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Vc,r[a])}function qp(t){switch(t){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Ip;case 35674:return Pp;case 35675:return Lp;case 35676:return Np;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return zp;case 36295:return Gp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}}class Zc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class Jc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var _o=/(\w+)(\])?(\[|\.)?/g;function Tc(t,e){t.seq.push(e),t.map[e.id]=e}function Yp(t,e,n){let i=t.name,s=i.length;_o.lastIndex=0;while(!0){let r=_o.exec(i),a=_o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Tc(n,c===void 0?new Yc(o,t,e):new Zc(o,t,e));break}else{let p=n.map[o];if(p===void 0)p=new Jc(o),Tc(n,p);n=p}}}class ms{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Yp(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function wc(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Zp=37297,Jp=0;function $p(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ac=new Ot;function Kp(t){Yt._getMatrix(Ac,Yt.workingColorSpace,t);let e=`mat3( ${Ac.elements.map((n)=>n.toFixed(4))} )`;switch(Yt.getTransfer(t)){case za:return[e,"LinearTransferOETF"];case oe:return[e,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rc(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+$p(t.getShaderSource(e),o)}else return r}function Qp(t,e){let n=Kp(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var jp={[Jr]:"Linear",[$r]:"Reinhard",[Kr]:"Cineon",[ji]:"ACESFilmic",[jr]:"AgX",[ta]:"Neutral",[Qr]:"Custom"};function tm(t,e){let n=jp[e];if(n===void 0)return Nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var xr=new F;function em(){Yt.getLuminanceCoefficients(xr);let t=xr.x.toFixed(4),e=xr.y.toFixed(4),n=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function nm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function im(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function sm(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ps(t){return t!==""}function Cc(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ic(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(t){return t.replace(rm,am)}function am(t,e){let n=Ht[e];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return vo(n)}var om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(t){return t.replace(om,lm)}function lm(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lc(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var cm={[Ki]:"SHADOWMAP_TYPE_PCF",[Ti]:"SHADOWMAP_TYPE_VSM"};function hm(t){return cm[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var um={[Ri]:"ENVMAP_MODE_REFRACTION"};function dm(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return um[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fm={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[Bl]:"ENVMAP_BLENDING_MIX",[zl]:"ENVMAP_BLENDING_ADD"};function pm(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return fm[t.combine]||"ENVMAP_BLENDING_NONE"}function mm(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=hm(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=dm(n),p=pm(n),f=nm(n),_=im(r),y=s.createProgram(),S,m,u=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ps).join(`
`),S.length>0)S+=`
`;if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ps).join(`
`),m.length>0)m+=`
`}else S=[Lc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),m=[Lc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hn?"#define TONE_MAPPING":"",n.toneMapping!==hn?Ht.tonemapping_pars_fragment:"",n.toneMapping!==hn?tm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Qp("linearToOutputTexel",n.outputColorSpace),em(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`);if(a=vo(a),a=Cc(a,n),a=Ic(a,n),o=vo(o),o=Cc(o,n),o=Ic(o,n),a=Pc(a),o=Pc(o),n.isRawShaderMaterial!==!0)u=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",n.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m;let M=u+S+a,T=u+m+o,b=wc(s,s.VERTEX_SHADER,M),w=wc(s,s.FRAGMENT_SHADER,T);if(s.attachShader(y,b),s.attachShader(y,w),n.index0AttributeName!==void 0)s.bindAttribLocation(y,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(y,0,"position");s.linkProgram(y);function R(U){if(t.debug.checkShaderErrors){let P=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(b)||"",tt=s.getShaderInfoLog(w)||"",C=P.trim(),J=k.trim(),z=tt.trim(),B=!0,lt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,y,b,w);else{let q=Rc(s,b,"vertex"),et=Rc(s,w,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+C+`
`+q+`
`+et)}else if(C!=="")Nt("WebGLProgram: Program Info Log:",C);else if(J===""||z==="")lt=!1;if(lt)U.diagnostics={runnable:B,programLog:C,vertexShader:{log:J,prefix:S},fragmentShader:{log:z,prefix:m}}}s.deleteShader(b),s.deleteShader(w),g=new ms(s,y),x=sm(s,y)}let g;this.getUniforms=function(){if(g===void 0)R(this);return g};let x;this.getAttributes=function(){if(x===void 0)R(this);return x};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(A===!1)A=s.getProgramParameter(y,Zp);return A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=w,this}var gm=0;class $c{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Kc(t),e.set(t,n);return n}}class Kc{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function _m(t){return t===ti||t===Qs||t===js}function xm(t,e,n,i,s,r){let a=new er,o=new $c,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function y(g,x,A,U,P,k){let tt=U.fog,C=P.geometry,J=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?U.environment:null,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||J,z),lt=f[g.type],q=i.precision;if(g.precision!==null){if(q=i.getMaxPrecision(g.precision),q!==g.precision)Nt("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead.")}let et=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,at=et!==void 0?et.length:0,xt=0;if(C.morphAttributes.position!==void 0)xt=1;if(C.morphAttributes.normal!==void 0)xt=2;if(C.morphAttributes.color!==void 0)xt=3;let Y,st,St,Ct;if(lt){let _t=pn[lt];Y=_t.vertexShader,st=_t.fragmentShader}else{Y=g.vertexShader,st=g.fragmentShader;let _t=o.getVertexShaderStage(g),se=o.getFragmentShaderStage(g);o.update(g,_t,se),St=_t.id,Ct=se.id}let Pt=t.getRenderTarget(),Mt=t.state.buffers.depth.getReversed(),$t=P.isInstancedMesh===!0,zt=P.isBatchedMesh===!0,Ft=!!g.map,Qt=!!g.matcap,Wt=!!B,re=Wt&&B.isPMREMTexture===!0,he=!!g.aoMap,pe=!!g.lightMap,we=!!g.bumpMap&&g.wireframe===!1,ue=!!g.normalMap,me=!!g.displacementMap,ye=!!g.emissiveMap,Ae=!!g.metalnessMap,ze=!!g.roughnessMap,N=g.anisotropy>0,We=g.clearcoat>0,ee=g.diffuseRoughness>0,V=g.dispersion>0,X=g.retroreflectivity>0,wt=g.iridescence>0,pt=g.sheen>0,yt=g.transmission>0,Vt=N&&!!g.anisotropyMap,E=We&&!!g.clearcoatMap,h=We&&!!g.clearcoatNormalMap,D=We&&!!g.clearcoatRoughnessMap,nt=ee&&!!g.diffuseRoughnessMap,K=wt&&!!g.iridescenceMap,ot=wt&&!!g.iridescenceThicknessMap,ct=pt&&!!g.sheenColorMap,W=pt&&!!g.sheenRoughnessMap,Q=!!g.specularMap,ht=!!g.specularColorMap,I=!!g.specularIntensityMap,j=yt&&!!g.transmissionMap,Z=yt&&!!g.thicknessMap,it=!!g.gradientMap,rt=!!g.alphaMap,ut=g.alphaTest>0,It=!!g.alphaHash,Rt=!!g.extensions,gt=hn;if(g.toneMapped){if(Pt===null||Pt.isXRRenderTarget===!0)gt=t.toneMapping}let Lt=re?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Gt={shaderID:lt,shaderType:g.type,shaderName:g.name,vertexShader:Y,fragmentShader:st,defines:g.defines,customVertexShaderID:St,customFragmentShaderID:Ct,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:zt,batchingColor:zt&&P._colorsTexture!==null,instancing:$t,instancingColor:$t&&P.instanceColor!==null,instancingMorph:$t&&P.morphTexture!==null,outputColorSpace:Pt===null?t.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ft,matcap:Qt,envMap:Wt,envMapMode:Wt&&B.mapping,envMapPMREM:re,envMapMaxLod:re?Lt.length-1:null,envMapSize:re?Lt[0].width:null,aoMap:he,lightMap:pe,bumpMap:we,normalMap:ue,displacementMap:me,emissiveMap:ye,normalMapObjectSpace:ue&&g.normalMapType===$l,normalMapTangentSpace:ue&&g.normalMapType===Oa,packedNormalMap:ue&&g.normalMapType===Oa&&_m(g.normalMap.format),metalnessMap:Ae,roughnessMap:ze,anisotropy:N,anisotropyMap:Vt,clearcoat:We,clearcoatMap:E,clearcoatNormalMap:h,clearcoatRoughnessMap:D,diffuseRoughness:ee,diffuseRoughnessMap:nt,dispersion:V,retroreflection:X,iridescence:wt,iridescenceMap:K,iridescenceThicknessMap:ot,sheen:pt,sheenColorMap:ct,sheenRoughnessMap:W,specularMap:Q,specularColorMap:ht,specularIntensityMap:I,transmission:yt,transmissionMap:j,thicknessMap:Z,gradientMap:it,opaque:g.transparent===!1&&g.blending===Qi&&g.alphaToCoverage===!1,alphaMap:rt,alphaTest:ut,alphaHash:It,combine:g.combine,mapUv:Ft&&_(g.map.channel),aoMapUv:he&&_(g.aoMap.channel),lightMapUv:pe&&_(g.lightMap.channel),bumpMapUv:we&&_(g.bumpMap.channel),normalMapUv:ue&&_(g.normalMap.channel),displacementMapUv:me&&_(g.displacementMap.channel),emissiveMapUv:ye&&_(g.emissiveMap.channel),metalnessMapUv:Ae&&_(g.metalnessMap.channel),roughnessMapUv:ze&&_(g.roughnessMap.channel),anisotropyMapUv:Vt&&_(g.anisotropyMap.channel),clearcoatMapUv:E&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:h&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&_(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&_(g.diffuseRoughnessMap.channel),iridescenceMapUv:K&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:W&&_(g.sheenRoughnessMap.channel),specularMapUv:Q&&_(g.specularMap.channel),specularColorMapUv:ht&&_(g.specularColorMap.channel),specularIntensityMapUv:I&&_(g.specularIntensityMap.channel),transmissionMapUv:j&&_(g.transmissionMap.channel),thicknessMapUv:Z&&_(g.thicknessMap.channel),alphaMapUv:rt&&_(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ue||N),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(Ft||rt),fog:!!tt,useFog:g.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&ue===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Mt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:xt,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:k.filter((_t)=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ft&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===oe,decodeVideoTextureEmissive:ye&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===oe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===He,flipSided:g.side===Ue,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Rt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&g.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function S(g){let x=[];if(g.shaderID)x.push(g.shaderID);else x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let A in g.defines)x.push(A),x.push(g.defines[A]);if(g.isRawShaderMaterial===!1)m(x,g),u(x,g),x.push(t.outputColorSpace);return x.push(g.customProgramCacheKey),x.join()}function m(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapPMREM),g.push(x.envMapMaxLod),g.push(x.envMapSize),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.diffuseRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.numSunLights),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numSunLightShadows),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.numLightProbeGrids),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function u(g,x){if(a.disableAll(),x.instancing)a.enable(0);if(x.instancingColor)a.enable(1);if(x.instancingMorph)a.enable(2);if(x.matcap)a.enable(3);if(x.envMap)a.enable(4);if(x.normalMapObjectSpace)a.enable(5);if(x.normalMapTangentSpace)a.enable(6);if(x.clearcoat)a.enable(7);if(x.iridescence)a.enable(8);if(x.alphaTest)a.enable(9);if(x.vertexColors)a.enable(10);if(x.vertexAlphas)a.enable(11);if(x.vertexUv1s)a.enable(12);if(x.vertexUv2s)a.enable(13);if(x.vertexUv3s)a.enable(14);if(x.vertexTangents)a.enable(15);if(x.anisotropy)a.enable(16);if(x.alphaHash)a.enable(17);if(x.batching)a.enable(18);if(x.dispersion)a.enable(19);if(x.retroreflection)a.enable(24);if(x.diffuseRoughness)a.enable(25);if(x.batchingColor)a.enable(20);if(x.gradientMap)a.enable(21);if(x.packedNormalMap)a.enable(22);if(x.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),x.fog)a.enable(0);if(x.useFog)a.enable(1);if(x.flatShading)a.enable(2);if(x.logarithmicDepthBuffer)a.enable(3);if(x.reversedDepthBuffer)a.enable(4);if(x.skinning)a.enable(5);if(x.morphTargets)a.enable(6);if(x.morphNormals)a.enable(7);if(x.morphColors)a.enable(8);if(x.premultipliedAlpha)a.enable(9);if(x.shadowMapEnabled)a.enable(10);if(x.doubleSided)a.enable(11);if(x.flipSided)a.enable(12);if(x.useDepthPacking)a.enable(13);if(x.dithering)a.enable(14);if(x.transmission)a.enable(15);if(x.sheen)a.enable(16);if(x.opaque)a.enable(17);if(x.pointsUvs)a.enable(18);if(x.decodeVideoTexture)a.enable(19);if(x.decodeVideoTextureEmissive)a.enable(20);if(x.alphaToCoverage)a.enable(21);if(x.numLightProbeGrids>0)a.enable(22);if(x.hasPositionAttribute)a.enable(23);g.push(a.mask)}function M(g){let x=f[g.type],A;if(x){let U=pn[x];A=cc.clone(U.uniforms)}else A=g.uniforms;return A}function T(g,x){let A=d.get(x);if(A!==void 0)++A.usedTimes;else A=new mm(t,x,g,s),c.push(A),d.set(x,A);return A}function b(g){if(--g.usedTimes===0){let x=c.indexOf(g);c[x]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:R}}function vm(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function ym(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Nc(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Dc(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(f){let _=0;if(f.isInstancedMesh)_+=2;if(f.isSkinnedMesh)_+=1;return _}function o(f,_,y,S,m,u){let M=t[e];if(M===void 0)M={id:f.id,object:f,geometry:_,material:y,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:u},t[e]=M;else M.id=f.id,M.object=f,M.geometry=_,M.material=y,M.materialVariant=a(f),M.groupOrder=S,M.renderOrder=f.renderOrder,M.z=m,M.group=u;return e++,M}function l(f,_,y,S,m,u,M){if(M.reversedDepth===!0)m=-m;let T=o(f,_,y,S,m,u);if(y.transmission>0)i.push(T);else if(y.transparent===!0)s.push(T);else n.push(T)}function c(f,_,y,S,m,u){let M=o(f,_,y,S,m,u);if(y.transmission>0)i.unshift(M);else if(y.transparent===!0)s.unshift(M);else n.unshift(M)}function d(f,_){if(n.length>1)n.sort(f||ym);if(i.length>1)i.sort(_||Nc);if(s.length>1)s.sort(_||Nc)}function p(){for(let f=e,_=t.length;f<_;f++){let y=t[f];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:d}}function Sm(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Dc,t.set(i,[a]);else if(s>=r.length)a=new Dc,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Mm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Dt};break;case"SpotLight":n={position:new F,direction:new F,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function bm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Em=0;function Tm(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wm(t){let e=new Mm,n=bm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new ne,a=new ne;function o(c){let d=0,p=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,y=0,S=0,m=0,u=0,M=0,T=0,b=0,w=0,R=0,g=0,x=0,A=0,U=0;c.sort(Tm);for(let k=0,tt=c.length;k<tt;k++){let C=c[k],{color:J,intensity:z,distance:B}=C,lt=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===ti)lt=C.shadow.map.texture;else lt=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)d+=J.r*z,p+=J.g*z,f+=J.b*z;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],z);U++}else if(C.isSunLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let et=C.shadow,at=n.get(C);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[y]=at,i.sunShadowMap[y]=lt;let xt=et.getViewportCount();for(let Y=0;Y<xt;Y++)i.sunShadowMatrix[S+Y]=et.getMatrix(Y),i.sunShadowCascade[S+Y]=et._cascadeData[Y];S+=xt,y++}i.sun[_]=q,_++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let et=C.shadow,at=n.get(C);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,i.directionalShadow[m]=at,i.directionalShadowMap[m]=lt,i.directionalShadowMatrix[m]=C.shadow.matrix,w++}i.directional[m]=q,m++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(J).multiplyScalar(z),q.distance=B,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[M]=q;let et=C.shadow;if(C.map){if(i.spotLightMap[x]=C.map,x++,et.updateMatrices(C),C.castShadow)A++}if(i.spotLightMatrix[M]=et.matrix,C.castShadow){let at=n.get(C);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,i.spotShadow[M]=at,i.spotShadowMap[M]=lt,g++}M++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(J).multiplyScalar(z),q.halfWidth.set(C.width*0.5,0,0),q.halfHeight.set(0,C.height*0.5,0),i.rectArea[T]=q,T++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let et=C.shadow,at=n.get(C);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,at.shadowCameraNear=et.camera.near,at.shadowCameraFar=et.camera.far,i.pointShadow[u]=at,i.pointShadowMap[u]=lt,i.pointShadowMatrix[u]=C.shadow.matrix,R++}i.point[u]=q,u++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(z),q.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[b]=q,b++}}if(T>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2;else i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2;i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;let P=i.hash;if(P.sunLength!==_||P.directionalLength!==m||P.pointLength!==u||P.spotLength!==M||P.rectAreaLength!==T||P.hemiLength!==b||P.numSunShadows!==y||P.numDirectionalShadows!==w||P.numPointShadows!==R||P.numSpotShadows!==g||P.numSpotMaps!==x||P.numLightProbes!==U)i.sun.length=_,i.directional.length=m,i.spot.length=M,i.rectArea.length=T,i.point.length=u,i.hemi.length=b,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,P.sunLength=_,P.directionalLength=m,P.pointLength=u,P.spotLength=M,P.rectAreaLength=T,P.hemiLength=b,P.numSunShadows=y,P.numDirectionalShadows=w,P.numPointShadows=R,P.numSpotShadows=g,P.numSpotMaps=x,P.numLightProbes=U,i.version=Em++}function l(c,d){let p=0,f=0,_=0,y=0,S=0,m=0,u=d.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let b=c[M];if(b.isSunLight){let w=i.sun[p];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(u),p++}else if(b.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(b.isSpotLight){let w=i.spot[y];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),y++}else if(b.isRectAreaLight){let w=i.rectArea[S];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(u),a.identity(),r.copy(b.matrixWorld),r.premultiply(u),a.extractRotation(r),w.halfWidth.set(b.width*0.5,0,0),w.halfHeight.set(0,b.height*0.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(b.isPointLight){let w=i.point[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(u),_++}else if(b.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(u),m++}}}return{setup:o,setupView:l,state:i}}function Uc(t){let e=new wm(t),n=[],i=[],s=[];function r(p){d.camera=p,n.length=0,i.length=0,s.length=0}function a(p){if(p.isLightProbeGrid)s.push(p);else n.push(p)}function o(p){i.push(p)}function l(){e.setup(n),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function c(p){e.setupView(n,p)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Am(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Uc(t),e.set(s,[o]);else if(r>=a.length)o=new Uc(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Rm=`void main() {
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
}`,Im=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Pm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Fc=new ne,fs=new F,xo=new F;function Lm(t,e,n){let i=new Kn,s=new kt,r=new kt,a=new fe,o=new to,l=new eo,c={},d=n.maxTextureSize,p={[wi]:Ue,[Ue]:wi,[He]:He},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Rm,fragmentShader:Cm}),_=f.clone();_.defines.HORIZONTAL_PASS=1;let y=new ve;y.setAttribute("position",new Ie(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let S=new te(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let u=this.type;this.render=function(R,g,x){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(R.length===0)return;if(this.type===cl)Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki;let A=t.getRenderTarget(),U=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;if(k.setBlending(Qn),k.buffers.depth.getReversed()===!0)k.buffers.color.setClear(0,0,0,0);else k.buffers.color.setClear(1,1,1,1);k.buffers.depth.setTest(!0),k.setScissorTest(!1);let tt=u!==this.type;if(tt)g.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((J)=>J.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,J=R.length;C<J;C++){let z=R[C],B=z.shadow;if(B===void 0){Nt("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let lt=B.getFrameExtents();if(s.multiply(lt),r.copy(B.mapSize),s.x>d||s.y>d){if(s.x>d)r.x=Math.floor(d/lt.x),s.x=r.x*lt.x,B.mapSize.x=r.x;if(s.y>d)r.y=Math.floor(d/lt.y),s.y=r.y*lt.y,B.mapSize.y=r.y}let q=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||tt===!0){if(B.map!==null){if(B.map.depthTexture!==null)B.map.depthTexture.dispose(),B.map.depthTexture=null;B.map.dispose()}if(this.type===Ti){if(z.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Je(s.x,s.y,{format:ti,type:un,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Hn(s.x,s.y,bn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Ci,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fn,B.map.depthTexture.magFilter=Fn}else{if(z.isPointLight)B.map=new vr(s.x),B.map.depthTexture=new cr(s.x,Bn);else B.map=new Je(s.x,s.y),B.map.depthTexture=new Hn(s.x,s.y,Bn);if(B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Ci,this.type===Ki)B.map.depthTexture.compareFunction=q?ka:Ga,B.map.depthTexture.minFilter=Ze,B.map.depthTexture.magFilter=Ze;else B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fn,B.map.depthTexture.magFilter=Fn}B.camera.updateProjectionMatrix()}if(B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y))B.map.setSize(s.x,s.y);let et=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();if(z.isPointLight!==!0)B.updateMatrices(z,x);let at=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:x.layers;for(let xt=0;xt<et;xt++){let Y=B.getCamera(xt);if(z.isPointLight){let{camera:st,matrix:St}=B,Ct=z.distance||st.far;if(Ct!==st.far)st.far=Ct,st.updateProjectionMatrix();fs.setFromMatrixPosition(z.matrixWorld),st.position.copy(fs),xo.copy(st.position),xo.add(Im[xt]),st.up.copy(Pm[xt]),st.lookAt(xo),st.updateMatrixWorld(),St.makeTranslation(-fs.x,-fs.y,-fs.z),Fc.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Fc,st.coordinateSystem,st.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,xt),t.clear();else{if(xt===0)t.setRenderTarget(B.map),t.clear();let st=B.getViewport(xt);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),k.viewport(a)}i=B.getFrustum(xt),b(g,x,Y,z,at,this.type)}if(B.isPointLightShadow!==!0&&this.type===Ti)M(B,x);B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(A,U,P)};function M(R,g){let x=e.update(S);if(f.defines.VSM_SAMPLES!==R.blurSamples)f.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new Je(s.x,s.y,{format:ti,type:un});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(g,null,x,f,S,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value.set(R.map.width,R.map.height),_.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(g,null,x,_,S,null)}function T(R,g,x,A){let U=null,P=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)U=P;else if(U=x.isPointLight===!0?l:o,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=U.uuid,tt=g.uuid,C=c[k];if(C===void 0)C={},c[k]=C;let J=C[tt];if(J===void 0)J=U.clone(),C[tt]=J,g.addEventListener("dispose",w);U=J}if(U.visible=g.visible,U.wireframe=g.wireframe,A===Ti)U.side=g.shadowSide!==null?g.shadowSide:g.side;else U.side=g.shadowSide!==null?g.shadowSide:p[g.side];if(U.alphaMap=g.alphaMap,U.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,U.map=g.map,U.clipShadows=g.clipShadows,U.clippingPlanes=g.clippingPlanes,U.clipIntersection=g.clipIntersection,U.displacementMap=g.displacementMap,U.displacementScale=g.displacementScale,U.displacementBias=g.displacementBias,U.wireframeLinewidth=g.wireframeLinewidth,U.linewidth=g.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let k=t.properties.get(U);k.light=x}return U}function b(R,g,x,A,U,P){if(R.visible===!1)return;if(R.layers.test(U)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&P===Ti)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);let C=e.update(R),J=R.material;if(Array.isArray(J)){let z=C.groups;for(let B=0,lt=z.length;B<lt;B++){let q=z[B],et=J[q.materialIndex];if(et&&et.visible){let at=T(R,et,A,P);R.onBeforeShadow(t,R,g,x,C,at,q),t.renderBufferDirect(x,null,C,at,R,q),R.onAfterShadow(t,R,g,x,C,at,q)}}}else if(J.visible){let z=T(R,J,A,P);R.onBeforeShadow(t,R,g,x,C,z,null),t.renderBufferDirect(x,null,C,z,R,null),R.onAfterShadow(t,R,g,x,C,z,null)}}}let tt=R.children;for(let C=0,J=tt.length;C<J;C++)b(tt[C],g,x,A,U,P)}function w(R){R.target.removeEventListener("dispose",w);for(let x in c){let A=c[x],U=R.target.uuid;if(U in A)A[U].dispose(),delete A[U]}}}function Nm(t,e){function n(){let I=!1,j=new fe,Z=null,it=new fe(0,0,0,0);return{setMask:function(rt){if(Z!==rt&&!I)t.colorMask(rt,rt,rt,rt),Z=rt},setLocked:function(rt){I=rt},setClear:function(rt,ut,It,Rt,gt){if(gt===!0)rt*=Rt,ut*=Rt,It*=Rt;if(j.set(rt,ut,It,Rt),it.equals(j)===!1)t.clearColor(rt,ut,It,Rt),it.copy(j)},reset:function(){I=!1,Z=null,it.set(-1,0,0,0)}}}function i(){let I=!1,j=!1,Z=null,it=null,rt=null;return{setReversed:function(ut){if(j!==ut){let It=e.get("EXT_clip_control");if(ut)It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT);else It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);j=ut;let Rt=rt;rt=null,this.setClear(Rt)}},getReversed:function(){return j},setTest:function(ut){if(ut)Mt(t.DEPTH_TEST);else $t(t.DEPTH_TEST)},setMask:function(ut){if(Z!==ut&&!I)t.depthMask(ut),Z=ut},setFunc:function(ut){if(j)ut=rc[ut];if(it!==ut){switch(ut){case Il:t.depthFunc(t.NEVER);break;case Pl:t.depthFunc(t.ALWAYS);break;case Ll:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case Nl:t.depthFunc(t.EQUAL);break;case Dl:t.depthFunc(t.GEQUAL);break;case Ul:t.depthFunc(t.GREATER);break;case Fl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}it=ut}},setLocked:function(ut){I=ut},setClear:function(ut){if(rt!==ut){if(rt=ut,j)ut=1-ut;t.clearDepth(ut)}},reset:function(){I=!1,Z=null,it=null,rt=null,j=!1}}}function s(){let I=!1,j=null,Z=null,it=null,rt=null,ut=null,It=null,Rt=null,gt=null;return{setTest:function(Lt){if(!I)if(Lt)Mt(t.STENCIL_TEST);else $t(t.STENCIL_TEST)},setMask:function(Lt){if(j!==Lt&&!I)t.stencilMask(Lt),j=Lt},setFunc:function(Lt,Gt,_t){if(Z!==Lt||it!==Gt||rt!==_t)t.stencilFunc(Lt,Gt,_t),Z=Lt,it=Gt,rt=_t},setOp:function(Lt,Gt,_t){if(ut!==Lt||It!==Gt||Rt!==_t)t.stencilOp(Lt,Gt,_t),ut=Lt,It=Gt,Rt=_t},setLocked:function(Lt){I=Lt},setClear:function(Lt){if(gt!==Lt)t.clearStencil(Lt),gt=Lt},reset:function(){I=!1,j=null,Z=null,it=null,rt=null,ut=null,It=null,Rt=null,gt=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,d={},p={},f={},_=new WeakMap,y=[],S=null,m=!1,u=null,M=null,T=null,b=null,w=null,R=null,g=null,x=new Dt(0,0,0),A=0,U=!1,P=null,k=null,tt=null,C=null,J=null,z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,lt=0,q=t.getParameter(t.VERSION);if(q.indexOf("WebGL")!==-1)lt=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=lt>=1;else if(q.indexOf("OpenGL ES")!==-1)lt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=lt>=2;let et=null,at={},xt=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),st=new fe().fromArray(xt),St=new fe().fromArray(Y);function Ct(I,j,Z,it){let rt=new Uint8Array(4),ut=t.createTexture();t.bindTexture(I,ut),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let It=0;It<Z;It++)if(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)t.texImage3D(j,0,t.RGBA,1,1,it,0,t.RGBA,t.UNSIGNED_BYTE,rt);else t.texImage2D(j+It,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,rt);return ut}let Pt={};Pt[t.TEXTURE_2D]=Ct(t.TEXTURE_2D,t.TEXTURE_2D,1),Pt[t.TEXTURE_CUBE_MAP]=Ct(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[t.TEXTURE_2D_ARRAY]=Ct(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pt[t.TEXTURE_3D]=Ct(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Mt(t.DEPTH_TEST),a.setFunc(Zr),we(!1),ue(Xr),Mt(t.CULL_FACE),he(Qn);function Mt(I){if(d[I]!==!0)t.enable(I),d[I]=!0}function $t(I){if(d[I]!==!1)t.disable(I),d[I]=!1}function zt(I,j){if(f[I]!==j){if(t.bindFramebuffer(I,j),f[I]=j,I===t.DRAW_FRAMEBUFFER)f[t.FRAMEBUFFER]=j;if(I===t.FRAMEBUFFER)f[t.DRAW_FRAMEBUFFER]=j;return!0}return!1}function Ft(I,j){let Z=y,it=!1;if(I){if(Z=_.get(j),Z===void 0)Z=[],_.set(j,Z);let rt=I.textures;if(Z.length!==rt.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ut=0,It=rt.length;ut<It;ut++)Z[ut]=t.COLOR_ATTACHMENT0+ut;Z.length=rt.length,it=!0}}else if(Z[0]!==t.BACK)Z[0]=t.BACK,it=!0;if(it)t.drawBuffers(Z)}function Qt(I){if(S!==I)return t.useProgram(I),S=I,!0;return!1}let Wt={[Ai]:t.FUNC_ADD,[ul]:t.FUNC_SUBTRACT,[dl]:t.FUNC_REVERSE_SUBTRACT};Wt[fl]=t.MIN,Wt[pl]=t.MAX;let re={[ml]:t.ZERO,[gl]:t.ONE,[_l]:t.SRC_COLOR,[vl]:t.SRC_ALPHA,[Tl]:t.SRC_ALPHA_SATURATE,[bl]:t.DST_COLOR,[Sl]:t.DST_ALPHA,[xl]:t.ONE_MINUS_SRC_COLOR,[yl]:t.ONE_MINUS_SRC_ALPHA,[El]:t.ONE_MINUS_DST_COLOR,[Ml]:t.ONE_MINUS_DST_ALPHA,[wl]:t.CONSTANT_COLOR,[Al]:t.ONE_MINUS_CONSTANT_COLOR,[Rl]:t.CONSTANT_ALPHA,[Cl]:t.ONE_MINUS_CONSTANT_ALPHA};function he(I,j,Z,it,rt,ut,It,Rt,gt,Lt){if(I===Qn){if(m===!0)$t(t.BLEND),m=!1;return}if(m===!1)Mt(t.BLEND),m=!0;if(I!==hl){if(I!==u||Lt!==U){if(M!==Ai||w!==Ai)t.blendEquation(t.FUNC_ADD),M=Ai,w=Ai;if(Lt)switch(I){case Qi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ye:t.blendFunc(t.ONE,t.ONE);break;case qr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yr:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ut("WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ye:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case qr:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yr:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",I);break}T=null,b=null,R=null,g=null,x.set(0,0,0),A=0,u=I,U=Lt}return}if(rt=rt||j,ut=ut||Z,It=It||it,j!==M||rt!==w)t.blendEquationSeparate(Wt[j],Wt[rt]),M=j,w=rt;if(Z!==T||it!==b||ut!==R||It!==g)t.blendFuncSeparate(re[Z],re[it],re[ut],re[It]),T=Z,b=it,R=ut,g=It;if(Rt.equals(x)===!1||gt!==A)t.blendColor(Rt.r,Rt.g,Rt.b,gt),x.copy(Rt),A=gt;u=I,U=!1}function pe(I,j){I.side===He?$t(t.CULL_FACE):Mt(t.CULL_FACE);let Z=I.side===Ue;if(j)Z=!Z;we(Z),I.blending===Qi&&I.transparent===!1?he(Qn):he(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let it=I.stencilWrite;if(o.setTest(it),it)o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass);ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Mt(t.SAMPLE_ALPHA_TO_COVERAGE):$t(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(I){if(P!==I){if(I)t.frontFace(t.CW);else t.frontFace(t.CCW);P=I}}function ue(I){if(I!==ol){if(Mt(t.CULL_FACE),I!==k)if(I===Xr)t.cullFace(t.BACK);else if(I===ll)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else $t(t.CULL_FACE);k=I}function me(I){if(I!==tt){if(B)t.lineWidth(I);tt=I}}function ye(I,j,Z){if(I){if(Mt(t.POLYGON_OFFSET_FILL),C!==j||J!==Z){if(C=j,J=Z,a.getReversed())j=-j,Z=-Z;t.polygonOffset(j,Z)}}else $t(t.POLYGON_OFFSET_FILL)}function Ae(I){if(I)Mt(t.SCISSOR_TEST);else $t(t.SCISSOR_TEST)}function ze(I){if(I===void 0)I=t.TEXTURE0+z-1;if(et!==I)t.activeTexture(I),et=I}function N(I,j,Z){if(Z===void 0)if(et===null)Z=t.TEXTURE0+z-1;else Z=et;let it=at[Z];if(it===void 0)it={type:void 0,texture:void 0},at[Z]=it;if(it.type!==I||it.texture!==j){if(et!==Z)t.activeTexture(Z),et=Z;t.bindTexture(I,j||Pt[I]),it.type=I,it.texture=j}}function We(){let I=at[et];if(I!==void 0&&I.type!==void 0)t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0}function ee(){try{t.compressedTexImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function X(){try{t.texSubImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function wt(){try{t.texSubImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function pt(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function yt(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function Vt(){try{t.texStorage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function E(){try{t.texStorage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function h(){try{t.texImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function D(){try{t.texImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function nt(I){if(p[I]!==void 0)return p[I];else return t.getParameter(I)}function K(I,j){if(p[I]!==j)t.pixelStorei(I,j),p[I]=j}function ot(I){if(st.equals(I)===!1)t.scissor(I.x,I.y,I.z,I.w),st.copy(I)}function ct(I){if(St.equals(I)===!1)t.viewport(I.x,I.y,I.z,I.w),St.copy(I)}function W(I,j){let Z=c.get(j);if(Z===void 0)Z=new WeakMap,c.set(j,Z);let it=Z.get(I);if(it===void 0)it=t.getUniformBlockIndex(j,I.name),t.uniformBlockBinding(j,it,it),Z.set(I,it)}function Q(I,j,Z){let rt=c.get(j).get(I);if(l[rt]!==Z)t.bindBufferBase(t.UNIFORM_BUFFER,rt,Z),l[rt]=Z}function ht(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},et=null,at={},f={},l={},_=new WeakMap,y=[],S=null,m=!1,u=null,M=null,T=null,b=null,w=null,R=null,g=null,x=new Dt(0,0,0),A=0,U=!1,P=null,k=null,tt=null,C=null,J=null,st.set(0,0,t.canvas.width,t.canvas.height),St.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Mt,disable:$t,bindFramebuffer:zt,drawBuffers:Ft,useProgram:Qt,setBlending:he,setMaterial:pe,setFlipSided:we,setCullFace:ue,setLineWidth:me,setPolygonOffset:ye,setScissorTest:Ae,activeTexture:ze,bindTexture:N,unbindTexture:We,compressedTexImage2D:ee,compressedTexImage3D:V,texImage2D:h,texImage3D:D,pixelStorei:K,getParameter:nt,updateUBOMapping:W,uniformBlockBinding:Q,texStorage2D:Vt,texStorage3D:E,texSubImage2D:X,texSubImage3D:wt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:ot,viewport:ct,reset:ht}}function Dm(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,d=new WeakMap,p=new Set,f,_=new WeakMap,y=new Set,S=new FinalizationRegistry((E)=>y.delete(E)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function u(E,h){return m?new OffscreenCanvas(E,h):$i("canvas")}function M(E,h,D){let nt=1,K=Vt(E);if(K.width>D||K.height>D)nt=D/Math.max(K.width,K.height);if(nt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ot=Math.floor(nt*K.width),ct=Math.floor(nt*K.height);if(f===void 0)f=u(ot,ct);let W=h?u(ot,ct):f;return W.width=ot,W.height=ct,W.getContext("2d").drawImage(E,0,0,ot,ct),Nt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+ct+")."),W}else{if("data"in E)Nt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+").");return E}return E}function T(E){return E.generateMipmaps}function b(E){t.generateMipmap(E)}function w(E){if(E.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function R(E,h,D,nt,K,ot=!1){if(E!==null){if(t[E]!==void 0)return t[E];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ct;if(nt){if(ct=e.get("EXT_texture_norm16"),!ct)Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let W=h;if(h===t.RED){if(D===t.FLOAT)W=t.R32F;if(D===t.HALF_FLOAT)W=t.R16F;if(D===t.UNSIGNED_BYTE)W=t.R8;if(D===t.UNSIGNED_SHORT&&ct)W=ct.R16_EXT;if(D===t.SHORT&&ct)W=ct.R16_SNORM_EXT}if(h===t.RED_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.R8UI;if(D===t.UNSIGNED_SHORT)W=t.R16UI;if(D===t.UNSIGNED_INT)W=t.R32UI;if(D===t.BYTE)W=t.R8I;if(D===t.SHORT)W=t.R16I;if(D===t.INT)W=t.R32I}if(h===t.RG){if(D===t.FLOAT)W=t.RG32F;if(D===t.HALF_FLOAT)W=t.RG16F;if(D===t.UNSIGNED_BYTE)W=t.RG8;if(D===t.UNSIGNED_SHORT&&ct)W=ct.RG16_EXT;if(D===t.SHORT&&ct)W=ct.RG16_SNORM_EXT}if(h===t.RG_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.RG8UI;if(D===t.UNSIGNED_SHORT)W=t.RG16UI;if(D===t.UNSIGNED_INT)W=t.RG32UI;if(D===t.BYTE)W=t.RG8I;if(D===t.SHORT)W=t.RG16I;if(D===t.INT)W=t.RG32I}if(h===t.RGB_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.RGB8UI;if(D===t.UNSIGNED_SHORT)W=t.RGB16UI;if(D===t.UNSIGNED_INT)W=t.RGB32UI;if(D===t.BYTE)W=t.RGB8I;if(D===t.SHORT)W=t.RGB16I;if(D===t.INT)W=t.RGB32I}if(h===t.RGBA_INTEGER){if(D===t.UNSIGNED_BYTE)W=t.RGBA8UI;if(D===t.UNSIGNED_SHORT)W=t.RGBA16UI;if(D===t.UNSIGNED_INT)W=t.RGBA32UI;if(D===t.BYTE)W=t.RGBA8I;if(D===t.SHORT)W=t.RGBA16I;if(D===t.INT)W=t.RGBA32I}if(h===t.RGB){if(D===t.UNSIGNED_SHORT&&ct)W=ct.RGB16_EXT;if(D===t.SHORT&&ct)W=ct.RGB16_SNORM_EXT;if(D===t.UNSIGNED_INT_5_9_9_9_REV)W=t.RGB9_E5;if(D===t.UNSIGNED_INT_10F_11F_11F_REV)W=t.R11F_G11F_B10F}if(h===t.RGBA){let Q=ot?za:Yt.getTransfer(K);if(D===t.FLOAT)W=t.RGBA32F;if(D===t.HALF_FLOAT)W=t.RGBA16F;if(D===t.UNSIGNED_BYTE)W=Q===oe?t.SRGB8_ALPHA8:t.RGBA8;if(D===t.UNSIGNED_SHORT&&ct)W=ct.RGBA16_EXT;if(D===t.SHORT&&ct)W=ct.RGBA16_SNORM_EXT;if(D===t.UNSIGNED_SHORT_4_4_4_4)W=t.RGBA4;if(D===t.UNSIGNED_SHORT_5_5_5_1)W=t.RGB5_A1}if(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)e.get("EXT_color_buffer_float");return W}function g(E,h){let D;if(E){if(h===null||h===Bn||h===jn)D=t.DEPTH24_STENCIL8;else if(h===bn)D=t.DEPTH32F_STENCIL8;else if(h===ns)D=t.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(h===null||h===Bn||h===jn)D=t.DEPTH_COMPONENT24;else if(h===bn)D=t.DEPTH_COMPONENT32F;else if(h===ns)D=t.DEPTH_COMPONENT16;return D}function x(E,h){if(T(E)===!0||E.isFramebufferTexture&&E.minFilter!==Fn&&E.minFilter!==Ze)return Math.log2(Math.max(h.width,h.height))+1;else if(E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return h.mipmaps.length;else return 1}function A(E){let h=new WeakRef(E);i.get(E).__ref=h,y.add(h),S.register(E,h,h)}function U(E){let h=i.get(E).__ref;if(h===void 0)return;y.delete(h),S.unregister(h)}function P(E){tt(E.target)}function k(E){C(E.target)}function tt(E){if(E.removeEventListener("dispose",P),U(E),z(E),E.isVideoTexture)d.delete(E);if(E.isHTMLTexture)p.delete(E)}function C(E){E.removeEventListener("dispose",k),U(E),lt(E)}function J(){for(let E of y){let h=E.deref();if(h===void 0)continue;if(h.isRenderTarget===!0)C(h);else tt(h)}y.clear(),p.clear()}function z(E){let h=i.get(E);if(h.__webglInit===void 0)return;let D=E.source,nt=_.get(D);if(nt){let K=nt[h.__cacheKey];if(K.usedTimes--,K.usedTimes===0)B(E);if(Object.keys(nt).length===0)_.delete(D)}i.remove(E)}function B(E){let h=i.get(E);t.deleteTexture(h.__webglTexture);let D=E.source,nt=_.get(D);delete nt[h.__cacheKey],a.memory.textures--}function lt(E){let h=i.get(E);if(h.__depthDisposeCallback)h.__depthDisposeCallback();let D=E.depthTexture;if(D&&D.renderTarget===E)tt(D);if(E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(h.__webglFramebuffer[K]))for(let ot=0;ot<h.__webglFramebuffer[K].length;ot++)t.deleteFramebuffer(h.__webglFramebuffer[K][ot]);else t.deleteFramebuffer(h.__webglFramebuffer[K]);if(h.__webglDepthbuffer)t.deleteRenderbuffer(h.__webglDepthbuffer[K])}else{if(Array.isArray(h.__webglFramebuffer))for(let K=0;K<h.__webglFramebuffer.length;K++)t.deleteFramebuffer(h.__webglFramebuffer[K]);else t.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer)t.deleteRenderbuffer(h.__webglDepthbuffer);if(h.__webglMultisampledFramebuffer)t.deleteFramebuffer(h.__webglMultisampledFramebuffer);if(h.__webglColorRenderbuffer){for(let K=0;K<h.__webglColorRenderbuffer.length;K++)if(h.__webglColorRenderbuffer[K])t.deleteRenderbuffer(h.__webglColorRenderbuffer[K])}if(h.__webglDepthRenderbuffer)t.deleteRenderbuffer(h.__webglDepthRenderbuffer)}let nt=E.textures;for(let K=0,ot=nt.length;K<ot;K++){let ct=i.get(nt[K]);if(ct.__webglTexture)t.deleteTexture(ct.__webglTexture),a.memory.textures--;i.remove(nt[K])}i.remove(E)}let q=0;function et(){q=0}function at(){return q}function xt(E){q=E}function Y(){let E=q;if(E>=s.maxTextures)Nt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures);return q+=1,E}function st(E){let h=[];return h.push(E.wrapS),h.push(E.wrapT),h.push(E.wrapR||0),h.push(E.magFilter),h.push(E.minFilter),h.push(E.anisotropy),h.push(E.internalFormat),h.push(E.format),h.push(E.type),h.push(E.generateMipmaps),h.push(E.mipmapsAutoUpdate),h.push(E.premultiplyAlpha),h.push(E.flipY),h.push(E.unpackAlignment),h.push(E.colorSpace),h.join()}function St(E,h){let D=i.get(E);if(E.isVideoTexture)pt(E);if(E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&D.__version!==E.version){let nt=E.image;if(nt===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(D,E,h);return}}else if(E.isExternalTexture)D.__webglTexture=E.sourceTexture?E.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+h)}function Ct(E,h){let D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){pe(D,E,h);return}else if(E.isExternalTexture)D.__webglTexture=E.sourceTexture?E.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+h)}function Pt(E,h){let D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){pe(D,E,h);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+h)}function Mt(E,h){let D=i.get(E);if(E.version>0&&D.__version!==E.version){we(D,E,h);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+h)}let $t={[Gl]:t.REPEAT,[qs]:t.CLAMP_TO_EDGE,[kl]:t.MIRRORED_REPEAT},zt={[Fn]:t.NEAREST,[Hl]:t.NEAREST_MIPMAP_NEAREST,[es]:t.NEAREST_MIPMAP_LINEAR,[Ze]:t.LINEAR,[Ys]:t.LINEAR_MIPMAP_NEAREST,[On]:t.LINEAR_MIPMAP_LINEAR},Ft={[Kl]:t.NEVER,[Ha]:t.ALWAYS,[Ql]:t.LESS,[Ga]:t.LEQUAL,[jl]:t.EQUAL,[ka]:t.GEQUAL,[tc]:t.GREATER,[ec]:t.NOTEQUAL};function Qt(E,h){if(h.type===bn&&e.has("OES_texture_float_linear")===!1&&(h.magFilter===Ze||h.magFilter===Ys||h.magFilter===es||h.magFilter===On||h.minFilter===Ze||h.minFilter===Ys||h.minFilter===es||h.minFilter===On))Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(E,t.TEXTURE_WRAP_S,$t[h.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,$t[h.wrapT]),E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)t.texParameteri(E,t.TEXTURE_WRAP_R,$t[h.wrapR]);if(t.texParameteri(E,t.TEXTURE_MAG_FILTER,zt[h.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,zt[h.minFilter]),h.compareFunction)t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Ft[h.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===Fn)return;if(h.minFilter!==es&&h.minFilter!==On)return;if(h.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||i.get(h).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,s.getMaxAnisotropy())),i.get(h).__currentAnisotropy=h.anisotropy}}}function Wt(E,h){let D=!1;if(E.__webglInit===void 0)E.__webglInit=!0,h.addEventListener("dispose",P),A(h);let nt=h.source,K=_.get(nt);if(K===void 0)K={},_.set(nt,K);let ot=st(h);if(ot!==E.__cacheKey){if(K[ot]===void 0)K[ot]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0;K[ot].usedTimes++;let ct=K[E.__cacheKey];if(ct!==void 0){if(K[E.__cacheKey].usedTimes--,ct.usedTimes===0)B(h)}E.__cacheKey=ot,E.__webglTexture=K[ot].texture}return D}function re(E,h,D){return Math.floor(Math.floor(E/D)/h)}function he(E,h,D,nt){let ot=E.updateRanges;if(ot.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,h.width,h.height,D,nt,h.data);else{ot.sort((I,j)=>I.start-j.start);let ct=0;for(let I=1;I<ot.length;I++){let j=ot[ct],Z=ot[I],it=j.start+j.count,rt=re(Z.start,h.width,4),ut=re(j.start,h.width,4);if(Z.start<=it+1&&rt===ut&&re(Z.start+Z.count-1,h.width,4)===rt)j.count=Math.max(j.count,Z.start+Z.count-j.start);else++ct,ot[ct]=Z}ot.length=ct+1;let W=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ht=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,h.width);for(let I=0,j=ot.length;I<j;I++){let Z=ot[I],it=Math.floor(Z.start/4),rt=Math.ceil(Z.count/4),ut=it%h.width,It=Math.floor(it/h.width),Rt=rt,gt=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(t.UNPACK_SKIP_ROWS,It),n.texSubImage2D(t.TEXTURE_2D,0,ut,It,Rt,1,D,nt,h.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,W),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ht)}}function pe(E,h,D){let nt=t.TEXTURE_2D;if(h.isDataArrayTexture||h.isCompressedArrayTexture)nt=t.TEXTURE_2D_ARRAY;if(h.isData3DTexture)nt=t.TEXTURE_3D;let K=Wt(E,h),ot=h.source;n.bindTexture(nt,E.__webglTexture,t.TEXTURE0+D);let ct=i.get(ot);if(ot.version!==ct.__version||K===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&h.image instanceof ImageBitmap)===!1){let gt=Yt.getPrimaries(Yt.workingColorSpace),Lt=h.colorSpace===ei?null:Yt.getPrimaries(h.colorSpace),Gt=h.colorSpace===ei||gt===Lt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,h.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}n.pixelStorei(t.UNPACK_ALIGNMENT,h.unpackAlignment);let Q=M(h.image,!1,s.maxTextureSize);Q=yt(h,Q);let ht=r.convert(h.format,h.colorSpace),I=r.convert(h.type),j=R(h.internalFormat,ht,I,h.normalized,h.colorSpace,h.isVideoTexture);Qt(nt,h);let Z,it=h.mipmaps,rt=h.isVideoTexture!==!0,ut=ct.__version===void 0||K===!0,It=ot.dataReady,Rt=x(h,Q);if(h.isDepthTexture){if(j=g(h.format===zn,h.type),ut)if(rt)n.texStorage2D(t.TEXTURE_2D,1,j,Q.width,Q.height);else n.texImage2D(t.TEXTURE_2D,0,j,Q.width,Q.height,0,ht,I,null)}else if(h.isDataTexture)if(it.length>0){if(rt&&ut)n.texStorage2D(t.TEXTURE_2D,Rt,j,it[0].width,it[0].height);for(let gt=0,Lt=it.length;gt<Lt;gt++)if(Z=it[gt],rt){if(It)n.texSubImage2D(t.TEXTURE_2D,gt,0,0,Z.width,Z.height,ht,I,Z.data)}else n.texImage2D(t.TEXTURE_2D,gt,j,Z.width,Z.height,0,ht,I,Z.data);h.generateMipmaps=!1}else if(rt){if(ut)n.texStorage2D(t.TEXTURE_2D,Rt,j,Q.width,Q.height);if(It)he(h,Q,ht,I)}else n.texImage2D(t.TEXTURE_2D,0,j,Q.width,Q.height,0,ht,I,Q.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){if(rt&&ut)n.texStorage3D(t.TEXTURE_2D_ARRAY,Rt,j,it[0].width,it[0].height,Q.depth);for(let gt=0,Lt=it.length;gt<Lt;gt++)if(Z=it[gt],h.format!==En)if(ht!==null)if(rt){if(It)if(h.layerUpdates.size>0){let Gt=go(Z.width,Z.height,h.format,h.type);for(let _t of h.layerUpdates){let se=Z.data.subarray(_t*Gt/Z.data.BYTES_PER_ELEMENT,(_t+1)*Gt/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,gt,0,0,_t,Z.width,Z.height,1,ht,se)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,gt,0,0,0,Z.width,Z.height,Q.depth,ht,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,gt,j,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(rt){if(It)n.texSubImage3D(t.TEXTURE_2D_ARRAY,gt,0,0,0,Z.width,Z.height,Q.depth,ht,I,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,gt,j,Z.width,Z.height,Q.depth,0,ht,I,Z.data);if(h.layerUpdates.size>0)h.clearLayerUpdates()}else{if(rt&&ut)n.texStorage2D(t.TEXTURE_2D,Rt,j,it[0].width,it[0].height);for(let gt=0,Lt=it.length;gt<Lt;gt++)if(Z=it[gt],h.format!==En)if(ht!==null)if(rt){if(It)n.compressedTexSubImage2D(t.TEXTURE_2D,gt,0,0,Z.width,Z.height,ht,Z.data)}else n.compressedTexImage2D(t.TEXTURE_2D,gt,j,Z.width,Z.height,0,Z.data);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(rt){if(It)n.texSubImage2D(t.TEXTURE_2D,gt,0,0,Z.width,Z.height,ht,I,Z.data)}else n.texImage2D(t.TEXTURE_2D,gt,j,Z.width,Z.height,0,ht,I,Z.data)}else if(h.isDataArrayTexture)if(rt){if(ut)n.texStorage3D(t.TEXTURE_2D_ARRAY,Rt,j,Q.width,Q.height,Q.depth);if(It)if(h.layerUpdates.size>0){let gt=go(Q.width,Q.height,h.format,h.type);for(let Lt of h.layerUpdates){let Gt=Q.data.subarray(Lt*gt/Q.data.BYTES_PER_ELEMENT,(Lt+1)*gt/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Lt,Q.width,Q.height,1,ht,I,Gt)}h.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ht,I,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ht,I,Q.data);else if(h.isData3DTexture)if(rt){if(ut)n.texStorage3D(t.TEXTURE_3D,Rt,j,Q.width,Q.height,Q.depth);if(It)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ht,I,Q.data)}else n.texImage3D(t.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ht,I,Q.data);else if(h.isFramebufferTexture){if(ut)if(rt)n.texStorage2D(t.TEXTURE_2D,Rt,j,Q.width,Q.height);else{let gt=Q.width,Lt=Q.height;for(let Gt=0;Gt<Rt;Gt++)n.texImage2D(t.TEXTURE_2D,Gt,j,gt,Lt,0,ht,I,null),gt>>=1,Lt>>=1}}else if(h.isHTMLTexture){if("texElementImage2D"in t){let gt=t.canvas;if(!gt.hasAttribute("layoutsubtree"))gt.setAttribute("layoutsubtree","true");if(Q.parentNode!==gt){gt.appendChild(Q),p.add(h),gt.onpaint=(Lt)=>{let Gt=Lt.changedElements;for(let _t of p)if(Gt.includes(_t.image))_t.needsUpdate=!0},gt.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{let{RGBA:Gt,RGBA:_t,UNSIGNED_BYTE:se}=t;t.texElementImage2D(t.TEXTURE_2D,0,Gt,_t,se,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(it.length>0){if(rt&&ut){let gt=Vt(it[0]);n.texStorage2D(t.TEXTURE_2D,Rt,j,gt.width,gt.height)}for(let gt=0,Lt=it.length;gt<Lt;gt++)if(Z=it[gt],rt){if(It)n.texSubImage2D(t.TEXTURE_2D,gt,0,0,ht,I,Z)}else n.texImage2D(t.TEXTURE_2D,gt,j,ht,I,Z);h.generateMipmaps=!1}else if(rt){if(ut){let gt=Vt(Q);n.texStorage2D(t.TEXTURE_2D,Rt,j,gt.width,gt.height)}if(It)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ht,I,Q)}else n.texImage2D(t.TEXTURE_2D,0,j,ht,I,Q);if(T(h)&&h.mipmapsAutoUpdate===!0)b(nt);if(ct.__version=ot.version,h.onUpdate)h.onUpdate(h)}E.__version=h.version}function we(E,h,D){if(h.image.length!==6)return;let nt=Wt(E,h),K=h.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+D);let ot=i.get(K);if(K.version!==ot.__version||nt===!0){n.activeTexture(t.TEXTURE0+D);let ct=Yt.getPrimaries(Yt.workingColorSpace),W=h.colorSpace===ei?null:Yt.getPrimaries(h.colorSpace),Q=h.colorSpace===ei||ct===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,h.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,h.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ht=h.isCompressedTexture||h.image[0].isCompressedTexture,I=h.image[0]&&h.image[0].isDataTexture,j=[];for(let _t=0;_t<6;_t++){if(!ht&&!I)j[_t]=M(h.image[_t],!0,s.maxCubemapSize);else j[_t]=I?h.image[_t].image:h.image[_t];j[_t]=yt(h,j[_t])}let Z=j[0],it=r.convert(h.format,h.colorSpace),rt=r.convert(h.type),ut=R(h.internalFormat,it,rt,h.normalized,h.colorSpace),It=h.isVideoTexture!==!0,Rt=ot.__version===void 0||nt===!0,gt=K.dataReady,Lt=x(h,Z);Qt(t.TEXTURE_CUBE_MAP,h);let Gt;if(h.isDepthTexture){if(ut=g(h.format===zn,h.type),Rt)if(It)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ut,Z.width,Z.height);else for(let _t=0;_t<6;_t++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,Z.width,Z.height,0,it,rt,null)}else if(ht){if(It&&Rt)n.texStorage2D(t.TEXTURE_CUBE_MAP,Lt,ut,Z.width,Z.height);for(let _t=0;_t<6;_t++){Gt=j[_t].mipmaps;for(let se=0;se<Gt.length;se++){let be=Gt[se];if(h.format!==En)if(it!==null)if(It){if(gt)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,0,0,be.width,be.height,it,be.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,ut,be.width,be.height,0,be.data);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(It){if(gt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,0,0,be.width,be.height,it,rt,be.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,ut,be.width,be.height,0,it,rt,be.data)}}}else{if(Gt=h.mipmaps,It&&Rt){if(Gt.length>0)Lt++;let _t=Vt(j[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Lt,ut,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(I){if(It){if(gt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,j[_t].width,j[_t].height,it,rt,j[_t].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,j[_t].width,j[_t].height,0,it,rt,j[_t].data);for(let se=0;se<Gt.length;se++){let mn=Gt[se].image[_t].image;if(It){if(gt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,0,0,mn.width,mn.height,it,rt,mn.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,ut,mn.width,mn.height,0,it,rt,mn.data)}}else{if(It){if(gt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,it,rt,j[_t])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,it,rt,j[_t]);for(let se=0;se<Gt.length;se++){let be=Gt[se];if(It){if(gt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,0,0,it,rt,be.image[_t])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,ut,it,rt,be.image[_t])}}}if(T(h)&&h.mipmapsAutoUpdate===!0)b(t.TEXTURE_CUBE_MAP);if(ot.__version=K.version,h.onUpdate)h.onUpdate(h)}E.__version=h.version}function ue(E,h,D,nt,K,ot){let ct=r.convert(D.format,D.colorSpace),W=r.convert(D.type),Q=R(D.internalFormat,ct,W,D.normalized,D.colorSpace),ht=i.get(h),I=i.get(D);if(I.__renderTarget=h,!ht.__hasExternalTextures){let j=Math.max(1,h.width>>ot),Z=Math.max(1,h.height>>ot);if(K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY)n.texImage3D(K,ot,Q,j,Z,h.depth,0,ct,W,null);else n.texImage2D(K,ot,Q,j,Z,0,ct,W,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,E),wt(h))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,nt,K,I.__webglTexture,0,X(h));else if(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,nt,K,I.__webglTexture,ot);n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(E,h,D){if(t.bindRenderbuffer(t.RENDERBUFFER,E),h.depthBuffer){let nt=h.depthTexture,K=nt&&nt.isDepthTexture?nt.type:null,ot=g(h.stencilBuffer,K),ct=h.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(wt(h))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X(h),ot,h.width,h.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,X(h),ot,h.width,h.height);else t.renderbufferStorage(t.RENDERBUFFER,ot,h.width,h.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ct,t.RENDERBUFFER,E)}else{let nt=h.textures;for(let K=0;K<nt.length;K++){let ot=nt[K],ct=r.convert(ot.format,ot.colorSpace),W=r.convert(ot.type),Q=R(ot.internalFormat,ct,W,ot.normalized,ot.colorSpace);if(wt(h))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X(h),Q,h.width,h.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,X(h),Q,h.width,h.height);else t.renderbufferStorage(t.RENDERBUFFER,Q,h.width,h.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(E,h,D){let nt=h.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(h.depthTexture);K.__renderTarget=h;let ot=nt?h.depthTexture.image[0]:h.depthTexture.image;if(!K.__webglTexture||ot.width!==h.width||ot.height!==h.height)ot.width=h.width,ot.height=h.height,h.depthTexture.needsUpdate=!0;if(nt)Mt(h.depthTexture,0);else St(h.depthTexture,0);let ct=K.__webglTexture,W=X(h),Q=nt?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,ht=h.depthTexture.format===zn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(h.depthTexture.format===Ci)if(wt(h))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ht,Q,ct,0,W);else t.framebufferTexture2D(t.FRAMEBUFFER,ht,Q,ct,0);else if(h.depthTexture.format===zn)if(wt(h))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ht,Q,ct,0,W);else t.framebufferTexture2D(t.FRAMEBUFFER,ht,Q,ct,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(E){let h=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==E.depthTexture){let nt=E.depthTexture;if(h.__depthDisposeCallback)h.__depthDisposeCallback();if(nt){let K=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,nt.removeEventListener("dispose",K)};nt.addEventListener("dispose",K),h.__depthDisposeCallback=K}h.__boundDepthTexture=nt}if(E.depthTexture&&!h.__autoAllocateDepthBuffer)if(D)for(let nt=0;nt<6;nt++)ye(h.__webglFramebuffer[nt],E,nt);else if(E.texture.mipmaps.length>0)ye(h.__webglFramebuffer[0],E,0);else ye(h.__webglFramebuffer,E,0);else if(D){h.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer[nt]),h.__webglDepthbuffer[nt]===void 0)h.__webglDepthbuffer[nt]=t.createRenderbuffer(),me(h.__webglDepthbuffer[nt],E,!1);else{let K=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=h.__webglDepthbuffer[nt];t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ot)}}else{if(E.texture.mipmaps.length>0)n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer);if(h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=t.createRenderbuffer(),me(h.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=h.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ot)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(E,h,D){let nt=i.get(E);if(h!==void 0)ue(nt.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(D!==void 0)Ae(E)}function N(E){let h=E.texture,D=i.get(E),nt=i.get(h);E.addEventListener("dispose",k),A(E);let K=E.textures,ot=E.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(!ct){if(nt.__webglTexture===void 0)nt.__webglTexture=t.createTexture();nt.__version=h.version,a.memory.textures++}if(ot){D.__webglFramebuffer=[];for(let W=0;W<6;W++)if(h.mipmaps.length>0){D.__webglFramebuffer[W]=[];for(let Q=0;Q<h.mipmaps.length;Q++)D.__webglFramebuffer[W][Q]=t.createFramebuffer()}else D.__webglFramebuffer[W]=t.createFramebuffer()}else{if(h.mipmaps.length>0){D.__webglFramebuffer=[];for(let W=0;W<h.mipmaps.length;W++)D.__webglFramebuffer[W]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ct)for(let W=0,Q=K.length;W<Q;W++){let ht=i.get(K[W]);if(ht.__webglTexture===void 0)ht.__webglTexture=t.createTexture(),a.memory.textures++}if(E.samples>0&&wt(E)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let W=0;W<K.length;W++){let Q=K[W];D.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[W]);let ht=r.convert(Q.format,Q.colorSpace),I=r.convert(Q.type),j=R(Q.internalFormat,ht,I,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),Z=X(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,j,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,D.__webglColorRenderbuffer[W])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer)D.__webglDepthRenderbuffer=t.createRenderbuffer(),me(D.__webglDepthRenderbuffer,E,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ot){n.bindTexture(t.TEXTURE_CUBE_MAP,nt.__webglTexture),Qt(t.TEXTURE_CUBE_MAP,h);for(let W=0;W<6;W++)if(h.mipmaps.length>0)for(let Q=0;Q<h.mipmaps.length;Q++)ue(D.__webglFramebuffer[W][Q],E,h,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q);else ue(D.__webglFramebuffer[W],E,h,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);if(T(h))b(t.TEXTURE_CUBE_MAP);else if(h.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,h.mipmaps.length-1);n.unbindTexture()}else if(ct){for(let W=0,Q=K.length;W<Q;W++){let ht=K[W],I=i.get(ht),j=t.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)j=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(j,I.__webglTexture),Qt(j,ht),ue(D.__webglFramebuffer,E,ht,t.COLOR_ATTACHMENT0+W,j,0),T(ht))b(j)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)W=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(W,nt.__webglTexture),Qt(W,h),h.mipmaps.length>0)for(let Q=0;Q<h.mipmaps.length;Q++)ue(D.__webglFramebuffer[Q],E,h,t.COLOR_ATTACHMENT0,W,Q);else ue(D.__webglFramebuffer,E,h,t.COLOR_ATTACHMENT0,W,0);if(T(h))b(W);else if(h.mipmaps.length>0)t.texParameteri(W,t.TEXTURE_MAX_LEVEL,h.mipmaps.length-1);n.unbindTexture()}if(E.depthBuffer)Ae(E)}function We(E){let h=E.textures;for(let D=0,nt=h.length;D<nt;D++){let K=h[D];if(T(K)&&K.mipmapsAutoUpdate===!0){let ot=w(E),ct=i.get(K).__webglTexture;n.bindTexture(ot,ct),b(ot),n.unbindTexture()}}}let ee=[];function V(E){if(E.samples>0){if(wt(E)===!1){let{textures:h,width:D,height:nt}=E,K=t.COLOR_BUFFER_BIT,ot=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=i.get(E),W=h.length>1;if(W)for(let ht=0;ht<h.length;ht++)n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ht,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ht,t.TEXTURE_2D,null,0);if(n.bindFramebuffer(t.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ht=0;ht<h.length;ht++){if(E.resolveDepthBuffer){if(E.depthBuffer)K|=t.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)K|=t.STENCIL_BUFFER_BIT}if(W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let I=i.get(h[ht]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}if(t.blitFramebuffer(0,0,D,nt,0,0,D,nt,K,t.NEAREST),l===!0){if(ee.length=0,ee.push(t.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1)ee.push(ot);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let ht=0;ht<h.length;ht++){n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ht,t.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let I=i.get(h[ht]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ht,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let h=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[h])}}}function X(E){return Math.min(s.maxSamples,E.samples)}function wt(E){let h=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function pt(E){let h=a.render.frame;if(d.get(E)!==h)d.set(E,h),E.update()}function yt(E,h){let{colorSpace:D,format:nt,type:K}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0)return h;if(D!==Ba&&D!==ei)if(Yt.getTransfer(D)===oe){if(nt!==En||K!==nn)Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ut("WebGLTextures: Unsupported texture color space:",D);return h}function Vt(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)c.width=E.displayWidth,c.height=E.displayHeight;else c.width=E.width,c.height=E.height;return c}this.allocateTextureUnit=Y,this.resetTextureUnits=et,this.getTextureUnits=at,this.setTextureUnits=xt,this.setTexture2D=St,this.setTexture2DArray=Ct,this.setTexture3D=Pt,this.setTextureCube=Mt,this.rebindTextures=ze,this.setupRenderTarget=N,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=wt,this.dispose=J}function Um(t,e){function n(i,s=ei){let r,a=Yt.getTransfer(s);if(i===nn)return t.UNSIGNED_BYTE;if(i===na)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ia)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xl)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ql)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return t.BYTE;if(i===Vl)return t.SHORT;if(i===ns)return t.UNSIGNED_SHORT;if(i===ea)return t.INT;if(i===Bn)return t.UNSIGNED_INT;if(i===bn)return t.FLOAT;if(i===un)return t.HALF_FLOAT;if(i===Yl)return t.ALPHA;if(i===Zl)return t.RGB;if(i===En)return t.RGBA;if(i===Ci)return t.DEPTH_COMPONENT;if(i===zn)return t.DEPTH_STENCIL;if(i===Jl)return t.RED;if(i===sa)return t.RED_INTEGER;if(i===ti)return t.RG;if(i===ra)return t.RG_INTEGER;if(i===aa)return t.RGBA_INTEGER;if(i===Zs||i===Js||i===$s||i===Ks)if(a===oe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oa||i===la||i===ca||i===ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ua||i===da||i===fa||i===pa||i===ma||i===Qs||i===ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ua||i===da)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pa)return r.COMPRESSED_R11_EAC;if(i===ma)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qs)return r.COMPRESSED_RG11_EAC;if(i===ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_a||i===xa||i===va||i===ya||i===Sa||i===Ma||i===ba||i===Ea||i===Ta||i===wa||i===Aa||i===Ra||i===Ca||i===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_a)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===va)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Aa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ca)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ia)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===La||i===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Da||i===Ua||i===js||i===Fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===jn)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Fm=`
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

}`;class Qc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hr(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new hs(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jc extends Tn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,d=null,p=null,f=null,_=null,y=typeof XRWebGLBinding<"u",S=new Qc,m={},u=e.getContextAttributes(),M=null,T=null,b=[],w=[],R=new kt,g=null,x=null,A=new Be;A.viewport=new fe;let U=new Be;U.viewport=new fe;let P=[A,U],k=new fo,tt=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=b[Y];if(st===void 0)st=new rs,b[Y]=st;return st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=b[Y];if(st===void 0)st=new rs,b[Y]=st;return st.getGripSpace()},this.getHand=function(Y){let st=b[Y];if(st===void 0)st=new rs,b[Y]=st;return st.getHandSpace()};function J(Y){let st=w.indexOf(Y.inputSource);if(st===-1)return;let St=b[st];if(St!==void 0)St.update(Y.inputSource,Y.frame,l||r),St.dispatchEvent({type:Y.type,data:Y.inputSource})}function z(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let Y=0;Y<b.length;Y++){let st=w[Y];if(st===null)continue;w[Y]=null,b[Y].disconnect(st)}tt=null,C=null,S.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(M),f=null,p=null,d=null,i=null,T=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(R.width,R.height,!1),x!==null){let Y=x.camera;Y.fov=x.fov,Y.zoom=x.zoom,Y.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){if(s=Y,n.isPresenting===!0)Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){if(a=Y,n.isPresenting===!0)Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){if(d===null&&y)d=new XRWebGLBinding(i,e);return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),u.xrCompatible!==!0)await e.makeXRCompatible();if(g=t.getPixelRatio(),t.getSize(R),!(y&&("createProjectionLayer"in XRWebGLBinding.prototype))){let St={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Je(f.framebufferWidth,f.framebufferHeight,{format:En,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let St=null,Ct=null,Pt=null;if(u.depth)Pt=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=u.stencil?zn:Ci,Ct=u.stencil?jn:Bn;let Mt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Mt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new Je(p.textureWidth,p.textureHeight,{format:En,type:nn,depthTexture:new Hn(p.textureWidth,p.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(Y){for(let st=0;st<Y.removed.length;st++){let St=Y.removed[st],Ct=w.indexOf(St);if(Ct>=0)w[Ct]=null,b[Ct].disconnect(St)}for(let st=0;st<Y.added.length;st++){let St=Y.added[st],Ct=w.indexOf(St);if(Ct===-1){for(let Mt=0;Mt<b.length;Mt++)if(Mt>=w.length){w.push(St),Ct=Mt;break}else if(w[Mt]===null){w[Mt]=St,Ct=Mt;break}if(Ct===-1)break}let Pt=b[Ct];if(Pt)Pt.connect(St)}}function lt(Y,st){if(st===null)Y.matrixWorld.copy(Y.matrix);else Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix);Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let{near:st,far:St}=Y;if(S.texture!==null){if(S.depthNear>0)st=S.depthNear;if(S.depthFar>0)St=S.depthFar}if(k.near=U.near=A.near=st,k.far=U.far=A.far=St,tt!==k.near||C!==k.far)i.updateRenderState({depthNear:k.near,depthFar:k.far}),tt=k.near,C=k.far;k.layers.mask=Y.layers.mask|6,A.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let Ct=Y.parent,Pt=k.cameras;lt(k,Ct);for(let Mt=0;Mt<Pt.length;Mt++)lt(Pt[Mt],Ct);if(k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),x===null&&Y.isPerspectiveCamera)x={camera:Y,fov:Y.fov,zoom:Y.zoom};q(Y,k,Ct)};function q(Y,st,St){if(St===null)Y.matrix.copy(st.matrixWorld);else Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld);if(Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera)Y.fov=Ei*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1}this.getCamera=function(){return k},this.getFoveation=function(){if(p===null&&f===null)return;return o},this.setFoveation=function(Y){if(o=Y,p!==null)p.fixedFoveation=Y;if(f!==null&&f.fixedFoveation!==void 0)f.fixedFoveation=Y},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(Y){return m[Y]};let et=null;function at(Y,st){if(c=st.getViewerPose(l||r),_=st,c!==null){let St=c.views;if(f!==null)t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T);let Ct=!1;if(St.length!==k.cameras.length)k.cameras.length=0,Ct=!0;for(let zt=0;zt<St.length;zt++){let Ft=St[zt],Qt=null;if(f!==null)Qt=f.getViewport(Ft);else{let re=d.getViewSubImage(p,Ft);if(Qt=re.viewport,zt===0)t.setRenderTargetTextures(T,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(T)}let Wt=P[zt];if(Wt===void 0)Wt=new Be,Wt.layers.enable(zt),Wt.viewport=new fe,P[zt]=Wt;if(Wt.matrix.fromArray(Ft.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ft.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),zt===0)k.matrix.copy(Wt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);if(Ct===!0)k.cameras.push(Wt)}let Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let zt=d.getDepthInformation(St[0]);if(zt&&zt.isValid&&zt.texture)S.init(zt,i.renderState)}if(Pt&&Pt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<St.length;zt++){let Ft=St[zt].camera;if(Ft){let Qt=m[Ft];if(!Qt)Qt=new hr,m[Ft]=Qt;let Wt=d.getCameraImage(Ft);Qt.sourceTexture=Wt}}}}for(let St=0;St<b.length;St++){let Ct=w[St],Pt=b[St];if(Ct!==null&&Pt!==void 0)Pt.update(Ct,st,l||r)}if(et)et(Y,st);if(st.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:st});_=null}let xt=new Oc;xt.setAnimationLoop(at),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}}var Bm=new ne,th=new Ot;th.set(-1,0,0,0,1,0,0,0,1);function zm(t,e){function n(m,u){if(m.matrixAutoUpdate===!0)m.updateMatrix();u.value.copy(m.matrix)}function i(m,u){if(u.color.getRGB(m.fogColor.value,Qa(t)),u.isFog)m.fogNear.value=u.near,m.fogFar.value=u.far;else if(u.isFogExp2)m.fogDensity.value=u.density}function s(m,u,M,T,b){if(u.isNodeMaterial)u.uniformsNeedUpdate=!1;else if(u.isMeshBasicMaterial)r(m,u);else if(u.isMeshLambertMaterial){if(r(m,u),u.envMap)m.envMapIntensity.value=u.envMapIntensity}else if(u.isMeshToonMaterial)r(m,u),p(m,u);else if(u.isMeshPhongMaterial){if(r(m,u),d(m,u),u.envMap)m.envMapIntensity.value=u.envMapIntensity}else if(u.isMeshStandardMaterial){if(r(m,u),f(m,u),u.isMeshPhysicalMaterial)_(m,u,b)}else if(u.isMeshMatcapMaterial)r(m,u),y(m,u);else if(u.isMeshDepthMaterial)r(m,u);else if(u.isMeshDistanceMaterial)r(m,u),S(m,u);else if(u.isMeshNormalMaterial)r(m,u);else if(u.isLineBasicMaterial){if(a(m,u),u.isLineDashedMaterial)o(m,u)}else if(u.isPointsMaterial)l(m,u,M,T);else if(u.isSpriteMaterial)c(m,u);else if(u.isShadowMaterial)m.color.value.copy(u.color),m.opacity.value=u.opacity;else if(u.isShaderMaterial)u.uniformsNeedUpdate=!1}function r(m,u){if(m.opacity.value=u.opacity,u.color)m.diffuse.value.copy(u.color);if(u.emissive)m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity);if(u.map)m.map.value=u.map,n(u.map,m.mapTransform);if(u.alphaMap)m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform);if(u.bumpMap){if(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ue)m.bumpScale.value*=-1}if(u.normalMap){if(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ue)m.normalScale.value.negate()}if(u.displacementMap)m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias;if(u.emissiveMap)m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform);if(u.specularMap)m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform);if(u.alphaTest>0)m.alphaTest.value=u.alphaTest;let M=e.get(u),{envMap:T,envMapRotation:b}=M;if(T){if(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(th);m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio}if(u.lightMap)m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform);if(u.aoMap)m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform)}function a(m,u){if(m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map)m.map.value=u.map,n(u.map,m.mapTransform)}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,M,T){if(m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=T*0.5,u.map)m.map.value=u.map,n(u.map,m.uvTransform);if(u.alphaMap)m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform);if(u.alphaTest>0)m.alphaTest.value=u.alphaTest}function c(m,u){if(m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map)m.map.value=u.map,n(u.map,m.mapTransform);if(u.alphaMap)m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform);if(u.alphaTest>0)m.alphaTest.value=u.alphaTest}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,0.0001)}function p(m,u){if(u.gradientMap)m.gradientMap.value=u.gradientMap}function f(m,u){if(m.metalness.value=u.metalness,u.metalnessMap)m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=u.roughness,u.roughnessMap)m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform);if(u.envMap)m.envMapIntensity.value=u.envMapIntensity}function _(m,u,M){if(m.ior.value=u.ior,u.diffuseRoughness>0){if(m.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap)m.diffuseRoughnessMap.value=u.diffuseRoughnessMap,n(u.diffuseRoughnessMap,m.diffuseRoughnessMapTransform)}if(u.sheen>0){if(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap)m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform);if(u.sheenRoughnessMap)m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(u.clearcoat>0){if(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap)m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform);if(u.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(u.clearcoatNormalMap){if(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ue)m.clearcoatNormalScale.value.negate()}}if(u.dispersion>0)m.dispersion.value=u.dispersion;if(u.retroreflectivity>0)m.retroreflectivity.value=u.retroreflectivity;if(u.iridescence>0){if(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap)m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform);if(u.iridescenceThicknessMap)m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(u.transmission>0){if(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap)m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=u.thickness,u.thicknessMap)m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)}if(u.anisotropy>0){if(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap)m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap)m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform);if(u.specularIntensityMap)m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform)}function y(m,u){if(u.matcap)m.matcap.value=u.matcap}function S(m,u){let M=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gm(t,e,n,i){let s={},r={};function a(M,T){let b=T.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,T){let b=s[M.id];if(b===void 0)y(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",m);let w=T.program;i.updateUBOMapping(M,w);let R=e.render.frame;if(r[M.id]!==R)c(M),r[M.id]=R}function l(M){let T=t.createBuffer(),{__size:b,usage:w}=M;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],{uniforms:b,__cache:w}=M;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,g=b.length;R<g;R++){let x=b[R];if(Array.isArray(x))for(let A=0,U=x.length;A<U;A++)d(x[A],R,A,w);else d(x,R,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(M,T,b,w){if(f(M,T,b,w)===!0){let{__offset:R,value:g}=M;if(Array.isArray(g)){let x=0;for(let A=0;A<g.length;A++){let U=g[A],P=S(U,!0);p(U,M.__data,x),x+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,M.__data)}}function p(M,T,b){if(typeof M==="number"||typeof M==="boolean")T[b]=M;else if(M.isMatrix3)T[b]=M.elements[0],T[b+1]=M.elements[1],T[b+2]=M.elements[2],T[b+3]=0,T[b+4]=M.elements[3],T[b+5]=M.elements[4],T[b+6]=M.elements[5],T[b+7]=0,T[b+8]=M.elements[6],T[b+9]=M.elements[7],T[b+10]=M.elements[8],T[b+11]=0;else if(ArrayBuffer.isView(M))T.set(M.subarray(0,T.length-b),b);else M.toArray(T,b)}function f(M,T,b,w){let R=M.value,g=T+"_"+b;if(Array.isArray(R)){if(w[g]===void 0)w[g]=[];let x=w[g],A=!1;for(let U=0;U<R.length;U++)if(_(R[U],x,U)===!0)A=!0;return A}return _(R,w,g)}function _(M,T,b){if(T[b]===void 0){if(typeof M==="number"||typeof M==="boolean")T[b]=M;else if(ArrayBuffer.isView(M))T[b]=M.slice();else T[b]=M.clone();return!0}else{let w=T[b];if(typeof M==="number"||typeof M==="boolean"){if(w!==M)return T[b]=M,!0}else if(ArrayBuffer.isView(M))return!0;else if(w.equals(M)===!1)return w.copy(M),!0}return!1}function y(M){let T=M.uniforms,b=0,w=16;for(let g=0,x=T.length;g<x;g++){let A=Array.isArray(T[g])?T[g]:[T[g]];for(let U=0,P=A.length;U<P;U++){let k=A[U],tt=Array.isArray(k.value)?k.value:[k.value],C=Array.isArray(T[g])||Array.isArray(k.value),J=b;for(let B=0,lt=tt.length;B<lt;B++){let q=tt[B],et=S(q,C),at=b%w,xt=at%et.boundary,Y=at+xt;if(b+=xt,Y!==0&&w-Y<et.storage)b+=w-Y;if(B===0)J=b;b+=et.storage}let z=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new z((b-J)/Float32Array.BYTES_PER_ELEMENT),k.__offset=J}}let R=b%w;if(R>0)b+=w-R;return M.__size=b,M.__cache={},this}function S(M,T){let b={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")b.boundary=4,b.storage=4;else if(M.isVector2)b.boundary=8,b.storage=8;else if(M.isVector3||M.isColor)b.boundary=16,b.storage=12;else if(M.isVector4)b.boundary=16,b.storage=16;else if(M.isMatrix3)b.boundary=16,b.storage=48;else if(M.isMatrix4)b.boundary=16,b.storage=64;else if(M.isTexture)Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))b.boundary=16,b.storage=M.byteLength;else Nt("WebGLRenderer: Unsupported uniform value type.",M);if(T===!0)b.boundary=16,b.storage=Math.ceil(b.storage/16)*16;return b}function m(M){let T=M.target;T.removeEventListener("dispose",m),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(let M in s)t.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:u}}var km=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null;function Hm(){if(fn===null)fn=new rr(km,16,16,ti,un),fn.name="DFG_LUT",fn.minFilter=Ze,fn.magFilter=Ze,fn.wrapS=qs,fn.wrapT=qs,fn.generateMipmaps=!1,fn.needsUpdate=!0;return fn}class yo{constructor(t={}){let{canvas:e=nc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=r;let y=f,S=new Set([aa,ra,sa]),m=new Set([nn,Bn,ns,jn,na,ia]),u=new Uint32Array(4),M=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},b=null,w=null,R=[],g=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,U=!1,P=null,k=null,tt=null,C=null;this._outputColorSpace=is;let J=0,z=0,B=null,lt=-1,q=null,et=new fe,at=new fe,xt=null,Y=new Dt(0),st=0,{width:St,height:Ct}=e,Pt=1,Mt=null,$t=null,zt=new fe(0,0,St,Ct),Ft=new fe(0,0,St,Ct),Qt=!1,Wt=new Kn,re=new ar,he=!1,pe=!1,we=new ne,ue=new F,me=new fe,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function ze(){return B===null?Pt:1}let N=n;function We(v,L){return e.getContext(v,L)}let ee,V,X,wt,pt,yt,Vt,E,h,D,nt,K,ot,ct,W,Q,ht,I,j,Z,it,rt,ut;try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${al}`);if(e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),N===null){if(N=We("webgl2",v),N===null)if(We("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(v){throw e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),Ut("WebGLRenderer: "+v.message),v}function It(){if(ee=new jf(N),ee.init(),it=new Um(N,ee),V=new Hf(N,ee,t,it),X=new Nm(N,ee),V.reversedDepthBuffer&&p)X.buffers.depth.setReversed(!0);k=N.createFramebuffer(),tt=N.createFramebuffer(),C=N.createFramebuffer(),wt=new np(N),pt=new vm,yt=new Dm(N,ee,X,pt,V,it,wt),Vt=new Qf(A),E=new iu(N),rt=new Gf(N,E),h=new tp(N,E,wt,rt),D=new sp(N,h,E,rt,wt),I=new ip(N,V,yt),W=new Wf(pt),nt=new xm(A,Vt,ee,V,rt,W),K=new zm(A,pt),ot=new Sm,ct=new Am(ee),ht=new zf(A,Vt,X,D,_,o),Q=new Lm(A,D,V),ut=new Gm(N,wt,V,X),j=new kf(N,ee,wt),Z=new ep(N,ee,wt),wt.programs=nt.programs,A.capabilities=V,A.extensions=ee,A.properties=pt,A.renderLists=ot,A.shadowMap=Q,A.state=X,A.info=wt}if(y!==nn)x=new ap(y,e.width,e.height,a,i,s);let Rt=new jc(A,N);this.xr=Rt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ee.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=ee.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(v){if(v===void 0)return;Pt=v,this.setSize(St,Ct,!1)},this.getSize=function(v){return v.set(St,Ct)},this.setSize=function(v,L,H=!0){if(Rt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(St=v,Ct=L,e.width=Math.floor(v*Pt),e.height=Math.floor(L*Pt),H===!0)e.style.width=v+"px",e.style.height=L+"px";if(x!==null)x.setSize(e.width,e.height);this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(St*Pt,Ct*Pt).floor()},this.setDrawingBufferSize=function(v,L,H){St=v,Ct=L,Pt=H,e.width=Math.floor(v*H),e.height=Math.floor(L*H),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(y===nn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(zt)},this.setViewport=function(v,L,H,O){if(v.isVector4)zt.set(v.x,v.y,v.z,v.w);else zt.set(v,L,H,O);X.viewport(et.copy(zt).multiplyScalar(ze()).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,L,H,O){if(v.isVector4)Ft.set(v.x,v.y,v.z,v.w);else Ft.set(v,L,H,O);X.scissor(at.copy(Ft).multiplyScalar(ze()).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(v){X.setScissorTest(Qt=v)},this.setOpaqueSort=function(v){Mt=v},this.setTransparentSort=function(v){$t=v},this.getClearColor=function(v){return v.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,H=!0){let O=0;if(v){let G=!1;if(B!==null){let ft=B.texture.format;G=S.has(ft)}if(G){let ft=B.texture.type,bt=m.has(ft),dt=ht.getClearColor(),vt=ht.getClearAlpha(),{r:At,g:Bt,b:Xt}=dt;if(bt)u[0]=At,u[1]=Bt,u[2]=Xt,u[3]=vt,N.clearBufferuiv(N.COLOR,0,u);else M[0]=At,M[1]=Bt,M[2]=Xt,M[3]=vt,N.clearBufferiv(N.COLOR,0,M)}else O|=N.COLOR_BUFFER_BIT}if(L)O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H)O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(O!==0)N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),P=v},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),ht.dispose(),ot.dispose(),ct.dispose(),yt.dispose(),pt.dispose(),Vt.dispose(),D.dispose(),h.dispose(),rt.dispose(),ut.dispose(),nt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Mo),Rt.removeEventListener("sessionend",bo),Vn.stop()};function gt(v){v.preventDefault(),Xa("WebGLRenderer: Context Lost."),U=!0}function Lt(){Xa("WebGLRenderer: Context Restored."),U=!1;let v=wt.autoReset,L=Q.enabled,H=Q.autoUpdate,O=Q.needsUpdate,G=Q.type;It(),wt.autoReset=v,Q.enabled=L,Q.autoUpdate=H,Q.needsUpdate=O,Q.type=G}function Gt(v){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function _t(v){let L=v.target;L.removeEventListener("dispose",_t),se(L)}function se(v){be(v),pt.remove(v)}function be(v){let L=pt.get(v).programs;if(L!==void 0){if(L.forEach(function(H){nt.releaseProgram(H)}),v.isShaderMaterial)nt.releaseShaderCache(v)}}this.renderBufferDirect=function(v,L,H,O,G,ft){if(L===null)L=ye;let bt=G.isMesh&&G.matrixWorld.determinantAffine()<0,dt=sh(v,L,H,O,G);X.setMaterial(O,bt);let vt=H.index,At=1;if(O.wireframe===!0){if(vt=h.getWireframeAttribute(H),vt===void 0)return;At=2}let Bt=H.drawRange,Xt=H.attributes.position,Et=Bt.start*At,qt=(Bt.start+Bt.count)*At;if(ft!==null)Et=Math.max(Et,ft.start*At),qt=Math.min(qt,(ft.start+ft.count)*At);if(vt!==null)Et=Math.max(Et,0),qt=Math.min(qt,vt.count);else if(Xt!==void 0&&Xt!==null)Et=Math.max(Et,0),qt=Math.min(qt,Xt.count);let ge=qt-Et;if(ge<0||ge===1/0)return;rt.setup(G,O,dt,H,vt);let le,ae=j;if(vt!==null)le=E.get(vt),ae=Z,ae.setIndex(le);if(G.isMesh)if(O.wireframe===!0)X.setLineWidth(O.wireframeLinewidth*ze()),ae.setMode(N.LINES);else ae.setMode(N.TRIANGLES);else if(G.isLine){let Pe=O.linewidth;if(Pe===void 0)Pe=1;if(X.setLineWidth(Pe*ze()),G.isLineSegments)ae.setMode(N.LINES);else if(G.isLineLoop)ae.setMode(N.LINE_LOOP);else ae.setMode(N.LINE_STRIP)}else if(G.isPoints)ae.setMode(N.POINTS);else if(G.isSprite)ae.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(!ee.get("WEBGL_multi_draw")){let{_multiDrawStarts:Pe,_multiDrawCounts:Tt,_multiDrawCount:Oe}=G,jt=vt?E.get(vt).bytesPerElement:1,Xn=pt.get(O).currentProgram.getUniforms();for(let Le=0;Le<Oe;Le++)Xn.setValue(N,"_gl_DrawID",Le),ae.render(Pe[Le]/jt,Tt[Le])}else ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ae.renderInstances(Et,ge,G.count);else if(H.isInstancedBufferGeometry){let Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Tt=Math.min(H.instanceCount,Pe);ae.renderInstances(Et,ge,Tt)}else ae.render(Et,ge)};function mn(v,L,H,O){if(P!==null&&v.isNodeMaterial)P.setObject(O,v);if(he===!0)W.setState(v,H,!1);if(v.transparent===!0&&v.side===He&&v.forceSinglePass===!1)v.side=Ue,v.needsUpdate=!0,Gi(v,L,O),v.side=wi,v.needsUpdate=!0,Gi(v,L,O),v.side=He;else Gi(v,L,O)}this.compile=function(v,L,H=null){if(H===null)H=v;if(P!==null)P.renderStart(v,L,H);if(w=ct.get(H),w.init(L),g.push(w),H.traverseVisible(function(G){if(G.isLight&&G.layers.test(L.layers)){if(w.pushLight(G),G.castShadow)w.pushShadow(G)}}),v!==H)v.traverseVisible(function(G){if(G.isLight&&G.layers.test(L.layers)){if(w.pushLight(G),G.castShadow)w.pushShadow(G)}});if(w.setupLights(),P!==null)P.updateLights(w.state.lightsArray);if(pe=this.localClippingEnabled,he=W.init(this.clippingPlanes,pe),he===!0)W.setGlobalState(this.clippingPlanes,L);if(P!==null)Q.render(w.state.shadowsArray,H,L);let O=new Set;if(v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ft=G.material;if(ft)if(Array.isArray(ft))for(let bt=0;bt<ft.length;bt++){let dt=ft[bt];mn(dt,H,L,G),O.add(dt)}else mn(ft,H,L,G),O.add(ft)}),w=g.pop(),P!==null)P.renderEnd();return O},this.compileAsync=function(v,L,H=null){let O=this.compile(v,L,H);return new Promise((G)=>{function ft(){if(O.forEach(function(bt){let vt=pt.get(bt).currentProgram;if(vt===void 0||vt.isReady())O.delete(bt)}),O.size===0){G(v);return}setTimeout(ft,10)}if(ee.get("KHR_parallel_shader_compile")!==null)ft();else setTimeout(ft,10)})};let Mr=null;function nh(v){if(Mr)Mr(v)}function Mo(){Vn.stop()}function bo(){Vn.start()}let Vn=new Oc;if(Vn.setAnimationLoop(nh),typeof self<"u")Vn.setContext(self);this.setAnimationLoop=function(v){Mr=v,Rt.setAnimationLoop(v),v===null?Vn.stop():Vn.start()},Rt.addEventListener("sessionstart",Mo),Rt.addEventListener("sessionend",bo),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P!==null)P.renderStart(v,L);let H=Rt.enabled===!0&&Rt.isPresenting===!0,O=x!==null&&(B===null||H)&&x.begin(A,B);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(Rt.enabled===!0&&Rt.isPresenting===!0&&(x===null||x.isCompositing()===!1)){if(Rt.cameraAutoUpdate===!0)Rt.updateCamera(L);L=Rt.getCamera()}if(v.isScene===!0)v.onBeforeRender(A,v,L,B);if(w=ct.get(v,g.length),w.init(L),w.state.textureUnits=yt.getTextureUnits(),g.push(w),we.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera)re.setFromArrayCamera(L);else Wt.setFromProjectionMatrix(we,Va,L.reversedDepth);if(pe=this.localClippingEnabled,he=W.init(this.clippingPlanes,pe),b=ot.get(v,R.length),b.init(),R.push(b),this.info.render.frame++,Rt.enabled===!0&&Rt.isPresenting===!0){let bt=A.xr.getDepthSensingMesh();if(bt!==null)br(bt,L,-1/0,A.sortObjects)}if(br(v,L,0,A.sortObjects),b.finish(),P!==null)P.updateLights(w.state.lightsArray);if(A.sortObjects===!0)b.sort(Mt,$t);if(Ae=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Ae)ht.addToRenderList(b,v);if(this.info.autoReset===!0)this.info.reset();if(he===!0)W.beginShadows();let G=w.state.shadowsArray;if(Q.render(G,v,L),he===!0)W.endShadows();if((O&&x.hasRenderPass())===!1){let bt=b.opaque,dt=b.transmissive;if(w.setupLights(),L.isArrayCamera){let vt=L.cameras;if(dt.length>0)for(let At=0,Bt=vt.length;At<Bt;At++){let Xt=vt[At];To(bt,dt,v,Xt)}if(Ae)ht.render(v);for(let At=0,Bt=vt.length;At<Bt;At++){let Xt=vt[At];Eo(b,v,Xt,Xt.viewport)}}else{if(dt.length>0)To(bt,dt,v,L);if(Ae)ht.render(v);Eo(b,v,L)}}if(B!==null&&z===0)yt.updateMultisampleRenderTarget(B),yt.updateRenderTargetMipmap(B);if(O)x.end(A);if(v.isScene===!0)v.onAfterRender(A,v,L);if(rt.resetDefaultState(),lt=-1,q=null,g.pop(),g.length>0){if(w=g[g.length-1],yt.setTextureUnits(w.state.textureUnits),he===!0)W.setGlobalState(A.clippingPlanes,w.state.camera)}else w=null;if(R.pop(),R.length>0)b=R[R.length-1];else b=null;if(P!==null)P.renderEnd()};function br(v,L,H,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(L)}else if(v.isLight){if(w.pushLight(v),v.castShadow)w.pushShadow(v)}else if(v.isSprite){let bt=L.isArrayCamera?re:Wt;if(!v.frustumCulled||v.intersectsFrustum(bt)){if(O)me.setFromMatrixPosition(v.matrixWorld).applyMatrix4(we);let dt=D.update(v),vt=v.material;if(vt.visible)b.push(v,dt,vt,H,me.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){let bt=L.isArrayCamera?re:Wt;if(!v.frustumCulled||v.intersectsFrustum(bt)){let dt=D.update(v),vt=v.material;if(O){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();me.copy(v.boundingSphere.center)}else{if(dt.boundingSphere===null)dt.computeBoundingSphere();me.copy(dt.boundingSphere.center)}me.applyMatrix4(v.matrixWorld).applyMatrix4(we)}if(Array.isArray(vt)){let At=dt.groups;for(let Bt=0,Xt=At.length;Bt<Xt;Bt++){let Et=At[Bt],qt=vt[Et.materialIndex];if(qt&&qt.visible)b.push(v,dt,qt,H,me.z,Et,L)}}else if(vt.visible)b.push(v,dt,vt,H,me.z,null,L)}}}let ft=v.children;for(let bt=0,dt=ft.length;bt<dt;bt++)br(ft[bt],L,H,O)}function Eo(v,L,H,O){let{opaque:G,transmissive:ft,transparent:bt}=v;if(w.setupLightsView(H),he===!0)W.setGlobalState(A.clippingPlanes,H);if(O)X.viewport(et.copy(O));if(G.length>0)xs(G,L,H);if(ft.length>0)xs(ft,L,H);if(bt.length>0)xs(bt,L,H);X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function To(v,L,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let Et=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Je(1,1,{generateMipmaps:!0,type:Et?un:nn,minFilter:On,samples:Math.max(4,V.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let ft=w.state.transmissionRenderTarget[O.id],bt=O.viewport||et;ft.setSize(bt.z*A.transmissionResolutionScale,bt.w*A.transmissionResolutionScale);let dt=A.getRenderTarget(),vt=A.getActiveCubeFace(),At=A.getActiveMipmapLevel();if(A.setRenderTarget(ft),A.getClearColor(Y),st=A.getClearAlpha(),st<1)A.setClearColor(16777215,0.5);if(A.clear(),Ae)ht.render(H);let Bt=A.toneMapping;A.toneMapping=hn;let Xt=O.viewport;if(O.viewport!==void 0)O.viewport=void 0;if(w.setupLightsView(O),he===!0)W.setGlobalState(A.clippingPlanes,O);if(xs(v,H,O),yt.updateMultisampleRenderTarget(ft),yt.updateRenderTargetMipmap(ft),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let qt=0,ge=L.length;qt<ge;qt++){let le=L[qt],{object:ae,geometry:Pe,material:Tt,group:Oe}=le;if(Tt.side===He&&ae.layers.test(O.layers)){let jt=Tt.side;Tt.side=Ue,Tt.needsUpdate=!0,wo(ae,H,O,Pe,Tt,Oe),Tt.side=jt,Tt.needsUpdate=!0,Et=!0}}if(Et===!0)yt.updateMultisampleRenderTarget(ft),yt.updateRenderTargetMipmap(ft)}if(A.setRenderTarget(dt,vt,At),A.setClearColor(Y,st),Xt!==void 0)O.viewport=Xt;A.toneMapping=Bt}function xs(v,L,H){let O=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ft=v.length;G<ft;G++){let bt=v[G],{object:dt,geometry:vt,group:At}=bt,Bt=bt.material;if(Bt.allowOverride===!0&&O!==null)Bt=O;if(dt.layers.test(H.layers))wo(dt,L,H,vt,Bt,At)}}function wo(v,L,H,O,G,ft){if(P!==null&&G.isNodeMaterial)P.setObject(v,G);if(v.onBeforeRender(A,L,H,O,G,ft),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(A,L,H,O,v,ft),G.transparent===!0&&G.side===He&&G.forceSinglePass===!1)G.side=Ue,G.needsUpdate=!0,A.renderBufferDirect(H,L,O,G,v,ft),G.side=wi,G.needsUpdate=!0,A.renderBufferDirect(H,L,O,G,v,ft),G.side=He;else A.renderBufferDirect(H,L,O,G,v,ft);v.onAfterRender(A,L,H,O,G,ft)}function Ao(v){let L=0;for(let H of v)if(H.texture!==null)L++;return L}function Gi(v,L,H){if(L.isScene!==!0)L=ye;let O=pt.get(v),G=w.state.lights,ft=w.state.shadowsArray,bt=G.state.version,dt=nt.getParameters(v,G.state,ft,L,H,w.state.lightProbeGridArray),vt=nt.getProgramCacheKey(dt),At=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;let Bt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(O.envMap=Vt.get(v.envMap||O.environment,Bt),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,At===void 0)v.addEventListener("dispose",_t),At=new Map,O.programs=At,O.programVariants=new Map;let Xt=At.get(vt);if(Xt!==void 0){if(O.currentProgram===Xt&&O.lightsStateVersion===bt)return Co(v,dt),Xt}else{if(dt.uniforms=nt.getUniforms(v),P!==null&&v.isNodeMaterial)P.build(v,H,dt);v.onBeforeCompile(dt,A),Xt=nt.acquireProgram(dt,vt),At.set(vt,Xt),O.uniforms=dt.uniforms}let Et=O.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Et.clippingPlanes=W.uniform;if(Co(v,dt),O.needsLights=ah(v),O.lightsStateVersion=bt,O.needsLights)Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.sunLights.value=G.state.sun,Et.sunLightShadows.value=G.state.sunShadow,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.sunShadowMatrix.value=G.state.sunShadowMatrix,Et.sunShadowCascade.value=G.state.sunShadowCascade,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix;return O.numLightProbeGrids=Ao(w.state.lightProbeGridArray),O.currentProgram=Xt,O.uniformsList=null,Xt}function ih(v,L,H,O,G){let ft=pt.get(v),bt=ft.currentProgram.id+","+O+","+G,dt=ft.programVariants.get(bt);if(dt===void 0)dt=Gi(v,L,H),ft.programVariants.set(bt,dt);else ft.currentProgram=dt,ft.uniformsList=null,ft.outputColorSpace=O,ft.toneMapping=G;return dt}function Ro(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=ms.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Co(v,L){let H=pt.get(v);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function sh(v,L,H,O,G){if(L.isScene!==!0)L=ye;yt.resetTextureUnits();let ft=L.fog,bt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,dt=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Yt.workingColorSpace,vt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,At=Vt.get(O.envMap||bt,vt),Bt=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xt=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Et=!!H.morphAttributes.position,qt=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color,le=hn;if(O.toneMapped){if(B===null||B.isXRRenderTarget===!0)le=A.toneMapping}let ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pe=ae!==void 0?ae.length:0,Tt=pt.get(O),Oe=w.state.lights;if(he===!0){if(pe===!0||v!==q){let de=v===q&&O.id===lt;W.setState(O,v,de)}}let jt=!1,Xn=!1;if(O.version===Tt.__version){if(Tt.needsLights&&Tt.lightsStateVersion!==Oe.state.version)jt=!0;else if(G.isBatchedMesh&&Tt.batching===!1)jt=!0;else if(!G.isBatchedMesh&&Tt.batching===!0)jt=!0;else if(G.isBatchedMesh&&Tt.batchingColor===!0&&G._colorsTexture===null)jt=!0;else if(G.isBatchedMesh&&Tt.batchingColor===!1&&G._colorsTexture!==null)jt=!0;else if(G.isInstancedMesh&&Tt.instancing===!1)jt=!0;else if(!G.isInstancedMesh&&Tt.instancing===!0)jt=!0;else if(G.isSkinnedMesh&&Tt.skinning===!1)jt=!0;else if(!G.isSkinnedMesh&&Tt.skinning===!0)jt=!0;else if(G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null)jt=!0;else if(G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null)jt=!0;else if(G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null)jt=!0;else if(G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null)jt=!0;else if(Tt.envMap!==At)jt=!0;else if(O.fog===!0&&Tt.fog!==ft)jt=!0;else if(Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==W.numPlanes||Tt.numIntersection!==W.numIntersection))jt=!0;else if(Tt.vertexAlphas!==Bt)jt=!0;else if(Tt.vertexTangents!==Xt)jt=!0;else if(Tt.morphTargets!==Et)jt=!0;else if(Tt.morphNormals!==qt)jt=!0;else if(Tt.morphColors!==ge)jt=!0;else if(Tt.morphTargetsCount!==Pe)jt=!0;else if(Tt.numLightProbeGrids!==Ao(w.state.lightProbeGridArray))jt=!0;else if(Tt.outputColorSpace!==dt||Tt.toneMapping!==le)Xn=!0}else jt=!0,Tt.__version=O.version;let Le=Tt.currentProgram;if(jt===!0||Xn===!0){if(Le=Xn===!0?ih(O,L,G,dt,le):Gi(O,L,G),P&&O.isNodeMaterial)P.onUpdateProgram(O,Le,Tt)}let vs=!1,In=!1,qn=!1,Jt=Le.getUniforms(),Re=Tt.uniforms;if(X.useProgram(Le.program))vs=!0,In=!0,qn=!0;if(O.id!==lt)lt=O.id,In=!0;if(vs||q!==v){if(X.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();Jt.setValue(N,"projectionMatrix",v.projectionMatrix),Jt.setValue(N,"viewMatrix",v.matrixWorldInverse);let Ee=Jt.map.cameraPosition;if(Ee!==void 0)Ee.setValue(N,ue.setFromMatrixPosition(v.matrixWorld));if(V.logarithmicDepthBuffer)Jt.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)Jt.setValue(N,"isOrthographic",v.isOrthographicCamera===!0);if(q!==v)q=v,In=!0,qn=!0}if(Tt.needsLights){if(Oe.state.sunShadowMap.length>0)Jt.setValue(N,"sunShadowMap",Oe.state.sunShadowMap,yt);if(Oe.state.directionalShadowMap.length>0)Jt.setValue(N,"directionalShadowMap",Oe.state.directionalShadowMap,yt);if(Oe.state.spotShadowMap.length>0)Jt.setValue(N,"spotShadowMap",Oe.state.spotShadowMap,yt);if(Oe.state.pointShadowMap.length>0)Jt.setValue(N,"pointShadowMap",Oe.state.pointShadowMap,yt)}if(G.isSkinnedMesh){Jt.setOptional(N,G,"bindMatrix"),Jt.setOptional(N,G,"bindMatrixInverse");let de=G.skeleton;if(de){if(de.boneTexture===null)de.computeBoneTexture();Jt.setValue(N,"boneTexture",de.boneTexture,yt)}}if(G.isBatchedMesh){if(Jt.setOptional(N,G,"batchingTexture"),Jt.setValue(N,"batchingTexture",G._matricesTexture,yt),Jt.setOptional(N,G,"batchingIdTexture"),Jt.setValue(N,"batchingIdTexture",G._indirectTexture,yt),Jt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null)Jt.setValue(N,"batchingColorTexture",G._colorsTexture,yt)}let Ke=H.morphAttributes;if(Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)I.update(G,H,Le);if(In||Tt.receiveShadow!==G.receiveShadow)Tt.receiveShadow=G.receiveShadow,Jt.setValue(N,"receiveShadow",G.receiveShadow);if((O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null)Re.envMapIntensity.value=L.environmentIntensity;if(Re.dfgLUT!==void 0)Re.dfgLUT.value=Hm();if(In){if(Jt.setValue(N,"toneMappingExposure",A.toneMappingExposure),Tt.needsLights)rh(Re,qn);if(ft&&O.fog===!0)K.refreshFogUniforms(Re,ft);if(K.refreshMaterialUniforms(Re,O,Pt,Ct,w.state.transmissionRenderTarget[v.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let de=T,Ee=0;for(let gn of w.state.lightProbeGridArray){if(gn.texture===null)continue;de.textures[Ee]=gn.texture,de.min[Ee]=gn.boundingBox.min,de.max[Ee]=gn.boundingBox.max,de.resolution[Ee]=gn.resolution,Ee++}for(let gn in de)de[gn].length=Ee;Re.probesSH.value=de.textures,Re.probesMin.value=de.min,Re.probesMax.value=de.max,Re.probesResolution.value=de.resolution}ms.upload(N,Ro(Tt),Re,yt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0)ms.upload(N,Ro(Tt),Re,yt),O.uniformsNeedUpdate=!1;if(O.isSpriteMaterial)Jt.setValue(N,"center",G.center);if(Jt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Jt.setValue(N,"normalMatrix",G.normalMatrix),Jt.setValue(N,"modelMatrix",G.matrixWorld),O.uniformsGroups!==void 0){let de=O.uniformsGroups;for(let Ee=0,gn=de.length;Ee<gn;Ee++){let Po=de[Ee];ut.update(Po,Le),ut.bind(Po,Le)}}return Le}function rh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function ah(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,L,H){let O=pt.get(v);if(O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1)O.__useRenderToTexture=!1;pt.get(v.texture).__webglTexture=L,pt.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let H=pt.get(v);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,H=0){B=v,J=L,z=H;let O=null,G=!1,ft=!1;if(v){let dt=pt.get(v);if(dt.__useDefaultFramebuffer!==void 0){X.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(v.viewport),at.copy(v.scissor),xt=v.scissorTest,X.viewport(et),X.scissor(at),X.setScissorTest(xt),lt=-1;return}else if(dt.__webglFramebuffer===void 0)yt.setupRenderTarget(v);else if(dt.__hasExternalTextures)yt.rebindTextures(v,pt.get(v.texture).__webglTexture,pt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Bt=v.depthTexture;if(dt.__boundDepthTexture!==Bt){if(Bt!==null&&pt.has(Bt)&&(v.width!==Bt.image.width||v.height!==Bt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(v)}}let vt=v.texture;if(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)ft=!0;let At=pt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(At[L]))O=At[L][H];else O=At[L];G=!0}else if(v.samples>0&&yt.useMultisampledRTT(v)===!1)O=pt.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(At))O=At[H];else O=At;et.copy(v.viewport),at.copy(v.scissor),xt=v.scissorTest}else et.copy(zt).multiplyScalar(Pt).floor(),at.copy(Ft).multiplyScalar(Pt).floor(),xt=Qt;if(H!==0)O=k;if(X.bindFramebuffer(N.FRAMEBUFFER,O))X.drawBuffers(v,O);if(X.viewport(et),X.scissor(at),X.setScissorTest(xt),G){let dt=pt.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,H)}else if(ft){let dt=L;for(let vt=0;vt<v.textures.length;vt++){let At=pt.get(v.textures[vt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+vt,At.__webglTexture,H,dt)}}else if(v!==null&&H!==0){let dt=pt.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,H)}lt=-1};function Io(v){let L=pt.get(v);if(L.__readFormat!==v.format||L.__readType!==v.type)L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=V.textureFormatReadable(v.format),L.__typeReadable=V.textureTypeReadable(v.type);return L}if(this.readRenderTargetPixels=function(v,L,H,O,G,ft,bt,dt=0){if(!(v&&v.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=pt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0){if(vt=vt[bt],Array.isArray(vt))vt=vt[0]}if(vt){X.bindFramebuffer(N.FRAMEBUFFER,vt);try{let At=v.textures[dt],{format:Bt,type:Xt}=At;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+dt);let Et=Io(At);if(Et.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=v.width-O&&(H>=0&&H<=v.height-G))N.readPixels(L,H,O,G,it.convert(Bt),it.convert(Xt),ft)}finally{let At=B!==null?pt.get(B).__webglFramebuffer:null;X.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(v,L,H,O,G,ft,bt,dt=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=pt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0){if(vt=vt[bt],Array.isArray(vt))vt=vt[0]}if(vt)if(L>=0&&L<=v.width-O&&(H>=0&&H<=v.height-G)){X.bindFramebuffer(N.FRAMEBUFFER,vt);let At=v.textures[dt],{format:Bt,type:Xt}=At;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+dt);let Et=Io(At);if(Et.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(L,H,O,G,it.convert(Bt),it.convert(Xt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ge=B!==null?pt.get(B).__webglFramebuffer:null;X.bindFramebuffer(N.FRAMEBUFFER,ge);let le=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await sc(N,le,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(qt),N.deleteSync(le),ft}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,H=0){let O=Math.pow(2,-H),G=Math.floor(v.image.width*O),ft=Math.floor(v.image.height*O),bt=L!==null?L.x:0,dt=L!==null?L.y:0;yt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,bt,dt,G,ft),X.unbindTexture()},this.copyTextureToTexture=function(v,L,H=null,O=null,G=0,ft=0){let bt,dt,vt,At,Bt,Xt,Et,qt,ge,le=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(H!==null)bt=H.max.x-H.min.x,dt=H.max.y-H.min.y,vt=H.isBox3?H.max.z-H.min.z:1,At=H.min.x,Bt=H.min.y,Xt=H.isBox3?H.min.z:0;else{let Jt=Math.pow(2,-G);if(bt=Math.floor(le.width*Jt),dt=Math.floor(le.height*Jt),v.isDataArrayTexture)vt=le.depth;else if(v.isData3DTexture)vt=Math.floor(le.depth*Jt);else vt=1;At=0,Bt=0,Xt=0}if(O!==null)Et=O.x,qt=O.y,ge=O.z;else Et=0,qt=0,ge=0;let ae=it.convert(L.format),Pe=it.convert(L.type),Tt;if(L.isData3DTexture)yt.setTexture3D(L,0),Tt=N.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)yt.setTexture2DArray(L,0),Tt=N.TEXTURE_2D_ARRAY;else yt.setTexture2D(L,0),Tt=N.TEXTURE_2D;X.activeTexture(N.TEXTURE0),X.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),X.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),X.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Oe=X.getParameter(N.UNPACK_ROW_LENGTH),jt=X.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=X.getParameter(N.UNPACK_SKIP_PIXELS),Le=X.getParameter(N.UNPACK_SKIP_ROWS),vs=X.getParameter(N.UNPACK_SKIP_IMAGES);X.pixelStorei(N.UNPACK_ROW_LENGTH,le.width),X.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le.height),X.pixelStorei(N.UNPACK_SKIP_PIXELS,At),X.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),X.pixelStorei(N.UNPACK_SKIP_IMAGES,Xt);let In=v.isDataArrayTexture||v.isData3DTexture,qn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let Jt=pt.get(v),Re=pt.get(L),Ke=pt.get(Jt.__renderTarget),de=pt.get(Re.__renderTarget);X.bindFramebuffer(N.READ_FRAMEBUFFER,Ke.__webglFramebuffer),X.bindFramebuffer(N.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<vt;Ee++){if(In)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pt.get(v).__webglTexture,G,Xt+Ee),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pt.get(L).__webglTexture,ft,ge+Ee);N.blitFramebuffer(At,Bt,At+bt,Bt+dt,Et,qt,Et+bt,qt+dt,N.DEPTH_BUFFER_BIT,N.NEAREST)}X.bindFramebuffer(N.READ_FRAMEBUFFER,null),X.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||pt.has(v)){let Jt=pt.get(v),Re=pt.get(L);X.bindFramebuffer(N.READ_FRAMEBUFFER,tt),X.bindFramebuffer(N.DRAW_FRAMEBUFFER,C);for(let Ke=0;Ke<vt;Ke++){if(In)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,G,Xt+Ke);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jt.__webglTexture,G);if(qn)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,ft,ge+Ke);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,ft);if(G!==0)N.blitFramebuffer(At,Bt,At+bt,Bt+dt,Et,qt,Et+bt,qt+dt,N.COLOR_BUFFER_BIT,N.NEAREST);else if(qn)N.copyTexSubImage3D(Tt,ft,Et,qt,ge+Ke,At,Bt,bt,dt);else N.copyTexSubImage2D(Tt,ft,Et,qt,At,Bt,bt,dt)}X.bindFramebuffer(N.READ_FRAMEBUFFER,null),X.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(qn)if(v.isDataTexture||v.isData3DTexture)N.texSubImage3D(Tt,ft,Et,qt,ge,bt,dt,vt,ae,Pe,le.data);else if(L.isCompressedArrayTexture)N.compressedTexSubImage3D(Tt,ft,Et,qt,ge,bt,dt,vt,ae,le.data);else N.texSubImage3D(Tt,ft,Et,qt,ge,bt,dt,vt,ae,Pe,le);else if(v.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,ft,Et,qt,bt,dt,ae,Pe,le.data);else if(v.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,ft,Et,qt,le.width,le.height,ae,le.data);else N.texSubImage2D(N.TEXTURE_2D,ft,Et,qt,bt,dt,ae,Pe,le);if(X.pixelStorei(N.UNPACK_ROW_LENGTH,Oe),X.pixelStorei(N.UNPACK_IMAGE_HEIGHT,jt),X.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),X.pixelStorei(N.UNPACK_SKIP_ROWS,Le),X.pixelStorei(N.UNPACK_SKIP_IMAGES,vs),ft===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0)N.generateMipmap(Tt);X.unbindTexture()},this.initRenderTarget=function(v){if(pt.get(v).__webglFramebuffer===void 0)yt.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)yt.setTextureCube(v,0);else if(v.isData3DTexture)yt.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)yt.setTexture2DArray(v,0);else yt.setTexture2D(v,0);X.unbindTexture()},this.resetState=function(){J=0,z=0,B=null,X.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Va}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class So extends Pi{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let t=new an;t.deleteAttribute("uv");let e=new dn({side:Ue}),n=new dn,i=new ai(16777215,900,28,2);i.position.set(0.418,16.199,0.3),this.add(i);let s=new te(t,e);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new Li(t,n,6),a=new xe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-0.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),r.setMatrixAt(0,a.matrix),a.position.set(-5.607,-0.754,-0.758),a.rotation.set(0,0.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),r.setMatrixAt(1,a.matrix),a.position.set(6.167,0.857,7.803),a.rotation.set(0,0.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),r.setMatrixAt(2,a.matrix),a.position.set(-2.017,0.018,6.124),a.rotation.set(0,0.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),r.setMatrixAt(3,a.matrix),a.position.set(2.291,-0.756,-2.621),a.rotation.set(0,-0.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),r.setMatrixAt(4,a.matrix),a.position.set(-2.193,-0.369,-5.547),a.rotation.set(0,0.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),r.setMatrixAt(5,a.matrix),this.add(r);let o=new te(t,zi(50));o.position.set(-16.116,14.37,8.208),o.scale.set(0.1,2.428,2.739),this.add(o);let l=new te(t,zi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new te(t,zi(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let d=new te(t,zi(43));d.position.set(-0.462,8.89,14.52),d.scale.set(4.38,5.441,0.088),this.add(d);let p=new te(t,zi(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,0.1),this.add(p);let f=new te(t,zi(100));f.position.set(0,20,0),f.scale.set(1,0.1,1),this.add(f)}dispose(){let t=new Set;this.traverse((e)=>{if(e.isMesh)t.add(e.geometry),t.add(e.material)});for(let e of t)e.dispose()}}function zi(t){return new ur({color:0,emissive:16777215,emissiveIntensity:t})}var Kt={chamber:1183243,copper:12618331,ivory:15986143,amber:14462334,pass:11126682,deny:14705738,idle:7166536},Wn=[{key:"Sign-in",label:"SIGN-IN",x:-2.3},{key:"Workspace",label:"WORKSPACE",x:-0.35},{key:"Permission",label:"PERMISSION",x:1.6}],_s=-4.7,oi=3.65,Wm=2.4,Vm=()=>matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.classList.contains("motion-off")||new URLSearchParams(location.search).get("motion")==="off";function Xm(){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(0.22,"rgba(255,255,255,.55)"),i.addColorStop(0.55,"rgba(255,255,255,.12)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);let s=new lr(e);return s.colorSpace=is,s}function eh(t){let e=[...t.querySelectorAll("#decision-trace li")],n=Wn.map((s)=>e.find((a)=>a.textContent.includes(s.key))?.dataset.state||"skipped"),i=!t.querySelector("#access-result")?.classList.contains("is-denied");return{states:n,allowed:i,signature:`${n.join("|")}|${i}`}}function qm(t,e){let n=Vm(),i=new yo({antialias:!0,alpha:!1,powerPreference:"default"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,innerWidth<760?1.5:1.75)),i.toneMapping=ji,i.toneMappingExposure=1.05,i.outputColorSpace=is,i.setClearColor(Kt.chamber,1),i.domElement.className="b3d-canvas",i.domElement.setAttribute("aria-hidden","true"),t.prepend(i.domElement);let s=new Pi;s.fog=new as(Kt.chamber,9,17);let r=new Oi(i),a=r.fromScene(new So,0.04);s.environment=a.texture,s.environmentIntensity=0.55,r.dispose();let o=new Be(34,1,0.1,40),l=new F(-3.4,2.5,7.6),c=new F(0.5,-0.05,0);o.position.copy(l),o.lookAt(c);let d=new en;s.add(d);let p=new us(16769732,1.6);p.position.set(-4,6,5),s.add(p);let f=new us(9414328,0.5);f.position.set(5,2,-6),s.add(f);let _=Xm(),y=[a,_],S=(V)=>(y.push(V),V);{let pt=new Float32Array(3036),yt=0;for(let h=0;h<46;h++)for(let D=0;D<22;D++)pt[yt++]=(h-23)*0.36,pt[yt++]=-1.32,pt[yt++]=(D-11)*0.36;let Vt=S(new ve);Vt.setAttribute("position",new Ie(pt,3));let E=S(new Cn({color:Kt.copper,size:0.035,transparent:!0,opacity:0.55,depthWrite:!1}));d.add(new kn(Vt,E))}{let V=S(new Di(0.008,0.008,oi-_s,8,1,!0));V.rotateZ(Math.PI/2);let X=S(new rn({color:Kt.amber,transparent:!0,opacity:0.22,depthWrite:!1})),wt=new te(V,X);wt.position.x=(oi+_s)/2,d.add(wt)}let m=(()=>{let X=new Float32Array(480),wt=new Float32Array(160);for(let E=0;E<160;E++)X[E*3]=wn.randFloatSpread(12),X[E*3+1]=wn.randFloat(-1.2,2.6),X[E*3+2]=wn.randFloatSpread(7),wt[E]=Math.random()*Math.PI*2;let pt=S(new ve);pt.setAttribute("position",new Ie(X,3));let yt=S(new Cn({map:_,color:Kt.amber,size:0.06,transparent:!0,opacity:0.5,blending:Ye,depthWrite:!1})),Vt=new kn(pt,yt);return d.add(Vt),{points:Vt,positions:X,seeds:wt,count:160}})(),u=S(new Fi(1.05,0.065,28,120)),M=S(new Fi(1.24,0.011,8,160)),T=S(new Ni(1,72)),b=S(new an(0.035,0.16,0.035)),w=S(new Ui(0.06,20,20)),R=S(new an(0.5,0.08,0.5)),g=Wn.map((V,X)=>{let wt=new en;wt.position.set(V.x,0,0),wt.rotation.y=Math.PI/2+0.3;let pt=S(new dn({color:Kt.copper,metalness:1,roughness:0.26,emissive:new Dt(Kt.copper),emissiveIntensity:0.04})),yt=new te(u,pt);wt.add(yt);let Vt=S(new rn({color:Kt.amber,transparent:!0,opacity:0.35,blending:Ye,depthWrite:!1})),E=new te(M,Vt);wt.add(E);let h=S(new rn({color:Kt.amber,transparent:!0,opacity:0.05,side:He,blending:Ye,depthWrite:!1})),D=new te(T,h);wt.add(D);let nt=S(new dn({color:Kt.ivory,metalness:0.6,roughness:0.35})),K=new Li(b,nt,24),ot=new ne,ct=new sn,W=new F,Q=new F(1,1,1);for(let it=0;it<24;it++){let rt=it/24*Math.PI*2,ut=it%6===0;W.set(Math.cos(rt)*1.13,Math.sin(rt)*1.13,0),ct.setFromEuler(new qe(0,0,rt-Math.PI/2)),Q.set(1,ut?1.6:0.8,1),K.setMatrixAt(it,ot.compose(W,ct,Q))}wt.add(K);let ht=S(new rn({color:Kt.idle})),I=new te(w,ht);I.position.set(0,1.36,0),wt.add(I);let j=S(new dn({color:2760987,metalness:0.8,roughness:0.5})),Z=new te(R,j);return Z.position.y=-1.26,wt.add(Z),d.add(wt),{index:X,spec:V,group:wt,ring:yt,halo:E,membrane:D,lamp:I,ringMaterial:pt,membraneMaterial:h,haloMaterial:Vt,lampMaterial:ht,state:"idle",flash:0,spin:0,target:new Dt(Kt.amber),current:new Dt(Kt.amber)}}),x=(()=>{let V=new en;V.position.set(oi,0,0);let X=S(new dn({color:Kt.ivory,metalness:0.9,roughness:0.18,flatShading:!0,transparent:!0,opacity:0.92})),wt=new te(S(new ls(0.58,0)),X),pt=S(new rn({color:Kt.amber})),yt=new te(S(new cs(0.24,0)),pt),Vt=S(new rn({map:_,color:Kt.amber,transparent:!0,opacity:0.35,blending:Ye,depthWrite:!1})),E=new te(S(new Ni(1.6,48)),Vt);E.rotation.x=-Math.PI/2,E.position.y=-1.3;let h=S(new on({transparent:!0,depthWrite:!1,blending:Ye,side:He,uniforms:{uColor:{value:new Dt(Kt.pass)},uStrength:{value:0}},vertexShader:"varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; void main(){ float a = pow(1.0 - vY, 1.6) * uStrength * 0.55; gl_FragColor = vec4(uColor, a); }"})),D=new te(S(new Di(0.42,0.62,4.4,40,1,!0)),h);D.position.y=1;let nt=new ai(Kt.amber,2.2,6,1.6);return V.add(wt,yt,E,D,nt),d.add(V),{group:V,shell:wt,heart:yt,aura:E,beam:D,beamMaterial:h,auraMaterial:Vt,heartMaterial:pt,light:nt,pulse:0,open:0}})(),A=(()=>{let V=new en,X=S(new rn({color:Kt.ivory})),wt=new te(S(new Ui(0.13,24,24)),X),pt=S(new Cn({map:_,color:Kt.amber,size:1.7,transparent:!0,blending:Ye,depthWrite:!1})),yt=S(new ve);yt.setAttribute("position",new Ie(new Float32Array(3),3));let Vt=new kn(yt,pt),E=new ai(Kt.amber,3.2,3.2,1.8);V.add(wt,Vt,E),d.add(V);let h=34,D=new Float32Array(h*3),nt=new Float32Array(h*3),K=S(new ve);K.setAttribute("position",new Ie(D,3)),K.setAttribute("color",new Ie(nt,3));let ot=S(new Cn({map:_,size:0.34,vertexColors:!0,transparent:!0,blending:Ye,depthWrite:!1})),ct=new kn(K,ot);return d.add(ct),{group:V,body:wt,halo:Vt,light:E,bodyMaterial:X,haloMaterial:pt,trail:ct,trailPositions:D,trailColors:nt,trailGeometry:K,trailCount:h,scale:1}})(),U=(()=>{let X=new Float32Array(270),wt=new Float32Array(270),pt=S(new ve);pt.setAttribute("position",new Ie(X,3));let yt=S(new Cn({map:_,color:Kt.deny,size:0.16,transparent:!0,opacity:0,blending:Ye,depthWrite:!1})),Vt=new kn(pt,yt);return d.add(Vt),{points:Vt,positions:X,velocity:wt,count:90,geometry:pt,material:yt,life:0}})();function P(V){for(let X=0;X<U.count;X++){U.positions[X*3]=V.x,U.positions[X*3+1]=V.y,U.positions[X*3+2]=V.z;let wt=Math.random()*Math.PI*2,pt=Math.acos(wn.randFloat(-1,1)),yt=wn.randFloat(0.8,2.6);U.velocity[X*3]=-Math.abs(Math.sin(pt)*Math.cos(wt))*yt*0.9,U.velocity[X*3+1]=Math.cos(pt)*yt,U.velocity[X*3+2]=Math.sin(pt)*Math.sin(wt)*yt}U.geometry.attributes.position.needsUpdate=!0,U.life=1}let k=document.createElement("div");k.className="b3d-labels",k.setAttribute("aria-hidden","true");let tt=[...Wn.map((V,X)=>`0${X+1} ${V.label}`),"RESOURCE"].map((V)=>{let X=document.createElement("span");return X.className="b3d-label",X.innerHTML=`<i></i>${V}`,k.append(X),X});t.append(k);let C=[...Wn.map((V)=>new F(V.x,1.62,0)),new F(oi,1.05,0)],J=eh(e),z={x:_s,phase:"travel",stopIndex:-1,hold:0,passed:new Set};function B(){z.x=_s,z.phase="travel",z.passed.clear(),z.hold=0,z.stopIndex=J.states.findIndex((V)=>V==="deny"),A.scale=1,g.forEach((V)=>{V.state="idle",V.target.set(Kt.amber)}),x.open=0;for(let V=0;V<A.trailCount;V++)A.trailPositions[V*3]=_s,A.trailPositions[V*3+1]=0,A.trailPositions[V*3+2]=0;q()}function lt(V,X){if(V.state=X,X==="pass")V.target.set(Kt.pass),V.flash=1,V.spin=1;if(X==="deny")V.target.set(Kt.deny),V.flash=1.4;if(X==="skipped")V.target.set(Kt.idle);q()}function q(){g.forEach((V,X)=>{tt[X].dataset.state=V.state}),tt[3].dataset.state=x.open>0.5?"pass":z.stopIndex>=0&&z.phase!=="travel"?"deny":"idle"}function et(){if(B(),J.states.forEach((V,X)=>lt(g[X],V==="skipped"?"skipped":V)),g.forEach((V)=>{V.current.copy(V.target),V.flash=0,V.spin=0}),z.stopIndex>=0)z.x=Wn[z.stopIndex].x-0.32,z.phase="denied";else z.x=oi-0.85,z.phase="granted",x.open=1;for(let V=0;V<A.trailCount;V++)A.trailPositions[V*3]=z.x;q()}function at(){let V=eh(e);if(V.signature===J.signature)return;if(J=V,t.dataset.decision=J.allowed?"allow":"deny",n)et();else B();ye()}let xt={x:0,y:0,tx:0,ty:0},Y={value:0,target:0,dragging:!1,startX:0,startYaw:0,idle:0},st=(V)=>{let X=t.getBoundingClientRect();if(xt.tx=((V.clientX-X.left)/X.width-0.5)*2,xt.ty=((V.clientY-X.top)/X.height-0.5)*2,Y.dragging)Y.target=wn.clamp(Y.startYaw+(V.clientX-Y.startX)/X.width*1.6,-0.6,0.6);ye()},St=(V)=>{if(V.button!==0)return;Y.dragging=!0,Y.startX=V.clientX,Y.startYaw=Y.target,t.setPointerCapture?.(V.pointerId),t.classList.add("is-dragging")},Ct=(V)=>{Y.dragging=!1,Y.idle=0,t.releasePointerCapture?.(V.pointerId),t.classList.remove("is-dragging")},Pt=()=>{xt.tx=0,xt.ty=0};t.addEventListener("pointermove",st),t.addEventListener("pointerdown",St),t.addEventListener("pointerup",Ct),t.addEventListener("pointercancel",Ct),t.addEventListener("pointerleave",Pt);let Mt=()=>{let{width:V,height:X}=t.getBoundingClientRect();if(!V||!X)return;i.setSize(V,X,!1),o.aspect=V/X;let wt=wn.clamp(1.55/o.aspect,1,1.9);l.set(-3.4*wt,2.5*wt,7.6*wt),o.updateProjectionMatrix(),ye()},$t=new ResizeObserver(Mt);$t.observe(t);let zt=new F,Ft=performance.now(),Qt=0;function Wt(V){if(Qt+=V,xt.x+=(xt.tx-xt.x)*Math.min(1,V*3),xt.y+=(xt.ty-xt.y)*Math.min(1,V*3),!Y.dragging){if(Y.idle+=V,Y.idle>2.5)Y.target+=(0-Y.target)*Math.min(1,V*0.8)}if(Y.value+=(Y.target-Y.value)*Math.min(1,V*6),d.rotation.y=Y.value,o.position.set(l.x+xt.x*0.55,l.y-xt.y*0.3,l.z),o.lookAt(c),!n)if(z.phase==="travel"){let h=Wn.findIndex((nt,K)=>!z.passed.has(K)),D=z.stopIndex>=0?Wn[z.stopIndex].x-0.32:oi-0.85;if(z.x=Math.min(z.x+Wm*V,D),h>=0&&h!==z.stopIndex&&z.x>=Wn[h].x)z.passed.add(h),lt(g[h],"pass");if(z.x>=D){if(z.stopIndex>=0)z.phase="denied",lt(g[z.stopIndex],"deny"),g.forEach((nt,K)=>{if(K>z.stopIndex)lt(nt,"skipped")}),P(new F(z.x+0.2,0,0));else z.phase="granted",x.pulse=1;z.hold=0,q()}}else{if(z.hold+=V,z.phase==="denied")z.x-=V*0.35*Math.max(0,1-z.hold),A.scale=Math.max(0,1-z.hold*1.4);else z.x=Math.min(z.x+V*1.2,oi),A.scale=Math.max(0,1-z.hold*1.8),x.open=Math.min(1,x.open+V*2),q();if(z.hold>(z.phase==="granted"?2.6:2.2))B()}let X=n?0:Math.sin(Qt*6)*0.025;A.group.position.set(z.x,X,0),A.group.scale.setScalar(Math.max(0.0001,A.scale)),A.light.intensity=3.2*A.scale;let wt=z.phase==="denied"?Kt.deny:z.phase==="granted"?Kt.pass:Kt.amber;if(A.haloMaterial.color.lerp(new Dt(wt),Math.min(1,V*6)),A.light.color.copy(A.haloMaterial.color),!n){for(let h=A.trailCount-1;h>0;h--)A.trailPositions[h*3]=A.trailPositions[(h-1)*3],A.trailPositions[h*3+1]=A.trailPositions[(h-1)*3+1],A.trailPositions[h*3+2]=A.trailPositions[(h-1)*3+2];A.trailPositions[0]=z.x,A.trailPositions[1]=X,A.trailPositions[2]=0}let pt=A.haloMaterial.color;for(let h=0;h<A.trailCount;h++){let D=Math.pow(1-h/A.trailCount,1.6)*0.7*A.scale;A.trailColors[h*3]=pt.r*D,A.trailColors[h*3+1]=pt.g*D,A.trailColors[h*3+2]=pt.b*D}if(A.trailGeometry.attributes.position.needsUpdate=!0,A.trailGeometry.attributes.color.needsUpdate=!0,g.forEach((h)=>{h.current.lerp(h.target,Math.min(1,V*(n?60:5))),h.flash=Math.max(0,h.flash-V*1.6),h.spin=Math.max(0,h.spin-V*0.9);let D=h.state==="idle"?0.05:h.state==="skipped"?0.02:h.state==="deny"?0.2:0.09;if(h.membraneMaterial.color.copy(h.current),h.membraneMaterial.opacity=D+h.flash*0.35,h.haloMaterial.color.copy(h.current),h.haloMaterial.opacity=(h.state==="skipped"?0.12:0.35)+h.flash*0.4,h.lampMaterial.color.copy(h.state==="idle"?new Dt(Kt.idle):h.current),h.ringMaterial.emissive.copy(h.current),h.ringMaterial.emissiveIntensity=0.04+h.flash*0.5+(h.state==="deny"?0.18:0),!n)if(h.halo.rotation.z+=V*(0.15+h.spin*3.5)*(h.index%2?-1:1),h.ring.rotation.z+=V*h.spin*2.2,h.state==="deny")h.group.position.y=Math.sin(Qt*40)*0.012*h.flash;else h.group.position.y=0}),x.pulse=Math.max(0,x.pulse-V*1.2),!n)x.shell.rotation.y+=V*0.35,x.shell.rotation.x+=V*0.12,x.heart.rotation.y-=V*0.9;let yt=1+x.pulse*0.18+(n?0:Math.sin(Qt*2)*0.015);if(x.shell.scale.setScalar(yt),x.beamMaterial.uniforms.uStrength.value+=((x.open?1:0)-x.beamMaterial.uniforms.uStrength.value)*Math.min(1,V*3),x.heartMaterial.color.lerpColors(new Dt(Kt.amber),new Dt(Kt.pass),x.open),x.auraMaterial.color.copy(x.heartMaterial.color),x.auraMaterial.opacity=0.3+x.open*0.25+x.pulse*0.3,x.light.color.copy(x.heartMaterial.color),x.light.intensity=2+x.open*2.2+x.pulse*4,U.life>0){U.life=Math.max(0,U.life-V*0.9);for(let h=0;h<U.count;h++)U.velocity[h*3+1]-=V*2.2,U.positions[h*3]+=U.velocity[h*3]*V,U.positions[h*3+1]+=U.velocity[h*3+1]*V,U.positions[h*3+2]+=U.velocity[h*3+2]*V;U.geometry.attributes.position.needsUpdate=!0}if(U.material.opacity=U.life,!n){for(let h=0;h<m.count;h++)if(m.positions[h*3+1]+=Math.sin(Qt*0.4+m.seeds[h])*V*0.06,m.positions[h*3]+=V*0.04,m.positions[h*3]>6)m.positions[h*3]=-6;m.points.geometry.attributes.position.needsUpdate=!0}let{width:Vt,height:E}=t.getBoundingClientRect();d.updateMatrixWorld(),C.forEach((h,D)=>{zt.copy(h).applyMatrix4(d.matrixWorld).project(o);let nt=(zt.x*0.5+0.5)*Vt,K=(-zt.y*0.5+0.5)*E;tt[D].style.transform=`translate(${nt.toFixed(1)}px, ${K.toFixed(1)}px) translate(-50%, -100%)`})}let re=!1,he=!1,pe=0,we=!1;function ue(V){pe=0;let X=Math.min(0.05,(V-Ft)/1000);if(Ft=V,Wt(X),i.render(s,o),!n&&re&&!document.hidden)pe=requestAnimationFrame(ue)}function me(){if(pe||!he)return;Ft=performance.now(),pe=requestAnimationFrame(ue)}function ye(){if(!n)return;if(we||!he)return;we=!0,requestAnimationFrame((V)=>{we=!1,Ft=V-16;for(let X=0;X<30;X++)Wt(0.03333333333333333);i.render(s,o)})}let Ae=new IntersectionObserver(([V])=>{if(re=V.isIntersecting,re&&!n)me()},{rootMargin:"120px"});Ae.observe(t);let ze=()=>{if(!document.hidden&&re&&!n)me()};document.addEventListener("visibilitychange",ze);let N=new MutationObserver(at);if(N.observe(e,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["class"]}),t.dataset.decision=J.allowed?"allow":"deny",n)et();else B();Mt(),(typeof i.compileAsync==="function"?i.compileAsync(s,o).catch(()=>{}):Promise.resolve()).then(()=>{if(he=!0,n)ye();else if(re)me()});function ee(){cancelAnimationFrame(pe),Ae.disconnect(),N.disconnect(),$t.disconnect(),document.removeEventListener("visibilitychange",ze),t.removeEventListener("pointermove",st),t.removeEventListener("pointerdown",St),t.removeEventListener("pointerup",Ct),t.removeEventListener("pointercancel",Ct),t.removeEventListener("pointerleave",Pt),y.forEach((V)=>V.dispose?.()),i.dispose(),i.domElement.remove(),k.remove()}return{renderer:i,dispose:ee}}function Ym(){let t=document.querySelector("[data-policy-demo]"),e=document.querySelector(".boundary-intro");if(!t||!e||document.querySelector(".b3d-chamber"))return;let n=document.createElement("figure");n.className="b3d-chamber",n.innerHTML='<figcaption class="b3d-caption"><span><b></b>REQUEST TRACE · 3D</span><span class="b3d-hint">DRAG TO TURN</span></figcaption>'+'<p class="visually-hidden">A three-dimensional illustration of the request above travelling through the sign-in, workspace and permission checks. It mirrors the decision trace in the explorer.</p><p class="b3d-fallback" hidden>3D view paused. The decision trace on the right is unaffected.</p>',e.append(n);let i,s=(o)=>("requestIdleCallback"in window)?requestIdleCallback(o,{timeout:3000}):setTimeout(o,200),r=()=>s(a),a=()=>{try{i=qm(n,t),n.dataset.ready="true"}catch(l){n.remove();return}let o=i.renderer.domElement;o.addEventListener("webglcontextlost",(l)=>{l.preventDefault(),n.dataset.ready="lost",n.querySelector(".b3d-fallback").hidden=!1}),o.addEventListener("webglcontextrestored",()=>{i.dispose(),n.querySelector(".b3d-fallback").hidden=!0,r()})};if(t.dataset.ready==="true")r();else{let o=new MutationObserver(()=>{if(t.dataset.ready==="true")o.disconnect(),r()});o.observe(t,{attributes:!0,attributeFilter:["data-ready"]}),setTimeout(()=>{if(!n.dataset.ready)o.disconnect(),r()},3000)}}Ym();})();
