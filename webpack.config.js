const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module :{
        rules:[
            {
                test: /\.css/,
                use: [
                    {
                        // loader:'style-loader', //差し替え前
                        loader:MiniCssExtractPlugin.loader,
                        //利用する
                    },
                    {
                        loader:'css-loader',
                        //読み込む
                    },
                    //下から順に読み込まれていく
                ],
            },
        ],
    },
    plugins:[
        new MiniCssExtractPlugin(),
        //親
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
    ],
}
