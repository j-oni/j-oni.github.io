var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./scripts/app.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
		  	{
		  		test: /\.scss$/,
		  		loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
		  	}
		]
	},
	plugins: [
        new ExtractTextPlugin("style.css")
    ],
	resolve: {
		extensions: ['', '.js', '.es6']
	}
}