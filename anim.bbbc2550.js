parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hsHk":[function(require,module,exports) {
"use strict";var t={root:null,rootMargin:"0px",threshold:.01},e=function(t,e){t.forEach(function(t){if(t.isIntersecting)switch(t.target.getAttribute("data-anim")){case"scrollAnimation":document.querySelector("#products").style.transform="translateY(0)";break;case"scrollYear":o(),e.unobserve(t.target)}t.isIntersecting||(document.querySelector("#products").style.transform="translateY(150px)")})},r=new IntersectionObserver(e,t),n=document.querySelectorAll("[data-anim]");function o(){var t=2e3,e=document.querySelector('[data-anim="scrollYear"]'),r=setInterval(function(){t++,e.textContent=t,2015===t&&clearInterval(r)},50);document.querySelector(".about__slider").style.transform="translateY(-233px)"}n.forEach(function(t){r.observe(t)});
},{}]},{},["hsHk"], null)
//# sourceMappingURL=anim.bbbc2550.js.map