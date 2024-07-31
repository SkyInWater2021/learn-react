import { FC, memo, useCallback, useState } from "react"
import { Button, Card } from "antd"
import { RollbackOutlined } from "@ant-design/icons"

import { commonApi, CommonApiTypes } from "@/services/api-common"

import { PageHeader } from "@/components"
import * as Cpns from "./c-cpns"
import * as Styles from "./style"

const UserManage: FC = memo(() => {
  const [searchLoading, setSearchLoading] = useState(false)
  const [tableList, setTableList] = useState<CommonApiTypes.UserListItem[]>([])

  const onSearch = useCallback((formData: CommonApiTypes.SystemUsersPayload) => {
    setSearchLoading(true)
    commonApi
      .fetchUserList(formData)
      .then(res => setTableList(res.data ?? []))
      .finally(() => setSearchLoading(false))
  }, [])

  return (
    <Styles.UserManageWrapper>
      <PageHeader
        center={<h2>系统用户管理</h2>}
        right={<Button shape="circle" onClick={() => history.back()} icon={<RollbackOutlined />}></Button>}
      />

      <div className="p-2.5">
        <Card className="mb-4">
          <Cpns.CSearch onSearch={onSearch} loading={searchLoading} />
        </Card>

        <Card>
          <Cpns.CTable listData={tableList} />
        </Card>
        <Cpns.CModal />
      </div>
    </Styles.UserManageWrapper>
  )
})

export default UserManage
