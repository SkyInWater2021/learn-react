import { RouteObject } from "react-router-dom"

import { AsyncCpn } from "../load-cpn"
import { Login } from "./cpns"

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <AsyncCpn cpn={<Login />} />
  }
]

export default routes
