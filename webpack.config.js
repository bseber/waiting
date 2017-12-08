const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "waiting-component.js",
    },

    devtool: "cheap-module-source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        stats: "minimal",
    },

    plugins: [new HtmlWebpackPlugin()],

    module: {
        rules: [{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }],
    },
};
