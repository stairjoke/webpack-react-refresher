const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = merge(common, {
	mode:  "production",
	output: {
		filename: "main.js",
		filename: "main.[contenthash].js",
		assetModuleFilename: "images/[name].[hash][ext]",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [new CleanWebpackPlugin()]
})
