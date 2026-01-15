# OpenRemote Handbook

[![GitHub Actions Status](https://github.com/openremote/documentation/actions/workflows/ci_cd.yml/badge.svg?branch=main)](https://github.com/openremote/handbook/actions/workflows/ci_cd.yml)

This repository contains the OpenRemote handbook hosted on https://handbook.openremote.io/ as Markdown files in the [docs directory](docs).

The documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
$ yarn
```

### Local Development

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

When the static content has been generated it can be tested using:

```shell
$ yarn serve
```

### Deployment

The deployment is done automatically by a GitHub Actions workflow when commits are pushed to the "main" branch.

It can also be done manually using the "deploy" command.

Using SSH:

```shell
$ USE_SSH=true yarn deploy
```

Not using SSH:

```shell
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
