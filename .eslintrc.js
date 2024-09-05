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
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'sort-destructure-keys', 'jest'],
  rules: {
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
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
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
