import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

const rootSrc = path.resolve(__dirname, "src")

export default ({ mode = "" }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: env.VITE_APP_ENV === "production" ? "./" : "./",
    plugins: [
      react(),

      createHtmlPlugin({
        minify: true,
        inject: {
          data: { title: env.VITE_APP_TITLE }
        }
      })
    ],
    resolve: { alias: { "@": rootSrc } }
  })
}
