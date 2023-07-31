"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[306],{3503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var r=n(7462),s=(n(7294),n(3905));n(1839),n(4866),n(5162);const a={id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},o=void 0,i={unversionedId:"prefetch-method",id:"version-6.1/prefetch-method",title:"Prefetching records",description:"The problem",source:"@site/versioned_docs/version-6.1/prefetch-method.mdx",sourceDirName:".",slug:"/prefetch-method",permalink:"/docs/prefetch-method",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/prefetch-method.mdx",tags:[],version:"6.1",lastUpdatedBy:"oprypkhantc",lastUpdatedAt:1690796737,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},sidebar:"docs",previous:{title:"Query plan",permalink:"/docs/query-plan"},next:{title:"File uploads",permalink:"/docs/file-uploads"}},l={},h=[{value:"The problem",id:"the-problem",level:2},{value:"The &quot;prefetch&quot; method",id:"the-prefetch-method",level:2},{value:"Input arguments",id:"input-arguments",level:2}],p={toc:h},d="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"the-problem"},"The problem"),(0,s.kt)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,s.kt)("p",null,"Consider a request where a user attached to a post must be returned:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    posts {\n        id\n        user {\n            id\n        }\n    }\n}\n")),(0,s.kt)("p",null,"A naive implementation will do this:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 query to fetch the list of posts"),(0,s.kt)("li",{parentName:"ul"},"1 query per post to fetch the user")),(0,s.kt)("p",null,'Assuming we have "N" posts, we will make "N+1" queries.'),(0,s.kt)("p",null,'There are several ways to fix this problem.\nAssuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "posts" and "users".\nThis method is described in the ',(0,s.kt)("a",{parentName:"p",href:"/docs/query-plan"},'"analyzing the query plan" documentation'),"."),(0,s.kt)("p",null,"But this can be difficult to implement. This is also only useful for relational databases. If your data comes from a\nNoSQL database or from the cache, this will not help."),(0,s.kt)("p",null,"Instead, GraphQLite offers an easier to implement solution: the ability to fetch all fields from a given type at once."),(0,s.kt)("h2",{id:"the-prefetch-method"},'The "prefetch" method'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param Post $post\n     * @param mixed $prefetchedUsers\n     * @return User\n     */\n    #[Field(prefetchMethod: "prefetchUsers")]\n    public function getUser(Post $post, $prefetchedUsers): User\n    {\n        // This method will receive the $prefetchedUsers as second argument. This is the return value of the "prefetchUsers" method below.\n        // Using this prefetched list, it should be easy to map it to the post\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchUsers(iterable $posts)\n    {\n        // This function is called only once per GraphQL request\n        // with the list of posts. You can fetch the list of users\n        // associated with this posts in a single request,\n        // for instance using a "IN" query in SQL or a multi-fetch\n        // in your cache back-end.\n    }\n}\n')),(0,s.kt)("p",null,'When the "prefetchMethod" attribute is detected in the "@Field" annotation, the method is called automatically.\nThe first argument of the method is an array of instances of the main type.\nThe "prefetchMethod" can return absolutely anything (mixed). The return value will be passed as the second parameter of the "@Field" annotated method.'),(0,s.kt)("h2",{id:"input-arguments"},"Input arguments"),(0,s.kt)("p",null,"Field arguments can be set either on the @Field annotated method OR/AND on the prefetchMethod."),(0,s.kt)("p",null,"For instance:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param Post $post\n     * @param mixed $prefetchedComments\n     * @return Comment[]\n     */\n    #[Field(prefetchMethod: "prefetchComments")]\n    public function getComments(Post $post, $prefetchedComments): array\n    {\n        // ...\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchComments(iterable $posts, bool $hideSpam, int $filterByScore)\n    {\n        // Parameters passed after the first parameter (hideSpam, filterByScore...) are automatically exposed\n        // as GraphQL arguments for the "comments" field.\n    }\n}\n')),(0,s.kt)("p",null,"The prefetch method MUST be in the same class as the @Field-annotated method and MUST be public."))}c.isMDXComponent=!0}}]);