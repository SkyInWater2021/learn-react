import { Suspense } from "react"
import { isAdmin } from "@/permission"
import { PageLoading } from "@/components"

import Forbidden from "@/views/error/403"

export function AsyncCpn(props: { cpn: JSX.Element; onlyAdmin?: boolean }) {
  if (props?.onlyAdmin && !isAdmin()) return <Forbidden />

  return <Suspense fallback={<PageLoading />}>{props.cpn}</Suspense>
}
