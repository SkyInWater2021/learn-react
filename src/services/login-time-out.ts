import type { AxiosResponse } from "axios"
import { appModal } from "@/hooks"

let instance: ReturnType<typeof appModal.warning> | null = null
let timer: NodeJS.Timeout

function redirectLogin() {
  if (timer) clearInterval(timer)
  instance?.destroy()
  instance = null
  window.location.href = "/login"
}

/**
 * 处理响应中的登录超时
 * @param res 响应对象
 */
export function handleLoginTimeout(res: AxiosResponse) {
  const { code } = res.data
  if (code === -1 && !instance) {
    let secondsToGo = 5

    instance = appModal.warning({
      centered: true,
      title: "登录超时",
      content: `系统将在 ${secondsToGo} 秒之后跳转到登录页面`,
      okText: "立即重新登录",
      onOk: redirectLogin
    })

    timer = setInterval(() => {
      secondsToGo -= 1
      instance?.update({ content: `系统将在 ${secondsToGo} 秒之后跳转到登录页面` })
    }, 1000)

    setTimeout(redirectLogin, secondsToGo * 1000)
  }

  return res.data
}
