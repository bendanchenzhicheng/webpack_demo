module.exports = {
    entry: './app/js/index.js',
    output: {
    	path: './app/dist',
    	filename: 'index.js'
    	// filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};