const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./euskirchen.stories-DQW0HCY0.js","./inheritsLoose-CVt7MwCW.js","./index-RYns6xqu.js","./ModalApplicationMenu-COypn4Jk.js","./index-DNUR7M9R.js","./index-MoxV-4Sn.js","./ModalApplicationMenu-CAk-dk2u.css","./_xanten.stories-DVxZ8TyO.js","./entry-preview-xexuPKYo.js","./chunk-H6MOWX77-DTQOW814.js","./entry-preview-docs-Lh0wJw4d.js","./index-ar2LJKLv.js","./index-DrFu-skq.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D77C14du.js","./preview-BWzBA1C2.js","./preview-flkENRmA.js","./preview-Dl3_CxOH.css"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const R="modulepreload",T=function(t,n){return new URL(t,n).href},p={},o=function(n,a,l){let e=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),d=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));e=Promise.allSettled(a.map(s=>{if(s=T(s,l),s in p)return;p[s]=!0;const u=s.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!l)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===s&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),u)return new Promise((m,E)=>{c.addEventListener("load",m),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=i,window.dispatchEvent(_),!_.defaultPrevented)throw i}return e.then(i=>{for(const _ of i||[])_.status==="rejected"&&r(_.reason);return n().catch(r)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,O=L({page:"preview"});P.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const S={"./src/euskirchen/euskirchen.stories.tsx":async()=>o(()=>import("./euskirchen.stories-DQW0HCY0.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/xanten/_xanten.stories.tsx":async()=>o(()=>import("./_xanten.stories-DVxZ8TyO.js"),__vite__mapDeps([7,1,2,3,4,5,6]),import.meta.url)};async function y(t){return S[t]()}const{composeConfigs:I,PreviewWeb:V,ClientApi:w}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(t=[])=>{const n=await Promise.all([t.at(0)??o(()=>import("./entry-preview-xexuPKYo.js"),__vite__mapDeps([8,9,2,5]),import.meta.url),t.at(1)??o(()=>import("./entry-preview-docs-Lh0wJw4d.js"),__vite__mapDeps([10,9,11,2,4,12]),import.meta.url),t.at(2)??o(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([13,14]),import.meta.url),t.at(3)??o(()=>import("./preview-BaRmkE5P.js"),[],import.meta.url),t.at(4)??o(()=>import("./preview-aVwhiz9X.js"),[],import.meta.url),t.at(5)??o(()=>import("./preview-D77C14du.js"),__vite__mapDeps([15,12]),import.meta.url),t.at(6)??o(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),t.at(7)??o(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t.at(8)??o(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([16,12]),import.meta.url),t.at(9)??o(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),t.at(10)??o(()=>import("./preview-DVI_gYQC.js"),[],import.meta.url),t.at(11)??o(()=>import("./preview-flkENRmA.js"),__vite__mapDeps([17,18]),import.meta.url)]);return I(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(y,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
