import { FC, memo, ReactNode } from "react"
import appMessage from "@/global/app-message"

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = memo(({ children }) => {
  appMessage()

  return <>{children}</>
})

export default App
