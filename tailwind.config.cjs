/** @type {import("tailwindcss").Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)"
      }
    }
  },
  plugins: [["prettier-plugin-tailwindcss"]],
  corePlugins: { preflight: false }
}
