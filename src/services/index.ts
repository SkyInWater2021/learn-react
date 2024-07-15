import { createCancelToken, HYRequest } from "./request"
import { CancelRequest } from "./request/types"

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const TIMEOUT = 1000 * 30

/**
 * 获取请求实例
 * @param baseURL 默认值 `import.meta.env.VITE_APP_BASE_URL`
 * @param timeout 默认值 `1000 * 30`
 * @returns
 */
function getInstance(baseURL = BASE_URL, timeout = TIMEOUT) {
  return new HYRequest({
    baseURL,
    timeout,
    interceptorHooks: {
      responseInterceptor: res => res.data
    }
  })
}

const requestInstance = getInstance()

export { createCancelToken, getInstance, requestInstance }

export type { CancelRequest }
