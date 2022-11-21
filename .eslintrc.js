module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
  },
  ignorePatterns: ['**/*.js'],
};
