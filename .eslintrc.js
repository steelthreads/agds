module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: [
    'prettier',
    'react',
    '@emotion'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
