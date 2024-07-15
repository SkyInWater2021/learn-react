module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
  }
}
