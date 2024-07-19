import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { commonApi, CommonApiTypes } from "@/services/api-common"
import { menuApi } from "@/services/api-menu"
import { message } from "@/global/app-message"
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
    // step1 获取token
    const loginResponse = await commonApi.login(payload)
    if (loginResponse.code !== 1) return message.error("登录失败,请检查网络设置或者联系管理员!")
    // localCache 保存登录token
    localCache.setCache(CacheKeys.LOGIN_TOKEN, loginResponse.data.token)

    // step2 获取用户信息
    const userId = loginResponse.data.userId
    const userInfoResponse = await commonApi.fetchUserInfoById({ userId })
    if (userInfoResponse.code !== 200) message.error("获取用户信息失败!")
    const userInfo = {
      ...userInfoResponse.data,
      roleName: encryptECB(userInfoResponse.data.roleName, ENCRYPT_ECB)
    }
    dispatch(changeUserInfoAction(userInfo))
    localCache.setCache(CacheKeys.USER_INFO, userInfo)

    // step3 获取观测数据菜单
    // TODO 暂时未添加角色
    const role = "暂无" ?? getSystemRole()
    const { data: observationMenus } = await menuApi.fetchFactor(role)
    localCache.setCache(CacheKeys.MENUS_OBSERVATION, observationMenus)

    // 跳转到/demo1

    // step 动态添加观测数据菜单路由
    // ...

    // step 实况产品菜单
    // ...

    // step 雷达产品菜单
    // ...

    // step 系统角色信息
    // ...

    // step 系统城市信息
    // ...
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
