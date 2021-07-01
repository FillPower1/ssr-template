const filenameRegexp = /^(?!.*\.inline).*\.(jpe?g|png|gif)$/;

export default {
    client: {
        loader: 'file-loader',
        test: filenameRegexp,
        query: {
            name: '[name]-[hash:5].[ext]',
            outputPath: './images'
        }
    },
    server: {
        loader: 'file-loader',
        test: filenameRegexp,
        query: {
            name: '[name]-[hash:5].[ext]',
            outputPath: '/static/images',
            publicPath: '/static/images'
        }
    }
};
