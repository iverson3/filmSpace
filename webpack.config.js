/**
 * Created by stefan.wang on 7/28/2016.
 */

var path = require("path");

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, 'out'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,     // 匹配".js"或".jsx"文件
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
        ]
    }
};