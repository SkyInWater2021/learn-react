import { FC, memo, ReactNode } from "react"
import logoPng from "@/assets/img/logo.png"
import HeaderCloud from "./header-cloud"

interface Props {
  center?: ReactNode
  right?: ReactNode
}

const MainHeader: FC<Props> = memo((props: Props) => {
  return (
    <div className="flex-center relative h-[70px] select-none text-white">
      <HeaderCloud />
      <div className="flex-center flex-1">
        <img src={logoPng} className="mr-2.5 h-[44px]" />
      </div>
      <div className="flex-center w-[1080px]">{props.center}</div>
      <div className="flex-right flex-1 pr-10">{props.right}</div>
    </div>
  )
})

export default MainHeader
