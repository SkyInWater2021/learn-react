import path from "path"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

const rootSrc = path.resolve(__dirname, "src")

export default ({ mode = "" }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: env.VITE_APP_ENV === "production" ? "./" : "./",
    plugins: [react()],
    resolve: { alias: { "@": rootSrc } }
  })
}
