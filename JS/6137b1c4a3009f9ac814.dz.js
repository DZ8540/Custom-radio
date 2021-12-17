(()=>{var e={766:(e,t)=>{t.appConfig={dev:{path:"Build",fileName:"[name].dz"},prod:{path:"Dist",fileName:"[contenthash].dz"},devServer:{port:8080,open:!0},media:{isWork:!0,mobile:800},theme:{favicon:{isChange:!0,lightName:"light",darkName:"dark",linkId:"theme"}}}},23:(e,t,r)=>{"use strict";r.r(t)},400:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Radio=void 0;class r{constructor(e){this.toggleClass="Radio__fill--active",this.disabledClass="Radio--disabled",this._items=e,this._inputs=this._findAll(this._items),this._handle()}action(e,t,r=!0){document.querySelectorAll(t).forEach((t=>{t.querySelector('[data-id="dz-input"]')[e]=r})),this._check()}on(e,t,r){document.querySelectorAll(e).forEach((e=>{e.querySelector('[data-id="dz-input"]').addEventListener(t,r)}))}_handle(){try{this._checkForUser(),this._check();for(let e of this._inputs)e.onchange=this._check.bind(this)}catch(e){console.warn(e.message)}}_findAll(e){let t=[];for(let r of e)t.push(r.querySelector('[data-id="dz-input"]'));return t}_check(){this._findAllDisabled(),this._removeCheckeds();let e=this._inputs.find((e=>1==e.checked));e&&1!=e.disabled&&this._add(e.parentElement.querySelector('[data-id="dz-radioInput"]'))}_removeCheckeds(){for(let e of this._items)this._remove(e.querySelector('[data-id="dz-radioInput"]'))}_findAllDisabled(){for(let e of this._inputs)1==e.disabled?this._addDisable(e.parentElement):this._removeDisable(e.parentElement)}_add(e){e.classList.add(this.toggleClass)}_remove(e){e.classList.remove(this.toggleClass)}_addDisable(e){e.classList.add(this.disabledClass)}_removeDisable(e){e.classList.remove(this.disabledClass)}_checkForUser(){if(!this._items.length)throw new Error("All radio button components aren't founds");for(let e of this._items){let t=`${e.dataset.name||"(undefined name)"} radio component`;if(!e.querySelector('[data-id="dz-input"]'))throw new Error(`Input element in ${t} is not found!`);if(!e.querySelector('[data-id="dz-radioInput"]'))throw new Error(`Fill input element in ${t} is not found!`)}console.info("All radio components are ready!")}}t.Radio=r,t.default=r},10:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(766);let o=document.createElement("link");o.setAttribute("id","dz-media"),o.setAttribute("rel","stylesheet");let n=document.querySelector("head");n?n.append(o):console.warn("Please add head element in DOM!"),document.documentElement.clientWidth>=i.appConfig.media.mobile?o.setAttribute("href","./CSS/desktop.dz.css"):o.setAttribute("href","./CSS/mobile.dz.css")},722:()=>{"use strict";document.querySelectorAll("a[data-noopener]").forEach((function(e){e.setAttribute("rel","noopener"),e.removeAttribute("data-noopener")})),document.querySelectorAll("a[data-noreferrer]").forEach((function(e){e.setAttribute("rel","noreferrer"),e.removeAttribute("data-noreferrer")}))},81:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(766),o=r(66);if(i.appConfig.theme.favicon.isChange){let e=document.querySelectorAll(`.dz-${i.appConfig.theme.favicon.linkId}`),t=[];e.forEach((function(e,r,{length:i}){t.length==i||(e.getAttribute("href")?t.push(e.getAttribute("href")):console.warn("Favicon href attribute is empty!"))})),n(e,t),window.matchMedia("(prefers-color-scheme: light)").addListener((()=>n(e,t)))}function n(e,t){let r=i.appConfig.theme.favicon.lightName;(0,o.detectScheme)()||(r=i.appConfig.theme.favicon.darkName),e.forEach((function(e,i){let n=(0,o.toUpperCaseFirstLetter)(r);e.setAttribute("href",`./Img/Favicon/${n}/${t[i]}`)}))}},66:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.detectScheme=t.toUpperCaseFirstLetter=void 0,t.toUpperCaseFirstLetter=function(e){return e[0].toUpperCase()+e.substring(1)},t.detectScheme=function(e="light"){return window.matchMedia(`(prefers-color-scheme: ${e})`).matches}},970:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(722),r(81),r(10);const i=r(400);let o=document.querySelectorAll(".Radio");o?new i.Radio(o):console.warn("Radio components not found!")}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";r(23),r(970)})()})();