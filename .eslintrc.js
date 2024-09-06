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
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'sort-destructure-keys', 'jest', 'simple-import-sort'],
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react'],
              ['^@?\\w'],
              ['^(@|components)(/.*|$)'],
              ['^\\u0000'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/sort-comp': [
      'error',
      {
        order: ['static-methods', 'instance-variables', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: false,
      },
    ],
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    'jest/expect-expect': 'off',
    'import/no-unresolved': 'off',
    'no-undef': 0,
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-console': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        shorthandFirst: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
