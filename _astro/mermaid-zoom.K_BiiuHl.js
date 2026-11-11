const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.B2qJ3ZKQ.js","_astro/preload-helper.C73mKRzU.js","_astro/d3-shape.COtWYziA.js","_astro/chunk-Y2CYZVJY.DsF7k-Jl.js","_astro/chunk-X3CZISLH.c4qrVrxN.js","_astro/rolldown-runtime.COiEfhsA.js","_astro/chunk-DU6HZSFF.BN-bI2uQ.js","_astro/chunk-PWAF6VOD.Anr7UnPV.js","_astro/chunk-75Z2AOVW.bo3WpT84.js","_astro/dist.BtaGpctD.js","_astro/chunk-GMAD6QVW.CYCvomLd.js","_astro/chunk-P2QGCYS3.CFOq5hlq.js","_astro/chunk-4HAMMTFA.DJLzvYlk.js","_astro/rough.esm.Dy-Kn_BL.js","_astro/chunk-GVQU2GXP.D5Y05_nt.js","_astro/chunk-OSK3NFVY.QIJp_tFL.js","_astro/graphlib.DS17s2tU.js","_astro/chunk-L3NEJ4N5.WHV-ZF_k.js","_astro/mermaid-layout-elk.core.aEjiUoJx.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper.C73mKRzU.js";var t=new Map,n=new Map,r=new Set,i=!1,a=null,o=0,s,c=null;function l(){c||(c=new MutationObserver(()=>{let e=document.getElementsByClassName(`mermaid`);e.length!==0&&(u(),R(e,s))}),c.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}))}function u(){i=!0,t.forEach(e=>{try{e.destroy()}catch{}}),t.clear(),n.forEach(e=>{e.disconnect()}),n.clear(),a?.()}var d=[`top-left`,`top-right`,`bottom-left`,`bottom-right`],f=`top-right`,p=120,m=60,h=1.2,g=150,_=`ec-diagram-styles`,v=`
.mermaid-zoom-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.ec-diagram-viewport {
  position: absolute;
  inset: 0;
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y pinch-zoom;
  user-select: none;
  -webkit-user-select: none;
  outline: none;
}
.ec-diagram-viewport.is-panning {
  cursor: grabbing;
}
.ec-diagram-viewport--modal {
  touch-action: none;
  background-image: radial-gradient(rgb(var(--ec-page-text, 15 23 42) / 0.08) 1px, transparent 1px);
  background-size: 16px 16px;
}
.ec-diagram-content {
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  transition: transform ${g}ms ease-out;
  will-change: transform;
}
/* Element selectors bump specificity above the page's global ".mermaid svg" rules */
div.ec-diagram-content > svg {
  display: block;
  margin: 0;
  max-width: none !important;
}
.ec-diagram-btn {
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
  background: rgb(var(--ec-card-bg, 255 255 255));
  color: rgb(var(--ec-page-text, 15 23 42));
  border: 1px solid rgb(var(--ec-page-border, 226 232 240));
  transition: background-color 0.15s, transform 0.1s;
}
.ec-diagram-btn:hover {
  background: rgb(var(--ec-content-hover, 241 245 249));
}
.ec-diagram-btn:active {
  transform: scale(0.95);
}
.ec-diagram-btn:focus-visible {
  outline: 2px solid rgb(var(--ec-accent, 59 130 246));
  outline-offset: 1px;
}
button.ec-diagram-btn svg {
  display: block;
  width: 16px;
  height: 16px;
  margin: 0;
  flex-shrink: 0;
}
.ec-diagram-btn.ec-diagram-btn--success {
  color: #10b981;
}
.ec-diagram-controls {
  position: absolute;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 28px);
  gap: 4px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}
