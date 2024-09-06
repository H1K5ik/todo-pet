module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/plugin-transform-react-jsx-source',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-react-jsx-source', '@babel/plugin-transform-runtime'],
}
