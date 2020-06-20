(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),i=(n(0),n(169)),o={id:"utilities",title:"Utilities",sidebar_label:"Utilities"},s={id:"VergeStore/utilities",isDocsHomePage:!1,title:"Utilities",description:"Fragment",source:"@site/docs/VergeStore/utilities.md",permalink:"/Verge/docs/VergeStore/utilities",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/utilities.md",sidebar_label:"Utilities",sidebar:"docs",previous:{title:"Logging",permalink:"/Verge/docs/VergeStore/logging"},next:{title:"Optimization Tips",permalink:"/Verge/docs/VergeStore/optimization-tips"}},l=[{value:"<code>Fragment&lt;State&gt;</code>",id:"fragmentstate",children:[{value:"Fragment helps compare if state was updated without Equatable",id:"fragment-helps-compare-if-state-was-updated-without-equatable",children:[]},{value:"Actually, we need to get to flag that means different, it no need to be equal",id:"actually-we-need-to-get-to-flag-that-means-different-it-no-need-to-be-equal",children:[]},{value:"Fragment does embed state with versioning",id:"fragment-does-embed-state-with-versioning",children:[]}]},{value:"assign - assignee",id:"assign---assignee",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"fragmentstate"},Object(i.b)("inlineCode",{parentName:"h2"},"Fragment<State>")),Object(i.b)("h3",{id:"fragment-helps-compare-if-state-was-updated-without-equatable"},"Fragment helps compare if state was updated without Equatable"),Object(i.b)("p",null,"\u200cIn a single state tree, comparing for reducing the number of updates would be most important for keep performance. However, implementing Equatable is not easy basically. Instead, adding a like flag that indicates updated itself, it would be easy"),Object(i.b)("h3",{id:"actually-we-need-to-get-to-flag-that-means-different-it-no-need-to-be-equal"},"Actually, we need to get to flag that means different, it no need to be equal"),Object(i.b)("p",null,"Actually, we need to get to flag that means ",Object(i.b)("strong",{parentName:"p"},"different"),", it no need to be ",Object(i.b)("strong",{parentName:"p"},"equal"),"."),Object(i.b)("h3",{id:"fragment-does-embed-state-with-versioning"},"Fragment does embed state with versioning"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fragment")," manages the version of itself, the version will increment each modification. however, it can't get how exactly modified from the modification. and Fragment returns equality by comparing their version.\nThat is the reason why Fragment may return boolean that false negative.\nIf Fragment returns equality false, it may be actually equals."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct YourState {\n  var name: String = ...\n}\n\nstruct AppState: Equatable {\n\n  @Fragment var yourState YourState = .init()\n}\n\n> Since `Fragment` enables `Equatable` in yourState, AppState can be Equatable with synthesizing.\n\nappState.yourState.name\n\n// get unique value that indicates updated to compare with previous value.\n// this value would be updated on every mutation of this tree.\nappState.$yourState.version\n")),Object(i.b)("h2",{id:"assign---assignee"},"assign - assignee"),Object(i.b)("p",null,"In specific cases, it needs to projects value from others into the Store."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Having multiple stores and needs to be integrated with each other."),Object(i.b)("li",{parentName:"ul"},"Having other reactive streams and needs to be stored the value in the Store")),Object(i.b)("p",null,"In these cases, ",Object(i.b)("inlineCode",{parentName:"p"},"assign")," and ",Object(i.b)("inlineCode",{parentName:"p"},"assignee")," operators help."),Object(i.b)("p",null,"Assigns the value from other Store's state to Store's state."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let store1 = Store()\nlet store2 = Store()\n\nstore1\n  .derived(.map(\\.count))\n  .assign(to: store2.assignee(\\.count))\n")),Object(i.b)("p",null,"Assigns the value from the Publisher to Store's state."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let publisher: Combine.Publisher<Int>\nlet store2 = Store()\n\npublisher\n  .assign(to: store2.assignee(\\.count))\n")))}u.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(g,s(s({ref:t},c),{},{components:n})):r.a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);