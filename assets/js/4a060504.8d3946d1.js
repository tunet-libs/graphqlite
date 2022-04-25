"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6724],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90172:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"migrating",title:"Migrating",sidebar_label:"Migrating"},p=void 0,u={unversionedId:"migrating",id:"version-4.3/migrating",title:"Migrating",description:"Migrating from v4.0 to v4.1",source:"@site/versioned_docs/version-4.3/migrating.md",sourceDirName:".",slug:"/migrating",permalink:"/docs/4.3/migrating",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/migrating.md",tags:[],version:"4.3",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1650920082,formattedLastUpdatedAt:"4/25/2022",frontMatter:{id:"migrating",title:"Migrating",sidebar_label:"Migrating"},sidebar:"version-4.3/docs",previous:{title:"Troubleshooting",permalink:"/docs/4.3/troubleshooting"},next:{title:"Annotations VS Attributes",permalink:"/docs/4.3/doctrine-annotations-attributes"}},s=[{value:"Migrating from v4.0 to v4.1",id:"migrating-from-v40-to-v41",children:[],level:2},{value:"Migrating from v3.0 to v4.0",id:"migrating-from-v30-to-v40",children:[],level:2}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"migrating-from-v40-to-v41"},"Migrating from v4.0 to v4.1"),(0,i.kt)("p",null,"GraphQLite follows Semantic Versioning. GraphQLite 4.1 is backward compatible with GraphQLite 4.0. See\n",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/semver"},"semantic versioning")," for more details."),(0,i.kt)("p",null,"There is one exception though: the ",(0,i.kt)("strong",{parentName:"p"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL\ninput types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,i.kt)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json")," by running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,i.kt)("h2",{id:"migrating-from-v30-to-v40"},"Migrating from v3.0 to v4.0"),(0,i.kt)("p",null,'If you are a "regular" GraphQLite user, migration to v4 should be straightforward:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Annotations are mostly untouched. The only annotation that is changed is the ",(0,i.kt)("inlineCode",{parentName:"li"},"@SourceField")," annotation.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check your code for every places where you use the ",(0,i.kt)("inlineCode",{parentName:"li"},"@SourceField")," annotation:"),(0,i.kt)("li",{parentName:"ul"},'The "id" attribute has been remove (',(0,i.kt)("inlineCode",{parentName:"li"},"@SourceField(id=true)"),"). Instead, use ",(0,i.kt)("inlineCode",{parentName:"li"},'@SourceField(outputType="ID")')),(0,i.kt)("li",{parentName:"ul"},'The "logged", "right" and "failWith" attributes have been removed (',(0,i.kt)("inlineCode",{parentName:"li"},"@SourceField(logged=true)"),").\nInstead, use the annotations attribute with the same annotations you use for the ",(0,i.kt)("inlineCode",{parentName:"li"},"@Field")," annotation:\n",(0,i.kt)("inlineCode",{parentName:"li"},"@SourceField(annotations={@Logged, @FailWith(null)})")),(0,i.kt)("li",{parentName:"ul"},"If you use magic property and were creating a getter for every magic property (to put a ",(0,i.kt)("inlineCode",{parentName:"li"},"@Field")," annotation on it),\nyou can now replace this getter with a ",(0,i.kt)("inlineCode",{parentName:"li"},"@MagicField")," annotation."))),(0,i.kt)("li",{parentName:"ul"},"In GraphQLite v3, the default was to hide a field from the schema if a user has no access to it.\nIn GraphQLite v4, the default is to still show this field, but to throw an error if the user makes a query on it\n(this way, the schema is the same for all users). If you want the old mode, use the new\n",(0,i.kt)("a",{parentName:"li",href:"/docs/4.3/annotations-reference#hideifunauthorized-annotation"},(0,i.kt)("inlineCode",{parentName:"a"},"@HideIfUnauthorized")," annotation")),(0,i.kt)("li",{parentName:"ul"},"If you are using the Symfony bundle, the Laravel package or the Universal module, you must also upgrade those to 4.0.\nThese package will take care of the wiring for you. Apart for upgrading the packages, you have nothing to do."),(0,i.kt)("li",{parentName:"ul"},"If you are relying on the ",(0,i.kt)("inlineCode",{parentName:"li"},"SchemaFactory")," to bootstrap GraphQLite, you have nothing to do.")),(0,i.kt)("p",null,"On the other hand, if you are a power user and if you are wiring GraphQLite services yourself (without using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaFactory"),') or if you implemented custom "TypeMappers", you will need to adapt your code:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," is gone. Directly instantiate ",(0,i.kt)("inlineCode",{parentName:"li"},"FieldsBuilder")," in v4."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"CompositeTypeMapper")," class has no more constructor arguments. Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"addTypeMapper")," method to register\ntype mappers in it."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"FieldsBuilder")," now accept an extra argument: the ",(0,i.kt)("inlineCode",{parentName:"li"},"RootTypeMapper")," that you need to instantiate accordingly. Take\na look at the ",(0,i.kt)("inlineCode",{parentName:"li"},"SchemaFactory")," class for an example of proper configuration."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"HydratorInterface")," and all implementations are gone. When returning an input object from a TypeMapper, the object\nmust now implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"ResolvableMutableInputInterface")," (an input object type that contains its own resolver)")),(0,i.kt)("p",null,"Note: we strongly recommend to use the Symfony bundle, the Laravel package, the Universal module or the SchemaManager\nto bootstrap GraphQLite. Wiring directly GraphQLite classes (like the ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldsBuilder"),") into your container is not recommended,\nas the signature of the constructor of those classes may vary from one minor release to another.\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaManager")," instead."))}c.isMDXComponent=!0}}]);