//生产环境
var webpack = require('webpack')
var config = require('./webpack.base.config')
var path = require("path");
var StringReplacePlugin = require("string-replace-webpack-plugin");
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//生成生产环境目录
config.output.path=path.resolve(__dirname, '../dist/production');
config.output.filename ='[name].[chunkhash].js',
config.output.chunkFilename ="[name].[chunkhash].js"

//打包api 替换
config.module.loaders=(config.module.loaders || []).concat([
  { 
    test: path.resolve(__dirname, '../src/assets/common/js/config.js'),
    loader: StringReplacePlugin.replace({
      replacements: [
          {
              pattern: /127.0.0.1:8080/,
              replacement: function (match, p1, offset) {
                  return '192.168.1.10';
              }
          },
          {
              pattern: /test.cs0526.allpyra.com/,
              replacement: function (match, p1, offset) {
                  return 'www.seosiwei.com';
              }
          }
      ]})
  }
])

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('[name].[chunkhash].css', {
    allChunks: true
  }),
  new WebpackCleanupPlugin(),
  //string替换
  new StringReplacePlugin(),
  // this allows uglify to strip all warnings
  // from Vue.js source code.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  // This minifies not only JavaScript, but also
  // the templates (with html-minifier) and CSS (with cssnano)!
  //弱化警告信息
  new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
])

module.exports = config
