var bc="187";var Tc=0,io=1,Ec=2;var ur=1,De=2,Hs=3,q=0,T=1,S=2,k=0,dr=1,I=2,so=3,ro=4,Ac=5;var Ws=100,wc=101,Rc=102,Cc=103,Ic=104,Pc=200,Lc=201,Nc=202,Dc=203,Uc=204,Fc=205,Oc=206,Bc=207,zc=208,Gc=209,kc=210,Hc=211,Wc=212,Vc=213,Xc=214,qc=0,Yc=1,Zc=2,ao=3,Jc=4,$c=5,Kc=6,Qc=7,jc=0,th=1,eh=2,Ni=0,xe=1,ve=2,ye=3,oe=4,Se=5,Me=6,be=7;var fr=301,Vs=302,na=303,ia=304,G=1000,ue=1001,Ue=1002,F=1003,Fe=1004;var le=1005;var w=1006,de=1007;var O=1008;var Ri=1009,nh=1010,ih=1011,pr=1012,oo=1013,ns=1014,qi=1015,A=1016,lo=1017,co=1018,_s=1020,sh=35902,rh=35899,ah=1021,oh=1022,Yi=1023,Xs=1026,is=1027,lh=1028,ho=1029,xs=1030,uo=1031;var fo=1033,sa=33776,ra=33777,aa=33778,oa=33779,po=35840,mo=35841,go=35842,_o=35843,xo=36196,vo=37492,yo=37496,So=37488,Mo=37489,la=37490,bo=37491,To=37808,Eo=37809,Ao=37810,wo=37811,Ro=37812,Co=37813,Io=37814,Po=37815,Lo=37816,No=37817,Do=37818,Uo=37819,Fo=37820,Oo=37821,Bo=36492,zo=36494,Go=36495,ko=36283,Ho=36284,ca=36285,Wo=36286;var qe=2300,Oe=2301;var Ye=0,Te=1,fe=2;var Vo=0,ch=1,vs="",y="srgb",L="srgb-linear",Xo="linear",c="srgb";var hh=512,uh=513,dh=514,qo=515,fh=516,ph=517,Yo=518,Zo=519;var Jo="300 es",$o=2000;function vu(tt){for(let et=tt.length-1;et>=0;--et)if(tt[et]>=65535)return!0;return!1}function yu(tt){return ArrayBuffer.isView(tt)&&!(tt instanceof DataView)}function Gs(tt){return document.createElementNS("http://www.w3.org/1999/xhtml",tt)}function mh(){let tt=Gs("canvas");return tt.style.display="block",tt}var Nl={},ks=null;function hr(...tt){let et="THREE."+tt.shift();if(ks)ks("log",et,...tt);else console.log(et,...tt)}function gh(tt){let et=tt[0];if(typeof et==="string"&&et.startsWith("TSL:")){let nt=tt[1];if(nt&&nt.isStackTrace)tt[0]+=" "+nt.getLocation();else tt[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return tt}function _n(...tt){tt=gh(tt);let et="THREE."+tt.shift();if(ks)ks("warn",et,...tt);else{let nt=tt[0];if(nt&&nt.isStackTrace)console.warn(nt.getError(et));else console.warn(et,...tt)}}function Tn(...tt){tt=gh(tt);let et="THREE."+tt.shift();if(ks)ks("error",et,...tt);else{let nt=tt[0];if(nt&&nt.isStackTrace)console.error(nt.getError(et));else console.error(et,...tt)}}function ps(...tt){let et=tt.join(" ");if(et in Nl)return;Nl[et]=!0,_n(...tt)}function _h(tt,et,nt){return new Promise(function(it,st){function rt(){switch(tt.clientWaitSync(et,tt.SYNC_FLUSH_COMMANDS_BIT,0)){case tt.WAIT_FAILED:st();break;case tt.TIMEOUT_EXPIRED:setTimeout(rt,nt);break;default:it()}}setTimeout(rt,nt)})}var xh={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Zi{addEventListener(tt,et){if(this._listeners===void 0)this._listeners={};let nt=this._listeners;if(nt[tt]===void 0)nt[tt]=[];if(nt[tt].indexOf(et)===-1)nt[tt].push(et)}hasEventListener(tt,et){let nt=this._listeners;if(nt===void 0)return!1;return nt[tt]!==void 0&&nt[tt].indexOf(et)!==-1}removeEventListener(tt,et){let nt=this._listeners;if(nt===void 0)return;let it=nt[tt];if(it!==void 0){let st=it.indexOf(et);if(st!==-1)it.splice(st,1)}}dispatchEvent(tt){let et=this._listeners;if(et===void 0)return;let nt=et[tt.type];if(nt!==void 0){tt.target=this;let it=nt.slice(0);for(let st=0,rt=it.length;st<rt;st++)it[st].call(this,tt);tt.target=null}}}var li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=1234567,lr=Math.PI/180,ms=180/Math.PI;function Di(){let tt=Math.random()*4294967295|0,et=Math.random()*4294967295|0,nt=Math.random()*4294967295|0,it=Math.random()*4294967295|0;return(li[tt&255]+li[tt>>8&255]+li[tt>>16&255]+li[tt>>24&255]+"-"+li[et&255]+li[et>>8&255]+"-"+li[et>>16&15|64]+li[et>>24&255]+"-"+li[nt&63|128]+li[nt>>8&255]+"-"+li[nt>>16&255]+li[nt>>24&255]+li[it&255]+li[it>>8&255]+li[it>>16&255]+li[it>>24&255]).toLowerCase()}function In(tt,et,nt){return Math.max(et,Math.min(nt,tt))}function Ko(tt,et){return(tt%et+et)%et}function Su(tt,et,nt,it,st){return it+(tt-et)*(st-it)/(nt-et)}function Mu(tt,et,nt){if(tt!==et)return(nt-tt)/(et-tt);else return 0}function cr(tt,et,nt){return(1-nt)*tt+nt*et}function bu(tt,et,nt,it){return cr(tt,et,1-Math.exp(-nt*it))}function Tu(tt,et=1){return et-Math.abs(Ko(tt,et*2)-et)}function Eu(tt,et,nt){if(tt<=et)return 0;if(tt>=nt)return 1;return tt=(tt-et)/(nt-et),tt*tt*(3-2*tt)}function Au(tt,et,nt){if(tt<=et)return 0;if(tt>=nt)return 1;return tt=(tt-et)/(nt-et),tt*tt*tt*(tt*(tt*6-15)+10)}function wu(tt,et){return tt+Math.floor(Math.random()*(et-tt+1))}function Ru(tt,et){return tt+Math.random()*(et-tt)}function Cu(tt){return tt*(0.5-Math.random())}function Iu(tt){if(tt!==void 0)Dl=tt;let et=Dl+=1831565813;return et=Math.imul(et^et>>>15,et|1),et^=et+Math.imul(et^et>>>7,et|61),((et^et>>>14)>>>0)/4294967296}function Pu(tt){return tt*lr}function Lu(tt){return tt*ms}function Nu(tt){return tt>0&&Number.isInteger(tt)&&2**Math.round(Math.log2(tt))===tt}function Du(tt){return Math.pow(2,Math.ceil(Math.log(tt)/Math.LN2))}function Qo(tt){return Math.pow(2,Math.floor(Math.log(tt)/Math.LN2))}function Uu(tt,et,nt,it,st){let{cos:rt,sin:at}=Math,ot=rt(nt/2),lt=at(nt/2),ct=rt((et+it)/2),ut=at((et+it)/2),dt=rt((et-it)/2),ht=at((et-it)/2),ft=rt((it-et)/2),vt=at((it-et)/2);switch(st){case"XYX":tt.set(ot*ut,lt*dt,lt*ht,ot*ct);break;case"YZY":tt.set(lt*ht,ot*ut,lt*dt,ot*ct);break;case"ZXZ":tt.set(lt*dt,lt*ht,ot*ut,ot*ct);break;case"XZX":tt.set(ot*ut,lt*vt,lt*ft,ot*ct);break;case"YXY":tt.set(lt*ft,ot*ut,lt*vt,ot*ct);break;case"ZYZ":tt.set(lt*vt,lt*ft,ot*ut,ot*ct);break;default:_n("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+st)}}function ha(tt){switch(tt.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jo(tt,et){if(et.constructor===Float32Array)return tt;let nt=ha(et);if(nt===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(tt/nt,-1)}function tl(tt,et){if(et.constructor===Float32Array)return tt;let nt=ha(et);if(nt===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(tt*nt)}var h={DEG2RAD:lr,RAD2DEG:ms,generateUUID:Di,clamp:In,euclideanModulo:Ko,mapLinear:Su,inverseLerp:Mu,lerp:cr,damp:bu,pingpong:Tu,smoothstep:Eu,smootherstep:Au,randInt:wu,randFloat:Ru,randFloatSpread:Cu,seededRandom:Iu,degToRad:Pu,radToDeg:Lu,isPowerOfTwo:Nu,ceilPowerOfTwo:Du,floorPowerOfTwo:Qo,setQuaternionFromProperEuler:Uu,normalize:tl,denormalize:jo};class n{static{this.prototype.isVector2=!0}constructor(tt=0,et=0){this.x=tt,this.y=et}get width(){return this.x}set width(tt){this.x=tt}get height(){return this.y}set height(tt){this.y=tt}set(tt,et){return this.x=tt,this.y=et,this}setScalar(tt){return this.x=tt,this.y=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;default:throw Error("THREE.Vector2: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y)}copy(tt){return this.x=tt.x,this.y=tt.y,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this}addScalar(tt){return this.x+=tt,this.y+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this}subScalar(tt){return this.x-=tt,this.y-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this}divide(tt){return this.x/=tt.x,this.y/=tt.y,this}divideScalar(tt){return this.multiplyScalar(1/tt)}applyMatrix3(tt){let et=this.x,nt=this.y,it=tt.elements;return this.x=it[0]*et+it[3]*nt+it[6],this.y=it[1]*et+it[4]*nt+it[7],this}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this}clamp(tt,et){return this.x=In(this.x,tt.x,et.x),this.y=In(this.y,tt.y,et.y),this}clampScalar(tt,et){return this.x=In(this.x,tt,et),this.y=In(this.y,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(In(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(tt){return this.x*tt.x+this.y*tt.y}cross(tt){return this.x*tt.y-this.y*tt.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(tt){let et=Math.sqrt(this.lengthSq()*tt.lengthSq());if(et===0)return Math.PI/2;let nt=this.dot(tt)/et;return Math.acos(In(nt,-1,1))}distanceTo(tt){return Math.sqrt(this.distanceToSquared(tt))}distanceToSquared(tt){let et=this.x-tt.x,nt=this.y-tt.y;return et*et+nt*nt}manhattanDistanceTo(tt){return Math.abs(this.x-tt.x)+Math.abs(this.y-tt.y)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this}equals(tt){return tt.x===this.x&&tt.y===this.y}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this}rotateAround(tt,et){let nt=Math.cos(et),it=Math.sin(et),st=this.x-tt.x,rt=this.y-tt.y;return this.x=st*nt-rt*it+tt.x,this.y=st*it+rt*nt+tt.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class R{constructor(tt=0,et=0,nt=0,it=1){this.isQuaternion=!0,this._x=tt,this._y=et,this._z=nt,this._w=it}static slerpFlat(tt,et,nt,it,st,rt,at){let ot=nt[it+0],lt=nt[it+1],ct=nt[it+2],ut=nt[it+3],dt=st[rt+0],ht=st[rt+1],ft=st[rt+2],vt=st[rt+3];if(ut!==vt||ot!==dt||lt!==ht||ct!==ft){let St=ot*dt+lt*ht+ct*ft+ut*vt;if(St<0)dt=-dt,ht=-ht,ft=-ft,vt=-vt,St=-St;let pt=1-at;if(St<0.9995){let mt=Math.acos(St),Tt=Math.sin(mt);pt=Math.sin(pt*mt)/Tt,at=Math.sin(at*mt)/Tt,ot=ot*pt+dt*at,lt=lt*pt+ht*at,ct=ct*pt+ft*at,ut=ut*pt+vt*at}else{ot=ot*pt+dt*at,lt=lt*pt+ht*at,ct=ct*pt+ft*at,ut=ut*pt+vt*at;let mt=1/Math.sqrt(ot*ot+lt*lt+ct*ct+ut*ut);ot*=mt,lt*=mt,ct*=mt,ut*=mt}}tt[et]=ot,tt[et+1]=lt,tt[et+2]=ct,tt[et+3]=ut}static multiplyQuaternionsFlat(tt,et,nt,it,st,rt){let at=nt[it],ot=nt[it+1],lt=nt[it+2],ct=nt[it+3],ut=st[rt],dt=st[rt+1],ht=st[rt+2],ft=st[rt+3];return tt[et]=at*ft+ct*ut+ot*ht-lt*dt,tt[et+1]=ot*ft+ct*dt+lt*ut-at*ht,tt[et+2]=lt*ft+ct*ht+at*dt-ot*ut,tt[et+3]=ct*ft-at*ut-ot*dt-lt*ht,tt}get x(){return this._x}set x(tt){this._x=tt,this._onChangeCallback()}get y(){return this._y}set y(tt){this._y=tt,this._onChangeCallback()}get z(){return this._z}set z(tt){this._z=tt,this._onChangeCallback()}get w(){return this._w}set w(tt){this._w=tt,this._onChangeCallback()}set(tt,et,nt,it){return this._x=tt,this._y=et,this._z=nt,this._w=it,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(tt){return this._x=tt.x,this._y=tt.y,this._z=tt.z,this._w=tt.w,this._onChangeCallback(),this}setFromEuler(tt,et=!0){let{_x:nt,_y:it,_z:st,_order:rt}=tt,{cos:at,sin:ot}=Math,lt=at(nt/2),ct=at(it/2),ut=at(st/2),dt=ot(nt/2),ht=ot(it/2),ft=ot(st/2);switch(rt){case"XYZ":this._x=dt*ct*ut+lt*ht*ft,this._y=lt*ht*ut-dt*ct*ft,this._z=lt*ct*ft+dt*ht*ut,this._w=lt*ct*ut-dt*ht*ft;break;case"YXZ":this._x=dt*ct*ut+lt*ht*ft,this._y=lt*ht*ut-dt*ct*ft,this._z=lt*ct*ft-dt*ht*ut,this._w=lt*ct*ut+dt*ht*ft;break;case"ZXY":this._x=dt*ct*ut-lt*ht*ft,this._y=lt*ht*ut+dt*ct*ft,this._z=lt*ct*ft+dt*ht*ut,this._w=lt*ct*ut-dt*ht*ft;break;case"ZYX":this._x=dt*ct*ut-lt*ht*ft,this._y=lt*ht*ut+dt*ct*ft,this._z=lt*ct*ft-dt*ht*ut,this._w=lt*ct*ut+dt*ht*ft;break;case"YZX":this._x=dt*ct*ut+lt*ht*ft,this._y=lt*ht*ut+dt*ct*ft,this._z=lt*ct*ft-dt*ht*ut,this._w=lt*ct*ut-dt*ht*ft;break;case"XZY":this._x=dt*ct*ut-lt*ht*ft,this._y=lt*ht*ut-dt*ct*ft,this._z=lt*ct*ft+dt*ht*ut,this._w=lt*ct*ut+dt*ht*ft;break;default:_n("Quaternion: .setFromEuler() encountered an unknown order: "+rt)}if(et===!0)this._onChangeCallback();return this}setFromAxisAngle(tt,et){let nt=et/2,it=Math.sin(nt);return this._x=tt.x*it,this._y=tt.y*it,this._z=tt.z*it,this._w=Math.cos(nt),this._onChangeCallback(),this}setFromRotationMatrix(tt){let et=tt.elements,nt=et[0],it=et[4],st=et[8],rt=et[1],at=et[5],ot=et[9],lt=et[2],ct=et[6],ut=et[10],dt=nt+at+ut;if(dt>0){let ht=0.5/Math.sqrt(dt+1);this._w=0.25/ht,this._x=(ct-ot)*ht,this._y=(st-lt)*ht,this._z=(rt-it)*ht}else if(nt>at&&nt>ut){let ht=2*Math.sqrt(1+nt-at-ut);this._w=(ct-ot)/ht,this._x=0.25*ht,this._y=(it+rt)/ht,this._z=(st+lt)/ht}else if(at>ut){let ht=2*Math.sqrt(1+at-nt-ut);this._w=(st-lt)/ht,this._x=(it+rt)/ht,this._y=0.25*ht,this._z=(ot+ct)/ht}else{let ht=2*Math.sqrt(1+ut-nt-at);this._w=(rt-it)/ht,this._x=(st+lt)/ht,this._y=(ot+ct)/ht,this._z=0.25*ht}return this._onChangeCallback(),this}setFromUnitVectors(tt,et){let nt=tt.dot(et)+1;if(nt<0.00000001)if(nt=0,Math.abs(tt.x)>Math.abs(tt.z))this._x=-tt.y,this._y=tt.x,this._z=0,this._w=nt;else this._x=0,this._y=-tt.z,this._z=tt.y,this._w=nt;else this._x=tt.y*et.z-tt.z*et.y,this._y=tt.z*et.x-tt.x*et.z,this._z=tt.x*et.y-tt.y*et.x,this._w=nt;return this.normalize()}angleTo(tt){return 2*Math.acos(Math.abs(In(this.dot(tt),-1,1)))}rotateTowards(tt,et){let nt=this.angleTo(tt);if(nt===0)return this;let it=Math.min(1,et/nt);return this.slerp(tt,it),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(tt){return this._x*tt._x+this._y*tt._y+this._z*tt._z+this._w*tt._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let tt=this.length();if(tt===0)this._x=0,this._y=0,this._z=0,this._w=1;else tt=1/tt,this._x=this._x*tt,this._y=this._y*tt,this._z=this._z*tt,this._w=this._w*tt;return this._onChangeCallback(),this}multiply(tt){return this.multiplyQuaternions(this,tt)}premultiply(tt){return this.multiplyQuaternions(tt,this)}multiplyQuaternions(tt,et){let{_x:nt,_y:it,_z:st,_w:rt}=tt,{_x:at,_y:ot,_z:lt,_w:ct}=et;return this._x=nt*ct+rt*at+it*lt-st*ot,this._y=it*ct+rt*ot+st*at-nt*lt,this._z=st*ct+rt*lt+nt*ot-it*at,this._w=rt*ct-nt*at-it*ot-st*lt,this._onChangeCallback(),this}slerp(tt,et){let{_x:nt,_y:it,_z:st,_w:rt}=tt,at=this.dot(tt);if(at<0)nt=-nt,it=-it,st=-st,rt=-rt,at=-at;let ot=1-et;if(at<0.9995){let lt=Math.acos(at),ct=Math.sin(lt);ot=Math.sin(ot*lt)/ct,et=Math.sin(et*lt)/ct,this._x=this._x*ot+nt*et,this._y=this._y*ot+it*et,this._z=this._z*ot+st*et,this._w=this._w*ot+rt*et,this._onChangeCallback()}else this._x=this._x*ot+nt*et,this._y=this._y*ot+it*et,this._z=this._z*ot+st*et,this._w=this._w*ot+rt*et,this.normalize();return this}slerpQuaternions(tt,et,nt){return this.copy(tt).slerp(et,nt)}random(){let tt=2*Math.PI*Math.random(),et=2*Math.PI*Math.random(),nt=Math.random(),it=Math.sqrt(1-nt),st=Math.sqrt(nt);return this.set(it*Math.sin(tt),it*Math.cos(tt),st*Math.sin(et),st*Math.cos(et))}equals(tt){return tt._x===this._x&&tt._y===this._y&&tt._z===this._z&&tt._w===this._w}fromArray(tt,et=0){return this._x=tt[et],this._y=tt[et+1],this._z=tt[et+2],this._w=tt[et+3],this._onChangeCallback(),this}toArray(tt=[],et=0){return tt[et]=this._x,tt[et+1]=this._y,tt[et+2]=this._z,tt[et+3]=this._w,tt}fromBufferAttribute(tt,et){return this._x=tt.getX(et),this._y=tt.getY(et),this._z=tt.getZ(et),this._w=tt.getW(et),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(tt){return this._onChangeCallback=tt,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class e{static{this.prototype.isVector3=!0}constructor(tt=0,et=0,nt=0){this.x=tt,this.y=et,this.z=nt}set(tt,et,nt){if(nt===void 0)nt=this.z;return this.x=tt,this.y=et,this.z=nt,this}setScalar(tt){return this.x=tt,this.y=tt,this.z=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setZ(tt){return this.z=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;case 2:this.z=et;break;default:throw Error("THREE.Vector3: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(tt){return this.x=tt.x,this.y=tt.y,this.z=tt.z,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this.z+=tt.z,this}addScalar(tt){return this.x+=tt,this.y+=tt,this.z+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this.z=tt.z+et.z,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this.z+=tt.z*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this.z-=tt.z,this}subScalar(tt){return this.x-=tt,this.y-=tt,this.z-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this.z=tt.z-et.z,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this.z*=tt.z,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this.z*=tt,this}multiplyVectors(tt,et){return this.x=tt.x*et.x,this.y=tt.y*et.y,this.z=tt.z*et.z,this}applyEuler(tt){return this.applyQuaternion(Ul.setFromEuler(tt))}applyAxisAngle(tt,et){return this.applyQuaternion(Ul.setFromAxisAngle(tt,et))}applyMatrix3(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements;return this.x=st[0]*et+st[3]*nt+st[6]*it,this.y=st[1]*et+st[4]*nt+st[7]*it,this.z=st[2]*et+st[5]*nt+st[8]*it,this}applyNormalMatrix(tt){return this.applyMatrix3(tt).normalize()}applyMatrix4(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements,rt=1/(st[3]*et+st[7]*nt+st[11]*it+st[15]);return this.x=(st[0]*et+st[4]*nt+st[8]*it+st[12])*rt,this.y=(st[1]*et+st[5]*nt+st[9]*it+st[13])*rt,this.z=(st[2]*et+st[6]*nt+st[10]*it+st[14])*rt,this}applyQuaternion(tt){let et=this.x,nt=this.y,it=this.z,{x:st,y:rt,z:at,w:ot}=tt,lt=2*(rt*it-at*nt),ct=2*(at*et-st*it),ut=2*(st*nt-rt*et);return this.x=et+ot*lt+rt*ut-at*ct,this.y=nt+ot*ct+at*lt-st*ut,this.z=it+ot*ut+st*ct-rt*lt,this}project(tt){return this.applyMatrix4(tt.matrixWorldInverse).applyMatrix4(tt.projectionMatrix)}unproject(tt){return this.applyMatrix4(tt.projectionMatrixInverse).applyMatrix4(tt.matrixWorld)}transformDirection(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements;return this.x=st[0]*et+st[4]*nt+st[8]*it,this.y=st[1]*et+st[5]*nt+st[9]*it,this.z=st[2]*et+st[6]*nt+st[10]*it,this.normalize()}divide(tt){return this.x/=tt.x,this.y/=tt.y,this.z/=tt.z,this}divideScalar(tt){return this.multiplyScalar(1/tt)}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this.z=Math.min(this.z,tt.z),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this.z=Math.max(this.z,tt.z),this}clamp(tt,et){return this.x=In(this.x,tt.x,et.x),this.y=In(this.y,tt.y,et.y),this.z=In(this.z,tt.z,et.z),this}clampScalar(tt,et){return this.x=In(this.x,tt,et),this.y=In(this.y,tt,et),this.z=In(this.z,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(In(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(tt){return this.x*tt.x+this.y*tt.y+this.z*tt.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this.z+=(tt.z-this.z)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this.z=tt.z+(et.z-tt.z)*nt,this}cross(tt){return this.crossVectors(this,tt)}crossVectors(tt,et){let{x:nt,y:it,z:st}=tt,{x:rt,y:at,z:ot}=et;return this.x=it*ot-st*at,this.y=st*rt-nt*ot,this.z=nt*at-it*rt,this}projectOnVector(tt){let et=tt.lengthSq();if(et===0)return this.set(0,0,0);let nt=tt.dot(this)/et;return this.copy(tt).multiplyScalar(nt)}projectOnPlane(tt){return Ra.copy(this).projectOnVector(tt),this.sub(Ra)}reflect(tt){return this.sub(Ra.copy(tt).multiplyScalar(2*this.dot(tt)))}angleTo(tt){let et=Math.sqrt(this.lengthSq()*tt.lengthSq());if(et===0)return Math.PI/2;let nt=this.dot(tt)/et;return Math.acos(In(nt,-1,1))}distanceTo(tt){return Math.sqrt(this.distanceToSquared(tt))}distanceToSquared(tt){let et=this.x-tt.x,nt=this.y-tt.y,it=this.z-tt.z;return et*et+nt*nt+it*it}manhattanDistanceTo(tt){return Math.abs(this.x-tt.x)+Math.abs(this.y-tt.y)+Math.abs(this.z-tt.z)}setFromSpherical(tt){return this.setFromSphericalCoords(tt.radius,tt.phi,tt.theta)}setFromSphericalCoords(tt,et,nt){let it=Math.sin(et)*tt;return this.x=it*Math.sin(nt),this.y=Math.cos(et)*tt,this.z=it*Math.cos(nt),this}setFromCylindrical(tt){return this.setFromCylindricalCoords(tt.radius,tt.theta,tt.y)}setFromCylindricalCoords(tt,et,nt){return this.x=tt*Math.sin(et),this.y=nt,this.z=tt*Math.cos(et),this}setFromMatrixPosition(tt){let et=tt.elements;return this.x=et[12],this.y=et[13],this.z=et[14],this}setFromMatrixScale(tt){let et=this.setFromMatrixColumn(tt,0).length(),nt=this.setFromMatrixColumn(tt,1).length(),it=this.setFromMatrixColumn(tt,2).length();return this.x=et,this.y=nt,this.z=it,this}setFromMatrixColumn(tt,et){return this.fromArray(tt.elements,et*4)}setFromMatrix3Column(tt,et){return this.fromArray(tt.elements,et*3)}setFromEuler(tt){return this.x=tt._x,this.y=tt._y,this.z=tt._z,this}setFromColor(tt){return this.x=tt.r,this.y=tt.g,this.z=tt.b,this}equals(tt){return tt.x===this.x&&tt.y===this.y&&tt.z===this.z}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this.z=tt[et+2],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt[et+2]=this.z,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this.z=tt.getZ(et),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let tt=Math.random()*Math.PI*2,et=Math.random()*2-1,nt=Math.sqrt(1-et*et);return this.x=nt*Math.cos(tt),this.y=et,this.z=nt*Math.sin(tt),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Ra=new e,Ul=new R;class En{static{this.prototype.isMatrix3=!0}constructor(tt,et,nt,it,st,rt,at,ot,lt){if(this.elements=[1,0,0,0,1,0,0,0,1],tt!==void 0)this.set(tt,et,nt,it,st,rt,at,ot,lt)}set(tt,et,nt,it,st,rt,at,ot,lt){let ct=this.elements;return ct[0]=tt,ct[1]=it,ct[2]=at,ct[3]=et,ct[4]=st,ct[5]=ot,ct[6]=nt,ct[7]=rt,ct[8]=lt,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(tt){let et=this.elements,nt=tt.elements;return et[0]=nt[0],et[1]=nt[1],et[2]=nt[2],et[3]=nt[3],et[4]=nt[4],et[5]=nt[5],et[6]=nt[6],et[7]=nt[7],et[8]=nt[8],this}extractBasis(tt,et,nt){return tt.setFromMatrix3Column(this,0),et.setFromMatrix3Column(this,1),nt.setFromMatrix3Column(this,2),this}setFromMatrix4(tt){let et=tt.elements;return this.set(et[0],et[4],et[8],et[1],et[5],et[9],et[2],et[6],et[10]),this}multiply(tt){return this.multiplyMatrices(this,tt)}premultiply(tt){return this.multiplyMatrices(tt,this)}multiplyMatrices(tt,et){let nt=tt.elements,it=et.elements,st=this.elements,rt=nt[0],at=nt[3],ot=nt[6],lt=nt[1],ct=nt[4],ut=nt[7],dt=nt[2],ht=nt[5],ft=nt[8],vt=it[0],St=it[3],pt=it[6],mt=it[1],Tt=it[4],At=it[7],bt=it[2],Et=it[5],It=it[8];return st[0]=rt*vt+at*mt+ot*bt,st[3]=rt*St+at*Tt+ot*Et,st[6]=rt*pt+at*At+ot*It,st[1]=lt*vt+ct*mt+ut*bt,st[4]=lt*St+ct*Tt+ut*Et,st[7]=lt*pt+ct*At+ut*It,st[2]=dt*vt+ht*mt+ft*bt,st[5]=dt*St+ht*Tt+ft*Et,st[8]=dt*pt+ht*At+ft*It,this}multiplyScalar(tt){let et=this.elements;return et[0]*=tt,et[3]*=tt,et[6]*=tt,et[1]*=tt,et[4]*=tt,et[7]*=tt,et[2]*=tt,et[5]*=tt,et[8]*=tt,this}determinant(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8];return et*rt*ct-et*at*lt-nt*st*ct+nt*at*ot+it*st*lt-it*rt*ot}invert(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8],ut=ct*rt-at*lt,dt=at*ot-ct*st,ht=lt*st-rt*ot,ft=et*ut+nt*dt+it*ht;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0);let vt=1/ft;return tt[0]=ut*vt,tt[1]=(it*lt-ct*nt)*vt,tt[2]=(at*nt-it*rt)*vt,tt[3]=dt*vt,tt[4]=(ct*et-it*ot)*vt,tt[5]=(it*st-at*et)*vt,tt[6]=ht*vt,tt[7]=(nt*ot-lt*et)*vt,tt[8]=(rt*et-nt*st)*vt,this}transpose(){let tt,et=this.elements;return tt=et[1],et[1]=et[3],et[3]=tt,tt=et[2],et[2]=et[6],et[6]=tt,tt=et[5],et[5]=et[7],et[7]=tt,this}getNormalMatrix(tt){return this.setFromMatrix4(tt).invert().transpose()}transposeIntoArray(tt){let et=this.elements;return tt[0]=et[0],tt[1]=et[3],tt[2]=et[6],tt[3]=et[1],tt[4]=et[4],tt[5]=et[7],tt[6]=et[2],tt[7]=et[5],tt[8]=et[8],this}setUvTransform(tt,et,nt,it,st,rt,at){let ot=Math.cos(st),lt=Math.sin(st);return this.set(nt*ot,nt*lt,-nt*(ot*rt+lt*at)+rt+tt,-it*lt,it*ot,-it*(-lt*rt+ot*at)+at+et,0,0,1),this}scale(tt,et){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ca.makeScale(tt,et)),this}rotate(tt){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ca.makeRotation(-tt)),this}translate(tt,et){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ca.makeTranslation(tt,et)),this}makeTranslation(tt,et){if(tt.isVector2)this.set(1,0,tt.x,0,1,tt.y,0,0,1);else this.set(1,0,tt,0,1,et,0,0,1);return this}makeRotation(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,-nt,0,nt,et,0,0,0,1),this}makeScale(tt,et){return this.set(tt,0,0,0,et,0,0,0,1),this}equals(tt){let et=this.elements,nt=tt.elements;for(let it=0;it<9;it++)if(et[it]!==nt[it])return!1;return!0}fromArray(tt,et=0){for(let nt=0;nt<9;nt++)this.elements[nt]=tt[nt+et];return this}toArray(tt=[],et=0){let nt=this.elements;return tt[et]=nt[0],tt[et+1]=nt[1],tt[et+2]=nt[2],tt[et+3]=nt[3],tt[et+4]=nt[4],tt[et+5]=nt[5],tt[et+6]=nt[6],tt[et+7]=nt[7],tt[et+8]=nt[8],tt}clone(){return new this.constructor().fromArray(this.elements)}}var Ca=new En,Fl=new En().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ol=new En().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Fu(){let tt={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(st,rt,at){if(this.enabled===!1||rt===at||!rt||!at)return st;if(this.spaces[rt].transfer==="srgb")st.r=Xi(st.r),st.g=Xi(st.g),st.b=Xi(st.b);if(this.spaces[rt].primaries!==this.spaces[at].primaries)st.applyMatrix3(this.spaces[rt].toXYZ),st.applyMatrix3(this.spaces[at].fromXYZ);if(this.spaces[at].transfer==="srgb")st.r=zs(st.r),st.g=zs(st.g),st.b=zs(st.b);return st},workingToColorSpace:function(st,rt){return this.convert(st,this.workingColorSpace,rt)},colorSpaceToWorking:function(st,rt){return this.convert(st,rt,this.workingColorSpace)},getPrimaries:function(st){return this.spaces[st].primaries},getTransfer:function(st){if(st==="")return"linear";return this.spaces[st].transfer},getToneMappingMode:function(st){return this.spaces[st].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(st,rt=this.workingColorSpace){return st.fromArray(this.spaces[rt].luminanceCoefficients)},define:function(st){Object.assign(this.spaces,st)},_getMatrix:function(st,rt,at){return st.copy(this.spaces[at].fromXYZ).multiply(this.spaces[rt].toXYZ)},_getDrawingBufferColorSpace:function(st){return this.spaces[st].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(st=this.workingColorSpace){return this.spaces[st].workingColorSpaceConfig.unpackColorSpace}},et=[0.64,0.33,0.3,0.6,0.15,0.06],nt=[0.2126,0.7152,0.0722],it=[0.3127,0.329];return tt.define({["srgb-linear"]:{primaries:et,whitePoint:it,transfer:"linear",toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:nt,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:et,whitePoint:it,transfer:"srgb",toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:nt,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),tt}var s=Fu();function Xi(tt){return tt<0.04045?tt*0.0773993808:Math.pow(tt*0.9478672986+0.0521327014,2.4)}function zs(tt){return tt<0.0031308?tt*12.92:1.055*Math.pow(tt,0.41666)-0.055}var Ss;class el{static getDataURL(tt,et="image/png"){if(/^data:/i.test(tt.src))return tt.src;if(typeof HTMLCanvasElement>"u")return tt.src;let nt;if(tt instanceof HTMLCanvasElement)nt=tt;else{if(Ss===void 0)Ss=Gs("canvas");Ss.width=tt.width,Ss.height=tt.height;let it=Ss.getContext("2d");if(tt instanceof ImageData)it.putImageData(tt,0,0);else it.drawImage(tt,0,0,tt.width,tt.height);nt=Ss}return nt.toDataURL(et)}static sRGBToLinear(tt){if(typeof HTMLImageElement<"u"&&tt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&tt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&tt instanceof ImageBitmap){let et=Gs("canvas");et.width=tt.width,et.height=tt.height;let nt=et.getContext("2d");nt.drawImage(tt,0,0,tt.width,tt.height);let it=nt.getImageData(0,0,tt.width,tt.height),st=it.data;for(let rt=0;rt<st.length;rt++)st[rt]=Xi(st[rt]/255)*255;return nt.putImageData(it,0,0),et}else if(tt.data){let et=tt.data.slice(0);for(let nt=0;nt<et.length;nt++)if(et instanceof Uint8Array||et instanceof Uint8ClampedArray)et[nt]=Math.floor(Xi(et[nt]/255)*255);else et[nt]=Xi(et[nt]);return{data:et,width:tt.width,height:tt.height}}else return _n("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),tt}}var Ou=0;class mr{constructor(tt=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Di(),this.data=tt,this.dataReady=!0,this.version=0}getSize(tt){let et=this.data;if(typeof HTMLVideoElement<"u"&&et instanceof HTMLVideoElement)tt.set(et.videoWidth,et.videoHeight,0);else if(typeof VideoFrame<"u"&&et instanceof VideoFrame)tt.set(et.displayWidth,et.displayHeight,0);else if(et!==null)tt.set(et.width||0,et.height||0,et.depth||0);else tt.set(0,0,0);return tt}set needsUpdate(tt){if(tt===!0)this.version++}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(!et&&tt.images[this.uuid]!==void 0)return tt.images[this.uuid];let nt={uuid:this.uuid,url:""},it=this.data;if(it!==null){let st;if(Array.isArray(it)){st=[];for(let rt=0,at=it.length;rt<at;rt++)if(it[rt].isDataTexture)st.push(Ia(it[rt].image));else st.push(Ia(it[rt]))}else st=Ia(it);nt.url=st}if(!et)tt.images[this.uuid]=nt;return nt}}function Ia(tt){if(typeof HTMLImageElement<"u"&&tt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&tt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&tt instanceof ImageBitmap)return el.getDataURL(tt);else if(tt.data)return{data:Array.from(tt.data),width:tt.width,height:tt.height,type:tt.data.constructor.name};else return _n("Texture: Unable to serialize Texture."),{}}var Bu=0,Pa=new e;class x extends Zi{constructor(tt=x.DEFAULT_IMAGE,et=x.DEFAULT_MAPPING,nt=1001,it=1001,st=1006,rt=1008,at=1023,ot=1009,lt=x.DEFAULT_ANISOTROPY,ct=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Di(),this.name="",this.source=new mr(tt),this.mipmaps=[],this.mapping=et,this.channel=0,this.wrapS=nt,this.wrapT=it,this.magFilter=st,this.minFilter=rt,this.anisotropy=lt,this.format=at,this.internalFormat=null,this.type=ot,this.offset=new n(0,0),this.repeat=new n(1,1),this.center=new n(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new En,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=ct,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=tt&&tt.depth&&tt.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(tt){this.source.data=tt}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(tt){return this.name=tt.name,this.source=tt.source,this.mipmaps=tt.mipmaps.slice(0),this.mapping=tt.mapping,this.channel=tt.channel,this.wrapS=tt.wrapS,this.wrapT=tt.wrapT,this.magFilter=tt.magFilter,this.minFilter=tt.minFilter,this.anisotropy=tt.anisotropy,this.format=tt.format,this.internalFormat=tt.internalFormat,this.type=tt.type,this.normalized=tt.normalized,this.offset.copy(tt.offset),this.repeat.copy(tt.repeat),this.center.copy(tt.center),this.rotation=tt.rotation,this.matrixAutoUpdate=tt.matrixAutoUpdate,this.matrix.copy(tt.matrix),this.generateMipmaps=tt.generateMipmaps,this.mipmapsAutoUpdate=tt.mipmapsAutoUpdate,this.premultiplyAlpha=tt.premultiplyAlpha,this.flipY=tt.flipY,this.unpackAlignment=tt.unpackAlignment,this.colorSpace=tt.colorSpace,this.renderTarget=tt.renderTarget,this.isRenderTargetTexture=tt.isRenderTargetTexture,this.isPMREMTexture=tt.isPMREMTexture,this.isArrayTexture=tt.isArrayTexture,this.userData=JSON.parse(JSON.stringify(tt.userData)),this.needsUpdate=!0,this}setValues(tt){for(let et in tt){let nt=tt[et];if(nt===void 0){_n(`Texture.setValues(): parameter '${et}' has value of undefined.`);continue}let it=this[et];if(it===void 0){_n(`Texture.setValues(): property '${et}' does not exist.`);continue}if(it&&nt&&(it.isVector2&&nt.isVector2))it.copy(nt);else if(it&&nt&&(it.isVector3&&nt.isVector3))it.copy(nt);else if(it&&nt&&(it.isMatrix3&&nt.isMatrix3))it.copy(nt);else this[et]=nt}}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(!et&&tt.textures[this.uuid]!==void 0)return tt.textures[this.uuid];let nt={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(tt).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)nt.userData=this.userData;if(!et)tt.textures[this.uuid]=nt;return nt}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(tt){if(this.mapping!==300)return tt;if(tt.applyMatrix3(this.matrix),tt.x<0||tt.x>1)switch(this.wrapS){case 1000:tt.x=tt.x-Math.floor(tt.x);break;case 1001:tt.x=tt.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(tt.x)%2)===1)tt.x=Math.ceil(tt.x)-tt.x;else tt.x=tt.x-Math.floor(tt.x);break}if(tt.y<0||tt.y>1)switch(this.wrapT){case 1000:tt.y=tt.y-Math.floor(tt.y);break;case 1001:tt.y=tt.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(tt.y)%2)===1)tt.y=Math.ceil(tt.y)-tt.y;else tt.y=tt.y-Math.floor(tt.y);break}if(this.flipY)tt.y=1-tt.y;return tt}set needsUpdate(tt){if(tt===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(tt){if(tt===!0)this.pmremVersion++}}x.DEFAULT_IMAGE=null;x.DEFAULT_MAPPING=300;x.DEFAULT_ANISOTROPY=1;class a{static{this.prototype.isVector4=!0}constructor(tt=0,et=0,nt=0,it=1){this.x=tt,this.y=et,this.z=nt,this.w=it}get width(){return this.z}set width(tt){this.z=tt}get height(){return this.w}set height(tt){this.w=tt}set(tt,et,nt,it){return this.x=tt,this.y=et,this.z=nt,this.w=it,this}setScalar(tt){return this.x=tt,this.y=tt,this.z=tt,this.w=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setZ(tt){return this.z=tt,this}setW(tt){return this.w=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;case 2:this.z=et;break;case 3:this.w=et;break;default:throw Error("THREE.Vector4: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(tt){return this.x=tt.x,this.y=tt.y,this.z=tt.z,this.w=tt.w!==void 0?tt.w:1,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this.z+=tt.z,this.w+=tt.w,this}addScalar(tt){return this.x+=tt,this.y+=tt,this.z+=tt,this.w+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this.z=tt.z+et.z,this.w=tt.w+et.w,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this.z+=tt.z*et,this.w+=tt.w*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this.z-=tt.z,this.w-=tt.w,this}subScalar(tt){return this.x-=tt,this.y-=tt,this.z-=tt,this.w-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this.z=tt.z-et.z,this.w=tt.w-et.w,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this.z*=tt.z,this.w*=tt.w,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this.z*=tt,this.w*=tt,this}applyMatrix4(tt){let et=this.x,nt=this.y,it=this.z,st=this.w,rt=tt.elements;return this.x=rt[0]*et+rt[4]*nt+rt[8]*it+rt[12]*st,this.y=rt[1]*et+rt[5]*nt+rt[9]*it+rt[13]*st,this.z=rt[2]*et+rt[6]*nt+rt[10]*it+rt[14]*st,this.w=rt[3]*et+rt[7]*nt+rt[11]*it+rt[15]*st,this}divide(tt){return this.x/=tt.x,this.y/=tt.y,this.z/=tt.z,this.w/=tt.w,this}divideScalar(tt){return this.multiplyScalar(1/tt)}setAxisAngleFromQuaternion(tt){this.w=2*Math.acos(tt.w);let et=Math.sqrt(1-tt.w*tt.w);if(et<0.0001)this.x=1,this.y=0,this.z=0;else this.x=tt.x/et,this.y=tt.y/et,this.z=tt.z/et;return this}setAxisAngleFromRotationMatrix(tt){let et,nt,it,st,rt=0.01,at=0.1,ot=tt.elements,lt=ot[0],ct=ot[4],ut=ot[8],dt=ot[1],ht=ot[5],ft=ot[9],vt=ot[2],St=ot[6],pt=ot[10];if(Math.abs(ct-dt)<0.01&&Math.abs(ut-vt)<0.01&&Math.abs(ft-St)<0.01){if(Math.abs(ct+dt)<0.1&&Math.abs(ut+vt)<0.1&&Math.abs(ft+St)<0.1&&Math.abs(lt+ht+pt-3)<0.1)return this.set(1,0,0,0),this;et=Math.PI;let Tt=(lt+1)/2,At=(ht+1)/2,bt=(pt+1)/2,Et=(ct+dt)/4,It=(ut+vt)/4,gt=(ft+St)/4;if(Tt>At&&Tt>bt)if(Tt<0.01)nt=0,it=0.707106781,st=0.707106781;else nt=Math.sqrt(Tt),it=Et/nt,st=It/nt;else if(At>bt)if(At<0.01)nt=0.707106781,it=0,st=0.707106781;else it=Math.sqrt(At),nt=Et/it,st=gt/it;else if(bt<0.01)nt=0.707106781,it=0.707106781,st=0;else st=Math.sqrt(bt),nt=It/st,it=gt/st;return this.set(nt,it,st,et),this}let mt=Math.sqrt((St-ft)*(St-ft)+(ut-vt)*(ut-vt)+(dt-ct)*(dt-ct));if(Math.abs(mt)<0.001)mt=1;return this.x=(St-ft)/mt,this.y=(ut-vt)/mt,this.z=(dt-ct)/mt,this.w=Math.acos((lt+ht+pt-1)/2),this}setFromMatrixPosition(tt){let et=tt.elements;return this.x=et[12],this.y=et[13],this.z=et[14],this.w=et[15],this}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this.z=Math.min(this.z,tt.z),this.w=Math.min(this.w,tt.w),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this.z=Math.max(this.z,tt.z),this.w=Math.max(this.w,tt.w),this}clamp(tt,et){return this.x=In(this.x,tt.x,et.x),this.y=In(this.y,tt.y,et.y),this.z=In(this.z,tt.z,et.z),this.w=In(this.w,tt.w,et.w),this}clampScalar(tt,et){return this.x=In(this.x,tt,et),this.y=In(this.y,tt,et),this.z=In(this.z,tt,et),this.w=In(this.w,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(In(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(tt){return this.x*tt.x+this.y*tt.y+this.z*tt.z+this.w*tt.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this.z+=(tt.z-this.z)*et,this.w+=(tt.w-this.w)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this.z=tt.z+(et.z-tt.z)*nt,this.w=tt.w+(et.w-tt.w)*nt,this}equals(tt){return tt.x===this.x&&tt.y===this.y&&tt.z===this.z&&tt.w===this.w}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this.z=tt[et+2],this.w=tt[et+3],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt[et+2]=this.z,tt[et+3]=this.w,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this.z=tt.getZ(et),this.w=tt.getW(et),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nl extends Zi{constructor(tt=1,et=1,nt={}){super();nt=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},nt),this.isRenderTarget=!0,this.width=tt,this.height=et,this.depth=nt.depth,this.scissor=new a(0,0,tt,et),this.scissorTest=!1,this.viewport=new a(0,0,tt,et),this.textures=[];let it=nt.count;for(let st=0;st<it;st++)this.textures[st]=new x({width:tt,height:et,depth:nt.depth}),this.textures[st].isRenderTargetTexture=!0,this.textures[st].renderTarget=this;this._setTextureOptions(nt),this.depthBuffer=nt.depthBuffer,this.stencilBuffer=nt.stencilBuffer,this.resolveColorBuffer=nt.resolveColorBuffer,this.resolveDepthBuffer=nt.resolveDepthBuffer,this.resolveStencilBuffer=nt.resolveStencilBuffer,this.storeMultisampledColorBuffer=nt.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=nt.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=nt.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=nt.depthTexture,this.samples=nt.samples,this.multiview=nt.multiview,this.useArrayDepthTexture=nt.useArrayDepthTexture}_setTextureOptions(tt={}){let et={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(tt.mapping!==void 0)et.mapping=tt.mapping;if(tt.wrapS!==void 0)et.wrapS=tt.wrapS;if(tt.wrapT!==void 0)et.wrapT=tt.wrapT;if(tt.wrapR!==void 0)et.wrapR=tt.wrapR;if(tt.magFilter!==void 0)et.magFilter=tt.magFilter;if(tt.minFilter!==void 0)et.minFilter=tt.minFilter;if(tt.format!==void 0)et.format=tt.format;if(tt.type!==void 0)et.type=tt.type;if(tt.anisotropy!==void 0)et.anisotropy=tt.anisotropy;if(tt.colorSpace!==void 0)et.colorSpace=tt.colorSpace;if(tt.flipY!==void 0)et.flipY=tt.flipY;if(tt.generateMipmaps!==void 0)et.generateMipmaps=tt.generateMipmaps;if(tt.mipmapsAutoUpdate!==void 0)et.mipmapsAutoUpdate=tt.mipmapsAutoUpdate;if(tt.internalFormat!==void 0)et.internalFormat=tt.internalFormat;for(let nt=0;nt<this.textures.length;nt++)this.textures[nt].setValues(et)}get texture(){return this.textures[0]}set texture(tt){this.textures[0]=tt}set depthTexture(tt){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(tt!==null&&tt.renderTarget===null)tt.renderTarget=this;this._depthTexture=tt}get depthTexture(){return this._depthTexture}setSize(tt,et,nt=1){if(this.width!==tt||this.height!==et||this.depth!==nt){this.width=tt,this.height=et,this.depth=nt;for(let it=0,st=this.textures.length;it<st;it++)if(this.textures[it].image.width=tt,this.textures[it].image.height=et,this.textures[it].image.depth=nt,this.textures[it].isData3DTexture!==!0)this.textures[it].isArrayTexture=this.textures[it].image.depth>1;this.dispose()}this.viewport.set(0,0,tt,et),this.scissor.set(0,0,tt,et)}clone(){return new this.constructor().copy(this)}copy(tt){this.width=tt.width,this.height=tt.height,this.depth=tt.depth,this.scissor.copy(tt.scissor),this.scissorTest=tt.scissorTest,this.viewport.copy(tt.viewport),this.textures.length=0;for(let et=0,nt=tt.textures.length;et<nt;et++){this.textures[et]=tt.textures[et].clone(),this.textures[et].isRenderTargetTexture=!0,this.textures[et].renderTarget=this;let it=Object.assign({},tt.textures[et].image);this.textures[et].source=new mr(it)}if(this.depthBuffer=tt.depthBuffer,this.stencilBuffer=tt.stencilBuffer,this.resolveColorBuffer=tt.resolveColorBuffer,this.resolveDepthBuffer=tt.resolveDepthBuffer,this.resolveStencilBuffer=tt.resolveStencilBuffer,this.storeMultisampledColorBuffer=tt.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=tt.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=tt.storeMultisampledStencilBuffer,tt.depthTexture!==null)if(tt.depthTexture.renderTarget===tt){let et=tt.depthTexture.clone();et.renderTarget=null,this.depthTexture=et}else this.depthTexture=tt.depthTexture;else this.depthTexture=null;return this.samples=tt.samples,this.multiview=tt.multiview,this.useArrayDepthTexture=tt.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class M extends nl{constructor(tt=1,et=1,nt={}){super(tt,et,nt);this.isWebGLRenderTarget=!0}}class ua extends x{constructor(tt=null,et=1,nt=1,it=1){super(null);this.isDataArrayTexture=!0,this.image={data:tt,width:et,height:nt,depth:it},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(tt){return super.copy(tt),this.wrapR=tt.wrapR,this}addLayerUpdate(tt){this.layerUpdates.add(tt)}clearLayerUpdates(){this.layerUpdates.clear()}}class il extends x{constructor(tt=null,et=1,nt=1,it=1){super(null);this.isData3DTexture=!0,this.image={data:tt,width:et,height:nt,depth:it},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(tt){return super.copy(tt),this.wrapR=tt.wrapR,this}}class i{static{this.prototype.isMatrix4=!0}constructor(tt,et,nt,it,st,rt,at,ot,lt,ct,ut,dt,ht,ft,vt,St){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],tt!==void 0)this.set(tt,et,nt,it,st,rt,at,ot,lt,ct,ut,dt,ht,ft,vt,St)}set(tt,et,nt,it,st,rt,at,ot,lt,ct,ut,dt,ht,ft,vt,St){let pt=this.elements;return pt[0]=tt,pt[4]=et,pt[8]=nt,pt[12]=it,pt[1]=st,pt[5]=rt,pt[9]=at,pt[13]=ot,pt[2]=lt,pt[6]=ct,pt[10]=ut,pt[14]=dt,pt[3]=ht,pt[7]=ft,pt[11]=vt,pt[15]=St,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(tt){let et=this.elements,nt=tt.elements;return et[0]=nt[0],et[1]=nt[1],et[2]=nt[2],et[3]=nt[3],et[4]=nt[4],et[5]=nt[5],et[6]=nt[6],et[7]=nt[7],et[8]=nt[8],et[9]=nt[9],et[10]=nt[10],et[11]=nt[11],et[12]=nt[12],et[13]=nt[13],et[14]=nt[14],et[15]=nt[15],this}copyPosition(tt){let et=this.elements,nt=tt.elements;return et[12]=nt[12],et[13]=nt[13],et[14]=nt[14],this}setFromMatrix3(tt){let et=tt.elements;return this.set(et[0],et[3],et[6],0,et[1],et[4],et[7],0,et[2],et[5],et[8],0,0,0,0,1),this}extractBasis(tt,et,nt){if(this.determinantAffine()===0)return tt.set(1,0,0),et.set(0,1,0),nt.set(0,0,1),this;return tt.setFromMatrixColumn(this,0),et.setFromMatrixColumn(this,1),nt.setFromMatrixColumn(this,2),this}makeBasis(tt,et,nt){return this.set(tt.x,et.x,nt.x,0,tt.y,et.y,nt.y,0,tt.z,et.z,nt.z,0,0,0,0,1),this}extractRotation(tt){if(tt.determinantAffine()===0)return this.identity();let et=this.elements,nt=tt.elements,it=1/Ms.setFromMatrixColumn(tt,0).length(),st=1/Ms.setFromMatrixColumn(tt,1).length(),rt=1/Ms.setFromMatrixColumn(tt,2).length();return et[0]=nt[0]*it,et[1]=nt[1]*it,et[2]=nt[2]*it,et[3]=0,et[4]=nt[4]*st,et[5]=nt[5]*st,et[6]=nt[6]*st,et[7]=0,et[8]=nt[8]*rt,et[9]=nt[9]*rt,et[10]=nt[10]*rt,et[11]=0,et[12]=0,et[13]=0,et[14]=0,et[15]=1,this}makeRotationFromEuler(tt){let et=this.elements,{x:nt,y:it,z:st}=tt,rt=Math.cos(nt),at=Math.sin(nt),ot=Math.cos(it),lt=Math.sin(it),ct=Math.cos(st),ut=Math.sin(st);if(tt.order==="XYZ"){let dt=rt*ct,ht=rt*ut,ft=at*ct,vt=at*ut;et[0]=ot*ct,et[4]=-ot*ut,et[8]=lt,et[1]=ht+ft*lt,et[5]=dt-vt*lt,et[9]=-at*ot,et[2]=vt-dt*lt,et[6]=ft+ht*lt,et[10]=rt*ot}else if(tt.order==="YXZ"){let dt=ot*ct,ht=ot*ut,ft=lt*ct,vt=lt*ut;et[0]=dt+vt*at,et[4]=ft*at-ht,et[8]=rt*lt,et[1]=rt*ut,et[5]=rt*ct,et[9]=-at,et[2]=ht*at-ft,et[6]=vt+dt*at,et[10]=rt*ot}else if(tt.order==="ZXY"){let dt=ot*ct,ht=ot*ut,ft=lt*ct,vt=lt*ut;et[0]=dt-vt*at,et[4]=-rt*ut,et[8]=ft+ht*at,et[1]=ht+ft*at,et[5]=rt*ct,et[9]=vt-dt*at,et[2]=-rt*lt,et[6]=at,et[10]=rt*ot}else if(tt.order==="ZYX"){let dt=rt*ct,ht=rt*ut,ft=at*ct,vt=at*ut;et[0]=ot*ct,et[4]=ft*lt-ht,et[8]=dt*lt+vt,et[1]=ot*ut,et[5]=vt*lt+dt,et[9]=ht*lt-ft,et[2]=-lt,et[6]=at*ot,et[10]=rt*ot}else if(tt.order==="YZX"){let dt=rt*ot,ht=rt*lt,ft=at*ot,vt=at*lt;et[0]=ot*ct,et[4]=vt-dt*ut,et[8]=ft*ut+ht,et[1]=ut,et[5]=rt*ct,et[9]=-at*ct,et[2]=-lt*ct,et[6]=ht*ut+ft,et[10]=dt-vt*ut}else if(tt.order==="XZY"){let dt=rt*ot,ht=rt*lt,ft=at*ot,vt=at*lt;et[0]=ot*ct,et[4]=-ut,et[8]=lt*ct,et[1]=dt*ut+vt,et[5]=rt*ct,et[9]=ht*ut-ft,et[2]=ft*ut-ht,et[6]=at*ct,et[10]=vt*ut+dt}return et[3]=0,et[7]=0,et[11]=0,et[12]=0,et[13]=0,et[14]=0,et[15]=1,this}makeRotationFromQuaternion(tt){return this.compose(zu,tt,Gu)}lookAt(tt,et,nt){let it=this.elements;if(_i.subVectors(tt,et),_i.lengthSq()===0)_i.z=1;if(_i.normalize(),$i.crossVectors(nt,_i),$i.lengthSq()===0){if(Math.abs(nt.z)===1)_i.x+=0.0001;else _i.z+=0.0001;_i.normalize(),$i.crossVectors(nt,_i)}return $i.normalize(),Ar.crossVectors(_i,$i),it[0]=$i.x,it[4]=Ar.x,it[8]=_i.x,it[1]=$i.y,it[5]=Ar.y,it[9]=_i.y,it[2]=$i.z,it[6]=Ar.z,it[10]=_i.z,this}multiply(tt){return this.multiplyMatrices(this,tt)}premultiply(tt){return this.multiplyMatrices(tt,this)}multiplyMatrices(tt,et){let nt=tt.elements,it=et.elements,st=this.elements,rt=nt[0],at=nt[4],ot=nt[8],lt=nt[12],ct=nt[1],ut=nt[5],dt=nt[9],ht=nt[13],ft=nt[2],vt=nt[6],St=nt[10],pt=nt[14],mt=nt[3],Tt=nt[7],At=nt[11],bt=nt[15],Et=it[0],It=it[4],gt=it[8],yt=it[12],Nt=it[1],kt=it[5],Lt=it[9],zt=it[13],Kt=it[2],Rt=it[6],qt=it[10],Zt=it[14],Ot=it[3],Qe=it[7],Wt=it[11],$t=it[15];return st[0]=rt*Et+at*Nt+ot*Kt+lt*Ot,st[4]=rt*It+at*kt+ot*Rt+lt*Qe,st[8]=rt*gt+at*Lt+ot*qt+lt*Wt,st[12]=rt*yt+at*zt+ot*Zt+lt*$t,st[1]=ct*Et+ut*Nt+dt*Kt+ht*Ot,st[5]=ct*It+ut*kt+dt*Rt+ht*Qe,st[9]=ct*gt+ut*Lt+dt*qt+ht*Wt,st[13]=ct*yt+ut*zt+dt*Zt+ht*$t,st[2]=ft*Et+vt*Nt+St*Kt+pt*Ot,st[6]=ft*It+vt*kt+St*Rt+pt*Qe,st[10]=ft*gt+vt*Lt+St*qt+pt*Wt,st[14]=ft*yt+vt*zt+St*Zt+pt*$t,st[3]=mt*Et+Tt*Nt+At*Kt+bt*Ot,st[7]=mt*It+Tt*kt+At*Rt+bt*Qe,st[11]=mt*gt+Tt*Lt+At*qt+bt*Wt,st[15]=mt*yt+Tt*zt+At*Zt+bt*$t,this}multiplyScalar(tt){let et=this.elements;return et[0]*=tt,et[4]*=tt,et[8]*=tt,et[12]*=tt,et[1]*=tt,et[5]*=tt,et[9]*=tt,et[13]*=tt,et[2]*=tt,et[6]*=tt,et[10]*=tt,et[14]*=tt,et[3]*=tt,et[7]*=tt,et[11]*=tt,et[15]*=tt,this}determinant(){let tt=this.elements,et=tt[0],nt=tt[4],it=tt[8],st=tt[12],rt=tt[1],at=tt[5],ot=tt[9],lt=tt[13],ct=tt[2],ut=tt[6],dt=tt[10],ht=tt[14],ft=tt[3],vt=tt[7],St=tt[11],pt=tt[15],mt=ot*ht-lt*dt,Tt=at*ht-lt*ut,At=at*dt-ot*ut,bt=rt*ht-lt*ct,Et=rt*dt-ot*ct,It=rt*ut-at*ct;return et*(vt*mt-St*Tt+pt*At)-nt*(ft*mt-St*bt+pt*Et)+it*(ft*Tt-vt*bt+pt*It)-st*(ft*At-vt*Et+St*It)}determinantAffine(){let tt=this.elements,et=tt[0],nt=tt[4],it=tt[8],st=tt[1],rt=tt[5],at=tt[9],ot=tt[2],lt=tt[6],ct=tt[10];return et*(rt*ct-at*lt)-nt*(st*ct-at*ot)+it*(st*lt-rt*ot)}transpose(){let tt=this.elements,et;return et=tt[1],tt[1]=tt[4],tt[4]=et,et=tt[2],tt[2]=tt[8],tt[8]=et,et=tt[6],tt[6]=tt[9],tt[9]=et,et=tt[3],tt[3]=tt[12],tt[12]=et,et=tt[7],tt[7]=tt[13],tt[13]=et,et=tt[11],tt[11]=tt[14],tt[14]=et,this}setPosition(tt,et,nt){let it=this.elements;if(tt.isVector3)it[12]=tt.x,it[13]=tt.y,it[14]=tt.z;else it[12]=tt,it[13]=et,it[14]=nt;return this}invert(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8],ut=tt[9],dt=tt[10],ht=tt[11],ft=tt[12],vt=tt[13],St=tt[14],pt=tt[15],mt=et*at-nt*rt,Tt=et*ot-it*rt,At=et*lt-st*rt,bt=nt*ot-it*at,Et=nt*lt-st*at,It=it*lt-st*ot,gt=ct*vt-ut*ft,yt=ct*St-dt*ft,Nt=ct*pt-ht*ft,kt=ut*St-dt*vt,Lt=ut*pt-ht*vt,zt=dt*pt-ht*St,Kt=mt*zt-Tt*Lt+At*kt+bt*Nt-Et*yt+It*gt;if(Kt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Rt=1/Kt;return tt[0]=(at*zt-ot*Lt+lt*kt)*Rt,tt[1]=(it*Lt-nt*zt-st*kt)*Rt,tt[2]=(vt*It-St*Et+pt*bt)*Rt,tt[3]=(dt*Et-ut*It-ht*bt)*Rt,tt[4]=(ot*Nt-rt*zt-lt*yt)*Rt,tt[5]=(et*zt-it*Nt+st*yt)*Rt,tt[6]=(St*At-ft*It-pt*Tt)*Rt,tt[7]=(ct*It-dt*At+ht*Tt)*Rt,tt[8]=(rt*Lt-at*Nt+lt*gt)*Rt,tt[9]=(nt*Nt-et*Lt-st*gt)*Rt,tt[10]=(ft*Et-vt*At+pt*mt)*Rt,tt[11]=(ut*At-ct*Et-ht*mt)*Rt,tt[12]=(at*yt-rt*kt-ot*gt)*Rt,tt[13]=(et*kt-nt*yt+it*gt)*Rt,tt[14]=(vt*Tt-ft*bt-St*mt)*Rt,tt[15]=(ct*bt-ut*Tt+dt*mt)*Rt,this}scale(tt){let et=this.elements,{x:nt,y:it,z:st}=tt;return et[0]*=nt,et[4]*=it,et[8]*=st,et[1]*=nt,et[5]*=it,et[9]*=st,et[2]*=nt,et[6]*=it,et[10]*=st,et[3]*=nt,et[7]*=it,et[11]*=st,this}getMaxScaleOnAxis(){let tt=this.elements,et=tt[0]*tt[0]+tt[1]*tt[1]+tt[2]*tt[2],nt=tt[4]*tt[4]+tt[5]*tt[5]+tt[6]*tt[6],it=tt[8]*tt[8]+tt[9]*tt[9]+tt[10]*tt[10];return Math.sqrt(Math.max(et,nt,it))}makeTranslation(tt,et,nt){if(tt.isVector3)this.set(1,0,0,tt.x,0,1,0,tt.y,0,0,1,tt.z,0,0,0,1);else this.set(1,0,0,tt,0,1,0,et,0,0,1,nt,0,0,0,1);return this}makeRotationX(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(1,0,0,0,0,et,-nt,0,0,nt,et,0,0,0,0,1),this}makeRotationY(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,0,nt,0,0,1,0,0,-nt,0,et,0,0,0,0,1),this}makeRotationZ(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,-nt,0,0,nt,et,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(tt,et){let nt=Math.cos(et),it=Math.sin(et),st=1-nt,{x:rt,y:at,z:ot}=tt,lt=st*rt,ct=st*at;return this.set(lt*rt+nt,lt*at-it*ot,lt*ot+it*at,0,lt*at+it*ot,ct*at+nt,ct*ot-it*rt,0,lt*ot-it*at,ct*ot+it*rt,st*ot*ot+nt,0,0,0,0,1),this}makeScale(tt,et,nt){return this.set(tt,0,0,0,0,et,0,0,0,0,nt,0,0,0,0,1),this}makeShear(tt,et,nt,it,st,rt){return this.set(1,nt,st,0,tt,1,rt,0,et,it,1,0,0,0,0,1),this}compose(tt,et,nt){let it=this.elements,{_x:st,_y:rt,_z:at,_w:ot}=et,lt=st+st,ct=rt+rt,ut=at+at,dt=st*lt,ht=st*ct,ft=st*ut,vt=rt*ct,St=rt*ut,pt=at*ut,mt=ot*lt,Tt=ot*ct,At=ot*ut,{x:bt,y:Et,z:It}=nt;return it[0]=(1-(vt+pt))*bt,it[1]=(ht+At)*bt,it[2]=(ft-Tt)*bt,it[3]=0,it[4]=(ht-At)*Et,it[5]=(1-(dt+pt))*Et,it[6]=(St+mt)*Et,it[7]=0,it[8]=(ft+Tt)*It,it[9]=(St-mt)*It,it[10]=(1-(dt+vt))*It,it[11]=0,it[12]=tt.x,it[13]=tt.y,it[14]=tt.z,it[15]=1,this}decompose(tt,et,nt){let it=this.elements;tt.x=it[12],tt.y=it[13],tt.z=it[14];let st=this.determinantAffine();if(st===0)return nt.set(1,1,1),et.identity(),this;let rt=Ms.set(it[0],it[1],it[2]).length(),at=Ms.set(it[4],it[5],it[6]).length(),ot=Ms.set(it[8],it[9],it[10]).length();if(st<0)rt=-rt;Ei.copy(this);let lt=1/rt,ct=1/at,ut=1/ot;return Ei.elements[0]*=lt,Ei.elements[1]*=lt,Ei.elements[2]*=lt,Ei.elements[4]*=ct,Ei.elements[5]*=ct,Ei.elements[6]*=ct,Ei.elements[8]*=ut,Ei.elements[9]*=ut,Ei.elements[10]*=ut,et.setFromRotationMatrix(Ei),nt.x=rt,nt.y=at,nt.z=ot,this}makePerspective(tt,et,nt,it,st,rt,at=2000,ot=!1){let lt=this.elements,ct=2*st/(et-tt),ut=2*st/(nt-it),dt=(et+tt)/(et-tt),ht=(nt+it)/(nt-it),ft,vt;if(ot)ft=st/(rt-st),vt=rt*st/(rt-st);else if(at===2000)ft=-(rt+st)/(rt-st),vt=-2*rt*st/(rt-st);else if(at===2001)ft=-rt/(rt-st),vt=-rt*st/(rt-st);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+at);return lt[0]=ct,lt[4]=0,lt[8]=dt,lt[12]=0,lt[1]=0,lt[5]=ut,lt[9]=ht,lt[13]=0,lt[2]=0,lt[6]=0,lt[10]=ft,lt[14]=vt,lt[3]=0,lt[7]=0,lt[11]=-1,lt[15]=0,this}makeOrthographic(tt,et,nt,it,st,rt,at=2000,ot=!1){let lt=this.elements,ct=2/(et-tt),ut=2/(nt-it),dt=-(et+tt)/(et-tt),ht=-(nt+it)/(nt-it),ft,vt;if(ot)ft=1/(rt-st),vt=rt/(rt-st);else if(at===2000)ft=-2/(rt-st),vt=-(rt+st)/(rt-st);else if(at===2001)ft=-1/(rt-st),vt=-st/(rt-st);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+at);return lt[0]=ct,lt[4]=0,lt[8]=0,lt[12]=dt,lt[1]=0,lt[5]=ut,lt[9]=0,lt[13]=ht,lt[2]=0,lt[6]=0,lt[10]=ft,lt[14]=vt,lt[3]=0,lt[7]=0,lt[11]=0,lt[15]=1,this}equals(tt){let et=this.elements,nt=tt.elements;for(let it=0;it<16;it++)if(et[it]!==nt[it])return!1;return!0}fromArray(tt,et=0){for(let nt=0;nt<16;nt++)this.elements[nt]=tt[nt+et];return this}toArray(tt=[],et=0){let nt=this.elements;return tt[et]=nt[0],tt[et+1]=nt[1],tt[et+2]=nt[2],tt[et+3]=nt[3],tt[et+4]=nt[4],tt[et+5]=nt[5],tt[et+6]=nt[6],tt[et+7]=nt[7],tt[et+8]=nt[8],tt[et+9]=nt[9],tt[et+10]=nt[10],tt[et+11]=nt[11],tt[et+12]=nt[12],tt[et+13]=nt[13],tt[et+14]=nt[14],tt[et+15]=nt[15],tt}}var Ms=new e,Ei=new i,zu=new e(0,0,0),Gu=new e(1,1,1),$i=new e,Ar=new e,_i=new e,Bl=new i,zl=new R;class Li{constructor(tt=0,et=0,nt=0,it=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=tt,this._y=et,this._z=nt,this._order=it}get x(){return this._x}set x(tt){this._x=tt,this._onChangeCallback()}get y(){return this._y}set y(tt){this._y=tt,this._onChangeCallback()}get z(){return this._z}set z(tt){this._z=tt,this._onChangeCallback()}get order(){return this._order}set order(tt){this._order=tt,this._onChangeCallback()}set(tt,et,nt,it=this._order){return this._x=tt,this._y=et,this._z=nt,this._order=it,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(tt){return this._x=tt._x,this._y=tt._y,this._z=tt._z,this._order=tt._order,this._onChangeCallback(),this}setFromRotationMatrix(tt,et=this._order,nt=!0){let it=tt.elements,st=it[0],rt=it[4],at=it[8],ot=it[1],lt=it[5],ct=it[9],ut=it[2],dt=it[6],ht=it[10];switch(et){case"XYZ":if(this._y=Math.asin(In(at,-1,1)),Math.abs(at)<0.9999999)this._x=Math.atan2(-ct,ht),this._z=Math.atan2(-rt,st);else this._x=Math.atan2(dt,lt),this._z=0;break;case"YXZ":if(this._x=Math.asin(-In(ct,-1,1)),Math.abs(ct)<0.9999999)this._y=Math.atan2(at,ht),this._z=Math.atan2(ot,lt);else this._y=Math.atan2(-ut,st),this._z=0;break;case"ZXY":if(this._x=Math.asin(In(dt,-1,1)),Math.abs(dt)<0.9999999)this._y=Math.atan2(-ut,ht),this._z=Math.atan2(-rt,lt);else this._y=0,this._z=Math.atan2(ot,st);break;case"ZYX":if(this._y=Math.asin(-In(ut,-1,1)),Math.abs(ut)<0.9999999)this._x=Math.atan2(dt,ht),this._z=Math.atan2(ot,st);else this._x=0,this._z=Math.atan2(-rt,lt);break;case"YZX":if(this._z=Math.asin(In(ot,-1,1)),Math.abs(ot)<0.9999999)this._x=Math.atan2(-ct,lt),this._y=Math.atan2(-ut,st);else this._x=0,this._y=Math.atan2(at,ht);break;case"XZY":if(this._z=Math.asin(-In(rt,-1,1)),Math.abs(rt)<0.9999999)this._x=Math.atan2(dt,lt),this._y=Math.atan2(at,st);else this._x=Math.atan2(-ct,ht),this._y=0;break;default:_n("Euler: .setFromRotationMatrix() encountered an unknown order: "+et)}if(this._order=et,nt===!0)this._onChangeCallback();return this}setFromQuaternion(tt,et,nt){return Bl.makeRotationFromQuaternion(tt),this.setFromRotationMatrix(Bl,et,nt)}setFromVector3(tt,et=this._order){return this.set(tt.x,tt.y,tt.z,et)}reorder(tt){return zl.setFromEuler(this),this.setFromQuaternion(zl,tt)}equals(tt){return tt._x===this._x&&tt._y===this._y&&tt._z===this._z&&tt._order===this._order}fromArray(tt){if(this._x=tt[0],this._y=tt[1],this._z=tt[2],tt[3]!==void 0)this._order=tt[3];return this._onChangeCallback(),this}toArray(tt=[],et=0){return tt[et]=this._x,tt[et+1]=this._y,tt[et+2]=this._z,tt[et+3]=this._order,tt}_onChange(tt){return this._onChangeCallback=tt,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class da{constructor(){this.mask=1}set(tt){this.mask=(1<<tt|0)>>>0}enable(tt){this.mask|=1<<tt|0}enableAll(){this.mask=-1}toggle(tt){this.mask^=1<<tt|0}disable(tt){this.mask&=~(1<<tt|0)}disableAll(){this.mask=0}test(tt){return(this.mask&tt.mask)!==0}isEnabled(tt){return(this.mask&(1<<tt|0))!==0}}var ku=0,Gl=new e,bs=new R,zi=new i,wr=new e,$s=new e,Hu=new e,Wu=new R,kl=new e(1,0,0),Hl=new e(0,1,0),Wl=new e(0,0,1),Vl={type:"added"},Vu={type:"removed"},Ts={type:"childadded",child:null},La={type:"childremoved",child:null};class l extends Zi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=l.DEFAULT_UP.clone();let tt=new e,et=new Li,nt=new R,it=new e(1,1,1);function st(){nt.setFromEuler(et,!1)}function rt(){et.setFromQuaternion(nt,void 0,!1)}et._onChange(st),nt._onChange(rt),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:tt},rotation:{configurable:!0,enumerable:!0,value:et},quaternion:{configurable:!0,enumerable:!0,value:nt},scale:{configurable:!0,enumerable:!0,value:it},modelViewMatrix:{value:new i},normalMatrix:{value:new En}}),this.matrix=new i,this.matrixWorld=new i,this.matrixAutoUpdate=l.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=l.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(tt){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(tt),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(tt){return this.quaternion.premultiply(tt),this}setRotationFromAxisAngle(tt,et){this.quaternion.setFromAxisAngle(tt,et)}setRotationFromEuler(tt){this.quaternion.setFromEuler(tt,!0)}setRotationFromMatrix(tt){this.quaternion.setFromRotationMatrix(tt)}setRotationFromQuaternion(tt){this.quaternion.copy(tt)}rotateOnAxis(tt,et){return bs.setFromAxisAngle(tt,et),this.quaternion.multiply(bs),this}rotateOnWorldAxis(tt,et){return bs.setFromAxisAngle(tt,et),this.quaternion.premultiply(bs),this}rotateX(tt){return this.rotateOnAxis(kl,tt)}rotateY(tt){return this.rotateOnAxis(Hl,tt)}rotateZ(tt){return this.rotateOnAxis(Wl,tt)}translateOnAxis(tt,et){return Gl.copy(tt).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(et)),this}translateX(tt){return this.translateOnAxis(kl,tt)}translateY(tt){return this.translateOnAxis(Hl,tt)}translateZ(tt){return this.translateOnAxis(Wl,tt)}localToWorld(tt){return this.updateWorldMatrix(!0,!1),tt.applyMatrix4(this.matrixWorld)}worldToLocal(tt){return this.updateWorldMatrix(!0,!1),tt.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(tt,et,nt){if(tt.isVector3)wr.copy(tt);else wr.set(tt,et,nt);let it=this.parent;if(this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)zi.lookAt($s,wr,this.up);else zi.lookAt(wr,$s,this.up);if(this.quaternion.setFromRotationMatrix(zi),it)zi.extractRotation(it.matrixWorld),bs.setFromRotationMatrix(zi),this.quaternion.premultiply(bs.invert())}add(tt){if(arguments.length>1){for(let et=0;et<arguments.length;et++)this.add(arguments[et]);return this}if(tt===this)return Tn("Object3D.add: object can't be added as a child of itself.",tt),this;if(tt&&tt.isObject3D)tt.removeFromParent(),tt.parent=this,this.children.push(tt),tt.dispatchEvent(Vl),Ts.child=tt,this.dispatchEvent(Ts),Ts.child=null;else Tn("Object3D.add: object not an instance of THREE.Object3D.",tt);return this}remove(tt){if(arguments.length>1){for(let nt=0;nt<arguments.length;nt++)this.remove(arguments[nt]);return this}let et=this.children.indexOf(tt);if(et!==-1)tt.parent=null,this.children.splice(et,1),tt.dispatchEvent(Vu),La.child=tt,this.dispatchEvent(La),La.child=null;return this}removeFromParent(){let tt=this.parent;if(tt!==null)tt.remove(this);return this}clear(){return this.remove(...this.children)}attach(tt){if(this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),tt.parent!==null)tt.parent.updateWorldMatrix(!0,!1),zi.multiply(tt.parent.matrixWorld);return tt.applyMatrix4(zi),tt.removeFromParent(),tt.parent=this,this.children.push(tt),tt.updateWorldMatrix(!1,!0),tt.dispatchEvent(Vl),Ts.child=tt,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(tt){return this.getObjectByProperty("id",tt)}getObjectByName(tt){return this.getObjectByProperty("name",tt)}getObjectByProperty(tt,et){if(this[tt]===et)return this;for(let nt=0,it=this.children.length;nt<it;nt++){let rt=this.children[nt].getObjectByProperty(tt,et);if(rt!==void 0)return rt}return}getObjectsByProperty(tt,et,nt=[]){if(this[tt]===et)nt.push(this);let it=this.children;for(let st=0,rt=it.length;st<rt;st++)it[st].getObjectsByProperty(tt,et,nt);return nt}getWorldPosition(tt){return this.updateWorldMatrix(!0,!1),tt.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(tt){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,tt,Hu),tt}getWorldScale(tt){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Wu,tt),tt}getWorldDirection(tt){this.updateWorldMatrix(!0,!1);let et=this.matrixWorld.elements;return tt.set(et[8],et[9],et[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(tt){tt(this);let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].traverse(tt)}traverseVisible(tt){if(this.visible===!1)return;tt(this);let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].traverseVisible(tt)}traverseAncestors(tt){let et=this.parent;if(et!==null)tt(et),et.traverseAncestors(tt)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let tt=this.pivot;if(tt!==null){let{x:et,y:nt,z:it}=tt,st=this.matrix.elements;st[12]+=et-st[0]*et-st[4]*nt-st[8]*it,st[13]+=nt-st[1]*et-st[5]*nt-st[9]*it,st[14]+=it-st[2]*et-st[6]*nt-st[10]*it}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(tt){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||tt){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,tt=!0}let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].updateMatrixWorld(tt)}updateWorldMatrix(tt,et,nt=!1){let it=this.parent;if(tt===!0&&it!==null)it.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||nt){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,nt=!0}if(et===!0){let st=this.children;for(let rt=0,at=st.length;rt<at;rt++)st[rt].updateWorldMatrix(!1,!0,nt)}}toJSON(tt){let et=tt===void 0||typeof tt==="string",nt={};if(et)tt={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},nt.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let it={};if(it.uuid=this.uuid,it.type=this.type,it.name=this.name,it.castShadow=this.castShadow,it.receiveShadow=this.receiveShadow,it.visible=this.visible,it.frustumCulled=this.frustumCulled,it.renderOrder=this.renderOrder,it.static=this.static,it.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)it.userData=this.userData;if(it.layers=this.layers.mask,it.matrix=this.matrix.toArray(),it.up=this.up.toArray(),this.pivot!==null)it.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)it.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)it.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(it.type="InstancedMesh",it.count=this.count,it.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)it.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(it.type="BatchedMesh",it.perObjectFrustumCulled=this.perObjectFrustumCulled,it.sortObjects=this.sortObjects,it.drawRanges=this._drawRanges,it.reservedRanges=this._reservedRanges,it.geometryInfo=this._geometryInfo.map((at)=>({...at,boundingBox:at.boundingBox?at.boundingBox.toJSON():void 0,boundingSphere:at.boundingSphere?at.boundingSphere.toJSON():void 0})),it.instanceInfo=this._instanceInfo.map((at)=>({...at})),it.availableInstanceIds=this._availableInstanceIds.slice(),it.availableGeometryIds=this._availableGeometryIds.slice(),it.nextIndexStart=this._nextIndexStart,it.nextVertexStart=this._nextVertexStart,it.geometryCount=this._geometryCount,it.maxInstanceCount=this._maxInstanceCount,it.maxVertexCount=this._maxVertexCount,it.maxIndexCount=this._maxIndexCount,it.geometryInitialized=this._geometryInitialized,it.matricesTexture=this._matricesTexture.toJSON(tt),it.indirectTexture=this._indirectTexture.toJSON(tt),this._colorsTexture!==null)it.colorsTexture=this._colorsTexture.toJSON(tt);if(this.boundingSphere!==null)it.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)it.boundingBox=this.boundingBox.toJSON()}function st(at,ot){if(at[ot.uuid]===void 0)at[ot.uuid]=ot.toJSON(tt);return ot.uuid}if(this.isScene){if(this.background){if(this.background.isColor)it.background=this.background.toJSON();else if(this.background.isTexture)it.background=this.background.toJSON(tt).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)it.environment=this.environment.toJSON(tt).uuid}else if(this.isMesh||this.isLine||this.isPoints){it.geometry=st(tt.geometries,this.geometry);let at=this.geometry.parameters;if(at!==void 0&&at.shapes!==void 0){let ot=at.shapes;if(Array.isArray(ot))for(let lt=0,ct=ot.length;lt<ct;lt++){let ut=ot[lt];st(tt.shapes,ut)}else st(tt.shapes,ot)}}if(this.isSkinnedMesh){if(it.bindMode=this.bindMode,it.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)st(tt.skeletons,this.skeleton),it.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let at=[];for(let ot=0,lt=this.material.length;ot<lt;ot++)at.push(st(tt.materials,this.material[ot]));it.material=at}else it.material=st(tt.materials,this.material);if(this.children.length>0){it.children=[];for(let at=0;at<this.children.length;at++)it.children.push(this.children[at].toJSON(tt).object)}if(this.animations.length>0){it.animations=[];for(let at=0;at<this.animations.length;at++){let ot=this.animations[at];it.animations.push(st(tt.animations,ot))}}if(et){let at=rt(tt.geometries),ot=rt(tt.materials),lt=rt(tt.textures),ct=rt(tt.images),ut=rt(tt.shapes),dt=rt(tt.skeletons),ht=rt(tt.animations),ft=rt(tt.nodes);if(at.length>0)nt.geometries=at;if(ot.length>0)nt.materials=ot;if(lt.length>0)nt.textures=lt;if(ct.length>0)nt.images=ct;if(ut.length>0)nt.shapes=ut;if(dt.length>0)nt.skeletons=dt;if(ht.length>0)nt.animations=ht;if(ft.length>0)nt.nodes=ft}return nt.object=it,nt;function rt(at){let ot=[];for(let lt in at){let ct=at[lt];delete ct.metadata,ot.push(ct)}return ot}}clone(tt){return new this.constructor().copy(this,tt)}copy(tt,et=!0){if(this.name=tt.name,this.up.copy(tt.up),this.position.copy(tt.position),this.rotation.order=tt.rotation.order,this.quaternion.copy(tt.quaternion),this.scale.copy(tt.scale),this.pivot=tt.pivot!==null?tt.pivot.clone():null,this.matrix.copy(tt.matrix),this.matrixWorld.copy(tt.matrixWorld),this.matrixAutoUpdate=tt.matrixAutoUpdate,this.matrixWorldAutoUpdate=tt.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=tt.matrixWorldNeedsUpdate,this.layers.mask=tt.layers.mask,this.visible=tt.visible,this.castShadow=tt.castShadow,this.receiveShadow=tt.receiveShadow,this.frustumCulled=tt.frustumCulled,this.renderOrder=tt.renderOrder,this.static=tt.static,this.animations=tt.animations.slice(),this.userData=JSON.parse(JSON.stringify(tt.userData)),et===!0)for(let nt=0;nt<tt.children.length;nt++){let it=tt.children[nt];this.add(it.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}l.DEFAULT_UP=new e(0,1,0);l.DEFAULT_MATRIX_AUTO_UPDATE=!0;l.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class v extends l{constructor(){super();this.isGroup=!0,this.type="Group"}}var Xu={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new v,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new v,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new v,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(tt){if(this._targetRay!==null)this._targetRay.dispatchEvent(tt);if(this._grip!==null)this._grip.dispatchEvent(tt);if(this._hand!==null)this._hand.dispatchEvent(tt);return this}connect(tt){if(tt&&tt.hand){let et=this._hand;if(et)for(let nt of tt.hand.values())this._getHandJoint(et,nt)}return this.dispatchEvent({type:"connected",data:tt}),this}disconnect(tt){if(this.dispatchEvent({type:"disconnected",data:tt}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(tt,et,nt){let it=null,st=null,rt=null,at=this._targetRay,ot=this._grip,lt=this._hand;if(tt&&et.session.visibilityState!=="visible-blurred"){if(lt&&tt.hand){rt=!0;for(let vt of tt.hand.values()){let St=et.getJointPose(vt,nt),pt=this._getHandJoint(lt,vt);if(St!==null)pt.matrix.fromArray(St.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldNeedsUpdate=!0,pt.jointRadius=St.radius;pt.visible=St!==null}let ct=lt.joints["index-finger-tip"],ut=lt.joints["thumb-tip"],dt=ct.position.distanceTo(ut.position),ht=0.02,ft=0.005;if(lt.inputState.pinching&&dt>ht+ft)lt.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:tt.handedness,target:this});else if(!lt.inputState.pinching&&dt<=ht-ft)lt.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:tt.handedness,target:this})}else if(ot!==null&&tt.gripSpace){if(st=et.getPose(tt.gripSpace,nt),st!==null){if(ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldNeedsUpdate=!0,st.linearVelocity)ot.hasLinearVelocity=!0,ot.linearVelocity.copy(st.linearVelocity);else ot.hasLinearVelocity=!1;if(st.angularVelocity)ot.hasAngularVelocity=!0,ot.angularVelocity.copy(st.angularVelocity);else ot.hasAngularVelocity=!1;if(ot.eventsEnabled)ot.dispatchEvent({type:"gripUpdated",data:tt,target:this})}}if(at!==null){if(it=et.getPose(tt.targetRaySpace,nt),it===null&&st!==null)it=st;if(it!==null){if(at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.matrixWorldNeedsUpdate=!0,it.linearVelocity)at.hasLinearVelocity=!0,at.linearVelocity.copy(it.linearVelocity);else at.hasLinearVelocity=!1;if(it.angularVelocity)at.hasAngularVelocity=!0,at.angularVelocity.copy(it.angularVelocity);else at.hasAngularVelocity=!1;this.dispatchEvent(Xu)}}}if(at!==null)at.visible=it!==null;if(ot!==null)ot.visible=st!==null;if(lt!==null)lt.visible=rt!==null;return this}_getHandJoint(tt,et){if(tt.joints[et.jointName]===void 0){let nt=new v;nt.matrixAutoUpdate=!1,nt.visible=!1,tt.joints[et.jointName]=nt,tt.add(nt)}return tt.joints[et.jointName]}}var vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Na(tt,et,nt){if(nt<0)nt+=1;if(nt>1)nt-=1;if(nt<0.16666666666666666)return tt+(et-tt)*6*nt;if(nt<0.5)return et;if(nt<0.6666666666666666)return tt+(et-tt)*6*(0.6666666666666666-nt);return tt}class t{constructor(tt,et,nt){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(tt,et,nt)}set(tt,et,nt){if(et===void 0&&nt===void 0){let it=tt;if(it&&it.isColor)this.copy(it);else if(typeof it==="number")this.setHex(it);else if(typeof it==="string")this.setStyle(it)}else this.setRGB(tt,et,nt);return this}setScalar(tt){return this.r=tt,this.g=tt,this.b=tt,this}setHex(tt,et="srgb"){return tt=Math.floor(tt),this.r=(tt>>16&255)/255,this.g=(tt>>8&255)/255,this.b=(tt&255)/255,s.colorSpaceToWorking(this,et),this}setRGB(tt,et,nt,it=s.workingColorSpace){return this.r=tt,this.g=et,this.b=nt,s.colorSpaceToWorking(this,it),this}setHSL(tt,et,nt,it=s.workingColorSpace){if(tt=Ko(tt,1),et=In(et,0,1),nt=In(nt,0,1),et===0)this.r=this.g=this.b=nt;else{let st=nt<=0.5?nt*(1+et):nt+et-nt*et,rt=2*nt-st;this.r=Na(rt,st,tt+0.3333333333333333),this.g=Na(rt,st,tt),this.b=Na(rt,st,tt-0.3333333333333333)}return s.colorSpaceToWorking(this,it),this}setStyle(tt,et="srgb"){function nt(st){if(st===void 0)return;if(parseFloat(st)<1)_n("Color: Alpha component of "+tt+" will be ignored.")}let it;if(it=/^(\w+)\(([^\)]*)\)/.exec(tt)){let st,rt=it[1],at=it[2];switch(rt){case"rgb":case"rgba":if(st=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setRGB(Math.min(255,parseInt(st[1],10))/255,Math.min(255,parseInt(st[2],10))/255,Math.min(255,parseInt(st[3],10))/255,et);if(st=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setRGB(Math.min(100,parseFloat(st[1]))/100,Math.min(100,parseFloat(st[2]))/100,Math.min(100,parseFloat(st[3]))/100,et);break;case"hsl":case"hsla":if(st=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setHSL(parseFloat(st[1])/360,parseFloat(st[2])/100,parseFloat(st[3])/100,et);break;default:_n("Color: Unknown color model "+tt)}}else if(it=/^\#([A-Fa-f\d]+)$/.exec(tt)){let st=it[1],rt=st.length;if(rt===3)return this.setRGB(parseInt(st.charAt(0),16)/15,parseInt(st.charAt(1),16)/15,parseInt(st.charAt(2),16)/15,et);else if(rt===6)return this.setHex(parseInt(st,16),et);else _n("Color: Invalid hex color "+tt)}else if(tt&&tt.length>0)return this.setColorName(tt,et);return this}setColorName(tt,et="srgb"){let nt=vh[tt.toLowerCase()];if(nt!==void 0)this.setHex(nt,et);else _n("Color: Unknown color "+tt);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(tt){return this.r=tt.r,this.g=tt.g,this.b=tt.b,this}copySRGBToLinear(tt){return this.r=Xi(tt.r),this.g=Xi(tt.g),this.b=Xi(tt.b),this}copyLinearToSRGB(tt){return this.r=zs(tt.r),this.g=zs(tt.g),this.b=zs(tt.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(tt="srgb"){return s.workingToColorSpace(ci.copy(this),tt),Math.round(In(ci.r*255,0,255))*65536+Math.round(In(ci.g*255,0,255))*256+Math.round(In(ci.b*255,0,255))}getHexString(tt="srgb"){return("000000"+this.getHex(tt).toString(16)).slice(-6)}getHSL(tt,et=s.workingColorSpace){s.workingToColorSpace(ci.copy(this),et);let{r:nt,g:it,b:st}=ci,rt=Math.max(nt,it,st),at=Math.min(nt,it,st),ot,lt,ct=(at+rt)/2;if(at===rt)ot=0,lt=0;else{let ut=rt-at;switch(lt=ct<=0.5?ut/(rt+at):ut/(2-rt-at),rt){case nt:ot=(it-st)/ut+(it<st?6:0);break;case it:ot=(st-nt)/ut+2;break;case st:ot=(nt-it)/ut+4;break}ot/=6}return tt.h=ot,tt.s=lt,tt.l=ct,tt}getRGB(tt,et=s.workingColorSpace){return s.workingToColorSpace(ci.copy(this),et),tt.r=ci.r,tt.g=ci.g,tt.b=ci.b,tt}getStyle(tt="srgb"){s.workingToColorSpace(ci.copy(this),tt);let{r:et,g:nt,b:it}=ci;if(tt!=="srgb")return`color(${tt} ${et.toFixed(3)} ${nt.toFixed(3)} ${it.toFixed(3)})`;return`rgb(${Math.round(et*255)},${Math.round(nt*255)},${Math.round(it*255)})`}offsetHSL(tt,et,nt){return this.getHSL(Ki),this.setHSL(Ki.h+tt,Ki.s+et,Ki.l+nt)}add(tt){return this.r+=tt.r,this.g+=tt.g,this.b+=tt.b,this}addColors(tt,et){return this.r=tt.r+et.r,this.g=tt.g+et.g,this.b=tt.b+et.b,this}addScalar(tt){return this.r+=tt,this.g+=tt,this.b+=tt,this}sub(tt){return this.r=Math.max(0,this.r-tt.r),this.g=Math.max(0,this.g-tt.g),this.b=Math.max(0,this.b-tt.b),this}multiply(tt){return this.r*=tt.r,this.g*=tt.g,this.b*=tt.b,this}multiplyScalar(tt){return this.r*=tt,this.g*=tt,this.b*=tt,this}lerp(tt,et){return this.r+=(tt.r-this.r)*et,this.g+=(tt.g-this.g)*et,this.b+=(tt.b-this.b)*et,this}lerpColors(tt,et,nt){return this.r=tt.r+(et.r-tt.r)*nt,this.g=tt.g+(et.g-tt.g)*nt,this.b=tt.b+(et.b-tt.b)*nt,this}lerpHSL(tt,et){this.getHSL(Ki),tt.getHSL(Rr);let nt=cr(Ki.h,Rr.h,et),it=cr(Ki.s,Rr.s,et),st=cr(Ki.l,Rr.l,et);return this.setHSL(nt,it,st),this}setFromVector3(tt){return this.r=tt.x,this.g=tt.y,this.b=tt.z,this}applyMatrix3(tt){let et=this.r,nt=this.g,it=this.b,st=tt.elements;return this.r=st[0]*et+st[3]*nt+st[6]*it,this.g=st[1]*et+st[4]*nt+st[7]*it,this.b=st[2]*et+st[5]*nt+st[8]*it,this}equals(tt){return tt.r===this.r&&tt.g===this.g&&tt.b===this.b}fromArray(tt,et=0){return this.r=tt[et],this.g=tt[et+1],this.b=tt[et+2],this}toArray(tt=[],et=0){return tt[et]=this.r,tt[et+1]=this.g,tt[et+2]=this.b,tt}fromBufferAttribute(tt,et){return this.r=tt.getX(et),this.g=tt.getY(et),this.b=tt.getZ(et),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ci=new t;t.NAMES=vh;class Y{constructor(tt,et=1,nt=1000){this.isFog=!0,this.name="",this.color=new t(tt),this.near=et,this.far=nt}clone(){return new Y(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class B extends l{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(tt,et){return super.copy(tt,et),this.background=tt.background!==null?tt.background.clone():null,this.environment=tt.environment!==null?tt.environment.clone():null,this.fog=tt.fog!==null?tt.fog.clone():null,this.backgroundBlurriness=tt.backgroundBlurriness,this.backgroundIntensity=tt.backgroundIntensity,this.backgroundRotation.copy(tt.backgroundRotation),this.environmentIntensity=tt.environmentIntensity,this.environmentRotation.copy(tt.environmentRotation),this.overrideMaterial=tt.overrideMaterial!==null?tt.overrideMaterial.clone():null,this.matrixAutoUpdate=tt.matrixAutoUpdate,this}toJSON(tt){let et=super.toJSON(tt);if(this.fog!==null)et.object.fog=this.fog.toJSON();return et.object.backgroundBlurriness=this.backgroundBlurriness,et.object.backgroundIntensity=this.backgroundIntensity,et.object.backgroundRotation=this.backgroundRotation.toArray(),et.object.environmentIntensity=this.environmentIntensity,et.object.environmentRotation=this.environmentRotation.toArray(),et}}var Ai=new e,Gi=new e,Da=new e,ki=new e,Es=new e,As=new e,Xl=new e,Ua=new e,Fa=new e,Oa=new e,Ba=new a,za=new a,Ga=new a;class vi{constructor(tt=new e,et=new e,nt=new e){this.a=tt,this.b=et,this.c=nt}static getNormal(tt,et,nt,it){it.subVectors(nt,et),Ai.subVectors(tt,et),it.cross(Ai);let st=it.lengthSq();if(st>0)return it.multiplyScalar(1/Math.sqrt(st));return it.set(0,0,0)}static getBarycoord(tt,et,nt,it,st){Ai.subVectors(it,et),Gi.subVectors(nt,et),Da.subVectors(tt,et);let rt=Ai.dot(Ai),at=Ai.dot(Gi),ot=Ai.dot(Da),lt=Gi.dot(Gi),ct=Gi.dot(Da),ut=rt*lt-at*at;if(ut===0)return st.set(0,0,0),null;let dt=1/ut,ht=(lt*ot-at*ct)*dt,ft=(rt*ct-at*ot)*dt;return st.set(1-ht-ft,ft,ht)}static containsPoint(tt,et,nt,it){if(this.getBarycoord(tt,et,nt,it,ki)===null)return!1;return ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(tt,et,nt,it,st,rt,at,ot){if(this.getBarycoord(tt,et,nt,it,ki)===null){if(ot.x=0,ot.y=0,"z"in ot)ot.z=0;if("w"in ot)ot.w=0;return null}return ot.setScalar(0),ot.addScaledVector(st,ki.x),ot.addScaledVector(rt,ki.y),ot.addScaledVector(at,ki.z),ot}static getInterpolatedAttribute(tt,et,nt,it,st,rt){return Ba.setScalar(0),za.setScalar(0),Ga.setScalar(0),Ba.fromBufferAttribute(tt,et),za.fromBufferAttribute(tt,nt),Ga.fromBufferAttribute(tt,it),rt.setScalar(0),rt.addScaledVector(Ba,st.x),rt.addScaledVector(za,st.y),rt.addScaledVector(Ga,st.z),rt}static isFrontFacing(tt,et,nt,it){return Ai.subVectors(nt,et),Gi.subVectors(tt,et),Ai.cross(Gi).dot(it)<0}set(tt,et,nt){return this.a.copy(tt),this.b.copy(et),this.c.copy(nt),this}setFromPointsAndIndices(tt,et,nt,it){return this.a.copy(tt[et]),this.b.copy(tt[nt]),this.c.copy(tt[it]),this}setFromAttributeAndIndices(tt,et,nt,it){return this.a.fromBufferAttribute(tt,et),this.b.fromBufferAttribute(tt,nt),this.c.fromBufferAttribute(tt,it),this}clone(){return new this.constructor().copy(this)}copy(tt){return this.a.copy(tt.a),this.b.copy(tt.b),this.c.copy(tt.c),this}getArea(){return Ai.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),Ai.cross(Gi).length()*0.5}getMidpoint(tt){return tt.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(tt){return vi.getNormal(this.a,this.b,this.c,tt)}getPlane(tt){return tt.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(tt,et){return vi.getBarycoord(tt,this.a,this.b,this.c,et)}getInterpolation(tt,et,nt,it,st){return vi.getInterpolation(tt,this.a,this.b,this.c,et,nt,it,st)}containsPoint(tt){return vi.containsPoint(tt,this.a,this.b,this.c)}isFrontFacing(tt){return vi.isFrontFacing(this.a,this.b,this.c,tt)}intersectsBox(tt){return tt.intersectsTriangle(this)}closestPointToPoint(tt,et){let nt=this.a,it=this.b,st=this.c,rt,at;Es.subVectors(it,nt),As.subVectors(st,nt),Ua.subVectors(tt,nt);let ot=Es.dot(Ua),lt=As.dot(Ua);if(ot<=0&&lt<=0)return et.copy(nt);Fa.subVectors(tt,it);let ct=Es.dot(Fa),ut=As.dot(Fa);if(ct>=0&&ut<=ct)return et.copy(it);let dt=ot*ut-ct*lt;if(dt<=0&&ot>=0&&ct<=0&&ot-ct>0)return rt=ot/(ot-ct),et.copy(nt).addScaledVector(Es,rt);Oa.subVectors(tt,st);let ht=Es.dot(Oa),ft=As.dot(Oa);if(ft>=0&&ht<=ft)return et.copy(st);let vt=ht*lt-ot*ft;if(vt<=0&&lt>=0&&ft<=0)return at=lt/(lt-ft),et.copy(nt).addScaledVector(As,at);let St=ct*ft-ht*ut;if(St<=0&&ut-ct>=0&&ht-ft>=0)return Xl.subVectors(st,it),at=(ut-ct)/(ut-ct+(ht-ft)),et.copy(it).addScaledVector(Xl,at);let pt=1/(St+vt+dt);return rt=vt*pt,at=dt*pt,et.copy(nt).addScaledVector(Es,rt).addScaledVector(As,at)}equals(tt){return tt.a.equals(this.a)&&tt.b.equals(this.b)&&tt.c.equals(this.c)}}class C{constructor(tt=new e(1/0,1/0,1/0),et=new e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=tt,this.max=et}set(tt,et){return this.min.copy(tt),this.max.copy(et),this}setFromArray(tt){this.makeEmpty();for(let et=0,nt=tt.length;et<nt;et+=3)this.expandByPoint(wi.fromArray(tt,et));return this}setFromBufferAttribute(tt){this.makeEmpty();for(let et=0,nt=tt.count;et<nt;et++)this.expandByPoint(wi.fromBufferAttribute(tt,et));return this}setFromPoints(tt){this.makeEmpty();for(let et=0,nt=tt.length;et<nt;et++)this.expandByPoint(tt[et]);return this}setFromCenterAndSize(tt,et){let nt=wi.copy(et).multiplyScalar(0.5);return this.min.copy(tt).sub(nt),this.max.copy(tt).add(nt),this}setFromObject(tt,et=!1){return this.makeEmpty(),this.expandByObject(tt,et)}clone(){return new this.constructor().copy(this)}copy(tt){return this.min.copy(tt.min),this.max.copy(tt.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(tt){return this.isEmpty()?tt.set(0,0,0):tt.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(tt){return this.isEmpty()?tt.set(0,0,0):tt.subVectors(this.max,this.min)}expandByPoint(tt){return this.min.min(tt),this.max.max(tt),this}expandByVector(tt){return this.min.sub(tt),this.max.add(tt),this}expandByScalar(tt){return this.min.addScalar(-tt),this.max.addScalar(tt),this}expandByObject(tt,et=!1){tt.updateWorldMatrix(!1,!1);let nt=tt.geometry;if(nt!==void 0){let st=nt.getAttribute("position");if(et===!0&&st!==void 0&&tt.isInstancedMesh!==!0&&tt.isBatchedMesh!==!0)for(let rt=0,at=st.count;rt<at;rt++){if(tt.isMesh===!0)tt.getVertexPosition(rt,wi);else wi.fromBufferAttribute(st,rt);wi.applyMatrix4(tt.matrixWorld),this.expandByPoint(wi)}else{if(tt.boundingBox!==void 0){if(tt.boundingBox===null)tt.computeBoundingBox();Cr.copy(tt.boundingBox)}else{if(nt.boundingBox===null)nt.computeBoundingBox();Cr.copy(nt.boundingBox)}Cr.applyMatrix4(tt.matrixWorld),this.union(Cr)}}let it=tt.children;for(let st=0,rt=it.length;st<rt;st++)this.expandByObject(it[st],et);return this}containsPoint(tt){return tt.x>=this.min.x&&tt.x<=this.max.x&&tt.y>=this.min.y&&tt.y<=this.max.y&&tt.z>=this.min.z&&tt.z<=this.max.z}containsBox(tt){return this.min.x<=tt.min.x&&tt.max.x<=this.max.x&&this.min.y<=tt.min.y&&tt.max.y<=this.max.y&&this.min.z<=tt.min.z&&tt.max.z<=this.max.z}getParameter(tt,et){return et.set((tt.x-this.min.x)/(this.max.x-this.min.x),(tt.y-this.min.y)/(this.max.y-this.min.y),(tt.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(tt){return tt.max.x>=this.min.x&&tt.min.x<=this.max.x&&tt.max.y>=this.min.y&&tt.min.y<=this.max.y&&tt.max.z>=this.min.z&&tt.min.z<=this.max.z}intersectsSphere(tt){return this.clampPoint(tt.center,wi),wi.distanceToSquared(tt.center)<=tt.radius*tt.radius}intersectsPlane(tt){let et,nt;if(tt.normal.x>0)et=tt.normal.x*this.min.x,nt=tt.normal.x*this.max.x;else et=tt.normal.x*this.max.x,nt=tt.normal.x*this.min.x;if(tt.normal.y>0)et+=tt.normal.y*this.min.y,nt+=tt.normal.y*this.max.y;else et+=tt.normal.y*this.max.y,nt+=tt.normal.y*this.min.y;if(tt.normal.z>0)et+=tt.normal.z*this.min.z,nt+=tt.normal.z*this.max.z;else et+=tt.normal.z*this.max.z,nt+=tt.normal.z*this.min.z;return et<=-tt.constant&&nt>=-tt.constant}intersectsTriangle(tt){if(this.isEmpty())return!1;this.getCenter(Ks),Ir.subVectors(this.max,Ks),ws.subVectors(tt.a,Ks),Rs.subVectors(tt.b,Ks),Cs.subVectors(tt.c,Ks),Qi.subVectors(Rs,ws),ji.subVectors(Cs,Rs),hs.subVectors(ws,Cs);let et=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-hs.z,hs.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,hs.z,0,-hs.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-hs.y,hs.x,0];if(!ka(et,ws,Rs,Cs,Ir))return!1;if(et=[1,0,0,0,1,0,0,0,1],!ka(et,ws,Rs,Cs,Ir))return!1;return Pr.crossVectors(Qi,ji),et=[Pr.x,Pr.y,Pr.z],ka(et,ws,Rs,Cs,Ir)}clampPoint(tt,et){return et.copy(tt).clamp(this.min,this.max)}distanceToPoint(tt){return this.clampPoint(tt,wi).distanceTo(tt)}getBoundingSphere(tt){if(this.isEmpty())tt.makeEmpty();else this.getCenter(tt.center),tt.radius=this.getSize(wi).length()*0.5;return tt}intersect(tt){if(this.min.max(tt.min),this.max.min(tt.max),this.isEmpty())this.makeEmpty();return this}union(tt){return this.min.min(tt.min),this.max.max(tt.max),this}applyMatrix4(tt){if(this.isEmpty())return this;return Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(tt),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(tt),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(tt),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(tt),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(tt),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(tt),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(tt),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(tt),this.setFromPoints(Hi),this}translate(tt){return this.min.add(tt),this.max.add(tt),this}equals(tt){return tt.min.equals(this.min)&&tt.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(tt){return this.min.fromArray(tt.min),this.max.fromArray(tt.max),this}}var Hi=[new e,new e,new e,new e,new e,new e,new e,new e],wi=new e,Cr=new C,ws=new e,Rs=new e,Cs=new e,Qi=new e,ji=new e,hs=new e,Ks=new e,Ir=new e,Pr=new e,us=new e;function ka(tt,et,nt,it,st){for(let rt=0,at=tt.length-3;rt<=at;rt+=3){us.fromArray(tt,rt);let ot=st.x*Math.abs(us.x)+st.y*Math.abs(us.y)+st.z*Math.abs(us.z),lt=et.dot(us),ct=nt.dot(us),ut=it.dot(us);if(Math.max(-Math.max(lt,ct,ut),Math.min(lt,ct,ut))>ot)return!1}return!0}var $n=new e,Lr=new n,qu=0;class m extends Zi{constructor(tt,et,nt=!1){super();if(Array.isArray(tt))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qu++}),this.name="",this.array=tt,this.itemSize=et,this.count=tt!==void 0?tt.length/et:0,this.normalized=nt,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=tt!==void 0?ha(tt):void 0}onUploadCallback(){}set needsUpdate(tt){if(tt===!0)this.version++}setUsage(tt){return this.usage=tt,this}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}copy(tt){return this.name=tt.name,this.array=new tt.array.constructor(tt.array),this.itemSize=tt.itemSize,this.count=tt.count,this.normalized=tt.normalized,this.usage=tt.usage,this.gpuType=tt.gpuType,this._normalizationScale=tt._normalizationScale,this}copyAt(tt,et,nt){tt*=this.itemSize,nt*=et.itemSize;for(let it=0,st=this.itemSize;it<st;it++)this.array[tt+it]=et.array[nt+it];return this}copyArray(tt){return this.array.set(tt),this}applyMatrix3(tt){if(this.itemSize===2)for(let et=0,nt=this.count;et<nt;et++)Lr.fromBufferAttribute(this,et),Lr.applyMatrix3(tt),this.setXY(et,Lr.x,Lr.y);else if(this.itemSize===3)for(let et=0,nt=this.count;et<nt;et++)$n.fromBufferAttribute(this,et),$n.applyMatrix3(tt),this.setXYZ(et,$n.x,$n.y,$n.z);return this}applyMatrix4(tt){for(let et=0,nt=this.count;et<nt;et++)$n.fromBufferAttribute(this,et),$n.applyMatrix4(tt),this.setXYZ(et,$n.x,$n.y,$n.z);return this}applyNormalMatrix(tt){for(let et=0,nt=this.count;et<nt;et++)$n.fromBufferAttribute(this,et),$n.applyNormalMatrix(tt),this.setXYZ(et,$n.x,$n.y,$n.z);return this}transformDirection(tt){for(let et=0,nt=this.count;et<nt;et++)$n.fromBufferAttribute(this,et),$n.transformDirection(tt),this.setXYZ(et,$n.x,$n.y,$n.z);return this}set(tt,et=0){return this.array.set(tt,et),this}getComponent(tt,et){let nt=this.array[tt*this.itemSize+et];if(this.normalized)nt=this._denormalize(nt);return nt}setComponent(tt,et,nt){if(this.normalized)nt=this._normalize(nt);return this.array[tt*this.itemSize+et]=nt,this}getX(tt){let et=this.array[tt*this.itemSize];if(this.normalized)et=this._denormalize(et);return et}setX(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize]=et,this}getY(tt){let et=this.array[tt*this.itemSize+1];if(this.normalized)et=this._denormalize(et);return et}setY(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+1]=et,this}getZ(tt){let et=this.array[tt*this.itemSize+2];if(this.normalized)et=this._denormalize(et);return et}setZ(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+2]=et,this}getW(tt){let et=this.array[tt*this.itemSize+3];if(this.normalized)et=this._denormalize(et);return et}setW(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+3]=et,this}setXY(tt,et,nt){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt);return this.array[tt+0]=et,this.array[tt+1]=nt,this}setXYZ(tt,et,nt,it){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it);return this.array[tt+0]=et,this.array[tt+1]=nt,this.array[tt+2]=it,this}setXYZW(tt,et,nt,it,st){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it),st=this._normalize(st);return this.array[tt+0]=et,this.array[tt+1]=nt,this.array[tt+2]=it,this.array[tt+3]=st,this}onUpload(tt){return this.onUploadCallback=tt,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let tt={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return tt.name=this.name,tt.usage=this.usage,tt.gpuType=this.gpuType,tt}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(tt){let et=this._normalizationScale;return et!==void 0?Math.max(tt/et,-1):jo(tt,this.array)}_normalize(tt){let et=this._normalizationScale;return et!==void 0?Math.round(tt*et):tl(tt,this.array)}}class fa extends m{constructor(tt,et,nt){super(new Uint16Array(tt),et,nt)}}class pa extends m{constructor(tt,et,nt){super(new Uint32Array(tt),et,nt)}}class g extends m{constructor(tt,et,nt){super(new Float32Array(tt),et,nt)}}var Yu=new C,Qs=new e,Ha=new e;class N{constructor(tt=new e,et=-1){this.isSphere=!0,this.center=tt,this.radius=et}set(tt,et){return this.center.copy(tt),this.radius=et,this}setFromPoints(tt,et){let nt=this.center;if(et!==void 0)nt.copy(et);else Yu.setFromPoints(tt).getCenter(nt);let it=0;for(let st=0,rt=tt.length;st<rt;st++)it=Math.max(it,nt.distanceToSquared(tt[st]));return this.radius=Math.sqrt(it),this}copy(tt){return this.center.copy(tt.center),this.radius=tt.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(tt){return tt.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(tt){return tt.distanceTo(this.center)-this.radius}intersectsSphere(tt){let et=this.radius+tt.radius;return tt.center.distanceToSquared(this.center)<=et*et}intersectsBox(tt){return tt.intersectsSphere(this)}intersectsPlane(tt){return Math.abs(tt.distanceToPoint(this.center))<=this.radius}clampPoint(tt,et){let nt=this.center.distanceToSquared(tt);if(et.copy(tt),nt>this.radius*this.radius)et.sub(this.center).normalize(),et.multiplyScalar(this.radius).add(this.center);return et}getBoundingBox(tt){if(this.isEmpty())return tt.makeEmpty(),tt;return tt.set(this.center,this.center),tt.expandByScalar(this.radius),tt}applyMatrix4(tt){return this.center.applyMatrix4(tt),this.radius=this.radius*tt.getMaxScaleOnAxis(),this}translate(tt){return this.center.add(tt),this}expandByPoint(tt){if(this.isEmpty())return this.center.copy(tt),this.radius=0,this;Qs.subVectors(tt,this.center);let et=Qs.lengthSq();if(et>this.radius*this.radius){let nt=Math.sqrt(et),it=(nt-this.radius)*0.5;this.center.addScaledVector(Qs,it/nt),this.radius+=it}return this}union(tt){if(tt.isEmpty())return this;if(this.isEmpty())return this.copy(tt),this;if(this.center.equals(tt.center)===!0)this.radius=Math.max(this.radius,tt.radius);else Ha.subVectors(tt.center,this.center).setLength(tt.radius),this.expandByPoint(Qs.copy(tt.center).add(Ha)),this.expandByPoint(Qs.copy(tt.center).sub(Ha));return this}equals(tt){return tt.center.equals(this.center)&&tt.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(tt){return this.radius=tt.radius,this.center.fromArray(tt.center),this}}var Zu=0,Si=new i,Wa=new l,Is=new e,xi=new C,js=new C,ni=new e;class f extends Zi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(tt){if(Array.isArray(tt))this.index=new((vu(tt))?pa:fa)(tt,1);else this.index=tt;return this}setIndirect(tt,et=0){return this.indirect=tt,this.indirectOffset=et,this}getIndirect(){return this.indirect}getAttribute(tt){return this.attributes[tt]}setAttribute(tt,et){return this.attributes[tt]=et,this}deleteAttribute(tt){return delete this.attributes[tt],this}hasAttribute(tt){return this.attributes[tt]!==void 0}addGroup(tt,et,nt=0){this.groups.push({start:tt,count:et,materialIndex:nt})}clearGroups(){this.groups=[]}setDrawRange(tt,et){this.drawRange.start=tt,this.drawRange.count=et}applyMatrix4(tt){let et=this.attributes.position;if(et!==void 0)et.applyMatrix4(tt),et.needsUpdate=!0;let nt=this.attributes.normal;if(nt!==void 0){let st=new En().getNormalMatrix(tt);nt.applyNormalMatrix(st),nt.needsUpdate=!0}let it=this.attributes.tangent;if(it!==void 0)it.transformDirection(tt),it.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(tt){return Si.makeRotationFromQuaternion(tt),this.applyMatrix4(Si),this}rotateX(tt){return Si.makeRotationX(tt),this.applyMatrix4(Si),this}rotateY(tt){return Si.makeRotationY(tt),this.applyMatrix4(Si),this}rotateZ(tt){return Si.makeRotationZ(tt),this.applyMatrix4(Si),this}translate(tt,et,nt){return Si.makeTranslation(tt,et,nt),this.applyMatrix4(Si),this}scale(tt,et,nt){return Si.makeScale(tt,et,nt),this.applyMatrix4(Si),this}lookAt(tt){return Wa.lookAt(tt),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(tt){let et=this.getAttribute("position");if(et===void 0){let nt=[];for(let it=0,st=tt.length;it<st;it++){let rt=tt[it];nt.push(rt.x,rt.y,rt.z||0)}this.setAttribute("position",new g(nt,3))}else{let nt=Math.min(tt.length,et.count);for(let it=0;it<nt;it++){let st=tt[it];et.setXYZ(it,st.x,st.y,st.z||0)}if(tt.length>et.count)_n("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");et.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new C;let tt=this.attributes.position,et=this.morphAttributes.position;if(tt&&tt.isGLBufferAttribute){Tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new e(-1/0,-1/0,-1/0),new e(1/0,1/0,1/0));return}if(tt!==void 0){if(this.boundingBox.setFromBufferAttribute(tt),et)for(let nt=0,it=et.length;nt<it;nt++){let st=et[nt];if(xi.setFromBufferAttribute(st),this.morphTargetsRelative)ni.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(ni);else this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new N;let tt=this.attributes.position,et=this.morphAttributes.position;if(tt&&tt.isGLBufferAttribute){Tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new e,1/0);return}if(tt){let nt=this.boundingSphere.center;if(xi.setFromBufferAttribute(tt),et)for(let st=0,rt=et.length;st<rt;st++){let at=et[st];if(js.setFromBufferAttribute(at),this.morphTargetsRelative)ni.addVectors(xi.min,js.min),xi.expandByPoint(ni),ni.addVectors(xi.max,js.max),xi.expandByPoint(ni);else xi.expandByPoint(js.min),xi.expandByPoint(js.max)}xi.getCenter(nt);let it=0;for(let st=0,rt=tt.count;st<rt;st++)ni.fromBufferAttribute(tt,st),it=Math.max(it,nt.distanceToSquared(ni));if(et)for(let st=0,rt=et.length;st<rt;st++){let at=et[st],ot=this.morphTargetsRelative;for(let lt=0,ct=at.count;lt<ct;lt++){if(ni.fromBufferAttribute(at,lt),ot)Is.fromBufferAttribute(tt,lt),ni.add(Is);it=Math.max(it,nt.distanceToSquared(ni))}}if(this.boundingSphere.radius=Math.sqrt(it),isNaN(this.boundingSphere.radius))Tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let tt=this.index,et=this.attributes;if(tt===null||et.position===void 0||et.normal===void 0||et.uv===void 0){Tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:nt,normal:it,uv:st}=et,rt=this.getAttribute("tangent");if(rt===void 0||rt.count!==nt.count)rt=new m(new Float32Array(4*nt.count),4),this.setAttribute("tangent",rt);let at=[],ot=[],lt=new Uint8Array(nt.count);for(let yt=0;yt<nt.count;yt++)at[yt]=new e,ot[yt]=new e;let ct=new e,ut=new e,dt=new e,ht=new n,ft=new n,vt=new n,St=new e,pt=new e;function mt(yt,Nt,kt){lt[yt]=lt[Nt]=lt[kt]=1,ct.fromBufferAttribute(nt,yt),ut.fromBufferAttribute(nt,Nt),dt.fromBufferAttribute(nt,kt),ht.fromBufferAttribute(st,yt),ft.fromBufferAttribute(st,Nt),vt.fromBufferAttribute(st,kt),ut.sub(ct),dt.sub(ct),ft.sub(ht),vt.sub(ht);let Lt=1/(ft.x*vt.y-vt.x*ft.y);if(!isFinite(Lt))return;St.copy(ut).multiplyScalar(vt.y).addScaledVector(dt,-ft.y).multiplyScalar(Lt),pt.copy(dt).multiplyScalar(ft.x).addScaledVector(ut,-vt.x).multiplyScalar(Lt),at[yt].add(St),at[Nt].add(St),at[kt].add(St),ot[yt].add(pt),ot[Nt].add(pt),ot[kt].add(pt)}let Tt=this.groups;if(Tt.length===0)Tt=[{start:0,count:tt.count}];for(let yt=0,Nt=Tt.length;yt<Nt;++yt){let kt=Tt[yt],{start:Lt,count:zt}=kt;for(let Kt=Lt,Rt=Lt+zt;Kt<Rt;Kt+=3)mt(tt.getX(Kt+0),tt.getX(Kt+1),tt.getX(Kt+2))}let At=new e,bt=new e,Et=new e,It=new e;function gt(yt){Et.fromBufferAttribute(it,yt),It.copy(Et);let Nt=at[yt];At.copy(Nt),At.sub(Et.multiplyScalar(Et.dot(Nt))).normalize(),bt.crossVectors(It,Nt);let Lt=bt.dot(ot[yt])<0?-1:1;rt.setXYZW(yt,At.x,At.y,At.z,Lt)}for(let yt=0,Nt=nt.count;yt<Nt;++yt)if(lt[yt])gt(yt);this._transformed=!0}computeVertexNormals(){let tt=this.index,et=this.getAttribute("position");if(et!==void 0){let nt=this.getAttribute("normal");if(nt===void 0||nt.count!==et.count)nt=new m(new Float32Array(et.count*3),3),this.setAttribute("normal",nt);else for(let dt=0,ht=nt.count;dt<ht;dt++)nt.setXYZ(dt,0,0,0);let it=new e,st=new e,rt=new e,at=new e,ot=new e,lt=new e,ct=new e,ut=new e;if(tt)for(let dt=0,ht=tt.count;dt<ht;dt+=3){let ft=tt.getX(dt+0),vt=tt.getX(dt+1),St=tt.getX(dt+2);it.fromBufferAttribute(et,ft),st.fromBufferAttribute(et,vt),rt.fromBufferAttribute(et,St),ct.subVectors(rt,st),ut.subVectors(it,st),ct.cross(ut),at.fromBufferAttribute(nt,ft),ot.fromBufferAttribute(nt,vt),lt.fromBufferAttribute(nt,St),at.add(ct),ot.add(ct),lt.add(ct),nt.setXYZ(ft,at.x,at.y,at.z),nt.setXYZ(vt,ot.x,ot.y,ot.z),nt.setXYZ(St,lt.x,lt.y,lt.z)}else for(let dt=0,ht=et.count;dt<ht;dt+=3)it.fromBufferAttribute(et,dt+0),st.fromBufferAttribute(et,dt+1),rt.fromBufferAttribute(et,dt+2),ct.subVectors(rt,st),ut.subVectors(it,st),ct.cross(ut),nt.setXYZ(dt+0,ct.x,ct.y,ct.z),nt.setXYZ(dt+1,ct.x,ct.y,ct.z),nt.setXYZ(dt+2,ct.x,ct.y,ct.z);this.normalizeNormals(),nt.needsUpdate=!0}}normalizeNormals(){let tt=this.attributes.normal;for(let et=0,nt=tt.count;et<nt;et++)ni.fromBufferAttribute(tt,et),ni.normalize(),tt.setXYZ(et,ni.x,ni.y,ni.z)}toNonIndexed(){function tt(at,ot){let{array:lt,itemSize:ct,normalized:ut}=at,dt=new lt.constructor(ot.length*ct),ht=0,ft=0;for(let vt=0,St=ot.length;vt<St;vt++){if(at.isInterleavedBufferAttribute)ht=ot[vt]*at.data.stride+at.offset;else ht=ot[vt]*ct;for(let pt=0;pt<ct;pt++)dt[ft++]=lt[ht++]}return new m(dt,ct,ut)}if(this.index===null)return _n("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let et=new f,nt=this.index.array,it=this.attributes;for(let at in it){let ot=it[at],lt=tt(ot,nt);et.setAttribute(at,lt)}let st=this.morphAttributes;for(let at in st){let ot=[],lt=st[at];for(let ct=0,ut=lt.length;ct<ut;ct++){let dt=lt[ct],ht=tt(dt,nt);ot.push(ht)}et.morphAttributes[at]=ot}et.morphTargetsRelative=this.morphTargetsRelative;let rt=this.groups;for(let at=0,ot=rt.length;at<ot;at++){let lt=rt[at];et.addGroup(lt.start,lt.count,lt.materialIndex)}return et}toJSON(){let tt={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(tt.uuid=this.uuid,tt.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,tt.name=this.name,Object.keys(this.userData).length>0)tt.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let ot=this.parameters;for(let lt in ot)if(ot[lt]!==void 0)tt[lt]=ot[lt];return tt}tt.data={attributes:{}};let et=this.index;if(et!==null)tt.data.index={type:et.array.constructor.name,array:Array.prototype.slice.call(et.array)};let nt=this.attributes;for(let ot in nt){let lt=nt[ot];tt.data.attributes[ot]=lt.toJSON(tt.data)}let it={},st=!1;for(let ot in this.morphAttributes){let lt=this.morphAttributes[ot],ct=[];for(let ut=0,dt=lt.length;ut<dt;ut++){let ht=lt[ut];ct.push(ht.toJSON(tt.data))}if(ct.length>0)it[ot]=ct,st=!0}if(st)tt.data.morphAttributes=it,tt.data.morphTargetsRelative=this.morphTargetsRelative;let rt=this.groups;if(rt.length>0)tt.data.groups=JSON.parse(JSON.stringify(rt));let at=this.boundingSphere;if(at!==null)tt.data.boundingSphere=at.toJSON();return tt}clone(){return new this.constructor().copy(this)}copy(tt){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let et={};this.name=tt.name;let nt=tt.index;if(nt!==null)this.setIndex(nt.clone());let it=tt.attributes;for(let lt in it){let ct=it[lt];this.setAttribute(lt,ct.clone(et))}let st=tt.morphAttributes;for(let lt in st){let ct=[],ut=st[lt];for(let dt=0,ht=ut.length;dt<ht;dt++)ct.push(ut[dt].clone(et));this.morphAttributes[lt]=ct}this.morphTargetsRelative=tt.morphTargetsRelative;let rt=tt.groups;for(let lt=0,ct=rt.length;lt<ct;lt++){let ut=rt[lt];this.addGroup(ut.start,ut.count,ut.materialIndex)}let at=tt.boundingBox;if(at!==null)this.boundingBox=at.clone();let ot=tt.boundingSphere;if(ot!==null)this.boundingSphere=ot.clone();return this.drawRange.start=tt.drawRange.start,this.drawRange.count=tt.drawRange.count,this.userData=tt.userData,this._transformed=tt._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pe{constructor(tt,et){this.isInterleavedBuffer=!0,this.array=tt,this.stride=et,this.count=tt!==void 0?tt.length/et:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(tt){if(tt===!0)this.version++}setUsage(tt){return this.usage=tt,this}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}copy(tt){return this.array=new tt.array.constructor(tt.array),this.count=tt.count,this.stride=tt.stride,this.usage=tt.usage,this}copyAt(tt,et,nt){tt*=this.stride,nt*=et.stride;for(let it=0,st=this.stride;it<st;it++)this.array[tt+it]=et.array[nt+it];return this}set(tt,et=0){return this.array.set(tt,et),this}clone(tt){if(tt.arrayBuffers===void 0)tt.arrayBuffers={};let et=ql(this.array);if(tt.arrayBuffers[et]===void 0)tt.arrayBuffers[et]=this.array.slice(0).buffer;let nt=new this.array.constructor(tt.arrayBuffers[et]),it=new this.constructor(nt,this.stride);return it.setUsage(this.usage),it}onUpload(tt){return this.onUploadCallback=tt,this}toJSON(tt){if(tt.arrayBuffers===void 0)tt.arrayBuffers={};let et=ql(this.array);if(tt.arrayBuffers[et]===void 0)tt.arrayBuffers[et]=Array.from(new Uint32Array(this.array.slice(0).buffer));let nt={uuid:this.uuid,buffer:et,type:this.array.constructor.name,stride:this.stride};return nt.usage=this.usage,nt}}function ql(tt){if(tt.buffer._uuid===void 0)tt.buffer._uuid=Di();if(tt.byteOffset===0&&tt.byteLength===tt.buffer.byteLength)return tt.buffer._uuid;return tt.buffer._uuid+":"+tt.byteOffset+":"+tt.byteLength}var di=new e;class Z{constructor(tt,et,nt,it=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=tt,this.itemSize=et,this.offset=nt,this.normalized=it,this._normalizationScale=tt!==void 0?ha(tt.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(tt){this.data.needsUpdate=tt}applyMatrix4(tt){for(let et=0,nt=this.data.count;et<nt;et++)di.fromBufferAttribute(this,et),di.applyMatrix4(tt),this.setXYZ(et,di.x,di.y,di.z);return this}applyNormalMatrix(tt){for(let et=0,nt=this.count;et<nt;et++)di.fromBufferAttribute(this,et),di.applyNormalMatrix(tt),this.setXYZ(et,di.x,di.y,di.z);return this}transformDirection(tt){for(let et=0,nt=this.count;et<nt;et++)di.fromBufferAttribute(this,et),di.transformDirection(tt),this.setXYZ(et,di.x,di.y,di.z);return this}getComponent(tt,et){let nt=this.array[tt*this.data.stride+this.offset+et];if(this.normalized)nt=this._denormalize(nt);return nt}setComponent(tt,et,nt){if(this.normalized)nt=this._normalize(nt);return this.data.array[tt*this.data.stride+this.offset+et]=nt,this}setX(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset]=et,this}setY(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset+1]=et,this}setZ(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset+2]=et,this}setW(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset+3]=et,this}getX(tt){let et=this.data.array[tt*this.data.stride+this.offset];if(this.normalized)et=this._denormalize(et);return et}getY(tt){let et=this.data.array[tt*this.data.stride+this.offset+1];if(this.normalized)et=this._denormalize(et);return et}getZ(tt){let et=this.data.array[tt*this.data.stride+this.offset+2];if(this.normalized)et=this._denormalize(et);return et}getW(tt){let et=this.data.array[tt*this.data.stride+this.offset+3];if(this.normalized)et=this._denormalize(et);return et}setXY(tt,et,nt){if(tt=tt*this.data.stride+this.offset,this.normalized)et=this._normalize(et),nt=this._normalize(nt);return this.data.array[tt+0]=et,this.data.array[tt+1]=nt,this}setXYZ(tt,et,nt,it){if(tt=tt*this.data.stride+this.offset,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it);return this.data.array[tt+0]=et,this.data.array[tt+1]=nt,this.data.array[tt+2]=it,this}setXYZW(tt,et,nt,it,st){if(tt=tt*this.data.stride+this.offset,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it),st=this._normalize(st);return this.data.array[tt+0]=et,this.data.array[tt+1]=nt,this.data.array[tt+2]=it,this.data.array[tt+3]=st,this}clone(tt){if(tt===void 0){hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let et=[];for(let nt=0;nt<this.count;nt++){let it=nt*this.data.stride+this.offset;for(let st=0;st<this.itemSize;st++)et.push(this.data.array[it+st])}return new m(new this.array.constructor(et),this.itemSize,this.normalized)}else{if(tt.interleavedBuffers===void 0)tt.interleavedBuffers={};if(tt.interleavedBuffers[this.data.uuid]===void 0)tt.interleavedBuffers[this.data.uuid]=this.data.clone(tt);return new Z(tt.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(tt){if(tt===void 0){hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let et=[];for(let nt=0;nt<this.count;nt++){let it=nt*this.data.stride+this.offset;for(let st=0;st<this.itemSize;st++)et.push(this.data.array[it+st])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:et,normalized:this.normalized}}else{if(tt.interleavedBuffers===void 0)tt.interleavedBuffers={};if(tt.interleavedBuffers[this.data.uuid]===void 0)tt.interleavedBuffers[this.data.uuid]=this.data.toJSON(tt);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(tt){let et=this._normalizationScale;return et!==void 0?Math.max(tt/et,-1):jo(tt,this.data.array)}_normalize(tt){let et=this._normalizationScale;return et!==void 0?Math.round(tt*et):tl(tt,this.data.array)}}var Va=new e,Ju=new e,$u=new En;class Ii{constructor(tt=new e(1,0,0),et=0){this.isPlane=!0,this.normal=tt,this.constant=et}set(tt,et){return this.normal.copy(tt),this.constant=et,this}setComponents(tt,et,nt,it){return this.normal.set(tt,et,nt),this.constant=it,this}setFromNormalAndCoplanarPoint(tt,et){return this.normal.copy(tt),this.constant=-et.dot(this.normal),this}setFromCoplanarPoints(tt,et,nt){let it=Va.subVectors(nt,et).cross(Ju.subVectors(tt,et)).normalize();return this.setFromNormalAndCoplanarPoint(it,tt),this}copy(tt){return this.normal.copy(tt.normal),this.constant=tt.constant,this}normalize(){let tt=1/this.normal.length();return this.normal.multiplyScalar(tt),this.constant*=tt,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(tt){return this.normal.dot(tt)+this.constant}distanceToSphere(tt){return this.distanceToPoint(tt.center)-tt.radius}projectPoint(tt,et){return et.copy(tt).addScaledVector(this.normal,-this.distanceToPoint(tt))}intersectLine(tt,et,nt=!0){let it=tt.delta(Va),st=this.normal.dot(it);if(st===0){if(this.distanceToPoint(tt.start)===0)return et.copy(tt.start);return null}let rt=-(tt.start.dot(this.normal)+this.constant)/st;if(nt===!0&&(rt<0||rt>1))return null;return et.copy(tt.start).addScaledVector(it,rt)}intersectsLine(tt){let et=this.distanceToPoint(tt.start),nt=this.distanceToPoint(tt.end);return et<0&&nt>0||nt<0&&et>0}intersectsBox(tt){return tt.intersectsPlane(this)}intersectsSphere(tt){return tt.intersectsPlane(this)}coplanarPoint(tt){return tt.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(tt,et){let nt=et||$u.getNormalMatrix(tt),it=this.coplanarPoint(Va).applyMatrix4(tt),st=this.normal.applyMatrix3(nt).normalize();return this.constant=-it.dot(st),this}translate(tt){return this.constant-=tt.dot(this.normal),this}equals(tt){return tt.normal.equals(this.normal)&&tt.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(tt){return this.normal.fromArray(tt.normal),this.constant=tt.constant,this}}var Ku=0;class E extends Zi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(tt){if(this._alphaTest>0!==tt>0)this.version++;this._alphaTest=tt}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(tt){if(tt===void 0)return;for(let et in tt){let nt=tt[et];if(nt===void 0){_n(`Material: parameter '${et}' has value of undefined.`);continue}let it=this[et];if(it===void 0){_n(`Material: '${et}' is not a property of THREE.${this.type}.`);continue}if(it&&it.isColor)it.set(nt);else if(it&&it.isVector2&&(nt&&nt.isVector2)||it&&it.isEuler&&(nt&&nt.isEuler)||it&&it.isVector3&&(nt&&nt.isVector3))it.copy(nt);else this[et]=nt}}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(et)tt={textures:{},images:{}};let nt={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(nt.uuid=this.uuid,nt.type=this.type,nt.blending=this.blending,nt.side=this.side,nt.shadowSide=this.shadowSide,nt.vertexColors=this.vertexColors,nt.opacity=this.opacity,nt.transparent=this.transparent,nt.blendSrc=this.blendSrc,nt.blendDst=this.blendDst,nt.blendEquation=this.blendEquation,nt.blendSrcAlpha=this.blendSrcAlpha,nt.blendDstAlpha=this.blendDstAlpha,nt.blendEquationAlpha=this.blendEquationAlpha,nt.blendColor=this.blendColor.getHex(),nt.blendAlpha=this.blendAlpha,nt.depthFunc=this.depthFunc,nt.depthTest=this.depthTest,nt.depthWrite=this.depthWrite,nt.colorWrite=this.colorWrite,nt.clipIntersection=this.clipIntersection,nt.clipShadows=this.clipShadows,nt.stencilWriteMask=this.stencilWriteMask,nt.stencilFunc=this.stencilFunc,nt.stencilRef=this.stencilRef,nt.stencilFuncMask=this.stencilFuncMask,nt.stencilFail=this.stencilFail,nt.stencilZFail=this.stencilZFail,nt.stencilZPass=this.stencilZPass,nt.stencilWrite=this.stencilWrite,nt.polygonOffset=this.polygonOffset,nt.polygonOffsetFactor=this.polygonOffsetFactor,nt.polygonOffsetUnits=this.polygonOffsetUnits,nt.dithering=this.dithering,nt.alphaTest=this.alphaTest,nt.alphaHash=this.alphaHash,nt.alphaToCoverage=this.alphaToCoverage,nt.premultipliedAlpha=this.premultipliedAlpha,nt.forceSinglePass=this.forceSinglePass,nt.allowOverride=this.allowOverride,nt.visible=this.visible,nt.toneMapped=this.toneMapped,nt.name=this.name,this.color&&this.color.isColor)nt.color=this.color.getHex();if(this.roughness!==void 0)nt.roughness=this.roughness;if(this.metalness!==void 0)nt.metalness=this.metalness;if(this.sheen!==void 0)nt.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)nt.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)nt.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)nt.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)nt.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)nt.specular=this.specular.getHex();if(this.specularIntensity!==void 0)nt.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)nt.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)nt.shininess=this.shininess;if(this.clearcoat!==void 0)nt.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)nt.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)nt.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)nt.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(tt).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)nt.clearcoatMap=this.clearcoatMap.toJSON(tt).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)nt.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(tt).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)nt.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(tt).uuid,nt.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)nt.sheenColorMap=this.sheenColorMap.toJSON(tt).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)nt.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(tt).uuid;if(this.dispersion!==void 0)nt.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)nt.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)nt.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)nt.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)nt.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)nt.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)nt.iridescenceMap=this.iridescenceMap.toJSON(tt).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)nt.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(tt).uuid;if(this.anisotropy!==void 0)nt.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)nt.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)nt.anisotropyMap=this.anisotropyMap.toJSON(tt).uuid;if(this.map&&this.map.isTexture)nt.map=this.map.toJSON(tt).uuid;if(this.matcap&&this.matcap.isTexture)nt.matcap=this.matcap.toJSON(tt).uuid;if(this.alphaMap&&this.alphaMap.isTexture)nt.alphaMap=this.alphaMap.toJSON(tt).uuid;if(this.lightMap&&this.lightMap.isTexture)nt.lightMap=this.lightMap.toJSON(tt).uuid,nt.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)nt.aoMap=this.aoMap.toJSON(tt).uuid,nt.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)nt.bumpMap=this.bumpMap.toJSON(tt).uuid,nt.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)nt.normalMap=this.normalMap.toJSON(tt).uuid,nt.normalMapType=this.normalMapType,nt.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)nt.displacementMap=this.displacementMap.toJSON(tt).uuid,nt.displacementScale=this.displacementScale,nt.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)nt.roughnessMap=this.roughnessMap.toJSON(tt).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)nt.metalnessMap=this.metalnessMap.toJSON(tt).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)nt.emissiveMap=this.emissiveMap.toJSON(tt).uuid;if(this.specularMap&&this.specularMap.isTexture)nt.specularMap=this.specularMap.toJSON(tt).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)nt.specularIntensityMap=this.specularIntensityMap.toJSON(tt).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)nt.specularColorMap=this.specularColorMap.toJSON(tt).uuid;if(this.envMap&&this.envMap.isTexture){if(nt.envMap=this.envMap.toJSON(tt).uuid,this.combine!==void 0)nt.combine=this.combine}if(this.envMapRotation!==void 0)nt.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)nt.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)nt.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)nt.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)nt.gradientMap=this.gradientMap.toJSON(tt).uuid;if(this.transmission!==void 0)nt.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)nt.transmissionMap=this.transmissionMap.toJSON(tt).uuid;if(this.thickness!==void 0)nt.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)nt.thicknessMap=this.thicknessMap.toJSON(tt).uuid;if(this.attenuationDistance!==void 0)nt.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)nt.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)nt.size=this.size;if(this.sizeAttenuation!==void 0)nt.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)nt.clippingPlanes=this.clippingPlanes.map((st)=>st.toJSON());if(this.rotation!==void 0)nt.rotation=this.rotation;if(this.depthPacking!==void 0)nt.depthPacking=this.depthPacking;if(this.linewidth!==void 0)nt.linewidth=this.linewidth;if(this.linecap!==void 0)nt.linecap=this.linecap;if(this.linejoin!==void 0)nt.linejoin=this.linejoin;if(this.dashSize!==void 0)nt.dashSize=this.dashSize;if(this.gapSize!==void 0)nt.gapSize=this.gapSize;if(this.scale!==void 0)nt.scale=this.scale;if(this.wireframe!==void 0)nt.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)nt.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)nt.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)nt.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)nt.flatShading=this.flatShading;if(this.fog!==void 0)nt.fog=this.fog;if(Object.keys(this.userData).length>0)nt.userData=this.userData;function it(st){let rt=[];for(let at in st){let ot=st[at];delete ot.metadata,rt.push(ot)}return rt}if(et){let st=it(tt.textures),rt=it(tt.images);if(st.length>0)nt.textures=st;if(rt.length>0)nt.images=rt}return nt}fromJSON(tt,et){if(tt.uuid!==void 0)this.uuid=tt.uuid;if(tt.name!==void 0)this.name=tt.name;if(tt.color!==void 0&&this.color!==void 0)this.color.setHex(tt.color);if(tt.roughness!==void 0)this.roughness=tt.roughness;if(tt.metalness!==void 0)this.metalness=tt.metalness;if(tt.sheen!==void 0)this.sheen=tt.sheen;if(tt.sheenColor!==void 0)this.sheenColor=new t().setHex(tt.sheenColor);if(tt.sheenRoughness!==void 0)this.sheenRoughness=tt.sheenRoughness;if(tt.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(tt.emissive);if(tt.specular!==void 0&&this.specular!==void 0)this.specular.setHex(tt.specular);if(tt.specularIntensity!==void 0)this.specularIntensity=tt.specularIntensity;if(tt.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(tt.specularColor);if(tt.shininess!==void 0)this.shininess=tt.shininess;if(tt.clearcoat!==void 0)this.clearcoat=tt.clearcoat;if(tt.clearcoatRoughness!==void 0)this.clearcoatRoughness=tt.clearcoatRoughness;if(tt.diffuseRoughness!==void 0)this.diffuseRoughness=tt.diffuseRoughness;if(tt.dispersion!==void 0)this.dispersion=tt.dispersion;if(tt.retroreflectivity!==void 0)this.retroreflectivity=tt.retroreflectivity;if(tt.iridescence!==void 0)this.iridescence=tt.iridescence;if(tt.iridescenceIOR!==void 0)this.iridescenceIOR=tt.iridescenceIOR;if(tt.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=tt.iridescenceThicknessMinimum;if(tt.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=tt.iridescenceThicknessMaximum;if(tt.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=tt.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=tt.iridescenceThicknessRange[1];if(tt.transmission!==void 0)this.transmission=tt.transmission;if(tt.thickness!==void 0)this.thickness=tt.thickness;if(tt.attenuationDistance!==void 0)this.attenuationDistance=tt.attenuationDistance;if(tt.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(tt.attenuationColor);if(tt.anisotropy!==void 0)this.anisotropy=tt.anisotropy;if(tt.anisotropyRotation!==void 0)this.anisotropyRotation=tt.anisotropyRotation;if(tt.fog!==void 0)this.fog=tt.fog;if(tt.flatShading!==void 0)this.flatShading=tt.flatShading;if(tt.blending!==void 0)this.blending=tt.blending;if(tt.combine!==void 0)this.combine=tt.combine;if(tt.side!==void 0)this.side=tt.side;if(tt.shadowSide!==void 0)this.shadowSide=tt.shadowSide;if(tt.opacity!==void 0)this.opacity=tt.opacity;if(tt.transparent!==void 0)this.transparent=tt.transparent;if(tt.alphaTest!==void 0)this.alphaTest=tt.alphaTest;if(tt.alphaHash!==void 0)this.alphaHash=tt.alphaHash;if(tt.depthFunc!==void 0)this.depthFunc=tt.depthFunc;if(tt.depthTest!==void 0)this.depthTest=tt.depthTest;if(tt.depthWrite!==void 0)this.depthWrite=tt.depthWrite;if(tt.colorWrite!==void 0)this.colorWrite=tt.colorWrite;if(tt.clippingPlanes!==void 0)this.clippingPlanes=tt.clippingPlanes.map((nt)=>new Ii().fromJSON(nt));if(tt.clipIntersection!==void 0)this.clipIntersection=tt.clipIntersection;if(tt.clipShadows!==void 0)this.clipShadows=tt.clipShadows;if(tt.depthPacking!==void 0)this.depthPacking=tt.depthPacking;if(tt.blendSrc!==void 0)this.blendSrc=tt.blendSrc;if(tt.blendDst!==void 0)this.blendDst=tt.blendDst;if(tt.blendEquation!==void 0)this.blendEquation=tt.blendEquation;if(tt.blendSrcAlpha!==void 0)this.blendSrcAlpha=tt.blendSrcAlpha;if(tt.blendDstAlpha!==void 0)this.blendDstAlpha=tt.blendDstAlpha;if(tt.blendEquationAlpha!==void 0)this.blendEquationAlpha=tt.blendEquationAlpha;if(tt.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(tt.blendColor);if(tt.blendAlpha!==void 0)this.blendAlpha=tt.blendAlpha;if(tt.stencilWriteMask!==void 0)this.stencilWriteMask=tt.stencilWriteMask;if(tt.stencilFunc!==void 0)this.stencilFunc=tt.stencilFunc;if(tt.stencilRef!==void 0)this.stencilRef=tt.stencilRef;if(tt.stencilFuncMask!==void 0)this.stencilFuncMask=tt.stencilFuncMask;if(tt.stencilFail!==void 0)this.stencilFail=tt.stencilFail;if(tt.stencilZFail!==void 0)this.stencilZFail=tt.stencilZFail;if(tt.stencilZPass!==void 0)this.stencilZPass=tt.stencilZPass;if(tt.stencilWrite!==void 0)this.stencilWrite=tt.stencilWrite;if(tt.wireframe!==void 0)this.wireframe=tt.wireframe;if(tt.wireframeLinewidth!==void 0)this.wireframeLinewidth=tt.wireframeLinewidth;if(tt.wireframeLinecap!==void 0)this.wireframeLinecap=tt.wireframeLinecap;if(tt.wireframeLinejoin!==void 0)this.wireframeLinejoin=tt.wireframeLinejoin;if(tt.rotation!==void 0)this.rotation=tt.rotation;if(tt.linewidth!==void 0)this.linewidth=tt.linewidth;if(tt.linecap!==void 0)this.linecap=tt.linecap;if(tt.linejoin!==void 0)this.linejoin=tt.linejoin;if(tt.dashSize!==void 0)this.dashSize=tt.dashSize;if(tt.gapSize!==void 0)this.gapSize=tt.gapSize;if(tt.scale!==void 0)this.scale=tt.scale;if(tt.polygonOffset!==void 0)this.polygonOffset=tt.polygonOffset;if(tt.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=tt.polygonOffsetFactor;if(tt.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=tt.polygonOffsetUnits;if(tt.dithering!==void 0)this.dithering=tt.dithering;if(tt.alphaToCoverage!==void 0)this.alphaToCoverage=tt.alphaToCoverage;if(tt.premultipliedAlpha!==void 0)this.premultipliedAlpha=tt.premultipliedAlpha;if(tt.forceSinglePass!==void 0)this.forceSinglePass=tt.forceSinglePass;if(tt.allowOverride!==void 0)this.allowOverride=tt.allowOverride;if(tt.visible!==void 0)this.visible=tt.visible;if(tt.toneMapped!==void 0)this.toneMapped=tt.toneMapped;if(tt.userData!==void 0)this.userData=tt.userData;if(tt.vertexColors!==void 0)if(typeof tt.vertexColors==="number")this.vertexColors=tt.vertexColors>0;else this.vertexColors=tt.vertexColors;if(tt.size!==void 0)this.size=tt.size;if(tt.sizeAttenuation!==void 0)this.sizeAttenuation=tt.sizeAttenuation;if(tt.map!==void 0)this.map=et[tt.map]||null;if(tt.matcap!==void 0)this.matcap=et[tt.matcap]||null;if(tt.alphaMap!==void 0)this.alphaMap=et[tt.alphaMap]||null;if(tt.bumpMap!==void 0)this.bumpMap=et[tt.bumpMap]||null;if(tt.bumpScale!==void 0)this.bumpScale=tt.bumpScale;if(tt.normalMap!==void 0)this.normalMap=et[tt.normalMap]||null;if(tt.normalMapType!==void 0)this.normalMapType=tt.normalMapType;if(tt.normalScale!==void 0){let nt=tt.normalScale;if(Array.isArray(nt)===!1)nt=[nt,nt];this.normalScale=new n().fromArray(nt)}if(tt.displacementMap!==void 0)this.displacementMap=et[tt.displacementMap]||null;if(tt.displacementScale!==void 0)this.displacementScale=tt.displacementScale;if(tt.displacementBias!==void 0)this.displacementBias=tt.displacementBias;if(tt.roughnessMap!==void 0)this.roughnessMap=et[tt.roughnessMap]||null;if(tt.metalnessMap!==void 0)this.metalnessMap=et[tt.metalnessMap]||null;if(tt.emissiveMap!==void 0)this.emissiveMap=et[tt.emissiveMap]||null;if(tt.emissiveIntensity!==void 0)this.emissiveIntensity=tt.emissiveIntensity;if(tt.specularMap!==void 0)this.specularMap=et[tt.specularMap]||null;if(tt.specularIntensityMap!==void 0)this.specularIntensityMap=et[tt.specularIntensityMap]||null;if(tt.specularColorMap!==void 0)this.specularColorMap=et[tt.specularColorMap]||null;if(tt.envMap!==void 0)this.envMap=et[tt.envMap]||null;if(tt.envMapRotation!==void 0)this.envMapRotation.fromArray(tt.envMapRotation);if(tt.envMapIntensity!==void 0)this.envMapIntensity=tt.envMapIntensity;if(tt.reflectivity!==void 0)this.reflectivity=tt.reflectivity;if(tt.refractionRatio!==void 0)this.refractionRatio=tt.refractionRatio;if(tt.lightMap!==void 0)this.lightMap=et[tt.lightMap]||null;if(tt.lightMapIntensity!==void 0)this.lightMapIntensity=tt.lightMapIntensity;if(tt.aoMap!==void 0)this.aoMap=et[tt.aoMap]||null;if(tt.aoMapIntensity!==void 0)this.aoMapIntensity=tt.aoMapIntensity;if(tt.gradientMap!==void 0)this.gradientMap=et[tt.gradientMap]||null;if(tt.clearcoatMap!==void 0)this.clearcoatMap=et[tt.clearcoatMap]||null;if(tt.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=et[tt.clearcoatRoughnessMap]||null;if(tt.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=et[tt.clearcoatNormalMap]||null;if(tt.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new n().fromArray(tt.clearcoatNormalScale);if(tt.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=et[tt.diffuseRoughnessMap]||null;if(tt.iridescenceMap!==void 0)this.iridescenceMap=et[tt.iridescenceMap]||null;if(tt.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=et[tt.iridescenceThicknessMap]||null;if(tt.transmissionMap!==void 0)this.transmissionMap=et[tt.transmissionMap]||null;if(tt.thicknessMap!==void 0)this.thicknessMap=et[tt.thicknessMap]||null;if(tt.anisotropyMap!==void 0)this.anisotropyMap=et[tt.anisotropyMap]||null;if(tt.sheenColorMap!==void 0)this.sheenColorMap=et[tt.sheenColorMap]||null;if(tt.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=et[tt.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(tt){this.name=tt.name,this.blending=tt.blending,this.side=tt.side,this.vertexColors=tt.vertexColors,this.opacity=tt.opacity,this.transparent=tt.transparent,this.blendSrc=tt.blendSrc,this.blendDst=tt.blendDst,this.blendEquation=tt.blendEquation,this.blendSrcAlpha=tt.blendSrcAlpha,this.blendDstAlpha=tt.blendDstAlpha,this.blendEquationAlpha=tt.blendEquationAlpha,this.blendColor.copy(tt.blendColor),this.blendAlpha=tt.blendAlpha,this.depthFunc=tt.depthFunc,this.depthTest=tt.depthTest,this.depthWrite=tt.depthWrite,this.stencilWriteMask=tt.stencilWriteMask,this.stencilFunc=tt.stencilFunc,this.stencilRef=tt.stencilRef,this.stencilFuncMask=tt.stencilFuncMask,this.stencilFail=tt.stencilFail,this.stencilZFail=tt.stencilZFail,this.stencilZPass=tt.stencilZPass,this.stencilWrite=tt.stencilWrite;let et=tt.clippingPlanes,nt=null;if(et!==null){let it=et.length;nt=Array(it);for(let st=0;st!==it;++st)nt[st]=et[st].clone()}return this.clippingPlanes=nt,this.clipIntersection=tt.clipIntersection,this.clipShadows=tt.clipShadows,this.shadowSide=tt.shadowSide,this.colorWrite=tt.colorWrite,this.precision=tt.precision,this.polygonOffset=tt.polygonOffset,this.polygonOffsetFactor=tt.polygonOffsetFactor,this.polygonOffsetUnits=tt.polygonOffsetUnits,this.dithering=tt.dithering,this.alphaTest=tt.alphaTest,this.alphaHash=tt.alphaHash,this.alphaToCoverage=tt.alphaToCoverage,this.premultipliedAlpha=tt.premultipliedAlpha,this.forceSinglePass=tt.forceSinglePass,this.allowOverride=tt.allowOverride,this.visible=tt.visible,this.toneMapped=tt.toneMapped,this.userData=JSON.parse(JSON.stringify(tt.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(tt){if(tt===!0)this.version++}}class me extends E{constructor(tt){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.alphaMap=tt.alphaMap,this.rotation=tt.rotation,this.sizeAttenuation=tt.sizeAttenuation,this.fog=tt.fog,this}}var Ps,tr=new e,Ls=new e,Ns=new e,Ds=new n,er=new n,yh=new i,Nr=new e,nr=new e,Dr=new e,Yl=new n,Xa=new n,Zl=new n;class we extends l{constructor(tt=new me){super();if(this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new f;let et=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),nt=new pe(et,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Z(nt,3,0,!1)),Ps.setAttribute("uv",new Z(nt,2,3,!1))}this.geometry=Ps,this.material=tt,this.center=new n(0.5,0.5),this.count=1}intersectsFrustum(tt){return tt.intersectsSprite(this)}raycast(tt,et){if(tt.camera===null)Tn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Ls.setFromMatrixScale(this.matrixWorld),yh.copy(tt.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(tt.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),tt.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Ls.multiplyScalar(-Ns.z);let nt=this.material.rotation,it,st;if(nt!==0)st=Math.cos(nt),it=Math.sin(nt);let rt=this.center;Ur(Nr.set(-0.5,-0.5,0),Ns,rt,Ls,it,st),Ur(nr.set(0.5,-0.5,0),Ns,rt,Ls,it,st),Ur(Dr.set(0.5,0.5,0),Ns,rt,Ls,it,st),Yl.set(0,0),Xa.set(1,0),Zl.set(1,1);let at=tt.ray.intersectTriangle(Nr,nr,Dr,!1,tr);if(at===null){if(Ur(nr.set(-0.5,0.5,0),Ns,rt,Ls,it,st),Xa.set(0,1),at=tt.ray.intersectTriangle(Nr,Dr,nr,!1,tr),at===null)return}let ot=tt.ray.origin.distanceTo(tr);if(ot<tt.near||ot>tt.far)return;et.push({distance:ot,point:tr.clone(),uv:vi.getInterpolation(tr,Nr,nr,Dr,Yl,Xa,Zl,new n),face:null,object:this})}copy(tt,et){if(super.copy(tt,et),tt.center!==void 0)this.center.copy(tt.center);return this.material=tt.material,this}toJSON(tt){let et=super.toJSON(tt);return et.object.center=this.center.toArray(),et}}function Ur(tt,et,nt,it,st,rt){if(Ds.subVectors(tt,nt).addScalar(0.5).multiply(it),st!==void 0)er.x=rt*Ds.x-st*Ds.y,er.y=st*Ds.x+rt*Ds.y;else er.copy(Ds);tt.copy(et),tt.x+=er.x,tt.y+=er.y,tt.applyMatrix4(yh)}var Wi=new e,qa=new e,Fr=new e,Or=new e;class qs{constructor(tt=new e,et=new e(0,0,-1)){this.origin=tt,this.direction=et}set(tt,et){return this.origin.copy(tt),this.direction.copy(et),this}copy(tt){return this.origin.copy(tt.origin),this.direction.copy(tt.direction),this}at(tt,et){return et.copy(this.origin).addScaledVector(this.direction,tt)}lookAt(tt){return this.direction.copy(tt).sub(this.origin).normalize(),this}recast(tt){return this.origin.copy(this.at(tt,Wi)),this}closestPointToPoint(tt,et){et.subVectors(tt,this.origin);let nt=et.dot(this.direction);if(nt<0)return et.copy(this.origin);return et.copy(this.origin).addScaledVector(this.direction,nt)}distanceToPoint(tt){return Math.sqrt(this.distanceSqToPoint(tt))}distanceSqToPoint(tt){let et=Wi.subVectors(tt,this.origin).dot(this.direction);if(et<0)return this.origin.distanceToSquared(tt);return Wi.copy(this.origin).addScaledVector(this.direction,et),Wi.distanceToSquared(tt)}distanceSqToSegment(tt,et,nt,it){qa.copy(tt).add(et).multiplyScalar(0.5),Fr.copy(et).sub(tt).normalize(),Or.copy(this.origin).sub(qa);let st=tt.distanceTo(et)*0.5,rt=-this.direction.dot(Fr),at=Or.dot(this.direction),ot=-Or.dot(Fr),lt=Or.lengthSq(),ct=Math.abs(1-rt*rt),ut,dt,ht,ft;if(ct>0)if(ut=rt*ot-at,dt=rt*at-ot,ft=st*ct,ut>=0)if(dt>=-ft)if(dt<=ft){let vt=1/ct;ut*=vt,dt*=vt,ht=ut*(ut+rt*dt+2*at)+dt*(rt*ut+dt+2*ot)+lt}else dt=st,ut=Math.max(0,-(rt*dt+at)),ht=-ut*ut+dt*(dt+2*ot)+lt;else dt=-st,ut=Math.max(0,-(rt*dt+at)),ht=-ut*ut+dt*(dt+2*ot)+lt;else if(dt<=-ft)ut=Math.max(0,-(-rt*st+at)),dt=ut>0?-st:Math.min(Math.max(-st,-ot),st),ht=-ut*ut+dt*(dt+2*ot)+lt;else if(dt<=ft)ut=0,dt=Math.min(Math.max(-st,-ot),st),ht=dt*(dt+2*ot)+lt;else ut=Math.max(0,-(rt*st+at)),dt=ut>0?st:Math.min(Math.max(-st,-ot),st),ht=-ut*ut+dt*(dt+2*ot)+lt;else dt=rt>0?-st:st,ut=Math.max(0,-(rt*dt+at)),ht=-ut*ut+dt*(dt+2*ot)+lt;if(nt)nt.copy(this.origin).addScaledVector(this.direction,ut);if(it)it.copy(qa).addScaledVector(Fr,dt);return ht}intersectSphere(tt,et){if(tt.radius<0)return null;Wi.subVectors(tt.center,this.origin);let nt=Wi.dot(this.direction),it=Wi.dot(Wi)-nt*nt,st=tt.radius*tt.radius;if(it>st)return null;let rt=Math.sqrt(st-it),at=nt-rt,ot=nt+rt;if(ot<0)return null;if(at<0)return this.at(ot,et);return this.at(at,et)}intersectsSphere(tt){if(tt.radius<0)return!1;return this.distanceSqToPoint(tt.center)<=tt.radius*tt.radius}distanceToPlane(tt){let et=tt.normal.dot(this.direction);if(et===0){if(tt.distanceToPoint(this.origin)===0)return 0;return null}let nt=-(this.origin.dot(tt.normal)+tt.constant)/et;return nt>=0?nt:null}intersectPlane(tt,et){let nt=this.distanceToPlane(tt);if(nt===null)return null;return this.at(nt,et)}intersectsPlane(tt){let et=tt.distanceToPoint(this.origin);if(et===0)return!0;if(tt.normal.dot(this.direction)*et<0)return!0;return!1}intersectBox(tt,et){let nt,it,st,rt,at,ot,lt=1/this.direction.x,ct=1/this.direction.y,ut=1/this.direction.z,dt=this.origin;if(lt>=0)nt=(tt.min.x-dt.x)*lt,it=(tt.max.x-dt.x)*lt;else nt=(tt.max.x-dt.x)*lt,it=(tt.min.x-dt.x)*lt;if(ct>=0)st=(tt.min.y-dt.y)*ct,rt=(tt.max.y-dt.y)*ct;else st=(tt.max.y-dt.y)*ct,rt=(tt.min.y-dt.y)*ct;if(nt>rt||st>it)return null;if(st>nt||isNaN(nt))nt=st;if(rt<it||isNaN(it))it=rt;if(ut>=0)at=(tt.min.z-dt.z)*ut,ot=(tt.max.z-dt.z)*ut;else at=(tt.max.z-dt.z)*ut,ot=(tt.min.z-dt.z)*ut;if(nt>ot||at>it)return null;if(at>nt||nt!==nt)nt=at;if(ot<it||it!==it)it=ot;if(it<0)return null;return this.at(nt>=0?nt:it,et)}intersectsBox(tt){return this.intersectBox(tt,Wi)!==null}intersectTriangle(tt,et,nt,it,st){let rt=this.origin,at=this.direction,{x:ot,y:lt,z:ct}=at,ut=tt.x-rt.x,dt=tt.y-rt.y,ht=tt.z-rt.z,ft=et.x-rt.x,vt=et.y-rt.y,St=et.z-rt.z,pt=nt.x-rt.x,mt=nt.y-rt.y,Tt=nt.z-rt.z,At=Math.abs(ot),bt=Math.abs(lt),Et=Math.abs(ct),It,gt,yt,Nt,kt,Lt,zt,Kt,Rt,qt,Zt,Ot;if(At>=bt&&At>=Et)if(yt=ot,Lt=ut,Rt=ft,Ot=pt,ot>=0)It=lt,gt=ct,Nt=dt,kt=ht,zt=vt,Kt=St,qt=mt,Zt=Tt;else It=ct,gt=lt,Nt=ht,kt=dt,zt=St,Kt=vt,qt=Tt,Zt=mt;else if(bt>=Et)if(yt=lt,Lt=dt,Rt=vt,Ot=mt,lt>=0)It=ct,gt=ot,Nt=ht,kt=ut,zt=St,Kt=ft,qt=Tt,Zt=pt;else It=ot,gt=ct,Nt=ut,kt=ht,zt=ft,Kt=St,qt=pt,Zt=Tt;else if(yt=ct,Lt=ht,Rt=St,Ot=Tt,ct>=0)It=ot,gt=lt,Nt=ut,kt=dt,zt=ft,Kt=vt,qt=pt,Zt=mt;else It=lt,gt=ot,Nt=dt,kt=ut,zt=vt,Kt=ft,qt=mt,Zt=pt;if(yt===0)return null;let Qe=It/yt,Wt=gt/yt,$t=1/yt,Je=Nt-Qe*Lt,mn=kt-Wt*Lt,Yt=zt-Qe*Rt,ae=Kt-Wt*Rt,fn=qt-Qe*Ot,Sn=Zt-Wt*Ot,Mn=fn*ae-Sn*Yt,pn=Je*Sn-mn*fn,Bn=Yt*mn-ae*Je;if(it){if(Mn<0||pn<0||Bn<0)return null}else if((Mn<0||pn<0||Bn<0)&&(Mn>0||pn>0||Bn>0))return null;let Ln=Mn+pn+Bn;if(Ln===0)return null;let Rn=$t*(Mn*Lt+pn*Rt+Bn*Ot);if(Ln>0?Rn<0:Rn>0)return null;return this.at(Rn/Ln,st)}applyMatrix4(tt){return this.origin.applyMatrix4(tt),this.direction.transformDirection(tt),this}equals(tt){return tt.origin.equals(this.origin)&&tt.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class u extends E{constructor(tt){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.specularMap=tt.specularMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.combine=tt.combine,this.reflectivity=tt.reflectivity,this.refractionRatio=tt.refractionRatio,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.fog=tt.fog,this}}var Jl=new i,ds=new qs,Br=new N,$l=new e,zr=new e,Gr=new e,kr=new e,Ya=new e,Hr=new e,Kl=new e,Wr=new e;class r extends l{constructor(tt=new f,et=new u){super();this.isMesh=!0,this.type="Mesh",this.geometry=tt,this.material=et,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(tt,et){if(super.copy(tt,et),tt.morphTargetInfluences!==void 0)this.morphTargetInfluences=tt.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(tt.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},tt.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(tt.material)?tt.material.slice():tt.material,this.geometry=tt.geometry,this}updateMorphTargets(){let et=this.geometry.morphAttributes,nt=Object.keys(et);if(nt.length>0){let it=et[nt[0]];if(it!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let st=0,rt=it.length;st<rt;st++){let at=it[st].name||String(st);this.morphTargetInfluences.push(0),this.morphTargetDictionary[at]=st}}}}getVertexPosition(tt,et){let nt=this.geometry,it=nt.attributes.position,st=nt.morphAttributes.position,rt=nt.morphTargetsRelative;et.fromBufferAttribute(it,tt);let at=this.morphTargetInfluences;if(st&&at){Hr.set(0,0,0);for(let ot=0,lt=st.length;ot<lt;ot++){let ct=at[ot],ut=st[ot];if(ct===0)continue;if(Ya.fromBufferAttribute(ut,tt),rt)Hr.addScaledVector(Ya,ct);else Hr.addScaledVector(Ya.sub(et),ct)}et.add(Hr)}return et}intersectsFrustum(tt){return tt.intersectsObject(this)}raycast(tt,et){let nt=this.geometry,it=this.material,st=this.matrixWorld;if(it===void 0)return;if(nt.boundingSphere===null)nt.computeBoundingSphere();if(Br.copy(nt.boundingSphere),Br.applyMatrix4(st),ds.copy(tt.ray).recast(tt.near),Br.containsPoint(ds.origin)===!1){if(ds.intersectSphere(Br,$l)===null)return;if(ds.origin.distanceToSquared($l)>(tt.far-tt.near)**2)return}if(Jl.copy(st).invert(),ds.copy(tt.ray).applyMatrix4(Jl),nt.boundingBox!==null){if(ds.intersectsBox(nt.boundingBox)===!1)return}this._computeIntersections(tt,et,ds)}_computeIntersections(tt,et,nt){let it,st=this.geometry,rt=this.material,at=st.index,ot=st.attributes.position,lt=st.attributes.uv,ct=st.attributes.uv1,ut=st.attributes.normal,{groups:dt,drawRange:ht}=st;if(at!==null)if(Array.isArray(rt))for(let ft=0,vt=dt.length;ft<vt;ft++){let St=dt[ft],pt=rt[St.materialIndex],mt=Math.max(St.start,ht.start),Tt=Math.min(at.count,Math.min(St.start+St.count,ht.start+ht.count));for(let At=mt,bt=Tt;At<bt;At+=3){let Et=at.getX(At),It=at.getX(At+1),gt=at.getX(At+2);if(it=Vr(this,pt,tt,nt,lt,ct,ut,Et,It,gt),it)it.faceIndex=Math.floor(At/3),it.face.materialIndex=St.materialIndex,et.push(it)}}else{let ft=Math.max(0,ht.start),vt=Math.min(at.count,ht.start+ht.count);for(let St=ft,pt=vt;St<pt;St+=3){let mt=at.getX(St),Tt=at.getX(St+1),At=at.getX(St+2);if(it=Vr(this,rt,tt,nt,lt,ct,ut,mt,Tt,At),it)it.faceIndex=Math.floor(St/3),et.push(it)}}else if(ot!==void 0)if(Array.isArray(rt))for(let ft=0,vt=dt.length;ft<vt;ft++){let St=dt[ft],pt=rt[St.materialIndex],mt=Math.max(St.start,ht.start),Tt=Math.min(ot.count,Math.min(St.start+St.count,ht.start+ht.count));for(let At=mt,bt=Tt;At<bt;At+=3){let Et=At,It=At+1,gt=At+2;if(it=Vr(this,pt,tt,nt,lt,ct,ut,Et,It,gt),it)it.faceIndex=Math.floor(At/3),it.face.materialIndex=St.materialIndex,et.push(it)}}else{let ft=Math.max(0,ht.start),vt=Math.min(ot.count,ht.start+ht.count);for(let St=ft,pt=vt;St<pt;St+=3){let mt=St,Tt=St+1,At=St+2;if(it=Vr(this,rt,tt,nt,lt,ct,ut,mt,Tt,At),it)it.faceIndex=Math.floor(St/3),et.push(it)}}}}function Qu(tt,et,nt,it,st,rt,at,ot){let lt;if(et.side===1)lt=it.intersectTriangle(at,rt,st,!0,ot);else lt=it.intersectTriangle(st,rt,at,et.side===0,ot);if(lt===null)return null;Wr.copy(ot),Wr.applyMatrix4(tt.matrixWorld);let ct=nt.ray.origin.distanceTo(Wr);if(ct<nt.near||ct>nt.far)return null;return{distance:ct,point:Wr.clone(),object:tt}}function Vr(tt,et,nt,it,st,rt,at,ot,lt,ct){tt.getVertexPosition(ot,zr),tt.getVertexPosition(lt,Gr),tt.getVertexPosition(ct,kr);let ut=Qu(tt,et,nt,it,zr,Gr,kr,Kl);if(ut){let dt=new e;if(vi.getBarycoord(Kl,zr,Gr,kr,dt),st)ut.uv=vi.getInterpolatedAttribute(st,ot,lt,ct,dt,new n);if(rt)ut.uv1=vi.getInterpolatedAttribute(rt,ot,lt,ct,dt,new n);if(at){if(ut.normal=vi.getInterpolatedAttribute(at,ot,lt,ct,dt,new e),ut.normal.dot(it.direction)>0)ut.normal.multiplyScalar(-1)}let ht={a:ot,b:lt,c:ct,normal:new e,materialIndex:0};vi.getNormal(zr,Gr,kr,ht.normal),ut.face=ht,ut.barycoord=dt}return ut}var ir=new a,Ql=new a,jl=new a,ju=new a,tc=new i,Xr=new e,Za=new N,ec=new i,Ja=new qs;class Be extends r{constructor(tt,et){super(tt,et);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new i,this.bindMatrixInverse=new i,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let tt=this.geometry;if(this.boundingBox===null)this.boundingBox=new C;this.boundingBox.makeEmpty();let et=tt.getAttribute("position");for(let nt=0;nt<et.count;nt++)this.getVertexPosition(nt,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){let tt=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new N;this.boundingSphere.makeEmpty();let et=tt.getAttribute("position");for(let nt=0;nt<et.count;nt++)this.getVertexPosition(nt,Xr),this.boundingSphere.expandByPoint(Xr)}copy(tt,et){return super.copy(tt,et),this.bindMode=tt.bindMode,this.bindMatrix.copy(tt.bindMatrix),this.bindMatrixInverse.copy(tt.bindMatrixInverse),this.skeleton=tt.skeleton,this.boundingBox=tt.boundingBox!==null?tt.boundingBox.clone():null,this.boundingSphere=tt.boundingSphere!==null?tt.boundingSphere.clone():null,this}raycast(tt,et){let nt=this.material,it=this.matrixWorld;if(nt===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Za.copy(this.boundingSphere),Za.applyMatrix4(it),tt.ray.intersectsSphere(Za)===!1)return;if(ec.copy(it).invert(),Ja.copy(tt.ray).applyMatrix4(ec),this.boundingBox!==null){if(Ja.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(tt,et,Ja)}getVertexPosition(tt,et){return super.getVertexPosition(tt,et),this.applyBoneTransform(tt,et),et}bind(tt,et){if(this.skeleton=tt,et===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),et=this.matrixWorld;this.bindMatrix.copy(et),this.bindMatrixInverse.copy(et).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let tt=new a,et=this.geometry.attributes.skinWeight;for(let nt=0,it=et.count;nt<it;nt++){tt.fromBufferAttribute(et,nt);let st=1/tt.manhattanLength();if(st!==1/0)tt.multiplyScalar(st);else tt.set(1,0,0,0);et.setXYZW(nt,tt.x,tt.y,tt.z,tt.w)}}updateMatrixWorld(tt){if(super.updateMatrixWorld(tt),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else _n("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(tt,et){let nt=this.skeleton,it=this.geometry;if(Ql.fromBufferAttribute(it.attributes.skinIndex,tt),jl.fromBufferAttribute(it.attributes.skinWeight,tt),et.isVector4)ir.copy(et),et.set(0,0,0,0);else ir.set(et.x,et.y,et.z,1),et.set(0,0,0);ir.applyMatrix4(this.bindMatrix);for(let st=0;st<4;st++){let rt=jl.getComponent(st);if(rt!==0){let at=Ql.getComponent(st);tc.multiplyMatrices(nt.bones[at].matrixWorld,nt.boneInverses[at]),et.addScaledVector(ju.copy(ir).applyMatrix4(tc),rt)}}if(et.isVector4)et.w=ir.w;return et.applyMatrix4(this.bindMatrixInverse)}}class Ae extends l{constructor(){super();this.isBone=!0,this.type="Bone"}}class _r extends x{constructor(tt=null,et=1,nt=1,it,st,rt,at,ot,lt=1003,ct=1003,ut,dt){super(null,rt,at,ot,lt,ct,it,st,ut,dt);this.isDataTexture=!0,this.image={data:tt,width:et,height:nt},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var nc=new i,td=new i;class Ee{constructor(tt=[],et=[]){this.uuid=Di(),this.bones=tt.slice(0),this.boneInverses=et,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let tt=this.bones,et=this.boneInverses;if(this.boneMatrices=new Float32Array(tt.length*16),et.length===0)this.calculateInverses();else if(tt.length!==et.length){_n("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let nt=0,it=this.bones.length;nt<it;nt++)this.boneInverses.push(new i)}}calculateInverses(){this.boneInverses.length=0;for(let tt=0,et=this.bones.length;tt<et;tt++){let nt=new i;if(this.bones[tt])nt.copy(this.bones[tt].matrixWorld).invert();this.boneInverses.push(nt)}}pose(){for(let tt=0,et=this.bones.length;tt<et;tt++){let nt=this.bones[tt];if(nt)nt.matrixWorld.copy(this.boneInverses[tt]).invert()}for(let tt=0,et=this.bones.length;tt<et;tt++){let nt=this.bones[tt];if(nt){if(nt.parent&&nt.parent.isBone)nt.matrix.copy(nt.parent.matrixWorld).invert(),nt.matrix.multiply(nt.matrixWorld);else nt.matrix.copy(nt.matrixWorld);nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)}}}update(){let tt=this.bones,et=this.boneInverses,nt=this.boneMatrices,it=this.boneTexture;for(let st=0,rt=tt.length;st<rt;st++){let at=tt[st]?tt[st].matrixWorld:td;nc.multiplyMatrices(at,et[st]),nc.toArray(nt,st*16)}if(it!==null)it.needsUpdate=!0}clone(){return new Ee(this.bones,this.boneInverses)}computeBoneTexture(){let tt=Math.sqrt(this.bones.length*4);tt=Math.ceil(tt/4)*4,tt=Math.max(tt,4);let et=new Float32Array(tt*tt*4);et.set(this.boneMatrices);let nt=new _r(et,tt,tt,1023,1015);return nt.needsUpdate=!0,this.boneMatrices=et,this.boneTexture=nt,this}getBoneByName(tt){for(let et=0,nt=this.bones.length;et<nt;et++){let it=this.bones[et];if(it.name===tt)return it}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(tt,et){this.uuid=tt.uuid;for(let nt=0,it=tt.bones.length;nt<it;nt++){let st=tt.bones[nt],rt=et[st];if(rt===void 0)_n("Skeleton: No bone found with UUID:",st),rt=new Ae;this.bones.push(rt),this.boneInverses.push(new i().fromArray(tt.boneInverses[nt]))}return this.init(),this}toJSON(){let tt={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};tt.uuid=this.uuid;let et=this.bones,nt=this.boneInverses;for(let it=0,st=et.length;it<st;it++){let rt=et[it];tt.bones.push(rt.uuid);let at=nt[it];tt.boneInverses.push(at.toArray())}return tt}}class K extends m{constructor(tt,et,nt,it=1){super(tt,et,nt);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=it}copy(tt){return super.copy(tt),this.meshPerAttribute=tt.meshPerAttribute,this}toJSON(){let tt=super.toJSON();return tt.meshPerAttribute=this.meshPerAttribute,tt.isInstancedBufferAttribute=!0,tt}}var Us=new i,ic=new i,qr=[],sc=new C,ed=new i,sr=new r,rr=new N;class D extends r{constructor(tt,et,nt){super(tt,et);this.isInstancedMesh=!0,this.instanceMatrix=new K(new Float32Array(nt*16),16),this.instanceColor=null,this.morphTexture=null,this.count=nt,this.boundingBox=null,this.boundingSphere=null;for(let it=0;it<nt;it++)this.setMatrixAt(it,ed)}computeBoundingBox(){let tt=this.geometry,et=this.count;if(this.boundingBox===null)this.boundingBox=new C;if(tt.boundingBox===null)tt.computeBoundingBox();this.boundingBox.makeEmpty();for(let nt=0;nt<et;nt++)this.getMatrixAt(nt,Us),sc.copy(tt.boundingBox).applyMatrix4(Us),this.boundingBox.union(sc)}computeBoundingSphere(){let tt=this.geometry,et=this.count;if(this.boundingSphere===null)this.boundingSphere=new N;if(tt.boundingSphere===null)tt.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let nt=0;nt<et;nt++)this.getMatrixAt(nt,Us),rr.copy(tt.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(rr)}copy(tt,et){return super.copy(tt,et),this.instanceMatrix.copy(tt.instanceMatrix),this.morphTexture=tt.morphTexture!==null?tt.morphTexture.clone():null,this.instanceColor=tt.instanceColor!==null?tt.instanceColor.clone():null,this.count=tt.count,this.boundingBox=tt.boundingBox!==null?tt.boundingBox.clone():null,this.boundingSphere=tt.boundingSphere!==null?tt.boundingSphere.clone():null,this}getColorAt(tt,et){if(this.instanceColor===null)return et.setRGB(1,1,1);else return et.fromArray(this.instanceColor.array,tt*3)}getMatrixAt(tt,et){return et.fromArray(this.instanceMatrix.array,tt*16)}getMorphAt(tt,et){let nt=et.morphTargetInfluences,it=this.morphTexture.source.data.data,st=nt.length+1,rt=tt*st+1;for(let at=0;at<nt.length;at++)nt[at]=it[rt+at]}raycast(tt,et){let nt=this.matrixWorld,it=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(rr.copy(this.boundingSphere),rr.applyMatrix4(nt),tt.ray.intersectsSphere(rr)===!1)return;for(let st=0;st<it;st++){this.getMatrixAt(st,Us),ic.multiplyMatrices(nt,Us),sr.matrixWorld=ic,sr.raycast(tt,qr);for(let rt=0,at=qr.length;rt<at;rt++){let ot=qr[rt];ot.instanceId=st,ot.object=this,et.push(ot)}qr.length=0}}setColorAt(tt,et){if(this.instanceColor===null)this.instanceColor=new K(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return et.toArray(this.instanceColor.array,tt*3),this}setMatrixAt(tt,et){return et.toArray(this.instanceMatrix.array,tt*16),this}setMorphAt(tt,et){let nt=et.morphTargetInfluences,it=nt.length+1;if(this.morphTexture===null)this.morphTexture=new _r(new Float32Array(it*this.count),it,this.count,1028,1015);let st=this.morphTexture.source.data.data,rt=0;for(let lt=0;lt<nt.length;lt++)rt+=nt[lt];let at=this.geometry.morphTargetsRelative?1:1-rt,ot=it*tt;return st[ot]=at,st.set(nt,ot+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var fs=new N,nd=new n(0.5,0.5),Yr=new e;class gs{constructor(tt=new Ii,et=new Ii,nt=new Ii,it=new Ii,st=new Ii,rt=new Ii){this.planes=[tt,et,nt,it,st,rt]}set(tt,et,nt,it,st,rt){let at=this.planes;return at[0].copy(tt),at[1].copy(et),at[2].copy(nt),at[3].copy(it),at[4].copy(st),at[5].copy(rt),this}copy(tt){let et=this.planes;for(let nt=0;nt<6;nt++)et[nt].copy(tt.planes[nt]);return this}setFromProjectionMatrix(tt,et=2000,nt=!1){let it=this.planes,st=tt.elements,rt=st[0],at=st[1],ot=st[2],lt=st[3],ct=st[4],ut=st[5],dt=st[6],ht=st[7],ft=st[8],vt=st[9],St=st[10],pt=st[11],mt=st[12],Tt=st[13],At=st[14],bt=st[15];if(it[0].setComponents(lt-rt,ht-ct,pt-ft,bt-mt).normalize(),it[1].setComponents(lt+rt,ht+ct,pt+ft,bt+mt).normalize(),it[2].setComponents(lt+at,ht+ut,pt+vt,bt+Tt).normalize(),it[3].setComponents(lt-at,ht-ut,pt-vt,bt-Tt).normalize(),nt)it[4].setComponents(ot,dt,St,At).normalize(),it[5].setComponents(lt-ot,ht-dt,pt-St,bt-At).normalize();else if(it[4].setComponents(lt-ot,ht-dt,pt-St,bt-At).normalize(),et===2000)it[5].setComponents(lt+ot,ht+dt,pt+St,bt+At).normalize();else if(et===2001)it[5].setComponents(ot,dt,St,At).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+et);return this}intersectsObject(tt){if(tt.boundingSphere!==void 0){if(tt.boundingSphere===null)tt.computeBoundingSphere();fs.copy(tt.boundingSphere).applyMatrix4(tt.matrixWorld)}else{let et=tt.geometry;if(et.boundingSphere===null)et.computeBoundingSphere();fs.copy(et.boundingSphere).applyMatrix4(tt.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(tt){fs.center.set(0,0,0);let et=nd.distanceTo(tt.center);return fs.radius=0.7071067811865476+et,fs.applyMatrix4(tt.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(tt){let et=this.planes,nt=tt.center,it=-tt.radius;for(let st=0;st<6;st++)if(et[st].distanceToPoint(nt)<it)return!1;return!0}intersectsBox(tt){let et=this.planes;for(let nt=0;nt<6;nt++){let it=et[nt];if(Yr.x=it.normal.x>0?tt.max.x:tt.min.x,Yr.y=it.normal.y>0?tt.max.y:tt.min.y,Yr.z=it.normal.z>0?tt.max.z:tt.min.z,it.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(tt){let et=this.planes;for(let nt=0;nt<6;nt++)if(et[nt].distanceToPoint(tt)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var rc=new i;class ma{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(tt){let et=tt.cameras,nt=this._frustums;for(let it=0;it<et.length;it++){let st=et[it];if(rc.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),nt[it]===void 0)nt[it]=new gs;nt[it].setFromProjectionMatrix(rc,st.coordinateSystem,st.reversedDepth)}return this._count=et.length,this}getFrustum(tt){return this._frustums[tt]}intersectsObject(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsObject(tt))return!0;return!1}intersectsSprite(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsSprite(tt))return!0;return!1}intersectsSphere(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsSphere(tt))return!0;return!1}intersectsBox(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsBox(tt))return!0;return!1}containsPoint(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].containsPoint(tt))return!0;return!1}copy(tt){this.coordinateSystem=tt.coordinateSystem;let et=this._frustums,nt=tt._frustums;for(let it=0;it<tt._count;it++){if(et[it]===void 0)et[it]=new gs;et[it].copy(nt[it])}return this._count=tt._count,this}clone(){return new ma().copy(this)}}class Re extends E{constructor(tt){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.linewidth=tt.linewidth,this.linecap=tt.linecap,this.linejoin=tt.linejoin,this.fog=tt.fog,this}}var ta=new e,ea=new e,ac=new i,ar=new qs,Zr=new N,$a=new e,oc=new e;class ge extends l{constructor(tt=new f,et=new Re){super();this.isLine=!0,this.type="Line",this.geometry=tt,this.material=et,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(tt,et){if(super.copy(tt,et),tt.morphTargetInfluences!==void 0)this.morphTargetInfluences=tt.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(tt.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},tt.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(tt.material)?tt.material.slice():tt.material,this.geometry=tt.geometry,this}computeLineDistances(){let tt=this.geometry;if(tt.index===null){let et=tt.attributes.position,nt=[0];for(let it=1,st=et.count;it<st;it++)ta.fromBufferAttribute(et,it-1),ea.fromBufferAttribute(et,it),nt[it]=nt[it-1],nt[it]+=ta.distanceTo(ea);tt.setAttribute("lineDistance",new g(nt,1))}else _n("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(tt){return tt.intersectsObject(this)}raycast(tt,et){let nt=this.geometry,it=this.matrixWorld,st=tt.params.Line.threshold,rt=nt.drawRange;if(nt.boundingSphere===null)nt.computeBoundingSphere();if(Zr.copy(nt.boundingSphere),Zr.applyMatrix4(it),Zr.radius+=st,tt.ray.intersectsSphere(Zr)===!1)return;ac.copy(it).invert(),ar.copy(tt.ray).applyMatrix4(ac);let at=st/((this.scale.x+this.scale.y+this.scale.z)/3),ot=at*at,lt=this.isLineSegments?2:1,ct=nt.index,dt=nt.attributes.position;if(ct!==null){let ht=Math.max(0,rt.start),ft=Math.min(ct.count,rt.start+rt.count);for(let vt=ht,St=ft-1;vt<St;vt+=lt){let pt=ct.getX(vt),mt=ct.getX(vt+1),Tt=Jr(this,tt,ar,ot,pt,mt,vt);if(Tt)et.push(Tt)}if(this.isLineLoop){let vt=ct.getX(ft-1),St=ct.getX(ht),pt=Jr(this,tt,ar,ot,vt,St,ft-1);if(pt)et.push(pt)}}else{let ht=Math.max(0,rt.start),ft=Math.min(dt.count,rt.start+rt.count);for(let vt=ht,St=ft-1;vt<St;vt+=lt){let pt=Jr(this,tt,ar,ot,vt,vt+1,vt);if(pt)et.push(pt)}if(this.isLineLoop){let vt=Jr(this,tt,ar,ot,ft-1,ht,ft-1);if(vt)et.push(vt)}}}updateMorphTargets(){let et=this.geometry.morphAttributes,nt=Object.keys(et);if(nt.length>0){let it=et[nt[0]];if(it!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let st=0,rt=it.length;st<rt;st++){let at=it[st].name||String(st);this.morphTargetInfluences.push(0),this.morphTargetDictionary[at]=st}}}}}function Jr(tt,et,nt,it,st,rt,at){let ot=tt.geometry.attributes.position;if(ta.fromBufferAttribute(ot,st),ea.fromBufferAttribute(ot,rt),nt.distanceSqToSegment(ta,ea,$a,oc)>it)return;$a.applyMatrix4(tt.matrixWorld);let ct=et.ray.origin.distanceTo($a);if(ct<et.near||ct>et.far)return;return{distance:ct,point:oc.clone().applyMatrix4(tt.matrixWorld),index:at,face:null,faceIndex:null,barycoord:null,object:tt}}var lc=new e,cc=new e;class ze extends ge{constructor(tt,et){super(tt,et);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let tt=this.geometry;if(tt.index===null){let et=tt.attributes.position,nt=[];for(let it=0,st=et.count;it<st;it+=2)lc.fromBufferAttribute(et,it),cc.fromBufferAttribute(et,it+1),nt[it]=it===0?0:nt[it-1],nt[it+1]=nt[it]+lc.distanceTo(cc);tt.setAttribute("lineDistance",new g(nt,1))}else _n("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ke extends ge{constructor(tt,et){super(tt,et);this.isLineLoop=!0,this.type="LineLoop"}}class Ce extends E{constructor(tt){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.alphaMap=tt.alphaMap,this.size=tt.size,this.sizeAttenuation=tt.sizeAttenuation,this.fog=tt.fog,this}}var hc=new i,no=new qs,$r=new N,Kr=new e;class J extends l{constructor(tt=new f,et=new Ce){super();this.isPoints=!0,this.type="Points",this.geometry=tt,this.material=et,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(tt,et){if(super.copy(tt,et),tt.morphTargetInfluences!==void 0)this.morphTargetInfluences=tt.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(tt.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},tt.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(tt.material)?tt.material.slice():tt.material,this.geometry=tt.geometry,this}intersectsFrustum(tt){return tt.intersectsObject(this)}raycast(tt,et){let nt=this.geometry,it=this.matrixWorld,st=tt.params.Points.threshold,rt=nt.drawRange;if(nt.boundingSphere===null)nt.computeBoundingSphere();if($r.copy(nt.boundingSphere),$r.applyMatrix4(it),$r.radius+=st,tt.ray.intersectsSphere($r)===!1)return;hc.copy(it).invert(),no.copy(tt.ray).applyMatrix4(hc);let at=st/((this.scale.x+this.scale.y+this.scale.z)/3),ot=at*at,lt=nt.index,ut=nt.attributes.position;if(lt!==null){let dt=Math.max(0,rt.start),ht=Math.min(lt.count,rt.start+rt.count);for(let ft=dt,vt=ht;ft<vt;ft++){let St=lt.getX(ft);Kr.fromBufferAttribute(ut,St),uc(Kr,St,ot,it,tt,et,this)}}else{let dt=Math.max(0,rt.start),ht=Math.min(ut.count,rt.start+rt.count);for(let ft=dt,vt=ht;ft<vt;ft++)Kr.fromBufferAttribute(ut,ft),uc(Kr,ft,ot,it,tt,et,this)}}updateMorphTargets(){let et=this.geometry.morphAttributes,nt=Object.keys(et);if(nt.length>0){let it=et[nt[0]];if(it!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let st=0,rt=it.length;st<rt;st++){let at=it[st].name||String(st);this.morphTargetInfluences.push(0),this.morphTargetDictionary[at]=st}}}}}function uc(tt,et,nt,it,st,rt,at){let ot=no.distanceSqToPoint(tt);if(ot<nt){let lt=new e;no.closestPointToPoint(tt,lt),lt.applyMatrix4(it);let ct=st.ray.origin.distanceTo(lt);if(ct<st.near||ct>st.far)return;rt.push({distance:ct,distanceToRay:Math.sqrt(ot),point:lt,index:et,face:null,faceIndex:null,barycoord:null,object:at})}}class ga extends x{constructor(tt=[],et=301,nt,it,st,rt,at,ot,lt,ct){super(tt,et,nt,it,st,rt,at,ot,lt,ct);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(tt){this.image=tt}}class Q extends x{constructor(tt,et,nt,it,st,rt,at,ot,lt){super(tt,et,nt,it,st,rt,at,ot,lt);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ss extends x{constructor(tt,et,nt=1014,it,st,rt,at=1003,ot=1003,lt,ct=1026,ut=1){if(ct!==1026&&ct!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let dt={width:tt,height:et,depth:ut};super(dt,it,st,rt,at,ot,ct,nt,lt);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(tt){return super.copy(tt),this.source=new mr(Object.assign({},tt.image)),this.compareFunction=tt.compareFunction,this}toJSON(tt){let et=super.toJSON(tt);return et.compareFunction=this.compareFunction,et}}class _a extends ss{constructor(tt,et=1014,nt=301,it,st,rt=1003,at=1003,ot,lt=1026){let ct={width:tt,height:tt,depth:1},ut=[ct,ct,ct,ct,ct,ct];super(tt,tt,et,nt,it,st,rt,at,ot,lt);this.image=ut,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(tt){this.image=tt}}class xa extends x{constructor(tt=null){super();this.sourceTexture=tt,this.isExternalTexture=!0}copy(tt){return super.copy(tt),this.sourceTexture=tt.sourceTexture,this}}class j extends f{constructor(tt=1,et=1,nt=1,it=1,st=1,rt=1){super();this.type="BoxGeometry",this.parameters={width:tt,height:et,depth:nt,widthSegments:it,heightSegments:st,depthSegments:rt};let at=this;it=Math.floor(it),st=Math.floor(st),rt=Math.floor(rt);let ot=[],lt=[],ct=[],ut=[],dt=0,ht=0;ft("z","y","x",-1,-1,nt,et,tt,rt,st,0),ft("z","y","x",1,-1,nt,et,-tt,rt,st,1),ft("x","z","y",1,1,tt,nt,et,it,rt,2),ft("x","z","y",1,-1,tt,nt,-et,it,rt,3),ft("x","y","z",1,-1,tt,et,nt,it,st,4),ft("x","y","z",-1,-1,tt,et,-nt,it,st,5),this.setIndex(ot),this.setAttribute("position",new g(lt,3)),this.setAttribute("normal",new g(ct,3)),this.setAttribute("uv",new g(ut,2));function ft(vt,St,pt,mt,Tt,At,bt,Et,It,gt,yt){let Nt=At/It,kt=bt/gt,Lt=At/2,zt=bt/2,Kt=Et/2,Rt=It+1,qt=gt+1,Zt=0,Ot=0,Qe=new e;for(let Wt=0;Wt<qt;Wt++){let $t=Wt*kt-zt;for(let Je=0;Je<Rt;Je++){let mn=Je*Nt-Lt;Qe[vt]=mn*mt,Qe[St]=$t*Tt,Qe[pt]=Kt,lt.push(Qe.x,Qe.y,Qe.z),Qe[vt]=0,Qe[St]=0,Qe[pt]=Et>0?1:-1,ct.push(Qe.x,Qe.y,Qe.z),ut.push(Je/It),ut.push(1-Wt/gt),Zt+=1}}for(let Wt=0;Wt<gt;Wt++)for(let $t=0;$t<It;$t++){let Je=dt+$t+Rt*Wt,mn=dt+$t+Rt*(Wt+1),Yt=dt+($t+1)+Rt*(Wt+1),ae=dt+($t+1)+Rt*Wt;ot.push(Je,mn,ae),ot.push(mn,Yt,ae),Ot+=6}at.addGroup(ht,Ot,yt),ht+=Ot,dt+=Zt}}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new j(tt.width,tt.height,tt.depth,tt.widthSegments,tt.heightSegments,tt.depthSegments)}}class Ie extends f{constructor(tt=1,et=32,nt=0,it=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:tt,segments:et,thetaStart:nt,thetaLength:it},et=Math.max(3,et);let st=[],rt=[],at=[],ot=[],lt=new e,ct=new n;rt.push(0,0,0),at.push(0,0,1),ot.push(0.5,0.5);for(let ut=0,dt=3;ut<=et;ut++,dt+=3){let ht=nt+ut/et*it;lt.x=tt*Math.cos(ht),lt.y=tt*Math.sin(ht),rt.push(lt.x,lt.y,lt.z),at.push(0,0,1),ct.x=(rt[dt]/tt+1)/2,ct.y=(rt[dt+1]/tt+1)/2,ot.push(ct.x,ct.y)}for(let ut=1;ut<=et;ut++)st.push(ut,ut+1,0);this.setIndex(st),this.setAttribute("position",new g(rt,3)),this.setAttribute("normal",new g(at,3)),this.setAttribute("uv",new g(ot,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new Ie(tt.radius,tt.segments,tt.thetaStart,tt.thetaLength)}}class sl{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_n("Curve: .getPoint() not implemented.")}getPointAt(tt,et){let nt=this.getUtoTmapping(tt);return this.getPoint(nt,et)}getPoints(tt=5){let et=[];for(let nt=0;nt<=tt;nt++)et.push(this.getPoint(nt/tt));return et}getSpacedPoints(tt=5){let et=[];for(let nt=0;nt<=tt;nt++)et.push(this.getPointAt(nt/tt));return et}getLength(){let tt=this.getLengths();return tt[tt.length-1]}getLengths(tt=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===tt+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let et=[],nt,it=this.getPoint(0),st=0;et.push(0);for(let rt=1;rt<=tt;rt++)nt=this.getPoint(rt/tt),st+=nt.distanceTo(it),et.push(st),it=nt;return this.cacheArcLengths=et,et}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(tt,et=null){let nt=this.getLengths(),it=0,st=nt.length,rt;if(et)rt=et;else rt=tt*nt[st-1];let at=0,ot=st-1,lt;while(at<=ot)if(it=Math.floor(at+(ot-at)/2),lt=nt[it]-rt,lt<0)at=it+1;else if(lt>0)ot=it-1;else{ot=it;break}if(it=ot,nt[it]===rt)return it/(st-1);let ct=nt[it],dt=nt[it+1]-ct,ht=(rt-ct)/dt;return(it+ht)/(st-1)}getTangent(tt,et){let it=tt-0.0001,st=tt+0.0001;if(it<0)it=0;if(st>1)st=1;let rt=this.getPoint(it),at=this.getPoint(st),ot=et||(rt.isVector2?new n:new e);return ot.copy(at).sub(rt).normalize(),ot}getTangentAt(tt,et){let nt=this.getUtoTmapping(tt);return this.getTangent(nt,et)}computeFrenetFrames(tt,et=!1){let nt=new e,it=[],st=[],rt=[],at=new e,ot=new i;for(let ht=0;ht<=tt;ht++){let ft=ht/tt;it[ht]=this.getTangentAt(ft,new e)}st[0]=new e,rt[0]=new e;let lt=Number.MAX_VALUE,ct=Math.abs(it[0].x),ut=Math.abs(it[0].y),dt=Math.abs(it[0].z);if(ct<=lt)lt=ct,nt.set(1,0,0);if(ut<=lt)lt=ut,nt.set(0,1,0);if(dt<=lt)nt.set(0,0,1);at.crossVectors(it[0],nt).normalize(),st[0].crossVectors(it[0],at),rt[0].crossVectors(it[0],st[0]);for(let ht=1;ht<=tt;ht++){if(st[ht]=st[ht-1].clone(),rt[ht]=rt[ht-1].clone(),at.crossVectors(it[ht-1],it[ht]),at.length()>Number.EPSILON){at.normalize();let ft=Math.acos(In(it[ht-1].dot(it[ht]),-1,1));st[ht].applyMatrix4(ot.makeRotationAxis(at,ft))}rt[ht].crossVectors(it[ht],st[ht])}if(et===!0){let ht=Math.acos(In(st[0].dot(st[tt]),-1,1));if(ht/=tt,it[0].dot(at.crossVectors(st[0],st[tt]))>0)ht=-ht;for(let ft=1;ft<=tt;ft++)st[ft].applyMatrix4(ot.makeRotationAxis(it[ft],ht*ft)),rt[ft].crossVectors(it[ft],st[ft])}return{tangents:it,normals:st,binormals:rt}}clone(){return new this.constructor().copy(this)}copy(tt){return this.arcLengthDivisions=tt.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let tt={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return tt.arcLengthDivisions=this.arcLengthDivisions,tt.type=this.type,tt}fromJSON(tt){return this.arcLengthDivisions=tt.arcLengthDivisions,this.cacheArcLengths=null,this}}function rl(){let tt=0,et=0,nt=0,it=0;function st(rt,at,ot,lt){tt=rt,et=ot,nt=-3*rt+3*at-2*ot-lt,it=2*rt-2*at+ot+lt}return{initCatmullRom:function(rt,at,ot,lt,ct){st(at,ot,ct*(ot-rt),ct*(lt-at))},initNonuniformCatmullRom:function(rt,at,ot,lt,ct,ut,dt){let ht=(at-rt)/ct-(ot-rt)/(ct+ut)+(ot-at)/ut,ft=(ot-at)/ut-(lt-at)/(ut+dt)+(lt-ot)/dt;ht*=ut,ft*=ut,st(at,ot,ht,ft)},calc:function(rt){let at=rt*rt,ot=at*rt;return tt+et*rt+nt*at+it*ot}}}var dc=new e,fc=new e,Ka=new rl,Qa=new rl,ja=new rl;class Ge extends sl{constructor(tt=[],et=!1,nt="centripetal",it=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=tt,this.closed=et,this.curveType=nt,this.tension=it}getPoint(tt,et=new e){let nt=et,it=this.points,st=it.length,rt=(st-(this.closed?0:1))*tt,at=Math.floor(rt),ot=rt-at;if(this.closed)at+=at>0?0:(Math.floor(Math.abs(at)/st)+1)*st;else if(ot===0&&at===st-1)at=st-2,ot=1;let lt,ct;if(this.closed||at>0)lt=it[(at-1)%st];else fc.subVectors(it[0],it[1]).add(it[0]),lt=fc;let ut=it[at%st],dt=it[(at+1)%st];if(this.closed||at+2<st)ct=it[(at+2)%st];else dc.subVectors(it[st-1],it[st-2]).add(it[st-1]),ct=dc;if(this.curveType==="centripetal"||this.curveType==="chordal"){let ht=this.curveType==="chordal"?0.5:0.25,ft=Math.pow(lt.distanceToSquared(ut),ht),vt=Math.pow(ut.distanceToSquared(dt),ht),St=Math.pow(dt.distanceToSquared(ct),ht);if(vt<0.0001)vt=1;if(ft<0.0001)ft=vt;if(St<0.0001)St=vt;Ka.initNonuniformCatmullRom(lt.x,ut.x,dt.x,ct.x,ft,vt,St),Qa.initNonuniformCatmullRom(lt.y,ut.y,dt.y,ct.y,ft,vt,St),ja.initNonuniformCatmullRom(lt.z,ut.z,dt.z,ct.z,ft,vt,St)}else if(this.curveType==="catmullrom")Ka.initCatmullRom(lt.x,ut.x,dt.x,ct.x,this.tension),Qa.initCatmullRom(lt.y,ut.y,dt.y,ct.y,this.tension),ja.initCatmullRom(lt.z,ut.z,dt.z,ct.z,this.tension);return nt.set(Ka.calc(ot),Qa.calc(ot),ja.calc(ot)),nt}copy(tt){super.copy(tt),this.points=[];for(let et=0,nt=tt.points.length;et<nt;et++){let it=tt.points[et];this.points.push(it.clone())}return this.closed=tt.closed,this.curveType=tt.curveType,this.tension=tt.tension,this}toJSON(){let tt=super.toJSON();tt.points=[];for(let et=0,nt=this.points.length;et<nt;et++){let it=this.points[et];tt.points.push(it.toArray())}return tt.closed=this.closed,tt.curveType=this.curveType,tt.tension=this.tension,tt}fromJSON(tt){super.fromJSON(tt),this.points=[];for(let et=0,nt=tt.points.length;et<nt;et++){let it=tt.points[et];this.points.push(new e().fromArray(it))}return this.closed=tt.closed,this.curveType=tt.curveType,this.tension=tt.tension,this}}class Pe extends f{constructor(tt=[new n(0,-0.5),new n(0.5,0),new n(0,0.5)],et=12,nt=0,it=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:tt,segments:et,phiStart:nt,phiLength:it},et=Math.floor(et),it=In(it,0,Math.PI*2);let st=[],rt=[],at=[],ot=[],lt=[],ct=1/et,ut=new e,dt=new n,ht=new e,ft=new e,vt=new e,St=0,pt=0;for(let mt=0;mt<=tt.length-1;mt++)switch(mt){case 0:St=tt[mt+1].x-tt[mt].x,pt=tt[mt+1].y-tt[mt].y,ht.x=pt*1,ht.y=-St,ht.z=pt*0,vt.copy(ht),ht.normalize(),ot.push(ht.x,ht.y,ht.z);break;case tt.length-1:vt.normalize(),ot.push(vt.x,vt.y,vt.z);break;default:St=tt[mt+1].x-tt[mt].x,pt=tt[mt+1].y-tt[mt].y,ht.x=pt*1,ht.y=-St,ht.z=pt*0,ft.copy(ht),ht.x+=vt.x,ht.y+=vt.y,ht.z+=vt.z,ht.normalize(),ot.push(ht.x,ht.y,ht.z),vt.copy(ft)}for(let mt=0;mt<=et;mt++){let Tt=nt+mt*ct*it,At=Math.sin(Tt),bt=Math.cos(Tt);for(let Et=0;Et<=tt.length-1;Et++){ut.x=tt[Et].x*At,ut.y=tt[Et].y,ut.z=tt[Et].x*bt,rt.push(ut.x,ut.y,ut.z),dt.x=mt/et,dt.y=Et/(tt.length-1),at.push(dt.x,dt.y);let It=ot[3*Et+0]*At,gt=ot[3*Et+1],yt=ot[3*Et+0]*bt;lt.push(It,gt,yt)}}for(let mt=0;mt<et;mt++)for(let Tt=0;Tt<tt.length-1;Tt++){let At=Tt+mt*tt.length,bt=At,Et=At+tt.length,It=At+tt.length+1,gt=At+1;st.push(bt,Et,gt),st.push(It,gt,Et)}this.setIndex(st),this.setAttribute("position",new g(rt,3)),this.setAttribute("uv",new g(at,2)),this.setAttribute("normal",new g(lt,3))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new Pe(tt.points,tt.segments,tt.phiStart,tt.phiLength)}}class P extends f{constructor(tt=1,et=1,nt=1,it=1){super();this.type="PlaneGeometry",this.parameters={width:tt,height:et,widthSegments:nt,heightSegments:it};let st=tt/2,rt=et/2,at=Math.floor(nt),ot=Math.floor(it),lt=at+1,ct=ot+1,ut=tt/at,dt=et/ot,ht=[],ft=[],vt=[],St=[];for(let pt=0;pt<ct;pt++){let mt=pt*dt-rt;for(let Tt=0;Tt<lt;Tt++){let At=Tt*ut-st;ft.push(At,-mt,0),vt.push(0,0,1),St.push(Tt/at),St.push(1-pt/ot)}}for(let pt=0;pt<ot;pt++)for(let mt=0;mt<at;mt++){let Tt=mt+lt*pt,At=mt+lt*(pt+1),bt=mt+1+lt*(pt+1),Et=mt+1+lt*pt;ht.push(Tt,At,Et),ht.push(At,bt,Et)}this.setIndex(ht),this.setAttribute("position",new g(ft,3)),this.setAttribute("normal",new g(vt,3)),this.setAttribute("uv",new g(St,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new P(tt.width,tt.height,tt.widthSegments,tt.heightSegments)}}function ys(tt){let et={};for(let nt in tt){et[nt]={};for(let it in tt[nt]){let st=tt[nt][it];if(pc(st))if(st.isRenderTargetTexture)_n("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),et[nt][it]=null;else et[nt][it]=st.clone();else if(Array.isArray(st))if(pc(st[0])){let rt=[];for(let at=0,ot=st.length;at<ot;at++)rt[at]=st[at].clone();et[nt][it]=rt}else et[nt][it]=st.slice();else et[nt][it]=st}}return et}function hi(tt){let et={};for(let nt=0;nt<tt.length;nt++){let it=ys(tt[nt]);for(let st in it)et[st]=it[st]}return et}function pc(tt){return tt&&(tt.isColor||tt.isMatrix3||tt.isMatrix4||tt.isVector2||tt.isVector3||tt.isVector4||tt.isTexture||tt.isQuaternion)}function id(tt){let et=[];for(let nt=0;nt<tt.length;nt++)et.push(tt[nt].clone());return et}function al(tt){let et=tt.getRenderTarget();if(et===null)return tt.outputColorSpace;if(et.isXRRenderTarget===!0)return et.texture.colorSpace;return s.workingColorSpace}var H={clone:ys,merge:hi},sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class p extends E{constructor(tt){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,tt!==void 0)this.setValues(tt)}copy(tt){return super.copy(tt),this.fragmentShader=tt.fragmentShader,this.vertexShader=tt.vertexShader,this.uniforms=ys(tt.uniforms),this.uniformsGroups=id(tt.uniformsGroups),this.defines=Object.assign({},tt.defines),this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.fog=tt.fog,this.lights=tt.lights,this.clipping=tt.clipping,this.extensions=Object.assign({},tt.extensions),this.glslVersion=tt.glslVersion,this.defaultAttributeValues=Object.assign({},tt.defaultAttributeValues),this.index0AttributeName=tt.index0AttributeName,this.uniformsNeedUpdate=tt.uniformsNeedUpdate,this}toJSON(tt){let et=super.toJSON(tt);et.glslVersion=this.glslVersion,et.uniforms={};for(let it in this.uniforms){let rt=this.uniforms[it].value;if(rt&&rt.isTexture)et.uniforms[it]={type:"t",value:rt.toJSON(tt).uuid};else if(rt&&rt.isColor)et.uniforms[it]={type:"c",value:rt.getHex()};else if(rt&&rt.isVector2)et.uniforms[it]={type:"v2",value:rt.toArray()};else if(rt&&rt.isVector3)et.uniforms[it]={type:"v3",value:rt.toArray()};else if(rt&&rt.isVector4)et.uniforms[it]={type:"v4",value:rt.toArray()};else if(rt&&rt.isMatrix3)et.uniforms[it]={type:"m3",value:rt.toArray()};else if(rt&&rt.isMatrix4)et.uniforms[it]={type:"m4",value:rt.toArray()};else et.uniforms[it]={value:rt}}if(Object.keys(this.defines).length>0)et.defines=this.defines;et.vertexShader=this.vertexShader,et.fragmentShader=this.fragmentShader,et.lights=this.lights,et.clipping=this.clipping;let nt={};for(let it in this.extensions)if(this.extensions[it]===!0)nt[it]=!0;if(Object.keys(nt).length>0)et.extensions=nt;return et}fromJSON(tt,et){if(super.fromJSON(tt,et),tt.uniforms!==void 0)for(let nt in tt.uniforms){let it=tt.uniforms[nt];switch(this.uniforms[nt]={},it.type){case"t":this.uniforms[nt].value=et[it.value]||null;break;case"c":this.uniforms[nt].value=new t().setHex(it.value);break;case"v2":this.uniforms[nt].value=new n().fromArray(it.value);break;case"v3":this.uniforms[nt].value=new e().fromArray(it.value);break;case"v4":this.uniforms[nt].value=new a().fromArray(it.value);break;case"m3":this.uniforms[nt].value=new En().fromArray(it.value);break;case"m4":this.uniforms[nt].value=new i().fromArray(it.value);break;default:this.uniforms[nt].value=it.value}}if(tt.defines!==void 0)this.defines=tt.defines;if(tt.vertexShader!==void 0)this.vertexShader=tt.vertexShader;if(tt.fragmentShader!==void 0)this.fragmentShader=tt.fragmentShader;if(tt.glslVersion!==void 0)this.glslVersion=tt.glslVersion;if(tt.extensions!==void 0)for(let nt in tt.extensions)this.extensions[nt]=tt.extensions[nt];if(tt.lights!==void 0)this.lights=tt.lights;if(tt.clipping!==void 0)this.clipping=tt.clipping;return this}}class Le extends p{constructor(tt){super(tt);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class d extends E{constructor(tt){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.defines={STANDARD:""},this.color.copy(tt.color),this.roughness=tt.roughness,this.metalness=tt.metalness,this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.emissive.copy(tt.emissive),this.emissiveMap=tt.emissiveMap,this.emissiveIntensity=tt.emissiveIntensity,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.roughnessMap=tt.roughnessMap,this.metalnessMap=tt.metalnessMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.envMapIntensity=tt.envMapIntensity,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}class b extends d{constructor(tt){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new n(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return In(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(et){this.ior=(1+0.4*et)/(1-0.4*et)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(tt)}get anisotropy(){return this._anisotropy}set anisotropy(tt){if(this._anisotropy>0!==tt>0)this.version++;this._anisotropy=tt}get clearcoat(){return this._clearcoat}set clearcoat(tt){if(this._clearcoat>0!==tt>0)this.version++;this._clearcoat=tt}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(tt){if(this._diffuseRoughness>0!==tt>0)this.version++;this._diffuseRoughness=tt}get iridescence(){return this._iridescence}set iridescence(tt){if(this._iridescence>0!==tt>0)this.version++;this._iridescence=tt}get dispersion(){return this._dispersion}set dispersion(tt){if(this._dispersion>0!==tt>0)this.version++;this._dispersion=tt}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(tt){if(this._retroreflectivity>0!==tt>0)this.version++;this._retroreflectivity=tt}get sheen(){return this._sheen}set sheen(tt){if(this._sheen>0!==tt>0)this.version++;this._sheen=tt}get transmission(){return this._transmission}set transmission(tt){if(this._transmission>0!==tt>0)this.version++;this._transmission=tt}get iridescenceThicknessRange(){return ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(tt){ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=tt[0],this.iridescenceThicknessMaximum=tt[1]}copy(tt){return super.copy(tt),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=tt.anisotropy,this.anisotropyRotation=tt.anisotropyRotation,this.anisotropyMap=tt.anisotropyMap,this.clearcoat=tt.clearcoat,this.clearcoatMap=tt.clearcoatMap,this.clearcoatRoughness=tt.clearcoatRoughness,this.clearcoatRoughnessMap=tt.clearcoatRoughnessMap,this.clearcoatNormalMap=tt.clearcoatNormalMap,this.clearcoatNormalScale.copy(tt.clearcoatNormalScale),this.diffuseRoughness=tt.diffuseRoughness,this.diffuseRoughnessMap=tt.diffuseRoughnessMap,this.dispersion=tt.dispersion,this.ior=tt.ior,this.iridescence=tt.iridescence,this.iridescenceMap=tt.iridescenceMap,this.iridescenceIOR=tt.iridescenceIOR,this.iridescenceThicknessMinimum=tt.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=tt.iridescenceThicknessMaximum,this.iridescenceThicknessMap=tt.iridescenceThicknessMap,this.retroreflectivity=tt.retroreflectivity,this.sheen=tt.sheen,this.sheenColor.copy(tt.sheenColor),this.sheenColorMap=tt.sheenColorMap,this.sheenRoughness=tt.sheenRoughness,this.sheenRoughnessMap=tt.sheenRoughnessMap,this.transmission=tt.transmission,this.transmissionMap=tt.transmissionMap,this.thickness=tt.thickness,this.thicknessMap=tt.thicknessMap,this.attenuationDistance=tt.attenuationDistance,this.attenuationColor.copy(tt.attenuationColor),this.specularIntensity=tt.specularIntensity,this.specularIntensityMap=tt.specularIntensityMap,this.specularColor.copy(tt.specularColor),this.specularColorMap=tt.specularColorMap,this}}class ee extends E{constructor(tt){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.emissive.copy(tt.emissive),this.emissiveMap=tt.emissiveMap,this.emissiveIntensity=tt.emissiveIntensity,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.specularMap=tt.specularMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.combine=tt.combine,this.reflectivity=tt.reflectivity,this.envMapIntensity=tt.envMapIntensity,this.refractionRatio=tt.refractionRatio,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}class ol extends E{constructor(tt){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(tt)}copy(tt){return super.copy(tt),this.depthPacking=tt.depthPacking,this.map=tt.map,this.alphaMap=tt.alphaMap,this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this}}class ll extends E{constructor(tt){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(tt)}copy(tt){return super.copy(tt),this.map=tt.map,this.alphaMap=tt.alphaMap,this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this}}class U extends E{constructor(tt){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new t(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.defines={MATCAP:""},this.color.copy(tt.color),this.matcap=tt.matcap,this.map=tt.map,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.alphaMap=tt.alphaMap,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}function es(tt,et){if(!tt||tt.constructor===et)return tt;if(typeof et.BYTES_PER_ELEMENT==="number")return new et(tt);return Array.prototype.slice.call(tt)}function or(tt){return tt!==void 0&&tt.inTangents!==void 0&&tt.outTangents!==void 0}function ad(tt){function et(st,rt){return tt[st]-tt[rt]}let nt=tt.length,it=Array(nt);for(let st=0;st!==nt;++st)it[st]=st;return it.sort(et),it}function mc(tt,et,nt){let it=tt.length,st=new tt.constructor(it);for(let rt=0,at=0;at!==it;++rt){let ot=nt[rt]*et;for(let lt=0;lt!==et;++lt)st[at++]=tt[ot+lt]}return st}function od(tt,et,nt,it){let st=1,rt=tt[0];while(rt!==void 0&&rt[it]===void 0)rt=tt[st++];if(rt===void 0)return;let at=rt[it];if(at===void 0)return;if(Array.isArray(at))do{if(at=rt[it],at!==void 0)et.push(rt.time),nt.push(...at);rt=tt[st++]}while(rt!==void 0);else if(at.toArray!==void 0)do{if(at=rt[it],at!==void 0)et.push(rt.time),at.toArray(nt,nt.length);rt=tt[st++]}while(rt!==void 0);else do{if(at=rt[it],at!==void 0)et.push(rt.time),nt.push(at);rt=tt[st++]}while(rt!==void 0)}class W{constructor(tt,et,nt,it){this.parameterPositions=tt,this._cachedIndex=0,this.resultBuffer=it!==void 0?it:new et.constructor(nt),this.sampleValues=et,this.valueSize=nt,this.settings=null,this.DefaultSettings_={}}evaluate(tt){let et=this.parameterPositions,nt=this._cachedIndex,it=et[nt],st=et[nt-1];n:{t:{let rt;e:{i:if(!(tt<it)){for(let at=nt+2;;){if(it===void 0){if(tt<st)break i;return nt=et.length,this._cachedIndex=nt,this.copySampleValue_(nt-1)}if(nt===at)break;if(st=it,it=et[++nt],tt<it)break t}rt=et.length;break e}if(!(tt>=st)){let at=et[1];if(tt<at)nt=2,st=at;for(let ot=nt-2;;){if(st===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(nt===ot)break;if(it=st,st=et[--nt-1],tt>=st)break t}rt=nt,nt=0;break e}break n}while(nt<rt){let at=nt+rt>>>1;if(tt<et[at])rt=at;else nt=at+1}if(it=et[nt],st=et[nt-1],st===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(it===void 0)return nt=et.length,this._cachedIndex=nt,this.copySampleValue_(nt-1)}this._cachedIndex=nt,this.intervalChanged_(nt,st,it)}return this.interpolate_(nt,st,tt,it)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(tt){let et=this.resultBuffer,nt=this.sampleValues,it=this.valueSize,st=tt*it;for(let rt=0;rt!==it;++rt)et[rt]=nt[st+rt];return et}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class cl extends W{constructor(tt,et,nt,it){super(tt,et,nt,it);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(tt,et,nt){let it=this.parameterPositions,st=tt-2,rt=tt+1,at=it[st],ot=it[rt];if(at===void 0)switch(this.getSettings_().endingStart){case 2401:st=tt,at=2*et-nt;break;case 2402:st=it.length-2,at=et+it[st]-it[st+1];break;default:st=tt,at=nt}if(ot===void 0)switch(this.getSettings_().endingEnd){case 2401:rt=tt,ot=2*nt-et;break;case 2402:rt=1,ot=nt+it[1]-it[0];break;default:rt=tt-1,ot=et}let lt=(nt-et)*0.5,ct=this.valueSize;this._weightPrev=lt/(et-at),this._weightNext=lt/(ot-nt),this._offsetPrev=st*ct,this._offsetNext=rt*ct}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=this._offsetPrev,ut=this._offsetNext,dt=this._weightPrev,ht=this._weightNext,ft=(nt-et)/(it-et),vt=ft*ft,St=vt*ft,pt=-dt*St+2*dt*vt-dt*ft,mt=(1+dt)*St+(-1.5-2*dt)*vt+(-0.5+dt)*ft+1,Tt=(-1-ht)*St+(1.5+ht)*vt+0.5*ft,At=ht*St-ht*vt;for(let bt=0;bt!==at;++bt)st[bt]=pt*rt[ct+bt]+mt*rt[lt+bt]+Tt*rt[ot+bt]+At*rt[ut+bt];return st}}class hl extends W{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=(nt-et)/(it-et),ut=1-ct;for(let dt=0;dt!==at;++dt)st[dt]=rt[lt+dt]*ut+rt[ot+dt]*ct;return st}}class ul extends W{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt){return this.copySampleValue_(tt-1)}}class dl extends W{interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=this.inTangents,ut=this.outTangents;if(!ct||!ut){let ft=(nt-et)/(it-et),vt=1-ft;for(let St=0;St!==at;++St)st[St]=rt[lt+St]*vt+rt[ot+St]*ft;return st}let dt=at*2,ht=tt-1;for(let ft=0;ft!==at;++ft){let vt=rt[lt+ft],St=rt[ot+ft],pt=ht*dt+ft*2,mt=ut[pt],Tt=ut[pt+1],At=tt*dt+ft*2,bt=ct[At],Et=ct[At+1],It=cd(nt,et,mt,bt,it);st[ft]=Sh(It,vt,Tt,Et,St)}return st}}function Sh(tt,et,nt,it,st){let rt=1-tt;return rt*rt*rt*et+3*rt*rt*tt*nt+3*rt*tt*tt*it+tt*tt*tt*st}function ld(tt,et,nt,it,st){let rt=1-tt;return 3*rt*rt*(nt-et)+6*rt*tt*(it-nt)+3*tt*tt*(st-it)}function cd(tt,et,nt,it,st){let rt=(tt-et)/(st-et);for(let at=0;at<8;at++){let ot=Sh(rt,et,nt,it,st)-tt;if(Math.abs(ot)<0.0000000001)break;let lt=ld(rt,et,nt,it,st);if(Math.abs(lt)<0.0000000001)break;rt=Math.max(0,Math.min(1,rt-ot/lt))}return rt}class yi{constructor(tt,et,nt,it){if(tt===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(et===void 0||et.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+tt);this.name=tt,this.times=es(et,this.TimeBufferType),this.values=es(nt,this.ValueBufferType),this.setInterpolation(it||this.DefaultInterpolation)}static toJSON(tt){let et=tt.constructor,nt;if(et.toJSON!==this.toJSON)nt=et.toJSON(tt);else{nt={name:tt.name,times:es(tt.times,Array),values:es(tt.values,Array)};let it=tt.getInterpolation();if(it!==tt.DefaultInterpolation)nt.interpolation=it;if(or(tt.settings))nt.settings={inTangents:es(tt.settings.inTangents,Array),outTangents:es(tt.settings.outTangents,Array)}}return nt.type=tt.ValueTypeName,nt}InterpolantFactoryMethodDiscrete(tt){return new ul(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodLinear(tt){return new hl(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodSmooth(tt){return new cl(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodBezier(tt){let et=new dl(this.times,this.values,this.getValueSize(),tt);if(this.settings)et.inTangents=this.settings.inTangents,et.outTangents=this.settings.outTangents;return et}setInterpolation(tt){let et;switch(tt){case 2300:et=this.InterpolantFactoryMethodDiscrete;break;case 2301:et=this.InterpolantFactoryMethodLinear;break;case 2302:et=this.InterpolantFactoryMethodSmooth;break;case 2303:et=this.InterpolantFactoryMethodBezier;break}if(et===void 0){let nt="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(tt!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(nt);return _n("KeyframeTrack:",nt),this}return this.createInterpolant=et,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(tt){if(tt!==0){let et=this.times;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]+=tt;if(or(this.settings))gc(this.settings.inTangents,tt),gc(this.settings.outTangents,tt)}return this}scale(tt){if(tt!==1){let et=this.times;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]*=tt;if(or(this.settings))_c(this.settings.inTangents,tt),_c(this.settings.outTangents,tt)}return this}trim(tt,et){let nt=this.times,it=nt.length,st=0,rt=it-1;while(st!==it&&nt[st]<tt)++st;while(rt!==-1&&nt[rt]>et)--rt;if(++rt,st!==0||rt!==it){if(st>=rt)rt=Math.max(rt,1),st=rt-1;let at=this.getValueSize();this.times=nt.slice(st,rt),this.values=this.values.slice(st*at,rt*at)}return this}validate(){let tt=!0,et=this.getValueSize();if(et-Math.floor(et)!==0)Tn("KeyframeTrack: Invalid value size in track.",this),tt=!1;let nt=this.times,it=this.values,st=nt.length;if(st===0)Tn("KeyframeTrack: Track is empty.",this),tt=!1;let rt=null;for(let at=0;at!==st;at++){let ot=nt[at];if(typeof ot==="number"&&isNaN(ot)){Tn("KeyframeTrack: Time is not a valid number.",this,at,ot),tt=!1;break}if(rt!==null&&rt>ot){Tn("KeyframeTrack: Out of order keys.",this,at,ot,rt),tt=!1;break}rt=ot}if(it!==void 0){if(yu(it))for(let at=0,ot=it.length;at!==ot;++at){let lt=it[at];if(isNaN(lt)){Tn("KeyframeTrack: Value is not a valid number.",this,at,lt),tt=!1;break}}}return tt}optimize(){let tt=this.times.slice(),et=this.values.slice(),nt=this.getValueSize(),it=this.getInterpolation()===2302,st=tt.length-1,rt=1;for(let at=1;at<st;++at){let ot=!1,lt=tt[at],ct=tt[at+1];if(lt!==ct&&(at!==1||lt!==tt[0]))if(!it){let ut=at*nt,dt=ut-nt,ht=ut+nt;for(let ft=0;ft!==nt;++ft){let vt=et[ut+ft];if(vt!==et[dt+ft]||vt!==et[ht+ft]){ot=!0;break}}}else ot=!0;if(ot){if(at!==rt){tt[rt]=tt[at];let ut=at*nt,dt=rt*nt;for(let ht=0;ht!==nt;++ht)et[dt+ht]=et[ut+ht]}++rt}}if(st>0){tt[rt]=tt[st];for(let at=st*nt,ot=rt*nt,lt=0;lt!==nt;++lt)et[ot+lt]=et[at+lt];++rt}if(rt!==tt.length)this.times=tt.slice(0,rt),this.values=et.slice(0,rt*nt);else this.times=tt,this.values=et;return this}clone(){let tt=this.times.slice(),et=this.values.slice(),it=new this.constructor(this.name,tt,et);if(it.createInterpolant=this.createInterpolant,or(this.settings))it.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return it}}function gc(tt,et){for(let nt=0,it=tt.length;nt!==it;nt+=2)tt[nt]+=et}function _c(tt,et){for(let nt=0,it=tt.length;nt!==it;nt+=2)tt[nt]*=et}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=2301;class rs extends yi{constructor(tt,et,nt){super(tt,et,nt)}}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=2300;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class va extends yi{constructor(tt,et,nt,it){super(tt,et,nt,it)}}va.prototype.ValueTypeName="color";class te extends yi{constructor(tt,et,nt,it){super(tt,et,nt,it)}}te.prototype.ValueTypeName="number";class fl extends W{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=(nt-et)/(it-et),lt=tt*at;for(let ct=lt+at;lt!==ct;lt+=4)R.slerpFlat(st,0,rt,lt-at,rt,lt,ot);return st}}class ne extends yi{constructor(tt,et,nt,it){super(tt,et,nt,it)}InterpolantFactoryMethodLinear(tt){return new fl(this.times,this.values,this.getValueSize(),tt)}}ne.prototype.ValueTypeName="quaternion";ne.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends yi{constructor(tt,et,nt){super(tt,et,nt)}}as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=2300;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class ce extends yi{constructor(tt,et,nt,it){super(tt,et,nt,it)}}ce.prototype.ValueTypeName="vector";class He{constructor(tt="",et=-1,nt=[],it=2500){if(this.name=tt,this.tracks=nt,this.duration=et,this.blendMode=it,this.uuid=Di(),this.userData={},this.duration<0)this.resetDuration()}static parse(tt){let et=[],nt=tt.tracks,it=1/(tt.fps||1);for(let rt=0,at=nt.length;rt!==at;++rt)et.push(ud(nt[rt]).scale(it));let st=new this(tt.name,tt.duration,et,tt.blendMode);return st.uuid=tt.uuid,st.userData=JSON.parse(tt.userData||"{}"),st}static toJSON(tt){let et=[],nt=tt.tracks,it={name:tt.name,duration:tt.duration,tracks:et,uuid:tt.uuid,blendMode:tt.blendMode,userData:JSON.stringify(tt.userData)};for(let st=0,rt=nt.length;st!==rt;++st)et.push(yi.toJSON(nt[st]));return it}static CreateFromMorphTargetSequence(tt,et,nt,it){let st=et.length,rt=[];for(let at=0;at<st;at++){let ot=[],lt=[];ot.push((at+st-1)%st,at,(at+1)%st),lt.push(0,1,0);let ct=ad(ot);if(ot=mc(ot,1,ct),lt=mc(lt,1,ct),!it&&ot[0]===0)ot.push(st),lt.push(lt[0]);rt.push(new te(".morphTargetInfluences["+et[at].name+"]",ot,lt).scale(1/nt))}return new this(tt,-1,rt)}static findByName(tt,et){let nt=tt;if(!Array.isArray(tt)){let it=tt;nt=it.geometry&&it.geometry.animations||it.animations}for(let it=0;it<nt.length;it++)if(nt[it].name===et)return nt[it];return null}static CreateClipsFromMorphTargetSequences(tt,et,nt){let it={},st=/^([\w-]*?)([\d]+)$/;for(let at=0,ot=tt.length;at<ot;at++){let lt=tt[at],ct=lt.name.match(st);if(ct&&ct.length>1){let ut=ct[1],dt=it[ut];if(!dt)it[ut]=dt=[];dt.push(lt)}}let rt=[];for(let at in it)rt.push(this.CreateFromMorphTargetSequence(at,it[at],et,nt));return rt}resetDuration(){let tt=this.tracks,et=0;for(let nt=0,it=tt.length;nt!==it;++nt){let st=this.tracks[nt];et=Math.max(et,st.times[st.times.length-1])}return this.duration=et,this}trim(){for(let tt=0;tt<this.tracks.length;tt++)this.tracks[tt].trim(0,this.duration);return this}validate(){let tt=!0;for(let et=0;et<this.tracks.length;et++)tt=tt&&this.tracks[et].validate();return tt}optimize(){for(let tt=0;tt<this.tracks.length;tt++)this.tracks[tt].optimize();return this}clone(){let tt=[];for(let nt=0;nt<this.tracks.length;nt++)tt.push(this.tracks[nt].clone());let et=new this.constructor(this.name,this.duration,tt,this.blendMode);return et.userData=JSON.parse(JSON.stringify(this.userData)),et}toJSON(){return this.constructor.toJSON(this)}}function hd(tt){switch(tt.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return te;case"vector":case"vector2":case"vector3":case"vector4":return ce;case"color":return va;case"quaternion":return ne;case"bool":case"boolean":return rs;case"string":return as}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+tt)}function ud(tt){if(tt.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let et=hd(tt.type);if(tt.times===void 0){let it=[],st=[];od(tt.keys,it,st,"value"),tt.times=it,tt.values=st}let nt;if(et.parse!==void 0)nt=et.parse(tt);else nt=new et(tt.name,tt.times,tt.values,tt.interpolation);if(or(tt.settings))nt.settings={inTangents:es(tt.settings.inTangents,Float32Array),outTangents:es(tt.settings.outTangents,Float32Array)};return nt}var Pi={enabled:!1,files:{},add:function(tt,et){if(this.enabled===!1)return;if(xc(tt))return;this.files[tt]=et},get:function(tt){if(this.enabled===!1)return;if(xc(tt))return;return this.files[tt]},remove:function(tt){delete this.files[tt]},clear:function(){this.files={}}};function xc(tt){try{let et=tt.slice(tt.indexOf(":")+1);return new URL(et).protocol==="blob:"}catch(et){return!1}}class pl{constructor(tt,et,nt){let it=this,st=!1,rt=0,at=0,ot=void 0,lt=[];this.onStart=void 0,this.onLoad=tt,this.onProgress=et,this.onError=nt,this._abortController=null,this.itemStart=function(ct){if(at++,st===!1){if(it.onStart!==void 0)it.onStart(ct,rt,at)}st=!0},this.itemEnd=function(ct){if(rt++,it.onProgress!==void 0)it.onProgress(ct,rt,at);if(rt===at){if(st=!1,it.onLoad!==void 0)it.onLoad()}},this.itemError=function(ct){if(it.onError!==void 0)it.onError(ct)},this.resolveURL=function(ct){if(ct=ct.normalize("NFC"),ot)return ot(ct);return ct},this.setURLModifier=function(ct){return ot=ct,this},this.addHandler=function(ct,ut){return lt.push(ct,ut),this},this.removeHandler=function(ct){let ut=lt.indexOf(ct);if(ut!==-1)lt.splice(ut,2);return this},this.getHandler=function(ct){for(let ut=0,dt=lt.length;ut<dt;ut+=2){let ht=lt[ut],ft=lt[ut+1];if(ht.global)ht.lastIndex=0;if(ht.test(ct))return ft}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Mh=new pl;class V{constructor(tt){if(this.manager=tt!==void 0?tt:Mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(tt,et){let nt=this;return new Promise(function(it,st){nt.load(tt,it,et,st)})}parse(){}setCrossOrigin(tt){return this.crossOrigin=tt,this}setWithCredentials(tt){return this.withCredentials=tt,this}setPath(tt){return this.path=tt,this}setResourcePath(tt){return this.resourcePath=tt,this}setRequestHeader(tt){return this.requestHeader=tt,this}setPriority(tt){return this.priority=tt,this}setCache(tt){return this.cache=tt,this}abort(){return this}}V.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi={};class bh extends Error{constructor(tt,et){super(tt);this.response=et}}class Ne extends V{constructor(tt){super(tt);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(tt,et,nt,it){if(tt===void 0)tt="";if(this.path!==void 0)tt=this.path+tt;tt=this.manager.resolveURL(tt);let st=Pi.get(`file:${tt}`);if(st!==void 0){this.manager.itemStart(tt),setTimeout(()=>{if(et)et(st);this.manager.itemEnd(tt)},0);return}if(Vi[tt]!==void 0){Vi[tt].push({onLoad:et,onProgress:nt,onError:it});return}Vi[tt]=[],Vi[tt].push({onLoad:et,onProgress:nt,onError:it});let rt=new Request(tt,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),at=this.mimeType,ot=this.responseType;fetch(rt).then((lt)=>{if(lt.status===200||lt.status===0){if(lt.status===0)_n("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||lt.body===void 0||lt.body.getReader===void 0)return lt;let ct=Vi[tt],ut=lt.body.getReader(),dt=lt.headers.get("X-File-Size")||lt.headers.get("Content-Length"),ht=dt?parseInt(dt):0,ft=ht!==0,vt=0,St=new ReadableStream({start(pt){mt();function mt(){ut.read().then(({done:Tt,value:At})=>{if(Tt)pt.close();else{vt+=At.byteLength;let bt=new ProgressEvent("progress",{lengthComputable:ft,loaded:vt,total:ht});for(let Et=0,It=ct.length;Et<It;Et++){let gt=ct[Et];if(gt.onProgress)gt.onProgress(bt)}pt.enqueue(At),mt()}},(Tt)=>{pt.error(Tt)})}}});return new Response(St)}else throw new bh(`fetch for "${lt.url}" responded with ${lt.status}: ${lt.statusText}`,lt)}).then((lt)=>{switch(ot){case"arraybuffer":return lt.arrayBuffer();case"blob":return lt.blob();case"document":return lt.text().then((ct)=>new DOMParser().parseFromString(ct,at));case"json":return lt.json();default:if(at==="")return lt.text();else{let ut=/charset="?([^;"\s]*)"?/i.exec(at),dt=ut&&ut[1]?ut[1].toLowerCase():void 0,ht=new TextDecoder(dt);return lt.arrayBuffer().then((ft)=>ht.decode(ft))}}}).then((lt)=>{Pi.add(`file:${tt}`,lt);let ct=Vi[tt];delete Vi[tt];for(let ut=0,dt=ct.length;ut<dt;ut++){let ht=ct[ut];if(ht.onLoad)ht.onLoad(lt)}}).catch((lt)=>{let ct=Vi[tt];if(ct===void 0)throw this.manager.itemError(tt),lt;delete Vi[tt];for(let ut=0,dt=ct.length;ut<dt;ut++){let ht=ct[ut];if(ht.onError)ht.onError(lt)}this.manager.itemError(tt)}).finally(()=>{this.manager.itemEnd(tt)}),this.manager.itemStart(tt)}setResponseType(tt){return this.responseType=tt,this}setMimeType(tt){return this.mimeType=tt,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Fs=new WeakMap;class ml extends V{constructor(tt){super(tt)}load(tt,et,nt,it){if(this.path!==void 0)tt=this.path+tt;tt=this.manager.resolveURL(tt);let st=this,rt=Pi.get(`image:${tt}`);if(rt!==void 0){if(rt.complete===!0)st.manager.itemStart(tt),setTimeout(function(){if(et)et(rt);st.manager.itemEnd(tt)},0);else{let ut=Fs.get(rt);if(ut===void 0)ut=[],Fs.set(rt,ut);ut.push({onLoad:et,onError:it})}return rt}let at=Gs("img");function ot(){if(ct(),et)et(this);let ut=Fs.get(this)||[];for(let dt=0;dt<ut.length;dt++){let ht=ut[dt];if(ht.onLoad)ht.onLoad(this)}Fs.delete(this),st.manager.itemEnd(tt)}function lt(ut){if(ct(),it)it(ut);Pi.remove(`image:${tt}`);let dt=Fs.get(this)||[];for(let ht=0;ht<dt.length;ht++){let ft=dt[ht];if(ft.onError)ft.onError(ut)}Fs.delete(this),st.manager.itemError(tt),st.manager.itemEnd(tt)}function ct(){at.removeEventListener("load",ot,!1),at.removeEventListener("error",lt,!1)}if(at.addEventListener("load",ot,!1),at.addEventListener("error",lt,!1),tt.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)at.crossOrigin=this.crossOrigin}return Pi.add(`image:${tt}`,at),st.manager.itemStart(tt),at.fetchPriority=this.priority,at.src=tt,at}}class z extends V{constructor(tt){super(tt)}load(tt,et,nt,it){let st=new x,rt=new ml(this.manager);return rt.setPriority(this.priority),rt.setCache(this.cache),rt.setCrossOrigin(this.crossOrigin),rt.setPath(this.path),rt.load(tt,function(at){if(st.image=at,st.needsUpdate=!0,et!==void 0)et(st)},nt,it),st}}class Ys extends l{static registerNode(tt){this.prototype._lightNode=tt}constructor(tt,et=1){super();this.isLight=!0,this.type="Light",this.color=new t(tt),this.intensity=et}copy(tt,et){return super.copy(tt,et),this.color.copy(tt.color),this.intensity=tt.intensity,this}toJSON(tt){let et=super.toJSON(tt);return et.object.color=this.color.getHex(),et.object.intensity=this.intensity,et}}class We extends Ys{constructor(tt,et,nt){super(tt,nt);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(l.DEFAULT_UP),this.updateMatrix(),this.groundColor=new t(et)}copy(tt,et){return super.copy(tt,et),this.groundColor.copy(tt.groundColor),this}toJSON(tt){let et=super.toJSON(tt);return et.object.groundColor=this.groundColor.getHex(),et}}var to=new i,vc=new e,yc=new e;class xr{constructor(tt){this.camera=tt,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new n(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new i,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new n(1,1),this._viewportCount=1,this._viewports=[new a(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(tt){let et=this.camera;vc.setFromMatrixPosition(tt.matrixWorld),et.position.copy(vc),yc.setFromMatrixPosition(tt.target.matrixWorld),et.lookAt(yc),et.updateMatrixWorld(),this._updateMatrix(et,this.matrix,this._frustum)}_updateMatrix(tt,et,nt,it){to.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),nt.setFromProjectionMatrix(to,tt.coordinateSystem,tt.reversedDepth);let st=this._frameExtents,rt=it?it.z/st.x:1,at=it?it.w/st.y:1,ot=it?it.x/st.x:0,lt=it?it.y/st.y:0;if(tt.coordinateSystem===2001||tt.reversedDepth)et.set(0.5*rt,0,0,0.5*rt+ot,0,0.5*at,0,0.5*at+lt,0,0,1,0,0,0,0,1);else et.set(0.5*rt,0,0,0.5*rt+ot,0,0.5*at,0,0.5*at+lt,0,0,0.5,0.5,0,0,0,1);et.multiply(to)}getViewport(tt){return this._viewports[tt]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(tt){return this.camera=tt.camera.clone(),this.intensity=tt.intensity,this.bias=tt.bias,this.radius=tt.radius,this.autoUpdate=tt.autoUpdate,this.needsUpdate=tt.needsUpdate,this.normalBias=tt.normalBias,this.blurSamples=tt.blurSamples,this.mapSize.copy(tt.mapSize),this.mapType=tt.mapType,this.biasNode=tt.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let tt={};return tt.intensity=this.intensity,tt.bias=this.bias,tt.normalBias=this.normalBias,tt.radius=this.radius,tt.blurSamples=this.blurSamples,tt.mapSize=this.mapSize.toArray(),tt.mapType=this.mapType,tt.camera=this.camera.toJSON(!1).object,delete tt.camera.matrix,tt}}var Qr=new e,jr=new R,Ci=new e;class ya extends l{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new i,this.projectionMatrix=new i,this.projectionMatrixInverse=new i,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(tt,et){return super.copy(tt,et),this.matrixWorldInverse.copy(tt.matrixWorldInverse),this.projectionMatrix.copy(tt.projectionMatrix),this.projectionMatrixInverse.copy(tt.projectionMatrixInverse),this.coordinateSystem=tt.coordinateSystem,this}getWorldDirection(tt){return super.getWorldDirection(tt).negate()}updateMatrixWorld(tt){if(super.updateMatrixWorld(tt),this.matrixWorld.decompose(Qr,jr,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Qr,jr,Ci.set(1,1,1)).invert()}updateWorldMatrix(tt,et,nt=!1){if(super.updateWorldMatrix(tt,et,nt),this.matrixWorld.decompose(Qr,jr,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Qr,jr,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var ts=new e,Sc=new n,Mc=new n;class _ extends ya{constructor(tt=50,et=1,nt=0.1,it=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=tt,this.zoom=1,this.near=nt,this.far=it,this.focus=10,this.aspect=et,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(tt,et){return super.copy(tt,et),this.fov=tt.fov,this.zoom=tt.zoom,this.near=tt.near,this.far=tt.far,this.focus=tt.focus,this.aspect=tt.aspect,this.view=tt.view===null?null:Object.assign({},tt.view),this.filmGauge=tt.filmGauge,this.filmOffset=tt.filmOffset,this}setFocalLength(tt){let et=0.5*this.getFilmHeight()/tt;this.fov=ms*2*Math.atan(et),this.updateProjectionMatrix()}getFocalLength(){let tt=Math.tan(lr*0.5*this.fov);return 0.5*this.getFilmHeight()/tt}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(lr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(tt,et,nt){ts.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),et.set(ts.x,ts.y).multiplyScalar(-tt/ts.z),ts.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),nt.set(ts.x,ts.y).multiplyScalar(-tt/ts.z)}getViewSize(tt,et){return this.getViewBounds(tt,Sc,Mc),et.subVectors(Mc,Sc)}setViewOffset(tt,et,nt,it,st,rt){if(this.aspect=tt/et,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=tt,this.view.fullHeight=et,this.view.offsetX=nt,this.view.offsetY=it,this.view.width=st,this.view.height=rt,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let tt=this.near,et=tt*Math.tan(lr*0.5*this.fov)/this.zoom,nt=2*et,it=this.aspect*nt,st=-0.5*it,rt=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:ot,fullHeight:lt}=rt;st+=rt.offsetX*it/ot,et-=rt.offsetY*nt/lt,it*=rt.width/ot,nt*=rt.height/lt}let at=this.filmOffset;if(at!==0)st+=tt*at/this.getFilmWidth();this.projectionMatrix.makePerspective(st,st+it,et,et-nt,tt,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(tt){let et=super.toJSON(tt);if(et.object.fov=this.fov,et.object.zoom=this.zoom,et.object.near=this.near,et.object.far=this.far,et.object.focus=this.focus,et.object.aspect=this.aspect,this.view!==null)et.object.view=Object.assign({},this.view);return et.object.filmGauge=this.filmGauge,et.object.filmOffset=this.filmOffset,et}}class Th extends xr{constructor(){super(new _(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(tt){let et=this.camera,nt=ms*2*tt.angle*this.focus,it=this.mapSize.width/this.mapSize.height*this.aspect,st=tt.distance||et.far;if(nt!==et.fov||it!==et.aspect||st!==et.far)et.fov=nt,et.aspect=it,et.far=st,et.updateProjectionMatrix();super.updateMatrices(tt)}copy(tt){return super.copy(tt),this.focus=tt.focus,this.aspect=tt.aspect,this}toJSON(){let tt=super.toJSON();return tt.focus=this.focus,tt.aspect=this.aspect,tt}}class ie extends Ys{constructor(tt,et,nt=0,it=Math.PI/3,st=0,rt=2){super(tt,et);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(l.DEFAULT_UP),this.updateMatrix(),this.target=new l,this.distance=nt,this.angle=it,this.penumbra=st,this.decay=rt,this.map=null,this.shadow=new Th}get power(){return this.intensity*Math.PI}set power(tt){this.intensity=tt/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(tt,et){return super.copy(tt,et),this.distance=tt.distance,this.angle=tt.angle,this.penumbra=tt.penumbra,this.decay=tt.decay,this.target=tt.target.clone(),this.map=tt.map,this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);if(et.object.distance=this.distance,et.object.angle=this.angle,et.object.decay=this.decay,et.object.penumbra=this.penumbra,et.object.target=this.target.uuid,this.map&&this.map.isTexture)et.object.map=this.map.toJSON(tt).uuid;return et.object.shadow=this.shadow.toJSON(),et}}class Eh extends xr{constructor(){super(new _(90,1,0.5,500));this.isPointLightShadow=!0}}class he extends Ys{constructor(tt,et,nt=0,it=2){super(tt,et);this.isPointLight=!0,this.type="PointLight",this.distance=nt,this.decay=it,this.shadow=new Eh}get power(){return this.intensity*4*Math.PI}set power(tt){this.intensity=tt/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(tt,et){return super.copy(tt,et),this.distance=tt.distance,this.decay=tt.decay,this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);return et.object.distance=this.distance,et.object.decay=this.decay,et.object.shadow=this.shadow.toJSON(),et}}class X extends ya{constructor(tt=-1,et=1,nt=1,it=-1,st=0.1,rt=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=tt,this.right=et,this.top=nt,this.bottom=it,this.near=st,this.far=rt,this.updateProjectionMatrix()}copy(tt,et){return super.copy(tt,et),this.left=tt.left,this.right=tt.right,this.top=tt.top,this.bottom=tt.bottom,this.near=tt.near,this.far=tt.far,this.zoom=tt.zoom,this.view=tt.view===null?null:Object.assign({},tt.view),this}setViewOffset(tt,et,nt,it,st,rt){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=tt,this.view.fullHeight=et,this.view.offsetX=nt,this.view.offsetY=it,this.view.width=st,this.view.height=rt,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let tt=(this.right-this.left)/(2*this.zoom),et=(this.top-this.bottom)/(2*this.zoom),nt=(this.right+this.left)/2,it=(this.top+this.bottom)/2,st=nt-tt,rt=nt+tt,at=it+et,ot=it-et;if(this.view!==null&&this.view.enabled){let lt=(this.right-this.left)/this.view.fullWidth/this.zoom,ct=(this.top-this.bottom)/this.view.fullHeight/this.zoom;st+=lt*this.view.offsetX,rt=st+lt*this.view.width,at-=ct*this.view.offsetY,ot=at-ct*this.view.height}this.projectionMatrix.makeOrthographic(st,rt,at,ot,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(tt){let et=super.toJSON(tt);if(et.object.zoom=this.zoom,et.object.left=this.left,et.object.right=this.right,et.object.top=this.top,et.object.bottom=this.bottom,et.object.near=this.near,et.object.far=this.far,this.view!==null)et.object.view=Object.assign({},this.view);return et}}class Ah extends xr{constructor(){super(new X(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class se extends Ys{constructor(tt,et){super(tt,et);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(l.DEFAULT_UP),this.updateMatrix(),this.target=new l,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(tt){return super.copy(tt),this.target=tt.target.clone(),this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);return et.object.shadow=this.shadow.toJSON(),et.object.target=this.target.uuid,et}}class re{static extractUrlBase(tt){let et=tt.lastIndexOf("/");if(et===-1)return"./";return tt.slice(0,et+1)}static resolveURL(tt,et){if(typeof tt!=="string"||tt==="")return"";if(/^https?:\/\//i.test(et)&&/^\//.test(tt))et=et.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(tt))return tt;if(/^data:.*,.*$/i.test(tt))return tt;if(/^blob:.*$/i.test(tt))return tt;return et+tt}}var eo=new WeakMap;class Ve extends V{constructor(tt){super(tt);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")_n("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")_n("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(tt){return this.options=tt,this}load(tt,et,nt,it){if(tt===void 0)tt="";if(this.path!==void 0)tt=this.path+tt;tt=this.manager.resolveURL(tt);let st=this,rt=Pi.get(`image-bitmap:${tt}`);if(rt!==void 0){if(st.manager.itemStart(tt),rt.then){rt.then((lt)=>{if(eo.has(rt)===!0){if(it)it(eo.get(rt));st.manager.itemError(tt),st.manager.itemEnd(tt)}else{if(et)et(lt);st.manager.itemEnd(tt)}});return}setTimeout(function(){if(et)et(rt);st.manager.itemEnd(tt)},0);return}let at={};at.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",at.headers=this.requestHeader,at.priority=this.priority,at.cache=this.cache,at.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let ot=fetch(tt,at).then(function(lt){return lt.blob()}).then(function(lt){return createImageBitmap(lt,Object.assign({},st.options,{colorSpaceConversion:"none"}))}).then(function(lt){if(Pi.add(`image-bitmap:${tt}`,lt),et)et(lt);return st.manager.itemEnd(tt),lt}).catch(function(lt){if(it)it(lt);eo.set(ot,lt),Pi.remove(`image-bitmap:${tt}`),st.manager.itemError(tt),st.manager.itemEnd(tt)});Pi.add(`image-bitmap:${tt}`,ot),st.manager.itemStart(tt)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Os=-90,Bs=1;class vr extends l{constructor(tt,et,nt){super();this.type="CubeCamera",this.renderTarget=nt,this.coordinateSystem=null,this.activeMipmapLevel=0;let it=new _(Os,Bs,tt,et);it.layers=this.layers,this.add(it);let st=new _(Os,Bs,tt,et);st.layers=this.layers,this.add(st);let rt=new _(Os,Bs,tt,et);rt.layers=this.layers,this.add(rt);let at=new _(Os,Bs,tt,et);at.layers=this.layers,this.add(at);let ot=new _(Os,Bs,tt,et);ot.layers=this.layers,this.add(ot);let lt=new _(Os,Bs,tt,et);lt.layers=this.layers,this.add(lt)}updateCoordinateSystem(){let tt=this.coordinateSystem,et=this.children.concat(),[nt,it,st,rt,at,ot]=et;for(let lt of et)this.remove(lt);if(tt===2000)nt.up.set(0,1,0),nt.lookAt(1,0,0),it.up.set(0,1,0),it.lookAt(-1,0,0),st.up.set(0,0,-1),st.lookAt(0,1,0),rt.up.set(0,0,1),rt.lookAt(0,-1,0),at.up.set(0,1,0),at.lookAt(0,0,1),ot.up.set(0,1,0),ot.lookAt(0,0,-1);else if(tt===2001)nt.up.set(0,-1,0),nt.lookAt(-1,0,0),it.up.set(0,-1,0),it.lookAt(1,0,0),st.up.set(0,0,1),st.lookAt(0,1,0),rt.up.set(0,0,-1),rt.lookAt(0,-1,0),at.up.set(0,-1,0),at.lookAt(0,0,1),ot.up.set(0,-1,0),ot.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+tt);for(let lt of et)this.add(lt),lt.updateMatrixWorld()}update(tt,et){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:nt,activeMipmapLevel:it}=this;if(this.coordinateSystem!==tt.coordinateSystem)this.coordinateSystem=tt.coordinateSystem,this.updateCoordinateSystem();let[st,rt,at,ot,lt,ct]=this.children,ut=tt.getRenderTarget(),dt=tt.getActiveCubeFace(),ht=tt.getActiveMipmapLevel(),ft=tt.xr.enabled;tt.xr.enabled=!1;let vt=nt.texture.mipmapsAutoUpdate;nt.texture.mipmapsAutoUpdate=!1;let St=!1;if(tt.isWebGLRenderer===!0)St=tt.state.buffers.depth.getReversed();else St=tt.reversedDepthBuffer;if(tt.setRenderTarget(nt,0,it),St&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,st),tt.setRenderTarget(nt,1,it),St&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,rt),tt.setRenderTarget(nt,2,it),St&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,at),tt.setRenderTarget(nt,3,it),St&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,ot),tt.setRenderTarget(nt,4,it),St&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,lt),nt.texture.mipmapsAutoUpdate=vt,tt.setRenderTarget(nt,5,it),St&&tt.autoClear===!1)tt.clearDepth();tt.render(et,ct),tt.setRenderTarget(ut,dt,ht),tt.xr.enabled=ft,nt.texture.needsPMREMUpdate=!0}}class gl extends _{constructor(tt=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=tt,this.perCameraFrustumCulled=!1}}class Xe{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(tt){if(this._document=tt,tt.hidden!==void 0)this._pageVisibilityHandler=dd.bind(this),tt.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(tt){return this._timescale=tt,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(tt){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(tt!==void 0?tt:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function dd(){if(this._document.hidden===!1)this.reset()}var _l="\\[\\]\\.:\\/",fd=new RegExp("["+_l+"]","g"),xl="[^"+_l+"]",pd="[^"+_l.replace("\\.","")+"]",md=/((?:WC+[\/:])*)/.source.replace("WC",xl),gd=/(WCOD+)?/.source.replace("WCOD",pd),_d=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),xd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),vd=new RegExp("^"+md+gd+_d+xd+"$"),yd=["material","materials","bones","map"];class wh{constructor(tt,et,nt){let it=nt||o.parseTrackName(et);this._targetGroup=tt,this._bindings=tt.subscribe_(et,it)}getValue(tt,et){this.bind();let nt=this._targetGroup.nCachedObjects_,it=this._bindings[nt];if(it!==void 0)it.getValue(tt,et)}setValue(tt,et){let nt=this._bindings;for(let it=this._targetGroup.nCachedObjects_,st=nt.length;it!==st;++it)nt[it].setValue(tt,et)}bind(){let tt=this._bindings;for(let et=this._targetGroup.nCachedObjects_,nt=tt.length;et!==nt;++et)tt[et].bind()}unbind(){let tt=this._bindings;for(let et=this._targetGroup.nCachedObjects_,nt=tt.length;et!==nt;++et)tt[et].unbind()}}class o{constructor(tt,et,nt){this.path=et,this.parsedPath=nt||o.parseTrackName(et),this.node=o.findNode(tt,this.parsedPath.nodeName),this.rootNode=tt,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(tt,et,nt){if(!(tt&&tt.isAnimationObjectGroup))return new o(tt,et,nt);else return new o.Composite(tt,et,nt)}static sanitizeNodeName(tt){return tt.replace(/\s/g,"_").replace(fd,"")}static parseTrackName(tt){let et=vd.exec(tt);if(et===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+tt);let nt={nodeName:et[2],objectName:et[3],objectIndex:et[4],propertyName:et[5],propertyIndex:et[6]},it=nt.nodeName&&nt.nodeName.lastIndexOf(".");if(it!==void 0&&it!==-1){let st=nt.nodeName.substring(it+1);if(yd.indexOf(st)!==-1)nt.nodeName=nt.nodeName.substring(0,it),nt.objectName=st}if(nt.propertyName===null||nt.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+tt);return nt}static findNode(tt,et){if(et===void 0||et===""||et==="."||et===-1||et===tt.name||et===tt.uuid)return tt;if(tt.skeleton){let nt=tt.skeleton.getBoneByName(et);if(nt!==void 0)return nt}if(tt.children){let nt=function(st){for(let rt=0;rt<st.length;rt++){let at=st[rt];if(at.name===et||at.uuid===et)return at;let ot=nt(at.children);if(ot)return ot}return null},it=nt(tt.children);if(it)return it}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(tt,et){tt[et]=this.targetObject[this.propertyName]}_getValue_array(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)tt[et++]=nt[it]}_getValue_arrayElement(tt,et){tt[et]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(tt,et){this.resolvedProperty.toArray(tt,et)}_setValue_direct(tt,et){this.targetObject[this.propertyName]=tt[et]}_setValue_direct_setNeedsUpdate(tt,et){this.targetObject[this.propertyName]=tt[et],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(tt,et){this.targetObject[this.propertyName]=tt[et],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++]}_setValue_array_setNeedsUpdate(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et]}_setValue_arrayElement_setNeedsUpdate(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(tt,et){this.resolvedProperty.fromArray(tt,et)}_setValue_fromArray_setNeedsUpdate(tt,et){this.resolvedProperty.fromArray(tt,et),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(tt,et){this.resolvedProperty.fromArray(tt,et),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(tt,et){this.bind(),this.getValue(tt,et)}_setValue_unbound(tt,et){this.bind(),this.setValue(tt,et)}bind(){let tt=this.node,et=this.parsedPath,{objectName:nt,propertyName:it,propertyIndex:st}=et;if(!tt)tt=o.findNode(this.rootNode,et.nodeName),this.node=tt;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!tt){_n("PropertyBinding: No target node found for track: "+this.path+".");return}if(nt){let lt=et.objectIndex;switch(nt){case"materials":if(!tt.material){Tn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!tt.material.materials){Tn("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}tt=tt.material.materials;break;case"bones":if(!tt.skeleton){Tn("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}tt=tt.skeleton.bones;for(let ct=0;ct<tt.length;ct++)if(tt[ct].name===lt){lt=ct;break}break;case"map":if("map"in tt){tt=tt.map;break}if(!tt.material){Tn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!tt.material.map){Tn("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}tt=tt.material.map;break;default:if(tt[nt]===void 0){Tn("PropertyBinding: Can not bind to objectName of node undefined.",this);return}tt=tt[nt]}if(lt!==void 0){if(tt[lt]===void 0){Tn("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,tt);return}tt=tt[lt]}}let rt=tt[it];if(rt===void 0){let lt=et.nodeName;Tn("PropertyBinding: Trying to update property for track: "+lt+"."+it+" but it wasn't found.",tt);return}let at=this.Versioning.None;if(this.targetObject=tt,tt.isMaterial===!0)at=this.Versioning.NeedsUpdate;else if(tt.isObject3D===!0)at=this.Versioning.MatrixWorldNeedsUpdate;let ot=this.BindingType.Direct;if(st!==void 0){if(it==="morphTargetInfluences"){if(!tt.geometry){Tn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!tt.geometry.morphAttributes){Tn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(tt.morphTargetDictionary[st]!==void 0)st=tt.morphTargetDictionary[st]}ot=this.BindingType.ArrayElement,this.resolvedProperty=rt,this.propertyIndex=st}else if(rt.fromArray!==void 0&&rt.toArray!==void 0)ot=this.BindingType.HasFromToArray,this.resolvedProperty=rt;else if(Array.isArray(rt))ot=this.BindingType.EntireArray,this.resolvedProperty=rt;else this.propertyName=it;this.getValue=this.GetterByBindingType[ot],this.setValue=this.SetterByBindingTypeAndVersioning[ot][at]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o.Composite=wh;o.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o.prototype.GetterByBindingType=[o.prototype._getValue_direct,o.prototype._getValue_array,o.prototype._getValue_arrayElement,o.prototype._getValue_toArray];o.prototype.SetterByBindingTypeAndVersioning=[[o.prototype._setValue_direct,o.prototype._setValue_direct_setNeedsUpdate,o.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o.prototype._setValue_array,o.prototype._setValue_array_setNeedsUpdate,o.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o.prototype._setValue_arrayElement,o.prototype._setValue_arrayElement_setNeedsUpdate,o.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o.prototype._setValue_fromArray,o.prototype._setValue_fromArray_setNeedsUpdate,o.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l_=new Float32Array(1);class Rh{static{this.prototype.isMatrix2=!0}constructor(tt,et,nt,it){if(this.elements=[1,0,0,1],tt!==void 0)this.set(tt,et,nt,it)}identity(){return this.set(1,0,0,1),this}fromArray(tt,et=0){for(let nt=0;nt<4;nt++)this.elements[nt]=tt[nt+et];return this}set(tt,et,nt,it){let st=this.elements;return st[0]=tt,st[2]=et,st[1]=nt,st[3]=it,this}}function vl(tt,et,nt,it){let st=Sd(it);switch(nt){case 1021:return tt*et;case 1028:return tt*et/st.components*st.byteLength;case 1029:return tt*et/st.components*st.byteLength;case 1030:return tt*et*2/st.components*st.byteLength;case 1031:return tt*et*2/st.components*st.byteLength;case 1022:return tt*et*3/st.components*st.byteLength;case 1023:return tt*et*4/st.components*st.byteLength;case 1033:return tt*et*4/st.components*st.byteLength;case 33776:case 33777:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*8;case 33778:case 33779:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 35841:case 35843:return Math.max(tt,16)*Math.max(et,8)/4;case 35840:case 35842:return Math.max(tt,8)*Math.max(et,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 37808:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 37809:return Math.floor((tt+4)/5)*Math.floor((et+3)/4)*16;case 37810:return Math.floor((tt+4)/5)*Math.floor((et+4)/5)*16;case 37811:return Math.floor((tt+5)/6)*Math.floor((et+4)/5)*16;case 37812:return Math.floor((tt+5)/6)*Math.floor((et+5)/6)*16;case 37813:return Math.floor((tt+7)/8)*Math.floor((et+4)/5)*16;case 37814:return Math.floor((tt+7)/8)*Math.floor((et+5)/6)*16;case 37815:return Math.floor((tt+7)/8)*Math.floor((et+7)/8)*16;case 37816:return Math.floor((tt+9)/10)*Math.floor((et+4)/5)*16;case 37817:return Math.floor((tt+9)/10)*Math.floor((et+5)/6)*16;case 37818:return Math.floor((tt+9)/10)*Math.floor((et+7)/8)*16;case 37819:return Math.floor((tt+9)/10)*Math.floor((et+9)/10)*16;case 37820:return Math.floor((tt+11)/12)*Math.floor((et+9)/10)*16;case 37821:return Math.floor((tt+11)/12)*Math.floor((et+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(tt/4)*Math.ceil(et/4)*16;case 36283:case 36284:return Math.ceil(tt/4)*Math.ceil(et/4)*8;case 36285:case 36286:return Math.ceil(tt/4)*Math.ceil(et/4)*16}throw Error(`Unable to determine texture byte length for ${nt} format.`)}function Sd(tt){switch(tt){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${tt}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)_n("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function $h(){let tt=null,et=!1,nt=null,it=null;function st(rt,at){it=tt.requestAnimationFrame(st),nt(rt,at)}return{start:function(){if(et===!0)return;if(nt===null)return;if(tt===null)return;it=tt.requestAnimationFrame(st),et=!0},stop:function(){if(tt!==null)tt.cancelAnimationFrame(it);et=!1},setAnimationLoop:function(rt){nt=rt},setContext:function(rt){tt=rt}}}function Md(tt){let et=new WeakMap;function nt(ot,lt){let{array:ct,usage:ut}=ot,dt=ct.byteLength,ht=tt.createBuffer();tt.bindBuffer(lt,ht),tt.bufferData(lt,ct,ut),ot.onUploadCallback();let ft;if(ct instanceof Float32Array)ft=tt.FLOAT;else if(typeof Float16Array<"u"&&ct instanceof Float16Array)ft=tt.HALF_FLOAT;else if(ct instanceof Uint16Array)if(ot.isFloat16BufferAttribute)ft=tt.HALF_FLOAT;else ft=tt.UNSIGNED_SHORT;else if(ct instanceof Int16Array)ft=tt.SHORT;else if(ct instanceof Uint32Array)ft=tt.UNSIGNED_INT;else if(ct instanceof Int32Array)ft=tt.INT;else if(ct instanceof Int8Array)ft=tt.BYTE;else if(ct instanceof Uint8Array)ft=tt.UNSIGNED_BYTE;else if(ct instanceof Uint8ClampedArray)ft=tt.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+ct);return{buffer:ht,type:ft,bytesPerElement:ct.BYTES_PER_ELEMENT,version:ot.version,size:dt}}function it(ot,lt,ct){let{array:ut,updateRanges:dt}=lt;if(tt.bindBuffer(ct,ot),dt.length===0)tt.bufferSubData(ct,0,ut);else{dt.sort((ft,vt)=>ft.start-vt.start);let ht=0;for(let ft=1;ft<dt.length;ft++){let vt=dt[ht],St=dt[ft];if(St.start<=vt.start+vt.count+1)vt.count=Math.max(vt.count,St.start+St.count-vt.start);else++ht,dt[ht]=St}dt.length=ht+1;for(let ft=0,vt=dt.length;ft<vt;ft++){let St=dt[ft];tt.bufferSubData(ct,St.start*ut.BYTES_PER_ELEMENT,ut,St.start,St.count)}lt.clearUpdateRanges()}lt.onUploadCallback()}function st(ot){if(ot.isInterleavedBufferAttribute)ot=ot.data;return et.get(ot)}function rt(ot){if(ot.isInterleavedBufferAttribute)ot=ot.data;let lt=et.get(ot);if(lt)tt.deleteBuffer(lt.buffer),et.delete(ot)}function at(ot,lt){if(ot.isInterleavedBufferAttribute)ot=ot.data;if(ot.isGLBufferAttribute){let ut=et.get(ot);if(!ut||ut.version<ot.version)et.set(ot,{buffer:ot.buffer,type:ot.type,bytesPerElement:ot.elementSize,version:ot.version});return}let ct=et.get(ot);if(ct===void 0)et.set(ot,nt(ot,lt));else if(ct.version<ot.version){if(ct.size!==ot.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");it(ct.buffer,ot,lt),ct.version=ot.version}}return{get:st,remove:rt,update:at}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,Yd=`vec3 transformedNormal = objectNormal;
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
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
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
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,Sf=`uniform sampler2D dfgLUT;
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
}`,Mf=`
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lp=`float getShadowMask() {
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
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform float backgroundBlurriness;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
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
}`,Ip=`#if DEPTH_PACKING == 3200
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
}`,Pp=`#define DISTANCE
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
}`,Lp=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#define LAMBERT
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
}`,Gp=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,Hp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Vp=`#define NORMAL
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
}`,Xp=`#define PHONG
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
}`,qp=`#define PHONG
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
}`,Yp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define TOON
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
}`,$p=`#define TOON
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
}`,Kp=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,tm=`uniform vec3 color;
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
}`,em=`uniform float rotation;
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
}`,nm=`uniform vec3 diffuse;
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
}`,Pn={alphahash_fragment:bd,alphahash_pars_fragment:Td,alphamap_fragment:Ed,alphamap_pars_fragment:Ad,alphatest_fragment:wd,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Id,batching_pars_vertex:Pd,batching_vertex:Ld,begin_vertex:Nd,beginnormal_vertex:Dd,bsdfs:Ud,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:kd,color_fragment:Hd,color_pars_fragment:Wd,color_pars_vertex:Vd,color_vertex:Xd,common:qd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:Zd,displacementmap_vertex:Jd,emissivemap_fragment:$d,emissivemap_pars_fragment:Kd,colorspace_fragment:Qd,colorspace_pars_fragment:jd,envmap_fragment:tf,envmap_common_pars_fragment:ef,envmap_pars_fragment:nf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:mf,envmap_vertex:rf,fog_vertex:af,fog_pars_vertex:of,fog_fragment:lf,fog_pars_fragment:cf,gradientmap_pars_fragment:hf,lightmap_pars_fragment:uf,lights_lambert_fragment:df,lights_lambert_pars_fragment:ff,lights_pars_begin:pf,lights_toon_fragment:gf,lights_toon_pars_fragment:_f,lights_phong_fragment:xf,lights_phong_pars_fragment:vf,lights_physical_fragment:yf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Mf,lights_fragment_maps:bf,lights_fragment_end:Tf,lightprobes_pars_fragment:Ef,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Cf,map_fragment:If,map_pars_fragment:Pf,map_particle_fragment:Lf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:Uf,morphinstance_vertex:Ff,morphcolor_vertex:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:zf,morphtarget_vertex:Gf,normal_fragment_begin:kf,normal_fragment_maps:Hf,normal_pars_fragment:Wf,normal_pars_vertex:Vf,normal_vertex:Xf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:$f,opaque_fragment:Kf,packing:Qf,premultiplied_alpha_fragment:jf,project_vertex:tp,dithering_fragment:ep,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:ap,shadowmap_vertex:op,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:hp,skinning_vertex:up,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:_p,transmission_pars_fragment:xp,uv_pars_fragment:vp,uv_pars_vertex:yp,uv_vertex:Sp,worldpos_vertex:Mp,background_vert:bp,background_frag:Tp,backgroundCube_vert:Ep,backgroundCube_frag:Ap,cube_vert:wp,cube_frag:Rp,depth_vert:Cp,depth_frag:Ip,distance_vert:Pp,distance_frag:Lp,equirect_vert:Np,equirect_frag:Dp,linedashed_vert:Up,linedashed_frag:Fp,meshbasic_vert:Op,meshbasic_frag:Bp,meshlambert_vert:zp,meshlambert_frag:Gp,meshmatcap_vert:kp,meshmatcap_frag:Hp,meshnormal_vert:Wp,meshnormal_frag:Vp,meshphong_vert:Xp,meshphong_frag:qp,meshphysical_vert:Yp,meshphysical_frag:Zp,meshtoon_vert:Jp,meshtoon_frag:$p,points_vert:Kp,points_frag:Qp,shadow_vert:jp,shadow_frag:tm,sprite_vert:em,sprite_frag:nm},an={common:{diffuse:{value:new t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new En},alphaMap:{value:null},alphaMapTransform:{value:new En},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new En}},envmap:{envMap:{value:null},envMapRotation:{value:new En},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new En}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new En}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new En},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new En},normalScale:{value:new n(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new En},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new En}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new En}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new En}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new En},alphaTest:{value:0},uvTransform:{value:new En}},sprite:{diffuse:{value:new t(16777215)},opacity:{value:1},center:{value:new n(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new En},alphaMap:{value:null},alphaMapTransform:{value:new En},alphaTest:{value:0}}},Fi={basic:{uniforms:hi([an.common,an.specularmap,an.envmap,an.aomap,an.lightmap,an.fog]),vertexShader:Pn.meshbasic_vert,fragmentShader:Pn.meshbasic_frag},lambert:{uniforms:hi([an.common,an.specularmap,an.envmap,an.aomap,an.lightmap,an.emissivemap,an.bumpmap,an.normalmap,an.displacementmap,an.fog,an.lights,{emissive:{value:new t(0)},envMapIntensity:{value:1}}]),vertexShader:Pn.meshlambert_vert,fragmentShader:Pn.meshlambert_frag},phong:{uniforms:hi([an.common,an.specularmap,an.envmap,an.aomap,an.lightmap,an.emissivemap,an.bumpmap,an.normalmap,an.displacementmap,an.fog,an.lights,{emissive:{value:new t(0)},specular:{value:new t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pn.meshphong_vert,fragmentShader:Pn.meshphong_frag},standard:{uniforms:hi([an.common,an.envmap,an.aomap,an.lightmap,an.emissivemap,an.bumpmap,an.normalmap,an.displacementmap,an.roughnessmap,an.metalnessmap,an.fog,an.lights,{emissive:{value:new t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pn.meshphysical_vert,fragmentShader:Pn.meshphysical_frag},toon:{uniforms:hi([an.common,an.aomap,an.lightmap,an.emissivemap,an.bumpmap,an.normalmap,an.displacementmap,an.gradientmap,an.fog,an.lights,{emissive:{value:new t(0)}}]),vertexShader:Pn.meshtoon_vert,fragmentShader:Pn.meshtoon_frag},matcap:{uniforms:hi([an.common,an.bumpmap,an.normalmap,an.displacementmap,an.fog,{matcap:{value:null}}]),vertexShader:Pn.meshmatcap_vert,fragmentShader:Pn.meshmatcap_frag},points:{uniforms:hi([an.points,an.fog]),vertexShader:Pn.points_vert,fragmentShader:Pn.points_frag},dashed:{uniforms:hi([an.common,an.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pn.linedashed_vert,fragmentShader:Pn.linedashed_frag},depth:{uniforms:hi([an.common,an.displacementmap]),vertexShader:Pn.depth_vert,fragmentShader:Pn.depth_frag},normal:{uniforms:hi([an.common,an.bumpmap,an.normalmap,an.displacementmap,{opacity:{value:1}}]),vertexShader:Pn.meshnormal_vert,fragmentShader:Pn.meshnormal_frag},sprite:{uniforms:hi([an.sprite,an.fog]),vertexShader:Pn.sprite_vert,fragmentShader:Pn.sprite_frag},background:{uniforms:{uvTransform:{value:new En},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pn.background_vert,fragmentShader:Pn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new En}},vertexShader:Pn.backgroundCube_vert,fragmentShader:Pn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pn.cube_vert,fragmentShader:Pn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pn.equirect_vert,fragmentShader:Pn.equirect_frag},distance:{uniforms:hi([an.common,an.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Pn.distance_vert,fragmentShader:Pn.distance_frag},shadow:{uniforms:hi([an.lights,an.fog,{color:{value:new t(0)},opacity:{value:1}}]),vertexShader:Pn.shadow_vert,fragmentShader:Pn.shadow_frag}};Fi.physical={uniforms:hi([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new En},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new En},clearcoatNormalScale:{value:new n(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new En},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new En},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new En},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new En},sheen:{value:0},sheenColor:{value:new t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new En},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new En},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new En},transmissionSamplerSize:{value:new n},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new En},attenuationDistance:{value:0},attenuationColor:{value:new t(0)},specularColor:{value:new t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new En},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new En},anisotropyVector:{value:new n},anisotropyMap:{value:null},anisotropyMapTransform:{value:new En}}]),vertexShader:Pn.meshphysical_vert,fragmentShader:Pn.meshphysical_frag};var Sa={r:0,b:0,g:0},im=new i,Kh=new En;Kh.set(-1,0,0,0,1,0,0,0,1);function sm(tt,et,nt,it,st,rt){let at=new t(0),ot=st===!0?0:1,lt,ct,ut=null,dt=0,ht=null;function ft(Tt){let At=Tt.isScene===!0?Tt.background:null;if(At&&At.isTexture){let bt=Tt.backgroundBlurriness>0;At=et.get(At,bt)}return At}function vt(Tt){let At=!1,bt=ft(Tt);if(bt===null)pt(at,ot);else if(bt&&bt.isColor)pt(bt,1),At=!0;let Et=tt.xr.getEnvironmentBlendMode();if(Et==="additive")nt.buffers.color.setClear(0,0,0,1,rt);else if(Et==="alpha-blend")nt.buffers.color.setClear(0,0,0,0,rt);if(tt.autoClear||At)nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),tt.clear(tt.autoClearColor,tt.autoClearDepth,tt.autoClearStencil)}function St(Tt,At){let bt=ft(At);if(bt&&bt.isCubeTexture){if(ct===void 0)ct=new r(new j(1,1,1),new p({name:"BackgroundCubeMaterial",uniforms:ys(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:T,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),ct.geometry.deleteAttribute("normal"),ct.geometry.deleteAttribute("uv"),ct.onBeforeRender=function(Et,It,gt){this.matrixWorld.copyPosition(gt.matrixWorld)},Object.defineProperty(ct.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),it.update(ct);if(ct.material.uniforms.envMap.value=bt,ct.material.uniforms.backgroundBlurriness.value=At.backgroundBlurriness,ct.material.uniforms.backgroundIntensity.value=At.backgroundIntensity,ct.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(At.backgroundRotation)).transpose(),bt.isRenderTargetTexture===!1)ct.material.uniforms.backgroundRotation.value.premultiply(Kh);if(ct.material.toneMapped=s.getTransfer(bt.colorSpace)!==c,ut!==bt||dt!==bt.version||ht!==tt.toneMapping)ct.material.needsUpdate=!0,ut=bt,dt=bt.version,ht=tt.toneMapping;ct.layers.enableAll(),Tt.unshift(ct,ct.geometry,ct.material,0,0,null)}else if(bt&&bt.isTexture){if(lt===void 0)lt=new r(new P(2,2),new p({name:"BackgroundMaterial",uniforms:ys(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:q,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),lt.geometry.deleteAttribute("normal"),Object.defineProperty(lt.material,"map",{get:function(){return this.uniforms.t2D.value}}),it.update(lt);if(lt.material.uniforms.t2D.value=bt,lt.material.uniforms.backgroundIntensity.value=At.backgroundIntensity,lt.material.toneMapped=s.getTransfer(bt.colorSpace)!==c,bt.matrixAutoUpdate===!0)bt.updateMatrix();if(lt.material.uniforms.uvTransform.value.copy(bt.matrix),ut!==bt||dt!==bt.version||ht!==tt.toneMapping)lt.material.needsUpdate=!0,ut=bt,dt=bt.version,ht=tt.toneMapping;lt.layers.enableAll(),Tt.unshift(lt,lt.geometry,lt.material,0,0,null)}}function pt(Tt,At){Tt.getRGB(Sa,al(tt)),nt.buffers.color.setClear(Sa.r,Sa.g,Sa.b,At,rt)}function mt(){if(ct!==void 0)ct.geometry.dispose(),ct.material.dispose(),ct=void 0;if(lt!==void 0)lt.geometry.dispose(),lt.material.dispose(),lt=void 0}return{getClearColor:function(){return at},setClearColor:function(Tt,At=1){at.set(Tt),ot=At,pt(at,ot)},getClearAlpha:function(){return ot},setClearAlpha:function(Tt){ot=Tt,pt(at,ot)},render:vt,addToRenderList:St,dispose:mt}}function rm(tt,et){let nt=tt.getParameter(tt.MAX_VERTEX_ATTRIBS),it={},st=ht(null),rt=st,at=!1;function ot(Lt,zt,Kt,Rt,qt){let Zt=!1,Ot=dt(Lt,Rt,Kt,zt);if(rt!==Ot)rt=Ot,ct(rt.object);if(Zt=ft(Lt,Rt,Kt,qt),Zt)vt(Lt,Rt,Kt,qt);if(qt!==null)et.update(qt,tt.ELEMENT_ARRAY_BUFFER);if(Zt||at){if(at=!1,bt(Lt,zt,Kt,Rt),qt!==null)tt.bindBuffer(tt.ELEMENT_ARRAY_BUFFER,et.get(qt).buffer)}}function lt(){return tt.createVertexArray()}function ct(Lt){return tt.bindVertexArray(Lt)}function ut(Lt){return tt.deleteVertexArray(Lt)}function dt(Lt,zt,Kt,Rt){let qt=Rt.wireframe===!0,Zt=it[zt.id];if(Zt===void 0)Zt={},it[zt.id]=Zt;let Ot=Lt.isInstancedMesh===!0?Lt.id:0,Qe=Zt[Ot];if(Qe===void 0)Qe={},Zt[Ot]=Qe;let Wt=Qe[Kt.id];if(Wt===void 0)Wt={},Qe[Kt.id]=Wt;let $t=Wt[qt];if($t===void 0)$t=ht(lt()),Wt[qt]=$t;return $t}function ht(Lt){let zt=[],Kt=[],Rt=[];for(let qt=0;qt<nt;qt++)zt[qt]=0,Kt[qt]=0,Rt[qt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:zt,enabledAttributes:Kt,attributeDivisors:Rt,object:Lt,attributes:{},index:null}}function ft(Lt,zt,Kt,Rt){let qt=rt.attributes,Zt=zt.attributes,Ot=0,Qe=Kt.getAttributes();for(let Wt in Qe)if(Qe[Wt].location>=0){let Je=qt[Wt],mn=Zt[Wt];if(mn===void 0){if(Wt==="instanceMatrix"&&Lt.instanceMatrix)mn=Lt.instanceMatrix;if(Wt==="instanceColor"&&Lt.instanceColor)mn=Lt.instanceColor}if(Je===void 0)return!0;if(Je.attribute!==mn)return!0;if(mn&&Je.data!==mn.data)return!0;Ot++}if(rt.attributesNum!==Ot)return!0;if(rt.index!==Rt)return!0;return!1}function vt(Lt,zt,Kt,Rt){let qt={},Zt=zt.attributes,Ot=0,Qe=Kt.getAttributes();for(let Wt in Qe)if(Qe[Wt].location>=0){let Je=Zt[Wt];if(Je===void 0){if(Wt==="instanceMatrix"&&Lt.instanceMatrix)Je=Lt.instanceMatrix;if(Wt==="instanceColor"&&Lt.instanceColor)Je=Lt.instanceColor}let mn={};if(mn.attribute=Je,Je&&Je.data)mn.data=Je.data;qt[Wt]=mn,Ot++}rt.attributes=qt,rt.attributesNum=Ot,rt.index=Rt}function St(){let Lt=rt.newAttributes;for(let zt=0,Kt=Lt.length;zt<Kt;zt++)Lt[zt]=0}function pt(Lt){mt(Lt,0)}function mt(Lt,zt){let Kt=rt.newAttributes,Rt=rt.enabledAttributes,qt=rt.attributeDivisors;if(Kt[Lt]=1,Rt[Lt]===0)tt.enableVertexAttribArray(Lt),Rt[Lt]=1;if(qt[Lt]!==zt)tt.vertexAttribDivisor(Lt,zt),qt[Lt]=zt}function Tt(){let Lt=rt.newAttributes,zt=rt.enabledAttributes;for(let Kt=0,Rt=zt.length;Kt<Rt;Kt++)if(zt[Kt]!==Lt[Kt])tt.disableVertexAttribArray(Kt),zt[Kt]=0}function At(Lt,zt,Kt,Rt,qt,Zt,Ot){if(Ot===!0)tt.vertexAttribIPointer(Lt,zt,Kt,qt,Zt);else tt.vertexAttribPointer(Lt,zt,Kt,Rt,qt,Zt)}function bt(Lt,zt,Kt,Rt){St();let qt=Rt.attributes,Zt=Kt.getAttributes(),Ot=zt.defaultAttributeValues;for(let Qe in Zt){let Wt=Zt[Qe];if(Wt.location>=0){let $t=qt[Qe];if($t===void 0){if(Qe==="instanceMatrix"&&Lt.instanceMatrix)$t=Lt.instanceMatrix;if(Qe==="instanceColor"&&Lt.instanceColor)$t=Lt.instanceColor}if($t!==void 0){let Je=$t.normalized,mn=$t.itemSize,Yt=et.get($t);if(Yt===void 0)continue;let{buffer:ae,type:fn,bytesPerElement:Sn}=Yt,Mn=fn===tt.INT||fn===tt.UNSIGNED_INT||$t.gpuType===oo;if($t.isInterleavedBufferAttribute){let pn=$t.data,Bn=pn.isInterleavedBuffer===!0?pn.stride:pn.itemSize,Ln=$t.offset;if(pn.isInstancedInterleavedBuffer||pn.isInstancedBufferAttribute){for(let Rn=0;Rn<Wt.locationSize;Rn++)mt(Wt.location+Rn,pn.meshPerAttribute);if(Lt.isInstancedMesh!==!0&&Rt._maxInstanceCount===void 0)Rt._maxInstanceCount=pn.meshPerAttribute*pn.count}else for(let Rn=0;Rn<Wt.locationSize;Rn++)pt(Wt.location+Rn);tt.bindBuffer(tt.ARRAY_BUFFER,ae);for(let Rn=0;Rn<Wt.locationSize;Rn++)At(Wt.location+Rn,mn/Wt.locationSize,fn,Je,Bn*Sn,(Ln+mn/Wt.locationSize*Rn)*Sn,Mn)}else{if($t.isInstancedBufferAttribute){for(let pn=0;pn<Wt.locationSize;pn++)mt(Wt.location+pn,$t.meshPerAttribute);if(Lt.isInstancedMesh!==!0&&Rt._maxInstanceCount===void 0)Rt._maxInstanceCount=$t.meshPerAttribute*$t.count}else for(let pn=0;pn<Wt.locationSize;pn++)pt(Wt.location+pn);tt.bindBuffer(tt.ARRAY_BUFFER,ae);for(let pn=0;pn<Wt.locationSize;pn++)At(Wt.location+pn,mn/Wt.locationSize,fn,Je,mn*Sn,mn/Wt.locationSize*pn*Sn,Mn)}}else if(Ot!==void 0){let Je=Ot[Qe];if(Je!==void 0)switch(Je.length){case 2:tt.vertexAttrib2fv(Wt.location,Je);break;case 3:tt.vertexAttrib3fv(Wt.location,Je);break;case 4:tt.vertexAttrib4fv(Wt.location,Je);break;default:tt.vertexAttrib1fv(Wt.location,Je)}}}}Tt()}function Et(){Nt();for(let Lt in it){let zt=it[Lt];for(let Kt in zt){let Rt=zt[Kt];for(let qt in Rt){let Zt=Rt[qt];for(let Ot in Zt)ut(Zt[Ot].object),delete Zt[Ot];delete Rt[qt]}}delete it[Lt]}}function It(Lt){if(it[Lt.id]===void 0)return;let zt=it[Lt.id];for(let Kt in zt){let Rt=zt[Kt];for(let qt in Rt){let Zt=Rt[qt];for(let Ot in Zt)ut(Zt[Ot].object),delete Zt[Ot];delete Rt[qt]}}delete it[Lt.id]}function gt(Lt){for(let zt in it){let Kt=it[zt];for(let Rt in Kt){let qt=Kt[Rt];if(qt[Lt.id]===void 0)continue;let Zt=qt[Lt.id];for(let Ot in Zt)ut(Zt[Ot].object),delete Zt[Ot];delete qt[Lt.id]}}}function yt(Lt){for(let zt in it){let Kt=it[zt],Rt=Lt.isInstancedMesh===!0?Lt.id:0,qt=Kt[Rt];if(qt===void 0)continue;for(let Zt in qt){let Ot=qt[Zt];for(let Qe in Ot)ut(Ot[Qe].object),delete Ot[Qe];delete qt[Zt]}if(delete Kt[Rt],Object.keys(Kt).length===0)delete it[zt]}}function Nt(){if(kt(),at=!0,rt===st)return;rt=st,ct(rt.object)}function kt(){st.geometry=null,st.program=null,st.wireframe=!1}return{setup:ot,reset:Nt,resetDefaultState:kt,dispose:Et,releaseStatesOfGeometry:It,releaseStatesOfObject:yt,releaseStatesOfProgram:gt,initAttributes:St,enableAttribute:pt,disableUnusedAttributes:Tt}}function am(tt,et,nt){let it;function st(lt){it=lt}function rt(lt,ct){tt.drawArrays(it,lt,ct),nt.update(ct,it,1)}function at(lt,ct,ut){if(ut===0)return;tt.drawArraysInstanced(it,lt,ct,ut),nt.update(ct,it,ut)}function ot(lt,ct,ut){if(ut===0)return;et.get("WEBGL_multi_draw").multiDrawArraysWEBGL(it,lt,0,ct,0,ut);let ht=0;for(let ft=0;ft<ut;ft++)ht+=ct[ft];nt.update(ht,it,1)}this.setMode=st,this.render=rt,this.renderInstances=at,this.renderMultiDraw=ot}function om(tt,et,nt,it){let st;function rt(){if(st!==void 0)return st;if(et.has("EXT_texture_filter_anisotropic")===!0){let gt=et.get("EXT_texture_filter_anisotropic");st=tt.getParameter(gt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else st=0;return st}function at(gt){if(gt!==Yi&&it.convert(gt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function ot(gt){let yt=gt===A&&(et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float"));if(gt!==Ri&&gt!==qi&&!yt&&it.convert(gt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function lt(gt){if(gt==="highp"){if(tt.getShaderPrecisionFormat(tt.VERTEX_SHADER,tt.HIGH_FLOAT).precision>0&&tt.getShaderPrecisionFormat(tt.FRAGMENT_SHADER,tt.HIGH_FLOAT).precision>0)return"highp";gt="mediump"}if(gt==="mediump"){if(tt.getShaderPrecisionFormat(tt.VERTEX_SHADER,tt.MEDIUM_FLOAT).precision>0&&tt.getShaderPrecisionFormat(tt.FRAGMENT_SHADER,tt.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let ct=nt.precision!==void 0?nt.precision:"highp",ut=lt(ct);if(ut!==ct)_n("WebGLRenderer:",ct,"not supported, using",ut,"instead."),ct=ut;let dt=nt.reversedDepthBuffer===!0&&et.has("EXT_clip_control"),ht=nt.logarithmicDepthBuffer===!0&&dt===!1;if(nt.reversedDepthBuffer===!0&&dt===!1)_n("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(nt.logarithmicDepthBuffer===!0&&dt===!0)_n("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let ft=tt.getParameter(tt.MAX_TEXTURE_IMAGE_UNITS),vt=tt.getParameter(tt.MAX_VERTEX_TEXTURE_IMAGE_UNITS),St=tt.getParameter(tt.MAX_TEXTURE_SIZE),pt=tt.getParameter(tt.MAX_CUBE_MAP_TEXTURE_SIZE),mt=tt.getParameter(tt.MAX_VERTEX_ATTRIBS),Tt=tt.getParameter(tt.MAX_VERTEX_UNIFORM_VECTORS),At=tt.getParameter(tt.MAX_VARYING_VECTORS),bt=tt.getParameter(tt.MAX_FRAGMENT_UNIFORM_VECTORS),Et=tt.getParameter(tt.MAX_SAMPLES),It=tt.getParameter(tt.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:rt,getMaxPrecision:lt,textureFormatReadable:at,textureTypeReadable:ot,precision:ct,logarithmicDepthBuffer:ht,reversedDepthBuffer:dt,maxTextures:ft,maxVertexTextures:vt,maxTextureSize:St,maxCubemapSize:pt,maxAttributes:mt,maxVertexUniforms:Tt,maxVaryings:At,maxFragmentUniforms:bt,maxSamples:Et,samples:It}}function lm(tt){let et=this,nt=null,it=0,st=!1,rt=!1,at=new Ii,ot=new En,lt={value:null,needsUpdate:!1};this.uniform=lt,this.numPlanes=0,this.numIntersection=0,this.init=function(dt,ht){let ft=dt.length!==0||ht||it!==0||st;return st=ht,it=dt.length,ft},this.beginShadows=function(){rt=!0,ut(null)},this.endShadows=function(){rt=!1},this.setGlobalState=function(dt,ht){nt=ut(dt,ht,0)},this.setState=function(dt,ht,ft){let{clippingPlanes:vt,clipIntersection:St,clipShadows:pt}=dt,mt=tt.get(dt);if(!st||vt===null||vt.length===0||rt&&!pt)if(rt)ut(null);else ct();else{let Tt=rt?0:it,At=Tt*4,bt=mt.clippingState||null;lt.value=bt,bt=ut(vt,ht,At,ft);for(let Et=0;Et!==At;++Et)bt[Et]=nt[Et];mt.clippingState=bt,this.numIntersection=St?this.numPlanes:0,this.numPlanes+=Tt}};function ct(){if(lt.value!==nt)lt.value=nt,lt.needsUpdate=it>0;et.numPlanes=it,et.numIntersection=0}function ut(dt,ht,ft,vt){let St=dt!==null?dt.length:0,pt=null;if(St!==0){if(pt=lt.value,vt!==!0||pt===null){let mt=ft+St*4,Tt=ht.matrixWorldInverse;if(ot.getNormalMatrix(Tt),pt===null||pt.length<mt)pt=new Float32Array(mt);for(let At=0,bt=ft;At!==St;++At,bt+=4)at.copy(dt[At]).applyMatrix4(Tt,ot),at.normal.toArray(pt,bt),pt[bt+3]=at.constant}lt.value=pt,lt.needsUpdate=!0}return et.numPlanes=St,et.numIntersection=0,pt}}class ba extends M{constructor(tt=1,et={}){super(tt,tt,et);this.isWebGLCubeRenderTarget=!0;let nt={width:tt,height:tt,depth:1},it=[nt,nt,nt,nt,nt,nt];this.texture=new ga(it),this._setTextureOptions(et),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(tt,et){this.texture.type=et.type,this.texture.colorSpace=et.colorSpace,this.texture.generateMipmaps=et.generateMipmaps,this.texture.minFilter=et.minFilter,this.texture.magFilter=et.magFilter;let nt={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},it=new j(5,5,5),st=new p({name:"CubemapFromEquirect",uniforms:ys(nt.uniforms),vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader,side:T,blending:k});st.uniforms.tEquirect.value=et;let rt=new r(it,st),at=et.minFilter;if(et.minFilter===O)et.minFilter=w;return new vr(1,10,this).update(tt,rt),et.minFilter=at,rt.geometry.dispose(),rt.material.dispose(),this}clear(tt,et=!0,nt=!0,it=!0){let st=tt.getRenderTarget();for(let rt=0;rt<6;rt++)tt.setRenderTarget(this,rt),tt.clear(et,nt,it);tt.setRenderTarget(st)}}var Ch=256,cm=3,hm=20,Qh=256,jh=16,um=3,dm=new e,fm=new t;class _e{constructor(tt){this._renderer=tt,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vr(1,10,null),this._boxMesh=new r(new j(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(tt,et=0,nt=0.1,it=100,st={}){let{size:rt=256,position:at=dm}=st,ot=this._renderer;this._setSize(rt);let lt=this._allocateTarget(),ct=this._getSourceTarget(!0);if(et>0)ct.texture.mipmapsAutoUpdate=!1;let{autoClear:ut,autoClearColor:dt,autoClearDepth:ht,autoClearStencil:ft}=ot,vt=tt.background;if(ot.autoClear=!0,ot.autoClearColor=!0,ot.autoClearDepth=!0,ot.autoClearStencil=!0,vt===null)tt.background=ot.getClearColor(fm);let St=new vr(nt,it,ct);if(St.position.copy(at),St.update(ot,tt),ot.autoClear=ut,ot.autoClearColor=dt,ot.autoClearDepth=ht,ot.autoClearStencil=ft,tt.background=vt,et>0)ct.texture.mipmapsAutoUpdate=!0,this._blur(lt,et);return this._applyPMREM(lt),lt}fromEquirectangular(tt,et=null){return this._fromTexture(tt,et)}fromCubemap(tt,et=null){return this._fromTexture(tt,et)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(tt,et){return et>0?1-Math.sqrt(1-tt/et):0}_setSize(tt){this._cubeSize=Math.max(Ch,Qo(tt))}_fromTexture(tt,et){if(tt.mapping===fr||tt.mapping===Vs)this._setSize(tt.image.length===0?Ch:tt.image[0].width||tt.image[0].image.width);else this._setSize(tt.image.width/4);let nt=et||this._allocateTarget();return this._textureToCubemap(tt),this._applyPMREM(nt),nt}_allocateTarget(){let tt=this._cubeSize,et=Ih(tt,!1,!1),nt=Math.log2(tt)-cm;for(let it=0;it<=nt;it++)et.texture.mipmaps.push({width:tt>>it,height:tt>>it});return et.texture.name="PMREM",et.texture.isPMREMTexture=!0,et}_getSourceTarget(tt=!1){let et=this._cubeSize,nt=this._sourceTarget;if(nt===null||nt.width!==et||tt&&nt.depthBuffer===!1){if(nt!==null)nt.dispose();this._sourceTarget=Ih(et,!0,tt)}return this._sourceTarget}_compileMaterial(tt){this._boxMesh.material=tt,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(tt,et,nt){let it=this._boxMesh,st=this._cubeCamera;it.material=nt,st.renderTarget=tt,st.activeMipmapLevel=et;let rt=tt.width>>et;tt.viewport.set(0,0,rt,rt),st.update(this._renderer,it),tt.viewport.set(0,0,tt.width,tt.height)}_textureToCubemap(tt){let et;if(tt.mapping===fr||tt.mapping===Vs){if(this._cubemapMaterial===null)this._cubemapMaterial=Lh();et=this._cubemapMaterial,et.uniforms.flipEnvMap.value=tt.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Ph();et=this._equirectMaterial}et.uniforms.envMap.value=tt,this._renderCube(this._getSourceTarget(),0,et)}_applyPMREM(tt){if(this._ggxMaterial===null)this._ggxMaterial=pm(),this._integrationMaterial=mm();let et=this._cubeSize,nt=tt.texture.mipmaps.length-1,it=this._ggxMaterial.uniforms;it.envMap.value=this._sourceTarget.texture;let st=this._integrationMaterial.uniforms;st.envMap.value=this._sourceTarget.texture,st.sourceLod.value=Math.log2(et/jh);for(let rt=0;rt<=nt;rt++){let at=_e.lodToRoughness(rt,nt);if(rt>nt-um)st.roughness.value=at,this._renderCube(tt,rt,this._integrationMaterial);else{let ot=at>0?Math.log2(et)+0.5*Math.log2(6/(Qh*Math.pow(at,4)))+0.5:0;it.roughness.value=at,it.lodBias.value=ot,this._renderCube(tt,rt,this._ggxMaterial)}}}_blur(tt,et){if(this._blurMaterial===null)this._blurMaterial=gm();let nt=this._blurMaterial,it=nt.uniforms,st=this._sourceTarget;it.sigma.value=Math.min(et,Math.PI)/Math.SQRT2,it.envMap.value=st.texture,this._renderCube(tt,0,nt),it.envMap.value=tt.texture,this._renderCube(st,0,nt)}}function Ih(tt,et,nt){return new ba(tt,{minFilter:O,generateMipmaps:et,type:A,colorSpace:L,depthBuffer:nt})}function br(tt,et,nt){return new p({name:tt,uniforms:et,vertexShader:Pn.cube_vert,fragmentShader:nt,side:T,blending:k,depthTest:!1,depthWrite:!1})}function pm(){return br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qh}u

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
	`)}function mm(){return br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jh}},`

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
	`)}function gm(){return br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hm}
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
	`)}function Ph(){return br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Lh(){return br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _m(tt){let et=new WeakMap,nt=new WeakMap,it=null;function st(ht,ft=!1){if(ht===null||ht===void 0)return null;if(ft)return at(ht);return rt(ht)}function rt(ht){if(ht&&ht.isTexture){let ft=ht.mapping;if(ft===na||ft===ia)if(et.has(ht)){let vt=et.get(ht).texture;return ot(vt,ht.mapping)}else{let vt=ht.image;if(vt&&vt.height>0){let St=new ba(vt.height);return St.fromEquirectangularTexture(tt,ht),et.set(ht,St),ht.addEventListener("dispose",ct),ot(St.texture,ht.mapping)}else return null}}return ht}function at(ht){if(ht&&ht.isTexture&&ht.isPMREMTexture!==!0){let ft=ht.mapping,vt=ft===na||ft===ia,St=ft===fr||ft===Vs;if(vt||St){let pt=nt.get(ht),mt=pt!==void 0?pt.texture.pmremVersion:0;if(ht.isRenderTargetTexture&&ht.pmremVersion!==mt){if(it===null)it=new _e(tt);return pt=vt?it.fromEquirectangular(ht,pt):it.fromCubemap(ht,pt),pt.texture.pmremVersion=ht.pmremVersion,nt.set(ht,pt),pt.texture}else if(pt!==void 0)return pt.texture;else{let Tt=ht.image;if(vt&&Tt&&Tt.height>0||St&&Tt&&lt(Tt)){if(it===null)it=new _e(tt);return pt=vt?it.fromEquirectangular(ht):it.fromCubemap(ht),pt.texture.pmremVersion=ht.pmremVersion,nt.set(ht,pt),ht.addEventListener("dispose",ut),pt.texture}else return null}}}return ht}function ot(ht,ft){if(ft===na)ht.mapping=fr;else if(ft===ia)ht.mapping=Vs;return ht}function lt(ht){let ft=0,vt=6;for(let St=0;St<vt;St++)if(ht[St]!==void 0)ft++;return ft===vt}function ct(ht){let ft=ht.target;ft.removeEventListener("dispose",ct);let vt=et.get(ft);if(vt!==void 0)et.delete(ft),vt.dispose()}function ut(ht){let ft=ht.target;ft.removeEventListener("dispose",ut);let vt=nt.get(ft);if(vt!==void 0)nt.delete(ft),vt.dispose()}function dt(){if(et=new WeakMap,nt=new WeakMap,it!==null)it.dispose(),it=null}return{get:st,dispose:dt}}function xm(tt){let et={};function nt(it){if(et[it]!==void 0)return et[it];let st=tt.getExtension(it);return et[it]=st,st}return{has:function(it){return nt(it)!==null},init:function(){nt("EXT_color_buffer_float"),nt("WEBGL_clip_cull_distance"),nt("OES_texture_float_linear"),nt("EXT_color_buffer_half_float"),nt("WEBGL_multisampled_render_to_texture"),nt("WEBGL_render_shared_exponent")},get:function(it){let st=nt(it);if(st===null)ps("WebGLRenderer: "+it+" extension not supported.");return st}}}function vm(tt,et,nt,it){let st={},rt=new WeakMap,at=new FinalizationRegistry((vt)=>delete st[vt]);function ot(vt){lt(vt.target)}function lt(vt){if(vt.index!==null)et.remove(vt.index);for(let pt in vt.attributes)et.remove(vt.attributes[pt]);vt.removeEventListener("dispose",ot),delete st[vt.id],at.unregister(vt);let St=rt.get(vt);if(St)et.remove(St),rt.delete(vt);if(it.releaseStatesOfGeometry(vt),vt.isInstancedBufferGeometry===!0)delete vt._maxInstanceCount;nt.memory.geometries--}function ct(vt,St){if(st[St.id]!==void 0)return St;return St.addEventListener("dispose",ot),st[St.id]=new WeakRef(St),at.register(St,St.id,St),nt.memory.geometries++,St}function ut(vt){let St=vt.attributes;for(let pt in St)et.update(St[pt],tt.ARRAY_BUFFER)}function dt(vt){let St=vt.index,pt=vt.attributes.position,mt=0;if(pt===void 0)return;let Tt=St!==null?St.array.length:pt.array.length/3-1,bt=new(pt.count>=65535?pa:fa)(Math.ceil(Tt/3)*6,1),Et=bt.array;if(St!==null){let gt=St.array;mt=St.version;for(let yt=0,Nt=0;yt<Tt;yt+=3){let kt=gt[yt+0],Lt=gt[yt+1],zt=gt[yt+2];Et[Nt++]=kt,Et[Nt++]=Lt,Et[Nt++]=Lt,Et[Nt++]=zt,Et[Nt++]=zt,Et[Nt++]=kt}}else{mt=pt.version;for(let gt=0,yt=0;gt<Tt;gt+=3){let Nt=gt+0,kt=gt+1,Lt=gt+2;Et[yt++]=Nt,Et[yt++]=kt,Et[yt++]=kt,Et[yt++]=Lt,Et[yt++]=Lt,Et[yt++]=Nt}}bt.version=mt;let It=rt.get(vt);if(It)et.remove(It);rt.set(vt,bt)}function ht(vt){let St=rt.get(vt);if(St){let pt=vt.index;if(pt!==null){if(St.version<pt.version)dt(vt)}}else dt(vt);return rt.get(vt)}function ft(){for(let vt in st){let St=st[vt].deref();if(St!==void 0)lt(St)}}return{get:ct,update:ut,getWireframeAttribute:ht,dispose:ft}}function ym(tt,et,nt){let it;function st(dt){it=dt}let rt,at;function ot(dt){rt=dt.type,at=dt.bytesPerElement}function lt(dt,ht){tt.drawElements(it,ht,rt,dt*at),nt.update(ht,it,1)}function ct(dt,ht,ft){if(ft===0)return;tt.drawElementsInstanced(it,ht,rt,dt*at,ft),nt.update(ht,it,ft)}function ut(dt,ht,ft){if(ft===0)return;et.get("WEBGL_multi_draw").multiDrawElementsWEBGL(it,ht,0,rt,dt,0,ft);let St=0;for(let pt=0;pt<ft;pt++)St+=ht[pt];nt.update(St,it,1)}this.setMode=st,this.setIndex=ot,this.render=lt,this.renderInstances=ct,this.renderMultiDraw=ut}function Sm(tt){let et={geometries:0,textures:0},nt={frame:0,calls:0,triangles:0,points:0,lines:0};function it(rt,at,ot){switch(nt.calls++,at){case tt.TRIANGLES:nt.triangles+=ot*(rt/3);break;case tt.LINES:nt.lines+=ot*(rt/2);break;case tt.LINE_STRIP:nt.lines+=ot*(rt-1);break;case tt.LINE_LOOP:nt.lines+=ot*rt;break;case tt.POINTS:nt.points+=ot*rt;break;default:Tn("WebGLInfo: Unknown draw mode:",at);break}}function st(){nt.calls=0,nt.triangles=0,nt.points=0,nt.lines=0}return{memory:et,render:nt,programs:null,autoReset:!0,reset:st,update:it}}function Mm(tt,et,nt){let it=new WeakMap,st=new a;function rt(at,ot,lt){let ct=at.morphTargetInfluences,ut=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,dt=ut!==void 0?ut.length:0,ht=it.get(ot);if(ht===void 0||ht.count!==dt){let Nt=function(){gt.dispose(),it.delete(ot),ot.removeEventListener("dispose",Nt)};if(ht!==void 0)ht.texture.dispose();let ft=ot.morphAttributes.position!==void 0,vt=ot.morphAttributes.normal!==void 0,St=ot.morphAttributes.color!==void 0,pt=ot.morphAttributes.position||[],mt=ot.morphAttributes.normal||[],Tt=ot.morphAttributes.color||[],At=0;if(ft===!0)At=1;if(vt===!0)At=2;if(St===!0)At=3;let bt=ot.attributes.position.count*At,Et=1;if(bt>et.maxTextureSize)Et=Math.ceil(bt/et.maxTextureSize),bt=et.maxTextureSize;let It=new Float32Array(bt*Et*4*dt),gt=new ua(It,bt,Et,dt);gt.type=qi,gt.needsUpdate=!0;let yt=At*4;for(let kt=0;kt<dt;kt++){let Lt=pt[kt],zt=mt[kt],Kt=Tt[kt],Rt=bt*Et*4*kt;for(let qt=0;qt<Lt.count;qt++){let Zt=qt*yt;if(ft===!0)st.fromBufferAttribute(Lt,qt),It[Rt+Zt+0]=st.x,It[Rt+Zt+1]=st.y,It[Rt+Zt+2]=st.z,It[Rt+Zt+3]=0;if(vt===!0)st.fromBufferAttribute(zt,qt),It[Rt+Zt+4]=st.x,It[Rt+Zt+5]=st.y,It[Rt+Zt+6]=st.z,It[Rt+Zt+7]=0;if(St===!0)st.fromBufferAttribute(Kt,qt),It[Rt+Zt+8]=st.x,It[Rt+Zt+9]=st.y,It[Rt+Zt+10]=st.z,It[Rt+Zt+11]=Kt.itemSize===4?st.w:1}}ht={count:dt,texture:gt,size:new n(bt,Et)},it.set(ot,ht),ot.addEventListener("dispose",Nt)}if(at.isInstancedMesh===!0&&at.morphTexture!==null)lt.getUniforms().setValue(tt,"morphTexture",at.morphTexture,nt);else{let ft=0;for(let St=0;St<ct.length;St++)ft+=ct[St];let vt=ot.morphTargetsRelative?1:1-ft;lt.getUniforms().setValue(tt,"morphTargetBaseInfluence",vt),lt.getUniforms().setValue(tt,"morphTargetInfluences",ct)}lt.getUniforms().setValue(tt,"morphTargetsTexture",ht.texture,nt),lt.getUniforms().setValue(tt,"morphTargetsTextureSize",ht.size)}return{update:rt}}function bm(tt,et,nt,it,st){let rt=new WeakMap;function at(ct){let ut=st.render.frame,dt=ct.geometry,ht=et.get(ct,dt);if(rt.get(ht)!==ut)et.update(ht),rt.set(ht,ut);if(ct.isInstancedMesh){if(ct.hasEventListener("dispose",lt)===!1)ct.addEventListener("dispose",lt);if(rt.get(ct)!==ut){if(nt.update(ct.instanceMatrix,tt.ARRAY_BUFFER),ct.instanceColor!==null)nt.update(ct.instanceColor,tt.ARRAY_BUFFER);rt.set(ct,ut)}}if(ct.isSkinnedMesh){let ft=ct.skeleton;if(rt.get(ft)!==ut)ft.update(),rt.set(ft,ut)}return ht}function ot(){rt=new WeakMap}function lt(ct){let ut=ct.target;if(ut.removeEventListener("dispose",lt),it.releaseStatesOfObject(ut),nt.remove(ut.instanceMatrix),ut.instanceColor!==null)nt.remove(ut.instanceColor)}return{update:at,dispose:ot}}var Tm={[xe]:"LINEAR_TONE_MAPPING",[ve]:"REINHARD_TONE_MAPPING",[ye]:"CINEON_TONE_MAPPING",[oe]:"ACES_FILMIC_TONE_MAPPING",[Me]:"AGX_TONE_MAPPING",[be]:"NEUTRAL_TONE_MAPPING",[Se]:"CUSTOM_TONE_MAPPING"};function Em(tt,et,nt,it,st,rt){let at=new M(et,nt,{type:tt,depthBuffer:st,stencilBuffer:rt,samples:it?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),ot=null,lt=null,ct=null,ut=new f;ut.setAttribute("position",new g([-1,3,0,-1,-1,0,3,-1,0],3)),ut.setAttribute("uv",new g([0,2,0,0,2,0],2));let dt=new Le({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),ht=new r(ut,dt),ft=new X(-1,1,1,-1,0,1),vt=null,St=null,pt=!1,mt,Tt=null,At=[],bt=!1;this.setSize=function(Et,It){if(at.setSize(Et,It),ot!==null)ot.setSize(Et,It);if(lt!==null)lt.setSize(Et,It);for(let gt=0;gt<At.length;gt++){let yt=At[gt];if(yt.setSize)yt.setSize(Et,It)}},this.setEffects=function(Et){At=Et,bt=At.length>0&&At[0].isRenderPass===!0;let{width:It,height:gt}=at;if(At.length>0&&ot===null)ot=new M(It,gt,{type:A,depthBuffer:!1,stencilBuffer:!1}),lt=new M(It,gt,{type:A,depthBuffer:!1,stencilBuffer:!1});let yt=st===!0&&At.some((Nt)=>Nt.needsDepthTexture===!0);if(yt!==(at.depthTexture!==null)){if(yt===!0&&ct===null){if(ct=new ss(It,gt),rt===!0)ct.format=is,ct.type=_s}at.dispose(),at.depthTexture=yt?ct:null,at.resolveDepthBuffer=yt,at.storeMultisampledDepthBuffer=yt}for(let Nt=0;Nt<At.length;Nt++){let kt=At[Nt];if(kt.setSize)kt.setSize(It,gt);if(yt&&kt.needsDepthTexture===!0&&kt.setDepthTexture)kt.setDepthTexture(ct)}},this.begin=function(Et,It){if(pt)return!1;if(Et.toneMapping===Ni&&At.length===0)return!1;if(Tt=It,It!==null){let{width:gt,height:yt}=It;if(at.width!==gt||at.height!==yt)this.setSize(gt,yt)}if(bt===!1)Et.setRenderTarget(at);return mt=Et.toneMapping,Et.toneMapping=Ni,!0},this.hasRenderPass=function(){return bt},this.end=function(Et,It){Et.toneMapping=mt,pt=!0;let gt=at,yt=ot;for(let Nt=0;Nt<At.length;Nt++){let kt=At[Nt];if(kt.enabled===!1)continue;if(kt.render(Et,yt,gt,It),kt.needsSwap!==!1)gt=yt,yt=yt===ot?lt:ot}if(vt!==Et.outputColorSpace||St!==Et.toneMapping){if(vt=Et.outputColorSpace,St=Et.toneMapping,dt.defines={},s.getTransfer(vt)===c)dt.defines.SRGB_TRANSFER="";let Nt=Tm[St];if(Nt)dt.defines[Nt]="";dt.needsUpdate=!0}dt.uniforms.tDiffuse.value=gt.texture,Et.setRenderTarget(Tt),Et.render(ht,ft),Tt=null,pt=!1},this.isCompositing=function(){return pt},this.dispose=function(){if(at.dispose(),ot!==null)ot.dispose();if(lt!==null)lt.dispose();ut.dispose(),dt.dispose()}}var tu=new x,eu=new ss(1,1),nu=new _a(1),iu=new ua,su=new il,ru=new ga,Nh=[],Dh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function Zs(tt,et,nt){let it=tt[0];if(it<=0||it>0)return tt;let st=et*nt,rt=Nh[st];if(rt===void 0)rt=new Float32Array(st),Nh[st]=rt;if(et!==0){it.toArray(rt,0);for(let at=1,ot=0;at!==et;++at)ot+=nt,tt[at].toArray(rt,ot)}return rt}function Kn(tt,et){if(tt.length!==et.length)return!1;for(let nt=0,it=tt.length;nt<it;nt++)if(tt[nt]!==et[nt])return!1;return!0}function Qn(tt,et){for(let nt=0,it=et.length;nt<it;nt++)tt[nt]=et[nt]}function Ta(tt,et){let nt=Dh[et];if(nt===void 0)nt=new Int32Array(et),Dh[et]=nt;for(let it=0;it!==et;++it)nt[it]=tt.allocateTextureUnit();return nt}function Am(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1f(this.addr,et),nt[0]=et}function wm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2f(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(Kn(nt,et))return;tt.uniform2fv(this.addr,et),Qn(nt,et)}}function Rm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3f(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else if(et.r!==void 0){if(nt[0]!==et.r||nt[1]!==et.g||nt[2]!==et.b)tt.uniform3f(this.addr,et.r,et.g,et.b),nt[0]=et.r,nt[1]=et.g,nt[2]=et.b}else{if(Kn(nt,et))return;tt.uniform3fv(this.addr,et),Qn(nt,et)}}function Cm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4f(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(Kn(nt,et))return;tt.uniform4fv(this.addr,et),Qn(nt,et)}}function Im(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(Kn(nt,et))return;tt.uniformMatrix2fv(this.addr,!1,et),Qn(nt,et)}else{if(Kn(nt,it))return;Oh.set(it),tt.uniformMatrix2fv(this.addr,!1,Oh),Qn(nt,it)}}function Pm(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(Kn(nt,et))return;tt.uniformMatrix3fv(this.addr,!1,et),Qn(nt,et)}else{if(Kn(nt,it))return;Fh.set(it),tt.uniformMatrix3fv(this.addr,!1,Fh),Qn(nt,it)}}function Lm(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(Kn(nt,et))return;tt.uniformMatrix4fv(this.addr,!1,et),Qn(nt,et)}else{if(Kn(nt,it))return;Uh.set(it),tt.uniformMatrix4fv(this.addr,!1,Uh),Qn(nt,it)}}function Nm(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1i(this.addr,et),nt[0]=et}function Dm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2i(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(Kn(nt,et))return;tt.uniform2iv(this.addr,et),Qn(nt,et)}}function Um(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3i(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else{if(Kn(nt,et))return;tt.uniform3iv(this.addr,et),Qn(nt,et)}}function Fm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4i(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(Kn(nt,et))return;tt.uniform4iv(this.addr,et),Qn(nt,et)}}function Om(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1ui(this.addr,et),nt[0]=et}function Bm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2ui(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(Kn(nt,et))return;tt.uniform2uiv(this.addr,et),Qn(nt,et)}}function zm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3ui(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else{if(Kn(nt,et))return;tt.uniform3uiv(this.addr,et),Qn(nt,et)}}function Gm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4ui(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(Kn(nt,et))return;tt.uniform4uiv(this.addr,et),Qn(nt,et)}}function Ea(tt){if(tt.version===0)tt.compareFunction=Zo,tt.needsUpdate=!0;return tt}function km(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;let rt;if(this.type===tt.SAMPLER_2D_SHADOW)rt=Ea(eu);else rt=tu;nt.setTexture2D(et||rt,st)}function Hm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;nt.setTexture3D(et||su,st)}function Wm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;let rt;if(this.type===tt.SAMPLER_CUBE_SHADOW)rt=Ea(nu);else rt=ru;nt.setTextureCube(et||rt,st)}function Vm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;nt.setTexture2DArray(et||iu,st)}function Xm(tt){switch(tt){case 5126:return Am;case 35664:return wm;case 35665:return Rm;case 35666:return Cm;case 35674:return Im;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Nm;case 35667:case 35671:return Dm;case 35668:case 35672:return Um;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Vm}}function qm(tt,et){tt.uniform1fv(this.addr,et)}function Ym(tt,et){let nt=Zs(et,this.size,2);tt.uniform2fv(this.addr,nt)}function Zm(tt,et){let nt=Zs(et,this.size,3);tt.uniform3fv(this.addr,nt)}function Jm(tt,et){let nt=Zs(et,this.size,4);tt.uniform4fv(this.addr,nt)}function $m(tt,et){let nt=Zs(et,this.size,4);tt.uniformMatrix2fv(this.addr,!1,nt)}function Km(tt,et){let nt=Zs(et,this.size,9);tt.uniformMatrix3fv(this.addr,!1,nt)}function Qm(tt,et){let nt=Zs(et,this.size,16);tt.uniformMatrix4fv(this.addr,!1,nt)}function jm(tt,et){tt.uniform1iv(this.addr,et)}function tg(tt,et){tt.uniform2iv(this.addr,et)}function eg(tt,et){tt.uniform3iv(this.addr,et)}function ng(tt,et){tt.uniform4iv(this.addr,et)}function ig(tt,et){tt.uniform1uiv(this.addr,et)}function sg(tt,et){tt.uniform2uiv(this.addr,et)}function rg(tt,et){tt.uniform3uiv(this.addr,et)}function ag(tt,et){tt.uniform4uiv(this.addr,et)}function og(tt,et,nt){let it=this.cache,st=et.length,rt=Ta(nt,st);if(!Kn(it,rt))tt.uniform1iv(this.addr,rt),Qn(it,rt);let at;if(this.type===tt.SAMPLER_2D_SHADOW)at=Ea(eu);else at=tu;for(let ot=0;ot!==st;++ot)nt.setTexture2D(et[ot]||at,rt[ot])}function lg(tt,et,nt){let it=this.cache,st=et.length,rt=Ta(nt,st);if(!Kn(it,rt))tt.uniform1iv(this.addr,rt),Qn(it,rt);for(let at=0;at!==st;++at)nt.setTexture3D(et[at]||su,rt[at])}function cg(tt,et,nt){let it=this.cache,st=et.length,rt=Ta(nt,st);if(!Kn(it,rt))tt.uniform1iv(this.addr,rt),Qn(it,rt);let at;if(this.type===tt.SAMPLER_CUBE_SHADOW)at=Ea(nu);else at=ru;for(let ot=0;ot!==st;++ot)nt.setTextureCube(et[ot]||at,rt[ot])}function hg(tt,et,nt){let it=this.cache,st=et.length,rt=Ta(nt,st);if(!Kn(it,rt))tt.uniform1iv(this.addr,rt),Qn(it,rt);for(let at=0;at!==st;++at)nt.setTexture2DArray(et[at]||iu,rt[at])}function ug(tt){switch(tt){case 5126:return qm;case 35664:return Ym;case 35665:return Zm;case 35666:return Jm;case 35674:return $m;case 35675:return Km;case 35676:return Qm;case 5124:case 35670:return jm;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}class au{constructor(tt,et,nt){this.id=tt,this.addr=nt,this.cache=[],this.type=et.type,this.setValue=Xm(et.type)}}class ou{constructor(tt,et,nt){this.id=tt,this.addr=nt,this.cache=[],this.type=et.type,this.size=et.size,this.setValue=ug(et.type)}}class lu{constructor(tt){this.id=tt,this.seq=[],this.map={}}setValue(tt,et,nt){let it=this.seq;for(let st=0,rt=it.length;st!==rt;++st){let at=it[st];at.setValue(tt,et[at.id],nt)}}}var yl=/(\w+)(\])?(\[|\.)?/g;function Bh(tt,et){tt.seq.push(et),tt.map[et.id]=et}function dg(tt,et,nt){let it=tt.name,st=it.length;yl.lastIndex=0;while(!0){let rt=yl.exec(it),at=yl.lastIndex,ot=rt[1],lt=rt[2]==="]",ct=rt[3];if(lt)ot=ot|0;if(ct===void 0||ct==="["&&at+2===st){Bh(nt,ct===void 0?new au(ot,tt,et):new ou(ot,tt,et));break}else{let dt=nt.map[ot];if(dt===void 0)dt=new lu(ot),Bh(nt,dt);nt=dt}}}class Mr{constructor(tt,et){this.seq=[],this.map={};let nt=tt.getProgramParameter(et,tt.ACTIVE_UNIFORMS);for(let rt=0;rt<nt;++rt){let at=tt.getActiveUniform(et,rt),ot=tt.getUniformLocation(et,at.name);dg(at,ot,this)}let it=[],st=[];for(let rt of this.seq)if(rt.type===tt.SAMPLER_2D_SHADOW||rt.type===tt.SAMPLER_CUBE_SHADOW||rt.type===tt.SAMPLER_2D_ARRAY_SHADOW)it.push(rt);else st.push(rt);if(it.length>0)this.seq=it.concat(st)}setValue(tt,et,nt,it){let st=this.map[et];if(st!==void 0)st.setValue(tt,nt,it)}setOptional(tt,et,nt){let it=et[nt];if(it!==void 0)this.setValue(tt,nt,it)}static upload(tt,et,nt,it){for(let st=0,rt=et.length;st!==rt;++st){let at=et[st],ot=nt[at.id];if(ot.needsUpdate!==!1)at.setValue(tt,ot.value,it)}}static seqWithValue(tt,et){let nt=[];for(let it=0,st=tt.length;it!==st;++it){let rt=tt[it];if(rt.id in et)nt.push(rt)}return nt}}function zh(tt,et,nt){let it=tt.createShader(et);return tt.shaderSource(it,nt),tt.compileShader(it),it}var fg=37297,pg=0;function mg(tt,et){let nt=tt.split(`
`),it=[],st=Math.max(et-6,0),rt=Math.min(et+6,nt.length);for(let at=st;at<rt;at++){let ot=at+1;it.push(`${ot===et?">":" "} ${ot}: ${nt[at]}`)}return it.join(`
`)}var Gh=new En;function gg(tt){s._getMatrix(Gh,s.workingColorSpace,tt);let et=`mat3( ${Gh.elements.map((nt)=>nt.toFixed(4))} )`;switch(s.getTransfer(tt)){case Xo:return[et,"LinearTransferOETF"];case c:return[et,"sRGBTransferOETF"];default:return _n("WebGLProgram: Unsupported color space: ",tt),[et,"LinearTransferOETF"]}}function kh(tt,et,nt){let it=tt.getShaderParameter(et,tt.COMPILE_STATUS),rt=(tt.getShaderInfoLog(et)||"").trim();if(it&&rt==="")return"";let at=/ERROR: 0:(\d+)/.exec(rt);if(at){let ot=parseInt(at[1]);return nt.toUpperCase()+`

`+rt+`

`+mg(tt.getShaderSource(et),ot)}else return rt}function _g(tt,et){let nt=gg(et);return[`vec4 ${tt}( vec4 value ) {`,`	return ${nt[1]}( vec4( ${nt[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var xg={[xe]:"Linear",[ve]:"Reinhard",[ye]:"Cineon",[oe]:"ACESFilmic",[Me]:"AgX",[be]:"Neutral",[Se]:"Custom"};function vg(tt,et){let nt=xg[et];if(nt===void 0)return _n("WebGLProgram: Unsupported toneMapping:",et),"vec3 "+tt+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+tt+"( vec3 color ) { return "+nt+"ToneMapping( color ); }"}var Ma=new e;function yg(){s.getLuminanceCoefficients(Ma);let tt=Ma.x.toFixed(4),et=Ma.y.toFixed(4),nt=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${tt}, ${et}, ${nt} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Sg(tt){return[tt.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",tt.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Mg(tt){let et=[];for(let nt in tt){let it=tt[nt];if(it===!1)continue;et.push("#define "+nt+" "+it)}return et.join(`
`)}function bg(tt,et){let nt={},it=tt.getProgramParameter(et,tt.ACTIVE_ATTRIBUTES);for(let st=0;st<it;st++){let rt=tt.getActiveAttrib(et,st),at=rt.name,ot=1;if(rt.type===tt.FLOAT_MAT2)ot=2;if(rt.type===tt.FLOAT_MAT3)ot=3;if(rt.type===tt.FLOAT_MAT4)ot=4;nt[at]={type:rt.type,location:tt.getAttribLocation(et,at),locationSize:ot}}return nt}function Sr(tt){return tt!==""}function Hh(tt,et){let nt=et.numSpotLightShadows+et.numSpotLightMaps-et.numSpotLightShadowsWithMaps;return tt.replace(/NUM_SUN_LIGHTS/g,et.numSunLights).replace(/NUM_DIR_LIGHTS/g,et.numDirLights).replace(/NUM_SPOT_LIGHTS/g,et.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,et.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,nt).replace(/NUM_RECT_AREA_LIGHTS/g,et.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,et.numPointLights).replace(/NUM_HEMI_LIGHTS/g,et.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,et.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,et.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,et.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,et.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,et.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,et.numLightProbeGrids)}function Wh(tt,et){return tt.replace(/NUM_CLIPPING_PLANES/g,et.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,et.numClippingPlanes-et.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(tt){return tt.replace(Tg,Eg)}function Eg(tt,et){let nt=Pn[et];if(nt===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+et+">");return Ml(nt)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(tt){return tt.replace(Ag,wg)}function wg(tt,et,nt,it){let st="";for(let rt=parseInt(et);rt<parseInt(nt);rt++)st+=it.replace(/\[\s*i\s*\]/g,"[ "+rt+" ]").replace(/UNROLLED_LOOP_INDEX/g,rt);return st}function Xh(tt){let et=`precision ${tt.precision} float;
	precision ${tt.precision} int;
	precision ${tt.precision} sampler2D;
	precision ${tt.precision} samplerCube;
	precision ${tt.precision} sampler3D;
	precision ${tt.precision} sampler2DArray;
	precision ${tt.precision} sampler2DShadow;
	precision ${tt.precision} samplerCubeShadow;
	precision ${tt.precision} sampler2DArrayShadow;
	precision ${tt.precision} isampler2D;
	precision ${tt.precision} isampler3D;
	precision ${tt.precision} isamplerCube;
	precision ${tt.precision} isampler2DArray;
	precision ${tt.precision} usampler2D;
	precision ${tt.precision} usampler3D;
	precision ${tt.precision} usamplerCube;
	precision ${tt.precision} usampler2DArray;
	`;if(tt.precision==="highp")et+=`
#define HIGH_PRECISION`;else if(tt.precision==="mediump")et+=`
#define MEDIUM_PRECISION`;else if(tt.precision==="lowp")et+=`
#define LOW_PRECISION`;return et}var Rg={[ur]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function Cg(tt){return Rg[tt.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ig={[Vs]:"ENVMAP_MODE_REFRACTION"};function Pg(tt){if(tt.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Ig[tt.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lg={[jc]:"ENVMAP_BLENDING_MULTIPLY",[th]:"ENVMAP_BLENDING_MIX",[eh]:"ENVMAP_BLENDING_ADD"};function Ng(tt){if(tt.envMap===!1)return"ENVMAP_BLENDING_NONE";return Lg[tt.combine]||"ENVMAP_BLENDING_NONE"}function Dg(tt,et,nt,it){let st=tt.getContext(),{defines:rt,vertexShader:at,fragmentShader:ot}=nt,lt=Cg(nt),ct=nt.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",ut=Pg(nt),dt=Ng(nt),ht=Sg(nt),ft=Mg(rt),vt=st.createProgram(),St,pt,mt=nt.glslVersion?"#version "+nt.glslVersion+`
`:"";if(nt.isRawShaderMaterial){if(St=["#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,ft].filter(Sr).join(`
`),St.length>0)St+=`
`;if(pt=["#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,ft].filter(Sr).join(`
`),pt.length>0)pt+=`
`}else St=[Xh(nt),"#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,ft,nt.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",nt.batching?"#define USE_BATCHING":"",nt.batchingColor?"#define USE_BATCHING_COLOR":"",nt.instancing?"#define USE_INSTANCING":"",nt.instancingColor?"#define USE_INSTANCING_COLOR":"",nt.instancingMorph?"#define USE_INSTANCING_MORPH":"",nt.useFog&&nt.fog?"#define USE_FOG":"",nt.useFog&&nt.fogExp2?"#define FOG_EXP2":"",nt.map?"#define USE_MAP":"",nt.envMap?"#define USE_ENVMAP":"",nt.envMap?"#define "+ut:"",nt.lightMap?"#define USE_LIGHTMAP":"",nt.aoMap?"#define USE_AOMAP":"",nt.bumpMap?"#define USE_BUMPMAP":"",nt.normalMap?"#define USE_NORMALMAP":"",nt.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",nt.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",nt.displacementMap?"#define USE_DISPLACEMENTMAP":"",nt.emissiveMap?"#define USE_EMISSIVEMAP":"",nt.anisotropy?"#define USE_ANISOTROPY":"",nt.anisotropyMap?"#define USE_ANISOTROPYMAP":"",nt.clearcoatMap?"#define USE_CLEARCOATMAP":"",nt.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",nt.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",nt.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",nt.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",nt.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",nt.specularMap?"#define USE_SPECULARMAP":"",nt.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",nt.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",nt.roughnessMap?"#define USE_ROUGHNESSMAP":"",nt.metalnessMap?"#define USE_METALNESSMAP":"",nt.alphaMap?"#define USE_ALPHAMAP":"",nt.alphaHash?"#define USE_ALPHAHASH":"",nt.transmission?"#define USE_TRANSMISSION":"",nt.transmissionMap?"#define USE_TRANSMISSIONMAP":"",nt.thicknessMap?"#define USE_THICKNESSMAP":"",nt.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",nt.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",nt.mapUv?"#define MAP_UV "+nt.mapUv:"",nt.alphaMapUv?"#define ALPHAMAP_UV "+nt.alphaMapUv:"",nt.lightMapUv?"#define LIGHTMAP_UV "+nt.lightMapUv:"",nt.aoMapUv?"#define AOMAP_UV "+nt.aoMapUv:"",nt.emissiveMapUv?"#define EMISSIVEMAP_UV "+nt.emissiveMapUv:"",nt.bumpMapUv?"#define BUMPMAP_UV "+nt.bumpMapUv:"",nt.normalMapUv?"#define NORMALMAP_UV "+nt.normalMapUv:"",nt.displacementMapUv?"#define DISPLACEMENTMAP_UV "+nt.displacementMapUv:"",nt.metalnessMapUv?"#define METALNESSMAP_UV "+nt.metalnessMapUv:"",nt.roughnessMapUv?"#define ROUGHNESSMAP_UV "+nt.roughnessMapUv:"",nt.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+nt.anisotropyMapUv:"",nt.clearcoatMapUv?"#define CLEARCOATMAP_UV "+nt.clearcoatMapUv:"",nt.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+nt.clearcoatNormalMapUv:"",nt.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+nt.clearcoatRoughnessMapUv:"",nt.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+nt.diffuseRoughnessMapUv:"",nt.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+nt.iridescenceMapUv:"",nt.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+nt.iridescenceThicknessMapUv:"",nt.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+nt.sheenColorMapUv:"",nt.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+nt.sheenRoughnessMapUv:"",nt.specularMapUv?"#define SPECULARMAP_UV "+nt.specularMapUv:"",nt.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+nt.specularColorMapUv:"",nt.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+nt.specularIntensityMapUv:"",nt.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+nt.transmissionMapUv:"",nt.thicknessMapUv?"#define THICKNESSMAP_UV "+nt.thicknessMapUv:"",nt.vertexTangents&&nt.flatShading===!1?"#define USE_TANGENT":"",nt.vertexNormals?"#define HAS_NORMAL":"",nt.vertexColors?"#define USE_COLOR":"",nt.vertexAlphas?"#define USE_COLOR_ALPHA":"",nt.vertexUv1s?"#define USE_UV1":"",nt.vertexUv2s?"#define USE_UV2":"",nt.vertexUv3s?"#define USE_UV3":"",nt.pointsUvs?"#define USE_POINTS_UV":"",nt.flatShading?"#define FLAT_SHADED":"",nt.skinning?"#define USE_SKINNING":"",nt.morphTargets?"#define USE_MORPHTARGETS":"",nt.morphNormals&&nt.flatShading===!1?"#define USE_MORPHNORMALS":"",nt.morphColors?"#define USE_MORPHCOLORS":"",nt.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+nt.morphTextureStride:"",nt.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+nt.morphTargetsCount:"",nt.doubleSided?"#define DOUBLE_SIDED":"",nt.flipSided?"#define FLIP_SIDED":"",nt.shadowMapEnabled?"#define USE_SHADOWMAP":"",nt.shadowMapEnabled?"#define "+lt:"",nt.sizeAttenuation?"#define USE_SIZEATTENUATION":"",nt.numLightProbes>0?"#define USE_LIGHT_PROBES":"",nt.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",nt.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),pt=[Xh(nt),"#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,ft,nt.useFog&&nt.fog?"#define USE_FOG":"",nt.useFog&&nt.fogExp2?"#define FOG_EXP2":"",nt.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",nt.map?"#define USE_MAP":"",nt.matcap?"#define USE_MATCAP":"",nt.envMap?"#define USE_ENVMAP":"",nt.envMap?"#define "+ct:"",nt.envMap?"#define "+ut:"",nt.envMap?"#define "+dt:"",nt.envMapPMREM?"#define ENVMAP_MAX_LOD "+nt.envMapMaxLod+".0":"",nt.envMapPMREM?"#define ENVMAP_SIZE "+nt.envMapSize+".0":"",nt.lightMap?"#define USE_LIGHTMAP":"",nt.aoMap?"#define USE_AOMAP":"",nt.bumpMap?"#define USE_BUMPMAP":"",nt.normalMap?"#define USE_NORMALMAP":"",nt.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",nt.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",nt.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",nt.emissiveMap?"#define USE_EMISSIVEMAP":"",nt.anisotropy?"#define USE_ANISOTROPY":"",nt.anisotropyMap?"#define USE_ANISOTROPYMAP":"",nt.clearcoat?"#define USE_CLEARCOAT":"",nt.clearcoatMap?"#define USE_CLEARCOATMAP":"",nt.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",nt.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",nt.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",nt.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",nt.dispersion?"#define USE_DISPERSION":"",nt.retroreflection?"#define USE_RETROREFLECTION":"",nt.iridescence?"#define USE_IRIDESCENCE":"",nt.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",nt.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",nt.specularMap?"#define USE_SPECULARMAP":"",nt.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",nt.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",nt.roughnessMap?"#define USE_ROUGHNESSMAP":"",nt.metalnessMap?"#define USE_METALNESSMAP":"",nt.alphaMap?"#define USE_ALPHAMAP":"",nt.alphaTest?"#define USE_ALPHATEST":"",nt.alphaHash?"#define USE_ALPHAHASH":"",nt.sheen?"#define USE_SHEEN":"",nt.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",nt.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",nt.transmission?"#define USE_TRANSMISSION":"",nt.transmissionMap?"#define USE_TRANSMISSIONMAP":"",nt.thicknessMap?"#define USE_THICKNESSMAP":"",nt.vertexTangents&&nt.flatShading===!1?"#define USE_TANGENT":"",nt.vertexColors||nt.instancingColor?"#define USE_COLOR":"",nt.vertexAlphas||nt.batchingColor?"#define USE_COLOR_ALPHA":"",nt.vertexUv1s?"#define USE_UV1":"",nt.vertexUv2s?"#define USE_UV2":"",nt.vertexUv3s?"#define USE_UV3":"",nt.pointsUvs?"#define USE_POINTS_UV":"",nt.gradientMap?"#define USE_GRADIENTMAP":"",nt.flatShading?"#define FLAT_SHADED":"",nt.doubleSided?"#define DOUBLE_SIDED":"",nt.flipSided?"#define FLIP_SIDED":"",nt.shadowMapEnabled?"#define USE_SHADOWMAP":"",nt.shadowMapEnabled?"#define "+lt:"",nt.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",nt.numLightProbes>0?"#define USE_LIGHT_PROBES":"",nt.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",nt.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",nt.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",nt.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",nt.toneMapping!==Ni?"#define TONE_MAPPING":"",nt.toneMapping!==Ni?Pn.tonemapping_pars_fragment:"",nt.toneMapping!==Ni?vg("toneMapping",nt.toneMapping):"",nt.dithering?"#define DITHERING":"",nt.opaque?"#define OPAQUE":"",Pn.colorspace_pars_fragment,_g("linearToOutputTexel",nt.outputColorSpace),yg(),nt.useDepthPacking?"#define DEPTH_PACKING "+nt.depthPacking:"",`
`].filter(Sr).join(`
`);if(at=Ml(at),at=Hh(at,nt),at=Wh(at,nt),ot=Ml(ot),ot=Hh(ot,nt),ot=Wh(ot,nt),at=Vh(at),ot=Vh(ot),nt.isRawShaderMaterial!==!0)mt=`#version 300 es
`,St=[ht,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+St,pt=["#define varying in",nt.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",nt.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+pt;let Tt=mt+St+at,At=mt+pt+ot,bt=zh(st,st.VERTEX_SHADER,Tt),Et=zh(st,st.FRAGMENT_SHADER,At);if(st.attachShader(vt,bt),st.attachShader(vt,Et),nt.index0AttributeName!==void 0)st.bindAttribLocation(vt,0,nt.index0AttributeName);else if(nt.hasPositionAttribute===!0)st.bindAttribLocation(vt,0,"position");st.linkProgram(vt);function It(kt){if(tt.debug.checkShaderErrors){let Lt=st.getProgramInfoLog(vt)||"",zt=st.getShaderInfoLog(bt)||"",Kt=st.getShaderInfoLog(Et)||"",Rt=Lt.trim(),qt=zt.trim(),Zt=Kt.trim(),Ot=!0,Qe=!0;if(st.getProgramParameter(vt,st.LINK_STATUS)===!1)if(Ot=!1,typeof tt.debug.onShaderError==="function")tt.debug.onShaderError(st,vt,bt,Et);else{let Wt=kh(st,bt,"vertex"),$t=kh(st,Et,"fragment");Tn("WebGLProgram: Shader Error "+st.getError()+" - VALIDATE_STATUS "+st.getProgramParameter(vt,st.VALIDATE_STATUS)+`

Material Name: `+kt.name+`
Material Type: `+kt.type+`

Program Info Log: `+Rt+`
`+Wt+`
`+$t)}else if(Rt!=="")_n("WebGLProgram: Program Info Log:",Rt);else if(qt===""||Zt==="")Qe=!1;if(Qe)kt.diagnostics={runnable:Ot,programLog:Rt,vertexShader:{log:qt,prefix:St},fragmentShader:{log:Zt,prefix:pt}}}st.deleteShader(bt),st.deleteShader(Et),gt=new Mr(st,vt),yt=bg(st,vt)}let gt;this.getUniforms=function(){if(gt===void 0)It(this);return gt};let yt;this.getAttributes=function(){if(yt===void 0)It(this);return yt};let Nt=nt.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(Nt===!1)Nt=st.getProgramParameter(vt,fg);return Nt},this.destroy=function(){it.releaseStatesOfProgram(this),st.deleteProgram(vt),this.program=void 0},this.type=nt.shaderType,this.name=nt.shaderName,this.id=pg++,this.cacheKey=et,this.usedTimes=1,this.program=vt,this.vertexShader=bt,this.fragmentShader=Et,this}var Ug=0;class cu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(tt,et,nt){let it=this._getShaderCacheForMaterial(tt);if(it.has(et)===!1)it.add(et),et.usedTimes++;if(it.has(nt)===!1)it.add(nt),nt.usedTimes++;return this}remove(tt){let et=this.materialCache.get(tt);for(let nt of et)if(nt.usedTimes--,nt.usedTimes===0)this.shaderCache.delete(nt.code);return this.materialCache.delete(tt),this}getVertexShaderStage(tt){return this._getShaderStage(tt.vertexShader)}getFragmentShaderStage(tt){return this._getShaderStage(tt.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(tt){let et=this.materialCache,nt=et.get(tt);if(nt===void 0)nt=new Set,et.set(tt,nt);return nt}_getShaderStage(tt){let et=this.shaderCache,nt=et.get(tt);if(nt===void 0)nt=new hu(tt),et.set(tt,nt);return nt}}class hu{constructor(tt){this.id=Ug++,this.code=tt,this.usedTimes=0}}function Fg(tt){return tt===xs||tt===la||tt===ca}function Og(tt,et,nt,it,st,rt){let at=new da,ot=new cu,lt=new Set,ct=[],ut=new Map,dt=it.logarithmicDepthBuffer,ht={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function ft(gt){if(lt.add(gt),gt===0)return"uv";return`uv${gt}`}function vt(gt,yt,Nt,kt,Lt,zt){let Kt=kt.fog,Rt=Lt.geometry,qt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?kt.environment:null,Zt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,Ot=et.get(gt.envMap||qt,Zt),Qe=ht[gt.type],Wt=it.precision;if(gt.precision!==null){if(Wt=it.getMaxPrecision(gt.precision),Wt!==gt.precision)_n("WebGLProgram.getParameters:",gt.precision,"not supported, using",Wt,"instead.")}let $t=Rt.morphAttributes.position||Rt.morphAttributes.normal||Rt.morphAttributes.color,Je=$t!==void 0?$t.length:0,mn=0;if(Rt.morphAttributes.position!==void 0)mn=1;if(Rt.morphAttributes.normal!==void 0)mn=2;if(Rt.morphAttributes.color!==void 0)mn=3;let Yt,ae,fn,Sn;if(Qe){let ln=Fi[Qe];Yt=ln.vertexShader,ae=ln.fragmentShader}else{Yt=gt.vertexShader,ae=gt.fragmentShader;let ln=ot.getVertexShaderStage(gt),Gn=ot.getFragmentShaderStage(gt);ot.update(gt,ln,Gn),fn=ln.id,Sn=Gn.id}let Mn=tt.getRenderTarget(),pn=tt.state.buffers.depth.getReversed(),Bn=Lt.isInstancedMesh===!0,Ln=Lt.isBatchedMesh===!0,Rn=!!gt.map,Vn=!!gt.matcap,Un=!!Ot,qn=Un&&Ot.isPMREMTexture===!0,Yn=!!gt.aoMap,fi=!!gt.lightMap,gi=!!gt.bumpMap&&gt.wireframe===!1,Zn=!!gt.normalMap,si=!!gt.displacementMap,pi=!!gt.emissiveMap,mi=!!gt.metalnessMap,Mi=!!gt.roughnessMap,Pt=gt.anisotropy>0,bi=gt.clearcoat>0,zn=gt.diffuseRoughness>0,jn=gt.dispersion>0,rn=gt.retroreflectivity>0,Hn=gt.iridescence>0,bn=gt.sheen>0,An=gt.transmission>0,ri=Pt&&!!gt.anisotropyMap,Mt=bi&&!!gt.clearcoatMap,_t=bi&&!!gt.clearcoatNormalMap,Dt=bi&&!!gt.clearcoatRoughnessMap,Qt=zn&&!!gt.diffuseRoughnessMap,Jt=Hn&&!!gt.iridescenceMap,Ke=Hn&&!!gt.iridescenceThicknessMap,en=bn&&!!gt.sheenColorMap,Gt=bn&&!!gt.sheenRoughnessMap,Xt=!!gt.specularMap,je=!!gt.specularColorMap,wt=!!gt.specularIntensityMap,Vt=An&&!!gt.transmissionMap,Ht=An&&!!gt.thicknessMap,jt=!!gt.gradientMap,$e=!!gt.alphaMap,sn=gt.alphaTest>0,vn=!!gt.alphaHash,xn=!!gt.extensions,on=Ni;if(gt.toneMapped){if(Mn===null||Mn.isXRRenderTarget===!0)on=tt.toneMapping}let yn=qn?Ot.isCompressedCubeTexture?Ot.image[0].mipmaps:Ot.mipmaps:null,Cn={shaderID:Qe,shaderType:gt.type,shaderName:gt.name,vertexShader:Yt,fragmentShader:ae,defines:gt.defines,customVertexShaderID:fn,customFragmentShaderID:Sn,isRawShaderMaterial:gt.isRawShaderMaterial===!0,glslVersion:gt.glslVersion,precision:Wt,batching:Ln,batchingColor:Ln&&Lt._colorsTexture!==null,instancing:Bn,instancingColor:Bn&&Lt.instanceColor!==null,instancingMorph:Bn&&Lt.morphTexture!==null,outputColorSpace:Mn===null?tt.outputColorSpace:Mn.isXRRenderTarget===!0?Mn.texture.colorSpace:s.workingColorSpace,alphaToCoverage:!!gt.alphaToCoverage,map:Rn,matcap:Vn,envMap:Un,envMapMode:Un&&Ot.mapping,envMapPMREM:qn,envMapMaxLod:qn?yn.length-1:null,envMapSize:qn?yn[0].width:null,aoMap:Yn,lightMap:fi,bumpMap:gi,normalMap:Zn,displacementMap:si,emissiveMap:pi,normalMapObjectSpace:Zn&&gt.normalMapType===ch,normalMapTangentSpace:Zn&&gt.normalMapType===Vo,packedNormalMap:Zn&&gt.normalMapType===Vo&&Fg(gt.normalMap.format),metalnessMap:mi,roughnessMap:Mi,anisotropy:Pt,anisotropyMap:ri,clearcoat:bi,clearcoatMap:Mt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Dt,diffuseRoughness:zn,diffuseRoughnessMap:Qt,dispersion:jn,retroreflection:rn,iridescence:Hn,iridescenceMap:Jt,iridescenceThicknessMap:Ke,sheen:bn,sheenColorMap:en,sheenRoughnessMap:Gt,specularMap:Xt,specularColorMap:je,specularIntensityMap:wt,transmission:An,transmissionMap:Vt,thicknessMap:Ht,gradientMap:jt,opaque:gt.transparent===!1&&gt.blending===dr&&gt.alphaToCoverage===!1,alphaMap:$e,alphaTest:sn,alphaHash:vn,combine:gt.combine,mapUv:Rn&&ft(gt.map.channel),aoMapUv:Yn&&ft(gt.aoMap.channel),lightMapUv:fi&&ft(gt.lightMap.channel),bumpMapUv:gi&&ft(gt.bumpMap.channel),normalMapUv:Zn&&ft(gt.normalMap.channel),displacementMapUv:si&&ft(gt.displacementMap.channel),emissiveMapUv:pi&&ft(gt.emissiveMap.channel),metalnessMapUv:mi&&ft(gt.metalnessMap.channel),roughnessMapUv:Mi&&ft(gt.roughnessMap.channel),anisotropyMapUv:ri&&ft(gt.anisotropyMap.channel),clearcoatMapUv:Mt&&ft(gt.clearcoatMap.channel),clearcoatNormalMapUv:_t&&ft(gt.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&ft(gt.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Qt&&ft(gt.diffuseRoughnessMap.channel),iridescenceMapUv:Jt&&ft(gt.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&ft(gt.iridescenceThicknessMap.channel),sheenColorMapUv:en&&ft(gt.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&ft(gt.sheenRoughnessMap.channel),specularMapUv:Xt&&ft(gt.specularMap.channel),specularColorMapUv:je&&ft(gt.specularColorMap.channel),specularIntensityMapUv:wt&&ft(gt.specularIntensityMap.channel),transmissionMapUv:Vt&&ft(gt.transmissionMap.channel),thicknessMapUv:Ht&&ft(gt.thicknessMap.channel),alphaMapUv:$e&&ft(gt.alphaMap.channel),vertexTangents:!!Rt.attributes.tangent&&(Zn||Pt),vertexNormals:!!Rt.attributes.normal,vertexColors:gt.vertexColors,vertexAlphas:gt.vertexColors===!0&&!!Rt.attributes.color&&Rt.attributes.color.itemSize===4,pointsUvs:Lt.isPoints===!0&&!!Rt.attributes.uv&&(Rn||$e),fog:!!Kt,useFog:gt.fog===!0,fogExp2:!!Kt&&Kt.isFogExp2,flatShading:gt.wireframe===!1&&(gt.flatShading===!0||Rt.attributes.normal===void 0&&Zn===!1&&(gt.isMeshLambertMaterial||gt.isMeshPhongMaterial||gt.isMeshStandardMaterial||gt.isMeshPhysicalMaterial)),sizeAttenuation:gt.sizeAttenuation===!0,logarithmicDepthBuffer:dt,reversedDepthBuffer:pn,skinning:Lt.isSkinnedMesh===!0,hasPositionAttribute:Rt.attributes.position!==void 0,morphTargets:Rt.morphAttributes.position!==void 0,morphNormals:Rt.morphAttributes.normal!==void 0,morphColors:Rt.morphAttributes.color!==void 0,morphTargetsCount:Je,morphTextureStride:mn,numSunLights:yt.sun.length,numDirLights:yt.directional.length,numPointLights:yt.point.length,numSpotLights:yt.spot.length,numSpotLightMaps:yt.spotLightMap.length,numRectAreaLights:yt.rectArea.length,numHemiLights:yt.hemi.length,numSunLightShadows:yt.sunShadowMap.length,numDirLightShadows:yt.directionalShadowMap.length,numPointLightShadows:yt.pointShadowMap.length,numSpotLightShadows:yt.spotShadowMap.length,numSpotLightShadowsWithMaps:yt.numSpotLightShadowsWithMaps,numLightProbes:yt.numLightProbes,numLightProbeGrids:zt.filter((ln)=>ln.texture!==null).length,numClippingPlanes:rt.numPlanes,numClipIntersection:rt.numIntersection,dithering:gt.dithering,shadowMapEnabled:tt.shadowMap.enabled&&Nt.length>0,shadowMapType:tt.shadowMap.type,toneMapping:on,decodeVideoTexture:Rn&&gt.map.isVideoTexture===!0&&s.getTransfer(gt.map.colorSpace)===c,decodeVideoTextureEmissive:pi&&gt.emissiveMap.isVideoTexture===!0&&s.getTransfer(gt.emissiveMap.colorSpace)===c,premultipliedAlpha:gt.premultipliedAlpha,doubleSided:gt.side===S,flipSided:gt.side===T,useDepthPacking:gt.depthPacking>=0,depthPacking:gt.depthPacking||0,index0AttributeName:gt.index0AttributeName,extensionClipCullDistance:xn&&gt.extensions.clipCullDistance===!0&&nt.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xn&&gt.extensions.multiDraw===!0||Ln)&&nt.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:nt.has("KHR_parallel_shader_compile"),customProgramCacheKey:gt.customProgramCacheKey()};return Cn.vertexUv1s=lt.has(1),Cn.vertexUv2s=lt.has(2),Cn.vertexUv3s=lt.has(3),lt.clear(),Cn}function St(gt){let yt=[];if(gt.shaderID)yt.push(gt.shaderID);else yt.push(gt.customVertexShaderID),yt.push(gt.customFragmentShaderID);if(gt.defines!==void 0)for(let Nt in gt.defines)yt.push(Nt),yt.push(gt.defines[Nt]);if(gt.isRawShaderMaterial===!1)pt(yt,gt),mt(yt,gt),yt.push(tt.outputColorSpace);return yt.push(gt.customProgramCacheKey),yt.join()}function pt(gt,yt){gt.push(yt.precision),gt.push(yt.outputColorSpace),gt.push(yt.envMapMode),gt.push(yt.envMapPMREM),gt.push(yt.envMapMaxLod),gt.push(yt.envMapSize),gt.push(yt.mapUv),gt.push(yt.alphaMapUv),gt.push(yt.lightMapUv),gt.push(yt.aoMapUv),gt.push(yt.bumpMapUv),gt.push(yt.normalMapUv),gt.push(yt.displacementMapUv),gt.push(yt.emissiveMapUv),gt.push(yt.metalnessMapUv),gt.push(yt.roughnessMapUv),gt.push(yt.anisotropyMapUv),gt.push(yt.clearcoatMapUv),gt.push(yt.clearcoatNormalMapUv),gt.push(yt.clearcoatRoughnessMapUv),gt.push(yt.diffuseRoughnessMapUv),gt.push(yt.iridescenceMapUv),gt.push(yt.iridescenceThicknessMapUv),gt.push(yt.sheenColorMapUv),gt.push(yt.sheenRoughnessMapUv),gt.push(yt.specularMapUv),gt.push(yt.specularColorMapUv),gt.push(yt.specularIntensityMapUv),gt.push(yt.transmissionMapUv),gt.push(yt.thicknessMapUv),gt.push(yt.combine),gt.push(yt.fogExp2),gt.push(yt.sizeAttenuation),gt.push(yt.morphTargetsCount),gt.push(yt.numSunLights),gt.push(yt.numDirLights),gt.push(yt.numPointLights),gt.push(yt.numSpotLights),gt.push(yt.numSpotLightMaps),gt.push(yt.numHemiLights),gt.push(yt.numRectAreaLights),gt.push(yt.numSunLightShadows),gt.push(yt.numDirLightShadows),gt.push(yt.numPointLightShadows),gt.push(yt.numSpotLightShadows),gt.push(yt.numSpotLightShadowsWithMaps),gt.push(yt.numLightProbes),gt.push(yt.numLightProbeGrids),gt.push(yt.shadowMapType),gt.push(yt.toneMapping),gt.push(yt.numClippingPlanes),gt.push(yt.numClipIntersection),gt.push(yt.depthPacking)}function mt(gt,yt){if(at.disableAll(),yt.instancing)at.enable(0);if(yt.instancingColor)at.enable(1);if(yt.instancingMorph)at.enable(2);if(yt.matcap)at.enable(3);if(yt.envMap)at.enable(4);if(yt.normalMapObjectSpace)at.enable(5);if(yt.normalMapTangentSpace)at.enable(6);if(yt.clearcoat)at.enable(7);if(yt.iridescence)at.enable(8);if(yt.alphaTest)at.enable(9);if(yt.vertexColors)at.enable(10);if(yt.vertexAlphas)at.enable(11);if(yt.vertexUv1s)at.enable(12);if(yt.vertexUv2s)at.enable(13);if(yt.vertexUv3s)at.enable(14);if(yt.vertexTangents)at.enable(15);if(yt.anisotropy)at.enable(16);if(yt.alphaHash)at.enable(17);if(yt.batching)at.enable(18);if(yt.dispersion)at.enable(19);if(yt.retroreflection)at.enable(24);if(yt.diffuseRoughness)at.enable(25);if(yt.batchingColor)at.enable(20);if(yt.gradientMap)at.enable(21);if(yt.packedNormalMap)at.enable(22);if(yt.vertexNormals)at.enable(23);if(gt.push(at.mask),at.disableAll(),yt.fog)at.enable(0);if(yt.useFog)at.enable(1);if(yt.flatShading)at.enable(2);if(yt.logarithmicDepthBuffer)at.enable(3);if(yt.reversedDepthBuffer)at.enable(4);if(yt.skinning)at.enable(5);if(yt.morphTargets)at.enable(6);if(yt.morphNormals)at.enable(7);if(yt.morphColors)at.enable(8);if(yt.premultipliedAlpha)at.enable(9);if(yt.shadowMapEnabled)at.enable(10);if(yt.doubleSided)at.enable(11);if(yt.flipSided)at.enable(12);if(yt.useDepthPacking)at.enable(13);if(yt.dithering)at.enable(14);if(yt.transmission)at.enable(15);if(yt.sheen)at.enable(16);if(yt.opaque)at.enable(17);if(yt.pointsUvs)at.enable(18);if(yt.decodeVideoTexture)at.enable(19);if(yt.decodeVideoTextureEmissive)at.enable(20);if(yt.alphaToCoverage)at.enable(21);if(yt.numLightProbeGrids>0)at.enable(22);if(yt.hasPositionAttribute)at.enable(23);gt.push(at.mask)}function Tt(gt){let yt=ht[gt.type],Nt;if(yt){let kt=Fi[yt];Nt=H.clone(kt.uniforms)}else Nt=gt.uniforms;return Nt}function At(gt,yt){let Nt=ut.get(yt);if(Nt!==void 0)++Nt.usedTimes;else Nt=new Dg(tt,yt,gt,st),ct.push(Nt),ut.set(yt,Nt);return Nt}function bt(gt){if(--gt.usedTimes===0){let yt=ct.indexOf(gt);ct[yt]=ct[ct.length-1],ct.pop(),ut.delete(gt.cacheKey),gt.destroy()}}function Et(gt){ot.remove(gt)}function It(){ot.dispose()}return{getParameters:vt,getProgramCacheKey:St,getUniforms:Tt,acquireProgram:At,releaseProgram:bt,releaseShaderCache:Et,programs:ct,dispose:It}}function Bg(){let tt=new WeakMap;function et(at){return tt.has(at)}function nt(at){let ot=tt.get(at);if(ot===void 0)ot={},tt.set(at,ot);return ot}function it(at){tt.delete(at)}function st(at,ot,lt){tt.get(at)[ot]=lt}function rt(){tt=new WeakMap}return{has:et,get:nt,remove:it,update:st,dispose:rt}}function zg(tt,et){if(tt.groupOrder!==et.groupOrder)return tt.groupOrder-et.groupOrder;else if(tt.renderOrder!==et.renderOrder)return tt.renderOrder-et.renderOrder;else if(tt.material.id!==et.material.id)return tt.material.id-et.material.id;else if(tt.materialVariant!==et.materialVariant)return tt.materialVariant-et.materialVariant;else if(tt.z!==et.z)return tt.z-et.z;else return tt.id-et.id}function qh(tt,et){if(tt.groupOrder!==et.groupOrder)return tt.groupOrder-et.groupOrder;else if(tt.renderOrder!==et.renderOrder)return tt.renderOrder-et.renderOrder;else if(tt.z!==et.z)return et.z-tt.z;else return tt.id-et.id}function Yh(){let tt=[],et=0,nt=[],it=[],st=[];function rt(){et=0,nt.length=0,it.length=0,st.length=0}function at(ht){let ft=0;if(ht.isInstancedMesh)ft+=2;if(ht.isSkinnedMesh)ft+=1;return ft}function ot(ht,ft,vt,St,pt,mt){let Tt=tt[et];if(Tt===void 0)Tt={id:ht.id,object:ht,geometry:ft,material:vt,materialVariant:at(ht),groupOrder:St,renderOrder:ht.renderOrder,z:pt,group:mt},tt[et]=Tt;else Tt.id=ht.id,Tt.object=ht,Tt.geometry=ft,Tt.material=vt,Tt.materialVariant=at(ht),Tt.groupOrder=St,Tt.renderOrder=ht.renderOrder,Tt.z=pt,Tt.group=mt;return et++,Tt}function lt(ht,ft,vt,St,pt,mt,Tt){if(Tt.reversedDepth===!0)pt=-pt;let At=ot(ht,ft,vt,St,pt,mt);if(vt.transmission>0)it.push(At);else if(vt.transparent===!0)st.push(At);else nt.push(At)}function ct(ht,ft,vt,St,pt,mt){let Tt=ot(ht,ft,vt,St,pt,mt);if(vt.transmission>0)it.unshift(Tt);else if(vt.transparent===!0)st.unshift(Tt);else nt.unshift(Tt)}function ut(ht,ft){if(nt.length>1)nt.sort(ht||zg);if(it.length>1)it.sort(ft||qh);if(st.length>1)st.sort(ft||qh)}function dt(){for(let ht=et,ft=tt.length;ht<ft;ht++){let vt=tt[ht];if(vt.id===null)break;vt.id=null,vt.object=null,vt.geometry=null,vt.material=null,vt.group=null}}return{opaque:nt,transmissive:it,transparent:st,init:rt,push:lt,unshift:ct,finish:dt,sort:ut}}function Gg(){let tt=new WeakMap;function et(it,st){let rt=tt.get(it),at;if(rt===void 0)at=new Yh,tt.set(it,[at]);else if(st>=rt.length)at=new Yh,rt.push(at);else at=rt[st];return at}function nt(){tt=new WeakMap}return{get:et,dispose:nt}}function kg(){let tt={};return{get:function(et){if(tt[et.id]!==void 0)return tt[et.id];let nt;switch(et.type){case"SunLight":case"DirectionalLight":nt={direction:new e,color:new t};break;case"SpotLight":nt={position:new e,direction:new e,color:new t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":nt={position:new e,color:new t,distance:0,decay:0};break;case"HemisphereLight":nt={direction:new e,skyColor:new t,groundColor:new t};break;case"RectAreaLight":nt={color:new t,position:new e,halfWidth:new e,halfHeight:new e};break}return tt[et.id]=nt,nt}}}function Hg(){let tt={};return{get:function(et){if(tt[et.id]!==void 0)return tt[et.id];let nt;switch(et.type){case"SunLight":case"DirectionalLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n};break;case"SpotLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n};break;case"PointLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n,shadowCameraNear:1,shadowCameraFar:1000};break}return tt[et.id]=nt,nt}}}var Wg=0;function Vg(tt,et){return(et.castShadow?2:0)-(tt.castShadow?2:0)+(et.map?1:0)-(tt.map?1:0)}function Xg(tt){let et=new kg,nt=Hg(),it={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let ct=0;ct<9;ct++)it.probe.push(new e);let st=new e,rt=new i,at=new i;function ot(ct){let ut=0,dt=0,ht=0;for(let zt=0;zt<9;zt++)it.probe[zt].set(0,0,0);let ft=0,vt=0,St=0,pt=0,mt=0,Tt=0,At=0,bt=0,Et=0,It=0,gt=0,yt=0,Nt=0,kt=0;ct.sort(Vg);for(let zt=0,Kt=ct.length;zt<Kt;zt++){let Rt=ct[zt],{color:qt,intensity:Zt,distance:Ot}=Rt,Qe=null;if(Rt.shadow&&Rt.shadow.map)if(Rt.shadow.map.texture.format===xs)Qe=Rt.shadow.map.texture;else Qe=Rt.shadow.map.depthTexture||Rt.shadow.map.texture;if(Rt.isAmbientLight)ut+=qt.r*Zt,dt+=qt.g*Zt,ht+=qt.b*Zt;else if(Rt.isLightProbe){for(let Wt=0;Wt<9;Wt++)it.probe[Wt].addScaledVector(Rt.sh.coefficients[Wt],Zt);kt++}else if(Rt.isSunLight){let Wt=et.get(Rt);if(Wt.color.copy(Rt.color).multiplyScalar(Rt.intensity),Rt.castShadow){let $t=Rt.shadow,Je=nt.get(Rt);Je.shadowIntensity=$t.intensity,Je.shadowBias=$t.bias,Je.shadowNormalBias=$t.normalBias,Je.shadowRadius=$t.radius,Je.shadowMapSize.copy($t.mapSize).multiply($t.getFrameExtents()),it.sunShadow[vt]=Je,it.sunShadowMap[vt]=Qe;let mn=$t.getViewportCount();for(let Yt=0;Yt<mn;Yt++)it.sunShadowMatrix[St+Yt]=$t.getMatrix(Yt),it.sunShadowCascade[St+Yt]=$t._cascadeData[Yt];St+=mn,vt++}it.sun[ft]=Wt,ft++}else if(Rt.isDirectionalLight){let Wt=et.get(Rt);if(Wt.color.copy(Rt.color).multiplyScalar(Rt.intensity),Rt.castShadow){let $t=Rt.shadow,Je=nt.get(Rt);Je.shadowIntensity=$t.intensity,Je.shadowBias=$t.bias,Je.shadowNormalBias=$t.normalBias,Je.shadowRadius=$t.radius,Je.shadowMapSize=$t.mapSize,it.directionalShadow[pt]=Je,it.directionalShadowMap[pt]=Qe,it.directionalShadowMatrix[pt]=Rt.shadow.matrix,Et++}it.directional[pt]=Wt,pt++}else if(Rt.isSpotLight){let Wt=et.get(Rt);Wt.position.setFromMatrixPosition(Rt.matrixWorld),Wt.color.copy(qt).multiplyScalar(Zt),Wt.distance=Ot,Wt.coneCos=Math.cos(Rt.angle),Wt.penumbraCos=Math.cos(Rt.angle*(1-Rt.penumbra)),Wt.decay=Rt.decay,it.spot[Tt]=Wt;let $t=Rt.shadow;if(Rt.map){if(it.spotLightMap[yt]=Rt.map,yt++,$t.updateMatrices(Rt),Rt.castShadow)Nt++}if(it.spotLightMatrix[Tt]=$t.matrix,Rt.castShadow){let Je=nt.get(Rt);Je.shadowIntensity=$t.intensity,Je.shadowBias=$t.bias,Je.shadowNormalBias=$t.normalBias,Je.shadowRadius=$t.radius,Je.shadowMapSize=$t.mapSize,it.spotShadow[Tt]=Je,it.spotShadowMap[Tt]=Qe,gt++}Tt++}else if(Rt.isRectAreaLight){let Wt=et.get(Rt);Wt.color.copy(qt).multiplyScalar(Zt),Wt.halfWidth.set(Rt.width*0.5,0,0),Wt.halfHeight.set(0,Rt.height*0.5,0),it.rectArea[At]=Wt,At++}else if(Rt.isPointLight){let Wt=et.get(Rt);if(Wt.color.copy(Rt.color).multiplyScalar(Rt.intensity),Wt.distance=Rt.distance,Wt.decay=Rt.decay,Rt.castShadow){let $t=Rt.shadow,Je=nt.get(Rt);Je.shadowIntensity=$t.intensity,Je.shadowBias=$t.bias,Je.shadowNormalBias=$t.normalBias,Je.shadowRadius=$t.radius,Je.shadowMapSize=$t.mapSize,Je.shadowCameraNear=$t.camera.near,Je.shadowCameraFar=$t.camera.far,it.pointShadow[mt]=Je,it.pointShadowMap[mt]=Qe,it.pointShadowMatrix[mt]=Rt.shadow.matrix,It++}it.point[mt]=Wt,mt++}else if(Rt.isHemisphereLight){let Wt=et.get(Rt);Wt.skyColor.copy(Rt.color).multiplyScalar(Zt),Wt.groundColor.copy(Rt.groundColor).multiplyScalar(Zt),it.hemi[bt]=Wt,bt++}}if(At>0)if(tt.has("OES_texture_float_linear")===!0)it.rectAreaLTC1=an.LTC_FLOAT_1,it.rectAreaLTC2=an.LTC_FLOAT_2;else it.rectAreaLTC1=an.LTC_HALF_1,it.rectAreaLTC2=an.LTC_HALF_2;it.ambient[0]=ut,it.ambient[1]=dt,it.ambient[2]=ht;let Lt=it.hash;if(Lt.sunLength!==ft||Lt.directionalLength!==pt||Lt.pointLength!==mt||Lt.spotLength!==Tt||Lt.rectAreaLength!==At||Lt.hemiLength!==bt||Lt.numSunShadows!==vt||Lt.numDirectionalShadows!==Et||Lt.numPointShadows!==It||Lt.numSpotShadows!==gt||Lt.numSpotMaps!==yt||Lt.numLightProbes!==kt)it.sun.length=ft,it.directional.length=pt,it.spot.length=Tt,it.rectArea.length=At,it.point.length=mt,it.hemi.length=bt,it.sunShadow.length=vt,it.sunShadowMap.length=vt,it.sunShadowMatrix.length=St,it.sunShadowCascade.length=St,it.directionalShadow.length=Et,it.directionalShadowMap.length=Et,it.directionalShadowMatrix.length=Et,it.pointShadow.length=It,it.pointShadowMap.length=It,it.pointShadowMatrix.length=It,it.spotShadow.length=gt,it.spotShadowMap.length=gt,it.spotLightMatrix.length=gt+yt-Nt,it.spotLightMap.length=yt,it.numSpotLightShadowsWithMaps=Nt,it.numLightProbes=kt,Lt.sunLength=ft,Lt.directionalLength=pt,Lt.pointLength=mt,Lt.spotLength=Tt,Lt.rectAreaLength=At,Lt.hemiLength=bt,Lt.numSunShadows=vt,Lt.numDirectionalShadows=Et,Lt.numPointShadows=It,Lt.numSpotShadows=gt,Lt.numSpotMaps=yt,Lt.numLightProbes=kt,it.version=Wg++}function lt(ct,ut){let dt=0,ht=0,ft=0,vt=0,St=0,pt=0,mt=ut.matrixWorldInverse;for(let Tt=0,At=ct.length;Tt<At;Tt++){let bt=ct[Tt];if(bt.isSunLight){let Et=it.sun[dt];Et.direction.setFromMatrixPosition(bt.matrixWorld),Et.direction.transformDirection(mt),dt++}else if(bt.isDirectionalLight){let Et=it.directional[ht];Et.direction.setFromMatrixPosition(bt.matrixWorld),st.setFromMatrixPosition(bt.target.matrixWorld),Et.direction.sub(st),Et.direction.transformDirection(mt),ht++}else if(bt.isSpotLight){let Et=it.spot[vt];Et.position.setFromMatrixPosition(bt.matrixWorld),Et.position.applyMatrix4(mt),Et.direction.setFromMatrixPosition(bt.matrixWorld),st.setFromMatrixPosition(bt.target.matrixWorld),Et.direction.sub(st),Et.direction.transformDirection(mt),vt++}else if(bt.isRectAreaLight){let Et=it.rectArea[St];Et.position.setFromMatrixPosition(bt.matrixWorld),Et.position.applyMatrix4(mt),at.identity(),rt.copy(bt.matrixWorld),rt.premultiply(mt),at.extractRotation(rt),Et.halfWidth.set(bt.width*0.5,0,0),Et.halfHeight.set(0,bt.height*0.5,0),Et.halfWidth.applyMatrix4(at),Et.halfHeight.applyMatrix4(at),St++}else if(bt.isPointLight){let Et=it.point[ft];Et.position.setFromMatrixPosition(bt.matrixWorld),Et.position.applyMatrix4(mt),ft++}else if(bt.isHemisphereLight){let Et=it.hemi[pt];Et.direction.setFromMatrixPosition(bt.matrixWorld),Et.direction.transformDirection(mt),pt++}}}return{setup:ot,setupView:lt,state:it}}function Zh(tt){let et=new Xg(tt),nt=[],it=[],st=[];function rt(dt){ut.camera=dt,nt.length=0,it.length=0,st.length=0}function at(dt){if(dt.isLightProbeGrid)st.push(dt);else nt.push(dt)}function ot(dt){it.push(dt)}function lt(){et.setup(nt),st.sort((dt,ht)=>dt.priority-ht.priority||dt.id-ht.id)}function ct(dt){et.setupView(nt,dt)}let ut={lightsArray:nt,shadowsArray:it,lightProbeGridArray:st,camera:null,lights:et,transmissionRenderTarget:{},textureUnits:0};return{init:rt,state:ut,setupLights:lt,setupLightsView:ct,pushLight:at,pushShadow:ot}}function qg(tt){let et=new WeakMap;function nt(st,rt=0){let at=et.get(st),ot;if(at===void 0)ot=new Zh(tt),et.set(st,[ot]);else if(rt>=at.length)ot=new Zh(tt),at.push(ot);else ot=at[rt];return ot}function it(){et=new WeakMap}return{get:nt,dispose:it}}var Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`,Jg=[new e(1,0,0),new e(-1,0,0),new e(0,1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1)],$g=[new e(0,-1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1),new e(0,-1,0),new e(0,-1,0)],Jh=new i,yr=new e,Sl=new e;function Kg(tt,et,nt){let it=new gs,st=new n,rt=new n,at=new a,ot=new ol,lt=new ll,ct={},ut=nt.maxTextureSize,dt={[q]:T,[T]:q,[S]:S},ht=new p({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new n},radius:{value:4}},vertexShader:Yg,fragmentShader:Zg}),ft=ht.clone();ft.defines.HORIZONTAL_PASS=1;let vt=new f;vt.setAttribute("position",new m(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let St=new r(vt,ht),pt=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let mt=this.type;this.render=function(It,gt,yt){if(pt.enabled===!1)return;if(pt.autoUpdate===!1&&pt.needsUpdate===!1)return;if(It.length===0)return;if(this.type===De)_n("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur;let Nt=tt.getRenderTarget(),kt=tt.getActiveCubeFace(),Lt=tt.getActiveMipmapLevel(),zt=tt.state;if(zt.setBlending(k),zt.buffers.depth.getReversed()===!0)zt.buffers.color.setClear(0,0,0,0);else zt.buffers.color.setClear(1,1,1,1);zt.buffers.depth.setTest(!0),zt.setScissorTest(!1);let Kt=mt!==this.type;if(Kt)gt.traverse(function(Rt){if(Rt.material)if(Array.isArray(Rt.material))Rt.material.forEach((qt)=>qt.needsUpdate=!0);else Rt.material.needsUpdate=!0});for(let Rt=0,qt=It.length;Rt<qt;Rt++){let Zt=It[Rt],Ot=Zt.shadow;if(Ot===void 0){_n("WebGLShadowMap:",Zt,"has no shadow.");continue}if(Ot.autoUpdate===!1&&Ot.needsUpdate===!1)continue;st.copy(Ot.mapSize);let Qe=Ot.getFrameExtents();if(st.multiply(Qe),rt.copy(Ot.mapSize),st.x>ut||st.y>ut){if(st.x>ut)rt.x=Math.floor(ut/Qe.x),st.x=rt.x*Qe.x,Ot.mapSize.x=rt.x;if(st.y>ut)rt.y=Math.floor(ut/Qe.y),st.y=rt.y*Qe.y,Ot.mapSize.y=rt.y}let Wt=tt.state.buffers.depth.getReversed();if(Ot.camera._reversedDepth=Wt,Ot.map===null||Kt===!0){if(Ot.map!==null){if(Ot.map.depthTexture!==null)Ot.map.depthTexture.dispose(),Ot.map.depthTexture=null;Ot.map.dispose()}if(this.type===Hs){if(Zt.isPointLight){_n("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Ot.map=new M(st.x,st.y,{format:xs,type:A,minFilter:w,magFilter:w,generateMipmaps:!1}),Ot.map.texture.name=Zt.name+".shadowMap",Ot.map.depthTexture=new ss(st.x,st.y,qi),Ot.map.depthTexture.name=Zt.name+".shadowMapDepth",Ot.map.depthTexture.format=Xs,Ot.map.depthTexture.compareFunction=null,Ot.map.depthTexture.minFilter=F,Ot.map.depthTexture.magFilter=F}else{if(Zt.isPointLight)Ot.map=new ba(st.x),Ot.map.depthTexture=new _a(st.x,ns);else Ot.map=new M(st.x,st.y),Ot.map.depthTexture=new ss(st.x,st.y,ns);if(Ot.map.depthTexture.name=Zt.name+".shadowMap",Ot.map.depthTexture.format=Xs,this.type===ur)Ot.map.depthTexture.compareFunction=Wt?Yo:qo,Ot.map.depthTexture.minFilter=w,Ot.map.depthTexture.magFilter=w;else Ot.map.depthTexture.compareFunction=null,Ot.map.depthTexture.minFilter=F,Ot.map.depthTexture.magFilter=F}Ot.camera.updateProjectionMatrix()}if(Ot.map.isWebGLCubeRenderTarget!==!0&&(Ot.map.width!==st.x||Ot.map.height!==st.y))Ot.map.setSize(st.x,st.y);let $t=Ot.map.isWebGLCubeRenderTarget?6:Ot.getViewportCount();if(Zt.isPointLight!==!0)Ot.updateMatrices(Zt,yt);let Je=(Ot.camera.layers.mask&4294967294)!==0?Ot.camera.layers:yt.layers;for(let mn=0;mn<$t;mn++){let Yt=Ot.getCamera(mn);if(Zt.isPointLight){let{camera:ae,matrix:fn}=Ot,Sn=Zt.distance||ae.far;if(Sn!==ae.far)ae.far=Sn,ae.updateProjectionMatrix();yr.setFromMatrixPosition(Zt.matrixWorld),ae.position.copy(yr),Sl.copy(ae.position),Sl.add(Jg[mn]),ae.up.copy($g[mn]),ae.lookAt(Sl),ae.updateMatrixWorld(),fn.makeTranslation(-yr.x,-yr.y,-yr.z),Jh.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),Ot._frustum.setFromProjectionMatrix(Jh,ae.coordinateSystem,ae.reversedDepth)}if(Ot.map.isWebGLCubeRenderTarget)tt.setRenderTarget(Ot.map,mn),tt.clear();else{if(mn===0)tt.setRenderTarget(Ot.map),tt.clear();let ae=Ot.getViewport(mn);at.set(rt.x*ae.x,rt.y*ae.y,rt.x*ae.z,rt.y*ae.w),zt.viewport(at)}it=Ot.getFrustum(mn),bt(gt,yt,Yt,Zt,Je,this.type)}if(Ot.isPointLightShadow!==!0&&this.type===Hs)Tt(Ot,yt);Ot.needsUpdate=!1}mt=this.type,pt.needsUpdate=!1,tt.setRenderTarget(Nt,kt,Lt)};function Tt(It,gt){let yt=et.update(St);if(ht.defines.VSM_SAMPLES!==It.blurSamples)ht.defines.VSM_SAMPLES=It.blurSamples,ft.defines.VSM_SAMPLES=It.blurSamples,ht.needsUpdate=!0,ft.needsUpdate=!0;if(It.mapPass===null)It.mapPass=new M(st.x,st.y,{format:xs,type:A});else if(It.mapPass.width!==It.map.width||It.mapPass.height!==It.map.height)It.mapPass.setSize(It.map.width,It.map.height);ht.uniforms.shadow_pass.value=It.map.depthTexture,ht.uniforms.resolution.value.set(It.map.width,It.map.height),ht.uniforms.radius.value=It.radius,tt.setRenderTarget(It.mapPass),tt.clear(),tt.renderBufferDirect(gt,null,yt,ht,St,null),ft.uniforms.shadow_pass.value=It.mapPass.texture,ft.uniforms.resolution.value.set(It.map.width,It.map.height),ft.uniforms.radius.value=It.radius,tt.setRenderTarget(It.map),tt.clear(),tt.renderBufferDirect(gt,null,yt,ft,St,null)}function At(It,gt,yt,Nt){let kt=null,Lt=yt.isPointLight===!0?It.customDistanceMaterial:It.customDepthMaterial;if(Lt!==void 0)kt=Lt;else if(kt=yt.isPointLight===!0?lt:ot,tt.localClippingEnabled&&gt.clipShadows===!0&&Array.isArray(gt.clippingPlanes)&&gt.clippingPlanes.length!==0||gt.displacementMap&&gt.displacementScale!==0||gt.alphaMap&&gt.alphaTest>0||gt.map&&gt.alphaTest>0||gt.alphaToCoverage===!0){let zt=kt.uuid,Kt=gt.uuid,Rt=ct[zt];if(Rt===void 0)Rt={},ct[zt]=Rt;let qt=Rt[Kt];if(qt===void 0)qt=kt.clone(),Rt[Kt]=qt,gt.addEventListener("dispose",Et);kt=qt}if(kt.visible=gt.visible,kt.wireframe=gt.wireframe,Nt===Hs)kt.side=gt.shadowSide!==null?gt.shadowSide:gt.side;else kt.side=gt.shadowSide!==null?gt.shadowSide:dt[gt.side];if(kt.alphaMap=gt.alphaMap,kt.alphaTest=gt.alphaToCoverage===!0?0.5:gt.alphaTest,kt.map=gt.map,kt.clipShadows=gt.clipShadows,kt.clippingPlanes=gt.clippingPlanes,kt.clipIntersection=gt.clipIntersection,kt.displacementMap=gt.displacementMap,kt.displacementScale=gt.displacementScale,kt.displacementBias=gt.displacementBias,kt.wireframeLinewidth=gt.wireframeLinewidth,kt.linewidth=gt.linewidth,yt.isPointLight===!0&&kt.isMeshDistanceMaterial===!0){let zt=tt.properties.get(kt);zt.light=yt}return kt}function bt(It,gt,yt,Nt,kt,Lt){if(It.visible===!1)return;if(It.layers.test(kt)&&(It.isMesh||It.isLine||It.isPoints)){if((It.castShadow||It.receiveShadow&&Lt===Hs)&&(!It.frustumCulled||It.intersectsFrustum(it))){It.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,It.matrixWorld);let Rt=et.update(It),qt=It.material;if(Array.isArray(qt)){let Zt=Rt.groups;for(let Ot=0,Qe=Zt.length;Ot<Qe;Ot++){let Wt=Zt[Ot],$t=qt[Wt.materialIndex];if($t&&$t.visible){let Je=At(It,$t,Nt,Lt);It.onBeforeShadow(tt,It,gt,yt,Rt,Je,Wt),tt.renderBufferDirect(yt,null,Rt,Je,It,Wt),It.onAfterShadow(tt,It,gt,yt,Rt,Je,Wt)}}}else if(qt.visible){let Zt=At(It,qt,Nt,Lt);It.onBeforeShadow(tt,It,gt,yt,Rt,Zt,null),tt.renderBufferDirect(yt,null,Rt,Zt,It,null),It.onAfterShadow(tt,It,gt,yt,Rt,Zt,null)}}}let Kt=It.children;for(let Rt=0,qt=Kt.length;Rt<qt;Rt++)bt(Kt[Rt],gt,yt,Nt,kt,Lt)}function Et(It){It.target.removeEventListener("dispose",Et);for(let yt in ct){let Nt=ct[yt],kt=It.target.uuid;if(kt in Nt)Nt[kt].dispose(),delete Nt[kt]}}}function Qg(tt,et){function nt(){let wt=!1,Vt=new a,Ht=null,jt=new a(0,0,0,0);return{setMask:function($e){if(Ht!==$e&&!wt)tt.colorMask($e,$e,$e,$e),Ht=$e},setLocked:function($e){wt=$e},setClear:function($e,sn,vn,xn,on){if(on===!0)$e*=xn,sn*=xn,vn*=xn;if(Vt.set($e,sn,vn,xn),jt.equals(Vt)===!1)tt.clearColor($e,sn,vn,xn),jt.copy(Vt)},reset:function(){wt=!1,Ht=null,jt.set(-1,0,0,0)}}}function it(){let wt=!1,Vt=!1,Ht=null,jt=null,$e=null;return{setReversed:function(sn){if(Vt!==sn){let vn=et.get("EXT_clip_control");if(sn)vn.clipControlEXT(vn.LOWER_LEFT_EXT,vn.ZERO_TO_ONE_EXT);else vn.clipControlEXT(vn.LOWER_LEFT_EXT,vn.NEGATIVE_ONE_TO_ONE_EXT);Vt=sn;let xn=$e;$e=null,this.setClear(xn)}},getReversed:function(){return Vt},setTest:function(sn){if(sn)pn(tt.DEPTH_TEST);else Bn(tt.DEPTH_TEST)},setMask:function(sn){if(Ht!==sn&&!wt)tt.depthMask(sn),Ht=sn},setFunc:function(sn){if(Vt)sn=xh[sn];if(jt!==sn){switch(sn){case qc:tt.depthFunc(tt.NEVER);break;case Yc:tt.depthFunc(tt.ALWAYS);break;case Zc:tt.depthFunc(tt.LESS);break;case ao:tt.depthFunc(tt.LEQUAL);break;case Jc:tt.depthFunc(tt.EQUAL);break;case $c:tt.depthFunc(tt.GEQUAL);break;case Kc:tt.depthFunc(tt.GREATER);break;case Qc:tt.depthFunc(tt.NOTEQUAL);break;default:tt.depthFunc(tt.LEQUAL)}jt=sn}},setLocked:function(sn){wt=sn},setClear:function(sn){if($e!==sn){if($e=sn,Vt)sn=1-sn;tt.clearDepth(sn)}},reset:function(){wt=!1,Ht=null,jt=null,$e=null,Vt=!1}}}function st(){let wt=!1,Vt=null,Ht=null,jt=null,$e=null,sn=null,vn=null,xn=null,on=null;return{setTest:function(yn){if(!wt)if(yn)pn(tt.STENCIL_TEST);else Bn(tt.STENCIL_TEST)},setMask:function(yn){if(Vt!==yn&&!wt)tt.stencilMask(yn),Vt=yn},setFunc:function(yn,Cn,ln){if(Ht!==yn||jt!==Cn||$e!==ln)tt.stencilFunc(yn,Cn,ln),Ht=yn,jt=Cn,$e=ln},setOp:function(yn,Cn,ln){if(sn!==yn||vn!==Cn||xn!==ln)tt.stencilOp(yn,Cn,ln),sn=yn,vn=Cn,xn=ln},setLocked:function(yn){wt=yn},setClear:function(yn){if(on!==yn)tt.clearStencil(yn),on=yn},reset:function(){wt=!1,Vt=null,Ht=null,jt=null,$e=null,sn=null,vn=null,xn=null,on=null}}}let rt=new nt,at=new it,ot=new st,lt={},ct=new WeakMap,ut={},dt={},ht={},ft=new WeakMap,vt=[],St=null,pt=!1,mt=null,Tt=null,At=null,bt=null,Et=null,It=null,gt=null,yt=new t(0,0,0),Nt=0,kt=!1,Lt=null,zt=null,Kt=null,Rt=null,qt=null,Zt=tt.getParameter(tt.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Ot=!1,Qe=0,Wt=tt.getParameter(tt.VERSION);if(Wt.indexOf("WebGL")!==-1)Qe=parseFloat(/^WebGL (\d)/.exec(Wt)[1]),Ot=Qe>=1;else if(Wt.indexOf("OpenGL ES")!==-1)Qe=parseFloat(/^OpenGL ES (\d)/.exec(Wt)[1]),Ot=Qe>=2;let $t=null,Je={},mn=tt.getParameter(tt.SCISSOR_BOX),Yt=tt.getParameter(tt.VIEWPORT),ae=new a().fromArray(mn),fn=new a().fromArray(Yt);function Sn(wt,Vt,Ht,jt){let $e=new Uint8Array(4),sn=tt.createTexture();tt.bindTexture(wt,sn),tt.texParameteri(wt,tt.TEXTURE_MIN_FILTER,tt.NEAREST),tt.texParameteri(wt,tt.TEXTURE_MAG_FILTER,tt.NEAREST);for(let vn=0;vn<Ht;vn++)if(wt===tt.TEXTURE_3D||wt===tt.TEXTURE_2D_ARRAY)tt.texImage3D(Vt,0,tt.RGBA,1,1,jt,0,tt.RGBA,tt.UNSIGNED_BYTE,$e);else tt.texImage2D(Vt+vn,0,tt.RGBA,1,1,0,tt.RGBA,tt.UNSIGNED_BYTE,$e);return sn}let Mn={};Mn[tt.TEXTURE_2D]=Sn(tt.TEXTURE_2D,tt.TEXTURE_2D,1),Mn[tt.TEXTURE_CUBE_MAP]=Sn(tt.TEXTURE_CUBE_MAP,tt.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mn[tt.TEXTURE_2D_ARRAY]=Sn(tt.TEXTURE_2D_ARRAY,tt.TEXTURE_2D_ARRAY,1,1),Mn[tt.TEXTURE_3D]=Sn(tt.TEXTURE_3D,tt.TEXTURE_3D,1,1),rt.setClear(0,0,0,1),at.setClear(1),ot.setClear(0),pn(tt.DEPTH_TEST),at.setFunc(ao),gi(!1),Zn(io),pn(tt.CULL_FACE),Yn(k);function pn(wt){if(ut[wt]!==!0)tt.enable(wt),ut[wt]=!0}function Bn(wt){if(ut[wt]!==!1)tt.disable(wt),ut[wt]=!1}function Ln(wt,Vt){if(ht[wt]!==Vt){if(tt.bindFramebuffer(wt,Vt),ht[wt]=Vt,wt===tt.DRAW_FRAMEBUFFER)ht[tt.FRAMEBUFFER]=Vt;if(wt===tt.FRAMEBUFFER)ht[tt.DRAW_FRAMEBUFFER]=Vt;return!0}return!1}function Rn(wt,Vt){let Ht=vt,jt=!1;if(wt){if(Ht=ft.get(Vt),Ht===void 0)Ht=[],ft.set(Vt,Ht);let $e=wt.textures;if(Ht.length!==$e.length||Ht[0]!==tt.COLOR_ATTACHMENT0){for(let sn=0,vn=$e.length;sn<vn;sn++)Ht[sn]=tt.COLOR_ATTACHMENT0+sn;Ht.length=$e.length,jt=!0}}else if(Ht[0]!==tt.BACK)Ht[0]=tt.BACK,jt=!0;if(jt)tt.drawBuffers(Ht)}function Vn(wt){if(St!==wt)return tt.useProgram(wt),St=wt,!0;return!1}let Un={[Ws]:tt.FUNC_ADD,[wc]:tt.FUNC_SUBTRACT,[Rc]:tt.FUNC_REVERSE_SUBTRACT};Un[Cc]=tt.MIN,Un[Ic]=tt.MAX;let qn={[Pc]:tt.ZERO,[Lc]:tt.ONE,[Nc]:tt.SRC_COLOR,[Uc]:tt.SRC_ALPHA,[kc]:tt.SRC_ALPHA_SATURATE,[zc]:tt.DST_COLOR,[Oc]:tt.DST_ALPHA,[Dc]:tt.ONE_MINUS_SRC_COLOR,[Fc]:tt.ONE_MINUS_SRC_ALPHA,[Gc]:tt.ONE_MINUS_DST_COLOR,[Bc]:tt.ONE_MINUS_DST_ALPHA,[Hc]:tt.CONSTANT_COLOR,[Wc]:tt.ONE_MINUS_CONSTANT_COLOR,[Vc]:tt.CONSTANT_ALPHA,[Xc]:tt.ONE_MINUS_CONSTANT_ALPHA};function Yn(wt,Vt,Ht,jt,$e,sn,vn,xn,on,yn){if(wt===k){if(pt===!0)Bn(tt.BLEND),pt=!1;return}if(pt===!1)pn(tt.BLEND),pt=!0;if(wt!==Ac){if(wt!==mt||yn!==kt){if(Tt!==Ws||Et!==Ws)tt.blendEquation(tt.FUNC_ADD),Tt=Ws,Et=Ws;if(yn)switch(wt){case dr:tt.blendFuncSeparate(tt.ONE,tt.ONE_MINUS_SRC_ALPHA,tt.ONE,tt.ONE_MINUS_SRC_ALPHA);break;case I:tt.blendFunc(tt.ONE,tt.ONE);break;case so:tt.blendFuncSeparate(tt.ZERO,tt.ONE_MINUS_SRC_COLOR,tt.ZERO,tt.ONE);break;case ro:tt.blendFuncSeparate(tt.DST_COLOR,tt.ONE_MINUS_SRC_ALPHA,tt.ZERO,tt.ONE);break;default:Tn("WebGLState: Invalid blending: ",wt);break}else switch(wt){case dr:tt.blendFuncSeparate(tt.SRC_ALPHA,tt.ONE_MINUS_SRC_ALPHA,tt.ONE,tt.ONE_MINUS_SRC_ALPHA);break;case I:tt.blendFuncSeparate(tt.SRC_ALPHA,tt.ONE,tt.ONE,tt.ONE);break;case so:Tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ro:Tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tn("WebGLState: Invalid blending: ",wt);break}At=null,bt=null,It=null,gt=null,yt.set(0,0,0),Nt=0,mt=wt,kt=yn}return}if($e=$e||Vt,sn=sn||Ht,vn=vn||jt,Vt!==Tt||$e!==Et)tt.blendEquationSeparate(Un[Vt],Un[$e]),Tt=Vt,Et=$e;if(Ht!==At||jt!==bt||sn!==It||vn!==gt)tt.blendFuncSeparate(qn[Ht],qn[jt],qn[sn],qn[vn]),At=Ht,bt=jt,It=sn,gt=vn;if(xn.equals(yt)===!1||on!==Nt)tt.blendColor(xn.r,xn.g,xn.b,on),yt.copy(xn),Nt=on;mt=wt,kt=!1}function fi(wt,Vt){wt.side===S?Bn(tt.CULL_FACE):pn(tt.CULL_FACE);let Ht=wt.side===T;if(Vt)Ht=!Ht;gi(Ht),wt.blending===dr&&wt.transparent===!1?Yn(k):Yn(wt.blending,wt.blendEquation,wt.blendSrc,wt.blendDst,wt.blendEquationAlpha,wt.blendSrcAlpha,wt.blendDstAlpha,wt.blendColor,wt.blendAlpha,wt.premultipliedAlpha),at.setFunc(wt.depthFunc),at.setTest(wt.depthTest),at.setMask(wt.depthWrite),rt.setMask(wt.colorWrite);let jt=wt.stencilWrite;if(ot.setTest(jt),jt)ot.setMask(wt.stencilWriteMask),ot.setFunc(wt.stencilFunc,wt.stencilRef,wt.stencilFuncMask),ot.setOp(wt.stencilFail,wt.stencilZFail,wt.stencilZPass);pi(wt.polygonOffset,wt.polygonOffsetFactor,wt.polygonOffsetUnits),wt.alphaToCoverage===!0?pn(tt.SAMPLE_ALPHA_TO_COVERAGE):Bn(tt.SAMPLE_ALPHA_TO_COVERAGE)}function gi(wt){if(Lt!==wt){if(wt)tt.frontFace(tt.CW);else tt.frontFace(tt.CCW);Lt=wt}}function Zn(wt){if(wt!==Tc){if(pn(tt.CULL_FACE),wt!==zt)if(wt===io)tt.cullFace(tt.BACK);else if(wt===Ec)tt.cullFace(tt.FRONT);else tt.cullFace(tt.FRONT_AND_BACK)}else Bn(tt.CULL_FACE);zt=wt}function si(wt){if(wt!==Kt){if(Ot)tt.lineWidth(wt);Kt=wt}}function pi(wt,Vt,Ht){if(wt){if(pn(tt.POLYGON_OFFSET_FILL),Rt!==Vt||qt!==Ht){if(Rt=Vt,qt=Ht,at.getReversed())Vt=-Vt,Ht=-Ht;tt.polygonOffset(Vt,Ht)}}else Bn(tt.POLYGON_OFFSET_FILL)}function mi(wt){if(wt)pn(tt.SCISSOR_TEST);else Bn(tt.SCISSOR_TEST)}function Mi(wt){if(wt===void 0)wt=tt.TEXTURE0+Zt-1;if($t!==wt)tt.activeTexture(wt),$t=wt}function Pt(wt,Vt,Ht){if(Ht===void 0)if($t===null)Ht=tt.TEXTURE0+Zt-1;else Ht=$t;let jt=Je[Ht];if(jt===void 0)jt={type:void 0,texture:void 0},Je[Ht]=jt;if(jt.type!==wt||jt.texture!==Vt){if($t!==Ht)tt.activeTexture(Ht),$t=Ht;tt.bindTexture(wt,Vt||Mn[wt]),jt.type=wt,jt.texture=Vt}}function bi(){let wt=Je[$t];if(wt!==void 0&&wt.type!==void 0)tt.bindTexture(wt.type,null),wt.type=void 0,wt.texture=void 0}function zn(){try{tt.compressedTexImage2D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function jn(){try{tt.compressedTexImage3D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function rn(){try{tt.texSubImage2D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function Hn(){try{tt.texSubImage3D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function bn(){try{tt.compressedTexSubImage2D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function An(){try{tt.compressedTexSubImage3D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function ri(){try{tt.texStorage2D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function Mt(){try{tt.texStorage3D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function _t(){try{tt.texImage2D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function Dt(){try{tt.texImage3D(...arguments)}catch(wt){Tn("WebGLState:",wt)}}function Qt(wt){if(dt[wt]!==void 0)return dt[wt];else return tt.getParameter(wt)}function Jt(wt,Vt){if(dt[wt]!==Vt)tt.pixelStorei(wt,Vt),dt[wt]=Vt}function Ke(wt){if(ae.equals(wt)===!1)tt.scissor(wt.x,wt.y,wt.z,wt.w),ae.copy(wt)}function en(wt){if(fn.equals(wt)===!1)tt.viewport(wt.x,wt.y,wt.z,wt.w),fn.copy(wt)}function Gt(wt,Vt){let Ht=ct.get(Vt);if(Ht===void 0)Ht=new WeakMap,ct.set(Vt,Ht);let jt=Ht.get(wt);if(jt===void 0)jt=tt.getUniformBlockIndex(Vt,wt.name),tt.uniformBlockBinding(Vt,jt,jt),Ht.set(wt,jt)}function Xt(wt,Vt,Ht){let $e=ct.get(Vt).get(wt);if(lt[$e]!==Ht)tt.bindBufferBase(tt.UNIFORM_BUFFER,$e,Ht),lt[$e]=Ht}function je(){tt.disable(tt.BLEND),tt.disable(tt.CULL_FACE),tt.disable(tt.DEPTH_TEST),tt.disable(tt.POLYGON_OFFSET_FILL),tt.disable(tt.SCISSOR_TEST),tt.disable(tt.STENCIL_TEST),tt.disable(tt.SAMPLE_ALPHA_TO_COVERAGE),tt.blendEquation(tt.FUNC_ADD),tt.blendFunc(tt.ONE,tt.ZERO),tt.blendFuncSeparate(tt.ONE,tt.ZERO,tt.ONE,tt.ZERO),tt.blendColor(0,0,0,0),tt.colorMask(!0,!0,!0,!0),tt.clearColor(0,0,0,0),tt.depthMask(!0),tt.depthFunc(tt.LESS),at.setReversed(!1),tt.clearDepth(1),tt.stencilMask(4294967295),tt.stencilFunc(tt.ALWAYS,0,4294967295),tt.stencilOp(tt.KEEP,tt.KEEP,tt.KEEP),tt.clearStencil(0),tt.cullFace(tt.BACK),tt.frontFace(tt.CCW),tt.polygonOffset(0,0),tt.activeTexture(tt.TEXTURE0),tt.bindFramebuffer(tt.FRAMEBUFFER,null),tt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null),tt.bindFramebuffer(tt.READ_FRAMEBUFFER,null),tt.useProgram(null),tt.lineWidth(1),tt.scissor(0,0,tt.canvas.width,tt.canvas.height),tt.viewport(0,0,tt.canvas.width,tt.canvas.height),tt.pixelStorei(tt.PACK_ALIGNMENT,4),tt.pixelStorei(tt.UNPACK_ALIGNMENT,4),tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,!1),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),tt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt.BROWSER_DEFAULT_WEBGL),tt.pixelStorei(tt.PACK_ROW_LENGTH,0),tt.pixelStorei(tt.PACK_SKIP_PIXELS,0),tt.pixelStorei(tt.PACK_SKIP_ROWS,0),tt.pixelStorei(tt.UNPACK_ROW_LENGTH,0),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,0),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,0),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,0),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,0),ut={},dt={},$t=null,Je={},ht={},lt={},ft=new WeakMap,vt=[],St=null,pt=!1,mt=null,Tt=null,At=null,bt=null,Et=null,It=null,gt=null,yt=new t(0,0,0),Nt=0,kt=!1,Lt=null,zt=null,Kt=null,Rt=null,qt=null,ae.set(0,0,tt.canvas.width,tt.canvas.height),fn.set(0,0,tt.canvas.width,tt.canvas.height),rt.reset(),at.reset(),ot.reset()}return{buffers:{color:rt,depth:at,stencil:ot},enable:pn,disable:Bn,bindFramebuffer:Ln,drawBuffers:Rn,useProgram:Vn,setBlending:Yn,setMaterial:fi,setFlipSided:gi,setCullFace:Zn,setLineWidth:si,setPolygonOffset:pi,setScissorTest:mi,activeTexture:Mi,bindTexture:Pt,unbindTexture:bi,compressedTexImage2D:zn,compressedTexImage3D:jn,texImage2D:_t,texImage3D:Dt,pixelStorei:Jt,getParameter:Qt,updateUBOMapping:Gt,uniformBlockBinding:Xt,texStorage2D:ri,texStorage3D:Mt,texSubImage2D:rn,texSubImage3D:Hn,compressedTexSubImage2D:bn,compressedTexSubImage3D:An,scissor:Ke,viewport:en,reset:je}}function jg(tt,et,nt,it,st,rt,at){let ot=et.has("WEBGL_multisampled_render_to_texture")?et.get("WEBGL_multisampled_render_to_texture"):null,lt=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),ct=new n,ut=new WeakMap,dt=new Set,ht,ft=new WeakMap,vt=new Set,St=new FinalizationRegistry((Mt)=>vt.delete(Mt)),pt=!1;try{pt=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(Mt){}function mt(Mt,_t){return pt?new OffscreenCanvas(Mt,_t):Gs("canvas")}function Tt(Mt,_t,Dt){let Qt=1,Jt=ri(Mt);if(Jt.width>Dt||Jt.height>Dt)Qt=Dt/Math.max(Jt.width,Jt.height);if(Qt<1)if(typeof HTMLImageElement<"u"&&Mt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Mt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Mt instanceof ImageBitmap||typeof VideoFrame<"u"&&Mt instanceof VideoFrame){let Ke=Math.floor(Qt*Jt.width),en=Math.floor(Qt*Jt.height);if(ht===void 0)ht=mt(Ke,en);let Gt=_t?mt(Ke,en):ht;return Gt.width=Ke,Gt.height=en,Gt.getContext("2d").drawImage(Mt,0,0,Ke,en),_n("WebGLRenderer: Texture has been resized from ("+Jt.width+"x"+Jt.height+") to ("+Ke+"x"+en+")."),Gt}else{if("data"in Mt)_n("WebGLRenderer: Image in DataTexture is too big ("+Jt.width+"x"+Jt.height+").");return Mt}return Mt}function At(Mt){return Mt.generateMipmaps}function bt(Mt){tt.generateMipmap(Mt)}function Et(Mt){if(Mt.isWebGLCubeRenderTarget)return tt.TEXTURE_CUBE_MAP;if(Mt.isWebGL3DRenderTarget)return tt.TEXTURE_3D;if(Mt.isWebGLArrayRenderTarget||Mt.isCompressedArrayTexture)return tt.TEXTURE_2D_ARRAY;return tt.TEXTURE_2D}function It(Mt,_t,Dt,Qt,Jt,Ke=!1){if(Mt!==null){if(tt[Mt]!==void 0)return tt[Mt];_n("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Mt+"'")}let en;if(Qt){if(en=et.get("EXT_texture_norm16"),!en)_n("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Gt=_t;if(_t===tt.RED){if(Dt===tt.FLOAT)Gt=tt.R32F;if(Dt===tt.HALF_FLOAT)Gt=tt.R16F;if(Dt===tt.UNSIGNED_BYTE)Gt=tt.R8;if(Dt===tt.UNSIGNED_SHORT&&en)Gt=en.R16_EXT;if(Dt===tt.SHORT&&en)Gt=en.R16_SNORM_EXT}if(_t===tt.RED_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.R8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.R16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.R32UI;if(Dt===tt.BYTE)Gt=tt.R8I;if(Dt===tt.SHORT)Gt=tt.R16I;if(Dt===tt.INT)Gt=tt.R32I}if(_t===tt.RG){if(Dt===tt.FLOAT)Gt=tt.RG32F;if(Dt===tt.HALF_FLOAT)Gt=tt.RG16F;if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RG8;if(Dt===tt.UNSIGNED_SHORT&&en)Gt=en.RG16_EXT;if(Dt===tt.SHORT&&en)Gt=en.RG16_SNORM_EXT}if(_t===tt.RG_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RG8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.RG16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.RG32UI;if(Dt===tt.BYTE)Gt=tt.RG8I;if(Dt===tt.SHORT)Gt=tt.RG16I;if(Dt===tt.INT)Gt=tt.RG32I}if(_t===tt.RGB_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RGB8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.RGB16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.RGB32UI;if(Dt===tt.BYTE)Gt=tt.RGB8I;if(Dt===tt.SHORT)Gt=tt.RGB16I;if(Dt===tt.INT)Gt=tt.RGB32I}if(_t===tt.RGBA_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RGBA8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.RGBA16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.RGBA32UI;if(Dt===tt.BYTE)Gt=tt.RGBA8I;if(Dt===tt.SHORT)Gt=tt.RGBA16I;if(Dt===tt.INT)Gt=tt.RGBA32I}if(_t===tt.RGB){if(Dt===tt.UNSIGNED_SHORT&&en)Gt=en.RGB16_EXT;if(Dt===tt.SHORT&&en)Gt=en.RGB16_SNORM_EXT;if(Dt===tt.UNSIGNED_INT_5_9_9_9_REV)Gt=tt.RGB9_E5;if(Dt===tt.UNSIGNED_INT_10F_11F_11F_REV)Gt=tt.R11F_G11F_B10F}if(_t===tt.RGBA){let Xt=Ke?Xo:s.getTransfer(Jt);if(Dt===tt.FLOAT)Gt=tt.RGBA32F;if(Dt===tt.HALF_FLOAT)Gt=tt.RGBA16F;if(Dt===tt.UNSIGNED_BYTE)Gt=Xt===c?tt.SRGB8_ALPHA8:tt.RGBA8;if(Dt===tt.UNSIGNED_SHORT&&en)Gt=en.RGBA16_EXT;if(Dt===tt.SHORT&&en)Gt=en.RGBA16_SNORM_EXT;if(Dt===tt.UNSIGNED_SHORT_4_4_4_4)Gt=tt.RGBA4;if(Dt===tt.UNSIGNED_SHORT_5_5_5_1)Gt=tt.RGB5_A1}if(Gt===tt.R16F||Gt===tt.R32F||Gt===tt.RG16F||Gt===tt.RG32F||Gt===tt.RGBA16F||Gt===tt.RGBA32F)et.get("EXT_color_buffer_float");return Gt}function gt(Mt,_t){let Dt;if(Mt){if(_t===null||_t===ns||_t===_s)Dt=tt.DEPTH24_STENCIL8;else if(_t===qi)Dt=tt.DEPTH32F_STENCIL8;else if(_t===pr)Dt=tt.DEPTH24_STENCIL8,_n("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_t===null||_t===ns||_t===_s)Dt=tt.DEPTH_COMPONENT24;else if(_t===qi)Dt=tt.DEPTH_COMPONENT32F;else if(_t===pr)Dt=tt.DEPTH_COMPONENT16;return Dt}function yt(Mt,_t){if(At(Mt)===!0||Mt.isFramebufferTexture&&Mt.minFilter!==F&&Mt.minFilter!==w)return Math.log2(Math.max(_t.width,_t.height))+1;else if(Mt.mipmaps.length>0)return Mt.mipmaps.length;else if(Mt.isCompressedTexture&&Array.isArray(Mt.image))return _t.mipmaps.length;else return 1}function Nt(Mt){let _t=new WeakRef(Mt);it.get(Mt).__ref=_t,vt.add(_t),St.register(Mt,_t,_t)}function kt(Mt){let _t=it.get(Mt).__ref;if(_t===void 0)return;vt.delete(_t),St.unregister(_t)}function Lt(Mt){Kt(Mt.target)}function zt(Mt){Rt(Mt.target)}function Kt(Mt){if(Mt.removeEventListener("dispose",Lt),kt(Mt),Zt(Mt),Mt.isVideoTexture)ut.delete(Mt);if(Mt.isHTMLTexture)dt.delete(Mt)}function Rt(Mt){Mt.removeEventListener("dispose",zt),kt(Mt),Qe(Mt)}function qt(){for(let Mt of vt){let _t=Mt.deref();if(_t===void 0)continue;if(_t.isRenderTarget===!0)Rt(_t);else Kt(_t)}vt.clear(),dt.clear()}function Zt(Mt){let _t=it.get(Mt);if(_t.__webglInit===void 0)return;let Dt=Mt.source,Qt=ft.get(Dt);if(Qt){let Jt=Qt[_t.__cacheKey];if(Jt.usedTimes--,Jt.usedTimes===0)Ot(Mt);if(Object.keys(Qt).length===0)ft.delete(Dt)}it.remove(Mt)}function Ot(Mt){let _t=it.get(Mt);tt.deleteTexture(_t.__webglTexture);let Dt=Mt.source,Qt=ft.get(Dt);delete Qt[_t.__cacheKey],at.memory.textures--}function Qe(Mt){let _t=it.get(Mt);if(_t.__depthDisposeCallback)_t.__depthDisposeCallback();let Dt=Mt.depthTexture;if(Dt&&Dt.renderTarget===Mt)Kt(Dt);if(Mt.isWebGLCubeRenderTarget)for(let Jt=0;Jt<6;Jt++){if(Array.isArray(_t.__webglFramebuffer[Jt]))for(let Ke=0;Ke<_t.__webglFramebuffer[Jt].length;Ke++)tt.deleteFramebuffer(_t.__webglFramebuffer[Jt][Ke]);else tt.deleteFramebuffer(_t.__webglFramebuffer[Jt]);if(_t.__webglDepthbuffer)tt.deleteRenderbuffer(_t.__webglDepthbuffer[Jt])}else{if(Array.isArray(_t.__webglFramebuffer))for(let Jt=0;Jt<_t.__webglFramebuffer.length;Jt++)tt.deleteFramebuffer(_t.__webglFramebuffer[Jt]);else tt.deleteFramebuffer(_t.__webglFramebuffer);if(_t.__webglDepthbuffer)tt.deleteRenderbuffer(_t.__webglDepthbuffer);if(_t.__webglMultisampledFramebuffer)tt.deleteFramebuffer(_t.__webglMultisampledFramebuffer);if(_t.__webglColorRenderbuffer){for(let Jt=0;Jt<_t.__webglColorRenderbuffer.length;Jt++)if(_t.__webglColorRenderbuffer[Jt])tt.deleteRenderbuffer(_t.__webglColorRenderbuffer[Jt])}if(_t.__webglDepthRenderbuffer)tt.deleteRenderbuffer(_t.__webglDepthRenderbuffer)}let Qt=Mt.textures;for(let Jt=0,Ke=Qt.length;Jt<Ke;Jt++){let en=it.get(Qt[Jt]);if(en.__webglTexture)tt.deleteTexture(en.__webglTexture),at.memory.textures--;it.remove(Qt[Jt])}it.remove(Mt)}let Wt=0;function $t(){Wt=0}function Je(){return Wt}function mn(Mt){Wt=Mt}function Yt(){let Mt=Wt;if(Mt>=st.maxTextures)_n("WebGLTextures: Trying to use "+(Mt+1)+" texture units while this GPU supports only "+st.maxTextures);return Wt+=1,Mt}function ae(Mt){let _t=[];return _t.push(Mt.wrapS),_t.push(Mt.wrapT),_t.push(Mt.wrapR||0),_t.push(Mt.magFilter),_t.push(Mt.minFilter),_t.push(Mt.anisotropy),_t.push(Mt.internalFormat),_t.push(Mt.format),_t.push(Mt.type),_t.push(Mt.generateMipmaps),_t.push(Mt.mipmapsAutoUpdate),_t.push(Mt.premultiplyAlpha),_t.push(Mt.flipY),_t.push(Mt.unpackAlignment),_t.push(Mt.colorSpace),_t.join()}function fn(Mt,_t){let Dt=it.get(Mt);if(Mt.isVideoTexture)bn(Mt);if(Mt.isRenderTargetTexture===!1&&Mt.isExternalTexture!==!0&&Mt.version>0&&Dt.__version!==Mt.version){let Qt=Mt.image;if(Qt===null)_n("WebGLRenderer: Texture marked for update but no image data found.");else if(Qt.complete===!1)_n("WebGLRenderer: Texture marked for update but image is incomplete");else{fi(Dt,Mt,_t);return}}else if(Mt.isExternalTexture)Dt.__webglTexture=Mt.sourceTexture?Mt.sourceTexture:null;nt.bindTexture(tt.TEXTURE_2D,Dt.__webglTexture,tt.TEXTURE0+_t)}function Sn(Mt,_t){let Dt=it.get(Mt);if(Mt.isRenderTargetTexture===!1&&Mt.version>0&&Dt.__version!==Mt.version){fi(Dt,Mt,_t);return}else if(Mt.isExternalTexture)Dt.__webglTexture=Mt.sourceTexture?Mt.sourceTexture:null;nt.bindTexture(tt.TEXTURE_2D_ARRAY,Dt.__webglTexture,tt.TEXTURE0+_t)}function Mn(Mt,_t){let Dt=it.get(Mt);if(Mt.isRenderTargetTexture===!1&&Mt.version>0&&Dt.__version!==Mt.version){fi(Dt,Mt,_t);return}nt.bindTexture(tt.TEXTURE_3D,Dt.__webglTexture,tt.TEXTURE0+_t)}function pn(Mt,_t){let Dt=it.get(Mt);if(Mt.version>0&&Dt.__version!==Mt.version){gi(Dt,Mt,_t);return}nt.bindTexture(tt.TEXTURE_CUBE_MAP,Dt.__webglTexture,tt.TEXTURE0+_t)}let Bn={[G]:tt.REPEAT,[ue]:tt.CLAMP_TO_EDGE,[Ue]:tt.MIRRORED_REPEAT},Ln={[F]:tt.NEAREST,[Fe]:tt.NEAREST_MIPMAP_NEAREST,[le]:tt.NEAREST_MIPMAP_LINEAR,[w]:tt.LINEAR,[de]:tt.LINEAR_MIPMAP_NEAREST,[O]:tt.LINEAR_MIPMAP_LINEAR},Rn={[hh]:tt.NEVER,[Zo]:tt.ALWAYS,[uh]:tt.LESS,[qo]:tt.LEQUAL,[dh]:tt.EQUAL,[Yo]:tt.GEQUAL,[fh]:tt.GREATER,[ph]:tt.NOTEQUAL};function Vn(Mt,_t){if(_t.type===qi&&et.has("OES_texture_float_linear")===!1&&(_t.magFilter===w||_t.magFilter===de||_t.magFilter===le||_t.magFilter===O||_t.minFilter===w||_t.minFilter===de||_t.minFilter===le||_t.minFilter===O))_n("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(tt.texParameteri(Mt,tt.TEXTURE_WRAP_S,Bn[_t.wrapS]),tt.texParameteri(Mt,tt.TEXTURE_WRAP_T,Bn[_t.wrapT]),Mt===tt.TEXTURE_3D||Mt===tt.TEXTURE_2D_ARRAY)tt.texParameteri(Mt,tt.TEXTURE_WRAP_R,Bn[_t.wrapR]);if(tt.texParameteri(Mt,tt.TEXTURE_MAG_FILTER,Ln[_t.magFilter]),tt.texParameteri(Mt,tt.TEXTURE_MIN_FILTER,Ln[_t.minFilter]),_t.compareFunction)tt.texParameteri(Mt,tt.TEXTURE_COMPARE_MODE,tt.COMPARE_REF_TO_TEXTURE),tt.texParameteri(Mt,tt.TEXTURE_COMPARE_FUNC,Rn[_t.compareFunction]);if(et.has("EXT_texture_filter_anisotropic")===!0){if(_t.magFilter===F)return;if(_t.minFilter!==le&&_t.minFilter!==O)return;if(_t.type===qi&&et.has("OES_texture_float_linear")===!1)return;if(_t.anisotropy>1||it.get(_t).__currentAnisotropy){let Dt=et.get("EXT_texture_filter_anisotropic");tt.texParameterf(Mt,Dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_t.anisotropy,st.getMaxAnisotropy())),it.get(_t).__currentAnisotropy=_t.anisotropy}}}function Un(Mt,_t){let Dt=!1;if(Mt.__webglInit===void 0)Mt.__webglInit=!0,_t.addEventListener("dispose",Lt),Nt(_t);let Qt=_t.source,Jt=ft.get(Qt);if(Jt===void 0)Jt={},ft.set(Qt,Jt);let Ke=ae(_t);if(Ke!==Mt.__cacheKey){if(Jt[Ke]===void 0)Jt[Ke]={texture:tt.createTexture(),usedTimes:0},at.memory.textures++,Dt=!0;Jt[Ke].usedTimes++;let en=Jt[Mt.__cacheKey];if(en!==void 0){if(Jt[Mt.__cacheKey].usedTimes--,en.usedTimes===0)Ot(_t)}Mt.__cacheKey=Ke,Mt.__webglTexture=Jt[Ke].texture}return Dt}function qn(Mt,_t,Dt){return Math.floor(Math.floor(Mt/Dt)/_t)}function Yn(Mt,_t,Dt,Qt){let Ke=Mt.updateRanges;if(Ke.length===0)nt.texSubImage2D(tt.TEXTURE_2D,0,0,0,_t.width,_t.height,Dt,Qt,_t.data);else{Ke.sort((wt,Vt)=>wt.start-Vt.start);let en=0;for(let wt=1;wt<Ke.length;wt++){let Vt=Ke[en],Ht=Ke[wt],jt=Vt.start+Vt.count,$e=qn(Ht.start,_t.width,4),sn=qn(Vt.start,_t.width,4);if(Ht.start<=jt+1&&$e===sn&&qn(Ht.start+Ht.count-1,_t.width,4)===$e)Vt.count=Math.max(Vt.count,Ht.start+Ht.count-Vt.start);else++en,Ke[en]=Ht}Ke.length=en+1;let Gt=nt.getParameter(tt.UNPACK_ROW_LENGTH),Xt=nt.getParameter(tt.UNPACK_SKIP_PIXELS),je=nt.getParameter(tt.UNPACK_SKIP_ROWS);nt.pixelStorei(tt.UNPACK_ROW_LENGTH,_t.width);for(let wt=0,Vt=Ke.length;wt<Vt;wt++){let Ht=Ke[wt],jt=Math.floor(Ht.start/4),$e=Math.ceil(Ht.count/4),sn=jt%_t.width,vn=Math.floor(jt/_t.width),xn=$e,on=1;nt.pixelStorei(tt.UNPACK_SKIP_PIXELS,sn),nt.pixelStorei(tt.UNPACK_SKIP_ROWS,vn),nt.texSubImage2D(tt.TEXTURE_2D,0,sn,vn,xn,1,Dt,Qt,_t.data)}Mt.clearUpdateRanges(),nt.pixelStorei(tt.UNPACK_ROW_LENGTH,Gt),nt.pixelStorei(tt.UNPACK_SKIP_PIXELS,Xt),nt.pixelStorei(tt.UNPACK_SKIP_ROWS,je)}}function fi(Mt,_t,Dt){let Qt=tt.TEXTURE_2D;if(_t.isDataArrayTexture||_t.isCompressedArrayTexture)Qt=tt.TEXTURE_2D_ARRAY;if(_t.isData3DTexture)Qt=tt.TEXTURE_3D;let Jt=Un(Mt,_t),Ke=_t.source;nt.bindTexture(Qt,Mt.__webglTexture,tt.TEXTURE0+Dt);let en=it.get(Ke);if(Ke.version!==en.__version||Jt===!0){if(nt.activeTexture(tt.TEXTURE0+Dt),(typeof ImageBitmap<"u"&&_t.image instanceof ImageBitmap)===!1){let on=s.getPrimaries(s.workingColorSpace),yn=_t.colorSpace===vs?null:s.getPrimaries(_t.colorSpace),Cn=_t.colorSpace===vs||on===yn?tt.NONE:tt.BROWSER_DEFAULT_WEBGL;nt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,_t.flipY),nt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),nt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,Cn)}nt.pixelStorei(tt.UNPACK_ALIGNMENT,_t.unpackAlignment);let Xt=Tt(_t.image,!1,st.maxTextureSize);Xt=An(_t,Xt);let je=rt.convert(_t.format,_t.colorSpace),wt=rt.convert(_t.type),Vt=It(_t.internalFormat,je,wt,_t.normalized,_t.colorSpace,_t.isVideoTexture);Vn(Qt,_t);let Ht,jt=_t.mipmaps,$e=_t.isVideoTexture!==!0,sn=en.__version===void 0||Jt===!0,vn=Ke.dataReady,xn=yt(_t,Xt);if(_t.isDepthTexture){if(Vt=gt(_t.format===is,_t.type),sn)if($e)nt.texStorage2D(tt.TEXTURE_2D,1,Vt,Xt.width,Xt.height);else nt.texImage2D(tt.TEXTURE_2D,0,Vt,Xt.width,Xt.height,0,je,wt,null)}else if(_t.isDataTexture)if(jt.length>0){if($e&&sn)nt.texStorage2D(tt.TEXTURE_2D,xn,Vt,jt[0].width,jt[0].height);for(let on=0,yn=jt.length;on<yn;on++)if(Ht=jt[on],$e){if(vn)nt.texSubImage2D(tt.TEXTURE_2D,on,0,0,Ht.width,Ht.height,je,wt,Ht.data)}else nt.texImage2D(tt.TEXTURE_2D,on,Vt,Ht.width,Ht.height,0,je,wt,Ht.data);_t.generateMipmaps=!1}else if($e){if(sn)nt.texStorage2D(tt.TEXTURE_2D,xn,Vt,Xt.width,Xt.height);if(vn)Yn(_t,Xt,je,wt)}else nt.texImage2D(tt.TEXTURE_2D,0,Vt,Xt.width,Xt.height,0,je,wt,Xt.data);else if(_t.isCompressedTexture)if(_t.isCompressedArrayTexture){if($e&&sn)nt.texStorage3D(tt.TEXTURE_2D_ARRAY,xn,Vt,jt[0].width,jt[0].height,Xt.depth);for(let on=0,yn=jt.length;on<yn;on++)if(Ht=jt[on],_t.format!==Yi)if(je!==null)if($e){if(vn)if(_t.layerUpdates.size>0){let Cn=vl(Ht.width,Ht.height,_t.format,_t.type);for(let ln of _t.layerUpdates){let Gn=Ht.data.subarray(ln*Cn/Ht.data.BYTES_PER_ELEMENT,(ln+1)*Cn/Ht.data.BYTES_PER_ELEMENT);nt.compressedTexSubImage3D(tt.TEXTURE_2D_ARRAY,on,0,0,ln,Ht.width,Ht.height,1,je,Gn)}}else nt.compressedTexSubImage3D(tt.TEXTURE_2D_ARRAY,on,0,0,0,Ht.width,Ht.height,Xt.depth,je,Ht.data)}else nt.compressedTexImage3D(tt.TEXTURE_2D_ARRAY,on,Vt,Ht.width,Ht.height,Xt.depth,0,Ht.data,0,0);else _n("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if($e){if(vn)nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,on,0,0,0,Ht.width,Ht.height,Xt.depth,je,wt,Ht.data)}else nt.texImage3D(tt.TEXTURE_2D_ARRAY,on,Vt,Ht.width,Ht.height,Xt.depth,0,je,wt,Ht.data);if(_t.layerUpdates.size>0)_t.clearLayerUpdates()}else{if($e&&sn)nt.texStorage2D(tt.TEXTURE_2D,xn,Vt,jt[0].width,jt[0].height);for(let on=0,yn=jt.length;on<yn;on++)if(Ht=jt[on],_t.format!==Yi)if(je!==null)if($e){if(vn)nt.compressedTexSubImage2D(tt.TEXTURE_2D,on,0,0,Ht.width,Ht.height,je,Ht.data)}else nt.compressedTexImage2D(tt.TEXTURE_2D,on,Vt,Ht.width,Ht.height,0,Ht.data);else _n("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if($e){if(vn)nt.texSubImage2D(tt.TEXTURE_2D,on,0,0,Ht.width,Ht.height,je,wt,Ht.data)}else nt.texImage2D(tt.TEXTURE_2D,on,Vt,Ht.width,Ht.height,0,je,wt,Ht.data)}else if(_t.isDataArrayTexture)if($e){if(sn)nt.texStorage3D(tt.TEXTURE_2D_ARRAY,xn,Vt,Xt.width,Xt.height,Xt.depth);if(vn)if(_t.layerUpdates.size>0){let on=vl(Xt.width,Xt.height,_t.format,_t.type);for(let yn of _t.layerUpdates){let Cn=Xt.data.subarray(yn*on/Xt.data.BYTES_PER_ELEMENT,(yn+1)*on/Xt.data.BYTES_PER_ELEMENT);nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,0,0,0,yn,Xt.width,Xt.height,1,je,wt,Cn)}_t.clearLayerUpdates()}else nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,0,0,0,0,Xt.width,Xt.height,Xt.depth,je,wt,Xt.data)}else nt.texImage3D(tt.TEXTURE_2D_ARRAY,0,Vt,Xt.width,Xt.height,Xt.depth,0,je,wt,Xt.data);else if(_t.isData3DTexture)if($e){if(sn)nt.texStorage3D(tt.TEXTURE_3D,xn,Vt,Xt.width,Xt.height,Xt.depth);if(vn)nt.texSubImage3D(tt.TEXTURE_3D,0,0,0,0,Xt.width,Xt.height,Xt.depth,je,wt,Xt.data)}else nt.texImage3D(tt.TEXTURE_3D,0,Vt,Xt.width,Xt.height,Xt.depth,0,je,wt,Xt.data);else if(_t.isFramebufferTexture){if(sn)if($e)nt.texStorage2D(tt.TEXTURE_2D,xn,Vt,Xt.width,Xt.height);else{let on=Xt.width,yn=Xt.height;for(let Cn=0;Cn<xn;Cn++)nt.texImage2D(tt.TEXTURE_2D,Cn,Vt,on,yn,0,je,wt,null),on>>=1,yn>>=1}}else if(_t.isHTMLTexture){if("texElementImage2D"in tt){let on=tt.canvas;if(!on.hasAttribute("layoutsubtree"))on.setAttribute("layoutsubtree","true");if(Xt.parentNode!==on){on.appendChild(Xt),dt.add(_t),on.onpaint=(yn)=>{let Cn=yn.changedElements;for(let ln of dt)if(Cn.includes(ln.image))ln.needsUpdate=!0},on.requestPaint();return}if(tt.texElementImage2D.length===3)tt.texElementImage2D(tt.TEXTURE_2D,tt.RGBA8,Xt);else{let{RGBA:Cn,RGBA:ln,UNSIGNED_BYTE:Gn}=tt;tt.texElementImage2D(tt.TEXTURE_2D,0,Cn,ln,Gn,Xt)}tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_MIN_FILTER,tt.LINEAR),tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_WRAP_S,tt.CLAMP_TO_EDGE),tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_WRAP_T,tt.CLAMP_TO_EDGE)}}else if(jt.length>0){if($e&&sn){let on=ri(jt[0]);nt.texStorage2D(tt.TEXTURE_2D,xn,Vt,on.width,on.height)}for(let on=0,yn=jt.length;on<yn;on++)if(Ht=jt[on],$e){if(vn)nt.texSubImage2D(tt.TEXTURE_2D,on,0,0,je,wt,Ht)}else nt.texImage2D(tt.TEXTURE_2D,on,Vt,je,wt,Ht);_t.generateMipmaps=!1}else if($e){if(sn){let on=ri(Xt);nt.texStorage2D(tt.TEXTURE_2D,xn,Vt,on.width,on.height)}if(vn)nt.texSubImage2D(tt.TEXTURE_2D,0,0,0,je,wt,Xt)}else nt.texImage2D(tt.TEXTURE_2D,0,Vt,je,wt,Xt);if(At(_t)&&_t.mipmapsAutoUpdate===!0)bt(Qt);if(en.__version=Ke.version,_t.onUpdate)_t.onUpdate(_t)}Mt.__version=_t.version}function gi(Mt,_t,Dt){if(_t.image.length!==6)return;let Qt=Un(Mt,_t),Jt=_t.source;nt.bindTexture(tt.TEXTURE_CUBE_MAP,Mt.__webglTexture,tt.TEXTURE0+Dt);let Ke=it.get(Jt);if(Jt.version!==Ke.__version||Qt===!0){nt.activeTexture(tt.TEXTURE0+Dt);let en=s.getPrimaries(s.workingColorSpace),Gt=_t.colorSpace===vs?null:s.getPrimaries(_t.colorSpace),Xt=_t.colorSpace===vs||en===Gt?tt.NONE:tt.BROWSER_DEFAULT_WEBGL;nt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,_t.flipY),nt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),nt.pixelStorei(tt.UNPACK_ALIGNMENT,_t.unpackAlignment),nt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let je=_t.isCompressedTexture||_t.image[0].isCompressedTexture,wt=_t.image[0]&&_t.image[0].isDataTexture,Vt=[];for(let ln=0;ln<6;ln++){if(!je&&!wt)Vt[ln]=Tt(_t.image[ln],!0,st.maxCubemapSize);else Vt[ln]=wt?_t.image[ln].image:_t.image[ln];Vt[ln]=An(_t,Vt[ln])}let Ht=Vt[0],jt=rt.convert(_t.format,_t.colorSpace),$e=rt.convert(_t.type),sn=It(_t.internalFormat,jt,$e,_t.normalized,_t.colorSpace),vn=_t.isVideoTexture!==!0,xn=Ke.__version===void 0||Qt===!0,on=Jt.dataReady,yn=yt(_t,Ht);Vn(tt.TEXTURE_CUBE_MAP,_t);let Cn;if(_t.isDepthTexture){if(sn=gt(_t.format===is,_t.type),xn)if(vn)nt.texStorage2D(tt.TEXTURE_CUBE_MAP,1,sn,Ht.width,Ht.height);else for(let ln=0;ln<6;ln++)nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,0,sn,Ht.width,Ht.height,0,jt,$e,null)}else if(je){if(vn&&xn)nt.texStorage2D(tt.TEXTURE_CUBE_MAP,yn,sn,Ht.width,Ht.height);for(let ln=0;ln<6;ln++){Cn=Vt[ln].mipmaps;for(let Gn=0;Gn<Cn.length;Gn++){let ti=Cn[Gn];if(_t.format!==Yi)if(jt!==null)if(vn){if(on)nt.compressedTexSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn,0,0,ti.width,ti.height,jt,ti.data)}else nt.compressedTexImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn,sn,ti.width,ti.height,0,ti.data);else _n("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(vn){if(on)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn,0,0,ti.width,ti.height,jt,$e,ti.data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn,sn,ti.width,ti.height,0,jt,$e,ti.data)}}}else{if(Cn=_t.mipmaps,vn&&xn){if(Cn.length>0)yn++;let ln=ri(Vt[0]);nt.texStorage2D(tt.TEXTURE_CUBE_MAP,yn,sn,ln.width,ln.height)}for(let ln=0;ln<6;ln++)if(wt){if(vn){if(on)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,0,0,0,Vt[ln].width,Vt[ln].height,jt,$e,Vt[ln].data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,0,sn,Vt[ln].width,Vt[ln].height,0,jt,$e,Vt[ln].data);for(let Gn=0;Gn<Cn.length;Gn++){let Oi=Cn[Gn].image[ln].image;if(vn){if(on)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn+1,0,0,Oi.width,Oi.height,jt,$e,Oi.data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn+1,sn,Oi.width,Oi.height,0,jt,$e,Oi.data)}}else{if(vn){if(on)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,0,0,0,jt,$e,Vt[ln])}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,0,sn,jt,$e,Vt[ln]);for(let Gn=0;Gn<Cn.length;Gn++){let ti=Cn[Gn];if(vn){if(on)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn+1,0,0,jt,$e,ti.image[ln])}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+ln,Gn+1,sn,jt,$e,ti.image[ln])}}}if(At(_t)&&_t.mipmapsAutoUpdate===!0)bt(tt.TEXTURE_CUBE_MAP);if(Ke.__version=Jt.version,_t.onUpdate)_t.onUpdate(_t)}Mt.__version=_t.version}function Zn(Mt,_t,Dt,Qt,Jt,Ke){let en=rt.convert(Dt.format,Dt.colorSpace),Gt=rt.convert(Dt.type),Xt=It(Dt.internalFormat,en,Gt,Dt.normalized,Dt.colorSpace),je=it.get(_t),wt=it.get(Dt);if(wt.__renderTarget=_t,!je.__hasExternalTextures){let Vt=Math.max(1,_t.width>>Ke),Ht=Math.max(1,_t.height>>Ke);if(Jt===tt.TEXTURE_3D||Jt===tt.TEXTURE_2D_ARRAY)nt.texImage3D(Jt,Ke,Xt,Vt,Ht,_t.depth,0,en,Gt,null);else nt.texImage2D(Jt,Ke,Xt,Vt,Ht,0,en,Gt,null)}if(nt.bindFramebuffer(tt.FRAMEBUFFER,Mt),Hn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,Qt,Jt,wt.__webglTexture,0,rn(_t));else if(Jt===tt.TEXTURE_2D||Jt>=tt.TEXTURE_CUBE_MAP_POSITIVE_X&&Jt<=tt.TEXTURE_CUBE_MAP_NEGATIVE_Z)tt.framebufferTexture2D(tt.FRAMEBUFFER,Qt,Jt,wt.__webglTexture,Ke);nt.bindFramebuffer(tt.FRAMEBUFFER,null)}function si(Mt,_t,Dt){if(tt.bindRenderbuffer(tt.RENDERBUFFER,Mt),_t.depthBuffer){let Qt=_t.depthTexture,Jt=Qt&&Qt.isDepthTexture?Qt.type:null,Ke=gt(_t.stencilBuffer,Jt),en=_t.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;if(Hn(_t))ot.renderbufferStorageMultisampleEXT(tt.RENDERBUFFER,rn(_t),Ke,_t.width,_t.height);else if(Dt)tt.renderbufferStorageMultisample(tt.RENDERBUFFER,rn(_t),Ke,_t.width,_t.height);else tt.renderbufferStorage(tt.RENDERBUFFER,Ke,_t.width,_t.height);tt.framebufferRenderbuffer(tt.FRAMEBUFFER,en,tt.RENDERBUFFER,Mt)}else{let Qt=_t.textures;for(let Jt=0;Jt<Qt.length;Jt++){let Ke=Qt[Jt],en=rt.convert(Ke.format,Ke.colorSpace),Gt=rt.convert(Ke.type),Xt=It(Ke.internalFormat,en,Gt,Ke.normalized,Ke.colorSpace);if(Hn(_t))ot.renderbufferStorageMultisampleEXT(tt.RENDERBUFFER,rn(_t),Xt,_t.width,_t.height);else if(Dt)tt.renderbufferStorageMultisample(tt.RENDERBUFFER,rn(_t),Xt,_t.width,_t.height);else tt.renderbufferStorage(tt.RENDERBUFFER,Xt,_t.width,_t.height)}}tt.bindRenderbuffer(tt.RENDERBUFFER,null)}function pi(Mt,_t,Dt){let Qt=_t.isWebGLCubeRenderTarget===!0;if(nt.bindFramebuffer(tt.FRAMEBUFFER,Mt),!(_t.depthTexture&&_t.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Jt=it.get(_t.depthTexture);Jt.__renderTarget=_t;let Ke=Qt?_t.depthTexture.image[0]:_t.depthTexture.image;if(!Jt.__webglTexture||Ke.width!==_t.width||Ke.height!==_t.height)Ke.width=_t.width,Ke.height=_t.height,_t.depthTexture.needsUpdate=!0;if(Qt)pn(_t.depthTexture,0);else fn(_t.depthTexture,0);let en=Jt.__webglTexture,Gt=rn(_t),Xt=Qt?tt.TEXTURE_CUBE_MAP_POSITIVE_X+Dt:tt.TEXTURE_2D,je=_t.depthTexture.format===is?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;if(_t.depthTexture.format===Xs)if(Hn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,je,Xt,en,0,Gt);else tt.framebufferTexture2D(tt.FRAMEBUFFER,je,Xt,en,0);else if(_t.depthTexture.format===is)if(Hn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,je,Xt,en,0,Gt);else tt.framebufferTexture2D(tt.FRAMEBUFFER,je,Xt,en,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mi(Mt){let _t=it.get(Mt),Dt=Mt.isWebGLCubeRenderTarget===!0;if(_t.__boundDepthTexture!==Mt.depthTexture){let Qt=Mt.depthTexture;if(_t.__depthDisposeCallback)_t.__depthDisposeCallback();if(Qt){let Jt=()=>{delete _t.__boundDepthTexture,delete _t.__depthDisposeCallback,Qt.removeEventListener("dispose",Jt)};Qt.addEventListener("dispose",Jt),_t.__depthDisposeCallback=Jt}_t.__boundDepthTexture=Qt}if(Mt.depthTexture&&!_t.__autoAllocateDepthBuffer)if(Dt)for(let Qt=0;Qt<6;Qt++)pi(_t.__webglFramebuffer[Qt],Mt,Qt);else if(Mt.texture.mipmaps.length>0)pi(_t.__webglFramebuffer[0],Mt,0);else pi(_t.__webglFramebuffer,Mt,0);else if(Dt){_t.__webglDepthbuffer=[];for(let Qt=0;Qt<6;Qt++)if(nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer[Qt]),_t.__webglDepthbuffer[Qt]===void 0)_t.__webglDepthbuffer[Qt]=tt.createRenderbuffer(),si(_t.__webglDepthbuffer[Qt],Mt,!1);else{let Jt=Mt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,Ke=_t.__webglDepthbuffer[Qt];tt.bindRenderbuffer(tt.RENDERBUFFER,Ke),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,Jt,tt.RENDERBUFFER,Ke)}}else{if(Mt.texture.mipmaps.length>0)nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer[0]);else nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer);if(_t.__webglDepthbuffer===void 0)_t.__webglDepthbuffer=tt.createRenderbuffer(),si(_t.__webglDepthbuffer,Mt,!1);else{let Jt=Mt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,Ke=_t.__webglDepthbuffer;tt.bindRenderbuffer(tt.RENDERBUFFER,Ke),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,Jt,tt.RENDERBUFFER,Ke)}}nt.bindFramebuffer(tt.FRAMEBUFFER,null)}function Mi(Mt,_t,Dt){let Qt=it.get(Mt);if(_t!==void 0)Zn(Qt.__webglFramebuffer,Mt,Mt.texture,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,0);if(Dt!==void 0)mi(Mt)}function Pt(Mt){let _t=Mt.texture,Dt=it.get(Mt),Qt=it.get(_t);Mt.addEventListener("dispose",zt),Nt(Mt);let Jt=Mt.textures,Ke=Mt.isWebGLCubeRenderTarget===!0,en=Jt.length>1;if(!en){if(Qt.__webglTexture===void 0)Qt.__webglTexture=tt.createTexture();Qt.__version=_t.version,at.memory.textures++}if(Ke){Dt.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(_t.mipmaps.length>0){Dt.__webglFramebuffer[Gt]=[];for(let Xt=0;Xt<_t.mipmaps.length;Xt++)Dt.__webglFramebuffer[Gt][Xt]=tt.createFramebuffer()}else Dt.__webglFramebuffer[Gt]=tt.createFramebuffer()}else{if(_t.mipmaps.length>0){Dt.__webglFramebuffer=[];for(let Gt=0;Gt<_t.mipmaps.length;Gt++)Dt.__webglFramebuffer[Gt]=tt.createFramebuffer()}else Dt.__webglFramebuffer=tt.createFramebuffer();if(en)for(let Gt=0,Xt=Jt.length;Gt<Xt;Gt++){let je=it.get(Jt[Gt]);if(je.__webglTexture===void 0)je.__webglTexture=tt.createTexture(),at.memory.textures++}if(Mt.samples>0&&Hn(Mt)===!1){Dt.__webglMultisampledFramebuffer=tt.createFramebuffer(),Dt.__webglColorRenderbuffer=[],nt.bindFramebuffer(tt.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Jt.length;Gt++){let Xt=Jt[Gt];Dt.__webglColorRenderbuffer[Gt]=tt.createRenderbuffer(),tt.bindRenderbuffer(tt.RENDERBUFFER,Dt.__webglColorRenderbuffer[Gt]);let je=rt.convert(Xt.format,Xt.colorSpace),wt=rt.convert(Xt.type),Vt=It(Xt.internalFormat,je,wt,Xt.normalized,Xt.colorSpace,Mt.isXRRenderTarget===!0),Ht=rn(Mt);tt.renderbufferStorageMultisample(tt.RENDERBUFFER,Ht,Vt,Mt.width,Mt.height),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Gt,tt.RENDERBUFFER,Dt.__webglColorRenderbuffer[Gt])}if(tt.bindRenderbuffer(tt.RENDERBUFFER,null),Mt.depthBuffer)Dt.__webglDepthRenderbuffer=tt.createRenderbuffer(),si(Dt.__webglDepthRenderbuffer,Mt,!0);nt.bindFramebuffer(tt.FRAMEBUFFER,null)}}if(Ke){nt.bindTexture(tt.TEXTURE_CUBE_MAP,Qt.__webglTexture),Vn(tt.TEXTURE_CUBE_MAP,_t);for(let Gt=0;Gt<6;Gt++)if(_t.mipmaps.length>0)for(let Xt=0;Xt<_t.mipmaps.length;Xt++)Zn(Dt.__webglFramebuffer[Gt][Xt],Mt,_t,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,Xt);else Zn(Dt.__webglFramebuffer[Gt],Mt,_t,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);if(At(_t))bt(tt.TEXTURE_CUBE_MAP);else if(_t.mipmaps.length>0)tt.texParameteri(tt.TEXTURE_CUBE_MAP,tt.TEXTURE_MAX_LEVEL,_t.mipmaps.length-1);nt.unbindTexture()}else if(en){for(let Gt=0,Xt=Jt.length;Gt<Xt;Gt++){let je=Jt[Gt],wt=it.get(je),Vt=tt.TEXTURE_2D;if(Mt.isWebGL3DRenderTarget||Mt.isWebGLArrayRenderTarget)Vt=Mt.isWebGL3DRenderTarget?tt.TEXTURE_3D:tt.TEXTURE_2D_ARRAY;if(nt.bindTexture(Vt,wt.__webglTexture),Vn(Vt,je),Zn(Dt.__webglFramebuffer,Mt,je,tt.COLOR_ATTACHMENT0+Gt,Vt,0),At(je))bt(Vt)}nt.unbindTexture()}else{let Gt=tt.TEXTURE_2D;if(Mt.isWebGL3DRenderTarget||Mt.isWebGLArrayRenderTarget)Gt=Mt.isWebGL3DRenderTarget?tt.TEXTURE_3D:tt.TEXTURE_2D_ARRAY;if(nt.bindTexture(Gt,Qt.__webglTexture),Vn(Gt,_t),_t.mipmaps.length>0)for(let Xt=0;Xt<_t.mipmaps.length;Xt++)Zn(Dt.__webglFramebuffer[Xt],Mt,_t,tt.COLOR_ATTACHMENT0,Gt,Xt);else Zn(Dt.__webglFramebuffer,Mt,_t,tt.COLOR_ATTACHMENT0,Gt,0);if(At(_t))bt(Gt);else if(_t.mipmaps.length>0)tt.texParameteri(Gt,tt.TEXTURE_MAX_LEVEL,_t.mipmaps.length-1);nt.unbindTexture()}if(Mt.depthBuffer)mi(Mt)}function bi(Mt){let _t=Mt.textures;for(let Dt=0,Qt=_t.length;Dt<Qt;Dt++){let Jt=_t[Dt];if(At(Jt)&&Jt.mipmapsAutoUpdate===!0){let Ke=Et(Mt),en=it.get(Jt).__webglTexture;nt.bindTexture(Ke,en),bt(Ke),nt.unbindTexture()}}}let zn=[];function jn(Mt){if(Mt.samples>0){if(Hn(Mt)===!1){let{textures:_t,width:Dt,height:Qt}=Mt,Jt=tt.COLOR_BUFFER_BIT,Ke=Mt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,en=it.get(Mt),Gt=_t.length>1;if(Gt)for(let je=0;je<_t.length;je++)nt.bindFramebuffer(tt.FRAMEBUFFER,en.__webglMultisampledFramebuffer),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+je,tt.RENDERBUFFER,null),nt.bindFramebuffer(tt.FRAMEBUFFER,en.__webglFramebuffer),tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0+je,tt.TEXTURE_2D,null,0);if(nt.bindFramebuffer(tt.READ_FRAMEBUFFER,en.__webglMultisampledFramebuffer),Mt.texture.mipmaps.length>0)nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,en.__webglFramebuffer[0]);else nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let je=0;je<_t.length;je++){if(Mt.resolveDepthBuffer){if(Mt.depthBuffer)Jt|=tt.DEPTH_BUFFER_BIT;if(Mt.stencilBuffer&&Mt.resolveStencilBuffer)Jt|=tt.STENCIL_BUFFER_BIT}if(Gt){tt.framebufferRenderbuffer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.RENDERBUFFER,en.__webglColorRenderbuffer[je]);let wt=it.get(_t[je]).__webglTexture;tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,wt,0)}if(tt.blitFramebuffer(0,0,Dt,Qt,0,0,Dt,Qt,Jt,tt.NEAREST),lt===!0){if(zn.length=0,zn.push(tt.COLOR_ATTACHMENT0+je),Mt.depthBuffer&&Mt.storeMultisampledDepthBuffer===!1)zn.push(Ke);tt.invalidateFramebuffer(tt.READ_FRAMEBUFFER,zn)}}if(nt.bindFramebuffer(tt.READ_FRAMEBUFFER,null),nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null),Gt)for(let je=0;je<_t.length;je++){nt.bindFramebuffer(tt.FRAMEBUFFER,en.__webglMultisampledFramebuffer),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+je,tt.RENDERBUFFER,en.__webglColorRenderbuffer[je]);let wt=it.get(_t[je]).__webglTexture;nt.bindFramebuffer(tt.FRAMEBUFFER,en.__webglFramebuffer),tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0+je,tt.TEXTURE_2D,wt,0)}nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,en.__webglMultisampledFramebuffer)}else if(Mt.depthBuffer&&Mt.storeMultisampledDepthBuffer===!1&&lt){let _t=Mt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;tt.invalidateFramebuffer(tt.DRAW_FRAMEBUFFER,[_t])}}}function rn(Mt){return Math.min(st.maxSamples,Mt.samples)}function Hn(Mt){let _t=it.get(Mt);return Mt.samples>0&&et.has("WEBGL_multisampled_render_to_texture")===!0&&_t.__useRenderToTexture!==!1}function bn(Mt){let _t=at.render.frame;if(ut.get(Mt)!==_t)ut.set(Mt,_t),Mt.update()}function An(Mt,_t){let{colorSpace:Dt,format:Qt,type:Jt}=Mt;if(Mt.isCompressedTexture===!0||Mt.isVideoTexture===!0)return _t;if(Dt!==L&&Dt!==vs)if(s.getTransfer(Dt)===c){if(Qt!==Yi||Jt!==Ri)_n("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Tn("WebGLTextures: Unsupported texture color space:",Dt);return _t}function ri(Mt){if(typeof HTMLImageElement<"u"&&Mt instanceof HTMLImageElement)ct.width=Mt.naturalWidth||Mt.width,ct.height=Mt.naturalHeight||Mt.height;else if(typeof VideoFrame<"u"&&Mt instanceof VideoFrame)ct.width=Mt.displayWidth,ct.height=Mt.displayHeight;else ct.width=Mt.width,ct.height=Mt.height;return ct}this.allocateTextureUnit=Yt,this.resetTextureUnits=$t,this.getTextureUnits=Je,this.setTextureUnits=mn,this.setTexture2D=fn,this.setTexture2DArray=Sn,this.setTexture3D=Mn,this.setTextureCube=pn,this.rebindTextures=Mi,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=bi,this.updateMultisampleRenderTarget=jn,this.setupDepthRenderbuffer=mi,this.setupFrameBufferTexture=Zn,this.useMultisampledRTT=Hn,this.dispose=qt}function t_(tt,et){function nt(it,st=vs){let rt,at=s.getTransfer(st);if(it===Ri)return tt.UNSIGNED_BYTE;if(it===lo)return tt.UNSIGNED_SHORT_4_4_4_4;if(it===co)return tt.UNSIGNED_SHORT_5_5_5_1;if(it===sh)return tt.UNSIGNED_INT_5_9_9_9_REV;if(it===rh)return tt.UNSIGNED_INT_10F_11F_11F_REV;if(it===nh)return tt.BYTE;if(it===ih)return tt.SHORT;if(it===pr)return tt.UNSIGNED_SHORT;if(it===oo)return tt.INT;if(it===ns)return tt.UNSIGNED_INT;if(it===qi)return tt.FLOAT;if(it===A)return tt.HALF_FLOAT;if(it===ah)return tt.ALPHA;if(it===oh)return tt.RGB;if(it===Yi)return tt.RGBA;if(it===Xs)return tt.DEPTH_COMPONENT;if(it===is)return tt.DEPTH_STENCIL;if(it===lh)return tt.RED;if(it===ho)return tt.RED_INTEGER;if(it===xs)return tt.RG;if(it===uo)return tt.RG_INTEGER;if(it===fo)return tt.RGBA_INTEGER;if(it===sa||it===ra||it===aa||it===oa)if(at===c)if(rt=et.get("WEBGL_compressed_texture_s3tc_srgb"),rt!==null){if(it===sa)return rt.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(it===ra)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(it===aa)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(it===oa)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(rt=et.get("WEBGL_compressed_texture_s3tc"),rt!==null){if(it===sa)return rt.COMPRESSED_RGB_S3TC_DXT1_EXT;if(it===ra)return rt.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(it===aa)return rt.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(it===oa)return rt.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(it===po||it===mo||it===go||it===_o)if(rt=et.get("WEBGL_compressed_texture_pvrtc"),rt!==null){if(it===po)return rt.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(it===mo)return rt.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(it===go)return rt.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(it===_o)return rt.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(it===xo||it===vo||it===yo||it===So||it===Mo||it===la||it===bo)if(rt=et.get("WEBGL_compressed_texture_etc"),rt!==null){if(it===xo||it===vo)return at===c?rt.COMPRESSED_SRGB8_ETC2:rt.COMPRESSED_RGB8_ETC2;if(it===yo)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:rt.COMPRESSED_RGBA8_ETC2_EAC;if(it===So)return rt.COMPRESSED_R11_EAC;if(it===Mo)return rt.COMPRESSED_SIGNED_R11_EAC;if(it===la)return rt.COMPRESSED_RG11_EAC;if(it===bo)return rt.COMPRESSED_SIGNED_RG11_EAC}else return null;if(it===To||it===Eo||it===Ao||it===wo||it===Ro||it===Co||it===Io||it===Po||it===Lo||it===No||it===Do||it===Uo||it===Fo||it===Oo)if(rt=et.get("WEBGL_compressed_texture_astc"),rt!==null){if(it===To)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:rt.COMPRESSED_RGBA_ASTC_4x4_KHR;if(it===Eo)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:rt.COMPRESSED_RGBA_ASTC_5x4_KHR;if(it===Ao)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:rt.COMPRESSED_RGBA_ASTC_5x5_KHR;if(it===wo)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:rt.COMPRESSED_RGBA_ASTC_6x5_KHR;if(it===Ro)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:rt.COMPRESSED_RGBA_ASTC_6x6_KHR;if(it===Co)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:rt.COMPRESSED_RGBA_ASTC_8x5_KHR;if(it===Io)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:rt.COMPRESSED_RGBA_ASTC_8x6_KHR;if(it===Po)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:rt.COMPRESSED_RGBA_ASTC_8x8_KHR;if(it===Lo)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:rt.COMPRESSED_RGBA_ASTC_10x5_KHR;if(it===No)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:rt.COMPRESSED_RGBA_ASTC_10x6_KHR;if(it===Do)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:rt.COMPRESSED_RGBA_ASTC_10x8_KHR;if(it===Uo)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:rt.COMPRESSED_RGBA_ASTC_10x10_KHR;if(it===Fo)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:rt.COMPRESSED_RGBA_ASTC_12x10_KHR;if(it===Oo)return at===c?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:rt.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(it===Bo||it===zo||it===Go)if(rt=et.get("EXT_texture_compression_bptc"),rt!==null){if(it===Bo)return at===c?rt.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:rt.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(it===zo)return rt.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(it===Go)return rt.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(it===ko||it===Ho||it===ca||it===Wo)if(rt=et.get("EXT_texture_compression_rgtc"),rt!==null){if(it===ko)return rt.COMPRESSED_RED_RGTC1_EXT;if(it===Ho)return rt.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(it===ca)return rt.COMPRESSED_RED_GREEN_RGTC2_EXT;if(it===Wo)return rt.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(it===_s)return tt.UNSIGNED_INT_24_8;return tt[it]!==void 0?tt[it]:null}return{convert:nt}}var e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`;class uu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(tt,et){if(this.texture===null){let nt=new xa(tt.texture);if(tt.depthNear!==et.depthNear||tt.depthFar!==et.depthFar)this.depthNear=tt.depthNear,this.depthFar=tt.depthFar;this.texture=nt}}getMesh(tt){if(this.texture!==null){if(this.mesh===null){let et=tt.cameras[0].viewport,nt=new p({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:et.z},depthHeight:{value:et.w}}});this.mesh=new r(new P(20,20),nt)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class du extends Zi{constructor(tt,et){super();let nt=this,it=null,st=1,rt=null,at="local-floor",ot=1,lt=null,ct=null,ut=null,dt=null,ht=null,ft=null,vt=typeof XRWebGLBinding<"u",St=new uu,pt={},mt=et.getContextAttributes(),Tt=null,At=null,bt=[],Et=[],It=new n,gt=null,yt=null,Nt=new _;Nt.viewport=new a;let kt=new _;kt.viewport=new a;let Lt=[Nt,kt],zt=new gl,Kt=null,Rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Yt){let ae=bt[Yt];if(ae===void 0)ae=new gr,bt[Yt]=ae;return ae.getTargetRaySpace()},this.getControllerGrip=function(Yt){let ae=bt[Yt];if(ae===void 0)ae=new gr,bt[Yt]=ae;return ae.getGripSpace()},this.getHand=function(Yt){let ae=bt[Yt];if(ae===void 0)ae=new gr,bt[Yt]=ae;return ae.getHandSpace()};function qt(Yt){let ae=Et.indexOf(Yt.inputSource);if(ae===-1)return;let fn=bt[ae];if(fn!==void 0)fn.update(Yt.inputSource,Yt.frame,lt||rt),fn.dispatchEvent({type:Yt.type,data:Yt.inputSource})}function Zt(){it.removeEventListener("select",qt),it.removeEventListener("selectstart",qt),it.removeEventListener("selectend",qt),it.removeEventListener("squeeze",qt),it.removeEventListener("squeezestart",qt),it.removeEventListener("squeezeend",qt),it.removeEventListener("end",Zt),it.removeEventListener("inputsourceschange",Ot);for(let Yt=0;Yt<bt.length;Yt++){let ae=Et[Yt];if(ae===null)continue;Et[Yt]=null,bt[Yt].disconnect(ae)}Kt=null,Rt=null,St.reset();for(let Yt in pt)delete pt[Yt];if(tt.setRenderTarget(Tt),ht=null,dt=null,ut=null,it=null,At=null,mn.stop(),nt.isPresenting=!1,tt.setPixelRatio(gt),tt.setSize(It.width,It.height,!1),yt!==null){let Yt=yt.camera;Yt.fov=yt.fov,Yt.zoom=yt.zoom,Yt.updateProjectionMatrix(),yt=null}nt.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Yt){if(st=Yt,nt.isPresenting===!0)_n("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Yt){if(at=Yt,nt.isPresenting===!0)_n("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return lt||rt},this.setReferenceSpace=function(Yt){lt=Yt},this.getBaseLayer=function(){return dt!==null?dt:ht},this.getBinding=function(){if(ut===null&&vt)ut=new XRWebGLBinding(it,et);return ut},this.getFrame=function(){return ft},this.getSession=function(){return it},this.setSession=async function(Yt){if(it=Yt,it!==null){if(Tt=tt.getRenderTarget(),it.addEventListener("select",qt),it.addEventListener("selectstart",qt),it.addEventListener("selectend",qt),it.addEventListener("squeeze",qt),it.addEventListener("squeezestart",qt),it.addEventListener("squeezeend",qt),it.addEventListener("end",Zt),it.addEventListener("inputsourceschange",Ot),mt.xrCompatible!==!0)await et.makeXRCompatible();if(gt=tt.getPixelRatio(),tt.getSize(It),!(vt&&("createProjectionLayer"in XRWebGLBinding.prototype))){let fn={antialias:mt.antialias,alpha:!0,depth:mt.depth,stencil:mt.stencil,framebufferScaleFactor:st};ht=new XRWebGLLayer(it,et,fn),it.updateRenderState({baseLayer:ht}),tt.setPixelRatio(1),tt.setSize(ht.framebufferWidth,ht.framebufferHeight,!1),At=new M(ht.framebufferWidth,ht.framebufferHeight,{format:Yi,type:Ri,colorSpace:tt.outputColorSpace,stencilBuffer:mt.stencil,resolveDepthBuffer:ht.ignoreDepthValues===!1,resolveStencilBuffer:ht.ignoreDepthValues===!1,storeMultisampledDepthBuffer:ht.ignoreDepthValues===!1,storeMultisampledStencilBuffer:ht.ignoreDepthValues===!1})}else{let fn=null,Sn=null,Mn=null;if(mt.depth)Mn=mt.stencil?et.DEPTH24_STENCIL8:et.DEPTH_COMPONENT24,fn=mt.stencil?is:Xs,Sn=mt.stencil?_s:ns;let pn={colorFormat:et.RGBA8,depthFormat:Mn,scaleFactor:st};ut=this.getBinding(),dt=ut.createProjectionLayer(pn),it.updateRenderState({layers:[dt]}),tt.setPixelRatio(1),tt.setSize(dt.textureWidth,dt.textureHeight,!1),At=new M(dt.textureWidth,dt.textureHeight,{format:Yi,type:Ri,depthTexture:new ss(dt.textureWidth,dt.textureHeight,Sn,void 0,void 0,void 0,void 0,void 0,void 0,fn),stencilBuffer:mt.stencil,colorSpace:tt.outputColorSpace,samples:mt.antialias?4:0,resolveDepthBuffer:dt.ignoreDepthValues===!1,resolveStencilBuffer:dt.ignoreDepthValues===!1,storeMultisampledDepthBuffer:dt.ignoreDepthValues===!1,storeMultisampledStencilBuffer:dt.ignoreDepthValues===!1})}At.isXRRenderTarget=!0,this.setFoveation(ot),lt=null,rt=await it.requestReferenceSpace(at),mn.setContext(it),mn.start(),nt.isPresenting=!0,nt.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(it!==null)return it.environmentBlendMode},this.getDepthTexture=function(){return St.getDepthTexture()};function Ot(Yt){for(let ae=0;ae<Yt.removed.length;ae++){let fn=Yt.removed[ae],Sn=Et.indexOf(fn);if(Sn>=0)Et[Sn]=null,bt[Sn].disconnect(fn)}for(let ae=0;ae<Yt.added.length;ae++){let fn=Yt.added[ae],Sn=Et.indexOf(fn);if(Sn===-1){for(let pn=0;pn<bt.length;pn++)if(pn>=Et.length){Et.push(fn),Sn=pn;break}else if(Et[pn]===null){Et[pn]=fn,Sn=pn;break}if(Sn===-1)break}let Mn=bt[Sn];if(Mn)Mn.connect(fn)}}function Qe(Yt,ae){if(ae===null)Yt.matrixWorld.copy(Yt.matrix);else Yt.matrixWorld.multiplyMatrices(ae.matrixWorld,Yt.matrix);Yt.matrixWorldInverse.copy(Yt.matrixWorld).invert()}this.updateCamera=function(Yt){if(it===null)return;let{near:ae,far:fn}=Yt;if(St.texture!==null){if(St.depthNear>0)ae=St.depthNear;if(St.depthFar>0)fn=St.depthFar}if(zt.near=kt.near=Nt.near=ae,zt.far=kt.far=Nt.far=fn,Kt!==zt.near||Rt!==zt.far)it.updateRenderState({depthNear:zt.near,depthFar:zt.far}),Kt=zt.near,Rt=zt.far;zt.layers.mask=Yt.layers.mask|6,Nt.layers.mask=zt.layers.mask&-5,kt.layers.mask=zt.layers.mask&-3;let Sn=Yt.parent,Mn=zt.cameras;Qe(zt,Sn);for(let pn=0;pn<Mn.length;pn++)Qe(Mn[pn],Sn);if(zt.projectionMatrix.copy(Nt.projectionMatrix),zt.projectionMatrixInverse.copy(Nt.projectionMatrixInverse),yt===null&&Yt.isPerspectiveCamera)yt={camera:Yt,fov:Yt.fov,zoom:Yt.zoom};Wt(Yt,zt,Sn)};function Wt(Yt,ae,fn){if(fn===null)Yt.matrix.copy(ae.matrixWorld);else Yt.matrix.copy(fn.matrixWorld),Yt.matrix.invert(),Yt.matrix.multiply(ae.matrixWorld);if(Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.updateMatrixWorld(!0),Yt.projectionMatrix.copy(ae.projectionMatrix),Yt.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Yt.isPerspectiveCamera)Yt.fov=ms*2*Math.atan(1/Yt.projectionMatrix.elements[5]),Yt.zoom=1}this.getCamera=function(){return zt},this.getFoveation=function(){if(dt===null&&ht===null)return;return ot},this.setFoveation=function(Yt){if(ot=Yt,dt!==null)dt.fixedFoveation=Yt;if(ht!==null&&ht.fixedFoveation!==void 0)ht.fixedFoveation=Yt},this.hasDepthSensing=function(){return St.texture!==null},this.getDepthSensingMesh=function(){return St.getMesh(zt)},this.getCameraTexture=function(Yt){return pt[Yt]};let $t=null;function Je(Yt,ae){if(ct=ae.getViewerPose(lt||rt),ft=ae,ct!==null){let fn=ct.views;if(ht!==null)tt.setRenderTargetFramebuffer(At,ht.framebuffer),tt.setRenderTarget(At);let Sn=!1;if(fn.length!==zt.cameras.length)zt.cameras.length=0,Sn=!0;for(let Ln=0;Ln<fn.length;Ln++){let Rn=fn[Ln],Vn=null;if(ht!==null)Vn=ht.getViewport(Rn);else{let qn=ut.getViewSubImage(dt,Rn);if(Vn=qn.viewport,Ln===0)tt.setRenderTargetTextures(At,qn.colorTexture,qn.depthStencilTexture),tt.setRenderTarget(At)}let Un=Lt[Ln];if(Un===void 0)Un=new _,Un.layers.enable(Ln),Un.viewport=new a,Lt[Ln]=Un;if(Un.matrix.fromArray(Rn.transform.matrix),Un.matrix.decompose(Un.position,Un.quaternion,Un.scale),Un.projectionMatrix.fromArray(Rn.projectionMatrix),Un.projectionMatrixInverse.copy(Un.projectionMatrix).invert(),Un.viewport.set(Vn.x,Vn.y,Vn.width,Vn.height),Ln===0)zt.matrix.copy(Un.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale);if(Sn===!0)zt.cameras.push(Un)}let Mn=it.enabledFeatures;if(Mn&&Mn.includes("depth-sensing")&&it.depthUsage=="gpu-optimized"&&vt){ut=nt.getBinding();let Ln=ut.getDepthInformation(fn[0]);if(Ln&&Ln.isValid&&Ln.texture)St.init(Ln,it.renderState)}if(Mn&&Mn.includes("camera-access")&&vt){tt.state.unbindTexture(),ut=nt.getBinding();for(let Ln=0;Ln<fn.length;Ln++){let Rn=fn[Ln].camera;if(Rn){let Vn=pt[Rn];if(!Vn)Vn=new xa,pt[Rn]=Vn;let Un=ut.getCameraImage(Rn);Vn.sourceTexture=Un}}}}for(let fn=0;fn<bt.length;fn++){let Sn=Et[fn],Mn=bt[fn];if(Sn!==null&&Mn!==void 0)Mn.update(Sn,ae,lt||rt)}if($t)$t(Yt,ae);if(ae.detectedPlanes)nt.dispatchEvent({type:"planesdetected",data:ae});ft=null}let mn=new $h;mn.setAnimationLoop(Je),this.setAnimationLoop=function(Yt){$t=Yt},this.dispose=function(){}}}var i_=new i,fu=new En;fu.set(-1,0,0,0,1,0,0,0,1);function s_(tt,et){function nt(pt,mt){if(pt.matrixAutoUpdate===!0)pt.updateMatrix();mt.value.copy(pt.matrix)}function it(pt,mt){if(mt.color.getRGB(pt.fogColor.value,al(tt)),mt.isFog)pt.fogNear.value=mt.near,pt.fogFar.value=mt.far;else if(mt.isFogExp2)pt.fogDensity.value=mt.density}function st(pt,mt,Tt,At,bt){if(mt.isNodeMaterial)mt.uniformsNeedUpdate=!1;else if(mt.isMeshBasicMaterial)rt(pt,mt);else if(mt.isMeshLambertMaterial){if(rt(pt,mt),mt.envMap)pt.envMapIntensity.value=mt.envMapIntensity}else if(mt.isMeshToonMaterial)rt(pt,mt),dt(pt,mt);else if(mt.isMeshPhongMaterial){if(rt(pt,mt),ut(pt,mt),mt.envMap)pt.envMapIntensity.value=mt.envMapIntensity}else if(mt.isMeshStandardMaterial){if(rt(pt,mt),ht(pt,mt),mt.isMeshPhysicalMaterial)ft(pt,mt,bt)}else if(mt.isMeshMatcapMaterial)rt(pt,mt),vt(pt,mt);else if(mt.isMeshDepthMaterial)rt(pt,mt);else if(mt.isMeshDistanceMaterial)rt(pt,mt),St(pt,mt);else if(mt.isMeshNormalMaterial)rt(pt,mt);else if(mt.isLineBasicMaterial){if(at(pt,mt),mt.isLineDashedMaterial)ot(pt,mt)}else if(mt.isPointsMaterial)lt(pt,mt,Tt,At);else if(mt.isSpriteMaterial)ct(pt,mt);else if(mt.isShadowMaterial)pt.color.value.copy(mt.color),pt.opacity.value=mt.opacity;else if(mt.isShaderMaterial)mt.uniformsNeedUpdate=!1}function rt(pt,mt){if(pt.opacity.value=mt.opacity,mt.color)pt.diffuse.value.copy(mt.color);if(mt.emissive)pt.emissive.value.copy(mt.emissive).multiplyScalar(mt.emissiveIntensity);if(mt.map)pt.map.value=mt.map,nt(mt.map,pt.mapTransform);if(mt.alphaMap)pt.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,pt.alphaMapTransform);if(mt.bumpMap){if(pt.bumpMap.value=mt.bumpMap,nt(mt.bumpMap,pt.bumpMapTransform),pt.bumpScale.value=mt.bumpScale,mt.side===T)pt.bumpScale.value*=-1}if(mt.normalMap){if(pt.normalMap.value=mt.normalMap,nt(mt.normalMap,pt.normalMapTransform),pt.normalScale.value.copy(mt.normalScale),mt.side===T)pt.normalScale.value.negate()}if(mt.displacementMap)pt.displacementMap.value=mt.displacementMap,nt(mt.displacementMap,pt.displacementMapTransform),pt.displacementScale.value=mt.displacementScale,pt.displacementBias.value=mt.displacementBias;if(mt.emissiveMap)pt.emissiveMap.value=mt.emissiveMap,nt(mt.emissiveMap,pt.emissiveMapTransform);if(mt.specularMap)pt.specularMap.value=mt.specularMap,nt(mt.specularMap,pt.specularMapTransform);if(mt.alphaTest>0)pt.alphaTest.value=mt.alphaTest;let Tt=et.get(mt),{envMap:At,envMapRotation:bt}=Tt;if(At){if(pt.envMap.value=At,pt.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(bt)).transpose(),At.isCubeTexture&&At.isRenderTargetTexture===!1)pt.envMapRotation.value.premultiply(fu);pt.reflectivity.value=mt.reflectivity,pt.ior.value=mt.ior,pt.refractionRatio.value=mt.refractionRatio}if(mt.lightMap)pt.lightMap.value=mt.lightMap,pt.lightMapIntensity.value=mt.lightMapIntensity,nt(mt.lightMap,pt.lightMapTransform);if(mt.aoMap)pt.aoMap.value=mt.aoMap,pt.aoMapIntensity.value=mt.aoMapIntensity,nt(mt.aoMap,pt.aoMapTransform)}function at(pt,mt){if(pt.diffuse.value.copy(mt.color),pt.opacity.value=mt.opacity,mt.map)pt.map.value=mt.map,nt(mt.map,pt.mapTransform)}function ot(pt,mt){pt.dashSize.value=mt.dashSize,pt.totalSize.value=mt.dashSize+mt.gapSize,pt.scale.value=mt.scale}function lt(pt,mt,Tt,At){if(pt.diffuse.value.copy(mt.color),pt.opacity.value=mt.opacity,pt.size.value=mt.size*Tt,pt.scale.value=At*0.5,mt.map)pt.map.value=mt.map,nt(mt.map,pt.uvTransform);if(mt.alphaMap)pt.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,pt.alphaMapTransform);if(mt.alphaTest>0)pt.alphaTest.value=mt.alphaTest}function ct(pt,mt){if(pt.diffuse.value.copy(mt.color),pt.opacity.value=mt.opacity,pt.rotation.value=mt.rotation,mt.map)pt.map.value=mt.map,nt(mt.map,pt.mapTransform);if(mt.alphaMap)pt.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,pt.alphaMapTransform);if(mt.alphaTest>0)pt.alphaTest.value=mt.alphaTest}function ut(pt,mt){pt.specular.value.copy(mt.specular),pt.shininess.value=Math.max(mt.shininess,0.0001)}function dt(pt,mt){if(mt.gradientMap)pt.gradientMap.value=mt.gradientMap}function ht(pt,mt){if(pt.metalness.value=mt.metalness,mt.metalnessMap)pt.metalnessMap.value=mt.metalnessMap,nt(mt.metalnessMap,pt.metalnessMapTransform);if(pt.roughness.value=mt.roughness,mt.roughnessMap)pt.roughnessMap.value=mt.roughnessMap,nt(mt.roughnessMap,pt.roughnessMapTransform);if(mt.envMap)pt.envMapIntensity.value=mt.envMapIntensity}function ft(pt,mt,Tt){if(pt.ior.value=mt.ior,mt.diffuseRoughness>0){if(pt.diffuseRoughness.value=mt.diffuseRoughness,mt.diffuseRoughnessMap)pt.diffuseRoughnessMap.value=mt.diffuseRoughnessMap,nt(mt.diffuseRoughnessMap,pt.diffuseRoughnessMapTransform)}if(mt.sheen>0){if(pt.sheenColor.value.copy(mt.sheenColor).multiplyScalar(mt.sheen),pt.sheenRoughness.value=mt.sheenRoughness,mt.sheenColorMap)pt.sheenColorMap.value=mt.sheenColorMap,nt(mt.sheenColorMap,pt.sheenColorMapTransform);if(mt.sheenRoughnessMap)pt.sheenRoughnessMap.value=mt.sheenRoughnessMap,nt(mt.sheenRoughnessMap,pt.sheenRoughnessMapTransform)}if(mt.clearcoat>0){if(pt.clearcoat.value=mt.clearcoat,pt.clearcoatRoughness.value=mt.clearcoatRoughness,mt.clearcoatMap)pt.clearcoatMap.value=mt.clearcoatMap,nt(mt.clearcoatMap,pt.clearcoatMapTransform);if(mt.clearcoatRoughnessMap)pt.clearcoatRoughnessMap.value=mt.clearcoatRoughnessMap,nt(mt.clearcoatRoughnessMap,pt.clearcoatRoughnessMapTransform);if(mt.clearcoatNormalMap){if(pt.clearcoatNormalMap.value=mt.clearcoatNormalMap,nt(mt.clearcoatNormalMap,pt.clearcoatNormalMapTransform),pt.clearcoatNormalScale.value.copy(mt.clearcoatNormalScale),mt.side===T)pt.clearcoatNormalScale.value.negate()}}if(mt.dispersion>0)pt.dispersion.value=mt.dispersion;if(mt.retroreflectivity>0)pt.retroreflectivity.value=mt.retroreflectivity;if(mt.iridescence>0){if(pt.iridescence.value=mt.iridescence,pt.iridescenceIOR.value=mt.iridescenceIOR,pt.iridescenceThicknessMinimum.value=mt.iridescenceThicknessMinimum,pt.iridescenceThicknessMaximum.value=mt.iridescenceThicknessMaximum,mt.iridescenceMap)pt.iridescenceMap.value=mt.iridescenceMap,nt(mt.iridescenceMap,pt.iridescenceMapTransform);if(mt.iridescenceThicknessMap)pt.iridescenceThicknessMap.value=mt.iridescenceThicknessMap,nt(mt.iridescenceThicknessMap,pt.iridescenceThicknessMapTransform)}if(mt.transmission>0){if(pt.transmission.value=mt.transmission,pt.transmissionSamplerMap.value=Tt.texture,pt.transmissionSamplerSize.value.set(Tt.width,Tt.height),mt.transmissionMap)pt.transmissionMap.value=mt.transmissionMap,nt(mt.transmissionMap,pt.transmissionMapTransform);if(pt.thickness.value=mt.thickness,mt.thicknessMap)pt.thicknessMap.value=mt.thicknessMap,nt(mt.thicknessMap,pt.thicknessMapTransform);pt.attenuationDistance.value=mt.attenuationDistance,pt.attenuationColor.value.copy(mt.attenuationColor)}if(mt.anisotropy>0){if(pt.anisotropyVector.value.set(mt.anisotropy*Math.cos(mt.anisotropyRotation),mt.anisotropy*Math.sin(mt.anisotropyRotation)),mt.anisotropyMap)pt.anisotropyMap.value=mt.anisotropyMap,nt(mt.anisotropyMap,pt.anisotropyMapTransform)}if(pt.specularIntensity.value=mt.specularIntensity,pt.specularColor.value.copy(mt.specularColor),mt.specularColorMap)pt.specularColorMap.value=mt.specularColorMap,nt(mt.specularColorMap,pt.specularColorMapTransform);if(mt.specularIntensityMap)pt.specularIntensityMap.value=mt.specularIntensityMap,nt(mt.specularIntensityMap,pt.specularIntensityMapTransform)}function vt(pt,mt){if(mt.matcap)pt.matcap.value=mt.matcap}function St(pt,mt){let Tt=et.get(mt).light;pt.referencePosition.value.setFromMatrixPosition(Tt.matrixWorld),pt.nearDistance.value=Tt.shadow.camera.near,pt.farDistance.value=Tt.shadow.camera.far}return{refreshFogUniforms:it,refreshMaterialUniforms:st}}function r_(tt,et,nt,it){let st={},rt={};function at(Tt,At){let bt=At.program;it.uniformBlockBinding(Tt,bt,st[Tt.id])}function ot(Tt,At){let bt=st[Tt.id];if(bt===void 0)vt(Tt),bt=lt(Tt),st[Tt.id]=bt,Tt.addEventListener("dispose",pt);let Et=At.program;it.updateUBOMapping(Tt,Et);let It=et.render.frame;if(rt[Tt.id]!==It)ct(Tt),rt[Tt.id]=It}function lt(Tt){let At=tt.createBuffer(),{__size:bt,usage:Et}=Tt;return tt.bindBuffer(tt.UNIFORM_BUFFER,At),tt.bufferData(tt.UNIFORM_BUFFER,bt,Et),tt.bindBuffer(tt.UNIFORM_BUFFER,null),At}function ct(Tt){let At=st[Tt.id],{uniforms:bt,__cache:Et}=Tt;tt.bindBuffer(tt.UNIFORM_BUFFER,At);for(let It=0,gt=bt.length;It<gt;It++){let yt=bt[It];if(Array.isArray(yt))for(let Nt=0,kt=yt.length;Nt<kt;Nt++)ut(yt[Nt],It,Nt,Et);else ut(yt,It,0,Et)}tt.bindBuffer(tt.UNIFORM_BUFFER,null)}function ut(Tt,At,bt,Et){if(ht(Tt,At,bt,Et)===!0){let{__offset:It,value:gt}=Tt;if(Array.isArray(gt)){let yt=0;for(let Nt=0;Nt<gt.length;Nt++){let kt=gt[Nt],Lt=St(kt,!0);dt(kt,Tt.__data,yt),yt+=Lt.storage/Float32Array.BYTES_PER_ELEMENT}}else dt(gt,Tt.__data,0);tt.bufferSubData(tt.UNIFORM_BUFFER,It,Tt.__data)}}function dt(Tt,At,bt){if(typeof Tt==="number"||typeof Tt==="boolean")At[bt]=Tt;else if(Tt.isMatrix3)At[bt]=Tt.elements[0],At[bt+1]=Tt.elements[1],At[bt+2]=Tt.elements[2],At[bt+3]=0,At[bt+4]=Tt.elements[3],At[bt+5]=Tt.elements[4],At[bt+6]=Tt.elements[5],At[bt+7]=0,At[bt+8]=Tt.elements[6],At[bt+9]=Tt.elements[7],At[bt+10]=Tt.elements[8],At[bt+11]=0;else if(ArrayBuffer.isView(Tt))At.set(Tt.subarray(0,At.length-bt),bt);else Tt.toArray(At,bt)}function ht(Tt,At,bt,Et){let It=Tt.value,gt=At+"_"+bt;if(Array.isArray(It)){if(Et[gt]===void 0)Et[gt]=[];let yt=Et[gt],Nt=!1;for(let kt=0;kt<It.length;kt++)if(ft(It[kt],yt,kt)===!0)Nt=!0;return Nt}return ft(It,Et,gt)}function ft(Tt,At,bt){if(At[bt]===void 0){if(typeof Tt==="number"||typeof Tt==="boolean")At[bt]=Tt;else if(ArrayBuffer.isView(Tt))At[bt]=Tt.slice();else At[bt]=Tt.clone();return!0}else{let Et=At[bt];if(typeof Tt==="number"||typeof Tt==="boolean"){if(Et!==Tt)return At[bt]=Tt,!0}else if(ArrayBuffer.isView(Tt))return!0;else if(Et.equals(Tt)===!1)return Et.copy(Tt),!0}return!1}function vt(Tt){let At=Tt.uniforms,bt=0,Et=16;for(let gt=0,yt=At.length;gt<yt;gt++){let Nt=Array.isArray(At[gt])?At[gt]:[At[gt]];for(let kt=0,Lt=Nt.length;kt<Lt;kt++){let zt=Nt[kt],Kt=Array.isArray(zt.value)?zt.value:[zt.value],Rt=Array.isArray(At[gt])||Array.isArray(zt.value),qt=bt;for(let Ot=0,Qe=Kt.length;Ot<Qe;Ot++){let Wt=Kt[Ot],$t=St(Wt,Rt),Je=bt%Et,mn=Je%$t.boundary,Yt=Je+mn;if(bt+=mn,Yt!==0&&Et-Yt<$t.storage)bt+=Et-Yt;if(Ot===0)qt=bt;bt+=$t.storage}let Zt=zt.type==="int"?Int32Array:zt.type==="uint"?Uint32Array:Float32Array;zt.__data=new Zt((bt-qt)/Float32Array.BYTES_PER_ELEMENT),zt.__offset=qt}}let It=bt%Et;if(It>0)bt+=Et-It;return Tt.__size=bt,Tt.__cache={},this}function St(Tt,At){let bt={boundary:0,storage:0};if(typeof Tt==="number"||typeof Tt==="boolean")bt.boundary=4,bt.storage=4;else if(Tt.isVector2)bt.boundary=8,bt.storage=8;else if(Tt.isVector3||Tt.isColor)bt.boundary=16,bt.storage=12;else if(Tt.isVector4)bt.boundary=16,bt.storage=16;else if(Tt.isMatrix3)bt.boundary=16,bt.storage=48;else if(Tt.isMatrix4)bt.boundary=16,bt.storage=64;else if(Tt.isTexture)_n("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(Tt))bt.boundary=16,bt.storage=Tt.byteLength;else _n("WebGLRenderer: Unsupported uniform value type.",Tt);if(At===!0)bt.boundary=16,bt.storage=Math.ceil(bt.storage/16)*16;return bt}function pt(Tt){let At=Tt.target;At.removeEventListener("dispose",pt),tt.deleteBuffer(st[At.id]),delete st[At.id],delete rt[At.id]}function mt(){for(let Tt in st)tt.deleteBuffer(st[Tt]);st={},rt={}}return{bind:at,update:ot,dispose:mt}}var a_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function o_(){if(Ui===null)Ui=new _r(a_,16,16,xs,A),Ui.name="DFG_LUT",Ui.minFilter=w,Ui.magFilter=w,Ui.wrapS=ue,Ui.wrapT=ue,Ui.generateMipmaps=!1,Ui.needsUpdate=!0;return Ui}class Ze{constructor(tt={}){let{canvas:et=mh(),context:nt=null,depth:it=!0,stencil:st=!1,alpha:rt=!1,antialias:at=!1,premultipliedAlpha:ot=!0,preserveDrawingBuffer:lt=!1,powerPreference:ct="default",failIfMajorPerformanceCaveat:ut=!1,reversedDepthBuffer:dt=!1,outputBufferType:ht=Ri}=tt;this.isWebGLRenderer=!0;let ft;if(nt!==null){if(typeof WebGLRenderingContext<"u"&&nt instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");ft=nt.getContextAttributes().alpha}else ft=rt;let vt=ht,St=new Set([fo,uo,ho]),pt=new Set([Ri,ns,pr,_s,lo,co]),mt=new Uint32Array(4),Tt=new Int32Array(4),At={textures:[],min:[],max:[],resolution:[]},bt=null,Et=null,It=[],gt=[],yt=null;this.domElement=et,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let Nt=this,kt=!1,Lt=null,zt=null,Kt=null,Rt=null;this._outputColorSpace=y;let qt=0,Zt=0,Ot=null,Qe=-1,Wt=null,$t=new a,Je=new a,mn=null,Yt=new t(0),ae=0,{width:fn,height:Sn}=et,Mn=1,pn=null,Bn=null,Ln=new a(0,0,fn,Sn),Rn=new a(0,0,fn,Sn),Vn=!1,Un=new gs,qn=new ma,Yn=!1,fi=!1,gi=new i,Zn=new e,si=new a,pi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mi=!1;function Mi(){return Ot===null?Mn:1}let Pt=nt;function bi(xt,Ct){return et.getContext(xt,Ct)}let zn,jn,rn,Hn,bn,An,ri,Mt,_t,Dt,Qt,Jt,Ke,en,Gt,Xt,je,wt,Vt,Ht,jt,$e,sn;try{let xt={alpha:!0,depth:it,stencil:st,antialias:at,premultipliedAlpha:ot,preserveDrawingBuffer:lt,powerPreference:ct,failIfMajorPerformanceCaveat:ut};if("setAttribute"in et)et.setAttribute("data-engine",`three.js r${bc}`);if(et.addEventListener("webglcontextlost",on,!1),et.addEventListener("webglcontextrestored",yn,!1),et.addEventListener("webglcontextcreationerror",Cn,!1),Pt===null){if(Pt=bi("webgl2",xt),Pt===null)if(bi("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}vn()}catch(xt){throw et.removeEventListener("webglcontextlost",on,!1),et.removeEventListener("webglcontextrestored",yn,!1),et.removeEventListener("webglcontextcreationerror",Cn,!1),Tn("WebGLRenderer: "+xt.message),xt}function vn(){if(zn=new xm(Pt),zn.init(),jt=new t_(Pt,zn),jn=new om(Pt,zn,tt,jt),rn=new Qg(Pt,zn),jn.reversedDepthBuffer&&dt)rn.buffers.depth.setReversed(!0);zt=Pt.createFramebuffer(),Kt=Pt.createFramebuffer(),Rt=Pt.createFramebuffer(),Hn=new Sm(Pt),bn=new Bg,An=new jg(Pt,zn,rn,bn,jn,jt,Hn),ri=new _m(Nt),Mt=new Md(Pt),$e=new rm(Pt,Mt),_t=new vm(Pt,Mt,Hn,$e),Dt=new bm(Pt,_t,Mt,$e,Hn),wt=new Mm(Pt,jn,An),Gt=new lm(bn),Qt=new Og(Nt,ri,zn,jn,$e,Gt),Jt=new s_(Nt,bn),Ke=new Gg,en=new qg(zn),je=new sm(Nt,ri,rn,Dt,ft,ot),Xt=new Kg(Nt,Dt,jn),sn=new r_(Pt,Hn,jn,rn),Vt=new am(Pt,zn,Hn),Ht=new ym(Pt,zn,Hn),Hn.programs=Qt.programs,Nt.capabilities=jn,Nt.extensions=zn,Nt.properties=bn,Nt.renderLists=Ke,Nt.shadowMap=Xt,Nt.state=rn,Nt.info=Hn}if(vt!==Ri)yt=new Em(vt,et.width,et.height,at,it,st);let xn=new du(Nt,Pt);this.xr=xn,this.getContext=function(){return Pt},this.getContextAttributes=function(){return Pt.getContextAttributes()},this.forceContextLoss=function(){let xt=zn.get("WEBGL_lose_context");if(xt)xt.loseContext()},this.forceContextRestore=function(){let xt=zn.get("WEBGL_lose_context");if(xt)xt.restoreContext()},this.getPixelRatio=function(){return Mn},this.setPixelRatio=function(xt){if(xt===void 0)return;Mn=xt,this.setSize(fn,Sn,!1)},this.getSize=function(xt){return xt.set(fn,Sn)},this.setSize=function(xt,Ct,Bt=!0){if(xn.isPresenting){_n("WebGLRenderer: Can't change size while VR device is presenting.");return}if(fn=xt,Sn=Ct,et.width=Math.floor(xt*Mn),et.height=Math.floor(Ct*Mn),Bt===!0)et.style.width=xt+"px",et.style.height=Ct+"px";if(yt!==null)yt.setSize(et.width,et.height);this.setViewport(0,0,xt,Ct)},this.getDrawingBufferSize=function(xt){return xt.set(fn*Mn,Sn*Mn).floor()},this.setDrawingBufferSize=function(xt,Ct,Bt){fn=xt,Sn=Ct,Mn=Bt,et.width=Math.floor(xt*Bt),et.height=Math.floor(Ct*Bt),this.setViewport(0,0,xt,Ct)},this.setEffects=function(xt){if(vt===Ri){Tn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(xt){for(let Ct=0;Ct<xt.length;Ct++)if(xt[Ct].isOutputPass===!0){_n("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}yt.setEffects(xt||[])},this.getCurrentViewport=function(xt){return xt.copy($t)},this.getViewport=function(xt){return xt.copy(Ln)},this.setViewport=function(xt,Ct,Bt,Ut){if(xt.isVector4)Ln.set(xt.x,xt.y,xt.z,xt.w);else Ln.set(xt,Ct,Bt,Ut);rn.viewport($t.copy(Ln).multiplyScalar(Mi()).round())},this.getScissor=function(xt){return xt.copy(Rn)},this.setScissor=function(xt,Ct,Bt,Ut){if(xt.isVector4)Rn.set(xt.x,xt.y,xt.z,xt.w);else Rn.set(xt,Ct,Bt,Ut);rn.scissor(Je.copy(Rn).multiplyScalar(Mi()).round())},this.getScissorTest=function(){return Vn},this.setScissorTest=function(xt){rn.setScissorTest(Vn=xt)},this.setOpaqueSort=function(xt){pn=xt},this.setTransparentSort=function(xt){Bn=xt},this.getClearColor=function(xt){return xt.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(xt=!0,Ct=!0,Bt=!0){let Ut=0;if(xt){let Ft=!1;if(Ot!==null){let nn=Ot.texture.format;Ft=St.has(nn)}if(Ft){let nn=Ot.texture.type,hn=pt.has(nn),tn=je.getClearColor(),cn=je.getClearAlpha(),{r:gn,g:wn,b:Nn}=tn;if(hn)mt[0]=gn,mt[1]=wn,mt[2]=Nn,mt[3]=cn,Pt.clearBufferuiv(Pt.COLOR,0,mt);else Tt[0]=gn,Tt[1]=wn,Tt[2]=Nn,Tt[3]=cn,Pt.clearBufferiv(Pt.COLOR,0,Tt)}else Ut|=Pt.COLOR_BUFFER_BIT}if(Ct)Ut|=Pt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Bt)Ut|=Pt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(Ut!==0)Pt.clear(Ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(xt){xt.setRenderer(this),Lt=xt},this.dispose=function(){et.removeEventListener("webglcontextlost",on,!1),et.removeEventListener("webglcontextrestored",yn,!1),et.removeEventListener("webglcontextcreationerror",Cn,!1),je.dispose(),Ke.dispose(),en.dispose(),An.dispose(),bn.dispose(),ri.dispose(),Dt.dispose(),_t.dispose(),$e.dispose(),sn.dispose(),Qt.dispose(),xn.dispose(),xn.removeEventListener("sessionstart",bl),xn.removeEventListener("sessionend",Tl),os.stop()};function on(xt){xt.preventDefault(),hr("WebGLRenderer: Context Lost."),kt=!0}function yn(){hr("WebGLRenderer: Context Restored."),kt=!1;let xt=Hn.autoReset,Ct=Xt.enabled,Bt=Xt.autoUpdate,Ut=Xt.needsUpdate,Ft=Xt.type;vn(),Hn.autoReset=xt,Xt.enabled=Ct,Xt.autoUpdate=Bt,Xt.needsUpdate=Ut,Xt.type=Ft}function Cn(xt){Tn("WebGLRenderer: A WebGL context could not be created. Reason: ",xt.statusMessage)}function ln(xt){let Ct=xt.target;Ct.removeEventListener("dispose",ln),Gn(Ct)}function Gn(xt){ti(xt),bn.remove(xt)}function ti(xt){let Ct=bn.get(xt).programs;if(Ct!==void 0){if(Ct.forEach(function(Bt){Qt.releaseProgram(Bt)}),xt.isShaderMaterial)Qt.releaseShaderCache(xt)}}this.renderBufferDirect=function(xt,Ct,Bt,Ut,Ft,nn){if(Ct===null)Ct=pi;let hn=Ft.isMesh&&Ft.matrixWorld.determinantAffine()<0,tn=gu(xt,Ct,Bt,Ut,Ft);rn.setMaterial(Ut,hn);let cn=Bt.index,gn=1;if(Ut.wireframe===!0){if(cn=_t.getWireframeAttribute(Bt),cn===void 0)return;gn=2}let wn=Bt.drawRange,Nn=Bt.attributes.position,un=wn.start*gn,Dn=(wn.start+wn.count)*gn;if(nn!==null)un=Math.max(un,nn.start*gn),Dn=Math.min(Dn,(nn.start+nn.count)*gn);if(cn!==null)un=Math.max(un,0),Dn=Math.min(Dn,cn.count);else if(Nn!==void 0&&Nn!==null)un=Math.max(un,0),Dn=Math.min(Dn,Nn.count);let Jn=Dn-un;if(Jn<0||Jn===1/0)return;$e.setup(Ft,Ut,tn,Bt,cn);let Wn,kn=Vt;if(cn!==null)Wn=Mt.get(cn),kn=Ht,kn.setIndex(Wn);if(Ft.isMesh)if(Ut.wireframe===!0)rn.setLineWidth(Ut.wireframeLinewidth*Mi()),kn.setMode(Pt.LINES);else kn.setMode(Pt.TRIANGLES);else if(Ft.isLine){let ai=Ut.linewidth;if(ai===void 0)ai=1;if(rn.setLineWidth(ai*Mi()),Ft.isLineSegments)kn.setMode(Pt.LINES);else if(Ft.isLineLoop)kn.setMode(Pt.LINE_LOOP);else kn.setMode(Pt.LINE_STRIP)}else if(Ft.isPoints)kn.setMode(Pt.POINTS);else if(Ft.isSprite)kn.setMode(Pt.TRIANGLES);if(Ft.isBatchedMesh)if(!zn.get("WEBGL_multi_draw")){let{_multiDrawStarts:ai,_multiDrawCounts:dn,_multiDrawCount:ui}=Ft,On=cn?Mt.get(cn).bytesPerElement:1,ls=bn.get(Ut).currentProgram.getUniforms();for(let oi=0;oi<ui;oi++)ls.setValue(Pt,"_gl_DrawID",oi),kn.render(ai[oi]/On,dn[oi])}else kn.renderMultiDraw(Ft._multiDrawStarts,Ft._multiDrawCounts,Ft._multiDrawCount);else if(Ft.isInstancedMesh)kn.renderInstances(un,Jn,Ft.count);else if(Bt.isInstancedBufferGeometry){let ai=Bt._maxInstanceCount!==void 0?Bt._maxInstanceCount:1/0,dn=Math.min(Bt.instanceCount,ai);kn.renderInstances(un,Jn,dn)}else kn.render(un,Jn)};function Oi(xt,Ct,Bt,Ut){if(Lt!==null&&xt.isNodeMaterial)Lt.setObject(Ut,xt);if(Yn===!0)Gt.setState(xt,Bt,!1);if(xt.transparent===!0&&xt.side===S&&xt.forceSinglePass===!1)xt.side=T,xt.needsUpdate=!0,Js(xt,Ct,Ut),xt.side=q,xt.needsUpdate=!0,Js(xt,Ct,Ut),xt.side=S;else Js(xt,Ct,Ut)}this.compile=function(xt,Ct,Bt=null){if(Bt===null)Bt=xt;if(Lt!==null)Lt.renderStart(xt,Ct,Bt);if(Et=en.get(Bt),Et.init(Ct),gt.push(Et),Bt.traverseVisible(function(Ft){if(Ft.isLight&&Ft.layers.test(Ct.layers)){if(Et.pushLight(Ft),Ft.castShadow)Et.pushShadow(Ft)}}),xt!==Bt)xt.traverseVisible(function(Ft){if(Ft.isLight&&Ft.layers.test(Ct.layers)){if(Et.pushLight(Ft),Ft.castShadow)Et.pushShadow(Ft)}});if(Et.setupLights(),Lt!==null)Lt.updateLights(Et.state.lightsArray);if(fi=this.localClippingEnabled,Yn=Gt.init(this.clippingPlanes,fi),Yn===!0)Gt.setGlobalState(this.clippingPlanes,Ct);if(Lt!==null)Xt.render(Et.state.shadowsArray,Bt,Ct);let Ut=new Set;if(xt.traverse(function(Ft){if(!(Ft.isMesh||Ft.isPoints||Ft.isLine||Ft.isSprite))return;let nn=Ft.material;if(nn)if(Array.isArray(nn))for(let hn=0;hn<nn.length;hn++){let tn=nn[hn];Oi(tn,Bt,Ct,Ft),Ut.add(tn)}else Oi(nn,Bt,Ct,Ft),Ut.add(nn)}),Et=gt.pop(),Lt!==null)Lt.renderEnd();return Ut},this.compileAsync=function(xt,Ct,Bt=null){let Ut=this.compile(xt,Ct,Bt);return new Promise((Ft)=>{function nn(){if(Ut.forEach(function(hn){let cn=bn.get(hn).currentProgram;if(cn===void 0||cn.isReady())Ut.delete(hn)}),Ut.size===0){Ft(xt);return}setTimeout(nn,10)}if(zn.get("KHR_parallel_shader_compile")!==null)nn();else setTimeout(nn,10)})};let Aa=null;function pu(xt){if(Aa)Aa(xt)}function bl(){os.stop()}function Tl(){os.start()}let os=new $h;if(os.setAnimationLoop(pu),typeof self<"u")os.setContext(self);this.setAnimationLoop=function(xt){Aa=xt,xn.setAnimationLoop(xt),xt===null?os.stop():os.start()},xn.addEventListener("sessionstart",bl),xn.addEventListener("sessionend",Tl),this.render=function(xt,Ct){if(Ct!==void 0&&Ct.isCamera!==!0){Tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(kt===!0)return;if(Lt!==null)Lt.renderStart(xt,Ct);let Bt=xn.enabled===!0&&xn.isPresenting===!0,Ut=yt!==null&&(Ot===null||Bt)&&yt.begin(Nt,Ot);if(xt.matrixWorldAutoUpdate===!0)xt.updateMatrixWorld();if(Ct.parent===null&&Ct.matrixWorldAutoUpdate===!0)Ct.updateMatrixWorld();if(xn.enabled===!0&&xn.isPresenting===!0&&(yt===null||yt.isCompositing()===!1)){if(xn.cameraAutoUpdate===!0)xn.updateCamera(Ct);Ct=xn.getCamera()}if(xt.isScene===!0)xt.onBeforeRender(Nt,xt,Ct,Ot);if(Et=en.get(xt,gt.length),Et.init(Ct),Et.state.textureUnits=An.getTextureUnits(),gt.push(Et),gi.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Ct.isArrayCamera)qn.setFromArrayCamera(Ct);else Un.setFromProjectionMatrix(gi,$o,Ct.reversedDepth);if(fi=this.localClippingEnabled,Yn=Gt.init(this.clippingPlanes,fi),bt=Ke.get(xt,It.length),bt.init(),It.push(bt),this.info.render.frame++,xn.enabled===!0&&xn.isPresenting===!0){let hn=Nt.xr.getDepthSensingMesh();if(hn!==null)wa(hn,Ct,-1/0,Nt.sortObjects)}if(wa(xt,Ct,0,Nt.sortObjects),bt.finish(),Lt!==null)Lt.updateLights(Et.state.lightsArray);if(Nt.sortObjects===!0)bt.sort(pn,Bn);if(mi=xn.enabled===!1||xn.isPresenting===!1||xn.hasDepthSensing()===!1,mi)je.addToRenderList(bt,xt);if(this.info.autoReset===!0)this.info.reset();if(Yn===!0)Gt.beginShadows();let Ft=Et.state.shadowsArray;if(Xt.render(Ft,xt,Ct),Yn===!0)Gt.endShadows();if((Ut&&yt.hasRenderPass())===!1){let hn=bt.opaque,tn=bt.transmissive;if(Et.setupLights(),Ct.isArrayCamera){let cn=Ct.cameras;if(tn.length>0)for(let gn=0,wn=cn.length;gn<wn;gn++){let Nn=cn[gn];Al(hn,tn,xt,Nn)}if(mi)je.render(xt);for(let gn=0,wn=cn.length;gn<wn;gn++){let Nn=cn[gn];El(bt,xt,Nn,Nn.viewport)}}else{if(tn.length>0)Al(hn,tn,xt,Ct);if(mi)je.render(xt);El(bt,xt,Ct)}}if(Ot!==null&&Zt===0)An.updateMultisampleRenderTarget(Ot),An.updateRenderTargetMipmap(Ot);if(Ut)yt.end(Nt);if(xt.isScene===!0)xt.onAfterRender(Nt,xt,Ct);if($e.resetDefaultState(),Qe=-1,Wt=null,gt.pop(),gt.length>0){if(Et=gt[gt.length-1],An.setTextureUnits(Et.state.textureUnits),Yn===!0)Gt.setGlobalState(Nt.clippingPlanes,Et.state.camera)}else Et=null;if(It.pop(),It.length>0)bt=It[It.length-1];else bt=null;if(Lt!==null)Lt.renderEnd()};function wa(xt,Ct,Bt,Ut){if(xt.visible===!1)return;if(xt.layers.test(Ct.layers)){if(xt.isGroup)Bt=xt.renderOrder;else if(xt.isLOD){if(xt.autoUpdate===!0)xt.update(Ct)}else if(xt.isLight){if(Et.pushLight(xt),xt.castShadow)Et.pushShadow(xt)}else if(xt.isSprite){let hn=Ct.isArrayCamera?qn:Un;if(!xt.frustumCulled||xt.intersectsFrustum(hn)){if(Ut)si.setFromMatrixPosition(xt.matrixWorld).applyMatrix4(gi);let tn=Dt.update(xt),cn=xt.material;if(cn.visible)bt.push(xt,tn,cn,Bt,si.z,null,Ct)}}else if(xt.isMesh||xt.isLine||xt.isPoints){let hn=Ct.isArrayCamera?qn:Un;if(!xt.frustumCulled||xt.intersectsFrustum(hn)){let tn=Dt.update(xt),cn=xt.material;if(Ut){if(xt.boundingSphere!==void 0){if(xt.boundingSphere===null)xt.computeBoundingSphere();si.copy(xt.boundingSphere.center)}else{if(tn.boundingSphere===null)tn.computeBoundingSphere();si.copy(tn.boundingSphere.center)}si.applyMatrix4(xt.matrixWorld).applyMatrix4(gi)}if(Array.isArray(cn)){let gn=tn.groups;for(let wn=0,Nn=gn.length;wn<Nn;wn++){let un=gn[wn],Dn=cn[un.materialIndex];if(Dn&&Dn.visible)bt.push(xt,tn,Dn,Bt,si.z,un,Ct)}}else if(cn.visible)bt.push(xt,tn,cn,Bt,si.z,null,Ct)}}}let nn=xt.children;for(let hn=0,tn=nn.length;hn<tn;hn++)wa(nn[hn],Ct,Bt,Ut)}function El(xt,Ct,Bt,Ut){let{opaque:Ft,transmissive:nn,transparent:hn}=xt;if(Et.setupLightsView(Bt),Yn===!0)Gt.setGlobalState(Nt.clippingPlanes,Bt);if(Ut)rn.viewport($t.copy(Ut));if(Ft.length>0)Tr(Ft,Ct,Bt);if(nn.length>0)Tr(nn,Ct,Bt);if(hn.length>0)Tr(hn,Ct,Bt);rn.buffers.depth.setTest(!0),rn.buffers.depth.setMask(!0),rn.buffers.color.setMask(!0),rn.setPolygonOffset(!1)}function Al(xt,Ct,Bt,Ut){if((Bt.isScene===!0?Bt.overrideMaterial:null)!==null)return;if(Et.state.transmissionRenderTarget[Ut.id]===void 0){let un=zn.has("EXT_color_buffer_half_float")||zn.has("EXT_color_buffer_float");Et.state.transmissionRenderTarget[Ut.id]=new M(1,1,{generateMipmaps:!0,type:un?A:Ri,minFilter:O,samples:Math.max(4,jn.samples),stencilBuffer:st,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:s.workingColorSpace})}let nn=Et.state.transmissionRenderTarget[Ut.id],hn=Ut.viewport||$t;nn.setSize(hn.z*Nt.transmissionResolutionScale,hn.w*Nt.transmissionResolutionScale);let tn=Nt.getRenderTarget(),cn=Nt.getActiveCubeFace(),gn=Nt.getActiveMipmapLevel();if(Nt.setRenderTarget(nn),Nt.getClearColor(Yt),ae=Nt.getClearAlpha(),ae<1)Nt.setClearColor(16777215,0.5);if(Nt.clear(),mi)je.render(Bt);let wn=Nt.toneMapping;Nt.toneMapping=Ni;let Nn=Ut.viewport;if(Ut.viewport!==void 0)Ut.viewport=void 0;if(Et.setupLightsView(Ut),Yn===!0)Gt.setGlobalState(Nt.clippingPlanes,Ut);if(Tr(xt,Bt,Ut),An.updateMultisampleRenderTarget(nn),An.updateRenderTargetMipmap(nn),zn.has("WEBGL_multisampled_render_to_texture")===!1){let un=!1;for(let Dn=0,Jn=Ct.length;Dn<Jn;Dn++){let Wn=Ct[Dn],{object:kn,geometry:ai,material:dn,group:ui}=Wn;if(dn.side===S&&kn.layers.test(Ut.layers)){let On=dn.side;dn.side=T,dn.needsUpdate=!0,wl(kn,Bt,Ut,ai,dn,ui),dn.side=On,dn.needsUpdate=!0,un=!0}}if(un===!0)An.updateMultisampleRenderTarget(nn),An.updateRenderTargetMipmap(nn)}if(Nt.setRenderTarget(tn,cn,gn),Nt.setClearColor(Yt,ae),Nn!==void 0)Ut.viewport=Nn;Nt.toneMapping=wn}function Tr(xt,Ct,Bt){let Ut=Ct.isScene===!0?Ct.overrideMaterial:null;for(let Ft=0,nn=xt.length;Ft<nn;Ft++){let hn=xt[Ft],{object:tn,geometry:cn,group:gn}=hn,wn=hn.material;if(wn.allowOverride===!0&&Ut!==null)wn=Ut;if(tn.layers.test(Bt.layers))wl(tn,Ct,Bt,cn,wn,gn)}}function wl(xt,Ct,Bt,Ut,Ft,nn){if(Lt!==null&&Ft.isNodeMaterial)Lt.setObject(xt,Ft);if(xt.onBeforeRender(Nt,Ct,Bt,Ut,Ft,nn),xt.modelViewMatrix.multiplyMatrices(Bt.matrixWorldInverse,xt.matrixWorld),xt.normalMatrix.getNormalMatrix(xt.modelViewMatrix),Ft.onBeforeRender(Nt,Ct,Bt,Ut,xt,nn),Ft.transparent===!0&&Ft.side===S&&Ft.forceSinglePass===!1)Ft.side=T,Ft.needsUpdate=!0,Nt.renderBufferDirect(Bt,Ct,Ut,Ft,xt,nn),Ft.side=q,Ft.needsUpdate=!0,Nt.renderBufferDirect(Bt,Ct,Ut,Ft,xt,nn),Ft.side=S;else Nt.renderBufferDirect(Bt,Ct,Ut,Ft,xt,nn);xt.onAfterRender(Nt,Ct,Bt,Ut,Ft,nn)}function Rl(xt){let Ct=0;for(let Bt of xt)if(Bt.texture!==null)Ct++;return Ct}function Js(xt,Ct,Bt){if(Ct.isScene!==!0)Ct=pi;let Ut=bn.get(xt),Ft=Et.state.lights,nn=Et.state.shadowsArray,hn=Ft.state.version,tn=Qt.getParameters(xt,Ft.state,nn,Ct,Bt,Et.state.lightProbeGridArray),cn=Qt.getProgramCacheKey(tn),gn=Ut.programs;Ut.environment=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial?Ct.environment:null,Ut.fog=Ct.fog;let wn=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial&&!xt.envMap||xt.isMeshPhongMaterial&&!xt.envMap;if(Ut.envMap=ri.get(xt.envMap||Ut.environment,wn),Ut.envMapRotation=Ut.environment!==null&&xt.envMap===null?Ct.environmentRotation:xt.envMapRotation,gn===void 0)xt.addEventListener("dispose",ln),gn=new Map,Ut.programs=gn,Ut.programVariants=new Map;let Nn=gn.get(cn);if(Nn!==void 0){if(Ut.currentProgram===Nn&&Ut.lightsStateVersion===hn)return Il(xt,tn),Nn}else{if(tn.uniforms=Qt.getUniforms(xt),Lt!==null&&xt.isNodeMaterial)Lt.build(xt,Bt,tn);xt.onBeforeCompile(tn,Nt),Nn=Qt.acquireProgram(tn,cn),gn.set(cn,Nn),Ut.uniforms=tn.uniforms}let un=Ut.uniforms;if(!xt.isShaderMaterial&&!xt.isRawShaderMaterial||xt.clipping===!0)un.clippingPlanes=Gt.uniform;if(Il(xt,tn),Ut.needsLights=xu(xt),Ut.lightsStateVersion=hn,Ut.needsLights)un.ambientLightColor.value=Ft.state.ambient,un.lightProbe.value=Ft.state.probe,un.sunLights.value=Ft.state.sun,un.sunLightShadows.value=Ft.state.sunShadow,un.directionalLights.value=Ft.state.directional,un.directionalLightShadows.value=Ft.state.directionalShadow,un.spotLights.value=Ft.state.spot,un.spotLightShadows.value=Ft.state.spotShadow,un.rectAreaLights.value=Ft.state.rectArea,un.ltc_1.value=Ft.state.rectAreaLTC1,un.ltc_2.value=Ft.state.rectAreaLTC2,un.pointLights.value=Ft.state.point,un.pointLightShadows.value=Ft.state.pointShadow,un.hemisphereLights.value=Ft.state.hemi,un.sunShadowMatrix.value=Ft.state.sunShadowMatrix,un.sunShadowCascade.value=Ft.state.sunShadowCascade,un.directionalShadowMatrix.value=Ft.state.directionalShadowMatrix,un.spotLightMatrix.value=Ft.state.spotLightMatrix,un.spotLightMap.value=Ft.state.spotLightMap,un.pointShadowMatrix.value=Ft.state.pointShadowMatrix;return Ut.numLightProbeGrids=Rl(Et.state.lightProbeGridArray),Ut.currentProgram=Nn,Ut.uniformsList=null,Nn}function mu(xt,Ct,Bt,Ut,Ft){let nn=bn.get(xt),hn=nn.currentProgram.id+","+Ut+","+Ft,tn=nn.programVariants.get(hn);if(tn===void 0)tn=Js(xt,Ct,Bt),nn.programVariants.set(hn,tn);else nn.currentProgram=tn,nn.uniformsList=null,nn.outputColorSpace=Ut,nn.toneMapping=Ft;return tn}function Cl(xt){if(xt.uniformsList===null){let Ct=xt.currentProgram.getUniforms();xt.uniformsList=Mr.seqWithValue(Ct.seq,xt.uniforms)}return xt.uniformsList}function Il(xt,Ct){let Bt=bn.get(xt);Bt.outputColorSpace=Ct.outputColorSpace,Bt.batching=Ct.batching,Bt.batchingColor=Ct.batchingColor,Bt.instancing=Ct.instancing,Bt.instancingColor=Ct.instancingColor,Bt.instancingMorph=Ct.instancingMorph,Bt.skinning=Ct.skinning,Bt.morphTargets=Ct.morphTargets,Bt.morphNormals=Ct.morphNormals,Bt.morphColors=Ct.morphColors,Bt.morphTargetsCount=Ct.morphTargetsCount,Bt.numClippingPlanes=Ct.numClippingPlanes,Bt.numIntersection=Ct.numClipIntersection,Bt.vertexAlphas=Ct.vertexAlphas,Bt.vertexTangents=Ct.vertexTangents,Bt.toneMapping=Ct.toneMapping}function gu(xt,Ct,Bt,Ut,Ft){if(Ct.isScene!==!0)Ct=pi;An.resetTextureUnits();let nn=Ct.fog,hn=Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial||Ut.isMeshPhongMaterial?Ct.environment:null,tn=Ot===null?Nt.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:s.workingColorSpace,cn=Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial&&!Ut.envMap||Ut.isMeshPhongMaterial&&!Ut.envMap,gn=ri.get(Ut.envMap||hn,cn),wn=Ut.vertexColors===!0&&!!Bt.attributes.color&&Bt.attributes.color.itemSize===4,Nn=!!Bt.attributes.tangent&&(!!Ut.normalMap||Ut.anisotropy>0),un=!!Bt.morphAttributes.position,Dn=!!Bt.morphAttributes.normal,Jn=!!Bt.morphAttributes.color,Wn=Ni;if(Ut.toneMapped){if(Ot===null||Ot.isXRRenderTarget===!0)Wn=Nt.toneMapping}let kn=Bt.morphAttributes.position||Bt.morphAttributes.normal||Bt.morphAttributes.color,ai=kn!==void 0?kn.length:0,dn=bn.get(Ut),ui=Et.state.lights;if(Yn===!0){if(fi===!0||xt!==Wt){let Xn=xt===Wt&&Ut.id===Qe;Gt.setState(Ut,xt,Xn)}}let On=!1,ls=!1;if(Ut.version===dn.__version){if(dn.needsLights&&dn.lightsStateVersion!==ui.state.version)On=!0;else if(Ft.isBatchedMesh&&dn.batching===!1)On=!0;else if(!Ft.isBatchedMesh&&dn.batching===!0)On=!0;else if(Ft.isBatchedMesh&&dn.batchingColor===!0&&Ft._colorsTexture===null)On=!0;else if(Ft.isBatchedMesh&&dn.batchingColor===!1&&Ft._colorsTexture!==null)On=!0;else if(Ft.isInstancedMesh&&dn.instancing===!1)On=!0;else if(!Ft.isInstancedMesh&&dn.instancing===!0)On=!0;else if(Ft.isSkinnedMesh&&dn.skinning===!1)On=!0;else if(!Ft.isSkinnedMesh&&dn.skinning===!0)On=!0;else if(Ft.isInstancedMesh&&dn.instancingColor===!0&&Ft.instanceColor===null)On=!0;else if(Ft.isInstancedMesh&&dn.instancingColor===!1&&Ft.instanceColor!==null)On=!0;else if(Ft.isInstancedMesh&&dn.instancingMorph===!0&&Ft.morphTexture===null)On=!0;else if(Ft.isInstancedMesh&&dn.instancingMorph===!1&&Ft.morphTexture!==null)On=!0;else if(dn.envMap!==gn)On=!0;else if(Ut.fog===!0&&dn.fog!==nn)On=!0;else if(dn.numClippingPlanes!==void 0&&(dn.numClippingPlanes!==Gt.numPlanes||dn.numIntersection!==Gt.numIntersection))On=!0;else if(dn.vertexAlphas!==wn)On=!0;else if(dn.vertexTangents!==Nn)On=!0;else if(dn.morphTargets!==un)On=!0;else if(dn.morphNormals!==Dn)On=!0;else if(dn.morphColors!==Jn)On=!0;else if(dn.morphTargetsCount!==ai)On=!0;else if(dn.numLightProbeGrids!==Rl(Et.state.lightProbeGridArray))On=!0;else if(dn.outputColorSpace!==tn||dn.toneMapping!==Wn)ls=!0}else On=!0,dn.__version=Ut.version;let oi=dn.currentProgram;if(On===!0||ls===!0){if(oi=ls===!0?mu(Ut,Ct,Ft,tn,Wn):Js(Ut,Ct,Ft),Lt&&Ut.isNodeMaterial)Lt.onUpdateProgram(Ut,oi,dn)}let Er=!1,Ji=!1,cs=!1,Fn=oi.getUniforms(),ii=dn.uniforms;if(rn.useProgram(oi.program))Er=!0,Ji=!0,cs=!0;if(Ut.id!==Qe)Qe=Ut.id,Ji=!0;if(Er||Wt!==xt){if(rn.buffers.depth.getReversed()&&xt.reversedDepth!==!0)xt._reversedDepth=!0,xt.updateProjectionMatrix();Fn.setValue(Pt,"projectionMatrix",xt.projectionMatrix),Fn.setValue(Pt,"viewMatrix",xt.matrixWorldInverse);let ei=Fn.map.cameraPosition;if(ei!==void 0)ei.setValue(Pt,Zn.setFromMatrixPosition(xt.matrixWorld));if(jn.logarithmicDepthBuffer)Fn.setValue(Pt,"logDepthBufFC",2/(Math.log(xt.far+1)/Math.LN2));if(Ut.isMeshPhongMaterial||Ut.isMeshToonMaterial||Ut.isMeshLambertMaterial||Ut.isMeshBasicMaterial||Ut.isMeshStandardMaterial||Ut.isShaderMaterial)Fn.setValue(Pt,"isOrthographic",xt.isOrthographicCamera===!0);if(Wt!==xt)Wt=xt,Ji=!0,cs=!0}if(dn.needsLights){if(ui.state.sunShadowMap.length>0)Fn.setValue(Pt,"sunShadowMap",ui.state.sunShadowMap,An);if(ui.state.directionalShadowMap.length>0)Fn.setValue(Pt,"directionalShadowMap",ui.state.directionalShadowMap,An);if(ui.state.spotShadowMap.length>0)Fn.setValue(Pt,"spotShadowMap",ui.state.spotShadowMap,An);if(ui.state.pointShadowMap.length>0)Fn.setValue(Pt,"pointShadowMap",ui.state.pointShadowMap,An)}if(Ft.isSkinnedMesh){Fn.setOptional(Pt,Ft,"bindMatrix"),Fn.setOptional(Pt,Ft,"bindMatrixInverse");let Xn=Ft.skeleton;if(Xn){if(Xn.boneTexture===null)Xn.computeBoneTexture();Fn.setValue(Pt,"boneTexture",Xn.boneTexture,An)}}if(Ft.isBatchedMesh){if(Fn.setOptional(Pt,Ft,"batchingTexture"),Fn.setValue(Pt,"batchingTexture",Ft._matricesTexture,An),Fn.setOptional(Pt,Ft,"batchingIdTexture"),Fn.setValue(Pt,"batchingIdTexture",Ft._indirectTexture,An),Fn.setOptional(Pt,Ft,"batchingColorTexture"),Ft._colorsTexture!==null)Fn.setValue(Pt,"batchingColorTexture",Ft._colorsTexture,An)}let Ti=Bt.morphAttributes;if(Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)wt.update(Ft,Bt,oi);if(Ji||dn.receiveShadow!==Ft.receiveShadow)dn.receiveShadow=Ft.receiveShadow,Fn.setValue(Pt,"receiveShadow",Ft.receiveShadow);if((Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial||Ut.isMeshPhongMaterial)&&Ut.envMap===null&&Ct.environment!==null)ii.envMapIntensity.value=Ct.environmentIntensity;if(ii.dfgLUT!==void 0)ii.dfgLUT.value=o_();if(Ji){if(Fn.setValue(Pt,"toneMappingExposure",Nt.toneMappingExposure),dn.needsLights)_u(ii,cs);if(nn&&Ut.fog===!0)Jt.refreshFogUniforms(ii,nn);if(Jt.refreshMaterialUniforms(ii,Ut,Mn,Sn,Et.state.transmissionRenderTarget[xt.id]),dn.needsLights&&dn.numLightProbeGrids>0){let Xn=At,ei=0;for(let Bi of Et.state.lightProbeGridArray){if(Bi.texture===null)continue;Xn.textures[ei]=Bi.texture,Xn.min[ei]=Bi.boundingBox.min,Xn.max[ei]=Bi.boundingBox.max,Xn.resolution[ei]=Bi.resolution,ei++}for(let Bi in Xn)Xn[Bi].length=ei;ii.probesSH.value=Xn.textures,ii.probesMin.value=Xn.min,ii.probesMax.value=Xn.max,ii.probesResolution.value=Xn.resolution}Mr.upload(Pt,Cl(dn),ii,An)}if(Ut.isShaderMaterial&&Ut.uniformsNeedUpdate===!0)Mr.upload(Pt,Cl(dn),ii,An),Ut.uniformsNeedUpdate=!1;if(Ut.isSpriteMaterial)Fn.setValue(Pt,"center",Ft.center);if(Fn.setValue(Pt,"modelViewMatrix",Ft.modelViewMatrix),Fn.setValue(Pt,"normalMatrix",Ft.normalMatrix),Fn.setValue(Pt,"modelMatrix",Ft.matrixWorld),Ut.uniformsGroups!==void 0){let Xn=Ut.uniformsGroups;for(let ei=0,Bi=Xn.length;ei<Bi;ei++){let Ll=Xn[ei];sn.update(Ll,oi),sn.bind(Ll,oi)}}return oi}function _u(xt,Ct){xt.ambientLightColor.needsUpdate=Ct,xt.lightProbe.needsUpdate=Ct,xt.sunLights.needsUpdate=Ct,xt.sunLightShadows.needsUpdate=Ct,xt.directionalLights.needsUpdate=Ct,xt.directionalLightShadows.needsUpdate=Ct,xt.pointLights.needsUpdate=Ct,xt.pointLightShadows.needsUpdate=Ct,xt.spotLights.needsUpdate=Ct,xt.spotLightShadows.needsUpdate=Ct,xt.rectAreaLights.needsUpdate=Ct,xt.hemisphereLights.needsUpdate=Ct}function xu(xt){return xt.isMeshLambertMaterial||xt.isMeshToonMaterial||xt.isMeshPhongMaterial||xt.isMeshStandardMaterial||xt.isShadowMaterial||xt.isShaderMaterial&&xt.lights===!0}this.getActiveCubeFace=function(){return qt},this.getActiveMipmapLevel=function(){return Zt},this.getRenderTarget=function(){return Ot},this.setRenderTargetTextures=function(xt,Ct,Bt){let Ut=bn.get(xt);if(Ut.__autoAllocateDepthBuffer=xt.resolveDepthBuffer===!1,Ut.__autoAllocateDepthBuffer===!1)Ut.__useRenderToTexture=!1;bn.get(xt.texture).__webglTexture=Ct,bn.get(xt.depthTexture).__webglTexture=Ut.__autoAllocateDepthBuffer?void 0:Bt,Ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(xt,Ct){let Bt=bn.get(xt);Bt.__webglFramebuffer=Ct,Bt.__useDefaultFramebuffer=Ct===void 0},this.setRenderTarget=function(xt,Ct=0,Bt=0){Ot=xt,qt=Ct,Zt=Bt;let Ut=null,Ft=!1,nn=!1;if(xt){let tn=bn.get(xt);if(tn.__useDefaultFramebuffer!==void 0){rn.bindFramebuffer(Pt.FRAMEBUFFER,tn.__webglFramebuffer),$t.copy(xt.viewport),Je.copy(xt.scissor),mn=xt.scissorTest,rn.viewport($t),rn.scissor(Je),rn.setScissorTest(mn),Qe=-1;return}else if(tn.__webglFramebuffer===void 0)An.setupRenderTarget(xt);else if(tn.__hasExternalTextures)An.rebindTextures(xt,bn.get(xt.texture).__webglTexture,bn.get(xt.depthTexture).__webglTexture);else if(xt.depthBuffer){let wn=xt.depthTexture;if(tn.__boundDepthTexture!==wn){if(wn!==null&&bn.has(wn)&&(xt.width!==wn.image.width||xt.height!==wn.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");An.setupDepthRenderbuffer(xt)}}let cn=xt.texture;if(cn.isData3DTexture||cn.isDataArrayTexture||cn.isCompressedArrayTexture)nn=!0;let gn=bn.get(xt).__webglFramebuffer;if(xt.isWebGLCubeRenderTarget){if(Array.isArray(gn[Ct]))Ut=gn[Ct][Bt];else Ut=gn[Ct];Ft=!0}else if(xt.samples>0&&An.useMultisampledRTT(xt)===!1)Ut=bn.get(xt).__webglMultisampledFramebuffer;else if(Array.isArray(gn))Ut=gn[Bt];else Ut=gn;$t.copy(xt.viewport),Je.copy(xt.scissor),mn=xt.scissorTest}else $t.copy(Ln).multiplyScalar(Mn).floor(),Je.copy(Rn).multiplyScalar(Mn).floor(),mn=Vn;if(Bt!==0)Ut=zt;if(rn.bindFramebuffer(Pt.FRAMEBUFFER,Ut))rn.drawBuffers(xt,Ut);if(rn.viewport($t),rn.scissor(Je),rn.setScissorTest(mn),Ft){let tn=bn.get(xt.texture);Pt.framebufferTexture2D(Pt.FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,tn.__webglTexture,Bt)}else if(nn){let tn=Ct;for(let cn=0;cn<xt.textures.length;cn++){let gn=bn.get(xt.textures[cn]);Pt.framebufferTextureLayer(Pt.FRAMEBUFFER,Pt.COLOR_ATTACHMENT0+cn,gn.__webglTexture,Bt,tn)}}else if(xt!==null&&Bt!==0){let tn=bn.get(xt.texture);Pt.framebufferTexture2D(Pt.FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_2D,tn.__webglTexture,Bt)}Qe=-1};function Pl(xt){let Ct=bn.get(xt);if(Ct.__readFormat!==xt.format||Ct.__readType!==xt.type)Ct.__readFormat=xt.format,Ct.__readType=xt.type,Ct.__formatReadable=jn.textureFormatReadable(xt.format),Ct.__typeReadable=jn.textureTypeReadable(xt.type);return Ct}if(this.readRenderTargetPixels=function(xt,Ct,Bt,Ut,Ft,nn,hn,tn=0){if(!(xt&&xt.isWebGLRenderTarget)){Tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let cn=bn.get(xt).__webglFramebuffer;if(xt.isWebGLCubeRenderTarget&&hn!==void 0){if(cn=cn[hn],Array.isArray(cn))cn=cn[0]}if(cn){rn.bindFramebuffer(Pt.FRAMEBUFFER,cn);try{let gn=xt.textures[tn],{format:wn,type:Nn}=gn;if(xt.textures.length>1)Pt.readBuffer(Pt.COLOR_ATTACHMENT0+tn);let un=Pl(gn);if(un.__formatReadable===!1){Tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(un.__typeReadable===!1){Tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Ct>=0&&Ct<=xt.width-Ut&&(Bt>=0&&Bt<=xt.height-Ft))Pt.readPixels(Ct,Bt,Ut,Ft,jt.convert(wn),jt.convert(Nn),nn)}finally{let gn=Ot!==null?bn.get(Ot).__webglFramebuffer:null;rn.bindFramebuffer(Pt.FRAMEBUFFER,gn)}}},this.readRenderTargetPixelsAsync=async function(xt,Ct,Bt,Ut,Ft,nn,hn,tn=0){if(!(xt&&xt.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let cn=bn.get(xt).__webglFramebuffer;if(xt.isWebGLCubeRenderTarget&&hn!==void 0){if(cn=cn[hn],Array.isArray(cn))cn=cn[0]}if(cn)if(Ct>=0&&Ct<=xt.width-Ut&&(Bt>=0&&Bt<=xt.height-Ft)){rn.bindFramebuffer(Pt.FRAMEBUFFER,cn);let gn=xt.textures[tn],{format:wn,type:Nn}=gn;if(xt.textures.length>1)Pt.readBuffer(Pt.COLOR_ATTACHMENT0+tn);let un=Pl(gn);if(un.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(un.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dn=Pt.createBuffer();Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,Dn),Pt.bufferData(Pt.PIXEL_PACK_BUFFER,nn.byteLength,Pt.STREAM_READ),Pt.readPixels(Ct,Bt,Ut,Ft,jt.convert(wn),jt.convert(Nn),0),Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,null);let Jn=Ot!==null?bn.get(Ot).__webglFramebuffer:null;rn.bindFramebuffer(Pt.FRAMEBUFFER,Jn);let Wn=Pt.fenceSync(Pt.SYNC_GPU_COMMANDS_COMPLETE,0);return Pt.flush(),await _h(Pt,Wn,4),Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,Dn),Pt.getBufferSubData(Pt.PIXEL_PACK_BUFFER,0,nn),Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,null),Pt.deleteBuffer(Dn),Pt.deleteSync(Wn),nn}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(xt,Ct=null,Bt=0){let Ut=Math.pow(2,-Bt),Ft=Math.floor(xt.image.width*Ut),nn=Math.floor(xt.image.height*Ut),hn=Ct!==null?Ct.x:0,tn=Ct!==null?Ct.y:0;An.setTexture2D(xt,0),Pt.copyTexSubImage2D(Pt.TEXTURE_2D,Bt,0,0,hn,tn,Ft,nn),rn.unbindTexture()},this.copyTextureToTexture=function(xt,Ct,Bt=null,Ut=null,Ft=0,nn=0){let hn,tn,cn,gn,wn,Nn,un,Dn,Jn,Wn=xt.isCompressedTexture?xt.mipmaps[nn]:xt.image;if(Bt!==null)hn=Bt.max.x-Bt.min.x,tn=Bt.max.y-Bt.min.y,cn=Bt.isBox3?Bt.max.z-Bt.min.z:1,gn=Bt.min.x,wn=Bt.min.y,Nn=Bt.isBox3?Bt.min.z:0;else{let Fn=Math.pow(2,-Ft);if(hn=Math.floor(Wn.width*Fn),tn=Math.floor(Wn.height*Fn),xt.isDataArrayTexture)cn=Wn.depth;else if(xt.isData3DTexture)cn=Math.floor(Wn.depth*Fn);else cn=1;gn=0,wn=0,Nn=0}if(Ut!==null)un=Ut.x,Dn=Ut.y,Jn=Ut.z;else un=0,Dn=0,Jn=0;let kn=jt.convert(Ct.format),ai=jt.convert(Ct.type),dn;if(Ct.isData3DTexture)An.setTexture3D(Ct,0),dn=Pt.TEXTURE_3D;else if(Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)An.setTexture2DArray(Ct,0),dn=Pt.TEXTURE_2D_ARRAY;else An.setTexture2D(Ct,0),dn=Pt.TEXTURE_2D;rn.activeTexture(Pt.TEXTURE0),rn.pixelStorei(Pt.UNPACK_FLIP_Y_WEBGL,Ct.flipY),rn.pixelStorei(Pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ct.premultiplyAlpha),rn.pixelStorei(Pt.UNPACK_ALIGNMENT,Ct.unpackAlignment);let ui=rn.getParameter(Pt.UNPACK_ROW_LENGTH),On=rn.getParameter(Pt.UNPACK_IMAGE_HEIGHT),ls=rn.getParameter(Pt.UNPACK_SKIP_PIXELS),oi=rn.getParameter(Pt.UNPACK_SKIP_ROWS),Er=rn.getParameter(Pt.UNPACK_SKIP_IMAGES);rn.pixelStorei(Pt.UNPACK_ROW_LENGTH,Wn.width),rn.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT,Wn.height),rn.pixelStorei(Pt.UNPACK_SKIP_PIXELS,gn),rn.pixelStorei(Pt.UNPACK_SKIP_ROWS,wn),rn.pixelStorei(Pt.UNPACK_SKIP_IMAGES,Nn);let Ji=xt.isDataArrayTexture||xt.isData3DTexture,cs=Ct.isDataArrayTexture||Ct.isData3DTexture;if(xt.isDepthTexture){let Fn=bn.get(xt),ii=bn.get(Ct),Ti=bn.get(Fn.__renderTarget),Xn=bn.get(ii.__renderTarget);rn.bindFramebuffer(Pt.READ_FRAMEBUFFER,Ti.__webglFramebuffer),rn.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let ei=0;ei<cn;ei++){if(Ji)Pt.framebufferTextureLayer(Pt.READ_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,bn.get(xt).__webglTexture,Ft,Nn+ei),Pt.framebufferTextureLayer(Pt.DRAW_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,bn.get(Ct).__webglTexture,nn,Jn+ei);Pt.blitFramebuffer(gn,wn,gn+hn,wn+tn,un,Dn,un+hn,Dn+tn,Pt.DEPTH_BUFFER_BIT,Pt.NEAREST)}rn.bindFramebuffer(Pt.READ_FRAMEBUFFER,null),rn.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,null)}else if(Ft!==0||xt.isRenderTargetTexture||bn.has(xt)){let Fn=bn.get(xt),ii=bn.get(Ct);rn.bindFramebuffer(Pt.READ_FRAMEBUFFER,Kt),rn.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,Rt);for(let Ti=0;Ti<cn;Ti++){if(Ji)Pt.framebufferTextureLayer(Pt.READ_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Fn.__webglTexture,Ft,Nn+Ti);else Pt.framebufferTexture2D(Pt.READ_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_2D,Fn.__webglTexture,Ft);if(cs)Pt.framebufferTextureLayer(Pt.DRAW_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,ii.__webglTexture,nn,Jn+Ti);else Pt.framebufferTexture2D(Pt.DRAW_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_2D,ii.__webglTexture,nn);if(Ft!==0)Pt.blitFramebuffer(gn,wn,gn+hn,wn+tn,un,Dn,un+hn,Dn+tn,Pt.COLOR_BUFFER_BIT,Pt.NEAREST);else if(cs)Pt.copyTexSubImage3D(dn,nn,un,Dn,Jn+Ti,gn,wn,hn,tn);else Pt.copyTexSubImage2D(dn,nn,un,Dn,gn,wn,hn,tn)}rn.bindFramebuffer(Pt.READ_FRAMEBUFFER,null),rn.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,null)}else if(cs)if(xt.isDataTexture||xt.isData3DTexture)Pt.texSubImage3D(dn,nn,un,Dn,Jn,hn,tn,cn,kn,ai,Wn.data);else if(Ct.isCompressedArrayTexture)Pt.compressedTexSubImage3D(dn,nn,un,Dn,Jn,hn,tn,cn,kn,Wn.data);else Pt.texSubImage3D(dn,nn,un,Dn,Jn,hn,tn,cn,kn,ai,Wn);else if(xt.isDataTexture)Pt.texSubImage2D(Pt.TEXTURE_2D,nn,un,Dn,hn,tn,kn,ai,Wn.data);else if(xt.isCompressedTexture)Pt.compressedTexSubImage2D(Pt.TEXTURE_2D,nn,un,Dn,Wn.width,Wn.height,kn,Wn.data);else Pt.texSubImage2D(Pt.TEXTURE_2D,nn,un,Dn,hn,tn,kn,ai,Wn);if(rn.pixelStorei(Pt.UNPACK_ROW_LENGTH,ui),rn.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT,On),rn.pixelStorei(Pt.UNPACK_SKIP_PIXELS,ls),rn.pixelStorei(Pt.UNPACK_SKIP_ROWS,oi),rn.pixelStorei(Pt.UNPACK_SKIP_IMAGES,Er),nn===0&&Ct.generateMipmaps===!0&&Ct.mipmapsAutoUpdate===!0)Pt.generateMipmap(dn);rn.unbindTexture()},this.initRenderTarget=function(xt){if(bn.get(xt).__webglFramebuffer===void 0)An.setupRenderTarget(xt)},this.initTexture=function(xt){if(xt.isCubeTexture)An.setTextureCube(xt,0);else if(xt.isData3DTexture)An.setTexture3D(xt,0);else if(xt.isDataArrayTexture||xt.isCompressedArrayTexture)An.setTexture2DArray(xt,0);else An.setTexture2D(xt,0);rn.unbindTexture()},this.resetState=function(){qt=0,Zt=0,Ot=null,rn.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $o}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(tt){this._outputColorSpace=tt;let et=this.getContext();et.drawingBufferColorSpace=s._getDrawingBufferColorSpace(tt),et.unpackColorSpace=s._getUnpackColorSpace()}}
export{De,q,T,S,k,I,xe,ve,ye,oe,Se,Me,be,G,ue,Ue,F,Fe,le,w,de,O,A,qe,Oe,Ye,Te,fe,y,L,c,h,n,R,e,s,x,a,M,i,l,v,t,Y,B,C,m,g,N,f,pe,Z,E,me,we,u,r,Be,Ae,Ee,K,D,Re,ge,ze,ke,Ce,J,Q,j,Ie,Ge,Pe,P,H,p,Le,d,b,ee,U,W,te,ne,ce,He,V,Ne,z,We,_,ie,he,X,se,re,Ve,Xe,o,_e,Ze};
