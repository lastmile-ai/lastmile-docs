"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[2307],{32450:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var t=i(74848),n=i(28453),a=(i(6050),i(60674)),r=i.n(a),o=(i(23397),i(51107));i(19365);const l={id:"submitfinetunejobrequest",title:"SubmitFineTuneJobRequest",description:"",sidebar_label:"SubmitFineTuneJobRequest",hide_title:!0,schema:!0,custom_edit_url:null},u=void 0,m={id:"api/schemas/submitfinetunejobrequest",title:"SubmitFineTuneJobRequest",description:"",source:"@site/docs/api/schemas/submitfinetunejobrequest.schema.mdx",sourceDirName:"api/schemas",slug:"/api/schemas/submitfinetunejobrequest",permalink:"/api/schemas/submitfinetunejobrequest",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"submitfinetunejobrequest",title:"SubmitFineTuneJobRequest",description:"",sidebar_label:"SubmitFineTuneJobRequest",hide_title:!0,schema:!0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"CreateFineTuneJobResponse",permalink:"/api/schemas/createfinetunejobresponse"},next:{title:"SubmitFineTuneJobResponse",permalink:"/api/schemas/submitfinetunejobresponse"}},c={},d=[];function p(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{as:"h1",className:"openapi__heading",children:"SubmitFineTuneJobRequest"}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsx)(r(),{collapsible:!1,name:"jobId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(r(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(s.p,{children:"fineTuneJobConfig"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(s.p,{children:"object"})}),(0,t.jsx)("span",{className:"openapi-schema__divider"}),(0,t.jsx)("span",{className:"openapi-schema__required",children:(0,t.jsx)(s.p,{children:"required"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"The fine-tune job configuration."})}),(0,t.jsx)(r(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional name for the job."}}),(0,t.jsx)(r(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional description for the job."}}),(0,t.jsx)(r(),{collapsible:!1,name:"baselineModelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID for the model used as the starting point for training."}}),(0,t.jsx)(r(),{collapsible:!1,name:"trainDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for training, with splits baked in or to be\n derived dynamically"}}),(0,t.jsx)(r(),{collapsible:!1,name:"testDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for an unbiased evaluation of the model"}}),(0,t.jsx)(r(),{collapsible:!1,name:"selectedColumns",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",description:"Set of columns to be used in fine-tuning.\n Supported columns: input, output, ground_truth\n For example, a task similar to summarization might need output and\n ground_truth."}}})]})]})})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);