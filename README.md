# Ed's Web App Template

This is a starter template for my web-based apps.

[![release-badge]][release] [![license-badge]][license]

## Installation

Use [Yarn](https://yarnpkg.com/) to install the required dependencies.

```shell
yarn install
```

## Usage

The following commands are available from the project folder.

### Live Development Server

```shell
yarn serve:live
```

Starts the development server, which will automatically rebuild your app as you change files and supports hot module replacement for fast development.

Go to http://localhost:2020/ to interact with the app.

### Build For Production

```shell
yarn build
```

Optimizes the app for production and outputs the result to the /public folder

### Simple Server

```shell
yarn serve
```

Starts a basic server using the output of the build command.

Visit http://localhost:2020/ to interact with the app.

## Testing

### Run All tests

```shell
yarn build
yarn test
```

Build the app, start the server and run all the tests.

### Live Testing

```shell
yarn test:live
```

Opens the [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html) in interactive mode.

## Live development

```shell
yarn develop
```

Starts the live reload development server and the [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html). From here you can add and modify tests and app source code without manual refreshes.

## Changes

Changes are noted in human-readable form in the [Changelog][changelog].

## Contributing

As this template is intend for my personal use, and is just getting started, I am not currently accepting contributions. However, I may be open to contributions in the future.

## License

This template is licensed under the terms of the [MIT license][license].

## README Templates

Refer to [Make a README](https://www.makeareadme.com/) and/or [The Documentation Compendium](https://github.com/kylelobo/The-Documentation-Compendium/tree/master/en/README_TEMPLATES) for suggestions how to craft a quality README.

[license]: ./LICENSE (License)
[changelog]: ./CHANGELOG.md (Changelog)
[license-badge]: https://img.shields.io/github/license/EdRands/WebAppTemplate?style=flat-square (License badge)
[release]: https://github.com/EdRands/WebAppTemplate/releases (Releases)
[release-badge]: https://img.shields.io/github/v/release/EdRands/WebAppTemplate?style=flat-square (Latest release badge)
