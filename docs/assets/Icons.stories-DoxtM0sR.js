import{r as e,R as c1}from"./index-uubelm5h.js";import{r as H3}from"./index-Dei0BBcc.js";var N0={exports:{}},N1={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S3=e,b3=Symbol.for("react.element"),V3=Symbol.for("react.fragment"),B3=Object.prototype.hasOwnProperty,C3=S3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O3={key:!0,ref:!0,__self:!0,__source:!0};function j0(l,t,a){var c,s={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(c in t)B3.call(t,c)&&!O3.hasOwnProperty(c)&&(s[c]=t[c]);if(l&&l.defaultProps)for(c in t=l.defaultProps,t)s[c]===void 0&&(s[c]=t[c]);return{$$typeof:b3,type:l,key:i,ref:n,props:s,_owner:C3.current}}N1.Fragment=V3;N1.jsx=j0;N1.jsxs=j0;N0.exports=N1;var f=N0.exports,q=function(){return q=Object.assign||function(t){for(var a,c=1,s=arguments.length;c<s;c++){a=arguments[c];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},q.apply(this,arguments)};function P1(l,t,a){if(a||arguments.length===2)for(var c=0,s=t.length,i;c<s;c++)(i||!(c in t))&&(i||(i=Array.prototype.slice.call(t,0,c)),i[c]=t[c]);return l.concat(i||Array.prototype.slice.call(t))}var O="-ms-",E1="-moz-",b="-webkit-",K0="comm",j1="rule",g0="decl",R3="@import",$0="@keyframes",A3="@layer",Z0=Math.abs,f0=String.fromCharCode,i0=Object.assign;function D3(l,t){return L(l,0)^45?(((t<<2^L(l,0))<<2^L(l,1))<<2^L(l,2))<<2^L(l,3):0}function J0(l){return l.trim()}function $(l,t){return(l=t.exec(l))?l[0]:l}function E(l,t,a){return l.replace(t,a)}function D1(l,t,a){return l.indexOf(t,a)}function L(l,t){return l.charCodeAt(t)|0}function o1(l,t,a){return l.slice(t,a)}function N(l){return l.length}function Y0(l){return l.length}function M1(l,t){return t.push(l),l}function L3(l,t){return l.map(t).join("")}function M0(l,t){return l.filter(function(a){return!$(a,t)})}var K1=1,v1=1,Q0=0,T=0,D=0,g1="";function $1(l,t,a,c,s,i,n,o){return{value:l,root:t,parent:a,type:c,props:s,children:i,line:K1,column:v1,length:n,return:"",siblings:o}}function Y(l,t){return i0($1("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},t)}function h1(l){for(;l.root;)l=Y(l.root,{children:[l]});M1(l,l.siblings)}function q3(){return D}function U3(){return D=T>0?L(g1,--T):0,v1--,D===10&&(v1=1,K1--),D}function W(){return D=T<Q0?L(g1,T++):0,v1++,D===10&&(v1=1,K1++),D}function t1(){return L(g1,T)}function L1(){return T}function Z1(l,t){return o1(g1,l,t)}function n0(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I3(l){return K1=v1=1,Q0=N(g1=l),T=0,[]}function P3(l){return g1="",l}function t0(l){return J0(Z1(T-1,h0(l===91?l+2:l===40?l+1:l)))}function T3(l){for(;(D=t1())&&D<33;)W();return n0(l)>2||n0(D)>3?"":" "}function G3(l,t){for(;--t&&W()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return Z1(l,L1()+(t<6&&t1()==32&&W()==32))}function h0(l){for(;W();)switch(D){case l:return T;case 34:case 39:l!==34&&l!==39&&h0(D);break;case 40:l===41&&h0(l);break;case 92:W();break}return T}function W3(l,t){for(;W()&&l+D!==57;)if(l+D===84&&t1()===47)break;return"/*"+Z1(t,T-1)+"*"+f0(l===47?l:W())}function N3(l){for(;!n0(t1());)W();return Z1(l,T)}function j3(l){return P3(q1("",null,null,null,[""],l=I3(l),0,[0],l))}function q1(l,t,a,c,s,i,n,o,u){for(var d=0,h=0,r=n,m=0,g=0,p=0,H=1,S=1,F=1,M=0,w="",y=s,B=i,k=c,x=w;S;)switch(p=M,M=W()){case 40:if(p!=108&&L(x,r-1)==58){D1(x+=E(t0(M),"&","&\f"),"&\f",Z0(d?o[d-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:x+=t0(M);break;case 9:case 10:case 13:case 32:x+=T3(p);break;case 92:x+=G3(L1()-1,7);continue;case 47:switch(t1()){case 42:case 47:M1(K3(W3(W(),L1()),t,a,u),u);break;default:x+="/"}break;case 123*H:o[d++]=N(x)*F;case 125*H:case 59:case 0:switch(M){case 0:case 125:S=0;case 59+h:F==-1&&(x=E(x,/\f/g,"")),g>0&&N(x)-r&&M1(g>32?E0(x+";",c,a,r-1,u):E0(E(x," ","")+";",c,a,r-2,u),u);break;case 59:x+=";";default:if(M1(k=z0(x,t,a,d,h,s,o,w,y=[],B=[],r,i),i),M===123)if(h===0)q1(x,t,k,k,y,i,r,o,B);else switch(m===99&&L(x,3)===110?100:m){case 100:case 108:case 109:case 115:q1(l,k,k,c&&M1(z0(l,k,k,0,0,s,o,w,s,y=[],r,B),B),s,B,r,o,c?y:B);break;default:q1(x,k,k,k,[""],B,0,o,B)}}d=h=g=0,H=F=1,w=x="",r=n;break;case 58:r=1+N(x),g=p;default:if(H<1){if(M==123)--H;else if(M==125&&H++==0&&U3()==125)continue}switch(x+=f0(M),M*H){case 38:F=h>0?1:(x+="\f",-1);break;case 44:o[d++]=(N(x)-1)*F,F=1;break;case 64:t1()===45&&(x+=t0(W())),m=t1(),h=r=N(w=x+=N3(L1())),M++;break;case 45:p===45&&N(x)==2&&(H=0)}}return i}function z0(l,t,a,c,s,i,n,o,u,d,h,r){for(var m=s-1,g=s===0?i:[""],p=Y0(g),H=0,S=0,F=0;H<c;++H)for(var M=0,w=o1(l,m+1,m=Z0(S=n[H])),y=l;M<p;++M)(y=J0(S>0?g[M]+" "+w:E(w,/&\f/g,g[M])))&&(u[F++]=y);return $1(l,t,a,s===0?j1:o,u,d,h,r)}function K3(l,t,a,c){return $1(l,t,a,K0,f0(q3()),o1(l,2,-2),0,c)}function E0(l,t,a,c,s){return $1(l,t,a,g0,o1(l,0,c),o1(l,c+1,-1),c,s)}function X0(l,t,a){switch(D3(l,t)){case 5103:return b+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+l+l;case 4789:return E1+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return b+l+E1+l+O+l+l;case 5936:switch(L(l,t+11)){case 114:return b+l+O+E(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return b+l+O+E(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return b+l+O+E(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return b+l+O+l+l;case 6165:return b+l+O+"flex-"+l+l;case 5187:return b+l+E(l,/(\w+).+(:[^]+)/,b+"box-$1$2"+O+"flex-$1$2")+l;case 5443:return b+l+O+"flex-item-"+E(l,/flex-|-self/g,"")+($(l,/flex-|baseline/)?"":O+"grid-row-"+E(l,/flex-|-self/g,""))+l;case 4675:return b+l+O+"flex-line-pack"+E(l,/align-content|flex-|-self/g,"")+l;case 5548:return b+l+O+E(l,"shrink","negative")+l;case 5292:return b+l+O+E(l,"basis","preferred-size")+l;case 6060:return b+"box-"+E(l,"-grow","")+b+l+O+E(l,"grow","positive")+l;case 4554:return b+E(l,/([^-])(transform)/g,"$1"+b+"$2")+l;case 6187:return E(E(E(l,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),l,"")+l;case 5495:case 3959:return E(l,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return E(E(l,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+l+l;case 4200:if(!$(l,/flex-|baseline/))return O+"grid-column-align"+o1(l,t)+l;break;case 2592:case 3360:return O+E(l,"template-","")+l;case 4384:case 3616:return a&&a.some(function(c,s){return t=s,$(c.props,/grid-\w+-end/)})?~D1(l+(a=a[t].value),"span",0)?l:O+E(l,"-start","")+l+O+"grid-row-span:"+(~D1(a,"span",0)?$(a,/\d+/):+$(a,/\d+/)-+$(l,/\d+/))+";":O+E(l,"-start","")+l;case 4896:case 4128:return a&&a.some(function(c){return $(c.props,/grid-\w+-start/)})?l:O+E(E(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return E(l,/(.+)-inline(.+)/,b+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(l)-1-t>6)switch(L(l,t+1)){case 109:if(L(l,t+4)!==45)break;case 102:return E(l,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+E1+(L(l,t+3)==108?"$3":"$2-$3"))+l;case 115:return~D1(l,"stretch",0)?X0(E(l,"stretch","fill-available"),t,a)+l:l}break;case 5152:case 5920:return E(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,s,i,n,o,u,d){return O+s+":"+i+d+(n?O+s+"-span:"+(o?u:+u-+i)+d:"")+l});case 4949:if(L(l,t+6)===121)return E(l,":",":"+b)+l;break;case 6444:switch(L(l,L(l,14)===45?18:11)){case 120:return E(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+b+(L(l,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+O+"$2box$3")+l;case 100:return E(l,":",":"+O)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(l,"scroll-","scroll-snap-")+l}return l}function T1(l,t){for(var a="",c=0;c<l.length;c++)a+=t(l[c],c,l,t)||"";return a}function $3(l,t,a,c){switch(l.type){case A3:if(l.children.length)break;case R3:case g0:return l.return=l.return||l.value;case K0:return"";case $0:return l.return=l.value+"{"+T1(l.children,c)+"}";case j1:if(!N(l.value=l.props.join(",")))return""}return N(a=T1(l.children,c))?l.return=l.value+"{"+a+"}":""}function Z3(l){var t=Y0(l);return function(a,c,s,i){for(var n="",o=0;o<t;o++)n+=l[o](a,c,s,i)||"";return n}}function J3(l){return function(t){t.root||(t=t.return)&&l(t)}}function Y3(l,t,a,c){if(l.length>-1&&!l.return)switch(l.type){case g0:l.return=X0(l.value,l.length,a);return;case $0:return T1([Y(l,{value:E(l.value,"@","@"+b)})],c);case j1:if(l.length)return L3(a=l.props,function(s){switch($(s,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":h1(Y(l,{props:[E(s,/:(read-\w+)/,":"+E1+"$1")]})),h1(Y(l,{props:[s]})),i0(l,{props:M0(a,c)});break;case"::placeholder":h1(Y(l,{props:[E(s,/:(plac\w+)/,":"+b+"input-$1")]})),h1(Y(l,{props:[E(s,/:(plac\w+)/,":"+E1+"$1")]})),h1(Y(l,{props:[E(s,/:(plac\w+)/,O+"input-$1")]})),h1(Y(l,{props:[s]})),i0(l,{props:M0(a,c)});break}return""})}}var Q3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},d1=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",e3="active",l3="data-styled-version",J1="6.1.11",u0=`/*!sc*/
`,p0=typeof window<"u"&&"HTMLElement"in window,X3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),Y1=Object.freeze([]),m1=Object.freeze({});function e2(l,t,a){return a===void 0&&(a=m1),l.theme!==a.theme&&l.theme||t||a.theme}var t3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,t2=/(^-|-$)/g;function F0(l){return l.replace(l2,"-").replace(t2,"")}var a2=/(a)(d)/gi,C1=52,y0=function(l){return String.fromCharCode(l+(l>25?39:97))};function r0(l){var t,a="";for(t=Math.abs(l);t>C1;t=t/C1|0)a=y0(t%C1)+a;return(y0(t%C1)+a).replace(a2,"$1-$2")}var a0,a3=5381,r1=function(l,t){for(var a=t.length;a;)l=33*l^t.charCodeAt(--a);return l},c3=function(l){return r1(a3,l)};function c2(l){return r0(c3(l)>>>0)}function s2(l){return l.displayName||l.name||"Component"}function c0(l){return typeof l=="string"&&!0}var s3=typeof Symbol=="function"&&Symbol.for,i3=s3?Symbol.for("react.memo"):60115,i2=s3?Symbol.for("react.forward_ref"):60112,n2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r2=((a0={})[i2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a0[i3]=n3,a0);function k0(l){return("type"in(t=l)&&t.type.$$typeof)===i3?n3:"$$typeof"in l?r2[l.$$typeof]:n2;var t}var o2=Object.defineProperty,v2=Object.getOwnPropertyNames,H0=Object.getOwnPropertySymbols,d2=Object.getOwnPropertyDescriptor,m2=Object.getPrototypeOf,S0=Object.prototype;function h3(l,t,a){if(typeof t!="string"){if(S0){var c=m2(t);c&&c!==S0&&h3(l,c,a)}var s=v2(t);H0&&(s=s.concat(H0(t)));for(var i=k0(l),n=k0(t),o=0;o<s.length;++o){var u=s[o];if(!(u in h2||a&&a[u]||n&&u in n||i&&u in i)){var d=d2(t,u);try{o2(l,u,d)}catch{}}}}return l}function s1(l){return typeof l=="function"}function w0(l){return typeof l=="object"&&"styledComponentId"in l}function l1(l,t){return l&&t?"".concat(l," ").concat(t):l||t||""}function b0(l,t){if(l.length===0)return"";for(var a=l[0],c=1;c<l.length;c++)a+=l[c];return a}function F1(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function o0(l,t,a){if(a===void 0&&(a=!1),!a&&!F1(l)&&!Array.isArray(l))return t;if(Array.isArray(t))for(var c=0;c<t.length;c++)l[c]=o0(l[c],t[c]);else if(F1(t))for(var c in t)l[c]=o0(l[c],t[c]);return l}function _0(l,t){Object.defineProperty(l,"toString",{value:t})}function Q(l){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var g2=function(){function l(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return l.prototype.indexOfGroup=function(t){for(var a=0,c=0;c<t;c++)a+=this.groupSizes[c];return a},l.prototype.insertRules=function(t,a){if(t>=this.groupSizes.length){for(var c=this.groupSizes,s=c.length,i=s;t>=i;)if((i<<=1)<0)throw Q(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(c),this.length=i;for(var n=s;n<i;n++)this.groupSizes[n]=0}for(var o=this.indexOfGroup(t+1),u=(n=0,a.length);n<u;n++)this.tag.insertRule(o,a[n])&&(this.groupSizes[t]++,o++)},l.prototype.clearGroup=function(t){if(t<this.length){var a=this.groupSizes[t],c=this.indexOfGroup(t),s=c+a;this.groupSizes[t]=0;for(var i=c;i<s;i++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(t){var a="";if(t>=this.length||this.groupSizes[t]===0)return a;for(var c=this.groupSizes[t],s=this.indexOfGroup(t),i=s+c,n=s;n<i;n++)a+="".concat(this.tag.getRule(n)).concat(u0);return a},l}(),U1=new Map,G1=new Map,I1=1,O1=function(l){if(U1.has(l))return U1.get(l);for(;G1.has(I1);)I1++;var t=I1++;return U1.set(l,t),G1.set(t,l),t},f2=function(l,t){I1=t+1,U1.set(l,t),G1.set(t,l)},u2="style[".concat(d1,"][").concat(l3,'="').concat(J1,'"]'),p2=new RegExp("^".concat(d1,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),w2=function(l,t,a){for(var c,s=a.split(","),i=0,n=s.length;i<n;i++)(c=s[i])&&l.registerName(t,c)},_2=function(l,t){for(var a,c=((a=t.textContent)!==null&&a!==void 0?a:"").split(u0),s=[],i=0,n=c.length;i<n;i++){var o=c[i].trim();if(o){var u=o.match(p2);if(u){var d=0|parseInt(u[1],10),h=u[2];d!==0&&(f2(h,d),w2(l,h,u[3]),l.getTag().insertRules(d,s)),s.length=0}else s.push(o)}}};function x2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r3=function(l){var t=document.head,a=l||t,c=document.createElement("style"),s=function(o){var u=Array.from(o.querySelectorAll("style[".concat(d1,"]")));return u[u.length-1]}(a),i=s!==void 0?s.nextSibling:null;c.setAttribute(d1,e3),c.setAttribute(l3,J1);var n=x2();return n&&c.setAttribute("nonce",n),a.insertBefore(c,i),c},M2=function(){function l(t){this.element=r3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var c=document.styleSheets,s=0,i=c.length;s<i;s++){var n=c[s];if(n.ownerNode===a)return n}throw Q(17)}(this.element),this.length=0}return l.prototype.insertRule=function(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},l.prototype.getRule=function(t){var a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""},l}(),z2=function(){function l(t){this.element=r3(t),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(t,a){if(t<=this.length&&t>=0){var c=document.createTextNode(a);return this.element.insertBefore(c,this.nodes[t]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},l.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},l}(),E2=function(){function l(t){this.rules=[],this.length=0}return l.prototype.insertRule=function(t,a){return t<=this.length&&(this.rules.splice(t,0,a),this.length++,!0)},l.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},l.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},l}(),V0=p0,F2={isServer:!p0,useCSSOMInjection:!X3},o3=function(){function l(t,a,c){t===void 0&&(t=m1),a===void 0&&(a={});var s=this;this.options=q(q({},F2),t),this.gs=a,this.names=new Map(c),this.server=!!t.isServer,!this.server&&p0&&V0&&(V0=!1,function(i){for(var n=document.querySelectorAll(u2),o=0,u=n.length;o<u;o++){var d=n[o];d&&d.getAttribute(d1)!==e3&&(_2(i,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),_0(this,function(){return function(i){for(var n=i.getTag(),o=n.length,u="",d=function(r){var m=function(F){return G1.get(F)}(r);if(m===void 0)return"continue";var g=i.names.get(m),p=n.getGroup(r);if(g===void 0||p.length===0)return"continue";var H="".concat(d1,".g").concat(r,'[id="').concat(m,'"]'),S="";g!==void 0&&g.forEach(function(F){F.length>0&&(S+="".concat(F,","))}),u+="".concat(p).concat(H,'{content:"').concat(S,'"}').concat(u0)},h=0;h<o;h++)d(h);return u}(s)})}return l.registerId=function(t){return O1(t)},l.prototype.reconstructWithOptions=function(t,a){return a===void 0&&(a=!0),new l(q(q({},this.options),t),this.gs,a&&this.names||void 0)},l.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(t=function(a){var c=a.useCSSOMInjection,s=a.target;return a.isServer?new E2(s):c?new M2(s):new z2(s)}(this.options),new g2(t)));var t},l.prototype.hasNameForId=function(t,a){return this.names.has(t)&&this.names.get(t).has(a)},l.prototype.registerName=function(t,a){if(O1(t),this.names.has(t))this.names.get(t).add(a);else{var c=new Set;c.add(a),this.names.set(t,c)}},l.prototype.insertRules=function(t,a,c){this.registerName(t,a),this.getTag().insertRules(O1(t),c)},l.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},l.prototype.clearRules=function(t){this.getTag().clearGroup(O1(t)),this.clearNames(t)},l.prototype.clearTag=function(){this.tag=void 0},l}(),y2=/&/g,k2=/^\s*\/\/.*$/gm;function v3(l,t){return l.map(function(a){return a.type==="rule"&&(a.value="".concat(t," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(t," ")),a.props=a.props.map(function(c){return"".concat(t," ").concat(c)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=v3(a.children,t)),a})}function H2(l){var t,a,c,s=m1,i=s.options,n=i===void 0?m1:i,o=s.plugins,u=o===void 0?Y1:o,d=function(m,g,p){return p.startsWith(a)&&p.endsWith(a)&&p.replaceAll(a,"").length>0?".".concat(t):m},h=u.slice();h.push(function(m){m.type===j1&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(y2,a).replace(c,d))}),n.prefix&&h.push(Y3),h.push($3);var r=function(m,g,p,H){g===void 0&&(g=""),p===void 0&&(p=""),H===void 0&&(H="&"),t=H,a=g,c=new RegExp("\\".concat(a,"\\b"),"g");var S=m.replace(k2,""),F=j3(p||g?"".concat(p," ").concat(g," { ").concat(S," }"):S);n.namespace&&(F=v3(F,n.namespace));var M=[];return T1(F,Z3(h.concat(J3(function(w){return M.push(w)})))),M};return r.hash=u.length?u.reduce(function(m,g){return g.name||Q(15),r1(m,g.name)},a3).toString():"",r}var S2=new o3,v0=H2(),d3=c1.createContext({shouldForwardProp:void 0,styleSheet:S2,stylis:v0});d3.Consumer;c1.createContext(void 0);function B0(){return e.useContext(d3)}var b2=function(){function l(t,a){var c=this;this.inject=function(s,i){i===void 0&&(i=v0);var n=c.name+i.hash;s.hasNameForId(c.id,n)||s.insertRules(c.id,n,i(c.rules,n,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=a,_0(this,function(){throw Q(12,String(c.name))})}return l.prototype.getName=function(t){return t===void 0&&(t=v0),this.name+t.hash},l}(),V2=function(l){return l>="A"&&l<="Z"};function C0(l){for(var t="",a=0;a<l.length;a++){var c=l[a];if(a===1&&c==="-"&&l[0]==="-")return l;V2(c)?t+="-"+c.toLowerCase():t+=c}return t.startsWith("ms-")?"-"+t:t}var m3=function(l){return l==null||l===!1||l===""},g3=function(l){var t,a,c=[];for(var s in l){var i=l[s];l.hasOwnProperty(s)&&!m3(i)&&(Array.isArray(i)&&i.isCss||s1(i)?c.push("".concat(C0(s),":"),i,";"):F1(i)?c.push.apply(c,P1(P1(["".concat(s," {")],g3(i),!1),["}"],!1)):c.push("".concat(C0(s),": ").concat((t=s,(a=i)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in Q3||t.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return c};function a1(l,t,a,c){if(m3(l))return[];if(w0(l))return[".".concat(l.styledComponentId)];if(s1(l)){if(!s1(i=l)||i.prototype&&i.prototype.isReactComponent||!t)return[l];var s=l(t);return a1(s,t,a,c)}var i;return l instanceof b2?a?(l.inject(a,c),[l.getName(c)]):[l]:F1(l)?g3(l):Array.isArray(l)?Array.prototype.concat.apply(Y1,l.map(function(n){return a1(n,t,a,c)})):[l.toString()]}function B2(l){for(var t=0;t<l.length;t+=1){var a=l[t];if(s1(a)&&!w0(a))return!1}return!0}var C2=c3(J1),O2=function(){function l(t,a,c){this.rules=t,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&B2(t),this.componentId=a,this.baseHash=r1(C2,a),this.baseStyle=c,o3.registerId(a)}return l.prototype.generateAndInjectStyles=function(t,a,c){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))s=l1(s,this.staticRulesId);else{var i=b0(a1(this.rules,t,a,c)),n=r0(r1(this.baseHash,i)>>>0);if(!a.hasNameForId(this.componentId,n)){var o=c(i,".".concat(n),void 0,this.componentId);a.insertRules(this.componentId,n,o)}s=l1(s,n),this.staticRulesId=n}else{for(var u=r1(this.baseHash,c.hash),d="",h=0;h<this.rules.length;h++){var r=this.rules[h];if(typeof r=="string")d+=r;else if(r){var m=b0(a1(r,t,a,c));u=r1(u,m+h),d+=m}}if(d){var g=r0(u>>>0);a.hasNameForId(this.componentId,g)||a.insertRules(this.componentId,g,c(d,".".concat(g),void 0,this.componentId)),s=l1(s,g)}}return s},l}(),y1=c1.createContext(void 0);y1.Consumer;function R2(){var l=e.useContext(y1);if(!l)throw Q(18);return l}function A2(l){var t=c1.useContext(y1),a=e.useMemo(function(){return function(c,s){if(!c)throw Q(14);if(s1(c)){var i=c(s);return i}if(Array.isArray(c)||typeof c!="object")throw Q(8);return s?q(q({},s),c):c}(l.theme,t)},[l.theme,t]);return l.children?c1.createElement(y1.Provider,{value:a},l.children):null}var s0={};function D2(l,t,a){var c=w0(l),s=l,i=!c0(l),n=t.attrs,o=n===void 0?Y1:n,u=t.componentId,d=u===void 0?function(y,B){var k=typeof y!="string"?"sc":F0(y);s0[k]=(s0[k]||0)+1;var x="".concat(k,"-").concat(c2(J1+k+s0[k]));return B?"".concat(B,"-").concat(x):x}(t.displayName,t.parentComponentId):u,h=t.displayName,r=h===void 0?function(y){return c0(y)?"styled.".concat(y):"Styled(".concat(s2(y),")")}(l):h,m=t.displayName&&t.componentId?"".concat(F0(t.displayName),"-").concat(t.componentId):t.componentId||d,g=c&&s.attrs?s.attrs.concat(o).filter(Boolean):o,p=t.shouldForwardProp;if(c&&s.shouldForwardProp){var H=s.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;p=function(y,B){return H(y,B)&&S(y,B)}}else p=H}var F=new O2(a,m,c?s.componentStyle:void 0);function M(y,B){return function(k,x,j){var A=k.attrs,C=k.componentStyle,V=k.defaultProps,K=k.foldedComponentIds,H1=k.styledComponentId,n1=k.target,f1=c1.useContext(y1),X1=B0(),_=k.shouldForwardProp||X1.shouldForwardProp,X=e2(x,f1,V)||m1,G=function(b1,p1,V1){for(var w1,e1=q(q({},p1),{className:void 0,theme:V1}),l0=0;l0<b1.length;l0+=1){var B1=s1(w1=b1[l0])?w1(e1):w1;for(var J in B1)e1[J]=J==="className"?l1(e1[J],B1[J]):J==="style"?q(q({},e1[J]),B1[J]):B1[J]}return p1.className&&(e1.className=l1(e1.className,p1.className)),e1}(A,x,X),S1=G.as||n1,u1={};for(var Z in G)G[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&G.theme===X||(Z==="forwardedAs"?u1.as=G.forwardedAs:_&&!_(Z,S1)||(u1[Z]=G[Z]));var x0=function(b1,p1){var V1=B0(),w1=b1.generateAndInjectStyles(p1,V1.styleSheet,V1.stylis);return w1}(C,G),e0=l1(K,H1);return x0&&(e0+=" "+x0),G.className&&(e0+=" "+G.className),u1[c0(S1)&&!t3.has(S1)?"class":"className"]=e0,u1.ref=j,e.createElement(S1,u1)}(w,y,B)}M.displayName=r;var w=c1.forwardRef(M);return w.attrs=g,w.componentStyle=F,w.displayName=r,w.shouldForwardProp=p,w.foldedComponentIds=c?l1(s.foldedComponentIds,s.styledComponentId):"",w.styledComponentId=m,w.target=c?s.target:l,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=c?function(B){for(var k=[],x=1;x<arguments.length;x++)k[x-1]=arguments[x];for(var j=0,A=k;j<A.length;j++)o0(B,A[j],!0);return B}({},s.defaultProps,y):y}}),_0(w,function(){return".".concat(w.styledComponentId)}),i&&h3(w,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function O0(l,t){for(var a=[l[0]],c=0,s=t.length;c<s;c+=1)a.push(t[c],l[c+1]);return a}var R0=function(l){return Object.assign(l,{isCss:!0})};function z(l){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(s1(l)||F1(l))return R0(a1(O0(Y1,P1([l],t,!0))));var c=l;return t.length===0&&c.length===1&&typeof c[0]=="string"?a1(c):R0(a1(O0(c,t)))}function d0(l,t,a){if(a===void 0&&(a=m1),!t)throw Q(1,t);var c=function(s){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];return l(t,a,z.apply(void 0,P1([s],i,!1)))};return c.attrs=function(s){return d0(l,t,q(q({},a),{attrs:Array.prototype.concat(a.attrs,s).filter(Boolean)}))},c.withConfig=function(s){return d0(l,t,q(q({},a),s))},c}var f3=function(l){return d0(D2,l)},R=f3;t3.forEach(function(l){R[l]=f3(l)});const L2={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F3F4F6","Neutral/Neutral 10":"#E5E7EB","Neutral/Neutral 20":"#D5D8DE","Neutral/Neutral 30":"#B0B5BD","Neutral/Neutral 40":"#9BA0AA","Neutral/Neutral 50":"#717681","Neutral/Neutral 60":"#646973","Neutral/Neutral 70":"#4F525A","Neutral/Neutral 80":"#35383F","Neutral/Neutral 90":"#23262D","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#121316","Special/Dark Static Neutral 05":"#1C1E22","Special/Dark Static Neutral 10":"#282A2F","Special/Dark Static Neutral 20":"#383C44","Special/Dark Static Neutral 30":"#4E535D","Special/Dark Static Neutral 50":"#7F8692","Special/Dark Static Neutral 70":"#A6ABB4","Special/Dark Static Neutral 80":"#C7CAD1","Special/Dark Static Neutral 90":"#E2E5E9","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#00000066","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},q2={"Shadow 02":`
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
`},U2={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},A0={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(l,t)=>`Page ${l} of ${t}`,pageSizeSelectLabel:(l,t)=>`Entries ${l} out of ${t}`,itemRangeText:(l,t,a)=>`${l}–${t}  entries out of ${a}`,pageRangeText:l=>`from ${l} ${l===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(l,t,a)=>`${l}–${t} entries out of ${a}`},progressStepper:{renderNextStepName:l=>`Next - ${l}`,stepName:["step","steps"],progressText:(l,t,a)=>`${l} from ${t} ${a}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"}},I2={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(l,t)=>`Страница ${l} из ${t}`,pageSizeSelectLabel:(l,t)=>`Записей ${l} из ${t}`,itemRangeText:(l,t,a)=>`${l}–${t} записей из ${a}`,pageRangeText:l=>`из ${l} ${l===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(l,t,a)=>`${l}–${t} записей из ${a}`},progressStepper:{renderNextStepName:l=>`Далее - ${l}`,stepName:["шаг","шагов"],progressText:(l,t,a)=>`${l} из ${t} ${a}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"}},en:A0,"en-US":{...A0,firstDayOfWeek:0}},i1=P2();function P2(){return{"Main/XXL":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":z`
      font-family: var(--admiral-font-family, ${l=>l.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":z`
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
    `,"Button/S":z`
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
    `,"Caption/XS":z`
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
    `,"Header/HL1":z`
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
    `,"Header/HL2":z`
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
    `,"Header/HL3":z`
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
    `,"Header/H1":z`
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
    `,"Header/H2":z`
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
    `,"Header/H3":z`
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
    `,"Header/H4":z`
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
    `,"Header/H5":z`
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
    `,"Header/H6":z`
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
    `,"Subtitle/Subtitle 1":z`
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
    `,"Subtitle/Subtitle 2":z`
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
    `,"Subtitle/Subtitle 3":z`
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
    `,"Body/Body 1 Long":z`
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
    `,"Body/Body 1 Short":z`
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
    `,"Body/Body 2 Long":z`
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
    `,"Body/Body 2 Short":z`
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
    `,"Button/Button 1":z`
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
    `,"Button/Button 2":z`
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
    `,"Caption/Caption 1":z`
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
    `,"Caption/Caption 2":z`
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
    `}}const u3={color:L2,shadow:q2,zIndex:U2,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:I2,typography:i1,fontFamily:"'VTB Group UI', sans-serif"};function p3(l){switch(l.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function T2(l){switch(l.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function D0(l){return l!==null&&!Array.isArray(l)&&typeof l=="object"}const W1={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let l=0;l<24;l+=1)W1[112+l]="F"+(l+1);for(let l=0;l<26;l+=1){let t=l+65;W1[t]=[String.fromCharCode(t+32),String.fromCharCode(t)]}const v={codes:W1,getCode(l){return D0(l)?l.keyCode||l.which||this[l.key]:this[l]},getKey(l){const t=D0(l);if(t&&l.key)return l.key;let a=W1[t?l.keyCode||l.which:l];return Array.isArray(a)&&(a=t?a[l.shiftKey?1:0]:a[0]),a},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};v.Spacebar=v[" "],v.Digit0=v[0],v.Digit1=v[1],v.Digit2=v[2],v.Digit3=v[3],v.Digit4=v[4],v.Digit5=v[5],v.Digit6=v[6],v.Digit7=v[7],v.Digit8=v[8],v.Digit9=v[9],v.Tilde=v["~"],v.GraveAccent=v["`"],v.ExclamationPoint=v["!"],v.AtSign=v["@"],v.PoundSign=v["#"],v.PercentSign=v["%"],v.Caret=v["^"],v.Ampersand=v["&"],v.PlusSign=v["+"],v.MinusSign=v["-"],v.EqualsSign=v["="],v.DivisionSign=v["/"],v.MultiplicationSign=v["*"],v.Comma=v[","],v.Decimal=v["."],v.Colon=v[":"],v.Semicolon=v[";"],v.Pipe=v["|"],v.BackSlash=v["\\"],v.QuestionMark=v["?"],v.SingleQuote=v["'"],v.DoubleQuote=v['"'],v.LeftCurlyBrace=v["{"],v.RightCurlyBrace=v["}"],v.LeftParenthesis=v["("],v.RightParenthesis=v[")"],v.LeftAngleBracket=v["<"],v.RightAngleBracket=v[">"],v.LeftSquareBracket=v["["],v.RightSquareBracket=v["]"];var L0;function m0(){return m0=Object.assign?Object.assign.bind():function(l){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(l[c]=a[c])}return l},m0.apply(this,arguments)}var G2=function(l){return e.createElement("svg",m0({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},l),L0||(L0=e.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};const W2=24,N2=20,j2=16,K2=6,$2=4;function k1(l){switch(l){case"lSmall":case"lBig":default:return W2;case"mSmall":case"mBig":return N2;case"s":return j2}}function w3(l){switch(l){case"lBig":case"mBig":default:return K2;case"lSmall":case"mSmall":case"s":return $2}}function q0(l){return k1(l)+2*w3(l)}const Z2=z`
  & *[fill^='#'] {
    fill: ${l=>{switch(l.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${l.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${l.theme.color["Neutral/Neutral 50"]})`;default:return l.$iconColor}}};
  }
`,J2=R.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${Z2}

  & > svg {
    height: ${l=>k1(l.$dimension)}px;
    width: ${l=>k1(l.$dimension)}px;
  }
`,z1=R.div`
  width: ${l=>q0(l.$dimension)}px;
  height: ${l=>q0(l.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Y2=z`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${l=>l.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${z1} {
      background-color: ${l=>l.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${l.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${z1} {
      background-color: var(--admiral-color-Opacity_Hover, ${l=>l.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${z1} {
      background-color: var(--admiral-color-Opacity_Press, ${l=>l.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${z1} {
      background-color: transparent;
    }
  }
`,Q2=R.button`
  position: relative;
  padding: 0;
  margin: ${l=>w3(l.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${l=>k1(l.$dimension)}px;
  width: ${l=>k1(l.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${l=>p3(l.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: default;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${l=>l.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${Y2}
  }
`,X2=e.forwardRef(({type:l="button",dimension:t="lBig",disabled:a=!1,highlightFocus:c=!0,appearance:s,children:i,...n},o)=>{const u=typeof s=="object"?s.iconColor?s.iconColor:"secondary":s;return f.jsxs(Q2,{ref:o,type:l,$dimension:t,disabled:a,$highlightFocus:c,...n,children:[f.jsx(z1,{$dimension:t,"aria-hidden":!0}),f.jsx(J2,{$dimension:t,$iconColor:u,"aria-hidden":!0,children:i})]})}),e6=e.forwardRef(({className:l,...t},a)=>f.jsx(X2,{ref:a,className:`close-button ${l||""}`,...t,children:f.jsx(G2,{"aria-hidden":!0})}));function _3(...l){return t=>{l.forEach(a=>{a&&(typeof a=="function"?a(t):a.current=t)})}}const l6=()=>{let l=0;const t=document.createElement("div");return t.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,t.style.overflow="scroll",t.style.fontSize="14px",t.style.height="50px",t.style.maxHeight="50px",t.style.width="100px",t.style.position="absolute",t.style.top="-100000px",t.style.left="-100000px",document.body.appendChild(t),l=t.offsetWidth-t.clientWidth,document.body.removeChild(t),l||16},t6=["bottom","height","left","right","top","width"];function a6(l,t){const a={};return{observe(){a.rafId&&cancelAnimationFrame(a.rafId);const c=()=>{if(a.isObserving){const{bottom:s,height:i,left:n,right:o,top:u,width:d,x:h,y:r}=l.getBoundingClientRect(),m={bottom:s,height:i,left:n,right:o,top:u,width:d,x:h||n,y:r||u};((g={},p={})=>t6.some(H=>g[H]!==p[H]))(m,a.rect)&&(a.rect=m,t(a.rect)),a.rafId=requestAnimationFrame(c)}};a.rafId=requestAnimationFrame(c),a.isObserving=!0},unobserve(){a.rafId&&cancelAnimationFrame(a.rafId),a.isObserving&&(a.isObserving=!1)}}}const c6=R.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:l})=>l.zIndex.dropdown});
`,x3=({targetRef:l,targetElement:t,rootRef:a,fullContainerWidth:c,...s})=>{const i=e.useRef(null);return e.useEffect(()=>{const n=i.current,o=t??(l==null?void 0:l.current);if(n&&o){const u=a6(o,d=>{if(d){const{x:h,y:r,height:m,width:g}=d,{style:p}=n;p.top=`${r}px`,p.left=c?"0px":`${h}px`,p.height=`${m}px`,p.width=c?"100%":`${g}px`}});return u.observe(),()=>{u.unobserve()}}},[l,t,c]),H3.createPortal(f.jsx(c6,{ref:i,...s}),(a==null?void 0:a.current)||document.body)},M3=l=>{let t=l;return t=t.replace("box-shadow: ",""),t=t.replace(";",""),t},s6=R.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,i6=R.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${l=>l.theme.color["Neutral/Neutral 80"]});
  ${l=>l.$dimension==="m"?i1["Body/Body 2 Short"]:i1["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${l=>l.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${l=>p3(l.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${l=>M3(l.theme.shadow["Shadow 04"])});
  padding: ${l=>l.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,n6=R.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,h6=R(x3)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:l})=>l?`flex-direction: ${l};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:l})=>l.zIndex.tooltip});
`,U=8;function r6(l,t,a,c){const s=l.getBoundingClientRect(),i=t.getBoundingClientRect(),n=Object.entries(function(d){return{bottom:{check:(h,r)=>{const m=window.innerHeight-h.bottom-d>U+r.height,g=h.left+h.width/2>r.width/2,p=window.innerWidth-h.right-d+h.width/2>r.width/2;return m&&g&&p}},top:{check:(h,r)=>{const m=h.top>U+r.height,g=h.left+h.width/2>r.width/2,p=window.innerWidth-h.right-d+h.width/2>r.width/2;return m&&g&&p}},left:{check:(h,r)=>{const m=h.left>U+r.width,g=h.top>(r.height-h.height)/2,p=window.innerHeight-h.bottom-d>(r.height-h.height)/2;return m&&p&&g}},right:{check:(h,r)=>{const m=window.innerWidth-h.right-d>U+r.width,g=h.top>(r.height-h.height)/2,p=window.innerHeight-h.bottom-d>(r.height-h.height)/2;return m&&p&&g}},bottomRight:{check:(h,r)=>{const m=window.innerHeight-h.bottom-d>U+r.height,g=window.innerWidth-h.left-d>r.width;return m&&g}},bottomLeft:{check:(h,r)=>{const m=window.innerHeight-h.bottom-d>U+r.height,g=h.right>r.width;return m&&g}},topRight:{check:(h,r)=>{const m=h.top>U+r.height,g=window.innerWidth-h.left-d>r.width;return m&&g}},topLeft:{check:(h,r)=>{const m=h.top>U+r.height,g=h.right>r.width;return m&&g}},leftBottom:{check:(h,r)=>{const m=h.left>U+r.width,g=window.innerHeight-h.top-d>r.height;return m&&g}},leftTop:{check:(h,r)=>{const m=h.left>U+r.width,g=h.bottom>r.height;return m&&g}},rightBottom:{check:(h,r)=>{const m=window.innerWidth-h.right-d>U+r.width,g=window.innerHeight-h.top-d>r.height;return m&&g}},rightTop:{check:(h,r)=>{const m=window.innerWidth-h.right-d>U+r.width,g=h.bottom>r.height;return m&&g}},bottomPageCenter:{check:(h,r)=>{const m=window.innerHeight-h.bottom-d>U+r.height,g=window.innerWidth-d>=r.width;return m&&g}},topPageCenter:{check:(h,r)=>{const m=h.top>U+r.height,g=window.innerWidth-d>=r.width;return m&&g}}}}(a)),o=c?n.filter(d=>d[0].includes(c)&&d[1].check(s,i)):n.filter(d=>d[1].check(s,i)),u=c||"bottom";return o.length?o[0][0]:u}const Q1=e.createContext({}),o6=({rootRef:l,...t})=>{const[a,c]=e.useState([]),[s,i]=e.useState(void 0),n=e.useCallback(r=>{i(r)},[]),o=e.useCallback(r=>{i(m=>m===r?void 0:m)},[]),u=e.useCallback(r=>{c(m=>{const g=m.indexOf(r);return g>-1?m.slice(0,g):m})},[]),d=e.useCallback(r=>{c(m=>[...m,r])},[]),h=e.useMemo(()=>({addDropdown:d,removeDropdown:u,dropdowns:a,rootRef:l,activateMenu:n,deactivateMenu:o,currentActiveMenu:s}),[d,u,a,l,n,o,s]);return f.jsx(Q1.Provider,{value:h,children:t.children})};function v6(l){const{dropdowns:t=[],addDropdown:a,removeDropdown:c,activateMenu:s,deactivateMenu:i,currentActiveMenu:n}=e.useContext(Q1),o=t.indexOf(l);return{addDropdown:a,removeDropdown:c,dropdowns:o>-1?t.slice(o+1,t.length):[],activateMenu:s,deactivateMenu:i,currentActiveMenu:n}}const d6=(l,t)=>!t.some(a=>a.current&&a.current.contains(l.target)),m6=1500,z3=e.forwardRef(({dimension:l="m",renderContent:t,targetRef:a,targetElement:c,tooltipPosition:s,...i},n)=>{const o=e.useRef(null),u=e.useRef(0),{rootRef:d}=e.useContext(Q1),h=e.useMemo(()=>!t()&&t()!==0,[t]),[r,m]=e.useState(""),[g,p]=e.useState(!1),[H,S]=e.useState({});return e.useEffect(()=>{(F=>{const M=c??(a==null?void 0:a.current);if(M&&o.current){const w=r6(M,o.current,F,s),y=o.current;switch(w){case"leftBottom":case"leftTop":case"left":m("row-reverse"),p(!1),y.style.margin="0 8px 0 0",y.style.alignSelf=w==="leftBottom"?"flex-start":w==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":m("row"),p(!1),y.style.margin="0 0 0 8px",y.style.alignSelf=w==="rightBottom"?"flex-start":w==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":m("column-reverse"),p(w==="topPageCenter"),y.style.margin="0 0 8px 0",y.style.alignSelf=w==="topLeft"?"flex-end":w==="topRight"?"flex-start":"center";break;default:m("column"),p(w==="bottomPageCenter"),y.style.margin="8px 0 0 0",y.style.alignSelf=w==="bottomLeft"?"flex-end":w==="bottomRight"?"flex-start":"center"}}})(l6())},[t(),a,c,s,H]),e.useLayoutEffect(()=>{if(o.current&&!h){const F=new ResizeObserver(M=>{M.forEach(w=>{u.current===0?u.current=w.contentRect.height:S({})})});return F.observe(o.current),()=>{F.disconnect()}}},[h]),e.useEffect(()=>{o.current&&!h&&(o.current.style.opacity="1")},[h]),h?null:f.jsxs(h6,{targetElement:c??(a==null?void 0:a.current),rootRef:d,$flexDirection:r,fullContainerWidth:g,children:[f.jsx(n6,{}),f.jsx(s6,{ref:_3(n,o),children:f.jsx(i6,{role:"tooltip",$dimension:l,...i,children:t()})})]})});z3.displayName="Tooltip";function g6(l){const t=a=>{const{forwardedRef:c,renderContent:s,container:i,withDelay:n,tooltipRef:o,tooltipPosition:u,...d}=a,h=!s()&&s()!==0,r=e.useRef(null),[m,g]=e.useState(!1),[p,H]=e.useState(null),[S,F]=e.useState();return e.useEffect(()=>{function M(){F(window.setTimeout(()=>g(!0),n?m6:0))}function w(){clearTimeout(S),g(!1)}if(p)return p.addEventListener("mouseenter",M),p.addEventListener("focus",M),p.addEventListener("mouseleave",w),p.addEventListener("blur",w),()=>{S&&clearTimeout(S),p.removeEventListener("mouseenter",M),p.removeEventListener("focus",M),p.removeEventListener("mouseleave",w),p.removeEventListener("blur",w)}},[p,F,g,S]),f.jsxs(f.Fragment,{children:[f.jsx(l,{...d,ref:_3(c,r,H)}),m&&!h&&f.jsx(z3,{targetElement:r.current,renderContent:s,container:i,tooltipPosition:u,ref:o})]})};return e.forwardRef((a,c)=>f.jsx(t,{forwardedRef:c,...a}))}function f6(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const u6=(l,t)=>{const a=e.useCallback(c=>{l.every(s=>s.current&&!s.current.contains(c.target))&&t(c)},[t,l]);e.useEffect(()=>(document.addEventListener("mousedown",a,!0),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a,!0),document.removeEventListener("touchstart",a)}),[a])},p6=(l,t)=>{let a,c=!1,s=!1;return[(...i)=>{if(s||c)return;const n=l(...i);return c=!0,a=window.setTimeout(()=>{c=!1},t),n},()=>{s=!0,clearTimeout(a)}]};function w6(l,t,a){a.current=l,t&&(typeof t!="function"?t.current=l:function(c){return typeof c=="function"}(t)&&t(l))}const _6=l=>{const t=[];if(l){let a=l;for(;a;){const c=window.getComputedStyle(a);c.getPropertyValue("overflow")!=="auto"&&c.getPropertyValue("overflow")!=="scroll"&&c.getPropertyValue("overflow-x")!=="auto"&&c.getPropertyValue("overflow-x")!=="scroll"&&c.getPropertyValue("overflow-y")!=="auto"&&c.getPropertyValue("overflow-y")!=="scroll"||t.push(a),a=a.parentElement}}return t},x6=R.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  ${l=>l.$anchorCssMixin?l.$anchorCssMixin:""}
`,M6=R(e6)`
  position: absolute;
  top: 20px;
  right: 20px;
`,z6=z`
  width: ${({$dimension:l,$isMobile:t})=>t?"calc(100vw - 32px)":l==="s"?"280px":l==="m"?"384px":"488px"};
`,E6=R.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  margin: 0 0 0 -8px;
  width: max-content;
  min-width: max-content;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  pointer-events: initial;
  position: relative;
`,F6=R.div`
  display: flex;
  padding: 4px 0;
  background-color: var(--admiral-color-Special_ElevatedBG, ${l=>l.theme.color["Special/Elevated BG"]});
  ${i1["Body/Body 2 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${l=>l.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${l=>M3(l.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${l=>T2(l.theme.shape)});
  box-sizing: border-box;
  ${z6}
`,y6=R.div`
  display: flex;
  flex: 1 1 auto;
  box-sizing: border-box;
  max-height: 300px;
  overflow: auto;
  padding: 8px 16px;
  [data-trigger='click'] & {
    padding-right: ${52}px;
  }
`,k6=R(x3)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:l})=>l?`flex-direction: ${l};`:"flex-direction: column;"}
  z-index: var(--admiral-z-index-hint, ${({theme:l})=>l.zIndex.hint});
`,H6=R.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,S6={bottomRight:{check:(l,t,a,c)=>{const s=document.documentElement.clientHeight-l.bottom>t.height,i=c-(l.bottom+window.scrollY)>t.height,n=document.documentElement.clientWidth-l.right>t.width-l.width;return(a?i:s)&&n}},bottomLeft:{check:(l,t,a,c)=>{const s=document.documentElement.clientHeight-l.bottom>t.height,i=c-(l.bottom+window.scrollY)>t.height,n=l.left>t.width-l.width;return(a?i:s)&&n}},topRight:{check:(l,t,a)=>{const c=l.top>t.height,s=l.top+window.scrollY>t.height;return document.documentElement.clientWidth-l.right>t.width-l.width&&(a?s:c)}},topLeft:{check:(l,t,a)=>{const c=l.top>t.height,s=l.top+window.scrollY>t.height;return l.left>t.width-l.width&&(a?s:c)}},leftBottom:{check:(l,t,a,c)=>{const s=l.left>t.width,i=document.documentElement.clientHeight-l.top>t.height,n=c-(l.top+window.scrollY)>t.height;return s&&(a?n:i)}},leftTop:{check:(l,t,a)=>{const c=l.left>t.width,s=l.bottom>t.height,i=l.bottom+window.scrollY>t.height;return c&&(a?i:s)}},rightBottom:{check:(l,t,a,c)=>{const s=document.documentElement.clientWidth-l.right>t.width,i=document.documentElement.clientHeight-l.top>t.height,n=c-(l.top+window.scrollY)>t.height;return s&&(a?n:i)}},rightTop:{check:(l,t,a)=>{const c=document.documentElement.clientWidth-l.right>t.width,s=l.bottom>t.height,i=l.bottom+window.scrollY>t.height;return c&&(a?i:s)}},bottom:{check:(l,t,a,c)=>{const s=document.documentElement.clientHeight-l.bottom>t.height,i=c-(l.bottom+window.scrollY)>t.height,n=l.left+l.width/2>t.width/2,o=document.documentElement.clientWidth-l.right+l.width/2>t.width/2;return(a?i:s)&&n&&o}},top:{check:(l,t,a)=>{const c=l.top>t.height,s=l.top+window.scrollY>t.height,i=l.left+l.width/2>t.width/2,n=document.documentElement.clientWidth-l.right+l.width/2>t.width/2;return(a?s:c)&&i&&n}},left:{check:(l,t,a,c)=>{const s=l.left>t.width,i=l.top>(t.height-l.height)/2,n=l.top+window.screenY>(t.height-l.height)/2,o=document.documentElement.clientHeight-l.bottom>(t.height-l.height)/2,u=c-(l.bottom+window.scrollY)>(t.height-l.height)/2;return s&&(a?n:i)&&(a?u:o)}},right:{check:(l,t,a,c)=>{const s=document.documentElement.clientWidth-l.right>t.width,i=l.top>(t.height-l.height)/2,n=l.top+window.screenY>(t.height-l.height)/2,o=document.documentElement.clientHeight-l.bottom>(t.height-l.height)/2,u=c-(l.bottom+window.scrollY)>(t.height-l.height)/2;return s&&(a?n:i)&&(a?u:o)}},bottomPageCenter:{check:(l,t,a,c)=>{const s=document.documentElement.clientHeight-l.bottom>t.height,i=c-(l.bottom+window.scrollY)>t.height,n=t.width<document.documentElement.clientWidth;return(a?i:s)&&n}},topPageCenter:{check:(l,t,a)=>{const c=l.top>t.height,s=l.top+window.scrollY>t.height;return t.width<document.documentElement.clientWidth&&(a?s:c)}}};function b6(l,t,a){const c=l.getBoundingClientRect(),s=t.getBoundingClientRect(),i=Object.entries(S6),n=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);let o=a?i.filter(d=>d[0].includes(a)&&d[1].check(c,s,!1,n)):i.filter(d=>d[1].check(c,s,!1,n));o.length===0&&(o=a?i.filter(d=>d[0].includes(a)&&d[1].check(c,s,!0,n)):i.filter(d=>d[1].check(c,s,!0,n)));const u=(d=>{switch(d){case"left":return"leftBottom";case"right":return"rightBottom";case"top":return"topRight";default:return"bottomRight"}})(a);return o.length?o[0][0]:u}function V6(l=document){return[...l.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(t=>!t.hasAttribute("disabled"))}const B6=e.forwardRef(({dimension:l,isMobile:t,content:a,visibilityTrigger:c,scrollableParents:s,anchorElementRef:i,anchorId:n,hideHint:o,startRecalculation:u,locale:d,preventFocusSteal:h,...r},m)=>{const g=R2()||u3,p=(d==null?void 0:d.closeButtonAriaLabel)||g.locales[g.currentLocale].hint.closeButtonAriaLabel,H=c==="hover",S=e.useRef(null),F=e.useRef(null),[M,w]=e.useState(),[y,B]=e.useState(),{addDropdown:k,removeDropdown:x,dropdowns:j}=v6(S);return c==="click"&&u6([S,i],C=>{d6(C,j)&&o()}),e.useLayoutEffect(()=>(k==null||k(S),F.current=document.activeElement,()=>{x==null||x(S)}),[]),e.useLayoutEffect(()=>{var C;if(!h&&S.current&&c==="click"){const V=V6(S.current);w(V[0]),B(V[V.length-1]),(C=V[0])==null||C.focus()}},[c,a,h]),e.useImperativeHandle(m,()=>S.current),e.useLayoutEffect(()=>{const[C,V]=H?[o,()=>{}]:p6(()=>{u({})},150);return window.addEventListener("resize",C),window.addEventListener("scroll",C),s.forEach(K=>K.addEventListener("scroll",C)),()=>{window.removeEventListener("resize",C),window.removeEventListener("scroll",C),s.forEach(K=>K.removeEventListener("scroll",C)),V()}}),f.jsx(E6,{...r,role:"tooltip",ref:S,onKeyDown:C=>{C.stopPropagation();const V=v.getCode(C);V===v.Escape?(C.preventDefault(),F.current.focus(),o()):V===v.Tab&&c==="click"&&(V===v.Shift?document.activeElement===M&&(y.focus(),C.preventDefault()):document.activeElement===y&&(M.focus(),C.preventDefault()))},children:f.jsxs(F6,{role:"dialog","aria-labelledby":n,$dimension:l,$isMobile:t,"data-trigger":c,children:[f.jsx(y6,{children:a}),c==="click"&&f.jsx(M6,{dimension:"mSmall",highlightFocus:!1,"aria-label":p,onClick:C=>{C==null||C.stopPropagation(),F.current.focus(),o()}})]})})}),E3=({visible:l,onVisibilityChange:t,renderContent:a,hintPosition:c,target:s,targetElement:i,visibilityTrigger:n="hover",dimension:o="l",hintRef:u,children:d,anchorClassName:h,anchorId:r,anchorCssMixin:m,locale:g,preventFocusSteal:p,...H})=>{const{rootRef:S}=e.useContext(Q1),F=e.useRef(null),M=e.useRef(null),w=a(),y=r||f6(),B=i||(s==null?void 0:s.current)||F.current,[k,x]=e.useState(null),[j,A]=e.useState(""),[C,V]=e.useState(!1),[K,H1]=e.useState(window.innerWidth<640),n1=()=>t==null?void 0:t(!0),f1=()=>t==null?void 0:t(!1);e.useLayoutEffect(()=>{const _=()=>{window.innerWidth<640?H1(!0):H1(!1)};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)}}),e.useLayoutEffect(()=>{const _=M.current;if(l&&B&&_){const X=B.getBoundingClientRect(),G=_.getBoundingClientRect();if(K)window.innerHeight-X.bottom>G.height?A("column"):A("column-reverse"),V(!0),_.style.alignSelf="center",_.style.margin="0";else switch(b6(B,_,c)){case"topPageCenter":A("column-reverse"),V(!0),_.style.alignSelf="center",_.style.margin="0";break;case"bottomPageCenter":A("column"),V(!0),_.style.alignSelf="center",_.style.margin="0";break;case"right":A("row"),V(!1),_.style.alignSelf="center",_.style.margin="0";break;case"left":A("row-reverse"),V(!1),_.style.alignSelf="center",_.style.margin="0";break;case"top":A("column-reverse"),V(!1),_.style.alignSelf="center",_.style.margin="0";break;case"bottom":A("column"),V(!1),_.style.alignSelf="center",_.style.margin="0";break;case"rightTop":A("row"),V(!1),_.style.alignSelf="flex-end",_.style.margin="0 0 -8px 0";break;case"rightBottom":A("row"),V(!1),_.style.alignSelf="flex-start",_.style.margin="-8px 0 0 0";break;case"leftTop":A("row-reverse"),V(!1),_.style.alignSelf="flex-end",_.style.margin="0 0 -8px 0";break;case"leftBottom":A("row-reverse"),V(!1),_.style.alignSelf="flex-start",_.style.margin="-8px 0 0 0";break;case"topLeft":A("column-reverse"),V(!1),_.style.alignSelf="flex-end",_.style.margin="0 -8px 0 0";break;case"topRight":A("column-reverse"),V(!1),_.style.alignSelf="flex-start",_.style.margin="0 0 0 -8px";break;case"bottomLeft":A("column"),V(!1),_.style.alignSelf="flex-end",_.style.margin="0 -8px 0 0";break;default:A("column"),V(!1),_.style.alignSelf="flex-start",_.style.margin="0 0 0 -8px"}}},[s,i,c,l,k,o,w,K]);const X1=e.useMemo(()=>_6(F.current)??[],[F.current]);return e.useEffect(()=>{l&&M.current&&(M.current.style.opacity="1")},[l]),f.jsxs(x6,{onMouseEnter:n==="click"?void 0:n1,onMouseLeave:n==="click"?void 0:f1,onFocus:n==="click"?void 0:n1,onBlur:n==="click"?void 0:f1,onClick:n==="click"?n1:void 0,onKeyDown:n==="click"?_=>{const X=v.getCode(_);X!==v.Enter&&X!==v[" "]||(_.preventDefault(),n1())}:void 0,ref:F,className:h,id:y,$anchorCssMixin:m,children:[d,l&&f.jsxs(k6,{targetElement:B,rootRef:S,$flexDirection:j,fullContainerWidth:C,children:[f.jsx(H6,{}),f.jsx(B6,{ref:_=>w6(_,u,M),dimension:o,isMobile:K,content:w,visibilityTrigger:n,scrollableParents:X1,startRecalculation:x,anchorElementRef:F,anchorId:y,hideHint:f1,locale:g,preventFocusSteal:p,...H})]})]})};E3.displayName="Hint";const C6=""+new URL("VTBGroupUI-SemiBold-Wupg3RVc.ttf",import.meta.url).href,O6=""+new URL("VTBGroupUI-Medium-CJW7SkqK.otf",import.meta.url).href,R6=""+new URL("VTBGroupUI-Regular-JWIonCWQ.otf",import.meta.url).href,A6=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${C6}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${O6}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${R6}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
  ${i1["Main/XS-bold"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
  margin-bottom: 20px;
`,Qp=R.div`
  ${i1["Additional/M"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,_1=R.code`
  color: ${({theme:l})=>l.color["Neutral/Neutral 90"]};
`,x1=R.pre`
  border: 1px dashed gray;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({theme:l})=>l.color["Neutral/Neutral 05"]};
  overflow-x: auto;
`,Xp=R.div`
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
`,ew=R.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,lw=R.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
`;function tw({renderContent:l,...t}){const[a,c]=e.useState(!1);return f.jsx(E3,{visible:a,onVisibilityChange:c,renderContent:l,style:{width:600},children:f.jsx(lw,{...t})})}const aw=R.div`
  margin-top: 16px;
  ${i1["Caption/XS"]}
  color: ${({theme:l})=>l.color["Neutral/Neutral 50"]};
  display: flex;
  gap: 8px;
`,cw=R.div`
  display: inline-flex;
  cursor: pointer;
`,sw=e.forwardRef(({text:l},t)=>{const a=()=>{const c=document.createElement("textarea");c.value=l,c.setAttribute("readonly",""),c.style.position="absolute",c.style.left="-9999px",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)};return f.jsx(cw,{ref:t,children:f.jsx(F3,{width:16,height:16,onClick:a})})}),iw=g6(sw),nw=({label:l,children:t})=>f.jsxs(ew,{children:[f.jsx(k3,{children:l}),f.jsx(Xp,{children:t})]}),I=(l,t)=>Y6[l].map(a=>{const c=`${y3(l)}${a.name}`;return{...a,reactComponentName:c,Component:t[c]}}),hw=[{label:"Cards",value:"cards",icons:I("cards",d5)},{label:"Category",value:"category",icons:I("category",m9)},{label:"Communication",value:"communication",icons:I("communication",S9)},{label:"Documents",value:"documents",icons:I("documents",Jt)},{label:"Finance",value:"finance",icons:I("finance",Xa)},{label:"Flags",value:"flags",icons:I("flags",Gh)},{label:"Payment",value:"payment",icons:I("payment",fo)},{label:"Redact",value:"redact",icons:I("redact",Hv)},{label:"Location",value:"location",icons:I("location",$h)},{label:"Logo",value:"logo",icons:I("logo",Pr)},{label:"Security",value:"security",icons:I("security",Qv)},{label:"Service",value:"service",icons:I("service",hm)},{label:"System",value:"system",icons:I("system",Yp)},{label:"Bank",value:"bank",icons:I("bank",t5)}],ww={title:"Icons/Icons",decorators:[l=>f.jsx("div",{style:{padding:24},children:f.jsx(A2,{theme:u3,children:f.jsxs(o6,{children:[f.jsx(D6,{}),f.jsx(l,{})]})})})],parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585"}}},rw=()=>f.jsxs(f.Fragment,{children:[f.jsx(k3,{style:{fontWeight:400},children:"Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро передавать смысл отображаемой информации или привлекать к ней дополнительное внимание."}),hw.map(({value:l,label:t,icons:a})=>f.jsx(nw,{label:t,children:a.map(({Component:c,name:s,path:i},n)=>{const o=`
// Импорт через лоадер (настроен в vitejs по умолчанию)
import ${s} from '@admiral-ds/icons/${i}?react';

// Импорт компонента (лоадер не требуется)
import { ${y3(l)}${s} } from '@admiral-ds/icons';
`;return f.jsxs(tw,{renderContent:()=>f.jsx("div",{style:{whiteSpace:"pre-wrap"},children:f.jsx("code",{children:o})}),children:[f.jsx(c,{width:24,height:24}),f.jsxs(aw,{children:[s," ",f.jsx(iw,{renderContent:()=>"Копировать пример использования",text:o})]})]},s+n)})},t))]}),ow=`
module: {
  rules: [
    {
      test: /\\.(js|jsx|tsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript'],
        },
      },
    },
    {
      test: /\\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
      type: 'asset/resource',
    },
    {
      test: /\\.svg$/i,
      type: 'asset/resource',
      resourceQuery: { not: [/react/] }, // *.svg Для имрорта URL
    },
    {
      test: /\\.svg$/i,
      issuer: /\\.[jt]sx?$/,
      resourceQuery: /react/, // *.svg?react Для импорта в виде реакт компонента через лоадер
      use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
    },
  ],
},
  `,vw=`
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
  `,dw=`
  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  `,mw=`
  declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
  
    export { ReactComponent };
    export default content;
  }
  `,gw=`
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
  }
  `,fw=()=>f.jsxs(Qp,{style:{fontWeight:400},children:["В наших компонентах используется пакет иконок Admiral 2.1.",f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://www.figma.com/file/eb3mxWvJpdcnG4EBj8B9V7/Admiral-Icon-Kit?type=design&node-id=17-1240",children:"Макеты в Figma"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.npmjs.com/package/@admiral-ds/icons",children:"Пакет в npm"})})]}),"1) В проекте может понадобиться настройка загрузчиков svg-иконок. Например, в vitejs уже изначально для webpack настроены загрузчики svg иконок. В нашем storybook настройки webpack для работы с иконками выглядят так:",f.jsx(x1,{children:f.jsx(_1,{children:ow})}),"Вот несколько полезных ссылок, касающихся настройки проектов для работы с иконками:",f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://react-svgr.com/docs/getting-started/",children:"Svgr - getting started"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.npmjs.com/package/@svgr/webpack",children:"Svgr - npm"})})]}),"2) Также в проектах, использующих TypeScript, при работе с иконками может понадобиться настройка тайпинга (создание файла деклараций custom.d.ts и включение его в tsconfig.json). В нашем проекте для этого используется следующий файл svg.d.ts:",f.jsx(x1,{children:f.jsx(_1,{children:vw})}),"Вот еще несколько способов написания подобного файла (примеры от пользователей библиотеки):",f.jsx(x1,{children:f.jsx(_1,{children:dw})}),f.jsx(x1,{children:f.jsx(_1,{children:mw})}),f.jsx(x1,{children:f.jsx(_1,{children:gw})}),"Ряд полезных ссылок по данной теме:",f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://webpack.js.org/guides/typescript/#importing-other-assets",children:"Webpack - Importing Other Assets"})}),f.jsx("li",{children:f.jsx("a",{href:"https://duncanleung.com/typescript-module-declearation-svg-img-assets/",children:"TypeScript Module Declaration for SVG Assets"})})]})]}),R1={render:rw,args:{},name:"Список иконок"},A1={render:fw,args:{},name:"Использование иконок"};var U0,I0,P0;R1.parameters={...R1.parameters,docs:{...(U0=R1.parameters)==null?void 0:U0.docs,source:{originalSource:`{
  render: Template,
  args: {},
  name: 'Список иконок'
}`,...(P0=(I0=R1.parameters)==null?void 0:I0.docs)==null?void 0:P0.source}}};var T0,G0,W0;A1.parameters={...A1.parameters,docs:{...(T0=A1.parameters)==null?void 0:T0.docs,source:{originalSource:`{
  render: Template2,
  args: {},
  name: 'Использование иконок'
}`,...(W0=(G0=A1.parameters)==null?void 0:G0.docs)==null?void 0:W0.source}}};const _w=["Icons","Loaders"];export{R1 as Icons,A1 as Loaders,_w as __namedExportsOrder,ww as default};