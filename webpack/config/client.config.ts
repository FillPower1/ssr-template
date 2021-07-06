import path from 'path';

import LoadablePlugin from '@loadable/webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { DIST_DIR, CLIENT_DIR } from '../dir';
import { ENVS, GLOBAL_ARGS } from '../env';
import { jsLoader, fileLoader } from '../loaders';

const { __DEV__, __PROD__ } = ENVS;

export default {
    target: 'web',
    entry: [
        __DEV__ && 'webpack-hot-middleware/client',
        CLIENT_DIR
    ].filter(Boolean),
    output: {
        path: path.join(DIST_DIR, 'static'),
        publicPath: '/static/',
        filename: __DEV__ ? 'main.js' : '[name]-[hash].js',
        hashDigestLength: 8
    },
    mode: __DEV__ ? 'development' : 'production',
    module: {
        rules: [jsLoader.client, fileLoader.client]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin()]
    },
    plugins: [
        __DEV__ && new webpack.HotModuleReplacementPlugin(),
        __DEV__ && new ReactRefreshPlugin({
            overlay: {
                sockIntegration: 'whm'
            }
        }),
        new webpack.DefinePlugin(GLOBAL_ARGS),
        new LoadablePlugin()
    ].filter(Boolean),
    performance: {
        hints: __DEV__ ? false : 'warning'
    },
    devtool: __DEV__ ? 'source-map' : '',
    optimization: {
        minimize: __PROD__,
        minimizer: [new TerserPlugin()],
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
