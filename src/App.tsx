import { lazy } from "react"
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom"
import appMessage from "@/global/app-message"

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

const commonRouter = createBrowserRouter(routes)

function App() {
  appMessage()

  return (
    <>
      <RouterProvider router={commonRouter} />
    </>
  )
}

export default App
