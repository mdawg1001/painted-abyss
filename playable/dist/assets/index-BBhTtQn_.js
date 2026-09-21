(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Mh={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function uS(){if(Z0)return Zo;Z0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Zo.Fragment=t,Zo.jsx=n,Zo.jsxs=n,Zo}var K0;function fS(){return K0||(K0=1,Mh.exports=uS()),Mh.exports}var Q=fS(),Eh={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function hS(){if(Q0)return de;Q0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(O,tt,xt){this.props=O,this.context=tt,this.refs=T,this.updater=xt||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,tt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,tt,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(O,tt,xt){this.props=O,this.context=tt,this.refs=T,this.updater=xt||x}var U=L.prototype=new y;U.constructor=L,M(U,S.prototype),U.isPureReactComponent=!0;var w=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function F(O,tt,xt,St,Ut,Gt){return xt=Gt.ref,{$$typeof:r,type:O,key:tt,ref:xt!==void 0?xt:null,props:Gt}}function G(O,tt){return F(O.type,tt,void 0,void 0,void 0,O.props)}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var tt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(xt){return tt[xt]})}var k=/\/+/g;function Z(O,tt){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):tt.toString(36)}function lt(){}function ut(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(lt,lt):(O.status="pending",O.then(function(tt){O.status==="pending"&&(O.status="fulfilled",O.value=tt)},function(tt){O.status==="pending"&&(O.status="rejected",O.reason=tt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ft(O,tt,xt,St,Ut){var Gt=typeof O;(Gt==="undefined"||Gt==="boolean")&&(O=null);var it=!1;if(O===null)it=!0;else switch(Gt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(O.$$typeof){case r:case t:it=!0;break;case g:return it=O._init,ft(it(O._payload),tt,xt,St,Ut)}}if(it)return Ut=Ut(O),it=St===""?"."+Z(O,0):St,w(Ut)?(xt="",it!=null&&(xt=it.replace(k,"$&/")+"/"),ft(Ut,tt,xt,"",function(Jt){return Jt})):Ut!=null&&(C(Ut)&&(Ut=G(Ut,xt+(Ut.key==null||O&&O.key===Ut.key?"":(""+Ut.key).replace(k,"$&/")+"/")+it)),tt.push(Ut)),1;it=0;var vt=St===""?".":St+":";if(w(O))for(var At=0;At<O.length;At++)St=O[At],Gt=vt+Z(St,At),it+=ft(St,tt,xt,Gt,Ut);else if(At=_(O),typeof At=="function")for(O=At.call(O),At=0;!(St=O.next()).done;)St=St.value,Gt=vt+Z(St,At++),it+=ft(St,tt,xt,Gt,Ut);else if(Gt==="object"){if(typeof O.then=="function")return ft(ut(O),tt,xt,St,Ut);throw tt=String(O),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return it}function B(O,tt,xt){if(O==null)return O;var St=[],Ut=0;return ft(O,St,"","",function(Gt){return tt.call(xt,Gt,Ut++)}),St}function nt(O){if(O._status===-1){var tt=O._result;tt=tt(),tt.then(function(xt){(O._status===0||O._status===-1)&&(O._status=1,O._result=xt)},function(xt){(O._status===0||O._status===-1)&&(O._status=2,O._result=xt)}),O._status===-1&&(O._status=0,O._result=tt)}if(O._status===1)return O._result.default;throw O._result}var j=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function yt(){}return de.Children={map:B,forEach:function(O,tt,xt){B(O,function(){tt.apply(this,arguments)},xt)},count:function(O){var tt=0;return B(O,function(){tt++}),tt},toArray:function(O){return B(O,function(tt){return tt})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},de.Component=S,de.Fragment=n,de.Profiler=o,de.PureComponent=L,de.StrictMode=a,de.Suspense=d,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,de.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},de.cache=function(O){return function(){return O.apply(null,arguments)}},de.cloneElement=function(O,tt,xt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var St=M({},O.props),Ut=O.key,Gt=void 0;if(tt!=null)for(it in tt.ref!==void 0&&(Gt=void 0),tt.key!==void 0&&(Ut=""+tt.key),tt)!P.call(tt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&tt.ref===void 0||(St[it]=tt[it]);var it=arguments.length-2;if(it===1)St.children=xt;else if(1<it){for(var vt=Array(it),At=0;At<it;At++)vt[At]=arguments[At+2];St.children=vt}return F(O.type,Ut,void 0,void 0,Gt,St)},de.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},de.createElement=function(O,tt,xt){var St,Ut={},Gt=null;if(tt!=null)for(St in tt.key!==void 0&&(Gt=""+tt.key),tt)P.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Ut[St]=tt[St]);var it=arguments.length-2;if(it===1)Ut.children=xt;else if(1<it){for(var vt=Array(it),At=0;At<it;At++)vt[At]=arguments[At+2];Ut.children=vt}if(O&&O.defaultProps)for(St in it=O.defaultProps,it)Ut[St]===void 0&&(Ut[St]=it[St]);return F(O,Gt,void 0,void 0,null,Ut)},de.createRef=function(){return{current:null}},de.forwardRef=function(O){return{$$typeof:h,render:O}},de.isValidElement=C,de.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:nt}},de.memo=function(O,tt){return{$$typeof:p,type:O,compare:tt===void 0?null:tt}},de.startTransition=function(O){var tt=N.T,xt={};N.T=xt;try{var St=O(),Ut=N.S;Ut!==null&&Ut(xt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,j)}catch(Gt){j(Gt)}finally{N.T=tt}},de.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},de.use=function(O){return N.H.use(O)},de.useActionState=function(O,tt,xt){return N.H.useActionState(O,tt,xt)},de.useCallback=function(O,tt){return N.H.useCallback(O,tt)},de.useContext=function(O){return N.H.useContext(O)},de.useDebugValue=function(){},de.useDeferredValue=function(O,tt){return N.H.useDeferredValue(O,tt)},de.useEffect=function(O,tt,xt){var St=N.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(O,tt)},de.useId=function(){return N.H.useId()},de.useImperativeHandle=function(O,tt,xt){return N.H.useImperativeHandle(O,tt,xt)},de.useInsertionEffect=function(O,tt){return N.H.useInsertionEffect(O,tt)},de.useLayoutEffect=function(O,tt){return N.H.useLayoutEffect(O,tt)},de.useMemo=function(O,tt){return N.H.useMemo(O,tt)},de.useOptimistic=function(O,tt){return N.H.useOptimistic(O,tt)},de.useReducer=function(O,tt,xt){return N.H.useReducer(O,tt,xt)},de.useRef=function(O){return N.H.useRef(O)},de.useState=function(O){return N.H.useState(O)},de.useSyncExternalStore=function(O,tt,xt){return N.H.useSyncExternalStore(O,tt,xt)},de.useTransition=function(){return N.H.useTransition()},de.version="19.1.1",de}var J0;function ep(){return J0||(J0=1,Eh.exports=hS()),Eh.exports}var vs=ep(),Th={exports:{}},Ko={},bh={exports:{}},Ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function dS(){return $0||($0=1,(function(r){function t(B,nt){var j=B.length;B.push(nt);t:for(;0<j;){var yt=j-1>>>1,O=B[yt];if(0<o(O,nt))B[yt]=nt,B[j]=O,j=yt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var nt=B[0],j=B.pop();if(j!==nt){B[0]=j;t:for(var yt=0,O=B.length,tt=O>>>1;yt<tt;){var xt=2*(yt+1)-1,St=B[xt],Ut=xt+1,Gt=B[Ut];if(0>o(St,j))Ut<O&&0>o(Gt,St)?(B[yt]=Gt,B[Ut]=j,yt=Ut):(B[yt]=St,B[xt]=j,yt=xt);else if(Ut<O&&0>o(Gt,j))B[yt]=Gt,B[Ut]=j,yt=Ut;else break t}}return nt}function o(B,nt){var j=B.sortIndex-nt.sortIndex;return j!==0?j:B.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,v=null,_=3,x=!1,M=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var nt=n(p);nt!==null;){if(nt.callback===null)a(p);else if(nt.startTime<=B)a(p),nt.sortIndex=nt.expirationTime,t(d,nt);else break;nt=n(p)}}function N(B){if(T=!1,w(B),!M)if(n(d)!==null)M=!0,P||(P=!0,Z());else{var nt=n(p);nt!==null&&ft(N,nt.startTime-B)}}var P=!1,F=-1,G=5,C=-1;function D(){return S?!0:!(r.unstable_now()-C<G)}function k(){if(S=!1,P){var B=r.unstable_now();C=B;var nt=!0;try{t:{M=!1,T&&(T=!1,L(F),F=-1),x=!0;var j=_;try{e:{for(w(B),v=n(d);v!==null&&!(v.expirationTime>B&&D());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,_=v.priorityLevel;var O=yt(v.expirationTime<=B);if(B=r.unstable_now(),typeof O=="function"){v.callback=O,w(B),nt=!0;break e}v===n(d)&&a(d),w(B)}else a(d);v=n(d)}if(v!==null)nt=!0;else{var tt=n(p);tt!==null&&ft(N,tt.startTime-B),nt=!1}}break t}finally{v=null,_=j,x=!1}nt=void 0}}finally{nt?Z():P=!1}}}var Z;if(typeof U=="function")Z=function(){U(k)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=k,Z=function(){ut.postMessage(null)}}else Z=function(){y(k,0)};function ft(B,nt){F=y(function(){B(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var nt=3;break;default:nt=_}var j=_;_=nt;try{return B()}finally{_=j}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,nt){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=_;_=B;try{return nt()}finally{_=j}},r.unstable_scheduleCallback=function(B,nt,j){var yt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=j+O,B={id:g++,callback:nt,priorityLevel:B,startTime:j,expirationTime:O,sortIndex:-1},j>yt?(B.sortIndex=j,t(p,B),n(d)===null&&B===n(p)&&(T?(L(F),F=-1):T=!0,ft(N,j-yt))):(B.sortIndex=O,t(d,B),M||x||(M=!0,P||(P=!0,Z()))),B},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(B){var nt=_;return function(){var j=_;_=nt;try{return B.apply(this,arguments)}finally{_=j}}}})(Ah)),Ah}var tv;function pS(){return tv||(tv=1,bh.exports=dS()),bh.exports}var wh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function mS(){if(ev)return Pn;ev=1;var r=ep();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},Pn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Pn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Pn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Pn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Pn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Pn.requestFormReset=function(d){a.d.r(d)},Pn.unstable_batchedUpdates=function(d,p){return d(p)},Pn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Pn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pn.version="19.1.1",Pn}var nv;function gS(){if(nv)return wh.exports;nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wh.exports=mS(),wh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function vS(){if(iv)return Ko;iv=1;var r=pS(),t=ep(),n=gS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var E=!1,A=f.child;A;){if(A===s){E=!0,s=f,l=m;break}if(A===l){E=!0,l=f,s=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===s){E=!0,s=m,l=f;break}if(A===l){E=!0,l=m,s=f;break}A=A.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case U:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case G:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],O=-1;function tt(e){return{current:e}}function xt(e){0>O||(e.current=yt[O],yt[O]=null,O--)}function St(e,i){O++,yt[O]=e.current,e.current=i}var Ut=tt(null),Gt=tt(null),it=tt(null),vt=tt(null);function At(e,i){switch(St(it,i),St(Gt,e),St(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?E0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=E0(i),e=T0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Ut),St(Ut,e)}function Jt(){xt(Ut),xt(Gt),xt(it)}function jt(e){e.memoizedState!==null&&St(vt,e);var i=Ut.current,s=T0(i,e.type);i!==s&&(St(Gt,e),St(Ut,s))}function _e(e){Gt.current===e&&(xt(Ut),xt(Gt)),vt.current===e&&(xt(vt),Xo._currentValue=j)}var ln=Object.prototype.hasOwnProperty,H=r.unstable_scheduleCallback,ze=r.unstable_cancelCallback,ue=r.unstable_shouldYield,ae=r.unstable_requestPaint,Ot=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,fe=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,z=r.unstable_IdlePriority,b=r.log,et=r.unstable_setDisableYieldValue,ht=null,mt=null;function ct(e){if(typeof b=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var zt=Math.clz32?Math.clz32:Zt,wt=Math.log,qt=Math.LN2;function Zt(e){return e>>>=0,e===0?32:31-(wt(e)/qt|0)|0}var Mt=256,Lt=4194304;function Qt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Qt(l):(E&=A,E!==0?f=Qt(E):s||(s=A&~e,s!==0&&(f=Qt(s))))):(A=l&~m,A!==0?f=Qt(A):E!==0?f=Qt(E):s||(s=l&~e,s!==0&&(f=Qt(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function he(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Rt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,i,s,l,f,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(s=E&~s;0<s;){var dt=31-zt(s),gt=1<<dt;A[dt]=0,I[dt]=-1;var at=$[dt];if(at!==null)for($[dt]=null,dt=0;dt<at.length;dt++){var st=at[dt];st!==null&&(st.lane&=-536870913)}s&=~gt}l!==0&&_t(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function _t(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function Vt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-zt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function we(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:k0(e.type))}function _i(e,i){var s=nt.p;try{return nt.p=e,i()}finally{nt.p=s}}var dn=Math.random().toString(36).slice(2),pn="__reactFiber$"+dn,$e="__reactProps$"+dn,Di="__reactContainer$"+dn,Os="__reactEvents$"+dn,_l="__reactListeners$"+dn,zs="__reactHandles$"+dn,eo="__reactResources$"+dn,Ui="__reactMarker$"+dn;function Bs(e){delete e[pn],delete e[$e],delete e[Os],delete e[_l],delete e[zs]}function qi(e){var i=e[pn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Di]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=R0(e);e!==null;){if(s=e[pn])return s;e=R0(e)}return i}e=s,s=e.parentNode}return null}function _a(e){if(e=e[pn]||e[Di]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ts(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function xa(e){var i=e[eo];return i||(i=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function cn(e){e[Ui]=!0}var xl=new Set,yl={};function R(e,i){q(e,i),q(e+"Capture",i)}function q(e,i){for(yl[e]=i,e=0;e<i.length;e++)xl.add(i[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},K={};function Tt(e){return ln.call(K,e)?!0:ln.call(ot,e)?!1:rt.test(e)?K[e]=!0:(ot[e]=!0,!1)}function Dt(e,i,s){if(Tt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function It(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var te,ne;function Yt(e){if(te===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);te=i&&i[1]||"",ne=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+ne}var me=!1;function Ce(e,i){if(!e||me)return"";me=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var at=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){at=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){at=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var I=E.split(`
`),$=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===$.length)for(l=I.length-1,f=$.length-1;1<=l&&0<=f&&I[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==$[f]){var dt=`
`+I[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=f);break}}}finally{me=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Yt(s):""}function je(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return Yt("Activity");default:return""}}function Be(e){try{var i="";do i+=je(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $t(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(e){var i=$t(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Me(e){e._valueTracker||(e._valueTracker=Ye(e))}function Un(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=$t(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function Sn(e){return e.replace(Bn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(e,i,s,l,f,m,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ge(i)):e.value!==""+ge(i)&&(e.value=""+ge(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Ln(e,E,ge(i)):s!=null?Ln(e,E,ge(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ge(A):e.removeAttribute("name")}function In(e,i,s,l,f,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+ge(s):"",i=i!=null?""+ge(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Ln(e,i,s){i==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function tn(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ge(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function wn(e,i,s){if(i!=null&&(i=""+ge(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ge(s):""}function Is(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ft(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ge(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function kn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ox=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ep(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ox.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Tp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ep(e,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Ep(e,m,i[m])}function yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(e){return cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Su=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Hs=null;function bp(e){var i=_a(e);if(i&&(e=i.stateNode)){var s=e[$e]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ve(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Sn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[$e]||null;if(!f)throw Error(a(90));Ve(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Un(l)}break t;case"textarea":wn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&tn(e,!!s.multiple,i,!1)}}}var Eu=!1;function Ap(e,i,s){if(Eu)return e(i,s);Eu=!0;try{var l=e(i);return l}finally{if(Eu=!1,(Fs!==null||Hs!==null)&&(rc(),Fs&&(i=Fs,e=Hs,Hs=Fs=null,bp(i),e)))for(i=0;i<e.length;i++)bp(e[i])}}function no(e,i){var s=e.stateNode;if(s===null)return null;var l=s[$e]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(Yi)try{var io={};Object.defineProperty(io,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Tu=!1}var ya=null,bu=null,Ml=null;function wp(){if(Ml)return Ml;var e,i=bu,s=i.length,l,f="value"in ya?ya.value:ya.textContent,m=f.length;for(e=0;e<s&&i[e]===f[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===f[m-l];l++);return Ml=f.slice(e,1<l?1-l:void 0)}function El(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Rp(){return!1}function Xn(e){function i(s,l,f,m,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Tl:Rp,this.isPropagationStopped=Rp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Xn(es),ao=g({},es,{view:0,detail:0}),ux=Xn(ao),Au,wu,so,Al=g({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Au=e.screenX-so.screenX,wu=e.screenY-so.screenY):wu=Au=0,so=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),Cp=Xn(Al),fx=g({},Al,{dataTransfer:0}),hx=Xn(fx),dx=g({},ao,{relatedTarget:0}),Ru=Xn(dx),px=g({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),mx=Xn(px),gx=g({},es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vx=Xn(gx),_x=g({},es,{data:0}),Dp=Xn(_x),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Sx[e])?!!i[e]:!1}function Cu(){return Mx}var Ex=g({},ao,{key:function(e){if(e.key){var i=xx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tx=Xn(Ex),bx=g({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Xn(bx),Ax=g({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),wx=Xn(Ax),Rx=g({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Xn(Rx),Dx=g({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=Xn(Dx),Lx=g({},es,{newState:0,oldState:0}),Nx=Xn(Lx),Px=[9,13,27,32],Du=Yi&&"CompositionEvent"in window,ro=null;Yi&&"documentMode"in document&&(ro=document.documentMode);var Ox=Yi&&"TextEvent"in window&&!ro,Lp=Yi&&(!Du||ro&&8<ro&&11>=ro),Np=" ",Pp=!1;function Op(e,i){switch(e){case"keyup":return Px.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function zx(e,i){switch(e){case"compositionend":return zp(i);case"keypress":return i.which!==32?null:(Pp=!0,Np);case"textInput":return e=i.data,e===Np&&Pp?null:e;default:return null}}function Bx(e,i){if(Gs)return e==="compositionend"||!Du&&Op(e,i)?(e=wp(),Ml=bu=ya=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lp&&i.locale!=="ko"?null:i.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ix[e.type]:i==="textarea"}function Ip(e,i,s,l){Fs?Hs?Hs.push(l):Hs=[l]:Fs=l,i=hc(i,"onChange"),0<i.length&&(s=new bl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var oo=null,lo=null;function Fx(e){_0(e,0)}function wl(e){var i=ts(e);if(Un(i))return e}function Fp(e,i){if(e==="change")return i}var Hp=!1;if(Yi){var Uu;if(Yi){var Lu="oninput"in document;if(!Lu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Lu=typeof Gp.oninput=="function"}Uu=Lu}else Uu=!1;Hp=Uu&&(!document.documentMode||9<document.documentMode)}function Vp(){oo&&(oo.detachEvent("onpropertychange",kp),lo=oo=null)}function kp(e){if(e.propertyName==="value"&&wl(lo)){var i=[];Ip(i,lo,e,Mu(e)),Ap(Fx,i)}}function Hx(e,i,s){e==="focusin"?(Vp(),oo=i,lo=s,oo.attachEvent("onpropertychange",kp)):e==="focusout"&&Vp()}function Gx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(lo)}function Vx(e,i){if(e==="click")return wl(i)}function kx(e,i){if(e==="input"||e==="change")return wl(i)}function Xx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Xx;function co(e,i){if(Qn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!ln.call(i,f)||!Qn(e[f],i[f]))return!1}return!0}function Xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,i){var s=Xp(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Xp(s)}}function qp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?qp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=xi(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=xi(e.document)}return i}function Nu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Wx=Yi&&"documentMode"in document&&11>=document.documentMode,Vs=null,Pu=null,uo=null,Ou=!1;function jp(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ou||Vs==null||Vs!==xi(l)||(l=Vs,"selectionStart"in l&&Nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&co(uo,l)||(uo=l,l=hc(Pu,"onSelect"),0<l.length&&(i=new bl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=Vs)))}function ns(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ks={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},zu={},Zp={};Yi&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function is(e){if(zu[e])return zu[e];if(!ks[e])return e;var i=ks[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Zp)return zu[e]=i[s];return e}var Kp=is("animationend"),Qp=is("animationiteration"),Jp=is("animationstart"),qx=is("transitionrun"),Yx=is("transitionstart"),jx=is("transitioncancel"),$p=is("transitionend"),tm=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function yi(e,i){tm.set(e,i),R(i,[e])}var em=new WeakMap;function ui(e,i){if(typeof e=="object"&&e!==null){var s=em.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Be(i)},em.set(e,i),i)}return{value:e,source:i,stack:Be(i)}}var fi=[],Xs=0,Iu=0;function Rl(){for(var e=Xs,i=Iu=Xs=0;i<e;){var s=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var m=fi[i];if(fi[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&nm(s,f,m)}}function Cl(e,i,s,l){fi[Xs++]=e,fi[Xs++]=i,fi[Xs++]=s,fi[Xs++]=l,Iu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Fu(e,i,s,l){return Cl(e,i,s,l),Dl(e)}function Ws(e,i){return Cl(e,null,null,i),Dl(e)}function nm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-zt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Dl(e){if(50<zo)throw zo=0,qf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var qs={};function Zx(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,i,s,l){return new Zx(e,i,s,l)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,i){var s=e.alternate;return s===null?(s=Jn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function im(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ul(e,i,s,l,f,m){var E=0;if(l=e,typeof e=="function")Hu(e)&&(E=1);else if(typeof e=="string")E=Qy(e,s,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Jn(31,s,i,f),e.elementType=C,e.lanes=m,e;case M:return as(s.children,f,m,i);case T:E=8,f|=24;break;case S:return e=Jn(12,s,i,f|2),e.elementType=S,e.lanes=m,e;case N:return e=Jn(13,s,i,f),e.elementType=N,e.lanes=m,e;case P:return e=Jn(19,s,i,f),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case U:E=10;break t;case L:E=9;break t;case w:E=11;break t;case F:E=14;break t;case G:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Jn(E,s,i,f),i.elementType=e,i.type=l,i.lanes=m,i}function as(e,i,s,l){return e=Jn(7,e,l,i),e.lanes=s,e}function Gu(e,i,s){return e=Jn(6,e,null,i),e.lanes=s,e}function Vu(e,i,s){return i=Jn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Ys=[],js=0,Ll=null,Nl=0,hi=[],di=0,ss=null,Zi=1,Ki="";function rs(e,i){Ys[js++]=Nl,Ys[js++]=Ll,Ll=e,Nl=i}function am(e,i,s){hi[di++]=Zi,hi[di++]=Ki,hi[di++]=ss,ss=e;var l=Zi;e=Ki;var f=32-zt(l)-1;l&=~(1<<f),s+=1;var m=32-zt(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Zi=1<<32-zt(i)+f|s<<f|l,Ki=m+e}else Zi=1<<m|s<<f|l,Ki=e}function ku(e){e.return!==null&&(rs(e,1),am(e,1,0))}function Xu(e){for(;e===Ll;)Ll=Ys[--js],Ys[js]=null,Nl=Ys[--js],Ys[js]=null;for(;e===ss;)ss=hi[--di],hi[di]=null,Ki=hi[--di],hi[di]=null,Zi=hi[--di],hi[di]=null}var Fn=null,en=null,Ue=!1,os=null,Li=!1,Wu=Error(a(519));function ls(e){var i=Error(a(418,""));throw po(ui(i,e)),Wu}function sm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[pn]=e,i[$e]=l,s){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(s=0;s<Io.length;s++)Te(Io[s],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),In(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Me(i);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),Is(i,l.value,l.defaultValue,l.children),Me(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||M0(i.textContent,s)?(l.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),l.onScroll!=null&&Te("scroll",i),l.onScrollEnd!=null&&Te("scrollend",i),l.onClick!=null&&(i.onclick=dc),i=!0):i=!1,i||ls(e)}function rm(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fn=Fn.return}}function fo(e){if(e!==Fn)return!1;if(!Ue)return rm(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||lh(e.type,e.memoizedProps)),s=!s),s&&en&&ls(e),rm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){en=Mi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,za(e.type)?(e=hh,hh=null,en=e):en=i):en=Fn?Mi(e.stateNode.nextSibling):null;return!0}function ho(){en=Fn=null,Ue=!1}function om(){var e=os;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),os=null),e}function po(e){os===null?os=[e]:os.push(e)}var qu=tt(null),cs=null,Qi=null;function Sa(e,i,s){St(qu,i._currentValue),i._currentValue=s}function Ji(e){e._currentValue=qu.current,xt(qu)}function Yu(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function ju(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Yu(m.return,s,e),l||(E=null);break t}m=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Yu(E,s,e),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===e){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function mo(e,i,s,l){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var A=f.type;Qn(f.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(f===vt.current){if(E=f.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}f=f.return}e!==null&&ju(i,e,s,l),i.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function us(e){cs=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return lm(cs,e)}function Ol(e,i){return cs===null&&us(e),lm(e,i)}function lm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(e===null)throw Error(a(308));Qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Qi=Qi.next=i;return s}var Kx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Qx=r.unstable_scheduleCallback,Jx=r.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new Kx,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&Qx(Jx,function(){e.controller.abort()})}var vo=null,Ku=0,Zs=0,Ks=null;function $x(e,i){if(vo===null){var s=vo=[];Ku=0,Zs=$f(),Ks={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ku++,i.then(cm,cm),i}function cm(){if(--Ku===0&&vo!==null){Ks!==null&&(Ks.status="fulfilled");var e=vo;vo=null,Zs=0,Ks=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ty(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var um=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&$x(e,i),um!==null&&um(e,i)};var fs=tt(null);function Qu(){var e=fs.current;return e!==null?e:qe.pooledCache}function zl(e,i){i===null?St(fs,fs.current):St(fs,i.pool)}function fm(){var e=Qu();return e===null?null:{parent:mn._currentValue,pool:e}}var _o=Error(a(460)),hm=Error(a(474)),Bl=Error(a(542)),Ju={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Il(){}function pm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Il,Il),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gm(e),e;default:if(typeof i.status=="string")i.then(Il,Il);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gm(e),e}throw xo=i,_o}}var xo=null;function mm(){if(xo===null)throw Error(a(459));var e=xo;return xo=null,e}function gm(e){if(e===_o||e===Bl)throw Error(a(483))}var Ma=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Dl(e),nm(e,null,s),i}return Cl(e,l,i,s),Dl(e)}function yo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Vt(e,s)}}function ef(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var nf=!1;function So(){if(nf){var e=Ks;if(e!==null)throw e}}function Mo(e,i,s,l){nf=!1;var f=e.updateQueue;Ma=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,$=I.next;I.next=null,E===null?m=$:E.next=$,E=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==E&&(A===null?dt.firstBaseUpdate=$:A.next=$,dt.lastBaseUpdate=I))}if(m!==null){var gt=f.baseState;E=0,dt=$=I=null,A=m;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(Ae&at)===at:(l&at)===at){at!==0&&at===Zs&&(nf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var re=e,ee=A;at=i;var He=s;switch(ee.tag){case 1:if(re=ee.payload,typeof re=="function"){gt=re.call(He,gt,at);break t}gt=re;break t;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ee.payload,at=typeof re=="function"?re.call(He,gt,at):re,at==null)break t;gt=g({},gt,at);break t;case 2:Ma=!0}}at=A.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=f.callbacks,st===null?f.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?($=dt=st,I=gt):dt=dt.next=st,E|=at;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;st=A,A=st.next,st.next=null,f.lastBaseUpdate=st,f.shared.pending=null}}while(!0);dt===null&&(I=gt),f.baseState=I,f.firstBaseUpdate=$,f.lastBaseUpdate=dt,m===null&&(f.shared.lanes=0),La|=E,e.lanes=E,e.memoizedState=gt}}function vm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function _m(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)vm(s[e],i)}var Qs=tt(null),Fl=tt(0);function xm(e,i){e=sa,St(Fl,e),St(Qs,i),sa=e|i.baseLanes}function af(){St(Fl,sa),St(Qs,Qs.current)}function sf(){sa=Fl.current,xt(Qs),xt(Fl)}var ba=0,xe=null,Ie=null,un=null,Hl=!1,Js=!1,hs=!1,Gl=0,Eo=0,$s=null,ey=0;function an(){throw Error(a(321))}function rf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Qn(e[s],i[s]))return!1;return!0}function of(e,i,s,l,f,m){return ba=m,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?ng:ig,hs=!1,m=s(l,f),hs=!1,Js&&(m=Sm(i,s,l,f)),ym(e),m}function ym(e){B.H=Yl;var i=Ie!==null&&Ie.next!==null;if(ba=0,un=Ie=xe=null,Hl=!1,Eo=0,$s=null,i)throw Error(a(300));e===null||Mn||(e=e.dependencies,e!==null&&Pl(e)&&(Mn=!0))}function Sm(e,i,s,l){xe=e;var f=0;do{if(Js&&($s=null),Eo=0,Js=!1,25<=f)throw Error(a(301));if(f+=1,un=Ie=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=ly,m=i(s,l)}while(Js);return m}function ny(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?To(i):i,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(xe.flags|=1024),i}function lf(){var e=Gl!==0;return Gl=0,e}function cf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function uf(e){if(Hl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Hl=!1}ba=0,un=Ie=xe=null,Js=!1,Eo=Gl=0,$s=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?xe.memoizedState=un=e:un=un.next=e,un}function fn(){if(Ie===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=un===null?xe.memoizedState:un.next;if(i!==null)un=i,Ie=e;else{if(e===null)throw xe.alternate===null?Error(a(467)):Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},un===null?xe.memoizedState=un=e:un=un.next=e}return un}function ff(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var i=Eo;return Eo+=1,$s===null&&($s=[]),e=pm($s,e,i),i=xe,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?ng:ig),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===U)return Nn(e)}throw Error(a(438,String(e)))}function hf(e){var i=null,s=xe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ff(),xe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=D;return i.index++,s}function $i(e,i){return typeof i=="function"?i(e):i}function kl(e){var i=fn();return df(i,Ie,e)}function df(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var A=E=null,I=null,$=i,dt=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Ae&gt)===gt:(ba&gt)===gt){var at=$.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Zs&&(dt=!0);else if((ba&at)===at){$=$.next,at===Zs&&(dt=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=gt,E=m):I=I.next=gt,xe.lanes|=at,La|=at;gt=$.action,hs&&s(m,gt),m=$.hasEagerState?$.eagerState:s(m,gt)}else at={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=at,E=m):I=I.next=at,xe.lanes|=gt,La|=gt;$=$.next}while($!==null&&$!==i);if(I===null?E=m:I.next=A,!Qn(m,e.memoizedState)&&(Mn=!0,dt&&(s=Ks,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function pf(e){var i=fn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do m=e(m,E.action),E=E.next;while(E!==f);Qn(m,i.memoizedState)||(Mn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Mm(e,i,s){var l=xe,f=fn(),m=Ue;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Qn((Ie||f).memoizedState,s);E&&(f.memoizedState=s,Mn=!0),f=f.queue;var A=bm.bind(null,l,f,e);if(bo(2048,8,A,[e]),f.getSnapshot!==i||E||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,tr(9,Xl(),Tm.bind(null,l,f,s,i),null),qe===null)throw Error(a(349));m||(ba&124)!==0||Em(l,i,s)}return s}function Em(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=xe.updateQueue,i===null?(i=ff(),xe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Tm(e,i,s,l){i.value=s,i.getSnapshot=l,Am(i)&&wm(e)}function bm(e,i,s){return s(function(){Am(i)&&wm(e)})}function Am(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Qn(e,s)}catch{return!0}}function wm(e){var i=Ws(e,2);i!==null&&ii(i,e,2)}function mf(e){var i=Wn();if(typeof e=="function"){var s=e;if(e=s(),hs){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},i}function Rm(e,i,s,l){return e.baseState=s,df(e,Ie,typeof l=="function"?l:$i)}function iy(e,i,s,l,f){if(ql(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Cm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Cm(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var m=B.T,E={};B.T=E;try{var A=s(f,l),I=B.S;I!==null&&I(E,A),Dm(e,i,A)}catch($){gf(e,i,$)}finally{B.T=m}}else try{m=s(f,l),Dm(e,i,m)}catch($){gf(e,i,$)}}function Dm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Um(e,i,l)},function(l){return gf(e,i,l)}):Um(e,i,s)}function Um(e,i,s){i.status="fulfilled",i.value=s,Lm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Cm(e,s)))}function gf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Lm(i),i=i.next;while(i!==l)}e.action=null}function Lm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Nm(e,i){return i}function Pm(e,i){if(Ue){var s=qe.formState;if(s!==null){t:{var l=xe;if(Ue){if(en){e:{for(var f=en,m=Li;f.nodeType!==8;){if(!m){f=null;break e}if(f=Mi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){en=Mi(f.nextSibling),l=f.data==="F!";break t}}ls(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:i},s.queue=l,s=$m.bind(null,xe,l),l.dispatch=s,l=mf(!1),m=Sf.bind(null,xe,!1,l.queue),l=Wn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=iy.bind(null,xe,f,m,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function Om(e){var i=fn();return zm(i,Ie,e)}function zm(e,i,s){if(i=df(e,i,Nm)[0],e=kl($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(E){throw E===_o?Bl:E}else l=i;i=fn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(xe.flags|=2048,tr(9,Xl(),ay.bind(null,f,s),null)),[l,m,e]}function ay(e,i){e.action=i}function Bm(e){var i=fn(),s=Ie;if(s!==null)return zm(i,s,e);fn(),i=i.memoizedState,s=fn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function tr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=xe.updateQueue,i===null&&(i=ff(),xe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Xl(){return{destroy:void 0,resource:void 0}}function Im(){return fn().memoizedState}function Wl(e,i,s,l){var f=Wn();l=l===void 0?null:l,xe.flags|=e,f.memoizedState=tr(1|i,Xl(),s,l)}function bo(e,i,s,l){var f=fn();l=l===void 0?null:l;var m=f.memoizedState.inst;Ie!==null&&l!==null&&rf(l,Ie.memoizedState.deps)?f.memoizedState=tr(i,m,s,l):(xe.flags|=e,f.memoizedState=tr(1|i,m,s,l))}function Fm(e,i){Wl(8390656,8,e,i)}function Hm(e,i){bo(2048,8,e,i)}function Gm(e,i){return bo(4,2,e,i)}function Vm(e,i){return bo(4,4,e,i)}function km(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Xm(e,i,s){s=s!=null?s.concat([e]):null,bo(4,4,km.bind(null,i,e),s)}function vf(){}function Wm(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&rf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function qm(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&rf(i,l[1]))return l[0];if(l=e(),hs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[l,i],l}function _f(e,i,s){return s===void 0||(ba&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Zg(),xe.lanes|=e,La|=e,s)}function Ym(e,i,s,l){return Qn(s,i)?s:Qs.current!==null?(e=_f(e,s,l),Qn(e,i)||(Mn=!0),e):(ba&42)===0?(Mn=!0,e.memoizedState=s):(e=Zg(),xe.lanes|=e,La|=e,i)}function jm(e,i,s,l,f){var m=nt.p;nt.p=m!==0&&8>m?m:8;var E=B.T,A={};B.T=A,Sf(e,!1,i,s);try{var I=f(),$=B.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=ty(I,l);Ao(e,i,dt,ni(e))}else Ao(e,i,l,ni(e))}catch(gt){Ao(e,i,{then:function(){},status:"rejected",reason:gt},ni())}finally{nt.p=m,B.T=E}}function sy(){}function xf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=Zm(e).queue;jm(e,f,i,j,s===null?sy:function(){return Km(e),s(l)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Km(e){var i=Zm(e).next.queue;Ao(e,i,{},ni())}function yf(){return Nn(Xo)}function Qm(){return fn().memoizedState}function Jm(){return fn().memoizedState}function ry(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();e=Ea(s);var l=Ta(i,e,s);l!==null&&(ii(l,i,s),yo(l,i,s)),i={cache:Zu()},e.payload=i;return}i=i.return}}function oy(e,i,s){var l=ni();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ql(e)?tg(i,s):(s=Fu(e,i,s,l),s!==null&&(ii(s,e,l),eg(s,i,l)))}function $m(e,i,s){var l=ni();Ao(e,i,s,l)}function Ao(e,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ql(e))tg(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,A=m(E,s);if(f.hasEagerState=!0,f.eagerState=A,Qn(A,E))return Cl(e,i,f,0),qe===null&&Rl(),!1}catch{}finally{}if(s=Fu(e,i,f,l),s!==null)return ii(s,e,l),eg(s,i,l),!0}return!1}function Sf(e,i,s,l){if(l={lane:2,revertLane:$f(),action:l,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(i)throw Error(a(479))}else i=Fu(e,s,l,2),i!==null&&ii(i,e,2)}function ql(e){var i=e.alternate;return e===xe||i!==null&&i===xe}function tg(e,i){Js=Hl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function eg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Vt(e,s)}}var Yl={readContext:Nn,use:Vl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},ng={readContext:Nn,use:Vl,useCallback:function(e,i){return Wn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:Fm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Wl(4194308,4,km.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Wl(4194308,4,e,i)},useInsertionEffect:function(e,i){Wl(4,2,e,i)},useMemo:function(e,i){var s=Wn();i=i===void 0?null:i;var l=e();if(hs){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Wn();if(s!==void 0){var f=s(i);if(hs){ct(!0);try{s(i)}finally{ct(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=oy.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var i=Wn();return e={current:e},i.memoizedState=e},useState:function(e){e=mf(e);var i=e.queue,s=$m.bind(null,xe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:vf,useDeferredValue:function(e,i){var s=Wn();return _f(s,e,i)},useTransition:function(){var e=mf(!1);return e=jm.bind(null,xe,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=xe,f=Wn();if(Ue){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(Ae&124)!==0||Em(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Fm(bm.bind(null,l,m,e),[e]),l.flags|=2048,tr(9,Xl(),Tm.bind(null,l,m,s,i),null),s},useId:function(){var e=Wn(),i=qe.identifierPrefix;if(Ue){var s=Ki,l=Zi;s=(l&~(1<<32-zt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Gl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=ey++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:yf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e){var i=Wn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Sf.bind(null,xe,!0,s),s.dispatch=i,[e,i]},useMemoCache:hf,useCacheRefresh:function(){return Wn().memoizedState=ry.bind(null,xe)}},ig={readContext:Nn,use:Vl,useCallback:Wm,useContext:Nn,useEffect:Hm,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:kl,useRef:Im,useState:function(){return kl($i)},useDebugValue:vf,useDeferredValue:function(e,i){var s=fn();return Ym(s,Ie.memoizedState,e,i)},useTransition:function(){var e=kl($i)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:yf,useFormState:Om,useActionState:Om,useOptimistic:function(e,i){var s=fn();return Rm(s,Ie,e,i)},useMemoCache:hf,useCacheRefresh:Jm},ly={readContext:Nn,use:Vl,useCallback:Wm,useContext:Nn,useEffect:Hm,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:pf,useRef:Im,useState:function(){return pf($i)},useDebugValue:vf,useDeferredValue:function(e,i){var s=fn();return Ie===null?_f(s,e,i):Ym(s,Ie.memoizedState,e,i)},useTransition:function(){var e=pf($i)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:yf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,i){var s=fn();return Ie!==null?Rm(s,Ie,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:hf,useCacheRefresh:Jm},er=null,wo=0;function jl(e){var i=wo;return wo+=1,er===null&&(er=[]),pm(er,e,i)}function Ro(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Zl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ag(e){var i=e._init;return i(e._payload)}function sg(e){function i(Y,X){if(e){var J=Y.deletions;J===null?(Y.deletions=[X],Y.flags|=16):J.push(X)}}function s(Y,X){if(!e)return null;for(;X!==null;)i(Y,X),X=X.sibling;return null}function l(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function f(Y,X){return Y=ji(Y,X),Y.index=0,Y.sibling=null,Y}function m(Y,X,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<X?(Y.flags|=67108866,X):J):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function E(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,X,J,pt){return X===null||X.tag!==6?(X=Gu(J,Y.mode,pt),X.return=Y,X):(X=f(X,J),X.return=Y,X)}function I(Y,X,J,pt){var Ht=J.type;return Ht===M?dt(Y,X,J.props.children,pt,J.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&ag(Ht)===X.type)?(X=f(X,J.props),Ro(X,J),X.return=Y,X):(X=Ul(J.type,J.key,J.props,null,Y.mode,pt),Ro(X,J),X.return=Y,X)}function $(Y,X,J,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Vu(J,Y.mode,pt),X.return=Y,X):(X=f(X,J.children||[]),X.return=Y,X)}function dt(Y,X,J,pt,Ht){return X===null||X.tag!==7?(X=as(J,Y.mode,pt,Ht),X.return=Y,X):(X=f(X,J),X.return=Y,X)}function gt(Y,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Gu(""+X,Y.mode,J),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return J=Ul(X.type,X.key,X.props,null,Y.mode,J),Ro(J,X),J.return=Y,J;case x:return X=Vu(X,Y.mode,J),X.return=Y,X;case G:var pt=X._init;return X=pt(X._payload),gt(Y,X,J)}if(ft(X)||Z(X))return X=as(X,Y.mode,J,null),X.return=Y,X;if(typeof X.then=="function")return gt(Y,jl(X),J);if(X.$$typeof===U)return gt(Y,Ol(Y,X),J);Zl(Y,X)}return null}function at(Y,X,J,pt){var Ht=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:A(Y,X,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Ht?I(Y,X,J,pt):null;case x:return J.key===Ht?$(Y,X,J,pt):null;case G:return Ht=J._init,J=Ht(J._payload),at(Y,X,J,pt)}if(ft(J)||Z(J))return Ht!==null?null:dt(Y,X,J,pt,null);if(typeof J.then=="function")return at(Y,X,jl(J),pt);if(J.$$typeof===U)return at(Y,X,Ol(Y,J),pt);Zl(Y,J)}return null}function st(Y,X,J,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,A(X,Y,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case _:return Y=Y.get(pt.key===null?J:pt.key)||null,I(X,Y,pt,Ht);case x:return Y=Y.get(pt.key===null?J:pt.key)||null,$(X,Y,pt,Ht);case G:var ye=pt._init;return pt=ye(pt._payload),st(Y,X,J,pt,Ht)}if(ft(pt)||Z(pt))return Y=Y.get(J)||null,dt(X,Y,pt,Ht,null);if(typeof pt.then=="function")return st(Y,X,J,jl(pt),Ht);if(pt.$$typeof===U)return st(Y,X,J,Ol(X,pt),Ht);Zl(X,pt)}return null}function re(Y,X,J,pt){for(var Ht=null,ye=null,Kt=X,ie=X=0,Tn=null;Kt!==null&&ie<J.length;ie++){Kt.index>ie?(Tn=Kt,Kt=null):Tn=Kt.sibling;var De=at(Y,Kt,J[ie],pt);if(De===null){Kt===null&&(Kt=Tn);break}e&&Kt&&De.alternate===null&&i(Y,Kt),X=m(De,X,ie),ye===null?Ht=De:ye.sibling=De,ye=De,Kt=Tn}if(ie===J.length)return s(Y,Kt),Ue&&rs(Y,ie),Ht;if(Kt===null){for(;ie<J.length;ie++)Kt=gt(Y,J[ie],pt),Kt!==null&&(X=m(Kt,X,ie),ye===null?Ht=Kt:ye.sibling=Kt,ye=Kt);return Ue&&rs(Y,ie),Ht}for(Kt=l(Kt);ie<J.length;ie++)Tn=st(Kt,Y,ie,J[ie],pt),Tn!==null&&(e&&Tn.alternate!==null&&Kt.delete(Tn.key===null?ie:Tn.key),X=m(Tn,X,ie),ye===null?Ht=Tn:ye.sibling=Tn,ye=Tn);return e&&Kt.forEach(function(Ga){return i(Y,Ga)}),Ue&&rs(Y,ie),Ht}function ee(Y,X,J,pt){if(J==null)throw Error(a(151));for(var Ht=null,ye=null,Kt=X,ie=X=0,Tn=null,De=J.next();Kt!==null&&!De.done;ie++,De=J.next()){Kt.index>ie?(Tn=Kt,Kt=null):Tn=Kt.sibling;var Ga=at(Y,Kt,De.value,pt);if(Ga===null){Kt===null&&(Kt=Tn);break}e&&Kt&&Ga.alternate===null&&i(Y,Kt),X=m(Ga,X,ie),ye===null?Ht=Ga:ye.sibling=Ga,ye=Ga,Kt=Tn}if(De.done)return s(Y,Kt),Ue&&rs(Y,ie),Ht;if(Kt===null){for(;!De.done;ie++,De=J.next())De=gt(Y,De.value,pt),De!==null&&(X=m(De,X,ie),ye===null?Ht=De:ye.sibling=De,ye=De);return Ue&&rs(Y,ie),Ht}for(Kt=l(Kt);!De.done;ie++,De=J.next())De=st(Kt,Y,ie,De.value,pt),De!==null&&(e&&De.alternate!==null&&Kt.delete(De.key===null?ie:De.key),X=m(De,X,ie),ye===null?Ht=De:ye.sibling=De,ye=De);return e&&Kt.forEach(function(cS){return i(Y,cS)}),Ue&&rs(Y,ie),Ht}function He(Y,X,J,pt){if(typeof J=="object"&&J!==null&&J.type===M&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:t:{for(var Ht=J.key;X!==null;){if(X.key===Ht){if(Ht=J.type,Ht===M){if(X.tag===7){s(Y,X.sibling),pt=f(X,J.props.children),pt.return=Y,Y=pt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&ag(Ht)===X.type){s(Y,X.sibling),pt=f(X,J.props),Ro(pt,J),pt.return=Y,Y=pt;break t}s(Y,X);break}else i(Y,X);X=X.sibling}J.type===M?(pt=as(J.props.children,Y.mode,pt,J.key),pt.return=Y,Y=pt):(pt=Ul(J.type,J.key,J.props,null,Y.mode,pt),Ro(pt,J),pt.return=Y,Y=pt)}return E(Y);case x:t:{for(Ht=J.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){s(Y,X.sibling),pt=f(X,J.children||[]),pt.return=Y,Y=pt;break t}else{s(Y,X);break}else i(Y,X);X=X.sibling}pt=Vu(J,Y.mode,pt),pt.return=Y,Y=pt}return E(Y);case G:return Ht=J._init,J=Ht(J._payload),He(Y,X,J,pt)}if(ft(J))return re(Y,X,J,pt);if(Z(J)){if(Ht=Z(J),typeof Ht!="function")throw Error(a(150));return J=Ht.call(J),ee(Y,X,J,pt)}if(typeof J.then=="function")return He(Y,X,jl(J),pt);if(J.$$typeof===U)return He(Y,X,Ol(Y,J),pt);Zl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(s(Y,X.sibling),pt=f(X,J),pt.return=Y,Y=pt):(s(Y,X),pt=Gu(J,Y.mode,pt),pt.return=Y,Y=pt),E(Y)):s(Y,X)}return function(Y,X,J,pt){try{wo=0;var Ht=He(Y,X,J,pt);return er=null,Ht}catch(Kt){if(Kt===_o||Kt===Bl)throw Kt;var ye=Jn(29,Kt,null,Y.mode);return ye.lanes=pt,ye.return=Y,ye}finally{}}}var nr=sg(!0),rg=sg(!1),pi=tt(null),Ni=null;function Aa(e){var i=e.alternate;St(gn,gn.current&1),St(pi,e),Ni===null&&(i===null||Qs.current!==null||i.memoizedState!==null)&&(Ni=e)}function og(e){if(e.tag===22){if(St(gn,gn.current),St(pi,e),Ni===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ni=e)}}else wa()}function wa(){St(gn,gn.current),St(pi,pi.current)}function ta(e){xt(pi),Ni===e&&(Ni=null),xt(gn)}var gn=tt(0);function Kl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||fh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Mf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ef={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Ea(l);f.payload=i,s!=null&&(f.callback=s),i=Ta(e,f,l),i!==null&&(ii(i,e,l),yo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Ea(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ta(e,f,l),i!==null&&(ii(i,e,l),yo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ni(),l=Ea(s);l.tag=2,i!=null&&(l.callback=i),i=Ta(e,l,s),i!==null&&(ii(i,e,s),yo(i,e,s))}};function lg(e,i,s,l,f,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!co(s,l)||!co(f,m):!0}function cg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Ef.enqueueReplaceState(i,i.state,null)}function ds(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ug(e){Ql(e)}function fg(e){console.error(e)}function hg(e){Ql(e)}function Jl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function dg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Tf(e,i,s){return s=Ea(s),s.tag=3,s.payload={element:null},s.callback=function(){Jl(e,i)},s}function pg(e){return e=Ea(e),e.tag=3,e}function mg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){dg(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){dg(i,s,l),typeof f!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function cy(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&mo(i,s,f,!0),s=pi.current,s!==null){switch(s.tag){case 13:return Ni===null?jf():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Ju?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Kf(e,l,f)),!1;case 22:return s.flags|=65536,l===Ju?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Kf(e,l,f)),!1}throw Error(a(435,s.tag))}return Kf(e,l,f),jf(),!1}if(Ue)return i=pi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Wu&&(e=Error(a(422),{cause:l}),po(ui(e,s)))):(l!==Wu&&(i=Error(a(423),{cause:l}),po(ui(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ui(l,s),f=Tf(e.stateNode,l,f),ef(e,f),nn!==4&&(nn=2)),!1;var m=Error(a(520),{cause:l});if(m=ui(m,s),Oo===null?Oo=[m]:Oo.push(m),nn!==4&&(nn=2),i===null)return!0;l=ui(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Tf(s.stateNode,l,e),ef(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Na===null||!Na.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=pg(f),mg(f,e,s,l),ef(s,f),!1}s=s.return}while(s!==null);return!1}var gg=Error(a(461)),Mn=!1;function Rn(e,i,s,l){i.child=e===null?rg(i,null,s,l):nr(i,e.child,s,l)}function vg(e,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var A in l)A!=="ref"&&(E[A]=l[A])}else E=l;return us(i),l=of(e,i,s,E,m,f),A=lf(),e!==null&&!Mn?(cf(e,i,f),ea(e,i,f)):(Ue&&A&&ku(i),i.flags|=1,Rn(e,i,l,f),i.child)}function _g(e,i,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!Hu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,xg(e,i,m,l,f)):(e=Ul(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Lf(e,f)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:co,s(E,l)&&e.ref===i.ref)return ea(e,i,f)}return i.flags|=1,e=ji(m,l),e.ref=i.ref,e.return=i,i.child=e}function xg(e,i,s,l,f){if(e!==null){var m=e.memoizedProps;if(co(m,l)&&e.ref===i.ref)if(Mn=!1,i.pendingProps=l=m,Lf(e,f))(e.flags&131072)!==0&&(Mn=!0);else return i.lanes=e.lanes,ea(e,i,f)}return bf(e,i,s,l,f)}function yg(e,i,s){var l=i.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=i.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Sg(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(i,m!==null?m.cachePool:null),m!==null?xm(i,m):af(),og(i);else return i.lanes=i.childLanes=536870912,Sg(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(zl(i,m.cachePool),xm(i,m),wa(),i.memoizedState=null):(e!==null&&zl(i,null),af(),wa());return Rn(e,i,f,s),i.child}function Sg(e,i,s,l){var f=Qu();return f=f===null?null:{parent:mn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&zl(i,null),af(),og(i),e!==null&&mo(e,i,l,!0),null}function $l(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function bf(e,i,s,l,f){return us(i),s=of(e,i,s,l,void 0,f),l=lf(),e!==null&&!Mn?(cf(e,i,f),ea(e,i,f)):(Ue&&l&&ku(i),i.flags|=1,Rn(e,i,s,f),i.child)}function Mg(e,i,s,l,f,m){return us(i),i.updateQueue=null,s=Sm(i,l,s,f),ym(e),l=lf(),e!==null&&!Mn?(cf(e,i,m),ea(e,i,m)):(Ue&&l&&ku(i),i.flags|=1,Rn(e,i,s,m),i.child)}function Eg(e,i,s,l,f){if(us(i),i.stateNode===null){var m=qs,E=s.contextType;typeof E=="object"&&E!==null&&(m=Nn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ef,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},$u(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Nn(E):qs,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Mf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Ef.enqueueReplaceState(m,m.state,null),Mo(i,l,m,f),So(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var A=i.memoizedProps,I=ds(s,A);m.props=I;var $=m.context,dt=s.contextType;E=qs,typeof dt=="object"&&dt!==null&&(E=Nn(dt));var gt=s.getDerivedStateFromProps;dt=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||$!==E)&&cg(i,m,l,E),Ma=!1;var at=i.memoizedState;m.state=at,Mo(i,l,m,f),So(),$=i.memoizedState,A||at!==$||Ma?(typeof gt=="function"&&(Mf(i,s,gt,l),$=i.memoizedState),(I=Ma||lg(i,s,I,l,at,$,E))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=$),m.props=l,m.state=$,m.context=E,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,tf(e,i),E=i.memoizedProps,dt=ds(s,E),m.props=dt,gt=i.pendingProps,at=m.context,$=s.contextType,I=qs,typeof $=="object"&&$!==null&&(I=Nn($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==gt||at!==I)&&cg(i,m,l,I),Ma=!1,at=i.memoizedState,m.state=at,Mo(i,l,m,f),So();var st=i.memoizedState;E!==gt||at!==st||Ma||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof A=="function"&&(Mf(i,s,A,l),st=i.memoizedState),(dt=Ma||lg(i,s,dt,l,at,st,I)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,st,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,st,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=st),m.props=l,m.state=st,m.context=I,l=dt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,$l(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=nr(i,e.child,null,f),i.child=nr(i,null,s,f)):Rn(e,i,s,f),i.memoizedState=m.state,e=i.child):e=ea(e,i,f),e}function Tg(e,i,s,l){return ho(),i.flags|=256,Rn(e,i,s,l),i.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:fm()}}function Rf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=mi),e}function bg(e,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(f?Aa(i):wa(),Ue){var A=en,I;if(I=A){t:{for(I=A,A=Li;I.nodeType!==8;){if(!A){A=null;break t}if(I=Mi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:ss!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},I=Jn(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,Fn=i,en=null,I=!0):I=!1}I||ls(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return fh(A)?i.lanes=32:i.lanes=536870912,null;ta(i)}return A=l.children,l=l.fallback,f?(wa(),f=i.mode,A=tc({mode:"hidden",children:A},f),l=as(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,f=i.child,f.memoizedState=wf(s),f.childLanes=Rf(e,E,s),i.memoizedState=Af,l):(Aa(i),Cf(i,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(m)i.flags&256?(Aa(i),i.flags&=-257,i=Df(e,i,s)):i.memoizedState!==null?(wa(),i.child=e.child,i.flags|=128,i=null):(wa(),f=l.fallback,A=i.mode,l=tc({mode:"visible",children:l.children},A),f=as(f,A,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,nr(i,e.child,null,s),l=i.child,l.memoizedState=wf(s),l.childLanes=Rf(e,E,s),i.memoizedState=Af,i=f);else if(Aa(i),fh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var $=E.dgst;E=$,l=Error(a(419)),l.stack="",l.digest=E,po({value:l,source:null,stack:null}),i=Df(e,i,s)}else if(Mn||mo(e,i,s,!1),E=(s&e.childLanes)!==0,Mn||E){if(E=qe,E!==null&&(l=s&-s,l=(l&42)!==0?1:oe(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ws(e,l),ii(E,e,l),gg;A.data==="$?"||jf(),i=Df(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,en=Mi(A.nextSibling),Fn=i,Ue=!0,os=null,Li=!1,e!==null&&(hi[di++]=Zi,hi[di++]=Ki,hi[di++]=ss,Zi=e.id,Ki=e.overflow,ss=i),i=Cf(i,l.children),i.flags|=4096);return i}return f?(wa(),f=l.fallback,A=i.mode,I=e.child,$=I.sibling,l=ji(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,$!==null?f=ji($,f):(f=as(f,A,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,A=e.child.memoizedState,A===null?A=wf(s):(I=A.cachePool,I!==null?($=mn._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=fm(),A={baseLanes:A.baseLanes|s,cachePool:I}),f.memoizedState=A,f.childLanes=Rf(e,E,s),i.memoizedState=Af,l):(Aa(i),s=e.child,e=s.sibling,s=ji(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Cf(e,i){return i=tc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tc(e,i){return e=Jn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Df(e,i,s){return nr(i,e.child,null,s),e=Cf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Ag(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Yu(e.return,i,s)}function Uf(e,i,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function wg(e,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Rn(e,i,l.children,s),l=gn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ag(e,s,i);else if(e.tag===19)Ag(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(St(gn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Kl(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Uf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Kl(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Uf(i,!0,s,null,m);break;case"together":Uf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ea(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),La|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(mo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ji(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ji(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Lf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function uy(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),Sa(i,mn,e.memoizedState.cache),ho();break;case 27:case 5:jt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:Sa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Aa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?bg(e,i,s):(Aa(i),e=ea(e,i,s),e!==null?e.sibling:null);Aa(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(mo(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return wg(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),St(gn,gn.current),l)break;return null;case 22:case 23:return i.lanes=0,yg(e,i,s);case 24:Sa(i,mn,e.memoizedState.cache)}return ea(e,i,s)}function Rg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Mn=!0;else{if(!Lf(e,s)&&(i.flags&128)===0)return Mn=!1,uy(e,i,s);Mn=(e.flags&131072)!==0}else Mn=!1,Ue&&(i.flags&1048576)!==0&&am(i,Nl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Hu(l)?(e=ds(l,e),i.tag=1,i=Eg(null,i,l,e,s)):(i.tag=0,i=bf(null,i,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===w){i.tag=11,i=vg(null,i,l,e,s);break t}else if(f===F){i.tag=14,i=_g(null,i,l,e,s);break t}}throw i=ut(l)||l,Error(a(306,i,""))}}return i;case 0:return bf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=ds(l,i.pendingProps),Eg(e,i,l,f,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,tf(e,i),Mo(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Sa(i,mn,l),l!==m.cache&&ju(i,[mn],s,!0),So(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Tg(e,i,l,s);break t}else if(l!==f){f=ui(Error(a(424)),i),po(f),i=Tg(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Mi(e.firstChild),Fn=i,Ue=!0,os=null,Li=!0,s=rg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ho(),l===f){i=ea(e,i,s);break t}Rn(e,i,l,s)}i=i.child}return i;case 26:return $l(e,i),e===null?(s=L0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,l=pc(it.current).createElement(s),l[pn]=i,l[$e]=e,Dn(l,s,e),cn(l),i.stateNode=l):i.memoizedState=L0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return jt(i),e===null&&Ue&&(l=i.stateNode=C0(i.type,i.pendingProps,it.current),Fn=i,Li=!0,f=en,za(i.type)?(hh=f,en=Mi(l.firstChild)):en=f),Rn(e,i,i.pendingProps.children,s),$l(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((f=l=en)&&(l=Iy(l,i.type,i.pendingProps,Li),l!==null?(i.stateNode=l,Fn=i,en=Mi(l.firstChild),Li=!1,f=!0):f=!1),f||ls(i)),jt(i),f=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,lh(f,m)?l=null:E!==null&&lh(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=of(e,i,ny,null,null,s),Xo._currentValue=f),$l(e,i),Rn(e,i,l,s),i.child;case 6:return e===null&&Ue&&((e=s=en)&&(s=Fy(s,i.pendingProps,Li),s!==null?(i.stateNode=s,Fn=i,en=null,e=!0):e=!1),e||ls(i)),null;case 13:return bg(e,i,s);case 4:return At(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=nr(i,null,l,s):Rn(e,i,l,s),i.child;case 11:return vg(e,i,i.type,i.pendingProps,s);case 7:return Rn(e,i,i.pendingProps,s),i.child;case 8:return Rn(e,i,i.pendingProps.children,s),i.child;case 12:return Rn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Sa(i,i.type,l.value),Rn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,us(i),f=Nn(f),l=l(f),i.flags|=1,Rn(e,i,l,s),i.child;case 14:return _g(e,i,i.type,i.pendingProps,s);case 15:return xg(e,i,i.type,i.pendingProps,s);case 19:return wg(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=tc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ji(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return yg(e,i,s);case 24:return us(i),l=Nn(mn),e===null?(f=Qu(),f===null&&(f=qe,m=Zu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},$u(i),Sa(i,mn,f)):((e.lanes&s)!==0&&(tf(e,i),Mo(i,null,null,s),So()),f=e.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Sa(i,mn,l)):(l=m.cache,Sa(i,mn,l),l!==f.cache&&ju(i,[mn],s,!0))),Rn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function na(e){e.flags|=4}function Cg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B0(i)){if(i=pi.current,i!==null&&((Ae&4194048)===Ae?Ni!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||i!==Ni))throw xo=Ju,hm;e.flags|=8192}}function ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,rr|=i)}function Co(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function fy(e,i,s){var l=i.pendingProps;switch(Xu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ji(mn),Jt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(fo(i)?na(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,om())),Je(i),null;case 26:return s=i.memoizedState,e===null?(na(i),s!==null?(Je(i),Cg(i,s)):(Je(i),i.flags&=-16777217)):s?s!==e.memoizedState?(na(i),Je(i),Cg(i,s)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==l&&na(i),Je(i),i.flags&=-16777217),null;case 27:_e(i),s=it.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Ut.current,fo(i)?sm(i):(e=C0(f,l,s),i.stateNode=e,na(i))}return Je(i),null;case 5:if(_e(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(e=Ut.current,fo(i))sm(i);else{switch(f=pc(it.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[pn]=i,e[$e]=l;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(Dn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&na(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,fo(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=Fn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[pn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||M0(e.nodeValue,s)),e||ls(i)}else e=pc(e).createTextNode(l),e[pn]=i,i.stateNode=e}return Je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=fo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[pn]=i}else ho(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),f=!1}else f=om(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ta(i),i):(ta(i),null)}if(ta(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),ec(i,i.updateQueue),Je(i),null;case 4:return Jt(),e===null&&ih(i.stateNode.containerInfo),Je(i),null;case 10:return Ji(i.type),Je(i),null;case 19:if(xt(gn),f=i.memoizedState,f===null)return Je(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Co(f,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Kl(e),m!==null){for(i.flags|=128,Co(f,!1),e=m.updateQueue,i.updateQueue=e,ec(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)im(s,e),s=s.sibling;return St(gn,gn.current&1|2),i.child}e=e.sibling}f.tail!==null&&Ot()>ac&&(i.flags|=128,l=!0,Co(f,!1),i.lanes=4194304)}else{if(!l)if(e=Kl(m),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ec(i,e),Co(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ue)return Je(i),null}else 2*Ot()-f.renderingStartTime>ac&&s!==536870912&&(i.flags|=128,l=!0,Co(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(e=f.last,e!==null?e.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ot(),i.sibling=null,e=gn.current,St(gn,l?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return ta(i),sf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&ec(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&xt(fs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(mn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function hy(e,i){switch(Xu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ji(mn),Jt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _e(i),null;case 13:if(ta(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ho()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return xt(gn),null;case 4:return Jt(),null;case 10:return Ji(i.type),null;case 22:case 23:return ta(i),sf(),e!==null&&xt(fs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ji(mn),null;case 25:return null;default:return null}}function Dg(e,i){switch(Xu(i),i.tag){case 3:Ji(mn),Jt();break;case 26:case 27:case 5:_e(i);break;case 4:Jt();break;case 13:ta(i);break;case 19:xt(gn);break;case 10:Ji(i.type);break;case 22:case 23:ta(i),sf(),e!==null&&xt(fs);break;case 24:Ji(mn)}}function Do(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==f)}}catch(A){ke(i,i.return,A)}}function Ra(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var E=l.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=i;var I=s,$=A;try{$()}catch(dt){ke(f,I,dt)}}}l=l.next}while(l!==m)}}catch(dt){ke(i,i.return,dt)}}function Ug(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{_m(i,s)}catch(l){ke(e,e.return,l)}}}function Lg(e,i,s){s.props=ds(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ke(e,i,l)}}function Uo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){ke(e,i,f)}}function Pi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){ke(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){ke(e,i,f)}else s.current=null}function Ng(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){ke(e,e.return,f)}}function Nf(e,i,s){try{var l=e.stateNode;Ny(l,e.type,s,i),l[$e]=i}catch(f){ke(e,e.return,f)}}function Pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Of(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=dc));else if(l!==4&&(l===27&&za(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Of(e,i,s),e=e.sibling;e!==null;)Of(e,i,s),e=e.sibling}function nc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&za(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(nc(e,i,s),e=e.sibling;e!==null;)nc(e,i,s),e=e.sibling}function Og(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Dn(i,l,s),i[pn]=e,i[$e]=s}catch(m){ke(e,e.return,m)}}var ia=!1,sn=!1,zf=!1,zg=typeof WeakSet=="function"?WeakSet:Set,En=null;function dy(e,i){if(e=e.containerInfo,rh=yc,e=Yp(e),Nu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,A=-1,I=-1,$=0,dt=0,gt=e,at=null;e:for(;;){for(var st;gt!==s||f!==0&&gt.nodeType!==3||(A=E+f),gt!==m||l!==0&&gt.nodeType!==3||(I=E+l),gt.nodeType===3&&(E+=gt.nodeValue.length),(st=gt.firstChild)!==null;)at=gt,gt=st;for(;;){if(gt===e)break e;if(at===s&&++$===f&&(A=E),at===m&&++dt===l&&(I=E),(st=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=st}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(oh={focusedElem:e,selectionRange:s},yc=!1,En=i;En!==null;)if(i=En,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,En=e;else for(;En!==null;){switch(i=En,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var re=ds(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(re,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){ke(s,s.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)uh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,En=e;break}En=i.return}}function Bg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ca(e,s),l&4&&Do(5,s);break;case 1:if(Ca(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ke(s,s.return,E)}else{var f=ds(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ke(s,s.return,E)}}l&64&&Ug(s),l&512&&Uo(s,s.return);break;case 3:if(Ca(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{_m(e,i)}catch(E){ke(s,s.return,E)}}break;case 27:i===null&&l&4&&Og(s);case 26:case 5:Ca(e,s),i===null&&l&4&&Ng(s),l&512&&Uo(s,s.return);break;case 12:Ca(e,s);break;case 13:Ca(e,s),l&4&&Hg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=My.bind(null,s),Hy(e,s))));break;case 22:if(l=s.memoizedState!==null||ia,!l){i=i!==null&&i.memoizedState!==null||sn,f=ia;var m=sn;ia=l,(sn=i)&&!m?Da(e,s,(s.subtreeFlags&8772)!==0):Ca(e,s),ia=f,sn=m}break;case 30:break;default:Ca(e,s)}}function Ig(e){var i=e.alternate;i!==null&&(e.alternate=null,Ig(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Bs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,qn=!1;function aa(e,i,s){for(s=s.child;s!==null;)Fg(e,i,s),s=s.sibling}function Fg(e,i,s){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:sn||Pi(s,i),aa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Pi(s,i);var l=Ze,f=qn;za(s.type)&&(Ze=s.stateNode,qn=!1),aa(e,i,s),Ho(s.stateNode),Ze=l,qn=f;break;case 5:sn||Pi(s,i);case 6:if(l=Ze,f=qn,Ze=null,aa(e,i,s),Ze=l,qn=f,Ze!==null)if(qn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(m){ke(s,i,m)}else try{Ze.removeChild(s.stateNode)}catch(m){ke(s,i,m)}break;case 18:Ze!==null&&(qn?(e=Ze,w0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),jo(e)):w0(Ze,s.stateNode));break;case 4:l=Ze,f=qn,Ze=s.stateNode.containerInfo,qn=!0,aa(e,i,s),Ze=l,qn=f;break;case 0:case 11:case 14:case 15:sn||Ra(2,s,i),sn||Ra(4,s,i),aa(e,i,s);break;case 1:sn||(Pi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Lg(s,i,l)),aa(e,i,s);break;case 21:aa(e,i,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,aa(e,i,s),sn=l;break;default:aa(e,i,s)}}function Hg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jo(e)}catch(s){ke(i,i.return,s)}}function py(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new zg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new zg),i;default:throw Error(a(435,e.tag))}}function Bf(e,i){var s=py(e);i.forEach(function(l){var f=Ey.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function $n(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,E=i,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(za(A.type)){Ze=A.stateNode,qn=!1;break t}break;case 5:Ze=A.stateNode,qn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,qn=!0;break t}A=A.return}if(Ze===null)throw Error(a(160));Fg(m,E,f),Ze=null,qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Gg(i,e),i=i.sibling}var Si=null;function Gg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(i,e),ti(e),l&4&&(Ra(3,e,e.return),Do(3,e),Ra(5,e,e.return));break;case 1:$n(i,e),ti(e),l&512&&(sn||s===null||Pi(s,s.return)),l&64&&ia&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Si;if($n(i,e),ti(e),l&512&&(sn||s===null||Pi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ui]||m[pn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Dn(m,l,s),m[pn]=e,cn(m),l=m;break t;case"link":var E=O0("link","href",f).get(l+(s.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(A,1);break e}}m=f.createElement(l),Dn(m,l,s),f.head.appendChild(m);break;case"meta":if(E=O0("meta","content",f).get(l+(s.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(A,1);break e}}m=f.createElement(l),Dn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[pn]=e,cn(m),l=m}e.stateNode=l}else z0(f,e.type,e.stateNode);else e.stateNode=P0(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?z0(f,e.type,e.stateNode):P0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,s.memoizedProps)}break;case 27:$n(i,e),ti(e),l&512&&(sn||s===null||Pi(s,s.return)),s!==null&&l&4&&Nf(e,e.memoizedProps,s.memoizedProps);break;case 5:if($n(i,e),ti(e),l&512&&(sn||s===null||Pi(s,s.return)),e.flags&32){f=e.stateNode;try{kn(f,"")}catch(st){ke(e,e.return,st)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Nf(e,f,s!==null?s.memoizedProps:f)),l&1024&&(zf=!0);break;case 6:if($n(i,e),ti(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(st){ke(e,e.return,st)}}break;case 3:if(vc=null,f=Si,Si=mc(i.containerInfo),$n(i,e),Si=f,ti(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{jo(i.containerInfo)}catch(st){ke(e,e.return,st)}zf&&(zf=!1,Vg(e));break;case 4:l=Si,Si=mc(e.stateNode.containerInfo),$n(i,e),ti(e),Si=l;break;case 12:$n(i,e),ti(e);break;case 13:$n(i,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kf=Ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bf(e,l)));break;case 22:f=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,$=ia,dt=sn;if(ia=$||f,sn=dt||I,$n(i,e),sn=dt,ia=$,ti(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||ia||sn||ps(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=I.stateNode;var gt=I.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){ke(I,I.return,st)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(st){ke(I,I.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Bf(e,s))));break;case 19:$n(i,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bf(e,l)));break;case 30:break;case 21:break;default:$n(i,e),ti(e)}}function ti(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(Pg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Pf(e);nc(e,m,f);break;case 5:var E=s.stateNode;s.flags&32&&(kn(E,""),s.flags&=-33);var A=Pf(e);nc(e,A,E);break;case 3:case 4:var I=s.stateNode.containerInfo,$=Pf(e);Of(e,$,I);break;default:throw Error(a(161))}}catch(dt){ke(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Vg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ca(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Bg(e,i.alternate,i),i=i.sibling}function ps(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ra(4,i,i.return),ps(i);break;case 1:Pi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Lg(i,i.return,s),ps(i);break;case 27:Ho(i.stateNode);case 26:case 5:Pi(i,i.return),ps(i);break;case 22:i.memoizedState===null&&ps(i);break;case 30:ps(i);break;default:ps(i)}e=e.sibling}}function Da(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Da(f,m,s),Do(4,m);break;case 1:if(Da(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){ke(l,l.return,$)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)vm(I[f],A)}catch($){ke(l,l.return,$)}}s&&E&64&&Ug(m),Uo(m,m.return);break;case 27:Og(m);case 26:case 5:Da(f,m,s),s&&l===null&&E&4&&Ng(m),Uo(m,m.return);break;case 12:Da(f,m,s);break;case 13:Da(f,m,s),s&&E&4&&Hg(f,m);break;case 22:m.memoizedState===null&&Da(f,m,s),Uo(m,m.return);break;case 30:break;default:Da(f,m,s)}i=i.sibling}}function If(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&go(s))}function Ff(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e))}function Oi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kg(e,i,s,l),i=i.sibling}function kg(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(e,i,s,l),f&2048&&Do(9,i);break;case 1:Oi(e,i,s,l);break;case 3:Oi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e)));break;case 12:if(f&2048){Oi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){ke(i,i.return,I)}}else Oi(e,i,s,l);break;case 13:Oi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Oi(e,i,s,l):Lo(e,i):m._visibility&2?Oi(e,i,s,l):(m._visibility|=2,ir(e,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&If(E,i);break;case 24:Oi(e,i,s,l),f&2048&&Ff(i.alternate,i);break;default:Oi(e,i,s,l)}}function ir(e,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,E=i,A=s,I=l,$=E.flags;switch(E.tag){case 0:case 11:case 15:ir(m,E,A,I,f),Do(8,E);break;case 23:break;case 22:var dt=E.stateNode;E.memoizedState!==null?dt._visibility&2?ir(m,E,A,I,f):Lo(m,E):(dt._visibility|=2,ir(m,E,A,I,f)),f&&$&2048&&If(E.alternate,E);break;case 24:ir(m,E,A,I,f),f&&$&2048&&Ff(E.alternate,E);break;default:ir(m,E,A,I,f)}i=i.sibling}}function Lo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Lo(s,l),f&2048&&If(l.alternate,l);break;case 24:Lo(s,l),f&2048&&Ff(l.alternate,l);break;default:Lo(s,l)}i=i.sibling}}var No=8192;function ar(e){if(e.subtreeFlags&No)for(e=e.child;e!==null;)Xg(e),e=e.sibling}function Xg(e){switch(e.tag){case 26:ar(e),e.flags&No&&e.memoizedState!==null&&$y(Si,e.memoizedState,e.memoizedProps);break;case 5:ar(e);break;case 3:case 4:var i=Si;Si=mc(e.stateNode.containerInfo),ar(e),Si=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=No,No=16777216,ar(e),No=i):ar(e));break;default:ar(e)}}function Wg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Po(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,Yg(l,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qg(e),e=e.sibling}function qg(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ic(e)):Po(e);break;default:Po(e)}}function ic(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,Yg(l,e)}Wg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ra(8,i,i.return),ic(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ic(i));break;default:ic(i)}e=e.sibling}}function Yg(e,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Ra(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:go(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,En=l;else t:for(s=e;En!==null;){l=En;var f=l.sibling,m=l.return;if(Ig(l),l===s){En=null;break t}if(f!==null){f.return=m,En=f;break t}En=m}}}var my={getCacheForType:function(e){var i=Nn(mn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},gy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,Ee=null,Ae=0,Pe=0,ei=null,Ua=!1,sr=!1,Hf=!1,sa=0,nn=0,La=0,ms=0,Gf=0,mi=0,rr=0,Oo=null,Yn=null,Vf=!1,kf=0,ac=1/0,sc=null,Na=null,Cn=0,Pa=null,or=null,lr=0,Xf=0,Wf=null,jg=null,zo=0,qf=null;function ni(){if((Ne&2)!==0&&Ae!==0)return Ae&-Ae;if(B.T!==null){var e=Zs;return e!==0?e:$f()}return we()}function Zg(){mi===0&&(mi=(Ae&536870912)===0||Ue?W():536870912);var e=pi.current;return e!==null&&(e.flags|=32),mi}function ii(e,i,s){(e===qe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(cr(e,0),Oa(e,Ae,mi,!1)),Bt(e,s),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(ms|=s),nn===4&&Oa(e,Ae,mi,!1)),zi(e))}function Kg(e,i,s){if((Ne&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),f=l?xy(e,i):Zf(e,i,!0),m=l;do{if(f===0){sr&&!l&&Oa(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!vy(s)){f=Zf(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var A=e;f=Oo;var I=A.current.memoizedState.isDehydrated;if(I&&(cr(A,E).flags|=256),E=Zf(A,E,!1),E!==2){if(Hf&&!I){A.errorRecoveryDisabledLanes|=m,ms|=m,f=4;break t}m=Yn,Yn=f,m!==null&&(Yn===null?Yn=m:Yn.push.apply(Yn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){cr(e,0),Oa(e,i,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oa(l,i,mi,!Ua);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=kf+300-Ot(),10<f)){if(Oa(l,i,mi,!Ua),Xt(l,0,!0)!==0)break t;l.timeoutHandle=b0(Qg.bind(null,l,s,Yn,sc,Vf,i,mi,ms,rr,Ua,m,2,-0,0),f);break t}Qg(l,s,Yn,sc,Vf,i,mi,ms,rr,Ua,m,0,-0,0)}}break}while(!0);zi(e)}function Qg(e,i,s,l,f,m,E,A,I,$,dt,gt,at,st){if(e.timeoutHandle=-1,gt=i.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(ko={stylesheets:null,count:0,unsuspend:Jy},Xg(i),gt=tS(),gt!==null)){e.cancelPendingCommit=gt(a0.bind(null,e,i,m,s,l,f,E,A,I,dt,1,at,st)),Oa(e,m,E,!$);return}a0(e,i,m,s,l,f,E,A,I)}function vy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Qn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oa(e,i,s,l){i&=~Gf,i&=~ms,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var m=31-zt(f),E=1<<m;l[m]=-1,f&=~E}s!==0&&_t(e,s,i)}function rc(){return(Ne&6)===0?(Bo(0),!1):!0}function Yf(){if(Ee!==null){if(Pe===0)var e=Ee.return;else e=Ee,Qi=cs=null,uf(e),er=null,wo=0,e=Ee;for(;e!==null;)Dg(e.alternate,e),e=e.return;Ee=null}}function cr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Oy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Yf(),qe=e,Ee=s=ji(e.current,null),Ae=i,Pe=0,ei=null,Ua=!1,sr=Ct(e,i),Hf=!1,rr=mi=Gf=ms=La=nn=0,Yn=Oo=null,Vf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-zt(l),m=1<<f;i|=e[f],l&=~m}return sa=i,Rl(),s}function Jg(e,i){xe=null,B.H=Yl,i===_o||i===Bl?(i=mm(),Pe=3):i===hm?(i=mm(),Pe=4):Pe=i===gg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,Ee===null&&(nn=1,Jl(e,ui(i,e.current)))}function $g(){var e=B.H;return B.H=Yl,e===null?Yl:e}function t0(){var e=B.A;return B.A=my,e}function jf(){nn=4,Ua||(Ae&4194048)!==Ae&&pi.current!==null||(sr=!0),(La&134217727)===0&&(ms&134217727)===0||qe===null||Oa(qe,Ae,mi,!1)}function Zf(e,i,s){var l=Ne;Ne|=2;var f=$g(),m=t0();(qe!==e||Ae!==i)&&(sc=null,cr(e,i)),i=!1;var E=nn;t:do try{if(Pe!==0&&Ee!==null){var A=Ee,I=ei;switch(Pe){case 8:Yf(),E=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(i=!0);var $=Pe;if(Pe=0,ei=null,ur(e,A,I,$),s&&sr){E=0;break t}break;default:$=Pe,Pe=0,ei=null,ur(e,A,I,$)}}_y(),E=nn;break}catch(dt){Jg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Qi=cs=null,Ne=l,B.H=f,B.A=m,Ee===null&&(qe=null,Ae=0,Rl()),E}function _y(){for(;Ee!==null;)e0(Ee)}function xy(e,i){var s=Ne;Ne|=2;var l=$g(),f=t0();qe!==e||Ae!==i?(sc=null,ac=Ot()+500,cr(e,i)):sr=Ct(e,i);t:do try{if(Pe!==0&&Ee!==null){i=Ee;var m=ei;e:switch(Pe){case 1:Pe=0,ei=null,ur(e,i,m,1);break;case 2:case 9:if(dm(m)){Pe=0,ei=null,n0(i);break}i=function(){Pe!==2&&Pe!==9||qe!==e||(Pe=7),zi(e)},m.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:dm(m)?(Pe=0,ei=null,n0(i)):(Pe=0,ei=null,ur(e,i,m,7));break;case 5:var E=null;switch(Ee.tag){case 26:E=Ee.memoizedState;case 5:case 27:var A=Ee;if(!E||B0(E)){Pe=0,ei=null;var I=A.sibling;if(I!==null)Ee=I;else{var $=A.return;$!==null?(Ee=$,oc($)):Ee=null}break e}}Pe=0,ei=null,ur(e,i,m,5);break;case 6:Pe=0,ei=null,ur(e,i,m,6);break;case 8:Yf(),nn=6;break t;default:throw Error(a(462))}}yy();break}catch(dt){Jg(e,dt)}while(!0);return Qi=cs=null,B.H=l,B.A=f,Ne=s,Ee!==null?0:(qe=null,Ae=0,Rl(),nn)}function yy(){for(;Ee!==null&&!ue();)e0(Ee)}function e0(e){var i=Rg(e.alternate,e,sa);e.memoizedProps=e.pendingProps,i===null?oc(e):Ee=i}function n0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Mg(s,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=Mg(s,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:uf(i);default:Dg(s,i),i=Ee=im(i,sa),i=Rg(s,i,sa)}e.memoizedProps=e.pendingProps,i===null?oc(e):Ee=i}function ur(e,i,s,l){Qi=cs=null,uf(i),er=null,wo=0;var f=i.return;try{if(cy(e,f,i,s,Ae)){nn=1,Jl(e,ui(s,e.current)),Ee=null;return}}catch(m){if(f!==null)throw Ee=f,m;nn=1,Jl(e,ui(s,e.current)),Ee=null;return}i.flags&32768?(Ue||l===1?e=!0:sr||(Ae&536870912)!==0?e=!1:(Ua=e=!0,(l===2||l===9||l===3||l===6)&&(l=pi.current,l!==null&&l.tag===13&&(l.flags|=16384))),i0(i,e)):oc(i)}function oc(e){var i=e;do{if((i.flags&32768)!==0){i0(i,Ua);return}e=i.return;var s=fy(i.alternate,i,sa);if(s!==null){Ee=s;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=e}while(i!==null);nn===0&&(nn=5)}function i0(e,i){do{var s=hy(e.alternate,e);if(s!==null){s.flags&=32767,Ee=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=s}while(e!==null);nn=6,Ee=null}function a0(e,i,s,l,f,m,E,A,I){e.cancelPendingCommit=null;do lc();while(Cn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Iu,Et(e,s,m,E,A,I),e===qe&&(Ee=qe=null,Ae=0),or=i,Pa=e,lr=s,Xf=m,Wf=f,jg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ty(Ke,function(){return c0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=nt.p,nt.p=2,E=Ne,Ne|=4;try{dy(e,i,s)}finally{Ne=E,nt.p=f,B.T=l}}Cn=1,s0(),r0(),o0()}}function s0(){if(Cn===1){Cn=0;var e=Pa,i=or,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=nt.p;nt.p=2;var f=Ne;Ne|=4;try{Gg(i,e);var m=oh,E=Yp(e.containerInfo),A=m.focusedElem,I=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&qp(A.ownerDocument.documentElement,A)){if(I!==null&&Nu(A)){var $=I.start,dt=I.end;if(dt===void 0&&(dt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(dt,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var st=at.getSelection(),re=A.textContent.length,ee=Math.min(I.start,re),He=I.end===void 0?ee:Math.min(I.end,re);!st.extend&&ee>He&&(E=He,He=ee,ee=E);var Y=Wp(A,ee),X=Wp(A,He);if(Y&&X&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var J=gt.createRange();J.setStart(Y.node,Y.offset),st.removeAllRanges(),ee>He?(st.addRange(J),st.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),st.addRange(J))}}}}for(gt=[],st=A;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var pt=gt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}yc=!!rh,oh=rh=null}finally{Ne=f,nt.p=l,B.T=s}}e.current=i,Cn=2}}function r0(){if(Cn===2){Cn=0;var e=Pa,i=or,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=nt.p;nt.p=2;var f=Ne;Ne|=4;try{Bg(e,i.alternate,i)}finally{Ne=f,nt.p=l,B.T=s}}Cn=3}}function o0(){if(Cn===4||Cn===3){Cn=0,ae();var e=Pa,i=or,s=lr,l=jg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,or=Pa=null,l0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Na=null),Le(s),i=i.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=nt.p,nt.p=2,B.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var A=l[E];m(A.value,{componentStack:A.stack})}}finally{B.T=i,nt.p=f}}(lr&3)!==0&&lc(),zi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===qf?zo++:(zo=0,qf=e):zo=0,Bo(0)}}function l0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,go(i)))}function lc(e){return s0(),r0(),o0(),c0()}function c0(){if(Cn!==5)return!1;var e=Pa,i=Xf;Xf=0;var s=Le(lr),l=B.T,f=nt.p;try{nt.p=32>s?32:s,B.T=null,s=Wf,Wf=null;var m=Pa,E=lr;if(Cn=0,or=Pa=null,lr=0,(Ne&6)!==0)throw Error(a(331));var A=Ne;if(Ne|=4,qg(m.current),kg(m,m.current,E,s),Ne=A,Bo(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,m)}catch{}return!0}finally{nt.p=f,B.T=l,l0(e,i)}}function u0(e,i,s){i=ui(s,i),i=Tf(e.stateNode,i,2),e=Ta(e,i,2),e!==null&&(Bt(e,2),zi(e))}function ke(e,i,s){if(e.tag===3)u0(e,e,s);else for(;i!==null;){if(i.tag===3){u0(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Na===null||!Na.has(l))){e=ui(s,e),s=pg(2),l=Ta(i,s,2),l!==null&&(mg(s,l,i,e),Bt(l,2),zi(l));break}}i=i.return}}function Kf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new gy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Hf=!0,f.add(s),e=Sy.bind(null,e,i,s),i.then(e,e))}function Sy(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(Ae&s)===s&&(nn===4||nn===3&&(Ae&62914560)===Ae&&300>Ot()-kf?(Ne&2)===0&&cr(e,0):Gf|=s,rr===Ae&&(rr=0)),zi(e)}function f0(e,i){i===0&&(i=bt()),e=Ws(e,i),e!==null&&(Bt(e,i),zi(e))}function My(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),f0(e,s)}function Ey(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),f0(e,s)}function Ty(e,i){return H(e,i)}var cc=null,fr=null,Qf=!1,uc=!1,Jf=!1,gs=0;function zi(e){e!==fr&&e.next===null&&(fr===null?cc=fr=e:fr=fr.next=e),uc=!0,Qf||(Qf=!0,Ay())}function Bo(e,i){if(!Jf&&uc){Jf=!0;do for(var s=!1,l=cc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=f&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,m0(l,m))}else m=Ae,m=Xt(l,l===qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ct(l,m)||(s=!0,m0(l,m));l=l.next}while(s);Jf=!1}}function by(){h0()}function h0(){uc=Qf=!1;var e=0;gs!==0&&(Py()&&(e=gs),gs=0);for(var i=Ot(),s=null,l=cc;l!==null;){var f=l.next,m=d0(l,i);m===0?(l.next=null,s===null?cc=f:s.next=f,f===null&&(fr=s)):(s=l,(e!==0||(m&3)!==0)&&(uc=!0)),l=f}Bo(e)}function d0(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-zt(m),A=1<<E,I=f[E];I===-1?((A&s)===0||(A&l)!==0)&&(f[E]=he(A,i)):I<=i&&(e.expiredLanes|=A),m&=~A}if(i=qe,s=Ae,s=Xt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ze(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ze(l),Le(s)){case 2:case 8:s=fe;break;case 32:s=Ke;break;case 268435456:s=z;break;default:s=Ke}return l=p0.bind(null,e),s=H(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ze(l),e.callbackPriority=2,e.callbackNode=null,2}function p0(e,i){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(lc()&&e.callbackNode!==s)return null;var l=Ae;return l=Xt(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Kg(e,l,i),d0(e,Ot()),e.callbackNode!=null&&e.callbackNode===s?p0.bind(null,e):null)}function m0(e,i){if(lc())return null;Kg(e,i,!0)}function Ay(){zy(function(){(Ne&6)!==0?H(kt,by):h0()})}function $f(){return gs===0&&(gs=W()),gs}function g0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sl(""+e)}function v0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function wy(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=g0((f[$e]||null).action),E=l.submitter;E&&(i=(i=E[$e]||null)?g0(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var A=new bl("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(gs!==0){var I=E?v0(f,E):new FormData(f);xf(s,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(A.preventDefault(),I=E?v0(f,E):new FormData(f),xf(s,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var th=0;th<Bu.length;th++){var eh=Bu[th],Ry=eh.toLowerCase(),Cy=eh[0].toUpperCase()+eh.slice(1);yi(Ry,"on"+Cy)}yi(Kp,"onAnimationEnd"),yi(Qp,"onAnimationIteration"),yi(Jp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(qx,"onTransitionRun"),yi(Yx,"onTransitionStart"),yi(jx,"onTransitionCancel"),yi($p,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function _0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var A=l[E],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=$;try{m(f)}catch(dt){Ql(dt)}f.currentTarget=null,m=I}else for(E=0;E<l.length;E++){if(A=l[E],I=A.instance,$=A.currentTarget,A=A.listener,I!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=$;try{m(f)}catch(dt){Ql(dt)}f.currentTarget=null,m=I}}}}function Te(e,i){var s=i[Os];s===void 0&&(s=i[Os]=new Set);var l=e+"__bubble";s.has(l)||(x0(i,e,2,!1),s.add(l))}function nh(e,i,s){var l=0;i&&(l|=4),x0(s,e,l,i)}var fc="_reactListening"+Math.random().toString(36).slice(2);function ih(e){if(!e[fc]){e[fc]=!0,xl.forEach(function(s){s!=="selectionchange"&&(Dy.has(s)||nh(s,!1,e),nh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[fc]||(i[fc]=!0,nh("selectionchange",!1,i))}}function x0(e,i,s,l){switch(k0(i)){case 2:var f=iS;break;case 8:f=aS;break;default:f=vh}s=f.bind(null,i,s,e),f=void 0,!Tu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function ah(e,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var A=l.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=qi(A),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=m=E;continue t}A=A.parentNode}}l=l.return}Ap(function(){var $=m,dt=Mu(s),gt=[];t:{var at=tm.get(e);if(at!==void 0){var st=bl,re=e;switch(e){case"keypress":if(El(s)===0)break t;case"keydown":case"keyup":st=Tx;break;case"focusin":re="focus",st=Ru;break;case"focusout":re="blur",st=Ru;break;case"beforeblur":case"afterblur":st=Ru;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=wx;break;case Kp:case Qp:case Jp:st=mx;break;case $p:st=Cx;break;case"scroll":case"scrollend":st=ux;break;case"wheel":st=Ux;break;case"copy":case"cut":case"paste":st=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Up;break;case"toggle":case"beforetoggle":st=Nx}var ee=(i&4)!==0,He=!ee&&(e==="scroll"||e==="scrollend"),Y=ee?at!==null?at+"Capture":null:at;ee=[];for(var X=$,J;X!==null;){var pt=X;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=no(X,Y),pt!=null&&ee.push(Fo(X,pt,J))),He)break;X=X.return}0<ee.length&&(at=new st(at,re,null,s,dt),gt.push({event:at,listeners:ee}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&s!==Su&&(re=s.relatedTarget||s.fromElement)&&(qi(re)||re[Di]))break t;if((st||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(re=s.relatedTarget||s.toElement,st=$,re=re?qi(re):null,re!==null&&(He=c(re),ee=re.tag,re!==He||ee!==5&&ee!==27&&ee!==6)&&(re=null)):(st=null,re=$),st!==re)){if(ee=Cp,pt="onMouseLeave",Y="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Up,pt="onPointerLeave",Y="onPointerEnter",X="pointer"),He=st==null?at:ts(st),J=re==null?at:ts(re),at=new ee(pt,X+"leave",st,s,dt),at.target=He,at.relatedTarget=J,pt=null,qi(dt)===$&&(ee=new ee(Y,X+"enter",re,s,dt),ee.target=J,ee.relatedTarget=He,pt=ee),He=pt,st&&re)e:{for(ee=st,Y=re,X=0,J=ee;J;J=hr(J))X++;for(J=0,pt=Y;pt;pt=hr(pt))J++;for(;0<X-J;)ee=hr(ee),X--;for(;0<J-X;)Y=hr(Y),J--;for(;X--;){if(ee===Y||Y!==null&&ee===Y.alternate)break e;ee=hr(ee),Y=hr(Y)}ee=null}else ee=null;st!==null&&y0(gt,at,st,ee,!1),re!==null&&He!==null&&y0(gt,He,re,ee,!0)}}t:{if(at=$?ts($):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=Fp;else if(Bp(at))if(Hp)Ht=kx;else{Ht=Gx;var ye=Hx}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&yu($.elementType)&&(Ht=Fp):Ht=Vx;if(Ht&&(Ht=Ht(e,$))){Ip(gt,Ht,s,dt);break t}ye&&ye(e,at,$),e==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Ln(at,"number",at.value)}switch(ye=$?ts($):window,e){case"focusin":(Bp(ye)||ye.contentEditable==="true")&&(Vs=ye,Pu=$,uo=null);break;case"focusout":uo=Pu=Vs=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,jp(gt,s,dt);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":jp(gt,s,dt)}var Kt;if(Du)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else Gs?Op(e,s)&&(ie="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ie="onCompositionStart");ie&&(Lp&&s.locale!=="ko"&&(Gs||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Gs&&(Kt=wp()):(ya=dt,bu="value"in ya?ya.value:ya.textContent,Gs=!0)),ye=hc($,ie),0<ye.length&&(ie=new Dp(ie,e,null,s,dt),gt.push({event:ie,listeners:ye}),Kt?ie.data=Kt:(Kt=zp(s),Kt!==null&&(ie.data=Kt)))),(Kt=Ox?zx(e,s):Bx(e,s))&&(ie=hc($,"onBeforeInput"),0<ie.length&&(ye=new Dp("onBeforeInput","beforeinput",null,s,dt),gt.push({event:ye,listeners:ie}),ye.data=Kt)),wy(gt,e,$,s,dt)}_0(gt,i)})}function Fo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function hc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=no(e,s),f!=null&&l.unshift(Fo(e,f,m)),f=no(e,i),f!=null&&l.push(Fo(e,f,m))),e.tag===3)return l;e=e.return}return[]}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,i,s,l,f){for(var m=i._reactName,E=[];s!==null&&s!==l;){var A=s,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||$===null||(I=$,f?($=no(s,m),$!=null&&E.unshift(Fo(s,$,I))):f||($=no(s,m),$!=null&&E.push(Fo(s,$,I)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Uy=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace(Uy,`
`).replace(Ly,"")}function M0(e,i){return i=S0(i),S0(e)===i}function dc(){}function Fe(e,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||kn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&kn(e,""+l);break;case"className":It(e,"class",l);break;case"tabIndex":It(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,s,l);break;case"style":Tp(e,l,m);break;case"data":if(i!=="object"){It(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Sl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Fe(e,i,"name",f.name,f,null),Fe(e,i,"formEncType",f.formEncType,f,null),Fe(e,i,"formMethod",f.formMethod,f,null),Fe(e,i,"formTarget",f.formTarget,f,null)):(Fe(e,i,"encType",f.encType,f,null),Fe(e,i,"method",f.method,f,null),Fe(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Sl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=dc);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Sl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Dt(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=lx.get(s)||s,Dt(e,s,l))}}function sh(e,i,s,l,f,m){switch(s){case"style":Tp(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?kn(e,l):(typeof l=="number"||typeof l=="bigint")&&kn(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=e[$e]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Dt(e,s,l)}}}function Dn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,m,E,s,null)}}f&&Fe(e,i,"srcSet",s.srcSet,s,null),l&&Fe(e,i,"src",s.src,s,null);return;case"input":Te("invalid",e);var A=m=E=f=null,I=null,$=null;for(l in s)if(s.hasOwnProperty(l)){var dt=s[l];if(dt!=null)switch(l){case"name":f=dt;break;case"type":E=dt;break;case"checked":I=dt;break;case"defaultChecked":$=dt;break;case"value":m=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Fe(e,i,l,dt,s,null)}}In(e,m,A,I,$,E,f,!1),Me(e);return;case"select":Te("invalid",e),l=E=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":l=A;default:Fe(e,i,f,A,s,null)}i=m,s=E,e.multiple=!!l,i!=null?tn(e,!!l,i,!1):s!=null&&tn(e,!!l,s,!0);return;case"textarea":Te("invalid",e),m=f=l=null;for(E in s)if(s.hasOwnProperty(E)&&(A=s[E],A!=null))switch(E){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Fe(e,i,E,A,s,null)}Is(e,l,f,m),Me(e);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Fe(e,i,I,l,s,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<Io.length;l++)Te(Io[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(l=s[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,$,l,s,null)}return;default:if(yu(i)){for(dt in s)s.hasOwnProperty(dt)&&(l=s[dt],l!==void 0&&sh(e,i,dt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Fe(e,i,A,l,s,null))}function Ny(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,A=null,I=null,$=null,dt=null;for(st in s){var gt=s[st];if(s.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=gt;default:l.hasOwnProperty(st)||Fe(e,i,st,null,l,gt)}}for(var at in l){var st=l[at];if(gt=s[at],l.hasOwnProperty(at)&&(st!=null||gt!=null))switch(at){case"type":m=st;break;case"name":f=st;break;case"checked":$=st;break;case"defaultChecked":dt=st;break;case"value":E=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==gt&&Fe(e,i,at,st,l,gt)}}Ve(e,E,A,I,$,dt,m,f);return;case"select":st=E=A=at=null;for(m in s)if(I=s[m],s.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":st=I;default:l.hasOwnProperty(m)||Fe(e,i,m,null,l,I)}for(f in l)if(m=l[f],I=s[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":at=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==I&&Fe(e,i,f,m,l,I)}i=A,s=E,l=st,at!=null?tn(e,!!s,at,!1):!!l!=!!s&&(i!=null?tn(e,!!s,i,!0):tn(e,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,i,A,null,l,f)}for(E in l)if(f=l[E],m=s[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":at=f;break;case"defaultValue":st=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Fe(e,i,E,f,l,m)}wn(e,at,st);return;case"option":for(var re in s)if(at=s[re],s.hasOwnProperty(re)&&at!=null&&!l.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Fe(e,i,re,null,l,at)}for(I in l)if(at=l[I],st=s[I],l.hasOwnProperty(I)&&at!==st&&(at!=null||st!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(e,i,I,at,l,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in s)at=s[ee],s.hasOwnProperty(ee)&&at!=null&&!l.hasOwnProperty(ee)&&Fe(e,i,ee,null,l,at);for($ in l)if(at=l[$],st=s[$],l.hasOwnProperty($)&&at!==st&&(at!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Fe(e,i,$,at,l,st)}return;default:if(yu(i)){for(var He in s)at=s[He],s.hasOwnProperty(He)&&at!==void 0&&!l.hasOwnProperty(He)&&sh(e,i,He,void 0,l,at);for(dt in l)at=l[dt],st=s[dt],!l.hasOwnProperty(dt)||at===st||at===void 0&&st===void 0||sh(e,i,dt,at,l,st);return}}for(var Y in s)at=s[Y],s.hasOwnProperty(Y)&&at!=null&&!l.hasOwnProperty(Y)&&Fe(e,i,Y,null,l,at);for(gt in l)at=l[gt],st=s[gt],!l.hasOwnProperty(gt)||at===st||at==null&&st==null||Fe(e,i,gt,at,l,st)}var rh=null,oh=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function E0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function lh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ch=null;function Py(){var e=window.event;return e&&e.type==="popstate"?e===ch?!1:(ch=e,!0):(ch=null,!1)}var b0=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(e){return A0.resolve(null).then(e).catch(By)}:b0;function By(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function w0(e,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&Ho(E.documentElement),s&2&&Ho(E.body),s&4)for(s=E.head,Ho(s),E=s.firstChild;E;){var A=E.nextSibling,I=E.nodeName;E[Ui]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=A}}if(f===0){e.removeChild(m),jo(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);jo(i)}function uh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":uh(s),Bs(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Iy(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ui])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function Fy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Mi(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Hy(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var hh=null;function R0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function C0(e,i,s){switch(i=pc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ho(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Bs(e)}var gi=new Map,D0=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=nt.d;nt.d={f:Gy,r:Vy,D:ky,C:Xy,L:Wy,m:qy,X:jy,S:Yy,M:Zy};function Gy(){var e=ra.f(),i=rc();return e||i}function Vy(e){var i=_a(e);i!==null&&i.tag===5&&i.type==="form"?Km(i):ra.r(e)}var dr=typeof document>"u"?null:document;function U0(e,i,s){var l=dr;if(l&&typeof i=="string"&&i){var f=Sn(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),D0.has(f)||(D0.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Dn(i,"link",e),cn(i),l.head.appendChild(i)))}}function ky(e){ra.D(e),U0("dns-prefetch",e,null)}function Xy(e,i){ra.C(e,i),U0("preconnect",e,i)}function Wy(e,i,s){ra.L(e,i,s);var l=dr;if(l&&e&&i){var f='link[rel="preload"][as="'+Sn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Sn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Sn(s.imageSizes)+'"]')):f+='[href="'+Sn(e)+'"]';var m=f;switch(i){case"style":m=pr(e);break;case"script":m=mr(e)}gi.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),gi.set(m,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Go(m))||i==="script"&&l.querySelector(Vo(m))||(i=l.createElement("link"),Dn(i,"link",e),cn(i),l.head.appendChild(i)))}}function qy(e,i){ra.m(e,i);var s=dr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Sn(l)+'"][href="'+Sn(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=mr(e)}if(!gi.has(m)&&(e=g({rel:"modulepreload",href:e},i),gi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Vo(m)))return}l=s.createElement("link"),Dn(l,"link",e),cn(l),s.head.appendChild(l)}}}function Yy(e,i,s){ra.S(e,i,s);var l=dr;if(l&&e){var f=xa(l).hoistableStyles,m=pr(e);i=i||"default";var E=f.get(m);if(!E){var A={loading:0,preload:null};if(E=l.querySelector(Go(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=gi.get(m))&&dh(e,s);var I=E=l.createElement("link");cn(I),Dn(I,"link",e),I._p=new Promise(function($,dt){I.onload=$,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(m,E)}}}function jy(e,i){ra.X(e,i);var s=dr;if(s&&e){var l=xa(s).hoistableScripts,f=mr(e),m=l.get(f);m||(m=s.querySelector(Vo(f)),m||(e=g({src:e,async:!0},i),(i=gi.get(f))&&ph(e,i),m=s.createElement("script"),cn(m),Dn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Zy(e,i){ra.M(e,i);var s=dr;if(s&&e){var l=xa(s).hoistableScripts,f=mr(e),m=l.get(f);m||(m=s.querySelector(Vo(f)),m||(e=g({src:e,async:!0,type:"module"},i),(i=gi.get(f))&&ph(e,i),m=s.createElement("script"),cn(m),Dn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function L0(e,i,s,l){var f=(f=it.current)?mc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=pr(s.href),s=xa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=pr(s.href);var m=xa(f).hoistableStyles,E=m.get(e);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=f.querySelector(Go(e)))&&!m._p&&(E.instance=m,E.state.loading=5),gi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(e,s),m||Ky(f,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=mr(s),s=xa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function pr(e){return'href="'+Sn(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function N0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ky(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",s),cn(i),e.head.appendChild(i))}function mr(e){return'[src="'+Sn(e)+'"]'}function Vo(e){return"script[async]"+e}function P0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Sn(s.href)+'"]');if(l)return i.instance=l,cn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),cn(l),Dn(l,"style",f),gc(l,s.precedence,e),i.instance=l;case"stylesheet":f=pr(s.href);var m=e.querySelector(Go(f));if(m)return i.state.loading|=4,i.instance=m,cn(m),m;l=N0(s),(f=gi.get(f))&&dh(l,f),m=(e.ownerDocument||e).createElement("link"),cn(m);var E=m;return E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Dn(m,"link",l),i.state.loading|=4,gc(m,s.precedence,e),i.instance=m;case"script":return m=mr(s.src),(f=e.querySelector(Vo(m)))?(i.instance=f,cn(f),f):(l=s,(f=gi.get(m))&&(l=g({},s),ph(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),cn(f),Dn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,gc(l,s.precedence,e));return i.instance}function gc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var A=l[E];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function dh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var vc=null;function O0(e,i,s){if(vc===null){var l=new Map,f=vc=new Map;f.set(s,l)}else f=vc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[Ui]||m[pn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var A=l.get(E);A?A.push(m):l.set(E,[m])}}return l}function z0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Qy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function B0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ko=null;function Jy(){}function $y(e,i,s){if(ko===null)throw Error(a(475));var l=ko;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=pr(s.href),m=e.querySelector(Go(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=_c.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=m,cn(m);return}m=e.ownerDocument||e,s=N0(s),(f=gi.get(f))&&dh(s,f),m=m.createElement("link"),cn(m);var E=m;E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Dn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function tS(){if(ko===null)throw Error(a(475));var e=ko;return e.stylesheets&&e.count===0&&mh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&mh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)mh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function mh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,i.forEach(eS,e),xc=null,_c.call(e))}function eS(e,i){if(!(i.state.loading&4)){var s=xc.get(e);if(s)var l=s.get(null);else{s=new Map,xc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,f),s.set(E,f),this.count++,l=_c.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Xo={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function nS(e,i,s,l,f,m,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function I0(e,i,s,l,f,m,E,A,I,$,dt,gt){return e=new nS(e,i,s,E,A,I,$,gt),i=1,m===!0&&(i|=24),m=Jn(3,null,null,i),e.current=m,m.stateNode=e,i=Zu(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},$u(m),e}function F0(e){return e?(e=qs,e):qs}function H0(e,i,s,l,f,m){f=F0(f),l.context===null?l.context=f:l.pendingContext=f,l=Ea(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ta(e,l,i),s!==null&&(ii(s,e,i),yo(s,e,i))}function G0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function gh(e,i){G0(e,i),(e=e.alternate)&&G0(e,i)}function V0(e){if(e.tag===13){var i=Ws(e,67108864);i!==null&&ii(i,e,67108864),gh(e,67108864)}}var yc=!0;function iS(e,i,s,l){var f=B.T;B.T=null;var m=nt.p;try{nt.p=2,vh(e,i,s,l)}finally{nt.p=m,B.T=f}}function aS(e,i,s,l){var f=B.T;B.T=null;var m=nt.p;try{nt.p=8,vh(e,i,s,l)}finally{nt.p=m,B.T=f}}function vh(e,i,s,l){if(yc){var f=_h(l);if(f===null)ah(e,i,l,Sc,s),X0(e,l);else if(rS(f,e,i,s,l))l.stopPropagation();else if(X0(e,l),i&4&&-1<sS.indexOf(e)){for(;f!==null;){var m=_a(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Qt(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var I=1<<31-zt(E);A.entanglements[1]|=I,E&=~I}zi(m),(Ne&6)===0&&(ac=Ot()+500,Bo(0))}}break;case 13:A=Ws(m,2),A!==null&&ii(A,m,2),rc(),gh(m,2)}if(m=_h(l),m===null&&ah(e,i,l,Sc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else ah(e,i,l,null,s)}}function _h(e){return e=Mu(e),xh(e)}var Sc=null;function xh(e){if(Sc=null,e=qi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Sc=e,null}function k0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case kt:return 2;case fe:return 8;case Ke:case Qe:return 32;case z:return 268435456;default:return 32}default:return 32}}var yh=!1,Ba=null,Ia=null,Fa=null,Wo=new Map,qo=new Map,Ha=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,i){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function Yo(e,i,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=_a(i),i!==null&&V0(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function rS(e,i,s,l,f){switch(i){case"focusin":return Ba=Yo(Ba,e,i,s,l,f),!0;case"dragenter":return Ia=Yo(Ia,e,i,s,l,f),!0;case"mouseover":return Fa=Yo(Fa,e,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Wo.set(m,Yo(Wo.get(m)||null,e,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,qo.set(m,Yo(qo.get(m)||null,e,i,s,l,f)),!0}return!1}function W0(e){var i=qi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,_i(e.priority,function(){if(s.tag===13){var l=ni();l=oe(l);var f=Ws(s,l);f!==null&&ii(f,s,l),gh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=_h(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Su=l,s.target.dispatchEvent(l),Su=null}else return i=_a(s),i!==null&&V0(i),e.blockedOn=s,!1;i.shift()}return!0}function q0(e,i,s){Mc(e)&&s.delete(i)}function oS(){yh=!1,Ba!==null&&Mc(Ba)&&(Ba=null),Ia!==null&&Mc(Ia)&&(Ia=null),Fa!==null&&Mc(Fa)&&(Fa=null),Wo.forEach(q0),qo.forEach(q0)}function Ec(e,i){e.blockedOn===i&&(e.blockedOn=null,yh||(yh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,oS)))}var Tc=null;function Y0(e){Tc!==e&&(Tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(xh(l||s)===null)continue;break}var m=_a(s);m!==null&&(e.splice(i,3),i-=3,xf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function jo(e){function i(I){return Ec(I,e)}Ba!==null&&Ec(Ba,e),Ia!==null&&Ec(Ia,e),Fa!==null&&Ec(Fa,e),Wo.forEach(i),qo.forEach(i);for(var s=0;s<Ha.length;s++){var l=Ha[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(s=Ha[0],s.blockedOn===null);)W0(s),s.blockedOn===null&&Ha.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],E=f[$e]||null;if(typeof m=="function")E||Y0(s);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[$e]||null)A=E.formAction;else if(xh(f)!==null)continue}else A=E.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Y0(s)}}}function Sh(e){this._internalRoot=e}bc.prototype.render=Sh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ni();H0(s,l,e,i,null,null)},bc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;H0(e.current,2,null,e,null,null),rc(),i[Di]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var i=we();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ha.length&&i!==0&&i<Ha[s].priority;s++);Ha.splice(s,0,e),s===0&&W0(e)}};var j0=t.version;if(j0!=="19.1.1")throw Error(a(527,j0,"19.1.1"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var lS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{ht=Ac.inject(lS),mt=Ac}catch{}}return Ko.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=ug,m=fg,E=hg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=I0(e,1,!1,null,null,s,l,f,m,E,A,null),e[Di]=i.current,ih(e),new Sh(i)},Ko.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",m=ug,E=fg,A=hg,I=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=I0(e,1,!0,i,s??null,l,f,m,E,A,I,$),i.context=F0(null),s=i.current,l=ni(),l=oe(l),f=Ea(l),f.callback=null,Ta(s,f,l),s=l,i.current.lanes=s,Bt(i,s),zi(i),e[Di]=i.current,ih(e),new bc(i)},Ko.version="19.1.1",Ko}var av;function _S(){if(av)return Th.exports;av=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=vS(),Th.exports}var xS=_S();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="180",yS=0,sv=1,SS=2,__=1,MS=2,da=3,Ja=0,Kn=1,Zn=2,pa=0,Or=1,Ir=2,rv=3,ov=4,ES=5,ws=100,TS=101,bS=102,AS=103,wS=104,RS=200,CS=201,DS=202,US=203,cd=204,ud=205,LS=206,NS=207,PS=208,OS=209,zS=210,BS=211,IS=212,FS=213,HS=214,fd=0,hd=1,dd=2,Fr=3,pd=4,md=5,gd=6,vd=7,x_=0,GS=1,VS=2,Qa=0,y_=1,S_=2,M_=3,mu=4,E_=5,T_=6,b_=7,A_=300,Hr=301,Gr=302,_d=303,xd=304,gu=306,yd=1e3,Cs=1001,Sd=1002,li=1003,kS=1004,wc=1005,Hi=1006,Rh=1007,Ds=1008,Xi=1009,w_=1010,R_=1011,fl=1012,ip=1013,Ls=1014,Gi=1015,ma=1016,ap=1017,sp=1018,hl=1020,C_=35902,D_=35899,U_=1021,L_=1022,Ri=1023,dl=1026,pl=1027,rp=1028,op=1029,N_=1030,lp=1031,cp=1033,iu=33776,au=33777,su=33778,ru=33779,Md=35840,Ed=35841,Td=35842,bd=35843,Ad=36196,wd=37492,Rd=37496,Cd=37808,Dd=37809,Ud=37810,Ld=37811,Nd=37812,Pd=37813,Od=37814,zd=37815,Bd=37816,Id=37817,Fd=37818,Hd=37819,Gd=37820,Vd=37821,kd=36492,Xd=36494,Wd=36495,qd=36283,Yd=36284,jd=36285,Zd=36286,XS=3200,WS=3201,P_=0,qS=1,Za="",oi="srgb",Vr="srgb-linear",fu="linear",Oe="srgb",gr=7680,lv=519,YS=512,jS=513,ZS=514,O_=515,KS=516,QS=517,JS=518,$S=519,cv=35044,uv="300 es",Vi=2e3,hu=2001;class jr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fv=1234567;const rl=Math.PI/180,kr=180/Math.PI;function Zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]).toLowerCase()}function Se(r,t,n){return Math.max(t,Math.min(n,r))}function up(r,t){return(r%t+t)%t}function tM(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function eM(r,t,n){return r!==t?(n-r)/(t-r):0}function ol(r,t,n){return(1-n)*r+n*t}function nM(r,t,n,a){return ol(r,t,1-Math.exp(-n*a))}function iM(r,t=1){return t-Math.abs(up(r,t*2)-t)}function aM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function sM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function rM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function oM(r,t){return r+Math.random()*(t-r)}function lM(r){return r*(.5-Math.random())}function cM(r){r!==void 0&&(fv=r);let t=fv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uM(r){return r*rl}function fM(r){return r*kr}function hM(r){return(r&r-1)===0&&r!==0}function dM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mM(r,t,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),d=u(n/2),p=c((t+a)/2),g=u((t+a)/2),v=c((t-a)/2),_=u((t-a)/2),x=c((a-t)/2),M=u((a-t)/2);switch(o){case"XYX":r.set(h*g,d*v,d*_,h*p);break;case"YZY":r.set(d*_,h*g,d*v,h*p);break;case"ZXZ":r.set(d*v,d*_,h*g,h*p);break;case"XZX":r.set(h*g,d*M,d*x,h*p);break;case"YXY":r.set(d*x,h*g,d*M,h*p);break;case"ZYZ":r.set(d*M,d*x,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ka={DEG2RAD:rl,RAD2DEG:kr,generateUUID:Zr,clamp:Se,euclideanModulo:up,mapLinear:tM,inverseLerp:eM,lerp:ol,damp:nM,pingpong:iM,smoothstep:aM,smootherstep:sM,randInt:rM,randFloat:oM,randFloatSpread:lM,seededRandom:cM,degToRad:uM,radToDeg:fM,isPowerOfTwo:hM,ceilPowerOfTwo:dM,floorPowerOfTwo:pM,setQuaternionFromProperEuler:mM,normalize:Hn,denormalize:Lr};class Ft{constructor(t=0,n=0){Ft.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kr{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let d=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];const _=c[u+0],x=c[u+1],M=c[u+2],T=c[u+3];if(h===0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=M,t[n+3]=T;return}if(v!==T||d!==_||p!==x||g!==M){let S=1-h;const y=d*_+p*x+g*M+v*T,L=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const N=Math.sqrt(U),P=Math.atan2(N,y*L);S=Math.sin(S*P)/N,h=Math.sin(h*P)/N}const w=h*L;if(d=d*S+_*w,p=p*S+x*w,g=g*S+M*w,v=v*S+T*w,S===1-h){const N=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=N,p*=N,g*=N,v*=N}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],d=a[o+1],p=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],M=c[u+3];return t[n]=h*M+g*v+d*x-p*_,t[n+1]=d*M+g*_+p*v-h*x,t[n+2]=p*M+g*x+h*_-d*v,t[n+3]=g*M-h*v-d*_-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(o/2),v=h(c/2),_=d(a/2),x=d(o/2),M=d(c/2);switch(u){case"XYZ":this._x=_*g*v+p*x*M,this._y=p*x*v-_*g*M,this._z=p*g*M+_*x*v,this._w=p*g*v-_*x*M;break;case"YXZ":this._x=_*g*v+p*x*M,this._y=p*x*v-_*g*M,this._z=p*g*M-_*x*v,this._w=p*g*v+_*x*M;break;case"ZXY":this._x=_*g*v-p*x*M,this._y=p*x*v+_*g*M,this._z=p*g*M+_*x*v,this._w=p*g*v-_*x*M;break;case"ZYX":this._x=_*g*v-p*x*M,this._y=p*x*v+_*g*M,this._z=p*g*M-_*x*v,this._w=p*g*v+_*x*M;break;case"YZX":this._x=_*g*v+p*x*M,this._y=p*x*v+_*g*M,this._z=p*g*M-_*x*v,this._w=p*g*v-_*x*M;break;case"XZY":this._x=_*g*v-p*x*M,this._y=p*x*v-_*g*M,this._z=p*g*M+_*x*v,this._w=p*g*v+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-d)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(g-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*d,this._y=o*g+u*d+c*h-a*p,this._z=c*g+u*p+a*d-o*h,this._w=u*g-a*h-o*d-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),v=Math.sin((1-n)*g)/p,_=Math.sin(n*g)/p;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,n=0,a=0){V.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(hv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(hv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,d=t.w,p=2*(u*o-h*a),g=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+d*p+u*v-h*g,this.y=a+d*g+h*p-c*v,this.z=o+d*v+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,d=n.z;return this.x=o*d-c*h,this.y=c*u-a*d,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new V,hv=new Kr;class pe{constructor(t,n,a,o,c,u,h,d,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,d,p)}set(t,n,a,o,c,u,h,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],v=a[7],_=a[2],x=a[5],M=a[8],T=o[0],S=o[3],y=o[6],L=o[1],U=o[4],w=o[7],N=o[2],P=o[5],F=o[8];return c[0]=u*T+h*L+d*N,c[3]=u*S+h*U+d*P,c[6]=u*y+h*w+d*F,c[1]=p*T+g*L+v*N,c[4]=p*S+g*U+v*P,c[7]=p*y+g*w+v*F,c[2]=_*T+x*L+M*N,c[5]=_*S+x*U+M*P,c[8]=_*y+x*w+M*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-a*c*g+a*h*d+o*c*p-o*u*d}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=g*u-h*p,_=h*d-g*c,x=p*c-u*d,M=n*v+a*_+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(o*p-g*a)*T,t[2]=(h*a-o*u)*T,t[3]=_*T,t[4]=(g*n-o*d)*T,t[5]=(o*c-h*n)*T,t[6]=x*T,t[7]=(a*d-p*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*h)+u+t,-o*p,o*d,-o*(-p*u+d*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Dh.makeScale(t,n)),this}rotate(t){return this.premultiply(Dh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Dh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new pe;function z_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gM(){const r=du("canvas");return r.style.display="block",r}const dv={};function ml(r){r in dv||(dv[r]=!0,console.warn(r))}function vM(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const pv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Oe&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Oe&&(o.r=zr(o.r),o.g=zr(o.g),o.b=zr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Za?fu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ml("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ml("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Vr]:{primaries:t,whitePoint:a,transfer:fu,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:a,transfer:Oe,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const Re=_M();function ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class xM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{vr===void 0&&(vr=du("canvas")),vr.width=t.width,vr.height=t.height;const o=vr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=vr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=du("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ga(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ga(n[a]/255)*255):n[a]=ga(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class fp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Uh(o[u].image)):c.push(Uh(o[u]))}else c=Uh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SM=0;const Lh=new V;class Vn extends jr{constructor(t=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,a=Cs,o=Cs,c=Hi,u=Ds,h=Ri,d=Xi,p=Vn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Zr(),this.name="",this.source=new fp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=A_;Vn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,n=0,a=0,o=1){Ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const d=t.elements,p=d[0],g=d[4],v=d[8],_=d[1],x=d[5],M=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,w=(x+1)/2,N=(y+1)/2,P=(g+_)/4,F=(v+T)/4,G=(M+S)/4;return U>w&&U>N?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=P/a,c=F/a):w>N?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=P/o,c=G/o):N<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(N),a=F/c,o=G/c),this.set(a,o,c,n),this}let L=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-T)/L,this.z=(_-g)/L,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MM extends jr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new Vn(o);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new fp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends MM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class B_ extends Vn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends Vn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ei):Ei.fromBufferAttribute(c,u),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Rc.copy(a.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Cc.subVectors(this.max,Qo),_r.subVectors(t.a,Qo),xr.subVectors(t.b,Qo),yr.subVectors(t.c,Qo),Va.subVectors(xr,_r),ka.subVectors(yr,xr),_s.subVectors(_r,yr);let n=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-_s.z,_s.y,Va.z,0,-Va.x,ka.z,0,-ka.x,_s.z,0,-_s.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-_s.y,_s.x,0];return!Nh(n,_r,xr,yr,Cc)||(n=[1,0,0,0,1,0,0,0,1],!Nh(n,_r,xr,yr,Cc))?!1:(Dc.crossVectors(Va,ka),n=[Dc.x,Dc.y,Dc.z],Nh(n,_r,xr,yr,Cc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new V,new V,new V,new V,new V,new V,new V,new V],Ei=new V,Rc=new Ps,_r=new V,xr=new V,yr=new V,Va=new V,ka=new V,_s=new V,Qo=new V,Cc=new V,Dc=new V,xs=new V;function Nh(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){xs.fromArray(r,c);const h=o.x*Math.abs(xs.x)+o.y*Math.abs(xs.y)+o.z*Math.abs(xs.z),d=t.dot(xs),p=n.dot(xs),g=a.dot(xs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const TM=new Ps,Jo=new V,Ph=new V;class Qr{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):TM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Jo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(Ph)),this.expandByPoint(Jo.copy(t.center).sub(Ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new V,Oh=new V,Uc=new V,Xa=new V,zh=new V,Lc=new V,Bh=new V;class I_{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=la.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Oh.copy(t).add(n).multiplyScalar(.5),Uc.copy(n).sub(t).normalize(),Xa.copy(this.origin).sub(Oh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Uc),h=Xa.dot(this.direction),d=-Xa.dot(Uc),p=Xa.lengthSq(),g=Math.abs(1-u*u);let v,_,x,M;if(g>0)if(v=u*d-h,_=u*h-d,M=c*g,v>=0)if(_>=-M)if(_<=M){const T=1/g;v*=T,_*=T,x=v*(v+u*_+2*h)+_*(u*v+_+2*d)+p}else _=c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*d)+p;else _=-c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*d)+p;else _<=-M?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p):_<=M?(v=0,_=Math.min(Math.max(-c,-d),c),x=_*(_+2*d)+p):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Oh).addScaledVector(Uc,_),x}intersectSphere(t,n){la.subVectors(t.center,this.origin);const a=la.dot(this.direction),o=la.dot(la)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),a>d||h>o)||((h>a||a!==a)&&(a=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,n,a,o,c){zh.subVectors(n,t),Lc.subVectors(a,t),Bh.crossVectors(zh,Lc);let u=this.direction.dot(Bh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Xa.subVectors(this.origin,t);const d=h*this.direction.dot(Lc.crossVectors(Xa,Lc));if(d<0)return null;const p=h*this.direction.dot(zh.cross(Xa));if(p<0||d+p>u)return null;const g=-h*Xa.dot(Bh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,n,a,o,c,u,h,d,p,g,v,_,x,M,T,S){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,d,p,g,v,_,x,M,T,S)}set(t,n,a,o,c,u,h,d,p,g,v,_,x,M,T,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=d,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Sr.setFromMatrixColumn(t,0).length(),c=1/Sr.setFromMatrixColumn(t,1).length(),u=1/Sr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,M=h*g,T=h*v;n[0]=d*g,n[4]=-d*v,n[8]=p,n[1]=x+M*p,n[5]=_-T*p,n[9]=-h*d,n[2]=T-_*p,n[6]=M+x*p,n[10]=u*d}else if(t.order==="YXZ"){const _=d*g,x=d*v,M=p*g,T=p*v;n[0]=_+T*h,n[4]=M*h-x,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=x*h-M,n[6]=T+_*h,n[10]=u*d}else if(t.order==="ZXY"){const _=d*g,x=d*v,M=p*g,T=p*v;n[0]=_-T*h,n[4]=-u*v,n[8]=M+x*h,n[1]=x+M*h,n[5]=u*g,n[9]=T-_*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(t.order==="ZYX"){const _=u*g,x=u*v,M=h*g,T=h*v;n[0]=d*g,n[4]=M*p-x,n[8]=_*p+T,n[1]=d*v,n[5]=T*p+_,n[9]=x*p-M,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(t.order==="YZX"){const _=u*d,x=u*p,M=h*d,T=h*p;n[0]=d*g,n[4]=T-_*v,n[8]=M*v+x,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*v+M,n[10]=_-T*v}else if(t.order==="XZY"){const _=u*d,x=u*p,M=h*d,T=h*p;n[0]=d*g,n[4]=-v,n[8]=p*g,n[1]=_*v+T,n[5]=u*g,n[9]=x*v-M,n[2]=M*v-x,n[6]=h*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bM,t,AM)}lookAt(t,n,a){const o=this.elements;return ai.subVectors(t,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Wa.crossVectors(a,ai),Wa.lengthSq()===0&&(Math.abs(a.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Wa.crossVectors(a,ai)),Wa.normalize(),Nc.crossVectors(ai,Wa),o[0]=Wa.x,o[4]=Nc.x,o[8]=ai.x,o[1]=Wa.y,o[5]=Nc.y,o[9]=ai.y,o[2]=Wa.z,o[6]=Nc.z,o[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],v=a[5],_=a[9],x=a[13],M=a[2],T=a[6],S=a[10],y=a[14],L=a[3],U=a[7],w=a[11],N=a[15],P=o[0],F=o[4],G=o[8],C=o[12],D=o[1],k=o[5],Z=o[9],lt=o[13],ut=o[2],ft=o[6],B=o[10],nt=o[14],j=o[3],yt=o[7],O=o[11],tt=o[15];return c[0]=u*P+h*D+d*ut+p*j,c[4]=u*F+h*k+d*ft+p*yt,c[8]=u*G+h*Z+d*B+p*O,c[12]=u*C+h*lt+d*nt+p*tt,c[1]=g*P+v*D+_*ut+x*j,c[5]=g*F+v*k+_*ft+x*yt,c[9]=g*G+v*Z+_*B+x*O,c[13]=g*C+v*lt+_*nt+x*tt,c[2]=M*P+T*D+S*ut+y*j,c[6]=M*F+T*k+S*ft+y*yt,c[10]=M*G+T*Z+S*B+y*O,c[14]=M*C+T*lt+S*nt+y*tt,c[3]=L*P+U*D+w*ut+N*j,c[7]=L*F+U*k+w*ft+N*yt,c[11]=L*G+U*Z+w*B+N*O,c[15]=L*C+U*lt+w*nt+N*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],d=t[9],p=t[13],g=t[2],v=t[6],_=t[10],x=t[14],M=t[3],T=t[7],S=t[11],y=t[15];return M*(+c*d*v-o*p*v-c*h*_+a*p*_+o*h*x-a*d*x)+T*(+n*d*x-n*p*_+c*u*_-o*u*x+o*p*g-c*d*g)+S*(+n*p*v-n*h*x-c*u*v+a*u*x+c*h*g-a*p*g)+y*(-o*h*g-n*d*v+n*h*_+o*u*v-a*u*_+a*d*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],x=t[11],M=t[12],T=t[13],S=t[14],y=t[15],L=v*S*p-T*_*p+T*d*x-h*S*x-v*d*y+h*_*y,U=M*_*p-g*S*p-M*d*x+u*S*x+g*d*y-u*_*y,w=g*T*p-M*v*p+M*h*x-u*T*x-g*h*y+u*v*y,N=M*v*d-g*T*d-M*h*_+u*T*_+g*h*S-u*v*S,P=n*L+a*U+o*w+c*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return t[0]=L*F,t[1]=(T*_*c-v*S*c-T*o*x+a*S*x+v*o*y-a*_*y)*F,t[2]=(h*S*c-T*d*c+T*o*p-a*S*p-h*o*y+a*d*y)*F,t[3]=(v*d*c-h*_*c-v*o*p+a*_*p+h*o*x-a*d*x)*F,t[4]=U*F,t[5]=(g*S*c-M*_*c+M*o*x-n*S*x-g*o*y+n*_*y)*F,t[6]=(M*d*c-u*S*c-M*o*p+n*S*p+u*o*y-n*d*y)*F,t[7]=(u*_*c-g*d*c+g*o*p-n*_*p-u*o*x+n*d*x)*F,t[8]=w*F,t[9]=(M*v*c-g*T*c-M*a*x+n*T*x+g*a*y-n*v*y)*F,t[10]=(u*T*c-M*h*c+M*a*p-n*T*p-u*a*y+n*h*y)*F,t[11]=(g*h*c-u*v*c-g*a*p+n*v*p+u*a*x-n*h*x)*F,t[12]=N*F,t[13]=(g*T*o-M*v*o+M*a*_-n*T*_-g*a*S+n*v*S)*F,t[14]=(M*h*o-u*T*o-M*a*d+n*T*d+u*a*S-n*h*S)*F,t[15]=(u*v*o-g*h*o+g*a*d-n*v*d-u*a*_+n*h*_)*F,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,d=t.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+a,g*d-o*u,0,p*d-o*h,g*d+o*u,c*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,v=h+h,_=c*p,x=c*g,M=c*v,T=u*g,S=u*v,y=h*v,L=d*p,U=d*g,w=d*v,N=a.x,P=a.y,F=a.z;return o[0]=(1-(T+y))*N,o[1]=(x+w)*N,o[2]=(M-U)*N,o[3]=0,o[4]=(x-w)*P,o[5]=(1-(_+y))*P,o[6]=(S+L)*P,o[7]=0,o[8]=(M+U)*F,o[9]=(S-L)*F,o[10]=(1-(_+T))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=Sr.set(o[0],o[1],o[2]).length();const u=Sr.set(o[4],o[5],o[6]).length(),h=Sr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ti.copy(this);const p=1/c,g=1/u,v=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,n.setFromRotationMatrix(Ti),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=Vi,d=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(a-o),_=(n+t)/(n-t),x=(a+o)/(a-o);let M,T;if(d)M=c/(u-c),T=u*c/(u-c);else if(h===Vi)M=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===hu)M=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=Vi,d=!1){const p=this.elements,g=2/(n-t),v=2/(a-o),_=-(n+t)/(n-t),x=-(a+o)/(a-o);let M,T;if(d)M=1/(u-c),T=u/(u-c);else if(h===Vi)M=-2/(u-c),T=-(u+c)/(u-c);else if(h===hu)M=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Sr=new V,Ti=new Xe,bM=new V(0,0,0),AM=new V(1,1,1),Wa=new V,Nc=new V,ai=new V,gv=new Xe,vv=new Kr;class Wi{constructor(t=0,n=0,a=0,o=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return gv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vv.setFromEuler(this),this.setFromQuaternion(vv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wM=0;const _v=new V,Mr=new Kr,ca=new Xe,Pc=new V,$o=new V,RM=new V,CM=new Kr,xv=new V(1,0,0),yv=new V(0,1,0),Sv=new V(0,0,1),Mv={type:"added"},DM={type:"removed"},Er={type:"childadded",child:null},Ih={type:"childremoved",child:null};class on extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new V,n=new Wi,a=new Kr,o=new V(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xe},normalMatrix:{value:new pe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Mr.setFromAxisAngle(t,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,n){return Mr.setFromAxisAngle(t,n),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(xv,t)}rotateY(t){return this.rotateOnAxis(yv,t)}rotateZ(t){return this.rotateOnAxis(Sv,t)}translateOnAxis(t,n){return _v.copy(t).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(xv,t)}translateY(t){return this.translateOnAxis(yv,t)}translateZ(t){return this.translateOnAxis(Sv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Pc.copy(t):Pc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt($o,Pc,this.up):ca.lookAt(Pc,$o,this.up),this.quaternion.setFromRotationMatrix(ca),o&&(ca.extractRotation(o.matrixWorld),Mr.setFromRotationMatrix(ca),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mv),Er.child=t,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(DM),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mv),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,CM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(t.shapes,v)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(t.animations,d))}}if(n){const h=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),M=u(t.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}on.DEFAULT_UP=new V(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new V,ua=new V,Fh=new V,fa=new V,Tr=new V,br=new V,Ev=new V,Hh=new V,Gh=new V,Vh=new V,kh=new Ge,Xh=new Ge,Wh=new Ge;class wi{constructor(t=new V,n=new V,a=new V){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),bi.subVectors(t,n),o.cross(bi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){bi.subVectors(o,n),ua.subVectors(a,n),Fh.subVectors(t,n);const u=bi.dot(bi),h=bi.dot(ua),d=bi.dot(Fh),p=ua.dot(ua),g=ua.dot(Fh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(p*d-h*g)*_,M=(u*g-h*d)*_;return c.set(1-x-M,M,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,n,a,o,c,u,h,d){return this.getBarycoord(t,n,a,o,fa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,fa.x),d.addScaledVector(u,fa.y),d.addScaledVector(h,fa.z),d)}static getInterpolatedAttribute(t,n,a,o,c,u){return kh.setScalar(0),Xh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(t,n),Xh.fromBufferAttribute(t,a),Wh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(kh,c.x),u.addScaledVector(Xh,c.y),u.addScaledVector(Wh,c.z),u}static isFrontFacing(t,n,a,o){return bi.subVectors(a,n),ua.subVectors(t,n),bi.cross(ua).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),bi.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return wi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return wi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Tr.subVectors(o,a),br.subVectors(c,a),Hh.subVectors(t,a);const d=Tr.dot(Hh),p=br.dot(Hh);if(d<=0&&p<=0)return n.copy(a);Gh.subVectors(t,o);const g=Tr.dot(Gh),v=br.dot(Gh);if(g>=0&&v<=g)return n.copy(o);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Tr,u);Vh.subVectors(t,c);const x=Tr.dot(Vh),M=br.dot(Vh);if(M>=0&&x<=M)return n.copy(c);const T=x*p-d*M;if(T<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(a).addScaledVector(br,h);const S=g*M-x*v;if(S<=0&&v-g>=0&&x-M>=0)return Ev.subVectors(c,o),h=(v-g)/(v-g+(x-M)),n.copy(o).addScaledVector(Ev,h);const y=1/(S+T+_);return u=T*y,h=_*y,n.copy(a).addScaledVector(Tr,u).addScaledVector(br,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function qh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ce{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Re.workingColorSpace){if(t=up(t,1),n=Se(n,0,1),a=Se(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=qh(u,c,t+1/3),this.g=qh(u,c,t),this.b=qh(u,c,t-1/3)}return Re.colorSpaceToWorking(this,o),this}setStyle(t,n=oi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=oi){const a=H_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Re.workingToColorSpace(zn.copy(this),t),Math.round(Se(zn.r*255,0,255))*65536+Math.round(Se(zn.g*255,0,255))*256+Math.round(Se(zn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(zn.copy(this),n);const a=zn.r,o=zn.g,c=zn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case a:d=(o-c)/v+(o<c?6:0);break;case o:d=(c-a)/v+2;break;case c:d=(a-o)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=oi){Re.workingToColorSpace(zn.copy(this),t);const n=zn.r,a=zn.g,o=zn.b;return t!==oi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+n,qa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(qa),t.getHSL(Oc);const a=ol(qa.h,Oc.h,n),o=ol(qa.s,Oc.s,n),c=ol(qa.l,Oc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ce;ce.NAMES=H_;let UM=0;class Jr extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Or,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(a.blending=this.blending),this.side!==Ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==cd&&(a.blendSrc=this.blendSrc),this.blendDst!==ud&&(a.blendDst=this.blendDst),this.blendEquation!==ws&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Us extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new V,zc=new Ft;let LM=0;class ci{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=cv,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)zc.fromBufferAttribute(this,n),zc.applyMatrix3(t),this.setXY(n,zc.x,zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Lr(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Hn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Lr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Lr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Lr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Lr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),a=Hn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),a=Hn(a,this.array),o=Hn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),a=Hn(a,this.array),o=Hn(o,this.array),c=Hn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cv&&(t.usage=this.usage),t}}class G_ extends ci{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class V_ extends ci{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class be extends ci{constructor(t,n,a){super(new Float32Array(t),n,a)}}let NM=0;const vi=new Xe,Yh=new on,Ar=new V,si=new Ps,tl=new Ps,bn=new V;class rn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z_(t)?V_:G_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,n,a){return vi.makeTranslation(t,n,a),this.applyMatrix4(vi),this}scale(t,n,a){return vi.makeScale(t,n,a),this.applyMatrix4(vi),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new be(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];si.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const a=this.boundingSphere.center;if(si.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(si.min,tl.min),si.expandByPoint(bn),bn.addVectors(si.max,tl.max),si.expandByPoint(bn)):(si.expandByPoint(tl.min),si.expandByPoint(tl.max))}si.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)bn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),d&&(Ar.fromBufferAttribute(t,p),bn.add(Ar)),o=Math.max(o,a.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let G=0;G<a.count;G++)h[G]=new V,d[G]=new V;const p=new V,g=new V,v=new V,_=new Ft,x=new Ft,M=new Ft,T=new V,S=new V;function y(G,C,D){p.fromBufferAttribute(a,G),g.fromBufferAttribute(a,C),v.fromBufferAttribute(a,D),_.fromBufferAttribute(c,G),x.fromBufferAttribute(c,C),M.fromBufferAttribute(c,D),g.sub(p),v.sub(p),x.sub(_),M.sub(_);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(k),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(k),h[G].add(T),h[C].add(T),h[D].add(T),d[G].add(S),d[C].add(S),d[D].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let G=0,C=L.length;G<C;++G){const D=L[G],k=D.start,Z=D.count;for(let lt=k,ut=k+Z;lt<ut;lt+=3)y(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const U=new V,w=new V,N=new V,P=new V;function F(G){N.fromBufferAttribute(o,G),P.copy(N);const C=h[G];U.copy(C),U.sub(N.multiplyScalar(N.dot(C))).normalize(),w.crossVectors(P,C);const k=w.dot(d[G])<0?-1:1;u.setXYZW(G,U.x,U.y,U.z,k)}for(let G=0,C=L.length;G<C;++G){const D=L[G],k=D.start,Z=D.count;for(let lt=k,ut=k+Z;lt<ut;lt+=3)F(t.getX(lt+0)),F(t.getX(lt+1)),F(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new V,c=new V,u=new V,h=new V,d=new V,p=new V,g=new V,v=new V;if(t)for(let _=0,x=t.count;_<x;_+=3){const M=t.getX(_+0),T=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,M),d.fromBufferAttribute(a,T),p.fromBufferAttribute(a,S),h.add(g),d.add(g),p.add(g),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(d.length*g);let x=0,M=0;for(let T=0,S=d.length;T<S;T++){h.isInterleavedBufferAttribute?x=d[T]*h.data.stride+h.offset:x=d[T]*g;for(let y=0;y<g;y++)_[M++]=p[x++]}return new ci(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,a=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=t(d,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=t(_,a);d.push(x)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(t.data))}g.length>0&&(o[d]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tv=new Xe,ys=new I_,Bc=new Qr,bv=new V,Ic=new V,Fc=new V,Hc=new V,jh=new V,Gc=new V,Av=new V,Vc=new V;class se extends on{constructor(t=new rn,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],v=c[d];g!==0&&(jh.fromBufferAttribute(v,t),u?Gc.addScaledVector(jh,g):Gc.addScaledVector(jh.sub(n),g))}n.add(Gc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(c),ys.copy(t.ray).recast(t.near),!(Bc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Bc,bv)===null||ys.origin.distanceToSquared(bv)>(t.far-t.near)**2))&&(Tv.copy(c).invert(),ys.copy(t.ray).applyMatrix4(Tv),!(a.boundingBox!==null&&ys.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ys)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,N=U;w<N;w+=3){const P=h.getX(w),F=h.getX(w+1),G=h.getX(w+2);o=kc(this,y,t,a,p,g,v,P,F,G),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const L=h.getX(S),U=h.getX(S+1),w=h.getX(S+2);o=kc(this,u,t,a,p,g,v,L,U,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,N=U;w<N;w+=3){const P=w,F=w+1,G=w+2;o=kc(this,y,t,a,p,g,v,P,F,G),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const L=S,U=S+1,w=S+2;o=kc(this,u,t,a,p,g,v,L,U,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function PM(r,t,n,a,o,c,u,h){let d;if(t.side===Kn?d=a.intersectTriangle(u,c,o,!0,h):d=a.intersectTriangle(o,c,u,t.side===Ja,h),d===null)return null;Vc.copy(h),Vc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Vc);return p<n.near||p>n.far?null:{distance:p,point:Vc.clone(),object:r}}function kc(r,t,n,a,o,c,u,h,d,p){r.getVertexPosition(h,Ic),r.getVertexPosition(d,Fc),r.getVertexPosition(p,Hc);const g=PM(r,t,n,a,Ic,Fc,Hc,Av);if(g){const v=new V;wi.getBarycoord(Av,Ic,Fc,Hc,v),o&&(g.uv=wi.getInterpolatedAttribute(o,h,d,p,v,new Ft)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,d,p,v,new Ft)),u&&(g.normal=wi.getInterpolatedAttribute(u,h,d,p,v,new V),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new V,materialIndex:0};wi.getNormal(Ic,Fc,Hc,_.normal),g.face=_,g.barycoord=v}return g}class Fi extends rn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,x=0;M("z","y","x",-1,-1,a,n,t,u,c,0),M("z","y","x",1,-1,a,n,-t,u,c,1),M("x","z","y",1,1,t,a,n,o,u,2),M("x","z","y",1,-1,t,a,-n,o,u,3),M("x","y","z",1,-1,t,n,a,o,c,4),M("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(d),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(v,2));function M(T,S,y,L,U,w,N,P,F,G,C){const D=w/F,k=N/G,Z=w/2,lt=N/2,ut=P/2,ft=F+1,B=G+1;let nt=0,j=0;const yt=new V;for(let O=0;O<B;O++){const tt=O*k-lt;for(let xt=0;xt<ft;xt++){const St=xt*D-Z;yt[T]=St*L,yt[S]=tt*U,yt[y]=ut,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[S]=0,yt[y]=P>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(xt/F),v.push(1-O/G),nt+=1}}for(let O=0;O<G;O++)for(let tt=0;tt<F;tt++){const xt=_+tt+ft*O,St=_+tt+ft*(O+1),Ut=_+(tt+1)+ft*(O+1),Gt=_+(tt+1)+ft*O;d.push(xt,St,Gt),d.push(St,Ut,Gt),j+=6}h.addGroup(x,j,C),x+=j,_+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Gn(r){const t={};for(let n=0;n<r.length;n++){const a=Xr(r[n]);for(const o in a)t[o]=a[o]}return t}function OM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function k_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const gl={clone:Xr,merge:Gn};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=OM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class X_ extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new V,wv=new Ft,Rv=new Ft;class jn extends X_{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,n){return this.getViewBounds(t,wv,Rv),n.subVectors(Rv,wv)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(rl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/d,n-=u.offsetY*a/p,o*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wr=-90,Rr=1;class IM extends on{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new jn(wr,Rr,t,n);o.layers=this.layers,this.add(o);const c=new jn(wr,Rr,t,n);c.layers=this.layers,this.add(c);const u=new jn(wr,Rr,t,n);u.layers=this.layers,this.add(u);const h=new jn(wr,Rr,t,n);h.layers=this.layers,this.add(h);const d=new jn(wr,Rr,t,n);d.layers=this.layers,this.add(d);const p=new jn(wr,Rr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,d]=n;for(const p of n)this.remove(p);if(t===Vi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===hu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,d),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class W_ extends Vn{constructor(t=[],n=Hr,a,o,c,u,h,d,p,g){super(t,n,a,o,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class FM extends Ci{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new W_(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Fi(5,5,5),c=new _n({name:"CubemapFromEquirect",uniforms:Xr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Kn,blending:pa});c.uniforms.tEquirect.value=n;const u=new se(o,c),h=n.minFilter;return n.minFilter===Ds&&(n.minFilter=Hi),new IM(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class vn extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const T of t.hand.values()){const S=n.getJointPose(T,a),y=this._getHandJoint(p,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,M=.005;p.inputState.pinching&&_>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new vn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class vu{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=n}clone(){return new vu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class GM extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class VM extends Vn{constructor(t=null,n=1,a=1,o,c,u,h,d,p=li,g=li,v,_){super(null,u,h,d,p,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cv extends ci{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cr=new Xe,Dv=new Xe,Xc=[],Uv=new Ps,kM=new Xe,el=new se,nl=new Qr;class Lv extends se{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Cv(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,kM)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Cr),Uv.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(Uv)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Cr),nl.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(nl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(el.geometry=this.geometry,el.material=this.material,el.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nl.copy(this.boundingSphere),nl.applyMatrix4(a),t.ray.intersectsSphere(nl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Cr),Dv.multiplyMatrices(a,Cr),el.matrixWorld=Dv,el.raycast(t,Xc);for(let u=0,h=Xc.length;u<h;u++){const d=Xc[u];d.instanceId=c,d.object=this,n.push(d)}Xc.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Cv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new VM(new Float32Array(o*this.count),o,this.count,rp,Gi));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=o*t;c[d]=h,c.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kh=new V,XM=new V,WM=new pe;class bs{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Kh.subVectors(a,n).cross(XM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Kh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||WM.getNormalMatrix(t),o=this.coplanarPoint(Kh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Qr,qM=new Ft(.5,.5),Wc=new V;class hp{constructor(t=new bs,n=new bs,a=new bs,o=new bs,c=new bs,u=new bs){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Vi,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],v=c[5],_=c[6],x=c[7],M=c[8],T=c[9],S=c[10],y=c[11],L=c[12],U=c[13],w=c[14],N=c[15];if(o[0].setComponents(p-u,x-g,y-M,N-L).normalize(),o[1].setComponents(p+u,x+g,y+M,N+L).normalize(),o[2].setComponents(p+h,x+v,y+T,N+U).normalize(),o[3].setComponents(p-h,x-v,y-T,N-U).normalize(),a)o[4].setComponents(d,_,S,w).normalize(),o[5].setComponents(p-d,x-_,y-S,N-w).normalize();else if(o[4].setComponents(p-d,x-_,y-S,N-w).normalize(),n===Vi)o[5].setComponents(p+d,x+_,y+S,N+w).normalize();else if(n===hu)o[5].setComponents(d,_,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){Ss.center.set(0,0,0);const n=qM.distanceTo(t.center);return Ss.radius=.7071067811865476+n,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Wc.x=o.normal.x>0?t.max.x:t.min.x,Wc.y=o.normal.y>0?t.max.y:t.min.y,Wc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YM extends Jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nv=new Xe,Kd=new I_,qc=new Qr,Yc=new V;class jM extends on{constructor(t=new rn,n=new YM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(o),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;Nv.copy(o).invert(),Kd.copy(t.ray).applyMatrix4(Nv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=a.index,v=a.attributes.position;if(p!==null){const _=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let M=_,T=x;M<T;M++){const S=p.getX(M);Yc.fromBufferAttribute(v,S),Pv(Yc,S,d,o,t,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=_,T=x;M<T;M++)Yc.fromBufferAttribute(v,M),Pv(Yc,M,d,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Pv(r,t,n,a,o,c,u){const h=Kd.distanceSqToPoint(r);if(h<n){const d=new V;Kd.closestPointToPoint(r,d),d.applyMatrix4(a);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class q_ extends Vn{constructor(t,n,a=Ls,o,c,u,h=li,d=li,p,g=dl,v=1){if(g!==dl&&g!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,h,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Y_ extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class dp extends rn{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],d=[],p=new V,g=new Ft;u.push(0,0,0),h.push(0,0,1),d.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const x=a+v/n*o;p.x=t*Math.cos(x),p.y=t*Math.sin(x),u.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(u[_]/t+1)/2,g.y=(u[_+1]/t+1)/2,d.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class An extends rn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:d};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],x=[];let M=0;const T=[],S=a/2;let y=0;L(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new be(v,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(x,2));function L(){const w=new V,N=new V;let P=0;const F=(n-t)/a;for(let G=0;G<=c;G++){const C=[],D=G/c,k=D*(n-t)+t;for(let Z=0;Z<=o;Z++){const lt=Z/o,ut=lt*d+h,ft=Math.sin(ut),B=Math.cos(ut);N.x=k*ft,N.y=-D*a+S,N.z=k*B,v.push(N.x,N.y,N.z),w.set(ft,F,B).normalize(),_.push(w.x,w.y,w.z),x.push(lt,1-D),C.push(M++)}T.push(C)}for(let G=0;G<o;G++)for(let C=0;C<c;C++){const D=T[C][G],k=T[C+1][G],Z=T[C+1][G+1],lt=T[C][G+1];(t>0||C!==0)&&(g.push(D,k,lt),P+=3),(n>0||C!==c-1)&&(g.push(k,Z,lt),P+=3)}p.addGroup(y,P,0),y+=P}function U(w){const N=M,P=new Ft,F=new V;let G=0;const C=w===!0?t:n,D=w===!0?1:-1;for(let Z=1;Z<=o;Z++)v.push(0,S*D,0),_.push(0,D,0),x.push(.5,.5),M++;const k=M;for(let Z=0;Z<=o;Z++){const ut=Z/o*d+h,ft=Math.cos(ut),B=Math.sin(ut);F.x=C*B,F.y=S*D,F.z=C*ft,v.push(F.x,F.y,F.z),_.push(0,D,0),P.x=ft*.5+.5,P.y=B*.5*D+.5,x.push(P.x,P.y),M++}for(let Z=0;Z<o;Z++){const lt=N+Z,ut=k+Z;w===!0?g.push(ut,ut+1,lt):g.push(ut+1,ut,lt),G+=3}p.addGroup(y,G,w===!0?1:2),y+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pp extends An{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new pp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mp extends rn{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],u=[];h(o),p(a),g(),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(c.slice(),3)),this.setAttribute("uv",new be(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const U=new V,w=new V,N=new V;for(let P=0;P<n.length;P+=3)x(n[P+0],U),x(n[P+1],w),x(n[P+2],N),d(U,w,N,L)}function d(L,U,w,N){const P=N+1,F=[];for(let G=0;G<=P;G++){F[G]=[];const C=L.clone().lerp(w,G/P),D=U.clone().lerp(w,G/P),k=P-G;for(let Z=0;Z<=k;Z++)Z===0&&G===P?F[G][Z]=C:F[G][Z]=C.clone().lerp(D,Z/k)}for(let G=0;G<P;G++)for(let C=0;C<2*(P-G)-1;C++){const D=Math.floor(C/2);C%2===0?(_(F[G][D+1]),_(F[G+1][D]),_(F[G][D])):(_(F[G][D+1]),_(F[G+1][D+1]),_(F[G+1][D]))}}function p(L){const U=new V;for(let w=0;w<c.length;w+=3)U.x=c[w+0],U.y=c[w+1],U.z=c[w+2],U.normalize().multiplyScalar(L),c[w+0]=U.x,c[w+1]=U.y,c[w+2]=U.z}function g(){const L=new V;for(let U=0;U<c.length;U+=3){L.x=c[U+0],L.y=c[U+1],L.z=c[U+2];const w=S(L)/2/Math.PI+.5,N=y(L)/Math.PI+.5;u.push(w,1-N)}M(),v()}function v(){for(let L=0;L<u.length;L+=6){const U=u[L+0],w=u[L+2],N=u[L+4],P=Math.max(U,w,N),F=Math.min(U,w,N);P>.9&&F<.1&&(U<.2&&(u[L+0]+=1),w<.2&&(u[L+2]+=1),N<.2&&(u[L+4]+=1))}}function _(L){c.push(L.x,L.y,L.z)}function x(L,U){const w=L*3;U.x=t[w+0],U.y=t[w+1],U.z=t[w+2]}function M(){const L=new V,U=new V,w=new V,N=new V,P=new Ft,F=new Ft,G=new Ft;for(let C=0,D=0;C<c.length;C+=9,D+=6){L.set(c[C+0],c[C+1],c[C+2]),U.set(c[C+3],c[C+4],c[C+5]),w.set(c[C+6],c[C+7],c[C+8]),P.set(u[D+0],u[D+1]),F.set(u[D+2],u[D+3]),G.set(u[D+4],u[D+5]),N.copy(L).add(U).add(w).divideScalar(3);const k=S(N);T(P,D+0,L,k),T(F,D+2,U,k),T(G,D+4,w,k)}}function T(L,U,w,N){N<0&&L.x===1&&(u[U]=L.x-1),w.x===0&&w.z===0&&(u[U]=N/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function y(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mp(t.vertices,t.indices,t.radius,t.details)}}class va{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,d=c-1,p;for(;h<=d;)if(o=Math.floor(h+(d-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,a[o]===u)return o/(c-1);const g=a[o],_=a[o+1]-g,x=(u-g)/_;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),d=n||(u.isVector2?new Ft:new V);return d.copy(h).sub(u).normalize(),d}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new V,o=[],c=[],u=[],h=new V,d=new Xe;for(let x=0;x<=t;x++){const M=x/t;o[x]=this.getTangentAt(M,new V)}c[0]=new V,u[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),v<=p&&(p=v,a.set(0,1,0)),_<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(Se(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(d.makeRotationAxis(h,M))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(Se(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let M=1;M<=t;M++)c[M].applyMatrix4(d.makeRotationAxis(o[M],x*M)),u[M].crossVectors(o[M],c[M])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class j_ extends va{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=d}getPoint(t,n=new Ft){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let d=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=d-this.aX,x=p-this.aY;d=_*g-x*v+this.aX,p=_*v+x*g+this.aY}return a.set(d,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ZM extends j_{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function gp(){let r=0,t=0,n=0,a=0;function o(c,u,h,d){r=c,t=h,n=-3*c+3*u-2*h-d,a=2*c-2*u+h+d}return{initCatmullRom:function(c,u,h,d,p){o(u,h,p*(h-c),p*(d-u))},initNonuniformCatmullRom:function(c,u,h,d,p,g,v){let _=(u-c)/p-(h-c)/(p+g)+(h-u)/g,x=(h-u)/g-(d-u)/(g+v)+(d-h)/v;_*=g,x*=g,o(u,h,_,x)},calc:function(c){const u=c*c,h=u*c;return r+t*c+n*u+a*h}}}const jc=new V,Qh=new gp,Jh=new gp,$h=new gp;class vp extends va{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new V){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),d=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:d===0&&h===c-1&&(h=c-2,d=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(jc.subVectors(o[0],o[1]).add(o[0]),p=jc);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(jc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=jc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(_),x),S=Math.pow(_.distanceToSquared(g),x);T<1e-4&&(T=1),M<1e-4&&(M=T),S<1e-4&&(S=T),Qh.initNonuniformCatmullRom(p.x,v.x,_.x,g.x,M,T,S),Jh.initNonuniformCatmullRom(p.y,v.y,_.y,g.y,M,T,S),$h.initNonuniformCatmullRom(p.z,v.z,_.z,g.z,M,T,S)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(p.x,v.x,_.x,g.x,this.tension),Jh.initCatmullRom(p.y,v.y,_.y,g.y,this.tension),$h.initCatmullRom(p.z,v.z,_.z,g.z,this.tension));return a.set(Qh.calc(d),Jh.calc(d),$h.calc(d)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new V().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ov(r,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=r*r,d=r*h;return(2*n-2*a+c+u)*d+(-3*n+3*a-2*c-u)*h+c*r+n}function KM(r,t){const n=1-r;return n*n*t}function QM(r,t){return 2*(1-r)*r*t}function JM(r,t){return r*r*t}function ll(r,t,n,a){return KM(r,t)+QM(r,n)+JM(r,a)}function $M(r,t){const n=1-r;return n*n*n*t}function t1(r,t){const n=1-r;return 3*n*n*r*t}function e1(r,t){return 3*(1-r)*r*r*t}function n1(r,t){return r*r*r*t}function cl(r,t,n,a,o){return $M(r,t)+t1(r,n)+e1(r,a)+n1(r,o)}class i1 extends va{constructor(t=new Ft,n=new Ft,a=new Ft,o=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Ft){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(cl(t,o.x,c.x,u.x,h.x),cl(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class a1 extends va{constructor(t=new V,n=new V,a=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new V){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(cl(t,o.x,c.x,u.x,h.x),cl(t,o.y,c.y,u.y,h.y),cl(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class s1 extends va{constructor(t=new Ft,n=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ft){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ft){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r1 extends va{constructor(t=new V,n=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new V){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new V){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o1 extends va{constructor(t=new Ft,n=new Ft,a=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Ft){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ll(t,o.x,c.x,u.x),ll(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z_ extends va{constructor(t=new V,n=new V,a=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new V){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ll(t,o.x,c.x,u.x),ll(t,o.y,c.y,u.y),ll(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l1 extends va{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ft){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,d=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return a.set(Ov(h,d.x,p.x,g.x,v.x),Ov(h,d.y,p.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Ft().fromArray(o))}return this}}var c1=Object.freeze({__proto__:null,ArcCurve:ZM,CatmullRomCurve3:vp,CubicBezierCurve:i1,CubicBezierCurve3:a1,EllipseCurve:j_,LineCurve:s1,LineCurve3:r1,QuadraticBezierCurve:o1,QuadraticBezierCurve3:Z_,SplineCurve:l1});class Br extends mp{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Br(t.radius,t.detail)}}class Ns extends rn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),d=Math.floor(o),p=h+1,g=d+1,v=t/h,_=n/d,x=[],M=[],T=[],S=[];for(let y=0;y<g;y++){const L=y*_-u;for(let U=0;U<p;U++){const w=U*v-c;M.push(w,-L,0),T.push(0,0,1),S.push(U/h),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<h;L++){const U=L+p*y,w=L+p*(y+1),N=L+1+p*(y+1),P=L+1+p*y;x.push(U,w,P),x.push(w,N,P)}this.setIndex(x),this.setAttribute("position",new be(M,3)),this.setAttribute("normal",new be(T,3)),this.setAttribute("uv",new be(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wr extends rn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+h,Math.PI);let p=0;const g=[],v=new V,_=new V,x=[],M=[],T=[],S=[];for(let y=0;y<=a;y++){const L=[],U=y/a;let w=0;y===0&&u===0?w=.5/n:y===a&&d===Math.PI&&(w=-.5/n);for(let N=0;N<=n;N++){const P=N/n;v.x=-t*Math.cos(o+P*c)*Math.sin(u+U*h),v.y=t*Math.cos(u+U*h),v.z=t*Math.sin(o+P*c)*Math.sin(u+U*h),M.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),S.push(P+w,1-U),L.push(p++)}g.push(L)}for(let y=0;y<a;y++)for(let L=0;L<n;L++){const U=g[y][L+1],w=g[y][L],N=g[y+1][L],P=g[y+1][L+1];(y!==0||u>0)&&x.push(U,w,P),(y!==a-1||d<Math.PI)&&x.push(w,N,P)}this.setIndex(x),this.setAttribute("position",new be(M,3)),this.setAttribute("normal",new be(T,3)),this.setAttribute("uv",new be(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _u extends rn{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const u=[],h=[],d=[],p=[],g=new V,v=new V,_=new V;for(let x=0;x<=a;x++)for(let M=0;M<=o;M++){const T=M/o*c,S=x/a*Math.PI*2;v.x=(t+n*Math.cos(S))*Math.cos(T),v.y=(t+n*Math.cos(S))*Math.sin(T),v.z=n*Math.sin(S),h.push(v.x,v.y,v.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),_.subVectors(v,g).normalize(),d.push(_.x,_.y,_.z),p.push(M/o),p.push(x/a)}for(let x=1;x<=a;x++)for(let M=1;M<=o;M++){const T=(o+1)*x+M-1,S=(o+1)*(x-1)+M-1,y=(o+1)*(x-1)+M,L=(o+1)*x+M;u.push(T,S,L),u.push(S,y,L)}this.setIndex(u),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _p extends rn{constructor(t=new Z_(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new V,d=new V,p=new Ft;let g=new V;const v=[],_=[],x=[],M=[];T(),this.setIndex(M),this.setAttribute("position",new be(v,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(x,2));function T(){for(let U=0;U<n;U++)S(U);S(c===!1?n:0),L(),y()}function S(U){g=t.getPointAt(U/n,g);const w=u.normals[U],N=u.binormals[U];for(let P=0;P<=o;P++){const F=P/o*Math.PI*2,G=Math.sin(F),C=-Math.cos(F);d.x=C*w.x+G*N.x,d.y=C*w.y+G*N.y,d.z=C*w.z+G*N.z,d.normalize(),_.push(d.x,d.y,d.z),h.x=g.x+a*d.x,h.y=g.y+a*d.y,h.z=g.z+a*d.z,v.push(h.x,h.y,h.z)}}function y(){for(let U=1;U<=n;U++)for(let w=1;w<=o;w++){const N=(o+1)*(U-1)+(w-1),P=(o+1)*U+(w-1),F=(o+1)*U+w,G=(o+1)*(U-1)+w;M.push(N,P,G),M.push(P,F,G)}}function L(){for(let U=0;U<=n;U++)for(let w=0;w<=o;w++)p.x=U/n,p.y=w/o,x.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _p(new c1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class u1 extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ai extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=P_,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class f1 extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class h1 extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vl extends on{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class K_ extends vl{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const td=new Xe,zv=new V,Bv=new V;class xp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;zv.setFromMatrixPosition(t.matrixWorld),n.position.copy(zv),Bv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Bv),n.updateMatrixWorld(),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d1 extends xp{constructor(){super(new jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=kr*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zc extends vl{constructor(t,n,a=0,o=Math.PI/3,c=0,u=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new d1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Iv=new Xe,il=new V,ed=new V;class p1 extends xp{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),il.setFromMatrixPosition(t.matrixWorld),a.position.copy(il),ed.copy(a.position),ed.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(ed),a.updateMatrixWorld(),o.makeTranslation(-il.x,-il.y,-il.z),Iv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iv,a.coordinateSystem,a.reversedDepth)}}class Kc extends vl{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new p1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yp extends X_{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class m1 extends xp{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qd extends vl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new m1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class g1 extends vl{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class v1 extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Q_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Fv(r,t,n,a){const o=_1(a);switch(n){case U_:return r*t;case rp:return r*t/o.components*o.byteLength;case op:return r*t/o.components*o.byteLength;case N_:return r*t*2/o.components*o.byteLength;case lp:return r*t*2/o.components*o.byteLength;case L_:return r*t*3/o.components*o.byteLength;case Ri:return r*t*4/o.components*o.byteLength;case cp:return r*t*4/o.components*o.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case su:case ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:case bd:return Math.max(r,16)*Math.max(t,8)/4;case Md:case Td:return Math.max(r,8)*Math.max(t,8)/2;case Ad:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case kd:case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _1(r){switch(r){case Xi:case w_:return{byteLength:1,components:1};case fl:case R_:case ma:return{byteLength:2,components:1};case ap:case sp:return{byteLength:2,components:4};case Ls:case ip:case Gi:return{byteLength:4,components:1};case C_:case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function x1(r){const t=new WeakMap;function n(h,d){const p=h.array,g=h.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,d,p){const g=d.array,v=d.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<v.length;x++){const M=v[_],T=v[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,M=v.length;x<M;x++){const T=v[x];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(r.deleteBuffer(d.buffer),t.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:u}}var y1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
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
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R1=`#ifdef USE_BATCHING
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
#endif`,C1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N1=`#ifdef USE_IRIDESCENCE
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
#endif`,P1=`#ifdef USE_BUMPMAP
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
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k1=`#define PI 3.141592653589793
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
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W1=`vec3 transformedNormal = objectNormal;
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
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
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
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
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
#endif`,_E=`struct PhysicalMaterial {
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
}`,xE=`
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
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
#endif`,zE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aT=`float getShadowMask() {
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
}`,sT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rT=`#ifdef USE_SKINNING
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
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,cT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dT=`#ifdef USE_TRANSMISSION
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
#endif`,pT=`#ifdef USE_TRANSMISSION
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
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
}`,MT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
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
}`,AT=`#if DEPTH_PACKING == 3200
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
}`,wT=`#define DISTANCE
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
}`,RT=`#define DISTANCE
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`uniform float scale;
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
}`,LT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,PT=`uniform vec3 diffuse;
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
}`,OT=`#define LAMBERT
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
}`,zT=`#define LAMBERT
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
}`,BT=`#define MATCAP
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
}`,IT=`#define MATCAP
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
}`,FT=`#define NORMAL
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
}`,HT=`#define NORMAL
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
}`,GT=`#define PHONG
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
}`,VT=`#define PHONG
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
}`,kT=`#define STANDARD
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
}`,XT=`#define STANDARD
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
}`,WT=`#define TOON
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
}`,qT=`#define TOON
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
}`,YT=`uniform float size;
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
}`,jT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,KT=`uniform vec3 color;
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
}`,QT=`uniform float rotation;
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
}`,JT=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:b1,aomap_fragment:A1,aomap_pars_fragment:w1,batching_pars_vertex:R1,batching_vertex:C1,begin_vertex:D1,beginnormal_vertex:U1,bsdfs:L1,iridescence_fragment:N1,bumpmap_pars_fragment:P1,clipping_planes_fragment:O1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:B1,clipping_planes_vertex:I1,color_fragment:F1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:V1,common:k1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:W1,displacementmap_pars_vertex:q1,displacementmap_vertex:Y1,emissivemap_fragment:j1,emissivemap_pars_fragment:Z1,colorspace_fragment:K1,colorspace_pars_fragment:Q1,envmap_fragment:J1,envmap_common_pars_fragment:$1,envmap_pars_fragment:tE,envmap_pars_vertex:eE,envmap_physical_pars_fragment:hE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:dE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:_E,lights_fragment_begin:xE,lights_fragment_maps:yE,lights_fragment_end:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:bE,map_fragment:AE,map_pars_fragment:wE,map_particle_fragment:RE,map_particle_pars_fragment:CE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:UE,morphinstance_vertex:LE,morphcolor_vertex:NE,morphnormal_vertex:PE,morphtarget_pars_vertex:OE,morphtarget_vertex:zE,normal_fragment_begin:BE,normal_fragment_maps:IE,normal_pars_fragment:FE,normal_pars_vertex:HE,normal_vertex:GE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:jE,premultiplied_alpha_fragment:ZE,project_vertex:KE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:tT,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:nT,shadowmap_vertex:iT,shadowmask_pars_fragment:aT,skinbase_vertex:sT,skinning_pars_vertex:rT,skinning_vertex:oT,skinnormal_vertex:lT,specularmap_fragment:cT,specularmap_pars_fragment:uT,tonemapping_fragment:fT,tonemapping_pars_fragment:hT,transmission_fragment:dT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:gT,uv_vertex:vT,worldpos_vertex:_T,background_vert:xT,background_frag:yT,backgroundCube_vert:ST,backgroundCube_frag:MT,cube_vert:ET,cube_frag:TT,depth_vert:bT,depth_frag:AT,distanceRGBA_vert:wT,distanceRGBA_frag:RT,equirect_vert:CT,equirect_frag:DT,linedashed_vert:UT,linedashed_frag:LT,meshbasic_vert:NT,meshbasic_frag:PT,meshlambert_vert:OT,meshlambert_frag:zT,meshmatcap_vert:BT,meshmatcap_frag:IT,meshnormal_vert:FT,meshnormal_frag:HT,meshphong_vert:GT,meshphong_frag:VT,meshphysical_vert:kT,meshphysical_frag:XT,meshtoon_vert:WT,meshtoon_frag:qT,points_vert:YT,points_frag:jT,shadow_vert:ZT,shadow_frag:KT,sprite_vert:QT,sprite_frag:JT},Pt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ii={basic:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Gn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Gn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Gn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Gn([Pt.points,Pt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Gn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Gn([Pt.common,Pt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Gn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Gn([Pt.sprite,Pt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Gn([Pt.common,Pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Gn([Pt.lights,Pt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ii.physical={uniforms:Gn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Qc={r:0,b:0,g:0},Ms=new Wi,$T=new Xe;function tb(r,t,n,a,o,c,u){const h=new ce(0);let d=c===!0?0:1,p,g,v=null,_=0,x=null;function M(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?n:t).get(w)),w}function T(U){let w=!1;const N=M(U);N===null?y(h,d):N&&N.isColor&&(y(N,1),w=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,w){const N=M(w);N&&(N.isCubeTexture||N.mapping===gu)?(g===void 0&&(g=new se(new Fi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Xr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ms.copy(w.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(Ms)),g.material.toneMapped=Re.getTransfer(N.colorSpace)!==Oe,(v!==N||_!==N.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=N,_=N.version,x=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new se(new Ns(2,2),new _n({name:"BackgroundMaterial",uniforms:Xr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Re.getTransfer(N.colorSpace)!==Oe,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,v=N,_=N.version,x=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,w){U.getRGB(Qc,k_(r)),a.buffers.color.setClear(Qc.r,Qc.g,Qc.b,w,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),d=w,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(h,d)},render:T,addToRenderList:S,dispose:L}}function eb(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function h(D,k,Z,lt,ut){let ft=!1;const B=v(lt,Z,k);c!==B&&(c=B,p(c.object)),ft=x(D,lt,Z,ut),ft&&M(D,lt,Z,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ft||u)&&(u=!1,w(D,k,Z,lt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function d(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function v(D,k,Z){const lt=Z.wireframe===!0;let ut=a[D.id];ut===void 0&&(ut={},a[D.id]=ut);let ft=ut[k.id];ft===void 0&&(ft={},ut[k.id]=ft);let B=ft[lt];return B===void 0&&(B=_(d()),ft[lt]=B),B}function _(D){const k=[],Z=[],lt=[];for(let ut=0;ut<n;ut++)k[ut]=0,Z[ut]=0,lt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:lt,object:D,attributes:{},index:null}}function x(D,k,Z,lt){const ut=c.attributes,ft=k.attributes;let B=0;const nt=Z.getAttributes();for(const j in nt)if(nt[j].location>=0){const O=ut[j];let tt=ft[j];if(tt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),O===void 0||O.attribute!==tt||tt&&O.data!==tt.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function M(D,k,Z,lt){const ut={},ft=k.attributes;let B=0;const nt=Z.getAttributes();for(const j in nt)if(nt[j].location>=0){let O=ft[j];O===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const tt={};tt.attribute=O,O&&O.data&&(tt.data=O.data),ut[j]=tt,B++}c.attributes=ut,c.attributesNum=B,c.index=lt}function T(){const D=c.newAttributes;for(let k=0,Z=D.length;k<Z;k++)D[k]=0}function S(D){y(D,0)}function y(D,k){const Z=c.newAttributes,lt=c.enabledAttributes,ut=c.attributeDivisors;Z[D]=1,lt[D]===0&&(r.enableVertexAttribArray(D),lt[D]=1),ut[D]!==k&&(r.vertexAttribDivisor(D,k),ut[D]=k)}function L(){const D=c.newAttributes,k=c.enabledAttributes;for(let Z=0,lt=k.length;Z<lt;Z++)k[Z]!==D[Z]&&(r.disableVertexAttribArray(Z),k[Z]=0)}function U(D,k,Z,lt,ut,ft,B){B===!0?r.vertexAttribIPointer(D,k,Z,ut,ft):r.vertexAttribPointer(D,k,Z,lt,ut,ft)}function w(D,k,Z,lt){T();const ut=lt.attributes,ft=Z.getAttributes(),B=k.defaultAttributeValues;for(const nt in ft){const j=ft[nt];if(j.location>=0){let yt=ut[nt];if(yt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const O=yt.normalized,tt=yt.itemSize,xt=t.get(yt);if(xt===void 0)continue;const St=xt.buffer,Ut=xt.type,Gt=xt.bytesPerElement,it=Ut===r.INT||Ut===r.UNSIGNED_INT||yt.gpuType===ip;if(yt.isInterleavedBufferAttribute){const vt=yt.data,At=vt.stride,Jt=yt.offset;if(vt.isInstancedInterleavedBuffer){for(let jt=0;jt<j.locationSize;jt++)y(j.location+jt,vt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let jt=0;jt<j.locationSize;jt++)S(j.location+jt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let jt=0;jt<j.locationSize;jt++)U(j.location+jt,tt/j.locationSize,Ut,O,At*Gt,(Jt+tt/j.locationSize*jt)*Gt,it)}else{if(yt.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)y(j.location+vt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let vt=0;vt<j.locationSize;vt++)S(j.location+vt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let vt=0;vt<j.locationSize;vt++)U(j.location+vt,tt/j.locationSize,Ut,O,tt*Gt,tt/j.locationSize*vt*Gt,it)}}else if(B!==void 0){const O=B[nt];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(j.location,O);break;case 3:r.vertexAttrib3fv(j.location,O);break;case 4:r.vertexAttrib4fv(j.location,O);break;default:r.vertexAttrib1fv(j.location,O)}}}}L()}function N(){G();for(const D in a){const k=a[D];for(const Z in k){const lt=k[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete k[Z]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const k=a[D.id];for(const Z in k){const lt=k[Z];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete k[Z]}delete a[D.id]}function F(D){for(const k in a){const Z=a[k];if(Z[D.id]===void 0)continue;const lt=Z[D.id];for(const ut in lt)g(lt[ut].object),delete lt[ut];delete Z[D.id]}}function G(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:G,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function nb(r,t,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,v){v!==0&&(r.drawArraysInstanced(a,p,g,v),n.update(g,a,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,v);let x=0;for(let M=0;M<v;M++)x+=g[M];n.update(x,a,1)}function d(p,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*_[T];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ib(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ri&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const G=F===ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Xi&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Gi&&!G)}function d(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:N,maxSamples:P}}function ab(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new bs,h=new pe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,y=r.get(v);if(!o||M===null||M.length===0||c&&!S)c?g(null):p();else{const L=c?0:a,U=L*4;let w=y.clippingState||null;d.value=w,w=g(M,_,U,x);for(let N=0;N!==U;++N)w[N]=n[N];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const y=x+T*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,w=x;U!==T;++U,w+=4)u.copy(v[U]).applyMatrix4(L,h),u.normal.toArray(S,w),S[w+3]=u.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function sb(r){let t=new WeakMap;function n(u,h){return h===_d?u.mapping=Hr:h===xd&&(u.mapping=Gr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===_d||h===xd)if(t.has(u)){const d=t.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new FM(d.height);return p.fromEquirectangularTexture(r,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Nr=4,Hv=[.125,.215,.35,.446,.526,.582],Rs=20,nd=new yp,Gv=new ce;let id=null,ad=0,sd=0,rd=!1;const As=(1+Math.sqrt(5))/2,Dr=1/As,Vv=[new V(-As,Dr,0),new V(As,Dr,0),new V(-Dr,0,As),new V(Dr,0,As),new V(0,As,-Dr),new V(0,As,Dr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],rb=new V;class kv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=rb}=c;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,o,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(id,ad,sd),this._renderer.xr.enabled=rd,t.scissorTest=!1,Jc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Hr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:ma,format:Ri,colorSpace:Vr,depthBuffer:!1},o=Xv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ob(c)),this._blurMaterial=lb(c,t,n)}return o}_compileMaterial(t){const n=new se(this._lodPlanes[0],t);this._renderer.compile(n,nd)}_sceneToCubeUV(t,n,a,o,c){const d=new jn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Gv),v.toneMapping=Qa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const T=new Us({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),S=new se(new Fi,T);let y=!1;const L=t.background;L?L.isColor&&(T.color.copy(L),t.background=null,y=!0):(T.color.copy(Gv),y=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(d.up.set(0,p[U],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[U],c.y,c.z)):w===1?(d.up.set(0,0,p[U]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[U],c.z)):(d.up.set(0,p[U],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[U]));const N=this._cubeSize;Jc(o,w*N,U>2?N:0,N,N),v.setRenderTarget(o),y&&v.render(S,d),v.render(t,d)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Hr||t.mapping===Gr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new se(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;Jc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,nd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Vv[(o-c-1)%Vv.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new se(this._lodPlanes[o],p),_=p.uniforms,x=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Rs-1),T=c/M,S=isFinite(c)?1+Math.floor(g*T):Rs;S>Rs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rs}`);const y=[];let L=0;for(let F=0;F<Rs;++F){const G=F/T,C=Math.exp(-G*G/2);y.push(C),F===0?L+=C:F<S&&(L+=2*C)}for(let F=0;F<y.length;F++)y[F]=y[F]/L;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=M,_.mipInt.value=U-a;const w=this._sizeLods[o],N=3*w*(o>U-Nr?o-U+Nr:0),P=4*(this._cubeSize-w);Jc(n,N,P,3*w,2*w),d.setRenderTarget(n),d.render(v,nd)}}function ob(r){const t=[],n=[],a=[];let o=r;const c=r-Nr+1+Hv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let d=1/h;u>r-Nr?d=Hv[u-r+Nr-1]:u===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,T=3,S=2,y=1,L=new Float32Array(T*M*x),U=new Float32Array(S*M*x),w=new Float32Array(y*M*x);for(let P=0;P<x;P++){const F=P%3*2/3-1,G=P>2?0:-1,C=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];L.set(C,T*M*P),U.set(_,S*M*P);const D=[P,P,P,P,P,P];w.set(D,y*M*P)}const N=new rn;N.setAttribute("position",new ci(L,T)),N.setAttribute("uv",new ci(U,S)),N.setAttribute("faceIndex",new ci(w,y)),t.push(N),o>Nr&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Xv(r,t,n){const a=new Ci(r,t,n);return a.texture.mapping=gu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Jc(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function lb(r,t,n){const a=new Float32Array(Rs),o=new V(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Wv(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function qv(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

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
	`}function cb(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===_d||d===xd,g=d===Hr||d===Gr;if(p||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new kv(r)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new kv(r)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function ub(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ml("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function fb(r,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,M=v.attributes.position;let T=0;if(x!==null){const L=x.array;T=x.version;for(let U=0,w=L.length;U<w;U+=3){const N=L[U+0],P=L[U+1],F=L[U+2];_.push(N,P,P,F,F,N)}}else if(M!==void 0){const L=M.array;T=M.version;for(let U=0,w=L.length/3-1;U<w;U+=3){const N=U+0,P=U+1,F=U+2;_.push(N,P,P,F,F,N)}}else return;const S=new(z_(_)?V_:G_)(_,1);S.version=T;const y=c.get(v);y&&t.remove(y),c.set(v,S)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function hb(r,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function d(_,x){r.drawElements(a,x,c,_*u),n.update(x,a,1)}function p(_,x,M){M!==0&&(r.drawElementsInstanced(a,x,c,_*u,M),n.update(x,a,M))}function g(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];n.update(S,a,1)}function v(_,x,M,T){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)p(_[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,T,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*T[L];n.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function db(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function pb(r,t,n){const a=new WeakMap,o=new Ge;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let C=function(){F.dispose(),a.delete(h),h.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;x===!0&&(U=1),M===!0&&(U=2),T===!0&&(U=3);let w=h.attributes.position.count*U,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*N*4*v),F=new B_(P,w,N,v);F.type=Gi,F.needsUpdate=!0;const G=U*4;for(let D=0;D<v;D++){const k=S[D],Z=y[D],lt=L[D],ut=w*N*4*D;for(let ft=0;ft<k.count;ft++){const B=ft*G;x===!0&&(o.fromBufferAttribute(k,ft),P[ut+B+0]=o.x,P[ut+B+1]=o.y,P[ut+B+2]=o.z,P[ut+B+3]=0),M===!0&&(o.fromBufferAttribute(Z,ft),P[ut+B+4]=o.x,P[ut+B+5]=o.y,P[ut+B+6]=o.z,P[ut+B+7]=0),T===!0&&(o.fromBufferAttribute(lt,ft),P[ut+B+8]=o.x,P[ut+B+9]=o.y,P[ut+B+10]=o.z,P[ut+B+11]=lt.itemSize===4?o.w:1)}}_={count:v,texture:F,size:new Ft(w,N)},a.set(h,_),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let x=0;for(let T=0;T<p.length;T++)x+=p[T];const M=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function mb(r,t,n,a){let o=new WeakMap;function c(d){const p=a.render.frame,g=d.geometry,v=t.get(d,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const $_=new Vn,Yv=new q_(1,1),tx=new B_,ex=new EM,nx=new W_,jv=[],Zv=[],Kv=new Float32Array(16),Qv=new Float32Array(9),Jv=new Float32Array(4);function $r(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=jv[o];if(c===void 0&&(c=new Float32Array(o),jv[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function yn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function xu(r,t){let n=Zv[t];n===void 0&&(n=new Int32Array(t),Zv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function gb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function vb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2fv(this.addr,t),yn(n,t)}}function _b(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;r.uniform3fv(this.addr,t),yn(n,t)}}function xb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4fv(this.addr,t),yn(n,t)}}function yb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Jv.set(a),r.uniformMatrix2fv(this.addr,!1,Jv),yn(n,a)}}function Sb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Qv.set(a),r.uniformMatrix3fv(this.addr,!1,Qv),yn(n,a)}}function Mb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Kv.set(a),r.uniformMatrix4fv(this.addr,!1,Kv),yn(n,a)}}function Eb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function Tb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2iv(this.addr,t),yn(n,t)}}function bb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3iv(this.addr,t),yn(n,t)}}function Ab(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4iv(this.addr,t),yn(n,t)}}function wb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function Rb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2uiv(this.addr,t),yn(n,t)}}function Cb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3uiv(this.addr,t),yn(n,t)}}function Db(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4uiv(this.addr,t),yn(n,t)}}function Ub(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Yv.compareFunction=O_,c=Yv):c=$_,n.setTexture2D(t||c,o)}function Lb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||ex,o)}function Nb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||nx,o)}function Pb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||tx,o)}function Ob(r){switch(r){case 5126:return gb;case 35664:return vb;case 35665:return _b;case 35666:return xb;case 35674:return yb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return Ab;case 5125:return wb;case 36294:return Rb;case 36295:return Cb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Pb}}function zb(r,t){r.uniform1fv(this.addr,t)}function Bb(r,t){const n=$r(t,this.size,2);r.uniform2fv(this.addr,n)}function Ib(r,t){const n=$r(t,this.size,3);r.uniform3fv(this.addr,n)}function Fb(r,t){const n=$r(t,this.size,4);r.uniform4fv(this.addr,n)}function Hb(r,t){const n=$r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function Gb(r,t){const n=$r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Vb(r,t){const n=$r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function kb(r,t){r.uniform1iv(this.addr,t)}function Xb(r,t){r.uniform2iv(this.addr,t)}function Wb(r,t){r.uniform3iv(this.addr,t)}function qb(r,t){r.uniform4iv(this.addr,t)}function Yb(r,t){r.uniform1uiv(this.addr,t)}function jb(r,t){r.uniform2uiv(this.addr,t)}function Zb(r,t){r.uniform3uiv(this.addr,t)}function Kb(r,t){r.uniform4uiv(this.addr,t)}function Qb(r,t,n){const a=this.cache,o=t.length,c=xu(n,o);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||$_,c[u])}function Jb(r,t,n){const a=this.cache,o=t.length,c=xu(n,o);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||ex,c[u])}function $b(r,t,n){const a=this.cache,o=t.length,c=xu(n,o);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||nx,c[u])}function tA(r,t,n){const a=this.cache,o=t.length,c=xu(n,o);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||tx,c[u])}function eA(r){switch(r){case 5126:return zb;case 35664:return Bb;case 35665:return Ib;case 35666:return Fb;case 35674:return Hb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return kb;case 35667:case 35671:return Xb;case 35668:case 35672:return Wb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return jb;case 36295:return Zb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return tA}}class nA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Ob(n.type)}}class iA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eA(n.type)}}class aA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const od=/(\w+)(\])?(\[|\.)?/g;function $v(r,t){r.seq.push(t),r.map[t.id]=t}function sA(r,t,n){const a=r.name,o=a.length;for(od.lastIndex=0;;){const c=od.exec(a),u=od.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){$v(n,p===void 0?new nA(h,r,t):new iA(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new aA(h),$v(n,v)),n=v}}}class ou{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);sA(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=a[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function t_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const rA=37297;let oA=0;function lA(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const e_=new pe;function cA(r){Re._getMatrix(e_,Re.workingColorSpace,r);const t=`mat3( ${e_.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(r)){case fu:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function n_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+lA(r.getShaderSource(t),h)}else return c}function uA(r,t){const n=cA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function fA(r,t){let n;switch(t){case y_:n="Linear";break;case S_:n="Reinhard";break;case M_:n="Cineon";break;case mu:n="ACESFilmic";break;case T_:n="AgX";break;case b_:n="Neutral";break;case E_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $c=new V;function hA(){Re.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),t=$c.y.toFixed(4),n=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function pA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function mA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function al(r){return r!==""}function i_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function a_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(gA,_A)}const vA=new Map;function _A(r,t){let n=ve[t];if(n===void 0){const a=vA.get(t);if(a!==void 0)n=ve[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Jd(n)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s_(r){return r.replace(xA,yA)}function yA(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function r_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function SA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===__?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===MS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function MA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Gr:t="ENVMAP_TYPE_CUBE";break;case gu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function EA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gr:t="ENVMAP_MODE_REFRACTION";break}return t}function TA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case x_:t="ENVMAP_BLENDING_MULTIPLY";break;case GS:t="ENVMAP_BLENDING_MIX";break;case VS:t="ENVMAP_BLENDING_ADD";break}return t}function bA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function AA(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=SA(n),p=MA(n),g=EA(n),v=TA(n),_=bA(n),x=dA(n),M=pA(c),T=o.createProgram();let S,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(al).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(al).join(`
`),y.length>0&&(y+=`
`)):(S=[r_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),y=[r_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qa?"#define TONE_MAPPING":"",n.toneMapping!==Qa?ve.tonemapping_pars_fragment:"",n.toneMapping!==Qa?fA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,uA("linearToOutputTexel",n.outputColorSpace),hA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),u=Jd(u),u=i_(u,n),u=a_(u,n),h=Jd(h),h=i_(h,n),h=a_(h,n),u=s_(u),h=s_(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=L+S+u,w=L+y+h,N=t_(o,o.VERTEX_SHADER,U),P=t_(o,o.FRAGMENT_SHADER,w);o.attachShader(T,N),o.attachShader(T,P),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(k){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(T)||"",lt=o.getShaderInfoLog(N)||"",ut=o.getShaderInfoLog(P)||"",ft=Z.trim(),B=lt.trim(),nt=ut.trim();let j=!0,yt=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,N,P);else{const O=n_(o,N,"vertex"),tt=n_(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+O+`
`+tt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(B===""||nt==="")&&(yt=!1);yt&&(k.diagnostics={runnable:j,programLog:ft,vertexShader:{log:B,prefix:S},fragmentShader:{log:nt,prefix:y}})}o.deleteShader(N),o.deleteShader(P),G=new ou(o,T),C=mA(o,T)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(T,rA)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=P,this}let wA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new CA(t),n.set(t,a)),a}}class CA{constructor(t){this.id=wA++,this.code=t,this.usedTimes=0}}function DA(r,t,n,a,o,c,u){const h=new F_,d=new RA,p=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,D,k,Z,lt){const ut=Z.fog,ft=lt.geometry,B=C.isMeshStandardMaterial?Z.environment:null,nt=(C.isMeshStandardMaterial?n:t).get(C.envMap||B),j=nt&&nt.mapping===gu?nt.image.height:null,yt=M[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const O=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=O!==void 0?O.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let St,Ut,Gt,it;if(yt){const we=Ii[yt];St=we.vertexShader,Ut=we.fragmentShader}else St=C.vertexShader,Ut=C.fragmentShader,d.update(C),Gt=d.getVertexShaderID(C),it=d.getFragmentShaderID(C);const vt=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Jt=lt.isInstancedMesh===!0,jt=lt.isBatchedMesh===!0,_e=!!C.map,ln=!!C.matcap,H=!!nt,ze=!!C.aoMap,ue=!!C.lightMap,ae=!!C.bumpMap,Ot=!!C.normalMap,We=!!C.displacementMap,kt=!!C.emissiveMap,fe=!!C.metalnessMap,Ke=!!C.roughnessMap,Qe=C.anisotropy>0,z=C.clearcoat>0,b=C.dispersion>0,et=C.iridescence>0,ht=C.sheen>0,mt=C.transmission>0,ct=Qe&&!!C.anisotropyMap,zt=z&&!!C.clearcoatMap,wt=z&&!!C.clearcoatNormalMap,qt=z&&!!C.clearcoatRoughnessMap,Zt=et&&!!C.iridescenceMap,Mt=et&&!!C.iridescenceThicknessMap,Lt=ht&&!!C.sheenColorMap,Qt=ht&&!!C.sheenRoughnessMap,Xt=!!C.specularMap,Ct=!!C.specularColorMap,he=!!C.specularIntensityMap,W=mt&&!!C.transmissionMap,bt=mt&&!!C.thicknessMap,Rt=!!C.gradientMap,Bt=!!C.alphaMap,Et=C.alphaTest>0,_t=!!C.alphaHash,Vt=!!C.extensions;let oe=Qa;C.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(oe=r.toneMapping);const Le={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:Ut,defines:C.defines,customVertexShaderID:Gt,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:jt,batchingColor:jt&&lt._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&lt.instanceColor!==null,instancingMorph:Jt&&lt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Vr,alphaToCoverage:!!C.alphaToCoverage,map:_e,matcap:ln,envMap:H,envMapMode:H&&nt.mapping,envMapCubeUVHeight:j,aoMap:ze,lightMap:ue,bumpMap:ae,normalMap:Ot,displacementMap:_&&We,emissiveMap:kt,normalMapObjectSpace:Ot&&C.normalMapType===qS,normalMapTangentSpace:Ot&&C.normalMapType===P_,metalnessMap:fe,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ct,clearcoat:z,clearcoatMap:zt,clearcoatNormalMap:wt,clearcoatRoughnessMap:qt,dispersion:b,iridescence:et,iridescenceMap:Zt,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:Qt,specularMap:Xt,specularColorMap:Ct,specularIntensityMap:he,transmission:mt,transmissionMap:W,thicknessMap:bt,gradientMap:Rt,opaque:C.transparent===!1&&C.blending===Or&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:_t,combine:C.combine,mapUv:_e&&T(C.map.channel),aoMapUv:ze&&T(C.aoMap.channel),lightMapUv:ue&&T(C.lightMap.channel),bumpMapUv:ae&&T(C.bumpMap.channel),normalMapUv:Ot&&T(C.normalMap.channel),displacementMapUv:We&&T(C.displacementMap.channel),emissiveMapUv:kt&&T(C.emissiveMap.channel),metalnessMapUv:fe&&T(C.metalnessMap.channel),roughnessMapUv:Ke&&T(C.roughnessMap.channel),anisotropyMapUv:ct&&T(C.anisotropyMap.channel),clearcoatMapUv:zt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:wt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&T(C.sheenRoughnessMap.channel),specularMapUv:Xt&&T(C.specularMap.channel),specularColorMapUv:Ct&&T(C.specularColorMap.channel),specularIntensityMapUv:he&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:bt&&T(C.thicknessMap.channel),alphaMapUv:Bt&&T(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ot||Qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(_e||Bt),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:_e&&C.map.isVideoTexture===!0&&Re.getTransfer(C.map.colorSpace)===Oe,decodeVideoTextureEmissive:kt&&C.emissiveMap.isVideoTexture===!0&&Re.getTransfer(C.emissiveMap.colorSpace)===Oe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Zn,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Vt&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&C.extensions.multiDraw===!0||jt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function y(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)D.push(k),D.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(L(D,C),U(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function L(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function w(C){const D=M[C.type];let k;if(D){const Z=Ii[D];k=gl.clone(Z.uniforms)}else k=C.uniforms;return k}function N(C,D){let k;for(let Z=0,lt=g.length;Z<lt;Z++){const ut=g[Z];if(ut.cacheKey===D){k=ut,++k.usedTimes;break}}return k===void 0&&(k=new AA(r,D,C,c),g.push(k)),k}function P(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function F(C){d.remove(C)}function G(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:N,releaseProgram:P,releaseShaderCache:F,programs:g,dispose:G}}function UA(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,d){r.get(u)[h]=d}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function LA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function o_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function l_(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v,_,x,M,T,S){let y=r[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:M,renderOrder:v.renderOrder,z:T,group:S},r[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=T,y.group=S),t++,y}function h(v,_,x,M,T,S){const y=u(v,_,x,M,T,S);x.transmission>0?a.push(y):x.transparent===!0?o.push(y):n.push(y)}function d(v,_,x,M,T,S){const y=u(v,_,x,M,T,S);x.transmission>0?a.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function p(v,_){n.length>1&&n.sort(v||LA),a.length>1&&a.sort(_||o_),o.length>1&&o.sort(_||o_)}function g(){for(let v=t,_=r.length;v<_;v++){const x=r[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:d,finish:g,sort:p}}function NA(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new l_,r.set(a,[u])):o>=c.length?(u=new l_,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function PA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new ce};break;case"SpotLight":n={position:new V,direction:new V,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":n={color:new ce,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=n,n}}}function OA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let zA=0;function BA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function IA(r){const t=new PA,n=OA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new V);const o=new V,c=new Xe,u=new Xe;function h(p){let g=0,v=0,_=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,L=0,U=0,w=0,N=0,P=0,F=0;p.sort(BA);for(let C=0,D=p.length;C<D;C++){const k=p[C],Z=k.color,lt=k.intensity,ut=k.distance,ft=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=Z.r*lt,v+=Z.g*lt,_+=Z.b*lt;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],lt);F++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const nt=k.shadow,j=n.get(k);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,a.directionalShadow[x]=j,a.directionalShadowMap[x]=ft,a.directionalShadowMatrix[x]=k.shadow.matrix,L++}a.directional[x]=B,x++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(Z).multiplyScalar(lt),B.distance=ut,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[T]=B;const nt=k.shadow;if(k.map&&(a.spotLightMap[N]=k.map,N++,nt.updateMatrices(k),k.castShadow&&P++),a.spotLightMatrix[T]=nt.matrix,k.castShadow){const j=n.get(k);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,a.spotShadow[T]=j,a.spotShadowMap[T]=ft,w++}T++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(Z).multiplyScalar(lt),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=B,S++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const nt=k.shadow,j=n.get(k);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,j.shadowCameraNear=nt.camera.near,j.shadowCameraFar=nt.camera.far,a.pointShadow[M]=j,a.pointShadowMap[M]=ft,a.pointShadowMatrix[M]=k.shadow.matrix,U++}a.point[M]=B,M++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(lt),B.groundColor.copy(k.groundColor).multiplyScalar(lt),a.hemi[y]=B,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const G=a.hash;(G.directionalLength!==x||G.pointLength!==M||G.spotLength!==T||G.rectAreaLength!==S||G.hemiLength!==y||G.numDirectionalShadows!==L||G.numPointShadows!==U||G.numSpotShadows!==w||G.numSpotMaps!==N||G.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=w+N-P,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=F,G.directionalLength=x,G.pointLength=M,G.spotLength=T,G.rectAreaLength=S,G.hemiLength=y,G.numDirectionalShadows=L,G.numPointShadows=U,G.numSpotShadows=w,G.numSpotMaps=N,G.numLightProbes=F,a.version=zA++)}function d(p,g){let v=0,_=0,x=0,M=0,T=0;const S=g.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const U=p[y];if(U.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),v++}else if(U.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),x++}else if(U.isRectAreaLight){const w=a.rectArea[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),u.identity(),c.copy(U.matrixWorld),c.premultiply(S),u.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),_++}else if(U.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(S),T++}}}return{setup:h,setupView:d,state:a}}function c_(r){const t=new IA(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function FA(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new c_(r),t.set(o,[h])):c>=u.length?(h=new c_(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`;function VA(r,t,n){let a=new hp;const o=new Ft,c=new Ft,u=new Ge,h=new f1({depthPacking:WS}),d=new h1,p={},g=n.maxTextureSize,v={[Ja]:Kn,[Kn]:Ja,[Zn]:Zn},_=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new rn;M.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new se(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let y=this.type;this.render=function(P,F,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(pa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const lt=y!==da&&this.type===da,ut=y===da&&this.type!==da;for(let ft=0,B=P.length;ft<B;ft++){const nt=P[ft],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const yt=j.getFrameExtents();if(o.multiply(yt),c.copy(j.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/yt.x),o.x=c.x*yt.x,j.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/yt.y),o.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||lt===!0||ut===!0){const tt=this.type!==da?{minFilter:li,magFilter:li}:{};j.map!==null&&j.map.dispose(),j.map=new Ci(o.x,o.y,tt),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const O=j.getViewportCount();for(let tt=0;tt<O;tt++){const xt=j.getViewport(tt);u.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),Z.viewport(u),j.updateMatrices(nt,tt),a=j.getFrustum(),w(F,G,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===da&&L(j,G),j.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,D,k)};function L(P,F){const G=t.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ci(o.x,o.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(F,null,G,_,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(F,null,G,x,T,null)}function U(P,F,G,C){let D=null;const k=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)D=k;else if(D=G.isPointLight===!0?d:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=D.uuid,lt=F.uuid;let ut=p[Z];ut===void 0&&(ut={},p[Z]=ut);let ft=ut[lt];ft===void 0&&(ft=D.clone(),ut[lt]=ft,F.addEventListener("dispose",N)),D=ft}if(D.visible=F.visible,D.wireframe=F.wireframe,C===da?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:v[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Z=r.properties.get(D);Z.light=G}return D}function w(P,F,G,C,D){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&D===da)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);const lt=t.update(P),ut=P.material;if(Array.isArray(ut)){const ft=lt.groups;for(let B=0,nt=ft.length;B<nt;B++){const j=ft[B],yt=ut[j.materialIndex];if(yt&&yt.visible){const O=U(P,yt,C,D);P.onBeforeShadow(r,P,F,G,lt,O,j),r.renderBufferDirect(G,null,lt,O,P,j),P.onAfterShadow(r,P,F,G,lt,O,j)}}}else if(ut.visible){const ft=U(P,ut,C,D);P.onBeforeShadow(r,P,F,G,lt,ft,null),r.renderBufferDirect(G,null,lt,ft,P,null),P.onAfterShadow(r,P,F,G,lt,ft,null)}}const Z=P.children;for(let lt=0,ut=Z.length;lt<ut;lt++)w(Z[lt],F,G,C,D)}function N(P){P.target.removeEventListener("dispose",N);for(const G in p){const C=p[G],D=P.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const kA={[fd]:hd,[dd]:gd,[pd]:vd,[Fr]:md,[hd]:fd,[gd]:dd,[vd]:pd,[md]:Fr};function XA(r,t){function n(){let W=!1;const bt=new Ge;let Rt=null;const Bt=new Ge(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!W&&(r.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){W=Et},setClear:function(Et,_t,Vt,oe,Le){Le===!0&&(Et*=oe,_t*=oe,Vt*=oe),bt.set(Et,_t,Vt,oe),Bt.equals(bt)===!1&&(r.clearColor(Et,_t,Vt,oe),Bt.copy(bt))},reset:function(){W=!1,Rt=null,Bt.set(-1,0,0,0)}}}function a(){let W=!1,bt=!1,Rt=null,Bt=null,Et=null;return{setReversed:function(_t){if(bt!==_t){const Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const oe=Et;Et=null,this.setClear(oe)}},getReversed:function(){return bt},setTest:function(_t){_t?vt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(_t){Rt!==_t&&!W&&(r.depthMask(_t),Rt=_t)},setFunc:function(_t){if(bt&&(_t=kA[_t]),Bt!==_t){switch(_t){case fd:r.depthFunc(r.NEVER);break;case hd:r.depthFunc(r.ALWAYS);break;case dd:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case pd:r.depthFunc(r.EQUAL);break;case md:r.depthFunc(r.GEQUAL);break;case gd:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){Et!==_t&&(bt&&(_t=1-_t),r.clearDepth(_t),Et=_t)},reset:function(){W=!1,Rt=null,Bt=null,Et=null,bt=!1}}}function o(){let W=!1,bt=null,Rt=null,Bt=null,Et=null,_t=null,Vt=null,oe=null,Le=null;return{setTest:function(we){W||(we?vt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(we){bt!==we&&!W&&(r.stencilMask(we),bt=we)},setFunc:function(we,_i,dn){(Rt!==we||Bt!==_i||Et!==dn)&&(r.stencilFunc(we,_i,dn),Rt=we,Bt=_i,Et=dn)},setOp:function(we,_i,dn){(_t!==we||Vt!==_i||oe!==dn)&&(r.stencilOp(we,_i,dn),_t=we,Vt=_i,oe=dn)},setLocked:function(we){W=we},setClear:function(we){Le!==we&&(r.clearStencil(we),Le=we)},reset:function(){W=!1,bt=null,Rt=null,Bt=null,Et=null,_t=null,Vt=null,oe=null,Le=null}}}const c=new n,u=new a,h=new o,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,L=null,U=null,w=null,N=null,P=null,F=new ce(0,0,0),G=0,C=!1,D=null,k=null,Z=null,lt=null,ut=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,nt=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=nt>=1):j.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=nt>=2);let yt=null,O={};const tt=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),St=new Ge().fromArray(tt),Ut=new Ge().fromArray(xt);function Gt(W,bt,Rt,Bt){const Et=new Uint8Array(4),_t=r.createTexture();r.bindTexture(W,_t),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Rt;Vt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return _t}const it={};it[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),vt(r.DEPTH_TEST),u.setFunc(Fr),ae(!1),Ot(sv),vt(r.CULL_FACE),ze(pa);function vt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function At(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Jt(W,bt){return v[W]!==bt?(r.bindFramebuffer(W,bt),v[W]=bt,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=bt),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function jt(W,bt){let Rt=x,Bt=!1;if(W){Rt=_.get(bt),Rt===void 0&&(Rt=[],_.set(bt,Rt));const Et=W.textures;if(Rt.length!==Et.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Vt=Et.length;_t<Vt;_t++)Rt[_t]=r.COLOR_ATTACHMENT0+_t;Rt.length=Et.length,Bt=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Rt)}function _e(W){return M!==W?(r.useProgram(W),M=W,!0):!1}const ln={[ws]:r.FUNC_ADD,[TS]:r.FUNC_SUBTRACT,[bS]:r.FUNC_REVERSE_SUBTRACT};ln[AS]=r.MIN,ln[wS]=r.MAX;const H={[RS]:r.ZERO,[CS]:r.ONE,[DS]:r.SRC_COLOR,[cd]:r.SRC_ALPHA,[zS]:r.SRC_ALPHA_SATURATE,[PS]:r.DST_COLOR,[LS]:r.DST_ALPHA,[US]:r.ONE_MINUS_SRC_COLOR,[ud]:r.ONE_MINUS_SRC_ALPHA,[OS]:r.ONE_MINUS_DST_COLOR,[NS]:r.ONE_MINUS_DST_ALPHA,[BS]:r.CONSTANT_COLOR,[IS]:r.ONE_MINUS_CONSTANT_COLOR,[FS]:r.CONSTANT_ALPHA,[HS]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(W,bt,Rt,Bt,Et,_t,Vt,oe,Le,we){if(W===pa){T===!0&&(At(r.BLEND),T=!1);return}if(T===!1&&(vt(r.BLEND),T=!0),W!==ES){if(W!==S||we!==C){if((y!==ws||w!==ws)&&(r.blendEquation(r.FUNC_ADD),y=ws,w=ws),we)switch(W){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ir:r.blendFunc(r.ONE,r.ONE);break;case rv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ov:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ov:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,U=null,N=null,P=null,F.set(0,0,0),G=0,S=W,C=we}return}Et=Et||bt,_t=_t||Rt,Vt=Vt||Bt,(bt!==y||Et!==w)&&(r.blendEquationSeparate(ln[bt],ln[Et]),y=bt,w=Et),(Rt!==L||Bt!==U||_t!==N||Vt!==P)&&(r.blendFuncSeparate(H[Rt],H[Bt],H[_t],H[Vt]),L=Rt,U=Bt,N=_t,P=Vt),(oe.equals(F)===!1||Le!==G)&&(r.blendColor(oe.r,oe.g,oe.b,Le),F.copy(oe),G=Le),S=W,C=!1}function ue(W,bt){W.side===Zn?At(r.CULL_FACE):vt(r.CULL_FACE);let Rt=W.side===Kn;bt&&(Rt=!Rt),ae(Rt),W.blending===Or&&W.transparent===!1?ze(pa):ze(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function ae(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function Ot(W){W!==yS?(vt(r.CULL_FACE),W!==k&&(W===sv?r.cullFace(r.BACK):W===SS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),k=W}function We(W){W!==Z&&(B&&r.lineWidth(W),Z=W)}function kt(W,bt,Rt){W?(vt(r.POLYGON_OFFSET_FILL),(lt!==bt||ut!==Rt)&&(r.polygonOffset(bt,Rt),lt=bt,ut=Rt)):At(r.POLYGON_OFFSET_FILL)}function fe(W){W?vt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Ke(W){W===void 0&&(W=r.TEXTURE0+ft-1),yt!==W&&(r.activeTexture(W),yt=W)}function Qe(W,bt,Rt){Rt===void 0&&(yt===null?Rt=r.TEXTURE0+ft-1:Rt=yt);let Bt=O[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},O[Rt]=Bt),(Bt.type!==W||Bt.texture!==bt)&&(yt!==Rt&&(r.activeTexture(Rt),yt=Rt),r.bindTexture(W,bt||it[W]),Bt.type=W,Bt.texture=bt)}function z(){const W=O[yt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){St.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),St.copy(W))}function Qt(W){Ut.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ut.copy(W))}function Xt(W,bt){let Rt=p.get(bt);Rt===void 0&&(Rt=new WeakMap,p.set(bt,Rt));let Bt=Rt.get(W);Bt===void 0&&(Bt=r.getUniformBlockIndex(bt,W.name),Rt.set(W,Bt))}function Ct(W,bt){const Bt=p.get(bt).get(W);d.get(bt)!==Bt&&(r.uniformBlockBinding(bt,Bt,W.__bindingPointIndex),d.set(bt,Bt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,O={},v={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,L=null,U=null,w=null,N=null,P=null,F=new ce(0,0,0),G=0,C=!1,D=null,k=null,Z=null,lt=null,ut=null,St.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:vt,disable:At,bindFramebuffer:Jt,drawBuffers:jt,useProgram:_e,setBlending:ze,setMaterial:ue,setFlipSided:ae,setCullFace:Ot,setLineWidth:We,setPolygonOffset:kt,setScissorTest:fe,activeTexture:Ke,bindTexture:Qe,unbindTexture:z,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Zt,texImage3D:Mt,updateUBOMapping:Xt,uniformBlockBinding:Ct,texStorage2D:wt,texStorage3D:qt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:zt,scissor:Lt,viewport:Qt,reset:he}}function WA(r,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,b){return x?new OffscreenCanvas(z,b):du("canvas")}function T(z,b,et){let ht=1;const mt=Qe(z);if((mt.width>et||mt.height>et)&&(ht=et/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ct=Math.floor(ht*mt.width),zt=Math.floor(ht*mt.height);v===void 0&&(v=M(ct,zt));const wt=b?M(ct,zt):v;return wt.width=ct,wt.height=zt,wt.getContext("2d").drawImage(z,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+zt+")."),wt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),z;return z}function S(z){return z.generateMipmaps}function y(z){r.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(z,b,et,ht,mt=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ct=b;if(b===r.RED&&(et===r.FLOAT&&(ct=r.R32F),et===r.HALF_FLOAT&&(ct=r.R16F),et===r.UNSIGNED_BYTE&&(ct=r.R8)),b===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.R8UI),et===r.UNSIGNED_SHORT&&(ct=r.R16UI),et===r.UNSIGNED_INT&&(ct=r.R32UI),et===r.BYTE&&(ct=r.R8I),et===r.SHORT&&(ct=r.R16I),et===r.INT&&(ct=r.R32I)),b===r.RG&&(et===r.FLOAT&&(ct=r.RG32F),et===r.HALF_FLOAT&&(ct=r.RG16F),et===r.UNSIGNED_BYTE&&(ct=r.RG8)),b===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RG8UI),et===r.UNSIGNED_SHORT&&(ct=r.RG16UI),et===r.UNSIGNED_INT&&(ct=r.RG32UI),et===r.BYTE&&(ct=r.RG8I),et===r.SHORT&&(ct=r.RG16I),et===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),et===r.UNSIGNED_INT&&(ct=r.RGB32UI),et===r.BYTE&&(ct=r.RGB8I),et===r.SHORT&&(ct=r.RGB16I),et===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),et===r.UNSIGNED_INT&&(ct=r.RGBA32UI),et===r.BYTE&&(ct=r.RGBA8I),et===r.SHORT&&(ct=r.RGBA16I),et===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&(et===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),et===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),b===r.RGBA){const zt=mt?fu:Re.getTransfer(ht);et===r.FLOAT&&(ct=r.RGBA32F),et===r.HALF_FLOAT&&(ct=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ct=zt===Oe?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(z,b){let et;return z?b===null||b===Ls||b===hl?et=r.DEPTH24_STENCIL8:b===Gi?et=r.DEPTH32F_STENCIL8:b===fl&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ls||b===hl?et=r.DEPTH_COMPONENT24:b===Gi?et=r.DEPTH_COMPONENT32F:b===fl&&(et=r.DEPTH_COMPONENT16),et}function N(z,b){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==li&&z.minFilter!==Hi?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function P(z){const b=z.target;b.removeEventListener("dispose",P),G(b),b.isVideoTexture&&g.delete(b)}function F(z){const b=z.target;b.removeEventListener("dispose",F),D(b)}function G(z){const b=a.get(z);if(b.__webglInit===void 0)return;const et=z.source,ht=_.get(et);if(ht){const mt=ht[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&C(z),Object.keys(ht).length===0&&_.delete(et)}a.remove(z)}function C(z){const b=a.get(z);r.deleteTexture(b.__webglTexture);const et=z.source,ht=_.get(et);delete ht[b.__cacheKey],u.memory.textures--}function D(z){const b=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let mt=0;mt<b.__webglFramebuffer[ht].length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[ht][mt]);else r.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[ht]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=z.textures;for(let ht=0,mt=et.length;ht<mt;ht++){const ct=a.get(et[ht]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),u.memory.textures--),a.remove(et[ht])}a.remove(z)}let k=0;function Z(){k=0}function lt(){const z=k;return z>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),k+=1,z}function ut(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function ft(z,b){const et=a.get(z);if(z.isVideoTexture&&fe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&et.__version!==z.version){const ht=z.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(et,z,b);return}}else z.isExternalTexture&&(et.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+b)}function B(z,b){const et=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){it(et,z,b);return}n.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+b)}function nt(z,b){const et=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){it(et,z,b);return}n.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+b)}function j(z,b){const et=a.get(z);if(z.version>0&&et.__version!==z.version){vt(et,z,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+b)}const yt={[yd]:r.REPEAT,[Cs]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},O={[li]:r.NEAREST,[kS]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[Rh]:r.LINEAR_MIPMAP_NEAREST,[Ds]:r.LINEAR_MIPMAP_LINEAR},tt={[YS]:r.NEVER,[$S]:r.ALWAYS,[jS]:r.LESS,[O_]:r.LEQUAL,[ZS]:r.EQUAL,[JS]:r.GEQUAL,[KS]:r.GREATER,[QS]:r.NOTEQUAL};function xt(z,b){if(b.type===Gi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Hi||b.magFilter===Rh||b.magFilter===wc||b.magFilter===Ds||b.minFilter===Hi||b.minFilter===Rh||b.minFilter===wc||b.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,yt[b.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,O[b.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===li||b.minFilter!==wc&&b.minFilter!==Ds||b.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function St(z,b){let et=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",P));const ht=b.source;let mt=_.get(ht);mt===void 0&&(mt={},_.set(ht,mt));const ct=ut(b);if(ct!==z.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,et=!0),mt[ct].usedTimes++;const zt=mt[z.__cacheKey];zt!==void 0&&(mt[z.__cacheKey].usedTimes--,zt.usedTimes===0&&C(b)),z.__cacheKey=ct,z.__webglTexture=mt[ct].texture}return et}function Ut(z,b,et){return Math.floor(Math.floor(z/et)/b)}function Gt(z,b,et,ht){const ct=z.updateRanges;if(ct.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,et,ht,b.data);else{ct.sort((Mt,Lt)=>Mt.start-Lt.start);let zt=0;for(let Mt=1;Mt<ct.length;Mt++){const Lt=ct[zt],Qt=ct[Mt],Xt=Lt.start+Lt.count,Ct=Ut(Qt.start,b.width,4),he=Ut(Lt.start,b.width,4);Qt.start<=Xt+1&&Ct===he&&Ut(Qt.start+Qt.count-1,b.width,4)===Ct?Lt.count=Math.max(Lt.count,Qt.start+Qt.count-Lt.start):(++zt,ct[zt]=Qt)}ct.length=zt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),qt=r.getParameter(r.UNPACK_SKIP_PIXELS),Zt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,Lt=ct.length;Mt<Lt;Mt++){const Qt=ct[Mt],Xt=Math.floor(Qt.start/4),Ct=Math.ceil(Qt.count/4),he=Xt%b.width,W=Math.floor(Xt/b.width),bt=Ct,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,he,W,bt,Rt,et,ht,b.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Zt)}}function it(z,b,et){let ht=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=r.TEXTURE_3D);const mt=St(z,b),ct=b.source;n.bindTexture(ht,z.__webglTexture,r.TEXTURE0+et);const zt=a.get(ct);if(ct.version!==zt.__version||mt===!0){n.activeTexture(r.TEXTURE0+et);const wt=Re.getPrimaries(Re.workingColorSpace),qt=b.colorSpace===Za?null:Re.getPrimaries(b.colorSpace),Zt=b.colorSpace===Za||wt===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Mt=T(b.image,!1,o.maxTextureSize);Mt=Ke(b,Mt);const Lt=c.convert(b.format,b.colorSpace),Qt=c.convert(b.type);let Xt=U(b.internalFormat,Lt,Qt,b.colorSpace,b.isVideoTexture);xt(ht,b);let Ct;const he=b.mipmaps,W=b.isVideoTexture!==!0,bt=zt.__version===void 0||mt===!0,Rt=ct.dataReady,Bt=N(b,Mt);if(b.isDepthTexture)Xt=w(b.format===pl,b.type),bt&&(W?n.texStorage2D(r.TEXTURE_2D,1,Xt,Mt.width,Mt.height):n.texImage2D(r.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,Lt,Qt,null));else if(b.isDataTexture)if(he.length>0){W&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,he[0].width,he[0].height);for(let Et=0,_t=he.length;Et<_t;Et++)Ct=he[Et],W?Rt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Qt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,Xt,Ct.width,Ct.height,0,Lt,Qt,Ct.data);b.generateMipmaps=!1}else W?(bt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height),Rt&&Gt(b,Mt,Lt,Qt)):n.texImage2D(r.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,Lt,Qt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,he[0].width,he[0].height,Mt.depth);for(let Et=0,_t=he.length;Et<_t;Et++)if(Ct=he[Et],b.format!==Ri)if(Lt!==null)if(W){if(Rt)if(b.layerUpdates.size>0){const Vt=Fv(Ct.width,Ct.height,b.format,b.type);for(const oe of b.layerUpdates){const Le=Ct.data.subarray(oe*Vt/Ct.data.BYTES_PER_ELEMENT,(oe+1)*Vt/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,oe,Ct.width,Ct.height,1,Lt,Le)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Ct.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Qt,Ct.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Ct.width,Ct.height,Mt.depth,0,Lt,Qt,Ct.data)}else{W&&bt&&n.texStorage2D(r.TEXTURE_2D,Bt,Xt,he[0].width,he[0].height);for(let Et=0,_t=he.length;Et<_t;Et++)Ct=he[Et],b.format!==Ri?Lt!==null?W?Rt&&n.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):n.compressedTexImage2D(r.TEXTURE_2D,Et,Xt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Qt,Ct.data):n.texImage2D(r.TEXTURE_2D,Et,Xt,Ct.width,Ct.height,0,Lt,Qt,Ct.data)}else if(b.isDataArrayTexture)if(W){if(bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,Mt.width,Mt.height,Mt.depth),Rt)if(b.layerUpdates.size>0){const Et=Fv(Mt.width,Mt.height,b.format,b.type);for(const _t of b.layerUpdates){const Vt=Mt.data.subarray(_t*Et/Mt.data.BYTES_PER_ELEMENT,(_t+1)*Et/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Lt,Qt,Vt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Qt,Mt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,Mt.width,Mt.height,Mt.depth,0,Lt,Qt,Mt.data);else if(b.isData3DTexture)W?(bt&&n.texStorage3D(r.TEXTURE_3D,Bt,Xt,Mt.width,Mt.height,Mt.depth),Rt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Qt,Mt.data)):n.texImage3D(r.TEXTURE_3D,0,Xt,Mt.width,Mt.height,Mt.depth,0,Lt,Qt,Mt.data);else if(b.isFramebufferTexture){if(bt)if(W)n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height);else{let Et=Mt.width,_t=Mt.height;for(let Vt=0;Vt<Bt;Vt++)n.texImage2D(r.TEXTURE_2D,Vt,Xt,Et,_t,0,Lt,Qt,null),Et>>=1,_t>>=1}}else if(he.length>0){if(W&&bt){const Et=Qe(he[0]);n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}for(let Et=0,_t=he.length;Et<_t;Et++)Ct=he[Et],W?Rt&&n.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt,Qt,Ct):n.texImage2D(r.TEXTURE_2D,Et,Xt,Lt,Qt,Ct);b.generateMipmaps=!1}else if(W){if(bt){const Et=Qe(Mt);n.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}Rt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Qt,Mt)}else n.texImage2D(r.TEXTURE_2D,0,Xt,Lt,Qt,Mt);S(b)&&y(ht),zt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function vt(z,b,et){if(b.image.length!==6)return;const ht=St(z,b),mt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+et);const ct=a.get(mt);if(mt.version!==ct.__version||ht===!0){n.activeTexture(r.TEXTURE0+et);const zt=Re.getPrimaries(Re.workingColorSpace),wt=b.colorSpace===Za?null:Re.getPrimaries(b.colorSpace),qt=b.colorSpace===Za||zt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!Zt&&!Mt?Lt[_t]=T(b.image[_t],!0,o.maxCubemapSize):Lt[_t]=Mt?b.image[_t].image:b.image[_t],Lt[_t]=Ke(b,Lt[_t]);const Qt=Lt[0],Xt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),he=U(b.internalFormat,Xt,Ct,b.colorSpace),W=b.isVideoTexture!==!0,bt=ct.__version===void 0||ht===!0,Rt=mt.dataReady;let Bt=N(b,Qt);xt(r.TEXTURE_CUBE_MAP,b);let Et;if(Zt){W&&bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){Et=Lt[_t].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const oe=Et[Vt];b.format!==Ri?Xt!==null?W?Rt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,oe.width,oe.height,Xt,oe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,oe.width,oe.height,Xt,Ct,oe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,he,oe.width,oe.height,0,Xt,Ct,oe.data)}}}else{if(Et=b.mipmaps,W&&bt){Et.length>0&&Bt++;const _t=Qe(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){W?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Xt,Ct,Lt[_t].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,Lt[_t].width,Lt[_t].height,0,Xt,Ct,Lt[_t].data);for(let Vt=0;Vt<Et.length;Vt++){const Le=Et[Vt].image[_t].image;W?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Le.width,Le.height,Xt,Ct,Le.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,he,Le.width,Le.height,0,Xt,Ct,Le.data)}}else{W?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Ct,Lt[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,Xt,Ct,Lt[_t]);for(let Vt=0;Vt<Et.length;Vt++){const oe=Et[Vt];W?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Xt,Ct,oe.image[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,he,Xt,Ct,oe.image[_t])}}}S(b)&&y(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function At(z,b,et,ht,mt,ct){const zt=c.convert(et.format,et.colorSpace),wt=c.convert(et.type),qt=U(et.internalFormat,zt,wt,et.colorSpace),Zt=a.get(b),Mt=a.get(et);if(Mt.__renderTarget=b,!Zt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ct),Qt=Math.max(1,b.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?n.texImage3D(mt,ct,qt,Lt,Qt,b.depth,0,zt,wt,null):n.texImage2D(mt,ct,qt,Lt,Qt,0,zt,wt,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),kt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,0,We(b)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,ct),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(z,b,et){if(r.bindRenderbuffer(r.RENDERBUFFER,z),b.depthBuffer){const ht=b.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=w(b.stencilBuffer,mt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=We(b);kt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,ct,b.width,b.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,z)}else{const ht=b.textures;for(let mt=0;mt<ht.length;mt++){const ct=ht[mt],zt=c.convert(ct.format,ct.colorSpace),wt=c.convert(ct.type),qt=U(ct.internalFormat,zt,wt,ct.colorSpace),Zt=We(b);et&&kt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,qt,b.width,b.height):kt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,qt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,qt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function jt(z,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const mt=ht.__webglTexture,ct=We(b);if(b.depthTexture.format===dl)kt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(b.depthTexture.format===pl)kt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function _e(z){const b=a.get(z),et=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const ht=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),b.__depthDisposeCallback=mt}b.__boundDepthTexture=ht}if(z.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=z.texture.mipmaps;ht&&ht.length>0?jt(b.__webglFramebuffer[0],z):jt(b.__webglFramebuffer,z)}else if(et){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=r.createRenderbuffer(),Jt(b.__webglDepthbuffer[ht],z,!1);else{const mt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const ht=z.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Jt(b.__webglDepthbuffer,z,!1);else{const mt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function ln(z,b,et){const ht=a.get(z);b!==void 0&&At(ht.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&_e(z)}function H(z){const b=z.texture,et=a.get(z),ht=a.get(b);z.addEventListener("dispose",F);const mt=z.textures,ct=z.isWebGLCubeRenderTarget===!0,zt=mt.length>1;if(zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=b.version,u.memory.textures++),ct){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let qt=0;qt<b.mipmaps.length;qt++)et.__webglFramebuffer[wt][qt]=r.createFramebuffer()}else et.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)et.__webglFramebuffer[wt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(zt)for(let wt=0,qt=mt.length;wt<qt;wt++){const Zt=a.get(mt[wt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&kt(z)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<mt.length;wt++){const qt=mt[wt];et.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const Zt=c.convert(qt.format,qt.colorSpace),Mt=c.convert(qt.type),Lt=U(qt.internalFormat,Zt,Mt,qt.colorSpace,z.isXRRenderTarget===!0),Qt=We(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Lt,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Jt(et.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){n.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)At(et.__webglFramebuffer[wt][qt],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,qt);else At(et.__webglFramebuffer[wt],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(b)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let wt=0,qt=mt.length;wt<qt;wt++){const Zt=mt[wt],Mt=a.get(Zt);let Lt=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Mt.__webglTexture),xt(Lt,Zt),At(et.__webglFramebuffer,z,Zt,r.COLOR_ATTACHMENT0+wt,Lt,0),S(Zt)&&y(Lt)}n.unbindTexture()}else{let wt=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(wt,ht.__webglTexture),xt(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)At(et.__webglFramebuffer[qt],z,b,r.COLOR_ATTACHMENT0,wt,qt);else At(et.__webglFramebuffer,z,b,r.COLOR_ATTACHMENT0,wt,0);S(b)&&y(wt),n.unbindTexture()}z.depthBuffer&&_e(z)}function ze(z){const b=z.textures;for(let et=0,ht=b.length;et<ht;et++){const mt=b[et];if(S(mt)){const ct=L(z),zt=a.get(mt).__webglTexture;n.bindTexture(ct,zt),y(ct),n.unbindTexture()}}}const ue=[],ae=[];function Ot(z){if(z.samples>0){if(kt(z)===!1){const b=z.textures,et=z.width,ht=z.height;let mt=r.COLOR_BUFFER_BIT;const ct=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(z),wt=b.length>1;if(wt)for(let Zt=0;Zt<b.length;Zt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const qt=z.texture.mipmaps;qt&&qt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Zt=0;Zt<b.length;Zt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const Mt=a.get(b[Zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,et,ht,0,0,et,ht,mt,r.NEAREST),d===!0&&(ue.length=0,ae.length=0,ue.push(r.COLOR_ATTACHMENT0+Zt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ue.push(ct),ae.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let Zt=0;Zt<b.length;Zt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const Mt=a.get(b[Zt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,Mt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const b=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function We(z){return Math.min(o.maxSamples,z.samples)}function kt(z){const b=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(z){const b=u.render.frame;g.get(z)!==b&&(g.set(z,b),z.update())}function Ke(z,b){const et=z.colorSpace,ht=z.format,mt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||et!==Vr&&et!==Za&&(Re.getTransfer(et)===Oe?(ht!==Ri||mt!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Qe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Z,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=ln,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=At,this.useMultisampledRTT=kt}function qA(r,t){function n(a,o=Za){let c;const u=Re.getTransfer(o);if(a===Xi)return r.UNSIGNED_BYTE;if(a===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(a===sp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===C_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===D_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===w_)return r.BYTE;if(a===R_)return r.SHORT;if(a===fl)return r.UNSIGNED_SHORT;if(a===ip)return r.INT;if(a===Ls)return r.UNSIGNED_INT;if(a===Gi)return r.FLOAT;if(a===ma)return r.HALF_FLOAT;if(a===U_)return r.ALPHA;if(a===L_)return r.RGB;if(a===Ri)return r.RGBA;if(a===dl)return r.DEPTH_COMPONENT;if(a===pl)return r.DEPTH_STENCIL;if(a===rp)return r.RED;if(a===op)return r.RED_INTEGER;if(a===N_)return r.RG;if(a===lp)return r.RG_INTEGER;if(a===cp)return r.RGBA_INTEGER;if(a===iu||a===au||a===su||a===ru)if(u===Oe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Md||a===Ed||a===Td||a===bd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ad||a===wd||a===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ad||a===wd)return u===Oe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Rd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Cd||a===Dd||a===Ud||a===Ld||a===Nd||a===Pd||a===Od||a===zd||a===Bd||a===Id||a===Fd||a===Hd||a===Gd||a===Vd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Cd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Dd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ud)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ld)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Nd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Pd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Od)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===zd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Bd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Id)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Hd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Gd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vd)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===kd||a===Xd||a===Wd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===kd)return u===Oe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Xd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===qd||a===Yd||a===jd||a===Zd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===qd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
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

}`;class ZA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Y_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new _n({vertexShader:YA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new se(new Ns(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KA extends jr{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,v=null,_=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",S=new ZA,y={},L=n.getContextAttributes();let U=null,w=null;const N=[],P=[],F=new Ft;let G=null;const C=new jn;C.viewport=new Ge;const D=new jn;D.viewport=new Ge;const k=[C,D],Z=new v1;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=N[it];return vt===void 0&&(vt=new Zh,N[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=N[it];return vt===void 0&&(vt=new Zh,N[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=N[it];return vt===void 0&&(vt=new Zh,N[it]=vt),vt.getHandSpace()};function ft(it){const vt=P.indexOf(it.inputSource);if(vt===-1)return;const At=N[vt];At!==void 0&&(At.update(it.inputSource,it.frame,p||u),At.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){o.removeEventListener("select",ft),o.removeEventListener("selectstart",ft),o.removeEventListener("selectend",ft),o.removeEventListener("squeeze",ft),o.removeEventListener("squeezestart",ft),o.removeEventListener("squeezeend",ft),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",nt);for(let it=0;it<N.length;it++){const vt=P[it];vt!==null&&(P[it]=null,N[it].disconnect(vt))}lt=null,ut=null,S.reset();for(const it in y)delete y[it];t.setRenderTarget(U),x=null,_=null,v=null,o=null,w=null,Gt.stop(),a.isPresenting=!1,t.setPixelRatio(G),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",ft),o.addEventListener("selectstart",ft),o.addEventListener("selectend",ft),o.addEventListener("squeeze",ft),o.addEventListener("squeezestart",ft),o.addEventListener("squeezeend",ft),o.addEventListener("end",B),o.addEventListener("inputsourceschange",nt),L.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Jt=null,jt=null;L.depth&&(jt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=L.stencil?pl:dl,Jt=L.stencil?hl:Ls);const _e={colorFormat:n.RGBA8,depthFormat:jt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(_e),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),w=new Ci(_.textureWidth,_.textureHeight,{format:Ri,type:Xi,depthTexture:new q_(_.textureWidth,_.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,At),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Ci(x.framebufferWidth,x.framebufferHeight,{format:Ri,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),Gt.setContext(o),Gt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function nt(it){for(let vt=0;vt<it.removed.length;vt++){const At=it.removed[vt],Jt=P.indexOf(At);Jt>=0&&(P[Jt]=null,N[Jt].disconnect(At))}for(let vt=0;vt<it.added.length;vt++){const At=it.added[vt];let Jt=P.indexOf(At);if(Jt===-1){for(let _e=0;_e<N.length;_e++)if(_e>=P.length){P.push(At),Jt=_e;break}else if(P[_e]===null){P[_e]=At,Jt=_e;break}if(Jt===-1)break}const jt=N[Jt];jt&&jt.connect(At)}}const j=new V,yt=new V;function O(it,vt,At){j.setFromMatrixPosition(vt.matrixWorld),yt.setFromMatrixPosition(At.matrixWorld);const Jt=j.distanceTo(yt),jt=vt.projectionMatrix.elements,_e=At.projectionMatrix.elements,ln=jt[14]/(jt[10]-1),H=jt[14]/(jt[10]+1),ze=(jt[9]+1)/jt[5],ue=(jt[9]-1)/jt[5],ae=(jt[8]-1)/jt[0],Ot=(_e[8]+1)/_e[0],We=ln*ae,kt=ln*Ot,fe=Jt/(-ae+Ot),Ke=fe*-ae;if(vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ke),it.translateZ(fe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),jt[10]===-1)it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Qe=ln+fe,z=H+fe,b=We-Ke,et=kt+(Jt-Ke),ht=ze*H/z*Qe,mt=ue*H/z*Qe;it.projectionMatrix.makePerspective(b,et,ht,mt,Qe,z),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function tt(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let vt=it.near,At=it.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(At=S.depthFar)),Z.near=D.near=C.near=vt,Z.far=D.far=C.far=At,(lt!==Z.near||ut!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),lt=Z.near,ut=Z.far),Z.layers.mask=it.layers.mask|6,C.layers.mask=Z.layers.mask&3,D.layers.mask=Z.layers.mask&5;const Jt=it.parent,jt=Z.cameras;tt(Z,Jt);for(let _e=0;_e<jt.length;_e++)tt(jt[_e],Jt);jt.length===2?O(Z,C,D):Z.projectionMatrix.copy(C.projectionMatrix),xt(it,Z,Jt)};function xt(it,vt,At){At===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=kr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(it){d=it,_!==null&&(_.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(it){return y[it]};let St=null;function Ut(it,vt){if(g=vt.getViewerPose(p||u),M=vt,g!==null){const At=g.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let Jt=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,Jt=!0);for(let H=0;H<At.length;H++){const ze=At[H];let ue=null;if(x!==null)ue=x.getViewport(ze);else{const Ot=v.getViewSubImage(_,ze);ue=Ot.viewport,H===0&&(t.setRenderTargetTextures(w,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(w))}let ae=k[H];ae===void 0&&(ae=new jn,ae.layers.enable(H),ae.viewport=new Ge,k[H]=ae),ae.matrix.fromArray(ze.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ze.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ue.x,ue.y,ue.width,ue.height),H===0&&(Z.matrix.copy(ae.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Jt===!0&&Z.cameras.push(ae)}const jt=o.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const H=v.getDepthInformation(At[0]);H&&H.isValid&&H.texture&&S.init(H,o.renderState)}if(jt&&jt.includes("camera-access")&&T){t.state.unbindTexture(),v=a.getBinding();for(let H=0;H<At.length;H++){const ze=At[H].camera;if(ze){let ue=y[ze];ue||(ue=new Y_,y[ze]=ue);const ae=v.getCameraImage(ze);ue.sourceTexture=ae}}}}for(let At=0;At<N.length;At++){const Jt=P[At],jt=N[At];Jt!==null&&jt!==void 0&&jt.update(Jt,vt,p||u)}St&&St(it,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),M=null}const Gt=new J_;Gt.setAnimationLoop(Ut),this.setAnimationLoop=function(it){St=it},this.dispose=function(){}}}const Es=new Wi,QA=new Xe;function JA(r,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,k_(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,L,U,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(S,y):y.isMeshToonMaterial?(c(S,y),v(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y)):y.isMeshStandardMaterial?(c(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(c(S,y),M(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),T(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?d(S,y,L,U):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Kn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Kn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=t.get(y),U=L.envMap,w=L.envMapRotation;U&&(S.envMap.value=U,Es.copy(w),Es.x*=-1,Es.y*=-1,Es.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),S.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(Es)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,L,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=U*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const L=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function $A(r,t,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,U){const w=U.program;a.uniformBlockBinding(L,w)}function p(L,U){let w=o[L.id];w===void 0&&(M(L),w=g(L),o[L.id]=w,L.addEventListener("dispose",S));const N=U.program;a.updateUBOMapping(L,N);const P=t.render.frame;c[L.id]!==P&&(_(L),c[L.id]=P)}function g(L){const U=v();L.__bindingPointIndex=U;const w=r.createBuffer(),N=L.__size,P=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,N,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,w),w}function v(){for(let L=0;L<h;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const U=o[L.id],w=L.uniforms,N=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let P=0,F=w.length;P<F;P++){const G=Array.isArray(w[P])?w[P]:[w[P]];for(let C=0,D=G.length;C<D;C++){const k=G[C];if(x(k,P,C,N)===!0){const Z=k.__offset,lt=Array.isArray(k.value)?k.value:[k.value];let ut=0;for(let ft=0;ft<lt.length;ft++){const B=lt[ft],nt=T(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,Z+ut,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,ut),ut+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(L,U,w,N){const P=L.value,F=U+"_"+w;if(N[F]===void 0)return typeof P=="number"||typeof P=="boolean"?N[F]=P:N[F]=P.clone(),!0;{const G=N[F];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return N[F]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function M(L){const U=L.uniforms;let w=0;const N=16;for(let F=0,G=U.length;F<G;F++){const C=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,k=C.length;D<k;D++){const Z=C[D],lt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,ft=lt.length;ut<ft;ut++){const B=lt[ut],nt=T(B),j=w%N,yt=j%nt.boundary,O=j+yt;w+=yt,O!==0&&N-O<nt.storage&&(w+=N-O),Z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=nt.storage}}}const P=w%N;return P>0&&(w+=N-P),L.__size=w,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const w=u.indexOf(U.__bindingPointIndex);u.splice(w,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function y(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:d,update:p,dispose:y}}class t2{constructor(t={}){const{canvas:n=gM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const L=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=oi;let P=0,F=0,G=null,C=-1,D=null;const k=new Ge,Z=new Ge;let lt=null;const ut=new ce(0);let ft=0,B=n.width,nt=n.height,j=1,yt=null,O=null;const tt=new Ge(0,0,B,nt),xt=new Ge(0,0,B,nt);let St=!1;const Ut=new hp;let Gt=!1,it=!1;const vt=new Xe,At=new V,Jt=new Ge,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function ln(){return G===null?j:1}let H=a;function ze(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Et,!1),H===null){const q="webgl2";if(H=ze(q,R),H===null)throw ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,ae,Ot,We,kt,fe,Ke,Qe,z,b,et,ht,mt,ct,zt,wt,qt,Zt,Mt,Lt,Qt,Xt,Ct,he;function W(){ue=new ub(H),ue.init(),Xt=new qA(H,ue),ae=new ib(H,ue,t,Xt),Ot=new XA(H,ue),ae.reversedDepthBuffer&&_&&Ot.buffers.depth.setReversed(!0),We=new db(H),kt=new UA,fe=new WA(H,ue,Ot,kt,ae,Xt,We),Ke=new sb(w),Qe=new cb(w),z=new x1(H),Ct=new eb(H,z),b=new fb(H,z,We,Ct),et=new mb(H,b,z,We),Mt=new pb(H,ae,fe),wt=new ab(kt),ht=new DA(w,Ke,Qe,ue,ae,Ct,wt),mt=new JA(w,kt),ct=new NA,zt=new FA(ue),Zt=new tb(w,Ke,Qe,Ot,et,x,d),qt=new VA(w,et,ae),he=new $A(H,We,ae,Ot),Lt=new nb(H,ue,We),Qt=new hb(H,ue,We),We.programs=ht.programs,w.capabilities=ae,w.extensions=ue,w.properties=kt,w.renderLists=ct,w.shadowMap=qt,w.state=Ot,w.info=We}W();const bt=new KA(w,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(B,nt,!1))},this.getSize=function(R){return R.set(B,nt)},this.setSize=function(R,q,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,nt=q,n.width=Math.floor(R*j),n.height=Math.floor(q*j),rt===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*j,nt*j).floor()},this.setDrawingBufferSize=function(R,q,rt){B=R,nt=q,j=rt,n.width=Math.floor(R*rt),n.height=Math.floor(q*rt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,q,rt,ot){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,q,rt,ot),Ot.viewport(k.copy(tt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,q,rt,ot){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,q,rt,ot),Ot.scissor(Z.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Ot.setScissorTest(St=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,rt=!0){let ot=0;if(R){let K=!1;if(G!==null){const Tt=G.texture.format;K=Tt===cp||Tt===lp||Tt===op}if(K){const Tt=G.texture.type,Dt=Tt===Xi||Tt===Ls||Tt===fl||Tt===hl||Tt===ap||Tt===sp,It=Zt.getClearColor(),Nt=Zt.getClearAlpha(),te=It.r,ne=It.g,Yt=It.b;Dt?(M[0]=te,M[1]=ne,M[2]=Yt,M[3]=Nt,H.clearBufferuiv(H.COLOR,0,M)):(T[0]=te,T[1]=ne,T[2]=Yt,T[3]=Nt,H.clearBufferiv(H.COLOR,0,T))}else ot|=H.COLOR_BUFFER_BIT}q&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Zt.dispose(),ct.dispose(),zt.dispose(),kt.dispose(),Ke.dispose(),Qe.dispose(),et.dispose(),Ct.dispose(),he.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",dn),bt.removeEventListener("sessionend",pn),$e.stop()};function Rt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=We.autoReset,q=qt.enabled,rt=qt.autoUpdate,ot=qt.needsUpdate,K=qt.type;W(),We.autoReset=R,qt.enabled=q,qt.autoUpdate=rt,qt.needsUpdate=ot,qt.type=K}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const q=R.target;q.removeEventListener("dispose",_t),Vt(q)}function Vt(R){oe(R),kt.remove(R)}function oe(R){const q=kt.get(R).programs;q!==void 0&&(q.forEach(function(rt){ht.releaseProgram(rt)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,rt,ot,K,Tt){q===null&&(q=jt);const Dt=K.isMesh&&K.matrixWorld.determinant()<0,It=_a(R,q,rt,ot,K);Ot.setMaterial(ot,Dt);let Nt=rt.index,te=1;if(ot.wireframe===!0){if(Nt=b.getWireframeAttribute(rt),Nt===void 0)return;te=2}const ne=rt.drawRange,Yt=rt.attributes.position;let me=ne.start*te,Ce=(ne.start+ne.count)*te;Tt!==null&&(me=Math.max(me,Tt.start*te),Ce=Math.min(Ce,(Tt.start+Tt.count)*te)),Nt!==null?(me=Math.max(me,0),Ce=Math.min(Ce,Nt.count)):Yt!=null&&(me=Math.max(me,0),Ce=Math.min(Ce,Yt.count));const je=Ce-me;if(je<0||je===1/0)return;Ct.setup(K,ot,It,rt,Nt);let Be,ge=Lt;if(Nt!==null&&(Be=z.get(Nt),ge=Qt,ge.setIndex(Be)),K.isMesh)ot.wireframe===!0?(Ot.setLineWidth(ot.wireframeLinewidth*ln()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(K.isLine){let $t=ot.linewidth;$t===void 0&&($t=1),Ot.setLineWidth($t*ln()),K.isLineSegments?ge.setMode(H.LINES):K.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else K.isPoints?ge.setMode(H.POINTS):K.isSprite&&ge.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ml("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,Ye=K._multiDrawCounts,Me=K._multiDrawCount,Un=Nt?z.get(Nt).bytesPerElement:1,xi=kt.get(ot).currentProgram.getUniforms();for(let Bn=0;Bn<Me;Bn++)xi.setValue(H,"_gl_DrawID",Bn),ge.render($t[Bn]/Un,Ye[Bn])}else if(K.isInstancedMesh)ge.renderInstances(me,je,K.count);else if(rt.isInstancedBufferGeometry){const $t=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,$t);ge.renderInstances(me,je,Ye)}else ge.render(me,je)};function Le(R,q,rt){R.transparent===!0&&R.side===Zn&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Ui(R,q,rt),R.side=Ja,R.needsUpdate=!0,Ui(R,q,rt),R.side=Zn):Ui(R,q,rt)}this.compile=function(R,q,rt=null){rt===null&&(rt=R),y=zt.get(rt),y.init(q),U.push(y),rt.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const It=Tt[Dt];Le(It,rt,K),ot.add(It)}else Le(Tt,rt,K),ot.add(Tt)}),y=U.pop(),ot},this.compileAsync=function(R,q,rt=null){const ot=this.compile(R,q,rt);return new Promise(K=>{function Tt(){if(ot.forEach(function(Dt){kt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){K(R);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let we=null;function _i(R){we&&we(R)}function dn(){$e.stop()}function pn(){$e.start()}const $e=new J_;$e.setAnimationLoop(_i),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(R){we=R,bt.setAnimationLoop(R),R===null?$e.stop():$e.start()},bt.addEventListener("sessionstart",dn),bt.addEventListener("sessionend",pn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,G),y=zt.get(R,U.length),y.init(q),U.push(y),vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ut.setFromProjectionMatrix(vt,Vi,q.reversedDepth),it=this.localClippingEnabled,Gt=wt.init(this.clippingPlanes,it),S=ct.get(R,L.length),S.init(),L.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Di(Tt,q,-1/0,w.sortObjects)}Di(R,q,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(yt,O),_e=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,_e&&Zt.addToRenderList(S,R),this.info.render.frame++,Gt===!0&&wt.beginShadows();const rt=y.state.shadowsArray;qt.render(rt,R,q),Gt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,K=S.transmissive;if(y.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(K.length>0)for(let Dt=0,It=Tt.length;Dt<It;Dt++){const Nt=Tt[Dt];_l(ot,K,R,Nt)}_e&&Zt.render(R);for(let Dt=0,It=Tt.length;Dt<It;Dt++){const Nt=Tt[Dt];Os(S,R,Nt,Nt.viewport)}}else K.length>0&&_l(ot,K,R,q),_e&&Zt.render(R),Os(S,R,q);G!==null&&F===0&&(fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(w,R,q),Ct.resetDefaultState(),C=-1,D=null,U.pop(),U.length>0?(y=U[U.length-1],Gt===!0&&wt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Di(R,q,rt,ot){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){ot&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Dt=et.update(R),It=R.material;It.visible&&S.push(R,Dt,It,rt,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){const Dt=et.update(R),It=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Jt.copy(Dt.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(It)){const Nt=Dt.groups;for(let te=0,ne=Nt.length;te<ne;te++){const Yt=Nt[te],me=It[Yt.materialIndex];me&&me.visible&&S.push(R,Dt,me,rt,Jt.z,Yt)}}else It.visible&&S.push(R,Dt,It,rt,Jt.z,null)}}const Tt=R.children;for(let Dt=0,It=Tt.length;Dt<It;Dt++)Di(Tt[Dt],q,rt,ot)}function Os(R,q,rt,ot){const K=R.opaque,Tt=R.transmissive,Dt=R.transparent;y.setupLightsView(rt),Gt===!0&&wt.setGlobalState(w.clippingPlanes,rt),ot&&Ot.viewport(k.copy(ot)),K.length>0&&zs(K,q,rt),Tt.length>0&&zs(Tt,q,rt),Dt.length>0&&zs(Dt,q,rt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function _l(R,q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new Ci(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ma:Xi,minFilter:Ds,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||k;Tt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Nt=w.getActiveCubeFace(),te=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(ut),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),_e&&Zt.render(rt);const ne=w.toneMapping;w.toneMapping=Qa;const Yt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),Gt===!0&&wt.setGlobalState(w.clippingPlanes,ot),zs(R,rt,ot),fe.updateMultisampleRenderTarget(Tt),fe.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Ce=0,je=q.length;Ce<je;Ce++){const Be=q[Ce],ge=Be.object,$t=Be.geometry,Ye=Be.material,Me=Be.group;if(Ye.side===Zn&&ge.layers.test(ot.layers)){const Un=Ye.side;Ye.side=Kn,Ye.needsUpdate=!0,eo(ge,rt,ot,$t,Ye,Me),Ye.side=Un,Ye.needsUpdate=!0,me=!0}}me===!0&&(fe.updateMultisampleRenderTarget(Tt),fe.updateRenderTargetMipmap(Tt))}w.setRenderTarget(It,Nt,te),w.setClearColor(ut,ft),Yt!==void 0&&(ot.viewport=Yt),w.toneMapping=ne}function zs(R,q,rt){const ot=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Tt=R.length;K<Tt;K++){const Dt=R[K],It=Dt.object,Nt=Dt.geometry,te=Dt.group;let ne=Dt.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),It.layers.test(rt.layers)&&eo(It,q,rt,Nt,ne,te)}}function eo(R,q,rt,ot,K,Tt){R.onBeforeRender(w,q,rt,ot,K,Tt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,q,rt,ot,R,Tt),K.transparent===!0&&K.side===Zn&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,w.renderBufferDirect(rt,q,ot,K,R,Tt),K.side=Ja,K.needsUpdate=!0,w.renderBufferDirect(rt,q,ot,K,R,Tt),K.side=Zn):w.renderBufferDirect(rt,q,ot,K,R,Tt),R.onAfterRender(w,q,rt,ot,K,Tt)}function Ui(R,q,rt){q.isScene!==!0&&(q=jt);const ot=kt.get(R),K=y.state.lights,Tt=y.state.shadowsArray,Dt=K.state.version,It=ht.getParameters(R,K.state,Tt,q,rt),Nt=ht.getProgramCacheKey(It);let te=ot.programs;ot.environment=R.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(R.isMeshStandardMaterial?Qe:Ke).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",_t),te=new Map,ot.programs=te);let ne=te.get(Nt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Dt)return qi(R,It),ne}else It.uniforms=ht.getUniforms(R),R.onBeforeCompile(It,w),ne=ht.acquireProgram(It,Nt),te.set(Nt,ne),ot.uniforms=It.uniforms;const Yt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=wt.uniform),qi(R,It),ot.needsLights=xa(R),ot.lightsStateVersion=Dt,ot.needsLights&&(Yt.ambientLightColor.value=K.state.ambient,Yt.lightProbe.value=K.state.probe,Yt.directionalLights.value=K.state.directional,Yt.directionalLightShadows.value=K.state.directionalShadow,Yt.spotLights.value=K.state.spot,Yt.spotLightShadows.value=K.state.spotShadow,Yt.rectAreaLights.value=K.state.rectArea,Yt.ltc_1.value=K.state.rectAreaLTC1,Yt.ltc_2.value=K.state.rectAreaLTC2,Yt.pointLights.value=K.state.point,Yt.pointLightShadows.value=K.state.pointShadow,Yt.hemisphereLights.value=K.state.hemi,Yt.directionalShadowMap.value=K.state.directionalShadowMap,Yt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Yt.spotShadowMap.value=K.state.spotShadowMap,Yt.spotLightMatrix.value=K.state.spotLightMatrix,Yt.spotLightMap.value=K.state.spotLightMap,Yt.pointShadowMap.value=K.state.pointShadowMap,Yt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function Bs(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function qi(R,q){const rt=kt.get(R);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function _a(R,q,rt,ot,K){q.isScene!==!0&&(q=jt),fe.resetTextureUnits();const Tt=q.fog,Dt=ot.isMeshStandardMaterial?q.environment:null,It=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Vr,Nt=(ot.isMeshStandardMaterial?Qe:Ke).get(ot.envMap||Dt),te=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ne=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Yt=!!rt.morphAttributes.position,me=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let je=Qa;ot.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(je=w.toneMapping);const Be=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ge=Be!==void 0?Be.length:0,$t=kt.get(ot),Ye=y.state.lights;if(Gt===!0&&(it===!0||R!==D)){const tn=R===D&&ot.id===C;wt.setState(ot,R,tn)}let Me=!1;ot.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ye.state.version||$t.outputColorSpace!==It||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==Nt||ot.fog===!0&&$t.fog!==Tt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==wt.numPlanes||$t.numIntersection!==wt.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==ne||$t.morphTargets!==Yt||$t.morphNormals!==me||$t.morphColors!==Ce||$t.toneMapping!==je||$t.morphTargetsCount!==ge)&&(Me=!0):(Me=!0,$t.__version=ot.version);let Un=$t.currentProgram;Me===!0&&(Un=Ui(ot,q,K));let xi=!1,Bn=!1,Sn=!1;const Ve=Un.getUniforms(),In=$t.uniforms;if(Ot.useProgram(Un.program)&&(xi=!0,Bn=!0,Sn=!0),ot.id!==C&&(C=ot.id,Bn=!0),xi||D!==R){Ot.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ve.setValue(H,"projectionMatrix",R.projectionMatrix),Ve.setValue(H,"viewMatrix",R.matrixWorldInverse);const wn=Ve.map.cameraPosition;wn!==void 0&&wn.setValue(H,At.setFromMatrixPosition(R.matrixWorld)),ae.logarithmicDepthBuffer&&Ve.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ve.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Bn=!0,Sn=!0)}if(K.isSkinnedMesh){Ve.setOptional(H,K,"bindMatrix"),Ve.setOptional(H,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ve.setValue(H,"boneTexture",tn.boneTexture,fe))}K.isBatchedMesh&&(Ve.setOptional(H,K,"batchingTexture"),Ve.setValue(H,"batchingTexture",K._matricesTexture,fe),Ve.setOptional(H,K,"batchingIdTexture"),Ve.setValue(H,"batchingIdTexture",K._indirectTexture,fe),Ve.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(H,"batchingColorTexture",K._colorsTexture,fe));const Ln=rt.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Mt.update(K,rt,Un),(Bn||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,Ve.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(In.envMap.value=Nt,In.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(In.envMapIntensity.value=q.environmentIntensity),Bn&&(Ve.setValue(H,"toneMappingExposure",w.toneMappingExposure),$t.needsLights&&ts(In,Sn),Tt&&ot.fog===!0&&mt.refreshFogUniforms(In,Tt),mt.refreshMaterialUniforms(In,ot,j,nt,y.state.transmissionRenderTarget[R.id]),ou.upload(H,Bs($t),In,fe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ou.upload(H,Bs($t),In,fe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ve.setValue(H,"center",K.center),Ve.setValue(H,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(H,"normalMatrix",K.normalMatrix),Ve.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const tn=ot.uniformsGroups;for(let wn=0,Is=tn.length;wn<Is;wn++){const kn=tn[wn];he.update(kn,Un),he.bind(kn,Un)}}return Un}function ts(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function xa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,q,rt){const ot=kt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),kt.get(R.texture).__webglTexture=q,kt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const rt=kt.get(R);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const cn=H.createFramebuffer();this.setRenderTarget=function(R,q=0,rt=0){G=R,P=q,F=rt;let ot=!0,K=null,Tt=!1,Dt=!1;if(R){const Nt=kt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Nt.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Nt.__hasExternalTextures)fe.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Yt=R.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&kt.has(Yt)&&(R.width!==Yt.image.width||R.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const ne=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?K=ne[q][rt]:K=ne[q],Tt=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?K=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[rt]:K=ne,k.copy(R.viewport),Z.copy(R.scissor),lt=R.scissorTest}else k.copy(tt).multiplyScalar(j).floor(),Z.copy(xt).multiplyScalar(j).floor(),lt=St;if(rt!==0&&(K=cn),Ot.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&Ot.drawBuffers(R,K),Ot.viewport(k),Ot.scissor(Z),Ot.setScissorTest(lt),Tt){const Nt=kt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,rt)}else if(Dt){const Nt=q;for(let te=0;te<R.textures.length;te++){const ne=kt.get(R.textures[te]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+te,ne.__webglTexture,rt,Nt)}}else if(R!==null&&rt!==0){const Nt=kt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,rt)}C=-1},this.readRenderTargetPixels=function(R,q,rt,ot,K,Tt,Dt,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const te=R.textures[It],ne=te.format,Yt=te.type;if(!ae.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(q,rt,ot,K,Xt.convert(ne),Xt.convert(Yt),Tt))}finally{const te=G!==null?kt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,q,rt,ot,K,Tt,Dt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(q>=0&&q<=R.width-ot&&rt>=0&&rt<=R.height-K){Ot.bindFramebuffer(H.FRAMEBUFFER,Nt);const te=R.textures[It],ne=te.format,Yt=te.type;if(!ae.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It),H.readPixels(q,rt,ot,K,Xt.convert(ne),Xt.convert(Yt),0);const Ce=G!==null?kt.get(G).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,Ce);const je=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await vM(H,je,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(me),H.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Dt=q!==null?q.x:0,It=q!==null?q.y:0;fe.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Dt,It,K,Tt),Ot.unbindTexture()};const xl=H.createFramebuffer(),yl=H.createFramebuffer();this.copyTextureToTexture=function(R,q,rt=null,ot=null,K=0,Tt=null){Tt===null&&(K!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Dt,It,Nt,te,ne,Yt,me,Ce,je;const Be=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(rt!==null)Dt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,ne=rt.min.y,Yt=rt.isBox3?rt.min.z:0;else{const Ln=Math.pow(2,-K);Dt=Math.floor(Be.width*Ln),It=Math.floor(Be.height*Ln),R.isDataArrayTexture?Nt=Be.depth:R.isData3DTexture?Nt=Math.floor(Be.depth*Ln):Nt=1,te=0,ne=0,Yt=0}ot!==null?(me=ot.x,Ce=ot.y,je=ot.z):(me=0,Ce=0,je=0);const ge=Xt.convert(q.format),$t=Xt.convert(q.type);let Ye;q.isData3DTexture?(fe.setTexture3D(q,0),Ye=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(fe.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY):(fe.setTexture2D(q,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),Un=H.getParameter(H.UNPACK_IMAGE_HEIGHT),xi=H.getParameter(H.UNPACK_SKIP_PIXELS),Bn=H.getParameter(H.UNPACK_SKIP_ROWS),Sn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const Ve=R.isDataArrayTexture||R.isData3DTexture,In=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Ln=kt.get(R),tn=kt.get(q),wn=kt.get(Ln.__renderTarget),Is=kt.get(tn.__renderTarget);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let kn=0;kn<Nt;kn++)Ve&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,K,Yt+kn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(q).__webglTexture,Tt,je+kn)),H.blitFramebuffer(te,ne,Dt,It,me,Ce,Dt,It,H.DEPTH_BUFFER_BIT,H.NEAREST);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||kt.has(R)){const Ln=kt.get(R),tn=kt.get(q);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,xl),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,yl);for(let wn=0;wn<Nt;wn++)Ve?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ln.__webglTexture,K,Yt+wn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ln.__webglTexture,K),In?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tn.__webglTexture,Tt,je+wn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tn.__webglTexture,Tt),K!==0?H.blitFramebuffer(te,ne,Dt,It,me,Ce,Dt,It,H.COLOR_BUFFER_BIT,H.NEAREST):In?H.copyTexSubImage3D(Ye,Tt,me,Ce,je+wn,te,ne,Dt,It):H.copyTexSubImage2D(Ye,Tt,me,Ce,te,ne,Dt,It);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else In?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ye,Tt,me,Ce,je,Dt,It,Nt,ge,$t,Be.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,Tt,me,Ce,je,Dt,It,Nt,ge,Be.data):H.texSubImage3D(Ye,Tt,me,Ce,je,Dt,It,Nt,ge,$t,Be):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,me,Ce,Dt,It,ge,$t,Be.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,me,Ce,Be.width,Be.height,ge,Be.data):H.texSubImage2D(H.TEXTURE_2D,Tt,me,Ce,Dt,It,ge,$t,Be);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Un),H.pixelStorei(H.UNPACK_SKIP_PIXELS,xi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Bn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Sn),Tt===0&&q.generateMipmaps&&H.generateMipmap(Ye),Ot.unbindTexture()},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),Ot.unbindTexture()},this.resetState=function(){P=0,F=0,G=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}function lu(r,t=!1){const n=r[0].index!==null,a=new Set(Object.keys(r[0].attributes)),o=new Set(Object.keys(r[0].morphAttributes)),c={},u={},h=r[0].morphTargetsRelative,d=new rn;let p=0;for(let g=0;g<r.length;++g){const v=r[g];let _=0;if(n!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in v.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(v.attributes[x]),_++}if(_!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in v.morphAttributes){if(!o.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[x]===void 0&&(u[x]=[]),u[x].push(v.morphAttributes[x])}if(t){let x;if(n)x=v.index.count;else if(v.attributes.position!==void 0)x=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;d.addGroup(p,x,g),p+=x}}if(n){let g=0;const v=[];for(let _=0;_<r.length;++_){const x=r[_].index;for(let M=0;M<x.count;++M)v.push(x.getX(M)+g);g+=r[_].attributes.position.count}d.setIndex(v)}for(const g in c){const v=u_(c[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;d.setAttribute(g,v)}for(const g in u){const v=u[g][0].length;if(v===0)break;d.morphAttributes=d.morphAttributes||{},d.morphAttributes[g]=[];for(let _=0;_<v;++_){const x=[];for(let T=0;T<u[g].length;++T)x.push(u[g][T][_]);const M=u_(x);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;d.morphAttributes[g].push(M)}}return d}function u_(r){let t,n,a,o=-1,c=0;for(let p=0;p<r.length;++p){const g=r[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const u=new t(c),h=new ci(u,n,a);let d=0;for(let p=0;p<r.length;++p){const g=r[p];if(g.isInterleavedBufferAttribute){const v=d/n;for(let _=0,x=g.count;_<x;_++)for(let M=0;M<n;M++){const T=g.getComponent(_,M);h.setComponent(_+v,M,T)}}else u.set(g.array,d);d+=g.count*n}return o!==void 0&&(h.gpuType=o),h}const cu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class to{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const e2=new yp(-1,1,1,-1,0,1);class n2 extends rn{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}}const i2=new n2;class Mp{constructor(t){this._mesh=new se(i2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class a2 extends to{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof _n?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gl.clone(t.uniforms),this.material=new _n({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Mp(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class f_ extends to{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class s2 extends to{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class r2{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Ft);this._width=a.width,this._height=a.height,n=new Ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ma}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new a2(cu),this.copyPass.material.blending=pa,this.clock=new Q_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}f_!==void 0&&(u instanceof f_?a=!0:u instanceof s2&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class o2 extends to{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const l2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qr extends to{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Ft(t.x,t.y):new Ft(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Ci(c,u,{type:ma}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Ci(c,u,{type:ma});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new Ci(c,u,{type:ma});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),u=Math.round(u/2)}const h=l2;this.highPassUniforms=gl.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _n({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Ft(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gl.clone(cu.uniforms),this.blendMaterial=new _n({uniforms:this.copyUniforms,vertexShader:cu.vertexShader,fragmentShader:cu.fragmentShader,blending:Ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new Us,this._fsQuad=new Mp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Ft(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[d].uniforms.direction.value=qr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=qr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[];for(let a=0;a<t;a++)n.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new _n({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ft(.5,.5)},direction:{value:new Ft(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}}qr.BlurDirectionX=new Ft(1,0);qr.BlurDirectionY=new Ft(0,1);const tu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class c2 extends to{constructor(){super(),this.uniforms=gl.clone(tu.uniforms),this.material=new u1({name:tu.name,uniforms:this.uniforms,vertexShader:tu.vertexShader,fragmentShader:tu.fragmentShader}),this._fsQuad=new Mp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Re.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===y_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===S_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===M_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===T_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===b_?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===E_&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Bi=Math.PI*2;let ld=91623;const uu=()=>(ld=1664525*ld+1013904223>>>0,ld/4294967296),le=(r,t)=>r+uu()*(t-r),Ts=Ka.clamp,Wt=(r=0,t=0,n=0)=>new V(r,t,n);function u2(r,t){return Math.sin(r*.063+Math.sin(t*.047)*2.3)*1.6+Math.sin(t*.09+r*.023)*1.3+Math.sin(r*.18+t*.12)*.5}function Ur(r,t){return-15+u2(r,t)+Math.max(0,Math.abs(r+Math.sin(t*.025)*13)-22)*.085-Math.max(0,-t-110)*.026}const h_=`
float hash21(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float valueNoise(vec2 p){vec2 i=floor(p), f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float caustic(vec2 p,float t){p+=vec2(sin(p.y*.6+t*.37),cos(p.x*.7+t*.29))*.8;float a=sin(p.x*1.9+p.y*.6+t*.52)+sin(p.y*2.1-p.x*.3-t*.41);float b=sin(p.x*2.6-p.y*.8-t*.32)+sin(p.y*2.5+p.x*.6+t*.38);return pow(1.-abs(sin(a+b)),16.);}
`;class f2{scene=new GM;camera;renderer;uniforms={uTime:{value:0}};host;hooks;clock=new Q_;frame=0;alive=!0;playing=!1;started=!1;glide=!1;sound=!0;yaw=0;pitch=-.1;targetYaw=0;targetPitch=-.1;keys=new Set;velocity=Wt();move=Wt();forward=Wt();right=Wt();upAxis=Wt(0,1,0);position=Wt(0,3,35);touch={x:0,y:0,z:0};dragging=!1;lastPointer={x:0,y:0};listeners=[];creatures=[];fish;fishData=[];particles;kelpMaterials=[];colliders=[];dummy=new on;statusAt=0;time=0;pausedTime=0;audioContext=null;master=null;observer;reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(t,n,a={}){if(this.host=t,this.hooks=n,this.camera=new jn(67,t.clientWidth/t.clientHeight,.12,600),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0),this.renderer=new t2({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.outputColorSpace=oi,this.renderer.toneMapping=mu,this.renderer.toneMappingExposure=1.18,this.renderer.setClearColor(676709),t.appendChild(this.renderer.domElement),this.scene.background=new ce(742243),this.scene.fog=new vu(742243,.014),a.deferStart)return;const o=new K_(10019551,1783361,2.2);this.scene.add(o);const c=new Qd(14811116,3.2);c.position.set(-35,65,-10),this.scene.add(c);const u=new Qd(4770768,1.5);u.position.set(30,18,-60),this.scene.add(u),this.terrain(),this.rocks(),this.plants(),this.surface(),this.life(),this.suspendedParticles(),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.animate(),requestAnimationFrame(()=>n.onReady())}material(t,n="plain",a=.82,o=1){const c=new Ai({color:t,roughness:a,metalness:n==="skin"?.05:0}),u=Math.max(0,o);return c.onBeforeCompile=h=>{h.uniforms.uTime=this.uniforms.uTime,h.vertexShader=`varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOceanLocal=position;`),h.vertexShader=h.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 oceanPos=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          oceanPos=instanceMatrix*oceanPos;
        #endif
        vOceanWorld=(modelMatrix*oceanPos).xyz;`),h.fragmentShader=`uniform float uTime; varying vec3 vOceanWorld; varying vec3 vOceanLocal;
`+h_+h.fragmentShader;let d="";n==="sand"&&(d="float grain=valueNoise(vOceanWorld.xz*15.);float ripple=sin(vOceanWorld.x*.7+vOceanWorld.z*3.+valueNoise(vOceanWorld.xz*.11)*5.);diffuseColor.rgb*=.82+grain*.22+ripple*.07;"),n==="rock"&&(d="float n=valueNoise(vOceanWorld.xz*1.7+vOceanWorld.y*.8);float layer=sin(vOceanWorld.y*5.+valueNoise(vOceanWorld.xz)*3.);diffuseColor.rgb*=.67+n*.5+layer*.075;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.22,.16),smoothstep(.57,.84,n)*.6);"),n==="skin"&&(d="float blot=valueNoise(vOceanLocal.xz*5.+vOceanLocal.y*2.);float fine=valueNoise(vOceanLocal.xy*48.);float bands=sin(vOceanLocal.x*5.5+vOceanLocal.z*3.+blot*4.);diffuseColor.rgb*=.6+blot*.5+fine*.15;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.42,smoothstep(.5,.9,bands)*.45);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.54,.62,.49),(1.-smoothstep(-.75,.0,vOceanLocal.y))*.65);"),h.fragmentShader=h.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${d}`),h.fragmentShader=h.fragmentShader.replace("#include <opaque_fragment>",`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(.055*u).toFixed(4)};
#include <opaque_fragment>`)},c.customProgramCacheKey=()=>`${n}:${u.toFixed(2)}`,c}terrain(){const t=new Ns(700,700,180,180);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let o=0;o<n.count;o++)n.setY(o,Ur(n.getX(o),n.getZ(o)));t.computeVertexNormals();const a=new se(t,this.material(11511685,"sand"));this.scene.add(a)}rocks(){const t=[this.material(8094578,"rock"),this.material(7567721,"rock"),this.material(6454124,"rock")],n=[];for(let o=0;o<5;o++){const c=new Br(1,3),u=c.attributes.position;for(let h=0;h<u.count;h++){const d=u.getX(h),p=u.getY(h),g=u.getZ(h),v=1+.12*Math.sin(d*8+o)*Math.sin(g*7-p*4)+.055*Math.sin(p*19+d*8);u.setXYZ(h,d*v,p*v,g*v)}c.computeVertexNormals(),n.push(c)}const a=(o,c,u,h,d)=>{const p=new se(n[Math.floor(uu()*5)],t[Math.floor(uu()*3)]);p.position.set(o,Ur(o,c)+h*.15,c),p.scale.set(u,h,d),p.rotation.set(le(-.2,.2),le(0,Bi),le(-.12,.12)),this.scene.add(p),u>3&&this.colliders.push({pos:p.position.clone(),radius:Math.min(u,d)*.88,height:h*.95})};for(let o=0;o<95;o++){const c=le(-205,95),h=(o%2?1:-1)*le(24,65)+Math.sin(c*.025)*8,d=le(3,10);a(h,c,d,le(4,15),d*le(.7,1.5))}a(-23,-16,13,19,15),a(-35,-24,17,24,14),a(34,-50,15,22,17),a(43,-69,18,28,14);for(let o=0;o<210;o++){const c=le(-160,160),u=le(-230,140),h=le(.3,2.8);a(c,u,h,h*le(.4,1),h*le(.6,1.5))}a(-28,-103,8,20,7),a(-3,-103,6,18,7),a(-15,-103,17,4,6)}plantMaterial(t){const n=this.material(t,"plain",.9);n.side=Zn;const a=n.onBeforeCompile;return n.onBeforeCompile=(o,c)=>{a(o,c),o.vertexShader=`attribute float aBend;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("vOceanLocal=position;",`vOceanLocal=position; vec3 ip=vec3(0.);
      #ifdef USE_INSTANCING
      ip=instanceMatrix[3].xyz;
      #endif
      transformed.x+=sin(uTime*.6+ip.x*.3+position.y*.7)*aBend*.35;
      transformed.z+=sin(uTime*.43+ip.z*.4+position.y*.45)*aBend*.25;`),o.vertexShader=`uniform float uTime;
`+o.vertexShader},n.customProgramCacheKey=()=>`plant${t}`,n}plants(){const t=(u,h,d)=>{const p=[],g=[],v=[],_=[];for(let T=0;T<=12;T++){let S=T/12;const y=h*Math.pow(Math.sin(Math.PI*S*.95),.7)+.008;for(let L=-1;L<=1;L+=2)p.push(L*y+Math.sin(S*2)*d,u*S,Math.sin(S*3)*d*.45),g.push((L+1)/2,S),_.push(S*S*u*.3);if(T<12){let L=T*2;v.push(L,L+1,L+2,L+1,L+3,L+2)}}const M=new rn;return M.setAttribute("position",new be(p,3)),M.setAttribute("uv",new be(g,2)),M.setAttribute("aBend",new be(_,1)),M.setIndex(v),M.computeVertexNormals(),M};for(let u=0;u<3;u++){const h=t(u===2?9:2.5,u===2?.25:.09,.2),d=this.plantMaterial([4352834,6584125,5270332][u]),p=u===2?480:1900,g=new Lv(h,d,p);for(let v=0;v<p;v++){let _=le(-110,110),x=le(-220,100);const M=Math.abs(_+Math.sin(x*.035)*8);M<13&&(_+=Math.sign(_||1)*(15-M)),this.dummy.position.set(_,Ur(_,x)-.1,x),this.dummy.rotation.set(le(-.08,.08),le(0,Bi),0);const T=le(.5,1.7);this.dummy.scale.set(T,T,T),this.dummy.updateMatrix(),g.setMatrixAt(v,this.dummy.matrix)}this.scene.add(g)}const n=[],a=(u,h,d)=>{const p=h.clone().sub(u),g=new An(d*.48,d,p.length(),5,1);g.applyQuaternion(new Kr().setFromUnitVectors(Wt(0,1,0),p.normalize())),g.translate((u.x+h.x)/2,(u.y+h.y)/2,(u.z+h.z)/2),n.push(g)},o=(u,h,d,p)=>{const g=u.clone().add(Wt(Math.sin(h)*d,Math.cos(h)*d,le(-.13,.13)));a(u,g,p*.025+.014),p>0&&(o(g,h-.43,d*.7,p-1),o(g,h+.4,d*.74,p-1))};o(Wt(),0,1.05,4);const c=lu(n);if(n.forEach(u=>u.dispose()),c){const u=[this.material(10184030),this.material(9600599),this.material(6454643)];for(let h=0;h<90;h++){const d=new se(c,u[h%3]),p=le(-65,65),g=le(-170,60);d.position.set(p,Ur(p,g),g),d.rotation.y=le(0,Bi),d.scale.setScalar(le(.6,1.4)),this.scene.add(d)}}}surface(){const t=new _n({uniforms:{uTime:this.uniforms.uTime},side:Zn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 wp; uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.09+uTime*.25)*.3+sin(p.y*.11-uTime*.3)*.2;wp=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`varying vec3 wp;uniform float uTime;${h_}void main(){float c=caustic(wp.xz*.16,uTime*.7);float n=valueNoise(wp.xz*.025+uTime*.02);vec3 col=mix(vec3(.1,.48,.54),vec3(.55,.86,.81),n);col+=c*.24;float sun=exp(-length(wp.xz-vec2(-38.,-36.))*.014);col+=vec3(.35,.4,.3)*sun;gl_FragColor=vec4(col,.89);}`}),n=new se(new Ns(800,800,55,55),t);n.rotation.x=-Math.PI/2,n.position.y=26,this.scene.add(n);const a=new _n({uniforms:{uTime:this.uniforms.uTime},transparent:!0,depthWrite:!1,side:Zn,blending:Ir,vertexShader:"varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying vec3 wPos;uniform float uTime;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float vertical=sin(vUv.y*3.14159);float pulse=.78+sin(wPos.x*.14+uTime*.21)*.12;gl_FragColor=vec4(.38,.78,.67,edge*vertical*pulse*.038);}"});for(let o=0;o<30;o++){const c=le(34,54),u=new se(new An(le(.3,1.2),le(2,5),c,16,1,!0),a);u.position.set(le(-85,95),26-c*.48,le(-130,55)),u.rotation.z=-.26,u.rotation.x=.13,this.scene.add(u)}}ellipsoid(t,n,a,o,c,u,h,d){const p=new Wr(1,32,20);p.scale(u,h,d),p.translate(a,o,c);const g=new se(p,n);return t.add(g),g}tube(t,n,a,o=56,c=12){const u=new vp(t),h=u.computeFrenetFrames(o,!1),d=[],p=[],g=[];for(let _=0;_<=o;_++){const x=_/o,M=u.getPoint(x),T=x*(n.length-1),S=Math.min(Math.floor(T),n.length-2),y=Ka.lerp(n[S],n[S+1],T-S);for(let L=0;L<=c;L++){const U=L/c*Bi,w=M.clone().addScaledVector(h.normals[_],Math.cos(U)*y).addScaledVector(h.binormals[_],Math.sin(U)*y);if(d.push(w.x,w.y,w.z),p.push(L/c,x),_<o&&L<c){const N=_*(c+1)+L,P=N+c+1;g.push(N,N+1,P,P,N+1,P+1)}}}const v=new rn;return v.setAttribute("position",new be(d,3)),v.setAttribute("uv",new be(p,2)),v.setIndex(g),v.computeVertexNormals(),new se(v,a)}flipper(t,n,a){const o=[],c=[],u=[];for(let g=0;g<=20;g++){const v=g/20,_=Math.max(.015,Math.pow(Math.sin(Math.PI*v),.7)*a);for(let x=0;x<=12;x++){const M=x/12*Bi;if(o.push(-v*v*n*.32+_*Math.cos(M),Math.sin(M)*_*.18,v*n),c.push(x/12,v),g<20&&x<12){const T=g*13+x;u.push(T,T+1,T+12+1,T+1,T+12+2,T+12+1)}}}const p=new rn;return p.setAttribute("position",new be(o,3)),p.setAttribute("uv",new be(c,2)),p.setIndex(u),p.computeVertexNormals(),new se(p,t)}plesiosaur(t=1){const n=new vn,a=this.material(5532e3,"skin",.51),o=[];this.ellipsoid(n,a,0,0,0,2.6,.92,1.24),n.add(this.tube([Wt(1.3,.2),Wt(2.8,.38),Wt(4.3,1.06),Wt(5.8,1.7),Wt(7.1,1.86)],[.76,.46,.32,.25,.22],a)),this.ellipsoid(n,a,7.38,1.88,0,.65,.3,.31),this.ellipsoid(n,a,7.79,1.79,0,.42,.15,.22);const c=new Ai({color:397841,roughness:.12,metalness:.3});for(const h of[-1,1]){this.ellipsoid(n,this.material(9144688),7.37,2.01,h*.262,.11,.095,.039),this.ellipsoid(n,c,7.4,2.014,h*.294,.065,.06,.024);const d=this.tube([Wt(7.34,1.73,h*.265),Wt(7.78,1.72,h*.205),Wt(8.02,1.75,h*.105)],[.012,.012,.006],c,12,4);n.add(d);for(let p=0;p<2;p++){const g=new vn;g.position.set(p===0?1.2:-1.65,-.34,h*.85);const v=this.flipper(a,p===0?3.3:2.8,.68);h<0&&(v.rotation.x=Math.PI),g.add(v),g.userData.side=h,g.userData.phase=p*.8,n.add(g),o.push(g)}}const u=new vn;return u.position.x=-1.9,u.add(this.tube([Wt(),Wt(-1.7,-.1),Wt(-3.4,-.06),Wt(-4.2,.03)],[.7,.36,.12,.012],a,36)),n.add(u),n.scale.setScalar(t),{group:n,fins:o,tail:u,kind:"plesiosaur",scale:t}}ichthyosaur(t=1){const n=new vn,a=this.material(4810096,"skin",.42),o=[];this.ellipsoid(n,a,0,0,0,2.6,.77,.73),n.add(this.tube([Wt(1.5,0),Wt(2.5,-.03),Wt(3.65,-.14)],[.57,.31,.045],a,35));const c=new Ai({color:397843,roughness:.15});for(const d of[-1,1]){this.ellipsoid(n,c,1.75,.27,d*.45,.12,.13,.06);const p=new vn;p.position.set(.9,-.25,d*.58);const g=this.flipper(a,1.7,.4);d<0&&(g.rotation.x=Math.PI),p.add(g),p.userData.side=d,p.userData.phase=0,n.add(p),o.push(p)}const u=this.flipper(a,1.3,.6);u.rotation.x=-Math.PI/2,u.position.set(-.35,.55,0),n.add(u);const h=new vn;h.position.x=-1.9,h.add(this.tube([Wt(),Wt(-1.3,0),Wt(-2.15,0)],[.5,.23,.06],a,24));for(const d of[-1,1]){const p=this.flipper(a,1.35,.42);p.position.x=-2,p.rotation.x=d*Math.PI/2,h.add(p)}return n.add(h),n.scale.setScalar(t),{group:n,fins:o,tail:h,kind:"ichthyosaur",scale:t}}spinosaurus(t=1){const n=new vn,a=this.material(6777171,"skin",.7),o=[];this.ellipsoid(n,a,0,0,0,2.4,1.1,.87),n.add(this.tube([Wt(1.5,.3),Wt(2.6,.75),Wt(3.4,.8)],[.66,.43,.36],a,32)),this.ellipsoid(n,a,3.8,.75,0,.94,.39,.37),this.ellipsoid(n,a,4.55,.62,0,.85,.22,.23);const c=[],u=[],h=[];for(let _=0;_<=28;_++){const x=_/28,M=-2.25+x*4.3,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);if(c.push(M,.4,0,M,T,0),h.push(x,0,x,1),_<28){const S=_*2;u.push(S,S+1,S+2,S+1,S+3,S+2)}}const d=new rn;d.setAttribute("position",new be(c,3)),d.setAttribute("uv",new be(h,2)),d.setIndex(u),d.computeVertexNormals();const p=this.material(6705990,"skin");p.side=Zn,n.add(new se(d,p));for(let _=0;_<15;_++){const x=_/14,M=-2.2+x*4.2,T=.7+Math.sin(Math.PI*x)*2.35+.22*Math.sin(x*13);n.add(this.tube([Wt(M,.6,.02),Wt(M-.1,T*.6,.02),Wt(M,T,.02)],[.045,.031,.012],a,8,5))}const g=new Ai({color:1382674,roughness:.3});for(const _ of[-1,1]){this.ellipsoid(n,g,3.51,.98,_*.326,.07,.07,.034);const x=new vn;x.position.set(-1.25,-.5,_*.58),x.add(this.tube([Wt(),Wt(-.2,-.85,_*.5),Wt(.15,-1.2,_*.6),Wt(-.45,-1.35,_*.76)],[.45,.29,.15,.03],a,24)),n.add(x),x.userData.side=_,x.userData.phase=1,o.push(x);const M=new vn;M.position.set(1.3,-.45,_*.55),M.add(this.tube([Wt(),Wt(.13,-.56,_*.4),Wt(.8,-.66,_*.5)],[.21,.12,.04],a,20)),n.add(M),M.userData.side=_,M.userData.phase=0,o.push(M)}const v=new vn;return v.position.x=-1.8,v.add(this.tube([Wt(),Wt(-1.7,0),Wt(-3.5,.08),Wt(-5.5,0)],[.7,.48,.27,.012],a,48)),n.add(v),n.scale.setScalar(t),{group:n,fins:o,tail:v,kind:"spinosaur",scale:t}}ammonite(){const t=new vn,n=this.material(12101252,"plain",.65),a=[],o=[],c=100;for(let v=0;v<=c;v++){const _=v/c,x=_*Bi*2.3,M=.06+Math.pow(_,1.65)*.85;a.push(Wt(Math.cos(x)*M,Math.sin(x)*M,0)),o.push(.015+Math.pow(_,1.6)*.24)}t.add(this.tube(a,o,n,150,12));const u=a[a.length-1],h=this.material(9600610);for(let v=0;v<7;v++){const _=v/7*Bi;t.add(this.tube([u.clone(),u.clone().add(Wt(.45,Math.sin(_)*.16,Math.cos(_)*.16)),u.clone().add(Wt(.9,Math.sin(_)*.35,Math.cos(_)*.3)),u.clone().add(Wt(1.02,Math.sin(_)*.24,Math.cos(_)*.3))],[.037,.033,.021,.001],h,16,5))}const d=this.material(7826774);for(let v=30;v<c;v+=3){const _=a[v],x=o[v]*1.025,M=new se(new _u(x,.008,4,12),d);M.position.copy(_);const T=a[Math.min(v+1,c)].clone().sub(a[Math.max(0,v-1)]).normalize();M.quaternion.setFromUnitVectors(Wt(0,0,1),T),t.add(M)}const p=new vn,g=new Map;for(const v of t.children){const _=v;_.updateMatrix();const x=_.geometry.clone().applyMatrix4(_.matrix),M=_.material;g.has(M)||g.set(M,[]),g.get(M).push(x)}for(const[v,_]of g){const x=lu(_);x&&p.add(new se(x,v)),_.forEach(M=>M.dispose())}return t.children.forEach(v=>v.geometry.dispose()),p}life(){const t=(h,d,p,g,v)=>{const _={...h,center:d,radius:p,speed:g,phase:v};this.creatures.push(_),this.scene.add(_.group)};t(this.plesiosaur(1.15),Wt(28,7,-8),28,.017,Math.PI*.72),t(this.plesiosaur(.78),Wt(-48,12,-108),38,.014,1.8),t(this.ichthyosaur(.9),Wt(30,2,-58),38,.06,.8),t(this.ichthyosaur(.67),Wt(26,5,-62),38,.06,.96),t(this.spinosaurus(1.2),Wt(-22,21,-45),48,.012,-.5),t(this.plesiosaur(1.35),Wt(55,-2,-180),40,.015,2.5),t(this.ichthyosaur(1.1),Wt(-80,4,28),48,.048,.5);const n=this.ammonite();for(let h=0;h<13;h++){const d=h===0?n:n.clone(),p=le(-42,42),g=le(-110,22);d.position.set(p,Ur(p,g)+le(3,8),g),d.rotation.set(le(-.2,.2),le(0,Bi),le(-.1,.1)),d.scale.setScalar(le(.55,1.1)),d.userData.origin=d.position.clone(),d.userData.phase=uu()*Bi,d.userData.ammonite=!0,this.scene.add(d)}const a=new Wr(1,10,6);a.scale(.5,.16,.09);const o=new pp(.23,.35,3);o.rotateZ(Math.PI/2),o.scale(1,1,.25),o.translate(-.53,0,0);const c=lu([a,o]);this.fish=new Lv(c,this.material(10268315,"plain",.45),350),this.scene.add(this.fish);const u=[Wt(-14,5,-31),Wt(38,11,-35),Wt(0,16,-90),Wt(-48,1,-120),Wt(30,-3,25)];for(let h=0;h<350;h++)this.fishData.push({center:u[h%5].clone().add(Wt(le(-6,6),le(-3,3),le(-6,6))),phase:le(0,Bi),radius:le(3,8),speed:le(.11,.2),size:le(.35,1.05)})}suspendedParticles(){const n=new Float32Array(5400);for(let c=0;c<1800;c++)n[c*3]=le(-110,110),n[c*3+1]=le(-16,26),n[c*3+2]=le(-110,110);const a=new rn;a.setAttribute("position",new ci(n,3));const o=new _n({uniforms:{uTime:this.uniforms.uTime,uPixelRatio:{value:this.renderer.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Ir,vertexShader:"uniform float uTime;uniform float uPixelRatio;varying float a;void main(){vec3 p=position;p.x+=sin(uTime*.14+position.z)*.22;p.y+=sin(uTime*.18+position.x)*.25;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));}"});this.particles=new jM(a,o),this.scene.add(this.particles)}bind(){const t=(a,o,c)=>{a.addEventListener(o,c),this.listeners.push(()=>a.removeEventListener(o,c))};t(window,"keydown",(a=>{this.playing&&(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","ControlLeft"].includes(a.code)&&(a.preventDefault(),this.keys.add(a.code)),a.code==="Escape"&&this.pause(),a.code==="KeyH"&&!a.repeat&&this.hooks.onToggleUI(),a.code==="KeyG"&&!a.repeat&&(this.setGlide(!this.glide),this.hooks.onGlide(this.glide)))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>{this.keys.clear(),this.playing&&this.pause()})),t(document,"visibilitychange",(()=>{document.hidden&&this.playing&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing&&(this.dragging=!0,this.lastPointer={x:a.clientX,y:a.clientY},n.setPointerCapture(a.pointerId),a.pointerType==="mouse"&&document.pointerLockElement!==n))try{const o=n.requestPointerLock?.();o&&typeof o.catch=="function"&&o.catch(()=>{})}catch{}})),t(n,"pointerup",(()=>{this.dragging=!1})),t(n,"pointercancel",(()=>{this.dragging=!1})),t(document,"pointermove",(a=>{if(!this.playing)return;const o=document.pointerLockElement===n;if(!o&&!this.dragging)return;const c=o?a.movementX:a.clientX-this.lastPointer.x,u=o?a.movementY:a.clientY-this.lastPointer.y;this.targetYaw-=c*.0021,this.targetPitch=Ts(this.targetPitch-u*.0021,-1.47,1.47),this.lastPointer={x:a.clientX,y:a.clientY}})),t(document,"pointerlockchange",(()=>{!document.pointerLockElement&&this.playing&&!this.dragging&&this.pause()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.pause(),this.hooks.onError("The graphics connection was interrupted. Refresh to return to the ocean.")}))}start(){if(this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.initAudio(),this.sound&&this.audioContext?.resume().catch(()=>{}),window.matchMedia("(pointer:fine)").matches)try{const t=this.renderer.domElement.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}pause(){this.playing&&(this.playing=!1,this.glide=!1,this.keys.clear(),this.touch={x:0,y:0,z:0},this.velocity.set(0,0,0),this.dragging=!1,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.hooks.onPause())}reset(){this.position.set(0,3,35),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=-.1,this.velocity.set(0,0,0),this.glide=!1,this.time=0}setGlide(t){this.glide=t}touchMove(t,n){this.touch.x=Ts(t,-1,1),this.touch.y=Ts(n,-1,1)}touchVertical(t){this.touch.z=t}setSound(t){this.sound=t,this.master&&this.audioContext&&this.master.gain.setTargetAtTime(t?.35:0,this.audioContext.currentTime,.3),t&&this.playing&&this.audioContext?.resume().catch(()=>{})}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.35:0,this.master.connect(n.destination);const a=n.createBuffer(2,n.sampleRate*8,n.sampleRate);for(let v=0;v<2;v++){let _=0;const x=a.getChannelData(v);for(let M=0;M<x.length;M++)_=(_+(Math.random()*2-1)*.03)/1.018,x[M]=_*4}const o=n.createBufferSource();o.buffer=a,o.loop=!0;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=480,c.Q.value=.45;const u=n.createGain();u.gain.value=.42,o.connect(c),c.connect(u),u.connect(this.master),o.start();const h=n.createOscillator(),d=n.createGain();h.frequency.value=.07,d.gain.value=160,h.connect(d),d.connect(c.frequency),h.start();const p=n.createOscillator(),g=n.createGain();p.type="sine",p.frequency.value=47,g.gain.value=.055,p.connect(g),g.connect(this.master),p.start()}catch{}}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);(this.playing||!this.started)&&(this.time+=t);const n=this.time;if(this.uniforms.uTime.value=n,this.playing){const u=(...v)=>v.some(_=>this.keys.has(_))?1:0;this.yaw=Ka.lerp(this.yaw,this.targetYaw,1-Math.exp(-14*t)),this.pitch=Ka.lerp(this.pitch,this.targetPitch,1-Math.exp(-14*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize();const h=u("KeyW","ArrowUp")-u("KeyS","ArrowDown")+(this.glide?.52:0)+this.touch.y,d=u("KeyD","ArrowRight")-u("KeyA","ArrowLeft")+this.touch.x,p=u("KeyE","Space")-u("KeyQ","ControlLeft")+this.touch.z;this.move.copy(this.forward).multiplyScalar(h).addScaledVector(this.right,d),this.move.y+=p,this.move.lengthSq()>1&&this.move.normalize();const g=u("ShiftLeft","ShiftRight")?8.2:3.8;this.move.multiplyScalar(g),this.velocity.lerp(this.move,1-Math.exp(-2.1*t)),this.position.addScaledVector(this.velocity,t),this.position.x=Ts(this.position.x,-245,245),this.position.z=Ts(this.position.z,-265,245),this.position.y=Ts(this.position.y,Ur(this.position.x,this.position.z)+1.8,24.2);for(const v of this.colliders){if(Math.abs(this.position.y-v.pos.y)>v.height+1)continue;const _=this.position.x-v.pos.x,x=this.position.z-v.pos.z,M=Math.sqrt(_*_+x*x);if(M<v.radius+.85&&M>.001){const T=v.radius+.85-M;this.position.x+=_/M*T,this.position.z+=x/M*T}}this.camera.position.copy(this.position),this.reduced||(this.camera.position.y+=Math.sin(n*.9)*.026)}else!this.started&&!this.reduced&&this.camera.rotation.set(-.09+Math.sin(n*.1)*.018,Math.sin(n*.08)*.025,0);for(const u of this.creatures){const h=n*u.speed+u.phase,d=u.center.x+Math.cos(h)*u.radius,p=u.center.z+Math.sin(h)*u.radius*.58;u.group.position.set(d,u.center.y+Math.sin(n*.3+u.phase)*.35,p),u.group.rotation.y=Math.atan2(-Math.cos(h)*.58,-Math.sin(h)),u.group.rotation.z=Math.sin(n*.3+u.phase)*.025,u.fins.forEach(g=>{g.rotation.x=Math.sin(n*1.25+(g.userData.phase||0)+u.phase)*.22*(g.userData.side||1),g.rotation.z=Math.sin(n*1.25+(g.userData.phase||0)+u.phase+.7)*.07}),u.tail.rotation.y=Math.sin(n*(u.kind==="ichthyosaur"?3:1.3)+u.phase)*(u.kind==="ichthyosaur"?.22:.11)}for(let u=0;u<this.fishData.length;u++){const h=this.fishData[u],d=n*h.speed+h.phase;this.dummy.position.set(h.center.x+Math.cos(d)*h.radius,h.center.y+Math.sin(d*2)*.7,h.center.z+Math.sin(d)*h.radius*.5),this.dummy.rotation.set(0,Math.atan2(-Math.cos(d)*.5,-Math.sin(d)),Math.cos(d*2)*.035),this.dummy.scale.set(h.size,h.size,h.size),this.dummy.updateMatrix(),this.fish.setMatrixAt(u,this.dummy.matrix)}this.fish.instanceMatrix.needsUpdate=!0;for(const u of this.scene.children)u.userData.ammonite&&(u.position.y=u.userData.origin.y+Math.sin(n*.28+u.userData.phase)*.35,u.rotation.z=Math.sin(n*.23+u.userData.phase)*.09);this.particles.position.set(Math.floor(this.position.x/80)*80,0,Math.floor(this.position.z/80)*80);const a=this.scene.fog,o=Ts((-this.position.z-75)/160,0,1);a.density=.013+o*.006;const c=new ce(742243).lerp(new ce(404547),o*.75);a.color.copy(c),this.scene.background.copy(c),n-this.statusAt>.25&&(this.statusAt=n,this.hooks.onStatus(26-this.position.y,this.position.z<-130?"The blue beyond":this.position.z<-65?"The ancient reef":Math.abs(this.position.x)>40?"The underwater forest":"The sunlit shallows")),this.renderer.render(this.scene,this.camera)};dispose(){this.alive=!1,cancelAnimationFrame(this.frame),this.listeners.forEach(a=>a()),this.observer?.disconnect(),this.audioContext?.close().catch(()=>{});const t=new Set,n=new Set;this.scene.traverse(a=>{const o=a;o.geometry&&t.add(o.geometry),o.material&&(Array.isArray(o.material)?o.material:[o.material]).forEach(u=>n.add(u))}),t.forEach(a=>a.dispose()),n.forEach(a=>a.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}}function h2(r,t){const n=r.createAnalyser();return n.fftSize=2048,t.connect(n).connect(r.destination),n}function d2(r,t){for(const[n,a]of[[0,660],[.2,880]]){const o=r.createOscillator(),c=r.createGain(),u=r.currentTime+n;o.frequency.value=a,c.gain.setValueAtTime(0,u),c.gain.linearRampToValueAtTime(.18,u+.015),c.gain.exponentialRampToValueAtTime(.001,u+.18),o.connect(c).connect(t),o.start(u),o.stop(u+.2),o.onended=()=>{o.disconnect(),c.disconnect()}}}function p2(r,t){const n=r.currentTime,a=.028,o=r.createBuffer(1,Math.max(1,Math.round(r.sampleRate*a)),r.sampleRate),c=o.getChannelData(0);for(let v=0;v<c.length;v++)c[v]=Math.random()*2-1;const u=r.createBufferSource();u.buffer=o;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=2800,h.Q.value=1.1;const d=r.createGain();d.gain.setValueAtTime(.72,n),d.gain.exponentialRampToValueAtTime(.001,n+a),u.connect(h).connect(d).connect(t),u.start(n),u.stop(n+a),u.onended=()=>{u.disconnect(),h.disconnect(),d.disconnect()};const p=r.createOscillator(),g=r.createGain();p.type="square",p.frequency.value=1650,g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(.28,n+.001),g.gain.exponentialRampToValueAtTime(.001,n+.018),p.connect(g).connect(t),p.start(n),p.stop(n+.022),p.onended=()=>{p.disconnect(),g.disconnect()}}const m2=""+new URL("underwater-ambience-CTuF1-BE.mp3",import.meta.url).href;class g2{constructor(t,n){this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0,this.gain.connect(n)}buffer=null;loading=null;source=null;gain;generation=0;disposed=!1;abort=new AbortController;async start(){if(this.disposed||this.source)return;const t=this.generation;if(this.buffer||(this.loading??=fetch(m2,{signal:this.abort.signal}).then(a=>{if(!a.ok)throw new Error(`Music download failed: ${a.status}`);return a.arrayBuffer()}).then(a=>this.ctx.decodeAudioData(a)).catch(a=>{throw this.loading=null,a}),this.buffer=await this.loading),this.disposed||t!==this.generation||this.source||this.ctx.state==="closed")return;const n=this.ctx.createBufferSource();n.buffer=this.buffer,n.loop=!0,n.connect(this.gain),this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.65,this.ctx.currentTime+1.5),n.start(),this.source=n}reset(){this.generation++,this.source?.stop(),this.source?.disconnect(),this.source=null}dispose(){this.disposed=!0,this.abort.abort(),this.reset(),this.gain.disconnect()}}const ki=4,v2={x:0,y:3,z:-12},$d={x:0,y:2,z:-112},ul={x:32,y:3,z:-12},ix={stone:{name:"Limestone",short:"Stone",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},wood:{name:"Driftwood",short:"Wood",description:"Salvage only — cannot use. Safe to swap for the relic.",hint:"Salvage · G drop · swap for relic"},flare:{name:"Signal flare",short:"Flare",description:"R · Deploy a 12-second distraction at your position.",hint:"R use · consumed"},air:{name:"Air reserve",short:"Air",description:"R · Restore up to 60 seconds of air (consumed).",hint:"R use · consumed"},bandage:{name:"Sealant kit",short:"Sealant",description:"R · Repair 45 suit integrity (consumed).",hint:"R use · consumed"},relic:{name:"Ammonite relic",short:"Relic",description:"Cannot use here — carry to the extraction pool.",hint:"Carry to extract · do not drop"}},Yr=new Set,$a=(r,t,n,a)=>{for(let o=r;o<=t;o++)for(let c=n;c<=a;c++)Yr.add(`${o},${c}`)};$a(8,14,1,5);$a(10,12,5,11);$a(4,18,11,24);$a(10,12,24,26);$a(8,14,26,30);for(let r=9;r<=12;r++)for(let t=15;t<=20;t++)Yr.delete(`${r},${t}`);$a(19,19,4,20);$a(18,19,20,21);$a(17,21,1,4);const ja=(r,t)=>({x:(r-11)*ki,y:3,z:-t*ki}),Pr=r=>({col:Math.round(r.x/ki)+11,row:Math.round(-r.z/ki)}),ri=(r,t)=>Math.hypot(r.x-t.x,r.y-t.y,r.z-t.z);function tp(r,t){return Yr.has(`${Math.round(r/ki)+11},${Math.round(-t/ki)}`)}function _2(r,t=.48){if(r.y<.65||r.y>7.1)return!1;for(let n=0;n<8;n++)if(!tp(r.x+Math.cos(n*Math.PI/4)*t,r.z+Math.sin(n*Math.PI/4)*t))return!1;return tp(r.x,r.z)}function ax(r,t,n,a,o=.48){const c=Math.max(1,Math.ceil(Math.hypot(t,n,a)/.25));for(let u=0;u<c;u++)for(const[h,d]of[["x",t],["y",n],["z",a]]){const p={...r,[h]:r[h]+d/c};_2(p,o)&&(r[h]=p[h])}}function eu(r,t){const n=Math.ceil(ri(r,t)/.4);for(let a=0;a<=n;a++){const o=n?a/n:0;if(!tp(r.x+(t.x-r.x)*o,r.z+(t.z-r.z)*o))return!1}return!0}function pu(r,t){return r>=4&&r<=18&&t>=12&&t<=28&&Yr.has(`${r},${t}`)}function x2(r,t){const n=Pr(r),a=Pr(t),o=`${n.col},${n.row}`,c=`${a.col},${a.row}`;if(!pu(a.col,a.row))return[];const u=[o],h=new Map([[o,null]]);for(let g=0;g<u.length;g++){const v=u[g];if(v===c)break;const[_,x]=v.split(",").map(Number);for(const[M,T]of[[1,0],[-1,0],[0,1],[0,-1]]){const S=`${_+M},${x+T}`;pu(_+M,x+T)&&!h.has(S)&&(h.set(S,v),u.push(S))}}if(!h.has(c))return[];const d=[];let p=c;for(;p&&p!==o;){const[g,v]=p.split(",").map(Number);d.unshift(ja(g,v)),p=h.get(p)}return d}const d_=.003,nu=(r,t,n,a)=>({yaw:r-n*d_,pitch:Math.max(-1.4,Math.min(1.4,t-a*d_))}),y2=1.45;function p_(r,t){const n=Math.max(0,Math.min(1,(r-.65)/6.449999999999999)),a=Math.max(-1,Math.min(1,-t/1.4)),o=1-n,c=Math.max(0,-a),u=Math.max(0,a),h=(48+n*62)*(1+a*.18),d=(15+n*19)*(1+a*.12-c*.08),p=1.05+o*.5+c*.18-u*.06,g=(.006+n*.022)*(1+a*.28),v=.35+n*.55+a*.12,_=.55+n*.3-c*.12+u*.05,x=.62+n*.28-c*.05,M=.48+n*.42-c*.18+u*.12;return{intensity:h,distance:d,decay:p,beamOpacity:Math.max(.004,g),particle:Math.max(0,Math.min(1,v)),r:_,g:x,b:M}}function m_(r,t,n){if(n<=0)return 0;const o=(Math.max(0,Math.min(1,(r-t)/n))-.5)*2,c=.2,u=Math.abs(o);if(u<=c)return 0;const h=(u-c)/(1-c);return Math.sign(o)*h*h}const sx="painted-abyss.inventoryTipsSeen";function g_(){try{return globalThis.localStorage?.getItem(sx)==="1"}catch{return!1}}function S2(){try{globalThis.localStorage?.setItem(sx,"1")}catch{}}class v_{position={...v2};health=100;air=240;elapsed=0;stamina=100;torch=!0;inventory=["stone","wood","flare","air","bandage"];selected=0;pickups=[{id:1,item:"relic",position:{...$d}},{id:2,item:"flare",position:{x:-20,y:2,z:-56}}];nextId=3;pending=null;outcome="playing";reason="";tipsSeen=!1;notice="";noticeUntil=0;feedbackKind="";feedbackPulse=0;predator={position:ja(16,19),state:"patrol",timer:0,lost:0,lastKnown:ja(16,19),waypoint:0,bite:0,heading:0};decoy=null;patrol=[ja(16,22),ja(6,22),ja(6,13),ja(16,13)];constructor(t=!1){this.tipsSeen=t,t||(this.notice="1–5 select a slot · R uses it · usable items are consumed.",this.noticeUntil=8,this.feedbackKind="select")}get hasRelic(){return this.inventory.includes("relic")}say(t,n=""){this.notice=t,this.noticeUntil=this.elapsed+4.5,this.feedbackKind=n,this.feedbackPulse++}pulse(t=""){this.feedbackKind=t,this.feedbackPulse++}select(t){return this.outcome!=="playing"||t<0||t>4||this.selected===t?!1:(this.selected=t,this.pulse(this.inventory[t]?"select":"blocked"),!0)}nearest(){return this.pickups.filter(t=>ri(t.position,this.position)<3.2&&eu(this.position,t.position)).sort((t,n)=>ri(t.position,this.position)-ri(n.position,this.position))[0]}interact(){if(this.outcome!=="playing")return;if(ri(this.position,ul)<4){this.hasRelic?(this.outcome="won",this.reason="Relic secured. You made it back to the light."):this.say("Extraction needs the ammonite relic. Follow the turquoise markers.","blocked");return}const t=this.pending===null?this.nearest():this.pickups.find(o=>o.id===this.pending);if(!t||ri(t.position,this.position)>3.2||!eu(this.position,t.position)){this.pending=null;return}let n=this.inventory.indexOf(null);if(n<0&&this.pending===null){this.pending=t.id,this.say("All five slots are full. Choose 1–5, then E to swap.","blocked");return}n<0&&(n=this.selected);const a=this.inventory[n];this.inventory[n]=t.item,this.selected=n,this.pickups=this.pickups.filter(o=>o.id!==t.id),a&&this.pickups.push({id:this.nextId++,item:a,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.pending=null,this.say(t.item==="relic"?"Relic recovered! Follow the amber markers to extraction.":`${ix[t.item].name} collected.`,"ok"),t.item==="relic"&&(this.predator.state="alert",this.predator.timer=0,this.predator.lastKnown={...this.position})}drop(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}this.pickups.push({id:this.nextId++,item:t,position:{...this.position,y:Math.max(1,this.position.y-.4)}}),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok")}use(){const t=this.inventory[this.selected];if(!t){this.pulse("blocked");return}if(t==="air"){if(this.air>=240){this.pulse("blocked");return}this.air=Math.min(240,this.air+60),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="bandage"){if(this.health>=100){this.pulse("blocked");return}this.health=Math.min(100,this.health+45),this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}if(t==="flare"){this.decoy={position:{...this.position},until:this.elapsed+12},this.predator.state="search",this.predator.timer=0,this.predator.lastKnown={...this.position},this.inventory[this.selected]=null,this.pending=null,this.pulse("ok");return}this.pulse("blocked")}update(t,n=!1){if(this.outcome!=="playing")return;if(t=Math.min(t,.05),this.elapsed+=t,this.air=Math.max(0,this.air-t),this.stamina=Math.max(0,Math.min(100,this.stamina+(n?-18:17)*t)),this.air<=0){this.outcome="lost",this.reason="Your air ran out. Use the reserve earlier or take a shorter route.";return}this.pending!==null&&!this.pickups.some(T=>T.id===this.pending&&ri(T.position,this.position)<3.2)&&(this.pending=null);const a=this.predator,o=ri(a.position,this.position),c=eu(a.position,this.position),u=c&&(o<4.5||o<(this.torch?16:n?13:8)),h=!pu(Pr(this.position).col,Pr(this.position).row);a.timer+=t,a.bite=Math.max(0,a.bite-t),this.decoy&&this.elapsed>=this.decoy.until&&(this.decoy=null),this.decoy&&o>4.5?(a.state="search",a.timer=0,a.lastKnown={...this.decoy.position}):a.state==="patrol"&&u&&!h?(a.state="alert",a.timer=0,a.lastKnown={...this.position}):a.state==="alert"?(u&&!h&&(a.lastKnown={...this.position}),a.timer>1.6&&(a.state=u&&!h?"chase":"search",a.timer=0,a.lost=0)):a.state==="chase"?(u&&!h?(a.lastKnown={...this.position},a.lost=0):a.lost+=t,a.lost>2.5&&(a.state="search",a.timer=0)):a.state==="search"&&(u&&!h?(a.state="chase",a.timer=0,a.lost=0):a.timer>7&&(a.state="patrol",a.timer=0));const d=a.state==="patrol"?this.patrol[a.waypoint]:a.lastKnown;a.state==="patrol"&&ri(a.position,d)<1.1&&(a.waypoint=(a.waypoint+1)%this.patrol.length);const g=x2(a.position,d)[0]||(eu(a.position,d)&&pu(Pr(d).col,Pr(d).row)?d:a.position),v=g.x-a.position.x,_=g.z-a.position.z,x=Math.hypot(v,_),M=a.state==="chase"?3.4:a.state==="alert"?.7:1.8;x>.05&&(a.heading=Math.atan2(-_,v),ax(a.position,v/x*Math.min(x,M*t),0,_/x*Math.min(x,M*t),1.3)),a.position.y+=((a.state==="chase"?Math.max(1.2,Math.min(6.2,this.position.y)):3)-a.position.y)*Math.min(1,t*2),a.state==="chase"&&!h&&c&&ri(a.position,this.position)<3.2&&a.bite<=0&&(this.health=Math.max(0,this.health-25),a.bite=1.7,this.say("Suit breached! Sprint to cover or deploy a flare."),this.health<=0&&(this.outcome="lost",this.reason="The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe."))}}const ha=(r=0,t=0,n=0)=>new V(r,t,n),M2="varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",E2=`varying vec2 vUv;varying vec3 wPos;uniform float uTime;uniform vec3 uColor;uniform float uOpacity;
void main(){
  float edge=pow(max(0.,sin(vUv.x*3.14159)),2.4);
  float vertical=pow(sin(vUv.y*3.14159),.55);
  float pulse=.82+sin(wPos.x*.11+wPos.z*.09+uTime*.19)*.14;
  float core=pow(max(0.,1.-abs(vUv.x-.5)*2.4),3.2)*.55;
  float a=(edge*vertical*pulse+core*vertical)*uOpacity;
  gl_FragColor=vec4(uColor,a);
}`;class T2 extends f2{audioNotice="";audioProbe=null;audioTestTimer=0;backgroundMusic=null;mission=new v_(g_());ui;error="";pointerLocked=!1;everLocked=!1;lastSent=0;fallbackTurn=0;lockDenied=!1;lookPointer=null;torchLight=new Zc(15398655,210,34,.38,.55,1.05);beam;torchBody;torchLensMat;composer;bloom;guardian;pickupMeshes=new Map;decoyMesh;constructor(t,n){super(t,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:!0}),this.ui=n,this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.pitch=this.targetPitch=0,this.scene.background=new ce(268834),this.scene.fog=new vu(667192,.038),this.camera.far=130,this.camera.fov=64,this.camera.updateProjectionMatrix(),this.renderer.toneMappingExposure=1.12,this.renderer.toneMapping=mu,this.scene.add(new K_(5938862,530464,.42)),this.scene.add(new g1(1194048,.22));const a=new Qd(8308948,.55);a.position.set(-8,30,-20),this.scene.add(a),this.buildCave(),this.buildLights(),this.buildComposer(),this.guardian=this.ichthyosaur(.9),this.scene.add(this.guardian.group);const o=new Us({color:14722930});for(const h of[-1,1])this.ellipsoid(this.guardian.group,o,1.8,.27,h*.5,.1,.1,.04);this.suspendedParticles();const c=this.particles.geometry.attributes.position;for(let h=0;h<c.count;h++)c.setXYZ(h,Math.sin(h*78.23)*37,1+h%71/10,-(h*13.23)%122);this.particles.geometry.computeBoundingSphere();const u=this.particles.material;u.uniforms.uTorch={value:1},u.vertexShader=`uniform float uTorch;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;","float cone=1.-smoothstep(.22,.52,length(mv.xy)/max(.08,-mv.z));gl_PointSize=clamp((28.+cone*42.*uTorch)/-mv.z,1.2,5.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/28.,0.,1.)*(.04+cone*.55*uTorch);"),u.fragmentShader=u.fragmentShader.replace("gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));","gl_FragColor=vec4(.78,.92,.96,a*smoothstep(.5,.0,d));"),this.decoyMesh=new se(new Br(.18,1),new Us({color:16740416})),this.decoyMesh.add(new Kc(16738353,12,12)),this.scene.add(this.decoyMesh),this.bind(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.syncPickups(),this.animate(),this.publish()}buildCave(){const t=this.material(8029300,"sand",.88,3.4),n=this.material(5596778,"rock",.86,1.6),a=this.material(3820626,"rock",.9,.6),o=[],c=[],u=[],h=[];for(const g of Yr){const[v,_]=g.split(",").map(Number),x=ja(v,_),M=new Ns(ki,ki,2,2);if(M.rotateX(-Math.PI/2),M.translate(x.x,0,x.z),o.push(M),!(v===19&&_===3)){const T=M.clone();T.rotateZ(Math.PI),T.translate(x.x*2,8,0),c.push(T)}for(const[T,S]of[[1,0],[-1,0],[0,1],[0,-1]])if(!Yr.has(`${v+T},${_+S}`)){const y=new Fi(T?1:ki+.05,8.5,S?1:ki+.05);y.translate(x.x+T*2.5,4,x.z-S*2.5),u.push(y);for(let L=0;L<3;L++){const U=new Br(1,1);U.scale(T?.7:1.7,1.3+L%2*.5,S?.7:1.7),U.translate(x.x+T*2.45,1.3+L*2.5,x.z-S*2.45),h.push(U)}}}for(const[g,v]of[[o,t],[c,a],[u,n],[h,n]]){const _=lu(g);_&&this.scene.add(new se(_,v)),g.forEach(x=>x.dispose())}const d=this.material(10459770,"rock",.82,1.5);for(let g=0;g<6;g++)for(const v of[-1,1])this.scene.add(this.tube([ha(-3+g*.75,.25,-113),ha(-3+g*.75,1.3,-113+v*1.2),ha(-3+g*.75,.3,-113+v*2.2)],[.12,.09,.025],d,12,5));const p=new se(new An(1.1,1.5,1.2,7),n);p.position.set($d.x,.6,$d.z),this.scene.add(p)}beamMaterial(t,n){return new _n({uniforms:{uTime:this.uniforms.uTime,uColor:{value:new ce(t)},uOpacity:{value:n}},transparent:!0,depthWrite:!1,side:Zn,blending:Ir,vertexShader:M2,fragmentShader:E2})}addShaft(t,n,a,o,c,u,h,d,p=0,g=0){const v=new se(new An(c,u,o,28,1,!0),this.beamMaterial(h,d));return v.position.set(t,n,a),v.rotation.x=p,v.rotation.z=g,this.scene.add(v),v}buildTorchBody(){const t=new vn,n=new Ai({color:15778314,metalness:.12,roughness:.42}),a=new Ai({color:13934598,metalness:.1,roughness:.5}),o=new Ai({color:1184790,metalness:.25,roughness:.55}),c=new Ai({color:13160664,metalness:.95,roughness:.18}),u=new Ai({color:15265524,metalness:1,roughness:.08});this.torchLensMat=new Ai({color:16055039,emissive:12114160,emissiveIntensity:1.4,metalness:.05,roughness:.15,transparent:!0,opacity:.92});const h=N=>(N.rotateX(Math.PI/2),N),d=new se(h(new An(.055,.058,.42,24)),n);d.position.set(0,0,-.08),t.add(d);for(let N=0;N<7;N++){const P=new se(h(new An(.062,.062,.012,20)),a);P.position.set(0,0,.04-N*.038),t.add(P)}const p=new se(h(new An(.07,.055,.06,20)),n);p.position.set(0,0,-.31),t.add(p);const g=new se(h(new An(.118,.112,.07,28)),o);g.position.set(0,0,-.38),t.add(g);const v=new se(h(new An(.122,.122,.014,28)),o);v.position.set(0,0,-.415),t.add(v);for(let N=0;N<8;N++){const P=N/8*Math.PI*2,F=new se(new An(.008,.008,.016,6),c);F.rotation.x=Math.PI/2,F.position.set(Math.cos(P)*.1,Math.sin(P)*.1,-.425),t.add(F)}const _=new se(new Wr(.095,20,12,0,Math.PI*2,0,Math.PI*.55),u);_.scale.set(1,1,.55),_.rotation.x=Math.PI,_.position.set(0,0,-.36),t.add(_);const x=new se(new dp(.088,28),this.torchLensMat);x.position.set(0,0,-.432),t.add(x);const M=new se(new Fi(.028,.04,.055),a);M.position.set(.065,.01,-.2),t.add(M);const T=new se(new Fi(.022,.028,.03),n);T.position.set(.078,.01,-.2),t.add(T);const S=new se(h(new An(.06,.058,.08,20)),o);S.position.set(0,0,.18),t.add(S);for(let N=0;N<4;N++){const P=new se(h(new An(.063,.063,.008,16)),o);P.position.set(0,0,.15+N*.018),t.add(P)}const y=new se(h(new An(.052,.055,.02,16)),o);y.position.set(0,0,.225),t.add(y);const L=new se(new Fi(.035,.012,.1),c);L.position.set(0,.07,-.28),t.add(L);const U=new se(new Fi(.035,.055,.012),c);U.position.set(0,.095,-.235),t.add(U);for(const N of[-.3,-.26]){const P=new se(new An(.006,.006,.014,8),c);P.rotation.x=Math.PI/2,P.position.set(0,.077,N),t.add(P)}const w=[ha(0,.078,-.32),ha(0,.155,-.22),ha(0,.17,-.05),ha(0,.14,.1),ha(0,.075,.16)];return t.add(new se(new _p(new vp(w),24,.018,10,!1),o)),t.position.set(.44,-.4,-.62),t.rotation.set(.18,-.22,.32),t.scale.setScalar(1.15),t}buildLights(){this.scene.add(this.camera),this.torchBody=this.buildTorchBody(),this.camera.add(this.torchBody),this.torchLight.color.set(15923455),this.torchLight.intensity=170,this.torchLight.distance=34,this.torchLight.angle=.28,this.torchLight.penumbra=.35,this.torchLight.decay=1.15,this.torchLight.position.set(0,0,-.45),this.torchLight.target.position.set(0,0,-22),this.torchBody.add(this.torchLight,this.torchLight.target);const t=new An(.018,3.2,20,28,1,!0);t.rotateX(Math.PI/2),this.beam=new se(t,this.beamMaterial(13953784,.09)),this.beam.position.set(0,0,-10.45),this.torchBody.add(this.beam);const n=(p,g,v)=>{const _=new se(new Wr(.1,8,6),new Us({color:v}));_.position.set(p,.55,g),_.add(new Kc(v,.85,5.5,1.5)),this.scene.add(_)};for(const[p,g]of[[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])n(p,g,5952708);for(const[p,g]of[[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])n(p,g,14723160);const a=new vn;a.position.set(ul.x,.65,ul.z);const o=new se(new _u(1.6,.05,8,48),new Us({color:12189660}));o.rotation.x=Math.PI/2,a.add(o),this.scene.add(a);const c=new Zc(13826292,420,24,.72,.8,1);c.position.set(32,12,-12),c.target.position.set(32,0,-12),this.scene.add(c,c.target);const u=new Kc(11071720,28,16,1.1);u.position.set(32,5,-12),this.scene.add(u),this.addShaft(32,5.2,-12,9,.7,2.8,14220020,.22);const h=[[2,6.2,-52,9,.5,2.4,.16],[6,6,-64,9.5,.55,2.6,.15],[4,6.5,-78,9,.45,2.3,.14],[0,6.4,-96,8,.35,1.8,.1]];for(const[p,g,v,_,x,M,T]of h){this.addShaft(p,g,v,_,x,M,12119012,T,(Math.random()-.5)*.12,(Math.random()-.5)*.1);const S=new Zc(11594980,55+T*500,15,.5,.85,1.15);S.position.set(p,8.2,v),S.target.position.set(p,0,v),this.scene.add(S,S.target)}this.addShaft(0,6.3,-22,8,.45,2.2,11067608,.1);const d=new Zc(11068636,70,13,.48,.8,1.1);d.position.set(0,8.5,-22),d.target.position.set(0,0,-22),this.scene.add(d,d.target),this.addShaft(0,5.8,-110,7.5,.3,1.5,12899504,.08)}buildComposer(){const t=this.host.clientWidth,n=this.host.clientHeight;this.composer=new r2(this.renderer),this.composer.addPass(new o2(this.scene,this.camera)),this.bloom=new qr(new Ft(t,n),.18,.65,.92),this.composer.addPass(this.bloom),this.composer.addPass(new c2)}resize(){if(!this.alive)return;const t=this.host.clientWidth,n=this.host.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer?.setSize(t,n),this.bloom?.resolution.set(t,n)}syncPickups(){for(const[t,n]of this.pickupMeshes)this.mission.pickups.some(a=>a.id===t)||(this.scene.remove(n),n.traverse(a=>{a instanceof se&&(a.geometry.dispose(),a.material.dispose())}),this.pickupMeshes.delete(t));for(const t of this.mission.pickups){let n=this.pickupMeshes.get(t.id);if(!n){n=new vn;const a=new Ai({color:t.item==="relic"?14857822:8571063,emissive:t.item==="relic"?7027719:1391670,emissiveIntensity:.7,metalness:.4,roughness:.45});if(t.item==="relic"){const o=[],c=[];for(let u=0;u<=72;u++){const h=u/72,d=h*Math.PI*4.5,p=.03+h*h*.62;o.push(ha(Math.cos(d)*p,Math.sin(d)*p,0)),c.push(.01+h*.12)}n.add(this.tube(o,c,a,90,8)),n.add(new Kc(15711080,3.5,7))}else n.add(new se(new Br(.3,1),a));this.scene.add(n),this.pickupMeshes.set(t.id,n)}n.position.set(t.position.x,t.position.y+Math.sin(this.time*1.7+t.id)*.12,t.position.z),n.rotation.y=this.time*.45}}publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice,yaw:this.yaw})}bind(){const t=(a,o,c,u)=>{a.addEventListener(o,c,u),this.listeners.push(()=>a.removeEventListener(o,c,u))};t(window,"keydown",(a=>{this.playing&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(a.code)&&a.preventDefault(),this.keys.add(a.code),!a.repeat&&(a.code==="Escape"&&(this.mission.pending!==null?(this.mission.pending=null,this.publish()):this.pause()),/^Digit[1-5]$/.test(a.code)&&this.mission.select(Number(a.code.slice(-1))-1)&&this.playSelectClick(),a.code==="KeyE"&&this.mission.interact(),a.code==="KeyF"&&(this.mission.torch=!this.mission.torch),a.code==="KeyR"&&this.mission.use(),a.code==="KeyG"&&this.mission.drop(),a.code==="KeyM"&&this.setSound(!this.sound),this.publish()))})),t(window,"keyup",(a=>{this.keys.delete(a.code)})),t(window,"blur",(()=>this.pause())),t(document,"visibilitychange",(()=>{document.hidden&&this.pause()}));const n=this.renderer.domElement;t(n,"pointerdown",(a=>{if(this.playing){try{n.setPointerCapture(a.pointerId)}catch{}document.pointerLockElement!==n&&this.requestLookLock(!1)}})),t(document,"pointermove",(a=>{if(!this.playing)return;if(document.pointerLockElement===n){this.lookPointer=null,this.fallbackTurn=0;const d=nu(this.targetYaw,this.targetPitch,a.movementX,a.movementY);this.targetYaw=d.yaw,this.targetPitch=d.pitch;return}const c=n.getBoundingClientRect();if(a.clientX<c.left||a.clientX>c.right||a.clientY<c.top||a.clientY>c.bottom){this.lookPointer=null,this.fallbackTurn=0;return}this.lookPointer={x:a.clientX,y:a.clientY},this.fallbackTurn=m_(a.clientX,c.left,c.width);const u=this.fallbackTurn!==0?0:a.movementX,h=nu(this.targetYaw,this.targetPitch,u,a.movementY);this.targetYaw=h.yaw,this.targetPitch=h.pitch})),t(window,"mouseout",(a=>{a.relatedTarget||(this.lookPointer=null,this.fallbackTurn=0)})),t(n,"wheel",(a=>{if(!this.playing)return;a.preventDefault();const o=a.deltaMode===1?16:a.deltaMode===2?200:1,c=nu(this.targetYaw,this.targetPitch,a.deltaX*o,a.deltaY*o);this.targetYaw=c.yaw,this.targetPitch=c.pitch}),{passive:!1}),t(document,"pointerlockchange",(()=>{const a=this.pointerLocked;this.pointerLocked=document.pointerLockElement===n,this.pointerLocked&&(this.everLocked=!0,this.lockDenied=!1,this.lookPointer=null,this.fallbackTurn=0),a&&!this.pointerLocked&&this.pause(),this.publish()})),t(document,"pointerlockerror",(()=>{this.lockDenied=!0,this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish()})),t(n,"webglcontextlost",(a=>{a.preventDefault(),this.error="The graphics connection was lost. Reload the page to restart the dive.",this.pause(),this.publish()}))}requestLookLock(t=!0){if(!this.playing||document.pointerLockElement===this.renderer.domElement)return;const n=()=>{this.lockDenied=!0,t&&(this.mission.say("360° free look active. Steer left or right of center to keep turning — pointer stays in the dive."),this.publish())};try{this.renderer.domElement.requestPointerLock?.()?.catch(n)}catch{n()}}initAudio(){if(!this.audioContext)try{const t=window.AudioContext||window.webkitAudioContext,n=new t;this.audioContext=n,this.master=n.createGain(),this.master.gain.value=this.sound?.7:0,this.audioProbe=h2(n,this.master),this.backgroundMusic=new g2(n,this.master),n.onstatechange=()=>{this.alive&&(this.playing&&this.sound&&n.state!=="running"&&(this.audioNotice="Sound interrupted. Pause and choose Test sound."),this.publish())}}catch{this.audioContext?.close().catch(()=>{}),this.audioContext=null,this.master=null,this.audioNotice="Audio could not start in this browser. Try Test sound or open the game in Chrome."}}enableAudio(t=!1){window.clearTimeout(this.audioTestTimer),this.initAudio();const n=this.audioContext,a=this.master;if(!n||!a){this.publish();return}a.gain.setTargetAtTime(this.sound?.7:0,n.currentTime,.04),n.resume().then(()=>{if(this.alive){if(!this.playing&&!this.testingAudio){n.suspend().catch(()=>{});return}if(n.state!=="running"){this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish();return}this.audioNotice="",t&&this.sound&&(this.playing||this.testingAudio)&&d2(n,a),this.playing&&this.backgroundMusic?.start().catch(()=>{this.alive&&(this.audioNotice="Background music could not load. Pause and resume to retry.",this.publish())}),this.publish()}}).catch(()=>{this.alive&&(this.audioNotice="Sound is blocked. Pause and choose Test sound.",this.publish())})}playSelectClick(){if(!this.playing||!this.sound)return;const t=this.audioContext,n=this.master;!t||!n||t.state!=="running"||p2(t,n)}testingAudio=!1;testSound(){this.sound=!0,this.testingAudio=!0,this.enableAudio(!0),this.audioTestTimer=window.setTimeout(()=>{this.testingAudio=!1,this.playing||this.audioContext?.suspend().catch(()=>{})},1500),this.publish()}setSound(t){this.sound=t,this.audioNotice="",t?this.playing?this.enableAudio():this.testSound():this.master&&this.audioContext&&this.master.gain.setTargetAtTime(0,this.audioContext.currentTime,.04),this.publish()}start(){this.mission.outcome!=="playing"&&this.reset(),this.mission.tipsSeen||S2(),this.playing=!0,this.started=!0,this.keys.clear(),this.clock.getDelta(),this.testingAudio=!1,this.sound&&this.enableAudio(!0),this.lookPointer=null,this.fallbackTurn=0,this.requestLookLock(!0),this.publish()}pause(){this.playing&&(this.testingAudio=!1,window.clearTimeout(this.audioTestTimer),this.playing=!1,this.lookPointer=null,this.fallbackTurn=0,this.keys.clear(),this.velocity.set(0,0,0),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.audioContext?.suspend().catch(()=>{}),this.publish())}reset(){this.backgroundMusic?.reset(),this.mission=new v_(g_()),this.position.copy(this.mission.position),this.camera.position.copy(this.position),this.yaw=this.targetYaw=0,this.pitch=this.targetPitch=0,this.lookPointer=null,this.fallbackTurn=0,this.lockDenied=!1,this.velocity.set(0,0,0),this.time=0,this.lastSent=0,this.keys.clear(),this.syncPickups(),this.publish()}animate=()=>{if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.playing){this.time+=t;const d=this.mission,p=(...x)=>x.some(M=>this.keys.has(M))?1:0;if(!this.pointerLocked&&this.lookPointer){const x=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=m_(this.lookPointer.x,x.left,x.width)}else!this.pointerLocked&&!this.lookPointer&&(this.fallbackTurn=0);const g=p("ArrowRight")-p("ArrowLeft")+(this.pointerLocked?0:this.fallbackTurn*y2),v=nu(this.targetYaw,this.targetPitch,g*t*650,(p("ArrowDown")-p("ArrowUp"))*t*650);this.targetYaw=v.yaw,this.targetPitch=v.pitch,this.yaw=Ka.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*t)),this.pitch=Ka.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*t)),this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.getWorldDirection(this.forward),this.right.crossVectors(this.forward,this.upAxis).normalize(),this.move.copy(this.forward).multiplyScalar(p("KeyW")-p("KeyS")).addScaledVector(this.right,p("KeyD")-p("KeyA")),this.move.y+=p("Space")-p("KeyQ","ControlLeft","ControlRight");const _=!!p("ShiftLeft","ShiftRight")&&d.stamina>3&&this.move.lengthSq()>.1;this.move.lengthSq()>1&&this.move.normalize(),this.move.multiplyScalar(_?4.8:2.8),this.velocity.lerp(this.move,1-Math.exp(-4*t)),ax(d.position,this.velocity.x*t,this.velocity.y*t,this.velocity.z*t),d.update(t,_),this.position.copy(d.position),this.camera.position.copy(this.position),d.outcome!=="playing"&&this.pause()}const n=Ka.smoothstep(-this.position.z,35,100),a=1-Ka.smoothstep(ri(this.position,ul),4,22),o=this.scene.fog;o.color.set(800064).lerp(new ce(402480),n).lerp(new ce(1727074),a*.65),o.density=.032+.022*n-.014*a,this.scene.background.copy(o.color),this.uniforms.uTime.value=this.time;const c=this.mission.torch;if(this.torchLight.visible=c,this.beam.visible=c,this.torchBody.visible=!0,this.torchLensMat.emissiveIntensity=c?1.25:.06,this.torchLensMat.emissive.set(c?13165823:2240568),c){const d=p_(this.position.y,this.pitch),p=p_(3,0),g=d.intensity/p.intensity,v=d.distance/p.distance,_=d.beamOpacity/p.beamOpacity;this.torchLight.intensity=170*g,this.torchLight.distance=34*v,this.torchLight.decay=1.15+(d.decay-p.decay),this.torchLight.color.setRGB(d.r,d.g,d.b);const x=this.beam.material;x.uniforms.uOpacity.value=.09*_,x.uniforms.uColor.value.setRGB(d.r,d.g,d.b),this.particles.material.uniforms.uTorch.value=0}else this.particles.material.uniforms.uTorch.value=0;this.bloom.strength=c?.2:.14;const u=this.mission.predator;this.guardian.group.position.copy(u.position);const h=Math.atan2(Math.sin(u.heading-this.guardian.group.rotation.y),Math.cos(u.heading-this.guardian.group.rotation.y));this.guardian.group.rotation.y+=h*Math.min(1,t*5),this.guardian.fins.forEach(d=>d.rotation.x=Math.sin(this.time*2+(d.userData.phase||0))*.25*(d.userData.side||1)),this.guardian.tail.rotation.y=Math.sin(this.time*3)*.22,this.syncPickups(),this.decoyMesh.visible=!!this.mission.decoy,this.mission.decoy&&this.decoyMesh.position.copy(this.mission.decoy.position),this.time-this.lastSent>.05&&(this.lastSent=this.time,this.publish()),this.composer.render()};dispose(){window.clearTimeout(this.audioTestTimer),this.audioContext&&(this.audioContext.onstatechange=null),this.backgroundMusic?.dispose(),this.pause(),this.composer?.dispose(),super.dispose()}}const sl="0.1.15",rx="37c81f0",b2=`v${sl} · ${rx}`;function A2({item:r}){const t={stone:Q.jsx("path",{fill:"#7a8480",d:"M12 28c1-9 7-15 13-16 8-2 15 3 16 11 2 9-4 17-13 18-8 1-15-4-16-13z"}),wood:Q.jsxs("g",{transform:"rotate(-35 24 24)",children:[Q.jsx("rect",{x:"20",y:"8",width:"8",height:"32",rx:"2.5",fill:"#2c343a"}),Q.jsx("rect",{x:"19",y:"8",width:"10",height:"7",rx:"1.5",fill:"#4a545c"}),Q.jsx("rect",{x:"21",y:"18",width:"6",height:"2",fill:"#1a2024"})]}),flare:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"22",y:"16",width:"5",height:"24",rx:"1.5",fill:"#e8e8e8"}),Q.jsx("path",{fill:"#ff1e14",d:"M21 16c1-5 2.5-10 3.5-13 1.5 3 3.5 7 4.5 11H21z"}),Q.jsx("path",{fill:"#ffc14a",d:"M24 5c0-2 .6-4 1-5 .4 1.5 1.2 3 2 4.5-.7.2-1.8.4-3 .5z"})]}),air:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"17",y:"13",width:"14",height:"26",rx:"5",fill:"#c8d0d6"}),Q.jsx("rect",{x:"20",y:"7",width:"8",height:"8",rx:"2",fill:"#a8b2ba"}),Q.jsx("line",{x1:"17",y1:"23",x2:"31",y2:"23",stroke:"#3a444a",strokeWidth:"1.3"}),Q.jsx("line",{x1:"24",y1:"17",x2:"24",y2:"30",stroke:"#3a444a",strokeWidth:"1.3"})]}),bandage:Q.jsxs(Q.Fragment,{children:[Q.jsx("rect",{x:"11",y:"17",width:"26",height:"18",rx:"2.5",fill:"#9aa4aa"}),Q.jsx("path",{fill:"#5c666c",d:"M22 17v-5h4v5m-2 6v8m-5-4h10"})]}),relic:Q.jsxs(Q.Fragment,{children:[Q.jsx("path",{fill:"#c4923a",d:"M24 8c9 0 15 6 15 13 0 10-8 17-15 17S9 31 9 21 12 8 24 8z"}),Q.jsx("path",{fill:"none",stroke:"#4a2a08",strokeWidth:"2.2",d:"M31 28c-9 9-19 1-16-7s13-11 14-1-7 8-6 2"}),Q.jsx("circle",{cx:"28",cy:"17",r:"3.2",fill:"#ecc878"})]})};return Q.jsx("svg",{viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:r?t[r]:null})}function w2({yaw:r}){const t=(-r*180/Math.PI%360+360)%360,n=[];for(let a=0;a<360;a+=5){let o=(a-t+540)%360-180;if(Math.abs(o)>52)continue;const c=a===0?"N":a===90?"E":a===180?"S":a===270?"W":"";n.push({deg:a,x:o,label:c,major:a%90===0})}return Q.jsxs("div",{className:"compass","aria-hidden":"true",children:[Q.jsx("div",{className:"compass-needle"}),Q.jsx("div",{className:"compass-track",children:n.map(a=>Q.jsxs("div",{className:`compass-mark ${a.major?"major":a.deg%15===0?"mid":""}`,style:{transform:`translateX(${a.x*2.55}px)`},children:[Q.jsx("i",{}),a.label&&Q.jsx("span",{children:a.label})]},a.deg))})]})}function R2(){const r=vs.useRef(null),t=vs.useRef(null),[n,a]=vs.useState(null),[o,c]=vs.useState(""),[u,h]=vs.useState("");vs.useEffect(()=>{if(!r.current)return;let N;try{N=new T2(r.current,P=>a({...P})),t.current=N}catch(P){console.error(P),c("The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.")}return()=>{N?.dispose(),t.current=null}},[]),vs.useEffect(()=>{let N=!0;const P=()=>{fetch("/__build.json",{cache:"no-store"}).then(C=>C.json()).then(C=>{!N||!C?.packageVersion||(C.packageVersion!==sl||C.sha&&C.sha!==rx?h(`OUTDATED TAB — server is ${C.packageVersion}${C.sha?` · ${C.sha}`:""}. Hard refresh (Cmd+Shift+R) or run: node playable/refresh.mjs`):h(""))}).catch(()=>{})};P();const F=window.setInterval(P,4e3),G=()=>P();return window.addEventListener("focus",G),document.addEventListener("visibilitychange",()=>{document.hidden||P()}),()=>{N=!1,window.clearInterval(F),window.removeEventListener("focus",G)}},[]);const d=n?.mission,p=!!n?.playing,g=d?.outcome!=="playing"&&!!d,v=d?.nearest(),_=d&&ri(d.position,ul)<4,x=d?.pending!==null&&d?.pending!==void 0?"Choose slot 1–5 · E confirms swap · Esc cancels":_?d?.hasRelic?"E · Extract with the relic":"Relic required for extraction":v?`E · Collect ${ix[v.item].name}`:"",M=n?.yaw??0,T=d?Math.ceil(d.air):240,S=`${String(Math.floor(T/60)).padStart(2,"0")}:${String(T%60).padStart(2,"0")}`,y=d?Math.max(1,Math.round(10+-d.position.z*.22+(5-d.position.y)*2.4)):0,L=d?.predator.state||"patrol",w=(d?ri(d.position,d.predator.position)<23:!1)?{patrol:"Movement in the dark",alert:"It heard something",chase:"It is hunting you",search:"Searching your last position"}[L]:"";return Q.jsxs("main",{className:p?"app playing":"app",children:[Q.jsx("div",{className:"viewport",ref:r,"aria-label":"Three-dimensional underwater cave"}),Q.jsx("div",{className:"vignette"}),Q.jsxs("div",{className:"build-version","aria-label":`Build version ${sl}`,children:["BUILD ",b2]}),u&&Q.jsx("div",{className:"stale-build",role:"alert",children:u}),!p&&Q.jsxs("header",{children:[Q.jsxs("div",{className:"brand",children:[Q.jsx("span",{className:"brand-mark",children:"◉"})," PAINTED ABYSS",Q.jsx("small",{children:"THE DROWNED SHELF"})]}),Q.jsxs("div",{className:"build-label",children:["FIRST DIVE ",Q.jsx("span",{children:" / "})," ",sl]})]}),p&&d&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("section",{className:"objectives","aria-label":"Objectives",children:[Q.jsxs("div",{className:`obj ${d.hasRelic?"done":""}`,children:[Q.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"◆"}),d.hasRelic?"Carry the ammonite relic":"Recover the ammonite relic"]}),Q.jsxs("div",{className:"obj",children:[Q.jsx("span",{className:"obj-icon","aria-hidden":"true",children:"○"}),"Reach the extraction pool"]})]}),Q.jsx(w2,{yaw:M}),Q.jsxs("div",{className:"depth",children:["DEPTH ",y," m"]}),Q.jsxs("section",{className:"vitals","aria-label":"Vitals",children:[Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"AIR"}),Q.jsx("strong",{className:T<45?"warning":"",children:S})]}),Q.jsx("div",{className:"meter air",children:Q.jsx("i",{style:{width:`${d.air/240*100}%`}})})]}),Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"SUIT"}),Q.jsx("strong",{className:d.health<40?"warning":"",children:Math.ceil(d.health)})]}),Q.jsx("div",{className:"meter suit",children:Q.jsx("i",{style:{width:`${d.health}%`}})})]}),Q.jsxs("div",{className:"vital",children:[Q.jsxs("div",{className:"vital-row",children:[Q.jsx("span",{children:"FINS"}),Q.jsx("strong",{children:Math.round(d.stamina)})]}),Q.jsx("div",{className:"meter fins",children:Q.jsx("i",{style:{width:`${d.stamina}%`}})})]})]}),w&&Q.jsx("div",{className:`threat ${L}`,role:"status",children:w}),n?.audioNotice&&Q.jsx("div",{className:"audio-notice",role:"status",children:n.audioNotice}),d.health<40&&Q.jsx("div",{className:"injury"}),Q.jsxs("div",{className:"interaction",role:"status",children:[x&&Q.jsx("div",{className:"prompt",children:x}),d.elapsed<d.noticeUntil&&Q.jsx("p",{className:`notice ${d.feedbackKind}`,children:d.notice},d.feedbackPulse)]}),Q.jsx("div",{className:"inventory","aria-label":"Inventory",children:Q.jsx("div",{className:"slots",children:d.inventory.map((N,P)=>{const F=P===d.selected,G=F&&d.feedbackKind?d.feedbackKind:"";return Q.jsxs("div",{className:`slot ${F?"selected":""} ${N==="relic"?"relic":""} ${N==="flare"?"flare":""} ${G?`pulse-${G}`:""}`,children:[Q.jsx("kbd",{children:P+1}),Q.jsx(A2,{item:N}),F&&Q.jsx("em",{className:"slot-mark","aria-hidden":"true",children:"●"})]},F?`${P}-p${d.feedbackPulse}`:P)})})}),Q.jsxs("aside",{className:"keybinds","aria-hidden":"true",children:[Q.jsxs("div",{children:[Q.jsx("kbd",{children:"1–5"}),Q.jsx("span",{children:"Select"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"F"}),Q.jsx("span",{children:"Torch"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"E"}),Q.jsx("span",{children:"Interact"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"R"}),Q.jsx("span",{children:"Use"})]}),Q.jsxs("div",{children:[Q.jsx("kbd",{children:"G"}),Q.jsx("span",{children:"Drop"})]})]}),!n?.pointerLocked&&Q.jsx("div",{className:"free-look",children:"360° free look · move to look · hold left or right of center to keep turning"})]}),!p&&Q.jsxs("div",{className:"menu-backdrop",children:[Q.jsxs("section",{className:"menu",children:[Q.jsx("div",{className:"eyebrow",children:g?d?.outcome==="won"?"EXPEDITION COMPLETE":"DIVE LOST":n?.started?"DIVE PAUSED":"A SHORT UNDERWATER SURVIVAL PROTOTYPE"}),Q.jsx("h1",{children:g?d?.outcome==="won"?Q.jsxs(Q.Fragment,{children:["Back to",Q.jsx("br",{}),Q.jsx("em",{children:"the light."})]}):Q.jsxs(Q.Fragment,{children:["The deep",Q.jsx("br",{}),Q.jsx("em",{children:"keeps its own."})]}):n?.started?Q.jsxs(Q.Fragment,{children:["Catch your",Q.jsx("br",{}),Q.jsx("em",{children:"breath."})]}):Q.jsxs(Q.Fragment,{children:["Some things",Q.jsx("br",{}),Q.jsx("em",{children:"should stay buried."})]})}),Q.jsx("p",{className:"intro",children:g?d?.reason:n?.started?"Your dive is paused. Take a moment, then return to the cave.":"One cave. One ancient guardian. Recover the ammonite relic and bring it back to the light."}),g&&Q.jsxs("div",{className:"results",children:[Q.jsxs("span",{children:[Math.floor((d?.elapsed||0)/60),"m ",Math.floor((d?.elapsed||0)%60),"s underwater"]}),Q.jsx("span",{children:d?.outcome==="won"?"1 relic secured":"No relic secured"})]}),o||n?.error?Q.jsx("p",{className:"error",role:"alert",children:o||n?.error}):Q.jsxs("button",{className:"primary",disabled:!n,onClick:()=>t.current?.start(),children:[n?g?"Try another dive":n.started?"Resume dive":"Begin dive":"Opening the cave…"," ",Q.jsx("span",{children:"↗"})]}),Q.jsxs("div",{className:"menu-actions",children:[Q.jsx("button",{onClick:()=>{const N=t.current;N&&(N.setSound(!N.sound),N.publish())},children:t.current?.sound===!1?"Sound off":"Sound on"}),Q.jsx("button",{onClick:()=>t.current?.testSound(),children:"Test sound"}),n?.started&&!g&&Q.jsx("button",{onClick:()=>{t.current?.reset(),t.current?.start()},children:"Restart dive"})]}),Q.jsx("p",{className:"sound-help",role:"status",children:n?.audioNotice||"Test sound plays two clear tones. During the dive, hear your music."}),Q.jsxs("div",{className:"dive-note",children:["2–4 MINUTES ",Q.jsx("span",{children:"·"})," DESKTOP / HEADPHONES ",Q.jsx("span",{children:"·"})," PROTOTYPE ",sl]})]}),Q.jsxs("aside",{className:"briefing",children:[Q.jsx("div",{className:"eyebrow",children:"BEFORE YOU DESCEND"}),Q.jsxs("ol",{children:[Q.jsxs("li",{children:[Q.jsx("b",{children:"Follow the turquoise lights."}),Q.jsx("span",{children:"Find the relic in the bone alcove, beyond the central pillar."})]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Make room for your discovery."}),Q.jsx("span",{children:"Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops."})]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Escape through the east fissure."}),Q.jsx("span",{children:"Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage."})]})]}),Q.jsxs("div",{className:"control-grid",children:[Q.jsxs("span",{children:[Q.jsx("kbd",{children:"W A S D"})," Swim"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"Space / Q"})," Up / down"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"Shift"})," Sprint"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"F"})," Torch"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"E"})," Collect / extract"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"1–5"})," Select slot"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"R"})," Use / consume"]}),Q.jsxs("span",{children:[Q.jsx("kbd",{children:"G"})," Drop selected"]})]}),Q.jsxs("p",{className:"look-note",children:["Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. ",Q.jsx("kbd",{children:"Esc"})," pauses; ",Q.jsx("kbd",{children:"M"})," mutes."]}),Q.jsxs("p",{className:"tip",children:["Inventory: ",Q.jsx("kbd",{children:"1–5"})," selects (click sound when the slot changes), then ",Q.jsx("kbd",{children:"R"})," uses — air, sealant, and flares are consumed. A one-time tip appears on the first dive only. Rock blocks its sight; a flare distracts it while you move away."]})]})]})]})}xS.createRoot(document.getElementById("root")).render(Q.jsx(R2,{}));
