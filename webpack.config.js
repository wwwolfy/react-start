const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test:/\.html$/,
                use: ['html-loader']
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use:
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[hash].[ext]',
                            outputPath: 'images',
                        },
                    },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env, @babel/preset-react']
                    // }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
        new CleanWebpackPlugin(),
    ],
};