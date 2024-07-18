import { FC, memo, useState } from "react"
import { Button, Form, Input, type FormProps, type FormRule } from "antd"
import { useAppDispatch, commonSlice } from "@/store"
import { message } from "@/global/app-message"
import { encryptECB, ENCRYPT_ECB } from "@/utils/encrypt"

interface FieldType {
  username: string
  password: string
}

const defaultFormData: FieldType = {
  username: import.meta.env.DEV ? "admin" : "",
  password: import.meta.env.DEV ? "Admin@1234!" : ""
}
const rules: Record<keyof FieldType, FormRule[]> = {
  username: [{ required: true, message: "请输入正确的账号!" }],
  password: [{ required: true, message: "请输入正确的密码!" }]
}

const LoginField: FC = memo(() => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const onFinish: FormProps<FieldType>["onFinish"] = ({ username, password }) => {
    setLoading(true)
    const mPassword = encryptECB(password, ENCRYPT_ECB)
    const { accountLoginAction } = commonSlice
    dispatch(accountLoginAction({ username, password: mPassword }))
      .catch(() => message.error("账号或者密码错误!"))
      .finally(() => setTimeout(() => setLoading(false), 200))
  }

  return (
    <>
      <Form autoComplete="off" initialValues={defaultFormData} onFinish={onFinish}>
        <Form.Item<FieldType> name="username" rules={rules["username"]}>
          <Input
            readOnly={loading}
            size="large"
            placeholder="请输入账号"
            prefix={<div className="text-textSecondary">账 号： </div>}
          />
        </Form.Item>

        <Form.Item<FieldType> name="password" rules={rules["password"]}>
          <Input.Password
            readOnly={loading}
            size="large"
            placeholder="请输入密码"
            prefix={<div className="text-textSecondary">密 码： </div>}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" loading={loading} autoInsertSpace className="login-btn">
            {loading ? " 登 录 中" : " 登 录"}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
})

export default LoginField
