import { localCache, CacheKeys } from "@/utils/cache-local"
import { decryptECB, ENCRYPT_ECB } from "@/utils/encrypt"

import type { UserListItem } from "@/services/api-common/types"

/**
 * 获取当前角色
 * @returns
 */
export const getSystemRole = () => {
  const userInfo = localCache.getCache<UserListItem>(CacheKeys.USER_INFO)
  return decryptECB(userInfo?.roleName ?? "", ENCRYPT_ECB)
}

/**
 * 是否是管理员
 * @returns
 */
export const isAdmin = () => getSystemRole() === "管理员"
