import { RouteObject } from "react-router-dom"

import { AsyncCpn } from "../load-cpn"
import { Demo1, Demo2 } from "./cpns"

const routes: RouteObject[] = [
  {
    path: "/demo1",
    element: <AsyncCpn cpn={<Demo1 />} />
  },
  {
    path: "/demo2",
    element: <AsyncCpn cpn={<Demo2 />} />
  }
]

export default routes
