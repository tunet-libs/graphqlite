"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2835],{9276:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=(a(1839),a(4866)),i=a(5162);const o={id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},p=void 0,s={unversionedId:"index",id:"version-5.0/index",title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-5.0/README.mdx",sourceDirName:".",slug:"/",permalink:"/docs/5.0/",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/README.mdx",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1693875693,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},sidebar:"version-5.0/docs",next:{title:"Getting Started",permalink:"/docs/5.0/getting-started"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Basic example",id:"basic-example",level:2}],c={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,l.kt)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,l.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony, Laravel and PSR-15 bindings available!"),(0,l.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, security, validation, extendable types and more!")),(0,l.kt)("h2",{id:"basic-example"},"Basic example"),(0,l.kt)("p",null,"First, declare a query in your controller:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,l.kt)("p",null,"Then, annotate the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")))),(0,l.kt)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}h.isMDXComponent=!0}}]);