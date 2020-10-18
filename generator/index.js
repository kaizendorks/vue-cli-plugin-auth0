module.exports = (api, options) => {
  // Setup Vue Router if required
  if (options.useVueRouter) require('@vue/cli-service/generator/router')(api, options)

  // Inject dependencies
  api.extendPackage({
    dependencies: {
      '@auth0/auth0-spa-js': '^1.12.1'
    }
  })

  // TODO: Remove main.js and router/index.js and extend existing ones.
  // // Update @vue/cli-service/generator/template/src/main.js
  // api.injectImports(api.entryFile, `import { domain, clientId } from '../auth_config.json'`)
  // api.injectImports(api.entryFile, `import { Auth0Plugin } from './auth'`)

  // Render templates
  api.render('./template/default', options)
  if (api.hasPlugin('@vue/cli-plugin-router')) api.render('./template/router', options)
}
