import { FC, memo } from "react"
import { Button } from "antd"
import { RollbackOutlined } from "@ant-design/icons"

import { PageHeader } from "@/components"
import * as Cpns from "./c-cpns"
import * as Styles from "./style"

const UserManage: FC = memo(() => {
  return (
    <Styles.UserManageWrapper>
      <PageHeader
        center={<h2>系统用户管理</h2>}
        right={<Button shape="circle" onClick={() => history.back()} icon={<RollbackOutlined />}></Button>}
      />

      <Cpns.CSearch />
      <Cpns.CTable />
      <Cpns.CModal />
    </Styles.UserManageWrapper>
  )
})

export default UserManage
