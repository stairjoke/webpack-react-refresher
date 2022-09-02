const path = require("path")
var HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/template.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //Load styles
					"css-loader", //Turn CSS into JS
					"sass-loader" //1: Turn SCSS into CSS
				]
			}
		]
	}
}