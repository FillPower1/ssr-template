const nodeExternals = require('webpack-node-externals');
const path = require('path')

const { DIST_DIR, SERVER_DIR } = require('../dir');
const jsLoader = require('../loaders/js');

module.exports = {
    target: 'node',
    entry: SERVER_DIR,
    output: {
        path: path.join(DIST_DIR, 'server'),
        publicPath: '/',
        filename: 'index.js',
        hashDigestLength: 8
    },
    module: {
        rules: [jsLoader.server]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx']
    },
    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
    plugins: [],
    performance: {
        hints: false
    }
}
