import { FC, memo } from "react"
import { ConfigProvider } from "antd"

import * as styled from "./styles"
import LoginPanel from "./c-cpns/login-panel"
import LoginField from "./c-cpns/login-field"

const startColor = "#57b8d4"
const endColor = "#61cae5"
const shadowColor = "#57b8d411"

const themeObj = {
  components: {
    Input: {
      activeBorderColor: startColor,
      hoverBorderColor: endColor,
      activeShadow: `0 0 0 2px ${shadowColor}`
    }
  }
}

const Login: FC = memo(() => {
  return (
    <styled.LoginWrapper $startColor={startColor} $endColor={endColor}>
      <LoginPanel>
        <ConfigProvider theme={themeObj}>
          <LoginField />
        </ConfigProvider>
      </LoginPanel>
    </styled.LoginWrapper>
  )
})

export default Login
