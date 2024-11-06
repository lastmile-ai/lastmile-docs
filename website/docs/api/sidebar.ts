import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/lastmile-ai-rest-api",
    },
    {
      type: "category",
      label: "Dataset",
      items: [
        {
          type: "doc",
          id: "api/dataset-create",
          label: "Create Dataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/dataset-upload-file",
          label: "Upload Dataset File",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/dataset-finalize-single-file-upload",
          label: "Finalize Single Dataset File Upload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/dataset-get",
          label: "Get Dataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/dataset-get-download-url",
          label: "Get Dataset Download URL",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/dataset-get-view",
          label: "Get Dataset View",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/dataset-list",
          label: "List Datasets",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/dataset-refine-labels",
          label: "Refine Labels",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Evaluation",
      items: [
        {
          type: "doc",
          id: "api/evaluate",
          label: "Evaluate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/evaluate-dataset",
          label: "Evaluate Dataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-metrics",
          label: "List Metrics",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Fine-tune Job",
      items: [
        {
          type: "doc",
          id: "api/fine-tune-create",
          label: "Create Fine Tune Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/fine-tune-submit",
          label: "Submit Fine Tune Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/fine-tune-get-status",
          label: "Get Fine-tune Job Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/fine-tune-list",
          label: "List Fine-tune Jobs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/fine-tune-list-base-models",
          label: "List Base Models",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "LLM Judge Labeling",
      items: [
        {
          type: "doc",
          id: "api/llm-judge-create",
          label: "Create LLM Judge labeling Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/llm-judge-submit",
          label: "Submit LLM Judge labeling Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/llm-judge-get-status",
          label: "Get LLM Judge labeling Job Status",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
