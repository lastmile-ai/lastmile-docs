"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[5072],{49344:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>f,default:()=>T,frontMatter:()=>y,metadata:()=>_,toc:()=>v});var i=a(74848),n=a(28453),l=a(91366),r=a.n(l),t=(a(6050),a(57742)),c=a.n(t),m=(a(67792),a(27362)),d=a.n(m),p=(a(36683),a(81124)),o=a.n(p),h=a(60674),x=a.n(h),j=a(23397),u=a.n(j),g=a(51107),N=(a(77675),a(19365));const y={id:"get",title:"Get Dataset",description:"Retrieve a Dataset.",sidebar_label:"Get Dataset",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVt1zGjcQ/1c0egbD4DZu/EYcp6XTNBkg04cMkxF3C8i5ky7Sng1h+N+7Kx3cccZx3CQz6YOxbrXfH9rfVqJaenn5Xr5UqDygnHWkLcAp1NaMUnkpl0TsyBR84nTBVKKNAZ2GWxBKVHJnxOMhKZ3GDanbyhegHLhhiSv6nO1IrYNPJXh8YVPi2MrEGgSDfFRFkekkmOzdeLawlT5ZQa74hBozIKO/A1bGxlETmcRNwVd2fgMJfxeOnUcNniV12pSvhCmox+RuVVZCEI1snqI1S7nbxSC0g5RTFtlmbTJZJVqk+sIaH5UO+n3+d5zISZkk4P2izMQh6+TON+Um2nw0yLQq+P0M/Sx5pTw4UAjpEO8LdeTCulzRDUcCXdQ5SBIpi/SpIkblJ7xq9/wfZa5MlxxK1TwDwUKC9Alcgahy2RF6IawBAWvt0Z+x8iMlT7TRuBR28Zgle2fAvfPgRkflqSjfvTamzMf2zjdENDXtEhypzrXReZnLy+7zweD8/GLQP3/226+/XFw86/f7dK3W8frEbdR8ZbMfoZmEUatMfw7zNEGFpT8Rc5vx2jnrTvJlag4ZnR9S1S7wlEroA+++oBl1okexBCqeykThoUxtd69X3Nh5u8vYbmKzMjdNg8o5tSF7GiH3J8bzKkiMzML+t/F+pTP4/464Nimsv3dDtYs7YiP7usYKiTuNK22a5RMLymQY2IxqRTX/+6ueH+6cSuD47YmG4lsTVTyWfM1lrPPeTOg+U8fOzdrvWPCm6kFR0JqjZSWqMKuGbrRN5ar2dQc/xaPmu1Y/O/Uz8cBY10My+8He7+lh69NdDriyDJ0KG0BKoRgEyZ4qdG/QUyXaD0AD0KvkehFhUYC34BiLzWooNeFNHyerCagOFV4hFiwb2Oh7HpiIEg+v9sPw5z/T4DYjiHGNw67XKi8yqIe+Gt9m52h+MhrvwV/K42vOy3AkxteTqRi+Hd0HiNWF8KVbqKTu1oN0QZnmWWXgyHFHucFZnxuZE0ebkM3G5cwAR9TwpLVUD3DpAWBaJQthjT2yq014RVzGsrE47wlnaeIc0N+hQGzoYHIZsfGKS0rs2+2cLt65bLdjMmXUbWLpbpXTvL0D7CUBWuZUEYbEH4FY5FV0tjtlpzqHjN/DebvOXmJIGLHAL/LOGl339s1kyh1Q4ezcpizj1B0R+fdS8lCF5IXGCrQtrTKzLNWSeaNOLr46brdWe4Wo9vvHbBoeUnoCx9R+BEMp6lShIH+Tu6T8X9IjPj8=",sidebar_class_name:"post api-method",info_path:"api/lastmile-ai-rest-api",custom_edit_url:null},f=void 0,_={id:"api/get",title:"Get Dataset",description:"Retrieve a Dataset.",source:"@site/docs/api/get.api.mdx",sourceDirName:"api",slug:"/api/get",permalink:"/api/get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get",title:"Get Dataset",description:"Retrieve a Dataset.",sidebar_label:"Get Dataset",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVt1zGjcQ/1c0egbD4DZu/EYcp6XTNBkg04cMkxF3C8i5ky7Sng1h+N+7Kx3cccZx3CQz6YOxbrXfH9rfVqJaenn5Xr5UqDygnHWkLcAp1NaMUnkpl0TsyBR84nTBVKKNAZ2GWxBKVHJnxOMhKZ3GDanbyhegHLhhiSv6nO1IrYNPJXh8YVPi2MrEGgSDfFRFkekkmOzdeLawlT5ZQa74hBozIKO/A1bGxlETmcRNwVd2fgMJfxeOnUcNniV12pSvhCmox+RuVVZCEI1snqI1S7nbxSC0g5RTFtlmbTJZJVqk+sIaH5UO+n3+d5zISZkk4P2izMQh6+TON+Um2nw0yLQq+P0M/Sx5pTw4UAjpEO8LdeTCulzRDUcCXdQ5SBIpi/SpIkblJ7xq9/wfZa5MlxxK1TwDwUKC9Alcgahy2RF6IawBAWvt0Z+x8iMlT7TRuBR28Zgle2fAvfPgRkflqSjfvTamzMf2zjdENDXtEhypzrXReZnLy+7zweD8/GLQP3/226+/XFw86/f7dK3W8frEbdR8ZbMfoZmEUatMfw7zNEGFpT8Rc5vx2jnrTvJlag4ZnR9S1S7wlEroA+++oBl1okexBCqeykThoUxtd69X3Nh5u8vYbmKzMjdNg8o5tSF7GiH3J8bzKkiMzML+t/F+pTP4/464Nimsv3dDtYs7YiP7usYKiTuNK22a5RMLymQY2IxqRTX/+6ueH+6cSuD47YmG4lsTVTyWfM1lrPPeTOg+U8fOzdrvWPCm6kFR0JqjZSWqMKuGbrRN5ar2dQc/xaPmu1Y/O/Uz8cBY10My+8He7+lh69NdDriyDJ0KG0BKoRgEyZ4qdG/QUyXaD0AD0KvkehFhUYC34BiLzWooNeFNHyerCagOFV4hFiwb2Oh7HpiIEg+v9sPw5z/T4DYjiHGNw67XKi8yqIe+Gt9m52h+MhrvwV/K42vOy3AkxteTqRi+Hd0HiNWF8KVbqKTu1oN0QZnmWWXgyHFHucFZnxuZE0ebkM3G5cwAR9TwpLVUD3DpAWBaJQthjT2yq014RVzGsrE47wlnaeIc0N+hQGzoYHIZsfGKS0rs2+2cLt65bLdjMmXUbWLpbpXTvL0D7CUBWuZUEYbEH4FY5FV0tjtlpzqHjN/DebvOXmJIGLHAL/LOGl339s1kyh1Q4ezcpizj1B0R+fdS8lCF5IXGCrQtrTKzLNWSeaNOLr46brdWe4Wo9vvHbBoeUnoCx9R+BEMp6lShIH+Tu6T8X9IjPj8=",sidebar_class_name:"post api-method",info_path:"api/lastmile-ai-rest-api",custom_edit_url:null}},b={},v=[];function q(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get Dataset"}),"\n",(0,i.jsx)(c(),{method:"post",path:"/api/2/auto_eval/dataset/get",context:"endpoint"}),"\n",(0,i.jsx)(s.p,{children:"Retrieve a Dataset."}),"\n",(0,i.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"id"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(N.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Successful operation"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"dataset"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"The columns present in the latest DatasetFile for this dataset"})}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"id"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Human-readable name for the dataset, if one exists."}}),(0,i.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Human-readable description of the dataset, if one exists."}}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"ownerUserId"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"numRows",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= -9223372036854776000` and `<= 9223372036854776000`",schema:{type:"integer",minimum:-0x8000000000000000,maximum:0x8000000000000000}}),(0,i.jsx)(x(),{collapsible:!1,name:"numCols",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= -9223372036854776000` and `<= 9223372036854776000`",schema:{type:"integer",minimum:-0x8000000000000000,maximum:0x8000000000000000}}),(0,i.jsx)(x(),{collapsible:!1,name:"initializationStatus",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"initializationError",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"labelingStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The status of the latest general pseudo-labeling job for the dataset"}}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"columns"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"The columns present in the latest DatasetFile for this dataset"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"id"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"index",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= -9223372036854776000` and `<= 9223372036854776000`",schema:{type:"integer",minimum:-0x8000000000000000,maximum:0x8000000000000000,description:"Index of the column within the dataset file."}}),(0,i.jsx)(x(),{collapsible:!1,name:"literalName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The literal name for the column."}}),(0,i.jsx)(x(),{collapsible:!1,name:"dtype",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})})})]})}),(0,i.jsx)(N.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(o(),{responseExample:'{\n  "dataset": {\n    "id": {\n      "value": "string"\n    },\n    "createdAt": "2024-07-29T15:51:28.071Z",\n    "updatedAt": "2024-07-29T15:51:28.071Z",\n    "name": "string",\n    "description": "string",\n    "ownerUserId": {\n      "value": "string"\n    },\n    "numRows": 0,\n    "numCols": 0,\n    "initializationStatus": "string",\n    "initializationError": "string",\n    "labelingStatus": "string",\n    "columns": [\n      {\n        "id": {\n          "value": "string"\n        },\n        "createdAt": "2024-07-29T15:51:28.071Z",\n        "updatedAt": "2024-07-29T15:51:28.071Z",\n        "index": 0,\n        "literalName": "string",\n        "dtype": "string"\n      }\n    ]\n  }\n}',language:"json"})})]})})})})]})})})})]})}function T(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);