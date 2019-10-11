const path = require('path');
// const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 大坑
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// const vendorPath = '';

const config = {
  entry: ['babel-polyfill', path.join(__dirname, '../src/main.js')],
  output: {
    path: path.join(__dirname, '../dist'), // 所有的文件都输出到dist/目录下
    filename: 'js/bundle.[hash].js', // 每次保存 hash 都变化
  },
  module: {
    rules: [
      {
        // 使用vue-loader解析.vue文件
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        // 使用babel-loader解析js文件
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(), // 最新版的vue-loader需要配置插件
    new CleanWebpackPlugin(), // 使用clean-webpack-plugin来清理之前打包的文件
    // 使用happyPack来加速打包
    new HappyPack({
      //用id来标识 happypack处理类文件
      id: 'happyBabel',
      //如何处理 用法和loader 的配置一样
      loaders: [{ loader: 'babel-loader?cacheDirectory=true' }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
  ],
};

module.exports = config;
