import{r as e,R as q}from"./index-1b03fe98.js";import{r as i3}from"./index-6fd5a17b.js";var H1={exports:{}},O0={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n3=e,s3=Symbol.for("react.element"),o3=Symbol.for("react.fragment"),v3=Object.prototype.hasOwnProperty,c3=n3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d3={key:!0,ref:!0,__self:!0,__source:!0};function b1(l,a,t){var i,n={},s=null,c=null;t!==void 0&&(s=""+t),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(c=a.ref);for(i in a)v3.call(a,i)&&!d3.hasOwnProperty(i)&&(n[i]=a[i]);if(l&&l.defaultProps)for(i in a=l.defaultProps,a)n[i]===void 0&&(n[i]=a[i]);return{$$typeof:s3,type:l,key:s,ref:c,props:n,_owner:c3.current}}O0.Fragment=o3;O0.jsx=b1;O0.jsxs=b1;H1.exports=O0;var m=H1.exports,C=function(){return C=Object.assign||function(a){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a},C.apply(this,arguments)};function B0(l,a,t){if(t||arguments.length===2)for(var i=0,n=a.length,s;i<n;i++)(s||!(i in a))&&(s||(s=Array.prototype.slice.call(a,0,i)),s[i]=a[i]);return l.concat(s||Array.prototype.slice.call(a))}var B="-ms-",r0="-moz-",S="-webkit-",k1="comm",C0="rule",Y0="decl",h3="@import",B1="@keyframes",r3="@layer",f3=Math.abs,Q0=String.fromCharCode,N0=Object.assign;function g3(l,a){return O(l,0)^45?(((a<<2^O(l,0))<<2^O(l,1))<<2^O(l,2))<<2^O(l,3):0}function V1(l){return l.trim()}function P(l,a){return(l=a.exec(l))?l[0]:l}function w(l,a,t){return l.replace(a,t)}function _0(l,a){return l.indexOf(a)}function O(l,a){return l.charCodeAt(a)|0}function e0(l,a,t){return l.slice(a,t)}function T(l){return l.length}function A1(l){return l.length}function h0(l,a){return a.push(l),l}function m3(l,a){return l.map(a).join("")}function i1(l,a){return l.filter(function(t){return!P(t,a)})}var D0=1,l0=1,R1=0,U=0,A=0,i0="";function F0(l,a,t,i,n,s,c,f){return{value:l,root:a,parent:t,type:i,props:n,children:s,line:D0,column:l0,length:c,return:"",siblings:f}}function W(l,a){return N0(F0("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},a)}function Y(l){for(;l.root;)l=W(l.root,{children:[l]});h0(l,l.siblings)}function u3(){return A}function p3(){return A=U>0?O(i0,--U):0,l0--,A===10&&(l0=1,D0--),A}function z(){return A=U<R1?O(i0,U++):0,l0++,A===10&&(l0=1,D0++),A}function $(){return O(i0,U)}function S0(){return U}function L0(l,a){return e0(i0,l,a)}function j0(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function w3(l){return D0=l0=1,R1=T(i0=l),U=0,[]}function M3(l){return i0="",l}function I0(l){return V1(L0(U-1,$0(l===91?l+2:l===40?l+1:l)))}function x3(l){for(;(A=$())&&A<33;)z();return j0(l)>2||j0(A)>3?"":" "}function y3(l,a){for(;--a&&z()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return L0(l,S0()+(a<6&&$()==32&&z()==32))}function $0(l){for(;z();)switch(A){case l:return U;case 34:case 39:l!==34&&l!==39&&$0(A);break;case 40:l===41&&$0(l);break;case 92:z();break}return U}function E3(l,a){for(;z()&&l+A!==47+10;)if(l+A===42+42&&$()===47)break;return"/*"+L0(a,U-1)+"*"+Q0(l===47?l:z())}function _3(l){for(;!j0($());)z();return L0(l,U)}function S3(l){return M3(H0("",null,null,null,[""],l=w3(l),0,[0],l))}function H0(l,a,t,i,n,s,c,f,g){for(var r=0,o=0,v=c,d=0,h=0,u=0,H=1,V=1,b=1,E=0,p="",_=n,R=s,k=i,x=p;V;)switch(u=E,E=z()){case 40:if(u!=108&&O(x,v-1)==58){_0(x+=w(I0(E),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:x+=I0(E);break;case 9:case 10:case 13:case 32:x+=x3(u);break;case 92:x+=y3(S0()-1,7);continue;case 47:switch($()){case 42:case 47:h0(H3(E3(z(),S0()),a,t,g),g);break;default:x+="/"}break;case 123*H:f[r++]=T(x)*b;case 125*H:case 59:case 0:switch(E){case 0:case 125:V=0;case 59+o:b==-1&&(x=w(x,/\f/g,"")),h>0&&T(x)-v&&h0(h>32?s1(x+";",i,t,v-1,g):s1(w(x," ","")+";",i,t,v-2,g),g);break;case 59:x+=";";default:if(h0(k=n1(x,a,t,r,o,n,f,p,_=[],R=[],v,s),s),E===123)if(o===0)H0(x,a,k,k,_,s,v,f,R);else switch(d===99&&O(x,3)===110?100:d){case 100:case 108:case 109:case 115:H0(l,k,k,i&&h0(n1(l,k,k,0,0,n,f,p,n,_=[],v,R),R),n,R,v,f,i?_:R);break;default:H0(x,k,k,k,[""],R,0,f,R)}}r=o=h=0,H=b=1,p=x="",v=c;break;case 58:v=1+T(x),h=u;default:if(H<1){if(E==123)--H;else if(E==125&&H++==0&&p3()==125)continue}switch(x+=Q0(E),E*H){case 38:b=o>0?1:(x+="\f",-1);break;case 44:f[r++]=(T(x)-1)*b,b=1;break;case 64:$()===45&&(x+=I0(z())),d=$(),o=v=T(p=x+=_3(S0())),E++;break;case 45:u===45&&T(x)==2&&(H=0)}}return s}function n1(l,a,t,i,n,s,c,f,g,r,o,v){for(var d=n-1,h=n===0?s:[""],u=A1(h),H=0,V=0,b=0;H<i;++H)for(var E=0,p=e0(l,d+1,d=f3(V=c[H])),_=l;E<u;++E)(_=V1(V>0?h[E]+" "+p:w(p,/&\f/g,h[E])))&&(g[b++]=_);return F0(l,a,t,n===0?C0:f,g,r,o,v)}function H3(l,a,t,i){return F0(l,a,t,k1,Q0(u3()),e0(l,2,-2),0,i)}function s1(l,a,t,i,n){return F0(l,a,t,Y0,e0(l,0,i),e0(l,i+1,-1),i,n)}function O1(l,a,t){switch(g3(l,a)){case 5103:return S+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+l+l;case 4789:return r0+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return S+l+r0+l+B+l+l;case 5936:switch(O(l,a+11)){case 114:return S+l+B+w(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return S+l+B+w(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return S+l+B+w(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return S+l+B+l+l;case 6165:return S+l+B+"flex-"+l+l;case 5187:return S+l+w(l,/(\w+).+(:[^]+)/,S+"box-$1$2"+B+"flex-$1$2")+l;case 5443:return S+l+B+"flex-item-"+w(l,/flex-|-self/g,"")+(P(l,/flex-|baseline/)?"":B+"grid-row-"+w(l,/flex-|-self/g,""))+l;case 4675:return S+l+B+"flex-line-pack"+w(l,/align-content|flex-|-self/g,"")+l;case 5548:return S+l+B+w(l,"shrink","negative")+l;case 5292:return S+l+B+w(l,"basis","preferred-size")+l;case 6060:return S+"box-"+w(l,"-grow","")+S+l+B+w(l,"grow","positive")+l;case 4554:return S+w(l,/([^-])(transform)/g,"$1"+S+"$2")+l;case 6187:return w(w(w(l,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),l,"")+l;case 5495:case 3959:return w(l,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return w(w(l,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+l+l;case 4200:if(!P(l,/flex-|baseline/))return B+"grid-column-align"+e0(l,a)+l;break;case 2592:case 3360:return B+w(l,"template-","")+l;case 4384:case 3616:return t&&t.some(function(i,n){return a=n,P(i.props,/grid-\w+-end/)})?~_0(l+(t=t[a].value),"span")?l:B+w(l,"-start","")+l+B+"grid-row-span:"+(~_0(t,"span")?P(t,/\d+/):+P(t,/\d+/)-+P(l,/\d+/))+";":B+w(l,"-start","")+l;case 4896:case 4128:return t&&t.some(function(i){return P(i.props,/grid-\w+-start/)})?l:B+w(w(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return w(l,/(.+)-inline(.+)/,S+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(l)-1-a>6)switch(O(l,a+1)){case 109:if(O(l,a+4)!==45)break;case 102:return w(l,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+r0+(O(l,a+3)==108?"$3":"$2-$3"))+l;case 115:return~_0(l,"stretch")?O1(w(l,"stretch","fill-available"),a,t)+l:l}break;case 5152:case 5920:return w(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,n,s,c,f,g,r){return B+n+":"+s+r+(c?B+n+"-span:"+(f?g:+g-+s)+r:"")+l});case 4949:if(O(l,a+6)===121)return w(l,":",":"+S)+l;break;case 6444:switch(O(l,O(l,14)===45?18:11)){case 120:return w(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+S+(O(l,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+B+"$2box$3")+l;case 100:return w(l,":",":"+B)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(l,"scroll-","scroll-snap-")+l}return l}function V0(l,a){for(var t="",i=0;i<l.length;i++)t+=a(l[i],i,l,a)||"";return t}function b3(l,a,t,i){switch(l.type){case r3:if(l.children.length)break;case h3:case Y0:return l.return=l.return||l.value;case k1:return"";case B1:return l.return=l.value+"{"+V0(l.children,i)+"}";case C0:if(!T(l.value=l.props.join(",")))return""}return T(t=V0(l.children,i))?l.return=l.value+"{"+t+"}":""}function k3(l){var a=A1(l);return function(t,i,n,s){for(var c="",f=0;f<a;f++)c+=l[f](t,i,n,s)||"";return c}}function B3(l){return function(a){a.root||(a=a.return)&&l(a)}}function V3(l,a,t,i){if(l.length>-1&&!l.return)switch(l.type){case Y0:l.return=O1(l.value,l.length,t);return;case B1:return V0([W(l,{value:w(l.value,"@","@"+S)})],i);case C0:if(l.length)return m3(t=l.props,function(n){switch(P(n,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(W(l,{props:[w(n,/:(read-\w+)/,":"+r0+"$1")]})),Y(W(l,{props:[n]})),N0(l,{props:i1(t,i)});break;case"::placeholder":Y(W(l,{props:[w(n,/:(plac\w+)/,":"+S+"input-$1")]})),Y(W(l,{props:[w(n,/:(plac\w+)/,":"+r0+"$1")]})),Y(W(l,{props:[w(n,/:(plac\w+)/,B+"input-$1")]})),Y(W(l,{props:[n]})),N0(l,{props:i1(t,i)});break}return""})}}var A3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a0=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",e1=typeof window<"u"&&"HTMLElement"in window,R3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),U0=Object.freeze([]),t0=Object.freeze({});function O3(l,a,t){return t===void 0&&(t=t0),l.theme!==t.theme&&l.theme||a||t.theme}var C1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D3=/(^-|-$)/g;function o1(l){return l.replace(C3,"-").replace(D3,"")}var F3=/(a)(d)/gi,v1=function(l){return String.fromCharCode(l+(l>25?39:97))};function K0(l){var a,t="";for(a=Math.abs(l);a>52;a=a/52|0)t=v1(a%52)+t;return(v1(a%52)+t).replace(F3,"$1-$2")}var G0,Q=function(l,a){for(var t=a.length;t;)l=33*l^a.charCodeAt(--t);return l},D1=function(l){return Q(5381,l)};function L3(l){return K0(D1(l)>>>0)}function U3(l){return l.displayName||l.name||"Component"}function Z0(l){return typeof l=="string"&&!0}var F1=typeof Symbol=="function"&&Symbol.for,L1=F1?Symbol.for("react.memo"):60115,z3=F1?Symbol.for("react.forward_ref"):60112,T3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},P3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I3=((G0={})[z3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G0[L1]=U1,G0);function c1(l){return("type"in(a=l)&&a.type.$$typeof)===L1?U1:"$$typeof"in l?I3[l.$$typeof]:T3;var a}var G3=Object.defineProperty,Z3=Object.getOwnPropertyNames,d1=Object.getOwnPropertySymbols,W3=Object.getOwnPropertyDescriptor,N3=Object.getPrototypeOf,h1=Object.prototype;function z1(l,a,t){if(typeof a!="string"){if(h1){var i=N3(a);i&&i!==h1&&z1(l,i,t)}var n=Z3(a);d1&&(n=n.concat(d1(a)));for(var s=c1(l),c=c1(a),f=0;f<n.length;++f){var g=n[f];if(!(g in P3||t&&t[g]||c&&g in c||s&&g in s)){var r=W3(a,g);try{G3(l,g,r)}catch{}}}}return l}function J(l){return typeof l=="function"}function l1(l){return typeof l=="object"&&"styledComponentId"in l}function j(l,a){return l&&a?"".concat(l," ").concat(a):l||a||""}function r1(l,a){if(l.length===0)return"";for(var t=l[0],i=1;i<l.length;i++)t+=a?a+l[i]:l[i];return t}function f0(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function q0(l,a,t){if(t===void 0&&(t=!1),!t&&!f0(l)&&!Array.isArray(l))return a;if(Array.isArray(a))for(var i=0;i<a.length;i++)l[i]=q0(l[i],a[i]);else if(f0(a))for(var i in a)l[i]=q0(l[i],a[i]);return l}function a1(l,a){Object.defineProperty(l,"toString",{value:a})}function X(l){for(var a=[],t=1;t<arguments.length;t++)a[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var j3=function(){function l(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return l.prototype.indexOfGroup=function(a){for(var t=0,i=0;i<a;i++)t+=this.groupSizes[i];return t},l.prototype.insertRules=function(a,t){if(a>=this.groupSizes.length){for(var i=this.groupSizes,n=i.length,s=n;a>=s;)if((s<<=1)<0)throw X(16,"".concat(a));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var c=n;c<s;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(a+1),g=(c=0,t.length);c<g;c++)this.tag.insertRule(f,t[c])&&(this.groupSizes[a]++,f++)},l.prototype.clearGroup=function(a){if(a<this.length){var t=this.groupSizes[a],i=this.indexOfGroup(a),n=i+t;this.groupSizes[a]=0;for(var s=i;s<n;s++)this.tag.deleteRule(i)}},l.prototype.getGroup=function(a){var t="";if(a>=this.length||this.groupSizes[a]===0)return t;for(var i=this.groupSizes[a],n=this.indexOfGroup(a),s=n+i,c=n;c<s;c++)t+="".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);return t},l}(),b0=new Map,A0=new Map,k0=1,x0=function(l){if(b0.has(l))return b0.get(l);for(;A0.has(k0);)k0++;var a=k0++;return b0.set(l,a),A0.set(a,l),a},$3=function(l,a){k0=a+1,b0.set(l,a),A0.set(a,l)},K3="style[".concat(a0,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),q3=new RegExp("^".concat(a0,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),J3=function(l,a,t){for(var i,n=t.split(","),s=0,c=n.length;s<c;s++)(i=n[s])&&l.registerName(a,i)},X3=function(l,a){for(var t,i=((t=a.textContent)!==null&&t!==void 0?t:"").split(`/*!sc*/
`),n=[],s=0,c=i.length;s<c;s++){var f=i[s].trim();if(f){var g=f.match(q3);if(g){var r=0|parseInt(g[1],10),o=g[2];r!==0&&($3(o,r),J3(l,o,g[3]),l.getTag().insertRules(r,n)),n.length=0}else n.push(f)}}};function Y3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var T1=function(l){var a=document.head,t=l||a,i=document.createElement("style"),n=function(f){var g=Array.from(f.querySelectorAll("style[".concat(a0,"]")));return g[g.length-1]}(t),s=n!==void 0?n.nextSibling:null;i.setAttribute(a0,"active"),i.setAttribute("data-styled-version","6.1.1");var c=Y3();return c&&i.setAttribute("nonce",c),t.insertBefore(i,s),i},Q3=function(){function l(a){this.element=T1(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,n=0,s=i.length;n<s;n++){var c=i[n];if(c.ownerNode===t)return c}throw X(17)}(this.element),this.length=0}return l.prototype.insertRule=function(a,t){try{return this.sheet.insertRule(t,a),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},l.prototype.getRule=function(a){var t=this.sheet.cssRules[a];return t&&t.cssText?t.cssText:""},l}(),e2=function(){function l(a){this.element=T1(a),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(a,t){if(a<=this.length&&a>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[a]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},l.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},l}(),l2=function(){function l(a){this.rules=[],this.length=0}return l.prototype.insertRule=function(a,t){return a<=this.length&&(this.rules.splice(a,0,t),this.length++,!0)},l.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},l.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},l}(),f1=e1,a2={isServer:!e1,useCSSOMInjection:!R3},P1=function(){function l(a,t,i){a===void 0&&(a=t0),t===void 0&&(t={});var n=this;this.options=C(C({},a2),a),this.gs=t,this.names=new Map(i),this.server=!!a.isServer,!this.server&&e1&&f1&&(f1=!1,function(s){for(var c=document.querySelectorAll(K3),f=0,g=c.length;f<g;f++){var r=c[f];r&&r.getAttribute(a0)!=="active"&&(X3(s,r),r.parentNode&&r.parentNode.removeChild(r))}}(this)),a1(this,function(){return function(s){for(var c=s.getTag(),f=c.length,g="",r=function(v){var d=function(b){return A0.get(b)}(v);if(d===void 0)return"continue";var h=s.names.get(d),u=c.getGroup(v);if(h===void 0||u.length===0)return"continue";var H="".concat(a0,".g").concat(v,'[id="').concat(d,'"]'),V="";h!==void 0&&h.forEach(function(b){b.length>0&&(V+="".concat(b,","))}),g+="".concat(u).concat(H,'{content:"').concat(V,'"}').concat(`/*!sc*/
`)},o=0;o<f;o++)r(o);return g}(n)})}return l.registerId=function(a){return x0(a)},l.prototype.reconstructWithOptions=function(a,t){return t===void 0&&(t=!0),new l(C(C({},this.options),a),this.gs,t&&this.names||void 0)},l.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(a=function(t){var i=t.useCSSOMInjection,n=t.target;return t.isServer?new l2(n):i?new Q3(n):new e2(n)}(this.options),new j3(a)));var a},l.prototype.hasNameForId=function(a,t){return this.names.has(a)&&this.names.get(a).has(t)},l.prototype.registerName=function(a,t){if(x0(a),this.names.has(a))this.names.get(a).add(t);else{var i=new Set;i.add(t),this.names.set(a,i)}},l.prototype.insertRules=function(a,t,i){this.registerName(a,t),this.getTag().insertRules(x0(a),i)},l.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},l.prototype.clearRules=function(a){this.getTag().clearGroup(x0(a)),this.clearNames(a)},l.prototype.clearTag=function(){this.tag=void 0},l}(),t2=/&/g,i2=/^\s*\/\/.*$/gm;function I1(l,a){return l.map(function(t){return t.type==="rule"&&(t.value="".concat(a," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(a," ")),t.props=t.props.map(function(i){return"".concat(a," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=I1(t.children,a)),t})}function n2(l){var a,t,i,n=l===void 0?t0:l,s=n.options,c=s===void 0?t0:s,f=n.plugins,g=f===void 0?U0:f,r=function(d,h,u){return u===t||u.startsWith(t)&&u.endsWith(t)&&u.replaceAll(t,"").length>0?".".concat(a):d},o=g.slice();o.push(function(d){d.type===C0&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(t2,t).replace(i,r))}),c.prefix&&o.push(V3),o.push(b3);var v=function(d,h,u,H){h===void 0&&(h=""),u===void 0&&(u=""),H===void 0&&(H="&"),a=H,t=h,i=new RegExp("\\".concat(t,"\\b"),"g");var V=d.replace(i2,""),b=S3(u||h?"".concat(u," ").concat(h," { ").concat(V," }"):V);c.namespace&&(b=I1(b,c.namespace));var E=[];return V0(b,k3(o.concat(B3(function(p){return E.push(p)})))),E};return v.hash=g.length?g.reduce(function(d,h){return h.name||X(15),Q(d,h.name)},5381).toString():"",v}var s2=new P1,J0=n2(),G1=q.createContext({shouldForwardProp:void 0,styleSheet:s2,stylis:J0});G1.Consumer;q.createContext(void 0);function g1(){return e.useContext(G1)}var o2=function(){function l(a,t){var i=this;this.inject=function(n,s){s===void 0&&(s=J0);var c=i.name+s.hash;n.hasNameForId(i.id,c)||n.insertRules(i.id,c,s(i.rules,c,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=t,a1(this,function(){throw X(12,String(i.name))})}return l.prototype.getName=function(a){return a===void 0&&(a=J0),this.name+a.hash},l}(),v2=function(l){return l>="A"&&l<="Z"};function m1(l){for(var a="",t=0;t<l.length;t++){var i=l[t];if(t===1&&i==="-"&&l[0]==="-")return l;v2(i)?a+="-"+i.toLowerCase():a+=i}return a.startsWith("ms-")?"-"+a:a}var Z1=function(l){return l==null||l===!1||l===""},W1=function(l){var a,t,i=[];for(var n in l){var s=l[n];l.hasOwnProperty(n)&&!Z1(s)&&(Array.isArray(s)&&s.isCss||J(s)?i.push("".concat(m1(n),":"),s,";"):f0(s)?i.push.apply(i,B0(B0(["".concat(n," {")],W1(s),!1),["}"],!1)):i.push("".concat(m1(n),": ").concat((a=n,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||a in A3||a.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function K(l,a,t,i){if(Z1(l))return[];if(l1(l))return[".".concat(l.styledComponentId)];if(J(l)){if(!J(s=l)||s.prototype&&s.prototype.isReactComponent||!a)return[l];var n=l(a);return K(n,a,t,i)}var s;return l instanceof o2?t?(l.inject(t,i),[l.getName(i)]):[l]:f0(l)?W1(l):Array.isArray(l)?Array.prototype.concat.apply(U0,l.map(function(c){return K(c,a,t,i)})):[l.toString()]}function c2(l){for(var a=0;a<l.length;a+=1){var t=l[a];if(J(t)&&!l1(t))return!1}return!0}var d2=D1("6.1.1"),h2=function(){function l(a,t,i){this.rules=a,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&c2(a),this.componentId=t,this.baseHash=Q(d2,t),this.baseStyle=i,P1.registerId(t)}return l.prototype.generateAndInjectStyles=function(a,t,i){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=j(n,this.staticRulesId);else{var s=r1(K(this.rules,a,t,i)),c=K0(Q(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,c)){var f=i(s,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,f)}n=j(n,c),this.staticRulesId=c}else{for(var g=Q(this.baseHash,i.hash),r="",o=0;o<this.rules.length;o++){var v=this.rules[o];if(typeof v=="string")r+=v;else if(v){var d=r1(K(v,a,t,i));g=Q(g,d+o),r+=d}}if(r){var h=K0(g>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,i(r,".".concat(h),void 0,this.componentId)),n=j(n,h)}}return n},l}(),R0=q.createContext(void 0);R0.Consumer;function r2(l){var a=q.useContext(R0),t=e.useMemo(function(){return function(i,n){if(!i)throw X(14);if(J(i)){var s=i(n);return s}if(Array.isArray(i)||typeof i!="object")throw X(8);return n?C(C({},n),i):i}(l.theme,a)},[l.theme,a]);return l.children?q.createElement(R0.Provider,{value:t},l.children):null}var W0={};function f2(l,a,t){var i=l1(l),n=l,s=!Z0(l),c=a.attrs,f=c===void 0?U0:c,g=a.componentId,r=g===void 0?function(_,R){var k=typeof _!="string"?"sc":o1(_);W0[k]=(W0[k]||0)+1;var x="".concat(k,"-").concat(L3("6.1.1"+k+W0[k]));return R?"".concat(R,"-").concat(x):x}(a.displayName,a.parentComponentId):g,o=a.displayName,v=o===void 0?function(_){return Z0(_)?"styled.".concat(_):"Styled(".concat(U3(_),")")}(l):o,d=a.displayName&&a.componentId?"".concat(o1(a.displayName),"-").concat(a.componentId):a.componentId||r,h=i&&n.attrs?n.attrs.concat(f).filter(Boolean):f,u=a.shouldForwardProp;if(i&&n.shouldForwardProp){var H=n.shouldForwardProp;if(a.shouldForwardProp){var V=a.shouldForwardProp;u=function(_,R){return H(_,R)&&V(_,R)}}else u=H}var b=new h2(t,d,i?n.componentStyle:void 0);function E(_,R){return function(k,x,n0){var m0=k.attrs,X1=k.componentStyle,Y1=k.defaultProps,Q1=k.foldedComponentIds,e3=k.styledComponentId,l3=k.target,a3=q.useContext(R0),t3=g1(),z0=k.shouldForwardProp||t3.shouldForwardProp,I=function(p0,o0,w0){for(var v0,N=C(C({},o0),{className:void 0,theme:w0}),P0=0;P0<p0.length;P0+=1){var M0=J(v0=p0[P0])?v0(N):v0;for(var Z in M0)N[Z]=Z==="className"?j(N[Z],M0[Z]):Z==="style"?C(C({},N[Z]),M0[Z]):M0[Z]}return o0.className&&(N.className=j(N.className,o0.className)),N}(m0,x,O3(x,a3,Y1)||t0),u0=I.as||l3,s0={};for(var G in I)I[G]===void 0||G[0]==="$"||G==="as"||G==="theme"||(G==="forwardedAs"?s0.as=I.forwardedAs:z0&&!z0(G,u0)||(s0[G]=I[G]));var t1=function(p0,o0){var w0=g1(),v0=p0.generateAndInjectStyles(o0,w0.styleSheet,w0.stylis);return v0}(X1,I),T0=j(Q1,e3);return t1&&(T0+=" "+t1),I.className&&(T0+=" "+I.className),s0[Z0(u0)&&!C1.has(u0)?"class":"className"]=T0,s0.ref=n0,e.createElement(u0,s0)}(p,_,R)}E.displayName=v;var p=q.forwardRef(E);return p.attrs=h,p.componentStyle=b,p.displayName=v,p.shouldForwardProp=u,p.foldedComponentIds=i?j(n.foldedComponentIds,n.styledComponentId):"",p.styledComponentId=d,p.target=i?n.target:l,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=i?function(R){for(var k=[],x=1;x<arguments.length;x++)k[x-1]=arguments[x];for(var n0=0,m0=k;n0<m0.length;n0++)q0(R,m0[n0],!0);return R}({},n.defaultProps,_):_}}),a1(p,function(){return".".concat(p.styledComponentId)}),s&&z1(p,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function u1(l,a){for(var t=[l[0]],i=0,n=a.length;i<n;i+=1)t.push(a[i],l[i+1]);return t}var p1=function(l){return Object.assign(l,{isCss:!0})};function M(l){for(var a=[],t=1;t<arguments.length;t++)a[t-1]=arguments[t];if(J(l)||f0(l)){var i=l;return p1(K(u1(U0,B0([i],a,!0))))}var n=l;return a.length===0&&n.length===1&&typeof n[0]=="string"?K(n):p1(K(u1(n,a)))}function X0(l,a,t){if(t===void 0&&(t=t0),!a)throw X(1,a);var i=function(n){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return l(a,t,M.apply(void 0,B0([n],s,!1)))};return i.attrs=function(n){return X0(l,a,C(C({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return X0(l,a,C(C({},t),n))},i}var N1=function(l){return X0(f2,l)},D=N1;C1.forEach(function(l){D[l]=N1(l)});const g2={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F3F4F6","Neutral/Neutral 10":"#E5E7EB","Neutral/Neutral 20":"#D5D8DE","Neutral/Neutral 30":"#B0B5BD","Neutral/Neutral 40":"#9BA0AA","Neutral/Neutral 50":"#717681","Neutral/Neutral 60":"#646973","Neutral/Neutral 70":"#4F525A","Neutral/Neutral 80":"#35383F","Neutral/Neutral 90":"#23262D","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#121316","Special/Dark Static Neutral 05":"#1C1E22","Special/Dark Static Neutral 10":"#282A2F","Special/Dark Static Neutral 20":"#383C44","Special/Dark Static Neutral 30":"#4E535D","Special/Dark Static Neutral 50":"#7F8692","Special/Dark Static Neutral 70":"#A6ABB4","Special/Dark Static Neutral 80":"#C7CAD1","Special/Dark Static Neutral 90":"#E2E5E9","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#00000066","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},m2={"Shadow 02":`
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
`},u2={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},w1={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(l,a)=>`Page ${l} of ${a}`,pageSizeSelectLabel:(l,a)=>`Entries ${l} out of ${a}`,itemRangeText:(l,a,t)=>`${l}–${a}  entries out of ${t}`,pageRangeText:l=>`from ${l} ${l===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(l,a,t)=>`${l}–${a} entries out of ${t}`},progressStepper:{renderNextStepName:l=>`Next - ${l}`,stepName:["step","steps"],progressText:(l,a,t)=>`${l} from ${a} ${t}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"}},p2={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(l,a)=>`Страница ${l} из ${a}`,pageSizeSelectLabel:(l,a)=>`Записей ${l} из ${a}`,itemRangeText:(l,a,t)=>`${l}–${a} записей из ${t}`,pageRangeText:l=>`из ${l} ${l===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(l,a,t)=>`${l}–${a} записей из ${t}`},progressStepper:{renderNextStepName:l=>`Далее - ${l}`,stepName:["шаг","шагов"],progressText:(l,a,t)=>`${l} из ${a} ${t}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"}},en:w1,"en-US":{...w1,firstDayOfWeek:0}},w2={color:g2,shadow:m2,zIndex:u2,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:p2};function M2(l){switch(l.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}const y="'VTB Group UI', sans-serif",g0={"Main/XXL":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 550;
    font-size: 42px;
    line-height: 52px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XL":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 550;
    font-size: 36px;
    line-height: 44px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/L":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/M":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 550;
    font-size: 28px;
    line-height: 36px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/S":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 550;
    font-size: 20px;
    line-height: 28px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XS-bold":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 550;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XS":M`
    font-family: ${y};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/L-bold":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 550;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/L":M`
    font-family: ${y};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/M":M`
    font-family: ${y};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/S":M`
    font-family: ${y};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/S-bold":M`
    font-family: ${y};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/XS":M`
    font-family: ${y};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/M":M`
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
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
    font-family: ${y};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    /* or 120% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `};function j1(...l){return a=>{l.forEach(t=>{t&&(typeof t=="function"?t(a):t.current=a)})}}const x2=()=>{let l=0;const a=document.createElement("div");return a.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,a.style.overflow="scroll",a.style.fontSize="14px",a.style.height="50px",a.style.maxHeight="50px",a.style.width="100px",a.style.position="absolute",a.style.top="-100000px",a.style.left="-100000px",document.body.appendChild(a),l=a.offsetWidth-a.clientWidth,document.body.removeChild(a),l||16},y2=["bottom","height","left","right","top","width"];function E2(l,a){const t={};return{observe(){t.rafId&&cancelAnimationFrame(t.rafId);const i=()=>{if(t.isObserving){const{bottom:n,height:s,left:c,right:f,top:g,width:r,x:o,y:v}=l.getBoundingClientRect(),d={bottom:n,height:s,left:c,right:f,top:g,width:r,x:o||c,y:v||g};((h={},u={})=>y2.some(H=>h[H]!==u[H]))(d,t.rect)&&(t.rect=d,a(t.rect)),t.rafId=requestAnimationFrame(i)}};t.rafId=requestAnimationFrame(i),t.isObserving=!0},unobserve(){t.rafId&&cancelAnimationFrame(t.rafId),t.isObserving&&(t.isObserving=!1)}}}const _2=D.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: ${({theme:l})=>l.zIndex.dropdown};
`,S2=({targetRef:l,targetElement:a,rootRef:t,fullContainerWidth:i,...n})=>{const s=e.useRef(null);return e.useEffect(()=>{const c=s.current,f=a??(l==null?void 0:l.current);if(c&&f){const g=E2(f,r=>{if(r){const{x:o,y:v,height:d,width:h}=r,{style:u}=c;u.top=`${v}px`,u.left=i?"0px":`${o}px`,u.height=`${d}px`,u.width=i?"100%":`${h}px`}});return g.observe(),()=>{g.unobserve()}}},[l,a,i]),i3.createPortal(m.jsx(_2,{ref:s,...n}),(t==null?void 0:t.current)||document.body)},H2=D.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,b2=D.div`
  box-sizing: border-box;
  background-color: ${({theme:l})=>l.color["Neutral/Neutral 80"]};
  ${l=>l.$dimension==="m"?g0["Body/Body 2 Short"]:g0["Caption/Caption 1"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 00"]};
  border-radius: ${l=>M2(l.theme.shape)};
  ${l=>l.theme.shadow["Shadow 04"]}
  padding: ${l=>l.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,k2=D.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,B2=D(S2)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:l})=>l?`flex-direction: ${l};`:""}
  z-index: ${({theme:l})=>l.zIndex.tooltip};
`,F=8;function V2(l,a,t,i){const n=l.getBoundingClientRect(),s=a.getBoundingClientRect(),c=Object.entries(function(r){return{bottom:{check:(o,v)=>{const d=window.innerHeight-o.bottom-r>F+v.height,h=o.left+o.width/2>v.width/2,u=window.innerWidth-o.right-r+o.width/2>v.width/2;return d&&h&&u}},top:{check:(o,v)=>{const d=o.top>F+v.height,h=o.left+o.width/2>v.width/2,u=window.innerWidth-o.right-r+o.width/2>v.width/2;return d&&h&&u}},left:{check:(o,v)=>{const d=o.left>F+v.width,h=o.top>(v.height-o.height)/2,u=window.innerHeight-o.bottom-r>(v.height-o.height)/2;return d&&u&&h}},right:{check:(o,v)=>{const d=window.innerWidth-o.right-r>F+v.width,h=o.top>(v.height-o.height)/2,u=window.innerHeight-o.bottom-r>(v.height-o.height)/2;return d&&u&&h}},bottomRight:{check:(o,v)=>{const d=window.innerHeight-o.bottom-r>F+v.height,h=window.innerWidth-o.left-r>v.width;return d&&h}},bottomLeft:{check:(o,v)=>{const d=window.innerHeight-o.bottom-r>F+v.height,h=o.right>v.width;return d&&h}},topRight:{check:(o,v)=>{const d=o.top>F+v.height,h=window.innerWidth-o.left-r>v.width;return d&&h}},topLeft:{check:(o,v)=>{const d=o.top>F+v.height,h=o.right>v.width;return d&&h}},leftBottom:{check:(o,v)=>{const d=o.left>F+v.width,h=window.innerHeight-o.top-r>v.height;return d&&h}},leftTop:{check:(o,v)=>{const d=o.left>F+v.width,h=o.bottom>v.height;return d&&h}},rightBottom:{check:(o,v)=>{const d=window.innerWidth-o.right-r>F+v.width,h=window.innerHeight-o.top-r>v.height;return d&&h}},rightTop:{check:(o,v)=>{const d=window.innerWidth-o.right-r>F+v.width,h=o.bottom>v.height;return d&&h}},bottomPageCenter:{check:(o,v)=>{const d=window.innerHeight-o.bottom-r>F+v.height,h=window.innerWidth-r>=v.width;return d&&h}},topPageCenter:{check:(o,v)=>{const d=o.top>F+v.height,h=window.innerWidth-r>=v.width;return d&&h}}}}(t)),f=i?c.filter(r=>r[0].includes(i)&&r[1].check(n,s)):c.filter(r=>r[1].check(n,s)),g=i||"bottom";return f.length?f[0][0]:g}const $1=e.createContext({}),A2=({rootRef:l,...a})=>{const[t,i]=e.useState([]),[n,s]=e.useState(void 0),c=e.useCallback(v=>{s(v)},[]),f=e.useCallback(v=>{s(d=>d===v?void 0:d)},[]),g=e.useCallback(v=>{i(d=>{const h=d.indexOf(v);return h>-1?d.slice(0,h):d})},[]),r=e.useCallback(v=>{i(d=>[...d,v])},[]),o=e.useMemo(()=>({addDropdown:r,removeDropdown:g,dropdowns:t,rootRef:l,activateMenu:c,deactivateMenu:f,currentActiveMenu:n}),[r,g,t,l,c,f,n]);return m.jsx($1.Provider,{value:o,children:a.children})},R2=1500,K1=e.forwardRef(({dimension:l="m",renderContent:a,targetRef:t,targetElement:i,tooltipPosition:n,...s},c)=>{const f=e.useRef(null),g=e.useRef(0),{rootRef:r}=e.useContext($1),o=e.useMemo(()=>!a()&&a()!==0,[a]),[v,d]=e.useState(""),[h,u]=e.useState(!1),[H,V]=e.useState({});return e.useEffect(()=>{(b=>{const E=i??(t==null?void 0:t.current);if(E&&f.current){const p=V2(E,f.current,b,n),_=f.current;switch(p){case"leftBottom":case"leftTop":case"left":d("row-reverse"),u(!1),_.style.margin="0 8px 0 0",_.style.alignSelf=p==="leftBottom"?"flex-start":p==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":d("row"),u(!1),_.style.margin="0 0 0 8px",_.style.alignSelf=p==="rightBottom"?"flex-start":p==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":d("column-reverse"),u(p==="topPageCenter"),_.style.margin="0 0 8px 0",_.style.alignSelf=p==="topLeft"?"flex-end":p==="topRight"?"flex-start":"center";break;default:d("column"),u(p==="bottomPageCenter"),_.style.margin="8px 0 0 0",_.style.alignSelf=p==="bottomLeft"?"flex-end":p==="bottomRight"?"flex-start":"center"}}})(x2())},[a(),t,i,n,H]),e.useLayoutEffect(()=>{if(f.current&&!o){const b=new ResizeObserver(E=>{E.forEach(p=>{g.current===0?g.current=p.contentRect.height:V({})})});return b.observe(f.current),()=>{b.disconnect()}}},[o]),e.useEffect(()=>{f.current&&!o&&(f.current.style.opacity="1")},[o]),o?null:m.jsxs(B2,{targetElement:i??(t==null?void 0:t.current),rootRef:r,$flexDirection:v,fullContainerWidth:h,children:[m.jsx(k2,{}),m.jsx(H2,{ref:j1(c,f),children:m.jsx(b2,{role:"tooltip",$dimension:l,...s,children:a()})})]})});K1.displayName="Tooltip";function O2(l){const a=t=>{const{forwardedRef:i,renderContent:n,container:s,withDelay:c,tooltipRef:f,tooltipPosition:g,...r}=t,o=!n()&&n()!==0,v=e.useRef(null),[d,h]=e.useState(!1),[u,H]=e.useState(null),[V,b]=e.useState();return e.useEffect(()=>{function E(){b(window.setTimeout(()=>h(!0),c?R2:0))}function p(){clearTimeout(V),h(!1)}if(u)return u.addEventListener("mouseenter",E),u.addEventListener("focus",E),u.addEventListener("mouseleave",p),u.addEventListener("blur",p),()=>{V&&clearTimeout(V),u.removeEventListener("mouseenter",E),u.removeEventListener("focus",E),u.removeEventListener("mouseleave",p),u.removeEventListener("blur",p)}},[u,b,h,V]),m.jsxs(m.Fragment,{children:[m.jsx(l,{...r,ref:j1(i,v,H)}),d&&!o&&m.jsx(K1,{targetElement:v.current,renderContent:n,container:s,tooltipPosition:g,ref:f})]})};return e.forwardRef((t,i)=>m.jsx(a,{forwardedRef:i,...t}))}const C2=""+new URL("VTBGroupUI-SemiBold-857165e0.ttf",import.meta.url).href,D2=""+new URL("VTBGroupUI-Medium-2005d97c.otf",import.meta.url).href,F2=""+new URL("VTBGroupUI-Regular-6e523012.otf",import.meta.url).href,L2=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${C2}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${D2}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${F2}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
  ${g0["Main/XS-bold"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
  margin-bottom: 20px;
`,Tg=D.div`
  ${g0["Additional/M"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,c0=D.code`
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,d0=D.pre`
  border: 1px dashed gray;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({theme:l})=>l.color["Neutral/Neutral 05"]};
  overflow-x: auto;
`,Pg=D.div`
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
`,Ig=D.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,Gg=D.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
`,Zg=D.div`
  margin-top: 16px;
  ${g0["Caption/XS"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 50"]};
  display: flex;
  gap: 8px;
`,Wg=D.div`
  display: inline-flex;
  cursor: pointer;
`,Ng=e.forwardRef(({text:l},a)=>{const t=()=>{const i=document.createElement("textarea");i.value=l,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)};return m.jsx(Wg,{ref:a,children:m.jsx(q1,{width:16,height:16,onClick:t})})}),jg=O2(Ng),$g=({label:l,children:a})=>m.jsxs(Ig,{children:[m.jsx(J1,{children:l}),m.jsx(Pg,{children:a})]}),L=(l,a)=>X2[l].map(t=>{const i=`${zg(l)}${t.name}`;return{...t,reactComponentName:i,Component:a[i]}}),Kg=[{label:"Cards",value:"cards",icons:L("cards",r6)},{label:"Category",value:"category",icons:L("category",q7)},{label:"Communication",value:"communication",icons:L("communication",dl)},{label:"Documents",value:"documents",icons:L("documents",Sa)},{label:"Finance",value:"finance",icons:L("finance",k9)},{label:"Flags",value:"flags",icons:L("flags",vo)},{label:"Payment",value:"payment",icons:L("payment",Io)},{label:"Redact",value:"redact",icons:L("redact",Qv)},{label:"Location",value:"location",icons:L("location",go)},{label:"Security",value:"security",icons:L("security",xc)},{label:"Service",value:"service",icons:L("service",Ad)},{label:"System",value:"system",icons:L("system",Ug)},{label:"Bank",value:"bank",icons:L("bank",a6)}],im={title:"Icons/Icons",decorators:[l=>m.jsx("div",{style:{padding:24},children:m.jsx(r2,{theme:w2,children:m.jsxs(A2,{children:[m.jsx(U2,{}),m.jsx(l,{})]})})})],parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585"}}},qg=()=>m.jsxs(m.Fragment,{children:[m.jsx(J1,{style:{fontWeight:400},children:"Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро передавать смысл отображаемой информации или привлекать к ней дополнительное внимание."}),Kg.map(({label:l,icons:a})=>m.jsx($g,{label:l,children:a.map(({Component:t,name:i,path:n},s)=>m.jsxs(Gg,{children:[m.jsx(t,{width:24,height:24}),m.jsxs(Zg,{children:[i," ",m.jsx(jg,{renderContent:()=>"Копировать пример использования",text:`import { ReactComponent as ${i} } from '@admiral-ds/icons/${n}';`})]})]},i+s))},l))]}),Jg=`
  config.module.rules.unshift({
    test: /\\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
  });
  `,Xg=`
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
  `,Yg=`
  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  `,Qg=`
  declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
  
    export { ReactComponent };
    export default content;
  }
  `,em=`
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
  }
  `,lm=()=>m.jsxs(Tg,{style:{fontWeight:400},children:["В наших компонентах используется пакет иконок Admiral 2.0.",m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585",children:"Макеты в Figma"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.npmjs.com/package/@admiral-ds/icons",children:"Пакет в npm"})})]}),"1) В проекте может понадобиться настройка загрузчиков svg-иконок. Например, в create-react-app уже изначально для webpack настроены загрузчики svg иконок. В нашем storybook настройки webpack для работы с иконками выглядят так:",m.jsx(d0,{children:m.jsx(c0,{children:Jg})}),"Вот несколько полезных ссылок, касающихся настройки проектов для работы с иконками:",m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://react-svgr.com/docs/getting-started/",children:"Svgr - getting started"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.npmjs.com/package/@svgr/webpack",children:"Svgr - npm"})})]}),"2) Также в проектах, использующих TypeScript, при работе с иконками может понадобиться настройка тайпинга (создание файла деклараций custom.d.ts и включение его в tsconfig.json). В нашем проекте для этого используется следующий файл svg.d.ts:",m.jsx(d0,{children:m.jsx(c0,{children:Xg})}),"Вот еще несколько способов написания подобного файла (примеры от пользователей библиотеки):",m.jsx(d0,{children:m.jsx(c0,{children:Yg})}),m.jsx(d0,{children:m.jsx(c0,{children:Qg})}),m.jsx(d0,{children:m.jsx(c0,{children:em})}),"Ряд полезных ссылок по данной теме:",m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://webpack.js.org/guides/typescript/#importing-other-assets",children:"Webpack - Importing Other Assets"})}),m.jsx("li",{children:m.jsx("a",{href:"https://duncanleung.com/typescript-module-declearation-svg-img-assets/",children:"TypeScript Module Declaration for SVG Assets"})})]})]}),y0={render:qg,args:{},name:"Список иконок"},E0={render:lm,args:{},name:"Использование иконок"};var M1,x1,y1;y0.parameters={...y0.parameters,docs:{...(M1=y0.parameters)==null?void 0:M1.docs,source:{originalSource:`{
  render: Template,
  args: {},
  name: 'Список иконок'
}`,...(y1=(x1=y0.parameters)==null?void 0:x1.docs)==null?void 0:y1.source}}};var E1,_1,S1;E0.parameters={...E0.parameters,docs:{...(E1=E0.parameters)==null?void 0:E1.docs,source:{originalSource:`{
  render: Template2,
  args: {},
  name: 'Использование иконок'
}`,...(S1=(_1=E0.parameters)==null?void 0:_1.docs)==null?void 0:S1.source}}};const nm=["Icons","Loaders"];export{y0 as Icons,E0 as Loaders,nm as __namedExportsOrder,im as default};