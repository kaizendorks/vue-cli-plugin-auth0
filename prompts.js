const chalk = require('chalk')
const path = require('path')

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
  name: 'routerHistoryMode',
  type: 'confirm',
  message: `Use history mode for router? ${chalk.yellow('(Requires proper server setup for index fallback in production)')}`,
  when: () => {
    try {
      // Attempt to read package.json
      const pkg = require(path.join(process.cwd(), 'package.json'))
      // Don't show if vue-router version is already set
      return !pkg.dependencies['vue-router']
    } catch (e) {
      console.log('Unable to read package.json')
      return true
    }
  }
}]
