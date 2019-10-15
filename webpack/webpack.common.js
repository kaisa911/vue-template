const path = require('path');
// const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 大坑
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// const vendorPath = '';

const config = {
  entry: ['babel-polyfill', path.join(__dirname, '../src/main.js')], // 理论上可以兼容ie8
  output: {
    path: path.join(__dirname, '../dist'), // 所有的文件都输出到dist/目录下
    filename: 'js/bundle.[hash].js', // 每次保存 hash 都变化
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter'),
          fix: true, // 自动修复
        },
      },
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
