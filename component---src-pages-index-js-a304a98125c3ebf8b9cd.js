(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7361:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6b96034a4bce08025a02813dba6ea0e4/e5610/profile-pic.png","srcSet":"/static/6b96034a4bce08025a02813dba6ea0e4/e5610/profile-pic.png 50w,\\n/static/6b96034a4bce08025a02813dba6ea0e4/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6b96034a4bce08025a02813dba6ea0e4/d4bf4/profile-pic.avif 50w,\\n/static/6b96034a4bce08025a02813dba6ea0e4/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6b96034a4bce08025a02813dba6ea0e4/3faea/profile-pic.webp 50w,\\n/static/6b96034a4bce08025a02813dba6ea0e4/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),i=a(5444),r=a(3217);t.Z=function(){var e,t=null===(e=(0,i.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"bio"},l.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(7361)}),(null==t?void 0:t.name)&&l.createElement("p",null,"Escrito por ",l.createElement("strong",null,t.name)," "," "))}},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),i=a(5444),r=a(9535),n=a(7198),c=a(3751);t.default=function(e){var t,a=e.data,s=e.location,o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=a.allMarkdownRemark.nodes;return 0===p.length?l.createElement(n.Z,{location:s,title:o},l.createElement(c.Z,{title:"All posts"}),l.createElement(r.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(n.Z,{location:s,title:o},l.createElement(c.Z,{title:"All posts"}),l.createElement(r.Z,null),l.createElement("ol",{style:{listStyle:"none"}},p.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a304a98125c3ebf8b9cd.js.map