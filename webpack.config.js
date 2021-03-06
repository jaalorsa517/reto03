const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
// const stylus = require('stylus-loader');

module.exports = {
    entry: path.resolve(__dirname, 'scripts', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: ''
    },
    devServer: {
        hot: true,
        open: true,
        contentBase: path.join(__dirname, 'dist')
    },
    mode: 'production',
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
                test: /\.jpg|png|svg|mp4|webm|gif|woff|eot|ttf$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 32000,
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'pages', 'index.html'),
            filename: 'index.html'
        }),
    ]
};
