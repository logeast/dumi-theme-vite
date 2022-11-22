module.exports = {
  printWidth: 80,
  proseWrap: "never",
  singleQuote: false,
  trailingComma: "all",
  overrides: [
    {
      files: "*.md",
      options: {
        proseWrap: "preserve",
      },
    },
  ],
};
