(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),c=(n(0),n(170)),o={id:"advanced-usage",title:"Advanced usage",sidebar_label:"Advanced usage"},i={id:"VergeStore/advanced-usage",isDocsHomePage:!1,title:"Advanced usage",description:"\u2602\ufe0f Advanced Usage - to keep performance and scalability",source:"@site/docs/VergeStore/advanced-usage.md",permalink:"/Verge/docs/VergeStore/advanced-usage",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/advanced-usage.md",sidebar_label:"Advanced usage",sidebar:"docs",previous:{title:"Basic Usage",permalink:"/Verge/docs/VergeStore/BasicUsage"},next:{title:"Store - a storage of the state",permalink:"/Verge/docs/VergeStore/store"}},s=[{value:"\u2602\ufe0f Advanced Usage - to keep performance and scalability",id:"\ufe0f-advanced-usage---to-keep-performance-and-scalability",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\ufe0f-advanced-usage---to-keep-performance-and-scalability"},"\u2602\ufe0f Advanced Usage - to keep performance and scalability"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Adding a cachable computed property in a State")),Object(c.b)("p",null,"We can add a computed property in a state to get a derived value with stored property,",Object(c.b)("br",null),"\nand that computed property works fine as well other stored property."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct MyState {\n  var items: [Item] = [] {\n\n  var itemsCount: Int {\n    items.count\n  }\n}\n")),Object(c.b)("p",null,"However, this patterns might cause an expensive cost of operation depends on how they computes. ",Object(c.b)("br",null),"\nTo solve it, Verge arrows us to define the computed property with another approach."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct MyState: ExtendedStateType {\n\n  var name: String = ...\n  var items: [Int] = []\n\n  struct Extended: ExtendedType {\n    let filteredArray = Field.Computed<[Int]> {\n      $0.items.filter { $0 > 300 }\n    }\n    .ifChanged(selector: \\.largeArray)\n  }\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let store: MyStore\n\nstore.changes.computed.filteredArray\n")),Object(c.b)("p",null,"This defined computed array calculates only if changed specified value.",Object(c.b)("br",null),"\nThat condition to re-calculate is defined with ",Object(c.b)("inlineCode",{parentName:"p"},".ifChanged")," method in the example code."),Object(c.b)("p",null,"And finally, it caches the result by first-time access and it returns cached value until if the source value changed."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Making a slice of the state (Selector)")),Object(c.b)("p",null,"We can create a slice object that derives a data from the state."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let derived: Derived<Int> = store.derived(.map(\\.count))\n\n// take a value\nderived.value\n\n// subscribe a value changes\nderived.sinkChanges { (changes: Changes<Int>) in\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Creating a Dispatcher")),Object(c.b)("p",null,"Store arrows us to define an action in itself, that might cause gain complexity in supporting a large application.",Object(c.b)("br",null),"\nTo solve this, Verge offers us to create an object that dispatches an action to the store.",Object(c.b)("br",null),"\nWe can separate the code of actions to keep maintainability.",Object(c.b)("br",null),"\nthat also help us to manage a different type of dependencies.",Object(c.b)("br",null)),Object(c.b)("p",null,"For example, the case of those dependencies different between logged-in and logged-out."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"class MyDispatcher: MyStore.Dispatcher {\n  func moreOperation() {\n    commit {\n      ...\n    }\n  }\n}\n\nlet store: MyStore\nlet dispatcher = MyDispatcher(target: store)\n")),Object(c.b)("p",null,"Additionally, We can create a dispatcher that focuses the specified sub-tree of the state.",Object(c.b)("br",null),"\nYou can check the detail of this from ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://muukii-app.gitbook.io/verge/docs-vergestore/dispatcher"}),"our documentation"),"."))}p.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||c;return n?r.a.createElement(f,i(i({ref:t},l),{},{components:n})):r.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);