const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

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
			},
			{
				test: /\.html$/,
				use: [
					"html-loader"
				]
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				type: "asset/resource"
			}
		]
	}
}