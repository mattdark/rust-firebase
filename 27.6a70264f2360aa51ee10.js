(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{167:function(t,e,n){"use strict";n.r(e),n.d(e,"IonRoute",function(){return c}),n.d(e,"IonRouteRedirect",function(){return s}),n.d(e,"IonRouter",function(){return j}),n.d(e,"IonRouterOutlet",function(){return L});var r=n(297),i=n(3),o=n(299),a=n(307),u=(n(305),n(308)),c=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var i=0,o=n;i<o.length;i++){var a=o[i];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),l="root",h="forward";function d(t){return"/"+t.filter(function(t){return t.length>0}).join("/")}function f(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e}function p(t,e,n,i,o){return void 0===o&&(o=!1),r.a(this,void 0,void 0,function(){var a,u,c,s;return r.c(this,function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),a=b(t),i>=e.length||!a?[2,o]:[4,a.componentOnReady()];case 1:return r.sent(),[4,a.setRouteId((u=e[i]).id,u.params,n)];case 2:return(c=r.sent()).changed&&(n=l,o=!0),[4,p(c.element,e,n,i+1,o)];case 3:return o=r.sent(),c.markVisible?[4,c.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,o];case 6:return s=r.sent(),console.error(s),[2,!1];case 7:return[2]}})})}function v(t){return r.a(this,void 0,void 0,function(){var e,n,i,o;return r.c(this,function(r){switch(r.label){case 0:e=[],i=t,r.label=1;case 1:return(n=b(i))?[4,n.getRouteId()]:[3,3];case 2:return(o=r.sent())?(i=o.element,o.element=void 0,e.push(o),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}})})}function m(t){return b(t.document.body)?Promise.resolve():new Promise(function(e){t.addEventListener("ionNavWillLoad",e,{once:!0})})}var g=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function b(t){if(t)return t.matches(g)?t:t.querySelector(g)||void 0}function w(t,e){return e.find(function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var i=n[r];if("*"===i)return!0;if(i!==t[r])return!1}return n.length===t.length}(t,e)})}function y(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r}function C(t,e){for(var n,r=new P(t),i=!1,o=0;o<e.length;o++){var a=e[o].path;if(""===a[0])i=!0;else{for(var u=0,c=a;u<c.length;u++){var s=c[u],l=r.next();if(":"===s[0]){if(""===l)return null;((n=n||[])[o]||(n[o]={}))[s.slice(1)]=l}else if(l!==s)return null}i=!1}}return i&&i!==(""===r.next())?null:n?e.map(function(t,e){return{id:t.id,path:t.path,params:R(t.params,n[e])}}):e}function R(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function E(t){for(var e=1,n=1,r=0,i=t;r<i.length;r++)for(var o=0,a=i[r].path;o<a.length;o++){var u=a[o];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e}var P=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}();function O(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=S(t,"to");return{from:f(S(t,"from")),to:null==e?void 0:f(e)}})}function k(t){return function(t){for(var e=[],n=0,r=t;n<r.length;n++)D([],e,r[n]);return e}(function t(e,n){return void 0===n&&(n=e),Array.from(n.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(n){var r=S(n,"component");if(null==r)throw new Error("component missing in ion-route");return{path:f(S(n,"url")),id:r.toLowerCase(),params:n.componentProps,children:t(e,n)}})}(t))}function S(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function D(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var i=0,o=n.children;i<o.length;i++)D(r,e,o[i]);else e.push(r)}var j=function(){function t(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return r.a(this,void 0,void 0,function(){return r.c(this,function(t){switch(t.label){case 0:return[4,m(this.win)];case 1:return t.sent(),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}})})},t.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",Object(o.i)(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",Object(o.i)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.back()})},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,this.win.location.href).pathname);var n=f(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.back=function(){return this.win.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){this.getPath(),function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});d(e),n.join(", ")},n=0,r=t;n<r.length;n++)e(r[n]);console.groupEnd()}(k(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&(d(r.from),d(r.to))}console.groupEnd()}(O(this.el))},t.prototype.navChanged=function(t){return r.a(this,void 0,void 0,function(){var e,n,i,o,a,u;return r.c(this,function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,v(this.win.document.body)];case 1:return e=r.sent(),n=e.ids,i=e.outlet,o=k(this.el),(a=function(t,e){for(var n=null,r=0,i=t.map(function(t){return t.id}),o=0,a=e;o<a.length;o++){var u=a[o],c=y(i,u);c>r&&(n=u,r=c)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:R(e.params,t[n]&&t[n].params)}}):null}(n,o))?(u=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var i=r[n],o=0,a=i.path;o<a.length;o++){var u=a[o];if(":"===u[0]){var c=i.params&&i.params[u.slice(1)];if(!c)return null;e.push(c)}else""!==u&&e.push(u)}return e}(a))?(this.setPath(u,t),[4,this.safeWriteNavState(i,a,l,u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]);case 2:return r.sent(),[2,!0]}})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&w(t,O(this.el))&&this.writeNavStateRoot(t,l)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),l)},t.prototype.historyDirection=function(){var t=this.win;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n?h:e<n?"back":l},t.prototype.writeNavStateRoot=function(t,e){return r.a(this,void 0,void 0,function(){var n,i,o,a,u;return r.c(this,function(r){return t?(n=O(this.el),i=w(t,n),o=null,i&&(this.setPath(i.to,e),o=i.from,t=i.to),a=k(this.el),(u=function(t,e){for(var n=null,r=0,i=0,o=e;i<o.length;i++){var a=C(t,o[i]);if(null!==a){var u=E(a);u>r&&(r=u,n=a)}}return n}(t,a))?[2,this.safeWriteNavState(this.win.document.body,u,e,t,o)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,e,n,i,o,a){return void 0===a&&(a=0),r.a(this,void 0,void 0,function(){var u,c,s;return r.c(this,function(r){switch(r.label){case 0:return[4,this.lock()];case 1:u=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,i,o,a)];case 3:return c=r.sent(),[3,5];case 4:return s=r.sent(),console.error(s),[3,5];case 5:return u(),[2,c]}})})},t.prototype.lock=function(){return r.a(this,void 0,void 0,function(){var t,e;return r.c(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.writeNavState=function(t,e,n,i,o,a){return void 0===a&&(a=0),r.a(this,void 0,void 0,function(){var u,c;return r.c(this,function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(u=this.routeChangeEvent(i,o))&&this.ionRouteWillChange.emit(u),[4,p(t,e,n,a)]);case 1:return c=r.sent(),this.busy=!1,u&&this.ionRouteDidChange.emit(u),[2,c]}})})},t.prototype.setPath=function(t,e){this.state++,function(t,e,n,r,i,o){var a=d(f(e).concat(r));n&&(a="#"+a),i===h?t.pushState(o,"",a):t.replaceState(o,"",a)}(this.win.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return function(t,e,n){var r=t.pathname;if(n){var i=t.hash;r="#"===i[0]?i.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(f(e),f(r))}(this.win.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=d(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?d(e):null,to:r}},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{back:{method:!0},config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]},enumerable:!0,configurable:!0}),t}(),L=function(){function t(){this.animated=!0}return t.prototype.swipeHandlerChanged=function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)},t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return r.a(this,void 0,void 0,function(){var t,e=this;return r.c(this,function(r){switch(r.label){case 0:return t=this,[4,n.e(3).then(n.bind(null,323))];case 1:return t.gesture=r.sent().createSwipeBackGesture(this.el,this.queue,function(){return!!e.swipeHandler&&e.swipeHandler.canStart()},function(){return e.swipeHandler&&e.swipeHandler.onStart()},function(t){return e.ani&&e.ani.progressStep(t)},function(t,n,r){e.ani&&e.ani.progressEnd(t,n,r),e.swipeHandler&&e.swipeHandler.onEnd(t)}),this.swipeHandlerChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.commit=function(t,e,n){return r.a(this,void 0,void 0,function(){var i,o,a;return r.c(this,function(r){switch(r.label){case 0:return[4,this.lock()];case 1:i=r.sent(),o=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.transition(t,e,n)];case 3:return o=r.sent(),[3,5];case 4:return a=r.sent(),console.error(a),[3,5];case 5:return i(),[2,o]}})})},t.prototype.setRouteId=function(t,e,n){return r.a(this,void 0,void 0,function(){return r.c(this,function(r){switch(r.label){case 0:return[4,this.setRoot(t,e,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"})];case 1:return[2,{changed:r.sent(),element:this.activeEl}]}})})},t.prototype.getRouteId=function(){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(e){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]})})},t.prototype.setRoot=function(t,e,n){return r.a(this,void 0,void 0,function(){var i,o;return r.c(this,function(r){switch(r.label){case 0:return this.activeComponent===t?[2,!1]:(i=this.activeEl,[4,Object(a.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)]);case 1:return o=r.sent(),this.activeComponent=t,this.activeEl=o,[4,this.commit(o,i,n)];case 2:return r.sent(),[4,Object(a.b)(this.delegate,i)];case 3:return r.sent(),[2,!0]}})})},t.prototype.transition=function(t,e,n){return void 0===n&&(n={}),r.a(this,void 0,void 0,function(){var i,o,a,c,s,l,h,d=this;return r.c(this,function(r){switch(r.label){case 0:return e===t?[2,!1]:(this.ionNavWillChange.emit(),o=(i=this).mode,a=i.queue,c=i.win,s=i.el,l=this.animated&&this.config.getBoolean("animated",!0),h=this.animation||n.animationBuilder||this.config.get("navAnimation"),[4,Object(u.c)(Object.assign({mode:o,queue:a,animated:l,animationBuilder:h,window:c,enteringEl:t,leavingEl:e,baseEl:s,progressCallback:n.progressAnimation?function(t){return d.ani=t}:void 0},n))]);case 1:return r.sent(),this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.lock=function(){return r.a(this,void 0,void 0,function(){var t,e;return r.c(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.render=function(){return Object(i.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},setRouteId:{method:!0},swipeHandler:{type:"Any",attr:"swipe-handler",watchCallbacks:["swipeHandlerChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}()},297:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return a});
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
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})}function a(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}},299:function(t,e,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function a(t,e,n,r,o){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=o,a.name=n,a.value=r||""}}function u(t,e,n){return Math.max(t,Math.min(e,n))}function c(t){return t.timeStamp||Date.now()}function s(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function h(t,e){var n=t._original||t;return{_original:t,emit:d(n.emit.bind(n),e)}}function d(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return h}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return d}),n.d(e,"j",function(){return s})},305:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return u});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",a="ionViewDidLeave",u="ionViewWillUnload"},307:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n(297);function i(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function o(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},308:function(t,e,n){"use strict";n.d(e,"a",function(){return w}),n.d(e,"b",function(){return g}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return y});var r=n(297),i=n(305),o=function(){return n.e(196).then(n.bind(null,310))},a=function(){return n.e(197).then(n.bind(null,311))};function u(t){return new Promise(function(e,n){t.queue.write(function(){(function(t){var e=t.enteringEl,n=t.leavingEl;(function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),y(e,!1),n&&y(n,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return[4,s(t)];case 1:return[2,(e=n.sent())?l(e,t):h(t)]}})})}(t).then(function(n){n.animation&&n.animation.destroy(),c(t),e(n)},function(e){c(t),n(e)})})})}function c(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function s(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})}function l(t,e){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,d(e,!0)];case 1:return r.sent(),[4,n.e(2).then(n.bind(null,304)).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),v(e.enteringEl,e.leavingEl),[4,p(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&m(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function h(t){return r.a(this,void 0,void 0,function(){var e,n;return r.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,d(t,!1)];case 1:return r.sent(),v(e,n),m(e,n),[2,{hasCompleted:!0}]}})})}function d(t,e){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[w(t.enteringEl),w(t.leavingEl)]:[b(t.enteringEl),b(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,f(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function f(t,e){return r.a(this,void 0,void 0,function(){return r.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function p(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r}function v(t,e){g(e,i.a),g(t,i.b)}function m(t,e){g(t,i.c),g(e,i.d)}function g(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function b(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function w(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(w))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function y(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}}}]);