"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9108],{58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},55064:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(72389),i=n(79443);var l=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},s=n(83039),u=n(86010),p="tabItem_vU9c";function c(t){var e,n,a,o=t.lazy,i=t.block,c=t.defaultValue,d=t.values,h=t.groupId,m=t.className,b=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,s.lx)(v,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(e=null!=c?c:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=b[0])?void 0:a.props.value;if(null!==k&&!v.some((function(t){return t.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),y=g.tabGroupChoices,P=g.setTabGroupChoices,w=(0,r.useState)(k),N=w[0],T=w[1],H=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=y[h];null!=C&&C!==N&&v.some((function(t){return t.value===C}))&&T(C)}var A=function(t){var e=t.currentTarget,n=H.indexOf(e),a=v[n].value;a!==N&&(D(e),T(a),null!=h&&P(h,a))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=H.indexOf(t.currentTarget)+1;n=H[a]||H[0];break;case"ArrowLeft":var r=H.indexOf(t.currentTarget)-1;n=H[r]||H[H.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},m)},v.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":N===e}),key:e,ref:function(t){return H.push(t)},onKeyDown:E,onFocus:A,onClick:A},null!=n?n:e)}))),o?(0,r.cloneElement)(b.filter((function(t){return t.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==N})}))))}function d(t){var e=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},41834:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],u={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},p=void 0,c={unversionedId:"doctrine-annotations-attributes",id:"version-4.2/doctrine-annotations-attributes",isDocsHomePage:!1,title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/versioned_docs/version-4.2/doctrine-annotations-attributes.mdx",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/4.2/doctrine-annotations-attributes",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/doctrine-annotations-attributes.mdx",tags:[],version:"4.2",lastUpdatedBy:"Jakub Janata",lastUpdatedAt:1646429510,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},sidebar:"version-4.2/docs",previous:{title:"Migrating",permalink:"/docs/4.2/migrating"},next:{title:"Annotations reference",permalink:"/docs/4.2/annotations-reference"}},d=[{value:"Doctrine annotations",id:"doctrine-annotations",children:[],level:2},{value:"PHP 8 attributes",id:"php-8-attributes",children:[],level:2}],h={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,o.kt)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in a future release."),(0,o.kt)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.  This was the purpose of the ',(0,o.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,o.kt)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"Please note that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The annotation is added in a ",(0,o.kt)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,o.kt)("inlineCode",{parentName:"li"},"/**"),'")'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,o.kt)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,o.kt)("div",{class:"alert alert--info"},(0,o.kt)("strong",null,"Heads up!"),(0,o.kt)("p",null,"Some IDEs provide support for Doctrine annotations:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"PhpStorm via the ",(0,o.kt)("a",{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations"},"PHP Annotations Plugin")),(0,o.kt)("li",null,"Eclipse via the ",(0,o.kt)("a",{href:"https://marketplace.eclipse.org/content/symfony-plugin"},"Symfony 2 Plugin")),(0,o.kt)("li",null,"Netbeans has native support")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"We strongly recommend using an IDE that has Doctrine annotations support.\n"))),(0,o.kt)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,o.kt)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,o.kt)("p",null,"The same code can be written this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,o.kt)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,o.kt)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,o.kt)("p",null,"They support the same attributes too."),(0,o.kt)("p",null,"A few notable differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,o.kt)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,o.kt)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,o.kt)("p",null,"Let's take an example with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.2/autowiring"},(0,o.kt)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')))))}m.isMDXComponent=!0}}]);