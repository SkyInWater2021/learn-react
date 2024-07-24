import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import { App as AntdApp, ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"

import store from "@/store"
import AppRouter from "@/router"
import { antdThemeConfig } from "@/styles"

import "./styles"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider theme={antdThemeConfig} locale={zhCN}>
      <AntdApp message={{ maxCount: 1 }}>
        <AppRouter />
      </AntdApp>
    </ConfigProvider>
  </Provider>
)
