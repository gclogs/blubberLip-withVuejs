const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "docs/scss/style.scss";`
      }
    }
  },
  configureWebpack: {
    devServer: {
      host: 'localhost',
      port: 8080
    }
  }
})
