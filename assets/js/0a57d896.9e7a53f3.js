"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3024],{58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(87462),a=t(67294),o=t(72389),i=t(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(83039),p=t(86010),c="tabItem_vU9c";function u(e){var n,t,r,o=e.lazy,i=e.block,u=e.defaultValue,h=e.values,d=e.groupId,m=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),x=(0,s.lx)(f,(function(e,n){return e.value===n.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(n=null!=u?u:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),b=y.tabGroupChoices,w=y.setTabGroupChoices,k=(0,a.useState)(v),N=k[0],E=k[1],L=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var G=b[d];null!=G&&G!==N&&f.some((function(e){return e.value===G}))&&E(G)}var Q=function(e){var n=e.currentTarget,t=L.indexOf(n),r=f[t].value;r!==N&&(T(n),E(r),null!=d&&w(d,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=L.indexOf(e.currentTarget)+1;t=L[r]||L[0];break;case"ArrowLeft":var a=L.indexOf(e.currentTarget)-1;t=L[a]||L[L.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},m)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":N===n}),key:n,ref:function(e){return L.push(e)},onKeyDown:C,onFocus:Q,onClick:Q},null!=t?t:n)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function h(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},51448:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return h},default:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(55064),l=t(58215),s=["components"],p={id:"error-handling",title:"Error handling",sidebar_label:"Error handling",original_id:"error-handling"},c=void 0,u={unversionedId:"error-handling",id:"version-4.1/error-handling",isDocsHomePage:!1,title:"Error handling",description:'In GraphQL, when an error occurs, the server must add an "error" entry in the response.',source:"@site/versioned_docs/version-4.1/error_handling.mdx",sourceDirName:".",slug:"/error-handling",permalink:"/docs/4.1/error-handling",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/error_handling.mdx",tags:[],version:"4.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1641853042,formattedLastUpdatedAt:"1/10/2022",frontMatter:{id:"error-handling",title:"Error handling",sidebar_label:"Error handling",original_id:"error-handling"},sidebar:"version-4.1/docs",previous:{title:"Inheritance and interfaces",permalink:"/docs/4.1/inheritance-interfaces"},next:{title:"User input validation",permalink:"/docs/4.1/validation"}},h=[{value:"HTTP response code",id:"http-response-code",children:[],level:2},{value:"Customizing the category",id:"customizing-the-category",children:[],level:2},{value:"Customizing the extensions section",id:"customizing-the-extensions-section",children:[],level:2},{value:"Writing your own exceptions",id:"writing-your-own-exceptions",children:[],level:2},{value:"Many errors for one exception",id:"many-errors-for-one-exception",children:[],level:2},{value:"Webonyx exceptions",id:"webonyx-exceptions",children:[],level:2},{value:"Behaviour of exceptions that do not implement ClientAware",id:"behaviour-of-exceptions-that-do-not-implement-clientaware",children:[],level:2}],d={toc:h};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In GraphQL, when an error occurs, the server must add an "error" entry in the response.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Name for character with ID 1002 could not be fetched.",\n      "locations": [ { "line": 6, "column": 7 } ],\n      "path": [ "hero", "heroFriends", 1, "name" ],\n      "extensions": {\n        "category": "Exception"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"You can generate such errors with GraphQLite by throwing a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLException;\n\nthrow new GraphQLException("Exception message");\n')),(0,o.kt)("h2",{id:"http-response-code"},"HTTP response code"),(0,o.kt)("p",null,"By default, when you throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", the HTTP status code will be 500."),(0,o.kt)("p",null,"If your exception code is in the 4xx - 5xx range, the exception code will be used as an HTTP status code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// This exception will generate a HTTP 404 status code\nthrow new GraphQLException("Not found", 404);\n')),(0,o.kt)("div",{class:"alert alert--info"},"GraphQL allows to have several errors for one request. If you have several",(0,o.kt)("code",null,"GraphQLException")," thrown for the same request, the HTTP status code used will be the highest one."),(0,o.kt)("h2",{id:"customizing-the-category"},"Customizing the category"),(0,o.kt)("p",null,'By default, GraphQLite adds a "category" entry in the "extensions section". You can customize the category with the\n4th parameter of the constructor:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'throw new GraphQLException("Not found", 404, null, "NOT_FOUND");\n')),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Not found",\n      "extensions": {\n        "category": "NOT_FOUND"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"customizing-the-extensions-section"},"Customizing the extensions section"),(0,o.kt)("p",null,'You can customize the whole "extensions" section with the 5th parameter of the constructor:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"throw new GraphQLException(\"Field required\", 400, null, \"VALIDATION\", ['field' => 'name']);\n")),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Field required",\n      "extensions": {\n        "category": "VALIDATION",\n        "field": "name"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"writing-your-own-exceptions"},"Writing your own exceptions"),(0,o.kt)("p",null,"Rather that throwing the base ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", you should consider writing your own exception."),(0,o.kt)("p",null,"Any exception that implements interface ",(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface"),' will be displayed\nin the GraphQL "errors" section.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'class ValidationException extends Exception implements GraphQLExceptionInterface\n{\n    /**\n     * Returns true when exception message is safe to be displayed to a client.\n     */\n    public function isClientSafe(): bool\n    {\n        return true;\n    }\n\n    /**\n     * Returns string describing a category of the error.\n     *\n     * Value "graphql" is reserved for errors produced by query parsing or validation, do not use it.\n     */\n    public function getCategory(): string\n    {\n        return \'VALIDATION\';\n    }\n\n    /**\n     * Returns the "extensions" object attached to the GraphQL error.\n     *\n     * @return array<string, mixed>\n     */\n    public function getExtensions(): array\n    {\n        return [];\n    }\n}\n')),(0,o.kt)("h2",{id:"many-errors-for-one-exception"},"Many errors for one exception"),(0,o.kt)("p",null,"Sometimes, you need to display several errors in the response. But of course, at any given point in your code, you can\nthrow only one exception."),(0,o.kt)("p",null,"If you want to display several exceptions, you can bundle these exceptions in a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLAggregateException")," that you can\nthrow."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n#[Query]\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n/**\n * @Query\n */\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n")))),(0,o.kt)("h2",{id:"webonyx-exceptions"},"Webonyx exceptions"),(0,o.kt)("p",null,"GraphQLite is based on the wonderful webonyx/GraphQL-PHP library. Therefore, the Webonyx exception mechanism can\nalso be used in GraphQLite. This means you can throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL\\Error\\Error")," exception or any exception implementing\n",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#errors-in-graphql"},(0,o.kt)("inlineCode",{parentName:"a"},"GraphQL\\Error\\ClientAware")," interface")),(0,o.kt)("p",null,"Actually, the ",(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface")," extends Webonyx's ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientAware")," interface."),(0,o.kt)("h2",{id:"behaviour-of-exceptions-that-do-not-implement-clientaware"},"Behaviour of exceptions that do not implement ClientAware"),(0,o.kt)("p",null,"If an exception that does not implement ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientAware")," is thrown, by default, GraphQLite will not catch it."),(0,o.kt)("p",null,"The exception will propagate to your framework error handler/middleware that is in charge of displaying the classical error page."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#debugging-tools"},"change the underlying behaviour of Webonyx to catch any exception and turn them into GraphQL errors"),".\nThe way you adjust the error settings depends on the framework you are using (",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/symfony-bundle"},"Symfony"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/laravel-package"},"Laravel"),")."),(0,o.kt)("div",{class:"alert alert--info"},'To be clear: we strongly discourage changing this setting. We strongly believe that the default "RETHROW_UNSAFE_EXCEPTIONS" setting of Webonyx is the only sane setting (only putting in "errors" section exceptions designed for GraphQL).'))}m.isMDXComponent=!0}}]);