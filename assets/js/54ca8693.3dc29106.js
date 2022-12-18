"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9506],{1962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(1839);const l={id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},i=void 0,o={unversionedId:"symfony-bundle",id:"version-3.0/symfony-bundle",title:"Getting started with Symfony",description:"The GraphQLite bundle is compatible with Symfony 4.x.",source:"@site/versioned_docs/version-3.0/symfony-bundle.md",sourceDirName:".",slug:"/symfony-bundle",permalink:"/docs/3.0/symfony-bundle",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/symfony-bundle.md",tags:[],version:"3.0",lastUpdatedBy:"Malte D\xf6lker",lastUpdatedAt:1671381755,formattedLastUpdatedAt:"12/18/2022",frontMatter:{id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},sidebar:"version-3.0/docs",previous:{title:"Getting Started",permalink:"/docs/3.0/getting-started"},next:{title:"Laravel package",permalink:"/docs/3.0/laravel-package"}},s={},p=[{value:"Installation",id:"installation",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The GraphQLite bundle is compatible with ",(0,r.kt)("strong",{parentName:"p"},"Symfony 4.x"),"."),(0,r.kt)("div",{class:"alert alert--warning"},"The Symfony Flex recipe is not yet available."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,r.kt)("p",null,"Enable the library by adding it to the list of registered bundles in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/AppKernel.php")," file:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app/AppKernel.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nclass AppKernel extends Kernel\n{\n    public function registerBundles()\n    {\n        $bundles = array(\n            // other bundles...\n            new TheCodingMachine\\GraphQLite\\Bundle\\GraphQLiteBundle,\n        );\n    }\n}\n")),(0,r.kt)("p",null,'Now, enable the "graphql/" route by editing the ',(0,r.kt)("inlineCode",{parentName:"p"},"config/routes.yaml")," file:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config/routes.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Add these 2 lines to config/routes.yaml\ngraphqlite_bundle:\n  resource: '@GraphqliteBundle/Resources/config/routes.xml'\n")),(0,r.kt)("p",null,"Last but not least, create the configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    namespace:\n      # The namespace(s) that will store your GraphQLite controllers.\n      # It accept either a string or a list of strings.\n      controllers: App\\Controller\\\n      # The namespace(s) that will store your GraphQL types and factories.\n      # It accept either a string or a list of strings.\n      types:\n      - App\\Types\\\n      - App\\Entity\\\n    debug:\n      # Include exception messages in output when an error arises.\n      INCLUDE_DEBUG_MESSAGE: false\n      # Include stacktrace in output when an error arises.\n      INCLUDE_TRACE: false\n      # Exceptions are not caught by the engine and propagated to Symfony.\n      RETHROW_INTERNAL_EXCEPTIONS: false\n      # Exceptions that do not implement ClientAware interface are\n      # not caught by the engine and propagated to Symfony.\n      RETHROW_UNSAFE_EXCEPTIONS: true\n")),(0,r.kt)("p",null,"The debug parameters are detailed in the ",(0,r.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."))}u.isMDXComponent=!0}}]);