const path = require("path");

const config = {
	entry: path.resolve(__dirname, "src", "swiper-maker.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "swiper-maker.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									useBuiltIns: "usage",
									corejs: { version: "3.6.5", proposals: false }
								}
							]
						],
					},
				},
			},
		],
	},
};

module.exports = config;