.ec-diagram-controls[data-placement="top-left"] { top: 8px; left: 8px; }
.ec-diagram-controls[data-placement="top-right"] { top: 8px; right: 8px; }
.ec-diagram-controls[data-placement="bottom-left"] { bottom: 8px; left: 8px; }
.ec-diagram-controls[data-placement="bottom-right"] { bottom: 8px; right: 8px; }
.mermaid-zoom-container:hover .ec-diagram-controls,
.mermaid-zoom-container:focus-within .ec-diagram-controls {
  opacity: 1;
  pointer-events: auto;
}
@media (pointer: coarse) {
  .ec-diagram-controls { opacity: 1; pointer-events: auto; }
}
@media print {
  .ec-diagram-controls { display: none; }
}
.ec-diagram-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgb(0 0 0 / 0.4);
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.22, 1, 0.36, 1);
}
.ec-diagram-modal-backdrop.is-open {
  opacity: 1;
}
.ec-diagram-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  padding: 16px;
}
@media (min-width: 640px) {
  .ec-diagram-modal { padding: 24px; }
}
.ec-diagram-modal__dialog {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  background: rgb(var(--ec-page-bg, 255 255 255));
  box-shadow:
    0 0 0 1px rgb(var(--ec-page-border, 226 232 240)),
    0 25px 50px -12px rgb(0 0 0 / 0.25);
  transform: scale(0.96);
  opacity: 0;
  transition:
    transform 250ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 250ms cubic-bezier(0.22, 1, 0.36, 1);
}
.ec-diagram-modal.is-open .ec-diagram-modal__dialog {
  transform: none;
  opacity: 1;
}
.ec-diagram-modal.is-closing .ec-diagram-modal__dialog,
.ec-diagram-modal-backdrop.is-closing {
  transition-duration: 150ms;
}
.ec-diagram-modal__toolbar {
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 4px;
}
.ec-diagram-modal__zoom {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  min-width: 56px;
  padding: 0 6px;
  border-radius: 6px;
  border: 1px solid rgb(var(--ec-page-border, 226 232 240));
  background: rgb(var(--ec-card-bg, 255 255 255));
  color: rgb(var(--ec-page-text, 15 23 42));
  font-family: inherit;
  font-size: 12px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.ec-diagram-modal__close {
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 10;
}
@media (prefers-reduced-motion: reduce) {
  .ec-diagram-content,
  .ec-diagram-controls,
  .ec-diagram-modal-backdrop,
  .ec-diagram-modal__dialog {
    transition: none;
  }
}
`;function y(){if(document.getElementById(_))return;let e=document.createElement(`style`);e.id=_,e.textContent=v,document.head.appendChild(e)}var b=(e,t=2)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,x={fullscreen:b(`<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>`),close:b(`<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`),panUp:b(`<path d="m18 15-6-6-6 6"/>`,2.5),panDown:b(`<path d="m6 9 6 6 6-6"/>`,2.5),panLeft:b(`<path d="m15 18-6-6 6-6"/>`,2.5),panRight:b(`<path d="m9 18 6-6-6-6"/>`,2.5),zoomIn:b(`<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/>`),zoomOut:b(`<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/>`),reset:b(`<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,2.5),copy:b(`<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`),check:b(`<path d="M20 6 9 17l-5-5"/>`,2.5)};function S(e,t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=`ec-diagram-btn`,r.title=t,r.setAttribute(`aria-label`,t),r.innerHTML=e,r.onclick=n,r}function C(e){let t,n=S(x.copy,`Copy diagram code`,()=>{navigator.clipboard.writeText(e).catch(e=>{console.warn(`Failed to copy diagram code:`,e)}),n.innerHTML=x.check,n.classList.add(`ec-diagram-btn--success`),n.title=`Copied!`,t&&clearTimeout(t),t=setTimeout(()=>{n.innerHTML=x.copy,n.classList.remove(`ec-diagram-btn--success`),n.title=`Copy diagram code`},2e3)});return n}function w(e){return d.includes(e)?e:f}function T(e){if(e===`true`)return!0;if(e===`false`)return!1}function E(e){return{placement:w(e.getAttribute(`data-placement`)),actions:T(e.getAttribute(`data-actions`))}}function D(e,t,n,r,i={}){let{minScale:a=.1,maxScale:o=8,wheelZoom:s=!1,onChange:c}=i,l=1,u=0,d=0,f=e=>Math.min(o,Math.max(a,e)),p=e=>{t.style.transitionDuration=e?`${g}ms`:`0ms`,t.style.transform=`translate(${u}px, ${d}px) scale(${l})`,c?.(l)},m=(t=!1)=>{let i=e.clientWidth,a=e.clientHeight;i<=0||a<=0||(l=f(Math.min((i-32)/n,(a-32)/r,1)),u=(i-n*l)/2,d=(a-r*l)/2,p(t))},_=(e,t,n,r)=>{let i=f(e),a=i/l;u=t-(t-u)*a,d=n-(n-d)*a,l=i,p(r)},v=t=>_(l*t,e.clientWidth/2,e.clientHeight/2,!0),y=(e,t)=>{u+=e,d+=t,p(!0)},b=new Map,x=null,S=null,C=()=>{let[e,t]=Array.from(b.values());return Math.hypot(e.x-t.x,e.y-t.y)},w=()=>{let[t,n]=Array.from(b.values()),r=e.getBoundingClientRect();return{x:(t.x+n.x)/2-r.left,y:(t.y+n.y)/2-r.top}},T=t=>{(t.pointerType!==`mouse`||t.button===0)&&(t.target.closest(`button`)||(e.setPointerCapture(t.pointerId),b.set(t.pointerId,{x:t.clientX,y:t.clientY}),b.size===1?(x={px:t.clientX,py:t.clientY,x:u,y:d},e.classList.add(`is-panning`)):b.size===2&&(x=null,S={distance:C(),scale:l})))},E=e=>{if(b.has(e.pointerId)){if(b.set(e.pointerId,{x:e.clientX,y:e.clientY}),b.size===2&&S){let e=w();_(S.scale*C()/S.distance,e.x,e.y,!1)}else b.size===1&&x&&(u=x.x+(e.clientX-x.px),d=x.y+(e.clientY-x.py),p(!1))}},D=t=>{if(b.has(t.pointerId)){b.delete(t.pointerId);try{e.releasePointerCapture(t.pointerId)}catch{}if(b.size===0)x=null,S=null,e.classList.remove(`is-panning`);else if(b.size===1){let[e]=Array.from(b.values());S=null,x={px:e.x,py:e.y,x:u,y:d}}}},O=t=>{if(!s)return;t.preventDefault();let n=e.getBoundingClientRect(),r=t.deltaMode===1?t.deltaY*16:t.deltaY;_(l*Math.exp(-r*.0015),t.clientX-n.left,t.clientY-n.top,!1)},k=t=>{if(t.target.closest(`button`))return;let n=e.getBoundingClientRect();_(l*h*h,t.clientX-n.left,t.clientY-n.top,!0)};return e.addEventListener(`pointerdown`,T),e.addEventListener(`pointermove`,E),e.addEventListener(`pointerup`,D),e.addEventListener(`pointercancel`,D),e.addEventListener(`wheel`,O,{passive:!1}),e.addEventListener(`dblclick`,k),{fit:m,zoomIn:()=>v(h),zoomOut:()=>v(1/h),panBy:y,getScale:()=>l,destroy:()=>{e.removeEventListener(`pointerdown`,T),e.removeEventListener(`pointermove`,E),e.removeEventListener(`pointerup`,D),e.removeEventListener(`pointercancel`,D),e.removeEventListener(`wheel`,O),e.removeEventListener(`dblclick`,k),b.clear()}}}function O(e,t,n,r=!1){let i=document.createElement(`div`);i.className=r?`ec-diagram-viewport ec-diagram-viewport--modal`:`ec-diagram-viewport`;let a=document.createElement(`div`);return a.className=`ec-diagram-content`,a.style.width=`${t}px`,a.style.height=`${n}px`,e.setAttribute(`width`,String(t)),e.setAttribute(`height`,String(n)),e.style.width=`${t}px`,e.style.height=`${n}px`,e.style.maxWidth=`none`,a.appendChild(e),i.appendChild(a),{viewport:i,content:a}}function k(e){y(),a?.();let t=document.activeElement,n=document.body.style.overflow,r=document.createElement(`div`);r.className=`ec-diagram-modal-backdrop`;let i=document.createElement(`div`);i.className=`ec-diagram-modal`;let o=document.createElement(`div`);o.className=`ec-diagram-modal__dialog`,o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-modal`,`true`),o.setAttribute(`aria-label`,`Diagram`);let{viewport:s,content:c}=O(e.svg.cloneNode(!0),e.width,e.height,!0);s.tabIndex=0,s.setAttribute(`role`,`application`),s.setAttribute(`aria-label`,`Diagram viewer. Use the arrow keys to pan, plus and minus to zoom, and zero to reset.`);let l=document.createElement(`span`);l.className=`ec-diagram-modal__zoom`,l.setAttribute(`role`,`status`),l.textContent=`100%`;let u=D(s,c,e.width,e.height,{wheelZoom:!0,onChange:e=>{l.textContent=`${Math.round(e*100)}%`}}),d=!1,f=()=>{d||(d=!0,a=null,document.removeEventListener(`keydown`,p),u.destroy(),i.classList.add(`is-closing`),r.classList.add(`is-closing`),i.classList.remove(`is-open`),r.classList.remove(`is-open`),document.body.style.overflow=n,setTimeout(()=>{i.remove(),r.remove()},150),t?.focus?.({preventScroll:!0}))};a=f;let p=e=>{switch(e.key){case`Escape`:f();break;case`ArrowUp`:u.panBy(0,m);break;case`ArrowDown`:u.panBy(0,-60);break;case`ArrowLeft`:u.panBy(m,0);break;case`ArrowRight`:u.panBy(-60,0);break;case`+`:case`=`:u.zoomIn();break;case`-`:case`_`:u.zoomOut();break;case`0`:u.fit(!0);break;default:return}e.preventDefault()},h=document.createElement(`div`);h.className=`ec-diagram-modal__toolbar`,h.appendChild(S(x.zoomOut,`Zoom out`,()=>u.zoomOut())),h.appendChild(l),h.appendChild(S(x.zoomIn,`Zoom in`,()=>u.zoomIn())),h.appendChild(S(x.reset,`Reset view`,()=>u.fit(!0))),e.diagramContent&&h.appendChild(C(e.diagramContent));let g=S(x.close,`Close fullscreen`,f);g.classList.add(`ec-diagram-modal__close`),o.appendChild(s),o.appendChild(h),o.appendChild(g),i.appendChild(o),r.addEventListener(`click`,f),i.addEventListener(`click`,e=>{e.target===i&&f()}),document.addEventListener(`keydown`,p),document.body.appendChild(r),document.body.appendChild(i),document.body.style.overflow=`hidden`,u.fit(!1),s.focus({preventScroll:!0}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.classList.add(`is-open`),i.classList.add(`is-open`)})})}function A(e,t){let{placement:n,source:r}=t,i=document.createElement(`div`);i.className=`ec-diagram-controls`,i.setAttribute(`data-placement`,n),i.setAttribute(`role`,`toolbar`),i.setAttribute(`aria-label`,`Diagram controls`);let a;return r.diagramContent?a=C(r.diagramContent):(a=document.createElement(`div`),a.setAttribute(`aria-hidden`,`true`)),[S(x.fullscreen,`Open fullscreen`,()=>k(r)),S(x.panUp,`Pan up`,()=>e.panBy(0,m)),S(x.zoomIn,`Zoom in`,()=>e.zoomIn()),S(x.panLeft,`Pan left`,()=>e.panBy(m,0)),S(x.reset,`Reset view`,()=>e.fit(!0)),S(x.panRight,`Pan right`,()=>e.panBy(-60,0)),a,S(x.panDown,`Pan down`,()=>e.panBy(0,-60)),S(x.zoomOut,`Zoom out`,()=>e.zoomOut())].forEach(e=>i.appendChild(e)),i}function j(){y();let e=document.createElement(`div`);return e.className=`mermaid-zoom-container`,e.style.minHeight=`200px`,e}var M=8,N=16;function P(e){let t=e.getAttribute(`viewBox`);if(!t)return;let[n,r,i,a]=t.split(/[\s,]+/).map(Number);if(!(i>0&&a>0))return;let o;try{o=e.getBBox()}catch{return}if(!(o.width>0&&o.height>0))return;let s={left:o.x-n,top:o.y-r,right:n+i-(o.x+o.width),bottom:r+a-(o.y+o.height)};if(Math.max(s.left,s.top,s.right,s.bottom)<=N)return;let c=Math.max(n,o.x-M),l=Math.max(r,o.y-M),u=Math.min(n+i,o.x+o.width+M)-c,d=Math.min(r+a,o.y+o.height+M)-l;e.setAttribute(`viewBox`,`${c} ${l} ${u} ${d}`)}function F(e){let t=0,n=0;P(e);let r=e.getAttribute(`viewBox`);if(r){let e=r.split(/[\s,]+/).map(Number);t=e[2],n=e[3]}if(!(t>0&&n>0))try{let i=e.getBBox();t=i.width,n=i.height,t>0&&n>0&&!r&&e.setAttribute(`viewBox`,`${i.x} ${i.y} ${t} ${n}`)}catch{}return t>0&&n>0||(t=e.clientWidth||parseFloat(e.getAttribute(`width`)||`0`)||800,n=e.clientHeight||parseFloat(e.getAttribute(`height`)||`0`)||400),{width:t,height:n}}async function I(e,r,i,a={}){let{minZoom:o=.1,maxZoom:s=8,maxHeight:c=500,minHeight:l=200,diagramContent:u,placement:d=f,actions:m}=a;y();let{width:h,height:g}=F(e),_=r.clientWidth||800,v=Math.min(Math.max(g/h*_,l),c);r.style.height=`${v}px`;let{viewport:b,content:x}=O(e,h,g);r.innerHTML=``,r.appendChild(b);let S=D(b,x,h,g,{minScale:o,maxScale:s});if(t.set(i,S),S.fit(!1),m??g>p){let t={svg:e,width:h,height:g,diagramContent:u};r.appendChild(A(S,{placement:d,source:t}))}let C=new ResizeObserver(()=>{r.clientWidth>0&&r.clientHeight>0&&S.fit(!1)});C.observe(r),n.set(i,C)}function L(t){return t.map(t=>({name:t,loader:t===`logos`?()=>e(()=>import(`./logos.B8dk5jzw.js`).then(e=>e.icons),[]):()=>fetch(`https://cdn.jsdelivr.net/npm/@iconify-json/${t}@1/icons.json`).then(e=>e.ok?e.json():(console.error(`[EventCatalog] Failed to load icon pack "${t}" from CDN (HTTP ${e.status})`),null)).catch(e=>(console.error(`[EventCatalog] Error loading icon pack "${t}":`,e),null))}))}async function R(t,n){if(t.length===0)return;i=!1;let a=++o;s=n,l();let{default:c}=await e(async()=>{let{default:e}=await import(`./mermaid.core.B2qJ3ZKQ.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));if(a!==o)return;if(n){let{iconPacks:t=[],enableSupportForElkLayout:i=!1}=n;if(t.length>0){let e=t.filter(e=>!r.has(e));e.length>0&&(c.registerIconPacks(L(e)),e.forEach(e=>r.add(e)))}if(i){let{default:t}=await e(async()=>{let{default:e}=await import(`./mermaid-layout-elk.core.aEjiUoJx.js`);return{default:e}},__vite__mapDeps([18,1]));c.registerLayoutLoaders(t)}}let u=document.documentElement.getAttribute(`data-theme`)===`dark`,d=u?`dark`:`default`;c.initialize({maxTextSize:n?.maxTextSize||1e5,flowchart:{curve:`linear`,rankSpacing:0,nodeSpacing:0},startOnLoad:!1,fontFamily:`var(--sans-font)`,theme:d,themeVariables:u?{signalColor:`#f0f6fc`,signalTextColor:`#f0f6fc`,actorTextColor:`#0d1117`,actorBkg:`#f0f6fc`,actorBorder:`#484f58`,actorLineColor:`#6b7280`,primaryTextColor:`#f0f6fc`,secondaryTextColor:`#c9d1d9`,tertiaryTextColor:`#f0f6fc`,lineColor:`#6b7280`}:void 0,architecture:{useMaxWidth:!0}});let f=Array.from(t);for(let e of f){if(i||a!==o)return;let t=e.getAttribute(`data-content`);if(!t)continue;let n=`mermaid-`+Math.round(Math.random()*1e5);try{let r=await c.render(n,t);if(i||a!==o)return;let s=j();s.innerHTML=r.svg,e.innerHTML=``,e.appendChild(s);let l=s.querySelector(`svg`);l&&await I(l,s,n,{diagramContent:t,...E(e)})}catch(e){console.error(`Mermaid render error:`,e)}}}function z(e){let t=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_`,n=``,r=e.length;for(let i=0;i<r;i+=3){let a=e[i],o=i+1<r?e[i+1]:0,s=i+2<r?e[i+2]:0,c=a>>2,l=(a&3)<<4|o>>4,u=(o&15)<<2|s>>6,d=s&63;n+=t[c]+t[l]+t[u]+t[d]}return n}function B(e,t){return z(t(new TextEncoder().encode(e),{level:9,to:`Uint8Array`}))}async function V(t){if(t.length===0)return;let{deflate:n}=await e(async()=>{let{deflate:e}=await import(`./pako.esm.D-11RUgb.js`);return{deflate:e}},[]);i=!1;let r=Array.from(t);for(let e of r){if(i)return;let t=e.getAttribute(`data-content`);if(!t)continue;let r=`plantuml-`+Math.round(Math.random()*1e5),a=`https://www.plantuml.com/plantuml/svg/~1${B(t,n)}`;try{let n=await fetch(a);if(i)return;if(!n.ok)throw Error(`Failed to fetch PlantUML diagram: ${n.status}`);let o=await n.text();if(i)return;let s=j();s.innerHTML=o,e.innerHTML=``,e.appendChild(s);let c=s.querySelector(`svg`);c&&await I(c,s,r,{diagramContent:t,...E(e)})}catch(t){console.warn(`PlantUML SVG fetch failed, falling back to img:`,t);let n=document.createElement(`img`);n.src=a,n.alt=`PlantUML diagram`,n.loading=`lazy`,n.style.margin=`0 auto`,n.style.display=`block`,e.innerHTML=``,e.appendChild(n)}}}export{R as n,V as r,u as t};