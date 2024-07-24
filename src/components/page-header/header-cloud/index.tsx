import { memo } from "react"

import { CloudWrapper } from "./style"

const Cloud = memo(() => {
  return (
    <CloudWrapper>
      <div className="header-cloud__box header-cloud__box--one"></div>
      <div className="header-cloud__box header-cloud__box--two"></div>
      <div className="header-cloud__box header-cloud__box--three"></div>
    </CloudWrapper>
  )
})

export default Cloud
