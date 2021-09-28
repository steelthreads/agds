module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  settings: {
    'react': {
      'version': 'detect'
    }
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/display-name': 'off'
  }
};
