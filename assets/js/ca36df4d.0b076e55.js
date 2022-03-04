"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[917],{62197:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],o={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},d=void 0,p={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"5.0.0",source:"@site/docs/CHANGELOG.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/next/changelog",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/CHANGELOG.md",tags:[],version:"current",lastUpdatedBy:"Jakub Janata",lastUpdatedAt:1646429510,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog"},sidebar:"docs",previous:{title:"Semantic versioning",permalink:"/docs/next/semver"}},u=[{value:"5.0.0",id:"500",children:[{value:"Dependencies:",id:"dependencies",children:[],level:4}],level:2},{value:"4.3.0",id:"430",children:[{value:"Breaking change:",id:"breaking-change",children:[],level:4},{value:"Minor changes:",id:"minor-changes",children:[],level:4}],level:2},{value:"4.2.0",id:"420",children:[{value:"Breaking change:",id:"breaking-change-1",children:[],level:4},{value:"New features:",id:"new-features",children:[],level:4}],level:2},{value:"4.1.0",id:"410",children:[{value:"Breaking change:",id:"breaking-change-2",children:[],level:4},{value:"New features:",id:"new-features-1",children:[],level:4},{value:"Minor changes:",id:"minor-changes-1",children:[],level:4},{value:"Miscellaneous:",id:"miscellaneous",children:[],level:4}],level:2},{value:"4.0.0",id:"400",children:[{value:"New features:",id:"new-features-2",children:[],level:4},{value:"Symfony:",id:"symfony",children:[],level:4},{value:"Laravel:",id:"laravel",children:[],level:4},{value:"Internals:",id:"internals",children:[],level:4}],level:2}],c={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"500"},"5.0.0"),(0,l.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Upgraded to using version 14.9 of ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/webonyx/graphql-php"},"webonyx/graphql-php"))),(0,l.kt)("h2",{id:"430"},"4.3.0"),(0,l.kt)("h4",{id:"breaking-change"},"Breaking change:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The method ",(0,l.kt)("inlineCode",{parentName:"li"},"setAnnotationCacheDir($directory)")," has been removed from the ",(0,l.kt)("inlineCode",{parentName:"li"},"SchemaFactory"),".  The annotation\ncache will use your ",(0,l.kt)("inlineCode",{parentName:"li"},"Psr\\SimpleCache\\CacheInterface")," compliant cache handler set through the ",(0,l.kt)("inlineCode",{parentName:"li"},"SchemaFactory"),"\nconstructor.")),(0,l.kt)("h4",{id:"minor-changes"},"Minor changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Removed dependency for doctrine/cache and unified some of the cache layers following a PSR interface."),(0,l.kt)("li",{parentName:"ul"},"Cleaned up some of the documentation in an attempt to get things accurate with versioned releases.")),(0,l.kt)("h2",{id:"420"},"4.2.0"),(0,l.kt)("h4",{id:"breaking-change-1"},"Breaking change:"),(0,l.kt)("p",null,"The method signature for ",(0,l.kt)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"toGraphQLInputType")," have been changed to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLOutputType(Type $type, ?OutputType $subType, $reflector, DocBlock $docBlockObj): OutputType;\n\n/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, $reflector, DocBlock $docBlockObj): InputType;\n")),(0,l.kt)("h4",{id:"new-features"},"New features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/annotations-reference#input-annotation"},"@Input")," annotation is introduced as an alternative to ",(0,l.kt)("inlineCode",{parentName:"li"},"@Factory"),". Now GraphQL input type can be created in the same manner as ",(0,l.kt)("inlineCode",{parentName:"li"},"@Type")," in combination with ",(0,l.kt)("inlineCode",{parentName:"li"},"@Field")," - ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/input-types#input-annotation"},"example"),"."),(0,l.kt)("li",{parentName:"ul"},"New attributes has been added to ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/annotations-reference#field-annotation"},"@Field")," annotation: ",(0,l.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"inputType")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"description"),"."),(0,l.kt)("li",{parentName:"ul"},"The following annotations now can be applied to class properties directly: ",(0,l.kt)("inlineCode",{parentName:"li"},"@Field"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"@Logged"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"@Right"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"@FailWith"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"@HideIfUnauthorized")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"@Security"),".")),(0,l.kt)("h2",{id:"410"},"4.1.0"),(0,l.kt)("h4",{id:"breaking-change-2"},"Breaking change:"),(0,l.kt)("p",null,"There is one breaking change introduced in the minor version (this was important to allow PHP 8 compatibility)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL input types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,l.kt)("inlineCode",{parentName:"li"},"ecodev/graphql-upload")," to your ",(0,l.kt)("inlineCode",{parentName:"li"},"composer.json"),".")),(0,l.kt)("h4",{id:"new-features-1"},"New features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All annotations can now be accessed as PHP 8 attributes"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"@deprecated")," annotation in your PHP code translates into deprecated fields in your GraphQL schema"),(0,l.kt)("li",{parentName:"ul"},"You can now specify the GraphQL name of the Enum types you define"),(0,l.kt)("li",{parentName:"ul"},"Added the possibility to inject pure Webonyx objects in GraphQLite schema")),(0,l.kt)("h4",{id:"minor-changes-1"},"Minor changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Migrated from ",(0,l.kt)("inlineCode",{parentName:"li"},"zend/diactoros")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"laminas/diactoros")),(0,l.kt)("li",{parentName:"ul"},"Making the annotation cache directory configurable")),(0,l.kt)("h4",{id:"miscellaneous"},"Miscellaneous:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Migrated from Travis to Github actions")),(0,l.kt)("h2",{id:"400"},"4.0.0"),(0,l.kt)("p",null,"This is a complete refactoring from 3.x. While existing annotations are kept compatible, the internals have completely\nchanged."),(0,l.kt)("h4",{id:"new-features-2"},"New features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can directly ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/inheritance-interfaces#mapping-interfaces"},"annotate a PHP interface with ",(0,l.kt)("inlineCode",{parentName:"a"},"@Type")," to make it a GraphQL interface")),(0,l.kt)("li",{parentName:"ul"},"You can autowire services in resolvers, thanks to the new ",(0,l.kt)("inlineCode",{parentName:"li"},"@Autowire")," annotation"),(0,l.kt)("li",{parentName:"ul"},"Added ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/validation"},"user input validation")," (using the Symfony Validator or the Laravel validator or a custom ",(0,l.kt)("inlineCode",{parentName:"li"},"@Assertion")," annotation"),(0,l.kt)("li",{parentName:"ul"},"Improved security handling:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unauthorized access to fields can now generate GraphQL errors (rather that schema errors in GraphQLite v3)"),(0,l.kt)("li",{parentName:"ul"},"Added fine-grained security using the ",(0,l.kt)("inlineCode",{parentName:"li"},"@Security")," annotation. A field can now be ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/fine-grained-security"},"marked accessible or not depending on the context"),'.\nFor instance, you can restrict access to the field "viewsCount" of the type ',(0,l.kt)("inlineCode",{parentName:"li"},"BlogPost")," only for post that the current user wrote."),(0,l.kt)("li",{parentName:"ul"},"You can now inject the current logged user in any query / mutation / field using the ",(0,l.kt)("inlineCode",{parentName:"li"},"@InjectUser")," annotation"))),(0,l.kt)("li",{parentName:"ul"},"Performance:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You can inject the ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/query-plan"},"Webonyx query plan in a parameter from a resolver")),(0,l.kt)("li",{parentName:"ul"},"You can use the ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/prefetch-method"},'dataloader pattern to improve performance drastically via the "prefetchMethod" attribute')))),(0,l.kt)("li",{parentName:"ul"},"Customizable error handling has been added:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You can throw ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/error-handling#many-errors-for-one-exception"},"many errors in one exception")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException")))),(0,l.kt)("li",{parentName:"ul"},"You can force input types using ",(0,l.kt)("inlineCode",{parentName:"li"},'@UseInputType(for="$id", inputType="ID!")')),(0,l.kt)("li",{parentName:"ul"},"You can extend an input types (just like you could extend an output type in v3) using ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/extend-input-type"},"the new ",(0,l.kt)("inlineCode",{parentName:"a"},"@Decorate")," annotation")),(0,l.kt)("li",{parentName:"ul"},"In a factory, you can ",(0,l.kt)("a",{parentName:"li",href:"input-types#ignoring-some-parameters"},"exclude some optional parameters from the GraphQL schema"))),(0,l.kt)("p",null,"Many extension points have been added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Added a "root type mapper" (useful to map scalar types to PHP types or to add custom annotations related to resolvers)'),(0,l.kt)("li",{parentName:"ul"},"Added ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/field-middlewares"},'"field middlewares"')," (useful to add middleware that modify the way GraphQL fields are handled)"),(0,l.kt)("li",{parentName:"ul"},"Added a ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/argument-resolving"},'"parameter type mapper"')," (useful to add customize parameter resolution or add custom annotations related to parameters)")),(0,l.kt)("p",null,"New framework specific features:"),(0,l.kt)("h4",{id:"symfony"},"Symfony:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The Symfony bundle now provides a "login" and a "logout" mutation (and also a "me" query)')),(0,l.kt)("h4",{id:"laravel"},"Laravel:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/laravel-package-advanced#support-for-pagination"},"Native integration with the Laravel paginator")," has been added")),(0,l.kt)("h4",{id:"internals"},"Internals:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"FieldsBuilder")," class has been split in many different services (",(0,l.kt)("inlineCode",{parentName:"li"},"FieldsBuilder"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"TypeHandler"),", and a\nchain of ",(0,l.kt)("em",{parentName:"li"},"root type mappers"),")"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," class has been completely removed."),(0,l.kt)("li",{parentName:"ul"},"Overall, there is not much in common internally between 4.x and 3.x. 4.x is much more flexible with many more hook points\nthan 3.x. Try it out!")))}s.isMDXComponent=!0}}]);