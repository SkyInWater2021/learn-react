import { RouteObject } from "react-router-dom"

import { AsyncCpn } from "../load-cpn"
import { UserManage } from "./cpns"

const routes: RouteObject[] = [
  {
    path: "/userManage",
    element: <AsyncCpn onlyAdmin cpn={<UserManage />} />
  }
]

export default routes
