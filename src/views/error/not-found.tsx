import { memo } from 'react'
import notFoundSvg from '@/assets/svg/404.svg'

import { NotFoundWrapper } from './style'

const NotFound = memo(() => {
  return (
    <NotFoundWrapper>
      <img width="50%" height="50%" src={notFoundSvg} alt="" />
    </NotFoundWrapper>
  )
})

export default NotFound
