import { FC, memo } from "react"
import { Button, Form, Input } from "antd"
import { UserOutlined } from "@ant-design/icons"

type FieldType = {
  username?: string
  password?: string
}

const LoginPanel: FC = memo(() => {
  return (
    <div>
      <Form autoComplete="off">
        <Form.Item<FieldType>
          label="账 号： "
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item<FieldType>
          label="密 码： "
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" placeholder="large size" prefix={<UserOutlined />} />
        </Form.Item>
      </Form>

      <Button type="primary">我是按钮</Button>
    </div>
  )
})

export default LoginPanel
