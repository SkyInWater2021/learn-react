import { RouteObject } from "react-router-dom"

import loginRoutes from "@/router/app-login"
import userManageRoutes from "@/router/app-user-manage"
import demoRoutes from "@/router/header-observation"

import AppLayout from "@/layout"
import NotFound from "@/views/error/404"

import { fullChildRoutePath } from "./utils"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [...fullChildRoutePath(demoRoutes, "")]
  },
  { path: "*", element: <NotFound /> },
  ...loginRoutes,
  ...userManageRoutes
]
