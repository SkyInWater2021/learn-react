import { FC, memo } from "react"
import { PageHeader } from "@/components"
import HeaderCenter from "./header-center"
import HeaderRight from "./header-right"

const MainHeader: FC = memo(() => {
  return <PageHeader center={<HeaderCenter />} right={<HeaderRight />}></PageHeader>
})

export default MainHeader
