"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[3340],{56870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=a(74848),n=a(28453);a(4865),a(19365),a(79402);const l={id:"deployment",title:"VPC Deployment"},r="Deployment Options",i={id:"deployment",title:"VPC Deployment",description:"Hosted by LastMile AI",source:"@site/docs/deployment.mdx",sourceDirName:".",slug:"/deployment",permalink:"/deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"deployment",title:"VPC Deployment"},sidebar:"sidebar",previous:{title:"google.protobuf.Value",permalink:"/api/schemas/google-protobuf-value"},next:{title:"Guides",permalink:"/category/guides"}},o={},c=[{value:"Hosted by LastMile AI",id:"hosted-by-lastmile-ai",level:2},{value:"Containers on Private Clouds",id:"private-clouds",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"deployment-options",children:"Deployment Options"})}),"\n",(0,s.jsx)(t.h2,{id:"hosted-by-lastmile-ai",children:"Hosted by LastMile AI"}),"\n",(0,s.jsxs)(t.p,{children:["LastMile AI provides a hosted version of the AutoEval platform and the AlBERTa models. Users can try the platform as a service without installing the platform onto their environment. The hosted platform is a single-tenant service with usage based billing. For users looking for an on-prem installation, visit ",(0,s.jsx)(t.a,{href:"#private-clouds",children:"Containers on Private Clouds"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"private-clouds",children:"Containers on Private Clouds"}),"\n",(0,s.jsxs)(t.p,{children:["LastMile AI provides a deployable container (OCI) that can be hosted on your private cloud through ",(0,s.jsx)(t.a,{href:"https://www.docker.com/",children:"Docker"}),", ",(0,s.jsx)(t.a,{href:"https://podman.io/",children:"Podman"}),", or any other OCI certified service. If you are interested in hosting the AutoEval and AlBERTa models within your private cloud, please contact ",(0,s.jsx)(t.a,{href:"mailto:sales@lastmileai.dev",children:"sales@lastmileai.dev"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},79402:(e,t,a)=>{var s=a(38193);!!s.default.canUseDOM&&navigator.platform.startsWith("Mac"),!!s.default.canUseDOM&&navigator.platform.startsWith("Win")},4865:(e,t,a)=>{a.d(t,{A:()=>m});var s=a(96540),n=a(18215),l=a(23104),r=a(47751),i=a(92303);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=a(74848);function d(e){let{className:t,block:a,selectedValue:s,selectValue:r,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),h=e=>{const t=e.currentTarget,a=d.indexOf(t),n=i[a].value;n!==s&&(u(t),r(n))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:m,onClick:h,...l,className:(0,n.A)("tabs__item",o.tabItem,l?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function u(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function h(e){const t=(0,r.u)(e);return(0,c.jsxs)("div",{className:(0,n.A)("tabs-container",o.tabList),children:[(0,c.jsx)(d,{...t,...e}),(0,c.jsx)(u,{...t,...e})]})}function m(e){const t=(0,i.default)();return(0,c.jsx)(h,{...e,children:(0,r.v)(e.children)},String(t))}}}]);