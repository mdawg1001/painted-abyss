(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Th={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function fM(){if(Kg)return Zo;Kg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Zo.Fragment=t,Zo.jsx=n,Zo.jsxs=n,Zo}var Qg;function hM(){return Qg||(Qg=1,Th.exports=fM()),Th.exports}var J=hM(),bh={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function dM(){if(Jg)return de;Jg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(N,K,pt){this.props=N,this.context=K,this.refs=T,this.updater=pt||x}M.prototype.isReactComponent={},M.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=M.prototype;function L(N,K,pt){this.props=N,this.context=K,this.refs=T,this.updater=pt||x}var U=L.prototype=new y;U.constructor=L,S(U,M.prototype),U.isPureReactComponent=!0;var w=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function F(N,K,pt,vt,At,Gt){return pt=Gt.ref,{$$typeof:r,type:N,key:K,ref:pt!==void 0?pt:null,props:Gt}}function G(N,K){return F(N.type,K,void 0,void 0,void 0,N.props)}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function D(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(pt){return K[pt]})}var k=/\/+/g;function Z(N,K){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):K.toString(36)}function ot(){}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ot,ot):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ht(N,K,pt,vt,At){var Gt=typeof N;(Gt==="undefined"||Gt==="boolean")&&(N=null);var it=!1;if(N===null)it=!0;else switch(Gt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(N.$$typeof){case r:case t:it=!0;break;case g:return it=N._init,ht(it(N._payload),K,pt,vt,At)}}if(it)return At=At(N),it=vt===""?"."+Z(N,0):vt,w(At)?(pt="",it!=null&&(pt=it.replace(k,"$&/")+"/"),ht(At,K,pt,"",function($t){return $t})):At!=null&&(R(At)&&(At=G(At,pt+(At.key==null||N&&N.key===At.key?"":(""+At.key).replace(k,"$&/")+"/")+it)),K.push(At)),1;it=0;var yt=vt===""?".":vt+":";if(w(N))for(var wt=0;wt<N.length;wt++)vt=N[wt],Gt=yt+Z(vt,wt),it+=ht(vt,K,pt,Gt,At);else if(wt=_(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(vt=N.next()).done;)vt=vt.value,Gt=yt+Z(vt,wt++),it+=ht(vt,K,pt,Gt,At);else if(Gt==="object"){if(typeof N.then=="function")return ht(ut(N),K,pt,vt,At);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return it}function B(N,K,pt){if(N==null)return N;var vt=[],At=0;return ht(N,vt,"","",function(Gt){return K.call(pt,Gt,At++)}),vt}function et(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(pt){(N._status===0||N._status===-1)&&(N._status=1,N._result=pt)},function(pt){(N._status===0||N._status===-1)&&(N._status=2,N._result=pt)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ct(){}return de.Children={map:B,forEach:function(N,K,pt){B(N,function(){K.apply(this,arguments)},pt)},count:function(N){var K=0;return B(N,function(){K++}),K},toArray:function(N){return B(N,function(K){return K})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},de.Component=M,de.Fragment=n,de.Profiler=o,de.PureComponent=L,de.StrictMode=a,de.Suspense=d,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,de.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},de.cache=function(N){return function(){return N.apply(null,arguments)}},de.cloneElement=function(N,K,pt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var vt=S({},N.props),At=N.key,Gt=void 0;if(K!=null)for(it in K.ref!==void 0&&(Gt=void 0),K.key!==void 0&&(At=""+K.key),K)!O.call(K,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&K.ref===void 0||(vt[it]=K[it]);var it=arguments.length-2;if(it===1)vt.children=pt;else if(1<it){for(var yt=Array(it),wt=0;wt<it;wt++)yt[wt]=arguments[wt+2];vt.children=yt}return F(N.type,At,void 0,void 0,Gt,vt)},de.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},de.createElement=function(N,K,pt){var vt,At={},Gt=null;if(K!=null)for(vt in K.key!==void 0&&(Gt=""+K.key),K)O.call(K,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(At[vt]=K[vt]);var it=arguments.length-2;if(it===1)At.children=pt;else if(1<it){for(var yt=Array(it),wt=0;wt<it;wt++)yt[wt]=arguments[wt+2];At.children=yt}if(N&&N.defaultProps)for(vt in it=N.defaultProps,it)At[vt]===void 0&&(At[vt]=it[vt]);return F(N,Gt,void 0,void 0,null,At)},de.createRef=function(){return{current:null}},de.forwardRef=function(N){return{$$typeof:h,render:N}},de.isValidElement=R,de.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:et}},de.memo=function(N,K){return{$$typeof:p,type:N,compare:K===void 0?null:K}},de.startTransition=function(N){var K=P.T,pt={};P.T=pt;try{var vt=N(),At=P.S;At!==null&&At(pt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(ct,q)}catch(Gt){q(Gt)}finally{P.T=K}},de.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},de.use=function(N){return P.H.use(N)},de.useActionState=function(N,K,pt){return P.H.useActionState(N,K,pt)},de.useCallback=function(N,K){return P.H.useCallback(N,K)},de.useContext=function(N){return P.H.useContext(N)},de.useDebugValue=function(){},de.useDeferredValue=function(N,K){return P.H.useDeferredValue(N,K)},de.useEffect=function(N,K,pt){var vt=P.H;if(typeof pt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(N,K)},de.useId=function(){return P.H.useId()},de.useImperativeHandle=function(N,K,pt){return P.H.useImperativeHandle(N,K,pt)},de.useInsertionEffect=function(N,K){return P.H.useInsertionEffect(N,K)},de.useLayoutEffect=function(N,K){return P.H.useLayoutEffect(N,K)},de.useMemo=function(N,K){return P.H.useMemo(N,K)},de.useOptimistic=function(N,K){return P.H.useOptimistic(N,K)},de.useReducer=function(N,K,pt){return P.H.useReducer(N,K,pt)},de.useRef=function(N){return P.H.useRef(N)},de.useState=function(N){return P.H.useState(N)},de.useSyncExternalStore=function(N,K,pt){return P.H.useSyncExternalStore(N,K,pt)},de.useTransition=function(){return P.H.useTransition()},de.version="19.1.1",de}var $g;function ip(){return $g||($g=1,bh.exports=dM()),bh.exports}var xs=ip(),Ah={exports:{}},Ko={},wh={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function pM(){return tv||(tv=1,(function(r){function t(B,et){var q=B.length;B.push(et);t:for(;0<q;){var ct=q-1>>>1,N=B[ct];if(0<o(N,et))B[ct]=et,B[q]=N,q=ct;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var et=B[0],q=B.pop();if(q!==et){B[0]=q;t:for(var ct=0,N=B.length,K=N>>>1;ct<K;){var pt=2*(ct+1)-1,vt=B[pt],At=pt+1,Gt=B[At];if(0>o(vt,q))At<N&&0>o(Gt,vt)?(B[ct]=Gt,B[At]=q,ct=At):(B[ct]=vt,B[pt]=q,ct=pt);else if(At<N&&0>o(Gt,q))B[ct]=Gt,B[At]=q,ct=At;else break t}}return et}function o(B,et){var q=B.sortIndex-et.sortIndex;return q!==0?q:B.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,v=null,_=3,x=!1,S=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var et=n(p);et!==null;){if(et.callback===null)a(p);else if(et.startTime<=B)a(p),et.sortIndex=et.expirationTime,t(d,et);else break;et=n(p)}}function P(B){if(T=!1,w(B),!S)if(n(d)!==null)S=!0,O||(O=!0,Z());else{var et=n(p);et!==null&&ht(P,et.startTime-B)}}var O=!1,F=-1,G=5,R=-1;function D(){return M?!0:!(r.unstable_now()-R<G)}function k(){if(M=!1,O){var B=r.unstable_now();R=B;var et=!0;try{t:{S=!1,T&&(T=!1,L(F),F=-1),x=!0;var q=_;try{e:{for(w(B),v=n(d);v!==null&&!(v.expirationTime>B&&D());){var ct=v.callback;if(typeof ct=="function"){v.callback=null,_=v.priorityLevel;var N=ct(v.expirationTime<=B);if(B=r.unstable_now(),typeof N=="function"){v.callback=N,w(B),et=!0;break e}v===n(d)&&a(d),w(B)}else a(d);v=n(d)}if(v!==null)et=!0;else{var K=n(p);K!==null&&ht(P,K.startTime-B),et=!1}}break t}finally{v=null,_=q,x=!1}et=void 0}}finally{et?Z():O=!1}}}var Z;if(typeof U=="function")Z=function(){U(k)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ut=ot.port2;ot.port1.onmessage=k,Z=function(){ut.postMessage(null)}}else Z=function(){y(k,0)};function ht(B,et){F=y(function(){B(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var et=3;break;default:et=_}var q=_;_=et;try{return B()}finally{_=q}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,et){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=_;_=B;try{return et()}finally{_=q}},r.unstable_scheduleCallback=function(B,et,q){var ct=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ct+q:ct):q=ct,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,B={id:g++,callback:et,priorityLevel:B,startTime:q,expirationTime:N,sortIndex:-1},q>ct?(B.sortIndex=q,t(p,B),n(d)===null&&B===n(p)&&(T?(L(F),F=-1):T=!0,ht(P,q-ct))):(B.sortIndex=N,t(d,B),S||x||(S=!0,O||(O=!0,Z()))),B},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(B){var et=_;return function(){var q=_;_=et;try{return B.apply(this,arguments)}finally{_=q}}}})(Rh)),Rh}var ev;function mM(){return ev||(ev=1,wh.exports=pM()),wh.exports}var Ch={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function gM(){if(nv)return zn;nv=1;var r=ip();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},zn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},zn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},zn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},zn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},zn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},zn.requestFormReset=function(d){a.d.r(d)},zn.unstable_batchedUpdates=function(d,p){return d(p)},zn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.1.1",zn}var iv;function vM(){if(iv)return Ch.exports;iv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=gM(),Ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function _M(){if(av)return Ko;av=1;var r=mM(),t=ip(),n=vM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var E=!1,A=f.child;A;){if(A===s){E=!0,s=f,l=m;break}if(A===l){E=!0,l=f,s=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===s){E=!0,s=m,l=f;break}if(A===l){E=!0,l=m,s=f;break}A=A.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case U:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case G:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ht=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ct=[],N=-1;function K(e){return{current:e}}function pt(e){0>N||(e.current=ct[N],ct[N]=null,N--)}function vt(e,i){N++,ct[N]=e.current,e.current=i}var At=K(null),Gt=K(null),it=K(null),yt=K(null);function wt(e,i){switch(vt(it,i),vt(Gt,e),vt(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Tg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Tg(i),e=bg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(At),vt(At,e)}function $t(){pt(At),pt(Gt),pt(it)}function jt(e){e.memoizedState!==null&&vt(yt,e);var i=At.current,s=bg(i,e.type);i!==s&&(vt(Gt,e),vt(At,s))}function _e(e){Gt.current===e&&(pt(At),pt(Gt)),yt.current===e&&(pt(yt),Xo._currentValue=q)}var un=Object.prototype.hasOwnProperty,H=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback,ue=r.unstable_shouldYield,se=r.unstable_requestPaint,Ot=r.unstable_now,qe=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,fe=r.unstable_UserBlockingPriority,Qe=r.unstable_NormalPriority,Je=r.unstable_LowPriority,z=r.unstable_IdlePriority,b=r.log,nt=r.unstable_setDisableYieldValue,dt=null,_t=null;function ft(e){if(typeof b=="function"&&nt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(dt,e)}catch{}}var zt=Math.clz32?Math.clz32:Zt,Rt=Math.log,qt=Math.LN2;function Zt(e){return e>>>=0,e===0?32:31-(Rt(e)/qt|0)|0}var St=256,Lt=4194304;function Jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Jt(l):(E&=A,E!==0?f=Jt(E):s||(s=A&~e,s!==0&&(f=Jt(s))))):(A=l&~m,A!==0?f=Jt(A):E!==0?f=Jt(E):s||(s=l&~e,s!==0&&(f=Jt(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function he(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Ct(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,i,s,l,f,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(s=E&~s;0<s;){var mt=31-zt(s),xt=1<<mt;A[mt]=0,I[mt]=-1;var at=tt[mt];if(at!==null)for(tt[mt]=null,mt=0;mt<at.length;mt++){var st=at[mt];st!==null&&(st.lane&=-536870913)}s&=~xt}l!==0&&Mt(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Mt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function Vt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-zt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ne(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function we(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:Xg(e.type))}function Mi(e,i){var s=et.p;try{return et.p=e,i()}finally{et.p=s}}var mn=Math.random().toString(36).slice(2),gn="__reactFiber$"+mn,tn="__reactProps$"+mn,Li="__reactContainer$"+mn,Bs="__reactEvents$"+mn,_l="__reactListeners$"+mn,Is="__reactHandles$"+mn,eo="__reactResources$"+mn,Ni="__reactMarker$"+mn;function Fs(e){delete e[gn],delete e[tn],delete e[Bs],delete e[_l],delete e[Is]}function Yi(e){var i=e[gn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Li]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Cg(e);e!==null;){if(s=e[gn])return s;e=Cg(e)}return i}e=s,s=e.parentNode}return null}function _a(e){if(e=e[gn]||e[Li]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ns(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function xa(e){var i=e[eo];return i||(i=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fn(e){e[Ni]=!0}var xl=new Set,yl={};function C(e,i){Y(e,i),Y(e+"Capture",i)}function Y(e,i){for(yl[e]=i,e=0;e<i.length;e++)xl.add(i[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Q={};function Tt(e){return un.call(Q,e)?!0:un.call(lt,e)?!1:rt.test(e)?Q[e]=!0:(lt[e]=!0,!1)}function Ut(e,i,s){if(Tt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ft(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var ee,ie;function Yt(e){if(ee===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ee=i&&i[1]||"",ie=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+ie}var me=!1;function Ce(e,i){if(!e||me)return"";me=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(st){var at=st}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(st){at=st}e.call(xt.prototype)}}else{try{throw Error()}catch(st){at=st}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var I=E.split(`
`),tt=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===tt.length)for(l=I.length-1,f=tt.length-1;1<=l&&0<=f&&I[l]!==tt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==tt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==tt[f]){var mt=`
`+I[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=f);break}}}finally{me=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Yt(s):""}function Ze(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return Yt("Activity");default:return""}}function Ie(e){try{var i="";do i+=Ze(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function te(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(e){var i=te(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ee(e){e._valueTracker||(e._valueTracker=je(e))}function Nn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=te(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hn=/[\n"\\]/g;function En(e){return e.replace(Hn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ke(e,i,s,l,f,m,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ge(i)):e.value!==""+ge(i)&&(e.value=""+ge(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Pn(e,E,ge(i)):s!=null?Pn(e,E,ge(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ge(A):e.removeAttribute("name")}function Gn(e,i,s,l,f,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+ge(s):"",i=i!=null?""+ge(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Pn(e,i,s){i==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function en(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ge(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Cn(e,i,s){if(i!=null&&(i=""+ge(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ge(s):""}function Hs(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ht(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ge(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function qn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var lx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||lx.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function bp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Tp(e,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Tp(e,m,i[m])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ux=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return ux.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Eu=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function Ap(e){var i=_a(e);if(i&&(e=i.stateNode)){var s=e[tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(ke(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+En(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[tn]||null;if(!f)throw Error(a(90));ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Nn(l)}break t;case"textarea":Cn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&en(e,!!s.multiple,i,!1)}}}var bu=!1;function wp(e,i,s){if(bu)return e(i,s);bu=!0;try{var l=e(i);return l}finally{if(bu=!1,(Gs!==null||Vs!==null)&&(rc(),Gs&&(i=Gs,e=Vs,Vs=Gs=null,Ap(i),e)))for(i=0;i<e.length;i++)Ap(e[i])}}function no(e,i){var s=e.stateNode;if(s===null)return null;var l=s[tn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(ji)try{var io={};Object.defineProperty(io,"passive",{get:function(){Au=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Au=!1}var ya=null,wu=null,Sl=null;function Rp(){if(Sl)return Sl;var e,i=wu,s=i.length,l,f="value"in ya?ya.value:ya.textContent,m=f.length;for(e=0;e<s&&i[e]===f[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===f[m-l];l++);return Sl=f.slice(e,1<l?1-l:void 0)}function El(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Cp(){return!1}function Yn(e){function i(s,l,f,m,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Tl:Cp,this.isPropagationStopped=Cp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Yn(is),ao=g({},is,{view:0,detail:0}),fx=Yn(ao),Ru,Cu,so,Al=g({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Ru=e.screenX-so.screenX,Cu=e.screenY-so.screenY):Cu=Ru=0,so=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Dp=Yn(Al),hx=g({},Al,{dataTransfer:0}),dx=Yn(hx),px=g({},ao,{relatedTarget:0}),Du=Yn(px),mx=g({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=Yn(mx),vx=g({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_x=Yn(vx),xx=g({},is,{data:0}),Up=Yn(xx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Sx[e])?!!i[e]:!1}function Uu(){return Ex}var Tx=g({},ao,{key:function(e){if(e.key){var i=yx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bx=Yn(Tx),Ax=g({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Yn(Ax),wx=g({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Rx=Yn(wx),Cx=g({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=Yn(Cx),Ux=g({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Yn(Ux),Nx=g({},is,{newState:0,oldState:0}),Px=Yn(Nx),Ox=[9,13,27,32],Lu=ji&&"CompositionEvent"in window,ro=null;ji&&"documentMode"in document&&(ro=document.documentMode);var zx=ji&&"TextEvent"in window&&!ro,Np=ji&&(!Lu||ro&&8<ro&&11>=ro),Pp=" ",Op=!1;function zp(e,i){switch(e){case"keyup":return Ox.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function Bx(e,i){switch(e){case"compositionend":return Bp(i);case"keypress":return i.which!==32?null:(Op=!0,Pp);case"textInput":return e=i.data,e===Pp&&Op?null:e;default:return null}}function Ix(e,i){if(ks)return e==="compositionend"||!Lu&&zp(e,i)?(e=Rp(),Sl=wu=ya=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Np&&i.locale!=="ko"?null:i.data;default:return null}}var Fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Fx[e.type]:i==="textarea"}function Fp(e,i,s,l){Gs?Vs?Vs.push(l):Vs=[l]:Gs=l,i=hc(i,"onChange"),0<i.length&&(s=new bl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var oo=null,lo=null;function Hx(e){xg(e,0)}function wl(e){var i=ns(e);if(Nn(i))return e}function Hp(e,i){if(e==="change")return i}var Gp=!1;if(ji){var Nu;if(ji){var Pu="oninput"in document;if(!Pu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Pu=typeof Vp.oninput=="function"}Nu=Pu}else Nu=!1;Gp=Nu&&(!document.documentMode||9<document.documentMode)}function kp(){oo&&(oo.detachEvent("onpropertychange",Xp),lo=oo=null)}function Xp(e){if(e.propertyName==="value"&&wl(lo)){var i=[];Fp(i,lo,e,Tu(e)),wp(Hx,i)}}function Gx(e,i,s){e==="focusin"?(kp(),oo=i,lo=s,oo.attachEvent("onpropertychange",Xp)):e==="focusout"&&kp()}function Vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(lo)}function kx(e,i){if(e==="click")return wl(i)}function Xx(e,i){if(e==="input"||e==="change")return wl(i)}function Wx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ti=typeof Object.is=="function"?Object.is:Wx;function co(e,i){if(ti(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!un.call(i,f)||!ti(e[f],i[f]))return!1}return!0}function Wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,i){var s=Wp(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Wp(s)}}function Yp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Yp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Si(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Si(e.document)}return i}function Ou(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var qx=ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,zu=null,uo=null,Bu=!1;function Zp(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Bu||Xs==null||Xs!==Si(l)||(l=Xs,"selectionStart"in l&&Ou(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&co(uo,l)||(uo=l,l=hc(zu,"onSelect"),0<l.length&&(i=new bl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=Xs)))}function as(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Ws={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Iu={},Kp={};ji&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ss(e){if(Iu[e])return Iu[e];if(!Ws[e])return e;var i=Ws[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Kp)return Iu[e]=i[s];return e}var Qp=ss("animationend"),Jp=ss("animationiteration"),$p=ss("animationstart"),Yx=ss("transitionrun"),jx=ss("transitionstart"),Zx=ss("transitioncancel"),tm=ss("transitionend"),em=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Ei(e,i){em.set(e,i),C(i,[e])}var nm=new WeakMap;function di(e,i){if(typeof e=="object"&&e!==null){var s=nm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Ie(i)},nm.set(e,i),i)}return{value:e,source:i,stack:Ie(i)}}var pi=[],qs=0,Hu=0;function Rl(){for(var e=qs,i=Hu=qs=0;i<e;){var s=pi[i];pi[i++]=null;var l=pi[i];pi[i++]=null;var f=pi[i];pi[i++]=null;var m=pi[i];if(pi[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&im(s,f,m)}}function Cl(e,i,s,l){pi[qs++]=e,pi[qs++]=i,pi[qs++]=s,pi[qs++]=l,Hu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gu(e,i,s,l){return Cl(e,i,s,l),Dl(e)}function Ys(e,i){return Cl(e,null,null,i),Dl(e)}function im(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-zt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Dl(e){if(50<zo)throw zo=0,jf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var js={};function Kx(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,i,s,l){return new Kx(e,i,s,l)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,i){var s=e.alternate;return s===null?(s=ei(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function am(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ul(e,i,s,l,f,m){var E=0;if(l=e,typeof e=="function")Vu(e)&&(E=1);else if(typeof e=="string")E=Jy(e,s,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=ei(31,s,i,f),e.elementType=R,e.lanes=m,e;case S:return rs(s.children,f,m,i);case T:E=8,f|=24;break;case M:return e=ei(12,s,i,f|2),e.elementType=M,e.lanes=m,e;case P:return e=ei(13,s,i,f),e.elementType=P,e.lanes=m,e;case O:return e=ei(19,s,i,f),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case U:E=10;break t;case L:E=9;break t;case w:E=11;break t;case F:E=14;break t;case G:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ei(E,s,i,f),i.elementType=e,i.type=l,i.lanes=m,i}function rs(e,i,s,l){return e=ei(7,e,l,i),e.lanes=s,e}function ku(e,i,s){return e=ei(6,e,null,i),e.lanes=s,e}function Xu(e,i,s){return i=ei(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Zs=[],Ks=0,Ll=null,Nl=0,mi=[],gi=0,os=null,Ki=1,Qi="";function ls(e,i){Zs[Ks++]=Nl,Zs[Ks++]=Ll,Ll=e,Nl=i}function sm(e,i,s){mi[gi++]=Ki,mi[gi++]=Qi,mi[gi++]=os,os=e;var l=Ki;e=Qi;var f=32-zt(l)-1;l&=~(1<<f),s+=1;var m=32-zt(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ki=1<<32-zt(i)+f|s<<f|l,Qi=m+e}else Ki=1<<m|s<<f|l,Qi=e}function Wu(e){e.return!==null&&(ls(e,1),sm(e,1,0))}function qu(e){for(;e===Ll;)Ll=Zs[--Ks],Zs[Ks]=null,Nl=Zs[--Ks],Zs[Ks]=null;for(;e===os;)os=mi[--gi],mi[gi]=null,Qi=mi[--gi],mi[gi]=null,Ki=mi[--gi],mi[gi]=null}var Vn=null,nn=null,Le=!1,cs=null,Pi=!1,Yu=Error(a(519));function us(e){var i=Error(a(418,""));throw po(di(i,e)),Yu}function rm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[gn]=e,i[tn]=l,s){case"dialog":be("cancel",i),be("close",i);break;case"iframe":case"object":case"embed":be("load",i);break;case"video":case"audio":for(s=0;s<Io.length;s++)be(Io[s],i);break;case"source":be("error",i);break;case"img":case"image":case"link":be("error",i),be("load",i);break;case"details":be("toggle",i);break;case"input":be("invalid",i),Gn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ee(i);break;case"select":be("invalid",i);break;case"textarea":be("invalid",i),Hs(i,l.value,l.defaultValue,l.children),Ee(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Eg(i.textContent,s)?(l.popover!=null&&(be("beforetoggle",i),be("toggle",i)),l.onScroll!=null&&be("scroll",i),l.onScrollEnd!=null&&be("scrollend",i),l.onClick!=null&&(i.onclick=dc),i=!0):i=!1,i||us(e)}function om(e){for(Vn=e.return;Vn;)switch(Vn.tag){case 5:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Vn=Vn.return}}function fo(e){if(e!==Vn)return!1;if(!Le)return om(e),Le=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||uh(e.type,e.memoizedProps)),s=!s),s&&nn&&us(e),om(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){nn=bi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}nn=null}}else i===27?(i=nn,za(e.type)?(e=ph,ph=null,nn=e):nn=i):nn=Vn?bi(e.stateNode.nextSibling):null;return!0}function ho(){nn=Vn=null,Le=!1}function lm(){var e=cs;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),cs=null),e}function po(e){cs===null?cs=[e]:cs.push(e)}var ju=K(null),fs=null,Ji=null;function Ma(e,i,s){vt(ju,i._currentValue),i._currentValue=s}function $i(e){e._currentValue=ju.current,pt(ju)}function Zu(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Ku(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Zu(m.return,s,e),l||(E=null);break t}m=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Zu(E,s,e),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===e){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function mo(e,i,s,l){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var A=f.type;ti(f.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(f===yt.current){if(E=f.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}f=f.return}e!==null&&Ku(i,e,s,l),i.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){fs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return cm(fs,e)}function Ol(e,i){return fs===null&&hs(e),cm(e,i)}function cm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ji===null){if(e===null)throw Error(a(308));Ji=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ji=Ji.next=i;return s}var Qx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Jx=r.unstable_scheduleCallback,$x=r.unstable_NormalPriority,vn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Qx,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&Jx($x,function(){e.controller.abort()})}var vo=null,Ju=0,Qs=0,Js=null;function ty(e,i){if(vo===null){var s=vo=[];Ju=0,Qs=eh(),Js={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ju++,i.then(um,um),i}function um(){if(--Ju===0&&vo!==null){Js!==null&&(Js.status="fulfilled");var e=vo;vo=null,Qs=0,Js=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ey(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var fm=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&ty(e,i),fm!==null&&fm(e,i)};var ds=K(null);function $u(){var e=ds.current;return e!==null?e:Ye.pooledCache}function zl(e,i){i===null?vt(ds,ds.current):vt(ds,i.pool)}function hm(){var e=$u();return e===null?null:{parent:vn._currentValue,pool:e}}var _o=Error(a(460)),dm=Error(a(474)),Bl=Error(a(542)),tf={then:function(){}};function pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Il(){}function mm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Il,Il),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vm(e),e;default:if(typeof i.status=="string")i.then(Il,Il);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vm(e),e}throw xo=i,_o}}var xo=null;function gm(){if(xo===null)throw Error(a(459));var e=xo;return xo=null,e}function vm(e){if(e===_o||e===Bl)throw Error(a(483))}var Sa=!1;function ef(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Dl(e),im(e,null,s),i}return Cl(e,l,i,s),Dl(e)}function yo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Vt(e,s)}}function af(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var sf=!1;function Mo(){if(sf){var e=Js;if(e!==null)throw e}}function So(e,i,s,l){sf=!1;var f=e.updateQueue;Sa=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,tt=I.next;I.next=null,E===null?m=tt:E.next=tt,E=I;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==E&&(A===null?mt.firstBaseUpdate=tt:A.next=tt,mt.lastBaseUpdate=I))}if(m!==null){var xt=f.baseState;E=0,mt=tt=I=null,A=m;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(Ae&at)===at:(l&at)===at){at!==0&&at===Qs&&(sf=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var re=e,ne=A;at=i;var Ge=s;switch(ne.tag){case 1:if(re=ne.payload,typeof re=="function"){xt=re.call(Ge,xt,at);break t}xt=re;break t;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ne.payload,at=typeof re=="function"?re.call(Ge,xt,at):re,at==null)break t;xt=g({},xt,at);break t;case 2:Sa=!0}}at=A.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=f.callbacks,st===null?f.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(tt=mt=st,I=xt):mt=mt.next=st,E|=at;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;st=A,A=st.next,st.next=null,f.lastBaseUpdate=st,f.shared.pending=null}}while(!0);mt===null&&(I=xt),f.baseState=I,f.firstBaseUpdate=tt,f.lastBaseUpdate=mt,m===null&&(f.shared.lanes=0),La|=E,e.lanes=E,e.memoizedState=xt}}function _m(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function xm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)_m(s[e],i)}var $s=K(null),Fl=K(0);function ym(e,i){e=ra,vt(Fl,e),vt($s,i),ra=e|i.baseLanes}function rf(){vt(Fl,ra),vt($s,$s.current)}function of(){ra=Fl.current,pt($s),pt(Fl)}var ba=0,xe=null,Fe=null,hn=null,Hl=!1,tr=!1,ps=!1,Gl=0,Eo=0,er=null,ny=0;function rn(){throw Error(a(321))}function lf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ti(e[s],i[s]))return!1;return!0}function cf(e,i,s,l,f,m){return ba=m,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?i0:a0,ps=!1,m=s(l,f),ps=!1,tr&&(m=Sm(i,s,l,f)),Mm(e),m}function Mm(e){B.H=Yl;var i=Fe!==null&&Fe.next!==null;if(ba=0,hn=Fe=xe=null,Hl=!1,Eo=0,er=null,i)throw Error(a(300));e===null||Tn||(e=e.dependencies,e!==null&&Pl(e)&&(Tn=!0))}function Sm(e,i,s,l){xe=e;var f=0;do{if(tr&&(er=null),Eo=0,tr=!1,25<=f)throw Error(a(301));if(f+=1,hn=Fe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=cy,m=i(s,l)}while(tr);return m}function iy(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?To(i):i,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(xe.flags|=1024),i}function uf(){var e=Gl!==0;return Gl=0,e}function ff(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function hf(e){if(Hl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Hl=!1}ba=0,hn=Fe=xe=null,tr=!1,Eo=Gl=0,er=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?xe.memoizedState=hn=e:hn=hn.next=e,hn}function dn(){if(Fe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var i=hn===null?xe.memoizedState:hn.next;if(i!==null)hn=i,Fe=e;else{if(e===null)throw xe.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},hn===null?xe.memoizedState=hn=e:hn=hn.next=e}return hn}function df(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var i=Eo;return Eo+=1,er===null&&(er=[]),e=mm(er,e,i),i=xe,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?i0:a0),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===U)return On(e)}throw Error(a(438,String(e)))}function pf(e){var i=null,s=xe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=df(),xe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=D;return i.index++,s}function ta(e,i){return typeof i=="function"?i(e):i}function kl(e){var i=dn();return mf(i,Fe,e)}function mf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var A=E=null,I=null,tt=i,mt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Ae&xt)===xt:(ba&xt)===xt){var at=tt.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Qs&&(mt=!0);else if((ba&at)===at){tt=tt.next,at===Qs&&(mt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=xt,E=m):I=I.next=xt,xe.lanes|=at,La|=at;xt=tt.action,ps&&s(m,xt),m=tt.hasEagerState?tt.eagerState:s(m,xt)}else at={lane:xt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=at,E=m):I=I.next=at,xe.lanes|=xt,La|=xt;tt=tt.next}while(tt!==null&&tt!==i);if(I===null?E=m:I.next=A,!ti(m,e.memoizedState)&&(Tn=!0,mt&&(s=Js,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gf(e){var i=dn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do m=e(m,E.action),E=E.next;while(E!==f);ti(m,i.memoizedState)||(Tn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Em(e,i,s){var l=xe,f=dn(),m=Le;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!ti((Fe||f).memoizedState,s);E&&(f.memoizedState=s,Tn=!0),f=f.queue;var A=Am.bind(null,l,f,e);if(bo(2048,8,A,[e]),f.getSnapshot!==i||E||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,nr(9,Xl(),bm.bind(null,l,f,s,i),null),Ye===null)throw Error(a(349));m||(ba&124)!==0||Tm(l,i,s)}return s}function Tm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=xe.updateQueue,i===null?(i=df(),xe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function bm(e,i,s,l){i.value=s,i.getSnapshot=l,wm(i)&&Rm(e)}function Am(e,i,s){return s(function(){wm(i)&&Rm(e)})}function wm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ti(e,s)}catch{return!0}}function Rm(e){var i=Ys(e,2);i!==null&&ri(i,e,2)}function vf(e){var i=jn();if(typeof e=="function"){var s=e;if(e=s(),ps){ft(!0);try{s()}finally{ft(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},i}function Cm(e,i,s,l){return e.baseState=s,mf(e,Fe,typeof l=="function"?l:ta)}function ay(e,i,s,l,f){if(ql(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Dm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Dm(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var m=B.T,E={};B.T=E;try{var A=s(f,l),I=B.S;I!==null&&I(E,A),Um(e,i,A)}catch(tt){_f(e,i,tt)}finally{B.T=m}}else try{m=s(f,l),Um(e,i,m)}catch(tt){_f(e,i,tt)}}function Um(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Lm(e,i,l)},function(l){return _f(e,i,l)}):Lm(e,i,s)}function Lm(e,i,s){i.status="fulfilled",i.value=s,Nm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Dm(e,s)))}function _f(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Nm(i),i=i.next;while(i!==l)}e.action=null}function Nm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Pm(e,i){return i}function Om(e,i){if(Le){var s=Ye.formState;if(s!==null){t:{var l=xe;if(Le){if(nn){e:{for(var f=nn,m=Pi;f.nodeType!==8;){if(!m){f=null;break e}if(f=bi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){nn=bi(f.nextSibling),l=f.data==="F!";break t}}us(l)}l=!1}l&&(i=s[0])}}return s=jn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:i},s.queue=l,s=t0.bind(null,xe,l),l.dispatch=s,l=vf(!1),m=Ef.bind(null,xe,!1,l.queue),l=jn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=ay.bind(null,xe,f,m,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function zm(e){var i=dn();return Bm(i,Fe,e)}function Bm(e,i,s){if(i=mf(e,i,Pm)[0],e=kl(ta)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(E){throw E===_o?Bl:E}else l=i;i=dn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(xe.flags|=2048,nr(9,Xl(),sy.bind(null,f,s),null)),[l,m,e]}function sy(e,i){e.action=i}function Im(e){var i=dn(),s=Fe;if(s!==null)return Bm(i,s,e);dn(),i=i.memoizedState,s=dn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function nr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=xe.updateQueue,i===null&&(i=df(),xe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Xl(){return{destroy:void 0,resource:void 0}}function Fm(){return dn().memoizedState}function Wl(e,i,s,l){var f=jn();l=l===void 0?null:l,xe.flags|=e,f.memoizedState=nr(1|i,Xl(),s,l)}function bo(e,i,s,l){var f=dn();l=l===void 0?null:l;var m=f.memoizedState.inst;Fe!==null&&l!==null&&lf(l,Fe.memoizedState.deps)?f.memoizedState=nr(i,m,s,l):(xe.flags|=e,f.memoizedState=nr(1|i,m,s,l))}function Hm(e,i){Wl(8390656,8,e,i)}function Gm(e,i){bo(2048,8,e,i)}function Vm(e,i){return bo(4,2,e,i)}function km(e,i){return bo(4,4,e,i)}function Xm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Wm(e,i,s){s=s!=null?s.concat([e]):null,bo(4,4,Xm.bind(null,i,e),s)}function xf(){}function qm(e,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&lf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Ym(e,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&lf(i,l[1]))return l[0];if(l=e(),ps){ft(!0);try{e()}finally{ft(!1)}}return s.memoizedState=[l,i],l}function yf(e,i,s){return s===void 0||(ba&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=K0(),xe.lanes|=e,La|=e,s)}function jm(e,i,s,l){return ti(s,i)?s:$s.current!==null?(e=yf(e,s,l),ti(e,i)||(Tn=!0),e):(ba&42)===0?(Tn=!0,e.memoizedState=s):(e=K0(),xe.lanes|=e,La|=e,i)}function Zm(e,i,s,l,f){var m=et.p;et.p=m!==0&&8>m?m:8;var E=B.T,A={};B.T=A,Ef(e,!1,i,s);try{var I=f(),tt=B.S;if(tt!==null&&tt(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var mt=ey(I,l);Ao(e,i,mt,si(e))}else Ao(e,i,l,si(e))}catch(xt){Ao(e,i,{then:function(){},status:"rejected",reason:xt},si())}finally{et.p=m,B.T=E}}function ry(){}function Mf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=Km(e).queue;Zm(e,f,i,q,s===null?ry:function(){return Qm(e),s(l)})}function Km(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Qm(e){var i=Km(e).next.queue;Ao(e,i,{},si())}function Sf(){return On(Xo)}function Jm(){return dn().memoizedState}function $m(){return dn().memoizedState}function oy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=si();e=Ea(s);var l=Ta(i,e,s);l!==null&&(ri(l,i,s),yo(l,i,s)),i={cache:Qu()},e.payload=i;return}i=i.return}}function ly(e,i,s){var l=si();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ql(e)?e0(i,s):(s=Gu(e,i,s,l),s!==null&&(ri(s,e,l),n0(s,i,l)))}function t0(e,i,s){var l=si();Ao(e,i,s,l)}function Ao(e,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ql(e))e0(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,A=m(E,s);if(f.hasEagerState=!0,f.eagerState=A,ti(A,E))return Cl(e,i,f,0),Ye===null&&Rl(),!1}catch{}finally{}if(s=Gu(e,i,f,l),s!==null)return ri(s,e,l),n0(s,i,l),!0}return!1}function Ef(e,i,s,l){if(l={lane:2,revertLane:eh(),action:l,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(i)throw Error(a(479))}else i=Gu(e,s,l,2),i!==null&&ri(i,e,2)}function ql(e){var i=e.alternate;return e===xe||i!==null&&i===xe}function e0(e,i){tr=Hl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function n0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Vt(e,s)}}var Yl={readContext:On,use:Vl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},i0={readContext:On,use:Vl,useCallback:function(e,i){return jn().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:Hm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Wl(4194308,4,Xm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Wl(4194308,4,e,i)},useInsertionEffect:function(e,i){Wl(4,2,e,i)},useMemo:function(e,i){var s=jn();i=i===void 0?null:i;var l=e();if(ps){ft(!0);try{e()}finally{ft(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=jn();if(s!==void 0){var f=s(i);if(ps){ft(!0);try{s(i)}finally{ft(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=ly.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var i=jn();return e={current:e},i.memoizedState=e},useState:function(e){e=vf(e);var i=e.queue,s=t0.bind(null,xe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:xf,useDeferredValue:function(e,i){var s=jn();return yf(s,e,i)},useTransition:function(){var e=vf(!1);return e=Zm.bind(null,xe,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=xe,f=jn();if(Le){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ye===null)throw Error(a(349));(Ae&124)!==0||Tm(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Hm(Am.bind(null,l,m,e),[e]),l.flags|=2048,nr(9,Xl(),bm.bind(null,l,m,s,i),null),s},useId:function(){var e=jn(),i=Ye.identifierPrefix;if(Le){var s=Qi,l=Ki;s=(l&~(1<<32-zt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Gl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=ny++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Sf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var i=jn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ef.bind(null,xe,!0,s),s.dispatch=i,[e,i]},useMemoCache:pf,useCacheRefresh:function(){return jn().memoizedState=oy.bind(null,xe)}},a0={readContext:On,use:Vl,useCallback:qm,useContext:On,useEffect:Gm,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:kl,useRef:Fm,useState:function(){return kl(ta)},useDebugValue:xf,useDeferredValue:function(e,i){var s=dn();return jm(s,Fe.memoizedState,e,i)},useTransition:function(){var e=kl(ta)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:Sf,useFormState:zm,useActionState:zm,useOptimistic:function(e,i){var s=dn();return Cm(s,Fe,e,i)},useMemoCache:pf,useCacheRefresh:$m},cy={readContext:On,use:Vl,useCallback:qm,useContext:On,useEffect:Gm,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:gf,useRef:Fm,useState:function(){return gf(ta)},useDebugValue:xf,useDeferredValue:function(e,i){var s=dn();return Fe===null?yf(s,e,i):jm(s,Fe.memoizedState,e,i)},useTransition:function(){var e=gf(ta)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:Sf,useFormState:Im,useActionState:Im,useOptimistic:function(e,i){var s=dn();return Fe!==null?Cm(s,Fe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:pf,useCacheRefresh:$m},ir=null,wo=0;function jl(e){var i=wo;return wo+=1,ir===null&&(ir=[]),mm(ir,e,i)}function Ro(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Zl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function s0(e){var i=e._init;return i(e._payload)}function r0(e){function i(j,X){if(e){var $=j.deletions;$===null?(j.deletions=[X],j.flags|=16):$.push(X)}}function s(j,X){if(!e)return null;for(;X!==null;)i(j,X),X=X.sibling;return null}function l(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function f(j,X){return j=Zi(j,X),j.index=0,j.sibling=null,j}function m(j,X,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<X?(j.flags|=67108866,X):$):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function E(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,$,gt){return X===null||X.tag!==6?(X=ku($,j.mode,gt),X.return=j,X):(X=f(X,$),X.return=j,X)}function I(j,X,$,gt){var Ht=$.type;return Ht===S?mt(j,X,$.props.children,gt,$.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&s0(Ht)===X.type)?(X=f(X,$.props),Ro(X,$),X.return=j,X):(X=Ul($.type,$.key,$.props,null,j.mode,gt),Ro(X,$),X.return=j,X)}function tt(j,X,$,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Xu($,j.mode,gt),X.return=j,X):(X=f(X,$.children||[]),X.return=j,X)}function mt(j,X,$,gt,Ht){return X===null||X.tag!==7?(X=rs($,j.mode,gt,Ht),X.return=j,X):(X=f(X,$),X.return=j,X)}function xt(j,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=ku(""+X,j.mode,$),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return $=Ul(X.type,X.key,X.props,null,j.mode,$),Ro($,X),$.return=j,$;case x:return X=Xu(X,j.mode,$),X.return=j,X;case G:var gt=X._init;return X=gt(X._payload),xt(j,X,$)}if(ht(X)||Z(X))return X=rs(X,j.mode,$,null),X.return=j,X;if(typeof X.then=="function")return xt(j,jl(X),$);if(X.$$typeof===U)return xt(j,Ol(j,X),$);Zl(j,X)}return null}function at(j,X,$,gt){var Ht=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:A(j,X,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return $.key===Ht?I(j,X,$,gt):null;case x:return $.key===Ht?tt(j,X,$,gt):null;case G:return Ht=$._init,$=Ht($._payload),at(j,X,$,gt)}if(ht($)||Z($))return Ht!==null?null:mt(j,X,$,gt,null);if(typeof $.then=="function")return at(j,X,jl($),gt);if($.$$typeof===U)return at(j,X,Ol(j,$),gt);Zl(j,$)}return null}function st(j,X,$,gt,Ht){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get($)||null,A(X,j,""+gt,Ht);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case _:return j=j.get(gt.key===null?$:gt.key)||null,I(X,j,gt,Ht);case x:return j=j.get(gt.key===null?$:gt.key)||null,tt(X,j,gt,Ht);case G:var Me=gt._init;return gt=Me(gt._payload),st(j,X,$,gt,Ht)}if(ht(gt)||Z(gt))return j=j.get($)||null,mt(X,j,gt,Ht,null);if(typeof gt.then=="function")return st(j,X,$,jl(gt),Ht);if(gt.$$typeof===U)return st(j,X,$,Ol(X,gt),Ht);Zl(X,gt)}return null}function re(j,X,$,gt){for(var Ht=null,Me=null,Qt=X,ae=X=0,An=null;Qt!==null&&ae<$.length;ae++){Qt.index>ae?(An=Qt,Qt=null):An=Qt.sibling;var De=at(j,Qt,$[ae],gt);if(De===null){Qt===null&&(Qt=An);break}e&&Qt&&De.alternate===null&&i(j,Qt),X=m(De,X,ae),Me===null?Ht=De:Me.sibling=De,Me=De,Qt=An}if(ae===$.length)return s(j,Qt),Le&&ls(j,ae),Ht;if(Qt===null){for(;ae<$.length;ae++)Qt=xt(j,$[ae],gt),Qt!==null&&(X=m(Qt,X,ae),Me===null?Ht=Qt:Me.sibling=Qt,Me=Qt);return Le&&ls(j,ae),Ht}for(Qt=l(Qt);ae<$.length;ae++)An=st(Qt,j,ae,$[ae],gt),An!==null&&(e&&An.alternate!==null&&Qt.delete(An.key===null?ae:An.key),X=m(An,X,ae),Me===null?Ht=An:Me.sibling=An,Me=An);return e&&Qt.forEach(function(Ga){return i(j,Ga)}),Le&&ls(j,ae),Ht}function ne(j,X,$,gt){if($==null)throw Error(a(151));for(var Ht=null,Me=null,Qt=X,ae=X=0,An=null,De=$.next();Qt!==null&&!De.done;ae++,De=$.next()){Qt.index>ae?(An=Qt,Qt=null):An=Qt.sibling;var Ga=at(j,Qt,De.value,gt);if(Ga===null){Qt===null&&(Qt=An);break}e&&Qt&&Ga.alternate===null&&i(j,Qt),X=m(Ga,X,ae),Me===null?Ht=Ga:Me.sibling=Ga,Me=Ga,Qt=An}if(De.done)return s(j,Qt),Le&&ls(j,ae),Ht;if(Qt===null){for(;!De.done;ae++,De=$.next())De=xt(j,De.value,gt),De!==null&&(X=m(De,X,ae),Me===null?Ht=De:Me.sibling=De,Me=De);return Le&&ls(j,ae),Ht}for(Qt=l(Qt);!De.done;ae++,De=$.next())De=st(Qt,j,ae,De.value,gt),De!==null&&(e&&De.alternate!==null&&Qt.delete(De.key===null?ae:De.key),X=m(De,X,ae),Me===null?Ht=De:Me.sibling=De,Me=De);return e&&Qt.forEach(function(uM){return i(j,uM)}),Le&&ls(j,ae),Ht}function Ge(j,X,$,gt){if(typeof $=="object"&&$!==null&&$.type===S&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case _:t:{for(var Ht=$.key;X!==null;){if(X.key===Ht){if(Ht=$.type,Ht===S){if(X.tag===7){s(j,X.sibling),gt=f(X,$.props.children),gt.return=j,j=gt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&s0(Ht)===X.type){s(j,X.sibling),gt=f(X,$.props),Ro(gt,$),gt.return=j,j=gt;break t}s(j,X);break}else i(j,X);X=X.sibling}$.type===S?(gt=rs($.props.children,j.mode,gt,$.key),gt.return=j,j=gt):(gt=Ul($.type,$.key,$.props,null,j.mode,gt),Ro(gt,$),gt.return=j,j=gt)}return E(j);case x:t:{for(Ht=$.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){s(j,X.sibling),gt=f(X,$.children||[]),gt.return=j,j=gt;break t}else{s(j,X);break}else i(j,X);X=X.sibling}gt=Xu($,j.mode,gt),gt.return=j,j=gt}return E(j);case G:return Ht=$._init,$=Ht($._payload),Ge(j,X,$,gt)}if(ht($))return re(j,X,$,gt);if(Z($)){if(Ht=Z($),typeof Ht!="function")throw Error(a(150));return $=Ht.call($),ne(j,X,$,gt)}if(typeof $.then=="function")return Ge(j,X,jl($),gt);if($.$$typeof===U)return Ge(j,X,Ol(j,$),gt);Zl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(s(j,X.sibling),gt=f(X,$),gt.return=j,j=gt):(s(j,X),gt=ku($,j.mode,gt),gt.return=j,j=gt),E(j)):s(j,X)}return function(j,X,$,gt){try{wo=0;var Ht=Ge(j,X,$,gt);return ir=null,Ht}catch(Qt){if(Qt===_o||Qt===Bl)throw Qt;var Me=ei(29,Qt,null,j.mode);return Me.lanes=gt,Me.return=j,Me}finally{}}}var ar=r0(!0),o0=r0(!1),vi=K(null),Oi=null;function Aa(e){var i=e.alternate;vt(_n,_n.current&1),vt(vi,e),Oi===null&&(i===null||$s.current!==null||i.memoizedState!==null)&&(Oi=e)}function l0(e){if(e.tag===22){if(vt(_n,_n.current),vt(vi,e),Oi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Oi=e)}}else wa()}function wa(){vt(_n,_n.current),vt(vi,vi.current)}function ea(e){pt(vi),Oi===e&&(Oi=null),pt(_n)}var _n=K(0);function Kl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||dh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Tf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var bf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=si(),f=Ea(l);f.payload=i,s!=null&&(f.callback=s),i=Ta(e,f,l),i!==null&&(ri(i,e,l),yo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=si(),f=Ea(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ta(e,f,l),i!==null&&(ri(i,e,l),yo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=si(),l=Ea(s);l.tag=2,i!=null&&(l.callback=i),i=Ta(e,l,s),i!==null&&(ri(i,e,s),yo(i,e,s))}};function c0(e,i,s,l,f,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!co(s,l)||!co(f,m):!0}function u0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&bf.enqueueReplaceState(i,i.state,null)}function ms(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function f0(e){Ql(e)}function h0(e){console.error(e)}function d0(e){Ql(e)}function Jl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function p0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Af(e,i,s){return s=Ea(s),s.tag=3,s.payload={element:null},s.callback=function(){Jl(e,i)},s}function m0(e){return e=Ea(e),e.tag=3,e}function g0(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){p0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){p0(i,s,l),typeof f!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function uy(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&mo(i,s,f,!0),s=vi.current,s!==null){switch(s.tag){case 13:return Oi===null?Kf():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===tf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Jf(e,l,f)),!1;case 22:return s.flags|=65536,l===tf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Jf(e,l,f)),!1}throw Error(a(435,s.tag))}return Jf(e,l,f),Kf(),!1}if(Le)return i=vi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Yu&&(e=Error(a(422),{cause:l}),po(di(e,s)))):(l!==Yu&&(i=Error(a(423),{cause:l}),po(di(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=di(l,s),f=Af(e.stateNode,l,f),af(e,f),an!==4&&(an=2)),!1;var m=Error(a(520),{cause:l});if(m=di(m,s),Oo===null?Oo=[m]:Oo.push(m),an!==4&&(an=2),i===null)return!0;l=di(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Af(s.stateNode,l,e),af(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Na===null||!Na.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=m0(f),g0(f,e,s,l),af(s,f),!1}s=s.return}while(s!==null);return!1}var v0=Error(a(461)),Tn=!1;function Dn(e,i,s,l){i.child=e===null?o0(i,null,s,l):ar(i,e.child,s,l)}function _0(e,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var A in l)A!=="ref"&&(E[A]=l[A])}else E=l;return hs(i),l=cf(e,i,s,E,m,f),A=uf(),e!==null&&!Tn?(ff(e,i,f),na(e,i,f)):(Le&&A&&Wu(i),i.flags|=1,Dn(e,i,l,f),i.child)}function x0(e,i,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!Vu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,y0(e,i,m,l,f)):(e=Ul(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Pf(e,f)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:co,s(E,l)&&e.ref===i.ref)return na(e,i,f)}return i.flags|=1,e=Zi(m,l),e.ref=i.ref,e.return=i,i.child=e}function y0(e,i,s,l,f){if(e!==null){var m=e.memoizedProps;if(co(m,l)&&e.ref===i.ref)if(Tn=!1,i.pendingProps=l=m,Pf(e,f))(e.flags&131072)!==0&&(Tn=!0);else return i.lanes=e.lanes,na(e,i,f)}return wf(e,i,s,l,f)}function M0(e,i,s){var l=i.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=i.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return S0(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(i,m!==null?m.cachePool:null),m!==null?ym(i,m):rf(),l0(i);else return i.lanes=i.childLanes=536870912,S0(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(zl(i,m.cachePool),ym(i,m),wa(),i.memoizedState=null):(e!==null&&zl(i,null),rf(),wa());return Dn(e,i,f,s),i.child}function S0(e,i,s,l){var f=$u();return f=f===null?null:{parent:vn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&zl(i,null),rf(),l0(i),e!==null&&mo(e,i,l,!0),null}function $l(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function wf(e,i,s,l,f){return hs(i),s=cf(e,i,s,l,void 0,f),l=uf(),e!==null&&!Tn?(ff(e,i,f),na(e,i,f)):(Le&&l&&Wu(i),i.flags|=1,Dn(e,i,s,f),i.child)}function E0(e,i,s,l,f,m){return hs(i),i.updateQueue=null,s=Sm(i,l,s,f),Mm(e),l=uf(),e!==null&&!Tn?(ff(e,i,m),na(e,i,m)):(Le&&l&&Wu(i),i.flags|=1,Dn(e,i,s,m),i.child)}function T0(e,i,s,l,f){if(hs(i),i.stateNode===null){var m=js,E=s.contextType;typeof E=="object"&&E!==null&&(m=On(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=bf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ef(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?On(E):js,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Tf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&bf.enqueueReplaceState(m,m.state,null),So(i,l,m,f),Mo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var A=i.memoizedProps,I=ms(s,A);m.props=I;var tt=m.context,mt=s.contextType;E=js,typeof mt=="object"&&mt!==null&&(E=On(mt));var xt=s.getDerivedStateFromProps;mt=typeof xt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||tt!==E)&&u0(i,m,l,E),Sa=!1;var at=i.memoizedState;m.state=at,So(i,l,m,f),Mo(),tt=i.memoizedState,A||at!==tt||Sa?(typeof xt=="function"&&(Tf(i,s,xt,l),tt=i.memoizedState),(I=Sa||c0(i,s,I,l,at,tt,E))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=tt),m.props=l,m.state=tt,m.context=E,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,nf(e,i),E=i.memoizedProps,mt=ms(s,E),m.props=mt,xt=i.pendingProps,at=m.context,tt=s.contextType,I=js,typeof tt=="object"&&tt!==null&&(I=On(tt)),A=s.getDerivedStateFromProps,(tt=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==xt||at!==I)&&u0(i,m,l,I),Sa=!1,at=i.memoizedState,m.state=at,So(i,l,m,f),Mo();var st=i.memoizedState;E!==xt||at!==st||Sa||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof A=="function"&&(Tf(i,s,A,l),st=i.memoizedState),(mt=Sa||c0(i,s,mt,l,at,st,I)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(tt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,st,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,st,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=st),m.props=l,m.state=st,m.context=I,l=mt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,$l(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=ar(i,e.child,null,f),i.child=ar(i,null,s,f)):Dn(e,i,s,f),i.memoizedState=m.state,e=i.child):e=na(e,i,f),e}function b0(e,i,s,l){return ho(),i.flags|=256,Dn(e,i,s,l),i.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:hm()}}function Df(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=_i),e}function A0(e,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Le){if(f?Aa(i):wa(),Le){var A=nn,I;if(I=A){t:{for(I=A,A=Pi;I.nodeType!==8;){if(!A){A=null;break t}if(I=bi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:os!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},I=ei(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,Vn=i,nn=null,I=!0):I=!1}I||us(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return dh(A)?i.lanes=32:i.lanes=536870912,null;ea(i)}return A=l.children,l=l.fallback,f?(wa(),f=i.mode,A=tc({mode:"hidden",children:A},f),l=rs(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,f=i.child,f.memoizedState=Cf(s),f.childLanes=Df(e,E,s),i.memoizedState=Rf,l):(Aa(i),Uf(i,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(m)i.flags&256?(Aa(i),i.flags&=-257,i=Lf(e,i,s)):i.memoizedState!==null?(wa(),i.child=e.child,i.flags|=128,i=null):(wa(),f=l.fallback,A=i.mode,l=tc({mode:"visible",children:l.children},A),f=rs(f,A,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,ar(i,e.child,null,s),l=i.child,l.memoizedState=Cf(s),l.childLanes=Df(e,E,s),i.memoizedState=Rf,i=f);else if(Aa(i),dh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var tt=E.dgst;E=tt,l=Error(a(419)),l.stack="",l.digest=E,po({value:l,source:null,stack:null}),i=Lf(e,i,s)}else if(Tn||mo(e,i,s,!1),E=(s&e.childLanes)!==0,Tn||E){if(E=Ye,E!==null&&(l=s&-s,l=(l&42)!==0?1:oe(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ys(e,l),ri(E,e,l),v0;A.data==="$?"||Kf(),i=Lf(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,nn=bi(A.nextSibling),Vn=i,Le=!0,cs=null,Pi=!1,e!==null&&(mi[gi++]=Ki,mi[gi++]=Qi,mi[gi++]=os,Ki=e.id,Qi=e.overflow,os=i),i=Uf(i,l.children),i.flags|=4096);return i}return f?(wa(),f=l.fallback,A=i.mode,I=e.child,tt=I.sibling,l=Zi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,tt!==null?f=Zi(tt,f):(f=rs(f,A,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,A=e.child.memoizedState,A===null?A=Cf(s):(I=A.cachePool,I!==null?(tt=vn._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=hm(),A={baseLanes:A.baseLanes|s,cachePool:I}),f.memoizedState=A,f.childLanes=Df(e,E,s),i.memoizedState=Rf,l):(Aa(i),s=e.child,e=s.sibling,s=Zi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Uf(e,i){return i=tc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tc(e,i){return e=ei(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Lf(e,i,s){return ar(i,e.child,null,s),e=Uf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function w0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Zu(e.return,i,s)}function Nf(e,i,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function R0(e,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Dn(e,i,l.children,s),l=_n.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&w0(e,s,i);else if(e.tag===19)w0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(vt(_n,l),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Kl(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Nf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Kl(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Nf(i,!0,s,null,m);break;case"together":Nf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function na(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),La|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(mo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Zi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Zi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Pf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function fy(e,i,s){switch(i.tag){case 3:wt(i,i.stateNode.containerInfo),Ma(i,vn,e.memoizedState.cache),ho();break;case 27:case 5:jt(i);break;case 4:wt(i,i.stateNode.containerInfo);break;case 10:Ma(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Aa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?A0(e,i,s):(Aa(i),e=na(e,i,s),e!==null?e.sibling:null);Aa(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(mo(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return R0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),vt(_n,_n.current),l)break;return null;case 22:case 23:return i.lanes=0,M0(e,i,s);case 24:Ma(i,vn,e.memoizedState.cache)}return na(e,i,s)}function C0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Tn=!0;else{if(!Pf(e,s)&&(i.flags&128)===0)return Tn=!1,fy(e,i,s);Tn=(e.flags&131072)!==0}else Tn=!1,Le&&(i.flags&1048576)!==0&&sm(i,Nl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Vu(l)?(e=ms(l,e),i.tag=1,i=T0(null,i,l,e,s)):(i.tag=0,i=wf(null,i,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===w){i.tag=11,i=_0(null,i,l,e,s);break t}else if(f===F){i.tag=14,i=x0(null,i,l,e,s);break t}}throw i=ut(l)||l,Error(a(306,i,""))}}return i;case 0:return wf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=ms(l,i.pendingProps),T0(e,i,l,f,s);case 3:t:{if(wt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,nf(e,i),So(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Ma(i,vn,l),l!==m.cache&&Ku(i,[vn],s,!0),Mo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=b0(e,i,l,s);break t}else if(l!==f){f=di(Error(a(424)),i),po(f),i=b0(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=bi(e.firstChild),Vn=i,Le=!0,cs=null,Pi=!0,s=o0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ho(),l===f){i=na(e,i,s);break t}Dn(e,i,l,s)}i=i.child}return i;case 26:return $l(e,i),e===null?(s=Ng(i.type,null,i.pendingProps,null))?i.memoizedState=s:Le||(s=i.type,e=i.pendingProps,l=pc(it.current).createElement(s),l[gn]=i,l[tn]=e,Ln(l,s,e),fn(l),i.stateNode=l):i.memoizedState=Ng(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return jt(i),e===null&&Le&&(l=i.stateNode=Dg(i.type,i.pendingProps,it.current),Vn=i,Pi=!0,f=nn,za(i.type)?(ph=f,nn=bi(l.firstChild)):nn=f),Dn(e,i,i.pendingProps.children,s),$l(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Le&&((f=l=nn)&&(l=Fy(l,i.type,i.pendingProps,Pi),l!==null?(i.stateNode=l,Vn=i,nn=bi(l.firstChild),Pi=!1,f=!0):f=!1),f||us(i)),jt(i),f=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,uh(f,m)?l=null:E!==null&&uh(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=cf(e,i,iy,null,null,s),Xo._currentValue=f),$l(e,i),Dn(e,i,l,s),i.child;case 6:return e===null&&Le&&((e=s=nn)&&(s=Hy(s,i.pendingProps,Pi),s!==null?(i.stateNode=s,Vn=i,nn=null,e=!0):e=!1),e||us(i)),null;case 13:return A0(e,i,s);case 4:return wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ar(i,null,l,s):Dn(e,i,l,s),i.child;case 11:return _0(e,i,i.type,i.pendingProps,s);case 7:return Dn(e,i,i.pendingProps,s),i.child;case 8:return Dn(e,i,i.pendingProps.children,s),i.child;case 12:return Dn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ma(i,i.type,l.value),Dn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,hs(i),f=On(f),l=l(f),i.flags|=1,Dn(e,i,l,s),i.child;case 14:return x0(e,i,i.type,i.pendingProps,s);case 15:return y0(e,i,i.type,i.pendingProps,s);case 19:return R0(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=tc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Zi(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return M0(e,i,s);case 24:return hs(i),l=On(vn),e===null?(f=$u(),f===null&&(f=Ye,m=Qu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},ef(i),Ma(i,vn,f)):((e.lanes&s)!==0&&(nf(e,i),So(i,null,null,s),Mo()),f=e.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ma(i,vn,l)):(l=m.cache,Ma(i,vn,l),l!==f.cache&&Ku(i,[vn],s,!0))),Dn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ia(e){e.flags|=4}function D0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ig(i)){if(i=vi.current,i!==null&&((Ae&4194048)===Ae?Oi!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||i!==Oi))throw xo=tf,dm;e.flags|=8192}}function ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,lr|=i)}function Co(e,i){if(!Le)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function hy(e,i,s){var l=i.pendingProps;switch(qu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),$i(vn),$t(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(fo(i)?ia(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,lm())),$e(i),null;case 26:return s=i.memoizedState,e===null?(ia(i),s!==null?($e(i),D0(i,s)):($e(i),i.flags&=-16777217)):s?s!==e.memoizedState?(ia(i),$e(i),D0(i,s)):($e(i),i.flags&=-16777217):(e.memoizedProps!==l&&ia(i),$e(i),i.flags&=-16777217),null;case 27:_e(i),s=it.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}e=At.current,fo(i)?rm(i):(e=Dg(f,l,s),i.stateNode=e,ia(i))}return $e(i),null;case 5:if(_e(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(e=At.current,fo(i))rm(i);else{switch(f=pc(it.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[gn]=i,e[tn]=l;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(Ln(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ia(i)}}return $e(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,fo(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=Vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[gn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Eg(e.nodeValue,s)),e||us(i)}else e=pc(e).createTextNode(l),e[gn]=i,i.stateNode=e}return $e(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=fo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[gn]=i}else ho(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),f=!1}else f=lm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ea(i),i):(ea(i),null)}if(ea(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),ec(i,i.updateQueue),$e(i),null;case 4:return $t(),e===null&&sh(i.stateNode.containerInfo),$e(i),null;case 10:return $i(i.type),$e(i),null;case 19:if(pt(_n),f=i.memoizedState,f===null)return $e(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Co(f,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Kl(e),m!==null){for(i.flags|=128,Co(f,!1),e=m.updateQueue,i.updateQueue=e,ec(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)am(s,e),s=s.sibling;return vt(_n,_n.current&1|2),i.child}e=e.sibling}f.tail!==null&&Ot()>ac&&(i.flags|=128,l=!0,Co(f,!1),i.lanes=4194304)}else{if(!l)if(e=Kl(m),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ec(i,e),Co(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Le)return $e(i),null}else 2*Ot()-f.renderingStartTime>ac&&s!==536870912&&(i.flags|=128,l=!0,Co(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(e=f.last,e!==null?e.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ot(),i.sibling=null,e=_n.current,vt(_n,l?e&1|2:e&1),i):($e(i),null);case 22:case 23:return ea(i),of(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),s=i.updateQueue,s!==null&&ec(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&pt(ds),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),$i(vn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function dy(e,i){switch(qu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return $i(vn),$t(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _e(i),null;case 13:if(ea(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ho()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return pt(_n),null;case 4:return $t(),null;case 10:return $i(i.type),null;case 22:case 23:return ea(i),of(),e!==null&&pt(ds),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return $i(vn),null;case 25:return null;default:return null}}function U0(e,i){switch(qu(i),i.tag){case 3:$i(vn),$t();break;case 26:case 27:case 5:_e(i);break;case 4:$t();break;case 13:ea(i);break;case 19:pt(_n);break;case 10:$i(i.type);break;case 22:case 23:ea(i),of(),e!==null&&pt(ds);break;case 24:$i(vn)}}function Do(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==f)}}catch(A){Xe(i,i.return,A)}}function Ra(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var E=l.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=i;var I=s,tt=A;try{tt()}catch(mt){Xe(f,I,mt)}}}l=l.next}while(l!==m)}}catch(mt){Xe(i,i.return,mt)}}function L0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{xm(i,s)}catch(l){Xe(e,e.return,l)}}}function N0(e,i,s){s.props=ms(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Xe(e,i,l)}}function Uo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Xe(e,i,f)}}function zi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xe(e,i,f)}else s.current=null}function P0(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xe(e,e.return,f)}}function Of(e,i,s){try{var l=e.stateNode;Py(l,e.type,s,i),l[tn]=i}catch(f){Xe(e,e.return,f)}}function O0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=dc));else if(l!==4&&(l===27&&za(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Bf(e,i,s),e=e.sibling;e!==null;)Bf(e,i,s),e=e.sibling}function nc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&za(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(nc(e,i,s),e=e.sibling;e!==null;)nc(e,i,s),e=e.sibling}function z0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ln(i,l,s),i[gn]=e,i[tn]=s}catch(m){Xe(e,e.return,m)}}var aa=!1,on=!1,If=!1,B0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function py(e,i){if(e=e.containerInfo,lh=yc,e=jp(e),Ou(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,A=-1,I=-1,tt=0,mt=0,xt=e,at=null;e:for(;;){for(var st;xt!==s||f!==0&&xt.nodeType!==3||(A=E+f),xt!==m||l!==0&&xt.nodeType!==3||(I=E+l),xt.nodeType===3&&(E+=xt.nodeValue.length),(st=xt.firstChild)!==null;)at=xt,xt=st;for(;;){if(xt===e)break e;if(at===s&&++tt===f&&(A=E),at===m&&++mt===l&&(I=E),(st=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=st}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(ch={focusedElem:e,selectionRange:s},yc=!1,bn=i;bn!==null;)if(i=bn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,bn=e;else for(;bn!==null;){switch(i=bn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var re=ms(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(re,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Xe(s,s.return,ne)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)hh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,bn=e;break}bn=i.return}}function I0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ca(e,s),l&4&&Do(5,s);break;case 1:if(Ca(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){Xe(s,s.return,E)}else{var f=ms(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Xe(s,s.return,E)}}l&64&&L0(s),l&512&&Uo(s,s.return);break;case 3:if(Ca(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{xm(e,i)}catch(E){Xe(s,s.return,E)}}break;case 27:i===null&&l&4&&z0(s);case 26:case 5:Ca(e,s),i===null&&l&4&&P0(s),l&512&&Uo(s,s.return);break;case 12:Ca(e,s);break;case 13:Ca(e,s),l&4&&G0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Ey.bind(null,s),Gy(e,s))));break;case 22:if(l=s.memoizedState!==null||aa,!l){i=i!==null&&i.memoizedState!==null||on,f=aa;var m=on;aa=l,(on=i)&&!m?Da(e,s,(s.subtreeFlags&8772)!==0):Ca(e,s),aa=f,on=m}break;case 30:break;default:Ca(e,s)}}function F0(e){var i=e.alternate;i!==null&&(e.alternate=null,F0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Fs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Zn=!1;function sa(e,i,s){for(s=s.child;s!==null;)H0(e,i,s),s=s.sibling}function H0(e,i,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(dt,s)}catch{}switch(s.tag){case 26:on||zi(s,i),sa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||zi(s,i);var l=Ke,f=Zn;za(s.type)&&(Ke=s.stateNode,Zn=!1),sa(e,i,s),Ho(s.stateNode),Ke=l,Zn=f;break;case 5:on||zi(s,i);case 6:if(l=Ke,f=Zn,Ke=null,sa(e,i,s),Ke=l,Zn=f,Ke!==null)if(Zn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(s.stateNode)}catch(m){Xe(s,i,m)}else try{Ke.removeChild(s.stateNode)}catch(m){Xe(s,i,m)}break;case 18:Ke!==null&&(Zn?(e=Ke,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),jo(e)):Rg(Ke,s.stateNode));break;case 4:l=Ke,f=Zn,Ke=s.stateNode.containerInfo,Zn=!0,sa(e,i,s),Ke=l,Zn=f;break;case 0:case 11:case 14:case 15:on||Ra(2,s,i),on||Ra(4,s,i),sa(e,i,s);break;case 1:on||(zi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&N0(s,i,l)),sa(e,i,s);break;case 21:sa(e,i,s);break;case 22:on=(l=on)||s.memoizedState!==null,sa(e,i,s),on=l;break;default:sa(e,i,s)}}function G0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jo(e)}catch(s){Xe(i,i.return,s)}}function my(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new B0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new B0),i;default:throw Error(a(435,e.tag))}}function Ff(e,i){var s=my(e);i.forEach(function(l){var f=Ty.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function ni(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,E=i,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(za(A.type)){Ke=A.stateNode,Zn=!1;break t}break;case 5:Ke=A.stateNode,Zn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,Zn=!0;break t}A=A.return}if(Ke===null)throw Error(a(160));H0(m,E,f),Ke=null,Zn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)V0(i,e),i=i.sibling}var Ti=null;function V0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(i,e),ii(e),l&4&&(Ra(3,e,e.return),Do(3,e),Ra(5,e,e.return));break;case 1:ni(i,e),ii(e),l&512&&(on||s===null||zi(s,s.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ti;if(ni(i,e),ii(e),l&512&&(on||s===null||zi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ni]||m[gn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Ln(m,l,s),m[gn]=e,fn(m),l=m;break t;case"link":var E=zg("link","href",f).get(l+(s.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(A,1);break e}}m=f.createElement(l),Ln(m,l,s),f.head.appendChild(m);break;case"meta":if(E=zg("meta","content",f).get(l+(s.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(A,1);break e}}m=f.createElement(l),Ln(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[gn]=e,fn(m),l=m}e.stateNode=l}else Bg(f,e.type,e.stateNode);else e.stateNode=Og(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?Bg(f,e.type,e.stateNode):Og(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Of(e,e.memoizedProps,s.memoizedProps)}break;case 27:ni(i,e),ii(e),l&512&&(on||s===null||zi(s,s.return)),s!==null&&l&4&&Of(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ni(i,e),ii(e),l&512&&(on||s===null||zi(s,s.return)),e.flags&32){f=e.stateNode;try{qn(f,"")}catch(st){Xe(e,e.return,st)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Of(e,f,s!==null?s.memoizedProps:f)),l&1024&&(If=!0);break;case 6:if(ni(i,e),ii(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(st){Xe(e,e.return,st)}}break;case 3:if(vc=null,f=Ti,Ti=mc(i.containerInfo),ni(i,e),Ti=f,ii(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{jo(i.containerInfo)}catch(st){Xe(e,e.return,st)}If&&(If=!1,k0(e));break;case 4:l=Ti,Ti=mc(e.stateNode.containerInfo),ni(i,e),ii(e),Ti=l;break;case 12:ni(i,e),ii(e);break;case 13:ni(i,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wf=Ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ff(e,l)));break;case 22:f=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,tt=aa,mt=on;if(aa=tt||f,on=mt||I,ni(i,e),on=mt,aa=tt,ii(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||aa||on||gs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=I.stateNode;var xt=I.memoizedProps.style,at=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Xe(I,I.return,st)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(st){Xe(I,I.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ff(e,s))));break;case 19:ni(i,e),ii(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ff(e,l)));break;case 30:break;case 21:break;default:ni(i,e),ii(e)}}function ii(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(O0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=zf(e);nc(e,m,f);break;case 5:var E=s.stateNode;s.flags&32&&(qn(E,""),s.flags&=-33);var A=zf(e);nc(e,A,E);break;case 3:case 4:var I=s.stateNode.containerInfo,tt=zf(e);Bf(e,tt,I);break;default:throw Error(a(161))}}catch(mt){Xe(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function k0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;k0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ca(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)I0(e,i.alternate,i),i=i.sibling}function gs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ra(4,i,i.return),gs(i);break;case 1:zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&N0(i,i.return,s),gs(i);break;case 27:Ho(i.stateNode);case 26:case 5:zi(i,i.return),gs(i);break;case 22:i.memoizedState===null&&gs(i);break;case 30:gs(i);break;default:gs(i)}e=e.sibling}}function Da(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Da(f,m,s),Do(4,m);break;case 1:if(Da(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){Xe(l,l.return,tt)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)_m(I[f],A)}catch(tt){Xe(l,l.return,tt)}}s&&E&64&&L0(m),Uo(m,m.return);break;case 27:z0(m);case 26:case 5:Da(f,m,s),s&&l===null&&E&4&&P0(m),Uo(m,m.return);break;case 12:Da(f,m,s);break;case 13:Da(f,m,s),s&&E&4&&G0(f,m);break;case 22:m.memoizedState===null&&Da(f,m,s),Uo(m,m.return);break;case 30:break;default:Da(f,m,s)}i=i.sibling}}function Hf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&go(s))}function Gf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e))}function Bi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)X0(e,i,s,l),i=i.sibling}function X0(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Bi(e,i,s,l),f&2048&&Do(9,i);break;case 1:Bi(e,i,s,l);break;case 3:Bi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e)));break;case 12:if(f&2048){Bi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Xe(i,i.return,I)}}else Bi(e,i,s,l);break;case 13:Bi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Bi(e,i,s,l):Lo(e,i):m._visibility&2?Bi(e,i,s,l):(m._visibility|=2,sr(e,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&Hf(E,i);break;case 24:Bi(e,i,s,l),f&2048&&Gf(i.alternate,i);break;default:Bi(e,i,s,l)}}function sr(e,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,E=i,A=s,I=l,tt=E.flags;switch(E.tag){case 0:case 11:case 15:sr(m,E,A,I,f),Do(8,E);break;case 23:break;case 22:var mt=E.stateNode;E.memoizedState!==null?mt._visibility&2?sr(m,E,A,I,f):Lo(m,E):(mt._visibility|=2,sr(m,E,A,I,f)),f&&tt&2048&&Hf(E.alternate,E);break;case 24:sr(m,E,A,I,f),f&&tt&2048&&Gf(E.alternate,E);break;default:sr(m,E,A,I,f)}i=i.sibling}}function Lo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Lo(s,l),f&2048&&Hf(l.alternate,l);break;case 24:Lo(s,l),f&2048&&Gf(l.alternate,l);break;default:Lo(s,l)}i=i.sibling}}var No=8192;function rr(e){if(e.subtreeFlags&No)for(e=e.child;e!==null;)W0(e),e=e.sibling}function W0(e){switch(e.tag){case 26:rr(e),e.flags&No&&e.memoizedState!==null&&tM(Ti,e.memoizedState,e.memoizedProps);break;case 5:rr(e);break;case 3:case 4:var i=Ti;Ti=mc(e.stateNode.containerInfo),rr(e),Ti=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=No,No=16777216,rr(e),No=i):rr(e));break;default:rr(e)}}function q0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Po(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,j0(l,e)}q0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Y0(e),e=e.sibling}function Y0(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ic(e)):Po(e);break;default:Po(e)}}function ic(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,j0(l,e)}q0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ra(8,i,i.return),ic(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ic(i));break;default:ic(i)}e=e.sibling}}function j0(e,i){for(;bn!==null;){var s=bn;switch(s.tag){case 0:case 11:case 15:Ra(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:go(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,bn=l;else t:for(s=e;bn!==null;){l=bn;var f=l.sibling,m=l.return;if(F0(l),l===s){bn=null;break t}if(f!==null){f.return=m,bn=f;break t}bn=m}}}var gy={getCacheForType:function(e){var i=On(vn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},vy=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,Te=null,Ae=0,Oe=0,ai=null,Ua=!1,or=!1,Vf=!1,ra=0,an=0,La=0,vs=0,kf=0,_i=0,lr=0,Oo=null,Kn=null,Xf=!1,Wf=0,ac=1/0,sc=null,Na=null,Un=0,Pa=null,cr=null,ur=0,qf=0,Yf=null,Z0=null,zo=0,jf=null;function si(){if((Pe&2)!==0&&Ae!==0)return Ae&-Ae;if(B.T!==null){var e=Qs;return e!==0?e:eh()}return we()}function K0(){_i===0&&(_i=(Ae&536870912)===0||Le?W():536870912);var e=vi.current;return e!==null&&(e.flags|=32),_i}function ri(e,i,s){(e===Ye&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Oa(e,Ae,_i,!1)),Bt(e,s),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(vs|=s),an===4&&Oa(e,Ae,_i,!1)),Ii(e))}function Q0(e,i,s){if((Pe&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),f=l?yy(e,i):Qf(e,i,!0),m=l;do{if(f===0){or&&!l&&Oa(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!_y(s)){f=Qf(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var A=e;f=Oo;var I=A.current.memoizedState.isDehydrated;if(I&&(fr(A,E).flags|=256),E=Qf(A,E,!1),E!==2){if(Vf&&!I){A.errorRecoveryDisabledLanes|=m,vs|=m,f=4;break t}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){fr(e,0),Oa(e,i,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oa(l,i,_i,!Ua);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Wf+300-Ot(),10<f)){if(Oa(l,i,_i,!Ua),Xt(l,0,!0)!==0)break t;l.timeoutHandle=Ag(J0.bind(null,l,s,Kn,sc,Xf,i,_i,vs,lr,Ua,m,2,-0,0),f);break t}J0(l,s,Kn,sc,Xf,i,_i,vs,lr,Ua,m,0,-0,0)}}break}while(!0);Ii(e)}function J0(e,i,s,l,f,m,E,A,I,tt,mt,xt,at,st){if(e.timeoutHandle=-1,xt=i.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(ko={stylesheets:null,count:0,unsuspend:$y},W0(i),xt=eM(),xt!==null)){e.cancelPendingCommit=xt(sg.bind(null,e,i,m,s,l,f,E,A,I,mt,1,at,st)),Oa(e,m,E,!tt);return}sg(e,i,m,s,l,f,E,A,I)}function _y(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ti(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oa(e,i,s,l){i&=~kf,i&=~vs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var m=31-zt(f),E=1<<m;l[m]=-1,f&=~E}s!==0&&Mt(e,s,i)}function rc(){return(Pe&6)===0?(Bo(0),!1):!0}function Zf(){if(Te!==null){if(Oe===0)var e=Te.return;else e=Te,Ji=fs=null,hf(e),ir=null,wo=0,e=Te;for(;e!==null;)U0(e.alternate,e),e=e.return;Te=null}}function fr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,zy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Zf(),Ye=e,Te=s=Zi(e.current,null),Ae=i,Oe=0,ai=null,Ua=!1,or=Dt(e,i),Vf=!1,lr=_i=kf=vs=La=an=0,Kn=Oo=null,Xf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-zt(l),m=1<<f;i|=e[f],l&=~m}return ra=i,Rl(),s}function $0(e,i){xe=null,B.H=Yl,i===_o||i===Bl?(i=gm(),Oe=3):i===dm?(i=gm(),Oe=4):Oe=i===v0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,Te===null&&(an=1,Jl(e,di(i,e.current)))}function tg(){var e=B.H;return B.H=Yl,e===null?Yl:e}function eg(){var e=B.A;return B.A=gy,e}function Kf(){an=4,Ua||(Ae&4194048)!==Ae&&vi.current!==null||(or=!0),(La&134217727)===0&&(vs&134217727)===0||Ye===null||Oa(Ye,Ae,_i,!1)}function Qf(e,i,s){var l=Pe;Pe|=2;var f=tg(),m=eg();(Ye!==e||Ae!==i)&&(sc=null,fr(e,i)),i=!1;var E=an;t:do try{if(Oe!==0&&Te!==null){var A=Te,I=ai;switch(Oe){case 8:Zf(),E=6;break t;case 3:case 2:case 9:case 6:vi.current===null&&(i=!0);var tt=Oe;if(Oe=0,ai=null,hr(e,A,I,tt),s&&or){E=0;break t}break;default:tt=Oe,Oe=0,ai=null,hr(e,A,I,tt)}}xy(),E=an;break}catch(mt){$0(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Ji=fs=null,Pe=l,B.H=f,B.A=m,Te===null&&(Ye=null,Ae=0,Rl()),E}function xy(){for(;Te!==null;)ng(Te)}function yy(e,i){var s=Pe;Pe|=2;var l=tg(),f=eg();Ye!==e||Ae!==i?(sc=null,ac=Ot()+500,fr(e,i)):or=Dt(e,i);t:do try{if(Oe!==0&&Te!==null){i=Te;var m=ai;e:switch(Oe){case 1:Oe=0,ai=null,hr(e,i,m,1);break;case 2:case 9:if(pm(m)){Oe=0,ai=null,ig(i);break}i=function(){Oe!==2&&Oe!==9||Ye!==e||(Oe=7),Ii(e)},m.then(i,i);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:pm(m)?(Oe=0,ai=null,ig(i)):(Oe=0,ai=null,hr(e,i,m,7));break;case 5:var E=null;switch(Te.tag){case 26:E=Te.memoizedState;case 5:case 27:var A=Te;if(!E||Ig(E)){Oe=0,ai=null;var I=A.sibling;if(I!==null)Te=I;else{var tt=A.return;tt!==null?(Te=tt,oc(tt)):Te=null}break e}}Oe=0,ai=null,hr(e,i,m,5);break;case 6:Oe=0,ai=null,hr(e,i,m,6);break;case 8:Zf(),an=6;break t;default:throw Error(a(462))}}My();break}catch(mt){$0(e,mt)}while(!0);return Ji=fs=null,B.H=l,B.A=f,Pe=s,Te!==null?0:(Ye=null,Ae=0,Rl(),an)}function My(){for(;Te!==null&&!ue();)ng(Te)}function ng(e){var i=C0(e.alternate,e,ra);e.memoizedProps=e.pendingProps,i===null?oc(e):Te=i}function ig(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=E0(s,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=E0(s,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:hf(i);default:U0(s,i),i=Te=am(i,ra),i=C0(s,i,ra)}e.memoizedProps=e.pendingProps,i===null?oc(e):Te=i}function hr(e,i,s,l){Ji=fs=null,hf(i),ir=null,wo=0;var f=i.return;try{if(uy(e,f,i,s,Ae)){an=1,Jl(e,di(s,e.current)),Te=null;return}}catch(m){if(f!==null)throw Te=f,m;an=1,Jl(e,di(s,e.current)),Te=null;return}i.flags&32768?(Le||l===1?e=!0:or||(Ae&536870912)!==0?e=!1:(Ua=e=!0,(l===2||l===9||l===3||l===6)&&(l=vi.current,l!==null&&l.tag===13&&(l.flags|=16384))),ag(i,e)):oc(i)}function oc(e){var i=e;do{if((i.flags&32768)!==0){ag(i,Ua);return}e=i.return;var s=hy(i.alternate,i,ra);if(s!==null){Te=s;return}if(i=i.sibling,i!==null){Te=i;return}Te=i=e}while(i!==null);an===0&&(an=5)}function ag(e,i){do{var s=dy(e.alternate,e);if(s!==null){s.flags&=32767,Te=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Te=e;return}Te=e=s}while(e!==null);an=6,Te=null}function sg(e,i,s,l,f,m,E,A,I){e.cancelPendingCommit=null;do lc();while(Un!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Hu,Et(e,s,m,E,A,I),e===Ye&&(Te=Ye=null,Ae=0),cr=i,Pa=e,ur=s,qf=m,Yf=f,Z0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,by(Qe,function(){return ug(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=et.p,et.p=2,E=Pe,Pe|=4;try{py(e,i,s)}finally{Pe=E,et.p=f,B.T=l}}Un=1,rg(),og(),lg()}}function rg(){if(Un===1){Un=0;var e=Pa,i=cr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=et.p;et.p=2;var f=Pe;Pe|=4;try{V0(i,e);var m=ch,E=jp(e.containerInfo),A=m.focusedElem,I=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&Yp(A.ownerDocument.documentElement,A)){if(I!==null&&Ou(A)){var tt=I.start,mt=I.end;if(mt===void 0&&(mt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(mt,A.value.length);else{var xt=A.ownerDocument||document,at=xt&&xt.defaultView||window;if(at.getSelection){var st=at.getSelection(),re=A.textContent.length,ne=Math.min(I.start,re),Ge=I.end===void 0?ne:Math.min(I.end,re);!st.extend&&ne>Ge&&(E=Ge,Ge=ne,ne=E);var j=qp(A,ne),X=qp(A,Ge);if(j&&X&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var $=xt.createRange();$.setStart(j.node,j.offset),st.removeAllRanges(),ne>Ge?(st.addRange($),st.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),st.addRange($))}}}}for(xt=[],st=A;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var gt=xt[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}yc=!!lh,ch=lh=null}finally{Pe=f,et.p=l,B.T=s}}e.current=i,Un=2}}function og(){if(Un===2){Un=0;var e=Pa,i=cr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=et.p;et.p=2;var f=Pe;Pe|=4;try{I0(e,i.alternate,i)}finally{Pe=f,et.p=l,B.T=s}}Un=3}}function lg(){if(Un===4||Un===3){Un=0,se();var e=Pa,i=cr,s=ur,l=Z0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Un=5:(Un=0,cr=Pa=null,cg(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Na=null),Ne(s),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=et.p,et.p=2,B.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var A=l[E];m(A.value,{componentStack:A.stack})}}finally{B.T=i,et.p=f}}(ur&3)!==0&&lc(),Ii(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===jf?zo++:(zo=0,jf=e):zo=0,Bo(0)}}function cg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,go(i)))}function lc(e){return rg(),og(),lg(),ug()}function ug(){if(Un!==5)return!1;var e=Pa,i=qf;qf=0;var s=Ne(ur),l=B.T,f=et.p;try{et.p=32>s?32:s,B.T=null,s=Yf,Yf=null;var m=Pa,E=ur;if(Un=0,cr=Pa=null,ur=0,(Pe&6)!==0)throw Error(a(331));var A=Pe;if(Pe|=4,Y0(m.current),X0(m,m.current,E,s),Pe=A,Bo(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(dt,m)}catch{}return!0}finally{et.p=f,B.T=l,cg(e,i)}}function fg(e,i,s){i=di(s,i),i=Af(e.stateNode,i,2),e=Ta(e,i,2),e!==null&&(Bt(e,2),Ii(e))}function Xe(e,i,s){if(e.tag===3)fg(e,e,s);else for(;i!==null;){if(i.tag===3){fg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Na===null||!Na.has(l))){e=di(s,e),s=m0(2),l=Ta(i,s,2),l!==null&&(g0(s,l,i,e),Bt(l,2),Ii(l));break}}i=i.return}}function Jf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new vy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Vf=!0,f.add(s),e=Sy.bind(null,e,i,s),i.then(e,e))}function Sy(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ye===e&&(Ae&s)===s&&(an===4||an===3&&(Ae&62914560)===Ae&&300>Ot()-Wf?(Pe&2)===0&&fr(e,0):kf|=s,lr===Ae&&(lr=0)),Ii(e)}function hg(e,i){i===0&&(i=bt()),e=Ys(e,i),e!==null&&(Bt(e,i),Ii(e))}function Ey(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),hg(e,s)}function Ty(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),hg(e,s)}function by(e,i){return H(e,i)}var cc=null,dr=null,$f=!1,uc=!1,th=!1,_s=0;function Ii(e){e!==dr&&e.next===null&&(dr===null?cc=dr=e:dr=dr.next=e),uc=!0,$f||($f=!0,wy())}function Bo(e,i){if(!th&&uc){th=!0;do for(var s=!1,l=cc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=f&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,gg(l,m))}else m=Ae,m=Xt(l,l===Ye?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Dt(l,m)||(s=!0,gg(l,m));l=l.next}while(s);th=!1}}function Ay(){dg()}function dg(){uc=$f=!1;var e=0;_s!==0&&(Oy()&&(e=_s),_s=0);for(var i=Ot(),s=null,l=cc;l!==null;){var f=l.next,m=pg(l,i);m===0?(l.next=null,s===null?cc=f:s.next=f,f===null&&(dr=s)):(s=l,(e!==0||(m&3)!==0)&&(uc=!0)),l=f}Bo(e)}function pg(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-zt(m),A=1<<E,I=f[E];I===-1?((A&s)===0||(A&l)!==0)&&(f[E]=he(A,i)):I<=i&&(e.expiredLanes|=A),m&=~A}if(i=Ye,s=Ae,s=Xt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Be(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Dt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Be(l),Ne(s)){case 2:case 8:s=fe;break;case 32:s=Qe;break;case 268435456:s=z;break;default:s=Qe}return l=mg.bind(null,e),s=H(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Be(l),e.callbackPriority=2,e.callbackNode=null,2}function mg(e,i){if(Un!==0&&Un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(lc()&&e.callbackNode!==s)return null;var l=Ae;return l=Xt(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Q0(e,l,i),pg(e,Ot()),e.callbackNode!=null&&e.callbackNode===s?mg.bind(null,e):null)}function gg(e,i){if(lc())return null;Q0(e,i,!0)}function wy(){By(function(){(Pe&6)!==0?H(kt,Ay):dg()})}function eh(){return _s===0&&(_s=W()),_s}function vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function _g(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Ry(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=vg((f[tn]||null).action),E=l.submitter;E&&(i=(i=E[tn]||null)?vg(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var A=new bl("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(_s!==0){var I=E?_g(f,E):new FormData(f);Mf(s,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(A.preventDefault(),I=E?_g(f,E):new FormData(f),Mf(s,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var nh=0;nh<Fu.length;nh++){var ih=Fu[nh],Cy=ih.toLowerCase(),Dy=ih[0].toUpperCase()+ih.slice(1);Ei(Cy,"on"+Dy)}Ei(Qp,"onAnimationEnd"),Ei(Jp,"onAnimationIteration"),Ei($p,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Yx,"onTransitionRun"),Ei(jx,"onTransitionStart"),Ei(Zx,"onTransitionCancel"),Ei(tm,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function xg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var A=l[E],I=A.instance,tt=A.currentTarget;if(A=A.listener,I!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=tt;try{m(f)}catch(mt){Ql(mt)}f.currentTarget=null,m=I}else for(E=0;E<l.length;E++){if(A=l[E],I=A.instance,tt=A.currentTarget,A=A.listener,I!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=tt;try{m(f)}catch(mt){Ql(mt)}f.currentTarget=null,m=I}}}}function be(e,i){var s=i[Bs];s===void 0&&(s=i[Bs]=new Set);var l=e+"__bubble";s.has(l)||(yg(i,e,2,!1),s.add(l))}function ah(e,i,s){var l=0;i&&(l|=4),yg(s,e,l,i)}var fc="_reactListening"+Math.random().toString(36).slice(2);function sh(e){if(!e[fc]){e[fc]=!0,xl.forEach(function(s){s!=="selectionchange"&&(Uy.has(s)||ah(s,!1,e),ah(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[fc]||(i[fc]=!0,ah("selectionchange",!1,i))}}function yg(e,i,s,l){switch(Xg(i)){case 2:var f=aM;break;case 8:f=sM;break;default:f=xh}s=f.bind(null,i,s,e),f=void 0,!Au||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function rh(e,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var A=l.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=Yi(A),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=m=E;continue t}A=A.parentNode}}l=l.return}wp(function(){var tt=m,mt=Tu(s),xt=[];t:{var at=em.get(e);if(at!==void 0){var st=bl,re=e;switch(e){case"keypress":if(El(s)===0)break t;case"keydown":case"keyup":st=bx;break;case"focusin":re="focus",st=Du;break;case"focusout":re="blur",st=Du;break;case"beforeblur":case"afterblur":st=Du;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Rx;break;case Qp:case Jp:case $p:st=gx;break;case tm:st=Dx;break;case"scroll":case"scrollend":st=fx;break;case"wheel":st=Lx;break;case"copy":case"cut":case"paste":st=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Lp;break;case"toggle":case"beforetoggle":st=Px}var ne=(i&4)!==0,Ge=!ne&&(e==="scroll"||e==="scrollend"),j=ne?at!==null?at+"Capture":null:at;ne=[];for(var X=tt,$;X!==null;){var gt=X;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||j===null||(gt=no(X,j),gt!=null&&ne.push(Fo(X,gt,$))),Ge)break;X=X.return}0<ne.length&&(at=new st(at,re,null,s,mt),xt.push({event:at,listeners:ne}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&s!==Eu&&(re=s.relatedTarget||s.fromElement)&&(Yi(re)||re[Li]))break t;if((st||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(re=s.relatedTarget||s.toElement,st=tt,re=re?Yi(re):null,re!==null&&(Ge=c(re),ne=re.tag,re!==Ge||ne!==5&&ne!==27&&ne!==6)&&(re=null)):(st=null,re=tt),st!==re)){if(ne=Dp,gt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Lp,gt="onPointerLeave",j="onPointerEnter",X="pointer"),Ge=st==null?at:ns(st),$=re==null?at:ns(re),at=new ne(gt,X+"leave",st,s,mt),at.target=Ge,at.relatedTarget=$,gt=null,Yi(mt)===tt&&(ne=new ne(j,X+"enter",re,s,mt),ne.target=$,ne.relatedTarget=Ge,gt=ne),Ge=gt,st&&re)e:{for(ne=st,j=re,X=0,$=ne;$;$=pr($))X++;for($=0,gt=j;gt;gt=pr(gt))$++;for(;0<X-$;)ne=pr(ne),X--;for(;0<$-X;)j=pr(j),$--;for(;X--;){if(ne===j||j!==null&&ne===j.alternate)break e;ne=pr(ne),j=pr(j)}ne=null}else ne=null;st!==null&&Mg(xt,at,st,ne,!1),re!==null&&Ge!==null&&Mg(xt,Ge,re,ne,!0)}}t:{if(at=tt?ns(tt):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=Hp;else if(Ip(at))if(Gp)Ht=Xx;else{Ht=Vx;var Me=Gx}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&Su(tt.elementType)&&(Ht=Hp):Ht=kx;if(Ht&&(Ht=Ht(e,tt))){Fp(xt,Ht,s,mt);break t}Me&&Me(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&Pn(at,"number",at.value)}switch(Me=tt?ns(tt):window,e){case"focusin":(Ip(Me)||Me.contentEditable==="true")&&(Xs=Me,zu=tt,uo=null);break;case"focusout":uo=zu=Xs=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Zp(xt,s,mt);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":Zp(xt,s,mt)}var Qt;if(Lu)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ks?zp(e,s)&&(ae="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ae="onCompositionStart");ae&&(Np&&s.locale!=="ko"&&(ks||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ks&&(Qt=Rp()):(ya=mt,wu="value"in ya?ya.value:ya.textContent,ks=!0)),Me=hc(tt,ae),0<Me.length&&(ae=new Up(ae,e,null,s,mt),xt.push({event:ae,listeners:Me}),Qt?ae.data=Qt:(Qt=Bp(s),Qt!==null&&(ae.data=Qt)))),(Qt=zx?Bx(e,s):Ix(e,s))&&(ae=hc(tt,"onBeforeInput"),0<ae.length&&(Me=new Up("onBeforeInput","beforeinput",null,s,mt),xt.push({event:Me,listeners:ae}),Me.data=Qt)),Ry(xt,e,tt,s,mt)}xg(xt,i)})}function Fo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function hc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=no(e,s),f!=null&&l.unshift(Fo(e,f,m)),f=no(e,i),f!=null&&l.push(Fo(e,f,m))),e.tag===3)return l;e=e.return}return[]}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mg(e,i,s,l,f){for(var m=i._reactName,E=[];s!==null&&s!==l;){var A=s,I=A.alternate,tt=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||tt===null||(I=tt,f?(tt=no(s,m),tt!=null&&E.unshift(Fo(s,tt,I))):f||(tt=no(s,m),tt!=null&&E.push(Fo(s,tt,I)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Ly=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(Ly,`
`).replace(Ny,"")}function Eg(e,i){return i=Sg(i),Sg(e)===i}function dc(){}function He(e,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||qn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&qn(e,""+l);break;case"className":Ft(e,"class",l);break;case"tabIndex":Ft(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,s,l);break;case"style":bp(e,l,m);break;case"data":if(i!=="object"){Ft(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ml(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&He(e,i,"name",f.name,f,null),He(e,i,"formEncType",f.formEncType,f,null),He(e,i,"formMethod",f.formMethod,f,null),He(e,i,"formTarget",f.formTarget,f,null)):(He(e,i,"encType",f.encType,f,null),He(e,i,"method",f.method,f,null),He(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ml(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=dc);break;case"onScroll":l!=null&&be("scroll",e);break;case"onScrollEnd":l!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Ml(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":be("beforetoggle",e),be("toggle",e),Ut(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ut(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=cx.get(s)||s,Ut(e,s,l))}}function oh(e,i,s,l,f,m){switch(s){case"style":bp(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?qn(e,l):(typeof l=="number"||typeof l=="bigint")&&qn(e,""+l);break;case"onScroll":l!=null&&be("scroll",e);break;case"onScrollEnd":l!=null&&be("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=e[tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ut(e,s,l)}}}function Ln(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,m,E,s,null)}}f&&He(e,i,"srcSet",s.srcSet,s,null),l&&He(e,i,"src",s.src,s,null);return;case"input":be("invalid",e);var A=m=E=f=null,I=null,tt=null;for(l in s)if(s.hasOwnProperty(l)){var mt=s[l];if(mt!=null)switch(l){case"name":f=mt;break;case"type":E=mt;break;case"checked":I=mt;break;case"defaultChecked":tt=mt;break;case"value":m=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:He(e,i,l,mt,s,null)}}Gn(e,m,A,I,tt,E,f,!1),Ee(e);return;case"select":be("invalid",e),l=E=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":l=A;default:He(e,i,f,A,s,null)}i=m,s=E,e.multiple=!!l,i!=null?en(e,!!l,i,!1):s!=null&&en(e,!!l,s,!0);return;case"textarea":be("invalid",e),m=f=l=null;for(E in s)if(s.hasOwnProperty(E)&&(A=s[E],A!=null))switch(E){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:He(e,i,E,A,s,null)}Hs(e,l,f,m),Ee(e);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(e,i,I,l,s,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(l=0;l<Io.length;l++)be(Io[l],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in s)if(s.hasOwnProperty(tt)&&(l=s[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,tt,l,s,null)}return;default:if(Su(i)){for(mt in s)s.hasOwnProperty(mt)&&(l=s[mt],l!==void 0&&oh(e,i,mt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&He(e,i,A,l,s,null))}function Py(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,A=null,I=null,tt=null,mt=null;for(st in s){var xt=s[st];if(s.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=xt;default:l.hasOwnProperty(st)||He(e,i,st,null,l,xt)}}for(var at in l){var st=l[at];if(xt=s[at],l.hasOwnProperty(at)&&(st!=null||xt!=null))switch(at){case"type":m=st;break;case"name":f=st;break;case"checked":tt=st;break;case"defaultChecked":mt=st;break;case"value":E=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==xt&&He(e,i,at,st,l,xt)}}ke(e,E,A,I,tt,mt,m,f);return;case"select":st=E=A=at=null;for(m in s)if(I=s[m],s.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":st=I;default:l.hasOwnProperty(m)||He(e,i,m,null,l,I)}for(f in l)if(m=l[f],I=s[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":at=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==I&&He(e,i,f,m,l,I)}i=A,s=E,l=st,at!=null?en(e,!!s,at,!1):!!l!=!!s&&(i!=null?en(e,!!s,i,!0):en(e,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,i,A,null,l,f)}for(E in l)if(f=l[E],m=s[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":at=f;break;case"defaultValue":st=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&He(e,i,E,f,l,m)}Cn(e,at,st);return;case"option":for(var re in s)if(at=s[re],s.hasOwnProperty(re)&&at!=null&&!l.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:He(e,i,re,null,l,at)}for(I in l)if(at=l[I],st=s[I],l.hasOwnProperty(I)&&at!==st&&(at!=null||st!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:He(e,i,I,at,l,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in s)at=s[ne],s.hasOwnProperty(ne)&&at!=null&&!l.hasOwnProperty(ne)&&He(e,i,ne,null,l,at);for(tt in l)if(at=l[tt],st=s[tt],l.hasOwnProperty(tt)&&at!==st&&(at!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:He(e,i,tt,at,l,st)}return;default:if(Su(i)){for(var Ge in s)at=s[Ge],s.hasOwnProperty(Ge)&&at!==void 0&&!l.hasOwnProperty(Ge)&&oh(e,i,Ge,void 0,l,at);for(mt in l)at=l[mt],st=s[mt],!l.hasOwnProperty(mt)||at===st||at===void 0&&st===void 0||oh(e,i,mt,at,l,st);return}}for(var j in s)at=s[j],s.hasOwnProperty(j)&&at!=null&&!l.hasOwnProperty(j)&&He(e,i,j,null,l,at);for(xt in l)at=l[xt],st=s[xt],!l.hasOwnProperty(xt)||at===st||at==null&&st==null||He(e,i,xt,at,l,st)}var lh=null,ch=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function Tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function uh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fh=null;function Oy(){var e=window.event;return e&&e.type==="popstate"?e===fh?!1:(fh=e,!0):(fh=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(Iy)}:Ag;function Iy(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Rg(e,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&Ho(E.documentElement),s&2&&Ho(E.body),s&4)for(s=E.head,Ho(s),E=s.firstChild;E;){var A=E.nextSibling,I=E.nodeName;E[Ni]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=A}}if(f===0){e.removeChild(m),jo(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);jo(i)}function hh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":hh(s),Fs(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Fy(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ni])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function Hy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=bi(e.nextSibling),e===null))return null;return e}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Gy(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var ph=null;function Cg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function Dg(e,i,s){switch(i=pc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ho(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Fs(e)}var xi=new Map,Ug=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=et.d;et.d={f:Vy,r:ky,D:Xy,C:Wy,L:qy,m:Yy,X:Zy,S:jy,M:Ky};function Vy(){var e=oa.f(),i=rc();return e||i}function ky(e){var i=_a(e);i!==null&&i.tag===5&&i.type==="form"?Qm(i):oa.r(e)}var mr=typeof document>"u"?null:document;function Lg(e,i,s){var l=mr;if(l&&typeof i=="string"&&i){var f=En(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Ug.has(f)||(Ug.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Ln(i,"link",e),fn(i),l.head.appendChild(i)))}}function Xy(e){oa.D(e),Lg("dns-prefetch",e,null)}function Wy(e,i){oa.C(e,i),Lg("preconnect",e,i)}function qy(e,i,s){oa.L(e,i,s);var l=mr;if(l&&e&&i){var f='link[rel="preload"][as="'+En(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+En(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+En(s.imageSizes)+'"]')):f+='[href="'+En(e)+'"]';var m=f;switch(i){case"style":m=gr(e);break;case"script":m=vr(e)}xi.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),xi.set(m,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Go(m))||i==="script"&&l.querySelector(Vo(m))||(i=l.createElement("link"),Ln(i,"link",e),fn(i),l.head.appendChild(i)))}}function Yy(e,i){oa.m(e,i);var s=mr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+En(l)+'"][href="'+En(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=vr(e)}if(!xi.has(m)&&(e=g({rel:"modulepreload",href:e},i),xi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Vo(m)))return}l=s.createElement("link"),Ln(l,"link",e),fn(l),s.head.appendChild(l)}}}function jy(e,i,s){oa.S(e,i,s);var l=mr;if(l&&e){var f=xa(l).hoistableStyles,m=gr(e);i=i||"default";var E=f.get(m);if(!E){var A={loading:0,preload:null};if(E=l.querySelector(Go(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=xi.get(m))&&mh(e,s);var I=E=l.createElement("link");fn(I),Ln(I,"link",e),I._p=new Promise(function(tt,mt){I.onload=tt,I.onerror=mt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(m,E)}}}function Zy(e,i){oa.X(e,i);var s=mr;if(s&&e){var l=xa(s).hoistableScripts,f=vr(e),m=l.get(f);m||(m=s.querySelector(Vo(f)),m||(e=g({src:e,async:!0},i),(i=xi.get(f))&&gh(e,i),m=s.createElement("script"),fn(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Ky(e,i){oa.M(e,i);var s=mr;if(s&&e){var l=xa(s).hoistableScripts,f=vr(e),m=l.get(f);m||(m=s.querySelector(Vo(f)),m||(e=g({src:e,async:!0,type:"module"},i),(i=xi.get(f))&&gh(e,i),m=s.createElement("script"),fn(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Ng(e,i,s,l){var f=(f=it.current)?mc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=gr(s.href),s=xa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=gr(s.href);var m=xa(f).hoistableStyles,E=m.get(e);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=f.querySelector(Go(e)))&&!m._p&&(E.instance=m,E.state.loading=5),xi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},xi.set(e,s),m||Qy(f,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=vr(s),s=xa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function gr(e){return'href="'+En(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function Pg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Qy(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",s),fn(i),e.head.appendChild(i))}function vr(e){return'[src="'+En(e)+'"]'}function Vo(e){return"script[async]"+e}function Og(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+En(s.href)+'"]');if(l)return i.instance=l,fn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),fn(l),Ln(l,"style",f),gc(l,s.precedence,e),i.instance=l;case"stylesheet":f=gr(s.href);var m=e.querySelector(Go(f));if(m)return i.state.loading|=4,i.instance=m,fn(m),m;l=Pg(s),(f=xi.get(f))&&mh(l,f),m=(e.ownerDocument||e).createElement("link"),fn(m);var E=m;return E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Ln(m,"link",l),i.state.loading|=4,gc(m,s.precedence,e),i.instance=m;case"script":return m=vr(s.src),(f=e.querySelector(Vo(m)))?(i.instance=f,fn(f),f):(l=s,(f=xi.get(m))&&(l=g({},s),gh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),fn(f),Ln(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,gc(l,s.precedence,e));return i.instance}function gc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var A=l[E];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function mh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function gh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var vc=null;function zg(e,i,s){if(vc===null){var l=new Map,f=vc=new Map;f.set(s,l)}else f=vc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[Ni]||m[gn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var A=l.get(E);A?A.push(m):l.set(E,[m])}}return l}function Bg(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Jy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Ig(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ko=null;function $y(){}function tM(e,i,s){if(ko===null)throw Error(a(475));var l=ko;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=gr(s.href),m=e.querySelector(Go(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=_c.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=m,fn(m);return}m=e.ownerDocument||e,s=Pg(s),(f=xi.get(f))&&mh(s,f),m=m.createElement("link"),fn(m);var E=m;E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Ln(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function eM(){if(ko===null)throw Error(a(475));var e=ko;return e.stylesheets&&e.count===0&&vh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&vh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)vh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function vh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,i.forEach(nM,e),xc=null,_c.call(e))}function nM(e,i){if(!(i.state.loading&4)){var s=xc.get(e);if(s)var l=s.get(null);else{s=new Map,xc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,f),s.set(E,f),this.count++,l=_c.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Xo={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function iM(e,i,s,l,f,m,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Fg(e,i,s,l,f,m,E,A,I,tt,mt,xt){return e=new iM(e,i,s,E,A,I,tt,xt),i=1,m===!0&&(i|=24),m=ei(3,null,null,i),e.current=m,m.stateNode=e,i=Qu(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},ef(m),e}function Hg(e){return e?(e=js,e):js}function Gg(e,i,s,l,f,m){f=Hg(f),l.context===null?l.context=f:l.pendingContext=f,l=Ea(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ta(e,l,i),s!==null&&(ri(s,e,i),yo(s,e,i))}function Vg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function _h(e,i){Vg(e,i),(e=e.alternate)&&Vg(e,i)}function kg(e){if(e.tag===13){var i=Ys(e,67108864);i!==null&&ri(i,e,67108864),_h(e,67108864)}}var yc=!0;function aM(e,i,s,l){var f=B.T;B.T=null;var m=et.p;try{et.p=2,xh(e,i,s,l)}finally{et.p=m,B.T=f}}function sM(e,i,s,l){var f=B.T;B.T=null;var m=et.p;try{et.p=8,xh(e,i,s,l)}finally{et.p=m,B.T=f}}function xh(e,i,s,l){if(yc){var f=yh(l);if(f===null)rh(e,i,l,Mc,s),Wg(e,l);else if(oM(f,e,i,s,l))l.stopPropagation();else if(Wg(e,l),i&4&&-1<rM.indexOf(e)){for(;f!==null;){var m=_a(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Jt(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var I=1<<31-zt(E);A.entanglements[1]|=I,E&=~I}Ii(m),(Pe&6)===0&&(ac=Ot()+500,Bo(0))}}break;case 13:A=Ys(m,2),A!==null&&ri(A,m,2),rc(),_h(m,2)}if(m=yh(l),m===null&&rh(e,i,l,Mc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else rh(e,i,l,null,s)}}function yh(e){return e=Tu(e),Mh(e)}var Mc=null;function Mh(e){if(Mc=null,e=Yi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Mc=e,null}function Xg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case kt:return 2;case fe:return 8;case Qe:case Je:return 32;case z:return 268435456;default:return 32}default:return 32}}var Sh=!1,Ba=null,Ia=null,Fa=null,Wo=new Map,qo=new Map,Ha=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wg(e,i){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function Yo(e,i,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=_a(i),i!==null&&kg(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function oM(e,i,s,l,f){switch(i){case"focusin":return Ba=Yo(Ba,e,i,s,l,f),!0;case"dragenter":return Ia=Yo(Ia,e,i,s,l,f),!0;case"mouseover":return Fa=Yo(Fa,e,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Wo.set(m,Yo(Wo.get(m)||null,e,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,qo.set(m,Yo(qo.get(m)||null,e,i,s,l,f)),!0}return!1}function qg(e){var i=Yi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Mi(e.priority,function(){if(s.tag===13){var l=si();l=oe(l);var f=Ys(s,l);f!==null&&ri(f,s,l),_h(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=yh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Eu=l,s.target.dispatchEvent(l),Eu=null}else return i=_a(s),i!==null&&kg(i),e.blockedOn=s,!1;i.shift()}return!0}function Yg(e,i,s){Sc(e)&&s.delete(i)}function lM(){Sh=!1,Ba!==null&&Sc(Ba)&&(Ba=null),Ia!==null&&Sc(Ia)&&(Ia=null),Fa!==null&&Sc(Fa)&&(Fa=null),Wo.forEach(Yg),qo.forEach(Yg)}function Ec(e,i){e.blockedOn===i&&(e.blockedOn=null,Sh||(Sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,lM)))}var Tc=null;function jg(e){Tc!==e&&(Tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Mh(l||s)===null)continue;break}var m=_a(s);m!==null&&(e.splice(i,3),i-=3,Mf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function jo(e){function i(I){return Ec(I,e)}Ba!==null&&Ec(Ba,e),Ia!==null&&Ec(Ia,e),Fa!==null&&Ec(Fa,e),Wo.forEach(i),qo.forEach(i);for(var s=0;s<Ha.length;s++){var l=Ha[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(s=Ha[0],s.blockedOn===null);)qg(s),s.blockedOn===null&&Ha.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],E=f[tn]||null;if(typeof m=="function")E||jg(s);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[tn]||null)A=E.formAction;else if(Mh(f)!==null)continue}else A=E.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),jg(s)}}}function Eh(e){this._internalRoot=e}bc.prototype.render=Eh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=si();Gg(s,l,e,i,null,null)},bc.prototype.unmount=Eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Gg(e.current,2,null,e,null,null),rc(),i[Li]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var i=we();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ha.length&&i!==0&&i<Ha[s].priority;s++);Ha.splice(s,0,e),s===0&&qg(e)}};var Zg=t.version;if(Zg!=="19.1.1")throw Error(a(527,Zg,"19.1.1"));et.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var cM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{dt=Ac.inject(cM),_t=Ac}catch{}}return Ko.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=f0,m=h0,E=d0,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=Fg(e,1,!1,null,null,s,l,f,m,E,A,null),e[Li]=i.current,sh(e),new Eh(i)},Ko.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",m=f0,E=h0,A=d0,I=null,tt=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&(tt=s.formState)),i=Fg(e,1,!0,i,s??null,l,f,m,E,A,I,tt),i.context=Hg(null),s=i.current,l=si(),l=oe(l),f=Ea(l),f.callback=null,Ta(s,f,l),s=l,i.current.lanes=s,Bt(i,s),Ii(i),e[Li]=i.current,sh(e),new bc(i)},Ko.version="19.1.1",Ko}var sv;function xM(){if(sv)return Ah.exports;sv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ah.exports=_M(),Ah.exports}var yM=xM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="180",MM=0,rv=1,SM=2,x_=1,EM=2,da=3,$a=0,$n=1,Fn=2,pa=0,Br=1,Fr=2,ov=3,lv=4,TM=5,Cs=100,bM=101,AM=102,wM=103,RM=104,CM=200,DM=201,UM=202,LM=203,fd=204,hd=205,NM=206,PM=207,OM=208,zM=209,BM=210,IM=211,FM=212,HM=213,GM=214,dd=0,pd=1,md=2,Hr=3,gd=4,vd=5,_d=6,xd=7,y_=0,VM=1,kM=2,Ja=0,M_=1,S_=2,E_=3,vu=4,T_=5,b_=6,A_=7,w_=300,Gr=301,Vr=302,yd=303,Md=304,_u=306,Sd=1e3,Us=1001,Ed=1002,fi=1003,XM=1004,wc=1005,Gi=1006,Dh=1007,Ls=1008,Wi=1009,R_=1010,C_=1011,fl=1012,sp=1013,Os=1014,Vi=1015,ma=1016,rp=1017,op=1018,hl=1020,D_=35902,U_=35899,L_=1021,N_=1022,Di=1023,dl=1026,pl=1027,lp=1028,cp=1029,P_=1030,up=1031,fp=1033,iu=33776,au=33777,su=33778,ru=33779,Td=35840,bd=35841,Ad=35842,wd=35843,Rd=36196,Cd=37492,Dd=37496,Ud=37808,Ld=37809,Nd=37810,Pd=37811,Od=37812,zd=37813,Bd=37814,Id=37815,Fd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,Wd=36492,qd=36494,Yd=36495,jd=36283,Zd=36284,Kd=36285,Qd=36286,WM=3200,qM=3201,O_=0,YM=1,Za="",ui="srgb",kr="srgb-linear",fu="linear",ze="srgb",_r=7680,cv=519,jM=512,ZM=513,KM=514,z_=515,QM=516,JM=517,$M=518,tS=519,uv=35044,fv="300 es",ki=2e3,hu=2001;class jr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hv=1234567;const rl=Math.PI/180,Xr=180/Math.PI;function Zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]).toLowerCase()}function Se(r,t,n){return Math.max(t,Math.min(n,r))}function hp(r,t){return(r%t+t)%t}function eS(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function nS(r,t,n){return r!==t?(n-r)/(t-r):0}function ol(r,t,n){return(1-n)*r+n*t}function iS(r,t,n,a){return ol(r,t,1-Math.exp(-n*a))}function aS(r,t=1){return t-Math.abs(hp(r,t*2)-t)}function sS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function rS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function oS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function lS(r,t){return r+Math.random()*(t-r)}function cS(r){return r*(.5-Math.random())}function uS(r){r!==void 0&&(hv=r);let t=hv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fS(r){return r*rl}function hS(r){return r*Xr}function dS(r){return(r&r-1)===0&&r!==0}function pS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gS(r,t,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),d=u(n/2),p=c((t+a)/2),g=u((t+a)/2),v=c((t-a)/2),_=u((t-a)/2),x=c((a-t)/2),S=u((a-t)/2);switch(o){case"XYX":r.set(h*g,d*v,d*_,h*p);break;case"YZY":r.set(d*_,h*g,d*v,h*p);break;case"ZXZ":r.set(d*v,d*_,h*g,h*p);break;case"XZX":r.set(h*g,d*S,d*x,h*p);break;case"YXY":r.set(d*x,h*g,d*S,h*p);break;case"ZYZ":r.set(d*S,d*x,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Pr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ka={DEG2RAD:rl,RAD2DEG:Xr,generateUUID:Zr,clamp:Se,euclideanModulo:hp,mapLinear:eS,inverseLerp:nS,lerp:ol,damp:iS,pingpong:aS,smoothstep:sS,smootherstep:rS,randInt:oS,randFloat:lS,randFloatSpread:cS,seededRandom:uS,degToRad:fS,radToDeg:hS,isPowerOfTwo:dS,ceilPowerOfTwo:pS,floorPowerOfTwo:mS,setQuaternionFromProperEuler:gS,normalize:kn,denormalize:Pr};class It{constructor(t=0,n=0){It.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kr{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let d=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];const _=c[u+0],x=c[u+1],S=c[u+2],T=c[u+3];if(h===0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=S,t[n+3]=T;return}if(v!==T||d!==_||p!==x||g!==S){let M=1-h;const y=d*_+p*x+g*S+v*T,L=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const P=Math.sqrt(U),O=Math.atan2(P,y*L);M=Math.sin(M*O)/P,h=Math.sin(h*O)/P}const w=h*L;if(d=d*M+_*w,p=p*M+x*w,g=g*M+S*w,v=v*M+T*w,M===1-h){const P=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=P,p*=P,g*=P,v*=P}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],d=a[o+1],p=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],S=c[u+3];return t[n]=h*S+g*v+d*x-p*_,t[n+1]=d*S+g*_+p*v-h*x,t[n+2]=p*S+g*x+h*_-d*v,t[n+3]=g*S-h*v-d*_-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(o/2),v=h(c/2),_=d(a/2),x=d(o/2),S=d(c/2);switch(u){case"XYZ":this._x=_*g*v+p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v-_*x*S;break;case"YXZ":this._x=_*g*v+p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v+_*x*S;break;case"ZXY":this._x=_*g*v-p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v-_*x*S;break;case"ZYX":this._x=_*g*v-p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v+_*x*S;break;case"YZX":this._x=_*g*v+p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v-_*x*S;break;case"XZY":this._x=_*g*v-p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v+_*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-d)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(g-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*d,this._y=o*g+u*d+c*h-a*p,this._z=c*g+u*p+a*d-o*h,this._w=u*g-a*h-o*d-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),v=Math.sin((1-n)*g)/p,_=Math.sin(n*g)/p;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,n=0,a=0){V.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(dv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(dv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,d=t.w,p=2*(u*o-h*a),g=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+d*p+u*v-h*g,this.y=a+d*g+h*p-c*v,this.z=o+d*v+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,d=n.z;return this.x=o*d-c*h,this.y=c*u-a*d,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Uh.copy(this).projectOnVector(t),this.sub(Uh)}reflect(t){return this.sub(Uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new V,dv=new Kr;class pe{constructor(t,n,a,o,c,u,h,d,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,d,p)}set(t,n,a,o,c,u,h,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],v=a[7],_=a[2],x=a[5],S=a[8],T=o[0],M=o[3],y=o[6],L=o[1],U=o[4],w=o[7],P=o[2],O=o[5],F=o[8];return c[0]=u*T+h*L+d*P,c[3]=u*M+h*U+d*O,c[6]=u*y+h*w+d*F,c[1]=p*T+g*L+v*P,c[4]=p*M+g*U+v*O,c[7]=p*y+g*w+v*F,c[2]=_*T+x*L+S*P,c[5]=_*M+x*U+S*O,c[8]=_*y+x*w+S*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-a*c*g+a*h*d+o*c*p-o*u*d}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=g*u-h*p,_=h*d-g*c,x=p*c-u*d,S=n*v+a*_+o*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=v*T,t[1]=(o*p-g*a)*T,t[2]=(h*a-o*u)*T,t[3]=_*T,t[4]=(g*n-o*d)*T,t[5]=(o*c-h*n)*T,t[6]=x*T,t[7]=(a*d-p*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*h)+u+t,-o*p,o*d,-o*(-p*u+d*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Lh.makeScale(t,n)),this}rotate(t){return this.premultiply(Lh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Lh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new pe;function B_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vS(){const r=du("canvas");return r.style.display="block",r}const pv={};function ml(r){r in pv||(pv[r]=!0,console.warn(r))}function _S(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const mv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xS(){const r={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ze&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ze&&(o.r=Ir(o.r),o.g=Ir(o.g),o.b=Ir(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Za?fu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ml("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ml("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[kr]:{primaries:t,whitePoint:a,transfer:fu,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const Re=xS();function ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class yS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{xr===void 0&&(xr=du("canvas")),xr.width=t.width,xr.height=t.height;const o=xr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=xr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=du("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ga(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ga(n[a]/255)*255):n[a]=ga(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let MS=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Nh(o[u].image)):c.push(Nh(o[u]))}else c=Nh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SS=0;const Ph=new V;class Wn extends jr{constructor(t=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=Us,o=Us,c=Gi,u=Ls,h=Di,d=Wi,p=Wn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Zr(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sd:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case Ed:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sd:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case Ed:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=w_;Wn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,n=0,a=0,o=1){Ve.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const d=t.elements,p=d[0],g=d[4],v=d[8],_=d[1],x=d[5],S=d[9],T=d[2],M=d[6],y=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(S-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(S+M)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,w=(x+1)/2,P=(y+1)/2,O=(g+_)/4,F=(v+T)/4,G=(S+M)/4;return U>w&&U>P?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=O/a,c=F/a):w>P?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=O/o,c=G/o):P<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),a=F/c,o=G/c),this.set(a,o,c,n),this}let L=Math.sqrt((M-S)*(M-S)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(M-S)/L,this.y=(v-T)/L,this.z=(_-g)/L,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ES extends jr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ve(0,0,t,n),this.scissorTest=!1,this.viewport=new Ve(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new Wn(o);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new dp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends ES{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class I_ extends Wn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=fi,this.minFilter=fi,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TS extends Wn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=fi,this.minFilter=fi,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ai):Ai.fromBufferAttribute(c,u),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Rc.copy(a.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Cc.subVectors(this.max,Qo),yr.subVectors(t.a,Qo),Mr.subVectors(t.b,Qo),Sr.subVectors(t.c,Qo),Va.subVectors(Mr,yr),ka.subVectors(Sr,Mr),ys.subVectors(yr,Sr);let n=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-ys.z,ys.y,Va.z,0,-Va.x,ka.z,0,-ka.x,ys.z,0,-ys.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-ys.y,ys.x,0];return!Oh(n,yr,Mr,Sr,Cc)||(n=[1,0,0,0,1,0,0,0,1],!Oh(n,yr,Mr,Sr,Cc))?!1:(Dc.crossVectors(Va,ka),n=[Dc.x,Dc.y,Dc.z],Oh(n,yr,Mr,Sr,Cc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new V,new V,new V,new V,new V,new V,new V,new V],Ai=new V,Rc=new zs,yr=new V,Mr=new V,Sr=new V,Va=new V,ka=new V,ys=new V,Qo=new V,Cc=new V,Dc=new V,Ms=new V;function Oh(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Ms.fromArray(r,c);const h=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),d=t.dot(Ms),p=n.dot(Ms),g=a.dot(Ms);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const bS=new zs,Jo=new V,zh=new V;class Qr{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):bS.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Jo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(zh)),this.expandByPoint(Jo.copy(t.center).sub(zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new V,Bh=new V,Uc=new V,Xa=new V,Ih=new V,Lc=new V,Fh=new V;class F_{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ca.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,n),ca.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Bh.copy(t).add(n).multiplyScalar(.5),Uc.copy(n).sub(t).normalize(),Xa.copy(this.origin).sub(Bh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Uc),h=Xa.dot(this.direction),d=-Xa.dot(Uc),p=Xa.lengthSq(),g=Math.abs(1-u*u);let v,_,x,S;if(g>0)if(v=u*d-h,_=u*h-d,S=c*g,v>=0)if(_>=-S)if(_<=S){const T=1/g;v*=T,_*=T,x=v*(v+u*_+2*h)+_*(u*v+_+2*d)+p}else _=c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*d)+p;else _=-c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*d)+p;else _<=-S?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p):_<=S?(v=0,_=Math.min(Math.max(-c,-d),c),x=_*(_+2*d)+p):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Bh).addScaledVector(Uc,_),x}intersectSphere(t,n){ca.subVectors(t.center,this.origin);const a=ca.dot(this.direction),o=ca.dot(ca)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),a>d||h>o)||((h>a||a!==a)&&(a=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,n,a,o,c){Ih.subVectors(n,t),Lc.subVectors(a,t),Fh.crossVectors(Ih,Lc);let u=this.direction.dot(Fh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Xa.subVectors(this.origin,t);const d=h*this.direction.dot(Lc.crossVectors(Xa,Lc));if(d<0)return null;const p=h*this.direction.dot(Ih.cross(Xa));if(p<0||d+p>u)return null;const g=-h*Xa.dot(Fh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,n,a,o,c,u,h,d,p,g,v,_,x,S,T,M){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,d,p,g,v,_,x,S,T,M)}set(t,n,a,o,c,u,h,d,p,g,v,_,x,S,T,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=d,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=S,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),u=1/Er.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,S=h*g,T=h*v;n[0]=d*g,n[4]=-d*v,n[8]=p,n[1]=x+S*p,n[5]=_-T*p,n[9]=-h*d,n[2]=T-_*p,n[6]=S+x*p,n[10]=u*d}else if(t.order==="YXZ"){const _=d*g,x=d*v,S=p*g,T=p*v;n[0]=_+T*h,n[4]=S*h-x,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=x*h-S,n[6]=T+_*h,n[10]=u*d}else if(t.order==="ZXY"){const _=d*g,x=d*v,S=p*g,T=p*v;n[0]=_-T*h,n[4]=-u*v,n[8]=S+x*h,n[1]=x+S*h,n[5]=u*g,n[9]=T-_*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(t.order==="ZYX"){const _=u*g,x=u*v,S=h*g,T=h*v;n[0]=d*g,n[4]=S*p-x,n[8]=_*p+T,n[1]=d*v,n[5]=T*p+_,n[9]=x*p-S,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(t.order==="YZX"){const _=u*d,x=u*p,S=h*d,T=h*p;n[0]=d*g,n[4]=T-_*v,n[8]=S*v+x,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*v+S,n[10]=_-T*v}else if(t.order==="XZY"){const _=u*d,x=u*p,S=h*d,T=h*p;n[0]=d*g,n[4]=-v,n[8]=p*g,n[1]=_*v+T,n[5]=u*g,n[9]=x*v-S,n[2]=S*v-x,n[6]=h*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AS,t,wS)}lookAt(t,n,a){const o=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Wa.crossVectors(a,oi),Wa.lengthSq()===0&&(Math.abs(a.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Wa.crossVectors(a,oi)),Wa.normalize(),Nc.crossVectors(oi,Wa),o[0]=Wa.x,o[4]=Nc.x,o[8]=oi.x,o[1]=Wa.y,o[5]=Nc.y,o[9]=oi.y,o[2]=Wa.z,o[6]=Nc.z,o[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],v=a[5],_=a[9],x=a[13],S=a[2],T=a[6],M=a[10],y=a[14],L=a[3],U=a[7],w=a[11],P=a[15],O=o[0],F=o[4],G=o[8],R=o[12],D=o[1],k=o[5],Z=o[9],ot=o[13],ut=o[2],ht=o[6],B=o[10],et=o[14],q=o[3],ct=o[7],N=o[11],K=o[15];return c[0]=u*O+h*D+d*ut+p*q,c[4]=u*F+h*k+d*ht+p*ct,c[8]=u*G+h*Z+d*B+p*N,c[12]=u*R+h*ot+d*et+p*K,c[1]=g*O+v*D+_*ut+x*q,c[5]=g*F+v*k+_*ht+x*ct,c[9]=g*G+v*Z+_*B+x*N,c[13]=g*R+v*ot+_*et+x*K,c[2]=S*O+T*D+M*ut+y*q,c[6]=S*F+T*k+M*ht+y*ct,c[10]=S*G+T*Z+M*B+y*N,c[14]=S*R+T*ot+M*et+y*K,c[3]=L*O+U*D+w*ut+P*q,c[7]=L*F+U*k+w*ht+P*ct,c[11]=L*G+U*Z+w*B+P*N,c[15]=L*R+U*ot+w*et+P*K,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],d=t[9],p=t[13],g=t[2],v=t[6],_=t[10],x=t[14],S=t[3],T=t[7],M=t[11],y=t[15];return S*(+c*d*v-o*p*v-c*h*_+a*p*_+o*h*x-a*d*x)+T*(+n*d*x-n*p*_+c*u*_-o*u*x+o*p*g-c*d*g)+M*(+n*p*v-n*h*x-c*u*v+a*u*x+c*h*g-a*p*g)+y*(-o*h*g-n*d*v+n*h*_+o*u*v-a*u*_+a*d*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],x=t[11],S=t[12],T=t[13],M=t[14],y=t[15],L=v*M*p-T*_*p+T*d*x-h*M*x-v*d*y+h*_*y,U=S*_*p-g*M*p-S*d*x+u*M*x+g*d*y-u*_*y,w=g*T*p-S*v*p+S*h*x-u*T*x-g*h*y+u*v*y,P=S*v*d-g*T*d-S*h*_+u*T*_+g*h*M-u*v*M,O=n*L+a*U+o*w+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=L*F,t[1]=(T*_*c-v*M*c-T*o*x+a*M*x+v*o*y-a*_*y)*F,t[2]=(h*M*c-T*d*c+T*o*p-a*M*p-h*o*y+a*d*y)*F,t[3]=(v*d*c-h*_*c-v*o*p+a*_*p+h*o*x-a*d*x)*F,t[4]=U*F,t[5]=(g*M*c-S*_*c+S*o*x-n*M*x-g*o*y+n*_*y)*F,t[6]=(S*d*c-u*M*c-S*o*p+n*M*p+u*o*y-n*d*y)*F,t[7]=(u*_*c-g*d*c+g*o*p-n*_*p-u*o*x+n*d*x)*F,t[8]=w*F,t[9]=(S*v*c-g*T*c-S*a*x+n*T*x+g*a*y-n*v*y)*F,t[10]=(u*T*c-S*h*c+S*a*p-n*T*p-u*a*y+n*h*y)*F,t[11]=(g*h*c-u*v*c-g*a*p+n*v*p+u*a*x-n*h*x)*F,t[12]=P*F,t[13]=(g*T*o-S*v*o+S*a*_-n*T*_-g*a*M+n*v*M)*F,t[14]=(S*h*o-u*T*o-S*a*d+n*T*d+u*a*M-n*h*M)*F,t[15]=(u*v*o-g*h*o+g*a*d-n*v*d-u*a*_+n*h*_)*F,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,d=t.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+a,g*d-o*u,0,p*d-o*h,g*d+o*u,c*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,v=h+h,_=c*p,x=c*g,S=c*v,T=u*g,M=u*v,y=h*v,L=d*p,U=d*g,w=d*v,P=a.x,O=a.y,F=a.z;return o[0]=(1-(T+y))*P,o[1]=(x+w)*P,o[2]=(S-U)*P,o[3]=0,o[4]=(x-w)*O,o[5]=(1-(_+y))*O,o[6]=(M+L)*O,o[7]=0,o[8]=(S+U)*F,o[9]=(M-L)*F,o[10]=(1-(_+T))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=Er.set(o[0],o[1],o[2]).length();const u=Er.set(o[4],o[5],o[6]).length(),h=Er.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],wi.copy(this);const p=1/c,g=1/u,v=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,n.setFromRotationMatrix(wi),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=ki,d=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(a-o),_=(n+t)/(n-t),x=(a+o)/(a-o);let S,T;if(d)S=c/(u-c),T=u*c/(u-c);else if(h===ki)S=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===hu)S=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ki,d=!1){const p=this.elements,g=2/(n-t),v=2/(a-o),_=-(n+t)/(n-t),x=-(a+o)/(a-o);let S,T;if(d)S=1/(u-c),T=u/(u-c);else if(h===ki)S=-2/(u-c),T=-(u+c)/(u-c);else if(h===hu)S=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Er=new V,wi=new We,AS=new V(0,0,0),wS=new V(1,1,1),Wa=new V,Nc=new V,oi=new V,vv=new We,_v=new Kr;class qi{constructor(t=0,n=0,a=0,o=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return vv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return _v.setFromEuler(this),this.setFromQuaternion(_v,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let RS=0;const xv=new V,Tr=new Kr,ua=new We,Pc=new V,$o=new V,CS=new V,DS=new Kr,yv=new V(1,0,0),Mv=new V(0,1,0),Sv=new V(0,0,1),Ev={type:"added"},US={type:"removed"},br={type:"childadded",child:null},Hh={type:"childremoved",child:null};class cn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const t=new V,n=new qi,a=new Kr,o=new V(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new We},normalMatrix:{value:new pe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(yv,t)}rotateY(t){return this.rotateOnAxis(Mv,t)}rotateZ(t){return this.rotateOnAxis(Sv,t)}translateOnAxis(t,n){return xv.copy(t).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(yv,t)}translateY(t){return this.translateOnAxis(Mv,t)}translateZ(t){return this.translateOnAxis(Sv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Pc.copy(t):Pc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt($o,Pc,this.up):ua.lookAt(Pc,$o,this.up),this.quaternion.setFromRotationMatrix(ua),o&&(ua.extractRotation(o.matrixWorld),Tr.setFromRotationMatrix(ua),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ev),br.child=t,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(US),Hh.child=t,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ev),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,CS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,DS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(t.shapes,v)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(t.animations,d))}}if(n){const h=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),S=u(t.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),S.length>0&&(a.nodes=S)}return a.object=o,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}cn.DEFAULT_UP=new V(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new V,fa=new V,Gh=new V,ha=new V,Ar=new V,wr=new V,Tv=new V,Vh=new V,kh=new V,Xh=new V,Wh=new Ve,qh=new Ve,Yh=new Ve;class Ci{constructor(t=new V,n=new V,a=new V){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ri.subVectors(t,n),o.cross(Ri);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ri.subVectors(o,n),fa.subVectors(a,n),Gh.subVectors(t,n);const u=Ri.dot(Ri),h=Ri.dot(fa),d=Ri.dot(Gh),p=fa.dot(fa),g=fa.dot(Gh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(p*d-h*g)*_,S=(u*g-h*d)*_;return c.set(1-x-S,S,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,n,a,o,c,u,h,d){return this.getBarycoord(t,n,a,o,ha)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,ha.x),d.addScaledVector(u,ha.y),d.addScaledVector(h,ha.z),d)}static getInterpolatedAttribute(t,n,a,o,c,u){return Wh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Wh.fromBufferAttribute(t,n),qh.fromBufferAttribute(t,a),Yh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Wh,c.x),u.addScaledVector(qh,c.y),u.addScaledVector(Yh,c.z),u}static isFrontFacing(t,n,a,o){return Ri.subVectors(a,n),fa.subVectors(t,n),Ri.cross(fa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ri.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ci.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ci.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Ar.subVectors(o,a),wr.subVectors(c,a),Vh.subVectors(t,a);const d=Ar.dot(Vh),p=wr.dot(Vh);if(d<=0&&p<=0)return n.copy(a);kh.subVectors(t,o);const g=Ar.dot(kh),v=wr.dot(kh);if(g>=0&&v<=g)return n.copy(o);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Ar,u);Xh.subVectors(t,c);const x=Ar.dot(Xh),S=wr.dot(Xh);if(S>=0&&x<=S)return n.copy(c);const T=x*p-d*S;if(T<=0&&p>=0&&S<=0)return h=p/(p-S),n.copy(a).addScaledVector(wr,h);const M=g*S-x*v;if(M<=0&&v-g>=0&&x-S>=0)return Tv.subVectors(c,o),h=(v-g)/(v-g+(x-S)),n.copy(o).addScaledVector(Tv,h);const y=1/(M+T+_);return u=T*y,h=_*y,n.copy(a).addScaledVector(Ar,u).addScaledVector(wr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function jh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ce{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Re.workingColorSpace){if(t=hp(t,1),n=Se(n,0,1),a=Se(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=jh(u,c,t+1/3),this.g=jh(u,c,t),this.b=jh(u,c,t-1/3)}return Re.colorSpaceToWorking(this,o),this}setStyle(t,n=ui){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ui){const a=G_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Re.workingToColorSpace(In.copy(this),t),Math.round(Se(In.r*255,0,255))*65536+Math.round(Se(In.g*255,0,255))*256+Math.round(Se(In.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(In.copy(this),n);const a=In.r,o=In.g,c=In.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case a:d=(o-c)/v+(o<c?6:0);break;case o:d=(c-a)/v+2;break;case c:d=(a-o)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=ui){Re.workingToColorSpace(In.copy(this),t);const n=In.r,a=In.g,o=In.b;return t!==ui?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+n,qa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(qa),t.getHSL(Oc);const a=ol(qa.h,Oc.h,n),o=ol(qa.s,Oc.s,n),c=ol(qa.l,Oc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ce;ce.NAMES=G_;let LS=0;class Jr extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Br,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(a.blending=this.blending),this.side!==$a&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==fd&&(a.blendSrc=this.blendSrc),this.blendDst!==hd&&(a.blendDst=this.blendDst),this.blendEquation!==Cs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(a.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ns extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new V,zc=new It;let NS=0;class hi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=uv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)zc.fromBufferAttribute(this,n),zc.applyMatrix3(t),this.setXY(n,zc.x,zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Pr(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Pr(n,this.array)),n}setX(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Pr(n,this.array)),n}setY(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Pr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Pr(n,this.array)),n}setW(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array),c=kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uv&&(t.usage=this.usage),t}}class V_ extends hi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class k_ extends hi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ye extends hi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let PS=0;const yi=new We,Zh=new cn,Rr=new V,li=new zs,tl=new zs,wn=new V;class sn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B_(t)?k_:V_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,a){return yi.makeTranslation(t,n,a),this.applyMatrix4(yi),this}scale(t,n,a){return yi.makeScale(t,n,a),this.applyMatrix4(yi),this}lookAt(t){return Zh.lookAt(t),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ye(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];li.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const a=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(li.min,tl.min),li.expandByPoint(wn),wn.addVectors(li.max,tl.max),li.expandByPoint(wn)):(li.expandByPoint(tl.min),li.expandByPoint(tl.max))}li.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)wn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(wn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)wn.fromBufferAttribute(h,p),d&&(Rr.fromBufferAttribute(t,p),wn.add(Rr)),o=Math.max(o,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let G=0;G<a.count;G++)h[G]=new V,d[G]=new V;const p=new V,g=new V,v=new V,_=new It,x=new It,S=new It,T=new V,M=new V;function y(G,R,D){p.fromBufferAttribute(a,G),g.fromBufferAttribute(a,R),v.fromBufferAttribute(a,D),_.fromBufferAttribute(c,G),x.fromBufferAttribute(c,R),S.fromBufferAttribute(c,D),g.sub(p),v.sub(p),x.sub(_),S.sub(_);const k=1/(x.x*S.y-S.x*x.y);isFinite(k)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(v,-x.y).multiplyScalar(k),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-S.x).multiplyScalar(k),h[G].add(T),h[R].add(T),h[D].add(T),d[G].add(M),d[R].add(M),d[D].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let G=0,R=L.length;G<R;++G){const D=L[G],k=D.start,Z=D.count;for(let ot=k,ut=k+Z;ot<ut;ot+=3)y(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new V,w=new V,P=new V,O=new V;function F(G){P.fromBufferAttribute(o,G),O.copy(P);const R=h[G];U.copy(R),U.sub(P.multiplyScalar(P.dot(R))).normalize(),w.crossVectors(O,R);const k=w.dot(d[G])<0?-1:1;u.setXYZW(G,U.x,U.y,U.z,k)}for(let G=0,R=L.length;G<R;++G){const D=L[G],k=D.start,Z=D.count;for(let ot=k,ut=k+Z;ot<ut;ot+=3)F(t.getX(ot+0)),F(t.getX(ot+1)),F(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new V,c=new V,u=new V,h=new V,d=new V,p=new V,g=new V,v=new V;if(t)for(let _=0,x=t.count;_<x;_+=3){const S=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,S),d.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),h.add(g),d.add(g),p.add(g),a.setXYZ(S,h.x,h.y,h.z),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(d.length*g);let x=0,S=0;for(let T=0,M=d.length;T<M;T++){h.isInterleavedBufferAttribute?x=d[T]*h.data.stride+h.offset:x=d[T]*g;for(let y=0;y<g;y++)_[S++]=p[x++]}return new hi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sn,a=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=t(d,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=t(_,a);d.push(x)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(t.data))}g.length>0&&(o[d]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bv=new We,Ss=new F_,Bc=new Qr,Av=new V,Ic=new V,Fc=new V,Hc=new V,Kh=new V,Gc=new V,wv=new V,Vc=new V;class Kt extends cn{constructor(t=new sn,n=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],v=c[d];g!==0&&(Kh.fromBufferAttribute(v,t),u?Gc.addScaledVector(Kh,g):Gc.addScaledVector(Kh.sub(n),g))}n.add(Gc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(c),Ss.copy(t.ray).recast(t.near),!(Bc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Bc,Av)===null||Ss.origin.distanceToSquared(Av)>(t.far-t.near)**2))&&(bv.copy(c).invert(),Ss.copy(t.ray).applyMatrix4(bv),!(a.boundingBox!==null&&Ss.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ss)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const M=_[S],y=u[M.materialIndex],L=Math.max(M.start,x.start),U=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let w=L,P=U;w<P;w+=3){const O=h.getX(w),F=h.getX(w+1),G=h.getX(w+2);o=kc(this,y,t,a,p,g,v,O,F,G),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const S=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let M=S,y=T;M<y;M+=3){const L=h.getX(M),U=h.getX(M+1),w=h.getX(M+2);o=kc(this,u,t,a,p,g,v,L,U,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const M=_[S],y=u[M.materialIndex],L=Math.max(M.start,x.start),U=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let w=L,P=U;w<P;w+=3){const O=w,F=w+1,G=w+2;o=kc(this,y,t,a,p,g,v,O,F,G),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const S=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let M=S,y=T;M<y;M+=3){const L=M,U=M+1,w=M+2;o=kc(this,u,t,a,p,g,v,L,U,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function OS(r,t,n,a,o,c,u,h){let d;if(t.side===$n?d=a.intersectTriangle(u,c,o,!0,h):d=a.intersectTriangle(o,c,u,t.side===$a,h),d===null)return null;Vc.copy(h),Vc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Vc);return p<n.near||p>n.far?null:{distance:p,point:Vc.clone(),object:r}}function kc(r,t,n,a,o,c,u,h,d,p){r.getVertexPosition(h,Ic),r.getVertexPosition(d,Fc),r.getVertexPosition(p,Hc);const g=OS(r,t,n,a,Ic,Fc,Hc,wv);if(g){const v=new V;Ci.getBarycoord(wv,Ic,Fc,Hc,v),o&&(g.uv=Ci.getInterpolatedAttribute(o,h,d,p,v,new It)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,h,d,p,v,new It)),u&&(g.normal=Ci.getInterpolatedAttribute(u,h,d,p,v,new V),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new V,materialIndex:0};Ci.getNormal(Ic,Fc,Hc,_.normal),g.face=_,g.barycoord=v}return g}class Qn extends sn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,x=0;S("z","y","x",-1,-1,a,n,t,u,c,0),S("z","y","x",1,-1,a,n,-t,u,c,1),S("x","z","y",1,1,t,a,n,o,u,2),S("x","z","y",1,-1,t,a,-n,o,u,3),S("x","y","z",1,-1,t,n,a,o,c,4),S("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(d),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(v,2));function S(T,M,y,L,U,w,P,O,F,G,R){const D=w/F,k=P/G,Z=w/2,ot=P/2,ut=O/2,ht=F+1,B=G+1;let et=0,q=0;const ct=new V;for(let N=0;N<B;N++){const K=N*k-ot;for(let pt=0;pt<ht;pt++){const vt=pt*D-Z;ct[T]=vt*L,ct[M]=K*U,ct[y]=ut,p.push(ct.x,ct.y,ct.z),ct[T]=0,ct[M]=0,ct[y]=O>0?1:-1,g.push(ct.x,ct.y,ct.z),v.push(pt/F),v.push(1-N/G),et+=1}}for(let N=0;N<G;N++)for(let K=0;K<F;K++){const pt=_+K+ht*N,vt=_+K+ht*(N+1),At=_+(K+1)+ht*(N+1),Gt=_+(K+1)+ht*N;d.push(pt,vt,Gt),d.push(vt,At,Gt),q+=6}h.addGroup(x,q,R),x+=q,_+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Xn(r){const t={};for(let n=0;n<r.length;n++){const a=Wr(r[n]);for(const o in a)t[o]=a[o]}return t}function zS(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function X_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const gl={clone:Wr,merge:Xn};var BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=zS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class W_ extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new V,Rv=new It,Cv=new It;class Jn extends W_{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,n){return this.getViewBounds(t,Rv,Cv),n.subVectors(Cv,Rv)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(rl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/d,n-=u.offsetY*a/p,o*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,Dr=1;class FS extends cn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn(Cr,Dr,t,n);o.layers=this.layers,this.add(o);const c=new Jn(Cr,Dr,t,n);c.layers=this.layers,this.add(c);const u=new Jn(Cr,Dr,t,n);u.layers=this.layers,this.add(u);const h=new Jn(Cr,Dr,t,n);h.layers=this.layers,this.add(h);const d=new Jn(Cr,Dr,t,n);d.layers=this.layers,this.add(d);const p=new Jn(Cr,Dr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,d]=n;for(const p of n)this.remove(p);if(t===ki)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===hu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,d),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=S,a.texture.needsPMREMUpdate=!0}}class q_ extends Wn{constructor(t=[],n=Gr,a,o,c,u,h,d,p,g){super(t,n,a,o,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class HS extends Ui{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new q_(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qn(5,5,5),c=new yn({name:"CubemapFromEquirect",uniforms:Wr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:$n,blending:pa});c.uniforms.tEquirect.value=n;const u=new Kt(o,c),h=n.minFilter;return n.minFilter===Ls&&(n.minFilter=Gi),new FS(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class xn extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GS={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),y=this._getHandJoint(p,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,S=.005;p.inputState.pinching&&_>x+S?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=x-S&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(GS)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new xn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class xu{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=n}clone(){return new xu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class VS extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class kS extends Wn{constructor(t=null,n=1,a=1,o,c,u,h,d,p=fi,g=fi,v,_){super(null,u,h,d,p,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dv extends hi{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ur=new We,Uv=new We,Xc=[],Lv=new zs,XS=new We,el=new Kt,nl=new Qr;class Nv extends Kt{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Dv(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,XS)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new zs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),Lv.copy(t.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Lv)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),nl.copy(t.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(nl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(el.geometry=this.geometry,el.material=this.material,el.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nl.copy(this.boundingSphere),nl.applyMatrix4(a),t.ray.intersectsSphere(nl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Ur),Uv.multiplyMatrices(a,Ur),el.matrixWorld=Uv,el.raycast(t,Xc);for(let u=0,h=Xc.length;u<h;u++){const d=Xc[u];d.instanceId=c,d.object=this,n.push(d)}Xc.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Dv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new kS(new Float32Array(o*this.count),o,this.count,lp,Vi));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=o*t;c[d]=h,c.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jh=new V,WS=new V,qS=new pe;class ws{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Jh.subVectors(a,n).cross(WS.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Jh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||qS.getNormalMatrix(t),o=this.coplanarPoint(Jh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Qr,YS=new It(.5,.5),Wc=new V;class pp{constructor(t=new ws,n=new ws,a=new ws,o=new ws,c=new ws,u=new ws){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ki,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],v=c[5],_=c[6],x=c[7],S=c[8],T=c[9],M=c[10],y=c[11],L=c[12],U=c[13],w=c[14],P=c[15];if(o[0].setComponents(p-u,x-g,y-S,P-L).normalize(),o[1].setComponents(p+u,x+g,y+S,P+L).normalize(),o[2].setComponents(p+h,x+v,y+T,P+U).normalize(),o[3].setComponents(p-h,x-v,y-T,P-U).normalize(),a)o[4].setComponents(d,_,M,w).normalize(),o[5].setComponents(p-d,x-_,y-M,P-w).normalize();else if(o[4].setComponents(p-d,x-_,y-M,P-w).normalize(),n===ki)o[5].setComponents(p+d,x+_,y+M,P+w).normalize();else if(n===hu)o[5].setComponents(d,_,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);const n=YS.distanceTo(t.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Wc.x=o.normal.x>0?t.max.x:t.min.x,Wc.y=o.normal.y>0?t.max.y:t.min.y,Wc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jS extends Jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pv=new We,Jd=new F_,qc=new Qr,Yc=new V;class ZS extends cn{constructor(t=new sn,n=new jS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(o),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;Pv.copy(o).invert(),Jd.copy(t.ray).applyMatrix4(Pv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=a.index,v=a.attributes.position;if(p!==null){const _=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let S=_,T=x;S<T;S++){const M=p.getX(S);Yc.fromBufferAttribute(v,M),Ov(Yc,M,d,o,t,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let S=_,T=x;S<T;S++)Yc.fromBufferAttribute(v,S),Ov(Yc,S,d,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ov(r,t,n,a,o,c,u){const h=Jd.distanceSqToPoint(r);if(h<n){const d=new V;Jd.closestPointToPoint(r,d),d.applyMatrix4(a);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Y_ extends Wn{constructor(t,n,a=Os,o,c,u,h=fi,d=fi,p,g=dl,v=1){if(g!==dl&&g!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,h,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class j_ extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mp extends sn{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],d=[],p=new V,g=new It;u.push(0,0,0),h.push(0,0,1),d.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const x=a+v/n*o;p.x=t*Math.cos(x),p.y=t*Math.sin(x),u.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(u[_]/t+1)/2,g.y=(u[_+1]/t+1)/2,d.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rn extends sn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:d};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],x=[];let S=0;const T=[],M=a/2;let y=0;L(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(x,2));function L(){const w=new V,P=new V;let O=0;const F=(n-t)/a;for(let G=0;G<=c;G++){const R=[],D=G/c,k=D*(n-t)+t;for(let Z=0;Z<=o;Z++){const ot=Z/o,ut=ot*d+h,ht=Math.sin(ut),B=Math.cos(ut);P.x=k*ht,P.y=-D*a+M,P.z=k*B,v.push(P.x,P.y,P.z),w.set(ht,F,B).normalize(),_.push(w.x,w.y,w.z),x.push(ot,1-D),R.push(S++)}T.push(R)}for(let G=0;G<o;G++)for(let R=0;R<c;R++){const D=T[R][G],k=T[R+1][G],Z=T[R+1][G+1],ot=T[R][G+1];(t>0||R!==0)&&(g.push(D,k,ot),O+=3),(n>0||R!==c-1)&&(g.push(k,Z,ot),O+=3)}p.addGroup(y,O,0),y+=O}function U(w){const P=S,O=new It,F=new V;let G=0;const R=w===!0?t:n,D=w===!0?1:-1;for(let Z=1;Z<=o;Z++)v.push(0,M*D,0),_.push(0,D,0),x.push(.5,.5),S++;const k=S;for(let Z=0;Z<=o;Z++){const ut=Z/o*d+h,ht=Math.cos(ut),B=Math.sin(ut);F.x=R*B,F.y=M*D,F.z=R*ht,v.push(F.x,F.y,F.z),_.push(0,D,0),O.x=ht*.5+.5,O.y=B*.5*D+.5,x.push(O.x,O.y),S++}for(let Z=0;Z<o;Z++){const ot=P+Z,ut=k+Z;w===!0?g.push(ut,ut+1,ot):g.push(ut+1,ut,ot),G+=3}p.addGroup(y,G,w===!0?1:2),y+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gp extends Rn{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new gp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vp extends sn{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],u=[];h(o),p(a),g(),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(c.slice(),3)),this.setAttribute("uv",new ye(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const U=new V,w=new V,P=new V;for(let O=0;O<n.length;O+=3)x(n[O+0],U),x(n[O+1],w),x(n[O+2],P),d(U,w,P,L)}function d(L,U,w,P){const O=P+1,F=[];for(let G=0;G<=O;G++){F[G]=[];const R=L.clone().lerp(w,G/O),D=U.clone().lerp(w,G/O),k=O-G;for(let Z=0;Z<=k;Z++)Z===0&&G===O?F[G][Z]=R:F[G][Z]=R.clone().lerp(D,Z/k)}for(let G=0;G<O;G++)for(let R=0;R<2*(O-G)-1;R++){const D=Math.floor(R/2);R%2===0?(_(F[G][D+1]),_(F[G+1][D]),_(F[G][D])):(_(F[G][D+1]),_(F[G+1][D+1]),_(F[G+1][D]))}}function p(L){const U=new V;for(let w=0;w<c.length;w+=3)U.x=c[w+0],U.y=c[w+1],U.z=c[w+2],U.normalize().multiplyScalar(L),c[w+0]=U.x,c[w+1]=U.y,c[w+2]=U.z}function g(){const L=new V;for(let U=0;U<c.length;U+=3){L.x=c[U+0],L.y=c[U+1],L.z=c[U+2];const w=M(L)/2/Math.PI+.5,P=y(L)/Math.PI+.5;u.push(w,1-P)}S(),v()}function v(){for(let L=0;L<u.length;L+=6){const U=u[L+0],w=u[L+2],P=u[L+4],O=Math.max(U,w,P),F=Math.min(U,w,P);O>.9&&F<.1&&(U<.2&&(u[L+0]+=1),w<.2&&(u[L+2]+=1),P<.2&&(u[L+4]+=1))}}function _(L){c.push(L.x,L.y,L.z)}function x(L,U){const w=L*3;U.x=t[w+0],U.y=t[w+1],U.z=t[w+2]}function S(){const L=new V,U=new V,w=new V,P=new V,O=new It,F=new It,G=new It;for(let R=0,D=0;R<c.length;R+=9,D+=6){L.set(c[R+0],c[R+1],c[R+2]),U.set(c[R+3],c[R+4],c[R+5]),w.set(c[R+6],c[R+7],c[R+8]),O.set(u[D+0],u[D+1]),F.set(u[D+2],u[D+3]),G.set(u[D+4],u[D+5]),P.copy(L).add(U).add(w).divideScalar(3);const k=M(P);T(O,D+0,L,k),T(F,D+2,U,k),T(G,D+4,w,k)}}function T(L,U,w,P){P<0&&L.x===1&&(u[U]=L.x-1),w.x===0&&w.z===0&&(u[U]=P/2/Math.PI+.5)}function M(L){return Math.atan2(L.z,-L.x)}function y(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.vertices,t.indices,t.radius,t.details)}}class va{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,d=c-1,p;for(;h<=d;)if(o=Math.floor(h+(d-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,a[o]===u)return o/(c-1);const g=a[o],_=a[o+1]-g,x=(u-g)/_;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),d=n||(u.isVector2?new It:new V);return d.copy(h).sub(u).normalize(),d}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new V,o=[],c=[],u=[],h=new V,d=new We;for(let x=0;x<=t;x++){const S=x/t;o[x]=this.getTangentAt(S,new V)}c[0]=new V,u[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),v<=p&&(p=v,a.set(0,1,0)),_<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const S=Math.acos(Se(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(d.makeRotationAxis(h,S))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(Se(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let S=1;S<=t;S++)c[S].applyMatrix4(d.makeRotationAxis(o[S],x*S)),u[S].crossVectors(o[S],c[S])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Z_ extends va{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=d}getPoint(t,n=new It){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let d=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=d-this.aX,x=p-this.aY;d=_*g-x*v+this.aX,p=_*v+x*g+this.aY}return a.set(d,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class KS extends Z_{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function _p(){let r=0,t=0,n=0,a=0;function o(c,u,h,d){r=c,t=h,n=-3*c+3*u-2*h-d,a=2*c-2*u+h+d}return{initCatmullRom:function(c,u,h,d,p){o(u,h,p*(h-c),p*(d-u))},initNonuniformCatmullRom:function(c,u,h,d,p,g,v){let _=(u-c)/p-(h-c)/(p+g)+(h-u)/g,x=(h-u)/g-(d-u)/(g+v)+(d-h)/v;_*=g,x*=g,o(u,h,_,x)},calc:function(c){const u=c*c,h=u*c;return r+t*c+n*u+a*h}}}const jc=new V,$h=new _p,td=new _p,ed=new _p;class pu extends va{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new V){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),d=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:d===0&&h===c-1&&(h=c-2,d=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(jc.subVectors(o[0],o[1]).add(o[0]),p=jc);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(jc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=jc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(p.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(g),x);T<1e-4&&(T=1),S<1e-4&&(S=T),M<1e-4&&(M=T),$h.initNonuniformCatmullRom(p.x,v.x,_.x,g.x,S,T,M),td.initNonuniformCatmullRom(p.y,v.y,_.y,g.y,S,T,M),ed.initNonuniformCatmullRom(p.z,v.z,_.z,g.z,S,T,M)}else this.curveType==="catmullrom"&&($h.initCatmullRom(p.x,v.x,_.x,g.x,this.tension),td.initCatmullRom(p.y,v.y,_.y,g.y,this.tension),ed.initCatmullRom(p.z,v.z,_.z,g.z,this.tension));return a.set($h.calc(d),td.calc(d),ed.calc(d)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new V().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zv(r,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=r*r,d=r*h;return(2*n-2*a+c+u)*d+(-3*n+3*a-2*c-u)*h+c*r+n}function QS(r,t){const n=1-r;return n*n*t}function JS(r,t){return 2*(1-r)*r*t}function $S(r,t){return r*r*t}function ll(r,t,n,a){return QS(r,t)+JS(r,n)+$S(r,a)}function t1(r,t){const n=1-r;return n*n*n*t}function e1(r,t){const n=1-r;return 3*n*n*r*t}function n1(r,t){return 3*(1-r)*r*r*t}function i1(r,t){return r*r*r*t}function cl(r,t,n,a,o){return t1(r,t)+e1(r,n)+n1(r,a)+i1(r,o)}class a1 extends va{constructor(t=new It,n=new It,a=new It,o=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new It){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(cl(t,o.x,c.x,u.x,h.x),cl(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class s1 extends va{constructor(t=new V,n=new V,a=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new V){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(cl(t,o.x,c.x,u.x,h.x),cl(t,o.y,c.y,u.y,h.y),cl(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r1 extends va{constructor(t=new It,n=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new It){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new It){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o1 extends va{constructor(t=new V,n=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new V){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new V){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l1 extends va{constructor(t=new It,n=new It,a=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new It){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ll(t,o.x,c.x,u.x),ll(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends va{constructor(t=new V,n=new V,a=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new V){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ll(t,o.x,c.x,u.x),ll(t,o.y,c.y,u.y),ll(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c1 extends va{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new It){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,d=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return a.set(zv(h,d.x,p.x,g.x,v.x),zv(h,d.y,p.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new It().fromArray(o))}return this}}var u1=Object.freeze({__proto__:null,ArcCurve:KS,CatmullRomCurve3:pu,CubicBezierCurve:a1,CubicBezierCurve3:s1,EllipseCurve:Z_,LineCurve:r1,LineCurve3:o1,QuadraticBezierCurve:l1,QuadraticBezierCurve3:K_,SplineCurve:c1});class Ps extends vp{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Ps(t.radius,t.detail)}}class ts extends sn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),d=Math.floor(o),p=h+1,g=d+1,v=t/h,_=n/d,x=[],S=[],T=[],M=[];for(let y=0;y<g;y++){const L=y*_-u;for(let U=0;U<p;U++){const w=U*v-c;S.push(w,-L,0),T.push(0,0,1),M.push(U/h),M.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<h;L++){const U=L+p*y,w=L+p*(y+1),P=L+1+p*(y+1),O=L+1+p*y;x.push(U,w,O),x.push(w,P,O)}this.setIndex(x),this.setAttribute("position",new ye(S,3)),this.setAttribute("normal",new ye(T,3)),this.setAttribute("uv",new ye(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.widthSegments,t.heightSegments)}}class xp extends sn{constructor(t=.5,n=1,a=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:u},a=Math.max(3,a),o=Math.max(1,o);const h=[],d=[],p=[],g=[];let v=t;const _=(n-t)/o,x=new V,S=new It;for(let T=0;T<=o;T++){for(let M=0;M<=a;M++){const y=c+M/a*u;x.x=v*Math.cos(y),x.y=v*Math.sin(y),d.push(x.x,x.y,x.z),p.push(0,0,1),S.x=(x.x/n+1)/2,S.y=(x.y/n+1)/2,g.push(S.x,S.y)}v+=_}for(let T=0;T<o;T++){const M=T*(a+1);for(let y=0;y<a;y++){const L=y+M,U=L,w=L+a+1,P=L+a+2,O=L+1;h.push(U,w,O),h.push(w,P,O)}}this.setIndex(h),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qa extends sn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+h,Math.PI);let p=0;const g=[],v=new V,_=new V,x=[],S=[],T=[],M=[];for(let y=0;y<=a;y++){const L=[],U=y/a;let w=0;y===0&&u===0?w=.5/n:y===a&&d===Math.PI&&(w=-.5/n);for(let P=0;P<=n;P++){const O=P/n;v.x=-t*Math.cos(o+O*c)*Math.sin(u+U*h),v.y=t*Math.cos(u+U*h),v.z=t*Math.sin(o+O*c)*Math.sin(u+U*h),S.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),M.push(O+w,1-U),L.push(p++)}g.push(L)}for(let y=0;y<a;y++)for(let L=0;L<n;L++){const U=g[y][L+1],w=g[y][L],P=g[y+1][L],O=g[y+1][L+1];(y!==0||u>0)&&x.push(U,w,O),(y!==a-1||d<Math.PI)&&x.push(w,P,O)}this.setIndex(x),this.setAttribute("position",new ye(S,3)),this.setAttribute("normal",new ye(T,3)),this.setAttribute("uv",new ye(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yu extends sn{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const u=[],h=[],d=[],p=[],g=new V,v=new V,_=new V;for(let x=0;x<=a;x++)for(let S=0;S<=o;S++){const T=S/o*c,M=x/a*Math.PI*2;v.x=(t+n*Math.cos(M))*Math.cos(T),v.y=(t+n*Math.cos(M))*Math.sin(T),v.z=n*Math.sin(M),h.push(v.x,v.y,v.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),_.subVectors(v,g).normalize(),d.push(_.x,_.y,_.z),p.push(S/o),p.push(x/a)}for(let x=1;x<=a;x++)for(let S=1;S<=o;S++){const T=(o+1)*x+S-1,M=(o+1)*(x-1)+S-1,y=(o+1)*(x-1)+S,L=(o+1)*x+S;u.push(T,M,L),u.push(M,y,L)}this.setIndex(u),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mu extends sn{constructor(t=new K_(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new V,d=new V,p=new It;let g=new V;const v=[],_=[],x=[],S=[];T(),this.setIndex(S),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(x,2));function T(){for(let U=0;U<n;U++)M(U);M(c===!1?n:0),L(),y()}function M(U){g=t.getPointAt(U/n,g);const w=u.normals[U],P=u.binormals[U];for(let O=0;O<=o;O++){const F=O/o*Math.PI*2,G=Math.sin(F),R=-Math.cos(F);d.x=R*w.x+G*P.x,d.y=R*w.y+G*P.y,d.z=R*w.z+G*P.z,d.normalize(),_.push(d.x,d.y,d.z),h.x=g.x+a*d.x,h.y=g.y+a*d.y,h.z=g.z+a*d.z,v.push(h.x,h.y,h.z)}}function y(){for(let U=1;U<=n;U++)for(let w=1;w<=o;w++){const P=(o+1)*(U-1)+(w-1),O=(o+1)*U+(w-1),F=(o+1)*U+w,G=(o+1)*(U-1)+w;S.push(P,O,G),S.push(O,F,G)}}function L(){for(let U=0;U<=n;U++)for(let w=0;w<=o;w++)p.x=U/n,p.y=w/o,x.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new mu(new u1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class f1 extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ln extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O_,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class h1 extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class d1 extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vl extends cn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Q_ extends vl{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const nd=new We,Bv=new V,Iv=new V;class yp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Bv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bv),Iv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Iv),n.updateMatrixWorld(),nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(nd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p1 extends yp{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=Xr*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zc extends vl{constructor(t,n,a=0,o=Math.PI/3,c=0,u=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new p1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fv=new We,il=new V,id=new V;class m1 extends yp{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),il.setFromMatrixPosition(t.matrixWorld),a.position.copy(il),id.copy(a.position),id.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(id),a.updateMatrixWorld(),o.makeTranslation(-il.x,-il.y,-il.z),Fv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fv,a.coordinateSystem,a.reversedDepth)}}class Kc extends vl{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new m1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mp extends W_{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class g1 extends yp{constructor(){super(new Mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $d extends vl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new g1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class v1 extends vl{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class _1 extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class J_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Hv(r,t,n,a){const o=x1(a);switch(n){case L_:return r*t;case lp:return r*t/o.components*o.byteLength;case cp:return r*t/o.components*o.byteLength;case P_:return r*t*2/o.components*o.byteLength;case up:return r*t*2/o.components*o.byteLength;case N_:return r*t*3/o.components*o.byteLength;case Di:return r*t*4/o.components*o.byteLength;case fp:return r*t*4/o.components*o.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case su:case ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bd:case wd:return Math.max(r,16)*Math.max(t,8)/4;case Td:case Ad:return Math.max(r,8)*Math.max(t,8)/2;case Rd:case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wd:case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x1(r){switch(r){case Wi:case R_:return{byteLength:1,components:1};case fl:case C_:case ma:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Os:case sp:case Vi:return{byteLength:4,components:1};case D_:case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function y1(r){const t=new WeakMap;function n(h,d){const p=h.array,g=h.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,d,p){const g=d.array,v=d.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((x,S)=>x.start-S.start);let _=0;for(let x=1;x<v.length;x++){const S=v[_],T=v[x];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,S=v.length;x<S;x++){const T=v[x];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(r.deleteBuffer(d.buffer),t.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:u}}var M1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
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
#endif`,E1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
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
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
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
#endif`,D1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P1=`#ifdef USE_IRIDESCENCE
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
#endif`,O1=`#ifdef USE_BUMPMAP
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X1=`#define PI 3.141592653589793
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
} // validated`,W1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q1=`vec3 transformedNormal = objectNormal;
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
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$1=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
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
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
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
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
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
#endif`,xE=`struct PhysicalMaterial {
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
}`,yE=`
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DE=`#if defined( USE_POINTS_UV )
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
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
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
#endif`,BE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
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
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sT=`float getShadowMask() {
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
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,lT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,uT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pT=`#ifdef USE_TRANSMISSION
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
#endif`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MT=`uniform sampler2D t2D;
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
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,RT=`#define DISTANCE
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
}`,CT=`#define DISTANCE
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`uniform float scale;
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
}`,NT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,OT=`uniform vec3 diffuse;
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
}`,zT=`#define LAMBERT
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
}`,BT=`#define LAMBERT
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
}`,IT=`#define MATCAP
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
}`,FT=`#define MATCAP
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
}`,HT=`#define NORMAL
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
}`,GT=`#define NORMAL
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
}`,VT=`#define PHONG
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
}`,kT=`#define PHONG
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
}`,XT=`#define STANDARD
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
}`,WT=`#define STANDARD
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
}`,qT=`#define TOON
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
}`,YT=`#define TOON
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
}`,jT=`uniform float size;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,QT=`uniform vec3 color;
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
}`,JT=`uniform float rotation;
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
}`,$T=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:M1,alphahash_pars_fragment:S1,alphamap_fragment:E1,alphamap_pars_fragment:T1,alphatest_fragment:b1,alphatest_pars_fragment:A1,aomap_fragment:w1,aomap_pars_fragment:R1,batching_pars_vertex:C1,batching_vertex:D1,begin_vertex:U1,beginnormal_vertex:L1,bsdfs:N1,iridescence_fragment:P1,bumpmap_pars_fragment:O1,clipping_planes_fragment:z1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:F1,color_fragment:H1,color_pars_fragment:G1,color_pars_vertex:V1,color_vertex:k1,common:X1,cube_uv_reflection_fragment:W1,defaultnormal_vertex:q1,displacementmap_pars_vertex:Y1,displacementmap_vertex:j1,emissivemap_fragment:Z1,emissivemap_pars_fragment:K1,colorspace_fragment:Q1,colorspace_pars_fragment:J1,envmap_fragment:$1,envmap_common_pars_fragment:tE,envmap_pars_fragment:eE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:dE,envmap_vertex:iE,fog_vertex:aE,fog_pars_vertex:sE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:fE,lights_pars_begin:hE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:vE,lights_physical_fragment:_E,lights_physical_pars_fragment:xE,lights_fragment_begin:yE,lights_fragment_maps:ME,lights_fragment_end:SE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:AE,map_fragment:wE,map_pars_fragment:RE,map_particle_fragment:CE,map_particle_pars_fragment:DE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:LE,morphinstance_vertex:NE,morphcolor_vertex:PE,morphnormal_vertex:OE,morphtarget_pars_vertex:zE,morphtarget_vertex:BE,normal_fragment_begin:IE,normal_fragment_maps:FE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:VE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:jE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:tT,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:nT,shadowmap_pars_vertex:iT,shadowmap_vertex:aT,shadowmask_pars_fragment:sT,skinbase_vertex:rT,skinning_pars_vertex:oT,skinning_vertex:lT,skinnormal_vertex:cT,specularmap_fragment:uT,specularmap_pars_fragment:fT,tonemapping_fragment:hT,tonemapping_pars_fragment:dT,transmission_fragment:pT,transmission_pars_fragment:mT,uv_pars_fragment:gT,uv_pars_vertex:vT,uv_vertex:_T,worldpos_vertex:xT,background_vert:yT,background_frag:MT,backgroundCube_vert:ST,backgroundCube_frag:ET,cube_vert:TT,cube_frag:bT,depth_vert:AT,depth_frag:wT,distanceRGBA_vert:RT,distanceRGBA_frag:CT,equirect_vert:DT,equirect_frag:UT,linedashed_vert:LT,linedashed_frag:NT,meshbasic_vert:PT,meshbasic_frag:OT,meshlambert_vert:zT,meshlambert_frag:BT,meshmatcap_vert:IT,meshmatcap_frag:FT,meshnormal_vert:HT,meshnormal_frag:GT,meshphong_vert:VT,meshphong_frag:kT,meshphysical_vert:XT,meshphysical_frag:WT,meshtoon_vert:qT,meshtoon_frag:YT,points_vert:jT,points_frag:ZT,shadow_vert:KT,shadow_frag:QT,sprite_vert:JT,sprite_frag:$T},Pt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Hi={basic:{uniforms:Xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Xn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Xn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Xn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Xn([Pt.points,Pt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Xn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Xn([Pt.common,Pt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Xn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Xn([Pt.sprite,Pt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Xn([Pt.common,Pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Xn([Pt.lights,Pt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Hi.physical={uniforms:Xn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Qc={r:0,b:0,g:0},Ts=new qi,tb=new We;function eb(r,t,n,a,o,c,u){const h=new ce(0);let d=c===!0?0:1,p,g,v=null,_=0,x=null;function S(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?n:t).get(w)),w}function T(U){let w=!1;const P=S(U);P===null?y(h,d):P&&P.isColor&&(y(P,1),w=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,w){const P=S(w);P&&(P.isCubeTexture||P.mapping===_u)?(g===void 0&&(g=new Kt(new Qn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Wr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ts.copy(w.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(Ts)),g.material.toneMapped=Re.getTransfer(P.colorSpace)!==ze,(v!==P||_!==P.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,x=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Kt(new ts(2,2),new yn({name:"BackgroundMaterial",uniforms:Wr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Re.getTransfer(P.colorSpace)!==ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,x=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,w){U.getRGB(Qc,X_(r)),a.buffers.color.setClear(Qc.r,Qc.g,Qc.b,w,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),d=w,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(h,d)},render:T,addToRenderList:M,dispose:L}}function nb(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function h(D,k,Z,ot,ut){let ht=!1;const B=v(ot,Z,k);c!==B&&(c=B,p(c.object)),ht=x(D,ot,Z,ut),ht&&S(D,ot,Z,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ht||u)&&(u=!1,w(D,k,Z,ot),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function d(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function v(D,k,Z){const ot=Z.wireframe===!0;let ut=a[D.id];ut===void 0&&(ut={},a[D.id]=ut);let ht=ut[k.id];ht===void 0&&(ht={},ut[k.id]=ht);let B=ht[ot];return B===void 0&&(B=_(d()),ht[ot]=B),B}function _(D){const k=[],Z=[],ot=[];for(let ut=0;ut<n;ut++)k[ut]=0,Z[ut]=0,ot[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:ot,object:D,attributes:{},index:null}}function x(D,k,Z,ot){const ut=c.attributes,ht=k.attributes;let B=0;const et=Z.getAttributes();for(const q in et)if(et[q].location>=0){const N=ut[q];let K=ht[q];if(K===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;B++}return c.attributesNum!==B||c.index!==ot}function S(D,k,Z,ot){const ut={},ht=k.attributes;let B=0;const et=Z.getAttributes();for(const q in et)if(et[q].location>=0){let N=ht[q];N===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),ut[q]=K,B++}c.attributes=ut,c.attributesNum=B,c.index=ot}function T(){const D=c.newAttributes;for(let k=0,Z=D.length;k<Z;k++)D[k]=0}function M(D){y(D,0)}function y(D,k){const Z=c.newAttributes,ot=c.enabledAttributes,ut=c.attributeDivisors;Z[D]=1,ot[D]===0&&(r.enableVertexAttribArray(D),ot[D]=1),ut[D]!==k&&(r.vertexAttribDivisor(D,k),ut[D]=k)}function L(){const D=c.newAttributes,k=c.enabledAttributes;for(let Z=0,ot=k.length;Z<ot;Z++)k[Z]!==D[Z]&&(r.disableVertexAttribArray(Z),k[Z]=0)}function U(D,k,Z,ot,ut,ht,B){B===!0?r.vertexAttribIPointer(D,k,Z,ut,ht):r.vertexAttribPointer(D,k,Z,ot,ut,ht)}function w(D,k,Z,ot){T();const ut=ot.attributes,ht=Z.getAttributes(),B=k.defaultAttributeValues;for(const et in ht){const q=ht[et];if(q.location>=0){let ct=ut[et];if(ct===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),ct!==void 0){const N=ct.normalized,K=ct.itemSize,pt=t.get(ct);if(pt===void 0)continue;const vt=pt.buffer,At=pt.type,Gt=pt.bytesPerElement,it=At===r.INT||At===r.UNSIGNED_INT||ct.gpuType===sp;if(ct.isInterleavedBufferAttribute){const yt=ct.data,wt=yt.stride,$t=ct.offset;if(yt.isInstancedInterleavedBuffer){for(let jt=0;jt<q.locationSize;jt++)y(q.location+jt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let jt=0;jt<q.locationSize;jt++)M(q.location+jt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let jt=0;jt<q.locationSize;jt++)U(q.location+jt,K/q.locationSize,At,N,wt*Gt,($t+K/q.locationSize*jt)*Gt,it)}else{if(ct.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)y(q.location+yt,ct.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let yt=0;yt<q.locationSize;yt++)M(q.location+yt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let yt=0;yt<q.locationSize;yt++)U(q.location+yt,K/q.locationSize,At,N,K*Gt,K/q.locationSize*yt*Gt,it)}}else if(B!==void 0){const N=B[et];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(q.location,N);break;case 3:r.vertexAttrib3fv(q.location,N);break;case 4:r.vertexAttrib4fv(q.location,N);break;default:r.vertexAttrib1fv(q.location,N)}}}}L()}function P(){G();for(const D in a){const k=a[D];for(const Z in k){const ot=k[Z];for(const ut in ot)g(ot[ut].object),delete ot[ut];delete k[Z]}delete a[D]}}function O(D){if(a[D.id]===void 0)return;const k=a[D.id];for(const Z in k){const ot=k[Z];for(const ut in ot)g(ot[ut].object),delete ot[ut];delete k[Z]}delete a[D.id]}function F(D){for(const k in a){const Z=a[k];if(Z[D.id]===void 0)continue;const ot=Z[D.id];for(const ut in ot)g(ot[ut].object),delete ot[ut];delete Z[D.id]}}function G(){R(),u=!0,c!==o&&(c=o,p(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:G,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:M,disableUnusedAttributes:L}}function ib(r,t,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,v){v!==0&&(r.drawArraysInstanced(a,p,g,v),n.update(g,a,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,v);let x=0;for(let S=0;S<v;S++)x+=g[S];n.update(x,a,1)}function d(p,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<p.length;S++)u(p[S],g[S],_[S]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T]*_[T];n.update(S,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ab(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Di&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const G=F===ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Wi&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!G)}function d(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:P,maxSamples:O}}function sb(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new ws,h=new pe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const S=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!o||S===null||S.length===0||c&&!M)c?g(null):p();else{const L=c?0:a,U=L*4;let w=y.clippingState||null;d.value=w,w=g(S,_,U,x);for(let P=0;P!==U;++P)w[P]=n[P];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,S){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=d.value,S!==!0||M===null){const y=x+T*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,w=x;U!==T;++U,w+=4)u.copy(v[U]).applyMatrix4(L,h),u.normal.toArray(M,w),M[w+3]=u.constant}d.value=M,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function rb(r){let t=new WeakMap;function n(u,h){return h===yd?u.mapping=Gr:h===Md&&(u.mapping=Vr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===yd||h===Md)if(t.has(u)){const d=t.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new HS(d.height);return p.fromEquirectangularTexture(r,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Or=4,Gv=[.125,.215,.35,.446,.526,.582],Ds=20,ad=new Mp,Vv=new ce;let sd=null,rd=0,od=0,ld=!1;const Rs=(1+Math.sqrt(5))/2,Lr=1/Rs,kv=[new V(-Rs,Lr,0),new V(Rs,Lr,0),new V(-Lr,0,Rs),new V(Lr,0,Rs),new V(0,Rs,-Lr),new V(0,Rs,Lr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],ob=new V;class Xv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=ob}=c;sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,o,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,rd,od),this._renderer.xr.enabled=ld,t.scissorTest=!1,Jc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Gr||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:ma,format:Di,colorSpace:kr,depthBuffer:!1},o=Wv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(c)),this._blurMaterial=cb(c,t,n)}return o}_compileMaterial(t){const n=new Kt(this._lodPlanes[0],t);this._renderer.compile(n,ad)}_sceneToCubeUV(t,n,a,o,c){const d=new Jn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Vv),v.toneMapping=Ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const T=new Ns({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),M=new Kt(new Qn,T);let y=!1;const L=t.background;L?L.isColor&&(T.color.copy(L),t.background=null,y=!0):(T.color.copy(Vv),y=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(d.up.set(0,p[U],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[U],c.y,c.z)):w===1?(d.up.set(0,0,p[U]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[U],c.z)):(d.up.set(0,p[U],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[U]));const P=this._cubeSize;Jc(o,w*P,U>2?P:0,P,P),v.setRenderTarget(o),y&&v.render(M,d),v.render(t,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Gr||t.mapping===Vr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Kt(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;Jc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,ad)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=kv[(o-c-1)%kv.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Kt(this._lodPlanes[o],p),_=p.uniforms,x=this._sizeLods[a]-1,S=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ds-1),T=c/S,M=isFinite(c)?1+Math.floor(g*T):Ds;M>Ds&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ds}`);const y=[];let L=0;for(let F=0;F<Ds;++F){const G=F/T,R=Math.exp(-G*G/2);y.push(R),F===0?L+=R:F<M&&(L+=2*R)}for(let F=0;F<y.length;F++)y[F]=y[F]/L;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=S,_.mipInt.value=U-a;const w=this._sizeLods[o],P=3*w*(o>U-Or?o-U+Or:0),O=4*(this._cubeSize-w);Jc(n,P,O,3*w,2*w),d.setRenderTarget(n),d.render(v,ad)}}function lb(r){const t=[],n=[],a=[];let o=r;const c=r-Or+1+Gv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let d=1/h;u>r-Or?d=Gv[u-r+Or-1]:u===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,S=6,T=3,M=2,y=1,L=new Float32Array(T*S*x),U=new Float32Array(M*S*x),w=new Float32Array(y*S*x);for(let O=0;O<x;O++){const F=O%3*2/3-1,G=O>2?0:-1,R=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];L.set(R,T*S*O),U.set(_,M*S*O);const D=[O,O,O,O,O,O];w.set(D,y*S*O)}const P=new sn;P.setAttribute("position",new hi(L,T)),P.setAttribute("uv",new hi(U,M)),P.setAttribute("faceIndex",new hi(w,y)),t.push(P),o>Or&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Wv(r,t,n){const a=new Ui(r,t,n);return a.texture.mapping=_u,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Jc(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function cb(r,t,n){const a=new Float32Array(Ds),o=new V(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function qv(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Yv(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Sp(){return`

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
	`}function ub(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===yd||d===Md,g=d===Gr||d===Vr;if(p||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Xv(r)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new Xv(r)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function fb(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ml("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function hb(r,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const S in _.attributes)t.remove(_.attributes[S]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,S=v.attributes.position;let T=0;if(x!==null){const L=x.array;T=x.version;for(let U=0,w=L.length;U<w;U+=3){const P=L[U+0],O=L[U+1],F=L[U+2];_.push(P,O,O,F,F,P)}}else if(S!==void 0){const L=S.array;T=S.version;for(let U=0,w=L.length/3-1;U<w;U+=3){const P=U+0,O=U+1,F=U+2;_.push(P,O,O,F,F,P)}}else return;const M=new(B_(_)?k_:V_)(_,1);M.version=T;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function db(r,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function d(_,x){r.drawElements(a,x,c,_*u),n.update(x,a,1)}function p(_,x,S){S!==0&&(r.drawElementsInstanced(a,x,c,_*u,S),n.update(x,a,S))}function g(_,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,S);let M=0;for(let y=0;y<S;y++)M+=x[y];n.update(M,a,1)}function v(_,x,S,T){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)p(_[y]/u,x[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,T,0,S);let y=0;for(let L=0;L<S;L++)y+=x[L]*T[L];n.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function pb(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function mb(r,t,n){const a=new WeakMap,o=new Ve;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let R=function(){F.dispose(),a.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;x===!0&&(U=1),S===!0&&(U=2),T===!0&&(U=3);let w=h.attributes.position.count*U,P=1;w>t.maxTextureSize&&(P=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const O=new Float32Array(w*P*4*v),F=new I_(O,w,P,v);F.type=Vi,F.needsUpdate=!0;const G=U*4;for(let D=0;D<v;D++){const k=M[D],Z=y[D],ot=L[D],ut=w*P*4*D;for(let ht=0;ht<k.count;ht++){const B=ht*G;x===!0&&(o.fromBufferAttribute(k,ht),O[ut+B+0]=o.x,O[ut+B+1]=o.y,O[ut+B+2]=o.z,O[ut+B+3]=0),S===!0&&(o.fromBufferAttribute(Z,ht),O[ut+B+4]=o.x,O[ut+B+5]=o.y,O[ut+B+6]=o.z,O[ut+B+7]=0),T===!0&&(o.fromBufferAttribute(ot,ht),O[ut+B+8]=o.x,O[ut+B+9]=o.y,O[ut+B+10]=o.z,O[ut+B+11]=ot.itemSize===4?o.w:1)}}_={count:v,texture:F,size:new It(w,P)},a.set(h,_),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let x=0;for(let T=0;T<p.length;T++)x+=p[T];const S=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function gb(r,t,n,a){let o=new WeakMap;function c(d){const p=a.render.frame,g=d.geometry,v=t.get(d,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const tx=new Wn,jv=new Y_(1,1),ex=new I_,nx=new TS,ix=new q_,Zv=[],Kv=[],Qv=new Float32Array(16),Jv=new Float32Array(9),$v=new Float32Array(4);function $r(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=Zv[o];if(c===void 0&&(c=new Float32Array(o),Zv[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Sn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Mu(r,t){let n=Kv[t];n===void 0&&(n=new Int32Array(t),Kv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function vb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function _b(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2fv(this.addr,t),Sn(n,t)}}function xb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;r.uniform3fv(this.addr,t),Sn(n,t)}}function yb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4fv(this.addr,t),Sn(n,t)}}function Mb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(Mn(n,a))return;$v.set(a),r.uniformMatrix2fv(this.addr,!1,$v),Sn(n,a)}}function Sb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(Mn(n,a))return;Jv.set(a),r.uniformMatrix3fv(this.addr,!1,Jv),Sn(n,a)}}function Eb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(Mn(n,a))return;Qv.set(a),r.uniformMatrix4fv(this.addr,!1,Qv),Sn(n,a)}}function Tb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function bb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2iv(this.addr,t),Sn(n,t)}}function Ab(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3iv(this.addr,t),Sn(n,t)}}function wb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4iv(this.addr,t),Sn(n,t)}}function Rb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function Cb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2uiv(this.addr,t),Sn(n,t)}}function Db(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3uiv(this.addr,t),Sn(n,t)}}function Ub(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4uiv(this.addr,t),Sn(n,t)}}function Lb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(jv.compareFunction=z_,c=jv):c=tx,n.setTexture2D(t||c,o)}function Nb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||nx,o)}function Pb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||ix,o)}function Ob(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||ex,o)}function zb(r){switch(r){case 5126:return vb;case 35664:return _b;case 35665:return xb;case 35666:return yb;case 35674:return Mb;case 35675:return Sb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return bb;case 35668:case 35672:return Ab;case 35669:case 35673:return wb;case 5125:return Rb;case 36294:return Cb;case 36295:return Db;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ob}}function Bb(r,t){r.uniform1fv(this.addr,t)}function Ib(r,t){const n=$r(t,this.size,2);r.uniform2fv(this.addr,n)}function Fb(r,t){const n=$r(t,this.size,3);r.uniform3fv(this.addr,n)}function Hb(r,t){const n=$r(t,this.size,4);r.uniform4fv(this.addr,n)}function Gb(r,t){const n=$r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function Vb(r,t){const n=$r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function kb(r,t){const n=$r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Xb(r,t){r.uniform1iv(this.addr,t)}function Wb(r,t){r.uniform2iv(this.addr,t)}function qb(r,t){r.uniform3iv(this.addr,t)}function Yb(r,t){r.uniform4iv(this.addr,t)}function jb(r,t){r.uniform1uiv(this.addr,t)}function Zb(r,t){r.uniform2uiv(this.addr,t)}function Kb(r,t){r.uniform3uiv(this.addr,t)}function Qb(r,t){r.uniform4uiv(this.addr,t)}function Jb(r,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||tx,c[u])}function $b(r,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||nx,c[u])}function tA(r,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||ix,c[u])}function eA(r,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||ex,c[u])}function nA(r){switch(r){case 5126:return Bb;case 35664:return Ib;case 35665:return Fb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return kb;case 5124:case 35670:return Xb;case 35667:case 35671:return Wb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return Zb;case 36295:return Kb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}class iA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=zb(n.type)}}class aA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nA(n.type)}}class sA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function t_(r,t){r.seq.push(t),r.map[t.id]=t}function rA(r,t,n){const a=r.name,o=a.length;for(cd.lastIndex=0;;){const c=cd.exec(a),u=cd.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){t_(n,p===void 0?new iA(h,r,t):new aA(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new sA(h),t_(n,v)),n=v}}}class ou{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);rA(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=a[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function e_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const oA=37297;let lA=0;function cA(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const n_=new pe;function uA(r){Re._getMatrix(n_,Re.workingColorSpace,r);const t=`mat3( ${n_.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(r)){case fu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function i_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+cA(r.getShaderSource(t),h)}else return c}function fA(r,t){const n=uA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function hA(r,t){let n;switch(t){case M_:n="Linear";break;case S_:n="Reinhard";break;case E_:n="Cineon";break;case vu:n="ACESFilmic";break;case b_:n="AgX";break;case A_:n="Neutral";break;case T_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $c=new V;function dA(){Re.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),t=$c.y.toFixed(4),n=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function mA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function gA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function al(r){return r!==""}function a_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function s_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(r){return r.replace(vA,xA)}const _A=new Map;function xA(r,t){let n=ve[t];if(n===void 0){const a=_A.get(t);if(a!==void 0)n=ve[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return tp(n)}const yA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r_(r){return r.replace(yA,MA)}function MA(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function o_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function SA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===x_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===EM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function EA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gr:case Vr:t="ENVMAP_TYPE_CUBE";break;case _u:t="ENVMAP_TYPE_CUBE_UV";break}return t}function TA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vr:t="ENVMAP_MODE_REFRACTION";break}return t}function bA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case y_:t="ENVMAP_BLENDING_MULTIPLY";break;case VM:t="ENVMAP_BLENDING_MIX";break;case kM:t="ENVMAP_BLENDING_ADD";break}return t}function AA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function wA(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=SA(n),p=EA(n),g=TA(n),v=bA(n),_=AA(n),x=pA(n),S=mA(c),T=o.createProgram();let M,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(al).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(al).join(`
`),y.length>0&&(y+=`
`)):(M=[o_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),y=[o_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ja?"#define TONE_MAPPING":"",n.toneMapping!==Ja?ve.tonemapping_pars_fragment:"",n.toneMapping!==Ja?hA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,fA("linearToOutputTexel",n.outputColorSpace),dA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),u=tp(u),u=a_(u,n),u=s_(u,n),h=tp(h),h=a_(h,n),h=s_(h,n),u=r_(u),h=r_(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=L+M+u,w=L+y+h,P=e_(o,o.VERTEX_SHADER,U),O=e_(o,o.FRAGMENT_SHADER,w);o.attachShader(T,P),o.attachShader(T,O),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(k){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(T)||"",ot=o.getShaderInfoLog(P)||"",ut=o.getShaderInfoLog(O)||"",ht=Z.trim(),B=ot.trim(),et=ut.trim();let q=!0,ct=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,P,O);else{const N=i_(o,P,"vertex"),K=i_(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ht+`
`+N+`
`+K)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(B===""||et==="")&&(ct=!1);ct&&(k.diagnostics={runnable:q,programLog:ht,vertexShader:{log:B,prefix:M},fragmentShader:{log:et,prefix:y}})}o.deleteShader(P),o.deleteShader(O),G=new ou(o,T),R=gA(o,T)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(T,oA)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=O,this}let RA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new DA(t),n.set(t,a)),a}}class DA{constructor(t){this.id=RA++,this.code=t,this.usedTimes=0}}function UA(r,t,n,a,o,c,u){const h=new H_,d=new CA,p=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,D,k,Z,ot){const ut=Z.fog,ht=ot.geometry,B=R.isMeshStandardMaterial?Z.environment:null,et=(R.isMeshStandardMaterial?n:t).get(R.envMap||B),q=et&&et.mapping===_u?et.image.height:null,ct=S[R.type];R.precision!==null&&(x=o.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const N=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,K=N!==void 0?N.length:0;let pt=0;ht.morphAttributes.position!==void 0&&(pt=1),ht.morphAttributes.normal!==void 0&&(pt=2),ht.morphAttributes.color!==void 0&&(pt=3);let vt,At,Gt,it;if(ct){const we=Hi[ct];vt=we.vertexShader,At=we.fragmentShader}else vt=R.vertexShader,At=R.fragmentShader,d.update(R),Gt=d.getVertexShaderID(R),it=d.getFragmentShaderID(R);const yt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),$t=ot.isInstancedMesh===!0,jt=ot.isBatchedMesh===!0,_e=!!R.map,un=!!R.matcap,H=!!et,Be=!!R.aoMap,ue=!!R.lightMap,se=!!R.bumpMap,Ot=!!R.normalMap,qe=!!R.displacementMap,kt=!!R.emissiveMap,fe=!!R.metalnessMap,Qe=!!R.roughnessMap,Je=R.anisotropy>0,z=R.clearcoat>0,b=R.dispersion>0,nt=R.iridescence>0,dt=R.sheen>0,_t=R.transmission>0,ft=Je&&!!R.anisotropyMap,zt=z&&!!R.clearcoatMap,Rt=z&&!!R.clearcoatNormalMap,qt=z&&!!R.clearcoatRoughnessMap,Zt=nt&&!!R.iridescenceMap,St=nt&&!!R.iridescenceThicknessMap,Lt=dt&&!!R.sheenColorMap,Jt=dt&&!!R.sheenRoughnessMap,Xt=!!R.specularMap,Dt=!!R.specularColorMap,he=!!R.specularIntensityMap,W=_t&&!!R.transmissionMap,bt=_t&&!!R.thicknessMap,Ct=!!R.gradientMap,Bt=!!R.alphaMap,Et=R.alphaTest>0,Mt=!!R.alphaHash,Vt=!!R.extensions;let oe=Ja;R.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(oe=r.toneMapping);const Ne={shaderID:ct,shaderType:R.type,shaderName:R.name,vertexShader:vt,fragmentShader:At,defines:R.defines,customVertexShaderID:Gt,customFragmentShaderID:it,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:jt,batchingColor:jt&&ot._colorsTexture!==null,instancing:$t,instancingColor:$t&&ot.instanceColor!==null,instancingMorph:$t&&ot.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:kr,alphaToCoverage:!!R.alphaToCoverage,map:_e,matcap:un,envMap:H,envMapMode:H&&et.mapping,envMapCubeUVHeight:q,aoMap:Be,lightMap:ue,bumpMap:se,normalMap:Ot,displacementMap:_&&qe,emissiveMap:kt,normalMapObjectSpace:Ot&&R.normalMapType===YM,normalMapTangentSpace:Ot&&R.normalMapType===O_,metalnessMap:fe,roughnessMap:Qe,anisotropy:Je,anisotropyMap:ft,clearcoat:z,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:qt,dispersion:b,iridescence:nt,iridescenceMap:Zt,iridescenceThicknessMap:St,sheen:dt,sheenColorMap:Lt,sheenRoughnessMap:Jt,specularMap:Xt,specularColorMap:Dt,specularIntensityMap:he,transmission:_t,transmissionMap:W,thicknessMap:bt,gradientMap:Ct,opaque:R.transparent===!1&&R.blending===Br&&R.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:Mt,combine:R.combine,mapUv:_e&&T(R.map.channel),aoMapUv:Be&&T(R.aoMap.channel),lightMapUv:ue&&T(R.lightMap.channel),bumpMapUv:se&&T(R.bumpMap.channel),normalMapUv:Ot&&T(R.normalMap.channel),displacementMapUv:qe&&T(R.displacementMap.channel),emissiveMapUv:kt&&T(R.emissiveMap.channel),metalnessMapUv:fe&&T(R.metalnessMap.channel),roughnessMapUv:Qe&&T(R.roughnessMap.channel),anisotropyMapUv:ft&&T(R.anisotropyMap.channel),clearcoatMapUv:zt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:St&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&T(R.sheenRoughnessMap.channel),specularMapUv:Xt&&T(R.specularMap.channel),specularColorMapUv:Dt&&T(R.specularColorMap.channel),specularIntensityMapUv:he&&T(R.specularIntensityMap.channel),transmissionMapUv:W&&T(R.transmissionMap.channel),thicknessMapUv:bt&&T(R.thicknessMap.channel),alphaMapUv:Bt&&T(R.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Ot||Je),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ht.attributes.uv&&(_e||Bt),fog:!!ut,useFog:R.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:ot.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:_e&&R.map.isVideoTexture===!0&&Re.getTransfer(R.map.colorSpace)===ze,decodeVideoTextureEmissive:kt&&R.emissiveMap.isVideoTexture===!0&&Re.getTransfer(R.emissiveMap.colorSpace)===ze,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Fn,flipSided:R.side===$n,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Vt&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&R.extensions.multiDraw===!0||jt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function y(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)D.push(k),D.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(L(D,R),U(D,R),D.push(r.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function L(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function U(R,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),R.push(h.mask)}function w(R){const D=S[R.type];let k;if(D){const Z=Hi[D];k=gl.clone(Z.uniforms)}else k=R.uniforms;return k}function P(R,D){let k;for(let Z=0,ot=g.length;Z<ot;Z++){const ut=g[Z];if(ut.cacheKey===D){k=ut,++k.usedTimes;break}}return k===void 0&&(k=new wA(r,D,R,c),g.push(k)),k}function O(R){if(--R.usedTimes===0){const D=g.indexOf(R);g[D]=g[g.length-1],g.pop(),R.destroy()}}function F(R){d.remove(R)}function G(){d.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:P,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:G}}function LA(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,d){r.get(u)[h]=d}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function NA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function l_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function c_(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v,_,x,S,T,M){let y=r[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:S,renderOrder:v.renderOrder,z:T,group:M},r[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=S,y.renderOrder=v.renderOrder,y.z=T,y.group=M),t++,y}function h(v,_,x,S,T,M){const y=u(v,_,x,S,T,M);x.transmission>0?a.push(y):x.transparent===!0?o.push(y):n.push(y)}function d(v,_,x,S,T,M){const y=u(v,_,x,S,T,M);x.transmission>0?a.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function p(v,_){n.length>1&&n.sort(v||NA),a.length>1&&a.sort(_||l_),o.length>1&&o.sort(_||l_)}function g(){for(let v=t,_=r.length;v<_;v++){const x=r[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:d,finish:g,sort:p}}function PA(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new c_,r.set(a,[u])):o>=c.length?(u=new c_,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function OA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new ce};break;case"SpotLight":n={position:new V,direction:new V,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":n={color:new ce,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=n,n}}}function zA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let BA=0;function IA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function FA(r){const t=new OA,n=zA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new V);const o=new V,c=new We,u=new We;function h(p){let g=0,v=0,_=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let x=0,S=0,T=0,M=0,y=0,L=0,U=0,w=0,P=0,O=0,F=0;p.sort(IA);for(let R=0,D=p.length;R<D;R++){const k=p[R],Z=k.color,ot=k.intensity,ut=k.distance,ht=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=Z.r*ot,v+=Z.g*ot,_+=Z.b*ot;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],ot);F++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const et=k.shadow,q=n.get(k);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,a.directionalShadow[x]=q,a.directionalShadowMap[x]=ht,a.directionalShadowMatrix[x]=k.shadow.matrix,L++}a.directional[x]=B,x++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(Z).multiplyScalar(ot),B.distance=ut,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[T]=B;const et=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,et.updateMatrices(k),k.castShadow&&O++),a.spotLightMatrix[T]=et.matrix,k.castShadow){const q=n.get(k);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,a.spotShadow[T]=q,a.spotShadowMap[T]=ht,w++}T++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(Z).multiplyScalar(ot),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=B,M++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const et=k.shadow,q=n.get(k);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,q.shadowCameraNear=et.camera.near,q.shadowCameraFar=et.camera.far,a.pointShadow[S]=q,a.pointShadowMap[S]=ht,a.pointShadowMatrix[S]=k.shadow.matrix,U++}a.point[S]=B,S++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(ot),B.groundColor.copy(k.groundColor).multiplyScalar(ot),a.hemi[y]=B,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const G=a.hash;(G.directionalLength!==x||G.pointLength!==S||G.spotLength!==T||G.rectAreaLength!==M||G.hemiLength!==y||G.numDirectionalShadows!==L||G.numPointShadows!==U||G.numSpotShadows!==w||G.numSpotMaps!==P||G.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=S,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=w+P-O,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=F,G.directionalLength=x,G.pointLength=S,G.spotLength=T,G.rectAreaLength=M,G.hemiLength=y,G.numDirectionalShadows=L,G.numPointShadows=U,G.numSpotShadows=w,G.numSpotMaps=P,G.numLightProbes=F,a.version=BA++)}function d(p,g){let v=0,_=0,x=0,S=0,T=0;const M=g.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const U=p[y];if(U.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(U.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),x++}else if(U.isRectAreaLight){const w=a.rectArea[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(U.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),S++}else if(U.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:d,state:a}}function u_(r){const t=new FA(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function HA(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new u_(r),t.set(o,[h])):c>=u.length?(h=new u_(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
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
}`;function kA(r,t,n){let a=new pp;const o=new It,c=new It,u=new Ve,h=new h1({depthPacking:qM}),d=new d1,p={},g=n.maxTextureSize,v={[$a]:$n,[$n]:$a,[Fn]:Fn},_=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:GA,fragmentShader:VA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new sn;S.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Kt(S,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let y=this.type;this.render=function(O,F,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const R=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(pa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ot=y!==da&&this.type===da,ut=y===da&&this.type!==da;for(let ht=0,B=O.length;ht<B;ht++){const et=O[ht],q=et.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ct=q.getFrameExtents();if(o.multiply(ct),c.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ct.x),o.x=c.x*ct.x,q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ct.y),o.y=c.y*ct.y,q.mapSize.y=c.y)),q.map===null||ot===!0||ut===!0){const K=this.type!==da?{minFilter:fi,magFilter:fi}:{};q.map!==null&&q.map.dispose(),q.map=new Ui(o.x,o.y,K),q.map.texture.name=et.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const N=q.getViewportCount();for(let K=0;K<N;K++){const pt=q.getViewport(K);u.set(c.x*pt.x,c.y*pt.y,c.x*pt.z,c.y*pt.w),Z.viewport(u),q.updateMatrices(et,K),a=q.getFrustum(),w(F,G,q.camera,et,this.type)}q.isPointLightShadow!==!0&&this.type===da&&L(q,G),q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(R,D,k)};function L(O,F){const G=t.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ui(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,G,_,T,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,G,x,T,null)}function U(O,F,G,R){let D=null;const k=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)D=k;else if(D=G.isPointLight===!0?d:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=D.uuid,ot=F.uuid;let ut=p[Z];ut===void 0&&(ut={},p[Z]=ut);let ht=ut[ot];ht===void 0&&(ht=D.clone(),ut[ot]=ht,F.addEventListener("dispose",P)),D=ht}if(D.visible=F.visible,D.wireframe=F.wireframe,R===da?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:v[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Z=r.properties.get(D);Z.light=G}return D}function w(O,F,G,R,D){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===da)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const ot=t.update(O),ut=O.material;if(Array.isArray(ut)){const ht=ot.groups;for(let B=0,et=ht.length;B<et;B++){const q=ht[B],ct=ut[q.materialIndex];if(ct&&ct.visible){const N=U(O,ct,R,D);O.onBeforeShadow(r,O,F,G,ot,N,q),r.renderBufferDirect(G,null,ot,N,O,q),O.onAfterShadow(r,O,F,G,ot,N,q)}}}else if(ut.visible){const ht=U(O,ut,R,D);O.onBeforeShadow(r,O,F,G,ot,ht,null),r.renderBufferDirect(G,null,ot,ht,O,null),O.onAfterShadow(r,O,F,G,ot,ht,null)}}const Z=O.children;for(let ot=0,ut=Z.length;ot<ut;ot++)w(Z[ot],F,G,R,D)}function P(O){O.target.removeEventListener("dispose",P);for(const G in p){const R=p[G],D=O.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const XA={[dd]:pd,[md]:_d,[gd]:xd,[Hr]:vd,[pd]:dd,[_d]:md,[xd]:gd,[vd]:Hr};function WA(r,t){function n(){let W=!1;const bt=new Ve;let Ct=null;const Bt=new Ve(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!W&&(r.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){W=Et},setClear:function(Et,Mt,Vt,oe,Ne){Ne===!0&&(Et*=oe,Mt*=oe,Vt*=oe),bt.set(Et,Mt,Vt,oe),Bt.equals(bt)===!1&&(r.clearColor(Et,Mt,Vt,oe),Bt.copy(bt))},reset:function(){W=!1,Ct=null,Bt.set(-1,0,0,0)}}}function a(){let W=!1,bt=!1,Ct=null,Bt=null,Et=null;return{setReversed:function(Mt){if(bt!==Mt){const Vt=t.get("EXT_clip_control");Mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=Mt;const oe=Et;Et=null,this.setClear(oe)}},getReversed:function(){return bt},setTest:function(Mt){Mt?yt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(Mt){Ct!==Mt&&!W&&(r.depthMask(Mt),Ct=Mt)},setFunc:function(Mt){if(bt&&(Mt=XA[Mt]),Bt!==Mt){switch(Mt){case dd:r.depthFunc(r.NEVER);break;case pd:r.depthFunc(r.ALWAYS);break;case md:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case gd:r.depthFunc(r.EQUAL);break;case vd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case xd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=Mt}},setLocked:function(Mt){W=Mt},setClear:function(Mt){Et!==Mt&&(bt&&(Mt=1-Mt),r.clearDepth(Mt),Et=Mt)},reset:function(){W=!1,Ct=null,Bt=null,Et=null,bt=!1}}}function o(){let W=!1,bt=null,Ct=null,Bt=null,Et=null,Mt=null,Vt=null,oe=null,Ne=null;return{setTest:function(we){W||(we?yt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(we){bt!==we&&!W&&(r.stencilMask(we),bt=we)},setFunc:function(we,Mi,mn){(Ct!==we||Bt!==Mi||Et!==mn)&&(r.stencilFunc(we,Mi,mn),Ct=we,Bt=Mi,Et=mn)},setOp:function(we,Mi,mn){(Mt!==we||Vt!==Mi||oe!==mn)&&(r.stencilOp(we,Mi,mn),Mt=we,Vt=Mi,oe=mn)},setLocked:function(we){W=we},setClear:function(we){Ne!==we&&(r.clearStencil(we),Ne=we)},reset:function(){W=!1,bt=null,Ct=null,Bt=null,Et=null,Mt=null,Vt=null,oe=null,Ne=null}}}const c=new n,u=new a,h=new o,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,x=[],S=null,T=!1,M=null,y=null,L=null,U=null,w=null,P=null,O=null,F=new ce(0,0,0),G=0,R=!1,D=null,k=null,Z=null,ot=null,ut=null;const ht=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=et>=2);let ct=null,N={};const K=r.getParameter(r.SCISSOR_BOX),pt=r.getParameter(r.VIEWPORT),vt=new Ve().fromArray(K),At=new Ve().fromArray(pt);function Gt(W,bt,Ct,Bt){const Et=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(W,Mt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Ct;Vt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return Mt}const it={};it[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),u.setFunc(Hr),se(!1),Ot(rv),yt(r.CULL_FACE),Be(pa);function yt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function wt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function $t(W,bt){return v[W]!==bt?(r.bindFramebuffer(W,bt),v[W]=bt,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=bt),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function jt(W,bt){let Ct=x,Bt=!1;if(W){Ct=_.get(bt),Ct===void 0&&(Ct=[],_.set(bt,Ct));const Et=W.textures;if(Ct.length!==Et.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Vt=Et.length;Mt<Vt;Mt++)Ct[Mt]=r.COLOR_ATTACHMENT0+Mt;Ct.length=Et.length,Bt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Ct)}function _e(W){return S!==W?(r.useProgram(W),S=W,!0):!1}const un={[Cs]:r.FUNC_ADD,[bM]:r.FUNC_SUBTRACT,[AM]:r.FUNC_REVERSE_SUBTRACT};un[wM]=r.MIN,un[RM]=r.MAX;const H={[CM]:r.ZERO,[DM]:r.ONE,[UM]:r.SRC_COLOR,[fd]:r.SRC_ALPHA,[BM]:r.SRC_ALPHA_SATURATE,[OM]:r.DST_COLOR,[NM]:r.DST_ALPHA,[LM]:r.ONE_MINUS_SRC_COLOR,[hd]:r.ONE_MINUS_SRC_ALPHA,[zM]:r.ONE_MINUS_DST_COLOR,[PM]:r.ONE_MINUS_DST_ALPHA,[IM]:r.CONSTANT_COLOR,[FM]:r.ONE_MINUS_CONSTANT_COLOR,[HM]:r.CONSTANT_ALPHA,[GM]:r.ONE_MINUS_CONSTANT_ALPHA};function Be(W,bt,Ct,Bt,Et,Mt,Vt,oe,Ne,we){if(W===pa){T===!0&&(wt(r.BLEND),T=!1);return}if(T===!1&&(yt(r.BLEND),T=!0),W!==TM){if(W!==M||we!==R){if((y!==Cs||w!==Cs)&&(r.blendEquation(r.FUNC_ADD),y=Cs,w=Cs),we)switch(W){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fr:r.blendFunc(r.ONE,r.ONE);break;case ov:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ov:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,U=null,P=null,O=null,F.set(0,0,0),G=0,M=W,R=we}return}Et=Et||bt,Mt=Mt||Ct,Vt=Vt||Bt,(bt!==y||Et!==w)&&(r.blendEquationSeparate(un[bt],un[Et]),y=bt,w=Et),(Ct!==L||Bt!==U||Mt!==P||Vt!==O)&&(r.blendFuncSeparate(H[Ct],H[Bt],H[Mt],H[Vt]),L=Ct,U=Bt,P=Mt,O=Vt),(oe.equals(F)===!1||Ne!==G)&&(r.blendColor(oe.r,oe.g,oe.b,Ne),F.copy(oe),G=Ne),M=W,R=!1}function ue(W,bt){W.side===Fn?wt(r.CULL_FACE):yt(r.CULL_FACE);let Ct=W.side===$n;bt&&(Ct=!Ct),se(Ct),W.blending===Br&&W.transparent===!1?Be(pa):Be(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function Ot(W){W!==MM?(yt(r.CULL_FACE),W!==k&&(W===rv?r.cullFace(r.BACK):W===SM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),k=W}function qe(W){W!==Z&&(B&&r.lineWidth(W),Z=W)}function kt(W,bt,Ct){W?(yt(r.POLYGON_OFFSET_FILL),(ot!==bt||ut!==Ct)&&(r.polygonOffset(bt,Ct),ot=bt,ut=Ct)):wt(r.POLYGON_OFFSET_FILL)}function fe(W){W?yt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Qe(W){W===void 0&&(W=r.TEXTURE0+ht-1),ct!==W&&(r.activeTexture(W),ct=W)}function Je(W,bt,Ct){Ct===void 0&&(ct===null?Ct=r.TEXTURE0+ht-1:Ct=ct);let Bt=N[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[Ct]=Bt),(Bt.type!==W||Bt.texture!==bt)&&(ct!==Ct&&(r.activeTexture(Ct),ct=Ct),r.bindTexture(W,bt||it[W]),Bt.type=W,Bt.texture=bt)}function z(){const W=N[ct];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){vt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function Jt(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Xt(W,bt){let Ct=p.get(bt);Ct===void 0&&(Ct=new WeakMap,p.set(bt,Ct));let Bt=Ct.get(W);Bt===void 0&&(Bt=r.getUniformBlockIndex(bt,W.name),Ct.set(W,Bt))}function Dt(W,bt){const Bt=p.get(bt).get(W);d.get(bt)!==Bt&&(r.uniformBlockBinding(bt,Bt,W.__bindingPointIndex),d.set(bt,Bt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ct=null,N={},v={},_=new WeakMap,x=[],S=null,T=!1,M=null,y=null,L=null,U=null,w=null,P=null,O=null,F=new ce(0,0,0),G=0,R=!1,D=null,k=null,Z=null,ot=null,ut=null,vt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:yt,disable:wt,bindFramebuffer:$t,drawBuffers:jt,useProgram:_e,setBlending:Be,setMaterial:ue,setFlipSided:se,setCullFace:Ot,setLineWidth:qe,setPolygonOffset:kt,setScissorTest:fe,activeTexture:Qe,bindTexture:Je,unbindTexture:z,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:Zt,texImage3D:St,updateUBOMapping:Xt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:qt,texSubImage2D:dt,texSubImage3D:_t,compressedTexSubImage2D:ft,compressedTexSubImage3D:zt,scissor:Lt,viewport:Jt,reset:he}}function qA(r,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(z,b){return x?new OffscreenCanvas(z,b):du("canvas")}function T(z,b,nt){let dt=1;const _t=Je(z);if((_t.width>nt||_t.height>nt)&&(dt=nt/Math.max(_t.width,_t.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(dt*_t.width),zt=Math.floor(dt*_t.height);v===void 0&&(v=S(ft,zt));const Rt=b?S(ft,zt):v;return Rt.width=ft,Rt.height=zt,Rt.getContext("2d").drawImage(z,0,0,ft,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ft+"x"+zt+")."),Rt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),z;return z}function M(z){return z.generateMipmaps}function y(z){r.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(z,b,nt,dt,_t=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=b;if(b===r.RED&&(nt===r.FLOAT&&(ft=r.R32F),nt===r.HALF_FLOAT&&(ft=r.R16F),nt===r.UNSIGNED_BYTE&&(ft=r.R8)),b===r.RED_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.R8UI),nt===r.UNSIGNED_SHORT&&(ft=r.R16UI),nt===r.UNSIGNED_INT&&(ft=r.R32UI),nt===r.BYTE&&(ft=r.R8I),nt===r.SHORT&&(ft=r.R16I),nt===r.INT&&(ft=r.R32I)),b===r.RG&&(nt===r.FLOAT&&(ft=r.RG32F),nt===r.HALF_FLOAT&&(ft=r.RG16F),nt===r.UNSIGNED_BYTE&&(ft=r.RG8)),b===r.RG_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.RG8UI),nt===r.UNSIGNED_SHORT&&(ft=r.RG16UI),nt===r.UNSIGNED_INT&&(ft=r.RG32UI),nt===r.BYTE&&(ft=r.RG8I),nt===r.SHORT&&(ft=r.RG16I),nt===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),nt===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),nt===r.UNSIGNED_INT&&(ft=r.RGB32UI),nt===r.BYTE&&(ft=r.RGB8I),nt===r.SHORT&&(ft=r.RGB16I),nt===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),nt===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),nt===r.UNSIGNED_INT&&(ft=r.RGBA32UI),nt===r.BYTE&&(ft=r.RGBA8I),nt===r.SHORT&&(ft=r.RGBA16I),nt===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(nt===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),nt===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const zt=_t?fu:Re.getTransfer(dt);nt===r.FLOAT&&(ft=r.RGBA32F),nt===r.HALF_FLOAT&&(ft=r.RGBA16F),nt===r.UNSIGNED_BYTE&&(ft=zt===ze?r.SRGB8_ALPHA8:r.RGBA8),nt===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),nt===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function w(z,b){let nt;return z?b===null||b===Os||b===hl?nt=r.DEPTH24_STENCIL8:b===Vi?nt=r.DEPTH32F_STENCIL8:b===fl&&(nt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Os||b===hl?nt=r.DEPTH_COMPONENT24:b===Vi?nt=r.DEPTH_COMPONENT32F:b===fl&&(nt=r.DEPTH_COMPONENT16),nt}function P(z,b){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==fi&&z.minFilter!==Gi?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function O(z){const b=z.target;b.removeEventListener("dispose",O),G(b),b.isVideoTexture&&g.delete(b)}function F(z){const b=z.target;b.removeEventListener("dispose",F),D(b)}function G(z){const b=a.get(z);if(b.__webglInit===void 0)return;const nt=z.source,dt=_.get(nt);if(dt){const _t=dt[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&R(z),Object.keys(dt).length===0&&_.delete(nt)}a.remove(z)}function R(z){const b=a.get(z);r.deleteTexture(b.__webglTexture);const nt=z.source,dt=_.get(nt);delete dt[b.__cacheKey],u.memory.textures--}function D(z){const b=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let _t=0;_t<b.__webglFramebuffer[dt].length;_t++)r.deleteFramebuffer(b.__webglFramebuffer[dt][_t]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=z.textures;for(let dt=0,_t=nt.length;dt<_t;dt++){const ft=a.get(nt[dt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),u.memory.textures--),a.remove(nt[dt])}a.remove(z)}let k=0;function Z(){k=0}function ot(){const z=k;return z>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),k+=1,z}function ut(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function ht(z,b){const nt=a.get(z);if(z.isVideoTexture&&fe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&nt.__version!==z.version){const dt=z.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(nt,z,b);return}}else z.isExternalTexture&&(nt.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,nt.__webglTexture,r.TEXTURE0+b)}function B(z,b){const nt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){it(nt,z,b);return}n.bindTexture(r.TEXTURE_2D_ARRAY,nt.__webglTexture,r.TEXTURE0+b)}function et(z,b){const nt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){it(nt,z,b);return}n.bindTexture(r.TEXTURE_3D,nt.__webglTexture,r.TEXTURE0+b)}function q(z,b){const nt=a.get(z);if(z.version>0&&nt.__version!==z.version){yt(nt,z,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture,r.TEXTURE0+b)}const ct={[Sd]:r.REPEAT,[Us]:r.CLAMP_TO_EDGE,[Ed]:r.MIRRORED_REPEAT},N={[fi]:r.NEAREST,[XM]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Gi]:r.LINEAR,[Dh]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},K={[jM]:r.NEVER,[tS]:r.ALWAYS,[ZM]:r.LESS,[z_]:r.LEQUAL,[KM]:r.EQUAL,[$M]:r.GEQUAL,[QM]:r.GREATER,[JM]:r.NOTEQUAL};function pt(z,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gi||b.magFilter===Dh||b.magFilter===wc||b.magFilter===Ls||b.minFilter===Gi||b.minFilter===Dh||b.minFilter===wc||b.minFilter===Ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,ct[b.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,ct[b.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,ct[b.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fi||b.minFilter!==wc&&b.minFilter!==Ls||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function vt(z,b){let nt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",O));const dt=b.source;let _t=_.get(dt);_t===void 0&&(_t={},_.set(dt,_t));const ft=ut(b);if(ft!==z.__cacheKey){_t[ft]===void 0&&(_t[ft]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,nt=!0),_t[ft].usedTimes++;const zt=_t[z.__cacheKey];zt!==void 0&&(_t[z.__cacheKey].usedTimes--,zt.usedTimes===0&&R(b)),z.__cacheKey=ft,z.__webglTexture=_t[ft].texture}return nt}function At(z,b,nt){return Math.floor(Math.floor(z/nt)/b)}function Gt(z,b,nt,dt){const ft=z.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,nt,dt,b.data);else{ft.sort((St,Lt)=>St.start-Lt.start);let zt=0;for(let St=1;St<ft.length;St++){const Lt=ft[zt],Jt=ft[St],Xt=Lt.start+Lt.count,Dt=At(Jt.start,b.width,4),he=At(Lt.start,b.width,4);Jt.start<=Xt+1&&Dt===he&&At(Jt.start+Jt.count-1,b.width,4)===Dt?Lt.count=Math.max(Lt.count,Jt.start+Jt.count-Lt.start):(++zt,ft[zt]=Jt)}ft.length=zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),qt=r.getParameter(r.UNPACK_SKIP_PIXELS),Zt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let St=0,Lt=ft.length;St<Lt;St++){const Jt=ft[St],Xt=Math.floor(Jt.start/4),Dt=Math.ceil(Jt.count/4),he=Xt%b.width,W=Math.floor(Xt/b.width),bt=Dt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,he,W,bt,Ct,nt,dt,b.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Zt)}}function it(z,b,nt){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const _t=vt(z,b),ft=b.source;n.bindTexture(dt,z.__webglTexture,r.TEXTURE0+nt);const zt=a.get(ft);if(ft.version!==zt.__version||_t===!0){n.activeTexture(r.TEXTURE0+nt);const Rt=Re.getPrimaries(Re.workingColorSpace),qt=b.colorSpace===Za?null:Re.getPrimaries(b.colorSpace),Zt=b.colorSpace===Za||Rt===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let St=T(b.image,!1,o.maxTextureSize);St=Qe(b,St);const Lt=c.convert(b.format,b.colorSpace),Jt=c.convert(b.type);let Xt=U(b.internalFormat,Lt,Jt,b.colorSpace,b.isVideoTexture);pt(dt,b);let Dt;const he=b.mipmaps,W=b.isVideoTexture!==!0,bt=zt.__version===void 0||_t===!0,Ct=ft.dataReady,Bt=P(b,St);if(b.isDepthTexture)Xt=w(b.format===pl,b.type),bt&&(W?n.texStorage2D(r.TEXTURE_2D,1,Xt,St.width,St.height):n.texImage2D(r.TEXTURE_2D,0,Xt,St.width,St.height,0,Lt,Jt,null));else if(b.isDataTexture)if(he.length>0){W&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,he[0].width,he[0].height);for(let Et=0,Mt=he.length;Et<Mt;Et++)Dt=he[Et],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,Jt,Dt.data);b.generateMipmaps=!1}else W?(bt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,St.width,St.height),Ct&&Gt(b,St,Lt,Jt)):n.texImage2D(r.TEXTURE_2D,0,Xt,St.width,St.height,0,Lt,Jt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,he[0].width,he[0].height,St.depth);for(let Et=0,Mt=he.length;Et<Mt;Et++)if(Dt=he[Et],b.format!==Di)if(Lt!==null)if(W){if(Ct)if(b.layerUpdates.size>0){const Vt=Hv(Dt.width,Dt.height,b.format,b.type);for(const oe of b.layerUpdates){const Ne=Dt.data.subarray(oe*Vt/Dt.data.BYTES_PER_ELEMENT,(oe+1)*Vt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,oe,Dt.width,Dt.height,1,Lt,Ne)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,St.depth,Lt,Dt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,St.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,St.depth,Lt,Jt,Dt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,St.depth,0,Lt,Jt,Dt.data)}else{W&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,he[0].width,he[0].height);for(let Et=0,Mt=he.length;Et<Mt;Et++)Dt=he[Et],b.format!==Di?Lt!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Dt.data):n.compressedTexImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,Jt,Dt.data)}else if(b.isDataArrayTexture)if(W){if(bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,St.width,St.height,St.depth),Ct)if(b.layerUpdates.size>0){const Et=Hv(St.width,St.height,b.format,b.type);for(const Mt of b.layerUpdates){const Vt=St.data.subarray(Mt*Et/St.data.BYTES_PER_ELEMENT,(Mt+1)*Et/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,St.width,St.height,1,Lt,Jt,Vt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Lt,Jt,St.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,St.width,St.height,St.depth,0,Lt,Jt,St.data);else if(b.isData3DTexture)W?(bt&&n.texStorage3D(r.TEXTURE_3D,Bt,Xt,St.width,St.height,St.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Lt,Jt,St.data)):n.texImage3D(r.TEXTURE_3D,0,Xt,St.width,St.height,St.depth,0,Lt,Jt,St.data);else if(b.isFramebufferTexture){if(bt)if(W)n.texStorage2D(r.TEXTURE_2D,Bt,Xt,St.width,St.height);else{let Et=St.width,Mt=St.height;for(let Vt=0;Vt<Bt;Vt++)n.texImage2D(r.TEXTURE_2D,Vt,Xt,Et,Mt,0,Lt,Jt,null),Et>>=1,Mt>>=1}}else if(he.length>0){if(W&&bt){const Et=Je(he[0]);n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}for(let Et=0,Mt=he.length;Et<Mt;Et++)Dt=he[Et],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt,Jt,Dt):n.texImage2D(r.TEXTURE_2D,Et,Xt,Lt,Jt,Dt);b.generateMipmaps=!1}else if(W){if(bt){const Et=Je(St);n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Jt,St)}else n.texImage2D(r.TEXTURE_2D,0,Xt,Lt,Jt,St);M(b)&&y(dt),zt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function yt(z,b,nt){if(b.image.length!==6)return;const dt=vt(z,b),_t=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+nt);const ft=a.get(_t);if(_t.version!==ft.__version||dt===!0){n.activeTexture(r.TEXTURE0+nt);const zt=Re.getPrimaries(Re.workingColorSpace),Rt=b.colorSpace===Za?null:Re.getPrimaries(b.colorSpace),qt=b.colorSpace===Za||zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let Mt=0;Mt<6;Mt++)!Zt&&!St?Lt[Mt]=T(b.image[Mt],!0,o.maxCubemapSize):Lt[Mt]=St?b.image[Mt].image:b.image[Mt],Lt[Mt]=Qe(b,Lt[Mt]);const Jt=Lt[0],Xt=c.convert(b.format,b.colorSpace),Dt=c.convert(b.type),he=U(b.internalFormat,Xt,Dt,b.colorSpace),W=b.isVideoTexture!==!0,bt=ft.__version===void 0||dt===!0,Ct=_t.dataReady;let Bt=P(b,Jt);pt(r.TEXTURE_CUBE_MAP,b);let Et;if(Zt){W&&bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,Jt.width,Jt.height);for(let Mt=0;Mt<6;Mt++){Et=Lt[Mt].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const oe=Et[Vt];b.format!==Di?Xt!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,0,0,oe.width,oe.height,Xt,oe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,0,0,oe.width,oe.height,Xt,Dt,oe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt,he,oe.width,oe.height,0,Xt,Dt,oe.data)}}}else{if(Et=b.mipmaps,W&&bt){Et.length>0&&Bt++;const Mt=Je(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(St){W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Lt[Mt].width,Lt[Mt].height,Xt,Dt,Lt[Mt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,he,Lt[Mt].width,Lt[Mt].height,0,Xt,Dt,Lt[Mt].data);for(let Vt=0;Vt<Et.length;Vt++){const Ne=Et[Vt].image[Mt].image;W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,0,0,Ne.width,Ne.height,Xt,Dt,Ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,he,Ne.width,Ne.height,0,Xt,Dt,Ne.data)}}else{W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Xt,Dt,Lt[Mt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,he,Xt,Dt,Lt[Mt]);for(let Vt=0;Vt<Et.length;Vt++){const oe=Et[Vt];W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,0,0,Xt,Dt,oe.image[Mt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Vt+1,he,Xt,Dt,oe.image[Mt])}}}M(b)&&y(r.TEXTURE_CUBE_MAP),ft.__version=_t.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function wt(z,b,nt,dt,_t,ft){const zt=c.convert(nt.format,nt.colorSpace),Rt=c.convert(nt.type),qt=U(nt.internalFormat,zt,Rt,nt.colorSpace),Zt=a.get(b),St=a.get(nt);if(St.__renderTarget=b,!Zt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ft),Jt=Math.max(1,b.height>>ft);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?n.texImage3D(_t,ft,qt,Lt,Jt,b.depth,0,zt,Rt,null):n.texImage2D(_t,ft,qt,Lt,Jt,0,zt,Rt,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),kt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,_t,St.__webglTexture,0,qe(b)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,_t,St.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(z,b,nt){if(r.bindRenderbuffer(r.RENDERBUFFER,z),b.depthBuffer){const dt=b.depthTexture,_t=dt&&dt.isDepthTexture?dt.type:null,ft=w(b.stencilBuffer,_t),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=qe(b);kt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ft,b.width,b.height):nt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,z)}else{const dt=b.textures;for(let _t=0;_t<dt.length;_t++){const ft=dt[_t],zt=c.convert(ft.format,ft.colorSpace),Rt=c.convert(ft.type),qt=U(ft.internalFormat,zt,Rt,ft.colorSpace),Zt=qe(b);nt&&kt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,qt,b.width,b.height):kt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,qt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,qt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function jt(z,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=a.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht(b.depthTexture,0);const _t=dt.__webglTexture,ft=qe(b);if(b.depthTexture.format===dl)kt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0);else if(b.depthTexture.format===pl)kt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function _e(z){const b=a.get(z),nt=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",_t)};dt.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=dt}if(z.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=z.texture.mipmaps;dt&&dt.length>0?jt(b.__webglFramebuffer[0],z):jt(b.__webglFramebuffer,z)}else if(nt){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),$t(b.__webglDepthbuffer[dt],z,!1);else{const _t=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ft)}}else{const dt=z.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),$t(b.__webglDepthbuffer,z,!1);else{const _t=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function un(z,b,nt){const dt=a.get(z);b!==void 0&&wt(dt.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),nt!==void 0&&_e(z)}function H(z){const b=z.texture,nt=a.get(z),dt=a.get(b);z.addEventListener("dispose",F);const _t=z.textures,ft=z.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,u.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let qt=0;qt<b.mipmaps.length;qt++)nt.__webglFramebuffer[Rt][qt]=r.createFramebuffer()}else nt.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=r.createFramebuffer()}else nt.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Rt=0,qt=_t.length;Rt<qt;Rt++){const Zt=a.get(_t[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&kt(z)===!1){nt.__webglMultisampledFramebuffer=r.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<_t.length;Rt++){const qt=_t[Rt];nt.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const Zt=c.convert(qt.format,qt.colorSpace),St=c.convert(qt.type),Lt=U(qt.internalFormat,Zt,St,qt.colorSpace,z.isXRRenderTarget===!0),Jt=qe(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Lt,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(nt.__webglDepthRenderbuffer=r.createRenderbuffer(),$t(nt.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),pt(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)wt(nt.__webglFramebuffer[Rt][qt],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,qt);else wt(nt.__webglFramebuffer[Rt],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Rt=0,qt=_t.length;Rt<qt;Rt++){const Zt=_t[Rt],St=a.get(Zt);let Lt=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,St.__webglTexture),pt(Lt,Zt),wt(nt.__webglFramebuffer,z,Zt,r.COLOR_ATTACHMENT0+Rt,Lt,0),M(Zt)&&y(Lt)}n.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Rt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,dt.__webglTexture),pt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)wt(nt.__webglFramebuffer[qt],z,b,r.COLOR_ATTACHMENT0,Rt,qt);else wt(nt.__webglFramebuffer,z,b,r.COLOR_ATTACHMENT0,Rt,0);M(b)&&y(Rt),n.unbindTexture()}z.depthBuffer&&_e(z)}function Be(z){const b=z.textures;for(let nt=0,dt=b.length;nt<dt;nt++){const _t=b[nt];if(M(_t)){const ft=L(z),zt=a.get(_t).__webglTexture;n.bindTexture(ft,zt),y(ft),n.unbindTexture()}}}const ue=[],se=[];function Ot(z){if(z.samples>0){if(kt(z)===!1){const b=z.textures,nt=z.width,dt=z.height;let _t=r.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(z),Rt=b.length>1;if(Rt)for(let Zt=0;Zt<b.length;Zt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const qt=z.texture.mipmaps;qt&&qt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Zt=0;Zt<b.length;Zt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const St=a.get(b[Zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,_t,r.NEAREST),d===!0&&(ue.length=0,se.length=0,ue.push(r.COLOR_ATTACHMENT0+Zt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ue.push(ft),se.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let Zt=0;Zt<b.length;Zt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const St=a.get(b[Zt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,St,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const b=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function qe(z){return Math.min(o.maxSamples,z.samples)}function kt(z){const b=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(z){const b=u.render.frame;g.get(z)!==b&&(g.set(z,b),z.update())}function Qe(z,b){const nt=z.colorSpace,dt=z.format,_t=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||nt!==kr&&nt!==Za&&(Re.getTransfer(nt)===ze?(dt!==Di||_t!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function Je(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=Z,this.setTexture2D=ht,this.setTexture2DArray=B,this.setTexture3D=et,this.setTextureCube=q,this.rebindTextures=un,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=kt}function YA(r,t){function n(a,o=Za){let c;const u=Re.getTransfer(o);if(a===Wi)return r.UNSIGNED_BYTE;if(a===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===op)return r.UNSIGNED_SHORT_5_5_5_1;if(a===D_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===U_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===R_)return r.BYTE;if(a===C_)return r.SHORT;if(a===fl)return r.UNSIGNED_SHORT;if(a===sp)return r.INT;if(a===Os)return r.UNSIGNED_INT;if(a===Vi)return r.FLOAT;if(a===ma)return r.HALF_FLOAT;if(a===L_)return r.ALPHA;if(a===N_)return r.RGB;if(a===Di)return r.RGBA;if(a===dl)return r.DEPTH_COMPONENT;if(a===pl)return r.DEPTH_STENCIL;if(a===lp)return r.RED;if(a===cp)return r.RED_INTEGER;if(a===P_)return r.RG;if(a===up)return r.RG_INTEGER;if(a===fp)return r.RGBA_INTEGER;if(a===iu||a===au||a===su||a===ru)if(u===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Td||a===bd||a===Ad||a===wd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ad)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Rd||a===Cd||a===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Rd||a===Cd)return u===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Dd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ud||a===Ld||a===Nd||a===Pd||a===Od||a===zd||a===Bd||a===Id||a===Fd||a===Hd||a===Gd||a===Vd||a===kd||a===Xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ud)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ld)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Nd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Pd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Od)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===zd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Id)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Fd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Hd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Gd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Vd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===kd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Xd)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Wd||a===qd||a===Yd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Wd)return u===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===jd||a===Zd||a===Kd||a===Qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===jd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new j_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new yn({vertexShader:jA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new ts(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends jr{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,v=null,_=null,x=null,S=null;const T=typeof XRWebGLBinding<"u",M=new KA,y={},L=n.getContextAttributes();let U=null,w=null;const P=[],O=[],F=new It;let G=null;const R=new Jn;R.viewport=new Ve;const D=new Jn;D.viewport=new Ve;const k=[R,D],Z=new _1;let ot=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let yt=P[it];return yt===void 0&&(yt=new Qh,P[it]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(it){let yt=P[it];return yt===void 0&&(yt=new Qh,P[it]=yt),yt.getGripSpace()},this.getHand=function(it){let yt=P[it];return yt===void 0&&(yt=new Qh,P[it]=yt),yt.getHandSpace()};function ht(it){const yt=O.indexOf(it.inputSource);if(yt===-1)return;const wt=P[yt];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||u),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){o.removeEventListener("select",ht),o.removeEventListener("selectstart",ht),o.removeEventListener("selectend",ht),o.removeEventListener("squeeze",ht),o.removeEventListener("squeezestart",ht),o.removeEventListener("squeezeend",ht),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",et);for(let it=0;it<P.length;it++){const yt=O[it];yt!==null&&(O[it]=null,P[it].disconnect(yt))}ot=null,ut=null,M.reset();for(const it in y)delete y[it];t.setRenderTarget(U),x=null,_=null,v=null,o=null,w=null,Gt.stop(),a.isPresenting=!1,t.setPixelRatio(G),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",ht),o.addEventListener("selectstart",ht),o.addEventListener("selectend",ht),o.addEventListener("squeeze",ht),o.addEventListener("squeezestart",ht),o.addEventListener("squeezeend",ht),o.addEventListener("end",B),o.addEventListener("inputsourceschange",et),L.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,$t=null,jt=null;L.depth&&(jt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=L.stencil?pl:dl,$t=L.stencil?hl:Os);const _e={colorFormat:n.RGBA8,depthFormat:jt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(_e),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),w=new Ui(_.textureWidth,_.textureHeight,{format:Di,type:Wi,depthTexture:new Y_(_.textureWidth,_.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,wt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Ui(x.framebufferWidth,x.framebufferHeight,{format:Di,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),Gt.setContext(o),Gt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function et(it){for(let yt=0;yt<it.removed.length;yt++){const wt=it.removed[yt],$t=O.indexOf(wt);$t>=0&&(O[$t]=null,P[$t].disconnect(wt))}for(let yt=0;yt<it.added.length;yt++){const wt=it.added[yt];let $t=O.indexOf(wt);if($t===-1){for(let _e=0;_e<P.length;_e++)if(_e>=O.length){O.push(wt),$t=_e;break}else if(O[_e]===null){O[_e]=wt,$t=_e;break}if($t===-1)break}const jt=P[$t];jt&&jt.connect(wt)}}const q=new V,ct=new V;function N(it,yt,wt){q.setFromMatrixPosition(yt.matrixWorld),ct.setFromMatrixPosition(wt.matrixWorld);const $t=q.distanceTo(ct),jt=yt.projectionMatrix.elements,_e=wt.projectionMatrix.elements,un=jt[14]/(jt[10]-1),H=jt[14]/(jt[10]+1),Be=(jt[9]+1)/jt[5],ue=(jt[9]-1)/jt[5],se=(jt[8]-1)/jt[0],Ot=(_e[8]+1)/_e[0],qe=un*se,kt=un*Ot,fe=$t/(-se+Ot),Qe=fe*-se;if(yt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Qe),it.translateZ(fe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),jt[10]===-1)it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const Je=un+fe,z=H+fe,b=qe-Qe,nt=kt+($t-Qe),dt=Be*H/z*Je,_t=ue*H/z*Je;it.projectionMatrix.makePerspective(b,nt,dt,_t,Je,z),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function K(it,yt){yt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(yt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let yt=it.near,wt=it.far;M.texture!==null&&(M.depthNear>0&&(yt=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),Z.near=D.near=R.near=yt,Z.far=D.far=R.far=wt,(ot!==Z.near||ut!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ot=Z.near,ut=Z.far),Z.layers.mask=it.layers.mask|6,R.layers.mask=Z.layers.mask&3,D.layers.mask=Z.layers.mask&5;const $t=it.parent,jt=Z.cameras;K(Z,$t);for(let _e=0;_e<jt.length;_e++)K(jt[_e],$t);jt.length===2?N(Z,R,D):Z.projectionMatrix.copy(R.projectionMatrix),pt(it,Z,$t)};function pt(it,yt,wt){wt===null?it.matrix.copy(yt.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(yt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Xr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(it){d=it,_!==null&&(_.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(it){return y[it]};let vt=null;function At(it,yt){if(g=yt.getViewerPose(p||u),S=yt,g!==null){const wt=g.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let $t=!1;wt.length!==Z.cameras.length&&(Z.cameras.length=0,$t=!0);for(let H=0;H<wt.length;H++){const Be=wt[H];let ue=null;if(x!==null)ue=x.getViewport(Be);else{const Ot=v.getViewSubImage(_,Be);ue=Ot.viewport,H===0&&(t.setRenderTargetTextures(w,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(w))}let se=k[H];se===void 0&&(se=new Jn,se.layers.enable(H),se.viewport=new Ve,k[H]=se),se.matrix.fromArray(Be.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Be.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ue.x,ue.y,ue.width,ue.height),H===0&&(Z.matrix.copy(se.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),$t===!0&&Z.cameras.push(se)}const jt=o.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const H=v.getDepthInformation(wt[0]);H&&H.isValid&&H.texture&&M.init(H,o.renderState)}if(jt&&jt.includes("camera-access")&&T){t.state.unbindTexture(),v=a.getBinding();for(let H=0;H<wt.length;H++){const Be=wt[H].camera;if(Be){let ue=y[Be];ue||(ue=new j_,y[Be]=ue);const se=v.getCameraImage(Be);ue.sourceTexture=se}}}}for(let wt=0;wt<P.length;wt++){const $t=O[wt],jt=P[wt];$t!==null&&jt!==void 0&&jt.update($t,yt,p||u)}vt&&vt(it,yt),yt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:yt}),S=null}const Gt=new $_;Gt.setAnimationLoop(At),this.setAnimationLoop=function(it){vt=it},this.dispose=function(){}}}const bs=new qi,JA=new We;function $A(r,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,X_(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,L,U,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),S(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?d(M,y,L,U):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===$n&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===$n&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const L=t.get(y),U=L.envMap,w=L.envMapRotation;U&&(M.envMap.value=U,bs.copy(w),bs.x*=-1,bs.y*=-1,bs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),M.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(bs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function d(M,y,L,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*L,M.scale.value=U*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,L){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===$n&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const L=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function t2(r,t,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,U){const w=U.program;a.uniformBlockBinding(L,w)}function p(L,U){let w=o[L.id];w===void 0&&(S(L),w=g(L),o[L.id]=w,L.addEventListener("dispose",M));const P=U.program;a.updateUBOMapping(L,P);const O=t.render.frame;c[L.id]!==O&&(_(L),c[L.id]=O)}function g(L){const U=v();L.__bindingPointIndex=U;const w=r.createBuffer(),P=L.__size,O=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,P,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,w),w}function v(){for(let L=0;L<h;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const U=o[L.id],w=L.uniforms,P=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let O=0,F=w.length;O<F;O++){const G=Array.isArray(w[O])?w[O]:[w[O]];for(let R=0,D=G.length;R<D;R++){const k=G[R];if(x(k,O,R,P)===!0){const Z=k.__offset,ot=Array.isArray(k.value)?k.value:[k.value];let ut=0;for(let ht=0;ht<ot.length;ht++){const B=ot[ht],et=T(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,Z+ut,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,ut),ut+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(L,U,w,P){const O=L.value,F=U+"_"+w;if(P[F]===void 0)return typeof O=="number"||typeof O=="boolean"?P[F]=O:P[F]=O.clone(),!0;{const G=P[F];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return P[F]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function S(L){const U=L.uniforms;let w=0;const P=16;for(let F=0,G=U.length;F<G;F++){const R=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,k=R.length;D<k;D++){const Z=R[D],ot=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,ht=ot.length;ut<ht;ut++){const B=ot[ut],et=T(B),q=w%P,ct=q%et.boundary,N=q+ct;w+=ct,N!==0&&P-N<et.storage&&(w+=P-N),Z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=et.storage}}}const O=w%P;return O>0&&(w+=P-O),L.__size=w,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function M(L){const U=L.target;U.removeEventListener("dispose",M);const w=u.indexOf(U.__bindingPointIndex);u.splice(w,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function y(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:d,update:p,dispose:y}}class e2{constructor(t={}){const{canvas:n=vS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const S=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const L=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=ui;let O=0,F=0,G=null,R=-1,D=null;const k=new Ve,Z=new Ve;let ot=null;const ut=new ce(0);let ht=0,B=n.width,et=n.height,q=1,ct=null,N=null;const K=new Ve(0,0,B,et),pt=new Ve(0,0,B,et);let vt=!1;const At=new pp;let Gt=!1,it=!1;const yt=new We,wt=new V,$t=new Ve,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function un(){return G===null?q:1}let H=a;function Be(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ap}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Et,!1),H===null){const Y="webgl2";if(H=Be(Y,C),H===null)throw Be(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,se,Ot,qe,kt,fe,Qe,Je,z,b,nt,dt,_t,ft,zt,Rt,qt,Zt,St,Lt,Jt,Xt,Dt,he;function W(){ue=new fb(H),ue.init(),Xt=new YA(H,ue),se=new ab(H,ue,t,Xt),Ot=new WA(H,ue),se.reversedDepthBuffer&&_&&Ot.buffers.depth.setReversed(!0),qe=new pb(H),kt=new LA,fe=new qA(H,ue,Ot,kt,se,Xt,qe),Qe=new rb(w),Je=new ub(w),z=new y1(H),Dt=new nb(H,z),b=new hb(H,z,qe,Dt),nt=new gb(H,b,z,qe),St=new mb(H,se,fe),Rt=new sb(kt),dt=new UA(w,Qe,Je,ue,se,Dt,Rt),_t=new $A(w,kt),ft=new PA,zt=new HA(ue),Zt=new eb(w,Qe,Je,Ot,nt,x,d),qt=new kA(w,nt,se),he=new t2(H,qe,se,Ot),Lt=new ib(H,ue,qe),Jt=new db(H,ue,qe),qe.programs=dt.programs,w.capabilities=se,w.extensions=ue,w.properties=kt,w.renderLists=ft,w.shadowMap=qt,w.state=Ot,w.info=qe}W();const bt=new QA(w,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(B,et,!1))},this.getSize=function(C){return C.set(B,et)},this.setSize=function(C,Y,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,et=Y,n.width=Math.floor(C*q),n.height=Math.floor(Y*q),rt===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(B*q,et*q).floor()},this.setDrawingBufferSize=function(C,Y,rt){B=C,et=Y,q=rt,n.width=Math.floor(C*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,Y,rt,lt){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,Y,rt,lt),Ot.viewport(k.copy(K).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(pt)},this.setScissor=function(C,Y,rt,lt){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,Y,rt,lt),Ot.scissor(Z.copy(pt).multiplyScalar(q).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(C){Ot.setScissorTest(vt=C)},this.setOpaqueSort=function(C){ct=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,rt=!0){let lt=0;if(C){let Q=!1;if(G!==null){const Tt=G.texture.format;Q=Tt===fp||Tt===up||Tt===cp}if(Q){const Tt=G.texture.type,Ut=Tt===Wi||Tt===Os||Tt===fl||Tt===hl||Tt===rp||Tt===op,Ft=Zt.getClearColor(),Nt=Zt.getClearAlpha(),ee=Ft.r,ie=Ft.g,Yt=Ft.b;Ut?(S[0]=ee,S[1]=ie,S[2]=Yt,S[3]=Nt,H.clearBufferuiv(H.COLOR,0,S)):(T[0]=ee,T[1]=ie,T[2]=Yt,T[3]=Nt,H.clearBufferiv(H.COLOR,0,T))}else lt|=H.COLOR_BUFFER_BIT}Y&&(lt|=H.DEPTH_BUFFER_BIT),rt&&(lt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Zt.dispose(),ft.dispose(),zt.dispose(),kt.dispose(),Qe.dispose(),Je.dispose(),nt.dispose(),Dt.dispose(),he.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",mn),bt.removeEventListener("sessionend",gn),tn.stop()};function Ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=qe.autoReset,Y=qt.enabled,rt=qt.autoUpdate,lt=qt.needsUpdate,Q=qt.type;W(),qe.autoReset=C,qt.enabled=Y,qt.autoUpdate=rt,qt.needsUpdate=lt,qt.type=Q}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Mt(C){const Y=C.target;Y.removeEventListener("dispose",Mt),Vt(Y)}function Vt(C){oe(C),kt.remove(C)}function oe(C){const Y=kt.get(C).programs;Y!==void 0&&(Y.forEach(function(rt){dt.releaseProgram(rt)}),C.isShaderMaterial&&dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,rt,lt,Q,Tt){Y===null&&(Y=jt);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=_a(C,Y,rt,lt,Q);Ot.setMaterial(lt,Ut);let Nt=rt.index,ee=1;if(lt.wireframe===!0){if(Nt=b.getWireframeAttribute(rt),Nt===void 0)return;ee=2}const ie=rt.drawRange,Yt=rt.attributes.position;let me=ie.start*ee,Ce=(ie.start+ie.count)*ee;Tt!==null&&(me=Math.max(me,Tt.start*ee),Ce=Math.min(Ce,(Tt.start+Tt.count)*ee)),Nt!==null?(me=Math.max(me,0),Ce=Math.min(Ce,Nt.count)):Yt!=null&&(me=Math.max(me,0),Ce=Math.min(Ce,Yt.count));const Ze=Ce-me;if(Ze<0||Ze===1/0)return;Dt.setup(Q,lt,Ft,rt,Nt);let Ie,ge=Lt;if(Nt!==null&&(Ie=z.get(Nt),ge=Jt,ge.setIndex(Ie)),Q.isMesh)lt.wireframe===!0?(Ot.setLineWidth(lt.wireframeLinewidth*un()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(Q.isLine){let te=lt.linewidth;te===void 0&&(te=1),Ot.setLineWidth(te*un()),Q.isLineSegments?ge.setMode(H.LINES):Q.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else Q.isPoints?ge.setMode(H.POINTS):Q.isSprite&&ge.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ml("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ge.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,je=Q._multiDrawCounts,Ee=Q._multiDrawCount,Nn=Nt?z.get(Nt).bytesPerElement:1,Si=kt.get(lt).currentProgram.getUniforms();for(let Hn=0;Hn<Ee;Hn++)Si.setValue(H,"_gl_DrawID",Hn),ge.render(te[Hn]/Nn,je[Hn])}else if(Q.isInstancedMesh)ge.renderInstances(me,Ze,Q.count);else if(rt.isInstancedBufferGeometry){const te=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,je=Math.min(rt.instanceCount,te);ge.renderInstances(me,Ze,je)}else ge.render(me,Ze)};function Ne(C,Y,rt){C.transparent===!0&&C.side===Fn&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,Ni(C,Y,rt),C.side=$a,C.needsUpdate=!0,Ni(C,Y,rt),C.side=Fn):Ni(C,Y,rt)}this.compile=function(C,Y,rt=null){rt===null&&(rt=C),y=zt.get(rt),y.init(Y),U.push(y),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),C!==rt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const lt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Ft=Tt[Ut];Ne(Ft,rt,Q),lt.add(Ft)}else Ne(Tt,rt,Q),lt.add(Tt)}),y=U.pop(),lt},this.compileAsync=function(C,Y,rt=null){const lt=this.compile(C,Y,rt);return new Promise(Q=>{function Tt(){if(lt.forEach(function(Ut){kt.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){Q(C);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let we=null;function Mi(C){we&&we(C)}function mn(){tn.stop()}function gn(){tn.start()}const tn=new $_;tn.setAnimationLoop(Mi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(C){we=C,bt.setAnimationLoop(C),C===null?tn.stop():tn.start()},bt.addEventListener("sessionstart",mn),bt.addEventListener("sessionend",gn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Y),Y=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Y,G),y=zt.get(C,U.length),y.init(Y),U.push(y),yt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),At.setFromProjectionMatrix(yt,ki,Y.reversedDepth),it=this.localClippingEnabled,Gt=Rt.init(this.clippingPlanes,it),M=ft.get(C,L.length),M.init(),L.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Li(Tt,Y,-1/0,w.sortObjects)}Li(C,Y,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(ct,N),_e=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,_e&&Zt.addToRenderList(M,C),this.info.render.frame++,Gt===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;qt.render(rt,C,Y),Gt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=M.opaque,Q=M.transmissive;if(y.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(Q.length>0)for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){const Nt=Tt[Ut];_l(lt,Q,C,Nt)}_e&&Zt.render(C);for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){const Nt=Tt[Ut];Bs(M,C,Nt,Nt.viewport)}}else Q.length>0&&_l(lt,Q,C,Y),_e&&Zt.render(C),Bs(M,C,Y);G!==null&&F===0&&(fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(w,C,Y),Dt.resetDefaultState(),R=-1,D=null,U.pop(),U.length>0?(y=U[U.length-1],Gt===!0&&Rt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Li(C,Y,rt,lt){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||At.intersectsSprite(C)){lt&&$t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);const Ut=nt.update(C),Ft=C.material;Ft.visible&&M.push(C,Ut,Ft,rt,$t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||At.intersectsObject(C))){const Ut=nt.update(C),Ft=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$t.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),$t.copy(Ut.boundingSphere.center)),$t.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Ft)){const Nt=Ut.groups;for(let ee=0,ie=Nt.length;ee<ie;ee++){const Yt=Nt[ee],me=Ft[Yt.materialIndex];me&&me.visible&&M.push(C,Ut,me,rt,$t.z,Yt)}}else Ft.visible&&M.push(C,Ut,Ft,rt,$t.z,null)}}const Tt=C.children;for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++)Li(Tt[Ut],Y,rt,lt)}function Bs(C,Y,rt,lt){const Q=C.opaque,Tt=C.transmissive,Ut=C.transparent;y.setupLightsView(rt),Gt===!0&&Rt.setGlobalState(w.clippingPlanes,rt),lt&&Ot.viewport(k.copy(lt)),Q.length>0&&Is(Q,Y,rt),Tt.length>0&&Is(Tt,Y,rt),Ut.length>0&&Is(Ut,Y,rt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function _l(C,Y,rt,lt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new Ui(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ma:Wi,minFilter:Ls,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[lt.id],Ut=lt.viewport||k;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Ft=w.getRenderTarget(),Nt=w.getActiveCubeFace(),ee=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(ut),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),_e&&Zt.render(rt);const ie=w.toneMapping;w.toneMapping=Ja;const Yt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),Gt===!0&&Rt.setGlobalState(w.clippingPlanes,lt),Is(C,rt,lt),fe.updateMultisampleRenderTarget(Tt),fe.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Ce=0,Ze=Y.length;Ce<Ze;Ce++){const Ie=Y[Ce],ge=Ie.object,te=Ie.geometry,je=Ie.material,Ee=Ie.group;if(je.side===Fn&&ge.layers.test(lt.layers)){const Nn=je.side;je.side=$n,je.needsUpdate=!0,eo(ge,rt,lt,te,je,Ee),je.side=Nn,je.needsUpdate=!0,me=!0}}me===!0&&(fe.updateMultisampleRenderTarget(Tt),fe.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Ft,Nt,ee),w.setClearColor(ut,ht),Yt!==void 0&&(lt.viewport=Yt),w.toneMapping=ie}function Is(C,Y,rt){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Tt=C.length;Q<Tt;Q++){const Ut=C[Q],Ft=Ut.object,Nt=Ut.geometry,ee=Ut.group;let ie=Ut.material;ie.allowOverride===!0&&lt!==null&&(ie=lt),Ft.layers.test(rt.layers)&&eo(Ft,Y,rt,Nt,ie,ee)}}function eo(C,Y,rt,lt,Q,Tt){C.onBeforeRender(w,Y,rt,lt,Q,Tt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,Y,rt,lt,C,Tt),Q.transparent===!0&&Q.side===Fn&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,w.renderBufferDirect(rt,Y,lt,Q,C,Tt),Q.side=$a,Q.needsUpdate=!0,w.renderBufferDirect(rt,Y,lt,Q,C,Tt),Q.side=Fn):w.renderBufferDirect(rt,Y,lt,Q,C,Tt),C.onAfterRender(w,Y,rt,lt,Q,Tt)}function Ni(C,Y,rt){Y.isScene!==!0&&(Y=jt);const lt=kt.get(C),Q=y.state.lights,Tt=y.state.shadowsArray,Ut=Q.state.version,Ft=dt.getParameters(C,Q.state,Tt,Y,rt),Nt=dt.getProgramCacheKey(Ft);let ee=lt.programs;lt.environment=C.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(C.isMeshStandardMaterial?Je:Qe).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",Mt),ee=new Map,lt.programs=ee);let ie=ee.get(Nt);if(ie!==void 0){if(lt.currentProgram===ie&&lt.lightsStateVersion===Ut)return Yi(C,Ft),ie}else Ft.uniforms=dt.getUniforms(C),C.onBeforeCompile(Ft,w),ie=dt.acquireProgram(Ft,Nt),ee.set(Nt,ie),lt.uniforms=Ft.uniforms;const Yt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Rt.uniform),Yi(C,Ft),lt.needsLights=xa(C),lt.lightsStateVersion=Ut,lt.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.directionalShadowMap.value=Q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotShadowMap.value=Q.state.spotShadowMap,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMap.value=Q.state.pointShadowMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=ie,lt.uniformsList=null,ie}function Fs(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=ou.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Yi(C,Y){const rt=kt.get(C);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function _a(C,Y,rt,lt,Q){Y.isScene!==!0&&(Y=jt),fe.resetTextureUnits();const Tt=Y.fog,Ut=lt.isMeshStandardMaterial?Y.environment:null,Ft=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:kr,Nt=(lt.isMeshStandardMaterial?Je:Qe).get(lt.envMap||Ut),ee=lt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Yt=!!rt.morphAttributes.position,me=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let Ze=Ja;lt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ze=w.toneMapping);const Ie=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ge=Ie!==void 0?Ie.length:0,te=kt.get(lt),je=y.state.lights;if(Gt===!0&&(it===!0||C!==D)){const en=C===D&&lt.id===R;Rt.setState(lt,C,en)}let Ee=!1;lt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==je.state.version||te.outputColorSpace!==Ft||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Nt||lt.fog===!0&&te.fog!==Tt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Rt.numPlanes||te.numIntersection!==Rt.numIntersection)||te.vertexAlphas!==ee||te.vertexTangents!==ie||te.morphTargets!==Yt||te.morphNormals!==me||te.morphColors!==Ce||te.toneMapping!==Ze||te.morphTargetsCount!==ge)&&(Ee=!0):(Ee=!0,te.__version=lt.version);let Nn=te.currentProgram;Ee===!0&&(Nn=Ni(lt,Y,Q));let Si=!1,Hn=!1,En=!1;const ke=Nn.getUniforms(),Gn=te.uniforms;if(Ot.useProgram(Nn.program)&&(Si=!0,Hn=!0,En=!0),lt.id!==R&&(R=lt.id,Hn=!0),Si||D!==C){Ot.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ke.setValue(H,"projectionMatrix",C.projectionMatrix),ke.setValue(H,"viewMatrix",C.matrixWorldInverse);const Cn=ke.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,wt.setFromMatrixPosition(C.matrixWorld)),se.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ke.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Hn=!0,En=!0)}if(Q.isSkinnedMesh){ke.setOptional(H,Q,"bindMatrix"),ke.setOptional(H,Q,"bindMatrixInverse");const en=Q.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ke.setValue(H,"boneTexture",en.boneTexture,fe))}Q.isBatchedMesh&&(ke.setOptional(H,Q,"batchingTexture"),ke.setValue(H,"batchingTexture",Q._matricesTexture,fe),ke.setOptional(H,Q,"batchingIdTexture"),ke.setValue(H,"batchingIdTexture",Q._indirectTexture,fe),ke.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ke.setValue(H,"batchingColorTexture",Q._colorsTexture,fe));const Pn=rt.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&St.update(Q,rt,Nn),(Hn||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,ke.setValue(H,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Gn.envMap.value=Nt,Gn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(Gn.envMapIntensity.value=Y.environmentIntensity),Hn&&(ke.setValue(H,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&ns(Gn,En),Tt&&lt.fog===!0&&_t.refreshFogUniforms(Gn,Tt),_t.refreshMaterialUniforms(Gn,lt,q,et,y.state.transmissionRenderTarget[C.id]),ou.upload(H,Fs(te),Gn,fe)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ou.upload(H,Fs(te),Gn,fe),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ke.setValue(H,"center",Q.center),ke.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ke.setValue(H,"normalMatrix",Q.normalMatrix),ke.setValue(H,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const en=lt.uniformsGroups;for(let Cn=0,Hs=en.length;Cn<Hs;Cn++){const qn=en[Cn];he.update(qn,Nn),he.bind(qn,Nn)}}return Nn}function ns(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function xa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,Y,rt){const lt=kt.get(C);lt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),kt.get(C.texture).__webglTexture=Y,kt.get(C.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:rt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const rt=kt.get(C);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const fn=H.createFramebuffer();this.setRenderTarget=function(C,Y=0,rt=0){G=C,O=Y,F=rt;let lt=!0,Q=null,Tt=!1,Ut=!1;if(C){const Nt=kt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(H.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)fe.setupRenderTarget(C);else if(Nt.__hasExternalTextures)fe.rebindTextures(C,kt.get(C.texture).__webglTexture,kt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&kt.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ut=!0);const ie=kt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?Q=ie[Y][rt]:Q=ie[Y],Tt=!0):C.samples>0&&fe.useMultisampledRTT(C)===!1?Q=kt.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[rt]:Q=ie,k.copy(C.viewport),Z.copy(C.scissor),ot=C.scissorTest}else k.copy(K).multiplyScalar(q).floor(),Z.copy(pt).multiplyScalar(q).floor(),ot=vt;if(rt!==0&&(Q=fn),Ot.bindFramebuffer(H.FRAMEBUFFER,Q)&&lt&&Ot.drawBuffers(C,Q),Ot.viewport(k),Ot.scissor(Z),Ot.setScissorTest(ot),Tt){const Nt=kt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,rt)}else if(Ut){const Nt=Y;for(let ee=0;ee<C.textures.length;ee++){const ie=kt.get(C.textures[ee]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ee,ie.__webglTexture,rt,Nt)}}else if(C!==null&&rt!==0){const Nt=kt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,rt)}R=-1},this.readRenderTargetPixels=function(C,Y,rt,lt,Q,Tt,Ut,Ft=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const ee=C.textures[Ft],ie=ee.format,Yt=ee.type;if(!se.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-lt&&rt>=0&&rt<=C.height-Q&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ft),H.readPixels(Y,rt,lt,Q,Xt.convert(ie),Xt.convert(Yt),Tt))}finally{const ee=G!==null?kt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(C,Y,rt,lt,Q,Tt,Ut,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(Y>=0&&Y<=C.width-lt&&rt>=0&&rt<=C.height-Q){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);const ee=C.textures[Ft],ie=ee.format,Yt=ee.type;if(!se.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ft),H.readPixels(Y,rt,lt,Q,Xt.convert(ie),Xt.convert(Yt),0);const Ce=G!==null?kt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,Ce);const Ze=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _S(H,Ze,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(me),H.deleteSync(Ze),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,rt=0){const lt=Math.pow(2,-rt),Q=Math.floor(C.image.width*lt),Tt=Math.floor(C.image.height*lt),Ut=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;fe.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ut,Ft,Q,Tt),Ot.unbindTexture()};const xl=H.createFramebuffer(),yl=H.createFramebuffer();this.copyTextureToTexture=function(C,Y,rt=null,lt=null,Q=0,Tt=null){Tt===null&&(Q!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Ut,Ft,Nt,ee,ie,Yt,me,Ce,Ze;const Ie=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,ee=rt.min.x,ie=rt.min.y,Yt=rt.isBox3?rt.min.z:0;else{const Pn=Math.pow(2,-Q);Ut=Math.floor(Ie.width*Pn),Ft=Math.floor(Ie.height*Pn),C.isDataArrayTexture?Nt=Ie.depth:C.isData3DTexture?Nt=Math.floor(Ie.depth*Pn):Nt=1,ee=0,ie=0,Yt=0}lt!==null?(me=lt.x,Ce=lt.y,Ze=lt.z):(me=0,Ce=0,Ze=0);const ge=Xt.convert(Y.format),te=Xt.convert(Y.type);let je;Y.isData3DTexture?(fe.setTexture3D(Y,0),je=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(fe.setTexture2DArray(Y,0),je=H.TEXTURE_2D_ARRAY):(fe.setTexture2D(Y,0),je=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),Nn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Si=H.getParameter(H.UNPACK_SKIP_PIXELS),Hn=H.getParameter(H.UNPACK_SKIP_ROWS),En=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ee),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const ke=C.isDataArrayTexture||C.isData3DTexture,Gn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const Pn=kt.get(C),en=kt.get(Y),Cn=kt.get(Pn.__renderTarget),Hs=kt.get(en.__renderTarget);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let qn=0;qn<Nt;qn++)ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(C).__webglTexture,Q,Yt+qn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(Y).__webglTexture,Tt,Ze+qn)),H.blitFramebuffer(ee,ie,Ut,Ft,me,Ce,Ut,Ft,H.DEPTH_BUFFER_BIT,H.NEAREST);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||kt.has(C)){const Pn=kt.get(C),en=kt.get(Y);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,xl),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,yl);for(let Cn=0;Cn<Nt;Cn++)ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,Q,Yt+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,Q),Gn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Tt,Ze+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Tt),Q!==0?H.blitFramebuffer(ee,ie,Ut,Ft,me,Ce,Ut,Ft,H.COLOR_BUFFER_BIT,H.NEAREST):Gn?H.copyTexSubImage3D(je,Tt,me,Ce,Ze+Cn,ee,ie,Ut,Ft):H.copyTexSubImage2D(je,Tt,me,Ce,ee,ie,Ut,Ft);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Gn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(je,Tt,me,Ce,Ze,Ut,Ft,Nt,ge,te,Ie.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(je,Tt,me,Ce,Ze,Ut,Ft,Nt,ge,Ie.data):H.texSubImage3D(je,Tt,me,Ce,Ze,Ut,Ft,Nt,ge,te,Ie):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,me,Ce,Ut,Ft,ge,te,Ie.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,me,Ce,Ie.width,Ie.height,ge,Ie.data):H.texSubImage2D(H.TEXTURE_2D,Tt,me,Ce,Ut,Ft,ge,te,Ie);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Si),H.pixelStorei(H.UNPACK_SKIP_ROWS,Hn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,En),Tt===0&&Y.generateMipmaps&&H.generateMipmap(je),Ot.unbindTexture()},this.initRenderTarget=function(C){kt.get(C).__webglFramebuffer===void 0&&fe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),Ot.unbindTexture()},this.resetState=function(){O=0,F=0,G=null,Ot.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}function lu(r,t=!1){const n=r[0].index!==null,a=new Set(Object.keys(r[0].attributes)),o=new Set(Object.keys(r[0].morphAttributes)),c={},u={},h=r[0].morphTargetsRelative,d=new sn;let p=0;for(let g=0;g<r.length;++g){const v=r[g];let _=0;if(n!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in v.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(v.attributes[x]),_++}if(_!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in v.morphAttributes){if(!o.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[x]===void 0&&(u[x]=[]),u[x].push(v.morphAttributes[x])}if(t){let x;if(n)x=v.index.count;else if(v.attributes.position!==void 0)x=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;d.addGroup(p,x,g),p+=x}}if(n){let g=0;const v=[];for(let _=0;_<r.length;++_){const x=r[_].index;for(let S=0;S<x.count;++S)v.push(x.getX(S)+g);g+=r[_].attributes.position.count}d.setIndex(v)}for(const g in c){const v=f_(c[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;d.setAttribute(g,v)}for(const g in u){const v=u[g][0].length;if(v===0)break;d.morphAttributes=d.morphAttributes||{},d.morphAttributes[g]=[];for(let _=0;_<v;++_){const x=[];for(let T=0;T<u[g].length;++T)x.push(u[g][T][_]);const S=f_(x);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;d.morphAttributes[g].push(S)}}return d}function f_(r){let t,n,a,o=-1,c=0;for(let p=0;p<r.length;++p){const g=r[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const u=new t(c),h=new hi(u,n,a);let d=0;for(let p=0;p<r.length;++p){const g=r[p];if(g.isInterleavedBufferAttribute){const v=d/n;for(let _=0,x=g.count;_<x;_++)for(let S=0;S<n;S++){const T=g.getComponent(_,S);h.setComponent(_+v,S,T)}}else u.set(g.array,d);d+=g.count*n}return o!==void 0&&(h.gpuType=o),h}const cu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class to{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const n2=new Mp(-1,1,1,-1,0,1);class i2 extends sn{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}}const a2=new i2;class Ep{constructor(t){this._mesh=new Kt(a2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,n2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class s2 extends to{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof yn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gl.clone(t.uniforms),this.material=new yn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ep(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class h_ extends to{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class r2 extends to{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class o2{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new It);this._width=a.width,this._height=a.height,n=new Ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ma}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new s2(cu),this.copyPass.material.blending=pa,this.clock=new J_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}h_!==void 0&&(u instanceof h_?a=!0:u instanceof r2&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class l2 extends to{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const c2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qr extends to{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Ui(c,u,{type:ma}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Ui(c,u,{type:ma});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new Ui(c,u,{type:ma});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),u=Math.round(u/2)}const h=c2;this.highPassUniforms=gl.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new It(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gl.clone(cu.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:cu.vertexShader,fragmentShader:cu.fragmentShader,blending:Fr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new Ns,this._fsQuad=new Ep(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new It(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[d].uniforms.direction.value=qr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=qr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[];for(let a=0;a<t;a++)n.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new yn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}}qr.BlurDirectionX=new It(1,0);qr.BlurDirectionY=new It(0,1);const tu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class u2 extends to{constructor(){super(),this.uniforms=gl.clone(tu.uniforms),this.material=new f1({name:tu.name,uniforms:this.uniforms,vertexShader:tu.vertexShader,fragmentShader:tu.fragmentShader}),this._fsQuad=new Ep(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Re.getTransfer(this._outputColorSpace)===ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===M_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===S_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===E_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===b_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===A_?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===T_&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Fi=Math.PI*2;let ud=91623;const uu=()=>(ud=1664525*ud+1013904223>>>0,ud/4294967296),le=(r,t)=>r+uu()*(t-r),As=Ka.clamp,Wt=(r=0,t=0,n=0)=>new V(r,t,n);function f2(r,t){return Math.sin(r*.063+Math.sin(t*.047)*2.3)*1.6+Math.sin(t*.09+r*.023)*1.3+Math.sin(r*.18+t*.12)*.5}function Nr(r,t){return-15+f2(r,t)+Math.max(0,Math.abs(r+Math.sin(t*.025)*13)-22)*.085-Math.max(0,-t-110)*.026}const d_=`
float hash21(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float valueNoise(vec2 p){vec2 i=floor(p), f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float caustic(vec2 p,float t){p+=vec2(sin(p.y*.6+t*.37),cos(p.x*.7+t*.29))*.8;float a=sin(p.x*1.9+p.y*.6+t*.52)+sin(p.y*2.1-p.x*.3-t*.41);float b=sin(p.x*2.6-p.y*.8-t*.32)+sin(p.y*2.5+p.x*.6+t*.38);return pow(1.-abs(sin(a+b)),16.);}
`;class h2{scene=new VS;camera;renderer;uniforms={uTime:{value:0}};host;hooks;clock=new J_;frame=0;alive=!0;playing=!1;started=!1;glide=!1;sound=!0;yaw=0;pitch=-.1;targetYaw=0;targetPitch=-.1;keys=new Set;velocity=Wt();move=Wt();forward=Wt();right=Wt();upAxis=Wt(0,1,0);position=Wt(0,3,35);touch={x:0,y:0,z:0};dragging=!1;lastPointer={x:0,y:0};listeners=[];creatures=[];fish;fishData=[];particles;kelpMaterials=[];colliders=[];dummy=new cn;statusAt=0;time=0;pausedTime=0;audioContext=null;master=null;observer;reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(t,n,a={}){if(this.host=t,this.hooks=n,this.camera=new Jn(67,t.clientWidth/t.clientHeight,.12,600),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0),this.renderer=new e2({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.outputColorSpace=ui,this.renderer.toneMapping=vu,this.renderer.toneMappingExposure=1.18,this.renderer.setClearColor(676709),t.appendChild(this.renderer.domElement),this.scene.background=new ce(742243),this.scene.fog=new xu(742243,.014),a.deferStart)return;const o=new Q_(10019551,1783361,2.2);this.scene.add(o);const c=new $d(14811116,3.2);c.position.set(-35,65,-10),this.scene.add(c);const u=new $d(4770768,1.5);u.position.set(30,18,-60),this.scene.add(u),this.terrain(),this.rocks(),this.plants(),this.surface(),this.life(),this.suspendedParticles(),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.animate(),requestAnimationFrame(()=>n.onReady())}material(t,n="plain",a=.82,o=1){const c=new ln({color:t,roughness:a,metalness:n==="skin"?.05:0}),u=Math.max(0,o);return c.onBeforeCompile=h=>{h.uniforms.uTime=this.uniforms.uTime,h.vertexShader=`varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOceanLocal=position;`),h.vertexShader=h.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 oceanPos=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          oceanPos=instanceMatrix*oceanPos;
        #endif
        vOceanWorld=(modelMatrix*oceanPos).xyz;`),h.fragmentShader=`uniform float uTime; varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+d_+h.fragmentShader;let d="";n==="sand"&&(d="float grain=valueNoise(vOceanWorld.xz*15.);float ripple=sin(vOceanWorld.x*.7+vOceanWorld.z*3.+valueNoise(vOceanWorld.xz*.11)*5.);diffuseColor.rgb*=.82+grain*.22+ripple*.07;"),n==="rock"&&(d="float n=valueNoise(vOceanWorld.xz*1.7+vOceanWorld.y*.8);float layer=sin(vOceanWorld.y*5.+valueNoise(vOceanWorld.xz)*3.);diffuseColor.rgb*=.67+n*.5+layer*.075;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.22,.16),smoothstep(.57,.84,n)*.6);"),n==="skin"&&(d="float blot=valueNoise(vOceanLocal.xz*5.+vOceanLocal.y*2.);float fine=valueNoise(vOceanLocal.xy*48.);float bands=sin(vOceanLocal.x*5.5+vOceanLocal.z*3.+blot*4.);diffuseColor.rgb*=.6+blot*.5+fine*.15;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.42,smoothstep(.5,.9,bands)*.45);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.54,.62,.49),(1.-smoothstep(-.75,.0,vOceanLocal.y))*.65);"),h.fragmentShader=h.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${d}`),h.fragmentShader=h.fragmentShader.replace("#include <opaque_fragment>",`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(.055*u).toFixed(4)};
#include <opaque_fragment>`)},c.customProgramCacheKey=()=>`${n}:${u.toFixed(2)}`,c}terrain(){const t=new ts(700,700,180,180);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let o=0;o<n.count;o++)n.setY(o,Nr(n.getX(o),n.getZ(o)));t.computeVertexNormals();const a=new Kt(t,this.material(11511685,"sand"));this.scene.add(a)}rocks(){const t=[this.material(8094578,"rock"),this.material(7567721,"rock"),this.material(6454124,"rock")],n=[];for(let o=0;o<5;o++){const c=new Ps(1,3),u=c.attributes.position;for(let h=0;h<u.count;h++){const d=u.getX(h),p=u.getY(h),g=u.getZ(h),v=1+.12*Math.sin(d*8+o)*Math.sin(g*7-p*4)+.055*Math.sin(p*19+d*8);u.setXYZ(h,d*v,p*v,g*v)}c.computeVertexNormals(),n.push(c)}const a=(o,c,u,h,d)=>{const p=new Kt(n[Math.floor(uu()*5)],t[Math.floor(uu()*3)]);p.position.set(o,Nr(o,c)+h*.15,c),p.scale.set(u,h,d),p.rotation.set(le(-.2,.2),le(0,Fi),le(-.12,.12)),this.scene.add(p),u>3&&this.colliders.push({pos:p.position.clone(),radius:Math.min(u,d)*.88,height:h*.95})};for(let o=0;o<95;o++){const c=le(-205,95),h=(o%2?1:-1)*le(24,65)+Math.sin(c*.025)*8,d=le(3,10);a(h,c,d,le(4,15),d*le(.7,1.5))}a(-23,-16,13,19,15),a(-35,-24,17,24,14),a(34,-50,15,22,17),a(43,-69,18,28,14);for(let o=0;o<210;o++){const c=le(-160,160),u=le(-230,140),h=le(.3,2.8);a(c,u,h,h*le(.4,1),h*le(.6,1.5))}a(-28,-103,8,20,7),a(-3,-103,6,18,7),a(-15,-103,17,4,6)}plantMaterial(t){const n=this.material(t,"plain",.9);n.side=Fn;const a=n.onBeforeCompile;return n.onBeforeCompile=(o,c)=>{a(o,c),o.vertexShader=`attribute float aBend;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("vOceanLocal=position;",`vOceanLocal=position; vec3 ip=vec3(0.);
      #ifdef USE_INSTANCING
      ip=instanceMatrix[3].xyz;
      #endif
      transformed.x+=sin(uTime*.6+ip.x*.3+position.y*.7)*aBend*.35;
      transformed.z+=sin(uTime*.43+ip.z*.4+position.y*.45)*aBend*.25;`),o.vertexShader=`uniform float uTime;
`+o.vertexShader},n.customProgramCacheKey=()=>`plant${t}`,n}plants(){const t=(u,h,d)=>{const p=[],g=[],v=[],_=[];for(let T=0;T<=12;T++){let M=T/12;const y=h*Math.pow(Math.sin(Math.PI*M*.95),.7)+.008;for(let L=-1;L<=1;L+=2)p.push(L*y+Math.sin(M*2)*d,u*M,Math.sin(M*3)*d*.45),g.push((L+1)/2,M),_.push(M*M*u*.3);if(T<12){let L=T*2;v.push(L,L+1,L+2,L+1,L+3,L+2)}}const S=new sn;return S.setAttribute("position",new ye(p,3)),S.setAttribute("uv",new ye(g,2)),S.setAttribute("aBend",new ye(_,1)),S.setIndex(v),S.computeVertexNormals(),S};for(let u=0;u<3;u++){const h=t(u===2?9:2.5,u===2?.25:.09,.2),d=this.plantMaterial([4352834,6584125,5270332][u]),p=u===2?480:1900,g=new Nv(h,d,p);for(let v=0;v<p;v++){let _=le(-110,110),x=le(-220,100);const S=Math.abs(_+Math.sin(x*.035)*8);S<13&&(_+=Math.sign(_||1)*(15-S)),this.dummy.position.set(_,Nr(_,x)-.1,x),this.dummy.rotation.set(le(-.08,.08),le(0,Fi),0);const T=le(.5,1.7);this.dummy.scale.set(T,T,T),this.dummy.updateMatrix(),g.setMatrixAt(v,this.dummy.matrix)}this.scene.add(g)}const n=[],a=(u,h,d)=>{const p=h.clone().sub(u),g=new Rn(d*.48,d,p.length(),5,1);g.applyQuaternion(new Kr().setFromUnitVectors(Wt(0,1,0),p.normalize())),g.translate((u.x+h.x)/2,(u.y+h.y)/2,(u.z+h.z)/2),n.push(g)},o=(u,h,d,p)=>{const g=u.clone().add(Wt(Math.sin(h)*d,Math.cos(h)*d,le(-.13,.13)));a(u,g,p*.025+.014),p>0&&(o(g,h-.43,d*.7,p-1),o(g,h+.4,d*.74,p-1))};o(Wt(),0,1.05,4);const c=lu(n);if(n.forEach(u=>u.dispose()),c){const u=[this.material(10184030),this.material(9600599),this.material(6454643)];for(let h=0;h<90;h++){const d=new Kt(c,u[h%3]),p=le(-65,65),g=le(-170,60);d.position.set(p,Nr(p,g),g),d.rotation.y=le(0,Fi),d.scale.setScalar(le(.6,1.4)),this.scene.add(d)}}}surface(){const t=new yn({uniforms:{uTime:this.uniforms.uTime},side:Fn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 wp; uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.09+uTime*.25)*.3+sin(p.y*.11-uTime*.3)*.2;wp=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`varying vec3 wp;uniform float uTime;${d_}void main(){float c=caustic(wp.xz*.16,uTime*.7);float n=valueNoise(wp.xz*.025+uTime*.02);vec3 col=mix(vec3(.1,.48,.54),vec3(.55,.86,.81),n);col+=c*.24;float sun=exp(-length(wp.xz-vec2(-38.,-36.))*.014);col+=vec3(.35,.4,.3)*sun;gl_FragColor=vec4(col,.89);}`}),n=new Kt(new ts(800,800,55,55),t);n.rotation.x=-Math.PI/2,n.position.y=26,this.scene.add(n);const a=new yn({uniforms:{uTime:this.uniforms.uTime},transparent:!0,depthWrite:!1,side:Fn,blending:Fr,vertexShader:"varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying vec3 wPos;uniform float uTime;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float vertical=sin(vUv.y*3.14159);float pulse=.78+sin(wPos.x*.14+uTime*.21)*.12;gl_FragColor=vec4(.38,.78,.67,edge*vertical*pulse*.038);}"});for(let o=0;o<30;o++){const c=le(34,54),u=new Kt(new Rn(le(.3,1.2),le(2,5),c,16,1,!0),a);u.position.set(le(-85,95),26-c*.48,le(-130,55)),u.rotation.z=-.26,u.rotation.x=.13,this.scene.add(u)}}ellipsoid(t,n,a,o,c,u,h,d){const p=new Qa(1,32,20);p.scale(u,h,d),p.translate(a,o,c);const g=new Kt(p,n);return t.add(g),g}tube(t,n,a,o=56,c=12){const u=new pu(t),h=u.computeFrenetFrames(o,!1),d=[],p=[],g=[];for(let _=0;_<=o;_++){const x=_/o,S=u.getPoint(x),T=x*(n.length-1),M=Math.min(Math.floor(T),n.length-2),y=Ka.lerp(n[M],n[M+1],T-M);for(let L=0;L<=c;L++){const U=L/c*Fi,w=S.clone().addScaledVector(h.normals[_],Math.cos(U)*y).addScaledVector(h.binormals[_],Math.sin(U)*y);if(d.push(w.x,w.y,w.z),p.push(L/c,x),_<o&&L<c){const P=_*(c+1)+L,O=P+c+1;g.push(P,P+1,O,O,P+1,O+1)}}}const v=new sn;return v.setAttribute("position",new ye(d,3)),v.setAttribute("uv",new ye(p,2)),v.setIndex(g),v.computeVertexNormals(),new Kt(v,a)}flipper(t,n,a){const o=[],c=[],u=[];for(let g=0;g<=20;g++){const v=g/20,_=Math.max(.015,Math.pow(Math.sin(Math.PI*v),.7)*a);for(let x=0;x<=12;x++){const S=x/12*Fi;if(o.push(-v*v*n*.32+_*Math.cos(S),Math.sin(S)*_*.18,v*n),c.push(x/12,v),g<20&&x<12){const T=g*13+x;u.push(T,T+1,T+12+1,T+1,T+12+2,T+12+1)}}}const p=new sn;return p.setAttribute("position",new ye(o,3)),p.setAttribute("uv",new ye(c,2)),p.setIndex(u),p.computeVertexNormals(),new Kt(p,t)}plesiosaur(t=1){const n=new xn,a=this.material(5532e3,"skin",.51),o=[];this.ellipsoid(n,a,0,0,0,2.6,.92,1.24),n.add(this.tube([Wt(1.3,.2),Wt(2.8,.38),Wt(4.3,1.06),Wt(5.8,1.7),Wt(7.1,1.86)],[.76,.46,.32,.25,.22],a)),this.ellipsoid(n,a,7.38,1.88,0,.65,.3,.31),this.ellipsoid(n,a,7.79,1.79,0,.42,.15,.22);const c=new ln({color:397841,roughness:.12,metalness:.3});for(const h of[-1,1]){this.ellipsoid(n,this.material(9144688),7.37,2.01,h*.262,.11,.095,.039),this.ellipsoid(n,c,7.4,2.014,h*.294,.065,.06,.024);const d=this.tube([Wt(7.34,1.73,h*.265),Wt(7.78,1.72,h*.205),Wt(8.02,1.75,h*.105)],[.012,.012,.006],c,12,4);n.add(d);for(let p=0;p<2;p++){const g=new xn;g.position.set(p===0?1.2:-1.65,-.34,h*.85);const v=this.flipper(a,p===0?3.3:2.8,.68);h<0&&(v.rotation.x=Math.PI),g.add(v),g.userData.side=h,g.userData.phase=p*.8,n.add(g),o.push(g)}}const u=new xn;return u.position.x=-1.9,u.add(this.tube([Wt(),Wt(-1.7,-.1),Wt(-3.4,-.06),Wt(-4.2,.03)],[.7,.36,.12,.012],a,36)),n.add(u),n.scale.setScalar(t),{group:n,fins:o,tail:u,kind:"plesiosaur",scale:t}}ichthyosaur(t=1){const n=new xn,a=this.material(4810096,"skin",.42),o=[];this.ellipsoid(n,a,0,0,0,2.6,.77,.73),n.add(this.tube([Wt(1.5,0),Wt(2.5,-.03),Wt(3.65,-.14)],[.57,.31,.045],a,35));const c=new ln({color:397843,roughness:.15});for(const d of[-1,1]){this.ellipsoid(n,c,1.75,.27,d*.45,.12,.13,.06);const p=new xn;p.position.set(.9,-.25,d*.58);const g=this.flipper(a,1.7,.4);d<0&&(g.rotation.x=Math.PI),p.add(g),p.userData.side=d,p.userData.phase=0,n.add(p),o.push(p)}const u=this.flipper(a,1.3,.6);u.rotation.x=-Math.PI/2,u.position.set(-.35,.55,0),n.add(u);const h=new xn;h.position.x=-1.9,h.add(this.tube([Wt(),Wt(-1.3,0),Wt(-2.15,0)],[.5,.23,.06],a,24));for(const d of[-1,1]){const p=this.flipper(a,1.35,.42);p.position.x=-2,p.rotation.x=d*Math.PI/2,h.add(p)}return n.add(h),n.scale.setScalar(t),{group:n,fins:o,tail:h,kind:"ichthyosaur",scale:t}}spinosaurus(t=1){const n=new xn,a=this.material(6777171,"skin",.7),o=[];this.ellipsoid(n,a,0,0,0,2.4,1.1,.87),n.add(this.tube([Wt(1.5,.3),Wt(2.6,.75),Wt(3.4,.8)],[.66,.43,.36],a,32)),this.ellipsoid(n,a,3.8,.75,0,.94,.39,.37),this.ellipsoid(n,a,4.55,.62,0,.85,.22,.23);const c=[],u=[],h=[];for(let _=0;_<=28;_++){const x=_/28,S=-2.25+x*4.3,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);if(c.push(S,.4,0,S,T,0),h.push(x,0,x,1),_<28){const M=_*2;u.push(M,M+1,M+2,M+1,M+3,M+2)}}const d=new sn;d.setAttribute("position",new ye(c,3)),d.setAttribute("uv",new ye(h,2)),d.setIndex(u),d.computeVertexNormals();const p=this.material(6705990,"skin");p.side=Fn,n.add(new Kt(d,p));for(let _=0;_<15;_++){const x=_/14,S=-2.2+x*4.2,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);n.add(this.tube([Wt(S,.6,.02),Wt(S-.1,T*.6,.02),Wt(S,T,.02)],[.045,.031,.012],a,8,5))}const g=new ln({color:1382674,roughness:.3});for(const _ of[-1,1]){this.ellipsoid(n,g,3.51,.98,_*.326,.07,.07,.034);const x=new xn;x.position.set(-1.25,-.5,_*.58),x.add(this.tube([Wt(),Wt(-.2,-.85,_*.5),Wt(.15,-1.2,_*.6),Wt(-.45,-1.35,_*.76)],[.45,.29,.15,.03],a,24)),n.add(x),x.userData.side=_,x.userData.phase=1,o.push(x);const S=new xn;S.position.set(1.3,-.45,_*.55),S.add(this.tube([Wt(),Wt(.13,-.56,_*.4),Wt(.8,-.66,_*.5)],[.21,.12,.04],a,20)),n.add(S),S.userData.side=_,S.userData.phase=0,o.push(S)}const v=new xn;return v.position.x=-1.8,v.add(this.tube([Wt(),Wt(-1.7,0),Wt(-3.5,.08),Wt(-5.5,0)],[.7,.48,.27,.012],a,48)),n.add(v),n.scale.setScalar(t),{group:n,fins:o,tail:v,kind:"spinosaur",scale:t}}ammonite(){const t=new xn,n=this.material(12101252,"plain",.65),a=[],o=[],c=100;for(let v=0;v<=c;v++){const _=v/c,x=_*Fi*2.3,S=.06+Math.pow(_,1.65)*.85;a.push(Wt(Math.cos(x)*S,Math.sin(x)*S,0)),o.push(.015+Math.pow(_,1.6)*.24)}t.add(this.tube(a,o,n,150,12));const u=a[a.length-1],h=this.material(9600610);for(let v=0;v<7;v++){const _=v/7*Fi;t.add(this.tube([u.clone(),u.clone().add(Wt(.45,Math.sin(_)*.16,Math.cos(_)*.16)),u.clone().add(Wt(.9,Math.sin(_)*.35,Math.cos(_)*.3)),u.clone().add(Wt(1.02,Math.sin(_)*.24,Math.cos(_)*.3))],[.037,.033,.021,.001],h,16,5))}const d=this.material(7826774);for(let v=30;v<c;v+=3){const _=a[v],x=o[v]*1.025,S=new Kt(new yu(x,.008,4,12),d);S.position.copy(_);const T=a[Math.min(v+1,c)].clone().sub(a[Math.max(0,v-1)]).normalize();S.quaternion.setFromUnitVectors(Wt(0,0,1),T),t.add(S)}const p=new xn,g=new Map;for(const v of t.children){const _=v;_.updateMatrix();const x=_.geometry.clone().applyMatrix4(_.matrix),S=_.material;g.has(S)||g.set(S,[]),g.get(S).push(x)}for(const[v,_]of g){const x=lu(_);x&&p.add(new Kt(x,v)),_.forEach(S=>S.dispose())}return t.children.forEach(v=>v.geometry.dispose()),p}life(){const t=(h,d,p,g,v)=>{const _={...h,center:d,radius:p,speed:g,phase:v};this.creatures.push(_),this.scene.add(_.group)};t(this.plesiosaur(1.15),Wt(28,7,-8),28,.017,Math.PI*.72),t(this.plesiosaur(.78),Wt(-48,12,-108),38,.014,1.8),t(this.ichthyosaur(.9),Wt(30,2,-58),38,.06,.8),t(this.ichthyosaur(.67),Wt(26,5,-62),38,.06,.96),t(this.spinosaurus(1.2),Wt(-22,21,-45),48,.012,-.5),t(this.plesiosaur(1.35),Wt(55,-2,-180),40,.015,2.5),t(this.ichthyosaur(1.1),Wt(-80,4,28),48,.048,.5);const n=this.ammonite();for(let h=0;h<13;h++){const d=h===0?n:n.clone(),p=le(-42,42),g=le(-110,22);d.position.set(p,Nr(p,g)+le(3,8),g),d.rotation.set(le(-.2,.2),le(0,Fi),le(-.1,.1)),d.scale.setScalar(le(.55,1.1)),d.userData.origin=d.position.clone(),d.userData.phase=uu()*Fi,d.userData.ammonite=!0,this.scene.add(d)}const a=new Qa(1,10,6);a.scale(.5,.16,.09);const o=new gp(.23,.35,3);o.rotateZ(Math.PI/2),o.scale(1,1,.25),o.translate(-.53,0,0);const c=lu([a,o]);this.fish=new Nv(c,this.material(10268315,"plain",.45),350),this.scene.add(this.fish);const u=[Wt(-14,5,-31),Wt(38,11,-35),Wt(0,16,-90),Wt(-48,1,-120),Wt(30,-3,25)];for(let h=0;h<350;h++)this.fishData.push({center:u[h%5].clone().add(Wt(le(-6,6),le(-3,3),le(-6,6))),phase:le(0,Fi),radius:le(3,8),speed:le(.11,.2),size:le(.35,1.05)})}suspendedParticles(){const n=new Float32Array(5400);for(let c=0;c<1800;c++)n[c*3]=le(-110,110),n[c*3+1]=le(-16,26),n[c*3+2]=le(-110,110);const a=new sn;a.setAttribute("position",new hi(n,3));const o=new yn({uniforms:{uTime:this.uniforms.uTime,uPixelRatio:{value:this.renderer.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Fr,vertexShader:"uniform float uTime;uniform float uPixelRatio;varying float a;void main(){vec3 p=position;p.x+=sin(uTime*.14+position.z)*.22;p.y+=sin(uTime*.18+position.x)*.25;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));}"});this.particles=new ZS(a,o),this.scene.add(this.particles)}bind(){const t=(a,o,c)=>{a.addEventListener(o,c),this.listeners.push(()=>a.removeEventListener(o,c))};t(window,"keydown",(a=>{this.playing&&(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","ControlLeft"].includes(a.code)&&(a.preventDefault(),this.keys.add(a.code)),a.code==="Escape"&&this.pause(),a.code==="KeyH"&&!a.repeat&&this.hooks.onToggleUI(),a.code==="KeyG"&&!a.repeat&&(this.setGlide(!this.glide),this.hooks.onGlide(this.glide)))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>{this.keys.clear(),this.playing&&this.pause()})),t(document,"visibilitychange",(()=>{document.hidden&&this.playing&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing&&(this.dragging=!0,this.lastPointer={x:a.clientX,y:a.clientY},n.setPointerCapture(a.pointerId),a.pointerType==="mouse"&&document.pointerLockElement!==n))try{const o=n.requestPointerLock?.();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}})),t(n,"pointerup",(()=>{this.dragging=!1})),t(n,"pointercancel",(()=>{this.dragging=!1})),t(document,"pointermove",(a=>{if(!this.playing)return;const o=document.pointerLockElement===n;if(!o&&!this.dragging)return;const c=o?a.movementX:a.clientX-this.lastPointer.x,u=o?a.movementY:a.clientY-this.lastPointer.y;this.targetYaw-=c*.0021,this.targetPitch=As(this.targetPitch-u*.0021,-1.47,1.47),this.lastPointer={x:a.clientX,y:a.clientY}})),t(document,"pointerlockchange",(()=>{!document.pointerLockElement&&this.playing&&!this.dragging&&this.pause()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.pause(),this.hooks.onError("The graphics connection was interrupted. Refresh to return to the ocean.")}))}start(){if(this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.initAudio(),this.sound&&this.audioContext?.resume().catch(()=>{}),window.matchMedia("(pointer:fine)").matches)try{const t=this.renderer.domElement.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}pause(){this.playing&&(this.playing=!1,this.glide=!1,this.keys.clear(),this.touch={x:0,y:0,z:0},this.velocity.set(0,0,0),this.dragging=!1,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.hooks.onPause())}reset(){this.position.set(0,3,35),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=-.1,this.velocity.set(0,0,0),this.glide=!1,this.time=0}setGlide(t){this.glide=t}touchMove(t,n){this.touch.x=As(t,-1,1),this.touch.y=As(n,-1,1)}touchVertical(t){this.touch.z=t}setSound(t){this.sound=t,this.master&&this.audioContext&&this.master.gain.setTargetAtTime(t?.35:0,this.audioContext.currentTime,.3),t&&this.playing&&this.audioContext?.resume().catch(()=>{})}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.35:0,this.master.connect(n.destination);const a=n.createBuffer(2,n.sampleRate*8,n.sampleRate);for(let v=0;v<2;v++){let _=0;const x=a.getChannelData(v);for(let S=0;S<x.length;S++)_=(_+(Math.random()*2-1)*.03)/1.018,x[S]=_*4}const o=n.createBufferSource();o.buffer=a,o.loop=!0;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.45;const u=n.createGain();u.gain.value=.42,o.connect(c),c.connect(u),u.connect(this.master),o.start();const h=n.createOscillator(),d=n.createGain();h.frequency.value=.07,d.gain.value=160,h.connect(d),d.connect(c.frequency),h.start();const p=n.createOscillator(),g=n.createGain();p.type="sine",p.frequency.value=47,g.gain.value=.055,p.connect(g),g.connect(this.master),p.start()}catch{}}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);(this.playing||!this.started)&&(this.time+=t);const n=this.time;if(this.uniforms.uTime.value=n,this.playing){const u=(...v)=>v.some(_=>this.keys.has(_))?1:0;this.yaw=Ka.lerp(this.yaw,this.targetYaw,1-Math.exp(-14*t)),this.pitch=Ka.lerp(this.pitch,this.targetPitch,1-Math.exp(-14*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize();const h=u("KeyW","ArrowUp")-u("KeyS","ArrowDown")+(this.glide?.52:0)+this.touch.y,d=u("KeyD","ArrowRight")-u("KeyA","ArrowLeft")+this.touch.x,p=u("KeyE","Space")-u("KeyQ","ControlLeft")+this.touch.z;this.move.copy(this.forward).multiplyScalar(h).addScaledVector(this.right,d),this.move.y+=p,this.move.lengthSq()>1&&this.move.normalize();const g=u("ShiftLeft","ShiftRight")?8.2:3.8;this.move.multiplyScalar(g),this.velocity.lerp(this.move,1-Math.exp(-2.1*t)),this.position.addScaledVector(this.velocity,t),this.position.x=As(this.position.x,-245,245),this.position.z=As(this.position.z,-265,245),this.position.y=As(this.position.y,Nr(this.position.x,this.position.z)+1.8,24.2);for(const v of this.colliders){if(Math.abs(this.position.y-v.pos.y)>v.height+1)continue;const _=this.position.x-v.pos.x,x=this.position.z-v.pos.z,S=Math.sqrt(_*_+x*x);if(S<v.radius+.85&&S>.001){const T=v.radius+.85-S;this.position.x+=_/S*T,this.position.z+=x/S*T}}this.camera.position.copy(this.position),this.reduced||(this.camera.position.y+=Math.sin(n*.9)*.026)}else!this.started&&!this.reduced&&this.camera.rotation.set(-.09+Math.sin(n*.1)*.018,Math.sin(n*.08)*.025,0);for(const u of this.creatures){const h=n*u.speed+u.phase,d=u.center.x+Math.cos(h)*u.radius,p=u.center.z+Math.sin(h)*u.radius*.58;u.group.position.set(d,u.center.y+Math.sin(n*.3+u.phase)*.35,p),u.group.rotation.y=Math.atan2(-Math.cos(h)*.58,-Math.sin(h)),u.group.rotation.z=Math.sin(n*.3+u.phase)*.025,u.fins.forEach(g=>{g.rotation.x=Math.sin(n*1.25+(g.userData.phase||0)+u.phase)*.22*(g.userData.side||1),g.rotation.z=Math.sin(n*1.25+(g.userData.phase||0)+u.phase+.7)*.07}),u.tail.rotation.y=Math.sin(n*(u.kind==="ichthyosaur"?3:1.3)+u.phase)*(u.kind==="ichthyosaur"?.22:.11)}for(let u=0;u<this.fishData.length;u++){const h=this.fishData[u],d=n*h.speed+h.phase;this.dummy.position.set(h.center.x+Math.cos(d)*h.radius,h.center.y+Math.sin(d*2)*.7,h.center.z+Math.sin(d)*h.radius*.5),this.dummy.rotation.set(0,Math.atan2(-Math.cos(d)*.5,-Math.sin(d)),Math.cos(d*2)*.035),this.dummy.scale.set(h.size,h.size,h.size),this.dummy.updateMatrix(),this.fish.setMatrixAt(u,this.dummy.matrix)}this.fish.instanceMatrix.needsUpdate=!0;for(const u of this.scene.children)u.userData.ammonite&&(u.position.y=u.userData.origin.y+Math.sin(n*.28+u.userData.phase)*.35,u.rotation.z=Math.sin(n*.23+u.userData.phase)*.09);this.particles.position.set(Math.floor(this.position.x/80)*80,0,Math.floor(this.position.z/80)*80);const a=this.scene.fog,o=As((-this.position.z-75)/160,0,1);a.density=.013+o*.006;const c=new ce(742243).lerp(new ce(404547),o*.75);a.color.copy(c),this.scene.background.copy(c),n-this.statusAt>.25&&(this.statusAt=n,this.hooks.onStatus(26-this.position.y,this.position.z<-130?"The blue beyond":this.position.z<-65?"The ancient reef":Math.abs(this.position.x)>40?"The underwater forest":"The sunlit shallows")),this.renderer.render(this.scene,this.camera)};dispose(){this.alive=!1,cancelAnimationFrame(this.frame),this.listeners.forEach(a=>a()),this.observer?.disconnect(),this.audioContext?.close().catch(()=>{});const t=new Set,n=new Set;this.scene.traverse(a=>{const o=a;o.geometry&&t.add(o.geometry),o.material&&(Array.isArray(o.material)?o.material:[o.material]).forEach(u=>n.add(u))}),t.forEach(a=>a.dispose()),n.forEach(a=>a.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}}function d2(r,t){const n=r.createAnalyser();return n.fftSize=2048,t.connect(n).connect(r.destination),n}function p2(r,t){for(const[n,a]of[[0,660],[.2,880]]){const o=r.createOscillator(),c=r.createGain(),u=r.currentTime+n;o.frequency.value=a,c.gain.setValueAtTime(0,u),c.gain.linearRampToValueAtTime(.18,u+.015),c.gain.exponentialRampToValueAtTime(.001,u+.18),o.connect(c).connect(t),o.start(u),o.stop(u+.2),o.onended=()=>{o.disconnect(),c.disconnect()}}}function m2(r,t){const n=r.currentTime,a=.028,o=r.createBuffer(1,Math.max(1,Math.round(r.sampleRate*a)),r.sampleRate),c=o.getChannelData(0);for(let v=0;v<c.length;v++)c[v]=Math.random()*2-1;const u=r.createBufferSource();u.buffer=o;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=2800,h.Q.value=1.1;const d=r.createGain();d.gain.setValueAtTime(.72,n),d.gain.exponentialRampToValueAtTime(.001,n+a),u.connect(h).connect(d).connect(t),u.start(n),u.stop(n+a),u.onended=()=>{u.disconnect(),h.disconnect(),d.disconnect()};const p=r.createOscillator(),g=r.createGain();p.type="square",p.frequency.value=1650,g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(.28,n+.001),g.gain.exponentialRampToValueAtTime(.001,n+.018),p.connect(g).connect(t),p.start(n),p.stop(n+.022),p.onended=()=>{p.disconnect(),g.disconnect()}}const g2=""+new URL("underwater-ambience-CTuF1-BE.mp3",import.meta.url).href;class v2{constructor(t,n){this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0,this.gain.connect(n)}buffer=null;loading=null;source=null;gain;generation=0;disposed=!1;abort=new AbortController;async start(){if(this.disposed||this.source)return;const t=this.generation;if(this.buffer||(this.loading??=fetch(g2,{signal:this.abort.signal}).then(a=>{if(!a.ok)throw new Error(`Music download failed: ${a.status}`);return a.arrayBuffer()}).then(a=>this.ctx.decodeAudioData(a)).catch(a=>{throw this.loading=null,a}),this.buffer=await this.loading),this.disposed||t!==this.generation||this.source||this.ctx.state==="closed")return;const n=this.ctx.createBufferSource();n.buffer=this.buffer,n.loop=!0,n.connect(this.gain),this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.65,this.ctx.currentTime+1.5),n.start(),this.source=n}reset(){this.generation++,this.source?.stop(),this.source?.disconnect(),this.source=null}dispose(){this.disposed=!0,this.abort.abort(),this.reset(),this.gain.disconnect()}}const Xi=4,_2={x:0,y:3,z:-12},ep={x:0,y:2,z:-112},ul={x:32,y:3,z:-12},ax={stone:{name:"Limestone",short:"Stone",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},wood:{name:"Driftwood",short:"Wood",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},flare:{name:"Signal flare",short:"Flare",description:"R · Deploy a 12-second distraction at your position.",hint:"R use · consumed"},air:{name:"Air reserve",short:"Air",description:"R · Restore up to 60 seconds of air (consumed).",hint:"R use · consumed"},bandage:{name:"Sealant kit",short:"Sealant",description:"R · Repair 45 suit integrity (consumed).",hint:"R use · consumed"},relic:{name:"Ammonite relic",short:"Relic",description:"Cannot use here — carry to the extraction pool.",hint:"Carry to extract · do not drop"}},Yr=new Set,es=(r,t,n,a)=>{for(let o=r;o<=t;o++)for(let c=n;c<=a;c++)Yr.add(`${o},${c}`)};es(8,14,1,5);es(10,12,5,11);es(4,18,11,24);es(10,12,24,26);es(8,14,26,30);for(let r=9;r<=12;r++)for(let t=15;t<=20;t++)Yr.delete(`${r},${t}`);es(19,19,4,20);es(18,19,20,21);es(17,21,1,4);const ja=(r,t)=>({x:(r-11)*Xi,y:3,z:-t*Xi}),zr=r=>({col:Math.round(r.x/Xi)+11,row:Math.round(-r.z/Xi)}),ci=(r,t)=>Math.hypot(r.x-t.x,r.y-t.y,r.z-t.z);function np(r,t){return Yr.has(`${Math.round(r/Xi)+11},${Math.round(-t/Xi)}`)}function x2(r,t=.48){if(r.y<.65||r.y>7.1)return!1;for(let n=0;n<8;n++)if(!np(r.x+Math.cos(n*Math.PI/4)*t,r.z+Math.sin(n*Math.PI/4)*t))return!1;return np(r.x,r.z)}function sx(r,t,n,a,o=.48){const c=Math.max(1,Math.ceil(Math.hypot(t,n,a)/.25));for(let u=0;u<c;u++)for(const[h,d]of[["x",t],["y",n],["z",a]]){const p={...r,[h]:r[h]+d/c};x2(p,o)&&(r[h]=p[h])}}function eu(r,t){const n=Math.ceil(ci(r,t)/.4);for(let a=0;a<=n;a++){const o=n?a/n:0;if(!np(r.x+(t.x-r.x)*o,r.z+(t.z-r.z)*o))return!1}return!0}function gu(r,t){return r>=4&&r<=18&&t>=12&&t<=28&&Yr.has(`${r},${t}`)}function y2(r,t){const n=zr(r),a=zr(t),o=`${n.col},${n.row}`,c=`${a.col},${a.row}`;if(!gu(a.col,a.row))return[];const u=[o],h=new Map([[o,null]]);for(let g=0;g<u.length;g++){const v=u[g];if(v===c)break;const[_,x]=v.split(",").map(Number);for(const[S,T]of[[1,0],[-1,0],[0,1],[0,-1]]){const M=`${_+S},${x+T}`;gu(_+S,x+T)&&!h.has(M)&&(h.set(M,v),u.push(M))}}if(!h.has(c))return[];const d=[];let p=c;for(;p&&p!==o;){const[g,v]=p.split(",").map(Number);d.unshift(ja(g,v)),p=h.get(p)}return d}const p_=.003,nu=(r,t,n,a)=>({yaw:r-n*p_,pitch:Math.max(-1.4,Math.min(1.4,t-a*p_))}),M2=1.45;function m_(r,t){const n=Math.max(0,Math.min(1,(r-.65)/6.449999999999999)),a=Math.max(-1,Math.min(1,-t/1.4)),o=1-n,c=Math.max(0,-a),u=Math.max(0,a),h=(48+n*62)*(1+a*.18),d=(15+n*19)*(1+a*.12-c*.08),p=1.05+o*.5+c*.18-u*.06,g=(.006+n*.022)*(1+a*.28),v=.35+n*.55+a*.12,_=.55+n*.3-c*.12+u*.05,x=.62+n*.28-c*.05,S=.48+n*.42-c*.18+u*.12;return{intensity:h,distance:d,decay:p,beamOpacity:Math.max(.004,g),particle:Math.max(0,Math.min(1,v)),r:_,g:x,b:S}}function g_(r,t,n){if(n<=0)return 0;const o=(Math.max(0,Math.min(1,(r-t)/n))-.5)*2,c=.2,u=Math.abs(o);if(u<=c)return 0;const h=(u-c)/(1-c);return Math.sign(o)*h*h}const rx="painted-abyss.inventoryTipsSeen";function v_(){try{return globalThis.localStorage?.getItem(rx)==="1"}catch{return!1}}function S2(){try{globalThis.localStorage?.setItem(rx,"1")}catch{}}class __{position={..._2};health=100;air=240;elapsed=0;stamina=100;torch=!0;inventory=["stone","wood","flare","air","bandage"];selected=0;pickups=[{id:1,item:"relic",position:{...ep}},{id:2,item:"flare",position:{x:-20,y:2,z:-56}}];nextId=3;pending=null;outcome="playing";reason="";tipsSeen=!1;notice="";noticeUntil=0;feedbackKind="";feedbackPulse=0;predator={position:ja(16,19),state:"patrol",timer:0,lost:0,lastKnown:ja(16,19),waypoint:0,bite:0,heading:0};decoy=null;patrol=[ja(16,22),ja(6,22),ja(6,13),ja(16,13)];constructor(t=!1){this.tipsSeen=t,t||(this.notice="1–5 select a slot · R uses it · usable items are consumed.",this.noticeUntil=8,this.feedbackKind="select")}get hasRelic(){return this.inventory.includes("relic")}say(t,n=""){this.notice=t,this.noticeUntil=this.elapsed+4.5,this.feedbackKind=n,this.feedbackPulse++}pulse(t=""){this.feedbackKind=t,this.feedbackPulse++}select(t){return this.outcome!=="playing"||t<0||t>4||this.selected===t?!1:(this.selected=t,this.pulse(this.inventory[t]?"select":"blocked"),!0)}nearest(){return this.pickups.filter(t=>ci(t.position,this.position)<3.2&&eu(this.position,t.position)).sort((t,n)=>ci(t.position,this.position)-ci(n.position,this.position))[0]}interact(){if(this.outcome!=="playing")return;if(ci(this.position,ul)<4){this.hasRelic?(this.outcome="won",this.reason="Relic secured. You made it back to the light."):this.say("Extraction needs the ammonite relic. Follow the turquoise markers.","blocked");return}const t=this.pending===null?this.nearest():this.pickups.find(o=>o.id===this.pending);if(!t||ci(t.position,this.position)>3.2||!eu(this.position,t.position)){this.pending=null;return}let n=this.inventory.indexOf(null);if(n<0&&this.pending===null){this.pending=t.id,this.say("All five slots are full. Choose 1–5, then E to swap.","blocked");return}n<0&&(n=this.selected);const a=this.inventory[n];this.inventory[n]=t.item,this.selected=n,this.pickups=this.pickups.filter(o=>o.id!==t.id),a&&this.pickups.push({id:this.nextId++,item:a,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.pending=null,this.say(t.item==="relic"?"Relic recovered! Follow the amber markers to extraction.":`${ax[t.item].name} collected.`,"ok"),t.item==="relic"&&(this.predator.state="alert",this.predator.timer=0,this.predator.lastKnown={...this.position})}drop(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}this.pickups.push({id:this.nextId++,item:t,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok")}use(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}if(t==="air"){if(this.air>=240){this.pulse("blocked");return}this.air=Math.min(240,this.air+60),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="bandage"){if(this.health>=100){this.pulse("blocked");return}this.health=Math.min(100,this.health+45),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="flare"){this.decoy={position:{...this.position},until:this.elapsed+12},this.predator.state="search",this.predator.timer=0,this.predator.lastKnown={...this.position},this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}this.pulse("blocked")}update(t,n=!1){if(this.outcome!=="playing")return;if(t=Math.min(t,.05),this.elapsed+=t,this.air=Math.max(0,this.air-t),this.stamina=Math.max(0,Math.min(100,this.stamina+(n?-18:17)*t)),this.air<=0){this.outcome="lost",this.reason="Your air ran out. Use the reserve earlier or take a shorter route.";return}this.pending!==null&&!this.pickups.some(T=>T.id===this.pending&&ci(T.position,this.position)<3.2)&&(this.pending=null);const a=this.predator,o=ci(a.position,this.position),c=eu(a.position,this.position),u=c&&(o<4.5||o<(this.torch?16:n?13:8)),h=!gu(zr(this.position).col,zr(this.position).row);a.timer+=t,a.bite=Math.max(0,a.bite-t),this.decoy&&this.elapsed>=this.decoy.until&&(this.decoy=null),this.decoy&&o>4.5?(a.state="search",a.timer=0,a.lastKnown={...this.decoy.position}):a.state==="patrol"&&u&&!h?(a.state="alert",a.timer=0,a.lastKnown={...this.position}):a.state==="alert"?(u&&!h&&(a.lastKnown={...this.position}),a.timer>1.6&&(a.state=u&&!h?"chase":"search",a.timer=0,a.lost=0)):a.state==="chase"?(u&&!h?(a.lastKnown={...this.position},a.lost=0):a.lost+=t,a.lost>2.5&&(a.state="search",a.timer=0)):a.state==="search"&&(u&&!h?(a.state="chase",a.timer=0,a.lost=0):a.timer>7&&(a.state="patrol",a.timer=0));const d=a.state==="patrol"?this.patrol[a.waypoint]:a.lastKnown;a.state==="patrol"&&ci(a.position,d)<1.1&&(a.waypoint=(a.waypoint+1)%this.patrol.length);const g=y2(a.position,d)[0]||(eu(a.position,d)&&gu(zr(d).col,zr(d).row)?d:a.position),v=g.x-a.position.x,_=g.z-a.position.z,x=Math.hypot(v,_),S=a.state==="chase"?3.4:a.state==="alert"?.7:1.8;x>.05&&(a.heading=Math.atan2(-_,v),sx(a.position,v/x*Math.min(x,S*t),0,_/x*Math.min(x,S*t),1.3)),a.position.y+=((a.state==="chase"?Math.max(1.2,Math.min(6.2,this.position.y)):3)-a.position.y)*Math.min(1,t*2),a.state==="chase"&&!h&&c&&ci(a.position,this.position)<3.2&&a.bite<=0&&(this.health=Math.max(0,this.health-25),a.bite=1.7,this.say("Suit breached! Sprint to cover or deploy a flare."),this.health<=0&&(this.outcome="lost",this.reason="The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe."))}}const Ue=(r=0,t=0,n=0)=>new V(r,t,n),E2="varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",T2=`varying vec2 vUv;varying vec3 wPos;uniform float uTime;uniform vec3 uColor;uniform float uOpacity;
void main(){
  float edge=pow(max(0.,sin(vUv.x*3.14159)),2.4);
  float vertical=pow(sin(vUv.y*3.14159),.55);
  float pulse=.82+sin(wPos.x*.11+wPos.z*.09+uTime*.19)*.14;
  float core=pow(max(0.,1.-abs(vUv.x-.5)*2.4),3.2)*.55;
  float a=(edge*vertical*pulse+core*vertical)*uOpacity;
  gl_FragColor=vec4(uColor,a);
}`;class b2 extends h2{audioNotice="";audioProbe=null;audioTestTimer=0;backgroundMusic=null;mission=new __(v_());ui;error="";pointerLocked=!1;everLocked=!1;lastSent=0;fallbackTurn=0;lockDenied=!1;lookPointer=null;torchLight=new Zc(15398655,210,34,.38,.55,1.05);beam;torchBody;torchLensMat;composer;bloom;guardian;pickupMeshes=new Map;decoyMesh;constructor(t,n){super(t,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:!0}),this.ui=n,this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.pitch=this.targetPitch=0,this.scene.background=new ce(268834),this.scene.fog=new xu(667192,.038),this.camera.far=130,this.camera.fov=64,this.camera.updateProjectionMatrix(),this.renderer.toneMappingExposure=1.12,this.renderer.toneMapping=vu,this.scene.add(new Q_(5938862,530464,.42)),this.scene.add(new v1(1194048,.22));const a=new $d(8308948,.55);a.position.set(-8,30,-20),this.scene.add(a),this.buildCave(),this.buildLights(),this.buildComposer(),this.guardian=this.ichthyosaur(.9),this.scene.add(this.guardian.group);const o=new Ns({color:14722930});for(const h of[-1,1])this.ellipsoid(this.guardian.group,o,1.8,.27,h*.5,.1,.1,.04);this.suspendedParticles();const c=this.particles.geometry.attributes.position;for(let h=0;h<c.count;h++)c.setXYZ(h,Math.sin(h*78.23)*37,1+h%71/10,-(h*13.23)%122);this.particles.geometry.computeBoundingSphere();const u=this.particles.material;u.uniforms.uTorch={value:1},u.vertexShader=`uniform float uTorch;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;","float cone=1.-smoothstep(.22,.52,length(mv.xy)/max(.08,-mv.z));gl_PointSize=clamp((28.+cone*42.*uTorch)/-mv.z,1.2,5.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/28.,0.,1.)*(.04+cone*.55*uTorch);"),u.fragmentShader=u.fragmentShader.replace("gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));","gl_FragColor=vec4(.78,.92,.96,a*smoothstep(.5,.0,d));"),this.decoyMesh=new Kt(new Ps(.18,1),new Ns({color:16740416})),this.decoyMesh.add(new Kc(16738353,12,12)),this.scene.add(this.decoyMesh),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.syncPickups(),this.animate(),this.publish()}buildCave(){const t=this.material(8029300,"sand",.88,3.4),n=this.material(5596778,"rock",.86,1.6),a=this.material(3820626,"rock",.9,.6),o=[],c=[],u=[],h=[];for(const g of Yr){const[v,_]=g.split(",").map(Number),x=ja(v,_),S=new ts(Xi,Xi,2,2);if(S.rotateX(-Math.PI/2),S.translate(x.x,0,x.z),o.push(S),!(v===19&&_===3)){const T=S.clone();T.rotateZ(Math.PI),T.translate(x.x*2,8,0),c.push(T)}for(const[T,M]of[[1,0],[-1,0],[0,1],[0,-1]])if(!Yr.has(`${v+T},${_+M}`)){const y=new Qn(T?1:Xi+.05,8.5,M?1:Xi+.05);y.translate(x.x+T*2.5,4,x.z-M*2.5),u.push(y);for(let L=0;L<3;L++){const U=new Ps(1,1);U.scale(T?.7:1.7,1.3+L%2*.5,M?.7:1.7),U.translate(x.x+T*2.45,1.3+L*2.5,x.z-M*2.45),h.push(U)}}}for(const[g,v]of[[o,t],[c,a],[u,n],[h,n]]){const _=lu(g);_&&this.scene.add(new Kt(_,v)),g.forEach(x=>x.dispose())}const d=this.material(10459770,"rock",.82,1.5);for(let g=0;g<6;g++)for(const v of[-1,1])this.scene.add(this.tube([Ue(-3+g*.75,.25,-113),Ue(-3+g*.75,1.3,-113+v*1.2),Ue(-3+g*.75,.3,-113+v*2.2)],[.12,.09,.025],d,12,5));const p=new Kt(new Rn(1.1,1.5,1.2,7),n);p.position.set(ep.x,.6,ep.z),this.scene.add(p)}beamMaterial(t,n){return new yn({uniforms:{uTime:this.uniforms.uTime,uColor:{value:new ce(t)},uOpacity:{value:n}},transparent:!0,depthWrite:!1,side:Fn,blending:Fr,vertexShader:E2,fragmentShader:T2})}addShaft(t,n,a,o,c,u,h,d,p=0,g=0){const v=new Kt(new Rn(c,u,o,28,1,!0),this.beamMaterial(h,d));return v.position.set(t,n,a),v.rotation.x=p,v.rotation.z=g,this.scene.add(v),v}buildTorchBody(){const t=new xn,n=new ln({color:13936654,metalness:.08,roughness:.62}),a=new ln({color:12093706,metalness:.06,roughness:.7}),o=new ln({color:9072672,metalness:.05,roughness:.82}),c=new ln({color:1316376,metalness:.2,roughness:.68}),u=new ln({color:2764338,metalness:.15,roughness:.78}),h=new ln({color:11055288,metalness:.88,roughness:.32}),d=new ln({color:6969928,metalness:.55,roughness:.55}),p=new ln({color:4870230,metalness:.7,roughness:.45}),g=new ln({color:2763816,metalness:.4,roughness:.35}),v=new ln({color:3828280,metalness:0,roughness:.95}),_=new ln({color:2771500,metalness:0,roughness:.98}),x=new ln({color:4880954,metalness:0,roughness:.85,side:Fn}),S=new ln({color:5933634,metalness:0,roughness:.8,side:Fn}),T=new ln({color:13687008,metalness:.92,roughness:.22});this.torchLensMat=new ln({color:15266036,emissive:12114160,emissiveIntensity:1.4,metalness:.05,roughness:.28,transparent:!0,opacity:.9});const M=ct=>(ct.rotateX(Math.PI/2),ct),y=new Kt(M(new Rn(.055,.058,.42,24)),n);y.position.set(0,0,-.08),t.add(y);for(let ct=0;ct<7;ct++){const N=new Kt(M(new Rn(.062,.062,.012,20)),ct%3===0?o:a);N.position.set(0,0,.04-ct*.038),t.add(N)}const L=new Kt(M(new Rn(.07,.055,.06,20)),a);L.position.set(0,0,-.31),t.add(L);for(const[ct,N,K,pt,vt]of[[.05,-.02,-.12,.022,.012],[-.048,.025,0,.018,.01],[.03,.04,.05,.025,.014],[-.04,-.035,-.22,.02,.011],[.045,.01,-.28,.016,.009]]){const At=new Kt(new Qa(1,6,5),p);At.scale.set(pt,vt,.008),At.position.set(ct,N,K),t.add(At)}for(const[ct,N,K,pt]of[[.052,-.05,.16,.15],[-.05,-.14,.13,-.2],[.025,.02,.14,.35],[-.035,-.24,.1,.05],[.04,-.2,.11,-.4]]){const vt=new Kt(new Qn(.0045,.0022,K),g);vt.position.set(Math.cos(pt)*.059,ct,N),vt.rotation.z=pt*.5,t.add(vt);const At=new Kt(new Qn(.002,.0015,K*.85),p);At.position.set(Math.cos(pt)*.061,ct+.003,N),At.rotation.z=pt*.5,t.add(At)}const U=new Kt(new Qn(.036,.014,.01),u);U.position.set(.09,.05,-.41),U.rotation.z=.4,t.add(U);const w=new Kt(new Qn(.02,.008,.006),p);w.position.set(.095,.055,-.408),w.rotation.z=.4,t.add(w);const P=new Kt(M(new Rn(.118,.112,.07,28)),u);P.position.set(0,0,-.38),t.add(P);const O=new Kt(M(new Rn(.122,.122,.014,28)),c);O.position.set(0,0,-.415),t.add(O);for(let ct=0;ct<8;ct++){const N=ct/8*Math.PI*2,K=new Kt(new Rn(.008,.008,.016,6),ct%3===0?d:h);K.rotation.x=Math.PI/2,K.position.set(Math.cos(N)*.1,Math.sin(N)*.1,-.425),t.add(K)}const F=new Kt(new Qa(.095,20,12,0,Math.PI*2,0,Math.PI*.55),T);F.scale.set(1,1,.55),F.rotation.x=Math.PI,F.position.set(0,0,-.36),t.add(F);const G=new Kt(new mp(.088,28),this.torchLensMat);G.position.set(0,0,-.432),t.add(G);const R=new Kt(new xp(.06,.086,20),new ln({color:6977664,metalness:.1,roughness:.85,transparent:!0,opacity:.35}));R.position.set(0,0,-.433),t.add(R);const D=new Kt(new Qn(.028,.04,.055),o);D.position.set(.065,.01,-.2),t.add(D);const k=new Kt(new Qn(.022,.028,.03),a);k.position.set(.078,.01,-.2),t.add(k);const Z=new Kt(M(new Rn(.06,.058,.08,20)),u);Z.position.set(0,0,.18),t.add(Z);for(let ct=0;ct<4;ct++){const N=new Kt(M(new Rn(.063,.063,.008,16)),c);N.position.set(0,0,.15+ct*.018),t.add(N)}const ot=new Kt(M(new Rn(.052,.055,.02,16)),c);ot.position.set(0,0,.225),t.add(ot);const ut=new Kt(new Qn(.035,.012,.1),d);ut.position.set(0,.07,-.28),t.add(ut);const ht=new Kt(new Qn(.035,.055,.012),h);ht.position.set(0,.095,-.235),t.add(ht);for(const ct of[-.3,-.26]){const N=new Kt(new Rn(.006,.006,.014,8),d);N.rotation.x=Math.PI/2,N.position.set(0,.077,ct),t.add(N)}const B=[Ue(0,.078,-.32),Ue(0,.155,-.22),Ue(0,.17,-.05),Ue(0,.14,.1),Ue(0,.075,.16)];t.add(new Kt(new mu(new pu(B),24,.018,10,!1),u));const et=[[0,.12,-.08,.022],[.02,.14,-.2,.018],[-.015,.1,.08,.016],[.08,-.02,-.36,.02],[-.07,.04,-.39,.017],[.06,.06,-.4,.014],[-.05,-.04,.02,.019],[.04,-.05,-.18,.015],[0,.02,.2,.018],[-.04,.08,-.28,.012],[.05,.09,-.12,.014]];for(const[ct,N,K,pt]of et){const vt=new Kt(new Ps(1,0),ct*10+K*3&1?v:_);vt.scale.set(pt,pt*(.75+(ct*5&1)*.35),pt*(.85+(K*7&1)*.3)),vt.position.set(ct,N,K),vt.rotation.set(ct*4,N*5,K*3),t.add(vt)}const q=(ct,N)=>{t.add(new Kt(new mu(new pu(ct),14,N,6,!1),x))};q([Ue(.02,.17,-.2),Ue(.05,.14,-.12),Ue(.08,.06,-.05),Ue(.1,-.04,.02),Ue(.09,-.12,.06),Ue(.06,-.18,.08)],.007),q([Ue(-.02,.16,-.08),Ue(-.04,.11,0),Ue(-.06,.02,.06),Ue(-.05,-.08,.1),Ue(-.03,-.14,.12)],.006),q([Ue(.1,.03,-.39),Ue(.12,-.02,-.33),Ue(.11,-.09,-.27),Ue(.08,-.14,-.22)],.0055),q([Ue(-.09,.06,-.41),Ue(-.11,.01,-.35),Ue(-.1,-.06,-.3),Ue(-.07,-.11,-.26)],.005),q([Ue(0,.15,.05),Ue(.03,.08,.1),Ue(.04,-.02,.14),Ue(.02,-.1,.16)],.005);for(const[ct,N,K,pt,vt]of[[.09,-.02,0,.6,.2],[-.05,.05,.05,-.5,-.3],[.11,-.07,-.28,.9,.4],[-.09,-.04,-.32,-.7,.2],[.07,-.14,.07,.3,-.5]]){const At=new Kt(new ts(.028,.045),S);At.position.set(ct,N,K),At.rotation.set(pt,vt,.15),t.add(At)}for(const[ct,N,K]of[[.8,-.1,.02],[2.2,-.2,.016],[4,.05,.018],[5.5,-.28,.014]]){const pt=new Kt(new Qa(1,5,4),_);pt.scale.set(K*.6,K*.4,K*.15),pt.position.set(Math.cos(ct)*.06,Math.sin(ct)*.06,N),t.add(pt)}return t.position.set(.44,-.4,-.62),t.rotation.set(.18,-.22,.32),t.scale.setScalar(1.15),t}buildLights(){this.scene.add(this.camera),this.torchBody=this.buildTorchBody(),this.camera.add(this.torchBody),this.torchLight.color.set(15923455),this.torchLight.intensity=170,this.torchLight.distance=34,this.torchLight.angle=.28,this.torchLight.penumbra=.35,this.torchLight.decay=1.15,this.torchLight.position.set(0,0,-.45),this.torchLight.target.position.set(0,0,-22),this.torchBody.add(this.torchLight,this.torchLight.target);const t=new Rn(.018,3.2,20,28,1,!0);t.rotateX(Math.PI/2),this.beam=new Kt(t,this.beamMaterial(13953784,.09)),this.beam.position.set(0,0,-10.45),this.torchBody.add(this.beam);const n=(p,g,v)=>{const _=new Kt(new Qa(.1,8,6),new Ns({color:v}));_.position.set(p,.55,g),_.add(new Kc(v,.85,5.5,1.5)),this.scene.add(_)};for(const[p,g]of[[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])n(p,g,5952708);for(const[p,g]of[[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])n(p,g,14723160);const a=new xn;a.position.set(ul.x,.65,ul.z);const o=new Kt(new yu(1.6,.05,8,48),new Ns({color:12189660}));o.rotation.x=Math.PI/2,a.add(o),this.scene.add(a);const c=new Zc(13826292,420,24,.72,.8,1);c.position.set(32,12,-12),c.target.position.set(32,0,-12),this.scene.add(c,c.target);const u=new Kc(11071720,28,16,1.1);u.position.set(32,5,-12),this.scene.add(u),this.addShaft(32,5.2,-12,9,.7,2.8,14220020,.22);const h=[[2,6.2,-52,9,.5,2.4,.16],[6,6,-64,9.5,.55,2.6,.15],[4,6.5,-78,9,.45,2.3,.14],[0,6.4,-96,8,.35,1.8,.1]];for(const[p,g,v,_,x,S,T]of h){this.addShaft(p,g,v,_,x,S,12119012,T,(Math.random()-.5)*.12,(Math.random()-.5)*.1);const M=new Zc(11594980,55+T*500,15,.5,.85,1.15);M.position.set(p,8.2,v),M.target.position.set(p,0,v),this.scene.add(M,M.target)}this.addShaft(0,6.3,-22,8,.45,2.2,11067608,.1);const d=new Zc(11068636,70,13,.48,.8,1.1);d.position.set(0,8.5,-22),d.target.position.set(0,0,-22),this.scene.add(d,d.target),this.addShaft(0,5.8,-110,7.5,.3,1.5,12899504,.08)}buildComposer(){const t=this.host.clientWidth,n=this.host.clientHeight;this.composer=new o2(this.renderer),this.composer.addPass(new l2(this.scene,this.camera)),this.bloom=new qr(new It(t,n),.18,.65,.92),this.composer.addPass(this.bloom),this.composer.addPass(new u2)}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer?.setSize(t,n),this.bloom?.resolution.set(t,n)}syncPickups(){for(const[t,n]of this.pickupMeshes)this.mission.pickups.some(a=>a.id===t)||(this.scene.remove(n),n.traverse(a=>{a instanceof Kt&&(a.geometry.dispose(),a.material.dispose())}),this.pickupMeshes.delete(t));for(const t of this.mission.pickups){let n=this.pickupMeshes.get(t.id);if(!n){n=new xn;const a=new ln({color:t.item==="relic"?14857822:8571063,emissive:t.item==="relic"?7027719:1391670,emissiveIntensity:.7,metalness:.4,roughness:.45});if(t.item==="relic"){const o=[],c=[];for(let u=0;u<=72;u++){const h=u/72,d=h*Math.PI*4.5,p=.03+h*h*.62;o.push(Ue(Math.cos(d)*p,Math.sin(d)*p,0)),c.push(.01+h*.12)}n.add(this.tube(o,c,a,90,8)),n.add(new Kc(15711080,3.5,7))}else n.add(new Kt(new Ps(.3,1),a));this.scene.add(n),this.pickupMeshes.set(t.id,n)}n.position.set(t.position.x,t.position.y+Math.sin(this.time*1.7+t.id)*.12,t.position.z),n.rotation.y=this.time*.45}}publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice,yaw:this.yaw})}bind(){const t=(a,o,c,u)=>{a.addEventListener(o,c,u),this.listeners.push(()=>a.removeEventListener(o,c,u))};t(window,"keydown",(a=>{this.playing&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(a.code)&&a.preventDefault(),this.keys.add(a.code),!a.repeat&&(a.code==="Escape"&&(this.mission.pending!==null?(this.mission.pending=null,this.publish()):this.pause()),/^Digit[1-5]$/.test(a.code)&&this.mission.select(Number(a.code.slice(-1))-1)&&this.playSelectClick(),a.code==="KeyE"&&this.mission.interact(),a.code==="KeyF"&&(this.mission.torch=!this.mission.torch),a.code==="KeyR"&&this.mission.use(),a.code==="KeyG"&&this.mission.drop(),a.code==="KeyM"&&this.setSound(!this.sound),this.publish()))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>this.pause())),t(document,"visibilitychange",(()=>{document.hidden&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing){try{n.setPointerCapture(a.pointerId)}catch{}document.pointerLockElement!==n&&this.requestLookLock(!1)}})),t(document,"pointermove",(a=>{if(!this.playing)return;if(document.pointerLockElement===n){this.lookPointer=null,this.fallbackTurn=0;const d=nu(this.targetYaw,this.targetPitch,a.movementX,a.movementY);this.targetYaw=d.yaw,this.targetPitch=d.pitch;return}const c=n.getBoundingClientRect();if(a.clientX<c.left||a.clientX>c.right||a.clientY<c.top||a.clientY>c.bottom){this.lookPointer=null,this.fallbackTurn=0;return}this.lookPointer={x:a.clientX,y:a.clientY},this.fallbackTurn=g_(a.clientX,c.left,c.width);const u=this.fallbackTurn!==0?0:a.movementX,h=nu(this.targetYaw,this.targetPitch,u,a.movementY);this.targetYaw=h.yaw,this.targetPitch=h.pitch})),t(window,"mouseout",(a=>{a.relatedTarget||(this.lookPointer=null,this.fallbackTurn=0)})),t(n,"wheel",(a=>{if(!this.playing)return;a.preventDefault();const o=a.deltaMode===1?16:a.deltaMode===2?200:1,c=nu(this.targetYaw,this.targetPitch,a.deltaX*o,a.deltaY*o);this.targetYaw=c.yaw,this.targetPitch=c.pitch}),{passive:!1}),t(document,"pointerlockchange",(()=>{const a=this.pointerLocked;this.pointerLocked=document.pointerLockElement===n,this.pointerLocked&&(this.everLocked=!0,this.lockDenied=!1,this.lookPointer=null,this.fallbackTurn=0),a&&!this.pointerLocked&&this.pause(),this.publish()})),t(document,"pointerlockerror",(()=>{this.lockDenied=!0,this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.error="The graphics connection was lost. Reload the page to restart the dive.",this.pause(),this.publish()}))}requestLookLock(t=!0){if(!this.playing||document.pointerLockElement===this.renderer.domElement)return;const n=()=>{this.lockDenied=!0,t&&(this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish())};try{this.renderer.domElement.requestPointerLock?.()?.catch(n)}catch{n()}}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.7:0,this.audioProbe=d2(n,this.master),this.backgroundMusic=new v2(n,this.master),n.onstatechange=()=>{this.alive&&(this.playing&&this.sound&&n.state!=="running"&&(this.audioNotice="Sound interrupted. Pause and choose Test sound."),this.publish())}}catch{this.audioContext?.close().catch(()=>{}),this.audioContext=null,this.master=null,this.audioNotice="Audio could not start in this browser. Try Test sound or open the game in Chrome."}}enableAudio(t=!1){window.clearTimeout(this.audioTestTimer),this.initAudio();const n=this.audioContext,a=this.master;if(!n||!a){this.publish();return}a.gain.setTargetAtTime(this.sound?.7:0,n.currentTime,.04),n.resume().then(()=>{if(this.alive){if(!this.playing&&!this.testingAudio){n.suspend().catch(()=>{});return}if(n.state!=="running"){this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish();return}this.audioNotice="",t&&this.sound&&(this.playing||this.testingAudio)&&p2(n,a),this.playing&&this.backgroundMusic?.start().catch(()=>{this.alive&&(this.audioNotice="Background music could not load. Pause and resume to retry.",this.publish())}),this.publish()}}).catch(()=>{this.alive&&(this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish())})}playSelectClick(){if(!this.playing||!this.sound)return;const t=this.audioContext,n=this.master;!t||!n||t.state!=="running"||m2(t,n)}testingAudio=!1;testSound(){this.sound=!0,this.testingAudio=!0,this.enableAudio(!0),this.audioTestTimer=window.setTimeout(()=>{this.testingAudio=!1,this.playing||this.audioContext?.suspend().catch(()=>{})},1500),this.publish()}setSound(t){this.sound=t,this.audioNotice="",t?this.playing?this.enableAudio():this.testSound():this.master&&this.audioContext&&this.master.gain.setTargetAtTime(0,this.audioContext.currentTime,.04),this.publish()}start(){this.mission.outcome!=="playing"&&this.reset(),this.mission.tipsSeen||S2(),this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.testingAudio=!1,this.sound&&this.enableAudio(!0),this.lookPointer=null,this.fallbackTurn=0,this.requestLookLock(!0),this.publish()}pause(){this.playing&&(this.testingAudio=!1,window.clearTimeout(this.audioTestTimer),this.playing=!1,this.lookPointer=null,this.fallbackTurn=0,this.keys.clear(),this.velocity.set(0,0,0),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.publish())}reset(){this.backgroundMusic?.reset(),this.mission=new __(v_()),this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=0,this.lookPointer=null,this.fallbackTurn=0,this.lockDenied=!1,this.velocity.set(0,0,0),this.time=0,this.lastSent=0,this.keys.clear(),this.syncPickups(),this.publish()}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.playing){this.time+=t;const d=this.mission,p=(...x)=>x.some(S=>this.keys.has(S))?1:0;if(!this.pointerLocked&&this.lookPointer){const x=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=g_(this.lookPointer.x,x.left,x.width)}else!this.pointerLocked&&!this.lookPointer&&(this.fallbackTurn=0);const g=p("ArrowRight")-p("ArrowLeft")+(this.pointerLocked?0:this.fallbackTurn*M2),v=nu(this.targetYaw,this.targetPitch,g*t*650,(p("ArrowDown")-p("ArrowUp"))*t*650);this.targetYaw=v.yaw,this.targetPitch=v.pitch,this.yaw=Ka.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*t)),this.pitch=Ka.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize(),this.move.copy(this.forward).multiplyScalar(p("KeyW")-p("KeyS")).addScaledVector(this.right,p("KeyD")-p("KeyA")),this.move.y+=p("Space")-p("KeyQ","ControlLeft","ControlRight");const _=!!p("ShiftLeft","ShiftRight")&&d.stamina>3&&this.move.lengthSq()>.1;this.move.lengthSq()>1&&this.move.normalize(),this.move.multiplyScalar(_?4.8:2.8),this.velocity.lerp(this.move,1-Math.exp(-4*t)),sx(d.position,this.velocity.x*t,this.velocity.y*t,this.velocity.z*t),d.update(t,_),this.position.copy(d.position),this.camera.position.copy(this.position),d.outcome!=="playing"&&this.pause()}const n=Ka.smoothstep(-this.position.z,35,100),a=1-Ka.smoothstep(ci(this.position,ul),4,22),o=this.scene.fog;o.color.set(800064).lerp(new ce(402480),n).lerp(new ce(1727074),a*.65),o.density=.032+.022*n-.014*a,this.scene.background.copy(o.color),this.uniforms.uTime.value=this.time;const c=this.mission.torch;if(this.torchLight.visible=c,this.beam.visible=c,this.torchBody.visible=!0,this.torchLensMat.emissiveIntensity=c?1.25:.06,this.torchLensMat.emissive.set(c?13165823:2240568),c){const d=m_(this.position.y,this.pitch),p=m_(3,0),g=d.intensity/p.intensity,v=d.distance/p.distance,_=d.beamOpacity/p.beamOpacity;this.torchLight.intensity=170*g,this.torchLight.distance=34*v,this.torchLight.decay=1.15+(d.decay-p.decay),this.torchLight.color.setRGB(d.r,d.g,d.b);const x=this.beam.material;x.uniforms.uOpacity.value=.09*_,x.uniforms.uColor.value.setRGB(d.r,d.g,d.b),this.particles.material.uniforms.uTorch.value=0}else this.particles.material.uniforms.uTorch.value=0;this.bloom.strength=c?.2:.14;const u=this.mission.predator;this.guardian.group.position.copy(u.position);const h=Math.atan2(Math.sin(u.heading-this.guardian.group.rotation.y),Math.cos(u.heading-this.guardian.group.rotation.y));this.guardian.group.rotation.y+=h*Math.min(1,t*5),this.guardian.fins.forEach(d=>d.rotation.x=Math.sin(this.time*2+(d.userData.phase||0))*.25*(d.userData.side||1)),this.guardian.tail.rotation.y=Math.sin(this.time*3)*.22,this.syncPickups(),this.decoyMesh.visible=!!this.mission.decoy,this.mission.decoy&&this.decoyMesh.position.copy(this.mission.decoy.position),this.time-this.lastSent>.05&&(this.lastSent=this.time,this.publish()),this.composer.render()};dispose(){window.clearTimeout(this.audioTestTimer),this.audioContext&&(this.audioContext.onstatechange=null),this.backgroundMusic?.dispose(),this.pause(),this.composer?.dispose(),super.dispose()}}const sl="0.1.16",ox="bdf3fb4",A2=`v${sl} · ${ox}`;function w2({item:r}){const t={stone:J.jsx("path",{fill:"#7a8480",d:"M12 28c1-9 7-15 13-16 8-2 15 3 16 11 2 9-4 17-13 18-8 1-15-4-16-13z"}),wood:J.jsxs("g",{transform:"rotate(-35 24 24)",children:[J.jsx("rect",{x:"20",y:"8",width:"8",height:"32",rx:"2.5",fill:"#2c343a"}),J.jsx("rect",{x:"19",y:"8",width:"10",height:"7",rx:"1.5",fill:"#4a545c"}),J.jsx("rect",{x:"21",y:"18",width:"6",height:"2",fill:"#1a2024"})]}),flare:J.jsxs(J.Fragment,{children:[J.jsx("rect",{x:"22",y:"16",width:"5",height:"24",rx:"1.5",fill:"#e8e8e8"}),J.jsx("path",{fill:"#ff1e14",d:"M21 16c1-5 2.5-10 3.5-13 1.5 3 3.5 7 4.5 11H21z"}),J.jsx("path",{fill:"#ffc14a",d:"M24 5c0-2 .6-4 1-5 .4 1.5 1.2 3 2 4.5-.7.2-1.8.4-3 .5z"})]}),air:J.jsxs(J.Fragment,{children:[J.jsx("rect",{x:"17",y:"13",width:"14",height:"26",rx:"5",fill:"#c8d0d6"}),J.jsx("rect",{x:"20",y:"7",width:"8",height:"8",rx:"2",fill:"#a8b2ba"}),J.jsx("line",{x1:"17",y1:"23",x2:"31",y2:"23",stroke:"#3a444a",strokeWidth:"1.3"}),J.jsx("line",{x1:"24",y1:"17",x2:"24",y2:"30",stroke:"#3a444a",strokeWidth:"1.3"})]}),bandage:J.jsxs(J.Fragment,{children:[J.jsx("rect",{x:"11",y:"17",width:"26",height:"18",rx:"2.5",fill:"#9aa4aa"}),J.jsx("path",{fill:"#5c666c",d:"M22 17v-5h4v5m-2 6v8m-5-4h10"})]}),relic:J.jsxs(J.Fragment,{children:[J.jsx("path",{fill:"#c4923a",d:"M24 8c9 0 15 6 15 13 0 10-8 17-15 17S9 31 9 21 12 8 24 8z"}),J.jsx("path",{fill:"none",stroke:"#4a2a08",strokeWidth:"2.2",d:"M31 28c-9 9-19 1-16-7s13-11 14-1-7 8-6 2"}),J.jsx("circle",{cx:"28",cy:"17",r:"3.2",fill:"#ecc878"})]})};return J.jsx("svg",{viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:r?t[r]:null})}function R2({yaw:r}){const t=(-r*180/Math.PI%360+360)%360,n=[];for(let a=0;a<360;a+=5){let o=(a-t+540)%360-180;if(Math.abs(o)>52)continue;const c=a===0?"N":a===90?"E":a===180?"S":a===270?"W":"";n.push({deg:a,x:o,label:c,major:a%90===0})}return J.jsxs("div",{className:"compass","aria-hidden":"true",children:[J.jsx("div",{className:"compass-needle"}),J.jsx("div",{className:"compass-track",children:n.map(a=>J.jsxs("div",{className:`compass-mark ${a.major?"major":a.deg%15===0?"mid":""}`,style:{transform:`translateX(${a.x*2.55}px)`},children:[J.jsx("i",{}),a.label&&J.jsx("span",{children:a.label})]},a.deg))})]})}function C2(){const r=xs.useRef(null),t=xs.useRef(null),[n,a]=xs.useState(null),[o,c]=xs.useState(""),[u,h]=xs.useState("");xs.useEffect(()=>{if(!r.current)return;let P;try{P=new b2(r.current,O=>a({...O})),t.current=P}catch(O){console.error(O),c("The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.")}return()=>{P?.dispose(),t.current=null}},[]),xs.useEffect(()=>{let P=!0;const O=()=>{fetch("/__build.json",{cache:"no-store"}).then(R=>R.json()).then(R=>{!P||!R?.packageVersion||(R.packageVersion!==sl||R.sha&&R.sha!==ox?h(`OUTDATED TAB — server is ${R.packageVersion}${R.sha?` · ${R.sha}`:""}. Hard refresh (Cmd+Shift+R) or run: node playable/refresh.mjs`):h(""))}).catch(()=>{})};O();const F=window.setInterval(O,4e3),G=()=>O();return window.addEventListener("focus",G),document.addEventListener("visibilitychange",()=>{document.hidden||O()}),()=>{P=!1,window.clearInterval(F),window.removeEventListener("focus",G)}},[]);const d=n?.mission,p=!!n?.playing,g=d?.outcome!=="playing"&&!!d,v=d?.nearest(),_=d&&ci(d.position,ul)<4,x=d?.pending!==null&&d?.pending!==void 0?"Choose slot 1–5 · E confirms swap · Esc cancels":_?d?.hasRelic?"E · Extract with the relic":"Relic required for extraction":v?`E · Collect ${ax[v.item].name}`:"",S=n?.yaw??0,T=d?Math.ceil(d.air):240,M=`${String(Math.floor(T/60)).padStart(2,"0")}:${String(T%60).padStart(2,"0")}`,y=d?Math.max(1,Math.round(10+-d.position.z*.22+(5-d.position.y)*2.4)):0,L=d?.predator.state||"patrol",w=(d?ci(d.position,d.predator.position)<23:!1)?{patrol:"Movement in the dark",alert:"It heard something",chase:"It is hunting you",search:"Searching your last position"}[L]:"";return J.jsxs("main",{className:p?"app playing":"app",children:[J.jsx("div",{className:"viewport",ref:r,"aria-label":"Three-dimensional underwater cave"}),J.jsx("div",{className:"vignette"}),J.jsxs("div",{className:"build-version","aria-label":`Build version ${sl}`,children:["BUILD ",A2]}),u&&J.jsx("div",{className:"stale-build",role:"alert",children:u}),!p&&J.jsxs("header",{children:[J.jsxs("div",{className:"brand",children:[J.jsx("span",{className:"brand-mark",children:"◉"})," PAINTED ABYSS",J.jsx("small",{children:"THE DROWNED SHELF"})]}),J.jsxs("div",{className:"build-label",children:["FIRST DIVE ",J.jsx("span",{children:" / "})," ",sl]})]}),p&&d&&J.jsxs(J.Fragment,{children:[J.jsxs("section",{className:"objectives","aria-label":"Objectives",children:[J.jsxs("div",{className:`obj ${d.hasRelic?"done":""}`,children:[J.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"◆"}),d.hasRelic?"Carry the ammonite relic":"Recover the ammonite relic"]}),J.jsxs("div",{className:"obj",children:[J.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"○"}),"Reach the extraction pool"]})]}),J.jsx(R2,{yaw:S}),J.jsxs("div",{className:"depth",children:["DEPTH ",y," m"]}),J.jsxs("section",{className:"vitals","aria-label":"Vitals",children:[J.jsxs("div",{className:"vital",children:[J.jsxs("div",{className:"vital-row",children:[J.jsx("span",{children:"AIR"}),J.jsx("strong",{className:T<45?"warning":"",children:M})]}),J.jsx("div",{className:"meter air",children:J.jsx("i",{style:{width:`${d.air/240*100}%`}})})]}),J.jsxs("div",{className:"vital",children:[J.jsxs("div",{className:"vital-row",children:[J.jsx("span",{children:"SUIT"}),J.jsx("strong",{className:d.health<40?"warning":"",children:Math.ceil(d.health)})]}),J.jsx("div",{className:"meter suit",children:J.jsx("i",{style:{width:`${d.health}%`}})})]}),J.jsxs("div",{className:"vital",children:[J.jsxs("div",{className:"vital-row",children:[J.jsx("span",{children:"FINS"}),J.jsx("strong",{children:Math.round(d.stamina)})]}),J.jsx("div",{className:"meter fins",children:J.jsx("i",{style:{width:`${d.stamina}%`}})})]})]}),w&&J.jsx("div",{className:`threat ${L}`,role:"status",children:w}),n?.audioNotice&&J.jsx("div",{className:"audio-notice",role:"status",children:n.audioNotice}),d.health<40&&J.jsx("div",{className:"injury"}),J.jsxs("div",{className:"interaction",role:"status",children:[x&&J.jsx("div",{className:"prompt",children:x}),d.elapsed<d.noticeUntil&&J.jsx("p",{className:`notice ${d.feedbackKind}`,children:d.notice},d.feedbackPulse)]}),J.jsx("div",{className:"inventory","aria-label":"Inventory",children:J.jsx("div",{className:"slots",children:d.inventory.map((P,O)=>{const F=O===d.selected,G=F&&d.feedbackKind?d.feedbackKind:"";return J.jsxs("div",{className:`slot ${F?"selected":""} ${P==="relic"?"relic":""} ${P==="flare"?"flare":""} ${G?`pulse-${G}`:""}`,children:[J.jsx("kbd",{children:O+1}),J.jsx(w2,{item:P}),F&&J.jsx("em",{className:"slot-mark","aria-hidden":"true",children:"●"})]},F?`${O}-p${d.feedbackPulse}`:O)})})}),J.jsxs("aside",{className:"keybinds","aria-hidden":"true",children:[J.jsxs("div",{children:[J.jsx("kbd",{children:"1–5"}),J.jsx("span",{children:"Select"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"F"}),J.jsx("span",{children:"Torch"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"E"}),J.jsx("span",{children:"Interact"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"R"}),J.jsx("span",{children:"Use"})]}),J.jsxs("div",{children:[J.jsx("kbd",{children:"G"}),J.jsx("span",{children:"Drop"})]})]}),!n?.pointerLocked&&J.jsx("div",{className:"free-look",children:"360° free look · move to look · hold left or right of center to keep turning"})]}),!p&&J.jsxs("div",{className:"menu-backdrop",children:[J.jsxs("section",{className:"menu",children:[J.jsx("div",{className:"eyebrow",children:g?d?.outcome==="won"?"EXPEDITION COMPLETE":"DIVE LOST":n?.started?"DIVE PAUSED":"A SHORT UNDERWATER SURVIVAL PROTOTYPE"}),J.jsx("h1",{children:g?d?.outcome==="won"?J.jsxs(J.Fragment,{children:["Back to",J.jsx("br",{}),J.jsx("em",{children:"the light."})]}):J.jsxs(J.Fragment,{children:["The deep",J.jsx("br",{}),J.jsx("em",{children:"keeps its own."})]}):n?.started?J.jsxs(J.Fragment,{children:["Catch your",J.jsx("br",{}),J.jsx("em",{children:"breath."})]}):J.jsxs(J.Fragment,{children:["Some things",J.jsx("br",{}),J.jsx("em",{children:"should stay buried."})]})}),J.jsx("p",{className:"intro",children:g?d?.reason:n?.started?"Your dive is paused. Take a moment, then return to the cave.":"One cave. One ancient guardian. Recover the ammonite relic and bring it back to the light."}),g&&J.jsxs("div",{className:"results",children:[J.jsxs("span",{children:[Math.floor((d?.elapsed||0)/60),"m ",Math.floor((d?.elapsed||0)%60),"s underwater"]}),J.jsx("span",{children:d?.outcome==="won"?"1 relic secured":"No relic secured"})]}),o||n?.error?J.jsx("p",{className:"error",role:"alert",children:o||n?.error}):J.jsxs("button",{className:"primary",disabled:!n,onClick:()=>t.current?.start(),children:[n?g?"Try another dive":n.started?"Resume dive":"Begin dive":"Opening the cave…"," ",J.jsx("span",{children:"↗"})]}),J.jsxs("div",{className:"menu-actions",children:[J.jsx("button",{onClick:()=>{const P=t.current;P&&(P.setSound(!P.sound),P.publish())},children:t.current?.sound===!1?"Sound off":"Sound on"}),J.jsx("button",{onClick:()=>t.current?.testSound(),children:"Test sound"}),n?.started&&!g&&J.jsx("button",{onClick:()=>{t.current?.reset(),t.current?.start()},children:"Restart dive"})]}),J.jsx("p",{className:"sound-help",role:"status",children:n?.audioNotice||"Test sound plays two clear tones. During the dive, hear your music."}),J.jsxs("div",{className:"dive-note",children:["2–4 MINUTES ",J.jsx("span",{children:"·"})," DESKTOP / HEADPHONES ",J.jsx("span",{children:"·"})," PROTOTYPE ",sl]})]}),J.jsxs("aside",{className:"briefing",children:[J.jsx("div",{className:"eyebrow",children:"BEFORE YOU DESCEND"}),J.jsxs("ol",{children:[J.jsxs("li",{children:[J.jsx("b",{children:"Follow the turquoise lights."}),J.jsx("span",{children:"Find the relic in the bone alcove, beyond the central pillar."})]}),J.jsxs("li",{children:[J.jsx("b",{children:"Make room for your discovery."}),J.jsx("span",{children:"Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops."})]}),J.jsxs("li",{children:[J.jsx("b",{children:"Escape through the east fissure."}),J.jsx("span",{children:"Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage."})]})]}),J.jsxs("div",{className:"control-grid",children:[J.jsxs("span",{children:[J.jsx("kbd",{children:"W A S D"})," Swim"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"Space / Q"})," Up / down"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"Shift"})," Sprint"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"F"})," Torch"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"E"})," Collect / extract"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"1–5"})," Select slot"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"R"})," Use / consume"]}),J.jsxs("span",{children:[J.jsx("kbd",{children:"G"})," Drop selected"]})]}),J.jsxs("p",{className:"look-note",children:["Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. ",J.jsx("kbd",{children:"Esc"})," pauses; ",J.jsx("kbd",{children:"M"})," mutes."]}),J.jsxs("p",{className:"tip",children:["Inventory: ",J.jsx("kbd",{children:"1–5"})," selects (click sound when the slot changes), then ",J.jsx("kbd",{children:"R"})," uses — air, sealant, and flares are consumed. A one-time tip appears on the first dive only. Rock blocks its sight; a flare distracts it while you move away."]})]})]})]})}yM.createRoot(document.getElementById("root")).render(J.jsx(C2,{}));
