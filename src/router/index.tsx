import NotFound from '@/views/error/not-found'
import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const Routes = () => <RouterProvider router={router} />

export default Routes
