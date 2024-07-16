import { FC, memo } from "react"
import { LoginWrapper } from "./style"
import LoginPanel from "./c-cpns/login-panel"
import LoginField from "./c-cpns/login-field"

const Login: FC = memo(() => {
  return (
    <LoginWrapper>
      <LoginPanel>
        <LoginField />
      </LoginPanel>
    </LoginWrapper>
  )
})

export default Login
