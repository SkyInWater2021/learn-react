/** @type {import("tailwindcss").Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgPrimary": "var(--bg-primary)",
        "textPrimary": "var(--text-primary)",
        "textSecondary": "var(--text-secondary)"
      }
    }
  },
  plugins: [["prettier-plugin-tailwindcss"]],
  corePlugins: { preflight: false }
}
