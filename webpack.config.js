const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./client/app/app.html",
 	filename: "./index.html"
});

module.exports = {
  	entry: "./client/app/app.jsx",
  	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].js"
  	},
 	plugins: [htmlPlugin],
  	module: {
		rules: [
			{
		  		test: /\.(js|jsx)$/,
		  		exclude: /node_modules/,
		  		use: {
				loader: "babel-loader"
		  		}
			},{
				test: /\.s?css$/,
			  	use: [{
				  	loader: 'style-loader',
				  	options: {injectType: 'styleTag'}
					}, 'css-loader'
				]
			},{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader']
			}
	  	]
  	}
};