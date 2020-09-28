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
						plugins: ["@babel/plugin-transform-object-assign"],
						presets: [
							[
								"@babel/preset-env"/*,
								{
									useBuiltIns: "entry",
									targets: {
										"ie": "11"
									},
									corejs: { version: "3.6.5", proposals: false }
								}*/
							]
						],
					},
				},
			},
		],
	},
};

module.exports = config;
