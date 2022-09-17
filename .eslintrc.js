module.exports = {
  root: true,
  globals: {
    IS_DEVELOPMENT: "readonly",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
    browser: true,
  },
  rules: {
    indent: "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-console": 1,
  },
};
