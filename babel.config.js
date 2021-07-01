module.exports = api => {
    const env = api.env();

    api.cache.using(() => env === 'development');

    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react'
        ],
        plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            [
                'babel-plugin-styled-components',
                {
                    ssr: true
                }
            ],
            '@loadable/babel-plugin'
        ]
    };
};
