import { RouteObject } from "react-router-dom"

import { Login } from "./cpns"

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />
  }
]

export default routes
