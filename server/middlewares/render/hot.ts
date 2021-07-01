import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '@config/client.config';

export function getDefaultMiddleware() {
    if (process.env.NODE_ENV === 'development') {
        const compiler = webpack(config);

        return [
            devMiddleware(compiler, {
                publicPath: config.output.publicPath
            }),
            hotMiddleware(compiler)
        ];
    }

    return [];
}
