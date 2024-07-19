import { lazy } from "react"
import Permission from "@/hoc/permission"

const UserManageOrigin = lazy(() => import("@/views/user-manage"))

const UserManage = (
  <Permission onlyAdmin>
    <UserManageOrigin name="我是管理界面" />
  </Permission>
)

export { UserManage }
