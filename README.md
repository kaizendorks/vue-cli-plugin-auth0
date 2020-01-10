# Vue Auth0 plugin
Vue CLI 3 Plugin for adding the files required for setting up Auth0 authentication.

[![Build Status](https://travis-ci.org/kaizendorks/vue-cli-plugin-auth0.svg?branch=master)](https://travis-ci.org/kaizendorks/vue-cli-plugin-auth0)

## Index

- [Installation](#installation)
    - [Options](#options)
- [Usage](#usage)
- [Contributing](#contributing)
    - [Development](#development)
    - [CI](#ci)

## Pre-install

1. Configured an Auth0 client/Applications: <https://auth0.com/docs/quickstart/spa/vuejs/01-login#configure-auth0>


## Installation

If you use the vue router plugin:

Run the following command from your project's root folder: `vue add auth0`

Files Generated:

Files Updated:

### Options

Option 1 Have you configured an Auth0 client?

  Option 1.1 Auth0 client domain?

  Option 1.2 Auth0 client ID?

If not, make sure to update auth_config.json afterwards

Option 2: Use history mode for router? (Requires proper server setup for index fallback in production)

## Usage

## Contributing

### Development

``` bash
# Run a vue inside the dev container
docker run --rm -it \
  -v "$(pwd)":/auth0 \
  -p 8080:8080 \
kaizendorks/vue:4 sh

# Create sample app
vue create app

# Change dir to project dir
cd app

# Install plugin
npm install --save-dev file:/auth0

# Run plugin
vue invoke vue-cli-plugin-auth0

# Install new deps, if you get any errors try rm -rf package-lock.json
npm install

# Run app
npm run serve
```

### CI

``` bash
# Build image
docker build -t auth0 .

# Dgoss Tests (quick smoke test to check if files were generated)
docker run --rm -it \
  -v "$(pwd)/tests":/src \
  -v /var/run/docker.sock:/var/run/docker.sock \
iorubs/dgoss run auth0

# Edit tests
docker run --rm -it \
  -v "$(pwd)/tests":/src \
  -v /var/run/docker.sock:/var/run/docker.sock \
iorubs/dgoss edit auth0
```

Goss is tool for validating server’s configuration (avoid conf. drift). Dgoss is a wrapper written on top of goss for validating docker images.
https://github.com/aelsabbahy/goss/tree/master/extras/dgoss
