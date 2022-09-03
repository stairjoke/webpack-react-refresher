const path = require("path")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].bundle.js",
		assetModuleFilename: "images/[name].[hash][ext]",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/template.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,removeComments: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, //3: Load styles as CSS files
					"css-loader", //2: Turn CSS into JS
					"sass-loader" //1: Turn SCSS into CSS
				]
			},
		]
	}
})