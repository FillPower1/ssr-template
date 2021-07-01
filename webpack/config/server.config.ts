import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { DIST_DIR, SERVER_DIR } from '../dir';
import { jsLoader, fileLoader } from '../loaders';
import { ENVS } from '../env';

const { __PROD__ } = ENVS;

export default {
    name: 'server',
    target: 'node',
    entry: SERVER_DIR,
    output: {
        path: DIST_DIR,
        publicPath: '/static/',
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [jsLoader.server, fileLoader.server]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin()]
    },
    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
    performance: {
        hints: false
    },
    optimization: {
        minimize: __PROD__,
        minimizer: [new TerserPlugin()]
    }
};
