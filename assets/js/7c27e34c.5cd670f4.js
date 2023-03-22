"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8091],{9122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(1839);const i={id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},l=void 0,s={unversionedId:"features",id:"version-3.0/features",title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-3.0/features.mdx",sourceDirName:".",slug:"/",permalink:"/docs/3.0/",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/features.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1679520223,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},sidebar:"version-3.0/docs",next:{title:"Getting Started",permalink:"/docs/3.0/getting-started"}},o={},u=[{value:"Features",id:"features",level:2},{value:"Basic example",id:"basic-example",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,n.kt)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,n.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony bundle available!"),(0,n.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, extendable types and more!")),(0,n.kt)("h2",{id:"basic-example"},"Basic example"),(0,n.kt)("p",null,"First, declare a query in your controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")),(0,n.kt)("p",null,"Then, annotate the ",(0,n.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")),(0,n.kt)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-grapql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}c.isMDXComponent=!0}}]);