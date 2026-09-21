(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var xh={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function nM(){if(X0)return qo;X0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=n,qo.jsxs=n,qo}var W0;function iM(){return W0||(W0=1,xh.exports=nM()),xh.exports}var Q=iM(),yh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function aM(){if(q0)return he;q0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(N,tt,xt){this.props=N,this.context=tt,this.refs=T,this.updater=xt||x}M.prototype.isReactComponent={},M.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=M.prototype;function U(N,tt,xt){this.props=N,this.context=tt,this.refs=T,this.updater=xt||x}var L=U.prototype=new y;L.constructor=U,S(L,M.prototype),L.isPureReactComponent=!0;var C=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function F(N,tt,xt,Mt,Ut,Ht){return xt=Ht.ref,{$$typeof:r,type:N,key:tt,ref:xt!==void 0?xt:null,props:Ht}}function V(N,tt){return F(N.type,tt,void 0,void 0,void 0,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function D(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return tt[xt]})}var G=/\/+/g;function Z(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):tt.toString(36)}function lt(){}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(lt,lt):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,tt,xt,Mt,Ut){var Ht=typeof N;(Ht==="undefined"||Ht==="boolean")&&(N=null);var it=!1;if(N===null)it=!0;else switch(Ht){case"bigint":case"string":case"number":it=!0;break;case"object":switch(N.$$typeof){case r:case t:it=!0;break;case g:return it=N._init,ft(it(N._payload),tt,xt,Mt,Ut)}}if(it)return Ut=Ut(N),it=Mt===""?"."+Z(N,0):Mt,C(Ut)?(xt="",it!=null&&(xt=it.replace(G,"$&/")+"/"),ft(Ut,tt,xt,"",function(Qt){return Qt})):Ut!=null&&(w(Ut)&&(Ut=V(Ut,xt+(Ut.key==null||N&&N.key===Ut.key?"":(""+Ut.key).replace(G,"$&/")+"/")+it)),tt.push(Ut)),1;it=0;var vt=Mt===""?".":Mt+":";if(C(N))for(var At=0;At<N.length;At++)Mt=N[At],Ht=vt+Z(Mt,At),it+=ft(Mt,tt,xt,Ht,Ut);else if(At=_(N),typeof At=="function")for(N=At.call(N),At=0;!(Mt=N.next()).done;)Mt=Mt.value,Ht=vt+Z(Mt,At++),it+=ft(Mt,tt,xt,Ht,Ut);else if(Ht==="object"){if(typeof N.then=="function")return ft(ut(N),tt,xt,Mt,Ut);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return it}function B(N,tt,xt){if(N==null)return N;var Mt=[],Ut=0;return ft(N,Mt,"","",function(Ht){return tt.call(xt,Ht,Ut++)}),Mt}function nt(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function yt(){}return he.Children={map:B,forEach:function(N,tt,xt){B(N,function(){tt.apply(this,arguments)},xt)},count:function(N){var tt=0;return B(N,function(){tt++}),tt},toArray:function(N){return B(N,function(tt){return tt})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},he.Component=M,he.Fragment=n,he.Profiler=l,he.PureComponent=U,he.StrictMode=a,he.Suspense=d,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,he.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},he.cache=function(N){return function(){return N.apply(null,arguments)}},he.cloneElement=function(N,tt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Mt=S({},N.props),Ut=N.key,Ht=void 0;if(tt!=null)for(it in tt.ref!==void 0&&(Ht=void 0),tt.key!==void 0&&(Ut=""+tt.key),tt)!O.call(tt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&tt.ref===void 0||(Mt[it]=tt[it]);var it=arguments.length-2;if(it===1)Mt.children=xt;else if(1<it){for(var vt=Array(it),At=0;At<it;At++)vt[At]=arguments[At+2];Mt.children=vt}return F(N.type,Ut,void 0,void 0,Ht,Mt)},he.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},he.createElement=function(N,tt,xt){var Mt,Ut={},Ht=null;if(tt!=null)for(Mt in tt.key!==void 0&&(Ht=""+tt.key),tt)O.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ut[Mt]=tt[Mt]);var it=arguments.length-2;if(it===1)Ut.children=xt;else if(1<it){for(var vt=Array(it),At=0;At<it;At++)vt[At]=arguments[At+2];Ut.children=vt}if(N&&N.defaultProps)for(Mt in it=N.defaultProps,it)Ut[Mt]===void 0&&(Ut[Mt]=it[Mt]);return F(N,Ht,void 0,void 0,null,Ut)},he.createRef=function(){return{current:null}},he.forwardRef=function(N){return{$$typeof:h,render:N}},he.isValidElement=w,he.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:nt}},he.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},he.startTransition=function(N){var tt=P.T,xt={};P.T=xt;try{var Mt=N(),Ut=P.S;Ut!==null&&Ut(xt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(yt,j)}catch(Ht){j(Ht)}finally{P.T=tt}},he.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},he.use=function(N){return P.H.use(N)},he.useActionState=function(N,tt,xt){return P.H.useActionState(N,tt,xt)},he.useCallback=function(N,tt){return P.H.useCallback(N,tt)},he.useContext=function(N){return P.H.useContext(N)},he.useDebugValue=function(){},he.useDeferredValue=function(N,tt){return P.H.useDeferredValue(N,tt)},he.useEffect=function(N,tt,xt){var Mt=P.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(N,tt)},he.useId=function(){return P.H.useId()},he.useImperativeHandle=function(N,tt,xt){return P.H.useImperativeHandle(N,tt,xt)},he.useInsertionEffect=function(N,tt){return P.H.useInsertionEffect(N,tt)},he.useLayoutEffect=function(N,tt){return P.H.useLayoutEffect(N,tt)},he.useMemo=function(N,tt){return P.H.useMemo(N,tt)},he.useOptimistic=function(N,tt){return P.H.useOptimistic(N,tt)},he.useReducer=function(N,tt,xt){return P.H.useReducer(N,tt,xt)},he.useRef=function(N){return P.H.useRef(N)},he.useState=function(N){return P.H.useState(N)},he.useSyncExternalStore=function(N,tt,xt){return P.H.useSyncExternalStore(N,tt,xt)},he.useTransition=function(){return P.H.useTransition()},he.version="19.1.1",he}var Y0;function Jd(){return Y0||(Y0=1,yh.exports=aM()),yh.exports}var ps=Jd(),Mh={exports:{}},Yo={},Sh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function sM(){return j0||(j0=1,(function(r){function t(B,nt){var j=B.length;B.push(nt);t:for(;0<j;){var yt=j-1>>>1,N=B[yt];if(0<l(N,nt))B[yt]=nt,B[j]=N,j=yt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var nt=B[0],j=B.pop();if(j!==nt){B[0]=j;t:for(var yt=0,N=B.length,tt=N>>>1;yt<tt;){var xt=2*(yt+1)-1,Mt=B[xt],Ut=xt+1,Ht=B[Ut];if(0>l(Mt,j))Ut<N&&0>l(Ht,Mt)?(B[yt]=Ht,B[Ut]=j,yt=Ut):(B[yt]=Mt,B[xt]=j,yt=xt);else if(Ut<N&&0>l(Ht,j))B[yt]=Ht,B[Ut]=j,yt=Ut;else break t}}return nt}function l(B,nt){var j=B.sortIndex-nt.sortIndex;return j!==0?j:B.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var d=[],p=[],g=1,v=null,_=3,x=!1,S=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var nt=n(p);nt!==null;){if(nt.callback===null)a(p);else if(nt.startTime<=B)a(p),nt.sortIndex=nt.expirationTime,t(d,nt);else break;nt=n(p)}}function P(B){if(T=!1,C(B),!S)if(n(d)!==null)S=!0,O||(O=!0,Z());else{var nt=n(p);nt!==null&&ft(P,nt.startTime-B)}}var O=!1,F=-1,V=5,w=-1;function D(){return M?!0:!(r.unstable_now()-w<V)}function G(){if(M=!1,O){var B=r.unstable_now();w=B;var nt=!0;try{t:{S=!1,T&&(T=!1,U(F),F=-1),x=!0;var j=_;try{e:{for(C(B),v=n(d);v!==null&&!(v.expirationTime>B&&D());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,_=v.priorityLevel;var N=yt(v.expirationTime<=B);if(B=r.unstable_now(),typeof N=="function"){v.callback=N,C(B),nt=!0;break e}v===n(d)&&a(d),C(B)}else a(d);v=n(d)}if(v!==null)nt=!0;else{var tt=n(p);tt!==null&&ft(P,tt.startTime-B),nt=!1}}break t}finally{v=null,_=j,x=!1}nt=void 0}}finally{nt?Z():O=!1}}}var Z;if(typeof L=="function")Z=function(){L(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=G,Z=function(){ut.postMessage(null)}}else Z=function(){y(G,0)};function ft(B,nt){F=y(function(){B(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var nt=3;break;default:nt=_}var j=_;_=nt;try{return B()}finally{_=j}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,nt){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=_;_=B;try{return nt()}finally{_=j}},r.unstable_scheduleCallback=function(B,nt,j){var yt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,B={id:g++,callback:nt,priorityLevel:B,startTime:j,expirationTime:N,sortIndex:-1},j>yt?(B.sortIndex=j,t(p,B),n(d)===null&&B===n(p)&&(T?(U(F),F=-1):T=!0,ft(P,j-yt))):(B.sortIndex=N,t(d,B),S||x||(S=!0,O||(O=!0,Z()))),B},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(B){var nt=_;return function(){var j=_;_=nt;try{return B.apply(this,arguments)}finally{_=j}}}})(Eh)),Eh}var Z0;function rM(){return Z0||(Z0=1,Sh.exports=sM()),Sh.exports}var Th={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function oM(){if(K0)return Nn;K0=1;var r=Jd();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},Nn.flushSync=function(d){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,d)return d()}finally{f.T=p,a.p=g,a.d.f()}},Nn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Nn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Nn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Nn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Nn.requestFormReset=function(d){a.d.r(d)},Nn.unstable_batchedUpdates=function(d,p){return d(p)},Nn.useFormState=function(d,p,g){return f.H.useFormState(d,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var Q0;function lM(){if(Q0)return Th.exports;Q0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=oM(),Th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function cM(){if(J0)return Yo;J0=1;var r=rM(),t=Jd(),n=lM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var m=u.alternate;if(m===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===s)return h(u),e;if(m===o)return h(u),i;m=m.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=m;else{for(var E=!1,A=u.child;A;){if(A===s){E=!0,s=u,o=m;break}if(A===o){E=!0,o=u,s=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===s){E=!0,s=m,o=u;break}if(A===o){E=!0,o=m,s=u;break}A=A.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case L:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case V:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],N=-1;function tt(e){return{current:e}}function xt(e){0>N||(e.current=yt[N],yt[N]=null,N--)}function Mt(e,i){N++,yt[N]=e.current,e.current=i}var Ut=tt(null),Ht=tt(null),it=tt(null),vt=tt(null);function At(e,i){switch(Mt(it,i),Mt(Ht,e),Mt(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?_0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=_0(i),e=x0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Ut),Mt(Ut,e)}function Qt(){xt(Ut),xt(Ht),xt(it)}function Yt(e){e.memoizedState!==null&&Mt(vt,e);var i=Ut.current,s=x0(i,e.type);i!==s&&(Mt(Ht,e),Mt(Ut,s))}function ve(e){Ht.current===e&&(xt(Ut),xt(Ht)),vt.current===e&&(xt(vt),Go._currentValue=j)}var on=Object.prototype.hasOwnProperty,H=r.unstable_scheduleCallback,ze=r.unstable_cancelCallback,ce=r.unstable_shouldYield,ie=r.unstable_requestPaint,Ot=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,Vt=r.unstable_ImmediatePriority,ue=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,z=r.unstable_IdlePriority,b=r.log,et=r.unstable_setDisableYieldValue,ht=null,mt=null;function ct(e){if(typeof b=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var zt=Math.clz32?Math.clz32:jt,Rt=Math.log,Wt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Rt(e)/Wt|0)|0}var St=256,Lt=4194304;function Kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~m,o!==0?u=Kt(o):(E&=A,E!==0?u=Kt(E):s||(s=A&~e,s!==0&&(u=Kt(s))))):(A=o&~m,A!==0?u=Kt(A):E!==0?u=Kt(E):s||(s=o&~e,s!==0&&(u=Kt(s)))),u===0?0:i!==0&&i!==u&&(i&m)===0&&(m=u&-u,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:u}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,i,s,o,u,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(s=E&~s;0<s;){var dt=31-zt(s),gt=1<<dt;A[dt]=0,I[dt]=-1;var at=$[dt];if(at!==null)for($[dt]=null,dt=0;dt<at.length;dt++){var st=at[dt];st!==null&&(st.lane&=-536870913)}s&=~gt}o!==0&&_t(e,o,0),m!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function _t(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-zt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function Gt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-zt(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:I0(e.type))}function vi(e,i){var s=nt.p;try{return nt.p=e,i()}finally{nt.p=s}}var dn=Math.random().toString(36).slice(2),pn="__reactFiber$"+dn,$e="__reactProps$"+dn,Ci="__reactContainer$"+dn,Us="__reactEvents$"+dn,ml="__reactListeners$"+dn,Ls="__reactHandles$"+dn,Jr="__reactResources$"+dn,Di="__reactMarker$"+dn;function Ns(e){delete e[pn],delete e[$e],delete e[Us],delete e[ml],delete e[Ls]}function Xi(e){var i=e[pn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ci]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=E0(e);e!==null;){if(s=e[pn])return s;e=E0(e)}return i}e=s,s=e.parentNode}return null}function pa(e){if(e=e[pn]||e[Ci]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Qa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ma(e){var i=e[Jr];return i||(i=e[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(e){e[Di]=!0}var gl=new Set,vl={};function R(e,i){q(e,i),q(e+"Capture",i)}function q(e,i){for(vl[e]=i,e=0;e<i.length;e++)gl.add(i[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},K={};function Tt(e){return on.call(K,e)?!0:on.call(ot,e)?!1:rt.test(e)?K[e]=!0:(ot[e]=!0,!1)}function Dt(e,i,s){if(Tt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function It(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var $t,ee;function qt(e){if($t===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$t=i&&i[1]||"",ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ee}var pe=!1;function Ce(e,i){if(!e||pe)return"";pe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var at=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){at=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){at=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var I=E.split(`
`),$=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===$.length)for(o=I.length-1,u=$.length-1;1<=o&&0<=u&&I[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==$[u]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{pe=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?qt(s):""}function je(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return qt("Activity");default:return""}}function Be(e){try{var i="";do i+=je(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(e){var i=Jt(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Me(e){e._valueTracker||(e._valueTracker=Ye(e))}function Dn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function Mn(e){return e.replace(zn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(e,i,s,o,u,m,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+me(i)):e.value!==""+me(i)&&(e.value=""+me(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Un(e,E,me(i)):s!=null?Un(e,E,me(s)):o!=null&&e.removeAttribute("value"),u==null&&m!=null&&(e.defaultChecked=!!m),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+me(A):e.removeAttribute("name")}function Bn(e,i,s,o,u,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+me(s):"",i=i!=null?""+me(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Un(e,i,s){i==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function tn(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+me(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function An(e,i,s){if(i!=null&&(i=""+me(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+me(s):""}function Ps(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ft(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=me(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function Vn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var $_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||$_.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function xp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&_p(e,u,o)}else for(var m in i)i.hasOwnProperty(m)&&_p(e,m,i[m])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(e){return ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _u=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,zs=null;function yp(e){var i=pa(e);if(i&&(e=i.stateNode)){var s=e[$e]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ve(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Mn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[$e]||null;if(!u)throw Error(a(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Dn(o)}break t;case"textarea":An(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&tn(e,!!s.multiple,i,!1)}}}var yu=!1;function Mp(e,i,s){if(yu)return e(i,s);yu=!0;try{var o=e(i);return o}finally{if(yu=!1,(Os!==null||zs!==null)&&(ic(),Os&&(i=Os,e=zs,zs=Os=null,yp(i),e)))for(i=0;i<e.length;i++)yp(e[i])}}function $r(e,i){var s=e.stateNode;if(s===null)return null;var o=s[$e]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Wi)try{var to={};Object.defineProperty(to,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Mu=!1}var ga=null,Su=null,xl=null;function Sp(){if(xl)return xl;var e,i=Su,s=i.length,o,u="value"in ga?ga.value:ga.textContent,m=u.length;for(e=0;e<s&&i[e]===u[e];e++);var E=s-e;for(o=1;o<=E&&i[s-o]===u[m-o];o++);return xl=u.slice(e,1<o?1-o:void 0)}function yl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function Ep(){return!1}function kn(e){function i(s,o,u,m,E){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ml:Ep,this.isPropagationStopped=Ep,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),i}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=kn(Ja),eo=g({},Ja,{view:0,detail:0}),nx=kn(eo),Eu,Tu,no,El=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(Eu=e.screenX-no.screenX,Tu=e.screenY-no.screenY):Tu=Eu=0,no=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),Tp=kn(El),ix=g({},El,{dataTransfer:0}),ax=kn(ix),sx=g({},eo,{relatedTarget:0}),bu=kn(sx),rx=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=kn(rx),lx=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cx=kn(lx),ux=g({},Ja,{data:0}),bp=kn(ux),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=dx[e])?!!i[e]:!1}function Au(){return px}var mx=g({},eo,{key:function(e){if(e.key){var i=fx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gx=kn(mx),vx=g({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=kn(vx),_x=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),xx=kn(_x),yx=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=kn(yx),Sx=g({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=kn(Sx),Tx=g({},Ja,{newState:0,oldState:0}),bx=kn(Tx),Ax=[9,13,27,32],Ru=Wi&&"CompositionEvent"in window,io=null;Wi&&"documentMode"in document&&(io=document.documentMode);var Rx=Wi&&"TextEvent"in window&&!io,Rp=Wi&&(!Ru||io&&8<io&&11>=io),wp=" ",Cp=!1;function Dp(e,i){switch(e){case"keyup":return Ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bs=!1;function wx(e,i){switch(e){case"compositionend":return Up(i);case"keypress":return i.which!==32?null:(Cp=!0,wp);case"textInput":return e=i.data,e===wp&&Cp?null:e;default:return null}}function Cx(e,i){if(Bs)return e==="compositionend"||!Ru&&Dp(e,i)?(e=Sp(),xl=Su=ga=null,Bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rp&&i.locale!=="ko"?null:i.data;default:return null}}var Dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Dx[e.type]:i==="textarea"}function Np(e,i,s,o){Os?zs?zs.push(o):zs=[o]:Os=o,i=cc(i,"onChange"),0<i.length&&(s=new Sl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var ao=null,so=null;function Ux(e){d0(e,0)}function Tl(e){var i=Qa(e);if(Dn(i))return e}function Pp(e,i){if(e==="change")return i}var Op=!1;if(Wi){var wu;if(Wi){var Cu="oninput"in document;if(!Cu){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Cu=typeof zp.oninput=="function"}wu=Cu}else wu=!1;Op=wu&&(!document.documentMode||9<document.documentMode)}function Bp(){ao&&(ao.detachEvent("onpropertychange",Ip),so=ao=null)}function Ip(e){if(e.propertyName==="value"&&Tl(so)){var i=[];Np(i,so,e,xu(e)),Mp(Ux,i)}}function Lx(e,i,s){e==="focusin"?(Bp(),ao=i,so=s,ao.attachEvent("onpropertychange",Ip)):e==="focusout"&&Bp()}function Nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(so)}function Px(e,i){if(e==="click")return Tl(i)}function Ox(e,i){if(e==="input"||e==="change")return Tl(i)}function zx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:zx;function ro(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!on.call(i,u)||!Kn(e[u],i[u]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,i){var s=Fp(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Fp(s)}}function Gp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Gp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_i(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=_i(e.document)}return i}function Du(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Bx=Wi&&"documentMode"in document&&11>=document.documentMode,Is=null,Uu=null,oo=null,Lu=!1;function kp(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lu||Is==null||Is!==_i(o)||(o=Is,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=cc(Uu,"onSelect"),0<o.length&&(i=new Sl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Is)))}function $a(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Fs={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Nu={},Xp={};Wi&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function ts(e){if(Nu[e])return Nu[e];if(!Fs[e])return e;var i=Fs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Xp)return Nu[e]=i[s];return e}var Wp=ts("animationend"),qp=ts("animationiteration"),Yp=ts("animationstart"),Ix=ts("transitionrun"),Fx=ts("transitionstart"),Hx=ts("transitioncancel"),jp=ts("transitionend"),Zp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function xi(e,i){Zp.set(e,i),R(i,[e])}var Kp=new WeakMap;function ci(e,i){if(typeof e=="object"&&e!==null){var s=Kp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Be(i)},Kp.set(e,i),i)}return{value:e,source:i,stack:Be(i)}}var ui=[],Hs=0,Ou=0;function bl(){for(var e=Hs,i=Ou=Hs=0;i<e;){var s=ui[i];ui[i++]=null;var o=ui[i];ui[i++]=null;var u=ui[i];ui[i++]=null;var m=ui[i];if(ui[i++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}m!==0&&Qp(s,u,m)}}function Al(e,i,s,o){ui[Hs++]=e,ui[Hs++]=i,ui[Hs++]=s,ui[Hs++]=o,Ou|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,i,s,o){return Al(e,i,s,o),Rl(e)}function Gs(e,i){return Al(e,null,null,i),Rl(e)}function Qp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,m=e.return;m!==null;)m.childLanes|=s,o=m.alternate,o!==null&&(o.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(u=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,u&&i!==null&&(u=31-zt(s),e=m.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),m):null}function Rl(e){if(50<No)throw No=0,kf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Vs={};function Gx(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,i,s,o){return new Gx(e,i,s,o)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,i){var s=e.alternate;return s===null?(s=Qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Jp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function wl(e,i,s,o,u,m){var E=0;if(o=e,typeof e=="function")Bu(e)&&(E=1);else if(typeof e=="string")E=ky(e,s,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Qn(31,s,i,u),e.elementType=w,e.lanes=m,e;case S:return es(s.children,u,m,i);case T:E=8,u|=24;break;case M:return e=Qn(12,s,i,u|2),e.elementType=M,e.lanes=m,e;case P:return e=Qn(13,s,i,u),e.elementType=P,e.lanes=m,e;case O:return e=Qn(19,s,i,u),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case L:E=10;break t;case U:E=9;break t;case C:E=11;break t;case F:E=14;break t;case V:E=16,o=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=Qn(E,s,i,u),i.elementType=e,i.type=o,i.lanes=m,i}function es(e,i,s,o){return e=Qn(7,e,o,i),e.lanes=s,e}function Iu(e,i,s){return e=Qn(6,e,null,i),e.lanes=s,e}function Fu(e,i,s){return i=Qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ks=[],Xs=0,Cl=null,Dl=0,fi=[],hi=0,ns=null,Yi=1,ji="";function is(e,i){ks[Xs++]=Dl,ks[Xs++]=Cl,Cl=e,Dl=i}function $p(e,i,s){fi[hi++]=Yi,fi[hi++]=ji,fi[hi++]=ns,ns=e;var o=Yi;e=ji;var u=32-zt(o)-1;o&=~(1<<u),s+=1;var m=32-zt(i)+u;if(30<m){var E=u-u%5;m=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Yi=1<<32-zt(i)+u|s<<u|o,ji=m+e}else Yi=1<<m|s<<u|o,ji=e}function Hu(e){e.return!==null&&(is(e,1),$p(e,1,0))}function Gu(e){for(;e===Cl;)Cl=ks[--Xs],ks[Xs]=null,Dl=ks[--Xs],ks[Xs]=null;for(;e===ns;)ns=fi[--hi],fi[hi]=null,ji=fi[--hi],fi[hi]=null,Yi=fi[--hi],fi[hi]=null}var In=null,en=null,Ue=!1,as=null,Ui=!1,Vu=Error(a(519));function ss(e){var i=Error(a(418,""));throw uo(ci(i,e)),Vu}function tm(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[pn]=e,i[$e]=o,s){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(s=0;s<Oo.length;s++)Ee(Oo[s],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),Bn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Me(i);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Ps(i,o.value,o.defaultValue,o.children),Me(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||v0(i.textContent,s)?(o.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),o.onScroll!=null&&Ee("scroll",i),o.onScrollEnd!=null&&Ee("scrollend",i),o.onClick!=null&&(i.onclick=uc),i=!0):i=!1,i||ss(e)}function em(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:In=In.return}}function lo(e){if(e!==In)return!1;if(!Ue)return em(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||sh(e.type,e.memoizedProps)),s=!s),s&&en&&ss(e),em(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){en=Mi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,La(e.type)?(e=ch,ch=null,en=e):en=i):en=In?Mi(e.stateNode.nextSibling):null;return!0}function co(){en=In=null,Ue=!1}function nm(){var e=as;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),as=null),e}function uo(e){as===null?as=[e]:as.push(e)}var ku=tt(null),rs=null,Zi=null;function va(e,i,s){Mt(ku,i._currentValue),i._currentValue=s}function Ki(e){e._currentValue=ku.current,xt(ku)}function Xu(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Wu(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var m=u.dependencies;if(m!==null){var E=u.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=u;for(var I=0;I<i.length;I++)if(A.context===i[I]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Xu(m.return,s,e),o||(E=null);break t}m=A.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Xu(E,s,e),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===e){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function fo(e,i,s,o){e=null;for(var u=i,m=!1;u!==null;){if(!m){if((u.flags&524288)!==0)m=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var A=u.type;Kn(u.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(E=u.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&Wu(i,e,s,o),i.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return im(rs,e)}function Ll(e,i){return rs===null&&os(e),im(e,i)}function im(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Zi===null){if(e===null)throw Error(a(308));Zi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Zi=Zi.next=i;return s}var Vx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},kx=r.unstable_scheduleCallback,Xx=r.unstable_NormalPriority,mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new Vx,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&kx(Xx,function(){e.controller.abort()})}var po=null,Yu=0,Ws=0,qs=null;function Wx(e,i){if(po===null){var s=po=[];Yu=0,Ws=Kf(),qs={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Yu++,i.then(am,am),i}function am(){if(--Yu===0&&po!==null){qs!==null&&(qs.status="fulfilled");var e=po;po=null,Ws=0,qs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function qx(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var sm=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Wx(e,i),sm!==null&&sm(e,i)};var ls=tt(null);function ju(){var e=ls.current;return e!==null?e:qe.pooledCache}function Nl(e,i){i===null?Mt(ls,ls.current):Mt(ls,i.pool)}function rm(){var e=ju();return e===null?null:{parent:mn._currentValue,pool:e}}var mo=Error(a(460)),om=Error(a(474)),Pl=Error(a(542)),Zu={then:function(){}};function lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ol(){}function cm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Ol,Ol),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,fm(e),e;default:if(typeof i.status=="string")i.then(Ol,Ol);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,fm(e),e}throw go=i,mo}}var go=null;function um(){if(go===null)throw Error(a(459));var e=go;return go=null,e}function fm(e){if(e===mo||e===Pl)throw Error(a(483))}var _a=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Rl(e),Qp(e,null,s),i}return Al(e,o,i,s),Rl(e)}function vo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Gt(e,s)}}function Ju(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?u=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?u=m=i:m=m.next=i}else u=m=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var $u=!1;function _o(){if($u){var e=qs;if(e!==null)throw e}}function xo(e,i,s,o){$u=!1;var u=e.updateQueue;_a=!1;var m=u.firstBaseUpdate,E=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,$=I.next;I.next=null,E===null?m=$:E.next=$,E=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==E&&(A===null?dt.firstBaseUpdate=$:A.next=$,dt.lastBaseUpdate=I))}if(m!==null){var gt=u.baseState;E=0,dt=$=I=null,A=m;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(be&at)===at:(o&at)===at){at!==0&&at===Ws&&($u=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var se=e,te=A;at=i;var He=s;switch(te.tag){case 1:if(se=te.payload,typeof se=="function"){gt=se.call(He,gt,at);break t}gt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=te.payload,at=typeof se=="function"?se.call(He,gt,at):se,at==null)break t;gt=g({},gt,at);break t;case 2:_a=!0}}at=A.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?($=dt=st,I=gt):dt=dt.next=st,E|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);dt===null&&(I=gt),u.baseState=I,u.firstBaseUpdate=$,u.lastBaseUpdate=dt,m===null&&(u.shared.lanes=0),wa|=E,e.lanes=E,e.memoizedState=gt}}function hm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function dm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)hm(s[e],i)}var Ys=tt(null),zl=tt(0);function pm(e,i){e=ia,Mt(zl,e),Mt(Ys,i),ia=e|i.baseLanes}function tf(){Mt(zl,ia),Mt(Ys,Ys.current)}function ef(){ia=zl.current,xt(Ys),xt(zl)}var Ma=0,_e=null,Ie=null,cn=null,Bl=!1,js=!1,cs=!1,Il=0,yo=0,Zs=null,Yx=0;function an(){throw Error(a(321))}function nf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function af(e,i,s,o,u,m){return Ma=m,_e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Qm:Jm,cs=!1,m=s(o,u),cs=!1,js&&(m=gm(i,s,o,u)),mm(e),m}function mm(e){B.H=Xl;var i=Ie!==null&&Ie.next!==null;if(Ma=0,cn=Ie=_e=null,Bl=!1,yo=0,Zs=null,i)throw Error(a(300));e===null||Sn||(e=e.dependencies,e!==null&&Ul(e)&&(Sn=!0))}function gm(e,i,s,o){_e=e;var u=0;do{if(js&&(Zs=null),yo=0,js=!1,25<=u)throw Error(a(301));if(u+=1,cn=Ie=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=ty,m=i(s,o)}while(js);return m}function jx(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Mo(i):i,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),i}function sf(){var e=Il!==0;return Il=0,e}function rf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function of(e){if(Bl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bl=!1}Ma=0,cn=Ie=_e=null,js=!1,yo=Il=0,Zs=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?_e.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=cn===null?_e.memoizedState:cn.next;if(i!==null)cn=i,Ie=e;else{if(e===null)throw _e.alternate===null?Error(a(467)):Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?_e.memoizedState=cn=e:cn=cn.next=e}return cn}function lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var i=yo;return yo+=1,Zs===null&&(Zs=[]),e=cm(Zs,e,i),i=_e,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Qm:Jm),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===L)return Ln(e)}throw Error(a(438,String(e)))}function cf(e){var i=null,s=_e.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=lf(),_e.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=D;return i.index++,s}function Qi(e,i){return typeof i=="function"?i(e):i}function Hl(e){var i=un();return uf(i,Ie,e)}function uf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=e.baseQueue,m=o.pending;if(m!==null){if(u!==null){var E=u.next;u.next=m.next,m.next=E}i.baseQueue=u=m,o.pending=null}if(m=e.baseState,u===null)e.memoizedState=m;else{i=u.next;var A=E=null,I=null,$=i,dt=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(be&gt)===gt:(Ma&gt)===gt){var at=$.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Ws&&(dt=!0);else if((Ma&at)===at){$=$.next,at===Ws&&(dt=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=gt,E=m):I=I.next=gt,_e.lanes|=at,wa|=at;gt=$.action,cs&&s(m,gt),m=$.hasEagerState?$.eagerState:s(m,gt)}else at={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=at,E=m):I=I.next=at,_e.lanes|=gt,wa|=gt;$=$.next}while($!==null&&$!==i);if(I===null?E=m:I.next=A,!Kn(m,e.memoizedState)&&(Sn=!0,dt&&(s=qs,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=I,o.lastRenderedState=m}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ff(e){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,m=i.memoizedState;if(u!==null){s.pending=null;var E=u=u.next;do m=e(m,E.action),E=E.next;while(E!==u);Kn(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,o]}function vm(e,i,s){var o=_e,u=un(),m=Ue;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Kn((Ie||u).memoizedState,s);E&&(u.memoizedState=s,Sn=!0),u=u.queue;var A=ym.bind(null,o,u,e);if(So(2048,8,A,[e]),u.getSnapshot!==i||E||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Ks(9,Gl(),xm.bind(null,o,u,s,i),null),qe===null)throw Error(a(349));m||(Ma&124)!==0||_m(o,i,s)}return s}function _m(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=_e.updateQueue,i===null?(i=lf(),_e.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function xm(e,i,s,o){i.value=s,i.getSnapshot=o,Mm(i)&&Sm(e)}function ym(e,i,s){return s(function(){Mm(i)&&Sm(e)})}function Mm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function Sm(e){var i=Gs(e,2);i!==null&&ni(i,e,2)}function hf(e){var i=Xn();if(typeof e=="function"){var s=e;if(e=s(),cs){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},i}function Em(e,i,s,o){return e.baseState=s,uf(e,Ie,typeof o=="function"?o:Qi)}function Zx(e,i,s,o,u){if(kl(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,o(m),s=i.pending,s===null?(m.next=i.pending=m,Tm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Tm(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var m=B.T,E={};B.T=E;try{var A=s(u,o),I=B.S;I!==null&&I(E,A),bm(e,i,A)}catch($){df(e,i,$)}finally{B.T=m}}else try{m=s(u,o),bm(e,i,m)}catch($){df(e,i,$)}}function bm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Am(e,i,o)},function(o){return df(e,i,o)}):Am(e,i,s)}function Am(e,i,s){i.status="fulfilled",i.value=s,Rm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Tm(e,s)))}function df(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Rm(i),i=i.next;while(i!==o)}e.action=null}function Rm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function wm(e,i){return i}function Cm(e,i){if(Ue){var s=qe.formState;if(s!==null){t:{var o=_e;if(Ue){if(en){e:{for(var u=en,m=Ui;u.nodeType!==8;){if(!m){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}m=u.data,u=m==="F!"||m==="F"?u:null}if(u){en=Mi(u.nextSibling),o=u.data==="F!";break t}}ss(o)}o=!1}o&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wm,lastRenderedState:i},s.queue=o,s=jm.bind(null,_e,o),o.dispatch=s,o=hf(!1),m=_f.bind(null,_e,!1,o.queue),o=Xn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=Zx.bind(null,_e,u,m,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function Dm(e){var i=un();return Um(i,Ie,e)}function Um(e,i,s){if(i=uf(e,i,wm)[0],e=Hl(Qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Mo(i)}catch(E){throw E===mo?Pl:E}else o=i;i=un();var u=i.queue,m=u.dispatch;return s!==i.memoizedState&&(_e.flags|=2048,Ks(9,Gl(),Kx.bind(null,u,s),null)),[o,m,e]}function Kx(e,i){e.action=i}function Lm(e){var i=un(),s=Ie;if(s!==null)return Um(i,s,e);un(),i=i.memoizedState,s=un();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function Ks(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=_e.updateQueue,i===null&&(i=lf(),_e.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Gl(){return{destroy:void 0,resource:void 0}}function Nm(){return un().memoizedState}function Vl(e,i,s,o){var u=Xn();o=o===void 0?null:o,_e.flags|=e,u.memoizedState=Ks(1|i,Gl(),s,o)}function So(e,i,s,o){var u=un();o=o===void 0?null:o;var m=u.memoizedState.inst;Ie!==null&&o!==null&&nf(o,Ie.memoizedState.deps)?u.memoizedState=Ks(i,m,s,o):(_e.flags|=e,u.memoizedState=Ks(1|i,m,s,o))}function Pm(e,i){Vl(8390656,8,e,i)}function Om(e,i){So(2048,8,e,i)}function zm(e,i){return So(4,2,e,i)}function Bm(e,i){return So(4,4,e,i)}function Im(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Fm(e,i,s){s=s!=null?s.concat([e]):null,So(4,4,Im.bind(null,i,e),s)}function pf(){}function Hm(e,i){var s=un();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&nf(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Gm(e,i){var s=un();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&nf(i,o[1]))return o[0];if(o=e(),cs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[o,i],o}function mf(e,i,s){return s===void 0||(Ma&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Xg(),_e.lanes|=e,wa|=e,s)}function Vm(e,i,s,o){return Kn(s,i)?s:Ys.current!==null?(e=mf(e,s,o),Kn(e,i)||(Sn=!0),e):(Ma&42)===0?(Sn=!0,e.memoizedState=s):(e=Xg(),_e.lanes|=e,wa|=e,i)}function km(e,i,s,o,u){var m=nt.p;nt.p=m!==0&&8>m?m:8;var E=B.T,A={};B.T=A,_f(e,!1,i,s);try{var I=u(),$=B.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=qx(I,o);Eo(e,i,dt,ei(e))}else Eo(e,i,o,ei(e))}catch(gt){Eo(e,i,{then:function(){},status:"rejected",reason:gt},ei())}finally{nt.p=m,B.T=E}}function Qx(){}function gf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var u=Xm(e).queue;km(e,u,i,j,s===null?Qx:function(){return Wm(e),s(o)})}function Xm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Wm(e){var i=Xm(e).next.queue;Eo(e,i,{},ei())}function vf(){return Ln(Go)}function qm(){return un().memoizedState}function Ym(){return un().memoizedState}function Jx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ei();e=xa(s);var o=ya(i,e,s);o!==null&&(ni(o,i,s),vo(o,i,s)),i={cache:qu()},e.payload=i;return}i=i.return}}function $x(e,i,s){var o=ei();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},kl(e)?Zm(i,s):(s=zu(e,i,s,o),s!==null&&(ni(s,e,o),Km(s,i,o)))}function jm(e,i,s){var o=ei();Eo(e,i,s,o)}function Eo(e,i,s,o){var u={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(kl(e))Zm(i,u);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,A=m(E,s);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,E))return Al(e,i,u,0),qe===null&&bl(),!1}catch{}finally{}if(s=zu(e,i,u,o),s!==null)return ni(s,e,o),Km(s,i,o),!0}return!1}function _f(e,i,s,o){if(o={lane:2,revertLane:Kf(),action:o,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(i)throw Error(a(479))}else i=zu(e,s,o,2),i!==null&&ni(i,e,2)}function kl(e){var i=e.alternate;return e===_e||i!==null&&i===_e}function Zm(e,i){js=Bl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Km(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Gt(e,s)}}var Xl={readContext:Ln,use:Fl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Qm={readContext:Ln,use:Fl,useCallback:function(e,i){return Xn().memoizedState=[e,i===void 0?null:i],e},useContext:Ln,useEffect:Pm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Vl(4194308,4,Im.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Vl(4194308,4,e,i)},useInsertionEffect:function(e,i){Vl(4,2,e,i)},useMemo:function(e,i){var s=Xn();i=i===void 0?null:i;var o=e();if(cs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Xn();if(s!==void 0){var u=s(i);if(cs){ct(!0);try{s(i)}finally{ct(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=$x.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var i=Xn();return e={current:e},i.memoizedState=e},useState:function(e){e=hf(e);var i=e.queue,s=jm.bind(null,_e,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:pf,useDeferredValue:function(e,i){var s=Xn();return mf(s,e,i)},useTransition:function(){var e=hf(!1);return e=km.bind(null,_e,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=_e,u=Xn();if(Ue){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(be&124)!==0||_m(o,i,s)}u.memoizedState=s;var m={value:s,getSnapshot:i};return u.queue=m,Pm(ym.bind(null,o,m,e),[e]),o.flags|=2048,Ks(9,Gl(),xm.bind(null,o,m,s,i),null),s},useId:function(){var e=Xn(),i=qe.identifierPrefix;if(Ue){var s=ji,o=Yi;s=(o&~(1<<32-zt(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Il++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Yx++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:vf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e){var i=Xn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=_f.bind(null,_e,!0,s),s.dispatch=i,[e,i]},useMemoCache:cf,useCacheRefresh:function(){return Xn().memoizedState=Jx.bind(null,_e)}},Jm={readContext:Ln,use:Fl,useCallback:Hm,useContext:Ln,useEffect:Om,useImperativeHandle:Fm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Gm,useReducer:Hl,useRef:Nm,useState:function(){return Hl(Qi)},useDebugValue:pf,useDeferredValue:function(e,i){var s=un();return Vm(s,Ie.memoizedState,e,i)},useTransition:function(){var e=Hl(Qi)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Mo(e),i]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:vf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,i){var s=un();return Em(s,Ie,e,i)},useMemoCache:cf,useCacheRefresh:Ym},ty={readContext:Ln,use:Fl,useCallback:Hm,useContext:Ln,useEffect:Om,useImperativeHandle:Fm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Gm,useReducer:ff,useRef:Nm,useState:function(){return ff(Qi)},useDebugValue:pf,useDeferredValue:function(e,i){var s=un();return Ie===null?mf(s,e,i):Vm(s,Ie.memoizedState,e,i)},useTransition:function(){var e=ff(Qi)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Mo(e),i]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:vf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,i){var s=un();return Ie!==null?Em(s,Ie,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:cf,useCacheRefresh:Ym},Qs=null,To=0;function Wl(e){var i=To;return To+=1,Qs===null&&(Qs=[]),cm(Qs,e,i)}function bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ql(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function $m(e){var i=e._init;return i(e._payload)}function tg(e){function i(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function s(Y,k){if(!e)return null;for(;k!==null;)i(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=qi(Y,k),Y.index=0,Y.sibling=null,Y}function m(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function E(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,J,pt){return k===null||k.tag!==6?(k=Iu(J,Y.mode,pt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function I(Y,k,J,pt){var Ft=J.type;return Ft===S?dt(Y,k,J.props.children,pt,J.key):k!==null&&(k.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===V&&$m(Ft)===k.type)?(k=u(k,J.props),bo(k,J),k.return=Y,k):(k=wl(J.type,J.key,J.props,null,Y.mode,pt),bo(k,J),k.return=Y,k)}function $(Y,k,J,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Fu(J,Y.mode,pt),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function dt(Y,k,J,pt,Ft){return k===null||k.tag!==7?(k=es(J,Y.mode,pt,Ft),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function gt(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Iu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return J=wl(k.type,k.key,k.props,null,Y.mode,J),bo(J,k),J.return=Y,J;case x:return k=Fu(k,Y.mode,J),k.return=Y,k;case V:var pt=k._init;return k=pt(k._payload),gt(Y,k,J)}if(ft(k)||Z(k))return k=es(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return gt(Y,Wl(k),J);if(k.$$typeof===L)return gt(Y,Ll(Y,k),J);ql(Y,k)}return null}function at(Y,k,J,pt){var Ft=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:A(Y,k,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Ft?I(Y,k,J,pt):null;case x:return J.key===Ft?$(Y,k,J,pt):null;case V:return Ft=J._init,J=Ft(J._payload),at(Y,k,J,pt)}if(ft(J)||Z(J))return Ft!==null?null:dt(Y,k,J,pt,null);if(typeof J.then=="function")return at(Y,k,Wl(J),pt);if(J.$$typeof===L)return at(Y,k,Ll(Y,J),pt);ql(Y,J)}return null}function st(Y,k,J,pt,Ft){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,A(k,Y,""+pt,Ft);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case _:return Y=Y.get(pt.key===null?J:pt.key)||null,I(k,Y,pt,Ft);case x:return Y=Y.get(pt.key===null?J:pt.key)||null,$(k,Y,pt,Ft);case V:var xe=pt._init;return pt=xe(pt._payload),st(Y,k,J,pt,Ft)}if(ft(pt)||Z(pt))return Y=Y.get(J)||null,dt(k,Y,pt,Ft,null);if(typeof pt.then=="function")return st(Y,k,J,Wl(pt),Ft);if(pt.$$typeof===L)return st(Y,k,J,Ll(k,pt),Ft);ql(k,pt)}return null}function se(Y,k,J,pt){for(var Ft=null,xe=null,Zt=k,ne=k=0,Tn=null;Zt!==null&&ne<J.length;ne++){Zt.index>ne?(Tn=Zt,Zt=null):Tn=Zt.sibling;var De=at(Y,Zt,J[ne],pt);if(De===null){Zt===null&&(Zt=Tn);break}e&&Zt&&De.alternate===null&&i(Y,Zt),k=m(De,k,ne),xe===null?Ft=De:xe.sibling=De,xe=De,Zt=Tn}if(ne===J.length)return s(Y,Zt),Ue&&is(Y,ne),Ft;if(Zt===null){for(;ne<J.length;ne++)Zt=gt(Y,J[ne],pt),Zt!==null&&(k=m(Zt,k,ne),xe===null?Ft=Zt:xe.sibling=Zt,xe=Zt);return Ue&&is(Y,ne),Ft}for(Zt=o(Zt);ne<J.length;ne++)Tn=st(Zt,Y,ne,J[ne],pt),Tn!==null&&(e&&Tn.alternate!==null&&Zt.delete(Tn.key===null?ne:Tn.key),k=m(Tn,k,ne),xe===null?Ft=Tn:xe.sibling=Tn,xe=Tn);return e&&Zt.forEach(function(Ba){return i(Y,Ba)}),Ue&&is(Y,ne),Ft}function te(Y,k,J,pt){if(J==null)throw Error(a(151));for(var Ft=null,xe=null,Zt=k,ne=k=0,Tn=null,De=J.next();Zt!==null&&!De.done;ne++,De=J.next()){Zt.index>ne?(Tn=Zt,Zt=null):Tn=Zt.sibling;var Ba=at(Y,Zt,De.value,pt);if(Ba===null){Zt===null&&(Zt=Tn);break}e&&Zt&&Ba.alternate===null&&i(Y,Zt),k=m(Ba,k,ne),xe===null?Ft=Ba:xe.sibling=Ba,xe=Ba,Zt=Tn}if(De.done)return s(Y,Zt),Ue&&is(Y,ne),Ft;if(Zt===null){for(;!De.done;ne++,De=J.next())De=gt(Y,De.value,pt),De!==null&&(k=m(De,k,ne),xe===null?Ft=De:xe.sibling=De,xe=De);return Ue&&is(Y,ne),Ft}for(Zt=o(Zt);!De.done;ne++,De=J.next())De=st(Zt,Y,ne,De.value,pt),De!==null&&(e&&De.alternate!==null&&Zt.delete(De.key===null?ne:De.key),k=m(De,k,ne),xe===null?Ft=De:xe.sibling=De,xe=De);return e&&Zt.forEach(function(eM){return i(Y,eM)}),Ue&&is(Y,ne),Ft}function He(Y,k,J,pt){if(typeof J=="object"&&J!==null&&J.type===S&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:t:{for(var Ft=J.key;k!==null;){if(k.key===Ft){if(Ft=J.type,Ft===S){if(k.tag===7){s(Y,k.sibling),pt=u(k,J.props.children),pt.return=Y,Y=pt;break t}}else if(k.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===V&&$m(Ft)===k.type){s(Y,k.sibling),pt=u(k,J.props),bo(pt,J),pt.return=Y,Y=pt;break t}s(Y,k);break}else i(Y,k);k=k.sibling}J.type===S?(pt=es(J.props.children,Y.mode,pt,J.key),pt.return=Y,Y=pt):(pt=wl(J.type,J.key,J.props,null,Y.mode,pt),bo(pt,J),pt.return=Y,Y=pt)}return E(Y);case x:t:{for(Ft=J.key;k!==null;){if(k.key===Ft)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){s(Y,k.sibling),pt=u(k,J.children||[]),pt.return=Y,Y=pt;break t}else{s(Y,k);break}else i(Y,k);k=k.sibling}pt=Fu(J,Y.mode,pt),pt.return=Y,Y=pt}return E(Y);case V:return Ft=J._init,J=Ft(J._payload),He(Y,k,J,pt)}if(ft(J))return se(Y,k,J,pt);if(Z(J)){if(Ft=Z(J),typeof Ft!="function")throw Error(a(150));return J=Ft.call(J),te(Y,k,J,pt)}if(typeof J.then=="function")return He(Y,k,Wl(J),pt);if(J.$$typeof===L)return He(Y,k,Ll(Y,J),pt);ql(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(s(Y,k.sibling),pt=u(k,J),pt.return=Y,Y=pt):(s(Y,k),pt=Iu(J,Y.mode,pt),pt.return=Y,Y=pt),E(Y)):s(Y,k)}return function(Y,k,J,pt){try{To=0;var Ft=He(Y,k,J,pt);return Qs=null,Ft}catch(Zt){if(Zt===mo||Zt===Pl)throw Zt;var xe=Qn(29,Zt,null,Y.mode);return xe.lanes=pt,xe.return=Y,xe}finally{}}}var Js=tg(!0),eg=tg(!1),di=tt(null),Li=null;function Sa(e){var i=e.alternate;Mt(gn,gn.current&1),Mt(di,e),Li===null&&(i===null||Ys.current!==null||i.memoizedState!==null)&&(Li=e)}function ng(e){if(e.tag===22){if(Mt(gn,gn.current),Mt(di,e),Li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Li=e)}}else Ea()}function Ea(){Mt(gn,gn.current),Mt(di,di.current)}function Ji(e){xt(di),Li===e&&(Li=null),xt(gn)}var gn=tt(0);function Yl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||lh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function xf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var yf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=ei(),u=xa(o);u.payload=i,s!=null&&(u.callback=s),i=ya(e,u,o),i!==null&&(ni(i,e,o),vo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=ei(),u=xa(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=ya(e,u,o),i!==null&&(ni(i,e,o),vo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ei(),o=xa(s);o.tag=2,i!=null&&(o.callback=i),i=ya(e,o,s),i!==null&&(ni(i,e,s),vo(i,e,s))}};function ig(e,i,s,o,u,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,m,E):i.prototype&&i.prototype.isPureReactComponent?!ro(s,o)||!ro(u,m):!0}function ag(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&yf.enqueueReplaceState(i,i.state,null)}function us(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sg(e){jl(e)}function rg(e){console.error(e)}function og(e){jl(e)}function Zl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function lg(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,i,s){return s=xa(s),s.tag=3,s.payload={element:null},s.callback=function(){Zl(e,i)},s}function cg(e){return e=xa(e),e.tag=3,e}function ug(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var m=o.value;e.payload=function(){return u(m)},e.callback=function(){lg(i,s,o)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){lg(i,s,o),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ey(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&fo(i,s,u,!0),s=di.current,s!==null){switch(s.tag){case 13:return Li===null?Wf():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Zu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Yf(e,o,u)),!1;case 22:return s.flags|=65536,o===Zu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Yf(e,o,u)),!1}throw Error(a(435,s.tag))}return Yf(e,o,u),Wf(),!1}if(Ue)return i=di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Vu&&(e=Error(a(422),{cause:o}),uo(ci(e,s)))):(o!==Vu&&(i=Error(a(423),{cause:o}),uo(ci(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,s),u=Mf(e.stateNode,o,u),Ju(e,u),nn!==4&&(nn=2)),!1;var m=Error(a(520),{cause:o});if(m=ci(m,s),Lo===null?Lo=[m]:Lo.push(m),nn!==4&&(nn=2),i===null)return!0;o=ci(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=Mf(s.stateNode,o,e),Ju(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ca===null||!Ca.has(m))))return s.flags|=65536,u&=-u,s.lanes|=u,u=cg(u),ug(u,e,s,o),Ju(s,u),!1}s=s.return}while(s!==null);return!1}var fg=Error(a(461)),Sn=!1;function Rn(e,i,s,o){i.child=e===null?eg(i,null,s,o):Js(i,e.child,s,o)}function hg(e,i,s,o,u){s=s.render;var m=i.ref;if("ref"in o){var E={};for(var A in o)A!=="ref"&&(E[A]=o[A])}else E=o;return os(i),o=af(e,i,s,E,m,u),A=sf(),e!==null&&!Sn?(rf(e,i,u),$i(e,i,u)):(Ue&&A&&Hu(i),i.flags|=1,Rn(e,i,o,u),i.child)}function dg(e,i,s,o,u){if(e===null){var m=s.type;return typeof m=="function"&&!Bu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,pg(e,i,m,o,u)):(e=wl(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Cf(e,u)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(E,o)&&e.ref===i.ref)return $i(e,i,u)}return i.flags|=1,e=qi(m,o),e.ref=i.ref,e.return=i,i.child=e}function pg(e,i,s,o,u){if(e!==null){var m=e.memoizedProps;if(ro(m,o)&&e.ref===i.ref)if(Sn=!1,i.pendingProps=o=m,Cf(e,u))(e.flags&131072)!==0&&(Sn=!0);else return i.lanes=e.lanes,$i(e,i,u)}return Sf(e,i,s,o,u)}function mg(e,i,s){var o=i.pendingProps,u=o.children,m=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,m=0;u!==null;)m=m|u.lanes|u.childLanes,u=u.sibling;i.childLanes=m&~o}else i.childLanes=0,i.child=null;return gg(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(i,m!==null?m.cachePool:null),m!==null?pm(i,m):tf(),ng(i);else return i.lanes=i.childLanes=536870912,gg(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Nl(i,m.cachePool),pm(i,m),Ea(),i.memoizedState=null):(e!==null&&Nl(i,null),tf(),Ea());return Rn(e,i,u,s),i.child}function gg(e,i,s,o){var u=ju();return u=u===null?null:{parent:mn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&Nl(i,null),tf(),ng(i),e!==null&&fo(e,i,o,!0),null}function Kl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Sf(e,i,s,o,u){return os(i),s=af(e,i,s,o,void 0,u),o=sf(),e!==null&&!Sn?(rf(e,i,u),$i(e,i,u)):(Ue&&o&&Hu(i),i.flags|=1,Rn(e,i,s,u),i.child)}function vg(e,i,s,o,u,m){return os(i),i.updateQueue=null,s=gm(i,o,s,u),mm(e),o=sf(),e!==null&&!Sn?(rf(e,i,m),$i(e,i,m)):(Ue&&o&&Hu(i),i.flags|=1,Rn(e,i,s,m),i.child)}function _g(e,i,s,o,u){if(os(i),i.stateNode===null){var m=Vs,E=s.contextType;typeof E=="object"&&E!==null&&(m=Ln(E)),m=new s(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},Ku(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Ln(E):Vs,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(xf(i,s,E,o),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&yf.enqueueReplaceState(m,m.state,null),xo(i,o,m,u),_o(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){m=i.stateNode;var A=i.memoizedProps,I=us(s,A);m.props=I;var $=m.context,dt=s.contextType;E=Vs,typeof dt=="object"&&dt!==null&&(E=Ln(dt));var gt=s.getDerivedStateFromProps;dt=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||$!==E)&&ag(i,m,o,E),_a=!1;var at=i.memoizedState;m.state=at,xo(i,o,m,u),_o(),$=i.memoizedState,A||at!==$||_a?(typeof gt=="function"&&(xf(i,s,gt,o),$=i.memoizedState),(I=_a||ig(i,s,I,o,at,$,E))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=$),m.props=o,m.state=$,m.context=E,o=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,Qu(e,i),E=i.memoizedProps,dt=us(s,E),m.props=dt,gt=i.pendingProps,at=m.context,$=s.contextType,I=Vs,typeof $=="object"&&$!==null&&(I=Ln($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==gt||at!==I)&&ag(i,m,o,I),_a=!1,at=i.memoizedState,m.state=at,xo(i,o,m,u),_o();var st=i.memoizedState;E!==gt||at!==st||_a||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof A=="function"&&(xf(i,s,A,o),st=i.memoizedState),(dt=_a||ig(i,s,dt,o,at,st,I)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,st,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,st,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=st),m.props=o,m.state=st,m.context=I,o=dt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return m=o,Kl(e,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&o?(i.child=Js(i,e.child,null,u),i.child=Js(i,null,s,u)):Rn(e,i,s,u),i.memoizedState=m.state,e=i.child):e=$i(e,i,u),e}function xg(e,i,s,o){return co(),i.flags|=256,Rn(e,i,s,o),i.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(e){return{baseLanes:e,cachePool:rm()}}function bf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=pi),e}function yg(e,i,s){var o=i.pendingProps,u=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(u?Sa(i):Ea(),Ue){var A=en,I;if(I=A){t:{for(I=A,A=Ui;I.nodeType!==8;){if(!A){A=null;break t}if(I=Mi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:ns!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},I=Qn(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,In=i,en=null,I=!0):I=!1}I||ss(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return lh(A)?i.lanes=32:i.lanes=536870912,null;Ji(i)}return A=o.children,o=o.fallback,u?(Ea(),u=i.mode,A=Ql({mode:"hidden",children:A},u),o=es(o,u,s,null),A.return=i,o.return=i,A.sibling=o,i.child=A,u=i.child,u.memoizedState=Tf(s),u.childLanes=bf(e,E,s),i.memoizedState=Ef,o):(Sa(i),Af(i,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(m)i.flags&256?(Sa(i),i.flags&=-257,i=Rf(e,i,s)):i.memoizedState!==null?(Ea(),i.child=e.child,i.flags|=128,i=null):(Ea(),u=o.fallback,A=i.mode,o=Ql({mode:"visible",children:o.children},A),u=es(u,A,s,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,Js(i,e.child,null,s),o=i.child,o.memoizedState=Tf(s),o.childLanes=bf(e,E,s),i.memoizedState=Ef,i=u);else if(Sa(i),lh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var $=E.dgst;E=$,o=Error(a(419)),o.stack="",o.digest=E,uo({value:o,source:null,stack:null}),i=Rf(e,i,s)}else if(Sn||fo(e,i,s,!1),E=(s&e.childLanes)!==0,Sn||E){if(E=qe,E!==null&&(o=s&-s,o=(o&42)!==0?1:re(o),o=(o&(E.suspendedLanes|s))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Gs(e,o),ni(E,e,o),fg;A.data==="$?"||Wf(),i=Rf(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,en=Mi(A.nextSibling),In=i,Ue=!0,as=null,Ui=!1,e!==null&&(fi[hi++]=Yi,fi[hi++]=ji,fi[hi++]=ns,Yi=e.id,ji=e.overflow,ns=i),i=Af(i,o.children),i.flags|=4096);return i}return u?(Ea(),u=o.fallback,A=i.mode,I=e.child,$=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?u=qi($,u):(u=es(u,A,s,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,A=e.child.memoizedState,A===null?A=Tf(s):(I=A.cachePool,I!==null?($=mn._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=rm(),A={baseLanes:A.baseLanes|s,cachePool:I}),u.memoizedState=A,u.childLanes=bf(e,E,s),i.memoizedState=Ef,o):(Sa(i),s=e.child,e=s.sibling,s=qi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Af(e,i){return i=Ql({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ql(e,i){return e=Qn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rf(e,i,s){return Js(i,e.child,null,s),e=Af(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Mg(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Xu(e.return,i,s)}function wf(e,i,s,o,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=s,m.tailMode=u)}function Sg(e,i,s){var o=i.pendingProps,u=o.revealOrder,m=o.tail;if(Rn(e,i,o.children,s),o=gn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,s,i);else if(e.tag===19)Mg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(gn,o),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Yl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),wf(i,!1,u,s,m);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Yl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}wf(i,!0,s,null,m);break;case"together":wf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),wa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(fo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=qi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=qi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Cf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function ny(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),va(i,mn,e.memoizedState.cache),co();break;case 27:case 5:Yt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:va(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?yg(e,i,s):(Sa(i),e=$i(e,i,s),e!==null?e.sibling:null);Sa(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(fo(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return Sg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(gn,gn.current),o)break;return null;case 22:case 23:return i.lanes=0,mg(e,i,s);case 24:va(i,mn,e.memoizedState.cache)}return $i(e,i,s)}function Eg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Sn=!0;else{if(!Cf(e,s)&&(i.flags&128)===0)return Sn=!1,ny(e,i,s);Sn=(e.flags&131072)!==0}else Sn=!1,Ue&&(i.flags&1048576)!==0&&$p(i,Dl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")Bu(o)?(e=us(o,e),i.tag=1,i=_g(null,i,o,e,s)):(i.tag=0,i=Sf(null,i,o,e,s));else{if(o!=null){if(u=o.$$typeof,u===C){i.tag=11,i=hg(null,i,o,e,s);break t}else if(u===F){i.tag=14,i=dg(null,i,o,e,s);break t}}throw i=ut(o)||o,Error(a(306,i,""))}}return i;case 0:return Sf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=us(o,i.pendingProps),_g(e,i,o,u,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var m=i.memoizedState;u=m.element,Qu(e,i),xo(i,o,null,s);var E=i.memoizedState;if(o=E.cache,va(i,mn,o),o!==m.cache&&Wu(i,[mn],s,!0),_o(),o=E.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=xg(e,i,o,s);break t}else if(o!==u){u=ci(Error(a(424)),i),uo(u),i=xg(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Mi(e.firstChild),In=i,Ue=!0,as=null,Ui=!0,s=eg(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(co(),o===u){i=$i(e,i,s);break t}Rn(e,i,o,s)}i=i.child}return i;case 26:return Kl(e,i),e===null?(s=R0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,o=fc(it.current).createElement(s),o[pn]=i,o[$e]=e,Cn(o,s,e),ln(o),i.stateNode=o):i.memoizedState=R0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&Ue&&(o=i.stateNode=T0(i.type,i.pendingProps,it.current),In=i,Ui=!0,u=en,La(i.type)?(ch=u,en=Mi(o.firstChild)):en=u),Rn(e,i,i.pendingProps.children,s),Kl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((u=o=en)&&(o=Dy(o,i.type,i.pendingProps,Ui),o!==null?(i.stateNode=o,In=i,en=Mi(o.firstChild),Ui=!1,u=!0):u=!1),u||ss(i)),Yt(i),u=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,o=m.children,sh(u,m)?o=null:E!==null&&sh(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=af(e,i,jx,null,null,s),Go._currentValue=u),Kl(e,i),Rn(e,i,o,s),i.child;case 6:return e===null&&Ue&&((e=s=en)&&(s=Uy(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,In=i,en=null,e=!0):e=!1),e||ss(i)),null;case 13:return yg(e,i,s);case 4:return At(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Js(i,null,o,s):Rn(e,i,o,s),i.child;case 11:return hg(e,i,i.type,i.pendingProps,s);case 7:return Rn(e,i,i.pendingProps,s),i.child;case 8:return Rn(e,i,i.pendingProps.children,s),i.child;case 12:return Rn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,va(i,i.type,o.value),Rn(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,os(i),u=Ln(u),o=o(u),i.flags|=1,Rn(e,i,o,s),i.child;case 14:return dg(e,i,i.type,i.pendingProps,s);case 15:return pg(e,i,i.type,i.pendingProps,s);case 19:return Sg(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=Ql(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=qi(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return mg(e,i,s);case 24:return os(i),o=Ln(mn),e===null?(u=ju(),u===null&&(u=qe,m=qu(),u.pooledCache=m,m.refCount++,m!==null&&(u.pooledCacheLanes|=s),u=m),i.memoizedState={parent:o,cache:u},Ku(i),va(i,mn,u)):((e.lanes&s)!==0&&(Qu(e,i),xo(i,null,null,s),_o()),u=e.memoizedState,m=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),va(i,mn,o)):(o=m.cache,va(i,mn,o),o!==u.cache&&Wu(i,[mn],s,!0))),Rn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ta(e){e.flags|=4}function Tg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!L0(i)){if(i=di.current,i!==null&&((be&4194048)===be?Li!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Li))throw go=Zu,om;e.flags|=8192}}function Jl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,nr|=i)}function Ao(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function iy(e,i,s){var o=i.pendingProps;switch(Gu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ki(mn),Qt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(lo(i)?ta(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,nm())),Je(i),null;case 26:return s=i.memoizedState,e===null?(ta(i),s!==null?(Je(i),Tg(i,s)):(Je(i),i.flags&=-16777217)):s?s!==e.memoizedState?(ta(i),Je(i),Tg(i,s)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==o&&ta(i),Je(i),i.flags&=-16777217),null;case 27:ve(i),s=it.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ta(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Ut.current,lo(i)?tm(i):(e=T0(u,o,s),i.stateNode=e,ta(i))}return Je(i),null;case 5:if(ve(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ta(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(e=Ut.current,lo(i))tm(i);else{switch(u=fc(it.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(s,{is:o.is}):u.createElement(s)}}e[pn]=i,e[$e]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(Cn(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ta(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ta(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,lo(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[pn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||v0(e.nodeValue,s)),e||ss(i)}else e=fc(e).createTextNode(o),e[pn]=i,i.stateNode=e}return Je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=lo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[pn]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),u=!1}else u=nm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Ji(i),i):(Ji(i),null)}if(Ji(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var m=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==u&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Jl(i,i.updateQueue),Je(i),null;case 4:return Qt(),e===null&&th(i.stateNode.containerInfo),Je(i),null;case 10:return Ki(i.type),Je(i),null;case 19:if(xt(gn),u=i.memoizedState,u===null)return Je(i),null;if(o=(i.flags&128)!==0,m=u.rendering,m===null)if(o)Ao(u,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Yl(e),m!==null){for(i.flags|=128,Ao(u,!1),e=m.updateQueue,i.updateQueue=e,Jl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Jp(s,e),s=s.sibling;return Mt(gn,gn.current&1|2),i.child}e=e.sibling}u.tail!==null&&Ot()>ec&&(i.flags|=128,o=!0,Ao(u,!1),i.lanes=4194304)}else{if(!o)if(e=Yl(m),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Jl(i,e),Ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Ue)return Je(i),null}else 2*Ot()-u.renderingStartTime>ec&&s!==536870912&&(i.flags|=128,o=!0,Ao(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Ot(),i.sibling=null,e=gn.current,Mt(gn,o?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return Ji(i),ef(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&Jl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&xt(ls),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ki(mn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function ay(e,i){switch(Gu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ki(mn),Qt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ve(i),null;case 13:if(Ji(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));co()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return xt(gn),null;case 4:return Qt(),null;case 10:return Ki(i.type),null;case 22:case 23:return Ji(i),ef(),e!==null&&xt(ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ki(mn),null;case 25:return null;default:return null}}function bg(e,i){switch(Gu(i),i.tag){case 3:Ki(mn),Qt();break;case 26:case 27:case 5:ve(i);break;case 4:Qt();break;case 13:Ji(i);break;case 19:xt(gn);break;case 10:Ki(i.type);break;case 22:case 23:Ji(i),ef(),e!==null&&xt(ls);break;case 24:Ki(mn)}}function Ro(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var m=s.create,E=s.inst;o=m(),E.destroy=o}s=s.next}while(s!==u)}}catch(A){ke(i,i.return,A)}}function Ta(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var m=u.next;o=m;do{if((o.tag&e)===e){var E=o.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,u=i;var I=s,$=A;try{$()}catch(dt){ke(u,I,dt)}}}o=o.next}while(o!==m)}}catch(dt){ke(i,i.return,dt)}}function Ag(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{dm(i,s)}catch(o){ke(e,e.return,o)}}}function Rg(e,i,s){s.props=us(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ke(e,i,o)}}function wo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){ke(e,i,u)}}function Ni(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){ke(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){ke(e,i,u)}else s.current=null}function wg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){ke(e,e.return,u)}}function Df(e,i,s){try{var o=e.stateNode;by(o,e.type,s,i),o[$e]=i}catch(u){ke(e,e.return,u)}}function Cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=uc));else if(o!==4&&(o===27&&La(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Lf(e,i,s),e=e.sibling;e!==null;)Lf(e,i,s),e=e.sibling}function $l(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(s=e.stateNode),e=e.child,e!==null))for($l(e,i,s),e=e.sibling;e!==null;)$l(e,i,s),e=e.sibling}function Dg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Cn(i,o,s),i[pn]=e,i[$e]=s}catch(m){ke(e,e.return,m)}}var ea=!1,sn=!1,Nf=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,En=null;function sy(e,i){if(e=e.containerInfo,ih=vc,e=Vp(e),Du(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,A=-1,I=-1,$=0,dt=0,gt=e,at=null;e:for(;;){for(var st;gt!==s||u!==0&&gt.nodeType!==3||(A=E+u),gt!==m||o!==0&&gt.nodeType!==3||(I=E+o),gt.nodeType===3&&(E+=gt.nodeValue.length),(st=gt.firstChild)!==null;)at=gt,gt=st;for(;;){if(gt===e)break e;if(at===s&&++$===u&&(A=E),at===m&&++dt===o&&(I=E),(st=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=st}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(ah={focusedElem:e,selectionRange:s},vc=!1,En=i;En!==null;)if(i=En,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,En=e;else for(;En!==null;){switch(i=En,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,u=m.memoizedProps,m=m.memoizedState,o=s.stateNode;try{var se=us(s.type,u,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(se,m),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){ke(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)oh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,En=e;break}En=i.return}}function Lg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ba(e,s),o&4&&Ro(5,s);break;case 1:if(ba(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ke(s,s.return,E)}else{var u=us(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ke(s,s.return,E)}}o&64&&Ag(s),o&512&&wo(s,s.return);break;case 3:if(ba(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{dm(e,i)}catch(E){ke(s,s.return,E)}}break;case 27:i===null&&o&4&&Dg(s);case 26:case 5:ba(e,s),i===null&&o&4&&wg(s),o&512&&wo(s,s.return);break;case 12:ba(e,s);break;case 13:ba(e,s),o&4&&Og(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=py.bind(null,s),Ly(e,s))));break;case 22:if(o=s.memoizedState!==null||ea,!o){i=i!==null&&i.memoizedState!==null||sn,u=ea;var m=sn;ea=o,(sn=i)&&!m?Aa(e,s,(s.subtreeFlags&8772)!==0):ba(e,s),ea=u,sn=m}break;case 30:break;default:ba(e,s)}}function Ng(e){var i=e.alternate;i!==null&&(e.alternate=null,Ng(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ns(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Wn=!1;function na(e,i,s){for(s=s.child;s!==null;)Pg(e,i,s),s=s.sibling}function Pg(e,i,s){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:sn||Ni(s,i),na(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Ni(s,i);var o=Ze,u=Wn;La(s.type)&&(Ze=s.stateNode,Wn=!1),na(e,i,s),Bo(s.stateNode),Ze=o,Wn=u;break;case 5:sn||Ni(s,i);case 6:if(o=Ze,u=Wn,Ze=null,na(e,i,s),Ze=o,Wn=u,Ze!==null)if(Wn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(m){ke(s,i,m)}else try{Ze.removeChild(s.stateNode)}catch(m){ke(s,i,m)}break;case 18:Ze!==null&&(Wn?(e=Ze,S0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Wo(e)):S0(Ze,s.stateNode));break;case 4:o=Ze,u=Wn,Ze=s.stateNode.containerInfo,Wn=!0,na(e,i,s),Ze=o,Wn=u;break;case 0:case 11:case 14:case 15:sn||Ta(2,s,i),sn||Ta(4,s,i),na(e,i,s);break;case 1:sn||(Ni(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Rg(s,i,o)),na(e,i,s);break;case 21:na(e,i,s);break;case 22:sn=(o=sn)||s.memoizedState!==null,na(e,i,s),sn=o;break;default:na(e,i,s)}}function Og(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wo(e)}catch(s){ke(i,i.return,s)}}function ry(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ug),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ug),i;default:throw Error(a(435,e.tag))}}function Pf(e,i){var s=ry(e);i.forEach(function(o){var u=my.bind(null,e,o);s.has(o)||(s.add(o),o.then(u,u))})}function Jn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],m=e,E=i,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(La(A.type)){Ze=A.stateNode,Wn=!1;break t}break;case 5:Ze=A.stateNode,Wn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if(Ze===null)throw Error(a(160));Pg(m,E,u),Ze=null,Wn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)zg(i,e),i=i.sibling}var yi=null;function zg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(i,e),$n(e),o&4&&(Ta(3,e,e.return),Ro(3,e),Ta(5,e,e.return));break;case 1:Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=yi;if(Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),o&4){var m=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":m=u.getElementsByTagName("title")[0],(!m||m[Di]||m[pn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=u.createElement(o),u.head.insertBefore(m,u.querySelector("head > title"))),Cn(m,o,s),m[pn]=e,ln(m),o=m;break t;case"link":var E=D0("link","href",u).get(o+(s.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(A,1);break e}}m=u.createElement(o),Cn(m,o,s),u.head.appendChild(m);break;case"meta":if(E=D0("meta","content",u).get(o+(s.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(A,1);break e}}m=u.createElement(o),Cn(m,o,s),u.head.appendChild(m);break;default:throw Error(a(468,o))}m[pn]=e,ln(m),o=m}e.stateNode=o}else U0(u,e.type,e.stateNode);else e.stateNode=C0(u,o,e.memoizedProps);else m!==o?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,o===null?U0(u,e.type,e.stateNode):C0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Df(e,e.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),s!==null&&o&4&&Df(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(st){ke(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Df(e,u,s!==null?s.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(Jn(i,e),$n(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(st){ke(e,e.return,st)}}break;case 3:if(pc=null,u=yi,yi=hc(i.containerInfo),Jn(i,e),yi=u,$n(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Wo(i.containerInfo)}catch(st){ke(e,e.return,st)}Nf&&(Nf=!1,Bg(e));break;case 4:o=yi,yi=hc(e.stateNode.containerInfo),Jn(i,e),$n(e),yi=o;break;case 12:Jn(i,e),$n(e);break;case 13:Jn(i,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Hf=Ot()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Pf(e,o)));break;case 22:u=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,$=ea,dt=sn;if(ea=$||u,sn=dt||I,Jn(i,e),sn=dt,ea=$,$n(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||I||ea||sn||fs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(m=I.stateNode,u)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=I.stateNode;var gt=I.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){ke(I,I.return,st)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(st){ke(I,I.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Pf(e,s))));break;case 19:Jn(i,e),$n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Pf(e,o)));break;case 30:break;case 21:break;default:Jn(i,e),$n(e)}}function $n(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(Cg(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,m=Uf(e);$l(e,m,u);break;case 5:var E=s.stateNode;s.flags&32&&(Vn(E,""),s.flags&=-33);var A=Uf(e);$l(e,A,E);break;case 3:case 4:var I=s.stateNode.containerInfo,$=Uf(e);Lf(e,$,I);break;default:throw Error(a(161))}}catch(dt){ke(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ba(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Lg(e,i.alternate,i),i=i.sibling}function fs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ta(4,i,i.return),fs(i);break;case 1:Ni(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Rg(i,i.return,s),fs(i);break;case 27:Bo(i.stateNode);case 26:case 5:Ni(i,i.return),fs(i);break;case 22:i.memoizedState===null&&fs(i);break;case 30:fs(i);break;default:fs(i)}e=e.sibling}}function Aa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Aa(u,m,s),Ro(4,m);break;case 1:if(Aa(u,m,s),o=m,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){ke(o,o.return,$)}if(o=m,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)hm(I[u],A)}catch($){ke(o,o.return,$)}}s&&E&64&&Ag(m),wo(m,m.return);break;case 27:Dg(m);case 26:case 5:Aa(u,m,s),s&&o===null&&E&4&&wg(m),wo(m,m.return);break;case 12:Aa(u,m,s);break;case 13:Aa(u,m,s),s&&E&4&&Og(u,m);break;case 22:m.memoizedState===null&&Aa(u,m,s),wo(m,m.return);break;case 30:break;default:Aa(u,m,s)}i=i.sibling}}function Of(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ho(s))}function zf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e))}function Pi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ig(e,i,s,o),i=i.sibling}function Ig(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(e,i,s,o),u&2048&&Ro(9,i);break;case 1:Pi(e,i,s,o);break;case 3:Pi(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Pi(e,i,s,o),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){ke(i,i.return,I)}}else Pi(e,i,s,o);break;case 13:Pi(e,i,s,o);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Pi(e,i,s,o):Co(e,i):m._visibility&2?Pi(e,i,s,o):(m._visibility|=2,$s(e,i,s,o,(i.subtreeFlags&10256)!==0)),u&2048&&Of(E,i);break;case 24:Pi(e,i,s,o),u&2048&&zf(i.alternate,i);break;default:Pi(e,i,s,o)}}function $s(e,i,s,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,E=i,A=s,I=o,$=E.flags;switch(E.tag){case 0:case 11:case 15:$s(m,E,A,I,u),Ro(8,E);break;case 23:break;case 22:var dt=E.stateNode;E.memoizedState!==null?dt._visibility&2?$s(m,E,A,I,u):Co(m,E):(dt._visibility|=2,$s(m,E,A,I,u)),u&&$&2048&&Of(E.alternate,E);break;case 24:$s(m,E,A,I,u),u&&$&2048&&zf(E.alternate,E);break;default:$s(m,E,A,I,u)}i=i.sibling}}function Co(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:Co(s,o),u&2048&&Of(o.alternate,o);break;case 24:Co(s,o),u&2048&&zf(o.alternate,o);break;default:Co(s,o)}i=i.sibling}}var Do=8192;function tr(e){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Fg(e),e=e.sibling}function Fg(e){switch(e.tag){case 26:tr(e),e.flags&Do&&e.memoizedState!==null&&Wy(yi,e.memoizedState,e.memoizedProps);break;case 5:tr(e);break;case 3:case 4:var i=yi;yi=hc(e.stateNode.containerInfo),tr(e),yi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Do,Do=16777216,tr(e),Do=i):tr(e));break;default:tr(e)}}function Hg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Uo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];En=o,Vg(o,e)}Hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gg(e),e=e.sibling}function Gg(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,tc(e)):Uo(e);break;default:Uo(e)}}function tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];En=o,Vg(o,e)}Hg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ta(8,i,i.return),tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,tc(i));break;default:tc(i)}e=e.sibling}}function Vg(e,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Ta(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,En=o;else t:for(s=e;En!==null;){o=En;var u=o.sibling,m=o.return;if(Ng(o),o===s){En=null;break t}if(u!==null){u.return=m,En=u;break t}En=m}}}var oy={getCacheForType:function(e){var i=Ln(mn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},ly=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,Se=null,be=0,Pe=0,ti=null,Ra=!1,er=!1,Bf=!1,ia=0,nn=0,wa=0,hs=0,If=0,pi=0,nr=0,Lo=null,qn=null,Ff=!1,Hf=0,ec=1/0,nc=null,Ca=null,wn=0,Da=null,ir=null,ar=0,Gf=0,Vf=null,kg=null,No=0,kf=null;function ei(){if((Ne&2)!==0&&be!==0)return be&-be;if(B.T!==null){var e=Ws;return e!==0?e:Kf()}return Ae()}function Xg(){pi===0&&(pi=(be&536870912)===0||Ue?X():536870912);var e=di.current;return e!==null&&(e.flags|=32),pi}function ni(e,i,s){(e===qe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(sr(e,0),Ua(e,be,pi,!1)),Bt(e,s),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(hs|=s),nn===4&&Ua(e,be,pi,!1)),Oi(e))}function Wg(e,i,s){if((Ne&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),u=o?fy(e,i):qf(e,i,!0),m=o;do{if(u===0){er&&!o&&Ua(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!cy(s)){u=qf(e,i,!1),m=!1;continue}if(u===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var A=e;u=Lo;var I=A.current.memoizedState.isDehydrated;if(I&&(sr(A,E).flags|=256),E=qf(A,E,!1),E!==2){if(Bf&&!I){A.errorRecoveryDisabledLanes|=m,hs|=m,u=4;break t}m=qn,qn=u,m!==null&&(qn===null?qn=m:qn.push.apply(qn,m))}u=E}if(m=!1,u!==2)continue}}if(u===1){sr(e,0),Ua(e,i,0,!0);break}t:{switch(o=e,m=u,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ua(o,i,pi,!Ra);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=Hf+300-Ot(),10<u)){if(Ua(o,i,pi,!Ra),kt(o,0,!0)!==0)break t;o.timeoutHandle=y0(qg.bind(null,o,s,qn,nc,Ff,i,pi,hs,nr,Ra,m,2,-0,0),u);break t}qg(o,s,qn,nc,Ff,i,pi,hs,nr,Ra,m,0,-0,0)}}break}while(!0);Oi(e)}function qg(e,i,s,o,u,m,E,A,I,$,dt,gt,at,st){if(e.timeoutHandle=-1,gt=i.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:Xy},Fg(i),gt=qy(),gt!==null)){e.cancelPendingCommit=gt($g.bind(null,e,i,m,s,o,u,E,A,I,dt,1,at,st)),Ua(e,m,E,!$);return}$g(e,i,m,s,o,u,E,A,I)}function cy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],m=u.getSnapshot;u=u.value;try{if(!Kn(m(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ua(e,i,s,o){i&=~If,i&=~hs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var m=31-zt(u),E=1<<m;o[m]=-1,u&=~E}s!==0&&_t(e,s,i)}function ic(){return(Ne&6)===0?(Po(0),!1):!0}function Xf(){if(Se!==null){if(Pe===0)var e=Se.return;else e=Se,Zi=rs=null,of(e),Qs=null,To=0,e=Se;for(;e!==null;)bg(e.alternate,e),e=e.return;Se=null}}function sr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ry(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Xf(),qe=e,Se=s=qi(e.current,null),be=i,Pe=0,ti=null,Ra=!1,er=Ct(e,i),Bf=!1,nr=pi=If=hs=wa=nn=0,qn=Lo=null,Ff=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-zt(o),m=1<<u;i|=e[u],o&=~m}return ia=i,bl(),s}function Yg(e,i){_e=null,B.H=Xl,i===mo||i===Pl?(i=um(),Pe=3):i===om?(i=um(),Pe=4):Pe=i===fg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,Se===null&&(nn=1,Zl(e,ci(i,e.current)))}function jg(){var e=B.H;return B.H=Xl,e===null?Xl:e}function Zg(){var e=B.A;return B.A=oy,e}function Wf(){nn=4,Ra||(be&4194048)!==be&&di.current!==null||(er=!0),(wa&134217727)===0&&(hs&134217727)===0||qe===null||Ua(qe,be,pi,!1)}function qf(e,i,s){var o=Ne;Ne|=2;var u=jg(),m=Zg();(qe!==e||be!==i)&&(nc=null,sr(e,i)),i=!1;var E=nn;t:do try{if(Pe!==0&&Se!==null){var A=Se,I=ti;switch(Pe){case 8:Xf(),E=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(i=!0);var $=Pe;if(Pe=0,ti=null,rr(e,A,I,$),s&&er){E=0;break t}break;default:$=Pe,Pe=0,ti=null,rr(e,A,I,$)}}uy(),E=nn;break}catch(dt){Yg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Zi=rs=null,Ne=o,B.H=u,B.A=m,Se===null&&(qe=null,be=0,bl()),E}function uy(){for(;Se!==null;)Kg(Se)}function fy(e,i){var s=Ne;Ne|=2;var o=jg(),u=Zg();qe!==e||be!==i?(nc=null,ec=Ot()+500,sr(e,i)):er=Ct(e,i);t:do try{if(Pe!==0&&Se!==null){i=Se;var m=ti;e:switch(Pe){case 1:Pe=0,ti=null,rr(e,i,m,1);break;case 2:case 9:if(lm(m)){Pe=0,ti=null,Qg(i);break}i=function(){Pe!==2&&Pe!==9||qe!==e||(Pe=7),Oi(e)},m.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:lm(m)?(Pe=0,ti=null,Qg(i)):(Pe=0,ti=null,rr(e,i,m,7));break;case 5:var E=null;switch(Se.tag){case 26:E=Se.memoizedState;case 5:case 27:var A=Se;if(!E||L0(E)){Pe=0,ti=null;var I=A.sibling;if(I!==null)Se=I;else{var $=A.return;$!==null?(Se=$,ac($)):Se=null}break e}}Pe=0,ti=null,rr(e,i,m,5);break;case 6:Pe=0,ti=null,rr(e,i,m,6);break;case 8:Xf(),nn=6;break t;default:throw Error(a(462))}}hy();break}catch(dt){Yg(e,dt)}while(!0);return Zi=rs=null,B.H=o,B.A=u,Ne=s,Se!==null?0:(qe=null,be=0,bl(),nn)}function hy(){for(;Se!==null&&!ce();)Kg(Se)}function Kg(e){var i=Eg(e.alternate,e,ia);e.memoizedProps=e.pendingProps,i===null?ac(e):Se=i}function Qg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=vg(s,i,i.pendingProps,i.type,void 0,be);break;case 11:i=vg(s,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:of(i);default:bg(s,i),i=Se=Jp(i,ia),i=Eg(s,i,ia)}e.memoizedProps=e.pendingProps,i===null?ac(e):Se=i}function rr(e,i,s,o){Zi=rs=null,of(i),Qs=null,To=0;var u=i.return;try{if(ey(e,u,i,s,be)){nn=1,Zl(e,ci(s,e.current)),Se=null;return}}catch(m){if(u!==null)throw Se=u,m;nn=1,Zl(e,ci(s,e.current)),Se=null;return}i.flags&32768?(Ue||o===1?e=!0:er||(be&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Jg(i,e)):ac(i)}function ac(e){var i=e;do{if((i.flags&32768)!==0){Jg(i,Ra);return}e=i.return;var s=iy(i.alternate,i,ia);if(s!==null){Se=s;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);nn===0&&(nn=5)}function Jg(e,i){do{var s=ay(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);nn=6,Se=null}function $g(e,i,s,o,u,m,E,A,I){e.cancelPendingCommit=null;do sc();while(wn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Ou,Et(e,s,m,E,A,I),e===qe&&(Se=qe=null,be=0),ir=i,Da=e,ar=s,Gf=m,Vf=u,kg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gy(Ke,function(){return a0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=nt.p,nt.p=2,E=Ne,Ne|=4;try{sy(e,i,s)}finally{Ne=E,nt.p=u,B.T=o}}wn=1,t0(),e0(),n0()}}function t0(){if(wn===1){wn=0;var e=Da,i=ir,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var o=nt.p;nt.p=2;var u=Ne;Ne|=4;try{zg(i,e);var m=ah,E=Vp(e.containerInfo),A=m.focusedElem,I=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&Gp(A.ownerDocument.documentElement,A)){if(I!==null&&Du(A)){var $=I.start,dt=I.end;if(dt===void 0&&(dt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(dt,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var st=at.getSelection(),se=A.textContent.length,te=Math.min(I.start,se),He=I.end===void 0?te:Math.min(I.end,se);!st.extend&&te>He&&(E=He,He=te,te=E);var Y=Hp(A,te),k=Hp(A,He);if(Y&&k&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var J=gt.createRange();J.setStart(Y.node,Y.offset),st.removeAllRanges(),te>He?(st.addRange(J),st.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),st.addRange(J))}}}}for(gt=[],st=A;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var pt=gt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}vc=!!ih,ah=ih=null}finally{Ne=u,nt.p=o,B.T=s}}e.current=i,wn=2}}function e0(){if(wn===2){wn=0;var e=Da,i=ir,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var o=nt.p;nt.p=2;var u=Ne;Ne|=4;try{Lg(e,i.alternate,i)}finally{Ne=u,nt.p=o,B.T=s}}wn=3}}function n0(){if(wn===4||wn===3){wn=0,ie();var e=Da,i=ir,s=ar,o=kg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,ir=Da=null,i0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ca=null),Le(s),i=i.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=B.T,u=nt.p,nt.p=2,B.T=null;try{for(var m=e.onRecoverableError,E=0;E<o.length;E++){var A=o[E];m(A.value,{componentStack:A.stack})}}finally{B.T=i,nt.p=u}}(ar&3)!==0&&sc(),Oi(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===kf?No++:(No=0,kf=e):No=0,Po(0)}}function i0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ho(i)))}function sc(e){return t0(),e0(),n0(),a0()}function a0(){if(wn!==5)return!1;var e=Da,i=Gf;Gf=0;var s=Le(ar),o=B.T,u=nt.p;try{nt.p=32>s?32:s,B.T=null,s=Vf,Vf=null;var m=Da,E=ar;if(wn=0,ir=Da=null,ar=0,(Ne&6)!==0)throw Error(a(331));var A=Ne;if(Ne|=4,Gg(m.current),Ig(m,m.current,E,s),Ne=A,Po(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,m)}catch{}return!0}finally{nt.p=u,B.T=o,i0(e,i)}}function s0(e,i,s){i=ci(s,i),i=Mf(e.stateNode,i,2),e=ya(e,i,2),e!==null&&(Bt(e,2),Oi(e))}function ke(e,i,s){if(e.tag===3)s0(e,e,s);else for(;i!==null;){if(i.tag===3){s0(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ci(s,e),s=cg(2),o=ya(i,s,2),o!==null&&(ug(s,o,i,e),Bt(o,2),Oi(o));break}}i=i.return}}function Yf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new ly;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Bf=!0,u.add(s),e=dy.bind(null,e,i,s),i.then(e,e))}function dy(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(be&s)===s&&(nn===4||nn===3&&(be&62914560)===be&&300>Ot()-Hf?(Ne&2)===0&&sr(e,0):If|=s,nr===be&&(nr=0)),Oi(e)}function r0(e,i){i===0&&(i=bt()),e=Gs(e,i),e!==null&&(Bt(e,i),Oi(e))}function py(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),r0(e,s)}function my(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),r0(e,s)}function gy(e,i){return H(e,i)}var rc=null,or=null,jf=!1,oc=!1,Zf=!1,ds=0;function Oi(e){e!==or&&e.next===null&&(or===null?rc=or=e:or=or.next=e),oc=!0,jf||(jf=!0,_y())}function Po(e,i){if(!Zf&&oc){Zf=!0;do for(var s=!1,o=rc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var m=0;else{var E=o.suspendedLanes,A=o.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=u&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,u0(o,m))}else m=be,m=kt(o,o===qe?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Ct(o,m)||(s=!0,u0(o,m));o=o.next}while(s);Zf=!1}}function vy(){o0()}function o0(){oc=jf=!1;var e=0;ds!==0&&(Ay()&&(e=ds),ds=0);for(var i=Ot(),s=null,o=rc;o!==null;){var u=o.next,m=l0(o,i);m===0?(o.next=null,s===null?rc=u:s.next=u,u===null&&(or=s)):(s=o,(e!==0||(m&3)!==0)&&(oc=!0)),o=u}Po(e)}function l0(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-zt(m),A=1<<E,I=u[E];I===-1?((A&s)===0||(A&o)!==0)&&(u[E]=fe(A,i)):I<=i&&(e.expiredLanes|=A),m&=~A}if(i=qe,s=be,s=kt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&ze(o),Le(s)){case 2:case 8:s=ue;break;case 32:s=Ke;break;case 268435456:s=z;break;default:s=Ke}return o=c0.bind(null,e),s=H(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function c0(e,i){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(sc()&&e.callbackNode!==s)return null;var o=be;return o=kt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Wg(e,o,i),l0(e,Ot()),e.callbackNode!=null&&e.callbackNode===s?c0.bind(null,e):null)}function u0(e,i){if(sc())return null;Wg(e,i,!0)}function _y(){wy(function(){(Ne&6)!==0?H(Vt,vy):o0()})}function Kf(){return ds===0&&(ds=X()),ds}function f0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_l(""+e)}function h0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function xy(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var m=f0((u[$e]||null).action),E=o.submitter;E&&(i=(i=E[$e]||null)?f0(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var A=new Sl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ds!==0){var I=E?h0(u,E):new FormData(u);gf(s,{pending:!0,data:I,method:u.method,action:m},null,I)}}else typeof m=="function"&&(A.preventDefault(),I=E?h0(u,E):new FormData(u),gf(s,{pending:!0,data:I,method:u.method,action:m},m,I))},currentTarget:u}]})}}for(var Qf=0;Qf<Pu.length;Qf++){var Jf=Pu[Qf],yy=Jf.toLowerCase(),My=Jf[0].toUpperCase()+Jf.slice(1);xi(yy,"on"+My)}xi(Wp,"onAnimationEnd"),xi(qp,"onAnimationIteration"),xi(Yp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Ix,"onTransitionRun"),xi(Fx,"onTransitionStart"),xi(Hx,"onTransitionCancel"),xi(jp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function d0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var m=void 0;if(i)for(var E=o.length-1;0<=E;E--){var A=o[E],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==m&&u.isPropagationStopped())break t;m=A,u.currentTarget=$;try{m(u)}catch(dt){jl(dt)}u.currentTarget=null,m=I}else for(E=0;E<o.length;E++){if(A=o[E],I=A.instance,$=A.currentTarget,A=A.listener,I!==m&&u.isPropagationStopped())break t;m=A,u.currentTarget=$;try{m(u)}catch(dt){jl(dt)}u.currentTarget=null,m=I}}}}function Ee(e,i){var s=i[Us];s===void 0&&(s=i[Us]=new Set);var o=e+"__bubble";s.has(o)||(p0(i,e,2,!1),s.add(o))}function $f(e,i,s){var o=0;i&&(o|=4),p0(s,e,o,i)}var lc="_reactListening"+Math.random().toString(36).slice(2);function th(e){if(!e[lc]){e[lc]=!0,gl.forEach(function(s){s!=="selectionchange"&&(Sy.has(s)||$f(s,!1,e),$f(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[lc]||(i[lc]=!0,$f("selectionchange",!1,i))}}function p0(e,i,s,o){switch(I0(i)){case 2:var u=Zy;break;case 8:u=Ky;break;default:u=ph}s=u.bind(null,i,s,e),u=void 0,!Mu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function eh(e,i,s,o,u){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var A=o.stateNode.containerInfo;if(A===u)break;if(E===4)for(E=o.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;A!==null;){if(E=Xi(A),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){o=m=E;continue t}A=A.parentNode}}o=o.return}Mp(function(){var $=m,dt=xu(s),gt=[];t:{var at=Zp.get(e);if(at!==void 0){var st=Sl,se=e;switch(e){case"keypress":if(yl(s)===0)break t;case"keydown":case"keyup":st=gx;break;case"focusin":se="focus",st=bu;break;case"focusout":se="blur",st=bu;break;case"beforeblur":case"afterblur":st=bu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=xx;break;case Wp:case qp:case Yp:st=ox;break;case jp:st=Mx;break;case"scroll":case"scrollend":st=nx;break;case"wheel":st=Ex;break;case"copy":case"cut":case"paste":st=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Ap;break;case"toggle":case"beforetoggle":st=bx}var te=(i&4)!==0,He=!te&&(e==="scroll"||e==="scrollend"),Y=te?at!==null?at+"Capture":null:at;te=[];for(var k=$,J;k!==null;){var pt=k;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=$r(k,Y),pt!=null&&te.push(zo(k,pt,J))),He)break;k=k.return}0<te.length&&(at=new st(at,se,null,s,dt),gt.push({event:at,listeners:te}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&s!==_u&&(se=s.relatedTarget||s.fromElement)&&(Xi(se)||se[Ci]))break t;if((st||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(se=s.relatedTarget||s.toElement,st=$,se=se?Xi(se):null,se!==null&&(He=c(se),te=se.tag,se!==He||te!==5&&te!==27&&te!==6)&&(se=null)):(st=null,se=$),st!==se)){if(te=Tp,pt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ap,pt="onPointerLeave",Y="onPointerEnter",k="pointer"),He=st==null?at:Qa(st),J=se==null?at:Qa(se),at=new te(pt,k+"leave",st,s,dt),at.target=He,at.relatedTarget=J,pt=null,Xi(dt)===$&&(te=new te(Y,k+"enter",se,s,dt),te.target=J,te.relatedTarget=He,pt=te),He=pt,st&&se)e:{for(te=st,Y=se,k=0,J=te;J;J=lr(J))k++;for(J=0,pt=Y;pt;pt=lr(pt))J++;for(;0<k-J;)te=lr(te),k--;for(;0<J-k;)Y=lr(Y),J--;for(;k--;){if(te===Y||Y!==null&&te===Y.alternate)break e;te=lr(te),Y=lr(Y)}te=null}else te=null;st!==null&&m0(gt,at,st,te,!1),se!==null&&He!==null&&m0(gt,He,se,te,!0)}}t:{if(at=$?Qa($):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ft=Pp;else if(Lp(at))if(Op)Ft=Ox;else{Ft=Nx;var xe=Lx}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&vu($.elementType)&&(Ft=Pp):Ft=Px;if(Ft&&(Ft=Ft(e,$))){Np(gt,Ft,s,dt);break t}xe&&xe(e,at,$),e==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Un(at,"number",at.value)}switch(xe=$?Qa($):window,e){case"focusin":(Lp(xe)||xe.contentEditable==="true")&&(Is=xe,Uu=$,oo=null);break;case"focusout":oo=Uu=Is=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,kp(gt,s,dt);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":kp(gt,s,dt)}var Zt;if(Ru)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Bs?Dp(e,s)&&(ne="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ne="onCompositionStart");ne&&(Rp&&s.locale!=="ko"&&(Bs||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Bs&&(Zt=Sp()):(ga=dt,Su="value"in ga?ga.value:ga.textContent,Bs=!0)),xe=cc($,ne),0<xe.length&&(ne=new bp(ne,e,null,s,dt),gt.push({event:ne,listeners:xe}),Zt?ne.data=Zt:(Zt=Up(s),Zt!==null&&(ne.data=Zt)))),(Zt=Rx?wx(e,s):Cx(e,s))&&(ne=cc($,"onBeforeInput"),0<ne.length&&(xe=new bp("onBeforeInput","beforeinput",null,s,dt),gt.push({event:xe,listeners:ne}),xe.data=Zt)),xy(gt,e,$,s,dt)}d0(gt,i)})}function zo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function cc(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,m=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||m===null||(u=$r(e,s),u!=null&&o.unshift(zo(e,u,m)),u=$r(e,i),u!=null&&o.push(zo(e,u,m))),e.tag===3)return o;e=e.return}return[]}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function m0(e,i,s,o,u){for(var m=i._reactName,E=[];s!==null&&s!==o;){var A=s,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||$===null||(I=$,u?($=$r(s,m),$!=null&&E.unshift(zo(s,$,I))):u||($=$r(s,m),$!=null&&E.push(zo(s,$,I)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function g0(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Ty,"")}function v0(e,i){return i=g0(i),g0(e)===i}function uc(){}function Fe(e,i,s,o,u,m){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Vn(e,""+o);break;case"className":It(e,"class",o);break;case"tabIndex":It(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,s,o);break;case"style":xp(e,o,m);break;case"data":if(i!=="object"){It(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=_l(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Fe(e,i,"name",u.name,u,null),Fe(e,i,"formEncType",u.formEncType,u,null),Fe(e,i,"formMethod",u.formMethod,u,null),Fe(e,i,"formTarget",u.formTarget,u,null)):(Fe(e,i,"encType",u.encType,u,null),Fe(e,i,"method",u.method,u,null),Fe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=_l(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=uc);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=_l(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Dt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Dt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=tx.get(s)||s,Dt(e,s,o))}}function nh(e,i,s,o,u,m){switch(s){case"style":xp(e,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),m=e[$e]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,u),typeof o=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Dt(e,s,o)}}}function Cn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,m,E,s,null)}}u&&Fe(e,i,"srcSet",s.srcSet,s,null),o&&Fe(e,i,"src",s.src,s,null);return;case"input":Ee("invalid",e);var A=m=E=u=null,I=null,$=null;for(o in s)if(s.hasOwnProperty(o)){var dt=s[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":E=dt;break;case"checked":I=dt;break;case"defaultChecked":$=dt;break;case"value":m=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Fe(e,i,o,dt,s,null)}}Bn(e,m,A,I,$,E,u,!1),Me(e);return;case"select":Ee("invalid",e),o=E=m=null;for(u in s)if(s.hasOwnProperty(u)&&(A=s[u],A!=null))switch(u){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":o=A;default:Fe(e,i,u,A,s,null)}i=m,s=E,e.multiple=!!o,i!=null?tn(e,!!o,i,!1):s!=null&&tn(e,!!o,s,!0);return;case"textarea":Ee("invalid",e),m=u=o=null;for(E in s)if(s.hasOwnProperty(E)&&(A=s[E],A!=null))switch(E){case"value":o=A;break;case"defaultValue":u=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Fe(e,i,E,A,s,null)}Ps(e,o,u,m),Me(e);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(o=s[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,i,I,o,s,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)Ee(Oo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(o=s[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,$,o,s,null)}return;default:if(vu(i)){for(dt in s)s.hasOwnProperty(dt)&&(o=s[dt],o!==void 0&&nh(e,i,dt,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&Fe(e,i,A,o,s,null))}function by(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,m=null,E=null,A=null,I=null,$=null,dt=null;for(st in s){var gt=s[st];if(s.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(st)||Fe(e,i,st,null,o,gt)}}for(var at in o){var st=o[at];if(gt=s[at],o.hasOwnProperty(at)&&(st!=null||gt!=null))switch(at){case"type":m=st;break;case"name":u=st;break;case"checked":$=st;break;case"defaultChecked":dt=st;break;case"value":E=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==gt&&Fe(e,i,at,st,o,gt)}}Ve(e,E,A,I,$,dt,m,u);return;case"select":st=E=A=at=null;for(m in s)if(I=s[m],s.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":st=I;default:o.hasOwnProperty(m)||Fe(e,i,m,null,o,I)}for(u in o)if(m=o[u],I=s[u],o.hasOwnProperty(u)&&(m!=null||I!=null))switch(u){case"value":at=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==I&&Fe(e,i,u,m,o,I)}i=A,s=E,o=st,at!=null?tn(e,!!s,at,!1):!!o!=!!s&&(i!=null?tn(e,!!s,i,!0):tn(e,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(A in s)if(u=s[A],s.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,i,A,null,o,u)}for(E in o)if(u=o[E],m=s[E],o.hasOwnProperty(E)&&(u!=null||m!=null))switch(E){case"value":at=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==m&&Fe(e,i,E,u,o,m)}An(e,at,st);return;case"option":for(var se in s)if(at=s[se],s.hasOwnProperty(se)&&at!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Fe(e,i,se,null,o,at)}for(I in o)if(at=o[I],st=s[I],o.hasOwnProperty(I)&&at!==st&&(at!=null||st!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(e,i,I,at,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)at=s[te],s.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Fe(e,i,te,null,o,at);for($ in o)if(at=o[$],st=s[$],o.hasOwnProperty($)&&at!==st&&(at!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Fe(e,i,$,at,o,st)}return;default:if(vu(i)){for(var He in s)at=s[He],s.hasOwnProperty(He)&&at!==void 0&&!o.hasOwnProperty(He)&&nh(e,i,He,void 0,o,at);for(dt in o)at=o[dt],st=s[dt],!o.hasOwnProperty(dt)||at===st||at===void 0&&st===void 0||nh(e,i,dt,at,o,st);return}}for(var Y in s)at=s[Y],s.hasOwnProperty(Y)&&at!=null&&!o.hasOwnProperty(Y)&&Fe(e,i,Y,null,o,at);for(gt in o)at=o[gt],st=s[gt],!o.hasOwnProperty(gt)||at===st||at==null&&st==null||Fe(e,i,gt,at,o,st)}var ih=null,ah=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function _0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function sh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rh=null;function Ay(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var y0=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(Cy)}:y0;function Cy(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function S0(e,i){var s=i,o=0,u=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<o&&8>o){s=o;var E=e.ownerDocument;if(s&1&&Bo(E.documentElement),s&2&&Bo(E.body),s&4)for(s=E.head,Bo(s),E=s.firstChild;E;){var A=E.nextSibling,I=E.nodeName;E[Di]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=A}}if(u===0){e.removeChild(m),Wo(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:o=s.charCodeAt(0)-48;else o=0;s=m}while(s);Wo(i)}function oh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":oh(s),Ns(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Dy(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Di])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function Uy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Mi(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ly(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var ch=null;function E0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function T0(e,i,s){switch(i=fc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Bo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ns(e)}var mi=new Map,b0=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=nt.d;nt.d={f:Ny,r:Py,D:Oy,C:zy,L:By,m:Iy,X:Hy,S:Fy,M:Gy};function Ny(){var e=aa.f(),i=ic();return e||i}function Py(e){var i=pa(e);i!==null&&i.tag===5&&i.type==="form"?Wm(i):aa.r(e)}var cr=typeof document>"u"?null:document;function A0(e,i,s){var o=cr;if(o&&typeof i=="string"&&i){var u=Mn(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),b0.has(u)||(b0.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Cn(i,"link",e),ln(i),o.head.appendChild(i)))}}function Oy(e){aa.D(e),A0("dns-prefetch",e,null)}function zy(e,i){aa.C(e,i),A0("preconnect",e,i)}function By(e,i,s){aa.L(e,i,s);var o=cr;if(o&&e&&i){var u='link[rel="preload"][as="'+Mn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Mn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Mn(s.imageSizes)+'"]')):u+='[href="'+Mn(e)+'"]';var m=u;switch(i){case"style":m=ur(e);break;case"script":m=fr(e)}mi.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),mi.set(m,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Io(m))||i==="script"&&o.querySelector(Fo(m))||(i=o.createElement("link"),Cn(i,"link",e),ln(i),o.head.appendChild(i)))}}function Iy(e,i){aa.m(e,i);var s=cr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Mn(o)+'"][href="'+Mn(e)+'"]',m=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fr(e)}if(!mi.has(m)&&(e=g({rel:"modulepreload",href:e},i),mi.set(m,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fo(m)))return}o=s.createElement("link"),Cn(o,"link",e),ln(o),s.head.appendChild(o)}}}function Fy(e,i,s){aa.S(e,i,s);var o=cr;if(o&&e){var u=ma(o).hoistableStyles,m=ur(e);i=i||"default";var E=u.get(m);if(!E){var A={loading:0,preload:null};if(E=o.querySelector(Io(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=mi.get(m))&&uh(e,s);var I=E=o.createElement("link");ln(I),Cn(I,"link",e),I._p=new Promise(function($,dt){I.onload=$,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,dc(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:A},u.set(m,E)}}}function Hy(e,i){aa.X(e,i);var s=cr;if(s&&e){var o=ma(s).hoistableScripts,u=fr(e),m=o.get(u);m||(m=s.querySelector(Fo(u)),m||(e=g({src:e,async:!0},i),(i=mi.get(u))&&fh(e,i),m=s.createElement("script"),ln(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(u,m))}}function Gy(e,i){aa.M(e,i);var s=cr;if(s&&e){var o=ma(s).hoistableScripts,u=fr(e),m=o.get(u);m||(m=s.querySelector(Fo(u)),m||(e=g({src:e,async:!0,type:"module"},i),(i=mi.get(u))&&fh(e,i),m=s.createElement("script"),ln(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(u,m))}}function R0(e,i,s,o){var u=(u=it.current)?hc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ur(s.href),s=ma(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=ur(s.href);var m=ma(u).hoistableStyles,E=m.get(e);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=u.querySelector(Io(e)))&&!m._p&&(E.instance=m,E.state.loading=5),mi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},mi.set(e,s),m||Vy(u,e,s,E.state))),i&&o===null)throw Error(a(528,""));return E}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=fr(s),s=ma(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ur(e){return'href="'+Mn(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function w0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Vy(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",s),ln(i),e.head.appendChild(i))}function fr(e){return'[src="'+Mn(e)+'"]'}function Fo(e){return"script[async]"+e}function C0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Mn(s.href)+'"]');if(o)return i.instance=o,ln(o),o;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ln(o),Cn(o,"style",u),dc(o,s.precedence,e),i.instance=o;case"stylesheet":u=ur(s.href);var m=e.querySelector(Io(u));if(m)return i.state.loading|=4,i.instance=m,ln(m),m;o=w0(s),(u=mi.get(u))&&uh(o,u),m=(e.ownerDocument||e).createElement("link"),ln(m);var E=m;return E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Cn(m,"link",o),i.state.loading|=4,dc(m,s.precedence,e),i.instance=m;case"script":return m=fr(s.src),(u=e.querySelector(Fo(m)))?(i.instance=u,ln(u),u):(o=s,(u=mi.get(m))&&(o=g({},s),fh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ln(u),Cn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,dc(o,s.precedence,e));return i.instance}function dc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,m=u,E=0;E<o.length;E++){var A=o[E];if(A.dataset.precedence===i)m=A;else if(m!==u)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var pc=null;function D0(e,i,s){if(pc===null){var o=new Map,u=pc=new Map;u.set(s,o)}else u=pc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var m=s[u];if(!(m[Di]||m[pn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var A=o.get(E);A?A.push(m):o.set(E,[m])}}return o}function U0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function ky(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function L0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ho=null;function Xy(){}function Wy(e,i,s){if(Ho===null)throw Error(a(475));var o=Ho;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ur(s.href),m=e.querySelector(Io(u));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=mc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=m,ln(m);return}m=e.ownerDocument||e,s=w0(s),(u=mi.get(u))&&uh(s,u),m=m.createElement("link"),ln(m);var E=m;E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Cn(m,"link",s),i.instance=m}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=mc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function qy(){if(Ho===null)throw Error(a(475));var e=Ho;return e.stylesheets&&e.count===0&&hh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&hh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function mc(){if(this.count--,this.count===0){if(this.stylesheets)hh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function hh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,i.forEach(Yy,e),gc=null,mc.call(e))}function Yy(e,i){if(!(i.state.loading&4)){var s=gc.get(e);if(s)var o=s.get(null);else{s=new Map,gc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<u.length;m++){var E=u[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),o=E)}o&&s.set(null,o)}u=i.instance,E=u.getAttribute("data-precedence"),m=s.get(E)||o,m===o&&s.set(null,u),s.set(E,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),m?m.parentNode.insertBefore(u,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Go={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function jy(e,i,s,o,u,m,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function N0(e,i,s,o,u,m,E,A,I,$,dt,gt){return e=new jy(e,i,s,E,A,I,$,gt),i=1,m===!0&&(i|=24),m=Qn(3,null,null,i),e.current=m,m.stateNode=e,i=qu(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:s,cache:i},Ku(m),e}function P0(e){return e?(e=Vs,e):Vs}function O0(e,i,s,o,u,m){u=P0(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(i),o.payload={element:s},m=m===void 0?null:m,m!==null&&(o.callback=m),s=ya(e,o,i),s!==null&&(ni(s,e,i),vo(s,e,i))}function z0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function dh(e,i){z0(e,i),(e=e.alternate)&&z0(e,i)}function B0(e){if(e.tag===13){var i=Gs(e,67108864);i!==null&&ni(i,e,67108864),dh(e,67108864)}}var vc=!0;function Zy(e,i,s,o){var u=B.T;B.T=null;var m=nt.p;try{nt.p=2,ph(e,i,s,o)}finally{nt.p=m,B.T=u}}function Ky(e,i,s,o){var u=B.T;B.T=null;var m=nt.p;try{nt.p=8,ph(e,i,s,o)}finally{nt.p=m,B.T=u}}function ph(e,i,s,o){if(vc){var u=mh(o);if(u===null)eh(e,i,o,_c,s),F0(e,o);else if(Jy(u,e,i,s,o))o.stopPropagation();else if(F0(e,o),i&4&&-1<Qy.indexOf(e)){for(;u!==null;){var m=pa(u);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Kt(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var I=1<<31-zt(E);A.entanglements[1]|=I,E&=~I}Oi(m),(Ne&6)===0&&(ec=Ot()+500,Po(0))}}break;case 13:A=Gs(m,2),A!==null&&ni(A,m,2),ic(),dh(m,2)}if(m=mh(o),m===null&&eh(e,i,o,_c,s),m===u)break;u=m}u!==null&&o.stopPropagation()}else eh(e,i,o,null,s)}}function mh(e){return e=xu(e),gh(e)}var _c=null;function gh(e){if(_c=null,e=Xi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return _c=e,null}function I0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Vt:return 2;case ue:return 8;case Ke:case Qe:return 32;case z:return 268435456;default:return 32}default:return 32}}var vh=!1,Na=null,Pa=null,Oa=null,Vo=new Map,ko=new Map,za=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(e,i){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function Xo(e,i,s,o,u,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:m,targetContainers:[u]},i!==null&&(i=pa(i),i!==null&&B0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Jy(e,i,s,o,u){switch(i){case"focusin":return Na=Xo(Na,e,i,s,o,u),!0;case"dragenter":return Pa=Xo(Pa,e,i,s,o,u),!0;case"mouseover":return Oa=Xo(Oa,e,i,s,o,u),!0;case"pointerover":var m=u.pointerId;return Vo.set(m,Xo(Vo.get(m)||null,e,i,s,o,u)),!0;case"gotpointercapture":return m=u.pointerId,ko.set(m,Xo(ko.get(m)||null,e,i,s,o,u)),!0}return!1}function H0(e){var i=Xi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,vi(e.priority,function(){if(s.tag===13){var o=ei();o=re(o);var u=Gs(s,o);u!==null&&ni(u,s,o),dh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=mh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);_u=o,s.target.dispatchEvent(o),_u=null}else return i=pa(s),i!==null&&B0(i),e.blockedOn=s,!1;i.shift()}return!0}function G0(e,i,s){xc(e)&&s.delete(i)}function $y(){vh=!1,Na!==null&&xc(Na)&&(Na=null),Pa!==null&&xc(Pa)&&(Pa=null),Oa!==null&&xc(Oa)&&(Oa=null),Vo.forEach(G0),ko.forEach(G0)}function yc(e,i){e.blockedOn===i&&(e.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$y)))}var Mc=null;function V0(e){Mc!==e&&(Mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(gh(o||s)===null)continue;break}var m=pa(s);m!==null&&(e.splice(i,3),i-=3,gf(m,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Wo(e){function i(I){return yc(I,e)}Na!==null&&yc(Na,e),Pa!==null&&yc(Pa,e),Oa!==null&&yc(Oa,e),Vo.forEach(i),ko.forEach(i);for(var s=0;s<za.length;s++){var o=za[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(s=za[0],s.blockedOn===null);)H0(s),s.blockedOn===null&&za.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],m=s[o+1],E=u[$e]||null;if(typeof m=="function")E||V0(s);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(u=m,E=m[$e]||null)A=E.formAction;else if(gh(u)!==null)continue}else A=E.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),V0(s)}}}function _h(e){this._internalRoot=e}Sc.prototype.render=_h.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=ei();O0(s,o,e,i,null,null)},Sc.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;O0(e.current,2,null,e,null,null),ic(),i[Ci]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ae();e={blockedOn:null,target:e,priority:i};for(var s=0;s<za.length&&i!==0&&i<za[s].priority;s++);za.splice(s,0,e),s===0&&H0(e)}};var k0=t.version;if(k0!=="19.1.1")throw Error(a(527,k0,"19.1.1"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var tM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{ht=Ec.inject(tM),mt=Ec}catch{}}return Yo.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",u=sg,m=rg,E=og,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=N0(e,1,!1,null,null,s,o,u,m,E,A,null),e[Ci]=i.current,th(e),new _h(i)},Yo.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,u="",m=sg,E=rg,A=og,I=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=N0(e,1,!0,i,s??null,o,u,m,E,A,I,$),i.context=P0(null),s=i.current,o=ei(),o=re(o),u=xa(o),u.callback=null,ya(s,u,o),s=o,i.current.lanes=s,Bt(i,s),Oi(i),e[Ci]=i.current,th(e),new Sc(i)},Yo.version="19.1.1",Yo}var $0;function uM(){if($0)return Mh.exports;$0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=cM(),Mh.exports}var fM=uM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="180",hM=0,tv=1,dM=2,h_=1,pM=2,ua=3,Za=0,Zn=1,jn=2,fa=0,Lr=1,Or=2,ev=3,nv=4,mM=5,Ts=100,gM=101,vM=102,_M=103,xM=104,yM=200,MM=201,SM=202,EM=203,rd=204,od=205,TM=206,bM=207,AM=208,RM=209,wM=210,CM=211,DM=212,UM=213,LM=214,ld=0,cd=1,ud=2,zr=3,fd=4,hd=5,dd=6,pd=7,d_=0,NM=1,PM=2,ja=0,p_=1,m_=2,g_=3,hu=4,v_=5,__=6,x_=7,y_=300,Br=301,Ir=302,md=303,gd=304,du=306,vd=1e3,As=1001,_d=1002,oi=1003,OM=1004,Tc=1005,Ii=1006,bh=1007,Rs=1008,Vi=1009,M_=1010,S_=1011,ol=1012,tp=1013,ws=1014,Fi=1015,ha=1016,ep=1017,np=1018,ll=1020,E_=35902,T_=35899,b_=1021,A_=1022,Ri=1023,cl=1026,ul=1027,ip=1028,ap=1029,R_=1030,sp=1031,rp=1033,tu=33776,eu=33777,nu=33778,iu=33779,xd=35840,yd=35841,Md=35842,Sd=35843,Ed=36196,Td=37492,bd=37496,Ad=37808,Rd=37809,wd=37810,Cd=37811,Dd=37812,Ud=37813,Ld=37814,Nd=37815,Pd=37816,Od=37817,zd=37818,Bd=37819,Id=37820,Fd=37821,Hd=36492,Gd=36494,Vd=36495,kd=36283,Xd=36284,Wd=36285,qd=36286,zM=3200,BM=3201,w_=0,IM=1,Wa="",ri="srgb",Fr="srgb-linear",lu="linear",Oe="srgb",hr=7680,iv=519,FM=512,HM=513,GM=514,C_=515,VM=516,kM=517,XM=518,WM=519,av=35044,sv="300 es",Hi=2e3,cu=2001;class Xr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rv=1234567;const al=Math.PI/180,Hr=180/Math.PI;function Wr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function ye(r,t,n){return Math.max(t,Math.min(n,r))}function op(r,t){return(r%t+t)%t}function qM(r,t,n,a,l){return a+(r-t)*(l-a)/(n-t)}function YM(r,t,n){return r!==t?(n-r)/(t-r):0}function sl(r,t,n){return(1-n)*r+n*t}function jM(r,t,n,a){return sl(r,t,1-Math.exp(-n*a))}function ZM(r,t=1){return t-Math.abs(op(r,t*2)-t)}function KM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function QM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function JM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function $M(r,t){return r+Math.random()*(t-r)}function tS(r){return r*(.5-Math.random())}function eS(r){r!==void 0&&(rv=r);let t=rv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nS(r){return r*al}function iS(r){return r*Hr}function aS(r){return(r&r-1)===0&&r!==0}function sS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function oS(r,t,n,a,l){const c=Math.cos,f=Math.sin,h=c(n/2),d=f(n/2),p=c((t+a)/2),g=f((t+a)/2),v=c((t-a)/2),_=f((t-a)/2),x=c((a-t)/2),S=f((a-t)/2);switch(l){case"XYX":r.set(h*g,d*v,d*_,h*p);break;case"YZY":r.set(d*_,h*g,d*v,h*p);break;case"ZXZ":r.set(d*v,d*_,h*g,h*p);break;case"XZX":r.set(h*g,d*S,d*x,h*p);break;case"YXY":r.set(d*x,h*g,d*S,h*p);break;case"ZYZ":r.set(d*S,d*x,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function wr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ya={DEG2RAD:al,RAD2DEG:Hr,generateUUID:Wr,clamp:ye,euclideanModulo:op,mapLinear:qM,inverseLerp:YM,lerp:sl,damp:jM,pingpong:ZM,smoothstep:KM,smootherstep:QM,randInt:JM,randFloat:$M,randFloatSpread:tS,seededRandom:eS,degToRad:nS,radToDeg:iS,isPowerOfTwo:aS,ceilPowerOfTwo:sS,floorPowerOfTwo:rS,setQuaternionFromProperEuler:oS,normalize:Fn,denormalize:wr};class ae{constructor(t=0,n=0){ae.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qr{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,f,h){let d=a[l+0],p=a[l+1],g=a[l+2],v=a[l+3];const _=c[f+0],x=c[f+1],S=c[f+2],T=c[f+3];if(h===0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=S,t[n+3]=T;return}if(v!==T||d!==_||p!==x||g!==S){let M=1-h;const y=d*_+p*x+g*S+v*T,U=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const P=Math.sqrt(L),O=Math.atan2(P,y*U);M=Math.sin(M*O)/P,h=Math.sin(h*O)/P}const C=h*U;if(d=d*M+_*C,p=p*M+x*C,g=g*M+S*C,v=v*M+T*C,M===1-h){const P=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=P,p*=P,g*=P,v*=P}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,l,c,f){const h=a[l],d=a[l+1],p=a[l+2],g=a[l+3],v=c[f],_=c[f+1],x=c[f+2],S=c[f+3];return t[n]=h*S+g*v+d*x-p*_,t[n+1]=d*S+g*_+p*v-h*x,t[n+2]=p*S+g*x+h*_-d*v,t[n+3]=g*S-h*v-d*_-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(l/2),v=h(c/2),_=d(a/2),x=d(l/2),S=d(c/2);switch(f){case"XYZ":this._x=_*g*v+p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v-_*x*S;break;case"YXZ":this._x=_*g*v+p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v+_*x*S;break;case"ZXY":this._x=_*g*v-p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v-_*x*S;break;case"ZYX":this._x=_*g*v-p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v+_*x*S;break;case"YZX":this._x=_*g*v+p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v-_*x*S;break;case"XZY":this._x=_*g*v-p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v+_*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],f=n[1],h=n[5],d=n[9],p=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-d)*x,this._y=(c-p)*x,this._z=(f-l)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(g-d)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+p)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-p)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(f-l)/x,this._x=(c+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,f=t._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+f*h+l*p-c*d,this._y=l*g+f*d+c*h-a*p,this._z=c*g+f*p+a*d-l*h,this._w=f*g-a*h-l*d-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const x=1-n;return this._w=x*f+n*this._w,this._x=x*a+n*this._x,this._y=x*l+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),v=Math.sin((1-n)*g)/p,_=Math.sin(n*g)/p;return this._w=f*v+this._w*_,this._x=a*v+this._x*_,this._y=l*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,n=0,a=0){W.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ov.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ov.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,f=t.y,h=t.z,d=t.w,p=2*(f*l-h*a),g=2*(h*n-c*l),v=2*(c*a-f*n);return this.x=n+d*p+f*v-h*g,this.y=a+d*g+h*p-c*v,this.z=l+d*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,f=n.x,h=n.y,d=n.z;return this.x=l*d-c*h,this.y=c*f-a*d,this.z=a*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new W,ov=new qr;class de{constructor(t,n,a,l,c,f,h,d,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,h,d,p)}set(t,n,a,l,c,f,h,d,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],h=a[3],d=a[6],p=a[1],g=a[4],v=a[7],_=a[2],x=a[5],S=a[8],T=l[0],M=l[3],y=l[6],U=l[1],L=l[4],C=l[7],P=l[2],O=l[5],F=l[8];return c[0]=f*T+h*U+d*P,c[3]=f*M+h*L+d*O,c[6]=f*y+h*C+d*F,c[1]=p*T+g*U+v*P,c[4]=p*M+g*L+v*O,c[7]=p*y+g*C+v*F,c[2]=_*T+x*U+S*P,c[5]=_*M+x*L+S*O,c[8]=_*y+x*C+S*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-a*c*g+a*h*d+l*c*p-l*f*d}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=g*f-h*p,_=h*d-g*c,x=p*c-f*d,S=n*v+a*_+l*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=v*T,t[1]=(l*p-g*a)*T,t[2]=(h*a-l*f)*T,t[3]=_*T,t[4]=(g*n-l*d)*T,t[5]=(l*c-h*n)*T,t[6]=x*T,t[7]=(a*d-p*n)*T,t[8]=(f*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,f,h){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*f+p*h)+f+t,-l*p,l*d,-l*(-p*f+d*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Rh.makeScale(t,n)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new de;function D_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function uu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lS(){const r=uu("canvas");return r.style.display="block",r}const lv={};function fl(r){r in lv||(lv[r]=!0,console.warn(r))}function cS(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const cv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uS(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Oe&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Oe&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Fr]:{primaries:t,whitePoint:a,transfer:lu,toXYZ:cv,fromXYZ:uv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:a,transfer:Oe,toXYZ:cv,fromXYZ:uv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Re=uS();function da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let dr;class fS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{dr===void 0&&(dr=uu("canvas")),dr.width=t.width,dr.height=t.height;const l=dr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=dr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=uu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=da(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(da(n[a]/255)*255):n[a]=da(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hS=0;class lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(wh(l[f].image)):c.push(wh(l[f]))}else c=wh(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dS=0;const Ch=new W;class Gn extends Xr{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,a=As,l=As,c=Ii,f=Rs,h=Ri,d=Vi,p=Gn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Wr(),this.name="",this.source=new lp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==y_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vd:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case _d:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vd:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case _d:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=y_;Gn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,n=0,a=0,l=1){Ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const d=t.elements,p=d[0],g=d[4],v=d[8],_=d[1],x=d[5],S=d[9],T=d[2],M=d[6],y=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(S-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(S+M)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,C=(x+1)/2,P=(y+1)/2,O=(g+_)/4,F=(v+T)/4,V=(S+M)/4;return L>C&&L>P?L<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(L),l=O/a,c=F/a):C>P?C<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),a=O/l,c=V/l):P<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),a=F/c,l=V/c),this.set(a,l,c,n),this}let U=Math.sqrt((M-S)*(M-S)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(M-S)/U,this.y=(v-T)/U,this.z=(_-g)/U,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Xr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n);const l={width:t,height:n,depth:a.depth},c=new Gn(l);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new lp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends pS{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class U_ extends Gn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends Gn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),bc.copy(a.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Ac.subVectors(this.max,jo),pr.subVectors(t.a,jo),mr.subVectors(t.b,jo),gr.subVectors(t.c,jo),Ia.subVectors(mr,pr),Fa.subVectors(gr,mr),ms.subVectors(pr,gr);let n=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-ms.z,ms.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,ms.z,0,-ms.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-ms.y,ms.x,0];return!Dh(n,pr,mr,gr,Ac)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,pr,mr,gr,Ac))?!1:(Rc.crossVectors(Ia,Fa),n=[Rc.x,Rc.y,Rc.z],Dh(n,pr,mr,gr,Ac))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,bc=new Ds,pr=new W,mr=new W,gr=new W,Ia=new W,Fa=new W,ms=new W,jo=new W,Ac=new W,Rc=new W,gs=new W;function Dh(r,t,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){gs.fromArray(r,c);const h=l.x*Math.abs(gs.x)+l.y*Math.abs(gs.y)+l.z*Math.abs(gs.z),d=t.dot(gs),p=n.dot(gs),g=a.dot(gs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const gS=new Ds,Zo=new W,Uh=new W;class Yr{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):gS.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(Zo,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Uh)),this.expandByPoint(Zo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new W,Lh=new W,wc=new W,Ha=new W,Nh=new W,Cc=new W,Ph=new W;class L_{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){Lh.copy(t).add(n).multiplyScalar(.5),wc.copy(n).sub(t).normalize(),Ha.copy(this.origin).sub(Lh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(wc),h=Ha.dot(this.direction),d=-Ha.dot(wc),p=Ha.lengthSq(),g=Math.abs(1-f*f);let v,_,x,S;if(g>0)if(v=f*d-h,_=f*h-d,S=c*g,v>=0)if(_>=-S)if(_<=S){const T=1/g;v*=T,_*=T,x=v*(v+f*_+2*h)+_*(f*v+_+2*d)+p}else _=c,v=Math.max(0,-(f*_+h)),x=-v*v+_*(_+2*d)+p;else _=-c,v=Math.max(0,-(f*_+h)),x=-v*v+_*(_+2*d)+p;else _<=-S?(v=Math.max(0,-(-f*c+h)),_=v>0?-c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p):_<=S?(v=0,_=Math.min(Math.max(-c,-d),c),x=_*(_+2*d)+p):(v=Math.max(0,-(f*c+h)),_=v>0?c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p);else _=f>0?-c:c,v=Math.max(0,-(f*_+h)),x=-v*v+_*(_+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Lh).addScaledVector(wc,_),x}intersectSphere(t,n){ra.subVectors(t.center,this.origin);const a=ra.dot(this.direction),l=ra.dot(ra)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,d=a+f;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,f,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),a>d||h>l)||((h>a||a!==a)&&(a=h),(d<l||l!==l)&&(l=d),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,n,a,l,c){Nh.subVectors(n,t),Cc.subVectors(a,t),Ph.crossVectors(Nh,Cc);let f=this.direction.dot(Ph),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ha.subVectors(this.origin,t);const d=h*this.direction.dot(Cc.crossVectors(Ha,Cc));if(d<0)return null;const p=h*this.direction.dot(Nh.cross(Ha));if(p<0||d+p>f)return null;const g=-h*Ha.dot(Ph);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,n,a,l,c,f,h,d,p,g,v,_,x,S,T,M){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,h,d,p,g,v,_,x,S,T,M)}set(t,n,a,l,c,f,h,d,p,g,v,_,x,S,T,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=d,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=S,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),c=1/vr.setFromMatrixColumn(t,1).length(),f=1/vr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),d=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=f*g,x=f*v,S=h*g,T=h*v;n[0]=d*g,n[4]=-d*v,n[8]=p,n[1]=x+S*p,n[5]=_-T*p,n[9]=-h*d,n[2]=T-_*p,n[6]=S+x*p,n[10]=f*d}else if(t.order==="YXZ"){const _=d*g,x=d*v,S=p*g,T=p*v;n[0]=_+T*h,n[4]=S*h-x,n[8]=f*p,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=x*h-S,n[6]=T+_*h,n[10]=f*d}else if(t.order==="ZXY"){const _=d*g,x=d*v,S=p*g,T=p*v;n[0]=_-T*h,n[4]=-f*v,n[8]=S+x*h,n[1]=x+S*h,n[5]=f*g,n[9]=T-_*h,n[2]=-f*p,n[6]=h,n[10]=f*d}else if(t.order==="ZYX"){const _=f*g,x=f*v,S=h*g,T=h*v;n[0]=d*g,n[4]=S*p-x,n[8]=_*p+T,n[1]=d*v,n[5]=T*p+_,n[9]=x*p-S,n[2]=-p,n[6]=h*d,n[10]=f*d}else if(t.order==="YZX"){const _=f*d,x=f*p,S=h*d,T=h*p;n[0]=d*g,n[4]=T-_*v,n[8]=S*v+x,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*v+S,n[10]=_-T*v}else if(t.order==="XZY"){const _=f*d,x=f*p,S=h*d,T=h*p;n[0]=d*g,n[4]=-v,n[8]=p*g,n[1]=_*v+T,n[5]=f*g,n[9]=x*v-S,n[2]=S*v-x,n[6]=h*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vS,t,_S)}lookAt(t,n,a){const l=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ga.crossVectors(a,ii),Ga.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ga.crossVectors(a,ii)),Ga.normalize(),Dc.crossVectors(ii,Ga),l[0]=Ga.x,l[4]=Dc.x,l[8]=ii.x,l[1]=Ga.y,l[5]=Dc.y,l[9]=ii.y,l[2]=Ga.z,l[6]=Dc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],h=a[4],d=a[8],p=a[12],g=a[1],v=a[5],_=a[9],x=a[13],S=a[2],T=a[6],M=a[10],y=a[14],U=a[3],L=a[7],C=a[11],P=a[15],O=l[0],F=l[4],V=l[8],w=l[12],D=l[1],G=l[5],Z=l[9],lt=l[13],ut=l[2],ft=l[6],B=l[10],nt=l[14],j=l[3],yt=l[7],N=l[11],tt=l[15];return c[0]=f*O+h*D+d*ut+p*j,c[4]=f*F+h*G+d*ft+p*yt,c[8]=f*V+h*Z+d*B+p*N,c[12]=f*w+h*lt+d*nt+p*tt,c[1]=g*O+v*D+_*ut+x*j,c[5]=g*F+v*G+_*ft+x*yt,c[9]=g*V+v*Z+_*B+x*N,c[13]=g*w+v*lt+_*nt+x*tt,c[2]=S*O+T*D+M*ut+y*j,c[6]=S*F+T*G+M*ft+y*yt,c[10]=S*V+T*Z+M*B+y*N,c[14]=S*w+T*lt+M*nt+y*tt,c[3]=U*O+L*D+C*ut+P*j,c[7]=U*F+L*G+C*ft+P*yt,c[11]=U*V+L*Z+C*B+P*N,c[15]=U*w+L*lt+C*nt+P*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],f=t[1],h=t[5],d=t[9],p=t[13],g=t[2],v=t[6],_=t[10],x=t[14],S=t[3],T=t[7],M=t[11],y=t[15];return S*(+c*d*v-l*p*v-c*h*_+a*p*_+l*h*x-a*d*x)+T*(+n*d*x-n*p*_+c*f*_-l*f*x+l*p*g-c*d*g)+M*(+n*p*v-n*h*x-c*f*v+a*f*x+c*h*g-a*p*g)+y*(-l*h*g-n*d*v+n*h*_+l*f*v-a*f*_+a*d*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],x=t[11],S=t[12],T=t[13],M=t[14],y=t[15],U=v*M*p-T*_*p+T*d*x-h*M*x-v*d*y+h*_*y,L=S*_*p-g*M*p-S*d*x+f*M*x+g*d*y-f*_*y,C=g*T*p-S*v*p+S*h*x-f*T*x-g*h*y+f*v*y,P=S*v*d-g*T*d-S*h*_+f*T*_+g*h*M-f*v*M,O=n*U+a*L+l*C+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=U*F,t[1]=(T*_*c-v*M*c-T*l*x+a*M*x+v*l*y-a*_*y)*F,t[2]=(h*M*c-T*d*c+T*l*p-a*M*p-h*l*y+a*d*y)*F,t[3]=(v*d*c-h*_*c-v*l*p+a*_*p+h*l*x-a*d*x)*F,t[4]=L*F,t[5]=(g*M*c-S*_*c+S*l*x-n*M*x-g*l*y+n*_*y)*F,t[6]=(S*d*c-f*M*c-S*l*p+n*M*p+f*l*y-n*d*y)*F,t[7]=(f*_*c-g*d*c+g*l*p-n*_*p-f*l*x+n*d*x)*F,t[8]=C*F,t[9]=(S*v*c-g*T*c-S*a*x+n*T*x+g*a*y-n*v*y)*F,t[10]=(f*T*c-S*h*c+S*a*p-n*T*p-f*a*y+n*h*y)*F,t[11]=(g*h*c-f*v*c-g*a*p+n*v*p+f*a*x-n*h*x)*F,t[12]=P*F,t[13]=(g*T*l-S*v*l+S*a*_-n*T*_-g*a*M+n*v*M)*F,t[14]=(S*h*l-f*T*l-S*a*d+n*T*d+f*a*M-n*h*M)*F,t[15]=(f*v*l-g*h*l+g*a*d-n*v*d-f*a*_+n*h*_)*F,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=t.x,h=t.y,d=t.z,p=c*f,g=c*h;return this.set(p*f+a,p*h-l*d,p*d+l*h,0,p*h+l*d,g*h+a,g*d-l*f,0,p*d-l*h,g*d+l*f,c*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,f=n._y,h=n._z,d=n._w,p=c+c,g=f+f,v=h+h,_=c*p,x=c*g,S=c*v,T=f*g,M=f*v,y=h*v,U=d*p,L=d*g,C=d*v,P=a.x,O=a.y,F=a.z;return l[0]=(1-(T+y))*P,l[1]=(x+C)*P,l[2]=(S-L)*P,l[3]=0,l[4]=(x-C)*O,l[5]=(1-(_+y))*O,l[6]=(M+U)*O,l[7]=0,l[8]=(S+L)*F,l[9]=(M-U)*F,l[10]=(1-(_+T))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;let c=vr.set(l[0],l[1],l[2]).length();const f=vr.set(l[4],l[5],l[6]).length(),h=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,g=1/f,v=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,n.setFromRotationMatrix(Ei),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,l,c,f,h=Hi,d=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(a-l),_=(n+t)/(n-t),x=(a+l)/(a-l);let S,T;if(d)S=c/(f-c),T=f*c/(f-c);else if(h===Hi)S=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===cu)S=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,f,h=Hi,d=!1){const p=this.elements,g=2/(n-t),v=2/(a-l),_=-(n+t)/(n-t),x=-(a+l)/(a-l);let S,T;if(d)S=1/(f-c),T=f/(f-c);else if(h===Hi)S=-2/(f-c),T=-(f+c)/(f-c);else if(h===cu)S=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const vr=new W,Ei=new Xe,vS=new W(0,0,0),_S=new W(1,1,1),Ga=new W,Dc=new W,ii=new W,fv=new Xe,hv=new qr;class ki{constructor(t=0,n=0,a=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],_=l[6],x=l[10];switch(n){case"XYZ":this._y=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return fv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hv.setFromEuler(this),this.setFromQuaternion(hv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class N_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xS=0;const dv=new W,_r=new qr,oa=new Xe,Uc=new W,Ko=new W,yS=new W,MS=new qr,pv=new W(1,0,0),mv=new W(0,1,0),gv=new W(0,0,1),vv={type:"added"},SS={type:"removed"},xr={type:"childadded",child:null},Oh={type:"childremoved",child:null};class rn extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new W,n=new ki,a=new qr,l=new W(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new de}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return _r.setFromAxisAngle(t,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,n){return _r.setFromAxisAngle(t,n),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(pv,t)}rotateY(t){return this.rotateOnAxis(mv,t)}rotateZ(t){return this.rotateOnAxis(gv,t)}translateOnAxis(t,n){return dv.copy(t).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(pv,t)}translateY(t){return this.translateOnAxis(mv,t)}translateZ(t){return this.translateOnAxis(gv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Uc.copy(t):Uc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Ko,Uc,this.up):oa.lookAt(Uc,Ko,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(oa),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vv),xr.child=t,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(SS),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vv),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,yS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,MS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(t.shapes,v)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];l.animations.push(c(t.animations,d))}}if(n){const h=f(t.geometries),d=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),x=f(t.animations),S=f(t.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),S.length>0&&(a.nodes=S)}return a.object=l,a;function f(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new W,la=new W,zh=new W,ca=new W,yr=new W,Mr=new W,_v=new W,Bh=new W,Ih=new W,Fh=new W,Hh=new Ge,Gh=new Ge,Vh=new Ge;class Ai{constructor(t=new W,n=new W,a=new W){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Ti.subVectors(t,n),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Ti.subVectors(l,n),la.subVectors(a,n),zh.subVectors(t,n);const f=Ti.dot(Ti),h=Ti.dot(la),d=Ti.dot(zh),p=la.dot(la),g=la.dot(zh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(p*d-h*g)*_,S=(f*g-h*d)*_;return c.set(1-x-S,S,x)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,n,a,l,c,f,h,d){return this.getBarycoord(t,n,a,l,ca)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,ca.x),d.addScaledVector(f,ca.y),d.addScaledVector(h,ca.z),d)}static getInterpolatedAttribute(t,n,a,l,c,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,a),Vh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(t,n,a,l){return Ti.subVectors(a,n),la.subVectors(t,n),Ti.cross(la).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ti.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ai.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let f,h;yr.subVectors(l,a),Mr.subVectors(c,a),Bh.subVectors(t,a);const d=yr.dot(Bh),p=Mr.dot(Bh);if(d<=0&&p<=0)return n.copy(a);Ih.subVectors(t,l);const g=yr.dot(Ih),v=Mr.dot(Ih);if(g>=0&&v<=g)return n.copy(l);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return f=d/(d-g),n.copy(a).addScaledVector(yr,f);Fh.subVectors(t,c);const x=yr.dot(Fh),S=Mr.dot(Fh);if(S>=0&&x<=S)return n.copy(c);const T=x*p-d*S;if(T<=0&&p>=0&&S<=0)return h=p/(p-S),n.copy(a).addScaledVector(Mr,h);const M=g*S-x*v;if(M<=0&&v-g>=0&&x-S>=0)return _v.subVectors(c,l),h=(v-g)/(v-g+(x-S)),n.copy(l).addScaledVector(_v,h);const y=1/(M+T+_);return f=T*y,h=_*y,n.copy(a).addScaledVector(yr,f).addScaledVector(Mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class le{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=Re.workingColorSpace){if(t=op(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=kh(f,c,t+1/3),this.g=kh(f,c,t),this.b=kh(f,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,n=ri){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ri){const a=P_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Re.workingToColorSpace(On.copy(this),t),Math.round(ye(On.r*255,0,255))*65536+Math.round(ye(On.g*255,0,255))*256+Math.round(ye(On.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(On.copy(this),n);const a=On.r,l=On.g,c=On.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let d,p;const g=(h+f)/2;if(h===f)d=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case a:d=(l-c)/v+(l<c?6:0);break;case l:d=(c-a)/v+2;break;case c:d=(a-l)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=ri){Re.workingToColorSpace(On.copy(this),t);const n=On.r,a=On.g,l=On.b;return t!==ri?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+n,Va.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Va),t.getHSL(Lc);const a=sl(Va.h,Lc.h,n),l=sl(Va.s,Lc.s,n),c=sl(Va.l,Lc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new le;le.NAMES=P_;let ES=0;class jr extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Lr,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(a.blending=this.blending),this.side!==Za&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==rd&&(a.blendSrc=this.blendSrc),this.blendDst!==od&&(a.blendDst=this.blendDst),this.blendEquation!==Ts&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const d=c[h];delete d.metadata,f.push(d)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qa extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new W,Nc=new ae;let TS=0;class li{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=av,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Nc.fromBufferAttribute(this,n),Nc.applyMatrix3(t),this.setXY(n,Nc.x,Nc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=wr(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Fn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=wr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=wr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=wr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=wr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),l=Fn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==av&&(t.usage=this.usage),t}}class O_ extends li{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class z_ extends li{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class we extends li{constructor(t,n,a){super(new Float32Array(t),n,a)}}let bS=0;const gi=new Xe,Xh=new rn,Sr=new W,ai=new Ds,Qo=new Ds,bn=new W;class hn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D_(t)?z_:O_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new de().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,n,a){return gi.makeTranslation(t,n,a),this.applyMatrix4(gi),this}scale(t,n,a){return gi.makeScale(t,n,a),this.applyMatrix4(gi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new we(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ai.min,Qo.min),ai.expandByPoint(bn),bn.addVectors(ai.max,Qo.max),ai.expandByPoint(bn)):(ai.expandByPoint(Qo.min),ai.expandByPoint(Qo.max))}ai.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(bn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),d&&(Sr.fromBufferAttribute(t,p),bn.add(Sr)),l=Math.max(l,a.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],d=[];for(let V=0;V<a.count;V++)h[V]=new W,d[V]=new W;const p=new W,g=new W,v=new W,_=new ae,x=new ae,S=new ae,T=new W,M=new W;function y(V,w,D){p.fromBufferAttribute(a,V),g.fromBufferAttribute(a,w),v.fromBufferAttribute(a,D),_.fromBufferAttribute(c,V),x.fromBufferAttribute(c,w),S.fromBufferAttribute(c,D),g.sub(p),v.sub(p),x.sub(_),S.sub(_);const G=1/(x.x*S.y-S.x*x.y);isFinite(G)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(v,-x.y).multiplyScalar(G),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-S.x).multiplyScalar(G),h[V].add(T),h[w].add(T),h[D].add(T),d[V].add(M),d[w].add(M),d[D].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let V=0,w=U.length;V<w;++V){const D=U[V],G=D.start,Z=D.count;for(let lt=G,ut=G+Z;lt<ut;lt+=3)y(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const L=new W,C=new W,P=new W,O=new W;function F(V){P.fromBufferAttribute(l,V),O.copy(P);const w=h[V];L.copy(w),L.sub(P.multiplyScalar(P.dot(w))).normalize(),C.crossVectors(O,w);const G=C.dot(d[V])<0?-1:1;f.setXYZW(V,L.x,L.y,L.z,G)}for(let V=0,w=U.length;V<w;++V){const D=U[V],G=D.start,Z=D.count;for(let lt=G,ut=G+Z;lt<ut;lt+=3)F(t.getX(lt+0)),F(t.getX(lt+1)),F(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const l=new W,c=new W,f=new W,h=new W,d=new W,p=new W,g=new W,v=new W;if(t)for(let _=0,x=t.count;_<x;_+=3){const S=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(a,S),d.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),h.add(g),d.add(g),p.add(g),a.setXYZ(S,h.x,h.y,h.z),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,x=n.count;_<x;_+=3)l.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),f.fromBufferAttribute(n,_+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(d.length*g);let x=0,S=0;for(let T=0,M=d.length;T<M;T++){h.isInterleavedBufferAttribute?x=d[T]*h.data.stride+h.offset:x=d[T]*g;for(let y=0;y<g;y++)_[S++]=p[x++]}return new li(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,a=this.index.array,l=this.attributes;for(const h in l){const d=l[h],p=t(d,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=t(_,a);d.push(x)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,d=f.length;h<d;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const l={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(t.data))}g.length>0&&(l[d]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xv=new Xe,vs=new L_,Pc=new Yr,yv=new W,Oc=new W,zc=new W,Bc=new W,Wh=new W,Ic=new W,Mv=new W,Fc=new W;class Te extends rn{constructor(t=new hn,n=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Ic.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],v=c[d];g!==0&&(Wh.fromBufferAttribute(v,t),f?Ic.addScaledVector(Wh,g):Ic.addScaledVector(Wh.sub(n),g))}n.add(Ic)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(c),vs.copy(t.ray).recast(t.near),!(Pc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Pc,yv)===null||vs.origin.distanceToSquared(yv)>(t.far-t.near)**2))&&(xv.copy(c).invert(),vs.copy(t.ray).applyMatrix4(xv),!(a.boundingBox!==null&&vs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,vs)))}_computeIntersections(t,n,a){let l;const c=this.geometry,f=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let S=0,T=_.length;S<T;S++){const M=_[S],y=f[M.materialIndex],U=Math.max(M.start,x.start),L=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let C=U,P=L;C<P;C+=3){const O=h.getX(C),F=h.getX(C+1),V=h.getX(C+2);l=Hc(this,y,t,a,p,g,v,O,F,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const S=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let M=S,y=T;M<y;M+=3){const U=h.getX(M),L=h.getX(M+1),C=h.getX(M+2);l=Hc(this,f,t,a,p,g,v,U,L,C),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(d!==void 0)if(Array.isArray(f))for(let S=0,T=_.length;S<T;S++){const M=_[S],y=f[M.materialIndex],U=Math.max(M.start,x.start),L=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let C=U,P=L;C<P;C+=3){const O=C,F=C+1,V=C+2;l=Hc(this,y,t,a,p,g,v,O,F,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const S=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let M=S,y=T;M<y;M+=3){const U=M,L=M+1,C=M+2;l=Hc(this,f,t,a,p,g,v,U,L,C),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function AS(r,t,n,a,l,c,f,h){let d;if(t.side===Zn?d=a.intersectTriangle(f,c,l,!0,h):d=a.intersectTriangle(l,c,f,t.side===Za,h),d===null)return null;Fc.copy(h),Fc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Fc);return p<n.near||p>n.far?null:{distance:p,point:Fc.clone(),object:r}}function Hc(r,t,n,a,l,c,f,h,d,p){r.getVertexPosition(h,Oc),r.getVertexPosition(d,zc),r.getVertexPosition(p,Bc);const g=AS(r,t,n,a,Oc,zc,Bc,Mv);if(g){const v=new W;Ai.getBarycoord(Mv,Oc,zc,Bc,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,h,d,p,v,new ae)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,h,d,p,v,new ae)),f&&(g.normal=Ai.getInterpolatedAttribute(f,h,d,p,v,new W),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new W,materialIndex:0};Ai.getNormal(Oc,zc,Bc,_.normal),g.face=_,g.barycoord=v}return g}class Zr extends hn{constructor(t=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const d=[],p=[],g=[],v=[];let _=0,x=0;S("z","y","x",-1,-1,a,n,t,f,c,0),S("z","y","x",1,-1,a,n,-t,f,c,1),S("x","z","y",1,1,t,a,n,l,f,2),S("x","z","y",1,-1,t,a,-n,l,f,3),S("x","y","z",1,-1,t,n,a,l,c,4),S("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(d),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(v,2));function S(T,M,y,U,L,C,P,O,F,V,w){const D=C/F,G=P/V,Z=C/2,lt=P/2,ut=O/2,ft=F+1,B=V+1;let nt=0,j=0;const yt=new W;for(let N=0;N<B;N++){const tt=N*G-lt;for(let xt=0;xt<ft;xt++){const Mt=xt*D-Z;yt[T]=Mt*U,yt[M]=tt*L,yt[y]=ut,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[y]=O>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(xt/F),v.push(1-N/V),nt+=1}}for(let N=0;N<V;N++)for(let tt=0;tt<F;tt++){const xt=_+tt+ft*N,Mt=_+tt+ft*(N+1),Ut=_+(tt+1)+ft*(N+1),Ht=_+(tt+1)+ft*N;d.push(xt,Mt,Ht),d.push(Mt,Ut,Ht),j+=6}h.addGroup(x,j,w),x+=j,_+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function Hn(r){const t={};for(let n=0;n<r.length;n++){const a=Gr(r[n]);for(const l in a)t[l]=a[l]}return t}function RS(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function B_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const hl={clone:Gr,merge:Hn};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=CS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=RS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class I_ extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new W,Sv=new ae,Ev=new ae;class Yn extends I_{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,n){return this.getViewBounds(t,Sv,Ev),n.subVectors(Ev,Sv)}setViewOffset(t,n,a,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(al*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/d,n-=f.offsetY*a/p,l*=f.width/d,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Tr=1;class DS extends rn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(Er,Tr,t,n);l.layers=this.layers,this.add(l);const c=new Yn(Er,Tr,t,n);c.layers=this.layers,this.add(c);const f=new Yn(Er,Tr,t,n);f.layers=this.layers,this.add(f);const h=new Yn(Er,Tr,t,n);h.layers=this.layers,this.add(h);const d=new Yn(Er,Tr,t,n);d.layers=this.layers,this.add(d);const p=new Yn(Er,Tr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,h,d]=n;for(const p of n)this.remove(p);if(t===Hi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===cu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,d,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,c),t.setRenderTarget(a,1,l),t.render(n,f),t.setRenderTarget(a,2,l),t.render(n,h),t.setRenderTarget(a,3,l),t.render(n,d),t.setRenderTarget(a,4,l),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,l),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=S,a.texture.needsPMREMUpdate=!0}}class F_ extends Gn{constructor(t=[],n=Br,a,l,c,f,h,d,p,g){super(t,n,a,l,c,f,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class US extends wi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new F_(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Zr(5,5,5),c=new _n({name:"CubemapFromEquirect",uniforms:Gr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:fa});c.uniforms.tEquirect.value=n;const f=new Te(l,c),h=n.minFilter;return n.minFilter===Rs&&(n.minFilter=Ii),new DS(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,l);t.setRenderTarget(c)}}class vn extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LS={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,f=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),y=this._getHandJoint(p,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,S=.005;p.inputState.pinching&&_>x+S?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=x-S&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new vn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class pu{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(t),this.density=n}clone(){return new pu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NS extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class PS extends Gn{constructor(t=null,n=1,a=1,l,c,f,h,d,p=oi,g=oi,v,_){super(null,f,h,d,p,g,l,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tv extends li{constructor(t,n,a,l=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const br=new Xe,bv=new Xe,Gc=[],Av=new Ds,OS=new Xe,Jo=new Te,$o=new Yr;class Rv extends Te{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Tv(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<a;l++)this.setMatrixAt(l,OS)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,br),Av.copy(t.boundingBox).applyMatrix4(br),this.boundingBox.union(Av)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,br),$o.copy(t.boundingSphere).applyMatrix4(br),this.boundingSphere.union($o)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,l=this.morphTexture.source.data.data,c=a.length+1,f=t*c+1;for(let h=0;h<a.length;h++)a[h]=l[f+h]}raycast(t,n){const a=this.matrixWorld,l=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(a),t.ray.intersectsSphere($o)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,br),bv.multiplyMatrices(a,br),Jo.matrixWorld=bv,Jo.raycast(t,Gc);for(let f=0,h=Gc.length;f<h;f++){const d=Gc[f];d.instanceId=c,d.object=this,n.push(d)}Gc.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Tv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,l=a.length+1;this.morphTexture===null&&(this.morphTexture=new PS(new Float32Array(l*this.count),l,this.count,ip,Fi));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<a.length;p++)f+=a[p];const h=this.geometry.morphTargetsRelative?1:1-f,d=l*t;c[d]=h,c.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yh=new W,zS=new W,BS=new de;class Ss{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=Yh.subVectors(a,n).cross(zS.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Yh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||BS.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Yr,IS=new ae(.5,.5),Vc=new W;class cp{constructor(t=new Ss,n=new Ss,a=new Ss,l=new Ss,c=new Ss,f=new Ss){this.planes=[t,n,a,l,c,f]}set(t,n,a,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Hi,a=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],d=c[2],p=c[3],g=c[4],v=c[5],_=c[6],x=c[7],S=c[8],T=c[9],M=c[10],y=c[11],U=c[12],L=c[13],C=c[14],P=c[15];if(l[0].setComponents(p-f,x-g,y-S,P-U).normalize(),l[1].setComponents(p+f,x+g,y+S,P+U).normalize(),l[2].setComponents(p+h,x+v,y+T,P+L).normalize(),l[3].setComponents(p-h,x-v,y-T,P-L).normalize(),a)l[4].setComponents(d,_,M,C).normalize(),l[5].setComponents(p-d,x-_,y-M,P-C).normalize();else if(l[4].setComponents(p-d,x-_,y-M,P-C).normalize(),n===Hi)l[5].setComponents(p+d,x+_,y+M,P+C).normalize();else if(n===cu)l[5].setComponents(d,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);const n=IS.distanceTo(t.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class FS extends jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wv=new Xe,Yd=new L_,kc=new Yr,Xc=new W;class HS extends rn{constructor(t=new hn,n=new FS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;wv.copy(l).invert(),Yd.copy(t.ray).applyMatrix4(wv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=a.index,v=a.attributes.position;if(p!==null){const _=Math.max(0,f.start),x=Math.min(p.count,f.start+f.count);for(let S=_,T=x;S<T;S++){const M=p.getX(S);Xc.fromBufferAttribute(v,M),Cv(Xc,M,d,l,t,n,this)}}else{const _=Math.max(0,f.start),x=Math.min(v.count,f.start+f.count);for(let S=_,T=x;S<T;S++)Xc.fromBufferAttribute(v,S),Cv(Xc,S,d,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Cv(r,t,n,a,l,c,f){const h=Yd.distanceSqToPoint(r);if(h<n){const d=new W;Yd.closestPointToPoint(r,d),d.applyMatrix4(a);const p=l.ray.origin.distanceTo(d);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class H_ extends Gn{constructor(t,n,a=ws,l,c,f,h=oi,d=oi,p,g=cl,v=1){if(g!==cl&&g!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,l,c,f,h,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class G_ extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class up extends hn{constructor(t=1,n=32,a=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:l},n=Math.max(3,n);const c=[],f=[],h=[],d=[],p=new W,g=new ae;f.push(0,0,0),h.push(0,0,1),d.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const x=a+v/n*l;p.x=t*Math.cos(x),p.y=t*Math.sin(x),f.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(f[_]/t+1)/2,g.y=(f[_+1]/t+1)/2,d.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new up(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class bi extends hn{constructor(t=1,n=1,a=1,l=32,c=1,f=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:d};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],_=[],x=[];let S=0;const T=[],M=a/2;let y=0;U(),f===!1&&(t>0&&L(!0),n>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new we(v,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(x,2));function U(){const C=new W,P=new W;let O=0;const F=(n-t)/a;for(let V=0;V<=c;V++){const w=[],D=V/c,G=D*(n-t)+t;for(let Z=0;Z<=l;Z++){const lt=Z/l,ut=lt*d+h,ft=Math.sin(ut),B=Math.cos(ut);P.x=G*ft,P.y=-D*a+M,P.z=G*B,v.push(P.x,P.y,P.z),C.set(ft,F,B).normalize(),_.push(C.x,C.y,C.z),x.push(lt,1-D),w.push(S++)}T.push(w)}for(let V=0;V<l;V++)for(let w=0;w<c;w++){const D=T[w][V],G=T[w+1][V],Z=T[w+1][V+1],lt=T[w][V+1];(t>0||w!==0)&&(g.push(D,G,lt),O+=3),(n>0||w!==c-1)&&(g.push(G,Z,lt),O+=3)}p.addGroup(y,O,0),y+=O}function L(C){const P=S,O=new ae,F=new W;let V=0;const w=C===!0?t:n,D=C===!0?1:-1;for(let Z=1;Z<=l;Z++)v.push(0,M*D,0),_.push(0,D,0),x.push(.5,.5),S++;const G=S;for(let Z=0;Z<=l;Z++){const ut=Z/l*d+h,ft=Math.cos(ut),B=Math.sin(ut);F.x=w*B,F.y=M*D,F.z=w*ft,v.push(F.x,F.y,F.z),_.push(0,D,0),O.x=ft*.5+.5,O.y=B*.5*D+.5,x.push(O.x,O.y),S++}for(let Z=0;Z<l;Z++){const lt=P+Z,ut=G+Z;C===!0?g.push(ut,ut+1,lt):g.push(ut+1,ut,lt),V+=3}p.addGroup(y,V,C===!0?1:2),y+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fp extends bi{constructor(t=1,n=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,n,a,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new fp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hp extends hn{constructor(t=[],n=[],a=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:l};const c=[],f=[];h(l),p(a),g(),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(c.slice(),3)),this.setAttribute("uv",new we(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const L=new W,C=new W,P=new W;for(let O=0;O<n.length;O+=3)x(n[O+0],L),x(n[O+1],C),x(n[O+2],P),d(L,C,P,U)}function d(U,L,C,P){const O=P+1,F=[];for(let V=0;V<=O;V++){F[V]=[];const w=U.clone().lerp(C,V/O),D=L.clone().lerp(C,V/O),G=O-V;for(let Z=0;Z<=G;Z++)Z===0&&V===O?F[V][Z]=w:F[V][Z]=w.clone().lerp(D,Z/G)}for(let V=0;V<O;V++)for(let w=0;w<2*(O-V)-1;w++){const D=Math.floor(w/2);w%2===0?(_(F[V][D+1]),_(F[V+1][D]),_(F[V][D])):(_(F[V][D+1]),_(F[V+1][D+1]),_(F[V+1][D]))}}function p(U){const L=new W;for(let C=0;C<c.length;C+=3)L.x=c[C+0],L.y=c[C+1],L.z=c[C+2],L.normalize().multiplyScalar(U),c[C+0]=L.x,c[C+1]=L.y,c[C+2]=L.z}function g(){const U=new W;for(let L=0;L<c.length;L+=3){U.x=c[L+0],U.y=c[L+1],U.z=c[L+2];const C=M(U)/2/Math.PI+.5,P=y(U)/Math.PI+.5;f.push(C,1-P)}S(),v()}function v(){for(let U=0;U<f.length;U+=6){const L=f[U+0],C=f[U+2],P=f[U+4],O=Math.max(L,C,P),F=Math.min(L,C,P);O>.9&&F<.1&&(L<.2&&(f[U+0]+=1),C<.2&&(f[U+2]+=1),P<.2&&(f[U+4]+=1))}}function _(U){c.push(U.x,U.y,U.z)}function x(U,L){const C=U*3;L.x=t[C+0],L.y=t[C+1],L.z=t[C+2]}function S(){const U=new W,L=new W,C=new W,P=new W,O=new ae,F=new ae,V=new ae;for(let w=0,D=0;w<c.length;w+=9,D+=6){U.set(c[w+0],c[w+1],c[w+2]),L.set(c[w+3],c[w+4],c[w+5]),C.set(c[w+6],c[w+7],c[w+8]),O.set(f[D+0],f[D+1]),F.set(f[D+2],f[D+3]),V.set(f[D+4],f[D+5]),P.copy(U).add(L).add(C).divideScalar(3);const G=M(P);T(O,D+0,U,G),T(F,D+2,L,G),T(V,D+4,C,G)}}function T(U,L,C,P){P<0&&U.x===1&&(f[L]=U.x-1),C.x===0&&C.z===0&&(f[L]=P/2/Math.PI+.5)}function M(U){return Math.atan2(U.z,-U.x)}function y(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hp(t.vertices,t.indices,t.radius,t.details)}}class GS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(l),n.push(c),l=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let l=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,d=c-1,p;for(;h<=d;)if(l=Math.floor(h+(d-h)/2),p=a[l]-f,p<0)h=l+1;else if(p>0)d=l-1;else{d=l;break}if(l=d,a[l]===f)return l/(c-1);const g=a[l],_=a[l+1]-g,x=(f-g)/_;return(l+x)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),d=n||(f.isVector2?new ae:new W);return d.copy(h).sub(f).normalize(),d}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new W,l=[],c=[],f=[],h=new W,d=new Xe;for(let x=0;x<=t;x++){const S=x/t;l[x]=this.getTangentAt(S,new W)}c[0]=new W,f[0]=new W;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),_=Math.abs(l[0].z);g<=p&&(p=g,a.set(1,0,0)),v<=p&&(p=v,a.set(0,1,0)),_<=p&&a.set(0,0,1),h.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const S=Math.acos(ye(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(d.makeRotationAxis(h,S))}f[x].crossVectors(l[x],c[x])}if(n===!0){let x=Math.acos(ye(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let S=1;S<=t;S++)c[S].applyMatrix4(d.makeRotationAxis(l[S],x*S)),f[S].crossVectors(l[S],c[S])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function dp(){let r=0,t=0,n=0,a=0;function l(c,f,h,d){r=c,t=h,n=-3*c+3*f-2*h-d,a=2*c-2*f+h+d}return{initCatmullRom:function(c,f,h,d,p){l(f,h,p*(h-c),p*(d-f))},initNonuniformCatmullRom:function(c,f,h,d,p,g,v){let _=(f-c)/p-(h-c)/(p+g)+(h-f)/g,x=(h-f)/g-(d-f)/(g+v)+(d-h)/v;_*=g,x*=g,l(f,h,_,x)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const Wc=new W,jh=new dp,Zh=new dp,Kh=new dp;class VS extends GS{constructor(t=[],n=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=l}getPoint(t,n=new W){const a=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),d=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:d===0&&h===c-1&&(h=c-2,d=1);let p,g;this.closed||h>0?p=l[(h-1)%c]:(Wc.subVectors(l[0],l[1]).add(l[0]),p=Wc);const v=l[h%c],_=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Wc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(p.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(g),x);T<1e-4&&(T=1),S<1e-4&&(S=T),M<1e-4&&(M=T),jh.initNonuniformCatmullRom(p.x,v.x,_.x,g.x,S,T,M),Zh.initNonuniformCatmullRom(p.y,v.y,_.y,g.y,S,T,M),Kh.initNonuniformCatmullRom(p.z,v.z,_.z,g.z,S,T,M)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(p.x,v.x,_.x,g.x,this.tension),Zh.initCatmullRom(p.y,v.y,_.y,g.y,this.tension),Kh.initCatmullRom(p.z,v.z,_.z,g.z,this.tension));return a.set(jh.calc(d),Zh.calc(d),Kh.calc(d)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Pr extends hp{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,l=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Pr(t.radius,t.detail)}}class Cs extends hn{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(a),d=Math.floor(l),p=h+1,g=d+1,v=t/h,_=n/d,x=[],S=[],T=[],M=[];for(let y=0;y<g;y++){const U=y*_-f;for(let L=0;L<p;L++){const C=L*v-c;S.push(C,-U,0),T.push(0,0,1),M.push(L/h),M.push(1-y/d)}}for(let y=0;y<d;y++)for(let U=0;U<h;U++){const L=U+p*y,C=U+p*(y+1),P=U+1+p*(y+1),O=U+1+p*y;x.push(L,C,O),x.push(C,P,O)}this.setIndex(x),this.setAttribute("position",new we(S,3)),this.setAttribute("normal",new we(T,3)),this.setAttribute("uv",new we(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class dl extends hn{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(f+h,Math.PI);let p=0;const g=[],v=new W,_=new W,x=[],S=[],T=[],M=[];for(let y=0;y<=a;y++){const U=[],L=y/a;let C=0;y===0&&f===0?C=.5/n:y===a&&d===Math.PI&&(C=-.5/n);for(let P=0;P<=n;P++){const O=P/n;v.x=-t*Math.cos(l+O*c)*Math.sin(f+L*h),v.y=t*Math.cos(f+L*h),v.z=t*Math.sin(l+O*c)*Math.sin(f+L*h),S.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),M.push(O+C,1-L),U.push(p++)}g.push(U)}for(let y=0;y<a;y++)for(let U=0;U<n;U++){const L=g[y][U+1],C=g[y][U],P=g[y+1][U],O=g[y+1][U+1];(y!==0||f>0)&&x.push(L,C,O),(y!==a-1||d<Math.PI)&&x.push(C,P,O)}this.setIndex(x),this.setAttribute("position",new we(S,3)),this.setAttribute("normal",new we(T,3)),this.setAttribute("uv",new we(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mu extends hn{constructor(t=1,n=.4,a=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:l,arc:c},a=Math.floor(a),l=Math.floor(l);const f=[],h=[],d=[],p=[],g=new W,v=new W,_=new W;for(let x=0;x<=a;x++)for(let S=0;S<=l;S++){const T=S/l*c,M=x/a*Math.PI*2;v.x=(t+n*Math.cos(M))*Math.cos(T),v.y=(t+n*Math.cos(M))*Math.sin(T),v.z=n*Math.sin(M),h.push(v.x,v.y,v.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),_.subVectors(v,g).normalize(),d.push(_.x,_.y,_.z),p.push(S/l),p.push(x/a)}for(let x=1;x<=a;x++)for(let S=1;S<=l;S++){const T=(l+1)*x+S-1,M=(l+1)*(x-1)+S-1,y=(l+1)*(x-1)+S,U=(l+1)*x+S;f.push(T,M,U),f.push(M,y,U)}this.setIndex(f),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kS extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cr extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=w_,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class XS extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WS extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pl extends rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class V_ extends pl{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Qh=new Xe,Dv=new W,Uv=new W;class pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cp,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Dv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dv),Uv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Uv),n.updateMatrixWorld(),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qS extends pp{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=Hr*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class qc extends pl{constructor(t,n,a=0,l=Math.PI/3,c=0,f=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=a,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new qS}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Lv=new Xe,tl=new W,Jh=new W;class YS extends pp{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,l=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),tl.setFromMatrixPosition(t.matrixWorld),a.position.copy(tl),Jh.copy(a.position),Jh.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Jh),a.updateMatrixWorld(),l.makeTranslation(-tl.x,-tl.y,-tl.z),Lv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lv,a.coordinateSystem,a.reversedDepth)}}class el extends pl{constructor(t,n,a=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new YS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mp extends I_{constructor(t=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=l+n,d=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class jS extends pp{constructor(){super(new mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jd extends pl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new jS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ZS extends pl{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class KS extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class k_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Nv(r,t,n,a){const l=QS(a);switch(n){case b_:return r*t;case ip:return r*t/l.components*l.byteLength;case ap:return r*t/l.components*l.byteLength;case R_:return r*t*2/l.components*l.byteLength;case sp:return r*t*2/l.components*l.byteLength;case A_:return r*t*3/l.components*l.byteLength;case Ri:return r*t*4/l.components*l.byteLength;case rp:return r*t*4/l.components*l.byteLength;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:case Sd:return Math.max(r,16)*Math.max(t,8)/4;case xd:case Md:return Math.max(r,8)*Math.max(t,8)/2;case Ed:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Id:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hd:case Gd:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QS(r){switch(r){case Vi:case M_:return{byteLength:1,components:1};case ol:case S_:case ha:return{byteLength:2,components:1};case ep:case np:return{byteLength:2,components:4};case ws:case tp:case Fi:return{byteLength:4,components:1};case E_:case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X_(){let r=null,t=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function JS(r){const t=new WeakMap;function n(h,d){const p=h.array,g=h.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,d,p){const g=d.array,v=d.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((x,S)=>x.start-S.start);let _=0;for(let x=1;x<v.length;x++){const S=v[_],T=v[x];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,S=v.length;x<S;x++){const T=v[x];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(r.deleteBuffer(d.buffer),t.delete(h))}function f(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:l,remove:c,update:f}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t1=`#ifdef USE_ALPHAHASH
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
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s1=`#ifdef USE_AOMAP
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
#endif`,r1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
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
#endif`,l1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h1=`#ifdef USE_IRIDESCENCE
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
#endif`,d1=`#ifdef USE_BUMPMAP
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,S1=`#define PI 3.141592653589793
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
} // validated`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H1=`#ifdef USE_GRADIENTMAP
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
}`,G1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X1=`uniform bool receiveShadow;
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
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
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
#endif`,Q1=`struct PhysicalMaterial {
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
}`,J1=`
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BE=`float getShadowMask() {
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
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
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
}`,sT=`#if DEPTH_PACKING == 3200
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
}`,rT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
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
}`,fT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,vT=`#define MATCAP
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
}`,_T=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,yT=`#define PHONG
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
}`,MT=`#define PHONG
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
}`,ST=`#define STANDARD
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
}`,ET=`#define STANDARD
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
}`,TT=`#define TOON
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
}`,bT=`#define TOON
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
}`,AT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,wT=`#include <common>
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
}`,CT=`uniform vec3 color;
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
}`,DT=`uniform float rotation;
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
}`,UT=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:$S,alphahash_pars_fragment:t1,alphamap_fragment:e1,alphamap_pars_fragment:n1,alphatest_fragment:i1,alphatest_pars_fragment:a1,aomap_fragment:s1,aomap_pars_fragment:r1,batching_pars_vertex:o1,batching_vertex:l1,begin_vertex:c1,beginnormal_vertex:u1,bsdfs:f1,iridescence_fragment:h1,bumpmap_pars_fragment:d1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:v1,color_fragment:_1,color_pars_fragment:x1,color_pars_vertex:y1,color_vertex:M1,common:S1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:T1,displacementmap_pars_vertex:b1,displacementmap_vertex:A1,emissivemap_fragment:R1,emissivemap_pars_fragment:w1,colorspace_fragment:C1,colorspace_pars_fragment:D1,envmap_fragment:U1,envmap_common_pars_fragment:L1,envmap_pars_fragment:N1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:W1,envmap_vertex:O1,fog_vertex:z1,fog_pars_vertex:B1,fog_fragment:I1,fog_pars_fragment:F1,gradientmap_pars_fragment:H1,lightmap_pars_fragment:G1,lights_lambert_fragment:V1,lights_lambert_pars_fragment:k1,lights_pars_begin:X1,lights_toon_fragment:q1,lights_toon_pars_fragment:Y1,lights_phong_fragment:j1,lights_phong_pars_fragment:Z1,lights_physical_fragment:K1,lights_physical_pars_fragment:Q1,lights_fragment_begin:J1,lights_fragment_maps:$1,lights_fragment_end:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:sE,map_pars_fragment:rE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:hE,morphnormal_vertex:dE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:vE,normal_pars_fragment:_E,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:bE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:wE,project_vertex:CE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:OE,shadowmap_vertex:zE,shadowmask_pars_fragment:BE,skinbase_vertex:IE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tT,backgroundCube_frag:eT,cube_vert:nT,cube_frag:iT,depth_vert:aT,depth_frag:sT,distanceRGBA_vert:rT,distanceRGBA_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:hT,meshbasic_frag:dT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:vT,meshnormal_vert:_T,meshnormal_frag:xT,meshphong_vert:yT,meshphong_frag:MT,meshphysical_vert:ST,meshphysical_frag:ET,meshtoon_vert:TT,meshtoon_frag:bT,points_vert:AT,points_frag:RT,shadow_vert:wT,shadow_frag:CT,sprite_vert:DT,sprite_frag:UT},Pt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([Pt.points,Pt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([Pt.common,Pt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([Pt.sprite,Pt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([Pt.common,Pt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([Pt.lights,Pt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Yc={r:0,b:0,g:0},xs=new ki,LT=new Xe;function NT(r,t,n,a,l,c,f){const h=new le(0);let d=c===!0?0:1,p,g,v=null,_=0,x=null;function S(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:t).get(C)),C}function T(L){let C=!1;const P=S(L);P===null?y(h,d):P&&P.isColor&&(y(P,1),C=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,C){const P=S(C);P&&(P.isCubeTexture||P.mapping===du)?(g===void 0&&(g=new Te(new Zr(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Gr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xs.copy(C.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(xs)),g.material.toneMapped=Re.getTransfer(P.colorSpace)!==Oe,(v!==P||_!==P.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,x=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Te(new Cs(2,2),new _n({name:"BackgroundMaterial",uniforms:Gr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Re.getTransfer(P.colorSpace)!==Oe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function y(L,C){L.getRGB(Yc,B_(r)),a.buffers.color.setClear(Yc.r,Yc.g,Yc.b,C,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,C=1){h.set(L),d=C,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,y(h,d)},render:T,addToRenderList:M,dispose:U}}function PT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=_(null);let c=l,f=!1;function h(D,G,Z,lt,ut){let ft=!1;const B=v(lt,Z,G);c!==B&&(c=B,p(c.object)),ft=x(D,lt,Z,ut),ft&&S(D,lt,Z,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,C(D,G,Z,lt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function d(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function v(D,G,Z){const lt=Z.wireframe===!0;let ut=a[D.id];ut===void 0&&(ut={},a[D.id]=ut);let ft=ut[G.id];ft===void 0&&(ft={},ut[G.id]=ft);let B=ft[lt];return B===void 0&&(B=_(d()),ft[lt]=B),B}function _(D){const G=[],Z=[],lt=[];for(let ut=0;ut<n;ut++)G[ut]=0,Z[ut]=0,lt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:lt,object:D,attributes:{},index:null}}function x(D,G,Z,lt){const ut=c.attributes,ft=G.attributes;let B=0;const nt=Z.getAttributes();for(const j in nt)if(nt[j].location>=0){const N=ut[j];let tt=ft[j];if(tt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function S(D,G,Z,lt){const ut={},ft=G.attributes;let B=0;const nt=Z.getAttributes();for(const j in nt)if(nt[j].location>=0){let N=ft[j];N===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),ut[j]=tt,B++}c.attributes=ut,c.attributesNum=B,c.index=lt}function T(){const D=c.newAttributes;for(let G=0,Z=D.length;G<Z;G++)D[G]=0}function M(D){y(D,0)}function y(D,G){const Z=c.newAttributes,lt=c.enabledAttributes,ut=c.attributeDivisors;Z[D]=1,lt[D]===0&&(r.enableVertexAttribArray(D),lt[D]=1),ut[D]!==G&&(r.vertexAttribDivisor(D,G),ut[D]=G)}function U(){const D=c.newAttributes,G=c.enabledAttributes;for(let Z=0,lt=G.length;Z<lt;Z++)G[Z]!==D[Z]&&(r.disableVertexAttribArray(Z),G[Z]=0)}function L(D,G,Z,lt,ut,ft,B){B===!0?r.vertexAttribIPointer(D,G,Z,ut,ft):r.vertexAttribPointer(D,G,Z,lt,ut,ft)}function C(D,G,Z,lt){T();const ut=lt.attributes,ft=Z.getAttributes(),B=G.defaultAttributeValues;for(const nt in ft){const j=ft[nt];if(j.location>=0){let yt=ut[nt];if(yt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const N=yt.normalized,tt=yt.itemSize,xt=t.get(yt);if(xt===void 0)continue;const Mt=xt.buffer,Ut=xt.type,Ht=xt.bytesPerElement,it=Ut===r.INT||Ut===r.UNSIGNED_INT||yt.gpuType===tp;if(yt.isInterleavedBufferAttribute){const vt=yt.data,At=vt.stride,Qt=yt.offset;if(vt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<j.locationSize;Yt++)y(j.location+Yt,vt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Yt=0;Yt<j.locationSize;Yt++)M(j.location+Yt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Yt=0;Yt<j.locationSize;Yt++)L(j.location+Yt,tt/j.locationSize,Ut,N,At*Ht,(Qt+tt/j.locationSize*Yt)*Ht,it)}else{if(yt.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)y(j.location+vt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let vt=0;vt<j.locationSize;vt++)M(j.location+vt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let vt=0;vt<j.locationSize;vt++)L(j.location+vt,tt/j.locationSize,Ut,N,tt*Ht,tt/j.locationSize*vt*Ht,it)}}else if(B!==void 0){const N=B[nt];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(j.location,N);break;case 3:r.vertexAttrib3fv(j.location,N);break;case 4:r.vertexAttrib4fv(j.location,N);break;default:r.vertexAttrib1fv(j.location,N)}}}}U()}function P(){V();for(const D in a){const G=a[D];for(const Z in G){const lt=G[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete G[Z]}delete a[D]}}function O(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const Z in G){const lt=G[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete G[Z]}delete a[D.id]}function F(D){for(const G in a){const Z=a[G];if(Z[D.id]===void 0)continue;const lt=Z[D.id];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete Z[D.id]}}function V(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:M,disableUnusedAttributes:U}}function OT(r,t,n){let a;function l(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(a,p,g,v),n.update(g,a,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,v);let x=0;for(let S=0;S<v;S++)x+=g[S];n.update(x,a,1)}function d(p,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<p.length;S++)f(p[S],g[S],_[S]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T]*_[T];n.update(S,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zT(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Ri&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const V=F===ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Vi&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Fi&&!V)}function d(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:P,maxSamples:O}}function BT(r){const t=this;let n=null,a=0,l=!1,c=!1;const f=new Ss,h=new de,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||l;return l=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const S=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||S===null||S.length===0||c&&!M)c?g(null):p();else{const U=c?0:a,L=U*4;let C=y.clippingState||null;d.value=C,C=g(S,_,L,x);for(let P=0;P!==L;++P)C[P]=n[P];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,S){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=d.value,S!==!0||M===null){const y=x+T*4,U=_.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,C=x;L!==T;++L,C+=4)f.copy(v[L]).applyMatrix4(U,h),f.normal.toArray(M,C),M[C+3]=f.constant}d.value=M,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function IT(r){let t=new WeakMap;function n(f,h){return h===md?f.mapping=Br:h===gd&&(f.mapping=Ir),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===md||h===gd)if(t.has(f)){const d=t.get(f).texture;return n(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new US(d.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Dr=4,Pv=[.125,.215,.35,.446,.526,.582],bs=20,$h=new mp,Ov=new le;let td=null,ed=0,nd=0,id=!1;const Es=(1+Math.sqrt(5))/2,Ar=1/Es,zv=[new W(-Es,Ar,0),new W(Es,Ar,0),new W(-Ar,0,Es),new W(Ar,0,Es),new W(0,Es,-Ar),new W(0,Es,Ar),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],FT=new W;class Bv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,l=100,c={}){const{size:f=256,position:h=FT}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,l,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,jc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Br||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:ha,format:Ri,colorSpace:Fr,depthBuffer:!1},l=Iv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(c)),this._blurMaterial=GT(c,t,n)}return l}_compileMaterial(t){const n=new Te(this._lodPlanes[0],t);this._renderer.compile(n,$h)}_sceneToCubeUV(t,n,a,l,c){const d=new Yn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Ov),v.toneMapping=ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const T=new qa({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),M=new Te(new Zr,T);let y=!1;const U=t.background;U?U.isColor&&(T.color.copy(U),t.background=null,y=!0):(T.color.copy(Ov),y=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(d.up.set(0,p[L],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[L],c.y,c.z)):C===1?(d.up.set(0,0,p[L]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[L],c.z)):(d.up.set(0,p[L],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[L]));const P=this._cubeSize;jc(l,C*P,L>2?P:0,P,P),v.setRenderTarget(l),y&&v.render(M,d),v.render(t,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=U}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===Br||t.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Te(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;jc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(f,$h)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=zv[(l-c-1)%zv.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,f,h){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Te(this._lodPlanes[l],p),_=p.uniforms,x=this._sizeLods[a]-1,S=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*bs-1),T=c/S,M=isFinite(c)?1+Math.floor(g*T):bs;M>bs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${bs}`);const y=[];let U=0;for(let F=0;F<bs;++F){const V=F/T,w=Math.exp(-V*V/2);y.push(w),F===0?U+=w:F<M&&(U+=2*w)}for(let F=0;F<y.length;F++)y[F]=y[F]/U;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=S,_.mipInt.value=L-a;const C=this._sizeLods[l],P=3*C*(l>L-Dr?l-L+Dr:0),O=4*(this._cubeSize-C);jc(n,P,O,3*C,2*C),d.setRenderTarget(n),d.render(v,$h)}}function HT(r){const t=[],n=[],a=[];let l=r;const c=r-Dr+1+Pv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let d=1/h;f>r-Dr?d=Pv[f-r+Dr-1]:f===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,S=6,T=3,M=2,y=1,U=new Float32Array(T*S*x),L=new Float32Array(M*S*x),C=new Float32Array(y*S*x);for(let O=0;O<x;O++){const F=O%3*2/3-1,V=O>2?0:-1,w=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];U.set(w,T*S*O),L.set(_,M*S*O);const D=[O,O,O,O,O,O];C.set(D,y*S*O)}const P=new hn;P.setAttribute("position",new li(U,T)),P.setAttribute("uv",new li(L,M)),P.setAttribute("faceIndex",new li(C,y)),t.push(P),l>Dr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Iv(r,t,n){const a=new wi(r,t,n);return a.texture.mapping=du,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function jc(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function GT(r,t,n){const a=new Float32Array(bs),l=new W(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gp(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Fv(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gp(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Hv(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function gp(){return`

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
	`}function VT(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===md||d===gd,g=d===Br||d===Ir;if(p||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Bv(r)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new Bv(r)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function kT(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(a)}return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&fl("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function XT(r,t,n,a){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const S in _.attributes)t.remove(_.attributes[S]);_.removeEventListener("dispose",f),delete l[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,S=v.attributes.position;let T=0;if(x!==null){const U=x.array;T=x.version;for(let L=0,C=U.length;L<C;L+=3){const P=U[L+0],O=U[L+1],F=U[L+2];_.push(P,O,O,F,F,P)}}else if(S!==void 0){const U=S.array;T=S.version;for(let L=0,C=U.length/3-1;L<C;L+=3){const P=L+0,O=L+1,F=L+2;_.push(P,O,O,F,F,P)}}else return;const M=new(D_(_)?z_:O_)(_,1);M.version=T;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function WT(r,t,n){let a;function l(_){a=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function d(_,x){r.drawElements(a,x,c,_*f),n.update(x,a,1)}function p(_,x,S){S!==0&&(r.drawElementsInstanced(a,x,c,_*f,S),n.update(x,a,S))}function g(_,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,S);let M=0;for(let y=0;y<S;y++)M+=x[y];n.update(M,a,1)}function v(_,x,S,T){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)p(_[y]/f,x[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,T,0,S);let y=0;for(let U=0;U<S;U++)y+=x[U]*T[U];n.update(y,a,1)}}this.setMode=l,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function qT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function YT(r,t,n){const a=new WeakMap,l=new Ge;function c(f,h,d){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let w=function(){F.dispose(),a.delete(h),h.removeEventListener("dispose",w)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),S===!0&&(L=2),T===!0&&(L=3);let C=h.attributes.position.count*L,P=1;C>t.maxTextureSize&&(P=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const O=new Float32Array(C*P*4*v),F=new U_(O,C,P,v);F.type=Fi,F.needsUpdate=!0;const V=L*4;for(let D=0;D<v;D++){const G=M[D],Z=y[D],lt=U[D],ut=C*P*4*D;for(let ft=0;ft<G.count;ft++){const B=ft*V;x===!0&&(l.fromBufferAttribute(G,ft),O[ut+B+0]=l.x,O[ut+B+1]=l.y,O[ut+B+2]=l.z,O[ut+B+3]=0),S===!0&&(l.fromBufferAttribute(Z,ft),O[ut+B+4]=l.x,O[ut+B+5]=l.y,O[ut+B+6]=l.z,O[ut+B+7]=0),T===!0&&(l.fromBufferAttribute(lt,ft),O[ut+B+8]=l.x,O[ut+B+9]=l.y,O[ut+B+10]=l.z,O[ut+B+11]=lt.itemSize===4?l.w:1)}}_={count:v,texture:F,size:new ae(C,P)},a.set(h,_),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let x=0;for(let T=0;T<p.length;T++)x+=p[T];const S=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function jT(r,t,n,a){let l=new WeakMap;function c(d){const p=a.render.frame,g=d.geometry,v=t.get(d,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),l.get(d)!==p&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),l.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function f(){l=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const W_=new Gn,Gv=new H_(1,1),q_=new U_,Y_=new mS,j_=new F_,Vv=[],kv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),qv=new Float32Array(4);function Kr(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=Vv[l];if(c===void 0&&(c=new Float32Array(l),Vv[l]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function yn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function gu(r,t){let n=kv[t];n===void 0&&(n=new Int32Array(t),kv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function ZT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function KT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2fv(this.addr,t),yn(n,t)}}function QT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;r.uniform3fv(this.addr,t),yn(n,t)}}function JT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4fv(this.addr,t),yn(n,t)}}function $T(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;qv.set(a),r.uniformMatrix2fv(this.addr,!1,qv),yn(n,a)}}function tb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Wv.set(a),r.uniformMatrix3fv(this.addr,!1,Wv),yn(n,a)}}function eb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Xv.set(a),r.uniformMatrix4fv(this.addr,!1,Xv),yn(n,a)}}function nb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function ib(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2iv(this.addr,t),yn(n,t)}}function ab(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3iv(this.addr,t),yn(n,t)}}function sb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4iv(this.addr,t),yn(n,t)}}function rb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function ob(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2uiv(this.addr,t),yn(n,t)}}function lb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3uiv(this.addr,t),yn(n,t)}}function cb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4uiv(this.addr,t),yn(n,t)}}function ub(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Gv.compareFunction=C_,c=Gv):c=W_,n.setTexture2D(t||c,l)}function fb(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||Y_,l)}function hb(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||j_,l)}function db(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||q_,l)}function pb(r){switch(r){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return sb;case 5125:return rb;case 36294:return ob;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}function mb(r,t){r.uniform1fv(this.addr,t)}function gb(r,t){const n=Kr(t,this.size,2);r.uniform2fv(this.addr,n)}function vb(r,t){const n=Kr(t,this.size,3);r.uniform3fv(this.addr,n)}function _b(r,t){const n=Kr(t,this.size,4);r.uniform4fv(this.addr,n)}function xb(r,t){const n=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function yb(r,t){const n=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Mb(r,t){const n=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Sb(r,t){r.uniform1iv(this.addr,t)}function Eb(r,t){r.uniform2iv(this.addr,t)}function Tb(r,t){r.uniform3iv(this.addr,t)}function bb(r,t){r.uniform4iv(this.addr,t)}function Ab(r,t){r.uniform1uiv(this.addr,t)}function Rb(r,t){r.uniform2uiv(this.addr,t)}function wb(r,t){r.uniform3uiv(this.addr,t)}function Cb(r,t){r.uniform4uiv(this.addr,t)}function Db(r,t,n){const a=this.cache,l=t.length,c=gu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||W_,c[f])}function Ub(r,t,n){const a=this.cache,l=t.length,c=gu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||Y_,c[f])}function Lb(r,t,n){const a=this.cache,l=t.length,c=gu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||j_,c[f])}function Nb(r,t,n){const a=this.cache,l=t.length,c=gu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||q_,c[f])}function Pb(r){switch(r){case 5126:return mb;case 35664:return gb;case 35665:return vb;case 35666:return _b;case 35674:return xb;case 35675:return yb;case 35676:return Mb;case 5124:case 35670:return Sb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return bb;case 5125:return Ab;case 36294:return Rb;case 36295:return wb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Nb}}class Ob{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=pb(n.type)}}class zb{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Pb(n.type)}}class Bb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],a)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function Yv(r,t){r.seq.push(t),r.map[t.id]=t}function Ib(r,t,n){const a=r.name,l=a.length;for(ad.lastIndex=0;;){const c=ad.exec(a),f=ad.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&f+2===l){Yv(n,p===void 0?new Ob(h,r,t):new zb(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new Bb(h),Yv(n,v)),n=v}}}class au{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);Ib(c,f,this)}}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],d=a[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&a.push(f)}return a}}function jv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const Fb=37297;let Hb=0;function Gb(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const Zv=new de;function Vb(r){Re._getMatrix(Zv,Re.workingColorSpace,r);const t=`mat3( ${Zv.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(r)){case lu:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Kv(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+Gb(r.getShaderSource(t),h)}else return c}function kb(r,t){const n=Vb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Xb(r,t){let n;switch(t){case p_:n="Linear";break;case m_:n="Reinhard";break;case g_:n="Cineon";break;case hu:n="ACESFilmic";break;case __:n="AgX";break;case x_:n="Neutral";break;case v_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zc=new W;function Wb(){Re.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),n=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function Yb(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function jb(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function nl(r){return r!==""}function Qv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(r){return r.replace(Zb,Qb)}const Kb=new Map;function Qb(r,t){let n=ge[t];if(n===void 0){const a=Kb.get(t);if(a!==void 0)n=ge[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Zd(n)}const Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(r){return r.replace(Jb,$b)}function $b(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function tA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===h_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===pM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function eA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Br:case Ir:t="ENVMAP_TYPE_CUBE";break;case du:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ir:t="ENVMAP_MODE_REFRACTION";break}return t}function iA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case d_:t="ENVMAP_BLENDING_MULTIPLY";break;case NM:t="ENVMAP_BLENDING_MIX";break;case PM:t="ENVMAP_BLENDING_ADD";break}return t}function aA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function sA(r,t,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const d=tA(n),p=eA(n),g=nA(n),v=iA(n),_=aA(n),x=qb(n),S=Yb(c),T=l.createProgram();let M,y,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(nl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(nl).join(`
`),y.length>0&&(y+=`
`)):(M=[t_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),y=[t_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ja?"#define TONE_MAPPING":"",n.toneMapping!==ja?ge.tonemapping_pars_fragment:"",n.toneMapping!==ja?Xb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,kb("linearToOutputTexel",n.outputColorSpace),Wb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),f=Zd(f),f=Qv(f,n),f=Jv(f,n),h=Zd(h),h=Qv(h,n),h=Jv(h,n),f=$v(f),h=$v(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=U+M+f,C=U+y+h,P=jv(l,l.VERTEX_SHADER,L),O=jv(l,l.FRAGMENT_SHADER,C);l.attachShader(T,P),l.attachShader(T,O),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(G){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T)||"",lt=l.getShaderInfoLog(P)||"",ut=l.getShaderInfoLog(O)||"",ft=Z.trim(),B=lt.trim(),nt=ut.trim();let j=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,O);else{const N=Kv(l,P,"vertex"),tt=Kv(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+N+`
`+tt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(B===""||nt==="")&&(yt=!1);yt&&(G.diagnostics={runnable:j,programLog:ft,vertexShader:{log:B,prefix:M},fragmentShader:{log:nt,prefix:y}})}l.deleteShader(P),l.deleteShader(O),V=new au(l,T),w=jb(l,T)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,Fb)),D},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Hb++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=O,this}let rA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new lA(t),n.set(t,a)),a}}class lA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function cA(r,t,n,a,l,c,f){const h=new N_,d=new oA,p=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let x=l.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,D,G,Z,lt){const ut=Z.fog,ft=lt.geometry,B=w.isMeshStandardMaterial?Z.environment:null,nt=(w.isMeshStandardMaterial?n:t).get(w.envMap||B),j=nt&&nt.mapping===du?nt.image.height:null,yt=S[w.type];w.precision!==null&&(x=l.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=N!==void 0?N.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let Mt,Ut,Ht,it;if(yt){const Ae=Bi[yt];Mt=Ae.vertexShader,Ut=Ae.fragmentShader}else Mt=w.vertexShader,Ut=w.fragmentShader,d.update(w),Ht=d.getVertexShaderID(w),it=d.getFragmentShaderID(w);const vt=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Qt=lt.isInstancedMesh===!0,Yt=lt.isBatchedMesh===!0,ve=!!w.map,on=!!w.matcap,H=!!nt,ze=!!w.aoMap,ce=!!w.lightMap,ie=!!w.bumpMap,Ot=!!w.normalMap,We=!!w.displacementMap,Vt=!!w.emissiveMap,ue=!!w.metalnessMap,Ke=!!w.roughnessMap,Qe=w.anisotropy>0,z=w.clearcoat>0,b=w.dispersion>0,et=w.iridescence>0,ht=w.sheen>0,mt=w.transmission>0,ct=Qe&&!!w.anisotropyMap,zt=z&&!!w.clearcoatMap,Rt=z&&!!w.clearcoatNormalMap,Wt=z&&!!w.clearcoatRoughnessMap,jt=et&&!!w.iridescenceMap,St=et&&!!w.iridescenceThicknessMap,Lt=ht&&!!w.sheenColorMap,Kt=ht&&!!w.sheenRoughnessMap,kt=!!w.specularMap,Ct=!!w.specularColorMap,fe=!!w.specularIntensityMap,X=mt&&!!w.transmissionMap,bt=mt&&!!w.thicknessMap,wt=!!w.gradientMap,Bt=!!w.alphaMap,Et=w.alphaTest>0,_t=!!w.alphaHash,Gt=!!w.extensions;let re=ja;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(re=r.toneMapping);const Le={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:Ut,defines:w.defines,customVertexShaderID:Ht,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Yt,batchingColor:Yt&&lt._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&lt.instanceColor!==null,instancingMorph:Qt&&lt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Fr,alphaToCoverage:!!w.alphaToCoverage,map:ve,matcap:on,envMap:H,envMapMode:H&&nt.mapping,envMapCubeUVHeight:j,aoMap:ze,lightMap:ce,bumpMap:ie,normalMap:Ot,displacementMap:_&&We,emissiveMap:Vt,normalMapObjectSpace:Ot&&w.normalMapType===IM,normalMapTangentSpace:Ot&&w.normalMapType===w_,metalnessMap:ue,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ct,clearcoat:z,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:et,iridescenceMap:jt,iridescenceThicknessMap:St,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:Kt,specularMap:kt,specularColorMap:Ct,specularIntensityMap:fe,transmission:mt,transmissionMap:X,thicknessMap:bt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===Lr&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:_t,combine:w.combine,mapUv:ve&&T(w.map.channel),aoMapUv:ze&&T(w.aoMap.channel),lightMapUv:ce&&T(w.lightMap.channel),bumpMapUv:ie&&T(w.bumpMap.channel),normalMapUv:Ot&&T(w.normalMap.channel),displacementMapUv:We&&T(w.displacementMap.channel),emissiveMapUv:Vt&&T(w.emissiveMap.channel),metalnessMapUv:ue&&T(w.metalnessMap.channel),roughnessMapUv:Ke&&T(w.roughnessMap.channel),anisotropyMapUv:ct&&T(w.anisotropyMap.channel),clearcoatMapUv:zt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&T(w.sheenRoughnessMap.channel),specularMapUv:kt&&T(w.specularMap.channel),specularColorMapUv:Ct&&T(w.specularColorMap.channel),specularIntensityMapUv:fe&&T(w.specularIntensityMap.channel),transmissionMapUv:X&&T(w.transmissionMap.channel),thicknessMapUv:bt&&T(w.thicknessMap.channel),alphaMapUv:Bt&&T(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ot||Qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(ve||Bt),fog:!!ut,useFog:w.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:ve&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===Oe,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===Oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jn,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||Yt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function y(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)D.push(G),D.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(U(D,w),L(D,w),D.push(r.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function U(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function L(w,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),w.push(h.mask)}function C(w){const D=S[w.type];let G;if(D){const Z=Bi[D];G=hl.clone(Z.uniforms)}else G=w.uniforms;return G}function P(w,D){let G;for(let Z=0,lt=g.length;Z<lt;Z++){const ut=g[Z];if(ut.cacheKey===D){G=ut,++G.usedTimes;break}}return G===void 0&&(G=new sA(r,D,w,c),g.push(G)),G}function O(w){if(--w.usedTimes===0){const D=g.indexOf(w);g[D]=g[g.length-1],g.pop(),w.destroy()}}function F(w){d.remove(w)}function V(){d.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:C,acquireProgram:P,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:V}}function uA(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,d){r.get(f)[h]=d}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function fA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function e_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function n_(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function f(v,_,x,S,T,M){let y=r[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:S,renderOrder:v.renderOrder,z:T,group:M},r[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=S,y.renderOrder=v.renderOrder,y.z=T,y.group=M),t++,y}function h(v,_,x,S,T,M){const y=f(v,_,x,S,T,M);x.transmission>0?a.push(y):x.transparent===!0?l.push(y):n.push(y)}function d(v,_,x,S,T,M){const y=f(v,_,x,S,T,M);x.transmission>0?a.unshift(y):x.transparent===!0?l.unshift(y):n.unshift(y)}function p(v,_){n.length>1&&n.sort(v||fA),a.length>1&&a.sort(_||e_),l.length>1&&l.sort(_||e_)}function g(){for(let v=t,_=r.length;v<_;v++){const x=r[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:h,unshift:d,finish:g,sort:p}}function hA(){let r=new WeakMap;function t(a,l){const c=r.get(a);let f;return c===void 0?(f=new n_,r.set(a,[f])):l>=c.length?(f=new n_,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function dA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new le};break;case"SpotLight":n={position:new W,direction:new W,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new le,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new le,groundColor:new le};break;case"RectAreaLight":n={color:new le,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=n,n}}}function pA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let mA=0;function gA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vA(r){const t=new dA,n=pA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new W);const l=new W,c=new Xe,f=new Xe;function h(p){let g=0,v=0,_=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let x=0,S=0,T=0,M=0,y=0,U=0,L=0,C=0,P=0,O=0,F=0;p.sort(gA);for(let w=0,D=p.length;w<D;w++){const G=p[w],Z=G.color,lt=G.intensity,ut=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Z.r*lt,v+=Z.g*lt,_+=Z.b*lt;else if(G.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(G.sh.coefficients[B],lt);F++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const nt=G.shadow,j=n.get(G);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,a.directionalShadow[x]=j,a.directionalShadowMap[x]=ft,a.directionalShadowMatrix[x]=G.shadow.matrix,U++}a.directional[x]=B,x++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(Z).multiplyScalar(lt),B.distance=ut,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,a.spot[T]=B;const nt=G.shadow;if(G.map&&(a.spotLightMap[P]=G.map,P++,nt.updateMatrices(G),G.castShadow&&O++),a.spotLightMatrix[T]=nt.matrix,G.castShadow){const j=n.get(G);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,a.spotShadow[T]=j,a.spotShadowMap[T]=ft,C++}T++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(Z).multiplyScalar(lt),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=B,M++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const nt=G.shadow,j=n.get(G);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,j.shadowCameraNear=nt.camera.near,j.shadowCameraFar=nt.camera.far,a.pointShadow[S]=j,a.pointShadowMap[S]=ft,a.pointShadowMatrix[S]=G.shadow.matrix,L++}a.point[S]=B,S++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(lt),B.groundColor.copy(G.groundColor).multiplyScalar(lt),a.hemi[y]=B,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const V=a.hash;(V.directionalLength!==x||V.pointLength!==S||V.spotLength!==T||V.rectAreaLength!==M||V.hemiLength!==y||V.numDirectionalShadows!==U||V.numPointShadows!==L||V.numSpotShadows!==C||V.numSpotMaps!==P||V.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=S,a.hemi.length=y,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=C+P-O,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=F,V.directionalLength=x,V.pointLength=S,V.spotLength=T,V.rectAreaLength=M,V.hemiLength=y,V.numDirectionalShadows=U,V.numPointShadows=L,V.numSpotShadows=C,V.numSpotMaps=P,V.numLightProbes=F,a.version=mA++)}function d(p,g){let v=0,_=0,x=0,S=0,T=0;const M=g.matrixWorldInverse;for(let y=0,U=p.length;y<U;y++){const L=p[y];if(L.isDirectionalLight){const C=a.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),v++}else if(L.isSpotLight){const C=a.spot[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),x++}else if(L.isRectAreaLight){const C=a.rectArea[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),S++}else if(L.isPointLight){const C=a.point[_];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const C=a.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(M),T++}}}return{setup:h,setupView:d,state:a}}function i_(r){const t=new vA(r),n=[],a=[];function l(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:f}}function _A(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new i_(r),t.set(l,[h])):c>=f.length?(h=new i_(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
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
}`;function MA(r,t,n){let a=new cp;const l=new ae,c=new ae,f=new Ge,h=new XS({depthPacking:BM}),d=new WS,p={},g=n.maxTextureSize,v={[Za]:Zn,[Zn]:Za,[jn]:jn},_=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new hn;S.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Te(S,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h_;let y=this.type;this.render=function(O,F,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const w=r.getRenderTarget(),D=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(fa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const lt=y!==ua&&this.type===ua,ut=y===ua&&this.type!==ua;for(let ft=0,B=O.length;ft<B;ft++){const nt=O[ft],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||lt===!0||ut===!0){const tt=this.type!==ua?{minFilter:oi,magFilter:oi}:{};j.map!==null&&j.map.dispose(),j.map=new wi(l.x,l.y,tt),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const N=j.getViewportCount();for(let tt=0;tt<N;tt++){const xt=j.getViewport(tt);f.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),Z.viewport(f),j.updateMatrices(nt,tt),a=j.getFrustum(),C(F,V,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===ua&&U(j,V),j.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(w,D,G)};function U(O,F){const V=t.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new wi(l.x,l.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,V,_,T,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,V,x,T,null)}function L(O,F,V,w){let D=null;const G=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)D=G;else if(D=V.isPointLight===!0?d:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=D.uuid,lt=F.uuid;let ut=p[Z];ut===void 0&&(ut={},p[Z]=ut);let ft=ut[lt];ft===void 0&&(ft=D.clone(),ut[lt]=ft,F.addEventListener("dispose",P)),D=ft}if(D.visible=F.visible,D.wireframe=F.wireframe,w===ua?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:v[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Z=r.properties.get(D);Z.light=V}return D}function C(O,F,V,w,D){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===ua)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const lt=t.update(O),ut=O.material;if(Array.isArray(ut)){const ft=lt.groups;for(let B=0,nt=ft.length;B<nt;B++){const j=ft[B],yt=ut[j.materialIndex];if(yt&&yt.visible){const N=L(O,yt,w,D);O.onBeforeShadow(r,O,F,V,lt,N,j),r.renderBufferDirect(V,null,lt,N,O,j),O.onAfterShadow(r,O,F,V,lt,N,j)}}}else if(ut.visible){const ft=L(O,ut,w,D);O.onBeforeShadow(r,O,F,V,lt,ft,null),r.renderBufferDirect(V,null,lt,ft,O,null),O.onAfterShadow(r,O,F,V,lt,ft,null)}}const Z=O.children;for(let lt=0,ut=Z.length;lt<ut;lt++)C(Z[lt],F,V,w,D)}function P(O){O.target.removeEventListener("dispose",P);for(const V in p){const w=p[V],D=O.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const SA={[ld]:cd,[ud]:dd,[fd]:pd,[zr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:zr};function EA(r,t){function n(){let X=!1;const bt=new Ge;let wt=null;const Bt=new Ge(0,0,0,0);return{setMask:function(Et){wt!==Et&&!X&&(r.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,_t,Gt,re,Le){Le===!0&&(Et*=re,_t*=re,Gt*=re),bt.set(Et,_t,Gt,re),Bt.equals(bt)===!1&&(r.clearColor(Et,_t,Gt,re),Bt.copy(bt))},reset:function(){X=!1,wt=null,Bt.set(-1,0,0,0)}}}function a(){let X=!1,bt=!1,wt=null,Bt=null,Et=null;return{setReversed:function(_t){if(bt!==_t){const Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const re=Et;Et=null,this.setClear(re)}},getReversed:function(){return bt},setTest:function(_t){_t?vt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!X&&(r.depthMask(_t),wt=_t)},setFunc:function(_t){if(bt&&(_t=SA[_t]),Bt!==_t){switch(_t){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case zr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){Et!==_t&&(bt&&(_t=1-_t),r.clearDepth(_t),Et=_t)},reset:function(){X=!1,wt=null,Bt=null,Et=null,bt=!1}}}function l(){let X=!1,bt=null,wt=null,Bt=null,Et=null,_t=null,Gt=null,re=null,Le=null;return{setTest:function(Ae){X||(Ae?vt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Ae){bt!==Ae&&!X&&(r.stencilMask(Ae),bt=Ae)},setFunc:function(Ae,vi,dn){(wt!==Ae||Bt!==vi||Et!==dn)&&(r.stencilFunc(Ae,vi,dn),wt=Ae,Bt=vi,Et=dn)},setOp:function(Ae,vi,dn){(_t!==Ae||Gt!==vi||re!==dn)&&(r.stencilOp(Ae,vi,dn),_t=Ae,Gt=vi,re=dn)},setLocked:function(Ae){X=Ae},setClear:function(Ae){Le!==Ae&&(r.clearStencil(Ae),Le=Ae)},reset:function(){X=!1,bt=null,wt=null,Bt=null,Et=null,_t=null,Gt=null,re=null,Le=null}}}const c=new n,f=new a,h=new l,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,x=[],S=null,T=!1,M=null,y=null,U=null,L=null,C=null,P=null,O=null,F=new le(0,0,0),V=0,w=!1,D=null,G=null,Z=null,lt=null,ut=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,nt=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=nt>=1):j.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=nt>=2);let yt=null,N={};const tt=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),Mt=new Ge().fromArray(tt),Ut=new Ge().fromArray(xt);function Ht(X,bt,wt,Bt){const Et=new Uint8Array(4),_t=r.createTexture();r.bindTexture(X,_t),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<wt;Gt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return _t}const it={};it[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),vt(r.DEPTH_TEST),f.setFunc(zr),ie(!1),Ot(tv),vt(r.CULL_FACE),ze(fa);function vt(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function At(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Qt(X,bt){return v[X]!==bt?(r.bindFramebuffer(X,bt),v[X]=bt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=bt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Yt(X,bt){let wt=x,Bt=!1;if(X){wt=_.get(bt),wt===void 0&&(wt=[],_.set(bt,wt));const Et=X.textures;if(wt.length!==Et.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Gt=Et.length;_t<Gt;_t++)wt[_t]=r.COLOR_ATTACHMENT0+_t;wt.length=Et.length,Bt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(wt)}function ve(X){return S!==X?(r.useProgram(X),S=X,!0):!1}const on={[Ts]:r.FUNC_ADD,[gM]:r.FUNC_SUBTRACT,[vM]:r.FUNC_REVERSE_SUBTRACT};on[_M]=r.MIN,on[xM]=r.MAX;const H={[yM]:r.ZERO,[MM]:r.ONE,[SM]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[wM]:r.SRC_ALPHA_SATURATE,[AM]:r.DST_COLOR,[TM]:r.DST_ALPHA,[EM]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[RM]:r.ONE_MINUS_DST_COLOR,[bM]:r.ONE_MINUS_DST_ALPHA,[CM]:r.CONSTANT_COLOR,[DM]:r.ONE_MINUS_CONSTANT_COLOR,[UM]:r.CONSTANT_ALPHA,[LM]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(X,bt,wt,Bt,Et,_t,Gt,re,Le,Ae){if(X===fa){T===!0&&(At(r.BLEND),T=!1);return}if(T===!1&&(vt(r.BLEND),T=!0),X!==mM){if(X!==M||Ae!==w){if((y!==Ts||C!==Ts)&&(r.blendEquation(r.FUNC_ADD),y=Ts,C=Ts),Ae)switch(X){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Or:r.blendFunc(r.ONE,r.ONE);break;case ev:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ev:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}U=null,L=null,P=null,O=null,F.set(0,0,0),V=0,M=X,w=Ae}return}Et=Et||bt,_t=_t||wt,Gt=Gt||Bt,(bt!==y||Et!==C)&&(r.blendEquationSeparate(on[bt],on[Et]),y=bt,C=Et),(wt!==U||Bt!==L||_t!==P||Gt!==O)&&(r.blendFuncSeparate(H[wt],H[Bt],H[_t],H[Gt]),U=wt,L=Bt,P=_t,O=Gt),(re.equals(F)===!1||Le!==V)&&(r.blendColor(re.r,re.g,re.b,Le),F.copy(re),V=Le),M=X,w=!1}function ce(X,bt){X.side===jn?At(r.CULL_FACE):vt(r.CULL_FACE);let wt=X.side===Zn;bt&&(wt=!wt),ie(wt),X.blending===Lr&&X.transparent===!1?ze(fa):ze(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Vt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(X){D!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),D=X)}function Ot(X){X!==hM?(vt(r.CULL_FACE),X!==G&&(X===tv?r.cullFace(r.BACK):X===dM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),G=X}function We(X){X!==Z&&(B&&r.lineWidth(X),Z=X)}function Vt(X,bt,wt){X?(vt(r.POLYGON_OFFSET_FILL),(lt!==bt||ut!==wt)&&(r.polygonOffset(bt,wt),lt=bt,ut=wt)):At(r.POLYGON_OFFSET_FILL)}function ue(X){X?vt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=r.TEXTURE0+ft-1),yt!==X&&(r.activeTexture(X),yt=X)}function Qe(X,bt,wt){wt===void 0&&(yt===null?wt=r.TEXTURE0+ft-1:wt=yt);let Bt=N[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[wt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(yt!==wt&&(r.activeTexture(wt),yt=wt),r.bindTexture(X,bt||it[X]),Bt.type=X,Bt.texture=bt)}function z(){const X=N[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){Mt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Mt.copy(X))}function Kt(X){Ut.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function kt(X,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Bt=wt.get(X);Bt===void 0&&(Bt=r.getUniformBlockIndex(bt,X.name),wt.set(X,Bt))}function Ct(X,bt){const Bt=p.get(bt).get(X);d.get(bt)!==Bt&&(r.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),d.set(bt,Bt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,N={},v={},_=new WeakMap,x=[],S=null,T=!1,M=null,y=null,U=null,L=null,C=null,P=null,O=null,F=new le(0,0,0),V=0,w=!1,D=null,G=null,Z=null,lt=null,ut=null,Mt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:vt,disable:At,bindFramebuffer:Qt,drawBuffers:Yt,useProgram:ve,setBlending:ze,setMaterial:ce,setFlipSided:ie,setCullFace:Ot,setLineWidth:We,setPolygonOffset:Vt,setScissorTest:ue,activeTexture:Ke,bindTexture:Qe,unbindTexture:z,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:jt,texImage3D:St,updateUBOMapping:kt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:zt,scissor:Lt,viewport:Kt,reset:fe}}function TA(r,t,n,a,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ae,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(z,b){return x?new OffscreenCanvas(z,b):uu("canvas")}function T(z,b,et){let ht=1;const mt=Qe(z);if((mt.width>et||mt.height>et)&&(ht=et/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ct=Math.floor(ht*mt.width),zt=Math.floor(ht*mt.height);v===void 0&&(v=S(ct,zt));const Rt=b?S(ct,zt):v;return Rt.width=ct,Rt.height=zt,Rt.getContext("2d").drawImage(z,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+zt+")."),Rt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),z;return z}function M(z){return z.generateMipmaps}function y(z){r.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(z,b,et,ht,mt=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ct=b;if(b===r.RED&&(et===r.FLOAT&&(ct=r.R32F),et===r.HALF_FLOAT&&(ct=r.R16F),et===r.UNSIGNED_BYTE&&(ct=r.R8)),b===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.R8UI),et===r.UNSIGNED_SHORT&&(ct=r.R16UI),et===r.UNSIGNED_INT&&(ct=r.R32UI),et===r.BYTE&&(ct=r.R8I),et===r.SHORT&&(ct=r.R16I),et===r.INT&&(ct=r.R32I)),b===r.RG&&(et===r.FLOAT&&(ct=r.RG32F),et===r.HALF_FLOAT&&(ct=r.RG16F),et===r.UNSIGNED_BYTE&&(ct=r.RG8)),b===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RG8UI),et===r.UNSIGNED_SHORT&&(ct=r.RG16UI),et===r.UNSIGNED_INT&&(ct=r.RG32UI),et===r.BYTE&&(ct=r.RG8I),et===r.SHORT&&(ct=r.RG16I),et===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),et===r.UNSIGNED_INT&&(ct=r.RGB32UI),et===r.BYTE&&(ct=r.RGB8I),et===r.SHORT&&(ct=r.RGB16I),et===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),et===r.UNSIGNED_INT&&(ct=r.RGBA32UI),et===r.BYTE&&(ct=r.RGBA8I),et===r.SHORT&&(ct=r.RGBA16I),et===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&(et===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),et===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),b===r.RGBA){const zt=mt?lu:Re.getTransfer(ht);et===r.FLOAT&&(ct=r.RGBA32F),et===r.HALF_FLOAT&&(ct=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ct=zt===Oe?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function C(z,b){let et;return z?b===null||b===ws||b===ll?et=r.DEPTH24_STENCIL8:b===Fi?et=r.DEPTH32F_STENCIL8:b===ol&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ws||b===ll?et=r.DEPTH_COMPONENT24:b===Fi?et=r.DEPTH_COMPONENT32F:b===ol&&(et=r.DEPTH_COMPONENT16),et}function P(z,b){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==oi&&z.minFilter!==Ii?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function O(z){const b=z.target;b.removeEventListener("dispose",O),V(b),b.isVideoTexture&&g.delete(b)}function F(z){const b=z.target;b.removeEventListener("dispose",F),D(b)}function V(z){const b=a.get(z);if(b.__webglInit===void 0)return;const et=z.source,ht=_.get(et);if(ht){const mt=ht[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(z),Object.keys(ht).length===0&&_.delete(et)}a.remove(z)}function w(z){const b=a.get(z);r.deleteTexture(b.__webglTexture);const et=z.source,ht=_.get(et);delete ht[b.__cacheKey],f.memory.textures--}function D(z){const b=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let mt=0;mt<b.__webglFramebuffer[ht].length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[ht][mt]);else r.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[ht]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=z.textures;for(let ht=0,mt=et.length;ht<mt;ht++){const ct=a.get(et[ht]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),f.memory.textures--),a.remove(et[ht])}a.remove(z)}let G=0;function Z(){G=0}function lt(){const z=G;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),G+=1,z}function ut(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function ft(z,b){const et=a.get(z);if(z.isVideoTexture&&ue(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&et.__version!==z.version){const ht=z.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(et,z,b);return}}else z.isExternalTexture&&(et.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+b)}function B(z,b){const et=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){it(et,z,b);return}n.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+b)}function nt(z,b){const et=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){it(et,z,b);return}n.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+b)}function j(z,b){const et=a.get(z);if(z.version>0&&et.__version!==z.version){vt(et,z,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+b)}const yt={[vd]:r.REPEAT,[As]:r.CLAMP_TO_EDGE,[_d]:r.MIRRORED_REPEAT},N={[oi]:r.NEAREST,[OM]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Ii]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Rs]:r.LINEAR_MIPMAP_LINEAR},tt={[FM]:r.NEVER,[WM]:r.ALWAYS,[HM]:r.LESS,[C_]:r.LEQUAL,[GM]:r.EQUAL,[XM]:r.GEQUAL,[VM]:r.GREATER,[kM]:r.NOTEQUAL};function xt(z,b){if(b.type===Fi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ii||b.magFilter===bh||b.magFilter===Tc||b.magFilter===Rs||b.minFilter===Ii||b.minFilter===bh||b.minFilter===Tc||b.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,yt[b.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===oi||b.minFilter!==Tc&&b.minFilter!==Rs||b.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function Mt(z,b){let et=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",O));const ht=b.source;let mt=_.get(ht);mt===void 0&&(mt={},_.set(ht,mt));const ct=ut(b);if(ct!==z.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,et=!0),mt[ct].usedTimes++;const zt=mt[z.__cacheKey];zt!==void 0&&(mt[z.__cacheKey].usedTimes--,zt.usedTimes===0&&w(b)),z.__cacheKey=ct,z.__webglTexture=mt[ct].texture}return et}function Ut(z,b,et){return Math.floor(Math.floor(z/et)/b)}function Ht(z,b,et,ht){const ct=z.updateRanges;if(ct.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,et,ht,b.data);else{ct.sort((St,Lt)=>St.start-Lt.start);let zt=0;for(let St=1;St<ct.length;St++){const Lt=ct[zt],Kt=ct[St],kt=Lt.start+Lt.count,Ct=Ut(Kt.start,b.width,4),fe=Ut(Lt.start,b.width,4);Kt.start<=kt+1&&Ct===fe&&Ut(Kt.start+Kt.count-1,b.width,4)===Ct?Lt.count=Math.max(Lt.count,Kt.start+Kt.count-Lt.start):(++zt,ct[zt]=Kt)}ct.length=zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let St=0,Lt=ct.length;St<Lt;St++){const Kt=ct[St],kt=Math.floor(Kt.start/4),Ct=Math.ceil(Kt.count/4),fe=kt%b.width,X=Math.floor(kt/b.width),bt=Ct,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,fe,X,bt,wt,et,ht,b.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,jt)}}function it(z,b,et){let ht=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=r.TEXTURE_3D);const mt=Mt(z,b),ct=b.source;n.bindTexture(ht,z.__webglTexture,r.TEXTURE0+et);const zt=a.get(ct);if(ct.version!==zt.__version||mt===!0){n.activeTexture(r.TEXTURE0+et);const Rt=Re.getPrimaries(Re.workingColorSpace),Wt=b.colorSpace===Wa?null:Re.getPrimaries(b.colorSpace),jt=b.colorSpace===Wa||Rt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let St=T(b.image,!1,l.maxTextureSize);St=Ke(b,St);const Lt=c.convert(b.format,b.colorSpace),Kt=c.convert(b.type);let kt=L(b.internalFormat,Lt,Kt,b.colorSpace,b.isVideoTexture);xt(ht,b);let Ct;const fe=b.mipmaps,X=b.isVideoTexture!==!0,bt=zt.__version===void 0||mt===!0,wt=ct.dataReady,Bt=P(b,St);if(b.isDepthTexture)kt=C(b.format===ul,b.type),bt&&(X?n.texStorage2D(r.TEXTURE_2D,1,kt,St.width,St.height):n.texImage2D(r.TEXTURE_2D,0,kt,St.width,St.height,0,Lt,Kt,null));else if(b.isDataTexture)if(fe.length>0){X&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,kt,fe[0].width,fe[0].height);for(let Et=0,_t=fe.length;Et<_t;Et++)Ct=fe[Et],X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data);b.generateMipmaps=!1}else X?(bt&&n.texStorage2D(r.TEXTURE_2D,Bt,kt,St.width,St.height),wt&&Ht(b,St,Lt,Kt)):n.texImage2D(r.TEXTURE_2D,0,kt,St.width,St.height,0,Lt,Kt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,kt,fe[0].width,fe[0].height,St.depth);for(let Et=0,_t=fe.length;Et<_t;Et++)if(Ct=fe[Et],b.format!==Ri)if(Lt!==null)if(X){if(wt)if(b.layerUpdates.size>0){const Gt=Nv(Ct.width,Ct.height,b.format,b.type);for(const re of b.layerUpdates){const Le=Ct.data.subarray(re*Gt/Ct.data.BYTES_PER_ELEMENT,(re+1)*Gt/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,re,Ct.width,Ct.height,1,Lt,Le)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,St.depth,Lt,Ct.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,St.depth,Lt,Kt,Ct.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,St.depth,0,Lt,Kt,Ct.data)}else{X&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,kt,fe[0].width,fe[0].height);for(let Et=0,_t=fe.length;Et<_t;Et++)Ct=fe[Et],b.format!==Ri?Lt!==null?X?wt&&n.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):n.compressedTexImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data)}else if(b.isDataArrayTexture)if(X){if(bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,kt,St.width,St.height,St.depth),wt)if(b.layerUpdates.size>0){const Et=Nv(St.width,St.height,b.format,b.type);for(const _t of b.layerUpdates){const Gt=St.data.subarray(_t*Et/St.data.BYTES_PER_ELEMENT,(_t+1)*Et/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Lt,Kt,Gt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Lt,Kt,St.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,St.width,St.height,St.depth,0,Lt,Kt,St.data);else if(b.isData3DTexture)X?(bt&&n.texStorage3D(r.TEXTURE_3D,Bt,kt,St.width,St.height,St.depth),wt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Lt,Kt,St.data)):n.texImage3D(r.TEXTURE_3D,0,kt,St.width,St.height,St.depth,0,Lt,Kt,St.data);else if(b.isFramebufferTexture){if(bt)if(X)n.texStorage2D(r.TEXTURE_2D,Bt,kt,St.width,St.height);else{let Et=St.width,_t=St.height;for(let Gt=0;Gt<Bt;Gt++)n.texImage2D(r.TEXTURE_2D,Gt,kt,Et,_t,0,Lt,Kt,null),Et>>=1,_t>>=1}}else if(fe.length>0){if(X&&bt){const Et=Qe(fe[0]);n.texStorage2D(r.TEXTURE_2D,Bt,kt,Et.width,Et.height)}for(let Et=0,_t=fe.length;Et<_t;Et++)Ct=fe[Et],X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt,Kt,Ct):n.texImage2D(r.TEXTURE_2D,Et,kt,Lt,Kt,Ct);b.generateMipmaps=!1}else if(X){if(bt){const Et=Qe(St);n.texStorage2D(r.TEXTURE_2D,Bt,kt,Et.width,Et.height)}wt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Kt,St)}else n.texImage2D(r.TEXTURE_2D,0,kt,Lt,Kt,St);M(b)&&y(ht),zt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function vt(z,b,et){if(b.image.length!==6)return;const ht=Mt(z,b),mt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+et);const ct=a.get(mt);if(mt.version!==ct.__version||ht===!0){n.activeTexture(r.TEXTURE0+et);const zt=Re.getPrimaries(Re.workingColorSpace),Rt=b.colorSpace===Wa?null:Re.getPrimaries(b.colorSpace),Wt=b.colorSpace===Wa||zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!jt&&!St?Lt[_t]=T(b.image[_t],!0,l.maxCubemapSize):Lt[_t]=St?b.image[_t].image:b.image[_t],Lt[_t]=Ke(b,Lt[_t]);const Kt=Lt[0],kt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),fe=L(b.internalFormat,kt,Ct,b.colorSpace),X=b.isVideoTexture!==!0,bt=ct.__version===void 0||ht===!0,wt=mt.dataReady;let Bt=P(b,Kt);xt(r.TEXTURE_CUBE_MAP,b);let Et;if(jt){X&&bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){Et=Lt[_t].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const re=Et[Gt];b.format!==Ri?kt!==null?X?wt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,re.width,re.height,kt,re.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,re.width,re.height,kt,Ct,re.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,fe,re.width,re.height,0,kt,Ct,re.data)}}}else{if(Et=b.mipmaps,X&&bt){Et.length>0&&Bt++;const _t=Qe(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,kt,Ct,Lt[_t].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Lt[_t].width,Lt[_t].height,0,kt,Ct,Lt[_t].data);for(let Gt=0;Gt<Et.length;Gt++){const Le=Et[Gt].image[_t].image;X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Le.width,Le.height,kt,Ct,Le.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,fe,Le.width,Le.height,0,kt,Ct,Le.data)}}else{X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Ct,Lt[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,kt,Ct,Lt[_t]);for(let Gt=0;Gt<Et.length;Gt++){const re=Et[Gt];X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,kt,Ct,re.image[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,fe,kt,Ct,re.image[_t])}}}M(b)&&y(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function At(z,b,et,ht,mt,ct){const zt=c.convert(et.format,et.colorSpace),Rt=c.convert(et.type),Wt=L(et.internalFormat,zt,Rt,et.colorSpace),jt=a.get(b),St=a.get(et);if(St.__renderTarget=b,!jt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ct),Kt=Math.max(1,b.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?n.texImage3D(mt,ct,Wt,Lt,Kt,b.depth,0,zt,Rt,null):n.texImage2D(mt,ct,Wt,Lt,Kt,0,zt,Rt,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,mt,St.__webglTexture,0,We(b)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,mt,St.__webglTexture,ct),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(z,b,et){if(r.bindRenderbuffer(r.RENDERBUFFER,z),b.depthBuffer){const ht=b.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=C(b.stencilBuffer,mt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=We(b);Vt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ct,b.width,b.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,z)}else{const ht=b.textures;for(let mt=0;mt<ht.length;mt++){const ct=ht[mt],zt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),Wt=L(ct.internalFormat,zt,Rt,ct.colorSpace),jt=We(b);et&&Vt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Wt,b.width,b.height):Vt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,Wt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(z,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const mt=ht.__webglTexture,ct=We(b);if(b.depthTexture.format===cl)Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(b.depthTexture.format===ul)Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ve(z){const b=a.get(z),et=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const ht=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),b.__depthDisposeCallback=mt}b.__boundDepthTexture=ht}if(z.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=z.texture.mipmaps;ht&&ht.length>0?Yt(b.__webglFramebuffer[0],z):Yt(b.__webglFramebuffer,z)}else if(et){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=r.createRenderbuffer(),Qt(b.__webglDepthbuffer[ht],z,!1);else{const mt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const ht=z.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Qt(b.__webglDepthbuffer,z,!1);else{const mt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function on(z,b,et){const ht=a.get(z);b!==void 0&&At(ht.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&ve(z)}function H(z){const b=z.texture,et=a.get(z),ht=a.get(b);z.addEventListener("dispose",F);const mt=z.textures,ct=z.isWebGLCubeRenderTarget===!0,zt=mt.length>1;if(zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=b.version,f.memory.textures++),ct){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)et.__webglFramebuffer[Rt][Wt]=r.createFramebuffer()}else et.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Rt=0,Wt=mt.length;Rt<Wt;Rt++){const jt=a.get(mt[Rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),f.memory.textures++)}if(z.samples>0&&Vt(z)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<mt.length;Rt++){const Wt=mt[Rt];et.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const jt=c.convert(Wt.format,Wt.colorSpace),St=c.convert(Wt.type),Lt=L(Wt.internalFormat,jt,St,Wt.colorSpace,z.isXRRenderTarget===!0),Kt=We(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Lt,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Qt(et.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){n.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(et.__webglFramebuffer[Rt][Wt],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else At(et.__webglFramebuffer[Rt],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Rt=0,Wt=mt.length;Rt<Wt;Rt++){const jt=mt[Rt],St=a.get(jt);let Lt=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,St.__webglTexture),xt(Lt,jt),At(et.__webglFramebuffer,z,jt,r.COLOR_ATTACHMENT0+Rt,Lt,0),M(jt)&&y(Lt)}n.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Rt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,ht.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(et.__webglFramebuffer[Wt],z,b,r.COLOR_ATTACHMENT0,Rt,Wt);else At(et.__webglFramebuffer,z,b,r.COLOR_ATTACHMENT0,Rt,0);M(b)&&y(Rt),n.unbindTexture()}z.depthBuffer&&ve(z)}function ze(z){const b=z.textures;for(let et=0,ht=b.length;et<ht;et++){const mt=b[et];if(M(mt)){const ct=U(z),zt=a.get(mt).__webglTexture;n.bindTexture(ct,zt),y(ct),n.unbindTexture()}}}const ce=[],ie=[];function Ot(z){if(z.samples>0){if(Vt(z)===!1){const b=z.textures,et=z.width,ht=z.height;let mt=r.COLOR_BUFFER_BIT;const ct=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(z),Rt=b.length>1;if(Rt)for(let jt=0;jt<b.length;jt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Wt=z.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let jt=0;jt<b.length;jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const St=a.get(b[jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,et,ht,0,0,et,ht,mt,r.NEAREST),d===!0&&(ce.length=0,ie.length=0,ce.push(r.COLOR_ATTACHMENT0+jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ce.push(ct),ie.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let jt=0;jt<b.length;jt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const St=a.get(b[jt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,St,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const b=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function We(z){return Math.min(l.maxSamples,z.samples)}function Vt(z){const b=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(z){const b=f.render.frame;g.get(z)!==b&&(g.set(z,b),z.update())}function Ke(z,b){const et=z.colorSpace,ht=z.format,mt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||et!==Fr&&et!==Wa&&(Re.getTransfer(et)===Oe?(ht!==Ri||mt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Qe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Z,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=on,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function bA(r,t){function n(a,l=Wa){let c;const f=Re.getTransfer(l);if(a===Vi)return r.UNSIGNED_BYTE;if(a===ep)return r.UNSIGNED_SHORT_4_4_4_4;if(a===np)return r.UNSIGNED_SHORT_5_5_5_1;if(a===E_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===T_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===M_)return r.BYTE;if(a===S_)return r.SHORT;if(a===ol)return r.UNSIGNED_SHORT;if(a===tp)return r.INT;if(a===ws)return r.UNSIGNED_INT;if(a===Fi)return r.FLOAT;if(a===ha)return r.HALF_FLOAT;if(a===b_)return r.ALPHA;if(a===A_)return r.RGB;if(a===Ri)return r.RGBA;if(a===cl)return r.DEPTH_COMPONENT;if(a===ul)return r.DEPTH_STENCIL;if(a===ip)return r.RED;if(a===ap)return r.RED_INTEGER;if(a===R_)return r.RG;if(a===sp)return r.RG_INTEGER;if(a===rp)return r.RGBA_INTEGER;if(a===tu||a===eu||a===nu||a===iu)if(f===Oe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===xd||a===yd||a===Md||a===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ed||a===Td||a===bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ed||a===Td)return f===Oe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===bd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ad||a===Rd||a===wd||a===Cd||a===Dd||a===Ud||a===Ld||a===Nd||a===Pd||a===Od||a===zd||a===Bd||a===Id||a===Fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ad)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Rd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===wd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Cd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Dd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ud)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ld)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Nd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Pd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Od)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===zd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Bd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Id)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Fd)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Hd||a===Gd||a===Vd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Hd)return f===Oe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===kd||a===Xd||a===Wd||a===qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===kd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ll?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
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

}`;class wA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new G_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new _n({vertexShader:AA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Te(new Cs(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CA extends Xr{constructor(t,n){super();const a=this;let l=null,c=1,f=null,h="local-floor",d=1,p=null,g=null,v=null,_=null,x=null,S=null;const T=typeof XRWebGLBinding<"u",M=new wA,y={},U=n.getContextAttributes();let L=null,C=null;const P=[],O=[],F=new ae;let V=null;const w=new Yn;w.viewport=new Ge;const D=new Yn;D.viewport=new Ge;const G=[w,D],Z=new KS;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=P[it];return vt===void 0&&(vt=new qh,P[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=P[it];return vt===void 0&&(vt=new qh,P[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=P[it];return vt===void 0&&(vt=new qh,P[it]=vt),vt.getHandSpace()};function ft(it){const vt=O.indexOf(it.inputSource);if(vt===-1)return;const At=P[vt];At!==void 0&&(At.update(it.inputSource,it.frame,p||f),At.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",nt);for(let it=0;it<P.length;it++){const vt=O[it];vt!==null&&(O[it]=null,P[it].disconnect(vt))}lt=null,ut=null,M.reset();for(const it in y)delete y[it];t.setRenderTarget(L),x=null,_=null,v=null,l=null,C=null,Ht.stop(),a.isPresenting=!1,t.setPixelRatio(V),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return S},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",B),l.addEventListener("inputsourceschange",nt),U.xrCompatible!==!0&&await n.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Qt=null,Yt=null;U.depth&&(Yt=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=U.stencil?ul:cl,Qt=U.stencil?ll:ws);const ve={colorFormat:n.RGBA8,depthFormat:Yt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ve),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new wi(_.textureWidth,_.textureHeight,{format:Ri,type:Vi,depthTexture:new H_(_.textureWidth,_.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,n,At),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new wi(x.framebufferWidth,x.framebufferHeight,{format:Ri,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await l.requestReferenceSpace(h),Ht.setContext(l),Ht.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(it){for(let vt=0;vt<it.removed.length;vt++){const At=it.removed[vt],Qt=O.indexOf(At);Qt>=0&&(O[Qt]=null,P[Qt].disconnect(At))}for(let vt=0;vt<it.added.length;vt++){const At=it.added[vt];let Qt=O.indexOf(At);if(Qt===-1){for(let ve=0;ve<P.length;ve++)if(ve>=O.length){O.push(At),Qt=ve;break}else if(O[ve]===null){O[ve]=At,Qt=ve;break}if(Qt===-1)break}const Yt=P[Qt];Yt&&Yt.connect(At)}}const j=new W,yt=new W;function N(it,vt,At){j.setFromMatrixPosition(vt.matrixWorld),yt.setFromMatrixPosition(At.matrixWorld);const Qt=j.distanceTo(yt),Yt=vt.projectionMatrix.elements,ve=At.projectionMatrix.elements,on=Yt[14]/(Yt[10]-1),H=Yt[14]/(Yt[10]+1),ze=(Yt[9]+1)/Yt[5],ce=(Yt[9]-1)/Yt[5],ie=(Yt[8]-1)/Yt[0],Ot=(ve[8]+1)/ve[0],We=on*ie,Vt=on*Ot,ue=Qt/(-ie+Ot),Ke=ue*-ie;if(vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ke),it.translateZ(ue),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Yt[10]===-1)it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Qe=on+ue,z=H+ue,b=We-Ke,et=Vt+(Qt-Ke),ht=ze*H/z*Qe,mt=ce*H/z*Qe;it.projectionMatrix.makePerspective(b,et,ht,mt,Qe,z),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function tt(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let vt=it.near,At=it.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),Z.near=D.near=w.near=vt,Z.far=D.far=w.far=At,(lt!==Z.near||ut!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),lt=Z.near,ut=Z.far),Z.layers.mask=it.layers.mask|6,w.layers.mask=Z.layers.mask&3,D.layers.mask=Z.layers.mask&5;const Qt=it.parent,Yt=Z.cameras;tt(Z,Qt);for(let ve=0;ve<Yt.length;ve++)tt(Yt[ve],Qt);Yt.length===2?N(Z,w,D):Z.projectionMatrix.copy(w.projectionMatrix),xt(it,Z,Qt)};function xt(it,vt,At){At===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Hr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(it){d=it,_!==null&&(_.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(it){return y[it]};let Mt=null;function Ut(it,vt){if(g=vt.getViewerPose(p||f),S=vt,g!==null){const At=g.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Qt=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,Qt=!0);for(let H=0;H<At.length;H++){const ze=At[H];let ce=null;if(x!==null)ce=x.getViewport(ze);else{const Ot=v.getViewSubImage(_,ze);ce=Ot.viewport,H===0&&(t.setRenderTargetTextures(C,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(C))}let ie=G[H];ie===void 0&&(ie=new Yn,ie.layers.enable(H),ie.viewport=new Ge,G[H]=ie),ie.matrix.fromArray(ze.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ze.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ce.x,ce.y,ce.width,ce.height),H===0&&(Z.matrix.copy(ie.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Qt===!0&&Z.cameras.push(ie)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const H=v.getDepthInformation(At[0]);H&&H.isValid&&H.texture&&M.init(H,l.renderState)}if(Yt&&Yt.includes("camera-access")&&T){t.state.unbindTexture(),v=a.getBinding();for(let H=0;H<At.length;H++){const ze=At[H].camera;if(ze){let ce=y[ze];ce||(ce=new G_,y[ze]=ce);const ie=v.getCameraImage(ze);ce.sourceTexture=ie}}}}for(let At=0;At<P.length;At++){const Qt=O[At],Yt=P[At];Qt!==null&&Yt!==void 0&&Yt.update(Qt,vt,p||f)}Mt&&Mt(it,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),S=null}const Ht=new X_;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(it){Mt=it},this.dispose=function(){}}}const ys=new ki,DA=new Xe;function UA(r,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,B_(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,U,L,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,C)):y.isMeshMatcapMaterial?(c(M,y),S(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?d(M,y,U,L):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Zn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Zn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const U=t.get(y),L=U.envMap,C=U.envMapRotation;L&&(M.envMap.value=L,ys.copy(C),ys.x*=-1,ys.y*=-1,ys.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),M.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(ys)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function d(M,y,U,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*U,M.scale.value=L*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,U){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const U=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function LA(r,t,n,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,L){const C=L.program;a.uniformBlockBinding(U,C)}function p(U,L){let C=l[U.id];C===void 0&&(S(U),C=g(U),l[U.id]=C,U.addEventListener("dispose",M));const P=L.program;a.updateUBOMapping(U,P);const O=t.render.frame;c[U.id]!==O&&(_(U),c[U.id]=O)}function g(U){const L=v();U.__bindingPointIndex=L;const C=r.createBuffer(),P=U.__size,O=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,P,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function v(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const L=l[U.id],C=U.uniforms,P=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let O=0,F=C.length;O<F;O++){const V=Array.isArray(C[O])?C[O]:[C[O]];for(let w=0,D=V.length;w<D;w++){const G=V[w];if(x(G,O,w,P)===!0){const Z=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let ft=0;ft<lt.length;ft++){const B=lt[ft],nt=T(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,Z+ut,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ut),ut+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(U,L,C,P){const O=U.value,F=L+"_"+C;if(P[F]===void 0)return typeof O=="number"||typeof O=="boolean"?P[F]=O:P[F]=O.clone(),!0;{const V=P[F];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return P[F]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function S(U){const L=U.uniforms;let C=0;const P=16;for(let F=0,V=L.length;F<V;F++){const w=Array.isArray(L[F])?L[F]:[L[F]];for(let D=0,G=w.length;D<G;D++){const Z=w[D],lt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,ft=lt.length;ut<ft;ut++){const B=lt[ut],nt=T(B),j=C%P,yt=j%nt.boundary,N=j+yt;C+=yt,N!==0&&P-N<nt.storage&&(C+=P-N),Z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=C,C+=nt.storage}}}const O=C%P;return O>0&&(C+=P-O),U.__size=C,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function M(U){const L=U.target;L.removeEventListener("dispose",M);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:d,update:p,dispose:y}}class NA{constructor(t={}){const{canvas:n=lS(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=f;const S=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1;this._outputColorSpace=ri;let O=0,F=0,V=null,w=-1,D=null;const G=new Ge,Z=new Ge;let lt=null;const ut=new le(0);let ft=0,B=n.width,nt=n.height,j=1,yt=null,N=null;const tt=new Ge(0,0,B,nt),xt=new Ge(0,0,B,nt);let Mt=!1;const Ut=new cp;let Ht=!1,it=!1;const vt=new Xe,At=new W,Qt=new Ge,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function on(){return V===null?j:1}let H=a;function ze(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Et,!1),H===null){const q="webgl2";if(H=ze(q,R),H===null)throw ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,ie,Ot,We,Vt,ue,Ke,Qe,z,b,et,ht,mt,ct,zt,Rt,Wt,jt,St,Lt,Kt,kt,Ct,fe;function X(){ce=new kT(H),ce.init(),kt=new bA(H,ce),ie=new zT(H,ce,t,kt),Ot=new EA(H,ce),ie.reversedDepthBuffer&&_&&Ot.buffers.depth.setReversed(!0),We=new qT(H),Vt=new uA,ue=new TA(H,ce,Ot,Vt,ie,kt,We),Ke=new IT(C),Qe=new VT(C),z=new JS(H),Ct=new PT(H,z),b=new XT(H,z,We,Ct),et=new jT(H,b,z,We),St=new YT(H,ie,ue),Rt=new BT(Vt),ht=new cA(C,Ke,Qe,ce,ie,Ct,Rt),mt=new UA(C,Vt),ct=new hA,zt=new _A(ce),jt=new NT(C,Ke,Qe,Ot,et,x,d),Wt=new MA(C,et,ie),fe=new LA(H,We,ie,Ot),Lt=new OT(H,ce,We),Kt=new WT(H,ce,We),We.programs=ht.programs,C.capabilities=ie,C.extensions=ce,C.properties=Vt,C.renderLists=ct,C.shadowMap=Wt,C.state=Ot,C.info=We}X();const bt=new CA(C,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(B,nt,!1))},this.getSize=function(R){return R.set(B,nt)},this.setSize=function(R,q,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,nt=q,n.width=Math.floor(R*j),n.height=Math.floor(q*j),rt===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*j,nt*j).floor()},this.setDrawingBufferSize=function(R,q,rt){B=R,nt=q,j=rt,n.width=Math.floor(R*rt),n.height=Math.floor(q*rt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,q,rt,ot){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,q,rt,ot),Ot.viewport(G.copy(tt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,q,rt,ot){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,q,rt,ot),Ot.scissor(Z.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Ot.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,rt=!0){let ot=0;if(R){let K=!1;if(V!==null){const Tt=V.texture.format;K=Tt===rp||Tt===sp||Tt===ap}if(K){const Tt=V.texture.type,Dt=Tt===Vi||Tt===ws||Tt===ol||Tt===ll||Tt===ep||Tt===np,It=jt.getClearColor(),Nt=jt.getClearAlpha(),$t=It.r,ee=It.g,qt=It.b;Dt?(S[0]=$t,S[1]=ee,S[2]=qt,S[3]=Nt,H.clearBufferuiv(H.COLOR,0,S)):(T[0]=$t,T[1]=ee,T[2]=qt,T[3]=Nt,H.clearBufferiv(H.COLOR,0,T))}else ot|=H.COLOR_BUFFER_BIT}q&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),jt.dispose(),ct.dispose(),zt.dispose(),Vt.dispose(),Ke.dispose(),Qe.dispose(),et.dispose(),Ct.dispose(),fe.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",dn),bt.removeEventListener("sessionend",pn),$e.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=We.autoReset,q=Wt.enabled,rt=Wt.autoUpdate,ot=Wt.needsUpdate,K=Wt.type;X(),We.autoReset=R,Wt.enabled=q,Wt.autoUpdate=rt,Wt.needsUpdate=ot,Wt.type=K}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const q=R.target;q.removeEventListener("dispose",_t),Gt(q)}function Gt(R){re(R),Vt.remove(R)}function re(R){const q=Vt.get(R).programs;q!==void 0&&(q.forEach(function(rt){ht.releaseProgram(rt)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,rt,ot,K,Tt){q===null&&(q=Yt);const Dt=K.isMesh&&K.matrixWorld.determinant()<0,It=pa(R,q,rt,ot,K);Ot.setMaterial(ot,Dt);let Nt=rt.index,$t=1;if(ot.wireframe===!0){if(Nt=b.getWireframeAttribute(rt),Nt===void 0)return;$t=2}const ee=rt.drawRange,qt=rt.attributes.position;let pe=ee.start*$t,Ce=(ee.start+ee.count)*$t;Tt!==null&&(pe=Math.max(pe,Tt.start*$t),Ce=Math.min(Ce,(Tt.start+Tt.count)*$t)),Nt!==null?(pe=Math.max(pe,0),Ce=Math.min(Ce,Nt.count)):qt!=null&&(pe=Math.max(pe,0),Ce=Math.min(Ce,qt.count));const je=Ce-pe;if(je<0||je===1/0)return;Ct.setup(K,ot,It,rt,Nt);let Be,me=Lt;if(Nt!==null&&(Be=z.get(Nt),me=Kt,me.setIndex(Be)),K.isMesh)ot.wireframe===!0?(Ot.setLineWidth(ot.wireframeLinewidth*on()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(K.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Ot.setLineWidth(Jt*on()),K.isLineSegments?me.setMode(H.LINES):K.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else K.isPoints?me.setMode(H.POINTS):K.isSprite&&me.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Ye=K._multiDrawCounts,Me=K._multiDrawCount,Dn=Nt?z.get(Nt).bytesPerElement:1,_i=Vt.get(ot).currentProgram.getUniforms();for(let zn=0;zn<Me;zn++)_i.setValue(H,"_gl_DrawID",zn),me.render(Jt[zn]/Dn,Ye[zn])}else if(K.isInstancedMesh)me.renderInstances(pe,je,K.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,Jt);me.renderInstances(pe,je,Ye)}else me.render(pe,je)};function Le(R,q,rt){R.transparent===!0&&R.side===jn&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Di(R,q,rt),R.side=Za,R.needsUpdate=!0,Di(R,q,rt),R.side=jn):Di(R,q,rt)}this.compile=function(R,q,rt=null){rt===null&&(rt=R),y=zt.get(rt),y.init(q),L.push(y),rt.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const It=Tt[Dt];Le(It,rt,K),ot.add(It)}else Le(Tt,rt,K),ot.add(Tt)}),y=L.pop(),ot},this.compileAsync=function(R,q,rt=null){const ot=this.compile(R,q,rt);return new Promise(K=>{function Tt(){if(ot.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){K(R);return}setTimeout(Tt,10)}ce.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ae=null;function vi(R){Ae&&Ae(R)}function dn(){$e.stop()}function pn(){$e.start()}const $e=new X_;$e.setAnimationLoop(vi),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(R){Ae=R,bt.setAnimationLoop(R),R===null?$e.stop():$e.start()},bt.addEventListener("sessionstart",dn),bt.addEventListener("sessionend",pn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,V),y=zt.get(R,L.length),y.init(q),L.push(y),vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ut.setFromProjectionMatrix(vt,Hi,q.reversedDepth),it=this.localClippingEnabled,Ht=Rt.init(this.clippingPlanes,it),M=ct.get(R,U.length),M.init(),U.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=C.xr.getDepthSensingMesh();Tt!==null&&Ci(Tt,q,-1/0,C.sortObjects)}Ci(R,q,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(yt,N),ve=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ve&&jt.addToRenderList(M,R),this.info.render.frame++,Ht===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;Wt.render(rt,R,q),Ht===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,K=M.transmissive;if(y.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(K.length>0)for(let Dt=0,It=Tt.length;Dt<It;Dt++){const Nt=Tt[Dt];ml(ot,K,R,Nt)}ve&&jt.render(R);for(let Dt=0,It=Tt.length;Dt<It;Dt++){const Nt=Tt[Dt];Us(M,R,Nt,Nt.viewport)}}else K.length>0&&ml(ot,K,R,q),ve&&jt.render(R),Us(M,R,q);V!==null&&F===0&&(ue.updateMultisampleRenderTarget(V),ue.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(C,R,q),Ct.resetDefaultState(),w=-1,D=null,L.pop(),L.length>0?(y=L[L.length-1],Ht===!0&&Rt.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?M=U[U.length-1]:M=null};function Ci(R,q,rt,ot){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){ot&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Dt=et.update(R),It=R.material;It.visible&&M.push(R,Dt,It,rt,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){const Dt=et.update(R),It=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(It)){const Nt=Dt.groups;for(let $t=0,ee=Nt.length;$t<ee;$t++){const qt=Nt[$t],pe=It[qt.materialIndex];pe&&pe.visible&&M.push(R,Dt,pe,rt,Qt.z,qt)}}else It.visible&&M.push(R,Dt,It,rt,Qt.z,null)}}const Tt=R.children;for(let Dt=0,It=Tt.length;Dt<It;Dt++)Ci(Tt[Dt],q,rt,ot)}function Us(R,q,rt,ot){const K=R.opaque,Tt=R.transmissive,Dt=R.transparent;y.setupLightsView(rt),Ht===!0&&Rt.setGlobalState(C.clippingPlanes,rt),ot&&Ot.viewport(G.copy(ot)),K.length>0&&Ls(K,q,rt),Tt.length>0&&Ls(Tt,q,rt),Dt.length>0&&Ls(Dt,q,rt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function ml(R,q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new wi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?ha:Vi,minFilter:Rs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||G;Tt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);const It=C.getRenderTarget(),Nt=C.getActiveCubeFace(),$t=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(ut),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),ve&&jt.render(rt);const ee=C.toneMapping;C.toneMapping=ja;const qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),Ht===!0&&Rt.setGlobalState(C.clippingPlanes,ot),Ls(R,rt,ot),ue.updateMultisampleRenderTarget(Tt),ue.updateRenderTargetMipmap(Tt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ce=0,je=q.length;Ce<je;Ce++){const Be=q[Ce],me=Be.object,Jt=Be.geometry,Ye=Be.material,Me=Be.group;if(Ye.side===jn&&me.layers.test(ot.layers)){const Dn=Ye.side;Ye.side=Zn,Ye.needsUpdate=!0,Jr(me,rt,ot,Jt,Ye,Me),Ye.side=Dn,Ye.needsUpdate=!0,pe=!0}}pe===!0&&(ue.updateMultisampleRenderTarget(Tt),ue.updateRenderTargetMipmap(Tt))}C.setRenderTarget(It,Nt,$t),C.setClearColor(ut,ft),qt!==void 0&&(ot.viewport=qt),C.toneMapping=ee}function Ls(R,q,rt){const ot=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Tt=R.length;K<Tt;K++){const Dt=R[K],It=Dt.object,Nt=Dt.geometry,$t=Dt.group;let ee=Dt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),It.layers.test(rt.layers)&&Jr(It,q,rt,Nt,ee,$t)}}function Jr(R,q,rt,ot,K,Tt){R.onBeforeRender(C,q,rt,ot,K,Tt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,q,rt,ot,R,Tt),K.transparent===!0&&K.side===jn&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,C.renderBufferDirect(rt,q,ot,K,R,Tt),K.side=Za,K.needsUpdate=!0,C.renderBufferDirect(rt,q,ot,K,R,Tt),K.side=jn):C.renderBufferDirect(rt,q,ot,K,R,Tt),R.onAfterRender(C,q,rt,ot,K,Tt)}function Di(R,q,rt){q.isScene!==!0&&(q=Yt);const ot=Vt.get(R),K=y.state.lights,Tt=y.state.shadowsArray,Dt=K.state.version,It=ht.getParameters(R,K.state,Tt,q,rt),Nt=ht.getProgramCacheKey(It);let $t=ot.programs;ot.environment=R.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(R.isMeshStandardMaterial?Qe:Ke).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",_t),$t=new Map,ot.programs=$t);let ee=$t.get(Nt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Dt)return Xi(R,It),ee}else It.uniforms=ht.getUniforms(R),R.onBeforeCompile(It,C),ee=ht.acquireProgram(It,Nt),$t.set(Nt,ee),ot.uniforms=It.uniforms;const qt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),Xi(R,It),ot.needsLights=ma(R),ot.lightsStateVersion=Dt,ot.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Ns(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=au.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Xi(R,q){const rt=Vt.get(R);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function pa(R,q,rt,ot,K){q.isScene!==!0&&(q=Yt),ue.resetTextureUnits();const Tt=q.fog,Dt=ot.isMeshStandardMaterial?q.environment:null,It=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Fr,Nt=(ot.isMeshStandardMaterial?Qe:Ke).get(ot.envMap||Dt),$t=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),qt=!!rt.morphAttributes.position,pe=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let je=ja;ot.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(je=C.toneMapping);const Be=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,me=Be!==void 0?Be.length:0,Jt=Vt.get(ot),Ye=y.state.lights;if(Ht===!0&&(it===!0||R!==D)){const tn=R===D&&ot.id===w;Rt.setState(ot,R,tn)}let Me=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ye.state.version||Jt.outputColorSpace!==It||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==Nt||ot.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==qt||Jt.morphNormals!==pe||Jt.morphColors!==Ce||Jt.toneMapping!==je||Jt.morphTargetsCount!==me)&&(Me=!0):(Me=!0,Jt.__version=ot.version);let Dn=Jt.currentProgram;Me===!0&&(Dn=Di(ot,q,K));let _i=!1,zn=!1,Mn=!1;const Ve=Dn.getUniforms(),Bn=Jt.uniforms;if(Ot.useProgram(Dn.program)&&(_i=!0,zn=!0,Mn=!0),ot.id!==w&&(w=ot.id,zn=!0),_i||D!==R){Ot.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ve.setValue(H,"projectionMatrix",R.projectionMatrix),Ve.setValue(H,"viewMatrix",R.matrixWorldInverse);const An=Ve.map.cameraPosition;An!==void 0&&An.setValue(H,At.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&Ve.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ve.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,zn=!0,Mn=!0)}if(K.isSkinnedMesh){Ve.setOptional(H,K,"bindMatrix"),Ve.setOptional(H,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ve.setValue(H,"boneTexture",tn.boneTexture,ue))}K.isBatchedMesh&&(Ve.setOptional(H,K,"batchingTexture"),Ve.setValue(H,"batchingTexture",K._matricesTexture,ue),Ve.setOptional(H,K,"batchingIdTexture"),Ve.setValue(H,"batchingIdTexture",K._indirectTexture,ue),Ve.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(H,"batchingColorTexture",K._colorsTexture,ue));const Un=rt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&St.update(K,rt,Dn),(zn||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Ve.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Bn.envMap.value=Nt,Bn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(Bn.envMapIntensity.value=q.environmentIntensity),zn&&(Ve.setValue(H,"toneMappingExposure",C.toneMappingExposure),Jt.needsLights&&Qa(Bn,Mn),Tt&&ot.fog===!0&&mt.refreshFogUniforms(Bn,Tt),mt.refreshMaterialUniforms(Bn,ot,j,nt,y.state.transmissionRenderTarget[R.id]),au.upload(H,Ns(Jt),Bn,ue)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(au.upload(H,Ns(Jt),Bn,ue),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ve.setValue(H,"center",K.center),Ve.setValue(H,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(H,"normalMatrix",K.normalMatrix),Ve.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const tn=ot.uniformsGroups;for(let An=0,Ps=tn.length;An<Ps;An++){const Vn=tn[An];fe.update(Vn,Dn),fe.bind(Vn,Dn)}}return Dn}function Qa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ma(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,q,rt){const ot=Vt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=q,Vt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const rt=Vt.get(R);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const ln=H.createFramebuffer();this.setRenderTarget=function(R,q=0,rt=0){V=R,O=q,F=rt;let ot=!0,K=null,Tt=!1,Dt=!1;if(R){const Nt=Vt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Nt.__webglFramebuffer===void 0)ue.setupRenderTarget(R);else if(Nt.__hasExternalTextures)ue.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Vt.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const ee=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?K=ee[q][rt]:K=ee[q],Tt=!0):R.samples>0&&ue.useMultisampledRTT(R)===!1?K=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[rt]:K=ee,G.copy(R.viewport),Z.copy(R.scissor),lt=R.scissorTest}else G.copy(tt).multiplyScalar(j).floor(),Z.copy(xt).multiplyScalar(j).floor(),lt=Mt;if(rt!==0&&(K=ln),Ot.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&Ot.drawBuffers(R,K),Ot.viewport(G),Ot.scissor(Z),Ot.setScissorTest(lt),Tt){const Nt=Vt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,rt)}else if(Dt){const Nt=q;for(let $t=0;$t<R.textures.length;$t++){const ee=Vt.get(R.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,ee.__webglTexture,rt,Nt)}}else if(R!==null&&rt!==0){const Nt=Vt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(R,q,rt,ot,K,Tt,Dt,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const $t=R.textures[It],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(q,rt,ot,K,kt.convert(ee),kt.convert(qt),Tt))}finally{const $t=V!==null?Vt.get(V).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,q,rt,ot,K,Tt,Dt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-K){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);const $t=R.textures[It],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(q,rt,ot,K,kt.convert(ee),kt.convert(qt),0);const Ce=V!==null?Vt.get(V).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,Ce);const je=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cS(H,je,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(pe),H.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Dt=q!==null?q.x:0,It=q!==null?q.y:0;ue.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Dt,It,K,Tt),Ot.unbindTexture()};const gl=H.createFramebuffer(),vl=H.createFramebuffer();this.copyTextureToTexture=function(R,q,rt=null,ot=null,K=0,Tt=null){Tt===null&&(K!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Dt,It,Nt,$t,ee,qt,pe,Ce,je;const Be=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(rt!==null)Dt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,ee=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const Un=Math.pow(2,-K);Dt=Math.floor(Be.width*Un),It=Math.floor(Be.height*Un),R.isDataArrayTexture?Nt=Be.depth:R.isData3DTexture?Nt=Math.floor(Be.depth*Un):Nt=1,$t=0,ee=0,qt=0}ot!==null?(pe=ot.x,Ce=ot.y,je=ot.z):(pe=0,Ce=0,je=0);const me=kt.convert(q.format),Jt=kt.convert(q.type);let Ye;q.isData3DTexture?(ue.setTexture3D(q,0),Ye=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ue.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY):(ue.setTexture2D(q,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),Dn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_i=H.getParameter(H.UNPACK_SKIP_PIXELS),zn=H.getParameter(H.UNPACK_SKIP_ROWS),Mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qt);const Ve=R.isDataArrayTexture||R.isData3DTexture,Bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Un=Vt.get(R),tn=Vt.get(q),An=Vt.get(Un.__renderTarget),Ps=Vt.get(tn.__renderTarget);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let Vn=0;Vn<Nt;Vn++)Ve&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,K,qt+Vn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Tt,je+Vn)),H.blitFramebuffer($t,ee,Dt,It,pe,Ce,Dt,It,H.DEPTH_BUFFER_BIT,H.NEAREST);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Vt.has(R)){const Un=Vt.get(R),tn=Vt.get(q);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,gl),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,vl);for(let An=0;An<Nt;An++)Ve?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Un.__webglTexture,K,qt+An):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Un.__webglTexture,K),Bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tn.__webglTexture,Tt,je+An):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tn.__webglTexture,Tt),K!==0?H.blitFramebuffer($t,ee,Dt,It,pe,Ce,Dt,It,H.COLOR_BUFFER_BIT,H.NEAREST):Bn?H.copyTexSubImage3D(Ye,Tt,pe,Ce,je+An,$t,ee,Dt,It):H.copyTexSubImage2D(Ye,Tt,pe,Ce,$t,ee,Dt,It);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ye,Tt,pe,Ce,je,Dt,It,Nt,me,Jt,Be.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,Tt,pe,Ce,je,Dt,It,Nt,me,Be.data):H.texSubImage3D(Ye,Tt,pe,Ce,je,Dt,It,Nt,me,Jt,Be):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,pe,Ce,Dt,It,me,Jt,Be.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,pe,Ce,Be.width,Be.height,me,Be.data):H.texSubImage2D(H.TEXTURE_2D,Tt,pe,Ce,Dt,It,me,Jt,Be);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_i),H.pixelStorei(H.UNPACK_SKIP_ROWS,zn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mn),Tt===0&&q.generateMipmaps&&H.generateMipmap(Ye),Ot.unbindTexture()},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&ue.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ue.setTextureCube(R,0):R.isData3DTexture?ue.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ue.setTexture2DArray(R,0):ue.setTexture2D(R,0),Ot.unbindTexture()},this.resetState=function(){O=0,F=0,V=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}function su(r,t=!1){const n=r[0].index!==null,a=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),c={},f={},h=r[0].morphTargetsRelative,d=new hn;let p=0;for(let g=0;g<r.length;++g){const v=r[g];let _=0;if(n!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in v.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(v.attributes[x]),_++}if(_!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in v.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;f[x]===void 0&&(f[x]=[]),f[x].push(v.morphAttributes[x])}if(t){let x;if(n)x=v.index.count;else if(v.attributes.position!==void 0)x=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;d.addGroup(p,x,g),p+=x}}if(n){let g=0;const v=[];for(let _=0;_<r.length;++_){const x=r[_].index;for(let S=0;S<x.count;++S)v.push(x.getX(S)+g);g+=r[_].attributes.position.count}d.setIndex(v)}for(const g in c){const v=a_(c[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;d.setAttribute(g,v)}for(const g in f){const v=f[g][0].length;if(v===0)break;d.morphAttributes=d.morphAttributes||{},d.morphAttributes[g]=[];for(let _=0;_<v;++_){const x=[];for(let T=0;T<f[g].length;++T)x.push(f[g][T][_]);const S=a_(x);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;d.morphAttributes[g].push(S)}}return d}function a_(r){let t,n,a,l=-1,c=0;for(let p=0;p<r.length;++p){const g=r[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=g.gpuType),l!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const f=new t(c),h=new li(f,n,a);let d=0;for(let p=0;p<r.length;++p){const g=r[p];if(g.isInterleavedBufferAttribute){const v=d/n;for(let _=0,x=g.count;_<x;_++)for(let S=0;S<n;S++){const T=g.getComponent(_,S);h.setComponent(_+v,S,T)}}else f.set(g.array,d);d+=g.count*n}return l!==void 0&&(h.gpuType=l),h}const ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const PA=new mp(-1,1,1,-1,0,1);class OA extends hn{constructor(){super(),this.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new we([0,2,0,0,2,0],2))}}const zA=new OA;class vp{constructor(t){this._mesh=new Te(zA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,PA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class BA extends Qr{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof _n?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hl.clone(t.uniforms),this.material=new _n({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new vp(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class s_ extends Qr{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class IA extends Qr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class FA{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new ae);this._width=a.width,this._height=a.height,n=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ha}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new BA(ru),this.copyPass.material.blending=fa,this.clock=new k_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),f.needsSwap){if(a){const h=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}s_!==void 0&&(f instanceof s_?a=!0:f instanceof IA&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(a,l),this.renderTarget2.setSize(a,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HA extends Qr{constructor(t,n,a=null,l=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new le}render(t,n,a){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const GA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vr extends Qr{constructor(t,n=1,a,l){super(),this.strength=n,this.radius=a,this.threshold=l,this.resolution=t!==void 0?new ae(t.x,t.y):new ae(256,256),this.clearColor=new le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new wi(c,f,{type:ha}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new wi(c,f,{type:ha});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new wi(c,f,{type:ha});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),f=Math.round(f/2)}const h=GA;this.highPassUniforms=hl.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _n({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new ae(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hl.clone(ru.uniforms),this.blendMaterial=new _n({uniforms:this.copyUniforms,vertexShader:ru.vertexShader,fragmentShader:ru.fragmentShader,blending:Or,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new le,this._oldClearAlpha=1,this._basic=new qa,this._fsQuad=new vp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),l=Math.round(n/2);this.renderTargetBright.setSize(a,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,l),this.renderTargetsVertical[c].setSize(a,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ae(1/a,1/l),a=Math.round(a/2),l=Math.round(l/2)}render(t,n,a,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[d].uniforms.direction.value=Vr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Vr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const n=[];for(let a=0;a<t;a++)n.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new _n({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new _n({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Vr.BlurDirectionX=new ae(1,0);Vr.BlurDirectionY=new ae(0,1);const Kc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class VA extends Qr{constructor(){super(),this.uniforms=hl.clone(Kc.uniforms),this.material=new kS({name:Kc.name,uniforms:this.uniforms,vertexShader:Kc.vertexShader,fragmentShader:Kc.fragmentShader}),this._fsQuad=new vp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Re.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===p_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===m_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===g_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===__?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===x_?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===v_&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const zi=Math.PI*2;let sd=91623;const ou=()=>(sd=1664525*sd+1013904223>>>0,sd/4294967296),oe=(r,t)=>r+ou()*(t-r),Ms=Ya.clamp,Xt=(r=0,t=0,n=0)=>new W(r,t,n);function kA(r,t){return Math.sin(r*.063+Math.sin(t*.047)*2.3)*1.6+Math.sin(t*.09+r*.023)*1.3+Math.sin(r*.18+t*.12)*.5}function Rr(r,t){return-15+kA(r,t)+Math.max(0,Math.abs(r+Math.sin(t*.025)*13)-22)*.085-Math.max(0,-t-110)*.026}const r_=`
float hash21(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float valueNoise(vec2 p){vec2 i=floor(p), f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float caustic(vec2 p,float t){p+=vec2(sin(p.y*.6+t*.37),cos(p.x*.7+t*.29))*.8;float a=sin(p.x*1.9+p.y*.6+t*.52)+sin(p.y*2.1-p.x*.3-t*.41);float b=sin(p.x*2.6-p.y*.8-t*.32)+sin(p.y*2.5+p.x*.6+t*.38);return pow(1.-abs(sin(a+b)),16.);}
`;class XA{scene=new NS;camera;renderer;uniforms={uTime:{value:0}};host;hooks;clock=new k_;frame=0;alive=!0;playing=!1;started=!1;glide=!1;sound=!0;yaw=0;pitch=-.1;targetYaw=0;targetPitch=-.1;keys=new Set;velocity=Xt();move=Xt();forward=Xt();right=Xt();upAxis=Xt(0,1,0);position=Xt(0,3,35);touch={x:0,y:0,z:0};dragging=!1;lastPointer={x:0,y:0};listeners=[];creatures=[];fish;fishData=[];particles;kelpMaterials=[];colliders=[];dummy=new rn;statusAt=0;time=0;pausedTime=0;audioContext=null;master=null;observer;reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(t,n,a={}){if(this.host=t,this.hooks=n,this.camera=new Yn(67,t.clientWidth/t.clientHeight,.12,600),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0),this.renderer=new NA({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.outputColorSpace=ri,this.renderer.toneMapping=hu,this.renderer.toneMappingExposure=1.18,this.renderer.setClearColor(676709),t.appendChild(this.renderer.domElement),this.scene.background=new le(742243),this.scene.fog=new pu(742243,.014),a.deferStart)return;const l=new V_(10019551,1783361,2.2);this.scene.add(l);const c=new jd(14811116,3.2);c.position.set(-35,65,-10),this.scene.add(c);const f=new jd(4770768,1.5);f.position.set(30,18,-60),this.scene.add(f),this.terrain(),this.rocks(),this.plants(),this.surface(),this.life(),this.suspendedParticles(),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.animate(),requestAnimationFrame(()=>n.onReady())}material(t,n="plain",a=.82,l=1){const c=new Cr({color:t,roughness:a,metalness:n==="skin"?.05:0}),f=Math.max(0,l);return c.onBeforeCompile=h=>{h.uniforms.uTime=this.uniforms.uTime,h.vertexShader=`varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOceanLocal=position;`),h.vertexShader=h.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 oceanPos=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          oceanPos=instanceMatrix*oceanPos;
        #endif
        vOceanWorld=(modelMatrix*oceanPos).xyz;`),h.fragmentShader=`uniform float uTime; varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+r_+h.fragmentShader;let d="";n==="sand"&&(d="float grain=valueNoise(vOceanWorld.xz*15.);float ripple=sin(vOceanWorld.x*.7+vOceanWorld.z*3.+valueNoise(vOceanWorld.xz*.11)*5.);diffuseColor.rgb*=.82+grain*.22+ripple*.07;"),n==="rock"&&(d="float n=valueNoise(vOceanWorld.xz*1.7+vOceanWorld.y*.8);float layer=sin(vOceanWorld.y*5.+valueNoise(vOceanWorld.xz)*3.);diffuseColor.rgb*=.67+n*.5+layer*.075;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.22,.16),smoothstep(.57,.84,n)*.6);"),n==="skin"&&(d="float blot=valueNoise(vOceanLocal.xz*5.+vOceanLocal.y*2.);float fine=valueNoise(vOceanLocal.xy*48.);float bands=sin(vOceanLocal.x*5.5+vOceanLocal.z*3.+blot*4.);diffuseColor.rgb*=.6+blot*.5+fine*.15;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.42,smoothstep(.5,.9,bands)*.45);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.54,.62,.49),(1.-smoothstep(-.75,.0,vOceanLocal.y))*.65);"),h.fragmentShader=h.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${d}`),h.fragmentShader=h.fragmentShader.replace("#include <opaque_fragment>",`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(.055*f).toFixed(4)};
#include <opaque_fragment>`)},c.customProgramCacheKey=()=>`${n}:${f.toFixed(2)}`,c}terrain(){const t=new Cs(700,700,180,180);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let l=0;l<n.count;l++)n.setY(l,Rr(n.getX(l),n.getZ(l)));t.computeVertexNormals();const a=new Te(t,this.material(11511685,"sand"));this.scene.add(a)}rocks(){const t=[this.material(8094578,"rock"),this.material(7567721,"rock"),this.material(6454124,"rock")],n=[];for(let l=0;l<5;l++){const c=new Pr(1,3),f=c.attributes.position;for(let h=0;h<f.count;h++){const d=f.getX(h),p=f.getY(h),g=f.getZ(h),v=1+.12*Math.sin(d*8+l)*Math.sin(g*7-p*4)+.055*Math.sin(p*19+d*8);f.setXYZ(h,d*v,p*v,g*v)}c.computeVertexNormals(),n.push(c)}const a=(l,c,f,h,d)=>{const p=new Te(n[Math.floor(ou()*5)],t[Math.floor(ou()*3)]);p.position.set(l,Rr(l,c)+h*.15,c),p.scale.set(f,h,d),p.rotation.set(oe(-.2,.2),oe(0,zi),oe(-.12,.12)),this.scene.add(p),f>3&&this.colliders.push({pos:p.position.clone(),radius:Math.min(f,d)*.88,height:h*.95})};for(let l=0;l<95;l++){const c=oe(-205,95),h=(l%2?1:-1)*oe(24,65)+Math.sin(c*.025)*8,d=oe(3,10);a(h,c,d,oe(4,15),d*oe(.7,1.5))}a(-23,-16,13,19,15),a(-35,-24,17,24,14),a(34,-50,15,22,17),a(43,-69,18,28,14);for(let l=0;l<210;l++){const c=oe(-160,160),f=oe(-230,140),h=oe(.3,2.8);a(c,f,h,h*oe(.4,1),h*oe(.6,1.5))}a(-28,-103,8,20,7),a(-3,-103,6,18,7),a(-15,-103,17,4,6)}plantMaterial(t){const n=this.material(t,"plain",.9);n.side=jn;const a=n.onBeforeCompile;return n.onBeforeCompile=(l,c)=>{a(l,c),l.vertexShader=`attribute float aBend;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("vOceanLocal=position;",`vOceanLocal=position; vec3 ip=vec3(0.);
      #ifdef USE_INSTANCING
      ip=instanceMatrix[3].xyz;
      #endif
      transformed.x+=sin(uTime*.6+ip.x*.3+position.y*.7)*aBend*.35;
      transformed.z+=sin(uTime*.43+ip.z*.4+position.y*.45)*aBend*.25;`),l.vertexShader=`uniform float uTime;
`+l.vertexShader},n.customProgramCacheKey=()=>`plant${t}`,n}plants(){const t=(f,h,d)=>{const p=[],g=[],v=[],_=[];for(let T=0;T<=12;T++){let M=T/12;const y=h*Math.pow(Math.sin(Math.PI*M*.95),.7)+.008;for(let U=-1;U<=1;U+=2)p.push(U*y+Math.sin(M*2)*d,f*M,Math.sin(M*3)*d*.45),g.push((U+1)/2,M),_.push(M*M*f*.3);if(T<12){let U=T*2;v.push(U,U+1,U+2,U+1,U+3,U+2)}}const S=new hn;return S.setAttribute("position",new we(p,3)),S.setAttribute("uv",new we(g,2)),S.setAttribute("aBend",new we(_,1)),S.setIndex(v),S.computeVertexNormals(),S};for(let f=0;f<3;f++){const h=t(f===2?9:2.5,f===2?.25:.09,.2),d=this.plantMaterial([4352834,6584125,5270332][f]),p=f===2?480:1900,g=new Rv(h,d,p);for(let v=0;v<p;v++){let _=oe(-110,110),x=oe(-220,100);const S=Math.abs(_+Math.sin(x*.035)*8);S<13&&(_+=Math.sign(_||1)*(15-S)),this.dummy.position.set(_,Rr(_,x)-.1,x),this.dummy.rotation.set(oe(-.08,.08),oe(0,zi),0);const T=oe(.5,1.7);this.dummy.scale.set(T,T,T),this.dummy.updateMatrix(),g.setMatrixAt(v,this.dummy.matrix)}this.scene.add(g)}const n=[],a=(f,h,d)=>{const p=h.clone().sub(f),g=new bi(d*.48,d,p.length(),5,1);g.applyQuaternion(new qr().setFromUnitVectors(Xt(0,1,0),p.normalize())),g.translate((f.x+h.x)/2,(f.y+h.y)/2,(f.z+h.z)/2),n.push(g)},l=(f,h,d,p)=>{const g=f.clone().add(Xt(Math.sin(h)*d,Math.cos(h)*d,oe(-.13,.13)));a(f,g,p*.025+.014),p>0&&(l(g,h-.43,d*.7,p-1),l(g,h+.4,d*.74,p-1))};l(Xt(),0,1.05,4);const c=su(n);if(n.forEach(f=>f.dispose()),c){const f=[this.material(10184030),this.material(9600599),this.material(6454643)];for(let h=0;h<90;h++){const d=new Te(c,f[h%3]),p=oe(-65,65),g=oe(-170,60);d.position.set(p,Rr(p,g),g),d.rotation.y=oe(0,zi),d.scale.setScalar(oe(.6,1.4)),this.scene.add(d)}}}surface(){const t=new _n({uniforms:{uTime:this.uniforms.uTime},side:jn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 wp; uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.09+uTime*.25)*.3+sin(p.y*.11-uTime*.3)*.2;wp=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`varying vec3 wp;uniform float uTime;${r_}void main(){float c=caustic(wp.xz*.16,uTime*.7);float n=valueNoise(wp.xz*.025+uTime*.02);vec3 col=mix(vec3(.1,.48,.54),vec3(.55,.86,.81),n);col+=c*.24;float sun=exp(-length(wp.xz-vec2(-38.,-36.))*.014);col+=vec3(.35,.4,.3)*sun;gl_FragColor=vec4(col,.89);}`}),n=new Te(new Cs(800,800,55,55),t);n.rotation.x=-Math.PI/2,n.position.y=26,this.scene.add(n);const a=new _n({uniforms:{uTime:this.uniforms.uTime},transparent:!0,depthWrite:!1,side:jn,blending:Or,vertexShader:"varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying vec3 wPos;uniform float uTime;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float vertical=sin(vUv.y*3.14159);float pulse=.78+sin(wPos.x*.14+uTime*.21)*.12;gl_FragColor=vec4(.38,.78,.67,edge*vertical*pulse*.038);}"});for(let l=0;l<30;l++){const c=oe(34,54),f=new Te(new bi(oe(.3,1.2),oe(2,5),c,16,1,!0),a);f.position.set(oe(-85,95),26-c*.48,oe(-130,55)),f.rotation.z=-.26,f.rotation.x=.13,this.scene.add(f)}}ellipsoid(t,n,a,l,c,f,h,d){const p=new dl(1,32,20);p.scale(f,h,d),p.translate(a,l,c);const g=new Te(p,n);return t.add(g),g}tube(t,n,a,l=56,c=12){const f=new VS(t),h=f.computeFrenetFrames(l,!1),d=[],p=[],g=[];for(let _=0;_<=l;_++){const x=_/l,S=f.getPoint(x),T=x*(n.length-1),M=Math.min(Math.floor(T),n.length-2),y=Ya.lerp(n[M],n[M+1],T-M);for(let U=0;U<=c;U++){const L=U/c*zi,C=S.clone().addScaledVector(h.normals[_],Math.cos(L)*y).addScaledVector(h.binormals[_],Math.sin(L)*y);if(d.push(C.x,C.y,C.z),p.push(U/c,x),_<l&&U<c){const P=_*(c+1)+U,O=P+c+1;g.push(P,P+1,O,O,P+1,O+1)}}}const v=new hn;return v.setAttribute("position",new we(d,3)),v.setAttribute("uv",new we(p,2)),v.setIndex(g),v.computeVertexNormals(),new Te(v,a)}flipper(t,n,a){const l=[],c=[],f=[];for(let g=0;g<=20;g++){const v=g/20,_=Math.max(.015,Math.pow(Math.sin(Math.PI*v),.7)*a);for(let x=0;x<=12;x++){const S=x/12*zi;if(l.push(-v*v*n*.32+_*Math.cos(S),Math.sin(S)*_*.18,v*n),c.push(x/12,v),g<20&&x<12){const T=g*13+x;f.push(T,T+1,T+12+1,T+1,T+12+2,T+12+1)}}}const p=new hn;return p.setAttribute("position",new we(l,3)),p.setAttribute("uv",new we(c,2)),p.setIndex(f),p.computeVertexNormals(),new Te(p,t)}plesiosaur(t=1){const n=new vn,a=this.material(5532e3,"skin",.51),l=[];this.ellipsoid(n,a,0,0,0,2.6,.92,1.24),n.add(this.tube([Xt(1.3,.2),Xt(2.8,.38),Xt(4.3,1.06),Xt(5.8,1.7),Xt(7.1,1.86)],[.76,.46,.32,.25,.22],a)),this.ellipsoid(n,a,7.38,1.88,0,.65,.3,.31),this.ellipsoid(n,a,7.79,1.79,0,.42,.15,.22);const c=new Cr({color:397841,roughness:.12,metalness:.3});for(const h of[-1,1]){this.ellipsoid(n,this.material(9144688),7.37,2.01,h*.262,.11,.095,.039),this.ellipsoid(n,c,7.4,2.014,h*.294,.065,.06,.024);const d=this.tube([Xt(7.34,1.73,h*.265),Xt(7.78,1.72,h*.205),Xt(8.02,1.75,h*.105)],[.012,.012,.006],c,12,4);n.add(d);for(let p=0;p<2;p++){const g=new vn;g.position.set(p===0?1.2:-1.65,-.34,h*.85);const v=this.flipper(a,p===0?3.3:2.8,.68);h<0&&(v.rotation.x=Math.PI),g.add(v),g.userData.side=h,g.userData.phase=p*.8,n.add(g),l.push(g)}}const f=new vn;return f.position.x=-1.9,f.add(this.tube([Xt(),Xt(-1.7,-.1),Xt(-3.4,-.06),Xt(-4.2,.03)],[.7,.36,.12,.012],a,36)),n.add(f),n.scale.setScalar(t),{group:n,fins:l,tail:f,kind:"plesiosaur",scale:t}}ichthyosaur(t=1){const n=new vn,a=this.material(4810096,"skin",.42),l=[];this.ellipsoid(n,a,0,0,0,2.6,.77,.73),n.add(this.tube([Xt(1.5,0),Xt(2.5,-.03),Xt(3.65,-.14)],[.57,.31,.045],a,35));const c=new Cr({color:397843,roughness:.15});for(const d of[-1,1]){this.ellipsoid(n,c,1.75,.27,d*.45,.12,.13,.06);const p=new vn;p.position.set(.9,-.25,d*.58);const g=this.flipper(a,1.7,.4);d<0&&(g.rotation.x=Math.PI),p.add(g),p.userData.side=d,p.userData.phase=0,n.add(p),l.push(p)}const f=this.flipper(a,1.3,.6);f.rotation.x=-Math.PI/2,f.position.set(-.35,.55,0),n.add(f);const h=new vn;h.position.x=-1.9,h.add(this.tube([Xt(),Xt(-1.3,0),Xt(-2.15,0)],[.5,.23,.06],a,24));for(const d of[-1,1]){const p=this.flipper(a,1.35,.42);p.position.x=-2,p.rotation.x=d*Math.PI/2,h.add(p)}return n.add(h),n.scale.setScalar(t),{group:n,fins:l,tail:h,kind:"ichthyosaur",scale:t}}spinosaurus(t=1){const n=new vn,a=this.material(6777171,"skin",.7),l=[];this.ellipsoid(n,a,0,0,0,2.4,1.1,.87),n.add(this.tube([Xt(1.5,.3),Xt(2.6,.75),Xt(3.4,.8)],[.66,.43,.36],a,32)),this.ellipsoid(n,a,3.8,.75,0,.94,.39,.37),this.ellipsoid(n,a,4.55,.62,0,.85,.22,.23);const c=[],f=[],h=[];for(let _=0;_<=28;_++){const x=_/28,S=-2.25+x*4.3,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);if(c.push(S,.4,0,S,T,0),h.push(x,0,x,1),_<28){const M=_*2;f.push(M,M+1,M+2,M+1,M+3,M+2)}}const d=new hn;d.setAttribute("position",new we(c,3)),d.setAttribute("uv",new we(h,2)),d.setIndex(f),d.computeVertexNormals();const p=this.material(6705990,"skin");p.side=jn,n.add(new Te(d,p));for(let _=0;_<15;_++){const x=_/14,S=-2.2+x*4.2,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);n.add(this.tube([Xt(S,.6,.02),Xt(S-.1,T*.6,.02),Xt(S,T,.02)],[.045,.031,.012],a,8,5))}const g=new Cr({color:1382674,roughness:.3});for(const _ of[-1,1]){this.ellipsoid(n,g,3.51,.98,_*.326,.07,.07,.034);const x=new vn;x.position.set(-1.25,-.5,_*.58),x.add(this.tube([Xt(),Xt(-.2,-.85,_*.5),Xt(.15,-1.2,_*.6),Xt(-.45,-1.35,_*.76)],[.45,.29,.15,.03],a,24)),n.add(x),x.userData.side=_,x.userData.phase=1,l.push(x);const S=new vn;S.position.set(1.3,-.45,_*.55),S.add(this.tube([Xt(),Xt(.13,-.56,_*.4),Xt(.8,-.66,_*.5)],[.21,.12,.04],a,20)),n.add(S),S.userData.side=_,S.userData.phase=0,l.push(S)}const v=new vn;return v.position.x=-1.8,v.add(this.tube([Xt(),Xt(-1.7,0),Xt(-3.5,.08),Xt(-5.5,0)],[.7,.48,.27,.012],a,48)),n.add(v),n.scale.setScalar(t),{group:n,fins:l,tail:v,kind:"spinosaur",scale:t}}ammonite(){const t=new vn,n=this.material(12101252,"plain",.65),a=[],l=[],c=100;for(let v=0;v<=c;v++){const _=v/c,x=_*zi*2.3,S=.06+Math.pow(_,1.65)*.85;a.push(Xt(Math.cos(x)*S,Math.sin(x)*S,0)),l.push(.015+Math.pow(_,1.6)*.24)}t.add(this.tube(a,l,n,150,12));const f=a[a.length-1],h=this.material(9600610);for(let v=0;v<7;v++){const _=v/7*zi;t.add(this.tube([f.clone(),f.clone().add(Xt(.45,Math.sin(_)*.16,Math.cos(_)*.16)),f.clone().add(Xt(.9,Math.sin(_)*.35,Math.cos(_)*.3)),f.clone().add(Xt(1.02,Math.sin(_)*.24,Math.cos(_)*.3))],[.037,.033,.021,.001],h,16,5))}const d=this.material(7826774);for(let v=30;v<c;v+=3){const _=a[v],x=l[v]*1.025,S=new Te(new mu(x,.008,4,12),d);S.position.copy(_);const T=a[Math.min(v+1,c)].clone().sub(a[Math.max(0,v-1)]).normalize();S.quaternion.setFromUnitVectors(Xt(0,0,1),T),t.add(S)}const p=new vn,g=new Map;for(const v of t.children){const _=v;_.updateMatrix();const x=_.geometry.clone().applyMatrix4(_.matrix),S=_.material;g.has(S)||g.set(S,[]),g.get(S).push(x)}for(const[v,_]of g){const x=su(_);x&&p.add(new Te(x,v)),_.forEach(S=>S.dispose())}return t.children.forEach(v=>v.geometry.dispose()),p}life(){const t=(h,d,p,g,v)=>{const _={...h,center:d,radius:p,speed:g,phase:v};this.creatures.push(_),this.scene.add(_.group)};t(this.plesiosaur(1.15),Xt(28,7,-8),28,.017,Math.PI*.72),t(this.plesiosaur(.78),Xt(-48,12,-108),38,.014,1.8),t(this.ichthyosaur(.9),Xt(30,2,-58),38,.06,.8),t(this.ichthyosaur(.67),Xt(26,5,-62),38,.06,.96),t(this.spinosaurus(1.2),Xt(-22,21,-45),48,.012,-.5),t(this.plesiosaur(1.35),Xt(55,-2,-180),40,.015,2.5),t(this.ichthyosaur(1.1),Xt(-80,4,28),48,.048,.5);const n=this.ammonite();for(let h=0;h<13;h++){const d=h===0?n:n.clone(),p=oe(-42,42),g=oe(-110,22);d.position.set(p,Rr(p,g)+oe(3,8),g),d.rotation.set(oe(-.2,.2),oe(0,zi),oe(-.1,.1)),d.scale.setScalar(oe(.55,1.1)),d.userData.origin=d.position.clone(),d.userData.phase=ou()*zi,d.userData.ammonite=!0,this.scene.add(d)}const a=new dl(1,10,6);a.scale(.5,.16,.09);const l=new fp(.23,.35,3);l.rotateZ(Math.PI/2),l.scale(1,1,.25),l.translate(-.53,0,0);const c=su([a,l]);this.fish=new Rv(c,this.material(10268315,"plain",.45),350),this.scene.add(this.fish);const f=[Xt(-14,5,-31),Xt(38,11,-35),Xt(0,16,-90),Xt(-48,1,-120),Xt(30,-3,25)];for(let h=0;h<350;h++)this.fishData.push({center:f[h%5].clone().add(Xt(oe(-6,6),oe(-3,3),oe(-6,6))),phase:oe(0,zi),radius:oe(3,8),speed:oe(.11,.2),size:oe(.35,1.05)})}suspendedParticles(){const n=new Float32Array(5400);for(let c=0;c<1800;c++)n[c*3]=oe(-110,110),n[c*3+1]=oe(-16,26),n[c*3+2]=oe(-110,110);const a=new hn;a.setAttribute("position",new li(n,3));const l=new _n({uniforms:{uTime:this.uniforms.uTime,uPixelRatio:{value:this.renderer.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Or,vertexShader:"uniform float uTime;uniform float uPixelRatio;varying float a;void main(){vec3 p=position;p.x+=sin(uTime*.14+position.z)*.22;p.y+=sin(uTime*.18+position.x)*.25;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));}"});this.particles=new HS(a,l),this.scene.add(this.particles)}bind(){const t=(a,l,c)=>{a.addEventListener(l,c),this.listeners.push(()=>a.removeEventListener(l,c))};t(window,"keydown",(a=>{this.playing&&(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","ControlLeft"].includes(a.code)&&(a.preventDefault(),this.keys.add(a.code)),a.code==="Escape"&&this.pause(),a.code==="KeyH"&&!a.repeat&&this.hooks.onToggleUI(),a.code==="KeyG"&&!a.repeat&&(this.setGlide(!this.glide),this.hooks.onGlide(this.glide)))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>{this.keys.clear(),this.playing&&this.pause()})),t(document,"visibilitychange",(()=>{document.hidden&&this.playing&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing&&(this.dragging=!0,this.lastPointer={x:a.clientX,y:a.clientY},n.setPointerCapture(a.pointerId),a.pointerType==="mouse"&&document.pointerLockElement!==n))try{const l=n.requestPointerLock?.();l&&typeof l.catch=="function"&&l.catch(()=>{})}catch{}})),t(n,"pointerup",(()=>{this.dragging=!1})),t(n,"pointercancel",(()=>{this.dragging=!1})),t(document,"pointermove",(a=>{if(!this.playing)return;const l=document.pointerLockElement===n;if(!l&&!this.dragging)return;const c=l?a.movementX:a.clientX-this.lastPointer.x,f=l?a.movementY:a.clientY-this.lastPointer.y;this.targetYaw-=c*.0021,this.targetPitch=Ms(this.targetPitch-f*.0021,-1.47,1.47),this.lastPointer={x:a.clientX,y:a.clientY}})),t(document,"pointerlockchange",(()=>{!document.pointerLockElement&&this.playing&&!this.dragging&&this.pause()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.pause(),this.hooks.onError("The graphics connection was interrupted. Refresh to return to the ocean.")}))}start(){if(this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.initAudio(),this.sound&&this.audioContext?.resume().catch(()=>{}),window.matchMedia("(pointer:fine)").matches)try{const t=this.renderer.domElement.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}pause(){this.playing&&(this.playing=!1,this.glide=!1,this.keys.clear(),this.touch={x:0,y:0,z:0},this.velocity.set(0,0,0),this.dragging=!1,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.hooks.onPause())}reset(){this.position.set(0,3,35),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=-.1,this.velocity.set(0,0,0),this.glide=!1,this.time=0}setGlide(t){this.glide=t}touchMove(t,n){this.touch.x=Ms(t,-1,1),this.touch.y=Ms(n,-1,1)}touchVertical(t){this.touch.z=t}setSound(t){this.sound=t,this.master&&this.audioContext&&this.master.gain.setTargetAtTime(t?.35:0,this.audioContext.currentTime,.3),t&&this.playing&&this.audioContext?.resume().catch(()=>{})}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.35:0,this.master.connect(n.destination);const a=n.createBuffer(2,n.sampleRate*8,n.sampleRate);for(let v=0;v<2;v++){let _=0;const x=a.getChannelData(v);for(let S=0;S<x.length;S++)_=(_+(Math.random()*2-1)*.03)/1.018,x[S]=_*4}const l=n.createBufferSource();l.buffer=a,l.loop=!0;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.45;const f=n.createGain();f.gain.value=.42,l.connect(c),c.connect(f),f.connect(this.master),l.start();const h=n.createOscillator(),d=n.createGain();h.frequency.value=.07,d.gain.value=160,h.connect(d),d.connect(c.frequency),h.start();const p=n.createOscillator(),g=n.createGain();p.type="sine",p.frequency.value=47,g.gain.value=.055,p.connect(g),g.connect(this.master),p.start()}catch{}}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);(this.playing||!this.started)&&(this.time+=t);const n=this.time;if(this.uniforms.uTime.value=n,this.playing){const f=(...v)=>v.some(_=>this.keys.has(_))?1:0;this.yaw=Ya.lerp(this.yaw,this.targetYaw,1-Math.exp(-14*t)),this.pitch=Ya.lerp(this.pitch,this.targetPitch,1-Math.exp(-14*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize();const h=f("KeyW","ArrowUp")-f("KeyS","ArrowDown")+(this.glide?.52:0)+this.touch.y,d=f("KeyD","ArrowRight")-f("KeyA","ArrowLeft")+this.touch.x,p=f("KeyE","Space")-f("KeyQ","ControlLeft")+this.touch.z;this.move.copy(this.forward).multiplyScalar(h).addScaledVector(this.right,d),this.move.y+=p,this.move.lengthSq()>1&&this.move.normalize();const g=f("ShiftLeft","ShiftRight")?8.2:3.8;this.move.multiplyScalar(g),this.velocity.lerp(this.move,1-Math.exp(-2.1*t)),this.position.addScaledVector(this.velocity,t),this.position.x=Ms(this.position.x,-245,245),this.position.z=Ms(this.position.z,-265,245),this.position.y=Ms(this.position.y,Rr(this.position.x,this.position.z)+1.8,24.2);for(const v of this.colliders){if(Math.abs(this.position.y-v.pos.y)>v.height+1)continue;const _=this.position.x-v.pos.x,x=this.position.z-v.pos.z,S=Math.sqrt(_*_+x*x);if(S<v.radius+.85&&S>.001){const T=v.radius+.85-S;this.position.x+=_/S*T,this.position.z+=x/S*T}}this.camera.position.copy(this.position),this.reduced||(this.camera.position.y+=Math.sin(n*.9)*.026)}else!this.started&&!this.reduced&&this.camera.rotation.set(-.09+Math.sin(n*.1)*.018,Math.sin(n*.08)*.025,0);for(const f of this.creatures){const h=n*f.speed+f.phase,d=f.center.x+Math.cos(h)*f.radius,p=f.center.z+Math.sin(h)*f.radius*.58;f.group.position.set(d,f.center.y+Math.sin(n*.3+f.phase)*.35,p),f.group.rotation.y=Math.atan2(-Math.cos(h)*.58,-Math.sin(h)),f.group.rotation.z=Math.sin(n*.3+f.phase)*.025,f.fins.forEach(g=>{g.rotation.x=Math.sin(n*1.25+(g.userData.phase||0)+f.phase)*.22*(g.userData.side||1),g.rotation.z=Math.sin(n*1.25+(g.userData.phase||0)+f.phase+.7)*.07}),f.tail.rotation.y=Math.sin(n*(f.kind==="ichthyosaur"?3:1.3)+f.phase)*(f.kind==="ichthyosaur"?.22:.11)}for(let f=0;f<this.fishData.length;f++){const h=this.fishData[f],d=n*h.speed+h.phase;this.dummy.position.set(h.center.x+Math.cos(d)*h.radius,h.center.y+Math.sin(d*2)*.7,h.center.z+Math.sin(d)*h.radius*.5),this.dummy.rotation.set(0,Math.atan2(-Math.cos(d)*.5,-Math.sin(d)),Math.cos(d*2)*.035),this.dummy.scale.set(h.size,h.size,h.size),this.dummy.updateMatrix(),this.fish.setMatrixAt(f,this.dummy.matrix)}this.fish.instanceMatrix.needsUpdate=!0;for(const f of this.scene.children)f.userData.ammonite&&(f.position.y=f.userData.origin.y+Math.sin(n*.28+f.userData.phase)*.35,f.rotation.z=Math.sin(n*.23+f.userData.phase)*.09);this.particles.position.set(Math.floor(this.position.x/80)*80,0,Math.floor(this.position.z/80)*80);const a=this.scene.fog,l=Ms((-this.position.z-75)/160,0,1);a.density=.013+l*.006;const c=new le(742243).lerp(new le(404547),l*.75);a.color.copy(c),this.scene.background.copy(c),n-this.statusAt>.25&&(this.statusAt=n,this.hooks.onStatus(26-this.position.y,this.position.z<-130?"The blue beyond":this.position.z<-65?"The ancient reef":Math.abs(this.position.x)>40?"The underwater forest":"The sunlit shallows")),this.renderer.render(this.scene,this.camera)};dispose(){this.alive=!1,cancelAnimationFrame(this.frame),this.listeners.forEach(a=>a()),this.observer?.disconnect(),this.audioContext?.close().catch(()=>{});const t=new Set,n=new Set;this.scene.traverse(a=>{const l=a;l.geometry&&t.add(l.geometry),l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(f=>n.add(f))}),t.forEach(a=>a.dispose()),n.forEach(a=>a.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}}function WA(r,t){const a=r.createBuffer(1,Math.round(r.sampleRate*4.545454545454546),r.sampleRate),l=a.getChannelData(0);for(let p=0;p<l.length;p++){const g=p/r.sampleRate,v=g<1.4?Math.sin(Math.PI*g/1.4)**2*.41:0,_=g>=1.9&&g<3.8?Math.sin(Math.PI*(g-1.9)/1.9)**2*.3:0;l[p]=(Math.random()*2-1)*(v+_)}const c=r.createBufferSource();c.buffer=a,c.loop=!0;const f=r.createBiquadFilter();f.type="lowpass",f.frequency.value=1800;const h=r.createBiquadFilter();h.type="highpass",h.frequency.value=180,c.connect(f).connect(h).connect(t);const d=r.createAnalyser();return d.fftSize=2048,t.connect(d).connect(r.destination),c.start(),d}function qA(r,t){for(const[n,a]of[[0,660],[.2,880]]){const l=r.createOscillator(),c=r.createGain(),f=r.currentTime+n;l.frequency.value=a,c.gain.setValueAtTime(0,f),c.gain.linearRampToValueAtTime(.18,f+.015),c.gain.exponentialRampToValueAtTime(.001,f+.18),l.connect(c).connect(t),l.start(f),l.stop(f+.2),l.onended=()=>{l.disconnect(),c.disconnect()}}}function YA(r,t){const n=r.currentTime,a=.028,l=r.createBuffer(1,Math.max(1,Math.round(r.sampleRate*a)),r.sampleRate),c=l.getChannelData(0);for(let v=0;v<c.length;v++)c[v]=Math.random()*2-1;const f=r.createBufferSource();f.buffer=l;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=2800,h.Q.value=1.1;const d=r.createGain();d.gain.setValueAtTime(.72,n),d.gain.exponentialRampToValueAtTime(.001,n+a),f.connect(h).connect(d).connect(t),f.start(n),f.stop(n+a),f.onended=()=>{f.disconnect(),h.disconnect(),d.disconnect()};const p=r.createOscillator(),g=r.createGain();p.type="square",p.frequency.value=1650,g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(.28,n+.001),g.gain.exponentialRampToValueAtTime(.001,n+.018),p.connect(g).connect(t),p.start(n),p.stop(n+.022),p.onended=()=>{p.disconnect(),g.disconnect()}}const jA=""+new URL("underwater-ambience-CTuF1-BE.mp3",import.meta.url).href;class ZA{constructor(t,n){this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0,this.gain.connect(n)}buffer=null;loading=null;source=null;gain;generation=0;disposed=!1;abort=new AbortController;async start(){if(this.disposed||this.source)return;const t=this.generation;if(this.buffer||(this.loading??=fetch(jA,{signal:this.abort.signal}).then(a=>{if(!a.ok)throw new Error(`Music download failed: ${a.status}`);return a.arrayBuffer()}).then(a=>this.ctx.decodeAudioData(a)).catch(a=>{throw this.loading=null,a}),this.buffer=await this.loading),this.disposed||t!==this.generation||this.source||this.ctx.state==="closed")return;const n=this.ctx.createBufferSource();n.buffer=this.buffer,n.loop=!0,n.connect(this.gain),this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.65,this.ctx.currentTime+1.5),n.start(),this.source=n}reset(){this.generation++,this.source?.stop(),this.source?.disconnect(),this.source=null}dispose(){this.disposed=!0,this.abort.abort(),this.reset(),this.gain.disconnect()}}const Gi=4,KA={x:0,y:3,z:-12},Kd={x:0,y:2,z:-112},rl={x:32,y:3,z:-12},Z_={stone:{name:"Limestone",short:"Stone",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},wood:{name:"Driftwood",short:"Wood",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},flare:{name:"Signal flare",short:"Flare",description:"R · Deploy a 12-second distraction at your position.",hint:"R use · consumed"},air:{name:"Air reserve",short:"Air",description:"R · Restore up to 60 seconds of air (consumed).",hint:"R use · consumed"},bandage:{name:"Sealant kit",short:"Sealant",description:"R · Repair 45 suit integrity (consumed).",hint:"R use · consumed"},relic:{name:"Ammonite relic",short:"Relic",description:"Cannot use here — carry to the extraction pool.",hint:"Carry to extract · do not drop"}},kr=new Set,Ka=(r,t,n,a)=>{for(let l=r;l<=t;l++)for(let c=n;c<=a;c++)kr.add(`${l},${c}`)};Ka(8,14,1,5);Ka(10,12,5,11);Ka(4,18,11,24);Ka(10,12,24,26);Ka(8,14,26,30);for(let r=9;r<=12;r++)for(let t=15;t<=20;t++)kr.delete(`${r},${t}`);Ka(19,19,4,20);Ka(18,19,20,21);Ka(17,21,1,4);const Xa=(r,t)=>({x:(r-11)*Gi,y:3,z:-t*Gi}),Ur=r=>({col:Math.round(r.x/Gi)+11,row:Math.round(-r.z/Gi)}),si=(r,t)=>Math.hypot(r.x-t.x,r.y-t.y,r.z-t.z);function Qd(r,t){return kr.has(`${Math.round(r/Gi)+11},${Math.round(-t/Gi)}`)}function QA(r,t=.48){if(r.y<.65||r.y>7.1)return!1;for(let n=0;n<8;n++)if(!Qd(r.x+Math.cos(n*Math.PI/4)*t,r.z+Math.sin(n*Math.PI/4)*t))return!1;return Qd(r.x,r.z)}function K_(r,t,n,a,l=.48){const c=Math.max(1,Math.ceil(Math.hypot(t,n,a)/.25));for(let f=0;f<c;f++)for(const[h,d]of[["x",t],["y",n],["z",a]]){const p={...r,[h]:r[h]+d/c};QA(p,l)&&(r[h]=p[h])}}function Qc(r,t){const n=Math.ceil(si(r,t)/.4);for(let a=0;a<=n;a++){const l=n?a/n:0;if(!Qd(r.x+(t.x-r.x)*l,r.z+(t.z-r.z)*l))return!1}return!0}function fu(r,t){return r>=4&&r<=18&&t>=12&&t<=28&&kr.has(`${r},${t}`)}function JA(r,t){const n=Ur(r),a=Ur(t),l=`${n.col},${n.row}`,c=`${a.col},${a.row}`;if(!fu(a.col,a.row))return[];const f=[l],h=new Map([[l,null]]);for(let g=0;g<f.length;g++){const v=f[g];if(v===c)break;const[_,x]=v.split(",").map(Number);for(const[S,T]of[[1,0],[-1,0],[0,1],[0,-1]]){const M=`${_+S},${x+T}`;fu(_+S,x+T)&&!h.has(M)&&(h.set(M,v),f.push(M))}}if(!h.has(c))return[];const d=[];let p=c;for(;p&&p!==l;){const[g,v]=p.split(",").map(Number);d.unshift(Xa(g,v)),p=h.get(p)}return d}const o_=.003,Jc=(r,t,n,a)=>({yaw:r-n*o_,pitch:Math.max(-1.4,Math.min(1.4,t-a*o_))}),$A=1.45;function l_(r,t){const n=Math.max(0,Math.min(1,(r-.65)/6.449999999999999)),a=Math.max(-1,Math.min(1,-t/1.4)),l=1-n,c=Math.max(0,-a),f=Math.max(0,a),h=(48+n*62)*(1+a*.18),d=(15+n*19)*(1+a*.12-c*.08),p=1.05+l*.5+c*.18-f*.06,g=(.006+n*.022)*(1+a*.28),v=.35+n*.55+a*.12,_=.55+n*.3-c*.12+f*.05,x=.62+n*.28-c*.05,S=.48+n*.42-c*.18+f*.12;return{intensity:h,distance:d,decay:p,beamOpacity:Math.max(.004,g),particle:Math.max(0,Math.min(1,v)),r:_,g:x,b:S}}function c_(r,t,n){if(n<=0)return 0;const l=(Math.max(0,Math.min(1,(r-t)/n))-.5)*2,c=.2,f=Math.abs(l);if(f<=c)return 0;const h=(f-c)/(1-c);return Math.sign(l)*h*h}const Q_="painted-abyss.inventoryTipsSeen";function u_(){try{return globalThis.localStorage?.getItem(Q_)==="1"}catch{return!1}}function t2(){try{globalThis.localStorage?.setItem(Q_,"1")}catch{}}class f_{position={...KA};health=100;air=240;elapsed=0;stamina=100;torch=!0;inventory=["stone","wood","flare","air","bandage"];selected=0;pickups=[{id:1,item:"relic",position:{...Kd}},{id:2,item:"flare",position:{x:-20,y:2,z:-56}}];nextId=3;pending=null;outcome="playing";reason="";tipsSeen=!1;notice="";noticeUntil=0;feedbackKind="";feedbackPulse=0;predator={position:Xa(16,19),state:"patrol",timer:0,lost:0,lastKnown:Xa(16,19),waypoint:0,bite:0,heading:0};decoy=null;patrol=[Xa(16,22),Xa(6,22),Xa(6,13),Xa(16,13)];constructor(t=!1){this.tipsSeen=t,t||(this.notice="1–5 select a slot · R uses it · usable items are consumed.",this.noticeUntil=8,this.feedbackKind="select")}get hasRelic(){return this.inventory.includes("relic")}say(t,n=""){this.notice=t,this.noticeUntil=this.elapsed+4.5,this.feedbackKind=n,this.feedbackPulse++}pulse(t=""){this.feedbackKind=t,this.feedbackPulse++}select(t){return this.outcome!=="playing"||t<0||t>4||this.selected===t?!1:(this.selected=t,this.pulse(this.inventory[t]?"select":"blocked"),!0)}nearest(){return this.pickups.filter(t=>si(t.position,this.position)<3.2&&Qc(this.position,t.position)).sort((t,n)=>si(t.position,this.position)-si(n.position,this.position))[0]}interact(){if(this.outcome!=="playing")return;if(si(this.position,rl)<4){this.hasRelic?(this.outcome="won",this.reason="Relic secured. You made it back to the light."):this.say("Extraction needs the ammonite relic. Follow the turquoise markers.","blocked");return}const t=this.pending===null?this.nearest():this.pickups.find(l=>l.id===this.pending);if(!t||si(t.position,this.position)>3.2||!Qc(this.position,t.position)){this.pending=null;return}let n=this.inventory.indexOf(null);if(n<0&&this.pending===null){this.pending=t.id,this.say("All five slots are full. Choose 1–5, then E to swap.","blocked");return}n<0&&(n=this.selected);const a=this.inventory[n];this.inventory[n]=t.item,this.selected=n,this.pickups=this.pickups.filter(l=>l.id!==t.id),a&&this.pickups.push({id:this.nextId++,item:a,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.pending=null,this.say(t.item==="relic"?"Relic recovered! Follow the amber markers to extraction.":`${Z_[t.item].name} collected.`,"ok"),t.item==="relic"&&(this.predator.state="alert",this.predator.timer=0,this.predator.lastKnown={...this.position})}drop(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}this.pickups.push({id:this.nextId++,item:t,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok")}use(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}if(t==="air"){if(this.air>=240){this.pulse("blocked");return}this.air=Math.min(240,this.air+60),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="bandage"){if(this.health>=100){this.pulse("blocked");return}this.health=Math.min(100,this.health+45),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="flare"){this.decoy={position:{...this.position},until:this.elapsed+12},this.predator.state="search",this.predator.timer=0,this.predator.lastKnown={...this.position},this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}this.pulse("blocked")}update(t,n=!1){if(this.outcome!=="playing")return;if(t=Math.min(t,.05),this.elapsed+=t,this.air=Math.max(0,this.air-t),this.stamina=Math.max(0,Math.min(100,this.stamina+(n?-18:17)*t)),this.air<=0){this.outcome="lost",this.reason="Your air ran out. Use the reserve earlier or take a shorter route.";return}this.pending!==null&&!this.pickups.some(T=>T.id===this.pending&&si(T.position,this.position)<3.2)&&(this.pending=null);const a=this.predator,l=si(a.position,this.position),c=Qc(a.position,this.position),f=c&&(l<4.5||l<(this.torch?16:n?13:8)),h=!fu(Ur(this.position).col,Ur(this.position).row);a.timer+=t,a.bite=Math.max(0,a.bite-t),this.decoy&&this.elapsed>=this.decoy.until&&(this.decoy=null),this.decoy&&l>4.5?(a.state="search",a.timer=0,a.lastKnown={...this.decoy.position}):a.state==="patrol"&&f&&!h?(a.state="alert",a.timer=0,a.lastKnown={...this.position}):a.state==="alert"?(f&&!h&&(a.lastKnown={...this.position}),a.timer>1.6&&(a.state=f&&!h?"chase":"search",a.timer=0,a.lost=0)):a.state==="chase"?(f&&!h?(a.lastKnown={...this.position},a.lost=0):a.lost+=t,a.lost>2.5&&(a.state="search",a.timer=0)):a.state==="search"&&(f&&!h?(a.state="chase",a.timer=0,a.lost=0):a.timer>7&&(a.state="patrol",a.timer=0));const d=a.state==="patrol"?this.patrol[a.waypoint]:a.lastKnown;a.state==="patrol"&&si(a.position,d)<1.1&&(a.waypoint=(a.waypoint+1)%this.patrol.length);const g=JA(a.position,d)[0]||(Qc(a.position,d)&&fu(Ur(d).col,Ur(d).row)?d:a.position),v=g.x-a.position.x,_=g.z-a.position.z,x=Math.hypot(v,_),S=a.state==="chase"?3.4:a.state==="alert"?.7:1.8;x>.05&&(a.heading=Math.atan2(-_,v),K_(a.position,v/x*Math.min(x,S*t),0,_/x*Math.min(x,S*t),1.3)),a.position.y+=((a.state==="chase"?Math.max(1.2,Math.min(6.2,this.position.y)):3)-a.position.y)*Math.min(1,t*2),a.state==="chase"&&!h&&c&&si(a.position,this.position)<3.2&&a.bite<=0&&(this.health=Math.max(0,this.health-25),a.bite=1.7,this.say("Suit breached! Sprint to cover or deploy a flare."),this.health<=0&&(this.outcome="lost",this.reason="The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe."))}}const $c=(r=0,t=0,n=0)=>new W(r,t,n),e2="varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",n2=`varying vec2 vUv;varying vec3 wPos;uniform float uTime;uniform vec3 uColor;uniform float uOpacity;
void main(){
  float edge=pow(max(0.,sin(vUv.x*3.14159)),2.4);
  float vertical=pow(sin(vUv.y*3.14159),.55);
  float pulse=.82+sin(wPos.x*.11+wPos.z*.09+uTime*.19)*.14;
  float core=pow(max(0.,1.-abs(vUv.x-.5)*2.4),3.2)*.55;
  float a=(edge*vertical*pulse+core*vertical)*uOpacity;
  gl_FragColor=vec4(uColor,a);
}`;class i2 extends XA{audioNotice="";audioProbe=null;audioTestTimer=0;backgroundMusic=null;mission=new f_(u_());ui;error="";pointerLocked=!1;everLocked=!1;lastSent=0;fallbackTurn=0;lockDenied=!1;lookPointer=null;torchLight=new qc(15398655,210,34,.38,.55,1.05);torchFill=new el(13625599,4.5,7,1.6);beam;beamHalo;torchBody;composer;bloom;guardian;pickupMeshes=new Map;decoyMesh;constructor(t,n){super(t,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:!0}),this.ui=n,this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.pitch=this.targetPitch=0,this.scene.background=new le(268834),this.scene.fog=new pu(667192,.038),this.camera.far=130,this.camera.fov=64,this.camera.updateProjectionMatrix(),this.renderer.toneMappingExposure=1.12,this.renderer.toneMapping=hu,this.scene.add(new V_(5938862,530464,.42)),this.scene.add(new ZS(1194048,.22));const a=new jd(8308948,.55);a.position.set(-8,30,-20),this.scene.add(a),this.buildCave(),this.buildLights(),this.buildComposer(),this.guardian=this.ichthyosaur(.9),this.scene.add(this.guardian.group);const l=new qa({color:14722930});for(const h of[-1,1])this.ellipsoid(this.guardian.group,l,1.8,.27,h*.5,.1,.1,.04);this.suspendedParticles();const c=this.particles.geometry.attributes.position;for(let h=0;h<c.count;h++)c.setXYZ(h,Math.sin(h*78.23)*37,1+h%71/10,-(h*13.23)%122);this.particles.geometry.computeBoundingSphere();const f=this.particles.material;f.uniforms.uTorch={value:1},f.vertexShader=`uniform float uTorch;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;","float cone=1.-smoothstep(.22,.52,length(mv.xy)/max(.08,-mv.z));gl_PointSize=clamp((28.+cone*42.*uTorch)/-mv.z,1.2,5.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/28.,0.,1.)*(.04+cone*.55*uTorch);"),f.fragmentShader=f.fragmentShader.replace("gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));","gl_FragColor=vec4(.78,.92,.96,a*smoothstep(.5,.0,d));"),this.decoyMesh=new Te(new Pr(.18,1),new qa({color:16740416})),this.decoyMesh.add(new el(16738353,12,12)),this.scene.add(this.decoyMesh),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.syncPickups(),this.animate(),this.publish()}buildCave(){const t=this.material(8029300,"sand",.88,3.4),n=this.material(5596778,"rock",.86,1.6),a=this.material(3820626,"rock",.9,.6),l=[],c=[],f=[],h=[];for(const g of kr){const[v,_]=g.split(",").map(Number),x=Xa(v,_),S=new Cs(Gi,Gi,2,2);if(S.rotateX(-Math.PI/2),S.translate(x.x,0,x.z),l.push(S),!(v===19&&_===3)){const T=S.clone();T.rotateZ(Math.PI),T.translate(x.x*2,8,0),c.push(T)}for(const[T,M]of[[1,0],[-1,0],[0,1],[0,-1]])if(!kr.has(`${v+T},${_+M}`)){const y=new Zr(T?1:Gi+.05,8.5,M?1:Gi+.05);y.translate(x.x+T*2.5,4,x.z-M*2.5),f.push(y);for(let U=0;U<3;U++){const L=new Pr(1,1);L.scale(T?.7:1.7,1.3+U%2*.5,M?.7:1.7),L.translate(x.x+T*2.45,1.3+U*2.5,x.z-M*2.45),h.push(L)}}}for(const[g,v]of[[l,t],[c,a],[f,n],[h,n]]){const _=su(g);_&&this.scene.add(new Te(_,v)),g.forEach(x=>x.dispose())}const d=this.material(10459770,"rock",.82,1.5);for(let g=0;g<6;g++)for(const v of[-1,1])this.scene.add(this.tube([$c(-3+g*.75,.25,-113),$c(-3+g*.75,1.3,-113+v*1.2),$c(-3+g*.75,.3,-113+v*2.2)],[.12,.09,.025],d,12,5));const p=new Te(new bi(1.1,1.5,1.2,7),n);p.position.set(Kd.x,.6,Kd.z),this.scene.add(p)}beamMaterial(t,n){return new _n({uniforms:{uTime:this.uniforms.uTime,uColor:{value:new le(t)},uOpacity:{value:n}},transparent:!0,depthWrite:!1,side:jn,blending:Or,vertexShader:e2,fragmentShader:n2})}addShaft(t,n,a,l,c,f,h,d,p=0,g=0){const v=new Te(new bi(c,f,l,28,1,!0),this.beamMaterial(h,d));return v.position.set(t,n,a),v.rotation.x=p,v.rotation.z=g,this.scene.add(v),v}buildLights(){this.scene.add(this.camera),this.torchLight.color.set(15792127),this.torchLight.intensity=160,this.torchLight.distance=32,this.torchLight.angle=.36,this.torchLight.penumbra=.48,this.torchLight.decay=1.2,this.torchLight.position.set(.32,-.22,-.15),this.torchLight.target.position.set(.12,-.28,-16),this.torchFill.color.set(14215412),this.torchFill.intensity=4,this.torchFill.distance=7,this.torchFill.position.set(.2,-.15,-.4),this.camera.add(this.torchLight,this.torchLight.target,this.torchFill);const t=new bi(.03,4.2,19,32,1,!0);t.rotateX(Math.PI/2),this.beam=new Te(t,this.beamMaterial(13691125,.11)),this.beam.position.set(.28,-.26,-9.2),this.camera.add(this.beam);const n=new bi(.08,6.2,17,32,1,!0);n.rotateX(Math.PI/2),this.beamHalo=new Te(n,this.beamMaterial(11062752,.045)),this.beamHalo.position.set(.28,-.26,-8.4),this.camera.add(this.beamHalo),this.torchBody=new vn;const a=new Cr({color:1711650,metalness:.75,roughness:.35}),l=new qa({color:14216952}),c=new Te(new bi(.055,.07,.55,12),a);c.rotation.x=Math.PI/2,c.position.set(0,0,-.2);const f=new Te(new bi(.09,.07,.12,12),a);f.rotation.x=Math.PI/2,f.position.set(0,0,-.52);const h=new Te(new up(.065,16),l);h.position.set(0,0,-.585),this.torchBody.add(c,f,h),this.torchBody.position.set(.38,-.32,-.55),this.torchBody.rotation.set(.12,-.08,.18),this.camera.add(this.torchBody);const d=(T,M,y)=>{const U=new Te(new dl(.1,8,6),new qa({color:y}));U.position.set(T,.55,M),U.add(new el(y,.85,5.5,1.5)),this.scene.add(U)};for(const[T,M]of[[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])d(T,M,5952708);for(const[T,M]of[[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])d(T,M,14723160);const p=new vn;p.position.set(rl.x,.65,rl.z);const g=new Te(new mu(1.6,.05,8,48),new qa({color:12189660}));g.rotation.x=Math.PI/2,p.add(g),this.scene.add(p);const v=new qc(13826292,420,24,.72,.8,1);v.position.set(32,12,-12),v.target.position.set(32,0,-12),this.scene.add(v,v.target);const _=new el(11071720,28,16,1.1);_.position.set(32,5,-12),this.scene.add(_),this.addShaft(32,5.2,-12,9,.7,2.8,14220020,.22),this.addShaft(31.2,5.5,-11.2,8.5,.4,1.8,12645098,.14,.08,-.05),this.addShaft(33,5,-12.8,8.2,.35,1.6,13169902,.12,-.06,.07);const x=[[2,6.2,-52,9,.5,2.4,.16],[-3,6.4,-58,8.5,.4,2.1,.13],[6,6,-64,9.5,.55,2.6,.15],[-8,6.3,-72,8,.35,1.9,.11],[4,6.5,-78,9,.45,2.3,.14],[-2,6.1,-86,8.5,.4,2,.12],[0,6.4,-96,8,.35,1.8,.1],[10,6.2,-70,7.5,.3,1.6,.09]];for(const[T,M,y,U,L,C,P]of x){this.addShaft(T,M,y,U,L,C,12119012,P,(Math.random()-.5)*.12,(Math.random()-.5)*.1);const O=new qc(11594980,55+P*500,15,.5,.85,1.15);O.position.set(T,8.2,y),O.target.position.set(T,0,y),this.scene.add(O,O.target)}this.addShaft(0,6.3,-22,8,.45,2.2,11067608,.1);const S=new qc(11068636,70,13,.48,.8,1.1);S.position.set(0,8.5,-22),S.target.position.set(0,0,-22),this.scene.add(S,S.target),this.addShaft(0,5.8,-110,7.5,.3,1.5,12899504,.08)}buildComposer(){const t=this.host.clientWidth,n=this.host.clientHeight;this.composer=new FA(this.renderer),this.composer.addPass(new HA(this.scene,this.camera)),this.bloom=new Vr(new ae(t,n),.18,.65,.92),this.composer.addPass(this.bloom),this.composer.addPass(new VA)}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer?.setSize(t,n),this.bloom?.resolution.set(t,n)}syncPickups(){for(const[t,n]of this.pickupMeshes)this.mission.pickups.some(a=>a.id===t)||(this.scene.remove(n),n.traverse(a=>{a instanceof Te&&(a.geometry.dispose(),a.material.dispose())}),this.pickupMeshes.delete(t));for(const t of this.mission.pickups){let n=this.pickupMeshes.get(t.id);if(!n){n=new vn;const a=new Cr({color:t.item==="relic"?14857822:8571063,emissive:t.item==="relic"?7027719:1391670,emissiveIntensity:.7,metalness:.4,roughness:.45});if(t.item==="relic"){const l=[],c=[];for(let f=0;f<=72;f++){const h=f/72,d=h*Math.PI*4.5,p=.03+h*h*.62;l.push($c(Math.cos(d)*p,Math.sin(d)*p,0)),c.push(.01+h*.12)}n.add(this.tube(l,c,a,90,8)),n.add(new el(15711080,3.5,7))}else n.add(new Te(new Pr(.3,1),a));this.scene.add(n),this.pickupMeshes.set(t.id,n)}n.position.set(t.position.x,t.position.y+Math.sin(this.time*1.7+t.id)*.12,t.position.z),n.rotation.y=this.time*.45}}publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice,yaw:this.yaw})}bind(){const t=(a,l,c,f)=>{a.addEventListener(l,c,f),this.listeners.push(()=>a.removeEventListener(l,c,f))};t(window,"keydown",(a=>{this.playing&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(a.code)&&a.preventDefault(),this.keys.add(a.code),!a.repeat&&(a.code==="Escape"&&(this.mission.pending!==null?(this.mission.pending=null,this.publish()):this.pause()),/^Digit[1-5]$/.test(a.code)&&this.mission.select(Number(a.code.slice(-1))-1)&&this.playSelectClick(),a.code==="KeyE"&&this.mission.interact(),a.code==="KeyF"&&(this.mission.torch=!this.mission.torch),a.code==="KeyR"&&this.mission.use(),a.code==="KeyG"&&this.mission.drop(),a.code==="KeyM"&&this.setSound(!this.sound),this.publish()))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>this.pause())),t(document,"visibilitychange",(()=>{document.hidden&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing){try{n.setPointerCapture(a.pointerId)}catch{}document.pointerLockElement!==n&&this.requestLookLock(!1)}})),t(document,"pointermove",(a=>{if(!this.playing)return;if(document.pointerLockElement===n){this.lookPointer=null,this.fallbackTurn=0;const d=Jc(this.targetYaw,this.targetPitch,a.movementX,a.movementY);this.targetYaw=d.yaw,this.targetPitch=d.pitch;return}const c=n.getBoundingClientRect();if(a.clientX<c.left||a.clientX>c.right||a.clientY<c.top||a.clientY>c.bottom){this.lookPointer=null,this.fallbackTurn=0;return}this.lookPointer={x:a.clientX,y:a.clientY},this.fallbackTurn=c_(a.clientX,c.left,c.width);const f=this.fallbackTurn!==0?0:a.movementX,h=Jc(this.targetYaw,this.targetPitch,f,a.movementY);this.targetYaw=h.yaw,this.targetPitch=h.pitch})),t(window,"mouseout",(a=>{a.relatedTarget||(this.lookPointer=null,this.fallbackTurn=0)})),t(n,"wheel",(a=>{if(!this.playing)return;a.preventDefault();const l=a.deltaMode===1?16:a.deltaMode===2?200:1,c=Jc(this.targetYaw,this.targetPitch,a.deltaX*l,a.deltaY*l);this.targetYaw=c.yaw,this.targetPitch=c.pitch}),{passive:!1}),t(document,"pointerlockchange",(()=>{const a=this.pointerLocked;this.pointerLocked=document.pointerLockElement===n,this.pointerLocked&&(this.everLocked=!0,this.lockDenied=!1,this.lookPointer=null,this.fallbackTurn=0),a&&!this.pointerLocked&&this.pause(),this.publish()})),t(document,"pointerlockerror",(()=>{this.lockDenied=!0,this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.error="The graphics connection was lost. Reload the page to restart the dive.",this.pause(),this.publish()}))}requestLookLock(t=!0){if(!this.playing||document.pointerLockElement===this.renderer.domElement)return;const n=()=>{this.lockDenied=!0,t&&(this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish())};try{this.renderer.domElement.requestPointerLock?.()?.catch(n)}catch{n()}}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.7:0,this.audioProbe=WA(n,this.master),this.backgroundMusic=new ZA(n,this.master),n.onstatechange=()=>{this.alive&&(this.playing&&this.sound&&n.state!=="running"&&(this.audioNotice="Sound interrupted. Pause and choose Test sound."),this.publish())}}catch{this.audioContext?.close().catch(()=>{}),this.audioContext=null,this.master=null,this.audioNotice="Audio could not start in this browser. Try Test sound or open the game in Chrome."}}enableAudio(t=!1){window.clearTimeout(this.audioTestTimer),this.initAudio();const n=this.audioContext,a=this.master;if(!n||!a){this.publish();return}a.gain.setTargetAtTime(this.sound?.7:0,n.currentTime,.04),n.resume().then(()=>{if(this.alive){if(!this.playing&&!this.testingAudio){n.suspend().catch(()=>{});return}if(n.state!=="running"){this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish();return}this.audioNotice="",t&&this.sound&&(this.playing||this.testingAudio)&&qA(n,a),this.playing&&this.backgroundMusic?.start().catch(()=>{this.alive&&(this.audioNotice="Background music could not load. Pause and resume to retry.",this.publish())}),this.publish()}}).catch(()=>{this.alive&&(this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish())})}playSelectClick(){if(!this.playing||!this.sound)return;const t=this.audioContext,n=this.master;!t||!n||t.state!=="running"||YA(t,n)}testingAudio=!1;testSound(){this.sound=!0,this.testingAudio=!0,this.enableAudio(!0),this.audioTestTimer=window.setTimeout(()=>{this.testingAudio=!1,this.playing||this.audioContext?.suspend().catch(()=>{})},1500),this.publish()}setSound(t){this.sound=t,this.audioNotice="",t?this.playing?this.enableAudio():this.testSound():this.master&&this.audioContext&&this.master.gain.setTargetAtTime(0,this.audioContext.currentTime,.04),this.publish()}start(){this.mission.outcome!=="playing"&&this.reset(),this.mission.tipsSeen||t2(),this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.testingAudio=!1,this.sound&&this.enableAudio(!0),this.lookPointer=null,this.fallbackTurn=0,this.requestLookLock(!0),this.publish()}pause(){this.playing&&(this.testingAudio=!1,window.clearTimeout(this.audioTestTimer),this.playing=!1,this.lookPointer=null,this.fallbackTurn=0,this.keys.clear(),this.velocity.set(0,0,0),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.publish())}reset(){this.backgroundMusic?.reset(),this.mission=new f_(u_()),this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=0,this.lookPointer=null,this.fallbackTurn=0,this.lockDenied=!1,this.velocity.set(0,0,0),this.time=0,this.lastSent=0,this.keys.clear(),this.syncPickups(),this.publish()}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.playing){this.time+=t;const d=this.mission,p=(...x)=>x.some(S=>this.keys.has(S))?1:0;if(!this.pointerLocked&&this.lookPointer){const x=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=c_(this.lookPointer.x,x.left,x.width)}else!this.pointerLocked&&!this.lookPointer&&(this.fallbackTurn=0);const g=p("ArrowRight")-p("ArrowLeft")+(this.pointerLocked?0:this.fallbackTurn*$A),v=Jc(this.targetYaw,this.targetPitch,g*t*650,(p("ArrowDown")-p("ArrowUp"))*t*650);this.targetYaw=v.yaw,this.targetPitch=v.pitch,this.yaw=Ya.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*t)),this.pitch=Ya.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize(),this.move.copy(this.forward).multiplyScalar(p("KeyW")-p("KeyS")).addScaledVector(this.right,p("KeyD")-p("KeyA")),this.move.y+=p("Space")-p("KeyQ","ControlLeft","ControlRight");const _=!!p("ShiftLeft","ShiftRight")&&d.stamina>3&&this.move.lengthSq()>.1;this.move.lengthSq()>1&&this.move.normalize(),this.move.multiplyScalar(_?4.8:2.8),this.velocity.lerp(this.move,1-Math.exp(-4*t)),K_(d.position,this.velocity.x*t,this.velocity.y*t,this.velocity.z*t),d.update(t,_),this.position.copy(d.position),this.camera.position.copy(this.position),d.outcome!=="playing"&&this.pause()}const n=Ya.smoothstep(-this.position.z,35,100),a=1-Ya.smoothstep(si(this.position,rl),4,22),l=this.scene.fog;l.color.set(800064).lerp(new le(402480),n).lerp(new le(1727074),a*.65),l.density=.032+.022*n-.014*a,this.scene.background.copy(l.color),this.uniforms.uTime.value=this.time;const c=this.mission.torch;if(this.torchLight.visible=c,this.torchFill.visible=c,this.beam.visible=c,this.beamHalo.visible=c,this.torchBody.visible=!0,c){const d=l_(this.position.y,this.pitch),p=l_(3,0),g=d.intensity/p.intensity,v=d.distance/p.distance,_=d.beamOpacity/p.beamOpacity;this.torchLight.intensity=160*g,this.torchLight.distance=32*v,this.torchLight.decay=1.2+(d.decay-p.decay),this.torchLight.color.setRGB(d.r,d.g,d.b),this.torchFill.intensity=4*g,this.torchFill.color.setRGB(d.r,d.g,d.b);const x=this.beam.material;x.uniforms.uOpacity.value=.09*_,x.uniforms.uColor.value.setRGB(d.r,d.g,d.b);const S=this.beamHalo.material;S.uniforms.uOpacity.value=.035*_,S.uniforms.uColor.value.setRGB(d.r*.85,d.g*.9,d.b),this.particles.material.uniforms.uTorch.value=d.particle}else this.particles.material.uniforms.uTorch.value=0;this.bloom.strength=c?.2:.14;const f=this.mission.predator;this.guardian.group.position.copy(f.position);const h=Math.atan2(Math.sin(f.heading-this.guardian.group.rotation.y),Math.cos(f.heading-this.guardian.group.rotation.y));this.guardian.group.rotation.y+=h*Math.min(1,t*5),this.guardian.fins.forEach(d=>d.rotation.x=Math.sin(this.time*2+(d.userData.phase||0))*.25*(d.userData.side||1)),this.guardian.tail.rotation.y=Math.sin(this.time*3)*.22,this.syncPickups(),this.decoyMesh.visible=!!this.mission.decoy,this.mission.decoy&&this.decoyMesh.position.copy(this.mission.decoy.position),this.time-this.lastSent>.05&&(this.lastSent=this.time,this.publish()),this.composer.render()};dispose(){window.clearTimeout(this.audioTestTimer),this.audioContext&&(this.audioContext.onstatechange=null),this.backgroundMusic?.dispose(),this.pause(),this.composer?.dispose(),super.dispose()}}const il="0.1.10",J_="92f82ee",a2=`v${il} · ${J_}`;function s2({item:r}){const t={stone:Q.jsx("path",{fill:"#7a8480",d:"M12 28c1-9 7-15 13-16 8-2 15 3 16 11 2 9-4 17-13 18-8 1-15-4-16-13z"}),wood:Q.jsxs("g",{transform:"rotate(-35 24 24)",children:[Q.jsx("rect",{x:"20",y:"8",width:"8",height:"32",rx:"2.5",fill:"#2c343a"}),Q.jsx("rect",{x:"19",y:"8",width:"10",height:"7",rx:"1.5",fill:"#4a545c"}),Q.jsx("rect",{x:"21",y:"18",width:"6",height:"2",fill:"#1a2024"})]}),flare:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"22",y:"16",width:"5",height:"24",rx:"1.5",fill:"#e8e8e8"}),Q.jsx("path",{fill:"#ff1e14",d:"M21 16c1-5 2.5-10 3.5-13 1.5 3 3.5 7 4.5 11H21z"}),Q.jsx("path",{fill:"#ffc14a",d:"M24 5c0-2 .6-4 1-5 .4 1.5 1.2 3 2 4.5-.7.2-1.8.4-3 .5z"})]}),air:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"17",y:"13",width:"14",height:"26",rx:"5",fill:"#c8d0d6"}),Q.jsx("rect",{x:"20",y:"7",width:"8",height:"8",rx:"2",fill:"#a8b2ba"}),Q.jsx("line",{x1:"17",y1:"23",x2:"31",y2:"23",stroke:"#3a444a",strokeWidth:"1.3"}),Q.jsx("line",{x1:"24",y1:"17",x2:"24",y2:"30",stroke:"#3a444a",strokeWidth:"1.3"})]}),bandage:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"11",y:"17",width:"26",height:"18",rx:"2.5",fill:"#9aa4aa"}),Q.jsx("path",{fill:"#5c666c",d:"M22 17v-5h4v5m-2 6v8m-5-4h10"})]}),relic:Q.jsxs(Q.Fragment,{children:[Q.jsx("path",{fill:"#c4923a",d:"M24 8c9 0 15 6 15 13 0 10-8 17-15 17S9 31 9 21 12 8 24 8z"}),Q.jsx("path",{fill:"none",stroke:"#4a2a08",strokeWidth:"2.2",d:"M31 28c-9 9-19 1-16-7s13-11 14-1-7 8-6 2"}),Q.jsx("circle",{cx:"28",cy:"17",r:"3.2",fill:"#ecc878"})]})};return Q.jsx("svg",{viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:r?t[r]:null})}function r2({yaw:r}){const t=(-r*180/Math.PI%360+360)%360,n=[];for(let a=0;a<360;a+=5){let l=(a-t+540)%360-180;if(Math.abs(l)>52)continue;const c=a===0?"N":a===90?"E":a===180?"S":a===270?"W":"";n.push({deg:a,x:l,label:c,major:a%90===0})}return Q.jsxs("div",{className:"compass","aria-hidden":"true",children:[Q.jsx("div",{className:"compass-needle"}),Q.jsx("div",{className:"compass-track",children:n.map(a=>Q.jsxs("div",{className:`compass-mark ${a.major?"major":a.deg%15===0?"mid":""}`,style:{transform:`translateX(${a.x*2.55}px)`},children:[Q.jsx("i",{}),a.label&&Q.jsx("span",{children:a.label})]},a.deg))})]})}function o2(){const r=ps.useRef(null),t=ps.useRef(null),[n,a]=ps.useState(null),[l,c]=ps.useState(""),[f,h]=ps.useState("");ps.useEffect(()=>{if(!r.current)return;let P;try{P=new i2(r.current,O=>a({...O})),t.current=P}catch(O){console.error(O),c("The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.")}return()=>{P?.dispose(),t.current=null}},[]),ps.useEffect(()=>{let P=!0;const O=()=>{fetch("/__build.json",{cache:"no-store"}).then(w=>w.json()).then(w=>{!P||!w?.packageVersion||(w.packageVersion!==il||w.sha&&w.sha!==J_?h(`OUTDATED TAB — server is ${w.packageVersion}${w.sha?` · ${w.sha}`:""}. Hard refresh (Cmd+Shift+R) or run: node playable/refresh.mjs`):h(""))}).catch(()=>{})};O();const F=window.setInterval(O,4e3),V=()=>O();return window.addEventListener("focus",V),document.addEventListener("visibilitychange",()=>{document.hidden||O()}),()=>{P=!1,window.clearInterval(F),window.removeEventListener("focus",V)}},[]);const d=n?.mission,p=!!n?.playing,g=d?.outcome!=="playing"&&!!d,v=d?.nearest(),_=d&&si(d.position,rl)<4,x=d?.pending!==null&&d?.pending!==void 0?"Choose slot 1–5 · E confirms swap · Esc cancels":_?d?.hasRelic?"E · Extract with the relic":"Relic required for extraction":v?`E · Collect ${Z_[v.item].name}`:"",S=n?.yaw??0,T=d?Math.ceil(d.air):240,M=`${String(Math.floor(T/60)).padStart(2,"0")}:${String(T%60).padStart(2,"0")}`,y=d?Math.max(1,Math.round(10+-d.position.z*.22+(5-d.position.y)*2.4)):0,U=d?.predator.state||"patrol",C=(d?si(d.position,d.predator.position)<23:!1)?{patrol:"Movement in the dark",alert:"It heard something",chase:"It is hunting you",search:"Searching your last position"}[U]:"";return Q.jsxs("main",{className:p?"app playing":"app",children:[Q.jsx("div",{className:"viewport",ref:r,"aria-label":"Three-dimensional underwater cave"}),Q.jsx("div",{className:"vignette"}),Q.jsxs("div",{className:"build-version","aria-label":`Build version ${il}`,children:["BUILD ",a2]}),f&&Q.jsx("div",{className:"stale-build",role:"alert",children:f}),!p&&Q.jsxs("header",{children:[Q.jsxs("div",{className:"brand",children:[Q.jsx("span",{className:"brand-mark",children:"◉"})," PAINTED ABYSS",Q.jsx("small",{children:"THE DROWNED SHELF"})]}),Q.jsxs("div",{className:"build-label",children:["FIRST DIVE ",Q.jsx("span",{children:" / "})," ",il]})]}),p&&d&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("section",{className:"objectives","aria-label":"Objectives",children:[Q.jsxs("div",{className:`obj ${d.hasRelic?"done":""}`,children:[Q.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"◆"}),d.hasRelic?"Carry the ammonite relic":"Recover the ammonite relic"]}),Q.jsxs("div",{className:"obj",children:[Q.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"○"}),"Reach the extraction pool"]})]}),Q.jsx(r2,{yaw:S}),Q.jsxs("div",{className:"depth",children:["DEPTH ",y," m"]}),Q.jsxs("section",{className:"vitals","aria-label":"Vitals",children:[Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"AIR"}),Q.jsx("strong",{className:T<45?"warning":"",children:M})]}),Q.jsx("div",{className:"meter air",children:Q.jsx("i",{style:{width:`${d.air/240*100}%`}})})]}),Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"SUIT"}),Q.jsx("strong",{className:d.health<40?"warning":"",children:Math.ceil(d.health)})]}),Q.jsx("div",{className:"meter suit",children:Q.jsx("i",{style:{width:`${d.health}%`}})})]}),Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"FINS"}),Q.jsx("strong",{children:Math.round(d.stamina)})]}),Q.jsx("div",{className:"meter fins",children:Q.jsx("i",{style:{width:`${d.stamina}%`}})})]})]}),C&&Q.jsx("div",{className:`threat ${U}`,role:"status",children:C}),n?.audioNotice&&Q.jsx("div",{className:"audio-notice",role:"status",children:n.audioNotice}),d.health<40&&Q.jsx("div",{className:"injury"}),Q.jsxs("div",{className:"interaction",role:"status",children:[x&&Q.jsx("div",{className:"prompt",children:x}),d.elapsed<d.noticeUntil&&Q.jsx("p",{className:`notice ${d.feedbackKind}`,children:d.notice},d.feedbackPulse)]}),Q.jsx("div",{className:"inventory","aria-label":"Inventory",children:Q.jsx("div",{className:"slots",children:d.inventory.map((P,O)=>{const F=O===d.selected,V=F&&d.feedbackKind?d.feedbackKind:"";return Q.jsxs("div",{className:`slot ${F?"selected":""} ${P==="relic"?"relic":""} ${P==="flare"?"flare":""} ${V?`pulse-${V}`:""}`,children:[Q.jsx("kbd",{children:O+1}),Q.jsx(s2,{item:P}),F&&Q.jsx("em",{className:"slot-mark","aria-hidden":"true",children:"●"})]},F?`${O}-p${d.feedbackPulse}`:O)})})}),Q.jsxs("aside",{className:"keybinds","aria-hidden":"true",children:[Q.jsxs("div",{children:[Q.jsx("kbd",{children:"1–5"}),Q.jsx("span",{children:"Select"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"F"}),Q.jsx("span",{children:"Torch"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"E"}),Q.jsx("span",{children:"Interact"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"R"}),Q.jsx("span",{children:"Use"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"G"}),Q.jsx("span",{children:"Drop"})]})]}),!n?.pointerLocked&&Q.jsx("div",{className:"free-look",children:"360° free look · move to look · hold left or right of center to keep turning"})]}),!p&&Q.jsxs("div",{className:"menu-backdrop",children:[Q.jsxs("section",{className:"menu",children:[Q.jsx("div",{className:"eyebrow",children:g?d?.outcome==="won"?"EXPEDITION COMPLETE":"DIVE LOST":n?.started?"DIVE PAUSED":"A SHORT UNDERWATER SURVIVAL PROTOTYPE"}),Q.jsx("h1",{children:g?d?.outcome==="won"?Q.jsxs(Q.Fragment,{children:["Back to",Q.jsx("br",{}),Q.jsx("em",{children:"the light."})]}):Q.jsxs(Q.Fragment,{children:["The deep",Q.jsx("br",{}),Q.jsx("em",{children:"keeps its own."})]}):n?.started?Q.jsxs(Q.Fragment,{children:["Catch your",Q.jsx("br",{}),Q.jsx("em",{children:"breath."})]}):Q.jsxs(Q.Fragment,{children:["Some things",Q.jsx("br",{}),Q.jsx("em",{children:"should stay buried."})]})}),Q.jsx("p",{className:"intro",children:g?d?.reason:n?.started?"Your dive is paused. Take a moment, then return to the cave.":"One cave. One ancient guardian. Recover the ammonite relic and bring it back to the light."}),g&&Q.jsxs("div",{className:"results",children:[Q.jsxs("span",{children:[Math.floor((d?.elapsed||0)/60),"m ",Math.floor((d?.elapsed||0)%60),"s underwater"]}),Q.jsx("span",{children:d?.outcome==="won"?"1 relic secured":"No relic secured"})]}),l||n?.error?Q.jsx("p",{className:"error",role:"alert",children:l||n?.error}):Q.jsxs("button",{className:"primary",disabled:!n,onClick:()=>t.current?.start(),children:[n?g?"Try another dive":n.started?"Resume dive":"Begin dive":"Opening the cave…"," ",Q.jsx("span",{children:"↗"})]}),Q.jsxs("div",{className:"menu-actions",children:[Q.jsx("button",{onClick:()=>{const P=t.current;P&&(P.setSound(!P.sound),P.publish())},children:t.current?.sound===!1?"Sound off":"Sound on"}),Q.jsx("button",{onClick:()=>t.current?.testSound(),children:"Test sound"}),n?.started&&!g&&Q.jsx("button",{onClick:()=>{t.current?.reset(),t.current?.start()},children:"Restart dive"})]}),Q.jsx("p",{className:"sound-help",role:"status",children:n?.audioNotice||"Test sound plays two clear tones. During the dive, hear your music and regulator breathing."}),Q.jsxs("div",{className:"dive-note",children:["2–4 MINUTES ",Q.jsx("span",{children:"·"})," DESKTOP / HEADPHONES ",Q.jsx("span",{children:"·"})," PROTOTYPE ",il]})]}),Q.jsxs("aside",{className:"briefing",children:[Q.jsx("div",{className:"eyebrow",children:"BEFORE YOU DESCEND"}),Q.jsxs("ol",{children:[Q.jsxs("li",{children:[Q.jsx("b",{children:"Follow the turquoise lights."}),Q.jsx("span",{children:"Find the relic in the bone alcove, beyond the central pillar."})]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Make room for your discovery."}),Q.jsx("span",{children:"Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops."})]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Escape through the east fissure."}),Q.jsx("span",{children:"Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage."})]})]}),Q.jsxs("div",{className:"control-grid",children:[Q.jsxs("span",{children:[Q.jsx("kbd",{children:"W A S D"})," Swim"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"Space / Q"})," Up / down"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"Shift"})," Sprint"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"F"})," Torch"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"E"})," Collect / extract"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"1–5"})," Select slot"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"R"})," Use / consume"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"G"})," Drop selected"]})]}),Q.jsxs("p",{className:"look-note",children:["Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. ",Q.jsx("kbd",{children:"Esc"})," pauses; ",Q.jsx("kbd",{children:"M"})," mutes."]}),Q.jsxs("p",{className:"tip",children:["Inventory: ",Q.jsx("kbd",{children:"1–5"})," selects (click sound when the slot changes), then ",Q.jsx("kbd",{children:"R"})," uses — air, sealant, and flares are consumed. A one-time tip appears on the first dive only. Rock blocks its sight; a flare distracts it while you move away."]})]})]})]})}fM.createRoot(document.getElementById("root")).render(Q.jsx(o2,{}));
