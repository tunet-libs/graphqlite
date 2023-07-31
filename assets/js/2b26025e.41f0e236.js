"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7046],{7250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));a(1839);const i={id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},l=void 0,o={unversionedId:"index",id:"version-6.1/index",title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-6.1/README.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/README.mdx",tags:[],version:"6.1",lastUpdatedBy:"oprypkhantc",lastUpdatedAt:1690796737,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/getting-started"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Basic example",id:"basic-example",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,n.kt)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,n.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony, Laravel and PSR-15 bindings available!"),(0,n.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, security, validation, extendable types and more!")),(0,n.kt)("h2",{id:"basic-example"},"Basic example"),(0,n.kt)("p",null,"First, declare a query in your controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")),(0,n.kt)("p",null,"Then, annotate the ",(0,n.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")),(0,n.kt)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}c.isMDXComponent=!0}}]);