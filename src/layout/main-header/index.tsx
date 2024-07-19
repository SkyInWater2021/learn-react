import { FC, memo } from "react"

import HeaderCloud from "./header-cloud"
import HeaderLeft from "./header-left"
import HeaderCenter from "./header-center"
import HeaderRight from "./header-right"

const MainHeader: FC = memo(() => {
  return (
    <div className="flex-center relative h-[70px] text-white">
      <HeaderCloud />
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  )
})

export default MainHeader
