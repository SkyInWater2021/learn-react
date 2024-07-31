import { requestInstance } from "@/services"
import type { Response } from "@/types"
import type * as types from "./types"

class API {
  /**
   * 更新用户信息
   * @param data
   * @returns
   */
  userUpdate(data: types.UserUpdatePayload) {
    return requestInstance.post<Response>({
      url: "/sysUser/update",
      data
    })
  }

  /**
   * 删除用户
   * @param params
   * @returns
   */
  userDelete(params: types.UserDeletePayload) {
    return requestInstance.get<Response>({
      url: `/sysUser/delete/${params.id}`
    })
  }
}

export const userManageApi = new API()
export { types as userManageApiTypes }
