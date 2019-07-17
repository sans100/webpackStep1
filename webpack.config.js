const path = require('path');
const fs = require('fs'); // fileSystem
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 파일 생성
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // css파일 별로 추출

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    const returnData = [];
    templateFiles.map(file => { // 배열의 재배열 .map()
        if (path.extname(file).toLowerCase() === '.html') { // 확장자 html 파일만 
            returnData.push(new HtmlWebpackPlugin({ // 하나씩 배열에 입력
                filename: file,
                template: file,
                inject: 'body',
            }));
        }
    });
    return returnData;
}
const htmlPlugins = generateHtmlPlugins('./src/');

module.exports = {
    context: path.resolve(__dirname, './src/'),
    entry: {
        ui: ['./css/style.less', './js/app.js'],
        gugudan: './js/gugudan.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: './js/[name].js'
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
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './',
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css'),
        new UglifyJsPlugin()
    ].concat(htmlPlugins)
}