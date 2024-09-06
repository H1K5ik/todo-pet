const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

require('dotenv').config()
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: process.env.REACT_APP_MODEPROD,
  output: {
    filename: '[name].[contenthash].js',
    path: common.output.path,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_MODEPROD': JSON.stringify(process.env.REACT_APP_MODEPROD),
      'process.env.REACT_APP_API': JSON.stringify(process.env.REACT_APP_API),
      'process.env': JSON.stringify(process.env),
    }),
  ],
})
