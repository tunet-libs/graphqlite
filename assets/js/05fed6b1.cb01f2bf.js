"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7334],{8316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),o=(n(1839),n(4866)),r=n(5162);const s={id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},l=void 0,u={unversionedId:"autowiring",id:"version-4.2/autowiring",title:"Autowiring services",description:"GraphQLite can automatically inject services in your fields/queries/mutations signatures.",source:"@site/versioned_docs/version-4.2/autowiring.mdx",sourceDirName:".",slug:"/autowiring",permalink:"/docs/4.2/autowiring",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/autowiring.mdx",tags:[],version:"4.2",lastUpdatedBy:"oprypkhantc",lastUpdatedAt:1690796737,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},sidebar:"version-4.2/docs",previous:{title:"Type mapping",permalink:"/docs/4.2/type-mapping"},next:{title:"Extending a type",permalink:"/docs/4.2/extend-type"}},p={},c=[{value:"Sample",id:"sample",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Fetching a service by name (discouraged!)",id:"fetching-a-service-by-name-discouraged",level:2},{value:"Alternative solution",id:"alternative-solution",level:2}],d={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQLite can automatically inject services in your fields/queries/mutations signatures."),(0,i.kt)("p",null,"Some of your fields may be computed. In order to compute these fields, you might need to call a service."),(0,i.kt)("p",null,"Most of the time, your ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotation will be put on a model. And models do not have access to services.\nHopefully, if you add a type-hinted service in your field's declaration, GraphQLite will automatically fill it with\nthe service instance."),(0,i.kt)("h2",{id:"sample"},"Sample"),(0,i.kt)("p",null,"Let's assume you are running an international store. You have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class. Each product has many names (depending\non the language of the user)."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(\n            #[Autowire]\n            TranslatorInterface $translator\n        ): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     * @Autowire(for=\"$translator\")\n     */\n    public function getName(TranslatorInterface $translator): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n")))),(0,i.kt)("p",null,"When GraphQLite queries the name, it will automatically fetch the translator service."),(0,i.kt)("div",{class:"alert alert--warning"},"As with most autowiring solutions, GraphQLite assumes that the service identifier in the container is the fully qualified class name of the type-hint. So in the example above, GraphQLite will look for a service whose name is ",(0,i.kt)("code",null,"Symfony\\Component\\Translation\\TranslatorInterface"),"."),(0,i.kt)("h2",{id:"best-practices"},"Best practices"),(0,i.kt)("p",null,"It is a good idea to refrain from type-hinting on concrete implementations.\nMost often, your field declaration will be in your model. If you add a type-hint on a service, you are binding your domain\nwith a particular service implementation. This makes your code tightly coupled and less testable."),(0,i.kt)("div",{class:"alert alert--danger"},"Please don't do that:",(0,i.kt)("pre",null,(0,i.kt)("code",null,"#[Field] public function getName(#[Autowire] MyTranslator $translator): string"))),(0,i.kt)("p",null,"Instead, be sure to type-hint against an interface."),(0,i.kt)("div",{class:"alert alert--success"},"Do this instead:",(0,i.kt)("pre",null,(0,i.kt)("code",null,"#[Field] public function getName(#[Autowire] TranslatorInterface $translator): string"))),(0,i.kt)("p",null,"By type-hinting against an interface, your code remains testable and is decoupled from the service implementation."),(0,i.kt)("h2",{id:"fetching-a-service-by-name-discouraged"},"Fetching a service by name (discouraged!)"),(0,i.kt)("p",null,"Optionally, you can specify the identifier of the service you want to fetch from the controller:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Autowire(identifier: "translator")]\n'))),(0,i.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Autowire(for="$translator", identifier="translator")\n */\n')))),(0,i.kt)("div",{class:"alert alert--danger"},"While GraphQLite offers the possibility to specify the name of the service to be autowired, we would like to emphasize that this is ",(0,i.kt)("strong",null,"highly discouraged"),'. Hard-coding a container identifier in the code of your class is akin to using the "service locator" pattern, which is known to be an anti-pattern. Please refrain from doing this as much as possible.'),(0,i.kt)("h2",{id:"alternative-solution"},"Alternative solution"),(0,i.kt)("p",null,"You may find yourself uncomfortable with the autowiring mechanism of GraphQLite. For instance maybe:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your service identifier in the container is not the fully qualified class name of the service (this is often true if you are not using a container supporting autowiring)"),(0,i.kt)("li",{parentName:"ul"},"You do not want to inject a service in a domain object"),(0,i.kt)("li",{parentName:"ul"},"You simply do not like the magic of injecting services in a method signature")),(0,i.kt)("p",null,"If you do not want to use autowiring and if you still need to access services to compute a field, please read on\nthe next chapter to learn ",(0,i.kt)("a",{parentName:"p",href:"extend-type"},"how to extend a type"),"."))}m.isMDXComponent=!0}}]);