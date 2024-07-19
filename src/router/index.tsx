import { lazy } from "react"
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom"

import loginRoutes from "@/router/login"
import userManageRoutes from "@/router/user-manage"
import demoRoutes from "@/router/header-observation"

const AppLayout = lazy(() => import("@/layout"))
const NotFound = lazy(() => import("@/views/error/404"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [...demoRoutes]
  },
  ...loginRoutes,
  ...userManageRoutes,
  { path: "*", element: <NotFound /> }
]

const router = createBrowserRouter(routes)

function Routes() {
  return <RouterProvider router={router}></RouterProvider>
}

export default Routes
