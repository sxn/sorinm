[![Netlify Status](https://api.netlify.com/api/v1/badges/5a9936cd-e6c5-4e57-a08c-296137130898/deploy-status)](https://app.netlify.com/sites/sorinmuntean/deploys)

The source code for [my personal website](https://sorinmuntean.ro).

## Requirements

- [Racket] since this is a Racket application.
- (optionally) [node](https://nodejs.org/en/) and [nvm](https://github.com/nvm-sh/nvm) to use [Prettier](https://prettier.io) or [TypeScript](https://www.typescriptlang.org/) to check your JS.

## First-time Setup

```sh
$ nvm use && npm install
$ raco pkg install sorinmuntean-ro/ # install and build the application and its deps
```

## Running the app locally

```sh
$ ./start
```

## Deploying the app

```sh
$ ./build
```

Then commit the changes and push them to the `pages` branch.
