// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

const baseUrl = process.env.NODE_ENV === 'production' ? '/iSimple/' : '/'

module.exports = {
  publicPath: baseUrl,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/style/main.scss";`,
      },
    },
  },
  productionSourceMap: false,
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()],
  // },
}
