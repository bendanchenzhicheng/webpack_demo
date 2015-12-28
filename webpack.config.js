var path = require('path');
module.exports = {
    entry: './app/js/index.js',
    output: {
    	// path: './app/dist',
        path: path.resolve(__dirname, './app/dist'),
    	filename: 'index.js'
    	// filename: '[name].js'
    },
    devServer: {
        hot: true,
        inline: true,
        noInfo: true,
        port: 3000
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};