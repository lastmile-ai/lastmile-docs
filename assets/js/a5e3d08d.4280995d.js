"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[4977],{51167:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var s=n(74848),t=n(28453),a=(n(6050),n(60674)),o=n.n(a),r=(n(23397),n(51107));n(19365);const l={id:"finetunejobconfig",title:"FineTuneJobConfig",description:"",sidebar_label:"FineTuneJobConfig",hide_title:!0,schema:!0,custom_edit_url:null},u=void 0,c={id:"api/schemas/finetunejobconfig",title:"FineTuneJobConfig",description:"",source:"@site/docs/api/schemas/finetunejobconfig.schema.mdx",sourceDirName:"api/schemas",slug:"/api/schemas/finetunejobconfig",permalink:"/api/schemas/finetunejobconfig",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"finetunejobconfig",title:"FineTuneJobConfig",description:"",sidebar_label:"FineTuneJobConfig",hide_title:!0,schema:!0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"FineTuneJob",permalink:"/api/schemas/finetunejob"},next:{title:"FineTuneJobResult",permalink:"/api/schemas/finetunejobresult"}},d={},m=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"FineTuneJobConfig"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)(o(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional name for the job."}}),(0,s.jsx)(o(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional description for the job."}}),(0,s.jsx)(o(),{collapsible:!1,name:"baselineModelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID for the model used as the starting point for training."}}),(0,s.jsx)(o(),{collapsible:!1,name:"trainDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for training, with splits baked in or to be\n derived dynamically"}}),(0,s.jsx)(o(),{collapsible:!1,name:"testDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for an unbiased evaluation of the model"}}),(0,s.jsx)(o(),{collapsible:!1,name:"selectedColumns",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",description:"Set of columns to be used in fine-tuning.\n Supported columns: input, output, ground_truth\n For example, a task similar to summarization might need output and\n ground_truth."}}})]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p()}}}]);