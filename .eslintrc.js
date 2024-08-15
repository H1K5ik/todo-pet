module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    ...require('globals').browser,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-require-imports': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
