import React from "react"
import { Spin } from "antd"

const App: React.FC = () => (
  <div className="flex-center h-screen w-screen">
    <Spin size="large" tip="加载中....">
      <div className="w-screen"></div>
    </Spin>
  </div>
)

export default App
