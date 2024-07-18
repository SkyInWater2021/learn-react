import { RouteObject } from "react-router-dom"

import { Demo1, Demo2 } from "./cpns"

const routes: RouteObject[] = [
  {
    path: "/demo1",
    element: <Demo1 />
  },
  {
    path: "/demo2",
    element: <Demo2 />
  }
]

export default routes
