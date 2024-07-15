import { lazy } from "react"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

const App = lazy(() => import("@/App"))

const Discover = lazy(() => import("@/views/discover"))
const Recommend = lazy(() => import("@/views/discover/c-views/recommend"))
const Ranking = lazy(() => import("@/views/discover/c-views/ranking"))
const Songs = lazy(() => import("@/views/discover/c-views/songs"))
const Artist = lazy(() => import("@/views/discover/c-views/artist"))
const Album = lazy(() => import("@/views/discover/c-views/album"))

const Mine = lazy(() => import("@/views/mine"))
const Focus = lazy(() => import("@/views/focus"))
const Download = lazy(() => import("@/views/download"))

const NotFound = lazy(() => import("@/views/error/not-found"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/discover",
        element: <Discover />,
        children: [
          {
            path: "/discover",
            element: <Navigate to="/discover/recommend" />
          },
          {
            path: "/discover/recommend",
            element: <Recommend />
          },
          {
            path: "/discover/ranking",
            element: <Ranking />
          },
          {
            path: "/discover/songs",
            element: <Songs />
          },
          {
            path: "/discover/artist",
            element: <Artist />
          },
          {
            path: "/discover/album",
            element: <Album />
          }
        ]
      },
      {
        path: "/mine",
        element: <Mine />
      },
      {
        path: "/focus",
        element: <Focus />
      },
      {
        path: "/download",
        element: <Download />
      }
    ]
  },

  {
    path: "*",
    element: <NotFound />
  }
])

const Routes = () => <RouterProvider router={router} />

export default Routes
