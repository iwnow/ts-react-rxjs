const config = require('./webpack.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const plugins = config && config.plugins || [];

module.exports = {
    ...config,
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        ...plugins,
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../../src/index.dev.html')
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ]
}