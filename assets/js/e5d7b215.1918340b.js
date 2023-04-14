"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[153],{8869:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(7462),n=(t(7294),t(3905));t(1839);const a={id:"universal-service-providers",title:"Getting started with a framework compatible with container-interop/service-provider",sidebar_label:"Universal service providers"},o=void 0,s={unversionedId:"universal-service-providers",id:"universal-service-providers",title:"Getting started with a framework compatible with container-interop/service-provider",description:"container-interop/service-provider is an experimental project",source:"@site/docs/universal-service-providers.md",sourceDirName:".",slug:"/universal-service-providers",permalink:"/docs/next/universal-service-providers",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/universal-service-providers.md",tags:[],version:"current",lastUpdatedBy:"Mistral Oz",lastUpdatedAt:1681501615,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"universal-service-providers",title:"Getting started with a framework compatible with container-interop/service-provider",sidebar_label:"Universal service providers"},sidebar:"docs",previous:{title:"Laravel package",permalink:"/docs/next/laravel-package"},next:{title:"Other frameworks / No framework",permalink:"/docs/next/other-frameworks"}},p={},l=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Integration",id:"integration",level:2},{value:"Sample usage",id:"sample-usage",level:2}],c={toc:l},d="wrapper";function h(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/container-interop/service-provider/"},"container-interop/service-provider")," is an experimental project\naiming to bring interoperability between framework module systems."),(0,n.kt)("p",null,"If your framework is compatible with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/container-interop/service-provider/"},"container-interop/service-provider"),",\nGraphQLite comes with a service provider that you can leverage."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-universal-service-provider\n")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"In order to bootstrap GraphQLite, you will need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A PSR-16 cache")),(0,n.kt)("p",null,"Additionally, you will have to route the HTTP requests to the underlying GraphQL library."),(0,n.kt)("p",null,"GraphQLite relies on the ",(0,n.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/"},"webonyx/graphql-php")," library internally.\nThis library plays well with PSR-7 requests and we provide a ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/other-frameworks"},"PSR-15 middleware"),"."),(0,n.kt)("h2",{id:"integration"},"Integration"),(0,n.kt)("p",null,"Webonyx/graphql-php library requires a ",(0,n.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/schema/"},"Schema")," in order to resolve\nGraphQL queries. The service provider provides this ",(0,n.kt)("inlineCode",{parentName:"p"},"Schema")," class."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-universal-service-provider"},"Checkout the the service-provider documentation")),(0,n.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="composer.json"',title:'"composer.json"'},'{\n  "require": {\n    "mnapoli/simplex": "^0.5",\n    "thecodingmachine/graphqlite-universal-service-provider": "^3",\n    "thecodingmachine/symfony-cache-universal-module": "^1"\n  },\n  "minimum-stability": "dev",\n  "prefer-stable": true\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="index.php"',title:'"index.php"'},"<?php\nuse Simplex\\Container;\nuse TheCodingMachine\\GraphQLite\\Http\\Psr15GraphQLMiddlewareBuilder;\nuse TheCodingMachine\\GraphQLite\\Schema;\nuse TheCodingMachine\\SymfonyCacheServiceProvider;\nuse TheCodingMachine\\DoctrineAnnotationsServiceProvider;\nuse TheCodingMachine\\GraphQLiteServiceProvider;\n\n$container = new Container([\n    new SymfonyCacheServiceProvider(),\n    new DoctrineAnnotationsServiceProvider,\n    new GraphQLiteServiceProvider()]);\n$container->set('graphqlite.namespace.types', ['App\\\\Types']);\n$container->set('graphqlite.namespace.controllers', ['App\\\\Controllers']);\n\n$schema = $container->get(Schema::class);\n\n// or if you want the PSR-15 middleware:\n\n$middleware = $container->get(Psr15GraphQLMiddlewareBuilder::class);\n")))}h.isMDXComponent=!0}}]);