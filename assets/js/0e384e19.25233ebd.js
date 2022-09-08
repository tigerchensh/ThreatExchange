"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Hasher-Matcher-Actioner (HMA) is an open-source, trust and safety tool. You submit content to HMA. It scans the content and flags potential community standards violations. Configure rules in HMA to automatically take actions (such as enqueue to a review system) when these potential violations are flagged.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ThreatExchange/docs/intro",draft:!1,editUrl:"https://github.com/facebook/ThreatExchange/tree/main/hasher-matcher-actioner/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",next:{title:"Quick install guide",permalink:"/ThreatExchange/docs/installation/"}},c={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Hasher-Matcher-Actioner (HMA) is an open-source, trust and safety tool. You submit content to HMA. It scans the content and flags potential community standards violations. Configure rules in HMA to automatically take actions (such as enqueue to a review system) when these potential violations are flagged."),(0,r.kt)("h1",{id:"when-to-use-hma"},"When to use HMA?"),(0,r.kt)("p",null,"If the following is true about your organization, then you need HMA."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You support online communties like Meta does"),(0,r.kt)("li",{parentName:"ul"},"You have community standards / guidelines or rules that you would like to enforce")),(0,r.kt)("h1",{id:"how-does-hma-enforce-your-community-standards"},"How does HMA enforce your community standards?"),(0,r.kt)("p",null,"HMA allows you to create collections of media objects (photos or videos) that must be flagged if they appear on your platform. Internally, HMA creates unique fingerprints of these media objects and scans your platform for them. If it finds identical or nearly identical media, it flags them to your staff or systems."),(0,r.kt)("h1",{id:"wait-i-dont-want-to-send-my-users-content-to-you"},"Wait, I don't want to send my user's content to you!"),(0,r.kt)("p",null,"No worries! HMA is installed in your AWS cloud account. Your user's content never leaves your infrastructure."))}d.isMDXComponent=!0}}]);