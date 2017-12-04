var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/assets'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        //加载url-loader 同时安装 file-loader;
                        loader : 'url-loader',
                        options : {
                            limit : 5000,
                            //设置最终img路径;
                            name : 'images/[name]-[hash].[ext]'
                        }
                    },
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 8888
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html',
            minify:{
                removeAttributeQuotes: true
            },
            hash: true,
            inject: 'body',
        })
    ]
};