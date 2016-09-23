var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
	entry: {
		main:path.resolve(__dirname, '../src/index.jsx'),
	},
	// devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: "[name].js"
	},
	module: {
		loaders:[
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components|public)/,
				loaders: ['react-hot']
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components|public)/,
				loader: 'babel',
				query: {
				  presets: ['es2015', 'react'],
				  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
				}
			},
			{
	        　　test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
	        　　loader: 'url-loader?importLoaders=1&limit=1000&name=fonts/[name].[ext]'
	    　　},
	   		{
	            test: /\.(png|jpg|gif)$/,
	            loader: 'url-loader?limit=8192&name=img/[name].[ext]?[hash]'
	        },
	        {
	            test: /\.scss$/, 
	            loader: "style!css!sass"
	        },
	        {
	            test:/\.css$/, 
	            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	        },
			
		]
	},
	babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
    resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
            // components: path.resolve(__dirname, '../src/components'),
        },
	},
	plugins: [
		new CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        }),
		//自动生成html文件
        new htmlWebpackPlugin({
            title:"首页",
            template:path.resolve(__dirname, '../src/template.html'),
            inject: true,
            hash: true,
            cache: true,
            chunks: ['main','vendors'],
        }),
	]
};
