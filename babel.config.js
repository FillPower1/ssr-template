module.exports = (api) => {
    const env = api.env()

    api.cache.using(() => env === 'development')

    return {
        presets: [
            '@babel/preset-react',
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties'
        ]
    }
}