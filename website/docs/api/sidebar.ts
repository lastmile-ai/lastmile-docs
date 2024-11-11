import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/lastmile-ai-api-v-2",
    },
    {
      type: "category",
      label: "Dataset",
      items: [
        {
          type: "doc",
          id: "api/create-dataset",
          label: "Create Dataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upload-dataset-file",
          label: "Upload Dataset File",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/finalize-single-dataset-file-upload",
          label: "Finalize Single Dataset File Upload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-dataset",
          label: "Get Dataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-dataset-download-url",
          label: "Get Dataset Download URL",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-dataset-view",
          label: "Get Dataset View",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-datasets",
          label: "List Datasets",
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
        {
          type: "doc",
          id: "api/get-metric",
          label: "Get Metric",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Fine Tune Job",
      items: [
        {
          type: "doc",
          id: "api/create-fine-tune-job",
          label: "Create Fine Tune Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/submit-fine-tune-job",
          label: "Submit Fine Tune Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-fine-tune-job-status",
          label: "Get Fine Tune Job Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-fine-tune-jobs",
          label: "List Fine Tune Jobs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-base-models",
          label: "List Base Models",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Pseudo Label Job",
      items: [
        {
          type: "doc",
          id: "api/create-pseudo-label-job",
          label: "Create Pseudo Label Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/submit-pseudo-label-job",
          label: "Submit Pseudo Label Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-pseudo-label-job-status",
          label: "Get Pseudo Label Job Status",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
