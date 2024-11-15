const path = require('path')

const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const env = dotenv.config().parsed

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@const': path.resolve(__dirname, '../src/constants/index'),
      '@theme': path.resolve(__dirname, '../src/theme/index'),
      '@component': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@api': path.resolve(__dirname, '../src/api'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  devServer: {
    historyApiFallback: true,
  },
}
