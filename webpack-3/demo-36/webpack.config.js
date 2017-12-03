var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 8888
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: 'src/index.html',
        })
    ]
};