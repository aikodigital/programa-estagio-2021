module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-empty-function": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "_" }],
    "import/extensions": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/no-unresolved": "off",
    camelcase: "off",
  },
};
