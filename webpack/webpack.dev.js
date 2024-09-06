const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

require('dotenv').config()

module.exports = merge(common, {
  mode: process.env.REACT_APP_MODEDEV,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: process.env.REACT_APP_PORT || 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_PORT': JSON.stringify(process.env.REACT_APP_PORT),
      'process.env.REACT_APP_MODEDEV': JSON.stringify(process.env.REACT_APP_MODEDEV),
      'process.env': JSON.stringify(process.env),
    }),
  ],
})
