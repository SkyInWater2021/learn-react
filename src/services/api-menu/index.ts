import { requestInstance } from "@/services"
import type { Response } from "@/types"
import type * as types from "./types"

class API {
  /**
   * 获取观测数据菜单
   * @param role
   * @returns
   */
  fetchFactor(role: string) {
    return requestInstance.get<Response<types.MenuFactor[]>>({
      url: "/menu/factor",
      params: { role }
    })
  }

  /**
   * 获取实况产品菜单
   * @param role
   * @returns
   */
  fetchActuality(role: string) {
    return requestInstance.get<Response<types.MenuActuality[]>>({
      url: "/menu/actuality",
      params: { role }
    })
  }

  /**
   * 获取雷达产品菜单
   * @param role
   * @returns
   */
  fetchRadar(role: string) {
    return requestInstance.get<Response<types.MenuRadar[]>>({
      url: "/menu/radar",
      params: { role }
    })
  }
}

export const menuApi = new API()
export { types as menuApiTypes }
