import reactRefresh from 'react-refresh/babel';

import { ENVS } from '../env';

export default {
    client: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: [
                    ENVS.__DEV__ && reactRefresh
                ].filter(Boolean)
            }
        }
    },
    server: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
    }
};
