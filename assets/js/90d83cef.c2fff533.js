"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[9231],{51408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(74848),r=a(28453);a(4865),a(19365),a(79402),a(96540);const s={releaseNoteContainer:"releaseNoteContainer_sUjk",releaseDate:"releaseDate_Uxzr",releaseContent:"releaseContent_k9jH",separator:"separator_fWDj"};function l(e){let{date:t,title:a,link:r,children:l}=e;return(0,n.jsxs)("div",{className:s.releaseNoteContainer,children:[(0,n.jsx)("div",{className:s.releaseDate,children:t}),(0,n.jsxs)("div",{className:s.releaseContent,children:[(0,n.jsx)("a",{href:r,children:(0,n.jsx)("h1",{children:a})}),l]})]})}const i={id:"release-notes",title:"Release Notes",hide_title:!0,hide_table_of_contents:!0},o=void 0,u={id:"release-notes",title:"Release Notes",description:"Release Notes",source:"@site/docs/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/release-notes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"release-notes",title:"Release Notes",hide_title:!0,hide_table_of_contents:!0}},c={},d=[{value:"Release Notes",id:"release-notes",level:2},{value:"Features and Capabilities",id:"features-and-capabilities",level:2}];function h(e){const t={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"release-notes",children:"Release Notes"}),"\n",(0,n.jsx)(t.p,{children:"Welcome to the release notes section. Here you\u2019ll find an executive summary of recent updates across the entire LastMile platform. Click on a release to view the full details."}),"\n",(0,n.jsxs)(l,{date:"Nov 7, 2024",title:"Introducing LastMile AutoEval",link:"/release-notes/2024-11-07-release",children:[(0,n.jsx)(t.p,{children:"We are excited to introduce AutoEval, the first AI evaluator model fine-tuning service."}),(0,n.jsx)(t.h2,{id:"features-and-capabilities",children:"Features and Capabilities"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Out-of-the-box evaluation metrics"}),": Key metrics for common AI application types, such as ",(0,n.jsx)(t.em,{children:"RAG"})," and ",(0,n.jsx)(t.em,{children:"multi-agent systems"}),", are available for immediate use."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"alBERTa evaluator models"}),": 400M parameter NLI entailment models that are optimized for evaluation tasks like faithfulness, relevance and other key metrics."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LLM Judge labeling service"}),": Label your LLM application traces using LLM Judge evaluation criteria, and refine the labels with human-in-the-loop active labeling."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fine-tuning service"}),": Design your own evaluation metric using the fine-tuning service. This is the first-of-its-kind service which you can use to develop as many evaluators as you need to measure AI application performance across a fully customized criteria."]}),"\n"]})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},79402:(e,t,a)=>{var n=a(38193);!!n.default.canUseDOM&&navigator.platform.startsWith("Mac"),!!n.default.canUseDOM&&navigator.platform.startsWith("Win")},19365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},4865:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(96540),r=a(18215),s=a(23104),l=a(47751),i=a(92303);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=a(74848);function c(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==n&&(d(t),l(r))},f=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,u.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:f,onClick:h,...s,className:(0,r.A)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function d(e){let{lazy:t,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function h(e){const t=(0,l.u)(e);return(0,u.jsxs)("div",{className:(0,r.A)("tabs-container",o.tabList),children:[(0,u.jsx)(c,{...t,...e}),(0,u.jsx)(d,{...t,...e})]})}function f(e){const t=(0,i.default)();return(0,u.jsx)(h,{...e,children:(0,l.v)(e.children)},String(t))}},47751:(e,t,a)=>{a.d(t,{u:()=>f,v:()=>u});var n=a(96540),r=a(56347),s=a(205),l=a(57485),i=a(31682),o=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const s=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=c(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[f,m]=h({queryString:a,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=f??p;return d({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),m(e),v(e)}),[m,v,l]),tabValues:l}}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var n=a(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);