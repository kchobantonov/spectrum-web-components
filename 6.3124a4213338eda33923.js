(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,n,t){var r=t(86);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};t(88)(r,i);r.locals&&(e.exports=r.locals)},86:function(e,n,t){(n=t(87)(!1)).push([e.i,'/*\nCopyright 2019 Adobe. All rights reserved.\nThis file is licensed to you under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License. You may obtain a copy\nof the License at http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software distributed under\nthe License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\nOF ANY KIND, either express or implied. See the License for the specific language\ngoverning permissions and limitations under the License.\n*/\n\n:root,\nbody {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    margin: 0;\n}\n',""]),e.exports=n},87:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var i=[].concat(e[r]);t&&(i[2]?i[2]="".concat(t," and ").concat(i[2]):i[2]=t),n.push(i)}},n}},88:function(e,n,t){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],r={},i=0;i<e.length;i++){var o=e[i],a=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],n))}else{for(var s=[];a<r.parts.length;a++)s.push(b(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function b(e,n){var t,r,i;if(n.singleton){var o=v++;t=h||(h=u(n)),r=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=u(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e,n);return c(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o],u=i[a.id];u&&(u.refs--,r.push(u))}e&&c(s(e,n),n);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete i[f.id]}}}}}}]);
//# sourceMappingURL=6.3124a4213338eda33923.js.map