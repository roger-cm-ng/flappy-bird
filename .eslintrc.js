module.exports = {
  extends: [
      './eslint-config/base',
      './eslint-config/import',
      './eslint-config/unicorn'
  ],
  rules: {
    'no-undef': 'off',
    'unicorn/filename-case': 'off'
  }
};
