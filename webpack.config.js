'use strict';

var path = require('path'),
    webpack = require('webpack'),
    WebpackDevServer = require("webpack-dev-server"),
    WebpackDevMiddleware = require("webpack-dev-middleware");

var config = {
    entry: {
        index: './app/js/index',
        book: './app/js/book'
    },
    // entry: ['./app/js/index.js', './app/js/book.js'],
    output: {
        // path: './app/dist',
        filename: '[name].js',
        path: path.resolve(__dirname, './app/dist'),
        // filename: 'index.js'
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
        aggregateTimeout: 300,
        poll: 1000
    },

};
module.exports = config;

// var compiler = webpack({
//     contentBase: "./app/",
//     entry: './app/js/index.js',
//     output: {
//         // path: './app/dist',
//         path: path.resolve(__dirname, './app/dist'),
//         filename: 'index.js'
//         // filename: '[name].js'
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
//     resolve: { fallback: path.join(__dirname, "node_modules") },
//     resolveLoader: { fallback: path.join(__dirname, "node_modules") }
// });
// var server = new WebpackDevServer(compiler, {
//     output: {
//         // path: './app/dist',
//         path: path.resolve(__dirname, './app/dist'),
//         filename: 'index.js'
//         // filename: '[name].js'
//     },
//     hot: true,
//     // historyApiFallback: false,

//     // proxy: {
//     //     "*": "http://localhost:9090"
//     // },
//     // quiet: false,
//     // noInfo: false,
//     lazy: false,
//     filename: "index.js",
//     watchOptions: {
//         aggregateTimeout: 300,
//         poll: 1000
//     },
//     publicPath: "./app/",
//     headers: { "X-Custom-Header": "yes" },
//     stats: { colors: true },
// });

// server.listen(3000, "localhost", function() {});
