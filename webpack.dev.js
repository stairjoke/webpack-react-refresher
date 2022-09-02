const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")

var HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
	mode:  "development",
	output: {
		filename: "main.js",
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	}
})
