const filenameRegexp = /^(?!.*\.inline).*\.(eot|woff2?|ttf)$/;

export default {
    client: {
        loader: 'file-loader',
        test: filenameRegexp,
        query: {
            name: '[name]-[hash:5].[ext]',
            outputPath: 'fonts'
        }
    },
    server: {
        loader: 'null-loader',
        test: filenameRegexp
    }
};
