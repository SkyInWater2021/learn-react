import { Suspense } from "react"
import { isAdmin } from "@/permission"
import Forbidden from "@/views/error/403"

export function AsyncCpn(props: { cpn: JSX.Element; onlyAdmin?: boolean }) {
  if (props?.onlyAdmin && !isAdmin()) return <Forbidden />

  return <Suspense fallback={<div>Loading</div>}>{props.cpn}</Suspense>
}
