/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  // 在这里添加环境变量的类型
  readonly VITE_APP_TITLE: string

  readonly VITE_APP_API_FLAG: string
  readonly VITE_APP_API: string

  readonly VITE_APP_LOGIN_FLAG: string
  readonly VITE_APP_LOGIN: string

  readonly VITE_GEO_SERVER_FLAG: string
  readonly VITE_GEO_SERVER: string
}

declare interface Window {
  Api: {
    baseUrl: string
    geoServerUrl: string

    loginUrl: string
  }
}

declare module "crypto-js"
