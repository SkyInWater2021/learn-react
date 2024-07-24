import { memo } from "react"
import { Link } from "react-router-dom"

const HeaderCenter = memo(() => {
  return (
    <>
      <h2>我是center</h2>
      <Link to="/demo1">Demo1</Link>
      <Link to="/demo2">Demo2</Link>
    </>
  )
})

export default HeaderCenter
