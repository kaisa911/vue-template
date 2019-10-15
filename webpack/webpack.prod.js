const common = require('./webpack.common');
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};

module.exports = config;
