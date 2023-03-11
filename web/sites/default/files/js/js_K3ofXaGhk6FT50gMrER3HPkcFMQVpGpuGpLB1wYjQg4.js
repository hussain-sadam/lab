/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={655:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(609),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const i=n},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(n[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&n[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},62:(e,t,r)=>{"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),c=[];function a(e){for(var t=-1,r=0;r<c.length;r++)if(c[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},o=[],n=0;n<e.length;n++){var i=e[n],s=t.base?i[0]+t.base:i[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=a(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:d,updater:k(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var i=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,r){var o=r.css,n=r.media,i=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var b=null,h=0;function k(e,t){var r,o,n;if(t.singleton){var i=h++;r=b||(b=l(t)),o=p.bind(null,r,i,!1),n=p.bind(null,r,i,!0)}else r=l(t),o=f.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=a(r[o]);c[n].references--}for(var i=s(e,t),l=0;l<r.length;l++){var d=a(r[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}r=i}}}},704:(e,t,r)=>{e.exports=r(79)("./src/core.js")},492:(e,t,r)=>{e.exports=r(79)("./src/engine.js")},273:(e,t,r)=>{e.exports=r(79)("./src/ui.js")},209:(e,t,r)=>{e.exports=r(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var o={};(()=>{"use strict";r.r(o),r.d(o,{ClassicEditor:()=>R});var e=r(704),t=r(273),n=r(492),i=r(209);class c extends e.EditorUI{constructor(e,r){super(e),this.view=r,this._toolbarConfig=(0,t.normalizeToolbarConfig)(e.config.get("toolbar")),this._elementReplacer=new i.ElementReplacer}get element(){return this.view.element}init(e){const t=this.editor,r=this.view,o=t.editing.view,n=r.editable,i=o.document.getRoot();n.name=i.rootName,r.render();const c=n.element;this.setEditableElement(n.name,c),r.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",(({top:e})=>e||0)),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,r=t.document.getRoot(),o=e.sourceElement,i=e.config.get("placeholder")||o&&"textarea"===o.tagName.toLowerCase()&&o.getAttribute("placeholder");i&&(0,n.enablePlaceholder)({view:t,element:r,text:i,isDirectHost:!1,keepOnFocus:!0})}}var a=r(62),s=r.n(a),l=r(655),d={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};s()(l.Z,d);l.Z.locals;class u extends t.BoxedEditorUIView{constructor(e,r,o={}){super(e),this.stickyPanel=new t.StickyPanelView(e),this.toolbar=new t.ToolbarView(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new t.InlineEditableUIView(e,r)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}const p=function(e){return null!=e&&"object"==typeof e};const f="object"==typeof global&&global&&global.Object===Object&&global;var b="object"==typeof self&&self&&self.Object===Object&&self;const h=(f||b||Function("return this")()).Symbol;var k=Object.prototype,v=k.hasOwnProperty,m=k.toString,y=h?h.toStringTag:void 0;const g=function(e){var t=v.call(e,y),r=e[y];try{e[y]=void 0;var o=!0}catch(e){}var n=m.call(e);return o&&(t?e[y]=r:delete e[y]),n};var _=Object.prototype.toString;const w=function(e){return _.call(e)};var j=h?h.toStringTag:void 0;const O=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?g(e):w(e)};const x=function(e,t){return function(r){return e(t(r))}}(Object.getPrototypeOf,Object);var E=Function.prototype,T=Object.prototype,S=E.toString,C=T.hasOwnProperty,P=S.call(Object);const F=function(e){if(!p(e)||"[object Object]"!=O(e))return!1;var t=x(e);if(null===t)return!0;var r=C.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&S.call(r)==P};const M=function(e){return p(e)&&1===e.nodeType&&!F(e)};class R extends((0,e.DataApiMixin)((0,e.ElementApiMixin)(e.Editor))){constructor(t,r={}){if(!D(t)&&void 0!==r.initialData)throw new i.CKEditorError("editor-create-initial-data",null);super(r),void 0===this.config.get("initialData")&&this.config.set("initialData",function(e){return D(e)?(0,i.getDataFromElement)(e):e}(t)),D(t)&&(this.sourceElement=t),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),n=new u(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o});this.ui=new c(this,n),(0,e.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise((r=>{const o=new this(e,t);r(o.initPlugins().then((()=>o.ui.init(D(e)?e:null))).then((()=>o.data.init(o.config.get("initialData")))).then((()=>o.fire("ready"))).then((()=>o)))}))}}function D(e){return M(e)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=o})();;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"HTML object":"HTML object"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={142:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var o=r(609),n=r.n(o)()((function(t){return t[1]}));n.push([t.id,":root{--ck-html-object-embed-unfocused-outline-width:1px}.ck-widget.html-object-embed{background-color:var(--ck-color-base-foreground);font-size:var(--ck-font-size-base);min-width:calc(76px + var(--ck-spacing-standard));padding:var(--ck-spacing-small);padding-top:calc(var(--ck-font-size-tiny) + var(--ck-spacing-large))}.ck-widget.html-object-embed:not(.ck-widget_selected):not(:hover){outline:var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border)}.ck-widget.html-object-embed:before{background:#999;border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius);color:var(--ck-color-base-background);content:attr(data-html-object-embed-label);font-family:var(--ck-font-face);font-size:var(--ck-font-size-tiny);font-style:normal;font-weight:400;left:var(--ck-spacing-standard);padding:calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);position:absolute;top:0;transition:background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck-widget.html-object-embed .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before{margin-left:50px}.ck-widget.html-object-embed .html-object-embed__content{pointer-events:none}div.ck-widget.html-object-embed{margin:1em auto}span.ck-widget.html-object-embed{display:inline-block}",""]);const i=n},609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,o){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(n[s]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},62:(t,e,r)=>{"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),s=[];function l(t){for(var e=-1,r=0;r<s.length;r++)if(s[r].identifier===t){e=r;break}return e}function c(t,e){for(var r={},o=[],n=0;n<t.length;n++){var i=t[n],c=e.base?i[0]+e.base:i[0],a=r[c]||0,u="".concat(c," ").concat(a);r[c]=a+1;var m=l(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==m?(s[m].references++,s[m].updater(d)):s.push({identifier:u,updater:p(d,e),references:1}),o.push(u)}return o}function a(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,m=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,n);else{var i=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function h(t,e,r){var o=r.css,n=r.media,i=r.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var f=null,b=0;function p(t,e){var r,o,n;if(e.singleton){var i=b++;r=f||(f=a(e)),o=d.bind(null,r,i,!1),n=d.bind(null,r,i,!0)}else r=a(e),o=h.bind(null,r,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var r=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<r.length;o++){var n=l(r[o]);s[n].references--}for(var i=c(t,e),a=0;a<r.length;a++){var u=l(r[a]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}r=i}}}},704:(t,e,r)=>{t.exports=r(79)("./src/core.js")},492:(t,e,r)=>{t.exports=r(79)("./src/engine.js")},209:(t,e,r)=>{t.exports=r(79)("./src/utils.js")},995:(t,e,r)=>{t.exports=r(79)("./src/widget.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nc=void 0;var o={};(()=>{"use strict";r.r(o),r.d(o,{DataFilter:()=>po,DataSchema:()=>He,GeneralHtmlSupport:()=>rn,HtmlComment:()=>sn});var t=r(704),e=r(209);const n=[{model:"codeBlock",view:"pre"},{model:"paragraph",view:"p"},{model:"blockQuote",view:"blockquote"},{model:"listItem",view:"li"},{model:"pageBreak",view:"div"},{model:"rawHtml",view:"div"},{model:"table",view:"table"},{model:"tableRow",view:"tr"},{model:"tableCell",view:"td"},{model:"tableCell",view:"th"},{model:"caption",view:"caption"},{model:"caption",view:"figcaption"},{model:"imageBlock",view:"img"},{model:"imageInline",view:"img"},{model:"htmlP",view:"p",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlBlockquote",view:"blockquote",modelSchema:{inheritAllFrom:"$container"}},{model:"htmlTable",view:"table",modelSchema:{allowWhere:"$block",isBlock:!0}},{model:"htmlTbody",view:"tbody",modelSchema:{allowIn:"htmlTable",isBlock:!1}},{model:"htmlThead",view:"thead",modelSchema:{allowIn:"htmlTable",isBlock:!1}},{model:"htmlTfoot",view:"tfoot",modelSchema:{allowIn:"htmlTable",isBlock:!1}},{model:"htmlCaption",view:"caption",modelSchema:{allowIn:"htmlTable",allowChildren:"$text",isBlock:!1}},{model:"htmlColgroup",view:"colgroup",modelSchema:{allowIn:"htmlTable",allowChildren:"col",isBlock:!1}},{model:"htmlCol",view:"col",modelSchema:{allowIn:"htmlColgroup",isBlock:!1}},{model:"htmlTr",view:"tr",modelSchema:{allowIn:["htmlTable","htmlThead","htmlTbody"],isLimit:!0}},{model:"htmlTd",view:"td",modelSchema:{allowIn:"htmlTr",allowContentOf:"$container",isLimit:!0,isBlock:!1}},{model:"htmlTh",view:"th",modelSchema:{allowIn:"htmlTr",allowContentOf:"$container",isLimit:!0,isBlock:!1}},{model:"htmlFigure",view:"figure",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlFigcaption",view:"figcaption",modelSchema:{allowIn:"htmlFigure",allowChildren:"$text",isBlock:!1}},{model:"htmlAddress",view:"address",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlAside",view:"aside",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlMain",view:"main",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlDetails",view:"details",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlSummary",view:"summary",modelSchema:{allowChildren:"$text",allowIn:"htmlDetails",isBlock:!1}},{model:"htmlDiv",view:"div",paragraphLikeModel:"htmlDivParagraph",modelSchema:{inheritAllFrom:"$container"}},{model:"htmlFieldset",view:"fieldset",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlLegend",view:"legend",modelSchema:{allowIn:"htmlFieldset",allowChildren:"$text"}},{model:"htmlHeader",view:"header",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlFooter",view:"footer",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlForm",view:"form",modelSchema:{inheritAllFrom:"$container",isBlock:!0}},{model:"htmlHgroup",view:"hgroup",modelSchema:{allowChildren:["htmlH1","htmlH2","htmlH3","htmlH4","htmlH5","htmlH6"],isBlock:!1}},{model:"htmlH1",view:"h1",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH2",view:"h2",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH3",view:"h3",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH4",view:"h4",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH5",view:"h5",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH6",view:"h6",modelSchema:{inheritAllFrom:"$block"}},{model:"$htmlList",modelSchema:{allowWhere:"$container",allowChildren:["$htmlList","htmlLi"],isBlock:!1}},{model:"htmlDir",view:"dir",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlMenu",view:"menu",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlUl",view:"ul",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlOl",view:"ol",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlLi",view:"li",modelSchema:{allowIn:"$htmlList",allowChildren:"$text",isBlock:!1}},{model:"htmlPre",view:"pre",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlArticle",view:"article",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlSection",view:"section",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlNav",view:"nav",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlDl",view:"dl",modelSchema:{allowWhere:"$container",allowChildren:["htmlDt","htmlDd"],isBlock:!1}},{model:"htmlDt",view:"dt",modelSchema:{allowChildren:"$block",isBlock:!1}},{model:"htmlDd",view:"dd",modelSchema:{allowChildren:"$block",isBlock:!1}},{model:"htmlCenter",view:"center",modelSchema:{inheritAllFrom:"$container",isBlock:!1}}],i=[{model:"htmlAcronym",view:"acronym",attributeProperties:{copyOnEnter:!0}},{model:"htmlTt",view:"tt",attributeProperties:{copyOnEnter:!0}},{model:"htmlFont",view:"font",attributeProperties:{copyOnEnter:!0}},{model:"htmlTime",view:"time",attributeProperties:{copyOnEnter:!0}},{model:"htmlVar",view:"var",attributeProperties:{copyOnEnter:!0}},{model:"htmlBig",view:"big",attributeProperties:{copyOnEnter:!0}},{model:"htmlSmall",view:"small",attributeProperties:{copyOnEnter:!0}},{model:"htmlSamp",view:"samp",attributeProperties:{copyOnEnter:!0}},{model:"htmlQ",view:"q",attributeProperties:{copyOnEnter:!0}},{model:"htmlOutput",view:"output",attributeProperties:{copyOnEnter:!0}},{model:"htmlKbd",view:"kbd",attributeProperties:{copyOnEnter:!0}},{model:"htmlBdi",view:"bdi",attributeProperties:{copyOnEnter:!0}},{model:"htmlBdo",view:"bdo",attributeProperties:{copyOnEnter:!0}},{model:"htmlAbbr",view:"abbr",attributeProperties:{copyOnEnter:!0}},{model:"htmlA",view:"a",priority:5,coupledAttribute:"linkHref",attributeProperties:{copyOnEnter:!0}},{model:"htmlStrong",view:"strong",coupledAttribute:"bold",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlB",view:"b",coupledAttribute:"bold",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlI",view:"i",coupledAttribute:"italic",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlEm",view:"em",coupledAttribute:"italic",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlS",view:"s",coupledAttribute:"strikethrough",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlDel",view:"del",coupledAttribute:"strikethrough",attributeProperties:{copyOnEnter:!0}},{model:"htmlIns",view:"ins",attributeProperties:{copyOnEnter:!0}},{model:"htmlU",view:"u",coupledAttribute:"underline",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlSub",view:"sub",coupledAttribute:"subscript",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlSup",view:"sup",coupledAttribute:"superscript",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlCode",view:"code",coupledAttribute:"code",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlMark",view:"mark",attributeProperties:{copyOnEnter:!0}},{model:"htmlSpan",view:"span",attributeProperties:{copyOnEnter:!0}},{model:"htmlCite",view:"cite",attributeProperties:{copyOnEnter:!0}},{model:"htmlLabel",view:"label",attributeProperties:{copyOnEnter:!0}},{model:"htmlDfn",view:"dfn",attributeProperties:{copyOnEnter:!0}},{model:"htmlObject",view:"object",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlIframe",view:"iframe",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlInput",view:"input",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlButton",view:"button",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlTextarea",view:"textarea",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlSelect",view:"select",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlVideo",view:"video",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlEmbed",view:"embed",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlOembed",view:"oembed",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlAudio",view:"audio",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlImg",view:"img",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlCanvas",view:"canvas",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlMeter",view:"meter",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlProgress",view:"progress",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlScript",view:"script",modelSchema:{allowWhere:["$text","$block"],isInline:!0}},{model:"htmlStyle",view:"style",modelSchema:{allowWhere:["$text","$block"],isInline:!0}},{model:"htmlCustomElement",view:"$customElement",modelSchema:{allowWhere:["$text","$block"],isInline:!0}}];const s=function(){this.__data__=[],this.size=0};const l=function(t,e){return t===e||t!=t&&e!=e};const c=function(t,e){for(var r=t.length;r--;)if(l(t[r][0],e))return r;return-1};var a=Array.prototype.splice;const u=function(t){var e=this.__data__,r=c(e,t);return!(r<0)&&(r==e.length-1?e.pop():a.call(e,r,1),--this.size,!0)};const m=function(t){var e=this.__data__,r=c(e,t);return r<0?void 0:e[r][1]};const d=function(t){return c(this.__data__,t)>-1};const h=function(t,e){var r=this.__data__,o=c(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};function f(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}f.prototype.clear=s,f.prototype.delete=u,f.prototype.get=m,f.prototype.has=d,f.prototype.set=h;const b=f;const p=function(){this.__data__=new b,this.size=0};const g=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};const v=function(t){return this.__data__.get(t)};const w=function(t){return this.__data__.has(t)};const y="object"==typeof global&&global&&global.Object===Object&&global;var A="object"==typeof self&&self&&self.Object===Object&&self;const j=y||A||Function("return this")();const _=j.Symbol;var S=Object.prototype,O=S.hasOwnProperty,k=S.toString,E=_?_.toStringTag:void 0;const C=function(t){var e=O.call(t,E),r=t[E];try{t[E]=void 0;var o=!0}catch(t){}var n=k.call(t);return o&&(e?t[E]=r:delete t[E]),n};var F=Object.prototype.toString;const $=function(t){return F.call(t)};var x=_?_.toStringTag:void 0;const I=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":x&&x in Object(t)?C(t):$(t)};const P=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const B=function(t){if(!P(t))return!1;var e=I(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const T=j["__core-js_shared__"];var R,D=(R=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";const L=function(t){return!!D&&D in t};var M=Function.prototype.toString;const N=function(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var V=/^\[object .+?Constructor\]$/,H=Function.prototype,z=Object.prototype,q=H.toString,U=z.hasOwnProperty,W=RegExp("^"+q.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const G=function(t){return!(!P(t)||L(t))&&(B(t)?W:V).test(N(t))};const K=function(t,e){return null==t?void 0:t[e]};const Z=function(t,e){var r=K(t,e);return G(r)?r:void 0};const Q=Z(j,"Map");const J=Z(Object,"create");const X=function(){this.__data__=J?J(null):{},this.size=0};const Y=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var tt=Object.prototype.hasOwnProperty;const et=function(t){var e=this.__data__;if(J){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return tt.call(e,t)?e[t]:void 0};var rt=Object.prototype.hasOwnProperty;const ot=function(t){var e=this.__data__;return J?void 0!==e[t]:rt.call(e,t)};const nt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this};function it(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}it.prototype.clear=X,it.prototype.delete=Y,it.prototype.get=et,it.prototype.has=ot,it.prototype.set=nt;const st=it;const lt=function(){this.size=0,this.__data__={hash:new st,map:new(Q||b),string:new st}};const ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const at=function(t,e){var r=t.__data__;return ct(e)?r["string"==typeof e?"string":"hash"]:r.map};const ut=function(t){var e=at(this,t).delete(t);return this.size-=e?1:0,e};const mt=function(t){return at(this,t).get(t)};const dt=function(t){return at(this,t).has(t)};const ht=function(t,e){var r=at(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};function ft(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}ft.prototype.clear=lt,ft.prototype.delete=ut,ft.prototype.get=mt,ft.prototype.has=dt,ft.prototype.set=ht;const bt=ft;const pt=function(t,e){var r=this.__data__;if(r instanceof b){var o=r.__data__;if(!Q||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new bt(o)}return r.set(t,e),this.size=r.size,this};function gt(t){var e=this.__data__=new b(t);this.size=e.size}gt.prototype.clear=p,gt.prototype.delete=g,gt.prototype.get=v,gt.prototype.has=w,gt.prototype.set=pt;const vt=gt;const wt=function(){try{var t=Z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const yt=function(t,e,r){"__proto__"==e&&wt?wt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};const At=function(t,e,r){(void 0!==r&&!l(t[e],r)||void 0===r&&!(e in t))&&yt(t,e,r)};const jt=function(t){return function(e,r,o){for(var n=-1,i=Object(e),s=o(e),l=s.length;l--;){var c=s[t?l:++n];if(!1===r(i[c],c,i))break}return e}}();var _t="object"==typeof exports&&exports&&!exports.nodeType&&exports,St=_t&&"object"==typeof module&&module&&!module.nodeType&&module,Ot=St&&St.exports===_t?j.Buffer:void 0,kt=Ot?Ot.allocUnsafe:void 0;const Et=function(t,e){if(e)return t.slice();var r=t.length,o=kt?kt(r):new t.constructor(r);return t.copy(o),o};const Ct=j.Uint8Array;const Ft=function(t){var e=new t.constructor(t.byteLength);return new Ct(e).set(new Ct(t)),e};const $t=function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};const xt=function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e};var It=Object.create;const Pt=function(){function t(){}return function(e){if(!P(e))return{};if(It)return It(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const Bt=function(t,e){return function(r){return t(e(r))}};const Tt=Bt(Object.getPrototypeOf,Object);var Rt=Object.prototype;const Dt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Rt)};const Lt=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:Pt(Tt(t))};const Mt=function(t){return null!=t&&"object"==typeof t};const Nt=function(t){return Mt(t)&&"[object Arguments]"==I(t)};var Vt=Object.prototype,Ht=Vt.hasOwnProperty,zt=Vt.propertyIsEnumerable;const qt=Nt(function(){return arguments}())?Nt:function(t){return Mt(t)&&Ht.call(t,"callee")&&!zt.call(t,"callee")};const Ut=Array.isArray;const Wt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};const Gt=function(t){return null!=t&&Wt(t.length)&&!B(t)};const Kt=function(t){return Mt(t)&&Gt(t)};const Zt=function(){return!1};var Qt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Jt=Qt&&"object"==typeof module&&module&&!module.nodeType&&module,Xt=Jt&&Jt.exports===Qt?j.Buffer:void 0;const Yt=(Xt?Xt.isBuffer:void 0)||Zt;var te=Function.prototype,ee=Object.prototype,re=te.toString,oe=ee.hasOwnProperty,ne=re.call(Object);const ie=function(t){if(!Mt(t)||"[object Object]"!=I(t))return!1;var e=Tt(t);if(null===e)return!0;var r=oe.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&re.call(r)==ne};var se={};se["[object Float32Array]"]=se["[object Float64Array]"]=se["[object Int8Array]"]=se["[object Int16Array]"]=se["[object Int32Array]"]=se["[object Uint8Array]"]=se["[object Uint8ClampedArray]"]=se["[object Uint16Array]"]=se["[object Uint32Array]"]=!0,se["[object Arguments]"]=se["[object Array]"]=se["[object ArrayBuffer]"]=se["[object Boolean]"]=se["[object DataView]"]=se["[object Date]"]=se["[object Error]"]=se["[object Function]"]=se["[object Map]"]=se["[object Number]"]=se["[object Object]"]=se["[object RegExp]"]=se["[object Set]"]=se["[object String]"]=se["[object WeakMap]"]=!1;const le=function(t){return Mt(t)&&Wt(t.length)&&!!se[I(t)]};const ce=function(t){return function(e){return t(e)}};var ae="object"==typeof exports&&exports&&!exports.nodeType&&exports,ue=ae&&"object"==typeof module&&module&&!module.nodeType&&module,me=ue&&ue.exports===ae&&y.process;const de=function(){try{var t=ue&&ue.require&&ue.require("util").types;return t||me&&me.binding&&me.binding("util")}catch(t){}}();var he=de&&de.isTypedArray;const fe=he?ce(he):le;const be=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var pe=Object.prototype.hasOwnProperty;const ge=function(t,e,r){var o=t[e];pe.call(t,e)&&l(o,r)&&(void 0!==r||e in t)||yt(t,e,r)};const ve=function(t,e,r,o){var n=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var l=e[i],c=o?o(r[l],t[l],l,r,t):void 0;void 0===c&&(c=t[l]),n?yt(r,l,c):ge(r,l,c)}return r};const we=function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o};var ye=/^(?:0|[1-9]\d*)$/;const Ae=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&ye.test(t))&&t>-1&&t%1==0&&t<e};var je=Object.prototype.hasOwnProperty;const _e=function(t,e){var r=Ut(t),o=!r&&qt(t),n=!r&&!o&&Yt(t),i=!r&&!o&&!n&&fe(t),s=r||o||n||i,l=s?we(t.length,String):[],c=l.length;for(var a in t)!e&&!je.call(t,a)||s&&("length"==a||n&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Ae(a,c))||l.push(a);return l};const Se=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e};var Oe=Object.prototype.hasOwnProperty;const ke=function(t){if(!P(t))return Se(t);var e=Dt(t),r=[];for(var o in t)("constructor"!=o||!e&&Oe.call(t,o))&&r.push(o);return r};const Ee=function(t){return Gt(t)?_e(t,!0):ke(t)};const Ce=function(t){return ve(t,Ee(t))};const Fe=function(t,e,r,o,n,i,s){var l=be(t,r),c=be(e,r),a=s.get(c);if(a)At(t,r,a);else{var u=i?i(l,c,r+"",t,e,s):void 0,m=void 0===u;if(m){var d=Ut(c),h=!d&&Yt(c),f=!d&&!h&&fe(c);u=c,d||h||f?Ut(l)?u=l:Kt(l)?u=xt(l):h?(m=!1,u=Et(c,!0)):f?(m=!1,u=$t(c,!0)):u=[]:ie(c)||qt(c)?(u=l,qt(l)?u=Ce(l):P(l)&&!B(l)||(u=Lt(c))):m=!1}m&&(s.set(c,u),n(u,c,o,i,s),s.delete(c)),At(t,r,u)}};const $e=function t(e,r,o,n,i){e!==r&&jt(r,(function(s,l){if(i||(i=new vt),P(s))Fe(e,r,l,o,t,n,i);else{var c=n?n(be(e,l),s,l+"",e,r,i):void 0;void 0===c&&(c=s),At(e,l,c)}}),Ee)};const xe=function(t){return t};const Ie=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)};var Pe=Math.max;const Be=function(t,e,r){return e=Pe(void 0===e?t.length-1:e,0),function(){for(var o=arguments,n=-1,i=Pe(o.length-e,0),s=Array(i);++n<i;)s[n]=o[e+n];n=-1;for(var l=Array(e+1);++n<e;)l[n]=o[n];return l[e]=r(s),Ie(t,this,l)}};const Te=function(t){return function(){return t}};const Re=wt?function(t,e){return wt(t,"toString",{configurable:!0,enumerable:!1,value:Te(e),writable:!0})}:xe;var De=Date.now;const Le=function(t){var e=0,r=0;return function(){var o=De(),n=16-(o-r);if(r=o,n>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Re);const Me=function(t,e){return Le(Be(t,e,xe),t+"")};const Ne=function(t,e,r){if(!P(r))return!1;var o=typeof e;return!!("number"==o?Gt(r)&&Ae(e,r.length):"string"==o&&e in r)&&l(r[e],t)};const Ve=function(t){return Me((function(e,r){var o=-1,n=r.length,i=n>1?r[n-1]:void 0,s=n>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(n--,i):void 0,s&&Ne(r[0],r[1],s)&&(i=n<3?void 0:i,n=1),e=Object(e);++o<n;){var l=r[o];l&&t(e,l,o,i)}return e}))}((function(t,e,r,o){$e(t,e,r,o)}));class He extends t.Plugin{constructor(t){super(t),this._definitions=new Map}static get pluginName(){return"DataSchema"}init(){for(const t of n)this.registerBlockElement(t);for(const t of i)this.registerInlineElement(t)}registerBlockElement(t){this._definitions.set(t.model,{...t,isBlock:!0})}registerInlineElement(t){this._definitions.set(t.model,{...t,isInline:!0})}extendBlockElement(t){this._extendDefinition({...t,isBlock:!0})}extendInlineElement(t){this._extendDefinition({...t,isInline:!0})}getDefinitionsForView(t,e){const r=new Set;for(const o of this._getMatchingViewDefinitions(t)){if(e)for(const t of this._getReferences(o.model))r.add(t);r.add(o)}return r}_getMatchingViewDefinitions(t){return Array.from(this._definitions.values()).filter((e=>e.view&&function(t,e){if("string"==typeof t)return t===e;if(t instanceof RegExp)return t.test(e);return!1}(t,e.view)))}*_getReferences(t){const{modelSchema:r}=this._definitions.get(t);if(!r)return;const o=["inheritAllFrom","inheritTypesFrom","allowWhere","allowContentOf","allowAttributesOf"];for(const n of o)for(const o of(0,e.toArray)(r[n]||[])){const e=this._definitions.get(o);o!==t&&e&&(yield*this._getReferences(e.model),yield e)}}_extendDefinition(t){const e=this._definitions.get(t.model),r=Ve({},e,t,((t,e)=>Array.isArray(t)?t.concat(e):void 0));this._definitions.set(t.model,r)}}var ze=r(492),qe=r(995);const Ue=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o&&!1!==e(t[r],r,t););return t};const We=Bt(Object.keys,Object);var Ge=Object.prototype.hasOwnProperty;const Ke=function(t){if(!Dt(t))return We(t);var e=[];for(var r in Object(t))Ge.call(t,r)&&"constructor"!=r&&e.push(r);return e};const Ze=function(t){return Gt(t)?_e(t):Ke(t)};const Qe=function(t,e){return t&&ve(e,Ze(e),t)};const Je=function(t,e){return t&&ve(e,Ee(e),t)};const Xe=function(t,e){for(var r=-1,o=null==t?0:t.length,n=0,i=[];++r<o;){var s=t[r];e(s,r,t)&&(i[n++]=s)}return i};const Ye=function(){return[]};var tr=Object.prototype.propertyIsEnumerable,er=Object.getOwnPropertySymbols;const rr=er?function(t){return null==t?[]:(t=Object(t),Xe(er(t),(function(e){return tr.call(t,e)})))}:Ye;const or=function(t,e){return ve(t,rr(t),e)};const nr=function(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t};const ir=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)nr(e,rr(t)),t=Tt(t);return e}:Ye;const sr=function(t,e){return ve(t,ir(t),e)};const lr=function(t,e,r){var o=e(t);return Ut(t)?o:nr(o,r(t))};const cr=function(t){return lr(t,Ze,rr)};const ar=function(t){return lr(t,Ee,ir)};const ur=Z(j,"DataView");const mr=Z(j,"Promise");const dr=Z(j,"Set");const hr=Z(j,"WeakMap");var fr="[object Map]",br="[object Promise]",pr="[object Set]",gr="[object WeakMap]",vr="[object DataView]",wr=N(ur),yr=N(Q),Ar=N(mr),jr=N(dr),_r=N(hr),Sr=I;(ur&&Sr(new ur(new ArrayBuffer(1)))!=vr||Q&&Sr(new Q)!=fr||mr&&Sr(mr.resolve())!=br||dr&&Sr(new dr)!=pr||hr&&Sr(new hr)!=gr)&&(Sr=function(t){var e=I(t),r="[object Object]"==e?t.constructor:void 0,o=r?N(r):"";if(o)switch(o){case wr:return vr;case yr:return fr;case Ar:return br;case jr:return pr;case _r:return gr}return e});const Or=Sr;var kr=Object.prototype.hasOwnProperty;const Er=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&kr.call(t,"index")&&(r.index=t.index,r.input=t.input),r};const Cr=function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var Fr=/\w*$/;const $r=function(t){var e=new t.constructor(t.source,Fr.exec(t));return e.lastIndex=t.lastIndex,e};var xr=_?_.prototype:void 0,Ir=xr?xr.valueOf:void 0;const Pr=function(t){return Ir?Object(Ir.call(t)):{}};const Br=function(t,e,r){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return Ft(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return Cr(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return $t(t,r);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return $r(t);case"[object Symbol]":return Pr(t)}};const Tr=function(t){return Mt(t)&&"[object Map]"==Or(t)};var Rr=de&&de.isMap;const Dr=Rr?ce(Rr):Tr;const Lr=function(t){return Mt(t)&&"[object Set]"==Or(t)};var Mr=de&&de.isSet;const Nr=Mr?ce(Mr):Lr;var Vr="[object Arguments]",Hr="[object Function]",zr="[object Object]",qr={};qr[Vr]=qr["[object Array]"]=qr["[object ArrayBuffer]"]=qr["[object DataView]"]=qr["[object Boolean]"]=qr["[object Date]"]=qr["[object Float32Array]"]=qr["[object Float64Array]"]=qr["[object Int8Array]"]=qr["[object Int16Array]"]=qr["[object Int32Array]"]=qr["[object Map]"]=qr["[object Number]"]=qr[zr]=qr["[object RegExp]"]=qr["[object Set]"]=qr["[object String]"]=qr["[object Symbol]"]=qr["[object Uint8Array]"]=qr["[object Uint8ClampedArray]"]=qr["[object Uint16Array]"]=qr["[object Uint32Array]"]=!0,qr["[object Error]"]=qr[Hr]=qr["[object WeakMap]"]=!1;const Ur=function t(e,r,o,n,i,s){var l,c=1&r,a=2&r,u=4&r;if(o&&(l=i?o(e,n,i,s):o(e)),void 0!==l)return l;if(!P(e))return e;var m=Ut(e);if(m){if(l=Er(e),!c)return xt(e,l)}else{var d=Or(e),h=d==Hr||"[object GeneratorFunction]"==d;if(Yt(e))return Et(e,c);if(d==zr||d==Vr||h&&!i){if(l=a||h?{}:Lt(e),!c)return a?sr(e,Je(l,e)):or(e,Qe(l,e))}else{if(!qr[d])return i?e:{};l=Br(e,d,c)}}s||(s=new vt);var f=s.get(e);if(f)return f;s.set(e,l),Nr(e)?e.forEach((function(n){l.add(t(n,r,o,n,e,s))})):Dr(e)&&e.forEach((function(n,i){l.set(i,t(n,r,o,i,e,s))}));var b=m?void 0:(u?a?ar:cr:a?Ee:Ze)(e);return Ue(b||e,(function(n,i){b&&(n=e[i=n]),ge(l,i,t(n,r,o,i,e,s))})),l};const Wr=function(t){return Ur(t,5)};function Gr(t,e,r,o){e&&function(t,e,r){if(e.attributes)for(const[o]of Object.entries(e.attributes))t.removeAttribute(o,r);if(e.styles)for(const o of Object.keys(e.styles))t.removeStyle(o,r);e.classes&&t.removeClass(e.classes,r)}(t,e,o),r&&Kr(t,r,o)}function Kr(t,e,r){if(e.attributes)for(const[o,n]of Object.entries(e.attributes))t.setAttribute(o,n,r);e.styles&&t.setStyle(e.styles,r),e.classes&&t.addClass(e.classes,r)}function Zr(t,e){const r=Wr(t);for(const o in e)Array.isArray(e[o])?r[o]=Array.from(new Set([...t[o]||[],...e[o]])):r[o]={...t[o],...e[o]};return r}function Qr({model:t}){return(e,r)=>r.writer.createElement(t,{htmlContent:e.getCustomProperty("$rawContent")})}function Jr(t,{view:e,isInline:r}){const o=t.t;return(t,{writer:n})=>{const i=o("HTML object"),s=Xr(e,t,n),l=t.getAttribute("htmlAttributes");n.addClass("html-object-embed__content",s),l&&Kr(n,l,s);const c=n.createContainerElement(r?"span":"div",{class:"html-object-embed","data-html-object-embed-label":i},s);return(0,qe.toWidget)(c,n,{widgetLabel:i})}}function Xr(t,e,r){return r.createRawElement(t,null,((t,r)=>{r.setContentOf(t,e.getAttribute("htmlContent"))}))}function Yr({priority:t,view:e}){return(r,o)=>{if(!r)return;const{writer:n}=o,i=n.createAttributeElement(e,null,{priority:t});return Kr(n,r,i),i}}function to({view:t},e){return r=>{r.on(`element:${t}`,((t,r,o)=>{if(!r.modelRange||r.modelRange.isCollapsed)return;const n=e.processViewAttributes(r.viewItem,o);n&&o.writer.setAttribute("htmlAttributes",n,r.modelRange)}),{priority:"low"})}}function eo({model:t}){return e=>{e.on(`attribute:htmlAttributes:${t}`,((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e;Gr(r.writer,o,n,r.mapper.toViewElement(e.item))}))}}const ro=function(t,e){for(var r=-1,o=null==t?0:t.length,n=Array(o);++r<o;)n[r]=e(t[r],r,t);return n};const oo=function(t,e,r,o){for(var n=t.length,i=r+(o?1:-1);o?i--:++i<n;)if(e(t[i],i,t))return i;return-1};const no=function(t){return t!=t};const io=function(t,e,r){for(var o=r-1,n=t.length;++o<n;)if(t[o]===e)return o;return-1};const so=function(t,e,r){return e==e?io(t,e,r):oo(t,no,r)};const lo=function(t,e,r,o){for(var n=r-1,i=t.length;++n<i;)if(o(t[n],e))return n;return-1};var co=Array.prototype.splice;const ao=function(t,e,r,o){var n=o?lo:so,i=-1,s=e.length,l=t;for(t===e&&(e=xt(e)),r&&(l=ro(t,ce(r)));++i<s;)for(var c=0,a=e[i],u=r?r(a):a;(c=n(l,u,c,o))>-1;)l!==t&&co.call(l,c,1),co.call(t,c,1);return t};const uo=Me((function(t,e){return t&&t.length&&e&&e.length?ao(t,e):t}));var mo=r(62),ho=r.n(mo),fo=r(142),bo={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ho()(fo.Z,bo);fo.Z.locals;class po extends t.Plugin{constructor(t){super(t),this._dataSchema=t.plugins.get("DataSchema"),this._allowedAttributes=new ze.Matcher,this._disallowedAttributes=new ze.Matcher,this._allowedElements=new Set,this._disallowedElements=new Set,this._dataInitialized=!1,this._coupledAttributes=null,this._registerElementsAfterInit(),this._registerElementHandlers(),this._registerModelPostFixer()}static get pluginName(){return"DataFilter"}static get requires(){return[He,qe.Widget]}loadAllowedConfig(t){for(const e of t){const t=e.name||/[\s\S]+/,r=Ao(e);this.allowElement(t),r.forEach((t=>this.allowAttributes(t)))}}loadDisallowedConfig(t){for(const e of t){const t=e.name||/[\s\S]+/,r=Ao(e);0==r.length?this.disallowElement(t):r.forEach((t=>this.disallowAttributes(t)))}}allowElement(t){for(const r of this._dataSchema.getDefinitionsForView(t,!0))this._allowedElements.has(r)||(this._allowedElements.add(r),this._dataInitialized&&this.editor.data.once("set",(()=>{this._fireRegisterEvent(r)}),{priority:e.priorities.get("highest")+1}),this._coupledAttributes=null)}disallowElement(t){for(const e of this._dataSchema.getDefinitionsForView(t,!1))this._disallowedElements.add(e.view)}allowAttributes(t){this._allowedAttributes.add(t)}disallowAttributes(t){this._disallowedAttributes.add(t)}processViewAttributes(t,e){return go(t,e,this._disallowedAttributes),go(t,e,this._allowedAttributes)}_registerElementsAfterInit(){this.editor.data.on("init",(()=>{this._dataInitialized=!0;for(const t of this._allowedElements)this._fireRegisterEvent(t)}),{priority:e.priorities.get("highest")+1})}_registerElementHandlers(){this.on("register",((t,r)=>{const o=this.editor.model.schema;if(r.isObject&&!o.isRegistered(r.model))this._registerObjectElement(r);else if(r.isBlock)this._registerBlockElement(r);else{if(!r.isInline)throw new e.CKEditorError("data-filter-invalid-definition",null,r);this._registerInlineElement(r)}t.stop()}),{priority:"lowest"})}_registerModelPostFixer(){const t=this.editor.model;t.document.registerPostFixer((e=>{const r=t.document.differ.getChanges();let o=!1;const n=this._getCoupledAttributesMap();for(const t of r){if("attribute"!=t.type||null!==t.attributeNewValue)continue;const r=n.get(t.attributeKey);if(r)for(const{item:n}of t.range.getWalker({shallow:!0}))for(const t of r)n.hasAttribute(t)&&(e.removeAttribute(t,n),o=!0)}return o}))}_getCoupledAttributesMap(){if(this._coupledAttributes)return this._coupledAttributes;this._coupledAttributes=new Map;for(const t of this._allowedElements)if(t.coupledAttribute&&t.model){const e=this._coupledAttributes.get(t.coupledAttribute);e?e.push(t.model):this._coupledAttributes.set(t.coupledAttribute,[t.model])}}_fireRegisterEvent(t){t.view&&this._disallowedElements.has(t.view)||this.fire(t.view?`register:${t.view}`:"register",t)}_registerObjectElement(t){const r=this.editor,o=r.model.schema,n=r.conversion,{view:i,model:s}=t;o.register(s,t.modelSchema),i&&(o.extend(t.model,{allowAttributes:["htmlAttributes","htmlContent"]}),r.data.registerRawContentMatcher({name:i}),n.for("upcast").elementToElement({view:i,model:Qr(t),converterPriority:e.priorities.get("low")+1}),n.for("upcast").add(to(t,this)),n.for("editingDowncast").elementToStructure({model:{name:s,attributes:["htmlAttributes"]},view:Jr(r,t)}),n.for("dataDowncast").elementToElement({model:s,view:(t,{writer:e})=>Xr(i,t,e)}),n.for("dataDowncast").add(eo(t)))}_registerBlockElement(t){const r=this.editor,o=r.model.schema,n=r.conversion,{view:i,model:s}=t;if(!o.isRegistered(t.model)){if(o.register(t.model,t.modelSchema),!i)return;n.for("upcast").elementToElement({model:s,view:i,converterPriority:e.priorities.get("low")+1}),n.for("downcast").elementToElement({model:s,view:i})}i&&(o.extend(t.model,{allowAttributes:"htmlAttributes"}),n.for("upcast").add(to(t,this)),n.for("downcast").add(eo(t)))}_registerInlineElement(t){const e=this.editor,r=e.model.schema,o=e.conversion,n=t.model;r.extend("$text",{allowAttributes:n}),t.attributeProperties&&r.setAttributeProperties(n,t.attributeProperties),o.for("upcast").add(function({view:t,model:e},r){return o=>{o.on(`element:${t}`,((t,o,n)=>{let i=r.processViewAttributes(o.viewItem,n);if(i||n.consumable.test(o.viewItem,{name:!0})){i=i||{},n.consumable.consume(o.viewItem,{name:!0}),o.modelRange||(o=Object.assign(o,n.convertChildren(o.viewItem,o.modelCursor)));for(const t of o.modelRange.getItems())if(n.schema.checkAttribute(t,e)){const r=Zr(i,t.getAttribute(e)||{});n.writer.setAttribute(e,r,t)}}}),{priority:"low"})}}(t,this)),o.for("downcast").attributeToElement({model:n,view:Yr(t)})}}function go(t,e,r){const o=function(t,{consumable:e},r){const o=r.matchAll(t)||[],n=[];for(const r of o)vo(e,t,r),delete r.match.name,e.consume(t,r.match),n.push(r);return n}(t,e,r),{attributes:n,styles:i,classes:s}=function(t){const e={attributes:new Set,classes:new Set,styles:new Set};for(const r of t)for(const t in e){(r.match[t]||[]).forEach((r=>e[t].add(r)))}return e}(o),l={};if(n.size)for(const t of n)jo(t)||n.delete(t);return n.size&&(l.attributes=wo(n,(e=>t.getAttribute(e)))),i.size&&(l.styles=wo(i,(e=>t.getStyle(e)))),s.size&&(l.classes=Array.from(s)),Object.keys(l).length?l:null}function vo(t,e,r){for(const o of["attributes","classes","styles"]){const n=r.match[o];if(n)for(const r of Array.from(n))t.test(e,{[o]:[r]})||uo(n,r)}}function wo(t,e){const r={};for(const o of t){void 0!==e(o)&&(r[o]=e(o))}return r}function yo(t,e){const{name:r}=t;return ie(t[e])?Object.entries(t[e]).map((([t,o])=>({name:r,[e]:{[t]:o}}))):Array.isArray(t[e])?t[e].map((t=>({name:r,[e]:[t]}))):[t]}function Ao(t){const{name:e,attributes:r,classes:o,styles:n}=t,i=[];return r&&i.push(...yo({name:e,attributes:r},"attributes")),o&&i.push(...yo({name:e,classes:o},"classes")),n&&i.push(...yo({name:e,styles:n},"styles")),i}function jo(t){try{document.createAttribute(t)}catch(t){return!1}return!0}class _o extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"CodeBlockElementSupport"}init(){if(!this.editor.plugins.has("CodeBlockEditing"))return;const t=this.editor.plugins.get(po);t.on("register:pre",((e,r)=>{if("codeBlock"!==r.model)return;const o=this.editor,n=o.model.schema,i=o.conversion;n.extend("codeBlock",{allowAttributes:["htmlAttributes","htmlContentAttributes"]}),i.for("upcast").add(function(t){return e=>{e.on("element:code",((e,r,o)=>{const n=r.viewItem,i=n.parent;function s(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}i&&i.is("element","pre")&&(s(i,"htmlAttributes"),s(n,"htmlContentAttributes"))}),{priority:"low"})}}(t)),i.for("downcast").add((t=>{t.on("attribute:htmlAttributes:codeBlock",((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e,i=r.mapper.toViewElement(e.item).parent;Gr(r.writer,o,n,i)})),t.on("attribute:htmlContentAttributes:codeBlock",((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e,i=r.mapper.toViewElement(e.item);Gr(r.writer,o,n,i)}))})),e.stop()}))}}class So extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"DualContentModelElementSupport"}init(){this.editor.plugins.get(po).on("register",((t,r)=>{const o=this.editor,n=o.model.schema,i=o.conversion;if(!r.paragraphLikeModel)return;if(n.isRegistered(r.model)||n.isRegistered(r.paragraphLikeModel))return;const s={model:r.paragraphLikeModel,view:r.view};n.register(r.model,r.modelSchema),n.register(s.model,{inheritAllFrom:"$block"}),i.for("upcast").elementToElement({view:r.view,model:(t,{writer:e})=>this._hasBlockContent(t)?e.createElement(r.model):e.createElement(s.model),converterPriority:e.priorities.get("low")+1}),i.for("downcast").elementToElement({view:r.view,model:r.model}),this._addAttributeConversion(r),i.for("downcast").elementToElement({view:s.view,model:s.model}),this._addAttributeConversion(s),t.stop()}))}_hasBlockContent(t){const e=this.editor.editing.view,r=e.domConverter.blockElements;for(const o of e.createRangeIn(t).getItems())if(o.is("element")&&r.includes(o.name))return!0;return!1}_addAttributeConversion(t){const e=this.editor,r=e.conversion,o=e.plugins.get(po);e.model.schema.extend(t.model,{allowAttributes:"htmlAttributes"}),r.for("upcast").add(to(t,o)),r.for("downcast").add(eo(t))}}class Oo extends t.Plugin{static get requires(){return[He]}static get pluginName(){return"HeadingElementSupport"}init(){const t=this.editor;if(!t.plugins.has("HeadingEditing"))return;const e=t.plugins.get(He),r=t.config.get("heading.options"),o=[];for(const t of r)"model"in t&&"view"in t&&(e.registerBlockElement({view:t.view,model:t.model}),o.push(t.model));e.extendBlockElement({model:"htmlHgroup",modelSchema:{allowChildren:o}})}}class ko extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"ImageElementSupport"}init(){const t=this.editor;if(!t.plugins.has("ImageInlineEditing")&&!t.plugins.has("ImageBlockEditing"))return;const e=t.model.schema,r=t.conversion,o=t.plugins.get(po);o.on("register:figure",(()=>{r.for("upcast").add(function(t){return e=>{e.on("element:figure",((e,r,o)=>{const n=r.viewItem;if(!r.modelRange||!n.hasClass("image"))return;const i=t.processViewAttributes(n,o);i&&o.writer.setAttribute("htmlFigureAttributes",i,r.modelRange)}),{priority:"low"})}}(o))})),o.on("register:img",((t,n)=>{"imageBlock"!==n.model&&"imageInline"!==n.model||(e.isRegistered("imageBlock")&&e.extend("imageBlock",{allowAttributes:["htmlAttributes","htmlFigureAttributes","htmlLinkAttributes"]}),e.isRegistered("imageInline")&&e.extend("imageInline",{allowAttributes:["htmlA","htmlAttributes"]}),r.for("upcast").add(function(t){return e=>{e.on("element:img",((e,r,o)=>{if(!r.modelRange)return;const n=r.viewItem,i=n.parent;function s(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}function l(t){r.modelRange&&r.modelRange.getContainedElement().is("element","imageBlock")&&s(t,"htmlLinkAttributes")}s(n,"htmlAttributes"),i.is("element","a")&&l(i)}),{priority:"low"})}}(o)),r.for("downcast").add((t=>{function e(e){t.on(`attribute:${e}:imageInline`,((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e,i=r.mapper.toViewElement(e.item);Gr(r.writer,o,n,i)}),{priority:"low"})}function r(e,r){t.on(`attribute:${r}:imageBlock`,((t,r,o)=>{if(!o.consumable.test(r.item,t.name))return;const{attributeOldValue:n,attributeNewValue:i}=r,s=o.mapper.toViewElement(r.item),l=Eo(o.writer,s,e);l&&(Gr(o.writer,n,i,l),o.consumable.consume(r.item,t.name))}),{priority:"low"}),"a"===e&&t.on("attribute:linkHref:imageBlock",((t,e,r)=>{if(!r.consumable.consume(e.item,"attribute:htmlLinkAttributes:imageBlock"))return;const o=r.mapper.toViewElement(e.item),n=Eo(r.writer,o,"a");Kr(r.writer,e.item.getAttribute("htmlLinkAttributes"),n)}),{priority:"low"})}e("htmlAttributes"),r("img","htmlAttributes"),r("figure","htmlFigureAttributes"),r("a","htmlLinkAttributes")})),t.stop())}))}}function Eo(t,e,r){const o=t.createRangeOn(e);for(const{item:t}of o.getWalker())if(t.is("element",r))return t}class Co extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"MediaEmbedElementSupport"}init(){const t=this.editor;if(!t.plugins.has("MediaEmbed")||t.config.get("mediaEmbed.previewsInData"))return;const e=t.model.schema,r=t.conversion,o=this.editor.plugins.get(po),n=this.editor.plugins.get(He),i=t.config.get("mediaEmbed.elementName");n.registerBlockElement({model:"media",view:i}),o.on("register:figure",(()=>{r.for("upcast").add(function(t){return e=>{e.on("element:figure",((e,r,o)=>{const n=r.viewItem;if(!r.modelRange||!n.hasClass("media"))return;const i=t.processViewAttributes(n,o);i&&o.writer.setAttribute("htmlFigureAttributes",i,r.modelRange)}),{priority:"low"})}}(o))})),o.on(`register:${i}`,((t,n)=>{"media"===n.model&&(e.extend("media",{allowAttributes:["htmlAttributes","htmlFigureAttributes"]}),r.for("upcast").add(function(t,e){return t=>{t.on(`element:${e}`,r,{priority:"low"})};function r(e,r,o){function n(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}n(r.viewItem,"htmlAttributes")}}(o,i)),r.for("dataDowncast").add(function(t){return e=>{function r(t,r){e.on(`attribute:${r}:media`,((e,r,o)=>{if(!o.consumable.consume(r.item,e.name))return;const{attributeOldValue:n,attributeNewValue:i}=r,s=o.mapper.toViewElement(r.item),l=function(t,e,r){const o=t.createRangeOn(e);for(const{item:t}of o.getWalker())if(t.is("element",r))return t}(o.writer,s,t);Gr(o.writer,n,i,l)}))}r(t,"htmlAttributes"),r("figure","htmlFigureAttributes")}}(i)),t.stop())}))}}class Fo extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"ScriptElementSupport"}init(){const t=this.editor.plugins.get(po);t.on("register:script",((e,r)=>{const o=this.editor,n=o.model.schema,i=o.conversion;n.register("htmlScript",r.modelSchema),n.extend("htmlScript",{allowAttributes:["htmlAttributes","htmlContent"],isContent:!0}),o.data.registerRawContentMatcher({name:"script"}),i.for("upcast").elementToElement({view:"script",model:Qr(r)}),i.for("upcast").add(to(r,t)),i.for("downcast").elementToElement({model:"htmlScript",view:(t,{writer:e})=>Xr("script",t,e)}),i.for("downcast").add(eo(r)),e.stop()}))}}class $o extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"TableElementSupport"}init(){const t=this.editor;if(!t.plugins.has("TableEditing"))return;const e=t.model.schema,r=t.conversion,o=t.plugins.get(po);o.on("register:figure",(()=>{r.for("upcast").add(function(t){return e=>{e.on("element:figure",((e,r,o)=>{const n=r.viewItem;if(!r.modelRange||!n.hasClass("table"))return;const i=t.processViewAttributes(n,o);i&&o.writer.setAttribute("htmlFigureAttributes",i,r.modelRange)}),{priority:"low"})}}(o))})),o.on("register:table",((t,n)=>{"table"===n.model&&(e.extend("table",{allowAttributes:["htmlAttributes","htmlFigureAttributes","htmlTheadAttributes","htmlTbodyAttributes"]}),r.for("upcast").add(function(t){return e=>{e.on("element:table",((e,r,o)=>{const n=r.viewItem;i(n,"htmlAttributes");for(const t of n.getChildren())t.is("element","thead")&&i(t,"htmlTheadAttributes"),t.is("element","tbody")&&i(t,"htmlTbodyAttributes");function i(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}}),{priority:"low"})}}(o)),r.for("downcast").add((t=>{function e(e,r){t.on(`attribute:${r}:table`,((t,r,o)=>{if(!o.consumable.consume(r.item,t.name))return;const n=o.mapper.toViewElement(r.item),i=function(t,e,r){const o=t.createRangeOn(e);for(const{item:t}of o.getWalker())if(t.is("element",r))return t}(o.writer,n,e);Kr(o.writer,r.attributeNewValue,i)}))}e("table","htmlAttributes"),e("figure","htmlFigureAttributes"),e("thead","htmlTheadAttributes"),e("tbody","htmlTbodyAttributes")})),t.stop())}))}}class xo extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"StyleElementSupport"}init(){const t=this.editor.plugins.get(po);t.on("register:style",((e,r)=>{const o=this.editor,n=o.model.schema,i=o.conversion;n.register("htmlStyle",r.modelSchema),n.extend("htmlStyle",{allowAttributes:["htmlAttributes","htmlContent"],isContent:!0}),o.data.registerRawContentMatcher({name:"style"}),i.for("upcast").elementToElement({view:"style",model:Qr(r)}),i.for("upcast").add(to(r,t)),i.for("downcast").elementToElement({model:"htmlStyle",view:(t,{writer:e})=>Xr("style",t,e)}),i.for("downcast").add(eo(r)),e.stop()}))}}const Io=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};const Po=function(t){return this.__data__.has(t)};function Bo(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new bt;++e<r;)this.add(t[e])}Bo.prototype.add=Bo.prototype.push=Io,Bo.prototype.has=Po;const To=Bo;const Ro=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o;)if(e(t[r],r,t))return!0;return!1};const Do=function(t,e){return t.has(e)};const Lo=function(t,e,r,o,n,i){var s=1&r,l=t.length,c=e.length;if(l!=c&&!(s&&c>l))return!1;var a=i.get(t),u=i.get(e);if(a&&u)return a==e&&u==t;var m=-1,d=!0,h=2&r?new To:void 0;for(i.set(t,e),i.set(e,t);++m<l;){var f=t[m],b=e[m];if(o)var p=s?o(b,f,m,e,t,i):o(f,b,m,t,e,i);if(void 0!==p){if(p)continue;d=!1;break}if(h){if(!Ro(e,(function(t,e){if(!Do(h,e)&&(f===t||n(f,t,r,o,i)))return h.push(e)}))){d=!1;break}}else if(f!==b&&!n(f,b,r,o,i)){d=!1;break}}return i.delete(t),i.delete(e),d};const Mo=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,o){r[++e]=[o,t]})),r};const No=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r};var Vo=_?_.prototype:void 0,Ho=Vo?Vo.valueOf:void 0;const zo=function(t,e,r,o,n,i,s){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new Ct(t),new Ct(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return l(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=Mo;case"[object Set]":var a=1&o;if(c||(c=No),t.size!=e.size&&!a)return!1;var u=s.get(t);if(u)return u==e;o|=2,s.set(t,e);var m=Lo(c(t),c(e),o,n,i,s);return s.delete(t),m;case"[object Symbol]":if(Ho)return Ho.call(t)==Ho.call(e)}return!1};var qo=Object.prototype.hasOwnProperty;const Uo=function(t,e,r,o,n,i){var s=1&r,l=cr(t),c=l.length;if(c!=cr(e).length&&!s)return!1;for(var a=c;a--;){var u=l[a];if(!(s?u in e:qo.call(e,u)))return!1}var m=i.get(t),d=i.get(e);if(m&&d)return m==e&&d==t;var h=!0;i.set(t,e),i.set(e,t);for(var f=s;++a<c;){var b=t[u=l[a]],p=e[u];if(o)var g=s?o(p,b,u,e,t,i):o(b,p,u,t,e,i);if(!(void 0===g?b===p||n(b,p,r,o,i):g)){h=!1;break}f||(f="constructor"==u)}if(h&&!f){var v=t.constructor,w=e.constructor;v==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof v&&v instanceof v&&"function"==typeof w&&w instanceof w||(h=!1)}return i.delete(t),i.delete(e),h};var Wo="[object Arguments]",Go="[object Array]",Ko="[object Object]",Zo=Object.prototype.hasOwnProperty;const Qo=function(t,e,r,o,n,i){var s=Ut(t),l=Ut(e),c=s?Go:Or(t),a=l?Go:Or(e),u=(c=c==Wo?Ko:c)==Ko,m=(a=a==Wo?Ko:a)==Ko,d=c==a;if(d&&Yt(t)){if(!Yt(e))return!1;s=!0,u=!1}if(d&&!u)return i||(i=new vt),s||fe(t)?Lo(t,e,r,o,n,i):zo(t,e,c,r,o,n,i);if(!(1&r)){var h=u&&Zo.call(t,"__wrapped__"),f=m&&Zo.call(e,"__wrapped__");if(h||f){var b=h?t.value():t,p=f?e.value():e;return i||(i=new vt),n(b,p,r,o,i)}}return!!d&&(i||(i=new vt),Uo(t,e,r,o,n,i))};const Jo=function t(e,r,o,n,i){return e===r||(null==e||null==r||!Mt(e)&&!Mt(r)?e!=e&&r!=r:Qo(e,r,o,n,t,i))};const Xo=function(t,e){return Jo(t,e)};class Yo extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"DocumentListElementSupport"}init(){const t=this.editor;if(!t.plugins.has("DocumentListEditing"))return;const e=t.model.schema,r=t.conversion,o=t.plugins.get(po),n=t.plugins.get("DocumentListEditing");n.registerDowncastStrategy({scope:"item",attributeName:"htmlLiAttributes",setAttributeOnDowncast(t,e,r){Kr(t,e,r)}}),n.registerDowncastStrategy({scope:"list",attributeName:"htmlListAttributes",setAttributeOnDowncast(t,e,r){Kr(t,e,r)}}),o.on("register",((t,n)=>{["ul","ol","li"].includes(n.view)&&(t.stop(),e.checkAttribute("$block","htmlListAttributes")||(e.extend("$block",{allowAttributes:["htmlListAttributes","htmlLiAttributes"]}),e.extend("$blockObject",{allowAttributes:["htmlListAttributes","htmlLiAttributes"]}),e.extend("$container",{allowAttributes:["htmlListAttributes","htmlLiAttributes"]}),r.for("upcast").add((t=>{t.on("element:ul",tn("htmlListAttributes",o),{priority:"low"}),t.on("element:ol",tn("htmlListAttributes",o),{priority:"low"}),t.on("element:li",tn("htmlLiAttributes",o),{priority:"low"})}))))})),n.on("postFixer",((t,{listNodes:e,writer:r})=>{const o=[];for(const{node:n,previous:i}of e){if(!i)continue;const e=n.getAttribute("listIndent"),s=i.getAttribute("listIndent");let l=null;if(e>s?o[s]=i:e<s?(l=o[e],o.length=e):l=i,l){if(l.getAttribute("listType")==n.getAttribute("listType")){const e=l.getAttribute("htmlListAttributes");Xo(n.getAttribute("htmlListAttributes"),e)||(r.setAttribute("htmlListAttributes",e,n),t.return=!0)}if(l.getAttribute("listItemId")==n.getAttribute("listItemId")){const e=l.getAttribute("htmlLiAttributes");Xo(n.getAttribute("htmlLiAttributes"),e)||(r.setAttribute("htmlLiAttributes",e,n),t.return=!0)}}}}))}afterInit(){const t=this.editor;t.commands.get("indentList")&&this.listenTo(t.commands.get("indentList"),"afterExecute",((e,r)=>{t.model.change((t=>{for(const e of r)t.setAttribute("htmlListAttributes",{},e)}))}))}}function tn(t,e){return(r,o,n)=>{const i=o.viewItem;o.modelRange||Object.assign(o,n.convertChildren(o.viewItem,o.modelCursor));const s=e.processViewAttributes(i,n);for(const e of o.modelRange.getItems({shallow:!0}))e.hasAttribute("listItemId")&&(e.hasAttribute(t)||n.writer.setAttribute(t,s||{},e))}}class en extends t.Plugin{static get requires(){return[po,He]}static get pluginName(){return"CustomElementSupport"}init(){const t=this.editor.plugins.get(po),e=this.editor.plugins.get(He);t.on("register:$customElement",((r,o)=>{r.stop();const n=this.editor,i=n.model.schema,s=n.conversion,l=n.editing.view.domConverter.unsafeElements,c=n.data.htmlProcessor.domConverter.preElements;i.register(o.model,o.modelSchema),i.extend(o.model,{allowAttributes:["htmlElementName","htmlAttributes","htmlContent"],isContent:!0}),s.for("upcast").elementToElement({view:/.*/,model:(r,i)=>{if("$comment"==r.name)return;if(!function(t){try{document.createElement(t)}catch(t){return!1}return!0}(r.name))return;if(e.getDefinitionsForView(r.name).size)return;l.includes(r.name)||l.push(r.name),c.includes(r.name)||c.push(r.name);const s=i.writer.createElement(o.model,{htmlElementName:r.name}),a=t.processViewAttributes(r,i);a&&i.writer.setAttribute("htmlAttributes",a,s);const u=new ze.UpcastWriter(r.document).createDocumentFragment(r),m=n.data.processor.toData(u);i.writer.setAttribute("htmlContent",m,s);for(const{item:t}of n.editing.view.createRangeIn(r))i.consumable.consume(t,{name:!0});return s},converterPriority:"low"}),s.for("editingDowncast").elementToElement({model:{name:o.model,attributes:["htmlElementName","htmlAttributes","htmlContent"]},view:(t,{writer:e})=>{const r=t.getAttribute("htmlElementName"),o=e.createRawElement(r);return t.hasAttribute("htmlAttributes")&&Kr(e,t.getAttribute("htmlAttributes"),o),o}}),s.for("dataDowncast").elementToElement({model:{name:o.model,attributes:["htmlElementName","htmlAttributes","htmlContent"]},view:(t,{writer:e})=>{const r=t.getAttribute("htmlElementName"),o=t.getAttribute("htmlContent"),n=e.createRawElement(r,null,((t,e)=>{e.setContentOf(t,o);const r=t.firstChild;for(r.remove();r.firstChild;)t.appendChild(r.firstChild)}));return t.hasAttribute("htmlAttributes")&&Kr(e,t.getAttribute("htmlAttributes"),n),n}})}))}}class rn extends t.Plugin{static get pluginName(){return"GeneralHtmlSupport"}static get requires(){return[po,_o,So,Oo,ko,Co,Fo,$o,xo,Yo,en]}init(){const t=this.editor,e=t.plugins.get(po);e.loadAllowedConfig(t.config.get("htmlSupport.allow")||[]),e.loadDisallowedConfig(t.config.get("htmlSupport.disallow")||[])}getGhsAttributeNameForElement(t){const e=this.editor.plugins.get("DataSchema"),r=Array.from(e.getDefinitionsForView(t,!1));return r&&r.length&&r[0].isInline&&!r[0].isObject?r[0].model:"htmlAttributes"}addModelHtmlClass(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"classes",(t=>{for(const o of(0,e.toArray)(r))t.add(o)}))}))}removeModelHtmlClass(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"classes",(t=>{for(const o of(0,e.toArray)(r))t.delete(o)}))}))}setModelHtmlAttributes(t,e,r){const o=this.editor.model,n=this.getGhsAttributeNameForElement(t);o.change((t=>{for(const i of on(o,r,n))nn(t,i,n,"attributes",(t=>{for(const[r,o]of Object.entries(e))t.set(r,o)}))}))}removeModelHtmlAttributes(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"attributes",(t=>{for(const o of(0,e.toArray)(r))t.delete(o)}))}))}setModelHtmlStyles(t,e,r){const o=this.editor.model,n=this.getGhsAttributeNameForElement(t);o.change((t=>{for(const i of on(o,r,n))nn(t,i,n,"styles",(t=>{for(const[r,o]of Object.entries(e))t.set(r,o)}))}))}removeModelHtmlStyles(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"styles",(t=>{for(const o of(0,e.toArray)(r))t.delete(o)}))}))}}function*on(t,e,r){if(e.is("documentSelection")&&e.isCollapsed)t.schema.checkAttributeInSelection(e,r)&&(yield e);else for(const o of function(t,e,r){return e.is("node")||e.is("$text")||e.is("$textProxy")?t.schema.checkAttribute(e,r)?[t.createRangeOn(e)]:[]:t.schema.getValidRanges(t.createSelection(e).getRanges(),r)}(t,e,r))yield*o.getItems({shallow:!0})}function nn(t,e,r,o,n){const i=e.getAttribute(r),s={};for(const t of["attributes","styles","classes"])if(t!=o)i&&i[t]&&(s[t]=i[t]);else{const e="classes"==t?new Set(i&&i[t]||[]):new Map(Object.entries(i&&i[t]||{}));n(e),e.size&&(s[t]="classes"==t?Array.from(e):Object.fromEntries(e))}Object.keys(s).length?e.is("documentSelection")?t.setSelectionAttribute(r,s):t.setAttribute(r,s,e):i&&(e.is("documentSelection")?t.removeSelectionAttribute(r):t.removeAttribute(r,e))}class sn extends t.Plugin{static get pluginName(){return"HtmlComment"}init(){const t=this.editor;t.data.processor.skipComments=!1,t.model.schema.addAttributeCheck(((t,e)=>{if(t.endsWith("$root")&&e.startsWith("$comment"))return!0})),t.conversion.for("upcast").elementToMarker({view:"$comment",model:(t,{writer:r})=>{const o=this.editor.model.document.getRoot(),n=t.getCustomProperty("$rawContent"),i=`$comment:${(0,e.uid)()}`;return r.setAttribute(i,n,o),i}}),t.conversion.for("dataDowncast").markerToElement({model:"$comment",view:(t,{writer:e})=>{const r=this.editor.model.document.getRoot(),o=t.markerName,n=r.getAttribute(o),i=e.createUIElement("$comment");return e.setCustomProperty("$rawContent",n,i),i}}),t.model.document.registerPostFixer((e=>{const r=t.model.document.getRoot(),o=t.model.document.differ.getChangedMarkers().filter((t=>t.name.startsWith("$comment"))).filter((t=>{const e=t.data.newRange;return e&&"$graveyard"===e.root.rootName}));if(0===o.length)return!1;for(const t of o)e.removeMarker(t.name),e.removeAttribute(t.name,r);return!0})),t.data.on("set",(()=>{for(const e of t.model.markers.getMarkersGroup("$comment"))this.removeHtmlComment(e.name)}),{priority:"high"}),t.model.on("deleteContent",((e,[r])=>{for(const e of r.getRanges()){const r=t.model.schema.getLimitElement(e),o=t.model.createPositionAt(r,0),n=t.model.createPositionAt(r,"end");let i;i=o.isTouching(e.start)&&n.isTouching(e.end)?this.getHtmlCommentsInRange(t.model.createRange(o,n)):this.getHtmlCommentsInRange(e,{skipBoundaries:!0});for(const t of i)this.removeHtmlComment(t)}}),{priority:"high"})}createHtmlComment(t,r){const o=(0,e.uid)(),n=this.editor.model,i=n.document.getRoot(),s=`$comment:${o}`;return n.change((e=>{const o=e.createRange(t);return e.addMarker(s,{usingOperation:!0,affectsData:!0,range:o}),e.setAttribute(s,r,i),s}))}removeHtmlComment(t){const e=this.editor,r=e.model.document.getRoot(),o=e.model.markers.get(t);return!!o&&(e.model.change((e=>{e.removeMarker(o),e.removeAttribute(t,r)})),!0)}getHtmlCommentData(t){const e=this.editor,r=e.model.markers.get(t),o=e.model.document.getRoot();return r?{content:o.getAttribute(t),position:r.getStart()}:null}getHtmlCommentsInRange(t,{skipBoundaries:e=!1}={}){const r=!e;return Array.from(this.editor.model.markers.getMarkersGroup("$comment")).filter((e=>function(t,e){const o=t.getRange().start;return(o.isAfter(e.start)||r&&o.isEqual(e.start))&&(o.isBefore(e.end)||r&&o.isEqual(e.end))}(e,t))).map((t=>t.name))}}})(),(window.CKEditor5=window.CKEditor5||{}).htmlSupport=o})();;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={704:(t,e,o)=>{t.exports=o(79)("./src/core.js")},492:(t,e,o)=>{t.exports=o(79)("./src/engine.js")},273:(t,e,o)=>{t.exports=o(79)("./src/ui.js")},209:(t,e,o)=>{t.exports=o(79)("./src/utils.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";o.r(r),o.d(r,{DecoupledEditor:()=>F});var t=o(704),e=o(209),i=o(492);class n extends t.EditorUI{constructor(t,e){super(t),this.view=e}init(){const t=this.editor,e=this.view,o=t.editing.view,r=e.editable,i=o.document.getRoot();r.name=i.rootName,e.render();const n=r.element;this.setEditableElement(r.name,n),e.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(n),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const t=this.view;this.editor.editing.view.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.editor,e=this.view;e.toolbar.fillFromConfig(t.config.get("toolbar"),this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,o=e.document.getRoot(),r=t.sourceElement,n=t.config.get("placeholder")||r&&"textarea"===r.tagName.toLowerCase()&&r.getAttribute("placeholder");n&&(0,i.enablePlaceholder)({view:e,element:o,text:n,isDirectHost:!1,keepOnFocus:!0})}}var s=o(273);class l extends s.EditorUIView{constructor(t,e,o={}){super(t);const r=t.t;this.toolbar=new s.ToolbarView(t,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new s.InlineEditableUIView(t,e,o.editableElement,{label:t=>r("Rich Text Editor. Editing area: %0",t.name)}),this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:t.uiLanguageDirection}})}render(){super.render(),this.registerChild([this.toolbar,this.editable])}}const a=function(t){return null!=t&&"object"==typeof t};const c="object"==typeof global&&global&&global.Object===Object&&global;var d="object"==typeof self&&self&&self.Object===Object&&self;const u=(c||d||Function("return this")()).Symbol;var h=Object.prototype,b=h.hasOwnProperty,p=h.toString,g=u?u.toStringTag:void 0;const f=function(t){var e=b.call(t,g),o=t[g];try{t[g]=void 0;var r=!0}catch(t){}var i=p.call(t);return r&&(e?t[g]=o:delete t[g]),i};var m=Object.prototype.toString;const v=function(t){return m.call(t)};var y=u?u.toStringTag:void 0;const w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?f(t):v(t)};const E=function(t,e){return function(o){return t(e(o))}}(Object.getPrototypeOf,Object);var j=Function.prototype,O=Object.prototype,x=j.toString,T=O.hasOwnProperty,D=x.call(Object);const S=function(t){if(!a(t)||"[object Object]"!=w(t))return!1;var e=E(t);if(null===e)return!0;var o=T.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&x.call(o)==D};const P=function(t){return a(t)&&1===t.nodeType&&!S(t)};class F extends((0,t.DataApiMixin)((0,t.ElementApiMixin)(t.Editor))){constructor(o,r={}){if(!C(o)&&void 0!==r.initialData)throw new e.CKEditorError("editor-create-initial-data",null);super(r),void 0===this.config.get("initialData")&&this.config.set("initialData",function(t){return C(t)?(0,e.getDataFromElement)(t):t}(o)),C(o)&&(this.sourceElement=o,(0,t.secureSourceElement)(this)),this.model.document.createRoot();const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new l(this.locale,this.editing.view,{editableElement:this.sourceElement,shouldToolbarGroupWhenFull:i});this.ui=new n(this,s)}destroy(){const t=this.getData();return this.ui.destroy(),super.destroy().then((()=>{this.sourceElement&&this.updateSourceElement(t)}))}static create(t,o={}){return new Promise((r=>{if(C(t)&&"TEXTAREA"===t.tagName)throw new e.CKEditorError("editor-wrong-element",null);const i=new this(t,o);r(i.initPlugins().then((()=>i.ui.init())).then((()=>i.data.init(i.config.get("initialData")))).then((()=>i.fire("ready"))).then((()=>i)))}))}}function C(t){return P(t)}})(),(window.CKEditor5=window.CKEditor5||{}).editorDecoupled=r})();;
/**
 * @file
 * CKEditor 5 implementation of {@link Drupal.editors} API.
 */

((Drupal, debounce, CKEditor5, $, once) => {
  /**
   * The CKEditor 5 instances.
   *
   * @type {Map}
   */
  Drupal.CKEditor5Instances = new Map();

  /**
   * The callback functions.
   *
   * @type {Map}
   */
  const callbacks = new Map();

  /**
   * List of element ids with the required attribute.
   *
   * @type {Set}
   */
  const required = new Set();

  /**
   * Get the value of the (deep) property on name from scope.
   *
   * @param {object} scope
   *  Object used to search for the function.
   * @param {string} name
   *  The path to access in the scope object.
   *
   * @return {null|function}
   *  The corresponding function from the scope object.
   */
  function findFunc(scope, name) {
    if (!scope) {
      return null;
    }
    const parts = name.includes('.') ? name.split('.') : name;

    if (parts.length > 1) {
      return findFunc(scope[parts.shift()], parts);
    }
    return typeof scope[parts[0]] === 'function' ? scope[parts[0]] : null;
  }

  /**
   * Transform a config key in a callback function or execute the function
   * to dynamically build the configuration entry.
   *
   * @param {object} config
   *  The plugin configuration object.
   *
   * @return {null|function|*}
   *  Resulting configuration value.
   */
  function buildFunc(config) {
    const { func } = config;
    // Assuming a global object.
    const fn = findFunc(window, func.name);
    if (typeof fn === 'function') {
      const result = func.invoke ? fn(...func.args) : fn;
      return result;
    }
    return null;
  }

  /**
   * Converts a string representing regexp to a RegExp object.
   *
   * @param {Object} config
   *   An object containing configuration.
   * @param {string} config.pattern
   *   The regexp pattern that is used to create the RegExp object.
   *
   * @return {RegExp}
   *   Regexp object built from the string regexp.
   */
  function buildRegexp(config) {
    const { pattern } = config.regexp;

    const main = pattern.match(/\/(.+)\/.*/)[1];
    const options = pattern.match(/\/.+\/(.*)/)[1];

    return new RegExp(main, options);
  }

  /**
   * Casts configuration items to correct types.
   *
   * @param {Object} config
   *   The config object.
   * @return {Object}
   *   The config object with items transformed to correct type.
   */
  function processConfig(config) {
    /**
     * Processes an array in config recursively.
     *
     * @param {Array} config
     *   An array that should be processed recursively.
     * @return {Array}
     *   An array that has been processed recursively.
     */
    function processArray(config) {
      return config.map((item) => {
        if (typeof item === 'object') {
          return processConfig(item);
        }

        return item;
      });
    }

    return Object.entries(config).reduce((processed, [key, value]) => {
      if (typeof value === 'object') {
        // Check for null values.
        if (!value) {
          return processed;
        }
        if (value.hasOwnProperty('func')) {
          processed[key] = buildFunc(value);
        } else if (value.hasOwnProperty('regexp')) {
          processed[key] = buildRegexp(value);
        } else if (Array.isArray(value)) {
          processed[key] = processArray(value);
        } else {
          processed[key] = processConfig(value);
        }
      } else {
        processed[key] = value;
      }

      return processed;
    }, {});
  }

  /**
   * Set an id to a data-attribute for registering this element instance.
   *
   * @param {Element} element
   *   An element that should receive unique ID.
   *
   * @return {string}
   *   The id to use for this element.
   */
  const setElementId = (element) => {
    const id = Math.random().toString().slice(2, 9);
    element.setAttribute('data-ckeditor5-id', id);

    return id;
  };

  /**
   * Return a unique selector for the element.
   *
   * @param {HTMLElement} element
   *   An element which unique ID should be retrieved.
   *
   * @return {string}
   *   The id to use for this element.
   */
  const getElementId = (element) => element.getAttribute('data-ckeditor5-id');

  /**
   * Select CKEditor 5 plugin classes to include.
   *
   * Found in the CKEditor 5 global JavaScript object as {package.Class}.
   *
   * @param {Array} plugins
   *  List of package and Class name of plugins
   *
   * @return {Array}
   *   List of JavaScript Classes to add in the extraPlugins property of config.
   */
  function selectPlugins(plugins) {
    return plugins.map((pluginDefinition) => {
      const [build, name] = pluginDefinition.split('.');
      if (CKEditor5[build] && CKEditor5[build][name]) {
        return CKEditor5[build][name];
      }

      // eslint-disable-next-line no-console
      console.warn(`Failed to load ${build} - ${name}`);
      return null;
    });
  }

  /**
   * Process a group of CSS rules.
   *
   * @param {CSSGroupingRule} rulesGroup
   *  A complete stylesheet or a group of nested rules like @media.
   */
  function processRules(rulesGroup) {
    try {
      // eslint-disable-next-line no-use-before-define
      [...rulesGroup.cssRules].forEach(ckeditor5SelectorProcessing);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
        `Stylesheet ${rulesGroup.href} not included in CKEditor reset due to the browser's CORS policy.`,
      );
    }
  }

  /**
   * Processes CSS rules dynamically to account for CKEditor 5 in off canvas.
   *
   * This is achieved by doing the following steps:
   * - Adding a donut scope to off canvas rules, so they don't apply within the
   *   editor element.
   * - Editor specific rules (i.e. those with .ck* selectors) are duplicated and
   *   prefixed with the off canvas selector to ensure they have higher
   *   specificity over the off canvas reset.
   *
   * The donut scope prevents off canvas rules from applying to the CKEditor 5
   * editor element. Transforms a:
   *  - #drupal-off-canvas strong
   * rule into:
   *  - #drupal-off-canvas strong:not([data-drupal-ck-style-fence] *)
   *
   * This means that the rule applies to all <strong> elements inside
   * #drupal-off-canvas, except for <strong> elements who have a with a parent
   * with the "data-drupal-ck-style-fence" attribute.
   *
   * For example:
   * <div id="drupal-off-canvas">
   *   <p>
   *     <strong>Off canvas reset</strong>
   *   </p>
   *   <p data-drupal-ck-style-fence>
   *     <!--
   *       this strong elements matches the `[data-drupal-ck-style-fence] *`
   *       selector and is excluded from the off canvas reset rule.
   *     -->
   *     <strong>Off canvas reset NOT applied.</strong>
   *   </p>
   * </div>
   *
   * The donut scope does not prevent CSS inheritance. There is CSS that resets
   * following properties to prevent inheritance: background, border,
   * box-sizing, margin, padding, position, text-decoration, transition,
   * vertical-align and word-wrap.
   *
   * All .ck* CSS rules are duplicated and prefixed with the off canvas selector
   * To ensure they have higher specificity and are not reset too aggressively.
   *
   * @param {CSSRule} rule
   *  A single CSS rule to be analysed and changed if necessary.
   */
  function ckeditor5SelectorProcessing(rule) {
    // Handle nested rules in @media, @support, etc.
    if (rule.cssRules) {
      processRules(rule);
    }
    if (!rule.selectorText) {
      return;
    }
    const offCanvasId = '#drupal-off-canvas';
    const CKEditorClass = '.ck';
    const styleFence = '[data-drupal-ck-style-fence]';
    if (
      rule.selectorText.includes(offCanvasId) ||
      rule.selectorText.includes(CKEditorClass)
    ) {
      rule.selectorText = rule.selectorText
        .split(/,/g)
        .map((selector) => {
          // Only change rules that include #drupal-off-canvas in the selector.
          if (selector.includes(offCanvasId)) {
            return `${selector.trim()}:not(${styleFence} *)`;
          }
          // Duplicate CKEditor 5 styles with higher specificity for proper
          // display in off canvas elements.
          if (selector.includes(CKEditorClass)) {
            // Return both rules to avoid replacing the existing rules.
            return [
              selector.trim(),
              selector
                .trim()
                .replace(
                  CKEditorClass,
                  `${offCanvasId} ${styleFence} ${CKEditorClass}`,
                ),
            ];
          }
          return selector;
        })
        .flat()
        .join(', ');
    }
  }

  /**
   * Adds CSS to ensure proper styling of CKEditor 5 inside off-canvas dialogs.
   *
   * @param {HTMLElement} element
   *   The element the editor is attached to.
   */
  function offCanvasCss(element) {
    const fenceName = 'data-drupal-ck-style-fence';
    const editor = Drupal.CKEditor5Instances.get(
      element.getAttribute('data-ckeditor5-id'),
    );
    editor.ui.view.element.setAttribute(fenceName, '');
    // Only proceed if the styles haven't been added yet.
    if (once('ckeditor5-off-canvas-reset', 'body').length) {
      // For all rules on the page, add the donut scope for
      // rules containing the #drupal-off-canvas selector.
      [...document.styleSheets].forEach(processRules);

      const prefix = `#drupal-off-canvas-wrapper [${fenceName}]`;
      // Additional styles that need to be explicity added in addition to the
      // prefixed versions of existing css in `existingCss`.
      const addedCss = [
        `${prefix} .ck.ck-content {display:block;min-height:5rem;}`,
        `${prefix} .ck.ck-content * {display:initial;background:initial;color:initial;padding:initial;}`,
        `${prefix} .ck.ck-content li {display:list-item}`,
        `${prefix} .ck.ck-content ol li {list-style-type: decimal}`,
        `${prefix} .ck[contenteditable], ${prefix} .ck[contenteditable] * {-webkit-user-modify: read-write;-moz-user-modify: read-write;}`,
      ];

      const prefixedCss = [...addedCss].join('\n');

      // Create a new style tag with the prefixed styles added above.
      const offCanvasCssStyle = document.createElement('style');
      offCanvasCssStyle.textContent = prefixedCss;
      offCanvasCssStyle.setAttribute('id', 'ckeditor5-off-canvas-reset');
      document.body.appendChild(offCanvasCssStyle);
    }
  }

  /**
   * Integration of CKEditor 5 with the Drupal editor API.
   *
   * @namespace
   *
   * @see Drupal.editorAttach
   */
  Drupal.editors.ckeditor5 = {
    /**
     * Editor attach callback.
     *
     * @param {HTMLElement} element
     *   The element to attach the editor to.
     * @param {string} format
     *   The text format for the editor.
     */
    attach(element, format) {
      const { editorClassic } = CKEditor5;
      const { toolbar, plugins, config, language } = format.editorSettings;
      const extraPlugins = selectPlugins(plugins);
      const pluginConfig = processConfig(config);
      const editorConfig = {
        extraPlugins,
        toolbar,
        ...pluginConfig,
        // Language settings have a conflict between the editor localization
        // settings and the "language" plugin.
        language: { ...pluginConfig.language, ...language },
      };
      // Set the id immediately so that it is available when onChange is called.
      const id = setElementId(element);
      const { ClassicEditor } = editorClassic;

      ClassicEditor.create(element, editorConfig)
        .then((editor) => {
          // Save a reference to the initialized instance.
          Drupal.CKEditor5Instances.set(id, editor);

          // CKEditor 4 had a feature to remove the required attribute
          // see: https://www.drupal.org/project/drupal/issues/1954968
          if (element.hasAttribute('required')) {
            required.add(id);
            element.removeAttribute('required');
          }

          // Integrate CKEditor 5 viewport offset with Drupal displace.
          // @see \Drupal\Tests\ckeditor5\FunctionalJavascript\CKEditor5ToolbarTest
          // @see https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorui-EditorUI.html#member-viewportOffset
          $(document).on(
            `drupalViewportOffsetChange.ckeditor5.${id}`,
            (event, offsets) => {
              editor.ui.viewportOffset = offsets;
            },
          );

          editor.model.document.on('change:data', () => {
            const callback = callbacks.get(id);
            if (callback) {
              if (editor.plugins.has('SourceEditing')) {
                // If the change:data is being called while in source editing
                // mode, it means that the form is being submitted. To avoid
                // race conditions, in this case the callback gets called
                // without decorating the callback with debounce.
                // @see https://www.drupal.org/i/3229174
                // @see Drupal.editorDetach
                if (editor.plugins.get('SourceEditing').isSourceEditingMode) {
                  callback();
                  return;
                }
              }

              // Marks the field as changed.
              // @see Drupal.editorAttach
              debounce(callback, 400)();
            }
          });

          const isOffCanvas = element.closest('#drupal-off-canvas');

          if (isOffCanvas) {
            offCanvasCss(element);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.info(
            'Debugging can be done with an unminified version of CKEditor by installing from the source file. Consult documentation at https://www.drupal.org/node/3258901',
          );
          // eslint-disable-next-line no-console
          console.error(error);
        });
    },

    /**
     * Editor detach callback.
     *
     * @param {HTMLElement} element
     *   The element to detach the editor from.
     * @param {string} format
     *   The text format used for the editor.
     * @param {string} trigger
     *   The event trigger for the detach.
     */
    detach(element, format, trigger) {
      const id = getElementId(element);
      const editor = Drupal.CKEditor5Instances.get(id);
      if (!editor) {
        return;
      }

      $(document).off(`drupalViewportOffsetChange.ckeditor5.${id}`);

      if (trigger === 'serialize') {
        editor.updateSourceElement();
      } else {
        element.removeAttribute('contentEditable');
        // Return the promise to allow external code to queue code to
        // execute after the destroy is complete.
        return editor
          .destroy()
          .then(() => {
            // Clean up stored references.
            Drupal.CKEditor5Instances.delete(id);
            callbacks.delete(id);
            if (required.has(id)) {
              element.setAttribute('required', 'required');
              required.delete(id);
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }
    },

    /**
     * Registers a callback which CKEditor 5 will call on change:data event.
     *
     * @param {HTMLElement} element
     *   The element where the change occurred.
     * @param {function} callback
     *   Callback called with the value of the editor.
     */
    onChange(element, callback) {
      callbacks.set(getElementId(element), callback);
    },

    /**
     * Attaches an inline editor to a DOM element.
     *
     * @param {HTMLElement} element
     *   The element to attach the editor to.
     * @param {object} format
     *   The text format used in the editor.
     * @param {string} [mainToolbarId]
     *   The id attribute for the main editor toolbar, if any.
     */
    attachInlineEditor(element, format, mainToolbarId) {
      const { editorDecoupled } = CKEditor5;
      const {
        toolbar,
        plugins,
        config: pluginConfig,
        language,
      } = format.editorSettings;
      const extraPlugins = selectPlugins(plugins);
      const config = {
        extraPlugins,
        toolbar,
        language,
        ...processConfig(pluginConfig),
      };
      const id = setElementId(element);
      const { DecoupledEditor } = editorDecoupled;

      DecoupledEditor.create(element, config)
        .then((editor) => {
          Drupal.CKEditor5Instances.set(id, editor);
          const toolbar = document.getElementById(mainToolbarId);
          toolbar.appendChild(editor.ui.view.toolbar.element);
          editor.model.document.on('change:data', () => {
            const callback = callbacks.get(id);
            if (callback) {
              // Allow modules to update EditorModel by providing the current data.
              debounce(callback, 400)(editor.getData());
            }
          });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    },
  };

  /**
   * Public API for Drupal CKEditor 5 integration.
   *
   * @namespace
   */
  Drupal.ckeditor5 = {
    /**
     * Variable storing the current dialog's save callback.
     *
     * @type {?function}
     */
    saveCallback: null,

    /**
     * Open a dialog for a Drupal-based plugin.
     *
     * This dynamically loads jQuery UI (if necessary) using the Drupal AJAX
     * framework, then opens a dialog at the specified Drupal path.
     *
     * @param {string} url
     *   The URL that contains the contents of the dialog.
     * @param {function} saveCallback
     *   A function to be called upon saving the dialog.
     * @param {object} dialogSettings
     *   An object containing settings to be passed to the jQuery UI.
     */
    openDialog(url, saveCallback, dialogSettings) {
      // Add a consistent dialog class.
      const classes = dialogSettings.dialogClass
        ? dialogSettings.dialogClass.split(' ')
        : [];
      classes.push('ui-dialog--narrow');
      dialogSettings.dialogClass = classes.join(' ');
      dialogSettings.autoResize =
        window.matchMedia('(min-width: 600px)').matches;
      dialogSettings.width = 'auto';

      const ckeditorAjaxDialog = Drupal.ajax({
        dialog: dialogSettings,
        dialogType: 'modal',
        selector: '.ckeditor5-dialog-loading-link',
        url,
        progress: { type: 'fullscreen' },
        submit: {
          editor_object: {},
        },
      });
      ckeditorAjaxDialog.execute();

      // Store the save callback to be executed when this dialog is closed.
      Drupal.ckeditor5.saveCallback = saveCallback;
    },
  };

  // Redirect on hash change when the original hash has an associated CKEditor 5.
  function redirectTextareaFragmentToCKEditor5Instance() {
    const hash = window.location.hash.substr(1);
    const element = document.getElementById(hash);
    if (element) {
      const editorID = getElementId(element);
      const editor = Drupal.CKEditor5Instances.get(editorID);
      if (editor) {
        // Give the CKEditor 5 instance an ID.
        editor.sourceElement.nextElementSibling.setAttribute(
          'id',
          `cke_${hash}`,
        );
        window.location.replace(`#cke_${hash}`);
      }
    }
  }

  $(window).on(
    'hashchange.ckeditor',
    redirectTextareaFragmentToCKEditor5Instance,
  );

  // Respond to new dialogs that are opened by CKEditor, closing the AJAX loader.
  $(window).on('dialog:beforecreate', () => {
    $('.ckeditor5-dialog-loading').animate(
      { top: '-40px' },
      function removeDialogLoading() {
        $(this).remove();
      },
    );
  });

  // Respond to dialogs that are saved, sending data back to CKEditor.
  $(window).on('editor:dialogsave', (e, values) => {
    if (Drupal.ckeditor5.saveCallback) {
      Drupal.ckeditor5.saveCallback(values);
    }
  });

  // Respond to dialogs that are closed, removing the current save handler.
  $(window).on('dialog:afterclose', () => {
    if (Drupal.ckeditor5.saveCallback) {
      Drupal.ckeditor5.saveCallback = null;
    }
  });
})(Drupal, Drupal.debounce, CKEditor5, jQuery, once);
;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{Bold:"Bold",Code:"Code",Italic:"Italic",Strikethrough:"Strikethrough",Subscript:"Subscript",Superscript:"Superscript",Underline:"Underline"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={415:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}",""]);const r=s},609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&s[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},62:(t,e,i)=>{"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function a(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function c(t,e){for(var i={},n=[],s=0;s<t.length;s++){var r=t[s],c=e.base?r[0]+e.base:r[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var d=a(u),g={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(o[d].references++,o[d].updater(g)):o.push({identifier:u,updater:b(g,e),references:1}),n.push(u)}return n}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function g(t,e,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function m(t,e,i){var n=i.css,s=i.media,r=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,h=0;function b(t,e){var i,n,s;if(e.singleton){var r=h++;i=p||(p=l(e)),n=g.bind(null,i,r,!1),s=g.bind(null,i,r,!0)}else i=l(e),n=m.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var s=a(i[n]);o[s].references--}for(var r=c(t,e),l=0;l<i.length;l++){var u=a(i[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}i=r}}}},704:(t,e,i)=>{t.exports=i(79)("./src/core.js")},181:(t,e,i)=>{t.exports=i(79)("./src/typing.js")},273:(t,e,i)=>{t.exports=i(79)("./src/ui.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nc=void 0;var n={};(()=>{"use strict";i.r(n),i.d(n,{Bold:()=>l,BoldEditing:()=>r,BoldUI:()=>c,Code:()=>f,CodeEditing:()=>g,CodeUI:()=>w,Italic:()=>T,ItalicEditing:()=>y,ItalicUI:()=>E,Strikethrough:()=>N,StrikethroughEditing:()=>A,StrikethroughUI:()=>I,Subscript:()=>F,SubscriptEditing:()=>B,SubscriptUI:()=>U,Superscript:()=>j,SuperscriptEditing:()=>M,SuperscriptUI:()=>V,Underline:()=>H,UnderlineEditing:()=>z,UnderlineUI:()=>q});var t=i(704);class e extends t.Command{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,i=e.document.selection,n=void 0===t.forceValue?!this.value:t.forceValue;e.change((t=>{if(i.isCollapsed)n?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const s=e.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const e of s)n?t.setAttribute(this.attributeKey,n,e):t.removeAttribute(this.attributeKey,e)}}))}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,i=t.document.selection;if(i.isCollapsed)return i.hasAttribute(this.attributeKey);for(const t of i.getRanges())for(const i of t.getItems())if(e.checkAttribute(i,this.attributeKey))return i.hasAttribute(this.attributeKey);return!1}}const s="bold";class r extends t.Plugin{static get pluginName(){return"BoldEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:s}),t.model.schema.setAttributeProperties(s,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:s,view:"strong",upcastAlso:["b",t=>{const e=t.getStyle("font-weight");return e?"bold"==e||Number(e)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add(s,new e(t,s)),t.keystrokes.set("CTRL+B",s)}}var o=i(273);const a="bold";class c extends t.Plugin{static get pluginName(){return"BoldUI"}init(){const e=this.editor,i=e.t;e.ui.componentFactory.add(a,(n=>{const s=e.commands.get(a),r=new o.ButtonView(n);return r.set({label:i("Bold"),icon:t.icons.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(r,"execute",(()=>{e.execute(a),e.editing.view.focus()})),r}))}}class l extends t.Plugin{static get requires(){return[r,c]}static get pluginName(){return"Bold"}}var u=i(181);const d="code";class g extends t.Plugin{static get pluginName(){return"CodeEditing"}static get requires(){return[u.TwoStepCaretMovement]}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:d}),t.model.schema.setAttributeProperties(d,{isFormatting:!0,copyOnEnter:!1}),t.conversion.attributeToElement({model:d,view:"code",upcastAlso:{styles:{"word-wrap":"break-word"}}}),t.commands.add(d,new e(t,d)),t.plugins.get(u.TwoStepCaretMovement).registerAttribute(d),(0,u.inlineHighlight)(t,d,"code","ck-code_selected")}}var m=i(62),p=i.n(m),h=i(415),b={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};p()(h.Z,b);h.Z.locals;const v="code";class w extends t.Plugin{static get pluginName(){return"CodeUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(v,(i=>{const n=t.commands.get(v),s=new o.ButtonView(i);return s.set({label:e("Code"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 5.7 5.2 3.9v1.3l-5.6 4c-.1.2-.3.2-.5.2-.3-.1-.6-.7-.6-1l.3-.4 4.7-3.5L11.5 7l-.2-.2c-.1-.3-.1-.6 0-.8.2-.2.5-.4.8-.4a.8.8 0 0 1 .4.1zm-5.2 0L2 9.6v1.3l5.6 4c.1.2.3.2.5.2.3-.1.7-.7.6-1 0-.1 0-.3-.2-.4l-5-3.5L8.2 7l.2-.2c.1-.3.1-.6 0-.8-.2-.2-.5-.4-.8-.4a.8.8 0 0 0-.3.1z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(v),t.editing.view.focus()})),s}))}}class f extends t.Plugin{static get requires(){return[g,w]}static get pluginName(){return"Code"}}const x="italic";class y extends t.Plugin{static get pluginName(){return"ItalicEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:x}),t.model.schema.setAttributeProperties(x,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:x,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(x,new e(t,x)),t.keystrokes.set("CTRL+I",x)}}const S="italic";class E extends t.Plugin{static get pluginName(){return"ItalicUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(S,(i=>{const n=t.commands.get(S),s=new o.ButtonView(i);return s.set({label:e("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(S),t.editing.view.focus()})),s}))}}class T extends t.Plugin{static get requires(){return[y,E]}static get pluginName(){return"Italic"}}const k="strikethrough";class A extends t.Plugin{static get pluginName(){return"StrikethroughEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:k}),t.model.schema.setAttributeProperties(k,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:k,view:"s",upcastAlso:["del","strike",{styles:{"text-decoration":"line-through"}}]}),t.commands.add(k,new e(t,k)),t.keystrokes.set("CTRL+SHIFT+X","strikethrough")}}const C="strikethrough";class I extends t.Plugin{static get pluginName(){return"StrikethroughUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(C,(i=>{const n=t.commands.get(C),s=new o.ButtonView(i);return s.set({label:e("Strikethrough"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.4c-.8-.4-1.5-.9-2.2-1.5a.6.6 0 0 1-.2-.5l.3-.6h1c1 1.2 2.1 1.7 3.7 1.7 1 0 1.8-.3 2.3-.6.6-.4.6-1.2.6-1.3.2-1.2-.9-2.1-.9-2.1h2.1c.3.7.4 1.2.4 1.7v.8l-.6 1.2c-.6.8-1.1 1-1.6 1.2a6 6 0 0 1-2.4.6c-1 0-1.8-.3-2.5-.6zM6.8 9 6 8.3c-.4-.5-.5-.8-.5-1.6 0-.7.1-1.3.5-1.8.4-.6 1-1 1.6-1.3a6.3 6.3 0 0 1 4.7 0 4 4 0 0 1 1.7 1l.3.7c0 .1.2.4-.2.7-.4.2-.9.1-1 0a3 3 0 0 0-1.2-1c-.4-.2-1-.3-2-.4-.7 0-1.4.2-2 .6-.8.6-1 .8-1 1.5 0 .8.5 1 1.2 1.5.6.4 1.1.7 1.9 1H6.8z"/><path d="M3 10.5V9h14v1.5z"/></svg>',keystroke:"CTRL+SHIFT+X",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(C),t.editing.view.focus()})),s}))}}class N extends t.Plugin{static get requires(){return[A,I]}static get pluginName(){return"Strikethrough"}}const P="subscript";class B extends t.Plugin{static get pluginName(){return"SubscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:P}),t.model.schema.setAttributeProperties(P,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:P,view:"sub",upcastAlso:[{styles:{"vertical-align":"sub"}}]}),t.commands.add(P,new e(t,P))}}const O="subscript";class U extends t.Plugin{static get pluginName(){return"SubscriptUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(O,(i=>{const n=t.commands.get(O),s=new o.ButtonView(i);return s.set({label:e("Subscript"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.03 10.349 3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82zm8.147 7.829h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(O),t.editing.view.focus()})),s}))}}class F extends t.Plugin{static get requires(){return[B,U]}static get pluginName(){return"Subscript"}}const L="superscript";class M extends t.Plugin{static get pluginName(){return"SuperscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:L}),t.model.schema.setAttributeProperties(L,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:L,view:"sup",upcastAlso:[{styles:{"vertical-align":"super"}}]}),t.commands.add(L,new e(t,L))}}const R="superscript";class V extends t.Plugin{static get pluginName(){return"SuperscriptUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(R,(i=>{const n=t.commands.get(R),s=new o.ButtonView(i);return s.set({label:e("Superscript"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.677 8.678h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309zM7.03 10.349l3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(R),t.editing.view.focus()})),s}))}}class j extends t.Plugin{static get requires(){return[M,V]}static get pluginName(){return"Superscript"}}const K="underline";class z extends t.Plugin{static get pluginName(){return"UnderlineEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:K}),t.model.schema.setAttributeProperties(K,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:K,view:"u",upcastAlso:{styles:{"text-decoration":"underline"}}}),t.commands.add(K,new e(t,K)),t.keystrokes.set("CTRL+U","underline")}}const _="underline";class q extends t.Plugin{static get pluginName(){return"UnderlineUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(_,(i=>{const n=t.commands.get(_),s=new o.ButtonView(i);return s.set({label:e("Underline"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>',keystroke:"CTRL+U",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(_),t.editing.view.focus()})),s}))}}class H extends t.Plugin{static get requires(){return[z,q]}static get pluginName(){return"Underline"}}})(),(window.CKEditor5=window.CKEditor5||{}).basicStyles=n})();;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.drupalEmphasis=t())}(globalThis,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/core.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";r.d(o,{default:()=>n});var e=r("ckeditor5/src/core.js");class t extends e.Plugin{static get pluginName(){return"DrupalEmphasisEditing"}init(){this.editor.conversion.for("downcast").attributeToElement({model:"italic",view:"em",converterPriority:"high"})}}const i=t;class s extends e.Plugin{static get requires(){return[i]}static get pluginName(){return"DrupalEmphasis"}}const n={DrupalEmphasis:s}})(),o=o.default})()));;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Choose heading":"Choose heading",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Paragraph:"Paragraph","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={609:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(298),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}",""]);const a=o},298:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);i&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},62:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function s(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var h=s(l),g={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(r[h].references++,r[h].updater(g)):r.push({identifier:l,updater:f(g,t),references:1}),i.push(l)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,h=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function g(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function m(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,p=0;function f(e,t){var n,i,o;if(t.singleton){var a=p++;n=u||(u=c(t)),i=g.bind(null,n,a,!1),o=g.bind(null,n,a,!0)}else n=c(t),i=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);r[o].references--}for(var a=d(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=a}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},747:(e,t,n)=>{e.exports=n(79)("./src/paragraph.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},209:(e,t,n)=>{e.exports=n(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var i={};(()=>{"use strict";n.r(i),n.d(i,{Heading:()=>f,HeadingButtonsUI:()=>w,HeadingEditing:()=>d,HeadingUI:()=>p,Title:()=>y});var e=n(704),t=n(747),o=n(209);class a extends e.Command{constructor(e,t){super(e),this.modelElements=t}refresh(){const e=(0,o.first)(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some((t=>r(e,t,this.editor.model.schema)))}execute(e){const t=this.editor.model,n=t.document,i=e.value;t.change((e=>{const o=Array.from(n.selection.getSelectedBlocks()).filter((e=>r(e,i,t.schema)));for(const t of o)t.is("element",i)||e.rename(t,i)}))}}function r(e,t,n){return n.checkChild(e.parent,t)&&!n.isObject(e)}const s="paragraph";class d extends e.Plugin{static get pluginName(){return"HeadingEditing"}constructor(e){super(e),e.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[t.Paragraph]}init(){const e=this.editor,t=e.config.get("heading.options"),n=[];for(const i of t)i.model!==s&&(e.model.schema.register(i.model,{inheritAllFrom:"$block"}),e.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(e),e.commands.add("heading",new a(e,n))}afterInit(){const e=this.editor,t=e.commands.get("enter"),n=e.config.get("heading.options");t&&this.listenTo(t,"afterExecute",((t,i)=>{const o=e.model.document.selection.getFirstPosition().parent;n.some((e=>o.is("element",e.model)))&&!o.is("element",s)&&0===o.childCount&&i.writer.rename(o,s)}))}_addDefaultH1Conversion(e){e.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:o.priorities.get("low")+1})}}var c=n(273);function l(e){const t=e.t,n={Paragraph:t("Paragraph"),"Heading 1":t("Heading 1"),"Heading 2":t("Heading 2"),"Heading 3":t("Heading 3"),"Heading 4":t("Heading 4"),"Heading 5":t("Heading 5"),"Heading 6":t("Heading 6")};return e.config.get("heading.options").map((e=>{const t=n[e.title];return t&&t!=e.title&&(e.title=t),e}))}var h=n(62),g=n.n(h),m=n(609),u={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};g()(m.Z,u);m.Z.locals;class p extends e.Plugin{static get pluginName(){return"HeadingUI"}init(){const e=this.editor,t=e.t,n=l(e),i=t("Choose heading"),a=t("Heading");e.ui.componentFactory.add("heading",(t=>{const r={},s=new o.Collection,d=e.commands.get("heading"),l=e.commands.get("paragraph"),h=[d];for(const e of n){const t={type:"button",model:new c.Model({label:e.title,class:e.class,withText:!0})};"paragraph"===e.model?(t.model.bind("isOn").to(l,"value"),t.model.set("commandName","paragraph"),h.push(l)):(t.model.bind("isOn").to(d,"value",(t=>t===e.model)),t.model.set({commandName:"heading",commandValue:e.model})),s.add(t),r[e.model]=e.title}const g=(0,c.createDropdown)(t);return(0,c.addListToDropdown)(g,s),g.buttonView.set({isOn:!1,withText:!0,tooltip:a}),g.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),g.bind("isEnabled").toMany(h,"isEnabled",((...e)=>e.some((e=>e)))),g.buttonView.bind("label").to(d,"value",l,"value",((e,t)=>{const n=e||t&&"paragraph";return r[n]?r[n]:i})),this.listenTo(g,"execute",(t=>{e.execute(t.source.commandName,t.source.commandValue?{value:t.source.commandValue}:void 0),e.editing.view.focus()})),g}))}}class f extends e.Plugin{static get requires(){return[d,p]}static get pluginName(){return"Heading"}}const v={heading1:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9v10h-2v-8h-2V9h4zM4 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11H4v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v4.5z"/></svg>',heading2:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm16.076 8.343V18.5h-6.252c.067-.626.27-1.22.61-1.78.338-.561 1.006-1.305 2.005-2.232.804-.749 1.297-1.257 1.479-1.523.245-.368.368-.732.368-1.092 0-.398-.107-.703-.32-.917-.214-.214-.51-.32-.886-.32-.372 0-.669.111-.889.336-.22.224-.347.596-.38 1.117l-1.778-.178c.106-.982.438-1.686.997-2.114.558-.427 1.257-.64 2.095-.64.918 0 1.64.247 2.164.742.525.495.787 1.11.787 1.847 0 .419-.075.818-.225 1.197-.15.378-.388.775-.714 1.19-.216.275-.605.67-1.168 1.187-.563.516-.92.859-1.07 1.028a3.11 3.11 0 0 0-.365.495h3.542z"/></svg>',heading3:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm9.989 7.53 1.726-.209c.055.44.203.777.445 1.01.24.232.533.349.876.349.368 0 .678-.14.93-.42.251-.279.377-.655.377-1.13 0-.448-.12-.803-.362-1.066a1.153 1.153 0 0 0-.882-.393c-.228 0-.501.044-.819.133l.197-1.453c.482.012.85-.092 1.105-.315.253-.222.38-.517.38-.885 0-.313-.093-.563-.279-.75-.186-.185-.434-.278-.743-.278a1.07 1.07 0 0 0-.78.317c-.216.212-.347.52-.394.927l-1.644-.28c.114-.562.287-1.012.517-1.348.231-.337.553-.601.965-.794a3.24 3.24 0 0 1 1.387-.289c.876 0 1.579.28 2.108.838.436.457.653.973.653 1.549 0 .817-.446 1.468-1.339 1.955.533.114.96.37 1.28.768.319.398.478.878.478 1.441 0 .817-.298 1.513-.895 2.088-.596.576-1.339.864-2.228.864-.842 0-1.54-.243-2.094-.727-.555-.485-.876-1.118-.965-1.901z"/></svg>',heading4:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm13.55 10v-1.873h-3.81v-1.561l4.037-5.91h1.498v5.904h1.156v1.567h-1.156V18.5H17.05zm0-3.44v-3.18l-2.14 3.18h2.14z"/></svg>',heading5:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm9.578 7.607 1.777-.184c.05.402.201.72.45.955a1.223 1.223 0 0 0 1.81-.101c.258-.303.387-.759.387-1.368 0-.572-.128-1-.384-1.286-.256-.285-.59-.428-1-.428-.512 0-.971.226-1.377.679l-1.448-.21.915-4.843h4.716v1.67H15.56l-.28 1.58a2.697 2.697 0 0 1 1.219-.298 2.68 2.68 0 0 1 2.012.863c.55.576.825 1.323.825 2.241a3.36 3.36 0 0 1-.666 2.05c-.605.821-1.445 1.232-2.52 1.232-.86 0-1.56-.23-2.101-.692-.542-.461-.866-1.081-.971-1.86z"/></svg>',heading6:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm15.595 2.973-1.726.19c-.043-.355-.153-.617-.33-.787-.178-.169-.409-.253-.692-.253-.377 0-.695.169-.956.507-.26.339-.424 1.043-.492 2.114.445-.525.997-.787 1.657-.787.745 0 1.383.284 1.914.85.531.568.797 1.3.797 2.197 0 .952-.28 1.716-.838 2.291-.559.576-1.276.864-2.152.864-.94 0-1.712-.365-2.317-1.095-.605-.73-.908-1.927-.908-3.59 0-1.705.316-2.935.946-3.688.63-.753 1.45-1.13 2.457-1.13.706 0 1.291.198 1.755.594.463.395.758.97.885 1.723zm-4.043 3.891c0 .58.133 1.028.4 1.343.266.315.57.473.914.473.33 0 .605-.13.825-.388.22-.258.33-.68.33-1.27 0-.604-.118-1.047-.355-1.329a1.115 1.115 0 0 0-.89-.422c-.342 0-.632.134-.869.403s-.355.666-.355 1.19z"/></svg>'};class w extends e.Plugin{init(){l(this.editor).filter((e=>"paragraph"!==e.model)).map((e=>this._createButton(e)))}_createButton(e){const t=this.editor;t.ui.componentFactory.add(e.model,(n=>{const i=new c.ButtonView(n),o=t.commands.get("heading");return i.label=e.title,i.icon=e.icon||v[e.model],i.tooltip=!0,i.isToggleable=!0,i.bind("isEnabled").to(o),i.bind("isOn").to(o,"value",(t=>t==e.model)),i.on("execute",(()=>{t.execute("heading",{value:e.model}),t.editing.view.focus()})),i}))}}var b=n(492);const x=new Set(["paragraph","heading1","heading2","heading3","heading4","heading5","heading6"]);class y extends e.Plugin{static get pluginName(){return"Title"}static get requires(){return["Paragraph"]}init(){const e=this.editor,t=e.model;this._bodyPlaceholder=null,t.schema.register("title",{isBlock:!0,allowIn:"$root"}),t.schema.register("title-content",{isBlock:!0,allowIn:"title",allowAttributes:["alignment"]}),t.schema.extend("$text",{allowIn:"title-content"}),t.schema.addAttributeCheck((e=>{if(e.endsWith("title-content $text"))return!1})),e.editing.mapper.on("modelToViewPosition",C(e.editing.view)),e.data.mapper.on("modelToViewPosition",C(e.editing.view)),e.conversion.for("downcast").elementToElement({model:"title-content",view:"h1"}),e.conversion.for("downcast").add((e=>e.on("insert:title",((e,t,n)=>{n.consumable.consume(t.item,e.name)})))),e.data.upcastDispatcher.on("element:h1",H,{priority:"high"}),e.data.upcastDispatcher.on("element:h2",H,{priority:"high"}),e.data.upcastDispatcher.on("element:h3",H,{priority:"high"}),t.document.registerPostFixer((e=>this._fixTitleContent(e))),t.document.registerPostFixer((e=>this._fixTitleElement(e))),t.document.registerPostFixer((e=>this._fixBodyElement(e))),t.document.registerPostFixer((e=>this._fixExtraParagraph(e))),this._attachPlaceholders(),this._attachTabPressHandling()}getTitle(e={}){const t=this._getTitleElement().getChild(0);return this.editor.data.stringify(t,e)}getBody(e={}){const t=this.editor,n=t.data,i=t.model,o=t.model.document.getRoot(),a=t.editing.view,r=new b.DowncastWriter(a.document),s=i.createRangeIn(o),d=r.createDocumentFragment(),c=i.createPositionAfter(o.getChild(0)),l=i.createRange(c,i.createPositionAt(o,"end")),h=new Map;for(const e of i.markers){const t=l.getIntersection(e.getRange());t&&h.set(e.name,t)}return n.mapper.clearBindings(),n.mapper.bindElements(o,d),n.downcastDispatcher.convert(s,h,r,e),r.remove(r.createRangeOn(d.getChild(0))),t.data.processor.toData(d)}_getTitleElement(){const e=this.editor.model.document.getRoot();for(const t of e.getChildren())if(T(t))return t}_fixTitleContent(e){const t=this._getTitleElement();if(!t||1===t.maxOffset)return!1;const n=Array.from(t.getChildren());n.shift();for(const i of n)e.move(e.createRangeOn(i),t,"after"),e.rename(i,"paragraph");return!0}_fixTitleElement(e){const t=this.editor.model,n=t.document.getRoot(),i=Array.from(n.getChildren()).filter(T),o=i[0],a=n.getChild(0);if(a.is("element","title"))return P(i,e,t);if(!o&&!x.has(a.name)){const t=e.createElement("title");return e.insert(t,n),e.insertElement("title-content",t),!0}return x.has(a.name)?function(e,t,n){const i=t.createElement("title");t.insert(i,e,"before"),t.insert(e,i,0),t.rename(e,"title-content"),n.schema.removeDisallowedAttributes([e],t)}(a,e,t):e.move(e.createRangeOn(o),n,0),P(i,e,t),!0}_fixBodyElement(e){const t=this.editor.model.document.getRoot();return t.childCount<2&&(this._bodyPlaceholder=e.createElement("paragraph"),e.insert(this._bodyPlaceholder,t,1),!0)}_fixExtraParagraph(e){const t=this.editor.model.document.getRoot(),n=this._bodyPlaceholder;return!!function(e,t){if(!e||!e.is("element","paragraph")||e.childCount)return!1;if(t.childCount<=2||t.getChild(t.childCount-1)!==e)return!1;return!0}(n,t)&&(this._bodyPlaceholder=null,e.remove(n),!0)}_attachPlaceholders(){const e=this.editor,t=e.t,n=e.editing.view,i=n.document.getRoot(),o=e.sourceElement,a=e.config.get("title.placeholder")||t("Type your title"),r=e.config.get("placeholder")||o&&"textarea"===o.tagName.toLowerCase()&&o.getAttribute("placeholder")||t("Type or paste your content here.");let s;e.editing.downcastDispatcher.on("insert:title-content",((e,t,i)=>{(0,b.enablePlaceholder)({view:n,element:i.mapper.toViewElement(t.item),text:a,keepOnFocus:!0})})),n.document.registerPostFixer((e=>{const t=i.getChild(1);let n=!1;return t!==s&&(s&&((0,b.hidePlaceholder)(e,s),e.removeAttribute("data-placeholder",s)),e.setAttribute("data-placeholder",r,t),s=t,n=!0),n=(0,b.needsPlaceholder)(t,!0)&&2===i.childCount&&"p"===t.name?!!(0,b.showPlaceholder)(e,t)||n:!!(0,b.hidePlaceholder)(e,t)||n,n}))}_attachTabPressHandling(){const e=this.editor,t=e.model;e.keystrokes.set("TAB",((e,n)=>{t.change((e=>{const i=t.document.selection,o=Array.from(i.getSelectedBlocks());if(1===o.length&&o[0].is("element","title-content")){const i=t.document.getRoot().getChild(1);e.setSelection(i,0),n()}}))})),e.keystrokes.set("SHIFT + TAB",((n,i)=>{t.change((n=>{const a=t.document.selection;if(!a.isCollapsed)return;const r=e.model.document.getRoot(),s=(0,o.first)(a.getSelectedBlocks()),d=a.getFirstPosition(),c=r.getChild(0);s===r.getChild(1)&&d.isAtStart&&(n.setSelection(c.getChild(0),0),i())}))}))}}function H(e,t,n){const i=t.modelCursor,o=t.viewItem;if(!i.isAtStart||!i.parent.is("element","$root"))return;if(!n.consumable.consume(o,{name:!0}))return;const a=n.writer,r=a.createElement("title"),s=a.createElement("title-content");a.append(s,r),a.insert(r,i),n.convertChildren(o,s),n.updateConversionResult(r,t)}function C(e){return(t,n)=>{const i=n.modelPosition.parent;if(!i.is("element","title"))return;const o=i.parent,a=n.mapper.toViewElement(o);n.viewPosition=e.createPositionAt(a,0),t.stop()}}function T(e){return e.is("element","title")}function P(e,t,n){let i=!1;for(const o of e)0!==o.index&&(_(o,t,n),i=!0);return i}function _(e,t,n){const i=e.getChild(0);i.isEmpty?t.remove(e):(t.move(t.createRangeOn(i),e,"before"),t.rename(i,"paragraph"),t.remove(e),n.schema.removeDisallowedAttributes([i],t))}})(),(window.CKEditor5=window.CKEditor5||{}).heading=i})();;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={945:(e,r,t)=>{e.exports=t(79)("./src/clipboard.js")},704:(e,r,t)=>{e.exports=t(79)("./src/core.js")},331:(e,r,t)=>{e.exports=t(79)("./src/enter.js")},468:(e,r,t)=>{e.exports=t(79)("./src/select-all.js")},181:(e,r,t)=>{e.exports=t(79)("./src/typing.js")},254:(e,r,t)=>{e.exports=t(79)("./src/undo.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var n=r[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{"use strict";t.r(s),t.d(s,{Essentials:()=>a});var e=t(704),r=t(945),o=t(331),n=t(468),i=t(181),l=t(254);class a extends e.Plugin{static get requires(){return[r.Clipboard,o.Enter,n.SelectAll,o.ShiftEnter,i.Typing,l.Undo]}static get pluginName(){return"Essentials"}}})(),(window.CKEditor5=window.CKEditor5||{}).essentials=s})();;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.drupalHtmlEngine=t())}(globalThis,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/core.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(n){var p=t[n];if(void 0!==p)return p.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};return(()=>{"use strict";r.d(n,{default:()=>o});var e=r("ckeditor5/src/core.js");class t{constructor(){this.chunks=[],this.selfClosingTags=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]}build(){return this.chunks.join("")}appendNode(e){e.nodeType===Node.TEXT_NODE?this._appendText(e):e.nodeType===Node.ELEMENT_NODE?this._appendElement(e):e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&this._appendChildren(e)}_appendElement(e){const t=e.nodeName.toLowerCase();this._append("<"),this._append(t),this._appendAttributes(e),this._append(">"),this.selfClosingTags.includes(t)||(this._appendChildren(e),this._append("</"),this._append(t),this._append(">"))}_appendChildren(e){Object.keys(e.childNodes).forEach((t=>{this.appendNode(e.childNodes[t])}))}_appendAttributes(e){Object.keys(e.attributes).forEach((t=>{this._append(" "),this._append(e.attributes[t].name),this._append('="'),this._append(this.constructor._escapeAttribute(e.attributes[t].value)),this._append('"')}))}_appendText(e){const t=document.implementation.createHTMLDocument("").createElement("p");t.textContent=e.textContent,this._append(t.innerHTML)}_append(e){this.chunks.push(e)}static _escapeAttribute(e){return e.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r\n/g,"&#13;").replace(/[\r\n]/g,"&#13;")}}class p{getHtml(e){const r=new t;return r.appendNode(e),r.build()}}class s extends e.Plugin{init(){this.editor.data.processor.htmlWriter=new p}static get pluginName(){return"DrupalHtmlEngine"}}const o={DrupalHtmlEngine:s}})(),n=n.default})()));;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={945:(e,t,n)=>{e.exports=n(79)("./src/clipboard.js")},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{PasteFromOffice:()=>v});var e=n(704),t=n(945),s=n(492);function i(e,t,n,{blockElements:r,inlineObjectElements:s}){let i=n.createPositionAt(e,"forward"==t?"after":"before");return i=i.getLastMatchingPosition((({item:e})=>e.is("element")&&!r.includes(e.name)&&!s.includes(e.name)),{direction:t}),"forward"==t?i.nodeAfter:i.nodeBefore}function o(e,t){return!!e&&e.is("element")&&t.includes(e.name)}function c(e,t){if(!e.childCount)return;const n=new s.UpcastWriter(e.document),r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),i=[];for(const e of n)if("elementStart"===e.type&&r.match(e.item)){const t=u(e.item);i.push({element:e.item,id:t.id,order:t.order,indent:t.indent})}return i}(e,n);if(!r.length)return;let i=null,o=1;r.forEach(((e,c)=>{const u=function(e,t){if(!e)return!0;if(e.id!==t.id)return t.indent-e.indent!=1;const n=t.element.previousSibling;if(!n)return!0;return r=n,!(r.is("element","ol")||r.is("element","ul"));var r}(r[c-1],e),f=u?null:r[c-1],d=(p=e,(m=f)?p.indent-m.indent:p.indent-1);var m,p;if(u&&(i=null,o=1),!i||0!==d){const r=function(e,t){const n=new RegExp(`@list l${e.id}:level${e.indent}\\s*({[^}]*)`,"gi"),r=/mso-level-number-format:([^;]{0,100});/gi,s=/mso-level-start-at:\s{0,100}([0-9]{0,10})\s{0,100};/gi,i=n.exec(t);let o="decimal",c="ol",a=null;if(i&&i[1]){const t=r.exec(i[1]);if(t&&t[1]&&(o=t[1].trim(),c="bullet"!==o&&"image"!==o?"ol":"ul"),"bullet"===o){const t=function(e){const t=function(e){if(e.getChild(0).is("$text"))return null;for(const t of e.getChildren()){if(!t.is("element","span"))continue;const e=t.getChild(0);return e.is("$text")?e:e.getChild(0)}}(e);if(!t)return null;const n=t._data;if("o"===n)return"circle";if("·"===n)return"disc";if("§"===n)return"square";return null}(e.element);t&&(o=t)}else{const e=s.exec(i[1]);e&&e[1]&&(a=parseInt(e[1]))}}return{type:c,startIndex:a,style:l(o)}}(e,t);if(i){if(e.indent>o){const e=i.getChild(i.childCount-1),t=e.getChild(e.childCount-1);i=a(r,t,n),o+=1}else if(e.indent<o){const t=o-e.indent;i=function(e,t){const n=e.getAncestors({parentFirst:!0});let r=null,s=0;for(const e of n)if("ul"!==e.name&&"ol"!==e.name||s++,s===t){r=e;break}return r}(i,t),o=parseInt(e.indent)}}else i=a(r,e.element,n);e.indent<=o&&(i.is("element",r.type)||(i=n.rename(r.type,i)))}const g=function(e,t){return function(e,t){const n=new s.Matcher({name:"span",styles:{"mso-list":"Ignore"}}),r=t.createRangeIn(e);for(const e of r)"elementStart"===e.type&&n.match(e.item)&&t.remove(e.item)}(e,t),t.rename("li",e)}(e.element,n);n.appendChild(g,i)}))}function l(e){if(e.startsWith("arabic-leading-zero"))return"decimal-leading-zero";switch(e){case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return e;default:return null}}function a(e,t,n){const r=t.parent,s=n.createElement(e.type),i=r.getChildIndex(t)+1;return n.insertChild(i,s,r),e.style&&n.setStyle("list-style-type",e.style,s),e.startIndex&&e.startIndex>1&&n.setAttribute("start",e.startIndex,s),s}function u(e){const t={},n=e.getStyle("mso-list");if(n){const e=n.match(/(^|\s{1,100})l(\d+)/i),r=n.match(/\s{0,100}lfo(\d+)/i),s=n.match(/\s{0,100}level(\d+)/i);e&&r&&s&&(t.id=e[2],t.order=r[1],t.indent=s[1])}return t}const f=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class d{constructor(e){this.document=e}isActive(e){return f.test(e)}execute(e){const t=new s.UpcastWriter(this.document),{body:n}=e._parsedData;!function(e,t){for(const n of e.getChildren())if(n.is("element","b")&&"normal"===n.getStyle("font-weight")){const r=e.getChildIndex(n);t.remove(n),t.insertChild(r,n.getChildren(),e)}}(n,t),function(e,t){for(const n of t.createRangeIn(e)){const e=n.item;if(e.is("element","li")){const n=e.getChild(0);n&&n.is("element","p")&&t.unwrapElement(n)}}}(n,t),function(e,t){const n=new s.ViewDocument(t.document.stylesProcessor),r=new s.DomConverter(n,{renderingMode:"data"}),c=r.blockElements,l=r.inlineObjectElements,a=[];for(const n of t.createRangeIn(e)){const e=n.item;if(e.is("element","br")){const n=i(e,"forward",t,{blockElements:c,inlineObjectElements:l}),r=i(e,"backward",t,{blockElements:c,inlineObjectElements:l}),s=o(n,c);(o(r,c)||s)&&a.push(e)}}for(const e of a)e.hasClass("Apple-interchange-newline")?t.remove(e):t.replace(e,t.createElement("p"))}(n,t),e.content=n}}function m(e,t){if(!e.childCount)return;const n=new s.UpcastWriter,r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n){if("elementStart"!=e.type)continue;const t=e.item,n=t.previousSibling&&t.previousSibling.name||null;r.match(t)&&t.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&i.push(e.item.getAttribute("id"))}return i}(e,n);!function(e,t,n){const r=n.createRangeIn(t),i=new s.Matcher({name:"img"}),o=[];for(const t of r)if(i.match(t.item)){const n=t.item,r=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];r.length&&r.every((t=>e.indexOf(t)>-1))?o.push(n):n.getAttribute("src")||o.push(n)}for(const e of o)n.remove(e)}(r,e,n),function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n)"elementStart"==e.type&&r.match(e.item)&&i.push(e.item);for(const e of i)t.remove(e)}(e,n);const i=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:"img"}),i=[];for(const e of n)r.match(e.item)&&e.item.getAttribute("src").startsWith("file://")&&i.push(e.item);return i}(e,n);i.length&&function(e,t,n){if(e.length===t.length)for(let r=0;r<e.length;r++){const s=`data:${t[r].type};base64,${p(t[r].hex)}`;n.setAttribute("src",s,e[r])}}(i,function(e){if(!e)return[];const t=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+t.source+"))([\\da-fA-F\\s]+)\\}","g"),r=e.match(n),s=[];if(r)for(const e of r){let n=!1;e.includes("\\pngblip")?n="image/png":e.includes("\\jpegblip")&&(n="image/jpeg"),n&&s.push({hex:e.replace(t,"").replace(/[^\da-fA-F]/g,""),type:n})}return s}(t),n)}function p(e){return btoa(e.match(/\w{2}/g).map((e=>String.fromCharCode(parseInt(e,16)))).join(""))}const g=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,h=/xmlns:o="urn:schemas-microsoft-com/i;class y{constructor(e){this.document=e}isActive(e){return g.test(e)||h.test(e)}execute(e){const{body:t,stylesString:n}=e._parsedData;c(t,n),m(t,e.dataTransfer.getData("text/rtf")),e.content=t}}function b(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,((e,t)=>1===t.length?" ":Array(t.length+1).join("  ").substr(0,t.length)))}function w(e,t){const n=new DOMParser,r=function(e){return b(b(e)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(e){const t="</body>",n="</html>",r=e.indexOf(t);if(r<0)return e;const s=e.indexOf(n,r+t.length);return e.substring(0,r+t.length)+(s>=0?e.substring(s):"")}(e=e.replace(/<!--\[if gte vml 1]>/g,""))),i=n.parseFromString(r,"text/html");!function(e){e.querySelectorAll("span[style*=spacerun]").forEach((e=>{const t=e.innerText.length||0;e.innerText=Array(t+1).join("  ").substr(0,t)}))}(i);const o=i.body.innerHTML,c=function(e,t){const n=new s.ViewDocument(t),r=new s.DomConverter(n,{renderingMode:"data"}),i=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)i.appendChild(o[0]);return r.domToView(i,{skipComments:!0})}(i,t),l=function(e){const t=[],n=[],r=Array.from(e.getElementsByTagName("style"));for(const e of r)e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length&&(t.push(e.sheet),n.push(e.innerHTML));return{styles:t,stylesString:n.join(" ")}}(i);return{body:c,bodyString:o,styles:l.styles,stylesString:l.stylesString}}class v extends e.Plugin{static get pluginName(){return"PasteFromOffice"}static get requires(){return[t.ClipboardPipeline]}init(){const e=this.editor,t=e.editing.view.document,n=[];n.push(new y(t)),n.push(new d(t)),e.plugins.get("ClipboardPipeline").on("inputTransformation",((r,s)=>{if(s._isTransformedWithPasteFromOffice)return;if(e.model.document.selection.getFirstPosition().parent.is("element","codeBlock"))return;const i=s.dataTransfer.getData("text/html"),o=n.find((e=>e.isActive(i)));o&&(s._parsedData=w(i,t.stylesProcessor),o.execute(s),s._isTransformedWithPasteFromOffice=!0)}),{priority:"high"})}}})(),(window.CKEditor5=window.CKEditor5||{}).pasteFromOffice=r})();;
/**
 * @file
 * Text behaviors.
 */

(function ($, Drupal) {
  /**
   * Auto-hide summary textarea if empty and show hide and unhide links.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches auto-hide behavior on `text-summary` events.
   */
  Drupal.behaviors.textSummary = {
    attach(context, settings) {
      once('text-summary', '.js-text-summary', context).forEach((summary) => {
        const $widget = $(summary).closest('.js-text-format-wrapper');

        const $summary = $widget.find('.js-text-summary-wrapper');
        const $summaryLabel = $summary.find('label').eq(0);
        const $full = $widget.children('.js-form-type-textarea');
        let $fullLabel = $full.find('label').eq(0);

        // Create a placeholder label when the field cardinality is greater
        // than 1.
        if ($fullLabel.length === 0) {
          $fullLabel = $('<label></label>').prependTo($full);
        }

        // To ensure the summary toggle is shown in case the label is hidden
        // (in multivalue fields in particular), show the label but hide
        // the original text of the label.
        if ($fullLabel.hasClass('visually-hidden')) {
          $fullLabel.html(
            (index, oldHtml) =>
              `<span class="visually-hidden">${oldHtml}</span>`,
          );
          $fullLabel.removeClass('visually-hidden');
        }

        // Set up the edit/hide summary link.
        const $link = $(
          `<span class="field-edit-link"> (<button type="button" class="link link-edit-summary">${Drupal.t(
            'Hide summary',
          )}</button>)</span>`,
        );
        const $button = $link.find('button');
        let toggleClick = true;
        $link
          .on('click', (e) => {
            if (toggleClick) {
              $summary.hide();
              $button.html(Drupal.t('Edit summary'));
              $link.appendTo($fullLabel);
            } else {
              $summary.show();
              $button.html(Drupal.t('Hide summary'));
              $link.appendTo($summaryLabel);
            }
            e.preventDefault();
            toggleClick = !toggleClick;
          })
          .appendTo($summaryLabel);

        // If no summary is set, hide the summary field.
        if (summary.value === '') {
          $link.trigger('click');
        }
      });
    },
  };
})(jQuery, Drupal);
;
/**
 * @file
 * Builds a nested accordion widget.
 *
 * Invoke on an HTML list element with the jQuery plugin pattern.
 *
 * @example
 * $('.toolbar-menu').drupalToolbarMenu();
 */

(function ($, Drupal, drupalSettings) {
  /**
   * Store the open menu tray.
   */
  let activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    const ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse'),
    };

    /**
     * Toggle the open/close state of a list is a menu.
     *
     * @param {jQuery} $item
     *   The li item to be toggled.
     *
     * @param {Boolean} switcher
     *   A flag that forces toggleClass to add or a remove a class, rather than
     *   simply toggling its presence.
     */
    function toggleList($item, switcher) {
      const $toggle = $item
        .children('.toolbar-box')
        .children('.toolbar-handle');
      switcher =
        typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      // Toggle the item open state.
      $item.toggleClass('open', switcher);
      // Twist the toggle.
      $toggle.toggleClass('open', switcher);
      // Adjust the toggle text.
      $toggle.find('.action').each((index, element) => {
        // Expand Structure, Collapse Structure.
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }

    /**
     * Handle clicks from the disclosure button on an item with sub-items.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function toggleClickHandler(event) {
      const $toggle = $(event.target);
      const $item = $toggle.closest('li');
      // Toggle the list item.
      toggleList($item);
      // Close open sibling menus.
      const $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    /**
     * Handle clicks from a menu item link.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function linkClickHandler(event) {
      // If the toolbar is positioned fixed (and therefore hiding content
      // underneath), then users expect clicks in the administration menu tray
      // to take them to that destination but for the menu tray to be closed
      // after clicking: otherwise the toolbar itself is obstructing the view
      // of the destination they chose.
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      // Stopping propagation to make sure that once a toolbar-box is clicked
      // (the whitespace part), the page is not redirected anymore.
      event.stopPropagation();
    }

    /**
     * Add markup to the menu elements.
     *
     * Items with sub-elements have a list toggle attached to them. Menu item
     * links and the corresponding list toggle are wrapped with in a div
     * classed with .toolbar-box. The .toolbar-box div provides a positioning
     * context for the item list toggle.
     *
     * @param {jQuery} $menu
     *   The root of the menu to be initialized.
     */
    function initItems($menu) {
      const options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: '',
      };
      // Initialize items and their links.
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      // Add a handle to each list item if it has a menu.
      $menu.find('li').each((index, element) => {
        const $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          const $box = $item.children('.toolbar-box');
          const $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : '',
          });
          $item
            .children('.toolbar-box')
            .append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    /**
     * Adds a level class to each list based on its depth in the menu.
     *
     * This function is called recursively on each sub level of lists elements
     * until the depth of the menu is exhausted.
     *
     * @param {jQuery} $lists
     *   A jQuery object of ul elements.
     *
     * @param {number} level
     *   The current level number to be assigned to the list elements.
     */
    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      const $lis = $lists.children('li').addClass(`level-${level}`);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    /**
     * On page load, open the active menu item.
     *
     * Marks the trail of the active link in the menu back to the root of the
     * menu with .menu-item--active-trail.
     *
     * @param {jQuery} $menu
     *   The root of the menu.
     */
    function openActiveItem($menu) {
      const pathItem = $menu.find(`a[href="${window.location.pathname}"]`);
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        const $activeItem = $menu
          .find(`a[href="${activeItem}"]`)
          .addClass('menu-item--active');
        const $activeTrail = $activeItem
          .parentsUntil('.root', 'li')
          .addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    // Return the jQuery object.
    return this.each(function (selector) {
      const menu = once('toolbar-menu', this);
      if (menu.length) {
        const $menu = $(menu);
        // Bind event handlers.
        $menu
          .on('click.toolbar', '.toolbar-box', toggleClickHandler)
          .on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        // Restore previous and active states.
        openActiveItem($menu);
      }
    });
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @param {object} options
   *   Options for the button.
   * @param {string} options.class
   *   Class to set on the button.
   * @param {string} options.action
   *   Action for the button.
   * @param {string} options.text
   *   Used as label for the button.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return `<button class="${options.class}"><span class="action">${options.action}</span> <span class="label">${options.text}</span></button>`;
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Defines the behavior of the Drupal administration toolbar.
 */

(function ($, Drupal, drupalSettings) {
  // Merge run-time settings with the defaults.
  const options = $.extend(
    {
      breakpoints: {
        'toolbar.narrow': '',
        'toolbar.standard': '',
        'toolbar.wide': '',
      },
    },
    drupalSettings.toolbar,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        horizontal: Drupal.t('Horizontal orientation'),
        vertical: Drupal.t('Vertical orientation'),
      },
    },
  );

  /**
   * Registers tabs with the toolbar.
   *
   * The Drupal toolbar allows modules to register top-level tabs. These may
   * point directly to a resource or toggle the visibility of a tray.
   *
   * Modules register tabs with hook_toolbar().
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the toolbar rendering functionality to the toolbar element.
   */
  Drupal.behaviors.toolbar = {
    attach(context) {
      // Verify that the user agent understands media queries. Complex admin
      // toolbar layouts require media query support.
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      // Process the administrative toolbar.
      once('toolbar', '#toolbar-administration', context).forEach((toolbar) => {
        // Establish the toolbar models and views.
        const model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(
            localStorage.getItem('Drupal.toolbar.trayVerticalLocked'),
          ),
          activeTab: document.getElementById(
            JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID')),
          ),
          height: $('#toolbar-administration').outerHeight(),
        });

        Drupal.toolbar.models.toolbarModel = model;

        // Attach a listener to the configured media query breakpoints.
        // Executes it before Drupal.toolbar.views to avoid extra rendering.
        Object.keys(options.breakpoints).forEach((label) => {
          const mq = options.breakpoints[label];
          const mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          // Curry the model and the label of the media query breakpoint to
          // the mediaQueryChangeHandler function.
          mql.addListener(
            Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label),
          );
          // Fire the mediaQueryChangeHandler for each configured breakpoint
          // so that they process once.
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView =
          new Drupal.toolbar.ToolbarVisualView({
            el: toolbar,
            model,
            strings: options.strings,
          });
        Drupal.toolbar.views.toolbarAuralView =
          new Drupal.toolbar.ToolbarAuralView({
            el: toolbar,
            model,
            strings: options.strings,
          });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView(
          {
            el: toolbar,
            model,
          },
        );

        // Force layout render to fix mobile view. Only needed on load, not
        // for every media query match.
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        // Render collapsible menus.
        const menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView(
          {
            el: $(toolbar).find('.toolbar-menu-administration').get(0),
            model: menuModel,
            strings: options.strings,
          },
        );

        // Handle the resolution of Drupal.toolbar.setSubtrees.
        // This is handled with a deferred so that the function may be invoked
        // asynchronously.
        Drupal.toolbar.setSubtrees.done((subtrees) => {
          menuModel.set('subtrees', subtrees);
          const theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem(
            `Drupal.toolbar.subtrees.${theme}`,
            JSON.stringify(subtrees),
          );
          // Indicate on the toolbarModel that subtrees are now loaded.
          model.set('areSubtreesLoaded', true);
        });

        // Trigger an initial attempt to load menu subitems. This first attempt
        // is made after the media query handlers have had an opportunity to
        // process. The toolbar starts in the vertical orientation by default,
        // unless the viewport is wide enough to accommodate a horizontal
        // orientation. Thus we give the Toolbar a chance to determine if it
        // should be set to horizontal orientation before attempting to load
        // menu subtrees.
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document)
          // Update the model when the viewport offset changes.
          .on('drupalViewportOffsetChange.toolbar', (event, offsets) => {
            model.set('offsets', offsets);
          });

        // Broadcast model changes to other modules.
        model
          .on('change:orientation', (model, orientation) => {
            $(document).trigger('drupalToolbarOrientationChange', orientation);
          })
          .on('change:activeTab', (model, tab) => {
            $(document).trigger('drupalToolbarTabChange', tab);
          })
          .on('change:activeTray', (model, tray) => {
            $(document).trigger('drupalToolbarTrayChange', tray);
          });

        // If the toolbar's orientation is horizontal and no active tab is
        // defined then show the tray of the first toolbar tab by default (but
        // not the first 'Home' toolbar tab).
        if (
          Drupal.toolbar.models.toolbarModel.get('orientation') ===
            'horizontal' &&
          Drupal.toolbar.models.toolbarModel.get('activeTab') === null
        ) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $(
              '.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a',
            ).get(0),
          });
        }

        $(window).on({
          'dialog:aftercreate': (event, dialog, $element, settings) => {
            const $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            // When off-canvas is positioned in top, toolbar has to be moved down.
            if (settings.drupalOffCanvasPosition === 'top') {
              const height = Drupal.offCanvas
                .getContainer($element)
                .outerHeight();
              $toolbar.css('margin-top', `${height}px`);

              $element.on('dialogContentResize.off-canvas', () => {
                const newHeight = Drupal.offCanvas
                  .getContainer($element)
                  .outerHeight();
                $toolbar.css('margin-top', `${newHeight}px`);
              });
            }
          },
          'dialog:beforeclose': () => {
            $('#toolbar-bar').css('margin-top', '0');
          },
        });
      });
    },
  };

  /**
   * Toolbar methods of Backbone objects.
   *
   * @namespace
   */
  Drupal.toolbar = {
    /**
     * A hash of View instances.
     *
     * @type {object.<string, Backbone.View>}
     */
    views: {},

    /**
     * A hash of Model instances.
     *
     * @type {object.<string, Backbone.Model>}
     */
    models: {},

    /**
     * A hash of MediaQueryList objects tracked by the toolbar.
     *
     * @type {object.<string, object>}
     */
    mql: {},

    /**
     * Accepts a list of subtree menu elements.
     *
     * A deferred object that is resolved by an inlined JavaScript callback.
     *
     * @type {jQuery.Deferred}
     *
     * @see toolbar_subtrees_jsonp().
     */
    setSubtrees: new $.Deferred(),

    /**
     * Respond to configured narrow media query changes.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   A toolbar model
     * @param {string} label
     *   Media query label.
     * @param {object} mql
     *   A MediaQueryList object.
     */
    mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false,
          });
          // If the toolbar doesn't have an explicit orientation yet, or if the
          // narrow media query doesn't match then set the orientation to
          // vertical.
          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches,
          });
          break;

        case 'toolbar.wide':
          model.set(
            {
              orientation:
                mql.matches && !model.get('locked') ? 'horizontal' : 'vertical',
            },
            { validate: true },
          );
          // The tray orientation toggle visibility does not need to be
          // validated.
          model.set({
            isTrayToggleVisible: mql.matches,
          });
          break;

        default:
          break;
      }
    },
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarOrientationToggle = function () {
    return (
      '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' +
      '<button class="toolbar-icon" type="button"></button>' +
      '</div></div>'
    );
  };

  /**
   * Ajax command to set the toolbar subtrees.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   JSON response from the Ajax request.
   * @param {number} [status]
   *   XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (
    ajax,
    response,
    status,
  ) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * A Backbone Model for collapsible menus.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone Model for collapsible menus.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.MenuModel = Backbone.Model.extend(
    /** @lends Drupal.toolbar.MenuModel# */ {
      /**
       * @type {object}
       *
       * @prop {object} subtrees
       */
      defaults: /** @lends Drupal.toolbar.MenuModel# */ {
        /**
         * @type {object}
         */
        subtrees: {},
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone Model for the toolbar.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone model for the toolbar.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend(
    /** @lends Drupal.toolbar.ToolbarModel# */ {
      /**
       * @type {object}
       *
       * @prop activeTab
       * @prop activeTray
       * @prop isOriented
       * @prop isFixed
       * @prop areSubtreesLoaded
       * @prop isViewportOverflowConstrained
       * @prop orientation
       * @prop locked
       * @prop isTrayToggleVisible
       * @prop height
       * @prop offsets
       */
      defaults: /** @lends Drupal.toolbar.ToolbarModel# */ {
        /**
         * The active toolbar tab. All other tabs should be inactive under
         * normal circumstances. It will remain active across page loads. The
         * active item is stored as an ID selector e.g. '#toolbar-item--1'.
         *
         * @type {string}
         */
        activeTab: null,

        /**
         * Represents whether a tray is open or not. Stored as an ID selector e.g.
         * '#toolbar-item--1-tray'.
         *
         * @type {string}
         */
        activeTray: null,

        /**
         * Indicates whether the toolbar is displayed in an oriented fashion,
         * either horizontal or vertical.
         *
         * @type {boolean}
         */
        isOriented: false,

        /**
         * Indicates whether the toolbar is positioned absolute (false) or fixed
         * (true).
         *
         * @type {boolean}
         */
        isFixed: false,

        /**
         * Menu subtrees are loaded through an AJAX request only when the Toolbar
         * is set to a vertical orientation.
         *
         * @type {boolean}
         */
        areSubtreesLoaded: false,

        /**
         * If the viewport overflow becomes constrained, isFixed must be true so
         * that elements in the trays aren't lost off-screen and impossible to
         * get to.
         *
         * @type {boolean}
         */
        isViewportOverflowConstrained: false,

        /**
         * The orientation of the active tray.
         *
         * @type {string}
         */
        orientation: 'horizontal',

        /**
         * A tray is locked if a user toggled it to vertical. Otherwise a tray
         * will switch between vertical and horizontal orientation based on the
         * configured breakpoints. The locked state will be maintained across page
         * loads.
         *
         * @type {boolean}
         */
        locked: false,

        /**
         * Indicates whether the tray orientation toggle is visible.
         *
         * @type {boolean}
         */
        isTrayToggleVisible: true,

        /**
         * The height of the toolbar.
         *
         * @type {number}
         */
        height: null,

        /**
         * The current viewport offsets determined by {@link Drupal.displace}. The
         * offsets suggest how a module might position is components relative to
         * the viewport.
         *
         * @type {object}
         *
         * @prop {number} top
         * @prop {number} right
         * @prop {number} bottom
         * @prop {number} left
         */
        offsets: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },

      /**
       * {@inheritdoc}
       *
       * @param {object} attributes
       *   Attributes for the toolbar.
       * @param {object} options
       *   Options for the toolbar.
       *
       * @return {string|undefined}
       *   Returns an error message if validation failed.
       */
      validate(attributes, options) {
        // Prevent the orientation being set to horizontal if it is locked, unless
        // override has not been passed as an option.
        if (
          attributes.orientation === 'horizontal' &&
          this.get('locked') &&
          !options.override
        ) {
          return Drupal.t(
            'The toolbar cannot be set to a horizontal orientation when it is locked.',
          );
        }
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the body element.
 */

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.BodyVisualView# */ {
      /**
       * Adjusts the body element with the toolbar position and dimension changes.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:activeTray ', this.render);
        this.listenTo(
          this.model,
          'change:isFixed change:isViewportOverflowConstrained',
          this.isToolbarFixed,
        );
      },

      isToolbarFixed() {
        // When the toolbar is fixed, it will not scroll with page scrolling.
        const isViewportOverflowConstrained = this.model.get(
          'isViewportOverflowConstrained',
        );
        $('body').toggleClass(
          'toolbar-fixed',
          isViewportOverflowConstrained || this.model.get('isFixed'),
        );
      },

      /**
       * {@inheritdoc}
       */
      render() {
        $('body')
          // Toggle the toolbar-tray-open class on the body element. The class is
          // applied when a toolbar tray is active. Padding might be applied to
          // the body element to prevent the tray from overlapping content.
          .toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
      },
    },
  );
})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone view for the collapsible menus.
 */

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.MenuVisualView# */ {
      /**
       * Backbone View for collapsible menus.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:subtrees', this.render);
      },

      /**
       * {@inheritdoc}
       */
      render() {
        const subtrees = this.model.get('subtrees');
        // Add subtrees.
        Object.keys(subtrees || {}).forEach((id) => {
          $(
            once('toolbar-subtrees', this.$el.find(`#toolbar-link-${id}`)),
          ).after(subtrees[id]);
        });
        // Render the main menu as a nested, collapsible accordion.
        if ('drupalToolbarMenu' in $.fn) {
          this.$el.children('.toolbar-menu').drupalToolbarMenu();
        }
      },
    },
  );
})(jQuery, Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the aural feedback of the toolbar.
 */

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend(
    /** @lends Drupal.toolbar.ToolbarAuralView# */ {
      /**
       * Backbone view for the aural feedback of the toolbar.
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view.
       * @param {object} options.strings
       *   Various strings to use in the view.
       */
      initialize(options) {
        this.strings = options.strings;

        this.listenTo(
          this.model,
          'change:orientation',
          this.onOrientationChange,
        );
        this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
      },

      /**
       * Announces an orientation change.
       *
       * @param {Drupal.toolbar.ToolbarModel} model
       *   The toolbar model in question.
       * @param {string} orientation
       *   The new value of the orientation attribute in the model.
       */
      onOrientationChange(model, orientation) {
        Drupal.announce(
          Drupal.t('Tray orientation changed to @orientation.', {
            '@orientation': orientation,
          }),
        );
      },

      /**
       * Announces a changed active tray.
       *
       * @param {Drupal.toolbar.ToolbarModel} model
       *   The toolbar model in question.
       * @param {HTMLElement} tray
       *   The new value of the tray attribute in the model.
       */
      onActiveTrayChange(model, tray) {
        const relevantTray =
          tray === null ? model.previous('activeTray') : tray;
        // Current activeTray and previous activeTray are empty, no state change
        // to announce.
        if (!relevantTray) {
          return;
        }
        const action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
        const trayNameElement =
          relevantTray.querySelector('.toolbar-tray-name');
        let text;
        if (trayNameElement !== null) {
          text = Drupal.t('Tray "@tray" @action.', {
            '@tray': trayNameElement.textContent,
            '@action': action,
          });
        } else {
          text = Drupal.t('Tray @action.', { '@action': action });
        }
        Drupal.announce(text);
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the toolbar element. Listens to mouse & touch.
 */

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.ToolbarVisualView# */ {
      /**
       * Event map for the `ToolbarVisualView`.
       *
       * @return {object}
       *   A map of events.
       */
      events() {
        // Prevents delay and simulated mouse events.
        const touchEndToClick = function (event) {
          event.preventDefault();
          event.target.click();
        };

        return {
          'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
          'click .toolbar-toggle-orientation button':
            'onOrientationToggleClick',
          'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
          'touchend .toolbar-toggle-orientation button': touchEndToClick,
        };
      },

      /**
       * Backbone view for the toolbar element. Listens to mouse & touch.
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view object.
       * @param {object} options.strings
       *   Various strings to use in the view.
       */
      initialize(options) {
        this.strings = options.strings;

        this.listenTo(
          this.model,
          'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible',
          this.render,
        );
        this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
        this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
        this.listenTo(
          this.model,
          'change:activeTab change:orientation change:isOriented',
          this.updateToolbarHeight,
        );

        // Add the tray orientation toggles, but only if there is a menu.
        this.$el
          .find('.toolbar-tray .toolbar-lining')
          .has('.toolbar-menu')
          .append(Drupal.theme('toolbarOrientationToggle'));

        // Trigger an activeTab change so that listening scripts can respond on
        // page load. This will call render.
        this.model.trigger('change:activeTab');
      },

      /**
       * Update the toolbar element height.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      updateToolbarHeight() {
        const toolbarTabOuterHeight =
          $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
        const toolbarTrayHorizontalOuterHeight =
          $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
        this.model.set(
          'height',
          toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight,
        );

        $('body').css({
          'padding-top': this.model.get('height'),
        });
        $('html').css({
          'scroll-padding-top': this.model.get('height'),
        });

        this.triggerDisplace();
      },

      // Trigger a recalculation of viewport displacing elements. Use setTimeout
      // to ensure this recalculation happens after changes to visual elements
      // have processed.
      triggerDisplace() {
        _.defer(() => {
          Drupal.displace(true);
        });
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.toolbar.ToolbarVisualView}
       *   The `ToolbarVisualView` instance.
       */
      render() {
        this.updateTabs();
        this.updateTrayOrientation();
        this.updateBarAttributes();

        $('body').removeClass('toolbar-loading');

        // Load the subtrees if the orientation of the toolbar is changed to
        // vertical. This condition responds to the case that the toolbar switches
        // from horizontal to vertical orientation. The toolbar starts in a
        // vertical orientation by default and then switches to horizontal during
        // initialization if the media query conditions are met. Simply checking
        // that the orientation is vertical here would result in the subtrees
        // always being loaded, even when the toolbar initialization ultimately
        // results in a horizontal orientation.
        //
        // @see Drupal.behaviors.toolbar.attach() where admin menu subtrees
        // loading is invoked during initialization after media query conditions
        // have been processed.
        if (
          this.model.changed.orientation === 'vertical' ||
          this.model.changed.activeTab
        ) {
          this.loadSubtrees();
        }

        return this;
      },

      /**
       * Responds to a toolbar tab click.
       *
       * @param {jQuery.Event} event
       *   The event triggered.
       */
      onTabClick(event) {
        // If this tab has a tray associated with it, it is considered an
        // activatable tab.
        if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
          const activeTab = this.model.get('activeTab');
          const clickedTab = event.currentTarget;

          // Set the event target as the active item if it is not already.
          this.model.set(
            'activeTab',
            !activeTab || clickedTab !== activeTab ? clickedTab : null,
          );

          event.preventDefault();
          event.stopPropagation();
        }
      },

      /**
       * Toggles the orientation of a toolbar tray.
       *
       * @param {jQuery.Event} event
       *   The event triggered.
       */
      onOrientationToggleClick(event) {
        const orientation = this.model.get('orientation');
        // Determine the toggle-to orientation.
        const antiOrientation =
          orientation === 'vertical' ? 'horizontal' : 'vertical';
        const locked = antiOrientation === 'vertical';
        // Remember the locked state.
        if (locked) {
          localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
        } else {
          localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
        }
        // Update the model.
        this.model.set(
          {
            locked,
            orientation: antiOrientation,
          },
          {
            validate: true,
            override: true,
          },
        );

        event.preventDefault();
        event.stopPropagation();
      },

      /**
       * Updates the display of the tabs: toggles a tab and the associated tray.
       */
      updateTabs() {
        const $tab = $(this.model.get('activeTab'));
        // Deactivate the previous tab.
        $(this.model.previous('activeTab'))
          .removeClass('is-active')
          .prop('aria-pressed', false);
        // Deactivate the previous tray.
        $(this.model.previous('activeTray')).removeClass('is-active');

        // Activate the selected tab.
        if ($tab.length > 0) {
          $tab
            .addClass('is-active')
            // Mark the tab as pressed.
            .prop('aria-pressed', true);
          const name = $tab.attr('data-toolbar-tray');
          // Store the active tab name or remove the setting.
          const id = $tab.get(0).id;
          if (id) {
            localStorage.setItem(
              'Drupal.toolbar.activeTabID',
              JSON.stringify(id),
            );
          }
          // Activate the associated tray.
          const $tray = this.$el.find(
            `[data-toolbar-tray="${name}"].toolbar-tray`,
          );
          if ($tray.length) {
            $tray.addClass('is-active');
            this.model.set('activeTray', $tray.get(0));
          } else {
            // There is no active tray.
            this.model.set('activeTray', null);
          }
        } else {
          // There is no active tray.
          this.model.set('activeTray', null);
          localStorage.removeItem('Drupal.toolbar.activeTabID');
        }
      },

      /**
       * Update the attributes of the toolbar bar element.
       */
      updateBarAttributes() {
        const isOriented = this.model.get('isOriented');
        if (isOriented) {
          this.$el.find('.toolbar-bar').attr('data-offset-top', '');
        } else {
          this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
        }
        // Toggle between a basic vertical view and a more sophisticated
        // horizontal and vertical display of the toolbar bar and trays.
        this.$el.toggleClass('toolbar-oriented', isOriented);
      },

      /**
       * Updates the orientation of the active tray if necessary.
       */
      updateTrayOrientation() {
        const orientation = this.model.get('orientation');

        // The antiOrientation is used to render the view of action buttons like
        // the tray orientation toggle.
        const antiOrientation =
          orientation === 'vertical' ? 'horizontal' : 'vertical';

        // Toggle toolbar's parent classes before other toolbar classes to avoid
        // potential flicker and re-rendering.
        $('body')
          .toggleClass('toolbar-vertical', orientation === 'vertical')
          .toggleClass('toolbar-horizontal', orientation === 'horizontal');

        const removeClass =
          antiOrientation === 'horizontal'
            ? 'toolbar-tray-horizontal'
            : 'toolbar-tray-vertical';
        const $trays = this.$el
          .find('.toolbar-tray')
          .removeClass(removeClass)
          .addClass(`toolbar-tray-${orientation}`);

        // Update the tray orientation toggle button.
        const iconClass = `toolbar-icon-toggle-${orientation}`;
        const iconAntiClass = `toolbar-icon-toggle-${antiOrientation}`;
        const $orientationToggle = this.$el
          .find('.toolbar-toggle-orientation')
          .toggle(this.model.get('isTrayToggleVisible'));
        const $orientationToggleButton = $orientationToggle.find('button');
        $orientationToggleButton[0].value = antiOrientation;
        $orientationToggleButton
          .attr('title', this.strings[antiOrientation])
          .removeClass(iconClass)
          .addClass(iconAntiClass);
        $orientationToggleButton[0].textContent = this.strings[antiOrientation];

        // Update data offset attributes for the trays.
        const dir = document.documentElement.dir;
        const edge = dir === 'rtl' ? 'right' : 'left';
        // Remove data-offset attributes from the trays so they can be refreshed.
        $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
        // If an active vertical tray exists, mark it as an offset element.
        $trays
          .filter('.toolbar-tray-vertical.is-active')
          .attr(`data-offset-${edge}`, '');
        // If an active horizontal tray exists, mark it as an offset element.
        $trays
          .filter('.toolbar-tray-horizontal.is-active')
          .attr('data-offset-top', '');
      },

      /**
       * Sets the tops of the trays so that they align with the bottom of the bar.
       */
      adjustPlacement() {
        const $trays = this.$el.find('.toolbar-tray');
        if (!this.model.get('isOriented')) {
          $trays
            .removeClass('toolbar-tray-horizontal')
            .addClass('toolbar-tray-vertical');
        }
      },

      /**
       * Calls the endpoint URI that builds an AJAX command with the rendered
       * subtrees.
       *
       * The rendered admin menu subtrees HTML is cached on the client in
       * localStorage until the cache of the admin menu subtrees on the server-
       * side is invalidated. The subtreesHash is stored in localStorage as well
       * and compared to the subtreesHash in drupalSettings to determine when the
       * admin menu subtrees cache has been invalidated.
       */
      loadSubtrees() {
        const $activeTab = $(this.model.get('activeTab'));
        const orientation = this.model.get('orientation');
        // Only load and render the admin menu subtrees if:
        //   (1) They have not been loaded yet.
        //   (2) The active tab is the administration menu tab, indicated by the
        //       presence of the data-drupal-subtrees attribute.
        //   (3) The orientation of the tray is vertical.
        if (
          !this.model.get('areSubtreesLoaded') &&
          typeof $activeTab.data('drupal-subtrees') !== 'undefined' &&
          orientation === 'vertical'
        ) {
          const subtreesHash = drupalSettings.toolbar.subtreesHash;
          const theme = drupalSettings.ajaxPageState.theme;
          const endpoint = Drupal.url(`toolbar/subtrees/${subtreesHash}`);
          const cachedSubtreesHash = localStorage.getItem(
            `Drupal.toolbar.subtreesHash.${theme}`,
          );
          const cachedSubtrees = JSON.parse(
            localStorage.getItem(`Drupal.toolbar.subtrees.${theme}`),
          );
          const isVertical = this.model.get('orientation') === 'vertical';
          // If we have the subtrees in localStorage and the subtree hash has not
          // changed, then use the cached data.
          if (
            isVertical &&
            subtreesHash === cachedSubtreesHash &&
            cachedSubtrees
          ) {
            Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
          }
          // Only make the call to get the subtrees if the orientation of the
          // toolbar is vertical.
          else if (isVertical) {
            // Remove the cached menu information.
            localStorage.removeItem(`Drupal.toolbar.subtreesHash.${theme}`);
            localStorage.removeItem(`Drupal.toolbar.subtrees.${theme}`);
            // The AJAX response's command will trigger the resolve method of the
            // Drupal.toolbar.setSubtrees Promise.
            Drupal.ajax({ url: endpoint }).execute();
            // Cache the hash for the subtrees locally.
            localStorage.setItem(
              `Drupal.toolbar.subtreesHash.${theme}`,
              subtreesHash,
            );
          }
        }
      },
    },
  );
})(jQuery, Drupal, drupalSettings, Backbone);
;
/*! shepherd.js 10.0.1 */

