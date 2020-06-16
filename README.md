The source code for [my personal website](https://sorinmuntean.ro).

## Requirements

- [Racket] since this is a Racket application.
- (optionally) [node] and [nvm] if you need to use [Prettier](https://prettier.io) or [TypeScript](https://www.typescriptlang.org/) to check your JS.

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
