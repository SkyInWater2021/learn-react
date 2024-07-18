import { createCancelToken, HYRequest } from "./request"
import { CancelRequest } from "./request/types"

const BASE_URL = import.meta.env.VITE_APP_API_FLAG ?? window.Api.baseUrl
const LOGIN_URL = import.meta.env.VITE_APP_LOGIN_FLAG ?? window.Api.loginUrl
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
const requestLoginInstance = getInstance(LOGIN_URL)

export { createCancelToken, getInstance, requestInstance, requestLoginInstance }

export type { CancelRequest }
