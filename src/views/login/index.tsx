import { memo } from "react"
import { LoginWrapper } from "./style"
import LoginPanel from "./c-cpns/login-panel"

const Login = memo(() => {
  return (
    <LoginWrapper>
      <div className="flex w-[450px] flex-col rounded-xl bg-page-gray bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            青海气象业务内网行业版
          </h3>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <LoginPanel />
        </div>
      </div>
    </LoginWrapper>
  )
})

export default Login
