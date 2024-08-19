const path = require('path')

const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')

dotenv.config()
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@const': path.resolve(__dirname, '../src/constants/index'),
      '@theme': path.resolve(__dirname, '../src/theme/index'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['file-loader'], // Или 'url-loader'
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
  ],
}
