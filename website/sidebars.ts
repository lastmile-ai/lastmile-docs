/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sidebar: [
    // "intro",
    "app_home", // TODO: saqadri - remove from nav
    "quickstart",

    {
      type: "category",
      label: "AutoEval Developer Platform",
      link: {
        type: "doc",
        id: "platform",
      },
      items: [
        "overview",
        "data-generation",
        {
          type: "category",
          label: "al-BERTa",
          link: {
            type: "doc",
            id: "models",
          },
          items: ["alberta", "alberta-8k"],
          collapsible: true,
          collapsed: true,
        },
        "fine-tuning",
        "active-learning",
        "metrics",
        "deployment",
      ],
      collapsible: true,
      collapsed: true,
    },

    "sdk",
    {
      type: "category",
      label: "API Specs",
      link: {
        type: "generated-index", // This causes page to display a grid-component of the items
        title: "Overview",
        description: "Some mock description text here",
      },
      items: require("./docs/api/sidebar.js"),
      collapsible: true,
      collapsed: true,
    },
    {
      type: "category",
      label: "Other Resources",
      items: [
        {
          type: "link",
          label: "Cookbook",
          href: "https://github.com/lastmile-ai/eval-cookbook",
        },
        "workbooks",
        {
          type: "link",
          label: "AIConfig",
          href: "https://aiconfig.lastmileai.dev/docs/basics",
        },
      ],
      collapsible: true,
      collapsed: true,
    },
  ],
};

module.exports = sidebars;
