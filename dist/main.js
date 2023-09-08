/*! For license information please see main.js.LICENSE.txt */
var Client;(()=>{"use strict";var t={817:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,'.head{justify-content:center}h2{font-size:26px;font-weight:bold}h1{font-size:36px}p{font-size:14px}box2{display:flex;justify-content:space-evenly}button{display:inline-block;padding:5px 5px;font-size:14px;cursor:pointer;text-align:center;text-decoration:none;outline:none;color:white;background-color:grey;border:none;border-radius:10px}button:hover{background-color:darkolivegreen}button:active{background-color:darkblue;transform:translateY(4px)}footer{display:flex;margin:30px;border:1px solid #545454;border-radius:3px;justify-content:space-evenly;line-height:0%;background-color:grey}input{padding:5px 5px;width:25%;line-height:16px;margin:10px 0;justify-content:center}.head{margin:10px;display:grid;justify-content:space-evenly;font-size:30px;font-family:"Comic Sans MS"}.container{display:grid;margin:30px;grid-template-areas:"days pic pic pic" "temp pic pic pic"}#response_image{grid-area:pic;display:grid;justify-content:right}#box_days{grid-area:days;display:flex;font-size:16px;justify-content:left;flex-direction:column;grid-template-areas:"hd hd" "cd dd"}#head_days{grid-area:hd;display:flex;justify-content:space-evenly}#hol_countDown{grid-area:cd;display:flex;justify-content:space-evenly}#hol_duration{grid-area:dd;display:flex;justify-content:space-evenly}#box_weather{grid-area:temp;display:flex;font-size:16px;justify-content:left;flex-direction:column;grid-template-areas:"hd hd hd" "at mat mit"}#head_weather{grid-area:hd;display:flex;justify-content:space-evenly}#avg_temp{grid-area:at;display:flex;justify-content:left}#max_temp{grid-area:mat;display:flex;justify-content:left}#min_temp{grid-area:mit;display:flex;justify-content:left}\n',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var d=n(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var h=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=r(t,o),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0;var r={};(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new T(r||[]);return a(i,"_invoke",{value:L(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p={};function h(){}function y(){}function v(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==r&&o.call(x,c)&&(m=x);var w=v.prototype=h.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,n){function r(a,i,c,u){var s=d(e[a],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function L(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:D}}function D(){return{value:void 0,done:!0}}return y.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,u,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new E(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=O,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function o(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function c(t){o(i,r,a,c,u,"next",t)}function u(t){o(i,r,a,c,u,"throw",t)}c(void 0)}))}}n.r(r),n.d(r,{getData:()=>d,handleSubmit:()=>u,sumHolCountdown:()=>f,sumHolDuration:()=>l});var i=new Date,c=864e5;function u(t){return s.apply(this,arguments)}function s(){return s=a(e().mark((function t(n){var r,o,c,u,s,p;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=document.getElementById("destination").value,o=document.getElementById("startDate").value,c=document.getElementById("endDate").value,t.prev=4,t.next=7,l(o,c);case 7:return u=t.sent,t.next=10,f(i,o);case 10:return s=t.sent,console.log("POSTING DATA TO SERVER"),p=function(){var t=a(e().mark((function t(){var n,r,o,a,i=arguments;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(n,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:return o=t.sent,t.prev=5,t.next=8,o.json();case 8:return a=t.sent,t.abrupt("return",a);case 12:t.prev=12,t.t0=t.catch(5),console.log("Error: ",t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(){return t.apply(this,arguments)}}(),t.next=15,p("/ProjectData",{destination:r,startDate:o,endDate:c,holDuration:u,holCountDown:s});case 15:d("/getData"),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(4),alert(t.t0);case 21:case"end":return t.stop()}}),t,null,[[4,18]])}))),s.apply(this,arguments)}var l=function(t,e){var n=new Date(t),r=new Date(e),o=Math.round(Math.abs((n-r)/c));if(n>r)throw new Error("Choose a future date!");return console.log(o),o},f=function(t,e){var n=new Date(t),r=new Date(e),o=Math.round(Math.abs((n-r)/c));if(n>r)throw new Error("Please try again with a date in the future!");return console.log(o),o},d=function(){var t=a(e().mark((function t(){var n,r=arguments;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",t.next=3,fetch(n,{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){document.getElementById("response_image").src=t[1].imageUrl,document.getElementById("avg_temp").innerHTML=t[0].averageTemp+" Degrees Celcius",document.getElementById("max_temp").innerHTML=t[0].maxTemp+" Degrees Celcius",document.getElementById("min_temp").innerHTML=t[0].minTemp+" Degrees Celcius",document.getElementById("hol_duration").innerHTML=t[0].holLength+" days of holiday bliss",document.getElementById("hol_countDown").innerHTML=t[0].countdownLength+" days until the start of your holiday!"})).catch((function(t){console.log(t)}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=n(379),h=n.n(p),y=n(795),v=n.n(y),m=n(569),g=n.n(m),x=n(565),w=n.n(x),b=n(216),E=n.n(b),L=n(589),j=n.n(L),_=n(817),S={};S.styleTagTransform=j(),S.setAttributes=w(),S.insert=g().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=E(),h()(_.Z,S),_.Z&&_.Z.locals&&_.Z.locals,window.addEventListener("DOMContentLoaded",(function(t){console.log("DOM loaded"),document.querySelector("form").addEventListener("submit",u)}))})(),Client=r})();