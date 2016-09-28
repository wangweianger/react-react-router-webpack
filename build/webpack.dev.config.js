//开发环境
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.base.config')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 开发模式
config.devtool = '#source-map'
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
};

//提取css 
config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('[name].css', {
    allChunks: true
  }),
  new webpack.HotModuleReplacementPlugin()
]);

// 开启服务
new WebpackDevServer(webpack(config), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
}).listen(8888, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8888');
});

