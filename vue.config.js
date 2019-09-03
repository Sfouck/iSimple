// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/style/_variables.scss";`,
      },
    },
  },
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()],
  // },
}
