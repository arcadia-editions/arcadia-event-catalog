const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/browserify.C_2SwfZF.js","_astro/rolldown-runtime.DAXXjFlN.js","_astro/mermaid.core.BTP777gm.js","_astro/preload-helper.UdphNpbB.js","_astro/src.BAYS5Rki.js","_astro/src.DshfpgMp.js","_astro/chunk-ICXQ74PX.dOYkAY-z.js","_astro/dist.BQ4V7D6H.js","_astro/linear.1zh3NrGZ.js","_astro/chunk-Y2CYZVJY.DsF7k-Jl.js","_astro/chunk-X3CZISLH.BDZv3LFa.js","_astro/chunk-WYO6CB5R.BVS4rhII.js","_astro/chunk-VAUOI2AC.C9hDO4ge.js","_astro/chunk-HOUHSVGY.BpHG8txx.js","_astro/chunk-Q4XR5HBZ.DzLxmYMP.js","_astro/chunk-7BUUIJ7U.CAhmNhj7.js","_astro/chunk-OGEWGWER.DEdwOUqF.js","_astro/chunk-C7G6YPKG.qLwuAgv_.js","_astro/chunk-ZGVPDNZ5.BRz2lg4e.js","_astro/rough.esm.CSKSodPl.js","_astro/chunk-52WLFC77.DsqvSoCU.js","_astro/line.CsXaPz-j.js","_astro/path.BWPyau1x.js","_astro/array.BifhSqXX.js","_astro/chunk-FWX5IMBZ.3jDcdkLu.js","_astro/chunk-ZIRB5QZD.Dh20_f-h.js","_astro/mermaid-layout-elk.core.Bgg3acAE.js","_astro/chunk-ZW26E7AF.CI1ENdm4.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime.DAXXjFlN.js";import{t}from"./preload-helper.UdphNpbB.js";var n=new Map,r=new Map,i=new Map,a=!1;function o(){a=!0,n.forEach(e=>{try{e.destroy()}catch{}}),n.clear(),r.forEach(e=>{e.disconnect()}),r.clear(),i.forEach(e=>{document.removeEventListener(`fullscreenchange`,e)}),i.clear()}function s(e,t){let n=getComputedStyle(document.documentElement).getPropertyValue(e).trim();return n?`rgb(${n.split(` `).join(`, `)})`:t}function c(){let e=document.documentElement.getAttribute(`data-theme`)===`dark`;return{isDark:e,bgColor:s(`--ec-card-bg`,e?`#161b22`:`#ffffff`),borderColor:s(`--ec-page-border`,e?`#30363d`:`#e2e8f0`),iconColor:s(`--ec-icon-color`,e?`#8b949e`:`#64748b`),iconHoverColor:s(`--ec-icon-hover`,e?`#f0f6fc`:`#0f172a`),hoverBgColor:s(`--ec-content-hover`,e?`#21262d`:`#f1f5f9`),overlayBg:s(`--ec-page-bg`,e?`#0d1117`:`#ffffff`)}}function l(e,t,n,r,i={}){let{isLast:a=!1,isRound:o=!1}=i,s=document.createElement(`button`);s.type=`button`,s.title=t,s.innerHTML=e,s.onclick=n,s.style.cssText=`
    all: unset;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    min-width: 26px;
    min-height: 26px;
    padding: 0;
    margin: 0;
    border: none;
    background: ${r.bgColor};
    color: ${r.iconColor};
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s;
    line-height: 1;
    font-size: 12px;
    ${!a&&!o?`border-bottom: 1px solid ${r.borderColor};`:``}
    ${o?`border-radius: 6px;`:``}
  `;let c=s.querySelector(`svg`);return c&&(c.style.cssText=`display: block; width: 12px; height: 12px;`),s.onmouseenter=()=>{s.style.backgroundColor=r.hoverBgColor,s.style.color=r.iconHoverColor},s.onmouseleave=()=>{s.style.backgroundColor=r.bgColor,s.style.color=r.iconColor},s}var u={plus:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,minus:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,fit:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`,presentation:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"></path></svg>`,copy:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>`,check:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`};function d(e,t,n){let r=c(),i=document.createElement(`div`);return i.style.cssText=`
    position: absolute;
    bottom: 12px;
    left: 12px;
    display: flex;
    flex-direction: column;
    background: ${r.bgColor};
    border-radius: 6px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border: 1px solid ${r.borderColor};
    overflow: hidden;
    z-index: 10;
  `,i.appendChild(l(u.plus,`Zoom in`,e,r)),i.appendChild(l(u.minus,`Zoom out`,t,r)),i.appendChild(l(u.fit,`Fit view`,n,r,{isLast:!0})),i}function f(e,t,n,r,i=`bottom`){let a=document.createElement(`div`);a.style.cssText=`position: relative;`;let o=document.createElement(`button`);o.type=`button`,o.innerHTML=e,o.style.cssText=`
    all: unset;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 6px;
    background: ${r.bgColor};
    color: ${r.iconColor};
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  `;let s=o.querySelector(`svg`);s&&(s.style.cssText=`display: block; width: 20px; height: 20px;`),o.onmouseenter=()=>{o.style.backgroundColor=r.hoverBgColor,o.style.color=r.iconHoverColor},o.onmouseleave=()=>{o.style.backgroundColor=r.bgColor,o.style.color=r.iconColor},o.onclick=n;let c=document.createElement(`div`);c.textContent=t;let l=`
    position: absolute;
    padding: 4px 8px;
    background: #1f2937;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 50;
  `;return i===`right`?l+=`
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      margin-left: 8px;
    `:i===`left`?l+=`
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      margin-right: 8px;
    `:l+=`
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 8px;
    `,c.style.cssText=l,a.onmouseenter=()=>{c.style.opacity=`1`},a.onmouseleave=()=>{c.style.opacity=`0`},a.appendChild(o),a.appendChild(c),{wrapper:a,btn:o,tooltip:c}}function p(e){let t=c(),{wrapper:n}=f(u.presentation,`Presentation Mode`,e,t,`right`);return n.style.cssText=`
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 10;
  `,n}function m(e){let t=c(),n=f(u.copy,`Copy diagram code`,()=>{e(),n.btn.innerHTML=u.check,n.btn.style.color=`#10b981`,n.tooltip.textContent=`Copied!`;let r=n.btn.querySelector(`svg`);r&&(r.style.cssText=`display: block; width: 20px; height: 20px;`),setTimeout(()=>{n.btn.innerHTML=u.copy,n.btn.style.color=t.iconColor,n.tooltip.textContent=`Copy diagram code`;let e=n.btn.querySelector(`svg`);e&&(e.style.cssText=`display: block; width: 20px; height: 20px;`)},2e3)},t,`left`);return n.wrapper.style.cssText=`
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
  `,n.wrapper}function h(e){document.fullscreenElement?document.exitFullscreen():e.requestFullscreen().catch(e=>{console.warn(`Error entering fullscreen: ${e.message}`)})}function g(){let e=document.createElement(`div`);return e.className=`mermaid-zoom-container`,e.style.cssText=`
    position: relative;
    width: 100%;
    min-height: 200px;
    overflow: hidden;
    margin: 0;
    cursor: grab;
  `,e}async function _(a,o,s,l={}){let{minZoom:u=.5,maxZoom:f=10,zoomScaleSensitivity:g=.15,maxHeight:_=500,minHeight:v=200,diagramContent:y}=l,{default:b}=await t(async()=>{let{default:t}=await import(`./browserify.C_2SwfZF.js`).then(t=>e(t.default,1));return{default:t}},__vite__mapDeps([0,1])),x=0,S=0,C=a.getAttribute(`viewBox`);if(C){let e=C.split(/[\s,]+/).map(Number);x=e[2],S=e[3]}if(x<=0||S<=0)try{let e=a.getBBox();x=e.width,S=e.height,x>0&&S>0&&!C&&a.setAttribute(`viewBox`,`${e.x} ${e.y} ${x} ${S}`)}catch{}if((x<=0||S<=0)&&(x=a.clientWidth||parseFloat(a.getAttribute(`width`)||`0`)||800,S=a.clientHeight||parseFloat(a.getAttribute(`height`)||`0`)||400),x>0&&S>0){let e=o.clientWidth||800,t=S/x,n=Math.min(Math.max(e*t,v),_);o.style.height=`${n}px`}else o.style.height=`${v}px`;a.style.width=`100%`,a.style.height=`100%`,a.removeAttribute(`height`),a.removeAttribute(`width`);try{let e=b(a,{zoomEnabled:!0,controlIconsEnabled:!1,fit:!0,center:!0,minZoom:u,maxZoom:f,zoomScaleSensitivity:g,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!1,preventMouseEventsDefault:!0,panEnabled:!0});n.set(s,e),o.addEventListener(`mousedown`,()=>{o.style.cursor=`grabbing`}),o.addEventListener(`mouseup`,()=>{o.style.cursor=`grab`}),o.addEventListener(`mouseleave`,()=>{o.style.cursor=`grab`});let t=d(()=>e.zoomIn(),()=>e.zoomOut(),()=>{e.fit(),e.center()});o.appendChild(t);let l=p(()=>h(o));if(o.appendChild(l),y){let e=m(()=>{navigator.clipboard.writeText(y).catch(e=>{console.warn(`Failed to copy diagram code:`,e)})});o.appendChild(e)}let _=()=>{document.fullscreenElement===o?(e.enableMouseWheelZoom(),o.style.background=c().overlayBg):(e.disableMouseWheelZoom(),o.style.background=``),setTimeout(()=>{if(o.clientWidth>0&&o.clientHeight>0)try{e.resize(),e.fit(),e.center()}catch{}},100)};document.addEventListener(`fullscreenchange`,_),i.set(s,_);let v=new ResizeObserver(()=>{if(o.clientWidth>0&&o.clientHeight>0)try{e.resize(),e.fit(),e.center()}catch{}});v.observe(o),r.set(s,v)}catch(e){console.warn(`Failed to initialize zoom on mermaid diagram:`,e)}}async function v(e,n){if(e.length===0)return;a=!1;let{default:r}=await t(async()=>{let{default:e}=await import(`./mermaid.core.BTP777gm.js`);return{default:e}},__vite__mapDeps([2,3,4,5,6,7,1,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]));if(n){let{icons:e}=await t(async()=>{let{icons:e}=await import(`./logos.fCRlgAYv.js`);return{icons:e}},[]),{iconPacks:i=[],enableSupportForElkLayout:a=!1}=n;if(i.length>0){let t=i.map(t=>({name:t,icons:e}));r.registerIconPacks(t)}if(a){let{default:e}=await t(async()=>{let{default:e}=await import(`./mermaid-layout-elk.core.Bgg3acAE.js`);return{default:e}},__vite__mapDeps([26,3,27]));r.registerLayoutLoaders(e)}}let i=document.documentElement.getAttribute(`data-theme`)===`dark`,o=i?`dark`:`default`;r.initialize({maxTextSize:n?.maxTextSize||1e5,flowchart:{curve:`linear`,rankSpacing:0,nodeSpacing:0},startOnLoad:!1,fontFamily:`var(--sans-font)`,theme:o,themeVariables:i?{signalColor:`#f0f6fc`,signalTextColor:`#f0f6fc`,actorTextColor:`#0d1117`,actorBkg:`#f0f6fc`,actorBorder:`#484f58`,actorLineColor:`#6b7280`,primaryTextColor:`#f0f6fc`,secondaryTextColor:`#c9d1d9`,tertiaryTextColor:`#f0f6fc`,lineColor:`#6b7280`}:void 0,architecture:{useMaxWidth:!0}});let s=Array.from(e);for(let e of s){if(a)return;let t=e.getAttribute(`data-content`);if(!t)continue;let n=`mermaid-`+Math.round(Math.random()*1e5);try{let i=await r.render(n,t);if(a)return;let o=g();o.innerHTML=i.svg,e.innerHTML=``,e.appendChild(o);let s=o.querySelector(`svg`);s&&await _(s,o,n,{diagramContent:t})}catch(e){console.error(`Mermaid render error:`,e)}}}function y(e){let t=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_`,n=``,r=e.length;for(let i=0;i<r;i+=3){let a=e[i],o=i+1<r?e[i+1]:0,s=i+2<r?e[i+2]:0,c=a>>2,l=(a&3)<<4|o>>4,u=(o&15)<<2|s>>6,d=s&63;n+=t[c]+t[l]+t[u]+t[d]}return n}function b(e,t){return y(t(new TextEncoder().encode(e),{level:9,to:`Uint8Array`}))}async function x(e){if(e.length===0)return;let{deflate:n}=await t(async()=>{let{deflate:e}=await import(`./pako.esm.DS_e9R6C.js`);return{deflate:e}},[]);a=!1;let r=Array.from(e);for(let e of r){if(a)return;let t=e.getAttribute(`data-content`);if(!t)continue;let r=`plantuml-`+Math.round(Math.random()*1e5),i=`https://www.plantuml.com/plantuml/svg/~1${b(t,n)}`;try{let n=await fetch(i);if(a)return;if(!n.ok)throw Error(`Failed to fetch PlantUML diagram: ${n.status}`);let o=await n.text();if(a)return;let s=g();s.innerHTML=o,e.innerHTML=``,e.appendChild(s);let c=s.querySelector(`svg`);c&&await _(c,s,r,{diagramContent:t})}catch(t){console.warn(`PlantUML SVG fetch failed, falling back to img:`,t);let n=document.createElement(`img`);n.src=i,n.alt=`PlantUML diagram`,n.loading=`lazy`,n.style.margin=`0 auto`,n.style.display=`block`,e.innerHTML=``,e.appendChild(n)}}}export{v as n,x as r,o as t};