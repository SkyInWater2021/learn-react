export enum CacheKeys {
  // * add the cache keys
  LOGIN_TOKEN = "#_loginToken",
  USER_INFO = "#_userInfo",

  MENUS_OBSERVATION = "#_menusObservation",
  MENUS_ACTUALITY = "#_menusActuality",
  MENUS_RADAR = "#_menusRadar",
  MENUS_LIVE = "#_menusLive"
}

enum CacheType {
  Local,
  Session
}

class Cache {
  private storage: Storage

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setCache(key: CacheKeys, value: unknown): this {
    if (value !== undefined && value !== null) {
      try {
        this.storage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error("Error setting cache:", error)
      }
    }

    return this
  }

  getCache<T = unknown>(key: CacheKeys): T | undefined {
    try {
      const item = this.storage.getItem(key)
      return item ? JSON.parse(item) : undefined
    } catch (error) {
      console.error("Error retrieving cache:", error)
    }
  }

  removeCache(key: CacheKeys): this {
    this.storage.removeItem(key)
    return this
  }

  clearCache(): this {
    this.storage.clear()
    return this
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }
