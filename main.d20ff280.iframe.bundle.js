(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{461:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/dawe-logo-white.cf433320.png"},481:function(module,exports,__webpack_require__){__webpack_require__(482),__webpack_require__(642),__webpack_require__(643),__webpack_require__(853),__webpack_require__(854),__webpack_require__(862),__webpack_require__(863),__webpack_require__(859),__webpack_require__(855),__webpack_require__(864),__webpack_require__(856),__webpack_require__(857),__webpack_require__(858),module.exports=__webpack_require__(843)},549:function(module,exports){},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(206)},843:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(206).configure)([__webpack_require__(844),__webpack_require__(845),__webpack_require__(846),__webpack_require__(847)],module,!1)}).call(this,__webpack_require__(200)(module))},844:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=844},845:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=845},846:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=846},847:function(module,exports,__webpack_require__){var map={"./button/src/button.stories.js":860,"./header/src/header.stories.js":861};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=847},858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(21),__webpack_require__(5),__webpack_require__(50),__webpack_require__(425),__webpack_require__(838),__webpack_require__(47),__webpack_require__(839),__webpack_require__(840),__webpack_require__(424);var client_api=__webpack_require__(871),esm=__webpack_require__(4),react=__webpack_require__(0),client=__webpack_require__(206),jsx_runtime=(__webpack_require__(841),__webpack_require__(12),__webpack_require__(40)),Context=Object(react.createContext)({linkFactory:null}),agds_provider_AgdsProvider=function AgdsProvider(_ref){var children=_ref.children,linkFactory=_ref.linkFactory;return Object(jsx_runtime.jsx)(Context.Provider,{value:{linkFactory:linkFactory},children:children})};agds_provider_AgdsProvider.displayName="AgdsProvider";var _excluded=["href","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var decorators_AgdsDecorator=function AgdsDecorator(Story){return Object(jsx_runtime.jsx)(agds_provider_AgdsProvider,{linkFactory:function linkFactory(_ref){var href=_ref.href,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)("a",Object.assign({href:href},props,{children:children}))},children:Object(jsx_runtime.jsx)(Story,{})})};decorators_AgdsDecorator.displayName="AgdsDecorator";try{decorators_AgdsDecorator.displayName="AgdsDecorator",decorators_AgdsDecorator.__docgenInfo={description:"",displayName:"AgdsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/index.tsx#AgdsDecorator"]={docgenInfo:decorators_AgdsDecorator.__docgenInfo,name:"AgdsDecorator",path:".storybook/decorators/index.tsx#AgdsDecorator"})}catch(__react_docgen_typescript_loader_error){}var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(client.addDecorator)(decorators_AgdsDecorator),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},860:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(12),__webpack_require__(848),__webpack_require__(0),__webpack_require__(849);var jsx_runtime=__webpack_require__(40),button_Button=function Button(_ref){_ref.dark;return Object(jsx_runtime.jsx)("button",{className:"au-btn",children:"Hello"})};button_Button.displayName="Button";try{button_Button.displayName="Button",button_Button.__docgenInfo={description:"",displayName:"Button",props:{dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/button/src/button.tsx#Button"]={docgenInfo:button_Button.__docgenInfo,name:"Button",path:"../packages/button/src/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/button/src/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../packages/button/src/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"AgDS/Button",component:button_Button,parameters:{}};var button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(button_Button,Object.assign({},args))};button_stories_Template.displayName="Template";var Primary=button_stories_Template.bind({});Primary.args={variant:"primary",children:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters)},861:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return header_stories_Basic}));__webpack_require__(12),__webpack_require__(0),__webpack_require__(851);var dawe_logo_white=__webpack_require__(461),dawe_logo_white_default=__webpack_require__.n(dawe_logo_white),jsx_runtime=__webpack_require__(40),header_Header=function Header(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Export Service":_ref$title,subline=_ref.subline,_ref$Logo=_ref.Logo,Logo=void 0===_ref$Logo?dawe_logo_white_default.a:_ref$Logo,_ref$logoAltText=_ref.logoAltText,logoAltText=void 0===_ref$logoAltText?"Export Service":_ref$logoAltText;return Object(jsx_runtime.jsx)("header",{className:"au-grid au-header au-header--dark",role:"banner",children:Object(jsx_runtime.jsx)("div",{className:"container-fluid",children:Object(jsx_runtime.jsx)("div",{className:"row",children:Object(jsx_runtime.jsx)("div",{className:"col-md-9",children:Object(jsx_runtime.jsxs)("a",{className:"au-header__brand",href:"#",children:[Object(jsx_runtime.jsx)("img",{className:"au-header__brand-image",alt:logoAltText,src:Logo}),Object(jsx_runtime.jsxs)("div",{className:"au-header__text",children:[Object(jsx_runtime.jsx)("h1",{className:"au-header__heading",children:title}),subline&&Object(jsx_runtime.jsx)("div",{className:"au-header__subline",children:subline})]})]})})})})})};header_Header.displayName="Header";try{header_Header.displayName="Header",header_Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:{value:"Export Service"},description:"",name:"title",required:!1,type:{name:"string"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"string"}},Logo:{defaultValue:null,description:"",name:"Logo",required:!1,type:{name:"string"}},logoAltText:{defaultValue:{value:"Export Service"},description:"",name:"logoAltText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/header/src/header.tsx#Header"]={docgenInfo:header_Header.__docgenInfo,name:"Header",path:"../packages/header/src/header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:{value:"Export Service"},description:"",name:"title",required:!1,type:{name:"string"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"string"}},Logo:{defaultValue:null,description:"",name:"Logo",required:!1,type:{name:"string"}},logoAltText:{defaultValue:{value:"Export Service"},description:"",name:"logoAltText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/header/src/index.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"../packages/header/src/index.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"AgDS/Header"};var header_stories_Basic=function Basic(){return Object(jsx_runtime.jsx)(header_Header,{})};header_stories_Basic.displayName="Basic",header_stories_Basic.parameters=Object.assign({storySource:{source:"() => <Header />"}},header_stories_Basic.parameters),header_stories_Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/header/src/header.stories.js"]={name:"Basic",docgenInfo:header_stories_Basic.__docgenInfo,path:"../packages/header/src/header.stories.js"})}},[[481,2,3]]]);