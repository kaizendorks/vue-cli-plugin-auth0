module.exports = (api, options) => {
  // Setup Vue router is not already set
  if (!api.hasPlugin('vue-router')) require('@vue/cli-service/generator/router')(api, options)

  // Inject dependencies
  api.extendPackage({
    dependencies: {
      '@auth0/auth0-spa-js': '^1.6.1'
    }
  })

  // TODO: Remove main.js and router/index.js and extend existing ones.
  // // Update @vue/cli-service/generator/template/src/main.js
  // api.injectImports(api.entryFile, `import { domain, clientId } from '../auth_config.json'`)
  // api.injectImports(api.entryFile, `import { Auth0Plugin } from './auth'`)

  // Render templates
  api.render('./template/default', options)

  // TODO: Investigate a way to lint & fix after create to ensure files adhere to chosen config
  // Something like this with a force flag or a mix with templates for things that can't be fixed.
  // api.onCreateComplete(() => {
  //   if (api.hasPlugin('@vue/cli-plugin-eslint')) require('@vue/cli-plugin-eslint/lint')({ silent: true }, api)
  // })
}
