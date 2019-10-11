const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const config = {
  ...common,
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyjsWebpackPlugin({
        uglifyOptions: {
          compress: {
            comparisons: false,
            drop_console: true,
          },
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCssPlugin(),
    ],
    namedModules: true,
    occurrenceOrder: false,
  },

  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
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
