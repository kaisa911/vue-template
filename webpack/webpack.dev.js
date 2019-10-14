const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  ...common,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 开发服务器
    contentBase: '../dist',
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: '6001',
    disableHostCheck: true,
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
  },
  // 拆分代码
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial', // 只打包初始时依赖的第三方
        },
      },
    },
  },
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    // html，把js注入到html里
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      templateParameters: {
        title: '框架demo',
      },
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),
  ],
};

module.exports = config;
