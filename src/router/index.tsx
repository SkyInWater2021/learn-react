import { lazy } from "react"
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom"

import loginRoutes from "./login"
import userManageRoutes from "./user-manage"

const App = lazy(() => import("@/App"))
const NotFound = lazy(() => import("@/views/error/not-found"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: []
  },
  { path: "*", element: <NotFound /> },
  ...loginRoutes,
  ...userManageRoutes
]

const commonRouter = createBrowserRouter(routes)

const Routes = () => <RouterProvider router={commonRouter} />

export default Routes
