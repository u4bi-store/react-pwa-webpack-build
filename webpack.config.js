const path        = require('path'),
	  webpack     = require('webpack'),
	  HtmlWebpack = require('html-webpack-plugin'),
	  ScriptExtHtmlWebpack = require('script-ext-html-webpack-plugin'),
	  ExtractText = require("extract-text-webpack-plugin");
	  

module.exports = {
	entry: {        
		app: './src/main.js'
	},
	output: {
        filename: '[name].js',
        path : path.resolve(__dirname, 'dist')
    },
    resolve: { extensions: ['.jsx', '.js'] },
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader' },
					{
						loader: "eslint-loader",
						options: {
							emitWarning: true
						}
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: ExtractText.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
							  modules: true,
							  localIdentName: '[name]_[local]_[hash:base64:5]',
							  sourceMap: true,
							}
						},
						{ 
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							}
						}
					],
					fallback: 'style-loader'
				}) 
			},
			{
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            output: { comments: false },
        }),
		new HtmlWebpack({
            template: './src/index.html',
            inject: false
		}),
		new ScriptExtHtmlWebpack({
			defaultAttribute: 'defer'
		}),
		new ExtractText({
			filename: '[name].css',
			allChunks: true,
			ignoreOrder: true
		})
	]
}