/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={771:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,e,n){return o=i()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,t);var r,o,u,l,s=(r=f,o=i(),function(){var t,e=a(r);if(o){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return u=f,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n          <style>\n          *{\n              margin: 0;\n              padding: 0;\n              box-sizing: border-box;\n          }\n          :host {\n              display: block;\n              width: 100%;\n              background-color: orange;\n              color: white;\n              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n          }\n          h2 {\n              padding: 16px;\n          }\n          </style>\n          <h2>Meals</h2>\n      "}}])&&e(u.prototype,l),Object.defineProperty(u,"prototype",{writable:!1}),f}(r(HTMLElement));customElements.define("app-bar",u)},346:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,e,n){return o=i()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,t);var r,o,u,l,s=(r=f,o=i(),function(){var t,e=a(r);if(o){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return u=f,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector(".searchElement").value}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">\n\n    <style>\n      .searchButton:hover{\n        font-weight: bold;\n      }    \n    </style>\n    \n    <div class="d-flex" role="search">\n        <input class="searchElement form-control me-2" type="search" placeholder="Search" aria-label="Search">\n        <button class="searchButton btn btn-outline-warning bg-warning text-dark" type="submit">Search</button>\n    </div>',this.shadowDOM.querySelector(".searchButton").addEventListener("click",this._clickEvent)}}])&&e(u.prototype,l),Object.defineProperty(u,"prototype",{writable:!1}),f}(r(HTMLElement));customElements.define("search-bar",u)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(771),n(346);const e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,r=[{key:"searchMeals",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(t){return t.json()})).then((function(e){return e.meals?Promise.resolve(e.meals):Promise.reject("".concat(t," is not found"))}))}},{key:"getMealDetail",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).then((function(e){return e.meals?Promise.resolve(e.meals):Promise.reject("".concat(t," is not found"))}))}}],null&&t(n.prototype,null),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=O(c,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function h(){}function d(){}function y(){}var v={};l(v,c,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(L([])));m&&m!==e&&n.call(m,c)&&(v=m);var g=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,c,a,u){var l=f(t[i],t,c);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==r(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(l.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=y,l(g,"constructor",y),l(y,"constructor",d),d.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(g),l(g,u,"Generator"),l(g,c,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){i(c,r,o,a,u,"next",t)}function u(t){i(c,r,o,a,u,"throw",t)}a(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("search-bar"),n=document.querySelector(".meal-container"),r=function(){var r=c(o().mark((function r(){var c;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.searchMeals(t.value);case 3:c=r.sent,i(c),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n.innerHTML="<h4>".concat(r.t0,"</h4>");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(t){var e="";t.forEach((function(t){return e+=u(t)})),n.innerHTML=e};document.addEventListener("click",function(){var t=c(o().mark((function t(n){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!n.target.classList.contains("modal-detail-button")){t.next=7;break}return r=n.target.dataset.idmeal,t.next=5,e.getMealDetail(r);case 5:i=t.sent,a(i[0]);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}());var a=function(t){var e=l(t);document.querySelector(".modal-body").innerHTML=e},u=function(t){return'<div class="col-lg-2 col-md-3 col-sm-6 mb-5">\n              <div class="card">\n                  <img src="'.concat(t.strMealThumb,'" class="card-img-top">\n                  <div class="card-body">\n                  <h5 class="card-title">').concat(t.strMeal,'</h5>\n                  <h6 class="card-subtitle mb-2 text-muted">').concat(t.strArea,'</h6>\n                  <a href="#" class="btn btn-warning modal-detail-button" data-bs-toggle="modal"  data-bs-target="#mealDetailModal" data-idMeal="').concat(t.idMeal,'">Show Details</a>\n                  </div>\n              </div>\n          </div>')},l=function(t){return'<div class="container-fluid">\n                    <div class="row">\n                        <img src="'.concat(t.strMealThumb,'" class="img-fluid">\n                    <div class="row mt-3 ms-1">\n                        <ul class="list-group">\n                            <li class="list-group-item bg-warning"><h4>').concat(t.strMeal,'</h4></li>\n                            <li class="list-group-item"><strong>Ingredients :</strong> \n                            <ol>\n                            <li>').concat(t.strIngredient1,"</li>\n                            <li>").concat(t.strIngredient2,"</li>\n                            <li>").concat(t.strIngredient3,"</li>\n                            <li>").concat(t.strIngredient4,"</li>\n                            <li>").concat(t.strIngredient5,"</li>\n                            <li>").concat(t.strIngredient6,"</li>\n                            <li>").concat(t.strIngredient7,"</li>\n                            <li>").concat(t.strIngredient8,"</li>\n                            <li>").concat(t.strIngredient9,"</li>\n                            <li>").concat(t.strIngredient10,"</li>\n                            <li>").concat(t.strIngredient11,"</li>\n                            <li>").concat(t.strIngredient12,"</li>\n                            <li>").concat(t.strIngredient13,"</li>\n                            <li>").concat(t.strIngredient14,"</li>\n                            <li>").concat(t.strIngredient15,"</li>\n                            <li>").concat(t.strIngredient16,"</li>\n                            <li>").concat(t.strIngredient17,"</li>\n                            <li>").concat(t.strIngredient18,"</li>\n                            <li>").concat(t.strIngredient19,"</li>\n                            <li>").concat(t.strIngredient20,'</li>\n                            </ol>\n                            </li>\n                            <li class="list-group-item"><strong>How To Cook :</strong> \n                            \n                            ').concat(t.strInstructions,"</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>")};t.clickEvent=r}))})()})();