const path = require("path")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		assetModuleFilename: "images/[name][ext]",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/template.html",
		})
	],
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				"style-loader", //3: Load styles
				"css-loader", //2: Turn CSS into JS
				"sass-loader" //1: Turn SCSS into CSS
			]
		}, ]
	}
})