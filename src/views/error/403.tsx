import { FC, memo } from "react"
import forbiddenSvg from "@/assets/svg/403.svg"

import { NotFoundWrapper } from "./style"

const NotFound: FC = memo(() => {
  return (
    <NotFoundWrapper>
      <img width="50%" height="50%" src={forbiddenSvg} alt="权限不足" />
    </NotFoundWrapper>
  )
})

export default NotFound
