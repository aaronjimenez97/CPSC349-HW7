parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mYIs":[function(require,module,exports) {
"use strict";var e;function n(n){e=new WebSocket(n),console.log("connecting. . .")}function o(n){e.onopen=function(){console.log("open"),n()}}function s(n){e.onmessage=function(e){console.log("message",e.data);var o=JSON.parse(e.data);n(o)}}function t(n){e.send(JSON.stringify(n))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={init:n,registerOpenHandler:o,registerMessageHandler:s,sendMessage:t};exports.default=a;
},{}],"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./ws-client"));function t(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function t(){a(this,t),e.default.init("ws://localhost:3001"),e.default.registerOpenHandler(function(){var t=new i({message:"pow!"});e.default.sendMessage(t.serialize())}),e.default.registerMessageHandler(function(e){})},i=function(){function e(t){var s=t.message,n=t.user,r=void 0===n?"batman":n,i=t.timestamp,u=void 0===i?(new Date).getTime():i;a(this,e),this.user=r,this.message=s,this.timestamp=u}return n(e,[{key:"serialize",value:function(){return{user:this.user,message:this.message,timestamp:this.timestamp}}}]),e}(),u=r;exports.default=u;
},{"./ws-client":"mYIs"}],"epB2":[function(require,module,exports) {
"use strict";var e=u(require("./app"));function u(e){return e&&e.__esModule?e:{default:e}}new e.default;
},{"./app":"A2T1"}]},{},["epB2"], null)
//# sourceMappingURL=/main.js.map