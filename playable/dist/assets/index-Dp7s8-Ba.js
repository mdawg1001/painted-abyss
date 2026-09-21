(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var _h={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function $y(){if(k0)return Wo;k0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:u,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=n,Wo.jsxs=n,Wo}var X0;function tM(){return X0||(X0=1,_h.exports=$y()),_h.exports}var Q=tM(),xh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function eM(){if(W0)return he;W0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(N,tt,xt){this.props=N,this.context=tt,this.refs=T,this.updater=xt||x}M.prototype.isReactComponent={},M.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=M.prototype;function U(N,tt,xt){this.props=N,this.context=tt,this.refs=T,this.updater=xt||x}var L=U.prototype=new y;L.constructor=U,S(L,M.prototype),L.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function H(N,tt,xt,Mt,Ut,Ht){return xt=Ht.ref,{$$typeof:r,type:N,key:tt,ref:xt!==void 0?xt:null,props:Ht}}function k(N,tt){return H(N.type,tt,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function C(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return tt[xt]})}var G=/\/+/g;function Z(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):tt.toString(36)}function lt(){}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(lt,lt):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,tt,xt,Mt,Ut){var Ht=typeof N;(Ht==="undefined"||Ht==="boolean")&&(N=null);var it=!1;if(N===null)it=!0;else switch(Ht){case"bigint":case"string":case"number":it=!0;break;case"object":switch(N.$$typeof){case r:case t:it=!0;break;case g:return it=N._init,ft(it(N._payload),tt,xt,Mt,Ut)}}if(it)return Ut=Ut(N),it=Mt===""?"."+Z(N,0):Mt,w(Ut)?(xt="",it!=null&&(xt=it.replace(G,"$&/")+"/"),ft(Ut,tt,xt,"",function(Qt){return Qt})):Ut!=null&&(D(Ut)&&(Ut=k(Ut,xt+(Ut.key==null||N&&N.key===Ut.key?"":(""+Ut.key).replace(G,"$&/")+"/")+it)),tt.push(Ut)),1;it=0;var vt=Mt===""?".":Mt+":";if(w(N))for(var At=0;At<N.length;At++)Mt=N[At],Ht=vt+Z(Mt,At),it+=ft(Mt,tt,xt,Ht,Ut);else if(At=_(N),typeof At=="function")for(N=At.call(N),At=0;!(Mt=N.next()).done;)Mt=Mt.value,Ht=vt+Z(Mt,At++),it+=ft(Mt,tt,xt,Ht,Ut);else if(Ht==="object"){if(typeof N.then=="function")return ft(ut(N),tt,xt,Mt,Ut);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return it}function B(N,tt,xt){if(N==null)return N;var Mt=[],Ut=0;return ft(N,Mt,"","",function(Ht){return tt.call(xt,Ht,Ut++)}),Mt}function nt(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function yt(){}return he.Children={map:B,forEach:function(N,tt,xt){B(N,function(){tt.apply(this,arguments)},xt)},count:function(N){var tt=0;return B(N,function(){tt++}),tt},toArray:function(N){return B(N,function(tt){return tt})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},he.Component=M,he.Fragment=n,he.Profiler=l,he.PureComponent=U,he.StrictMode=a,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,he.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},he.cache=function(N){return function(){return N.apply(null,arguments)}},he.cloneElement=function(N,tt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Mt=S({},N.props),Ut=N.key,Ht=void 0;if(tt!=null)for(it in tt.ref!==void 0&&(Ht=void 0),tt.key!==void 0&&(Ut=""+tt.key),tt)!z.call(tt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&tt.ref===void 0||(Mt[it]=tt[it]);var it=arguments.length-2;if(it===1)Mt.children=xt;else if(1<it){for(var vt=Array(it),At=0;At<it;At++)vt[At]=arguments[At+2];Mt.children=vt}return H(N.type,Ut,void 0,void 0,Ht,Mt)},he.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},he.createElement=function(N,tt,xt){var Mt,Ut={},Ht=null;if(tt!=null)for(Mt in tt.key!==void 0&&(Ht=""+tt.key),tt)z.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ut[Mt]=tt[Mt]);var it=arguments.length-2;if(it===1)Ut.children=xt;else if(1<it){for(var vt=Array(it),At=0;At<it;At++)vt[At]=arguments[At+2];Ut.children=vt}if(N&&N.defaultProps)for(Mt in it=N.defaultProps,it)Ut[Mt]===void 0&&(Ut[Mt]=it[Mt]);return H(N,Ht,void 0,void 0,null,Ut)},he.createRef=function(){return{current:null}},he.forwardRef=function(N){return{$$typeof:h,render:N}},he.isValidElement=D,he.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:nt}},he.memo=function(N,tt){return{$$typeof:d,type:N,compare:tt===void 0?null:tt}},he.startTransition=function(N){var tt=O.T,xt={};O.T=xt;try{var Mt=N(),Ut=O.S;Ut!==null&&Ut(xt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(yt,j)}catch(Ht){j(Ht)}finally{O.T=tt}},he.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},he.use=function(N){return O.H.use(N)},he.useActionState=function(N,tt,xt){return O.H.useActionState(N,tt,xt)},he.useCallback=function(N,tt){return O.H.useCallback(N,tt)},he.useContext=function(N){return O.H.useContext(N)},he.useDebugValue=function(){},he.useDeferredValue=function(N,tt){return O.H.useDeferredValue(N,tt)},he.useEffect=function(N,tt,xt){var Mt=O.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(N,tt)},he.useId=function(){return O.H.useId()},he.useImperativeHandle=function(N,tt,xt){return O.H.useImperativeHandle(N,tt,xt)},he.useInsertionEffect=function(N,tt){return O.H.useInsertionEffect(N,tt)},he.useLayoutEffect=function(N,tt){return O.H.useLayoutEffect(N,tt)},he.useMemo=function(N,tt){return O.H.useMemo(N,tt)},he.useOptimistic=function(N,tt){return O.H.useOptimistic(N,tt)},he.useReducer=function(N,tt,xt){return O.H.useReducer(N,tt,xt)},he.useRef=function(N){return O.H.useRef(N)},he.useState=function(N){return O.H.useState(N)},he.useSyncExternalStore=function(N,tt,xt){return O.H.useSyncExternalStore(N,tt,xt)},he.useTransition=function(){return O.H.useTransition()},he.version="19.1.1",he}var q0;function Qd(){return q0||(q0=1,xh.exports=eM()),xh.exports}var qo=Qd(),yh={exports:{}},Yo={},Mh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function nM(){return Y0||(Y0=1,(function(r){function t(B,nt){var j=B.length;B.push(nt);t:for(;0<j;){var yt=j-1>>>1,N=B[yt];if(0<l(N,nt))B[yt]=nt,B[j]=N,j=yt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var nt=B[0],j=B.pop();if(j!==nt){B[0]=j;t:for(var yt=0,N=B.length,tt=N>>>1;yt<tt;){var xt=2*(yt+1)-1,Mt=B[xt],Ut=xt+1,Ht=B[Ut];if(0>l(Mt,j))Ut<N&&0>l(Ht,Mt)?(B[yt]=Ht,B[Ut]=j,yt=Ut):(B[yt]=Mt,B[xt]=j,yt=xt);else if(Ut<N&&0>l(Ht,j))B[yt]=Ht,B[Ut]=j,yt=Ut;else break t}}return nt}function l(B,nt){var j=B.sortIndex-nt.sortIndex;return j!==0?j:B.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,v=null,_=3,x=!1,S=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var nt=n(d);nt!==null;){if(nt.callback===null)a(d);else if(nt.startTime<=B)a(d),nt.sortIndex=nt.expirationTime,t(m,nt);else break;nt=n(d)}}function O(B){if(T=!1,w(B),!S)if(n(m)!==null)S=!0,z||(z=!0,Z());else{var nt=n(d);nt!==null&&ft(O,nt.startTime-B)}}var z=!1,H=-1,k=5,D=-1;function C(){return M?!0:!(r.unstable_now()-D<k)}function G(){if(M=!1,z){var B=r.unstable_now();D=B;var nt=!0;try{t:{S=!1,T&&(T=!1,U(H),H=-1),x=!0;var j=_;try{e:{for(w(B),v=n(m);v!==null&&!(v.expirationTime>B&&C());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,_=v.priorityLevel;var N=yt(v.expirationTime<=B);if(B=r.unstable_now(),typeof N=="function"){v.callback=N,w(B),nt=!0;break e}v===n(m)&&a(m),w(B)}else a(m);v=n(m)}if(v!==null)nt=!0;else{var tt=n(d);tt!==null&&ft(O,tt.startTime-B),nt=!1}}break t}finally{v=null,_=j,x=!1}nt=void 0}}finally{nt?Z():z=!1}}}var Z;if(typeof L=="function")Z=function(){L(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=G,Z=function(){ut.postMessage(null)}}else Z=function(){y(G,0)};function ft(B,nt){H=y(function(){B(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var nt=3;break;default:nt=_}var j=_;_=nt;try{return B()}finally{_=j}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,nt){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=_;_=B;try{return nt()}finally{_=j}},r.unstable_scheduleCallback=function(B,nt,j){var yt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,B={id:g++,callback:nt,priorityLevel:B,startTime:j,expirationTime:N,sortIndex:-1},j>yt?(B.sortIndex=j,t(d,B),n(m)===null&&B===n(d)&&(T?(U(H),H=-1):T=!0,ft(O,j-yt))):(B.sortIndex=N,t(m,B),S||x||(S=!0,z||(z=!0,Z()))),B},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(B){var nt=_;return function(){var j=_;_=nt;try{return B.apply(this,arguments)}finally{_=j}}}})(Sh)),Sh}var j0;function iM(){return j0||(j0=1,Mh.exports=nM()),Mh.exports}var Eh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function aM(){if(Z0)return Nn;Z0=1;var r=Qd();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Nn.flushSync=function(m){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=d,a.p=g,a.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);a.d.L(m,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(m)},Nn.requestFormReset=function(m){a.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var K0;function sM(){if(K0)return Eh.exports;K0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=aM(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function rM(){if(Q0)return Yo;Q0=1;var r=iM(),t=Qd(),n=sM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(o=f.return,o!==null){s=o;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return h(f),e;if(p===o)return h(f),i;p=p.sibling}throw Error(a(188))}if(s.return!==o.return)s=f,o=p;else{for(var E=!1,A=f.child;A;){if(A===s){E=!0,s=f,o=p;break}if(A===o){E=!0,o=f,s=p;break}A=A.sibling}if(!E){for(A=p.child;A;){if(A===s){E=!0,s=p,o=f;break}if(A===o){E=!0,o=p,s=f;break}A=A.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function d(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=d(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case O:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case L:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],N=-1;function tt(e){return{current:e}}function xt(e){0>N||(e.current=yt[N],yt[N]=null,N--)}function Mt(e,i){N++,yt[N]=e.current,e.current=i}var Ut=tt(null),Ht=tt(null),it=tt(null),vt=tt(null);function At(e,i){switch(Mt(it,i),Mt(Ht,e),Mt(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?v0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=v0(i),e=_0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Ut),Mt(Ut,e)}function Qt(){xt(Ut),xt(Ht),xt(it)}function Yt(e){e.memoizedState!==null&&Mt(vt,e);var i=Ut.current,s=_0(i,e.type);i!==s&&(Mt(Ht,e),Mt(Ut,s))}function ve(e){Ht.current===e&&(xt(Ut),xt(Ht)),vt.current===e&&(xt(vt),Ho._currentValue=j)}var on=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,ze=r.unstable_cancelCallback,ce=r.unstable_shouldYield,ie=r.unstable_requestPaint,Ot=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,Vt=r.unstable_ImmediatePriority,ue=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,P=r.unstable_IdlePriority,b=r.log,et=r.unstable_setDisableYieldValue,ht=null,mt=null;function ct(e){if(typeof b=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var zt=Math.clz32?Math.clz32:jt,Rt=Math.log,Wt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Rt(e)/Wt|0)|0}var St=256,Lt=4194304;function Kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var f=0,p=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~p,o!==0?f=Kt(o):(E&=A,E!==0?f=Kt(E):s||(s=A&~e,s!==0&&(f=Kt(s))))):(A=o&~p,A!==0?f=Kt(A):E!==0?f=Kt(E):s||(s=o&~e,s!==0&&(f=Kt(s)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:f}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,i,s,o,f,p){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(s=E&~s;0<s;){var dt=31-zt(s),gt=1<<dt;A[dt]=0,I[dt]=-1;var at=$[dt];if(at!==null)for($[dt]=null,dt=0;dt<at.length;dt++){var st=at[dt];st!==null&&(st.lane&=-536870913)}s&=~gt}o!==0&&_t(e,o,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(E&~i))}function _t(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-zt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function Gt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-zt(s),f=1<<o;f&i|e[o]&i&&(e[o]|=i),s&=~f}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:B0(e.type))}function vi(e,i){var s=nt.p;try{return nt.p=e,i()}finally{nt.p=s}}var dn=Math.random().toString(36).slice(2),pn="__reactFiber$"+dn,$e="__reactProps$"+dn,Ci="__reactContainer$"+dn,Ds="__reactEvents$"+dn,pl="__reactListeners$"+dn,Us="__reactHandles$"+dn,Qr="__reactResources$"+dn,Di="__reactMarker$"+dn;function Ls(e){delete e[pn],delete e[$e],delete e[Ds],delete e[pl],delete e[Us]}function Xi(e){var i=e[pn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ci]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=S0(e);e!==null;){if(s=e[pn])return s;e=S0(e)}return i}e=s,s=e.parentNode}return null}function pa(e){if(e=e[pn]||e[Ci]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Qa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ma(e){var i=e[Qr];return i||(i=e[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(e){e[Di]=!0}var ml=new Set,gl={};function R(e,i){q(e,i),q(e+"Capture",i)}function q(e,i){for(gl[e]=i,e=0;e<i.length;e++)ml.add(i[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},K={};function Tt(e){return on.call(K,e)?!0:on.call(ot,e)?!1:rt.test(e)?K[e]=!0:(ot[e]=!0,!1)}function Dt(e,i,s){if(Tt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function It(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var $t,ee;function qt(e){if($t===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$t=i&&i[1]||"",ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ee}var pe=!1;function Ce(e,i){if(!e||pe)return"";pe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var at=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){at=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){at=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),E=p[0],A=p[1];if(E&&A){var I=E.split(`
`),$=A.split(`
`);for(f=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(o===I.length||f===$.length)for(o=I.length-1,f=$.length-1;1<=o&&0<=f&&I[o]!==$[f];)f--;for(;1<=o&&0<=f;o--,f--)if(I[o]!==$[f]){if(o!==1||f!==1)do if(o--,f--,0>f||I[o]!==$[f]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=f);break}}}finally{pe=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?qt(s):""}function je(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return qt("Activity");default:return""}}function Be(e){try{var i="";do i+=je(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(e){var i=Jt(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,p=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){o=""+E,p.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Me(e){e._valueTracker||(e._valueTracker=Ye(e))}function Dn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function Mn(e){return e.replace(zn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(e,i,s,o,f,p,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+me(i)):e.value!==""+me(i)&&(e.value=""+me(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Un(e,E,me(i)):s!=null?Un(e,E,me(s)):o!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+me(A):e.removeAttribute("name")}function Bn(e,i,s,o,f,p,E,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;s=s!=null?""+me(s):"",i=i!=null?""+me(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Un(e,i,s){i==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function tn(e,i,s,o){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&o&&(e[s].defaultSelected=!0)}else{for(s=""+me(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function An(e,i,s){if(i!=null&&(i=""+me(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+me(s):""}function Ns(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ft(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=me(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function Vn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var K_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vp(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||K_.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function _p(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&s[f]!==o&&vp(e,f,o)}else for(var p in i)i.hasOwnProperty(p)&&vp(e,p,i[p])}function gu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return J_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ps=null,Os=null;function xp(e){var i=pa(e);if(i&&(e=i.stateNode)){var s=e[$e]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ve(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Mn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var f=o[$e]||null;if(!f)throw Error(a(90));Ve(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Dn(o)}break t;case"textarea":An(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&tn(e,!!s.multiple,i,!1)}}}var xu=!1;function yp(e,i,s){if(xu)return e(i,s);xu=!0;try{var o=e(i);return o}finally{if(xu=!1,(Ps!==null||Os!==null)&&(nc(),Ps&&(i=Ps,e=Os,Os=Ps=null,xp(i),e)))for(i=0;i<e.length;i++)xp(e[i])}}function Jr(e,i){var s=e.stateNode;if(s===null)return null;var o=s[$e]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(Wi)try{var $r={};Object.defineProperty($r,"passive",{get:function(){yu=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{yu=!1}var ga=null,Mu=null,_l=null;function Mp(){if(_l)return _l;var e,i=Mu,s=i.length,o,f="value"in ga?ga.value:ga.textContent,p=f.length;for(e=0;e<s&&i[e]===f[e];e++);var E=s-e;for(o=1;o<=E&&i[s-o]===f[p-o];o++);return _l=f.slice(e,1<o?1-o:void 0)}function xl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Sp(){return!1}function kn(e){function i(s,o,f,p,E){this._reactName=s,this._targetInst=f,this.type=o,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?yl:Sp,this.isPropagationStopped=Sp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),i}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=kn(Ja),to=g({},Ja,{view:0,detail:0}),$_=kn(to),Su,Eu,eo,Sl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Su=e.screenX-eo.screenX,Eu=e.screenY-eo.screenY):Eu=Su=0,eo=e),Su)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),Ep=kn(Sl),tx=g({},Sl,{dataTransfer:0}),ex=kn(tx),nx=g({},to,{relatedTarget:0}),Tu=kn(nx),ix=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=kn(ix),sx=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=kn(sx),ox=g({},Ja,{data:0}),Tp=kn(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ux[e])?!!i[e]:!1}function bu(){return fx}var hx=g({},to,{key:function(e){if(e.key){var i=lx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dx=kn(hx),px=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=kn(px),mx=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),gx=kn(mx),vx=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=kn(vx),xx=g({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=kn(xx),Mx=g({},Ja,{newState:0,oldState:0}),Sx=kn(Mx),Ex=[9,13,27,32],Au=Wi&&"CompositionEvent"in window,no=null;Wi&&"documentMode"in document&&(no=document.documentMode);var Tx=Wi&&"TextEvent"in window&&!no,Ap=Wi&&(!Au||no&&8<no&&11>=no),Rp=" ",wp=!1;function Cp(e,i){switch(e){case"keyup":return Ex.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function bx(e,i){switch(e){case"compositionend":return Dp(i);case"keypress":return i.which!==32?null:(wp=!0,Rp);case"textInput":return e=i.data,e===Rp&&wp?null:e;default:return null}}function Ax(e,i){if(zs)return e==="compositionend"||!Au&&Cp(e,i)?(e=Mp(),_l=Mu=ga=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ap&&i.locale!=="ko"?null:i.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Rx[e.type]:i==="textarea"}function Lp(e,i,s,o){Ps?Os?Os.push(o):Os=[o]:Ps=o,i=lc(i,"onChange"),0<i.length&&(s=new Ml("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var io=null,ao=null;function wx(e){h0(e,0)}function El(e){var i=Qa(e);if(Dn(i))return e}function Np(e,i){if(e==="change")return i}var Pp=!1;if(Wi){var Ru;if(Wi){var wu="oninput"in document;if(!wu){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),wu=typeof Op.oninput=="function"}Ru=wu}else Ru=!1;Pp=Ru&&(!document.documentMode||9<document.documentMode)}function zp(){io&&(io.detachEvent("onpropertychange",Bp),ao=io=null)}function Bp(e){if(e.propertyName==="value"&&El(ao)){var i=[];Lp(i,ao,e,_u(e)),yp(wx,i)}}function Cx(e,i,s){e==="focusin"?(zp(),io=i,ao=s,io.attachEvent("onpropertychange",Bp)):e==="focusout"&&zp()}function Dx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(ao)}function Ux(e,i){if(e==="click")return El(i)}function Lx(e,i){if(e==="input"||e==="change")return El(i)}function Nx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:Nx;function so(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var f=s[o];if(!on.call(i,f)||!Kn(e[f],i[f]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,i){var s=Ip(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Ip(s)}}function Hp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Hp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_i(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=_i(e.document)}return i}function Cu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Px=Wi&&"documentMode"in document&&11>=document.documentMode,Bs=null,Du=null,ro=null,Uu=!1;function Vp(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uu||Bs==null||Bs!==_i(o)||(o=Bs,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&so(ro,o)||(ro=o,o=lc(Du,"onSelect"),0<o.length&&(i=new Ml("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Bs)))}function $a(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Is={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Lu={},kp={};Wi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function ts(e){if(Lu[e])return Lu[e];if(!Is[e])return e;var i=Is[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in kp)return Lu[e]=i[s];return e}var Xp=ts("animationend"),Wp=ts("animationiteration"),qp=ts("animationstart"),Ox=ts("transitionrun"),zx=ts("transitionstart"),Bx=ts("transitioncancel"),Yp=ts("transitionend"),jp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function xi(e,i){jp.set(e,i),R(i,[e])}var Zp=new WeakMap;function ci(e,i){if(typeof e=="object"&&e!==null){var s=Zp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Be(i)},Zp.set(e,i),i)}return{value:e,source:i,stack:Be(i)}}var ui=[],Fs=0,Pu=0;function Tl(){for(var e=Fs,i=Pu=Fs=0;i<e;){var s=ui[i];ui[i++]=null;var o=ui[i];ui[i++]=null;var f=ui[i];ui[i++]=null;var p=ui[i];if(ui[i++]=null,o!==null&&f!==null){var E=o.pending;E===null?f.next=f:(f.next=E.next,E.next=f),o.pending=f}p!==0&&Kp(s,f,p)}}function bl(e,i,s,o){ui[Fs++]=e,ui[Fs++]=i,ui[Fs++]=s,ui[Fs++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,i,s,o){return bl(e,i,s,o),Al(e)}function Hs(e,i){return bl(e,null,null,i),Al(e)}function Kp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var f=!1,p=e.return;p!==null;)p.childLanes|=s,o=p.alternate,o!==null&&(o.childLanes|=s),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&i!==null&&(f=31-zt(s),e=p.hiddenUpdates,o=e[f],o===null?e[f]=[i]:o.push(i),i.lane=s|536870912),p):null}function Al(e){if(50<Lo)throw Lo=0,Vf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Gs={};function Ix(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,i,s,o){return new Ix(e,i,s,o)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,i){var s=e.alternate;return s===null?(s=Qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Qp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Rl(e,i,s,o,f,p){var E=0;if(o=e,typeof e=="function")zu(e)&&(E=1);else if(typeof e=="string")E=Hy(e,s,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,s,i,f),e.elementType=D,e.lanes=p,e;case S:return es(s.children,f,p,i);case T:E=8,f|=24;break;case M:return e=Qn(12,s,i,f|2),e.elementType=M,e.lanes=p,e;case O:return e=Qn(13,s,i,f),e.elementType=O,e.lanes=p,e;case z:return e=Qn(19,s,i,f),e.elementType=z,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case L:E=10;break t;case U:E=9;break t;case w:E=11;break t;case H:E=14;break t;case k:E=16,o=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=Qn(E,s,i,f),i.elementType=e,i.type=o,i.lanes=p,i}function es(e,i,s,o){return e=Qn(7,e,o,i),e.lanes=s,e}function Bu(e,i,s){return e=Qn(6,e,null,i),e.lanes=s,e}function Iu(e,i,s){return i=Qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Vs=[],ks=0,wl=null,Cl=0,fi=[],hi=0,ns=null,Yi=1,ji="";function is(e,i){Vs[ks++]=Cl,Vs[ks++]=wl,wl=e,Cl=i}function Jp(e,i,s){fi[hi++]=Yi,fi[hi++]=ji,fi[hi++]=ns,ns=e;var o=Yi;e=ji;var f=32-zt(o)-1;o&=~(1<<f),s+=1;var p=32-zt(i)+f;if(30<p){var E=f-f%5;p=(o&(1<<E)-1).toString(32),o>>=E,f-=E,Yi=1<<32-zt(i)+f|s<<f|o,ji=p+e}else Yi=1<<p|s<<f|o,ji=e}function Fu(e){e.return!==null&&(is(e,1),Jp(e,1,0))}function Hu(e){for(;e===wl;)wl=Vs[--ks],Vs[ks]=null,Cl=Vs[--ks],Vs[ks]=null;for(;e===ns;)ns=fi[--hi],fi[hi]=null,ji=fi[--hi],fi[hi]=null,Yi=fi[--hi],fi[hi]=null}var In=null,en=null,Ue=!1,as=null,Ui=!1,Gu=Error(a(519));function ss(e){var i=Error(a(418,""));throw co(ci(i,e)),Gu}function $p(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[pn]=e,i[$e]=o,s){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(s=0;s<Po.length;s++)Ee(Po[s],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),Bn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Me(i);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Ns(i,o.value,o.defaultValue,o.children),Me(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||g0(i.textContent,s)?(o.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),o.onScroll!=null&&Ee("scroll",i),o.onScrollEnd!=null&&Ee("scrollend",i),o.onClick!=null&&(i.onclick=cc),i=!0):i=!1,i||ss(e)}function tm(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:In=In.return}}function oo(e){if(e!==In)return!1;if(!Ue)return tm(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ah(e.type,e.memoizedProps)),s=!s),s&&en&&ss(e),tm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){en=Mi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,La(e.type)?(e=lh,lh=null,en=e):en=i):en=In?Mi(e.stateNode.nextSibling):null;return!0}function lo(){en=In=null,Ue=!1}function em(){var e=as;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),as=null),e}function co(e){as===null?as=[e]:as.push(e)}var Vu=tt(null),rs=null,Zi=null;function va(e,i,s){Mt(Vu,i._currentValue),i._currentValue=s}function Ki(e){e._currentValue=Vu.current,xt(Vu)}function ku(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Xu(e,i,s,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var E=f.child;p=p.firstContext;t:for(;p!==null;){var A=p;p=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){p.lanes|=s,A=p.alternate,A!==null&&(A.lanes|=s),ku(p.return,s,e),o||(E=null);break t}p=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(a(341));E.lanes|=s,p=E.alternate,p!==null&&(p.lanes|=s),ku(E,s,e),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===e){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function uo(e,i,s,o){e=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var A=f.type;Kn(f.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(f===vt.current){if(E=f.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}f=f.return}e!==null&&Xu(i,e,s,o),i.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return nm(rs,e)}function Ul(e,i){return rs===null&&os(e),nm(e,i)}function nm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Zi===null){if(e===null)throw Error(a(308));Zi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Zi=Zi.next=i;return s}var Fx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Hx=r.unstable_scheduleCallback,Gx=r.unstable_NormalPriority,mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new Fx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&Hx(Gx,function(){e.controller.abort()})}var ho=null,qu=0,Xs=0,Ws=null;function Vx(e,i){if(ho===null){var s=ho=[];qu=0,Xs=Zf(),Ws={status:"pending",value:void 0,then:function(o){s.push(o)}}}return qu++,i.then(im,im),i}function im(){if(--qu===0&&ho!==null){Ws!==null&&(Ws.status="fulfilled");var e=ho;ho=null,Xs=0,Ws=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function kx(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),o}var am=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Vx(e,i),am!==null&&am(e,i)};var ls=tt(null);function Yu(){var e=ls.current;return e!==null?e:qe.pooledCache}function Ll(e,i){i===null?Mt(ls,ls.current):Mt(ls,i.pool)}function sm(){var e=Yu();return e===null?null:{parent:mn._currentValue,pool:e}}var po=Error(a(460)),rm=Error(a(474)),Nl=Error(a(542)),ju={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pl(){}function lm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Pl,Pl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,um(e),e;default:if(typeof i.status=="string")i.then(Pl,Pl);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,um(e),e}throw mo=i,po}}var mo=null;function cm(){if(mo===null)throw Error(a(459));var e=mo;return mo=null,e}function um(e){if(e===po||e===Nl)throw Error(a(483))}var _a=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=Al(e),Kp(e,null,s),i}return bl(e,o,i,s),Al(e)}function go(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Gt(e,s)}}function Qu(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=E:p=p.next=E,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Ju=!1;function vo(){if(Ju){var e=Ws;if(e!==null)throw e}}function _o(e,i,s,o){Ju=!1;var f=e.updateQueue;_a=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,$=I.next;I.next=null,E===null?p=$:E.next=$,E=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==E&&(A===null?dt.firstBaseUpdate=$:A.next=$,dt.lastBaseUpdate=I))}if(p!==null){var gt=f.baseState;E=0,dt=$=I=null,A=p;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(be&at)===at:(o&at)===at){at!==0&&at===Xs&&(Ju=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var se=e,te=A;at=i;var He=s;switch(te.tag){case 1:if(se=te.payload,typeof se=="function"){gt=se.call(He,gt,at);break t}gt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=te.payload,at=typeof se=="function"?se.call(He,gt,at):se,at==null)break t;gt=g({},gt,at);break t;case 2:_a=!0}}at=A.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=f.callbacks,st===null?f.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?($=dt=st,I=gt):dt=dt.next=st,E|=at;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;st=A,A=st.next,st.next=null,f.lastBaseUpdate=st,f.shared.pending=null}}while(!0);dt===null&&(I=gt),f.baseState=I,f.firstBaseUpdate=$,f.lastBaseUpdate=dt,p===null&&(f.shared.lanes=0),wa|=E,e.lanes=E,e.memoizedState=gt}}function fm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function hm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)fm(s[e],i)}var qs=tt(null),Ol=tt(0);function dm(e,i){e=ia,Mt(Ol,e),Mt(qs,i),ia=e|i.baseLanes}function $u(){Mt(Ol,ia),Mt(qs,qs.current)}function tf(){ia=Ol.current,xt(qs),xt(Ol)}var Ma=0,_e=null,Ie=null,cn=null,zl=!1,Ys=!1,cs=!1,Bl=0,xo=0,js=null,Xx=0;function an(){throw Error(a(321))}function ef(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function nf(e,i,s,o,f,p){return Ma=p,_e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Km:Qm,cs=!1,p=s(o,f),cs=!1,Ys&&(p=mm(i,s,o,f)),pm(e),p}function pm(e){B.H=kl;var i=Ie!==null&&Ie.next!==null;if(Ma=0,cn=Ie=_e=null,zl=!1,xo=0,js=null,i)throw Error(a(300));e===null||Sn||(e=e.dependencies,e!==null&&Dl(e)&&(Sn=!0))}function mm(e,i,s,o){_e=e;var f=0;do{if(Ys&&(js=null),xo=0,Ys=!1,25<=f)throw Error(a(301));if(f+=1,cn=Ie=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}B.H=Qx,p=i(s,o)}while(Ys);return p}function Wx(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?yo(i):i,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),i}function af(){var e=Bl!==0;return Bl=0,e}function sf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function rf(e){if(zl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}zl=!1}Ma=0,cn=Ie=_e=null,Ys=!1,xo=Bl=0,js=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?_e.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=cn===null?_e.memoizedState:cn.next;if(i!==null)cn=i,Ie=e;else{if(e===null)throw _e.alternate===null?Error(a(467)):Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?_e.memoizedState=cn=e:cn=cn.next=e}return cn}function of(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var i=xo;return xo+=1,js===null&&(js=[]),e=lm(js,e,i),i=_e,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Km:Qm),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===L)return Ln(e)}throw Error(a(438,String(e)))}function lf(e){var i=null,s=_e.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=of(),_e.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=C;return i.index++,s}function Qi(e,i){return typeof i=="function"?i(e):i}function Fl(e){var i=un();return cf(i,Ie,e)}function cf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var f=e.baseQueue,p=o.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}i.baseQueue=f=p,o.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{i=f.next;var A=E=null,I=null,$=i,dt=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(be&gt)===gt:(Ma&gt)===gt){var at=$.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Xs&&(dt=!0);else if((Ma&at)===at){$=$.next,at===Xs&&(dt=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=gt,E=p):I=I.next=gt,_e.lanes|=at,wa|=at;gt=$.action,cs&&s(p,gt),p=$.hasEagerState?$.eagerState:s(p,gt)}else at={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=at,E=p):I=I.next=at,_e.lanes|=gt,wa|=gt;$=$.next}while($!==null&&$!==i);if(I===null?E=p:I.next=A,!Kn(p,e.memoizedState)&&(Sn=!0,dt&&(s=Ws,s!==null)))throw s;e.memoizedState=p,e.baseState=E,e.baseQueue=I,o.lastRenderedState=p}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do p=e(p,E.action),E=E.next;while(E!==f);Kn(p,i.memoizedState)||(Sn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,o]}function gm(e,i,s){var o=_e,f=un(),p=Ue;if(p){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Kn((Ie||f).memoizedState,s);E&&(f.memoizedState=s,Sn=!0),f=f.queue;var A=xm.bind(null,o,f,e);if(Mo(2048,8,A,[e]),f.getSnapshot!==i||E||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Zs(9,Hl(),_m.bind(null,o,f,s,i),null),qe===null)throw Error(a(349));p||(Ma&124)!==0||vm(o,i,s)}return s}function vm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=_e.updateQueue,i===null?(i=of(),_e.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function _m(e,i,s,o){i.value=s,i.getSnapshot=o,ym(i)&&Mm(e)}function xm(e,i,s){return s(function(){ym(i)&&Mm(e)})}function ym(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function Mm(e){var i=Hs(e,2);i!==null&&ni(i,e,2)}function ff(e){var i=Xn();if(typeof e=="function"){var s=e;if(e=s(),cs){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},i}function Sm(e,i,s,o){return e.baseState=s,cf(e,Ie,typeof o=="function"?o:Qi)}function qx(e,i,s,o,f){if(Vl(e))throw Error(a(485));if(e=i.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};B.T!==null?s(!0):p.isTransition=!1,o(p),s=i.pending,s===null?(p.next=i.pending=p,Em(i,p)):(p.next=s.next,i.pending=s.next=p)}}function Em(e,i){var s=i.action,o=i.payload,f=e.state;if(i.isTransition){var p=B.T,E={};B.T=E;try{var A=s(f,o),I=B.S;I!==null&&I(E,A),Tm(e,i,A)}catch($){hf(e,i,$)}finally{B.T=p}}else try{p=s(f,o),Tm(e,i,p)}catch($){hf(e,i,$)}}function Tm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){bm(e,i,o)},function(o){return hf(e,i,o)}):bm(e,i,s)}function bm(e,i,s){i.status="fulfilled",i.value=s,Am(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Em(e,s)))}function hf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Am(i),i=i.next;while(i!==o)}e.action=null}function Am(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Rm(e,i){return i}function wm(e,i){if(Ue){var s=qe.formState;if(s!==null){t:{var o=_e;if(Ue){if(en){e:{for(var f=en,p=Ui;f.nodeType!==8;){if(!p){f=null;break e}if(f=Mi(f.nextSibling),f===null){f=null;break e}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){en=Mi(f.nextSibling),o=f.data==="F!";break t}}ss(o)}o=!1}o&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:i},s.queue=o,s=Ym.bind(null,_e,o),o.dispatch=s,o=ff(!1),p=vf.bind(null,_e,!1,o.queue),o=Xn(),f={state:i,dispatch:null,action:e,pending:null},o.queue=f,s=qx.bind(null,_e,f,p,s),f.dispatch=s,o.memoizedState=e,[i,s,!1]}function Cm(e){var i=un();return Dm(i,Ie,e)}function Dm(e,i,s){if(i=cf(e,i,Rm)[0],e=Fl(Qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=yo(i)}catch(E){throw E===po?Nl:E}else o=i;i=un();var f=i.queue,p=f.dispatch;return s!==i.memoizedState&&(_e.flags|=2048,Zs(9,Hl(),Yx.bind(null,f,s),null)),[o,p,e]}function Yx(e,i){e.action=i}function Um(e){var i=un(),s=Ie;if(s!==null)return Dm(i,s,e);un(),i=i.memoizedState,s=un();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function Zs(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=_e.updateQueue,i===null&&(i=of(),_e.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Hl(){return{destroy:void 0,resource:void 0}}function Lm(){return un().memoizedState}function Gl(e,i,s,o){var f=Xn();o=o===void 0?null:o,_e.flags|=e,f.memoizedState=Zs(1|i,Hl(),s,o)}function Mo(e,i,s,o){var f=un();o=o===void 0?null:o;var p=f.memoizedState.inst;Ie!==null&&o!==null&&ef(o,Ie.memoizedState.deps)?f.memoizedState=Zs(i,p,s,o):(_e.flags|=e,f.memoizedState=Zs(1|i,p,s,o))}function Nm(e,i){Gl(8390656,8,e,i)}function Pm(e,i){Mo(2048,8,e,i)}function Om(e,i){return Mo(4,2,e,i)}function zm(e,i){return Mo(4,4,e,i)}function Bm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Im(e,i,s){s=s!=null?s.concat([e]):null,Mo(4,4,Bm.bind(null,i,e),s)}function df(){}function Fm(e,i){var s=un();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&ef(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Hm(e,i){var s=un();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&ef(i,o[1]))return o[0];if(o=e(),cs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[o,i],o}function pf(e,i,s){return s===void 0||(Ma&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=kg(),_e.lanes|=e,wa|=e,s)}function Gm(e,i,s,o){return Kn(s,i)?s:qs.current!==null?(e=pf(e,s,o),Kn(e,i)||(Sn=!0),e):(Ma&42)===0?(Sn=!0,e.memoizedState=s):(e=kg(),_e.lanes|=e,wa|=e,i)}function Vm(e,i,s,o,f){var p=nt.p;nt.p=p!==0&&8>p?p:8;var E=B.T,A={};B.T=A,vf(e,!1,i,s);try{var I=f(),$=B.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=kx(I,o);So(e,i,dt,ei(e))}else So(e,i,o,ei(e))}catch(gt){So(e,i,{then:function(){},status:"rejected",reason:gt},ei())}finally{nt.p=p,B.T=E}}function jx(){}function mf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var f=km(e).queue;Vm(e,f,i,j,s===null?jx:function(){return Xm(e),s(o)})}function km(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Xm(e){var i=km(e).next.queue;So(e,i,{},ei())}function gf(){return Ln(Ho)}function Wm(){return un().memoizedState}function qm(){return un().memoizedState}function Zx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ei();e=xa(s);var o=ya(i,e,s);o!==null&&(ni(o,i,s),go(o,i,s)),i={cache:Wu()},e.payload=i;return}i=i.return}}function Kx(e,i,s){var o=ei();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Vl(e)?jm(i,s):(s=Ou(e,i,s,o),s!==null&&(ni(s,e,o),Zm(s,i,o)))}function Ym(e,i,s){var o=ei();So(e,i,s,o)}function So(e,i,s,o){var f={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))jm(i,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,A=p(E,s);if(f.hasEagerState=!0,f.eagerState=A,Kn(A,E))return bl(e,i,f,0),qe===null&&Tl(),!1}catch{}finally{}if(s=Ou(e,i,f,o),s!==null)return ni(s,e,o),Zm(s,i,o),!0}return!1}function vf(e,i,s,o){if(o={lane:2,revertLane:Zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(i)throw Error(a(479))}else i=Ou(e,s,o,2),i!==null&&ni(i,e,2)}function Vl(e){var i=e.alternate;return e===_e||i!==null&&i===_e}function jm(e,i){Ys=zl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Zm(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Gt(e,s)}}var kl={readContext:Ln,use:Il,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Km={readContext:Ln,use:Il,useCallback:function(e,i){return Xn().memoizedState=[e,i===void 0?null:i],e},useContext:Ln,useEffect:Nm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Gl(4194308,4,Bm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Gl(4194308,4,e,i)},useInsertionEffect:function(e,i){Gl(4,2,e,i)},useMemo:function(e,i){var s=Xn();i=i===void 0?null:i;var o=e();if(cs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Xn();if(s!==void 0){var f=s(i);if(cs){ct(!0);try{s(i)}finally{ct(!1)}}}else f=i;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=Kx.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var i=Xn();return e={current:e},i.memoizedState=e},useState:function(e){e=ff(e);var i=e.queue,s=Ym.bind(null,_e,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:df,useDeferredValue:function(e,i){var s=Xn();return pf(s,e,i)},useTransition:function(){var e=ff(!1);return e=Vm.bind(null,_e,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=_e,f=Xn();if(Ue){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(be&124)!==0||vm(o,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,Nm(xm.bind(null,o,p,e),[e]),o.flags|=2048,Zs(9,Hl(),_m.bind(null,o,p,s,i),null),s},useId:function(){var e=Xn(),i=qe.identifierPrefix;if(Ue){var s=ji,o=Yi;s=(o&~(1<<32-zt(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Bl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Xx++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:gf,useFormState:wm,useActionState:wm,useOptimistic:function(e){var i=Xn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=vf.bind(null,_e,!0,s),s.dispatch=i,[e,i]},useMemoCache:lf,useCacheRefresh:function(){return Xn().memoizedState=Zx.bind(null,_e)}},Qm={readContext:Ln,use:Il,useCallback:Fm,useContext:Ln,useEffect:Pm,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:zm,useMemo:Hm,useReducer:Fl,useRef:Lm,useState:function(){return Fl(Qi)},useDebugValue:df,useDeferredValue:function(e,i){var s=un();return Gm(s,Ie.memoizedState,e,i)},useTransition:function(){var e=Fl(Qi)[0],i=un().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:gf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,i){var s=un();return Sm(s,Ie,e,i)},useMemoCache:lf,useCacheRefresh:qm},Qx={readContext:Ln,use:Il,useCallback:Fm,useContext:Ln,useEffect:Pm,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:zm,useMemo:Hm,useReducer:uf,useRef:Lm,useState:function(){return uf(Qi)},useDebugValue:df,useDeferredValue:function(e,i){var s=un();return Ie===null?pf(s,e,i):Gm(s,Ie.memoizedState,e,i)},useTransition:function(){var e=uf(Qi)[0],i=un().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:gf,useFormState:Um,useActionState:Um,useOptimistic:function(e,i){var s=un();return Ie!==null?Sm(s,Ie,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:lf,useCacheRefresh:qm},Ks=null,Eo=0;function Xl(e){var i=Eo;return Eo+=1,Ks===null&&(Ks=[]),lm(Ks,e,i)}function To(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Wl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Jm(e){var i=e._init;return i(e._payload)}function $m(e){function i(Y,V){if(e){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function s(Y,V){if(!e)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function f(Y,V){return Y=qi(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=67108866,V):J):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function E(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,J,pt){return V===null||V.tag!==6?(V=Bu(J,Y.mode,pt),V.return=Y,V):(V=f(V,J),V.return=Y,V)}function I(Y,V,J,pt){var Ft=J.type;return Ft===S?dt(Y,V,J.props.children,pt,J.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===k&&Jm(Ft)===V.type)?(V=f(V,J.props),To(V,J),V.return=Y,V):(V=Rl(J.type,J.key,J.props,null,Y.mode,pt),To(V,J),V.return=Y,V)}function $(Y,V,J,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Iu(J,Y.mode,pt),V.return=Y,V):(V=f(V,J.children||[]),V.return=Y,V)}function dt(Y,V,J,pt,Ft){return V===null||V.tag!==7?(V=es(J,Y.mode,pt,Ft),V.return=Y,V):(V=f(V,J),V.return=Y,V)}function gt(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Bu(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return J=Rl(V.type,V.key,V.props,null,Y.mode,J),To(J,V),J.return=Y,J;case x:return V=Iu(V,Y.mode,J),V.return=Y,V;case k:var pt=V._init;return V=pt(V._payload),gt(Y,V,J)}if(ft(V)||Z(V))return V=es(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,Xl(V),J);if(V.$$typeof===L)return gt(Y,Ul(Y,V),J);Wl(Y,V)}return null}function at(Y,V,J,pt){var Ft=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:A(Y,V,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Ft?I(Y,V,J,pt):null;case x:return J.key===Ft?$(Y,V,J,pt):null;case k:return Ft=J._init,J=Ft(J._payload),at(Y,V,J,pt)}if(ft(J)||Z(J))return Ft!==null?null:dt(Y,V,J,pt,null);if(typeof J.then=="function")return at(Y,V,Xl(J),pt);if(J.$$typeof===L)return at(Y,V,Ul(Y,J),pt);Wl(Y,J)}return null}function st(Y,V,J,pt,Ft){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,A(V,Y,""+pt,Ft);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case _:return Y=Y.get(pt.key===null?J:pt.key)||null,I(V,Y,pt,Ft);case x:return Y=Y.get(pt.key===null?J:pt.key)||null,$(V,Y,pt,Ft);case k:var xe=pt._init;return pt=xe(pt._payload),st(Y,V,J,pt,Ft)}if(ft(pt)||Z(pt))return Y=Y.get(J)||null,dt(V,Y,pt,Ft,null);if(typeof pt.then=="function")return st(Y,V,J,Xl(pt),Ft);if(pt.$$typeof===L)return st(Y,V,J,Ul(V,pt),Ft);Wl(V,pt)}return null}function se(Y,V,J,pt){for(var Ft=null,xe=null,Zt=V,ne=V=0,Tn=null;Zt!==null&&ne<J.length;ne++){Zt.index>ne?(Tn=Zt,Zt=null):Tn=Zt.sibling;var De=at(Y,Zt,J[ne],pt);if(De===null){Zt===null&&(Zt=Tn);break}e&&Zt&&De.alternate===null&&i(Y,Zt),V=p(De,V,ne),xe===null?Ft=De:xe.sibling=De,xe=De,Zt=Tn}if(ne===J.length)return s(Y,Zt),Ue&&is(Y,ne),Ft;if(Zt===null){for(;ne<J.length;ne++)Zt=gt(Y,J[ne],pt),Zt!==null&&(V=p(Zt,V,ne),xe===null?Ft=Zt:xe.sibling=Zt,xe=Zt);return Ue&&is(Y,ne),Ft}for(Zt=o(Zt);ne<J.length;ne++)Tn=st(Zt,Y,ne,J[ne],pt),Tn!==null&&(e&&Tn.alternate!==null&&Zt.delete(Tn.key===null?ne:Tn.key),V=p(Tn,V,ne),xe===null?Ft=Tn:xe.sibling=Tn,xe=Tn);return e&&Zt.forEach(function(Ba){return i(Y,Ba)}),Ue&&is(Y,ne),Ft}function te(Y,V,J,pt){if(J==null)throw Error(a(151));for(var Ft=null,xe=null,Zt=V,ne=V=0,Tn=null,De=J.next();Zt!==null&&!De.done;ne++,De=J.next()){Zt.index>ne?(Tn=Zt,Zt=null):Tn=Zt.sibling;var Ba=at(Y,Zt,De.value,pt);if(Ba===null){Zt===null&&(Zt=Tn);break}e&&Zt&&Ba.alternate===null&&i(Y,Zt),V=p(Ba,V,ne),xe===null?Ft=Ba:xe.sibling=Ba,xe=Ba,Zt=Tn}if(De.done)return s(Y,Zt),Ue&&is(Y,ne),Ft;if(Zt===null){for(;!De.done;ne++,De=J.next())De=gt(Y,De.value,pt),De!==null&&(V=p(De,V,ne),xe===null?Ft=De:xe.sibling=De,xe=De);return Ue&&is(Y,ne),Ft}for(Zt=o(Zt);!De.done;ne++,De=J.next())De=st(Zt,Y,ne,De.value,pt),De!==null&&(e&&De.alternate!==null&&Zt.delete(De.key===null?ne:De.key),V=p(De,V,ne),xe===null?Ft=De:xe.sibling=De,xe=De);return e&&Zt.forEach(function(Jy){return i(Y,Jy)}),Ue&&is(Y,ne),Ft}function He(Y,V,J,pt){if(typeof J=="object"&&J!==null&&J.type===S&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:t:{for(var Ft=J.key;V!==null;){if(V.key===Ft){if(Ft=J.type,Ft===S){if(V.tag===7){s(Y,V.sibling),pt=f(V,J.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===k&&Jm(Ft)===V.type){s(Y,V.sibling),pt=f(V,J.props),To(pt,J),pt.return=Y,Y=pt;break t}s(Y,V);break}else i(Y,V);V=V.sibling}J.type===S?(pt=es(J.props.children,Y.mode,pt,J.key),pt.return=Y,Y=pt):(pt=Rl(J.type,J.key,J.props,null,Y.mode,pt),To(pt,J),pt.return=Y,Y=pt)}return E(Y);case x:t:{for(Ft=J.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){s(Y,V.sibling),pt=f(V,J.children||[]),pt.return=Y,Y=pt;break t}else{s(Y,V);break}else i(Y,V);V=V.sibling}pt=Iu(J,Y.mode,pt),pt.return=Y,Y=pt}return E(Y);case k:return Ft=J._init,J=Ft(J._payload),He(Y,V,J,pt)}if(ft(J))return se(Y,V,J,pt);if(Z(J)){if(Ft=Z(J),typeof Ft!="function")throw Error(a(150));return J=Ft.call(J),te(Y,V,J,pt)}if(typeof J.then=="function")return He(Y,V,Xl(J),pt);if(J.$$typeof===L)return He(Y,V,Ul(Y,J),pt);Wl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(s(Y,V.sibling),pt=f(V,J),pt.return=Y,Y=pt):(s(Y,V),pt=Bu(J,Y.mode,pt),pt.return=Y,Y=pt),E(Y)):s(Y,V)}return function(Y,V,J,pt){try{Eo=0;var Ft=He(Y,V,J,pt);return Ks=null,Ft}catch(Zt){if(Zt===po||Zt===Nl)throw Zt;var xe=Qn(29,Zt,null,Y.mode);return xe.lanes=pt,xe.return=Y,xe}finally{}}}var Qs=$m(!0),tg=$m(!1),di=tt(null),Li=null;function Sa(e){var i=e.alternate;Mt(gn,gn.current&1),Mt(di,e),Li===null&&(i===null||qs.current!==null||i.memoizedState!==null)&&(Li=e)}function eg(e){if(e.tag===22){if(Mt(gn,gn.current),Mt(di,e),Li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Li=e)}}else Ea()}function Ea(){Mt(gn,gn.current),Mt(di,di.current)}function Ji(e){xt(di),Li===e&&(Li=null),xt(gn)}var gn=tt(0);function ql(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||oh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function _f(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var xf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=ei(),f=xa(o);f.payload=i,s!=null&&(f.callback=s),i=ya(e,f,o),i!==null&&(ni(i,e,o),go(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=ei(),f=xa(o);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ya(e,f,o),i!==null&&(ni(i,e,o),go(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ei(),o=xa(s);o.tag=2,i!=null&&(o.callback=i),i=ya(e,o,s),i!==null&&(ni(i,e,s),go(i,e,s))}};function ng(e,i,s,o,f,p,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,p,E):i.prototype&&i.prototype.isPureReactComponent?!so(s,o)||!so(f,p):!0}function ig(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function us(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ag(e){Yl(e)}function sg(e){console.error(e)}function rg(e){Yl(e)}function jl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function og(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function yf(e,i,s){return s=xa(s),s.tag=3,s.payload={element:null},s.callback=function(){jl(e,i)},s}function lg(e){return e=xa(e),e.tag=3,e}function cg(e,i,s,o){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=o.value;e.payload=function(){return f(p)},e.callback=function(){og(i,s,o)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){og(i,s,o),typeof f!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Jx(e,i,s,o,f){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&uo(i,s,f,!0),s=di.current,s!==null){switch(s.tag){case 13:return Li===null?Xf():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,o===ju?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),qf(e,o,f)),!1;case 22:return s.flags|=65536,o===ju?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),qf(e,o,f)),!1}throw Error(a(435,s.tag))}return qf(e,o,f),Xf(),!1}if(Ue)return i=di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==Gu&&(e=Error(a(422),{cause:o}),co(ci(e,s)))):(o!==Gu&&(i=Error(a(423),{cause:o}),co(ci(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=ci(o,s),f=yf(e.stateNode,o,f),Qu(e,f),nn!==4&&(nn=2)),!1;var p=Error(a(520),{cause:o});if(p=ci(p,s),Uo===null?Uo=[p]:Uo.push(p),nn!==4&&(nn=2),i===null)return!0;o=ci(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=yf(s.stateNode,o,e),Qu(s,e),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ca===null||!Ca.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=lg(f),cg(f,e,s,o),Qu(s,f),!1}s=s.return}while(s!==null);return!1}var ug=Error(a(461)),Sn=!1;function Rn(e,i,s,o){i.child=e===null?tg(i,null,s,o):Qs(i,e.child,s,o)}function fg(e,i,s,o,f){s=s.render;var p=i.ref;if("ref"in o){var E={};for(var A in o)A!=="ref"&&(E[A]=o[A])}else E=o;return os(i),o=nf(e,i,s,E,p,f),A=af(),e!==null&&!Sn?(sf(e,i,f),$i(e,i,f)):(Ue&&A&&Fu(i),i.flags|=1,Rn(e,i,o,f),i.child)}function hg(e,i,s,o,f){if(e===null){var p=s.type;return typeof p=="function"&&!zu(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,dg(e,i,p,o,f)):(e=Rl(s.type,null,o,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(p=e.child,!wf(e,f)){var E=p.memoizedProps;if(s=s.compare,s=s!==null?s:so,s(E,o)&&e.ref===i.ref)return $i(e,i,f)}return i.flags|=1,e=qi(p,o),e.ref=i.ref,e.return=i,i.child=e}function dg(e,i,s,o,f){if(e!==null){var p=e.memoizedProps;if(so(p,o)&&e.ref===i.ref)if(Sn=!1,i.pendingProps=o=p,wf(e,f))(e.flags&131072)!==0&&(Sn=!0);else return i.lanes=e.lanes,$i(e,i,f)}return Mf(e,i,s,o,f)}function pg(e,i,s){var o=i.pendingProps,f=o.children,p=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=p!==null?p.baseLanes|s:s,e!==null){for(f=i.child=e.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;i.childLanes=p&~o}else i.childLanes=0,i.child=null;return mg(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(i,p!==null?p.cachePool:null),p!==null?dm(i,p):$u(),eg(i);else return i.lanes=i.childLanes=536870912,mg(e,i,p!==null?p.baseLanes|s:s,s)}else p!==null?(Ll(i,p.cachePool),dm(i,p),Ea(),i.memoizedState=null):(e!==null&&Ll(i,null),$u(),Ea());return Rn(e,i,f,s),i.child}function mg(e,i,s,o){var f=Yu();return f=f===null?null:{parent:mn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&Ll(i,null),$u(),eg(i),e!==null&&uo(e,i,o,!0),null}function Zl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Mf(e,i,s,o,f){return os(i),s=nf(e,i,s,o,void 0,f),o=af(),e!==null&&!Sn?(sf(e,i,f),$i(e,i,f)):(Ue&&o&&Fu(i),i.flags|=1,Rn(e,i,s,f),i.child)}function gg(e,i,s,o,f,p){return os(i),i.updateQueue=null,s=mm(i,o,s,f),pm(e),o=af(),e!==null&&!Sn?(sf(e,i,p),$i(e,i,p)):(Ue&&o&&Fu(i),i.flags|=1,Rn(e,i,s,p),i.child)}function vg(e,i,s,o,f){if(os(i),i.stateNode===null){var p=Gs,E=s.contextType;typeof E=="object"&&E!==null&&(p=Ln(E)),p=new s(o,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=xf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=o,p.state=i.memoizedState,p.refs={},Zu(i),E=s.contextType,p.context=typeof E=="object"&&E!==null?Ln(E):Gs,p.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(_f(i,s,E,o),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&xf.enqueueReplaceState(p,p.state,null),_o(i,o,p,f),vo(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){p=i.stateNode;var A=i.memoizedProps,I=us(s,A);p.props=I;var $=p.context,dt=s.contextType;E=Gs,typeof dt=="object"&&dt!==null&&(E=Ln(dt));var gt=s.getDerivedStateFromProps;dt=typeof gt=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||$!==E)&&ig(i,p,o,E),_a=!1;var at=i.memoizedState;p.state=at,_o(i,o,p,f),vo(),$=i.memoizedState,A||at!==$||_a?(typeof gt=="function"&&(_f(i,s,gt,o),$=i.memoizedState),(I=_a||ng(i,s,I,o,at,$,E))?(dt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=$),p.props=o,p.state=$,p.context=E,o=I):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{p=i.stateNode,Ku(e,i),E=i.memoizedProps,dt=us(s,E),p.props=dt,gt=i.pendingProps,at=p.context,$=s.contextType,I=Gs,typeof $=="object"&&$!==null&&(I=Ln($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==gt||at!==I)&&ig(i,p,o,I),_a=!1,at=i.memoizedState,p.state=at,_o(i,o,p,f),vo();var st=i.memoizedState;E!==gt||at!==st||_a||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof A=="function"&&(_f(i,s,A,o),st=i.memoizedState),(dt=_a||ng(i,s,dt,o,at,st,I)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?($||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,st,I),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,st,I)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=st),p.props=o,p.state=st,p.context=I,o=dt):(typeof p.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return p=o,Zl(e,i),o=(i.flags&128)!==0,p||o?(p=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,e!==null&&o?(i.child=Qs(i,e.child,null,f),i.child=Qs(i,null,s,f)):Rn(e,i,s,f),i.memoizedState=p.state,e=i.child):e=$i(e,i,f),e}function _g(e,i,s,o){return lo(),i.flags|=256,Rn(e,i,s,o),i.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(e){return{baseLanes:e,cachePool:sm()}}function Tf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=pi),e}function xg(e,i,s){var o=i.pendingProps,f=!1,p=(i.flags&128)!==0,E;if((E=p)||(E=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(f?Sa(i):Ea(),Ue){var A=en,I;if(I=A){t:{for(I=A,A=Ui;I.nodeType!==8;){if(!A){A=null;break t}if(I=Mi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:ns!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},I=Qn(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,In=i,en=null,I=!0):I=!1}I||ss(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return oh(A)?i.lanes=32:i.lanes=536870912,null;Ji(i)}return A=o.children,o=o.fallback,f?(Ea(),f=i.mode,A=Kl({mode:"hidden",children:A},f),o=es(o,f,s,null),A.return=i,o.return=i,A.sibling=o,i.child=A,f=i.child,f.memoizedState=Ef(s),f.childLanes=Tf(e,E,s),i.memoizedState=Sf,o):(Sa(i),bf(i,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(p)i.flags&256?(Sa(i),i.flags&=-257,i=Af(e,i,s)):i.memoizedState!==null?(Ea(),i.child=e.child,i.flags|=128,i=null):(Ea(),f=o.fallback,A=i.mode,o=Kl({mode:"visible",children:o.children},A),f=es(f,A,s,null),f.flags|=2,o.return=i,f.return=i,o.sibling=f,i.child=o,Qs(i,e.child,null,s),o=i.child,o.memoizedState=Ef(s),o.childLanes=Tf(e,E,s),i.memoizedState=Sf,i=f);else if(Sa(i),oh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var $=E.dgst;E=$,o=Error(a(419)),o.stack="",o.digest=E,co({value:o,source:null,stack:null}),i=Af(e,i,s)}else if(Sn||uo(e,i,s,!1),E=(s&e.childLanes)!==0,Sn||E){if(E=qe,E!==null&&(o=s&-s,o=(o&42)!==0?1:re(o),o=(o&(E.suspendedLanes|s))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Hs(e,o),ni(E,e,o),ug;A.data==="$?"||Xf(),i=Af(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,en=Mi(A.nextSibling),In=i,Ue=!0,as=null,Ui=!1,e!==null&&(fi[hi++]=Yi,fi[hi++]=ji,fi[hi++]=ns,Yi=e.id,ji=e.overflow,ns=i),i=bf(i,o.children),i.flags|=4096);return i}return f?(Ea(),f=o.fallback,A=i.mode,I=e.child,$=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?f=qi($,f):(f=es(f,A,s,null),f.flags|=2),f.return=i,o.return=i,o.sibling=f,i.child=o,o=f,f=i.child,A=e.child.memoizedState,A===null?A=Ef(s):(I=A.cachePool,I!==null?($=mn._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=sm(),A={baseLanes:A.baseLanes|s,cachePool:I}),f.memoizedState=A,f.childLanes=Tf(e,E,s),i.memoizedState=Sf,o):(Sa(i),s=e.child,e=s.sibling,s=qi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function bf(e,i){return i=Kl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Kl(e,i){return e=Qn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Af(e,i,s){return Qs(i,e.child,null,s),e=bf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function yg(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ku(e.return,i,s)}function Rf(e,i,s,o,f){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=s,p.tailMode=f)}function Mg(e,i,s){var o=i.pendingProps,f=o.revealOrder,p=o.tail;if(Rn(e,i,o.children,s),o=gn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yg(e,s,i);else if(e.tag===19)yg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(gn,o),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&ql(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Rf(i,!1,f,s,p);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&ql(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Rf(i,!0,s,null,p);break;case"together":Rf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),wa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(uo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=qi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=qi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function wf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function $x(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),va(i,mn,e.memoizedState.cache),lo();break;case 27:case 5:Yt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:va(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?xg(e,i,s):(Sa(i),e=$i(e,i,s),e!==null?e.sibling:null);Sa(i);break;case 19:var f=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(uo(e,i,s,!1),o=(s&i.childLanes)!==0),f){if(o)return Mg(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Mt(gn,gn.current),o)break;return null;case 22:case 23:return i.lanes=0,pg(e,i,s);case 24:va(i,mn,e.memoizedState.cache)}return $i(e,i,s)}function Sg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Sn=!0;else{if(!wf(e,s)&&(i.flags&128)===0)return Sn=!1,$x(e,i,s);Sn=(e.flags&131072)!==0}else Sn=!1,Ue&&(i.flags&1048576)!==0&&Jp(i,Cl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,f=o._init;if(o=f(o._payload),i.type=o,typeof o=="function")zu(o)?(e=us(o,e),i.tag=1,i=vg(null,i,o,e,s)):(i.tag=0,i=Mf(null,i,o,e,s));else{if(o!=null){if(f=o.$$typeof,f===w){i.tag=11,i=fg(null,i,o,e,s);break t}else if(f===H){i.tag=14,i=hg(null,i,o,e,s);break t}}throw i=ut(o)||o,Error(a(306,i,""))}}return i;case 0:return Mf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,f=us(o,i.pendingProps),vg(e,i,o,f,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var p=i.memoizedState;f=p.element,Ku(e,i),_o(i,o,null,s);var E=i.memoizedState;if(o=E.cache,va(i,mn,o),o!==p.cache&&Xu(i,[mn],s,!0),vo(),o=E.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=_g(e,i,o,s);break t}else if(o!==f){f=ci(Error(a(424)),i),co(f),i=_g(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Mi(e.firstChild),In=i,Ue=!0,as=null,Ui=!0,s=tg(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(lo(),o===f){i=$i(e,i,s);break t}Rn(e,i,o,s)}i=i.child}return i;case 26:return Zl(e,i),e===null?(s=A0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,o=uc(it.current).createElement(s),o[pn]=i,o[$e]=e,Cn(o,s,e),ln(o),i.stateNode=o):i.memoizedState=A0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&Ue&&(o=i.stateNode=E0(i.type,i.pendingProps,it.current),In=i,Ui=!0,f=en,La(i.type)?(lh=f,en=Mi(o.firstChild)):en=f),Rn(e,i,i.pendingProps.children,s),Zl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((f=o=en)&&(o=Ry(o,i.type,i.pendingProps,Ui),o!==null?(i.stateNode=o,In=i,en=Mi(o.firstChild),Ui=!1,f=!0):f=!1),f||ss(i)),Yt(i),f=i.type,p=i.pendingProps,E=e!==null?e.memoizedProps:null,o=p.children,ah(f,p)?o=null:E!==null&&ah(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=nf(e,i,Wx,null,null,s),Ho._currentValue=f),Zl(e,i),Rn(e,i,o,s),i.child;case 6:return e===null&&Ue&&((e=s=en)&&(s=wy(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,In=i,en=null,e=!0):e=!1),e||ss(i)),null;case 13:return xg(e,i,s);case 4:return At(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Qs(i,null,o,s):Rn(e,i,o,s),i.child;case 11:return fg(e,i,i.type,i.pendingProps,s);case 7:return Rn(e,i,i.pendingProps,s),i.child;case 8:return Rn(e,i,i.pendingProps.children,s),i.child;case 12:return Rn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,va(i,i.type,o.value),Rn(e,i,o.children,s),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,os(i),f=Ln(f),o=o(f),i.flags|=1,Rn(e,i,o,s),i.child;case 14:return hg(e,i,i.type,i.pendingProps,s);case 15:return dg(e,i,i.type,i.pendingProps,s);case 19:return Mg(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=Kl(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=qi(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return pg(e,i,s);case 24:return os(i),o=Ln(mn),e===null?(f=Yu(),f===null&&(f=qe,p=Wu(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),i.memoizedState={parent:o,cache:f},Zu(i),va(i,mn,f)):((e.lanes&s)!==0&&(Ku(e,i),_o(i,null,null,s),vo()),f=e.memoizedState,p=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),va(i,mn,o)):(o=p.cache,va(i,mn,o),o!==f.cache&&Xu(i,[mn],s,!0))),Rn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ta(e){e.flags|=4}function Eg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U0(i)){if(i=di.current,i!==null&&((be&4194048)===be?Li!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Li))throw mo=ju,rm;e.flags|=8192}}function Ql(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,er|=i)}function bo(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function ty(e,i,s){var o=i.pendingProps;switch(Hu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ki(mn),Qt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(oo(i)?ta(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,em())),Je(i),null;case 26:return s=i.memoizedState,e===null?(ta(i),s!==null?(Je(i),Eg(i,s)):(Je(i),i.flags&=-16777217)):s?s!==e.memoizedState?(ta(i),Je(i),Eg(i,s)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==o&&ta(i),Je(i),i.flags&=-16777217),null;case 27:ve(i),s=it.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ta(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Ut.current,oo(i)?$p(i):(e=E0(f,o,s),i.stateNode=e,ta(i))}return Je(i),null;case 5:if(ve(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ta(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(e=Ut.current,oo(i))$p(i);else{switch(f=uc(it.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?f.createElement("select",{is:o.is}):f.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?f.createElement(s,{is:o.is}):f.createElement(s)}}e[pn]=i,e[$e]=o;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(Cn(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ta(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ta(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,oo(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,f=In,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[pn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||g0(e.nodeValue,s)),e||ss(i)}else e=uc(e).createTextNode(o),e[pn]=i,i.stateNode=e}return Je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=oo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[pn]=i}else lo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),f=!1}else f=em(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ji(i),i):(Ji(i),null)}if(Ji(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool);var p=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==f&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Ql(i,i.updateQueue),Je(i),null;case 4:return Qt(),e===null&&$f(i.stateNode.containerInfo),Je(i),null;case 10:return Ki(i.type),Je(i),null;case 19:if(xt(gn),f=i.memoizedState,f===null)return Je(i),null;if(o=(i.flags&128)!==0,p=f.rendering,p===null)if(o)bo(f,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(p=ql(e),p!==null){for(i.flags|=128,bo(f,!1),e=p.updateQueue,i.updateQueue=e,Ql(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Qp(s,e),s=s.sibling;return Mt(gn,gn.current&1|2),i.child}e=e.sibling}f.tail!==null&&Ot()>tc&&(i.flags|=128,o=!0,bo(f,!1),i.lanes=4194304)}else{if(!o)if(e=ql(p),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Ql(i,e),bo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Ue)return Je(i),null}else 2*Ot()-f.renderingStartTime>tc&&s!==536870912&&(i.flags|=128,o=!0,bo(f,!1),i.lanes=4194304);f.isBackwards?(p.sibling=i.child,i.child=p):(e=f.last,e!==null?e.sibling=p:i.child=p,f.last=p)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ot(),i.sibling=null,e=gn.current,Mt(gn,o?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return Ji(i),tf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&Ql(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&xt(ls),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ki(mn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function ey(e,i){switch(Hu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ki(mn),Qt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ve(i),null;case 13:if(Ji(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));lo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return xt(gn),null;case 4:return Qt(),null;case 10:return Ki(i.type),null;case 22:case 23:return Ji(i),tf(),e!==null&&xt(ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ki(mn),null;case 25:return null;default:return null}}function Tg(e,i){switch(Hu(i),i.tag){case 3:Ki(mn),Qt();break;case 26:case 27:case 5:ve(i);break;case 4:Qt();break;case 13:Ji(i);break;case 19:xt(gn);break;case 10:Ki(i.type);break;case 22:case 23:Ji(i),tf(),e!==null&&xt(ls);break;case 24:Ki(mn)}}function Ao(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var f=o.next;s=f;do{if((s.tag&e)===e){o=void 0;var p=s.create,E=s.inst;o=p(),E.destroy=o}s=s.next}while(s!==f)}}catch(A){ke(i,i.return,A)}}function Ta(e,i,s){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var p=f.next;o=p;do{if((o.tag&e)===e){var E=o.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=i;var I=s,$=A;try{$()}catch(dt){ke(f,I,dt)}}}o=o.next}while(o!==p)}}catch(dt){ke(i,i.return,dt)}}function bg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{hm(i,s)}catch(o){ke(e,e.return,o)}}}function Ag(e,i,s){s.props=us(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ke(e,i,o)}}function Ro(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(f){ke(e,i,f)}}function Ni(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(f){ke(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){ke(e,i,f)}else s.current=null}function Rg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(f){ke(e,e.return,f)}}function Cf(e,i,s){try{var o=e.stateNode;Sy(o,e.type,s,i),o[$e]=i}catch(f){ke(e,e.return,f)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=cc));else if(o!==4&&(o===27&&La(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Uf(e,i,s),e=e.sibling;e!==null;)Uf(e,i,s),e=e.sibling}function Jl(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Jl(e,i,s),e=e.sibling;e!==null;)Jl(e,i,s),e=e.sibling}function Cg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Cn(i,o,s),i[pn]=e,i[$e]=s}catch(p){ke(e,e.return,p)}}var ea=!1,sn=!1,Lf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,En=null;function ny(e,i){if(e=e.containerInfo,nh=gc,e=Gp(e),Cu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var f=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break t}var E=0,A=-1,I=-1,$=0,dt=0,gt=e,at=null;e:for(;;){for(var st;gt!==s||f!==0&&gt.nodeType!==3||(A=E+f),gt!==p||o!==0&&gt.nodeType!==3||(I=E+o),gt.nodeType===3&&(E+=gt.nodeValue.length),(st=gt.firstChild)!==null;)at=gt,gt=st;for(;;){if(gt===e)break e;if(at===s&&++$===f&&(A=E),at===p&&++dt===o&&(I=E),(st=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=st}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(ih={focusedElem:e,selectionRange:s},gc=!1,En=i;En!==null;)if(i=En,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,En=e;else for(;En!==null;){switch(i=En,p=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,s=i,f=p.memoizedProps,p=p.memoizedState,o=s.stateNode;try{var se=us(s.type,f,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(se,p),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){ke(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)rh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,En=e;break}En=i.return}}function Ug(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ba(e,s),o&4&&Ao(5,s);break;case 1:if(ba(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ke(s,s.return,E)}else{var f=us(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ke(s,s.return,E)}}o&64&&bg(s),o&512&&Ro(s,s.return);break;case 3:if(ba(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{hm(e,i)}catch(E){ke(s,s.return,E)}}break;case 27:i===null&&o&4&&Cg(s);case 26:case 5:ba(e,s),i===null&&o&4&&Rg(s),o&512&&Ro(s,s.return);break;case 12:ba(e,s);break;case 13:ba(e,s),o&4&&Pg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=fy.bind(null,s),Cy(e,s))));break;case 22:if(o=s.memoizedState!==null||ea,!o){i=i!==null&&i.memoizedState!==null||sn,f=ea;var p=sn;ea=o,(sn=i)&&!p?Aa(e,s,(s.subtreeFlags&8772)!==0):ba(e,s),ea=f,sn=p}break;case 30:break;default:ba(e,s)}}function Lg(e){var i=e.alternate;i!==null&&(e.alternate=null,Lg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ls(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Wn=!1;function na(e,i,s){for(s=s.child;s!==null;)Ng(e,i,s),s=s.sibling}function Ng(e,i,s){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:sn||Ni(s,i),na(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Ni(s,i);var o=Ze,f=Wn;La(s.type)&&(Ze=s.stateNode,Wn=!1),na(e,i,s),zo(s.stateNode),Ze=o,Wn=f;break;case 5:sn||Ni(s,i);case 6:if(o=Ze,f=Wn,Ze=null,na(e,i,s),Ze=o,Wn=f,Ze!==null)if(Wn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(p){ke(s,i,p)}else try{Ze.removeChild(s.stateNode)}catch(p){ke(s,i,p)}break;case 18:Ze!==null&&(Wn?(e=Ze,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Xo(e)):M0(Ze,s.stateNode));break;case 4:o=Ze,f=Wn,Ze=s.stateNode.containerInfo,Wn=!0,na(e,i,s),Ze=o,Wn=f;break;case 0:case 11:case 14:case 15:sn||Ta(2,s,i),sn||Ta(4,s,i),na(e,i,s);break;case 1:sn||(Ni(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Ag(s,i,o)),na(e,i,s);break;case 21:na(e,i,s);break;case 22:sn=(o=sn)||s.memoizedState!==null,na(e,i,s),sn=o;break;default:na(e,i,s)}}function Pg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xo(e)}catch(s){ke(i,i.return,s)}}function iy(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Dg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Dg),i;default:throw Error(a(435,e.tag))}}function Nf(e,i){var s=iy(e);i.forEach(function(o){var f=hy.bind(null,e,o);s.has(o)||(s.add(o),o.then(f,f))})}function Jn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var f=s[o],p=e,E=i,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(La(A.type)){Ze=A.stateNode,Wn=!1;break t}break;case 5:Ze=A.stateNode,Wn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if(Ze===null)throw Error(a(160));Ng(p,E,f),Ze=null,Wn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Og(i,e),i=i.sibling}var yi=null;function Og(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(i,e),$n(e),o&4&&(Ta(3,e,e.return),Ao(3,e),Ta(5,e,e.return));break;case 1:Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var f=yi;if(Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),o&4){var p=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(o){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Di]||p[pn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(o),f.head.insertBefore(p,f.querySelector("head > title"))),Cn(p,o,s),p[pn]=e,ln(p),o=p;break t;case"link":var E=C0("link","href",f).get(o+(s.href||""));if(E){for(var A=0;A<E.length;A++)if(p=E[A],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(A,1);break e}}p=f.createElement(o),Cn(p,o,s),f.head.appendChild(p);break;case"meta":if(E=C0("meta","content",f).get(o+(s.content||""))){for(A=0;A<E.length;A++)if(p=E[A],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(A,1);break e}}p=f.createElement(o),Cn(p,o,s),f.head.appendChild(p);break;default:throw Error(a(468,o))}p[pn]=e,ln(p),o=p}e.stateNode=o}else D0(f,e.type,e.stateNode);else e.stateNode=w0(f,o,e.memoizedProps);else p!==o?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,o===null?D0(f,e.type,e.stateNode):w0(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),s!==null&&o&4&&Cf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,e),$n(e),o&512&&(sn||s===null||Ni(s,s.return)),e.flags&32){f=e.stateNode;try{Vn(f,"")}catch(st){ke(e,e.return,st)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,Cf(e,f,s!==null?s.memoizedProps:f)),o&1024&&(Lf=!0);break;case 6:if(Jn(i,e),$n(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(st){ke(e,e.return,st)}}break;case 3:if(dc=null,f=yi,yi=fc(i.containerInfo),Jn(i,e),yi=f,$n(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Xo(i.containerInfo)}catch(st){ke(e,e.return,st)}Lf&&(Lf=!1,zg(e));break;case 4:o=yi,yi=fc(e.stateNode.containerInfo),Jn(i,e),$n(e),yi=o;break;case 12:Jn(i,e),$n(e);break;case 13:Jn(i,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ff=Ot()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nf(e,o)));break;case 22:f=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,$=ea,dt=sn;if(ea=$||f,sn=dt||I,Jn(i,e),sn=dt,ea=$,$n(e),o&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||ea||sn||fs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(p=I.stateNode,f)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=I.stateNode;var gt=I.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){ke(I,I.return,st)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(st){ke(I,I.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Nf(e,s))));break;case 19:Jn(i,e),$n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nf(e,o)));break;case 30:break;case 21:break;default:Jn(i,e),$n(e)}}function $n(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(wg(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,p=Df(e);Jl(e,p,f);break;case 5:var E=s.stateNode;s.flags&32&&(Vn(E,""),s.flags&=-33);var A=Df(e);Jl(e,A,E);break;case 3:case 4:var I=s.stateNode.containerInfo,$=Df(e);Uf(e,$,I);break;default:throw Error(a(161))}}catch(dt){ke(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;zg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ba(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ug(e,i.alternate,i),i=i.sibling}function fs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ta(4,i,i.return),fs(i);break;case 1:Ni(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ag(i,i.return,s),fs(i);break;case 27:zo(i.stateNode);case 26:case 5:Ni(i,i.return),fs(i);break;case 22:i.memoizedState===null&&fs(i);break;case 30:fs(i);break;default:fs(i)}e=e.sibling}}function Aa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=e,p=i,E=p.flags;switch(p.tag){case 0:case 11:case 15:Aa(f,p,s),Ao(4,p);break;case 1:if(Aa(f,p,s),o=p,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){ke(o,o.return,$)}if(o=p,f=o.updateQueue,f!==null){var A=o.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)fm(I[f],A)}catch($){ke(o,o.return,$)}}s&&E&64&&bg(p),Ro(p,p.return);break;case 27:Cg(p);case 26:case 5:Aa(f,p,s),s&&o===null&&E&4&&Rg(p),Ro(p,p.return);break;case 12:Aa(f,p,s);break;case 13:Aa(f,p,s),s&&E&4&&Pg(f,p);break;case 22:p.memoizedState===null&&Aa(f,p,s),Ro(p,p.return);break;case 30:break;default:Aa(f,p,s)}i=i.sibling}}function Pf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&fo(s))}function Of(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fo(e))}function Pi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Bg(e,i,s,o),i=i.sibling}function Bg(e,i,s,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(e,i,s,o),f&2048&&Ao(9,i);break;case 1:Pi(e,i,s,o);break;case 3:Pi(e,i,s,o),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fo(e)));break;case 12:if(f&2048){Pi(e,i,s,o),e=i.stateNode;try{var p=i.memoizedProps,E=p.id,A=p.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){ke(i,i.return,I)}}else Pi(e,i,s,o);break;case 13:Pi(e,i,s,o);break;case 23:break;case 22:p=i.stateNode,E=i.alternate,i.memoizedState!==null?p._visibility&2?Pi(e,i,s,o):wo(e,i):p._visibility&2?Pi(e,i,s,o):(p._visibility|=2,Js(e,i,s,o,(i.subtreeFlags&10256)!==0)),f&2048&&Pf(E,i);break;case 24:Pi(e,i,s,o),f&2048&&Of(i.alternate,i);break;default:Pi(e,i,s,o)}}function Js(e,i,s,o,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=e,E=i,A=s,I=o,$=E.flags;switch(E.tag){case 0:case 11:case 15:Js(p,E,A,I,f),Ao(8,E);break;case 23:break;case 22:var dt=E.stateNode;E.memoizedState!==null?dt._visibility&2?Js(p,E,A,I,f):wo(p,E):(dt._visibility|=2,Js(p,E,A,I,f)),f&&$&2048&&Pf(E.alternate,E);break;case 24:Js(p,E,A,I,f),f&&$&2048&&Of(E.alternate,E);break;default:Js(p,E,A,I,f)}i=i.sibling}}function wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,f=o.flags;switch(o.tag){case 22:wo(s,o),f&2048&&Pf(o.alternate,o);break;case 24:wo(s,o),f&2048&&Of(o.alternate,o);break;default:wo(s,o)}i=i.sibling}}var Co=8192;function $s(e){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 26:$s(e),e.flags&Co&&e.memoizedState!==null&&Vy(yi,e.memoizedState,e.memoizedProps);break;case 5:$s(e);break;case 3:case 4:var i=yi;yi=fc(e.stateNode.containerInfo),$s(e),yi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Co,Co=16777216,$s(e),Co=i):$s(e));break;default:$s(e)}}function Fg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Do(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];En=o,Gg(o,e)}Fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,$l(e)):Do(e);break;default:Do(e)}}function $l(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];En=o,Gg(o,e)}Fg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ta(8,i,i.return),$l(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,$l(i));break;default:$l(i)}e=e.sibling}}function Gg(e,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Ta(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,En=o;else t:for(s=e;En!==null;){o=En;var f=o.sibling,p=o.return;if(Lg(o),o===s){En=null;break t}if(f!==null){f.return=p,En=f;break t}En=p}}}var ay={getCacheForType:function(e){var i=Ln(mn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},sy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,Se=null,be=0,Pe=0,ti=null,Ra=!1,tr=!1,zf=!1,ia=0,nn=0,wa=0,hs=0,Bf=0,pi=0,er=0,Uo=null,qn=null,If=!1,Ff=0,tc=1/0,ec=null,Ca=null,wn=0,Da=null,nr=null,ir=0,Hf=0,Gf=null,Vg=null,Lo=0,Vf=null;function ei(){if((Ne&2)!==0&&be!==0)return be&-be;if(B.T!==null){var e=Xs;return e!==0?e:Zf()}return Ae()}function kg(){pi===0&&(pi=(be&536870912)===0||Ue?X():536870912);var e=di.current;return e!==null&&(e.flags|=32),pi}function ni(e,i,s){(e===qe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ar(e,0),Ua(e,be,pi,!1)),Bt(e,s),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(hs|=s),nn===4&&Ua(e,be,pi,!1)),Oi(e))}function Xg(e,i,s){if((Ne&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),f=o?ly(e,i):Wf(e,i,!0),p=o;do{if(f===0){tr&&!o&&Ua(e,i,0,!1);break}else{if(s=e.current.alternate,p&&!ry(s)){f=Wf(e,i,!1),p=!1;continue}if(f===2){if(p=i,e.errorRecoveryDisabledLanes&p)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var A=e;f=Uo;var I=A.current.memoizedState.isDehydrated;if(I&&(ar(A,E).flags|=256),E=Wf(A,E,!1),E!==2){if(zf&&!I){A.errorRecoveryDisabledLanes|=p,hs|=p,f=4;break t}p=qn,qn=f,p!==null&&(qn===null?qn=p:qn.push.apply(qn,p))}f=E}if(p=!1,f!==2)continue}}if(f===1){ar(e,0),Ua(e,i,0,!0);break}t:{switch(o=e,p=f,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ua(o,i,pi,!Ra);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Ff+300-Ot(),10<f)){if(Ua(o,i,pi,!Ra),kt(o,0,!0)!==0)break t;o.timeoutHandle=x0(Wg.bind(null,o,s,qn,ec,If,i,pi,hs,er,Ra,p,2,-0,0),f);break t}Wg(o,s,qn,ec,If,i,pi,hs,er,Ra,p,0,-0,0)}}break}while(!0);Oi(e)}function Wg(e,i,s,o,f,p,E,A,I,$,dt,gt,at,st){if(e.timeoutHandle=-1,gt=i.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Fo={stylesheets:null,count:0,unsuspend:Gy},Ig(i),gt=ky(),gt!==null)){e.cancelPendingCommit=gt(Jg.bind(null,e,i,p,s,o,f,E,A,I,dt,1,at,st)),Ua(e,p,E,!$);return}Jg(e,i,p,s,o,f,E,A,I)}function ry(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var f=s[o],p=f.getSnapshot;f=f.value;try{if(!Kn(p(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ua(e,i,s,o){i&=~Bf,i&=~hs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var f=i;0<f;){var p=31-zt(f),E=1<<p;o[p]=-1,f&=~E}s!==0&&_t(e,s,i)}function nc(){return(Ne&6)===0?(No(0),!1):!0}function kf(){if(Se!==null){if(Pe===0)var e=Se.return;else e=Se,Zi=rs=null,rf(e),Ks=null,Eo=0,e=Se;for(;e!==null;)Tg(e.alternate,e),e=e.return;Se=null}}function ar(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ty(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),kf(),qe=e,Se=s=qi(e.current,null),be=i,Pe=0,ti=null,Ra=!1,tr=Ct(e,i),zf=!1,er=pi=Bf=hs=wa=nn=0,qn=Uo=null,If=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var f=31-zt(o),p=1<<f;i|=e[f],o&=~p}return ia=i,Tl(),s}function qg(e,i){_e=null,B.H=kl,i===po||i===Nl?(i=cm(),Pe=3):i===rm?(i=cm(),Pe=4):Pe=i===ug?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,Se===null&&(nn=1,jl(e,ci(i,e.current)))}function Yg(){var e=B.H;return B.H=kl,e===null?kl:e}function jg(){var e=B.A;return B.A=ay,e}function Xf(){nn=4,Ra||(be&4194048)!==be&&di.current!==null||(tr=!0),(wa&134217727)===0&&(hs&134217727)===0||qe===null||Ua(qe,be,pi,!1)}function Wf(e,i,s){var o=Ne;Ne|=2;var f=Yg(),p=jg();(qe!==e||be!==i)&&(ec=null,ar(e,i)),i=!1;var E=nn;t:do try{if(Pe!==0&&Se!==null){var A=Se,I=ti;switch(Pe){case 8:kf(),E=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(i=!0);var $=Pe;if(Pe=0,ti=null,sr(e,A,I,$),s&&tr){E=0;break t}break;default:$=Pe,Pe=0,ti=null,sr(e,A,I,$)}}oy(),E=nn;break}catch(dt){qg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Zi=rs=null,Ne=o,B.H=f,B.A=p,Se===null&&(qe=null,be=0,Tl()),E}function oy(){for(;Se!==null;)Zg(Se)}function ly(e,i){var s=Ne;Ne|=2;var o=Yg(),f=jg();qe!==e||be!==i?(ec=null,tc=Ot()+500,ar(e,i)):tr=Ct(e,i);t:do try{if(Pe!==0&&Se!==null){i=Se;var p=ti;e:switch(Pe){case 1:Pe=0,ti=null,sr(e,i,p,1);break;case 2:case 9:if(om(p)){Pe=0,ti=null,Kg(i);break}i=function(){Pe!==2&&Pe!==9||qe!==e||(Pe=7),Oi(e)},p.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:om(p)?(Pe=0,ti=null,Kg(i)):(Pe=0,ti=null,sr(e,i,p,7));break;case 5:var E=null;switch(Se.tag){case 26:E=Se.memoizedState;case 5:case 27:var A=Se;if(!E||U0(E)){Pe=0,ti=null;var I=A.sibling;if(I!==null)Se=I;else{var $=A.return;$!==null?(Se=$,ic($)):Se=null}break e}}Pe=0,ti=null,sr(e,i,p,5);break;case 6:Pe=0,ti=null,sr(e,i,p,6);break;case 8:kf(),nn=6;break t;default:throw Error(a(462))}}cy();break}catch(dt){qg(e,dt)}while(!0);return Zi=rs=null,B.H=o,B.A=f,Ne=s,Se!==null?0:(qe=null,be=0,Tl(),nn)}function cy(){for(;Se!==null&&!ce();)Zg(Se)}function Zg(e){var i=Sg(e.alternate,e,ia);e.memoizedProps=e.pendingProps,i===null?ic(e):Se=i}function Kg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=gg(s,i,i.pendingProps,i.type,void 0,be);break;case 11:i=gg(s,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:rf(i);default:Tg(s,i),i=Se=Qp(i,ia),i=Sg(s,i,ia)}e.memoizedProps=e.pendingProps,i===null?ic(e):Se=i}function sr(e,i,s,o){Zi=rs=null,rf(i),Ks=null,Eo=0;var f=i.return;try{if(Jx(e,f,i,s,be)){nn=1,jl(e,ci(s,e.current)),Se=null;return}}catch(p){if(f!==null)throw Se=f,p;nn=1,jl(e,ci(s,e.current)),Se=null;return}i.flags&32768?(Ue||o===1?e=!0:tr||(be&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(i,e)):ic(i)}function ic(e){var i=e;do{if((i.flags&32768)!==0){Qg(i,Ra);return}e=i.return;var s=ty(i.alternate,i,ia);if(s!==null){Se=s;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);nn===0&&(nn=5)}function Qg(e,i){do{var s=ey(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);nn=6,Se=null}function Jg(e,i,s,o,f,p,E,A,I){e.cancelPendingCommit=null;do ac();while(wn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=Pu,Et(e,s,p,E,A,I),e===qe&&(Se=qe=null,be=0),nr=i,Da=e,ir=s,Hf=p,Gf=f,Vg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dy(Ke,function(){return i0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,f=nt.p,nt.p=2,E=Ne,Ne|=4;try{ny(e,i,s)}finally{Ne=E,nt.p=f,B.T=o}}wn=1,$g(),t0(),e0()}}function $g(){if(wn===1){wn=0;var e=Da,i=nr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var o=nt.p;nt.p=2;var f=Ne;Ne|=4;try{Og(i,e);var p=ih,E=Gp(e.containerInfo),A=p.focusedElem,I=p.selectionRange;if(E!==A&&A&&A.ownerDocument&&Hp(A.ownerDocument.documentElement,A)){if(I!==null&&Cu(A)){var $=I.start,dt=I.end;if(dt===void 0&&(dt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(dt,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var st=at.getSelection(),se=A.textContent.length,te=Math.min(I.start,se),He=I.end===void 0?te:Math.min(I.end,se);!st.extend&&te>He&&(E=He,He=te,te=E);var Y=Fp(A,te),V=Fp(A,He);if(Y&&V&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var J=gt.createRange();J.setStart(Y.node,Y.offset),st.removeAllRanges(),te>He?(st.addRange(J),st.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),st.addRange(J))}}}}for(gt=[],st=A;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var pt=gt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}gc=!!nh,ih=nh=null}finally{Ne=f,nt.p=o,B.T=s}}e.current=i,wn=2}}function t0(){if(wn===2){wn=0;var e=Da,i=nr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var o=nt.p;nt.p=2;var f=Ne;Ne|=4;try{Ug(e,i.alternate,i)}finally{Ne=f,nt.p=o,B.T=s}}wn=3}}function e0(){if(wn===4||wn===3){wn=0,ie();var e=Da,i=nr,s=ir,o=Vg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,nr=Da=null,n0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ca=null),Le(s),i=i.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=B.T,f=nt.p,nt.p=2,B.T=null;try{for(var p=e.onRecoverableError,E=0;E<o.length;E++){var A=o[E];p(A.value,{componentStack:A.stack})}}finally{B.T=i,nt.p=f}}(ir&3)!==0&&ac(),Oi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===Vf?Lo++:(Lo=0,Vf=e):Lo=0,No(0)}}function n0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,fo(i)))}function ac(e){return $g(),t0(),e0(),i0()}function i0(){if(wn!==5)return!1;var e=Da,i=Hf;Hf=0;var s=Le(ir),o=B.T,f=nt.p;try{nt.p=32>s?32:s,B.T=null,s=Gf,Gf=null;var p=Da,E=ir;if(wn=0,nr=Da=null,ir=0,(Ne&6)!==0)throw Error(a(331));var A=Ne;if(Ne|=4,Hg(p.current),Bg(p,p.current,E,s),Ne=A,No(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,p)}catch{}return!0}finally{nt.p=f,B.T=o,n0(e,i)}}function a0(e,i,s){i=ci(s,i),i=yf(e.stateNode,i,2),e=ya(e,i,2),e!==null&&(Bt(e,2),Oi(e))}function ke(e,i,s){if(e.tag===3)a0(e,e,s);else for(;i!==null;){if(i.tag===3){a0(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ci(s,e),s=lg(2),o=ya(i,s,2),o!==null&&(cg(s,o,i,e),Bt(o,2),Oi(o));break}}i=i.return}}function qf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new sy;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(s)||(zf=!0,f.add(s),e=uy.bind(null,e,i,s),i.then(e,e))}function uy(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(be&s)===s&&(nn===4||nn===3&&(be&62914560)===be&&300>Ot()-Ff?(Ne&2)===0&&ar(e,0):Bf|=s,er===be&&(er=0)),Oi(e)}function s0(e,i){i===0&&(i=bt()),e=Hs(e,i),e!==null&&(Bt(e,i),Oi(e))}function fy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),s0(e,s)}function hy(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),s0(e,s)}function dy(e,i){return F(e,i)}var sc=null,rr=null,Yf=!1,rc=!1,jf=!1,ds=0;function Oi(e){e!==rr&&e.next===null&&(rr===null?sc=rr=e:rr=rr.next=e),rc=!0,Yf||(Yf=!0,my())}function No(e,i){if(!jf&&rc){jf=!0;do for(var s=!1,o=sc;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var p=0;else{var E=o.suspendedLanes,A=o.pingedLanes;p=(1<<31-zt(42|e)+1)-1,p&=f&~(E&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,c0(o,p))}else p=be,p=kt(o,o===qe?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||Ct(o,p)||(s=!0,c0(o,p));o=o.next}while(s);jf=!1}}function py(){r0()}function r0(){rc=Yf=!1;var e=0;ds!==0&&(Ey()&&(e=ds),ds=0);for(var i=Ot(),s=null,o=sc;o!==null;){var f=o.next,p=o0(o,i);p===0?(o.next=null,s===null?sc=f:s.next=f,f===null&&(rr=s)):(s=o,(e!==0||(p&3)!==0)&&(rc=!0)),o=f}No(e)}function o0(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var E=31-zt(p),A=1<<E,I=f[E];I===-1?((A&s)===0||(A&o)!==0)&&(f[E]=fe(A,i)):I<=i&&(e.expiredLanes|=A),p&=~A}if(i=qe,s=be,s=kt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&ze(o),Le(s)){case 2:case 8:s=ue;break;case 32:s=Ke;break;case 268435456:s=P;break;default:s=Ke}return o=l0.bind(null,e),s=F(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function l0(e,i){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(ac()&&e.callbackNode!==s)return null;var o=be;return o=kt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Xg(e,o,i),o0(e,Ot()),e.callbackNode!=null&&e.callbackNode===s?l0.bind(null,e):null)}function c0(e,i){if(ac())return null;Xg(e,i,!0)}function my(){by(function(){(Ne&6)!==0?F(Vt,py):r0()})}function Zf(){return ds===0&&(ds=X()),ds}function u0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function f0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function gy(e,i,s,o,f){if(i==="submit"&&s&&s.stateNode===f){var p=u0((f[$e]||null).action),E=o.submitter;E&&(i=(i=E[$e]||null)?u0(i.formAction):E.getAttribute("formAction"),i!==null&&(p=i,E=null));var A=new Ml("action","action",null,o,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ds!==0){var I=E?f0(f,E):new FormData(f);mf(s,{pending:!0,data:I,method:f.method,action:p},null,I)}}else typeof p=="function"&&(A.preventDefault(),I=E?f0(f,E):new FormData(f),mf(s,{pending:!0,data:I,method:f.method,action:p},p,I))},currentTarget:f}]})}}for(var Kf=0;Kf<Nu.length;Kf++){var Qf=Nu[Kf],vy=Qf.toLowerCase(),_y=Qf[0].toUpperCase()+Qf.slice(1);xi(vy,"on"+_y)}xi(Xp,"onAnimationEnd"),xi(Wp,"onAnimationIteration"),xi(qp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Ox,"onTransitionRun"),xi(zx,"onTransitionStart"),xi(Bx,"onTransitionCancel"),xi(Yp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function h0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],f=o.event;o=o.listeners;t:{var p=void 0;if(i)for(var E=o.length-1;0<=E;E--){var A=o[E],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=$;try{p(f)}catch(dt){Yl(dt)}f.currentTarget=null,p=I}else for(E=0;E<o.length;E++){if(A=o[E],I=A.instance,$=A.currentTarget,A=A.listener,I!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=$;try{p(f)}catch(dt){Yl(dt)}f.currentTarget=null,p=I}}}}function Ee(e,i){var s=i[Ds];s===void 0&&(s=i[Ds]=new Set);var o=e+"__bubble";s.has(o)||(d0(i,e,2,!1),s.add(o))}function Jf(e,i,s){var o=0;i&&(o|=4),d0(s,e,o,i)}var oc="_reactListening"+Math.random().toString(36).slice(2);function $f(e){if(!e[oc]){e[oc]=!0,ml.forEach(function(s){s!=="selectionchange"&&(xy.has(s)||Jf(s,!1,e),Jf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[oc]||(i[oc]=!0,Jf("selectionchange",!1,i))}}function d0(e,i,s,o){switch(B0(i)){case 2:var f=qy;break;case 8:f=Yy;break;default:f=dh}s=f.bind(null,i,s,e),f=void 0,!yu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function th(e,i,s,o,f){var p=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var A=o.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=o.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=Xi(A),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){o=p=E;continue t}A=A.parentNode}}o=o.return}yp(function(){var $=p,dt=_u(s),gt=[];t:{var at=jp.get(e);if(at!==void 0){var st=Ml,se=e;switch(e){case"keypress":if(xl(s)===0)break t;case"keydown":case"keyup":st=dx;break;case"focusin":se="focus",st=Tu;break;case"focusout":se="blur",st=Tu;break;case"beforeblur":case"afterblur":st=Tu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=gx;break;case Xp:case Wp:case qp:st=ax;break;case Yp:st=_x;break;case"scroll":case"scrollend":st=$_;break;case"wheel":st=yx;break;case"copy":case"cut":case"paste":st=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=bp;break;case"toggle":case"beforetoggle":st=Sx}var te=(i&4)!==0,He=!te&&(e==="scroll"||e==="scrollend"),Y=te?at!==null?at+"Capture":null:at;te=[];for(var V=$,J;V!==null;){var pt=V;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=Jr(V,Y),pt!=null&&te.push(Oo(V,pt,J))),He)break;V=V.return}0<te.length&&(at=new st(at,se,null,s,dt),gt.push({event:at,listeners:te}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&s!==vu&&(se=s.relatedTarget||s.fromElement)&&(Xi(se)||se[Ci]))break t;if((st||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(se=s.relatedTarget||s.toElement,st=$,se=se?Xi(se):null,se!==null&&(He=c(se),te=se.tag,se!==He||te!==5&&te!==27&&te!==6)&&(se=null)):(st=null,se=$),st!==se)){if(te=Ep,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=bp,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),He=st==null?at:Qa(st),J=se==null?at:Qa(se),at=new te(pt,V+"leave",st,s,dt),at.target=He,at.relatedTarget=J,pt=null,Xi(dt)===$&&(te=new te(Y,V+"enter",se,s,dt),te.target=J,te.relatedTarget=He,pt=te),He=pt,st&&se)e:{for(te=st,Y=se,V=0,J=te;J;J=or(J))V++;for(J=0,pt=Y;pt;pt=or(pt))J++;for(;0<V-J;)te=or(te),V--;for(;0<J-V;)Y=or(Y),J--;for(;V--;){if(te===Y||Y!==null&&te===Y.alternate)break e;te=or(te),Y=or(Y)}te=null}else te=null;st!==null&&p0(gt,at,st,te,!1),se!==null&&He!==null&&p0(gt,He,se,te,!0)}}t:{if(at=$?Qa($):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ft=Np;else if(Up(at))if(Pp)Ft=Lx;else{Ft=Dx;var xe=Cx}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&gu($.elementType)&&(Ft=Np):Ft=Ux;if(Ft&&(Ft=Ft(e,$))){Lp(gt,Ft,s,dt);break t}xe&&xe(e,at,$),e==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Un(at,"number",at.value)}switch(xe=$?Qa($):window,e){case"focusin":(Up(xe)||xe.contentEditable==="true")&&(Bs=xe,Du=$,ro=null);break;case"focusout":ro=Du=Bs=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Vp(gt,s,dt);break;case"selectionchange":if(Px)break;case"keydown":case"keyup":Vp(gt,s,dt)}var Zt;if(Au)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else zs?Cp(e,s)&&(ne="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ne="onCompositionStart");ne&&(Ap&&s.locale!=="ko"&&(zs||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&zs&&(Zt=Mp()):(ga=dt,Mu="value"in ga?ga.value:ga.textContent,zs=!0)),xe=lc($,ne),0<xe.length&&(ne=new Tp(ne,e,null,s,dt),gt.push({event:ne,listeners:xe}),Zt?ne.data=Zt:(Zt=Dp(s),Zt!==null&&(ne.data=Zt)))),(Zt=Tx?bx(e,s):Ax(e,s))&&(ne=lc($,"onBeforeInput"),0<ne.length&&(xe=new Tp("onBeforeInput","beforeinput",null,s,dt),gt.push({event:xe,listeners:ne}),xe.data=Zt)),gy(gt,e,$,s,dt)}h0(gt,i)})}function Oo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function lc(e,i){for(var s=i+"Capture",o=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Jr(e,s),f!=null&&o.unshift(Oo(e,f,p)),f=Jr(e,i),f!=null&&o.push(Oo(e,f,p))),e.tag===3)return o;e=e.return}return[]}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p0(e,i,s,o,f){for(var p=i._reactName,E=[];s!==null&&s!==o;){var A=s,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||$===null||(I=$,f?($=Jr(s,p),$!=null&&E.unshift(Oo(s,$,I))):f||($=Jr(s,p),$!=null&&E.push(Oo(s,$,I)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var yy=/\r\n?/g,My=/\u0000|\uFFFD/g;function m0(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(My,"")}function g0(e,i){return i=m0(i),m0(e)===i}function cc(){}function Fe(e,i,s,o,f,p){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Vn(e,""+o);break;case"className":It(e,"class",o);break;case"tabIndex":It(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,s,o);break;case"style":_p(e,o,p);break;case"data":if(i!=="object"){It(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=vl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Fe(e,i,"name",f.name,f,null),Fe(e,i,"formEncType",f.formEncType,f,null),Fe(e,i,"formMethod",f.formMethod,f,null),Fe(e,i,"formTarget",f.formTarget,f,null)):(Fe(e,i,"encType",f.encType,f,null),Fe(e,i,"method",f.method,f,null),Fe(e,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=vl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=cc);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=vl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Dt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Dt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Q_.get(s)||s,Dt(e,s,o))}}function eh(e,i,s,o,f,p){switch(s){case"style":_p(e,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=cc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),p=e[$e]||null,p=p!=null?p[s]:null,typeof p=="function"&&e.removeEventListener(i,p,f),typeof o=="function")){typeof p!="function"&&p!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,f);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Dt(e,s,o)}}}function Cn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var E=s[p];if(E!=null)switch(p){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,p,E,s,null)}}f&&Fe(e,i,"srcSet",s.srcSet,s,null),o&&Fe(e,i,"src",s.src,s,null);return;case"input":Ee("invalid",e);var A=p=E=f=null,I=null,$=null;for(o in s)if(s.hasOwnProperty(o)){var dt=s[o];if(dt!=null)switch(o){case"name":f=dt;break;case"type":E=dt;break;case"checked":I=dt;break;case"defaultChecked":$=dt;break;case"value":p=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Fe(e,i,o,dt,s,null)}}Bn(e,p,A,I,$,E,f,!1),Me(e);return;case"select":Ee("invalid",e),o=E=p=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":E=A;break;case"multiple":o=A;default:Fe(e,i,f,A,s,null)}i=p,s=E,e.multiple=!!o,i!=null?tn(e,!!o,i,!1):s!=null&&tn(e,!!o,s,!0);return;case"textarea":Ee("invalid",e),p=f=o=null;for(E in s)if(s.hasOwnProperty(E)&&(A=s[E],A!=null))switch(E){case"value":o=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Fe(e,i,E,A,s,null)}Ns(e,o,f,p),Me(e);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(o=s[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,i,I,o,s,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)Ee(Po[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(o=s[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,$,o,s,null)}return;default:if(gu(i)){for(dt in s)s.hasOwnProperty(dt)&&(o=s[dt],o!==void 0&&eh(e,i,dt,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&Fe(e,i,A,o,s,null))}function Sy(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,E=null,A=null,I=null,$=null,dt=null;for(st in s){var gt=s[st];if(s.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(st)||Fe(e,i,st,null,o,gt)}}for(var at in o){var st=o[at];if(gt=s[at],o.hasOwnProperty(at)&&(st!=null||gt!=null))switch(at){case"type":p=st;break;case"name":f=st;break;case"checked":$=st;break;case"defaultChecked":dt=st;break;case"value":E=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==gt&&Fe(e,i,at,st,o,gt)}}Ve(e,E,A,I,$,dt,p,f);return;case"select":st=E=A=at=null;for(p in s)if(I=s[p],s.hasOwnProperty(p)&&I!=null)switch(p){case"value":break;case"multiple":st=I;default:o.hasOwnProperty(p)||Fe(e,i,p,null,o,I)}for(f in o)if(p=o[f],I=s[f],o.hasOwnProperty(f)&&(p!=null||I!=null))switch(f){case"value":at=p;break;case"defaultValue":A=p;break;case"multiple":E=p;default:p!==I&&Fe(e,i,f,p,o,I)}i=A,s=E,o=st,at!=null?tn(e,!!s,at,!1):!!o!=!!s&&(i!=null?tn(e,!!s,i,!0):tn(e,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,i,A,null,o,f)}for(E in o)if(f=o[E],p=s[E],o.hasOwnProperty(E)&&(f!=null||p!=null))switch(E){case"value":at=f;break;case"defaultValue":st=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==p&&Fe(e,i,E,f,o,p)}An(e,at,st);return;case"option":for(var se in s)if(at=s[se],s.hasOwnProperty(se)&&at!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Fe(e,i,se,null,o,at)}for(I in o)if(at=o[I],st=s[I],o.hasOwnProperty(I)&&at!==st&&(at!=null||st!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(e,i,I,at,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)at=s[te],s.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Fe(e,i,te,null,o,at);for($ in o)if(at=o[$],st=s[$],o.hasOwnProperty($)&&at!==st&&(at!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Fe(e,i,$,at,o,st)}return;default:if(gu(i)){for(var He in s)at=s[He],s.hasOwnProperty(He)&&at!==void 0&&!o.hasOwnProperty(He)&&eh(e,i,He,void 0,o,at);for(dt in o)at=o[dt],st=s[dt],!o.hasOwnProperty(dt)||at===st||at===void 0&&st===void 0||eh(e,i,dt,at,o,st);return}}for(var Y in s)at=s[Y],s.hasOwnProperty(Y)&&at!=null&&!o.hasOwnProperty(Y)&&Fe(e,i,Y,null,o,at);for(gt in o)at=o[gt],st=s[gt],!o.hasOwnProperty(gt)||at===st||at==null&&st==null||Fe(e,i,gt,at,o,st)}var nh=null,ih=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function v0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ah(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sh=null;function Ey(){var e=window.event;return e&&e.type==="popstate"?e===sh?!1:(sh=e,!0):(sh=null,!1)}var x0=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(e){return y0.resolve(null).then(e).catch(Ay)}:x0;function Ay(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function M0(e,i){var s=i,o=0,f=0;do{var p=s.nextSibling;if(e.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"){if(0<o&&8>o){s=o;var E=e.ownerDocument;if(s&1&&zo(E.documentElement),s&2&&zo(E.body),s&4)for(s=E.head,zo(s),E=s.firstChild;E;){var A=E.nextSibling,I=E.nodeName;E[Di]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=A}}if(f===0){e.removeChild(p),Xo(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:o=s.charCodeAt(0)-48;else o=0;s=p}while(s);Xo(i)}function rh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":rh(s),Ls(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Ry(e,i,s,o){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Di])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function wy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Mi(e.nextSibling),e===null))return null;return e}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cy(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var lh=null;function S0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function E0(e,i,s){switch(i=uc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function zo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ls(e)}var mi=new Map,T0=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=nt.d;nt.d={f:Dy,r:Uy,D:Ly,C:Ny,L:Py,m:Oy,X:By,S:zy,M:Iy};function Dy(){var e=aa.f(),i=nc();return e||i}function Uy(e){var i=pa(e);i!==null&&i.tag===5&&i.type==="form"?Xm(i):aa.r(e)}var lr=typeof document>"u"?null:document;function b0(e,i,s){var o=lr;if(o&&typeof i=="string"&&i){var f=Mn(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),T0.has(f)||(T0.add(f),e={rel:e,crossOrigin:s,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),Cn(i,"link",e),ln(i),o.head.appendChild(i)))}}function Ly(e){aa.D(e),b0("dns-prefetch",e,null)}function Ny(e,i){aa.C(e,i),b0("preconnect",e,i)}function Py(e,i,s){aa.L(e,i,s);var o=lr;if(o&&e&&i){var f='link[rel="preload"][as="'+Mn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Mn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Mn(s.imageSizes)+'"]')):f+='[href="'+Mn(e)+'"]';var p=f;switch(i){case"style":p=cr(e);break;case"script":p=ur(e)}mi.has(p)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),mi.set(p,e),o.querySelector(f)!==null||i==="style"&&o.querySelector(Bo(p))||i==="script"&&o.querySelector(Io(p))||(i=o.createElement("link"),Cn(i,"link",e),ln(i),o.head.appendChild(i)))}}function Oy(e,i){aa.m(e,i);var s=lr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Mn(o)+'"][href="'+Mn(e)+'"]',p=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ur(e)}if(!mi.has(p)&&(e=g({rel:"modulepreload",href:e},i),mi.set(p,e),s.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Io(p)))return}o=s.createElement("link"),Cn(o,"link",e),ln(o),s.head.appendChild(o)}}}function zy(e,i,s){aa.S(e,i,s);var o=lr;if(o&&e){var f=ma(o).hoistableStyles,p=cr(e);i=i||"default";var E=f.get(p);if(!E){var A={loading:0,preload:null};if(E=o.querySelector(Bo(p)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=mi.get(p))&&ch(e,s);var I=E=o.createElement("link");ln(I),Cn(I,"link",e),I._p=new Promise(function($,dt){I.onload=$,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hc(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(p,E)}}}function By(e,i){aa.X(e,i);var s=lr;if(s&&e){var o=ma(s).hoistableScripts,f=ur(e),p=o.get(f);p||(p=s.querySelector(Io(f)),p||(e=g({src:e,async:!0},i),(i=mi.get(f))&&uh(e,i),p=s.createElement("script"),ln(p),Cn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(f,p))}}function Iy(e,i){aa.M(e,i);var s=lr;if(s&&e){var o=ma(s).hoistableScripts,f=ur(e),p=o.get(f);p||(p=s.querySelector(Io(f)),p||(e=g({src:e,async:!0,type:"module"},i),(i=mi.get(f))&&uh(e,i),p=s.createElement("script"),ln(p),Cn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(f,p))}}function A0(e,i,s,o){var f=(f=it.current)?fc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=cr(s.href),s=ma(f).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=cr(s.href);var p=ma(f).hoistableStyles,E=p.get(e);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,E),(p=f.querySelector(Bo(e)))&&!p._p&&(E.instance=p,E.state.loading=5),mi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},mi.set(e,s),p||Fy(f,e,s,E.state))),i&&o===null)throw Error(a(528,""));return E}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ur(s),s=ma(f).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function cr(e){return'href="'+Mn(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function R0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Fy(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",s),ln(i),e.head.appendChild(i))}function ur(e){return'[src="'+Mn(e)+'"]'}function Io(e){return"script[async]"+e}function w0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Mn(s.href)+'"]');if(o)return i.instance=o,ln(o),o;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ln(o),Cn(o,"style",f),hc(o,s.precedence,e),i.instance=o;case"stylesheet":f=cr(s.href);var p=e.querySelector(Bo(f));if(p)return i.state.loading|=4,i.instance=p,ln(p),p;o=R0(s),(f=mi.get(f))&&ch(o,f),p=(e.ownerDocument||e).createElement("link"),ln(p);var E=p;return E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Cn(p,"link",o),i.state.loading|=4,hc(p,s.precedence,e),i.instance=p;case"script":return p=ur(s.src),(f=e.querySelector(Io(p)))?(i.instance=f,ln(f),f):(o=s,(f=mi.get(p))&&(o=g({},s),uh(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),ln(f),Cn(f,"link",o),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,hc(o,s.precedence,e));return i.instance}function hc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,p=f,E=0;E<o.length;E++){var A=o[E];if(A.dataset.precedence===i)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var dc=null;function C0(e,i,s){if(dc===null){var o=new Map,f=dc=new Map;f.set(s,o)}else f=dc,o=f.get(s),o||(o=new Map,f.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var p=s[f];if(!(p[Di]||p[pn]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(i)||"";E=e+E;var A=o.get(E);A?A.push(p):o.set(E,[p])}}return o}function D0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Hy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function U0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Fo=null;function Gy(){}function Vy(e,i,s){if(Fo===null)throw Error(a(475));var o=Fo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=cr(s.href),p=e.querySelector(Bo(f));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=pc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=p,ln(p);return}p=e.ownerDocument||e,s=R0(s),(f=mi.get(f))&&ch(s,f),p=p.createElement("link"),ln(p);var E=p;E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Cn(p,"link",s),i.instance=p}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=pc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function ky(){if(Fo===null)throw Error(a(475));var e=Fo;return e.stylesheets&&e.count===0&&fh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&fh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function pc(){if(this.count--,this.count===0){if(this.stylesheets)fh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mc=null;function fh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mc=new Map,i.forEach(Xy,e),mc=null,pc.call(e))}function Xy(e,i){if(!(i.state.loading&4)){var s=mc.get(e);if(s)var o=s.get(null);else{s=new Map,mc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var E=f[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),o=E)}o&&s.set(null,o)}f=i.instance,E=f.getAttribute("data-precedence"),p=s.get(E)||o,p===o&&s.set(null,f),s.set(E,f),this.count++,o=pc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Ho={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Wy(e,i,s,o,f,p,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function L0(e,i,s,o,f,p,E,A,I,$,dt,gt){return e=new Wy(e,i,s,E,A,I,$,gt),i=1,p===!0&&(i|=24),p=Qn(3,null,null,i),e.current=p,p.stateNode=e,i=Wu(),i.refCount++,e.pooledCache=i,i.refCount++,p.memoizedState={element:o,isDehydrated:s,cache:i},Zu(p),e}function N0(e){return e?(e=Gs,e):Gs}function P0(e,i,s,o,f,p){f=N0(f),o.context===null?o.context=f:o.pendingContext=f,o=xa(i),o.payload={element:s},p=p===void 0?null:p,p!==null&&(o.callback=p),s=ya(e,o,i),s!==null&&(ni(s,e,i),go(s,e,i))}function O0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function hh(e,i){O0(e,i),(e=e.alternate)&&O0(e,i)}function z0(e){if(e.tag===13){var i=Hs(e,67108864);i!==null&&ni(i,e,67108864),hh(e,67108864)}}var gc=!0;function qy(e,i,s,o){var f=B.T;B.T=null;var p=nt.p;try{nt.p=2,dh(e,i,s,o)}finally{nt.p=p,B.T=f}}function Yy(e,i,s,o){var f=B.T;B.T=null;var p=nt.p;try{nt.p=8,dh(e,i,s,o)}finally{nt.p=p,B.T=f}}function dh(e,i,s,o){if(gc){var f=ph(o);if(f===null)th(e,i,o,vc,s),I0(e,o);else if(Zy(f,e,i,s,o))o.stopPropagation();else if(I0(e,o),i&4&&-1<jy.indexOf(e)){for(;f!==null;){var p=pa(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=Kt(p.pendingLanes);if(E!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var I=1<<31-zt(E);A.entanglements[1]|=I,E&=~I}Oi(p),(Ne&6)===0&&(tc=Ot()+500,No(0))}}break;case 13:A=Hs(p,2),A!==null&&ni(A,p,2),nc(),hh(p,2)}if(p=ph(o),p===null&&th(e,i,o,vc,s),p===f)break;f=p}f!==null&&o.stopPropagation()}else th(e,i,o,null,s)}}function ph(e){return e=_u(e),mh(e)}var vc=null;function mh(e){if(vc=null,e=Xi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return vc=e,null}function B0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Vt:return 2;case ue:return 8;case Ke:case Qe:return 32;case P:return 268435456;default:return 32}default:return 32}}var gh=!1,Na=null,Pa=null,Oa=null,Go=new Map,Vo=new Map,za=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(e,i){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Go.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(i.pointerId)}}function ko(e,i,s,o,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:p,targetContainers:[f]},i!==null&&(i=pa(i),i!==null&&z0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function Zy(e,i,s,o,f){switch(i){case"focusin":return Na=ko(Na,e,i,s,o,f),!0;case"dragenter":return Pa=ko(Pa,e,i,s,o,f),!0;case"mouseover":return Oa=ko(Oa,e,i,s,o,f),!0;case"pointerover":var p=f.pointerId;return Go.set(p,ko(Go.get(p)||null,e,i,s,o,f)),!0;case"gotpointercapture":return p=f.pointerId,Vo.set(p,ko(Vo.get(p)||null,e,i,s,o,f)),!0}return!1}function F0(e){var i=Xi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,vi(e.priority,function(){if(s.tag===13){var o=ei();o=re(o);var f=Hs(s,o);f!==null&&ni(f,s,o),hh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=ph(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);vu=o,s.target.dispatchEvent(o),vu=null}else return i=pa(s),i!==null&&z0(i),e.blockedOn=s,!1;i.shift()}return!0}function H0(e,i,s){_c(e)&&s.delete(i)}function Ky(){gh=!1,Na!==null&&_c(Na)&&(Na=null),Pa!==null&&_c(Pa)&&(Pa=null),Oa!==null&&_c(Oa)&&(Oa=null),Go.forEach(H0),Vo.forEach(H0)}function xc(e,i){e.blockedOn===i&&(e.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ky)))}var yc=null;function G0(e){yc!==e&&(yc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],f=e[i+2];if(typeof o!="function"){if(mh(o||s)===null)continue;break}var p=pa(s);p!==null&&(e.splice(i,3),i-=3,mf(p,{pending:!0,data:f,method:s.method,action:o},o,f))}}))}function Xo(e){function i(I){return xc(I,e)}Na!==null&&xc(Na,e),Pa!==null&&xc(Pa,e),Oa!==null&&xc(Oa,e),Go.forEach(i),Vo.forEach(i);for(var s=0;s<za.length;s++){var o=za[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(s=za[0],s.blockedOn===null);)F0(s),s.blockedOn===null&&za.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var f=s[o],p=s[o+1],E=f[$e]||null;if(typeof p=="function")E||G0(s);else if(E){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,E=p[$e]||null)A=E.formAction;else if(mh(f)!==null)continue}else A=E.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),G0(s)}}}function vh(e){this._internalRoot=e}Mc.prototype.render=vh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=ei();P0(s,o,e,i,null,null)},Mc.prototype.unmount=vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;P0(e.current,2,null,e,null,null),nc(),i[Ci]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ae();e={blockedOn:null,target:e,priority:i};for(var s=0;s<za.length&&i!==0&&i<za[s].priority;s++);za.splice(s,0,e),s===0&&F0(e)}};var V0=t.version;if(V0!=="19.1.1")throw Error(a(527,V0,"19.1.1"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var Qy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ht=Sc.inject(Qy),mt=Sc}catch{}}return Yo.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",f=ag,p=sg,E=rg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=L0(e,1,!1,null,null,s,o,f,p,E,A,null),e[Ci]=i.current,$f(e),new vh(i)},Yo.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,f="",p=ag,E=sg,A=rg,I=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=L0(e,1,!0,i,s??null,o,f,p,E,A,I,$),i.context=N0(null),s=i.current,o=ei(),o=re(o),f=xa(o),f.callback=null,ya(s,f,o),s=o,i.current.lanes=s,Bt(i,s),Oi(i),e[Ci]=i.current,$f(e),new Mc(i)},Yo.version="19.1.1",Yo}var J0;function oM(){if(J0)return yh.exports;J0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=rM(),yh.exports}var lM=oM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="180",cM=0,$0=1,uM=2,u_=1,fM=2,ua=3,Za=0,Zn=1,jn=2,fa=0,Ur=1,Pr=2,tv=3,ev=4,hM=5,Es=100,dM=101,pM=102,mM=103,gM=104,vM=200,_M=201,xM=202,yM=203,sd=204,rd=205,MM=206,SM=207,EM=208,TM=209,bM=210,AM=211,RM=212,wM=213,CM=214,od=0,ld=1,cd=2,Or=3,ud=4,fd=5,hd=6,dd=7,f_=0,DM=1,UM=2,ja=0,h_=1,d_=2,p_=3,fu=4,m_=5,g_=6,v_=7,__=300,zr=301,Br=302,pd=303,md=304,hu=306,gd=1e3,bs=1001,vd=1002,oi=1003,LM=1004,Ec=1005,Ii=1006,Th=1007,As=1008,Vi=1009,x_=1010,y_=1011,rl=1012,$d=1013,Rs=1014,Fi=1015,ha=1016,tp=1017,ep=1018,ol=1020,M_=35902,S_=35899,E_=1021,T_=1022,Ri=1023,ll=1026,cl=1027,np=1028,ip=1029,b_=1030,ap=1031,sp=1033,$c=33776,tu=33777,eu=33778,nu=33779,_d=35840,xd=35841,yd=35842,Md=35843,Sd=36196,Ed=37492,Td=37496,bd=37808,Ad=37809,Rd=37810,wd=37811,Cd=37812,Dd=37813,Ud=37814,Ld=37815,Nd=37816,Pd=37817,Od=37818,zd=37819,Bd=37820,Id=37821,Fd=36492,Hd=36494,Gd=36495,Vd=36283,kd=36284,Xd=36285,Wd=36286,NM=3200,PM=3201,A_=0,OM=1,Wa="",ri="srgb",Ir="srgb-linear",ou="linear",Oe="srgb",fr=7680,nv=519,zM=512,BM=513,IM=514,R_=515,FM=516,HM=517,GM=518,VM=519,iv=35044,av="300 es",Hi=2e3,lu=2001;class kr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sv=1234567;const il=Math.PI/180,Fr=180/Math.PI;function Xr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function ye(r,t,n){return Math.max(t,Math.min(n,r))}function rp(r,t){return(r%t+t)%t}function kM(r,t,n,a,l){return a+(r-t)*(l-a)/(n-t)}function XM(r,t,n){return r!==t?(n-r)/(t-r):0}function al(r,t,n){return(1-n)*r+n*t}function WM(r,t,n,a){return al(r,t,1-Math.exp(-n*a))}function qM(r,t=1){return t-Math.abs(rp(r,t*2)-t)}function YM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function jM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function ZM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function KM(r,t){return r+Math.random()*(t-r)}function QM(r){return r*(.5-Math.random())}function JM(r){r!==void 0&&(sv=r);let t=sv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $M(r){return r*il}function tS(r){return r*Fr}function eS(r){return(r&r-1)===0&&r!==0}function nS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function iS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function aS(r,t,n,a,l){const c=Math.cos,u=Math.sin,h=c(n/2),m=u(n/2),d=c((t+a)/2),g=u((t+a)/2),v=c((t-a)/2),_=u((t-a)/2),x=c((a-t)/2),S=u((a-t)/2);switch(l){case"XYX":r.set(h*g,m*v,m*_,h*d);break;case"YZY":r.set(m*_,h*g,m*v,h*d);break;case"ZXZ":r.set(m*v,m*_,h*g,h*d);break;case"XZX":r.set(h*g,m*S,m*x,h*d);break;case"YXY":r.set(m*x,h*g,m*S,h*d);break;case"ZYZ":r.set(m*S,m*x,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Rr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ya={DEG2RAD:il,RAD2DEG:Fr,generateUUID:Xr,clamp:ye,euclideanModulo:rp,mapLinear:kM,inverseLerp:XM,lerp:al,damp:WM,pingpong:qM,smoothstep:YM,smootherstep:jM,randInt:ZM,randFloat:KM,randFloatSpread:QM,seededRandom:JM,degToRad:$M,radToDeg:tS,isPowerOfTwo:eS,ceilPowerOfTwo:nS,floorPowerOfTwo:iS,setQuaternionFromProperEuler:aS,normalize:Fn,denormalize:Rr};class ae{constructor(t=0,n=0){ae.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*l+t.x,this.y=c*l+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wr{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,u,h){let m=a[l+0],d=a[l+1],g=a[l+2],v=a[l+3];const _=c[u+0],x=c[u+1],S=c[u+2],T=c[u+3];if(h===0){t[n+0]=m,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=S,t[n+3]=T;return}if(v!==T||m!==_||d!==x||g!==S){let M=1-h;const y=m*_+d*x+g*S+v*T,U=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const O=Math.sqrt(L),z=Math.atan2(O,y*U);M=Math.sin(M*z)/O,h=Math.sin(h*z)/O}const w=h*U;if(m=m*M+_*w,d=d*M+x*w,g=g*M+S*w,v=v*M+T*w,M===1-h){const O=1/Math.sqrt(m*m+d*d+g*g+v*v);m*=O,d*=O,g*=O,v*=O}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,l,c,u){const h=a[l],m=a[l+1],d=a[l+2],g=a[l+3],v=c[u],_=c[u+1],x=c[u+2],S=c[u+3];return t[n]=h*S+g*v+m*x-d*_,t[n+1]=m*S+g*_+d*v-h*x,t[n+2]=d*S+g*x+h*_-m*v,t[n+3]=g*S-h*v-m*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,d=h(a/2),g=h(l/2),v=h(c/2),_=m(a/2),x=m(l/2),S=m(c/2);switch(u){case"XYZ":this._x=_*g*v+d*x*S,this._y=d*x*v-_*g*S,this._z=d*g*S+_*x*v,this._w=d*g*v-_*x*S;break;case"YXZ":this._x=_*g*v+d*x*S,this._y=d*x*v-_*g*S,this._z=d*g*S-_*x*v,this._w=d*g*v+_*x*S;break;case"ZXY":this._x=_*g*v-d*x*S,this._y=d*x*v+_*g*S,this._z=d*g*S+_*x*v,this._w=d*g*v-_*x*S;break;case"ZYX":this._x=_*g*v-d*x*S,this._y=d*x*v+_*g*S,this._z=d*g*S-_*x*v,this._w=d*g*v+_*x*S;break;case"YZX":this._x=_*g*v+d*x*S,this._y=d*x*v+_*g*S,this._z=d*g*S-_*x*v,this._w=d*g*v-_*x*S;break;case"XZY":this._x=_*g*v-d*x*S,this._y=d*x*v-_*g*S,this._z=d*g*S+_*x*v,this._w=d*g*v+_*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],u=n[1],h=n[5],m=n[9],d=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-l)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(g-m)/x,this._x=.25*x,this._y=(l+u)/x,this._z=(c+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-d)/x,this._x=(l+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(u-l)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,u=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+l*d-c*m,this._y=l*g+u*m+c*h-a*d,this._z=c*g+u*d+a*m-l*h,this._w=u*g-a*h-l*m-c*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*l+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const d=Math.sqrt(m),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=l*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,n=0,a=0){W.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(rv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(rv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,u=t.y,h=t.z,m=t.w,d=2*(u*l-h*a),g=2*(h*n-c*l),v=2*(c*a-u*n);return this.x=n+m*d+u*v-h*g,this.y=a+m*g+h*d-c*v,this.z=l+m*v+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*u-a*m,this.z=a*h-l*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new W,rv=new Wr;class de{constructor(t,n,a,l,c,u,h,m,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,h,m,d)}set(t,n,a,l,c,u,h,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],d=a[1],g=a[4],v=a[7],_=a[2],x=a[5],S=a[8],T=l[0],M=l[3],y=l[6],U=l[1],L=l[4],w=l[7],O=l[2],z=l[5],H=l[8];return c[0]=u*T+h*U+m*O,c[3]=u*M+h*L+m*z,c[6]=u*y+h*w+m*H,c[1]=d*T+g*U+v*O,c[4]=d*M+g*L+v*z,c[7]=d*y+g*w+v*H,c[2]=_*T+x*U+S*O,c[5]=_*M+x*L+S*z,c[8]=_*y+x*w+S*H,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-a*c*g+a*h*m+l*c*d-l*u*m}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],v=g*u-h*d,_=h*m-g*c,x=d*c-u*m,S=n*v+a*_+l*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=v*T,t[1]=(l*d-g*a)*T,t[2]=(h*a-l*u)*T,t[3]=_*T,t[4]=(g*n-l*m)*T,t[5]=(l*c-h*n)*T,t[6]=x*T,t[7]=(a*m-d*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(a*m,a*d,-a*(m*u+d*h)+u+t,-l*d,l*m,-l*(-d*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ah.makeScale(t,n)),this}rotate(t){return this.premultiply(Ah.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ah.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new de;function w_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sS(){const r=cu("canvas");return r.style.display="block",r}const ov={};function ul(r){r in ov||(ov[r]=!0,console.warn(r))}function rS(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const lv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oS(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Oe&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Oe&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ul("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ul("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Ir]:{primaries:t,whitePoint:a,transfer:ou,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:a,transfer:Oe,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Re=oS();function da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hr;class lS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{hr===void 0&&(hr=cu("canvas")),hr.width=t.width,hr.height=t.height;const l=hr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=hr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=cu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=da(c[u]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(da(n[a]/255)*255):n[a]=da(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cS=0;class op{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,h=l.length;u<h;u++)l[u].isDataTexture?c.push(Rh(l[u].image)):c.push(Rh(l[u]))}else c=Rh(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uS=0;const wh=new W;class Gn extends kr{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,a=bs,l=bs,c=Ii,u=As,h=Ri,m=Vi,d=Gn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Xr(),this.name="",this.source=new op(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==__)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gd:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gd:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=__;Gn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,n=0,a=0,l=1){Ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*l+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*l+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*l+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*l+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const m=t.elements,d=m[0],g=m[4],v=m[8],_=m[1],x=m[5],S=m[9],T=m[2],M=m[6],y=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(S-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(S+M)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,w=(x+1)/2,O=(y+1)/2,z=(g+_)/4,H=(v+T)/4,k=(S+M)/4;return L>w&&L>O?L<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(L),l=z/a,c=H/a):w>O?w<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),a=z/l,c=k/l):O<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),a=H/c,l=k/c),this.set(a,l,c,n),this}let U=Math.sqrt((M-S)*(M-S)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(M-S)/U,this.y=(v-T)/U,this.z=(_-g)/U,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fS extends kr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n);const l={width:t,height:n,depth:a.depth},c=new Gn(l);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new op(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends fS{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class C_ extends Gn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hS extends Gn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Si):Si.fromBufferAttribute(c,u),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Tc.copy(a.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),bc.subVectors(this.max,jo),dr.subVectors(t.a,jo),pr.subVectors(t.b,jo),mr.subVectors(t.c,jo),Ia.subVectors(pr,dr),Fa.subVectors(mr,pr),ps.subVectors(dr,mr);let n=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-ps.z,ps.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,ps.z,0,-ps.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-ps.y,ps.x,0];return!Ch(n,dr,pr,mr,bc)||(n=[1,0,0,0,1,0,0,0,1],!Ch(n,dr,pr,mr,bc))?!1:(Ac.crossVectors(Ia,Fa),n=[Ac.x,Ac.y,Ac.z],Ch(n,dr,pr,mr,bc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,Tc=new Cs,dr=new W,pr=new W,mr=new W,Ia=new W,Fa=new W,ps=new W,jo=new W,bc=new W,Ac=new W,ms=new W;function Ch(r,t,n,a,l){for(let c=0,u=r.length-3;c<=u;c+=3){ms.fromArray(r,c);const h=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),d=n.dot(ms),g=a.dot(ms);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const dS=new Cs,Zo=new W,Dh=new W;class qr{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):dS.setFromPoints(t).getCenter(a);let l=0;for(let c=0,u=t.length;c<u;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(Zo,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Dh)),this.expandByPoint(Zo.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new W,Uh=new W,Rc=new W,Ha=new W,Lh=new W,wc=new W,Nh=new W;class D_{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){Uh.copy(t).add(n).multiplyScalar(.5),Rc.copy(n).sub(t).normalize(),Ha.copy(this.origin).sub(Uh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Rc),h=Ha.dot(this.direction),m=-Ha.dot(Rc),d=Ha.lengthSq(),g=Math.abs(1-u*u);let v,_,x,S;if(g>0)if(v=u*m-h,_=u*h-m,S=c*g,v>=0)if(_>=-S)if(_<=S){const T=1/g;v*=T,_*=T,x=v*(v+u*_+2*h)+_*(u*v+_+2*m)+d}else _=c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*m)+d;else _=-c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*m)+d;else _<=-S?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+d):_<=S?(v=0,_=Math.min(Math.max(-c,-m),c),x=_*(_+2*m)+d):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+d);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*m)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Uh).addScaledVector(Rc,_),x}intersectSphere(t,n){ra.subVectors(t.center,this.origin);const a=ra.dot(this.direction),l=ra.dot(ra)-a*a,c=t.radius*t.radius;if(l>c)return null;const u=Math.sqrt(c-l),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(a=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>l||((c>a||isNaN(a))&&(a=c),(u<l||isNaN(l))&&(l=u),v>=0?(h=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,n,a,l,c){Lh.subVectors(n,t),wc.subVectors(a,t),Nh.crossVectors(Lh,wc);let u=this.direction.dot(Nh),h;if(u>0){if(l)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ha.subVectors(this.origin,t);const m=h*this.direction.dot(wc.crossVectors(Ha,wc));if(m<0)return null;const d=h*this.direction.dot(Lh.cross(Ha));if(d<0||m+d>u)return null;const g=-h*Ha.dot(Nh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,n,a,l,c,u,h,m,d,g,v,_,x,S,T,M){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,h,m,d,g,v,_,x,S,T,M)}set(t,n,a,l,c,u,h,m,d,g,v,_,x,S,T,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=l,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=S,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,l=1/gr.setFromMatrixColumn(t,0).length(),c=1/gr.setFromMatrixColumn(t,1).length(),u=1/gr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,S=h*g,T=h*v;n[0]=m*g,n[4]=-m*v,n[8]=d,n[1]=x+S*d,n[5]=_-T*d,n[9]=-h*m,n[2]=T-_*d,n[6]=S+x*d,n[10]=u*m}else if(t.order==="YXZ"){const _=m*g,x=m*v,S=d*g,T=d*v;n[0]=_+T*h,n[4]=S*h-x,n[8]=u*d,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=x*h-S,n[6]=T+_*h,n[10]=u*m}else if(t.order==="ZXY"){const _=m*g,x=m*v,S=d*g,T=d*v;n[0]=_-T*h,n[4]=-u*v,n[8]=S+x*h,n[1]=x+S*h,n[5]=u*g,n[9]=T-_*h,n[2]=-u*d,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const _=u*g,x=u*v,S=h*g,T=h*v;n[0]=m*g,n[4]=S*d-x,n[8]=_*d+T,n[1]=m*v,n[5]=T*d+_,n[9]=x*d-S,n[2]=-d,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const _=u*m,x=u*d,S=h*m,T=h*d;n[0]=m*g,n[4]=T-_*v,n[8]=S*v+x,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+S,n[10]=_-T*v}else if(t.order==="XZY"){const _=u*m,x=u*d,S=h*m,T=h*d;n[0]=m*g,n[4]=-v,n[8]=d*g,n[1]=_*v+T,n[5]=u*g,n[9]=x*v-S,n[2]=S*v-x,n[6]=h*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pS,t,mS)}lookAt(t,n,a){const l=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ga.crossVectors(a,ii),Ga.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ga.crossVectors(a,ii)),Ga.normalize(),Cc.crossVectors(ii,Ga),l[0]=Ga.x,l[4]=Cc.x,l[8]=ii.x,l[1]=Ga.y,l[5]=Cc.y,l[9]=ii.y,l[2]=Ga.z,l[6]=Cc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],d=a[12],g=a[1],v=a[5],_=a[9],x=a[13],S=a[2],T=a[6],M=a[10],y=a[14],U=a[3],L=a[7],w=a[11],O=a[15],z=l[0],H=l[4],k=l[8],D=l[12],C=l[1],G=l[5],Z=l[9],lt=l[13],ut=l[2],ft=l[6],B=l[10],nt=l[14],j=l[3],yt=l[7],N=l[11],tt=l[15];return c[0]=u*z+h*C+m*ut+d*j,c[4]=u*H+h*G+m*ft+d*yt,c[8]=u*k+h*Z+m*B+d*N,c[12]=u*D+h*lt+m*nt+d*tt,c[1]=g*z+v*C+_*ut+x*j,c[5]=g*H+v*G+_*ft+x*yt,c[9]=g*k+v*Z+_*B+x*N,c[13]=g*D+v*lt+_*nt+x*tt,c[2]=S*z+T*C+M*ut+y*j,c[6]=S*H+T*G+M*ft+y*yt,c[10]=S*k+T*Z+M*B+y*N,c[14]=S*D+T*lt+M*nt+y*tt,c[3]=U*z+L*C+w*ut+O*j,c[7]=U*H+L*G+w*ft+O*yt,c[11]=U*k+L*Z+w*B+O*N,c[15]=U*D+L*lt+w*nt+O*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],u=t[1],h=t[5],m=t[9],d=t[13],g=t[2],v=t[6],_=t[10],x=t[14],S=t[3],T=t[7],M=t[11],y=t[15];return S*(+c*m*v-l*d*v-c*h*_+a*d*_+l*h*x-a*m*x)+T*(+n*m*x-n*d*_+c*u*_-l*u*x+l*d*g-c*m*g)+M*(+n*d*v-n*h*x-c*u*v+a*u*x+c*h*g-a*d*g)+y*(-l*h*g-n*m*v+n*h*_+l*u*v-a*u*_+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],v=t[9],_=t[10],x=t[11],S=t[12],T=t[13],M=t[14],y=t[15],U=v*M*d-T*_*d+T*m*x-h*M*x-v*m*y+h*_*y,L=S*_*d-g*M*d-S*m*x+u*M*x+g*m*y-u*_*y,w=g*T*d-S*v*d+S*h*x-u*T*x-g*h*y+u*v*y,O=S*v*m-g*T*m-S*h*_+u*T*_+g*h*M-u*v*M,z=n*U+a*L+l*w+c*O;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/z;return t[0]=U*H,t[1]=(T*_*c-v*M*c-T*l*x+a*M*x+v*l*y-a*_*y)*H,t[2]=(h*M*c-T*m*c+T*l*d-a*M*d-h*l*y+a*m*y)*H,t[3]=(v*m*c-h*_*c-v*l*d+a*_*d+h*l*x-a*m*x)*H,t[4]=L*H,t[5]=(g*M*c-S*_*c+S*l*x-n*M*x-g*l*y+n*_*y)*H,t[6]=(S*m*c-u*M*c-S*l*d+n*M*d+u*l*y-n*m*y)*H,t[7]=(u*_*c-g*m*c+g*l*d-n*_*d-u*l*x+n*m*x)*H,t[8]=w*H,t[9]=(S*v*c-g*T*c-S*a*x+n*T*x+g*a*y-n*v*y)*H,t[10]=(u*T*c-S*h*c+S*a*d-n*T*d-u*a*y+n*h*y)*H,t[11]=(g*h*c-u*v*c-g*a*d+n*v*d+u*a*x-n*h*x)*H,t[12]=O*H,t[13]=(g*T*l-S*v*l+S*a*_-n*T*_-g*a*M+n*v*M)*H,t[14]=(S*h*l-u*T*l-S*a*m+n*T*m+u*a*M-n*h*M)*H,t[15]=(u*v*l-g*h*l+g*a*m-n*v*m-u*a*_+n*h*_)*H,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,u=t.x,h=t.y,m=t.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-l*m,d*m+l*h,0,d*h+l*m,g*h+a,g*m-l*u,0,d*m-l*h,g*m+l*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,u){return this.set(1,a,c,0,t,1,u,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,d=c+c,g=u+u,v=h+h,_=c*d,x=c*g,S=c*v,T=u*g,M=u*v,y=h*v,U=m*d,L=m*g,w=m*v,O=a.x,z=a.y,H=a.z;return l[0]=(1-(T+y))*O,l[1]=(x+w)*O,l[2]=(S-L)*O,l[3]=0,l[4]=(x-w)*z,l[5]=(1-(_+y))*z,l[6]=(M+U)*z,l[7]=0,l[8]=(S+L)*H,l[9]=(M-U)*H,l[10]=(1-(_+T))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;let c=gr.set(l[0],l[1],l[2]).length();const u=gr.set(l[4],l[5],l[6]).length(),h=gr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const d=1/c,g=1/u,v=1/h;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,n.setFromRotationMatrix(Ei),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,l,c,u,h=Hi,m=!1){const d=this.elements,g=2*c/(n-t),v=2*c/(a-l),_=(n+t)/(n-t),x=(a+l)/(a-l);let S,T;if(m)S=c/(u-c),T=u*c/(u-c);else if(h===Hi)S=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===lu)S=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,l,c,u,h=Hi,m=!1){const d=this.elements,g=2/(n-t),v=2/(a-l),_=-(n+t)/(n-t),x=-(a+l)/(a-l);let S,T;if(m)S=1/(u-c),T=u/(u-c);else if(h===Hi)S=-2/(u-c),T=-(u+c)/(u-c);else if(h===lu)S=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=S,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const gr=new W,Ei=new Xe,pS=new W(0,0,0),mS=new W(1,1,1),Ga=new W,Cc=new W,ii=new W,uv=new Xe,fv=new Wr;class ki{constructor(t=0,n=0,a=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],u=l[4],h=l[8],m=l[1],d=l[5],g=l[9],v=l[2],_=l[6],x=l[10];switch(n){case"XYZ":this._y=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return uv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return fv.setFromEuler(this),this.setFromQuaternion(fv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class U_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gS=0;const hv=new W,vr=new Wr,oa=new Xe,Dc=new W,Ko=new W,vS=new W,_S=new Wr,dv=new W(1,0,0),pv=new W(0,1,0),mv=new W(0,0,1),gv={type:"added"},xS={type:"removed"},_r={type:"childadded",child:null},Ph={type:"childremoved",child:null};class rn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new W,n=new ki,a=new Wr,l=new W(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new de}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return vr.setFromAxisAngle(t,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,n){return vr.setFromAxisAngle(t,n),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(dv,t)}rotateY(t){return this.rotateOnAxis(pv,t)}rotateZ(t){return this.rotateOnAxis(mv,t)}translateOnAxis(t,n){return hv.copy(t).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(dv,t)}translateY(t){return this.translateOnAxis(pv,t)}translateZ(t){return this.translateOnAxis(mv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Dc.copy(t):Dc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Ko,Dc,this.up):oa.lookAt(Dc,Ko,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(oa),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gv),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(xS),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gv),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,vS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,_S,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const v=m[d];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),d=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),S=u(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),S.length>0&&(a.nodes=S)}return a.object=l,a;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new W,la=new W,Oh=new W,ca=new W,xr=new W,yr=new W,vv=new W,zh=new W,Bh=new W,Ih=new W,Fh=new Ge,Hh=new Ge,Gh=new Ge;class Ai{constructor(t=new W,n=new W,a=new W){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Ti.subVectors(t,n),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Ti.subVectors(l,n),la.subVectors(a,n),Oh.subVectors(t,n);const u=Ti.dot(Ti),h=Ti.dot(la),m=Ti.dot(Oh),d=la.dot(la),g=la.dot(Oh),v=u*d-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(d*m-h*g)*_,S=(u*g-h*m)*_;return c.set(1-x-S,S,x)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,n,a,l,c,u,h,m){return this.getBarycoord(t,n,a,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(u,ca.y),m.addScaledVector(h,ca.z),m)}static getInterpolatedAttribute(t,n,a,l,c,u){return Fh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Fh.fromBufferAttribute(t,n),Hh.fromBufferAttribute(t,a),Gh.fromBufferAttribute(t,l),u.setScalar(0),u.addScaledVector(Fh,c.x),u.addScaledVector(Hh,c.y),u.addScaledVector(Gh,c.z),u}static isFrontFacing(t,n,a,l){return Ti.subVectors(a,n),la.subVectors(t,n),Ti.cross(la).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ti.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ai.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let u,h;xr.subVectors(l,a),yr.subVectors(c,a),zh.subVectors(t,a);const m=xr.dot(zh),d=yr.dot(zh);if(m<=0&&d<=0)return n.copy(a);Bh.subVectors(t,l);const g=xr.dot(Bh),v=yr.dot(Bh);if(g>=0&&v<=g)return n.copy(l);const _=m*v-g*d;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(xr,u);Ih.subVectors(t,c);const x=xr.dot(Ih),S=yr.dot(Ih);if(S>=0&&x<=S)return n.copy(c);const T=x*d-m*S;if(T<=0&&d>=0&&S<=0)return h=d/(d-S),n.copy(a).addScaledVector(yr,h);const M=g*S-x*v;if(M<=0&&v-g>=0&&x-S>=0)return vv.subVectors(c,l),h=(v-g)/(v-g+(x-S)),n.copy(l).addScaledVector(vv,h);const y=1/(M+T+_);return u=T*y,h=_*y,n.copy(a).addScaledVector(xr,u).addScaledVector(yr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const L_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Vh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class le{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=Re.workingColorSpace){if(t=rp(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Vh(u,c,t+1/3),this.g=Vh(u,c,t),this.b=Vh(u,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,n=ri){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=l[1],h=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ri){const a=L_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Re.workingToColorSpace(On.copy(this),t),Math.round(ye(On.r*255,0,255))*65536+Math.round(ye(On.g*255,0,255))*256+Math.round(ye(On.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(On.copy(this),n);const a=On.r,l=On.g,c=On.b,u=Math.max(a,l,c),h=Math.min(a,l,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const v=u-h;switch(d=g<=.5?v/(u+h):v/(2-u-h),u){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=ri){Re.workingToColorSpace(On.copy(this),t);const n=On.r,a=On.g,l=On.b;return t!==ri?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+n,Va.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Va),t.getHSL(Uc);const a=al(Va.h,Uc.h,n),l=al(Va.s,Uc.s,n),c=al(Va.l,Uc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new le;le.NAMES=L_;let yS=0;class Yr extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Ur,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(a.blending=this.blending),this.side!==Za&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==sd&&(a.blendSrc=this.blendSrc),this.blendDst!==rd&&(a.blendDst=this.blendDst),this.blendEquation!==Es&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=l(t.textures),u=l(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qa extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new W,Lc=new ae;let MS=0;class li{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=iv,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Lc.fromBufferAttribute(this,n),Lc.applyMatrix3(t),this.setXY(n,Lc.x,Lc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Rr(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Fn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Rr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Rr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Rr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Rr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),l=Fn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==iv&&(t.usage=this.usage),t}}class N_ extends li{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class P_ extends li{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class we extends li{constructor(t,n,a){super(new Float32Array(t),n,a)}}let SS=0;const gi=new Xe,kh=new rn,Mr=new W,ai=new Cs,Qo=new Cs,bn=new W;class hn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w_(t)?P_:N_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new de().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,n,a){return gi.makeTranslation(t,n,a),this.applyMatrix4(gi),this}scale(t,n,a){return gi.makeScale(t,n,a),this.applyMatrix4(gi),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const u=t[l];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new we(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ai.min,Qo.min),ai.expandByPoint(bn),bn.addVectors(ai.max,Qo.max),ai.expandByPoint(bn)):(ai.expandByPoint(Qo.min),ai.expandByPoint(Qo.max))}ai.getCenter(a);let l=0;for(let c=0,u=t.count;c<u;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)bn.fromBufferAttribute(h,d),m&&(Mr.fromBufferAttribute(t,d),bn.add(Mr)),l=Math.max(l,a.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<a.count;k++)h[k]=new W,m[k]=new W;const d=new W,g=new W,v=new W,_=new ae,x=new ae,S=new ae,T=new W,M=new W;function y(k,D,C){d.fromBufferAttribute(a,k),g.fromBufferAttribute(a,D),v.fromBufferAttribute(a,C),_.fromBufferAttribute(c,k),x.fromBufferAttribute(c,D),S.fromBufferAttribute(c,C),g.sub(d),v.sub(d),x.sub(_),S.sub(_);const G=1/(x.x*S.y-S.x*x.y);isFinite(G)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(v,-x.y).multiplyScalar(G),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-S.x).multiplyScalar(G),h[k].add(T),h[D].add(T),h[C].add(T),m[k].add(M),m[D].add(M),m[C].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let k=0,D=U.length;k<D;++k){const C=U[k],G=C.start,Z=C.count;for(let lt=G,ut=G+Z;lt<ut;lt+=3)y(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const L=new W,w=new W,O=new W,z=new W;function H(k){O.fromBufferAttribute(l,k),z.copy(O);const D=h[k];L.copy(D),L.sub(O.multiplyScalar(O.dot(D))).normalize(),w.crossVectors(z,D);const G=w.dot(m[k])<0?-1:1;u.setXYZW(k,L.x,L.y,L.z,G)}for(let k=0,D=U.length;k<D;++k){const C=U[k],G=C.start,Z=C.count;for(let lt=G,ut=G+Z;lt<ut;lt+=3)H(t.getX(lt+0)),H(t.getX(lt+1)),H(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const l=new W,c=new W,u=new W,h=new W,m=new W,d=new W,g=new W,v=new W;if(t)for(let _=0,x=t.count;_<x;_+=3){const S=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(a,S),m.fromBufferAttribute(a,T),d.fromBufferAttribute(a,M),h.add(g),m.add(g),d.add(g),a.setXYZ(S,h.x,h.y,h.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)l.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(l,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(m.length*g);let x=0,S=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?x=m[T]*h.data.stride+h.offset:x=m[T]*g;for(let y=0;y<g;y++)_[S++]=d[x++]}return new li(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],d=t(m,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=t(_,a);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const d=a[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],v=c[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _v=new Xe,gs=new D_,Nc=new qr,xv=new W,Pc=new W,Oc=new W,zc=new W,Xh=new W,Bc=new W,yv=new W,Ic=new W;class Te extends rn{constructor(t=new hn,n=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Bc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],v=c[m];g!==0&&(Xh.fromBufferAttribute(v,t),u?Bc.addScaledVector(Xh,g):Bc.addScaledVector(Xh.sub(n),g))}n.add(Bc)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nc.copy(a.boundingSphere),Nc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(Nc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Nc,xv)===null||gs.origin.distanceToSquared(xv)>(t.far-t.near)**2))&&(_v.copy(c).invert(),gs.copy(t.ray).applyMatrix4(_v),!(a.boundingBox!==null&&gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,gs)))}_computeIntersections(t,n,a){let l;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const M=_[S],y=u[M.materialIndex],U=Math.max(M.start,x.start),L=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let w=U,O=L;w<O;w+=3){const z=h.getX(w),H=h.getX(w+1),k=h.getX(w+2);l=Fc(this,y,t,a,d,g,v,z,H,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const S=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let M=S,y=T;M<y;M+=3){const U=h.getX(M),L=h.getX(M+1),w=h.getX(M+2);l=Fc(this,u,t,a,d,g,v,U,L,w),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const M=_[S],y=u[M.materialIndex],U=Math.max(M.start,x.start),L=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let w=U,O=L;w<O;w+=3){const z=w,H=w+1,k=w+2;l=Fc(this,y,t,a,d,g,v,z,H,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const S=Math.max(0,x.start),T=Math.min(m.count,x.start+x.count);for(let M=S,y=T;M<y;M+=3){const U=M,L=M+1,w=M+2;l=Fc(this,u,t,a,d,g,v,U,L,w),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function ES(r,t,n,a,l,c,u,h){let m;if(t.side===Zn?m=a.intersectTriangle(u,c,l,!0,h):m=a.intersectTriangle(l,c,u,t.side===Za,h),m===null)return null;Ic.copy(h),Ic.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(Ic);return d<n.near||d>n.far?null:{distance:d,point:Ic.clone(),object:r}}function Fc(r,t,n,a,l,c,u,h,m,d){r.getVertexPosition(h,Pc),r.getVertexPosition(m,Oc),r.getVertexPosition(d,zc);const g=ES(r,t,n,a,Pc,Oc,zc,yv);if(g){const v=new W;Ai.getBarycoord(yv,Pc,Oc,zc,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,h,m,d,v,new ae)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,h,m,d,v,new ae)),u&&(g.normal=Ai.getInterpolatedAttribute(u,h,m,d,v,new W),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:d,normal:new W,materialIndex:0};Ai.getNormal(Pc,Oc,zc,_.normal),g.face=_,g.barycoord=v}return g}class jr extends hn{constructor(t=1,n=1,a=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:u};const h=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],v=[];let _=0,x=0;S("z","y","x",-1,-1,a,n,t,u,c,0),S("z","y","x",1,-1,a,n,-t,u,c,1),S("x","z","y",1,1,t,a,n,l,u,2),S("x","z","y",1,-1,t,a,-n,l,u,3),S("x","y","z",1,-1,t,n,a,l,c,4),S("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(v,2));function S(T,M,y,U,L,w,O,z,H,k,D){const C=w/H,G=O/k,Z=w/2,lt=O/2,ut=z/2,ft=H+1,B=k+1;let nt=0,j=0;const yt=new W;for(let N=0;N<B;N++){const tt=N*G-lt;for(let xt=0;xt<ft;xt++){const Mt=xt*C-Z;yt[T]=Mt*U,yt[M]=tt*L,yt[y]=ut,d.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[y]=z>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(xt/H),v.push(1-N/k),nt+=1}}for(let N=0;N<k;N++)for(let tt=0;tt<H;tt++){const xt=_+tt+ft*N,Mt=_+tt+ft*(N+1),Ut=_+(tt+1)+ft*(N+1),Ht=_+(tt+1)+ft*N;m.push(xt,Mt,Ht),m.push(Mt,Ut,Ht),j+=6}h.addGroup(x,j,D),x+=j,_+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function Hn(r){const t={};for(let n=0;n<r.length;n++){const a=Hr(r[n]);for(const l in a)t[l]=a[l]}return t}function TS(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function O_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const fl={clone:Hr,merge:Hn};var bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=AS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hr(t.uniforms),this.uniformsGroups=TS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?n.uniforms[l]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[l]={type:"m4",value:u.toArray()}:n.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class z_ extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new W,Mv=new ae,Sv=new ae;class Yn extends z_{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,n){return this.getViewBounds(t,Mv,Sv),n.subVectors(Sv,Mv)}setViewOffset(t,n,a,l,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(il*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*l/m,n-=u.offsetY*a/d,l*=u.width/m,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Sr=-90,Er=1;class RS extends rn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(Sr,Er,t,n);l.layers=this.layers,this.add(l);const c=new Yn(Sr,Er,t,n);c.layers=this.layers,this.add(c);const u=new Yn(Sr,Er,t,n);u.layers=this.layers,this.add(u);const h=new Yn(Sr,Er,t,n);h.layers=this.layers,this.add(h);const m=new Yn(Sr,Er,t,n);m.layers=this.layers,this.add(m);const d=new Yn(Sr,Er,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,u,h,m]=n;for(const d of n)this.remove(d);if(t===Hi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===lu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,c),t.setRenderTarget(a,1,l),t.render(n,u),t.setRenderTarget(a,2,l),t.render(n,h),t.setRenderTarget(a,3,l),t.render(n,m),t.setRenderTarget(a,4,l),t.render(n,d),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,l),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=S,a.texture.needsPMREMUpdate=!0}}class B_ extends Gn{constructor(t=[],n=zr,a,l,c,u,h,m,d,g){super(t,n,a,l,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wS extends wi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new B_(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jr(5,5,5),c=new _n({name:"CubemapFromEquirect",uniforms:Hr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:fa});c.uniforms.tEquirect.value=n;const u=new Te(l,c),h=n.minFilter;return n.minFilter===As&&(n.minFilter=Ii),new RS(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,l);t.setRenderTarget(c)}}class vn extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CS={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),y=this._getHandJoint(d,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,S=.005;d.inputState.pinching&&_>x+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(CS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new vn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class du{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(t),this.density=n}clone(){return new du(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class DS extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class US extends Gn{constructor(t=null,n=1,a=1,l,c,u,h,m,d=oi,g=oi,v,_){super(null,u,h,m,d,g,l,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ev extends li{constructor(t,n,a,l=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Tr=new Xe,Tv=new Xe,Hc=[],bv=new Cs,LS=new Xe,Jo=new Te,$o=new qr;class Av extends Te{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Ev(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<a;l++)this.setMatrixAt(l,LS)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Cs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Tr),bv.copy(t.boundingBox).applyMatrix4(Tr),this.boundingBox.union(bv)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Tr),$o.copy(t.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union($o)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,l=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let h=0;h<a.length;h++)a[h]=l[u+h]}raycast(t,n){const a=this.matrixWorld,l=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(a),t.ray.intersectsSphere($o)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Tr),Tv.multiplyMatrices(a,Tr),Jo.matrixWorld=Tv,Jo.raycast(t,Hc);for(let u=0,h=Hc.length;u<h;u++){const m=Hc[u];m.instanceId=c,m.object=this,n.push(m)}Hc.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Ev(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,l=a.length+1;this.morphTexture===null&&(this.morphTexture=new US(new Float32Array(l*this.count),l,this.count,np,Fi));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,m=l*t;c[m]=h,c.set(a,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qh=new W,NS=new W,PS=new de;class Ms{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=qh.subVectors(a,n).cross(NS.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(qh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||PS.getNormalMatrix(t),l=this.coplanarPoint(qh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new qr,OS=new ae(.5,.5),Gc=new W;class lp{constructor(t=new Ms,n=new Ms,a=new Ms,l=new Ms,c=new Ms,u=new Ms){this.planes=[t,n,a,l,c,u]}set(t,n,a,l,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Hi,a=!1){const l=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],v=c[5],_=c[6],x=c[7],S=c[8],T=c[9],M=c[10],y=c[11],U=c[12],L=c[13],w=c[14],O=c[15];if(l[0].setComponents(d-u,x-g,y-S,O-U).normalize(),l[1].setComponents(d+u,x+g,y+S,O+U).normalize(),l[2].setComponents(d+h,x+v,y+T,O+L).normalize(),l[3].setComponents(d-h,x-v,y-T,O-L).normalize(),a)l[4].setComponents(m,_,M,w).normalize(),l[5].setComponents(d-m,x-_,y-M,O-w).normalize();else if(l[4].setComponents(d-m,x-_,y-M,O-w).normalize(),n===Hi)l[5].setComponents(d+m,x+_,y+M,O+w).normalize();else if(n===lu)l[5].setComponents(m,_,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);const n=OS.distanceTo(t.center);return vs.radius=.7071067811865476+n,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zS extends Yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rv=new Xe,qd=new D_,Vc=new qr,kc=new W;class BS extends rn{constructor(t=new hn,n=new zS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Vc.copy(a.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;Rv.copy(l).invert(),qd.copy(t.ray).applyMatrix4(Rv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=a.index,v=a.attributes.position;if(d!==null){const _=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let S=_,T=x;S<T;S++){const M=d.getX(S);kc.fromBufferAttribute(v,M),wv(kc,M,m,l,t,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let S=_,T=x;S<T;S++)kc.fromBufferAttribute(v,S),wv(kc,S,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function wv(r,t,n,a,l,c,u){const h=qd.distanceSqToPoint(r);if(h<n){const m=new W;qd.closestPointToPoint(r,m),m.applyMatrix4(a);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class I_ extends Gn{constructor(t,n,a=Rs,l,c,u,h=oi,m=oi,d,g=ll,v=1){if(g!==ll&&g!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,l,c,u,h,m,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new op(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class F_ extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cp extends hn{constructor(t=1,n=32,a=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:l},n=Math.max(3,n);const c=[],u=[],h=[],m=[],d=new W,g=new ae;u.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const x=a+v/n*l;d.x=t*Math.cos(x),d.y=t*Math.sin(x),u.push(d.x,d.y,d.z),h.push(0,0,1),g.x=(u[_]/t+1)/2,g.y=(u[_+1]/t+1)/2,m.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class bi extends hn{constructor(t=1,n=1,a=1,l=32,c=1,u=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],_=[],x=[];let S=0;const T=[],M=a/2;let y=0;U(),u===!1&&(t>0&&L(!0),n>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new we(v,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(x,2));function U(){const w=new W,O=new W;let z=0;const H=(n-t)/a;for(let k=0;k<=c;k++){const D=[],C=k/c,G=C*(n-t)+t;for(let Z=0;Z<=l;Z++){const lt=Z/l,ut=lt*m+h,ft=Math.sin(ut),B=Math.cos(ut);O.x=G*ft,O.y=-C*a+M,O.z=G*B,v.push(O.x,O.y,O.z),w.set(ft,H,B).normalize(),_.push(w.x,w.y,w.z),x.push(lt,1-C),D.push(S++)}T.push(D)}for(let k=0;k<l;k++)for(let D=0;D<c;D++){const C=T[D][k],G=T[D+1][k],Z=T[D+1][k+1],lt=T[D][k+1];(t>0||D!==0)&&(g.push(C,G,lt),z+=3),(n>0||D!==c-1)&&(g.push(G,Z,lt),z+=3)}d.addGroup(y,z,0),y+=z}function L(w){const O=S,z=new ae,H=new W;let k=0;const D=w===!0?t:n,C=w===!0?1:-1;for(let Z=1;Z<=l;Z++)v.push(0,M*C,0),_.push(0,C,0),x.push(.5,.5),S++;const G=S;for(let Z=0;Z<=l;Z++){const ut=Z/l*m+h,ft=Math.cos(ut),B=Math.sin(ut);H.x=D*B,H.y=M*C,H.z=D*ft,v.push(H.x,H.y,H.z),_.push(0,C,0),z.x=ft*.5+.5,z.y=B*.5*C+.5,x.push(z.x,z.y),S++}for(let Z=0;Z<l;Z++){const lt=O+Z,ut=G+Z;w===!0?g.push(ut,ut+1,lt):g.push(ut+1,ut,lt),k+=3}d.addGroup(y,k,w===!0?1:2),y+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class up extends bi{constructor(t=1,n=1,a=32,l=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,l,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new up(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fp extends hn{constructor(t=[],n=[],a=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:l};const c=[],u=[];h(l),d(a),g(),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(c.slice(),3)),this.setAttribute("uv",new we(u,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const L=new W,w=new W,O=new W;for(let z=0;z<n.length;z+=3)x(n[z+0],L),x(n[z+1],w),x(n[z+2],O),m(L,w,O,U)}function m(U,L,w,O){const z=O+1,H=[];for(let k=0;k<=z;k++){H[k]=[];const D=U.clone().lerp(w,k/z),C=L.clone().lerp(w,k/z),G=z-k;for(let Z=0;Z<=G;Z++)Z===0&&k===z?H[k][Z]=D:H[k][Z]=D.clone().lerp(C,Z/G)}for(let k=0;k<z;k++)for(let D=0;D<2*(z-k)-1;D++){const C=Math.floor(D/2);D%2===0?(_(H[k][C+1]),_(H[k+1][C]),_(H[k][C])):(_(H[k][C+1]),_(H[k+1][C+1]),_(H[k+1][C]))}}function d(U){const L=new W;for(let w=0;w<c.length;w+=3)L.x=c[w+0],L.y=c[w+1],L.z=c[w+2],L.normalize().multiplyScalar(U),c[w+0]=L.x,c[w+1]=L.y,c[w+2]=L.z}function g(){const U=new W;for(let L=0;L<c.length;L+=3){U.x=c[L+0],U.y=c[L+1],U.z=c[L+2];const w=M(U)/2/Math.PI+.5,O=y(U)/Math.PI+.5;u.push(w,1-O)}S(),v()}function v(){for(let U=0;U<u.length;U+=6){const L=u[U+0],w=u[U+2],O=u[U+4],z=Math.max(L,w,O),H=Math.min(L,w,O);z>.9&&H<.1&&(L<.2&&(u[U+0]+=1),w<.2&&(u[U+2]+=1),O<.2&&(u[U+4]+=1))}}function _(U){c.push(U.x,U.y,U.z)}function x(U,L){const w=U*3;L.x=t[w+0],L.y=t[w+1],L.z=t[w+2]}function S(){const U=new W,L=new W,w=new W,O=new W,z=new ae,H=new ae,k=new ae;for(let D=0,C=0;D<c.length;D+=9,C+=6){U.set(c[D+0],c[D+1],c[D+2]),L.set(c[D+3],c[D+4],c[D+5]),w.set(c[D+6],c[D+7],c[D+8]),z.set(u[C+0],u[C+1]),H.set(u[C+2],u[C+3]),k.set(u[C+4],u[C+5]),O.copy(U).add(L).add(w).divideScalar(3);const G=M(O);T(z,C+0,U,G),T(H,C+2,L,G),T(k,C+4,w,G)}}function T(U,L,w,O){O<0&&U.x===1&&(u[L]=U.x-1),w.x===0&&w.z===0&&(u[L]=O/2/Math.PI+.5)}function M(U){return Math.atan2(U.z,-U.x)}function y(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fp(t.vertices,t.indices,t.radius,t.details)}}class IS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,l=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(l),n.push(c),l=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let l=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,m=c-1,d;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),d=a[l]-u,d<0)h=l+1;else if(d>0)m=l-1;else{m=l;break}if(l=m,a[l]===u)return l/(c-1);const g=a[l],_=a[l+1]-g,x=(u-g)/_;return(l+x)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const u=this.getPoint(l),h=this.getPoint(c),m=n||(u.isVector2?new ae:new W);return m.copy(h).sub(u).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new W,l=[],c=[],u=[],h=new W,m=new Xe;for(let x=0;x<=t;x++){const S=x/t;l[x]=this.getTangentAt(S,new W)}c[0]=new W,u[0]=new W;let d=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),_=Math.abs(l[0].z);g<=d&&(d=g,a.set(1,0,0)),v<=d&&(d=v,a.set(0,1,0)),_<=d&&a.set(0,0,1),h.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],h),u[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const S=Math.acos(ye(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,S))}u[x].crossVectors(l[x],c[x])}if(n===!0){let x=Math.acos(ye(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let S=1;S<=t;S++)c[S].applyMatrix4(m.makeRotationAxis(l[S],x*S)),u[S].crossVectors(l[S],c[S])}return{tangents:l,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function hp(){let r=0,t=0,n=0,a=0;function l(c,u,h,m){r=c,t=h,n=-3*c+3*u-2*h-m,a=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){l(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,v){let _=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+v)+(m-h)/v;_*=g,x*=g,l(u,h,_,x)},calc:function(c){const u=c*c,h=u*c;return r+t*c+n*u+a*h}}}const Xc=new W,Yh=new hp,jh=new hp,Zh=new hp;class FS extends IS{constructor(t=[],n=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=l}getPoint(t,n=new W){const a=n,l=this.points,c=l.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=l[(h-1)%c]:(Xc.subVectors(l[0],l[1]).add(l[0]),d=Xc);const v=l[h%c],_=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Xc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(d.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(g),x);T<1e-4&&(T=1),S<1e-4&&(S=T),M<1e-4&&(M=T),Yh.initNonuniformCatmullRom(d.x,v.x,_.x,g.x,S,T,M),jh.initNonuniformCatmullRom(d.y,v.y,_.y,g.y,S,T,M),Zh.initNonuniformCatmullRom(d.z,v.z,_.z,g.z,S,T,M)}else this.curveType==="catmullrom"&&(Yh.initCatmullRom(d.x,v.x,_.x,g.x,this.tension),jh.initCatmullRom(d.y,v.y,_.y,g.y,this.tension),Zh.initCatmullRom(d.z,v.z,_.z,g.z,this.tension));return a.set(Yh.calc(m),jh.calc(m),Zh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Nr extends fp{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,l=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Nr(t.radius,t.detail)}}class ws extends hn{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,u=n/2,h=Math.floor(a),m=Math.floor(l),d=h+1,g=m+1,v=t/h,_=n/m,x=[],S=[],T=[],M=[];for(let y=0;y<g;y++){const U=y*_-u;for(let L=0;L<d;L++){const w=L*v-c;S.push(w,-U,0),T.push(0,0,1),M.push(L/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let U=0;U<h;U++){const L=U+d*y,w=U+d*(y+1),O=U+1+d*(y+1),z=U+1+d*y;x.push(L,w,z),x.push(w,O,z)}this.setIndex(x),this.setAttribute("position",new we(S,3)),this.setAttribute("normal",new we(T,3)),this.setAttribute("uv",new we(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class hl extends hn{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+h,Math.PI);let d=0;const g=[],v=new W,_=new W,x=[],S=[],T=[],M=[];for(let y=0;y<=a;y++){const U=[],L=y/a;let w=0;y===0&&u===0?w=.5/n:y===a&&m===Math.PI&&(w=-.5/n);for(let O=0;O<=n;O++){const z=O/n;v.x=-t*Math.cos(l+z*c)*Math.sin(u+L*h),v.y=t*Math.cos(u+L*h),v.z=t*Math.sin(l+z*c)*Math.sin(u+L*h),S.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),M.push(z+w,1-L),U.push(d++)}g.push(U)}for(let y=0;y<a;y++)for(let U=0;U<n;U++){const L=g[y][U+1],w=g[y][U],O=g[y+1][U],z=g[y+1][U+1];(y!==0||u>0)&&x.push(L,w,z),(y!==a-1||m<Math.PI)&&x.push(w,O,z)}this.setIndex(x),this.setAttribute("position",new we(S,3)),this.setAttribute("normal",new we(T,3)),this.setAttribute("uv",new we(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pu extends hn{constructor(t=1,n=.4,a=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:l,arc:c},a=Math.floor(a),l=Math.floor(l);const u=[],h=[],m=[],d=[],g=new W,v=new W,_=new W;for(let x=0;x<=a;x++)for(let S=0;S<=l;S++){const T=S/l*c,M=x/a*Math.PI*2;v.x=(t+n*Math.cos(M))*Math.cos(T),v.y=(t+n*Math.cos(M))*Math.sin(T),v.z=n*Math.sin(M),h.push(v.x,v.y,v.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),_.subVectors(v,g).normalize(),m.push(_.x,_.y,_.z),d.push(S/l),d.push(x/a)}for(let x=1;x<=a;x++)for(let S=1;S<=l;S++){const T=(l+1)*x+S-1,M=(l+1)*(x-1)+S-1,y=(l+1)*(x-1)+S,U=(l+1)*x+S;u.push(T,M,U),u.push(M,y,U)}this.setIndex(u),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class HS extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wr extends Yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A_,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class GS extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VS extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dl extends rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class H_ extends dl{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Kh=new Xe,Cv=new W,Dv=new W;class dp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Cv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cv),Dv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Dv),n.updateMatrixWorld(),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kS extends dp{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=Fr*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Wc extends dl{constructor(t,n,a=0,l=Math.PI/3,c=0,u=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=a,this.angle=l,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new kS}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Uv=new Xe,tl=new W,Qh=new W;class XS extends dp{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,l=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),tl.setFromMatrixPosition(t.matrixWorld),a.position.copy(tl),Qh.copy(a.position),Qh.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Qh),a.updateMatrixWorld(),l.makeTranslation(-tl.x,-tl.y,-tl.z),Uv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uv,a.coordinateSystem,a.reversedDepth)}}class el extends dl{constructor(t,n,a=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new XS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class pp extends z_{constructor(t=-1,n=1,a=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class WS extends dp{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yd extends dl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new WS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qS extends dl{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class YS extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class G_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Lv(r,t,n,a){const l=jS(a);switch(n){case E_:return r*t;case np:return r*t/l.components*l.byteLength;case ip:return r*t/l.components*l.byteLength;case b_:return r*t*2/l.components*l.byteLength;case ap:return r*t*2/l.components*l.byteLength;case T_:return r*t*3/l.components*l.byteLength;case Ri:return r*t*4/l.components*l.byteLength;case sp:return r*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xd:case Md:return Math.max(r,16)*Math.max(t,8)/4;case _d:case yd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case Ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Fd:case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jS(r){switch(r){case Vi:case x_:return{byteLength:1,components:1};case rl:case y_:case ha:return{byteLength:2,components:1};case tp:case ep:return{byteLength:2,components:4};case Rs:case $d:case Fi:return{byteLength:4,components:1};case M_:case S_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let r=null,t=!1,n=null,a=null;function l(c,u){n(c,u),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function ZS(r){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,v=d.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,d){const g=m.array,v=m.updateRanges;if(r.bindBuffer(d,h),v.length===0)r.bufferSubData(d,0,g);else{v.sort((x,S)=>x.start-S.start);let _=0;for(let x=1;x<v.length;x++){const S=v[_],T=v[x];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,S=v.length;x<S;x++){const T=v[x];r.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,m),d.version=h.version}}return{get:l,remove:c,update:u}}var KS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
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
#endif`,JS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n1=`#ifdef USE_AOMAP
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
#endif`,i1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
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
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c1=`#ifdef USE_IRIDESCENCE
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
#endif`,u1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,x1=`#define PI 3.141592653589793
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
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
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
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,k1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
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
#endif`,j1=`struct PhysicalMaterial {
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
}`,Z1=`
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sE=`#if defined( USE_POINTS_UV )
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
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
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
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
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
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PE=`float getShadowMask() {
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,FE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KE=`uniform sampler2D t2D;
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
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
}`,nT=`#if DEPTH_PACKING == 3200
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
}`,iT=`#define DISTANCE
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
}`,aT=`#define DISTANCE
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 diffuse;
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
}`,fT=`#define LAMBERT
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
}`,hT=`#define LAMBERT
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
}`,dT=`#define MATCAP
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
}`,pT=`#define MATCAP
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
}`,mT=`#define NORMAL
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
}`,gT=`#define NORMAL
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
}`,vT=`#define PHONG
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
}`,_T=`#define PHONG
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
}`,xT=`#define STANDARD
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
}`,yT=`#define STANDARD
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
}`,MT=`#define TOON
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
}`,ST=`#define TOON
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
}`,ET=`uniform float size;
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
}`,TT=`uniform vec3 diffuse;
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
}`,bT=`#include <common>
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
}`,AT=`uniform vec3 color;
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
}`,RT=`uniform float rotation;
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
}`,wT=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:KS,alphahash_pars_fragment:QS,alphamap_fragment:JS,alphamap_pars_fragment:$S,alphatest_fragment:t1,alphatest_pars_fragment:e1,aomap_fragment:n1,aomap_pars_fragment:i1,batching_pars_vertex:a1,batching_vertex:s1,begin_vertex:r1,beginnormal_vertex:o1,bsdfs:l1,iridescence_fragment:c1,bumpmap_pars_fragment:u1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:p1,color_fragment:m1,color_pars_fragment:g1,color_pars_vertex:v1,color_vertex:_1,common:x1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:M1,displacementmap_pars_vertex:S1,displacementmap_vertex:E1,emissivemap_fragment:T1,emissivemap_pars_fragment:b1,colorspace_fragment:A1,colorspace_pars_fragment:R1,envmap_fragment:w1,envmap_common_pars_fragment:C1,envmap_pars_fragment:D1,envmap_pars_vertex:U1,envmap_physical_pars_fragment:V1,envmap_vertex:L1,fog_vertex:N1,fog_pars_vertex:P1,fog_fragment:O1,fog_pars_fragment:z1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:I1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:H1,lights_pars_begin:G1,lights_toon_fragment:k1,lights_toon_pars_fragment:X1,lights_phong_fragment:W1,lights_phong_pars_fragment:q1,lights_physical_fragment:Y1,lights_physical_pars_fragment:j1,lights_fragment_begin:Z1,lights_fragment_maps:K1,lights_fragment_end:Q1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:$1,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:eE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:aE,map_particle_pars_fragment:sE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:oE,morphinstance_vertex:lE,morphcolor_vertex:cE,morphnormal_vertex:uE,morphtarget_pars_vertex:fE,morphtarget_vertex:hE,normal_fragment_begin:dE,normal_fragment_maps:pE,normal_pars_fragment:mE,normal_pars_vertex:gE,normal_vertex:vE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:yE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:SE,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:bE,project_vertex:AE,dithering_fragment:RE,dithering_pars_fragment:wE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:UE,shadowmap_pars_vertex:LE,shadowmap_vertex:NE,shadowmask_pars_fragment:PE,skinbase_vertex:OE,skinning_pars_vertex:zE,skinning_vertex:BE,skinnormal_vertex:IE,specularmap_fragment:FE,specularmap_pars_fragment:HE,tonemapping_fragment:GE,tonemapping_pars_fragment:VE,transmission_fragment:kE,transmission_pars_fragment:XE,uv_pars_fragment:WE,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:jE,background_vert:ZE,background_frag:KE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:$E,cube_frag:tT,depth_vert:eT,depth_frag:nT,distanceRGBA_vert:iT,distanceRGBA_frag:aT,equirect_vert:sT,equirect_frag:rT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:cT,meshbasic_frag:uT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:vT,meshphong_frag:_T,meshphysical_vert:xT,meshphysical_frag:yT,meshtoon_vert:MT,meshtoon_frag:ST,points_vert:ET,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:RT,sprite_frag:wT},Pt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([Pt.points,Pt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([Pt.common,Pt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([Pt.sprite,Pt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([Pt.common,Pt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([Pt.lights,Pt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const qc={r:0,b:0,g:0},_s=new ki,CT=new Xe;function DT(r,t,n,a,l,c,u){const h=new le(0);let m=c===!0?0:1,d,g,v=null,_=0,x=null;function S(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?n:t).get(w)),w}function T(L){let w=!1;const O=S(L);O===null?y(h,m):O&&O.isColor&&(y(O,1),w=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,w){const O=S(w);O&&(O.isCubeTexture||O.mapping===hu)?(g===void 0&&(g=new Te(new jr(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Hr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,H,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_s.copy(w.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(_s)),g.material.toneMapped=Re.getTransfer(O.colorSpace)!==Oe,(v!==O||_!==O.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=O,_=O.version,x=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Te(new ws(2,2),new _n({name:"BackgroundMaterial",uniforms:Hr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Re.getTransfer(O.colorSpace)!==Oe,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||_!==O.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,v=O,_=O.version,x=r.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function y(L,w){L.getRGB(qc,O_(r)),a.buffers.color.setClear(qc.r,qc.g,qc.b,w,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),m=w,y(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,y(h,m)},render:T,addToRenderList:M,dispose:U}}function UT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=_(null);let c=l,u=!1;function h(C,G,Z,lt,ut){let ft=!1;const B=v(lt,Z,G);c!==B&&(c=B,d(c.object)),ft=x(C,lt,Z,ut),ft&&S(C,lt,Z,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ft||u)&&(u=!1,w(C,G,Z,lt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function d(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,G,Z){const lt=Z.wireframe===!0;let ut=a[C.id];ut===void 0&&(ut={},a[C.id]=ut);let ft=ut[G.id];ft===void 0&&(ft={},ut[G.id]=ft);let B=ft[lt];return B===void 0&&(B=_(m()),ft[lt]=B),B}function _(C){const G=[],Z=[],lt=[];for(let ut=0;ut<n;ut++)G[ut]=0,Z[ut]=0,lt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:lt,object:C,attributes:{},index:null}}function x(C,G,Z,lt){const ut=c.attributes,ft=G.attributes;let B=0;const nt=Z.getAttributes();for(const j in nt)if(nt[j].location>=0){const N=ut[j];let tt=ft[j];if(tt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function S(C,G,Z,lt){const ut={},ft=G.attributes;let B=0;const nt=Z.getAttributes();for(const j in nt)if(nt[j].location>=0){let N=ft[j];N===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),ut[j]=tt,B++}c.attributes=ut,c.attributesNum=B,c.index=lt}function T(){const C=c.newAttributes;for(let G=0,Z=C.length;G<Z;G++)C[G]=0}function M(C){y(C,0)}function y(C,G){const Z=c.newAttributes,lt=c.enabledAttributes,ut=c.attributeDivisors;Z[C]=1,lt[C]===0&&(r.enableVertexAttribArray(C),lt[C]=1),ut[C]!==G&&(r.vertexAttribDivisor(C,G),ut[C]=G)}function U(){const C=c.newAttributes,G=c.enabledAttributes;for(let Z=0,lt=G.length;Z<lt;Z++)G[Z]!==C[Z]&&(r.disableVertexAttribArray(Z),G[Z]=0)}function L(C,G,Z,lt,ut,ft,B){B===!0?r.vertexAttribIPointer(C,G,Z,ut,ft):r.vertexAttribPointer(C,G,Z,lt,ut,ft)}function w(C,G,Z,lt){T();const ut=lt.attributes,ft=Z.getAttributes(),B=G.defaultAttributeValues;for(const nt in ft){const j=ft[nt];if(j.location>=0){let yt=ut[nt];if(yt===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const N=yt.normalized,tt=yt.itemSize,xt=t.get(yt);if(xt===void 0)continue;const Mt=xt.buffer,Ut=xt.type,Ht=xt.bytesPerElement,it=Ut===r.INT||Ut===r.UNSIGNED_INT||yt.gpuType===$d;if(yt.isInterleavedBufferAttribute){const vt=yt.data,At=vt.stride,Qt=yt.offset;if(vt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<j.locationSize;Yt++)y(j.location+Yt,vt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Yt=0;Yt<j.locationSize;Yt++)M(j.location+Yt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Yt=0;Yt<j.locationSize;Yt++)L(j.location+Yt,tt/j.locationSize,Ut,N,At*Ht,(Qt+tt/j.locationSize*Yt)*Ht,it)}else{if(yt.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)y(j.location+vt,yt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let vt=0;vt<j.locationSize;vt++)M(j.location+vt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let vt=0;vt<j.locationSize;vt++)L(j.location+vt,tt/j.locationSize,Ut,N,tt*Ht,tt/j.locationSize*vt*Ht,it)}}else if(B!==void 0){const N=B[nt];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(j.location,N);break;case 3:r.vertexAttrib3fv(j.location,N);break;case 4:r.vertexAttrib4fv(j.location,N);break;default:r.vertexAttrib1fv(j.location,N)}}}}U()}function O(){k();for(const C in a){const G=a[C];for(const Z in G){const lt=G[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete G[Z]}delete a[C]}}function z(C){if(a[C.id]===void 0)return;const G=a[C.id];for(const Z in G){const lt=G[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete G[Z]}delete a[C.id]}function H(C){for(const G in a){const Z=a[G];if(Z[C.id]===void 0)continue;const lt=Z[C.id];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete Z[C.id]}}function k(){D(),u=!0,c!==l&&(c=l,d(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:H,initAttributes:T,enableAttribute:M,disableUnusedAttributes:U}}function LT(r,t,n){let a;function l(d){a=d}function c(d,g){r.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,v){v!==0&&(r.drawArraysInstanced(a,d,g,v),n.update(g,a,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,v);let x=0;for(let S=0;S<v;S++)x+=g[S];n.update(x,a,1)}function m(d,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<d.length;S++)u(d[S],g[S],_[S]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T]*_[T];n.update(S,a,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function NT(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(H){return!(H!==Ri&&a.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const k=H===ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Vi&&a.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Fi&&!k)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=S>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:O,maxSamples:z}}function PT(r){const t=this;let n=null,a=0,l=!1,c=!1;const u=new Ms,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||l;return l=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const S=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||S===null||S.length===0||c&&!M)c?g(null):d();else{const U=c?0:a,L=U*4;let w=y.clippingState||null;m.value=w,w=g(S,_,L,x);for(let O=0;O!==L;++O)w[O]=n[O];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,S){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=m.value,S!==!0||M===null){const y=x+T*4,U=_.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=x;L!==T;++L,w+=4)u.copy(v[L]).applyMatrix4(U,h),u.normal.toArray(M,w),M[w+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function OT(r){let t=new WeakMap;function n(u,h){return h===pd?u.mapping=zr:h===md&&(u.mapping=Br),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===pd||h===md)if(t.has(u)){const m=t.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const d=new wS(m.height);return d.fromEquirectangularTexture(r,u),t.set(u,d),u.addEventListener("dispose",l),n(d.texture,u.mapping)}else return null}}return u}function l(u){const h=u.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Cr=4,Nv=[.125,.215,.35,.446,.526,.582],Ts=20,Jh=new pp,Pv=new le;let $h=null,td=0,ed=0,nd=!1;const Ss=(1+Math.sqrt(5))/2,br=1/Ss,Ov=[new W(-Ss,br,0),new W(Ss,br,0),new W(-br,0,Ss),new W(br,0,Ss),new W(0,Ss,-br),new W(0,Ss,br),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],zT=new W;class zv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,l=100,c={}){const{size:u=256,position:h=zT}=c;$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($h,td,ed),this._renderer.xr.enabled=nd,t.scissorTest=!1,Yc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===zr||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:ha,format:Ri,colorSpace:Ir,depthBuffer:!1},l=Bv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BT(c)),this._blurMaterial=IT(c,t,n)}return l}_compileMaterial(t){const n=new Te(this._lodPlanes[0],t);this._renderer.compile(n,Jh)}_sceneToCubeUV(t,n,a,l,c){const m=new Yn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Pv),v.toneMapping=ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const T=new qa({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),M=new Te(new jr,T);let y=!1;const U=t.background;U?U.isColor&&(T.color.copy(U),t.background=null,y=!0):(T.color.copy(Pv),y=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(m.up.set(0,d[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):w===1?(m.up.set(0,0,d[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,d[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const O=this._cubeSize;Yc(l,w*O,L>2?O:0,O,O),v.setRenderTarget(l),y&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=U}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===zr||t.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const c=l?this._cubemapMaterial:this._equirectMaterial,u=new Te(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Yc(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Jh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Ov[(l-c-1)%Ov.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,l,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,l,"latitudinal",c),this._halfBlur(u,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Te(this._lodPlanes[l],d),_=d.uniforms,x=this._sizeLods[a]-1,S=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ts-1),T=c/S,M=isFinite(c)?1+Math.floor(g*T):Ts;M>Ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ts}`);const y=[];let U=0;for(let H=0;H<Ts;++H){const k=H/T,D=Math.exp(-k*k/2);y.push(D),H===0?U+=D:H<M&&(U+=2*D)}for(let H=0;H<y.length;H++)y[H]=y[H]/U;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=S,_.mipInt.value=L-a;const w=this._sizeLods[l],O=3*w*(l>L-Cr?l-L+Cr:0),z=4*(this._cubeSize-w);Yc(n,O,z,3*w,2*w),m.setRenderTarget(n),m.render(v,Jh)}}function BT(r){const t=[],n=[],a=[];let l=r;const c=r-Cr+1+Nv.length;for(let u=0;u<c;u++){const h=Math.pow(2,l);n.push(h);let m=1/h;u>r-Cr?m=Nv[u-r+Cr-1]:u===0&&(m=0),a.push(m);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,S=6,T=3,M=2,y=1,U=new Float32Array(T*S*x),L=new Float32Array(M*S*x),w=new Float32Array(y*S*x);for(let z=0;z<x;z++){const H=z%3*2/3-1,k=z>2?0:-1,D=[H,k,0,H+2/3,k,0,H+2/3,k+1,0,H,k,0,H+2/3,k+1,0,H,k+1,0];U.set(D,T*S*z),L.set(_,M*S*z);const C=[z,z,z,z,z,z];w.set(C,y*S*z)}const O=new hn;O.setAttribute("position",new li(U,T)),O.setAttribute("uv",new li(L,M)),O.setAttribute("faceIndex",new li(w,y)),t.push(O),l>Cr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Bv(r,t,n){const a=new wi(r,t,n);return a.texture.mapping=hu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Yc(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function IT(r,t,n){const a=new Float32Array(Ts),l=new W(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mp(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Iv(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Fv(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function mp(){return`

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
	`}function FT(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,d=m===pd||m===md,g=m===zr||m===Br;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new zv(r)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new zv(r)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&m++;return m===d}function c(h){const m=h.target;m.removeEventListener("dispose",c);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function HT(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(a)}return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&ul("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function GT(r,t,n,a){const l={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const S in _.attributes)t.remove(_.attributes[S]);_.removeEventListener("dispose",u),delete l[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",u),l[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,S=v.attributes.position;let T=0;if(x!==null){const U=x.array;T=x.version;for(let L=0,w=U.length;L<w;L+=3){const O=U[L+0],z=U[L+1],H=U[L+2];_.push(O,z,z,H,H,O)}}else if(S!==void 0){const U=S.array;T=S.version;for(let L=0,w=U.length/3-1;L<w;L+=3){const O=L+0,z=L+1,H=L+2;_.push(O,z,z,H,H,O)}}else return;const M=new(w_(_)?P_:N_)(_,1);M.version=T;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function VT(r,t,n){let a;function l(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,x){r.drawElements(a,x,c,_*u),n.update(x,a,1)}function d(_,x,S){S!==0&&(r.drawElementsInstanced(a,x,c,_*u,S),n.update(x,a,S))}function g(_,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,S);let M=0;for(let y=0;y<S;y++)M+=x[y];n.update(M,a,1)}function v(_,x,S,T){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)d(_[y]/u,x[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,T,0,S);let y=0;for(let U=0;U<S;U++)y+=x[U]*T[U];n.update(y,a,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function kT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function XT(r,t,n){const a=new WeakMap,l=new Ge;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let D=function(){H.dispose(),a.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),S===!0&&(L=2),T===!0&&(L=3);let w=h.attributes.position.count*L,O=1;w>t.maxTextureSize&&(O=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const z=new Float32Array(w*O*4*v),H=new C_(z,w,O,v);H.type=Fi,H.needsUpdate=!0;const k=L*4;for(let C=0;C<v;C++){const G=M[C],Z=y[C],lt=U[C],ut=w*O*4*C;for(let ft=0;ft<G.count;ft++){const B=ft*k;x===!0&&(l.fromBufferAttribute(G,ft),z[ut+B+0]=l.x,z[ut+B+1]=l.y,z[ut+B+2]=l.z,z[ut+B+3]=0),S===!0&&(l.fromBufferAttribute(Z,ft),z[ut+B+4]=l.x,z[ut+B+5]=l.y,z[ut+B+6]=l.z,z[ut+B+7]=0),T===!0&&(l.fromBufferAttribute(lt,ft),z[ut+B+8]=l.x,z[ut+B+9]=l.y,z[ut+B+10]=l.z,z[ut+B+11]=lt.itemSize===4?l.w:1)}}_={count:v,texture:H,size:new ae(w,O)},a.set(h,_),h.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let x=0;for(let T=0;T<d.length;T++)x+=d[T];const S=h.morphTargetsRelative?1:1-x;m.getUniforms().setValue(r,"morphTargetBaseInfluence",S),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function WT(r,t,n,a){let l=new WeakMap;function c(m){const d=a.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==d&&(t.update(v),l.set(v,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==d&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,d))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==d&&(_.update(),l.set(_,d))}return v}function u(){l=new WeakMap}function h(m){const d=m.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const k_=new Gn,Hv=new I_(1,1),X_=new C_,W_=new hS,q_=new B_,Gv=[],Vv=[],kv=new Float32Array(16),Xv=new Float32Array(9),Wv=new Float32Array(4);function Zr(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=Gv[l];if(c===void 0&&(c=new Float32Array(l),Gv[l]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function yn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function mu(r,t){let n=Vv[t];n===void 0&&(n=new Int32Array(t),Vv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function qT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function YT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2fv(this.addr,t),yn(n,t)}}function jT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;r.uniform3fv(this.addr,t),yn(n,t)}}function ZT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4fv(this.addr,t),yn(n,t)}}function KT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Wv.set(a),r.uniformMatrix2fv(this.addr,!1,Wv),yn(n,a)}}function QT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Xv.set(a),r.uniformMatrix3fv(this.addr,!1,Xv),yn(n,a)}}function JT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;kv.set(a),r.uniformMatrix4fv(this.addr,!1,kv),yn(n,a)}}function $T(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function tb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2iv(this.addr,t),yn(n,t)}}function eb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3iv(this.addr,t),yn(n,t)}}function nb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4iv(this.addr,t),yn(n,t)}}function ib(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function ab(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2uiv(this.addr,t),yn(n,t)}}function sb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3uiv(this.addr,t),yn(n,t)}}function rb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4uiv(this.addr,t),yn(n,t)}}function ob(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Hv.compareFunction=R_,c=Hv):c=k_,n.setTexture2D(t||c,l)}function lb(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||W_,l)}function cb(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||q_,l)}function ub(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||X_,l)}function fb(r){switch(r){case 5126:return qT;case 35664:return YT;case 35665:return jT;case 35666:return ZT;case 35674:return KT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return tb;case 35668:case 35672:return eb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return ab;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function hb(r,t){r.uniform1fv(this.addr,t)}function db(r,t){const n=Zr(t,this.size,2);r.uniform2fv(this.addr,n)}function pb(r,t){const n=Zr(t,this.size,3);r.uniform3fv(this.addr,n)}function mb(r,t){const n=Zr(t,this.size,4);r.uniform4fv(this.addr,n)}function gb(r,t){const n=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function vb(r,t){const n=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function _b(r,t){const n=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function xb(r,t){r.uniform1iv(this.addr,t)}function yb(r,t){r.uniform2iv(this.addr,t)}function Mb(r,t){r.uniform3iv(this.addr,t)}function Sb(r,t){r.uniform4iv(this.addr,t)}function Eb(r,t){r.uniform1uiv(this.addr,t)}function Tb(r,t){r.uniform2uiv(this.addr,t)}function bb(r,t){r.uniform3uiv(this.addr,t)}function Ab(r,t){r.uniform4uiv(this.addr,t)}function Rb(r,t,n){const a=this.cache,l=t.length,c=mu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==l;++u)n.setTexture2D(t[u]||k_,c[u])}function wb(r,t,n){const a=this.cache,l=t.length,c=mu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==l;++u)n.setTexture3D(t[u]||W_,c[u])}function Cb(r,t,n){const a=this.cache,l=t.length,c=mu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==l;++u)n.setTextureCube(t[u]||q_,c[u])}function Db(r,t,n){const a=this.cache,l=t.length,c=mu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==l;++u)n.setTexture2DArray(t[u]||X_,c[u])}function Ub(r){switch(r){case 5126:return hb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return vb;case 35676:return _b;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return Mb;case 35669:case 35673:return Sb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Db}}class Lb{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=fb(n.type)}}class Nb{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ub(n.type)}}class Pb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const h=l[c];h.setValue(t,n[h.id],a)}}}const id=/(\w+)(\])?(\[|\.)?/g;function qv(r,t){r.seq.push(t),r.map[t.id]=t}function Ob(r,t,n){const a=r.name,l=a.length;for(id.lastIndex=0;;){const c=id.exec(a),u=id.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===l){qv(n,d===void 0?new Lb(h,r,t):new Nb(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new Pb(h),qv(n,v)),n=v}}}class iu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(n,l),u=t.getUniformLocation(n,c.name);Ob(c,u,this)}}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const u=t[l];u.id in n&&a.push(u)}return a}}function Yv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const zb=37297;let Bb=0;function Ib(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=l;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const jv=new de;function Fb(r){Re._getMatrix(jv,Re.workingColorSpace,r);const t=`mat3( ${jv.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Zv(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+Ib(r.getShaderSource(t),h)}else return c}function Hb(r,t){const n=Fb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Gb(r,t){let n;switch(t){case h_:n="Linear";break;case d_:n="Reinhard";break;case p_:n="Cineon";break;case fu:n="ACESFilmic";break;case g_:n="AgX";break;case v_:n="Neutral";break;case m_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jc=new W;function Vb(){Re.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),t=jc.y.toFixed(4),n=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function Xb(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Wb(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function nl(r){return r!==""}function Kv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(r){return r.replace(qb,jb)}const Yb=new Map;function jb(r,t){let n=ge[t];if(n===void 0){const a=Yb.get(t);if(a!==void 0)n=ge[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return jd(n)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(r){return r.replace(Zb,Kb)}function Kb(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function $v(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Qb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===u_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===fM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function Jb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zr:case Br:t="ENVMAP_TYPE_CUBE";break;case hu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $b(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Br:t="ENVMAP_MODE_REFRACTION";break}return t}function tA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case f_:t="ENVMAP_BLENDING_MULTIPLY";break;case DM:t="ENVMAP_BLENDING_MIX";break;case UM:t="ENVMAP_BLENDING_ADD";break}return t}function eA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function nA(r,t,n,a){const l=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=Qb(n),d=Jb(n),g=$b(n),v=tA(n),_=eA(n),x=kb(n),S=Xb(c),T=l.createProgram();let M,y,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(nl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(nl).join(`
`),y.length>0&&(y+=`
`)):(M=[$v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),y=[$v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ja?"#define TONE_MAPPING":"",n.toneMapping!==ja?ge.tonemapping_pars_fragment:"",n.toneMapping!==ja?Gb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,Hb("linearToOutputTexel",n.outputColorSpace),Vb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),u=jd(u),u=Kv(u,n),u=Qv(u,n),h=jd(h),h=Kv(h,n),h=Qv(h,n),u=Jv(u),h=Jv(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===av?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=U+M+u,w=U+y+h,O=Yv(l,l.VERTEX_SHADER,L),z=Yv(l,l.FRAGMENT_SHADER,w);l.attachShader(T,O),l.attachShader(T,z),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function H(G){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T)||"",lt=l.getShaderInfoLog(O)||"",ut=l.getShaderInfoLog(z)||"",ft=Z.trim(),B=lt.trim(),nt=ut.trim();let j=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,O,z);else{const N=Zv(l,O,"vertex"),tt=Zv(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+N+`
`+tt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(B===""||nt==="")&&(yt=!1);yt&&(G.diagnostics={runnable:j,programLog:ft,vertexShader:{log:B,prefix:M},fragmentShader:{log:nt,prefix:y}})}l.deleteShader(O),l.deleteShader(z),k=new iu(l,T),D=Wb(l,T)}let k;this.getUniforms=function(){return k===void 0&&H(this),k};let D;this.getAttributes=function(){return D===void 0&&H(this),D};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,zb)),C},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bb++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=z,this}let iA=0;class aA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(l)===!1&&(u.add(l),l.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new sA(t),n.set(t,a)),a}}class sA{constructor(t){this.id=iA++,this.code=t,this.usedTimes=0}}function rA(r,t,n,a,l,c,u){const h=new U_,m=new aA,d=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let x=l.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return d.add(D),D===0?"uv":`uv${D}`}function M(D,C,G,Z,lt){const ut=Z.fog,ft=lt.geometry,B=D.isMeshStandardMaterial?Z.environment:null,nt=(D.isMeshStandardMaterial?n:t).get(D.envMap||B),j=nt&&nt.mapping===hu?nt.image.height:null,yt=S[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=N!==void 0?N.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let Mt,Ut,Ht,it;if(yt){const Ae=Bi[yt];Mt=Ae.vertexShader,Ut=Ae.fragmentShader}else Mt=D.vertexShader,Ut=D.fragmentShader,m.update(D),Ht=m.getVertexShaderID(D),it=m.getFragmentShaderID(D);const vt=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Qt=lt.isInstancedMesh===!0,Yt=lt.isBatchedMesh===!0,ve=!!D.map,on=!!D.matcap,F=!!nt,ze=!!D.aoMap,ce=!!D.lightMap,ie=!!D.bumpMap,Ot=!!D.normalMap,We=!!D.displacementMap,Vt=!!D.emissiveMap,ue=!!D.metalnessMap,Ke=!!D.roughnessMap,Qe=D.anisotropy>0,P=D.clearcoat>0,b=D.dispersion>0,et=D.iridescence>0,ht=D.sheen>0,mt=D.transmission>0,ct=Qe&&!!D.anisotropyMap,zt=P&&!!D.clearcoatMap,Rt=P&&!!D.clearcoatNormalMap,Wt=P&&!!D.clearcoatRoughnessMap,jt=et&&!!D.iridescenceMap,St=et&&!!D.iridescenceThicknessMap,Lt=ht&&!!D.sheenColorMap,Kt=ht&&!!D.sheenRoughnessMap,kt=!!D.specularMap,Ct=!!D.specularColorMap,fe=!!D.specularIntensityMap,X=mt&&!!D.transmissionMap,bt=mt&&!!D.thicknessMap,wt=!!D.gradientMap,Bt=!!D.alphaMap,Et=D.alphaTest>0,_t=!!D.alphaHash,Gt=!!D.extensions;let re=ja;D.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(re=r.toneMapping);const Le={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:Ut,defines:D.defines,customVertexShaderID:Ht,customFragmentShaderID:it,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:Yt,batchingColor:Yt&&lt._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&lt.instanceColor!==null,instancingMorph:Qt&&lt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ir,alphaToCoverage:!!D.alphaToCoverage,map:ve,matcap:on,envMap:F,envMapMode:F&&nt.mapping,envMapCubeUVHeight:j,aoMap:ze,lightMap:ce,bumpMap:ie,normalMap:Ot,displacementMap:_&&We,emissiveMap:Vt,normalMapObjectSpace:Ot&&D.normalMapType===OM,normalMapTangentSpace:Ot&&D.normalMapType===A_,metalnessMap:ue,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ct,clearcoat:P,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:et,iridescenceMap:jt,iridescenceThicknessMap:St,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:Kt,specularMap:kt,specularColorMap:Ct,specularIntensityMap:fe,transmission:mt,transmissionMap:X,thicknessMap:bt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===Ur&&D.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:_t,combine:D.combine,mapUv:ve&&T(D.map.channel),aoMapUv:ze&&T(D.aoMap.channel),lightMapUv:ce&&T(D.lightMap.channel),bumpMapUv:ie&&T(D.bumpMap.channel),normalMapUv:Ot&&T(D.normalMap.channel),displacementMapUv:We&&T(D.displacementMap.channel),emissiveMapUv:Vt&&T(D.emissiveMap.channel),metalnessMapUv:ue&&T(D.metalnessMap.channel),roughnessMapUv:Ke&&T(D.roughnessMap.channel),anisotropyMapUv:ct&&T(D.anisotropyMap.channel),clearcoatMapUv:zt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&T(D.sheenRoughnessMap.channel),specularMapUv:kt&&T(D.specularMap.channel),specularColorMapUv:Ct&&T(D.specularColorMap.channel),specularIntensityMapUv:fe&&T(D.specularIntensityMap.channel),transmissionMapUv:X&&T(D.transmissionMap.channel),thicknessMapUv:bt&&T(D.thicknessMap.channel),alphaMapUv:Bt&&T(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ot||Qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(ve||Bt),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:ve&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Oe,decodeVideoTextureEmissive:Vt&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Oe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===jn,flipSided:D.side===Zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Gt&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&D.extensions.multiDraw===!0||Yt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Le.vertexUv1s=d.has(1),Le.vertexUv2s=d.has(2),Le.vertexUv3s=d.has(3),d.clear(),Le}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(U(C,D),L(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function U(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const C=S[D.type];let G;if(C){const Z=Bi[C];G=fl.clone(Z.uniforms)}else G=D.uniforms;return G}function O(D,C){let G;for(let Z=0,lt=g.length;Z<lt;Z++){const ut=g[Z];if(ut.cacheKey===C){G=ut,++G.usedTimes;break}}return G===void 0&&(G=new nA(r,C,D,c),g.push(G)),G}function z(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function H(D){m.remove(D)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:O,releaseProgram:z,releaseShaderCache:H,programs:g,dispose:k}}function oA(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function l(u,h,m){r.get(u)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function lA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function t_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function e_(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function u(v,_,x,S,T,M){let y=r[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:S,renderOrder:v.renderOrder,z:T,group:M},r[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=S,y.renderOrder=v.renderOrder,y.z=T,y.group=M),t++,y}function h(v,_,x,S,T,M){const y=u(v,_,x,S,T,M);x.transmission>0?a.push(y):x.transparent===!0?l.push(y):n.push(y)}function m(v,_,x,S,T,M){const y=u(v,_,x,S,T,M);x.transmission>0?a.unshift(y):x.transparent===!0?l.unshift(y):n.unshift(y)}function d(v,_){n.length>1&&n.sort(v||lA),a.length>1&&a.sort(_||t_),l.length>1&&l.sort(_||t_)}function g(){for(let v=t,_=r.length;v<_;v++){const x=r[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:h,unshift:m,finish:g,sort:d}}function cA(){let r=new WeakMap;function t(a,l){const c=r.get(a);let u;return c===void 0?(u=new e_,r.set(a,[u])):l>=c.length?(u=new e_,c.push(u)):u=c[l],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function uA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new le};break;case"SpotLight":n={position:new W,direction:new W,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new le,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new le,groundColor:new le};break;case"RectAreaLight":n={color:new le,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=n,n}}}function fA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let hA=0;function dA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function pA(r){const t=new uA,n=fA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new W);const l=new W,c=new Xe,u=new Xe;function h(d){let g=0,v=0,_=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let x=0,S=0,T=0,M=0,y=0,U=0,L=0,w=0,O=0,z=0,H=0;d.sort(dA);for(let D=0,C=d.length;D<C;D++){const G=d[D],Z=G.color,lt=G.intensity,ut=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Z.r*lt,v+=Z.g*lt,_+=Z.b*lt;else if(G.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(G.sh.coefficients[B],lt);H++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const nt=G.shadow,j=n.get(G);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,a.directionalShadow[x]=j,a.directionalShadowMap[x]=ft,a.directionalShadowMatrix[x]=G.shadow.matrix,U++}a.directional[x]=B,x++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(Z).multiplyScalar(lt),B.distance=ut,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,a.spot[T]=B;const nt=G.shadow;if(G.map&&(a.spotLightMap[O]=G.map,O++,nt.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[T]=nt.matrix,G.castShadow){const j=n.get(G);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,a.spotShadow[T]=j,a.spotShadowMap[T]=ft,w++}T++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(Z).multiplyScalar(lt),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=B,M++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const nt=G.shadow,j=n.get(G);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,j.shadowCameraNear=nt.camera.near,j.shadowCameraFar=nt.camera.far,a.pointShadow[S]=j,a.pointShadowMap[S]=ft,a.pointShadowMatrix[S]=G.shadow.matrix,L++}a.point[S]=B,S++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(lt),B.groundColor.copy(G.groundColor).multiplyScalar(lt),a.hemi[y]=B,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const k=a.hash;(k.directionalLength!==x||k.pointLength!==S||k.spotLength!==T||k.rectAreaLength!==M||k.hemiLength!==y||k.numDirectionalShadows!==U||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==O||k.numLightProbes!==H)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=S,a.hemi.length=y,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+O-z,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=H,k.directionalLength=x,k.pointLength=S,k.spotLength=T,k.rectAreaLength=M,k.hemiLength=y,k.numDirectionalShadows=U,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=O,k.numLightProbes=H,a.version=hA++)}function m(d,g){let v=0,_=0,x=0,S=0,T=0;const M=g.matrixWorldInverse;for(let y=0,U=d.length;y<U;y++){const L=d[y];if(L.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(L.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(L.isRectAreaLight){const w=a.rectArea[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(L.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),S++}else if(L.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:a}}function n_(r){const t=new pA(r),n=[],a=[];function l(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function mA(r){let t=new WeakMap;function n(l,c=0){const u=t.get(l);let h;return u===void 0?(h=new n_(r),t.set(l,[h])):c>=u.length?(h=new n_(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const gA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
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
}`;function _A(r,t,n){let a=new lp;const l=new ae,c=new ae,u=new Ge,h=new GS({depthPacking:PM}),m=new VS,d={},g=n.maxTextureSize,v={[Za]:Zn,[Zn]:Za,[jn]:jn},_=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:gA,fragmentShader:vA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new hn;S.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Te(S,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u_;let y=this.type;this.render=function(z,H,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(fa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const lt=y!==ua&&this.type===ua,ut=y===ua&&this.type!==ua;for(let ft=0,B=z.length;ft<B;ft++){const nt=z[ft],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||lt===!0||ut===!0){const tt=this.type!==ua?{minFilter:oi,magFilter:oi}:{};j.map!==null&&j.map.dispose(),j.map=new wi(l.x,l.y,tt),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const N=j.getViewportCount();for(let tt=0;tt<N;tt++){const xt=j.getViewport(tt);u.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),Z.viewport(u),j.updateMatrices(nt,tt),a=j.getFrustum(),w(H,k,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===ua&&U(j,k),j.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(D,C,G)};function U(z,H){const k=t.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new wi(l.x,l.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,k,_,T,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,k,x,T,null)}function L(z,H,k,D){let C=null;const G=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?m:h,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Z=C.uuid,lt=H.uuid;let ut=d[Z];ut===void 0&&(ut={},d[Z]=ut);let ft=ut[lt];ft===void 0&&(ft=C.clone(),ut[lt]=ft,H.addEventListener("dispose",O)),C=ft}if(C.visible=H.visible,C.wireframe=H.wireframe,D===ua?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:v[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=r.properties.get(C);Z.light=k}return C}function w(z,H,k,D,C){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===ua)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const lt=t.update(z),ut=z.material;if(Array.isArray(ut)){const ft=lt.groups;for(let B=0,nt=ft.length;B<nt;B++){const j=ft[B],yt=ut[j.materialIndex];if(yt&&yt.visible){const N=L(z,yt,D,C);z.onBeforeShadow(r,z,H,k,lt,N,j),r.renderBufferDirect(k,null,lt,N,z,j),z.onAfterShadow(r,z,H,k,lt,N,j)}}}else if(ut.visible){const ft=L(z,ut,D,C);z.onBeforeShadow(r,z,H,k,lt,ft,null),r.renderBufferDirect(k,null,lt,ft,z,null),z.onAfterShadow(r,z,H,k,lt,ft,null)}}const Z=z.children;for(let lt=0,ut=Z.length;lt<ut;lt++)w(Z[lt],H,k,D,C)}function O(z){z.target.removeEventListener("dispose",O);for(const k in d){const D=d[k],C=z.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const xA={[od]:ld,[cd]:hd,[ud]:dd,[Or]:fd,[ld]:od,[hd]:cd,[dd]:ud,[fd]:Or};function yA(r,t){function n(){let X=!1;const bt=new Ge;let wt=null;const Bt=new Ge(0,0,0,0);return{setMask:function(Et){wt!==Et&&!X&&(r.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,_t,Gt,re,Le){Le===!0&&(Et*=re,_t*=re,Gt*=re),bt.set(Et,_t,Gt,re),Bt.equals(bt)===!1&&(r.clearColor(Et,_t,Gt,re),Bt.copy(bt))},reset:function(){X=!1,wt=null,Bt.set(-1,0,0,0)}}}function a(){let X=!1,bt=!1,wt=null,Bt=null,Et=null;return{setReversed:function(_t){if(bt!==_t){const Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const re=Et;Et=null,this.setClear(re)}},getReversed:function(){return bt},setTest:function(_t){_t?vt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!X&&(r.depthMask(_t),wt=_t)},setFunc:function(_t){if(bt&&(_t=xA[_t]),Bt!==_t){switch(_t){case od:r.depthFunc(r.NEVER);break;case ld:r.depthFunc(r.ALWAYS);break;case cd:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case ud:r.depthFunc(r.EQUAL);break;case fd:r.depthFunc(r.GEQUAL);break;case hd:r.depthFunc(r.GREATER);break;case dd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){Et!==_t&&(bt&&(_t=1-_t),r.clearDepth(_t),Et=_t)},reset:function(){X=!1,wt=null,Bt=null,Et=null,bt=!1}}}function l(){let X=!1,bt=null,wt=null,Bt=null,Et=null,_t=null,Gt=null,re=null,Le=null;return{setTest:function(Ae){X||(Ae?vt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Ae){bt!==Ae&&!X&&(r.stencilMask(Ae),bt=Ae)},setFunc:function(Ae,vi,dn){(wt!==Ae||Bt!==vi||Et!==dn)&&(r.stencilFunc(Ae,vi,dn),wt=Ae,Bt=vi,Et=dn)},setOp:function(Ae,vi,dn){(_t!==Ae||Gt!==vi||re!==dn)&&(r.stencilOp(Ae,vi,dn),_t=Ae,Gt=vi,re=dn)},setLocked:function(Ae){X=Ae},setClear:function(Ae){Le!==Ae&&(r.clearStencil(Ae),Le=Ae)},reset:function(){X=!1,bt=null,wt=null,Bt=null,Et=null,_t=null,Gt=null,re=null,Le=null}}}const c=new n,u=new a,h=new l,m=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],S=null,T=!1,M=null,y=null,U=null,L=null,w=null,O=null,z=null,H=new le(0,0,0),k=0,D=!1,C=null,G=null,Z=null,lt=null,ut=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,nt=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=nt>=1):j.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=nt>=2);let yt=null,N={};const tt=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),Mt=new Ge().fromArray(tt),Ut=new Ge().fromArray(xt);function Ht(X,bt,wt,Bt){const Et=new Uint8Array(4),_t=r.createTexture();r.bindTexture(X,_t),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<wt;Gt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return _t}const it={};it[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),vt(r.DEPTH_TEST),u.setFunc(Or),ie(!1),Ot($0),vt(r.CULL_FACE),ze(fa);function vt(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function At(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Qt(X,bt){return v[X]!==bt?(r.bindFramebuffer(X,bt),v[X]=bt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=bt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Yt(X,bt){let wt=x,Bt=!1;if(X){wt=_.get(bt),wt===void 0&&(wt=[],_.set(bt,wt));const Et=X.textures;if(wt.length!==Et.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Gt=Et.length;_t<Gt;_t++)wt[_t]=r.COLOR_ATTACHMENT0+_t;wt.length=Et.length,Bt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(wt)}function ve(X){return S!==X?(r.useProgram(X),S=X,!0):!1}const on={[Es]:r.FUNC_ADD,[dM]:r.FUNC_SUBTRACT,[pM]:r.FUNC_REVERSE_SUBTRACT};on[mM]=r.MIN,on[gM]=r.MAX;const F={[vM]:r.ZERO,[_M]:r.ONE,[xM]:r.SRC_COLOR,[sd]:r.SRC_ALPHA,[bM]:r.SRC_ALPHA_SATURATE,[EM]:r.DST_COLOR,[MM]:r.DST_ALPHA,[yM]:r.ONE_MINUS_SRC_COLOR,[rd]:r.ONE_MINUS_SRC_ALPHA,[TM]:r.ONE_MINUS_DST_COLOR,[SM]:r.ONE_MINUS_DST_ALPHA,[AM]:r.CONSTANT_COLOR,[RM]:r.ONE_MINUS_CONSTANT_COLOR,[wM]:r.CONSTANT_ALPHA,[CM]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(X,bt,wt,Bt,Et,_t,Gt,re,Le,Ae){if(X===fa){T===!0&&(At(r.BLEND),T=!1);return}if(T===!1&&(vt(r.BLEND),T=!0),X!==hM){if(X!==M||Ae!==D){if((y!==Es||w!==Es)&&(r.blendEquation(r.FUNC_ADD),y=Es,w=Es),Ae)switch(X){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pr:r.blendFunc(r.ONE,r.ONE);break;case tv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ev:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ev:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}U=null,L=null,O=null,z=null,H.set(0,0,0),k=0,M=X,D=Ae}return}Et=Et||bt,_t=_t||wt,Gt=Gt||Bt,(bt!==y||Et!==w)&&(r.blendEquationSeparate(on[bt],on[Et]),y=bt,w=Et),(wt!==U||Bt!==L||_t!==O||Gt!==z)&&(r.blendFuncSeparate(F[wt],F[Bt],F[_t],F[Gt]),U=wt,L=Bt,O=_t,z=Gt),(re.equals(H)===!1||Le!==k)&&(r.blendColor(re.r,re.g,re.b,Le),H.copy(re),k=Le),M=X,D=!1}function ce(X,bt){X.side===jn?At(r.CULL_FACE):vt(r.CULL_FACE);let wt=X.side===Zn;bt&&(wt=!wt),ie(wt),X.blending===Ur&&X.transparent===!1?ze(fa):ze(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Vt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function Ot(X){X!==cM?(vt(r.CULL_FACE),X!==G&&(X===$0?r.cullFace(r.BACK):X===uM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),G=X}function We(X){X!==Z&&(B&&r.lineWidth(X),Z=X)}function Vt(X,bt,wt){X?(vt(r.POLYGON_OFFSET_FILL),(lt!==bt||ut!==wt)&&(r.polygonOffset(bt,wt),lt=bt,ut=wt)):At(r.POLYGON_OFFSET_FILL)}function ue(X){X?vt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=r.TEXTURE0+ft-1),yt!==X&&(r.activeTexture(X),yt=X)}function Qe(X,bt,wt){wt===void 0&&(yt===null?wt=r.TEXTURE0+ft-1:wt=yt);let Bt=N[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[wt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(yt!==wt&&(r.activeTexture(wt),yt=wt),r.bindTexture(X,bt||it[X]),Bt.type=X,Bt.texture=bt)}function P(){const X=N[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){Mt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Mt.copy(X))}function Kt(X){Ut.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function kt(X,bt){let wt=d.get(bt);wt===void 0&&(wt=new WeakMap,d.set(bt,wt));let Bt=wt.get(X);Bt===void 0&&(Bt=r.getUniformBlockIndex(bt,X.name),wt.set(X,Bt))}function Ct(X,bt){const Bt=d.get(bt).get(X);m.get(bt)!==Bt&&(r.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),m.set(bt,Bt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,N={},v={},_=new WeakMap,x=[],S=null,T=!1,M=null,y=null,U=null,L=null,w=null,O=null,z=null,H=new le(0,0,0),k=0,D=!1,C=null,G=null,Z=null,lt=null,ut=null,Mt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:vt,disable:At,bindFramebuffer:Qt,drawBuffers:Yt,useProgram:ve,setBlending:ze,setMaterial:ce,setFlipSided:ie,setCullFace:Ot,setLineWidth:We,setPolygonOffset:Vt,setScissorTest:ue,activeTexture:Ke,bindTexture:Qe,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:jt,texImage3D:St,updateUBOMapping:kt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:zt,scissor:Lt,viewport:Kt,reset:fe}}function MA(r,t,n,a,l,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ae,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,b){return x?new OffscreenCanvas(P,b):cu("canvas")}function T(P,b,et){let ht=1;const mt=Qe(P);if((mt.width>et||mt.height>et)&&(ht=et/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ct=Math.floor(ht*mt.width),zt=Math.floor(ht*mt.height);v===void 0&&(v=S(ct,zt));const Rt=b?S(ct,zt):v;return Rt.width=ct,Rt.height=zt,Rt.getContext("2d").drawImage(P,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+zt+")."),Rt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),P;return P}function M(P){return P.generateMipmaps}function y(P){r.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,b,et,ht,mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=b;if(b===r.RED&&(et===r.FLOAT&&(ct=r.R32F),et===r.HALF_FLOAT&&(ct=r.R16F),et===r.UNSIGNED_BYTE&&(ct=r.R8)),b===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.R8UI),et===r.UNSIGNED_SHORT&&(ct=r.R16UI),et===r.UNSIGNED_INT&&(ct=r.R32UI),et===r.BYTE&&(ct=r.R8I),et===r.SHORT&&(ct=r.R16I),et===r.INT&&(ct=r.R32I)),b===r.RG&&(et===r.FLOAT&&(ct=r.RG32F),et===r.HALF_FLOAT&&(ct=r.RG16F),et===r.UNSIGNED_BYTE&&(ct=r.RG8)),b===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RG8UI),et===r.UNSIGNED_SHORT&&(ct=r.RG16UI),et===r.UNSIGNED_INT&&(ct=r.RG32UI),et===r.BYTE&&(ct=r.RG8I),et===r.SHORT&&(ct=r.RG16I),et===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),et===r.UNSIGNED_INT&&(ct=r.RGB32UI),et===r.BYTE&&(ct=r.RGB8I),et===r.SHORT&&(ct=r.RGB16I),et===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),et===r.UNSIGNED_INT&&(ct=r.RGBA32UI),et===r.BYTE&&(ct=r.RGBA8I),et===r.SHORT&&(ct=r.RGBA16I),et===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&(et===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),et===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),b===r.RGBA){const zt=mt?ou:Re.getTransfer(ht);et===r.FLOAT&&(ct=r.RGBA32F),et===r.HALF_FLOAT&&(ct=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ct=zt===Oe?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(P,b){let et;return P?b===null||b===Rs||b===ol?et=r.DEPTH24_STENCIL8:b===Fi?et=r.DEPTH32F_STENCIL8:b===rl&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rs||b===ol?et=r.DEPTH_COMPONENT24:b===Fi?et=r.DEPTH_COMPONENT32F:b===rl&&(et=r.DEPTH_COMPONENT16),et}function O(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==oi&&P.minFilter!==Ii?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function z(P){const b=P.target;b.removeEventListener("dispose",z),k(b),b.isVideoTexture&&g.delete(b)}function H(P){const b=P.target;b.removeEventListener("dispose",H),C(b)}function k(P){const b=a.get(P);if(b.__webglInit===void 0)return;const et=P.source,ht=_.get(et);if(ht){const mt=ht[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&D(P),Object.keys(ht).length===0&&_.delete(et)}a.remove(P)}function D(P){const b=a.get(P);r.deleteTexture(b.__webglTexture);const et=P.source,ht=_.get(et);delete ht[b.__cacheKey],u.memory.textures--}function C(P){const b=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let mt=0;mt<b.__webglFramebuffer[ht].length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[ht][mt]);else r.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[ht]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=P.textures;for(let ht=0,mt=et.length;ht<mt;ht++){const ct=a.get(et[ht]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),u.memory.textures--),a.remove(et[ht])}a.remove(P)}let G=0;function Z(){G=0}function lt(){const P=G;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function ut(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ft(P,b){const et=a.get(P);if(P.isVideoTexture&&ue(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const ht=P.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(et,P,b);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+b)}function B(P,b){const et=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){it(et,P,b);return}n.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+b)}function nt(P,b){const et=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){it(et,P,b);return}n.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+b)}function j(P,b){const et=a.get(P);if(P.version>0&&et.__version!==P.version){vt(et,P,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+b)}const yt={[gd]:r.REPEAT,[bs]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},N={[oi]:r.NEAREST,[LM]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Ii]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[As]:r.LINEAR_MIPMAP_LINEAR},tt={[zM]:r.NEVER,[VM]:r.ALWAYS,[BM]:r.LESS,[R_]:r.LEQUAL,[IM]:r.EQUAL,[GM]:r.GEQUAL,[FM]:r.GREATER,[HM]:r.NOTEQUAL};function xt(P,b){if(b.type===Fi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ii||b.magFilter===Th||b.magFilter===Ec||b.magFilter===As||b.minFilter===Ii||b.minFilter===Th||b.minFilter===Ec||b.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,yt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===oi||b.minFilter!==Ec&&b.minFilter!==As||b.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function Mt(P,b){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",z));const ht=b.source;let mt=_.get(ht);mt===void 0&&(mt={},_.set(ht,mt));const ct=ut(b);if(ct!==P.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,et=!0),mt[ct].usedTimes++;const zt=mt[P.__cacheKey];zt!==void 0&&(mt[P.__cacheKey].usedTimes--,zt.usedTimes===0&&D(b)),P.__cacheKey=ct,P.__webglTexture=mt[ct].texture}return et}function Ut(P,b,et){return Math.floor(Math.floor(P/et)/b)}function Ht(P,b,et,ht){const ct=P.updateRanges;if(ct.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,et,ht,b.data);else{ct.sort((St,Lt)=>St.start-Lt.start);let zt=0;for(let St=1;St<ct.length;St++){const Lt=ct[zt],Kt=ct[St],kt=Lt.start+Lt.count,Ct=Ut(Kt.start,b.width,4),fe=Ut(Lt.start,b.width,4);Kt.start<=kt+1&&Ct===fe&&Ut(Kt.start+Kt.count-1,b.width,4)===Ct?Lt.count=Math.max(Lt.count,Kt.start+Kt.count-Lt.start):(++zt,ct[zt]=Kt)}ct.length=zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let St=0,Lt=ct.length;St<Lt;St++){const Kt=ct[St],kt=Math.floor(Kt.start/4),Ct=Math.ceil(Kt.count/4),fe=kt%b.width,X=Math.floor(kt/b.width),bt=Ct,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,fe,X,bt,wt,et,ht,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,jt)}}function it(P,b,et){let ht=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=r.TEXTURE_3D);const mt=Mt(P,b),ct=b.source;n.bindTexture(ht,P.__webglTexture,r.TEXTURE0+et);const zt=a.get(ct);if(ct.version!==zt.__version||mt===!0){n.activeTexture(r.TEXTURE0+et);const Rt=Re.getPrimaries(Re.workingColorSpace),Wt=b.colorSpace===Wa?null:Re.getPrimaries(b.colorSpace),jt=b.colorSpace===Wa||Rt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let St=T(b.image,!1,l.maxTextureSize);St=Ke(b,St);const Lt=c.convert(b.format,b.colorSpace),Kt=c.convert(b.type);let kt=L(b.internalFormat,Lt,Kt,b.colorSpace,b.isVideoTexture);xt(ht,b);let Ct;const fe=b.mipmaps,X=b.isVideoTexture!==!0,bt=zt.__version===void 0||mt===!0,wt=ct.dataReady,Bt=O(b,St);if(b.isDepthTexture)kt=w(b.format===cl,b.type),bt&&(X?n.texStorage2D(r.TEXTURE_2D,1,kt,St.width,St.height):n.texImage2D(r.TEXTURE_2D,0,kt,St.width,St.height,0,Lt,Kt,null));else if(b.isDataTexture)if(fe.length>0){X&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,kt,fe[0].width,fe[0].height);for(let Et=0,_t=fe.length;Et<_t;Et++)Ct=fe[Et],X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data);b.generateMipmaps=!1}else X?(bt&&n.texStorage2D(r.TEXTURE_2D,Bt,kt,St.width,St.height),wt&&Ht(b,St,Lt,Kt)):n.texImage2D(r.TEXTURE_2D,0,kt,St.width,St.height,0,Lt,Kt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,kt,fe[0].width,fe[0].height,St.depth);for(let Et=0,_t=fe.length;Et<_t;Et++)if(Ct=fe[Et],b.format!==Ri)if(Lt!==null)if(X){if(wt)if(b.layerUpdates.size>0){const Gt=Lv(Ct.width,Ct.height,b.format,b.type);for(const re of b.layerUpdates){const Le=Ct.data.subarray(re*Gt/Ct.data.BYTES_PER_ELEMENT,(re+1)*Gt/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,re,Ct.width,Ct.height,1,Lt,Le)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,St.depth,Lt,Ct.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,St.depth,Lt,Kt,Ct.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,St.depth,0,Lt,Kt,Ct.data)}else{X&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,kt,fe[0].width,fe[0].height);for(let Et=0,_t=fe.length;Et<_t;Et++)Ct=fe[Et],b.format!==Ri?Lt!==null?X?wt&&n.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):n.compressedTexImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data)}else if(b.isDataArrayTexture)if(X){if(bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,kt,St.width,St.height,St.depth),wt)if(b.layerUpdates.size>0){const Et=Lv(St.width,St.height,b.format,b.type);for(const _t of b.layerUpdates){const Gt=St.data.subarray(_t*Et/St.data.BYTES_PER_ELEMENT,(_t+1)*Et/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Lt,Kt,Gt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Lt,Kt,St.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,St.width,St.height,St.depth,0,Lt,Kt,St.data);else if(b.isData3DTexture)X?(bt&&n.texStorage3D(r.TEXTURE_3D,Bt,kt,St.width,St.height,St.depth),wt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Lt,Kt,St.data)):n.texImage3D(r.TEXTURE_3D,0,kt,St.width,St.height,St.depth,0,Lt,Kt,St.data);else if(b.isFramebufferTexture){if(bt)if(X)n.texStorage2D(r.TEXTURE_2D,Bt,kt,St.width,St.height);else{let Et=St.width,_t=St.height;for(let Gt=0;Gt<Bt;Gt++)n.texImage2D(r.TEXTURE_2D,Gt,kt,Et,_t,0,Lt,Kt,null),Et>>=1,_t>>=1}}else if(fe.length>0){if(X&&bt){const Et=Qe(fe[0]);n.texStorage2D(r.TEXTURE_2D,Bt,kt,Et.width,Et.height)}for(let Et=0,_t=fe.length;Et<_t;Et++)Ct=fe[Et],X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt,Kt,Ct):n.texImage2D(r.TEXTURE_2D,Et,kt,Lt,Kt,Ct);b.generateMipmaps=!1}else if(X){if(bt){const Et=Qe(St);n.texStorage2D(r.TEXTURE_2D,Bt,kt,Et.width,Et.height)}wt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Kt,St)}else n.texImage2D(r.TEXTURE_2D,0,kt,Lt,Kt,St);M(b)&&y(ht),zt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function vt(P,b,et){if(b.image.length!==6)return;const ht=Mt(P,b),mt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+et);const ct=a.get(mt);if(mt.version!==ct.__version||ht===!0){n.activeTexture(r.TEXTURE0+et);const zt=Re.getPrimaries(Re.workingColorSpace),Rt=b.colorSpace===Wa?null:Re.getPrimaries(b.colorSpace),Wt=b.colorSpace===Wa||zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!jt&&!St?Lt[_t]=T(b.image[_t],!0,l.maxCubemapSize):Lt[_t]=St?b.image[_t].image:b.image[_t],Lt[_t]=Ke(b,Lt[_t]);const Kt=Lt[0],kt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),fe=L(b.internalFormat,kt,Ct,b.colorSpace),X=b.isVideoTexture!==!0,bt=ct.__version===void 0||ht===!0,wt=mt.dataReady;let Bt=O(b,Kt);xt(r.TEXTURE_CUBE_MAP,b);let Et;if(jt){X&&bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){Et=Lt[_t].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const re=Et[Gt];b.format!==Ri?kt!==null?X?wt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,re.width,re.height,kt,re.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,re.width,re.height,kt,Ct,re.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,fe,re.width,re.height,0,kt,Ct,re.data)}}}else{if(Et=b.mipmaps,X&&bt){Et.length>0&&Bt++;const _t=Qe(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,kt,Ct,Lt[_t].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Lt[_t].width,Lt[_t].height,0,kt,Ct,Lt[_t].data);for(let Gt=0;Gt<Et.length;Gt++){const Le=Et[Gt].image[_t].image;X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Le.width,Le.height,kt,Ct,Le.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,fe,Le.width,Le.height,0,kt,Ct,Le.data)}}else{X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Ct,Lt[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,kt,Ct,Lt[_t]);for(let Gt=0;Gt<Et.length;Gt++){const re=Et[Gt];X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,kt,Ct,re.image[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,fe,kt,Ct,re.image[_t])}}}M(b)&&y(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function At(P,b,et,ht,mt,ct){const zt=c.convert(et.format,et.colorSpace),Rt=c.convert(et.type),Wt=L(et.internalFormat,zt,Rt,et.colorSpace),jt=a.get(b),St=a.get(et);if(St.__renderTarget=b,!jt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ct),Kt=Math.max(1,b.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?n.texImage3D(mt,ct,Wt,Lt,Kt,b.depth,0,zt,Rt,null):n.texImage2D(mt,ct,Wt,Lt,Kt,0,zt,Rt,null)}n.bindFramebuffer(r.FRAMEBUFFER,P),Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,mt,St.__webglTexture,0,We(b)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,mt,St.__webglTexture,ct),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(P,b,et){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const ht=b.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=w(b.stencilBuffer,mt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=We(b);Vt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ct,b.width,b.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,P)}else{const ht=b.textures;for(let mt=0;mt<ht.length;mt++){const ct=ht[mt],zt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),Wt=L(ct.internalFormat,zt,Rt,ct.colorSpace),jt=We(b);et&&Vt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Wt,b.width,b.height):Vt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,Wt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const mt=ht.__webglTexture,ct=We(b);if(b.depthTexture.format===ll)Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(b.depthTexture.format===cl)Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ve(P){const b=a.get(P),et=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ht=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),b.__depthDisposeCallback=mt}b.__boundDepthTexture=ht}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=P.texture.mipmaps;ht&&ht.length>0?Yt(b.__webglFramebuffer[0],P):Yt(b.__webglFramebuffer,P)}else if(et){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=r.createRenderbuffer(),Qt(b.__webglDepthbuffer[ht],P,!1);else{const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const ht=P.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Qt(b.__webglDepthbuffer,P,!1);else{const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function on(P,b,et){const ht=a.get(P);b!==void 0&&At(ht.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&ve(P)}function F(P){const b=P.texture,et=a.get(P),ht=a.get(b);P.addEventListener("dispose",H);const mt=P.textures,ct=P.isWebGLCubeRenderTarget===!0,zt=mt.length>1;if(zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=b.version,u.memory.textures++),ct){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)et.__webglFramebuffer[Rt][Wt]=r.createFramebuffer()}else et.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Rt=0,Wt=mt.length;Rt<Wt;Rt++){const jt=a.get(mt[Rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),u.memory.textures++)}if(P.samples>0&&Vt(P)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<mt.length;Rt++){const Wt=mt[Rt];et.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const jt=c.convert(Wt.format,Wt.colorSpace),St=c.convert(Wt.type),Lt=L(Wt.internalFormat,jt,St,Wt.colorSpace,P.isXRRenderTarget===!0),Kt=We(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Lt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Qt(et.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){n.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(et.__webglFramebuffer[Rt][Wt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else At(et.__webglFramebuffer[Rt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Rt=0,Wt=mt.length;Rt<Wt;Rt++){const jt=mt[Rt],St=a.get(jt);let Lt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,St.__webglTexture),xt(Lt,jt),At(et.__webglFramebuffer,P,jt,r.COLOR_ATTACHMENT0+Rt,Lt,0),M(jt)&&y(Lt)}n.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,ht.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(et.__webglFramebuffer[Wt],P,b,r.COLOR_ATTACHMENT0,Rt,Wt);else At(et.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,Rt,0);M(b)&&y(Rt),n.unbindTexture()}P.depthBuffer&&ve(P)}function ze(P){const b=P.textures;for(let et=0,ht=b.length;et<ht;et++){const mt=b[et];if(M(mt)){const ct=U(P),zt=a.get(mt).__webglTexture;n.bindTexture(ct,zt),y(ct),n.unbindTexture()}}}const ce=[],ie=[];function Ot(P){if(P.samples>0){if(Vt(P)===!1){const b=P.textures,et=P.width,ht=P.height;let mt=r.COLOR_BUFFER_BIT;const ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(P),Rt=b.length>1;if(Rt)for(let jt=0;jt<b.length;jt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Wt=P.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let jt=0;jt<b.length;jt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const St=a.get(b[jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,et,ht,0,0,et,ht,mt,r.NEAREST),m===!0&&(ce.length=0,ie.length=0,ce.push(r.COLOR_ATTACHMENT0+jt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ce.push(ct),ie.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let jt=0;jt<b.length;jt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const St=a.get(b[jt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,St,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function We(P){return Math.min(l.maxSamples,P.samples)}function Vt(P){const b=a.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(P){const b=u.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function Ke(P,b){const et=P.colorSpace,ht=P.format,mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==Ir&&et!==Wa&&(Re.getTransfer(et)===Oe?(ht!==Ri||mt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=lt,this.resetTextureUnits=Z,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=on,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function SA(r,t){function n(a,l=Wa){let c;const u=Re.getTransfer(l);if(a===Vi)return r.UNSIGNED_BYTE;if(a===tp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===ep)return r.UNSIGNED_SHORT_5_5_5_1;if(a===M_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===S_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===x_)return r.BYTE;if(a===y_)return r.SHORT;if(a===rl)return r.UNSIGNED_SHORT;if(a===$d)return r.INT;if(a===Rs)return r.UNSIGNED_INT;if(a===Fi)return r.FLOAT;if(a===ha)return r.HALF_FLOAT;if(a===E_)return r.ALPHA;if(a===T_)return r.RGB;if(a===Ri)return r.RGBA;if(a===ll)return r.DEPTH_COMPONENT;if(a===cl)return r.DEPTH_STENCIL;if(a===np)return r.RED;if(a===ip)return r.RED_INTEGER;if(a===b_)return r.RG;if(a===ap)return r.RG_INTEGER;if(a===sp)return r.RGBA_INTEGER;if(a===$c||a===tu||a===eu||a===nu)if(u===Oe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===_d||a===xd||a===yd||a===Md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===xd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Sd||a===Ed||a===Td)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Sd||a===Ed)return u===Oe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Td)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===bd||a===Ad||a===Rd||a===wd||a===Cd||a===Dd||a===Ud||a===Ld||a===Nd||a===Pd||a===Od||a===zd||a===Bd||a===Id)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===bd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ad)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Rd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===wd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Cd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Dd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ud)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ld)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Nd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Od)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===zd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Bd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Id)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Fd||a===Hd||a===Gd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Fd)return u===Oe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Vd||a===kd||a===Xd||a===Wd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Vd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ol?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const EA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TA=`
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

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new F_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new _n({vertexShader:EA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Te(new ws(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends kr{constructor(t,n){super();const a=this;let l=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,v=null,_=null,x=null,S=null;const T=typeof XRWebGLBinding<"u",M=new bA,y={},U=n.getContextAttributes();let L=null,w=null;const O=[],z=[],H=new ae;let k=null;const D=new Yn;D.viewport=new Ge;const C=new Yn;C.viewport=new Ge;const G=[D,C],Z=new YS;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=O[it];return vt===void 0&&(vt=new Wh,O[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=O[it];return vt===void 0&&(vt=new Wh,O[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=O[it];return vt===void 0&&(vt=new Wh,O[it]=vt),vt.getHandSpace()};function ft(it){const vt=z.indexOf(it.inputSource);if(vt===-1)return;const At=O[vt];At!==void 0&&(At.update(it.inputSource,it.frame,d||u),At.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",nt);for(let it=0;it<O.length;it++){const vt=z[it];vt!==null&&(z[it]=null,O[it].disconnect(vt))}lt=null,ut=null,M.reset();for(const it in y)delete y[it];t.setRenderTarget(L),x=null,_=null,v=null,l=null,w=null,Ht.stop(),a.isPresenting=!1,t.setPixelRatio(k),t.setSize(H.width,H.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return S},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",B),l.addEventListener("inputsourceschange",nt),U.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(H),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Qt=null,Yt=null;U.depth&&(Yt=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=U.stencil?cl:ll,Qt=U.stencil?ol:Rs);const ve={colorFormat:n.RGBA8,depthFormat:Yt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ve),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),w=new wi(_.textureWidth,_.textureHeight,{format:Ri,type:Vi,depthTexture:new I_(_.textureWidth,_.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,n,At),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new wi(x.framebufferWidth,x.framebufferHeight,{format:Ri,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await l.requestReferenceSpace(h),Ht.setContext(l),Ht.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(it){for(let vt=0;vt<it.removed.length;vt++){const At=it.removed[vt],Qt=z.indexOf(At);Qt>=0&&(z[Qt]=null,O[Qt].disconnect(At))}for(let vt=0;vt<it.added.length;vt++){const At=it.added[vt];let Qt=z.indexOf(At);if(Qt===-1){for(let ve=0;ve<O.length;ve++)if(ve>=z.length){z.push(At),Qt=ve;break}else if(z[ve]===null){z[ve]=At,Qt=ve;break}if(Qt===-1)break}const Yt=O[Qt];Yt&&Yt.connect(At)}}const j=new W,yt=new W;function N(it,vt,At){j.setFromMatrixPosition(vt.matrixWorld),yt.setFromMatrixPosition(At.matrixWorld);const Qt=j.distanceTo(yt),Yt=vt.projectionMatrix.elements,ve=At.projectionMatrix.elements,on=Yt[14]/(Yt[10]-1),F=Yt[14]/(Yt[10]+1),ze=(Yt[9]+1)/Yt[5],ce=(Yt[9]-1)/Yt[5],ie=(Yt[8]-1)/Yt[0],Ot=(ve[8]+1)/ve[0],We=on*ie,Vt=on*Ot,ue=Qt/(-ie+Ot),Ke=ue*-ie;if(vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ke),it.translateZ(ue),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Yt[10]===-1)it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Qe=on+ue,P=F+ue,b=We-Ke,et=Vt+(Qt-Ke),ht=ze*F/P*Qe,mt=ce*F/P*Qe;it.projectionMatrix.makePerspective(b,et,ht,mt,Qe,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function tt(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let vt=it.near,At=it.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),Z.near=C.near=D.near=vt,Z.far=C.far=D.far=At,(lt!==Z.near||ut!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),lt=Z.near,ut=Z.far),Z.layers.mask=it.layers.mask|6,D.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const Qt=it.parent,Yt=Z.cameras;tt(Z,Qt);for(let ve=0;ve<Yt.length;ve++)tt(Yt[ve],Qt);Yt.length===2?N(Z,D,C):Z.projectionMatrix.copy(D.projectionMatrix),xt(it,Z,Qt)};function xt(it,vt,At){At===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Fr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&x===null))return m},this.setFoveation=function(it){m=it,_!==null&&(_.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(it){return y[it]};let Mt=null;function Ut(it,vt){if(g=vt.getViewerPose(d||u),S=vt,g!==null){const At=g.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let Qt=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,Qt=!0);for(let F=0;F<At.length;F++){const ze=At[F];let ce=null;if(x!==null)ce=x.getViewport(ze);else{const Ot=v.getViewSubImage(_,ze);ce=Ot.viewport,F===0&&(t.setRenderTargetTextures(w,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(w))}let ie=G[F];ie===void 0&&(ie=new Yn,ie.layers.enable(F),ie.viewport=new Ge,G[F]=ie),ie.matrix.fromArray(ze.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ze.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ce.x,ce.y,ce.width,ce.height),F===0&&(Z.matrix.copy(ie.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Qt===!0&&Z.cameras.push(ie)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const F=v.getDepthInformation(At[0]);F&&F.isValid&&F.texture&&M.init(F,l.renderState)}if(Yt&&Yt.includes("camera-access")&&T){t.state.unbindTexture(),v=a.getBinding();for(let F=0;F<At.length;F++){const ze=At[F].camera;if(ze){let ce=y[ze];ce||(ce=new F_,y[ze]=ce);const ie=v.getCameraImage(ze);ce.sourceTexture=ie}}}}for(let At=0;At<O.length;At++){const Qt=z[At],Yt=O[At];Qt!==null&&Yt!==void 0&&Yt.update(Qt,vt,d||u)}Mt&&Mt(it,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),S=null}const Ht=new V_;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(it){Mt=it},this.dispose=function(){}}}const xs=new ki,RA=new Xe;function wA(r,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,O_(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,U,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),S(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,U,L):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Zn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Zn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const U=t.get(y),L=U.envMap,w=U.envMapRotation;L&&(M.envMap.value=L,xs.copy(w),xs.x*=-1,xs.y*=-1,xs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),M.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(xs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,U,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*U,M.scale.value=L*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,U){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const U=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function CA(r,t,n,a){let l={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const w=L.program;a.uniformBlockBinding(U,w)}function d(U,L){let w=l[U.id];w===void 0&&(S(U),w=g(U),l[U.id]=w,U.addEventListener("dispose",M));const O=L.program;a.updateUBOMapping(U,O);const z=t.render.frame;c[U.id]!==z&&(_(U),c[U.id]=z)}function g(U){const L=v();U.__bindingPointIndex=L;const w=r.createBuffer(),O=U.__size,z=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,O,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function v(){for(let U=0;U<h;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const L=l[U.id],w=U.uniforms,O=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,H=w.length;z<H;z++){const k=Array.isArray(w[z])?w[z]:[w[z]];for(let D=0,C=k.length;D<C;D++){const G=k[D];if(x(G,z,D,O)===!0){const Z=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let ft=0;ft<lt.length;ft++){const B=lt[ft],nt=T(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,Z+ut,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ut),ut+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(U,L,w,O){const z=U.value,H=L+"_"+w;if(O[H]===void 0)return typeof z=="number"||typeof z=="boolean"?O[H]=z:O[H]=z.clone(),!0;{const k=O[H];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return O[H]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function S(U){const L=U.uniforms;let w=0;const O=16;for(let H=0,k=L.length;H<k;H++){const D=Array.isArray(L[H])?L[H]:[L[H]];for(let C=0,G=D.length;C<G;C++){const Z=D[C],lt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,ft=lt.length;ut<ft;ut++){const B=lt[ut],nt=T(B),j=w%O,yt=j%nt.boundary,N=j+yt;w+=yt,N!==0&&O-N<nt.storage&&(w+=O-N),Z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=nt.storage}}}const z=w%O;return z>0&&(w+=O-z),U.__size=w,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function M(U){const L=U.target;L.removeEventListener("dispose",M);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const U in l)r.deleteBuffer(l[U]);u=[],l={},c={}}return{bind:m,update:d,dispose:y}}class DA{constructor(t={}){const{canvas:n=sS(),context:a=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const S=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=ri;let z=0,H=0,k=null,D=-1,C=null;const G=new Ge,Z=new Ge;let lt=null;const ut=new le(0);let ft=0,B=n.width,nt=n.height,j=1,yt=null,N=null;const tt=new Ge(0,0,B,nt),xt=new Ge(0,0,B,nt);let Mt=!1;const Ut=new lp;let Ht=!1,it=!1;const vt=new Xe,At=new W,Qt=new Ge,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function on(){return k===null?j:1}let F=a;function ze(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Et,!1),F===null){const q="webgl2";if(F=ze(q,R),F===null)throw ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,ie,Ot,We,Vt,ue,Ke,Qe,P,b,et,ht,mt,ct,zt,Rt,Wt,jt,St,Lt,Kt,kt,Ct,fe;function X(){ce=new HT(F),ce.init(),kt=new SA(F,ce),ie=new NT(F,ce,t,kt),Ot=new yA(F,ce),ie.reversedDepthBuffer&&_&&Ot.buffers.depth.setReversed(!0),We=new kT(F),Vt=new oA,ue=new MA(F,ce,Ot,Vt,ie,kt,We),Ke=new OT(w),Qe=new FT(w),P=new ZS(F),Ct=new UT(F,P),b=new GT(F,P,We,Ct),et=new WT(F,b,P,We),St=new XT(F,ie,ue),Rt=new PT(Vt),ht=new rA(w,Ke,Qe,ce,ie,Ct,Rt),mt=new wA(w,Vt),ct=new cA,zt=new mA(ce),jt=new DT(w,Ke,Qe,Ot,et,x,m),Wt=new _A(w,et,ie),fe=new CA(F,We,ie,Ot),Lt=new LT(F,ce,We),Kt=new VT(F,ce,We),We.programs=ht.programs,w.capabilities=ie,w.extensions=ce,w.properties=Vt,w.renderLists=ct,w.shadowMap=Wt,w.state=Ot,w.info=We}X();const bt=new AA(w,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(B,nt,!1))},this.getSize=function(R){return R.set(B,nt)},this.setSize=function(R,q,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,nt=q,n.width=Math.floor(R*j),n.height=Math.floor(q*j),rt===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*j,nt*j).floor()},this.setDrawingBufferSize=function(R,q,rt){B=R,nt=q,j=rt,n.width=Math.floor(R*rt),n.height=Math.floor(q*rt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,q,rt,ot){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,q,rt,ot),Ot.viewport(G.copy(tt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,q,rt,ot){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,q,rt,ot),Ot.scissor(Z.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Ot.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,rt=!0){let ot=0;if(R){let K=!1;if(k!==null){const Tt=k.texture.format;K=Tt===sp||Tt===ap||Tt===ip}if(K){const Tt=k.texture.type,Dt=Tt===Vi||Tt===Rs||Tt===rl||Tt===ol||Tt===tp||Tt===ep,It=jt.getClearColor(),Nt=jt.getClearAlpha(),$t=It.r,ee=It.g,qt=It.b;Dt?(S[0]=$t,S[1]=ee,S[2]=qt,S[3]=Nt,F.clearBufferuiv(F.COLOR,0,S)):(T[0]=$t,T[1]=ee,T[2]=qt,T[3]=Nt,F.clearBufferiv(F.COLOR,0,T))}else ot|=F.COLOR_BUFFER_BIT}q&&(ot|=F.DEPTH_BUFFER_BIT),rt&&(ot|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),jt.dispose(),ct.dispose(),zt.dispose(),Vt.dispose(),Ke.dispose(),Qe.dispose(),et.dispose(),Ct.dispose(),fe.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",dn),bt.removeEventListener("sessionend",pn),$e.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=We.autoReset,q=Wt.enabled,rt=Wt.autoUpdate,ot=Wt.needsUpdate,K=Wt.type;X(),We.autoReset=R,Wt.enabled=q,Wt.autoUpdate=rt,Wt.needsUpdate=ot,Wt.type=K}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const q=R.target;q.removeEventListener("dispose",_t),Gt(q)}function Gt(R){re(R),Vt.remove(R)}function re(R){const q=Vt.get(R).programs;q!==void 0&&(q.forEach(function(rt){ht.releaseProgram(rt)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,rt,ot,K,Tt){q===null&&(q=Yt);const Dt=K.isMesh&&K.matrixWorld.determinant()<0,It=pa(R,q,rt,ot,K);Ot.setMaterial(ot,Dt);let Nt=rt.index,$t=1;if(ot.wireframe===!0){if(Nt=b.getWireframeAttribute(rt),Nt===void 0)return;$t=2}const ee=rt.drawRange,qt=rt.attributes.position;let pe=ee.start*$t,Ce=(ee.start+ee.count)*$t;Tt!==null&&(pe=Math.max(pe,Tt.start*$t),Ce=Math.min(Ce,(Tt.start+Tt.count)*$t)),Nt!==null?(pe=Math.max(pe,0),Ce=Math.min(Ce,Nt.count)):qt!=null&&(pe=Math.max(pe,0),Ce=Math.min(Ce,qt.count));const je=Ce-pe;if(je<0||je===1/0)return;Ct.setup(K,ot,It,rt,Nt);let Be,me=Lt;if(Nt!==null&&(Be=P.get(Nt),me=Kt,me.setIndex(Be)),K.isMesh)ot.wireframe===!0?(Ot.setLineWidth(ot.wireframeLinewidth*on()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(K.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Ot.setLineWidth(Jt*on()),K.isLineSegments?me.setMode(F.LINES):K.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else K.isPoints?me.setMode(F.POINTS):K.isSprite&&me.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ul("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Ye=K._multiDrawCounts,Me=K._multiDrawCount,Dn=Nt?P.get(Nt).bytesPerElement:1,_i=Vt.get(ot).currentProgram.getUniforms();for(let zn=0;zn<Me;zn++)_i.setValue(F,"_gl_DrawID",zn),me.render(Jt[zn]/Dn,Ye[zn])}else if(K.isInstancedMesh)me.renderInstances(pe,je,K.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,Jt);me.renderInstances(pe,je,Ye)}else me.render(pe,je)};function Le(R,q,rt){R.transparent===!0&&R.side===jn&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Di(R,q,rt),R.side=Za,R.needsUpdate=!0,Di(R,q,rt),R.side=jn):Di(R,q,rt)}this.compile=function(R,q,rt=null){rt===null&&(rt=R),y=zt.get(rt),y.init(q),L.push(y),rt.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const It=Tt[Dt];Le(It,rt,K),ot.add(It)}else Le(Tt,rt,K),ot.add(Tt)}),y=L.pop(),ot},this.compileAsync=function(R,q,rt=null){const ot=this.compile(R,q,rt);return new Promise(K=>{function Tt(){if(ot.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){K(R);return}setTimeout(Tt,10)}ce.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ae=null;function vi(R){Ae&&Ae(R)}function dn(){$e.stop()}function pn(){$e.start()}const $e=new V_;$e.setAnimationLoop(vi),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(R){Ae=R,bt.setAnimationLoop(R),R===null?$e.stop():$e.start()},bt.addEventListener("sessionstart",dn),bt.addEventListener("sessionend",pn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,k),y=zt.get(R,L.length),y.init(q),L.push(y),vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ut.setFromProjectionMatrix(vt,Hi,q.reversedDepth),it=this.localClippingEnabled,Ht=Rt.init(this.clippingPlanes,it),M=ct.get(R,U.length),M.init(),U.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ci(Tt,q,-1/0,w.sortObjects)}Ci(R,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(yt,N),ve=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ve&&jt.addToRenderList(M,R),this.info.render.frame++,Ht===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;Wt.render(rt,R,q),Ht===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,K=M.transmissive;if(y.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(K.length>0)for(let Dt=0,It=Tt.length;Dt<It;Dt++){const Nt=Tt[Dt];pl(ot,K,R,Nt)}ve&&jt.render(R);for(let Dt=0,It=Tt.length;Dt<It;Dt++){const Nt=Tt[Dt];Ds(M,R,Nt,Nt.viewport)}}else K.length>0&&pl(ot,K,R,q),ve&&jt.render(R),Ds(M,R,q);k!==null&&H===0&&(ue.updateMultisampleRenderTarget(k),ue.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(w,R,q),Ct.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(y=L[L.length-1],Ht===!0&&Rt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?M=U[U.length-1]:M=null};function Ci(R,q,rt,ot){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){ot&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Dt=et.update(R),It=R.material;It.visible&&M.push(R,Dt,It,rt,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){const Dt=et.update(R),It=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(It)){const Nt=Dt.groups;for(let $t=0,ee=Nt.length;$t<ee;$t++){const qt=Nt[$t],pe=It[qt.materialIndex];pe&&pe.visible&&M.push(R,Dt,pe,rt,Qt.z,qt)}}else It.visible&&M.push(R,Dt,It,rt,Qt.z,null)}}const Tt=R.children;for(let Dt=0,It=Tt.length;Dt<It;Dt++)Ci(Tt[Dt],q,rt,ot)}function Ds(R,q,rt,ot){const K=R.opaque,Tt=R.transmissive,Dt=R.transparent;y.setupLightsView(rt),Ht===!0&&Rt.setGlobalState(w.clippingPlanes,rt),ot&&Ot.viewport(G.copy(ot)),K.length>0&&Us(K,q,rt),Tt.length>0&&Us(Tt,q,rt),Dt.length>0&&Us(Dt,q,rt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function pl(R,q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new wi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?ha:Vi,minFilter:As,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||G;Tt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Nt=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(ut),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),ve&&jt.render(rt);const ee=w.toneMapping;w.toneMapping=ja;const qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),Ht===!0&&Rt.setGlobalState(w.clippingPlanes,ot),Us(R,rt,ot),ue.updateMultisampleRenderTarget(Tt),ue.updateRenderTargetMipmap(Tt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ce=0,je=q.length;Ce<je;Ce++){const Be=q[Ce],me=Be.object,Jt=Be.geometry,Ye=Be.material,Me=Be.group;if(Ye.side===jn&&me.layers.test(ot.layers)){const Dn=Ye.side;Ye.side=Zn,Ye.needsUpdate=!0,Qr(me,rt,ot,Jt,Ye,Me),Ye.side=Dn,Ye.needsUpdate=!0,pe=!0}}pe===!0&&(ue.updateMultisampleRenderTarget(Tt),ue.updateRenderTargetMipmap(Tt))}w.setRenderTarget(It,Nt,$t),w.setClearColor(ut,ft),qt!==void 0&&(ot.viewport=qt),w.toneMapping=ee}function Us(R,q,rt){const ot=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Tt=R.length;K<Tt;K++){const Dt=R[K],It=Dt.object,Nt=Dt.geometry,$t=Dt.group;let ee=Dt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),It.layers.test(rt.layers)&&Qr(It,q,rt,Nt,ee,$t)}}function Qr(R,q,rt,ot,K,Tt){R.onBeforeRender(w,q,rt,ot,K,Tt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,q,rt,ot,R,Tt),K.transparent===!0&&K.side===jn&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,w.renderBufferDirect(rt,q,ot,K,R,Tt),K.side=Za,K.needsUpdate=!0,w.renderBufferDirect(rt,q,ot,K,R,Tt),K.side=jn):w.renderBufferDirect(rt,q,ot,K,R,Tt),R.onAfterRender(w,q,rt,ot,K,Tt)}function Di(R,q,rt){q.isScene!==!0&&(q=Yt);const ot=Vt.get(R),K=y.state.lights,Tt=y.state.shadowsArray,Dt=K.state.version,It=ht.getParameters(R,K.state,Tt,q,rt),Nt=ht.getProgramCacheKey(It);let $t=ot.programs;ot.environment=R.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(R.isMeshStandardMaterial?Qe:Ke).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",_t),$t=new Map,ot.programs=$t);let ee=$t.get(Nt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Dt)return Xi(R,It),ee}else It.uniforms=ht.getUniforms(R),R.onBeforeCompile(It,w),ee=ht.acquireProgram(It,Nt),$t.set(Nt,ee),ot.uniforms=It.uniforms;const qt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),Xi(R,It),ot.needsLights=ma(R),ot.lightsStateVersion=Dt,ot.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Ls(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=iu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Xi(R,q){const rt=Vt.get(R);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function pa(R,q,rt,ot,K){q.isScene!==!0&&(q=Yt),ue.resetTextureUnits();const Tt=q.fog,Dt=ot.isMeshStandardMaterial?q.environment:null,It=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ir,Nt=(ot.isMeshStandardMaterial?Qe:Ke).get(ot.envMap||Dt),$t=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),qt=!!rt.morphAttributes.position,pe=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let je=ja;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(je=w.toneMapping);const Be=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,me=Be!==void 0?Be.length:0,Jt=Vt.get(ot),Ye=y.state.lights;if(Ht===!0&&(it===!0||R!==C)){const tn=R===C&&ot.id===D;Rt.setState(ot,R,tn)}let Me=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ye.state.version||Jt.outputColorSpace!==It||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==Nt||ot.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==qt||Jt.morphNormals!==pe||Jt.morphColors!==Ce||Jt.toneMapping!==je||Jt.morphTargetsCount!==me)&&(Me=!0):(Me=!0,Jt.__version=ot.version);let Dn=Jt.currentProgram;Me===!0&&(Dn=Di(ot,q,K));let _i=!1,zn=!1,Mn=!1;const Ve=Dn.getUniforms(),Bn=Jt.uniforms;if(Ot.useProgram(Dn.program)&&(_i=!0,zn=!0,Mn=!0),ot.id!==D&&(D=ot.id,zn=!0),_i||C!==R){Ot.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ve.setValue(F,"projectionMatrix",R.projectionMatrix),Ve.setValue(F,"viewMatrix",R.matrixWorldInverse);const An=Ve.map.cameraPosition;An!==void 0&&An.setValue(F,At.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,zn=!0,Mn=!0)}if(K.isSkinnedMesh){Ve.setOptional(F,K,"bindMatrix"),Ve.setOptional(F,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ve.setValue(F,"boneTexture",tn.boneTexture,ue))}K.isBatchedMesh&&(Ve.setOptional(F,K,"batchingTexture"),Ve.setValue(F,"batchingTexture",K._matricesTexture,ue),Ve.setOptional(F,K,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",K._indirectTexture,ue),Ve.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",K._colorsTexture,ue));const Un=rt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&St.update(K,rt,Dn),(zn||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Ve.setValue(F,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Bn.envMap.value=Nt,Bn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(Bn.envMapIntensity.value=q.environmentIntensity),zn&&(Ve.setValue(F,"toneMappingExposure",w.toneMappingExposure),Jt.needsLights&&Qa(Bn,Mn),Tt&&ot.fog===!0&&mt.refreshFogUniforms(Bn,Tt),mt.refreshMaterialUniforms(Bn,ot,j,nt,y.state.transmissionRenderTarget[R.id]),iu.upload(F,Ls(Jt),Bn,ue)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(iu.upload(F,Ls(Jt),Bn,ue),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ve.setValue(F,"center",K.center),Ve.setValue(F,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(F,"normalMatrix",K.normalMatrix),Ve.setValue(F,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const tn=ot.uniformsGroups;for(let An=0,Ns=tn.length;An<Ns;An++){const Vn=tn[An];fe.update(Vn,Dn),fe.bind(Vn,Dn)}}return Dn}function Qa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ma(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,q,rt){const ot=Vt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=q,Vt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const rt=Vt.get(R);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const ln=F.createFramebuffer();this.setRenderTarget=function(R,q=0,rt=0){k=R,z=q,H=rt;let ot=!0,K=null,Tt=!1,Dt=!1;if(R){const Nt=Vt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(F.FRAMEBUFFER,null),ot=!1;else if(Nt.__webglFramebuffer===void 0)ue.setupRenderTarget(R);else if(Nt.__hasExternalTextures)ue.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Vt.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const ee=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?K=ee[q][rt]:K=ee[q],Tt=!0):R.samples>0&&ue.useMultisampledRTT(R)===!1?K=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[rt]:K=ee,G.copy(R.viewport),Z.copy(R.scissor),lt=R.scissorTest}else G.copy(tt).multiplyScalar(j).floor(),Z.copy(xt).multiplyScalar(j).floor(),lt=Mt;if(rt!==0&&(K=ln),Ot.bindFramebuffer(F.FRAMEBUFFER,K)&&ot&&Ot.drawBuffers(R,K),Ot.viewport(G),Ot.scissor(Z),Ot.setScissorTest(lt),Tt){const Nt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,rt)}else if(Dt){const Nt=q;for(let $t=0;$t<R.textures.length;$t++){const ee=Vt.get(R.textures[$t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$t,ee.__webglTexture,rt,Nt)}}else if(R!==null&&rt!==0){const Nt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,q,rt,ot,K,Tt,Dt,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Ot.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const $t=R.textures[It],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+It),F.readPixels(q,rt,ot,K,kt.convert(ee),kt.convert(qt),Tt))}finally{const $t=k!==null?Vt.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(F.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,q,rt,ot,K,Tt,Dt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-K){Ot.bindFramebuffer(F.FRAMEBUFFER,Nt);const $t=R.textures[It],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+It),F.readPixels(q,rt,ot,K,kt.convert(ee),kt.convert(qt),0);const Ce=k!==null?Vt.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(F.FRAMEBUFFER,Ce);const je=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await rS(F,je,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(pe),F.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Dt=q!==null?q.x:0,It=q!==null?q.y:0;ue.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Dt,It,K,Tt),Ot.unbindTexture()};const ml=F.createFramebuffer(),gl=F.createFramebuffer();this.copyTextureToTexture=function(R,q,rt=null,ot=null,K=0,Tt=null){Tt===null&&(K!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Dt,It,Nt,$t,ee,qt,pe,Ce,je;const Be=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(rt!==null)Dt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,ee=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const Un=Math.pow(2,-K);Dt=Math.floor(Be.width*Un),It=Math.floor(Be.height*Un),R.isDataArrayTexture?Nt=Be.depth:R.isData3DTexture?Nt=Math.floor(Be.depth*Un):Nt=1,$t=0,ee=0,qt=0}ot!==null?(pe=ot.x,Ce=ot.y,je=ot.z):(pe=0,Ce=0,je=0);const me=kt.convert(q.format),Jt=kt.convert(q.type);let Ye;q.isData3DTexture?(ue.setTexture3D(q,0),Ye=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ue.setTexture2DArray(q,0),Ye=F.TEXTURE_2D_ARRAY):(ue.setTexture2D(q,0),Ye=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=F.getParameter(F.UNPACK_ROW_LENGTH),Dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_i=F.getParameter(F.UNPACK_SKIP_PIXELS),zn=F.getParameter(F.UNPACK_SKIP_ROWS),Mn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Ve=R.isDataArrayTexture||R.isData3DTexture,Bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Un=Vt.get(R),tn=Vt.get(q),An=Vt.get(Un.__renderTarget),Ns=Vt.get(tn.__renderTarget);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Vn=0;Vn<Nt;Vn++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,K,qt+Vn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Tt,je+Vn)),F.blitFramebuffer($t,ee,Dt,It,pe,Ce,Dt,It,F.DEPTH_BUFFER_BIT,F.NEAREST);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Vt.has(R)){const Un=Vt.get(R),tn=Vt.get(q);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,ml),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,gl);for(let An=0;An<Nt;An++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,K,qt+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,K),Bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,Tt,je+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,Tt),K!==0?F.blitFramebuffer($t,ee,Dt,It,pe,Ce,Dt,It,F.COLOR_BUFFER_BIT,F.NEAREST):Bn?F.copyTexSubImage3D(Ye,Tt,pe,Ce,je+An,$t,ee,Dt,It):F.copyTexSubImage2D(Ye,Tt,pe,Ce,$t,ee,Dt,It);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ye,Tt,pe,Ce,je,Dt,It,Nt,me,Jt,Be.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Ye,Tt,pe,Ce,je,Dt,It,Nt,me,Be.data):F.texSubImage3D(Ye,Tt,pe,Ce,je,Dt,It,Nt,me,Jt,Be):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,pe,Ce,Dt,It,me,Jt,Be.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,pe,Ce,Be.width,Be.height,me,Be.data):F.texSubImage2D(F.TEXTURE_2D,Tt,pe,Ce,Dt,It,me,Jt,Be);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_i),F.pixelStorei(F.UNPACK_SKIP_ROWS,zn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Mn),Tt===0&&q.generateMipmaps&&F.generateMipmap(Ye),Ot.unbindTexture()},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&ue.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ue.setTextureCube(R,0):R.isData3DTexture?ue.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ue.setTexture2DArray(R,0):ue.setTexture2D(R,0),Ot.unbindTexture()},this.resetState=function(){z=0,H=0,k=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}function au(r,t=!1){const n=r[0].index!==null,a=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),c={},u={},h=r[0].morphTargetsRelative,m=new hn;let d=0;for(let g=0;g<r.length;++g){const v=r[g];let _=0;if(n!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in v.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(v.attributes[x]),_++}if(_!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in v.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[x]===void 0&&(u[x]=[]),u[x].push(v.morphAttributes[x])}if(t){let x;if(n)x=v.index.count;else if(v.attributes.position!==void 0)x=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;m.addGroup(d,x,g),d+=x}}if(n){let g=0;const v=[];for(let _=0;_<r.length;++_){const x=r[_].index;for(let S=0;S<x.count;++S)v.push(x.getX(S)+g);g+=r[_].attributes.position.count}m.setIndex(v)}for(const g in c){const v=i_(c[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;m.setAttribute(g,v)}for(const g in u){const v=u[g][0].length;if(v===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[g]=[];for(let _=0;_<v;++_){const x=[];for(let T=0;T<u[g].length;++T)x.push(u[g][T][_]);const S=i_(x);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;m.morphAttributes[g].push(S)}}return m}function i_(r){let t,n,a,l=-1,c=0;for(let d=0;d<r.length;++d){const g=r[d];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=g.gpuType),l!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const u=new t(c),h=new li(u,n,a);let m=0;for(let d=0;d<r.length;++d){const g=r[d];if(g.isInterleavedBufferAttribute){const v=m/n;for(let _=0,x=g.count;_<x;_++)for(let S=0;S<n;S++){const T=g.getComponent(_,S);h.setComponent(_+v,S,T)}}else u.set(g.array,m);m+=g.count*n}return l!==void 0&&(h.gpuType=l),h}const su={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Kr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const UA=new pp(-1,1,1,-1,0,1);class LA extends hn{constructor(){super(),this.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new we([0,2,0,0,2,0],2))}}const NA=new LA;class gp{constructor(t){this._mesh=new Te(NA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,UA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class PA extends Kr{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof _n?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fl.clone(t.uniforms),this.material=new _n({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new gp(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class a_ extends Kr{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class OA extends Kr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class zA{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new ae);this._width=a.width,this._height=a.height,n=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ha}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new PA(su),this.copyPass.material.blending=fa,this.clock=new G_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let l=0,c=this.passes.length;l<c;l++){const u=this.passes[l];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}a_!==void 0&&(u instanceof a_?a=!0:u instanceof OA&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(a,l),this.renderTarget2.setSize(a,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class BA extends Kr{constructor(t,n,a=null,l=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new le}render(t,n,a){const l=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=l}}const IA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gr extends Kr{constructor(t,n=1,a,l){super(),this.strength=n,this.radius=a,this.threshold=l,this.resolution=t!==void 0?new ae(t.x,t.y):new ae(256,256),this.clearColor=new le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new wi(c,u,{type:ha}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new wi(c,u,{type:ha});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new wi(c,u,{type:ha});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),u=Math.round(u/2)}const h=IA;this.highPassUniforms=fl.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _n({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new ae(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fl.clone(su.uniforms),this.blendMaterial=new _n({uniforms:this.copyUniforms,vertexShader:su.vertexShader,fragmentShader:su.fragmentShader,blending:Pr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new le,this._oldClearAlpha=1,this._basic=new qa,this._fsQuad=new gp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),l=Math.round(n/2);this.renderTargetBright.setSize(a,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,l),this.renderTargetsVertical[c].setSize(a,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ae(1/a,1/l),a=Math.round(a/2),l=Math.round(l/2)}render(t,n,a,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Gr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Gr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[];for(let a=0;a<t;a++)n.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new _n({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gr.BlurDirectionX=new ae(1,0);Gr.BlurDirectionY=new ae(0,1);const Zc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class FA extends Kr{constructor(){super(),this.uniforms=fl.clone(Zc.uniforms),this.material=new HS({name:Zc.name,uniforms:this.uniforms,vertexShader:Zc.vertexShader,fragmentShader:Zc.fragmentShader}),this._fsQuad=new gp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Re.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===h_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===d_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===p_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===g_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===v_?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===m_&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const zi=Math.PI*2;let ad=91623;const ru=()=>(ad=1664525*ad+1013904223>>>0,ad/4294967296),oe=(r,t)=>r+ru()*(t-r),ys=Ya.clamp,Xt=(r=0,t=0,n=0)=>new W(r,t,n);function HA(r,t){return Math.sin(r*.063+Math.sin(t*.047)*2.3)*1.6+Math.sin(t*.09+r*.023)*1.3+Math.sin(r*.18+t*.12)*.5}function Ar(r,t){return-15+HA(r,t)+Math.max(0,Math.abs(r+Math.sin(t*.025)*13)-22)*.085-Math.max(0,-t-110)*.026}const s_=`
float hash21(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float valueNoise(vec2 p){vec2 i=floor(p), f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float caustic(vec2 p,float t){p+=vec2(sin(p.y*.6+t*.37),cos(p.x*.7+t*.29))*.8;float a=sin(p.x*1.9+p.y*.6+t*.52)+sin(p.y*2.1-p.x*.3-t*.41);float b=sin(p.x*2.6-p.y*.8-t*.32)+sin(p.y*2.5+p.x*.6+t*.38);return pow(1.-abs(sin(a+b)),16.);}
`;class GA{scene=new DS;camera;renderer;uniforms={uTime:{value:0}};host;hooks;clock=new G_;frame=0;alive=!0;playing=!1;started=!1;glide=!1;sound=!0;yaw=0;pitch=-.1;targetYaw=0;targetPitch=-.1;keys=new Set;velocity=Xt();move=Xt();forward=Xt();right=Xt();upAxis=Xt(0,1,0);position=Xt(0,3,35);touch={x:0,y:0,z:0};dragging=!1;lastPointer={x:0,y:0};listeners=[];creatures=[];fish;fishData=[];particles;kelpMaterials=[];colliders=[];dummy=new rn;statusAt=0;time=0;pausedTime=0;audioContext=null;master=null;observer;reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(t,n,a={}){if(this.host=t,this.hooks=n,this.camera=new Yn(67,t.clientWidth/t.clientHeight,.12,600),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0),this.renderer=new DA({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.outputColorSpace=ri,this.renderer.toneMapping=fu,this.renderer.toneMappingExposure=1.18,this.renderer.setClearColor(676709),t.appendChild(this.renderer.domElement),this.scene.background=new le(742243),this.scene.fog=new du(742243,.014),a.deferStart)return;const l=new H_(10019551,1783361,2.2);this.scene.add(l);const c=new Yd(14811116,3.2);c.position.set(-35,65,-10),this.scene.add(c);const u=new Yd(4770768,1.5);u.position.set(30,18,-60),this.scene.add(u),this.terrain(),this.rocks(),this.plants(),this.surface(),this.life(),this.suspendedParticles(),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.animate(),requestAnimationFrame(()=>n.onReady())}material(t,n="plain",a=.82,l=1){const c=new wr({color:t,roughness:a,metalness:n==="skin"?.05:0}),u=Math.max(0,l);return c.onBeforeCompile=h=>{h.uniforms.uTime=this.uniforms.uTime,h.vertexShader=`varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOceanLocal=position;`),h.vertexShader=h.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 oceanPos=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          oceanPos=instanceMatrix*oceanPos;
        #endif
        vOceanWorld=(modelMatrix*oceanPos).xyz;`),h.fragmentShader=`uniform float uTime; varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+s_+h.fragmentShader;let m="";n==="sand"&&(m="float grain=valueNoise(vOceanWorld.xz*15.);float ripple=sin(vOceanWorld.x*.7+vOceanWorld.z*3.+valueNoise(vOceanWorld.xz*.11)*5.);diffuseColor.rgb*=.82+grain*.22+ripple*.07;"),n==="rock"&&(m="float n=valueNoise(vOceanWorld.xz*1.7+vOceanWorld.y*.8);float layer=sin(vOceanWorld.y*5.+valueNoise(vOceanWorld.xz)*3.);diffuseColor.rgb*=.67+n*.5+layer*.075;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.22,.16),smoothstep(.57,.84,n)*.6);"),n==="skin"&&(m="float blot=valueNoise(vOceanLocal.xz*5.+vOceanLocal.y*2.);float fine=valueNoise(vOceanLocal.xy*48.);float bands=sin(vOceanLocal.x*5.5+vOceanLocal.z*3.+blot*4.);diffuseColor.rgb*=.6+blot*.5+fine*.15;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.42,smoothstep(.5,.9,bands)*.45);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.54,.62,.49),(1.-smoothstep(-.75,.0,vOceanLocal.y))*.65);"),h.fragmentShader=h.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${m}`),h.fragmentShader=h.fragmentShader.replace("#include <opaque_fragment>",`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(.055*u).toFixed(4)};
#include <opaque_fragment>`)},c.customProgramCacheKey=()=>`${n}:${u.toFixed(2)}`,c}terrain(){const t=new ws(700,700,180,180);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let l=0;l<n.count;l++)n.setY(l,Ar(n.getX(l),n.getZ(l)));t.computeVertexNormals();const a=new Te(t,this.material(11511685,"sand"));this.scene.add(a)}rocks(){const t=[this.material(8094578,"rock"),this.material(7567721,"rock"),this.material(6454124,"rock")],n=[];for(let l=0;l<5;l++){const c=new Nr(1,3),u=c.attributes.position;for(let h=0;h<u.count;h++){const m=u.getX(h),d=u.getY(h),g=u.getZ(h),v=1+.12*Math.sin(m*8+l)*Math.sin(g*7-d*4)+.055*Math.sin(d*19+m*8);u.setXYZ(h,m*v,d*v,g*v)}c.computeVertexNormals(),n.push(c)}const a=(l,c,u,h,m)=>{const d=new Te(n[Math.floor(ru()*5)],t[Math.floor(ru()*3)]);d.position.set(l,Ar(l,c)+h*.15,c),d.scale.set(u,h,m),d.rotation.set(oe(-.2,.2),oe(0,zi),oe(-.12,.12)),this.scene.add(d),u>3&&this.colliders.push({pos:d.position.clone(),radius:Math.min(u,m)*.88,height:h*.95})};for(let l=0;l<95;l++){const c=oe(-205,95),h=(l%2?1:-1)*oe(24,65)+Math.sin(c*.025)*8,m=oe(3,10);a(h,c,m,oe(4,15),m*oe(.7,1.5))}a(-23,-16,13,19,15),a(-35,-24,17,24,14),a(34,-50,15,22,17),a(43,-69,18,28,14);for(let l=0;l<210;l++){const c=oe(-160,160),u=oe(-230,140),h=oe(.3,2.8);a(c,u,h,h*oe(.4,1),h*oe(.6,1.5))}a(-28,-103,8,20,7),a(-3,-103,6,18,7),a(-15,-103,17,4,6)}plantMaterial(t){const n=this.material(t,"plain",.9);n.side=jn;const a=n.onBeforeCompile;return n.onBeforeCompile=(l,c)=>{a(l,c),l.vertexShader=`attribute float aBend;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("vOceanLocal=position;",`vOceanLocal=position; vec3 ip=vec3(0.);
      #ifdef USE_INSTANCING
      ip=instanceMatrix[3].xyz;
      #endif
      transformed.x+=sin(uTime*.6+ip.x*.3+position.y*.7)*aBend*.35;
      transformed.z+=sin(uTime*.43+ip.z*.4+position.y*.45)*aBend*.25;`),l.vertexShader=`uniform float uTime;
`+l.vertexShader},n.customProgramCacheKey=()=>`plant${t}`,n}plants(){const t=(u,h,m)=>{const d=[],g=[],v=[],_=[];for(let T=0;T<=12;T++){let M=T/12;const y=h*Math.pow(Math.sin(Math.PI*M*.95),.7)+.008;for(let U=-1;U<=1;U+=2)d.push(U*y+Math.sin(M*2)*m,u*M,Math.sin(M*3)*m*.45),g.push((U+1)/2,M),_.push(M*M*u*.3);if(T<12){let U=T*2;v.push(U,U+1,U+2,U+1,U+3,U+2)}}const S=new hn;return S.setAttribute("position",new we(d,3)),S.setAttribute("uv",new we(g,2)),S.setAttribute("aBend",new we(_,1)),S.setIndex(v),S.computeVertexNormals(),S};for(let u=0;u<3;u++){const h=t(u===2?9:2.5,u===2?.25:.09,.2),m=this.plantMaterial([4352834,6584125,5270332][u]),d=u===2?480:1900,g=new Av(h,m,d);for(let v=0;v<d;v++){let _=oe(-110,110),x=oe(-220,100);const S=Math.abs(_+Math.sin(x*.035)*8);S<13&&(_+=Math.sign(_||1)*(15-S)),this.dummy.position.set(_,Ar(_,x)-.1,x),this.dummy.rotation.set(oe(-.08,.08),oe(0,zi),0);const T=oe(.5,1.7);this.dummy.scale.set(T,T,T),this.dummy.updateMatrix(),g.setMatrixAt(v,this.dummy.matrix)}this.scene.add(g)}const n=[],a=(u,h,m)=>{const d=h.clone().sub(u),g=new bi(m*.48,m,d.length(),5,1);g.applyQuaternion(new Wr().setFromUnitVectors(Xt(0,1,0),d.normalize())),g.translate((u.x+h.x)/2,(u.y+h.y)/2,(u.z+h.z)/2),n.push(g)},l=(u,h,m,d)=>{const g=u.clone().add(Xt(Math.sin(h)*m,Math.cos(h)*m,oe(-.13,.13)));a(u,g,d*.025+.014),d>0&&(l(g,h-.43,m*.7,d-1),l(g,h+.4,m*.74,d-1))};l(Xt(),0,1.05,4);const c=au(n);if(n.forEach(u=>u.dispose()),c){const u=[this.material(10184030),this.material(9600599),this.material(6454643)];for(let h=0;h<90;h++){const m=new Te(c,u[h%3]),d=oe(-65,65),g=oe(-170,60);m.position.set(d,Ar(d,g),g),m.rotation.y=oe(0,zi),m.scale.setScalar(oe(.6,1.4)),this.scene.add(m)}}}surface(){const t=new _n({uniforms:{uTime:this.uniforms.uTime},side:jn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 wp; uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.09+uTime*.25)*.3+sin(p.y*.11-uTime*.3)*.2;wp=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`varying vec3 wp;uniform float uTime;${s_}void main(){float c=caustic(wp.xz*.16,uTime*.7);float n=valueNoise(wp.xz*.025+uTime*.02);vec3 col=mix(vec3(.1,.48,.54),vec3(.55,.86,.81),n);col+=c*.24;float sun=exp(-length(wp.xz-vec2(-38.,-36.))*.014);col+=vec3(.35,.4,.3)*sun;gl_FragColor=vec4(col,.89);}`}),n=new Te(new ws(800,800,55,55),t);n.rotation.x=-Math.PI/2,n.position.y=26,this.scene.add(n);const a=new _n({uniforms:{uTime:this.uniforms.uTime},transparent:!0,depthWrite:!1,side:jn,blending:Pr,vertexShader:"varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying vec3 wPos;uniform float uTime;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float vertical=sin(vUv.y*3.14159);float pulse=.78+sin(wPos.x*.14+uTime*.21)*.12;gl_FragColor=vec4(.38,.78,.67,edge*vertical*pulse*.038);}"});for(let l=0;l<30;l++){const c=oe(34,54),u=new Te(new bi(oe(.3,1.2),oe(2,5),c,16,1,!0),a);u.position.set(oe(-85,95),26-c*.48,oe(-130,55)),u.rotation.z=-.26,u.rotation.x=.13,this.scene.add(u)}}ellipsoid(t,n,a,l,c,u,h,m){const d=new hl(1,32,20);d.scale(u,h,m),d.translate(a,l,c);const g=new Te(d,n);return t.add(g),g}tube(t,n,a,l=56,c=12){const u=new FS(t),h=u.computeFrenetFrames(l,!1),m=[],d=[],g=[];for(let _=0;_<=l;_++){const x=_/l,S=u.getPoint(x),T=x*(n.length-1),M=Math.min(Math.floor(T),n.length-2),y=Ya.lerp(n[M],n[M+1],T-M);for(let U=0;U<=c;U++){const L=U/c*zi,w=S.clone().addScaledVector(h.normals[_],Math.cos(L)*y).addScaledVector(h.binormals[_],Math.sin(L)*y);if(m.push(w.x,w.y,w.z),d.push(U/c,x),_<l&&U<c){const O=_*(c+1)+U,z=O+c+1;g.push(O,O+1,z,z,O+1,z+1)}}}const v=new hn;return v.setAttribute("position",new we(m,3)),v.setAttribute("uv",new we(d,2)),v.setIndex(g),v.computeVertexNormals(),new Te(v,a)}flipper(t,n,a){const l=[],c=[],u=[];for(let g=0;g<=20;g++){const v=g/20,_=Math.max(.015,Math.pow(Math.sin(Math.PI*v),.7)*a);for(let x=0;x<=12;x++){const S=x/12*zi;if(l.push(-v*v*n*.32+_*Math.cos(S),Math.sin(S)*_*.18,v*n),c.push(x/12,v),g<20&&x<12){const T=g*13+x;u.push(T,T+1,T+12+1,T+1,T+12+2,T+12+1)}}}const d=new hn;return d.setAttribute("position",new we(l,3)),d.setAttribute("uv",new we(c,2)),d.setIndex(u),d.computeVertexNormals(),new Te(d,t)}plesiosaur(t=1){const n=new vn,a=this.material(5532e3,"skin",.51),l=[];this.ellipsoid(n,a,0,0,0,2.6,.92,1.24),n.add(this.tube([Xt(1.3,.2),Xt(2.8,.38),Xt(4.3,1.06),Xt(5.8,1.7),Xt(7.1,1.86)],[.76,.46,.32,.25,.22],a)),this.ellipsoid(n,a,7.38,1.88,0,.65,.3,.31),this.ellipsoid(n,a,7.79,1.79,0,.42,.15,.22);const c=new wr({color:397841,roughness:.12,metalness:.3});for(const h of[-1,1]){this.ellipsoid(n,this.material(9144688),7.37,2.01,h*.262,.11,.095,.039),this.ellipsoid(n,c,7.4,2.014,h*.294,.065,.06,.024);const m=this.tube([Xt(7.34,1.73,h*.265),Xt(7.78,1.72,h*.205),Xt(8.02,1.75,h*.105)],[.012,.012,.006],c,12,4);n.add(m);for(let d=0;d<2;d++){const g=new vn;g.position.set(d===0?1.2:-1.65,-.34,h*.85);const v=this.flipper(a,d===0?3.3:2.8,.68);h<0&&(v.rotation.x=Math.PI),g.add(v),g.userData.side=h,g.userData.phase=d*.8,n.add(g),l.push(g)}}const u=new vn;return u.position.x=-1.9,u.add(this.tube([Xt(),Xt(-1.7,-.1),Xt(-3.4,-.06),Xt(-4.2,.03)],[.7,.36,.12,.012],a,36)),n.add(u),n.scale.setScalar(t),{group:n,fins:l,tail:u,kind:"plesiosaur",scale:t}}ichthyosaur(t=1){const n=new vn,a=this.material(4810096,"skin",.42),l=[];this.ellipsoid(n,a,0,0,0,2.6,.77,.73),n.add(this.tube([Xt(1.5,0),Xt(2.5,-.03),Xt(3.65,-.14)],[.57,.31,.045],a,35));const c=new wr({color:397843,roughness:.15});for(const m of[-1,1]){this.ellipsoid(n,c,1.75,.27,m*.45,.12,.13,.06);const d=new vn;d.position.set(.9,-.25,m*.58);const g=this.flipper(a,1.7,.4);m<0&&(g.rotation.x=Math.PI),d.add(g),d.userData.side=m,d.userData.phase=0,n.add(d),l.push(d)}const u=this.flipper(a,1.3,.6);u.rotation.x=-Math.PI/2,u.position.set(-.35,.55,0),n.add(u);const h=new vn;h.position.x=-1.9,h.add(this.tube([Xt(),Xt(-1.3,0),Xt(-2.15,0)],[.5,.23,.06],a,24));for(const m of[-1,1]){const d=this.flipper(a,1.35,.42);d.position.x=-2,d.rotation.x=m*Math.PI/2,h.add(d)}return n.add(h),n.scale.setScalar(t),{group:n,fins:l,tail:h,kind:"ichthyosaur",scale:t}}spinosaurus(t=1){const n=new vn,a=this.material(6777171,"skin",.7),l=[];this.ellipsoid(n,a,0,0,0,2.4,1.1,.87),n.add(this.tube([Xt(1.5,.3),Xt(2.6,.75),Xt(3.4,.8)],[.66,.43,.36],a,32)),this.ellipsoid(n,a,3.8,.75,0,.94,.39,.37),this.ellipsoid(n,a,4.55,.62,0,.85,.22,.23);const c=[],u=[],h=[];for(let _=0;_<=28;_++){const x=_/28,S=-2.25+x*4.3,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);if(c.push(S,.4,0,S,T,0),h.push(x,0,x,1),_<28){const M=_*2;u.push(M,M+1,M+2,M+1,M+3,M+2)}}const m=new hn;m.setAttribute("position",new we(c,3)),m.setAttribute("uv",new we(h,2)),m.setIndex(u),m.computeVertexNormals();const d=this.material(6705990,"skin");d.side=jn,n.add(new Te(m,d));for(let _=0;_<15;_++){const x=_/14,S=-2.2+x*4.2,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);n.add(this.tube([Xt(S,.6,.02),Xt(S-.1,T*.6,.02),Xt(S,T,.02)],[.045,.031,.012],a,8,5))}const g=new wr({color:1382674,roughness:.3});for(const _ of[-1,1]){this.ellipsoid(n,g,3.51,.98,_*.326,.07,.07,.034);const x=new vn;x.position.set(-1.25,-.5,_*.58),x.add(this.tube([Xt(),Xt(-.2,-.85,_*.5),Xt(.15,-1.2,_*.6),Xt(-.45,-1.35,_*.76)],[.45,.29,.15,.03],a,24)),n.add(x),x.userData.side=_,x.userData.phase=1,l.push(x);const S=new vn;S.position.set(1.3,-.45,_*.55),S.add(this.tube([Xt(),Xt(.13,-.56,_*.4),Xt(.8,-.66,_*.5)],[.21,.12,.04],a,20)),n.add(S),S.userData.side=_,S.userData.phase=0,l.push(S)}const v=new vn;return v.position.x=-1.8,v.add(this.tube([Xt(),Xt(-1.7,0),Xt(-3.5,.08),Xt(-5.5,0)],[.7,.48,.27,.012],a,48)),n.add(v),n.scale.setScalar(t),{group:n,fins:l,tail:v,kind:"spinosaur",scale:t}}ammonite(){const t=new vn,n=this.material(12101252,"plain",.65),a=[],l=[],c=100;for(let v=0;v<=c;v++){const _=v/c,x=_*zi*2.3,S=.06+Math.pow(_,1.65)*.85;a.push(Xt(Math.cos(x)*S,Math.sin(x)*S,0)),l.push(.015+Math.pow(_,1.6)*.24)}t.add(this.tube(a,l,n,150,12));const u=a[a.length-1],h=this.material(9600610);for(let v=0;v<7;v++){const _=v/7*zi;t.add(this.tube([u.clone(),u.clone().add(Xt(.45,Math.sin(_)*.16,Math.cos(_)*.16)),u.clone().add(Xt(.9,Math.sin(_)*.35,Math.cos(_)*.3)),u.clone().add(Xt(1.02,Math.sin(_)*.24,Math.cos(_)*.3))],[.037,.033,.021,.001],h,16,5))}const m=this.material(7826774);for(let v=30;v<c;v+=3){const _=a[v],x=l[v]*1.025,S=new Te(new pu(x,.008,4,12),m);S.position.copy(_);const T=a[Math.min(v+1,c)].clone().sub(a[Math.max(0,v-1)]).normalize();S.quaternion.setFromUnitVectors(Xt(0,0,1),T),t.add(S)}const d=new vn,g=new Map;for(const v of t.children){const _=v;_.updateMatrix();const x=_.geometry.clone().applyMatrix4(_.matrix),S=_.material;g.has(S)||g.set(S,[]),g.get(S).push(x)}for(const[v,_]of g){const x=au(_);x&&d.add(new Te(x,v)),_.forEach(S=>S.dispose())}return t.children.forEach(v=>v.geometry.dispose()),d}life(){const t=(h,m,d,g,v)=>{const _={...h,center:m,radius:d,speed:g,phase:v};this.creatures.push(_),this.scene.add(_.group)};t(this.plesiosaur(1.15),Xt(28,7,-8),28,.017,Math.PI*.72),t(this.plesiosaur(.78),Xt(-48,12,-108),38,.014,1.8),t(this.ichthyosaur(.9),Xt(30,2,-58),38,.06,.8),t(this.ichthyosaur(.67),Xt(26,5,-62),38,.06,.96),t(this.spinosaurus(1.2),Xt(-22,21,-45),48,.012,-.5),t(this.plesiosaur(1.35),Xt(55,-2,-180),40,.015,2.5),t(this.ichthyosaur(1.1),Xt(-80,4,28),48,.048,.5);const n=this.ammonite();for(let h=0;h<13;h++){const m=h===0?n:n.clone(),d=oe(-42,42),g=oe(-110,22);m.position.set(d,Ar(d,g)+oe(3,8),g),m.rotation.set(oe(-.2,.2),oe(0,zi),oe(-.1,.1)),m.scale.setScalar(oe(.55,1.1)),m.userData.origin=m.position.clone(),m.userData.phase=ru()*zi,m.userData.ammonite=!0,this.scene.add(m)}const a=new hl(1,10,6);a.scale(.5,.16,.09);const l=new up(.23,.35,3);l.rotateZ(Math.PI/2),l.scale(1,1,.25),l.translate(-.53,0,0);const c=au([a,l]);this.fish=new Av(c,this.material(10268315,"plain",.45),350),this.scene.add(this.fish);const u=[Xt(-14,5,-31),Xt(38,11,-35),Xt(0,16,-90),Xt(-48,1,-120),Xt(30,-3,25)];for(let h=0;h<350;h++)this.fishData.push({center:u[h%5].clone().add(Xt(oe(-6,6),oe(-3,3),oe(-6,6))),phase:oe(0,zi),radius:oe(3,8),speed:oe(.11,.2),size:oe(.35,1.05)})}suspendedParticles(){const n=new Float32Array(5400);for(let c=0;c<1800;c++)n[c*3]=oe(-110,110),n[c*3+1]=oe(-16,26),n[c*3+2]=oe(-110,110);const a=new hn;a.setAttribute("position",new li(n,3));const l=new _n({uniforms:{uTime:this.uniforms.uTime,uPixelRatio:{value:this.renderer.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Pr,vertexShader:"uniform float uTime;uniform float uPixelRatio;varying float a;void main(){vec3 p=position;p.x+=sin(uTime*.14+position.z)*.22;p.y+=sin(uTime*.18+position.x)*.25;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));}"});this.particles=new BS(a,l),this.scene.add(this.particles)}bind(){const t=(a,l,c)=>{a.addEventListener(l,c),this.listeners.push(()=>a.removeEventListener(l,c))};t(window,"keydown",(a=>{this.playing&&(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","ControlLeft"].includes(a.code)&&(a.preventDefault(),this.keys.add(a.code)),a.code==="Escape"&&this.pause(),a.code==="KeyH"&&!a.repeat&&this.hooks.onToggleUI(),a.code==="KeyG"&&!a.repeat&&(this.setGlide(!this.glide),this.hooks.onGlide(this.glide)))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>{this.keys.clear(),this.playing&&this.pause()})),t(document,"visibilitychange",(()=>{document.hidden&&this.playing&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing&&(this.dragging=!0,this.lastPointer={x:a.clientX,y:a.clientY},n.setPointerCapture(a.pointerId),a.pointerType==="mouse"&&document.pointerLockElement!==n))try{const l=n.requestPointerLock?.();l&&typeof l.catch=="function"&&l.catch(()=>{})}catch{}})),t(n,"pointerup",(()=>{this.dragging=!1})),t(n,"pointercancel",(()=>{this.dragging=!1})),t(document,"pointermove",(a=>{if(!this.playing)return;const l=document.pointerLockElement===n;if(!l&&!this.dragging)return;const c=l?a.movementX:a.clientX-this.lastPointer.x,u=l?a.movementY:a.clientY-this.lastPointer.y;this.targetYaw-=c*.0021,this.targetPitch=ys(this.targetPitch-u*.0021,-1.47,1.47),this.lastPointer={x:a.clientX,y:a.clientY}})),t(document,"pointerlockchange",(()=>{!document.pointerLockElement&&this.playing&&!this.dragging&&this.pause()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.pause(),this.hooks.onError("The graphics connection was interrupted. Refresh to return to the ocean.")}))}start(){if(this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.initAudio(),this.sound&&this.audioContext?.resume().catch(()=>{}),window.matchMedia("(pointer:fine)").matches)try{const t=this.renderer.domElement.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}pause(){this.playing&&(this.playing=!1,this.glide=!1,this.keys.clear(),this.touch={x:0,y:0,z:0},this.velocity.set(0,0,0),this.dragging=!1,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.hooks.onPause())}reset(){this.position.set(0,3,35),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=-.1,this.velocity.set(0,0,0),this.glide=!1,this.time=0}setGlide(t){this.glide=t}touchMove(t,n){this.touch.x=ys(t,-1,1),this.touch.y=ys(n,-1,1)}touchVertical(t){this.touch.z=t}setSound(t){this.sound=t,this.master&&this.audioContext&&this.master.gain.setTargetAtTime(t?.35:0,this.audioContext.currentTime,.3),t&&this.playing&&this.audioContext?.resume().catch(()=>{})}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.35:0,this.master.connect(n.destination);const a=n.createBuffer(2,n.sampleRate*8,n.sampleRate);for(let v=0;v<2;v++){let _=0;const x=a.getChannelData(v);for(let S=0;S<x.length;S++)_=(_+(Math.random()*2-1)*.03)/1.018,x[S]=_*4}const l=n.createBufferSource();l.buffer=a,l.loop=!0;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.45;const u=n.createGain();u.gain.value=.42,l.connect(c),c.connect(u),u.connect(this.master),l.start();const h=n.createOscillator(),m=n.createGain();h.frequency.value=.07,m.gain.value=160,h.connect(m),m.connect(c.frequency),h.start();const d=n.createOscillator(),g=n.createGain();d.type="sine",d.frequency.value=47,g.gain.value=.055,d.connect(g),g.connect(this.master),d.start()}catch{}}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);(this.playing||!this.started)&&(this.time+=t);const n=this.time;if(this.uniforms.uTime.value=n,this.playing){const u=(...v)=>v.some(_=>this.keys.has(_))?1:0;this.yaw=Ya.lerp(this.yaw,this.targetYaw,1-Math.exp(-14*t)),this.pitch=Ya.lerp(this.pitch,this.targetPitch,1-Math.exp(-14*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize();const h=u("KeyW","ArrowUp")-u("KeyS","ArrowDown")+(this.glide?.52:0)+this.touch.y,m=u("KeyD","ArrowRight")-u("KeyA","ArrowLeft")+this.touch.x,d=u("KeyE","Space")-u("KeyQ","ControlLeft")+this.touch.z;this.move.copy(this.forward).multiplyScalar(h).addScaledVector(this.right,m),this.move.y+=d,this.move.lengthSq()>1&&this.move.normalize();const g=u("ShiftLeft","ShiftRight")?8.2:3.8;this.move.multiplyScalar(g),this.velocity.lerp(this.move,1-Math.exp(-2.1*t)),this.position.addScaledVector(this.velocity,t),this.position.x=ys(this.position.x,-245,245),this.position.z=ys(this.position.z,-265,245),this.position.y=ys(this.position.y,Ar(this.position.x,this.position.z)+1.8,24.2);for(const v of this.colliders){if(Math.abs(this.position.y-v.pos.y)>v.height+1)continue;const _=this.position.x-v.pos.x,x=this.position.z-v.pos.z,S=Math.sqrt(_*_+x*x);if(S<v.radius+.85&&S>.001){const T=v.radius+.85-S;this.position.x+=_/S*T,this.position.z+=x/S*T}}this.camera.position.copy(this.position),this.reduced||(this.camera.position.y+=Math.sin(n*.9)*.026)}else!this.started&&!this.reduced&&this.camera.rotation.set(-.09+Math.sin(n*.1)*.018,Math.sin(n*.08)*.025,0);for(const u of this.creatures){const h=n*u.speed+u.phase,m=u.center.x+Math.cos(h)*u.radius,d=u.center.z+Math.sin(h)*u.radius*.58;u.group.position.set(m,u.center.y+Math.sin(n*.3+u.phase)*.35,d),u.group.rotation.y=Math.atan2(-Math.cos(h)*.58,-Math.sin(h)),u.group.rotation.z=Math.sin(n*.3+u.phase)*.025,u.fins.forEach(g=>{g.rotation.x=Math.sin(n*1.25+(g.userData.phase||0)+u.phase)*.22*(g.userData.side||1),g.rotation.z=Math.sin(n*1.25+(g.userData.phase||0)+u.phase+.7)*.07}),u.tail.rotation.y=Math.sin(n*(u.kind==="ichthyosaur"?3:1.3)+u.phase)*(u.kind==="ichthyosaur"?.22:.11)}for(let u=0;u<this.fishData.length;u++){const h=this.fishData[u],m=n*h.speed+h.phase;this.dummy.position.set(h.center.x+Math.cos(m)*h.radius,h.center.y+Math.sin(m*2)*.7,h.center.z+Math.sin(m)*h.radius*.5),this.dummy.rotation.set(0,Math.atan2(-Math.cos(m)*.5,-Math.sin(m)),Math.cos(m*2)*.035),this.dummy.scale.set(h.size,h.size,h.size),this.dummy.updateMatrix(),this.fish.setMatrixAt(u,this.dummy.matrix)}this.fish.instanceMatrix.needsUpdate=!0;for(const u of this.scene.children)u.userData.ammonite&&(u.position.y=u.userData.origin.y+Math.sin(n*.28+u.userData.phase)*.35,u.rotation.z=Math.sin(n*.23+u.userData.phase)*.09);this.particles.position.set(Math.floor(this.position.x/80)*80,0,Math.floor(this.position.z/80)*80);const a=this.scene.fog,l=ys((-this.position.z-75)/160,0,1);a.density=.013+l*.006;const c=new le(742243).lerp(new le(404547),l*.75);a.color.copy(c),this.scene.background.copy(c),n-this.statusAt>.25&&(this.statusAt=n,this.hooks.onStatus(26-this.position.y,this.position.z<-130?"The blue beyond":this.position.z<-65?"The ancient reef":Math.abs(this.position.x)>40?"The underwater forest":"The sunlit shallows")),this.renderer.render(this.scene,this.camera)};dispose(){this.alive=!1,cancelAnimationFrame(this.frame),this.listeners.forEach(a=>a()),this.observer?.disconnect(),this.audioContext?.close().catch(()=>{});const t=new Set,n=new Set;this.scene.traverse(a=>{const l=a;l.geometry&&t.add(l.geometry),l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(u=>n.add(u))}),t.forEach(a=>a.dispose()),n.forEach(a=>a.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}}function VA(r,t){const a=r.createBuffer(1,Math.round(r.sampleRate*4.545454545454546),r.sampleRate),l=a.getChannelData(0);for(let d=0;d<l.length;d++){const g=d/r.sampleRate,v=g<1.4?Math.sin(Math.PI*g/1.4)**2*.41:0,_=g>=1.9&&g<3.8?Math.sin(Math.PI*(g-1.9)/1.9)**2*.3:0;l[d]=(Math.random()*2-1)*(v+_)}const c=r.createBufferSource();c.buffer=a,c.loop=!0;const u=r.createBiquadFilter();u.type="lowpass",u.frequency.value=1800;const h=r.createBiquadFilter();h.type="highpass",h.frequency.value=180,c.connect(u).connect(h).connect(t);const m=r.createAnalyser();return m.fftSize=2048,t.connect(m).connect(r.destination),c.start(),m}function kA(r,t){for(const[n,a]of[[0,660],[.2,880]]){const l=r.createOscillator(),c=r.createGain(),u=r.currentTime+n;l.frequency.value=a,c.gain.setValueAtTime(0,u),c.gain.linearRampToValueAtTime(.18,u+.015),c.gain.exponentialRampToValueAtTime(.001,u+.18),l.connect(c).connect(t),l.start(u),l.stop(u+.2),l.onended=()=>{l.disconnect(),c.disconnect()}}}function XA(r,t){const n=r.currentTime,a=r.createOscillator(),l=r.createGain();a.type="triangle",a.frequency.setValueAtTime(1650,n),a.frequency.exponentialRampToValueAtTime(720,n+.035),l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(.11,n+.003),l.gain.exponentialRampToValueAtTime(.001,n+.045),a.connect(l).connect(t),a.start(n),a.stop(n+.05),a.onended=()=>{a.disconnect(),l.disconnect()}}const WA=""+new URL("underwater-ambience-CTuF1-BE.mp3",import.meta.url).href;class qA{constructor(t,n){this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0,this.gain.connect(n)}buffer=null;loading=null;source=null;gain;generation=0;disposed=!1;abort=new AbortController;async start(){if(this.disposed||this.source)return;const t=this.generation;if(this.buffer||(this.loading??=fetch(WA,{signal:this.abort.signal}).then(a=>{if(!a.ok)throw new Error(`Music download failed: ${a.status}`);return a.arrayBuffer()}).then(a=>this.ctx.decodeAudioData(a)).catch(a=>{throw this.loading=null,a}),this.buffer=await this.loading),this.disposed||t!==this.generation||this.source||this.ctx.state==="closed")return;const n=this.ctx.createBufferSource();n.buffer=this.buffer,n.loop=!0,n.connect(this.gain),this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.65,this.ctx.currentTime+1.5),n.start(),this.source=n}reset(){this.generation++,this.source?.stop(),this.source?.disconnect(),this.source=null}dispose(){this.disposed=!0,this.abort.abort(),this.reset(),this.gain.disconnect()}}const Gi=4,YA={x:0,y:3,z:-12},Zd={x:0,y:2,z:-112},sl={x:32,y:3,z:-12},Y_={stone:{name:"Limestone",short:"Stone",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},wood:{name:"Driftwood",short:"Wood",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},flare:{name:"Signal flare",short:"Flare",description:"R · Deploy a 12-second distraction at your position.",hint:"R use · consumed"},air:{name:"Air reserve",short:"Air",description:"R · Restore up to 60 seconds of air (consumed).",hint:"R use · consumed"},bandage:{name:"Sealant kit",short:"Sealant",description:"R · Repair 45 suit integrity (consumed).",hint:"R use · consumed"},relic:{name:"Ammonite relic",short:"Relic",description:"Cannot use here — carry to the extraction pool.",hint:"Carry to extract · do not drop"}},Vr=new Set,Ka=(r,t,n,a)=>{for(let l=r;l<=t;l++)for(let c=n;c<=a;c++)Vr.add(`${l},${c}`)};Ka(8,14,1,5);Ka(10,12,5,11);Ka(4,18,11,24);Ka(10,12,24,26);Ka(8,14,26,30);for(let r=9;r<=12;r++)for(let t=15;t<=20;t++)Vr.delete(`${r},${t}`);Ka(19,19,4,20);Ka(18,19,20,21);Ka(17,21,1,4);const Xa=(r,t)=>({x:(r-11)*Gi,y:3,z:-t*Gi}),Dr=r=>({col:Math.round(r.x/Gi)+11,row:Math.round(-r.z/Gi)}),si=(r,t)=>Math.hypot(r.x-t.x,r.y-t.y,r.z-t.z);function Kd(r,t){return Vr.has(`${Math.round(r/Gi)+11},${Math.round(-t/Gi)}`)}function jA(r,t=.48){if(r.y<.65||r.y>7.1)return!1;for(let n=0;n<8;n++)if(!Kd(r.x+Math.cos(n*Math.PI/4)*t,r.z+Math.sin(n*Math.PI/4)*t))return!1;return Kd(r.x,r.z)}function j_(r,t,n,a,l=.48){const c=Math.max(1,Math.ceil(Math.hypot(t,n,a)/.25));for(let u=0;u<c;u++)for(const[h,m]of[["x",t],["y",n],["z",a]]){const d={...r,[h]:r[h]+m/c};jA(d,l)&&(r[h]=d[h])}}function Kc(r,t){const n=Math.ceil(si(r,t)/.4);for(let a=0;a<=n;a++){const l=n?a/n:0;if(!Kd(r.x+(t.x-r.x)*l,r.z+(t.z-r.z)*l))return!1}return!0}function uu(r,t){return r>=4&&r<=18&&t>=12&&t<=28&&Vr.has(`${r},${t}`)}function ZA(r,t){const n=Dr(r),a=Dr(t),l=`${n.col},${n.row}`,c=`${a.col},${a.row}`;if(!uu(a.col,a.row))return[];const u=[l],h=new Map([[l,null]]);for(let g=0;g<u.length;g++){const v=u[g];if(v===c)break;const[_,x]=v.split(",").map(Number);for(const[S,T]of[[1,0],[-1,0],[0,1],[0,-1]]){const M=`${_+S},${x+T}`;uu(_+S,x+T)&&!h.has(M)&&(h.set(M,v),u.push(M))}}if(!h.has(c))return[];const m=[];let d=c;for(;d&&d!==l;){const[g,v]=d.split(",").map(Number);m.unshift(Xa(g,v)),d=h.get(d)}return m}const Qc=(r,t,n,a)=>({yaw:r-n*.0021,pitch:Math.max(-1.4,Math.min(1.4,t-a*.0021))}),KA=1.45;function r_(r,t){const n=Math.max(0,Math.min(1,(r-.65)/6.449999999999999)),a=Math.max(-1,Math.min(1,-t/1.4)),l=1-n,c=Math.max(0,-a),u=Math.max(0,a),h=(48+n*62)*(1+a*.18),m=(15+n*19)*(1+a*.12-c*.08),d=1.05+l*.5+c*.18-u*.06,g=(.006+n*.022)*(1+a*.28),v=.35+n*.55+a*.12,_=.55+n*.3-c*.12+u*.05,x=.62+n*.28-c*.05,S=.48+n*.42-c*.18+u*.12;return{intensity:h,distance:m,decay:d,beamOpacity:Math.max(.004,g),particle:Math.max(0,Math.min(1,v)),r:_,g:x,b:S}}function o_(r,t,n){if(n<=0)return 0;const l=(Math.max(0,Math.min(1,(r-t)/n))-.5)*2,c=.2,u=Math.abs(l);if(u<=c)return 0;const h=(u-c)/(1-c);return Math.sign(l)*h*h}const Z_="painted-abyss.inventoryTipsSeen";function l_(){try{return globalThis.localStorage?.getItem(Z_)==="1"}catch{return!1}}function QA(){try{globalThis.localStorage?.setItem(Z_,"1")}catch{}}class c_{position={...YA};health=100;air=240;elapsed=0;stamina=100;torch=!0;inventory=["stone","wood","flare","air","bandage"];selected=0;pickups=[{id:1,item:"relic",position:{...Zd}},{id:2,item:"flare",position:{x:-20,y:2,z:-56}}];nextId=3;pending=null;outcome="playing";reason="";tipsSeen=!1;notice="";noticeUntil=0;feedbackKind="";feedbackPulse=0;predator={position:Xa(16,19),state:"patrol",timer:0,lost:0,lastKnown:Xa(16,19),waypoint:0,bite:0,heading:0};decoy=null;patrol=[Xa(16,22),Xa(6,22),Xa(6,13),Xa(16,13)];constructor(t=!1){this.tipsSeen=t,t||(this.notice="1–5 select a slot · R uses it · usable items are consumed.",this.noticeUntil=8,this.feedbackKind="select")}get hasRelic(){return this.inventory.includes("relic")}say(t,n=""){this.notice=t,this.noticeUntil=this.elapsed+4.5,this.feedbackKind=n,this.feedbackPulse++}pulse(t=""){this.feedbackKind=t,this.feedbackPulse++}select(t){return this.outcome!=="playing"||t<0||t>4||this.selected===t?!1:(this.selected=t,this.pulse(this.inventory[t]?"select":"blocked"),!0)}nearest(){return this.pickups.filter(t=>si(t.position,this.position)<3.2&&Kc(this.position,t.position)).sort((t,n)=>si(t.position,this.position)-si(n.position,this.position))[0]}interact(){if(this.outcome!=="playing")return;if(si(this.position,sl)<4){this.hasRelic?(this.outcome="won",this.reason="Relic secured. You made it back to the light."):this.say("Extraction needs the ammonite relic. Follow the turquoise markers.","blocked");return}const t=this.pending===null?this.nearest():this.pickups.find(l=>l.id===this.pending);if(!t||si(t.position,this.position)>3.2||!Kc(this.position,t.position)){this.pending=null;return}let n=this.inventory.indexOf(null);if(n<0&&this.pending===null){this.pending=t.id,this.say("All five slots are full. Choose 1–5, then E to swap.","blocked");return}n<0&&(n=this.selected);const a=this.inventory[n];this.inventory[n]=t.item,this.selected=n,this.pickups=this.pickups.filter(l=>l.id!==t.id),a&&this.pickups.push({id:this.nextId++,item:a,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.pending=null,this.say(t.item==="relic"?"Relic recovered! Follow the amber markers to extraction.":`${Y_[t.item].name} collected.`,"ok"),t.item==="relic"&&(this.predator.state="alert",this.predator.timer=0,this.predator.lastKnown={...this.position})}drop(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}this.pickups.push({id:this.nextId++,item:t,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok")}use(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}if(t==="air"){if(this.air>=240){this.pulse("blocked");return}this.air=Math.min(240,this.air+60),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="bandage"){if(this.health>=100){this.pulse("blocked");return}this.health=Math.min(100,this.health+45),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="flare"){this.decoy={position:{...this.position},until:this.elapsed+12},this.predator.state="search",this.predator.timer=0,this.predator.lastKnown={...this.position},this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}this.pulse("blocked")}update(t,n=!1){if(this.outcome!=="playing")return;if(t=Math.min(t,.05),this.elapsed+=t,this.air=Math.max(0,this.air-t),this.stamina=Math.max(0,Math.min(100,this.stamina+(n?-18:17)*t)),this.air<=0){this.outcome="lost",this.reason="Your air ran out. Use the reserve earlier or take a shorter route.";return}this.pending!==null&&!this.pickups.some(T=>T.id===this.pending&&si(T.position,this.position)<3.2)&&(this.pending=null);const a=this.predator,l=si(a.position,this.position),c=Kc(a.position,this.position),u=c&&(l<4.5||l<(this.torch?16:n?13:8)),h=!uu(Dr(this.position).col,Dr(this.position).row);a.timer+=t,a.bite=Math.max(0,a.bite-t),this.decoy&&this.elapsed>=this.decoy.until&&(this.decoy=null),this.decoy&&l>4.5?(a.state="search",a.timer=0,a.lastKnown={...this.decoy.position}):a.state==="patrol"&&u&&!h?(a.state="alert",a.timer=0,a.lastKnown={...this.position}):a.state==="alert"?(u&&!h&&(a.lastKnown={...this.position}),a.timer>1.6&&(a.state=u&&!h?"chase":"search",a.timer=0,a.lost=0)):a.state==="chase"?(u&&!h?(a.lastKnown={...this.position},a.lost=0):a.lost+=t,a.lost>2.5&&(a.state="search",a.timer=0)):a.state==="search"&&(u&&!h?(a.state="chase",a.timer=0,a.lost=0):a.timer>7&&(a.state="patrol",a.timer=0));const m=a.state==="patrol"?this.patrol[a.waypoint]:a.lastKnown;a.state==="patrol"&&si(a.position,m)<1.1&&(a.waypoint=(a.waypoint+1)%this.patrol.length);const g=ZA(a.position,m)[0]||(Kc(a.position,m)&&uu(Dr(m).col,Dr(m).row)?m:a.position),v=g.x-a.position.x,_=g.z-a.position.z,x=Math.hypot(v,_),S=a.state==="chase"?3.4:a.state==="alert"?.7:1.8;x>.05&&(a.heading=Math.atan2(-_,v),j_(a.position,v/x*Math.min(x,S*t),0,_/x*Math.min(x,S*t),1.3)),a.position.y+=((a.state==="chase"?Math.max(1.2,Math.min(6.2,this.position.y)):3)-a.position.y)*Math.min(1,t*2),a.state==="chase"&&!h&&c&&si(a.position,this.position)<3.2&&a.bite<=0&&(this.health=Math.max(0,this.health-25),a.bite=1.7,this.say("Suit breached! Sprint to cover or deploy a flare."),this.health<=0&&(this.outcome="lost",this.reason="The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe."))}}const Jc=(r=0,t=0,n=0)=>new W(r,t,n),JA="varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",$A=`varying vec2 vUv;varying vec3 wPos;uniform float uTime;uniform vec3 uColor;uniform float uOpacity;
void main(){
  float edge=pow(max(0.,sin(vUv.x*3.14159)),2.4);
  float vertical=pow(sin(vUv.y*3.14159),.55);
  float pulse=.82+sin(wPos.x*.11+wPos.z*.09+uTime*.19)*.14;
  float core=pow(max(0.,1.-abs(vUv.x-.5)*2.4),3.2)*.55;
  float a=(edge*vertical*pulse+core*vertical)*uOpacity;
  gl_FragColor=vec4(uColor,a);
}`;class t2 extends GA{audioNotice="";audioProbe=null;audioTestTimer=0;backgroundMusic=null;mission=new c_(l_());ui;error="";pointerLocked=!1;everLocked=!1;lastSent=0;fallbackTurn=0;lockDenied=!1;lookPointer=null;torchLight=new Wc(15398655,210,34,.38,.55,1.05);torchFill=new el(13625599,4.5,7,1.6);beam;beamHalo;torchBody;composer;bloom;guardian;pickupMeshes=new Map;decoyMesh;constructor(t,n){super(t,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:!0}),this.ui=n,this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.pitch=this.targetPitch=0,this.scene.background=new le(268834),this.scene.fog=new du(667192,.038),this.camera.far=130,this.camera.fov=64,this.camera.updateProjectionMatrix(),this.renderer.toneMappingExposure=1.12,this.renderer.toneMapping=fu,this.scene.add(new H_(5938862,530464,.42)),this.scene.add(new qS(1194048,.22));const a=new Yd(8308948,.55);a.position.set(-8,30,-20),this.scene.add(a),this.buildCave(),this.buildLights(),this.buildComposer(),this.guardian=this.ichthyosaur(.9),this.scene.add(this.guardian.group);const l=new qa({color:14722930});for(const h of[-1,1])this.ellipsoid(this.guardian.group,l,1.8,.27,h*.5,.1,.1,.04);this.suspendedParticles();const c=this.particles.geometry.attributes.position;for(let h=0;h<c.count;h++)c.setXYZ(h,Math.sin(h*78.23)*37,1+h%71/10,-(h*13.23)%122);this.particles.geometry.computeBoundingSphere();const u=this.particles.material;u.uniforms.uTorch={value:1},u.vertexShader=`uniform float uTorch;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;","float cone=1.-smoothstep(.22,.52,length(mv.xy)/max(.08,-mv.z));gl_PointSize=clamp((28.+cone*42.*uTorch)/-mv.z,1.2,5.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/28.,0.,1.)*(.04+cone*.55*uTorch);"),u.fragmentShader=u.fragmentShader.replace("gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));","gl_FragColor=vec4(.78,.92,.96,a*smoothstep(.5,.0,d));"),this.decoyMesh=new Te(new Nr(.18,1),new qa({color:16740416})),this.decoyMesh.add(new el(16738353,12,12)),this.scene.add(this.decoyMesh),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.syncPickups(),this.animate(),this.publish()}buildCave(){const t=this.material(8029300,"sand",.88,3.4),n=this.material(5596778,"rock",.86,1.6),a=this.material(3820626,"rock",.9,.6),l=[],c=[],u=[],h=[];for(const g of Vr){const[v,_]=g.split(",").map(Number),x=Xa(v,_),S=new ws(Gi,Gi,2,2);if(S.rotateX(-Math.PI/2),S.translate(x.x,0,x.z),l.push(S),!(v===19&&_===3)){const T=S.clone();T.rotateZ(Math.PI),T.translate(x.x*2,8,0),c.push(T)}for(const[T,M]of[[1,0],[-1,0],[0,1],[0,-1]])if(!Vr.has(`${v+T},${_+M}`)){const y=new jr(T?1:Gi+.05,8.5,M?1:Gi+.05);y.translate(x.x+T*2.5,4,x.z-M*2.5),u.push(y);for(let U=0;U<3;U++){const L=new Nr(1,1);L.scale(T?.7:1.7,1.3+U%2*.5,M?.7:1.7),L.translate(x.x+T*2.45,1.3+U*2.5,x.z-M*2.45),h.push(L)}}}for(const[g,v]of[[l,t],[c,a],[u,n],[h,n]]){const _=au(g);_&&this.scene.add(new Te(_,v)),g.forEach(x=>x.dispose())}const m=this.material(10459770,"rock",.82,1.5);for(let g=0;g<6;g++)for(const v of[-1,1])this.scene.add(this.tube([Jc(-3+g*.75,.25,-113),Jc(-3+g*.75,1.3,-113+v*1.2),Jc(-3+g*.75,.3,-113+v*2.2)],[.12,.09,.025],m,12,5));const d=new Te(new bi(1.1,1.5,1.2,7),n);d.position.set(Zd.x,.6,Zd.z),this.scene.add(d)}beamMaterial(t,n){return new _n({uniforms:{uTime:this.uniforms.uTime,uColor:{value:new le(t)},uOpacity:{value:n}},transparent:!0,depthWrite:!1,side:jn,blending:Pr,vertexShader:JA,fragmentShader:$A})}addShaft(t,n,a,l,c,u,h,m,d=0,g=0){const v=new Te(new bi(c,u,l,28,1,!0),this.beamMaterial(h,m));return v.position.set(t,n,a),v.rotation.x=d,v.rotation.z=g,this.scene.add(v),v}buildLights(){this.scene.add(this.camera),this.torchLight.color.set(15792127),this.torchLight.intensity=160,this.torchLight.distance=32,this.torchLight.angle=.36,this.torchLight.penumbra=.48,this.torchLight.decay=1.2,this.torchLight.position.set(.32,-.22,-.15),this.torchLight.target.position.set(.12,-.28,-16),this.torchFill.color.set(14215412),this.torchFill.intensity=4,this.torchFill.distance=7,this.torchFill.position.set(.2,-.15,-.4),this.camera.add(this.torchLight,this.torchLight.target,this.torchFill);const t=new bi(.03,4.2,19,32,1,!0);t.rotateX(Math.PI/2),this.beam=new Te(t,this.beamMaterial(13691125,.11)),this.beam.position.set(.28,-.26,-9.2),this.camera.add(this.beam);const n=new bi(.08,6.2,17,32,1,!0);n.rotateX(Math.PI/2),this.beamHalo=new Te(n,this.beamMaterial(11062752,.045)),this.beamHalo.position.set(.28,-.26,-8.4),this.camera.add(this.beamHalo),this.torchBody=new vn;const a=new wr({color:1711650,metalness:.75,roughness:.35}),l=new qa({color:14216952}),c=new Te(new bi(.055,.07,.55,12),a);c.rotation.x=Math.PI/2,c.position.set(0,0,-.2);const u=new Te(new bi(.09,.07,.12,12),a);u.rotation.x=Math.PI/2,u.position.set(0,0,-.52);const h=new Te(new cp(.065,16),l);h.position.set(0,0,-.585),this.torchBody.add(c,u,h),this.torchBody.position.set(.38,-.32,-.55),this.torchBody.rotation.set(.12,-.08,.18),this.camera.add(this.torchBody);const m=(T,M,y)=>{const U=new Te(new hl(.1,8,6),new qa({color:y}));U.position.set(T,.55,M),U.add(new el(y,.85,5.5,1.5)),this.scene.add(U)};for(const[T,M]of[[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])m(T,M,5952708);for(const[T,M]of[[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])m(T,M,14723160);const d=new vn;d.position.set(sl.x,.65,sl.z);const g=new Te(new pu(1.6,.05,8,48),new qa({color:12189660}));g.rotation.x=Math.PI/2,d.add(g),this.scene.add(d);const v=new Wc(13826292,420,24,.72,.8,1);v.position.set(32,12,-12),v.target.position.set(32,0,-12),this.scene.add(v,v.target);const _=new el(11071720,28,16,1.1);_.position.set(32,5,-12),this.scene.add(_),this.addShaft(32,5.2,-12,9,.7,2.8,14220020,.22),this.addShaft(31.2,5.5,-11.2,8.5,.4,1.8,12645098,.14,.08,-.05),this.addShaft(33,5,-12.8,8.2,.35,1.6,13169902,.12,-.06,.07);const x=[[2,6.2,-52,9,.5,2.4,.16],[-3,6.4,-58,8.5,.4,2.1,.13],[6,6,-64,9.5,.55,2.6,.15],[-8,6.3,-72,8,.35,1.9,.11],[4,6.5,-78,9,.45,2.3,.14],[-2,6.1,-86,8.5,.4,2,.12],[0,6.4,-96,8,.35,1.8,.1],[10,6.2,-70,7.5,.3,1.6,.09]];for(const[T,M,y,U,L,w,O]of x){this.addShaft(T,M,y,U,L,w,12119012,O,(Math.random()-.5)*.12,(Math.random()-.5)*.1);const z=new Wc(11594980,55+O*500,15,.5,.85,1.15);z.position.set(T,8.2,y),z.target.position.set(T,0,y),this.scene.add(z,z.target)}this.addShaft(0,6.3,-22,8,.45,2.2,11067608,.1);const S=new Wc(11068636,70,13,.48,.8,1.1);S.position.set(0,8.5,-22),S.target.position.set(0,0,-22),this.scene.add(S,S.target),this.addShaft(0,5.8,-110,7.5,.3,1.5,12899504,.08)}buildComposer(){const t=this.host.clientWidth,n=this.host.clientHeight;this.composer=new zA(this.renderer),this.composer.addPass(new BA(this.scene,this.camera)),this.bloom=new Gr(new ae(t,n),.18,.65,.92),this.composer.addPass(this.bloom),this.composer.addPass(new FA)}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer?.setSize(t,n),this.bloom?.resolution.set(t,n)}syncPickups(){for(const[t,n]of this.pickupMeshes)this.mission.pickups.some(a=>a.id===t)||(this.scene.remove(n),n.traverse(a=>{a instanceof Te&&(a.geometry.dispose(),a.material.dispose())}),this.pickupMeshes.delete(t));for(const t of this.mission.pickups){let n=this.pickupMeshes.get(t.id);if(!n){n=new vn;const a=new wr({color:t.item==="relic"?14857822:8571063,emissive:t.item==="relic"?7027719:1391670,emissiveIntensity:.7,metalness:.4,roughness:.45});if(t.item==="relic"){const l=[],c=[];for(let u=0;u<=72;u++){const h=u/72,m=h*Math.PI*4.5,d=.03+h*h*.62;l.push(Jc(Math.cos(m)*d,Math.sin(m)*d,0)),c.push(.01+h*.12)}n.add(this.tube(l,c,a,90,8)),n.add(new el(15711080,3.5,7))}else n.add(new Te(new Nr(.3,1),a));this.scene.add(n),this.pickupMeshes.set(t.id,n)}n.position.set(t.position.x,t.position.y+Math.sin(this.time*1.7+t.id)*.12,t.position.z),n.rotation.y=this.time*.45}}publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice,yaw:this.yaw})}bind(){const t=(a,l,c,u)=>{a.addEventListener(l,c,u),this.listeners.push(()=>a.removeEventListener(l,c,u))};t(window,"keydown",(a=>{this.playing&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(a.code)&&a.preventDefault(),this.keys.add(a.code),!a.repeat&&(a.code==="Escape"&&(this.mission.pending!==null?(this.mission.pending=null,this.publish()):this.pause()),/^Digit[1-5]$/.test(a.code)&&this.mission.select(Number(a.code.slice(-1))-1)&&this.playSelectClick(),a.code==="KeyE"&&this.mission.interact(),a.code==="KeyF"&&(this.mission.torch=!this.mission.torch),a.code==="KeyR"&&this.mission.use(),a.code==="KeyG"&&this.mission.drop(),a.code==="KeyM"&&this.setSound(!this.sound),this.publish()))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>this.pause())),t(document,"visibilitychange",(()=>{document.hidden&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing){try{n.setPointerCapture(a.pointerId)}catch{}document.pointerLockElement!==n&&this.requestLookLock(!1)}})),t(document,"pointermove",(a=>{if(!this.playing)return;if(document.pointerLockElement===n){this.lookPointer=null,this.fallbackTurn=0;const m=Qc(this.targetYaw,this.targetPitch,a.movementX,a.movementY);this.targetYaw=m.yaw,this.targetPitch=m.pitch;return}const c=n.getBoundingClientRect();if(a.clientX<c.left||a.clientX>c.right||a.clientY<c.top||a.clientY>c.bottom){this.lookPointer=null,this.fallbackTurn=0;return}this.lookPointer={x:a.clientX,y:a.clientY},this.fallbackTurn=o_(a.clientX,c.left,c.width);const u=this.fallbackTurn!==0?0:a.movementX,h=Qc(this.targetYaw,this.targetPitch,u,a.movementY);this.targetYaw=h.yaw,this.targetPitch=h.pitch})),t(window,"mouseout",(a=>{a.relatedTarget||(this.lookPointer=null,this.fallbackTurn=0)})),t(n,"wheel",(a=>{if(!this.playing)return;a.preventDefault();const l=a.deltaMode===1?16:a.deltaMode===2?200:1,c=Qc(this.targetYaw,this.targetPitch,a.deltaX*l,a.deltaY*l);this.targetYaw=c.yaw,this.targetPitch=c.pitch}),{passive:!1}),t(document,"pointerlockchange",(()=>{const a=this.pointerLocked;this.pointerLocked=document.pointerLockElement===n,this.pointerLocked&&(this.everLocked=!0,this.lockDenied=!1,this.lookPointer=null,this.fallbackTurn=0),a&&!this.pointerLocked&&this.pause(),this.publish()})),t(document,"pointerlockerror",(()=>{this.lockDenied=!0,this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.error="The graphics connection was lost. Reload the page to restart the dive.",this.pause(),this.publish()}))}requestLookLock(t=!0){if(!this.playing||document.pointerLockElement===this.renderer.domElement)return;const n=()=>{this.lockDenied=!0,t&&(this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish())};try{this.renderer.domElement.requestPointerLock?.()?.catch(n)}catch{n()}}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.7:0,this.audioProbe=VA(n,this.master),this.backgroundMusic=new qA(n,this.master),n.onstatechange=()=>{this.alive&&(this.playing&&this.sound&&n.state!=="running"&&(this.audioNotice="Sound interrupted. Pause and choose Test sound."),this.publish())}}catch{this.audioContext?.close().catch(()=>{}),this.audioContext=null,this.master=null,this.audioNotice="Audio could not start in this browser. Try Test sound or open the game in Chrome."}}enableAudio(t=!1){window.clearTimeout(this.audioTestTimer),this.initAudio();const n=this.audioContext,a=this.master;if(!n||!a){this.publish();return}a.gain.setTargetAtTime(this.sound?.7:0,n.currentTime,.04),n.resume().then(()=>{if(this.alive){if(!this.playing&&!this.testingAudio){n.suspend().catch(()=>{});return}if(n.state!=="running"){this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish();return}this.audioNotice="",t&&this.sound&&(this.playing||this.testingAudio)&&kA(n,a),this.playing&&this.backgroundMusic?.start().catch(()=>{this.alive&&(this.audioNotice="Background music could not load. Pause and resume to retry.",this.publish())}),this.publish()}}).catch(()=>{this.alive&&(this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish())})}playSelectClick(){if(!this.playing||!this.sound)return;const t=this.audioContext,n=this.master;!t||!n||t.state!=="running"||XA(t,n)}testingAudio=!1;testSound(){this.sound=!0,this.testingAudio=!0,this.enableAudio(!0),this.audioTestTimer=window.setTimeout(()=>{this.testingAudio=!1,this.playing||this.audioContext?.suspend().catch(()=>{})},1500),this.publish()}setSound(t){this.sound=t,this.audioNotice="",t?this.playing?this.enableAudio():this.testSound():this.master&&this.audioContext&&this.master.gain.setTargetAtTime(0,this.audioContext.currentTime,.04),this.publish()}start(){this.mission.outcome!=="playing"&&this.reset(),this.mission.tipsSeen||QA(),this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.testingAudio=!1,this.sound&&this.enableAudio(!0),this.lookPointer=null,this.fallbackTurn=0,this.requestLookLock(!0),this.publish()}pause(){this.playing&&(this.testingAudio=!1,window.clearTimeout(this.audioTestTimer),this.playing=!1,this.lookPointer=null,this.fallbackTurn=0,this.keys.clear(),this.velocity.set(0,0,0),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.publish())}reset(){this.backgroundMusic?.reset(),this.mission=new c_(l_()),this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=0,this.lookPointer=null,this.fallbackTurn=0,this.lockDenied=!1,this.velocity.set(0,0,0),this.time=0,this.lastSent=0,this.keys.clear(),this.syncPickups(),this.publish()}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.playing){this.time+=t;const m=this.mission,d=(...x)=>x.some(S=>this.keys.has(S))?1:0;if(!this.pointerLocked&&this.lookPointer){const x=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=o_(this.lookPointer.x,x.left,x.width)}else!this.pointerLocked&&!this.lookPointer&&(this.fallbackTurn=0);const g=d("ArrowRight")-d("ArrowLeft")+(this.pointerLocked?0:this.fallbackTurn*KA),v=Qc(this.targetYaw,this.targetPitch,g*t*650,(d("ArrowDown")-d("ArrowUp"))*t*650);this.targetYaw=v.yaw,this.targetPitch=v.pitch,this.yaw=Ya.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*t)),this.pitch=Ya.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize(),this.move.copy(this.forward).multiplyScalar(d("KeyW")-d("KeyS")).addScaledVector(this.right,d("KeyD")-d("KeyA")),this.move.y+=d("Space")-d("KeyQ","ControlLeft","ControlRight");const _=!!d("ShiftLeft","ShiftRight")&&m.stamina>3&&this.move.lengthSq()>.1;this.move.lengthSq()>1&&this.move.normalize(),this.move.multiplyScalar(_?4.8:2.8),this.velocity.lerp(this.move,1-Math.exp(-4*t)),j_(m.position,this.velocity.x*t,this.velocity.y*t,this.velocity.z*t),m.update(t,_),this.position.copy(m.position),this.camera.position.copy(this.position),m.outcome!=="playing"&&this.pause()}const n=Ya.smoothstep(-this.position.z,35,100),a=1-Ya.smoothstep(si(this.position,sl),4,22),l=this.scene.fog;l.color.set(800064).lerp(new le(402480),n).lerp(new le(1727074),a*.65),l.density=.032+.022*n-.014*a,this.scene.background.copy(l.color),this.uniforms.uTime.value=this.time;const c=this.mission.torch;if(this.torchLight.visible=c,this.torchFill.visible=c,this.beam.visible=c,this.beamHalo.visible=c,this.torchBody.visible=!0,c){const m=r_(this.position.y,this.pitch),d=r_(3,0),g=m.intensity/d.intensity,v=m.distance/d.distance,_=m.beamOpacity/d.beamOpacity;this.torchLight.intensity=160*g,this.torchLight.distance=32*v,this.torchLight.decay=1.2+(m.decay-d.decay),this.torchLight.color.setRGB(m.r,m.g,m.b),this.torchFill.intensity=4*g,this.torchFill.color.setRGB(m.r,m.g,m.b);const x=this.beam.material;x.uniforms.uOpacity.value=.09*_,x.uniforms.uColor.value.setRGB(m.r,m.g,m.b);const S=this.beamHalo.material;S.uniforms.uOpacity.value=.035*_,S.uniforms.uColor.value.setRGB(m.r*.85,m.g*.9,m.b),this.particles.material.uniforms.uTorch.value=m.particle}else this.particles.material.uniforms.uTorch.value=0;this.bloom.strength=c?.2:.14;const u=this.mission.predator;this.guardian.group.position.copy(u.position);const h=Math.atan2(Math.sin(u.heading-this.guardian.group.rotation.y),Math.cos(u.heading-this.guardian.group.rotation.y));this.guardian.group.rotation.y+=h*Math.min(1,t*5),this.guardian.fins.forEach(m=>m.rotation.x=Math.sin(this.time*2+(m.userData.phase||0))*.25*(m.userData.side||1)),this.guardian.tail.rotation.y=Math.sin(this.time*3)*.22,this.syncPickups(),this.decoyMesh.visible=!!this.mission.decoy,this.mission.decoy&&this.decoyMesh.position.copy(this.mission.decoy.position),this.time-this.lastSent>.05&&(this.lastSent=this.time,this.publish()),this.composer.render()};dispose(){window.clearTimeout(this.audioTestTimer),this.audioContext&&(this.audioContext.onstatechange=null),this.backgroundMusic?.dispose(),this.pause(),this.composer?.dispose(),super.dispose()}}function e2({item:r}){const t={stone:Q.jsx("path",{fill:"#7a8480",d:"M12 28c1-9 7-15 13-16 8-2 15 3 16 11 2 9-4 17-13 18-8 1-15-4-16-13z"}),wood:Q.jsxs("g",{transform:"rotate(-35 24 24)",children:[Q.jsx("rect",{x:"20",y:"8",width:"8",height:"32",rx:"2.5",fill:"#2c343a"}),Q.jsx("rect",{x:"19",y:"8",width:"10",height:"7",rx:"1.5",fill:"#4a545c"}),Q.jsx("rect",{x:"21",y:"18",width:"6",height:"2",fill:"#1a2024"})]}),flare:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"22",y:"16",width:"5",height:"24",rx:"1.5",fill:"#e8e8e8"}),Q.jsx("path",{fill:"#ff1e14",d:"M21 16c1-5 2.5-10 3.5-13 1.5 3 3.5 7 4.5 11H21z"}),Q.jsx("path",{fill:"#ffc14a",d:"M24 5c0-2 .6-4 1-5 .4 1.5 1.2 3 2 4.5-.7.2-1.8.4-3 .5z"})]}),air:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"17",y:"13",width:"14",height:"26",rx:"5",fill:"#c8d0d6"}),Q.jsx("rect",{x:"20",y:"7",width:"8",height:"8",rx:"2",fill:"#a8b2ba"}),Q.jsx("line",{x1:"17",y1:"23",x2:"31",y2:"23",stroke:"#3a444a",strokeWidth:"1.3"}),Q.jsx("line",{x1:"24",y1:"17",x2:"24",y2:"30",stroke:"#3a444a",strokeWidth:"1.3"})]}),bandage:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"11",y:"17",width:"26",height:"18",rx:"2.5",fill:"#9aa4aa"}),Q.jsx("path",{fill:"#5c666c",d:"M22 17v-5h4v5m-2 6v8m-5-4h10"})]}),relic:Q.jsxs(Q.Fragment,{children:[Q.jsx("path",{fill:"#c4923a",d:"M24 8c9 0 15 6 15 13 0 10-8 17-15 17S9 31 9 21 12 8 24 8z"}),Q.jsx("path",{fill:"none",stroke:"#4a2a08",strokeWidth:"2.2",d:"M31 28c-9 9-19 1-16-7s13-11 14-1-7 8-6 2"}),Q.jsx("circle",{cx:"28",cy:"17",r:"3.2",fill:"#ecc878"})]})};return Q.jsx("svg",{viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:r?t[r]:null})}function n2({yaw:r}){const t=(-r*180/Math.PI%360+360)%360,n=[];for(let a=0;a<360;a+=5){let l=(a-t+540)%360-180;if(Math.abs(l)>52)continue;const c=a===0?"N":a===90?"E":a===180?"S":a===270?"W":"";n.push({deg:a,x:l,label:c,major:a%90===0})}return Q.jsxs("div",{className:"compass","aria-hidden":"true",children:[Q.jsx("div",{className:"compass-needle"}),Q.jsx("div",{className:"compass-track",children:n.map(a=>Q.jsxs("div",{className:`compass-mark ${a.major?"major":a.deg%15===0?"mid":""}`,style:{transform:`translateX(${a.x*2.55}px)`},children:[Q.jsx("i",{}),a.label&&Q.jsx("span",{children:a.label})]},a.deg))})]})}function i2(){const r=qo.useRef(null),t=qo.useRef(null),[n,a]=qo.useState(null),[l,c]=qo.useState("");qo.useEffect(()=>{if(!r.current)return;let L;try{L=new t2(r.current,w=>a({...w})),t.current=L}catch(w){console.error(w),c("The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.")}return()=>{L?.dispose(),t.current=null}},[]);const u=n?.mission,h=!!n?.playing,m=u?.outcome!=="playing"&&!!u,d=u?.nearest(),g=u&&si(u.position,sl)<4,v=u?.pending!==null&&u?.pending!==void 0?"Choose slot 1–5 · E confirms swap · Esc cancels":g?u?.hasRelic?"E · Extract with the relic":"Relic required for extraction":d?`E · Collect ${Y_[d.item].name}`:"",_=n?.yaw??0,x=u?Math.ceil(u.air):240,S=`${String(Math.floor(x/60)).padStart(2,"0")}:${String(x%60).padStart(2,"0")}`,T=u?Math.max(1,Math.round(10+-u.position.z*.22+(5-u.position.y)*2.4)):0,M=u?.predator.state||"patrol",U=(u?si(u.position,u.predator.position)<23:!1)?{patrol:"Movement in the dark",alert:"It heard something",chase:"It is hunting you",search:"Searching your last position"}[M]:"";return Q.jsxs("main",{className:h?"app playing":"app",children:[Q.jsx("div",{className:"viewport",ref:r,"aria-label":"Three-dimensional underwater cave"}),Q.jsx("div",{className:"vignette"}),!h&&Q.jsxs("header",{children:[Q.jsxs("div",{className:"brand",children:[Q.jsx("span",{className:"brand-mark",children:"◉"})," PAINTED ABYSS",Q.jsx("small",{children:"THE DROWNED SHELF"})]}),Q.jsxs("div",{className:"build-label",children:["FIRST DIVE ",Q.jsx("span",{children:" / "})," 01"]})]}),h&&u&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("section",{className:"objectives","aria-label":"Objectives",children:[Q.jsxs("div",{className:`obj ${u.hasRelic?"done":""}`,children:[Q.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"◆"}),u.hasRelic?"Carry the ammonite relic":"Recover the ammonite relic"]}),Q.jsxs("div",{className:"obj",children:[Q.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"○"}),"Reach the extraction pool"]})]}),Q.jsx(n2,{yaw:_}),Q.jsxs("div",{className:"depth",children:["DEPTH ",T," m"]}),Q.jsxs("section",{className:"vitals","aria-label":"Vitals",children:[Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"AIR"}),Q.jsx("strong",{className:x<45?"warning":"",children:S})]}),Q.jsx("div",{className:"meter air",children:Q.jsx("i",{style:{width:`${u.air/240*100}%`}})})]}),Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"SUIT"}),Q.jsx("strong",{className:u.health<40?"warning":"",children:Math.ceil(u.health)})]}),Q.jsx("div",{className:"meter suit",children:Q.jsx("i",{style:{width:`${u.health}%`}})})]}),Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"FINS"}),Q.jsx("strong",{children:Math.round(u.stamina)})]}),Q.jsx("div",{className:"meter fins",children:Q.jsx("i",{style:{width:`${u.stamina}%`}})})]})]}),U&&Q.jsx("div",{className:`threat ${M}`,role:"status",children:U}),n?.audioNotice&&Q.jsx("div",{className:"audio-notice",role:"status",children:n.audioNotice}),u.health<40&&Q.jsx("div",{className:"injury"}),Q.jsxs("div",{className:"interaction",role:"status",children:[v&&Q.jsx("div",{className:"prompt",children:v}),u.elapsed<u.noticeUntil&&Q.jsx("p",{className:`notice ${u.feedbackKind}`,children:u.notice},u.feedbackPulse)]}),Q.jsx("div",{className:"inventory","aria-label":"Inventory",children:Q.jsx("div",{className:"slots",children:u.inventory.map((L,w)=>{const O=w===u.selected,z=O&&u.feedbackKind?u.feedbackKind:"";return Q.jsxs("div",{className:`slot ${O?"selected":""} ${L==="relic"?"relic":""} ${L==="flare"?"flare":""} ${z?`pulse-${z}`:""}`,children:[Q.jsx("kbd",{children:w+1}),Q.jsx(e2,{item:L}),O&&Q.jsx("em",{className:"slot-mark","aria-hidden":"true",children:"●"})]},O?`${w}-p${u.feedbackPulse}`:w)})})}),Q.jsxs("aside",{className:"keybinds","aria-hidden":"true",children:[Q.jsxs("div",{children:[Q.jsx("kbd",{children:"1–5"}),Q.jsx("span",{children:"Select"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"F"}),Q.jsx("span",{children:"Torch"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"E"}),Q.jsx("span",{children:"Interact"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"R"}),Q.jsx("span",{children:"Use"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"G"}),Q.jsx("span",{children:"Drop"})]})]}),!n?.pointerLocked&&Q.jsx("div",{className:"free-look",children:"360° free look · move to look · hold left or right of center to keep turning"})]}),!h&&Q.jsxs("div",{className:"menu-backdrop",children:[Q.jsxs("section",{className:"menu",children:[Q.jsx("div",{className:"eyebrow",children:m?u?.outcome==="won"?"EXPEDITION COMPLETE":"DIVE LOST":n?.started?"DIVE PAUSED":"A SHORT UNDERWATER SURVIVAL PROTOTYPE"}),Q.jsx("h1",{children:m?u?.outcome==="won"?Q.jsxs(Q.Fragment,{children:["Back to",Q.jsx("br",{}),Q.jsx("em",{children:"the light."})]}):Q.jsxs(Q.Fragment,{children:["The deep",Q.jsx("br",{}),Q.jsx("em",{children:"keeps its own."})]}):n?.started?Q.jsxs(Q.Fragment,{children:["Catch your",Q.jsx("br",{}),Q.jsx("em",{children:"breath."})]}):Q.jsxs(Q.Fragment,{children:["Some things",Q.jsx("br",{}),Q.jsx("em",{children:"should stay buried."})]})}),Q.jsx("p",{className:"intro",children:m?u?.reason:n?.started?"Your dive is paused. Take a moment, then return to the cave.":"One cave. One ancient guardian. Recover the ammonite relic and bring it back to the light."}),m&&Q.jsxs("div",{className:"results",children:[Q.jsxs("span",{children:[Math.floor((u?.elapsed||0)/60),"m ",Math.floor((u?.elapsed||0)%60),"s underwater"]}),Q.jsx("span",{children:u?.outcome==="won"?"1 relic secured":"No relic secured"})]}),l||n?.error?Q.jsx("p",{className:"error",role:"alert",children:l||n?.error}):Q.jsxs("button",{className:"primary",disabled:!n,onClick:()=>t.current?.start(),children:[n?m?"Try another dive":n.started?"Resume dive":"Begin dive":"Opening the cave…"," ",Q.jsx("span",{children:"↗"})]}),Q.jsxs("div",{className:"menu-actions",children:[Q.jsx("button",{onClick:()=>{const L=t.current;L&&(L.setSound(!L.sound),L.publish())},children:t.current?.sound===!1?"Sound off":"Sound on"}),Q.jsx("button",{onClick:()=>t.current?.testSound(),children:"Test sound"}),n?.started&&!m&&Q.jsx("button",{onClick:()=>{t.current?.reset(),t.current?.start()},children:"Restart dive"})]}),Q.jsx("p",{className:"sound-help",role:"status",children:n?.audioNotice||"Test sound plays two clear tones. During the dive, hear your music and regulator breathing."}),Q.jsxs("div",{className:"dive-note",children:["2–4 MINUTES ",Q.jsx("span",{children:"·"})," DESKTOP / HEADPHONES ",Q.jsx("span",{children:"·"})," PROTOTYPE 0.1.6 · SELECT CLICK"]})]}),Q.jsxs("aside",{className:"briefing",children:[Q.jsx("div",{className:"eyebrow",children:"BEFORE YOU DESCEND"}),Q.jsxs("ol",{children:[Q.jsxs("li",{children:[Q.jsx("b",{children:"Follow the turquoise lights."}),Q.jsx("span",{children:"Find the relic in the bone alcove, beyond the central pillar."})]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Make room for your discovery."}),Q.jsx("span",{children:"Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops."})]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Escape through the east fissure."}),Q.jsx("span",{children:"Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage."})]})]}),Q.jsxs("div",{className:"control-grid",children:[Q.jsxs("span",{children:[Q.jsx("kbd",{children:"W A S D"})," Swim"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"Space / Q"})," Up / down"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"Shift"})," Sprint"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"F"})," Torch"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"E"})," Collect / extract"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"1–5"})," Select slot"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"R"})," Use / consume"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"G"})," Drop selected"]})]}),Q.jsxs("p",{className:"look-note",children:["Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. ",Q.jsx("kbd",{children:"Esc"})," pauses; ",Q.jsx("kbd",{children:"M"})," mutes."]}),Q.jsxs("p",{className:"tip",children:["Inventory: ",Q.jsx("kbd",{children:"1–5"})," selects (click sound when the slot changes), then ",Q.jsx("kbd",{children:"R"})," uses — air, sealant, and flares are consumed. A one-time tip appears on the first dive only. Rock blocks its sight; a flare distracts it while you move away."]})]})]})]})}lM.createRoot(document.getElementById("root")).render(Q.jsx(i2,{}));
