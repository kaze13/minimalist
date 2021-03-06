var __wpo = {"assets":{"main":["./build.js","./","./lib/dialog-polyfill.min.css","./lib/icon.css","./lib/font.woff","./lib/dialog-polyfill.min.js","./lib/material.min.css","./lib/material.min.js"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"1bc9933cc4728d356b23d942dff5756b3a94e395":"./build.js","6e6caf0564930c02587a4538ea6157d6461524ab":"./","b582b37b59d9859544d880abf278e7302009b859":"./lib/dialog-polyfill.min.css","e58f5b496576bf27b2931d30bfb769f45fda8d22":"./lib/icon.css","2ee5cb05c199df687e5e4be924b7ed8ce8715c08":"./lib/font.woff","962780592ede7637a5c26c746713c00e50b71685":"./lib/dialog-polyfill.min.js","62364e7cb9cfd9889c1bf3223ac1640509237b9a":"./lib/material.min.css","1ab50540032210391656928cd1564530353096cd":"./lib/material.min.js"},"strategy":"changed","responseStrategy":"cache-first","version":"4/9/2017, 9:36:25 PM","name":"webpack-offline","pluginVersion":"4.6.2","relativePaths":true};

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/docs/",e(e.s=1)}([function(n,e){},function(n,e,t){"use strict";function r(n,e){return caches.match(n,{cacheName:e}).catch(function(){})}function o(n,e){return n+(-1!==n.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(e)}function i(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||-1!==(n.headers.get("Accept")||"").indexOf("text/html")}function c(n){return Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}function a(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}if(void 0===s)var s=!1;!function(n,e){function t(){if(!L.additional.length)return Promise.resolve();s&&console.log("[SW]:","Caching additional");var n=void 0;return n="changed"===S?f("additional"):u("additional"),n.catch(function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function u(e){var t=L[e];return caches.open(P).then(function(e){return m(e,t,{bust:n.version,request:n.prefetchRequest})}).then(function(){a("Cached assets: "+e,t)}).catch(function(n){throw console.error(n),n})}function f(e){return h().then(function(t){if(!t)return u(e);var r=t[0],o=t[1],i=t[2],c=i.hashmap,s=i.version;if(!i.hashmap||s===n.version)return u(e);var f=Object.keys(c).map(function(n){return c[n]}),l=o.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),h=L[e],d=[],v=h.filter(function(n){return-1===l.indexOf(n)||-1===f.indexOf(n)});Object.keys(W).forEach(function(n){var e=W[n];if(-1!==h.indexOf(e)&&-1===v.indexOf(e)&&-1===d.indexOf(e)){var t=c[n];t&&-1!==l.indexOf(t)?d.push([t,e]):v.push(e)}}),a("Changed assets: "+e,v),a("Moved assets: "+e,d);var p=Promise.all(d.map(function(n){return r.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(P).then(function(e){var t=p.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,m(e,v,{bust:n.version,request:n.prefetchRequest})])})})}function l(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(b)&&0!==n.indexOf(P))return console.log("[SW]:","Delete cache:",n),caches.delete(n)});return Promise.all(e)})}function h(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(b)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(E,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function d(){return caches.open(P).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:W}));return e.put(new URL(E,location).toString(),t)})}function v(n,e,t){return r(t,P).then(function(r){return r?(s&&console.log("[SW]:","URL ["+t+"]("+e+") from cache"),r):fetch(n.request).then(function(n){return n.ok?(s&&console.log("[SW]:","URL ["+e+"] from network"),t===e&&function(){var t=n.clone();caches.open(P).then(function(n){return n.put(e,t)}).then(function(){console.log("[SW]:","Cache asset: "+e)})}(),n):(s&&console.log("[SW]:","URL ["+e+"] wrong response: ["+n.status+"] "+n.type),n)})})}function p(n,e,t){return fetch(n.request).then(function(n){if(n.ok)return s&&console.log("[SW]:","URL ["+e+"] from network"),n;throw new Error("response is not ok")}).catch(function(){return s&&console.log("[SW]:","URL ["+e+"] from cache if possible"),r(t,P)})}function g(n){return n.catch(function(){}).then(function(n){return n&&n.ok?n:(s&&console.log("[SW]:","Loading navigation fallback ["+_+"] from cache"),r(_,P))})}function m(n,e,t){var r=!1!==t.allowLoaders,i=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(e.map(function(n){return i&&(n=o(n,i)),fetch(n,a)})).then(function(o){if(o.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(O(e[o],t)),n.put(e[o],t)});return i.length?function(){var r=c(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return e.length&&(o=o.concat(m(n,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function O(n,e){var t=Object.keys(R).map(function(t){if(-1!==R[t].indexOf(n)&&w[t])return w[t](e.clone())}).filter(function(n){return!!n});return Promise.all(t).then(function(n){return[].concat.apply([],n)})}function x(n){var e=n.url,t=new URL(e),r=void 0;r="navigate"===n.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<k.length;o++){var i=k[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var c=void 0;if((c="function"==typeof i.match?i.match(t,n):e.replace(i.match,i.to))&&c!==e)return c}}}var w=e.loaders,k=e.cacheMaps,S=n.strategy,y=n.responseStrategy,L=n.assets,R=n.loaders||{},W=n.hashesMap,U=n.externals,b=n.name,q=n.version,P=b+":"+q,E="__offline_webpack__data";!function(){Object.keys(L).forEach(function(n){L[n]=L[n].map(function(n){var e=new URL(n,location);return-1===U.indexOf(n)?e.search="":e.hash="",e.toString()})}),Object.keys(R).forEach(function(n){R[n]=R[n].map(function(n){var e=new URL(n,location);return-1===U.indexOf(n)?e.search="":e.hash="",e.toString()})}),W=Object.keys(W).reduce(function(n,e){var t=new URL(W[e],location);return t.search="",n[e]=t.toString(),n},{}),U=U.map(function(n){var e=new URL(n,location);return e.hash="",e.toString()})}();var j=[].concat(L.main,L.additional,L.optional),_=n.navigateFallbackURL;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===S?f("main"):u("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var e=t();e=e.then(d),e=e.then(l),e=e.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(e)}),self.addEventListener("fetch",function(n){var e=n.request.url,t=new URL(e),r=void 0;-1!==U.indexOf(e)?r=e:(t.search="",r=t.toString());var o="GET"===n.request.method,c=-1!==j.indexOf(r),a=r;if(!c){var s=x(n.request);s&&(a=s,c=!0)}if(!c&&o&&_&&i(n.request))return void n.respondWith(g(fetch(n.request)));if(!c||!o)return void(t.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&n.respondWith(fetch(n.request)));var u=void 0;u="network-first"===y?p(n,r,a):v(n,r,a),_&&i(n.request)&&(u=g(u)),n.respondWith(u)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[]}),n.exports=t(0)}]);