import{r as e,R as q,d as t3}from"./index-41e837da.js";var _1={exports:{}},V0={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i3=e,n3=Symbol.for("react.element"),s3=Symbol.for("react.fragment"),o3=Object.prototype.hasOwnProperty,v3=i3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c3={key:!0,ref:!0,__self:!0,__source:!0};function S1(l,a,t){var i,n={},s=null,v=null;t!==void 0&&(s=""+t),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(v=a.ref);for(i in a)o3.call(a,i)&&!c3.hasOwnProperty(i)&&(n[i]=a[i]);if(l&&l.defaultProps)for(i in a=l.defaultProps,a)n[i]===void 0&&(n[i]=a[i]);return{$$typeof:n3,type:l,key:s,ref:v,props:n,_owner:v3.current}}V0.Fragment=s3;V0.jsx=S1;V0.jsxs=S1;_1.exports=V0;var m=_1.exports,O=function(){return O=Object.assign||function(a){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a},O.apply(this,arguments)};function S0(l,a,t){if(t||arguments.length===2)for(var i=0,n=a.length,s;i<n;i++)(s||!(i in a))&&(s||(s=Array.prototype.slice.call(a,0,i)),s[i]=a[i]);return l.concat(s||Array.prototype.slice.call(a))}var b="-ms-",h0="-moz-",E="-webkit-",H1="comm",B0="rule",X0="decl",d3="@import",b1="@keyframes",h3="@layer",r3=Math.abs,Y0=String.fromCharCode,W0=Object.assign;function f3(l,a){return R(l,0)^45?(((a<<2^R(l,0))<<2^R(l,1))<<2^R(l,2))<<2^R(l,3):0}function k1(l){return l.trim()}function P(l,a){return(l=a.exec(l))?l[0]:l}function w(l,a,t){return l.replace(a,t)}function x0(l,a){return l.indexOf(a)}function R(l,a){return l.charCodeAt(a)|0}function e0(l,a,t){return l.slice(a,t)}function T(l){return l.length}function V1(l){return l.length}function d0(l,a){return a.push(l),l}function g3(l,a){return l.map(a).join("")}function t1(l,a){return l.filter(function(t){return!P(t,a)})}var A0=1,l0=1,B1=0,L=0,B=0,i0="";function R0(l,a,t,i,n,s,v,f){return{value:l,root:a,parent:t,type:i,props:n,children:s,line:A0,column:l0,length:v,return:"",siblings:f}}function W(l,a){return W0(R0("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},a)}function Y(l){for(;l.root;)l=W(l.root,{children:[l]});d0(l,l.siblings)}function m3(){return B}function u3(){return B=L>0?R(i0,--L):0,l0--,B===10&&(l0=1,A0--),B}function U(){return B=L<B1?R(i0,L++):0,l0++,B===10&&(l0=1,A0++),B}function $(){return R(i0,L)}function y0(){return L}function O0(l,a){return e0(i0,l,a)}function N0(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function p3(l){return A0=l0=1,B1=T(i0=l),L=0,[]}function w3(l){return i0="",l}function T0(l){return k1(O0(L-1,j0(l===91?l+2:l===40?l+1:l)))}function Z3(l){for(;(B=$())&&B<33;)U();return N0(l)>2||N0(B)>3?"":" "}function M3(l,a){for(;--a&&U()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return O0(l,y0()+(a<6&&$()==32&&U()==32))}function j0(l){for(;U();)switch(B){case l:return L;case 34:case 39:l!==34&&l!==39&&j0(B);break;case 40:l===41&&j0(l);break;case 92:U();break}return L}function x3(l,a){for(;U()&&l+B!==47+10;)if(l+B===42+42&&$()===47)break;return"/*"+O0(a,L-1)+"*"+Y0(l===47?l:U())}function y3(l){for(;!N0($());)U();return O0(l,L)}function E3(l){return w3(E0("",null,null,null,[""],l=p3(l),0,[0],l))}function E0(l,a,t,i,n,s,v,f,g){for(var h=0,c=0,o=v,r=0,d=0,u=0,S=1,k=1,_=1,p=0,Z="",A=n,H=s,V=i,y=Z;k;)switch(u=p,p=U()){case 40:if(u!=108&&R(y,o-1)==58){x0(y+=w(T0(p),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:y+=T0(p);break;case 9:case 10:case 13:case 32:y+=Z3(u);break;case 92:y+=M3(y0()-1,7);continue;case 47:switch($()){case 42:case 47:d0(_3(x3(U(),y0()),a,t,g),g);break;default:y+="/"}break;case 123*S:f[h++]=T(y)*_;case 125*S:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:_==-1&&(y=w(y,/\f/g,"")),d>0&&T(y)-o&&d0(d>32?n1(y+";",i,t,o-1,g):n1(w(y," ","")+";",i,t,o-2,g),g);break;case 59:y+=";";default:if(d0(V=i1(y,a,t,h,c,n,f,Z,A=[],H=[],o,s),s),p===123)if(c===0)E0(y,a,V,V,A,s,o,f,H);else switch(r===99&&R(y,3)===110?100:r){case 100:case 108:case 109:case 115:E0(l,V,V,i&&d0(i1(l,V,V,0,0,n,f,Z,n,A=[],o,H),H),n,H,o,f,i?A:H);break;default:E0(y,V,V,V,[""],H,0,f,H)}}h=c=d=0,S=_=1,Z=y="",o=v;break;case 58:o=1+T(y),d=u;default:if(S<1){if(p==123)--S;else if(p==125&&S++==0&&u3()==125)continue}switch(y+=Y0(p),p*S){case 38:_=c>0?1:(y+="\f",-1);break;case 44:f[h++]=(T(y)-1)*_,_=1;break;case 64:$()===45&&(y+=T0(U())),r=$(),c=o=T(Z=y+=y3(y0())),p++;break;case 45:u===45&&T(y)==2&&(S=0)}}return s}function i1(l,a,t,i,n,s,v,f,g,h,c,o){for(var r=n-1,d=n===0?s:[""],u=V1(d),S=0,k=0,_=0;S<i;++S)for(var p=0,Z=e0(l,r+1,r=r3(k=v[S])),A=l;p<u;++p)(A=k1(k>0?d[p]+" "+Z:w(Z,/&\f/g,d[p])))&&(g[_++]=A);return R0(l,a,t,n===0?B0:f,g,h,c,o)}function _3(l,a,t,i){return R0(l,a,t,H1,Y0(m3()),e0(l,2,-2),0,i)}function n1(l,a,t,i,n){return R0(l,a,t,X0,e0(l,0,i),e0(l,i+1,-1),i,n)}function A1(l,a,t){switch(f3(l,a)){case 5103:return E+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+l+l;case 4789:return h0+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return E+l+h0+l+b+l+l;case 5936:switch(R(l,a+11)){case 114:return E+l+b+w(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return E+l+b+w(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return E+l+b+w(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return E+l+b+l+l;case 6165:return E+l+b+"flex-"+l+l;case 5187:return E+l+w(l,/(\w+).+(:[^]+)/,E+"box-$1$2"+b+"flex-$1$2")+l;case 5443:return E+l+b+"flex-item-"+w(l,/flex-|-self/g,"")+(P(l,/flex-|baseline/)?"":b+"grid-row-"+w(l,/flex-|-self/g,""))+l;case 4675:return E+l+b+"flex-line-pack"+w(l,/align-content|flex-|-self/g,"")+l;case 5548:return E+l+b+w(l,"shrink","negative")+l;case 5292:return E+l+b+w(l,"basis","preferred-size")+l;case 6060:return E+"box-"+w(l,"-grow","")+E+l+b+w(l,"grow","positive")+l;case 4554:return E+w(l,/([^-])(transform)/g,"$1"+E+"$2")+l;case 6187:return w(w(w(l,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),l,"")+l;case 5495:case 3959:return w(l,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return w(w(l,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+l+l;case 4200:if(!P(l,/flex-|baseline/))return b+"grid-column-align"+e0(l,a)+l;break;case 2592:case 3360:return b+w(l,"template-","")+l;case 4384:case 3616:return t&&t.some(function(i,n){return a=n,P(i.props,/grid-\w+-end/)})?~x0(l+(t=t[a].value),"span")?l:b+w(l,"-start","")+l+b+"grid-row-span:"+(~x0(t,"span")?P(t,/\d+/):+P(t,/\d+/)-+P(l,/\d+/))+";":b+w(l,"-start","")+l;case 4896:case 4128:return t&&t.some(function(i){return P(i.props,/grid-\w+-start/)})?l:b+w(w(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return w(l,/(.+)-inline(.+)/,E+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(l)-1-a>6)switch(R(l,a+1)){case 109:if(R(l,a+4)!==45)break;case 102:return w(l,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+h0+(R(l,a+3)==108?"$3":"$2-$3"))+l;case 115:return~x0(l,"stretch")?A1(w(l,"stretch","fill-available"),a,t)+l:l}break;case 5152:case 5920:return w(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,n,s,v,f,g,h){return b+n+":"+s+h+(v?b+n+"-span:"+(f?g:+g-+s)+h:"")+l});case 4949:if(R(l,a+6)===121)return w(l,":",":"+E)+l;break;case 6444:switch(R(l,R(l,14)===45?18:11)){case 120:return w(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+E+(R(l,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+b+"$2box$3")+l;case 100:return w(l,":",":"+b)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(l,"scroll-","scroll-snap-")+l}return l}function H0(l,a){for(var t="",i=0;i<l.length;i++)t+=a(l[i],i,l,a)||"";return t}function S3(l,a,t,i){switch(l.type){case h3:if(l.children.length)break;case d3:case X0:return l.return=l.return||l.value;case H1:return"";case b1:return l.return=l.value+"{"+H0(l.children,i)+"}";case B0:if(!T(l.value=l.props.join(",")))return""}return T(t=H0(l.children,i))?l.return=l.value+"{"+t+"}":""}function H3(l){var a=V1(l);return function(t,i,n,s){for(var v="",f=0;f<a;f++)v+=l[f](t,i,n,s)||"";return v}}function b3(l){return function(a){a.root||(a=a.return)&&l(a)}}function k3(l,a,t,i){if(l.length>-1&&!l.return)switch(l.type){case X0:l.return=A1(l.value,l.length,t);return;case b1:return H0([W(l,{value:w(l.value,"@","@"+E)})],i);case B0:if(l.length)return g3(t=l.props,function(n){switch(P(n,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(W(l,{props:[w(n,/:(read-\w+)/,":"+h0+"$1")]})),Y(W(l,{props:[n]})),W0(l,{props:t1(t,i)});break;case"::placeholder":Y(W(l,{props:[w(n,/:(plac\w+)/,":"+E+"input-$1")]})),Y(W(l,{props:[w(n,/:(plac\w+)/,":"+h0+"$1")]})),Y(W(l,{props:[w(n,/:(plac\w+)/,b+"input-$1")]})),Y(W(l,{props:[n]})),W0(l,{props:t1(t,i)});break}return""})}}var V3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a0=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Q0=typeof window<"u"&&"HTMLElement"in window,B3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),C0=Object.freeze([]),t0=Object.freeze({});function A3(l,a,t){return t===void 0&&(t=t0),l.theme!==t.theme&&l.theme||a||t.theme}var R1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O3=/(^-|-$)/g;function s1(l){return l.replace(R3,"-").replace(O3,"")}var C3=/(a)(d)/gi,o1=function(l){return String.fromCharCode(l+(l>25?39:97))};function $0(l){var a,t="";for(a=Math.abs(l);a>52;a=a/52|0)t=o1(a%52)+t;return(o1(a%52)+t).replace(C3,"$1-$2")}var P0,Q=function(l,a){for(var t=a.length;t;)l=33*l^a.charCodeAt(--t);return l},O1=function(l){return Q(5381,l)};function F3(l){return $0(O1(l)>>>0)}function D3(l){return l.displayName||l.name||"Component"}function I0(l){return typeof l=="string"&&!0}var C1=typeof Symbol=="function"&&Symbol.for,F1=C1?Symbol.for("react.memo"):60115,L3=C1?Symbol.for("react.forward_ref"):60112,U3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},D1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P3=((P0={})[L3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},P0[F1]=D1,P0);function v1(l){return("type"in(a=l)&&a.type.$$typeof)===F1?D1:"$$typeof"in l?P3[l.$$typeof]:U3;var a}var I3=Object.defineProperty,G3=Object.getOwnPropertyNames,c1=Object.getOwnPropertySymbols,z3=Object.getOwnPropertyDescriptor,W3=Object.getPrototypeOf,d1=Object.prototype;function L1(l,a,t){if(typeof a!="string"){if(d1){var i=W3(a);i&&i!==d1&&L1(l,i,t)}var n=G3(a);c1&&(n=n.concat(c1(a)));for(var s=v1(l),v=v1(a),f=0;f<n.length;++f){var g=n[f];if(!(g in T3||t&&t[g]||v&&g in v||s&&g in s)){var h=z3(a,g);try{I3(l,g,h)}catch{}}}}return l}function J(l){return typeof l=="function"}function e1(l){return typeof l=="object"&&"styledComponentId"in l}function j(l,a){return l&&a?"".concat(l," ").concat(a):l||a||""}function h1(l,a){if(l.length===0)return"";for(var t=l[0],i=1;i<l.length;i++)t+=a?a+l[i]:l[i];return t}function r0(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function K0(l,a,t){if(t===void 0&&(t=!1),!t&&!r0(l)&&!Array.isArray(l))return a;if(Array.isArray(a))for(var i=0;i<a.length;i++)l[i]=K0(l[i],a[i]);else if(r0(a))for(var i in a)l[i]=K0(l[i],a[i]);return l}function l1(l,a){Object.defineProperty(l,"toString",{value:a})}function X(l){for(var a=[],t=1;t<arguments.length;t++)a[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var N3=function(){function l(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return l.prototype.indexOfGroup=function(a){for(var t=0,i=0;i<a;i++)t+=this.groupSizes[i];return t},l.prototype.insertRules=function(a,t){if(a>=this.groupSizes.length){for(var i=this.groupSizes,n=i.length,s=n;a>=s;)if((s<<=1)<0)throw X(16,"".concat(a));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var v=n;v<s;v++)this.groupSizes[v]=0}for(var f=this.indexOfGroup(a+1),g=(v=0,t.length);v<g;v++)this.tag.insertRule(f,t[v])&&(this.groupSizes[a]++,f++)},l.prototype.clearGroup=function(a){if(a<this.length){var t=this.groupSizes[a],i=this.indexOfGroup(a),n=i+t;this.groupSizes[a]=0;for(var s=i;s<n;s++)this.tag.deleteRule(i)}},l.prototype.getGroup=function(a){var t="";if(a>=this.length||this.groupSizes[a]===0)return t;for(var i=this.groupSizes[a],n=this.indexOfGroup(a),s=n+i,v=n;v<s;v++)t+="".concat(this.tag.getRule(v)).concat(`/*!sc*/
`);return t},l}(),_0=new Map,b0=new Map,G0=1,w0=function(l){if(_0.has(l))return _0.get(l);for(;b0.has(G0);)G0++;var a=G0++;return _0.set(l,a),b0.set(a,l),a},j3=function(l,a){_0.set(l,a),b0.set(a,l)},$3="style[".concat(a0,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),K3=new RegExp("^".concat(a0,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),q3=function(l,a,t){for(var i,n=t.split(","),s=0,v=n.length;s<v;s++)(i=n[s])&&l.registerName(a,i)},J3=function(l,a){for(var t,i=((t=a.textContent)!==null&&t!==void 0?t:"").split(`/*!sc*/
`),n=[],s=0,v=i.length;s<v;s++){var f=i[s].trim();if(f){var g=f.match(K3);if(g){var h=0|parseInt(g[1],10),c=g[2];h!==0&&(j3(c,h),q3(l,c,g[3]),l.getTag().insertRules(h,n)),n.length=0}else n.push(f)}}};function X3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var U1=function(l){var a=document.head,t=l||a,i=document.createElement("style"),n=function(f){var g=Array.from(f.querySelectorAll("style[".concat(a0,"]")));return g[g.length-1]}(t),s=n!==void 0?n.nextSibling:null;i.setAttribute(a0,"active"),i.setAttribute("data-styled-version","6.1.0");var v=X3();return v&&i.setAttribute("nonce",v),t.insertBefore(i,s),i},Y3=function(){function l(a){this.element=U1(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,n=0,s=i.length;n<s;n++){var v=i[n];if(v.ownerNode===t)return v}throw X(17)}(this.element),this.length=0}return l.prototype.insertRule=function(a,t){try{return this.sheet.insertRule(t,a),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},l.prototype.getRule=function(a){var t=this.sheet.cssRules[a];return t&&t.cssText?t.cssText:""},l}(),Q3=function(){function l(a){this.element=U1(a),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(a,t){if(a<=this.length&&a>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[a]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},l.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},l}(),e2=function(){function l(a){this.rules=[],this.length=0}return l.prototype.insertRule=function(a,t){return a<=this.length&&(this.rules.splice(a,0,t),this.length++,!0)},l.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},l.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},l}(),r1=Q0,l2={isServer:!Q0,useCSSOMInjection:!B3},T1=function(){function l(a,t,i){a===void 0&&(a=t0),t===void 0&&(t={});var n=this;this.options=O(O({},l2),a),this.gs=t,this.names=new Map(i),this.server=!!a.isServer,!this.server&&Q0&&r1&&(r1=!1,function(s){for(var v=document.querySelectorAll($3),f=0,g=v.length;f<g;f++){var h=v[f];h&&h.getAttribute(a0)!=="active"&&(J3(s,h),h.parentNode&&h.parentNode.removeChild(h))}}(this)),l1(this,function(){return function(s){for(var v=s.getTag(),f=v.length,g="",h=function(o){var r=function(_){return b0.get(_)}(o);if(r===void 0)return"continue";var d=s.names.get(r),u=v.getGroup(o);if(d===void 0||u.length===0)return"continue";var S="".concat(a0,".g").concat(o,'[id="').concat(r,'"]'),k="";d!==void 0&&d.forEach(function(_){_.length>0&&(k+="".concat(_,","))}),g+="".concat(u).concat(S,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},c=0;c<f;c++)h(c);return g}(n)})}return l.registerId=function(a){return w0(a)},l.prototype.reconstructWithOptions=function(a,t){return t===void 0&&(t=!0),new l(O(O({},this.options),a),this.gs,t&&this.names||void 0)},l.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(a=function(t){var i=t.useCSSOMInjection,n=t.target;return t.isServer?new e2(n):i?new Y3(n):new Q3(n)}(this.options),new N3(a)));var a},l.prototype.hasNameForId=function(a,t){return this.names.has(a)&&this.names.get(a).has(t)},l.prototype.registerName=function(a,t){if(w0(a),this.names.has(a))this.names.get(a).add(t);else{var i=new Set;i.add(t),this.names.set(a,i)}},l.prototype.insertRules=function(a,t,i){this.registerName(a,t),this.getTag().insertRules(w0(a),i)},l.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},l.prototype.clearRules=function(a){this.getTag().clearGroup(w0(a)),this.clearNames(a)},l.prototype.clearTag=function(){this.tag=void 0},l}(),a2=/&/g,t2=/^\s*\/\/.*$/gm;function P1(l,a){return l.map(function(t){return t.type==="rule"&&(t.value="".concat(a," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(a," ")),t.props=t.props.map(function(i){return"".concat(a," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=P1(t.children,a)),t})}function i2(l){var a,t,i,n=l===void 0?t0:l,s=n.options,v=s===void 0?t0:s,f=n.plugins,g=f===void 0?C0:f,h=function(r,d,u){return u===t||u.startsWith(t)&&u.endsWith(t)&&u.replaceAll(t,"").length>0?".".concat(a):r},c=g.slice();c.push(function(r){r.type===B0&&r.value.includes("&")&&(r.props[0]=r.props[0].replace(a2,t).replace(i,h))}),v.prefix&&c.push(k3),c.push(S3);var o=function(r,d,u,S){d===void 0&&(d=""),u===void 0&&(u=""),S===void 0&&(S="&"),a=S,t=d,i=new RegExp("\\".concat(t,"\\b"),"g");var k=r.replace(t2,""),_=E3(u||d?"".concat(u," ").concat(d," { ").concat(k," }"):k);v.namespace&&(_=P1(_,v.namespace));var p=[];return H0(_,H3(c.concat(b3(function(Z){return p.push(Z)})))),p};return o.hash=g.length?g.reduce(function(r,d){return d.name||X(15),Q(r,d.name)},5381).toString():"",o}var n2=new T1,q0=i2(),I1=q.createContext({shouldForwardProp:void 0,styleSheet:n2,stylis:q0});I1.Consumer;q.createContext(void 0);function f1(){return e.useContext(I1)}var s2=function(){function l(a,t){var i=this;this.inject=function(n,s){s===void 0&&(s=q0);var v=i.name+s.hash;n.hasNameForId(i.id,v)||n.insertRules(i.id,v,s(i.rules,v,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=t,l1(this,function(){throw X(12,String(i.name))})}return l.prototype.getName=function(a){return a===void 0&&(a=q0),this.name+a.hash},l}(),o2=function(l){return l>="A"&&l<="Z"};function g1(l){for(var a="",t=0;t<l.length;t++){var i=l[t];if(t===1&&i==="-"&&l[0]==="-")return l;o2(i)?a+="-"+i.toLowerCase():a+=i}return a.startsWith("ms-")?"-"+a:a}var G1=function(l){return l==null||l===!1||l===""},z1=function(l){var a,t,i=[];for(var n in l){var s=l[n];l.hasOwnProperty(n)&&!G1(s)&&(Array.isArray(s)&&s.isCss||J(s)?i.push("".concat(g1(n),":"),s,";"):r0(s)?i.push.apply(i,S0(S0(["".concat(n," {")],z1(s),!1),["}"],!1)):i.push("".concat(g1(n),": ").concat((a=n,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||a in V3||a.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function K(l,a,t,i){if(G1(l))return[];if(e1(l))return[".".concat(l.styledComponentId)];if(J(l)){if(!J(s=l)||s.prototype&&s.prototype.isReactComponent||!a)return[l];var n=l(a);return K(n,a,t,i)}var s;return l instanceof s2?t?(l.inject(t,i),[l.getName(i)]):[l]:r0(l)?z1(l):Array.isArray(l)?Array.prototype.concat.apply(C0,l.map(function(v){return K(v,a,t,i)})):[l.toString()]}function v2(l){for(var a=0;a<l.length;a+=1){var t=l[a];if(J(t)&&!e1(t))return!1}return!0}var c2=O1("6.1.0"),d2=function(){function l(a,t,i){this.rules=a,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&v2(a),this.componentId=t,this.baseHash=Q(c2,t),this.baseStyle=i,T1.registerId(t)}return l.prototype.generateAndInjectStyles=function(a,t,i){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=j(n,this.staticRulesId);else{var s=h1(K(this.rules,a,t,i)),v=$0(Q(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,v)){var f=i(s,".".concat(v),void 0,this.componentId);t.insertRules(this.componentId,v,f)}n=j(n,v),this.staticRulesId=v}else{for(var g=Q(this.baseHash,i.hash),h="",c=0;c<this.rules.length;c++){var o=this.rules[c];if(typeof o=="string")h+=o;else if(o){var r=h1(K(o,a,t,i));g=Q(g,r+c),h+=r}}if(h){var d=$0(g>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,i(h,".".concat(d),void 0,this.componentId)),n=j(n,d)}}return n},l}(),k0=q.createContext(void 0);k0.Consumer;function h2(l){var a=q.useContext(k0),t=e.useMemo(function(){return function(i,n){if(!i)throw X(14);if(J(i)){var s=i(n);return s}if(Array.isArray(i)||typeof i!="object")throw X(8);return n?O(O({},n),i):i}(l.theme,a)},[l.theme,a]);return l.children?q.createElement(k0.Provider,{value:t},l.children):null}var z0={};function r2(l,a,t){var i=e1(l),n=l,s=!I0(l),v=a.attrs,f=v===void 0?C0:v,g=a.componentId,h=g===void 0?function(Z,A){var H=typeof Z!="string"?"sc":s1(Z);z0[H]=(z0[H]||0)+1;var V="".concat(H,"-").concat(F3("6.1.0"+H+z0[H]));return A?"".concat(A,"-").concat(V):V}(a.displayName,a.parentComponentId):g,c=a.displayName;c===void 0&&function(Z){return I0(Z)?"styled.".concat(Z):"Styled(".concat(D3(Z),")")}(l);var o=a.displayName&&a.componentId?"".concat(s1(a.displayName),"-").concat(a.componentId):a.componentId||h,r=i&&n.attrs?n.attrs.concat(f).filter(Boolean):f,d=a.shouldForwardProp;if(i&&n.shouldForwardProp){var u=n.shouldForwardProp;if(a.shouldForwardProp){var S=a.shouldForwardProp;d=function(Z,A){return u(Z,A)&&S(Z,A)}}else d=u}var k=new d2(t,o,i?n.componentStyle:void 0);function _(Z,A){return function(H,V,y){var f0=H.attrs,J1=H.componentStyle,X1=H.defaultProps,Y1=H.foldedComponentIds,Q1=H.styledComponentId,e3=H.target,l3=q.useContext(k0),a3=f1(),D0=H.shouldForwardProp||a3.shouldForwardProp,I=function(m0,s0,u0){for(var o0,N=O(O({},s0),{className:void 0,theme:u0}),U0=0;U0<m0.length;U0+=1){var p0=J(o0=m0[U0])?o0(N):o0;for(var z in p0)N[z]=z==="className"?j(N[z],p0[z]):z==="style"?O(O({},N[z]),p0[z]):p0[z]}return s0.className&&(N.className=j(N.className,s0.className)),N}(f0,V,A3(V,l3,X1)||t0),g0=I.as||e3,n0={};for(var G in I)I[G]===void 0||G[0]==="$"||G==="as"||G==="theme"||(G==="forwardedAs"?n0.as=I.forwardedAs:D0&&!D0(G,g0)||(n0[G]=I[G]));var a1=function(m0,s0){var u0=f1(),o0=m0.generateAndInjectStyles(s0,u0.styleSheet,u0.stylis);return o0}(J1,I),L0=j(Y1,Q1);return a1&&(L0+=" "+a1),I.className&&(L0+=" "+I.className),n0[I0(g0)&&!R1.has(g0)?"class":"className"]=L0,n0.ref=y,e.createElement(g0,n0)}(p,Z,A)}var p=q.forwardRef(_);return p.attrs=r,p.componentStyle=k,p.shouldForwardProp=d,p.foldedComponentIds=i?j(n.foldedComponentIds,n.styledComponentId):"",p.styledComponentId=o,p.target=i?n.target:l,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=i?function(A){for(var H=[],V=1;V<arguments.length;V++)H[V-1]=arguments[V];for(var y=0,f0=H;y<f0.length;y++)K0(A,f0[y],!0);return A}({},n.defaultProps,Z):Z}}),l1(p,function(){return".".concat(p.styledComponentId)}),s&&L1(p,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function m1(l,a){for(var t=[l[0]],i=0,n=a.length;i<n;i+=1)t.push(a[i],l[i+1]);return t}var u1=function(l){return Object.assign(l,{isCss:!0})};function M(l){for(var a=[],t=1;t<arguments.length;t++)a[t-1]=arguments[t];if(J(l)||r0(l)){var i=l;return u1(K(m1(C0,S0([i],a,!0))))}var n=l;return a.length===0&&n.length===1&&typeof n[0]=="string"?K(n):u1(K(m1(n,a)))}function J0(l,a,t){if(t===void 0&&(t=t0),!a)throw X(1,a);var i=function(n){for(var s=[],v=1;v<arguments.length;v++)s[v-1]=arguments[v];return l(a,t,M.apply(void 0,S0([n],s,!1)))};return i.attrs=function(n){return J0(l,a,O(O({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return J0(l,a,O(O({},t),n))},i}var W1=function(l){return J0(r2,l)},C=W1;R1.forEach(function(l){C[l]=W1(l)});const f2={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F3F4F6","Neutral/Neutral 10":"#E5E7EB","Neutral/Neutral 20":"#D5D8DE","Neutral/Neutral 30":"#B0B5BD","Neutral/Neutral 40":"#9BA0AA","Neutral/Neutral 50":"#717681","Neutral/Neutral 60":"#646973","Neutral/Neutral 70":"#4F525A","Neutral/Neutral 80":"#35383F","Neutral/Neutral 90":"#23262D","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#121316","Special/Dark Static Neutral 05":"#1C1E22","Special/Dark Static Neutral 10":"#282A2F","Special/Dark Static Neutral 20":"#383C44","Special/Dark Static Neutral 30":"#4E535D","Special/Dark Static Neutral 50":"#7F8692","Special/Dark Static Neutral 70":"#A6ABB4","Special/Dark Static Neutral 80":"#C7CAD1","Special/Dark Static Neutral 90":"#E2E5E9","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#00000066","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},g2={"Shadow 02":`
  box-shadow: 0px 0.9px 2px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.14);
`,"Shadow 08":`
  box-shadow: 0px -1.5px 6px rgba(0, 0, 0, 0.06), 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 9px rgba(0, 0, 0, 0.16);
`,"Shadow 12":`
  box-shadow: 0px 1.2px 12px rgba(0, 0, 0, 0.1), 0px 4px 18px rgba(0, 0, 0, 0.08), 0px 0.8px 1.8px rgba(0, 0, 0, 0.04);
`,"Shadow 16":`
  box-shadow: 0px 1.2px 18px rgba(0, 0, 0, 0.08), 0px 6.4px 28px rgba(0, 0, 0, 0.12);
`,"Shadow Stroke":`
  box-shadow: inset 0px -1px 0px #D6D8DD;
`},m2={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},p1={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(l,a)=>`Page ${l} of ${a}`,pageSizeSelectLabel:(l,a)=>`Entries ${l} out of ${a}`,itemRangeText:(l,a,t)=>`${l}–${a}  entries out of ${t}`,pageRangeText:l=>`from ${l} ${l===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(l,a,t)=>`${l}–${a} entries out of ${t}`},progressStepper:{renderNextStepName:l=>`Next - ${l}`,stepName:["step","steps"],progressText:(l,a,t)=>`${l} from ${a} ${t}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"}},u2={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(l,a)=>`Страница ${l} из ${a}`,pageSizeSelectLabel:(l,a)=>`Записей ${l} из ${a}`,itemRangeText:(l,a,t)=>`${l}–${a} записей из ${t}`,pageRangeText:l=>`из ${l} ${l===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(l,a,t)=>`${l}–${a} записей из ${t}`},progressStepper:{renderNextStepName:l=>`Далее - ${l}`,stepName:["шаг","шагов"],progressText:(l,a,t)=>`${l} из ${a} ${t}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"}},en:p1,"en-US":{...p1,firstDayOfWeek:0}},p2={color:f2,shadow:g2,zIndex:m2,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:u2};function w2(l){switch(l.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}const x="'VTB Group UI', sans-serif",F0={"Main/XXL":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 42px;
    line-height: 52px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XL":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 36px;
    line-height: 44px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/L":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/M":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 28px;
    line-height: 36px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/S":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 20px;
    line-height: 28px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XS-bold":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XS":M`
    font-family: ${x};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/L-bold":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/L":M`
    font-family: ${x};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/M":M`
    font-family: ${x};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/S":M`
    font-family: ${x};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/S-bold":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/XS":M`
    font-family: ${x};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/M":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/S":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Caption/XS":M`
    font-family: ${x};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/HL1":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 72px;
    line-height: 80px;
    /* or 111% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/HL2":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 56px;
    line-height: 64px;
    /* or 114% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/HL3":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 48px;
    line-height: 56px;
    /* or 117% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H1":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 40px;
    line-height: 48px;
    /* or 120% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H2":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 34px;
    line-height: 40px;
    /* or 118% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H3":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 28px;
    line-height: 36px;
    /* or 129% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H4":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H5":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 20px;
    line-height: 28px;
    /* or 140% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H6":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Subtitle/Subtitle 1":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Subtitle/Subtitle 2":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Subtitle/Subtitle 3":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 550;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 1 Long":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 1 Short":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* or 125% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 2 Long":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 2 Short":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* or 114% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/Button 1":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/Button 2":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Caption/Caption 1":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Caption/Caption 2":M`
    font-family: ${x};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    /* or 120% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `};function N1(...l){return a=>{l.forEach(t=>{t&&(typeof t=="function"?t(a):t.current=a)})}}const Z2=()=>{let l=0;const a=document.createElement("div");return a.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,a.style.overflow="scroll",a.style.fontSize="14px",a.style.height="50px",a.style.maxHeight="50px",a.style.width="100px",a.style.position="absolute",a.style.top="-100000px",a.style.left="-100000px",document.body.appendChild(a),l=a.offsetWidth-a.clientWidth,document.body.removeChild(a),l||16},M2=["bottom","height","left","right","top","width"];function x2(l,a){const t={};return{observe(){t.rafId&&cancelAnimationFrame(t.rafId);const i=()=>{if(t.isObserving){const{bottom:n,height:s,left:v,right:f,top:g,width:h,x:c,y:o}=l.getBoundingClientRect(),r={bottom:n,height:s,left:v,right:f,top:g,width:h,x:c||v,y:o||g};((d={},u={})=>M2.some(S=>d[S]!==u[S]))(r,t.rect)&&(t.rect=r,a(t.rect)),t.rafId=requestAnimationFrame(i)}};t.rafId=requestAnimationFrame(i),t.isObserving=!0},unobserve(){t.rafId&&cancelAnimationFrame(t.rafId),t.isObserving&&(t.isObserving=!1)}}}const y2=C.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: ${({theme:l})=>l.zIndex.dropdown};
`,E2=({targetRef:l,targetElement:a,rootRef:t,fullContainerWidth:i,...n})=>{const s=e.useRef(null);return e.useEffect(()=>{const v=s.current,f=a??(l==null?void 0:l.current);if(v&&f){const g=x2(f,h=>{if(h){const{x:c,y:o,height:r,width:d}=h,{style:u}=v;u.top=`${o}px`,u.left=i?"0px":`${c}px`,u.height=`${r}px`,u.width=i?"100%":`${d}px`}});return g.observe(),()=>{g.unobserve()}}},[l,a,i]),t3.createPortal(m.jsx(y2,{ref:s,...n}),(t==null?void 0:t.current)||document.body)},_2=C.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,S2=C.div`
  box-sizing: border-box;
  background-color: ${({theme:l})=>l.color["Neutral/Neutral 80"]};
  ${F0["Body/Body 2 Short"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 00"]};
  border-radius: ${l=>w2(l.theme.shape)};
  ${l=>l.theme.shadow["Shadow 04"]}
  padding: ${"4px 8px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,H2=C.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,b2=C(E2)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:l})=>l?`flex-direction: ${l};`:""}
  z-index: ${({theme:l})=>l.zIndex.tooltip};
`,F=8;function k2(l,a,t,i){const n=l.getBoundingClientRect(),s=a.getBoundingClientRect(),v=Object.entries(function(h){return{bottom:{check:(c,o)=>{const r=window.innerHeight-c.bottom-h>F+o.height,d=c.left+c.width/2>o.width/2,u=window.innerWidth-c.right-h+c.width/2>o.width/2;return r&&d&&u}},top:{check:(c,o)=>{const r=c.top>F+o.height,d=c.left+c.width/2>o.width/2,u=window.innerWidth-c.right-h+c.width/2>o.width/2;return r&&d&&u}},left:{check:(c,o)=>{const r=c.left>F+o.width,d=c.top>(o.height-c.height)/2,u=window.innerHeight-c.bottom-h>(o.height-c.height)/2;return r&&u&&d}},right:{check:(c,o)=>{const r=window.innerWidth-c.right-h>F+o.width,d=c.top>(o.height-c.height)/2,u=window.innerHeight-c.bottom-h>(o.height-c.height)/2;return r&&u&&d}},bottomRight:{check:(c,o)=>{const r=window.innerHeight-c.bottom-h>F+o.height,d=window.innerWidth-c.left-h>o.width;return r&&d}},bottomLeft:{check:(c,o)=>{const r=window.innerHeight-c.bottom-h>F+o.height,d=c.right>o.width;return r&&d}},topRight:{check:(c,o)=>{const r=c.top>F+o.height,d=window.innerWidth-c.left-h>o.width;return r&&d}},topLeft:{check:(c,o)=>{const r=c.top>F+o.height,d=c.right>o.width;return r&&d}},leftBottom:{check:(c,o)=>{const r=c.left>F+o.width,d=window.innerHeight-c.top-h>o.height;return r&&d}},leftTop:{check:(c,o)=>{const r=c.left>F+o.width,d=c.bottom>o.height;return r&&d}},rightBottom:{check:(c,o)=>{const r=window.innerWidth-c.right-h>F+o.width,d=window.innerHeight-c.top-h>o.height;return r&&d}},rightTop:{check:(c,o)=>{const r=window.innerWidth-c.right-h>F+o.width,d=c.bottom>o.height;return r&&d}},bottomPageCenter:{check:(c,o)=>{const r=window.innerHeight-c.bottom-h>F+o.height,d=window.innerWidth-h>=o.width;return r&&d}},topPageCenter:{check:(c,o)=>{const r=c.top>F+o.height,d=window.innerWidth-h>=o.width;return r&&d}}}}(t)),f=i?v.filter(h=>h[0].includes(i)&&h[1].check(n,s)):v.filter(h=>h[1].check(n,s)),g=i||"bottom";return f.length?f[0][0]:g}const j1=e.createContext({}),V2=({rootRef:l,...a})=>{const[t,i]=e.useState([]),[n,s]=e.useState(void 0),v=e.useCallback(o=>{s(o)},[]),f=e.useCallback(o=>{s(r=>r===o?void 0:r)},[]),g=e.useCallback(o=>{i(r=>{const d=r.indexOf(o);return d>-1?r.slice(0,d):r})},[]),h=e.useCallback(o=>{i(r=>[...r,o])},[]),c=e.useMemo(()=>({addDropdown:h,removeDropdown:g,dropdowns:t,rootRef:l,activateMenu:v,deactivateMenu:f,currentActiveMenu:n}),[h,g,t,l,v,f,n]);return m.jsx(j1.Provider,{value:c,children:a.children})},B2=1500,$1=e.forwardRef(({renderContent:l,targetRef:a,targetElement:t,tooltipPosition:i,...n},s)=>{const v=e.useRef(null),f=e.useRef(0),{rootRef:g}=e.useContext(j1),h=e.useMemo(()=>!l()&&l()!==0,[l]),[c,o]=e.useState(""),[r,d]=e.useState(!1),[u,S]=e.useState({});return e.useEffect(()=>{(k=>{const _=t??(a==null?void 0:a.current);if(_&&v.current){const p=k2(_,v.current,k,i),Z=v.current;switch(p){case"leftBottom":case"leftTop":case"left":o("row-reverse"),d(!1),Z.style.margin="0 8px 0 0",Z.style.alignSelf=p==="leftBottom"?"flex-start":p==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":o("row"),d(!1),Z.style.margin="0 0 0 8px",Z.style.alignSelf=p==="rightBottom"?"flex-start":p==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":o("column-reverse"),d(p==="topPageCenter"),Z.style.margin="0 0 8px 0",Z.style.alignSelf=p==="topLeft"?"flex-end":p==="topRight"?"flex-start":"center";break;default:o("column"),d(p==="bottomPageCenter"),Z.style.margin="8px 0 0 0",Z.style.alignSelf=p==="bottomLeft"?"flex-end":p==="bottomRight"?"flex-start":"center"}}})(Z2())},[l(),a,t,i,u]),e.useLayoutEffect(()=>{if(v.current&&!h){const k=new ResizeObserver(_=>{_.forEach(p=>{f.current===0?f.current=p.contentRect.height:S({})})});return k.observe(v.current),()=>{k.disconnect()}}},[h]),e.useEffect(()=>{v.current&&!h&&(v.current.style.opacity="1")},[h]),h?null:m.jsxs(b2,{targetElement:t??(a==null?void 0:a.current),rootRef:g,$flexDirection:c,fullContainerWidth:r,children:[m.jsx(H2,{}),m.jsx(_2,{ref:N1(s,v),children:m.jsx(S2,{role:"tooltip",...n,children:l()})})]})});$1.displayName="Tooltip";function A2(l){const a=t=>{const{forwardedRef:i,renderContent:n,container:s,withDelay:v,tooltipRef:f,tooltipPosition:g,...h}=t,c=!n()&&n()!==0,o=e.useRef(null),[r,d]=e.useState(!1),[u,S]=e.useState(null),[k,_]=e.useState();return e.useEffect(()=>{function p(){_(window.setTimeout(()=>d(!0),v?B2:0))}function Z(){clearTimeout(k),d(!1)}if(u)return u.addEventListener("mouseenter",p),u.addEventListener("focus",p),u.addEventListener("mouseleave",Z),u.addEventListener("blur",Z),()=>{k&&clearTimeout(k),u.removeEventListener("mouseenter",p),u.removeEventListener("focus",p),u.removeEventListener("mouseleave",Z),u.removeEventListener("blur",Z)}},[u,_,d,k]),m.jsxs(m.Fragment,{children:[m.jsx(l,{...h,ref:N1(i,o,S)}),r&&!c&&m.jsx($1,{targetElement:o.current,renderContent:n,container:s,tooltipPosition:g,ref:f})]})};return e.forwardRef((t,i)=>m.jsx(a,{forwardedRef:i,...t}))}const R2=""+new URL("VTBGroupUI-SemiBold-857165e0.ttf",import.meta.url).href,O2=""+new URL("VTBGroupUI-Medium-2005d97c.otf",import.meta.url).href,C2=""+new URL("VTBGroupUI-Regular-6e523012.otf",import.meta.url).href,F2=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${R2}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${O2}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${C2}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
  ${F0["Main/XS-bold"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
  margin-bottom: 20px;
`,cg=C.div`
  ${F0["Additional/M"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,v0=C.code`
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,c0=C.pre`
  border: 1px dashed gray;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({theme:l})=>l.color["Neutral/Neutral 05"]};
  overflow-x: auto;
`,dg=C.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  background: ${({theme:l})=>l.color["Neutral/Neutral 05"]};
  padding: 32px 0;
  border-radius: 8px;
  & svg {
    flex-shrink: 0;
    *[fill^='#62'],
    *[fill^='#2B'] {
      fill: ${({theme:l})=>l.color["Neutral/Neutral 50"]};
    }
  }
  justify-content: center;
`,hg=C.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,rg=C.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
`,fg=C.div`
  margin-top: 16px;
  ${F0["Caption/XS"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 50"]};
  display: flex;
  gap: 8px;
`,gg=C.div`
  display: inline-flex;
  cursor: pointer;
`,mg=e.forwardRef(({text:l},a)=>{const t=()=>{const i=document.createElement("textarea");i.value=l,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)};return m.jsx(gg,{ref:a,children:m.jsx(K1,{width:16,height:16,onClick:t})})}),ug=A2(mg),pg=({label:l,children:a})=>m.jsxs(hg,{children:[m.jsx(q1,{children:l}),m.jsx(dg,{children:a})]}),D=(l,a)=>J2[l].map(t=>{const i=`${vg(l)}${t.name}`;return{...t,reactComponentName:i,Component:a[i]}}),wg=[{label:"Cards",value:"cards",icons:D("cards",h6)},{label:"Category",value:"category",icons:D("category",P7)},{label:"Communication",value:"communication",icons:D("communication",ll)},{label:"Documents",value:"documents",icons:D("documents",ca)},{label:"Finance",value:"finance",icons:D("finance",r9)},{label:"Flags",value:"flags",icons:D("flags",$s)},{label:"Payment",value:"payment",icons:D("payment",Ho)},{label:"Redact",value:"redact",icons:D("redact",Ov)},{label:"Location",value:"location",icons:D("location",Ys)},{label:"Security",value:"security",icons:D("security",ec)},{label:"Service",value:"service",icons:D("service",dd)},{label:"System",value:"system",icons:D("system",og)},{label:"Bank",value:"bank",icons:D("bank",l6)}],bg={title:"Icons/Icons",decorators:[l=>m.jsx("div",{style:{padding:24},children:m.jsx(h2,{theme:p2,children:m.jsxs(V2,{children:[m.jsx(D2,{}),m.jsx(l,{})]})})})],parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585"}}},Zg=()=>m.jsxs(m.Fragment,{children:[m.jsx(q1,{style:{fontWeight:400},children:"Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро передавать смысл отображаемой информации или привлекать к ней дополнительное внимание."}),wg.map(({label:l,icons:a})=>m.jsx(pg,{label:l,children:a.map(({Component:t,name:i,path:n},s)=>m.jsxs(rg,{children:[m.jsx(t,{width:24,height:24}),m.jsxs(fg,{children:[i," ",m.jsx(ug,{renderContent:()=>"Копировать пример использования",text:`import { ReactComponent as ${i} } from '@admiral-ds/icons/${n}';`})]})]},i+s))},l))]}),Mg=`
  config.module.rules.unshift({
    test: /\\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
  });
  `,xg=`
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
  `,yg=`
  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  `,Eg=`
  declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
  
    export { ReactComponent };
    export default content;
  }
  `,_g=`
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
  }
  `,Sg=()=>m.jsxs(cg,{style:{fontWeight:400},children:["В наших компонентах используется пакет иконок Admiral 2.0.",m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585",children:"Макеты в Figma"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.npmjs.com/package/@admiral-ds/icons",children:"Пакет в npm"})})]}),"1) В проекте может понадобиться настройка загрузчиков svg-иконок. Например, в create-react-app уже изначально для webpack настроены загрузчики svg иконок. В нашем storybook настройки webpack для работы с иконками выглядят так:",m.jsx(c0,{children:m.jsx(v0,{children:Mg})}),"Вот несколько полезных ссылок, касающихся настройки проектов для работы с иконками:",m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://react-svgr.com/docs/getting-started/",children:"Svgr - getting started"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.npmjs.com/package/@svgr/webpack",children:"Svgr - npm"})})]}),"2) Также в проектах, использующих TypeScript, при работе с иконками может понадобиться настройка тайпинга (создание файла деклараций custom.d.ts и включение его в tsconfig.json). В нашем проекте для этого используется следующий файл svg.d.ts:",m.jsx(c0,{children:m.jsx(v0,{children:xg})}),"Вот еще несколько способов написания подобного файла (примеры от пользователей библиотеки):",m.jsx(c0,{children:m.jsx(v0,{children:yg})}),m.jsx(c0,{children:m.jsx(v0,{children:Eg})}),m.jsx(c0,{children:m.jsx(v0,{children:_g})}),"Ряд полезных ссылок по данной теме:",m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://webpack.js.org/guides/typescript/#importing-other-assets",children:"Webpack - Importing Other Assets"})}),m.jsx("li",{children:m.jsx("a",{href:"https://duncanleung.com/typescript-module-declearation-svg-img-assets/",children:"TypeScript Module Declaration for SVG Assets"})})]})]}),Z0={render:Zg,args:{},name:"Список иконок"},M0={render:Sg,args:{},name:"Использование иконок"};var w1,Z1,M1;Z0.parameters={...Z0.parameters,docs:{...(w1=Z0.parameters)==null?void 0:w1.docs,source:{originalSource:`{
  render: Template,
  args: {},
  name: 'Список иконок'
}`,...(M1=(Z1=Z0.parameters)==null?void 0:Z1.docs)==null?void 0:M1.source}}};var x1,y1,E1;M0.parameters={...M0.parameters,docs:{...(x1=M0.parameters)==null?void 0:x1.docs,source:{originalSource:`{
  render: Template2,
  args: {},
  name: 'Использование иконок'
}`,...(E1=(y1=M0.parameters)==null?void 0:y1.docs)==null?void 0:E1.source}}};const kg=["Icons","Loaders"];export{Z0 as Icons,M0 as Loaders,kg as __namedExportsOrder,bg as default};
//# sourceMappingURL=Icons.stories-c7a39b4f.js.map