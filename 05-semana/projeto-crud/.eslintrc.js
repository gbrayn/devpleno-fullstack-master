module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    quotes: [2, "single", "avoid-escape"],
    semi: 0
  }
};
