const chalk = require('chalk')
const path = require('path')

const pkgJson = require(path.join(process.cwd(), 'package.json'))

module.exports = [{
  name: 'configuredAuth0',
  type: 'confirm',
  message: `Have you configured an Auth0 client? ${chalk.yellow('(If not, make sure to update auth_config.json afterwards)')}`,
  default: true
}, {
  name: 'auth0Domain',
  type: 'string',
  message: 'Auth0 client domain?',
  when: answers => answers.configuredAuth0
}, {
  name: 'auth0ClientId',
  type: 'string',
  message: 'Auth0 client ID?',
  when: answers => answers.configuredAuth0
}, {
  name: 'useVueRouter',
  type: 'confirm',
  message: 'Would you like to use Vue Router?',
  default: true,
  // Skip when vue-router is already a dependecy.
  when: () => !pkgJson.dependencies['vue-router']
}, {
  name: 'routerHistoryMode',
  type: 'confirm',
  message: `Use history mode for router? ${chalk.yellow('(Requires proper server setup for index fallback in production)')}`,
  // Run if vue-router is being added for the first time.
  when: answers => !pkgJson.dependencies['vue-router'] && answers.useVueRouter
}]
