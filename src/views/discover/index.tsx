import React, { memo, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

const Discover = memo(() => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
})

export default Discover
