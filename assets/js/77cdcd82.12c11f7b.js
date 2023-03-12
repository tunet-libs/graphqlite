"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6956],{5373:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));o(1839);const i={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},s=void 0,a={unversionedId:"troubleshooting",id:"version-6.1/troubleshooting",title:"Troubleshooting",description:"Error: Maximum function nesting level of '100' reached",source:"@site/versioned_docs/version-6.1/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/troubleshooting.md",tags:[],version:"6.1",lastUpdatedBy:"oprypkhantc",lastUpdatedAt:1678509250,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Internals",permalink:"/docs/internals"},next:{title:"Migrating",permalink:"/docs/migrating"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Error: Maximum function nesting level of '100' reached")),(0,r.kt)("p",null,"Webonyx's GraphQL library tends to use a very deep stack.\nThis error does not necessarily mean your code is going into an infinite loop.\nSimply try to increase the maximum allowed nesting level in your XDebug conf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"xdebug.max_nesting_level=500\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Cannot autowire service "',(0,r.kt)("em",{parentName:"strong"},"[some input type]"),'": argument "$..." of method "..." is type-hinted "...", you should configure its value explicitly.')),(0,r.kt)("p",null,"The message says that Symfony is trying to instantiate an input type as a service. This can happen if you put your\nGraphQLite controllers in the Symfony controller namespace (",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default). Symfony will assume that any\nobject type-hinted in a method of a controller is a service (",(0,r.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/service_container/3.3-di-changes.html#controllers-are-registered-as-services"},'because all controllers are tagged with the "controller.service_arguments" tag'),")"),(0,r.kt)("p",null,"To fix this issue, do not put your GraphQLite controller in the same namespace as the Symfony controllers and\nreconfigure your ",(0,r.kt)("inlineCode",{parentName:"p"},"config/graphqlite.yml")," file to point to your new namespace."))}d.isMDXComponent=!0}}]);