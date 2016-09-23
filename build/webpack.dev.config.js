//开发环境
var webpack = require('webpack')
var config = require('./webpack.base.config')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// dev配置
config.devServer= {
    hot: true,
    inline: true,
    proxy: {
      "http://127.0.0.1:2000/": {
          target: 'http://test.central.morning-star.cn/',
          secure: false
      },
      "http://127.0.0.1:4000/": {
          target: 'http://test.venus.morning-star.cn/',
          secure: false
      }
    }
}
config.devtool = '#source-map'
config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('[name].css', {
    allChunks: true
  })
])
module.exports = config