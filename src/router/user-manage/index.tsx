import { RouteObject } from "react-router-dom"
import Permission from "@/hoc/permission"

import { UserManage } from "./cpns"

const routes: RouteObject[] = [
  {
    path: "/userManage",
    element: (
      <Permission onlyAdmin>
        <UserManage />
      </Permission>
    )
  }
]

export default routes
