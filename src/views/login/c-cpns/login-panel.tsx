import { FC, memo, ReactNode } from "react"

interface Props {
  children: ReactNode
}

const LoginPanel: FC<Props> = memo(props => {
  const children = props.children
  return (
    <div className="select-none text-white">
      <div className="w-[450px] rounded-xl bg-bgPrimary shadow-md">
        <div className="gradient-animation flex-center relative -top-4 mx-4 h-28 overflow-hidden rounded-xl shadow-lg">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal antialiased">
            青海气象业务内网行业版
          </h3>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
})

export default LoginPanel
