"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[9777],{57811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(74848),r=a(28453);a(4865),a(19365),a(79402);const l={title:"LLM Judge Labeling"},i="Synthetic Label Generation",s={id:"autoeval/labeling",title:"LLM Judge Labeling",description:"For use cases that have few to no labels or ground truth data, the AutoEval platform provides the capability to synthetically generate labels. Synthetic Data Generation involves using a model to create data that matches what a realistic response would be and matches the underlying distribution of the data. The platform does its initial labeling through a large-language model (LLM) and over time aligns the performance of the synthetic labels to the ground truth data.",source:"@site/docs/autoeval/labeling.mdx",sourceDirName:"autoeval",slug:"/autoeval/labeling",permalink:"/autoeval/labeling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LLM Judge Labeling"},sidebar:"sidebar",previous:{title:"Create Synthetic Datasets",permalink:"/autoeval/datasets/synthetic-datasets"},next:{title:"Active Learning",permalink:"/autoeval/labeling/active-learning"}},o={},u=[{value:"Generating Synthetic Data:",id:"generating-synthetic-data",level:3}];function c(e){const t={admonition:"admonition",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"synthetic-label-generation",children:"Synthetic Label Generation"})}),"\n",(0,n.jsxs)(t.p,{children:["For use cases that have few to no labels or ground truth data, the AutoEval platform provides the capability to synthetically generate labels. ",(0,n.jsx)(t.strong,{children:"Synthetic Data Generation"})," involves using a model to create data that matches what a realistic response would be and matches the underlying distribution of the data. The platform does its initial labeling through a large-language model (LLM) and over time aligns the performance of the synthetic labels to the ground truth data."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://andrew-dev-s3.s3.amazonaws.com/synth-data-diagram.png",alt:"synthetic-data#diagram"})}),"\n",(0,n.jsx)(t.h3,{id:"generating-synthetic-data",children:"Generating Synthetic Data:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In the left-hand navigation, head to ",(0,n.jsx)(t.strong,{children:"Dataset Library"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Select the dataset that you want to synthetically add labels for."}),"\n",(0,n.jsxs)(t.li,{children:["In the dataset view, click on ",(0,n.jsx)(t.strong,{children:"Generate Labels"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Within the Generate Synthetic Labels widget, select the columns to be used to generate your labels. We recommend choosing the columns that provide predictive information to the labels you are generating."}),"\n",(0,n.jsxs)(t.li,{children:["Provide a few examples to be used to refine the quality of the labels you are generating. We recommend providing anywhere between 5 to 20 examples.","\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"We recommend having a diverse set of examples for your examples for optimal performance."})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Enter your instructions in the ",(0,n.jsx)(t.strong,{children:"General Instructions"})," to guide how the LLM should create your labels.","\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"We provide templates if you would like an example on what instructions work well."})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Start Labeling"})," and we'll generate 16 synthetic labels for you to review and edit."]}),"\n",(0,n.jsxs)(t.li,{children:["Within the next page of the labeling flow, carefully review and either confirm or update the label (1 or 0).","\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The meaning of the label will depend on your prompt for your synthetic data generation"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["After you complete verifying the 16 synthetic labels, you can do a final review in the ",(0,n.jsx)(t.strong,{children:"Review Labels"})," widget."]}),"\n",(0,n.jsxs)(t.li,{children:["Clikc ",(0,n.jsx)(t.strong,{children:"Submit"})," to start generating synthetic labels for the rest of your dataset!"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://andrew-dev-s3.s3.amazonaws.com/temp-console-screenshot.png",alt:"synthetic-data#diagram"})}),"\n",(0,n.jsx)(t.h1,{id:"define-llm-judge-criteria",children:"Define LLM Judge Criteria"}),"\n",(0,n.jsx)(t.h1,{id:"active-labeling",children:"Active Labeling"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},79402:(e,t,a)=>{var n=a(38193);!!n.default.canUseDOM&&navigator.platform.startsWith("Mac"),!!n.default.canUseDOM&&navigator.platform.startsWith("Win")},19365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},4865:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(96540),r=a(18215),l=a(23104),i=a(47751),s=a(92303);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=a(74848);function c(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==n&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,u.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:m,onClick:h,...l,className:(0,r.A)("tabs__item",o.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function d(e){let{lazy:t,children:a,selectedValue:l}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function h(e){const t=(0,i.u)(e);return(0,u.jsxs)("div",{className:(0,r.A)("tabs-container",o.tabList),children:[(0,u.jsx)(c,{...t,...e}),(0,u.jsx)(d,{...t,...e})]})}function m(e){const t=(0,s.default)();return(0,u.jsx)(h,{...e,children:(0,i.v)(e.children)},String(t))}},47751:(e,t,a)=>{a.d(t,{u:()=>m,v:()=>u});var n=a(96540),r=a(56347),l=a(205),i=a(57485),s=a(31682),o=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,s.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const l=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=c(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[m,g]=h({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=m??p;return d({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),g(e),f(e)}),[g,f,i]),tabValues:i}}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(96540);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);