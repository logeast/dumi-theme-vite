(self.webpackChunk=self.webpackChunk||[]).push([[398],{86773:function(t,c,r){"use strict";r.d(c,{i:function(){return U}});var a=r(9833),s=r.n(a),u=r(40131),i=r.n(u),l=r(16216),f=r(78983),p=r.n(f),N=r(42081),v=r.n(N),o=r(77266),e=r.n(o),n=r(58724),d=r.n(n),Y=r(40670),h=r.n(Y),Q=r(93231),b=r.n(Q),_=v()(function j(){p()(this,j)}),w=function(j){d()(M,j);var L=h()(M);function M(g){var y;return p()(this,M),y=L.call(this),b()(e()(y),"el",void 0),y.el=g,y}return v()(M,[{key:"top",get:function(){return this.el.getBoundingClientRect().top}},{key:"outerHeight",get:function(){return this.el.getBoundingClientRect().height}},{key:"scrollTop",get:function(){return this.el.scrollTop}},{key:"scrollHeight",get:function(){return this.el.scrollHeight}},{key:"isScrolledToBottom",value:function(){return this.scrollTop+this.outerHeight>=this.scrollHeight}},{key:"registerScrollEvent",value:function(y){this.el.addEventListener("scroll",y)}},{key:"unregisterScrollEvent",value:function(y){this.el.removeEventListener("scroll",y)}}],[{key:"create",value:function(y){var T=document.querySelector(y);if(!T)throw new Error("element is not found.");return new M(T)}}]),M}(_),B=function(j){d()(M,j);var L=h()(M);function M(){return p()(this,M),L.apply(this,arguments)}return v()(M,[{key:"outerHeight",get:function(){return window.innerHeight}},{key:"scrollTop",get:function(){return document.documentElement.scrollTop}},{key:"scrollHeight",get:function(){return document.documentElement.scrollHeight}},{key:"isScrolledToBottom",value:function(){return this.scrollTop+this.outerHeight>=this.scrollHeight}},{key:"registerScrollEvent",value:function(y){document.addEventListener("scroll",y)}},{key:"unregisterScrollEvent",value:function(y){document.removeEventListener("scroll",y)}}],[{key:"create",value:function(){return new M}}]),M}(_),R=function(){function j(){p()(this,j)}return v()(j,null,[{key:"create",value:function(M){return M?w.create(M):B.create()}}]),j}(),H=function(L){var M=L.sectionRefs,g=L.rootSelector,y=L.offset,T=y===void 0?0:y,I=(0,l.useRef)(null);(0,l.useEffect)(function(){I.current=R.create(g)},[g]);var D=(0,l.useCallback)(function(){return I.current?I.current.isScrolledToBottom():!1},[I]),S=(0,l.useCallback)(function(O){if(!I.current)return!1;var E=I.current.scrollTop,F=E+I.current.outerHeight,x=O.getBoundingClientRect(),z=I.current instanceof w?E+x.top-I.current.top+T:E+x.top+T,Z=z+x.height;return[z<F,Z>E].every(function(G){return G})},[I,T]),m=(0,l.useCallback)(function(){return M.map(function(O){return O.current?S(O.current):!1})},[S,M]),V=(0,l.useState)([]),P=i()(V,2),C=P[0],k=P[1],W=(0,l.useMemo)(function(){return C.findIndex(function(O){return O})},[C]),A=(0,l.useCallback)(function(){var O=D()?[].concat(s()(new Array(M.length-1).fill(!1).map(function(E){return E})),[!0]):m();k(O)},[m,D,M]);return(0,l.useEffect)(function(){return A(),I.current&&I.current.registerScrollEvent(A),function(){I.current&&I.current.unregisterScrollEvent(A)}},[A]),{elementsStatusInViewport:C,currentElementIndexInViewport:W}},U=function(L){var M=L.children,g=L.sectionRefs,y=L.rootSelector,T=L.offset,I=H({sectionRefs:g,rootSelector:y,offset:T}),D=I.elementsStatusInViewport,S=I.currentElementIndexInViewport;return M({elementsStatusInViewport:D,currentElementIndexInViewport:S})}},37879:function(t,c,r){"use strict";r.d(c,{r:function(){return N}});var a=r(16216),s=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))i.call(e,n)&&f(o,n,e[n]);if(u)for(var n of u(e))l.call(e,n)&&f(o,n,e[n]);return o};const N=o=>a.createElement("svg",p({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}));var v="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+"},49414:function(t,c,r){"use strict";r.d(c,{r:function(){return N}});var a=r(16216),s=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))i.call(e,n)&&f(o,n,e[n]);if(u)for(var n of u(e))l.call(e,n)&&f(o,n,e[n]);return o};const N=o=>a.createElement("svg",p({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"m563.8 512 262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}));var v="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNTYzLjggNTEyIDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyeiIvPjwvc3ZnPg=="},4778:function(t,c,r){"use strict";r.d(c,{r:function(){return N}});var a=r(16216),s=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))i.call(e,n)&&f(o,n,e[n]);if(u)for(var n of u(e))l.call(e,n)&&f(o,n,e[n]);return o};const N=o=>a.createElement("svg",p({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}));var v="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg=="},70441:function(t,c,r){"use strict";r.d(c,{r:function(){return N}});var a=r(16216),s=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))i.call(e,n)&&f(o,n,e[n]);if(u)for(var n of u(e))l.call(e,n)&&f(o,n,e[n]);return o};const N=o=>a.createElement("svg",p({viewBox:"0 0 1024 1024"},o),a.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var v="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4="},54724:function(t,c,r){"use strict";r.d(c,{r:function(){return N}});var a=r(16216),s=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))i.call(e,n)&&f(o,n,e[n]);if(u)for(var n of u(e))l.call(e,n)&&f(o,n,e[n]);return o};const N=o=>a.createElement("svg",p({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}));var v="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg=="},65182:function(t,c,r){"use strict";r.d(c,{r:function(){return N}});var a=r(16216),s=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))i.call(e,n)&&f(o,n,e[n]);if(u)for(var n of u(e))l.call(e,n)&&f(o,n,e[n]);return o};const N=o=>a.createElement("svg",p({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}));var v="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4="},34102:function(t,c,r){var a=r(98106);function s(u){if(Array.isArray(u))return a(u)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},77266:function(t){function c(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},78983:function(t){function c(r,a){if(!(r instanceof a))throw new TypeError("Cannot call a class as a function")}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},42081:function(t){function c(a,s){for(var u=0;u<s.length;u++){var i=s[u];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function r(a,s,u){return s&&c(a.prototype,s),u&&c(a,u),Object.defineProperty(a,"prototype",{writable:!1}),a}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},40670:function(t,c,r){var a=r(74910),s=r(14161),u=r(71173);function i(l){var f=s();return function(){var N=a(l),v;if(f){var o=a(this).constructor;v=Reflect.construct(N,arguments,o)}else v=N.apply(this,arguments);return u(this,v)}}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},74910:function(t){function c(r){return t.exports=c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},t.exports.__esModule=!0,t.exports.default=t.exports,c(r)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},58724:function(t,c,r){var a=r(96196);function s(u,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(i&&i.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),Object.defineProperty(u,"prototype",{writable:!1}),i&&a(u,i)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},14161:function(t){function c(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},68:function(t){function c(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},91282:function(t){function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},71173:function(t,c,r){var a=r(7501).default,s=r(77266);function u(i,l){if(l&&(a(l)==="object"||typeof l=="function"))return l;if(l!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(i)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},96196:function(t){function c(r,a){return t.exports=c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,i){return u.__proto__=i,u},t.exports.__esModule=!0,t.exports.default=t.exports,c(r,a)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},9833:function(t,c,r){var a=r(34102),s=r(68),u=r(35068),i=r(91282);function l(f){return a(f)||s(f)||u(f)||i()}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
