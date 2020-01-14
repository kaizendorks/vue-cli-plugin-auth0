# Vue Auth0 plugin
> Vue CLI 4 Plugin for adding the files required for setting up Auth0 authentication.

[![Build Status](https://travis-ci.org/kaizendorks/vue-cli-plugin-auth0.svg?branch=master)](https://travis-ci.org/kaizendorks/vue-cli-plugin-auth0)

## Index

- [Installation](#installation)
    - [Options](#options)
- [Usage](#usage)
- [Contributing](#contributing)
    - [Development](#development)
    - [CI](#ci)

## Pre-install

1. Sign-up and login to you Auth0 Dashboard: <https://auth0.com/>
1. Create an Auth0 Client/Application: Dashboard > Applications > Create Application
    1. Enter the name of your application.
    1. Select `Single Page Web Applications`
    1. Press `Create`
    1. Select `Settings`
    1. Add `http://localhost:8080` to the following fields:
        * Allowed Callback URLs
        * Allowed Web Origins
        * Allowed Logout URLs
    1. Scroll down to the bottom and press `Save Changes`

1. (Optional) Setup desired connections: Dashboard > Connections > Social
	1. Connections are third party services that can be used to authenticate with, for example:
		* Google
		* GitHub
		* Facebook
    1. (WARNING) The default Google connection will let you login but won’t keep you logged in if you leave or refresh the website. this is a Auth0’s default connection and its just for testing purposes.

## Installation

* Run `vue add auth0` from your project's root folder.
* Files Generated:
    1. `auth_config.json`: Stores Auth0's domain and clientId.
    1. `src/auth/index.js`: Main Auth0 lib file containing authentication logic.
    1. `src/auth/authGuard.js`: Can be used to protect private vue-router routes.
    1. `src/views/Profile.vue`: A very simple profile component to be used with vue-router.
* Files Updated:
    1. `src/App.vue`
    1. `src/main.js`
    1. `src/router/index.js`

### Options

1. Have you configured an Auth0 client? If not, make sure to update auth_config.json afterwards
    1. Auth0 client domain? You can get this from the Application Settings page.
    1. Auth0 client ID? You can get this from the Application Settings page.

1. Would you like to use Vue Router? This is the recomended setup for most Apps.
    1. Use history mode for router? (Requires proper server setup for index fallback in production)

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
