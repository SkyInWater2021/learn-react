import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom"

import loginRoutes from "@/router/login"
import userManageRoutes from "@/router/user-manage"
import demoRoutes from "@/router/header-observation"

import AppLayout from "@/layout"
import NotFound from "@/views/error/404"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [...demoRoutes]
  },
  { path: "*", element: <NotFound /> },

  ...loginRoutes,
  ...userManageRoutes
]

const appRouter = createBrowserRouter(routes)
appRouter.subscribe(res => {
  console.log(res)
})

const AppRouter = () => <RouterProvider router={appRouter}></RouterProvider>

export default AppRouter
