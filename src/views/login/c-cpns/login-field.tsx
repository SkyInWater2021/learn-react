import { FC, memo } from "react"
import { Button, Form, Input } from "antd"

type FieldType = {
  username?: string
  password?: string
}

const LoginPanel: FC = memo(() => {
  return (
    <div>
      <Form name="basic" autoComplete="off">
        <Form.Item<FieldType> name="username" rules={[{ required: true, message: "请输入正确的账号!" }]}>
          <Input size="large" placeholder="请输入账号" prefix={<div className="text-[#BFBFBF]">账 号： </div>} />
        </Form.Item>

        <Form.Item<FieldType> name="password" rules={[{ required: true, message: "请输入正确的密码!" }]}>
          <Input.Password
            size="large"
            placeholder="请输入密码"
            prefix={<div className="text-[#BFBFBF]">密 码： </div>}
          />
        </Form.Item>
      </Form>

      <Form.Item>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          autoInsertSpace
          className="w-full bg-[#61CAE5] shadow-none hover:!bg-[#57B8D4]"
        >
          登 录
        </Button>
      </Form.Item>
    </div>
  )
})

export default LoginPanel
