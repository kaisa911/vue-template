module.exports = {
  root: true,
  extends: ['plugin:vue/essential', "prettier", "eslint:recommended"],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  plugins: ['html', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
      },
    ],
  },
};
