const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const BaseConfig = require('./webpack.base.config');

module.exports = Object.assign({}, BaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      sourceMap: true,
    }),
    new CopyWebpackPlugin([
      { from: 'src/static/img', to: 'img' },
      { from: 'src/static/js', to: 'js' },
    ]),
    new Visualizer({
      filename: './stats.html',
    }),
  ],
});
