const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ]
    }
});