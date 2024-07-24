import { RouteObject } from "react-router-dom"

export const fullChildRoutePath = (routes: RouteObject[], prefix: string) => {
  return routes.map(route => ({ ...route, path: prefix + route.path }))
}
