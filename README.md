# lastmile-docs

Documentation website for LastMile AI's products

[![Deploy LastMile AI Docs](https://github.com/lastmile-ai/lastmile-docs/actions/workflows/deploy-docs.yml/badge.svg?branch=main)](https://github.com/lastmile-ai/lastmile-docs/actions/workflows/deploy-docs.yml)

## About LastMile AI

[LastMile AI](https://lastmileai.dev) is a company that helps software developers build, test and deploy robust generative AI applications. Specifically, the company provides models and tools for developers to evaluate the performance of AI applications.

## Overview

This repository contains the documentation for LastMile AI's products. The autoeval is built with [Docusaurus](https://docusaurus.io)

## Contributing

We welcome contributions from the community, especially fixes and improvements to the documentation.

### API docs generation

To regen the SDK, run the following:

```
yarn docusaurus gen-api-docs all
```

### File an issue

If you find a problem with the documentation, please file an issue in this repository.

### Submit a pull request

Please see the [Docusaurus](https://docusaurus.io) documentation for more information on contributing to this project.

At a glance, the steps to contribute are:

1. Clone the repository and create a new branch (or fork the repository)
2. Navigate to the `website` folder
3. Make your changes
   - Install packages with `yarn`
   - Run the development server with `yarn start`
   - Validate the changes with `yarn build`
4. Submit a pull request to the `main` branch
