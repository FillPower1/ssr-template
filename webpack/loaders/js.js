module.exports = {
    client: {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
    },
    server: {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
    }
};
