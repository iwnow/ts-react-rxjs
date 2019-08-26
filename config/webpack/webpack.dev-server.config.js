
const config = require('./webpack.dev.config');
const path = require('path');

module.exports = {
    ...config,
    devServer: {
        // historyApiFallback: {
        //     index: 'src/index.html'
        // }
        // contentBase: [
        //     path.resolve(__dirname, '../../dist')
        // ]
    }
}