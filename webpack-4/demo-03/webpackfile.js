const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[hash:8].js"
  },
  mode: 'production',
  devServer: {
    port: 3000,
    progress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename:'index.html',
      minify:{
        removeAttributeQuotes:true,
        collapseWhitespace: true,
      }
    })
  ]
}
