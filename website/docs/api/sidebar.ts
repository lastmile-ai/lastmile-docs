import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/lastmile-ai-api-v-2",
    },
    {
      type: "category",
      label: "Model Fine Tune Worker Service",
      items: [
        {
          type: "doc",
          id: "api/execute-fine-tune-job",
          label: "Execute Fine Tune Job",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Model Service",
      items: [
        {
          type: "doc",
          id: "api/list-metric-base-models",
          label: "List Metric Bases",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-model-card",
          label: "Get Card",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Dataset Service",
      items: [
        {
          type: "doc",
          id: "api/create-dataset-file",
          label: "Create File",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/check-dataset-accessibility",
          label: "Check Accessibility",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/introspect-dataset",
          label: "Introspect",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/collect-dataset-metadata",
          label: "Collect Metadata",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/view-dataset",
          label: "View",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/define-dataset-splits",
          label: "Define Splits",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/create-pseudo-label-job",
          label: "Create Pseudo Label Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/refine-labels",
          label: "Refine Labels",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/augment-dataset",
          label: "Augment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/refine-augmented-rows",
          label: "Refine Augmented Rows",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Fine Tune Service",
      items: [
        {
          type: "doc",
          id: "api/create-fine-tune-job",
          label: "Create Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/configure-hyper-parameters",
          label: "Configure Hyper Parameters",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/run-fine-tune-job",
          label: "Run Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-job-status",
          label: "Get Job Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/view-fine-tune-results",
          label: "View Results",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Deployment Service",
      items: [
        {
          type: "doc",
          id: "api/deploy-inference-endpoint",
          label: "Deploy Inference Endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-docker-image",
          label: "Create Docker Image",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
