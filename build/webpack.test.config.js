//生产环境
var webpack = require('webpack')
var config = require('./webpack.base.config')
var path = require("path");
var StringReplacePlugin = require("string-replace-webpack-plugin");
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//生成测试环境目录
config.output.path=path.resolve(__dirname, '../dist/test');

//打包api 替换
config.module.loaders=(config.module.loaders || []).concat([
  { 
    test: path.resolve(__dirname, '../src/assets/common/js/config.js'),
    loader: StringReplacePlugin.replace({
      replacements: [
          {
              pattern: /127.0.0.1:2000/g,
              replacement: function (match, p1, offset) {
                  return 'test.central.morning-star.cn';
              }
          },
          {
              pattern: /127.0.0.1:4000/g,
              replacement: function (match, p1, offset) {
                  return 'test.venus.morning-star.cn';
              }
          }
      ]})
  }
])

config.devtool = '#source-map';

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('[name].css', {
    allChunks: true
  }),
  new WebpackCleanupPlugin(),
  //string替换
  new StringReplacePlugin(),
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
