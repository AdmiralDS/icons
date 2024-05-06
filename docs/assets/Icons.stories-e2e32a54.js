import{r as e,R as Z}from"./index-f46741a2.js";import{r as h3}from"./index-d868a670.js";var k1={exports:{}},R0={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r3=e,f3=Symbol.for("react.element"),m3=Symbol.for("react.fragment"),g3=Object.prototype.hasOwnProperty,u3=r3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p3={key:!0,ref:!0,__self:!0,__source:!0};function B1(l,a,t){var i,n={},s=null,d=null;t!==void 0&&(s=""+t),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(d=a.ref);for(i in a)g3.call(a,i)&&!p3.hasOwnProperty(i)&&(n[i]=a[i]);if(l&&l.defaultProps)for(i in a=l.defaultProps,a)n[i]===void 0&&(n[i]=a[i]);return{$$typeof:f3,type:l,key:s,ref:d,props:n,_owner:u3.current}}R0.Fragment=m3;R0.jsx=B1;R0.jsxs=B1;k1.exports=R0;var g=k1.exports,R=function(){return R=Object.assign||function(a){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a},R.apply(this,arguments)};function k0(l,a,t){if(t||arguments.length===2)for(var i=0,n=a.length,s;i<n;i++)(s||!(i in a))&&(s||(s=Array.prototype.slice.call(a,0,i)),s[i]=a[i]);return l.concat(s||Array.prototype.slice.call(a))}var b="-ms-",r0="-moz-",E="-webkit-",A1="comm",O0="rule",Y0="decl",w3="@import",V1="@keyframes",M3="@layer",R1=Math.abs,e1=String.fromCharCode,j0=Object.assign;function x3(l,a){return V(l,0)^45?(((a<<2^V(l,0))<<2^V(l,1))<<2^V(l,2))<<2^V(l,3):0}function O1(l){return l.trim()}function T(l,a){return(l=a.exec(l))?l[0]:l}function w(l,a,t){return l.replace(a,t)}function E0(l,a,t){return l.indexOf(a,t)}function V(l,a){return l.charCodeAt(a)|0}function Y(l,a,t){return l.slice(a,t)}function U(l){return l.length}function F1(l){return l.length}function h0(l,a){return a.push(l),l}function z3(l,a){return l.map(a).join("")}function o1(l,a){return l.filter(function(t){return!T(t,a)})}var F0=1,e0=1,C1=0,D=0,B=0,i0="";function C0(l,a,t,i,n,s,d,f){return{value:l,root:a,parent:t,type:i,props:n,children:s,line:F0,column:e0,length:d,return:"",siblings:f}}function G(l,a){return j0(C0("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},a)}function X(l){for(;l.root;)l=G(l.root,{children:[l]});h0(l,l.siblings)}function y3(){return B}function E3(){return B=D>0?V(i0,--D):0,e0--,B===10&&(e0=1,F0--),B}function L(){return B=D<C1?V(i0,D++):0,e0++,B===10&&(e0=1,F0++),B}function j(){return V(i0,D)}function _0(){return D}function D0(l,a){return Y(i0,l,a)}function $0(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _3(l){return F0=e0=1,C1=U(i0=l),D=0,[]}function S3(l){return i0="",l}function I0(l){return O1(D0(D-1,Z0(l===91?l+2:l===40?l+1:l)))}function H3(l){for(;(B=j())&&B<33;)L();return $0(l)>2||$0(B)>3?"":" "}function b3(l,a){for(;--a&&L()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return D0(l,_0()+(a<6&&j()==32&&L()==32))}function Z0(l){for(;L();)switch(B){case l:return D;case 34:case 39:l!==34&&l!==39&&Z0(B);break;case 40:l===41&&Z0(l);break;case 92:L();break}return D}function k3(l,a){for(;L()&&l+B!==47+10;)if(l+B===42+42&&j()===47)break;return"/*"+D0(a,D-1)+"*"+e1(l===47?l:L())}function B3(l){for(;!$0(j());)L();return D0(l,D)}function A3(l){return S3(S0("",null,null,null,[""],l=_3(l),0,[0],l))}function S0(l,a,t,i,n,s,d,f,m){for(var h=0,o=0,c=d,v=0,r=0,u=0,_=1,k=1,S=1,z=0,p="",y=n,A=s,H=i,x=p;k;)switch(u=z,z=L()){case 40:if(u!=108&&V(x,c-1)==58){E0(x+=w(I0(z),"&","&\f"),"&\f",R1(h?f[h-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:x+=I0(z);break;case 9:case 10:case 13:case 32:x+=H3(u);break;case 92:x+=b3(_0()-1,7);continue;case 47:switch(j()){case 42:case 47:h0(V3(k3(L(),_0()),a,t,m),m);break;default:x+="/"}break;case 123*_:f[h++]=U(x)*S;case 125*_:case 59:case 0:switch(z){case 0:case 125:k=0;case 59+o:S==-1&&(x=w(x,/\f/g,"")),r>0&&U(x)-c&&h0(r>32?d1(x+";",i,t,c-1,m):d1(w(x," ","")+";",i,t,c-2,m),m);break;case 59:x+=";";default:if(h0(H=c1(x,a,t,h,o,n,f,p,y=[],A=[],c,s),s),z===123)if(o===0)S0(x,a,H,H,y,s,c,f,A);else switch(v===99&&V(x,3)===110?100:v){case 100:case 108:case 109:case 115:S0(l,H,H,i&&h0(c1(l,H,H,0,0,n,f,p,n,y=[],c,A),A),n,A,c,f,i?y:A);break;default:S0(x,H,H,H,[""],A,0,f,A)}}h=o=r=0,_=S=1,p=x="",c=d;break;case 58:c=1+U(x),r=u;default:if(_<1){if(z==123)--_;else if(z==125&&_++==0&&E3()==125)continue}switch(x+=e1(z),z*_){case 38:S=o>0?1:(x+="\f",-1);break;case 44:f[h++]=(U(x)-1)*S,S=1;break;case 64:j()===45&&(x+=I0(L())),v=j(),o=c=U(p=x+=B3(_0())),z++;break;case 45:u===45&&U(x)==2&&(_=0)}}return s}function c1(l,a,t,i,n,s,d,f,m,h,o,c){for(var v=n-1,r=n===0?s:[""],u=F1(r),_=0,k=0,S=0;_<i;++_)for(var z=0,p=Y(l,v+1,v=R1(k=d[_])),y=l;z<u;++z)(y=O1(k>0?r[z]+" "+p:w(p,/&\f/g,r[z])))&&(m[S++]=y);return C0(l,a,t,n===0?O0:f,m,h,o,c)}function V3(l,a,t,i){return C0(l,a,t,A1,e1(y3()),Y(l,2,-2),0,i)}function d1(l,a,t,i,n){return C0(l,a,t,Y0,Y(l,0,i),Y(l,i+1,-1),i,n)}function D1(l,a,t){switch(x3(l,a)){case 5103:return E+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+l+l;case 4789:return r0+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return E+l+r0+l+b+l+l;case 5936:switch(V(l,a+11)){case 114:return E+l+b+w(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return E+l+b+w(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return E+l+b+w(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return E+l+b+l+l;case 6165:return E+l+b+"flex-"+l+l;case 5187:return E+l+w(l,/(\w+).+(:[^]+)/,E+"box-$1$2"+b+"flex-$1$2")+l;case 5443:return E+l+b+"flex-item-"+w(l,/flex-|-self/g,"")+(T(l,/flex-|baseline/)?"":b+"grid-row-"+w(l,/flex-|-self/g,""))+l;case 4675:return E+l+b+"flex-line-pack"+w(l,/align-content|flex-|-self/g,"")+l;case 5548:return E+l+b+w(l,"shrink","negative")+l;case 5292:return E+l+b+w(l,"basis","preferred-size")+l;case 6060:return E+"box-"+w(l,"-grow","")+E+l+b+w(l,"grow","positive")+l;case 4554:return E+w(l,/([^-])(transform)/g,"$1"+E+"$2")+l;case 6187:return w(w(w(l,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),l,"")+l;case 5495:case 3959:return w(l,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return w(w(l,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+l+l;case 4200:if(!T(l,/flex-|baseline/))return b+"grid-column-align"+Y(l,a)+l;break;case 2592:case 3360:return b+w(l,"template-","")+l;case 4384:case 3616:return t&&t.some(function(i,n){return a=n,T(i.props,/grid-\w+-end/)})?~E0(l+(t=t[a].value),"span",0)?l:b+w(l,"-start","")+l+b+"grid-row-span:"+(~E0(t,"span",0)?T(t,/\d+/):+T(t,/\d+/)-+T(l,/\d+/))+";":b+w(l,"-start","")+l;case 4896:case 4128:return t&&t.some(function(i){return T(i.props,/grid-\w+-start/)})?l:b+w(w(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return w(l,/(.+)-inline(.+)/,E+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(U(l)-1-a>6)switch(V(l,a+1)){case 109:if(V(l,a+4)!==45)break;case 102:return w(l,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+r0+(V(l,a+3)==108?"$3":"$2-$3"))+l;case 115:return~E0(l,"stretch",0)?D1(w(l,"stretch","fill-available"),a,t)+l:l}break;case 5152:case 5920:return w(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,n,s,d,f,m,h){return b+n+":"+s+h+(d?b+n+"-span:"+(f?m:+m-+s)+h:"")+l});case 4949:if(V(l,a+6)===121)return w(l,":",":"+E)+l;break;case 6444:switch(V(l,V(l,14)===45?18:11)){case 120:return w(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+E+(V(l,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+b+"$2box$3")+l;case 100:return w(l,":",":"+b)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(l,"scroll-","scroll-snap-")+l}return l}function B0(l,a){for(var t="",i=0;i<l.length;i++)t+=a(l[i],i,l,a)||"";return t}function R3(l,a,t,i){switch(l.type){case M3:if(l.children.length)break;case w3:case Y0:return l.return=l.return||l.value;case A1:return"";case V1:return l.return=l.value+"{"+B0(l.children,i)+"}";case O0:if(!U(l.value=l.props.join(",")))return""}return U(t=B0(l.children,i))?l.return=l.value+"{"+t+"}":""}function O3(l){var a=F1(l);return function(t,i,n,s){for(var d="",f=0;f<a;f++)d+=l[f](t,i,n,s)||"";return d}}function F3(l){return function(a){a.root||(a=a.return)&&l(a)}}function C3(l,a,t,i){if(l.length>-1&&!l.return)switch(l.type){case Y0:l.return=D1(l.value,l.length,t);return;case V1:return B0([G(l,{value:w(l.value,"@","@"+E)})],i);case O0:if(l.length)return z3(t=l.props,function(n){switch(T(n,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":X(G(l,{props:[w(n,/:(read-\w+)/,":"+r0+"$1")]})),X(G(l,{props:[n]})),j0(l,{props:o1(t,i)});break;case"::placeholder":X(G(l,{props:[w(n,/:(plac\w+)/,":"+E+"input-$1")]})),X(G(l,{props:[w(n,/:(plac\w+)/,":"+r0+"$1")]})),X(G(l,{props:[w(n,/:(plac\w+)/,b+"input-$1")]})),X(G(l,{props:[n]})),j0(l,{props:o1(t,i)});break}return""})}}var D3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},l0=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",L1="active",U1="data-styled-version",L0="6.1.9",l1=`/*!sc*/
`,a1=typeof window<"u"&&"HTMLElement"in window,L3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),U0=Object.freeze([]),a0=Object.freeze({});function U3(l,a,t){return t===void 0&&(t=a0),l.theme!==t.theme&&l.theme||a||t.theme}var q1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),q3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,T3=/(^-|-$)/g;function v1(l){return l.replace(q3,"-").replace(T3,"")}var P3=/(a)(d)/gi,M0=52,h1=function(l){return String.fromCharCode(l+(l>25?39:97))};function K0(l){var a,t="";for(a=Math.abs(l);a>M0;a=a/M0|0)t=h1(a%M0)+t;return(h1(a%M0)+t).replace(P3,"$1-$2")}var G0,T1=5381,Q=function(l,a){for(var t=a.length;t;)l=33*l^a.charCodeAt(--t);return l},P1=function(l){return Q(T1,l)};function I3(l){return K0(P1(l)>>>0)}function G3(l){return l.displayName||l.name||"Component"}function W0(l){return typeof l=="string"&&!0}var I1=typeof Symbol=="function"&&Symbol.for,G1=I1?Symbol.for("react.memo"):60115,W3=I1?Symbol.for("react.forward_ref"):60112,N3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$3=((G0={})[W3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G0[G1]=W1,G0);function r1(l){return("type"in(a=l)&&a.type.$$typeof)===G1?W1:"$$typeof"in l?$3[l.$$typeof]:N3;var a}var Z3=Object.defineProperty,K3=Object.getOwnPropertyNames,f1=Object.getOwnPropertySymbols,J3=Object.getOwnPropertyDescriptor,X3=Object.getPrototypeOf,m1=Object.prototype;function N1(l,a,t){if(typeof a!="string"){if(m1){var i=X3(a);i&&i!==m1&&N1(l,i,t)}var n=K3(a);f1&&(n=n.concat(f1(a)));for(var s=r1(l),d=r1(a),f=0;f<n.length;++f){var m=n[f];if(!(m in j3||t&&t[m]||d&&m in d||s&&m in s)){var h=J3(a,m);try{Z3(l,m,h)}catch{}}}}return l}function K(l){return typeof l=="function"}function t1(l){return typeof l=="object"&&"styledComponentId"in l}function N(l,a){return l&&a?"".concat(l," ").concat(a):l||a||""}function g1(l,a){if(l.length===0)return"";for(var t=l[0],i=1;i<l.length;i++)t+=a?a+l[i]:l[i];return t}function f0(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function J0(l,a,t){if(t===void 0&&(t=!1),!t&&!f0(l)&&!Array.isArray(l))return a;if(Array.isArray(a))for(var i=0;i<a.length;i++)l[i]=J0(l[i],a[i]);else if(f0(a))for(var i in a)l[i]=J0(l[i],a[i]);return l}function i1(l,a){Object.defineProperty(l,"toString",{value:a})}function J(l){for(var a=[],t=1;t<arguments.length;t++)a[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Q3=function(){function l(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return l.prototype.indexOfGroup=function(a){for(var t=0,i=0;i<a;i++)t+=this.groupSizes[i];return t},l.prototype.insertRules=function(a,t){if(a>=this.groupSizes.length){for(var i=this.groupSizes,n=i.length,s=n;a>=s;)if((s<<=1)<0)throw J(16,"".concat(a));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var d=n;d<s;d++)this.groupSizes[d]=0}for(var f=this.indexOfGroup(a+1),m=(d=0,t.length);d<m;d++)this.tag.insertRule(f,t[d])&&(this.groupSizes[a]++,f++)},l.prototype.clearGroup=function(a){if(a<this.length){var t=this.groupSizes[a],i=this.indexOfGroup(a),n=i+t;this.groupSizes[a]=0;for(var s=i;s<n;s++)this.tag.deleteRule(i)}},l.prototype.getGroup=function(a){var t="";if(a>=this.length||this.groupSizes[a]===0)return t;for(var i=this.groupSizes[a],n=this.indexOfGroup(a),s=n+i,d=n;d<s;d++)t+="".concat(this.tag.getRule(d)).concat(l1);return t},l}(),H0=new Map,A0=new Map,b0=1,x0=function(l){if(H0.has(l))return H0.get(l);for(;A0.has(b0);)b0++;var a=b0++;return H0.set(l,a),A0.set(a,l),a},Y3=function(l,a){b0=a+1,H0.set(l,a),A0.set(a,l)},e2="style[".concat(l0,"][").concat(U1,'="').concat(L0,'"]'),l2=new RegExp("^".concat(l0,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),a2=function(l,a,t){for(var i,n=t.split(","),s=0,d=n.length;s<d;s++)(i=n[s])&&l.registerName(a,i)},t2=function(l,a){for(var t,i=((t=a.textContent)!==null&&t!==void 0?t:"").split(l1),n=[],s=0,d=i.length;s<d;s++){var f=i[s].trim();if(f){var m=f.match(l2);if(m){var h=0|parseInt(m[1],10),o=m[2];h!==0&&(Y3(o,h),a2(l,o,m[3]),l.getTag().insertRules(h,n)),n.length=0}else n.push(f)}}};function i2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var j1=function(l){var a=document.head,t=l||a,i=document.createElement("style"),n=function(f){var m=Array.from(f.querySelectorAll("style[".concat(l0,"]")));return m[m.length-1]}(t),s=n!==void 0?n.nextSibling:null;i.setAttribute(l0,L1),i.setAttribute(U1,L0);var d=i2();return d&&i.setAttribute("nonce",d),t.insertBefore(i,s),i},n2=function(){function l(a){this.element=j1(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,n=0,s=i.length;n<s;n++){var d=i[n];if(d.ownerNode===t)return d}throw J(17)}(this.element),this.length=0}return l.prototype.insertRule=function(a,t){try{return this.sheet.insertRule(t,a),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},l.prototype.getRule=function(a){var t=this.sheet.cssRules[a];return t&&t.cssText?t.cssText:""},l}(),s2=function(){function l(a){this.element=j1(a),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(a,t){if(a<=this.length&&a>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[a]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},l.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},l}(),o2=function(){function l(a){this.rules=[],this.length=0}return l.prototype.insertRule=function(a,t){return a<=this.length&&(this.rules.splice(a,0,t),this.length++,!0)},l.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},l.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},l}(),u1=a1,c2={isServer:!a1,useCSSOMInjection:!L3},$1=function(){function l(a,t,i){a===void 0&&(a=a0),t===void 0&&(t={});var n=this;this.options=R(R({},c2),a),this.gs=t,this.names=new Map(i),this.server=!!a.isServer,!this.server&&a1&&u1&&(u1=!1,function(s){for(var d=document.querySelectorAll(e2),f=0,m=d.length;f<m;f++){var h=d[f];h&&h.getAttribute(l0)!==L1&&(t2(s,h),h.parentNode&&h.parentNode.removeChild(h))}}(this)),i1(this,function(){return function(s){for(var d=s.getTag(),f=d.length,m="",h=function(c){var v=function(S){return A0.get(S)}(c);if(v===void 0)return"continue";var r=s.names.get(v),u=d.getGroup(c);if(r===void 0||u.length===0)return"continue";var _="".concat(l0,".g").concat(c,'[id="').concat(v,'"]'),k="";r!==void 0&&r.forEach(function(S){S.length>0&&(k+="".concat(S,","))}),m+="".concat(u).concat(_,'{content:"').concat(k,'"}').concat(l1)},o=0;o<f;o++)h(o);return m}(n)})}return l.registerId=function(a){return x0(a)},l.prototype.reconstructWithOptions=function(a,t){return t===void 0&&(t=!0),new l(R(R({},this.options),a),this.gs,t&&this.names||void 0)},l.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(a=function(t){var i=t.useCSSOMInjection,n=t.target;return t.isServer?new o2(n):i?new n2(n):new s2(n)}(this.options),new Q3(a)));var a},l.prototype.hasNameForId=function(a,t){return this.names.has(a)&&this.names.get(a).has(t)},l.prototype.registerName=function(a,t){if(x0(a),this.names.has(a))this.names.get(a).add(t);else{var i=new Set;i.add(t),this.names.set(a,i)}},l.prototype.insertRules=function(a,t,i){this.registerName(a,t),this.getTag().insertRules(x0(a),i)},l.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},l.prototype.clearRules=function(a){this.getTag().clearGroup(x0(a)),this.clearNames(a)},l.prototype.clearTag=function(){this.tag=void 0},l}(),d2=/&/g,v2=/^\s*\/\/.*$/gm;function Z1(l,a){return l.map(function(t){return t.type==="rule"&&(t.value="".concat(a," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(a," ")),t.props=t.props.map(function(i){return"".concat(a," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Z1(t.children,a)),t})}function h2(l){var a,t,i,n=l===void 0?a0:l,s=n.options,d=s===void 0?a0:s,f=n.plugins,m=f===void 0?U0:f,h=function(v,r,u){return u.startsWith(t)&&u.endsWith(t)&&u.replaceAll(t,"").length>0?".".concat(a):v},o=m.slice();o.push(function(v){v.type===O0&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(d2,t).replace(i,h))}),d.prefix&&o.push(C3),o.push(R3);var c=function(v,r,u,_){r===void 0&&(r=""),u===void 0&&(u=""),_===void 0&&(_="&"),a=_,t=r,i=new RegExp("\\".concat(t,"\\b"),"g");var k=v.replace(v2,""),S=A3(u||r?"".concat(u," ").concat(r," { ").concat(k," }"):k);d.namespace&&(S=Z1(S,d.namespace));var z=[];return B0(S,O3(o.concat(F3(function(p){return z.push(p)})))),z};return c.hash=m.length?m.reduce(function(v,r){return r.name||J(15),Q(v,r.name)},T1).toString():"",c}var r2=new $1,X0=h2(),K1=Z.createContext({shouldForwardProp:void 0,styleSheet:r2,stylis:X0});K1.Consumer;Z.createContext(void 0);function p1(){return e.useContext(K1)}var f2=function(){function l(a,t){var i=this;this.inject=function(n,s){s===void 0&&(s=X0);var d=i.name+s.hash;n.hasNameForId(i.id,d)||n.insertRules(i.id,d,s(i.rules,d,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=t,i1(this,function(){throw J(12,String(i.name))})}return l.prototype.getName=function(a){return a===void 0&&(a=X0),this.name+a.hash},l}(),m2=function(l){return l>="A"&&l<="Z"};function w1(l){for(var a="",t=0;t<l.length;t++){var i=l[t];if(t===1&&i==="-"&&l[0]==="-")return l;m2(i)?a+="-"+i.toLowerCase():a+=i}return a.startsWith("ms-")?"-"+a:a}var J1=function(l){return l==null||l===!1||l===""},X1=function(l){var a,t,i=[];for(var n in l){var s=l[n];l.hasOwnProperty(n)&&!J1(s)&&(Array.isArray(s)&&s.isCss||K(s)?i.push("".concat(w1(n),":"),s,";"):f0(s)?i.push.apply(i,k0(k0(["".concat(n," {")],X1(s),!1),["}"],!1)):i.push("".concat(w1(n),": ").concat((a=n,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||a in D3||a.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function $(l,a,t,i){if(J1(l))return[];if(t1(l))return[".".concat(l.styledComponentId)];if(K(l)){if(!K(s=l)||s.prototype&&s.prototype.isReactComponent||!a)return[l];var n=l(a);return $(n,a,t,i)}var s;return l instanceof f2?t?(l.inject(t,i),[l.getName(i)]):[l]:f0(l)?X1(l):Array.isArray(l)?Array.prototype.concat.apply(U0,l.map(function(d){return $(d,a,t,i)})):[l.toString()]}function g2(l){for(var a=0;a<l.length;a+=1){var t=l[a];if(K(t)&&!t1(t))return!1}return!0}var u2=P1(L0),p2=function(){function l(a,t,i){this.rules=a,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&g2(a),this.componentId=t,this.baseHash=Q(u2,t),this.baseStyle=i,$1.registerId(t)}return l.prototype.generateAndInjectStyles=function(a,t,i){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=N(n,this.staticRulesId);else{var s=g1($(this.rules,a,t,i)),d=K0(Q(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,d)){var f=i(s,".".concat(d),void 0,this.componentId);t.insertRules(this.componentId,d,f)}n=N(n,d),this.staticRulesId=d}else{for(var m=Q(this.baseHash,i.hash),h="",o=0;o<this.rules.length;o++){var c=this.rules[o];if(typeof c=="string")h+=c;else if(c){var v=g1($(c,a,t,i));m=Q(m,v+o),h+=v}}if(h){var r=K0(m>>>0);t.hasNameForId(this.componentId,r)||t.insertRules(this.componentId,r,i(h,".".concat(r),void 0,this.componentId)),n=N(n,r)}}return n},l}(),V0=Z.createContext(void 0);V0.Consumer;function w2(l){var a=Z.useContext(V0),t=e.useMemo(function(){return function(i,n){if(!i)throw J(14);if(K(i)){var s=i(n);return s}if(Array.isArray(i)||typeof i!="object")throw J(8);return n?R(R({},n),i):i}(l.theme,a)},[l.theme,a]);return l.children?Z.createElement(V0.Provider,{value:t},l.children):null}var N0={};function M2(l,a,t){var i=t1(l),n=l,s=!W0(l),d=a.attrs,f=d===void 0?U0:d,m=a.componentId,h=m===void 0?function(y,A){var H=typeof y!="string"?"sc":v1(y);N0[H]=(N0[H]||0)+1;var x="".concat(H,"-").concat(I3(L0+H+N0[H]));return A?"".concat(A,"-").concat(x):x}(a.displayName,a.parentComponentId):m,o=a.displayName,c=o===void 0?function(y){return W0(y)?"styled.".concat(y):"Styled(".concat(G3(y),")")}(l):o,v=a.displayName&&a.componentId?"".concat(v1(a.displayName),"-").concat(a.componentId):a.componentId||h,r=i&&n.attrs?n.attrs.concat(f).filter(Boolean):f,u=a.shouldForwardProp;if(i&&n.shouldForwardProp){var _=n.shouldForwardProp;if(a.shouldForwardProp){var k=a.shouldForwardProp;u=function(y,A){return _(y,A)&&k(y,A)}}else u=_}var S=new p2(t,v,i?n.componentStyle:void 0);function z(y,A){return function(H,x,n0){var m0=H.attrs,i3=H.componentStyle,n3=H.defaultProps,s3=H.foldedComponentIds,o3=H.styledComponentId,c3=H.target,d3=Z.useContext(V0),v3=p1(),q0=H.shouldForwardProp||v3.shouldForwardProp,n1=U3(x,d3,n3)||a0,q=function(u0,o0,p0){for(var c0,W=R(R({},o0),{className:void 0,theme:p0}),P0=0;P0<u0.length;P0+=1){var w0=K(c0=u0[P0])?c0(W):c0;for(var I in w0)W[I]=I==="className"?N(W[I],w0[I]):I==="style"?R(R({},W[I]),w0[I]):w0[I]}return o0.className&&(W.className=N(W.className,o0.className)),W}(m0,x,n1),g0=q.as||c3,s0={};for(var P in q)q[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&q.theme===n1||(P==="forwardedAs"?s0.as=q.forwardedAs:q0&&!q0(P,g0)||(s0[P]=q[P]));var s1=function(u0,o0){var p0=p1(),c0=u0.generateAndInjectStyles(o0,p0.styleSheet,p0.stylis);return c0}(i3,q),T0=N(s3,o3);return s1&&(T0+=" "+s1),q.className&&(T0+=" "+q.className),s0[W0(g0)&&!q1.has(g0)?"class":"className"]=T0,s0.ref=n0,e.createElement(g0,s0)}(p,y,A)}z.displayName=c;var p=Z.forwardRef(z);return p.attrs=r,p.componentStyle=S,p.displayName=c,p.shouldForwardProp=u,p.foldedComponentIds=i?N(n.foldedComponentIds,n.styledComponentId):"",p.styledComponentId=v,p.target=i?n.target:l,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=i?function(A){for(var H=[],x=1;x<arguments.length;x++)H[x-1]=arguments[x];for(var n0=0,m0=H;n0<m0.length;n0++)J0(A,m0[n0],!0);return A}({},n.defaultProps,y):y}}),i1(p,function(){return".".concat(p.styledComponentId)}),s&&N1(p,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function M1(l,a){for(var t=[l[0]],i=0,n=a.length;i<n;i+=1)t.push(a[i],l[i+1]);return t}var x1=function(l){return Object.assign(l,{isCss:!0})};function M(l){for(var a=[],t=1;t<arguments.length;t++)a[t-1]=arguments[t];if(K(l)||f0(l))return x1($(M1(U0,k0([l],a,!0))));var i=l;return a.length===0&&i.length===1&&typeof i[0]=="string"?$(i):x1($(M1(i,a)))}function Q0(l,a,t){if(t===void 0&&(t=a0),!a)throw J(1,a);var i=function(n){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];return l(a,t,M.apply(void 0,k0([n],s,!1)))};return i.attrs=function(n){return Q0(l,a,R(R({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return Q0(l,a,R(R({},t),n))},i}var Q1=function(l){return Q0(M2,l)},O=Q1;q1.forEach(function(l){O[l]=Q1(l)});const x2={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F3F4F6","Neutral/Neutral 10":"#E5E7EB","Neutral/Neutral 20":"#D5D8DE","Neutral/Neutral 30":"#B0B5BD","Neutral/Neutral 40":"#9BA0AA","Neutral/Neutral 50":"#717681","Neutral/Neutral 60":"#646973","Neutral/Neutral 70":"#4F525A","Neutral/Neutral 80":"#35383F","Neutral/Neutral 90":"#23262D","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#121316","Special/Dark Static Neutral 05":"#1C1E22","Special/Dark Static Neutral 10":"#282A2F","Special/Dark Static Neutral 20":"#383C44","Special/Dark Static Neutral 30":"#4E535D","Special/Dark Static Neutral 50":"#7F8692","Special/Dark Static Neutral 70":"#A6ABB4","Special/Dark Static Neutral 80":"#C7CAD1","Special/Dark Static Neutral 90":"#E2E5E9","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#00000066","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},z2={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},y2={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},z1={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(l,a)=>`Page ${l} of ${a}`,pageSizeSelectLabel:(l,a)=>`Entries ${l} out of ${a}`,itemRangeText:(l,a,t)=>`${l}–${a}  entries out of ${t}`,pageRangeText:l=>`from ${l} ${l===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(l,a,t)=>`${l}–${a} entries out of ${t}`},progressStepper:{renderNextStepName:l=>`Next - ${l}`,stepName:["step","steps"],progressText:(l,a,t)=>`${l} from ${a} ${t}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"}},E2={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(l,a)=>`Страница ${l} из ${a}`,pageSizeSelectLabel:(l,a)=>`Записей ${l} из ${a}`,itemRangeText:(l,a,t)=>`${l}–${a} записей из ${t}`,pageRangeText:l=>`из ${l} ${l===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(l,a,t)=>`${l}–${a} записей из ${t}`},progressStepper:{renderNextStepName:l=>`Далее - ${l}`,stepName:["шаг","шагов"],progressText:(l,a,t)=>`${l} из ${a} ${t}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"}},en:z1,"en-US":{...z1,firstDayOfWeek:0}},t0=_2();function _2(){return{"Main/XXL":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":M`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const S2={color:x2,shadow:z2,zIndex:y2,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:E2,typography:t0,fontFamily:"'VTB Group UI', sans-serif"};function H2(l){switch(l.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function Y1(...l){return a=>{l.forEach(t=>{t&&(typeof t=="function"?t(a):t.current=a)})}}const b2=()=>{let l=0;const a=document.createElement("div");return a.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,a.style.overflow="scroll",a.style.fontSize="14px",a.style.height="50px",a.style.maxHeight="50px",a.style.width="100px",a.style.position="absolute",a.style.top="-100000px",a.style.left="-100000px",document.body.appendChild(a),l=a.offsetWidth-a.clientWidth,document.body.removeChild(a),l||16},k2=["bottom","height","left","right","top","width"];function B2(l,a){const t={};return{observe(){t.rafId&&cancelAnimationFrame(t.rafId);const i=()=>{if(t.isObserving){const{bottom:n,height:s,left:d,right:f,top:m,width:h,x:o,y:c}=l.getBoundingClientRect(),v={bottom:n,height:s,left:d,right:f,top:m,width:h,x:o||d,y:c||m};((r={},u={})=>k2.some(_=>r[_]!==u[_]))(v,t.rect)&&(t.rect=v,a(t.rect)),t.rafId=requestAnimationFrame(i)}};t.rafId=requestAnimationFrame(i),t.isObserving=!0},unobserve(){t.rafId&&cancelAnimationFrame(t.rafId),t.isObserving&&(t.isObserving=!1)}}}const A2=O.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:l})=>l.zIndex.dropdown});
`,V2=({targetRef:l,targetElement:a,rootRef:t,fullContainerWidth:i,...n})=>{const s=e.useRef(null);return e.useEffect(()=>{const d=s.current,f=a??(l==null?void 0:l.current);if(d&&f){const m=B2(f,h=>{if(h){const{x:o,y:c,height:v,width:r}=h,{style:u}=d;u.top=`${c}px`,u.left=i?"0px":`${o}px`,u.height=`${v}px`,u.width=i?"100%":`${r}px`}});return m.observe(),()=>{m.unobserve()}}},[l,a,i]),h3.createPortal(g.jsx(A2,{ref:s,...n}),(t==null?void 0:t.current)||document.body)},R2=l=>{let a=l;return a=a.replace("box-shadow: ",""),a=a.replace(";",""),a},O2=O.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,F2=O.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${l=>l.theme.color["Neutral/Neutral 80"]});
  ${l=>l.$dimension==="m"?t0["Body/Body 2 Short"]:t0["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${l=>l.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${l=>H2(l.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${l=>R2(l.theme.shadow["Shadow 04"])});
  padding: ${l=>l.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,C2=O.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,D2=O(V2)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:l})=>l?`flex-direction: ${l};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:l})=>l.zIndex.tooltip});
