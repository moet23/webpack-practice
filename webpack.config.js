const path = require('path');
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
                        loader:'style-loader',
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
}
