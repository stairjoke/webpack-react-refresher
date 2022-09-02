const path = require("path")

module.exports = {
	mode:  "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
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