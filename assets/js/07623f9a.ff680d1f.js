"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4009],{4030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(1839);const l={id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},o=void 0,i={unversionedId:"symfony-bundle",id:"version-4.0/symfony-bundle",title:"Getting started with Symfony",description:"The GraphQLite bundle is compatible with Symfony 4.x and Symfony 5.x.",source:"@site/versioned_docs/version-4.0/symfony-bundle.md",sourceDirName:".",slug:"/symfony-bundle",permalink:"/docs/4.0/symfony-bundle",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/symfony-bundle.md",tags:[],version:"4.0",lastUpdatedBy:"oprypkhantc",lastUpdatedAt:1690796737,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},sidebar:"version-4.0/docs",previous:{title:"Getting Started",permalink:"/docs/4.0/getting-started"},next:{title:"Laravel package",permalink:"/docs/4.0/laravel-package"}},p={},s=[{value:"Applications that use Symfony Flex",id:"applications-that-use-symfony-flex",level:2},{value:"Applications that don&#39;t use Symfony Flex",id:"applications-that-dont-use-symfony-flex",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2},{value:"Customizing error handling",id:"customizing-error-handling",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The GraphQLite bundle is compatible with ",(0,r.kt)("strong",{parentName:"p"},"Symfony 4.x")," and ",(0,r.kt)("strong",{parentName:"p"},"Symfony 5.x"),"."),(0,r.kt)("h2",{id:"applications-that-use-symfony-flex"},"Applications that use Symfony Flex"),(0,r.kt)("p",null,"Open a command console, enter your project directory and execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,r.kt)("p",null,"Now, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml")," file and edit the namespaces to match your application."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    namespace:\n      # The namespace(s) that will store your GraphQLite controllers.\n      # It accept either a string or a list of strings.\n      controllers: App\\GraphQLController\\\n      # The namespace(s) that will store your GraphQL types and factories.\n      # It accept either a string or a list of strings.\n      types:\n      - App\\Types\\\n      - App\\Entity\\\n")),(0,r.kt)("p",null,"More advanced parameters are detailed in the ",(0,r.kt)("a",{parentName:"p",href:"#advanced-configuration"},'"advanced configuration" section')),(0,r.kt)("h2",{id:"applications-that-dont-use-symfony-flex"},"Applications that don't use Symfony Flex"),(0,r.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,r.kt)("p",null,"Enable the library by adding it to the list of registered bundles in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/AppKernel.php")," file:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app/AppKernel.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nclass AppKernel extends Kernel\n{\n    public function registerBundles()\n    {\n        $bundles = array(\n            // other bundles...\n            new TheCodingMachine\\GraphQLite\\Bundle\\GraphQLiteBundle,\n        );\n    }\n}\n")),(0,r.kt)("p",null,'Now, enable the "graphql/" route by editing the ',(0,r.kt)("inlineCode",{parentName:"p"},"config/routes.yaml")," file:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config/routes.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Add these 2 lines to config/routes.yaml\ngraphqlite_bundle:\n  resource: '@GraphqliteBundle/Resources/config/routes.xml'\n")),(0,r.kt)("p",null,"Last but not least, create the configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    namespace:\n      # The namespace(s) that will store your GraphQLite controllers.\n      # It accept either a string or a list of strings.\n      controllers: App\\GraphqlController\\\n      # The namespace(s) that will store your GraphQL types and factories.\n      # It accept either a string or a list of strings.\n      types:\n      - App\\Types\\\n      - App\\Entity\\\n")),(0,r.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,r.kt)("h3",{id:"customizing-error-handling"},"Customizing error handling"),(0,r.kt)("p",null,'You can add a "debug" section in the ',(0,r.kt)("inlineCode",{parentName:"p"},"graphqlite.yaml")," file to customize the way errors are handled.\nBy default, GraphQLite configures the underlying Webonyx GraphQL library this way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All exceptions that implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientAware")," interface are caught by GraphQLite"),(0,r.kt)("li",{parentName:"ul"},"All other exceptions will bubble up and by caught by Symfony error handling mechanism")),(0,r.kt)("p",null,"We found out those settings to be quite convenient but you can override those to your preference."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    # ...\n    debug:\n      # Include exception messages in output when an error arises.\n      INCLUDE_DEBUG_MESSAGE: false\n      # Include stacktrace in output when an error arises.\n      INCLUDE_TRACE: false\n      # Exceptions are not caught by the engine and propagated to Symfony.\n      RETHROW_INTERNAL_EXCEPTIONS: false\n      # Exceptions that do not implement ClientAware interface are\n      # not caught by the engine and propagated to Symfony.\n      RETHROW_UNSAFE_EXCEPTIONS: true\n")),(0,r.kt)("p",null,"The debug parameters are detailed in the ",(0,r.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."),(0,r.kt)("div",{class:"alert alert--warning"},(0,r.kt)("strong",null,"Do not put your GraphQL controllers in the ",(0,r.kt)("code",null,"App\\Controller")," namespace"),"Symfony applies a particular compiler pass to classes in the ",(0,r.kt)("code",null,"App\\Controller")," namespace. This compiler pass will prevent you from using input types. Put your controllers in another namespace. We advise using ",(0,r.kt)("code",null,"App\\GraphqlController"),"."),(0,r.kt)("p",null,"The Symfony bundle come with a set of advanced features that are not described in this install documentation (like providing a login/logout mutation out of the box).\nJump to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/symfony-bundle-advanced"},'"Symfony specific features"')," documentation of GraphQLite if you want to learn more."))}u.isMDXComponent=!0}}]);