import React, { memo, Suspense } from "react"
import { Outlet, Link } from "react-router-dom"

const AppLayout: React.FC = memo(() => {
  return (
    <div>
      <div>
        <h2>HEADER</h2>
      </div>
      <div>
        <Link to="/demo1">DEMO1</Link>
        <Link to="/demo2">DEMO2</Link>
      </div>

      <Suspense fallback={""}>
        <Outlet />
      </Suspense>

      <div>
        <h2>FOOTER</h2>
      </div>
    </div>
  )
})

export default AppLayout