`,F=8;function L2(l,a,t,i){const n=l.getBoundingClientRect(),s=a.getBoundingClientRect(),d=Object.entries(function(h){return{bottom:{check:(o,c)=>{const v=window.innerHeight-o.bottom-h>F+c.height,r=o.left+o.width/2>c.width/2,u=window.innerWidth-o.right-h+o.width/2>c.width/2;return v&&r&&u}},top:{check:(o,c)=>{const v=o.top>F+c.height,r=o.left+o.width/2>c.width/2,u=window.innerWidth-o.right-h+o.width/2>c.width/2;return v&&r&&u}},left:{check:(o,c)=>{const v=o.left>F+c.width,r=o.top>(c.height-o.height)/2,u=window.innerHeight-o.bottom-h>(c.height-o.height)/2;return v&&u&&r}},right:{check:(o,c)=>{const v=window.innerWidth-o.right-h>F+c.width,r=o.top>(c.height-o.height)/2,u=window.innerHeight-o.bottom-h>(c.height-o.height)/2;return v&&u&&r}},bottomRight:{check:(o,c)=>{const v=window.innerHeight-o.bottom-h>F+c.height,r=window.innerWidth-o.left-h>c.width;return v&&r}},bottomLeft:{check:(o,c)=>{const v=window.innerHeight-o.bottom-h>F+c.height,r=o.right>c.width;return v&&r}},topRight:{check:(o,c)=>{const v=o.top>F+c.height,r=window.innerWidth-o.left-h>c.width;return v&&r}},topLeft:{check:(o,c)=>{const v=o.top>F+c.height,r=o.right>c.width;return v&&r}},leftBottom:{check:(o,c)=>{const v=o.left>F+c.width,r=window.innerHeight-o.top-h>c.height;return v&&r}},leftTop:{check:(o,c)=>{const v=o.left>F+c.width,r=o.bottom>c.height;return v&&r}},rightBottom:{check:(o,c)=>{const v=window.innerWidth-o.right-h>F+c.width,r=window.innerHeight-o.top-h>c.height;return v&&r}},rightTop:{check:(o,c)=>{const v=window.innerWidth-o.right-h>F+c.width,r=o.bottom>c.height;return v&&r}},bottomPageCenter:{check:(o,c)=>{const v=window.innerHeight-o.bottom-h>F+c.height,r=window.innerWidth-h>=c.width;return v&&r}},topPageCenter:{check:(o,c)=>{const v=o.top>F+c.height,r=window.innerWidth-h>=c.width;return v&&r}}}}(t)),f=i?d.filter(h=>h[0].includes(i)&&h[1].check(n,s)):d.filter(h=>h[1].check(n,s)),m=i||"bottom";return f.length?f[0][0]:m}const e3=e.createContext({}),U2=({rootRef:l,...a})=>{const[t,i]=e.useState([]),[n,s]=e.useState(void 0),d=e.useCallback(c=>{s(c)},[]),f=e.useCallback(c=>{s(v=>v===c?void 0:v)},[]),m=e.useCallback(c=>{i(v=>{const r=v.indexOf(c);return r>-1?v.slice(0,r):v})},[]),h=e.useCallback(c=>{i(v=>[...v,c])},[]),o=e.useMemo(()=>({addDropdown:h,removeDropdown:m,dropdowns:t,rootRef:l,activateMenu:d,deactivateMenu:f,currentActiveMenu:n}),[h,m,t,l,d,f,n]);return g.jsx(e3.Provider,{value:o,children:a.children})},q2=1500,l3=e.forwardRef(({dimension:l="m",renderContent:a,targetRef:t,targetElement:i,tooltipPosition:n,...s},d)=>{const f=e.useRef(null),m=e.useRef(0),{rootRef:h}=e.useContext(e3),o=e.useMemo(()=>!a()&&a()!==0,[a]),[c,v]=e.useState(""),[r,u]=e.useState(!1),[_,k]=e.useState({});return e.useEffect(()=>{(S=>{const z=i??(t==null?void 0:t.current);if(z&&f.current){const p=L2(z,f.current,S,n),y=f.current;switch(p){case"leftBottom":case"leftTop":case"left":v("row-reverse"),u(!1),y.style.margin="0 8px 0 0",y.style.alignSelf=p==="leftBottom"?"flex-start":p==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":v("row"),u(!1),y.style.margin="0 0 0 8px",y.style.alignSelf=p==="rightBottom"?"flex-start":p==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":v("column-reverse"),u(p==="topPageCenter"),y.style.margin="0 0 8px 0",y.style.alignSelf=p==="topLeft"?"flex-end":p==="topRight"?"flex-start":"center";break;default:v("column"),u(p==="bottomPageCenter"),y.style.margin="8px 0 0 0",y.style.alignSelf=p==="bottomLeft"?"flex-end":p==="bottomRight"?"flex-start":"center"}}})(b2())},[a(),t,i,n,_]),e.useLayoutEffect(()=>{if(f.current&&!o){const S=new ResizeObserver(z=>{z.forEach(p=>{m.current===0?m.current=p.contentRect.height:k({})})});return S.observe(f.current),()=>{S.disconnect()}}},[o]),e.useEffect(()=>{f.current&&!o&&(f.current.style.opacity="1")},[o]),o?null:g.jsxs(D2,{targetElement:i??(t==null?void 0:t.current),rootRef:h,$flexDirection:c,fullContainerWidth:r,children:[g.jsx(C2,{}),g.jsx(O2,{ref:Y1(d,f),children:g.jsx(F2,{role:"tooltip",$dimension:l,...s,children:a()})})]})});l3.displayName="Tooltip";function T2(l){const a=t=>{const{forwardedRef:i,renderContent:n,container:s,withDelay:d,tooltipRef:f,tooltipPosition:m,...h}=t,o=!n()&&n()!==0,c=e.useRef(null),[v,r]=e.useState(!1),[u,_]=e.useState(null),[k,S]=e.useState();return e.useEffect(()=>{function z(){S(window.setTimeout(()=>r(!0),d?q2:0))}function p(){clearTimeout(k),r(!1)}if(u)return u.addEventListener("mouseenter",z),u.addEventListener("focus",z),u.addEventListener("mouseleave",p),u.addEventListener("blur",p),()=>{k&&clearTimeout(k),u.removeEventListener("mouseenter",z),u.removeEventListener("focus",z),u.removeEventListener("mouseleave",p),u.removeEventListener("blur",p)}},[u,S,r,k]),g.jsxs(g.Fragment,{children:[g.jsx(l,{...h,ref:Y1(i,c,_)}),v&&!o&&g.jsx(l3,{targetElement:c.current,renderContent:n,container:s,tooltipPosition:m,ref:f})]})};return e.forwardRef((t,i)=>g.jsx(a,{forwardedRef:i,...t}))}const P2=""+new URL("VTBGroupUI-SemiBold-857165e0.ttf",import.meta.url).href,I2=""+new URL("VTBGroupUI-Medium-2005d97c.otf",import.meta.url).href,G2=""+new URL("VTBGroupUI-Regular-6e523012.otf",import.meta.url).href,W2=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${P2}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${I2}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${G2}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
  ${t0["Main/XS-bold"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
  margin-bottom: 20px;
`,ag=O.div`
  ${t0["Additional/M"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,d0=O.code`
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,v0=O.pre`
  border: 1px dashed gray;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({theme:l})=>l.color["Neutral/Neutral 05"]};
  overflow-x: auto;
`,tg=O.div`
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
`,ig=O.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,ng=O.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
`,sg=O.div`
  margin-top: 16px;
  ${t0["Caption/XS"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 50"]};
  display: flex;
  gap: 8px;
`,og=O.div`
  display: inline-flex;
  cursor: pointer;
`,cg=e.forwardRef(({text:l},a)=>{const t=()=>{const i=document.createElement("textarea");i.value=l,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)};return g.jsx(og,{ref:a,children:g.jsx(a3,{width:16,height:16,onClick:t})})}),dg=T2(cg),vg=({label:l,children:a})=>g.jsxs(ig,{children:[g.jsx(t3,{children:l}),g.jsx(tg,{children:a})]}),C=(l,a)=>n6[l].map(t=>{const i=`${lg(l)}${t.name}`;return{...t,reactComponentName:i,Component:a[i]}}),hg=[{label:"Cards",value:"cards",icons:C("cards",x6)},{label:"Category",value:"category",icons:C("category",tl)},{label:"Communication",value:"communication",icons:C("communication",wl)},{label:"Documents",value:"documents",icons:C("documents",Ra)},{label:"Finance",value:"finance",icons:C("finance",C9)},{label:"Flags",value:"flags",icons:C("flags",Ho)},{label:"Payment",value:"payment",icons:C("payment",ic)},{label:"Redact",value:"redact",icons:C("redact",ud)},{label:"Location",value:"location",icons:C("location",Vo)},{label:"Security",value:"security",icons:C("security",Ld)},{label:"Service",value:"service",icons:C("service",$v)},{label:"System",value:"system",icons:C("system",eg)},{label:"Bank",value:"bank",icons:C("bank",v6)}],zg={title:"Icons/Icons",decorators:[l=>g.jsx("div",{style:{padding:24},children:g.jsx(w2,{theme:S2,children:g.jsxs(U2,{children:[g.jsx(N2,{}),g.jsx(l,{})]})})})],parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585"}}},rg=()=>g.jsxs(g.Fragment,{children:[g.jsx(t3,{style:{fontWeight:400},children:"Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро передавать смысл отображаемой информации или привлекать к ней дополнительное внимание."}),hg.map(({label:l,icons:a})=>g.jsx(vg,{label:l,children:a.map(({Component:t,name:i,path:n},s)=>g.jsxs(ng,{children:[g.jsx(t,{width:24,height:24}),g.jsxs(sg,{children:[i," ",g.jsx(dg,{renderContent:()=>"Копировать пример использования",text:`import { ReactComponent as ${i} } from '@admiral-ds/icons/${n}';`})]})]},i+s))},l))]}),fg=`
  config.module.rules.unshift({
    test: /\\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
  });
  `,mg=`
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
  `,gg=`
  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  `,ug=`
  declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
  
    export { ReactComponent };
    export default content;
  }
  `,pg=`
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
  }
  `,wg=()=>g.jsxs(ag,{style:{fontWeight:400},children:["В наших компонентах используется пакет иконок Admiral 2.1.",g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"https://www.figma.com/file/eb3mxWvJpdcnG4EBj8B9V7/Admiral-Icon-Kit?type=design&node-id=17-1240",children:"Макеты в Figma"})}),g.jsx("li",{children:g.jsx("a",{href:"https://www.npmjs.com/package/@admiral-ds/icons",children:"Пакет в npm"})})]}),"1) В проекте может понадобиться настройка загрузчиков svg-иконок. Например, в create-react-app уже изначально для webpack настроены загрузчики svg иконок. В нашем storybook настройки webpack для работы с иконками выглядят так:",g.jsx(v0,{children:g.jsx(d0,{children:fg})}),"Вот несколько полезных ссылок, касающихся настройки проектов для работы с иконками:",g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"https://react-svgr.com/docs/getting-started/",children:"Svgr - getting started"})}),g.jsx("li",{children:g.jsx("a",{href:"https://www.npmjs.com/package/@svgr/webpack",children:"Svgr - npm"})})]}),"2) Также в проектах, использующих TypeScript, при работе с иконками может понадобиться настройка тайпинга (создание файла деклараций custom.d.ts и включение его в tsconfig.json). В нашем проекте для этого используется следующий файл svg.d.ts:",g.jsx(v0,{children:g.jsx(d0,{children:mg})}),"Вот еще несколько способов написания подобного файла (примеры от пользователей библиотеки):",g.jsx(v0,{children:g.jsx(d0,{children:gg})}),g.jsx(v0,{children:g.jsx(d0,{children:ug})}),g.jsx(v0,{children:g.jsx(d0,{children:pg})}),"Ряд полезных ссылок по данной теме:",g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"https://webpack.js.org/guides/typescript/#importing-other-assets",children:"Webpack - Importing Other Assets"})}),g.jsx("li",{children:g.jsx("a",{href:"https://duncanleung.com/typescript-module-declearation-svg-img-assets/",children:"TypeScript Module Declaration for SVG Assets"})})]})]}),z0={render:rg,args:{},name:"Список иконок"},y0={render:wg,args:{},name:"Использование иконок"};var y1,E1,_1;z0.parameters={...z0.parameters,docs:{...(y1=z0.parameters)==null?void 0:y1.docs,source:{originalSource:`{
  render: Template,
  args: {},
  name: 'Список иконок'
}`,...(_1=(E1=z0.parameters)==null?void 0:E1.docs)==null?void 0:_1.source}}};var S1,H1,b1;y0.parameters={...y0.parameters,docs:{...(S1=y0.parameters)==null?void 0:S1.docs,source:{originalSource:`{
  render: Template2,
  args: {},
  name: 'Использование иконок'
}`,...(b1=(H1=y0.parameters)==null?void 0:H1.docs)==null?void 0:b1.source}}};const yg=["Icons","Loaders"];export{z0 as Icons,y0 as Loaders,yg as __namedExportsOrder,zg as default};