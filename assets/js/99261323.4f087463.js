"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[9420],{38699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>i});var n=a(74848),r=a(28453);a(4865),a(19365),a(79402);const u={id:"multi-agent-evaluation"},l="Multi-agent evaluation",o={id:"guides/multi-agent-evaluation",title:"Multi-agent evaluation",description:"",source:"@site/docs/guides/multi-agent-evaluation.mdx",sourceDirName:"guides",slug:"/guides/multi-agent-evaluation",permalink:"/guides/multi-agent-evaluation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"multi-agent-evaluation"},sidebar:"sidebar",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"RAG Evaluation",permalink:"/guides/rag-evaluation"}},s={},i=[];function c(e){const t={h1:"h1",header:"header",...(0,r.R)(),...e.components};return(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"multi-agent-evaluation",children:"Multi-agent evaluation"})})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},79402:(e,t,a)=>{var n=a(38193);!!n.default.canUseDOM&&navigator.platform.startsWith("Mac"),!!n.default.canUseDOM&&navigator.platform.startsWith("Win")},19365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var u=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},4865:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(96540),r=a(18215),u=a(23104),l=a(47751),o=a(92303);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var i=a(74848);function c(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.a_)(),f=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==n&&(d(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:u}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:m,onClick:f,...u,className:(0,r.A)("tabs__item",s.tabItem,u?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function d(e){let{lazy:t,children:a,selectedValue:u}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===u));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==u})))})}function f(e){const t=(0,l.u)(e);return(0,i.jsxs)("div",{className:(0,r.A)("tabs-container",s.tabList),children:[(0,i.jsx)(c,{...t,...e}),(0,i.jsx)(d,{...t,...e})]})}function m(e){const t=(0,o.default)();return(0,i.jsx)(f,{...e,children:(0,l.v)(e.children)},String(t))}},47751:(e,t,a)=>{a.d(t,{u:()=>m,v:()=>i});var n=a(96540),r=a(56347),u=a(205),l=a(57485),o=a(31682),s=a(70679);function i(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return i(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const u=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(u.location.search);t.set(o,e),u.replace({...u.location,search:t.toString()})}),[o,u])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=c(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[m,p]=f({queryString:a,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,u]=(0,s.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&u.set(e)}),[a,u])]}({groupId:r}),v=(()=>{const e=m??h;return d({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,l]),tabValues:l}}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var n=a(96540);const r={},u=n.createContext(r);function l(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);