const path = require('path');
const webpackRxjsExternals = require('webpack-rxjs-externals');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../../src/main.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].[hash].js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "awesome-typescript-loader"// "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all"
    //     },
    // },
    externals: [
        // webpackRxjsExternals(),
        {
            "react": "React",
            "react-dom": "ReactDOM",
        },
    ],
    plugins: []
};