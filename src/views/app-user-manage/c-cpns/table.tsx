import React from "react"
import { Button, Table, Popconfirm } from "antd"
import type { TableProps } from "antd"
import type { CommonApiTypes } from "@/services/api-common"
import { DeleteOutlined, EditOutlined, DashOutlined } from "@ant-design/icons"

// import { userManageApi, userManageApiTypes } from "@/services/api-user-manage"

type ListItem = CommonApiTypes.UserListItem

interface Props {
  listData: ListItem[]
}

const columns: TableProps<ListItem>["columns"] = [
  { title: "用户名", dataIndex: "username", align: "center" },
  { title: "角色", dataIndex: "roleName", align: "center" },
  { title: "所属区域", dataIndex: "area", align: "center" },
  {
    title: "操作",
    dataIndex: "username",
    align: "center",
    width: "350px",
    render: (username: string, rowData: ListItem) => {
      const isDisabled = username === "admin"
      return (
        <>
          <Button disabled={isDisabled} type="text" icon={<EditOutlined />}>
            编辑
          </Button>
          <Button disabled={isDisabled} type="text" icon={<DashOutlined />}>
            重置密码
          </Button>

          <Popconfirm
            title="删除"
            description={`是否要删除用户:${username}?`}
            onConfirm={() => deleteConfirm(rowData)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="text" danger disabled={isDisabled} icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </>
      )
    }
  }
]

function deleteConfirm(rowData: ListItem) {
  console.log(rowData)
}
const App: React.FC<Props> = props => {
  const dataSource = props.listData.map(item => ({ ...item, key: item.id }))

  return (
    <>
      <Table sticky scroll={{ y: "68vh" }} pagination={false} columns={columns} dataSource={dataSource} />
    </>
  )
}

export default App
