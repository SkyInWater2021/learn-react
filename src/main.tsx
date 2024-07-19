import ReactDOM from "react-dom/client"
import zhCN from "antd/locale/zh_CN"

import { StrictMode } from "react"
import { Provider } from "react-redux"
import { ConfigProvider, App as AntdApp } from "antd"

import store from "@/store"
import antdTheme from "@/antd-theme"
import App from "@/App"
import "@/styles/index.css"
import "normalize.css"
import "dayjs/locale/zh-cn"

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <ConfigProvider theme={antdTheme} locale={zhCN}>
      <AntdApp message={{ maxCount: 1 }}>
        <App />
      </AntdApp>
    </ConfigProvider>
  </Provider>
  // </StrictMode>
)
