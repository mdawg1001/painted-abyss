(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Dh={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function AM(){if(rv)return Qo;rv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Qo.Fragment=t,Qo.jsx=n,Qo.jsxs=n,Qo}var ov;function wM(){return ov||(ov=1,Dh.exports=AM()),Dh.exports}var J=wM(),Uh={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function RM(){if(lv)return de;lv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,b={};function M(N,Z,dt){this.props=N,this.context=Z,this.refs=b,this.updater=dt||x}M.prototype.isReactComponent={},M.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=M.prototype;function L(N,Z,dt){this.props=N,this.context=Z,this.refs=b,this.updater=dt||x}var U=L.prototype=new y;U.constructor=L,S(U,M.prototype),U.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function I(N,Z,dt,vt,At,Gt){return dt=Gt.ref,{$$typeof:r,type:N,key:Z,ref:dt!==void 0?dt:null,props:Gt}}function G(N,Z){return I(N.type,Z,void 0,void 0,void 0,N.props)}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function D(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(dt){return Z[dt]})}var V=/\/+/g;function j(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):Z.toString(36)}function rt(){}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(rt,rt):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,Z,dt,vt,At){var Gt=typeof N;(Gt==="undefined"||Gt==="boolean")&&(N=null);var it=!1;if(N===null)it=!0;else switch(Gt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(N.$$typeof){case r:case t:it=!0;break;case g:return it=N._init,ft(it(N._payload),Z,dt,vt,At)}}if(it)return At=At(N),it=vt===""?"."+j(N,0):vt,A(At)?(dt="",it!=null&&(dt=it.replace(V,"$&/")+"/"),ft(At,Z,dt,"",function($t){return $t})):At!=null&&(R(At)&&(At=G(At,dt+(At.key==null||N&&N.key===At.key?"":(""+At.key).replace(V,"$&/")+"/")+it)),Z.push(At)),1;it=0;var yt=vt===""?".":vt+":";if(A(N))for(var wt=0;wt<N.length;wt++)vt=N[wt],Gt=yt+j(vt,wt),it+=ft(vt,Z,dt,Gt,At);else if(wt=_(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(vt=N.next()).done;)vt=vt.value,Gt=yt+j(vt,wt++),it+=ft(vt,Z,dt,Gt,At);else if(Gt==="object"){if(typeof N.then=="function")return ft(ut(N),Z,dt,vt,At);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return it}function B(N,Z,dt){if(N==null)return N;var vt=[],At=0;return ft(N,vt,"","",function(Gt){return Z.call(dt,Gt,At++)}),vt}function tt(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(dt){(N._status===0||N._status===-1)&&(N._status=1,N._result=dt)},function(dt){(N._status===0||N._status===-1)&&(N._status=2,N._result=dt)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ot(){}return de.Children={map:B,forEach:function(N,Z,dt){B(N,function(){Z.apply(this,arguments)},dt)},count:function(N){var Z=0;return B(N,function(){Z++}),Z},toArray:function(N){return B(N,function(Z){return Z})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},de.Component=M,de.Fragment=n,de.Profiler=o,de.PureComponent=L,de.StrictMode=a,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,de.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},de.cache=function(N){return function(){return N.apply(null,arguments)}},de.cloneElement=function(N,Z,dt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var vt=S({},N.props),At=N.key,Gt=void 0;if(Z!=null)for(it in Z.ref!==void 0&&(Gt=void 0),Z.key!==void 0&&(At=""+Z.key),Z)!O.call(Z,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&Z.ref===void 0||(vt[it]=Z[it]);var it=arguments.length-2;if(it===1)vt.children=dt;else if(1<it){for(var yt=Array(it),wt=0;wt<it;wt++)yt[wt]=arguments[wt+2];vt.children=yt}return I(N.type,At,void 0,void 0,Gt,vt)},de.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},de.createElement=function(N,Z,dt){var vt,At={},Gt=null;if(Z!=null)for(vt in Z.key!==void 0&&(Gt=""+Z.key),Z)O.call(Z,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(At[vt]=Z[vt]);var it=arguments.length-2;if(it===1)At.children=dt;else if(1<it){for(var yt=Array(it),wt=0;wt<it;wt++)yt[wt]=arguments[wt+2];At.children=yt}if(N&&N.defaultProps)for(vt in it=N.defaultProps,it)At[vt]===void 0&&(At[vt]=it[vt]);return I(N,Gt,void 0,void 0,null,At)},de.createRef=function(){return{current:null}},de.forwardRef=function(N){return{$$typeof:h,render:N}},de.isValidElement=R,de.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:tt}},de.memo=function(N,Z){return{$$typeof:d,type:N,compare:Z===void 0?null:Z}},de.startTransition=function(N){var Z=P.T,dt={};P.T=dt;try{var vt=N(),At=P.S;At!==null&&At(dt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(ot,q)}catch(Gt){q(Gt)}finally{P.T=Z}},de.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},de.use=function(N){return P.H.use(N)},de.useActionState=function(N,Z,dt){return P.H.useActionState(N,Z,dt)},de.useCallback=function(N,Z){return P.H.useCallback(N,Z)},de.useContext=function(N){return P.H.useContext(N)},de.useDebugValue=function(){},de.useDeferredValue=function(N,Z){return P.H.useDeferredValue(N,Z)},de.useEffect=function(N,Z,dt){var vt=P.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(N,Z)},de.useId=function(){return P.H.useId()},de.useImperativeHandle=function(N,Z,dt){return P.H.useImperativeHandle(N,Z,dt)},de.useInsertionEffect=function(N,Z){return P.H.useInsertionEffect(N,Z)},de.useLayoutEffect=function(N,Z){return P.H.useLayoutEffect(N,Z)},de.useMemo=function(N,Z){return P.H.useMemo(N,Z)},de.useOptimistic=function(N,Z){return P.H.useOptimistic(N,Z)},de.useReducer=function(N,Z,dt){return P.H.useReducer(N,Z,dt)},de.useRef=function(N){return P.H.useRef(N)},de.useState=function(N){return P.H.useState(N)},de.useSyncExternalStore=function(N,Z,dt){return P.H.useSyncExternalStore(N,Z,dt)},de.useTransition=function(){return P.H.useTransition()},de.version="19.1.1",de}var cv;function up(){return cv||(cv=1,Uh.exports=RM()),Uh.exports}var ys=up(),Lh={exports:{}},Jo={},Nh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function CM(){return uv||(uv=1,(function(r){function t(B,tt){var q=B.length;B.push(tt);t:for(;0<q;){var ot=q-1>>>1,N=B[ot];if(0<o(N,tt))B[ot]=tt,B[q]=N,q=ot;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var tt=B[0],q=B.pop();if(q!==tt){B[0]=q;t:for(var ot=0,N=B.length,Z=N>>>1;ot<Z;){var dt=2*(ot+1)-1,vt=B[dt],At=dt+1,Gt=B[At];if(0>o(vt,q))At<N&&0>o(Gt,vt)?(B[ot]=Gt,B[At]=q,ot=At):(B[ot]=vt,B[dt]=q,ot=dt);else if(At<N&&0>o(Gt,q))B[ot]=Gt,B[At]=q,ot=At;else break t}}return tt}function o(B,tt){var q=B.sortIndex-tt.sortIndex;return q!==0?q:B.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,v=null,_=3,x=!1,S=!1,b=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var tt=n(d);tt!==null;){if(tt.callback===null)a(d);else if(tt.startTime<=B)a(d),tt.sortIndex=tt.expirationTime,t(p,tt);else break;tt=n(d)}}function P(B){if(b=!1,A(B),!S)if(n(p)!==null)S=!0,O||(O=!0,j());else{var tt=n(d);tt!==null&&ft(P,tt.startTime-B)}}var O=!1,I=-1,G=5,R=-1;function D(){return M?!0:!(r.unstable_now()-R<G)}function V(){if(M=!1,O){var B=r.unstable_now();R=B;var tt=!0;try{t:{S=!1,b&&(b=!1,L(I),I=-1),x=!0;var q=_;try{e:{for(A(B),v=n(p);v!==null&&!(v.expirationTime>B&&D());){var ot=v.callback;if(typeof ot=="function"){v.callback=null,_=v.priorityLevel;var N=ot(v.expirationTime<=B);if(B=r.unstable_now(),typeof N=="function"){v.callback=N,A(B),tt=!0;break e}v===n(p)&&a(p),A(B)}else a(p);v=n(p)}if(v!==null)tt=!0;else{var Z=n(d);Z!==null&&ft(P,Z.startTime-B),tt=!1}}break t}finally{v=null,_=q,x=!1}tt=void 0}}finally{tt?j():O=!1}}}var j;if(typeof U=="function")j=function(){U(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ut=rt.port2;rt.port1.onmessage=V,j=function(){ut.postMessage(null)}}else j=function(){y(V,0)};function ft(B,tt){I=y(function(){B(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var tt=3;break;default:tt=_}var q=_;_=tt;try{return B()}finally{_=q}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,tt){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=_;_=B;try{return tt()}finally{_=q}},r.unstable_scheduleCallback=function(B,tt,q){var ot=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ot+q:ot):q=ot,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,B={id:g++,callback:tt,priorityLevel:B,startTime:q,expirationTime:N,sortIndex:-1},q>ot?(B.sortIndex=q,t(d,B),n(p)===null&&B===n(d)&&(b?(L(I),I=-1):b=!0,ft(P,q-ot))):(B.sortIndex=N,t(p,B),S||x||(S=!0,O||(O=!0,j()))),B},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(B){var tt=_;return function(){var q=_;_=tt;try{return B.apply(this,arguments)}finally{_=q}}}})(Ph)),Ph}var fv;function DM(){return fv||(fv=1,Nh.exports=CM()),Nh.exports}var Oh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function UM(){if(hv)return zn;hv=1;var r=up();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},zn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},zn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},zn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},zn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},zn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},zn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},zn.requestFormReset=function(p){a.d.r(p)},zn.unstable_batchedUpdates=function(p,d){return p(d)},zn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.1.1",zn}var dv;function LM(){if(dv)return Oh.exports;dv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Oh.exports=UM(),Oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function NM(){if(pv)return Jo;pv=1;var r=DM(),t=up(),n=LM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var E=!1,w=f.child;w;){if(w===s){E=!0,s=f,l=m;break}if(w===l){E=!0,l=f,s=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===s){E=!0,s=m,l=f;break}if(w===l){E=!0,l=m,s=f;break}w=w.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function d(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=d(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case M:return"Profiler";case b:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case U:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case G:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ot=[],N=-1;function Z(e){return{current:e}}function dt(e){0>N||(e.current=ot[N],ot[N]=null,N--)}function vt(e,i){N++,ot[N]=e.current,e.current=i}var At=Z(null),Gt=Z(null),it=Z(null),yt=Z(null);function wt(e,i){switch(vt(it,i),vt(Gt,e),vt(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Pg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Pg(i),e=Og(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(At),vt(At,e)}function $t(){dt(At),dt(Gt),dt(it)}function Zt(e){e.memoizedState!==null&&vt(yt,e);var i=At.current,s=Og(i,e.type);i!==s&&(vt(Gt,e),vt(At,s))}function _e(e){Gt.current===e&&(dt(At),dt(Gt)),yt.current===e&&(dt(yt),qo._currentValue=q)}var un=Object.prototype.hasOwnProperty,H=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback,ue=r.unstable_shouldYield,se=r.unstable_requestPaint,Ot=r.unstable_now,qe=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,fe=r.unstable_UserBlockingPriority,Qe=r.unstable_NormalPriority,Je=r.unstable_LowPriority,z=r.unstable_IdlePriority,T=r.log,nt=r.unstable_setDisableYieldValue,pt=null,_t=null;function ht(e){if(typeof T=="function"&&nt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(pt,e)}catch{}}var zt=Math.clz32?Math.clz32:Kt,Rt=Math.log,Yt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Rt(e)/Yt|0)|0}var St=256,Lt=4194304;function Jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?f=Jt(l):(E&=w,E!==0?f=Jt(E):s||(s=w&~e,s!==0&&(f=Jt(s))))):(w=l&~m,w!==0?f=Jt(w):E!==0?f=Jt(E):s||(s=l&~e,s!==0&&(f=Jt(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function he(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Tt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Ct(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,i,s,l,f,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,F=e.expirationTimes,et=e.hiddenUpdates;for(s=E&~s;0<s;){var mt=31-zt(s),xt=1<<mt;w[mt]=0,F[mt]=-1;var at=et[mt];if(at!==null)for(et[mt]=null,mt=0;mt<at.length;mt++){var st=at[mt];st!==null&&(st.lane&=-536870913)}s&=~xt}l!==0&&Mt(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Mt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function Vt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-zt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ne(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function we(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:tv(e.type))}function Mi(e,i){var s=tt.p;try{return tt.p=e,i()}finally{tt.p=s}}var mn=Math.random().toString(36).slice(2),gn="__reactFiber$"+mn,tn="__reactProps$"+mn,Pi="__reactContainer$"+mn,Bs="__reactEvents$"+mn,El="__reactListeners$"+mn,Is="__reactHandles$"+mn,io="__reactResources$"+mn,Oi="__reactMarker$"+mn;function Fs(e){delete e[gn],delete e[tn],delete e[Bs],delete e[El],delete e[Is]}function Yi(e){var i=e[gn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Pi]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Fg(e);e!==null;){if(s=e[gn])return s;e=Fg(e)}return i}e=s,s=e.parentNode}return null}function ya(e){if(e=e[gn]||e[Pi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function is(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ma(e){var i=e[io];return i||(i=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fn(e){e[Oi]=!0}var bl=new Set,Tl={};function C(e,i){Y(e,i),Y(e+"Capture",i)}function Y(e,i){for(Tl[e]=i,e=0;e<i.length;e++)bl.add(i[e])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},Q={};function bt(e){return un.call(Q,e)?!0:un.call(ct,e)?!1:lt.test(e)?Q[e]=!0:(ct[e]=!0,!1)}function Ut(e,i,s){if(bt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ft(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var ee,ie;function jt(e){if(ee===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ee=i&&i[1]||"",ie=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+ie}var me=!1;function De(e,i){if(!e||me)return"";me=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(st){var at=st}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(st){at=st}e.call(xt.prototype)}}else{try{throw Error()}catch(st){at=st}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var F=E.split(`
`),et=w.split(`
`);for(f=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;f<et.length&&!et[f].includes("DetermineComponentFrameRoot");)f++;if(l===F.length||f===et.length)for(l=F.length-1,f=et.length-1;1<=l&&0<=f&&F[l]!==et[f];)f--;for(;1<=l&&0<=f;l--,f--)if(F[l]!==et[f]){if(l!==1||f!==1)do if(l--,f--,0>f||F[l]!==et[f]){var mt=`
`+F[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=f);break}}}finally{me=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?jt(s):""}function Ze(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return jt("Activity");default:return""}}function Ie(e){try{var i="";do i+=Ze(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function te(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(e){var i=te(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ee(e){e._valueTracker||(e._valueTracker=je(e))}function Nn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=te(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gn=/[\n"\\]/g;function En(e){return e.replace(Gn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ke(e,i,s,l,f,m,E,w){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ge(i)):e.value!==""+ge(i)&&(e.value=""+ge(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Pn(e,E,ge(i)):s!=null?Pn(e,E,ge(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ge(w):e.removeAttribute("name")}function Vn(e,i,s,l,f,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+ge(s):"",i=i!=null?""+ge(i):s,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Pn(e,i,s){i==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function en(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ge(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Cn(e,i,s){if(i!=null&&(i=""+ge(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ge(s):""}function Hs(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ft(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ge(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function qn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Ex=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Ex.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Op(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Pp(e,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Pp(e,m,i[m])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(e){return Tx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Cu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function zp(e){var i=ya(e);if(i&&(e=i.stateNode)){var s=e[tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(ke(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+En(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[tn]||null;if(!f)throw Error(a(90));ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Nn(l)}break t;case"textarea":Cn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&en(e,!!s.multiple,i,!1)}}}var Uu=!1;function Bp(e,i,s){if(Uu)return e(i,s);Uu=!0;try{var l=e(i);return l}finally{if(Uu=!1,(Gs!==null||Vs!==null)&&(fc(),Gs&&(i=Gs,e=Vs,Vs=Gs=null,zp(i),e)))for(i=0;i<e.length;i++)zp(e[i])}}function ao(e,i){var s=e.stateNode;if(s===null)return null;var l=s[tn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(ji)try{var so={};Object.defineProperty(so,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Lu=!1}var Sa=null,Nu=null,wl=null;function Ip(){if(wl)return wl;var e,i=Nu,s=i.length,l,f="value"in Sa?Sa.value:Sa.textContent,m=f.length;for(e=0;e<s&&i[e]===f[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===f[m-l];l++);return wl=f.slice(e,1<l?1-l:void 0)}function Rl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Cl(){return!0}function Fp(){return!1}function Yn(e){function i(s,l,f,m,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Cl:Fp,this.isPropagationStopped=Fp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Yn(as),ro=g({},as,{view:0,detail:0}),Ax=Yn(ro),Pu,Ou,oo,Ul=g({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Pu=e.screenX-oo.screenX,Ou=e.screenY-oo.screenY):Ou=Pu=0,oo=e),Pu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),Hp=Yn(Ul),wx=g({},Ul,{dataTransfer:0}),Rx=Yn(wx),Cx=g({},ro,{relatedTarget:0}),zu=Yn(Cx),Dx=g({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=Yn(Dx),Lx=g({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nx=Yn(Lx),Px=g({},as,{data:0}),Gp=Yn(Px),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Bx[e])?!!i[e]:!1}function Bu(){return Ix}var Fx=g({},ro,{key:function(e){if(e.key){var i=Ox[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hx=Yn(Fx),Gx=g({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Yn(Gx),Vx=g({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),kx=Yn(Vx),Xx=g({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=Yn(Xx),qx=g({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Yn(qx),jx=g({},as,{newState:0,oldState:0}),Zx=Yn(jx),Kx=[9,13,27,32],Iu=ji&&"CompositionEvent"in window,lo=null;ji&&"documentMode"in document&&(lo=document.documentMode);var Qx=ji&&"TextEvent"in window&&!lo,kp=ji&&(!Iu||lo&&8<lo&&11>=lo),Xp=" ",Wp=!1;function qp(e,i){switch(e){case"keyup":return Kx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function Jx(e,i){switch(e){case"compositionend":return Yp(i);case"keypress":return i.which!==32?null:(Wp=!0,Xp);case"textInput":return e=i.data,e===Xp&&Wp?null:e;default:return null}}function $x(e,i){if(ks)return e==="compositionend"||!Iu&&qp(e,i)?(e=Ip(),wl=Nu=Sa=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kp&&i.locale!=="ko"?null:i.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ty[e.type]:i==="textarea"}function Zp(e,i,s,l){Gs?Vs?Vs.push(l):Vs=[l]:Gs=l,i=vc(i,"onChange"),0<i.length&&(s=new Dl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var co=null,uo=null;function ey(e){Cg(e,0)}function Ll(e){var i=is(e);if(Nn(i))return e}function Kp(e,i){if(e==="change")return i}var Qp=!1;if(ji){var Fu;if(ji){var Hu="oninput"in document;if(!Hu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Hu=typeof Jp.oninput=="function"}Fu=Hu}else Fu=!1;Qp=Fu&&(!document.documentMode||9<document.documentMode)}function $p(){co&&(co.detachEvent("onpropertychange",tm),uo=co=null)}function tm(e){if(e.propertyName==="value"&&Ll(uo)){var i=[];Zp(i,uo,e,Du(e)),Bp(ey,i)}}function ny(e,i,s){e==="focusin"?($p(),co=i,uo=s,co.attachEvent("onpropertychange",tm)):e==="focusout"&&$p()}function iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(uo)}function ay(e,i){if(e==="click")return Ll(i)}function sy(e,i){if(e==="input"||e==="change")return Ll(i)}function ry(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ei=typeof Object.is=="function"?Object.is:ry;function fo(e,i){if(ei(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!un.call(i,f)||!ei(e[f],i[f]))return!1}return!0}function em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nm(e,i){var s=em(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=em(s)}}function im(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?im(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function am(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Si(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Si(e.document)}return i}function Gu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var oy=ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,Vu=null,ho=null,ku=!1;function sm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ku||Xs==null||Xs!==Si(l)||(l=Xs,"selectionStart"in l&&Gu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=vc(Vu,"onSelect"),0<l.length&&(i=new Dl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=Xs)))}function ss(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Ws={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},Xu={},rm={};ji&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function rs(e){if(Xu[e])return Xu[e];if(!Ws[e])return e;var i=Ws[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in rm)return Xu[e]=i[s];return e}var om=rs("animationend"),lm=rs("animationiteration"),cm=rs("animationstart"),ly=rs("transitionrun"),cy=rs("transitionstart"),uy=rs("transitioncancel"),um=rs("transitionend"),fm=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function Ei(e,i){fm.set(e,i),C(i,[e])}var hm=new WeakMap;function di(e,i){if(typeof e=="object"&&e!==null){var s=hm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Ie(i)},hm.set(e,i),i)}return{value:e,source:i,stack:Ie(i)}}var pi=[],qs=0,qu=0;function Nl(){for(var e=qs,i=qu=qs=0;i<e;){var s=pi[i];pi[i++]=null;var l=pi[i];pi[i++]=null;var f=pi[i];pi[i++]=null;var m=pi[i];if(pi[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&dm(s,f,m)}}function Pl(e,i,s,l){pi[qs++]=e,pi[qs++]=i,pi[qs++]=s,pi[qs++]=l,qu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yu(e,i,s,l){return Pl(e,i,s,l),Ol(e)}function Ys(e,i){return Pl(e,null,null,i),Ol(e)}function dm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-zt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Ol(e){if(50<Io)throw Io=0,th=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var js={};function fy(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,i,s,l){return new fy(e,i,s,l)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,i){var s=e.alternate;return s===null?(s=ni(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function pm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function zl(e,i,s,l,f,m){var E=0;if(l=e,typeof e=="function")ju(e)&&(E=1);else if(typeof e=="string")E=dM(e,s,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=ni(31,s,i,f),e.elementType=R,e.lanes=m,e;case S:return os(s.children,f,m,i);case b:E=8,f|=24;break;case M:return e=ni(12,s,i,f|2),e.elementType=M,e.lanes=m,e;case P:return e=ni(13,s,i,f),e.elementType=P,e.lanes=m,e;case O:return e=ni(19,s,i,f),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case U:E=10;break t;case L:E=9;break t;case A:E=11;break t;case I:E=14;break t;case G:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ni(E,s,i,f),i.elementType=e,i.type=l,i.lanes=m,i}function os(e,i,s,l){return e=ni(7,e,l,i),e.lanes=s,e}function Zu(e,i,s){return e=ni(6,e,null,i),e.lanes=s,e}function Ku(e,i,s){return i=ni(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Zs=[],Ks=0,Bl=null,Il=0,mi=[],gi=0,ls=null,Ki=1,Qi="";function cs(e,i){Zs[Ks++]=Il,Zs[Ks++]=Bl,Bl=e,Il=i}function mm(e,i,s){mi[gi++]=Ki,mi[gi++]=Qi,mi[gi++]=ls,ls=e;var l=Ki;e=Qi;var f=32-zt(l)-1;l&=~(1<<f),s+=1;var m=32-zt(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ki=1<<32-zt(i)+f|s<<f|l,Qi=m+e}else Ki=1<<m|s<<f|l,Qi=e}function Qu(e){e.return!==null&&(cs(e,1),mm(e,1,0))}function Ju(e){for(;e===Bl;)Bl=Zs[--Ks],Zs[Ks]=null,Il=Zs[--Ks],Zs[Ks]=null;for(;e===ls;)ls=mi[--gi],mi[gi]=null,Qi=mi[--gi],mi[gi]=null,Ki=mi[--gi],mi[gi]=null}var kn=null,nn=null,Le=!1,us=null,zi=!1,$u=Error(a(519));function fs(e){var i=Error(a(418,""));throw go(di(i,e)),$u}function gm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[gn]=e,i[tn]=l,s){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(s=0;s<Ho.length;s++)Te(Ho[s],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),Vn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ee(i);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),Hs(i,l.value,l.defaultValue,l.children),Ee(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Ng(i.textContent,s)?(l.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),l.onScroll!=null&&Te("scroll",i),l.onScrollEnd!=null&&Te("scrollend",i),l.onClick!=null&&(i.onclick=_c),i=!0):i=!1,i||fs(e)}function vm(e){for(kn=e.return;kn;)switch(kn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:kn=kn.return}}function po(e){if(e!==kn)return!1;if(!Le)return vm(e),Le=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||gh(e.type,e.memoizedProps)),s=!s),s&&nn&&fs(e),vm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){nn=Ti(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}nn=null}}else i===27?(i=nn,Ia(e.type)?(e=yh,yh=null,nn=e):nn=i):nn=kn?Ti(e.stateNode.nextSibling):null;return!0}function mo(){nn=kn=null,Le=!1}function _m(){var e=us;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),us=null),e}function go(e){us===null?us=[e]:us.push(e)}var tf=Z(null),hs=null,Ji=null;function Ea(e,i,s){vt(tf,i._currentValue),i._currentValue=s}function $i(e){e._currentValue=tf.current,dt(tf)}function ef(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function nf(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=f;for(var F=0;F<i.length;F++)if(w.context===i[F]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),ef(m.return,s,e),l||(E=null);break t}m=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),ef(E,s,e),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===e){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function vo(e,i,s,l){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var w=f.type;ei(f.pendingProps.value,E.value)||(e!==null?e.push(w):e=[w])}}else if(f===yt.current){if(E=f.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(qo):e=[qo])}f=f.return}e!==null&&nf(i,e,s,l),i.flags|=262144}function Fl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){hs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return xm(hs,e)}function Hl(e,i){return hs===null&&ds(e),xm(e,i)}function xm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ji===null){if(e===null)throw Error(a(308));Ji=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ji=Ji.next=i;return s}var hy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},dy=r.unstable_scheduleCallback,py=r.unstable_NormalPriority,vn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new hy,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&dy(py,function(){e.controller.abort()})}var xo=null,sf=0,Qs=0,Js=null;function my(e,i){if(xo===null){var s=xo=[];sf=0,Qs=oh(),Js={status:"pending",value:void 0,then:function(l){s.push(l)}}}return sf++,i.then(ym,ym),i}function ym(){if(--sf===0&&xo!==null){Js!==null&&(Js.status="fulfilled");var e=xo;xo=null,Qs=0,Js=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function gy(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Mm=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&my(e,i),Mm!==null&&Mm(e,i)};var ps=Z(null);function rf(){var e=ps.current;return e!==null?e:Ye.pooledCache}function Gl(e,i){i===null?vt(ps,ps.current):vt(ps,i.pool)}function Sm(){var e=rf();return e===null?null:{parent:vn._currentValue,pool:e}}var yo=Error(a(460)),Em=Error(a(474)),Vl=Error(a(542)),of={then:function(){}};function bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kl(){}function Tm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(kl,kl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,wm(e),e;default:if(typeof i.status=="string")i.then(kl,kl);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,wm(e),e}throw Mo=i,yo}}var Mo=null;function Am(){if(Mo===null)throw Error(a(459));var e=Mo;return Mo=null,e}function wm(e){if(e===yo||e===Vl)throw Error(a(483))}var ba=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ol(e),dm(e,null,s),i}return Pl(e,l,i,s),Ol(e)}function So(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Vt(e,s)}}function uf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var ff=!1;function Eo(){if(ff){var e=Js;if(e!==null)throw e}}function bo(e,i,s,l){ff=!1;var f=e.updateQueue;ba=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var F=w,et=F.next;F.next=null,E===null?m=et:E.next=et,E=F;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==E&&(w===null?mt.firstBaseUpdate=et:w.next=et,mt.lastBaseUpdate=F))}if(m!==null){var xt=f.baseState;E=0,mt=et=F=null,w=m;do{var at=w.lane&-536870913,st=at!==w.lane;if(st?(Ae&at)===at:(l&at)===at){at!==0&&at===Qs&&(ff=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var re=e,ne=w;at=i;var Ge=s;switch(ne.tag){case 1:if(re=ne.payload,typeof re=="function"){xt=re.call(Ge,xt,at);break t}xt=re;break t;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ne.payload,at=typeof re=="function"?re.call(Ge,xt,at):re,at==null)break t;xt=g({},xt,at);break t;case 2:ba=!0}}at=w.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=f.callbacks,st===null?f.callbacks=[at]:st.push(at))}else st={lane:at,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(et=mt=st,F=xt):mt=mt.next=st,E|=at;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;st=w,w=st.next,st.next=null,f.lastBaseUpdate=st,f.shared.pending=null}}while(!0);mt===null&&(F=xt),f.baseState=F,f.firstBaseUpdate=et,f.lastBaseUpdate=mt,m===null&&(f.shared.lanes=0),Pa|=E,e.lanes=E,e.memoizedState=xt}}function Rm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Cm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Rm(s[e],i)}var $s=Z(null),Xl=Z(0);function Dm(e,i){e=ra,vt(Xl,e),vt($s,i),ra=e|i.baseLanes}function hf(){vt(Xl,ra),vt($s,$s.current)}function df(){ra=Xl.current,dt($s),dt(Xl)}var wa=0,xe=null,Fe=null,hn=null,Wl=!1,tr=!1,ms=!1,ql=0,To=0,er=null,vy=0;function rn(){throw Error(a(321))}function pf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ei(e[s],i[s]))return!1;return!0}function mf(e,i,s,l,f,m){return wa=m,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?d0:p0,ms=!1,m=s(l,f),ms=!1,tr&&(m=Lm(i,s,l,f)),Um(e),m}function Um(e){B.H=Jl;var i=Fe!==null&&Fe.next!==null;if(wa=0,hn=Fe=xe=null,Wl=!1,To=0,er=null,i)throw Error(a(300));e===null||bn||(e=e.dependencies,e!==null&&Fl(e)&&(bn=!0))}function Lm(e,i,s,l){xe=e;var f=0;do{if(tr&&(er=null),To=0,tr=!1,25<=f)throw Error(a(301));if(f+=1,hn=Fe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=by,m=i(s,l)}while(tr);return m}function _y(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Ao(i):i,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(xe.flags|=1024),i}function gf(){var e=ql!==0;return ql=0,e}function vf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function _f(e){if(Wl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Wl=!1}wa=0,hn=Fe=xe=null,tr=!1,To=ql=0,er=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?xe.memoizedState=hn=e:hn=hn.next=e,hn}function dn(){if(Fe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var i=hn===null?xe.memoizedState:hn.next;if(i!==null)hn=i,Fe=e;else{if(e===null)throw xe.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},hn===null?xe.memoizedState=hn=e:hn=hn.next=e}return hn}function xf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var i=To;return To+=1,er===null&&(er=[]),e=Tm(er,e,i),i=xe,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?d0:p0),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===U)return On(e)}throw Error(a(438,String(e)))}function yf(e){var i=null,s=xe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=xf(),xe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=D;return i.index++,s}function ta(e,i){return typeof i=="function"?i(e):i}function jl(e){var i=dn();return Mf(i,Fe,e)}function Mf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var w=E=null,F=null,et=i,mt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(Ae&xt)===xt:(wa&xt)===xt){var at=et.revertLane;if(at===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Qs&&(mt=!0);else if((wa&at)===at){et=et.next,at===Qs&&(mt=!0);continue}else xt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(w=F=xt,E=m):F=F.next=xt,xe.lanes|=at,Pa|=at;xt=et.action,ms&&s(m,xt),m=et.hasEagerState?et.eagerState:s(m,xt)}else at={lane:xt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(w=F=at,E=m):F=F.next=at,xe.lanes|=xt,Pa|=xt;et=et.next}while(et!==null&&et!==i);if(F===null?E=m:F.next=w,!ei(m,e.memoizedState)&&(bn=!0,mt&&(s=Js,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=F,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sf(e){var i=dn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do m=e(m,E.action),E=E.next;while(E!==f);ei(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Nm(e,i,s){var l=xe,f=dn(),m=Le;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!ei((Fe||f).memoizedState,s);E&&(f.memoizedState=s,bn=!0),f=f.queue;var w=zm.bind(null,l,f,e);if(wo(2048,8,w,[e]),f.getSnapshot!==i||E||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,nr(9,Zl(),Om.bind(null,l,f,s,i),null),Ye===null)throw Error(a(349));m||(wa&124)!==0||Pm(l,i,s)}return s}function Pm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=xe.updateQueue,i===null?(i=xf(),xe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Om(e,i,s,l){i.value=s,i.getSnapshot=l,Bm(i)&&Im(e)}function zm(e,i,s){return s(function(){Bm(i)&&Im(e)})}function Bm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ei(e,s)}catch{return!0}}function Im(e){var i=Ys(e,2);i!==null&&oi(i,e,2)}function Ef(e){var i=jn();if(typeof e=="function"){var s=e;if(e=s(),ms){ht(!0);try{s()}finally{ht(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},i}function Fm(e,i,s,l){return e.baseState=s,Mf(e,Fe,typeof l=="function"?l:ta)}function xy(e,i,s,l,f){if(Ql(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Hm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Hm(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var m=B.T,E={};B.T=E;try{var w=s(f,l),F=B.S;F!==null&&F(E,w),Gm(e,i,w)}catch(et){bf(e,i,et)}finally{B.T=m}}else try{m=s(f,l),Gm(e,i,m)}catch(et){bf(e,i,et)}}function Gm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Vm(e,i,l)},function(l){return bf(e,i,l)}):Vm(e,i,s)}function Vm(e,i,s){i.status="fulfilled",i.value=s,km(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Hm(e,s)))}function bf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,km(i),i=i.next;while(i!==l)}e.action=null}function km(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Xm(e,i){return i}function Wm(e,i){if(Le){var s=Ye.formState;if(s!==null){t:{var l=xe;if(Le){if(nn){e:{for(var f=nn,m=zi;f.nodeType!==8;){if(!m){f=null;break e}if(f=Ti(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){nn=Ti(f.nextSibling),l=f.data==="F!";break t}}fs(l)}l=!1}l&&(i=s[0])}}return s=jn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:i},s.queue=l,s=u0.bind(null,xe,l),l.dispatch=s,l=Ef(!1),m=Cf.bind(null,xe,!1,l.queue),l=jn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=xy.bind(null,xe,f,m,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function qm(e){var i=dn();return Ym(i,Fe,e)}function Ym(e,i,s){if(i=Mf(e,i,Xm)[0],e=jl(ta)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ao(i)}catch(E){throw E===yo?Vl:E}else l=i;i=dn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(xe.flags|=2048,nr(9,Zl(),yy.bind(null,f,s),null)),[l,m,e]}function yy(e,i){e.action=i}function jm(e){var i=dn(),s=Fe;if(s!==null)return Ym(i,s,e);dn(),i=i.memoizedState,s=dn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function nr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=xe.updateQueue,i===null&&(i=xf(),xe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Zl(){return{destroy:void 0,resource:void 0}}function Zm(){return dn().memoizedState}function Kl(e,i,s,l){var f=jn();l=l===void 0?null:l,xe.flags|=e,f.memoizedState=nr(1|i,Zl(),s,l)}function wo(e,i,s,l){var f=dn();l=l===void 0?null:l;var m=f.memoizedState.inst;Fe!==null&&l!==null&&pf(l,Fe.memoizedState.deps)?f.memoizedState=nr(i,m,s,l):(xe.flags|=e,f.memoizedState=nr(1|i,m,s,l))}function Km(e,i){Kl(8390656,8,e,i)}function Qm(e,i){wo(2048,8,e,i)}function Jm(e,i){return wo(4,2,e,i)}function $m(e,i){return wo(4,4,e,i)}function t0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function e0(e,i,s){s=s!=null?s.concat([e]):null,wo(4,4,t0.bind(null,i,e),s)}function Tf(){}function n0(e,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&pf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function i0(e,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&pf(i,l[1]))return l[0];if(l=e(),ms){ht(!0);try{e()}finally{ht(!1)}}return s.memoizedState=[l,i],l}function Af(e,i,s){return s===void 0||(wa&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=rg(),xe.lanes|=e,Pa|=e,s)}function a0(e,i,s,l){return ei(s,i)?s:$s.current!==null?(e=Af(e,s,l),ei(e,i)||(bn=!0),e):(wa&42)===0?(bn=!0,e.memoizedState=s):(e=rg(),xe.lanes|=e,Pa|=e,i)}function s0(e,i,s,l,f){var m=tt.p;tt.p=m!==0&&8>m?m:8;var E=B.T,w={};B.T=w,Cf(e,!1,i,s);try{var F=f(),et=B.S;if(et!==null&&et(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var mt=gy(F,l);Ro(e,i,mt,ri(e))}else Ro(e,i,l,ri(e))}catch(xt){Ro(e,i,{then:function(){},status:"rejected",reason:xt},ri())}finally{tt.p=m,B.T=E}}function My(){}function wf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=r0(e).queue;s0(e,f,i,q,s===null?My:function(){return o0(e),s(l)})}function r0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function o0(e){var i=r0(e).next.queue;Ro(e,i,{},ri())}function Rf(){return On(qo)}function l0(){return dn().memoizedState}function c0(){return dn().memoizedState}function Sy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ri();e=Ta(s);var l=Aa(i,e,s);l!==null&&(oi(l,i,s),So(l,i,s)),i={cache:af()},e.payload=i;return}i=i.return}}function Ey(e,i,s){var l=ri();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ql(e)?f0(i,s):(s=Yu(e,i,s,l),s!==null&&(oi(s,e,l),h0(s,i,l)))}function u0(e,i,s){var l=ri();Ro(e,i,s,l)}function Ro(e,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ql(e))f0(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,w=m(E,s);if(f.hasEagerState=!0,f.eagerState=w,ei(w,E))return Pl(e,i,f,0),Ye===null&&Nl(),!1}catch{}finally{}if(s=Yu(e,i,f,l),s!==null)return oi(s,e,l),h0(s,i,l),!0}return!1}function Cf(e,i,s,l){if(l={lane:2,revertLane:oh(),action:l,hasEagerState:!1,eagerState:null,next:null},Ql(e)){if(i)throw Error(a(479))}else i=Yu(e,s,l,2),i!==null&&oi(i,e,2)}function Ql(e){var i=e.alternate;return e===xe||i!==null&&i===xe}function f0(e,i){tr=Wl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function h0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Vt(e,s)}}var Jl={readContext:On,use:Yl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},d0={readContext:On,use:Yl,useCallback:function(e,i){return jn().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:Km,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Kl(4194308,4,t0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Kl(4194308,4,e,i)},useInsertionEffect:function(e,i){Kl(4,2,e,i)},useMemo:function(e,i){var s=jn();i=i===void 0?null:i;var l=e();if(ms){ht(!0);try{e()}finally{ht(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=jn();if(s!==void 0){var f=s(i);if(ms){ht(!0);try{s(i)}finally{ht(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=Ey.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var i=jn();return e={current:e},i.memoizedState=e},useState:function(e){e=Ef(e);var i=e.queue,s=u0.bind(null,xe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Tf,useDeferredValue:function(e,i){var s=jn();return Af(s,e,i)},useTransition:function(){var e=Ef(!1);return e=s0.bind(null,xe,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=xe,f=jn();if(Le){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ye===null)throw Error(a(349));(Ae&124)!==0||Pm(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Km(zm.bind(null,l,m,e),[e]),l.flags|=2048,nr(9,Zl(),Om.bind(null,l,m,s,i),null),s},useId:function(){var e=jn(),i=Ye.identifierPrefix;if(Le){var s=Qi,l=Ki;s=(l&~(1<<32-zt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=ql++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=vy++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Rf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e){var i=jn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Cf.bind(null,xe,!0,s),s.dispatch=i,[e,i]},useMemoCache:yf,useCacheRefresh:function(){return jn().memoizedState=Sy.bind(null,xe)}},p0={readContext:On,use:Yl,useCallback:n0,useContext:On,useEffect:Qm,useImperativeHandle:e0,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:i0,useReducer:jl,useRef:Zm,useState:function(){return jl(ta)},useDebugValue:Tf,useDeferredValue:function(e,i){var s=dn();return a0(s,Fe.memoizedState,e,i)},useTransition:function(){var e=jl(ta)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:Nm,useId:l0,useHostTransitionStatus:Rf,useFormState:qm,useActionState:qm,useOptimistic:function(e,i){var s=dn();return Fm(s,Fe,e,i)},useMemoCache:yf,useCacheRefresh:c0},by={readContext:On,use:Yl,useCallback:n0,useContext:On,useEffect:Qm,useImperativeHandle:e0,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:i0,useReducer:Sf,useRef:Zm,useState:function(){return Sf(ta)},useDebugValue:Tf,useDeferredValue:function(e,i){var s=dn();return Fe===null?Af(s,e,i):a0(s,Fe.memoizedState,e,i)},useTransition:function(){var e=Sf(ta)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:Nm,useId:l0,useHostTransitionStatus:Rf,useFormState:jm,useActionState:jm,useOptimistic:function(e,i){var s=dn();return Fe!==null?Fm(s,Fe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:yf,useCacheRefresh:c0},ir=null,Co=0;function $l(e){var i=Co;return Co+=1,ir===null&&(ir=[]),Tm(ir,e,i)}function Do(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function tc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function m0(e){var i=e._init;return i(e._payload)}function g0(e){function i(K,X){if(e){var $=K.deletions;$===null?(K.deletions=[X],K.flags|=16):$.push(X)}}function s(K,X){if(!e)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function l(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function f(K,X){return K=Zi(K,X),K.index=0,K.sibling=null,K}function m(K,X,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<X?(K.flags|=67108866,X):$):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function E(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function w(K,X,$,gt){return X===null||X.tag!==6?(X=Zu($,K.mode,gt),X.return=K,X):(X=f(X,$),X.return=K,X)}function F(K,X,$,gt){var Ht=$.type;return Ht===S?mt(K,X,$.props.children,gt,$.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&m0(Ht)===X.type)?(X=f(X,$.props),Do(X,$),X.return=K,X):(X=zl($.type,$.key,$.props,null,K.mode,gt),Do(X,$),X.return=K,X)}function et(K,X,$,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Ku($,K.mode,gt),X.return=K,X):(X=f(X,$.children||[]),X.return=K,X)}function mt(K,X,$,gt,Ht){return X===null||X.tag!==7?(X=os($,K.mode,gt,Ht),X.return=K,X):(X=f(X,$),X.return=K,X)}function xt(K,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Zu(""+X,K.mode,$),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return $=zl(X.type,X.key,X.props,null,K.mode,$),Do($,X),$.return=K,$;case x:return X=Ku(X,K.mode,$),X.return=K,X;case G:var gt=X._init;return X=gt(X._payload),xt(K,X,$)}if(ft(X)||j(X))return X=os(X,K.mode,$,null),X.return=K,X;if(typeof X.then=="function")return xt(K,$l(X),$);if(X.$$typeof===U)return xt(K,Hl(K,X),$);tc(K,X)}return null}function at(K,X,$,gt){var Ht=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:w(K,X,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return $.key===Ht?F(K,X,$,gt):null;case x:return $.key===Ht?et(K,X,$,gt):null;case G:return Ht=$._init,$=Ht($._payload),at(K,X,$,gt)}if(ft($)||j($))return Ht!==null?null:mt(K,X,$,gt,null);if(typeof $.then=="function")return at(K,X,$l($),gt);if($.$$typeof===U)return at(K,X,Hl(K,$),gt);tc(K,$)}return null}function st(K,X,$,gt,Ht){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get($)||null,w(X,K,""+gt,Ht);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case _:return K=K.get(gt.key===null?$:gt.key)||null,F(X,K,gt,Ht);case x:return K=K.get(gt.key===null?$:gt.key)||null,et(X,K,gt,Ht);case G:var Me=gt._init;return gt=Me(gt._payload),st(K,X,$,gt,Ht)}if(ft(gt)||j(gt))return K=K.get($)||null,mt(X,K,gt,Ht,null);if(typeof gt.then=="function")return st(K,X,$,$l(gt),Ht);if(gt.$$typeof===U)return st(K,X,$,Hl(X,gt),Ht);tc(X,gt)}return null}function re(K,X,$,gt){for(var Ht=null,Me=null,Qt=X,ae=X=0,An=null;Qt!==null&&ae<$.length;ae++){Qt.index>ae?(An=Qt,Qt=null):An=Qt.sibling;var Ue=at(K,Qt,$[ae],gt);if(Ue===null){Qt===null&&(Qt=An);break}e&&Qt&&Ue.alternate===null&&i(K,Qt),X=m(Ue,X,ae),Me===null?Ht=Ue:Me.sibling=Ue,Me=Ue,Qt=An}if(ae===$.length)return s(K,Qt),Le&&cs(K,ae),Ht;if(Qt===null){for(;ae<$.length;ae++)Qt=xt(K,$[ae],gt),Qt!==null&&(X=m(Qt,X,ae),Me===null?Ht=Qt:Me.sibling=Qt,Me=Qt);return Le&&cs(K,ae),Ht}for(Qt=l(Qt);ae<$.length;ae++)An=st(Qt,K,ae,$[ae],gt),An!==null&&(e&&An.alternate!==null&&Qt.delete(An.key===null?ae:An.key),X=m(An,X,ae),Me===null?Ht=An:Me.sibling=An,Me=An);return e&&Qt.forEach(function(ka){return i(K,ka)}),Le&&cs(K,ae),Ht}function ne(K,X,$,gt){if($==null)throw Error(a(151));for(var Ht=null,Me=null,Qt=X,ae=X=0,An=null,Ue=$.next();Qt!==null&&!Ue.done;ae++,Ue=$.next()){Qt.index>ae?(An=Qt,Qt=null):An=Qt.sibling;var ka=at(K,Qt,Ue.value,gt);if(ka===null){Qt===null&&(Qt=An);break}e&&Qt&&ka.alternate===null&&i(K,Qt),X=m(ka,X,ae),Me===null?Ht=ka:Me.sibling=ka,Me=ka,Qt=An}if(Ue.done)return s(K,Qt),Le&&cs(K,ae),Ht;if(Qt===null){for(;!Ue.done;ae++,Ue=$.next())Ue=xt(K,Ue.value,gt),Ue!==null&&(X=m(Ue,X,ae),Me===null?Ht=Ue:Me.sibling=Ue,Me=Ue);return Le&&cs(K,ae),Ht}for(Qt=l(Qt);!Ue.done;ae++,Ue=$.next())Ue=st(Qt,K,ae,Ue.value,gt),Ue!==null&&(e&&Ue.alternate!==null&&Qt.delete(Ue.key===null?ae:Ue.key),X=m(Ue,X,ae),Me===null?Ht=Ue:Me.sibling=Ue,Me=Ue);return e&&Qt.forEach(function(TM){return i(K,TM)}),Le&&cs(K,ae),Ht}function Ge(K,X,$,gt){if(typeof $=="object"&&$!==null&&$.type===S&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case _:t:{for(var Ht=$.key;X!==null;){if(X.key===Ht){if(Ht=$.type,Ht===S){if(X.tag===7){s(K,X.sibling),gt=f(X,$.props.children),gt.return=K,K=gt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&m0(Ht)===X.type){s(K,X.sibling),gt=f(X,$.props),Do(gt,$),gt.return=K,K=gt;break t}s(K,X);break}else i(K,X);X=X.sibling}$.type===S?(gt=os($.props.children,K.mode,gt,$.key),gt.return=K,K=gt):(gt=zl($.type,$.key,$.props,null,K.mode,gt),Do(gt,$),gt.return=K,K=gt)}return E(K);case x:t:{for(Ht=$.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){s(K,X.sibling),gt=f(X,$.children||[]),gt.return=K,K=gt;break t}else{s(K,X);break}else i(K,X);X=X.sibling}gt=Ku($,K.mode,gt),gt.return=K,K=gt}return E(K);case G:return Ht=$._init,$=Ht($._payload),Ge(K,X,$,gt)}if(ft($))return re(K,X,$,gt);if(j($)){if(Ht=j($),typeof Ht!="function")throw Error(a(150));return $=Ht.call($),ne(K,X,$,gt)}if(typeof $.then=="function")return Ge(K,X,$l($),gt);if($.$$typeof===U)return Ge(K,X,Hl(K,$),gt);tc(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(s(K,X.sibling),gt=f(X,$),gt.return=K,K=gt):(s(K,X),gt=Zu($,K.mode,gt),gt.return=K,K=gt),E(K)):s(K,X)}return function(K,X,$,gt){try{Co=0;var Ht=Ge(K,X,$,gt);return ir=null,Ht}catch(Qt){if(Qt===yo||Qt===Vl)throw Qt;var Me=ni(29,Qt,null,K.mode);return Me.lanes=gt,Me.return=K,Me}finally{}}}var ar=g0(!0),v0=g0(!1),vi=Z(null),Bi=null;function Ra(e){var i=e.alternate;vt(_n,_n.current&1),vt(vi,e),Bi===null&&(i===null||$s.current!==null||i.memoizedState!==null)&&(Bi=e)}function _0(e){if(e.tag===22){if(vt(_n,_n.current),vt(vi,e),Bi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Bi=e)}}else Ca()}function Ca(){vt(_n,_n.current),vt(vi,vi.current)}function ea(e){dt(vi),Bi===e&&(Bi=null),dt(_n)}var _n=Z(0);function ec(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||xh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Df(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Uf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ri(),f=Ta(l);f.payload=i,s!=null&&(f.callback=s),i=Aa(e,f,l),i!==null&&(oi(i,e,l),So(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ri(),f=Ta(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Aa(e,f,l),i!==null&&(oi(i,e,l),So(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ri(),l=Ta(s);l.tag=2,i!=null&&(l.callback=i),i=Aa(e,l,s),i!==null&&(oi(i,e,s),So(i,e,s))}};function x0(e,i,s,l,f,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!fo(s,l)||!fo(f,m):!0}function y0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Uf.enqueueReplaceState(i,i.state,null)}function gs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var nc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function M0(e){nc(e)}function S0(e){console.error(e)}function E0(e){nc(e)}function ic(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function b0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Lf(e,i,s){return s=Ta(s),s.tag=3,s.payload={element:null},s.callback=function(){ic(e,i)},s}function T0(e){return e=Ta(e),e.tag=3,e}function A0(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){b0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){b0(i,s,l),typeof f!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function Ty(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&vo(i,s,f,!0),s=vi.current,s!==null){switch(s.tag){case 13:return Bi===null?nh():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===of?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),ah(e,l,f)),!1;case 22:return s.flags|=65536,l===of?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),ah(e,l,f)),!1}throw Error(a(435,s.tag))}return ah(e,l,f),nh(),!1}if(Le)return i=vi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==$u&&(e=Error(a(422),{cause:l}),go(di(e,s)))):(l!==$u&&(i=Error(a(423),{cause:l}),go(di(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=di(l,s),f=Lf(e.stateNode,l,f),uf(e,f),an!==4&&(an=2)),!1;var m=Error(a(520),{cause:l});if(m=di(m,s),Bo===null?Bo=[m]:Bo.push(m),an!==4&&(an=2),i===null)return!0;l=di(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Lf(s.stateNode,l,e),uf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Oa===null||!Oa.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=T0(f),A0(f,e,s,l),uf(s,f),!1}s=s.return}while(s!==null);return!1}var w0=Error(a(461)),bn=!1;function Dn(e,i,s,l){i.child=e===null?v0(i,null,s,l):ar(i,e.child,s,l)}function R0(e,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var w in l)w!=="ref"&&(E[w]=l[w])}else E=l;return ds(i),l=mf(e,i,s,E,m,f),w=gf(),e!==null&&!bn?(vf(e,i,f),na(e,i,f)):(Le&&w&&Qu(i),i.flags|=1,Dn(e,i,l,f),i.child)}function C0(e,i,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!ju(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,D0(e,i,m,l,f)):(e=zl(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Hf(e,f)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:fo,s(E,l)&&e.ref===i.ref)return na(e,i,f)}return i.flags|=1,e=Zi(m,l),e.ref=i.ref,e.return=i,i.child=e}function D0(e,i,s,l,f){if(e!==null){var m=e.memoizedProps;if(fo(m,l)&&e.ref===i.ref)if(bn=!1,i.pendingProps=l=m,Hf(e,f))(e.flags&131072)!==0&&(bn=!0);else return i.lanes=e.lanes,na(e,i,f)}return Nf(e,i,s,l,f)}function U0(e,i,s){var l=i.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=i.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return L0(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(i,m!==null?m.cachePool:null),m!==null?Dm(i,m):hf(),_0(i);else return i.lanes=i.childLanes=536870912,L0(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Gl(i,m.cachePool),Dm(i,m),Ca(),i.memoizedState=null):(e!==null&&Gl(i,null),hf(),Ca());return Dn(e,i,f,s),i.child}function L0(e,i,s,l){var f=rf();return f=f===null?null:{parent:vn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&Gl(i,null),hf(),_0(i),e!==null&&vo(e,i,l,!0),null}function ac(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Nf(e,i,s,l,f){return ds(i),s=mf(e,i,s,l,void 0,f),l=gf(),e!==null&&!bn?(vf(e,i,f),na(e,i,f)):(Le&&l&&Qu(i),i.flags|=1,Dn(e,i,s,f),i.child)}function N0(e,i,s,l,f,m){return ds(i),i.updateQueue=null,s=Lm(i,l,s,f),Um(e),l=gf(),e!==null&&!bn?(vf(e,i,m),na(e,i,m)):(Le&&l&&Qu(i),i.flags|=1,Dn(e,i,s,m),i.child)}function P0(e,i,s,l,f){if(ds(i),i.stateNode===null){var m=js,E=s.contextType;typeof E=="object"&&E!==null&&(m=On(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Uf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},lf(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?On(E):js,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Df(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Uf.enqueueReplaceState(m,m.state,null),bo(i,l,m,f),Eo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var w=i.memoizedProps,F=gs(s,w);m.props=F;var et=m.context,mt=s.contextType;E=js,typeof mt=="object"&&mt!==null&&(E=On(mt));var xt=s.getDerivedStateFromProps;mt=typeof xt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||et!==E)&&y0(i,m,l,E),ba=!1;var at=i.memoizedState;m.state=at,bo(i,l,m,f),Eo(),et=i.memoizedState,w||at!==et||ba?(typeof xt=="function"&&(Df(i,s,xt,l),et=i.memoizedState),(F=ba||x0(i,s,F,l,at,et,E))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),m.props=l,m.state=et,m.context=E,l=F):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,cf(e,i),E=i.memoizedProps,mt=gs(s,E),m.props=mt,xt=i.pendingProps,at=m.context,et=s.contextType,F=js,typeof et=="object"&&et!==null&&(F=On(et)),w=s.getDerivedStateFromProps,(et=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==xt||at!==F)&&y0(i,m,l,F),ba=!1,at=i.memoizedState,m.state=at,bo(i,l,m,f),Eo();var st=i.memoizedState;E!==xt||at!==st||ba||e!==null&&e.dependencies!==null&&Fl(e.dependencies)?(typeof w=="function"&&(Df(i,s,w,l),st=i.memoizedState),(mt=ba||x0(i,s,mt,l,at,st,F)||e!==null&&e.dependencies!==null&&Fl(e.dependencies))?(et||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,st,F),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,st,F)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=st),m.props=l,m.state=st,m.context=F,l=mt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,ac(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=ar(i,e.child,null,f),i.child=ar(i,null,s,f)):Dn(e,i,s,f),i.memoizedState=m.state,e=i.child):e=na(e,i,f),e}function O0(e,i,s,l){return mo(),i.flags|=256,Dn(e,i,s,l),i.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(e){return{baseLanes:e,cachePool:Sm()}}function zf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=_i),e}function z0(e,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Le){if(f?Ra(i):Ca(),Le){var w=nn,F;if(F=w){t:{for(F=w,w=zi;F.nodeType!==8;){if(!w){w=null;break t}if(F=Ti(F.nextSibling),F===null){w=null;break t}}w=F}w!==null?(i.memoizedState={dehydrated:w,treeContext:ls!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},F=ni(18,null,null,0),F.stateNode=w,F.return=i,i.child=F,kn=i,nn=null,F=!0):F=!1}F||fs(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return xh(w)?i.lanes=32:i.lanes=536870912,null;ea(i)}return w=l.children,l=l.fallback,f?(Ca(),f=i.mode,w=sc({mode:"hidden",children:w},f),l=os(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,f=i.child,f.memoizedState=Of(s),f.childLanes=zf(e,E,s),i.memoizedState=Pf,l):(Ra(i),Bf(i,w))}if(F=e.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(m)i.flags&256?(Ra(i),i.flags&=-257,i=If(e,i,s)):i.memoizedState!==null?(Ca(),i.child=e.child,i.flags|=128,i=null):(Ca(),f=l.fallback,w=i.mode,l=sc({mode:"visible",children:l.children},w),f=os(f,w,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,ar(i,e.child,null,s),l=i.child,l.memoizedState=Of(s),l.childLanes=zf(e,E,s),i.memoizedState=Pf,i=f);else if(Ra(i),xh(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var et=E.dgst;E=et,l=Error(a(419)),l.stack="",l.digest=E,go({value:l,source:null,stack:null}),i=If(e,i,s)}else if(bn||vo(e,i,s,!1),E=(s&e.childLanes)!==0,bn||E){if(E=Ye,E!==null&&(l=s&-s,l=(l&42)!==0?1:oe(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==F.retryLane))throw F.retryLane=l,Ys(e,l),oi(E,e,l),w0;w.data==="$?"||nh(),i=If(e,i,s)}else w.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=F.treeContext,nn=Ti(w.nextSibling),kn=i,Le=!0,us=null,zi=!1,e!==null&&(mi[gi++]=Ki,mi[gi++]=Qi,mi[gi++]=ls,Ki=e.id,Qi=e.overflow,ls=i),i=Bf(i,l.children),i.flags|=4096);return i}return f?(Ca(),f=l.fallback,w=i.mode,F=e.child,et=F.sibling,l=Zi(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,et!==null?f=Zi(et,f):(f=os(f,w,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,w=e.child.memoizedState,w===null?w=Of(s):(F=w.cachePool,F!==null?(et=vn._currentValue,F=F.parent!==et?{parent:et,pool:et}:F):F=Sm(),w={baseLanes:w.baseLanes|s,cachePool:F}),f.memoizedState=w,f.childLanes=zf(e,E,s),i.memoizedState=Pf,l):(Ra(i),s=e.child,e=s.sibling,s=Zi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Bf(e,i){return i=sc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function sc(e,i){return e=ni(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function If(e,i,s){return ar(i,e.child,null,s),e=Bf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function B0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ef(e.return,i,s)}function Ff(e,i,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function I0(e,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Dn(e,i,l.children,s),l=_n.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&B0(e,s,i);else if(e.tag===19)B0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(vt(_n,l),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&ec(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ff(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&ec(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Ff(i,!0,s,null,m);break;case"together":Ff(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function na(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Pa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(vo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Zi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Zi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Hf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Fl(e)))}function Ay(e,i,s){switch(i.tag){case 3:wt(i,i.stateNode.containerInfo),Ea(i,vn,e.memoizedState.cache),mo();break;case 27:case 5:Zt(i);break;case 4:wt(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ra(i),i.flags|=128,null):(s&i.child.childLanes)!==0?z0(e,i,s):(Ra(i),e=na(e,i,s),e!==null?e.sibling:null);Ra(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(vo(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return I0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),vt(_n,_n.current),l)break;return null;case 22:case 23:return i.lanes=0,U0(e,i,s);case 24:Ea(i,vn,e.memoizedState.cache)}return na(e,i,s)}function F0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)bn=!0;else{if(!Hf(e,s)&&(i.flags&128)===0)return bn=!1,Ay(e,i,s);bn=(e.flags&131072)!==0}else bn=!1,Le&&(i.flags&1048576)!==0&&mm(i,Il,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")ju(l)?(e=gs(l,e),i.tag=1,i=P0(null,i,l,e,s)):(i.tag=0,i=Nf(null,i,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===A){i.tag=11,i=R0(null,i,l,e,s);break t}else if(f===I){i.tag=14,i=C0(null,i,l,e,s);break t}}throw i=ut(l)||l,Error(a(306,i,""))}}return i;case 0:return Nf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=gs(l,i.pendingProps),P0(e,i,l,f,s);case 3:t:{if(wt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,cf(e,i),bo(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Ea(i,vn,l),l!==m.cache&&nf(i,[vn],s,!0),Eo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=O0(e,i,l,s);break t}else if(l!==f){f=di(Error(a(424)),i),go(f),i=O0(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Ti(e.firstChild),kn=i,Le=!0,us=null,zi=!0,s=v0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(mo(),l===f){i=na(e,i,s);break t}Dn(e,i,l,s)}i=i.child}return i;case 26:return ac(e,i),e===null?(s=kg(i.type,null,i.pendingProps,null))?i.memoizedState=s:Le||(s=i.type,e=i.pendingProps,l=xc(it.current).createElement(s),l[gn]=i,l[tn]=e,Ln(l,s,e),fn(l),i.stateNode=l):i.memoizedState=kg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zt(i),e===null&&Le&&(l=i.stateNode=Hg(i.type,i.pendingProps,it.current),kn=i,zi=!0,f=nn,Ia(i.type)?(yh=f,nn=Ti(l.firstChild)):nn=f),Dn(e,i,i.pendingProps.children,s),ac(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Le&&((f=l=nn)&&(l=tM(l,i.type,i.pendingProps,zi),l!==null?(i.stateNode=l,kn=i,nn=Ti(l.firstChild),zi=!1,f=!0):f=!1),f||fs(i)),Zt(i),f=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,gh(f,m)?l=null:E!==null&&gh(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=mf(e,i,_y,null,null,s),qo._currentValue=f),ac(e,i),Dn(e,i,l,s),i.child;case 6:return e===null&&Le&&((e=s=nn)&&(s=eM(s,i.pendingProps,zi),s!==null?(i.stateNode=s,kn=i,nn=null,e=!0):e=!1),e||fs(i)),null;case 13:return z0(e,i,s);case 4:return wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ar(i,null,l,s):Dn(e,i,l,s),i.child;case 11:return R0(e,i,i.type,i.pendingProps,s);case 7:return Dn(e,i,i.pendingProps,s),i.child;case 8:return Dn(e,i,i.pendingProps.children,s),i.child;case 12:return Dn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ea(i,i.type,l.value),Dn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ds(i),f=On(f),l=l(f),i.flags|=1,Dn(e,i,l,s),i.child;case 14:return C0(e,i,i.type,i.pendingProps,s);case 15:return D0(e,i,i.type,i.pendingProps,s);case 19:return I0(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=sc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Zi(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return U0(e,i,s);case 24:return ds(i),l=On(vn),e===null?(f=rf(),f===null&&(f=Ye,m=af(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},lf(i),Ea(i,vn,f)):((e.lanes&s)!==0&&(cf(e,i),bo(i,null,null,s),Eo()),f=e.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ea(i,vn,l)):(l=m.cache,Ea(i,vn,l),l!==f.cache&&nf(i,[vn],s,!0))),Dn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ia(e){e.flags|=4}function H0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(i)){if(i=vi.current,i!==null&&((Ae&4194048)===Ae?Bi!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||i!==Bi))throw Mo=of,Em;e.flags|=8192}}function rc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Tt():536870912,e.lanes|=i,lr|=i)}function Uo(e,i){if(!Le)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function wy(e,i,s){var l=i.pendingProps;switch(Ju(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),$i(vn),$t(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(po(i)?ia(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_m())),$e(i),null;case 26:return s=i.memoizedState,e===null?(ia(i),s!==null?($e(i),H0(i,s)):($e(i),i.flags&=-16777217)):s?s!==e.memoizedState?(ia(i),$e(i),H0(i,s)):($e(i),i.flags&=-16777217):(e.memoizedProps!==l&&ia(i),$e(i),i.flags&=-16777217),null;case 27:_e(i),s=it.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}e=At.current,po(i)?gm(i):(e=Hg(f,l,s),i.stateNode=e,ia(i))}return $e(i),null;case 5:if(_e(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(e=At.current,po(i))gm(i);else{switch(f=xc(it.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[gn]=i,e[tn]=l;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(Ln(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ia(i)}}return $e(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,po(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=kn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[gn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Ng(e.nodeValue,s)),e||fs(i)}else e=xc(e).createTextNode(l),e[gn]=i,i.stateNode=e}return $e(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=po(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[gn]=i}else mo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),f=!1}else f=_m(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ea(i),i):(ea(i),null)}if(ea(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),rc(i,i.updateQueue),$e(i),null;case 4:return $t(),e===null&&fh(i.stateNode.containerInfo),$e(i),null;case 10:return $i(i.type),$e(i),null;case 19:if(dt(_n),f=i.memoizedState,f===null)return $e(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Uo(f,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=ec(e),m!==null){for(i.flags|=128,Uo(f,!1),e=m.updateQueue,i.updateQueue=e,rc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)pm(s,e),s=s.sibling;return vt(_n,_n.current&1|2),i.child}e=e.sibling}f.tail!==null&&Ot()>cc&&(i.flags|=128,l=!0,Uo(f,!1),i.lanes=4194304)}else{if(!l)if(e=ec(m),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,rc(i,e),Uo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Le)return $e(i),null}else 2*Ot()-f.renderingStartTime>cc&&s!==536870912&&(i.flags|=128,l=!0,Uo(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(e=f.last,e!==null?e.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ot(),i.sibling=null,e=_n.current,vt(_n,l?e&1|2:e&1),i):($e(i),null);case 22:case 23:return ea(i),df(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),s=i.updateQueue,s!==null&&rc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&dt(ps),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),$i(vn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Ry(e,i){switch(Ju(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return $i(vn),$t(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _e(i),null;case 13:if(ea(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));mo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return dt(_n),null;case 4:return $t(),null;case 10:return $i(i.type),null;case 22:case 23:return ea(i),df(),e!==null&&dt(ps),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return $i(vn),null;case 25:return null;default:return null}}function G0(e,i){switch(Ju(i),i.tag){case 3:$i(vn),$t();break;case 26:case 27:case 5:_e(i);break;case 4:$t();break;case 13:ea(i);break;case 19:dt(_n);break;case 10:$i(i.type);break;case 22:case 23:ea(i),df(),e!==null&&dt(ps);break;case 24:$i(vn)}}function Lo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==f)}}catch(w){Xe(i,i.return,w)}}function Da(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var E=l.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=i;var F=s,et=w;try{et()}catch(mt){Xe(f,F,mt)}}}l=l.next}while(l!==m)}}catch(mt){Xe(i,i.return,mt)}}function V0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Cm(i,s)}catch(l){Xe(e,e.return,l)}}}function k0(e,i,s){s.props=gs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Xe(e,i,l)}}function No(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Xe(e,i,f)}}function Ii(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xe(e,i,f)}else s.current=null}function X0(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xe(e,e.return,f)}}function Gf(e,i,s){try{var l=e.stateNode;Zy(l,e.type,s,i),l[tn]=i}catch(f){Xe(e,e.return,f)}}function W0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Vf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||W0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=_c));else if(l!==4&&(l===27&&Ia(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(kf(e,i,s),e=e.sibling;e!==null;)kf(e,i,s),e=e.sibling}function oc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Ia(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(oc(e,i,s),e=e.sibling;e!==null;)oc(e,i,s),e=e.sibling}function q0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ln(i,l,s),i[gn]=e,i[tn]=s}catch(m){Xe(e,e.return,m)}}var aa=!1,on=!1,Xf=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Cy(e,i){if(e=e.containerInfo,ph=Tc,e=am(e),Gu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,w=-1,F=-1,et=0,mt=0,xt=e,at=null;e:for(;;){for(var st;xt!==s||f!==0&&xt.nodeType!==3||(w=E+f),xt!==m||l!==0&&xt.nodeType!==3||(F=E+l),xt.nodeType===3&&(E+=xt.nodeValue.length),(st=xt.firstChild)!==null;)at=xt,xt=st;for(;;){if(xt===e)break e;if(at===s&&++et===f&&(w=E),at===m&&++mt===l&&(F=E),(st=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=st}s=w===-1||F===-1?null:{start:w,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(mh={focusedElem:e,selectionRange:s},Tc=!1,Tn=i;Tn!==null;)if(i=Tn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Tn=e;else for(;Tn!==null;){switch(i=Tn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var re=gs(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(re,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Xe(s,s.return,ne)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)_h(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_h(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Tn=e;break}Tn=i.return}}function j0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ua(e,s),l&4&&Lo(5,s);break;case 1:if(Ua(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){Xe(s,s.return,E)}else{var f=gs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Xe(s,s.return,E)}}l&64&&V0(s),l&512&&No(s,s.return);break;case 3:if(Ua(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Cm(e,i)}catch(E){Xe(s,s.return,E)}}break;case 27:i===null&&l&4&&q0(s);case 26:case 5:Ua(e,s),i===null&&l&4&&X0(s),l&512&&No(s,s.return);break;case 12:Ua(e,s);break;case 13:Ua(e,s),l&4&&Q0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Iy.bind(null,s),nM(e,s))));break;case 22:if(l=s.memoizedState!==null||aa,!l){i=i!==null&&i.memoizedState!==null||on,f=aa;var m=on;aa=l,(on=i)&&!m?La(e,s,(s.subtreeFlags&8772)!==0):Ua(e,s),aa=f,on=m}break;case 30:break;default:Ua(e,s)}}function Z0(e){var i=e.alternate;i!==null&&(e.alternate=null,Z0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Fs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Zn=!1;function sa(e,i,s){for(s=s.child;s!==null;)K0(e,i,s),s=s.sibling}function K0(e,i,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(pt,s)}catch{}switch(s.tag){case 26:on||Ii(s,i),sa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||Ii(s,i);var l=Ke,f=Zn;Ia(s.type)&&(Ke=s.stateNode,Zn=!1),sa(e,i,s),Vo(s.stateNode),Ke=l,Zn=f;break;case 5:on||Ii(s,i);case 6:if(l=Ke,f=Zn,Ke=null,sa(e,i,s),Ke=l,Zn=f,Ke!==null)if(Zn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(s.stateNode)}catch(m){Xe(s,i,m)}else try{Ke.removeChild(s.stateNode)}catch(m){Xe(s,i,m)}break;case 18:Ke!==null&&(Zn?(e=Ke,Ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ko(e)):Ig(Ke,s.stateNode));break;case 4:l=Ke,f=Zn,Ke=s.stateNode.containerInfo,Zn=!0,sa(e,i,s),Ke=l,Zn=f;break;case 0:case 11:case 14:case 15:on||Da(2,s,i),on||Da(4,s,i),sa(e,i,s);break;case 1:on||(Ii(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&k0(s,i,l)),sa(e,i,s);break;case 21:sa(e,i,s);break;case 22:on=(l=on)||s.memoizedState!==null,sa(e,i,s),on=l;break;default:sa(e,i,s)}}function Q0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ko(e)}catch(s){Xe(i,i.return,s)}}function Dy(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Y0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Y0),i;default:throw Error(a(435,e.tag))}}function Wf(e,i){var s=Dy(e);i.forEach(function(l){var f=Fy.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function ii(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,E=i,w=E;t:for(;w!==null;){switch(w.tag){case 27:if(Ia(w.type)){Ke=w.stateNode,Zn=!1;break t}break;case 5:Ke=w.stateNode,Zn=!1;break t;case 3:case 4:Ke=w.stateNode.containerInfo,Zn=!0;break t}w=w.return}if(Ke===null)throw Error(a(160));K0(m,E,f),Ke=null,Zn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)J0(i,e),i=i.sibling}var bi=null;function J0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(i,e),ai(e),l&4&&(Da(3,e,e.return),Lo(3,e),Da(5,e,e.return));break;case 1:ii(i,e),ai(e),l&512&&(on||s===null||Ii(s,s.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=bi;if(ii(i,e),ai(e),l&512&&(on||s===null||Ii(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Oi]||m[gn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Ln(m,l,s),m[gn]=e,fn(m),l=m;break t;case"link":var E=qg("link","href",f).get(l+(s.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(w,1);break e}}m=f.createElement(l),Ln(m,l,s),f.head.appendChild(m);break;case"meta":if(E=qg("meta","content",f).get(l+(s.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(w,1);break e}}m=f.createElement(l),Ln(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[gn]=e,fn(m),l=m}e.stateNode=l}else Yg(f,e.type,e.stateNode);else e.stateNode=Wg(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?Yg(f,e.type,e.stateNode):Wg(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Gf(e,e.memoizedProps,s.memoizedProps)}break;case 27:ii(i,e),ai(e),l&512&&(on||s===null||Ii(s,s.return)),s!==null&&l&4&&Gf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ii(i,e),ai(e),l&512&&(on||s===null||Ii(s,s.return)),e.flags&32){f=e.stateNode;try{qn(f,"")}catch(st){Xe(e,e.return,st)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Gf(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Xf=!0);break;case 6:if(ii(i,e),ai(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(st){Xe(e,e.return,st)}}break;case 3:if(Sc=null,f=bi,bi=yc(i.containerInfo),ii(i,e),bi=f,ai(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ko(i.containerInfo)}catch(st){Xe(e,e.return,st)}Xf&&(Xf=!1,$0(e));break;case 4:l=bi,bi=yc(e.stateNode.containerInfo),ii(i,e),ai(e),bi=l;break;case 12:ii(i,e),ai(e);break;case 13:ii(i,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Qf=Ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 22:f=e.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,et=aa,mt=on;if(aa=et||f,on=mt||F,ii(i,e),on=mt,aa=et,ai(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||F||aa||on||vs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(m=F.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=F.stateNode;var xt=F.memoizedProps.style,at=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;w.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Xe(F,F.return,st)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(st){Xe(F,F.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Wf(e,s))));break;case 19:ii(i,e),ai(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 30:break;case 21:break;default:ii(i,e),ai(e)}}function ai(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(W0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Vf(e);oc(e,m,f);break;case 5:var E=s.stateNode;s.flags&32&&(qn(E,""),s.flags&=-33);var w=Vf(e);oc(e,w,E);break;case 3:case 4:var F=s.stateNode.containerInfo,et=Vf(e);kf(e,et,F);break;default:throw Error(a(161))}}catch(mt){Xe(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function $0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;$0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ua(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)j0(e,i.alternate,i),i=i.sibling}function vs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Da(4,i,i.return),vs(i);break;case 1:Ii(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&k0(i,i.return,s),vs(i);break;case 27:Vo(i.stateNode);case 26:case 5:Ii(i,i.return),vs(i);break;case 22:i.memoizedState===null&&vs(i);break;case 30:vs(i);break;default:vs(i)}e=e.sibling}}function La(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:La(f,m,s),Lo(4,m);break;case 1:if(La(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(et){Xe(l,l.return,et)}if(l=m,f=l.updateQueue,f!==null){var w=l.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)Rm(F[f],w)}catch(et){Xe(l,l.return,et)}}s&&E&64&&V0(m),No(m,m.return);break;case 27:q0(m);case 26:case 5:La(f,m,s),s&&l===null&&E&4&&X0(m),No(m,m.return);break;case 12:La(f,m,s);break;case 13:La(f,m,s),s&&E&4&&Q0(f,m);break;case 22:m.memoizedState===null&&La(f,m,s),No(m,m.return);break;case 30:break;default:La(f,m,s)}i=i.sibling}}function qf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&_o(s))}function Yf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&_o(e))}function Fi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)tg(e,i,s,l),i=i.sibling}function tg(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(e,i,s,l),f&2048&&Lo(9,i);break;case 1:Fi(e,i,s,l);break;case 3:Fi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&_o(e)));break;case 12:if(f&2048){Fi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Xe(i,i.return,F)}}else Fi(e,i,s,l);break;case 13:Fi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Fi(e,i,s,l):Po(e,i):m._visibility&2?Fi(e,i,s,l):(m._visibility|=2,sr(e,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&qf(E,i);break;case 24:Fi(e,i,s,l),f&2048&&Yf(i.alternate,i);break;default:Fi(e,i,s,l)}}function sr(e,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,E=i,w=s,F=l,et=E.flags;switch(E.tag){case 0:case 11:case 15:sr(m,E,w,F,f),Lo(8,E);break;case 23:break;case 22:var mt=E.stateNode;E.memoizedState!==null?mt._visibility&2?sr(m,E,w,F,f):Po(m,E):(mt._visibility|=2,sr(m,E,w,F,f)),f&&et&2048&&qf(E.alternate,E);break;case 24:sr(m,E,w,F,f),f&&et&2048&&Yf(E.alternate,E);break;default:sr(m,E,w,F,f)}i=i.sibling}}function Po(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Po(s,l),f&2048&&qf(l.alternate,l);break;case 24:Po(s,l),f&2048&&Yf(l.alternate,l);break;default:Po(s,l)}i=i.sibling}}var Oo=8192;function rr(e){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 26:rr(e),e.flags&Oo&&e.memoizedState!==null&&mM(bi,e.memoizedState,e.memoizedProps);break;case 5:rr(e);break;case 3:case 4:var i=bi;bi=yc(e.stateNode.containerInfo),rr(e),bi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Oo,Oo=16777216,rr(e),Oo=i):rr(e));break;default:rr(e)}}function ng(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function zo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,ag(l,e)}ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 0:case 11:case 15:zo(e),e.flags&2048&&Da(9,e,e.return);break;case 3:zo(e);break;case 12:zo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,lc(e)):zo(e);break;default:zo(e)}}function lc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,ag(l,e)}ng(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Da(8,i,i.return),lc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,lc(i));break;default:lc(i)}e=e.sibling}}function ag(e,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:Da(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_o(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Tn=l;else t:for(s=e;Tn!==null;){l=Tn;var f=l.sibling,m=l.return;if(Z0(l),l===s){Tn=null;break t}if(f!==null){f.return=m,Tn=f;break t}Tn=m}}}var Uy={getCacheForType:function(e){var i=On(vn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Ly=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,be=null,Ae=0,Oe=0,si=null,Na=!1,or=!1,jf=!1,ra=0,an=0,Pa=0,_s=0,Zf=0,_i=0,lr=0,Bo=null,Kn=null,Kf=!1,Qf=0,cc=1/0,uc=null,Oa=null,Un=0,za=null,cr=null,ur=0,Jf=0,$f=null,sg=null,Io=0,th=null;function ri(){if((Pe&2)!==0&&Ae!==0)return Ae&-Ae;if(B.T!==null){var e=Qs;return e!==0?e:oh()}return we()}function rg(){_i===0&&(_i=(Ae&536870912)===0||Le?W():536870912);var e=vi.current;return e!==null&&(e.flags|=32),_i}function oi(e,i,s){(e===Ye&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Ba(e,Ae,_i,!1)),Bt(e,s),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(_s|=s),an===4&&Ba(e,Ae,_i,!1)),Hi(e))}function og(e,i,s){if((Pe&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),f=l?Oy(e,i):ih(e,i,!0),m=l;do{if(f===0){or&&!l&&Ba(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!Ny(s)){f=ih(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var w=e;f=Bo;var F=w.current.memoizedState.isDehydrated;if(F&&(fr(w,E).flags|=256),E=ih(w,E,!1),E!==2){if(jf&&!F){w.errorRecoveryDisabledLanes|=m,_s|=m,f=4;break t}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){fr(e,0),Ba(e,i,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ba(l,i,_i,!Na);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Qf+300-Ot(),10<f)){if(Ba(l,i,_i,!Na),Xt(l,0,!0)!==0)break t;l.timeoutHandle=zg(lg.bind(null,l,s,Kn,uc,Kf,i,_i,_s,lr,Na,m,2,-0,0),f);break t}lg(l,s,Kn,uc,Kf,i,_i,_s,lr,Na,m,0,-0,0)}}break}while(!0);Hi(e)}function lg(e,i,s,l,f,m,E,w,F,et,mt,xt,at,st){if(e.timeoutHandle=-1,xt=i.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(Wo={stylesheets:null,count:0,unsuspend:pM},eg(i),xt=gM(),xt!==null)){e.cancelPendingCommit=xt(mg.bind(null,e,i,m,s,l,f,E,w,F,mt,1,at,st)),Ba(e,m,E,!et);return}mg(e,i,m,s,l,f,E,w,F)}function Ny(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ei(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ba(e,i,s,l){i&=~Zf,i&=~_s,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var m=31-zt(f),E=1<<m;l[m]=-1,f&=~E}s!==0&&Mt(e,s,i)}function fc(){return(Pe&6)===0?(Fo(0),!1):!0}function eh(){if(be!==null){if(Oe===0)var e=be.return;else e=be,Ji=hs=null,_f(e),ir=null,Co=0,e=be;for(;e!==null;)G0(e.alternate,e),e=e.return;be=null}}function fr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Qy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),eh(),Ye=e,be=s=Zi(e.current,null),Ae=i,Oe=0,si=null,Na=!1,or=Dt(e,i),jf=!1,lr=_i=Zf=_s=Pa=an=0,Kn=Bo=null,Kf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-zt(l),m=1<<f;i|=e[f],l&=~m}return ra=i,Nl(),s}function cg(e,i){xe=null,B.H=Jl,i===yo||i===Vl?(i=Am(),Oe=3):i===Em?(i=Am(),Oe=4):Oe=i===w0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,be===null&&(an=1,ic(e,di(i,e.current)))}function ug(){var e=B.H;return B.H=Jl,e===null?Jl:e}function fg(){var e=B.A;return B.A=Uy,e}function nh(){an=4,Na||(Ae&4194048)!==Ae&&vi.current!==null||(or=!0),(Pa&134217727)===0&&(_s&134217727)===0||Ye===null||Ba(Ye,Ae,_i,!1)}function ih(e,i,s){var l=Pe;Pe|=2;var f=ug(),m=fg();(Ye!==e||Ae!==i)&&(uc=null,fr(e,i)),i=!1;var E=an;t:do try{if(Oe!==0&&be!==null){var w=be,F=si;switch(Oe){case 8:eh(),E=6;break t;case 3:case 2:case 9:case 6:vi.current===null&&(i=!0);var et=Oe;if(Oe=0,si=null,hr(e,w,F,et),s&&or){E=0;break t}break;default:et=Oe,Oe=0,si=null,hr(e,w,F,et)}}Py(),E=an;break}catch(mt){cg(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Ji=hs=null,Pe=l,B.H=f,B.A=m,be===null&&(Ye=null,Ae=0,Nl()),E}function Py(){for(;be!==null;)hg(be)}function Oy(e,i){var s=Pe;Pe|=2;var l=ug(),f=fg();Ye!==e||Ae!==i?(uc=null,cc=Ot()+500,fr(e,i)):or=Dt(e,i);t:do try{if(Oe!==0&&be!==null){i=be;var m=si;e:switch(Oe){case 1:Oe=0,si=null,hr(e,i,m,1);break;case 2:case 9:if(bm(m)){Oe=0,si=null,dg(i);break}i=function(){Oe!==2&&Oe!==9||Ye!==e||(Oe=7),Hi(e)},m.then(i,i);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:bm(m)?(Oe=0,si=null,dg(i)):(Oe=0,si=null,hr(e,i,m,7));break;case 5:var E=null;switch(be.tag){case 26:E=be.memoizedState;case 5:case 27:var w=be;if(!E||jg(E)){Oe=0,si=null;var F=w.sibling;if(F!==null)be=F;else{var et=w.return;et!==null?(be=et,hc(et)):be=null}break e}}Oe=0,si=null,hr(e,i,m,5);break;case 6:Oe=0,si=null,hr(e,i,m,6);break;case 8:eh(),an=6;break t;default:throw Error(a(462))}}zy();break}catch(mt){cg(e,mt)}while(!0);return Ji=hs=null,B.H=l,B.A=f,Pe=s,be!==null?0:(Ye=null,Ae=0,Nl(),an)}function zy(){for(;be!==null&&!ue();)hg(be)}function hg(e){var i=F0(e.alternate,e,ra);e.memoizedProps=e.pendingProps,i===null?hc(e):be=i}function dg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=N0(s,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=N0(s,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:_f(i);default:G0(s,i),i=be=pm(i,ra),i=F0(s,i,ra)}e.memoizedProps=e.pendingProps,i===null?hc(e):be=i}function hr(e,i,s,l){Ji=hs=null,_f(i),ir=null,Co=0;var f=i.return;try{if(Ty(e,f,i,s,Ae)){an=1,ic(e,di(s,e.current)),be=null;return}}catch(m){if(f!==null)throw be=f,m;an=1,ic(e,di(s,e.current)),be=null;return}i.flags&32768?(Le||l===1?e=!0:or||(Ae&536870912)!==0?e=!1:(Na=e=!0,(l===2||l===9||l===3||l===6)&&(l=vi.current,l!==null&&l.tag===13&&(l.flags|=16384))),pg(i,e)):hc(i)}function hc(e){var i=e;do{if((i.flags&32768)!==0){pg(i,Na);return}e=i.return;var s=wy(i.alternate,i,ra);if(s!==null){be=s;return}if(i=i.sibling,i!==null){be=i;return}be=i=e}while(i!==null);an===0&&(an=5)}function pg(e,i){do{var s=Ry(e.alternate,e);if(s!==null){s.flags&=32767,be=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){be=e;return}be=e=s}while(e!==null);an=6,be=null}function mg(e,i,s,l,f,m,E,w,F){e.cancelPendingCommit=null;do dc();while(Un!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=qu,Et(e,s,m,E,w,F),e===Ye&&(be=Ye=null,Ae=0),cr=i,za=e,ur=s,Jf=m,$f=f,sg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hy(Qe,function(){return yg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=tt.p,tt.p=2,E=Pe,Pe|=4;try{Cy(e,i,s)}finally{Pe=E,tt.p=f,B.T=l}}Un=1,gg(),vg(),_g()}}function gg(){if(Un===1){Un=0;var e=za,i=cr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=tt.p;tt.p=2;var f=Pe;Pe|=4;try{J0(i,e);var m=mh,E=am(e.containerInfo),w=m.focusedElem,F=m.selectionRange;if(E!==w&&w&&w.ownerDocument&&im(w.ownerDocument.documentElement,w)){if(F!==null&&Gu(w)){var et=F.start,mt=F.end;if(mt===void 0&&(mt=et),"selectionStart"in w)w.selectionStart=et,w.selectionEnd=Math.min(mt,w.value.length);else{var xt=w.ownerDocument||document,at=xt&&xt.defaultView||window;if(at.getSelection){var st=at.getSelection(),re=w.textContent.length,ne=Math.min(F.start,re),Ge=F.end===void 0?ne:Math.min(F.end,re);!st.extend&&ne>Ge&&(E=Ge,Ge=ne,ne=E);var K=nm(w,ne),X=nm(w,Ge);if(K&&X&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var $=xt.createRange();$.setStart(K.node,K.offset),st.removeAllRanges(),ne>Ge?(st.addRange($),st.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),st.addRange($))}}}}for(xt=[],st=w;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<xt.length;w++){var gt=xt[w];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Tc=!!ph,mh=ph=null}finally{Pe=f,tt.p=l,B.T=s}}e.current=i,Un=2}}function vg(){if(Un===2){Un=0;var e=za,i=cr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=tt.p;tt.p=2;var f=Pe;Pe|=4;try{j0(e,i.alternate,i)}finally{Pe=f,tt.p=l,B.T=s}}Un=3}}function _g(){if(Un===4||Un===3){Un=0,se();var e=za,i=cr,s=ur,l=sg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Un=5:(Un=0,cr=za=null,xg(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Oa=null),Ne(s),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=tt.p,tt.p=2,B.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var w=l[E];m(w.value,{componentStack:w.stack})}}finally{B.T=i,tt.p=f}}(ur&3)!==0&&dc(),Hi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===th?Io++:(Io=0,th=e):Io=0,Fo(0)}}function xg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,_o(i)))}function dc(e){return gg(),vg(),_g(),yg()}function yg(){if(Un!==5)return!1;var e=za,i=Jf;Jf=0;var s=Ne(ur),l=B.T,f=tt.p;try{tt.p=32>s?32:s,B.T=null,s=$f,$f=null;var m=za,E=ur;if(Un=0,cr=za=null,ur=0,(Pe&6)!==0)throw Error(a(331));var w=Pe;if(Pe|=4,ig(m.current),tg(m,m.current,E,s),Pe=w,Fo(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(pt,m)}catch{}return!0}finally{tt.p=f,B.T=l,xg(e,i)}}function Mg(e,i,s){i=di(s,i),i=Lf(e.stateNode,i,2),e=Aa(e,i,2),e!==null&&(Bt(e,2),Hi(e))}function Xe(e,i,s){if(e.tag===3)Mg(e,e,s);else for(;i!==null;){if(i.tag===3){Mg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Oa===null||!Oa.has(l))){e=di(s,e),s=T0(2),l=Aa(i,s,2),l!==null&&(A0(s,l,i,e),Bt(l,2),Hi(l));break}}i=i.return}}function ah(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Ly;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(jf=!0,f.add(s),e=By.bind(null,e,i,s),i.then(e,e))}function By(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ye===e&&(Ae&s)===s&&(an===4||an===3&&(Ae&62914560)===Ae&&300>Ot()-Qf?(Pe&2)===0&&fr(e,0):Zf|=s,lr===Ae&&(lr=0)),Hi(e)}function Sg(e,i){i===0&&(i=Tt()),e=Ys(e,i),e!==null&&(Bt(e,i),Hi(e))}function Iy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Sg(e,s)}function Fy(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Sg(e,s)}function Hy(e,i){return H(e,i)}var pc=null,dr=null,sh=!1,mc=!1,rh=!1,xs=0;function Hi(e){e!==dr&&e.next===null&&(dr===null?pc=dr=e:dr=dr.next=e),mc=!0,sh||(sh=!0,Vy())}function Fo(e,i){if(!rh&&mc){rh=!0;do for(var s=!1,l=pc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=f&~(E&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Ag(l,m))}else m=Ae,m=Xt(l,l===Ye?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Dt(l,m)||(s=!0,Ag(l,m));l=l.next}while(s);rh=!1}}function Gy(){Eg()}function Eg(){mc=sh=!1;var e=0;xs!==0&&(Ky()&&(e=xs),xs=0);for(var i=Ot(),s=null,l=pc;l!==null;){var f=l.next,m=bg(l,i);m===0?(l.next=null,s===null?pc=f:s.next=f,f===null&&(dr=s)):(s=l,(e!==0||(m&3)!==0)&&(mc=!0)),l=f}Fo(e)}function bg(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-zt(m),w=1<<E,F=f[E];F===-1?((w&s)===0||(w&l)!==0)&&(f[E]=he(w,i)):F<=i&&(e.expiredLanes|=w),m&=~w}if(i=Ye,s=Ae,s=Xt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Be(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Dt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Be(l),Ne(s)){case 2:case 8:s=fe;break;case 32:s=Qe;break;case 268435456:s=z;break;default:s=Qe}return l=Tg.bind(null,e),s=H(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Be(l),e.callbackPriority=2,e.callbackNode=null,2}function Tg(e,i){if(Un!==0&&Un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(dc()&&e.callbackNode!==s)return null;var l=Ae;return l=Xt(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(og(e,l,i),bg(e,Ot()),e.callbackNode!=null&&e.callbackNode===s?Tg.bind(null,e):null)}function Ag(e,i){if(dc())return null;og(e,i,!0)}function Vy(){Jy(function(){(Pe&6)!==0?H(kt,Gy):Eg()})}function oh(){return xs===0&&(xs=W()),xs}function wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Al(""+e)}function Rg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function ky(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=wg((f[tn]||null).action),E=l.submitter;E&&(i=(i=E[tn]||null)?wg(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var w=new Dl("action","action",null,l,f);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xs!==0){var F=E?Rg(f,E):new FormData(f);wf(s,{pending:!0,data:F,method:f.method,action:m},null,F)}}else typeof m=="function"&&(w.preventDefault(),F=E?Rg(f,E):new FormData(f),wf(s,{pending:!0,data:F,method:f.method,action:m},m,F))},currentTarget:f}]})}}for(var lh=0;lh<Wu.length;lh++){var ch=Wu[lh],Xy=ch.toLowerCase(),Wy=ch[0].toUpperCase()+ch.slice(1);Ei(Xy,"on"+Wy)}Ei(om,"onAnimationEnd"),Ei(lm,"onAnimationIteration"),Ei(cm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(ly,"onTransitionRun"),Ei(cy,"onTransitionStart"),Ei(uy,"onTransitionCancel"),Ei(um,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Cg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var w=l[E],F=w.instance,et=w.currentTarget;if(w=w.listener,F!==m&&f.isPropagationStopped())break t;m=w,f.currentTarget=et;try{m(f)}catch(mt){nc(mt)}f.currentTarget=null,m=F}else for(E=0;E<l.length;E++){if(w=l[E],F=w.instance,et=w.currentTarget,w=w.listener,F!==m&&f.isPropagationStopped())break t;m=w,f.currentTarget=et;try{m(f)}catch(mt){nc(mt)}f.currentTarget=null,m=F}}}}function Te(e,i){var s=i[Bs];s===void 0&&(s=i[Bs]=new Set);var l=e+"__bubble";s.has(l)||(Dg(i,e,2,!1),s.add(l))}function uh(e,i,s){var l=0;i&&(l|=4),Dg(s,e,l,i)}var gc="_reactListening"+Math.random().toString(36).slice(2);function fh(e){if(!e[gc]){e[gc]=!0,bl.forEach(function(s){s!=="selectionchange"&&(qy.has(s)||uh(s,!1,e),uh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[gc]||(i[gc]=!0,uh("selectionchange",!1,i))}}function Dg(e,i,s,l){switch(tv(i)){case 2:var f=xM;break;case 8:f=yM;break;default:f=Th}s=f.bind(null,i,s,e),f=void 0,!Lu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function hh(e,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var w=l.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=l.return;E!==null;){var F=E.tag;if((F===3||F===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Yi(w),E===null)return;if(F=E.tag,F===5||F===6||F===26||F===27){l=m=E;continue t}w=w.parentNode}}l=l.return}Bp(function(){var et=m,mt=Du(s),xt=[];t:{var at=fm.get(e);if(at!==void 0){var st=Dl,re=e;switch(e){case"keypress":if(Rl(s)===0)break t;case"keydown":case"keyup":st=Hx;break;case"focusin":re="focus",st=zu;break;case"focusout":re="blur",st=zu;break;case"beforeblur":case"afterblur":st=zu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=kx;break;case om:case lm:case cm:st=Ux;break;case um:st=Wx;break;case"scroll":case"scrollend":st=Ax;break;case"wheel":st=Yx;break;case"copy":case"cut":case"paste":st=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Vp;break;case"toggle":case"beforetoggle":st=Zx}var ne=(i&4)!==0,Ge=!ne&&(e==="scroll"||e==="scrollend"),K=ne?at!==null?at+"Capture":null:at;ne=[];for(var X=et,$;X!==null;){var gt=X;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||K===null||(gt=ao(X,K),gt!=null&&ne.push(Go(X,gt,$))),Ge)break;X=X.return}0<ne.length&&(at=new st(at,re,null,s,mt),xt.push({event:at,listeners:ne}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&s!==Cu&&(re=s.relatedTarget||s.fromElement)&&(Yi(re)||re[Pi]))break t;if((st||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(re=s.relatedTarget||s.toElement,st=et,re=re?Yi(re):null,re!==null&&(Ge=c(re),ne=re.tag,re!==Ge||ne!==5&&ne!==27&&ne!==6)&&(re=null)):(st=null,re=et),st!==re)){if(ne=Hp,gt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Vp,gt="onPointerLeave",K="onPointerEnter",X="pointer"),Ge=st==null?at:is(st),$=re==null?at:is(re),at=new ne(gt,X+"leave",st,s,mt),at.target=Ge,at.relatedTarget=$,gt=null,Yi(mt)===et&&(ne=new ne(K,X+"enter",re,s,mt),ne.target=$,ne.relatedTarget=Ge,gt=ne),Ge=gt,st&&re)e:{for(ne=st,K=re,X=0,$=ne;$;$=pr($))X++;for($=0,gt=K;gt;gt=pr(gt))$++;for(;0<X-$;)ne=pr(ne),X--;for(;0<$-X;)K=pr(K),$--;for(;X--;){if(ne===K||K!==null&&ne===K.alternate)break e;ne=pr(ne),K=pr(K)}ne=null}else ne=null;st!==null&&Ug(xt,at,st,ne,!1),re!==null&&Ge!==null&&Ug(xt,Ge,re,ne,!0)}}t:{if(at=et?is(et):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=Kp;else if(jp(at))if(Qp)Ht=sy;else{Ht=iy;var Me=ny}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Ru(et.elementType)&&(Ht=Kp):Ht=ay;if(Ht&&(Ht=Ht(e,et))){Zp(xt,Ht,s,mt);break t}Me&&Me(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Pn(at,"number",at.value)}switch(Me=et?is(et):window,e){case"focusin":(jp(Me)||Me.contentEditable==="true")&&(Xs=Me,Vu=et,ho=null);break;case"focusout":ho=Vu=Xs=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,sm(xt,s,mt);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":sm(xt,s,mt)}var Qt;if(Iu)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ks?qp(e,s)&&(ae="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ae="onCompositionStart");ae&&(kp&&s.locale!=="ko"&&(ks||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ks&&(Qt=Ip()):(Sa=mt,Nu="value"in Sa?Sa.value:Sa.textContent,ks=!0)),Me=vc(et,ae),0<Me.length&&(ae=new Gp(ae,e,null,s,mt),xt.push({event:ae,listeners:Me}),Qt?ae.data=Qt:(Qt=Yp(s),Qt!==null&&(ae.data=Qt)))),(Qt=Qx?Jx(e,s):$x(e,s))&&(ae=vc(et,"onBeforeInput"),0<ae.length&&(Me=new Gp("onBeforeInput","beforeinput",null,s,mt),xt.push({event:Me,listeners:ae}),Me.data=Qt)),ky(xt,e,et,s,mt)}Cg(xt,i)})}function Go(e,i,s){return{instance:e,listener:i,currentTarget:s}}function vc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ao(e,s),f!=null&&l.unshift(Go(e,f,m)),f=ao(e,i),f!=null&&l.push(Go(e,f,m))),e.tag===3)return l;e=e.return}return[]}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ug(e,i,s,l,f){for(var m=i._reactName,E=[];s!==null&&s!==l;){var w=s,F=w.alternate,et=w.stateNode;if(w=w.tag,F!==null&&F===l)break;w!==5&&w!==26&&w!==27||et===null||(F=et,f?(et=ao(s,m),et!=null&&E.unshift(Go(s,et,F))):f||(et=ao(s,m),et!=null&&E.push(Go(s,et,F)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Yy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function Lg(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(jy,"")}function Ng(e,i){return i=Lg(i),Lg(e)===i}function _c(){}function He(e,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||qn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&qn(e,""+l);break;case"className":Ft(e,"class",l);break;case"tabIndex":Ft(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,s,l);break;case"style":Op(e,l,m);break;case"data":if(i!=="object"){Ft(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Al(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&He(e,i,"name",f.name,f,null),He(e,i,"formEncType",f.formEncType,f,null),He(e,i,"formMethod",f.formMethod,f,null),He(e,i,"formTarget",f.formTarget,f,null)):(He(e,i,"encType",f.encType,f,null),He(e,i,"method",f.method,f,null),He(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Al(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=_c);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Al(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Ut(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ut(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=bx.get(s)||s,Ut(e,s,l))}}function dh(e,i,s,l,f,m){switch(s){case"style":Op(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?qn(e,l):(typeof l=="number"||typeof l=="bigint")&&qn(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=e[tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ut(e,s,l)}}}function Ln(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,m,E,s,null)}}f&&He(e,i,"srcSet",s.srcSet,s,null),l&&He(e,i,"src",s.src,s,null);return;case"input":Te("invalid",e);var w=m=E=f=null,F=null,et=null;for(l in s)if(s.hasOwnProperty(l)){var mt=s[l];if(mt!=null)switch(l){case"name":f=mt;break;case"type":E=mt;break;case"checked":F=mt;break;case"defaultChecked":et=mt;break;case"value":m=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:He(e,i,l,mt,s,null)}}Vn(e,m,w,F,et,E,f,!1),Ee(e);return;case"select":Te("invalid",e),l=E=m=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":l=w;default:He(e,i,f,w,s,null)}i=m,s=E,e.multiple=!!l,i!=null?en(e,!!l,i,!1):s!=null&&en(e,!!l,s,!0);return;case"textarea":Te("invalid",e),m=f=l=null;for(E in s)if(s.hasOwnProperty(E)&&(w=s[E],w!=null))switch(E){case"value":l=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:He(e,i,E,w,s,null)}Hs(e,l,f,m),Ee(e);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(l=s[F],l!=null))switch(F){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(e,i,F,l,s,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<Ho.length;l++)Te(Ho[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(l=s[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,et,l,s,null)}return;default:if(Ru(i)){for(mt in s)s.hasOwnProperty(mt)&&(l=s[mt],l!==void 0&&dh(e,i,mt,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&He(e,i,w,l,s,null))}function Zy(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,w=null,F=null,et=null,mt=null;for(st in s){var xt=s[st];if(s.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":F=xt;default:l.hasOwnProperty(st)||He(e,i,st,null,l,xt)}}for(var at in l){var st=l[at];if(xt=s[at],l.hasOwnProperty(at)&&(st!=null||xt!=null))switch(at){case"type":m=st;break;case"name":f=st;break;case"checked":et=st;break;case"defaultChecked":mt=st;break;case"value":E=st;break;case"defaultValue":w=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==xt&&He(e,i,at,st,l,xt)}}ke(e,E,w,F,et,mt,m,f);return;case"select":st=E=w=at=null;for(m in s)if(F=s[m],s.hasOwnProperty(m)&&F!=null)switch(m){case"value":break;case"multiple":st=F;default:l.hasOwnProperty(m)||He(e,i,m,null,l,F)}for(f in l)if(m=l[f],F=s[f],l.hasOwnProperty(f)&&(m!=null||F!=null))switch(f){case"value":at=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==F&&He(e,i,f,m,l,F)}i=w,s=E,l=st,at!=null?en(e,!!s,at,!1):!!l!=!!s&&(i!=null?en(e,!!s,i,!0):en(e,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:He(e,i,w,null,l,f)}for(E in l)if(f=l[E],m=s[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":at=f;break;case"defaultValue":st=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&He(e,i,E,f,l,m)}Cn(e,at,st);return;case"option":for(var re in s)if(at=s[re],s.hasOwnProperty(re)&&at!=null&&!l.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:He(e,i,re,null,l,at)}for(F in l)if(at=l[F],st=s[F],l.hasOwnProperty(F)&&at!==st&&(at!=null||st!=null))switch(F){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:He(e,i,F,at,l,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in s)at=s[ne],s.hasOwnProperty(ne)&&at!=null&&!l.hasOwnProperty(ne)&&He(e,i,ne,null,l,at);for(et in l)if(at=l[et],st=s[et],l.hasOwnProperty(et)&&at!==st&&(at!=null||st!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:He(e,i,et,at,l,st)}return;default:if(Ru(i)){for(var Ge in s)at=s[Ge],s.hasOwnProperty(Ge)&&at!==void 0&&!l.hasOwnProperty(Ge)&&dh(e,i,Ge,void 0,l,at);for(mt in l)at=l[mt],st=s[mt],!l.hasOwnProperty(mt)||at===st||at===void 0&&st===void 0||dh(e,i,mt,at,l,st);return}}for(var K in s)at=s[K],s.hasOwnProperty(K)&&at!=null&&!l.hasOwnProperty(K)&&He(e,i,K,null,l,at);for(xt in l)at=l[xt],st=s[xt],!l.hasOwnProperty(xt)||at===st||at==null&&st==null||He(e,i,xt,at,l,st)}var ph=null,mh=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function Pg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function gh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vh=null;function Ky(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(e){return Bg.resolve(null).then(e).catch($y)}:zg;function $y(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function Ig(e,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&Vo(E.documentElement),s&2&&Vo(E.body),s&4)for(s=E.head,Vo(s),E=s.firstChild;E;){var w=E.nextSibling,F=E.nodeName;E[Oi]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=w}}if(f===0){e.removeChild(m),Ko(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Ko(i)}function _h(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":_h(s),Fs(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function tM(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Oi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function eM(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ti(e.nextSibling),e===null))return null;return e}function xh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function nM(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ti(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var yh=null;function Fg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function Hg(e,i,s){switch(i=xc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Vo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Fs(e)}var xi=new Map,Gg=new Set;function yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=tt.d;tt.d={f:iM,r:aM,D:sM,C:rM,L:oM,m:lM,X:uM,S:cM,M:fM};function iM(){var e=oa.f(),i=fc();return e||i}function aM(e){var i=ya(e);i!==null&&i.tag===5&&i.type==="form"?o0(i):oa.r(e)}var mr=typeof document>"u"?null:document;function Vg(e,i,s){var l=mr;if(l&&typeof i=="string"&&i){var f=En(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Gg.has(f)||(Gg.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Ln(i,"link",e),fn(i),l.head.appendChild(i)))}}function sM(e){oa.D(e),Vg("dns-prefetch",e,null)}function rM(e,i){oa.C(e,i),Vg("preconnect",e,i)}function oM(e,i,s){oa.L(e,i,s);var l=mr;if(l&&e&&i){var f='link[rel="preload"][as="'+En(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+En(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+En(s.imageSizes)+'"]')):f+='[href="'+En(e)+'"]';var m=f;switch(i){case"style":m=gr(e);break;case"script":m=vr(e)}xi.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),xi.set(m,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(ko(m))||i==="script"&&l.querySelector(Xo(m))||(i=l.createElement("link"),Ln(i,"link",e),fn(i),l.head.appendChild(i)))}}function lM(e,i){oa.m(e,i);var s=mr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+En(l)+'"][href="'+En(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=vr(e)}if(!xi.has(m)&&(e=g({rel:"modulepreload",href:e},i),xi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xo(m)))return}l=s.createElement("link"),Ln(l,"link",e),fn(l),s.head.appendChild(l)}}}function cM(e,i,s){oa.S(e,i,s);var l=mr;if(l&&e){var f=Ma(l).hoistableStyles,m=gr(e);i=i||"default";var E=f.get(m);if(!E){var w={loading:0,preload:null};if(E=l.querySelector(ko(m)))w.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=xi.get(m))&&Mh(e,s);var F=E=l.createElement("link");fn(F),Ln(F,"link",e),F._p=new Promise(function(et,mt){F.onload=et,F.onerror=mt}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Mc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(m,E)}}}function uM(e,i){oa.X(e,i);var s=mr;if(s&&e){var l=Ma(s).hoistableScripts,f=vr(e),m=l.get(f);m||(m=s.querySelector(Xo(f)),m||(e=g({src:e,async:!0},i),(i=xi.get(f))&&Sh(e,i),m=s.createElement("script"),fn(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function fM(e,i){oa.M(e,i);var s=mr;if(s&&e){var l=Ma(s).hoistableScripts,f=vr(e),m=l.get(f);m||(m=s.querySelector(Xo(f)),m||(e=g({src:e,async:!0,type:"module"},i),(i=xi.get(f))&&Sh(e,i),m=s.createElement("script"),fn(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function kg(e,i,s,l){var f=(f=it.current)?yc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=gr(s.href),s=Ma(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=gr(s.href);var m=Ma(f).hoistableStyles,E=m.get(e);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=f.querySelector(ko(e)))&&!m._p&&(E.instance=m,E.state.loading=5),xi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},xi.set(e,s),m||hM(f,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=vr(s),s=Ma(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function gr(e){return'href="'+En(e)+'"'}function ko(e){return'link[rel="stylesheet"]['+e+"]"}function Xg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function hM(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",s),fn(i),e.head.appendChild(i))}function vr(e){return'[src="'+En(e)+'"]'}function Xo(e){return"script[async]"+e}function Wg(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+En(s.href)+'"]');if(l)return i.instance=l,fn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),fn(l),Ln(l,"style",f),Mc(l,s.precedence,e),i.instance=l;case"stylesheet":f=gr(s.href);var m=e.querySelector(ko(f));if(m)return i.state.loading|=4,i.instance=m,fn(m),m;l=Xg(s),(f=xi.get(f))&&Mh(l,f),m=(e.ownerDocument||e).createElement("link"),fn(m);var E=m;return E._p=new Promise(function(w,F){E.onload=w,E.onerror=F}),Ln(m,"link",l),i.state.loading|=4,Mc(m,s.precedence,e),i.instance=m;case"script":return m=vr(s.src),(f=e.querySelector(Xo(m)))?(i.instance=f,fn(f),f):(l=s,(f=xi.get(m))&&(l=g({},s),Sh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),fn(f),Ln(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Mc(l,s.precedence,e));return i.instance}function Mc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var w=l[E];if(w.dataset.precedence===i)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Mh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Sh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Sc=null;function qg(e,i,s){if(Sc===null){var l=new Map,f=Sc=new Map;f.set(s,l)}else f=Sc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[Oi]||m[gn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var w=l.get(E);w?w.push(m):l.set(E,[m])}}return l}function Yg(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function dM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wo=null;function pM(){}function mM(e,i,s){if(Wo===null)throw Error(a(475));var l=Wo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=gr(s.href),m=e.querySelector(ko(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Ec.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=m,fn(m);return}m=e.ownerDocument||e,s=Xg(s),(f=xi.get(f))&&Mh(s,f),m=m.createElement("link"),fn(m);var E=m;E._p=new Promise(function(w,F){E.onload=w,E.onerror=F}),Ln(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ec.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function gM(){if(Wo===null)throw Error(a(475));var e=Wo;return e.stylesheets&&e.count===0&&Eh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Eh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Ec(){if(this.count--,this.count===0){if(this.stylesheets)Eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bc=null;function Eh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bc=new Map,i.forEach(vM,e),bc=null,Ec.call(e))}function vM(e,i){if(!(i.state.loading&4)){var s=bc.get(e);if(s)var l=s.get(null);else{s=new Map,bc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,f),s.set(E,f),this.count++,l=Ec.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var qo={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function _M(e,i,s,l,f,m,E,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Zg(e,i,s,l,f,m,E,w,F,et,mt,xt){return e=new _M(e,i,s,E,w,F,et,xt),i=1,m===!0&&(i|=24),m=ni(3,null,null,i),e.current=m,m.stateNode=e,i=af(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},lf(m),e}function Kg(e){return e?(e=js,e):js}function Qg(e,i,s,l,f,m){f=Kg(f),l.context===null?l.context=f:l.pendingContext=f,l=Ta(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Aa(e,l,i),s!==null&&(oi(s,e,i),So(s,e,i))}function Jg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function bh(e,i){Jg(e,i),(e=e.alternate)&&Jg(e,i)}function $g(e){if(e.tag===13){var i=Ys(e,67108864);i!==null&&oi(i,e,67108864),bh(e,67108864)}}var Tc=!0;function xM(e,i,s,l){var f=B.T;B.T=null;var m=tt.p;try{tt.p=2,Th(e,i,s,l)}finally{tt.p=m,B.T=f}}function yM(e,i,s,l){var f=B.T;B.T=null;var m=tt.p;try{tt.p=8,Th(e,i,s,l)}finally{tt.p=m,B.T=f}}function Th(e,i,s,l){if(Tc){var f=Ah(l);if(f===null)hh(e,i,l,Ac,s),ev(e,l);else if(SM(f,e,i,s,l))l.stopPropagation();else if(ev(e,l),i&4&&-1<MM.indexOf(e)){for(;f!==null;){var m=ya(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Jt(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var F=1<<31-zt(E);w.entanglements[1]|=F,E&=~F}Hi(m),(Pe&6)===0&&(cc=Ot()+500,Fo(0))}}break;case 13:w=Ys(m,2),w!==null&&oi(w,m,2),fc(),bh(m,2)}if(m=Ah(l),m===null&&hh(e,i,l,Ac,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else hh(e,i,l,null,s)}}function Ah(e){return e=Du(e),wh(e)}var Ac=null;function wh(e){if(Ac=null,e=Yi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ac=e,null}function tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case kt:return 2;case fe:return 8;case Qe:case Je:return 32;case z:return 268435456;default:return 32}default:return 32}}var Rh=!1,Fa=null,Ha=null,Ga=null,Yo=new Map,jo=new Map,Va=[],MM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ev(e,i){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(i.pointerId)}}function Zo(e,i,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ya(i),i!==null&&$g(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function SM(e,i,s,l,f){switch(i){case"focusin":return Fa=Zo(Fa,e,i,s,l,f),!0;case"dragenter":return Ha=Zo(Ha,e,i,s,l,f),!0;case"mouseover":return Ga=Zo(Ga,e,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Yo.set(m,Zo(Yo.get(m)||null,e,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,jo.set(m,Zo(jo.get(m)||null,e,i,s,l,f)),!0}return!1}function nv(e){var i=Yi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Mi(e.priority,function(){if(s.tag===13){var l=ri();l=oe(l);var f=Ys(s,l);f!==null&&oi(f,s,l),bh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Ah(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Cu=l,s.target.dispatchEvent(l),Cu=null}else return i=ya(s),i!==null&&$g(i),e.blockedOn=s,!1;i.shift()}return!0}function iv(e,i,s){wc(e)&&s.delete(i)}function EM(){Rh=!1,Fa!==null&&wc(Fa)&&(Fa=null),Ha!==null&&wc(Ha)&&(Ha=null),Ga!==null&&wc(Ga)&&(Ga=null),Yo.forEach(iv),jo.forEach(iv)}function Rc(e,i){e.blockedOn===i&&(e.blockedOn=null,Rh||(Rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,EM)))}var Cc=null;function av(e){Cc!==e&&(Cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(wh(l||s)===null)continue;break}var m=ya(s);m!==null&&(e.splice(i,3),i-=3,wf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Ko(e){function i(F){return Rc(F,e)}Fa!==null&&Rc(Fa,e),Ha!==null&&Rc(Ha,e),Ga!==null&&Rc(Ga,e),Yo.forEach(i),jo.forEach(i);for(var s=0;s<Va.length;s++){var l=Va[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Va.length&&(s=Va[0],s.blockedOn===null);)nv(s),s.blockedOn===null&&Va.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],E=f[tn]||null;if(typeof m=="function")E||av(s);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[tn]||null)w=E.formAction;else if(wh(f)!==null)continue}else w=E.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),av(s)}}}function Ch(e){this._internalRoot=e}Dc.prototype.render=Ch.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ri();Qg(s,l,e,i,null,null)},Dc.prototype.unmount=Ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Qg(e.current,2,null,e,null,null),fc(),i[Pi]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=we();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Va.length&&i!==0&&i<Va[s].priority;s++);Va.splice(s,0,e),s===0&&nv(e)}};var sv=t.version;if(sv!=="19.1.1")throw Error(a(527,sv,"19.1.1"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var bM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{pt=Uc.inject(bM),_t=Uc}catch{}}return Jo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=M0,m=S0,E=E0,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=Zg(e,1,!1,null,null,s,l,f,m,E,w,null),e[Pi]=i.current,fh(e),new Ch(i)},Jo.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",m=M0,E=S0,w=E0,F=null,et=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(F=s.unstable_transitionCallbacks),s.formState!==void 0&&(et=s.formState)),i=Zg(e,1,!0,i,s??null,l,f,m,E,w,F,et),i.context=Kg(null),s=i.current,l=ri(),l=oe(l),f=Ta(l),f.callback=null,Aa(s,f,l),s=l,i.current.lanes=s,Bt(i,s),Hi(i),e[Pi]=i.current,fh(e),new Dc(i)},Jo.version="19.1.1",Jo}var mv;function PM(){if(mv)return Lh.exports;mv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Lh.exports=NM(),Lh.exports}var OM=PM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fp="180",zM=0,gv=1,BM=2,hp=1,IM=2,da=3,ts=0,ti=1,Fn=2,ga=0,Ir=1,Gr=2,vv=3,_v=4,FM=5,Ds=100,HM=101,GM=102,VM=103,kM=104,XM=200,WM=201,qM=202,YM=203,xd=204,yd=205,jM=206,ZM=207,KM=208,QM=209,JM=210,$M=211,tS=212,eS=213,nS=214,Md=0,Sd=1,Ed=2,Vr=3,bd=4,Td=5,Ad=6,wd=7,N_=0,iS=1,aS=2,$a=0,P_=1,O_=2,z_=3,Eu=4,B_=5,I_=6,F_=7,H_=300,kr=301,Xr=302,Rd=303,Cd=304,bu=306,vu=1e3,Ls=1001,Dd=1002,fi=1003,sS=1004,Lc=1005,Di=1006,zh=1007,Qa=1008,qi=1009,G_=1010,V_=1011,ml=1012,dp=1013,Os=1014,ki=1015,va=1016,pp=1017,mp=1018,gl=1020,k_=35902,X_=35899,W_=1021,q_=1022,Ui=1023,vl=1026,_l=1027,gp=1028,vp=1029,Y_=1030,_p=1031,xp=1033,cu=33776,uu=33777,fu=33778,hu=33779,Ud=35840,Ld=35841,Nd=35842,Pd=35843,Od=36196,zd=37492,Bd=37496,Id=37808,Fd=37809,Hd=37810,Gd=37811,Vd=37812,kd=37813,Xd=37814,Wd=37815,qd=37816,Yd=37817,jd=37818,Zd=37819,Kd=37820,Qd=37821,Jd=36492,$d=36494,tp=36495,ep=36283,np=36284,ip=36285,ap=36286,rS=3200,oS=3201,j_=0,lS=1,pa="",Jn="srgb",Wr="srgb-linear",_u="linear",ze="srgb",_r=7680,xv=519,cS=512,uS=513,fS=514,Z_=515,hS=516,dS=517,pS=518,mS=519,yv=35044,Mv="300 es",Xi=2e3,xu=2001;class Kr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sv=1234567;const ul=Math.PI/180,qr=180/Math.PI;function Qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]).toLowerCase()}function Se(r,t,n){return Math.max(t,Math.min(n,r))}function yp(r,t){return(r%t+t)%t}function gS(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function vS(r,t,n){return r!==t?(n-r)/(t-r):0}function fl(r,t,n){return(1-n)*r+n*t}function _S(r,t,n,a){return fl(r,t,1-Math.exp(-n*a))}function xS(r,t=1){return t-Math.abs(yp(r,t*2)-t)}function yS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function MS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function SS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ES(r,t){return r+Math.random()*(t-r)}function bS(r){return r*(.5-Math.random())}function TS(r){r!==void 0&&(Sv=r);let t=Sv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AS(r){return r*ul}function wS(r){return r*qr}function RS(r){return(r&r-1)===0&&r!==0}function CS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function DS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function US(r,t,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((t+a)/2),g=u((t+a)/2),v=c((t-a)/2),_=u((t-a)/2),x=c((a-t)/2),S=u((a-t)/2);switch(o){case"XYX":r.set(h*g,p*v,p*_,h*d);break;case"YZY":r.set(p*_,h*g,p*v,h*d);break;case"ZXZ":r.set(p*v,p*_,h*g,h*d);break;case"XZX":r.set(h*g,p*S,p*x,h*d);break;case"YXY":r.set(p*x,h*g,p*S,h*d);break;case"ZYZ":r.set(p*S,p*x,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Or(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ma={DEG2RAD:ul,RAD2DEG:qr,generateUUID:Qr,clamp:Se,euclideanModulo:yp,mapLinear:gS,inverseLerp:vS,lerp:fl,damp:_S,pingpong:xS,smoothstep:yS,smootherstep:MS,randInt:SS,randFloat:ES,randFloatSpread:bS,seededRandom:TS,degToRad:AS,radToDeg:wS,isPowerOfTwo:RS,ceilPowerOfTwo:CS,floorPowerOfTwo:DS,setQuaternionFromProperEuler:US,normalize:Xn,denormalize:Or};class It{constructor(t=0,n=0){It.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jr{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let p=a[o+0],d=a[o+1],g=a[o+2],v=a[o+3];const _=c[u+0],x=c[u+1],S=c[u+2],b=c[u+3];if(h===0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=S,t[n+3]=b;return}if(v!==b||p!==_||d!==x||g!==S){let M=1-h;const y=p*_+d*x+g*S+v*b,L=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const P=Math.sqrt(U),O=Math.atan2(P,y*L);M=Math.sin(M*O)/P,h=Math.sin(h*O)/P}const A=h*L;if(p=p*M+_*A,d=d*M+x*A,g=g*M+S*A,v=v*M+b*A,M===1-h){const P=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=P,d*=P,g*=P,v*=P}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],p=a[o+1],d=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],S=c[u+3];return t[n]=h*S+g*v+p*x-d*_,t[n+1]=p*S+g*_+d*v-h*x,t[n+2]=d*S+g*x+h*_-p*v,t[n+3]=g*S-h*v-p*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(o/2),v=h(c/2),_=p(a/2),x=p(o/2),S=p(c/2);switch(u){case"XYZ":this._x=_*g*v+d*x*S,this._y=d*x*v-_*g*S,this._z=d*g*S+_*x*v,this._w=d*g*v-_*x*S;break;case"YXZ":this._x=_*g*v+d*x*S,this._y=d*x*v-_*g*S,this._z=d*g*S-_*x*v,this._w=d*g*v+_*x*S;break;case"ZXY":this._x=_*g*v-d*x*S,this._y=d*x*v+_*g*S,this._z=d*g*S+_*x*v,this._w=d*g*v-_*x*S;break;case"ZYX":this._x=_*g*v-d*x*S,this._y=d*x*v+_*g*S,this._z=d*g*S-_*x*v,this._w=d*g*v+_*x*S;break;case"YZX":this._x=_*g*v+d*x*S,this._y=d*x*v+_*g*S,this._z=d*g*S-_*x*v,this._w=d*g*v-_*x*S;break;case"XZY":this._x=_*g*v-d*x*S,this._y=d*x*v-_*g*S,this._z=d*g*S+_*x*v,this._w=d*g*v+_*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+o*d-c*p,this._y=o*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-o*h,this._w=u*g-a*h-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,n=0,a=0){k.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ev.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ev.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,p=t.w,d=2*(u*o-h*a),g=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+p*d+u*v-h*g,this.y=a+p*g+h*d-c*v,this.z=o+p*v+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Bh.copy(this).projectOnVector(t),this.sub(Bh)}reflect(t){return this.sub(Bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new k,Ev=new Jr;class pe{constructor(t,n,a,o,c,u,h,p,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,d)}set(t,n,a,o,c,u,h,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],v=a[7],_=a[2],x=a[5],S=a[8],b=o[0],M=o[3],y=o[6],L=o[1],U=o[4],A=o[7],P=o[2],O=o[5],I=o[8];return c[0]=u*b+h*L+p*P,c[3]=u*M+h*U+p*O,c[6]=u*y+h*A+p*I,c[1]=d*b+g*L+v*P,c[4]=d*M+g*U+v*O,c[7]=d*y+g*A+v*I,c[2]=_*b+x*L+S*P,c[5]=_*M+x*U+S*O,c[8]=_*y+x*A+S*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-a*c*g+a*h*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=g*u-h*d,_=h*p-g*c,x=d*c-u*p,S=n*v+a*_+o*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=v*b,t[1]=(o*d-g*a)*b,t[2]=(h*a-o*u)*b,t[3]=_*b,t[4]=(g*n-o*p)*b,t[5]=(o*c-h*n)*b,t[6]=x*b,t[7]=(a*p-d*n)*b,t[8]=(u*n-a*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+t,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ih.makeScale(t,n)),this}rotate(t){return this.premultiply(Ih.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ih.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ih=new pe;function K_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function LS(){const r=xl("canvas");return r.style.display="block",r}const bv={};function yl(r){r in bv||(bv[r]=!0,console.warn(r))}function NS(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const Tv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PS(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ze&&(o.r=_a(o.r),o.g=_a(o.g),o.b=_a(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ze&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===pa?_u:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return yl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return yl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:a,transfer:_u,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),r}const Ce=PS();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class OS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{xr===void 0&&(xr=xl("canvas")),xr.width=t.width,xr.height=t.height;const o=xr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=xr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=xl("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=_a(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(_a(n[a]/255)*255):n[a]=_a(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zS=0;class Mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Fh(o[u].image)):c.push(Fh(o[u]))}else c=Fh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Fh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?OS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BS=0;const Hh=new k;class Hn extends Kr{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=Ls,o=Ls,c=Di,u=Qa,h=Ui,p=qi,d=Hn.DEFAULT_ANISOTROPY,g=pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Qr(),this.name="",this.source=new Mp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vu:t.x=t.x-Math.floor(t.x);break;case Ls:t.x=t.x<0?0:1;break;case Dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vu:t.y=t.y-Math.floor(t.y);break;case Ls:t.y=t.y<0?0:1;break;case Dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=H_;Hn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,n=0,a=0,o=1){Ve.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],x=p[5],S=p[9],b=p[2],M=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(S-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(S+M)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,A=(x+1)/2,P=(y+1)/2,O=(g+_)/4,I=(v+b)/4,G=(S+M)/4;return U>A&&U>P?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=O/a,c=I/a):A>P?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=O/o,c=G/o):P<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),a=I/c,o=G/c),this.set(a,o,c,n),this}let L=Math.sqrt((M-S)*(M-S)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(M-S)/L,this.y=(v-b)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IS extends Kr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ve(0,0,t,n),this.scissorTest=!1,this.viewport=new Ve(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new Hn(o);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Mp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends IS{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Q_ extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(t=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ai):Ai.fromBufferAttribute(c,u),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Nc.copy(a.boundingBox)),Nc.applyMatrix4(t.matrixWorld),this.union(Nc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),Pc.subVectors(this.max,$o),yr.subVectors(t.a,$o),Mr.subVectors(t.b,$o),Sr.subVectors(t.c,$o),Xa.subVectors(Mr,yr),Wa.subVectors(Sr,Mr),Ms.subVectors(yr,Sr);let n=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-Ms.z,Ms.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,Ms.z,0,-Ms.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-Ms.y,Ms.x,0];return!Gh(n,yr,Mr,Sr,Pc)||(n=[1,0,0,0,1,0,0,0,1],!Gh(n,yr,Mr,Sr,Pc))?!1:(Oc.crossVectors(Xa,Wa),n=[Oc.x,Oc.y,Oc.z],Gh(n,yr,Mr,Sr,Pc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new k,new k,new k,new k,new k,new k,new k,new k],Ai=new k,Nc=new zs,yr=new k,Mr=new k,Sr=new k,Xa=new k,Wa=new k,Ms=new k,$o=new k,Pc=new k,Oc=new k,Ss=new k;function Gh(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Ss.fromArray(r,c);const h=o.x*Math.abs(Ss.x)+o.y*Math.abs(Ss.y)+o.z*Math.abs(Ss.z),p=t.dot(Ss),d=n.dot(Ss),g=a.dot(Ss);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const HS=new zs,tl=new k,Vh=new k;class $r{constructor(t=new k,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):HS.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(tl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(Vh)),this.expandByPoint(tl.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new k,kh=new k,zc=new k,qa=new k,Xh=new k,Bc=new k,Wh=new k;class J_{constructor(t=new k,n=new k(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ca.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,n),ca.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){kh.copy(t).add(n).multiplyScalar(.5),zc.copy(n).sub(t).normalize(),qa.copy(this.origin).sub(kh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(zc),h=qa.dot(this.direction),p=-qa.dot(zc),d=qa.lengthSq(),g=Math.abs(1-u*u);let v,_,x,S;if(g>0)if(v=u*p-h,_=u*h-p,S=c*g,v>=0)if(_>=-S)if(_<=S){const b=1/g;v*=b,_*=b,x=v*(v+u*_+2*h)+_*(u*v+_+2*p)+d}else _=c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*p)+d;else _=-c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*p)+d;else _<=-S?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-p),c),x=-v*v+_*(_+2*p)+d):_<=S?(v=0,_=Math.min(Math.max(-c,-p),c),x=_*(_+2*p)+d):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-p),c),x=-v*v+_*(_+2*p)+d);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(kh).addScaledVector(zc,_),x}intersectSphere(t,n){ca.subVectors(t.center,this.origin);const a=ca.dot(this.direction),o=ca.dot(ca)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(a=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,n,a,o,c){Xh.subVectors(n,t),Bc.subVectors(a,t),Wh.crossVectors(Xh,Bc);let u=this.direction.dot(Wh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;qa.subVectors(this.origin,t);const p=h*this.direction.dot(Bc.crossVectors(qa,Bc));if(p<0)return null;const d=h*this.direction.dot(Xh.cross(qa));if(d<0||p+d>u)return null;const g=-h*qa.dot(Wh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,n,a,o,c,u,h,p,d,g,v,_,x,S,b,M){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,d,g,v,_,x,S,b,M)}set(t,n,a,o,c,u,h,p,d,g,v,_,x,S,b,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=S,y[11]=b,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),u=1/Er.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,S=h*g,b=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=x+S*d,n[5]=_-b*d,n[9]=-h*p,n[2]=b-_*d,n[6]=S+x*d,n[10]=u*p}else if(t.order==="YXZ"){const _=p*g,x=p*v,S=d*g,b=d*v;n[0]=_+b*h,n[4]=S*h-x,n[8]=u*d,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=x*h-S,n[6]=b+_*h,n[10]=u*p}else if(t.order==="ZXY"){const _=p*g,x=p*v,S=d*g,b=d*v;n[0]=_-b*h,n[4]=-u*v,n[8]=S+x*h,n[1]=x+S*h,n[5]=u*g,n[9]=b-_*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const _=u*g,x=u*v,S=h*g,b=h*v;n[0]=p*g,n[4]=S*d-x,n[8]=_*d+b,n[1]=p*v,n[5]=b*d+_,n[9]=x*d-S,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,x=u*d,S=h*p,b=h*d;n[0]=p*g,n[4]=b-_*v,n[8]=S*v+x,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+S,n[10]=_-b*v}else if(t.order==="XZY"){const _=u*p,x=u*d,S=h*p,b=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=u*g,n[9]=x*v-S,n[2]=S*v-x,n[6]=h*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GS,t,VS)}lookAt(t,n,a){const o=this.elements;return li.subVectors(t,n),li.lengthSq()===0&&(li.z=1),li.normalize(),Ya.crossVectors(a,li),Ya.lengthSq()===0&&(Math.abs(a.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Ya.crossVectors(a,li)),Ya.normalize(),Ic.crossVectors(li,Ya),o[0]=Ya.x,o[4]=Ic.x,o[8]=li.x,o[1]=Ya.y,o[5]=Ic.y,o[9]=li.y,o[2]=Ya.z,o[6]=Ic.z,o[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],v=a[5],_=a[9],x=a[13],S=a[2],b=a[6],M=a[10],y=a[14],L=a[3],U=a[7],A=a[11],P=a[15],O=o[0],I=o[4],G=o[8],R=o[12],D=o[1],V=o[5],j=o[9],rt=o[13],ut=o[2],ft=o[6],B=o[10],tt=o[14],q=o[3],ot=o[7],N=o[11],Z=o[15];return c[0]=u*O+h*D+p*ut+d*q,c[4]=u*I+h*V+p*ft+d*ot,c[8]=u*G+h*j+p*B+d*N,c[12]=u*R+h*rt+p*tt+d*Z,c[1]=g*O+v*D+_*ut+x*q,c[5]=g*I+v*V+_*ft+x*ot,c[9]=g*G+v*j+_*B+x*N,c[13]=g*R+v*rt+_*tt+x*Z,c[2]=S*O+b*D+M*ut+y*q,c[6]=S*I+b*V+M*ft+y*ot,c[10]=S*G+b*j+M*B+y*N,c[14]=S*R+b*rt+M*tt+y*Z,c[3]=L*O+U*D+A*ut+P*q,c[7]=L*I+U*V+A*ft+P*ot,c[11]=L*G+U*j+A*B+P*N,c[15]=L*R+U*rt+A*tt+P*Z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],x=t[14],S=t[3],b=t[7],M=t[11],y=t[15];return S*(+c*p*v-o*d*v-c*h*_+a*d*_+o*h*x-a*p*x)+b*(+n*p*x-n*d*_+c*u*_-o*u*x+o*d*g-c*p*g)+M*(+n*d*v-n*h*x-c*u*v+a*u*x+c*h*g-a*d*g)+y*(-o*h*g-n*p*v+n*h*_+o*u*v-a*u*_+a*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],x=t[11],S=t[12],b=t[13],M=t[14],y=t[15],L=v*M*d-b*_*d+b*p*x-h*M*x-v*p*y+h*_*y,U=S*_*d-g*M*d-S*p*x+u*M*x+g*p*y-u*_*y,A=g*b*d-S*v*d+S*h*x-u*b*x-g*h*y+u*v*y,P=S*v*p-g*b*p-S*h*_+u*b*_+g*h*M-u*v*M,O=n*L+a*U+o*A+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return t[0]=L*I,t[1]=(b*_*c-v*M*c-b*o*x+a*M*x+v*o*y-a*_*y)*I,t[2]=(h*M*c-b*p*c+b*o*d-a*M*d-h*o*y+a*p*y)*I,t[3]=(v*p*c-h*_*c-v*o*d+a*_*d+h*o*x-a*p*x)*I,t[4]=U*I,t[5]=(g*M*c-S*_*c+S*o*x-n*M*x-g*o*y+n*_*y)*I,t[6]=(S*p*c-u*M*c-S*o*d+n*M*d+u*o*y-n*p*y)*I,t[7]=(u*_*c-g*p*c+g*o*d-n*_*d-u*o*x+n*p*x)*I,t[8]=A*I,t[9]=(S*v*c-g*b*c-S*a*x+n*b*x+g*a*y-n*v*y)*I,t[10]=(u*b*c-S*h*c+S*a*d-n*b*d-u*a*y+n*h*y)*I,t[11]=(g*h*c-u*v*c-g*a*d+n*v*d+u*a*x-n*h*x)*I,t[12]=P*I,t[13]=(g*b*o-S*v*o+S*a*_-n*b*_-g*a*M+n*v*M)*I,t[14]=(S*h*o-u*b*o-S*a*p+n*b*p+u*a*M-n*h*M)*I,t[15]=(u*v*o-g*h*o+g*a*p-n*v*p-u*a*_+n*h*_)*I,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,p=t.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+a,g*p-o*u,0,d*p-o*h,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,v=h+h,_=c*d,x=c*g,S=c*v,b=u*g,M=u*v,y=h*v,L=p*d,U=p*g,A=p*v,P=a.x,O=a.y,I=a.z;return o[0]=(1-(b+y))*P,o[1]=(x+A)*P,o[2]=(S-U)*P,o[3]=0,o[4]=(x-A)*O,o[5]=(1-(_+y))*O,o[6]=(M+L)*O,o[7]=0,o[8]=(S+U)*I,o[9]=(M-L)*I,o[10]=(1-(_+b))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=Er.set(o[0],o[1],o[2]).length();const u=Er.set(o[4],o[5],o[6]).length(),h=Er.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],wi.copy(this);const d=1/c,g=1/u,v=1/h;return wi.elements[0]*=d,wi.elements[1]*=d,wi.elements[2]*=d,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,n.setFromRotationMatrix(wi),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=Xi,p=!1){const d=this.elements,g=2*c/(n-t),v=2*c/(a-o),_=(n+t)/(n-t),x=(a+o)/(a-o);let S,b;if(p)S=c/(u-c),b=u*c/(u-c);else if(h===Xi)S=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(h===xu)S=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=Xi,p=!1){const d=this.elements,g=2/(n-t),v=2/(a-o),_=-(n+t)/(n-t),x=-(a+o)/(a-o);let S,b;if(p)S=1/(u-c),b=u/(u-c);else if(h===Xi)S=-2/(u-c),b=-(u+c)/(u-c);else if(h===xu)S=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=S,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Er=new k,wi=new We,GS=new k(0,0,0),VS=new k(1,1,1),Ya=new k,Ic=new k,li=new k,wv=new We,Rv=new Jr;class Ni{constructor(t=0,n=0,a=0,o=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return wv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Rv.setFromEuler(this),this.setFromQuaternion(Rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kS=0;const Cv=new k,br=new Jr,ua=new We,Fc=new k,el=new k,XS=new k,WS=new Jr,Dv=new k(1,0,0),Uv=new k(0,1,0),Lv=new k(0,0,1),Nv={type:"added"},qS={type:"removed"},Tr={type:"childadded",child:null},qh={type:"childremoved",child:null};class cn extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const t=new k,n=new Ni,a=new Jr,o=new k(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new We},normalMatrix:{value:new pe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return br.setFromAxisAngle(t,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,n){return br.setFromAxisAngle(t,n),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Dv,t)}rotateY(t){return this.rotateOnAxis(Uv,t)}rotateZ(t){return this.rotateOnAxis(Lv,t)}translateOnAxis(t,n){return Cv.copy(t).applyQuaternion(this.quaternion),this.position.add(Cv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Dv,t)}translateY(t){return this.translateOnAxis(Uv,t)}translateZ(t){return this.translateOnAxis(Lv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Fc.copy(t):Fc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(el,Fc,this.up):ua.lookAt(Fc,el,this.up),this.quaternion.setFromRotationMatrix(ua),o&&(ua.extractRotation(o.matrixWorld),br.setFromRotationMatrix(ua),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nv),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(qS),qh.child=t,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nv),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,XS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,WS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),S=u(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),S.length>0&&(a.nodes=S)}return a.object=o,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}cn.DEFAULT_UP=new k(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new k,fa=new k,Yh=new k,ha=new k,Ar=new k,wr=new k,Pv=new k,jh=new k,Zh=new k,Kh=new k,Qh=new Ve,Jh=new Ve,$h=new Ve;class Ci{constructor(t=new k,n=new k,a=new k){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ri.subVectors(t,n),o.cross(Ri);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ri.subVectors(o,n),fa.subVectors(a,n),Yh.subVectors(t,n);const u=Ri.dot(Ri),h=Ri.dot(fa),p=Ri.dot(Yh),d=fa.dot(fa),g=fa.dot(Yh),v=u*d-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(d*p-h*g)*_,S=(u*g-h*p)*_;return c.set(1-x-S,S,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,n,a,o,c,u,h,p){return this.getBarycoord(t,n,a,o,ha)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ha.x),p.addScaledVector(u,ha.y),p.addScaledVector(h,ha.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return Qh.setScalar(0),Jh.setScalar(0),$h.setScalar(0),Qh.fromBufferAttribute(t,n),Jh.fromBufferAttribute(t,a),$h.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Qh,c.x),u.addScaledVector(Jh,c.y),u.addScaledVector($h,c.z),u}static isFrontFacing(t,n,a,o){return Ri.subVectors(a,n),fa.subVectors(t,n),Ri.cross(fa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ri.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ci.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ci.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Ar.subVectors(o,a),wr.subVectors(c,a),jh.subVectors(t,a);const p=Ar.dot(jh),d=wr.dot(jh);if(p<=0&&d<=0)return n.copy(a);Zh.subVectors(t,o);const g=Ar.dot(Zh),v=wr.dot(Zh);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Ar,u);Kh.subVectors(t,c);const x=Ar.dot(Kh),S=wr.dot(Kh);if(S>=0&&x<=S)return n.copy(c);const b=x*d-p*S;if(b<=0&&d>=0&&S<=0)return h=d/(d-S),n.copy(a).addScaledVector(wr,h);const M=g*S-x*v;if(M<=0&&v-g>=0&&x-S>=0)return Pv.subVectors(c,o),h=(v-g)/(v-g+(x-S)),n.copy(o).addScaledVector(Pv,h);const y=1/(M+b+_);return u=b*y,h=_*y,n.copy(a).addScaledVector(Ar,u).addScaledVector(wr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function td(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ce{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ce.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ce.workingColorSpace){if(t=yp(t,1),n=Se(n,0,1),a=Se(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=td(u,c,t+1/3),this.g=td(u,c,t),this.b=td(u,c,t-1/3)}return Ce.colorSpaceToWorking(this,o),this}setStyle(t,n=Jn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Jn){const a=tx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return Ce.workingToColorSpace(In.copy(this),t),Math.round(Se(In.r*255,0,255))*65536+Math.round(Se(In.g*255,0,255))*256+Math.round(Se(In.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.workingToColorSpace(In.copy(this),n);const a=In.r,o=In.g,c=In.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const v=u-h;switch(d=g<=.5?v/(u+h):v/(2-u-h),u){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Jn){Ce.workingToColorSpace(In.copy(this),t);const n=In.r,a=In.g,o=In.b;return t!==Jn?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ja),this.setHSL(ja.h+t,ja.s+n,ja.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ja),t.getHSL(Hc);const a=fl(ja.h,Hc.h,n),o=fl(ja.s,Hc.s,n),c=fl(ja.l,Hc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ce;ce.NAMES=tx;let YS=0;class to extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=Ir,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(a.blending=this.blending),this.side!==ts&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==xd&&(a.blendSrc=this.blendSrc),this.blendDst!==yd&&(a.blendDst=this.blendDst),this.blendEquation!==Ds&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(a.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ns extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new k,Gc=new It;let jS=0;class hi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=yv,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Gc.fromBufferAttribute(this,n),Gc.applyMatrix3(t),this.setXY(n,Gc.x,Gc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Or(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Xn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Or(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Or(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Or(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Or(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),a=Xn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),a=Xn(a,this.array),o=Xn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),a=Xn(a,this.array),o=Xn(o,this.array),c=Xn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yv&&(t.usage=this.usage),t}}class ex extends hi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class nx extends hi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ye extends hi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let ZS=0;const yi=new We,ed=new cn,Rr=new k,ci=new zs,nl=new zs,wn=new k;class sn extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(K_(t)?nx:ex)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,a){return yi.makeTranslation(t,n,a),this.applyMatrix4(yi),this}scale(t,n,a){return yi.makeScale(t,n,a),this.applyMatrix4(yi),this}lookAt(t){return ed.lookAt(t),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ye(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const a=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];nl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(ci.min,nl.min),ci.expandByPoint(wn),wn.addVectors(ci.max,nl.max),ci.expandByPoint(wn)):(ci.expandByPoint(nl.min),ci.expandByPoint(nl.max))}ci.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)wn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(wn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)wn.fromBufferAttribute(h,d),p&&(Rr.fromBufferAttribute(t,d),wn.add(Rr)),o=Math.max(o,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let G=0;G<a.count;G++)h[G]=new k,p[G]=new k;const d=new k,g=new k,v=new k,_=new It,x=new It,S=new It,b=new k,M=new k;function y(G,R,D){d.fromBufferAttribute(a,G),g.fromBufferAttribute(a,R),v.fromBufferAttribute(a,D),_.fromBufferAttribute(c,G),x.fromBufferAttribute(c,R),S.fromBufferAttribute(c,D),g.sub(d),v.sub(d),x.sub(_),S.sub(_);const V=1/(x.x*S.y-S.x*x.y);isFinite(V)&&(b.copy(g).multiplyScalar(S.y).addScaledVector(v,-x.y).multiplyScalar(V),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-S.x).multiplyScalar(V),h[G].add(b),h[R].add(b),h[D].add(b),p[G].add(M),p[R].add(M),p[D].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let G=0,R=L.length;G<R;++G){const D=L[G],V=D.start,j=D.count;for(let rt=V,ut=V+j;rt<ut;rt+=3)y(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const U=new k,A=new k,P=new k,O=new k;function I(G){P.fromBufferAttribute(o,G),O.copy(P);const R=h[G];U.copy(R),U.sub(P.multiplyScalar(P.dot(R))).normalize(),A.crossVectors(O,R);const V=A.dot(p[G])<0?-1:1;u.setXYZW(G,U.x,U.y,U.z,V)}for(let G=0,R=L.length;G<R;++G){const D=L[G],V=D.start,j=D.count;for(let rt=V,ut=V+j;rt<ut;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new k,c=new k,u=new k,h=new k,p=new k,d=new k,g=new k,v=new k;if(t)for(let _=0,x=t.count;_<x;_+=3){const S=t.getX(_+0),b=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,S),p.fromBufferAttribute(a,b),d.fromBufferAttribute(a,M),h.add(g),p.add(g),d.add(g),a.setXYZ(S,h.x,h.y,h.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(p.length*g);let x=0,S=0;for(let b=0,M=p.length;b<M;b++){h.isInterleavedBufferAttribute?x=p[b]*h.data.stride+h.offset:x=p[b]*g;for(let y=0;y<g;y++)_[S++]=d[x++]}return new hi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sn,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=t(_,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],v=c[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ov=new We,Es=new J_,Vc=new $r,zv=new k,kc=new k,Xc=new k,Wc=new k,nd=new k,qc=new k,Bv=new k,Yc=new k;class qt extends cn{constructor(t=new sn,n=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){qc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],v=c[p];g!==0&&(nd.fromBufferAttribute(v,t),u?qc.addScaledVector(nd,g):qc.addScaledVector(nd.sub(n),g))}n.add(qc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Vc.copy(a.boundingSphere),Vc.applyMatrix4(c),Es.copy(t.ray).recast(t.near),!(Vc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Vc,zv)===null||Es.origin.distanceToSquared(zv)>(t.far-t.near)**2))&&(Ov.copy(c).invert(),Es.copy(t.ray).applyMatrix4(Ov),!(a.boundingBox!==null&&Es.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Es)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let S=0,b=_.length;S<b;S++){const M=_[S],y=u[M.materialIndex],L=Math.max(M.start,x.start),U=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let A=L,P=U;A<P;A+=3){const O=h.getX(A),I=h.getX(A+1),G=h.getX(A+2);o=jc(this,y,t,a,d,g,v,O,I,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const S=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let M=S,y=b;M<y;M+=3){const L=h.getX(M),U=h.getX(M+1),A=h.getX(M+2);o=jc(this,u,t,a,d,g,v,L,U,A),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let S=0,b=_.length;S<b;S++){const M=_[S],y=u[M.materialIndex],L=Math.max(M.start,x.start),U=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let A=L,P=U;A<P;A+=3){const O=A,I=A+1,G=A+2;o=jc(this,y,t,a,d,g,v,O,I,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const S=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let M=S,y=b;M<y;M+=3){const L=M,U=M+1,A=M+2;o=jc(this,u,t,a,d,g,v,L,U,A),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function KS(r,t,n,a,o,c,u,h){let p;if(t.side===ti?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,t.side===ts,h),p===null)return null;Yc.copy(h),Yc.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(Yc);return d<n.near||d>n.far?null:{distance:d,point:Yc.clone(),object:r}}function jc(r,t,n,a,o,c,u,h,p,d){r.getVertexPosition(h,kc),r.getVertexPosition(p,Xc),r.getVertexPosition(d,Wc);const g=KS(r,t,n,a,kc,Xc,Wc,Bv);if(g){const v=new k;Ci.getBarycoord(Bv,kc,Xc,Wc,v),o&&(g.uv=Ci.getInterpolatedAttribute(o,h,p,d,v,new It)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,h,p,d,v,new It)),u&&(g.normal=Ci.getInterpolatedAttribute(u,h,p,d,v,new k),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new k,materialIndex:0};Ci.getNormal(kc,Xc,Wc,_.normal),g.face=_,g.barycoord=v}return g}class Qn extends sn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],v=[];let _=0,x=0;S("z","y","x",-1,-1,a,n,t,u,c,0),S("z","y","x",1,-1,a,n,-t,u,c,1),S("x","z","y",1,1,t,a,n,o,u,2),S("x","z","y",1,-1,t,a,-n,o,u,3),S("x","y","z",1,-1,t,n,a,o,c,4),S("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(v,2));function S(b,M,y,L,U,A,P,O,I,G,R){const D=A/I,V=P/G,j=A/2,rt=P/2,ut=O/2,ft=I+1,B=G+1;let tt=0,q=0;const ot=new k;for(let N=0;N<B;N++){const Z=N*V-rt;for(let dt=0;dt<ft;dt++){const vt=dt*D-j;ot[b]=vt*L,ot[M]=Z*U,ot[y]=ut,d.push(ot.x,ot.y,ot.z),ot[b]=0,ot[M]=0,ot[y]=O>0?1:-1,g.push(ot.x,ot.y,ot.z),v.push(dt/I),v.push(1-N/G),tt+=1}}for(let N=0;N<G;N++)for(let Z=0;Z<I;Z++){const dt=_+Z+ft*N,vt=_+Z+ft*(N+1),At=_+(Z+1)+ft*(N+1),Gt=_+(Z+1)+ft*N;p.push(dt,vt,Gt),p.push(vt,At,Gt),q+=6}h.addGroup(x,q,R),x+=q,_+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Wn(r){const t={};for(let n=0;n<r.length;n++){const a=Yr(r[n]);for(const o in a)t[o]=a[o]}return t}function QS(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function ix(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Ml={clone:Yr,merge:Wn};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=QS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class ax extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new k,Iv=new It,Fv=new It;class $n extends ax{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,n){return this.getViewBounds(t,Iv,Fv),n.subVectors(Fv,Iv)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ul*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,Dr=1;class t1 extends cn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Cr,Dr,t,n);o.layers=this.layers,this.add(o);const c=new $n(Cr,Dr,t,n);c.layers=this.layers,this.add(c);const u=new $n(Cr,Dr,t,n);u.layers=this.layers,this.add(u);const h=new $n(Cr,Dr,t,n);h.layers=this.layers,this.add(h);const p=new $n(Cr,Dr,t,n);p.layers=this.layers,this.add(p);const d=new $n(Cr,Dr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(t===Xi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===xu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=S,a.texture.needsPMREMUpdate=!0}}class sx extends Hn{constructor(t=[],n=kr,a,o,c,u,h,p,d,g){super(t,n,a,o,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class e1 extends Li{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new sx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qn(5,5,5),c=new yn({name:"CubemapFromEquirect",uniforms:Yr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:ga});c.uniforms.tEquirect.value=n;const u=new qt(o,c),h=n.minFilter;return n.minFilter===Qa&&(n.minFilter=Di),new t1(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class xn extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n1={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const b of t.hand.values()){const M=n.getJointPose(b,a),y=this._getHandJoint(d,b);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,S=.005;d.inputState.pinching&&_>x+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new xn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Tu{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=n}clone(){return new Tu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class i1 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class a1 extends Hn{constructor(t=null,n=1,a=1,o,c,u,h,p,d=fi,g=fi,v,_){super(null,u,h,p,d,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hv extends hi{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ur=new We,Gv=new We,Zc=[],Vv=new zs,s1=new We,il=new qt,al=new $r;class kv extends qt{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Hv(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,s1)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new zs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),Vv.copy(t.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Vv)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new $r),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),al.copy(t.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(al)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(il.geometry=this.geometry,il.material=this.material,il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(a),t.ray.intersectsSphere(al)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Ur),Gv.multiplyMatrices(a,Ur),il.matrixWorld=Gv,il.raycast(t,Zc);for(let u=0,h=Zc.length;u<h;u++){const p=Zc[u];p.instanceId=c,p.object=this,n.push(p)}Zc.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Hv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new a1(new Float32Array(o*this.count),o,this.count,gp,ki));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=o*t;c[p]=h,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ad=new k,r1=new k,o1=new pe;class Rs{constructor(t=new k(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=ad.subVectors(a,n).cross(r1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(ad),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||o1.getNormalMatrix(t),o=this.coplanarPoint(ad).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new $r,l1=new It(.5,.5),Kc=new k;class Sp{constructor(t=new Rs,n=new Rs,a=new Rs,o=new Rs,c=new Rs,u=new Rs){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Xi,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],v=c[5],_=c[6],x=c[7],S=c[8],b=c[9],M=c[10],y=c[11],L=c[12],U=c[13],A=c[14],P=c[15];if(o[0].setComponents(d-u,x-g,y-S,P-L).normalize(),o[1].setComponents(d+u,x+g,y+S,P+L).normalize(),o[2].setComponents(d+h,x+v,y+b,P+U).normalize(),o[3].setComponents(d-h,x-v,y-b,P-U).normalize(),a)o[4].setComponents(p,_,M,A).normalize(),o[5].setComponents(d-p,x-_,y-M,P-A).normalize();else if(o[4].setComponents(d-p,x-_,y-M,P-A).normalize(),n===Xi)o[5].setComponents(d+p,x+_,y+M,P+A).normalize();else if(n===xu)o[5].setComponents(p,_,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);const n=l1.distanceTo(t.center);return bs.radius=.7071067811865476+n,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Kc.x=o.normal.x>0?t.max.x:t.min.x,Kc.y=o.normal.y>0?t.max.y:t.min.y,Kc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c1 extends to{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xv=new We,sp=new J_,Qc=new $r,Jc=new k;class u1 extends cn{constructor(t=new sn,n=new c1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Qc.copy(a.boundingSphere),Qc.applyMatrix4(o),Qc.radius+=c,t.ray.intersectsSphere(Qc)===!1)return;Xv.copy(o).invert(),sp.copy(t.ray).applyMatrix4(Xv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,v=a.attributes.position;if(d!==null){const _=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let S=_,b=x;S<b;S++){const M=d.getX(S);Jc.fromBufferAttribute(v,M),Wv(Jc,M,p,o,t,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let S=_,b=x;S<b;S++)Jc.fromBufferAttribute(v,S),Wv(Jc,S,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Wv(r,t,n,a,o,c,u){const h=sp.distanceSqToPoint(r);if(h<n){const p=new k;sp.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class rx extends Hn{constructor(t,n,a=Os,o,c,u,h=fi,p=fi,d,g=vl,v=1){if(g!==vl&&g!==_l)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ox extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ep extends sn{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],p=[],d=new k,g=new It;u.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const x=a+v/n*o;d.x=t*Math.cos(x),d.y=t*Math.sin(x),u.push(d.x,d.y,d.z),h.push(0,0,1),g.x=(u[_]/t+1)/2,g.y=(u[_+1]/t+1)/2,p.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ep(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rn extends sn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:p};const d=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],x=[];let S=0;const b=[],M=a/2;let y=0;L(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(x,2));function L(){const A=new k,P=new k;let O=0;const I=(n-t)/a;for(let G=0;G<=c;G++){const R=[],D=G/c,V=D*(n-t)+t;for(let j=0;j<=o;j++){const rt=j/o,ut=rt*p+h,ft=Math.sin(ut),B=Math.cos(ut);P.x=V*ft,P.y=-D*a+M,P.z=V*B,v.push(P.x,P.y,P.z),A.set(ft,I,B).normalize(),_.push(A.x,A.y,A.z),x.push(rt,1-D),R.push(S++)}b.push(R)}for(let G=0;G<o;G++)for(let R=0;R<c;R++){const D=b[R][G],V=b[R+1][G],j=b[R+1][G+1],rt=b[R][G+1];(t>0||R!==0)&&(g.push(D,V,rt),O+=3),(n>0||R!==c-1)&&(g.push(V,j,rt),O+=3)}d.addGroup(y,O,0),y+=O}function U(A){const P=S,O=new It,I=new k;let G=0;const R=A===!0?t:n,D=A===!0?1:-1;for(let j=1;j<=o;j++)v.push(0,M*D,0),_.push(0,D,0),x.push(.5,.5),S++;const V=S;for(let j=0;j<=o;j++){const ut=j/o*p+h,ft=Math.cos(ut),B=Math.sin(ut);I.x=R*B,I.y=M*D,I.z=R*ft,v.push(I.x,I.y,I.z),_.push(0,D,0),O.x=ft*.5+.5,O.y=B*.5*D+.5,x.push(O.x,O.y),S++}for(let j=0;j<o;j++){const rt=P+j,ut=V+j;A===!0?g.push(ut,ut+1,rt):g.push(ut+1,ut,rt),G+=3}d.addGroup(y,G,A===!0?1:2),y+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bp extends Rn{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new bp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tp extends sn{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],u=[];h(o),d(a),g(),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(c.slice(),3)),this.setAttribute("uv",new ye(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const U=new k,A=new k,P=new k;for(let O=0;O<n.length;O+=3)x(n[O+0],U),x(n[O+1],A),x(n[O+2],P),p(U,A,P,L)}function p(L,U,A,P){const O=P+1,I=[];for(let G=0;G<=O;G++){I[G]=[];const R=L.clone().lerp(A,G/O),D=U.clone().lerp(A,G/O),V=O-G;for(let j=0;j<=V;j++)j===0&&G===O?I[G][j]=R:I[G][j]=R.clone().lerp(D,j/V)}for(let G=0;G<O;G++)for(let R=0;R<2*(O-G)-1;R++){const D=Math.floor(R/2);R%2===0?(_(I[G][D+1]),_(I[G+1][D]),_(I[G][D])):(_(I[G][D+1]),_(I[G+1][D+1]),_(I[G+1][D]))}}function d(L){const U=new k;for(let A=0;A<c.length;A+=3)U.x=c[A+0],U.y=c[A+1],U.z=c[A+2],U.normalize().multiplyScalar(L),c[A+0]=U.x,c[A+1]=U.y,c[A+2]=U.z}function g(){const L=new k;for(let U=0;U<c.length;U+=3){L.x=c[U+0],L.y=c[U+1],L.z=c[U+2];const A=M(L)/2/Math.PI+.5,P=y(L)/Math.PI+.5;u.push(A,1-P)}S(),v()}function v(){for(let L=0;L<u.length;L+=6){const U=u[L+0],A=u[L+2],P=u[L+4],O=Math.max(U,A,P),I=Math.min(U,A,P);O>.9&&I<.1&&(U<.2&&(u[L+0]+=1),A<.2&&(u[L+2]+=1),P<.2&&(u[L+4]+=1))}}function _(L){c.push(L.x,L.y,L.z)}function x(L,U){const A=L*3;U.x=t[A+0],U.y=t[A+1],U.z=t[A+2]}function S(){const L=new k,U=new k,A=new k,P=new k,O=new It,I=new It,G=new It;for(let R=0,D=0;R<c.length;R+=9,D+=6){L.set(c[R+0],c[R+1],c[R+2]),U.set(c[R+3],c[R+4],c[R+5]),A.set(c[R+6],c[R+7],c[R+8]),O.set(u[D+0],u[D+1]),I.set(u[D+2],u[D+3]),G.set(u[D+4],u[D+5]),P.copy(L).add(U).add(A).divideScalar(3);const V=M(P);b(O,D+0,L,V),b(I,D+2,U,V),b(G,D+4,A,V)}}function b(L,U,A,P){P<0&&L.x===1&&(u[U]=L.x-1),A.x===0&&A.z===0&&(u[U]=P/2/Math.PI+.5)}function M(L){return Math.atan2(L.z,-L.x)}function y(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tp(t.vertices,t.indices,t.radius,t.details)}}class xa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,p=c-1,d;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),d=a[o]-u,d<0)h=o+1;else if(d>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const g=a[o],_=a[o+1]-g,x=(u-g)/_;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),p=n||(u.isVector2?new It:new k);return p.copy(h).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new k,o=[],c=[],u=[],h=new k,p=new We;for(let x=0;x<=t;x++){const S=x/t;o[x]=this.getTangentAt(S,new k)}c[0]=new k,u[0]=new k;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=d&&(d=g,a.set(1,0,0)),v<=d&&(d=v,a.set(0,1,0)),_<=d&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const S=Math.acos(Se(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(h,S))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(Se(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let S=1;S<=t;S++)c[S].applyMatrix4(p.makeRotationAxis(o[S],x*S)),u[S].crossVectors(o[S],c[S])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lx extends xa{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new It){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),d=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,x=d-this.aY;p=_*g-x*v+this.aX,d=_*v+x*g+this.aY}return a.set(p,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class f1 extends lx{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Ap(){let r=0,t=0,n=0,a=0;function o(c,u,h,p){r=c,t=h,n=-3*c+3*u-2*h-p,a=2*c-2*u+h+p}return{initCatmullRom:function(c,u,h,p,d){o(u,h,d*(h-c),d*(p-u))},initNonuniformCatmullRom:function(c,u,h,p,d,g,v){let _=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(p-u)/(g+v)+(p-h)/v;_*=g,x*=g,o(u,h,_,x)},calc:function(c){const u=c*c,h=u*c;return r+t*c+n*u+a*h}}}const $c=new k,sd=new Ap,rd=new Ap,od=new Ap;class yu extends xa{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new k){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),p=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:($c.subVectors(o[0],o[1]).add(o[0]),d=$c);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:($c.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=$c),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(d.distanceToSquared(v),x),b=Math.pow(v.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(g),x);b<1e-4&&(b=1),S<1e-4&&(S=b),M<1e-4&&(M=b),sd.initNonuniformCatmullRom(d.x,v.x,_.x,g.x,S,b,M),rd.initNonuniformCatmullRom(d.y,v.y,_.y,g.y,S,b,M),od.initNonuniformCatmullRom(d.z,v.z,_.z,g.z,S,b,M)}else this.curveType==="catmullrom"&&(sd.initCatmullRom(d.x,v.x,_.x,g.x,this.tension),rd.initCatmullRom(d.y,v.y,_.y,g.y,this.tension),od.initCatmullRom(d.z,v.z,_.z,g.z,this.tension));return a.set(sd.calc(p),rd.calc(p),od.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new k().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qv(r,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=r*r,p=r*h;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*h+c*r+n}function h1(r,t){const n=1-r;return n*n*t}function d1(r,t){return 2*(1-r)*r*t}function p1(r,t){return r*r*t}function hl(r,t,n,a){return h1(r,t)+d1(r,n)+p1(r,a)}function m1(r,t){const n=1-r;return n*n*n*t}function g1(r,t){const n=1-r;return 3*n*n*r*t}function v1(r,t){return 3*(1-r)*r*r*t}function _1(r,t){return r*r*r*t}function dl(r,t,n,a,o){return m1(r,t)+g1(r,n)+v1(r,a)+_1(r,o)}class x1 extends xa{constructor(t=new It,n=new It,a=new It,o=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new It){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(dl(t,o.x,c.x,u.x,h.x),dl(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y1 extends xa{constructor(t=new k,n=new k,a=new k,o=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new k){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(dl(t,o.x,c.x,u.x,h.x),dl(t,o.y,c.y,u.y,h.y),dl(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class M1 extends xa{constructor(t=new It,n=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new It){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new It){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S1 extends xa{constructor(t=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new k){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E1 extends xa{constructor(t=new It,n=new It,a=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new It){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(hl(t,o.x,c.x,u.x),hl(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cx extends xa{constructor(t=new k,n=new k,a=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new k){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(hl(t,o.x,c.x,u.x),hl(t,o.y,c.y,u.y),hl(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b1 extends xa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new It){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,p=o[u===0?u:u-1],d=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return a.set(qv(h,p.x,d.x,g.x,v.x),qv(h,p.y,d.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new It().fromArray(o))}return this}}var T1=Object.freeze({__proto__:null,ArcCurve:f1,CatmullRomCurve3:yu,CubicBezierCurve:x1,CubicBezierCurve3:y1,EllipseCurve:lx,LineCurve:M1,LineCurve3:S1,QuadraticBezierCurve:E1,QuadraticBezierCurve3:cx,SplineCurve:b1});class Ps extends Tp{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Ps(t.radius,t.detail)}}class es extends sn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,g=p+1,v=t/h,_=n/p,x=[],S=[],b=[],M=[];for(let y=0;y<g;y++){const L=y*_-u;for(let U=0;U<d;U++){const A=U*v-c;S.push(A,-L,0),b.push(0,0,1),M.push(U/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let L=0;L<h;L++){const U=L+d*y,A=L+d*(y+1),P=L+1+d*(y+1),O=L+1+d*y;x.push(U,A,O),x.push(A,P,O)}this.setIndex(x),this.setAttribute("position",new ye(S,3)),this.setAttribute("normal",new ye(b,3)),this.setAttribute("uv",new ye(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.width,t.height,t.widthSegments,t.heightSegments)}}class wp extends sn{constructor(t=.5,n=1,a=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:u},a=Math.max(3,a),o=Math.max(1,o);const h=[],p=[],d=[],g=[];let v=t;const _=(n-t)/o,x=new k,S=new It;for(let b=0;b<=o;b++){for(let M=0;M<=a;M++){const y=c+M/a*u;x.x=v*Math.cos(y),x.y=v*Math.sin(y),p.push(x.x,x.y,x.z),d.push(0,0,1),S.x=(x.x/n+1)/2,S.y=(x.y/n+1)/2,g.push(S.x,S.y)}v+=_}for(let b=0;b<o;b++){const M=b*(a+1);for(let y=0;y<a;y++){const L=y+M,U=L,A=L+a+1,P=L+a+2,O=L+1;h.push(U,A,O),h.push(A,P,O)}}this.setIndex(h),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ja extends sn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+h,Math.PI);let d=0;const g=[],v=new k,_=new k,x=[],S=[],b=[],M=[];for(let y=0;y<=a;y++){const L=[],U=y/a;let A=0;y===0&&u===0?A=.5/n:y===a&&p===Math.PI&&(A=-.5/n);for(let P=0;P<=n;P++){const O=P/n;v.x=-t*Math.cos(o+O*c)*Math.sin(u+U*h),v.y=t*Math.cos(u+U*h),v.z=t*Math.sin(o+O*c)*Math.sin(u+U*h),S.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),M.push(O+A,1-U),L.push(d++)}g.push(L)}for(let y=0;y<a;y++)for(let L=0;L<n;L++){const U=g[y][L+1],A=g[y][L],P=g[y+1][L],O=g[y+1][L+1];(y!==0||u>0)&&x.push(U,A,O),(y!==a-1||p<Math.PI)&&x.push(A,P,O)}this.setIndex(x),this.setAttribute("position",new ye(S,3)),this.setAttribute("normal",new ye(b,3)),this.setAttribute("uv",new ye(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Au extends sn{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const u=[],h=[],p=[],d=[],g=new k,v=new k,_=new k;for(let x=0;x<=a;x++)for(let S=0;S<=o;S++){const b=S/o*c,M=x/a*Math.PI*2;v.x=(t+n*Math.cos(M))*Math.cos(b),v.y=(t+n*Math.cos(M))*Math.sin(b),v.z=n*Math.sin(M),h.push(v.x,v.y,v.z),g.x=t*Math.cos(b),g.y=t*Math.sin(b),_.subVectors(v,g).normalize(),p.push(_.x,_.y,_.z),d.push(S/o),d.push(x/a)}for(let x=1;x<=a;x++)for(let S=1;S<=o;S++){const b=(o+1)*x+S-1,M=(o+1)*(x-1)+S-1,y=(o+1)*(x-1)+S,L=(o+1)*x+S;u.push(b,M,L),u.push(M,y,L)}this.setIndex(u),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mu extends sn{constructor(t=new cx(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new k,p=new k,d=new It;let g=new k;const v=[],_=[],x=[],S=[];b(),this.setIndex(S),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(x,2));function b(){for(let U=0;U<n;U++)M(U);M(c===!1?n:0),L(),y()}function M(U){g=t.getPointAt(U/n,g);const A=u.normals[U],P=u.binormals[U];for(let O=0;O<=o;O++){const I=O/o*Math.PI*2,G=Math.sin(I),R=-Math.cos(I);p.x=R*A.x+G*P.x,p.y=R*A.y+G*P.y,p.z=R*A.z+G*P.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,v.push(h.x,h.y,h.z)}}function y(){for(let U=1;U<=n;U++)for(let A=1;A<=o;A++){const P=(o+1)*(U-1)+(A-1),O=(o+1)*U+(A-1),I=(o+1)*U+A,G=(o+1)*(U-1)+A;S.push(P,O,G),S.push(O,I,G)}}function L(){for(let U=0;U<=n;U++)for(let A=0;A<=o;A++)d.x=U/n,d.y=A/o,x.push(d.x,d.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mu(new T1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class A1 extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ln extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class w1 extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R1 extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ld={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class C1{constructor(t,n,a){const o=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){const v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){const x=d[v],S=d[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const D1=new C1;class Rp{constructor(t){this.manager=t!==void 0?t:D1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Rp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Lr=new WeakMap;class U1 extends Rp{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=ld.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(u),c.manager.itemEnd(t)},0);else{let v=Lr.get(u);v===void 0&&(v=[],Lr.set(u,v)),v.push({onLoad:n,onError:o})}return u}const h=xl("img");function p(){g(),n&&n(this);const v=Lr.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}Lr.delete(this),c.manager.itemEnd(t)}function d(v){g(),o&&o(v),ld.remove(`image:${t}`);const _=Lr.get(this)||[];for(let x=0;x<_.length;x++){const S=_[x];S.onError&&S.onError(v)}Lr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),ld.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class L1 extends Rp{constructor(t){super(t)}load(t,n,a,o){const c=new Hn,u=new U1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Sl extends cn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class ux extends Sl{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const cd=new We,Yv=new k,jv=new k;class Cp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sp,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Yv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yv),jv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(jv),n.updateMatrixWorld(),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(cd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class N1 extends Cp{constructor(){super(new $n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=qr*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class tu extends Sl{constructor(t,n,a=0,o=Math.PI/3,c=0,u=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new N1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Zv=new We,sl=new k,ud=new k;class P1 extends Cp{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),sl.setFromMatrixPosition(t.matrixWorld),a.position.copy(sl),ud.copy(a.position),ud.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(ud),a.updateMatrixWorld(),o.makeTranslation(-sl.x,-sl.y,-sl.z),Zv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zv,a.coordinateSystem,a.reversedDepth)}}class eu extends Sl{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new P1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dp extends ax{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class O1 extends Cp{constructor(){super(new Dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rp extends Sl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new O1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class z1 extends Sl{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class B1 extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Kv(r,t,n,a){const o=I1(a);switch(n){case W_:return r*t;case gp:return r*t/o.components*o.byteLength;case vp:return r*t/o.components*o.byteLength;case Y_:return r*t*2/o.components*o.byteLength;case _p:return r*t*2/o.components*o.byteLength;case q_:return r*t*3/o.components*o.byteLength;case Ui:return r*t*4/o.components*o.byteLength;case xp:return r*t*4/o.components*o.byteLength;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fu:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:case Pd:return Math.max(r,16)*Math.max(t,8)/4;case Ud:case Nd:return Math.max(r,8)*Math.max(t,8)/2;case Od:case zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case kd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case qd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Jd:case $d:case tp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ep:case np:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ip:case ap:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function I1(r){switch(r){case qi:case G_:return{byteLength:1,components:1};case ml:case V_:case va:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case Os:case dp:case ki:return{byteLength:4,components:1};case k_:case X_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hx(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function F1(r){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,d){const g=p.array,v=p.updateRanges;if(r.bindBuffer(d,h),v.length===0)r.bufferSubData(d,0,g);else{v.sort((x,S)=>x.start-S.start);let _=0;for(let x=1;x<v.length;x++){const S=v[_],b=v[x];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++_,v[_]=b)}v.length=_+1;for(let x=0,S=v.length;x<S;x++){const b=v[x];r.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
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
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
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
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$1=`#ifdef USE_IRIDESCENCE
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
#endif`,tE=`#ifdef USE_BUMPMAP
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
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,uE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gE="gl_FragColor = linearToOutputTexel( gl_FragColor );",vE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
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
}`,RE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,LE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,IE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZE=`#if defined( USE_POINTS_UV )
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
#endif`,KE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lb=`#ifdef USE_NORMALMAP
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
#endif`,cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ab=`#ifdef USE_SKINNING
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
#endif`,wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nb=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hb=`uniform sampler2D t2D;
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`#include <common>
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
}`,qb=`#if DEPTH_PACKING == 3200
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
}`,Yb=`#define DISTANCE
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
}`,jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`uniform float scale;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,$b=`#include <common>
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
}`,tT=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,nT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,iT=`#define MATCAP
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
}`,aT=`#define MATCAP
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
}`,sT=`#define NORMAL
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
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oT=`#define PHONG
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
}`,lT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cT=`#define STANDARD
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
}`,uT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,fT=`#define TOON
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
}`,hT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dT=`uniform float size;
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#include <common>
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
}`,gT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:H1,alphahash_pars_fragment:G1,alphamap_fragment:V1,alphamap_pars_fragment:k1,alphatest_fragment:X1,alphatest_pars_fragment:W1,aomap_fragment:q1,aomap_pars_fragment:Y1,batching_pars_vertex:j1,batching_vertex:Z1,begin_vertex:K1,beginnormal_vertex:Q1,bsdfs:J1,iridescence_fragment:$1,bumpmap_pars_fragment:tE,clipping_planes_fragment:eE,clipping_planes_pars_fragment:nE,clipping_planes_pars_vertex:iE,clipping_planes_vertex:aE,color_fragment:sE,color_pars_fragment:rE,color_pars_vertex:oE,color_vertex:lE,common:cE,cube_uv_reflection_fragment:uE,defaultnormal_vertex:fE,displacementmap_pars_vertex:hE,displacementmap_vertex:dE,emissivemap_fragment:pE,emissivemap_pars_fragment:mE,colorspace_fragment:gE,colorspace_pars_fragment:vE,envmap_fragment:_E,envmap_common_pars_fragment:xE,envmap_pars_fragment:yE,envmap_pars_vertex:ME,envmap_physical_pars_fragment:LE,envmap_vertex:SE,fog_vertex:EE,fog_pars_vertex:bE,fog_fragment:TE,fog_pars_fragment:AE,gradientmap_pars_fragment:wE,lightmap_pars_fragment:RE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:DE,lights_pars_begin:UE,lights_toon_fragment:NE,lights_toon_pars_fragment:PE,lights_phong_fragment:OE,lights_phong_pars_fragment:zE,lights_physical_fragment:BE,lights_physical_pars_fragment:IE,lights_fragment_begin:FE,lights_fragment_maps:HE,lights_fragment_end:GE,logdepthbuf_fragment:VE,logdepthbuf_pars_fragment:kE,logdepthbuf_pars_vertex:XE,logdepthbuf_vertex:WE,map_fragment:qE,map_pars_fragment:YE,map_particle_fragment:jE,map_particle_pars_fragment:ZE,metalnessmap_fragment:KE,metalnessmap_pars_fragment:QE,morphinstance_vertex:JE,morphcolor_vertex:$E,morphnormal_vertex:tb,morphtarget_pars_vertex:eb,morphtarget_vertex:nb,normal_fragment_begin:ib,normal_fragment_maps:ab,normal_pars_fragment:sb,normal_pars_vertex:rb,normal_vertex:ob,normalmap_pars_fragment:lb,clearcoat_normal_fragment_begin:cb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:fb,iridescence_pars_fragment:hb,opaque_fragment:db,packing:pb,premultiplied_alpha_fragment:mb,project_vertex:gb,dithering_fragment:vb,dithering_pars_fragment:_b,roughnessmap_fragment:xb,roughnessmap_pars_fragment:yb,shadowmap_pars_fragment:Mb,shadowmap_pars_vertex:Sb,shadowmap_vertex:Eb,shadowmask_pars_fragment:bb,skinbase_vertex:Tb,skinning_pars_vertex:Ab,skinning_vertex:wb,skinnormal_vertex:Rb,specularmap_fragment:Cb,specularmap_pars_fragment:Db,tonemapping_fragment:Ub,tonemapping_pars_fragment:Lb,transmission_fragment:Nb,transmission_pars_fragment:Pb,uv_pars_fragment:Ob,uv_pars_vertex:zb,uv_vertex:Bb,worldpos_vertex:Ib,background_vert:Fb,background_frag:Hb,backgroundCube_vert:Gb,backgroundCube_frag:Vb,cube_vert:kb,cube_frag:Xb,depth_vert:Wb,depth_frag:qb,distanceRGBA_vert:Yb,distanceRGBA_frag:jb,equirect_vert:Zb,equirect_frag:Kb,linedashed_vert:Qb,linedashed_frag:Jb,meshbasic_vert:$b,meshbasic_frag:tT,meshlambert_vert:eT,meshlambert_frag:nT,meshmatcap_vert:iT,meshmatcap_frag:aT,meshnormal_vert:sT,meshnormal_frag:rT,meshphong_vert:oT,meshphong_frag:lT,meshphysical_vert:cT,meshphysical_frag:uT,meshtoon_vert:fT,meshtoon_frag:hT,points_vert:dT,points_frag:pT,shadow_vert:mT,shadow_frag:gT,sprite_vert:vT,sprite_frag:_T},Pt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Vi={basic:{uniforms:Wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Wn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Wn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Wn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Wn([Pt.points,Pt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Wn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Wn([Pt.common,Pt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Wn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Wn([Pt.sprite,Pt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Wn([Pt.common,Pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Wn([Pt.lights,Pt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Vi.physical={uniforms:Wn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const nu={r:0,b:0,g:0},Ts=new Ni,xT=new We;function yT(r,t,n,a,o,c,u){const h=new ce(0);let p=c===!0?0:1,d,g,v=null,_=0,x=null;function S(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?n:t).get(A)),A}function b(U){let A=!1;const P=S(U);P===null?y(h,p):P&&P.isColor&&(y(P,1),A=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,A){const P=S(A);P&&(P.isCubeTexture||P.mapping===bu)?(g===void 0&&(g=new qt(new Qn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Yr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ts.copy(A.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Ts)),g.material.toneMapped=Ce.getTransfer(P.colorSpace)!==ze,(v!==P||_!==P.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,x=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new qt(new es(2,2),new yn({name:"BackgroundMaterial",uniforms:Yr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Ce.getTransfer(P.colorSpace)!==ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,v=P,_=P.version,x=r.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function y(U,A){U.getRGB(nu,ix(r)),a.buffers.color.setClear(nu.r,nu.g,nu.b,A,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,A=1){h.set(U),p=A,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(h,p)},render:b,addToRenderList:M,dispose:L}}function MT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function h(D,V,j,rt,ut){let ft=!1;const B=v(rt,j,V);c!==B&&(c=B,d(c.object)),ft=x(D,rt,j,ut),ft&&S(D,rt,j,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ft||u)&&(u=!1,A(D,V,j,rt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function p(){return r.createVertexArray()}function d(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function v(D,V,j){const rt=j.wireframe===!0;let ut=a[D.id];ut===void 0&&(ut={},a[D.id]=ut);let ft=ut[V.id];ft===void 0&&(ft={},ut[V.id]=ft);let B=ft[rt];return B===void 0&&(B=_(p()),ft[rt]=B),B}function _(D){const V=[],j=[],rt=[];for(let ut=0;ut<n;ut++)V[ut]=0,j[ut]=0,rt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:rt,object:D,attributes:{},index:null}}function x(D,V,j,rt){const ut=c.attributes,ft=V.attributes;let B=0;const tt=j.getAttributes();for(const q in tt)if(tt[q].location>=0){const N=ut[q];let Z=ft[q];if(Z===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),N===void 0||N.attribute!==Z||Z&&N.data!==Z.data)return!0;B++}return c.attributesNum!==B||c.index!==rt}function S(D,V,j,rt){const ut={},ft=V.attributes;let B=0;const tt=j.getAttributes();for(const q in tt)if(tt[q].location>=0){let N=ft[q];N===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));const Z={};Z.attribute=N,N&&N.data&&(Z.data=N.data),ut[q]=Z,B++}c.attributes=ut,c.attributesNum=B,c.index=rt}function b(){const D=c.newAttributes;for(let V=0,j=D.length;V<j;V++)D[V]=0}function M(D){y(D,0)}function y(D,V){const j=c.newAttributes,rt=c.enabledAttributes,ut=c.attributeDivisors;j[D]=1,rt[D]===0&&(r.enableVertexAttribArray(D),rt[D]=1),ut[D]!==V&&(r.vertexAttribDivisor(D,V),ut[D]=V)}function L(){const D=c.newAttributes,V=c.enabledAttributes;for(let j=0,rt=V.length;j<rt;j++)V[j]!==D[j]&&(r.disableVertexAttribArray(j),V[j]=0)}function U(D,V,j,rt,ut,ft,B){B===!0?r.vertexAttribIPointer(D,V,j,ut,ft):r.vertexAttribPointer(D,V,j,rt,ut,ft)}function A(D,V,j,rt){b();const ut=rt.attributes,ft=j.getAttributes(),B=V.defaultAttributeValues;for(const tt in ft){const q=ft[tt];if(q.location>=0){let ot=ut[tt];if(ot===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),ot!==void 0){const N=ot.normalized,Z=ot.itemSize,dt=t.get(ot);if(dt===void 0)continue;const vt=dt.buffer,At=dt.type,Gt=dt.bytesPerElement,it=At===r.INT||At===r.UNSIGNED_INT||ot.gpuType===dp;if(ot.isInterleavedBufferAttribute){const yt=ot.data,wt=yt.stride,$t=ot.offset;if(yt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)y(q.location+Zt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)M(q.location+Zt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let Zt=0;Zt<q.locationSize;Zt++)U(q.location+Zt,Z/q.locationSize,At,N,wt*Gt,($t+Z/q.locationSize*Zt)*Gt,it)}else{if(ot.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)y(q.location+yt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let yt=0;yt<q.locationSize;yt++)M(q.location+yt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let yt=0;yt<q.locationSize;yt++)U(q.location+yt,Z/q.locationSize,At,N,Z*Gt,Z/q.locationSize*yt*Gt,it)}}else if(B!==void 0){const N=B[tt];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(q.location,N);break;case 3:r.vertexAttrib3fv(q.location,N);break;case 4:r.vertexAttrib4fv(q.location,N);break;default:r.vertexAttrib1fv(q.location,N)}}}}L()}function P(){G();for(const D in a){const V=a[D];for(const j in V){const rt=V[j];for(const ut in rt)g(rt[ut].object),delete rt[ut];delete V[j]}delete a[D]}}function O(D){if(a[D.id]===void 0)return;const V=a[D.id];for(const j in V){const rt=V[j];for(const ut in rt)g(rt[ut].object),delete rt[ut];delete V[j]}delete a[D.id]}function I(D){for(const V in a){const j=a[V];if(j[D.id]===void 0)continue;const rt=j[D.id];for(const ut in rt)g(rt[ut].object),delete rt[ut];delete j[D.id]}}function G(){R(),u=!0,c!==o&&(c=o,d(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:G,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:M,disableUnusedAttributes:L}}function ST(r,t,n){let a;function o(d){a=d}function c(d,g){r.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,v){v!==0&&(r.drawArraysInstanced(a,d,g,v),n.update(g,a,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,v);let x=0;for(let S=0;S<v;S++)x+=g[S];n.update(x,a,1)}function p(d,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<d.length;S++)u(d[S],g[S],_[S]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,_,0,v);let S=0;for(let b=0;b<v;b++)S+=g[b]*_[b];n.update(S,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function ET(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Ui&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const G=I===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==qi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ki&&!G)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:P,maxSamples:O}}function bT(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Rs,h=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const S=v.clippingPlanes,b=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!o||S===null||S.length===0||c&&!M)c?g(null):d();else{const L=c?0:a,U=L*4;let A=y.clippingState||null;p.value=A,A=g(S,_,U,x);for(let P=0;P!==U;++P)A[P]=n[P];y.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,S){const b=v!==null?v.length:0;let M=null;if(b!==0){if(M=p.value,S!==!0||M===null){const y=x+b*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,A=x;U!==b;++U,A+=4)u.copy(v[U]).applyMatrix4(L,h),u.normal.toArray(M,A),M[A+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function TT(r){let t=new WeakMap;function n(u,h){return h===Rd?u.mapping=kr:h===Cd&&(u.mapping=Xr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Rd||h===Cd)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new e1(p.height);return d.fromEquirectangularTexture(r,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const zr=4,Qv=[.125,.215,.35,.446,.526,.582],Us=20,fd=new Dp,Jv=new ce;let hd=null,dd=0,pd=0,md=!1;const Cs=(1+Math.sqrt(5))/2,Nr=1/Cs,$v=[new k(-Cs,Nr,0),new k(Cs,Nr,0),new k(-Nr,0,Cs),new k(Nr,0,Cs),new k(0,Cs,-Nr),new k(0,Cs,Nr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],AT=new k;class t_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=AT}=c;hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hd,dd,pd),this._renderer.xr.enabled=md,t.scissorTest=!1,iu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===kr||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:va,format:Ui,colorSpace:Wr,depthBuffer:!1},o=e_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wT(c)),this._blurMaterial=RT(c,t,n)}return o}_compileMaterial(t){const n=new qt(this._lodPlanes[0],t);this._renderer.compile(n,fd)}_sceneToCubeUV(t,n,a,o,c){const p=new $n(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Jv),v.toneMapping=$a,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const b=new Ns({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),M=new qt(new Qn,b);let y=!1;const L=t.background;L?L.isColor&&(b.color.copy(L),t.background=null,y=!0):(b.color.copy(Jv),y=!0);for(let U=0;U<6;U++){const A=U%3;A===0?(p.up.set(0,d[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[U],c.y,c.z)):A===1?(p.up.set(0,0,d[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[U],c.z)):(p.up.set(0,d[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[U]));const P=this._cubeSize;iu(o,A*P,U>2?P:0,P,P),v.setRenderTarget(o),y&&v.render(M,p),v.render(t,p)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===kr||t.mapping===Xr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new qt(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;iu(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,fd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=$v[(o-c-1)%$v.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new qt(this._lodPlanes[o],d),_=d.uniforms,x=this._sizeLods[a]-1,S=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Us-1),b=c/S,M=isFinite(c)?1+Math.floor(g*b):Us;M>Us&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Us}`);const y=[];let L=0;for(let I=0;I<Us;++I){const G=I/b,R=Math.exp(-G*G/2);y.push(R),I===0?L+=R:I<M&&(L+=2*R)}for(let I=0;I<y.length;I++)y[I]=y[I]/L;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=S,_.mipInt.value=U-a;const A=this._sizeLods[o],P=3*A*(o>U-zr?o-U+zr:0),O=4*(this._cubeSize-A);iu(n,P,O,3*A,2*A),p.setRenderTarget(n),p.render(v,fd)}}function wT(r){const t=[],n=[],a=[];let o=r;const c=r-zr+1+Qv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let p=1/h;u>r-zr?p=Qv[u-r+zr-1]:u===0&&(p=0),a.push(p);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,S=6,b=3,M=2,y=1,L=new Float32Array(b*S*x),U=new Float32Array(M*S*x),A=new Float32Array(y*S*x);for(let O=0;O<x;O++){const I=O%3*2/3-1,G=O>2?0:-1,R=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];L.set(R,b*S*O),U.set(_,M*S*O);const D=[O,O,O,O,O,O];A.set(D,y*S*O)}const P=new sn;P.setAttribute("position",new hi(L,b)),P.setAttribute("uv",new hi(U,M)),P.setAttribute("faceIndex",new hi(A,y)),t.push(P),o>zr&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function e_(r,t,n){const a=new Li(r,t,n);return a.texture.mapping=bu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function iu(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function RT(r,t,n){const a=new Float32Array(Us),o=new k(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function n_(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function i_(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CT(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===Rd||p===Cd,g=p===kr||p===Xr;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new t_(r)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new t_(r)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function DT(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&yl("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function UT(r,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const S in _.attributes)t.remove(_.attributes[S]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,S=v.attributes.position;let b=0;if(x!==null){const L=x.array;b=x.version;for(let U=0,A=L.length;U<A;U+=3){const P=L[U+0],O=L[U+1],I=L[U+2];_.push(P,O,O,I,I,P)}}else if(S!==void 0){const L=S.array;b=S.version;for(let U=0,A=L.length/3-1;U<A;U+=3){const P=U+0,O=U+1,I=U+2;_.push(P,O,O,I,I,P)}}else return;const M=new(K_(_)?nx:ex)(_,1);M.version=b;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function LT(r,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,x){r.drawElements(a,x,c,_*u),n.update(x,a,1)}function d(_,x,S){S!==0&&(r.drawElementsInstanced(a,x,c,_*u,S),n.update(x,a,S))}function g(_,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,S);let M=0;for(let y=0;y<S;y++)M+=x[y];n.update(M,a,1)}function v(_,x,S,b){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)d(_[y]/u,x[y],b[y]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,b,0,S);let y=0;for(let L=0;L<S;L++)y+=x[L]*b[L];n.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function NT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function PT(r,t,n){const a=new WeakMap,o=new Ve;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let R=function(){I.dispose(),a.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;x===!0&&(U=1),S===!0&&(U=2),b===!0&&(U=3);let A=h.attributes.position.count*U,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const O=new Float32Array(A*P*4*v),I=new Q_(O,A,P,v);I.type=ki,I.needsUpdate=!0;const G=U*4;for(let D=0;D<v;D++){const V=M[D],j=y[D],rt=L[D],ut=A*P*4*D;for(let ft=0;ft<V.count;ft++){const B=ft*G;x===!0&&(o.fromBufferAttribute(V,ft),O[ut+B+0]=o.x,O[ut+B+1]=o.y,O[ut+B+2]=o.z,O[ut+B+3]=0),S===!0&&(o.fromBufferAttribute(j,ft),O[ut+B+4]=o.x,O[ut+B+5]=o.y,O[ut+B+6]=o.z,O[ut+B+7]=0),b===!0&&(o.fromBufferAttribute(rt,ft),O[ut+B+8]=o.x,O[ut+B+9]=o.y,O[ut+B+10]=o.z,O[ut+B+11]=rt.itemSize===4?o.w:1)}}_={count:v,texture:I,size:new It(A,P)},a.set(h,_),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let x=0;for(let b=0;b<d.length;b++)x+=d[b];const S=h.morphTargetsRelative?1:1-x;p.getUniforms().setValue(r,"morphTargetBaseInfluence",S),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function OT(r,t,n,a){let o=new WeakMap;function c(p){const d=a.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function u(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const dx=new Hn,a_=new rx(1,1),px=new Q_,mx=new FS,gx=new sx,s_=[],r_=[],o_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function eo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=s_[o];if(c===void 0&&(c=new Float32Array(o),s_[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Sn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function wu(r,t){let n=r_[t];n===void 0&&(n=new Int32Array(t),r_[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function zT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function BT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2fv(this.addr,t),Sn(n,t)}}function IT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;r.uniform3fv(this.addr,t),Sn(n,t)}}function FT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4fv(this.addr,t),Sn(n,t)}}function HT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(Mn(n,a))return;c_.set(a),r.uniformMatrix2fv(this.addr,!1,c_),Sn(n,a)}}function GT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(Mn(n,a))return;l_.set(a),r.uniformMatrix3fv(this.addr,!1,l_),Sn(n,a)}}function VT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(Mn(n,a))return;o_.set(a),r.uniformMatrix4fv(this.addr,!1,o_),Sn(n,a)}}function kT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function XT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2iv(this.addr,t),Sn(n,t)}}function WT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3iv(this.addr,t),Sn(n,t)}}function qT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4iv(this.addr,t),Sn(n,t)}}function YT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function jT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2uiv(this.addr,t),Sn(n,t)}}function ZT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3uiv(this.addr,t),Sn(n,t)}}function KT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4uiv(this.addr,t),Sn(n,t)}}function QT(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(a_.compareFunction=Z_,c=a_):c=dx,n.setTexture2D(t||c,o)}function JT(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||mx,o)}function $T(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||gx,o)}function tA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||px,o)}function eA(r){switch(r){case 5126:return zT;case 35664:return BT;case 35665:return IT;case 35666:return FT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return kT;case 35667:case 35671:return XT;case 35668:case 35672:return WT;case 35669:case 35673:return qT;case 5125:return YT;case 36294:return jT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return tA}}function nA(r,t){r.uniform1fv(this.addr,t)}function iA(r,t){const n=eo(t,this.size,2);r.uniform2fv(this.addr,n)}function aA(r,t){const n=eo(t,this.size,3);r.uniform3fv(this.addr,n)}function sA(r,t){const n=eo(t,this.size,4);r.uniform4fv(this.addr,n)}function rA(r,t){const n=eo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function oA(r,t){const n=eo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function lA(r,t){const n=eo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function cA(r,t){r.uniform1iv(this.addr,t)}function uA(r,t){r.uniform2iv(this.addr,t)}function fA(r,t){r.uniform3iv(this.addr,t)}function hA(r,t){r.uniform4iv(this.addr,t)}function dA(r,t){r.uniform1uiv(this.addr,t)}function pA(r,t){r.uniform2uiv(this.addr,t)}function mA(r,t){r.uniform3uiv(this.addr,t)}function gA(r,t){r.uniform4uiv(this.addr,t)}function vA(r,t,n){const a=this.cache,o=t.length,c=wu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||dx,c[u])}function _A(r,t,n){const a=this.cache,o=t.length,c=wu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||mx,c[u])}function xA(r,t,n){const a=this.cache,o=t.length,c=wu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||gx,c[u])}function yA(r,t,n){const a=this.cache,o=t.length,c=wu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||px,c[u])}function MA(r){switch(r){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return sA;case 35674:return rA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return hA;case 5125:return dA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return yA}}class SA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=eA(n.type)}}class EA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MA(n.type)}}class bA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function u_(r,t){r.seq.push(t),r.map[t.id]=t}function TA(r,t,n){const a=r.name,o=a.length;for(gd.lastIndex=0;;){const c=gd.exec(a),u=gd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){u_(n,d===void 0?new SA(h,r,t):new EA(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new bA(h),u_(n,v)),n=v}}}class du{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);TA(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function f_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const AA=37297;let wA=0;function RA(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const h_=new pe;function CA(r){Ce._getMatrix(h_,Ce.workingColorSpace,r);const t=`mat3( ${h_.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(r)){case _u:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function d_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+RA(r.getShaderSource(t),h)}else return c}function DA(r,t){const n=CA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function UA(r,t){let n;switch(t){case P_:n="Linear";break;case O_:n="Reinhard";break;case z_:n="Cineon";break;case Eu:n="ACESFilmic";break;case I_:n="AgX";break;case F_:n="Neutral";break;case B_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const au=new k;function LA(){Ce.getLuminanceCoefficients(au);const r=au.x.toFixed(4),t=au.y.toFixed(4),n=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function PA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function OA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function ol(r){return r!==""}function p_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function m_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zA=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(r){return r.replace(zA,IA)}const BA=new Map;function IA(r,t){let n=ve[t];if(n===void 0){const a=BA.get(t);if(a!==void 0)n=ve[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return op(n)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(r){return r.replace(FA,HA)}function HA(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function v_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function GA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===IM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function VA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case kr:case Xr:t="ENVMAP_TYPE_CUBE";break;case bu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xr:t="ENVMAP_MODE_REFRACTION";break}return t}function XA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case N_:t="ENVMAP_BLENDING_MULTIPLY";break;case iS:t="ENVMAP_BLENDING_MIX";break;case aS:t="ENVMAP_BLENDING_ADD";break}return t}function WA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function qA(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=GA(n),d=VA(n),g=kA(n),v=XA(n),_=WA(n),x=NA(n),S=PA(c),b=o.createProgram();let M,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(ol).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(ol).join(`
`),y.length>0&&(y+=`
`)):(M=[v_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),y=[v_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$a?"#define TONE_MAPPING":"",n.toneMapping!==$a?ve.tonemapping_pars_fragment:"",n.toneMapping!==$a?UA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,DA("linearToOutputTexel",n.outputColorSpace),LA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ol).join(`
`)),u=op(u),u=p_(u,n),u=m_(u,n),h=op(h),h=p_(h,n),h=m_(h,n),u=g_(u),h=g_(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===Mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=L+M+u,A=L+y+h,P=f_(o,o.VERTEX_SHADER,U),O=f_(o,o.FRAGMENT_SHADER,A);o.attachShader(b,P),o.attachShader(b,O),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function I(V){if(r.debug.checkShaderErrors){const j=o.getProgramInfoLog(b)||"",rt=o.getShaderInfoLog(P)||"",ut=o.getShaderInfoLog(O)||"",ft=j.trim(),B=rt.trim(),tt=ut.trim();let q=!0,ot=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,P,O);else{const N=d_(o,P,"vertex"),Z=d_(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+N+`
`+Z)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(B===""||tt==="")&&(ot=!1);ot&&(V.diagnostics={runnable:q,programLog:ft,vertexShader:{log:B,prefix:M},fragmentShader:{log:tt,prefix:y}})}o.deleteShader(P),o.deleteShader(O),G=new du(o,b),R=OA(o,b)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(b,AA)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=O,this}let YA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new ZA(t),n.set(t,a)),a}}class ZA{constructor(t){this.id=YA++,this.code=t,this.usedTimes=0}}function KA(r,t,n,a,o,c,u){const h=new $_,p=new jA,d=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return d.add(R),R===0?"uv":`uv${R}`}function M(R,D,V,j,rt){const ut=j.fog,ft=rt.geometry,B=R.isMeshStandardMaterial?j.environment:null,tt=(R.isMeshStandardMaterial?n:t).get(R.envMap||B),q=tt&&tt.mapping===bu?tt.image.height:null,ot=S[R.type];R.precision!==null&&(x=o.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Z=N!==void 0?N.length:0;let dt=0;ft.morphAttributes.position!==void 0&&(dt=1),ft.morphAttributes.normal!==void 0&&(dt=2),ft.morphAttributes.color!==void 0&&(dt=3);let vt,At,Gt,it;if(ot){const we=Vi[ot];vt=we.vertexShader,At=we.fragmentShader}else vt=R.vertexShader,At=R.fragmentShader,p.update(R),Gt=p.getVertexShaderID(R),it=p.getFragmentShaderID(R);const yt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),$t=rt.isInstancedMesh===!0,Zt=rt.isBatchedMesh===!0,_e=!!R.map,un=!!R.matcap,H=!!tt,Be=!!R.aoMap,ue=!!R.lightMap,se=!!R.bumpMap,Ot=!!R.normalMap,qe=!!R.displacementMap,kt=!!R.emissiveMap,fe=!!R.metalnessMap,Qe=!!R.roughnessMap,Je=R.anisotropy>0,z=R.clearcoat>0,T=R.dispersion>0,nt=R.iridescence>0,pt=R.sheen>0,_t=R.transmission>0,ht=Je&&!!R.anisotropyMap,zt=z&&!!R.clearcoatMap,Rt=z&&!!R.clearcoatNormalMap,Yt=z&&!!R.clearcoatRoughnessMap,Kt=nt&&!!R.iridescenceMap,St=nt&&!!R.iridescenceThicknessMap,Lt=pt&&!!R.sheenColorMap,Jt=pt&&!!R.sheenRoughnessMap,Xt=!!R.specularMap,Dt=!!R.specularColorMap,he=!!R.specularIntensityMap,W=_t&&!!R.transmissionMap,Tt=_t&&!!R.thicknessMap,Ct=!!R.gradientMap,Bt=!!R.alphaMap,Et=R.alphaTest>0,Mt=!!R.alphaHash,Vt=!!R.extensions;let oe=$a;R.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(oe=r.toneMapping);const Ne={shaderID:ot,shaderType:R.type,shaderName:R.name,vertexShader:vt,fragmentShader:At,defines:R.defines,customVertexShaderID:Gt,customFragmentShaderID:it,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Zt,batchingColor:Zt&&rt._colorsTexture!==null,instancing:$t,instancingColor:$t&&rt.instanceColor!==null,instancingMorph:$t&&rt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Wr,alphaToCoverage:!!R.alphaToCoverage,map:_e,matcap:un,envMap:H,envMapMode:H&&tt.mapping,envMapCubeUVHeight:q,aoMap:Be,lightMap:ue,bumpMap:se,normalMap:Ot,displacementMap:_&&qe,emissiveMap:kt,normalMapObjectSpace:Ot&&R.normalMapType===lS,normalMapTangentSpace:Ot&&R.normalMapType===j_,metalnessMap:fe,roughnessMap:Qe,anisotropy:Je,anisotropyMap:ht,clearcoat:z,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Yt,dispersion:T,iridescence:nt,iridescenceMap:Kt,iridescenceThicknessMap:St,sheen:pt,sheenColorMap:Lt,sheenRoughnessMap:Jt,specularMap:Xt,specularColorMap:Dt,specularIntensityMap:he,transmission:_t,transmissionMap:W,thicknessMap:Tt,gradientMap:Ct,opaque:R.transparent===!1&&R.blending===Ir&&R.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:Mt,combine:R.combine,mapUv:_e&&b(R.map.channel),aoMapUv:Be&&b(R.aoMap.channel),lightMapUv:ue&&b(R.lightMap.channel),bumpMapUv:se&&b(R.bumpMap.channel),normalMapUv:Ot&&b(R.normalMap.channel),displacementMapUv:qe&&b(R.displacementMap.channel),emissiveMapUv:kt&&b(R.emissiveMap.channel),metalnessMapUv:fe&&b(R.metalnessMap.channel),roughnessMapUv:Qe&&b(R.roughnessMap.channel),anisotropyMapUv:ht&&b(R.anisotropyMap.channel),clearcoatMapUv:zt&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:St&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&b(R.sheenRoughnessMap.channel),specularMapUv:Xt&&b(R.specularMap.channel),specularColorMapUv:Dt&&b(R.specularColorMap.channel),specularIntensityMapUv:he&&b(R.specularIntensityMap.channel),transmissionMapUv:W&&b(R.transmissionMap.channel),thicknessMapUv:Tt&&b(R.thicknessMap.channel),alphaMapUv:Bt&&b(R.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ot||Je),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(_e||Bt),fog:!!ut,useFog:R.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:dt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:_e&&R.map.isVideoTexture===!0&&Ce.getTransfer(R.map.colorSpace)===ze,decodeVideoTextureEmissive:kt&&R.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(R.emissiveMap.colorSpace)===ze,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Fn,flipSided:R.side===ti,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Vt&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&R.extensions.multiDraw===!0||Zt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ne.vertexUv1s=d.has(1),Ne.vertexUv2s=d.has(2),Ne.vertexUv3s=d.has(3),d.clear(),Ne}function y(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const V in R.defines)D.push(V),D.push(R.defines[V]);return R.isRawShaderMaterial===!1&&(L(D,R),U(D,R),D.push(r.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function L(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function U(R,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),R.push(h.mask)}function A(R){const D=S[R.type];let V;if(D){const j=Vi[D];V=Ml.clone(j.uniforms)}else V=R.uniforms;return V}function P(R,D){let V;for(let j=0,rt=g.length;j<rt;j++){const ut=g[j];if(ut.cacheKey===D){V=ut,++V.usedTimes;break}}return V===void 0&&(V=new qA(r,D,R,c),g.push(V)),V}function O(R){if(--R.usedTimes===0){const D=g.indexOf(R);g[D]=g[g.length-1],g.pop(),R.destroy()}}function I(R){p.remove(R)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:A,acquireProgram:P,releaseProgram:O,releaseShaderCache:I,programs:g,dispose:G}}function QA(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,p){r.get(u)[h]=p}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function JA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function __(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function x_(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v,_,x,S,b,M){let y=r[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:S,renderOrder:v.renderOrder,z:b,group:M},r[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=S,y.renderOrder=v.renderOrder,y.z=b,y.group=M),t++,y}function h(v,_,x,S,b,M){const y=u(v,_,x,S,b,M);x.transmission>0?a.push(y):x.transparent===!0?o.push(y):n.push(y)}function p(v,_,x,S,b,M){const y=u(v,_,x,S,b,M);x.transmission>0?a.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function d(v,_){n.length>1&&n.sort(v||JA),a.length>1&&a.sort(_||__),o.length>1&&o.sort(_||__)}function g(){for(let v=t,_=r.length;v<_;v++){const x=r[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:g,sort:d}}function $A(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new x_,r.set(a,[u])):o>=c.length?(u=new x_,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function t2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new k,color:new ce};break;case"SpotLight":n={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":n={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=n,n}}}function e2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let n2=0;function i2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function a2(r){const t=new t2,n=e2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new k);const o=new k,c=new We,u=new We;function h(d){let g=0,v=0,_=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let x=0,S=0,b=0,M=0,y=0,L=0,U=0,A=0,P=0,O=0,I=0;d.sort(i2);for(let R=0,D=d.length;R<D;R++){const V=d[R],j=V.color,rt=V.intensity,ut=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=j.r*rt,v+=j.g*rt,_+=j.b*rt;else if(V.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(V.sh.coefficients[B],rt);I++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const tt=V.shadow,q=n.get(V);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,a.directionalShadow[x]=q,a.directionalShadowMap[x]=ft,a.directionalShadowMatrix[x]=V.shadow.matrix,L++}a.directional[x]=B,x++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(j).multiplyScalar(rt),B.distance=ut,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,a.spot[b]=B;const tt=V.shadow;if(V.map&&(a.spotLightMap[P]=V.map,P++,tt.updateMatrices(V),V.castShadow&&O++),a.spotLightMatrix[b]=tt.matrix,V.castShadow){const q=n.get(V);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,a.spotShadow[b]=q,a.spotShadowMap[b]=ft,A++}b++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(j).multiplyScalar(rt),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),a.rectArea[M]=B,M++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const tt=V.shadow,q=n.get(V);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,a.pointShadow[S]=q,a.pointShadowMap[S]=ft,a.pointShadowMatrix[S]=V.shadow.matrix,U++}a.point[S]=B,S++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(rt),B.groundColor.copy(V.groundColor).multiplyScalar(rt),a.hemi[y]=B,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const G=a.hash;(G.directionalLength!==x||G.pointLength!==S||G.spotLength!==b||G.rectAreaLength!==M||G.hemiLength!==y||G.numDirectionalShadows!==L||G.numPointShadows!==U||G.numSpotShadows!==A||G.numSpotMaps!==P||G.numLightProbes!==I)&&(a.directional.length=x,a.spot.length=b,a.rectArea.length=M,a.point.length=S,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=A+P-O,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=I,G.directionalLength=x,G.pointLength=S,G.spotLength=b,G.rectAreaLength=M,G.hemiLength=y,G.numDirectionalShadows=L,G.numPointShadows=U,G.numSpotShadows=A,G.numSpotMaps=P,G.numLightProbes=I,a.version=n2++)}function p(d,g){let v=0,_=0,x=0,S=0,b=0;const M=g.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const U=d[y];if(U.isDirectionalLight){const A=a.directional[v];A.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),v++}else if(U.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),x++}else if(U.isRectAreaLight){const A=a.rectArea[S];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),u.identity(),c.copy(U.matrixWorld),c.premultiply(M),u.extractRotation(c),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),S++}else if(U.isPointLight){const A=a.point[_];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const A=a.hemi[b];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(M),b++}}}return{setup:h,setupView:p,state:a}}function y_(r){const t=new a2(r),n=[],a=[];function o(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function s2(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new y_(r),t.set(o,[h])):c>=u.length?(h=new y_(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const r2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l2(r,t,n){let a=new Sp;const o=new It,c=new It,u=new Ve,h=new w1({depthPacking:oS}),p=new R1,d={},g=n.maxTextureSize,v={[ts]:ti,[ti]:ts,[Fn]:Fn},_=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:r2,fragmentShader:o2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new sn;S.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new qt(S,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let y=this.type;this.render=function(O,I,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const R=r.getRenderTarget(),D=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),j=r.state;j.setBlending(ga),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const rt=y!==da&&this.type===da,ut=y===da&&this.type!==da;for(let ft=0,B=O.length;ft<B;ft++){const tt=O[ft],q=tt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ot=q.getFrameExtents();if(o.multiply(ot),c.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ot.x),o.x=c.x*ot.x,q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ot.y),o.y=c.y*ot.y,q.mapSize.y=c.y)),q.map===null||rt===!0||ut===!0){const Z=this.type!==da?{minFilter:fi,magFilter:fi}:{};q.map!==null&&q.map.dispose(),q.map=new Li(o.x,o.y,Z),q.map.texture.name=tt.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const N=q.getViewportCount();for(let Z=0;Z<N;Z++){const dt=q.getViewport(Z);u.set(c.x*dt.x,c.y*dt.y,c.x*dt.z,c.y*dt.w),j.viewport(u),q.updateMatrices(tt,Z),a=q.getFrustum(),A(I,G,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===da&&L(q,G),q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(R,D,V)};function L(O,I){const G=t.update(b);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Li(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(I,null,G,_,b,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(I,null,G,x,b,null)}function U(O,I,G,R){let D=null;const V=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)D=V;else if(D=G.isPointLight===!0?p:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=D.uuid,rt=I.uuid;let ut=d[j];ut===void 0&&(ut={},d[j]=ut);let ft=ut[rt];ft===void 0&&(ft=D.clone(),ut[rt]=ft,I.addEventListener("dispose",P)),D=ft}if(D.visible=I.visible,D.wireframe=I.wireframe,R===da?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:v[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const j=r.properties.get(D);j.light=G}return D}function A(O,I,G,R,D){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===da)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const rt=t.update(O),ut=O.material;if(Array.isArray(ut)){const ft=rt.groups;for(let B=0,tt=ft.length;B<tt;B++){const q=ft[B],ot=ut[q.materialIndex];if(ot&&ot.visible){const N=U(O,ot,R,D);O.onBeforeShadow(r,O,I,G,rt,N,q),r.renderBufferDirect(G,null,rt,N,O,q),O.onAfterShadow(r,O,I,G,rt,N,q)}}}else if(ut.visible){const ft=U(O,ut,R,D);O.onBeforeShadow(r,O,I,G,rt,ft,null),r.renderBufferDirect(G,null,rt,ft,O,null),O.onAfterShadow(r,O,I,G,rt,ft,null)}}const j=O.children;for(let rt=0,ut=j.length;rt<ut;rt++)A(j[rt],I,G,R,D)}function P(O){O.target.removeEventListener("dispose",P);for(const G in d){const R=d[G],D=O.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const c2={[Md]:Sd,[Ed]:Ad,[bd]:wd,[Vr]:Td,[Sd]:Md,[Ad]:Ed,[wd]:bd,[Td]:Vr};function u2(r,t){function n(){let W=!1;const Tt=new Ve;let Ct=null;const Bt=new Ve(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!W&&(r.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){W=Et},setClear:function(Et,Mt,Vt,oe,Ne){Ne===!0&&(Et*=oe,Mt*=oe,Vt*=oe),Tt.set(Et,Mt,Vt,oe),Bt.equals(Tt)===!1&&(r.clearColor(Et,Mt,Vt,oe),Bt.copy(Tt))},reset:function(){W=!1,Ct=null,Bt.set(-1,0,0,0)}}}function a(){let W=!1,Tt=!1,Ct=null,Bt=null,Et=null;return{setReversed:function(Mt){if(Tt!==Mt){const Vt=t.get("EXT_clip_control");Mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Tt=Mt;const oe=Et;Et=null,this.setClear(oe)}},getReversed:function(){return Tt},setTest:function(Mt){Mt?yt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(Mt){Ct!==Mt&&!W&&(r.depthMask(Mt),Ct=Mt)},setFunc:function(Mt){if(Tt&&(Mt=c2[Mt]),Bt!==Mt){switch(Mt){case Md:r.depthFunc(r.NEVER);break;case Sd:r.depthFunc(r.ALWAYS);break;case Ed:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case bd:r.depthFunc(r.EQUAL);break;case Td:r.depthFunc(r.GEQUAL);break;case Ad:r.depthFunc(r.GREATER);break;case wd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=Mt}},setLocked:function(Mt){W=Mt},setClear:function(Mt){Et!==Mt&&(Tt&&(Mt=1-Mt),r.clearDepth(Mt),Et=Mt)},reset:function(){W=!1,Ct=null,Bt=null,Et=null,Tt=!1}}}function o(){let W=!1,Tt=null,Ct=null,Bt=null,Et=null,Mt=null,Vt=null,oe=null,Ne=null;return{setTest:function(we){W||(we?yt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(we){Tt!==we&&!W&&(r.stencilMask(we),Tt=we)},setFunc:function(we,Mi,mn){(Ct!==we||Bt!==Mi||Et!==mn)&&(r.stencilFunc(we,Mi,mn),Ct=we,Bt=Mi,Et=mn)},setOp:function(we,Mi,mn){(Mt!==we||Vt!==Mi||oe!==mn)&&(r.stencilOp(we,Mi,mn),Mt=we,Vt=Mi,oe=mn)},setLocked:function(we){W=we},setClear:function(we){Ne!==we&&(r.clearStencil(we),Ne=we)},reset:function(){W=!1,Tt=null,Ct=null,Bt=null,Et=null,Mt=null,Vt=null,oe=null,Ne=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],S=null,b=!1,M=null,y=null,L=null,U=null,A=null,P=null,O=null,I=new ce(0,0,0),G=0,R=!1,D=null,V=null,j=null,rt=null,ut=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,tt=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=tt>=2);let ot=null,N={};const Z=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),vt=new Ve().fromArray(Z),At=new Ve().fromArray(dt);function Gt(W,Tt,Ct,Bt){const Et=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(W,Mt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Ct;Vt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(Tt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return Mt}const it={};it[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),u.setFunc(Vr),se(!1),Ot(gv),yt(r.CULL_FACE),Be(ga);function yt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function wt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function $t(W,Tt){return v[W]!==Tt?(r.bindFramebuffer(W,Tt),v[W]=Tt,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Tt),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Zt(W,Tt){let Ct=x,Bt=!1;if(W){Ct=_.get(Tt),Ct===void 0&&(Ct=[],_.set(Tt,Ct));const Et=W.textures;if(Ct.length!==Et.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Vt=Et.length;Mt<Vt;Mt++)Ct[Mt]=r.COLOR_ATTACHMENT0+Mt;Ct.length=Et.length,Bt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Ct)}function _e(W){return S!==W?(r.useProgram(W),S=W,!0):!1}const un={[Ds]:r.FUNC_ADD,[HM]:r.FUNC_SUBTRACT,[GM]:r.FUNC_REVERSE_SUBTRACT};un[VM]=r.MIN,un[kM]=r.MAX;const H={[XM]:r.ZERO,[WM]:r.ONE,[qM]:r.SRC_COLOR,[xd]:r.SRC_ALPHA,[JM]:r.SRC_ALPHA_SATURATE,[KM]:r.DST_COLOR,[jM]:r.DST_ALPHA,[YM]:r.ONE_MINUS_SRC_COLOR,[yd]:r.ONE_MINUS_SRC_ALPHA,[QM]:r.ONE_MINUS_DST_COLOR,[ZM]:r.ONE_MINUS_DST_ALPHA,[$M]:r.CONSTANT_COLOR,[tS]:r.ONE_MINUS_CONSTANT_COLOR,[eS]:r.CONSTANT_ALPHA,[nS]:r.ONE_MINUS_CONSTANT_ALPHA};function Be(W,Tt,Ct,Bt,Et,Mt,Vt,oe,Ne,we){if(W===ga){b===!0&&(wt(r.BLEND),b=!1);return}if(b===!1&&(yt(r.BLEND),b=!0),W!==FM){if(W!==M||we!==R){if((y!==Ds||A!==Ds)&&(r.blendEquation(r.FUNC_ADD),y=Ds,A=Ds),we)switch(W){case Ir:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gr:r.blendFunc(r.ONE,r.ONE);break;case vv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _v:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,U=null,P=null,O=null,I.set(0,0,0),G=0,M=W,R=we}return}Et=Et||Tt,Mt=Mt||Ct,Vt=Vt||Bt,(Tt!==y||Et!==A)&&(r.blendEquationSeparate(un[Tt],un[Et]),y=Tt,A=Et),(Ct!==L||Bt!==U||Mt!==P||Vt!==O)&&(r.blendFuncSeparate(H[Ct],H[Bt],H[Mt],H[Vt]),L=Ct,U=Bt,P=Mt,O=Vt),(oe.equals(I)===!1||Ne!==G)&&(r.blendColor(oe.r,oe.g,oe.b,Ne),I.copy(oe),G=Ne),M=W,R=!1}function ue(W,Tt){W.side===Fn?wt(r.CULL_FACE):yt(r.CULL_FACE);let Ct=W.side===ti;Tt&&(Ct=!Ct),se(Ct),W.blending===Ir&&W.transparent===!1?Be(ga):Be(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function Ot(W){W!==zM?(yt(r.CULL_FACE),W!==V&&(W===gv?r.cullFace(r.BACK):W===BM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),V=W}function qe(W){W!==j&&(B&&r.lineWidth(W),j=W)}function kt(W,Tt,Ct){W?(yt(r.POLYGON_OFFSET_FILL),(rt!==Tt||ut!==Ct)&&(r.polygonOffset(Tt,Ct),rt=Tt,ut=Ct)):wt(r.POLYGON_OFFSET_FILL)}function fe(W){W?yt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Qe(W){W===void 0&&(W=r.TEXTURE0+ft-1),ot!==W&&(r.activeTexture(W),ot=W)}function Je(W,Tt,Ct){Ct===void 0&&(ot===null?Ct=r.TEXTURE0+ft-1:Ct=ot);let Bt=N[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[Ct]=Bt),(Bt.type!==W||Bt.texture!==Tt)&&(ot!==Ct&&(r.activeTexture(Ct),ot=Ct),r.bindTexture(W,Tt||it[W]),Bt.type=W,Bt.texture=Tt)}function z(){const W=N[ot];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){vt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function Jt(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Xt(W,Tt){let Ct=d.get(Tt);Ct===void 0&&(Ct=new WeakMap,d.set(Tt,Ct));let Bt=Ct.get(W);Bt===void 0&&(Bt=r.getUniformBlockIndex(Tt,W.name),Ct.set(W,Bt))}function Dt(W,Tt){const Bt=d.get(Tt).get(W);p.get(Tt)!==Bt&&(r.uniformBlockBinding(Tt,Bt,W.__bindingPointIndex),p.set(Tt,Bt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ot=null,N={},v={},_=new WeakMap,x=[],S=null,b=!1,M=null,y=null,L=null,U=null,A=null,P=null,O=null,I=new ce(0,0,0),G=0,R=!1,D=null,V=null,j=null,rt=null,ut=null,vt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:yt,disable:wt,bindFramebuffer:$t,drawBuffers:Zt,useProgram:_e,setBlending:Be,setMaterial:ue,setFlipSided:se,setCullFace:Ot,setLineWidth:qe,setPolygonOffset:kt,setScissorTest:fe,activeTexture:Qe,bindTexture:Je,unbindTexture:z,compressedTexImage2D:T,compressedTexImage3D:nt,texImage2D:Kt,texImage3D:St,updateUBOMapping:Xt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Yt,texSubImage2D:pt,texSubImage3D:_t,compressedTexSubImage2D:ht,compressedTexSubImage3D:zt,scissor:Lt,viewport:Jt,reset:he}}function f2(r,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new It,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(z,T){return x?new OffscreenCanvas(z,T):xl("canvas")}function b(z,T,nt){let pt=1;const _t=Je(z);if((_t.width>nt||_t.height>nt)&&(pt=nt/Math.max(_t.width,_t.height)),pt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ht=Math.floor(pt*_t.width),zt=Math.floor(pt*_t.height);v===void 0&&(v=S(ht,zt));const Rt=T?S(ht,zt):v;return Rt.width=ht,Rt.height=zt,Rt.getContext("2d").drawImage(z,0,0,ht,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ht+"x"+zt+")."),Rt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),z;return z}function M(z){return z.generateMipmaps}function y(z){r.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(z,T,nt,pt,_t=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ht=T;if(T===r.RED&&(nt===r.FLOAT&&(ht=r.R32F),nt===r.HALF_FLOAT&&(ht=r.R16F),nt===r.UNSIGNED_BYTE&&(ht=r.R8)),T===r.RED_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ht=r.R8UI),nt===r.UNSIGNED_SHORT&&(ht=r.R16UI),nt===r.UNSIGNED_INT&&(ht=r.R32UI),nt===r.BYTE&&(ht=r.R8I),nt===r.SHORT&&(ht=r.R16I),nt===r.INT&&(ht=r.R32I)),T===r.RG&&(nt===r.FLOAT&&(ht=r.RG32F),nt===r.HALF_FLOAT&&(ht=r.RG16F),nt===r.UNSIGNED_BYTE&&(ht=r.RG8)),T===r.RG_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ht=r.RG8UI),nt===r.UNSIGNED_SHORT&&(ht=r.RG16UI),nt===r.UNSIGNED_INT&&(ht=r.RG32UI),nt===r.BYTE&&(ht=r.RG8I),nt===r.SHORT&&(ht=r.RG16I),nt===r.INT&&(ht=r.RG32I)),T===r.RGB_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),nt===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),nt===r.UNSIGNED_INT&&(ht=r.RGB32UI),nt===r.BYTE&&(ht=r.RGB8I),nt===r.SHORT&&(ht=r.RGB16I),nt===r.INT&&(ht=r.RGB32I)),T===r.RGBA_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),nt===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),nt===r.UNSIGNED_INT&&(ht=r.RGBA32UI),nt===r.BYTE&&(ht=r.RGBA8I),nt===r.SHORT&&(ht=r.RGBA16I),nt===r.INT&&(ht=r.RGBA32I)),T===r.RGB&&(nt===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),nt===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),T===r.RGBA){const zt=_t?_u:Ce.getTransfer(pt);nt===r.FLOAT&&(ht=r.RGBA32F),nt===r.HALF_FLOAT&&(ht=r.RGBA16F),nt===r.UNSIGNED_BYTE&&(ht=zt===ze?r.SRGB8_ALPHA8:r.RGBA8),nt===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),nt===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function A(z,T){let nt;return z?T===null||T===Os||T===gl?nt=r.DEPTH24_STENCIL8:T===ki?nt=r.DEPTH32F_STENCIL8:T===ml&&(nt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Os||T===gl?nt=r.DEPTH_COMPONENT24:T===ki?nt=r.DEPTH_COMPONENT32F:T===ml&&(nt=r.DEPTH_COMPONENT16),nt}function P(z,T){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==fi&&z.minFilter!==Di?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function O(z){const T=z.target;T.removeEventListener("dispose",O),G(T),T.isVideoTexture&&g.delete(T)}function I(z){const T=z.target;T.removeEventListener("dispose",I),D(T)}function G(z){const T=a.get(z);if(T.__webglInit===void 0)return;const nt=z.source,pt=_.get(nt);if(pt){const _t=pt[T.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&R(z),Object.keys(pt).length===0&&_.delete(nt)}a.remove(z)}function R(z){const T=a.get(z);r.deleteTexture(T.__webglTexture);const nt=z.source,pt=_.get(nt);delete pt[T.__cacheKey],u.memory.textures--}function D(z){const T=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let _t=0;_t<T.__webglFramebuffer[pt].length;_t++)r.deleteFramebuffer(T.__webglFramebuffer[pt][_t]);else r.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)r.deleteFramebuffer(T.__webglFramebuffer[pt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=z.textures;for(let pt=0,_t=nt.length;pt<_t;pt++){const ht=a.get(nt[pt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),u.memory.textures--),a.remove(nt[pt])}a.remove(z)}let V=0;function j(){V=0}function rt(){const z=V;return z>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),V+=1,z}function ut(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function ft(z,T){const nt=a.get(z);if(z.isVideoTexture&&fe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&nt.__version!==z.version){const pt=z.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(nt,z,T);return}}else z.isExternalTexture&&(nt.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,nt.__webglTexture,r.TEXTURE0+T)}function B(z,T){const nt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){it(nt,z,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,nt.__webglTexture,r.TEXTURE0+T)}function tt(z,T){const nt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){it(nt,z,T);return}n.bindTexture(r.TEXTURE_3D,nt.__webglTexture,r.TEXTURE0+T)}function q(z,T){const nt=a.get(z);if(z.version>0&&nt.__version!==z.version){yt(nt,z,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture,r.TEXTURE0+T)}const ot={[vu]:r.REPEAT,[Ls]:r.CLAMP_TO_EDGE,[Dd]:r.MIRRORED_REPEAT},N={[fi]:r.NEAREST,[sS]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[Di]:r.LINEAR,[zh]:r.LINEAR_MIPMAP_NEAREST,[Qa]:r.LINEAR_MIPMAP_LINEAR},Z={[cS]:r.NEVER,[mS]:r.ALWAYS,[uS]:r.LESS,[Z_]:r.LEQUAL,[fS]:r.EQUAL,[pS]:r.GEQUAL,[hS]:r.GREATER,[dS]:r.NOTEQUAL};function dt(z,T){if(T.type===ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Di||T.magFilter===zh||T.magFilter===Lc||T.magFilter===Qa||T.minFilter===Di||T.minFilter===zh||T.minFilter===Lc||T.minFilter===Qa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,ot[T.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,ot[T.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,ot[T.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==Lc&&T.minFilter!==Qa||T.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function vt(z,T){let nt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",O));const pt=T.source;let _t=_.get(pt);_t===void 0&&(_t={},_.set(pt,_t));const ht=ut(T);if(ht!==z.__cacheKey){_t[ht]===void 0&&(_t[ht]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,nt=!0),_t[ht].usedTimes++;const zt=_t[z.__cacheKey];zt!==void 0&&(_t[z.__cacheKey].usedTimes--,zt.usedTimes===0&&R(T)),z.__cacheKey=ht,z.__webglTexture=_t[ht].texture}return nt}function At(z,T,nt){return Math.floor(Math.floor(z/nt)/T)}function Gt(z,T,nt,pt){const ht=z.updateRanges;if(ht.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,nt,pt,T.data);else{ht.sort((St,Lt)=>St.start-Lt.start);let zt=0;for(let St=1;St<ht.length;St++){const Lt=ht[zt],Jt=ht[St],Xt=Lt.start+Lt.count,Dt=At(Jt.start,T.width,4),he=At(Lt.start,T.width,4);Jt.start<=Xt+1&&Dt===he&&At(Jt.start+Jt.count-1,T.width,4)===Dt?Lt.count=Math.max(Lt.count,Jt.start+Jt.count-Lt.start):(++zt,ht[zt]=Jt)}ht.length=zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Yt=r.getParameter(r.UNPACK_SKIP_PIXELS),Kt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let St=0,Lt=ht.length;St<Lt;St++){const Jt=ht[St],Xt=Math.floor(Jt.start/4),Dt=Math.ceil(Jt.count/4),he=Xt%T.width,W=Math.floor(Xt/T.width),Tt=Dt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,he,W,Tt,Ct,nt,pt,T.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Kt)}}function it(z,T,nt){let pt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=r.TEXTURE_3D);const _t=vt(z,T),ht=T.source;n.bindTexture(pt,z.__webglTexture,r.TEXTURE0+nt);const zt=a.get(ht);if(ht.version!==zt.__version||_t===!0){n.activeTexture(r.TEXTURE0+nt);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Yt=T.colorSpace===pa?null:Ce.getPrimaries(T.colorSpace),Kt=T.colorSpace===pa||Rt===Yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let St=b(T.image,!1,o.maxTextureSize);St=Qe(T,St);const Lt=c.convert(T.format,T.colorSpace),Jt=c.convert(T.type);let Xt=U(T.internalFormat,Lt,Jt,T.colorSpace,T.isVideoTexture);dt(pt,T);let Dt;const he=T.mipmaps,W=T.isVideoTexture!==!0,Tt=zt.__version===void 0||_t===!0,Ct=ht.dataReady,Bt=P(T,St);if(T.isDepthTexture)Xt=A(T.format===_l,T.type),Tt&&(W?n.texStorage2D(r.TEXTURE_2D,1,Xt,St.width,St.height):n.texImage2D(r.TEXTURE_2D,0,Xt,St.width,St.height,0,Lt,Jt,null));else if(T.isDataTexture)if(he.length>0){W&&Tt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,he[0].width,he[0].height);for(let Et=0,Mt=he.length;Et<Mt;Et++)Dt=he[Et],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,Jt,Dt.data);T.generateMipmaps=!1}else W?(Tt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,St.width,St.height),Ct&&Gt(T,St,Lt,Jt)):n.texImage2D(r.TEXTURE_2D,0,Xt,St.width,St.height,0,Lt,Jt,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Tt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,he[0].width,he[0].height,St.depth);for(let Et=0,Mt=he.length;Et<Mt;Et++)if(Dt=he[Et],T.format!==Ui)if(Lt!==null)if(W){if(Ct)if(T.layerUpdates.size>0){const Vt=Kv(Dt.width,Dt.height,T.format,T.type);for(const oe of T.layerUpdates){const Ne=Dt.data.subarray(oe*Vt/Dt.data.BYTES_PER_ELEMENT,(oe+1)*Vt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,oe,Dt.width,Dt.height,1,Lt,Ne)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,St.depth,Lt,Dt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,St.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,St.depth,Lt,Jt,Dt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,St.depth,0,Lt,Jt,Dt.data)}else{W&&Tt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,he[0].width,he[0].height);for(let Et=0,Mt=he.length;Et<Mt;Et++)Dt=he[Et],T.format!==Ui?Lt!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Dt.data):n.compressedTexImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,Jt,Dt.data)}else if(T.isDataArrayTexture)if(W){if(Tt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,St.width,St.height,St.depth),Ct)if(T.layerUpdates.size>0){const Et=Kv(St.width,St.height,T.format,T.type);for(const Mt of T.layerUpdates){const Vt=St.data.subarray(Mt*Et/St.data.BYTES_PER_ELEMENT,(Mt+1)*Et/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,St.width,St.height,1,Lt,Jt,Vt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Lt,Jt,St.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,St.width,St.height,St.depth,0,Lt,Jt,St.data);else if(T.isData3DTexture)W?(Tt&&n.texStorage3D(r.TEXTURE_3D,Bt,Xt,St.width,St.height,St.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Lt,Jt,St.data)):n.texImage3D(r.TEXTURE_3D,0,Xt,St.width,St.height,St.depth,0,Lt,Jt,St.data);else if(T.isFramebufferTexture){if(Tt)if(W)n.texStorage2D(r.TEXTURE_2D,Bt,Xt,St.width,St.height);else{let Et=St.width,Mt=St.height;for(let Vt=0;Vt<Bt;Vt++)n.texImage2D(r.TEXTURE_2D,Vt,Xt,Et,Mt,0,Lt,Jt,null),Et>>=1,Mt>>=1}}else if(he.length>0){if(W&&Tt){const Et=Je(he[0]);n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}for(let Et=0,Mt=he.length;Et<Mt;Et++)Dt=he[Et],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt,Jt,Dt):n.texImage2D(r.TEXTURE_2D,Et,Xt,Lt,Jt,Dt);T.generateMipmaps=!1}else if(W){if(Tt){const Et=Je(St);n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Jt,St)}else n.texImage2D(r.TEXTURE_2D,0,Xt,Lt,Jt,St);M(T)&&y(pt),zt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function yt(z,T,nt){if(T.image.length!==6)return;const pt=vt(z,T),_t=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+nt);const ht=a.get(_t);if(_t.version!==ht.__version||pt===!0){n.activeTexture(r.TEXTURE0+nt);const zt=Ce.getPrimaries(Ce.workingColorSpace),Rt=T.colorSpace===pa?null:Ce.getPrimaries(T.colorSpace),Yt=T.colorSpace===pa||zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let Mt=0;Mt<6;Mt++)!Kt&&!St?Lt[Mt]=b(T.image[Mt],!0,o.maxCubemapSize):Lt[Mt]=St?T.image[Mt].image:T.image[Mt],Lt[Mt]=Qe(T,Lt[Mt]);const Jt=Lt[0],Xt=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),he=U(T.internalFormat,Xt,Dt,T.colorSpace),W=T.isVideoTexture!==!0,Tt=ht.__version===void 0||pt===!0,Ct=_t.dataReady;let Bt=P(T,Jt);dt(r.TEXTURE_CUBE_MAP,T);let Et;if(Kt){W&&Tt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,Jt.width,Jt.height);for(let Mt=0;Mt<6;Mt++){Et=Lt[Mt].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const oe=Et[Vt];T.format!==Ui?Xt!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,0,0,oe.width,oe.height,Xt,oe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,0,0,oe.width,oe.height,Xt,Dt,oe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,he,oe.width,oe.height,0,Xt,Dt,oe.data)}}}else{if(Et=T.mipmaps,W&&Tt){Et.length>0&&Bt++;const Mt=Je(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(St){W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Lt[Mt].width,Lt[Mt].height,Xt,Dt,Lt[Mt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,he,Lt[Mt].width,Lt[Mt].height,0,Xt,Dt,Lt[Mt].data);for(let Vt=0;Vt<Et.length;Vt++){const Ne=Et[Vt].image[Mt].image;W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,0,0,Ne.width,Ne.height,Xt,Dt,Ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,he,Ne.width,Ne.height,0,Xt,Dt,Ne.data)}}else{W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Xt,Dt,Lt[Mt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,he,Xt,Dt,Lt[Mt]);for(let Vt=0;Vt<Et.length;Vt++){const oe=Et[Vt];W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,0,0,Xt,Dt,oe.image[Mt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,he,Xt,Dt,oe.image[Mt])}}}M(T)&&y(r.TEXTURE_CUBE_MAP),ht.__version=_t.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function wt(z,T,nt,pt,_t,ht){const zt=c.convert(nt.format,nt.colorSpace),Rt=c.convert(nt.type),Yt=U(nt.internalFormat,zt,Rt,nt.colorSpace),Kt=a.get(T),St=a.get(nt);if(St.__renderTarget=T,!Kt.__hasExternalTextures){const Lt=Math.max(1,T.width>>ht),Jt=Math.max(1,T.height>>ht);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?n.texImage3D(_t,ht,Yt,Lt,Jt,T.depth,0,zt,Rt,null):n.texImage2D(_t,ht,Yt,Lt,Jt,0,zt,Rt,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),kt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,_t,St.__webglTexture,0,qe(T)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,_t,St.__webglTexture,ht),n.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(z,T,nt){if(r.bindRenderbuffer(r.RENDERBUFFER,z),T.depthBuffer){const pt=T.depthTexture,_t=pt&&pt.isDepthTexture?pt.type:null,ht=A(T.stencilBuffer,_t),zt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=qe(T);kt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ht,T.width,T.height):nt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ht,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ht,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,z)}else{const pt=T.textures;for(let _t=0;_t<pt.length;_t++){const ht=pt[_t],zt=c.convert(ht.format,ht.colorSpace),Rt=c.convert(ht.type),Yt=U(ht.internalFormat,zt,Rt,ht.colorSpace),Kt=qe(T);nt&&kt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Yt,T.width,T.height):kt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt,Yt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Yt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Zt(z,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const _t=pt.__webglTexture,ht=qe(T);if(T.depthTexture.format===vl)kt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0);else if(T.depthTexture.format===_l)kt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function _e(z){const T=a.get(z),nt=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const pt=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const _t=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",_t)};pt.addEventListener("dispose",_t),T.__depthDisposeCallback=_t}T.__boundDepthTexture=pt}if(z.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=z.texture.mipmaps;pt&&pt.length>0?Zt(T.__webglFramebuffer[0],z):Zt(T.__webglFramebuffer,z)}else if(nt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=r.createRenderbuffer(),$t(T.__webglDepthbuffer[pt],z,!1);else{const _t=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ht)}}else{const pt=z.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),$t(T.__webglDepthbuffer,z,!1);else{const _t=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ht)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function un(z,T,nt){const pt=a.get(z);T!==void 0&&wt(pt.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),nt!==void 0&&_e(z)}function H(z){const T=z.texture,nt=a.get(z),pt=a.get(T);z.addEventListener("dispose",I);const _t=z.textures,ht=z.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=T.version,u.memory.textures++),ht){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Yt=0;Yt<T.mipmaps.length;Yt++)nt.__webglFramebuffer[Rt][Yt]=r.createFramebuffer()}else nt.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=r.createFramebuffer()}else nt.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Rt=0,Yt=_t.length;Rt<Yt;Rt++){const Kt=a.get(_t[Rt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&kt(z)===!1){nt.__webglMultisampledFramebuffer=r.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<_t.length;Rt++){const Yt=_t[Rt];nt.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const Kt=c.convert(Yt.format,Yt.colorSpace),St=c.convert(Yt.type),Lt=U(Yt.internalFormat,Kt,St,Yt.colorSpace,z.isXRRenderTarget===!0),Jt=qe(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Lt,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(nt.__webglDepthRenderbuffer=r.createRenderbuffer(),$t(nt.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){n.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),dt(r.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)wt(nt.__webglFramebuffer[Rt][Yt],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Yt);else wt(nt.__webglFramebuffer[Rt],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(T)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Rt=0,Yt=_t.length;Rt<Yt;Rt++){const Kt=_t[Rt],St=a.get(Kt);let Lt=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,St.__webglTexture),dt(Lt,Kt),wt(nt.__webglFramebuffer,z,Kt,r.COLOR_ATTACHMENT0+Rt,Lt,0),M(Kt)&&y(Lt)}n.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Rt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,pt.__webglTexture),dt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)wt(nt.__webglFramebuffer[Yt],z,T,r.COLOR_ATTACHMENT0,Rt,Yt);else wt(nt.__webglFramebuffer,z,T,r.COLOR_ATTACHMENT0,Rt,0);M(T)&&y(Rt),n.unbindTexture()}z.depthBuffer&&_e(z)}function Be(z){const T=z.textures;for(let nt=0,pt=T.length;nt<pt;nt++){const _t=T[nt];if(M(_t)){const ht=L(z),zt=a.get(_t).__webglTexture;n.bindTexture(ht,zt),y(ht),n.unbindTexture()}}}const ue=[],se=[];function Ot(z){if(z.samples>0){if(kt(z)===!1){const T=z.textures,nt=z.width,pt=z.height;let _t=r.COLOR_BUFFER_BIT;const ht=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(z),Rt=T.length>1;if(Rt)for(let Kt=0;Kt<T.length;Kt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Yt=z.texture.mipmaps;Yt&&Yt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Kt]);const St=a.get(T[Kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,_t,r.NEAREST),p===!0&&(ue.length=0,se.length=0,ue.push(r.COLOR_ATTACHMENT0+Kt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ue.push(ht),se.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let Kt=0;Kt<T.length;Kt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Kt]);const St=a.get(T[Kt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,St,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const T=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function qe(z){return Math.min(o.maxSamples,z.samples)}function kt(z){const T=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function fe(z){const T=u.render.frame;g.get(z)!==T&&(g.set(z,T),z.update())}function Qe(z,T){const nt=z.colorSpace,pt=z.format,_t=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||nt!==Wr&&nt!==pa&&(Ce.getTransfer(nt)===ze?(pt!==Ui||_t!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Je(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=rt,this.resetTextureUnits=j,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=tt,this.setTextureCube=q,this.rebindTextures=un,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=kt}function h2(r,t){function n(a,o=pa){let c;const u=Ce.getTransfer(o);if(a===qi)return r.UNSIGNED_BYTE;if(a===pp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===mp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===k_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===X_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===G_)return r.BYTE;if(a===V_)return r.SHORT;if(a===ml)return r.UNSIGNED_SHORT;if(a===dp)return r.INT;if(a===Os)return r.UNSIGNED_INT;if(a===ki)return r.FLOAT;if(a===va)return r.HALF_FLOAT;if(a===W_)return r.ALPHA;if(a===q_)return r.RGB;if(a===Ui)return r.RGBA;if(a===vl)return r.DEPTH_COMPONENT;if(a===_l)return r.DEPTH_STENCIL;if(a===gp)return r.RED;if(a===vp)return r.RED_INTEGER;if(a===Y_)return r.RG;if(a===_p)return r.RG_INTEGER;if(a===xp)return r.RGBA_INTEGER;if(a===cu||a===uu||a===fu||a===hu)if(u===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ud||a===Ld||a===Nd||a===Pd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Od||a===zd||a===Bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Od||a===zd)return u===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Bd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Id||a===Fd||a===Hd||a===Gd||a===Vd||a===kd||a===Xd||a===Wd||a===qd||a===Yd||a===jd||a===Zd||a===Kd||a===Qd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Id)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Fd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Hd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Vd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===kd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Xd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Wd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===qd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===jd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Zd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Kd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Qd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Jd||a===$d||a===tp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Jd)return u===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===$d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ep||a===np||a===ip||a===ap)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(a===np)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ip)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ap)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===gl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
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

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new ox(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new yn({vertexShader:d2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qt(new es(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g2 extends Kr{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,v=null,_=null,x=null,S=null;const b=typeof XRWebGLBinding<"u",M=new m2,y={},L=n.getContextAttributes();let U=null,A=null;const P=[],O=[],I=new It;let G=null;const R=new $n;R.viewport=new Ve;const D=new $n;D.viewport=new Ve;const V=[R,D],j=new B1;let rt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let yt=P[it];return yt===void 0&&(yt=new id,P[it]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(it){let yt=P[it];return yt===void 0&&(yt=new id,P[it]=yt),yt.getGripSpace()},this.getHand=function(it){let yt=P[it];return yt===void 0&&(yt=new id,P[it]=yt),yt.getHandSpace()};function ft(it){const yt=O.indexOf(it.inputSource);if(yt===-1)return;const wt=P[yt];wt!==void 0&&(wt.update(it.inputSource,it.frame,d||u),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){o.removeEventListener("select",ft),o.removeEventListener("selectstart",ft),o.removeEventListener("selectend",ft),o.removeEventListener("squeeze",ft),o.removeEventListener("squeezestart",ft),o.removeEventListener("squeezeend",ft),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",tt);for(let it=0;it<P.length;it++){const yt=O[it];yt!==null&&(O[it]=null,P[it].disconnect(yt))}rt=null,ut=null,M.reset();for(const it in y)delete y[it];t.setRenderTarget(U),x=null,_=null,v=null,o=null,A=null,Gt.stop(),a.isPresenting=!1,t.setPixelRatio(G),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",ft),o.addEventListener("selectstart",ft),o.addEventListener("selectend",ft),o.addEventListener("squeeze",ft),o.addEventListener("squeezestart",ft),o.addEventListener("squeezeend",ft),o.addEventListener("end",B),o.addEventListener("inputsourceschange",tt),L.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,$t=null,Zt=null;L.depth&&(Zt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=L.stencil?_l:vl,$t=L.stencil?gl:Os);const _e={colorFormat:n.RGBA8,depthFormat:Zt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(_e),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new Li(_.textureWidth,_.textureHeight,{format:Ui,type:qi,depthTexture:new rx(_.textureWidth,_.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,wt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Li(x.framebufferWidth,x.framebufferHeight,{format:Ui,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),Gt.setContext(o),Gt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function tt(it){for(let yt=0;yt<it.removed.length;yt++){const wt=it.removed[yt],$t=O.indexOf(wt);$t>=0&&(O[$t]=null,P[$t].disconnect(wt))}for(let yt=0;yt<it.added.length;yt++){const wt=it.added[yt];let $t=O.indexOf(wt);if($t===-1){for(let _e=0;_e<P.length;_e++)if(_e>=O.length){O.push(wt),$t=_e;break}else if(O[_e]===null){O[_e]=wt,$t=_e;break}if($t===-1)break}const Zt=P[$t];Zt&&Zt.connect(wt)}}const q=new k,ot=new k;function N(it,yt,wt){q.setFromMatrixPosition(yt.matrixWorld),ot.setFromMatrixPosition(wt.matrixWorld);const $t=q.distanceTo(ot),Zt=yt.projectionMatrix.elements,_e=wt.projectionMatrix.elements,un=Zt[14]/(Zt[10]-1),H=Zt[14]/(Zt[10]+1),Be=(Zt[9]+1)/Zt[5],ue=(Zt[9]-1)/Zt[5],se=(Zt[8]-1)/Zt[0],Ot=(_e[8]+1)/_e[0],qe=un*se,kt=un*Ot,fe=$t/(-se+Ot),Qe=fe*-se;if(yt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Qe),it.translateZ(fe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Zt[10]===-1)it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const Je=un+fe,z=H+fe,T=qe-Qe,nt=kt+($t-Qe),pt=Be*H/z*Je,_t=ue*H/z*Je;it.projectionMatrix.makePerspective(T,nt,pt,_t,Je,z),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Z(it,yt){yt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(yt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let yt=it.near,wt=it.far;M.texture!==null&&(M.depthNear>0&&(yt=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),j.near=D.near=R.near=yt,j.far=D.far=R.far=wt,(rt!==j.near||ut!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),rt=j.near,ut=j.far),j.layers.mask=it.layers.mask|6,R.layers.mask=j.layers.mask&3,D.layers.mask=j.layers.mask&5;const $t=it.parent,Zt=j.cameras;Z(j,$t);for(let _e=0;_e<Zt.length;_e++)Z(Zt[_e],$t);Zt.length===2?N(j,R,D):j.projectionMatrix.copy(R.projectionMatrix),dt(it,j,$t)};function dt(it,yt,wt){wt===null?it.matrix.copy(yt.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(yt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=qr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(it){p=it,_!==null&&(_.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(it){return y[it]};let vt=null;function At(it,yt){if(g=yt.getViewerPose(d||u),S=yt,g!==null){const wt=g.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let $t=!1;wt.length!==j.cameras.length&&(j.cameras.length=0,$t=!0);for(let H=0;H<wt.length;H++){const Be=wt[H];let ue=null;if(x!==null)ue=x.getViewport(Be);else{const Ot=v.getViewSubImage(_,Be);ue=Ot.viewport,H===0&&(t.setRenderTargetTextures(A,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(A))}let se=V[H];se===void 0&&(se=new $n,se.layers.enable(H),se.viewport=new Ve,V[H]=se),se.matrix.fromArray(Be.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Be.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ue.x,ue.y,ue.width,ue.height),H===0&&(j.matrix.copy(se.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),$t===!0&&j.cameras.push(se)}const Zt=o.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=a.getBinding();const H=v.getDepthInformation(wt[0]);H&&H.isValid&&H.texture&&M.init(H,o.renderState)}if(Zt&&Zt.includes("camera-access")&&b){t.state.unbindTexture(),v=a.getBinding();for(let H=0;H<wt.length;H++){const Be=wt[H].camera;if(Be){let ue=y[Be];ue||(ue=new ox,y[Be]=ue);const se=v.getCameraImage(Be);ue.sourceTexture=se}}}}for(let wt=0;wt<P.length;wt++){const $t=O[wt],Zt=P[wt];$t!==null&&Zt!==void 0&&Zt.update($t,yt,d||u)}vt&&vt(it,yt),yt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:yt}),S=null}const Gt=new hx;Gt.setAnimationLoop(At),this.setAnimationLoop=function(it){vt=it},this.dispose=function(){}}}const As=new Ni,v2=new We;function _2(r,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,ix(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,L,U,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,A)):y.isMeshMatcapMaterial?(c(M,y),S(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),b(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,L,U):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ti&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ti&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const L=t.get(y),U=L.envMap,A=L.envMapRotation;U&&(M.envMap.value=U,As.copy(A),As.x*=-1,As.y*=-1,As.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),M.envMapRotation.value.setFromMatrix4(v2.makeRotationFromEuler(As)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,L,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*L,M.scale.value=U*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,L){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,y){y.matcap&&(M.matcap.value=y.matcap)}function b(M,y){const L=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function x2(r,t,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const A=U.program;a.uniformBlockBinding(L,A)}function d(L,U){let A=o[L.id];A===void 0&&(S(L),A=g(L),o[L.id]=A,L.addEventListener("dispose",M));const P=U.program;a.updateUBOMapping(L,P);const O=t.render.frame;c[L.id]!==O&&(_(L),c[L.id]=O)}function g(L){const U=v();L.__bindingPointIndex=U;const A=r.createBuffer(),P=L.__size,O=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,P,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,A),A}function v(){for(let L=0;L<h;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const U=o[L.id],A=L.uniforms,P=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let O=0,I=A.length;O<I;O++){const G=Array.isArray(A[O])?A[O]:[A[O]];for(let R=0,D=G.length;R<D;R++){const V=G[R];if(x(V,O,R,P)===!0){const j=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let ut=0;for(let ft=0;ft<rt.length;ft++){const B=rt[ft],tt=b(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,j+ut,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,ut),ut+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(L,U,A,P){const O=L.value,I=U+"_"+A;if(P[I]===void 0)return typeof O=="number"||typeof O=="boolean"?P[I]=O:P[I]=O.clone(),!0;{const G=P[I];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return P[I]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function S(L){const U=L.uniforms;let A=0;const P=16;for(let I=0,G=U.length;I<G;I++){const R=Array.isArray(U[I])?U[I]:[U[I]];for(let D=0,V=R.length;D<V;D++){const j=R[D],rt=Array.isArray(j.value)?j.value:[j.value];for(let ut=0,ft=rt.length;ut<ft;ut++){const B=rt[ut],tt=b(B),q=A%P,ot=q%tt.boundary,N=q+ot;A+=ot,N!==0&&P-N<tt.storage&&(A+=P-N),j.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=tt.storage}}}const O=A%P;return O>0&&(A+=P-O),L.__size=A,L.__cache={},this}function b(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function M(L){const U=L.target;U.removeEventListener("dispose",M);const A=u.indexOf(U.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function y(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:p,update:d,dispose:y}}class y2{constructor(t={}){const{canvas:n=LS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const S=new Uint32Array(4),b=new Int32Array(4);let M=null,y=null;const L=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=Jn;let O=0,I=0,G=null,R=-1,D=null;const V=new Ve,j=new Ve;let rt=null;const ut=new ce(0);let ft=0,B=n.width,tt=n.height,q=1,ot=null,N=null;const Z=new Ve(0,0,B,tt),dt=new Ve(0,0,B,tt);let vt=!1;const At=new Sp;let Gt=!1,it=!1;const yt=new We,wt=new k,$t=new Ve,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function un(){return G===null?q:1}let H=a;function Be(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fp}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Et,!1),H===null){const Y="webgl2";if(H=Be(Y,C),H===null)throw Be(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,se,Ot,qe,kt,fe,Qe,Je,z,T,nt,pt,_t,ht,zt,Rt,Yt,Kt,St,Lt,Jt,Xt,Dt,he;function W(){ue=new DT(H),ue.init(),Xt=new h2(H,ue),se=new ET(H,ue,t,Xt),Ot=new u2(H,ue),se.reversedDepthBuffer&&_&&Ot.buffers.depth.setReversed(!0),qe=new NT(H),kt=new QA,fe=new f2(H,ue,Ot,kt,se,Xt,qe),Qe=new TT(A),Je=new CT(A),z=new F1(H),Dt=new MT(H,z),T=new UT(H,z,qe,Dt),nt=new OT(H,T,z,qe),St=new PT(H,se,fe),Rt=new bT(kt),pt=new KA(A,Qe,Je,ue,se,Dt,Rt),_t=new _2(A,kt),ht=new $A,zt=new s2(ue),Kt=new yT(A,Qe,Je,Ot,nt,x,p),Yt=new l2(A,nt,se),he=new x2(H,qe,se,Ot),Lt=new ST(H,ue,qe),Jt=new LT(H,ue,qe),qe.programs=pt.programs,A.capabilities=se,A.extensions=ue,A.properties=kt,A.renderLists=ht,A.shadowMap=Yt,A.state=Ot,A.info=qe}W();const Tt=new g2(A,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(B,tt,!1))},this.getSize=function(C){return C.set(B,tt)},this.setSize=function(C,Y,lt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,tt=Y,n.width=Math.floor(C*q),n.height=Math.floor(Y*q),lt===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(B*q,tt*q).floor()},this.setDrawingBufferSize=function(C,Y,lt){B=C,tt=Y,q=lt,n.width=Math.floor(C*lt),n.height=Math.floor(Y*lt),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,Y,lt,ct){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,Y,lt,ct),Ot.viewport(V.copy(Z).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,Y,lt,ct){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,Y,lt,ct),Ot.scissor(j.copy(dt).multiplyScalar(q).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(C){Ot.setScissorTest(vt=C)},this.setOpaqueSort=function(C){ot=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,lt=!0){let ct=0;if(C){let Q=!1;if(G!==null){const bt=G.texture.format;Q=bt===xp||bt===_p||bt===vp}if(Q){const bt=G.texture.type,Ut=bt===qi||bt===Os||bt===ml||bt===gl||bt===pp||bt===mp,Ft=Kt.getClearColor(),Nt=Kt.getClearAlpha(),ee=Ft.r,ie=Ft.g,jt=Ft.b;Ut?(S[0]=ee,S[1]=ie,S[2]=jt,S[3]=Nt,H.clearBufferuiv(H.COLOR,0,S)):(b[0]=ee,b[1]=ie,b[2]=jt,b[3]=Nt,H.clearBufferiv(H.COLOR,0,b))}else ct|=H.COLOR_BUFFER_BIT}Y&&(ct|=H.DEPTH_BUFFER_BIT),lt&&(ct|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Kt.dispose(),ht.dispose(),zt.dispose(),kt.dispose(),Qe.dispose(),Je.dispose(),nt.dispose(),Dt.dispose(),he.dispose(),pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",mn),Tt.removeEventListener("sessionend",gn),tn.stop()};function Ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=qe.autoReset,Y=Yt.enabled,lt=Yt.autoUpdate,ct=Yt.needsUpdate,Q=Yt.type;W(),qe.autoReset=C,Yt.enabled=Y,Yt.autoUpdate=lt,Yt.needsUpdate=ct,Yt.type=Q}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Mt(C){const Y=C.target;Y.removeEventListener("dispose",Mt),Vt(Y)}function Vt(C){oe(C),kt.remove(C)}function oe(C){const Y=kt.get(C).programs;Y!==void 0&&(Y.forEach(function(lt){pt.releaseProgram(lt)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,lt,ct,Q,bt){Y===null&&(Y=Zt);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=ya(C,Y,lt,ct,Q);Ot.setMaterial(ct,Ut);let Nt=lt.index,ee=1;if(ct.wireframe===!0){if(Nt=T.getWireframeAttribute(lt),Nt===void 0)return;ee=2}const ie=lt.drawRange,jt=lt.attributes.position;let me=ie.start*ee,De=(ie.start+ie.count)*ee;bt!==null&&(me=Math.max(me,bt.start*ee),De=Math.min(De,(bt.start+bt.count)*ee)),Nt!==null?(me=Math.max(me,0),De=Math.min(De,Nt.count)):jt!=null&&(me=Math.max(me,0),De=Math.min(De,jt.count));const Ze=De-me;if(Ze<0||Ze===1/0)return;Dt.setup(Q,ct,Ft,lt,Nt);let Ie,ge=Lt;if(Nt!==null&&(Ie=z.get(Nt),ge=Jt,ge.setIndex(Ie)),Q.isMesh)ct.wireframe===!0?(Ot.setLineWidth(ct.wireframeLinewidth*un()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(Q.isLine){let te=ct.linewidth;te===void 0&&(te=1),Ot.setLineWidth(te*un()),Q.isLineSegments?ge.setMode(H.LINES):Q.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else Q.isPoints?ge.setMode(H.POINTS):Q.isSprite&&ge.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)yl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ge.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,je=Q._multiDrawCounts,Ee=Q._multiDrawCount,Nn=Nt?z.get(Nt).bytesPerElement:1,Si=kt.get(ct).currentProgram.getUniforms();for(let Gn=0;Gn<Ee;Gn++)Si.setValue(H,"_gl_DrawID",Gn),ge.render(te[Gn]/Nn,je[Gn])}else if(Q.isInstancedMesh)ge.renderInstances(me,Ze,Q.count);else if(lt.isInstancedBufferGeometry){const te=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,je=Math.min(lt.instanceCount,te);ge.renderInstances(me,Ze,je)}else ge.render(me,Ze)};function Ne(C,Y,lt){C.transparent===!0&&C.side===Fn&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Oi(C,Y,lt),C.side=ts,C.needsUpdate=!0,Oi(C,Y,lt),C.side=Fn):Oi(C,Y,lt)}this.compile=function(C,Y,lt=null){lt===null&&(lt=C),y=zt.get(lt),y.init(Y),U.push(y),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),C!==lt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ct=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const bt=Q.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Ft=bt[Ut];Ne(Ft,lt,Q),ct.add(Ft)}else Ne(bt,lt,Q),ct.add(bt)}),y=U.pop(),ct},this.compileAsync=function(C,Y,lt=null){const ct=this.compile(C,Y,lt);return new Promise(Q=>{function bt(){if(ct.forEach(function(Ut){kt.get(Ut).currentProgram.isReady()&&ct.delete(Ut)}),ct.size===0){Q(C);return}setTimeout(bt,10)}ue.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let we=null;function Mi(C){we&&we(C)}function mn(){tn.stop()}function gn(){tn.start()}const tn=new hx;tn.setAnimationLoop(Mi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(C){we=C,Tt.setAnimationLoop(C),C===null?tn.stop():tn.start()},Tt.addEventListener("sessionstart",mn),Tt.addEventListener("sessionend",gn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,G),y=zt.get(C,U.length),y.init(Y),U.push(y),yt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),At.setFromProjectionMatrix(yt,Xi,Y.reversedDepth),it=this.localClippingEnabled,Gt=Rt.init(this.clippingPlanes,it),M=ht.get(C,L.length),M.init(),L.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=A.xr.getDepthSensingMesh();bt!==null&&Pi(bt,Y,-1/0,A.sortObjects)}Pi(C,Y,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(ot,N),_e=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,_e&&Kt.addToRenderList(M,C),this.info.render.frame++,Gt===!0&&Rt.beginShadows();const lt=y.state.shadowsArray;Yt.render(lt,C,Y),Gt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=M.opaque,Q=M.transmissive;if(y.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(Q.length>0)for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++){const Nt=bt[Ut];El(ct,Q,C,Nt)}_e&&Kt.render(C);for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++){const Nt=bt[Ut];Bs(M,C,Nt,Nt.viewport)}}else Q.length>0&&El(ct,Q,C,Y),_e&&Kt.render(C),Bs(M,C,Y);G!==null&&I===0&&(fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(A,C,Y),Dt.resetDefaultState(),R=-1,D=null,U.pop(),U.length>0?(y=U[U.length-1],Gt===!0&&Rt.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Pi(C,Y,lt,ct){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||At.intersectsSprite(C)){ct&&$t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);const Ut=nt.update(C),Ft=C.material;Ft.visible&&M.push(C,Ut,Ft,lt,$t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||At.intersectsObject(C))){const Ut=nt.update(C),Ft=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$t.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),$t.copy(Ut.boundingSphere.center)),$t.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Ft)){const Nt=Ut.groups;for(let ee=0,ie=Nt.length;ee<ie;ee++){const jt=Nt[ee],me=Ft[jt.materialIndex];me&&me.visible&&M.push(C,Ut,me,lt,$t.z,jt)}}else Ft.visible&&M.push(C,Ut,Ft,lt,$t.z,null)}}const bt=C.children;for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++)Pi(bt[Ut],Y,lt,ct)}function Bs(C,Y,lt,ct){const Q=C.opaque,bt=C.transmissive,Ut=C.transparent;y.setupLightsView(lt),Gt===!0&&Rt.setGlobalState(A.clippingPlanes,lt),ct&&Ot.viewport(V.copy(ct)),Q.length>0&&Is(Q,Y,lt),bt.length>0&&Is(bt,Y,lt),Ut.length>0&&Is(Ut,Y,lt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function El(C,Y,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ct.id]===void 0&&(y.state.transmissionRenderTarget[ct.id]=new Li(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?va:qi,minFilter:Qa,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const bt=y.state.transmissionRenderTarget[ct.id],Ut=ct.viewport||V;bt.setSize(Ut.z*A.transmissionResolutionScale,Ut.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Nt=A.getActiveCubeFace(),ee=A.getActiveMipmapLevel();A.setRenderTarget(bt),A.getClearColor(ut),ft=A.getClearAlpha(),ft<1&&A.setClearColor(16777215,.5),A.clear(),_e&&Kt.render(lt);const ie=A.toneMapping;A.toneMapping=$a;const jt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),y.setupLightsView(ct),Gt===!0&&Rt.setGlobalState(A.clippingPlanes,ct),Is(C,lt,ct),fe.updateMultisampleRenderTarget(bt),fe.updateRenderTargetMipmap(bt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let De=0,Ze=Y.length;De<Ze;De++){const Ie=Y[De],ge=Ie.object,te=Ie.geometry,je=Ie.material,Ee=Ie.group;if(je.side===Fn&&ge.layers.test(ct.layers)){const Nn=je.side;je.side=ti,je.needsUpdate=!0,io(ge,lt,ct,te,je,Ee),je.side=Nn,je.needsUpdate=!0,me=!0}}me===!0&&(fe.updateMultisampleRenderTarget(bt),fe.updateRenderTargetMipmap(bt))}A.setRenderTarget(Ft,Nt,ee),A.setClearColor(ut,ft),jt!==void 0&&(ct.viewport=jt),A.toneMapping=ie}function Is(C,Y,lt){const ct=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,bt=C.length;Q<bt;Q++){const Ut=C[Q],Ft=Ut.object,Nt=Ut.geometry,ee=Ut.group;let ie=Ut.material;ie.allowOverride===!0&&ct!==null&&(ie=ct),Ft.layers.test(lt.layers)&&io(Ft,Y,lt,Nt,ie,ee)}}function io(C,Y,lt,ct,Q,bt){C.onBeforeRender(A,Y,lt,ct,Q,bt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(A,Y,lt,ct,C,bt),Q.transparent===!0&&Q.side===Fn&&Q.forceSinglePass===!1?(Q.side=ti,Q.needsUpdate=!0,A.renderBufferDirect(lt,Y,ct,Q,C,bt),Q.side=ts,Q.needsUpdate=!0,A.renderBufferDirect(lt,Y,ct,Q,C,bt),Q.side=Fn):A.renderBufferDirect(lt,Y,ct,Q,C,bt),C.onAfterRender(A,Y,lt,ct,Q,bt)}function Oi(C,Y,lt){Y.isScene!==!0&&(Y=Zt);const ct=kt.get(C),Q=y.state.lights,bt=y.state.shadowsArray,Ut=Q.state.version,Ft=pt.getParameters(C,Q.state,bt,Y,lt),Nt=pt.getProgramCacheKey(Ft);let ee=ct.programs;ct.environment=C.isMeshStandardMaterial?Y.environment:null,ct.fog=Y.fog,ct.envMap=(C.isMeshStandardMaterial?Je:Qe).get(C.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",Mt),ee=new Map,ct.programs=ee);let ie=ee.get(Nt);if(ie!==void 0){if(ct.currentProgram===ie&&ct.lightsStateVersion===Ut)return Yi(C,Ft),ie}else Ft.uniforms=pt.getUniforms(C),C.onBeforeCompile(Ft,A),ie=pt.acquireProgram(Ft,Nt),ee.set(Nt,ie),ct.uniforms=Ft.uniforms;const jt=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=Rt.uniform),Yi(C,Ft),ct.needsLights=Ma(C),ct.lightsStateVersion=Ut,ct.needsLights&&(jt.ambientLightColor.value=Q.state.ambient,jt.lightProbe.value=Q.state.probe,jt.directionalLights.value=Q.state.directional,jt.directionalLightShadows.value=Q.state.directionalShadow,jt.spotLights.value=Q.state.spot,jt.spotLightShadows.value=Q.state.spotShadow,jt.rectAreaLights.value=Q.state.rectArea,jt.ltc_1.value=Q.state.rectAreaLTC1,jt.ltc_2.value=Q.state.rectAreaLTC2,jt.pointLights.value=Q.state.point,jt.pointLightShadows.value=Q.state.pointShadow,jt.hemisphereLights.value=Q.state.hemi,jt.directionalShadowMap.value=Q.state.directionalShadowMap,jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,jt.spotShadowMap.value=Q.state.spotShadowMap,jt.spotLightMatrix.value=Q.state.spotLightMatrix,jt.spotLightMap.value=Q.state.spotLightMap,jt.pointShadowMap.value=Q.state.pointShadowMap,jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=ie,ct.uniformsList=null,ie}function Fs(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=du.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Yi(C,Y){const lt=kt.get(C);lt.outputColorSpace=Y.outputColorSpace,lt.batching=Y.batching,lt.batchingColor=Y.batchingColor,lt.instancing=Y.instancing,lt.instancingColor=Y.instancingColor,lt.instancingMorph=Y.instancingMorph,lt.skinning=Y.skinning,lt.morphTargets=Y.morphTargets,lt.morphNormals=Y.morphNormals,lt.morphColors=Y.morphColors,lt.morphTargetsCount=Y.morphTargetsCount,lt.numClippingPlanes=Y.numClippingPlanes,lt.numIntersection=Y.numClipIntersection,lt.vertexAlphas=Y.vertexAlphas,lt.vertexTangents=Y.vertexTangents,lt.toneMapping=Y.toneMapping}function ya(C,Y,lt,ct,Q){Y.isScene!==!0&&(Y=Zt),fe.resetTextureUnits();const bt=Y.fog,Ut=ct.isMeshStandardMaterial?Y.environment:null,Ft=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Wr,Nt=(ct.isMeshStandardMaterial?Je:Qe).get(ct.envMap||Ut),ee=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ie=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),jt=!!lt.morphAttributes.position,me=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Ze=$a;ct.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ze=A.toneMapping);const Ie=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ge=Ie!==void 0?Ie.length:0,te=kt.get(ct),je=y.state.lights;if(Gt===!0&&(it===!0||C!==D)){const en=C===D&&ct.id===R;Rt.setState(ct,C,en)}let Ee=!1;ct.version===te.__version?(te.needsLights&&te.lightsStateVersion!==je.state.version||te.outputColorSpace!==Ft||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Nt||ct.fog===!0&&te.fog!==bt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Rt.numPlanes||te.numIntersection!==Rt.numIntersection)||te.vertexAlphas!==ee||te.vertexTangents!==ie||te.morphTargets!==jt||te.morphNormals!==me||te.morphColors!==De||te.toneMapping!==Ze||te.morphTargetsCount!==ge)&&(Ee=!0):(Ee=!0,te.__version=ct.version);let Nn=te.currentProgram;Ee===!0&&(Nn=Oi(ct,Y,Q));let Si=!1,Gn=!1,En=!1;const ke=Nn.getUniforms(),Vn=te.uniforms;if(Ot.useProgram(Nn.program)&&(Si=!0,Gn=!0,En=!0),ct.id!==R&&(R=ct.id,Gn=!0),Si||D!==C){Ot.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ke.setValue(H,"projectionMatrix",C.projectionMatrix),ke.setValue(H,"viewMatrix",C.matrixWorldInverse);const Cn=ke.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,wt.setFromMatrixPosition(C.matrixWorld)),se.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ke.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Gn=!0,En=!0)}if(Q.isSkinnedMesh){ke.setOptional(H,Q,"bindMatrix"),ke.setOptional(H,Q,"bindMatrixInverse");const en=Q.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ke.setValue(H,"boneTexture",en.boneTexture,fe))}Q.isBatchedMesh&&(ke.setOptional(H,Q,"batchingTexture"),ke.setValue(H,"batchingTexture",Q._matricesTexture,fe),ke.setOptional(H,Q,"batchingIdTexture"),ke.setValue(H,"batchingIdTexture",Q._indirectTexture,fe),ke.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ke.setValue(H,"batchingColorTexture",Q._colorsTexture,fe));const Pn=lt.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&St.update(Q,lt,Nn),(Gn||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,ke.setValue(H,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Vn.envMap.value=Nt,Vn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Y.environment!==null&&(Vn.envMapIntensity.value=Y.environmentIntensity),Gn&&(ke.setValue(H,"toneMappingExposure",A.toneMappingExposure),te.needsLights&&is(Vn,En),bt&&ct.fog===!0&&_t.refreshFogUniforms(Vn,bt),_t.refreshMaterialUniforms(Vn,ct,q,tt,y.state.transmissionRenderTarget[C.id]),du.upload(H,Fs(te),Vn,fe)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(du.upload(H,Fs(te),Vn,fe),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ke.setValue(H,"center",Q.center),ke.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ke.setValue(H,"normalMatrix",Q.normalMatrix),ke.setValue(H,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const en=ct.uniformsGroups;for(let Cn=0,Hs=en.length;Cn<Hs;Cn++){const qn=en[Cn];he.update(qn,Nn),he.bind(qn,Nn)}}return Nn}function is(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ma(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,Y,lt){const ct=kt.get(C);ct.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),kt.get(C.texture).__webglTexture=Y,kt.get(C.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const lt=kt.get(C);lt.__webglFramebuffer=Y,lt.__useDefaultFramebuffer=Y===void 0};const fn=H.createFramebuffer();this.setRenderTarget=function(C,Y=0,lt=0){G=C,O=Y,I=lt;let ct=!0,Q=null,bt=!1,Ut=!1;if(C){const Nt=kt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(H.FRAMEBUFFER,null),ct=!1;else if(Nt.__webglFramebuffer===void 0)fe.setupRenderTarget(C);else if(Nt.__hasExternalTextures)fe.rebindTextures(C,kt.get(C.texture).__webglTexture,kt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const jt=C.depthTexture;if(Nt.__boundDepthTexture!==jt){if(jt!==null&&kt.has(jt)&&(C.width!==jt.image.width||C.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ut=!0);const ie=kt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?Q=ie[Y][lt]:Q=ie[Y],bt=!0):C.samples>0&&fe.useMultisampledRTT(C)===!1?Q=kt.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[lt]:Q=ie,V.copy(C.viewport),j.copy(C.scissor),rt=C.scissorTest}else V.copy(Z).multiplyScalar(q).floor(),j.copy(dt).multiplyScalar(q).floor(),rt=vt;if(lt!==0&&(Q=fn),Ot.bindFramebuffer(H.FRAMEBUFFER,Q)&&ct&&Ot.drawBuffers(C,Q),Ot.viewport(V),Ot.scissor(j),Ot.setScissorTest(rt),bt){const Nt=kt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,lt)}else if(Ut){const Nt=Y;for(let ee=0;ee<C.textures.length;ee++){const ie=kt.get(C.textures[ee]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ee,ie.__webglTexture,lt,Nt)}}else if(C!==null&&lt!==0){const Nt=kt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,lt)}R=-1},this.readRenderTargetPixels=function(C,Y,lt,ct,Q,bt,Ut,Ft=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const ee=C.textures[Ft],ie=ee.format,jt=ee.type;if(!se.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ct&&lt>=0&&lt<=C.height-Q&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ft),H.readPixels(Y,lt,ct,Q,Xt.convert(ie),Xt.convert(jt),bt))}finally{const ee=G!==null?kt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(C,Y,lt,ct,Q,bt,Ut,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(Y>=0&&Y<=C.width-ct&&lt>=0&&lt<=C.height-Q){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);const ee=C.textures[Ft],ie=ee.format,jt=ee.type;if(!se.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ft),H.readPixels(Y,lt,ct,Q,Xt.convert(ie),Xt.convert(jt),0);const De=G!==null?kt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,De);const Ze=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await NS(H,Ze,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(me),H.deleteSync(Ze),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,lt=0){const ct=Math.pow(2,-lt),Q=Math.floor(C.image.width*ct),bt=Math.floor(C.image.height*ct),Ut=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;fe.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,Ut,Ft,Q,bt),Ot.unbindTexture()};const bl=H.createFramebuffer(),Tl=H.createFramebuffer();this.copyTextureToTexture=function(C,Y,lt=null,ct=null,Q=0,bt=null){bt===null&&(Q!==0?(yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Q,Q=0):bt=0);let Ut,Ft,Nt,ee,ie,jt,me,De,Ze;const Ie=C.isCompressedTexture?C.mipmaps[bt]:C.image;if(lt!==null)Ut=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Nt=lt.isBox3?lt.max.z-lt.min.z:1,ee=lt.min.x,ie=lt.min.y,jt=lt.isBox3?lt.min.z:0;else{const Pn=Math.pow(2,-Q);Ut=Math.floor(Ie.width*Pn),Ft=Math.floor(Ie.height*Pn),C.isDataArrayTexture?Nt=Ie.depth:C.isData3DTexture?Nt=Math.floor(Ie.depth*Pn):Nt=1,ee=0,ie=0,jt=0}ct!==null?(me=ct.x,De=ct.y,Ze=ct.z):(me=0,De=0,Ze=0);const ge=Xt.convert(Y.format),te=Xt.convert(Y.type);let je;Y.isData3DTexture?(fe.setTexture3D(Y,0),je=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(fe.setTexture2DArray(Y,0),je=H.TEXTURE_2D_ARRAY):(fe.setTexture2D(Y,0),je=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),Nn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Si=H.getParameter(H.UNPACK_SKIP_PIXELS),Gn=H.getParameter(H.UNPACK_SKIP_ROWS),En=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ee),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const ke=C.isDataArrayTexture||C.isData3DTexture,Vn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const Pn=kt.get(C),en=kt.get(Y),Cn=kt.get(Pn.__renderTarget),Hs=kt.get(en.__renderTarget);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let qn=0;qn<Nt;qn++)ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(C).__webglTexture,Q,jt+qn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(Y).__webglTexture,bt,Ze+qn)),H.blitFramebuffer(ee,ie,Ut,Ft,me,De,Ut,Ft,H.DEPTH_BUFFER_BIT,H.NEAREST);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||kt.has(C)){const Pn=kt.get(C),en=kt.get(Y);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,bl),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,Tl);for(let Cn=0;Cn<Nt;Cn++)ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,Q,jt+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,Q),Vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,bt,Ze+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,bt),Q!==0?H.blitFramebuffer(ee,ie,Ut,Ft,me,De,Ut,Ft,H.COLOR_BUFFER_BIT,H.NEAREST):Vn?H.copyTexSubImage3D(je,bt,me,De,Ze+Cn,ee,ie,Ut,Ft):H.copyTexSubImage2D(je,bt,me,De,ee,ie,Ut,Ft);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Vn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(je,bt,me,De,Ze,Ut,Ft,Nt,ge,te,Ie.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(je,bt,me,De,Ze,Ut,Ft,Nt,ge,Ie.data):H.texSubImage3D(je,bt,me,De,Ze,Ut,Ft,Nt,ge,te,Ie):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,me,De,Ut,Ft,ge,te,Ie.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,me,De,Ie.width,Ie.height,ge,Ie.data):H.texSubImage2D(H.TEXTURE_2D,bt,me,De,Ut,Ft,ge,te,Ie);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Si),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,En),bt===0&&Y.generateMipmaps&&H.generateMipmap(je),Ot.unbindTexture()},this.initRenderTarget=function(C){kt.get(C).__webglFramebuffer===void 0&&fe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),Ot.unbindTexture()},this.resetState=function(){O=0,I=0,G=null,Ot.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}function pu(r,t=!1){const n=r[0].index!==null,a=new Set(Object.keys(r[0].attributes)),o=new Set(Object.keys(r[0].morphAttributes)),c={},u={},h=r[0].morphTargetsRelative,p=new sn;let d=0;for(let g=0;g<r.length;++g){const v=r[g];let _=0;if(n!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in v.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(v.attributes[x]),_++}if(_!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in v.morphAttributes){if(!o.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[x]===void 0&&(u[x]=[]),u[x].push(v.morphAttributes[x])}if(t){let x;if(n)x=v.index.count;else if(v.attributes.position!==void 0)x=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;p.addGroup(d,x,g),d+=x}}if(n){let g=0;const v=[];for(let _=0;_<r.length;++_){const x=r[_].index;for(let S=0;S<x.count;++S)v.push(x.getX(S)+g);g+=r[_].attributes.position.count}p.setIndex(v)}for(const g in c){const v=M_(c[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;p.setAttribute(g,v)}for(const g in u){const v=u[g][0].length;if(v===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[g]=[];for(let _=0;_<v;++_){const x=[];for(let b=0;b<u[g].length;++b)x.push(u[g][b][_]);const S=M_(x);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;p.morphAttributes[g].push(S)}}return p}function M_(r){let t,n,a,o=-1,c=0;for(let d=0;d<r.length;++d){const g=r[d];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const u=new t(c),h=new hi(u,n,a);let p=0;for(let d=0;d<r.length;++d){const g=r[d];if(g.isInterleavedBufferAttribute){const v=p/n;for(let _=0,x=g.count;_<x;_++)for(let S=0;S<n;S++){const b=g.getComponent(_,S);h.setComponent(_+v,S,b)}}else u.set(g.array,p);p+=g.count*n}return o!==void 0&&(h.gpuType=o),h}const mu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class no{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const M2=new Dp(-1,1,1,-1,0,1);class S2 extends sn{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}}const E2=new S2;class Lp{constructor(t){this._mesh=new qt(E2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,M2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class b2 extends no{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof yn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ml.clone(t.uniforms),this.material=new yn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Lp(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class S_ extends no{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class T2 extends no{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class A2{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new It);this._width=a.width,this._height=a.height,n=new Li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:va}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new b2(mu),this.copyPass.material.blending=ga,this.clock=new fx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}S_!==void 0&&(u instanceof S_?a=!0:u instanceof T2&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w2 extends no{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const R2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class jr extends no{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Li(c,u,{type:va}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Li(c,u,{type:va});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new Li(c,u,{type:va});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),u=Math.round(u/2)}const h=R2;this.highPassUniforms=Ml.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new It(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ml.clone(mu.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:mu.vertexShader,fragmentShader:mu.fragmentShader,blending:Gr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new Ns,this._fsQuad=new Lp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new It(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[p].uniforms.direction.value=jr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=jr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[];for(let a=0;a<t;a++)n.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new yn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new yn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}jr.BlurDirectionX=new It(1,0);jr.BlurDirectionY=new It(0,1);const su={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class C2 extends no{constructor(){super(),this.uniforms=Ml.clone(su.uniforms),this.material=new A1({name:su.name,uniforms:this.uniforms,vertexShader:su.vertexShader,fragmentShader:su.fragmentShader}),this._fsQuad=new Lp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ce.getTransfer(this._outputColorSpace)===ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===P_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===O_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===z_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Eu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===I_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===F_?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===B_&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const D2=""+new URL("diff-BWX8O4N9.jpg",import.meta.url).href,U2=""+new URL("nor-Coghta4t.jpg",import.meta.url).href,L2=""+new URL("arm-C5jTxzNS.jpg",import.meta.url).href,N2=""+new URL("diff-Bm1-mjSq.jpg",import.meta.url).href,P2=""+new URL("nor-DHnmy0gp.jpg",import.meta.url).href,O2=""+new URL("arm-CJOk52Rb.jpg",import.meta.url).href;function z2(r,t){return r.wrapS=r.wrapT=vu,r.colorSpace=t?Jn:pa,r.anisotropy=8,r.generateMipmaps=!0,r.minFilter=Qa,r.magFilter=Di,r.needsUpdate=!0,r}function B2(r=new L1){const t=(n,a)=>z2(r.load(n),a);return{rock:{diff:t(D2,!0),nor:t(U2,!1),arm:t(L2,!1),scale:.22,key:"rock_face_03"},sand:{diff:t(N2,!0),nor:t(P2,!1),arm:t(O2,!1),scale:.28,key:"dry_riverbed_rock"}}}const I2=`
vec3 triBlend(vec3 n){
  vec3 b=pow(abs(n),vec3(4.));
  return b/(b.x+b.y+b.z+1e-5);
}
vec3 triAlbedo(sampler2D map,vec3 p,vec3 b,float s){
  return texture2D(map,p.zy*s).rgb*b.x
       + texture2D(map,p.xz*s).rgb*b.y
       + texture2D(map,p.xy*s).rgb*b.z;
}
vec3 triArm(sampler2D map,vec3 p,vec3 b,float s){
  return texture2D(map,p.zy*s).rgb*b.x
       + texture2D(map,p.xz*s).rgb*b.y
       + texture2D(map,p.xy*s).rgb*b.z;
}
// Whiteout-blend OpenGL normals into world space, then to view space.
vec3 triNormalView(sampler2D map,vec3 p,vec3 wn,vec3 b,float s,mat4 viewMatrix){
  vec3 tx=texture2D(map,p.zy*s).xyz*2.-1.;
  vec3 ty=texture2D(map,p.xz*s).xyz*2.-1.;
  vec3 tz=texture2D(map,p.xy*s).xyz*2.-1.;
  tx.xy*=1.55;ty.xy*=1.55;tz.xy*=1.55;
  tx=vec3(tx.xy+wn.zy,abs(wn.x));
  ty=vec3(ty.xy+wn.xz,abs(wn.y));
  tz=vec3(tz.xy+wn.xy,abs(wn.z));
  vec3 n=normalize(tx.zyx*b.x+ty.xzy*b.y+tz.xyz*b.z);
  return normalize((viewMatrix*vec4(n,0.)).xyz);
}
`,Gi=Math.PI*2;let vd=91623;const gu=()=>(vd=1664525*vd+1013904223>>>0,vd/4294967296),le=(r,t)=>r+gu()*(t-r),ws=ma.clamp,Wt=(r=0,t=0,n=0)=>new k(r,t,n);function F2(r,t){return Math.sin(r*.063+Math.sin(t*.047)*2.3)*1.6+Math.sin(t*.09+r*.023)*1.3+Math.sin(r*.18+t*.12)*.5}function Pr(r,t){return-15+F2(r,t)+Math.max(0,Math.abs(r+Math.sin(t*.025)*13)-22)*.085-Math.max(0,-t-110)*.026}const E_=`
float hash21(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float valueNoise(vec2 p){vec2 i=floor(p), f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float caustic(vec2 p,float t){p+=vec2(sin(p.y*.6+t*.37),cos(p.x*.7+t*.29))*.8;float a=sin(p.x*1.9+p.y*.6+t*.52)+sin(p.y*2.1-p.x*.3-t*.41);float b=sin(p.x*2.6-p.y*.8-t*.32)+sin(p.y*2.5+p.x*.6+t*.38);return pow(1.-abs(sin(a+b)),16.);}
`;class H2{scene=new i1;camera;renderer;uniforms={uTime:{value:0}};host;hooks;clock=new fx;frame=0;alive=!0;playing=!1;started=!1;glide=!1;sound=!0;yaw=0;pitch=-.1;targetYaw=0;targetPitch=-.1;keys=new Set;velocity=Wt();move=Wt();forward=Wt();right=Wt();upAxis=Wt(0,1,0);position=Wt(0,3,35);touch={x:0,y:0,z:0};dragging=!1;lastPointer={x:0,y:0};listeners=[];creatures=[];fish;fishData=[];particles;kelpMaterials=[];colliders=[];dummy=new cn;statusAt=0;time=0;pausedTime=0;audioContext=null;master=null;observer;reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(t,n,a={}){if(this.host=t,this.hooks=n,this.camera=new $n(67,t.clientWidth/t.clientHeight,.12,600),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0),this.renderer=new y2({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.outputColorSpace=Jn,this.renderer.toneMapping=Eu,this.renderer.toneMappingExposure=1.18,this.renderer.setClearColor(676709),t.appendChild(this.renderer.domElement),this.scene.background=new ce(742243),this.scene.fog=new Tu(742243,.014),a.deferStart)return;const o=new ux(10019551,1783361,2.2);this.scene.add(o);const c=new rp(14811116,3.2);c.position.set(-35,65,-10),this.scene.add(c);const u=new rp(4770768,1.5);u.position.set(30,18,-60),this.scene.add(u),this.terrain(),this.rocks(),this.plants(),this.surface(),this.life(),this.suspendedParticles(),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.animate(),requestAnimationFrame(()=>n.onReady())}material(t,n="plain",a=.82,o=1,c){const u=new ln({color:t,roughness:a,metalness:n==="skin"?.05:0}),h=Math.max(0,o),p=!!c&&(n==="rock"||n==="sand");return u.onBeforeCompile=d=>{d.uniforms.uTime=this.uniforms.uTime,d.vertexShader=`varying vec3 vOceanWorld; varying vec3 vOceanLocal; varying vec3 vOceanWNormal;
`+d.vertexShader,d.vertexShader=d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOceanLocal=position;`),d.vertexShader=d.vertexShader.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
        vOceanWNormal=normalize(mat3(modelMatrix)*objectNormal);`),d.vertexShader=d.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 oceanPos=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          oceanPos=instanceMatrix*oceanPos;
        #endif
        vOceanWorld=(modelMatrix*oceanPos).xyz;`);let g=`uniform float uTime; varying vec3 vOceanWorld; varying vec3 vOceanLocal; varying vec3 vOceanWNormal;
`+E_;p&&c&&(d.uniforms.uPbrDiff={value:c.diff},d.uniforms.uPbrNor={value:c.nor},d.uniforms.uPbrArm={value:c.arm},d.uniforms.uPbrScale={value:c.scale},g+=`uniform sampler2D uPbrDiff;uniform sampler2D uPbrNor;uniform sampler2D uPbrArm;uniform float uPbrScale;
`+I2),d.fragmentShader=g+d.fragmentShader;let v="";if(p?v=`{
          vec3 wn=normalize(vOceanWNormal);
          vec3 b=triBlend(wn);
          vec3 albedo=triAlbedo(uPbrDiff,vOceanWorld,b,uPbrScale);
          vec3 arm=triArm(uPbrArm,vOceanWorld,b,uPbrScale);
          float wet=${n==="sand"?"0.5":"0.62"};
          albedo*=mix(1.,.62,wet);
          diffuseColor.rgb*=albedo*mix(.62,1.,arm.r);
        }`:(n==="sand"&&(v="float grain=valueNoise(vOceanWorld.xz*15.);float ripple=sin(vOceanWorld.x*.7+vOceanWorld.z*3.+valueNoise(vOceanWorld.xz*.11)*5.);diffuseColor.rgb*=.82+grain*.22+ripple*.07;"),n==="rock"&&(v="float n=valueNoise(vOceanWorld.xz*1.7+vOceanWorld.y*.8);float layer=sin(vOceanWorld.y*5.+valueNoise(vOceanWorld.xz)*3.);diffuseColor.rgb*=.67+n*.5+layer*.075;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.22,.16),smoothstep(.57,.84,n)*.6);")),n==="skin"&&(v="float blot=valueNoise(vOceanLocal.xz*5.+vOceanLocal.y*2.);float fine=valueNoise(vOceanLocal.xy*48.);float bands=sin(vOceanLocal.x*5.5+vOceanLocal.z*3.+blot*4.);diffuseColor.rgb*=.6+blot*.5+fine*.15;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.42,smoothstep(.5,.9,bands)*.45);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.54,.62,.49),(1.-smoothstep(-.75,.0,vOceanLocal.y))*.65);"),d.fragmentShader=d.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${v}`),p){const _=n==="sand"?"0.5":"0.62";d.fragmentShader=d.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          {
            vec3 wn=normalize(vOceanWNormal);vec3 b=triBlend(wn);
            vec3 arm=triArm(uPbrArm,vOceanWorld,b,uPbrScale);
            float wet=${_};
            roughnessFactor=clamp(mix(arm.g*roughnessFactor,arm.g*roughnessFactor*.35,wet),.06,.95);
          }`),d.fragmentShader=d.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
          {
            vec3 wn=normalize(vOceanWNormal);vec3 b=triBlend(wn);
            vec3 arm=triArm(uPbrArm,vOceanWorld,b,uPbrScale);
            metalnessFactor=clamp(arm.b,.0,.35);
          }`),d.fragmentShader=d.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            vec3 wn=normalize(vOceanWNormal);
            vec3 b=triBlend(wn);
            normal=triNormalView(uPbrNor,vOceanWorld,wn,b,uPbrScale,viewMatrix);
          }`)}p?d.fragmentShader=d.fragmentShader.replace("#include <opaque_fragment>",`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(.012*h).toFixed(4)};
#include <opaque_fragment>`):d.fragmentShader=d.fragmentShader.replace("#include <opaque_fragment>",`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(.055*h).toFixed(4)};
#include <opaque_fragment>`)},u.customProgramCacheKey=()=>`${n}:${h.toFixed(2)}:pbr${p?c.key:"0"}`,u}terrain(){const t=new es(700,700,180,180);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let o=0;o<n.count;o++)n.setY(o,Pr(n.getX(o),n.getZ(o)));t.computeVertexNormals();const a=new qt(t,this.material(11511685,"sand"));this.scene.add(a)}rocks(){const t=[this.material(8094578,"rock"),this.material(7567721,"rock"),this.material(6454124,"rock")],n=[];for(let o=0;o<5;o++){const c=new Ps(1,3),u=c.attributes.position;for(let h=0;h<u.count;h++){const p=u.getX(h),d=u.getY(h),g=u.getZ(h),v=1+.12*Math.sin(p*8+o)*Math.sin(g*7-d*4)+.055*Math.sin(d*19+p*8);u.setXYZ(h,p*v,d*v,g*v)}c.computeVertexNormals(),n.push(c)}const a=(o,c,u,h,p)=>{const d=new qt(n[Math.floor(gu()*5)],t[Math.floor(gu()*3)]);d.position.set(o,Pr(o,c)+h*.15,c),d.scale.set(u,h,p),d.rotation.set(le(-.2,.2),le(0,Gi),le(-.12,.12)),this.scene.add(d),u>3&&this.colliders.push({pos:d.position.clone(),radius:Math.min(u,p)*.88,height:h*.95})};for(let o=0;o<95;o++){const c=le(-205,95),h=(o%2?1:-1)*le(24,65)+Math.sin(c*.025)*8,p=le(3,10);a(h,c,p,le(4,15),p*le(.7,1.5))}a(-23,-16,13,19,15),a(-35,-24,17,24,14),a(34,-50,15,22,17),a(43,-69,18,28,14);for(let o=0;o<210;o++){const c=le(-160,160),u=le(-230,140),h=le(.3,2.8);a(c,u,h,h*le(.4,1),h*le(.6,1.5))}a(-28,-103,8,20,7),a(-3,-103,6,18,7),a(-15,-103,17,4,6)}plantMaterial(t){const n=this.material(t,"plain",.9);n.side=Fn;const a=n.onBeforeCompile;return n.onBeforeCompile=(o,c)=>{a(o,c),o.vertexShader=`attribute float aBend;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("vOceanLocal=position;",`vOceanLocal=position; vec3 ip=vec3(0.);
      #ifdef USE_INSTANCING
      ip=instanceMatrix[3].xyz;
      #endif
      transformed.x+=sin(uTime*.6+ip.x*.3+position.y*.7)*aBend*.35;
      transformed.z+=sin(uTime*.43+ip.z*.4+position.y*.45)*aBend*.25;`),o.vertexShader=`uniform float uTime;
`+o.vertexShader},n.customProgramCacheKey=()=>`plant${t}`,n}plants(){const t=(u,h,p)=>{const d=[],g=[],v=[],_=[];for(let b=0;b<=12;b++){let M=b/12;const y=h*Math.pow(Math.sin(Math.PI*M*.95),.7)+.008;for(let L=-1;L<=1;L+=2)d.push(L*y+Math.sin(M*2)*p,u*M,Math.sin(M*3)*p*.45),g.push((L+1)/2,M),_.push(M*M*u*.3);if(b<12){let L=b*2;v.push(L,L+1,L+2,L+1,L+3,L+2)}}const S=new sn;return S.setAttribute("position",new ye(d,3)),S.setAttribute("uv",new ye(g,2)),S.setAttribute("aBend",new ye(_,1)),S.setIndex(v),S.computeVertexNormals(),S};for(let u=0;u<3;u++){const h=t(u===2?9:2.5,u===2?.25:.09,.2),p=this.plantMaterial([4352834,6584125,5270332][u]),d=u===2?480:1900,g=new kv(h,p,d);for(let v=0;v<d;v++){let _=le(-110,110),x=le(-220,100);const S=Math.abs(_+Math.sin(x*.035)*8);S<13&&(_+=Math.sign(_||1)*(15-S)),this.dummy.position.set(_,Pr(_,x)-.1,x),this.dummy.rotation.set(le(-.08,.08),le(0,Gi),0);const b=le(.5,1.7);this.dummy.scale.set(b,b,b),this.dummy.updateMatrix(),g.setMatrixAt(v,this.dummy.matrix)}this.scene.add(g)}const n=[],a=(u,h,p)=>{const d=h.clone().sub(u),g=new Rn(p*.48,p,d.length(),5,1);g.applyQuaternion(new Jr().setFromUnitVectors(Wt(0,1,0),d.normalize())),g.translate((u.x+h.x)/2,(u.y+h.y)/2,(u.z+h.z)/2),n.push(g)},o=(u,h,p,d)=>{const g=u.clone().add(Wt(Math.sin(h)*p,Math.cos(h)*p,le(-.13,.13)));a(u,g,d*.025+.014),d>0&&(o(g,h-.43,p*.7,d-1),o(g,h+.4,p*.74,d-1))};o(Wt(),0,1.05,4);const c=pu(n);if(n.forEach(u=>u.dispose()),c){const u=[this.material(10184030),this.material(9600599),this.material(6454643)];for(let h=0;h<90;h++){const p=new qt(c,u[h%3]),d=le(-65,65),g=le(-170,60);p.position.set(d,Pr(d,g),g),p.rotation.y=le(0,Gi),p.scale.setScalar(le(.6,1.4)),this.scene.add(p)}}}surface(){const t=new yn({uniforms:{uTime:this.uniforms.uTime},side:Fn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 wp; uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.09+uTime*.25)*.3+sin(p.y*.11-uTime*.3)*.2;wp=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`varying vec3 wp;uniform float uTime;${E_}void main(){float c=caustic(wp.xz*.16,uTime*.7);float n=valueNoise(wp.xz*.025+uTime*.02);vec3 col=mix(vec3(.1,.48,.54),vec3(.55,.86,.81),n);col+=c*.24;float sun=exp(-length(wp.xz-vec2(-38.,-36.))*.014);col+=vec3(.35,.4,.3)*sun;gl_FragColor=vec4(col,.89);}`}),n=new qt(new es(800,800,55,55),t);n.rotation.x=-Math.PI/2,n.position.y=26,this.scene.add(n);const a=new yn({uniforms:{uTime:this.uniforms.uTime},transparent:!0,depthWrite:!1,side:Fn,blending:Gr,vertexShader:"varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying vec3 wPos;uniform float uTime;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float vertical=sin(vUv.y*3.14159);float pulse=.78+sin(wPos.x*.14+uTime*.21)*.12;gl_FragColor=vec4(.38,.78,.67,edge*vertical*pulse*.038);}"});for(let o=0;o<30;o++){const c=le(34,54),u=new qt(new Rn(le(.3,1.2),le(2,5),c,16,1,!0),a);u.position.set(le(-85,95),26-c*.48,le(-130,55)),u.rotation.z=-.26,u.rotation.x=.13,this.scene.add(u)}}ellipsoid(t,n,a,o,c,u,h,p){const d=new Ja(1,32,20);d.scale(u,h,p),d.translate(a,o,c);const g=new qt(d,n);return t.add(g),g}tube(t,n,a,o=56,c=12){const u=new yu(t),h=u.computeFrenetFrames(o,!1),p=[],d=[],g=[];for(let _=0;_<=o;_++){const x=_/o,S=u.getPoint(x),b=x*(n.length-1),M=Math.min(Math.floor(b),n.length-2),y=ma.lerp(n[M],n[M+1],b-M);for(let L=0;L<=c;L++){const U=L/c*Gi,A=S.clone().addScaledVector(h.normals[_],Math.cos(U)*y).addScaledVector(h.binormals[_],Math.sin(U)*y);if(p.push(A.x,A.y,A.z),d.push(L/c,x),_<o&&L<c){const P=_*(c+1)+L,O=P+c+1;g.push(P,P+1,O,O,P+1,O+1)}}}const v=new sn;return v.setAttribute("position",new ye(p,3)),v.setAttribute("uv",new ye(d,2)),v.setIndex(g),v.computeVertexNormals(),new qt(v,a)}flipper(t,n,a){const o=[],c=[],u=[];for(let g=0;g<=20;g++){const v=g/20,_=Math.max(.015,Math.pow(Math.sin(Math.PI*v),.7)*a);for(let x=0;x<=12;x++){const S=x/12*Gi;if(o.push(-v*v*n*.32+_*Math.cos(S),Math.sin(S)*_*.18,v*n),c.push(x/12,v),g<20&&x<12){const b=g*13+x;u.push(b,b+1,b+12+1,b+1,b+12+2,b+12+1)}}}const d=new sn;return d.setAttribute("position",new ye(o,3)),d.setAttribute("uv",new ye(c,2)),d.setIndex(u),d.computeVertexNormals(),new qt(d,t)}plesiosaur(t=1){const n=new xn,a=this.material(5532e3,"skin",.51),o=[];this.ellipsoid(n,a,0,0,0,2.6,.92,1.24),n.add(this.tube([Wt(1.3,.2),Wt(2.8,.38),Wt(4.3,1.06),Wt(5.8,1.7),Wt(7.1,1.86)],[.76,.46,.32,.25,.22],a)),this.ellipsoid(n,a,7.38,1.88,0,.65,.3,.31),this.ellipsoid(n,a,7.79,1.79,0,.42,.15,.22);const c=new ln({color:397841,roughness:.12,metalness:.3});for(const h of[-1,1]){this.ellipsoid(n,this.material(9144688),7.37,2.01,h*.262,.11,.095,.039),this.ellipsoid(n,c,7.4,2.014,h*.294,.065,.06,.024);const p=this.tube([Wt(7.34,1.73,h*.265),Wt(7.78,1.72,h*.205),Wt(8.02,1.75,h*.105)],[.012,.012,.006],c,12,4);n.add(p);for(let d=0;d<2;d++){const g=new xn;g.position.set(d===0?1.2:-1.65,-.34,h*.85);const v=this.flipper(a,d===0?3.3:2.8,.68);h<0&&(v.rotation.x=Math.PI),g.add(v),g.userData.side=h,g.userData.phase=d*.8,n.add(g),o.push(g)}}const u=new xn;return u.position.x=-1.9,u.add(this.tube([Wt(),Wt(-1.7,-.1),Wt(-3.4,-.06),Wt(-4.2,.03)],[.7,.36,.12,.012],a,36)),n.add(u),n.scale.setScalar(t),{group:n,fins:o,tail:u,kind:"plesiosaur",scale:t}}ichthyosaur(t=1){const n=new xn,a=this.material(4810096,"skin",.42),o=[];this.ellipsoid(n,a,0,0,0,2.6,.77,.73),n.add(this.tube([Wt(1.5,0),Wt(2.5,-.03),Wt(3.65,-.14)],[.57,.31,.045],a,35));const c=new ln({color:397843,roughness:.15});for(const p of[-1,1]){this.ellipsoid(n,c,1.75,.27,p*.45,.12,.13,.06);const d=new xn;d.position.set(.9,-.25,p*.58);const g=this.flipper(a,1.7,.4);p<0&&(g.rotation.x=Math.PI),d.add(g),d.userData.side=p,d.userData.phase=0,n.add(d),o.push(d)}const u=this.flipper(a,1.3,.6);u.rotation.x=-Math.PI/2,u.position.set(-.35,.55,0),n.add(u);const h=new xn;h.position.x=-1.9,h.add(this.tube([Wt(),Wt(-1.3,0),Wt(-2.15,0)],[.5,.23,.06],a,24));for(const p of[-1,1]){const d=this.flipper(a,1.35,.42);d.position.x=-2,d.rotation.x=p*Math.PI/2,h.add(d)}return n.add(h),n.scale.setScalar(t),{group:n,fins:o,tail:h,kind:"ichthyosaur",scale:t}}spinosaurus(t=1){const n=new xn,a=this.material(6777171,"skin",.7),o=[];this.ellipsoid(n,a,0,0,0,2.4,1.1,.87),n.add(this.tube([Wt(1.5,.3),Wt(2.6,.75),Wt(3.4,.8)],[.66,.43,.36],a,32)),this.ellipsoid(n,a,3.8,.75,0,.94,.39,.37),this.ellipsoid(n,a,4.55,.62,0,.85,.22,.23);const c=[],u=[],h=[];for(let _=0;_<=28;_++){const x=_/28,S=-2.25+x*4.3,b=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);if(c.push(S,.4,0,S,b,0),h.push(x,0,x,1),_<28){const M=_*2;u.push(M,M+1,M+2,M+1,M+3,M+2)}}const p=new sn;p.setAttribute("position",new ye(c,3)),p.setAttribute("uv",new ye(h,2)),p.setIndex(u),p.computeVertexNormals();const d=this.material(6705990,"skin");d.side=Fn,n.add(new qt(p,d));for(let _=0;_<15;_++){const x=_/14,S=-2.2+x*4.2,b=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);n.add(this.tube([Wt(S,.6,.02),Wt(S-.1,b*.6,.02),Wt(S,b,.02)],[.045,.031,.012],a,8,5))}const g=new ln({color:1382674,roughness:.3});for(const _ of[-1,1]){this.ellipsoid(n,g,3.51,.98,_*.326,.07,.07,.034);const x=new xn;x.position.set(-1.25,-.5,_*.58),x.add(this.tube([Wt(),Wt(-.2,-.85,_*.5),Wt(.15,-1.2,_*.6),Wt(-.45,-1.35,_*.76)],[.45,.29,.15,.03],a,24)),n.add(x),x.userData.side=_,x.userData.phase=1,o.push(x);const S=new xn;S.position.set(1.3,-.45,_*.55),S.add(this.tube([Wt(),Wt(.13,-.56,_*.4),Wt(.8,-.66,_*.5)],[.21,.12,.04],a,20)),n.add(S),S.userData.side=_,S.userData.phase=0,o.push(S)}const v=new xn;return v.position.x=-1.8,v.add(this.tube([Wt(),Wt(-1.7,0),Wt(-3.5,.08),Wt(-5.5,0)],[.7,.48,.27,.012],a,48)),n.add(v),n.scale.setScalar(t),{group:n,fins:o,tail:v,kind:"spinosaur",scale:t}}ammonite(){const t=new xn,n=this.material(12101252,"plain",.65),a=[],o=[],c=100;for(let v=0;v<=c;v++){const _=v/c,x=_*Gi*2.3,S=.06+Math.pow(_,1.65)*.85;a.push(Wt(Math.cos(x)*S,Math.sin(x)*S,0)),o.push(.015+Math.pow(_,1.6)*.24)}t.add(this.tube(a,o,n,150,12));const u=a[a.length-1],h=this.material(9600610);for(let v=0;v<7;v++){const _=v/7*Gi;t.add(this.tube([u.clone(),u.clone().add(Wt(.45,Math.sin(_)*.16,Math.cos(_)*.16)),u.clone().add(Wt(.9,Math.sin(_)*.35,Math.cos(_)*.3)),u.clone().add(Wt(1.02,Math.sin(_)*.24,Math.cos(_)*.3))],[.037,.033,.021,.001],h,16,5))}const p=this.material(7826774);for(let v=30;v<c;v+=3){const _=a[v],x=o[v]*1.025,S=new qt(new Au(x,.008,4,12),p);S.position.copy(_);const b=a[Math.min(v+1,c)].clone().sub(a[Math.max(0,v-1)]).normalize();S.quaternion.setFromUnitVectors(Wt(0,0,1),b),t.add(S)}const d=new xn,g=new Map;for(const v of t.children){const _=v;_.updateMatrix();const x=_.geometry.clone().applyMatrix4(_.matrix),S=_.material;g.has(S)||g.set(S,[]),g.get(S).push(x)}for(const[v,_]of g){const x=pu(_);x&&d.add(new qt(x,v)),_.forEach(S=>S.dispose())}return t.children.forEach(v=>v.geometry.dispose()),d}life(){const t=(h,p,d,g,v)=>{const _={...h,center:p,radius:d,speed:g,phase:v};this.creatures.push(_),this.scene.add(_.group)};t(this.plesiosaur(1.15),Wt(28,7,-8),28,.017,Math.PI*.72),t(this.plesiosaur(.78),Wt(-48,12,-108),38,.014,1.8),t(this.ichthyosaur(.9),Wt(30,2,-58),38,.06,.8),t(this.ichthyosaur(.67),Wt(26,5,-62),38,.06,.96),t(this.spinosaurus(1.2),Wt(-22,21,-45),48,.012,-.5),t(this.plesiosaur(1.35),Wt(55,-2,-180),40,.015,2.5),t(this.ichthyosaur(1.1),Wt(-80,4,28),48,.048,.5);const n=this.ammonite();for(let h=0;h<13;h++){const p=h===0?n:n.clone(),d=le(-42,42),g=le(-110,22);p.position.set(d,Pr(d,g)+le(3,8),g),p.rotation.set(le(-.2,.2),le(0,Gi),le(-.1,.1)),p.scale.setScalar(le(.55,1.1)),p.userData.origin=p.position.clone(),p.userData.phase=gu()*Gi,p.userData.ammonite=!0,this.scene.add(p)}const a=new Ja(1,10,6);a.scale(.5,.16,.09);const o=new bp(.23,.35,3);o.rotateZ(Math.PI/2),o.scale(1,1,.25),o.translate(-.53,0,0);const c=pu([a,o]);this.fish=new kv(c,this.material(10268315,"plain",.45),350),this.scene.add(this.fish);const u=[Wt(-14,5,-31),Wt(38,11,-35),Wt(0,16,-90),Wt(-48,1,-120),Wt(30,-3,25)];for(let h=0;h<350;h++)this.fishData.push({center:u[h%5].clone().add(Wt(le(-6,6),le(-3,3),le(-6,6))),phase:le(0,Gi),radius:le(3,8),speed:le(.11,.2),size:le(.35,1.05)})}suspendedParticles(){const n=new Float32Array(5400);for(let c=0;c<1800;c++)n[c*3]=le(-110,110),n[c*3+1]=le(-16,26),n[c*3+2]=le(-110,110);const a=new sn;a.setAttribute("position",new hi(n,3));const o=new yn({uniforms:{uTime:this.uniforms.uTime,uPixelRatio:{value:this.renderer.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Gr,vertexShader:"uniform float uTime;uniform float uPixelRatio;varying float a;void main(){vec3 p=position;p.x+=sin(uTime*.14+position.z)*.22;p.y+=sin(uTime*.18+position.x)*.25;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));}"});this.particles=new u1(a,o),this.scene.add(this.particles)}bind(){const t=(a,o,c)=>{a.addEventListener(o,c),this.listeners.push(()=>a.removeEventListener(o,c))};t(window,"keydown",(a=>{this.playing&&(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","ControlLeft"].includes(a.code)&&(a.preventDefault(),this.keys.add(a.code)),a.code==="Escape"&&this.pause(),a.code==="KeyH"&&!a.repeat&&this.hooks.onToggleUI(),a.code==="KeyG"&&!a.repeat&&(this.setGlide(!this.glide),this.hooks.onGlide(this.glide)))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>{this.keys.clear(),this.playing&&this.pause()})),t(document,"visibilitychange",(()=>{document.hidden&&this.playing&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing&&(this.dragging=!0,this.lastPointer={x:a.clientX,y:a.clientY},n.setPointerCapture(a.pointerId),a.pointerType==="mouse"&&document.pointerLockElement!==n))try{const o=n.requestPointerLock?.();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}})),t(n,"pointerup",(()=>{this.dragging=!1})),t(n,"pointercancel",(()=>{this.dragging=!1})),t(document,"pointermove",(a=>{if(!this.playing)return;const o=document.pointerLockElement===n;if(!o&&!this.dragging)return;const c=o?a.movementX:a.clientX-this.lastPointer.x,u=o?a.movementY:a.clientY-this.lastPointer.y;this.targetYaw-=c*.0021,this.targetPitch=ws(this.targetPitch-u*.0021,-1.47,1.47),this.lastPointer={x:a.clientX,y:a.clientY}})),t(document,"pointerlockchange",(()=>{!document.pointerLockElement&&this.playing&&!this.dragging&&this.pause()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.pause(),this.hooks.onError("The graphics connection was interrupted. Refresh to return to the ocean.")}))}start(){if(this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.initAudio(),this.sound&&this.audioContext?.resume().catch(()=>{}),window.matchMedia("(pointer:fine)").matches)try{const t=this.renderer.domElement.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}pause(){this.playing&&(this.playing=!1,this.glide=!1,this.keys.clear(),this.touch={x:0,y:0,z:0},this.velocity.set(0,0,0),this.dragging=!1,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.hooks.onPause())}reset(){this.position.set(0,3,35),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=-.1,this.velocity.set(0,0,0),this.glide=!1,this.time=0}setGlide(t){this.glide=t}touchMove(t,n){this.touch.x=ws(t,-1,1),this.touch.y=ws(n,-1,1)}touchVertical(t){this.touch.z=t}setSound(t){this.sound=t,this.master&&this.audioContext&&this.master.gain.setTargetAtTime(t?.35:0,this.audioContext.currentTime,.3),t&&this.playing&&this.audioContext?.resume().catch(()=>{})}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.35:0,this.master.connect(n.destination);const a=n.createBuffer(2,n.sampleRate*8,n.sampleRate);for(let v=0;v<2;v++){let _=0;const x=a.getChannelData(v);for(let S=0;S<x.length;S++)_=(_+(Math.random()*2-1)*.03)/1.018,x[S]=_*4}const o=n.createBufferSource();o.buffer=a,o.loop=!0;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.45;const u=n.createGain();u.gain.value=.42,o.connect(c),c.connect(u),u.connect(this.master),o.start();const h=n.createOscillator(),p=n.createGain();h.frequency.value=.07,p.gain.value=160,h.connect(p),p.connect(c.frequency),h.start();const d=n.createOscillator(),g=n.createGain();d.type="sine",d.frequency.value=47,g.gain.value=.055,d.connect(g),g.connect(this.master),d.start()}catch{}}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);(this.playing||!this.started)&&(this.time+=t);const n=this.time;if(this.uniforms.uTime.value=n,this.playing){const u=(...v)=>v.some(_=>this.keys.has(_))?1:0;this.yaw=ma.lerp(this.yaw,this.targetYaw,1-Math.exp(-14*t)),this.pitch=ma.lerp(this.pitch,this.targetPitch,1-Math.exp(-14*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize();const h=u("KeyW","ArrowUp")-u("KeyS","ArrowDown")+(this.glide?.52:0)+this.touch.y,p=u("KeyD","ArrowRight")-u("KeyA","ArrowLeft")+this.touch.x,d=u("KeyE","Space")-u("KeyQ","ControlLeft")+this.touch.z;this.move.copy(this.forward).multiplyScalar(h).addScaledVector(this.right,p),this.move.y+=d,this.move.lengthSq()>1&&this.move.normalize();const g=u("ShiftLeft","ShiftRight")?8.2:3.8;this.move.multiplyScalar(g),this.velocity.lerp(this.move,1-Math.exp(-2.1*t)),this.position.addScaledVector(this.velocity,t),this.position.x=ws(this.position.x,-245,245),this.position.z=ws(this.position.z,-265,245),this.position.y=ws(this.position.y,Pr(this.position.x,this.position.z)+1.8,24.2);for(const v of this.colliders){if(Math.abs(this.position.y-v.pos.y)>v.height+1)continue;const _=this.position.x-v.pos.x,x=this.position.z-v.pos.z,S=Math.sqrt(_*_+x*x);if(S<v.radius+.85&&S>.001){const b=v.radius+.85-S;this.position.x+=_/S*b,this.position.z+=x/S*b}}this.camera.position.copy(this.position),this.reduced||(this.camera.position.y+=Math.sin(n*.9)*.026)}else!this.started&&!this.reduced&&this.camera.rotation.set(-.09+Math.sin(n*.1)*.018,Math.sin(n*.08)*.025,0);for(const u of this.creatures){const h=n*u.speed+u.phase,p=u.center.x+Math.cos(h)*u.radius,d=u.center.z+Math.sin(h)*u.radius*.58;u.group.position.set(p,u.center.y+Math.sin(n*.3+u.phase)*.35,d),u.group.rotation.y=Math.atan2(-Math.cos(h)*.58,-Math.sin(h)),u.group.rotation.z=Math.sin(n*.3+u.phase)*.025,u.fins.forEach(g=>{g.rotation.x=Math.sin(n*1.25+(g.userData.phase||0)+u.phase)*.22*(g.userData.side||1),g.rotation.z=Math.sin(n*1.25+(g.userData.phase||0)+u.phase+.7)*.07}),u.tail.rotation.y=Math.sin(n*(u.kind==="ichthyosaur"?3:1.3)+u.phase)*(u.kind==="ichthyosaur"?.22:.11)}for(let u=0;u<this.fishData.length;u++){const h=this.fishData[u],p=n*h.speed+h.phase;this.dummy.position.set(h.center.x+Math.cos(p)*h.radius,h.center.y+Math.sin(p*2)*.7,h.center.z+Math.sin(p)*h.radius*.5),this.dummy.rotation.set(0,Math.atan2(-Math.cos(p)*.5,-Math.sin(p)),Math.cos(p*2)*.035),this.dummy.scale.set(h.size,h.size,h.size),this.dummy.updateMatrix(),this.fish.setMatrixAt(u,this.dummy.matrix)}this.fish.instanceMatrix.needsUpdate=!0;for(const u of this.scene.children)u.userData.ammonite&&(u.position.y=u.userData.origin.y+Math.sin(n*.28+u.userData.phase)*.35,u.rotation.z=Math.sin(n*.23+u.userData.phase)*.09);this.particles.position.set(Math.floor(this.position.x/80)*80,0,Math.floor(this.position.z/80)*80);const a=this.scene.fog,o=ws((-this.position.z-75)/160,0,1);a.density=.013+o*.006;const c=new ce(742243).lerp(new ce(404547),o*.75);a.color.copy(c),this.scene.background.copy(c),n-this.statusAt>.25&&(this.statusAt=n,this.hooks.onStatus(26-this.position.y,this.position.z<-130?"The blue beyond":this.position.z<-65?"The ancient reef":Math.abs(this.position.x)>40?"The underwater forest":"The sunlit shallows")),this.renderer.render(this.scene,this.camera)};dispose(){this.alive=!1,cancelAnimationFrame(this.frame),this.listeners.forEach(a=>a()),this.observer?.disconnect(),this.audioContext?.close().catch(()=>{});const t=new Set,n=new Set;this.scene.traverse(a=>{const o=a;o.geometry&&t.add(o.geometry),o.material&&(Array.isArray(o.material)?o.material:[o.material]).forEach(u=>n.add(u))}),t.forEach(a=>a.dispose()),n.forEach(a=>a.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}}function G2(r,t){const n=r.createAnalyser();return n.fftSize=2048,t.connect(n).connect(r.destination),n}function V2(r,t){for(const[n,a]of[[0,660],[.2,880]]){const o=r.createOscillator(),c=r.createGain(),u=r.currentTime+n;o.frequency.value=a,c.gain.setValueAtTime(0,u),c.gain.linearRampToValueAtTime(.18,u+.015),c.gain.exponentialRampToValueAtTime(.001,u+.18),o.connect(c).connect(t),o.start(u),o.stop(u+.2),o.onended=()=>{o.disconnect(),c.disconnect()}}}function k2(r,t){const n=r.currentTime,a=.028,o=r.createBuffer(1,Math.max(1,Math.round(r.sampleRate*a)),r.sampleRate),c=o.getChannelData(0);for(let v=0;v<c.length;v++)c[v]=Math.random()*2-1;const u=r.createBufferSource();u.buffer=o;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=2800,h.Q.value=1.1;const p=r.createGain();p.gain.setValueAtTime(.72,n),p.gain.exponentialRampToValueAtTime(.001,n+a),u.connect(h).connect(p).connect(t),u.start(n),u.stop(n+a),u.onended=()=>{u.disconnect(),h.disconnect(),p.disconnect()};const d=r.createOscillator(),g=r.createGain();d.type="square",d.frequency.value=1650,g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(.28,n+.001),g.gain.exponentialRampToValueAtTime(.001,n+.018),d.connect(g).connect(t),d.start(n),d.stop(n+.022),d.onended=()=>{d.disconnect(),g.disconnect()}}const X2=""+new URL("underwater-ambience-CTuF1-BE.mp3",import.meta.url).href;class W2{constructor(t,n){this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0,this.gain.connect(n)}buffer=null;loading=null;source=null;gain;generation=0;disposed=!1;abort=new AbortController;async start(){if(this.disposed||this.source)return;const t=this.generation;if(this.buffer||(this.loading??=fetch(X2,{signal:this.abort.signal}).then(a=>{if(!a.ok)throw new Error(`Music download failed: ${a.status}`);return a.arrayBuffer()}).then(a=>this.ctx.decodeAudioData(a)).catch(a=>{throw this.loading=null,a}),this.buffer=await this.loading),this.disposed||t!==this.generation||this.source||this.ctx.state==="closed")return;const n=this.ctx.createBufferSource();n.buffer=this.buffer,n.loop=!0,n.connect(this.gain),this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.65,this.ctx.currentTime+1.5),n.start(),this.source=n}reset(){this.generation++,this.source?.stop(),this.source?.disconnect(),this.source=null}dispose(){this.disposed=!0,this.abort.abort(),this.reset(),this.gain.disconnect()}}const Wi=4,vx=.65,Np=7.1,q2={x:0,y:3,z:-12},lp={x:0,y:2,z:-112},pl={x:32,y:3,z:-12};function _x(r){return Math.max(0,Np-r)}const Y2=8.7,j2=22.05,Z2=4.1,_d={chase:2.7,patrol:1.3,alert:.5};function K2(r,t,n){const a=Math.max(-1,Math.min(1,t));if(Math.abs(a)>.01){const o=Math.sign(a);return r+(o-r)*(1-Math.exp(-1.35*n))}return r*Math.exp(-.55*n)}function Q2(r,t,n,a,o){const c=a?j2:Y2,u=Math.hypot(t.x,t.y,t.z);let h=0,p=n*Z2,d=0;if(u>1e-6){const _=c/u;h=t.x*_,p+=t.y*_,d=t.z*_}const v=-1.8*Math.hypot(r.x,r.y,r.z);h+=r.x*v,p+=r.y*v,d+=r.z*v,r.x+=h*o,r.y+=p*o,r.z+=d*o}const xx={stone:{name:"Limestone",short:"Stone",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},wood:{name:"Driftwood",short:"Wood",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},flare:{name:"Signal flare",short:"Flare",description:"R · Deploy a 12-second distraction at your position.",hint:"R use · consumed"},air:{name:"Air reserve",short:"Air",description:"R · Restore up to 60 seconds of air (consumed).",hint:"R use · consumed"},bandage:{name:"Sealant kit",short:"Sealant",description:"R · Repair 45 suit integrity (consumed).",hint:"R use · consumed"},relic:{name:"Ammonite relic",short:"Relic",description:"Cannot use here — carry to the extraction pool.",hint:"Carry to extract · do not drop"}},Zr=new Set,ns=(r,t,n,a)=>{for(let o=r;o<=t;o++)for(let c=n;c<=a;c++)Zr.add(`${o},${c}`)};ns(8,14,1,5);ns(10,12,5,11);ns(4,18,11,24);ns(10,12,24,26);ns(8,14,26,30);for(let r=9;r<=12;r++)for(let t=15;t<=20;t++)Zr.delete(`${r},${t}`);ns(19,19,4,20);ns(18,19,20,21);ns(17,21,1,4);const Ka=(r,t)=>({x:(r-11)*Wi,y:3,z:-t*Wi}),Br=r=>({col:Math.round(r.x/Wi)+11,row:Math.round(-r.z/Wi)}),ui=(r,t)=>Math.hypot(r.x-t.x,r.y-t.y,r.z-t.z);function cp(r,t){return Zr.has(`${Math.round(r/Wi)+11},${Math.round(-t/Wi)}`)}function J2(r,t=.48){if(r.y<vx||r.y>Np)return!1;for(let n=0;n<8;n++)if(!cp(r.x+Math.cos(n*Math.PI/4)*t,r.z+Math.sin(n*Math.PI/4)*t))return!1;return cp(r.x,r.z)}function yx(r,t,n,a,o=.48){const c=Math.max(1,Math.ceil(Math.hypot(t,n,a)/.25));for(let u=0;u<c;u++)for(const[h,p]of[["x",t],["y",n],["z",a]]){const d={...r,[h]:r[h]+p/c};J2(d,o)&&(r[h]=d[h])}}function ru(r,t){const n=Math.ceil(ui(r,t)/.4);for(let a=0;a<=n;a++){const o=n?a/n:0;if(!cp(r.x+(t.x-r.x)*o,r.z+(t.z-r.z)*o))return!1}return!0}function Su(r,t){return r>=4&&r<=18&&t>=12&&t<=28&&Zr.has(`${r},${t}`)}function $2(r,t){const n=Br(r),a=Br(t),o=`${n.col},${n.row}`,c=`${a.col},${a.row}`;if(!Su(a.col,a.row))return[];const u=[o],h=new Map([[o,null]]);for(let g=0;g<u.length;g++){const v=u[g];if(v===c)break;const[_,x]=v.split(",").map(Number);for(const[S,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const M=`${_+S},${x+b}`;Su(_+S,x+b)&&!h.has(M)&&(h.set(M,v),u.push(M))}}if(!h.has(c))return[];const p=[];let d=c;for(;d&&d!==o;){const[g,v]=d.split(",").map(Number);p.unshift(Ka(g,v)),d=h.get(d)}return p}const b_=.003,ou=(r,t,n,a)=>({yaw:r-n*b_,pitch:Math.max(-1.4,Math.min(1.4,t-a*b_))}),tw=1.45,rl={intensity:85,distance:34,decay:1.15,beamOpacity:.09},ew={r:.18,g:.11,b:.08},nw={r:.62,g:.38,b:.28},iw={r:.06,g:.08,b:.1},aw={r:.2,g:.3,b:.4},Hr=(r,t,n)=>r+(t-r)*n,T_=(r,t,n)=>({r:Hr(r.r,t.r,n),g:Hr(r.g,t.g,n),b:Hr(r.b,t.b,n)}),ll=r=>(r.r+r.g+r.b)/3;function A_(r,t){const n=Np-vx,a=Math.max(0,Math.min(1,1-_x(r)/n)),o=Math.max(-1,Math.min(1,-t/1.4)),c=Math.max(0,-o),u=Math.max(0,o),h=Math.max(0,Math.min(1,1-a+c*.22-u*.12));return{clarity:a,aimUp:o,floorBias:c,ceilingBias:u,murkEff:h}}function w_(r){return{direct:T_(ew,nw,r),backscatter:T_(iw,aw,r)}}function R_(r,t=.05){return-Math.log(t)/Math.max(1e-4,ll(r))}function lu(r,t){return{r:Math.exp(-r.r*t),g:Math.exp(-r.g*t),b:Math.exp(-r.b*t)}}function C_(r,t){const{clarity:n,aimUp:a,floorBias:o,ceilingBias:c,murkEff:u}=A_(r,t),{direct:h,backscatter:p}=w_(u),d=A_(3,0),g=w_(d.murkEff),v=R_(h)*(1+a*.1-o*.06),_=R_(g.direct),x=Math.min(52,rl.distance*(v/_)),S=lu(h,.8),b=lu(g.direct,.8),M=(S.r+S.g+S.b)/3,y=(b.r+b.g+b.b)/3,L=(1-u*.18)/(1-d.murkEff*.18),U=rl.intensity*(M/y)*(1+a*.16)*L,A=rl.decay+.55*(ll(h)-ll(g.direct)),P=Math.min(x*.35,8),O=lu(h,P),I=Math.max(O.r,O.g,O.b,1e-4);let G=O.r/I,R=O.g/I,D=O.b/I;G=Hr(G,.62,u*.5),R=Hr(R,.55,u*.35),D=Hr(D,.4,u*.55),G=Math.max(0,Math.min(1,G)),R=Math.max(0,Math.min(1,R)),D=Math.max(0,Math.min(1,D));const V=Math.min(12,x*.55),j=Math.min(12,rl.distance*.55),rt=1-Math.exp(-ll(p)*V),ut=1-Math.exp(-ll(g.backscatter)*j),ft=.72+n*.45,B=.72+d.clarity*.45,tt=Math.max(.004,rl.beamOpacity*(rt/Math.max(1e-4,ut))*(ft/B)*(1+a*.22)),q=lu(p,V*.4),ot=Math.max(q.r,q.g,q.b,1e-4),N=Math.max(0,Math.min(1,.42+.35*(1-q.r/ot)+c*.04)),Z=Math.max(0,Math.min(1,.55+.3*(1-q.g/ot))),dt=Math.max(0,Math.min(1,.48+.42*(q.b/ot)+c*.08-o*.12)),vt=Math.max(0,Math.min(1,.35+n*.55+a*.12));return{intensity:U,distance:x,decay:A,beamOpacity:tt,particle:vt,r:G,g:R,b:D,beamR:N,beamG:Z,beamB:dt,betaDirect:h,betaBackscatter:p}}function D_(r,t,n){if(n<=0)return 0;const o=(Math.max(0,Math.min(1,(r-t)/n))-.5)*2,c=.2,u=Math.abs(o);if(u<=c)return 0;const h=(u-c)/(1-c);return Math.sign(o)*h*h}const Mx="painted-abyss.inventoryTipsSeen";function U_(){try{return globalThis.localStorage?.getItem(Mx)==="1"}catch{return!1}}function sw(){try{globalThis.localStorage?.setItem(Mx,"1")}catch{}}class L_{position={...q2};health=100;air=240;elapsed=0;stamina=100;torch=!0;buoyancy=0;inventory=["stone","wood","flare","air","bandage"];selected=0;pickups=[{id:1,item:"relic",position:{...lp}},{id:2,item:"flare",position:{x:-20,y:2,z:-56}}];nextId=3;pending=null;outcome="playing";reason="";tipsSeen=!1;notice="";noticeUntil=0;feedbackKind="";feedbackPulse=0;predator={position:Ka(16,19),state:"patrol",timer:0,lost:0,lastKnown:Ka(16,19),waypoint:0,bite:0,heading:0};decoy=null;patrol=[Ka(16,22),Ka(6,22),Ka(6,13),Ka(16,13)];constructor(t=!1){this.tipsSeen=t,t||(this.notice="1–5 select a slot · R uses it · usable items are consumed.",this.noticeUntil=8,this.feedbackKind="select")}get hasRelic(){return this.inventory.includes("relic")}say(t,n=""){this.notice=t,this.noticeUntil=this.elapsed+4.5,this.feedbackKind=n,this.feedbackPulse++}pulse(t=""){this.feedbackKind=t,this.feedbackPulse++}select(t){return this.outcome!=="playing"||t<0||t>4||this.selected===t?!1:(this.selected=t,this.pulse(this.inventory[t]?"select":"blocked"),!0)}nearest(){return this.pickups.filter(t=>ui(t.position,this.position)<3.2&&ru(this.position,t.position)).sort((t,n)=>ui(t.position,this.position)-ui(n.position,this.position))[0]}interact(){if(this.outcome!=="playing")return;if(ui(this.position,pl)<4){this.hasRelic?(this.outcome="won",this.reason="Relic secured. You made it back to the light."):this.say("Extraction needs the ammonite relic. Follow the turquoise markers.","blocked");return}const t=this.pending===null?this.nearest():this.pickups.find(o=>o.id===this.pending);if(!t||ui(t.position,this.position)>3.2||!ru(this.position,t.position)){this.pending=null;return}let n=this.inventory.indexOf(null);if(n<0&&this.pending===null){this.pending=t.id,this.say("All five slots are full. Choose 1–5, then E to swap.","blocked");return}n<0&&(n=this.selected);const a=this.inventory[n];this.inventory[n]=t.item,this.selected=n,this.pickups=this.pickups.filter(o=>o.id!==t.id),a&&this.pickups.push({id:this.nextId++,item:a,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.pending=null,this.say(t.item==="relic"?"Relic recovered! Follow the amber markers to extraction.":`${xx[t.item].name} collected.`,"ok"),t.item==="relic"&&(this.predator.state="alert",this.predator.timer=0,this.predator.lastKnown={...this.position})}drop(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}this.pickups.push({id:this.nextId++,item:t,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok")}use(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}if(t==="air"){if(this.air>=240){this.pulse("blocked");return}this.air=Math.min(240,this.air+60),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="bandage"){if(this.health>=100){this.pulse("blocked");return}this.health=Math.min(100,this.health+45),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="flare"){this.decoy={position:{...this.position},until:this.elapsed+12},this.predator.state="search",this.predator.timer=0,this.predator.lastKnown={...this.position},this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}this.pulse("blocked")}update(t,n=!1){if(this.outcome!=="playing")return;if(t=Math.min(t,.05),this.elapsed+=t,this.air=Math.max(0,this.air-t),this.stamina=Math.max(0,Math.min(100,this.stamina+(n?-18:17)*t)),this.air<=0){this.outcome="lost",this.reason="Your air ran out. Use the reserve earlier or take a shorter route.";return}this.pending!==null&&!this.pickups.some(b=>b.id===this.pending&&ui(b.position,this.position)<3.2)&&(this.pending=null);const a=this.predator,o=ui(a.position,this.position),c=ru(a.position,this.position),u=c&&(o<4.5||o<(this.torch?16:n?13:8)),h=!Su(Br(this.position).col,Br(this.position).row);a.timer+=t,a.bite=Math.max(0,a.bite-t),this.decoy&&this.elapsed>=this.decoy.until&&(this.decoy=null),this.decoy&&o>4.5?(a.state="search",a.timer=0,a.lastKnown={...this.decoy.position}):a.state==="patrol"&&u&&!h?(a.state="alert",a.timer=0,a.lastKnown={...this.position}):a.state==="alert"?(u&&!h&&(a.lastKnown={...this.position}),a.timer>1.6&&(a.state=u&&!h?"chase":"search",a.timer=0,a.lost=0)):a.state==="chase"?(u&&!h?(a.lastKnown={...this.position},a.lost=0):a.lost+=t,a.lost>2.5&&(a.state="search",a.timer=0)):a.state==="search"&&(u&&!h?(a.state="chase",a.timer=0,a.lost=0):a.timer>7&&(a.state="patrol",a.timer=0));const p=a.state==="patrol"?this.patrol[a.waypoint]:a.lastKnown;a.state==="patrol"&&ui(a.position,p)<1.1&&(a.waypoint=(a.waypoint+1)%this.patrol.length);const g=$2(a.position,p)[0]||(ru(a.position,p)&&Su(Br(p).col,Br(p).row)?p:a.position),v=g.x-a.position.x,_=g.z-a.position.z,x=Math.hypot(v,_),S=a.state==="chase"?_d.chase:a.state==="alert"?_d.alert:_d.patrol;x>.05&&(a.heading=Math.atan2(-_,v),yx(a.position,v/x*Math.min(x,S*t),0,_/x*Math.min(x,S*t),1.3)),a.position.y+=((a.state==="chase"?Math.max(1.2,Math.min(6.2,this.position.y)):3)-a.position.y)*Math.min(1,t*2),a.state==="chase"&&!h&&c&&ui(a.position,this.position)<3.2&&a.bite<=0&&(this.health=Math.max(0,this.health-25),a.bite=1.7,this.say("Suit breached! Sprint to cover or deploy a flare."),this.health<=0&&(this.outcome="lost",this.reason="The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe."))}}const Re=(r=0,t=0,n=0)=>new k(r,t,n),rw="varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",ow=`varying vec2 vUv;varying vec3 wPos;uniform float uTime;uniform vec3 uColor;uniform float uOpacity;
void main(){
  float edge=pow(max(0.,sin(vUv.x*3.14159)),2.4);
  float vertical=pow(sin(vUv.y*3.14159),.55);
  float pulse=.82+sin(wPos.x*.11+wPos.z*.09+uTime*.19)*.14;
  float core=pow(max(0.,1.-abs(vUv.x-.5)*2.4),3.2)*.55;
  float a=(edge*vertical*pulse+core*vertical)*uOpacity;
  gl_FragColor=vec4(uColor,a);
}`;class lw extends H2{audioNotice="";audioProbe=null;audioTestTimer=0;backgroundMusic=null;mission=new L_(U_());ui;error="";pointerLocked=!1;everLocked=!1;lastSent=0;fallbackTurn=0;lockDenied=!1;lookPointer=null;torchLight=new tu(15398655,210,34,.38,.55,1.05);beam;torchBody;torchLensMat;torchRestPos=Re(.44,-.4,-.62);torchRestRot=new Ni(.18,-.22,.32);composer;bloom;guardian;pickupMeshes=new Map;decoyMesh;rockMaps;constructor(t,n){super(t,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:!0}),this.ui=n,this.rockMaps=B2(),this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.pitch=this.targetPitch=0,this.scene.background=new ce(268834),this.scene.fog=new Tu(667192,.038),this.camera.far=130,this.camera.fov=64,this.camera.updateProjectionMatrix(),this.renderer.toneMappingExposure=1.12,this.renderer.toneMapping=Eu,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hp,this.scene.add(new ux(5938862,530464,.42)),this.scene.add(new z1(1194048,.22));const a=new rp(8308948,.55);a.position.set(-8,30,-20),this.scene.add(a),this.buildCave(),this.buildLights(),this.buildComposer(),this.guardian=this.ichthyosaur(.9),this.scene.add(this.guardian.group),this.guardian.group.traverse(h=>{h instanceof qt&&(h.castShadow=!0,h.receiveShadow=!0)});const o=new Ns({color:14722930});for(const h of[-1,1])this.ellipsoid(this.guardian.group,o,1.8,.27,h*.5,.1,.1,.04);this.suspendedParticles();const c=this.particles.geometry.attributes.position;for(let h=0;h<c.count;h++)c.setXYZ(h,Math.sin(h*78.23)*37,1+h%71/10,-(h*13.23)%122);this.particles.geometry.computeBoundingSphere();const u=this.particles.material;u.uniforms.uTorch={value:1},u.vertexShader=`uniform float uTorch;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;","float cone=1.-smoothstep(.22,.52,length(mv.xy)/max(.08,-mv.z));gl_PointSize=clamp((28.+cone*42.*uTorch)/-mv.z,1.2,5.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/28.,0.,1.)*(.04+cone*.55*uTorch);"),u.fragmentShader=u.fragmentShader.replace("gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));","gl_FragColor=vec4(.78,.92,.96,a*smoothstep(.5,.0,d));"),this.decoyMesh=new qt(new Ps(.18,1),new Ns({color:16740416})),this.decoyMesh.add(new eu(16738353,12,12)),this.scene.add(this.decoyMesh),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.syncPickups(),this.animate(),this.publish()}buildCave(){const{rock:t,sand:n}=this.rockMaps,a=this.material(13223096,"sand",.88,3.4,n),o=this.material(11845828,"rock",.86,1.6,t),c=this.material(6977666,"rock",.9,.6,t),u=[],h=[],p=[],d=[];for(const _ of Zr){const[x,S]=_.split(",").map(Number),b=Ka(x,S),M=new es(Wi,Wi,2,2);if(M.rotateX(-Math.PI/2),M.translate(b.x,0,b.z),u.push(M),!(x===19&&S===3)){const y=M.clone();y.rotateZ(Math.PI),y.translate(b.x*2,8,0),h.push(y)}for(const[y,L]of[[1,0],[-1,0],[0,1],[0,-1]])if(!Zr.has(`${x+y},${S+L}`)){const U=new Qn(y?1:Wi+.05,8.5,L?1:Wi+.05);U.translate(b.x+y*2.5,4,b.z-L*2.5),p.push(U);for(let A=0;A<3;A++){const P=new Ps(1,1);P.scale(y?.7:1.7,1.3+A%2*.5,L?.7:1.7),P.translate(b.x+y*2.45,1.3+A*2.5,b.z-L*2.45),d.push(P)}}}for(const[_,x]of[[u,a],[h,c],[p,o],[d,o]]){const S=pu(_);if(!S)continue;const b=new qt(S,x);b.castShadow=!0,b.receiveShadow=!0,this.scene.add(b),_.forEach(M=>M.dispose())}const g=this.material(13156520,"rock",.82,1.5,t);for(let _=0;_<6;_++)for(const x of[-1,1]){const S=this.tube([Re(-3+_*.75,.25,-113),Re(-3+_*.75,1.3,-113+x*1.2),Re(-3+_*.75,.3,-113+x*2.2)],[.12,.09,.025],g,12,5);S.castShadow=!0,S.receiveShadow=!0,this.scene.add(S)}const v=new qt(new Rn(1.1,1.5,1.2,7),o);v.position.set(lp.x,.6,lp.z),v.castShadow=!0,v.receiveShadow=!0,this.scene.add(v)}beamMaterial(t,n){return new yn({uniforms:{uTime:this.uniforms.uTime,uColor:{value:new ce(t)},uOpacity:{value:n}},transparent:!0,depthWrite:!1,side:Fn,blending:Gr,vertexShader:rw,fragmentShader:ow})}addShaft(t,n,a,o,c,u,h,p,d=0,g=0){const v=new qt(new Rn(c,u,o,28,1,!0),this.beamMaterial(h,p));return v.position.set(t,n,a),v.rotation.x=d,v.rotation.z=g,this.scene.add(v),v}buildTorchBody(){const t=new xn,n=new ln({color:13936654,metalness:.08,roughness:.62}),a=new ln({color:12093706,metalness:.06,roughness:.7}),o=new ln({color:9072672,metalness:.05,roughness:.82}),c=new ln({color:1316376,metalness:.2,roughness:.68}),u=new ln({color:2764338,metalness:.15,roughness:.78}),h=new ln({color:11055288,metalness:.88,roughness:.32}),p=new ln({color:6969928,metalness:.55,roughness:.55}),d=new ln({color:4870230,metalness:.7,roughness:.45}),g=new ln({color:2763816,metalness:.4,roughness:.35}),v=new ln({color:3828280,metalness:0,roughness:.95}),_=new ln({color:2771500,metalness:0,roughness:.98}),x=new ln({color:4880954,metalness:0,roughness:.85,side:Fn}),S=new ln({color:5933634,metalness:0,roughness:.8,side:Fn}),b=new ln({color:13687008,metalness:.92,roughness:.22});this.torchLensMat=new ln({color:15266036,emissive:12114160,emissiveIntensity:1.4,metalness:.05,roughness:.28,transparent:!0,opacity:.9});const M=ot=>(ot.rotateX(Math.PI/2),ot),y=new qt(M(new Rn(.055,.058,.42,24)),n);y.position.set(0,0,-.08),t.add(y);for(let ot=0;ot<7;ot++){const N=new qt(M(new Rn(.062,.062,.012,20)),ot%3===0?o:a);N.position.set(0,0,.04-ot*.038),t.add(N)}const L=new qt(M(new Rn(.07,.055,.06,20)),a);L.position.set(0,0,-.31),t.add(L);for(const[ot,N,Z,dt,vt]of[[.05,-.02,-.12,.022,.012],[-.048,.025,0,.018,.01],[.03,.04,.05,.025,.014],[-.04,-.035,-.22,.02,.011],[.045,.01,-.28,.016,.009]]){const At=new qt(new Ja(1,6,5),d);At.scale.set(dt,vt,.008),At.position.set(ot,N,Z),t.add(At)}for(const[ot,N,Z,dt]of[[.052,-.05,.16,.15],[-.05,-.14,.13,-.2],[.025,.02,.14,.35],[-.035,-.24,.1,.05],[.04,-.2,.11,-.4]]){const vt=new qt(new Qn(.0045,.0022,Z),g);vt.position.set(Math.cos(dt)*.059,ot,N),vt.rotation.z=dt*.5,t.add(vt);const At=new qt(new Qn(.002,.0015,Z*.85),d);At.position.set(Math.cos(dt)*.061,ot+.003,N),At.rotation.z=dt*.5,t.add(At)}const U=new qt(new Qn(.036,.014,.01),u);U.position.set(.09,.05,-.41),U.rotation.z=.4,t.add(U);const A=new qt(new Qn(.02,.008,.006),d);A.position.set(.095,.055,-.408),A.rotation.z=.4,t.add(A);const P=new qt(M(new Rn(.118,.112,.07,28)),u);P.position.set(0,0,-.38),t.add(P);const O=new qt(M(new Rn(.122,.122,.014,28)),c);O.position.set(0,0,-.415),t.add(O);for(let ot=0;ot<8;ot++){const N=ot/8*Math.PI*2,Z=new qt(new Rn(.008,.008,.016,6),ot%3===0?p:h);Z.rotation.x=Math.PI/2,Z.position.set(Math.cos(N)*.1,Math.sin(N)*.1,-.425),t.add(Z)}const I=new qt(new Ja(.095,20,12,0,Math.PI*2,0,Math.PI*.55),b);I.scale.set(1,1,.55),I.rotation.x=Math.PI,I.position.set(0,0,-.36),t.add(I);const G=new qt(new Ep(.088,28),this.torchLensMat);G.position.set(0,0,-.432),t.add(G);const R=new qt(new wp(.06,.086,20),new ln({color:6977664,metalness:.1,roughness:.85,transparent:!0,opacity:.35}));R.position.set(0,0,-.433),t.add(R);const D=new qt(new Qn(.028,.04,.055),o);D.position.set(.065,.01,-.2),t.add(D);const V=new qt(new Qn(.022,.028,.03),a);V.position.set(.078,.01,-.2),t.add(V);const j=new qt(M(new Rn(.06,.058,.08,20)),u);j.position.set(0,0,.18),t.add(j);for(let ot=0;ot<4;ot++){const N=new qt(M(new Rn(.063,.063,.008,16)),c);N.position.set(0,0,.15+ot*.018),t.add(N)}const rt=new qt(M(new Rn(.052,.055,.02,16)),c);rt.position.set(0,0,.225),t.add(rt);const ut=new qt(new Qn(.035,.012,.1),p);ut.position.set(0,.07,-.28),t.add(ut);const ft=new qt(new Qn(.035,.055,.012),h);ft.position.set(0,.095,-.235),t.add(ft);for(const ot of[-.3,-.26]){const N=new qt(new Rn(.006,.006,.014,8),p);N.rotation.x=Math.PI/2,N.position.set(0,.077,ot),t.add(N)}const B=[Re(0,.078,-.32),Re(0,.155,-.22),Re(0,.17,-.05),Re(0,.14,.1),Re(0,.075,.16)];t.add(new qt(new Mu(new yu(B),24,.018,10,!1),u));const tt=[[0,.12,-.08,.022],[.02,.14,-.2,.018],[-.015,.1,.08,.016],[.08,-.02,-.36,.02],[-.07,.04,-.39,.017],[.06,.06,-.4,.014],[-.05,-.04,.02,.019],[.04,-.05,-.18,.015],[0,.02,.2,.018],[-.04,.08,-.28,.012],[.05,.09,-.12,.014]];for(const[ot,N,Z,dt]of tt){const vt=new qt(new Ps(1,0),ot*10+Z*3&1?v:_);vt.scale.set(dt,dt*(.75+(ot*5&1)*.35),dt*(.85+(Z*7&1)*.3)),vt.position.set(ot,N,Z),vt.rotation.set(ot*4,N*5,Z*3),t.add(vt)}const q=(ot,N)=>{t.add(new qt(new Mu(new yu(ot),14,N,6,!1),x))};q([Re(.02,.17,-.2),Re(.05,.14,-.12),Re(.08,.06,-.05),Re(.1,-.04,.02),Re(.09,-.12,.06),Re(.06,-.18,.08)],.007),q([Re(-.02,.16,-.08),Re(-.04,.11,0),Re(-.06,.02,.06),Re(-.05,-.08,.1),Re(-.03,-.14,.12)],.006),q([Re(.1,.03,-.39),Re(.12,-.02,-.33),Re(.11,-.09,-.27),Re(.08,-.14,-.22)],.0055),q([Re(-.09,.06,-.41),Re(-.11,.01,-.35),Re(-.1,-.06,-.3),Re(-.07,-.11,-.26)],.005),q([Re(0,.15,.05),Re(.03,.08,.1),Re(.04,-.02,.14),Re(.02,-.1,.16)],.005);for(const[ot,N,Z,dt,vt]of[[.09,-.02,0,.6,.2],[-.05,.05,.05,-.5,-.3],[.11,-.07,-.28,.9,.4],[-.09,-.04,-.32,-.7,.2],[.07,-.14,.07,.3,-.5]]){const At=new qt(new es(.028,.045),S);At.position.set(ot,N,Z),At.rotation.set(dt,vt,.15),t.add(At)}for(const[ot,N,Z]of[[.8,-.1,.02],[2.2,-.2,.016],[4,.05,.018],[5.5,-.28,.014]]){const dt=new qt(new Ja(1,5,4),_);dt.scale.set(Z*.6,Z*.4,Z*.15),dt.position.set(Math.cos(ot)*.06,Math.sin(ot)*.06,N),t.add(dt)}return t.position.copy(this.torchRestPos),t.rotation.copy(this.torchRestRot),t.scale.setScalar(1.15),t}applyTorchHover(t){const n=t;this.torchBody.position.set(this.torchRestPos.x+Math.sin(this.time*.7)*.028*n,this.torchRestPos.y+Math.sin(this.time*1.05)*.036*n,this.torchRestPos.z+Math.cos(this.time*.55)*.02*n),this.torchBody.rotation.set(this.torchRestRot.x+Math.sin(this.time*.9)*.055*n,this.torchRestRot.y+Math.sin(this.time*.45)*.03*n,this.torchRestRot.z+Math.cos(this.time*.75)*.065*n)}buildLights(){this.scene.add(this.camera),this.torchBody=this.buildTorchBody(),this.camera.add(this.torchBody);const t=C_(3,0);this.torchLight.color.setRGB(t.r,t.g,t.b),this.torchLight.intensity=t.intensity,this.torchLight.distance=t.distance,this.torchLight.angle=.32,this.torchLight.penumbra=.95,this.torchLight.decay=t.decay,this.torchLight.position.set(0,0,-.45),this.torchLight.target.position.set(0,0,-22),this.torchBody.add(this.torchLight,this.torchLight.target),this.torchLight.castShadow=!0,this.torchLight.shadow.mapSize.set(512,512),this.torchLight.shadow.bias=-35e-5,this.torchLight.shadow.normalBias=.035,this.torchLight.shadow.radius=1.5,this.torchLight.shadow.camera.near=.35,this.torchLight.shadow.camera.far=Math.max(12,t.distance),this.torchLight.shadow.camera.updateProjectionMatrix(),this.torchBody.traverse(g=>{g instanceof qt&&(g.castShadow=!1,g.receiveShadow=!1)});const n=new Rn(.018,3.2,20,28,1,!0);n.rotateX(Math.PI/2),this.beam=new qt(n,this.beamMaterial(13953784,.09)),this.beam.castShadow=!1,this.beam.receiveShadow=!1,this.beam.position.set(0,0,-10.45),this.torchBody.add(this.beam);const a=(g,v,_)=>{const x=new qt(new Ja(.1,8,6),new Ns({color:_}));x.position.set(g,.55,v),x.add(new eu(_,.85,5.5,1.5)),this.scene.add(x)};for(const[g,v]of[[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])a(g,v,5952708);for(const[g,v]of[[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])a(g,v,14723160);const o=new xn;o.position.set(pl.x,.65,pl.z);const c=new qt(new Au(1.6,.05,8,48),new Ns({color:12189660}));c.rotation.x=Math.PI/2,o.add(c),this.scene.add(o);const u=new tu(13826292,420,24,.72,.8,1);u.position.set(32,12,-12),u.target.position.set(32,0,-12),this.scene.add(u,u.target);const h=new eu(11071720,28,16,1.1);h.position.set(32,5,-12),this.scene.add(h),this.addShaft(32,5.2,-12,9,.7,2.8,14220020,.22);const p=[[2,6.2,-52,9,.5,2.4,.16],[6,6,-64,9.5,.55,2.6,.15],[4,6.5,-78,9,.45,2.3,.14],[0,6.4,-96,8,.35,1.8,.1]];for(const[g,v,_,x,S,b,M]of p){this.addShaft(g,v,_,x,S,b,12119012,M,(Math.random()-.5)*.12,(Math.random()-.5)*.1);const y=new tu(11594980,55+M*500,15,.5,.85,1.15);y.position.set(g,8.2,_),y.target.position.set(g,0,_),this.scene.add(y,y.target)}this.addShaft(0,6.3,-22,8,.45,2.2,11067608,.1);const d=new tu(11068636,70,13,.48,.8,1.1);d.position.set(0,8.5,-22),d.target.position.set(0,0,-22),this.scene.add(d,d.target),this.addShaft(0,5.8,-110,7.5,.3,1.5,12899504,.08)}buildComposer(){const t=this.host.clientWidth,n=this.host.clientHeight;this.composer=new A2(this.renderer),this.composer.addPass(new w2(this.scene,this.camera)),this.bloom=new jr(new It(t,n),.18,.65,.92),this.composer.addPass(this.bloom),this.composer.addPass(new C2)}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer?.setSize(t,n),this.bloom?.resolution.set(t,n)}syncPickups(){for(const[t,n]of this.pickupMeshes)this.mission.pickups.some(a=>a.id===t)||(this.scene.remove(n),n.traverse(a=>{a instanceof qt&&(a.geometry.dispose(),a.material.dispose())}),this.pickupMeshes.delete(t));for(const t of this.mission.pickups){let n=this.pickupMeshes.get(t.id);if(!n){n=new xn;const a=new ln({color:t.item==="relic"?14857822:8571063,emissive:t.item==="relic"?7027719:1391670,emissiveIntensity:.7,metalness:.4,roughness:.45});if(t.item==="relic"){const o=[],c=[];for(let u=0;u<=72;u++){const h=u/72,p=h*Math.PI*4.5,d=.03+h*h*.62;o.push(Re(Math.cos(p)*d,Math.sin(p)*d,0)),c.push(.01+h*.12)}n.add(this.tube(o,c,a,90,8)),n.add(new eu(15711080,3.5,7))}else n.add(new qt(new Ps(.3,1),a));n.traverse(o=>{o instanceof qt&&(o.castShadow=!0,o.receiveShadow=!0)}),this.scene.add(n),this.pickupMeshes.set(t.id,n)}n.position.set(t.position.x,t.position.y+Math.sin(this.time*1.7+t.id)*.12,t.position.z),n.rotation.y=this.time*.45}}publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice,yaw:this.yaw})}bind(){const t=(a,o,c,u)=>{a.addEventListener(o,c,u),this.listeners.push(()=>a.removeEventListener(o,c,u))};t(window,"keydown",(a=>{this.playing&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(a.code)&&a.preventDefault(),this.keys.add(a.code),!a.repeat&&(a.code==="Escape"&&(this.mission.pending!==null?(this.mission.pending=null,this.publish()):this.pause()),/^Digit[1-5]$/.test(a.code)&&this.mission.select(Number(a.code.slice(-1))-1)&&this.playSelectClick(),a.code==="KeyE"&&this.mission.interact(),a.code==="KeyF"&&(this.mission.torch=!this.mission.torch),a.code==="KeyR"&&this.mission.use(),a.code==="KeyG"&&this.mission.drop(),a.code==="KeyM"&&this.setSound(!this.sound),this.publish()))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>this.pause())),t(document,"visibilitychange",(()=>{document.hidden&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing){try{n.setPointerCapture(a.pointerId)}catch{}document.pointerLockElement!==n&&this.requestLookLock(!1)}})),t(document,"pointermove",(a=>{if(!this.playing)return;if(document.pointerLockElement===n){this.lookPointer=null,this.fallbackTurn=0;const p=ou(this.targetYaw,this.targetPitch,a.movementX,a.movementY);this.targetYaw=p.yaw,this.targetPitch=p.pitch;return}const c=n.getBoundingClientRect();if(a.clientX<c.left||a.clientX>c.right||a.clientY<c.top||a.clientY>c.bottom){this.lookPointer=null,this.fallbackTurn=0;return}this.lookPointer={x:a.clientX,y:a.clientY},this.fallbackTurn=D_(a.clientX,c.left,c.width);const u=this.fallbackTurn!==0?0:a.movementX,h=ou(this.targetYaw,this.targetPitch,u,a.movementY);this.targetYaw=h.yaw,this.targetPitch=h.pitch})),t(window,"mouseout",(a=>{a.relatedTarget||(this.lookPointer=null,this.fallbackTurn=0)})),t(n,"wheel",(a=>{if(!this.playing)return;a.preventDefault();const o=a.deltaMode===1?16:a.deltaMode===2?200:1,c=ou(this.targetYaw,this.targetPitch,a.deltaX*o,a.deltaY*o);this.targetYaw=c.yaw,this.targetPitch=c.pitch}),{passive:!1}),t(document,"pointerlockchange",(()=>{const a=this.pointerLocked;this.pointerLocked=document.pointerLockElement===n,this.pointerLocked&&(this.everLocked=!0,this.lockDenied=!1,this.lookPointer=null,this.fallbackTurn=0),a&&!this.pointerLocked&&this.pause(),this.publish()})),t(document,"pointerlockerror",(()=>{this.lockDenied=!0,this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.error="The graphics connection was lost. Reload the page to restart the dive.",this.pause(),this.publish()}))}requestLookLock(t=!0){if(!this.playing||document.pointerLockElement===this.renderer.domElement)return;const n=()=>{this.lockDenied=!0,t&&(this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish())};try{this.renderer.domElement.requestPointerLock?.()?.catch(n)}catch{n()}}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.7:0,this.audioProbe=G2(n,this.master),this.backgroundMusic=new W2(n,this.master),n.onstatechange=()=>{this.alive&&(this.playing&&this.sound&&n.state!=="running"&&(this.audioNotice="Sound interrupted. Pause and choose Test sound."),this.publish())}}catch{this.audioContext?.close().catch(()=>{}),this.audioContext=null,this.master=null,this.audioNotice="Audio could not start in this browser. Try Test sound or open the game in Chrome."}}enableAudio(t=!1){window.clearTimeout(this.audioTestTimer),this.initAudio();const n=this.audioContext,a=this.master;if(!n||!a){this.publish();return}a.gain.setTargetAtTime(this.sound?.7:0,n.currentTime,.04),n.resume().then(()=>{if(this.alive){if(!this.playing&&!this.testingAudio){n.suspend().catch(()=>{});return}if(n.state!=="running"){this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish();return}this.audioNotice="",t&&this.sound&&(this.playing||this.testingAudio)&&V2(n,a),this.playing&&this.backgroundMusic?.start().catch(()=>{this.alive&&(this.audioNotice="Background music could not load. Pause and resume to retry.",this.publish())}),this.publish()}}).catch(()=>{this.alive&&(this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish())})}playSelectClick(){if(!this.playing||!this.sound)return;const t=this.audioContext,n=this.master;!t||!n||t.state!=="running"||k2(t,n)}testingAudio=!1;testSound(){this.sound=!0,this.testingAudio=!0,this.enableAudio(!0),this.audioTestTimer=window.setTimeout(()=>{this.testingAudio=!1,this.playing||this.audioContext?.suspend().catch(()=>{})},1500),this.publish()}setSound(t){this.sound=t,this.audioNotice="",t?this.playing?this.enableAudio():this.testSound():this.master&&this.audioContext&&this.master.gain.setTargetAtTime(0,this.audioContext.currentTime,.04),this.publish()}start(){this.mission.outcome!=="playing"&&this.reset(),this.mission.tipsSeen||sw(),this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.testingAudio=!1,this.sound&&this.enableAudio(!0),this.lookPointer=null,this.fallbackTurn=0,this.requestLookLock(!0),this.publish()}pause(){this.playing&&(this.testingAudio=!1,window.clearTimeout(this.audioTestTimer),this.playing=!1,this.lookPointer=null,this.fallbackTurn=0,this.keys.clear(),this.velocity.set(0,0,0),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.publish())}reset(){this.backgroundMusic?.reset(),this.mission=new L_(U_()),this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=0,this.lookPointer=null,this.fallbackTurn=0,this.lockDenied=!1,this.velocity.set(0,0,0),this.time=0,this.lastSent=0,this.keys.clear(),this.torchBody&&(this.torchBody.position.copy(this.torchRestPos),this.torchBody.rotation.copy(this.torchRestRot)),this.syncPickups(),this.publish()}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.playing){this.time+=t;const p=this.mission,d=(...U)=>U.some(A=>this.keys.has(A))?1:0;if(!this.pointerLocked&&this.lookPointer){const U=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=D_(this.lookPointer.x,U.left,U.width)}else!this.pointerLocked&&!this.lookPointer&&(this.fallbackTurn=0);const g=d("ArrowRight")-d("ArrowLeft")+(this.pointerLocked?0:this.fallbackTurn*tw),v=ou(this.targetYaw,this.targetPitch,g*t*650,(d("ArrowDown")-d("ArrowUp"))*t*650);this.targetYaw=v.yaw,this.targetPitch=v.pitch,this.yaw=ma.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*t)),this.pitch=ma.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize(),this.move.copy(this.forward).multiplyScalar(d("KeyW")-d("KeyS")).addScaledVector(this.right,d("KeyD")-d("KeyA"));const _=d("Space")-d("KeyQ","ControlLeft","ControlRight");p.buoyancy=K2(p.buoyancy,_,t);const x=!!d("ShiftLeft","ShiftRight")&&p.stamina>3&&this.move.lengthSq()>.01;Q2(this.velocity,this.move,p.buoyancy,x,t),yx(p.position,this.velocity.x*t,this.velocity.y*t,this.velocity.z*t),p.update(t,x),this.position.copy(p.position);const S=this.velocity.length(),b=1-ma.smoothstep(S,.06,.5),M=Math.sin(this.time*1.1)*.13*b,y=Math.sin(this.time*.65)*.065*b,L=Math.cos(this.time*.5)*.065*b;this.camera.position.copy(this.position).addScaledVector(this.upAxis,M).addScaledVector(this.right,y).addScaledVector(this.forward,L),this.applyTorchHover(b),p.outcome!=="playing"&&this.pause()}const n=ma.smoothstep(-this.position.z,35,100),a=1-ma.smoothstep(ui(this.position,pl),4,22),o=this.scene.fog;o.color.set(800064).lerp(new ce(402480),n).lerp(new ce(1727074),a*.65),o.density=.032+.022*n-.014*a,this.scene.background.copy(o.color),this.uniforms.uTime.value=this.time;const c=this.mission.torch;if(this.torchLight.visible=c,this.beam.visible=c,this.torchBody.visible=!0,this.torchLensMat.emissiveIntensity=c?1.25:.06,this.torchLensMat.emissive.set(c?13165823:2240568),c){const p=C_(this.position.y,this.pitch);this.torchLight.intensity=p.intensity,this.torchLight.distance=p.distance,this.torchLight.decay=p.decay,this.torchLight.color.setRGB(p.r,p.g,p.b);const d=Math.max(10,Math.min(48,p.distance+2));Math.abs(this.torchLight.shadow.camera.far-d)>.5&&(this.torchLight.shadow.camera.far=d,this.torchLight.shadow.camera.updateProjectionMatrix());const g=this.beam.material;g.uniforms.uOpacity.value=p.beamOpacity,g.uniforms.uColor.value.setRGB(p.beamR,p.beamG,p.beamB),this.particles.material.uniforms.uTorch.value=0}else this.particles.material.uniforms.uTorch.value=0;this.bloom.strength=c?.2:.14;const u=this.mission.predator;this.guardian.group.position.copy(u.position);const h=Math.atan2(Math.sin(u.heading-this.guardian.group.rotation.y),Math.cos(u.heading-this.guardian.group.rotation.y));this.guardian.group.rotation.y+=h*Math.min(1,t*5),this.guardian.fins.forEach(p=>p.rotation.x=Math.sin(this.time*2+(p.userData.phase||0))*.25*(p.userData.side||1)),this.guardian.tail.rotation.y=Math.sin(this.time*3)*.22,this.syncPickups(),this.decoyMesh.visible=!!this.mission.decoy,this.mission.decoy&&this.decoyMesh.position.copy(this.mission.decoy.position),this.time-this.lastSent>.05&&(this.lastSent=this.time,this.publish()),this.composer.render()};dispose(){window.clearTimeout(this.audioTestTimer),this.audioContext&&(this.audioContext.onstatechange=null),this.backgroundMusic?.dispose(),this.pause(),this.composer?.dispose(),super.dispose()}}const cl="0.1.22",Sx="46e7996",cw=`v${cl} · ${Sx}`;function uw({item:r}){const t={stone:J.jsx("path",{fill:"#7a8480",d:"M12 28c1-9 7-15 13-16 8-2 15 3 16 11 2 9-4 17-13 18-8 1-15-4-16-13z"}),wood:J.jsxs("g",{transform:"rotate(-35 24 24)",children:[J.jsx("rect",{x:"20",y:"8",width:"8",height:"32",rx:"2.5",fill:"#2c343a"}),J.jsx("rect",{x:"19",y:"8",width:"10",height:"7",rx:"1.5",fill:"#4a545c"}),J.jsx("rect",{x:"21",y:"18",width:"6",height:"2",fill:"#1a2024"})]}),flare:J.jsxs(J.Fragment,{children:[J.jsx("rect",{x:"22",y:"16",width:"5",height:"24",rx:"1.5",fill:"#e8e8e8"}),J.jsx("path",{fill:"#ff1e14",d:"M21 16c1-5 2.5-10 3.5-13 1.5 3 3.5 7 4.5 11H21z"}),J.jsx("path",{fill:"#ffc14a",d:"M24 5c0-2 .6-4 1-5 .4 1.5 1.2 3 2 4.5-.7.2-1.8.4-3 .5z"})]}),air:J.jsxs(J.Fragment,{children:[J.jsx("rect",{x:"17",y:"13",width:"14",height:"26",rx:"5",fill:"#c8d0d6"}),J.jsx("rect",{x:"20",y:"7",width:"8",height:"8",rx:"2",fill:"#a8b2ba"}),J.jsx("line",{x1:"17",y1:"23",x2:"31",y2:"23",stroke:"#3a444a",strokeWidth:"1.3"}),J.jsx("line",{x1:"24",y1:"17",x2:"24",y2:"30",stroke:"#3a444a",strokeWidth:"1.3"})]}),bandage:J.jsxs(J.Fragment,{children:[J.jsx("rect",{x:"11",y:"17",width:"26",height:"18",rx:"2.5",fill:"#9aa4aa"}),J.jsx("path",{fill:"#5c666c",d:"M22 17v-5h4v5m-2 6v8m-5-4h10"})]}),relic:J.jsxs(J.Fragment,{children:[J.jsx("path",{fill:"#c4923a",d:"M24 8c9 0 15 6 15 13 0 10-8 17-15 17S9 31 9 21 12 8 24 8z"}),J.jsx("path",{fill:"none",stroke:"#4a2a08",strokeWidth:"2.2",d:"M31 28c-9 9-19 1-16-7s13-11 14-1-7 8-6 2"}),J.jsx("circle",{cx:"28",cy:"17",r:"3.2",fill:"#ecc878"})]})};return J.jsx("svg",{viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:r?t[r]:null})}function fw({yaw:r}){const t=(-r*180/Math.PI%360+360)%360,n=[];for(let a=0;a<360;a+=5){let o=(a-t+540)%360-180;if(Math.abs(o)>52)continue;const c=a===0?"N":a===90?"E":a===180?"S":a===270?"W":"";n.push({deg:a,x:o,label:c,major:a%90===0})}return J.jsxs("div",{className:"compass","aria-hidden":"true",children:[J.jsx("div",{className:"compass-needle"}),J.jsx("div",{className:"compass-track",children:n.map(a=>J.jsxs("div",{className:`compass-mark ${a.major?"major":a.deg%15===0?"mid":""}`,style:{transform:`translateX(${a.x*2.55}px)`},children:[J.jsx("i",{}),a.label&&J.jsx("span",{children:a.label})]},a.deg))})]})}function hw(){const r=ys.useRef(null),t=ys.useRef(null),[n,a]=ys.useState(null),[o,c]=ys.useState(""),[u,h]=ys.useState("");ys.useEffect(()=>{if(!r.current)return;let P;try{P=new lw(r.current,O=>a({...O})),t.current=P}catch(O){console.error(O),c("The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.")}return()=>{P?.dispose(),t.current=null}},[]),ys.useEffect(()=>{let P=!0;const O=()=>{fetch("/__build.json",{cache:"no-store"}).then(R=>R.json()).then(R=>{!P||!R?.packageVersion||(R.packageVersion!==cl||R.sha&&R.sha!==Sx?h(`OUTDATED TAB — server is ${R.packageVersion}${R.sha?` · ${R.sha}`:""}. Hard refresh (Cmd+Shift+R) or run: node playable/refresh.mjs`):h(""))}).catch(()=>{})};O();const I=window.setInterval(O,4e3),G=()=>O();return window.addEventListener("focus",G),document.addEventListener("visibilitychange",()=>{document.hidden||O()}),()=>{P=!1,window.clearInterval(I),window.removeEventListener("focus",G)}},[]);const p=n?.mission,d=!!n?.playing,g=p?.outcome!=="playing"&&!!p,v=p?.nearest(),_=p&&ui(p.position,pl)<4,x=p?.pending!==null&&p?.pending!==void 0?"Choose slot 1–5 · E confirms swap · Esc cancels":_?p?.hasRelic?"E · Extract with the relic":"Relic required for extraction":v?`E · Collect ${xx[v.item].name}`:"",S=n?.yaw??0,b=p?Math.ceil(p.air):240,M=`${String(Math.floor(b/60)).padStart(2,"0")}:${String(b%60).padStart(2,"0")}`,y=p?Math.round(_x(p.position.y)):0,L=p?.predator.state||"patrol",A=(p?ui(p.position,p.predator.position)<23:!1)?{patrol:"Movement in the dark",alert:"It heard something",chase:"It is hunting you",search:"Searching your last position"}[L]:"";return J.jsxs("main",{className:d?"app playing":"app",children:[J.jsx("div",{className:"viewport",ref:r,"aria-label":"Three-dimensional underwater cave"}),J.jsx("div",{className:"vignette"}),J.jsxs("div",{className:"build-version","aria-label":`Build version ${cl}`,children:["BUILD ",cw]}),u&&J.jsx("div",{className:"stale-build",role:"alert",children:u}),!d&&J.jsxs("header",{children:[J.jsxs("div",{className:"brand",children:[J.jsx("span",{className:"brand-mark",children:"◉"})," PAINTED ABYSS",J.jsx("small",{children:"THE DROWNED SHELF"})]}),J.jsxs("div",{className:"build-label",children:["FIRST DIVE ",J.jsx("span",{children:" / "})," ",cl]})]}),d&&p&&J.jsxs(J.Fragment,{children:[J.jsxs("section",{className:"objectives","aria-label":"Objectives",children:[J.jsxs("div",{className:`obj ${p.hasRelic?"done":""}`,children:[J.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"◆"}),p.hasRelic?"Carry the ammonite relic":"Recover the ammonite relic"]}),J.jsxs("div",{className:"obj",children:[J.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"○"}),"Reach the extraction pool"]})]}),J.jsx(fw,{yaw:S}),J.jsxs("div",{className:"depth",children:["DEPTH ",y," m"]}),J.jsxs("section",{className:"vitals","aria-label":"Vitals",children:[J.jsxs("div",{className:"vital",children:[J.jsxs("div",{className:"vital-row",children:[J.jsx("span",{children:"AIR"}),J.jsx("strong",{className:b<45?"warning":"",children:M})]}),J.jsx("div",{className:"meter air",children:J.jsx("i",{style:{width:`${p.air/240*100}%`}})})]}),J.jsxs("div",{className:"vital",children:[J.jsxs("div",{className:"vital-row",children:[J.jsx("span",{children:"SUIT"}),J.jsx("strong",{className:p.health<40?"warning":"",children:Math.ceil(p.health)})]}),J.jsx("div",{className:"meter suit",children:J.jsx("i",{style:{width:`${p.health}%`}})})]}),J.jsxs("div",{className:"vital",children:[J.jsxs("div",{className:"vital-row",children:[J.jsx("span",{children:"FINS"}),J.jsx("strong",{children:Math.round(p.stamina)})]}),J.jsx("div",{className:"meter fins",children:J.jsx("i",{style:{width:`${p.stamina}%`}})})]})]}),A&&J.jsx("div",{className:`threat ${L}`,role:"status",children:A}),n?.audioNotice&&J.jsx("div",{className:"audio-notice",role:"status",children:n.audioNotice}),p.health<40&&J.jsx("div",{className:"injury"}),J.jsxs("div",{className:"interaction",role:"status",children:[x&&J.jsx("div",{className:"prompt",children:x}),p.elapsed<p.noticeUntil&&J.jsx("p",{className:`notice ${p.feedbackKind}`,children:p.notice},p.feedbackPulse)]}),J.jsx("div",{className:"inventory","aria-label":"Inventory",children:J.jsx("div",{className:"slots",children:p.inventory.map((P,O)=>{const I=O===p.selected,G=I&&p.feedbackKind?p.feedbackKind:"";return J.jsxs("div",{className:`slot ${I?"selected":""} ${P==="relic"?"relic":""} ${P==="flare"?"flare":""} ${G?`pulse-${G}`:""}`,children:[J.jsx("kbd",{children:O+1}),J.jsx(uw,{item:P}),I&&J.jsx("em",{className:"slot-mark","aria-hidden":"true",children:"●"})]},I?`${O}-p${p.feedbackPulse}`:O)})})}),J.jsxs("aside",{className:"keybinds","aria-hidden":"true",children:[J.jsxs("div",{children:[J.jsx("kbd",{children:"1–5"}),J.jsx("span",{children:"Select"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"F"}),J.jsx("span",{children:"Torch"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"E"}),J.jsx("span",{children:"Interact"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"R"}),J.jsx("span",{children:"Use"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"G"}),J.jsx("span",{children:"Drop"})]})]}),!n?.pointerLocked&&J.jsx("div",{className:"free-look",children:"360° free look · move to look · hold left or right of center to keep turning"})]}),!d&&J.jsxs("div",{className:"menu-backdrop",children:[J.jsxs("section",{className:"menu",children:[J.jsx("div",{className:"eyebrow",children:g?p?.outcome==="won"?"EXPEDITION COMPLETE":"DIVE LOST":n?.started?"DIVE PAUSED":"A SHORT UNDERWATER SURVIVAL PROTOTYPE"}),J.jsx("h1",{children:g?p?.outcome==="won"?J.jsxs(J.Fragment,{children:["Back to",J.jsx("br",{}),J.jsx("em",{children:"the light."})]}):J.jsxs(J.Fragment,{children:["The deep",J.jsx("br",{}),J.jsx("em",{children:"keeps its own."})]}):n?.started?J.jsxs(J.Fragment,{children:["Catch your",J.jsx("br",{}),J.jsx("em",{children:"breath."})]}):J.jsxs(J.Fragment,{children:["Some things",J.jsx("br",{}),J.jsx("em",{children:"should stay buried."})]})}),J.jsx("p",{className:"intro",children:g?p?.reason:n?.started?"Your dive is paused. Take a moment, then return to the cave.":"One cave. One ancient guardian. Recover the ammonite relic and bring it back to the light."}),g&&J.jsxs("div",{className:"results",children:[J.jsxs("span",{children:[Math.floor((p?.elapsed||0)/60),"m ",Math.floor((p?.elapsed||0)%60),"s underwater"]}),J.jsx("span",{children:p?.outcome==="won"?"1 relic secured":"No relic secured"})]}),o||n?.error?J.jsx("p",{className:"error",role:"alert",children:o||n?.error}):J.jsxs("button",{className:"primary",disabled:!n,onClick:()=>t.current?.start(),children:[n?g?"Try another dive":n.started?"Resume dive":"Begin dive":"Opening the cave…"," ",J.jsx("span",{children:"↗"})]}),J.jsxs("div",{className:"menu-actions",children:[J.jsx("button",{onClick:()=>{const P=t.current;P&&(P.setSound(!P.sound),P.publish())},children:t.current?.sound===!1?"Sound off":"Sound on"}),J.jsx("button",{onClick:()=>t.current?.testSound(),children:"Test sound"}),n?.started&&!g&&J.jsx("button",{onClick:()=>{t.current?.reset(),t.current?.start()},children:"Restart dive"})]}),J.jsx("p",{className:"sound-help",role:"status",children:n?.audioNotice||"Test sound plays two clear tones. During the dive, hear your music."}),J.jsxs("div",{className:"dive-note",children:["2–4 MINUTES ",J.jsx("span",{children:"·"})," DESKTOP / HEADPHONES ",J.jsx("span",{children:"·"})," PROTOTYPE ",cl]})]}),J.jsxs("aside",{className:"briefing",children:[J.jsx("div",{className:"eyebrow",children:"BEFORE YOU DESCEND"}),J.jsxs("ol",{children:[J.jsxs("li",{children:[J.jsx("b",{children:"Follow the turquoise lights."}),J.jsx("span",{children:"Find the relic in the bone alcove, beyond the central pillar."})]}),J.jsxs("li",{children:[J.jsx("b",{children:"Make room for your discovery."}),J.jsx("span",{children:"Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops."})]}),J.jsxs("li",{children:[J.jsx("b",{children:"Escape through the east fissure."}),J.jsx("span",{children:"Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage."})]})]}),J.jsxs("div",{className:"control-grid",children:[J.jsxs("span",{children:[J.jsx("kbd",{children:"W A S D"})," Swim"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"Space / Q"})," Buoyancy"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"Shift"})," Sprint"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"F"})," Torch"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"E"})," Collect / extract"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"1–5"})," Select slot"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"R"})," Use / consume"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"G"})," Drop selected"]})]}),J.jsxs("p",{className:"look-note",children:["Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. ",J.jsx("kbd",{children:"Esc"})," pauses; ",J.jsx("kbd",{children:"M"})," mutes."]}),J.jsxs("p",{className:"tip",children:["Inventory: ",J.jsx("kbd",{children:"1–5"})," selects (click sound when the slot changes), then ",J.jsx("kbd",{children:"R"})," uses — air, sealant, and flares are consumed. A one-time tip appears on the first dive only. Rock blocks its sight; a flare distracts it while you move away."]})]})]})]})}OM.createRoot(document.getElementById("root")).render(J.jsx(hw,{}));
