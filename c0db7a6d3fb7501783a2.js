(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{846:function(e,r,t){"use strict";r.__esModule=!0,r.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(r,t,n):r[t]=e[t]}return r.default=e,r}(t(2)),i=a(t(17)),l=a(t(872));function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r,t,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(r||0===l||(r={children:void 0}),r&&i)for(var a in i)void 0===r[a]&&(r[a]=i[a]);else r||(r=i||{});if(1===l)r.children=o;else if(l>1){for(var u=new Array(l),c=0;c<l;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}var f=Object.freeze({LEFT:"LEFT",RIGHT:"RIGHT",UP:"UP",DOWN:"DOWN"});function d(e){switch(e){case f.LEFT:return l.default.left;case f.RIGHT:return l.default.right;case f.UP:return null;case f.DOWN:return l.default.down;default:throw new Error("Invalid Direction "+e)}}var s=function(e){var r=e.width,t=void 0===r?24:r,n=e.height,l=void 0===n?24:n,a=e.color,f=void 0===a?"currentColor":a,s=e.direction,p=e.foreground,v=e.className,y=e.title,O=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["width","height","color","direction","foreground","className","title"]);return o.createElement("svg",u({},O,{width:t,height:l,className:(0,i.default)(v,d(s)),viewBox:"0 0 24 24"}),null!=y?c("title",{},void 0,y):null,c("polygon",{className:p,fill:f,fillRule:"nonzero",points:"13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"}))};s.displayName="Arrow",s.Directions=f;var p=s;r.default=p},908:function(e,r,t){"use strict";r.__esModule=!0,r.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(r,t,n):r[t]=e[t]}return r.default=e,r}(t(2)),i=(n=t(846))&&n.__esModule?n:{default:n};function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}r.default=function(e){return o.createElement(i.default,l({},e,{direction:i.default.Directions.UP}))}}}]);
//# sourceMappingURL=c0db7a6d3fb7501783a2.js.map