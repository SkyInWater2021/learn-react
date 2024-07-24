import React, { memo } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Button } from "antd"

import MainHeader from "./main-header"

const AppLayout: React.FC = memo(() => {
  return (
    <div>
      <MainHeader />
      <NavLink to="/login">
        <Button>去登录</Button>
      </NavLink>

      <Outlet />
    </div>
  )
})

export default AppLayout
