(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{232:function(e,t,i){"use strict";i.r(t),i.d(t,"DeckgoSlideSplit",function(){return s});var n=i(300),r=i(4),a=i(301),o=i(306),s=function(){function e(){this.reveal=!1,this.revealShowFirst=!1}return e.prototype.componentDidLoad=function(){return n.a(this,void 0,void 0,function(){return n.b(this,function(e){switch(e.label){case 0:return[4,a.a.hideLazyLoadImages(this.el)];case 1:return e.sent(),this.slideDidLoad.emit(),this.reveal?[4,o.a.hideRevealElements(this.el,this.revealShowFirst)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})},e.prototype.beforeSwipe=function(e){return o.a.beforeSwipe(this.el,e,this.reveal)},e.prototype.afterSwipe=function(){return o.a.afterSwipe()},e.prototype.lazyLoadContent=function(){return o.a.lazyLoadContent(this.el)},e.prototype.render=function(){return Object(r.b)("div",{class:"deckgo-slide"},Object(r.b)("slot",{name:"title"}),Object(r.b)("div",{class:"deckgo-slide-split deckgo-slide-split-start"},Object(r.b)("slot",{name:"start"})),Object(r.b)("div",{class:"deckgo-slide-split deckgo-slide-split-end"},Object(r.b)("slot",{name:"end"})),Object(r.b)("slot",{name:"notes"}),Object(r.b)("slot",{name:"actions"}),Object(r.b)("slot",{name:"background"}))},e.prototype.hostData=function(){return{class:{"deckgo-slide-container":!0}}},Object.defineProperty(e,"is",{get:function(){return"deckgo-slide-split"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{afterSwipe:{method:!0},beforeSwipe:{method:!0},el:{elementRef:!0},lazyLoadContent:{method:!0},reveal:{type:Boolean,attr:"reveal"},revealShowFirst:{type:Boolean,attr:"reveal-show-first"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"slideDidLoad",method:"slideDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-flow:row wrap;flex-flow:row wrap;padding:0;width:var(--slide-width)}div.deckgo-slide-split{-ms-flex:1;flex:1;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:var(--slide-split-align,inherit);align-items:var(--slide-split-align,inherit);text-align:var(--slide-split-text-align,inherit);padding:var(--slide-split-padding-top,var(--slide-padding-top-default)) var(--slide-split-padding-end,var(--slide-padding-end-default)) var(--slide-split-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-split-padding-start,var(--slide-padding-start-default))}div.deckgo-slide-split.deckgo-slide-split-start{background:var(--slide-split-background-start);color:var(--slide-split-color-start)}div.deckgo-slide-split.deckgo-slide-split-end{background:var(--slide-split-background-end);color:var(--slide-split-color-end)}::slotted([slot=title]){-ms-flex:1 100%;flex:1 100%;display:var(--slide-split-title-display,none);padding:var(--slide-split-title-padding-top,var(--slide-padding-top-default)) var(--slide-split-title-padding-end,var(--slide-padding-end-default)) var(--slide-split-title-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-split-title-padding-start,var(--slide-padding-start-default))}"},enumerable:!0,configurable:!0}),e}()},300:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r});function n(e,t,i,n){return new(i||(i=Promise))(function(r,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){e.done?r(e.value):new i(function(t){t(e.value)}).then(o,s)}l((n=n.apply(e,t||[])).next())})}function r(e,t){var i,n,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{i=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}},301:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(300),r=function(){function e(){}return e.unifyEvent=function(e){return e.changedTouches?e.changedTouches[0]:e},e.lazyLoadImages=function(e){return n.a(this,void 0,void 0,function(){var t=this;return n.b(this,function(i){return[2,new Promise(function(i){return n.a(t,void 0,void 0,function(){var t;return n.b(this,function(n){switch(n.label){case 0:return t=this.getAllImages(e),[4,this.lazyLoadSelectedImages(t)];case 1:return n.sent(),i(),[2]}})})})]})})},e.lazyLoadSelectedImages=function(e){return n.a(this,void 0,void 0,function(){return n.b(this,function(t){return[2,new Promise(function(t){e?(e.forEach(function(e){e.getAttribute("data-src")&&(e.setAttribute("src",e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","inherit")),e.style.setProperty("pointer-events","none")}),t()):t()})]})})},e.hideLazyLoadImages=function(t){return new Promise(function(i){var n=e.getAllImages(t);n?((n=n.filter(function(e){return e.getAttribute("data-src")})).forEach(function(e){e.style.setProperty("visibility","hidden")}),i()):i()})},e.getAllImages=function(e){var t=e.querySelectorAll("[slot] img"),i=e.shadowRoot.querySelectorAll("img");return Array.from(t).concat(Array.from(i))},e.debounce=function(e,t){var i;return function(n){i&&clearTimeout(i),i=setTimeout(e,t>0?t:300,n)}},e.isMobile=function(){if(!window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},e.isIOS=function(){if(!window||!navigator)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/iPad|iPhone|iPod/i.test(e)},e.isFullscreen=function(){return!(!window||!screen)&&window.innerHeight==screen.height},e}()},306:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i(300),r=i(301),a=function(){function e(){}return e.lazyLoadContent=function(e,t){var i=this;return new Promise(function(r){return n.a(i,void 0,void 0,function(){var i,a;return n.b(this,function(n){switch(n.label){case 0:return i=[],(a=this.getAllElements(e,t))&&a.length>0?(a.forEach(function(e){i.push(e.lazyLoadContent())}),[4,Promise.all(i)]):[3,2];case 1:n.sent(),r(),n.label=2;case 2:return r(),[2]}})})})},e.getAllElements=function(e,t){var i=e.querySelectorAll(t),n=e.shadowRoot.querySelectorAll(t);return Array.from(i).concat(Array.from(n))},e}(),o=function(){function e(){}return e.hideRevealElements=function(e,t){return new Promise(function(i){if(r.a.isMobile())i();else{var n=e.querySelectorAll(t?"[slot] li:not(:first-child), [slot] > p:not(:first-child), [slot] > span:not(:first-child), [slot] > img:not(:first-child)":"[slot] li, [slot] > p, [slot] > span, [slot] > img");n?Array.from(n).forEach(function(e){e.style.setProperty("visibility","hidden"),e.style.setProperty("transform","var(--slide-reveal-transform)"),e.style.setProperty("opacity","0"),e.classList.add("deckgo-reveal"),e.style.setProperty("transition","all var(--slide-reveal-duration) cubic-bezier(0.23, 1, 0.320, 1)")}):i()}})},e.showRevealElement=function(e){return new Promise(function(t){var i=e.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img"),n=!0;if(i){var r=Array.from(i).find(function(e){return"hidden"===e.style.getPropertyValue("visibility")});r&&(r.style.setProperty("visibility","initial"),r.style.setProperty("opacity","1"),r.style.setProperty("transform","none"),n=!1)}t(n)})},e.hideRevealElement=function(e){return new Promise(function(t){var i=e.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img"),n=!0;if(i){var r=Array.from(i).reverse().find(function(e){var t=e.style.getPropertyValue("visibility");return!t||"initial"===t});r&&(r.style.setProperty("visibility","hidden"),r.style.setProperty("transform","var(--slide-reveal-transform)"),r.style.setProperty("opacity","0"),n=!1)}t(n)})},e.beforeSwipe=function(e,t,i){var r=this;return new Promise(function(a){return n.a(r,void 0,void 0,function(){var r;return n.b(this,function(n){switch(n.label){case 0:return i?t?[4,this.showRevealElement(e)]:[3,2]:[3,5];case 1:return r=n.sent(),[3,4];case 2:return[4,this.hideRevealElement(e)];case 3:r=n.sent(),n.label=4;case 4:return a(r),[3,6];case 5:a(!0),n.label=6;case 6:return[2]}})})})},e.afterSwipe=function(){return new Promise(function(e){e()})},e.lazyLoadContent=function(e){var t=this;return new Promise(function(i){return n.a(t,void 0,void 0,function(){var t;return n.b(this,function(n){switch(n.label){case 0:return(t=[]).push(r.a.lazyLoadImages(e)),t.push(a.lazyLoadContent(e,"deckgo-gif")),t.push(a.lazyLoadContent(e,"deckgo-youtube")),[4,Promise.all(t)];case 1:return n.sent(),i(),[2]}})})})},e}()}}]);