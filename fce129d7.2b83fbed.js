(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(9),i=(a(0),a(169)),o={id:"derived",title:"Derived / BindingDerived - derives a any shape value from the state",sidebar_label:"Derived / BindingDerived"},c={id:"VergeStore/derived",isDocsHomePage:!1,title:"Derived / BindingDerived - derives a any shape value from the state",description:"Derived is inspired by redux/reselect.",source:"@site/docs/VergeStore/derived.md",permalink:"/Verge/docs/VergeStore/derived",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/derived.md",sidebar_label:"Derived / BindingDerived",sidebar:"docs",previous:{title:"Extended Computed property on the State",permalink:"/Verge/docs/VergeStore/extended-computed-property"},next:{title:"Dispatcher - performs a mutation from away the store",permalink:"/Verge/docs/VergeStore/dispatcher"}},s=[{value:"Overview",id:"overview",children:[{value:"Create a Derived object from the Store",id:"create-a-derived-object-from-the-store",children:[]}]},{value:"Take a value",id:"take-a-value",children:[]},{value:"Subscribe the latest value Derived provides",id:"subscribe-the-latest-value-derived-provides",children:[]},{value:"Supports other Reactive Frameworks",id:"supports-other-reactive-frameworks",children:[{value:"+ Combine",id:"-combine",children:[]},{value:"+ RxSwift",id:"-rxswift",children:[]}]},{value:"Memoization to keep good performance",id:"memoization-to-keep-good-performance",children:[]},{value:"Skips the map operation if the source state has no changes",id:"skips-the-map-operation-if-the-source-state-has-no-changes",children:[]}],d={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Derived")," is inspired by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"redux/reselect"),"."))),Object(i.b)("p",null,"Derived's functions are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Computes the derived data from the state tree"),Object(i.b)("li",{parentName:"ul"},"Emit the updated data with updating Store"),Object(i.b)("li",{parentName:"ul"},"Supports subscribe the data"),Object(i.b)("li",{parentName:"ul"},"Supports Memoization"),Object(i.b)("li",{parentName:"ul"},"Compatible with SwiftUI's observableObject and ",Object(i.b)("inlineCode",{parentName:"li"},"UseState"))),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("h3",{id:"create-a-derived-object-from-the-store"},"Create a Derived object from the Store"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Select a tree from the state")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"let derived: Derived<Int> = store.derived(.map(\\.count))\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"// we can write also this.\n// However, we recommend do above way as possible\n// because it enables cache.\nlet derived: Derived<Int> = store.derived(.map { $0.count })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Technically, above method callings are produced from below declaration.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"extension StoreType {\n  public func derived<NewState>(_ memoizeMap: MemoizeMap<Changes<State>, NewState>, dropsOutput: ((Changes<NewState>) -> Bool)? = nil, queue: TargetQueue? = nil) -> Derived<NewState>\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MemoizeMap")," manages to transform value from the state and keep performance that way of drops transform operations if the input value no changes."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Compute a value from the state")),Object(i.b)("p",null,"Derived can create any type of value what we need.\nMemoizeMap"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"let derived = store.derived(.map(derive: { ($0.name, $0.age) }, dropsDerived: ==) { args in\n  let (name, age) = args\n  ...\n  return ...\n})\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This method is quite optimized the performance If you create a Derived object that computes a new shape value that using multiple values from the state.",Object(i.b)("br",{parentName:"p"}),"\n","Because Derived object uses the specified derived value to create a new shape value, It can detect no need to compute that value if the input derived value not changed."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Most manually way of creating a Derived object")),Object(i.b)("p",null,"We can create fully tuned up Derived object with using custom initialized ",Object(i.b)("inlineCode",{parentName:"p"},"MemoizedMap"),".\nMost of the cases, we don't need to do this.\nBecause several overloaded methods enable optimizations automatically that depending on doing things.\nVerge shows current optimization status from the Complexity column of Xcode documentation."),Object(i.b)("img",{width:"533",alt:"CleanShot 2020-05-31 at 00 46 27@2x",src:"https://user-images.githubusercontent.com/1888355/83332811-41df2480-a2d8-11ea-8da0-d86c127fc926.png"}),Object(i.b)("h2",{id:"take-a-value"},"Take a value"),Object(i.b)("p",null,"Derived is an object (reference type). It provides a latest value from a store.\nThis supports getting the value ad-hoc or subscribing the value updating."),Object(i.b)("p",null,"Derived allows us to take the latest value at the time."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"let value: Int = derived.value\n")),Object(i.b)("h2",{id:"subscribe-the-latest-value-derived-provides"},"Subscribe the latest value Derived provides"),Object(i.b)("p",null,"Derived allows us to subscribe to the updated value."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"let cancellable = derived.sinkValue { (changes: Changes<Int>) in\n}\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please, carefully handle a cancellable object.",Object(i.b)("br",{parentName:"p"}),"\n","A concealable object that returns that subscribe method is similar to AnyCancellable of Combine.framework.",Object(i.b)("br",{parentName:"p"}),"\n","We need to retain that until we don't need to get the update event."))),Object(i.b)("h2",{id:"supports-other-reactive-frameworks"},"Supports other Reactive Frameworks"),Object(i.b)("p",null,"We might need to use some Reactive framework to integrate other sequence. Derived allows us to make to a sequence from itself. Currently, it supports Combine.framework and RxSwift.framework."),Object(i.b)("h3",{id:"-combine"},"+ Combine"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"derived\n  .valuePublisher()\n  .sink { (changes: Changes<Int>) in\n\n  }\n")),Object(i.b)("h3",{id:"-rxswift"},"+ RxSwift"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udca1You need to install VergeRx module to use this."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"derived.rx\n  .changesObservable()\n  .subscribe(onNext: { (changes: Changes<Int>) in\n\n  })\n")),Object(i.b)("h2",{id:"memoization-to-keep-good-performance"},"Memoization to keep good performance"),Object(i.b)("p",null,"Mostly Derived is used for projecting the specified shape from the source object.\nAnd some cases may contain an expensive operation. In that case, we can consider to tune Memoization up.\u200b\nWe can see the detail of Memoization from below link."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"%5Bhttps://en.wikipedia.org/wiki/Memoization%5D(https://en.wikipedia.org/wiki/Memoization)"}),"Wiki - Memoization")),Object(i.b)("h2",{id:"skips-the-map-operation-if-the-source-state-has-no-changes"},"Skips the map operation if the source state has no changes"),Object(i.b)("p",null,"In create Derived method, we can get the detail that how we suppress the no need updating and updated event."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"extension StoreType {\n\n  public func derived<NewState>(\n    _ memoizeMap: MemoizeMap<Changes<State>, NewState>,\n    dropsOutput: @escaping (Changes<NewState>) -> Bool = { _ in false }\n  ) -> Derived<NewState>\n\n}\n")))}b.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=b(a),m=n,u=l["".concat(o,".").concat(m)]||l[m]||p[m]||i;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);