(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{321:function(t,n,e){"use strict";e.r(n),e.d(n,"startInputShims",function(){return m});var o=e(299),r=new WeakMap;function i(t,n,e,o){void 0===o&&(o=0),r.has(t)!==e&&(e?function(t,n,e){var o=n.parentNode,i=n.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(t,i);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",n.style.transform="translate3d("+a+"px,"+e+"px,0) scale(0)"}(t,n,o):function(t,n){var e=r.get(t);e&&(r.delete(t),e.remove()),t.style.pointerEvents="",n.style.transform=""}(t,n))}function a(t){return t===t.getRootNode().activeElement}var u="input, textarea, [no-blur]";var c=.3;function s(t,n,e){return function(t,n,e,o){var r=t.top,i=t.bottom,a=n.top+15,u=.5*Math.min(n.bottom,o-e)-i,s=a-r,l=Math.round(u<0?-u:s>0?-s:0),d=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,d/c)),scrollPadding:e,inputSafeY:4-(r-a)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),n.getBoundingClientRect(),e,t.ownerDocument.defaultView.innerHeight)}function l(t,n,e,r){var u,c=function(t){u=Object(o.j)(t)},l=function(c){if(u){var l=Object(o.j)(c);(function(t,n,e){if(n&&e){var o=n.x-e.x,r=n.y-e.y;return o*o+r*r>t*t}return!1})(6,u,l)||a(n)||(c.preventDefault(),c.stopPropagation(),function(t,n,e,o){var r=s(t,e,o);Math.abs(r.scrollAmount)<4?n.focus():(i(t,n,!0,r.inputSafeY),n.focus(),e.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){i(t,n,!1,r.inputSafeY),n.focus()}))}(t,n,e,r))}};return t.addEventListener("touchstart",c,!0),t.addEventListener("touchend",l,!0),function(){t.removeEventListener("touchstart",c,!0),t.removeEventListener("touchend",l,!0)}}var d="$ionPaddingTimer";function f(t,n){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var e=t.closest("ion-content");if(null!==e){var o=e[d];o&&clearTimeout(o),n>0?e.style.setProperty("--keyboard-offset",n+"px"):e[d]=setTimeout(function(){e.style.setProperty("--keyboard-offset","0px")},120)}}}var v=!0,p=!0;function m(t,n){var e=n.getNumber("keyboardHeight",290),o=n.getBoolean("scrollAssist",!0),r=n.getBoolean("hideCaretOnScroll",!0),c=n.getBoolean("inputBlurring",!0),s=n.getBoolean("scrollPadding",!0),d=new WeakMap,m=new WeakMap;function g(t){var n=(t.shadowRoot||t).querySelector("input"),u=t.closest("ion-content");if(n){if(u&&r&&!d.has(t)){var c=function(t,n,e){if(!e||!n)return function(){};var o=function(e){a(n)&&i(t,n,e)},r=function(){return i(t,n,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return e.addEventListener("ionScrollStart",u),e.addEventListener("ionScrollEnd",c),n.addEventListener("blur",r),function(){e.removeEventListener("ionScrollStart",u),e.removeEventListener("ionScrollEnd",c),n.addEventListener("ionBlur",r)}}(t,n,u);d.set(t,c)}u&&o&&!m.has(t)&&(c=l(t,n,u,e),m.set(t,c))}}c&&v&&function(t){var n=!0,e=!1;function o(){e=!0}function r(){n=!0}function i(o){if(e)e=!1;else{var r=t.activeElement;if(r&&!r.matches(u)){var i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(n=!1,setTimeout(function(){n||r.blur()},50)))}}}t.addEventListener("ionScrollStart",o),t.addEventListener("focusin",r,!0),t.addEventListener("touchend",i,!1)}(t),s&&p&&function(t,n){function e(t){f(t.target,n)}function o(t){f(t.target,0)}t.addEventListener("focusin",e),t.addEventListener("focusout",o)}(t,e);for(var h=0,E=Array.from(t.querySelectorAll("ion-input"));h<E.length;h++)g(E[h]);t.body.addEventListener("ionInputDidLoad",function(t){g(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var n,e;n=t.target,r&&((e=d.get(n))&&e(),d.delete(n)),o&&((e=m.get(n))&&e(),m.delete(n))})}}}]);