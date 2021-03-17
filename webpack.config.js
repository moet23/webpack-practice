const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './src/js/main.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        filename: './js/main.js',
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
            {
                // test:/\.png|\.jpg/, と同じ意味
                test:/\.(png|jpg)/,
                type:'asset/resource',
                generator:{
                    filename: 'img/[name][ext]'
                },
                use: [
                    // {
                    //     loader:'file-loader',
                    //     options:{
                    //         esModule: false,
                    //         name: './img/[name].[ext]?[emoji:3]',
                    //     },
                    // },
                ],
            },
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'./css/main.css',
        }),
        //親
        new HtmlWebpackPlugin({
            template:'./src/templates/index.html',
        }),
        // ゴミファイルを削除
        new CleanWebpackPlugin(),
    ],
}
