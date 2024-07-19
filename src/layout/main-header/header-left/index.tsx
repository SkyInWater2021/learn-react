import { memo } from "react"
import logoPng from "@/assets/img/logo.png"

const HeaderLeft = memo(() => {
  return (
    <div className="flex-center flex-1">
      <img src={logoPng} className="mr-2.5 h-[44px]" />
    </div>
  )
})

export default HeaderLeft
