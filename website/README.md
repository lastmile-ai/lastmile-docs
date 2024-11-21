# LastMile AI Platform Documentation Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. It is hosted on https://docs.lastmileai.dev

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### API docs generation

To regen the API docs, run the following:

```
yarn docusaurus gen-api-docs all
```

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
