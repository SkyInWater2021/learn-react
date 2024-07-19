import { localCache, CacheKeys } from "@/utils/cache-local"
import { decryptECB, ENCRYPT_ECB } from "@/utils/encrypt"

import type { UserListItem } from "@/services/api-common/types"

export const getSystemRole = () => {
  const userInfo = localCache.getCache<UserListItem>(CacheKeys.USER_INFO)
  return decryptECB(userInfo?.roleName ?? "", ENCRYPT_ECB)
}

export const isAdmin = () => getSystemRole() === "管理员"
