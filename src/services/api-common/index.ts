import { requestInstance, requestLoginInstance } from "@/services"
import type { Response } from "@/types"
import type * as types from "./types"

class API {
  /**
   * 登录
   * @param data
   * @returns
   */
  login(data: types.AccountLoginPayload) {
    return requestLoginInstance.post<Response<types.LoginResponse>>({
      url: "/login",
      data
    })
  }

  /**
   * 登出
   * @returns
   */
  logout() {
    return requestLoginInstance.get<Response<null>>({
      url: "/logout"
    })
  }

  /**
   * 查询系统用户列表
   * @param params
   * @returns
   */
  fetchUserList(params?: types.SystemUsersPayload) {
    return requestInstance.get<Response<types.UserListItem[]>>({
      url: "/sysUser/queryByParam",
      params
    })
  }

  /**
   * 通过ID查找用户信息
   * @param params
   * @returns
   */
  fetchUserInfoById(params: types.UserInfoPayload) {
    return requestInstance.get<Response<types.UserListItem>>({
      url: "/sysUser/queryById",
      params
    })
  }

  /**
   * 查询系统角色信息
   * @param params
   * @returns
   */
  fetchRoleInfo(params?: types.SystemRolesPayload) {
    return requestInstance.get<Response<types.RoleListItem[]>>({
      url: "/sysRole/queryByParam",
      params
    })
  }

  /**
   *
   * @returns 查询系统城市信息
   */
  fetchCityList() {
    return requestInstance.get<Response<types.CityItem[]>>({
      url: "/area/queryCityList"
    })
  }
}

export const commonApi = new API()
export { types as CommonApiTypes }
