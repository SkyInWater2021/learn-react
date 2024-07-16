import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"

import Routes from "@/router"
import store from "@/store"
import antdTheme from "@/antd-theme"
import "@/styles/index.css"
import "normalize.css"
import "dayjs/locale/zh-cn"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider theme={antdTheme} locale={zhCN}>
      <Routes />
    </ConfigProvider>
  </Provider>
)
