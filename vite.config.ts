import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

const rootSrc = path.resolve(__dirname, "src")

export default ({ mode = "" }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: env.VITE_APP_ENV === "production" ? "./" : "./",
    resolve: { alias: { "@": rootSrc } },
    plugins: [
      react(),

      createHtmlPlugin({
        minify: true,
        inject: {
          data: { title: env.VITE_APP_TITLE }
        }
      })
    ],
    server: {
      hmr: true,
      host: true,
      port: 9999,
      proxy: {
        [env.VITE_APP_API_FLAG]: {
          target: env.VITE_APP_API,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_API_FLAG}`), "")
        },
        [env.VITE_APP_LOGIN_FLAG]: {
          target: env.VITE_APP_LOGIN,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_LOGIN_FLAG}`), "")
        },
        [env.VITE_GEO_SERVER_FLAG]: {
          target: env.VITE_GEO_SERVER,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_GEO_SERVER_FLAG}`), "")
        }
      }
    }
  })
}
