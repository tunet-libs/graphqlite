"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6595],{84106:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"mutations",title:"Mutations",sidebar_label:"Mutations",original_id:"mutations"},u=void 0,d={unversionedId:"mutations",id:"version-4.0/mutations",isDocsHomePage:!1,title:"Mutations",description:"In GraphQLite, mutations are created like queries.",source:"@site/versioned_docs/version-4.0/mutations.mdx",sourceDirName:".",slug:"/mutations",permalink:"/docs/4.0/mutations",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/mutations.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jakub Janata",lastUpdatedAt:1646429510,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"mutations",title:"Mutations",sidebar_label:"Mutations",original_id:"mutations"},sidebar:"version-4.0/docs",previous:{title:"Queries",permalink:"/docs/4.0/queries"},next:{title:"Type mapping",permalink:"/docs/4.0/type_mapping"}},c=[],l={toc:c};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In GraphQLite, mutations are created ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/queries"},"like queries"),"."),(0,o.kt)("p",null,"To create a mutation, you must annotate a method in a controller with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Mutation")," annotation."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    /**\n     * @Mutation\n     */\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n")))}p.isMDXComponent=!0}}]);