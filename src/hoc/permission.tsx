import React, { ReactNode } from "react"
import { isAdmin } from "@/permission"
import Forbidden from "@/views/error/403"

interface PermissionProps {
  children: ReactNode

  onlyAdmin?: boolean
}

const Permission: React.FC<PermissionProps> = props => {
  if (props?.onlyAdmin && !isAdmin()) return <Forbidden />

  return <>{props.children}</>
}

export default Permission
