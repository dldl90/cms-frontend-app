const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const BaseConfig = require('./webpack.base.config');

module.exports = Object.assign({}, BaseConfig, {
  output: Object.assign({}, BaseConfig.output, {
    filename: 'js/[name].bundle.[hash:8].js',
    chunkFilename: 'js/[name].bundle.[hash:8].js',
  }),
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ManifestPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          enforce: true,
        },
      },
    },
    runtimeChunk: false,
    namedModules: true,
    namedChunks: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    contentstack: 'Contentstack',
    'styled-components': 'styled',
  },
});
