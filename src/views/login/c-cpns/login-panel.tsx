import { memo } from "react"
import { Button } from "antd"

const LoginPanel = memo(() => {
  return (
    <div>
      <h2>LoginPanel</h2>
      <Button type="primary">我是按钮</Button>
    </div>
  )
})

export default LoginPanel
