import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useAppMessage } from "@/hooks"

import { routes } from "./routes"

const appRouter = createBrowserRouter(routes)

const AppRouter = () => {
  useAppMessage()

  return <RouterProvider router={appRouter} />
}

export default AppRouter
