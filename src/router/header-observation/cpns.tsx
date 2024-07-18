import { lazy } from "react"

const Demo1 = lazy(() => import("@/views/demo1"))
const Demo2 = lazy(() => import("@/views/demo2"))

export { Demo1, Demo2 }
