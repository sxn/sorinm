The source code for [my personal website](https://sorinmuntean.ro).

## Setup

### Requirements

- You need [Racket] since this is a Racket application.
- You need [node] and [nvm] to build the assets.

### First-time Setup

    $ nvm use && npm install && npm run build
    $ raco pkg install chief
    $ raco pkg install sorinmuntean-ro/ # install and build the application and its deps

## Running the app locally

    $ nvm use
    $ raco chief start

## Deploying the app

    $ raco pollen render sorinmuntean-ro/
    $ raco pollen publish sorinmuntean-ro/ public/

Then commit the changes and push them to the `pages` branch.
