(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{297:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return o}),r.d(t,"c",function(){return a});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function o(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})}function a(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},298:function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return c}),r.d(t,"c",function(){return o}),r.d(t,"d",function(){return i}),r.d(t,"e",function(){return a});var n=r(297);function i(e,t){return null!==t.closest(e)}function o(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0}function a(e,t){var r;return(r={})[t]=!0,r[t+"-"+e]=void 0!==e,r}function s(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}(e).forEach(function(e){return t[e]=!0}),t}var l=/^[a-z][a-z0-9+\-.]*:/;function c(e,t,r,i){return n.a(this,void 0,void 0,function(){var o;return n.c(this,function(n){switch(n.label){case 0:return null==t||"#"===t[0]||l.test(t)?[3,2]:(o=e.document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return n.sent(),[2,o.push(t,i)];case 2:return[2,!1]}})})}},302:function(e,t,r){"use strict";r.d(t,"a",function(){return f}),r.d(t,"b",function(){return b}),r.d(t,"c",function(){return l}),r.d(t,"d",function(){return c}),r.d(t,"e",function(){return p}),r.d(t,"f",function(){return o}),r.d(t,"g",function(){return a}),r.d(t,"h",function(){return s});var n=r(297),i=0;function o(e,t){var r=e.ownerDocument;(function(e){0===i&&(i=1,e.addEventListener("focusin",function(t){var r=s(e);if(r&&r.backdropDismiss&&!function(e,t){for(;t;){if(t===e)return!0;t=t.parentElement}return!1}(r,t.target)){var n=r.querySelector("input,button");n&&n.focus()}}),e.addEventListener("ionBackButton",function(t){var r=s(e);r&&r.backdropDismiss&&t.detail.register(100,function(){return r.dismiss(void 0,f)})}),e.addEventListener("keyup",function(t){if("Escape"===t.key){var r=s(e);r&&r.backdropDismiss&&r.dismiss(void 0,f)}}))})(r),Object.assign(e,t),e.classList.add("overlay-hidden");var n=i++;return e.overlayIndex=n,e.hasAttribute("id")||(e.id="ion-overlay-"+n),d(r).appendChild(e),e.componentOnReady()}function a(e,t,r,n,i){var o=s(e,n,i);return o?o.dismiss(t,r):Promise.reject("overlay does not exist")}function s(e,t,r){var n=function(e,t){var r=Array.from(d(e).children).filter(function(e){return e.overlayIndex>0});return void 0===t?r:(t=t.toUpperCase(),r.filter(function(e){return e.tagName===t}))}(e,t);return void 0===r?n[n.length-1]:n.find(function(e){return e.id===r})}function l(e,t,r,i,o){return n.a(this,void 0,void 0,function(){var a;return n.c(this,function(n){switch(n.label){case 0:return e.presented?[2]:(e.presented=!0,e.willPresent.emit(),a=e.enterAnimation?e.enterAnimation:e.config.get(t,"ios"===e.mode?r:i),[4,u(e,a,e.el,o)]);case 1:return n.sent()&&e.didPresent.emit(),[2]}})})}function c(e,t,r,i,o,a,s){return n.a(this,void 0,void 0,function(){var l,c;return n.c(this,function(n){switch(n.label){case 0:if(!e.presented)return[2,!1];e.presented=!1,n.label=1;case 1:return n.trys.push([1,3,,4]),e.willDismiss.emit({data:t,role:r}),l=e.leaveAnimation?e.leaveAnimation:e.config.get(i,"ios"===e.mode?o:a),[4,u(e,l,e.el,s)];case 2:return n.sent(),e.didDismiss.emit({data:t,role:r}),[3,4];case 3:return c=n.sent(),console.error(c),[3,4];case 4:return e.el.remove(),[2,!0]}})})}function d(e){return e.querySelector("ion-app")||e.body}function u(e,t,i,o){return n.a(this,void 0,void 0,function(){var a,s,l,c;return n.c(this,function(n){switch(n.label){case 0:return e.animation?(e.animation.destroy(),e.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),a=i.shadowRoot||e.el,l=e,[4,r.e(2).then(r.bind(null,304)).then(function(e){return e.create(t,a,o)})]);case 1:return s=l.animation=n.sent(),e.animation=s,e.animated&&e.config.getBoolean("animated",!0)||s.duration(0),e.keyboardClose&&s.beforeAddWrite(function(){var e=i.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),[4,s.playAsync()];case 2:return n.sent(),c=s.hasCompleted,s.destroy(),e.animation=void 0,[2,c]}})})}function p(e,t){var r,n=new Promise(function(e){return r=e});return function(e,t,r){var n=function(i){e.removeEventListener(t,n),r(i)};e.addEventListener(t,n)}(e,t,function(e){r(e.detail)}),n}function b(e){return"cancel"===e||e===f}var f="backdrop"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"IonAlert",function(){return u}),r.d(t,"IonAlertController",function(){return b});var n=r(297),i=r(3),o=r(302),a=r(298);function s(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.01,.3),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var o=r.addElement(t).easing("ease-in-out").duration(200).add(n).add(i);return Promise.resolve(o)}function l(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.3,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9);var o=r.addElement(t).easing("ease-in-out").duration(200).add(n).add(i);return Promise.resolve(o)}function c(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;return i.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.01,.32),i.fromTo("opacity",.01,1).fromTo("scale",.9,1),Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(n).add(i))}function d(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;return i.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.32,0),i.fromTo("opacity",.99,0),Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(n).add(i))}var u=function(){function e(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return e.prototype.buttonsChanged=function(){this.processedButtons=this.buttons.map(function(e){return"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e})},e.prototype.inputsChanged=function(){var e=this,t=this.inputs,r=new Set(t.map(function(e){return e.type}));r.has("checkbox")&&r.has("radio")&&console.warn("Alert cannot mix input types: "+Array.from(r.values()).join("/")+". Please see alert docs for more info."),this.inputType=r.values().next().value,this.processedInputs=t.map(function(t,r){return{type:t.type||"text",name:t.name||""+r,placeholder:t.placeholder||"",value:t.value,label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||"alert-input-"+e.overlayIndex+"-"+r,handler:t.handler,min:t.min,max:t.max}})},e.prototype.componentWillLoad=function(){this.inputsChanged(),this.buttonsChanged()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,o.a)},e.prototype.dispatchCancelHandler=function(e){if(Object(o.b)(e.detail.role)){var t=this.processedButtons.find(function(e){return"cancel"===e.role});this.callButtonHandler(t)}},e.prototype.present=function(){return Object(o.c)(this,"alertEnter",s,c)},e.prototype.dismiss=function(e,t){return Object(o.d)(this,e,t,"alertLeave",l,d)},e.prototype.onDidDismiss=function(){return Object(o.e)(this.el,"ionAlertDidDismiss")},e.prototype.onWillDismiss=function(){return Object(o.e)(this.el,"ionAlertWillDismiss")},e.prototype.rbClick=function(e){for(var t=0,r=this.processedInputs;t<r.length;t++){var n=r[t];n.checked=n===e}this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.cbClick=function(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.buttonClick=function(e){var t=e.role,r=this.getValues();if(Object(o.b)(t))return this.dismiss({values:r},t);var n=this.callButtonHandler(e,r);return!1!==n?this.dismiss(Object.assign({values:r},n),e.role):Promise.resolve(!1)},e.prototype.callButtonHandler=function(e,t){if(e&&e.handler){var r=e.handler(t);if(!1===r)return!1;if("object"==typeof r)return r}return{}},e.prototype.getValues=function(){if(0!==this.processedInputs.length){if("radio"===this.inputType){var e=this.processedInputs.find(function(e){return!!e.checked});return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value});var t={};return this.processedInputs.forEach(function(e){t[e.name]=e.value||""}),t}},e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}},e.prototype.renderCheckbox=function(e){var t=this,r=this.processedInputs;return 0===r.length?null:Object(i.b)("div",{class:"alert-checkbox-group","aria-labelledby":e},r.map(function(e){return Object(i.b)("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":""+e.checked,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button ion-focusable"},Object(i.b)("div",{class:"alert-button-inner"},Object(i.b)("div",{class:"alert-checkbox-icon"},Object(i.b)("div",{class:"alert-checkbox-inner"})),Object(i.b)("div",{class:"alert-checkbox-label"},e.label)),"md"===t.mode&&Object(i.b)("ion-ripple-effect",null))}))},e.prototype.renderRadio=function(e){var t=this,r=this.processedInputs;return 0===r.length?null:Object(i.b)("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},r.map(function(e){return Object(i.b)("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":""+e.checked,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio ion-focusable",role:"radio"},Object(i.b)("div",{class:"alert-button-inner"},Object(i.b)("div",{class:"alert-radio-icon"},Object(i.b)("div",{class:"alert-radio-inner"})),Object(i.b)("div",{class:"alert-radio-label"},e.label)))}))},e.prototype.renderInput=function(e){var t=this.processedInputs;return 0===t.length?null:Object(i.b)("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return Object(i.b)("div",{class:"alert-input-wrapper"},Object(i.b)("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))},e.prototype.hostData=function(){return{role:"dialog","aria-modal":"true",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(a.a)(this.cssClass),{"alert-translucent":this.translucent})}},e.prototype.renderAlertButtons=function(){var e=this,t=this.processedButtons;return Object(i.b)("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map(function(t){return Object(i.b)("button",{type:"button",class:p(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},Object(i.b)("span",{class:"alert-button-inner"},t.text),"md"===e.mode&&Object(i.b)("ion-ripple-effect",null))}))},e.prototype.render=function(){var e,t="alert-"+this.overlayIndex+"-hdr",r="alert-"+this.overlayIndex+"-sub-hdr",n="alert-"+this.overlayIndex+"-msg";return void 0!==this.header?e=t:void 0!==this.subHeader&&(e=r),[Object(i.b)("ion-backdrop",{tappable:this.backdropDismiss}),Object(i.b)("div",{class:"alert-wrapper"},Object(i.b)("div",{class:"alert-head"},this.header&&Object(i.b)("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&Object(i.b)("h2",{id:r,class:"alert-sub-title"},this.subHeader)),Object(i.b)("div",{id:n,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(e),this.renderAlertButtons())]},Object.defineProperty(e,"is",{get:function(){return"ion-alert"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-top:0}.alert-sub-title.sc-ion-alert-ios, .alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar, .alert-message.sc-ion-alert-ios::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios, .alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-ios{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.alert-button-inner.sc-ion-alert-ios, .alert-tappable.sc-ion-alert-ios{display:-ms-flexbox;display:flex;width:100%}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios, .alert-checkbox.sc-ion-alert-ios, .alert-input.sc-ion-alert-ios, .alert-radio.sc-ion-alert-ios{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9));--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-translucent.sc-ion-alert-ios-h   .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:scroll;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios   .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios, [dir=rtl]   .sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios{right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}[dir=rtl].sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl]   .sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios{right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-.55px;margin-inline-end:-.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:first-child, [dir=rtl]   .sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}[dir=rtl].sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:last-child, [dir=rtl]   .sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:last-child{border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2)}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function p(e){return Object.assign({"alert-button":!0,"ion-focusable":!0,"ion-activatable":!0},Object(a.a)(e.cssClass))}var b=function(){function e(){}return e.prototype.create=function(e){return Object(o.f)(this.doc.createElement("ion-alert"),e)},e.prototype.dismiss=function(e,t,r){return Object(o.g)(this.doc,e,t,"ion-alert",r)},e.prototype.getTop=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(e){return[2,Object(o.h)(this.doc,"ion-alert")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-alert-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);