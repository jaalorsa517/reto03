const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const stylus = require('stylus-loader');

module.exports = {
    entry: path.resolve(__dirname, 'scripts', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/images/'
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist')
    },
    mode: 'development',
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'pages', 'index.html'),
            filename: 'index.html'
        }),
    ]
};