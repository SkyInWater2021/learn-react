import React, { memo, Suspense } from "react"
import { Outlet } from "react-router-dom"

import MainHeader from "./main-header"
import PageLoading from "@/components/page-loading"

const AppLayout: React.FC = memo(() => {
  console.log("Layout Render")
  return (
    <div>
      <MainHeader />

      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </div>
  )
})

export default AppLayout
