var path = require("path");

module.exports = {
    devtool: 'eval',
    entry: path.join(__dirname, 'app.js'),
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, "node_modules"),
                loaders: [
                    "babel-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};