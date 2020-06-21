(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(170)),i={id:"Overview",title:"Overview",sidebar_label:"Overview"},c={id:"Overview",isDocsHomePage:!0,title:"Overview",description:"Verge supports small start and scaling up",source:"@site/docs/Overview.md",permalink:"/Verge/docs/",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/Overview.md",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Motivation",permalink:"/Verge/docs/motivation"},next:{title:"Demo",permalink:"/Verge/docs/demo"}},s=[{value:"Verge supports small start and scaling up",id:"verge-supports-small-start-and-scaling-up",children:[]},{value:"At a glance",id:"at-a-glance",children:[{value:"SwiftUI",id:"swiftui",children:[]},{value:"UIKit",id:"uikit",children:[]}]},{value:"Prepare moving to SwiftUI from now with Verge",id:"prepare-moving-to-swiftui-from-now-with-verge",children:[]},{value:"Questions?",id:"questions",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"verge-supports-small-start-and-scaling-up"},"Verge supports small start and scaling up"),Object(o.b)("p",null,"Verge is a state management library for iOS (UIKit / SwiftUI).",Object(o.b)("br",{parentName:"p"}),"\n","Mostly it's based on Flux architecture.",Object(o.b)("br",{parentName:"p"}),"\n","Flux architecture is so beautiful and simplified thinking.",Object(o.b)("br",{parentName:"p"}),"\n","Although, we need to do several tuning to bring it into a real product.",Object(o.b)("br",{parentName:"p"}),"\n","In fact, Flux needs to consider about computing resources."),Object(o.b)("p",null,"Verge contains several ideas to do this from Web technologies such as Redux, Vuex, and Recoil.",Object(o.b)("br",{parentName:"p"}),"\n","They have very useful techniques to be successful in real-world productions based on the core-concept of Flux."),Object(o.b)("p",null,"Verge can be setting it up quickly, and tune performance up when we need it.",Object(o.b)("br",{parentName:"p"}),"\n","Verge automatically tune-up as possible and shows us what makes performance badly while development from Xcode's documentation."),Object(o.b)("h2",{id:"at-a-glance"},"At a glance"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),'struct MyState {\n  var text: String = ""\n}\n\nenum MyActivity {\n  case somethingHappen\n}\n\nclass MyStore: Store<MyState, MyActivity> {\n\n  func myAction() {\n    commit {\n      $0.name = "Hello, Verge"\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"swiftui"},"SwiftUI"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),'struct MyView: View {\n\n  let store: MyStore\n\n  var body: some View {\n    UseState(store) { state in\n      Text(state.name)\n      Button(action: {\n        self.store.myAction()\n      }) {\n        Text("Action")\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"uikit"},"UIKit"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"class ViewController: UIViewController {\n\n  ...\n\n  let store: MyStore\n\n  ...\n\n  func updateUI(by state: Changes<MyStore.State>) {\n\n    changes.ifChanged(\\.name) { (name) in\n      nameLabel.text = name\n    }\n\n  }\n}\n")),Object(o.b)("h2",{id:"prepare-moving-to-swiftui-from-now-with-verge"},"Prepare moving to SwiftUI from now with Verge"),Object(o.b)("p",null,"SwiftUI's concept is similar to the concept of React, Vue, and Elm.",Object(o.b)("br",{parentName:"p"}),"\n","Therefore, the concept of state management will become to be similar as well."),Object(o.b)("p",null,"That is Redux or Vuex and more."),Object(o.b)("p",null,"Now, almost of iOS Applications are developed on top of UIKit.",Object(o.b)("br",{parentName:"p"}),"\n","And We can't say SwiftUI is ready for top production.",Object(o.b)("br",{parentName:"p"}),"\n","However, it would change."),Object(o.b)("p",null,"It's better to use the state management that fits SwiftUI from now. It's not only for that, current UIKit based applications can get more productivity as well."),Object(o.b)("h2",{id:"questions"},"Questions?"),Object(o.b)("p",null,"We accept your questions about usage of Verge and something else in GitHub Issues."),Object(o.b)("p",null,"\u65e5\u672c\u8a9e\u3067\u306e\u8cea\u554f\u3082\u5927\u4e08\u592b\u3067\u3059"))}u.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);