const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
    ...js.configs.recommended, // spread recommended rules
    rules: {
      "no-unused-vars": "error",
      "no-undef": "warn",
    },
  },
];
