const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: false,
        hot: true,
        historyApiFallback: true
    },
    devtool: "eval-source-map",
    entry: [
        "@babel/polyfill",
        "./src/app.jsx"
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g|gif)/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./img/[name].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "/src/index.html"),
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};