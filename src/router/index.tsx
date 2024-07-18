import { lazy } from "react"
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom"

import loginRoutes from "./login"
import userManageRoutes from "./user-manage"
import demoRoutes from "./header-observation"

const AppLayout = lazy(() => import("@/layout"))
const NotFound = lazy(() => import("@/views/error/not-found"))

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

const commonRouter = createBrowserRouter(routes)

const Routes = () => <RouterProvider router={commonRouter} />

export default Routes
