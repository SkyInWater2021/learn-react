import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { commonApi, CommonApiTypes } from "@/services/api-common"
import { menuApi } from "@/services/api-menu"
import { getSystemRole } from "@/permission"
import { localCache, CacheKeys } from "@/utils/cache-local"
import { encryptECB, ENCRYPT_ECB } from "@/utils/encrypt"

export interface CommonState {
  userInfo?: CommonApiTypes.UserListItem
  systemRoles: CommonApiTypes.RoleListItem[]
  systemCities: CommonApiTypes.CityItem[]
}

export const accountLoginAction = createAsyncThunk(
  "accountLogin",
  async (payload: CommonApiTypes.AccountLoginPayload, { dispatch }) => {
    try {
      // step1 获取token
      const loginResponse = await commonApi.login(payload)

      // TODO 判断账号密码是否正确
      // ...

      if (loginResponse.code !== 1) return { success: false, message: "登录失败,请检查网络设置或者联系管理员!" }
      // localCache 保存登录token
      localCache.setCache(CacheKeys.LOGIN_TOKEN, loginResponse.data.token)

      // step2 获取用户信息
      const userId = loginResponse.data.userId
      const userInfoResponse = await commonApi.fetchUserInfoById({ userId })
      if (userInfoResponse.code !== 200) return { success: false, message: "获取用户信息失败!" }
      const userInfo = {
        ...userInfoResponse.data,
        roleName: encryptECB(userInfoResponse.data.roleName, ENCRYPT_ECB),
        password: undefined
      }
      dispatch(changeUserInfoAction(userInfo))
      localCache.setCache(CacheKeys.USER_INFO, userInfo)

      // step3 获取观测数据菜单
      // TODO 暂时未添加角色
      const role = "暂无" ?? getSystemRole()
      const { data: observationMenus } = await menuApi.fetchFactor(role)
      localCache.setCache(CacheKeys.MENUS_OBSERVATION, observationMenus)

      // 登录成功
      return { success: true, role, message: "登录成功!" }
    } catch (error) {
      return { success: false, message: "登录失败!" }
    }
  }
)

const initialState: CommonState = {
  userInfo: localCache.getCache(CacheKeys.USER_INFO),
  systemRoles: [],
  systemCities: []
}

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    changeUserInfoAction(state, { payload }: PayloadAction<CommonApiTypes.UserListItem>) {
      state.userInfo = payload
    },
    changeSystemRolesAction(state, { payload }: PayloadAction<CommonApiTypes.RoleListItem[]>) {
      state.systemRoles = payload
    },
    changeSystemCitiesAction(state, { payload }: PayloadAction<CommonApiTypes.CityItem[]>) {
      state.systemCities = payload
    }
  }
})

export const { changeUserInfoAction, changeSystemRolesAction, changeSystemCitiesAction } = commonSlice.actions
export const reducer = commonSlice.reducer
