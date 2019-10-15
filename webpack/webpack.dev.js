const common = require('./webpack.common');
const webpack = require('webpack');

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
  ],
};

module.exports = config;
