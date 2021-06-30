module.exports = {
  env: {
    browser: true,
    // "es2021": true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 10,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    // "@typescript-eslint"
  ],
  rules: {
    'no-undef': 0,
    'no-unused-vars': 0,
  },
};
