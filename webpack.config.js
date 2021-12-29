// 引入一个包
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')

module.exports = {
    entry: "./src/snake.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: "bundle.js",
        environment: {
            arrowFunction: false
        },
    },
    mode: "production",
    module: {
        rules: [{
            test: /\.ts/,
            use: [{
                // 配置babel
                loader: 'babel-loader',
                options: {
                    // 设置预定义环境
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                // 设置要兼容的目标浏览器
                                targets: {
                                    'chrome': '88',
                                    // 'ie': '11'
                                },
                                // 指定corejs的版本
                                "corejs": "3",
                                // 使用corejs的方式 "usage"表示按需加载
                                "useBuiltIns": "usage"
                            }
                        ]
                    ]
                }
            }, 'ts-loader'],
            exclude: /node_module/
        }],
    },
    // 配置webpack-plugin插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "这是一个title",
            // template:"模板的路径"
        }),

    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}