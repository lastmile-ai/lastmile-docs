// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "LastMile AI Platform",
  tagline:
    "Train and Deploy fine-tuned Evaluator Models to Evaluate, Test, and Guard your LLM applications.",
  favicon: "img/lm_favicon.png",

  // Set the production url of your site here
  url: "https://docs.lastmileai.dev",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lastmile-ai", // Usually your GitHub org/user name.
  projectName: "lastmile-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
        gtag: {
          trackingID: "G-T5824TZMLB",
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // used to identify this plugin instance and its data
        docsPluginId: "classic",
        config: {
          auto_eval_api: {
            specPath: "static/open_api/2/model.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
            baseUrl: "https://lastmileai.dev",
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    languageTabs: [
      {
        highlight: "curl",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
    ],
    navbar: {
      logo: {
        alt: "LastMile AI",
        src: "img/logo[l-dark].svg",
        srcDark: "img/logo[l-light].svg",
        href: "https://docs.lastmileai.dev/",
      },
      items: [
        {
          to: "/category/api",
          label: "API Reference",
          position: "right",
        },
        {
          to: "/release-notes",
          label: "Release Notes",
          position: "right",
        },
        {
          href: "https://lastmileai.dev/blog",
          label: "Blog",
          className: "navbar-blog-link",
          position: "right",
        },
        {
          href: "https://discord.com/invite/xBhNKTetGx",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Discord Community",
        },
        {
          href: "https://lastmileai.dev/",
          position: "right",
          className: "navbar-button",
          label: "Sign In",
          "aria-label": "Sign In",
        },
      ],
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      defaultLanguage: "jsx",
      theme: require("./core/prismTheme"),
      additionalLanguages: [
        "bash",
        "json",
        "json5",
        "jsonp",
        "python",
        "java",
        "kotlin",
        "objectivec",
        "swift",
        "groovy",
        "ruby",
        "flow",
      ],
    },
    algolia: {
      appId: "52IHMS3OPW",
      apiKey: "a86a03cd0a8003f9d0fd2b978ad288a7",
      indexName: "lastmile-docs",
      contextualSearch: false,
    },
  } satisfies Preset.ThemeConfig,
};

module.exports = config;
