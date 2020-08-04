const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            // new TerserPlugin(),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contentHash].css'}),
    ]
});
