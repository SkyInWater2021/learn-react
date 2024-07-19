import React, { ReactNode } from "react"
import { isAdmin } from "@/permission"
import Forbidden from "@/views/error/403"

const Permission: React.FC<{
  children: ReactNode
  onlyAdmin?: boolean
}> = props => {
  if (props?.onlyAdmin && !isAdmin()) return <Forbidden />

  return <>{props.children}</>
}

export default Permission
