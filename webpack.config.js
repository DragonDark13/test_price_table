const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'main.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    'sass-loader'
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/main.css',
    }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/index.html', to: 'index.html'}
            ]
        }),],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
    },
};