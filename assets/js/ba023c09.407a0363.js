"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[5249],{15753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(74848),i=n(28453);n(4865),n(19365),n(79402);const s={id:"autoeval-intro",title:"Introduction"},r=void 0,o={id:"autoeval/autoeval-intro",title:"Introduction",description:"Testing is the most important step in both LLM application development and monitoring it's behavior in production. In Machine Learning and Artificial Intelligence, testing is referred to by different names depending on when and how you test. When testing an LLM application during development, the process is often referred to as Evaluation. When testing an LLM application's behavior during production (typically for an real-time/online use case), the testing is referred to as Guardrails. We'll cover both of these in more depth.",source:"@site/docs/autoeval/introduction.mdx",sourceDirName:"autoeval",slug:"/autoeval/autoeval-intro",permalink:"/autoeval/autoeval-intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"autoeval-intro",title:"Introduction"},sidebar:"sidebar",previous:{title:"AutoEval Developer Platform",permalink:"/autoeval/"},next:{title:"Evaluation Metrics",permalink:"/autoeval/metrics"}},l={},c=[{value:"Evaluation",id:"evaluation",level:2},{value:"Guardrails",id:"guardrails",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Testing is the most important step in both LLM application development and monitoring it's behavior in production. In Machine Learning and Artificial Intelligence, testing is referred to by different names depending on ",(0,a.jsx)(t.em,{children:"when"})," and ",(0,a.jsx)(t.em,{children:"how"})," you test. When testing an LLM application during development, the process is often referred to as ",(0,a.jsx)(t.strong,{children:"Evaluation"}),". When testing an LLM application's behavior during production (typically for an real-time/online use case), the testing is referred to as ",(0,a.jsx)(t.strong,{children:"Guardrails"}),". We'll cover both of these in more depth."]}),"\n",(0,a.jsx)(t.h2,{id:"evaluation",children:"Evaluation"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Evaluation"})," is the testing and assessment of how well the LLM is performing for the task it was designed to solve."]}),"\n",(0,a.jsxs)(t.p,{children:["For retrieval augmented generation (RAG) chatbots, developers will evaluate ",(0,a.jsx)(t.em,{children:"how well does the chatbot answer questions"}),". Given the wide array of capabilities for LLMs, the process of evaluating it's performance has become significantly more difficult than non-LLM models of the past. ",(0,a.jsx)(t.a,{href:"https://github.com/openai/simple-evals?tab=readme-ov-file#benchmark-results",children:"OpenAI releases benchmarks (evaluations)"})," for their models and they include measuring their model's performance for ",(0,a.jsx)(t.code,{children:"question answers"}),", ",(0,a.jsx)(t.code,{children:"math"}),", ",(0,a.jsx)(t.code,{children:"reasoning"}),", ",(0,a.jsx)(t.code,{children:"multitask language understanding"}),", etc."]}),"\n",(0,a.jsxs)(t.p,{children:["Two popular approaches to evaluate these LLM applications matching their flexibility with an equally flexible evalation is ",(0,a.jsx)(t.strong,{children:"human-in-the-loop"})," and ",(0,a.jsx)(t.strong,{children:"LLM-as-a-judge"}),". Human-in-the-loop relies on subject matter experts to label and verify whether the LLM application is correct. LLM-as-a-judge uses either the same LLM or another LLM to evaluate the performance of the application. Both approaches have their advantages (flexible) and shortcomings (cost and time)."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LastMile AI"})," combines the advantages of these approaches with a few other traditional ML techniques (",(0,a.jsx)(t.strong,{children:"active learning"}),", ",(0,a.jsx)(t.strong,{children:"synthetic data generation"}),", and ",(0,a.jsx)(t.strong,{children:"fine-tuning"}),") to provide the best-in-class evaluators."]}),"\n",(0,a.jsx)(t.h2,{id:"guardrails",children:"Guardrails"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Guardrails"})," is the testing and assessment of the quality of the LLM application's results in a live or production setting."]}),"\n",(0,a.jsxs)(t.p,{children:["A general rule of thumb is ",(0,a.jsx)(t.em,{children:"Everything is harder with live data and in production"}),". Guardrails act as the quality control for an LLM returning results in real-time."]}),"\n",(0,a.jsx)(t.p,{children:"Considerations for whether a guardrail can be used for an LLM application include:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Latency"})," - can a guardrail give results in milliseconds without negatively impacting the user experience?"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Consistency"})," - is the guardrail dependable or will it give false positives or false negatives?"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Scalability"})," - can the guardrail scale for spikes in user traffic?"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LastMile AI"})," provides the only low-latency fine-tuned guardrails that can be used for production LLM applications."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},79402:(e,t,n)=>{var a=n(38193);!!a.default.canUseDOM&&navigator.platform.startsWith("Mac"),!!a.default.canUseDOM&&navigator.platform.startsWith("Win")},4865:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(96540),i=n(18215),s=n(23104),r=n(47751),o=n(92303);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=n(74848);function d(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),i=o[n].value;i!==a&&(h(t),r(i))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:p,onClick:u,...s,className:(0,i.A)("tabs__item",l.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function h(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function u(e){const t=(0,r.u)(e);return(0,c.jsxs)("div",{className:(0,i.A)("tabs-container",l.tabList),children:[(0,c.jsx)(d,{...t,...e}),(0,c.jsx)(h,{...t,...e})]})}function p(e){const t=(0,o.default)();return(0,c.jsx)(u,{...e,children:(0,r.v)(e.children)},String(t))}}}]);