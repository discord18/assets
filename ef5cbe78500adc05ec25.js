(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{5954:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.contextMenuCallbackNative=function(e){e.preventDefault();var t=void 0,n=void 0,o=void 0,i=c();if("TEXTAREA"===e.target.tagName||"INPUT"===e.target.tagName)"checkbox"!==e.target.type&&(t=s.ContextMenuTypes.NATIVE_INPUT);else{if("none"===window.getComputedStyle(e.target).getPropertyValue("-webkit-user-select"))return;var f=e.target;do{null!=f.src&&(o=f.src),null!=f.href&&(n=f.href),f=f.parentNode}while(null!=f);null!=o?t=s.ContextMenuTypes.NATIVE_IMAGE:null!=n?t=s.ContextMenuTypes.NATIVE_LINK:i&&(t=s.ContextMenuTypes.NATIVE_TEXT)}t&&(0,a.openContextMenu)(e,function(e){return l.createElement(u.default,r({},e,{type:s.ContextMenuTypes[t],href:n,src:o,value:i}))})},t.contextMenuCallbackWeb=function(e){var t=!1,n=void 0,r=void 0;if("INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)t=!0;else if(c())t=!0;else{var o=e.target;do{null!=o.src&&(n=o.src),null!=o.href&&(r=o.href),o=o.parentNode}while(null!=o);null==r&&null==n||(t=!0)}t||e.preventDefault()};var o,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=n(33),i=n(7891),u=(o=i)&&o.__esModule?o:{default:o},s=n(0);function c(){var e="";return window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!==document.selection.type&&(e=document.selection.createRange().text),e}},6281:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=s(n(6)),i=s(n(34)),u=n(33);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=c(this,e.call.apply(e,[this].concat(l))),r.handleSearchWithGoogle=function(){(0,u.closeContextMenu)(),window.open("https://www.google.com/search?q="+encodeURIComponent(r.props.value||""),"_blank")},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props.value;return null==e||0===e.length?null:o(i.default,{label:a.default.Messages.SEARCH_WITH_GOOGLE,action:this.handleSearchWithGoogle})},t}(l.PureComponent);f.defaultProps={value:""},t.default=f,e.exports=t.default},6282:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=f(n(6)),i=f(n(11)),u=f(n(227)),s=f(n(34)),c=n(33);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=p(this,e.call.apply(e,[this].concat(l))),r.handleCopyLink=function(){(0,c.closeContextMenu)(),i.default.copy(r.props.href||r.props.src)},r.handleOpenLink=function(){(0,c.closeContextMenu)(),window.open(r.props.href||r.props.src)},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return i.default.embedded&&(this.props.href||this.props.src)?o(u.default,{},void 0,o(s.default,{label:a.default.Messages.COPY_LINK,action:this.handleCopyLink}),o(s.default,{label:a.default.Messages.OPEN_LINK,action:this.handleOpenLink})):null},t}(l.PureComponent);t.default=d,e.exports=t.default},6283:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=c(n(6)),i=c(n(11)),u=c(n(34)),s=n(33);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=f(this,e.call.apply(e,[this].concat(l))),r.handleCopyItem=function(){(0,s.closeContextMenu)(),i.default.copy(r.props.value),r.props.target&&r.props.target.focus()},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.useSelection,n=e.value;return!i.default.embedded||t&&(null==n||0===n.length)?null:o(u.default,{label:a.default.Messages.COPY,hint:i.default.isOSX()?"⌘C":"Ctrl+C",action:this.handleCopyItem})},t}(l.PureComponent);p.defaultProps={value:"",useSelection:!1},t.default=p,e.exports=t.default},6710:function(e,t,n){"use strict";t.__esModule=!0;t.default={aa:"aa-ET",af:"af-ZA",ak:"ak-GH",am:"am-ET",an:"an-ES",ar:"ar-MA",as:"as-IN",ay:"ay-PE",az:"az-AZ",be:"be-BY",bg:"bg-BG",bi:"bi-TV",bn:"bn-BD",bo:"bo-CN",br:"br-FR",bs:"bs-BA",ca:"ca-ES",ce:"ce-RU",cs:"cs-CZ",cv:"cv-RU",cy:"cy-GB",da:"da-DK",de:"de-DE",dv:"dv-MV",dz:"dz-BT",el:"el-GR",en:"en-US",es:"es-ES",et:"et-EE",eu:"eu-ES",fa:"fa-IR",ff:"ff-SN",fi:"fi-FI",fo:"fo-FO",fr:"fr-FR",fy:"fy-DE",ga:"ga-IE",gd:"gd-GB",gl:"gl-ES",gu:"gu-IN",gv:"gv-GB",ha:"ha-NG",he:"he-IL",hi:"hi-IN",hr:"hr-HR",ht:"ht-HT",hu:"hu-HU",hy:"hy-AM",ia:"ia-FR",id:"id-ID",ig:"ig-NG",ik:"ik-CA",is:"is-IS",it:"it-IT",iu:"iu-CA",ja:"ja-JP",ka:"ka-GE",kk:"kk-KZ",kl:"kl-GL",km:"km-KH",kn:"kn-IN",ko:"ko-KR",ks:"ks-IN",ku:"ku-TR",kw:"kw-GB",ky:"ky-KG",lb:"lb-LU",lg:"lg-UG",li:"li-BE",ln:"ln-CD",lo:"lo-LA",lt:"lt-LT",lv:"lv-LV",mg:"mg-MG",mh:"mh-MH",mi:"mi-NZ",mk:"mk-MK",ml:"ml-IN",mn:"mn-MN",mr:"mr-IN",ms:"ms-MY",mt:"mt-MT",my:"my-MM",nb:"nb-NO",ne:"ne-NP",nl:"nl-NL",nn:"nn-NO",nr:"nr-ZA",oc:"oc-FR",om:"om-KE",or:"or-IN",os:"os-RU",pa:"pa-PK",pl:"pl-PL",ps:"ps-AF",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",rw:"rw-RW",sa:"sa-IN",sc:"sc-IT",sd:"sd-IN",se:"se-NO",si:"si-LK",sk:"sk-SK",sl:"sl-SI",so:"so-SO",sq:"sq-AL",sr:"sr-RS",ss:"ss-ZA",st:"st-ZA",sv:"sv-SE",sw:"sw-KE",ta:"ta-IN",te:"te-IN",tg:"tg-TJ",th:"th-TH",ti:"ti-ER",tk:"tk-TM",tl:"tl-PH",tn:"tn-ZA",tr:"tr-TR",ts:"ts-ZA",tt:"tt-RU",ug:"ug-CN",uk:"uk-UA",ur:"ur-PK",uz:"uz-UZ",ve:"ve-ZA",vi:"vi-VN",wa:"wa-BE",wo:"wo-SN",xh:"xh-ZA",yi:"yi-US",yo:"yo-NG",zh:"zh-CN",zu:"zu-ZA"},e.exports=t.default},6711:function(e,t,n){"use strict";t.__esModule=!0,t.isSupported=i,t.setEnabled=function(e){return null!=u?u.then(function(t){t.enabled=e}):Promise.resolve()},t.setLearnedWords=function(e){return null!=u?u.then(function(t){return t.setLearnedWords(e)}):Promise.resolve()},t.isMisspelled=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return null!=u?u.then(function(n){return n.isMisspelled(e,t)}):Promise.resolve(!1)},t.getCorrections=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;return null!=u?u.then(function(r){return r.getCorrectionsForMisspelling(e,t).slice(0,n)}):Promise.resolve([])},t.replaceWithCorrection=function(e){o.default.spellCheck.replaceMisspelling(e)};var r=a(n(11)),o=a(n(102)),l=n(7885);function a(e){return e&&e.__esModule?e:{default:e}}function i(){return r.default.embedded&&(r.default.isOSX()||r.default.isWindows()&&parseFloat(o.default.os.release)>=6.2)}var u=i()?(0,l.install)():null},7882:function(e,t,n){"use strict";t.__esModule=!0;var r=new Set(["ain't","aren't","can't","could've","couldn't","couldn't've","didn't","doesn't","don't","hadn't","hadn't've","hasn't","haven't","he'd","he'd've","he'll","he's","how'd","how'll","how's","I'd","I'd've","I'll","I'm","I've","isn't","it'd","it'd've","it'll","it's","let's","ma'am","mightn't","mightn't've","might've","mustn't","must've","needn't","not've","o'clock","shan't","she'd","she'd've","she'll","she's","should've","shouldn't","shouldn't've","that'll","that's","there'd","there'd've","there're","there's","they'd","they'd've","they'll","they're","they've","wasn't","we'd","we'd've","we'll","we're","we've","weren't","what'll","what're","what's","what've","when's","where'd","where's","where've","who'd","who'll","who're","who's","who've","why'll","why're","why's","won't","would've","wouldn't","wouldn't've","y'all","y'all'd've","you'd","you'd've","you'll","you're","you've"].map(function(e){return e.replace(/'.*/,"")}));t.default=r,e.exports=t.default},7883:function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(11)),l=a(n(6710));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._shouldProcess=!1,this._processing=!1,this._minimumTimeRemaining=5,this._locale=t,this._availableLanguages=n,this._languageHint=t.split("-")[0],this._onChange=r,r(t)}return e.prototype.process=function(e){var t=this;this._processing||(this._processing=!0,requestIdleCallback(function(n){n.timeRemaining()<=t._minimumTimeRemaining?t._processEnd():(e.length>256&&(e=e.slice(0,256)),function(e,t){var n=o.default.requireModule("discord_spellcheck").cld;return new Promise(function(r,o){n.detect(e,{httpHint:t,encodingHint:"UTF8"},function(e,t){null!=e?o(new Error(e.message)):!t.reliable||t.languages[0].percent<90||t.languages[0].score<500?o(new Error("Not enough reliable text.")):r(t.languages[0].code)})})}(e,t._languageHint).then(function(e){var r=t._availableLanguages[e]||l.default[e];null!=r&&(t.locale=r),t._processEnd(n.didTimeout)},function(){t._processEnd(n.didTimeout)}))}))},e.prototype._processEnd=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._processing=!1,e&&this._minimumTimeRemaining++},r(e,[{key:"locale",get:function(){return this._locale},set:function(e){this._locale!==e&&(this._locale=e,this._onChange(e))}}]),e}();t.default=i,e.exports=t.default},7884:function(e,t,n){"use strict";e.exports.parse=function(e){var t,n=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);if(!n)return null;n.shift();var r=null,o=[];n[2]&&(r=(t=n[2].split("-")).shift(),o=t);var l=[];n[5]&&(l=n[5].split("-")).shift();var a=[];if(n[6]){var i;(t=n[6].split("-")).shift();for(var u=[];t.length;){var s=t.shift();1===s.length?i?(a.push({singleton:i,extension:u}),i=s,u=[]):i=s:u.push(s)}a.push({singleton:i,extension:u})}var c=[];n[7]&&((c=n[7].split("-")).shift(),c.shift());var f=[];return n[8]&&(f=n[8].split("-")).shift(),{langtag:{language:{language:r,extlang:o},script:n[3]||null,region:n[4]||null,variant:l,extension:a,privateuse:c},privateuse:f,grandfathered:{irregular:n[0]||null,regular:n[1]||null}}}},7885:function(e,t,n){"use strict";t.__esModule=!0,t.Spellchecker=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.install=function(){return i.default.ensureModule("discord_spellcheck").then(function(){var e=i.default.requireModule("discord_spellcheck").Spellchecker,t=new h(new e);return function(e){null!=document.body&&document.body.addEventListener("input",function(t){null!=t.target&&"string"==typeof t.target.value&&e.detectLocale(t.target.value)},!0)}(t),t})};var o=p(n(571)),l=n(7884),a=p(n(77)),i=p(n(11)),u=p(n(7883)),s=p(n(6710)),c=p(n(7882)),f=p(n(102));function p(e){return e&&e.__esModule?e:{default:e}}function d(e){e=s.default[e]||e;var t=(0,l.parse)(e.replace(/[_-]/g,"-"));if(null==t||null==t.langtag.language||null==t.langtag.region)throw new Error(e+" is not a valid locale.");var n=t.langtag,r=n.language,o=n.region;return r.language.toLowerCase()+"-"+o.toUpperCase()}var h=t.Spellchecker=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._logger=a.default.create("Spellchecker"),this._isMisspelledCache=new o.default({max:512,maxAge:4e3}),this._localeAvailable=!1,this._enabled=!0,this._learnedWords=new Set,this._spellchecker=t;var r=this.getAvailableLocales();this._languageDetector=new u.default(r[0],this.getAvailableLanguages(r),function(e){return n.setLocale(e)})}return e.prototype.reset=function(){var e=this;null!=this._locale&&(this._isMisspelledCache.reset(),f.default.spellCheck.setSpellCheckProvider(this._locale,!0,{spellCheck:function(t){return!e.isMisspelled(t)}}))},e.prototype.setLearnedWords=function(e){this._learnedWords=e,this.reset()},e.prototype.setLocale=function(e){e!==this._locale&&(this._locale=e,this._localeAvailable=this._spellchecker.setDictionary(e),this._logger.info("Switching to "+e,this._localeAvailable?"(available)":"(unavailable)"),this.reset())},e.prototype.detectLocale=function(e){this.enabled&&this._languageDetector.process(e)},e.prototype.getAvailableLocales=function(){var e=i.default.requireModule("discord_spellcheck").keyboardLayout;return(i.default.isOSX()?this._spellchecker.getAvailableDictionaries():e.getInstalledKeyboardLanguages()).map(d)},e.prototype.getAvailableLanguages=function(e){var t={};return(e=e||this.getAvailableLocales()).forEach(function(e){var n=e.split("-")[0];t[n]=t[n]||e}),t},e.prototype.isMisspelled=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._isMisspelledCache.get(e);return null!=n?n:!t&&(n=this._isMisspelled(e),this._isMisspelledCache.set(e,n),n)},e.prototype._isMisspelled=function(e){if(!this._enabled||!this._localeAvailable)return!1;if(1===e.length)return!1;var t=e.toLocaleLowerCase();return!this._learnedWords.has(t)&&!c.default.has(t)&&this._spellchecker.isMisspelled(e)},e.prototype.getCorrectionsForMisspelling=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.isMisspelled(e,t)&&this._spellchecker.getCorrectionsForMisspelling(e)||[]},r(e,[{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled=e,this.reset()}}]),e}()},7886:function(e,t,n){"use strict";t.__esModule=!0;var r=i(n(3)),o=i(n(25)),l=i(n(2)),a=n(6711);n(0);function i(e){return e&&e.__esModule?e:{default:e}}var u="SpellcheckStore",s=!0,c=new Set;function f(){o.default.set(u,{enabled:s,learnedWords:c})}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.initialize=function(){var e=o.default.get(u);null!=e&&(s=e.enabled,c=new Set(e.learnedWords),(0,a.setEnabled)(s),(0,a.setLearnedWords)(c))},t.prototype.isEnabled=function(){return s},t}(r.default.Store);t.default=new p(l.default,{SPELLCHECK_TOGGLE:function(e){return s=!s,(0,a.setEnabled)(s),void f()},SPELLCHECK_LEARN_WORD:function(e){var t=e.word;c.add(t.toLocaleLowerCase()),(0,a.setLearnedWords)(c),f()}}),e.exports=t.default},7887:function(e,t,n){"use strict";t.__esModule=!0,t.toggleSpellcheck=function(){l.default.dispatch({type:a.ActionTypes.SPELLCHECK_TOGGLE})},t.learnWord=function(e){l.default.dispatch({type:a.ActionTypes.SPELLCHECK_LEARN_WORD,word:e})};var r,o=n(2),l=(r=o)&&r.__esModule?r:{default:r},a=n(0)},7888:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=g(n(3)),i=g(n(6)),u=g(n(227)),s=g(n(34)),c=g(n(195)),f=n(33),p=n(7887),d=g(n(7886)),h=g(n(523)),y=n(6711),v=n(0);function g(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=b(this,e.call.apply(e,[this].concat(l))),r.state={misspelled:!1,corrections:[]},r._mounted=!1,r.handleLearnWord=function(){var e=r.props.value;(0,p.learnWord)(e),r.resetTarget()},r.handleToggle=function(){(0,p.toggleSpellcheck)(),r.resetTarget()},r.handleLanguages=function(){window.open(h.default.getArticleURL(v.HelpdeskArticles.SPELLCHECK))},b(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._mounted=!0,this.updateCorrections(this.props)},t.prototype.componentWillUnmount=function(){this._mounted=!1},t.prototype.UNSAFE_componentWillReceiveProps=function(e){var t=this.props,n=t.value,r=t.spellcheckEnabled;n===e.value&&r===e.spellcheckEnabled||this.updateCorrections(e)},t.prototype.render=function(){var e=this;if(!(0,y.isSupported)())return null;var t=this.props.spellcheckEnabled,n=this.state,r=n.misspelled,l=n.corrections,a=o(u.default,{},"options",r?o(s.default,{label:i.default.Messages.ADD_TO_DICTIONARY,action:this.handleLearnWord}):null,o(c.default,{label:i.default.Messages.SPELLCHECK,active:t,action:this.handleToggle}),t?o(s.default,{label:i.default.Messages.LANGUAGES,action:this.handleLanguages}):null);return 0===l.length?a:[o(u.default,{},"corrections",l.map(function(t,n){return o(s.default,{label:t,action:function(){return e.handleReplace(t)}},n)})),a]},t.prototype.handleReplace=function(e){var t=this.props.target;(0,f.closeContextMenu)(),(0,y.replaceWithCorrection)(e),t.focus()},t.prototype.resetTarget=function(){(0,f.closeContextMenu)();var e=this.props.target,t=e.selectionStart,n=e.selectionEnd,r=e.value;e.value="",e.value=r,e.selectionStart=t,e.selectionEnd=n,e.focus()},t.prototype.updateCorrections=function(e){var t=this,n=e.spellcheckEnabled,r=e.value,o=e.onHeightUpdate;n&&(0,y.isSupported)()&&Promise.all([(0,y.isMisspelled)(r,!0),(0,y.getCorrections)(r,!0)]).then(function(e){var n=e[0],r=e[1];t._mounted&&t.setState({misspelled:n,corrections:r},o)})},t}(l.PureComponent);_.defaultProps={value:""},t.default=a.default.connectStores([],function(){return{spellcheckEnabled:d.default.isEnabled()}})(_),e.exports=t.default},7889:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=c(n(6)),i=c(n(11)),u=c(n(34)),s=n(33);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=f(this,e.call.apply(e,[this].concat(l))),r.handlePasteItem=function(){(0,s.closeContextMenu)(),r.props.target.focus(),setTimeout(function(){return i.default.paste()},0)},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o(u.default,{label:a.default.Messages.PASTE,hint:i.default.isOSX()?"⌘V":"Ctrl+V",action:this.handlePasteItem})},t}(l.PureComponent);t.default=p,e.exports=t.default},7890:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=c(n(6)),i=c(n(11)),u=c(n(34)),s=n(33);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=f(this,e.call.apply(e,[this].concat(l))),r.handleCutItem=function(){(0,s.closeContextMenu)(),r.props.target.focus(),setTimeout(function(){return i.default.cut()},0)},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.value?o(u.default,{label:a.default.Messages.CUT,hint:i.default.isOSX()?"⌘X":"Ctrl+X",action:this.handleCutItem}):null},t}(l.PureComponent);t.default=p,e.exports=t.default},7891:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),a=h(n(227)),i=h(n(6283)),u=h(n(7890)),s=h(n(7889)),c=h(n(6282)),f=h(n(7888)),p=h(n(6281)),d=n(0);function h(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.style,n=e.type,r=e.target,l=e.className,h=e.href,y=e.src,v=e.value,g=e.onHeightUpdate;switch(n){case d.ContextMenuTypes.NATIVE_INPUT:return o("div",{className:l,style:t},void 0,r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement?o(f.default,{value:v,target:r,onHeightUpdate:g}):null,o(a.default,{},void 0,o(i.default,{value:v,target:r,useSelection:!0}),o(u.default,{value:v,target:r}),o(s.default,{target:r})));case d.ContextMenuTypes.NATIVE_LINK:return o("div",{className:l,style:t},void 0,o(i.default,{value:v}),o(c.default,{href:h,src:y}));case d.ContextMenuTypes.NATIVE_IMAGE:return o("div",{className:l,style:t},void 0,o(c.default,{href:h,src:y}));case d.ContextMenuTypes.NATIVE_TEXT:return o("div",{className:l,style:t},void 0,o(a.default,{},void 0,o(p.default,{value:v})),o(a.default,{},void 0,o(i.default,{value:v})));default:return console.warn("Error - no such ctx menu type"),null}},t}(l.PureComponent);t.default=y,e.exports=t.default}}]);
//# sourceMappingURL=ef5cbe78500adc05ec25.js.map