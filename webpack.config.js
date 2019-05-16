const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 파일 생성
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // css파일 별로 추출

module.exports = {
    context: path.resolve(__dirname, './src/'),
    entry: {
        ui: ['./css/style.less', './js/app.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: './js/aap.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                    publicPath: '../'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html',
                inject: 'head', // script 태그 놓는 위치
            }
        ),
        new ExtractTextPlugin('./css/style.css'),
        new UglifyJsPlugin()
    ]
}