(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var fh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Oy(){if(N0)return Vo;N0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=n,Vo.jsxs=n,Vo}var O0;function Py(){return O0||(O0=1,fh.exports=Oy()),fh.exports}var at=Py(),hh={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function zy(){if(P0)return ue;P0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(N,$,xt){this.props=N,this.context=$,this.refs=T,this.updater=xt||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function U(N,$,xt){this.props=N,this.context=$,this.refs=T,this.updater=xt||x}var L=U.prototype=new y;L.constructor=U,E(L,S.prototype),L.isPureReactComponent=!0;var R=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function H(N,$,xt,St,Ut,Ht){return xt=Ht.ref,{$$typeof:r,type:N,key:$,ref:xt!==void 0?xt:null,props:Ht}}function k(N,$){return H(N.type,$,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function C(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return $[xt]})}var G=/\/+/g;function Z(N,$){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):$.toString(36)}function lt(){}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(lt,lt):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,$,xt,St,Ut){var Ht=typeof N;(Ht==="undefined"||Ht==="boolean")&&(N=null);var nt=!1;if(N===null)nt=!0;else switch(Ht){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(N.$$typeof){case r:case t:nt=!0;break;case g:return nt=N._init,ft(nt(N._payload),$,xt,St,Ut)}}if(nt)return Ut=Ut(N),nt=St===""?"."+Z(N,0):St,R(Ut)?(xt="",nt!=null&&(xt=nt.replace(G,"$&/")+"/"),ft(Ut,$,xt,"",function(Qt){return Qt})):Ut!=null&&(D(Ut)&&(Ut=k(Ut,xt+(Ut.key==null||N&&N.key===Ut.key?"":(""+Ut.key).replace(G,"$&/")+"/")+nt)),$.push(Ut)),1;nt=0;var _t=St===""?".":St+":";if(R(N))for(var At=0;At<N.length;At++)St=N[At],Ht=_t+Z(St,At),nt+=ft(St,$,xt,Ht,Ut);else if(At=v(N),typeof At=="function")for(N=At.call(N),At=0;!(St=N.next()).done;)St=St.value,Ht=_t+Z(St,At++),nt+=ft(St,$,xt,Ht,Ut);else if(Ht==="object"){if(typeof N.then=="function")return ft(ut(N),$,xt,St,Ut);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return nt}function I(N,$,xt){if(N==null)return N;var St=[],Ut=0;return ft(N,St,"","",function(Ht){return $.call(xt,Ht,Ut++)}),St}function et(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function yt(){}return ue.Children={map:I,forEach:function(N,$,xt){I(N,function(){$.apply(this,arguments)},xt)},count:function(N){var $=0;return I(N,function(){$++}),$},toArray:function(N){return I(N,function($){return $})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ue.Component=S,ue.Fragment=n,ue.Profiler=l,ue.PureComponent=U,ue.StrictMode=a,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cloneElement=function(N,$,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var St=E({},N.props),Ut=N.key,Ht=void 0;if($!=null)for(nt in $.ref!==void 0&&(Ht=void 0),$.key!==void 0&&(Ut=""+$.key),$)!z.call($,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&$.ref===void 0||(St[nt]=$[nt]);var nt=arguments.length-2;if(nt===1)St.children=xt;else if(1<nt){for(var _t=Array(nt),At=0;At<nt;At++)_t[At]=arguments[At+2];St.children=_t}return H(N.type,Ut,void 0,void 0,Ht,St)},ue.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ue.createElement=function(N,$,xt){var St,Ut={},Ht=null;if($!=null)for(St in $.key!==void 0&&(Ht=""+$.key),$)z.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Ut[St]=$[St]);var nt=arguments.length-2;if(nt===1)Ut.children=xt;else if(1<nt){for(var _t=Array(nt),At=0;At<nt;At++)_t[At]=arguments[At+2];Ut.children=_t}if(N&&N.defaultProps)for(St in nt=N.defaultProps,nt)Ut[St]===void 0&&(Ut[St]=nt[St]);return H(N,Ht,void 0,void 0,null,Ut)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:h,render:N}},ue.isValidElement=D,ue.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:et}},ue.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},ue.startTransition=function(N){var $=P.T,xt={};P.T=xt;try{var St=N(),Ut=P.S;Ut!==null&&Ut(xt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,j)}catch(Ht){j(Ht)}finally{P.T=$}},ue.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ue.use=function(N){return P.H.use(N)},ue.useActionState=function(N,$,xt){return P.H.useActionState(N,$,xt)},ue.useCallback=function(N,$){return P.H.useCallback(N,$)},ue.useContext=function(N){return P.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,$){return P.H.useDeferredValue(N,$)},ue.useEffect=function(N,$,xt){var St=P.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(N,$)},ue.useId=function(){return P.H.useId()},ue.useImperativeHandle=function(N,$,xt){return P.H.useImperativeHandle(N,$,xt)},ue.useInsertionEffect=function(N,$){return P.H.useInsertionEffect(N,$)},ue.useLayoutEffect=function(N,$){return P.H.useLayoutEffect(N,$)},ue.useMemo=function(N,$){return P.H.useMemo(N,$)},ue.useOptimistic=function(N,$){return P.H.useOptimistic(N,$)},ue.useReducer=function(N,$,xt){return P.H.useReducer(N,$,xt)},ue.useRef=function(N){return P.H.useRef(N)},ue.useState=function(N){return P.H.useState(N)},ue.useSyncExternalStore=function(N,$,xt){return P.H.useSyncExternalStore(N,$,xt)},ue.useTransition=function(){return P.H.useTransition()},ue.version="19.1.1",ue}var z0;function Xd(){return z0||(z0=1,hh.exports=zy()),hh.exports}var ko=Xd(),dh={exports:{}},Xo={},ph={exports:{}},mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function Iy(){return I0||(I0=1,(function(r){function t(I,et){var j=I.length;I.push(et);t:for(;0<j;){var yt=j-1>>>1,N=I[yt];if(0<l(N,et))I[yt]=et,I[j]=N,j=yt;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var et=I[0],j=I.pop();if(j!==et){I[0]=j;t:for(var yt=0,N=I.length,$=N>>>1;yt<$;){var xt=2*(yt+1)-1,St=I[xt],Ut=xt+1,Ht=I[Ut];if(0>l(St,j))Ut<N&&0>l(Ht,St)?(I[yt]=Ht,I[Ut]=j,yt=Ut):(I[yt]=St,I[xt]=j,yt=xt);else if(Ut<N&&0>l(Ht,j))I[yt]=Ht,I[Ut]=j,yt=Ut;else break t}}return et}function l(I,et){var j=I.sortIndex-et.sortIndex;return j!==0?j:I.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,v=3,x=!1,E=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(I){for(var et=n(p);et!==null;){if(et.callback===null)a(p);else if(et.startTime<=I)a(p),et.sortIndex=et.expirationTime,t(m,et);else break;et=n(p)}}function P(I){if(T=!1,R(I),!E)if(n(m)!==null)E=!0,z||(z=!0,Z());else{var et=n(p);et!==null&&ft(P,et.startTime-I)}}var z=!1,H=-1,k=5,D=-1;function C(){return S?!0:!(r.unstable_now()-D<k)}function G(){if(S=!1,z){var I=r.unstable_now();D=I;var et=!0;try{t:{E=!1,T&&(T=!1,U(H),H=-1),x=!0;var j=v;try{e:{for(R(I),_=n(m);_!==null&&!(_.expirationTime>I&&C());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,v=_.priorityLevel;var N=yt(_.expirationTime<=I);if(I=r.unstable_now(),typeof N=="function"){_.callback=N,R(I),et=!0;break e}_===n(m)&&a(m),R(I)}else a(m);_=n(m)}if(_!==null)et=!0;else{var $=n(p);$!==null&&ft(P,$.startTime-I),et=!1}}break t}finally{_=null,v=j,x=!1}et=void 0}}finally{et?Z():z=!1}}}var Z;if(typeof L=="function")Z=function(){L(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=G,Z=function(){ut.postMessage(null)}}else Z=function(){y(G,0)};function ft(I,et){H=y(function(){I(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var et=3;break;default:et=v}var j=v;v=et;try{return I()}finally{v=j}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,et){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=v;v=I;try{return et()}finally{v=j}},r.unstable_scheduleCallback=function(I,et,j){var yt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,I={id:g++,callback:et,priorityLevel:I,startTime:j,expirationTime:N,sortIndex:-1},j>yt?(I.sortIndex=j,t(p,I),n(m)===null&&I===n(p)&&(T?(U(H),H=-1):T=!0,ft(P,j-yt))):(I.sortIndex=N,t(m,I),E||x||(E=!0,z||(z=!0,Z()))),I},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(I){var et=v;return function(){var j=v;v=et;try{return I.apply(this,arguments)}finally{v=j}}}})(mh)),mh}var B0;function By(){return B0||(B0=1,ph.exports=Iy()),ph.exports}var gh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function Fy(){if(F0)return Ln;F0=1;var r=Xd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Ln.requestFormReset=function(m){a.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.1",Ln}var H0;function Hy(){if(H0)return gh.exports;H0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gh.exports=Fy(),gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function Gy(){if(G0)return Xo;G0=1;var r=By(),t=Xd(),n=Hy();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return h(u),e;if(d===o)return h(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var M=!1,A=u.child;A;){if(A===s){M=!0,s=u,o=d;break}if(A===o){M=!0,o=u,s=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===s){M=!0,s=d,o=u;break}if(A===o){M=!0,o=d,s=u;break}A=A.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case L:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ft=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],N=-1;function $(e){return{current:e}}function xt(e){0>N||(e.current=yt[N],yt[N]=null,N--)}function St(e,i){N++,yt[N]=e.current,e.current=i}var Ut=$(null),Ht=$(null),nt=$(null),_t=$(null);function At(e,i){switch(St(nt,i),St(Ht,e),St(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?o0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=o0(i),e=l0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Ut),St(Ut,e)}function Qt(){xt(Ut),xt(Ht),xt(nt)}function Yt(e){e.memoizedState!==null&&St(_t,e);var i=Ut.current,s=l0(i,e.type);i!==s&&(St(Ht,e),St(Ut,s))}function me(e){Ht.current===e&&(xt(Ut),xt(Ht)),_t.current===e&&(xt(_t),Io._currentValue=j)}var on=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,Oe=r.unstable_cancelCallback,oe=r.unstable_shouldYield,ie=r.unstable_requestPaint,Pt=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,Vt=r.unstable_ImmediatePriority,le=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,O=r.unstable_IdlePriority,b=r.log,tt=r.unstable_setDisableYieldValue,ht=null,mt=null;function ct(e){if(typeof b=="function"&&tt(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var zt=Math.clz32?Math.clz32:jt,Rt=Math.log,Wt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Rt(e)/Wt|0)|0}var Mt=256,Lt=4194304;function Kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Kt(o):(M&=A,M!==0?u=Kt(M):s||(s=A&~e,s!==0&&(u=Kt(s))))):(A=o&~d,A!==0?u=Kt(A):M!==0?u=Kt(M):s||(s=o&~e,s!==0&&(u=Kt(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ce(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function It(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,i,s,o,u,d){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(s=M&~s;0<s;){var dt=31-zt(s),gt=1<<dt;A[dt]=0,B[dt]=-1;var it=J[dt];if(it!==null)for(J[dt]=null,dt=0;dt<it.length;dt++){var st=it[dt];st!==null&&(st.lane&=-536870913)}s&=~gt}o!==0&&vt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~i))}function vt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-zt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function Gt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-zt(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function se(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:R0(e.type))}function gi(e,i){var s=et.p;try{return et.p=e,i()}finally{et.p=s}}var hn=Math.random().toString(36).slice(2),dn="__reactFiber$"+hn,$e="__reactProps$"+hn,Ri="__reactContainer$"+hn,Cs="__reactEvents$"+hn,ul="__reactListeners$"+hn,Ds="__reactHandles$"+hn,jr="__reactResources$"+hn,wi="__reactMarker$"+hn;function Us(e){delete e[dn],delete e[$e],delete e[Cs],delete e[ul],delete e[Ds]}function Vi(e){var i=e[dn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ri]||s[dn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=h0(e);e!==null;){if(s=e[dn])return s;e=h0(e)}return i}e=s,s=e.parentNode}return null}function ua(e){if(e=e[dn]||e[Ri]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ja(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function fa(e){var i=e[jr];return i||(i=e[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(e){e[wi]=!0}var fl=new Set,hl={};function w(e,i){q(e,i),q(e+"Capture",i)}function q(e,i){for(hl[e]=i,e=0;e<i.length;e++)fl.add(i[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},K={};function Tt(e){return on.call(K,e)?!0:on.call(ot,e)?!1:rt.test(e)?K[e]=!0:(ot[e]=!0,!1)}function Dt(e,i,s){if(Tt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Bt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var $t,ee;function qt(e){if($t===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$t=i&&i[1]||"",ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ee}var he=!1;function Ae(e,i){if(!e||he)return"";he=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var it=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){it=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){it=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&it&&typeof st.stack=="string")return[st.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var B=M.split(`
`),J=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===J.length)for(o=B.length-1,u=J.length-1;1<=o&&0<=u&&B[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==J[u]){var dt=`
`+B[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?qt(s):""}function je(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return qt("Activity");default:return""}}function Pe(e){try{var i="";do i+=je(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(e){var i=Jt(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ye(e){e._valueTracker||(e._valueTracker=Ye(e))}function Cn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function vn(e){return e.replace(Pn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(e,i,s,o,u,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+de(i)):e.value!==""+de(i)&&(e.value=""+de(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,M,de(i)):s!=null?Dn(e,M,de(s)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+de(A):e.removeAttribute("name")}function zn(e,i,s,o,u,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+de(s):"",i=i!=null?""+de(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Dn(e,i,s){i==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function tn(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+de(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function bn(e,i,s){if(i!=null&&(i=""+de(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+de(s):""}function Ls(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ft(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=de(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function Vn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function op(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Uv.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function lp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&op(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&op(e,d,i[d])}function cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Nv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var uu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Os=null;function cp(e){var i=ua(e);if(i&&(e=i.stateNode)){var s=e[$e]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ve(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+vn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[$e]||null;if(!u)throw Error(a(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Cn(o)}break t;case"textarea":bn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&tn(e,!!s.multiple,i,!1)}}}var hu=!1;function up(e,i,s){if(hu)return e(i,s);hu=!0;try{var o=e(i);return o}finally{if(hu=!1,(Ns!==null||Os!==null)&&(Jl(),Ns&&(i=Ns,e=Os,Os=Ns=null,cp(i),e)))for(i=0;i<e.length;i++)cp(e[i])}}function Zr(e,i){var s=e.stateNode;if(s===null)return null;var o=s[$e]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(ki)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){du=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{du=!1}var ha=null,pu=null,pl=null;function fp(){if(pl)return pl;var e,i=pu,s=i.length,o,u="value"in ha?ha.value:ha.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var M=s-e;for(o=1;o<=M&&i[s-o]===u[d-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function hp(){return!1}function kn(e){function i(s,o,u,d,M){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:hp,this.isPropagationStopped=hp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),i}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=kn(Za),Qr=g({},Za,{view:0,detail:0}),Ov=kn(Qr),mu,gu,Jr,vl=g({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(mu=e.screenX-Jr.screenX,gu=e.screenY-Jr.screenY):gu=mu=0,Jr=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),dp=kn(vl),Pv=g({},vl,{dataTransfer:0}),zv=kn(Pv),Iv=g({},Qr,{relatedTarget:0}),_u=kn(Iv),Bv=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=kn(Bv),Hv=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gv=kn(Hv),Vv=g({},Za,{data:0}),pp=kn(Vv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Wv[e])?!!i[e]:!1}function vu(){return qv}var Yv=g({},Qr,{key:function(e){if(e.key){var i=kv[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jv=kn(Yv),Zv=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=kn(Zv),Kv=g({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Qv=kn(Kv),Jv=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=kn(Jv),tx=g({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=kn(tx),nx=g({},Za,{newState:0,oldState:0}),ix=kn(nx),ax=[9,13,27,32],xu=ki&&"CompositionEvent"in window,$r=null;ki&&"documentMode"in document&&($r=document.documentMode);var sx=ki&&"TextEvent"in window&&!$r,gp=ki&&(!xu||$r&&8<$r&&11>=$r),_p=" ",vp=!1;function xp(e,i){switch(e){case"keyup":return ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ps=!1;function rx(e,i){switch(e){case"compositionend":return yp(i);case"keypress":return i.which!==32?null:(vp=!0,_p);case"textInput":return e=i.data,e===_p&&vp?null:e;default:return null}}function ox(e,i){if(Ps)return e==="compositionend"||!xu&&xp(e,i)?(e=fp(),pl=pu=ha=null,Ps=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gp&&i.locale!=="ko"?null:i.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!lx[e.type]:i==="textarea"}function Mp(e,i,s,o){Ns?Os?Os.push(o):Os=[o]:Ns=o,i=ac(i,"onChange"),0<i.length&&(s=new _l("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var to=null,eo=null;function cx(e){n0(e,0)}function xl(e){var i=ja(e);if(Cn(i))return e}function Ep(e,i){if(e==="change")return i}var Tp=!1;if(ki){var yu;if(ki){var Su="oninput"in document;if(!Su){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Su=typeof bp.oninput=="function"}yu=Su}else yu=!1;Tp=yu&&(!document.documentMode||9<document.documentMode)}function Ap(){to&&(to.detachEvent("onpropertychange",Rp),eo=to=null)}function Rp(e){if(e.propertyName==="value"&&xl(eo)){var i=[];Mp(i,eo,e,fu(e)),up(cx,i)}}function ux(e,i,s){e==="focusin"?(Ap(),to=i,eo=s,to.attachEvent("onpropertychange",Rp)):e==="focusout"&&Ap()}function fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(eo)}function hx(e,i){if(e==="click")return xl(i)}function dx(e,i){if(e==="input"||e==="change")return xl(i)}function px(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Zn=typeof Object.is=="function"?Object.is:px;function no(e,i){if(Zn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!on.call(i,u)||!Zn(e[u],i[u]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cp(e,i){var s=wp(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=wp(s)}}function Dp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Dp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_i(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=_i(e.document)}return i}function Mu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var mx=ki&&"documentMode"in document&&11>=document.documentMode,zs=null,Eu=null,io=null,Tu=!1;function Lp(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Tu||zs==null||zs!==_i(o)||(o=zs,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=ac(Eu,"onSelect"),0<o.length&&(i=new _l("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=zs)))}function Ka(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Is={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},bu={},Np={};ki&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Qa(e){if(bu[e])return bu[e];if(!Is[e])return e;var i=Is[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Np)return bu[e]=i[s];return e}var Op=Qa("animationend"),Pp=Qa("animationiteration"),zp=Qa("animationstart"),gx=Qa("transitionrun"),_x=Qa("transitionstart"),vx=Qa("transitioncancel"),Ip=Qa("transitionend"),Bp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function vi(e,i){Bp.set(e,i),w(i,[e])}var Fp=new WeakMap;function li(e,i){if(typeof e=="object"&&e!==null){var s=Fp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Pe(i)},Fp.set(e,i),i)}return{value:e,source:i,stack:Pe(i)}}var ci=[],Bs=0,Ru=0;function yl(){for(var e=Bs,i=Ru=Bs=0;i<e;){var s=ci[i];ci[i++]=null;var o=ci[i];ci[i++]=null;var u=ci[i];ci[i++]=null;var d=ci[i];if(ci[i++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Hp(s,u,d)}}function Sl(e,i,s,o){ci[Bs++]=e,ci[Bs++]=i,ci[Bs++]=s,ci[Bs++]=o,Ru|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wu(e,i,s,o){return Sl(e,i,s,o),Ml(e)}function Fs(e,i){return Sl(e,null,null,i),Ml(e)}function Hp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-zt(s),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),d):null}function Ml(e){if(50<Co)throw Co=0,Pf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Hs={};function xx(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,i,s,o){return new xx(e,i,s,o)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,i){var s=e.alternate;return s===null?(s=Kn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Gp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function El(e,i,s,o,u,d){var M=0;if(o=e,typeof e=="function")Cu(e)&&(M=1);else if(typeof e=="string")M=Sy(e,s,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Kn(31,s,i,u),e.elementType=D,e.lanes=d,e;case E:return Ja(s.children,u,d,i);case T:M=8,u|=24;break;case S:return e=Kn(12,s,i,u|2),e.elementType=S,e.lanes=d,e;case P:return e=Kn(13,s,i,u),e.elementType=P,e.lanes=d,e;case z:return e=Kn(19,s,i,u),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case L:M=10;break t;case U:M=9;break t;case R:M=11;break t;case H:M=14;break t;case k:M=16,o=null;break t}M=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=Kn(M,s,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function Ja(e,i,s,o){return e=Kn(7,e,o,i),e.lanes=s,e}function Du(e,i,s){return e=Kn(6,e,null,i),e.lanes=s,e}function Uu(e,i,s){return i=Kn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Gs=[],Vs=0,Tl=null,bl=0,ui=[],fi=0,$a=null,Wi=1,qi="";function ts(e,i){Gs[Vs++]=bl,Gs[Vs++]=Tl,Tl=e,bl=i}function Vp(e,i,s){ui[fi++]=Wi,ui[fi++]=qi,ui[fi++]=$a,$a=e;var o=Wi;e=qi;var u=32-zt(o)-1;o&=~(1<<u),s+=1;var d=32-zt(i)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Wi=1<<32-zt(i)+u|s<<u|o,qi=d+e}else Wi=1<<d|s<<u|o,qi=e}function Lu(e){e.return!==null&&(ts(e,1),Vp(e,1,0))}function Nu(e){for(;e===Tl;)Tl=Gs[--Vs],Gs[Vs]=null,bl=Gs[--Vs],Gs[Vs]=null;for(;e===$a;)$a=ui[--fi],ui[fi]=null,qi=ui[--fi],ui[fi]=null,Wi=ui[--fi],ui[fi]=null}var In=null,en=null,Ce=!1,es=null,Ci=!1,Ou=Error(a(519));function ns(e){var i=Error(a(418,""));throw ro(li(i,e)),Ou}function kp(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[dn]=e,i[$e]=o,s){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(s=0;s<Uo.length;s++)Me(Uo[s],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),zn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ye(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Ls(i,o.value,o.defaultValue,o.children),ye(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||r0(i.textContent,s)?(o.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),o.onScroll!=null&&Me("scroll",i),o.onScrollEnd!=null&&Me("scrollend",i),o.onClick!=null&&(i.onclick=sc),i=!0):i=!1,i||ns(e)}function Xp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:In=In.return}}function ao(e){if(e!==In)return!1;if(!Ce)return Xp(e),Ce=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Qf(e.type,e.memoizedProps)),s=!s),s&&en&&ns(e),Xp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){en=yi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,wa(e.type)?(e=eh,eh=null,en=e):en=i):en=In?yi(e.stateNode.nextSibling):null;return!0}function so(){en=In=null,Ce=!1}function Wp(){var e=es;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),es=null),e}function ro(e){es===null?es=[e]:es.push(e)}var Pu=$(null),is=null,Yi=null;function da(e,i,s){St(Pu,i._currentValue),i._currentValue=s}function ji(e){e._currentValue=Pu.current,xt(Pu)}function zu(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Iu(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var B=0;B<i.length;B++)if(A.context===i[B]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),zu(d.return,s,e),o||(M=null);break t}d=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(a(341));M.lanes|=s,d=M.alternate,d!==null&&(d.lanes|=s),zu(M,s,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function oo(e,i,s,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var A=u.type;Zn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===_t.current){if(M=u.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Iu(i,e,s,o),i.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return qp(is,e)}function Rl(e,i){return is===null&&as(e),qp(e,i)}function qp(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Yi===null){if(e===null)throw Error(a(308));Yi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Yi=Yi.next=i;return s}var yx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Sx=r.unstable_scheduleCallback,Mx=r.unstable_NormalPriority,pn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new yx,data:new Map,refCount:0}}function lo(e){e.refCount--,e.refCount===0&&Sx(Mx,function(){e.controller.abort()})}var co=null,Fu=0,ks=0,Xs=null;function Ex(e,i){if(co===null){var s=co=[];Fu=0,ks=Vf(),Xs={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Fu++,i.then(Yp,Yp),i}function Yp(){if(--Fu===0&&co!==null){Xs!==null&&(Xs.status="fulfilled");var e=co;co=null,ks=0,Xs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Tx(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var jp=I.S;I.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ex(e,i),jp!==null&&jp(e,i)};var ss=$(null);function Hu(){var e=ss.current;return e!==null?e:qe.pooledCache}function wl(e,i){i===null?St(ss,ss.current):St(ss,i.pool)}function Zp(){var e=Hu();return e===null?null:{parent:pn._currentValue,pool:e}}var uo=Error(a(460)),Kp=Error(a(474)),Cl=Error(a(542)),Gu={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dl(){}function Jp(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Dl,Dl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,tm(e),e;default:if(typeof i.status=="string")i.then(Dl,Dl);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,tm(e),e}throw fo=i,uo}}var fo=null;function $p(){if(fo===null)throw Error(a(459));var e=fo;return fo=null,e}function tm(e){if(e===uo||e===Cl)throw Error(a(483))}var pa=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Ml(e),Hp(e,null,s),i}return Sl(e,o,i,s),Ml(e)}function ho(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Gt(e,s)}}function Xu(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Wu=!1;function po(){if(Wu){var e=Xs;if(e!==null)throw e}}function mo(e,i,s,o){Wu=!1;var u=e.updateQueue;pa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,J=B.next;B.next=null,M===null?d=J:M.next=J,M=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==M&&(A===null?dt.firstBaseUpdate=J:A.next=J,dt.lastBaseUpdate=B))}if(d!==null){var gt=u.baseState;M=0,dt=J=B=null,A=d;do{var it=A.lane&-536870913,st=it!==A.lane;if(st?(Te&it)===it:(o&it)===it){it!==0&&it===ks&&(Wu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ae=e,te=A;it=i;var Be=s;switch(te.tag){case 1:if(ae=te.payload,typeof ae=="function"){gt=ae.call(Be,gt,it);break t}gt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=te.payload,it=typeof ae=="function"?ae.call(Be,gt,it):ae,it==null)break t;gt=g({},gt,it);break t;case 2:pa=!0}}it=A.callback,it!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[it]:st.push(it))}else st={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(J=dt=st,B=gt):dt=dt.next=st,M|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);dt===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),Ta|=M,e.lanes=M,e.memoizedState=gt}}function em(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function nm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)em(s[e],i)}var Ws=$(null),Ul=$(0);function im(e,i){e=ea,St(Ul,e),St(Ws,i),ea=e|i.baseLanes}function qu(){St(Ul,ea),St(Ws,Ws.current)}function Yu(){ea=Ul.current,xt(Ws),xt(Ul)}var _a=0,ge=null,ze=null,cn=null,Ll=!1,qs=!1,rs=!1,Nl=0,go=0,Ys=null,bx=0;function an(){throw Error(a(321))}function ju(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Zn(e[s],i[s]))return!1;return!0}function Zu(e,i,s,o,u,d){return _a=d,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Hm:Gm,rs=!1,d=s(o,u),rs=!1,qs&&(d=sm(i,s,o,u)),am(e),d}function am(e){I.H=Fl;var i=ze!==null&&ze.next!==null;if(_a=0,cn=ze=ge=null,Ll=!1,go=0,Ys=null,i)throw Error(a(300));e===null||xn||(e=e.dependencies,e!==null&&Al(e)&&(xn=!0))}function sm(e,i,s,o){ge=e;var u=0;do{if(qs&&(Ys=null),go=0,qs=!1,25<=u)throw Error(a(301));if(u+=1,cn=ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Lx,d=i(s,o)}while(qs);return d}function Ax(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?_o(i):i,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ge.flags|=1024),i}function Ku(){var e=Nl!==0;return Nl=0,e}function Qu(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Ju(e){if(Ll){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ll=!1}_a=0,cn=ze=ge=null,qs=!1,go=Nl=0,Ys=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ge.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(ze===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var i=cn===null?ge.memoizedState:cn.next;if(i!==null)cn=i,ze=e;else{if(e===null)throw ge.alternate===null?Error(a(467)):Error(a(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},cn===null?ge.memoizedState=cn=e:cn=cn.next=e}return cn}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(e){var i=go;return go+=1,Ys===null&&(Ys=[]),e=Jp(Ys,e,i),i=ge,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Hm:Gm),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _o(e);if(e.$$typeof===L)return Un(e)}throw Error(a(438,String(e)))}function tf(e){var i=null,s=ge.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=$u(),ge.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=C;return i.index++,s}function Zi(e,i){return typeof i=="function"?i(e):i}function Pl(e){var i=un();return ef(i,ze,e)}function ef(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var A=M=null,B=null,J=i,dt=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(Te&gt)===gt:(_a&gt)===gt){var it=J.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===ks&&(dt=!0);else if((_a&it)===it){J=J.next,it===ks&&(dt=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=gt,M=d):B=B.next=gt,ge.lanes|=it,Ta|=it;gt=J.action,rs&&s(d,gt),d=J.hasEagerState?J.eagerState:s(d,gt)}else it={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=it,M=d):B=B.next=it,ge.lanes|=gt,Ta|=gt;J=J.next}while(J!==null&&J!==i);if(B===null?M=d:B.next=A,!Zn(d,e.memoizedState)&&(xn=!0,dt&&(s=Xs,s!==null)))throw s;e.memoizedState=d,e.baseState=M,e.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nf(e){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Zn(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function rm(e,i,s){var o=ge,u=un(),d=Ce;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!Zn((ze||u).memoizedState,s);M&&(u.memoizedState=s,xn=!0),u=u.queue;var A=cm.bind(null,o,u,e);if(vo(2048,8,A,[e]),u.getSnapshot!==i||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,js(9,zl(),lm.bind(null,o,u,s,i),null),qe===null)throw Error(a(349));d||(_a&124)!==0||om(o,i,s)}return s}function om(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ge.updateQueue,i===null?(i=$u(),ge.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function lm(e,i,s,o){i.value=s,i.getSnapshot=o,um(i)&&fm(e)}function cm(e,i,s){return s(function(){um(i)&&fm(e)})}function um(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Zn(e,s)}catch{return!0}}function fm(e){var i=Fs(e,2);i!==null&&ei(i,e,2)}function af(e){var i=Xn();if(typeof e=="function"){var s=e;if(e=s(),rs){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},i}function hm(e,i,s,o){return e.baseState=s,ef(e,ze,typeof o=="function"?o:Zi)}function Rx(e,i,s,o,u){if(Bl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};I.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,dm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function dm(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=I.T,M={};I.T=M;try{var A=s(u,o),B=I.S;B!==null&&B(M,A),pm(e,i,A)}catch(J){sf(e,i,J)}finally{I.T=d}}else try{d=s(u,o),pm(e,i,d)}catch(J){sf(e,i,J)}}function pm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){mm(e,i,o)},function(o){return sf(e,i,o)}):mm(e,i,s)}function mm(e,i,s){i.status="fulfilled",i.value=s,gm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,dm(e,s)))}function sf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,gm(i),i=i.next;while(i!==o)}e.action=null}function gm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function _m(e,i){return i}function vm(e,i){if(Ce){var s=qe.formState;if(s!==null){t:{var o=ge;if(Ce){if(en){e:{for(var u=en,d=Ci;u.nodeType!==8;){if(!d){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){en=yi(u.nextSibling),o=u.data==="F!";break t}}ns(o)}o=!1}o&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:i},s.queue=o,s=Im.bind(null,ge,o),o.dispatch=s,o=af(!1),d=uf.bind(null,ge,!1,o.queue),o=Xn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=Rx.bind(null,ge,u,d,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function xm(e){var i=un();return ym(i,ze,e)}function ym(e,i,s){if(i=ef(e,i,_m)[0],e=Pl(Zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=_o(i)}catch(M){throw M===uo?Cl:M}else o=i;i=un();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(ge.flags|=2048,js(9,zl(),wx.bind(null,u,s),null)),[o,d,e]}function wx(e,i){e.action=i}function Sm(e){var i=un(),s=ze;if(s!==null)return ym(i,s,e);un(),i=i.memoizedState,s=un();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function js(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=ge.updateQueue,i===null&&(i=$u(),ge.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function zl(){return{destroy:void 0,resource:void 0}}function Mm(){return un().memoizedState}function Il(e,i,s,o){var u=Xn();o=o===void 0?null:o,ge.flags|=e,u.memoizedState=js(1|i,zl(),s,o)}function vo(e,i,s,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;ze!==null&&o!==null&&ju(o,ze.memoizedState.deps)?u.memoizedState=js(i,d,s,o):(ge.flags|=e,u.memoizedState=js(1|i,d,s,o))}function Em(e,i){Il(8390656,8,e,i)}function Tm(e,i){vo(2048,8,e,i)}function bm(e,i){return vo(4,2,e,i)}function Am(e,i){return vo(4,4,e,i)}function Rm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function wm(e,i,s){s=s!=null?s.concat([e]):null,vo(4,4,Rm.bind(null,i,e),s)}function rf(){}function Cm(e,i){var s=un();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&ju(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Dm(e,i){var s=un();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&ju(i,o[1]))return o[0];if(o=e(),rs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[o,i],o}function of(e,i,s){return s===void 0||(_a&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Ng(),ge.lanes|=e,Ta|=e,s)}function Um(e,i,s,o){return Zn(s,i)?s:Ws.current!==null?(e=of(e,s,o),Zn(e,i)||(xn=!0),e):(_a&42)===0?(xn=!0,e.memoizedState=s):(e=Ng(),ge.lanes|=e,Ta|=e,i)}function Lm(e,i,s,o,u){var d=et.p;et.p=d!==0&&8>d?d:8;var M=I.T,A={};I.T=A,uf(e,!1,i,s);try{var B=u(),J=I.S;if(J!==null&&J(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Tx(B,o);xo(e,i,dt,ti(e))}else xo(e,i,o,ti(e))}catch(gt){xo(e,i,{then:function(){},status:"rejected",reason:gt},ti())}finally{et.p=d,I.T=M}}function Cx(){}function lf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var u=Nm(e).queue;Lm(e,u,i,j,s===null?Cx:function(){return Om(e),s(o)})}function Nm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Om(e){var i=Nm(e).next.queue;xo(e,i,{},ti())}function cf(){return Un(Io)}function Pm(){return un().memoizedState}function zm(){return un().memoizedState}function Dx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();e=ma(s);var o=ga(i,e,s);o!==null&&(ei(o,i,s),ho(o,i,s)),i={cache:Bu()},e.payload=i;return}i=i.return}}function Ux(e,i,s){var o=ti();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Bl(e)?Bm(i,s):(s=wu(e,i,s,o),s!==null&&(ei(s,e,o),Fm(s,i,o)))}function Im(e,i,s){var o=ti();xo(e,i,s,o)}function xo(e,i,s,o){var u={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))Bm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,A=d(M,s);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,M))return Sl(e,i,u,0),qe===null&&yl(),!1}catch{}finally{}if(s=wu(e,i,u,o),s!==null)return ei(s,e,o),Fm(s,i,o),!0}return!1}function uf(e,i,s,o){if(o={lane:2,revertLane:Vf(),action:o,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(i)throw Error(a(479))}else i=wu(e,s,o,2),i!==null&&ei(i,e,2)}function Bl(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function Bm(e,i){qs=Ll=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Fm(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Gt(e,s)}}var Fl={readContext:Un,use:Ol,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Hm={readContext:Un,use:Ol,useCallback:function(e,i){return Xn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:Em,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Il(4194308,4,Rm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Il(4194308,4,e,i)},useInsertionEffect:function(e,i){Il(4,2,e,i)},useMemo:function(e,i){var s=Xn();i=i===void 0?null:i;var o=e();if(rs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Xn();if(s!==void 0){var u=s(i);if(rs){ct(!0);try{s(i)}finally{ct(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ux.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var i=Xn();return e={current:e},i.memoizedState=e},useState:function(e){e=af(e);var i=e.queue,s=Im.bind(null,ge,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:rf,useDeferredValue:function(e,i){var s=Xn();return of(s,e,i)},useTransition:function(){var e=af(!1);return e=Lm.bind(null,ge,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=ge,u=Xn();if(Ce){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(Te&124)!==0||om(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,Em(cm.bind(null,o,d,e),[e]),o.flags|=2048,js(9,zl(),lm.bind(null,o,d,s,i),null),s},useId:function(){var e=Xn(),i=qe.identifierPrefix;if(Ce){var s=qi,o=Wi;s=(o&~(1<<32-zt(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Nl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=bx++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:cf,useFormState:vm,useActionState:vm,useOptimistic:function(e){var i=Xn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=uf.bind(null,ge,!0,s),s.dispatch=i,[e,i]},useMemoCache:tf,useCacheRefresh:function(){return Xn().memoizedState=Dx.bind(null,ge)}},Gm={readContext:Un,use:Ol,useCallback:Cm,useContext:Un,useEffect:Tm,useImperativeHandle:wm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:Pl,useRef:Mm,useState:function(){return Pl(Zi)},useDebugValue:rf,useDeferredValue:function(e,i){var s=un();return Um(s,ze.memoizedState,e,i)},useTransition:function(){var e=Pl(Zi)[0],i=un().memoizedState;return[typeof e=="boolean"?e:_o(e),i]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:cf,useFormState:xm,useActionState:xm,useOptimistic:function(e,i){var s=un();return hm(s,ze,e,i)},useMemoCache:tf,useCacheRefresh:zm},Lx={readContext:Un,use:Ol,useCallback:Cm,useContext:Un,useEffect:Tm,useImperativeHandle:wm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:nf,useRef:Mm,useState:function(){return nf(Zi)},useDebugValue:rf,useDeferredValue:function(e,i){var s=un();return ze===null?of(s,e,i):Um(s,ze.memoizedState,e,i)},useTransition:function(){var e=nf(Zi)[0],i=un().memoizedState;return[typeof e=="boolean"?e:_o(e),i]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:cf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,i){var s=un();return ze!==null?hm(s,ze,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:tf,useCacheRefresh:zm},Zs=null,yo=0;function Hl(e){var i=yo;return yo+=1,Zs===null&&(Zs=[]),Jp(Zs,e,i)}function So(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Gl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Vm(e){var i=e._init;return i(e._payload)}function km(e){function i(Y,V){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function s(Y,V){if(!e)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Xi(Y,V),Y.index=0,Y.sibling=null,Y}function d(Y,V,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,Q,pt){return V===null||V.tag!==6?(V=Du(Q,Y.mode,pt),V.return=Y,V):(V=u(V,Q),V.return=Y,V)}function B(Y,V,Q,pt){var Ft=Q.type;return Ft===E?dt(Y,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===k&&Vm(Ft)===V.type)?(V=u(V,Q.props),So(V,Q),V.return=Y,V):(V=El(Q.type,Q.key,Q.props,null,Y.mode,pt),So(V,Q),V.return=Y,V)}function J(Y,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Uu(Q,Y.mode,pt),V.return=Y,V):(V=u(V,Q.children||[]),V.return=Y,V)}function dt(Y,V,Q,pt,Ft){return V===null||V.tag!==7?(V=Ja(Q,Y.mode,pt,Ft),V.return=Y,V):(V=u(V,Q),V.return=Y,V)}function gt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Du(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Q=El(V.type,V.key,V.props,null,Y.mode,Q),So(Q,V),Q.return=Y,Q;case x:return V=Uu(V,Y.mode,Q),V.return=Y,V;case k:var pt=V._init;return V=pt(V._payload),gt(Y,V,Q)}if(ft(V)||Z(V))return V=Ja(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,Hl(V),Q);if(V.$$typeof===L)return gt(Y,Rl(Y,V),Q);Gl(Y,V)}return null}function it(Y,V,Q,pt){var Ft=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ft!==null?null:A(Y,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===Ft?B(Y,V,Q,pt):null;case x:return Q.key===Ft?J(Y,V,Q,pt):null;case k:return Ft=Q._init,Q=Ft(Q._payload),it(Y,V,Q,pt)}if(ft(Q)||Z(Q))return Ft!==null?null:dt(Y,V,Q,pt,null);if(typeof Q.then=="function")return it(Y,V,Hl(Q),pt);if(Q.$$typeof===L)return it(Y,V,Rl(Y,Q),pt);Gl(Y,Q)}return null}function st(Y,V,Q,pt,Ft){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(Q)||null,A(V,Y,""+pt,Ft);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return Y=Y.get(pt.key===null?Q:pt.key)||null,B(V,Y,pt,Ft);case x:return Y=Y.get(pt.key===null?Q:pt.key)||null,J(V,Y,pt,Ft);case k:var ve=pt._init;return pt=ve(pt._payload),st(Y,V,Q,pt,Ft)}if(ft(pt)||Z(pt))return Y=Y.get(Q)||null,dt(V,Y,pt,Ft,null);if(typeof pt.then=="function")return st(Y,V,Q,Hl(pt),Ft);if(pt.$$typeof===L)return st(Y,V,Q,Rl(V,pt),Ft);Gl(V,pt)}return null}function ae(Y,V,Q,pt){for(var Ft=null,ve=null,Zt=V,ne=V=0,Sn=null;Zt!==null&&ne<Q.length;ne++){Zt.index>ne?(Sn=Zt,Zt=null):Sn=Zt.sibling;var Re=it(Y,Zt,Q[ne],pt);if(Re===null){Zt===null&&(Zt=Sn);break}e&&Zt&&Re.alternate===null&&i(Y,Zt),V=d(Re,V,ne),ve===null?Ft=Re:ve.sibling=Re,ve=Re,Zt=Sn}if(ne===Q.length)return s(Y,Zt),Ce&&ts(Y,ne),Ft;if(Zt===null){for(;ne<Q.length;ne++)Zt=gt(Y,Q[ne],pt),Zt!==null&&(V=d(Zt,V,ne),ve===null?Ft=Zt:ve.sibling=Zt,ve=Zt);return Ce&&ts(Y,ne),Ft}for(Zt=o(Zt);ne<Q.length;ne++)Sn=st(Zt,Y,ne,Q[ne],pt),Sn!==null&&(e&&Sn.alternate!==null&&Zt.delete(Sn.key===null?ne:Sn.key),V=d(Sn,V,ne),ve===null?Ft=Sn:ve.sibling=Sn,ve=Sn);return e&&Zt.forEach(function(Na){return i(Y,Na)}),Ce&&ts(Y,ne),Ft}function te(Y,V,Q,pt){if(Q==null)throw Error(a(151));for(var Ft=null,ve=null,Zt=V,ne=V=0,Sn=null,Re=Q.next();Zt!==null&&!Re.done;ne++,Re=Q.next()){Zt.index>ne?(Sn=Zt,Zt=null):Sn=Zt.sibling;var Na=it(Y,Zt,Re.value,pt);if(Na===null){Zt===null&&(Zt=Sn);break}e&&Zt&&Na.alternate===null&&i(Y,Zt),V=d(Na,V,ne),ve===null?Ft=Na:ve.sibling=Na,ve=Na,Zt=Sn}if(Re.done)return s(Y,Zt),Ce&&ts(Y,ne),Ft;if(Zt===null){for(;!Re.done;ne++,Re=Q.next())Re=gt(Y,Re.value,pt),Re!==null&&(V=d(Re,V,ne),ve===null?Ft=Re:ve.sibling=Re,ve=Re);return Ce&&ts(Y,ne),Ft}for(Zt=o(Zt);!Re.done;ne++,Re=Q.next())Re=st(Zt,Y,ne,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Zt.delete(Re.key===null?ne:Re.key),V=d(Re,V,ne),ve===null?Ft=Re:ve.sibling=Re,ve=Re);return e&&Zt.forEach(function(Ny){return i(Y,Ny)}),Ce&&ts(Y,ne),Ft}function Be(Y,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:t:{for(var Ft=Q.key;V!==null;){if(V.key===Ft){if(Ft=Q.type,Ft===E){if(V.tag===7){s(Y,V.sibling),pt=u(V,Q.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===k&&Vm(Ft)===V.type){s(Y,V.sibling),pt=u(V,Q.props),So(pt,Q),pt.return=Y,Y=pt;break t}s(Y,V);break}else i(Y,V);V=V.sibling}Q.type===E?(pt=Ja(Q.props.children,Y.mode,pt,Q.key),pt.return=Y,Y=pt):(pt=El(Q.type,Q.key,Q.props,null,Y.mode,pt),So(pt,Q),pt.return=Y,Y=pt)}return M(Y);case x:t:{for(Ft=Q.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){s(Y,V.sibling),pt=u(V,Q.children||[]),pt.return=Y,Y=pt;break t}else{s(Y,V);break}else i(Y,V);V=V.sibling}pt=Uu(Q,Y.mode,pt),pt.return=Y,Y=pt}return M(Y);case k:return Ft=Q._init,Q=Ft(Q._payload),Be(Y,V,Q,pt)}if(ft(Q))return ae(Y,V,Q,pt);if(Z(Q)){if(Ft=Z(Q),typeof Ft!="function")throw Error(a(150));return Q=Ft.call(Q),te(Y,V,Q,pt)}if(typeof Q.then=="function")return Be(Y,V,Hl(Q),pt);if(Q.$$typeof===L)return Be(Y,V,Rl(Y,Q),pt);Gl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(s(Y,V.sibling),pt=u(V,Q),pt.return=Y,Y=pt):(s(Y,V),pt=Du(Q,Y.mode,pt),pt.return=Y,Y=pt),M(Y)):s(Y,V)}return function(Y,V,Q,pt){try{yo=0;var Ft=Be(Y,V,Q,pt);return Zs=null,Ft}catch(Zt){if(Zt===uo||Zt===Cl)throw Zt;var ve=Kn(29,Zt,null,Y.mode);return ve.lanes=pt,ve.return=Y,ve}finally{}}}var Ks=km(!0),Xm=km(!1),hi=$(null),Di=null;function va(e){var i=e.alternate;St(mn,mn.current&1),St(hi,e),Di===null&&(i===null||Ws.current!==null||i.memoizedState!==null)&&(Di=e)}function Wm(e){if(e.tag===22){if(St(mn,mn.current),St(hi,e),Di===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Di=e)}}else xa()}function xa(){St(mn,mn.current),St(hi,hi.current)}function Ki(e){xt(hi),Di===e&&(Di=null),xt(mn)}var mn=$(0);function Vl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||th(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function ff(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var hf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=ti(),u=ma(o);u.payload=i,s!=null&&(u.callback=s),i=ga(e,u,o),i!==null&&(ei(i,e,o),ho(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=ti(),u=ma(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=ga(e,u,o),i!==null&&(ei(i,e,o),ho(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ti(),o=ma(s);o.tag=2,i!=null&&(o.callback=i),i=ga(e,o,s),i!==null&&(ei(i,e,s),ho(i,e,s))}};function qm(e,i,s,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):i.prototype&&i.prototype.isPureReactComponent?!no(s,o)||!no(u,d):!0}function Ym(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&hf.enqueueReplaceState(i,i.state,null)}function os(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jm(e){kl(e)}function Zm(e){console.error(e)}function Km(e){kl(e)}function Xl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Qm(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(e,i,s){return s=ma(s),s.tag=3,s.payload={element:null},s.callback=function(){Xl(e,i)},s}function Jm(e){return e=ma(e),e.tag=3,e}function $m(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Qm(i,s,o)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Qm(i,s,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Nx(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&oo(i,s,u,!0),s=hi.current,s!==null){switch(s.tag){case 13:return Di===null?If():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Gu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Ff(e,o,u)),!1;case 22:return s.flags|=65536,o===Gu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Ff(e,o,u)),!1}throw Error(a(435,s.tag))}return Ff(e,o,u),If(),!1}if(Ce)return i=hi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Ou&&(e=Error(a(422),{cause:o}),ro(li(e,s)))):(o!==Ou&&(i=Error(a(423),{cause:o}),ro(li(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,s),u=df(e.stateNode,o,u),Xu(e,u),nn!==4&&(nn=2)),!1;var d=Error(a(520),{cause:o});if(d=li(d,s),wo===null?wo=[d]:wo.push(d),nn!==4&&(nn=2),i===null)return!0;o=li(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=df(s.stateNode,o,e),Xu(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ba===null||!ba.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Jm(u),$m(u,e,s,o),Xu(s,u),!1}s=s.return}while(s!==null);return!1}var tg=Error(a(461)),xn=!1;function An(e,i,s,o){i.child=e===null?Xm(i,null,s,o):Ks(i,e.child,s,o)}function eg(e,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return as(i),o=Zu(e,i,s,M,d,u),A=Ku(),e!==null&&!xn?(Qu(e,i,u),Qi(e,i,u)):(Ce&&A&&Lu(i),i.flags|=1,An(e,i,o,u),i.child)}function ng(e,i,s,o,u){if(e===null){var d=s.type;return typeof d=="function"&&!Cu(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,ig(e,i,d,o,u)):(e=El(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Sf(e,u)){var M=d.memoizedProps;if(s=s.compare,s=s!==null?s:no,s(M,o)&&e.ref===i.ref)return Qi(e,i,u)}return i.flags|=1,e=Xi(d,o),e.ref=i.ref,e.return=i,i.child=e}function ig(e,i,s,o,u){if(e!==null){var d=e.memoizedProps;if(no(d,o)&&e.ref===i.ref)if(xn=!1,i.pendingProps=o=d,Sf(e,u))(e.flags&131072)!==0&&(xn=!0);else return i.lanes=e.lanes,Qi(e,i,u)}return pf(e,i,s,o,u)}function ag(e,i,s){var o=i.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|s:s,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return sg(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(i,d!==null?d.cachePool:null),d!==null?im(i,d):qu(),Wm(i);else return i.lanes=i.childLanes=536870912,sg(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(wl(i,d.cachePool),im(i,d),xa(),i.memoizedState=null):(e!==null&&wl(i,null),qu(),xa());return An(e,i,u,s),i.child}function sg(e,i,s,o){var u=Hu();return u=u===null?null:{parent:pn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&wl(i,null),qu(),Wm(i),e!==null&&oo(e,i,o,!0),null}function Wl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function pf(e,i,s,o,u){return as(i),s=Zu(e,i,s,o,void 0,u),o=Ku(),e!==null&&!xn?(Qu(e,i,u),Qi(e,i,u)):(Ce&&o&&Lu(i),i.flags|=1,An(e,i,s,u),i.child)}function rg(e,i,s,o,u,d){return as(i),i.updateQueue=null,s=sm(i,o,s,u),am(e),o=Ku(),e!==null&&!xn?(Qu(e,i,d),Qi(e,i,d)):(Ce&&o&&Lu(i),i.flags|=1,An(e,i,s,d),i.child)}function og(e,i,s,o,u){if(as(i),i.stateNode===null){var d=Hs,M=s.contextType;typeof M=="object"&&M!==null&&(d=Un(M)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=hf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Vu(i),M=s.contextType,d.context=typeof M=="object"&&M!==null?Un(M):Hs,d.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(ff(i,s,M,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&hf.enqueueReplaceState(d,d.state,null),mo(i,o,d,u),po(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var A=i.memoizedProps,B=os(s,A);d.props=B;var J=d.context,dt=s.contextType;M=Hs,typeof dt=="object"&&dt!==null&&(M=Un(dt));var gt=s.getDerivedStateFromProps;dt=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||J!==M)&&Ym(i,d,o,M),pa=!1;var it=i.memoizedState;d.state=it,mo(i,o,d,u),po(),J=i.memoizedState,A||it!==J||pa?(typeof gt=="function"&&(ff(i,s,gt,o),J=i.memoizedState),(B=pa||qm(i,s,B,o,it,J,M))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=J),d.props=o,d.state=J,d.context=M,o=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,ku(e,i),M=i.memoizedProps,dt=os(s,M),d.props=dt,gt=i.pendingProps,it=d.context,J=s.contextType,B=Hs,typeof J=="object"&&J!==null&&(B=Un(J)),A=s.getDerivedStateFromProps,(J=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==gt||it!==B)&&Ym(i,d,o,B),pa=!1,it=i.memoizedState,d.state=it,mo(i,o,d,u),po();var st=i.memoizedState;M!==gt||it!==st||pa||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof A=="function"&&(ff(i,s,A,o),st=i.memoizedState),(dt=pa||qm(i,s,dt,o,it,st,B)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,st,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,st,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=st),d.props=o,d.state=st,d.context=B,o=dt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Wl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Ks(i,e.child,null,u),i.child=Ks(i,null,s,u)):An(e,i,s,u),i.memoizedState=d.state,e=i.child):e=Qi(e,i,u),e}function lg(e,i,s,o){return so(),i.flags|=256,An(e,i,s,o),i.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:Zp()}}function _f(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=di),e}function cg(e,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(u=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(u?va(i):xa(),Ce){var A=en,B;if(B=A){t:{for(B=A,A=Ci;B.nodeType!==8;){if(!A){A=null;break t}if(B=yi(B.nextSibling),B===null){A=null;break t}}A=B}A!==null?(i.memoizedState={dehydrated:A,treeContext:$a!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},B=Kn(18,null,null,0),B.stateNode=A,B.return=i,i.child=B,In=i,en=null,B=!0):B=!1}B||ns(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return th(A)?i.lanes=32:i.lanes=536870912,null;Ki(i)}return A=o.children,o=o.fallback,u?(xa(),u=i.mode,A=ql({mode:"hidden",children:A},u),o=Ja(o,u,s,null),A.return=i,o.return=i,A.sibling=o,i.child=A,u=i.child,u.memoizedState=gf(s),u.childLanes=_f(e,M,s),i.memoizedState=mf,o):(va(i),vf(i,A))}if(B=e.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(d)i.flags&256?(va(i),i.flags&=-257,i=xf(e,i,s)):i.memoizedState!==null?(xa(),i.child=e.child,i.flags|=128,i=null):(xa(),u=o.fallback,A=i.mode,o=ql({mode:"visible",children:o.children},A),u=Ja(u,A,s,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,Ks(i,e.child,null,s),o=i.child,o.memoizedState=gf(s),o.childLanes=_f(e,M,s),i.memoizedState=mf,i=u);else if(va(i),th(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(a(419)),o.stack="",o.digest=M,ro({value:o,source:null,stack:null}),i=xf(e,i,s)}else if(xn||oo(e,i,s,!1),M=(s&e.childLanes)!==0,xn||M){if(M=qe,M!==null&&(o=s&-s,o=(o&42)!==0?1:se(o),o=(o&(M.suspendedLanes|s))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Fs(e,o),ei(M,e,o),tg;A.data==="$?"||If(),i=xf(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,en=yi(A.nextSibling),In=i,Ce=!0,es=null,Ci=!1,e!==null&&(ui[fi++]=Wi,ui[fi++]=qi,ui[fi++]=$a,Wi=e.id,qi=e.overflow,$a=i),i=vf(i,o.children),i.flags|=4096);return i}return u?(xa(),u=o.fallback,A=i.mode,B=e.child,J=B.sibling,o=Xi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?u=Xi(J,u):(u=Ja(u,A,s,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,A=e.child.memoizedState,A===null?A=gf(s):(B=A.cachePool,B!==null?(J=pn._currentValue,B=B.parent!==J?{parent:J,pool:J}:B):B=Zp(),A={baseLanes:A.baseLanes|s,cachePool:B}),u.memoizedState=A,u.childLanes=_f(e,M,s),i.memoizedState=mf,o):(va(i),s=e.child,e=s.sibling,s=Xi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=s,i.memoizedState=null,s)}function vf(e,i){return i=ql({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ql(e,i){return e=Kn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,i,s){return Ks(i,e.child,null,s),e=vf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function ug(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),zu(e.return,i,s)}function yf(e,i,s,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=u)}function fg(e,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(An(e,i,o.children,s),o=mn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ug(e,s,i);else if(e.tag===19)ug(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(mn,o),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Vl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),yf(i,!1,u,s,d);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Vl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}yf(i,!0,s,null,d);break;case"together":yf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ta|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(oo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Xi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Xi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Sf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function Ox(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),da(i,pn,e.memoizedState.cache),so();break;case 27:case 5:Yt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:da(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(va(i),i.flags|=128,null):(s&i.child.childLanes)!==0?cg(e,i,s):(va(i),e=Qi(e,i,s),e!==null?e.sibling:null);va(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(oo(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return fg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(mn,mn.current),o)break;return null;case 22:case 23:return i.lanes=0,ag(e,i,s);case 24:da(i,pn,e.memoizedState.cache)}return Qi(e,i,s)}function hg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)xn=!0;else{if(!Sf(e,s)&&(i.flags&128)===0)return xn=!1,Ox(e,i,s);xn=(e.flags&131072)!==0}else xn=!1,Ce&&(i.flags&1048576)!==0&&Vp(i,bl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")Cu(o)?(e=os(o,e),i.tag=1,i=og(null,i,o,e,s)):(i.tag=0,i=pf(null,i,o,e,s));else{if(o!=null){if(u=o.$$typeof,u===R){i.tag=11,i=eg(null,i,o,e,s);break t}else if(u===H){i.tag=14,i=ng(null,i,o,e,s);break t}}throw i=ut(o)||o,Error(a(306,i,""))}}return i;case 0:return pf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=os(o,i.pendingProps),og(e,i,o,u,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,ku(e,i),mo(i,o,null,s);var M=i.memoizedState;if(o=M.cache,da(i,pn,o),o!==d.cache&&Iu(i,[pn],s,!0),po(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=lg(e,i,o,s);break t}else if(o!==u){u=li(Error(a(424)),i),ro(u),i=lg(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=yi(e.firstChild),In=i,Ce=!0,es=null,Ci=!0,s=Xm(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(so(),o===u){i=Qi(e,i,s);break t}An(e,i,o,s)}i=i.child}return i;case 26:return Wl(e,i),e===null?(s=g0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ce||(s=i.type,e=i.pendingProps,o=rc(nt.current).createElement(s),o[dn]=i,o[$e]=e,wn(o,s,e),ln(o),i.stateNode=o):i.memoizedState=g0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&Ce&&(o=i.stateNode=d0(i.type,i.pendingProps,nt.current),In=i,Ci=!0,u=en,wa(i.type)?(eh=u,en=yi(o.firstChild)):en=u),An(e,i,i.pendingProps.children,s),Wl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((u=o=en)&&(o=ly(o,i.type,i.pendingProps,Ci),o!==null?(i.stateNode=o,In=i,en=yi(o.firstChild),Ci=!1,u=!0):u=!1),u||ns(i)),Yt(i),u=i.type,d=i.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,Qf(u,d)?o=null:M!==null&&Qf(u,M)&&(i.flags|=32),i.memoizedState!==null&&(u=Zu(e,i,Ax,null,null,s),Io._currentValue=u),Wl(e,i),An(e,i,o,s),i.child;case 6:return e===null&&Ce&&((e=s=en)&&(s=cy(s,i.pendingProps,Ci),s!==null?(i.stateNode=s,In=i,en=null,e=!0):e=!1),e||ns(i)),null;case 13:return cg(e,i,s);case 4:return At(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ks(i,null,o,s):An(e,i,o,s),i.child;case 11:return eg(e,i,i.type,i.pendingProps,s);case 7:return An(e,i,i.pendingProps,s),i.child;case 8:return An(e,i,i.pendingProps.children,s),i.child;case 12:return An(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,da(i,i.type,o.value),An(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,as(i),u=Un(u),o=o(u),i.flags|=1,An(e,i,o,s),i.child;case 14:return ng(e,i,i.type,i.pendingProps,s);case 15:return ig(e,i,i.type,i.pendingProps,s);case 19:return fg(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=ql(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Xi(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return ag(e,i,s);case 24:return as(i),o=Un(pn),e===null?(u=Hu(),u===null&&(u=qe,d=Bu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Vu(i),da(i,pn,u)):((e.lanes&s)!==0&&(ku(e,i),mo(i,null,null,s),po()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),da(i,pn,o)):(o=d.cache,da(i,pn,o),o!==u.cache&&Iu(i,[pn],s,!0))),An(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ji(e){e.flags|=4}function dg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!S0(i)){if(i=hi.current,i!==null&&((Te&4194048)===Te?Di!==null:(Te&62914560)!==Te&&(Te&536870912)===0||i!==Di))throw fo=Gu,Kp;e.flags|=8192}}function Yl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,tr|=i)}function Mo(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function Px(e,i,s){var o=i.pendingProps;switch(Nu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ji(pn),Qt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ao(i)?Ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Wp())),Je(i),null;case 26:return s=i.memoizedState,e===null?(Ji(i),s!==null?(Je(i),dg(i,s)):(Je(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Ji(i),Je(i),dg(i,s)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==o&&Ji(i),Je(i),i.flags&=-16777217),null;case 27:me(i),s=nt.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ji(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Ut.current,ao(i)?kp(i):(e=d0(u,o,s),i.stateNode=e,Ji(i))}return Je(i),null;case 5:if(me(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ji(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(e=Ut.current,ao(i))kp(i);else{switch(u=rc(nt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(s,{is:o.is}):u.createElement(s)}}e[dn]=i,e[$e]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(wn(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ji(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Ji(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,ao(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[dn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||r0(e.nodeValue,s)),e||ns(i)}else e=rc(e).createTextNode(o),e[dn]=i,i.stateNode=e}return Je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ao(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[dn]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),u=!1}else u=Wp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Ki(i),i):(Ki(i),null)}if(Ki(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Yl(i,i.updateQueue),Je(i),null;case 4:return Qt(),e===null&&qf(i.stateNode.containerInfo),Je(i),null;case 10:return ji(i.type),Je(i),null;case 19:if(xt(mn),u=i.memoizedState,u===null)return Je(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)Mo(u,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Vl(e),d!==null){for(i.flags|=128,Mo(u,!1),e=d.updateQueue,i.updateQueue=e,Yl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Gp(s,e),s=s.sibling;return St(mn,mn.current&1|2),i.child}e=e.sibling}u.tail!==null&&Pt()>Kl&&(i.flags|=128,o=!0,Mo(u,!1),i.lanes=4194304)}else{if(!o)if(e=Vl(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Yl(i,e),Mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ce)return Je(i),null}else 2*Pt()-u.renderingStartTime>Kl&&s!==536870912&&(i.flags|=128,o=!0,Mo(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Pt(),i.sibling=null,e=mn.current,St(mn,o?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return Ki(i),Yu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&Yl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&xt(ss),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ji(pn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function zx(e,i){switch(Nu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ji(pn),Qt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return me(i),null;case 13:if(Ki(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));so()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return xt(mn),null;case 4:return Qt(),null;case 10:return ji(i.type),null;case 22:case 23:return Ki(i),Yu(),e!==null&&xt(ss),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ji(pn),null;case 25:return null;default:return null}}function pg(e,i){switch(Nu(i),i.tag){case 3:ji(pn),Qt();break;case 26:case 27:case 5:me(i);break;case 4:Qt();break;case 13:Ki(i);break;case 19:xt(mn);break;case 10:ji(i.type);break;case 22:case 23:Ki(i),Yu(),e!==null&&xt(ss);break;case 24:ji(pn)}}function Eo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var d=s.create,M=s.inst;o=d(),M.destroy=o}s=s.next}while(s!==u)}}catch(A){ke(i,i.return,A)}}function ya(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=i;var B=s,J=A;try{J()}catch(dt){ke(u,B,dt)}}}o=o.next}while(o!==d)}}catch(dt){ke(i,i.return,dt)}}function mg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{nm(i,s)}catch(o){ke(e,e.return,o)}}}function gg(e,i,s){s.props=os(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ke(e,i,o)}}function To(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){ke(e,i,u)}}function Ui(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){ke(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){ke(e,i,u)}else s.current=null}function _g(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){ke(e,e.return,u)}}function Mf(e,i,s){try{var o=e.stateNode;iy(o,e.type,s,i),o[$e]=i}catch(u){ke(e,e.return,u)}}function vg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||vg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=sc));else if(o!==4&&(o===27&&wa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Tf(e,i,s),e=e.sibling;e!==null;)Tf(e,i,s),e=e.sibling}function jl(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(jl(e,i,s),e=e.sibling;e!==null;)jl(e,i,s),e=e.sibling}function xg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);wn(i,o,s),i[dn]=e,i[$e]=s}catch(d){ke(e,e.return,d)}}var $i=!1,sn=!1,bf=!1,yg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Ix(e,i){if(e=e.containerInfo,Zf=hc,e=Up(e),Mu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var M=0,A=-1,B=-1,J=0,dt=0,gt=e,it=null;e:for(;;){for(var st;gt!==s||u!==0&&gt.nodeType!==3||(A=M+u),gt!==d||o!==0&&gt.nodeType!==3||(B=M+o),gt.nodeType===3&&(M+=gt.nodeValue.length),(st=gt.firstChild)!==null;)it=gt,gt=st;for(;;){if(gt===e)break e;if(it===s&&++J===u&&(A=M),it===d&&++dt===o&&(B=M),(st=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=st}s=A===-1||B===-1?null:{start:A,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kf={focusedElem:e,selectionRange:s},hc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var ae=os(s.type,u,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(ae,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){ke(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)$f(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}}function Sg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(e,s),o&4&&Eo(5,s);break;case 1:if(Sa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(M){ke(s,s.return,M)}else{var u=os(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ke(s,s.return,M)}}o&64&&mg(s),o&512&&To(s,s.return);break;case 3:if(Sa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{nm(e,i)}catch(M){ke(s,s.return,M)}}break;case 27:i===null&&o&4&&xg(s);case 26:case 5:Sa(e,s),i===null&&o&4&&_g(s),o&512&&To(s,s.return);break;case 12:Sa(e,s);break;case 13:Sa(e,s),o&4&&Tg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=qx.bind(null,s),uy(e,s))));break;case 22:if(o=s.memoizedState!==null||$i,!o){i=i!==null&&i.memoizedState!==null||sn,u=$i;var d=sn;$i=o,(sn=i)&&!d?Ma(e,s,(s.subtreeFlags&8772)!==0):Sa(e,s),$i=u,sn=d}break;case 30:break;default:Sa(e,s)}}function Mg(e){var i=e.alternate;i!==null&&(e.alternate=null,Mg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Us(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Wn=!1;function ta(e,i,s){for(s=s.child;s!==null;)Eg(e,i,s),s=s.sibling}function Eg(e,i,s){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:sn||Ui(s,i),ta(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Ui(s,i);var o=Ze,u=Wn;wa(s.type)&&(Ze=s.stateNode,Wn=!1),ta(e,i,s),No(s.stateNode),Ze=o,Wn=u;break;case 5:sn||Ui(s,i);case 6:if(o=Ze,u=Wn,Ze=null,ta(e,i,s),Ze=o,Wn=u,Ze!==null)if(Wn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(d){ke(s,i,d)}else try{Ze.removeChild(s.stateNode)}catch(d){ke(s,i,d)}break;case 18:Ze!==null&&(Wn?(e=Ze,f0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Go(e)):f0(Ze,s.stateNode));break;case 4:o=Ze,u=Wn,Ze=s.stateNode.containerInfo,Wn=!0,ta(e,i,s),Ze=o,Wn=u;break;case 0:case 11:case 14:case 15:sn||ya(2,s,i),sn||ya(4,s,i),ta(e,i,s);break;case 1:sn||(Ui(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&gg(s,i,o)),ta(e,i,s);break;case 21:ta(e,i,s);break;case 22:sn=(o=sn)||s.memoizedState!==null,ta(e,i,s),sn=o;break;default:ta(e,i,s)}}function Tg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Go(e)}catch(s){ke(i,i.return,s)}}function Bx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new yg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new yg),i;default:throw Error(a(435,e.tag))}}function Af(e,i){var s=Bx(e);i.forEach(function(o){var u=Yx.bind(null,e,o);s.has(o)||(s.add(o),o.then(u,u))})}function Qn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=e,M=i,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(wa(A.type)){Ze=A.stateNode,Wn=!1;break t}break;case 5:Ze=A.stateNode,Wn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if(Ze===null)throw Error(a(160));Eg(d,M,u),Ze=null,Wn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)bg(i,e),i=i.sibling}var xi=null;function bg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(i,e),Jn(e),o&4&&(ya(3,e,e.return),Eo(3,e),ya(5,e,e.return));break;case 1:Qn(i,e),Jn(e),o&512&&(sn||s===null||Ui(s,s.return)),o&64&&$i&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=xi;if(Qn(i,e),Jn(e),o&512&&(sn||s===null||Ui(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[wi]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,s),d[dn]=e,ln(d),o=d;break t;case"link":var M=x0("link","href",u).get(o+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break e}}d=u.createElement(o),wn(d,o,s),u.head.appendChild(d);break;case"meta":if(M=x0("meta","content",u).get(o+(s.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break e}}d=u.createElement(o),wn(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[dn]=e,ln(d),o=d}e.stateNode=o}else y0(u,e.type,e.stateNode);else e.stateNode=v0(u,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?y0(u,e.type,e.stateNode):v0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,e),Jn(e),o&512&&(sn||s===null||Ui(s,s.return)),s!==null&&o&4&&Mf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,e),Jn(e),o&512&&(sn||s===null||Ui(s,s.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(st){ke(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Mf(e,u,s!==null?s.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(Qn(i,e),Jn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(st){ke(e,e.return,st)}}break;case 3:if(cc=null,u=xi,xi=oc(i.containerInfo),Qn(i,e),xi=u,Jn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Go(i.containerInfo)}catch(st){ke(e,e.return,st)}bf&&(bf=!1,Ag(e));break;case 4:o=xi,xi=oc(e.stateNode.containerInfo),Qn(i,e),Jn(e),xi=o;break;case 12:Qn(i,e),Jn(e);break;case 13:Qn(i,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Lf=Pt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 22:u=e.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,J=$i,dt=sn;if($i=J||u,sn=dt||B,Qn(i,e),sn=dt,$i=J,Jn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||B||$i||sn||ls(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(d=B.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=B.stateNode;var gt=B.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(st){ke(B,B.return,st)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(st){ke(B,B.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Af(e,s))));break;case 19:Qn(i,e),Jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 30:break;case 21:break;default:Qn(i,e),Jn(e)}}function Jn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(vg(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=Ef(e);jl(e,d,u);break;case 5:var M=s.stateNode;s.flags&32&&(Vn(M,""),s.flags&=-33);var A=Ef(e);jl(e,A,M);break;case 3:case 4:var B=s.stateNode.containerInfo,J=Ef(e);Tf(e,J,B);break;default:throw Error(a(161))}}catch(dt){ke(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ag(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Sa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Sg(e,i.alternate,i),i=i.sibling}function ls(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ya(4,i,i.return),ls(i);break;case 1:Ui(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&gg(i,i.return,s),ls(i);break;case 27:No(i.stateNode);case 26:case 5:Ui(i,i.return),ls(i);break;case 22:i.memoizedState===null&&ls(i);break;case 30:ls(i);break;default:ls(i)}e=e.sibling}}function Ma(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ma(u,d,s),Eo(4,d);break;case 1:if(Ma(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){ke(o,o.return,J)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)em(B[u],A)}catch(J){ke(o,o.return,J)}}s&&M&64&&mg(d),To(d,d.return);break;case 27:xg(d);case 26:case 5:Ma(u,d,s),s&&o===null&&M&4&&_g(d),To(d,d.return);break;case 12:Ma(u,d,s);break;case 13:Ma(u,d,s),s&&M&4&&Tg(u,d);break;case 22:d.memoizedState===null&&Ma(u,d,s),To(d,d.return);break;case 30:break;default:Ma(u,d,s)}i=i.sibling}}function Rf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&lo(s))}function wf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&lo(e))}function Li(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Rg(e,i,s,o),i=i.sibling}function Rg(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Li(e,i,s,o),u&2048&&Eo(9,i);break;case 1:Li(e,i,s,o);break;case 3:Li(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&lo(e)));break;case 12:if(u&2048){Li(e,i,s,o),e=i.stateNode;try{var d=i.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){ke(i,i.return,B)}}else Li(e,i,s,o);break;case 13:Li(e,i,s,o);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?Li(e,i,s,o):bo(e,i):d._visibility&2?Li(e,i,s,o):(d._visibility|=2,Qs(e,i,s,o,(i.subtreeFlags&10256)!==0)),u&2048&&Rf(M,i);break;case 24:Li(e,i,s,o),u&2048&&wf(i.alternate,i);break;default:Li(e,i,s,o)}}function Qs(e,i,s,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,M=i,A=s,B=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:Qs(d,M,A,B,u),Eo(8,M);break;case 23:break;case 22:var dt=M.stateNode;M.memoizedState!==null?dt._visibility&2?Qs(d,M,A,B,u):bo(d,M):(dt._visibility|=2,Qs(d,M,A,B,u)),u&&J&2048&&Rf(M.alternate,M);break;case 24:Qs(d,M,A,B,u),u&&J&2048&&wf(M.alternate,M);break;default:Qs(d,M,A,B,u)}i=i.sibling}}function bo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:bo(s,o),u&2048&&Rf(o.alternate,o);break;case 24:bo(s,o),u&2048&&wf(o.alternate,o);break;default:bo(s,o)}i=i.sibling}}var Ao=8192;function Js(e){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 26:Js(e),e.flags&Ao&&e.memoizedState!==null&&Ey(xi,e.memoizedState,e.memoizedProps);break;case 5:Js(e);break;case 3:case 4:var i=xi;xi=oc(e.stateNode.containerInfo),Js(e),xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ao,Ao=16777216,Js(e),Ao=i):Js(e));break;default:Js(e)}}function Cg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ro(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];yn=o,Ug(o,e)}Cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dg(e),e=e.sibling}function Dg(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&ya(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zl(e)):Ro(e);break;default:Ro(e)}}function Zl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];yn=o,Ug(o,e)}Cg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ya(8,i,i.return),Zl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Zl(i));break;default:Zl(i)}e=e.sibling}}function Ug(e,i){for(;yn!==null;){var s=yn;switch(s.tag){case 0:case 11:case 15:ya(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,yn=o;else t:for(s=e;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(Mg(o),o===s){yn=null;break t}if(u!==null){u.return=d,yn=u;break t}yn=d}}}var Fx={getCacheForType:function(e){var i=Un(pn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Hx=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,Se=null,Te=0,Ne=0,$n=null,Ea=!1,$s=!1,Cf=!1,ea=0,nn=0,Ta=0,cs=0,Df=0,di=0,tr=0,wo=null,qn=null,Uf=!1,Lf=0,Kl=1/0,Ql=null,ba=null,Rn=0,Aa=null,er=null,nr=0,Nf=0,Of=null,Lg=null,Co=0,Pf=null;function ti(){if((Le&2)!==0&&Te!==0)return Te&-Te;if(I.T!==null){var e=ks;return e!==0?e:Vf()}return be()}function Ng(){di===0&&(di=(Te&536870912)===0||Ce?X():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ei(e,i,s){(e===qe&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(ir(e,0),Ra(e,Te,di,!1)),It(e,s),((Le&2)===0||e!==qe)&&(e===qe&&((Le&2)===0&&(cs|=s),nn===4&&Ra(e,Te,di,!1)),Ni(e))}function Og(e,i,s){if((Le&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),u=o?kx(e,i):Bf(e,i,!0),d=o;do{if(u===0){$s&&!o&&Ra(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!Gx(s)){u=Bf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var A=e;u=wo;var B=A.current.memoizedState.isDehydrated;if(B&&(ir(A,M).flags|=256),M=Bf(A,M,!1),M!==2){if(Cf&&!B){A.errorRecoveryDisabledLanes|=d,cs|=d,u=4;break t}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){ir(e,0),Ra(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ra(o,i,di,!Ea);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=Lf+300-Pt(),10<u)){if(Ra(o,i,di,!Ea),kt(o,0,!0)!==0)break t;o.timeoutHandle=c0(Pg.bind(null,o,s,qn,Ql,Uf,i,di,cs,tr,Ea,d,2,-0,0),u);break t}Pg(o,s,qn,Ql,Uf,i,di,cs,tr,Ea,d,0,-0,0)}}break}while(!0);Ni(e)}function Pg(e,i,s,o,u,d,M,A,B,J,dt,gt,it,st){if(e.timeoutHandle=-1,gt=i.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(zo={stylesheets:null,count:0,unsuspend:My},wg(i),gt=Ty(),gt!==null)){e.cancelPendingCommit=gt(Vg.bind(null,e,i,d,s,o,u,M,A,B,dt,1,it,st)),Ra(e,d,M,!J);return}Vg(e,i,d,s,o,u,M,A,B)}function Gx(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ra(e,i,s,o){i&=~Df,i&=~cs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-zt(u),M=1<<d;o[d]=-1,u&=~M}s!==0&&vt(e,s,i)}function Jl(){return(Le&6)===0?(Do(0),!1):!0}function zf(){if(Se!==null){if(Ne===0)var e=Se.return;else e=Se,Yi=is=null,Ju(e),Zs=null,yo=0,e=Se;for(;e!==null;)pg(e.alternate,e),e=e.return;Se=null}}function ir(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,sy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),zf(),qe=e,Se=s=Xi(e.current,null),Te=i,Ne=0,$n=null,Ea=!1,$s=Ct(e,i),Cf=!1,tr=di=Df=cs=Ta=nn=0,qn=wo=null,Uf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-zt(o),d=1<<u;i|=e[u],o&=~d}return ea=i,yl(),s}function zg(e,i){ge=null,I.H=Fl,i===uo||i===Cl?(i=$p(),Ne=3):i===Kp?(i=$p(),Ne=4):Ne=i===tg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,Se===null&&(nn=1,Xl(e,li(i,e.current)))}function Ig(){var e=I.H;return I.H=Fl,e===null?Fl:e}function Bg(){var e=I.A;return I.A=Fx,e}function If(){nn=4,Ea||(Te&4194048)!==Te&&hi.current!==null||($s=!0),(Ta&134217727)===0&&(cs&134217727)===0||qe===null||Ra(qe,Te,di,!1)}function Bf(e,i,s){var o=Le;Le|=2;var u=Ig(),d=Bg();(qe!==e||Te!==i)&&(Ql=null,ir(e,i)),i=!1;var M=nn;t:do try{if(Ne!==0&&Se!==null){var A=Se,B=$n;switch(Ne){case 8:zf(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(i=!0);var J=Ne;if(Ne=0,$n=null,ar(e,A,B,J),s&&$s){M=0;break t}break;default:J=Ne,Ne=0,$n=null,ar(e,A,B,J)}}Vx(),M=nn;break}catch(dt){zg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Yi=is=null,Le=o,I.H=u,I.A=d,Se===null&&(qe=null,Te=0,yl()),M}function Vx(){for(;Se!==null;)Fg(Se)}function kx(e,i){var s=Le;Le|=2;var o=Ig(),u=Bg();qe!==e||Te!==i?(Ql=null,Kl=Pt()+500,ir(e,i)):$s=Ct(e,i);t:do try{if(Ne!==0&&Se!==null){i=Se;var d=$n;e:switch(Ne){case 1:Ne=0,$n=null,ar(e,i,d,1);break;case 2:case 9:if(Qp(d)){Ne=0,$n=null,Hg(i);break}i=function(){Ne!==2&&Ne!==9||qe!==e||(Ne=7),Ni(e)},d.then(i,i);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Qp(d)?(Ne=0,$n=null,Hg(i)):(Ne=0,$n=null,ar(e,i,d,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var A=Se;if(!M||S0(M)){Ne=0,$n=null;var B=A.sibling;if(B!==null)Se=B;else{var J=A.return;J!==null?(Se=J,$l(J)):Se=null}break e}}Ne=0,$n=null,ar(e,i,d,5);break;case 6:Ne=0,$n=null,ar(e,i,d,6);break;case 8:zf(),nn=6;break t;default:throw Error(a(462))}}Xx();break}catch(dt){zg(e,dt)}while(!0);return Yi=is=null,I.H=o,I.A=u,Le=s,Se!==null?0:(qe=null,Te=0,yl(),nn)}function Xx(){for(;Se!==null&&!oe();)Fg(Se)}function Fg(e){var i=hg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,i===null?$l(e):Se=i}function Hg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=rg(s,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=rg(s,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:Ju(i);default:pg(s,i),i=Se=Gp(i,ea),i=hg(s,i,ea)}e.memoizedProps=e.pendingProps,i===null?$l(e):Se=i}function ar(e,i,s,o){Yi=is=null,Ju(i),Zs=null,yo=0;var u=i.return;try{if(Nx(e,u,i,s,Te)){nn=1,Xl(e,li(s,e.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;nn=1,Xl(e,li(s,e.current)),Se=null;return}i.flags&32768?(Ce||o===1?e=!0:$s||(Te&536870912)!==0?e=!1:(Ea=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gg(i,e)):$l(i)}function $l(e){var i=e;do{if((i.flags&32768)!==0){Gg(i,Ea);return}e=i.return;var s=Px(i.alternate,i,ea);if(s!==null){Se=s;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);nn===0&&(nn=5)}function Gg(e,i){do{var s=zx(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);nn=6,Se=null}function Vg(e,i,s,o,u,d,M,A,B){e.cancelPendingCommit=null;do tc();while(Rn!==0);if((Le&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Ru,Et(e,s,d,M,A,B),e===qe&&(Se=qe=null,Te=0),er=i,Aa=e,nr=s,Nf=d,Of=u,Lg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jx(Ke,function(){return Yg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=et.p,et.p=2,M=Le,Le|=4;try{Ix(e,i,s)}finally{Le=M,et.p=u,I.T=o}}Rn=1,kg(),Xg(),Wg()}}function kg(){if(Rn===1){Rn=0;var e=Aa,i=er,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var o=et.p;et.p=2;var u=Le;Le|=4;try{bg(i,e);var d=Kf,M=Up(e.containerInfo),A=d.focusedElem,B=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&Dp(A.ownerDocument.documentElement,A)){if(B!==null&&Mu(A)){var J=B.start,dt=B.end;if(dt===void 0&&(dt=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(dt,A.value.length);else{var gt=A.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var st=it.getSelection(),ae=A.textContent.length,te=Math.min(B.start,ae),Be=B.end===void 0?te:Math.min(B.end,ae);!st.extend&&te>Be&&(M=Be,Be=te,te=M);var Y=Cp(A,te),V=Cp(A,Be);if(Y&&V&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var Q=gt.createRange();Q.setStart(Y.node,Y.offset),st.removeAllRanges(),te>Be?(st.addRange(Q),st.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),st.addRange(Q))}}}}for(gt=[],st=A;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var pt=gt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}hc=!!Zf,Kf=Zf=null}finally{Le=u,et.p=o,I.T=s}}e.current=i,Rn=2}}function Xg(){if(Rn===2){Rn=0;var e=Aa,i=er,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var o=et.p;et.p=2;var u=Le;Le|=4;try{Sg(e,i.alternate,i)}finally{Le=u,et.p=o,I.T=s}}Rn=3}}function Wg(){if(Rn===4||Rn===3){Rn=0,ie();var e=Aa,i=er,s=nr,o=Lg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,er=Aa=null,qg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),Ue(s),i=i.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=I.T,u=et.p,et.p=2,I.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];d(A.value,{componentStack:A.stack})}}finally{I.T=i,et.p=u}}(nr&3)!==0&&tc(),Ni(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===Pf?Co++:(Co=0,Pf=e):Co=0,Do(0)}}function qg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,lo(i)))}function tc(e){return kg(),Xg(),Wg(),Yg()}function Yg(){if(Rn!==5)return!1;var e=Aa,i=Nf;Nf=0;var s=Ue(nr),o=I.T,u=et.p;try{et.p=32>s?32:s,I.T=null,s=Of,Of=null;var d=Aa,M=nr;if(Rn=0,er=Aa=null,nr=0,(Le&6)!==0)throw Error(a(331));var A=Le;if(Le|=4,Dg(d.current),Rg(d,d.current,M,s),Le=A,Do(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,d)}catch{}return!0}finally{et.p=u,I.T=o,qg(e,i)}}function jg(e,i,s){i=li(s,i),i=df(e.stateNode,i,2),e=ga(e,i,2),e!==null&&(It(e,2),Ni(e))}function ke(e,i,s){if(e.tag===3)jg(e,e,s);else for(;i!==null;){if(i.tag===3){jg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=li(s,e),s=Jm(2),o=ga(i,s,2),o!==null&&($m(s,o,i,e),It(o,2),Ni(o));break}}i=i.return}}function Ff(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Hx;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Cf=!0,u.add(s),e=Wx.bind(null,e,i,s),i.then(e,e))}function Wx(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(Te&s)===s&&(nn===4||nn===3&&(Te&62914560)===Te&&300>Pt()-Lf?(Le&2)===0&&ir(e,0):Df|=s,tr===Te&&(tr=0)),Ni(e)}function Zg(e,i){i===0&&(i=bt()),e=Fs(e,i),e!==null&&(It(e,i),Ni(e))}function qx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Zg(e,s)}function Yx(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Zg(e,s)}function jx(e,i){return F(e,i)}var ec=null,sr=null,Hf=!1,nc=!1,Gf=!1,us=0;function Ni(e){e!==sr&&e.next===null&&(sr===null?ec=sr=e:sr=sr.next=e),nc=!0,Hf||(Hf=!0,Kx())}function Do(e,i){if(!Gf&&nc){Gf=!0;do for(var s=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=u&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,$g(o,d))}else d=Te,d=kt(o,o===qe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ct(o,d)||(s=!0,$g(o,d));o=o.next}while(s);Gf=!1}}function Zx(){Kg()}function Kg(){nc=Hf=!1;var e=0;us!==0&&(ay()&&(e=us),us=0);for(var i=Pt(),s=null,o=ec;o!==null;){var u=o.next,d=Qg(o,i);d===0?(o.next=null,s===null?ec=u:s.next=u,u===null&&(sr=s)):(s=o,(e!==0||(d&3)!==0)&&(nc=!0)),o=u}Do(e)}function Qg(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-zt(d),A=1<<M,B=u[M];B===-1?((A&s)===0||(A&o)!==0)&&(u[M]=ce(A,i)):B<=i&&(e.expiredLanes|=A),d&=~A}if(i=qe,s=Te,s=kt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Oe(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&Oe(o),Ue(s)){case 2:case 8:s=le;break;case 32:s=Ke;break;case 268435456:s=O;break;default:s=Ke}return o=Jg.bind(null,e),s=F(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&Oe(o),e.callbackPriority=2,e.callbackNode=null,2}function Jg(e,i){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(tc()&&e.callbackNode!==s)return null;var o=Te;return o=kt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Og(e,o,i),Qg(e,Pt()),e.callbackNode!=null&&e.callbackNode===s?Jg.bind(null,e):null)}function $g(e,i){if(tc())return null;Og(e,i,!0)}function Kx(){ry(function(){(Le&6)!==0?F(Vt,Zx):Kg()})}function Vf(){return us===0&&(us=X()),us}function t0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function e0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Qx(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=t0((u[$e]||null).action),M=o.submitter;M&&(i=(i=M[$e]||null)?t0(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var A=new _l("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(us!==0){var B=M?e0(u,M):new FormData(u);lf(s,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(A.preventDefault(),B=M?e0(u,M):new FormData(u),lf(s,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var kf=0;kf<Au.length;kf++){var Xf=Au[kf],Jx=Xf.toLowerCase(),$x=Xf[0].toUpperCase()+Xf.slice(1);vi(Jx,"on"+$x)}vi(Op,"onAnimationEnd"),vi(Pp,"onAnimationIteration"),vi(zp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(gx,"onTransitionRun"),vi(_x,"onTransitionStart"),vi(vx,"onTransitionCancel"),vi(Ip,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function n0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var M=o.length-1;0<=M;M--){var A=o[M],B=A.instance,J=A.currentTarget;if(A=A.listener,B!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=J;try{d(u)}catch(dt){kl(dt)}u.currentTarget=null,d=B}else for(M=0;M<o.length;M++){if(A=o[M],B=A.instance,J=A.currentTarget,A=A.listener,B!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=J;try{d(u)}catch(dt){kl(dt)}u.currentTarget=null,d=B}}}}function Me(e,i){var s=i[Cs];s===void 0&&(s=i[Cs]=new Set);var o=e+"__bubble";s.has(o)||(i0(i,e,2,!1),s.add(o))}function Wf(e,i,s){var o=0;i&&(o|=4),i0(s,e,o,i)}var ic="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[ic]){e[ic]=!0,fl.forEach(function(s){s!=="selectionchange"&&(ty.has(s)||Wf(s,!1,e),Wf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ic]||(i[ic]=!0,Wf("selectionchange",!1,i))}}function i0(e,i,s,o){switch(R0(i)){case 2:var u=Ry;break;case 8:u=wy;break;default:u=rh}s=u.bind(null,i,s,e),u=void 0,!du||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Yf(e,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Vi(A),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){o=d=M;continue t}A=A.parentNode}}o=o.return}up(function(){var J=d,dt=fu(s),gt=[];t:{var it=Bp.get(e);if(it!==void 0){var st=_l,ae=e;switch(e){case"keypress":if(ml(s)===0)break t;case"keydown":case"keyup":st=jv;break;case"focusin":ae="focus",st=_u;break;case"focusout":ae="blur",st=_u;break;case"beforeblur":case"afterblur":st=_u;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Qv;break;case Op:case Pp:case zp:st=Fv;break;case Ip:st=$v;break;case"scroll":case"scrollend":st=Ov;break;case"wheel":st=ex;break;case"copy":case"cut":case"paste":st=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=mp;break;case"toggle":case"beforetoggle":st=ix}var te=(i&4)!==0,Be=!te&&(e==="scroll"||e==="scrollend"),Y=te?it!==null?it+"Capture":null:it;te=[];for(var V=J,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Y===null||(pt=Zr(V,Y),pt!=null&&te.push(Lo(V,pt,Q))),Be)break;V=V.return}0<te.length&&(it=new st(it,ae,null,s,dt),gt.push({event:it,listeners:te}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",it&&s!==uu&&(ae=s.relatedTarget||s.fromElement)&&(Vi(ae)||ae[Ri]))break t;if((st||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,st?(ae=s.relatedTarget||s.toElement,st=J,ae=ae?Vi(ae):null,ae!==null&&(Be=c(ae),te=ae.tag,ae!==Be||te!==5&&te!==27&&te!==6)&&(ae=null)):(st=null,ae=J),st!==ae)){if(te=dp,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=mp,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Be=st==null?it:ja(st),Q=ae==null?it:ja(ae),it=new te(pt,V+"leave",st,s,dt),it.target=Be,it.relatedTarget=Q,pt=null,Vi(dt)===J&&(te=new te(Y,V+"enter",ae,s,dt),te.target=Q,te.relatedTarget=Be,pt=te),Be=pt,st&&ae)e:{for(te=st,Y=ae,V=0,Q=te;Q;Q=rr(Q))V++;for(Q=0,pt=Y;pt;pt=rr(pt))Q++;for(;0<V-Q;)te=rr(te),V--;for(;0<Q-V;)Y=rr(Y),Q--;for(;V--;){if(te===Y||Y!==null&&te===Y.alternate)break e;te=rr(te),Y=rr(Y)}te=null}else te=null;st!==null&&a0(gt,it,st,te,!1),ae!==null&&Be!==null&&a0(gt,Be,ae,te,!0)}}t:{if(it=J?ja(J):window,st=it.nodeName&&it.nodeName.toLowerCase(),st==="select"||st==="input"&&it.type==="file")var Ft=Ep;else if(Sp(it))if(Tp)Ft=dx;else{Ft=fx;var ve=ux}else st=it.nodeName,!st||st.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&cu(J.elementType)&&(Ft=Ep):Ft=hx;if(Ft&&(Ft=Ft(e,J))){Mp(gt,Ft,s,dt);break t}ve&&ve(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&Dn(it,"number",it.value)}switch(ve=J?ja(J):window,e){case"focusin":(Sp(ve)||ve.contentEditable==="true")&&(zs=ve,Eu=J,io=null);break;case"focusout":io=Eu=zs=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Lp(gt,s,dt);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":Lp(gt,s,dt)}var Zt;if(xu)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Ps?xp(e,s)&&(ne="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ne="onCompositionStart");ne&&(gp&&s.locale!=="ko"&&(Ps||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Ps&&(Zt=fp()):(ha=dt,pu="value"in ha?ha.value:ha.textContent,Ps=!0)),ve=ac(J,ne),0<ve.length&&(ne=new pp(ne,e,null,s,dt),gt.push({event:ne,listeners:ve}),Zt?ne.data=Zt:(Zt=yp(s),Zt!==null&&(ne.data=Zt)))),(Zt=sx?rx(e,s):ox(e,s))&&(ne=ac(J,"onBeforeInput"),0<ne.length&&(ve=new pp("onBeforeInput","beforeinput",null,s,dt),gt.push({event:ve,listeners:ne}),ve.data=Zt)),Qx(gt,e,J,s,dt)}n0(gt,i)})}function Lo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function ac(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Zr(e,s),u!=null&&o.unshift(Lo(e,u,d)),u=Zr(e,i),u!=null&&o.push(Lo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function a0(e,i,s,o,u){for(var d=i._reactName,M=[];s!==null&&s!==o;){var A=s,B=A.alternate,J=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||J===null||(B=J,u?(J=Zr(s,d),J!=null&&M.unshift(Lo(s,J,B))):u||(J=Zr(s,d),J!=null&&M.push(Lo(s,J,B)))),s=s.return}M.length!==0&&e.push({event:i,listeners:M})}var ey=/\r\n?/g,ny=/\u0000|\uFFFD/g;function s0(e){return(typeof e=="string"?e:""+e).replace(ey,`
`).replace(ny,"")}function r0(e,i){return i=s0(i),s0(e)===i}function sc(){}function Ie(e,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Vn(e,""+o);break;case"className":Bt(e,"class",o);break;case"tabIndex":Bt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(e,s,o);break;case"style":lp(e,o,d);break;case"data":if(i!=="object"){Bt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=dl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Ie(e,i,"name",u.name,u,null),Ie(e,i,"formEncType",u.formEncType,u,null),Ie(e,i,"formMethod",u.formMethod,u,null),Ie(e,i,"formTarget",u.formTarget,u,null)):(Ie(e,i,"encType",u.encType,u,null),Ie(e,i,"method",u.method,u,null),Ie(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=dl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=sc);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Dt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Dt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Lv.get(s)||s,Dt(e,s,o))}}function jf(e,i,s,o,u,d){switch(s){case"style":lp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[$e]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Dt(e,s,o)}}}function wn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var M=s[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ie(e,i,d,M,s,null)}}u&&Ie(e,i,"srcSet",s.srcSet,s,null),o&&Ie(e,i,"src",s.src,s,null);return;case"input":Me("invalid",e);var A=d=M=u=null,B=null,J=null;for(o in s)if(s.hasOwnProperty(o)){var dt=s[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":M=dt;break;case"checked":B=dt;break;case"defaultChecked":J=dt;break;case"value":d=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Ie(e,i,o,dt,s,null)}}zn(e,d,A,B,J,M,u,!1),ye(e);return;case"select":Me("invalid",e),o=M=d=null;for(u in s)if(s.hasOwnProperty(u)&&(A=s[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Ie(e,i,u,A,s,null)}i=d,s=M,e.multiple=!!o,i!=null?tn(e,!!o,i,!1):s!=null&&tn(e,!!o,s,!0);return;case"textarea":Me("invalid",e),d=u=o=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ie(e,i,M,A,s,null)}Ls(e,o,u,d),ye(e);return;case"option":for(B in s)if(s.hasOwnProperty(B)&&(o=s[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,i,B,o,s,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Me(Uo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(o=s[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ie(e,i,J,o,s,null)}return;default:if(cu(i)){for(dt in s)s.hasOwnProperty(dt)&&(o=s[dt],o!==void 0&&jf(e,i,dt,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&Ie(e,i,A,o,s,null))}function iy(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,A=null,B=null,J=null,dt=null;for(st in s){var gt=s[st];if(s.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=gt;default:o.hasOwnProperty(st)||Ie(e,i,st,null,o,gt)}}for(var it in o){var st=o[it];if(gt=s[it],o.hasOwnProperty(it)&&(st!=null||gt!=null))switch(it){case"type":d=st;break;case"name":u=st;break;case"checked":J=st;break;case"defaultChecked":dt=st;break;case"value":M=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==gt&&Ie(e,i,it,st,o,gt)}}Ve(e,M,A,B,J,dt,d,u);return;case"select":st=M=A=it=null;for(d in s)if(B=s[d],s.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":st=B;default:o.hasOwnProperty(d)||Ie(e,i,d,null,o,B)}for(u in o)if(d=o[u],B=s[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":it=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==B&&Ie(e,i,u,d,o,B)}i=A,s=M,o=st,it!=null?tn(e,!!s,it,!1):!!o!=!!s&&(i!=null?tn(e,!!s,i,!0):tn(e,!!s,s?[]:"",!1));return;case"textarea":st=it=null;for(A in s)if(u=s[A],s.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ie(e,i,A,null,o,u)}for(M in o)if(u=o[M],d=s[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":it=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Ie(e,i,M,u,o,d)}bn(e,it,st);return;case"option":for(var ae in s)if(it=s[ae],s.hasOwnProperty(ae)&&it!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Ie(e,i,ae,null,o,it)}for(B in o)if(it=o[B],st=s[B],o.hasOwnProperty(B)&&it!==st&&(it!=null||st!=null))switch(B){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ie(e,i,B,it,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)it=s[te],s.hasOwnProperty(te)&&it!=null&&!o.hasOwnProperty(te)&&Ie(e,i,te,null,o,it);for(J in o)if(it=o[J],st=s[J],o.hasOwnProperty(J)&&it!==st&&(it!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:Ie(e,i,J,it,o,st)}return;default:if(cu(i)){for(var Be in s)it=s[Be],s.hasOwnProperty(Be)&&it!==void 0&&!o.hasOwnProperty(Be)&&jf(e,i,Be,void 0,o,it);for(dt in o)it=o[dt],st=s[dt],!o.hasOwnProperty(dt)||it===st||it===void 0&&st===void 0||jf(e,i,dt,it,o,st);return}}for(var Y in s)it=s[Y],s.hasOwnProperty(Y)&&it!=null&&!o.hasOwnProperty(Y)&&Ie(e,i,Y,null,o,it);for(gt in o)it=o[gt],st=s[gt],!o.hasOwnProperty(gt)||it===st||it==null&&st==null||Ie(e,i,gt,it,o,st)}var Zf=null,Kf=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function o0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Qf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jf=null;function ay(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var c0=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(e){return u0.resolve(null).then(e).catch(oy)}:c0;function oy(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function f0(e,i){var s=i,o=0,u=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<o&&8>o){s=o;var M=e.ownerDocument;if(s&1&&No(M.documentElement),s&2&&No(M.body),s&4)for(s=M.head,No(s),M=s.firstChild;M;){var A=M.nextSibling,B=M.nodeName;M[wi]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(u===0){e.removeChild(d),Go(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:o=s.charCodeAt(0)-48;else o=0;s=d}while(s);Go(i)}function $f(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":$f(s),Us(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function ly(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function cy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=yi(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function uy(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function yi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var eh=null;function h0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function d0(e,i,s){switch(i=rc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function No(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Us(e)}var pi=new Map,p0=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=et.d;et.d={f:fy,r:hy,D:dy,C:py,L:my,m:gy,X:vy,S:_y,M:xy};function fy(){var e=na.f(),i=Jl();return e||i}function hy(e){var i=ua(e);i!==null&&i.tag===5&&i.type==="form"?Om(i):na.r(e)}var or=typeof document>"u"?null:document;function m0(e,i,s){var o=or;if(o&&typeof i=="string"&&i){var u=vn(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),p0.has(u)||(p0.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),wn(i,"link",e),ln(i),o.head.appendChild(i)))}}function dy(e){na.D(e),m0("dns-prefetch",e,null)}function py(e,i){na.C(e,i),m0("preconnect",e,i)}function my(e,i,s){na.L(e,i,s);var o=or;if(o&&e&&i){var u='link[rel="preload"][as="'+vn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+vn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+vn(s.imageSizes)+'"]')):u+='[href="'+vn(e)+'"]';var d=u;switch(i){case"style":d=lr(e);break;case"script":d=cr(e)}pi.has(d)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),pi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Oo(d))||i==="script"&&o.querySelector(Po(d))||(i=o.createElement("link"),wn(i,"link",e),ln(i),o.head.appendChild(i)))}}function gy(e,i){na.m(e,i);var s=or;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+vn(o)+'"][href="'+vn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=cr(e)}if(!pi.has(d)&&(e=g({rel:"modulepreload",href:e},i),pi.set(d,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Po(d)))return}o=s.createElement("link"),wn(o,"link",e),ln(o),s.head.appendChild(o)}}}function _y(e,i,s){na.S(e,i,s);var o=or;if(o&&e){var u=fa(o).hoistableStyles,d=lr(e);i=i||"default";var M=u.get(d);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Oo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=pi.get(d))&&nh(e,s);var B=M=o.createElement("link");ln(B),wn(B,"link",e),B._p=new Promise(function(J,dt){B.onload=J,B.onerror=dt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lc(M,i,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(d,M)}}}function vy(e,i){na.X(e,i);var s=or;if(s&&e){var o=fa(s).hoistableScripts,u=cr(e),d=o.get(u);d||(d=s.querySelector(Po(u)),d||(e=g({src:e,async:!0},i),(i=pi.get(u))&&ih(e,i),d=s.createElement("script"),ln(d),wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function xy(e,i){na.M(e,i);var s=or;if(s&&e){var o=fa(s).hoistableScripts,u=cr(e),d=o.get(u);d||(d=s.querySelector(Po(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=pi.get(u))&&ih(e,i),d=s.createElement("script"),ln(d),wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function g0(e,i,s,o){var u=(u=nt.current)?oc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=lr(s.href),s=fa(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=lr(s.href);var d=fa(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Oo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),pi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(e,s),d||yy(u,e,s,M.state))),i&&o===null)throw Error(a(528,""));return M}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=cr(s),s=fa(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function lr(e){return'href="'+vn(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function _0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function yy(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),wn(i,"link",s),ln(i),e.head.appendChild(i))}function cr(e){return'[src="'+vn(e)+'"]'}function Po(e){return"script[async]"+e}function v0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+vn(s.href)+'"]');if(o)return i.instance=o,ln(o),o;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ln(o),wn(o,"style",u),lc(o,s.precedence,e),i.instance=o;case"stylesheet":u=lr(s.href);var d=e.querySelector(Oo(u));if(d)return i.state.loading|=4,i.instance=d,ln(d),d;o=_0(s),(u=pi.get(u))&&nh(o,u),d=(e.ownerDocument||e).createElement("link"),ln(d);var M=d;return M._p=new Promise(function(A,B){M.onload=A,M.onerror=B}),wn(d,"link",o),i.state.loading|=4,lc(d,s.precedence,e),i.instance=d;case"script":return d=cr(s.src),(u=e.querySelector(Po(d)))?(i.instance=u,ln(u),u):(o=s,(u=pi.get(d))&&(o=g({},s),ih(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ln(u),wn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,lc(o,s.precedence,e));return i.instance}function lc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===i)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function nh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ih(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var cc=null;function x0(e,i,s){if(cc===null){var o=new Map,u=cc=new Map;u.set(s,o)}else u=cc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[wi]||d[dn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=e+M;var A=o.get(M);A?A.push(d):o.set(M,[d])}}return o}function y0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Sy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function S0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var zo=null;function My(){}function Ey(e,i,s){if(zo===null)throw Error(a(475));var o=zo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=lr(s.href),d=e.querySelector(Oo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=uc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,ln(d);return}d=e.ownerDocument||e,s=_0(s),(u=pi.get(u))&&nh(s,u),d=d.createElement("link"),ln(d);var M=d;M._p=new Promise(function(A,B){M.onload=A,M.onerror=B}),wn(d,"link",s),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=uc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function Ty(){if(zo===null)throw Error(a(475));var e=zo;return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function uc(){if(this.count--,this.count===0){if(this.stylesheets)ah(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function ah(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(by,e),fc=null,uc.call(e))}function by(e,i){if(!(i.state.loading&4)){var s=fc.get(e);if(s)var o=s.get(null);else{s=new Map,fc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),o=M)}o&&s.set(null,o)}u=i.instance,M=u.getAttribute("data-precedence"),d=s.get(M)||o,d===o&&s.set(null,u),s.set(M,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Io={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Ay(e,i,s,o,u,d,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function M0(e,i,s,o,u,d,M,A,B,J,dt,gt){return e=new Ay(e,i,s,M,A,B,J,gt),i=1,d===!0&&(i|=24),d=Kn(3,null,null,i),e.current=d,d.stateNode=e,i=Bu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Vu(d),e}function E0(e){return e?(e=Hs,e):Hs}function T0(e,i,s,o,u,d){u=E0(u),o.context===null?o.context=u:o.pendingContext=u,o=ma(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=ga(e,o,i),s!==null&&(ei(s,e,i),ho(s,e,i))}function b0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function sh(e,i){b0(e,i),(e=e.alternate)&&b0(e,i)}function A0(e){if(e.tag===13){var i=Fs(e,67108864);i!==null&&ei(i,e,67108864),sh(e,67108864)}}var hc=!0;function Ry(e,i,s,o){var u=I.T;I.T=null;var d=et.p;try{et.p=2,rh(e,i,s,o)}finally{et.p=d,I.T=u}}function wy(e,i,s,o){var u=I.T;I.T=null;var d=et.p;try{et.p=8,rh(e,i,s,o)}finally{et.p=d,I.T=u}}function rh(e,i,s,o){if(hc){var u=oh(o);if(u===null)Yf(e,i,o,dc,s),w0(e,o);else if(Dy(u,e,i,s,o))o.stopPropagation();else if(w0(e,o),i&4&&-1<Cy.indexOf(e)){for(;u!==null;){var d=ua(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Kt(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var B=1<<31-zt(M);A.entanglements[1]|=B,M&=~B}Ni(d),(Le&6)===0&&(Kl=Pt()+500,Do(0))}}break;case 13:A=Fs(d,2),A!==null&&ei(A,d,2),Jl(),sh(d,2)}if(d=oh(o),d===null&&Yf(e,i,o,dc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Yf(e,i,o,null,s)}}function oh(e){return e=fu(e),lh(e)}var dc=null;function lh(e){if(dc=null,e=Vi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return dc=e,null}function R0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Vt:return 2;case le:return 8;case Ke:case Qe:return 32;case O:return 268435456;default:return 32}default:return 32}}var ch=!1,Ca=null,Da=null,Ua=null,Bo=new Map,Fo=new Map,La=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(e,i){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Bo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(i.pointerId)}}function Ho(e,i,s,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ua(i),i!==null&&A0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Dy(e,i,s,o,u){switch(i){case"focusin":return Ca=Ho(Ca,e,i,s,o,u),!0;case"dragenter":return Da=Ho(Da,e,i,s,o,u),!0;case"mouseover":return Ua=Ho(Ua,e,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Ho(Bo.get(d)||null,e,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Ho(Fo.get(d)||null,e,i,s,o,u)),!0}return!1}function C0(e){var i=Vi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,gi(e.priority,function(){if(s.tag===13){var o=ti();o=se(o);var u=Fs(s,o);u!==null&&ei(u,s,o),sh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=oh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);uu=o,s.target.dispatchEvent(o),uu=null}else return i=ua(s),i!==null&&A0(i),e.blockedOn=s,!1;i.shift()}return!0}function D0(e,i,s){pc(e)&&s.delete(i)}function Uy(){ch=!1,Ca!==null&&pc(Ca)&&(Ca=null),Da!==null&&pc(Da)&&(Da=null),Ua!==null&&pc(Ua)&&(Ua=null),Bo.forEach(D0),Fo.forEach(D0)}function mc(e,i){e.blockedOn===i&&(e.blockedOn=null,ch||(ch=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Uy)))}var gc=null;function U0(e){gc!==e&&(gc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(lh(o||s)===null)continue;break}var d=ua(s);d!==null&&(e.splice(i,3),i-=3,lf(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Go(e){function i(B){return mc(B,e)}Ca!==null&&mc(Ca,e),Da!==null&&mc(Da,e),Ua!==null&&mc(Ua,e),Bo.forEach(i),Fo.forEach(i);for(var s=0;s<La.length;s++){var o=La[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<La.length&&(s=La[0],s.blockedOn===null);)C0(s),s.blockedOn===null&&La.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],M=u[$e]||null;if(typeof d=="function")M||U0(s);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[$e]||null)A=M.formAction;else if(lh(u)!==null)continue}else A=M.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),U0(s)}}}function uh(e){this._internalRoot=e}_c.prototype.render=uh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=ti();T0(s,o,e,i,null,null)},_c.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;T0(e.current,2,null,e,null,null),Jl(),i[Ri]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var i=be();e={blockedOn:null,target:e,priority:i};for(var s=0;s<La.length&&i!==0&&i<La[s].priority;s++);La.splice(s,0,e),s===0&&C0(e)}};var L0=t.version;if(L0!=="19.1.1")throw Error(a(527,L0,"19.1.1"));et.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ly={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ht=vc.inject(Ly),mt=vc}catch{}}return Xo.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",u=jm,d=Zm,M=Km,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=M0(e,1,!1,null,null,s,o,u,d,M,A,null),e[Ri]=i.current,qf(e),new uh(i)},Xo.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,u="",d=jm,M=Zm,A=Km,B=null,J=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(B=s.unstable_transitionCallbacks),s.formState!==void 0&&(J=s.formState)),i=M0(e,1,!0,i,s??null,o,u,d,M,A,B,J),i.context=E0(null),s=i.current,o=ti(),o=se(o),u=ma(o),u.callback=null,ga(s,u,o),s=o,i.current.lanes=s,It(i,s),Ni(i),e[Ri]=i.current,qf(e),new _c(i)},Xo.version="19.1.1",Xo}var V0;function Vy(){if(V0)return dh.exports;V0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=Gy(),dh.exports}var ky=Vy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="180",Xy=0,k0=1,Wy=2,J_=1,qy=2,la=3,qa=0,jn=1,Hn=2,ka=0,Cr=1,Nr=2,X0=3,W0=4,Yy=5,ys=100,jy=101,Zy=102,Ky=103,Qy=104,Jy=200,$y=201,tS=202,eS=203,td=204,ed=205,nS=206,iS=207,aS=208,sS=209,rS=210,oS=211,lS=212,cS=213,uS=214,nd=0,id=1,ad=2,Or=3,sd=4,rd=5,od=6,ld=7,$_=0,fS=1,hS=2,Xa=0,dS=1,pS=2,mS=3,tv=4,gS=5,_S=6,vS=7,ev=300,Pr=301,zr=302,cd=303,ud=304,au=306,fd=1e3,Ms=1001,hd=1002,ri=1003,xS=1004,xc=1005,zi=1006,_h=1007,Es=1008,Hi=1009,nv=1010,iv=1011,nl=1012,qd=1013,bs=1014,Ii=1015,cl=1016,Yd=1017,jd=1018,il=1020,av=35902,sv=35899,rv=1021,ov=1022,bi=1023,al=1026,sl=1027,Zd=1028,Kd=1029,lv=1030,Qd=1031,Jd=1033,qc=33776,Yc=33777,jc=33778,Zc=33779,dd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,xd=37496,yd=37808,Sd=37809,Md=37810,Ed=37811,Td=37812,bd=37813,Ad=37814,Rd=37815,wd=37816,Cd=37817,Dd=37818,Ud=37819,Ld=37820,Nd=37821,Od=36492,Pd=36494,zd=36495,Id=36283,Bd=36284,Fd=36285,Hd=36286,yS=3200,SS=3201,cv=0,MS=1,Va="",si="srgb",Ir="srgb-linear",$c="linear",Fe="srgb",ur=7680,q0=519,ES=512,TS=513,bS=514,uv=515,AS=516,RS=517,wS=518,CS=519,Y0=35044,j0="300 es",Bi=2e3,tu=2001;class Gr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Z0=1234567;const tl=Math.PI/180,Br=180/Math.PI;function Vr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function xe(r,t,n){return Math.max(t,Math.min(n,r))}function $d(r,t){return(r%t+t)%t}function DS(r,t,n,a,l){return a+(r-t)*(l-a)/(n-t)}function US(r,t,n){return r!==t?(n-r)/(t-r):0}function el(r,t,n){return(1-n)*r+n*t}function LS(r,t,n,a){return el(r,t,1-Math.exp(-n*a))}function NS(r,t=1){return t-Math.abs($d(r,t*2)-t)}function OS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function PS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function zS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function IS(r,t){return r+Math.random()*(t-r)}function BS(r){return r*(.5-Math.random())}function FS(r){r!==void 0&&(Z0=r);let t=Z0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function HS(r){return r*tl}function GS(r){return r*Br}function VS(r){return(r&r-1)===0&&r!==0}function kS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function XS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function WS(r,t,n,a,l){const c=Math.cos,f=Math.sin,h=c(n/2),m=f(n/2),p=c((t+a)/2),g=f((t+a)/2),_=c((t-a)/2),v=f((t-a)/2),x=c((a-t)/2),E=f((a-t)/2);switch(l){case"XYX":r.set(h*g,m*_,m*v,h*p);break;case"YZY":r.set(m*v,h*g,m*_,h*p);break;case"ZXZ":r.set(m*_,m*v,h*g,h*p);break;case"XZX":r.set(h*g,m*E,m*x,h*p);break;case"YXY":r.set(m*x,h*g,m*E,h*p);break;case"ZYZ":r.set(m*E,m*x,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ar(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ts={DEG2RAD:tl,RAD2DEG:Br,generateUUID:Vr,clamp:xe,euclideanModulo:$d,mapLinear:DS,inverseLerp:US,lerp:el,damp:LS,pingpong:NS,smoothstep:OS,smootherstep:PS,randInt:zS,randFloat:IS,randFloatSpread:BS,seededRandom:FS,degToRad:HS,radToDeg:GS,isPowerOfTwo:VS,ceilPowerOfTwo:kS,floorPowerOfTwo:XS,setQuaternionFromProperEuler:WS,normalize:Bn,denormalize:Ar};class Ee{constructor(t=0,n=0){Ee.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kr{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,f,h){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3];const v=c[f+0],x=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=v,t[n+1]=x,t[n+2]=E,t[n+3]=T;return}if(_!==T||m!==v||p!==x||g!==E){let S=1-h;const y=m*v+p*x+g*E+_*T,U=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const P=Math.sqrt(L),z=Math.atan2(P,y*U);S=Math.sin(S*z)/P,h=Math.sin(h*z)/P}const R=h*U;if(m=m*S+v*R,p=p*S+x*R,g=g*S+E*R,_=_*S+T*R,S===1-h){const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=c[f],v=c[f+1],x=c[f+2],E=c[f+3];return t[n]=h*E+g*_+m*x-p*v,t[n+1]=m*E+g*v+p*_-h*x,t[n+2]=p*E+g*x+h*v-m*_,t[n+3]=g*E-h*_-m*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(l/2),_=h(c/2),v=m(a/2),x=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"YZX":this._x=v*g*_+p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_-v*x*E;break;case"XZY":this._x=v*g*_-p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(f-l)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-p)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(f-l)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-a*p,this._z=c*g+f*p+a*m-l*h,this._w=f*g-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const x=1-n;return this._w=x*f+n*this._w,this._x=x*a+n*this._x,this._y=x*l+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,n=0,a=0){W.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(K0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(K0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*a),g=2*(h*n-c*l),_=2*(c*a-f*n);return this.x=n+m*p+f*_-h*g,this.y=a+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new W,K0=new kr;class fe{constructor(t,n,a,l,c,f,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,h,m,p)}set(t,n,a,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],E=a[8],T=l[0],S=l[3],y=l[6],U=l[1],L=l[4],R=l[7],P=l[2],z=l[5],H=l[8];return c[0]=f*T+h*U+m*P,c[3]=f*S+h*L+m*z,c[6]=f*y+h*R+m*H,c[1]=p*T+g*U+_*P,c[4]=p*S+g*L+_*z,c[7]=p*y+g*R+_*H,c[2]=v*T+x*U+E*P,c[5]=v*S+x*L+E*z,c[8]=v*y+x*R+E*H,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-a*c*g+a*h*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,v=h*m-g*c,x=p*c-f*m,E=n*_+a*v+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*a)*T,t[2]=(h*a-l*f)*T,t[3]=v*T,t[4]=(g*n-l*m)*T,t[5]=(l*c-h*n)*T,t[6]=x*T,t[7]=(a*m-p*n)*T,t[8]=(f*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(xh.makeScale(t,n)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,n){return this.premultiply(xh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new fe;function fv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qS(){const r=eu("canvas");return r.style.display="block",r}const Q0={};function rl(r){r in Q0||(Q0[r]=!0,console.warn(r))}function YS(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const J0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Fe&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Ir]:{primaries:t,whitePoint:a,transfer:$c,toXYZ:J0,fromXYZ:$0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:a,transfer:Fe,toXYZ:J0,fromXYZ:$0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const we=jS();function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fr;class ZS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{fr===void 0&&(fr=eu("canvas")),fr.width=t.width,fr.height=t.height;const l=fr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=fr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=eu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ca(n[a]/255)*255):n[a]=ca(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KS=0;class tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(yh(l[f].image)):c.push(yh(l[f]))}else c=yh(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ZS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QS=0;const Sh=new W;class Gn extends Gr{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,a=Ms,l=Ms,c=zi,f=Es,h=bi,m=Hi,p=Gn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Vr(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ev)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=ev;Gn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,n=0,a=0,l=1){Ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],x=m[5],E=m[9],T=m[2],S=m[6],y=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,R=(x+1)/2,P=(y+1)/2,z=(g+v)/4,H=(_+T)/4,k=(E+S)/4;return L>R&&L>P?L<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(L),l=z/a,c=H/a):R>P?R<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),a=z/l,c=k/l):P<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),a=H/c,l=k/c),this.set(a,l,c,n),this}let U=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(_-T)/U,this.z=(v-g)/U,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this.w=xe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this.w=xe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends Gr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n);const l={width:t,height:n,depth:a.depth},c=new Gn(l);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends JS{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class hv extends Gn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends Gn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),yc.copy(a.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Sc.subVectors(this.max,Wo),hr.subVectors(t.a,Wo),dr.subVectors(t.b,Wo),pr.subVectors(t.c,Wo),Oa.subVectors(dr,hr),Pa.subVectors(pr,dr),fs.subVectors(hr,pr);let n=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-fs.z,fs.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,fs.z,0,-fs.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-fs.y,fs.x,0];return!Mh(n,hr,dr,pr,Sc)||(n=[1,0,0,0,1,0,0,0,1],!Mh(n,hr,dr,pr,Sc))?!1:(Mc.crossVectors(Oa,Pa),n=[Mc.x,Mc.y,Mc.z],Mh(n,hr,dr,pr,Sc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,yc=new ws,hr=new W,dr=new W,pr=new W,Oa=new W,Pa=new W,fs=new W,Wo=new W,Sc=new W,Mc=new W,hs=new W;function Mh(r,t,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){hs.fromArray(r,c);const h=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=n.dot(hs),g=a.dot(hs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const tM=new ws,qo=new W,Eh=new W;class Xr{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):tM.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const n=qo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(qo,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Eh)),this.expandByPoint(qo.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new W,Th=new W,Ec=new W,za=new W,bh=new W,Tc=new W,Ah=new W;class dv{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=aa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,n),aa.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){Th.copy(t).add(n).multiplyScalar(.5),Ec.copy(n).sub(t).normalize(),za.copy(this.origin).sub(Th);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Ec),h=za.dot(this.direction),m=-za.dot(Ec),p=za.lengthSq(),g=Math.abs(1-f*f);let _,v,x,E;if(g>0)if(_=f*m-h,v=f*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,x=_*(_+f*v+2*h)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+h)),x=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+h)),x=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+p):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),x=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Th).addScaledVector(Ec,v),x}intersectSphere(t,n){aa.subVectors(t.center,this.origin);const a=aa.dot(this.direction),l=aa.dot(aa)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,n,a,l,c){bh.subVectors(n,t),Tc.subVectors(a,t),Ah.crossVectors(bh,Tc);let f=this.direction.dot(Ah),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;za.subVectors(this.origin,t);const m=h*this.direction.dot(Tc.crossVectors(za,Tc));if(m<0)return null;const p=h*this.direction.dot(bh.cross(za));if(p<0||m+p>f)return null;const g=-h*za.dot(Ah);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,n,a,l,c,f,h,m,p,g,_,v,x,E,T,S){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,h,m,p,g,_,v,x,E,T,S)}set(t,n,a,l,c,f,h,m,p,g,_,v,x,E,T,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=E,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,l=1/mr.setFromMatrixColumn(t,0).length(),c=1/mr.setFromMatrixColumn(t,1).length(),f=1/mr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,x=f*_,E=h*g,T=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=x+E*p,n[5]=v-T*p,n[9]=-h*m,n[2]=T-v*p,n[6]=E+x*p,n[10]=f*m}else if(t.order==="YXZ"){const v=m*g,x=m*_,E=p*g,T=p*_;n[0]=v+T*h,n[4]=E*h-x,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=x*h-E,n[6]=T+v*h,n[10]=f*m}else if(t.order==="ZXY"){const v=m*g,x=m*_,E=p*g,T=p*_;n[0]=v-T*h,n[4]=-f*_,n[8]=E+x*h,n[1]=x+E*h,n[5]=f*g,n[9]=T-v*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const v=f*g,x=f*_,E=h*g,T=h*_;n[0]=m*g,n[4]=E*p-x,n[8]=v*p+T,n[1]=m*_,n[5]=T*p+v,n[9]=x*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const v=f*m,x=f*p,E=h*m,T=h*p;n[0]=m*g,n[4]=T-v*_,n[8]=E*_+x,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*_+E,n[10]=v-T*_}else if(t.order==="XZY"){const v=f*m,x=f*p,E=h*m,T=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+T,n[5]=f*g,n[9]=x*_-E,n[2]=E*_-x,n[6]=h*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eM,t,nM)}lookAt(t,n,a){const l=this.elements;return ni.subVectors(t,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ia.crossVectors(a,ni),Ia.lengthSq()===0&&(Math.abs(a.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ia.crossVectors(a,ni)),Ia.normalize(),bc.crossVectors(ni,Ia),l[0]=Ia.x,l[4]=bc.x,l[8]=ni.x,l[1]=Ia.y,l[5]=bc.y,l[9]=ni.y,l[2]=Ia.z,l[6]=bc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],E=a[2],T=a[6],S=a[10],y=a[14],U=a[3],L=a[7],R=a[11],P=a[15],z=l[0],H=l[4],k=l[8],D=l[12],C=l[1],G=l[5],Z=l[9],lt=l[13],ut=l[2],ft=l[6],I=l[10],et=l[14],j=l[3],yt=l[7],N=l[11],$=l[15];return c[0]=f*z+h*C+m*ut+p*j,c[4]=f*H+h*G+m*ft+p*yt,c[8]=f*k+h*Z+m*I+p*N,c[12]=f*D+h*lt+m*et+p*$,c[1]=g*z+_*C+v*ut+x*j,c[5]=g*H+_*G+v*ft+x*yt,c[9]=g*k+_*Z+v*I+x*N,c[13]=g*D+_*lt+v*et+x*$,c[2]=E*z+T*C+S*ut+y*j,c[6]=E*H+T*G+S*ft+y*yt,c[10]=E*k+T*Z+S*I+y*N,c[14]=E*D+T*lt+S*et+y*$,c[3]=U*z+L*C+R*ut+P*j,c[7]=U*H+L*G+R*ft+P*yt,c[11]=U*k+L*Z+R*I+P*N,c[15]=U*D+L*lt+R*et+P*$,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],E=t[3],T=t[7],S=t[11],y=t[15];return E*(+c*m*_-l*p*_-c*h*v+a*p*v+l*h*x-a*m*x)+T*(+n*m*x-n*p*v+c*f*v-l*f*x+l*p*g-c*m*g)+S*(+n*p*_-n*h*x-c*f*_+a*f*x+c*h*g-a*p*g)+y*(-l*h*g-n*m*_+n*h*v+l*f*_-a*f*v+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],E=t[12],T=t[13],S=t[14],y=t[15],U=_*S*p-T*v*p+T*m*x-h*S*x-_*m*y+h*v*y,L=E*v*p-g*S*p-E*m*x+f*S*x+g*m*y-f*v*y,R=g*T*p-E*_*p+E*h*x-f*T*x-g*h*y+f*_*y,P=E*_*m-g*T*m-E*h*v+f*T*v+g*h*S-f*_*S,z=n*U+a*L+l*R+c*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/z;return t[0]=U*H,t[1]=(T*v*c-_*S*c-T*l*x+a*S*x+_*l*y-a*v*y)*H,t[2]=(h*S*c-T*m*c+T*l*p-a*S*p-h*l*y+a*m*y)*H,t[3]=(_*m*c-h*v*c-_*l*p+a*v*p+h*l*x-a*m*x)*H,t[4]=L*H,t[5]=(g*S*c-E*v*c+E*l*x-n*S*x-g*l*y+n*v*y)*H,t[6]=(E*m*c-f*S*c-E*l*p+n*S*p+f*l*y-n*m*y)*H,t[7]=(f*v*c-g*m*c+g*l*p-n*v*p-f*l*x+n*m*x)*H,t[8]=R*H,t[9]=(E*_*c-g*T*c-E*a*x+n*T*x+g*a*y-n*_*y)*H,t[10]=(f*T*c-E*h*c+E*a*p-n*T*p-f*a*y+n*h*y)*H,t[11]=(g*h*c-f*_*c-g*a*p+n*_*p+f*a*x-n*h*x)*H,t[12]=P*H,t[13]=(g*T*l-E*_*l+E*a*v-n*T*v-g*a*S+n*_*S)*H,t[14]=(E*h*l-f*T*l-E*a*m+n*T*m+f*a*S-n*h*S)*H,t[15]=(f*_*l-g*h*l+g*a*m-n*_*m-f*a*v+n*h*v)*H,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+a,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,_=h+h,v=c*p,x=c*g,E=c*_,T=f*g,S=f*_,y=h*_,U=m*p,L=m*g,R=m*_,P=a.x,z=a.y,H=a.z;return l[0]=(1-(T+y))*P,l[1]=(x+R)*P,l[2]=(E-L)*P,l[3]=0,l[4]=(x-R)*z,l[5]=(1-(v+y))*z,l[6]=(S+U)*z,l[7]=0,l[8]=(E+L)*H,l[9]=(S-U)*H,l[10]=(1-(v+T))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;let c=mr.set(l[0],l[1],l[2]).length();const f=mr.set(l[4],l[5],l[6]).length(),h=mr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/c,g=1/f,_=1/h;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,n.setFromRotationMatrix(Mi),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,l,c,f,h=Bi,m=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(a-l),v=(n+t)/(n-t),x=(a+l)/(a-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Bi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===tu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,f,h=Bi,m=!1){const p=this.elements,g=2/(n-t),_=2/(a-l),v=-(n+t)/(n-t),x=-(a+l)/(a-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Bi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===tu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const mr=new W,Mi=new Xe,eM=new W(0,0,0),nM=new W(1,1,1),Ia=new W,bc=new W,ni=new W,t_=new Xe,e_=new kr;class Gi{constructor(t=0,n=0,a=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],x=l[10];switch(n){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return t_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(t_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return e_.setFromEuler(this),this.setFromQuaternion(e_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iM=0;const n_=new W,gr=new kr,sa=new Xe,Ac=new W,Yo=new W,aM=new W,sM=new kr,i_=new W(1,0,0),a_=new W(0,1,0),s_=new W(0,0,1),r_={type:"added"},rM={type:"removed"},_r={type:"childadded",child:null},Rh={type:"childremoved",child:null};class rn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new W,n=new Gi,a=new kr,l=new W(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new fe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(i_,t)}rotateY(t){return this.rotateOnAxis(a_,t)}rotateZ(t){return this.rotateOnAxis(s_,t)}translateOnAxis(t,n){return n_.copy(t).applyQuaternion(this.quaternion),this.position.add(n_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(i_,t)}translateY(t){return this.translateOnAxis(a_,t)}translateZ(t){return this.translateOnAxis(s_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Ac.copy(t):Ac.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Yo,Ac,this.up):sa.lookAt(Ac,Yo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),gr.setFromRotationMatrix(sa),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(r_),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rM),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(r_),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,aM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,sM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),x=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new W,ra=new W,wh=new W,oa=new W,vr=new W,xr=new W,o_=new W,Ch=new W,Dh=new W,Uh=new W,Lh=new Ge,Nh=new Ge,Oh=new Ge;class Ti{constructor(t=new W,n=new W,a=new W){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Ei.subVectors(t,n),l.cross(Ei);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Ei.subVectors(l,n),ra.subVectors(a,n),wh.subVectors(t,n);const f=Ei.dot(Ei),h=Ei.dot(ra),m=Ei.dot(wh),p=ra.dot(ra),g=ra.dot(wh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(p*m-h*g)*v,E=(f*g-h*m)*v;return c.set(1-x-E,E,x)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,n,a,l,c,f,h,m){return this.getBarycoord(t,n,a,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(t,n,a,l,c,f){return Lh.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Lh.fromBufferAttribute(t,n),Nh.fromBufferAttribute(t,a),Oh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Lh,c.x),f.addScaledVector(Nh,c.y),f.addScaledVector(Oh,c.z),f}static isFrontFacing(t,n,a,l){return Ei.subVectors(a,n),ra.subVectors(t,n),Ei.cross(ra).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Ei.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ti.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Ti.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let f,h;vr.subVectors(l,a),xr.subVectors(c,a),Ch.subVectors(t,a);const m=vr.dot(Ch),p=xr.dot(Ch);if(m<=0&&p<=0)return n.copy(a);Dh.subVectors(t,l);const g=vr.dot(Dh),_=xr.dot(Dh);if(g>=0&&_<=g)return n.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(vr,f);Uh.subVectors(t,c);const x=vr.dot(Uh),E=xr.dot(Uh);if(E>=0&&x<=E)return n.copy(c);const T=x*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(xr,h);const S=g*E-x*_;if(S<=0&&_-g>=0&&x-E>=0)return o_.subVectors(c,l),h=(_-g)/(_-g+(x-E)),n.copy(l).addScaledVector(o_,h);const y=1/(S+T+v);return f=T*y,h=v*y,n.copy(a).addScaledVector(vr,f).addScaledVector(xr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Ph(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class _e{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=we.workingColorSpace){if(t=$d(t,1),n=xe(n,0,1),a=xe(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Ph(f,c,t+1/3),this.g=Ph(f,c,t),this.b=Ph(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,n=si){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=si){const a=mv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return we.workingToColorSpace(On.copy(this),t),Math.round(xe(On.r*255,0,255))*65536+Math.round(xe(On.g*255,0,255))*256+Math.round(xe(On.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(On.copy(this),n);const a=On.r,l=On.g,c=On.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case a:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-a)/_+2;break;case c:m=(a-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=si){we.workingToColorSpace(On.copy(this),t);const n=On.r,a=On.g,l=On.b;return t!==si?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+n,Ba.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ba),t.getHSL(Rc);const a=el(Ba.h,Rc.h,n),l=el(Ba.s,Rc.s,n),c=el(Ba.l,Rc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new _e;_e.NAMES=mv;let oM=0;class Wr extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Cr,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(a.blending=this.blending),this.side!==qa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==td&&(a.blendSrc=this.blendSrc),this.blendDst!==ed&&(a.blendDst=this.blendDst),this.blendEquation!==ys&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ha extends Wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new W,wc=new Ee;let lM=0;class oi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Y0,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)wc.fromBufferAttribute(this,n),wc.applyMatrix3(t),this.setXY(n,wc.x,wc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ar(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Bn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ar(n,this.array)),n}setX(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ar(n,this.array)),n}setY(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ar(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ar(n,this.array)),n}setW(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Bn(n,this.array),a=Bn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Bn(n,this.array),a=Bn(a,this.array),l=Bn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=Bn(n,this.array),a=Bn(a,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Y0&&(t.usage=this.usage),t}}class gv extends oi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class _v extends oi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class He extends oi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let cM=0;const mi=new Xe,zh=new rn,yr=new W,ii=new ws,jo=new ws,Mn=new W;class Tn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?_v:gv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new fe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,a){return mi.makeTranslation(t,n,a),this.applyMatrix4(mi),this}scale(t,n,a){return mi.makeScale(t,n,a),this.applyMatrix4(mi),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new He(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const a=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ii.min,jo.min),ii.expandByPoint(Mn),Mn.addVectors(ii.max,jo.max),ii.expandByPoint(Mn)):(ii.expandByPoint(jo.min),ii.expandByPoint(jo.max))}ii.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(Mn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),m&&(yr.fromBufferAttribute(t,p),Mn.add(yr)),l=Math.max(l,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<a.count;k++)h[k]=new W,m[k]=new W;const p=new W,g=new W,_=new W,v=new Ee,x=new Ee,E=new Ee,T=new W,S=new W;function y(k,D,C){p.fromBufferAttribute(a,k),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,C),v.fromBufferAttribute(c,k),x.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(p),_.sub(p),x.sub(v),E.sub(v);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(G),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(G),h[k].add(T),h[D].add(T),h[C].add(T),m[k].add(S),m[D].add(S),m[C].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let k=0,D=U.length;k<D;++k){const C=U[k],G=C.start,Z=C.count;for(let lt=G,ut=G+Z;lt<ut;lt+=3)y(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const L=new W,R=new W,P=new W,z=new W;function H(k){P.fromBufferAttribute(l,k),z.copy(P);const D=h[k];L.copy(D),L.sub(P.multiplyScalar(P.dot(D))).normalize(),R.crossVectors(z,D);const G=R.dot(m[k])<0?-1:1;f.setXYZW(k,L.x,L.y,L.z,G)}for(let k=0,D=U.length;k<D;++k){const C=U[k],G=C.start,Z=C.count;for(let lt=G,ut=G+Z;lt<ut;lt+=3)H(t.getX(lt+0)),H(t.getX(lt+1)),H(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const l=new W,c=new W,f=new W,h=new W,m=new W,p=new W,g=new W,_=new W;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),T=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,S),h.add(g),m.add(g),p.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Mn.fromBufferAttribute(t,n),Mn.normalize(),t.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let x=0,E=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?x=m[T]*h.data.stride+h.offset:x=m[T]*g;for(let y=0;y<g;y++)v[E++]=p[x++]}return new oi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=t(v,a);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l_=new Xe,ds=new dv,Cc=new Xr,c_=new W,Dc=new W,Uc=new W,Lc=new W,Ih=new W,Nc=new W,u_=new W,Oc=new W;class De extends rn{constructor(t=new Tn,n=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Ih.fromBufferAttribute(_,t),f?Nc.addScaledVector(Ih,g):Nc.addScaledVector(Ih.sub(n),g))}n.add(Nc)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Cc.copy(a.boundingSphere),Cc.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(Cc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Cc,c_)===null||ds.origin.distanceToSquared(c_)>(t.far-t.near)**2))&&(l_.copy(c).invert(),ds.copy(t.ray).applyMatrix4(l_),!(a.boundingBox!==null&&ds.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ds)))}_computeIntersections(t,n,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=f[S.materialIndex],U=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let R=U,P=L;R<P;R+=3){const z=h.getX(R),H=h.getX(R+1),k=h.getX(R+2);l=Pc(this,y,t,a,p,g,_,z,H,k),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const U=h.getX(S),L=h.getX(S+1),R=h.getX(S+2);l=Pc(this,f,t,a,p,g,_,U,L,R),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=f[S.materialIndex],U=Math.max(S.start,x.start),L=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let R=U,P=L;R<P;R+=3){const z=R,H=R+1,k=R+2;l=Pc(this,y,t,a,p,g,_,z,H,k),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(m.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const U=S,L=S+1,R=S+2;l=Pc(this,f,t,a,p,g,_,U,L,R),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function uM(r,t,n,a,l,c,f,h){let m;if(t.side===jn?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,t.side===qa,h),m===null)return null;Oc.copy(h),Oc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Oc);return p<n.near||p>n.far?null:{distance:p,point:Oc.clone(),object:r}}function Pc(r,t,n,a,l,c,f,h,m,p){r.getVertexPosition(h,Dc),r.getVertexPosition(m,Uc),r.getVertexPosition(p,Lc);const g=uM(r,t,n,a,Dc,Uc,Lc,u_);if(g){const _=new W;Ti.getBarycoord(u_,Dc,Uc,Lc,_),l&&(g.uv=Ti.getInterpolatedAttribute(l,h,m,p,_,new Ee)),c&&(g.uv1=Ti.getInterpolatedAttribute(c,h,m,p,_,new Ee)),f&&(g.normal=Ti.getInterpolatedAttribute(f,h,m,p,_,new W),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new W,materialIndex:0};Ti.getNormal(Dc,Uc,Lc,v.normal),g.face=v,g.barycoord=_}return g}class qr extends Tn{constructor(t=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,a,n,t,f,c,0),E("z","y","x",1,-1,a,n,-t,f,c,1),E("x","z","y",1,1,t,a,n,l,f,2),E("x","z","y",1,-1,t,a,-n,l,f,3),E("x","y","z",1,-1,t,n,a,l,c,4),E("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(g,3)),this.setAttribute("uv",new He(_,2));function E(T,S,y,U,L,R,P,z,H,k,D){const C=R/H,G=P/k,Z=R/2,lt=P/2,ut=z/2,ft=H+1,I=k+1;let et=0,j=0;const yt=new W;for(let N=0;N<I;N++){const $=N*G-lt;for(let xt=0;xt<ft;xt++){const St=xt*C-Z;yt[T]=St*U,yt[S]=$*L,yt[y]=ut,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[S]=0,yt[y]=z>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(xt/H),_.push(1-N/k),et+=1}}for(let N=0;N<k;N++)for(let $=0;$<H;$++){const xt=v+$+ft*N,St=v+$+ft*(N+1),Ut=v+($+1)+ft*(N+1),Ht=v+($+1)+ft*N;m.push(xt,St,Ht),m.push(St,Ut,Ht),j+=6}h.addGroup(x,j,D),x+=j,v+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function Fn(r){const t={};for(let n=0;n<r.length;n++){const a=Fr(r[n]);for(const l in a)t[l]=a[l]}return t}function fM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function vv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const hM={clone:Fr,merge:Fn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=fM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class xv extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new W,f_=new Ee,h_=new Ee;class Yn extends xv{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,n){return this.getViewBounds(t,f_,h_),n.subVectors(h_,f_)}setViewOffset(t,n,a,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(tl*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Sr=-90,Mr=1;class mM extends rn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(Sr,Mr,t,n);l.layers=this.layers,this.add(l);const c=new Yn(Sr,Mr,t,n);c.layers=this.layers,this.add(c);const f=new Yn(Sr,Mr,t,n);f.layers=this.layers,this.add(f);const h=new Yn(Sr,Mr,t,n);h.layers=this.layers,this.add(h);const m=new Yn(Sr,Mr,t,n);m.layers=this.layers,this.add(m);const p=new Yn(Sr,Mr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,c),t.setRenderTarget(a,1,l),t.render(n,f),t.setRenderTarget(a,2,l),t.render(n,h),t.setRenderTarget(a,3,l),t.render(n,m),t.setRenderTarget(a,4,l),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,l),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class yv extends Gn{constructor(t=[],n=Pr,a,l,c,f,h,m,p,g){super(t,n,a,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gM extends As{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new yv(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qr(5,5,5),c=new Ai({name:"CubemapFromEquirect",uniforms:Fr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:ka});c.uniforms.tEquirect.value=n;const f=new De(l,c),h=n.minFilter;return n.minFilter===Es&&(n.minFilter=zi),new mM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,l);t.setRenderTarget(c)}}class En extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const S=n.getJointPose(T,a),y=this._getHandJoint(p,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&v>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new En;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class su{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(t),this.density=n}clone(){return new su(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vM extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class xM extends Gn{constructor(t=null,n=1,a=1,l,c,f,h,m,p=ri,g=ri,_,v){super(null,f,h,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class d_ extends oi{constructor(t,n,a,l=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Er=new Xe,p_=new Xe,zc=[],m_=new ws,yM=new Xe,Zo=new De,Ko=new Xr;class g_ extends De{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new d_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<a;l++)this.setMatrixAt(l,yM)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Er),m_.copy(t.boundingBox).applyMatrix4(Er),this.boundingBox.union(m_)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Er),Ko.copy(t.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(Ko)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,l=this.morphTexture.source.data.data,c=a.length+1,f=t*c+1;for(let h=0;h<a.length;h++)a[h]=l[f+h]}raycast(t,n){const a=this.matrixWorld,l=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(a),t.ray.intersectsSphere(Ko)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Er),p_.multiplyMatrices(a,Er),Zo.matrixWorld=p_,Zo.raycast(t,zc);for(let f=0,h=zc.length;f<h;f++){const m=zc[f];m.instanceId=c,m.object=this,n.push(m)}zc.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new d_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,l=a.length+1;this.morphTexture===null&&(this.morphTexture=new xM(new Float32Array(l*this.count),l,this.count,Zd,Ii));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<a.length;p++)f+=a[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(a,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fh=new W,SM=new W,MM=new fe;class vs{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=Fh.subVectors(a,n).cross(SM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Fh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||MM.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Xr,EM=new Ee(.5,.5),Ic=new W;class ep{constructor(t=new vs,n=new vs,a=new vs,l=new vs,c=new vs,f=new vs){this.planes=[t,n,a,l,c,f]}set(t,n,a,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Bi,a=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],x=c[7],E=c[8],T=c[9],S=c[10],y=c[11],U=c[12],L=c[13],R=c[14],P=c[15];if(l[0].setComponents(p-f,x-g,y-E,P-U).normalize(),l[1].setComponents(p+f,x+g,y+E,P+U).normalize(),l[2].setComponents(p+h,x+_,y+T,P+L).normalize(),l[3].setComponents(p-h,x-_,y-T,P-L).normalize(),a)l[4].setComponents(m,v,S,R).normalize(),l[5].setComponents(p-m,x-v,y-S,P-R).normalize();else if(l[4].setComponents(p-m,x-v,y-S,P-R).normalize(),n===Bi)l[5].setComponents(p+m,x+v,y+S,P+R).normalize();else if(n===tu)l[5].setComponents(m,v,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const n=EM.distanceTo(t.center);return ps.radius=.7071067811865476+n,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Ic.x=l.normal.x>0?t.max.x:t.min.x,Ic.y=l.normal.y>0?t.max.y:t.min.y,Ic.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class TM extends Wr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const __=new Xe,Gd=new dv,Bc=new Xr,Fc=new W;class bM extends rn{constructor(t=new Tn,n=new TM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;__.copy(l).invert(),Gd.copy(t.ray).applyMatrix4(__);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,f.start),x=Math.min(p.count,f.start+f.count);for(let E=v,T=x;E<T;E++){const S=p.getX(E);Fc.fromBufferAttribute(_,S),v_(Fc,S,m,l,t,n,this)}}else{const v=Math.max(0,f.start),x=Math.min(_.count,f.start+f.count);for(let E=v,T=x;E<T;E++)Fc.fromBufferAttribute(_,E),v_(Fc,E,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function v_(r,t,n,a,l,c,f){const h=Gd.distanceSqToPoint(r);if(h<n){const m=new W;Gd.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Sv extends Gn{constructor(t,n,a=bs,l,c,f,h=ri,m=ri,p,g=al,_=1){if(g!==al&&g!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,l,c,f,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Mv extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wa extends Tn{constructor(t=1,n=1,a=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],x=[];let E=0;const T=[],S=a/2;let y=0;U(),f===!1&&(t>0&&L(!0),n>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new He(_,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(x,2));function U(){const R=new W,P=new W;let z=0;const H=(n-t)/a;for(let k=0;k<=c;k++){const D=[],C=k/c,G=C*(n-t)+t;for(let Z=0;Z<=l;Z++){const lt=Z/l,ut=lt*m+h,ft=Math.sin(ut),I=Math.cos(ut);P.x=G*ft,P.y=-C*a+S,P.z=G*I,_.push(P.x,P.y,P.z),R.set(ft,H,I).normalize(),v.push(R.x,R.y,R.z),x.push(lt,1-C),D.push(E++)}T.push(D)}for(let k=0;k<l;k++)for(let D=0;D<c;D++){const C=T[D][k],G=T[D+1][k],Z=T[D+1][k+1],lt=T[D][k+1];(t>0||D!==0)&&(g.push(C,G,lt),z+=3),(n>0||D!==c-1)&&(g.push(G,Z,lt),z+=3)}p.addGroup(y,z,0),y+=z}function L(R){const P=E,z=new Ee,H=new W;let k=0;const D=R===!0?t:n,C=R===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,S*C,0),v.push(0,C,0),x.push(.5,.5),E++;const G=E;for(let Z=0;Z<=l;Z++){const ut=Z/l*m+h,ft=Math.cos(ut),I=Math.sin(ut);H.x=D*I,H.y=S*C,H.z=D*ft,_.push(H.x,H.y,H.z),v.push(0,C,0),z.x=ft*.5+.5,z.y=I*.5*C+.5,x.push(z.x,z.y),E++}for(let Z=0;Z<l;Z++){const lt=P+Z,ut=G+Z;R===!0?g.push(ut,ut+1,lt):g.push(ut+1,ut,lt),k+=3}p.addGroup(y,k,R===!0?1:2),y+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class np extends Wa{constructor(t=1,n=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,n,a,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new np(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ip extends Tn{constructor(t=[],n=[],a=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:l};const c=[],f=[];h(l),p(a),g(),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(c.slice(),3)),this.setAttribute("uv",new He(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const L=new W,R=new W,P=new W;for(let z=0;z<n.length;z+=3)x(n[z+0],L),x(n[z+1],R),x(n[z+2],P),m(L,R,P,U)}function m(U,L,R,P){const z=P+1,H=[];for(let k=0;k<=z;k++){H[k]=[];const D=U.clone().lerp(R,k/z),C=L.clone().lerp(R,k/z),G=z-k;for(let Z=0;Z<=G;Z++)Z===0&&k===z?H[k][Z]=D:H[k][Z]=D.clone().lerp(C,Z/G)}for(let k=0;k<z;k++)for(let D=0;D<2*(z-k)-1;D++){const C=Math.floor(D/2);D%2===0?(v(H[k][C+1]),v(H[k+1][C]),v(H[k][C])):(v(H[k][C+1]),v(H[k+1][C+1]),v(H[k+1][C]))}}function p(U){const L=new W;for(let R=0;R<c.length;R+=3)L.x=c[R+0],L.y=c[R+1],L.z=c[R+2],L.normalize().multiplyScalar(U),c[R+0]=L.x,c[R+1]=L.y,c[R+2]=L.z}function g(){const U=new W;for(let L=0;L<c.length;L+=3){U.x=c[L+0],U.y=c[L+1],U.z=c[L+2];const R=S(U)/2/Math.PI+.5,P=y(U)/Math.PI+.5;f.push(R,1-P)}E(),_()}function _(){for(let U=0;U<f.length;U+=6){const L=f[U+0],R=f[U+2],P=f[U+4],z=Math.max(L,R,P),H=Math.min(L,R,P);z>.9&&H<.1&&(L<.2&&(f[U+0]+=1),R<.2&&(f[U+2]+=1),P<.2&&(f[U+4]+=1))}}function v(U){c.push(U.x,U.y,U.z)}function x(U,L){const R=U*3;L.x=t[R+0],L.y=t[R+1],L.z=t[R+2]}function E(){const U=new W,L=new W,R=new W,P=new W,z=new Ee,H=new Ee,k=new Ee;for(let D=0,C=0;D<c.length;D+=9,C+=6){U.set(c[D+0],c[D+1],c[D+2]),L.set(c[D+3],c[D+4],c[D+5]),R.set(c[D+6],c[D+7],c[D+8]),z.set(f[C+0],f[C+1]),H.set(f[C+2],f[C+3]),k.set(f[C+4],f[C+5]),P.copy(U).add(L).add(R).divideScalar(3);const G=S(P);T(z,C+0,U,G),T(H,C+2,L,G),T(k,C+4,R,G)}}function T(U,L,R,P){P<0&&U.x===1&&(f[L]=U.x-1),R.x===0&&R.z===0&&(f[L]=P/2/Math.PI+.5)}function S(U){return Math.atan2(U.z,-U.x)}function y(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.vertices,t.indices,t.radius,t.details)}}class AM{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(l),n.push(c),l=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let l=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=a[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,a[l]===f)return l/(c-1);const g=a[l],v=a[l+1]-g,x=(f-g)/v;return(l+x)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=n||(f.isVector2?new Ee:new W);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new W,l=[],c=[],f=[],h=new W,m=new Xe;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new W)}c[0]=new W,f[0]=new W;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),v<=p&&a.set(0,0,1),h.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(xe(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}f[x].crossVectors(l[x],c[x])}if(n===!0){let x=Math.acos(xe(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ap(){let r=0,t=0,n=0,a=0;function l(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,a=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,_){let v=(f-c)/p-(h-c)/(p+g)+(h-f)/g,x=(h-f)/g-(m-f)/(g+_)+(m-h)/_;v*=g,x*=g,l(f,h,v,x)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const Hc=new W,Hh=new ap,Gh=new ap,Vh=new ap;class RM extends AM{constructor(t=[],n=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=l}getPoint(t,n=new W){const a=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=l[(h-1)%c]:(Hc.subVectors(l[0],l[1]).add(l[0]),p=Hc);const _=l[h%c],v=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Hc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),x),T=Math.pow(_.distanceToSquared(v),x),S=Math.pow(v.distanceToSquared(g),x);T<1e-4&&(T=1),E<1e-4&&(E=T),S<1e-4&&(S=T),Hh.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,E,T,S),Gh.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,E,T,S),Vh.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,E,T,S)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),Gh.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Vh.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return a.set(Hh.calc(m),Gh.calc(m),Vh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ur extends ip{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,l=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Ur(t.radius,t.detail)}}class Rs extends Tn{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(a),m=Math.floor(l),p=h+1,g=m+1,_=t/h,v=n/m,x=[],E=[],T=[],S=[];for(let y=0;y<g;y++){const U=y*v-f;for(let L=0;L<p;L++){const R=L*_-c;E.push(R,-U,0),T.push(0,0,1),S.push(L/h),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let U=0;U<h;U++){const L=U+p*y,R=U+p*(y+1),P=U+1+p*(y+1),z=U+1+p*y;x.push(L,R,z),x.push(R,P,z)}this.setIndex(x),this.setAttribute("position",new He(E,3)),this.setAttribute("normal",new He(T,3)),this.setAttribute("uv",new He(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.width,t.height,t.widthSegments,t.heightSegments)}}class ol extends Tn{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new W,v=new W,x=[],E=[],T=[],S=[];for(let y=0;y<=a;y++){const U=[],L=y/a;let R=0;y===0&&f===0?R=.5/n:y===a&&m===Math.PI&&(R=-.5/n);for(let P=0;P<=n;P++){const z=P/n;_.x=-t*Math.cos(l+z*c)*Math.sin(f+L*h),_.y=t*Math.cos(f+L*h),_.z=t*Math.sin(l+z*c)*Math.sin(f+L*h),E.push(_.x,_.y,_.z),v.copy(_).normalize(),T.push(v.x,v.y,v.z),S.push(z+R,1-L),U.push(p++)}g.push(U)}for(let y=0;y<a;y++)for(let U=0;U<n;U++){const L=g[y][U+1],R=g[y][U],P=g[y+1][U],z=g[y+1][U+1];(y!==0||f>0)&&x.push(L,R,z),(y!==a-1||m<Math.PI)&&x.push(R,P,z)}this.setIndex(x),this.setAttribute("position",new He(E,3)),this.setAttribute("normal",new He(T,3)),this.setAttribute("uv",new He(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ru extends Tn{constructor(t=1,n=.4,a=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:l,arc:c},a=Math.floor(a),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new W,_=new W,v=new W;for(let x=0;x<=a;x++)for(let E=0;E<=l;E++){const T=E/l*c,S=x/a*Math.PI*2;_.x=(t+n*Math.cos(S))*Math.cos(T),_.y=(t+n*Math.cos(S))*Math.sin(T),_.z=n*Math.sin(S),h.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),v.subVectors(_,g).normalize(),m.push(v.x,v.y,v.z),p.push(E/l),p.push(x/a)}for(let x=1;x<=a;x++)for(let E=1;E<=l;E++){const T=(l+1)*x+E-1,S=(l+1)*(x-1)+E-1,y=(l+1)*(x-1)+E,U=(l+1)*x+E;f.push(T,S,U),f.push(S,y,U)}this.setIndex(f),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(m,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jo extends Wr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cv,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wM extends Wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CM extends Wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ou extends rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Ev extends ou{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const kh=new Xe,x_=new W,y_=new W;class sp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;x_.setFromMatrixPosition(t.matrixWorld),n.position.copy(x_),y_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(y_),n.updateMatrixWorld(),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class DM extends sp{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=Br*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class S_ extends ou{constructor(t,n,a=0,l=Math.PI/3,c=0,f=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=a,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new DM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const M_=new Xe,Qo=new W,Xh=new W;class UM extends sp{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,l=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),Qo.setFromMatrixPosition(t.matrixWorld),a.position.copy(Qo),Xh.copy(a.position),Xh.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Xh),a.updateMatrixWorld(),l.makeTranslation(-Qo.x,-Qo.y,-Qo.z),M_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(M_,a.coordinateSystem,a.reversedDepth)}}class Wh extends ou{constructor(t,n,a=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new UM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Tv extends xv{constructor(t=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class LM extends sp{constructor(){super(new Tv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E_ extends ou{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new LM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class NM extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class OM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function T_(r,t,n,a){const l=PM(a);switch(n){case rv:return r*t;case Zd:return r*t/l.components*l.byteLength;case Kd:return r*t/l.components*l.byteLength;case lv:return r*t*2/l.components*l.byteLength;case Qd:return r*t*2/l.components*l.byteLength;case ov:return r*t*3/l.components*l.byteLength;case bi:return r*t*4/l.components*l.byteLength;case Jd:return r*t*4/l.components*l.byteLength;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case jc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pd:case gd:return Math.max(r,16)*Math.max(t,8)/4;case dd:case md:return Math.max(r,8)*Math.max(t,8)/2;case _d:case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Md:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Od:case Pd:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Id:case Bd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fd:case Hd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PM(r){switch(r){case Hi:case nv:return{byteLength:1,components:1};case nl:case iv:case cl:return{byteLength:2,components:1};case Yd:case jd:return{byteLength:2,components:4};case bs:case qd:case Ii:return{byteLength:4,components:1};case av:case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bv(){let r=null,t=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function zM(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],T=_[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const T=_[x];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var IM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
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
#endif`,qM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,QM=`#ifdef USE_BUMPMAP
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rE=`#define PI 3.141592653589793
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
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lE=`vec3 transformedNormal = objectNormal;
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
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
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
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_E=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
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
}`,bE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wE=`uniform bool receiveShadow;
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
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,DE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
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
#endif`,PE=`struct PhysicalMaterial {
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
}`,zE=`
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
#endif`,IE=`#if defined( RE_IndirectDiffuse )
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
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qE=`#if defined( USE_POINTS_UV )
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
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
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
#endif`,$E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S1=`float getShadowMask() {
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
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,T1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
}`,X1=`#define DISTANCE
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
}`,W1=`#define DISTANCE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,Q1=`uniform vec3 diffuse;
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
}`,J1=`#define LAMBERT
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
}`,$1=`#define LAMBERT
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
}`,tT=`#define MATCAP
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
}`,eT=`#define MATCAP
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
}`,nT=`#define NORMAL
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
}`,iT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,sT=`#define PHONG
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
}`,rT=`#define STANDARD
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
}`,oT=`#define STANDARD
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
}`,lT=`#define TOON
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
}`,cT=`#define TOON
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
}`,uT=`uniform float size;
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
}`,fT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,dT=`uniform vec3 color;
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
}`,pT=`uniform float rotation;
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
}`,mT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:IM,alphahash_pars_fragment:BM,alphamap_fragment:FM,alphamap_pars_fragment:HM,alphatest_fragment:GM,alphatest_pars_fragment:VM,aomap_fragment:kM,aomap_pars_fragment:XM,batching_pars_vertex:WM,batching_vertex:qM,begin_vertex:YM,beginnormal_vertex:jM,bsdfs:ZM,iridescence_fragment:KM,bumpmap_pars_fragment:QM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:tE,clipping_planes_vertex:eE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:aE,color_vertex:sE,common:rE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:lE,displacementmap_pars_vertex:cE,displacementmap_vertex:uE,emissivemap_fragment:fE,emissivemap_pars_fragment:hE,colorspace_fragment:dE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:_E,envmap_pars_vertex:vE,envmap_physical_pars_fragment:CE,envmap_vertex:xE,fog_vertex:yE,fog_pars_vertex:SE,fog_fragment:ME,fog_pars_fragment:EE,gradientmap_pars_fragment:TE,lightmap_pars_fragment:bE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:RE,lights_pars_begin:wE,lights_toon_fragment:DE,lights_toon_pars_fragment:UE,lights_phong_fragment:LE,lights_phong_pars_fragment:NE,lights_physical_fragment:OE,lights_physical_pars_fragment:PE,lights_fragment_begin:zE,lights_fragment_maps:IE,lights_fragment_end:BE,logdepthbuf_fragment:FE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:VE,map_fragment:kE,map_pars_fragment:XE,map_particle_fragment:WE,map_particle_pars_fragment:qE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:jE,morphinstance_vertex:ZE,morphcolor_vertex:KE,morphnormal_vertex:QE,morphtarget_pars_vertex:JE,morphtarget_vertex:$E,normal_fragment_begin:t1,normal_fragment_maps:e1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:a1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:u1,packing:f1,premultiplied_alpha_fragment:h1,project_vertex:d1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:_1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:x1,shadowmap_vertex:y1,shadowmask_pars_fragment:S1,skinbase_vertex:M1,skinning_pars_vertex:E1,skinning_vertex:T1,skinnormal_vertex:b1,specularmap_fragment:A1,specularmap_pars_fragment:R1,tonemapping_fragment:w1,tonemapping_pars_fragment:C1,transmission_fragment:D1,transmission_pars_fragment:U1,uv_pars_fragment:L1,uv_pars_vertex:N1,uv_vertex:O1,worldpos_vertex:P1,background_vert:z1,background_frag:I1,backgroundCube_vert:B1,backgroundCube_frag:F1,cube_vert:H1,cube_frag:G1,depth_vert:V1,depth_frag:k1,distanceRGBA_vert:X1,distanceRGBA_frag:W1,equirect_vert:q1,equirect_frag:Y1,linedashed_vert:j1,linedashed_frag:Z1,meshbasic_vert:K1,meshbasic_frag:Q1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:tT,meshmatcap_frag:eT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:hT,shadow_frag:dT,sprite_vert:pT,sprite_frag:mT},Ot={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Pi={basic:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Fn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Fn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Fn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Fn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Fn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Fn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Fn([Ot.common,Ot.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Fn([Ot.lights,Ot.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Pi.physical={uniforms:Fn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Gc={r:0,b:0,g:0},ms=new Gi,gT=new Xe;function _T(r,t,n,a,l,c,f){const h=new _e(0);let m=c===!0?0:1,p,g,_=null,v=0,x=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?n:t).get(R)),R}function T(L){let R=!1;const P=E(L);P===null?y(h,m):P&&P.isColor&&(y(P,1),R=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,R){const P=E(R);P&&(P.isCubeTexture||P.mapping===au)?(g===void 0&&(g=new De(new qr(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Fr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,H,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ms.copy(R.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(ms)),g.material.toneMapped=we.getTransfer(P.colorSpace)!==Fe,(_!==P||v!==P.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,v=P.version,x=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new De(new Rs(2,2),new Ai({name:"BackgroundMaterial",uniforms:Fr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=we.getTransfer(P.colorSpace)!==Fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,v=P.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function y(L,R){L.getRGB(Gc,vv(r)),a.buffers.color.setClear(Gc.r,Gc.g,Gc.b,R,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,R=1){h.set(L),m=R,y(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,y(h,m)},render:T,addToRenderList:S,dispose:U}}function vT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=v(null);let c=l,f=!1;function h(C,G,Z,lt,ut){let ft=!1;const I=_(lt,Z,G);c!==I&&(c=I,p(c.object)),ft=x(C,lt,Z,ut),ft&&E(C,lt,Z,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,R(C,G,Z,lt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,G,Z){const lt=Z.wireframe===!0;let ut=a[C.id];ut===void 0&&(ut={},a[C.id]=ut);let ft=ut[G.id];ft===void 0&&(ft={},ut[G.id]=ft);let I=ft[lt];return I===void 0&&(I=v(m()),ft[lt]=I),I}function v(C){const G=[],Z=[],lt=[];for(let ut=0;ut<n;ut++)G[ut]=0,Z[ut]=0,lt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:lt,object:C,attributes:{},index:null}}function x(C,G,Z,lt){const ut=c.attributes,ft=G.attributes;let I=0;const et=Z.getAttributes();for(const j in et)if(et[j].location>=0){const N=ut[j];let $=ft[j];if($===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;I++}return c.attributesNum!==I||c.index!==lt}function E(C,G,Z,lt){const ut={},ft=G.attributes;let I=0;const et=Z.getAttributes();for(const j in et)if(et[j].location>=0){let N=ft[j];N===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),ut[j]=$,I++}c.attributes=ut,c.attributesNum=I,c.index=lt}function T(){const C=c.newAttributes;for(let G=0,Z=C.length;G<Z;G++)C[G]=0}function S(C){y(C,0)}function y(C,G){const Z=c.newAttributes,lt=c.enabledAttributes,ut=c.attributeDivisors;Z[C]=1,lt[C]===0&&(r.enableVertexAttribArray(C),lt[C]=1),ut[C]!==G&&(r.vertexAttribDivisor(C,G),ut[C]=G)}function U(){const C=c.newAttributes,G=c.enabledAttributes;for(let Z=0,lt=G.length;Z<lt;Z++)G[Z]!==C[Z]&&(r.disableVertexAttribArray(Z),G[Z]=0)}function L(C,G,Z,lt,ut,ft,I){I===!0?r.vertexAttribIPointer(C,G,Z,ut,ft):r.vertexAttribPointer(C,G,Z,lt,ut,ft)}function R(C,G,Z,lt){T();const ut=lt.attributes,ft=Z.getAttributes(),I=G.defaultAttributeValues;for(const et in ft){const j=ft[et];if(j.location>=0){let yt=ut[et];if(yt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const N=yt.normalized,$=yt.itemSize,xt=t.get(yt);if(xt===void 0)continue;const St=xt.buffer,Ut=xt.type,Ht=xt.bytesPerElement,nt=Ut===r.INT||Ut===r.UNSIGNED_INT||yt.gpuType===qd;if(yt.isInterleavedBufferAttribute){const _t=yt.data,At=_t.stride,Qt=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let Yt=0;Yt<j.locationSize;Yt++)y(j.location+Yt,_t.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Yt=0;Yt<j.locationSize;Yt++)S(j.location+Yt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Yt=0;Yt<j.locationSize;Yt++)L(j.location+Yt,$/j.locationSize,Ut,N,At*Ht,(Qt+$/j.locationSize*Yt)*Ht,nt)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<j.locationSize;_t++)y(j.location+_t,yt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<j.locationSize;_t++)S(j.location+_t);r.bindBuffer(r.ARRAY_BUFFER,St);for(let _t=0;_t<j.locationSize;_t++)L(j.location+_t,$/j.locationSize,Ut,N,$*Ht,$/j.locationSize*_t*Ht,nt)}}else if(I!==void 0){const N=I[et];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(j.location,N);break;case 3:r.vertexAttrib3fv(j.location,N);break;case 4:r.vertexAttrib4fv(j.location,N);break;default:r.vertexAttrib1fv(j.location,N)}}}}U()}function P(){k();for(const C in a){const G=a[C];for(const Z in G){const lt=G[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete G[Z]}delete a[C]}}function z(C){if(a[C.id]===void 0)return;const G=a[C.id];for(const Z in G){const lt=G[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete G[Z]}delete a[C.id]}function H(C){for(const G in a){const Z=a[G];if(Z[C.id]===void 0)continue;const lt=Z[C.id];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete Z[C.id]}}function k(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:H,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function xT(r,t,n){let a;function l(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];n.update(x,a,1)}function m(p,g,_,v){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];n.update(E,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function yT(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==bi&&a.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const k=H===cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Hi&&a.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Ii&&!k)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:P,maxSamples:z}}function ST(r){const t=this;let n=null,a=0,l=!1,c=!1;const f=new vs,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||l;return l=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const U=c?0:a,L=U*4;let R=y.clippingState||null;m.value=R,R=g(E,v,L,x);for(let P=0;P!==L;++P)R[P]=n[P];y.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,x,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const y=x+T*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,R=x;L!==T;++L,R+=4)f.copy(_[L]).applyMatrix4(U,h),f.normal.toArray(S,R),S[R+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function MT(r){let t=new WeakMap;function n(f,h){return h===cd?f.mapping=Pr:h===ud&&(f.mapping=zr),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===cd||h===ud)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new gM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Rr=4,b_=[.125,.215,.35,.446,.526,.582],Ss=20,qh=new Tv,A_=new _e;let Yh=null,jh=0,Zh=0,Kh=!1;const xs=(1+Math.sqrt(5))/2,Tr=1/xs,R_=[new W(-xs,Tr,0),new W(xs,Tr,0),new W(-Tr,0,xs),new W(Tr,0,xs),new W(0,xs,-Tr),new W(0,xs,Tr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],ET=new W;class w_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,l=100,c={}){const{size:f=256,position:h=ET}=c;Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,jh,Zh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Pr||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:cl,format:bi,colorSpace:Ir,depthBuffer:!1},l=C_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TT(c)),this._blurMaterial=bT(c,t,n)}return l}_compileMaterial(t){const n=new De(this._lodPlanes[0],t);this._renderer.compile(n,qh)}_sceneToCubeUV(t,n,a,l,c){const m=new Yn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(A_),_.toneMapping=Xa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const T=new Ha({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),S=new De(new qr,T);let y=!1;const U=t.background;U?U.isColor&&(T.color.copy(U),t.background=null,y=!0):(T.color.copy(A_),y=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):R===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const P=this._cubeSize;Vc(l,R*P,L>2?P:0,P,P),_.setRenderTarget(l),y&&_.render(S,m),_.render(t,m)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=x,_.autoClear=v,t.background=U}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===Pr||t.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=U_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new De(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Vc(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,qh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=R_[(l-c-1)%R_.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new De(this._lodPlanes[l],p),v=p.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ss-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Ss;S>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ss}`);const y=[];let U=0;for(let H=0;H<Ss;++H){const k=H/T,D=Math.exp(-k*k/2);y.push(D),H===0?U+=D:H<S&&(U+=2*D)}for(let H=0;H<y.length;H++)y[H]=y[H]/U;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const R=this._sizeLods[l],P=3*R*(l>L-Rr?l-L+Rr:0),z=4*(this._cubeSize-R);Vc(n,P,z,3*R,2*R),m.setRenderTarget(n),m.render(_,qh)}}function TT(r){const t=[],n=[],a=[];let l=r;const c=r-Rr+1+b_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let m=1/h;f>r-Rr?m=b_[f-r+Rr-1]:f===0&&(m=0),a.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,T=3,S=2,y=1,U=new Float32Array(T*E*x),L=new Float32Array(S*E*x),R=new Float32Array(y*E*x);for(let z=0;z<x;z++){const H=z%3*2/3-1,k=z>2?0:-1,D=[H,k,0,H+2/3,k,0,H+2/3,k+1,0,H,k,0,H+2/3,k+1,0,H,k+1,0];U.set(D,T*E*z),L.set(v,S*E*z);const C=[z,z,z,z,z,z];R.set(C,y*E*z)}const P=new Tn;P.setAttribute("position",new oi(U,T)),P.setAttribute("uv",new oi(L,S)),P.setAttribute("faceIndex",new oi(R,y)),t.push(P),l>Rr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function C_(r,t,n){const a=new As(r,t,n);return a.texture.mapping=au,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Vc(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function bT(r,t,n){const a=new Float32Array(Ss),l=new W(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rp(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function D_(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function U_(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function rp(){return`

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
	`}function AT(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===cd||m===ud,g=m===Pr||m===zr;if(p||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new w_(r)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new w_(r)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function RT(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(a)}return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&rl("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function wT(r,t,n,a){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)t.update(v[x],r.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,E=_.attributes.position;let T=0;if(x!==null){const U=x.array;T=x.version;for(let L=0,R=U.length;L<R;L+=3){const P=U[L+0],z=U[L+1],H=U[L+2];v.push(P,z,z,H,H,P)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,R=U.length/3-1;L<R;L+=3){const P=L+0,z=L+1,H=L+2;v.push(P,z,z,H,H,P)}}else return;const S=new(fv(v)?_v:gv)(v,1);S.version=T;const y=c.get(_);y&&t.remove(y),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function CT(r,t,n){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,x){r.drawElements(a,x,c,v*f),n.update(x,a,1)}function p(v,x,E){E!==0&&(r.drawElementsInstanced(a,x,c,v*f,E),n.update(x,a,E))}function g(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];n.update(S,a,1)}function _(v,x,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)p(v[y]/f,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,c,v,0,T,0,E);let y=0;for(let U=0;U<E;U++)y+=x[U]*T[U];n.update(y,a,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function DT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function UT(r,t,n){const a=new WeakMap,l=new Ge;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let D=function(){H.dispose(),a.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let R=h.attributes.position.count*L,P=1;R>t.maxTextureSize&&(P=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const z=new Float32Array(R*P*4*_),H=new hv(z,R,P,_);H.type=Ii,H.needsUpdate=!0;const k=L*4;for(let C=0;C<_;C++){const G=S[C],Z=y[C],lt=U[C],ut=R*P*4*C;for(let ft=0;ft<G.count;ft++){const I=ft*k;x===!0&&(l.fromBufferAttribute(G,ft),z[ut+I+0]=l.x,z[ut+I+1]=l.y,z[ut+I+2]=l.z,z[ut+I+3]=0),E===!0&&(l.fromBufferAttribute(Z,ft),z[ut+I+4]=l.x,z[ut+I+5]=l.y,z[ut+I+6]=l.z,z[ut+I+7]=0),T===!0&&(l.fromBufferAttribute(lt,ft),z[ut+I+8]=l.x,z[ut+I+9]=l.y,z[ut+I+10]=l.z,z[ut+I+11]=lt.itemSize===4?l.w:1)}}v={count:_,texture:H,size:new Ee(R,P)},a.set(h,v),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let x=0;for(let T=0;T<p.length;T++)x+=p[T];const E=h.morphTargetsRelative?1:1-x;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function LT(r,t,n,a){let l=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const Av=new Gn,L_=new Sv(1,1),Rv=new hv,wv=new $S,Cv=new yv,N_=[],O_=[],P_=new Float32Array(16),z_=new Float32Array(9),I_=new Float32Array(4);function Yr(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=N_[l];if(c===void 0&&(c=new Float32Array(l),N_[l]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function _n(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function lu(r,t){let n=O_[t];n===void 0&&(n=new Int32Array(t),O_[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function NT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function OT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2fv(this.addr,t),_n(n,t)}}function PT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gn(n,t))return;r.uniform3fv(this.addr,t),_n(n,t)}}function zT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4fv(this.addr,t),_n(n,t)}}function IT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,a))return;I_.set(a),r.uniformMatrix2fv(this.addr,!1,I_),_n(n,a)}}function BT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,a))return;z_.set(a),r.uniformMatrix3fv(this.addr,!1,z_),_n(n,a)}}function FT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,a))return;P_.set(a),r.uniformMatrix4fv(this.addr,!1,P_),_n(n,a)}}function HT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function GT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2iv(this.addr,t),_n(n,t)}}function VT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3iv(this.addr,t),_n(n,t)}}function kT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4iv(this.addr,t),_n(n,t)}}function XT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function WT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2uiv(this.addr,t),_n(n,t)}}function qT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3uiv(this.addr,t),_n(n,t)}}function YT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4uiv(this.addr,t),_n(n,t)}}function jT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(L_.compareFunction=uv,c=L_):c=Av,n.setTexture2D(t||c,l)}function ZT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||wv,l)}function KT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||Cv,l)}function QT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||Rv,l)}function JT(r){switch(r){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return IT;case 35675:return BT;case 35676:return FT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}function $T(r,t){r.uniform1fv(this.addr,t)}function tb(r,t){const n=Yr(t,this.size,2);r.uniform2fv(this.addr,n)}function eb(r,t){const n=Yr(t,this.size,3);r.uniform3fv(this.addr,n)}function nb(r,t){const n=Yr(t,this.size,4);r.uniform4fv(this.addr,n)}function ib(r,t){const n=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function ab(r,t){const n=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function sb(r,t){const n=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function rb(r,t){r.uniform1iv(this.addr,t)}function ob(r,t){r.uniform2iv(this.addr,t)}function lb(r,t){r.uniform3iv(this.addr,t)}function cb(r,t){r.uniform4iv(this.addr,t)}function ub(r,t){r.uniform1uiv(this.addr,t)}function fb(r,t){r.uniform2uiv(this.addr,t)}function hb(r,t){r.uniform3uiv(this.addr,t)}function db(r,t){r.uniform4uiv(this.addr,t)}function pb(r,t,n){const a=this.cache,l=t.length,c=lu(n,l);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||Av,c[f])}function mb(r,t,n){const a=this.cache,l=t.length,c=lu(n,l);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||wv,c[f])}function gb(r,t,n){const a=this.cache,l=t.length,c=lu(n,l);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||Cv,c[f])}function _b(r,t,n){const a=this.cache,l=t.length,c=lu(n,l);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||Rv,c[f])}function vb(r){switch(r){case 5126:return $T;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return ab;case 35676:return sb;case 5124:case 35670:return rb;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return fb;case 36295:return hb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}class xb{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=JT(n.type)}}class yb{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vb(n.type)}}class Sb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],a)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function B_(r,t){r.seq.push(t),r.map[t.id]=t}function Mb(r,t,n){const a=r.name,l=a.length;for(Qh.lastIndex=0;;){const c=Qh.exec(a),f=Qh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){B_(n,p===void 0?new xb(h,r,t):new yb(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new Sb(h),B_(n,_)),n=_}}}class Kc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);Mb(c,f,this)}}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&a.push(f)}return a}}function F_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const Eb=37297;let Tb=0;function bb(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const H_=new fe;function Ab(r){we._getMatrix(H_,we.workingColorSpace,r);const t=`mat3( ${H_.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(r)){case $c:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function G_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+bb(r.getShaderSource(t),h)}else return c}function Rb(r,t){const n=Ab(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wb(r,t){let n;switch(t){case dS:n="Linear";break;case pS:n="Reinhard";break;case mS:n="Cineon";break;case tv:n="ACESFilmic";break;case _S:n="AgX";break;case vS:n="Neutral";break;case gS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kc=new W;function Cb(){we.getLuminanceCoefficients(kc);const r=kc.x.toFixed(4),t=kc.y.toFixed(4),n=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function Ub(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Lb(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function $o(r){return r!==""}function V_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(r){return r.replace(Nb,Pb)}const Ob=new Map;function Pb(r,t){let n=pe[t];if(n===void 0){const a=Ob.get(t);if(a!==void 0)n=pe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Vd(n)}const zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(r){return r.replace(zb,Ib)}function Ib(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function W_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Bb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===J_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===qy?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===la&&(t="SHADOWMAP_TYPE_VSM"),t}function Fb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pr:case zr:t="ENVMAP_TYPE_CUBE";break;case au:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function Gb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $_:t="ENVMAP_BLENDING_MULTIPLY";break;case fS:t="ENVMAP_BLENDING_MIX";break;case hS:t="ENVMAP_BLENDING_ADD";break}return t}function Vb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function kb(r,t,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=Bb(n),p=Fb(n),g=Hb(n),_=Gb(n),v=Vb(n),x=Db(n),E=Ub(c),T=l.createProgram();let S,y,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter($o).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter($o).join(`
`),y.length>0&&(y+=`
`)):(S=[W_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),y=[W_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xa?"#define TONE_MAPPING":"",n.toneMapping!==Xa?pe.tonemapping_pars_fragment:"",n.toneMapping!==Xa?wb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Rb("linearToOutputTexel",n.outputColorSpace),Cb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),f=Vd(f),f=V_(f,n),f=k_(f,n),h=Vd(h),h=V_(h,n),h=k_(h,n),f=X_(f),h=X_(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=U+S+f,R=U+y+h,P=F_(l,l.VERTEX_SHADER,L),z=F_(l,l.FRAGMENT_SHADER,R);l.attachShader(T,P),l.attachShader(T,z),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function H(G){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T)||"",lt=l.getShaderInfoLog(P)||"",ut=l.getShaderInfoLog(z)||"",ft=Z.trim(),I=lt.trim(),et=ut.trim();let j=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,z);else{const N=G_(l,P,"vertex"),$=G_(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+N+`
`+$)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(I===""||et==="")&&(yt=!1);yt&&(G.diagnostics={runnable:j,programLog:ft,vertexShader:{log:I,prefix:S},fragmentShader:{log:et,prefix:y}})}l.deleteShader(P),l.deleteShader(z),k=new Kc(l,T),D=Lb(l,T)}let k;this.getUniforms=function(){return k===void 0&&H(this),k};let D;this.getAttributes=function(){return D===void 0&&H(this),D};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,Eb)),C},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Tb++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=z,this}let Xb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new qb(t),n.set(t,a)),a}}class qb{constructor(t){this.id=Xb++,this.code=t,this.usedTimes=0}}function Yb(r,t,n,a,l,c,f){const h=new pv,m=new Wb,p=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,G,Z,lt){const ut=Z.fog,ft=lt.geometry,I=D.isMeshStandardMaterial?Z.environment:null,et=(D.isMeshStandardMaterial?n:t).get(D.envMap||I),j=et&&et.mapping===au?et.image.height:null,yt=E[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,$=N!==void 0?N.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let St,Ut,Ht,nt;if(yt){const be=Pi[yt];St=be.vertexShader,Ut=be.fragmentShader}else St=D.vertexShader,Ut=D.fragmentShader,m.update(D),Ht=m.getVertexShaderID(D),nt=m.getFragmentShaderID(D);const _t=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Qt=lt.isInstancedMesh===!0,Yt=lt.isBatchedMesh===!0,me=!!D.map,on=!!D.matcap,F=!!et,Oe=!!D.aoMap,oe=!!D.lightMap,ie=!!D.bumpMap,Pt=!!D.normalMap,We=!!D.displacementMap,Vt=!!D.emissiveMap,le=!!D.metalnessMap,Ke=!!D.roughnessMap,Qe=D.anisotropy>0,O=D.clearcoat>0,b=D.dispersion>0,tt=D.iridescence>0,ht=D.sheen>0,mt=D.transmission>0,ct=Qe&&!!D.anisotropyMap,zt=O&&!!D.clearcoatMap,Rt=O&&!!D.clearcoatNormalMap,Wt=O&&!!D.clearcoatRoughnessMap,jt=tt&&!!D.iridescenceMap,Mt=tt&&!!D.iridescenceThicknessMap,Lt=ht&&!!D.sheenColorMap,Kt=ht&&!!D.sheenRoughnessMap,kt=!!D.specularMap,Ct=!!D.specularColorMap,ce=!!D.specularIntensityMap,X=mt&&!!D.transmissionMap,bt=mt&&!!D.thicknessMap,wt=!!D.gradientMap,It=!!D.alphaMap,Et=D.alphaTest>0,vt=!!D.alphaHash,Gt=!!D.extensions;let se=Xa;D.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(se=r.toneMapping);const Ue={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Ut,defines:D.defines,customVertexShaderID:Ht,customFragmentShaderID:nt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:Yt,batchingColor:Yt&&lt._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&lt.instanceColor!==null,instancingMorph:Qt&&lt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ir,alphaToCoverage:!!D.alphaToCoverage,map:me,matcap:on,envMap:F,envMapMode:F&&et.mapping,envMapCubeUVHeight:j,aoMap:Oe,lightMap:oe,bumpMap:ie,normalMap:Pt,displacementMap:v&&We,emissiveMap:Vt,normalMapObjectSpace:Pt&&D.normalMapType===MS,normalMapTangentSpace:Pt&&D.normalMapType===cv,metalnessMap:le,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ct,clearcoat:O,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:tt,iridescenceMap:jt,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:Kt,specularMap:kt,specularColorMap:Ct,specularIntensityMap:ce,transmission:mt,transmissionMap:X,thicknessMap:bt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===Cr&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:Et,alphaHash:vt,combine:D.combine,mapUv:me&&T(D.map.channel),aoMapUv:Oe&&T(D.aoMap.channel),lightMapUv:oe&&T(D.lightMap.channel),bumpMapUv:ie&&T(D.bumpMap.channel),normalMapUv:Pt&&T(D.normalMap.channel),displacementMapUv:We&&T(D.displacementMap.channel),emissiveMapUv:Vt&&T(D.emissiveMap.channel),metalnessMapUv:le&&T(D.metalnessMap.channel),roughnessMapUv:Ke&&T(D.roughnessMap.channel),anisotropyMapUv:ct&&T(D.anisotropyMap.channel),clearcoatMapUv:zt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&T(D.sheenRoughnessMap.channel),specularMapUv:kt&&T(D.specularMap.channel),specularColorMapUv:Ct&&T(D.specularColorMap.channel),specularIntensityMapUv:ce&&T(D.specularIntensityMap.channel),transmissionMapUv:X&&T(D.transmissionMap.channel),thicknessMapUv:bt&&T(D.thicknessMap.channel),alphaMapUv:It&&T(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Pt||Qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(me||It),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:me&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:Vt&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Hn,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Gt&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&D.extensions.multiDraw===!0||Yt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(U(C,D),L(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function U(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function R(D){const C=E[D.type];let G;if(C){const Z=Pi[C];G=hM.clone(Z.uniforms)}else G=D.uniforms;return G}function P(D,C){let G;for(let Z=0,lt=g.length;Z<lt;Z++){const ut=g[Z];if(ut.cacheKey===C){G=ut,++G.usedTimes;break}}return G===void 0&&(G=new kb(r,C,D,c),g.push(G)),G}function z(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function H(D){m.remove(D)}function k(){m.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:z,releaseShaderCache:H,programs:g,dispose:k}}function jb(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function Zb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function q_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Y_(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function f(_,v,x,E,T,S){let y=r[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},r[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=T,y.group=S),t++,y}function h(_,v,x,E,T,S){const y=f(_,v,x,E,T,S);x.transmission>0?a.push(y):x.transparent===!0?l.push(y):n.push(y)}function m(_,v,x,E,T,S){const y=f(_,v,x,E,T,S);x.transmission>0?a.unshift(y):x.transparent===!0?l.unshift(y):n.unshift(y)}function p(_,v){n.length>1&&n.sort(_||Zb),a.length>1&&a.sort(v||q_),l.length>1&&l.sort(v||q_)}function g(){for(let _=t,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function Kb(){let r=new WeakMap;function t(a,l){const c=r.get(a);let f;return c===void 0?(f=new Y_,r.set(a,[f])):l>=c.length?(f=new Y_,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function Qb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new _e};break;case"SpotLight":n={position:new W,direction:new W,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new _e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":n={color:new _e,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=n,n}}}function Jb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let $b=0;function tA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function eA(r){const t=new Qb,n=Jb(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new W);const l=new W,c=new Xe,f=new Xe;function h(p){let g=0,_=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let x=0,E=0,T=0,S=0,y=0,U=0,L=0,R=0,P=0,z=0,H=0;p.sort(tA);for(let D=0,C=p.length;D<C;D++){const G=p[D],Z=G.color,lt=G.intensity,ut=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Z.r*lt,_+=Z.g*lt,v+=Z.b*lt;else if(G.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(G.sh.coefficients[I],lt);H++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const et=G.shadow,j=n.get(G);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,a.directionalShadow[x]=j,a.directionalShadowMap[x]=ft,a.directionalShadowMatrix[x]=G.shadow.matrix,U++}a.directional[x]=I,x++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Z).multiplyScalar(lt),I.distance=ut,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,a.spot[T]=I;const et=G.shadow;if(G.map&&(a.spotLightMap[P]=G.map,P++,et.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[T]=et.matrix,G.castShadow){const j=n.get(G);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,a.spotShadow[T]=j,a.spotShadowMap[T]=ft,R++}T++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(Z).multiplyScalar(lt),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=I,S++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const et=G.shadow,j=n.get(G);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,j.shadowCameraNear=et.camera.near,j.shadowCameraFar=et.camera.far,a.pointShadow[E]=j,a.pointShadowMap[E]=ft,a.pointShadowMatrix[E]=G.shadow.matrix,L++}a.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(lt),I.groundColor.copy(G.groundColor).multiplyScalar(lt),a.hemi[y]=I,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const k=a.hash;(k.directionalLength!==x||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==U||k.numPointShadows!==L||k.numSpotShadows!==R||k.numSpotMaps!==P||k.numLightProbes!==H)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=S,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=R+P-z,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=H,k.directionalLength=x,k.pointLength=E,k.spotLength=T,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=U,k.numPointShadows=L,k.numSpotShadows=R,k.numSpotMaps=P,k.numLightProbes=H,a.version=$b++)}function m(p,g){let _=0,v=0,x=0,E=0,T=0;const S=g.matrixWorldInverse;for(let y=0,U=p.length;y<U;y++){const L=p[y];if(L.isDirectionalLight){const R=a.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),_++}else if(L.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const R=a.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const R=a.hemi[T];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:a}}function j_(r){const t=new eA(r),n=[],a=[];function l(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function nA(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new j_(r),t.set(l,[h])):c>=f.length?(h=new j_(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const iA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
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
}`;function sA(r,t,n){let a=new ep;const l=new Ee,c=new Ee,f=new Ge,h=new wM({depthPacking:SS}),m=new CM,p={},g=n.maxTextureSize,_={[qa]:jn,[jn]:qa,[Hn]:Hn},v=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:iA,fragmentShader:aA}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Tn;E.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new De(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let y=this.type;this.render=function(z,H,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ka),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const lt=y!==la&&this.type===la,ut=y===la&&this.type!==la;for(let ft=0,I=z.length;ft<I;ft++){const et=z[ft],j=et.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||lt===!0||ut===!0){const $=this.type!==la?{minFilter:ri,magFilter:ri}:{};j.map!==null&&j.map.dispose(),j.map=new As(l.x,l.y,$),j.map.texture.name=et.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const N=j.getViewportCount();for(let $=0;$<N;$++){const xt=j.getViewport($);f.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),Z.viewport(f),j.updateMatrices(et,$),a=j.getFrustum(),R(H,k,j.camera,et,this.type)}j.isPointLightShadow!==!0&&this.type===la&&U(j,k),j.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(D,C,G)};function U(z,H){const k=t.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new As(l.x,l.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,k,v,T,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,k,x,T,null)}function L(z,H,k,D){let C=null;const G=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?m:h,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Z=C.uuid,lt=H.uuid;let ut=p[Z];ut===void 0&&(ut={},p[Z]=ut);let ft=ut[lt];ft===void 0&&(ft=C.clone(),ut[lt]=ft,H.addEventListener("dispose",P)),C=ft}if(C.visible=H.visible,C.wireframe=H.wireframe,D===la?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:_[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=r.properties.get(C);Z.light=k}return C}function R(z,H,k,D,C){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===la)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const lt=t.update(z),ut=z.material;if(Array.isArray(ut)){const ft=lt.groups;for(let I=0,et=ft.length;I<et;I++){const j=ft[I],yt=ut[j.materialIndex];if(yt&&yt.visible){const N=L(z,yt,D,C);z.onBeforeShadow(r,z,H,k,lt,N,j),r.renderBufferDirect(k,null,lt,N,z,j),z.onAfterShadow(r,z,H,k,lt,N,j)}}}else if(ut.visible){const ft=L(z,ut,D,C);z.onBeforeShadow(r,z,H,k,lt,ft,null),r.renderBufferDirect(k,null,lt,ft,z,null),z.onAfterShadow(r,z,H,k,lt,ft,null)}}const Z=z.children;for(let lt=0,ut=Z.length;lt<ut;lt++)R(Z[lt],H,k,D,C)}function P(z){z.target.removeEventListener("dispose",P);for(const k in p){const D=p[k],C=z.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const rA={[nd]:id,[ad]:od,[sd]:ld,[Or]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Or};function oA(r,t){function n(){let X=!1;const bt=new Ge;let wt=null;const It=new Ge(0,0,0,0);return{setMask:function(Et){wt!==Et&&!X&&(r.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,vt,Gt,se,Ue){Ue===!0&&(Et*=se,vt*=se,Gt*=se),bt.set(Et,vt,Gt,se),It.equals(bt)===!1&&(r.clearColor(Et,vt,Gt,se),It.copy(bt))},reset:function(){X=!1,wt=null,It.set(-1,0,0,0)}}}function a(){let X=!1,bt=!1,wt=null,It=null,Et=null;return{setReversed:function(vt){if(bt!==vt){const Gt=t.get("EXT_clip_control");vt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=vt;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return bt},setTest:function(vt){vt?_t(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(vt){wt!==vt&&!X&&(r.depthMask(vt),wt=vt)},setFunc:function(vt){if(bt&&(vt=rA[vt]),It!==vt){switch(vt){case nd:r.depthFunc(r.NEVER);break;case id:r.depthFunc(r.ALWAYS);break;case ad:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case sd:r.depthFunc(r.EQUAL);break;case rd:r.depthFunc(r.GEQUAL);break;case od:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Et!==vt&&(bt&&(vt=1-vt),r.clearDepth(vt),Et=vt)},reset:function(){X=!1,wt=null,It=null,Et=null,bt=!1}}}function l(){let X=!1,bt=null,wt=null,It=null,Et=null,vt=null,Gt=null,se=null,Ue=null;return{setTest:function(be){X||(be?_t(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(be){bt!==be&&!X&&(r.stencilMask(be),bt=be)},setFunc:function(be,gi,hn){(wt!==be||It!==gi||Et!==hn)&&(r.stencilFunc(be,gi,hn),wt=be,It=gi,Et=hn)},setOp:function(be,gi,hn){(vt!==be||Gt!==gi||se!==hn)&&(r.stencilOp(be,gi,hn),vt=be,Gt=gi,se=hn)},setLocked:function(be){X=be},setClear:function(be){Ue!==be&&(r.clearStencil(be),Ue=be)},reset:function(){X=!1,bt=null,wt=null,It=null,Et=null,vt=null,Gt=null,se=null,Ue=null}}}const c=new n,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,U=null,L=null,R=null,P=null,z=null,H=new _e(0,0,0),k=0,D=!1,C=null,G=null,Z=null,lt=null,ut=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,et=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=et>=1):j.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=et>=2);let yt=null,N={};const $=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),St=new Ge().fromArray($),Ut=new Ge().fromArray(xt);function Ht(X,bt,wt,It){const Et=new Uint8Array(4),vt=r.createTexture();r.bindTexture(X,vt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<wt;Gt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return vt}const nt={};nt[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),_t(r.DEPTH_TEST),f.setFunc(Or),ie(!1),Pt(k0),_t(r.CULL_FACE),Oe(ka);function _t(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function At(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Qt(X,bt){return _[X]!==bt?(r.bindFramebuffer(X,bt),_[X]=bt,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=bt),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Yt(X,bt){let wt=x,It=!1;if(X){wt=v.get(bt),wt===void 0&&(wt=[],v.set(bt,wt));const Et=X.textures;if(wt.length!==Et.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Gt=Et.length;vt<Gt;vt++)wt[vt]=r.COLOR_ATTACHMENT0+vt;wt.length=Et.length,It=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,It=!0);It&&r.drawBuffers(wt)}function me(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const on={[ys]:r.FUNC_ADD,[jy]:r.FUNC_SUBTRACT,[Zy]:r.FUNC_REVERSE_SUBTRACT};on[Ky]=r.MIN,on[Qy]=r.MAX;const F={[Jy]:r.ZERO,[$y]:r.ONE,[tS]:r.SRC_COLOR,[td]:r.SRC_ALPHA,[rS]:r.SRC_ALPHA_SATURATE,[aS]:r.DST_COLOR,[nS]:r.DST_ALPHA,[eS]:r.ONE_MINUS_SRC_COLOR,[ed]:r.ONE_MINUS_SRC_ALPHA,[sS]:r.ONE_MINUS_DST_COLOR,[iS]:r.ONE_MINUS_DST_ALPHA,[oS]:r.CONSTANT_COLOR,[lS]:r.ONE_MINUS_CONSTANT_COLOR,[cS]:r.CONSTANT_ALPHA,[uS]:r.ONE_MINUS_CONSTANT_ALPHA};function Oe(X,bt,wt,It,Et,vt,Gt,se,Ue,be){if(X===ka){T===!0&&(At(r.BLEND),T=!1);return}if(T===!1&&(_t(r.BLEND),T=!0),X!==Yy){if(X!==S||be!==D){if((y!==ys||R!==ys)&&(r.blendEquation(r.FUNC_ADD),y=ys,R=ys),be)switch(X){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nr:r.blendFunc(r.ONE,r.ONE);break;case X0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case W0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case X0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}U=null,L=null,P=null,z=null,H.set(0,0,0),k=0,S=X,D=be}return}Et=Et||bt,vt=vt||wt,Gt=Gt||It,(bt!==y||Et!==R)&&(r.blendEquationSeparate(on[bt],on[Et]),y=bt,R=Et),(wt!==U||It!==L||vt!==P||Gt!==z)&&(r.blendFuncSeparate(F[wt],F[It],F[vt],F[Gt]),U=wt,L=It,P=vt,z=Gt),(se.equals(H)===!1||Ue!==k)&&(r.blendColor(se.r,se.g,se.b,Ue),H.copy(se),k=Ue),S=X,D=!1}function oe(X,bt){X.side===Hn?At(r.CULL_FACE):_t(r.CULL_FACE);let wt=X.side===jn;bt&&(wt=!wt),ie(wt),X.blending===Cr&&X.transparent===!1?Oe(ka):Oe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const It=X.stencilWrite;h.setTest(It),It&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Vt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function Pt(X){X!==Xy?(_t(r.CULL_FACE),X!==G&&(X===k0?r.cullFace(r.BACK):X===Wy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),G=X}function We(X){X!==Z&&(I&&r.lineWidth(X),Z=X)}function Vt(X,bt,wt){X?(_t(r.POLYGON_OFFSET_FILL),(lt!==bt||ut!==wt)&&(r.polygonOffset(bt,wt),lt=bt,ut=wt)):At(r.POLYGON_OFFSET_FILL)}function le(X){X?_t(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=r.TEXTURE0+ft-1),yt!==X&&(r.activeTexture(X),yt=X)}function Qe(X,bt,wt){wt===void 0&&(yt===null?wt=r.TEXTURE0+ft-1:wt=yt);let It=N[wt];It===void 0&&(It={type:void 0,texture:void 0},N[wt]=It),(It.type!==X||It.texture!==bt)&&(yt!==wt&&(r.activeTexture(wt),yt=wt),r.bindTexture(X,bt||nt[X]),It.type=X,It.texture=bt)}function O(){const X=N[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){St.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Kt(X){Ut.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function kt(X,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let It=wt.get(X);It===void 0&&(It=r.getUniformBlockIndex(bt,X.name),wt.set(X,It))}function Ct(X,bt){const It=p.get(bt).get(X);m.get(bt)!==It&&(r.uniformBlockBinding(bt,It,X.__bindingPointIndex),m.set(bt,It))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,N={},_={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,U=null,L=null,R=null,P=null,z=null,H=new _e(0,0,0),k=0,D=!1,C=null,G=null,Z=null,lt=null,ut=null,St.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:_t,disable:At,bindFramebuffer:Qt,drawBuffers:Yt,useProgram:me,setBlending:Oe,setMaterial:oe,setFlipSided:ie,setCullFace:Pt,setLineWidth:We,setPolygonOffset:Vt,setScissorTest:le,activeTexture:Ke,bindTexture:Qe,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:tt,texImage2D:jt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:zt,scissor:Lt,viewport:Kt,reset:ce}}function lA(r,t,n,a,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return x?new OffscreenCanvas(O,b):eu("canvas")}function T(O,b,tt){let ht=1;const mt=Qe(O);if((mt.width>tt||mt.height>tt)&&(ht=tt/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(ht*mt.width),zt=Math.floor(ht*mt.height);_===void 0&&(_=E(ct,zt));const Rt=b?E(ct,zt):_;return Rt.width=ct,Rt.height=zt,Rt.getContext("2d").drawImage(O,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+zt+")."),Rt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),O;return O}function S(O){return O.generateMipmaps}function y(O){r.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,b,tt,ht,mt=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=b;if(b===r.RED&&(tt===r.FLOAT&&(ct=r.R32F),tt===r.HALF_FLOAT&&(ct=r.R16F),tt===r.UNSIGNED_BYTE&&(ct=r.R8)),b===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ct=r.R8UI),tt===r.UNSIGNED_SHORT&&(ct=r.R16UI),tt===r.UNSIGNED_INT&&(ct=r.R32UI),tt===r.BYTE&&(ct=r.R8I),tt===r.SHORT&&(ct=r.R16I),tt===r.INT&&(ct=r.R32I)),b===r.RG&&(tt===r.FLOAT&&(ct=r.RG32F),tt===r.HALF_FLOAT&&(ct=r.RG16F),tt===r.UNSIGNED_BYTE&&(ct=r.RG8)),b===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ct=r.RG8UI),tt===r.UNSIGNED_SHORT&&(ct=r.RG16UI),tt===r.UNSIGNED_INT&&(ct=r.RG32UI),tt===r.BYTE&&(ct=r.RG8I),tt===r.SHORT&&(ct=r.RG16I),tt===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),tt===r.UNSIGNED_INT&&(ct=r.RGB32UI),tt===r.BYTE&&(ct=r.RGB8I),tt===r.SHORT&&(ct=r.RGB16I),tt===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),tt===r.UNSIGNED_INT&&(ct=r.RGBA32UI),tt===r.BYTE&&(ct=r.RGBA8I),tt===r.SHORT&&(ct=r.RGBA16I),tt===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&(tt===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),tt===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),b===r.RGBA){const zt=mt?$c:we.getTransfer(ht);tt===r.FLOAT&&(ct=r.RGBA32F),tt===r.HALF_FLOAT&&(ct=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(ct=zt===Fe?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function R(O,b){let tt;return O?b===null||b===bs||b===il?tt=r.DEPTH24_STENCIL8:b===Ii?tt=r.DEPTH32F_STENCIL8:b===nl&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bs||b===il?tt=r.DEPTH_COMPONENT24:b===Ii?tt=r.DEPTH_COMPONENT32F:b===nl&&(tt=r.DEPTH_COMPONENT16),tt}function P(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==ri&&O.minFilter!==zi?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function z(O){const b=O.target;b.removeEventListener("dispose",z),k(b),b.isVideoTexture&&g.delete(b)}function H(O){const b=O.target;b.removeEventListener("dispose",H),C(b)}function k(O){const b=a.get(O);if(b.__webglInit===void 0)return;const tt=O.source,ht=v.get(tt);if(ht){const mt=ht[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&D(O),Object.keys(ht).length===0&&v.delete(tt)}a.remove(O)}function D(O){const b=a.get(O);r.deleteTexture(b.__webglTexture);const tt=O.source,ht=v.get(tt);delete ht[b.__cacheKey],f.memory.textures--}function C(O){const b=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let mt=0;mt<b.__webglFramebuffer[ht].length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[ht][mt]);else r.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[ht]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=O.textures;for(let ht=0,mt=tt.length;ht<mt;ht++){const ct=a.get(tt[ht]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),f.memory.textures--),a.remove(tt[ht])}a.remove(O)}let G=0;function Z(){G=0}function lt(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function ut(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function ft(O,b){const tt=a.get(O);if(O.isVideoTexture&&le(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const ht=O.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(tt,O,b);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+b)}function I(O,b){const tt=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){nt(tt,O,b);return}n.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+b)}function et(O,b){const tt=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){nt(tt,O,b);return}n.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+b)}function j(O,b){const tt=a.get(O);if(O.version>0&&tt.__version!==O.version){_t(tt,O,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+b)}const yt={[fd]:r.REPEAT,[Ms]:r.CLAMP_TO_EDGE,[hd]:r.MIRRORED_REPEAT},N={[ri]:r.NEAREST,[xS]:r.NEAREST_MIPMAP_NEAREST,[xc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},$={[ES]:r.NEVER,[CS]:r.ALWAYS,[TS]:r.LESS,[uv]:r.LEQUAL,[bS]:r.EQUAL,[wS]:r.GEQUAL,[AS]:r.GREATER,[RS]:r.NOTEQUAL};function xt(O,b){if(b.type===Ii&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===zi||b.magFilter===_h||b.magFilter===xc||b.magFilter===Es||b.minFilter===zi||b.minFilter===_h||b.minFilter===xc||b.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,yt[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ri||b.minFilter!==xc&&b.minFilter!==Es||b.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function St(O,b){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",z));const ht=b.source;let mt=v.get(ht);mt===void 0&&(mt={},v.set(ht,mt));const ct=ut(b);if(ct!==O.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),mt[ct].usedTimes++;const zt=mt[O.__cacheKey];zt!==void 0&&(mt[O.__cacheKey].usedTimes--,zt.usedTimes===0&&D(b)),O.__cacheKey=ct,O.__webglTexture=mt[ct].texture}return tt}function Ut(O,b,tt){return Math.floor(Math.floor(O/tt)/b)}function Ht(O,b,tt,ht){const ct=O.updateRanges;if(ct.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,tt,ht,b.data);else{ct.sort((Mt,Lt)=>Mt.start-Lt.start);let zt=0;for(let Mt=1;Mt<ct.length;Mt++){const Lt=ct[zt],Kt=ct[Mt],kt=Lt.start+Lt.count,Ct=Ut(Kt.start,b.width,4),ce=Ut(Lt.start,b.width,4);Kt.start<=kt+1&&Ct===ce&&Ut(Kt.start+Kt.count-1,b.width,4)===Ct?Lt.count=Math.max(Lt.count,Kt.start+Kt.count-Lt.start):(++zt,ct[zt]=Kt)}ct.length=zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,Lt=ct.length;Mt<Lt;Mt++){const Kt=ct[Mt],kt=Math.floor(Kt.start/4),Ct=Math.ceil(Kt.count/4),ce=kt%b.width,X=Math.floor(kt/b.width),bt=Ct,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,ce,X,bt,wt,tt,ht,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,jt)}}function nt(O,b,tt){let ht=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=r.TEXTURE_3D);const mt=St(O,b),ct=b.source;n.bindTexture(ht,O.__webglTexture,r.TEXTURE0+tt);const zt=a.get(ct);if(ct.version!==zt.__version||mt===!0){n.activeTexture(r.TEXTURE0+tt);const Rt=we.getPrimaries(we.workingColorSpace),Wt=b.colorSpace===Va?null:we.getPrimaries(b.colorSpace),jt=b.colorSpace===Va||Rt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Mt=T(b.image,!1,l.maxTextureSize);Mt=Ke(b,Mt);const Lt=c.convert(b.format,b.colorSpace),Kt=c.convert(b.type);let kt=L(b.internalFormat,Lt,Kt,b.colorSpace,b.isVideoTexture);xt(ht,b);let Ct;const ce=b.mipmaps,X=b.isVideoTexture!==!0,bt=zt.__version===void 0||mt===!0,wt=ct.dataReady,It=P(b,Mt);if(b.isDepthTexture)kt=R(b.format===sl,b.type),bt&&(X?n.texStorage2D(r.TEXTURE_2D,1,kt,Mt.width,Mt.height):n.texImage2D(r.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Lt,Kt,null));else if(b.isDataTexture)if(ce.length>0){X&&bt&&n.texStorage2D(r.TEXTURE_2D,It,kt,ce[0].width,ce[0].height);for(let Et=0,vt=ce.length;Et<vt;Et++)Ct=ce[Et],X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data);b.generateMipmaps=!1}else X?(bt&&n.texStorage2D(r.TEXTURE_2D,It,kt,Mt.width,Mt.height),wt&&Ht(b,Mt,Lt,Kt)):n.texImage2D(r.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Lt,Kt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,kt,ce[0].width,ce[0].height,Mt.depth);for(let Et=0,vt=ce.length;Et<vt;Et++)if(Ct=ce[Et],b.format!==bi)if(Lt!==null)if(X){if(wt)if(b.layerUpdates.size>0){const Gt=T_(Ct.width,Ct.height,b.format,b.type);for(const se of b.layerUpdates){const Ue=Ct.data.subarray(se*Gt/Ct.data.BYTES_PER_ELEMENT,(se+1)*Gt/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,se,Ct.width,Ct.height,1,Lt,Ue)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Ct.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Kt,Ct.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,Mt.depth,0,Lt,Kt,Ct.data)}else{X&&bt&&n.texStorage2D(r.TEXTURE_2D,It,kt,ce[0].width,ce[0].height);for(let Et=0,vt=ce.length;Et<vt;Et++)Ct=ce[Et],b.format!==bi?Lt!==null?X?wt&&n.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):n.compressedTexImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data)}else if(b.isDataArrayTexture)if(X){if(bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,kt,Mt.width,Mt.height,Mt.depth),wt)if(b.layerUpdates.size>0){const Et=T_(Mt.width,Mt.height,b.format,b.type);for(const vt of b.layerUpdates){const Gt=Mt.data.subarray(vt*Et/Mt.data.BYTES_PER_ELEMENT,(vt+1)*Et/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Lt,Kt,Gt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Kt,Mt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Lt,Kt,Mt.data);else if(b.isData3DTexture)X?(bt&&n.texStorage3D(r.TEXTURE_3D,It,kt,Mt.width,Mt.height,Mt.depth),wt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Kt,Mt.data)):n.texImage3D(r.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Lt,Kt,Mt.data);else if(b.isFramebufferTexture){if(bt)if(X)n.texStorage2D(r.TEXTURE_2D,It,kt,Mt.width,Mt.height);else{let Et=Mt.width,vt=Mt.height;for(let Gt=0;Gt<It;Gt++)n.texImage2D(r.TEXTURE_2D,Gt,kt,Et,vt,0,Lt,Kt,null),Et>>=1,vt>>=1}}else if(ce.length>0){if(X&&bt){const Et=Qe(ce[0]);n.texStorage2D(r.TEXTURE_2D,It,kt,Et.width,Et.height)}for(let Et=0,vt=ce.length;Et<vt;Et++)Ct=ce[Et],X?wt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt,Kt,Ct):n.texImage2D(r.TEXTURE_2D,Et,kt,Lt,Kt,Ct);b.generateMipmaps=!1}else if(X){if(bt){const Et=Qe(Mt);n.texStorage2D(r.TEXTURE_2D,It,kt,Et.width,Et.height)}wt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Kt,Mt)}else n.texImage2D(r.TEXTURE_2D,0,kt,Lt,Kt,Mt);S(b)&&y(ht),zt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function _t(O,b,tt){if(b.image.length!==6)return;const ht=St(O,b),mt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+tt);const ct=a.get(mt);if(mt.version!==ct.__version||ht===!0){n.activeTexture(r.TEXTURE0+tt);const zt=we.getPrimaries(we.workingColorSpace),Rt=b.colorSpace===Va?null:we.getPrimaries(b.colorSpace),Wt=b.colorSpace===Va||zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let vt=0;vt<6;vt++)!jt&&!Mt?Lt[vt]=T(b.image[vt],!0,l.maxCubemapSize):Lt[vt]=Mt?b.image[vt].image:b.image[vt],Lt[vt]=Ke(b,Lt[vt]);const Kt=Lt[0],kt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),ce=L(b.internalFormat,kt,Ct,b.colorSpace),X=b.isVideoTexture!==!0,bt=ct.__version===void 0||ht===!0,wt=mt.dataReady;let It=P(b,Kt);xt(r.TEXTURE_CUBE_MAP,b);let Et;if(jt){X&&bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,It,ce,Kt.width,Kt.height);for(let vt=0;vt<6;vt++){Et=Lt[vt].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const se=Et[Gt];b.format!==bi?kt!==null?X?wt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,se.width,se.height,kt,se.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,ce,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,se.width,se.height,kt,Ct,se.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,ce,se.width,se.height,0,kt,Ct,se.data)}}}else{if(Et=b.mipmaps,X&&bt){Et.length>0&&It++;const vt=Qe(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,It,ce,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Lt[vt].width,Lt[vt].height,kt,Ct,Lt[vt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Lt[vt].width,Lt[vt].height,0,kt,Ct,Lt[vt].data);for(let Gt=0;Gt<Et.length;Gt++){const Ue=Et[Gt].image[vt].image;X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,Ue.width,Ue.height,kt,Ct,Ue.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,ce,Ue.width,Ue.height,0,kt,Ct,Ue.data)}}else{X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,Ct,Lt[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,kt,Ct,Lt[vt]);for(let Gt=0;Gt<Et.length;Gt++){const se=Et[Gt];X?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,kt,Ct,se.image[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,ce,kt,Ct,se.image[vt])}}}S(b)&&y(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function At(O,b,tt,ht,mt,ct){const zt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),Wt=L(tt.internalFormat,zt,Rt,tt.colorSpace),jt=a.get(b),Mt=a.get(tt);if(Mt.__renderTarget=b,!jt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ct),Kt=Math.max(1,b.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?n.texImage3D(mt,ct,Wt,Lt,Kt,b.depth,0,zt,Rt,null):n.texImage2D(mt,ct,Wt,Lt,Kt,0,zt,Rt,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,0,We(b)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,ct),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(O,b,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const ht=b.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=R(b.stencilBuffer,mt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=We(b);Vt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ct,b.width,b.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,O)}else{const ht=b.textures;for(let mt=0;mt<ht.length;mt++){const ct=ht[mt],zt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),Wt=L(ct.internalFormat,zt,Rt,ct.colorSpace),jt=We(b);tt&&Vt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Wt,b.width,b.height):Vt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,Wt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const mt=ht.__webglTexture,ct=We(b);if(b.depthTexture.format===al)Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(b.depthTexture.format===sl)Vt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function me(O){const b=a.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const ht=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),b.__depthDisposeCallback=mt}b.__boundDepthTexture=ht}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=O.texture.mipmaps;ht&&ht.length>0?Yt(b.__webglFramebuffer[0],O):Yt(b.__webglFramebuffer,O)}else if(tt){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=r.createRenderbuffer(),Qt(b.__webglDepthbuffer[ht],O,!1);else{const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const ht=O.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Qt(b.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function on(O,b,tt){const ht=a.get(O);b!==void 0&&At(ht.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&me(O)}function F(O){const b=O.texture,tt=a.get(O),ht=a.get(b);O.addEventListener("dispose",H);const mt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,zt=mt.length>1;if(zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=b.version,f.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)tt.__webglFramebuffer[Rt][Wt]=r.createFramebuffer()}else tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Rt=0,Wt=mt.length;Rt<Wt;Rt++){const jt=a.get(mt[Rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&Vt(O)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<mt.length;Rt++){const Wt=mt[Rt];tt.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const jt=c.convert(Wt.format,Wt.colorSpace),Mt=c.convert(Wt.type),Lt=L(Wt.internalFormat,jt,Mt,Wt.colorSpace,O.isXRRenderTarget===!0),Kt=We(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Lt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Qt(tt.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){n.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(tt.__webglFramebuffer[Rt][Wt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else At(tt.__webglFramebuffer[Rt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(b)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Rt=0,Wt=mt.length;Rt<Wt;Rt++){const jt=mt[Rt],Mt=a.get(jt);let Lt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Mt.__webglTexture),xt(Lt,jt),At(tt.__webglFramebuffer,O,jt,r.COLOR_ATTACHMENT0+Rt,Lt,0),S(jt)&&y(Lt)}n.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,ht.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)At(tt.__webglFramebuffer[Wt],O,b,r.COLOR_ATTACHMENT0,Rt,Wt);else At(tt.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,Rt,0);S(b)&&y(Rt),n.unbindTexture()}O.depthBuffer&&me(O)}function Oe(O){const b=O.textures;for(let tt=0,ht=b.length;tt<ht;tt++){const mt=b[tt];if(S(mt)){const ct=U(O),zt=a.get(mt).__webglTexture;n.bindTexture(ct,zt),y(ct),n.unbindTexture()}}}const oe=[],ie=[];function Pt(O){if(O.samples>0){if(Vt(O)===!1){const b=O.textures,tt=O.width,ht=O.height;let mt=r.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(O),Rt=b.length>1;if(Rt)for(let jt=0;jt<b.length;jt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Wt=O.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let jt=0;jt<b.length;jt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const Mt=a.get(b[jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,mt,r.NEAREST),m===!0&&(oe.length=0,ie.length=0,oe.push(r.COLOR_ATTACHMENT0+jt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(oe.push(ct),ie.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let jt=0;jt<b.length;jt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const Mt=a.get(b[jt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,Mt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function We(O){return Math.min(l.maxSamples,O.samples)}function Vt(O){const b=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(O){const b=f.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function Ke(O,b){const tt=O.colorSpace,ht=O.format,mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==Ir&&tt!==Va&&(we.getTransfer(tt)===Fe?(ht!==bi||mt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Z,this.setTexture2D=ft,this.setTexture2DArray=I,this.setTexture3D=et,this.setTextureCube=j,this.rebindTextures=on,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function cA(r,t){function n(a,l=Va){let c;const f=we.getTransfer(l);if(a===Hi)return r.UNSIGNED_BYTE;if(a===Yd)return r.UNSIGNED_SHORT_4_4_4_4;if(a===jd)return r.UNSIGNED_SHORT_5_5_5_1;if(a===av)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===sv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===nv)return r.BYTE;if(a===iv)return r.SHORT;if(a===nl)return r.UNSIGNED_SHORT;if(a===qd)return r.INT;if(a===bs)return r.UNSIGNED_INT;if(a===Ii)return r.FLOAT;if(a===cl)return r.HALF_FLOAT;if(a===rv)return r.ALPHA;if(a===ov)return r.RGB;if(a===bi)return r.RGBA;if(a===al)return r.DEPTH_COMPONENT;if(a===sl)return r.DEPTH_STENCIL;if(a===Zd)return r.RED;if(a===Kd)return r.RED_INTEGER;if(a===lv)return r.RG;if(a===Qd)return r.RG_INTEGER;if(a===Jd)return r.RGBA_INTEGER;if(a===qc||a===Yc||a===jc||a===Zc)if(f===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===dd||a===pd||a===md||a===gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===_d||a===vd||a===xd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===_d||a===vd)return f===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===xd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===yd||a===Sd||a===Md||a===Ed||a===Td||a===bd||a===Ad||a===Rd||a===wd||a===Cd||a===Dd||a===Ud||a===Ld||a===Nd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===yd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Sd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Md)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ed)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Td)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===bd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ad)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Rd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===wd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Cd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Dd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ud)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ld)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Nd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Od||a===Pd||a===zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Od)return f===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Id||a===Bd||a===Fd||a===Hd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Fd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Hd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===il?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const uA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
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

}`;class hA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Mv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ai({vertexShader:uA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new De(new Rs(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dA extends Gr{constructor(t,n){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",S=new hA,y={},U=n.getContextAttributes();let L=null,R=null;const P=[],z=[],H=new Ee;let k=null;const D=new Yn;D.viewport=new Ge;const C=new Yn;C.viewport=new Ge;const G=[D,C],Z=new NM;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let _t=P[nt];return _t===void 0&&(_t=new Bh,P[nt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(nt){let _t=P[nt];return _t===void 0&&(_t=new Bh,P[nt]=_t),_t.getGripSpace()},this.getHand=function(nt){let _t=P[nt];return _t===void 0&&(_t=new Bh,P[nt]=_t),_t.getHandSpace()};function ft(nt){const _t=z.indexOf(nt.inputSource);if(_t===-1)return;const At=P[_t];At!==void 0&&(At.update(nt.inputSource,nt.frame,p||f),At.dispatchEvent({type:nt.type,data:nt.inputSource}))}function I(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",et);for(let nt=0;nt<P.length;nt++){const _t=z[nt];_t!==null&&(z[nt]=null,P[nt].disconnect(_t))}lt=null,ut=null,S.reset();for(const nt in y)delete y[nt];t.setRenderTarget(L),x=null,v=null,_=null,l=null,R=null,Ht.stop(),a.isPresenting=!1,t.setPixelRatio(k),t.setSize(H.width,H.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",I),l.addEventListener("inputsourceschange",et),U.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(H),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Qt=null,Yt=null;U.depth&&(Yt=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=U.stencil?sl:al,Qt=U.stencil?il:bs);const me={colorFormat:n.RGBA8,depthFormat:Yt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(me),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),R=new As(v.textureWidth,v.textureHeight,{format:bi,type:Hi,depthTexture:new Sv(v.textureWidth,v.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,n,At),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new As(x.framebufferWidth,x.framebufferHeight,{format:bi,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ht.setContext(l),Ht.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function et(nt){for(let _t=0;_t<nt.removed.length;_t++){const At=nt.removed[_t],Qt=z.indexOf(At);Qt>=0&&(z[Qt]=null,P[Qt].disconnect(At))}for(let _t=0;_t<nt.added.length;_t++){const At=nt.added[_t];let Qt=z.indexOf(At);if(Qt===-1){for(let me=0;me<P.length;me++)if(me>=z.length){z.push(At),Qt=me;break}else if(z[me]===null){z[me]=At,Qt=me;break}if(Qt===-1)break}const Yt=P[Qt];Yt&&Yt.connect(At)}}const j=new W,yt=new W;function N(nt,_t,At){j.setFromMatrixPosition(_t.matrixWorld),yt.setFromMatrixPosition(At.matrixWorld);const Qt=j.distanceTo(yt),Yt=_t.projectionMatrix.elements,me=At.projectionMatrix.elements,on=Yt[14]/(Yt[10]-1),F=Yt[14]/(Yt[10]+1),Oe=(Yt[9]+1)/Yt[5],oe=(Yt[9]-1)/Yt[5],ie=(Yt[8]-1)/Yt[0],Pt=(me[8]+1)/me[0],We=on*ie,Vt=on*Pt,le=Qt/(-ie+Pt),Ke=le*-ie;if(_t.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ke),nt.translateZ(le),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Yt[10]===-1)nt.projectionMatrix.copy(_t.projectionMatrix),nt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Qe=on+le,O=F+le,b=We-Ke,tt=Vt+(Qt-Ke),ht=Oe*F/O*Qe,mt=oe*F/O*Qe;nt.projectionMatrix.makePerspective(b,tt,ht,mt,Qe,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function $(nt,_t){_t===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(_t.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let _t=nt.near,At=nt.far;S.texture!==null&&(S.depthNear>0&&(_t=S.depthNear),S.depthFar>0&&(At=S.depthFar)),Z.near=C.near=D.near=_t,Z.far=C.far=D.far=At,(lt!==Z.near||ut!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),lt=Z.near,ut=Z.far),Z.layers.mask=nt.layers.mask|6,D.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const Qt=nt.parent,Yt=Z.cameras;$(Z,Qt);for(let me=0;me<Yt.length;me++)$(Yt[me],Qt);Yt.length===2?N(Z,D,C):Z.projectionMatrix.copy(D.projectionMatrix),xt(nt,Z,Qt)};function xt(nt,_t,At){At===null?nt.matrix.copy(_t.matrixWorld):(nt.matrix.copy(At.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(_t.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(_t.projectionMatrix),nt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Br*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(nt){m=nt,v!==null&&(v.fixedFoveation=nt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(nt){return y[nt]};let St=null;function Ut(nt,_t){if(g=_t.getViewerPose(p||f),E=_t,g!==null){const At=g.views;x!==null&&(t.setRenderTargetFramebuffer(R,x.framebuffer),t.setRenderTarget(R));let Qt=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,Qt=!0);for(let F=0;F<At.length;F++){const Oe=At[F];let oe=null;if(x!==null)oe=x.getViewport(Oe);else{const Pt=_.getViewSubImage(v,Oe);oe=Pt.viewport,F===0&&(t.setRenderTargetTextures(R,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(R))}let ie=G[F];ie===void 0&&(ie=new Yn,ie.layers.enable(F),ie.viewport=new Ge,G[F]=ie),ie.matrix.fromArray(Oe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Oe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(oe.x,oe.y,oe.width,oe.height),F===0&&(Z.matrix.copy(ie.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Qt===!0&&Z.cameras.push(ie)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const F=_.getDepthInformation(At[0]);F&&F.isValid&&F.texture&&S.init(F,l.renderState)}if(Yt&&Yt.includes("camera-access")&&T){t.state.unbindTexture(),_=a.getBinding();for(let F=0;F<At.length;F++){const Oe=At[F].camera;if(Oe){let oe=y[Oe];oe||(oe=new Mv,y[Oe]=oe);const ie=_.getCameraImage(Oe);oe.sourceTexture=ie}}}}for(let At=0;At<P.length;At++){const Qt=z[At],Yt=P[At];Qt!==null&&Yt!==void 0&&Yt.update(Qt,_t,p||f)}St&&St(nt,_t),_t.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_t}),E=null}const Ht=new bv;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(nt){St=nt},this.dispose=function(){}}}const gs=new Gi,pA=new Xe;function mA(r,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,vv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,U,L,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(S,y):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(c(S,y),E(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),T(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(f(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?m(S,y,U,L):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const U=t.get(y),L=U.envMap,R=U.envMapRotation;L&&(S.envMap.value=L,gs.copy(R),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),S.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(gs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,U,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*U,S.scale.value=L*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,U){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const U=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function gA(r,t,n,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const R=L.program;a.uniformBlockBinding(U,R)}function p(U,L){let R=l[U.id];R===void 0&&(E(U),R=g(U),l[U.id]=R,U.addEventListener("dispose",S));const P=L.program;a.updateUBOMapping(U,P);const z=t.render.frame;c[U.id]!==z&&(v(U),c[U.id]=z)}function g(U){const L=_();U.__bindingPointIndex=L;const R=r.createBuffer(),P=U.__size,z=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,P,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function _(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const L=l[U.id],R=U.uniforms,P=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,H=R.length;z<H;z++){const k=Array.isArray(R[z])?R[z]:[R[z]];for(let D=0,C=k.length;D<C;D++){const G=k[D];if(x(G,z,D,P)===!0){const Z=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let ft=0;ft<lt.length;ft++){const I=lt[ft],et=T(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Z+ut,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,ut),ut+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(U,L,R,P){const z=U.value,H=L+"_"+R;if(P[H]===void 0)return typeof z=="number"||typeof z=="boolean"?P[H]=z:P[H]=z.clone(),!0;{const k=P[H];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return P[H]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function E(U){const L=U.uniforms;let R=0;const P=16;for(let H=0,k=L.length;H<k;H++){const D=Array.isArray(L[H])?L[H]:[L[H]];for(let C=0,G=D.length;C<G;C++){const Z=D[C],lt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,ft=lt.length;ut<ft;ut++){const I=lt[ut],et=T(I),j=R%P,yt=j%et.boundary,N=j+yt;R+=yt,N!==0&&P-N<et.storage&&(R+=P-N),Z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=et.storage}}}const z=R%P;return z>0&&(R+=P-z),U.__size=R,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const R=f.indexOf(L.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}class _A{constructor(t={}){const{canvas:n=qS(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1;this._outputColorSpace=si;let z=0,H=0,k=null,D=-1,C=null;const G=new Ge,Z=new Ge;let lt=null;const ut=new _e(0);let ft=0,I=n.width,et=n.height,j=1,yt=null,N=null;const $=new Ge(0,0,I,et),xt=new Ge(0,0,I,et);let St=!1;const Ut=new ep;let Ht=!1,nt=!1;const _t=new Xe,At=new W,Qt=new Ge,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function on(){return k===null?j:1}let F=a;function Oe(w,q){return n.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wd}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",Et,!1),F===null){const q="webgl2";if(F=Oe(q,w),F===null)throw Oe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,ie,Pt,We,Vt,le,Ke,Qe,O,b,tt,ht,mt,ct,zt,Rt,Wt,jt,Mt,Lt,Kt,kt,Ct,ce;function X(){oe=new RT(F),oe.init(),kt=new cA(F,oe),ie=new yT(F,oe,t,kt),Pt=new oA(F,oe),ie.reversedDepthBuffer&&v&&Pt.buffers.depth.setReversed(!0),We=new DT(F),Vt=new jb,le=new lA(F,oe,Pt,Vt,ie,kt,We),Ke=new MT(R),Qe=new AT(R),O=new zM(F),Ct=new vT(F,O),b=new wT(F,O,We,Ct),tt=new LT(F,b,O,We),Mt=new UT(F,ie,le),Rt=new ST(Vt),ht=new Yb(R,Ke,Qe,oe,ie,Ct,Rt),mt=new mA(R,Vt),ct=new Kb,zt=new nA(oe),jt=new _T(R,Ke,Qe,Pt,tt,x,m),Wt=new sA(R,tt,ie),ce=new gA(F,We,ie,Pt),Lt=new xT(F,oe,We),Kt=new CT(F,oe,We),We.programs=ht.programs,R.capabilities=ie,R.extensions=oe,R.properties=Vt,R.renderLists=ct,R.shadowMap=Wt,R.state=Pt,R.info=We}X();const bt=new dA(R,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(I,et,!1))},this.getSize=function(w){return w.set(I,et)},this.setSize=function(w,q,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,et=q,n.width=Math.floor(w*j),n.height=Math.floor(q*j),rt===!0&&(n.style.width=w+"px",n.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(I*j,et*j).floor()},this.setDrawingBufferSize=function(w,q,rt){I=w,et=q,j=rt,n.width=Math.floor(w*rt),n.height=Math.floor(q*rt),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,q,rt,ot){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,q,rt,ot),Pt.viewport(G.copy($).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,q,rt,ot){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,q,rt,ot),Pt.scissor(Z.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){Pt.setScissorTest(St=w)},this.setOpaqueSort=function(w){yt=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,rt=!0){let ot=0;if(w){let K=!1;if(k!==null){const Tt=k.texture.format;K=Tt===Jd||Tt===Qd||Tt===Kd}if(K){const Tt=k.texture.type,Dt=Tt===Hi||Tt===bs||Tt===nl||Tt===il||Tt===Yd||Tt===jd,Bt=jt.getClearColor(),Nt=jt.getClearAlpha(),$t=Bt.r,ee=Bt.g,qt=Bt.b;Dt?(E[0]=$t,E[1]=ee,E[2]=qt,E[3]=Nt,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=$t,T[1]=ee,T[2]=qt,T[3]=Nt,F.clearBufferiv(F.COLOR,0,T))}else ot|=F.COLOR_BUFFER_BIT}q&&(ot|=F.DEPTH_BUFFER_BIT),rt&&(ot|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),jt.dispose(),ct.dispose(),zt.dispose(),Vt.dispose(),Ke.dispose(),Qe.dispose(),tt.dispose(),Ct.dispose(),ce.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",hn),bt.removeEventListener("sessionend",dn),$e.stop()};function wt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=We.autoReset,q=Wt.enabled,rt=Wt.autoUpdate,ot=Wt.needsUpdate,K=Wt.type;X(),We.autoReset=w,Wt.enabled=q,Wt.autoUpdate=rt,Wt.needsUpdate=ot,Wt.type=K}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vt(w){const q=w.target;q.removeEventListener("dispose",vt),Gt(q)}function Gt(w){se(w),Vt.remove(w)}function se(w){const q=Vt.get(w).programs;q!==void 0&&(q.forEach(function(rt){ht.releaseProgram(rt)}),w.isShaderMaterial&&ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,rt,ot,K,Tt){q===null&&(q=Yt);const Dt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=ua(w,q,rt,ot,K);Pt.setMaterial(ot,Dt);let Nt=rt.index,$t=1;if(ot.wireframe===!0){if(Nt=b.getWireframeAttribute(rt),Nt===void 0)return;$t=2}const ee=rt.drawRange,qt=rt.attributes.position;let he=ee.start*$t,Ae=(ee.start+ee.count)*$t;Tt!==null&&(he=Math.max(he,Tt.start*$t),Ae=Math.min(Ae,(Tt.start+Tt.count)*$t)),Nt!==null?(he=Math.max(he,0),Ae=Math.min(Ae,Nt.count)):qt!=null&&(he=Math.max(he,0),Ae=Math.min(Ae,qt.count));const je=Ae-he;if(je<0||je===1/0)return;Ct.setup(K,ot,Bt,rt,Nt);let Pe,de=Lt;if(Nt!==null&&(Pe=O.get(Nt),de=Kt,de.setIndex(Pe)),K.isMesh)ot.wireframe===!0?(Pt.setLineWidth(ot.wireframeLinewidth*on()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(K.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Pt.setLineWidth(Jt*on()),K.isLineSegments?de.setMode(F.LINES):K.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else K.isPoints?de.setMode(F.POINTS):K.isSprite&&de.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))de.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Ye=K._multiDrawCounts,ye=K._multiDrawCount,Cn=Nt?O.get(Nt).bytesPerElement:1,_i=Vt.get(ot).currentProgram.getUniforms();for(let Pn=0;Pn<ye;Pn++)_i.setValue(F,"_gl_DrawID",Pn),de.render(Jt[Pn]/Cn,Ye[Pn])}else if(K.isInstancedMesh)de.renderInstances(he,je,K.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,Jt);de.renderInstances(he,je,Ye)}else de.render(he,je)};function Ue(w,q,rt){w.transparent===!0&&w.side===Hn&&w.forceSinglePass===!1?(w.side=jn,w.needsUpdate=!0,wi(w,q,rt),w.side=qa,w.needsUpdate=!0,wi(w,q,rt),w.side=Hn):wi(w,q,rt)}this.compile=function(w,q,rt=null){rt===null&&(rt=w),y=zt.get(rt),y.init(q),L.push(y),rt.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),w!==rt&&w.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const ot=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Bt=Tt[Dt];Ue(Bt,rt,K),ot.add(Bt)}else Ue(Tt,rt,K),ot.add(Tt)}),y=L.pop(),ot},this.compileAsync=function(w,q,rt=null){const ot=this.compile(w,q,rt);return new Promise(K=>{function Tt(){if(ot.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){K(w);return}setTimeout(Tt,10)}oe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let be=null;function gi(w){be&&be(w)}function hn(){$e.stop()}function dn(){$e.start()}const $e=new bv;$e.setAnimationLoop(gi),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(w){be=w,bt.setAnimationLoop(w),w===null?$e.stop():$e.start()},bt.addEventListener("sessionstart",hn),bt.addEventListener("sessionend",dn),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,q,k),y=zt.get(w,L.length),y.init(q),L.push(y),_t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ut.setFromProjectionMatrix(_t,Bi,q.reversedDepth),nt=this.localClippingEnabled,Ht=Rt.init(this.clippingPlanes,nt),S=ct.get(w,U.length),S.init(),U.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&Ri(Tt,q,-1/0,R.sortObjects)}Ri(w,q,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(yt,N),me=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,me&&jt.addToRenderList(S,w),this.info.render.frame++,Ht===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;Wt.render(rt,w,q),Ht===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,K=S.transmissive;if(y.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(K.length>0)for(let Dt=0,Bt=Tt.length;Dt<Bt;Dt++){const Nt=Tt[Dt];ul(ot,K,w,Nt)}me&&jt.render(w);for(let Dt=0,Bt=Tt.length;Dt<Bt;Dt++){const Nt=Tt[Dt];Cs(S,w,Nt,Nt.viewport)}}else K.length>0&&ul(ot,K,w,q),me&&jt.render(w),Cs(S,w,q);k!==null&&H===0&&(le.updateMultisampleRenderTarget(k),le.updateRenderTargetMipmap(k)),w.isScene===!0&&w.onAfterRender(R,w,q),Ct.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(y=L[L.length-1],Ht===!0&&Rt.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Ri(w,q,rt,ot){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ut.intersectsSprite(w)){ot&&Qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);const Dt=tt.update(w),Bt=w.material;Bt.visible&&S.push(w,Dt,Bt,rt,Qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ut.intersectsObject(w))){const Dt=tt.update(w),Bt=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qt.copy(w.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(Bt)){const Nt=Dt.groups;for(let $t=0,ee=Nt.length;$t<ee;$t++){const qt=Nt[$t],he=Bt[qt.materialIndex];he&&he.visible&&S.push(w,Dt,he,rt,Qt.z,qt)}}else Bt.visible&&S.push(w,Dt,Bt,rt,Qt.z,null)}}const Tt=w.children;for(let Dt=0,Bt=Tt.length;Dt<Bt;Dt++)Ri(Tt[Dt],q,rt,ot)}function Cs(w,q,rt,ot){const K=w.opaque,Tt=w.transmissive,Dt=w.transparent;y.setupLightsView(rt),Ht===!0&&Rt.setGlobalState(R.clippingPlanes,rt),ot&&Pt.viewport(G.copy(ot)),K.length>0&&Ds(K,q,rt),Tt.length>0&&Ds(Tt,q,rt),Dt.length>0&&Ds(Dt,q,rt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ul(w,q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new As(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?cl:Hi,minFilter:Es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||G;Tt.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);const Bt=R.getRenderTarget(),Nt=R.getActiveCubeFace(),$t=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(ut),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),me&&jt.render(rt);const ee=R.toneMapping;R.toneMapping=Xa;const qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),Ht===!0&&Rt.setGlobalState(R.clippingPlanes,ot),Ds(w,rt,ot),le.updateMultisampleRenderTarget(Tt),le.updateRenderTargetMipmap(Tt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ae=0,je=q.length;Ae<je;Ae++){const Pe=q[Ae],de=Pe.object,Jt=Pe.geometry,Ye=Pe.material,ye=Pe.group;if(Ye.side===Hn&&de.layers.test(ot.layers)){const Cn=Ye.side;Ye.side=jn,Ye.needsUpdate=!0,jr(de,rt,ot,Jt,Ye,ye),Ye.side=Cn,Ye.needsUpdate=!0,he=!0}}he===!0&&(le.updateMultisampleRenderTarget(Tt),le.updateRenderTargetMipmap(Tt))}R.setRenderTarget(Bt,Nt,$t),R.setClearColor(ut,ft),qt!==void 0&&(ot.viewport=qt),R.toneMapping=ee}function Ds(w,q,rt){const ot=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Tt=w.length;K<Tt;K++){const Dt=w[K],Bt=Dt.object,Nt=Dt.geometry,$t=Dt.group;let ee=Dt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Bt.layers.test(rt.layers)&&jr(Bt,q,rt,Nt,ee,$t)}}function jr(w,q,rt,ot,K,Tt){w.onBeforeRender(R,q,rt,ot,K,Tt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(R,q,rt,ot,w,Tt),K.transparent===!0&&K.side===Hn&&K.forceSinglePass===!1?(K.side=jn,K.needsUpdate=!0,R.renderBufferDirect(rt,q,ot,K,w,Tt),K.side=qa,K.needsUpdate=!0,R.renderBufferDirect(rt,q,ot,K,w,Tt),K.side=Hn):R.renderBufferDirect(rt,q,ot,K,w,Tt),w.onAfterRender(R,q,rt,ot,K,Tt)}function wi(w,q,rt){q.isScene!==!0&&(q=Yt);const ot=Vt.get(w),K=y.state.lights,Tt=y.state.shadowsArray,Dt=K.state.version,Bt=ht.getParameters(w,K.state,Tt,q,rt),Nt=ht.getProgramCacheKey(Bt);let $t=ot.programs;ot.environment=w.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(w.isMeshStandardMaterial?Qe:Ke).get(w.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",vt),$t=new Map,ot.programs=$t);let ee=$t.get(Nt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Dt)return Vi(w,Bt),ee}else Bt.uniforms=ht.getUniforms(w),w.onBeforeCompile(Bt,R),ee=ht.acquireProgram(Bt,Nt),$t.set(Nt,ee),ot.uniforms=Bt.uniforms;const qt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),Vi(w,Bt),ot.needsLights=fa(w),ot.lightsStateVersion=Dt,ot.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Us(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Kc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Vi(w,q){const rt=Vt.get(w);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function ua(w,q,rt,ot,K){q.isScene!==!0&&(q=Yt),le.resetTextureUnits();const Tt=q.fog,Dt=ot.isMeshStandardMaterial?q.environment:null,Bt=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ir,Nt=(ot.isMeshStandardMaterial?Qe:Ke).get(ot.envMap||Dt),$t=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),qt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color;let je=Xa;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(je=R.toneMapping);const Pe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,de=Pe!==void 0?Pe.length:0,Jt=Vt.get(ot),Ye=y.state.lights;if(Ht===!0&&(nt===!0||w!==C)){const tn=w===C&&ot.id===D;Rt.setState(ot,w,tn)}let ye=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ye.state.version||Jt.outputColorSpace!==Bt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==Nt||ot.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==qt||Jt.morphNormals!==he||Jt.morphColors!==Ae||Jt.toneMapping!==je||Jt.morphTargetsCount!==de)&&(ye=!0):(ye=!0,Jt.__version=ot.version);let Cn=Jt.currentProgram;ye===!0&&(Cn=wi(ot,q,K));let _i=!1,Pn=!1,vn=!1;const Ve=Cn.getUniforms(),zn=Jt.uniforms;if(Pt.useProgram(Cn.program)&&(_i=!0,Pn=!0,vn=!0),ot.id!==D&&(D=ot.id,Pn=!0),_i||C!==w){Pt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ve.setValue(F,"projectionMatrix",w.projectionMatrix),Ve.setValue(F,"viewMatrix",w.matrixWorldInverse);const bn=Ve.map.cameraPosition;bn!==void 0&&bn.setValue(F,At.setFromMatrixPosition(w.matrixWorld)),ie.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Pn=!0,vn=!0)}if(K.isSkinnedMesh){Ve.setOptional(F,K,"bindMatrix"),Ve.setOptional(F,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ve.setValue(F,"boneTexture",tn.boneTexture,le))}K.isBatchedMesh&&(Ve.setOptional(F,K,"batchingTexture"),Ve.setValue(F,"batchingTexture",K._matricesTexture,le),Ve.setOptional(F,K,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",K._indirectTexture,le),Ve.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",K._colorsTexture,le));const Dn=rt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Mt.update(K,rt,Cn),(Pn||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Ve.setValue(F,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(zn.envMap.value=Nt,zn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(zn.envMapIntensity.value=q.environmentIntensity),Pn&&(Ve.setValue(F,"toneMappingExposure",R.toneMappingExposure),Jt.needsLights&&ja(zn,vn),Tt&&ot.fog===!0&&mt.refreshFogUniforms(zn,Tt),mt.refreshMaterialUniforms(zn,ot,j,et,y.state.transmissionRenderTarget[w.id]),Kc.upload(F,Us(Jt),zn,le)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Kc.upload(F,Us(Jt),zn,le),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ve.setValue(F,"center",K.center),Ve.setValue(F,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(F,"normalMatrix",K.normalMatrix),Ve.setValue(F,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const tn=ot.uniformsGroups;for(let bn=0,Ls=tn.length;bn<Ls;bn++){const Vn=tn[bn];ce.update(Vn,Cn),ce.bind(Vn,Cn)}}return Cn}function ja(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function fa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,q,rt){const ot=Vt.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=q,Vt.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const rt=Vt.get(w);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const ln=F.createFramebuffer();this.setRenderTarget=function(w,q=0,rt=0){k=w,z=q,H=rt;let ot=!0,K=null,Tt=!1,Dt=!1;if(w){const Nt=Vt.get(w);if(Nt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),ot=!1;else if(Nt.__webglFramebuffer===void 0)le.setupRenderTarget(w);else if(Nt.__hasExternalTextures)le.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qt=w.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Vt.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const ee=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?K=ee[q][rt]:K=ee[q],Tt=!0):w.samples>0&&le.useMultisampledRTT(w)===!1?K=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[rt]:K=ee,G.copy(w.viewport),Z.copy(w.scissor),lt=w.scissorTest}else G.copy($).multiplyScalar(j).floor(),Z.copy(xt).multiplyScalar(j).floor(),lt=St;if(rt!==0&&(K=ln),Pt.bindFramebuffer(F.FRAMEBUFFER,K)&&ot&&Pt.drawBuffers(w,K),Pt.viewport(G),Pt.scissor(Z),Pt.setScissorTest(lt),Tt){const Nt=Vt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,rt)}else if(Dt){const Nt=q;for(let $t=0;$t<w.textures.length;$t++){const ee=Vt.get(w.textures[$t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$t,ee.__webglTexture,rt,Nt)}}else if(w!==null&&rt!==0){const Nt=Vt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(w,q,rt,ot,K,Tt,Dt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Pt.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const $t=w.textures[Bt],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ot&&rt>=0&&rt<=w.height-K&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(q,rt,ot,K,kt.convert(ee),kt.convert(qt),Tt))}finally{const $t=k!==null?Vt.get(k).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(w,q,rt,ot,K,Tt,Dt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(q>=0&&q<=w.width-ot&&rt>=0&&rt<=w.height-K){Pt.bindFramebuffer(F.FRAMEBUFFER,Nt);const $t=w.textures[Bt],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,he),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(q,rt,ot,K,kt.convert(ee),kt.convert(qt),0);const Ae=k!==null?Vt.get(k).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Ae);const je=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await YS(F,je,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,he),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(he),F.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(w.image.width*ot),Tt=Math.floor(w.image.height*ot),Dt=q!==null?q.x:0,Bt=q!==null?q.y:0;le.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Dt,Bt,K,Tt),Pt.unbindTexture()};const fl=F.createFramebuffer(),hl=F.createFramebuffer();this.copyTextureToTexture=function(w,q,rt=null,ot=null,K=0,Tt=null){Tt===null&&(K!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Dt,Bt,Nt,$t,ee,qt,he,Ae,je;const Pe=w.isCompressedTexture?w.mipmaps[Tt]:w.image;if(rt!==null)Dt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,ee=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const Dn=Math.pow(2,-K);Dt=Math.floor(Pe.width*Dn),Bt=Math.floor(Pe.height*Dn),w.isDataArrayTexture?Nt=Pe.depth:w.isData3DTexture?Nt=Math.floor(Pe.depth*Dn):Nt=1,$t=0,ee=0,qt=0}ot!==null?(he=ot.x,Ae=ot.y,je=ot.z):(he=0,Ae=0,je=0);const de=kt.convert(q.format),Jt=kt.convert(q.type);let Ye;q.isData3DTexture?(le.setTexture3D(q,0),Ye=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(le.setTexture2DArray(q,0),Ye=F.TEXTURE_2D_ARRAY):(le.setTexture2D(q,0),Ye=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const ye=F.getParameter(F.UNPACK_ROW_LENGTH),Cn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_i=F.getParameter(F.UNPACK_SKIP_PIXELS),Pn=F.getParameter(F.UNPACK_SKIP_ROWS),vn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Ve=w.isDataArrayTexture||w.isData3DTexture,zn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Dn=Vt.get(w),tn=Vt.get(q),bn=Vt.get(Dn.__renderTarget),Ls=Vt.get(tn.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Vn=0;Vn<Nt;Vn++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,K,qt+Vn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Tt,je+Vn)),F.blitFramebuffer($t,ee,Dt,Bt,he,Ae,Dt,Bt,F.DEPTH_BUFFER_BIT,F.NEAREST);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Vt.has(w)){const Dn=Vt.get(w),tn=Vt.get(q);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,fl),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,hl);for(let bn=0;bn<Nt;bn++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,K,qt+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,K),zn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,Tt,je+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,Tt),K!==0?F.blitFramebuffer($t,ee,Dt,Bt,he,Ae,Dt,Bt,F.COLOR_BUFFER_BIT,F.NEAREST):zn?F.copyTexSubImage3D(Ye,Tt,he,Ae,je+bn,$t,ee,Dt,Bt):F.copyTexSubImage2D(Ye,Tt,he,Ae,$t,ee,Dt,Bt);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else zn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ye,Tt,he,Ae,je,Dt,Bt,Nt,de,Jt,Pe.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Ye,Tt,he,Ae,je,Dt,Bt,Nt,de,Pe.data):F.texSubImage3D(Ye,Tt,he,Ae,je,Dt,Bt,Nt,de,Jt,Pe):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,he,Ae,Dt,Bt,de,Jt,Pe.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,he,Ae,Pe.width,Pe.height,de,Pe.data):F.texSubImage2D(F.TEXTURE_2D,Tt,he,Ae,Dt,Bt,de,Jt,Pe);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Cn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_i),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vn),Tt===0&&q.generateMipmaps&&F.generateMipmap(Ye),Pt.unbindTexture()},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&le.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?le.setTextureCube(w,0):w.isData3DTexture?le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?le.setTexture2DArray(w,0):le.setTexture2D(w,0),Pt.unbindTexture()},this.resetState=function(){z=0,H=0,k=null,Pt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}function Qc(r,t=!1){const n=r[0].index!==null,a=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),c={},f={},h=r[0].morphTargetsRelative,m=new Tn;let p=0;for(let g=0;g<r.length;++g){const _=r[g];let v=0;if(n!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in _.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(_.attributes[x]),v++}if(v!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in _.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;f[x]===void 0&&(f[x]=[]),f[x].push(_.morphAttributes[x])}if(t){let x;if(n)x=_.index.count;else if(_.attributes.position!==void 0)x=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;m.addGroup(p,x,g),p+=x}}if(n){let g=0;const _=[];for(let v=0;v<r.length;++v){const x=r[v].index;for(let E=0;E<x.count;++E)_.push(x.getX(E)+g);g+=r[v].attributes.position.count}m.setIndex(_)}for(const g in c){const _=Z_(c[g]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;m.setAttribute(g,_)}for(const g in f){const _=f[g][0].length;if(_===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[g]=[];for(let v=0;v<_;++v){const x=[];for(let T=0;T<f[g].length;++T)x.push(f[g][T][v]);const E=Z_(x);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;m.morphAttributes[g].push(E)}}return m}function Z_(r){let t,n,a,l=-1,c=0;for(let p=0;p<r.length;++p){const g=r[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=g.gpuType),l!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const f=new t(c),h=new oi(f,n,a);let m=0;for(let p=0;p<r.length;++p){const g=r[p];if(g.isInterleavedBufferAttribute){const _=m/n;for(let v=0,x=g.count;v<x;v++)for(let E=0;E<n;E++){const T=g.getComponent(v,E);h.setComponent(v+_,E,T)}}else f.set(g.array,m);m+=g.count*n}return l!==void 0&&(h.gpuType=l),h}const Oi=Math.PI*2;let Jh=91623;const Jc=()=>(Jh=1664525*Jh+1013904223>>>0,Jh/4294967296),re=(r,t)=>r+Jc()*(t-r),_s=Ts.clamp,Xt=(r=0,t=0,n=0)=>new W(r,t,n);function vA(r,t){return Math.sin(r*.063+Math.sin(t*.047)*2.3)*1.6+Math.sin(t*.09+r*.023)*1.3+Math.sin(r*.18+t*.12)*.5}function br(r,t){return-15+vA(r,t)+Math.max(0,Math.abs(r+Math.sin(t*.025)*13)-22)*.085-Math.max(0,-t-110)*.026}const K_=`
float hash21(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float valueNoise(vec2 p){vec2 i=floor(p), f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float caustic(vec2 p,float t){p+=vec2(sin(p.y*.6+t*.37),cos(p.x*.7+t*.29))*.8;float a=sin(p.x*1.9+p.y*.6+t*.52)+sin(p.y*2.1-p.x*.3-t*.41);float b=sin(p.x*2.6-p.y*.8-t*.32)+sin(p.y*2.5+p.x*.6+t*.38);return pow(1.-abs(sin(a+b)),16.);}
`;class xA{scene=new vM;camera;renderer;uniforms={uTime:{value:0}};host;hooks;clock=new OM;frame=0;alive=!0;playing=!1;started=!1;glide=!1;sound=!0;yaw=0;pitch=-.1;targetYaw=0;targetPitch=-.1;keys=new Set;velocity=Xt();move=Xt();forward=Xt();right=Xt();upAxis=Xt(0,1,0);position=Xt(0,3,35);touch={x:0,y:0,z:0};dragging=!1;lastPointer={x:0,y:0};listeners=[];creatures=[];fish;fishData=[];particles;kelpMaterials=[];colliders=[];dummy=new rn;statusAt=0;time=0;pausedTime=0;audioContext=null;master=null;observer;reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(t,n,a={}){if(this.host=t,this.hooks=n,this.camera=new Yn(67,t.clientWidth/t.clientHeight,.12,600),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0),this.renderer=new _A({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.outputColorSpace=si,this.renderer.toneMapping=tv,this.renderer.toneMappingExposure=1.18,this.renderer.setClearColor(676709),t.appendChild(this.renderer.domElement),this.scene.background=new _e(742243),this.scene.fog=new su(742243,.014),a.deferStart)return;const l=new Ev(10019551,1783361,2.2);this.scene.add(l);const c=new E_(14811116,3.2);c.position.set(-35,65,-10),this.scene.add(c);const f=new E_(4770768,1.5);f.position.set(30,18,-60),this.scene.add(f),this.terrain(),this.rocks(),this.plants(),this.surface(),this.life(),this.suspendedParticles(),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.animate(),requestAnimationFrame(()=>n.onReady())}material(t,n="plain",a=.82){const l=new Jo({color:t,roughness:a,metalness:n==="skin"?.05:0});return l.onBeforeCompile=c=>{c.uniforms.uTime=this.uniforms.uTime,c.vertexShader=`varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOceanLocal=position;`),c.vertexShader=c.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 oceanPos=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          oceanPos=instanceMatrix*oceanPos;
        #endif
        vOceanWorld=(modelMatrix*oceanPos).xyz;`),c.fragmentShader=`uniform float uTime; varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+K_+c.fragmentShader;let f="";n==="sand"&&(f="float grain=valueNoise(vOceanWorld.xz*15.);float ripple=sin(vOceanWorld.x*.7+vOceanWorld.z*3.+valueNoise(vOceanWorld.xz*.11)*5.);diffuseColor.rgb*=.82+grain*.22+ripple*.07;"),n==="rock"&&(f="float n=valueNoise(vOceanWorld.xz*1.7+vOceanWorld.y*.8);float layer=sin(vOceanWorld.y*5.+valueNoise(vOceanWorld.xz)*3.);diffuseColor.rgb*=.67+n*.5+layer*.075;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.22,.16),smoothstep(.57,.84,n)*.6);"),n==="skin"&&(f="float blot=valueNoise(vOceanLocal.xz*5.+vOceanLocal.y*2.);float fine=valueNoise(vOceanLocal.xy*48.);float bands=sin(vOceanLocal.x*5.5+vOceanLocal.z*3.+blot*4.);diffuseColor.rgb*=.6+blot*.5+fine*.15;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.42,smoothstep(.5,.9,bands)*.45);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.54,.62,.49),(1.-smoothstep(-.75,.0,vOceanLocal.y))*.65);"),c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${f}`),c.fragmentShader=c.fragmentShader.replace("#include <opaque_fragment>",`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=max(0.,normal.y)*.8+.15;outgoingLight+=vec3(.31,.62,.48)*ca*sunward*.035;
#include <opaque_fragment>`)},l.customProgramCacheKey=()=>n,l}terrain(){const t=new Rs(700,700,180,180);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let l=0;l<n.count;l++)n.setY(l,br(n.getX(l),n.getZ(l)));t.computeVertexNormals();const a=new De(t,this.material(11511685,"sand"));this.scene.add(a)}rocks(){const t=[this.material(8094578,"rock"),this.material(7567721,"rock"),this.material(6454124,"rock")],n=[];for(let l=0;l<5;l++){const c=new Ur(1,3),f=c.attributes.position;for(let h=0;h<f.count;h++){const m=f.getX(h),p=f.getY(h),g=f.getZ(h),_=1+.12*Math.sin(m*8+l)*Math.sin(g*7-p*4)+.055*Math.sin(p*19+m*8);f.setXYZ(h,m*_,p*_,g*_)}c.computeVertexNormals(),n.push(c)}const a=(l,c,f,h,m)=>{const p=new De(n[Math.floor(Jc()*5)],t[Math.floor(Jc()*3)]);p.position.set(l,br(l,c)+h*.15,c),p.scale.set(f,h,m),p.rotation.set(re(-.2,.2),re(0,Oi),re(-.12,.12)),this.scene.add(p),f>3&&this.colliders.push({pos:p.position.clone(),radius:Math.min(f,m)*.88,height:h*.95})};for(let l=0;l<95;l++){const c=re(-205,95),h=(l%2?1:-1)*re(24,65)+Math.sin(c*.025)*8,m=re(3,10);a(h,c,m,re(4,15),m*re(.7,1.5))}a(-23,-16,13,19,15),a(-35,-24,17,24,14),a(34,-50,15,22,17),a(43,-69,18,28,14);for(let l=0;l<210;l++){const c=re(-160,160),f=re(-230,140),h=re(.3,2.8);a(c,f,h,h*re(.4,1),h*re(.6,1.5))}a(-28,-103,8,20,7),a(-3,-103,6,18,7),a(-15,-103,17,4,6)}plantMaterial(t){const n=this.material(t,"plain",.9);n.side=Hn;const a=n.onBeforeCompile;return n.onBeforeCompile=(l,c)=>{a(l,c),l.vertexShader=`attribute float aBend;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("vOceanLocal=position;",`vOceanLocal=position; vec3 ip=vec3(0.);
      #ifdef USE_INSTANCING
      ip=instanceMatrix[3].xyz;
      #endif
      transformed.x+=sin(uTime*.6+ip.x*.3+position.y*.7)*aBend*.35;
      transformed.z+=sin(uTime*.43+ip.z*.4+position.y*.45)*aBend*.25;`),l.vertexShader=`uniform float uTime;
`+l.vertexShader},n.customProgramCacheKey=()=>`plant${t}`,n}plants(){const t=(f,h,m)=>{const p=[],g=[],_=[],v=[];for(let T=0;T<=12;T++){let S=T/12;const y=h*Math.pow(Math.sin(Math.PI*S*.95),.7)+.008;for(let U=-1;U<=1;U+=2)p.push(U*y+Math.sin(S*2)*m,f*S,Math.sin(S*3)*m*.45),g.push((U+1)/2,S),v.push(S*S*f*.3);if(T<12){let U=T*2;_.push(U,U+1,U+2,U+1,U+3,U+2)}}const E=new Tn;return E.setAttribute("position",new He(p,3)),E.setAttribute("uv",new He(g,2)),E.setAttribute("aBend",new He(v,1)),E.setIndex(_),E.computeVertexNormals(),E};for(let f=0;f<3;f++){const h=t(f===2?9:2.5,f===2?.25:.09,.2),m=this.plantMaterial([4352834,6584125,5270332][f]),p=f===2?480:1900,g=new g_(h,m,p);for(let _=0;_<p;_++){let v=re(-110,110),x=re(-220,100);const E=Math.abs(v+Math.sin(x*.035)*8);E<13&&(v+=Math.sign(v||1)*(15-E)),this.dummy.position.set(v,br(v,x)-.1,x),this.dummy.rotation.set(re(-.08,.08),re(0,Oi),0);const T=re(.5,1.7);this.dummy.scale.set(T,T,T),this.dummy.updateMatrix(),g.setMatrixAt(_,this.dummy.matrix)}this.scene.add(g)}const n=[],a=(f,h,m)=>{const p=h.clone().sub(f),g=new Wa(m*.48,m,p.length(),5,1);g.applyQuaternion(new kr().setFromUnitVectors(Xt(0,1,0),p.normalize())),g.translate((f.x+h.x)/2,(f.y+h.y)/2,(f.z+h.z)/2),n.push(g)},l=(f,h,m,p)=>{const g=f.clone().add(Xt(Math.sin(h)*m,Math.cos(h)*m,re(-.13,.13)));a(f,g,p*.025+.014),p>0&&(l(g,h-.43,m*.7,p-1),l(g,h+.4,m*.74,p-1))};l(Xt(),0,1.05,4);const c=Qc(n);if(n.forEach(f=>f.dispose()),c){const f=[this.material(10184030),this.material(9600599),this.material(6454643)];for(let h=0;h<90;h++){const m=new De(c,f[h%3]),p=re(-65,65),g=re(-170,60);m.position.set(p,br(p,g),g),m.rotation.y=re(0,Oi),m.scale.setScalar(re(.6,1.4)),this.scene.add(m)}}}surface(){const t=new Ai({uniforms:{uTime:this.uniforms.uTime},side:Hn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 wp; uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.09+uTime*.25)*.3+sin(p.y*.11-uTime*.3)*.2;wp=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`varying vec3 wp;uniform float uTime;${K_}void main(){float c=caustic(wp.xz*.16,uTime*.7);float n=valueNoise(wp.xz*.025+uTime*.02);vec3 col=mix(vec3(.1,.48,.54),vec3(.55,.86,.81),n);col+=c*.24;float sun=exp(-length(wp.xz-vec2(-38.,-36.))*.014);col+=vec3(.35,.4,.3)*sun;gl_FragColor=vec4(col,.89);}`}),n=new De(new Rs(800,800,55,55),t);n.rotation.x=-Math.PI/2,n.position.y=26,this.scene.add(n);const a=new Ai({uniforms:{uTime:this.uniforms.uTime},transparent:!0,depthWrite:!1,side:Hn,blending:Nr,vertexShader:"varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying vec3 wPos;uniform float uTime;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float vertical=sin(vUv.y*3.14159);float pulse=.78+sin(wPos.x*.14+uTime*.21)*.12;gl_FragColor=vec4(.38,.78,.67,edge*vertical*pulse*.038);}"});for(let l=0;l<30;l++){const c=re(34,54),f=new De(new Wa(re(.3,1.2),re(2,5),c,16,1,!0),a);f.position.set(re(-85,95),26-c*.48,re(-130,55)),f.rotation.z=-.26,f.rotation.x=.13,this.scene.add(f)}}ellipsoid(t,n,a,l,c,f,h,m){const p=new ol(1,32,20);p.scale(f,h,m),p.translate(a,l,c);const g=new De(p,n);return t.add(g),g}tube(t,n,a,l=56,c=12){const f=new RM(t),h=f.computeFrenetFrames(l,!1),m=[],p=[],g=[];for(let v=0;v<=l;v++){const x=v/l,E=f.getPoint(x),T=x*(n.length-1),S=Math.min(Math.floor(T),n.length-2),y=Ts.lerp(n[S],n[S+1],T-S);for(let U=0;U<=c;U++){const L=U/c*Oi,R=E.clone().addScaledVector(h.normals[v],Math.cos(L)*y).addScaledVector(h.binormals[v],Math.sin(L)*y);if(m.push(R.x,R.y,R.z),p.push(U/c,x),v<l&&U<c){const P=v*(c+1)+U,z=P+c+1;g.push(P,P+1,z,z,P+1,z+1)}}}const _=new Tn;return _.setAttribute("position",new He(m,3)),_.setAttribute("uv",new He(p,2)),_.setIndex(g),_.computeVertexNormals(),new De(_,a)}flipper(t,n,a){const l=[],c=[],f=[];for(let g=0;g<=20;g++){const _=g/20,v=Math.max(.015,Math.pow(Math.sin(Math.PI*_),.7)*a);for(let x=0;x<=12;x++){const E=x/12*Oi;if(l.push(-_*_*n*.32+v*Math.cos(E),Math.sin(E)*v*.18,_*n),c.push(x/12,_),g<20&&x<12){const T=g*13+x;f.push(T,T+1,T+12+1,T+1,T+12+2,T+12+1)}}}const p=new Tn;return p.setAttribute("position",new He(l,3)),p.setAttribute("uv",new He(c,2)),p.setIndex(f),p.computeVertexNormals(),new De(p,t)}plesiosaur(t=1){const n=new En,a=this.material(5532e3,"skin",.51),l=[];this.ellipsoid(n,a,0,0,0,2.6,.92,1.24),n.add(this.tube([Xt(1.3,.2),Xt(2.8,.38),Xt(4.3,1.06),Xt(5.8,1.7),Xt(7.1,1.86)],[.76,.46,.32,.25,.22],a)),this.ellipsoid(n,a,7.38,1.88,0,.65,.3,.31),this.ellipsoid(n,a,7.79,1.79,0,.42,.15,.22);const c=new Jo({color:397841,roughness:.12,metalness:.3});for(const h of[-1,1]){this.ellipsoid(n,this.material(9144688),7.37,2.01,h*.262,.11,.095,.039),this.ellipsoid(n,c,7.4,2.014,h*.294,.065,.06,.024);const m=this.tube([Xt(7.34,1.73,h*.265),Xt(7.78,1.72,h*.205),Xt(8.02,1.75,h*.105)],[.012,.012,.006],c,12,4);n.add(m);for(let p=0;p<2;p++){const g=new En;g.position.set(p===0?1.2:-1.65,-.34,h*.85);const _=this.flipper(a,p===0?3.3:2.8,.68);h<0&&(_.rotation.x=Math.PI),g.add(_),g.userData.side=h,g.userData.phase=p*.8,n.add(g),l.push(g)}}const f=new En;return f.position.x=-1.9,f.add(this.tube([Xt(),Xt(-1.7,-.1),Xt(-3.4,-.06),Xt(-4.2,.03)],[.7,.36,.12,.012],a,36)),n.add(f),n.scale.setScalar(t),{group:n,fins:l,tail:f,kind:"plesiosaur",scale:t}}ichthyosaur(t=1){const n=new En,a=this.material(4810096,"skin",.42),l=[];this.ellipsoid(n,a,0,0,0,2.6,.77,.73),n.add(this.tube([Xt(1.5,0),Xt(2.5,-.03),Xt(3.65,-.14)],[.57,.31,.045],a,35));const c=new Jo({color:397843,roughness:.15});for(const m of[-1,1]){this.ellipsoid(n,c,1.75,.27,m*.45,.12,.13,.06);const p=new En;p.position.set(.9,-.25,m*.58);const g=this.flipper(a,1.7,.4);m<0&&(g.rotation.x=Math.PI),p.add(g),p.userData.side=m,p.userData.phase=0,n.add(p),l.push(p)}const f=this.flipper(a,1.3,.6);f.rotation.x=-Math.PI/2,f.position.set(-.35,.55,0),n.add(f);const h=new En;h.position.x=-1.9,h.add(this.tube([Xt(),Xt(-1.3,0),Xt(-2.15,0)],[.5,.23,.06],a,24));for(const m of[-1,1]){const p=this.flipper(a,1.35,.42);p.position.x=-2,p.rotation.x=m*Math.PI/2,h.add(p)}return n.add(h),n.scale.setScalar(t),{group:n,fins:l,tail:h,kind:"ichthyosaur",scale:t}}spinosaurus(t=1){const n=new En,a=this.material(6777171,"skin",.7),l=[];this.ellipsoid(n,a,0,0,0,2.4,1.1,.87),n.add(this.tube([Xt(1.5,.3),Xt(2.6,.75),Xt(3.4,.8)],[.66,.43,.36],a,32)),this.ellipsoid(n,a,3.8,.75,0,.94,.39,.37),this.ellipsoid(n,a,4.55,.62,0,.85,.22,.23);const c=[],f=[],h=[];for(let v=0;v<=28;v++){const x=v/28,E=-2.25+x*4.3,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);if(c.push(E,.4,0,E,T,0),h.push(x,0,x,1),v<28){const S=v*2;f.push(S,S+1,S+2,S+1,S+3,S+2)}}const m=new Tn;m.setAttribute("position",new He(c,3)),m.setAttribute("uv",new He(h,2)),m.setIndex(f),m.computeVertexNormals();const p=this.material(6705990,"skin");p.side=Hn,n.add(new De(m,p));for(let v=0;v<15;v++){const x=v/14,E=-2.2+x*4.2,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);n.add(this.tube([Xt(E,.6,.02),Xt(E-.1,T*.6,.02),Xt(E,T,.02)],[.045,.031,.012],a,8,5))}const g=new Jo({color:1382674,roughness:.3});for(const v of[-1,1]){this.ellipsoid(n,g,3.51,.98,v*.326,.07,.07,.034);const x=new En;x.position.set(-1.25,-.5,v*.58),x.add(this.tube([Xt(),Xt(-.2,-.85,v*.5),Xt(.15,-1.2,v*.6),Xt(-.45,-1.35,v*.76)],[.45,.29,.15,.03],a,24)),n.add(x),x.userData.side=v,x.userData.phase=1,l.push(x);const E=new En;E.position.set(1.3,-.45,v*.55),E.add(this.tube([Xt(),Xt(.13,-.56,v*.4),Xt(.8,-.66,v*.5)],[.21,.12,.04],a,20)),n.add(E),E.userData.side=v,E.userData.phase=0,l.push(E)}const _=new En;return _.position.x=-1.8,_.add(this.tube([Xt(),Xt(-1.7,0),Xt(-3.5,.08),Xt(-5.5,0)],[.7,.48,.27,.012],a,48)),n.add(_),n.scale.setScalar(t),{group:n,fins:l,tail:_,kind:"spinosaur",scale:t}}ammonite(){const t=new En,n=this.material(12101252,"plain",.65),a=[],l=[],c=100;for(let _=0;_<=c;_++){const v=_/c,x=v*Oi*2.3,E=.06+Math.pow(v,1.65)*.85;a.push(Xt(Math.cos(x)*E,Math.sin(x)*E,0)),l.push(.015+Math.pow(v,1.6)*.24)}t.add(this.tube(a,l,n,150,12));const f=a[a.length-1],h=this.material(9600610);for(let _=0;_<7;_++){const v=_/7*Oi;t.add(this.tube([f.clone(),f.clone().add(Xt(.45,Math.sin(v)*.16,Math.cos(v)*.16)),f.clone().add(Xt(.9,Math.sin(v)*.35,Math.cos(v)*.3)),f.clone().add(Xt(1.02,Math.sin(v)*.24,Math.cos(v)*.3))],[.037,.033,.021,.001],h,16,5))}const m=this.material(7826774);for(let _=30;_<c;_+=3){const v=a[_],x=l[_]*1.025,E=new De(new ru(x,.008,4,12),m);E.position.copy(v);const T=a[Math.min(_+1,c)].clone().sub(a[Math.max(0,_-1)]).normalize();E.quaternion.setFromUnitVectors(Xt(0,0,1),T),t.add(E)}const p=new En,g=new Map;for(const _ of t.children){const v=_;v.updateMatrix();const x=v.geometry.clone().applyMatrix4(v.matrix),E=v.material;g.has(E)||g.set(E,[]),g.get(E).push(x)}for(const[_,v]of g){const x=Qc(v);x&&p.add(new De(x,_)),v.forEach(E=>E.dispose())}return t.children.forEach(_=>_.geometry.dispose()),p}life(){const t=(h,m,p,g,_)=>{const v={...h,center:m,radius:p,speed:g,phase:_};this.creatures.push(v),this.scene.add(v.group)};t(this.plesiosaur(1.15),Xt(28,7,-8),28,.017,Math.PI*.72),t(this.plesiosaur(.78),Xt(-48,12,-108),38,.014,1.8),t(this.ichthyosaur(.9),Xt(30,2,-58),38,.06,.8),t(this.ichthyosaur(.67),Xt(26,5,-62),38,.06,.96),t(this.spinosaurus(1.2),Xt(-22,21,-45),48,.012,-.5),t(this.plesiosaur(1.35),Xt(55,-2,-180),40,.015,2.5),t(this.ichthyosaur(1.1),Xt(-80,4,28),48,.048,.5);const n=this.ammonite();for(let h=0;h<13;h++){const m=h===0?n:n.clone(),p=re(-42,42),g=re(-110,22);m.position.set(p,br(p,g)+re(3,8),g),m.rotation.set(re(-.2,.2),re(0,Oi),re(-.1,.1)),m.scale.setScalar(re(.55,1.1)),m.userData.origin=m.position.clone(),m.userData.phase=Jc()*Oi,m.userData.ammonite=!0,this.scene.add(m)}const a=new ol(1,10,6);a.scale(.5,.16,.09);const l=new np(.23,.35,3);l.rotateZ(Math.PI/2),l.scale(1,1,.25),l.translate(-.53,0,0);const c=Qc([a,l]);this.fish=new g_(c,this.material(10268315,"plain",.45),350),this.scene.add(this.fish);const f=[Xt(-14,5,-31),Xt(38,11,-35),Xt(0,16,-90),Xt(-48,1,-120),Xt(30,-3,25)];for(let h=0;h<350;h++)this.fishData.push({center:f[h%5].clone().add(Xt(re(-6,6),re(-3,3),re(-6,6))),phase:re(0,Oi),radius:re(3,8),speed:re(.11,.2),size:re(.35,1.05)})}suspendedParticles(){const n=new Float32Array(5400);for(let c=0;c<1800;c++)n[c*3]=re(-110,110),n[c*3+1]=re(-16,26),n[c*3+2]=re(-110,110);const a=new Tn;a.setAttribute("position",new oi(n,3));const l=new Ai({uniforms:{uTime:this.uniforms.uTime,uPixelRatio:{value:this.renderer.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Nr,vertexShader:"uniform float uTime;uniform float uPixelRatio;varying float a;void main(){vec3 p=position;p.x+=sin(uTime*.14+position.z)*.22;p.y+=sin(uTime*.18+position.x)*.25;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));}"});this.particles=new bM(a,l),this.scene.add(this.particles)}bind(){const t=(a,l,c)=>{a.addEventListener(l,c),this.listeners.push(()=>a.removeEventListener(l,c))};t(window,"keydown",(a=>{this.playing&&(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","ControlLeft"].includes(a.code)&&(a.preventDefault(),this.keys.add(a.code)),a.code==="Escape"&&this.pause(),a.code==="KeyH"&&!a.repeat&&this.hooks.onToggleUI(),a.code==="KeyG"&&!a.repeat&&(this.setGlide(!this.glide),this.hooks.onGlide(this.glide)))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>{this.keys.clear(),this.playing&&this.pause()})),t(document,"visibilitychange",(()=>{document.hidden&&this.playing&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing&&(this.dragging=!0,this.lastPointer={x:a.clientX,y:a.clientY},n.setPointerCapture(a.pointerId),a.pointerType==="mouse"&&document.pointerLockElement!==n))try{const l=n.requestPointerLock?.();l&&typeof l.catch=="function"&&l.catch(()=>{})}catch{}})),t(n,"pointerup",(()=>{this.dragging=!1})),t(n,"pointercancel",(()=>{this.dragging=!1})),t(document,"pointermove",(a=>{if(!this.playing)return;const l=document.pointerLockElement===n;if(!l&&!this.dragging)return;const c=l?a.movementX:a.clientX-this.lastPointer.x,f=l?a.movementY:a.clientY-this.lastPointer.y;this.targetYaw-=c*.0021,this.targetPitch=_s(this.targetPitch-f*.0021,-1.47,1.47),this.lastPointer={x:a.clientX,y:a.clientY}})),t(document,"pointerlockchange",(()=>{!document.pointerLockElement&&this.playing&&!this.dragging&&this.pause()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.pause(),this.hooks.onError("The graphics connection was interrupted. Refresh to return to the ocean.")}))}start(){if(this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.initAudio(),this.sound&&this.audioContext?.resume().catch(()=>{}),window.matchMedia("(pointer:fine)").matches)try{const t=this.renderer.domElement.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}pause(){this.playing&&(this.playing=!1,this.glide=!1,this.keys.clear(),this.touch={x:0,y:0,z:0},this.velocity.set(0,0,0),this.dragging=!1,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.hooks.onPause())}reset(){this.position.set(0,3,35),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=-.1,this.velocity.set(0,0,0),this.glide=!1,this.time=0}setGlide(t){this.glide=t}touchMove(t,n){this.touch.x=_s(t,-1,1),this.touch.y=_s(n,-1,1)}touchVertical(t){this.touch.z=t}setSound(t){this.sound=t,this.master&&this.audioContext&&this.master.gain.setTargetAtTime(t?.35:0,this.audioContext.currentTime,.3),t&&this.playing&&this.audioContext?.resume().catch(()=>{})}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.35:0,this.master.connect(n.destination);const a=n.createBuffer(2,n.sampleRate*8,n.sampleRate);for(let _=0;_<2;_++){let v=0;const x=a.getChannelData(_);for(let E=0;E<x.length;E++)v=(v+(Math.random()*2-1)*.03)/1.018,x[E]=v*4}const l=n.createBufferSource();l.buffer=a,l.loop=!0;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.45;const f=n.createGain();f.gain.value=.42,l.connect(c),c.connect(f),f.connect(this.master),l.start();const h=n.createOscillator(),m=n.createGain();h.frequency.value=.07,m.gain.value=160,h.connect(m),m.connect(c.frequency),h.start();const p=n.createOscillator(),g=n.createGain();p.type="sine",p.frequency.value=47,g.gain.value=.055,p.connect(g),g.connect(this.master),p.start()}catch{}}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);(this.playing||!this.started)&&(this.time+=t);const n=this.time;if(this.uniforms.uTime.value=n,this.playing){const f=(..._)=>_.some(v=>this.keys.has(v))?1:0;this.yaw=Ts.lerp(this.yaw,this.targetYaw,1-Math.exp(-14*t)),this.pitch=Ts.lerp(this.pitch,this.targetPitch,1-Math.exp(-14*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize();const h=f("KeyW","ArrowUp")-f("KeyS","ArrowDown")+(this.glide?.52:0)+this.touch.y,m=f("KeyD","ArrowRight")-f("KeyA","ArrowLeft")+this.touch.x,p=f("KeyE","Space")-f("KeyQ","ControlLeft")+this.touch.z;this.move.copy(this.forward).multiplyScalar(h).addScaledVector(this.right,m),this.move.y+=p,this.move.lengthSq()>1&&this.move.normalize();const g=f("ShiftLeft","ShiftRight")?8.2:3.8;this.move.multiplyScalar(g),this.velocity.lerp(this.move,1-Math.exp(-2.1*t)),this.position.addScaledVector(this.velocity,t),this.position.x=_s(this.position.x,-245,245),this.position.z=_s(this.position.z,-265,245),this.position.y=_s(this.position.y,br(this.position.x,this.position.z)+1.8,24.2);for(const _ of this.colliders){if(Math.abs(this.position.y-_.pos.y)>_.height+1)continue;const v=this.position.x-_.pos.x,x=this.position.z-_.pos.z,E=Math.sqrt(v*v+x*x);if(E<_.radius+.85&&E>.001){const T=_.radius+.85-E;this.position.x+=v/E*T,this.position.z+=x/E*T}}this.camera.position.copy(this.position),this.reduced||(this.camera.position.y+=Math.sin(n*.9)*.026)}else!this.started&&!this.reduced&&this.camera.rotation.set(-.09+Math.sin(n*.1)*.018,Math.sin(n*.08)*.025,0);for(const f of this.creatures){const h=n*f.speed+f.phase,m=f.center.x+Math.cos(h)*f.radius,p=f.center.z+Math.sin(h)*f.radius*.58;f.group.position.set(m,f.center.y+Math.sin(n*.3+f.phase)*.35,p),f.group.rotation.y=Math.atan2(-Math.cos(h)*.58,-Math.sin(h)),f.group.rotation.z=Math.sin(n*.3+f.phase)*.025,f.fins.forEach(g=>{g.rotation.x=Math.sin(n*1.25+(g.userData.phase||0)+f.phase)*.22*(g.userData.side||1),g.rotation.z=Math.sin(n*1.25+(g.userData.phase||0)+f.phase+.7)*.07}),f.tail.rotation.y=Math.sin(n*(f.kind==="ichthyosaur"?3:1.3)+f.phase)*(f.kind==="ichthyosaur"?.22:.11)}for(let f=0;f<this.fishData.length;f++){const h=this.fishData[f],m=n*h.speed+h.phase;this.dummy.position.set(h.center.x+Math.cos(m)*h.radius,h.center.y+Math.sin(m*2)*.7,h.center.z+Math.sin(m)*h.radius*.5),this.dummy.rotation.set(0,Math.atan2(-Math.cos(m)*.5,-Math.sin(m)),Math.cos(m*2)*.035),this.dummy.scale.set(h.size,h.size,h.size),this.dummy.updateMatrix(),this.fish.setMatrixAt(f,this.dummy.matrix)}this.fish.instanceMatrix.needsUpdate=!0;for(const f of this.scene.children)f.userData.ammonite&&(f.position.y=f.userData.origin.y+Math.sin(n*.28+f.userData.phase)*.35,f.rotation.z=Math.sin(n*.23+f.userData.phase)*.09);this.particles.position.set(Math.floor(this.position.x/80)*80,0,Math.floor(this.position.z/80)*80);const a=this.scene.fog,l=_s((-this.position.z-75)/160,0,1);a.density=.013+l*.006;const c=new _e(742243).lerp(new _e(404547),l*.75);a.color.copy(c),this.scene.background.copy(c),n-this.statusAt>.25&&(this.statusAt=n,this.hooks.onStatus(26-this.position.y,this.position.z<-130?"The blue beyond":this.position.z<-65?"The ancient reef":Math.abs(this.position.x)>40?"The underwater forest":"The sunlit shallows")),this.renderer.render(this.scene,this.camera)};dispose(){this.alive=!1,cancelAnimationFrame(this.frame),this.listeners.forEach(a=>a()),this.observer?.disconnect(),this.audioContext?.close().catch(()=>{});const t=new Set,n=new Set;this.scene.traverse(a=>{const l=a;l.geometry&&t.add(l.geometry),l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(f=>n.add(f))}),t.forEach(a=>a.dispose()),n.forEach(a=>a.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}}function yA(r,t){const n=r.createBuffer(1,r.sampleRate*4,r.sampleRate),a=n.getChannelData(0);for(let _=0;_<a.length;_++)a[_]=Math.random()*2-1;const l=r.createBufferSource();l.buffer=n,l.loop=!0;const c=r.createBiquadFilter();c.type="lowpass",c.frequency.value=1800;const f=r.createBiquadFilter();f.type="highpass",f.frequency.value=180;const h=r.createGain();h.gain.value=.24;const m=r.createOscillator();m.frequency.value=.22;const p=r.createGain();p.gain.value=.17,m.connect(p).connect(h.gain),l.connect(c).connect(f).connect(h).connect(t);const g=r.createAnalyser();return g.fftSize=2048,t.connect(g).connect(r.destination),l.start(),m.start(),g}function SA(r,t){for(const[n,a]of[[0,660],[.2,880]]){const l=r.createOscillator(),c=r.createGain(),f=r.currentTime+n;l.frequency.value=a,c.gain.setValueAtTime(0,f),c.gain.linearRampToValueAtTime(.18,f+.015),c.gain.exponentialRampToValueAtTime(.001,f+.18),l.connect(c).connect(t),l.start(f),l.stop(f+.2),l.onended=()=>{l.disconnect(),c.disconnect()}}}const MA=""+new URL("underwater-ambience-CTuF1-BE.mp3",import.meta.url).href;class EA{constructor(t,n){this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0,this.gain.connect(n)}buffer=null;loading=null;source=null;gain;generation=0;disposed=!1;abort=new AbortController;async start(){if(this.disposed||this.source)return;const t=this.generation;if(this.buffer||(this.loading??=fetch(MA,{signal:this.abort.signal}).then(a=>{if(!a.ok)throw new Error(`Music download failed: ${a.status}`);return a.arrayBuffer()}).then(a=>this.ctx.decodeAudioData(a)).catch(a=>{throw this.loading=null,a}),this.buffer=await this.loading),this.disposed||t!==this.generation||this.source||this.ctx.state==="closed")return;const n=this.ctx.createBufferSource();n.buffer=this.buffer,n.loop=!0,n.connect(this.gain),this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.65,this.ctx.currentTime+1.5),n.start(),this.source=n}reset(){this.generation++,this.source?.stop(),this.source?.disconnect(),this.source=null}dispose(){this.disposed=!0,this.abort.abort(),this.reset(),this.gain.disconnect()}}const Fi=4,TA={x:0,y:3,z:-12},nu={x:0,y:2,z:-112},ll={x:32,y:3,z:-12},Lr={stone:{name:"Limestone",short:"Stone",description:"Salvage. Safe to swap for the relic."},wood:{name:"Driftwood",short:"Wood",description:"Salvage. Safe to swap for the relic."},flare:{name:"Signal flare",short:"Flare",description:"R · Deploy a 12-second distraction."},air:{name:"Air reserve",short:"Air",description:"R · Restore up to 60 seconds of air."},bandage:{name:"Sealant kit",short:"Sealant",description:"R · Repair 45 suit integrity."},relic:{name:"Ammonite relic",short:"Relic",description:"Carry this to the extraction pool."}},Hr=new Set,Ya=(r,t,n,a)=>{for(let l=r;l<=t;l++)for(let c=n;c<=a;c++)Hr.add(`${l},${c}`)};Ya(8,14,1,5);Ya(10,12,5,11);Ya(4,18,11,24);Ya(10,12,24,26);Ya(8,14,26,30);for(let r=9;r<=12;r++)for(let t=15;t<=20;t++)Hr.delete(`${r},${t}`);Ya(19,19,4,20);Ya(18,19,20,21);Ya(17,21,1,4);const Ga=(r,t)=>({x:(r-11)*Fi,y:3,z:-t*Fi}),wr=r=>({col:Math.round(r.x/Fi)+11,row:Math.round(-r.z/Fi)}),ai=(r,t)=>Math.hypot(r.x-t.x,r.y-t.y,r.z-t.z);function kd(r,t){return Hr.has(`${Math.round(r/Fi)+11},${Math.round(-t/Fi)}`)}function bA(r,t=.48){if(r.y<.65||r.y>7.1)return!1;for(let n=0;n<8;n++)if(!kd(r.x+Math.cos(n*Math.PI/4)*t,r.z+Math.sin(n*Math.PI/4)*t))return!1;return kd(r.x,r.z)}function Dv(r,t,n,a,l=.48){const c=Math.max(1,Math.ceil(Math.hypot(t,n,a)/.25));for(let f=0;f<c;f++)for(const[h,m]of[["x",t],["y",n],["z",a]]){const p={...r,[h]:r[h]+m/c};bA(p,l)&&(r[h]=p[h])}}function Xc(r,t){const n=Math.ceil(ai(r,t)/.4);for(let a=0;a<=n;a++){const l=n?a/n:0;if(!kd(r.x+(t.x-r.x)*l,r.z+(t.z-r.z)*l))return!1}return!0}function iu(r,t){return r>=4&&r<=18&&t>=12&&t<=28&&Hr.has(`${r},${t}`)}function AA(r,t){const n=wr(r),a=wr(t),l=`${n.col},${n.row}`,c=`${a.col},${a.row}`;if(!iu(a.col,a.row))return[];const f=[l],h=new Map([[l,null]]);for(let g=0;g<f.length;g++){const _=f[g];if(_===c)break;const[v,x]=_.split(",").map(Number);for(const[E,T]of[[1,0],[-1,0],[0,1],[0,-1]]){const S=`${v+E},${x+T}`;iu(v+E,x+T)&&!h.has(S)&&(h.set(S,_),f.push(S))}}if(!h.has(c))return[];const m=[];let p=c;for(;p&&p!==l;){const[g,_]=p.split(",").map(Number);m.unshift(Ga(g,_)),p=h.get(p)}return m}const $h=(r,t,n,a)=>({yaw:r-n*.0021,pitch:Math.max(-1.4,Math.min(1.4,t-a*.0021))});function RA(r,t,n){if(n<=0)return 0;const a=Math.max(0,Math.min(1,(r-t)/n)),l=.14;return a<l?-(l-a)/l:a>1-l?(a-(1-l))/l:0}class Q_{position={...TA};health=100;air=240;elapsed=0;stamina=100;torch=!0;inventory=["stone","wood","flare","air","bandage"];selected=0;pickups=[{id:1,item:"relic",position:{...nu}},{id:2,item:"flare",position:{x:-20,y:2,z:-56}}];nextId=3;pending=null;outcome="playing";reason="";notice="Follow the turquoise markers into the cave.";noticeUntil=7;predator={position:Ga(16,19),state:"patrol",timer:0,lost:0,lastKnown:Ga(16,19),waypoint:0,bite:0,heading:0};decoy=null;patrol=[Ga(16,22),Ga(6,22),Ga(6,13),Ga(16,13)];get hasRelic(){return this.inventory.includes("relic")}say(t){this.notice=t,this.noticeUntil=this.elapsed+4.5}nearest(){return this.pickups.filter(t=>ai(t.position,this.position)<3.2&&Xc(this.position,t.position)).sort((t,n)=>ai(t.position,this.position)-ai(n.position,this.position))[0]}interact(){if(this.outcome!=="playing")return;if(ai(this.position,ll)<4){this.hasRelic?(this.outcome="won",this.reason="Relic secured. You made it back to the light."):this.say("Extraction needs the ammonite relic. Follow the turquoise markers.");return}const t=this.pending===null?this.nearest():this.pickups.find(l=>l.id===this.pending);if(!t||ai(t.position,this.position)>3.2||!Xc(this.position,t.position)){this.pending=null;return}let n=this.inventory.indexOf(null);if(n<0&&this.pending===null){this.pending=t.id,this.say("All five slots are full. Choose 1–5, then E to swap.");return}n<0&&(n=this.selected);const a=this.inventory[n];this.inventory[n]=t.item,this.selected=n,this.pickups=this.pickups.filter(l=>l.id!==t.id),a&&this.pickups.push({id:this.nextId++,item:a,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.pending=null,this.say(t.item==="relic"?"Relic recovered! Follow the amber markers to extraction.":`${Lr[t.item].name} collected.`),t.item==="relic"&&(this.predator.state="alert",this.predator.timer=0,this.predator.lastKnown={...this.position})}drop(){const t=this.inventory[this.selected];t&&(this.pickups.push({id:this.nextId++,item:t,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.inventory[this.selected]=null,this.pending=null,this.say(`${Lr[t].name} dropped. You can pick it up again.`))}use(){const t=this.inventory[this.selected];if(t==="air"){if(this.air>=240){this.say("Air is already full.");return}this.air=Math.min(240,this.air+60),this.say("Air reserve connected.")}else if(t==="bandage"){if(this.health>=100){this.say("Suit integrity is already full.");return}this.health=Math.min(100,this.health+45),this.say("Suit repaired.")}else if(t==="flare")this.decoy={position:{...this.position},until:this.elapsed+12},this.predator.state="search",this.predator.timer=0,this.predator.lastKnown={...this.position},this.say("Flare deployed. Move away while it investigates.");else{this.say(t?Lr[t].description:"This slot is empty.");return}this.inventory[this.selected]=null,this.pending=null}update(t,n=!1){if(this.outcome!=="playing")return;if(t=Math.min(t,.05),this.elapsed+=t,this.air=Math.max(0,this.air-t),this.stamina=Math.max(0,Math.min(100,this.stamina+(n?-18:17)*t)),this.air<=0){this.outcome="lost",this.reason="Your air ran out. Use the reserve earlier or take a shorter route.";return}this.pending!==null&&!this.pickups.some(T=>T.id===this.pending&&ai(T.position,this.position)<3.2)&&(this.pending=null);const a=this.predator,l=ai(a.position,this.position),c=Xc(a.position,this.position),f=c&&(l<4.5||l<(this.torch?16:n?13:8)),h=!iu(wr(this.position).col,wr(this.position).row);a.timer+=t,a.bite=Math.max(0,a.bite-t),this.decoy&&this.elapsed>=this.decoy.until&&(this.decoy=null),this.decoy&&l>4.5?(a.state="search",a.timer=0,a.lastKnown={...this.decoy.position}):a.state==="patrol"&&f&&!h?(a.state="alert",a.timer=0,a.lastKnown={...this.position}):a.state==="alert"?(f&&!h&&(a.lastKnown={...this.position}),a.timer>1.6&&(a.state=f&&!h?"chase":"search",a.timer=0,a.lost=0)):a.state==="chase"?(f&&!h?(a.lastKnown={...this.position},a.lost=0):a.lost+=t,a.lost>2.5&&(a.state="search",a.timer=0)):a.state==="search"&&(f&&!h?(a.state="chase",a.timer=0,a.lost=0):a.timer>7&&(a.state="patrol",a.timer=0));const m=a.state==="patrol"?this.patrol[a.waypoint]:a.lastKnown;a.state==="patrol"&&ai(a.position,m)<1.1&&(a.waypoint=(a.waypoint+1)%this.patrol.length);const g=AA(a.position,m)[0]||(Xc(a.position,m)&&iu(wr(m).col,wr(m).row)?m:a.position),_=g.x-a.position.x,v=g.z-a.position.z,x=Math.hypot(_,v),E=a.state==="chase"?3.4:a.state==="alert"?.7:1.8;x>.05&&(a.heading=Math.atan2(-v,_),Dv(a.position,_/x*Math.min(x,E*t),0,v/x*Math.min(x,E*t),1.3)),a.position.y+=((a.state==="chase"?Math.max(1.2,Math.min(6.2,this.position.y)):3)-a.position.y)*Math.min(1,t*2),a.state==="chase"&&!h&&c&&ai(a.position,this.position)<3.2&&a.bite<=0&&(this.health=Math.max(0,this.health-25),a.bite=1.7,this.say("Suit breached! Sprint to cover or deploy a flare."),this.health<=0&&(this.outcome="lost",this.reason="The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe."))}}const Wc=(r=0,t=0,n=0)=>new W(r,t,n);class wA extends xA{audioNotice="";audioProbe=null;audioTestTimer=0;backgroundMusic=null;mission=new Q_;ui;error="";pointerLocked=!1;everLocked=!1;lastSent=0;fallbackTurn=0;torchLight=new S_(14285285,95,29,.48,.7,1.15);beam;guardian;pickupMeshes=new Map;decoyMesh;constructor(t,n){super(t,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:!0}),this.ui=n,this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.pitch=this.targetPitch=0,this.scene.background=new _e(200725),this.scene.fog=new su(200725,.065),this.camera.far=110,this.camera.updateProjectionMatrix(),this.renderer.toneMappingExposure=1.25,this.scene.add(new Ev(5932690,1320223,.32)),this.buildCave(),this.buildLights(),this.guardian=this.ichthyosaur(.9),this.scene.add(this.guardian.group);const a=new Ha({color:14722930});for(const f of[-1,1])this.ellipsoid(this.guardian.group,a,1.8,.27,f*.5,.1,.1,.04);this.suspendedParticles();const l=this.particles.geometry.attributes.position;for(let f=0;f<l.count;f++)l.setXYZ(f,Math.sin(f*78.23)*37,1+f%71/10,-(f*13.23)%122);this.particles.geometry.computeBoundingSphere();const c=this.particles.material;c.uniforms.uTorch={value:1},c.vertexShader=`uniform float uTorch;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;","float cone=1.-smoothstep(.28,.55,length(mv.xy)/max(.1,-mv.z));a=clamp(1.-length(mv.xyz)/23.,0.,1.)*(.025+cone*.38*uTorch);"),this.decoyMesh=new De(new Ur(.18,1),new Ha({color:16740416})),this.decoyMesh.add(new Wh(16738353,9,10)),this.scene.add(this.decoyMesh),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.syncPickups(),this.animate(),this.publish()}buildCave(){const t=this.material(7634545,"sand"),n=this.material(5795945,"rock"),a=this.material(4610139,"rock"),l=[],c=[],f=[],h=[];for(const g of Hr){const[_,v]=g.split(",").map(Number),x=Ga(_,v),E=new Rs(Fi,Fi,2,2);if(E.rotateX(-Math.PI/2),E.translate(x.x,0,x.z),l.push(E),!(_===19&&v===3)){const T=E.clone();T.rotateZ(Math.PI),T.translate(x.x*2,8,0),c.push(T)}for(const[T,S]of[[1,0],[-1,0],[0,1],[0,-1]])if(!Hr.has(`${_+T},${v+S}`)){const y=new qr(T?1:Fi+.05,8.5,S?1:Fi+.05);y.translate(x.x+T*2.5,4,x.z-S*2.5),f.push(y);for(let U=0;U<3;U++){const L=new Ur(1,1);L.scale(T?.7:1.7,1.3+U%2*.5,S?.7:1.7),L.translate(x.x+T*2.45,1.3+U*2.5,x.z-S*2.45),h.push(L)}}}for(const[g,_]of[[l,t],[c,a],[f,n],[h,n]]){const v=Qc(g);v&&this.scene.add(new De(v,_)),g.forEach(x=>x.dispose())}const m=this.material(10459770,"rock");for(let g=0;g<6;g++)for(const _ of[-1,1])this.scene.add(this.tube([Wc(-3+g*.75,.25,-113),Wc(-3+g*.75,1.3,-113+_*1.2),Wc(-3+g*.75,.3,-113+_*2.2)],[.12,.09,.025],m,12,5));const p=new De(new Wa(1.1,1.5,1.2,7),n);p.position.set(nu.x,.6,nu.z),this.scene.add(p)}buildLights(){this.scene.add(this.camera),this.torchLight.position.set(.25,-.15,-.2),this.torchLight.target.position.set(0,0,-15),this.camera.add(this.torchLight,this.torchLight.target);const t=new Wa(.025,4.8,17,24,1,!0);t.rotateX(Math.PI/2),this.beam=new De(t,new Ha({color:9095596,transparent:!0,opacity:.012,depthWrite:!1,side:Hn,blending:Nr})),this.beam.position.set(.2,-.18,-8.6),this.camera.add(this.beam);const n=(h,m,p)=>{const g=new De(new ol(.12,8,6),new Ha({color:p}));g.position.set(h,.75,m),g.add(new Wh(p,1.4,6,1.3)),this.scene.add(g)};for(const[h,m]of[[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])n(h,m,7005391);for(const[h,m]of[[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])n(h,m,15972194);const a=new En;a.position.set(ll.x,.65,ll.z);const l=new De(new ru(1.6,.05,8,48),new Ha({color:12189660}));l.rotation.x=Math.PI/2,a.add(l),this.scene.add(a);const c=new S_(10216414,120,18,.65,1,1);c.position.set(32,11,-12),c.target.position.set(32,0,-12),this.scene.add(c,c.target);const f=new De(new Wa(.9,2.6,8,24,1,!0),new Ha({color:10281428,transparent:!0,opacity:.065,depthWrite:!1,side:Hn,blending:Nr}));f.position.set(32,4,-12),this.scene.add(f)}syncPickups(){for(const[t,n]of this.pickupMeshes)this.mission.pickups.some(a=>a.id===t)||(this.scene.remove(n),n.traverse(a=>{a instanceof De&&(a.geometry.dispose(),a.material.dispose())}),this.pickupMeshes.delete(t));for(const t of this.mission.pickups){let n=this.pickupMeshes.get(t.id);if(!n){n=new En;const a=new Jo({color:t.item==="relic"?14857822:8571063,emissive:t.item==="relic"?7027719:1391670,emissiveIntensity:.7,metalness:.4,roughness:.45});if(t.item==="relic"){const l=[],c=[];for(let f=0;f<=72;f++){const h=f/72,m=h*Math.PI*4.5,p=.03+h*h*.62;l.push(Wc(Math.cos(m)*p,Math.sin(m)*p,0)),c.push(.01+h*.12)}n.add(this.tube(l,c,a,90,8)),n.add(new Wh(15711080,3.5,7))}else n.add(new De(new Ur(.3,1),a));this.scene.add(n),this.pickupMeshes.set(t.id,n)}n.position.set(t.position.x,t.position.y+Math.sin(this.time*1.7+t.id)*.12,t.position.z),n.rotation.y=this.time*.45}}publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice})}bind(){const t=(n,a,l,c)=>{n.addEventListener(a,l,c),this.listeners.push(()=>n.removeEventListener(a,l,c))};t(window,"keydown",(n=>{this.playing&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),!n.repeat&&(n.code==="Escape"&&(this.mission.pending!==null?(this.mission.pending=null,this.publish()):this.pause()),/^Digit[1-5]$/.test(n.code)&&(this.mission.selected=Number(n.code.slice(-1))-1),n.code==="KeyE"&&this.mission.interact(),n.code==="KeyF"&&(this.mission.torch=!this.mission.torch),n.code==="KeyR"&&this.mission.use(),n.code==="KeyG"&&this.mission.drop(),n.code==="KeyM"&&this.setSound(!this.sound),this.publish()))})),t(window,"keyup",(n=>{this.keys.delete(n.code)})),t(window,"blur",(()=>this.pause())),t(document,"visibilitychange",(()=>{document.hidden&&this.pause()})),t(document,"pointermove",(n=>{if(!this.playing)return;const a=document.pointerLockElement===this.renderer.domElement;if(!a&&n.target!==this.renderer.domElement)return;if(a)this.fallbackTurn=0;else{const c=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=RA(n.clientX,c.left,c.width)}const l=$h(this.targetYaw,this.targetPitch,n.movementX,n.movementY);this.targetYaw=l.yaw,this.targetPitch=l.pitch})),t(window,"mouseout",(n=>{n.relatedTarget||(this.fallbackTurn=0)})),t(this.renderer.domElement,"wheel",(n=>{if(!this.playing)return;n.preventDefault();const a=n.deltaMode===1?16:n.deltaMode===2?200:1,l=$h(this.targetYaw,this.targetPitch,n.deltaX*a,n.deltaY*a);this.targetYaw=l.yaw,this.targetPitch=l.pitch}),{passive:!1}),t(document,"pointerlockchange",(()=>{const n=this.pointerLocked;this.pointerLocked=document.pointerLockElement===this.renderer.domElement,this.pointerLocked&&(this.everLocked=!0,this.fallbackTurn=0),n&&!this.pointerLocked&&this.pause(),this.publish()})),t(document,"pointerlockerror",(()=>{this.mission.say("360° free look active. Hold the pointer at an edge to keep turning."),this.publish()})),t(this.renderer.domElement,"webglcontextlost",(n=>{n.preventDefault(),this.error="The graphics connection was lost. Reload the page to restart the dive.",this.pause(),this.publish()}))}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.7:0,this.audioProbe=yA(n,this.master),this.backgroundMusic=new EA(n,this.master),n.onstatechange=()=>{this.alive&&(this.playing&&this.sound&&n.state!=="running"&&(this.audioNotice="Sound interrupted. Pause and choose Test sound."),this.publish())}}catch{this.audioContext?.close().catch(()=>{}),this.audioContext=null,this.master=null,this.audioNotice="Audio could not start in this browser. Try Test sound or open the game in Chrome."}}enableAudio(t=!1){window.clearTimeout(this.audioTestTimer),this.initAudio();const n=this.audioContext,a=this.master;if(!n||!a){this.publish();return}a.gain.setTargetAtTime(this.sound?.7:0,n.currentTime,.04),n.resume().then(()=>{if(this.alive){if(!this.playing&&!this.testingAudio){n.suspend().catch(()=>{});return}if(n.state!=="running"){this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish();return}this.audioNotice="",t&&this.sound&&(this.playing||this.testingAudio)&&SA(n,a),this.playing&&this.backgroundMusic?.start().catch(()=>{this.alive&&(this.audioNotice="Background music could not load. Pause and resume to retry.",this.publish())}),this.publish()}}).catch(()=>{this.alive&&(this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish())})}testingAudio=!1;testSound(){this.sound=!0,this.testingAudio=!0,this.enableAudio(!0),this.audioTestTimer=window.setTimeout(()=>{this.testingAudio=!1,this.playing||this.audioContext?.suspend().catch(()=>{})},1500),this.publish()}setSound(t){this.sound=t,this.audioNotice="",t?this.playing?this.enableAudio():this.testSound():this.master&&this.audioContext&&this.master.gain.setTargetAtTime(0,this.audioContext.currentTime,.04),this.publish()}start(){this.mission.outcome!=="playing"&&this.reset(),this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.testingAudio=!1,this.sound&&this.enableAudio(!0),this.fallbackTurn=0;try{this.renderer.domElement.requestPointerLock?.()?.catch(()=>{this.mission.say("360° free look active. Hold the pointer at an edge to keep turning."),this.publish()})}catch{this.mission.say("360° free look active. Hold the pointer at an edge to keep turning.")}this.publish()}pause(){this.playing&&(this.testingAudio=!1,window.clearTimeout(this.audioTestTimer),this.playing=!1,this.fallbackTurn=0,this.keys.clear(),this.velocity.set(0,0,0),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.publish())}reset(){this.backgroundMusic?.reset(),this.mission=new Q_,this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=0,this.fallbackTurn=0,this.velocity.set(0,0,0),this.time=0,this.lastSent=0,this.keys.clear(),this.syncPickups(),this.publish()}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.playing){this.time+=t;const f=this.mission,h=(..._)=>_.some(v=>this.keys.has(v))?1:0,m=h("ArrowRight")-h("ArrowLeft")+(this.pointerLocked?0:this.fallbackTurn*2.1),p=$h(this.targetYaw,this.targetPitch,m*t*650,(h("ArrowDown")-h("ArrowUp"))*t*650);this.targetYaw=p.yaw,this.targetPitch=p.pitch,this.yaw=Ts.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*t)),this.pitch=Ts.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize(),this.move.copy(this.forward).multiplyScalar(h("KeyW")-h("KeyS")).addScaledVector(this.right,h("KeyD")-h("KeyA")),this.move.y+=h("Space")-h("KeyQ","ControlLeft","ControlRight");const g=!!h("ShiftLeft","ShiftRight")&&f.stamina>3&&this.move.lengthSq()>.1;this.move.lengthSq()>1&&this.move.normalize(),this.move.multiplyScalar(g?4.8:2.8),this.velocity.lerp(this.move,1-Math.exp(-4*t)),Dv(f.position,this.velocity.x*t,this.velocity.y*t,this.velocity.z*t),f.update(t,g),this.position.copy(f.position),this.camera.position.copy(this.position),f.outcome!=="playing"&&this.pause()}const n=Ts.smoothstep(-this.position.z,40,58),a=this.scene.fog;a.color.set(268563).lerp(new _e(199707),n),this.scene.background.copy(a.color),this.uniforms.uTime.value=this.time,this.torchLight.visible=this.mission.torch,this.beam.visible=this.mission.torch,this.particles.material.uniforms.uTorch.value=this.mission.torch?1:0;const l=this.mission.predator;this.guardian.group.position.copy(l.position);const c=Math.atan2(Math.sin(l.heading-this.guardian.group.rotation.y),Math.cos(l.heading-this.guardian.group.rotation.y));this.guardian.group.rotation.y+=c*Math.min(1,t*5),this.guardian.fins.forEach(f=>f.rotation.x=Math.sin(this.time*2+(f.userData.phase||0))*.25*(f.userData.side||1)),this.guardian.tail.rotation.y=Math.sin(this.time*3)*.22,this.syncPickups(),this.decoyMesh.visible=!!this.mission.decoy,this.mission.decoy&&this.decoyMesh.position.copy(this.mission.decoy.position),this.time-this.lastSent>.1&&(this.lastSent=this.time,this.publish()),this.renderer.render(this.scene,this.camera)};dispose(){window.clearTimeout(this.audioTestTimer),this.audioContext&&(this.audioContext.onstatechange=null),this.backgroundMusic?.dispose(),this.pause(),super.dispose()}}function CA({item:r}){const t={stone:at.jsx("path",{d:"m6 24 6-16 17-3 12 13-6 18-18 2Z M12 8l8 14 15 14M20 22l21-4"}),wood:at.jsxs(at.Fragment,{children:[at.jsx("path",{d:"m7 31 26-23 7 8-26 24Z M14 31l20-18M20 29l4 4"}),at.jsx("path",{d:"m7 31 7 1v8"})]}),flare:at.jsxs(at.Fragment,{children:[at.jsx("path",{d:"m17 35 6-18 8 3-6 18Z M26 12l2-7m7 10 6-3M19 9l-3-5"}),at.jsx("path",{d:"m20 27 8 3"})]}),air:at.jsxs(at.Fragment,{children:[at.jsx("rect",{x:"15",y:"12",width:"18",height:"29",rx:"7"}),at.jsx("path",{d:"M20 12V6h8v6M15 23h18M24 18v15"})]}),bandage:at.jsxs(at.Fragment,{children:[at.jsx("rect",{x:"8",y:"14",width:"32",height:"25",rx:"4"}),at.jsx("path",{d:"M18 14V8h12v6m-6 7v12m-6-6h12"})]}),relic:at.jsxs(at.Fragment,{children:[at.jsx("path",{d:"M37 32c-13 13-33-2-26-16S42 6 39 22 20 35 18 24s13-13 13-3-9 7-8 2"}),at.jsx("path",{d:"m35 34 7 4"})]})};return at.jsx("svg",{viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r?t[r]:at.jsx("path",{opacity:".3",d:"M20 24h8m-4-4v8"})})}function DA(){const r=ko.useRef(null),t=ko.useRef(null),[n,a]=ko.useState(null),[l,c]=ko.useState("");ko.useEffect(()=>{if(!r.current)return;let R;try{R=new wA(r.current,P=>a({...P})),t.current=R}catch(P){console.error(P),c("The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.")}return()=>{R?.dispose(),t.current=null}},[]);const f=n?.mission,h=!!n?.playing,m=f?.outcome!=="playing"&&!!f,p=f?.hasRelic?ll:nu,g=f?ai(f.position,p):0,_=f?.nearest(),v=f&&ai(f.position,ll)<4,x=f?.pending!==null&&f?.pending!==void 0?"Choose slot 1–5 · E confirms swap · Esc cancels":v?f?.hasRelic?"E · Extract with the relic":"Relic required for extraction":_?`E · Collect ${Lr[_.item].name}`:"",E=f&&t.current?Math.atan2(p.x-f.position.x,-(p.z-f.position.z))+t.current.yaw:0,T=f?Math.ceil(f.air):240,S=`${Math.floor(T/60)}:${String(T%60).padStart(2,"0")}`,y=f?.predator.state||"patrol",U=f?ai(f.position,f.predator.position)<23:!1,L=U?{patrol:"Movement in the dark",alert:"It heard something",chase:"It is hunting you",search:"Searching your last position"}[y]:"Listen. Watch the shadows.";return at.jsxs("main",{className:h?"app playing":"app",children:[at.jsx("div",{className:"viewport",ref:r,"aria-label":"Three-dimensional underwater cave"}),at.jsx("div",{className:"vignette"}),at.jsxs("header",{children:[at.jsxs("div",{className:"brand",children:[at.jsx("span",{className:"brand-mark",children:"◉"})," PAINTED ABYSS",at.jsx("small",{children:"THE DROWNED SHELF"})]}),at.jsxs("div",{className:"build-label",children:["FIRST DIVE ",at.jsx("span",{children:" / "})," 01"]})]}),h&&f&&at.jsxs(at.Fragment,{children:[at.jsxs("section",{className:"mission",children:[at.jsx("div",{className:"eyebrow",children:f.hasRelic?"02 / RETURN TO THE LIGHT":"01 / RECOVER THE RELIC"}),at.jsx("h2",{children:f.hasRelic?"Reach the extraction pool":"Find the ammonite relic"}),at.jsx("p",{children:f.hasRelic?"Follow amber lights through the east fissure.":"Follow turquoise lights. Keep the pillar between you and it."}),at.jsxs("div",{className:"bearing",children:[at.jsx("span",{style:{transform:`rotate(${E}rad)`},children:"↑"})," ",Math.round(g)," m ",at.jsx("small",{children:"direct bearing · follow passages"})]})]}),at.jsxs("section",{className:"vitals",children:[at.jsxs("div",{children:[at.jsx("span",{children:"AIR REMAINING"}),at.jsx("strong",{className:T<45?"warning":"",children:S})]}),at.jsx("div",{className:"meter",children:at.jsx("i",{style:{width:`${f.air/240*100}%`}})}),at.jsxs("div",{className:"suit",children:[at.jsxs("span",{children:["SUIT ",Math.ceil(f.health),"%"]}),at.jsxs("span",{children:["FIN ENERGY ",Math.round(f.stamina),"%"]})]}),at.jsx("div",{className:"meter suit-meter",children:at.jsx("i",{style:{width:`${f.health}%`,background:f.health<40?"#f6856c":"#91c4b7"}})}),at.jsxs("p",{children:[f.torch?"● TORCH ON":"○ TORCH OFF"," ",at.jsx("kbd",{children:"F"})]})]}),at.jsxs("div",{className:`threat ${U?y:""}`,children:[at.jsx("span",{})," ",L]}),n?.audioNotice&&at.jsx("div",{className:"audio-notice",role:"status",children:n.audioNotice}),at.jsx("div",{className:"crosshair",children:"·"}),f.health<40&&at.jsx("div",{className:"injury"}),at.jsxs("div",{className:"interaction",role:"status",children:[x&&at.jsx("div",{className:"prompt",children:x}),f.elapsed<f.noticeUntil&&at.jsx("p",{children:f.notice})]}),at.jsxs("div",{className:"inventory",children:[at.jsxs("div",{className:"inventory-label",children:[f.pending!==null?"INVENTORY FULL · SELECT AN ITEM TO LEAVE BEHIND":"CARRIED ITEMS",at.jsx("span",{children:"5 SLOTS"})]}),at.jsx("div",{className:"slots",children:f.inventory.map((R,P)=>at.jsxs("div",{className:`slot ${P===f.selected?"selected":""} ${R==="relic"?"relic":""}`,children:[at.jsx("kbd",{children:P+1}),at.jsx(CA,{item:R}),at.jsx("span",{children:R?Lr[R].short:"Empty"})]},P))}),at.jsx("div",{className:"item-note",children:f.inventory[f.selected]?Lr[f.inventory[f.selected]].description:"Empty slot · E to collect nearby items."})]}),at.jsxs("footer",{children:[at.jsxs("span",{children:[at.jsx("kbd",{children:"W A S D"})," swim ",at.jsx("kbd",{children:"Space / Q"})," up / down ",at.jsx("kbd",{children:"Shift"})," sprint"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"1–5"})," select ",at.jsx("kbd",{children:"R"})," use ",at.jsx("kbd",{children:"G"})," drop ",at.jsx("kbd",{children:"Esc"})," pause"]})]}),!n?.pointerLocked&&at.jsx("div",{className:"free-look",children:"360° free look · move normally · hold at either edge to keep turning"})]}),!h&&at.jsxs("div",{className:"menu-backdrop",children:[at.jsxs("section",{className:"menu",children:[at.jsx("div",{className:"eyebrow",children:m?f?.outcome==="won"?"EXPEDITION COMPLETE":"DIVE LOST":n?.started?"DIVE PAUSED":"A SHORT UNDERWATER SURVIVAL PROTOTYPE"}),at.jsx("h1",{children:m?f?.outcome==="won"?at.jsxs(at.Fragment,{children:["Back to",at.jsx("br",{}),at.jsx("em",{children:"the light."})]}):at.jsxs(at.Fragment,{children:["The deep",at.jsx("br",{}),at.jsx("em",{children:"keeps its own."})]}):n?.started?at.jsxs(at.Fragment,{children:["Catch your",at.jsx("br",{}),at.jsx("em",{children:"breath."})]}):at.jsxs(at.Fragment,{children:["Some things",at.jsx("br",{}),at.jsx("em",{children:"should stay buried."})]})}),at.jsx("p",{className:"intro",children:m?f?.reason:n?.started?"Your dive is paused. Take a moment, then return to the cave.":"One cave. One ancient guardian. Recover the ammonite relic and bring it back to the light."}),m&&at.jsxs("div",{className:"results",children:[at.jsxs("span",{children:[Math.floor((f?.elapsed||0)/60),"m ",Math.floor((f?.elapsed||0)%60),"s underwater"]}),at.jsx("span",{children:f?.outcome==="won"?"1 relic secured":"No relic secured"})]}),l||n?.error?at.jsx("p",{className:"error",role:"alert",children:l||n?.error}):at.jsxs("button",{className:"primary",disabled:!n,onClick:()=>t.current?.start(),children:[n?m?"Try another dive":n.started?"Resume dive":"Begin dive":"Opening the cave…"," ",at.jsx("span",{children:"↗"})]}),at.jsxs("div",{className:"menu-actions",children:[at.jsx("button",{onClick:()=>{const R=t.current;R&&(R.setSound(!R.sound),R.publish())},children:t.current?.sound===!1?"Sound off":"Sound on"}),at.jsx("button",{onClick:()=>t.current?.testSound(),children:"Test sound"}),n?.started&&!m&&at.jsx("button",{onClick:()=>{t.current?.reset(),t.current?.start()},children:"Restart dive"})]}),at.jsx("p",{className:"sound-help",role:"status",children:n?.audioNotice||"Test sound plays two clear tones. During the dive, listen for breathing and water."}),at.jsxs("div",{className:"dive-note",children:["2–4 MINUTES ",at.jsx("span",{children:"·"})," DESKTOP / HEADPHONES ",at.jsx("span",{children:"·"})," PROTOTYPE 0.1.2 · 360° LOOK"]})]}),at.jsxs("aside",{className:"briefing",children:[at.jsx("div",{className:"eyebrow",children:"BEFORE YOU DESCEND"}),at.jsxs("ol",{children:[at.jsxs("li",{children:[at.jsx("b",{children:"Follow the turquoise lights."}),at.jsx("span",{children:"Find the relic in the bone alcove, beyond the central pillar."})]}),at.jsxs("li",{children:[at.jsx("b",{children:"Make room for your discovery."}),at.jsx("span",{children:"Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops."})]}),at.jsxs("li",{children:[at.jsx("b",{children:"Escape through the east fissure."}),at.jsx("span",{children:"Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage."})]})]}),at.jsxs("div",{className:"control-grid",children:[at.jsxs("span",{children:[at.jsx("kbd",{children:"W A S D"})," Swim"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"Space / Q"})," Up / down"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"Shift"})," Sprint"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"F"})," Torch"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"E"})," Collect / extract"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"R"})," Use selected item"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"1–5"})," Select slot"]}),at.jsxs("span",{children:[at.jsx("kbd",{children:"G"})," Drop selected item"]})]}),at.jsxs("p",{className:"look-note",children:["Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold it at either edge to keep turning through 360°. Arrow keys also look. ",at.jsx("kbd",{children:"Esc"})," pauses; ",at.jsx("kbd",{children:"M"})," mutes."]}),at.jsx("p",{className:"tip",children:"Rock blocks its sight. Torchlight and fast swimming draw attention. Use a flare to distract it, then move away."})]})]})]})}ky.createRoot(document.getElementById("root")).render(at.jsx(DA,{}));
