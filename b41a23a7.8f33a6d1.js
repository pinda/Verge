(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(130)),o={id:"index-table",title:"Index",sidebar_label:"Index"},l={id:"VergeORM/index-table",isDocsHomePage:!1,title:"Index",description:"To find the entity faster, Index.",source:"@site/docs/VergeORM/index-table.md",permalink:"docs/VergeORM/index-table",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeORM/index-table.md",sidebar_label:"Index",sidebar:"docs",previous:{title:"Overview",permalink:"docs/VergeORM/Overview"},next:{title:"Middleware",permalink:"docs/VergeORM/middleware"}},b=[{value:"To find the entity faster, Index.",id:"to-find-the-entity-faster-index",children:[]},{value:"Register Index",id:"register-index",children:[]},{value:"Read Index",id:"read-index",children:[]},{value:"Write Index",id:"write-index",children:[]}],c={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"to-find-the-entity-faster-index"},"To find the entity faster, Index."),Object(i.b)("p",null,"As shown in the Getting Started section, we can get entities by the following code."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let db =  RootState.Database()\n\ndb.bookEntityTable.all()\n\ndb.bookEntityTable.find(by: <#T##VergeTypedIdentifier<Book>#>)\n\ndb.bookEntityTable.find(in: <#T##Sequence#>)\n")),Object(i.b)("p",null,"To do this, we need to manage the Identifier of the entity and additionally, to get an array of entities, we need to manage the order of Identifier."),Object(i.b)("p",null,"To do this, VergeORM provides Index feature. Index manages the set of identifiers in several structures."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udca1\nMeaning of Index might be a bit different than RDB's Index. At least, Index manages identifiers to find the entity faster than linear search.")),Object(i.b)("p",null,"Currently, we have the following types,\u200c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"OrderedIDIndex"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[EntityID]")),Object(i.b)("li",{parentName:"ul"},"Manages identifiers in an ordered collection"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GroupByEntityIndex"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[EntityID : [EntityID]]")),Object(i.b)("li",{parentName:"ul"},"Manages identifiers that are grouped by another identifier"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"HashIndex"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[Key : EntityID]")),Object(i.b)("li",{parentName:"ul"},"Manages identifiers with hashable keys"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SetIndex"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Set<EntityID>")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GroupByKeyIndex"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[Key : [EntityID]]"))))),Object(i.b)("h2",{id:"register-index"},"Register Index"),Object(i.b)("p",null,"Let's take a look at how to register Index. The whole index is here."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct Database: DatabaseType {\n\n  struct Schema: EntitySchemaType {\n    let book = Book.EntityTableKey()\n    let author = Book.EntityTableKey()\n  }\n\n  struct Indexes: IndexesType {\n    // \ud83d\udc4b Here!\n  }\n\n  var _backingStorage: BackingStorage = .init()\n}\n")),Object(i.b)("p",null,"Indexes struct describes the set of indexes. All of the indexes managed by VergeORM would be here."),Object(i.b)("p",null,"For now, we add a simple ordered index just like this."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct Indexes: IndexesType {\n  let allBooks = IndexKey<OrderedIDIndex<Schema, Book>>()\n  // or OrderedIDIndex<Schema, Book>.Key()\n}\n")),Object(i.b)("p",null,"With this, now we have index property on DatabaseType.indexes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let allBooks = state.db.indexes.allBooks\n// allBooks: OrderedIDIndex<Database.Schema, Book>\n")),Object(i.b)("h2",{id:"read-index"},"Read Index"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Accessing indexes")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"// Get the number of ids\nallBooks.count\n\n// Take all ids\nallBooks.forEach { id in ... }\n\n// Get the id with location\nlet id: Book.ID = allBooks[0]\n")),Object(i.b)("p",null,"Fetch the entities from index"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let books: [Book] = state.db.entities.book.find(in: state.db.indexes.allBooks)\n// This syntax looks is a bit verbose.\n// We will take shorter syntax.\n")),Object(i.b)("h2",{id:"write-index"},"Write Index"),Object(i.b)("p",null,"To write index is similar with updating entities. Using ",Object(i.b)("inlineCode",{parentName:"p"},"performBatchUpdates")," , add or delete index through the ",Object(i.b)("inlineCode",{parentName:"p"},"context")," ."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"state.db.performBatchUpdates { (context) -> Book in\n\n  let book = Book(rawID: id.raw, authorID: Author.anonymous.id)\n  context.insertsOrUpdates.book.insert(book)\n\n  // Here \ud83d\udc4b\n  context.indexes.allBooks.append(book.id)\n\n}\n")),Object(i.b)("p",null,"Since Index is updated manually here, you might want to manage it automatically.\nUsing ",Object(i.b)("strong",{parentName:"p"},"Middleware"),", it's possible."))}d.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,O=s["".concat(o,".").concat(u)]||s[u]||p[u]||i;return n?r.a.createElement(O,l(l({ref:t},c),{},{components:n})):r.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);