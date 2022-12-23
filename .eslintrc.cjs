module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': 'off',
    'handle-callback-err': 'off',
    'consistent-return': 'off',
  },
};
