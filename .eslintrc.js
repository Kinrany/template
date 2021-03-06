module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: ["prettier", "jest"],
  rules: {
    "prettier/prettier": ["error"],
  },
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  reportUnusedDisableDirectives: true,
};
