(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1162:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=u(n(19)),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(2)),u(n(50))),i=u(n(1086));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n=e.children,r=e.color,u=void 0===r?a.default.Colors.PRIMARY_300:r,s=e.isFlush,f=void 0!==s&&s,c=e.isRequired,d=void 0!==c&&c,p=e.tag,h=void 0===p?"label":p,v=e.className;return o(a.default,{className:(0,l.default)(i.default.label,(t={},t[i.default.flush]=f,t),v),color:u,size:a.default.Sizes.SMALL,tag:h,textCase:a.default.Cases.UPPERCASE,weight:a.default.Weights.SEMIBOLD},void 0,n,d&&o("span",{className:i.default.requiredIndicator},void 0," *"))},e.exports=t.default},1163:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=u(n(19)),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(2)),u(n(50))),i=u(n(1084));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n=e.children,r=e.tag,u=void 0===r?"p":r,s=e.isFlush,f=void 0!==s&&s;return o(a.default,{className:(0,l.default)(i.default.subheading,(t={},t[i.default.flush]=f,t)),color:a.default.Colors.PRIMARY_300,size:a.default.Sizes.MEDIUM_LARGE,tag:u,weight:a.default.Weights.NORMAL},void 0,n)},e.exports=t.default},1164:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=u(n(19)),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(2)),u(n(50))),i=u(n(1085));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n=e.children,r=e.tag,u=void 0===r?"h2":r,s=e.isFlush,f=void 0!==s&&s;return o(a.default,{className:(0,l.default)(i.default.heading,(t={},t[i.default.flush]=f,t)),color:a.default.Colors.WHITE,size:a.default.Sizes.LARGE,tag:u,weight:a.default.Weights.MEDIUM},void 0,n)},e.exports=t.default},1165:function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2));function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,a=Array(l),i=0;i<l;i++)a[i]=arguments[i];return n=r=o(this,e.call.apply(e,[this].concat(a))),r.formRef=null,r.getFormData=function(){return null==r.formRef?{}:Array.from(r.formRef.elements).reduce(function(e,t){var n=t.name,r=t.type,o=t.value;return n&&"button"!==r&&"submit"!==r&&"reset"!==r?("checkbox"===r?e[n]=t.checked:"radio"!==r?e[n]=o:"radio"!==r||t.checked||e.hasOwnProperty(n)?"radio"===r&&t.checked&&(e[n]=o):e[n]=null,e):e},{})},r.handleFormChange=function(e){var t=r.props.onChange;if(null!=t){var n=e.currentTarget;t(n.name,n.value)}},r.handleFormSubmit=function(e){e.preventDefault();var t=r.props.onSubmit;null!=t&&t(r.getFormData(),e)},r.resetForm=function(){r.formRef&&r.formRef.reset()},r.setFormRef=function(e){r.formRef=e},o(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.createElement("form",{ref:this.setFormRef,onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},this.props.children)},t}(r.Component);t.default=l,e.exports=t.default},1166:function(e,t,n){"use strict";t.__esModule=!0,t.TextInputSizes=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),i=f(n(19)),u=n(75),s=f(n(1089));function f(e){return e&&e.__esModule?e:{default:e}}var c=t.TextInputSizes={DEFAULT:"default",MINI:"mini"},d=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.onChange=r.onChange.bind(r),r.onFocus=r.onFocus.bind(r),r.onBlur=r.onBlur.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e,t=this.props,n=t.error,r=t.className,f=t.inputClassName,c=t.inputPrefix,d=t.disabled,p=t.size,h=t.editable,v=t.inputRef,m=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["error","className","inputClassName","inputPrefix","disabled","size","editable","inputRef"]),y=n?l("div",{className:s.default.errorMessage},void 0,n):null;return l("div",{className:(0,i.default)(s.default.inputWrapper,r)},void 0,c?l("span",{className:s.default.inputPrefix},void 0,c):null,a.createElement("input",o({className:(0,i.default)((0,u.getClass)(s.default,"input",p),f,(e={},e[s.default.error]=n,e[s.default.disabled]=d,e[s.default.editable]=h,e)),disabled:d},m,{onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,ref:v})),y)},t.prototype.onChange=function(e){this.props.onChange&&this.props.onChange(e.currentTarget.value,this.props.name,e)},t.prototype.onFocus=function(e){this.props.onFocus&&this.props.onFocus(e,this.props.name)},t.prototype.onBlur=function(e){this.props.onBlur&&this.props.onBlur(e,this.props.name)},t}(a.PureComponent);d.Sizes=c,d.defaultProps={name:"",size:c.DEFAULT,disabled:!1,type:"text",placeholder:"",autoFocus:!1,maxLength:999},t.default=d},1168:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=u(n(19)),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(2)),u(n(50))),i=u(n(1087));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n,r=e.children,u=e.isFlush,s=void 0!==u&&u,f=e.tag,c=void 0===f?"h3":f,d=e.hasBottomPadding,p=void 0!==d&&d;return o(a.default,{className:(0,l.default)(i.default.heading,(t={},t[i.default.flush]=s,t),(n={},n[i.default.extraPadding]=p,n)),color:a.default.Colors.WHITE,size:a.default.Sizes.MEDIUM_LARGE,tag:c,textCase:a.default.Cases.UPPERCASE,weight:a.default.Weights.MEDIUM},void 0,r)},e.exports=t.default},1169:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),i=f(n(161)),u=f(n(1171)),s=f(n(1083));function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d={friction:7,tension:60},p=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=c(this,e.call.apply(e,[this].concat(l))),r.state={translateY:new i.default.Value(0)},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.slideIn()},t.prototype.componentWillEnter=function(e){this.slideIn(e)},t.prototype.componentWillLeave=function(e){this.slideOut(e)},t.prototype.slideIn=function(e){var t=this.state.translateY;i.default.spring(t,l({toValue:1},d)).start(e)},t.prototype.slideOut=function(e){var t=this.state.translateY;i.default.stagger(250,[i.default.spring(t,l({toValue:1.3},d)),i.default.spring(t,l({toValue:0},d))]).start(e)},t.prototype.render=function(){return o(i.default.div,{className:s.default.noticeRegion,style:this.getNoticeStyle()},void 0,a.createElement(u.default,this.props))},t.prototype.getNoticeStyle=function(){return{transform:[{translateY:this.state.translateY.interpolate({inputRange:[0,1],outputRange:["150%","0%"]})},{translateZ:0}]}},t}(a.Component);t.default=p,e.exports=t.default},1171:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),a=n(43),i=h(n(161)),u=h(n(65)),s=h(n(159)),f=n(164),c=n(1167),d=n(13),p=h(n(1083));function h(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=Array(l),f=0;f<l;f++)u[f]=arguments[f];return n=r=v(this,e.call.apply(e,[this].concat(u))),r.state={color:new i.default.Value(0)},r.handleOnSave=function(e){var t=r.props.onSave;null!=t&&t(e)},r.handleOnReset=function(e){(0,r.props.onReset)(e)},r.emphasize=function(){var e=r.state.color;i.default.sequence([i.default.timing(e,{toValue:1,duration:170,easing:i.default.Easing.quad}),i.default.timing(e,{delay:200,toValue:0,duration:170,easing:i.default.Easing.quad})]).start()},r.renderResetButton=function(){return null==r.props.onReset?null:o(s.default,{className:p.default.resetButton,size:s.default.Height.SHORT,color:s.default.Color.PRIMARY,look:s.default.Look.LINK,onClick:r.handleOnReset},void 0,o(i.default.span,{style:r.getTextStyle()},void 0,a.Messages.Actions.RESET))},v(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){f.ComponentDispatch.subscribe(d.ComponentActions.EMPHASIZE_NOTICE,this.emphasize)},t.prototype.componentWillUnmount=function(){f.ComponentDispatch.unsubscribe(d.ComponentActions.EMPHASIZE_NOTICE,this.emphasize)},t.prototype.getTextStyle=function(){var e=this.state.color,t=d.Colors.WHITE;return this.props.theme===d.ThemeTypes.LIGHT&&(t=d.Colors.PRIMARY_500),{color:e.interpolate({inputRange:[0,1],outputRange:[t,d.Colors.WHITE]})}},t.prototype.getContainerStyle=function(){var e=this.state.color,t=(0,c.hex2rgb)(d.Colors.PRIMARY_700,.9);return this.props.theme===d.ThemeTypes.LIGHT&&(t=(0,c.hex2rgb)(d.Colors.STATUS_GREY_100,.9)),{backgroundColor:e.interpolate({inputRange:[0,1],outputRange:[t,(0,c.hex2rgb)(d.Colors.STATUS_RED_500,.9)]})}},t.prototype.render=function(){var e=this.props,t=e.actionCopy,n=e.noticeCopy,r=e.submitting;return o(i.default.div,{className:p.default.container,style:this.getContainerStyle()},void 0,o(u.default,{align:u.default.Align.CENTER,className:p.default.contentWrap},void 0,o(u.default.Child,{},void 0,o(i.default.div,{className:p.default.message,style:this.getTextStyle()},void 0,n)),o(u.default,{className:p.default.buttonWrap},void 0,this.renderResetButton(),o(s.default,{className:p.default.button,size:s.default.Height.SHORT,color:s.default.Color.GREEN,submitting:r,type:"submit",onClick:this.handleOnSave},void 0,t))))},t}(l.PureComponent);m.defaultProps={actionCopy:a.Messages.Actions.SAVE_CHANGES,noticeCopy:a.Messages.Common.SETTINGS_NOTICE_MESSAGE},t.default=m,e.exports=t.default},1181:function(e,t,n){"use strict";t.__esModule=!0,t.withLocalizedFormProvider=t.withLocalizedFormConsumer=void 0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),i=n(13);var u=a.createContext({activeLocale:i.DEFAULT_LOCALE_KEY,fieldValues:{},setActiveLocale:i.NOOP,getFieldValue:i.NOOP,getLocalizedFieldValues:i.NOOP,setFieldValue:i.NOOP,setLocalizedFieldValues:i.NOOP}),s=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.getFieldValue=function(e){var t=r.state,n=t.activeLocale,o=t.fieldValues;return null==e||null==o[e]?null:n===i.DEFAULT_LOCALE_KEY?o[e][i.DEFAULT_LOCALE_KEY]:null!=o[e].localizations?o[e].localizations[n]:null},r.getLocalizedFieldValues=function(e){if(null==e)return null;var t=r.state.fieldValues[e];if(null==t)return null;var n,o=t[i.DEFAULT_LOCALE_KEY];return null==o||""===o?l({},t,((n={})[i.DEFAULT_LOCALE_KEY]=" ",n)):t},r.getPatchedLocalizedFieldValues=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.state,o=n.activeLocale,a=n.fieldValues,u=l({},a[e]);return o===i.DEFAULT_LOCALE_KEY?u[i.DEFAULT_LOCALE_KEY]=t:(null==u.localizations&&(u.localizations={}),u.localizations[o]=t),u},r.setActiveLocale=function(e){r.setState({activeLocale:e})},r.setFieldValue=function(e,t,n){r.setState(function(n){var o;return l({},n,{fieldValues:l({},n.fieldValues,(o={},o[e]=r.getPatchedLocalizedFieldValues(e,t,n),o))})},n)},r.setLocalizedFieldValues=function(e,t){var n=t[i.DEFAULT_LOCALE_KEY];r.setState(function(r){var o,a;return l({},r,{fieldValues:l({},r.fieldValues,(a={},a[e]=l({},t,(o={},o[i.DEFAULT_LOCALE_KEY]=" "===n?"":n,o)),a))})})},r.state={activeLocale:i.DEFAULT_LOCALE_KEY,fieldValues:{},getFieldValue:r.getFieldValue,getLocalizedFieldValues:r.getLocalizedFieldValues,setActiveLocale:r.setActiveLocale,setFieldValue:r.setFieldValue,setLocalizedFieldValues:r.setLocalizedFieldValues},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o(u.Provider,{value:this.state},void 0,this.props.children)},t}(a.Component);(t.withLocalizedFormConsumer=function(e){return a.forwardRef(function(t,n){return o(u.Consumer,{},void 0,function(r){var o=r.activeLocale,i=r.getFieldValue,u=r.getLocalizedFieldValues,s=r.setActiveLocale,f=r.setFieldValue,c=r.setLocalizedFieldValues;return a.createElement(e,l({},t,{ref:n,activeLocale:o,getFieldValue:i,getLocalizedFieldValues:u,setActiveLocale:s,setFieldValue:f,setLocalizedFieldValues:c}))})})}).injectedProps=["activeLocale","getFieldValue","getLocalizedFieldValues","setActiveLocale","setFieldValue","setLocalizedFieldValues"];t.withLocalizedFormProvider=function(e){return function(t){return o(s,{},void 0,a.createElement(e,t))}}},1264:function(e,t,n){var r={"./bg.png":1359,"./cs.png":1358,"./da.png":1357,"./de.png":1356,"./el.png":1355,"./en-GB.png":1354,"./en-US.png":1353,"./es-ES.png":1352,"./fi.png":1351,"./fr.png":1350,"./hu.png":1349,"./it.png":1348,"./ja.png":1347,"./ko.png":1346,"./lt.png":1345,"./nl.png":1344,"./no.png":1343,"./pl.png":1342,"./pt-BR.png":1341,"./ro.png":1340,"./ru.png":1339,"./sv-SE.png":1338,"./tr.png":1337,"./uk.png":1336,"./zh-CN.png":1335,"./zh-TW.png":1334};function o(e){var t=l(e);return n(t)}function l(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=l,e.exports=o,o.id=1264},1265:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),a=d(n(65)),i=d(n(1175)),u=n(1181),s=n(13),f=n(43),c=d(n(1099));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=[{name:f.Messages.Locale.DEFAULT_I18N_GROUP_LABEL,value:s.DEFAULT_LOCALE_KEY}],v=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=p(this,e.call.apply(e,[this].concat(l))),r.handleLocaleSelection=function(e){r.props.setActiveLocale(e.value)},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getLocaleOptions=function(){return h.concat((0,f.getLanguages)().filter(function(e){return e.enabled}).map(function(e){return{name:e.englishName,value:e.code}}))},t.prototype.renderOption=function(e){if(e.value===s.DEFAULT_LOCALE_KEY)return e.name;var t=void 0;try{var r=n(1264)("./"+e.value+".png");t=o("img",{className:c.default.flagImage,src:r,alt:e.name})}catch(e){}return o(a.default,{align:a.default.Align.CENTER},void 0,o(a.default.Child,{grow:0,shrink:1},void 0,e.name),null!=t&&o(a.default.Child,{className:c.default.flagImageWrapper,grow:0,shrink:0},void 0,t))},t.prototype.render=function(){var e=this.props.activeLocale;return o(i.default,{value:e,clearable:!1,searchable:!1,options:this.getLocaleOptions(),optionRenderer:this.renderOption,valueRenderer:this.renderOption,onChange:this.handleLocaleSelection})},t}(l.Component);t.default=(0,u.withLocalizedFormConsumer)(v),e.exports=t.default},1682:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(1324)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),a=u(n(1166)),i=n(1181);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=s(this,e.call.apply(e,[this].concat(l))),r.handleFieldChange=function(e,t,n){var o=r.props,l=o.name,a=o.onChange;(0,o.setFieldValue)(l,e),null!=a&&a(e,l,n)},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.getFieldValue,n=e.name,u=(0,o.default)(this.props,i.withLocalizedFormConsumer.injectedProps);return l.createElement(a.default,r({},u,{onChange:this.handleFieldChange,name:n,value:t(n)||""}))},t}(l.Component);t.default=(0,i.withLocalizedFormConsumer)(f),e.exports=t.default},1691:function(e,t){e.exports=function(e){return function(t,n,r){for(var o=-1,l=Object(t),a=r(t),i=a.length;i--;){var u=a[e?i:++o];if(!1===n(l[u],u,l))break}return t}}},1692:function(e,t,n){var r=n(1691)();e.exports=r},1693:function(e,t,n){var r=n(1692),o=n(1225);e.exports=function(e,t){return e&&r(e,t,o)}},1694:function(e,t,n){var r=n(1693);e.exports=function(e,t,n,o){return r(e,function(e,r,l){t(o,n(e),r,l)}),o}},1695:function(e,t,n){var r=n(1694);e.exports=function(e,t){return function(n,o){return r(n,e,t(o),{})}}},1696:function(e,t,n){var r=n(1333),o=n(1695),l=n(1325),a=Object.prototype.toString,i=o(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=a.call(t)),e[t]=n},r(l));e.exports=i},1697:function(e,t,n){"use strict";t.__esModule=!0,t.Requirements=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),i=g(n(1696)),u=n(66),s=g(n(1162)),f=n(1181),c=g(n(1682)),d=g(n(395)),p=g(n(1168)),h=n(160),v=g(h),m=g(n(1166)),y=n(13);function g(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.Requirements={MINIMUM:"minimum",RECOMMENDED:"recommended"};var _=y.SkuRequirementsFields.DISK_SPACE,S=y.SkuRequirementsFields.RAM,O=[_,S],E=[y.SkuRequirementsFields.OS,y.SkuRequirementsFields.CPU,y.SkuRequirementsFields.GPU,y.SkuRequirementsFields.DIRECT_X,y.SkuRequirementsFields.RAM,y.SkuRequirementsFields.DISK_SPACE,y.SkuRequirementsFields.NETWORK,y.SkuRequirementsFields.SOUND_CARD,y.SkuRequirementsFields.NOTES],C=function(e){var t=e.label,n=e.name;return l(h.GridChild,{columnSpread:6,columnSpreadSmall:12,columnSpreadExtraSmall:12},void 0,l(s.default,{},void 0,t),l(c.default,{name:n}))},R=function(e){var t=e.requirements;return{disk:null==t?0:t[_],ram:null==t?0:t[S]}},w=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,f=Array(a),c=0;c<a;c++)f[c]=arguments[c];return n=r=b(this,e.call.apply(e,[this].concat(f))),r.state=o({},R(r.props)),r.setDefaultFieldValues=function(){var e=r.props,t=e.requirements,n=e.section,l=e.setLocalizedFieldValues,a=null!=t?t:o({},(0,i.default)(y.SkuRequirementsFields));for(var u in a){var s=n+"-"+u,f=a[u]||{default:" "};O.includes(u)||l(s,f)}},r.handleInputChange=function(e,t){var n,o=parseInt(e,10);null==t||isNaN(o)||r.setState(((n={})[t]=o,n))},r.renderFields=function(){var e=r.props.section,t=(0,y.getSystemRequirementsLabels)();return E.map(function(n){return O.includes(n)?l(h.GridChild,{columnSpread:6,columnSpreadSmall:12,columnSpreadExtraSmall:12},n,l(s.default,{},void 0,t[n]),l(m.default,{name:n,value:(0,u.get)(r.state,n,""),onChange:r.handleInputChange})):l(C,{label:t[n],name:e+"-"+n},n)})},r.reset=function(){r.setDefaultFieldValues(),r.setState(o({},R(r.props)))},r.getNonLocalizedValues=function(){var e=r.state;return{ram:e.ram,disk:e.disk}},b(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setDefaultFieldValues()},t.prototype.render=function(){var e=this.props.heading;return l(d.default,{},void 0,l(p.default,{hasBottomPadding:!0},void 0,e),l(v.default,{},void 0,l(h.GridSection,{},void 0,this.renderFields())))},t}(a.Component);t.default=(0,f.withLocalizedFormConsumer)(w)},1698:function(e,t,n){"use strict";t.__esModule=!0;var r,o=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=F(n(2)),i=L(n(22)),u=n(74),s=L(n(163)),f=L(n(397)),c=F(n(1188)),d=L(n(1165)),p=L(n(1162)),h=n(1181),v=L(n(1265)),m=L(n(395)),y=L(n(1164)),g=L(n(1163)),b=L(n(1169)),_=n(396),S=L(_),O=n(160),E=L(O),C=n(1697),R=L(C),w=n(43);function L(e){return e&&e.__esModule?e:{default:e}}function F(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var A=n(13).OperatingSystems.WINDOWS,P={hasUnsavedChanges:!1,isSubmitting:!1,hasSubmitted:!1,unblock:null,hasError:!1},T=o(v.default,{}),N=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=Array(i),f=0;f<i;f++)u[f]=arguments[f];return n=r=M(this,e.call.apply(e,[this].concat(u))),r.minReqsRef=a.createRef(),r.recReqsRef=a.createRef(),r.state=l({},P),r.getRequirements=function(e){var t=r.props.sku;return null==t.system_requirements?null:t.system_requirements[A][e]},r.handleFormChange=function(){r.state.hasUnsavedChanges||r.setState(function(e){return null!=e.unblock&&e.unblock(),{hasUnsavedChanges:!0,unblock:s.default.blockTransition()}})},r.handleFormSubmit=function(e){var t,n=r.props.getLocalizedFieldValues,o=r.props.match.params,a=o.id,i=o.skuId,u={minimum:{},recommended:{}};for(var s in e){var f=s.split("-"),d=f[0],p=f[1],h=n(s);null!=h&&(u[d][p]=h)}null!=r.minReqsRef.current&&(u.minimum=l({},u.minimum,r.minReqsRef.current.getNonLocalizedValues())),null!=r.recReqsRef.current&&(u.recommended=l({},u.recommended,r.recReqsRef.current.getNonLocalizedValues()));var v={system_requirements:(t={},t[A]=u,t)};c.updateSku(a,i,v).then(function(){r.setState(function(e){return null!=e.unblock&&e.unblock(),{isSubmitting:!1,hasError:!1,hasSubmitted:!0,hasUnsavedChanges:!1,unblock:null}})}).catch(function(){r.setState({isSubmitting:!1,hasError:!0,hasSubmitted:!1})})},r.resetForm=function(){null!=r.minReqsRef.current&&r.minReqsRef.current.reset(),null!=r.recReqsRef.current&&r.recReqsRef.current.reset(),r.setState(function(e){return null!=e.unblock&&e.unblock(),l({},P)})},r.renderFormStatus=function(){var e=r.state,t=e.hasError,n=e.hasSubmitted;return t?o(S.default,{type:_.AlertTypes.ERROR},void 0,w.Messages.SkuInformation.SUBMISSION_ERROR):n?o(S.default,{type:_.AlertTypes.SUCCESS},void 0,w.Messages.Alerts.SUCCESS_CHANGES_SAVED):void 0},M(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state,t=e.hasUnsavedChanges,n=e.isSubmitting;return o(a.Fragment,{},void 0,o(m.default,{},void 0,o(y.default,{},void 0,w.Messages.SkuRequirements.PAGE_HEADING),o(g.default,{},void 0,w.Messages.SkuRequirements.PAGE_SUB_HEADING),this.renderFormStatus()),o(m.default,{},void 0,o(E.default,{},void 0,o(O.GridSection,{},void 0,o(O.GridChild,{columnSpread:12},void 0,o(S.default,{type:_.AlertTypes.INFO},void 0,w.Messages.SkuManagement.LOCALE_DROPDOWN_DESCRIPTION)),o(O.GridChild,{columnSpread:4,columnSpreadSmallMedium:5,columnSpreadSmall:8,columnSpreadExtraSmall:12},void 0,o(p.default,{},void 0,w.Messages.SkuRequirements.CHOOSE_LOCALE),T)))),o(d.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},void 0,a.createElement(R.default,{heading:w.Messages.SkuRequirements.MINIMUM,section:C.Requirements.MINIMUM,requirements:this.getRequirements(C.Requirements.MINIMUM),ref:this.minReqsRef}),a.createElement(R.default,{heading:w.Messages.SkuRequirements.RECOMMENDED,section:C.Requirements.RECOMMENDED,requirements:this.getRequirements(C.Requirements.RECOMMENDED),ref:this.recReqsRef}),t?o(b.default,{actionCopy:w.Messages.Actions.PUBLISH_CHANGES,onReset:this.resetForm,submitting:n}):null))},t}(a.Component);t.default=i.default.connectStores([f.default],function(e){return{sku:f.default.getSku(e.match.params.skuId)}})((0,h.withLocalizedFormProvider)((0,h.withLocalizedFormConsumer)((0,u.withRouter)(N)))),e.exports=t.default}}]);
//# sourceMappingURL=4425eb911b5233a488fe.js.map