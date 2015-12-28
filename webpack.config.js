'use strict';
var path = require('path'),
    webpack = require('webpack'),
    WebpackDevServer = require("webpack-dev-server"),
    WebpackDevMiddleware = require("webpack-dev-middleware");

// module.exports = {
//     entry: './app/js/index.js',
//     output: {
//     	// path: './app/dist',
//         path: path.resolve(__dirname, './app/dist'),
//     	filename: 'index.js'
//     	// filename: '[name].js'
//     },
//     devServer: {
//         hot: true,
//         inline: true,
//         noInfo: true,
//         port: 3000
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     },
//     watchOptions: {
//     }
// };

var compiler = webpack({
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
    },
    watchOptions: {
    }
});
var server = new WebpackDevServer(compiler, {
    // webpack-dev-server options

    contentBase: "./app/",
    // or: contentBase: "http://localhost/",

    hot: true,
    historyApiFallback: false,

    proxy: {
    "*": "http://localhost:9090"
    },
    quiet: false,
    noInfo: false,
    lazy: false,
    filename: "index.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    publicPath: "./app/",
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },

});

server.listen(3000, "localhost", function() {});
