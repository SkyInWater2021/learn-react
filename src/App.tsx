import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div className="header">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>

      <div className="main">
        <Suspense fallback={""}>
          <Outlet />
        </Suspense>
      </div>

      <div className="Footer"></div>
    </>
  )
}

export default App
