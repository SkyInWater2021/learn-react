import React, { useEffect } from "react"
import { Form, Input, Button, type FormProps } from "antd"
import { SearchOutlined } from "@ant-design/icons"

import type { CommonApiTypes } from "@/services/api-common"

type SearchParams = CommonApiTypes.SystemUsersPayload

interface Props {
  onSearch: (payload: SearchParams) => void
  loading: boolean
}

const App: React.FC<Props> = props => {
  const { onSearch } = props
  const [form] = Form.useForm()
  const { loading } = props
  const onFinish: FormProps["onFinish"] = payload => {
    onSearch(payload)
  }

  useEffect(() => {
    onSearch({})
  }, [onSearch])

  return (
    <>
      <Form layout="inline" form={form} initialValues={{}} onFinish={onFinish}>
        <Form.Item<SearchParams> name="username">
          <Input
            readOnly={loading}
            placeholder="请输入用户名"
            prefix={<div className="text-textSecondary">用户名： </div>}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" loading={loading} shape="circle" icon={<SearchOutlined />}></Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default App
