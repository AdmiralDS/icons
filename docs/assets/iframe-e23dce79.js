import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",m=function(i,n){return new URL(i,n).href},u={},o=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=m(e,c),e in u)return;u[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const _=document.createElement("link");if(_.rel=r?"stylesheet":E,r||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),r)return new Promise((l,a)=>{_.addEventListener("load",l),_.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,O=f({page:"preview"});p.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const R={"./src/Icons.stories.tsx":async()=>o(()=>import("./Icons.stories-624a086a.js"),["./Icons.stories-624a086a.js","./index-41e837da.js"],import.meta.url)};async function w(i){return R[i]()}const{composeConfigs:P,PreviewWeb:T,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const i=await Promise.all([o(()=>import("./config-bad92177.js"),["./config-bad92177.js","./index-41e837da.js","./_getPrototype-5c2068d5.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-13c3fcb7.js"),[],import.meta.url),o(()=>import("./preview-bed967c6.js"),[],import.meta.url),o(()=>import("./preview-108c1c3c.js"),["./preview-108c1c3c.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2059b184.js"),[],import.meta.url),o(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b3c37142.js"),[],import.meta.url),o(()=>import("./preview-1e5c59db.js"),[],import.meta.url)]);return P(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:L});export{o as _};
//# sourceMappingURL=iframe-e23dce79.js.map
