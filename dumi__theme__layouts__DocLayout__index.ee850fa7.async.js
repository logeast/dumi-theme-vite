"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[367],{54269:function(_e,M,f){f.r(M),f.d(M,{default:function(){return Le}});var D=f(19593),g=f.n(D),T=f(37879),s=f(71726),h=f(16216),e=f(70293),B=function(r){var n=(0,s.tx)();return(0,e.jsx)("div",{className:"dumi-vite-content","data-no-sidebar":!n||void 0,children:r.children})},U=B,A=function(){var r,n=(0,s.eL)(),t=n.frontmatter;return Boolean((r=t.features)===null||r===void 0?void 0:r.length)?(0,e.jsx)("div",{className:"dumi-vite-features","data-cols":[3,2].find(function(a){return t.features.length%a===0})||3,children:t.features.map(function(a){var i=a.title,o=a.description,c=a.emoji,d=a.icon,l=a.details;return(0,e.jsxs)("div",{className:"dumi-vite-features-item",children:[c||d&&(0,e.jsx)("i",{children:c||d}),i&&(0,e.jsx)("h2",{children:i}),o||l&&(0,e.jsx)("p",{dangerouslySetInnerHTML:{__html:o||l}})]},i)})}):null},Z=A,O=function(){var r=(0,s.WF)(),n=r.themeConfig;return n.footer?(0,e.jsx)("div",{className:"dumi-vite-footer",dangerouslySetInnerHTML:{__html:n.footer}}):null},P=O,V=f(49414),K=f(54724),z=f(4778);function L(u){var r=u.pathname,n=u.current,t=u.target,a="base"in n?r.replace(n.base.replace(/\/$/,""),""):r.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in t?"".concat(t.base).concat(a).replace(/^\/\//,"/"):"".concat(a).concat(t.suffix)}var G=function(r){var n=r.locale,t=r.current,a=(0,s.TH)(),i=a.pathname,o=(0,h.useState)(function(){return L({pathname:i,current:t,target:n})}),c=g()(o,2),d=c[0],l=c[1];return(0,h.useEffect)(function(){l(L({pathname:i,current:t,target:n}))},[i,t.id,n.id]),(0,e.jsx)(s.rU,{className:"dumi-vite-lang-switch",to:d,children:n.name})},W=function(){var r=(0,s.WF)(),n=r.locales,t=(0,s.YB)(),a=t.locale,i=(0,s.bU)();return n.length<=1?null:n.length>2?(0,e.jsxs)("div",{className:"dumi-vite-lang-select",children:[(0,e.jsx)("select",{defaultValue:a,onChange:function(c){s.m8.push(L({pathname:s.m8.location.pathname,current:i,target:n.find(function(d){var l=d.id;return l===c.target.value})}))},children:n.map(function(o){return(0,e.jsx)("option",{value:o.id,children:o.name},o.id)})}),(0,e.jsx)(z.r,{})]}):(0,e.jsx)(G,{locale:n.find(function(o){var c=o.id;return c!==a}),current:i})},Y=W,$=f(61910),N=f.n($);function J(u){return(0,e.jsxs)("svg",N()(N()({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u),{},{children:[(0,e.jsxs)("g",{clipPath:"url(#prefix__clip0_742_3492)",children:[(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.238 7.254c-1.685.779-1.688 2.04 0 2.821l9.654 4.462c.841.39 2.21.387 3.046 0l9.654-4.463c1.686-.78 1.688-2.042 0-2.822L17.938 2.79c-.841-.388-2.209-.386-3.046 0L5.238 7.254z",fill:"url(#prefix__paint0_linear_742_3492)"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.886 14.813a1.673 1.673 0 012.226-.825l9.146 4.247a2.504 2.504 0 002.108 0l9.146-4.246a1.673 1.673 0 012.226.824 1.692 1.692 0 01-.82 2.24l-9.146 4.246a5.842 5.842 0 01-4.92 0l-9.146-4.246a1.692 1.692 0 01-.82-2.24z",fill:"url(#prefix__paint1_linear_742_3492)"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.886 22.043a1.673 1.673 0 012.226-.825l9.146 4.246a2.502 2.502 0 002.108 0l9.146-4.246a1.673 1.673 0 012.226.825 1.692 1.692 0 01-.82 2.24l-9.146 4.246a5.84 5.84 0 01-4.92 0l-9.146-4.247a1.692 1.692 0 01-.82-2.24z",fill:"url(#prefix__paint2_linear_742_3492)"}),(0,e.jsx)("g",{filter:"url(#prefix__filter0_d_742_3492)",children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.358 5.151a.4.4 0 01.335 0l7.412 3.398a.135.135 0 010 .246l-1.012.47-7.875-3.586 1.14-.528zm-2.107.977L9.495 7.869a.135.135 0 000 .245l7.386 3.412a.4.4 0 00.336 0l3.908-1.813-7.874-3.585zm2.776-1.715a1.201 1.201 0 00-1.006.003L9.158 7.133c-.728.338-.728 1.38.002 1.717l7.385 3.412c.32.148.69.148 1.01 0l5.887-2.732c.73-.338.728-1.382-.003-1.718l-7.412-3.399z",fill:"#C7D2FE"})})]}),(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{id:"prefix__paint0_linear_742_3492",x1:16.415,y1:2.5,x2:16.415,y2:14.828,gradientUnits:"userSpaceOnUse",children:[(0,e.jsx)("stop",{stopColor:"#6366F1"}),(0,e.jsx)("stop",{offset:1,stopColor:"#4F46E5"})]}),(0,e.jsxs)("linearGradient",{id:"prefix__paint1_linear_742_3492",x1:16.312,y1:15.521,x2:16.312,y2:20.155,gradientUnits:"userSpaceOnUse",children:[(0,e.jsx)("stop",{stopColor:"#6366F1"}),(0,e.jsx)("stop",{offset:1,stopColor:"#4F46E5"})]}),(0,e.jsxs)("linearGradient",{id:"prefix__paint2_linear_742_3492",x1:16.312,y1:22.75,x2:16.312,y2:27.385,gradientUnits:"userSpaceOnUse",children:[(0,e.jsx)("stop",{stopColor:"#A5B4FC"}),(0,e.jsx)("stop",{offset:1,stopColor:"#818CF8"})]}),(0,e.jsx)("clipPath",{id:"prefix__clip0_742_3492",children:(0,e.jsx)("path",{fill:"#fff",transform:"translate(3 2.5)",d:"M0 0h26v27H0z"})}),(0,e.jsxs)("filter",{id:"prefix__filter0_d_742_3492",x:-18.388,y:2.304,width:69.376,height:62.069,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,e.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),(0,e.jsx)("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,e.jsx)("feOffset",{dy:25}),(0,e.jsx)("feGaussianBlur",{stdDeviation:13.5}),(0,e.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,e.jsx)("feColorMatrix",{values:"0 0 0 0 0.0842535 0 0 0 0 0.21144 0 0 0 0 0.879167 0 0 0 0.2 0"}),(0,e.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_742_3492"}),(0,e.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_742_3492",result:"shape"})]})]})]}))}var E=J,Q=function(){var r=(0,s.WF)(),n=r.themeConfig,t=(0,s.bU)();return(0,e.jsxs)(s.rU,{className:"dumi-vite-logo",to:"base"in t?t.base:"/",children:[n.logo?(0,e.jsx)("img",{src:n.logo,alt:n.name}):(0,e.jsx)(E,{}),n.name]})},X=Q,q=function(){var r=(0,s.OK)(),n=(0,s.TH)(),t=n.pathname;return(0,e.jsx)("ul",{className:"dumi-vite-navbar",children:r.map(function(a){return(0,e.jsx)("li",{children:/^(\w+:)\/\/|^(mailto|tel):/.test(a.link)?(0,e.jsx)("a",{href:a.link,target:"_blank",rel:"noreferrer",children:a.title}):(0,e.jsx)(s.rU,N()(N()({to:a.link},t.startsWith(a.activePath||a.link)?{className:"active"}:{}),{},{children:a.title}))},a.link)})})},ee=q,_="dumi:rtl",te=function(){var r=(0,h.useState)(!1),n=g()(r,2),t=n[0],a=n[1],i=(0,s.WF)(),o=i.themeConfig;return(0,h.useEffect)(function(){localStorage.getItem(_)&&(a(!0),document.documentElement.setAttribute("data-direction","rtl"))},[]),o.rtl?(0,e.jsx)("span",{className:"dumi-vite-lang-switch",onClick:function(){t?(document.documentElement.removeAttribute("data-direction"),localStorage.removeItem(_)):(document.documentElement.setAttribute("data-direction","rtl"),localStorage.setItem(_,"1")),a(!t)},children:t?"LTR":"RTL"}):null},ne=te,ae=f(65182),re=f(70441),ie=function(){return(0,e.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),(0,e.jsx)("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),(0,e.jsx)("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"})]})},se=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"})})},le=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"})})},oe=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"})})},ce={title:ie,page:se,content:le,demo:oe},I=function(r){return(0,e.jsx)(e.Fragment,{children:r.texts.map(function(n,t){return(0,e.jsx)(h.Fragment,{children:n.highlighted?(0,e.jsx)("mark",{children:n.text}):n.text},t)})})},ue=function(r){var n=(0,h.useCallback)(function(){var c=0,d=[];return r.forEach(function(l){l.title&&d.push({type:"title",value:{title:l.title}}),l.hints.forEach(function(v){d.push({type:"hint",activeIndex:c++,value:v})})}),[d,c]},[r]),t=(0,h.useState)(n),a=g()(t,2),i=a[0],o=a[1];return(0,h.useEffect)(function(){o(n)},[r]),i},de=function(r){var n=ue(r.data),t=g()(n,2),a=t[0],i=t[1],o=(0,h.useState)(-1),c=g()(o,2),d=c[0],l=c[1];return(0,h.useEffect)(function(){var v=function(m){if(m.key==="ArrowDown")l((d+1)%i);else if(m.key==="ArrowUp")l((d+i-1)%i);else if(m.key==="Enter"&&d>=0){var S=a.find(function(p){return p.type==="hint"&&p.activeIndex===d}).value;s.m8.push(S.link),document.activeElement.blur()}["Escape","Enter"].includes(m.key)&&l(-1)};return document.addEventListener("keydown",v),function(){return document.removeEventListener("keydown",v)}}),(0,e.jsx)("div",{className:"dumi-vite-search-result",onMouseEnter:function(){return l(-1)},onMouseDownCapture:function(x){return x.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()},children:Boolean(r.data.length||r.loading)?(0,e.jsx)("dl",{children:a.map(function(v,x){return v.type==="title"?(0,e.jsx)("dt",{children:v.value.title},String(x)):(0,e.jsx)("dd",{children:(0,e.jsxs)(s.rU,{to:v.value.link,"data-active":d===v.activeIndex||void 0,children:[h.createElement(ce[v.value.type]),(0,e.jsx)("h4",{children:(0,e.jsx)(I,{texts:v.value.highlightTitleTexts})}),(0,e.jsx)("p",{children:(0,e.jsx)(I,{texts:v.value.highlightTexts})})]})},String(x))})}):(0,e.jsxs)("div",{className:"dumi-vite-search-empty",children:[(0,e.jsx)(re.r,{}),(0,e.jsx)(s._H,{id:"search.not.found"})]})})},he=de,k,F=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(k=navigator)===null||k===void 0?void 0:k.platform:""),ve=function(){var r=(0,s.YB)(),n=(0,h.useRef)(!1),t=(0,h.useState)(!1),a=g()(t,2),i=a[0],o=a[1],c=(0,h.useRef)(null),d=(0,h.useState)("\u2318"),l=g()(d,2),v=l[0],x=l[1],m=(0,s.OO)(),S=m.keywords,p=m.setKeywords,y=m.result,C=m.loading;return(0,h.useEffect)(function(){F||x("Ctrl");var w=function(b){if((F?b.metaKey:b.ctrlKey)&&b.key==="k"){var H;(H=c.current)===null||H===void 0||H.focus(),b.preventDefault()}};return document.addEventListener("keydown",w),function(){return document.removeEventListener("keydown",w)}},[]),(0,e.jsxs)("div",{className:"dumi-vite-search-bar",children:[(0,e.jsx)(ae.r,{}),(0,e.jsx)("input",{onCompositionStart:function(){return n.current=!0},onCompositionEnd:function(j){n.current=!1,p(j.currentTarget.value)},onFocus:function(){return o(!0)},onBlur:function(){setTimeout(function(){o(!1)},1)},onKeyDown:function(j){["ArrowDown","ArrowUp"].includes(j.key)&&j.preventDefault(),j.key==="Escape"&&!n.current&&j.currentTarget.blur()},onChange:function(j){setTimeout(function(){n.current||p(j.target.value)},1)},placeholder:r.formatMessage({id:"header.search.placeholder"}),ref:c}),(0,e.jsxs)("span",{className:"dumi-vite-search-shortcut",children:[v," K"]}),S.trim()&&i&&(y.length||!C)&&(0,e.jsx)("div",{className:"dumi-vite-search-popover",children:(0,e.jsx)("section",{children:(0,e.jsx)(he,{data:y,loading:C})})})]})},fe=ve,me=function(){var r=(0,h.useState)(!1),n=g()(r,2),t=n[0],a=n[1],i=(0,s.tx)();return(0,e.jsxs)("div",{className:"dumi-vite-header ".concat(i?"dumi-vite-header-has-sidebar":""),"data-mobile-active":t||void 0,onClick:function(){return a(!1)},children:[i?(0,e.jsx)("div",{className:"dumi-vite-header-has-sidebar-bg"}):null,(0,e.jsxs)("div",{className:"dumi-vite-header-content",children:[(0,e.jsx)("section",{className:"dumi-vite-header-left",children:(0,e.jsx)(X,{})}),(0,e.jsxs)("section",{className:"dumi-vite-header-right",children:[(0,e.jsx)(fe,{}),(0,e.jsxs)("div",{className:"dumi-vite-header-right-aside",children:[(0,e.jsx)(ee,{}),(0,e.jsx)(Y,{}),(0,e.jsx)(ne,{})]})]}),(0,e.jsx)("button",{type:"button",className:"dumi-vite-header-menu-btn",onClick:function(c){c.stopPropagation(),a(function(d){return!d})},children:t?(0,e.jsx)(V.r,{}):(0,e.jsx)(K.r,{})})]})]})},xe=me,pe=function(r){return(0,e.jsx)("h1",{className:"dumi-vite-hero-title",children:(0,e.jsx)("span",{children:r.children})})},je=pe,ge=function(){var r,n=(0,s.eL)(),t=n.frontmatter;return"hero"in t?(0,e.jsxs)("div",{className:"dumi-vite-hero",children:[(0,e.jsxs)("div",{className:"dumi-vite-hero-main",children:[t.hero.title&&(0,e.jsx)(je,{children:t.hero.title}),t.hero.description&&(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:t.hero.description}}),t.hero.text&&(0,e.jsx)("p",{className:"dumi-vite-hero-text",children:t.hero.text}),t.hero.tagline&&(0,e.jsx)("p",{className:"dumi-vite-hero-tagline",children:t.hero.tagline}),Boolean((r=t.hero.actions)===null||r===void 0?void 0:r.length)&&(0,e.jsx)("div",{className:"dumi-vite-hero-actions",children:t.hero.actions.map(function(a){var i=a.text,o=a.link;return/^(\w+:)\/\/|^(mailto|tel):/.test(o)?(0,e.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:i},i):(0,e.jsx)(s.rU,{to:o,children:i},i)})})]}),(0,e.jsx)("div",{className:"dumi-vite-hero-image",children:(0,e.jsxs)("div",{className:"dumi-vite-hero-image-wrapper",children:[(0,e.jsx)("div",{className:"dumi-vite-hero-image-bg"}),(0,e.jsx)("div",{className:"dumi-vite-hero-image-src",children:t.hero.image?(0,e.jsx)("img",{src:t.hero.image,alt:t.hero.title}):(0,e.jsx)(E,{})})]})})]}):null},Se=ge,ye=f(86773),we=function(){var r=(0,s.TH)(),n=r.pathname,t=(0,s.eL)(),a=(0,s.WF)(),i=a.loading,o=(0,h.useRef)(0),c=(0,h.useState)([]),d=g()(c,2),l=d[0],v=d[1],x=t.toc.filter(function(m){var S=m.depth;return S>1&&S<4});return(0,h.useEffect)(function(){if(!i){var m=x.map(function(S){var p=S.id;return{current:document.getElementById(p)}});v(m)}},[n,i]),l.length?(0,e.jsx)(ye.i,{sectionRefs:l,children:function(S){var p=S.currentElementIndexInViewport;return p>-1&&(o.current=p),(0,e.jsx)("ul",{className:"dumi-vite-toc",children:x.filter(function(y){var C=y.depth;return C>1&&C<4}).map(function(y,C){var w="#".concat(encodeURIComponent(y.id)),j=p>-1?p:o.current;return(0,e.jsx)("li",{"data-depth":y.depth,children:(0,e.jsx)("a",N()(N()({href:w,title:y.title},j===C?{className:"active"}:{}),{},{children:y.title}))},y.id)})})}}):null},R=we,Ce=function(){var r=(0,s.TH)(),n=r.pathname,t=(0,s.eL)(),a=(0,s.tx)();return a?(0,e.jsx)("nav",{className:"dumi-vite-sidebar",children:a.map(function(i,o){return(0,e.jsxs)("dl",{className:"dumi-vite-sidebar-group",children:[i.title&&(0,e.jsx)("dt",{children:i.title}),i.children.map(function(c){return(0,e.jsxs)("dd",{children:[(0,e.jsx)(s.OL,{to:c.link,title:c.title,end:!0,children:c.title}),c.link===n&&t.frontmatter.toc==="menu"&&(0,e.jsx)(R,{})]},c.link)})]},String(o))})}):null},Ne=Ce,be=function(){var r=(0,s.YB)(),n=(0,s.pC)(),t=(0,s.tx)(),a=(0,h.useState)(!1),i=g()(a,2),o=i[0],c=i[1],d=(0,s.eL)(),l=d.frontmatter;return(0,e.jsxs)("div",{className:"dumi-vite-doc-layout","data-mobile-sidebar-active":o||void 0,onClick:function(){return c(!1)},children:[(0,e.jsxs)(s.ql,{children:[(0,e.jsx)("html",{lang:r.locale.replace(/-.+$/,"")}),l.title&&(0,e.jsx)("title",{children:l.title}),l.title&&(0,e.jsx)("meta",{property:"og:title",content:l.title}),l.description&&(0,e.jsx)("meta",{name:"description",content:l.description}),l.description&&(0,e.jsx)("meta",{property:"og:description",content:l.description}),l.keywords&&(0,e.jsx)("meta",{name:"keywords",content:l.keywords.join(",")}),l.keywords&&(0,e.jsx)("meta",{property:"og:keywords",content:l.keywords.join(",")})]}),(0,e.jsx)(xe,{}),(0,e.jsx)(Se,{}),(0,e.jsx)(Z,{}),t&&(0,e.jsx)("div",{className:"dumi-vite-doc-layout-mobile-bar",children:(0,e.jsxs)("button",{type:"button",className:"dumi-vite-sidebar-btn",onClick:function(x){x.stopPropagation(),c(function(m){return!m})},children:[(0,e.jsx)(T.r,{}),r.formatMessage({id:"layout.sidebar.btn"})]})}),t&&(0,e.jsx)("aside",{className:"dumi-vite-doc-layout-aside",children:(0,e.jsx)(Ne,{})}),(0,e.jsxs)("main",{className:"dumi-vite-doc-layout-main",children:[(0,e.jsx)(U,{children:n}),(0,e.jsx)("div",{className:"dumi-vite-doc-layout-main-aside",children:l.toc==="content"&&(0,e.jsxs)("div",{className:"dumi-vite-doc-layout-toc-wrapper",children:[(0,e.jsx)("div",{className:"dumi-vite-doc-layout-toc-title",children:"On this page"}),(0,e.jsx)(R,{})]})})]}),!t&&(0,e.jsx)(P,{})]})},Le=be}}]);
