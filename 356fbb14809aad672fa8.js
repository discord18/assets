(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1373:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}t.default=e}(r(1));var o,a=i(r(9)),n=i(r(25)),l=i(r(1237));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,r=e.children,i=e.tag,s=void 0===i?"h2":i,d=e.isFlush,u=void 0!==d&&d;return function(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(n.default,{className:(0,a.default)(l.default.heading,(t={},t[l.default.flush]=u,t)),color:n.default.Colors.WHITE,size:n.default.Sizes.LARGE,tag:s,weight:n.default.Weights.MEDIUM},void 0,r)};s.displayName="PageHeading";var d=s;t.default=d},1374:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}t.default=e}(r(1));var o,a=i(r(9)),n=i(r(25)),l=i(r(1238));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,r=e.children,i=e.className,s=e.tag,d=void 0===s?"p":s,u=e.isFlush,c=void 0!==u&&u;return function(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(n.default,{className:(0,a.default)(l.default.subheading,i,(t={},t[l.default.flush]=c,t)),color:n.default.Colors.PRIMARY_300,size:n.default.Sizes.MEDIUM_LARGE,tag:d,weight:n.default.Weights.NORMAL},void 0,r)};s.displayName="PageSubheading";var d=s;t.default=d},1425:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(1)),n=v(r(9)),l=v(r(1416)),i=r(132),s=v(r(1481)),d=v(r(433)),u=v(r(420)),c=r(70),f=r(21),p=v(r(1249));function v(e){return e&&e.__esModule?e:{default:e}}function h(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var y={CIRCLE:p.default.circle,SQUARE:p.default.square},m=function(e){var t,r;function o(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={error:null},t.handleFileChange=function(e){e.stopPropagation(),e.preventDefault();var r=e.target.files[0],o=t.props,a=o.size,n=o.minSize,l=o.onChange,i=o.fieldName;if(null!=r){var d=new FileReader;d.onload=function(e){var r=new Image;r.src=e.target.result,r.onload=function(){if(null!=n&&(r.width<n||r.height<n))t.setState({error:f.Messages.AvatarUploader.MINIMUM_SIZE.format({size:n})});else{null!=t.state.error&&t.setState({error:null});var e=document.createElement("canvas");e.width=r.width,e.height=r.height,e.getContext("2d").drawImage(r,0,0,e.width,e.height);var o=r.width<r.height?r.width/a:r.height/a,d=document.createElement("canvas");d.width=r.width/o,d.height=r.height/o,s.default.resizeCanvas(e,d,{alpha:!0},function(){var e=document.createElement("canvas");e.width=a,e.height=a;var t=(d.width-e.width)/-2,r=(d.height-e.height)/-2;e.getContext("2d").drawImage(d,t,r,d.width,d.height),l(e.toDataURL("image/png"),i)})}}},d.readAsDataURL(r)}},t.handleRemove=function(){var e=t.props,r=e.fieldName;(0,e.onChange)(null,r)},t}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=o.prototype;return a.renderRemoveButton=function(){var e=this.props,t=e.disableRemoveAction,r=e.disabled,o=e.size,a=e.avatar,n=this.state.error;return t?null:r?h("small",{className:p.default.removeButtonSmall},void 0,f.Messages.AvatarUploader.SIZE.format({size:o})):null!=n?h("small",{className:p.default.removeButtonSmallError},void 0,n):null!=a?h(d.default,{className:p.default.removeButton,onClick:this.handleRemove},void 0,f.Messages.AvatarUploader.REMOVE):h("small",{className:(0,c.getClass)(p.default,"removeButtonSmall",null!=n?"Error":null)},void 0,f.Messages.AvatarUploader.SIZE.format({size:o}))},a.render=function(){var e,t,r,o,a=this.props,s=a.avatar,d=a.hint,c=a.name,v=a.makeURL,y=a.hasBorder,m=a.shape;return(t=null!=s&&/^data:/.test(s)?s:v(s))?r='url("'+t+'")':o=h("div",{className:p.default.acronym},void 0,(0,i.getAcronym)(c)),h("div",{className:(0,n.default)(p.default.avatarUploader,(e={},e[p.default.border]=y,e))},void 0,h("div",{className:(0,n.default)(p.default.avatarUploaderInner,m),style:{backgroundImage:r}},void 0,h("div",{className:p.default.addPhotoWrapper},void 0,h(u.default,{className:p.default.addPhotoIcon,name:u.default.Names.ADD_PHOTO})),o,h("div",{className:p.default.hint},void 0,d),h(l.default,{onChange:this.handleFileChange,filters:[{name:f.Messages.AvatarUploader.IMAGES,extensions:["jpg","jpeg","png"]}]})),this.renderRemoveButton())},o}(a.PureComponent);t.default=m,m.displayName="AvatarUploader",m.Shape=y,m.defaultProps={disableRemoveAction:!1,name:"",size:64,makeURL:function(e){return e},hint:f.Messages.AvatarUploader.SELECT_IMAGE,disabled:!1,hasBorder:!1,shape:y.CIRCLE}},1457:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}t.default=e}(r(1));var o,a=i(r(9)),n=r(70),l=i(r(1260));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var u={DEFAULT:l.default.themeDefault,CLEAR:l.default.themeClear},c={DEFAULT:l.default.sizeDefault,MINI:l.default.sizeMini},f="enabled",p="disabled",v=function(e){var t=e.id,r=e.onChange,o=e.value,i=e.defaultValue,v=e.fill,h=e.theme,y=void 0===h?u.DEFAULT:h,m=e.disabled,g=e.className,_=e.size,b=void 0===_?c.DEFAULT:_,O=e.style,S=e.name,A=m?p:f;return null!=v&&o&&(O=d({},O,{backgroundColor:v})),s("div",{className:(0,a.default)(g,(0,n.getClass)(l.default,"switch",A),b,y),style:O},void 0,s("input",{id:t,className:(0,a.default)(l.default.input,(0,n.getClass)(l.default,"checkbox",A)),type:"checkbox",disabled:m,onChange:r,checked:o,defaultChecked:i,name:S}),s("div",{className:l.default.indicator}))};v.displayName="Switch",v.Themes=u,v.Sizes=c;var h=v;t.default=h},1482:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var o,a,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(21),i=(o=r(1268))&&o.__esModule?o:{default:o};var s=function(e){var t,r;function o(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={isRevealed:!1},t.handleRevealClick=function(){t.setState({isRevealed:!0})},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.state.isRevealed,t=this.props,r=t.children,o=t.revealActionContent;return e?r:function(e,t,r,o){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=o;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}("button",{className:i.default.button,onClick:this.handleRevealClick,type:"button"},void 0,o)},o}(n.Component);t.default=s,s.displayName="ClickToReveal",s.defaultProps={revealActionContent:l.Messages.Actions.CLICK_TO_REVEAL}},1556:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var o,a=c(r(1)),n=u(r(52)),l=u(r(25)),i=c(r(179)),s=r(21),d=u(r(443));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function f(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var p=function(e){var t,r;function o(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).onConfirm=function(){(0,t.props.onConfirm)(!0)},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props,t=e.label,r=e.open,o=e.message,a=e.confirmText,s=e.cancelText,u=e.submitting,c=e.onCancel;return f(i.default,{onRequestClose:c,open:r},void 0,f(i.ModalContent,{},void 0,f(i.ModalHeader,{},void 0,t),f(l.default,{},void 0,o)),f(i.ModalFooter,{},void 0,f(i.ModalCancel,{onClick:c},void 0,s),f(n.default,{className:d.default.modalFooterButton,submitting:u,onClick:this.onConfirm,type:"button"},void 0,a)))},o}(a.PureComponent);t.default=p,p.displayName="ConfirmModal",p.defaultProps={open:!1,label:s.Messages.DeveloperPages.DEFAULT_CONFIRM_TITLE,message:s.Messages.DeveloperPages.DEFAULT_CONFIRM_MSG,confirmText:s.Messages.DeveloperPages.CONFIRM_BUTTON,cancelText:s.Messages.DeveloperPages.CANCEL_BUTTON}},1557:function(e,t,r){"use strict";t.__esModule=!0,t.toSnakeCase=function(e){var t={};return Object.keys(e).forEach(function(r){var o=r.replace(/([A-Z]+|[0-9])/g,function(e){return"_"+e.toLowerCase()});t[o]=e[r]}),t},t.setSelectionRange=t.getSelectionPosition=void 0;t.getSelectionPosition=function(e){if(null!=e.selectionStart)return{selectionEnd:e.selectionEnd,selectionStart:e.selectionStart};var t=e.value.length;return{selectionEnd:t,selectionStart:t}};t.setSelectionRange=function(e,t){var r=t.selectionEnd,o=t.selectionStart;e.focus(),e.selectionStart=o,e.selectionEnd=r}},1628:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUID=function(){var e=1,t=new WeakMap,r=function(o){return"number"==typeof o||"string"==typeof o?"not-uid"+String(o):t.has(o)?"uid"+t.get(o):(t.set(o,e++),r(o))};return r}},2049:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(1)),n=h(r(15)),l=h(r(178)),i=h(r(96)),s=h(r(1375)),d=h(r(1373)),u=h(r(421)),c=h(r(1374)),f=h(r(2050)),p=r(4),v=r(21);function h(e){return e&&e.__esModule?e:{default:e}}function y(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var m=function(e){var t,r;function o(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={error:null,success:null},t.renderAlert=function(){var e=t.state,r=e.error,o=e.success;return null!=r?y(s.default,{type:s.default.Types.ERROR},void 0,r):null!=o?y(s.default,{type:s.default.Types.SUCCESS},void 0,o):void 0},t.setMessage=function(e){var r=e.error,o=e.success;t.setState({error:r,success:o})},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props.applicationDetails;return y(a.Fragment,{},void 0,y(u.default,{},void 0,y(d.default,{},void 0,v.Messages.Bots.HEADING),y(c.default,{},void 0,v.Messages.Bots.SUBHEADING),y("p",{},void 0,v.Messages.Bots.SUBHEADING_LINK.format({link:i.default.prependBasename(p.Routes.DOCS_TOPICS_OAUTH2_BOTS)})),this.renderAlert()),y(f.default,{application:e,renderAlert:this.setMessage}))},o}(a.Component);m.displayName="Bots";var g=n.default.connectStores([l.default],function(e){var t=e.match.params.id;return{applicationDetails:l.default.getApplication(t)}})(m);t.default=g},2050:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var o,a=S(r(1)),n=O(r(46)),l=S(r(129)),i=O(r(52)),s=O(r(40)),d=S(r(418)),u=O(r(1394)),c=r(1557),f=O(r(1556)),p=O(r(421)),v=O(r(424)),h=O(r(1381)),y=S(r(2051)),m=O(r(1629)),g=r(4),_=r(21),b=O(r(1300));function O(e){return e&&e.__esModule?e:{default:e}}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function A(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var M=A(m.default,{showInteger:!0}),C=function(e){var t,r;function o(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={showBuilder:null!=t.props.application.bot,showAddBotModal:!1,showTokenModal:!1,generatingToken:!1,addingBot:!1},t.handleAddBot=function(){var e=t.props,r=e.application,o=e.renderAlert;t.setState({addingBot:!0}),l.createBot(r.id).then(function(){t.setState({showBuilder:!0,showAddBotModal:!1,addingBot:!1}),o({success:_.Messages.Bots.BOT_CREATE_SUCCESS,error:null})}).catch(function(e){o({error:e.message}),t.setState({showAddBotModal:!1,addingBot:!1})})},t.handleGenerateToken=function(){var e=t.props,r=e.application,o=e.renderAlert;t.setState({generatingToken:!0}),l.generateToken(r.id).then(function(){o({success:_.Messages.Bots.TOKEN_GENERATE_SUCCESS,error:null}),t.setState({showTokenModal:!1,generatingToken:!1})}).catch(function(e){o({error:e.message}),t.setState({showTokenModal:!1,generatingToken:!1})})},t.handleUpdateBot=function(e){var r=t.props,o=r.application,a=r.renderAlert;if(null==o.bot)return Promise.resolve(null);var i=o.bot.token,s=n.default.pick(e,n.default.values(y.AppFields)),d=n.default.pick(e,n.default.values(y.BotFields));return t.setState({addingBot:!0}),Promise.all([l.updateApplication(o.id,(0,c.toSnakeCase)(s)),l.updateBot(o.id,i,d)]).then(function(){a({success:_.Messages.Bots.UPDATE_BOT_SUCCESS,error:null})}).catch(function(e){return a({error:e.message})})},t.toggleAddBotModal=function(){t.setState(function(e){return{showAddBotModal:!e.showAddBotModal}})},t.toggleOpenTokenModal=function(){t.setState(function(e){return{showTokenModal:!e.showTokenModal}})},t.renderBuilder=function(){var e=t.props.application,r=t.state.showBuilder,o=r?null:A(i.default,{onClick:t.toggleAddBotModal,className:b.default.addButton},void 0,_.Messages.Bots.ADD_BOT);return A(p.default,{},void 0,A(s.default,{direction:s.default.Direction.HORIZONTAL,align:s.default.Align.CENTER,justify:s.default.Justify.BETWEEN,wrap:s.default.Wrap.NO_WRAP},void 0,A("div",{},void 0,A(v.default,{},void 0,_.Messages.Bots.BUILD),A(h.default,{},void 0,_.Messages.Bots.CREATE_BOT)),o),r&&null!=e.bot?A(y.default,{application:e,openTokenModal:t.toggleOpenTokenModal,updateBot:t.handleUpdateBot}):A("img",{alt:_.Messages.Bots.BOT_IMG_ALT,src:g.Images.BOT_ROBOILLO,className:b.default.botFriend}))},t.renderPermissionsCalculator=function(){return t.state.showBuilder?A(p.default,{isFlush:!0},void 0,A(d.default,{},void 0,A(d.GridSection,{},void 0,A(d.GridChild,{columnSpread:12},void 0,A(u.default,{},void 0,A(v.default,{},void 0,_.Messages.Bots.PERMISSIONS_HEADING),A(h.default,{},void 0,_.Messages.Bots.PERMISSIONS_SUBHEADING),M))))):null},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.state,t=e.showAddBotModal,r=e.showTokenModal,o=e.generatingToken,n=e.addingBot;return A(a.Fragment,{},void 0,this.renderBuilder(),this.renderPermissionsCalculator(),A(f.default,{open:r,onCancel:this.toggleOpenTokenModal,onConfirm:this.handleGenerateToken,submitting:o,label:_.Messages.Bots.BOT_TOKEN_GENERATE_MODAL_LABEL,message:_.Messages.Bots.BOT_TOKEN_GENERATE_MODAL_DESCRIPTION}),A(f.default,{open:t,onCancel:this.toggleAddBotModal,onConfirm:this.handleAddBot,submitting:n,label:_.Messages.Bots.BOT_CREATE_MODAL_LABEL,message:_.Messages.Bots.BOT_CREATE_MODAL_DESCRIPTION}))},o}(a.Component);t.default=C,C.displayName="BotBuilder"},2051:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.AppFields=t.BotFields=void 0;var o,a=C(r(1)),n=r(83),l=M(r(52)),i=M(r(40)),s=C(r(418)),d=M(r(1394)),u=M(r(2052)),c=M(r(25)),f=M(r(422)),p=r(130),v=r(185),h=M(r(1425)),y=M(r(1482)),m=M(r(1410)),g=M(r(423)),_=M(r(419)),b=M(r(426)),O=r(4),S=r(21),A=M(r(1299));function M(e){return e&&e.__esModule?e:{default:e}}function C(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function E(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var P={USERNAME:"username",AVATAR:"avatar"};t.BotFields=P;var w={BOT_PUBLIC:"botPublic",BOT_REQUIRE_CODE_GRANT:"botRequireCodeGrant"};t.AppFields=w;var T=function(e){return{avatar:null!=e.application.bot?(0,v.getUserAvatarURL)(e.application.bot,p.Sizes.MEDIUM_LARGE):null,username:null!=e.application.bot?e.application.bot.username:null,hasUnsavedChanges:!1,botPublic:e.application.bot_public,botRequireCodeGrant:e.application.bot_require_code_grant,isAvatarDefined:null!=e.application.bot&&null!=e.application.bot.avatar,isSubmitting:!1,isRegenerating:!1,isFocused:!1}},B=function(e){var t,r;function o(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state=T(t.props),t.handleBotAvatarChange=function(e){t.setState(function(t,r){var o=null==r.application.bot?0:r.application.bot.discriminator;return{avatar:null!=e?e:(0,v.getDefaultAvatar)(o),hasUnsavedChanges:!0,isAvatarDefined:null!=e}})},t.handleChange=function(e,r){var o;null!=r&&t.setState(((o={})[r]=e,o.hasUnsavedChanges=!0,o))},t.onSubmit=function(e){var r=t.props.updateBot;t.setState({isSubmitting:!0}),r(e).then(function(){t.setState({isSubmitting:!1,hasUnsavedChanges:!1})})},t.handleFocusAndBlur=function(){t.setState(function(e){return{isFocused:!e.isFocused}})},t.handleFormReset=function(){t.setState(T(t.props))},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props,t=e.application,r=e.openTokenModal,o=this.state,a=o.botPublic,n=o.botRequireCodeGrant,p=o.hasUnsavedChanges,v=o.isAvatarDefined,M=o.isSubmitting,C=o.isRegenerating,T=o.avatar,B=o.username,N=o.isFocused,D=t.bot;return null==D?null:E(g.default,{onSubmit:this.onSubmit},void 0,E(s.default,{},void 0,E(s.GridSection,{},void 0,E(s.GridChild,{columnSpread:3,className:A.default.avatarUploader},void 0,E(_.default,{},void 0,S.Messages.Bots.BOT_ICON),E(d.default,{},void 0,E("input",{type:"hidden",name:P.AVATAR,value:v?T:""}),E(h.default,{disableRemoveAction:!v,fieldName:P.AVATAR,name:B||"",application:t,onChange:this.handleBotAvatarChange,avatar:T,size:O.AVATAR_UPLOAD_SIZE}))),E(s.GridChild,{columnSpread:8,columnSpreadExtraSmall:12,columnSpreadSmall:12,grow:1,shrink:1},void 0,E(s.default,{},void 0,E(s.GridSection,{},void 0,E(s.GridChild,{columnSpread:12},void 0,E(_.default,{},void 0,S.Messages.Forms.USERNAME),E("div",{className:N?A.default.multiInputFocused:A.default.multiInputBlur},void 0,E(f.default,{maxLength:O.MAXIMUM_BOT_USERNAME_LENGTH,value:B||"",onChange:this.handleChange,onFocus:this.handleFocusAndBlur,onBlur:this.handleFocusAndBlur,name:P.USERNAME,className:A.default.multiInputFirst}),E("div",{className:A.default.inputWrapper},void 0,E("span",{className:A.default.inputPrefix},void 0,"#"),E(f.default,{value:D.discriminator,className:A.default.multiInputLast,disabled:!0}))))),E(s.GridSection,{},void 0,E(s.GridChild,{columnSpread:12},void 0,E(_.default,{},void 0,S.Messages.Bots.TOKEN),E(y.default,{revealActionContent:S.Messages.Bots.REVEAL_TOKEN},void 0,D.token),E("div",{className:A.default.buttonWrap},void 0,E(m.default,{textToCopy:D.token,className:A.default.copyButton}),E(l.default,{height:l.default.Height.SHORT,submitting:C,onClick:r},void 0,S.Messages.Actions.REGENERATE)))),E(s.GridSection,{},void 0,E(s.GridChild,{columnSpread:12},void 0,E(_.default,{className:A.default.switchLabel},void 0,S.Messages.Bots.PUBLIC_BOT),E(i.default,{wrap:i.default.Wrap.NO_WRAP},void 0,E(c.default,{className:A.default.firstSwitchItem},void 0,S.Messages.Bots.PUBLIC_BOT_DESCRIPTION),E(u.default,{className:A.default.switch,value:a,name:w.BOT_PUBLIC,onChange:this.handleChange})))),E(s.GridSection,{},void 0,E(s.GridChild,{columnSpread:12},void 0,E(_.default,{},void 0,S.Messages.Bots.REQUIRE_OAUTH_CODE),E(i.default,{wrap:i.default.Wrap.NO_WRAP,className:A.default.lastSwitchItem},void 0,E(c.default,{},void 0,S.Messages.Bots.REQUIRE_OAUTH_DESCRIPTION),E(u.default,{className:A.default.switch,value:n,name:w.BOT_REQUIRE_CODE_GRANT,onChange:this.handleChange})))))))),E(b.default,{isVisible:p,onReset:this.handleFormReset,submitting:M,hasExtraPadding:!1}))},o}(a.Component);B.displayName="BotDetails";var N=(0,n.withRouter)(B);t.default=N},2052:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var o,a=p(r(1)),n=f(r(9)),l=r(2053),i=f(r(40)),s=f(r(1457)),d=f(r(2055)),u=p(r(2056)),c=f(r(1298));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function v(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var h=function(e){var t,r;function o(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).handleChange=function(e){var r=t.props,o=r.onChange,a=r.name,n=e.currentTarget;n instanceof HTMLInputElement&&o(n.checked,a)},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e,t,r,o=this,a=this.props,f=a.value,p=a.defaultValue,h=a.disabled,y=a.fill,m=a.hideBorder,g=a.children,_=a.className,b=a.note,O=a.style,S=a.theme,A=a.size,M=a.name;return A===s.default.Sizes.MINI?(t=c.default.titleMini,r=c.default.dividerMini):(t=c.default.titleDefault,r=c.default.dividerDefault),v(i.default,{style:O,className:(0,n.default)(_,(e={},e[c.default.disabled]=h,e)),direction:i.default.Direction.VERTICAL},void 0,v(l.SmartUID,{},void 0,function(e){return v(i.default,{align:i.default.Align.START},void 0,v(i.default.Child,{},void 0,v("label",{htmlFor:e,className:t},void 0,g)),v(i.default.Child,{grow:0,shrink:0},void 0,v(s.default,{id:e,value:f,defaultValue:p,fill:y,onChange:o.handleChange,disabled:h,theme:S,size:A,name:M})))}),b&&v(i.default.Child,{className:c.default.note},void 0,v(u.default,{disabled:h,type:u.Types.DESCRIPTION},void 0,b)),!m&&v(d.default,{className:r}))},o}(a.PureComponent);h.displayName="SwitchItem",h.Sizes=s.default.Sizes,h.Themes=s.default.Themes,h.defaultProps={disabled:!1,size:s.default.Sizes.DEFAULT,theme:s.default.Themes.DEFAULT,hideBorder:!1,className:c.default.switchItem};var y=h;t.default=y},2053:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1628);t.generateUID=o.generateUID;var a=r(2054);t.UID=a.UID,t.UIDReset=a.UIDReset,t.SmartUID=a.SmartUID;var n=o.generateUID();t.uid=n},2054:function(e,t,r){"use strict";var o,a=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};Object.defineProperty(t,"__esModule",{value:!0});var l=r(1),i=r(1628),s=function(){return{value:1,uid:i.generateUID()}},d=s(),u=l.createContext(s()),c=function(e){return e.value++},f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={quartz:t.props.idSource||d,id:c(t.props.idSource||d)},t.prefixId=function(e){return String(t.props.name?t.props.name(e):e)},t}return a(t,e),t.prototype.render=function(){var e=this,t=this.props.children,r=this.state,o=r.id,a=r.quartz;return t(this.prefixId(o),function(t){return e.prefixId(a.uid(t))})},t}(l.Component);t.UID=f,t.UIDReset=function(e){var t=e.children;return l.createElement(u.Provider,{value:s()},t)},t.SmartUID=function(e){return l.createElement(u.Consumer,null,function(t){return l.createElement(f,n({},e,{idSource:t}))})}},2055:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(1)),n=i(r(9)),l=i(r(1296));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.className,r=e.style;return function(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===l)t.children=a;else if(l>1){for(var s=new Array(l),d=0;d<l;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}("div",{className:(0,n.default)(l.default.divider,t),style:r})},a}(a.PureComponent);s.displayName="FormDivider";var d=s;t.default=d},2056:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.Types=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(1)),a=i(r(9)),n=i(r(25)),l=i(r(1297));function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var d={DEFAULT:"default",INPUT_PLACEHOLDER:"placeholder",DESCRIPTION:"description",LABEL_BOLD:"labelBold",LABEL_SELECTED:"labelSelected",LABEL_DESCRIPTOR:"labelDescriptor"};t.Types=d;var u="modeDefault",c="modeDisabled",f="modeSelectable",p=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.render=function(){var e=this.props,t=e.type,r=e.className,i=e.disabled,d=e.selectable,p=e.children,v=e.style,h=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["type","className","disabled","selectable","children","style"]),y=u;return i?y=c:d&&(y=f),o.createElement(n.default,s({className:(0,a.default)(l.default[t],r,l.default[y]),color:n.default.Colors.PRIMARY,style:v},h),p)},i}(o.PureComponent);p.displayName="FormText",p.Types=d,p.defaultProps={type:d.DEFAULT};var v=p;t.default=v}}]);
//# sourceMappingURL=356fbb14809aad672fa8.js.map