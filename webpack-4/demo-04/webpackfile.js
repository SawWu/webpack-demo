const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[hash:8].js"
  },
  optimization: {
    minimizer: [

    ]
  },
  mode: 'production',
  devServer: {
    port: 3000,
    progress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: "css-loader"},
          {loader: "postcss-loader"},
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: "css-loader"},
          {loader: "postcss-loader"},
          {loader: "less-loader"}
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new OptimizeCss({}),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    })
  ]
}
