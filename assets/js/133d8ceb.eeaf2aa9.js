"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[4300],{43366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),a=n(28453);n(4865),n(19365),n(79402);const r={id:"active-learning"},s="Active Learning",l={id:"active-learning",title:"Active Learning",description:"Active learning is in which we use an algorithm (an LLM in this case) to interactively label the training data. You can continuously improve the active learning by providing additional samples of ground truth data.",source:"@site/docs/active-learning.md",sourceDirName:".",slug:"/active-learning",permalink:"/active-learning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"active-learning"},sidebar:"sidebar",previous:{title:"Fine-tuning AlBERTa",permalink:"/fine-tuning"},next:{title:"Metrics Overview",permalink:"/metrics"}},o={},c=[{value:"Active Learning for Datasets:",id:"active-learning-for-datasets",level:3}];function d(e){const t={admonition:"admonition",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"active-learning",children:"Active Learning"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Active learning"})," is in which we use an algorithm (an LLM in this case) to interactively label the training data. You can continuously improve the active learning by providing additional samples of ground truth data."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://andrew-dev-s3.s3.amazonaws.com/Active-Learning.png",alt:"active-learning#diagram"})}),"\n",(0,i.jsx)(t.h3,{id:"active-learning-for-datasets",children:"Active Learning for Datasets:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["In the left-hand navigation, head to ",(0,i.jsx)(t.strong,{children:"Dataset Library"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Select the dataset that you want to add labels for."}),"\n",(0,i.jsxs)(t.li,{children:["In the dataset view, click on ",(0,i.jsx)(t.strong,{children:"Generate Labels"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Within the Generate Synthetic Labels widget, select the columns to be used to generate your labels. We recommend choosing the columns that provide predictive information to the labels you are generating."}),"\n",(0,i.jsx)(t.li,{children:"Provide a few examples to be used to refine the quality of the labels you are generating. We recommend providing anywhere between 5 to 20 examples."}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"We recommend having a diverse set of examples for your examples for optimal performance."})]}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["Enter your instructions in the ",(0,i.jsx)(t.strong,{children:"General Instructions"})," to guide how the LLM should create your labels."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"We provide templates if you would like an example on what instructions work well."})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79402:(e,t,n)=>{var i=n(38193);!!i.default.canUseDOM&&navigator.platform.startsWith("Mac"),!!i.default.canUseDOM&&navigator.platform.startsWith("Win")},4865:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(96540),a=n(18215),r=n(23104),s=n(47751),l=n(92303);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=n(74848);function d(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=l[n].value;a!==i&&(h(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:m,onClick:u,...r,className:(0,a.A)("tabs__item",o.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function u(e){const t=(0,s.u)(e);return(0,c.jsxs)("div",{className:(0,a.A)("tabs-container",o.tabList),children:[(0,c.jsx)(d,{...t,...e}),(0,c.jsx)(h,{...t,...e})]})}function m(e){const t=(0,l.default)();return(0,c.jsx)(u,{...e,children:(0,s.v)(e.children)},String(t))}}}]);