import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/lastmile-ai-api-v-2",
    },
    {
      type: "category",
      label: "Fine Tuning",
      items: [
        {
          type: "doc",
          id: "api/execute-fine-tune-job",
          label: "Execute Fine-Tune Job",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Model Metrics",
      items: [
        {
          type: "doc",
          id: "api/list-metric-bases",
          label: "List Metric Bases",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
