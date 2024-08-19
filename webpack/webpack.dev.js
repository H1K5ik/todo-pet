const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

require('dotenv').config()

module.exports = merge(common, {
  mode: process.env.modeDev,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: process.env.PORT || 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.PORT': JSON.stringify(process.env.PORT),
      'process.env.MODEDEV': JSON.stringify(process.env.MODEDEV),
    }),
  ],
})
