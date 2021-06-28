const HtmlWebpackPlugin = require('html-webpack-plugin')

const { DIST_DIR, CLIENT_DIR } = require('../dir');
const jsLoader = require('../loaders/js');

module.exports = {
    entry: CLIENT_DIR,
    output: {
        path: DIST_DIR,
        publicPath: '/',
        filename: '[name]-[hash].js',
        hashDigestLength: 8
    },
    devServer: {
        contentBase: DIST_DIR,
        compress: true,
        port: 4200,
        watchContentBase: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [jsLoader.client]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        })
    ],
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
};
