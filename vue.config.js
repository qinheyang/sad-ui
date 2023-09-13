const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    devtool: 'source-map', // 配置本地调试
    module: {}
  },
  devServer: {
    client: {
      overlay: false
    }
  }
})
