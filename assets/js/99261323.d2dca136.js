"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[9420],{38699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var n=a(74848),i=a(28453);a(4865),a(19365),a(79402);const s={id:"multi-agent-evaluation"},l="Multi-agent evaluation",r={id:"guides/multi-agent-evaluation",title:"Multi-agent evaluation",description:"",source:"@site/docs/guides/multi-agent-evaluation.mdx",sourceDirName:"guides",slug:"/guides/multi-agent-evaluation",permalink:"/guides/multi-agent-evaluation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"multi-agent-evaluation"},sidebar:"sidebar",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"RAG Evaluation",permalink:"/guides/rag-evaluation"}},o={},u=[];function c(e){const t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"multi-agent-evaluation",children:"Multi-agent evaluation"})})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},79402:(e,t,a)=>{var n=a(38193);!!n.default.canUseDOM&&navigator.platform.startsWith("Mac"),!!n.default.canUseDOM&&navigator.platform.startsWith("Win")},4865:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(96540),i=a(18215),s=a(23104),l=a(47751),r=a(92303);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=a(74848);function c(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),i=r[a].value;i!==n&&(d(t),l(i))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t),children:r.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,u.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:g,onClick:m,...s,className:(0,i.A)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function d(e){let{lazy:t,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function m(e){const t=(0,l.u)(e);return(0,u.jsxs)("div",{className:(0,i.A)("tabs-container",o.tabList),children:[(0,u.jsx)(c,{...t,...e}),(0,u.jsx)(d,{...t,...e})]})}function g(e){const t=(0,r.default)();return(0,u.jsx)(m,{...e,children:(0,l.v)(e.children)},String(t))}}}]);