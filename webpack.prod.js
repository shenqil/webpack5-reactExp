const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library:'react-dialog',
      libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:10].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
              test: /\.(ts|js)x?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
              generator: {
                filename: 'static/images/[hash][ext][query]',
              },
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
              generator: {
                filename: 'static/font/[hash][ext][query]',
              },
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../',
                        },
                    },
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    "css-loader",
                    'sass-loader'
                ],
            },
        ]
    },
    resolve: {
      // 配置省略文件路径的后缀名
      extensions: ['.tsx', '.ts', '.js'],
    },
    externals:{
      react:'react',
      'react-dom':'react-dom'
    }
}
