(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(0),n(169)),i={id:"store",title:"Store - a storage of the state",sidebar_label:"Store"},c={id:"VergeStore/store",isDocsHomePage:!1,title:"Store - a storage of the state",description:"- Store is",source:"@site/docs/VergeStore/store.md",permalink:"/Verge/docs/VergeStore/store",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/store.md",sidebar_label:"Store",sidebar:"docs",previous:{title:"Advanced usage",permalink:"/Verge/docs/VergeStore/advanced-usage"},next:{title:"Mutation - updates the state of the store",permalink:"/Verge/docs/VergeStore/mutation"}},l=[{value:"Define a Store",id:"define-a-store",children:[]},{value:"Add a Mutation",id:"add-a-mutation",children:[]},{value:"Commit the mutation",id:"commit-the-mutation",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Store is",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A reference type object"),Object(o.b)("li",{parentName:"ul"},"Manages the state object that contains the application state"),Object(o.b)("li",{parentName:"ul"},"Receives ",Object(o.b)("strong",{parentName:"li"},"Mutation")," to update the state with thread-safety"),Object(o.b)("li",{parentName:"ul"},"Compatible with SwiftUI's observableObject and ",Object(o.b)("inlineCode",{parentName:"li"},"UseState"))))),Object(o.b)("h2",{id:"define-a-store"},"Define a Store"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"struct State: StateType {\n  var count: Int = 0\n}\n\nenum Activity {\n  case happen\n}\n\nfinal class MyStore: Store<State, Activity> {\n\n  init() {\n    super.init(\n      initialState: .init(),\n      logger: DefaultStoreLogger.shared\n    )\n  }\n\n}\n")),Object(o.b)("h2",{id:"add-a-mutation"},"Add a Mutation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"final class MyStore: Store<State, Activity> {\n\n  func increment() {\n    commit {\n      $0.count += 0\n    }\n  }\n\n}\n")),Object(o.b)("h2",{id:"commit-the-mutation"},"Commit the mutation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"let store = MyStore()\nstore.increment()\n")))}s.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);