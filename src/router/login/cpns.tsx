import { lazy } from "react"

const LoginOrigin = lazy(() => import("@/views/login"))

const Login = <LoginOrigin></LoginOrigin>

export { Login }
