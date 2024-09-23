// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AutoEval",
  tagline:
    "Train and Deploy fine-tuned Evaluator Models to Evaluate, Test, and Guard your LLM applications.",
  favicon: "img/favicon-light-theme.ico",

  // Set the production url of your site here
  url: "https://docs.lastmileai.dev",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lastmile-ai", // Usually your GitHub org/user name.
  projectName: "eval", // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: "G-7WTWGRSSS8",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      footer: {
        style: "dark",
        links: [
          {
            title: "Developers",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/lastmile-ai",
              },
              {
                label: "Blog",
                href: "https://blog.lastmileai.dev",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/xBhNKTetGx",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/lastmile-ai/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/LastMile",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy",
                href: "https://lastmileai.dev/privacy",
              },
              {
                label: "Terms",
                href: "https://lastmileai.dev/terms",
              },
            ],
          },
        ],
        copyright: "Copyright © 2024 LastMile AI, Inc.",
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
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
    }),
};

module.exports = config;