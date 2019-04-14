# Vue Auth0 plugin
Vue CLI 3 Plugin for adding the files required for setting up Auth0 authentication.

[![Build Status](https://travis-ci.org/kaizendorks/vue-cli-plugin-vuedock.svg?branch=master)](https://travis-ci.org/kaizendorks/vue-cli-plugin-vuedock)

## Index

- [Installation](#installation)
    - [Options](#options)
- [Usage](#usage)
- [Contributing](#contributing)
    - [Development](#development)
    - [CI](#ci)

## Installation

Run the following command from your project's root folder: `vue add auth0`

Files Generated:

Files Updated:

### Options

Option 1

Option 2

## Usage

## Contributing

### Development

``` bash
# Run a vue inside the dev container
docker run --rm -it \
  -v "$(pwd)":/auth0 \
kaizendorks/vue:3 sh

# Create sample app
vue create app

# Change dir to project dir
cd app

# Install plugin
npm install --save-dev file:/auth0

# Run plugin
vue invoke vue-cli-plugin-auth0
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
