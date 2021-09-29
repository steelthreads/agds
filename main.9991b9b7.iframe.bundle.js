(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{109:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return agds_provider_AgdsProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return agds_provider_useLink}));var react=__webpack_require__(0),jsx_runtime=__webpack_require__(5),Context=Object(react.createContext)({linkFactory:function linkFactory(){return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{})}}),agds_provider_useLink=function useLink(){return Object(react.useContext)(Context).linkFactory},agds_provider_AgdsProvider=function AgdsProvider(_ref){var children=_ref.children,linkFactory=_ref.linkFactory;return Object(jsx_runtime.jsx)(Context.Provider,{value:{linkFactory:linkFactory},children:Object(jsx_runtime.jsx)("div",{className:"au-grid",children:children})})};agds_provider_AgdsProvider.displayName="AgdsProvider";try{agds_provider_AgdsProvider.displayName="AgdsProvider",agds_provider_AgdsProvider.__docgenInfo={description:"",displayName:"AgdsProvider",props:{linkFactory:{defaultValue:null,description:"",name:"linkFactory",required:!0,type:{name:"LinkFactoryType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/core/src/agds-provider.tsx#AgdsProvider"]={docgenInfo:agds_provider_AgdsProvider.__docgenInfo,name:"AgdsProvider",path:"../packages/core/src/agds-provider.tsx#AgdsProvider"})}catch(__react_docgen_typescript_loader_error){}try{AgdsProvider.displayName="AgdsProvider",AgdsProvider.__docgenInfo={description:"",displayName:"AgdsProvider",props:{linkFactory:{defaultValue:null,description:"",name:"linkFactory",required:!0,type:{name:"LinkFactoryType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/core/src/index.tsx#AgdsProvider"]={docgenInfo:AgdsProvider.__docgenInfo,name:"AgdsProvider",path:"../packages/core/src/index.tsx#AgdsProvider"})}catch(__react_docgen_typescript_loader_error){}},123:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return NavLink})),__webpack_require__.d(__webpack_exports__,"a",(function(){return MainNav}));__webpack_require__(0),__webpack_require__(858),__webpack_require__(860);var _ag_ds_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(109),classnames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(170),classnames__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),NavLink=function NavLink(_ref){var href=_ref.href,title=_ref.title,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,Link=Object(_ag_ds_core__WEBPACK_IMPORTED_MODULE_3__.b)();return console.log({href:href,title:title,active:active}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li",{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()(active&&"active"),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Link,{href:href,children:title})})};NavLink.displayName="NavLink";var MainNav=function MainNav(_ref2){var _ref2$dark=_ref2.dark,dark=void 0===_ref2$dark||_ref2$dark,children=_ref2.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("nav",{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()("au-main-nav",dark&&"au-main-nav--dark"),"aria-label":"main",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"row",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col-md-12",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{id:"main-nav-default",className:"au-main-nav__content",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{"aria-controls":"main-nav-default","aria-expanded":"false",className:"au-main-nav__toggle au-main-nav__toggle--open",children:"Menu"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"au-main-nav__menu",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"au-main-nav__menu-inner",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"au-main-nav__focus-trap-top"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{"aria-controls":"main-nav-default",className:"au-main-nav__toggle au-main-nav__toggle--close",children:"Close"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul",{className:"au-link-list",children:children}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"au-main-nav__focus-trap-bottom"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"au-main-nav__overlay","aria-controls":"main-nav-default"})]})})})})})};MainNav.displayName="MainNav";try{NavLink.displayName="NavLink",NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/main-nav/src/main-nav.tsx#NavLink"]={docgenInfo:NavLink.__docgenInfo,name:"NavLink",path:"../packages/main-nav/src/main-nav.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}try{MainNav.displayName="MainNav",MainNav.__docgenInfo={description:"",displayName:"MainNav",props:{dark:{defaultValue:{value:"true"},description:"",name:"dark",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/main-nav/src/main-nav.tsx#MainNav"]={docgenInfo:MainNav.__docgenInfo,name:"MainNav",path:"../packages/main-nav/src/main-nav.tsx#MainNav"})}catch(__react_docgen_typescript_loader_error){}},146:function(module,__webpack_exports__,__webpack_require__){"use strict";var _main_nav__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(123);__webpack_require__.d(__webpack_exports__,"a",(function(){return _main_nav__WEBPACK_IMPORTED_MODULE_0__.a})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _main_nav__WEBPACK_IMPORTED_MODULE_0__.b}));try{MainNav.displayName="MainNav",MainNav.__docgenInfo={description:"",displayName:"MainNav",props:{dark:{defaultValue:{value:"true"},description:"",name:"dark",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/main-nav/src/index.tsx#MainNav"]={docgenInfo:MainNav.__docgenInfo,name:"MainNav",path:"../packages/main-nav/src/index.tsx#MainNav"})}catch(__react_docgen_typescript_loader_error){}try{NavLink.displayName="NavLink",NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/main-nav/src/index.tsx#NavLink"]={docgenInfo:NavLink.__docgenInfo,name:"NavLink",path:"../packages/main-nav/src/index.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}},227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return header_Header}));__webpack_require__(0),__webpack_require__(854),__webpack_require__(856);var dawe_logo_white=__webpack_require__(468),dawe_logo_white_default=__webpack_require__.n(dawe_logo_white),src=__webpack_require__(109),jsx_runtime=__webpack_require__(5),header_Header=function Header(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Export Service":_ref$title,subline=_ref.subline,_ref$Logo=_ref.Logo,Logo=void 0===_ref$Logo?dawe_logo_white_default.a:_ref$Logo,_ref$logoAlt=_ref.logoAlt,logoAlt=void 0===_ref$logoAlt?"Department of Agriculture, Water and Environment Logo":_ref$logoAlt,_ref$href=_ref.href,href=void 0===_ref$href?"/":_ref$href,Link=Object(src.b)();return Object(jsx_runtime.jsx)("header",{className:"au-grid au-header au-header--dark",role:"banner",children:Object(jsx_runtime.jsx)("div",{className:"container",children:Object(jsx_runtime.jsx)("div",{className:"row",children:Object(jsx_runtime.jsx)("div",{className:"col-md-9",children:Object(jsx_runtime.jsxs)(Link,{className:"au-header__brand",href:href,children:[Object(jsx_runtime.jsx)("img",{className:"au-header__brand-image",alt:logoAlt,src:Logo}),Object(jsx_runtime.jsxs)("div",{className:"au-header__text",children:[Object(jsx_runtime.jsx)("h1",{className:"au-header__heading",children:title}),subline&&Object(jsx_runtime.jsx)("div",{className:"au-header__subline",children:subline})]})]})})})})})};header_Header.displayName="Header";try{header_Header.displayName="Header",header_Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:{value:"Export Service"},description:"",name:"title",required:!1,type:{name:"string"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"string"}},Logo:{defaultValue:null,description:"",name:"Logo",required:!1,type:{name:"string"}},logoAlt:{defaultValue:{value:"Department of Agriculture, Water and Environment Logo"},description:"",name:"logoAlt",required:!1,type:{name:"string"}},href:{defaultValue:{value:"/"},description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/header/src/header.tsx#Header"]={docgenInfo:header_Header.__docgenInfo,name:"Header",path:"../packages/header/src/header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:{value:"Export Service"},description:"",name:"title",required:!1,type:{name:"string"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"string"}},Logo:{defaultValue:null,description:"",name:"Logo",required:!1,type:{name:"string"}},logoAlt:{defaultValue:{value:"Department of Agriculture, Water and Environment Logo"},description:"",name:"logoAlt",required:!1,type:{name:"string"}},href:{defaultValue:{value:"/"},description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/header/src/index.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"../packages/header/src/index.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},468:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/dawe-logo-white.cf433320.png"},488:function(module,exports,__webpack_require__){__webpack_require__(489),__webpack_require__(649),__webpack_require__(650),__webpack_require__(876),__webpack_require__(877),__webpack_require__(884),__webpack_require__(885),__webpack_require__(881),__webpack_require__(878),__webpack_require__(886),__webpack_require__(879),__webpack_require__(880),__webpack_require__(882),module.exports=__webpack_require__(850)},556:function(module,exports){},650:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(213)},850:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(213).configure)([__webpack_require__(851),__webpack_require__(852),__webpack_require__(869),__webpack_require__(870)],module,!1)}).call(this,__webpack_require__(207)(module))},851:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=851},852:function(module,exports,__webpack_require__){var map={"./page-layout.stories.js":853};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=852},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));__webpack_require__(11),__webpack_require__(0);var _ag_ds_header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(227),_ag_ds_main_nav__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(146),_ag_ds_footer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(99),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5);__webpack_exports__.default={title:"Pages/Layout"};var Basic=function Basic(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ag_ds_header__WEBPACK_IMPORTED_MODULE_2__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ag_ds_main_nav__WEBPACK_IMPORTED_MODULE_3__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ag_ds_main_nav__WEBPACK_IMPORTED_MODULE_3__.b,{href:"/",title:"Home",active:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ag_ds_main_nav__WEBPACK_IMPORTED_MODULE_3__.b,{href:"/establishments",title:"Establishments"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{height:300}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ag_ds_footer__WEBPACK_IMPORTED_MODULE_4__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ag_ds_footer__WEBPACK_IMPORTED_MODULE_4__.b,{href:"https://awe.gov.au",title:"awe.gov.au"})})]})};Basic.parameters=Object.assign({storySource:{source:"() => (\n  <>\n    <Header />\n    <MainNav>\n      <NavLink href={'/'} title={'Home'} active={true} />\n      <NavLink href={'/establishments'} title={'Establishments'} />\n    </MainNav>\n    <div style={{ height: 300 }}></div>\n    <Footer>\n      <FooterLink href={'https://awe.gov.au'} title={'awe.gov.au'} />\n    </Footer>\n  </>\n)"}},Basic.parameters),Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/page-layout.stories.js"]={name:"Basic",docgenInfo:Basic.__docgenInfo,path:"stories/page-layout.stories.js"})},856:function(module,exports,__webpack_require__){var api=__webpack_require__(107),content=__webpack_require__(857);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},857:function(module,exports,__webpack_require__){(exports=__webpack_require__(108)(!1)).push([module.i,".au-header.au-header--dark {\n  background-color: #162845;\n}\n",""]),module.exports=exports},860:function(module,exports,__webpack_require__){var api=__webpack_require__(107),content=__webpack_require__(861);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},861:function(module,exports,__webpack_require__){(exports=__webpack_require__(108)(!1)).push([module.i,".au-main-nav.au-main-nav--dark {\n  background-color: #0A1931;\n  border-color: #F36C52;\n}\n\n.au-main-nav.au-main-nav--dark .au-main-nav__menu {\n  background-color: #0A1931;\n}\n\n.au-main-nav.au-main-nav--dark a, .au-main-nav.au-main-nav--dark .au-main-nav__toggle {\n  color: #9EE8FF;\n}\n\n.au-main-nav.au-main-nav--dark a::-moz-focus-inner, .au-main-nav.au-main-nav--dark .au-main-nav__toggle::-moz-focus-inner {\n  border: 0\n}\n\n.au-main-nav.au-main-nav--dark a:hover, .au-main-nav.au-main-nav--dark .au-main-nav__toggle:hover {\n  background-color: #0A1931;\n}\n\n.au-main-nav.au-main-nav--dark .active a {\n  border-color: #0A1931;\n}\n\n.au-main-nav.au-main-nav--dark .active a:hover {\n  border-color: #0A1931;\n}\n\n.au-main-nav.au-main-nav--dark .au-link-list > li {\n  border-color: #89afb8\n}\n",""]),module.exports=exports},867:function(module,exports,__webpack_require__){var api=__webpack_require__(107),content=__webpack_require__(868);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},868:function(module,exports,__webpack_require__){(exports=__webpack_require__(108)(!1)).push([module.i,".au-footer.au-footer--dark {\n  border-color: #F36C52;\n  background-color: #162845\n}\n",""]),module.exports=exports},869:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=869},870:function(module,exports,__webpack_require__){var map={"./button/src/button.stories.js":883,"./footer/src/footer.stories.js":873,"./header/src/header.stories.js":874,"./main-nav/src/main-nav.stories.js":875};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=870},873:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"WithLinks",(function(){return WithLinks})),__webpack_require__.d(__webpack_exports__,"WithExternalLinks",(function(){return WithExternalLinks}));__webpack_require__(11),__webpack_require__(0);var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"AgDS/Footer"};var Basic=function Basic(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.a,{})};Basic.displayName="Basic";var WithLinks=function WithLinks(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.b,{href:"#somewhere",title:"Internal link"})})};WithLinks.displayName="WithLinks";var WithExternalLinks=function WithExternalLinks(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.b,{href:"https://gold.designsystemau.org",title:"GOLD"})})};WithExternalLinks.displayName="WithExternalLinks",Basic.parameters=Object.assign({storySource:{source:"() => <Footer />"}},Basic.parameters),WithLinks.parameters=Object.assign({storySource:{source:"() => (\n  <Footer>\n    <FooterLink href={'#somewhere'} title={'Internal link'} />\n  </Footer>\n)"}},WithLinks.parameters),WithExternalLinks.parameters=Object.assign({storySource:{source:"() => (\n  <Footer>\n    <FooterLink href={'https://gold.designsystemau.org'} title={'GOLD'} />\n  </Footer>\n)"}},WithExternalLinks.parameters),Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/footer/src/footer.stories.js"]={name:"Basic",docgenInfo:Basic.__docgenInfo,path:"../packages/footer/src/footer.stories.js"}),WithLinks.__docgenInfo={description:"",methods:[],displayName:"WithLinks"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/footer/src/footer.stories.js"]={name:"WithLinks",docgenInfo:WithLinks.__docgenInfo,path:"../packages/footer/src/footer.stories.js"}),WithExternalLinks.__docgenInfo={description:"",methods:[],displayName:"WithExternalLinks"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/footer/src/footer.stories.js"]={name:"WithExternalLinks",docgenInfo:WithExternalLinks.__docgenInfo,path:"../packages/footer/src/footer.stories.js"})},874:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));__webpack_require__(11),__webpack_require__(0);var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(227),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"AgDS/Header"};var Basic=function Basic(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.a,{})};Basic.displayName="Basic",Basic.parameters=Object.assign({storySource:{source:"() => <Header />"}},Basic.parameters),Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/header/src/header.stories.js"]={name:"Basic",docgenInfo:Basic.__docgenInfo,path:"../packages/header/src/header.stories.js"})},875:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));__webpack_require__(11),__webpack_require__(441),__webpack_require__(0);var ___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(146),_main_nav__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(123),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5);__webpack_exports__.default={title:"AgDS/Main Nav"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_main_nav__WEBPACK_IMPORTED_MODULE_4__.b,{href:"/intelligence",title:"Intelligence",active:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_main_nav__WEBPACK_IMPORTED_MODULE_4__.b,{href:"/establishments",title:"Establishments"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_main_nav__WEBPACK_IMPORTED_MODULE_4__.b,{href:"/profile",title:"Profile"})]}))};Template.displayName="Template";var Basic=Template.bind({});Basic.args={dark:!0},Basic.parameters=Object.assign({storySource:{source:"(args) => (\n  <MainNav {...args}>\n    <NavLink href={'/intelligence'} title={'Intelligence'} active={true} />\n    <NavLink href={'/establishments'} title={'Establishments'} />\n    <NavLink href={'/profile'} title={'Profile'} />\n  </MainNav>\n)"}},Basic.parameters)},882:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(6),__webpack_require__(50),__webpack_require__(433),__webpack_require__(845),__webpack_require__(47),__webpack_require__(846),__webpack_require__(847),__webpack_require__(432);var client_api=__webpack_require__(893),esm=__webpack_require__(4),client=(__webpack_require__(0),__webpack_require__(213)),src=(__webpack_require__(848),__webpack_require__(11),__webpack_require__(109)),jsx_runtime=__webpack_require__(5),_excluded=["href","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var decorators_AgdsDecorator=function AgdsDecorator(Story){return Object(jsx_runtime.jsx)(src.a,{linkFactory:function linkFactory(_ref){var href=_ref.href,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)("a",Object.assign({href:href},props,{children:children}))},children:Object(jsx_runtime.jsx)(Story,{})})};decorators_AgdsDecorator.displayName="AgdsDecorator";try{decorators_AgdsDecorator.displayName="AgdsDecorator",decorators_AgdsDecorator.__docgenInfo={description:"",displayName:"AgdsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/index.tsx#AgdsDecorator"]={docgenInfo:decorators_AgdsDecorator.__docgenInfo,name:"AgdsDecorator",path:".storybook/decorators/index.tsx#AgdsDecorator"})}catch(__react_docgen_typescript_loader_error){}var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(client.addDecorator)(decorators_AgdsDecorator),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},883:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"ComplexLabel",(function(){return button_stories_ComplexLabel}));__webpack_require__(11),__webpack_require__(441);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),classnames=(__webpack_require__(871),__webpack_require__(170)),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__(5),Button=react_default.a.forwardRef((function(_ref,ref){var _ref$dark=_ref.dark,dark=void 0!==_ref$dark&&_ref$dark,children=_ref.children;return Object(jsx_runtime.jsx)("button",{ref:ref,className:classnames_default()("au-btn",dark&&"au-btn--dark"),children:children})}));Button.displayName="Button";__webpack_exports__.default={title:"AgDS/Button",component:Button,parameters:{}};var button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button,Object.assign({},args))};button_stories_Template.displayName="Template";var Basic=button_stories_Template.bind({});Basic.args={dark:!0,children:"Button"};var button_stories_ComplexLabel=function ComplexLabel(){return Object(jsx_runtime.jsxs)(Button,{children:[Object(jsx_runtime.jsx)("span",{children:"Hello"}),Object(jsx_runtime.jsx)("span",{children:"Hello"})]})};button_stories_ComplexLabel.displayName="ComplexLabel",Basic.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Basic.parameters),button_stories_ComplexLabel.parameters=Object.assign({storySource:{source:"() => (\n  <Button>\n    <span>Hello</span>\n    <span>Hello</span>\n  </Button>\n)"}},button_stories_ComplexLabel.parameters),button_stories_ComplexLabel.__docgenInfo={description:"",methods:[],displayName:"ComplexLabel"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/button/src/button.stories.js"]={name:"ComplexLabel",docgenInfo:button_stories_ComplexLabel.__docgenInfo,path:"../packages/button/src/button.stories.js"})},99:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return footer_Footer})),__webpack_require__.d(__webpack_exports__,"b",(function(){return footer_FooterLink}));__webpack_require__(862),__webpack_require__(126),__webpack_require__(0),__webpack_require__(863),__webpack_require__(865),__webpack_require__(867);var src=__webpack_require__(109),jsx_runtime=__webpack_require__(5),YEAR=(new Date).getFullYear(),footer_FooterLink=function FooterLink(_ref){var href=_ref.href,title=_ref.title,external=href.startsWith("http");if(external)return Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)("a",{href:href,rel:external?"external":void 0,children:title})});var Link=Object(src.b)();return Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)(Link,{href:href,children:title})})};footer_FooterLink.displayName="FooterLink";var footer_Footer=function Footer(_ref2){var children=_ref2.children;return Object(jsx_runtime.jsx)("footer",{className:"au-body au-body--dark au-footer au-footer--dark",role:"contentinfo",children:Object(jsx_runtime.jsxs)("div",{className:"container",children:[children?Object(jsx_runtime.jsx)("nav",{className:"au-footer__navigation row","aria-label":"footer",children:Object(jsx_runtime.jsx)("div",{className:"col-md-3 col-sm-6",children:Object(jsx_runtime.jsx)("ul",{className:"au-link-list",children:children})})}):null,Object(jsx_runtime.jsx)("div",{className:"row",children:Object(jsx_runtime.jsx)("div",{className:"col-sm-12",children:Object(jsx_runtime.jsxs)("div",{className:"au-footer__end",children:[Object(jsx_runtime.jsxs)("p",{style:{marginBottom:"1em"},children:["© ",YEAR," Commonwealth of Australia"]}),Object(jsx_runtime.jsx)("p",{children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."})]})})})]})})};footer_Footer.displayName="Footer";try{footer_FooterLink.displayName="FooterLink",footer_FooterLink.__docgenInfo={description:"",displayName:"FooterLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/footer/src/footer.tsx#FooterLink"]={docgenInfo:footer_FooterLink.__docgenInfo,name:"FooterLink",path:"../packages/footer/src/footer.tsx#FooterLink"})}catch(__react_docgen_typescript_loader_error){}try{footer_Footer.displayName="Footer",footer_Footer.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/footer/src/footer.tsx#Footer"]={docgenInfo:footer_Footer.__docgenInfo,name:"Footer",path:"../packages/footer/src/footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/footer/src/index.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"../packages/footer/src/index.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}try{FooterLink.displayName="FooterLink",FooterLink.__docgenInfo={description:"",displayName:"FooterLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/footer/src/index.tsx#FooterLink"]={docgenInfo:FooterLink.__docgenInfo,name:"FooterLink",path:"../packages/footer/src/index.tsx#FooterLink"})}catch(__react_docgen_typescript_loader_error){}}},[[488,2,3]]]);