'use strict';(function(O,pa){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pa():"function"===typeof define&&define.amd?define(pa):(O="undefined"!==typeof globalThis?globalThis:O||self,O.Shepherd=pa())})(this,function(){function O(a,b){return!1!==b.clone&&b.isMergeableObject(a)?ea(Array.isArray(a)?[]:{},a,b):a}function pa(a,b,c){return a.concat(b).map(function(d){return O(d,c)})}function Db(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Sa(a){return Object.keys(a).concat(Db(a))}function Ta(a,b){try{return b in a}catch(c){return!1}}function Eb(a,b,c){var d={};c.isMergeableObject(a)&&Sa(a).forEach(function(e){d[e]=O(a[e],c)});Sa(b).forEach(function(e){if(!Ta(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ta(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:ea}else f=ea;d[e]=f(a[e],b[e],c)}else d[e]=O(b[e],c)});return d}function ea(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||pa;c.isMergeableObject=c.isMergeableObject||Fb;c.cloneUnlessOtherwiseSpecified=O;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?O(b,c):d?c.arrayMerge(a,b,c):Eb(a,b,c)}function Z(a){return"function"===typeof a}function qa(a){return"string"===typeof a}function Ua(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function Gb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function Hb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=Gb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function M(a){return a?(a.nodeName||"").toLowerCase():null}function K(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function fa(a){var b=K(a).Element;return a instanceof b||a instanceof Element}function F(a){var b=K(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function Ea(a){if("undefined"===typeof ShadowRoot)return!1;var b=K(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function N(a){return a.split("-")[0]}
function ha(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;F(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=ia(c.width)/a||1),0<b&&(e=ia(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function Fa(a){var b=ha(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Va(a,b){var c=
b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&Ea(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function P(a){return K(a).getComputedStyle(a)}function U(a){return((fa(a)?a.ownerDocument:a.document)||window.document).documentElement}function wa(a){return"html"===M(a)?a:a.assignedSlot||a.parentNode||(Ea(a)?a.host:null)||U(a)}function Wa(a){return F(a)&&"fixed"!==P(a).position?a.offsetParent:null}function ra(a){for(var b=K(a),c=Wa(a);c&&0<=["table","td",
"th"].indexOf(M(c))&&"static"===P(c).position;)c=Wa(c);if(c&&("html"===M(c)||"body"===M(c)&&"static"===P(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!F(a)||"fixed"!==P(a).position)for(a=wa(a),Ea(a)&&(a=a.host);F(a)&&0>["html","body"].indexOf(M(a));){var d=P(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||
c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function Ga(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Xa(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Ya(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function ja(a){return a.split("-")[1]}function Za(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,l=a.position,m=a.gpuAcceleration,k=a.adaptive,p=a.roundOffsets,q=a.isFixed;a=g.x;a=void 0===
a?0:a;var n=g.y,r=void 0===n?0:n;n="function"===typeof p?p({x:a,y:r}):{x:a,y:r};a=n.x;r=n.y;n=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var x="left",h="top",t=window;if(k){var v=ra(c),A="clientHeight",u="clientWidth";v===K(c)&&(v=U(c),"static"!==P(v).position&&"absolute"===l&&(A="scrollHeight",u="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)h="bottom",r-=(q&&v===t&&t.visualViewport?t.visualViewport.height:v[A])-d.height,r*=m?1:-1;if("left"===e||("top"===e||"bottom"===e)&&
"end"===f)x="right",a-=(q&&v===t&&t.visualViewport?t.visualViewport.width:v[u])-d.width,a*=m?1:-1}c=Object.assign({position:l},k&&Ib);!0===p?(p=r,d=window.devicePixelRatio||1,a={x:ia(a*d)/d||0,y:ia(p*d)/d||0}):a={x:a,y:r};p=a;a=p.x;r=p.y;if(m){var w;return Object.assign({},c,(w={},w[h]=g?"0":"",w[x]=n?"0":"",w.transform=1>=(t.devicePixelRatio||1)?"translate("+a+"px, "+r+"px)":"translate3d("+a+"px, "+r+"px, 0)",w))}return Object.assign({},c,(b={},b[h]=g?r+"px":"",b[x]=n?a+"px":"",b.transform="",b))}
function xa(a){return a.replace(/left|right|bottom|top/g,function(b){return Jb[b]})}function $a(a){return a.replace(/start|end/g,function(b){return Kb[b]})}function Ha(a){a=K(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Ia(a){return ha(U(a)).left+Ha(a).scrollLeft}function Ja(a){a=P(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function ab(a){return 0<=["html","body","#document"].indexOf(M(a))?a.ownerDocument.body:F(a)&&Ja(a)?a:ab(wa(a))}function sa(a,
b){var c;void 0===b&&(b=[]);var d=ab(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=K(d);d=a?[c].concat(c.visualViewport||[],Ja(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(sa(wa(d)))}function Ka(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function bb(a,b){if("viewport"===b){b=K(a);var c=U(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,
f=b.offsetTop));a={width:d,height:c,x:e+Ia(a),y:f};a=Ka(a)}else fa(b)?(a=ha(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=U(a),a=U(f),d=Ha(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=L(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=L(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+Ia(f),d=-d.scrollTop,"rtl"===P(b||
a).direction&&(f+=L(a.clientWidth,b?b.clientWidth:0)-c),a=Ka({width:c,height:e,x:f,y:d}));return a}function Lb(a){var b=sa(wa(a)),c=0<=["absolute","fixed"].indexOf(P(a).position)&&F(a)?ra(a):a;return fa(c)?b.filter(function(d){return fa(d)&&Va(d,c)&&"body"!==M(d)}):[]}function Mb(a,b,c){b="clippingParents"===b?Lb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=bb(a,e);d.top=L(e.top,d.top);d.right=V(e.right,d.right);d.bottom=V(e.bottom,d.bottom);d.left=L(e.left,d.left);return d},bb(a,
c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function cb(a){var b=a.reference,c=a.element,d=(a=a.placement)?N(a):null;a=a?ja(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?Ga(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ta(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,l=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=Xa("number"!==typeof c?c:Ya(c,ua));g=a.rects.popper;l=a.elements[l?"popper"===d?"reference":"popper":d];e=Mb(fa(l)?l:l.contextElement||U(a.elements.popper),
e,f);f=ha(a.elements.reference);l=cb({reference:f,element:g,strategy:"absolute",placement:b});g=Ka(Object.assign({},g,l));f="popper"===d?g:f;var m={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var k=a[b];Object.keys(m).forEach(function(p){var q=0<=["right","bottom"].indexOf(p)?1:-1,n=0<=["top","bottom"].indexOf(p)?"y":"x";m[p]+=k[n]*q})}return m}function Nb(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,l=void 0===g?db:g,m=ja(b.placement);b=m?f?eb:eb.filter(function(p){return ja(p)===m}):ua;f=b.filter(function(p){return 0<=l.indexOf(p)});0===f.length&&(f=b);var k=f.reduce(function(p,q){p[q]=ta(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[N(q)];return p},{});return Object.keys(k).sort(function(p,q){return k[p]-k[q]})}function Ob(a){if("auto"===N(a))return[];var b=xa(a);return[$a(a),b,$a(b)]}function fb(a,
b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function gb(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Pb(a,b,c){void 0===c&&(c=!1);var d=F(b),e;if(e=F(b)){var f=b.getBoundingClientRect();e=ia(f.width)/b.offsetWidth||1;f=ia(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=U(b);a=ha(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==M(b)||Ja(e))f=
b!==K(b)&&F(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:Ha(b);F(b)?(g=ha(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=Ia(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Qb(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Rb(a){var b=
Qb(a);return Sb.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function Tb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ub(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function hb(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function La(){La=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return La.apply(this,arguments)}function Vb(){return[{name:"applyStyles",fn(a){let {state:b}=a;Object.keys(b.elements).forEach(c=>{if("popper"===c){var d=b.attributes[c]||
{},e=b.elements[c];Object.assign(e.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});Object.keys(d).forEach(f=>{let g=d[f];!1===g?e.removeAttribute(f):e.setAttribute(f,!0===g?"":g)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function ib(a){return{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus({preventScroll:!0})},300)}}}function jb(a){return qa(a)&&""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Ma(){let a=
Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function kb(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(e=>e.name);b=b.modifiers.filter(e=>!d.includes(e.name));c.modifiers=Array.from(new Set([...b,...a.popperOptions.modifiers]))}return c}return b}function G(){}
function Wb(a,b){for(let c in b)a[c]=b[c];return a}function ka(a){return a()}function lb(a){return"function"===typeof a}function Q(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function H(a){a.parentNode.removeChild(a)}function mb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ya(a,b,c,d){a.addEventListener(b,c,d);return()=>a.removeEventListener(b,c,d)}function B(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}
function nb(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:B(a,d,b[d])}function la(a,b,c){a.classList[c?"add":"remove"](b)}function za(){if(!R)throw Error("Function called outside component initialization");return R}function Na(a){Aa.push(a)}function ob(){let a=R;do{for(;Ba<va.length;){var b=va[Ba];Ba++;R=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(ka);
var c=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,c);b.after_update.forEach(Na)}}R=null;for(Ba=va.length=0;ma.length;)ma.pop()();for(b=0;b<Aa.length;b+=1)c=Aa[b],Oa.has(c)||(Oa.add(c),c());Aa.length=0}while(va.length);for(;pb.length;)pb.pop()();Pa=!1;Oa.clear();R=a}function aa(){ba={r:0,c:[],p:ba}}function ca(){ba.r||ba.c.forEach(ka);ba=ba.p}function z(a,b){a&&a.i&&(Ca.delete(a),a.i(b))}function C(a,b,c,d){a&&a.o?Ca.has(a)||(Ca.add(a),ba.c.push(()=>{Ca.delete(a);d&&(c&&a.d(1),d())}),a.o(b)):
d&&d()}function da(a){a&&a.c()}function W(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:g,after_update:l}=a.$$;e&&e.m(b,c);d||Na(()=>{let m=f.map(ka).filter(lb);g?g.push(...m):m.forEach(ka);a.$$.on_mount=[]});l.forEach(Na)}function X(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(ka),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function S(a,b,c,d,e,f,g,l){void 0===l&&(l=[-1]);let m=R;R=a;let k=a.$$={fragment:null,ctx:null,props:f,update:G,not_equal:e,bound:Object.create(null),
on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b.context||(m?m.$$.context:[])),callbacks:Object.create(null),dirty:l,skip_bound:!1,root:b.target||m.$$.root};g&&g(k.root);let p=!1;k.ctx=c?c(a,b.props||{},function(q,n){let r=(2>=arguments.length?0:arguments.length-2)?2>=arguments.length?void 0:arguments[2]:n;if(k.ctx&&e(k.ctx[q],k.ctx[q]=r)){if(!k.skip_bound&&k.bound[q])k.bound[q](r);p&&(-1===a.$$.dirty[0]&&(va.push(a),Pa||(Pa=!0,Xb.then(ob)),a.$$.dirty.fill(0)),
a.$$.dirty[q/31|0]|=1<<q%31)}return n}):[];k.update();p=!0;k.before_update.forEach(ka);k.fragment=d?d(k.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),k.fragment&&k.fragment.l(c),c.forEach(H)):k.fragment&&k.fragment.c(),b.intro&&z(a.$$.fragment),W(a,b.target,b.anchor,b.customElement),ob());R=m}function Yb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");B(b,"aria-label",c=a[3]?a[3]:null);B(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);
b.disabled=a[2];B(b,"tabindex","0")},m(g,l){g.insertBefore(b,l||null);b.innerHTML=a[5];e||(f=ya(b,"click",function(){lb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(g,l){[l]=l;a=g;l&32&&(b.innerHTML=a[5]);l&8&&c!==(c=a[3]?a[3]:null)&&B(b,"aria-label",c);l&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&B(b,"class",d);l&4&&(b.disabled=a[2])},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function Zb(a,b,c){function d(n){return Z(n)?n.call(f):n}let {config:e,step:f}=b,g,l,m,k,p,q;
a.$$set=n=>{"config"in n&&c(6,e=n.config);"step"in n&&c(7,f=n.step)};a.$$.update=()=>{a.$$.dirty&192&&(c(0,g=e.action?e.action.bind(f.tour):null),c(1,l=e.classes),c(2,m=e.disabled?d(e.disabled):!1),c(3,k=e.label?d(e.label):null),c(4,p=e.secondary),c(5,q=e.text?d(e.text):null))};return[g,l,m,k,p,q,e,f]}function qb(a,b,c){a=a.slice();a[2]=b[c];return a}function rb(a){let b,c,d=a[1],e=[];for(let g=0;g<d.length;g+=1)e[g]=sb(qb(a,d,g));let f=g=>C(e[g],1,1,()=>{e[g]=null});return{c(){for(let g=0;g<e.length;g+=
1)e[g].c();b=document.createTextNode("")},m(g,l){for(let m=0;m<e.length;m+=1)e[m].m(g,l);g.insertBefore(b,l||null);c=!0},p(g,l){if(l&3){d=g[1];let m;for(m=0;m<d.length;m+=1){let k=qb(g,d,m);e[m]?(e[m].p(k,l),z(e[m],1)):(e[m]=sb(k),e[m].c(),z(e[m],1),e[m].m(b.parentNode,b))}aa();for(m=d.length;m<e.length;m+=1)f(m);ca()}},i(g){if(!c){for(g=0;g<d.length;g+=1)z(e[g]);c=!0}},o(g){e=e.filter(Boolean);for(g=0;g<e.length;g+=1)C(e[g]);c=!1},d(g){var l=e;for(let m=0;m<l.length;m+=1)l[m]&&l[m].d(g);g&&H(b)}}}
function sb(a){let b,c;b=new $b({props:{config:a[2],step:a[0]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.config=d[2]);e&1&&(f.step=d[0]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ac(a){let b,c,d=a[1]&&rb(a);return{c(){b=document.createElement("footer");d&&d.c();B(b,"class","shepherd-footer")},m(e,f){e.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(e,f){[f]=f;e[1]?d?(d.p(e,f),f&2&&z(d,1)):(d=rb(e),d.c(),z(d,
1),d.m(b,null)):d&&(aa(),C(d,1,1,()=>{d=null}),ca())},i(e){c||(z(d),c=!0)},o(e){C(d);c=!1},d(e){e&&H(b);d&&d.d()}}}function bc(a,b,c){let d,{step:e}=b;a.$$set=f=>{"step"in f&&c(0,e=f.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function cc(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";B(c,"aria-hidden","true");B(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");B(b,"class","shepherd-cancel-icon");
B(b,"type","button")},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);e||(f=ya(b,"click",a[1]),e=!0)},p(g,l){[l]=l;l&1&&d!==(d=g[0].label?g[0].label:"Close Tour")&&B(b,"aria-label",d)},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function dc(a,b,c){let {cancelIcon:d,step:e}=b;a.$$set=f=>{"cancelIcon"in f&&c(0,d=f.cancelIcon);"step"in f&&c(2,e=f.step)};return[d,f=>{f.preventDefault();e.cancel()},e]}function ec(a){let b;return{c(){b=document.createElement("h3");B(b,"id",a[1]);B(b,"class","shepherd-title")},m(c,
d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function fc(a,b,c){let {labelId:d,element:e,title:f}=b;za().$$.after_update.push(()=>{Z(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=g=>{"labelId"in g&&c(1,d=g.labelId);"element"in g&&c(0,e=g.element);"title"in g&&c(2,f=g.title)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function tb(a){let b,c;b=new gc({props:{labelId:a[0],title:a[2]}});return{c(){da(b.$$.fragment)},
m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.labelId=d[0]);e&4&&(f.title=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ub(a){let b,c;b=new hc({props:{cancelIcon:a[3],step:a[1]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&8&&(f.cancelIcon=d[3]);e&2&&(f.step=d[1]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ic(a){let b,c,d,e=a[2]&&tb(a),f=a[3]&&a[3].enabled&&
ub(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();B(b,"class","shepherd-header")},m(g,l){g.insertBefore(b,l||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(g,l){[l]=l;g[2]?e?(e.p(g,l),l&4&&z(e,1)):(e=tb(g),e.c(),z(e,1),e.m(b,c)):e&&(aa(),C(e,1,1,()=>{e=null}),ca());g[3]&&g[3].enabled?f?(f.p(g,l),l&8&&z(f,1)):(f=ub(g),f.c(),z(f,1),f.m(b,null)):f&&(aa(),C(f,1,1,()=>{f=null}),ca())},i(g){d||(z(e),z(f),d=!0)},o(g){C(e);C(f);d=!1},d(g){g&&
H(b);e&&e.d();f&&f.d()}}}function jc(a,b,c){let {labelId:d,step:e}=b,f,g;a.$$set=l=>{"labelId"in l&&c(0,d=l.labelId);"step"in l&&c(1,e=l.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,g=e.options.cancelIcon))};return[d,e,f,g]}function kc(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-text");B(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function lc(a,b,c){let {descriptionId:d,
element:e,step:f}=b;za().$$.after_update.push(()=>{let {text:g}=f.options;Z(g)&&(g=g.call(f));g instanceof HTMLElement?e.appendChild(g):c(0,e.innerHTML=g,e)});a.$$set=g=>{"descriptionId"in g&&c(1,d=g.descriptionId);"element"in g&&c(0,e=g.element);"step"in g&&c(2,f=g.step)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function vb(a){let b,c;b=new mc({props:{labelId:a[1],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.labelId=d[1]);e&4&&
(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function wb(a){let b,c;b=new nc({props:{descriptionId:a[0],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.descriptionId=d[0]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function xb(a){let b,c;b=new oc({props:{step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};
e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function pc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,g=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,l,m=c&&vb(a),k=e&&wb(a),p=g&&xb(a);return{c(){b=document.createElement("div");m&&m.c();d=document.createTextNode(" ");k&&k.c();f=document.createTextNode(" ");p&&p.c();B(b,"class","shepherd-content")},
m(q,n){q.insertBefore(b,n||null);m&&m.m(b,null);b.appendChild(d);k&&k.m(b,null);b.appendChild(f);p&&p.m(b,null);l=!0},p(q,n){[n]=n;n&4&&(c=void 0!==q[2].options.title||q[2].options.cancelIcon&&q[2].options.cancelIcon.enabled);c?m?(m.p(q,n),n&4&&z(m,1)):(m=vb(q),m.c(),z(m,1),m.m(b,d)):m&&(aa(),C(m,1,1,()=>{m=null}),ca());n&4&&(e=void 0!==q[2].options.text);e?k?(k.p(q,n),n&4&&z(k,1)):(k=wb(q),k.c(),z(k,1),k.m(b,f)):k&&(aa(),C(k,1,1,()=>{k=null}),ca());n&4&&(g=Array.isArray(q[2].options.buttons)&&q[2].options.buttons.length);
g?p?(p.p(q,n),n&4&&z(p,1)):(p=xb(q),p.c(),z(p,1),p.m(b,null)):p&&(aa(),C(p,1,1,()=>{p=null}),ca())},i(q){l||(z(m),z(k),z(p),l=!0)},o(q){C(m);C(k);C(p);l=!1},d(q){q&&H(b);m&&m.d();k&&k.d();p&&p.d()}}}function qc(a,b,c){let {descriptionId:d,labelId:e,step:f}=b;a.$$set=g=>{"descriptionId"in g&&c(0,d=g.descriptionId);"labelId"in g&&c(1,e=g.labelId);"step"in g&&c(2,f=g.step)};return[d,e,f]}function yb(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-arrow");B(b,"data-popper-arrow",
"")},m(c,d){c.insertBefore(b,d||null)},d(c){c&&H(b)}}}function rc(a){let b,c,d,e,f,g,l,m,k=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on&&yb();d=new sc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let p=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:null},a[1],{role:"dialog"},{tabindex:"0"}],q={};for(let n=0;n<p.length;n+=1)q=Wb(q,p[n]);return{c(){b=document.createElement("div");
k&&k.c();c=document.createTextNode(" ");da(d.$$.fragment);nb(b,q);la(b,"shepherd-has-cancel-icon",a[5]);la(b,"shepherd-has-title",a[6]);la(b,"shepherd-element",!0)},m(n,r){n.insertBefore(b,r||null);k&&k.m(b,null);b.appendChild(c);W(d,b,null);a[13](b);g=!0;l||(m=ya(b,"keydown",a[7]),l=!0)},p(n,r){var [x]=r;n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&n[4].options.attachTo.on?k||(k=yb(),k.c(),k.m(b,c)):k&&(k.d(1),k=null);r={};x&4&&(r.descriptionId=n[2]);x&8&&(r.labelId=
n[3]);x&16&&(r.step=n[4]);d.$set(r);r=b;x=[(!g||x&20&&e!==(e=void 0!==n[4].options.text?n[2]:null))&&{"aria-describedby":e},(!g||x&24&&f!==(f=n[4].options.title?n[3]:null))&&{"aria-labelledby":f},x&2&&n[1],{role:"dialog"},{tabindex:"0"}];let h={},t={},v={$$scope:1},A=p.length;for(;A--;){let u=p[A],w=x[A];if(w){for(let y in u)y in w||(t[y]=1);for(let y in w)v[y]||(h[y]=w[y],v[y]=1);p[A]=w}else for(let y in u)v[y]=1}for(let u in t)u in h||(h[u]=void 0);nb(r,q=h);la(b,"shepherd-has-cancel-icon",n[5]);
la(b,"shepherd-has-title",n[6]);la(b,"shepherd-element",!0)},i(n){g||(z(d.$$.fragment,n),g=!0)},o(n){C(d.$$.fragment,n);g=!1},d(n){n&&H(b);k&&k.d();X(d);a[13](null);l=!1;m()}}}function zb(a){return a.split(" ").filter(b=>!!b.length)}function tc(a,b,c){let {classPrefix:d,element:e,descriptionId:f,firstFocusableElement:g,focusableElements:l,labelId:m,lastFocusableElement:k,step:p,dataStepId:q}=b,n,r,x;za().$$.on_mount.push(()=>{c(1,q={[`data-${d}shepherd-step-id`]:p.id});c(9,l=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));
c(8,g=l[0]);c(10,k=l[l.length-1])});za().$$.after_update.push(()=>{if(x!==p.options.classes){var h=x;qa(h)&&(h=zb(h),h.length&&e.classList.remove(...h));h=x=p.options.classes;qa(h)&&(h=zb(h),h.length&&e.classList.add(...h))}});a.$$set=h=>{"classPrefix"in h&&c(11,d=h.classPrefix);"element"in h&&c(0,e=h.element);"descriptionId"in h&&c(2,f=h.descriptionId);"firstFocusableElement"in h&&c(8,g=h.firstFocusableElement);"focusableElements"in h&&c(9,l=h.focusableElements);"labelId"in h&&c(3,m=h.labelId);"lastFocusableElement"in
h&&c(10,k=h.lastFocusableElement);"step"in h&&c(4,p=h.step);"dataStepId"in h&&c(1,q=h.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,n=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),c(6,r=p.options&&p.options.title))};return[e,q,f,m,p,n,r,h=>{const {tour:t}=p;switch(h.keyCode){case 9:if(0===l.length){h.preventDefault();break}if(h.shiftKey){if(document.activeElement===g||document.activeElement.classList.contains("shepherd-element"))h.preventDefault(),k.focus()}else document.activeElement===
k&&(h.preventDefault(),g.focus());break;case 27:t.options.exitOnEsc&&p.cancel();break;case 37:t.options.keyboardNavigation&&t.back();break;case 39:t.options.keyboardNavigation&&t.next()}},g,l,k,d,()=>e,function(h){ma[h?"unshift":"push"](()=>{e=h;c(0,e)})}]}function uc(a){a&&({steps:a}=a,a.forEach(b=>{b.options&&!1===b.options.canClickTarget&&b.options.attachTo&&b.target instanceof HTMLElement&&b.target.classList.remove("shepherd-target-click-disabled")}))}function vc(a){let b,c,d,e,f;return{c(){b=
mb("svg");c=mb("path");B(c,"d",a[2]);B(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);a[11](b);e||(f=ya(b,"touchmove",a[3]),e=!0)},p(g,l){[l]=l;l&4&&B(c,"d",g[2]);l&2&&d!==(d=`${g[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&B(b,"class",d)},i:G,o:G,d(g){g&&H(b);a[11](null);e=!1;f()}}}function Ab(a){if(!a)return null;let b=a instanceof HTMLElement&&window.getComputedStyle(a).overflowY;
return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:Ab(a.parentElement)}function wc(a,b,c){function d(){c(4,p={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,q=!1);l()}function f(h,t,v,A){void 0===h&&(h=0);void 0===t&&(t=0);if(A){var u=A.getBoundingClientRect();let y=u.y||u.top;u=u.bottom||y+u.height;if(v){var w=v.getBoundingClientRect();v=w.y||w.top;w=w.bottom||v+w.height;y=Math.max(y,v);u=Math.min(u,w)}let {y:Y,height:E}={y,height:Math.max(u-y,0)},{x:I,width:D,left:na}=A.getBoundingClientRect();
c(4,p={width:D+2*h,height:E+2*h,x:(I||na)-h,y:Y-h,r:t})}else d()}function g(){c(1,q=!0)}function l(){n&&(cancelAnimationFrame(n),n=void 0);window.removeEventListener("touchmove",x,{passive:!1})}function m(h){let {modalOverlayOpeningPadding:t,modalOverlayOpeningRadius:v}=h.options,A=Ab(h.target),u=()=>{n=void 0;f(t,v,A,h.target);n=requestAnimationFrame(u)};u();window.addEventListener("touchmove",x,{passive:!1})}let {element:k,openingProperties:p}=b;Ma();let q=!1,n=void 0,r;d();let x=h=>{h.preventDefault()};
a.$$set=h=>{"element"in h&&c(0,k=h.element);"openingProperties"in h&&c(4,p=h.openingProperties)};a.$$.update=()=>{if(a.$$.dirty&16){let {width:h,height:t,x:v=0,y:A=0,r:u=0}=p,{innerWidth:w,innerHeight:y}=window;c(2,r=`M${w},${y}\
H0\
V0\
H${w}\
V${y}\
Z\
M${v+u},${A}\
a${u},${u},0,0,0-${u},${u}\
V${t+A-u}\
a${u},${u},0,0,0,${u},${u}\
H${h+v-u}\
a${u},${u},0,0,0,${u}-${u}\
V${A+u}\
a${u},${u},0,0,0-${u}-${u}\
Z`)}};return[k,q,r,h=>{h.stopPropagation()},p,()=>k,d,e,f,function(h){l();h.tour.options.useModalOverlay?(m(h),g()):e()},g,function(h){ma[h?"unshift":"push"](()=>{k=h;c(0,k)})}]}var Fb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===xc);return b},xc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;ea.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");
return a.reduce(function(c,d){return ea(c,d,b)},{})};var yc=ea;class Qa{on(a,b,c,d){void 0===d&&(d=!1);void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((e,f)=>{let {ctx:g,handler:l,once:m}=e;l.apply(g||this,c);m&&this.bindings[a].splice(f,1)});return this}}var ua=["top","bottom","right","left"],eb=ua.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),db=[].concat(ua,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Sb="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
L=Math.max,V=Math.min,ia=Math.round,Ib={top:"auto",right:"auto",bottom:"auto",left:"auto"},Da={passive:!0},Jb={left:"right",right:"left",bottom:"top",top:"bottom"},Kb={start:"end",end:"start"},Bb={placement:"bottom",modifiers:[],strategy:"absolute"},zc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?Bb:a;return function(e,f,g){function l(){k.orderedModifiers.forEach(function(r){var x=r.name,h=r.options;h=void 0===h?{}:h;r=r.effect;"function"===
typeof r&&(x=r({state:k,name:x,instance:n,options:h}),p.push(x||function(){}))})}function m(){p.forEach(function(r){return r()});p=[]}void 0===g&&(g=d);var k={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bb,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},p=[],q=!1,n={state:k,setOptions:function(r){r="function"===typeof r?r(k.options):r;m();k.options=Object.assign({},d,k.options,r);k.scrollParents={reference:fa(e)?sa(e):e.contextElement?sa(e.contextElement):
[],popper:sa(f)};r=Rb(Ub([].concat(c,k.options.modifiers)));k.orderedModifiers=r.filter(function(x){return x.enabled});l();return n.update()},forceUpdate:function(){if(!q){var r=k.elements,x=r.reference;r=r.popper;if(hb(x,r))for(k.rects={reference:Pb(x,ra(r),"fixed"===k.options.strategy),popper:Fa(r)},k.reset=!1,k.placement=k.options.placement,k.orderedModifiers.forEach(function(v){return k.modifiersData[v.name]=Object.assign({},v.data)}),x=0;x<k.orderedModifiers.length;x++)if(!0===k.reset)k.reset=
!1,x=-1;else{var h=k.orderedModifiers[x];r=h.fn;var t=h.options;t=void 0===t?{}:t;h=h.name;"function"===typeof r&&(k=r({state:k,options:t,name:h,instance:n})||k)}}},update:Tb(function(){return new Promise(function(r){n.forceUpdate();r(k)})}),destroy:function(){m();q=!0}};if(!hb(e,f))return n;n.setOptions(g).then(function(r){if(!q&&g.onFirstUpdate)g.onFirstUpdate(r)});return n}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=K(b.elements.popper),l=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&l.forEach(function(m){m.addEventListener("scroll",c.update,Da)});f&&g.addEventListener("resize",c.update,Da);return function(){e&&l.forEach(function(m){m.removeEventListener("scroll",c.update,Da)});f&&g.removeEventListener("resize",c.update,Da)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
cb({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:N(b.placement),variation:ja(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,Za(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Za(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];F(f)&&M(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var l=e[g];!1===l?f.removeAttribute(g):f.setAttribute(g,!0===l?"":l)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,l){g[l]="";return g},{});F(e)&&M(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=db.reduce(function(g,l){var m=b.rects;var k=N(l);var p=0<=["left","top"].indexOf(k)?-1:1,q="function"===typeof d?d(Object.assign({},m,{placement:l})):d;m=q[0];q=q[1];m=m||0;q=(q||0)*p;k=0<=["left","right"].indexOf(k)?{x:q,y:m}:{x:m,y:q};g[l]=k;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,l=c.boundary,m=c.rootBoundary,k=c.altBoundary,p=c.flipVariations,q=void 0===p?!0:p,n=c.allowedAutoPlacements;c=b.options.placement;p=N(c);f=f||(p!==c&&q?Ob(c):[xa(c)]);var r=[c].concat(f).reduce(function(E,I){return E.concat("auto"===N(I)?Nb(b,{placement:I,boundary:l,rootBoundary:m,padding:g,flipVariations:q,allowedAutoPlacements:n}):
I)},[]);c=b.rects.reference;f=b.rects.popper;var x=new Map;p=!0;for(var h=r[0],t=0;t<r.length;t++){var v=r[t],A=N(v),u="start"===ja(v),w=0<=["top","bottom"].indexOf(A),y=w?"width":"height",Y=ta(b,{placement:v,boundary:l,rootBoundary:m,altBoundary:k,padding:g});u=w?u?"right":"left":u?"bottom":"top";c[y]>f[y]&&(u=xa(u));y=xa(u);w=[];d&&w.push(0>=Y[A]);e&&w.push(0>=Y[u],0>=Y[y]);if(w.every(function(E){return E})){h=v;p=!1;break}x.set(v,w)}if(p)for(d=function(E){var I=r.find(function(D){if(D=x.get(D))return D.slice(0,
E).every(function(na){return na})});if(I)return h=I,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==h&&(b.modifiersData[a]._skip=!0,b.placement=h,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var l=void 0===d?0:d,m=ta(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),k=N(b.placement),p=ja(b.placement),q=!p,n=Ga(k);c="x"===n?"y":"x";d=b.modifiersData.popperOffsets;var r=b.rects.reference,x=b.rects.popper;l="function"===typeof l?l(Object.assign({},b.rects,{placement:b.placement})):l;var h="number"===typeof l?{mainAxis:l,altAxis:l}:Object.assign({mainAxis:0,altAxis:0},l),t=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;l={x:0,y:0};if(d){if(e){var v,A="y"===n?"top":"left",u="y"===n?"bottom":"right",w=
"y"===n?"height":"width";e=d[n];var y=e+m[A],Y=e-m[u],E=g?-x[w]/2:0,I="start"===p?r[w]:x[w];p="start"===p?-x[w]:-r[w];var D=b.elements.arrow;D=g&&D?Fa(D):{width:0,height:0};var na=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};A=na[A];u=na[u];D=L(0,V(r[w],D[w]));I=q?r[w]/2-E-D-A-h.mainAxis:I-D-A-h.mainAxis;q=q?-r[w]/2+E+D+u+h.mainAxis:p+D+u+h.mainAxis;w=(w=b.elements.arrow&&ra(b.elements.arrow))?"y"===n?w.clientTop||0:w.clientLeft||
0:0;E=null!=(v=null==t?void 0:t[n])?v:0;v=e+q-E;y=g?V(y,e+I-E-w):y;v=g?L(Y,v):Y;v=L(y,V(e,v));d[n]=v;l[n]=v-e}if(f){var J;f=d[c];e="y"===c?"height":"width";v=f+m["x"===n?"top":"left"];m=f-m["x"===n?"bottom":"right"];k=-1!==["top","left"].indexOf(k);n=null!=(J=null==t?void 0:t[c])?J:0;J=k?v:f-r[e]-x[e]-n+h.altAxis;r=k?f+r[e]+x[e]-n-h.altAxis:m;g&&k?(J=L(J,V(f,r)),J=J>r?r:J):J=L(g?J:v,V(f,g?r:m));d[c]=J;l[c]=J-f}b.modifiersData[a]=l}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",
fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,l=N(c.placement);a=Ga(l);l=0<=["left","right"].indexOf(l)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Xa("number"!==typeof e?e:Ya(e,ua));var m=Fa(f),k="y"===a?"top":"left",p="y"===a?"bottom":"right",q=c.rects.reference[l]+c.rects.reference[a]-g[a]-c.rects.popper[l];g=g[a]-c.rects.reference[a];f=(f=ra(f))?"y"===a?f.clientHeight||
0:f.clientWidth||0:0;g=f/2-m[l]/2+(q/2-g/2);l=L(e[k],V(g,f-m[l]-e[p]));c.modifiersData[d]=(b={},b[a]=l,b.centerOffset=l-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Va(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=
a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ta(b,{elementContext:"reference"}),g=ta(b,{altBoundary:!0});c=fb(f,c);d=fb(g,d,e);e=gb(c);g=gb(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});let R,va=[],ma=[],Aa=[],pb=[],Xb=Promise.resolve(),Pa=!1,Oa=new Set,Ba=0,Ca=new Set,
ba;class T{$destroy(){X(this,1);this.$destroy=G}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let d=c.indexOf(b);-1!==d&&c.splice(d,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class $b extends T{constructor(a){super();S(this,a,Zb,Yb,Q,{config:6,step:7})}}class oc extends T{constructor(a){super();S(this,a,bc,ac,Q,{step:0})}}class hc extends T{constructor(a){super();S(this,a,dc,cc,Q,{cancelIcon:0,
step:2})}}class gc extends T{constructor(a){super();S(this,a,fc,ec,Q,{labelId:1,element:0,title:2})}}class mc extends T{constructor(a){super();S(this,a,jc,ic,Q,{labelId:0,step:1})}}class nc extends T{constructor(a){super();S(this,a,lc,kc,Q,{descriptionId:1,element:0,step:2})}}class sc extends T{constructor(a){super();S(this,a,qc,pc,Q,{descriptionId:0,labelId:1,step:2})}}class Ac extends T{constructor(a){super();S(this,a,tc,rc,Q,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,
labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var Cb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function c(h,t){this.scrollLeft=h;this.scrollTop=t}function d(h){if(null===h||"object"!==typeof h||void 0===h.behavior||"auto"===h.behavior||"instant"===h.behavior)return!0;if("object"===typeof h&&"smooth"===h.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+
h.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(h,t){if("Y"===t)return h.clientHeight+x<h.scrollHeight;if("X"===t)return h.clientWidth+x<h.scrollWidth}function f(h,t){h=k.getComputedStyle(h,null)["overflow"+t];return"auto"===h||"scroll"===h}function g(h){var t=e(h,"Y")&&f(h,"Y");h=e(h,"X")&&f(h,"X");return t||h}function l(h){var t=(r()-h.startTime)/468;var v=.5*(1-Math.cos(Math.PI*(1<t?1:t)));t=h.startX+(h.x-h.startX)*v;v=h.startY+(h.y-h.startY)*v;h.method.call(h.scrollable,
t,v);t===h.x&&v===h.y||k.requestAnimationFrame(l.bind(k,h))}function m(h,t,v){var A=r();if(h===p.body){var u=k;var w=k.scrollX||k.pageXOffset;h=k.scrollY||k.pageYOffset;var y=n.scroll}else u=h,w=h.scrollLeft,h=h.scrollTop,y=c;l({scrollable:u,method:y,startTime:A,startX:w,startY:h,x:t,y:v})}var k=window,p=document;if(!("scrollBehavior"in p.documentElement.style&&!0!==k.__forceSmoothScrollPolyfill__)){var q=k.HTMLElement||k.Element,n={scroll:k.scroll||k.scrollTo,scrollBy:k.scrollBy,elementScroll:q.prototype.scroll||
c,scrollIntoView:q.prototype.scrollIntoView},r=k.performance&&k.performance.now?k.performance.now.bind(k.performance):Date.now,x=/MSIE |Trident\/|Edge\//.test(k.navigator.userAgent)?1:0;k.scroll=k.scrollTo=function(h,t){void 0!==h&&(!0===d(h)?n.scroll.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:k.scrollX||k.pageXOffset,void 0!==h.top?h.top:void 0!==t?t:k.scrollY||k.pageYOffset):m.call(k,p.body,void 0!==h.left?~~h.left:k.scrollX||k.pageXOffset,void 0!==h.top?~~h.top:k.scrollY||k.pageYOffset))};
k.scrollBy=function(h,t){void 0!==h&&(d(h)?n.scrollBy.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:0,void 0!==h.top?h.top:void 0!==t?t:0):m.call(k,p.body,~~h.left+(k.scrollX||k.pageXOffset),~~h.top+(k.scrollY||k.pageYOffset)))};q.prototype.scroll=q.prototype.scrollTo=function(h,t){if(void 0!==h)if(!0===d(h)){if("number"===typeof h&&void 0===t)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==h.left?~~h.left:"object"!==typeof h?~~h:this.scrollLeft,void 0!==
h.top?~~h.top:void 0!==t?~~t:this.scrollTop)}else t=h.left,h=h.top,m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof h?this.scrollTop:~~h)};q.prototype.scrollBy=function(h,t){void 0!==h&&(!0===d(h)?n.elementScroll.call(this,void 0!==h.left?~~h.left+this.scrollLeft:~~h+this.scrollLeft,void 0!==h.top?~~h.top+this.scrollTop:~~t+this.scrollTop):this.scroll({left:~~h.left+this.scrollLeft,top:~~h.top+this.scrollTop,behavior:h.behavior}))};q.prototype.scrollIntoView=function(h){if(!0===
d(h))n.scrollIntoView.call(this,void 0===h?!0:h);else{for(h=this;h!==p.body&&!1===g(h);)h=h.parentNode||h.host;var t=h.getBoundingClientRect(),v=this.getBoundingClientRect();h!==p.body?(m.call(this,h,h.scrollLeft+v.left-t.left,h.scrollTop+v.top-t.top),"fixed"!==k.getComputedStyle(h).position&&k.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):k.scrollBy({left:v.left,top:v.top,behavior:"smooth"})}}}}}})()});Cb.polyfill;Cb.polyfill();class Ra extends Qa{constructor(a,b){void 0===b&&(b={});super(a,
b);this.tour=a;this.classPrefix=this.tour.options?jb(this.tour.options.classPrefix):"";this.styles=a.styles;this._resolvedAttachTo=null;Ua(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();
this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}_resolveAttachToOptions(){let a=this.options.attachTo||{},b=Object.assign({},a);Z(b.element)&&(b.element=b.element.call(this));if(qa(b.element)){try{b.element=document.querySelector(b.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return this._resolvedAttachTo=b}_getResolvedAttachToOptions(){return null===this._resolvedAttachTo?
this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return!(!this.el||this.el.hidden)}show(){if(Z(this.options.beforeShowPromise)){let a=this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=new Ac({target:this.tour.options.stepsContainer||
document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=this._getResolvedAttachToOptions();Z(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=
b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a){void 0===a&&(a={});let b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=yc({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Ma()}`;c&&Object.keys(c).forEach(d=>{this.on(d,c[d],this)})}_setupElements(){void 0!==
this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&Hb(this);this.tooltip&&this.tooltip.destroy();let a=this._getResolvedAttachToOptions(),b=a.element;var c={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},ib(this)],strategy:"absolute"};if(void 0!==a&&null!==a&&a.element&&a.on)c.placement=a.on;else{c=Vb();var d={placement:"top",strategy:"fixed",modifiers:[ib(this)]};c=d=La({},d,{modifiers:Array.from(new Set([...d.modifiers,...c]))})}(d=this.tour&&
this.tour.options&&this.tour.options.defaultStepOptions)&&(c=kb(d,c));c=kb(this.options,c);void 0!==a&&null!==a&&a.element&&a.on||(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=zc(b,this.el,c);this.target=a.element}_show(){this.trigger("before-show");this._resolveAttachToOptions();this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);this.el.hidden=!1;this.options.scrollTo&&
setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),b.classList.remove("shepherd-target-click-disabled"),!1===a.options.canClickTarget&&
b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class Bc extends T{constructor(a){super();S(this,a,wc,vc,Q,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}
let oa=new Qa;class Cc extends Qa{constructor(a){void 0===a&&(a={});super(a);Ua(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=jb(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(b=>{(c=>{this.on(c,d=>{d=d||{};d.tour=this;oa.trigger(c,d)})})(b)});this._setTourID();return this}addStep(a,b){a instanceof Ra?a.tour=this:a=new Ra(this,a);void 0!==b?this.steps.splice(b,0,a):
this.steps.push(a);return a}addSteps(a){Array.isArray(a)&&a.forEach(b=>{this.addStep(b)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return oa.activeTour===
this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((c,d)=>{if(c.id===a)return c.isOpen()&&c.hide(),c.destroy(),this.steps.splice(d,1),!0});b&&b.id===a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a,b){void 0===a&&(a=0);void 0===b&&(b=!0);if(a=qa(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),Z(a.options.showOn)&&!a.options.showOn()?
this._skipStep(a,b):(this.trigger("show",{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(c=>c.destroy());uc(this);this.trigger(a,{index:b});oa.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==
a&&"complete"!==a||!this.modal||(a=document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});oa.activeTour=this}_setupModal(){this.modal=new Bc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);a===this.steps.length-1?this.complete():this.show(b?a+1:a-
1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Ma()}`}}Object.assign(oa,{Tour:Cc,Step:Ra});return oa})

;
/**
 * @file
 * Attaches behaviors for the Tour module's toolbar tab.
 */

(($, Backbone, Drupal, settings, document, Shepherd) => {
  const queryString = decodeURI(window.location.search);

  /**
   * Attaches the tour's toolbar tab behavior.
   *
   * It uses the query string for:
   * - tour: When ?tour=1 is present, the tour will start automatically after
   *   the page has loaded.
   * - tips: Pass ?tips=class in the url to filter the available tips to the
   *   subset which match the given class.
   *
   * @example
   * http://example.com/foo?tour=1&tips=bar
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach tour functionality on `tour` events.
   */
  Drupal.behaviors.tour = {
    attach(context) {
      once('tour', 'body').forEach(() => {
        const model = new Drupal.tour.models.StateModel();
        // eslint-disable-next-line no-new
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model,
        });

        model
          // Allow other scripts to respond to tour events.
          .on('change:isActive', (tourModel, isActive) => {
            $(document).trigger(
              isActive ? 'drupalTourStarted' : 'drupalTourStopped',
            );
          });
        // Initialization: check whether a tour is available on the current
        // page.
        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }
        // Start the tour immediately if toggled via query string.
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    },
  };

  /**
   * @namespace
   */
  Drupal.tour = Drupal.tour || {
    /**
     * @namespace Drupal.tour.models
     */
    models: {},

    /**
     * @namespace Drupal.tour.views
     */
    views: {},
  };

  /**
   * Backbone Model for tours.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.tour.models.StateModel = Backbone.Model.extend(
    /** @lends Drupal.tour.models.StateModel# */ {
      /**
       * @type {object}
       */
      defaults: /** @lends Drupal.tour.models.StateModel# */ {
        /**
         * Indicates whether the Drupal root window has a tour.
         *
         * @type {Array}
         */
        tour: [],

        /**
         * Indicates whether the tour is currently running.
         *
         * @type {boolean}
         */
        isActive: false,

        /**
         * Indicates which tour is the active one (necessary to cleanly stop).
         *
         * @type {Array}
         */
        activeTour: [],
      },
    },
  );

  Drupal.tour.views.ToggleTourView = Backbone.View.extend(
    /** @lends Drupal.tour.views.ToggleTourView# */ {
      /**
       * @type {object}
       */
      events: { click: 'onClick' },

      /**
       * Handles edit mode toggle interactions.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:tour change:isActive', this.render);
        this.listenTo(this.model, 'change:isActive', this.toggleTour);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.tour.views.ToggleTourView}
       *   The `ToggleTourView` view.
       */
      render() {
        // Render the visibility.
        this.$el.toggleClass('hidden', this._getTour().length === 0);
        // Render the state.
        const isActive = this.model.get('isActive');
        this.$el
          .find('button')
          .toggleClass('is-active', isActive)
          .attr('aria-pressed', isActive);
        return this;
      },

      /**
       * Model change handler; starts or stops the tour.
       */
      toggleTour() {
        if (this.model.get('isActive')) {
          this._removeIrrelevantTourItems(this._getTour());
          const tourItems = this.model.get('tour');
          const that = this;

          if (tourItems.length) {
            // If Joyride is positioned relative to the top or bottom of an
            // element, and its secondary position is right or left, then the
            // arrow is also positioned right or left. Shepherd defaults to
            // center positioning the arrow.
            //
            // In most cases, this arrow positioning difference has
            // little impact. However, tours built with Joyride may have tips
            // using a higher level selector than the element the tip is
            // expected to point to, and relied on Joyride's arrow positioning
            // to align the arrow with the expected reference element. Joyride's
            // arrow positioning behavior is replicated here to prevent those
            // use cases from causing UI regressions.
            //
            // This modifier is provided here instead of TourViewBuilder (where
            // most position modifications are) because it includes adding a
            // JavaScript callback function.
            settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push(
              {
                name: 'moveArrowJoyridePosition',
                enabled: true,
                phase: 'write',
                fn({ state }) {
                  const { arrow } = state.elements;
                  const { placement } = state;
                  if (
                    arrow &&
                    /^top|bottom/.test(placement) &&
                    /-start|-end$/.test(placement)
                  ) {
                    const horizontalPosition = placement.split('-')[1];
                    const offset =
                      horizontalPosition === 'start'
                        ? 28
                        : state.elements.popper.clientWidth - 56;
                    arrow.style.transform = `translate3d(${offset}px, 0px, 0px)`;
                  }
                },
              },
            );
            const shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
            shepherdTour.on('cancel', () => {
              that.model.set('isActive', false);
            });
            shepherdTour.on('complete', () => {
              that.model.set('isActive', false);
            });

            tourItems.forEach((tourStepConfig, index) => {
              // Create the configuration for a given tour step by using values
              // defined in TourViewBuilder.
              // @see \Drupal\tour\TourViewBuilder::viewMultiple()
              const tourItemOptions = {
                title: tourStepConfig.title
                  ? Drupal.checkPlain(tourStepConfig.title)
                  : null,
                text: () => Drupal.theme('tourItemContent', tourStepConfig),
                attachTo: tourStepConfig.attachTo,
                buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
                classes: tourStepConfig.classes,
                index,
              };

              tourItemOptions.when = {
                show() {
                  const nextButton =
                    shepherdTour.currentStep.el.querySelector('footer button');

                  // Drupal disables Shepherd's built in focus after item
                  // creation functionality due to focus being set on the tour
                  // item container after every scroll and resize event. In its
                  // place, the 'next' button is focused here.
                  nextButton.focus();

                  // When Stable 9 is part of the active theme, the
                  // Drupal.tour.convertToJoyrideMarkup() function is available.
                  // This function converts Shepherd markup to Joyride markup,
                  // facilitating the use of the Shepherd library that is
                  // backwards compatible with customizations intended for
                  // Joyride.
                  // The Drupal.tour.convertToJoyrideMarkup() function is
                  // internal, and will eventually be removed from Drupal core.
                  if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                    Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                  }
                },
              };

              shepherdTour.addStep(tourItemOptions);
            });
            shepherdTour.start();
            this.model.set({ isActive: true, activeTour: shepherdTour });
          }
        } else {
          this.model.get('activeTour').cancel();
          this.model.set({ isActive: false, activeTour: [] });
        }
      },

      /**
       * Toolbar tab click event handler; toggles isActive.
       *
       * @param {jQuery.Event} event
       *   The click event.
       */
      onClick(event) {
        this.model.set('isActive', !this.model.get('isActive'));
        event.preventDefault();
        event.stopPropagation();
      },

      /**
       * Gets the tour.
       *
       * @return {array}
       *   An array of Shepherd tour item objects.
       */
      _getTour() {
        return this.model.get('tour');
      },

      /**
       * Removes tour items for elements that don't have matching page elements.
       *
       * Or that are explicitly filtered out via the 'tips' query string.
       *
       * @example
       * <caption>This will filter out tips that do not have a matching
       * page element or don't have the "bar" class.</caption>
       * http://example.com/foo?tips=bar
       *
       * @param {Object[]} tourItems
       *   An array containing tour Step config objects.
       *   The object properties relevant to this function:
       *   - classes {string}: A string of classes to be added to the tour step
       *     when rendered.
       *   - selector {string}: The selector a tour step is associated with.
       */
      _removeIrrelevantTourItems(tourItems) {
        const tips = /tips=([^&]+)/.exec(queryString);
        const filteredTour = tourItems.filter((tourItem) => {
          // If the query parameter 'tips' is set, remove all tips that don't
          // have the matching class. The `tourItem` variable is a step config
          // object, and the 'classes' property is a ShepherdJS Step() config
          // option that provides a string.
          if (
            tips &&
            tourItem.hasOwnProperty('classes') &&
            tourItem.classes.indexOf(tips[1]) === -1
          ) {
            return false;
          }

          // If a selector is configured but there isn't a matching element,
          // return false.
          return !(
            tourItem.selector && !document.querySelector(tourItem.selector)
          );
        });

        // If there are tours filtered, we'll have to update model.
        if (tourItems.length !== filteredTour.length) {
          filteredTour.forEach((filteredTourItem, filteredTourItemId) => {
            filteredTour[filteredTourItemId].counter = Drupal.t(
              '!tour_item of !total',
              {
                '!tour_item': filteredTourItemId + 1,
                '!total': filteredTour.length,
              },
            );

            if (filteredTourItemId === filteredTour.length - 1) {
              filteredTour[filteredTourItemId].cancelText =
                Drupal.t('End tour');
            }
          });
          this.model.set('tour', filteredTour);
        }
      },
    },
  );

  /**
   * Provides an object that will become the tour item's 'next' button.
   *
   * Similar to a theme function, themes can override this function to customize
   * the resulting button. Unlike a theme function, it returns an object instead
   * of a string, which is why it is not part of Drupal.theme.
   *
   * @param {Tour} shepherdTour
   *  A class representing a Shepherd site tour.
   * @param {Object} tourStepConfig
   *   An object generated in TourViewBuilder used for creating the options
   *   passed to `Tour.addStep(options)`.
   *   Contains the following properties:
   *   - id {string}: The tour.tip ID specified by its config
   *   - selector {string|null}: The selector of the element the tour step is
   *     attaching to.
   *   - module {string}: The module providing the tip plugin used by this step.
   *   - counter {string}: A string indicating which tour step this is out of
   *     how many total steps.
   *   - attachTo {Object} This is directly mapped to the `attachTo` Step()
   *     option. It has two properties:
   *     - element {string}: The selector of the element the step attaches to.
   *     - on {string}: a PopperJS compatible string to specify step position.
   *   - classes {string}: Will be added to the class attribute of the step.
   *   - body {string}: Markup that is mapped to the `text` Step() option. Will
   *     become the step content.
   *   - title {string}: is mapped to the `title` Step() option.
   *
   * @return {{classes: string, action: string, text: string}}
   *    An object structured in the manner Shepherd requires to create the
   *    'next' button.
   *
   * @see https://shepherdjs.dev/docs/Tour.html
   * @see \Drupal\tour\TourViewBuilder::viewMultiple()
   * @see https://shepherdjs.dev/docs/Step.html
   */
  Drupal.tour.nextButton = (shepherdTour, tourStepConfig) => {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText
        ? tourStepConfig.cancelText
        : Drupal.t('Next'),
      action: tourStepConfig.cancelText
        ? shepherdTour.cancel
        : shepherdTour.next,
    };
  };

  /**
   * Theme function for tour item content.
   *
   * @param {Object} tourStepConfig
   *   An object generated in TourViewBuilder used for creating the options
   *   passed to `Tour.addStep(options)`.
   *   Contains the following properties:
   *   - id {string}: The tour.tip ID specified by its config
   *   - selector {string|null}: The selector of the element the tour step is
   *     attaching to.
   *   - module {string}: The module providing the tip plugin used by this step.
   *   - counter {string}: A string indicating which tour step this is out of
   *     how many total steps.
   *   - attachTo {Object} This is directly mapped to the `attachTo` Step()
   *     option. It has two properties:
   *     - element {string}: The selector of the element the step attaches to.
   *     - on {string}: a PopperJS compatible string to specify step position.
   *   - classes {string}: Will be added to the class attribute of the step.
   *   - body {string}: Markup that is mapped to the `text` Step() option. Will
   *     become the step content.
   *   - title {string}: is mapped to the `title` Step() option.
   *
   * @return {string}
   *   The tour item content markup.
   *
   * @see \Drupal\tour\TourViewBuilder::viewMultiple()
   * @see https://shepherdjs.dev/docs/Step.html
   */
  Drupal.theme.tourItemContent = (tourStepConfig) =>
    `${tourStepConfig.body}<div class="tour-progress">${tourStepConfig.counter}</div>`;
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);
;
/**
 * @file
 * Manages page tabbing modifications made by modules.
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingConstrained
 */

/**
 * Allow modules to respond to the tabbingContext release event.
 *
 * @event drupalTabbingContextReleased
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextActivated
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextDeactivated
 */

(function ($, Drupal, { tabbable, isTabbable }) {
  /**
   * Provides an API for managing page tabbing order modifications.
   *
   * @constructor Drupal~TabbingManager
   */
  function TabbingManager() {
    /**
     * Tabbing sets are stored as a stack. The active set is at the top of the
     * stack. We use a JavaScript array as if it were a stack; we consider the
     * first element to be the bottom and the last element to be the top. This
     * allows us to use JavaScript's built-in Array.push() and Array.pop()
     * methods.
     *
     * @type {Array.<Drupal~TabbingContext>}
     */
    this.stack = [];
  }

  /**
   * Stores a set of tabbable elements.
   *
   * This constraint can be removed with the release() method.
   *
   * @constructor Drupal~TabbingContext
   *
   * @param {object} options
   *   A set of initiating values
   * @param {number} options.level
   *   The level in the TabbingManager's stack of this tabbingContext.
   * @param {jQuery} options.$tabbableElements
   *   The DOM elements that should be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {jQuery} options.$disabledElements
   *   The DOM elements that should not be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {boolean} options.released
   *   A released tabbingContext can never be activated again. It will be
   *   cleaned up when the TabbingManager unwinds its stack.
   * @param {boolean} options.active
   *   When true, the tabbable elements of this tabbingContext will be reachable
   *   via the tab key and the disabled elements will not. Only one
   *   tabbingContext can be active at a time.
   *  @param {boolean} options.trapFocus
   *   When true, focus is trapped within the tabbable elements, i.e. focus will
   *   remain within the browser.
   */
  function TabbingContext(options) {
    $.extend(
      this,
      /** @lends Drupal~TabbingContext# */ {
        /**
         * @type {?number}
         */
        level: null,

        /**
         * @type {jQuery}
         */
        $tabbableElements: $(),

        /**
         * @type {jQuery}
         */
        $disabledElements: $(),

        /**
         * @type {boolean}
         */
        released: false,

        /**
         * @type {boolean}
         */
        active: false,

        /**
         * @type {boolean}
         */
        trapFocus: false,
      },
      options,
    );
  }

  /**
   * Add public methods to the TabbingManager class.
   */
  $.extend(
    TabbingManager.prototype,
    /** @lends Drupal~TabbingManager# */ {
      /**
       * Constrain tabbing to the specified set of elements only.
       *
       * Makes elements outside of the specified set of elements unreachable via
       * the tab key.
       *
       * @param {jQuery|Selector|Element|ElementArray|object|selection} elements
       *   The set of elements to which tabbing should be constrained. Can also
       *   be any jQuery-compatible argument.
       * @param {object} [options={}]
       *   Constrain options.
       * @param {boolean} [options.trapFocus=false]
       *   When true, tabbing is trapped within the set of elements and can't
       *   leave the browser. If the final element in the set is tabbed, the
       *   first element in the set will receive focus. If the first element in
       *   the set is shift-tabbed, the last element in the set will receive
       *   focus.
       *   When false, it is possible to tab out of the browser window by
       *   tabbing the final element in the set or shift-tabbing the first
       *   element in the set.
       *
       * @return {Drupal~TabbingContext}
       *   The TabbingContext instance.
       *
       * @fires event:drupalTabbingConstrained
       */
      constrain(elements, { trapFocus = false } = {}) {
        // Deactivate all tabbingContexts to prepare for the new constraint. A
        // tabbingContext instance will only be reactivated if the stack is
        // unwound to it in the _unwindStack() method.
        const il = this.stack.length;
        for (let i = 0; i < il; i++) {
          this.stack[i].deactivate();
        }

        // The "active tabbing set" are the elements tabbing should be constrained
        // to.
        let tabbableElements = [];
        $(elements).each((index, rootElement) => {
          tabbableElements = [...tabbableElements, ...tabbable(rootElement)];
          if (isTabbable(rootElement)) {
            tabbableElements = [...tabbableElements, rootElement];
          }
        });

        const tabbingContext = new TabbingContext({
          // The level is the current height of the stack before this new
          // tabbingContext is pushed on top of the stack.
          level: this.stack.length,
          $tabbableElements: $(tabbableElements),
          trapFocus,
        });

        this.stack.push(tabbingContext);

        // Activates the tabbingContext; this will manipulate the DOM to constrain
        // tabbing.
        tabbingContext.activate();

        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingConstrained', tabbingContext);

        return tabbingContext;
      },

      /**
       * Restores a former tabbingContext when an active one is released.
       *
       * The TabbingManager stack of tabbingContext instances will be unwound
       * from the top-most released tabbingContext down to the first non-released
       * tabbingContext instance. This non-released instance is then activated.
       */
      release() {
        // Unwind as far as possible: find the topmost non-released
        // tabbingContext.
        let toActivate = this.stack.length - 1;
        while (toActivate >= 0 && this.stack[toActivate].released) {
          toActivate--;
        }

        // Delete all tabbingContexts after the to be activated one. They have
        // already been deactivated, so their effect on the DOM has been reversed.
        this.stack.splice(toActivate + 1);

        // Get topmost tabbingContext, if one exists, and activate it.
        if (toActivate >= 0) {
          this.stack[toActivate].activate();
        }
      },

      /**
       * Makes all elements outside of the tabbingContext's set untabbable.
       *
       * Elements made untabbable have their original tabindex and autofocus
       * values stored so that they might be restored later when this
       * tabbingContext is deactivated.
       *
       * @param {Drupal~TabbingContext} tabbingContext
       *   The TabbingContext instance that has been activated.
       */
      activate(tabbingContext) {
        const $set = tabbingContext.$tabbableElements;
        const level = tabbingContext.level;
        // Determine which elements are reachable via tabbing by default.
        const $disabledSet = $(tabbable(document.body))
          // Exclude elements of the active tabbing set.
          .not($set);
        // Set the disabled set on the tabbingContext.
        tabbingContext.$disabledElements = $disabledSet;
        // Record the tabindex for each element, so we can restore it later.
        const il = $disabledSet.length;
        for (let i = 0; i < il; i++) {
          this.recordTabindex($disabledSet.eq(i), level);
        }
        // Make all tabbable elements outside of the active tabbing set
        // unreachable.
        $disabledSet.prop('tabindex', -1).prop('autofocus', false);

        // Set focus on an element in the tabbingContext's set of tabbable
        // elements. First, check if there is an element with an autofocus
        // attribute. Select the last one from the DOM order.
        let $hasFocus = $set.filter('[autofocus]').eq(-1);
        // If no element in the tabbable set has an autofocus attribute, select
        // the first element in the set.
        if ($hasFocus.length === 0) {
          $hasFocus = $set.eq(0);
        }
        $hasFocus.trigger('focus');

        // Trap focus within the set.
        if ($set.length && tabbingContext.trapFocus) {
          $set.last().on('keydown.focus-trap', (event) => {
            if (event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              $set.first().focus();
            }
          });
          $set.first().on('keydown.focus-trap', (event) => {
            if (event.key === 'Tab' && event.shiftKey) {
              event.preventDefault();
              $set.last().focus();
            }
          });
        }
      },

      /**
       * Restores that tabbable state of a tabbingContext's disabled elements.
       *
       * Elements that were made untabbable have their original tabindex and
       * autofocus values restored.
       *
       * @param {Drupal~TabbingContext} tabbingContext
       *   The TabbingContext instance that has been deactivated.
       */
      deactivate(tabbingContext) {
        const $set = tabbingContext.$disabledElements;
        const level = tabbingContext.level;
        const il = $set.length;

        tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
        tabbingContext.$tabbableElements.last().off('keydown.focus-trap');
        for (let i = 0; i < il; i++) {
          this.restoreTabindex($set.eq(i), level);
        }
      },

      /**
       * Records the tabindex and autofocus values of an untabbable element.
       *
       * @param {jQuery} $el
       *   The set of elements that have been disabled.
       * @param {number} level
       *   The stack level for which the tabindex attribute should be recorded.
       */
      recordTabindex($el, level) {
        const tabInfo = $el.data('drupalOriginalTabIndices') || {};
        tabInfo[level] = {
          tabindex: $el[0].getAttribute('tabindex'),
          autofocus: $el[0].hasAttribute('autofocus'),
        };
        $el.data('drupalOriginalTabIndices', tabInfo);
      },

      /**
       * Restores the tabindex and autofocus values of a reactivated element.
       *
       * @param {jQuery} $el
       *   The element that is being reactivated.
       * @param {number} level
       *   The stack level for which the tabindex attribute should be restored.
       */
      restoreTabindex($el, level) {
        const tabInfo = $el.data('drupalOriginalTabIndices');
        if (tabInfo && tabInfo[level]) {
          const data = tabInfo[level];
          if (data.tabindex) {
            $el[0].setAttribute('tabindex', data.tabindex);
          }
          // If the element did not have a tabindex at this stack level then
          // remove it.
          else {
            $el[0].removeAttribute('tabindex');
          }
          if (data.autofocus) {
            $el[0].setAttribute('autofocus', 'autofocus');
          }

          // Clean up $.data.
          if (level === 0) {
            // Remove all data.
            $el.removeData('drupalOriginalTabIndices');
          } else {
            // Remove the data for this stack level and higher.
            let levelToDelete = level;
            while (tabInfo.hasOwnProperty(levelToDelete)) {
              delete tabInfo[levelToDelete];
              levelToDelete++;
            }
            $el.data('drupalOriginalTabIndices', tabInfo);
          }
        }
      },
    },
  );

  /**
   * Add public methods to the TabbingContext class.
   */
  $.extend(
    TabbingContext.prototype,
    /** @lends Drupal~TabbingContext# */ {
      /**
       * Releases this TabbingContext.
       *
       * Once a TabbingContext object is released, it can never be activated
       * again.
       *
       * @fires event:drupalTabbingContextReleased
       */
      release() {
        if (!this.released) {
          this.deactivate();
          this.released = true;
          Drupal.tabbingManager.release(this);
          // Allow modules to respond to the tabbingContext release event.
          $(document).trigger('drupalTabbingContextReleased', this);
        }
      },

      /**
       * Activates this TabbingContext.
       *
       * @fires event:drupalTabbingContextActivated
       */
      activate() {
        // A released TabbingContext object can never be activated again.
        if (!this.active && !this.released) {
          this.active = true;
          Drupal.tabbingManager.activate(this);
          // Allow modules to respond to the constrain event.
          $(document).trigger('drupalTabbingContextActivated', this);
        }
      },

      /**
       * Deactivates this TabbingContext.
       *
       * @fires event:drupalTabbingContextDeactivated
       */
      deactivate() {
        if (this.active) {
          this.active = false;
          Drupal.tabbingManager.deactivate(this);
          // Allow modules to respond to the constrain event.
          $(document).trigger('drupalTabbingContextDeactivated', this);
        }
      },
    },
  );

  // Mark this behavior as processed on the first pass and return if it is
  // already processed.
  if (Drupal.tabbingManager) {
    return;
  }

  /**
   * @type {Drupal~TabbingManager}
   */
  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);
;
/**
 * @file
 * Attaches behaviors for the Contextual module's edit toolbar tab.
 */

(function ($, Drupal, Backbone) {
  const strings = {
    tabbingReleased: Drupal.t(
      'Tabbing is no longer constrained by the Contextual module.',
    ),
    tabbingConstrained: Drupal.t(
      'Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.',
    ),
    pressEsc: Drupal.t('Press the esc key to exit.'),
  };

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {HTMLElement} context
   *   A contextual links DOM element as rendered by the server.
   */
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    const contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel(
      {
        // Checks whether localStorage indicates we should start in edit mode
        // rather than view mode.
        // @see Drupal.contextualToolbar.VisualView.persist
        isViewing:
          localStorage.getItem('Drupal.contextualToolbar.isViewing') !==
          'false',
      },
      {
        contextualCollection: Drupal.contextual.collection,
      },
    );

    const viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings,
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  /**
   * Attaches contextual's edit toolbar tab behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches contextual toolbar behavior on a contextualToolbar-init event.
   */
  Drupal.behaviors.contextualToolbar = {
    attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    },
  };

  /**
   * Namespace for the contextual toolbar.
   *
   * @namespace
   *
   * @private
   */
  Drupal.contextualToolbar = {
    /**
     * The {@link Drupal.contextualToolbar.StateModel} instance.
     *
     * @type {?Drupal.contextualToolbar.StateModel}
     *
     * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is
     * no replacement.
     */
    model: null,
  };
})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone Model for the state of Contextual module's edit toolbar tab.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend(
    /** @lends Drupal.contextualToolbar.StateModel# */ {
      /**
       * @type {object}
       *
       * @prop {boolean} isViewing
       * @prop {boolean} isVisible
       * @prop {number} contextualCount
       * @prop {Drupal~TabbingContext} tabbingContext
       */
      defaults: /** @lends Drupal.contextualToolbar.StateModel# */ {
        /**
         * Indicates whether the toggle is currently in "view" or "edit" mode.
         *
         * @type {boolean}
         */
        isViewing: true,

        /**
         * Indicates whether the toggle should be visible or hidden. Automatically
         * calculated, depends on contextualCount.
         *
         * @type {boolean}
         */
        isVisible: false,

        /**
         * Tracks how many contextual links exist on the page.
         *
         * @type {number}
         */
        contextualCount: 0,

        /**
         * A TabbingContext object as returned by {@link Drupal~TabbingManager}:
         * the set of tabbable elements when edit mode is enabled.
         *
         * @type {?Drupal~TabbingContext}
         */
        tabbingContext: null,
      },

      /**
       * Models the state of the edit mode toggle.
       *
       * @constructs
       *
       * @augments Backbone.Model
       *
       * @param {object} attrs
       *   Attributes for the backbone model.
       * @param {object} options
       *   An object with the following option:
       * @param {Backbone.collection} options.contextualCollection
       *   The collection of {@link Drupal.contextual.StateModel} models that
       *   represent the contextual links on the page.
       */
      initialize(attrs, options) {
        // Respond to new/removed contextual links.
        this.listenTo(
          options.contextualCollection,
          'reset remove add',
          this.countContextualLinks,
        );
        this.listenTo(
          options.contextualCollection,
          'add',
          this.lockNewContextualLinks,
        );

        // Automatically determine visibility.
        this.listenTo(this, 'change:contextualCount', this.updateVisibility);

        // Whenever edit mode is toggled, lock all contextual links.
        this.listenTo(this, 'change:isViewing', (model, isViewing) => {
          options.contextualCollection.each((contextualModel) => {
            contextualModel.set('isLocked', !isViewing);
          });
        });
      },

      /**
       * Tracks the number of contextual link models in the collection.
       *
       * @param {Drupal.contextual.StateModel} contextualModel
       *   The contextual links model that was added or removed.
       * @param {Backbone.Collection} contextualCollection
       *    The collection of contextual link models.
       */
      countContextualLinks(contextualModel, contextualCollection) {
        this.set('contextualCount', contextualCollection.length);
      },

      /**
       * Lock newly added contextual links if edit mode is enabled.
       *
       * @param {Drupal.contextual.StateModel} contextualModel
       *   The contextual links model that was added.
       * @param {Backbone.Collection} [contextualCollection]
       *    The collection of contextual link models.
       */
      lockNewContextualLinks(contextualModel, contextualCollection) {
        if (!this.get('isViewing')) {
          contextualModel.set('isLocked', true);
        }
      },

      /**
       * Automatically updates visibility of the view/edit mode toggle.
       */
      updateVisibility() {
        this.set('isVisible', this.get('contextualCount') > 0);
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of the edit mode toggle.
 */

(function ($, Drupal, Backbone, _) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.AuralView = Backbone.View.extend(
    /** @lends Drupal.contextualToolbar.AuralView# */ {
      /**
       * Tracks whether the tabbing constraint announcement has been read once.
       *
       * @type {boolean}
       */
      announcedOnce: false,

      /**
       * Renders the aural view of the edit mode toggle (screen reader support).
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view.
       */
      initialize(options) {
        this.options = options;

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

        $(document).on('keyup', _.bind(this.onKeypress, this));
        this.manageTabbing();
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextualToolbar.AuralView}
       *   The current contextual toolbar aural view.
       */
      render() {
        // Render the state.
        this.$el
          .find('button')
          .attr('aria-pressed', !this.model.get('isViewing'));

        return this;
      },

      /**
       * Limits tabbing to the contextual links and edit mode toolbar tab.
       */
      manageTabbing() {
        let tabbingContext = this.model.get('tabbingContext');
        // Always release an existing tabbing context.
        if (tabbingContext) {
          // Only announce release when the context was active.
          if (tabbingContext.active) {
            Drupal.announce(this.options.strings.tabbingReleased);
          }
          tabbingContext.release();
        }
        // Create a new tabbing context when edit mode is enabled.
        if (!this.model.get('isViewing')) {
          tabbingContext = Drupal.tabbingManager.constrain(
            $('.contextual-toolbar-tab, .contextual'),
          );
          this.model.set('tabbingContext', tabbingContext);
          this.announceTabbingConstraint();
          this.announcedOnce = true;
        }
      },

      /**
       * Announces the current tabbing constraint.
       */
      announceTabbingConstraint() {
        const strings = this.options.strings;
        Drupal.announce(
          Drupal.formatString(strings.tabbingConstrained, {
            '@contextualsCount': Drupal.formatPlural(
              Drupal.contextual.collection.length,
              '@count contextual link',
              '@count contextual links',
            ),
          }),
        );
        Drupal.announce(strings.pressEsc);
      },

      /**
       * Responds to esc and tab key press events.
       *
       * @param {jQuery.Event} event
       *   The keypress event.
       */
      onKeypress(event) {
        // The first tab key press is tracked so that an announcement about
        // tabbing constraints can be raised if edit mode is enabled when the page
        // is loaded.
        if (
          !this.announcedOnce &&
          event.keyCode === 9 &&
          !this.model.get('isViewing')
        ) {
          this.announceTabbingConstraint();
          // Set announce to true so that this conditional block won't run again.
          this.announcedOnce = true;
        }
        // Respond to the ESC key. Exit out of edit mode.
        if (event.keyCode === 27) {
          this.model.set('isViewing', true);
        }
      },
    },
  );
})(jQuery, Drupal, Backbone, _);
;
/**
 * @file
 * A Backbone View that provides the visual view of the edit mode toggle.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.VisualView = Backbone.View.extend(
    /** @lends Drupal.contextualToolbar.VisualView# */ {
      /**
       * Events for the Backbone view.
       *
       * @return {object}
       *   A mapping of events to be used in the view.
       */
      events() {
        // Prevents delay and simulated mouse events.
        const touchEndToClick = function (event) {
          event.preventDefault();
          event.target.click();
        };

        return {
          click() {
            this.model.set('isViewing', !this.model.get('isViewing'));
          },
          touchend: touchEndToClick,
        };
      },

      /**
       * Renders the visual view of the edit mode toggle.
       *
       * Listens to mouse & touch and handles edit mode toggle interactions.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change:isViewing', this.persist);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextualToolbar.VisualView}
       *   The current contextual toolbar visual view.
       */
      render() {
        // Render the visibility.
        this.$el.toggleClass('hidden', !this.model.get('isVisible'));
        // Render the state.
        this.$el
          .find('button')
          .toggleClass('is-active', !this.model.get('isViewing'));

        return this;
      },

      /**
       * Model change handler; persists the isViewing value to localStorage.
       *
       * `isViewing === true` is the default, so only stores in localStorage when
       * it's not the default value (i.e. false).
       *
       * @param {Drupal.contextualToolbar.StateModel} model
       *   A {@link Drupal.contextualToolbar.StateModel} model.
       * @param {boolean} isViewing
       *   The value of the isViewing attribute in the model.
       */
      persist(model, isViewing) {
        if (!isViewing) {
          localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
        } else {
          localStorage.removeItem('Drupal.contextualToolbar.isViewing');
        }
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * Replaces the home link in toolbar with a back to site link.
 */

(function ($, Drupal, drupalSettings) {
  const pathInfo = drupalSettings.path;
  const escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  const windowLocation = window.location;

  // Saves the last non-administrative page in the browser to be able to link
  // back to it when browsing administrative pages. If there is a destination
  // parameter there is not need to save the current path because the page is
  // loaded within an existing "workflow".
  if (
    !pathInfo.currentPathIsAdmin &&
    !/destination=/.test(windowLocation.search)
  ) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  /**
   * Replaces the "Home" link with "Back to site" link.
   *
   * Back to site link points to the last non-administrative page the user
   * visited within the same browser tab.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the replacement functionality to the toolbar-escape-admin element.
   */
  Drupal.behaviors.escapeAdmin = {
    attach() {
      const toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');
      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Renders BigPipe placeholders using Drupal's Ajax system.
 */

(function (Drupal, drupalSettings) {
  /**
   * Maps textContent of <script type="application/vnd.drupal-ajax"> to an AJAX response.
   *
   * @param {string} content
   *   The text content of a <script type="application/vnd.drupal-ajax"> DOM node.
   * @return {Array|boolean}
   *   The parsed Ajax response containing an array of Ajax commands, or false in
   *   case the DOM node hasn't fully arrived yet.
   */
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  /**
   * Executes Ajax commands in <script type="application/vnd.drupal-ajax"> tag.
   *
   * These Ajax commands replace placeholders with HTML and load missing CSS/JS.
   *
   * @param {HTMLScriptElement} placeholderReplacement
   *   Script tag created by BigPipe.
   */
  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    const placeholderId = placeholderReplacement.getAttribute(
      'data-big-pipe-replacement-for-placeholder-with-id',
    );
    const content = placeholderReplacement.textContent.trim();
    // Ignore any placeholders that are not in the known placeholder list. Used
    // to avoid someone trying to XSS the site via the placeholdering mechanism.
    if (
      typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined'
    ) {
      const response = mapTextContentToAjaxResponse(content);
      // If we try to parse the content too early (when the JSON containing Ajax
      // commands is still arriving), textContent will be empty or incomplete.
      if (response === false) {
        /**
         * Mark as unprocessed so this will be retried later.
         * @see bigPipeProcessDocument()
         */
        once.remove('big-pipe', placeholderReplacement);
      } else {
        // Create a Drupal.Ajax object without associating an element, a
        // progress indicator or a URL.
        const ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false,
        });
        // Then, simulate an AJAX response having arrived, and let the Ajax
        // system handle it.
        ajaxObject.success(response, 'success');
      }
    }
  }

  // The frequency with which to check for newly arrived BigPipe placeholders.
  // Hence 50 ms means we check 20 times per second. Setting this to 100 ms or
  // more would cause the user to see content appear noticeably slower.
  const interval = drupalSettings.bigPipeInterval || 50;

  // The internal ID to contain the watcher service.
  let timeoutID;

  /**
   * Processes a streamed HTML document receiving placeholder replacements.
   *
   * @param {HTMLDocument} context
   *   The HTML document containing <script type="application/vnd.drupal-ajax">
   *   tags generated by BigPipe.
   *
   * @return {bool}
   *   Returns true when processing has been finished and a stop signal has been
   *   found.
   */
  function bigPipeProcessDocument(context) {
    // Make sure we have BigPipe-related scripts before processing further.
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    // Attach Drupal behaviors early, if possible.
    once('big-pipe-early-behaviors', 'body', context).forEach((el) => {
      Drupal.attachBehaviors(el);
    });

    once(
      'big-pipe',
      'script[data-big-pipe-replacement-for-placeholder-with-id]',
      context,
    ).forEach(bigPipeProcessPlaceholderReplacement);

    // If we see the stop signal, clear the timeout: all placeholder
    // replacements are guaranteed to be received and processed.
    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(() => {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();

  // If something goes wrong, make sure everything is cleaned up and has had a
  // chance to be processed with everything loaded.
  window.addEventListener('load', () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);
;
