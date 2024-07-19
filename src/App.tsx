import { ReactNode } from "react"
import { ConfigProvider, App as AntdApp } from "antd"
import zhCN from "antd/locale/zh_CN"

import appMessage from "@/global/app-message"
import { antdThemeConfig } from "@/styles"

interface Props {
  children: ReactNode
}

function App(props: Props) {
  console.log("APP render")

  appMessage()

  return (
    <>
      <ConfigProvider theme={antdThemeConfig} locale={zhCN}>
        <AntdApp message={{ maxCount: 1 }}>{props.children}</AntdApp>
      </ConfigProvider>
    </>
  )
}

export default App
