import { requestInstance } from "@/services"
import type { Response } from "@/types"
import type * as types from "./types"

class API {
  fetchFactor(role: string) {
    return requestInstance.get<Response<types.MenuFactor[]>>({
      url: "/menu/factor",
      params: { role }
    })
  }

  fetchActuality(role: string) {
    return requestInstance.get<Response<types.MenuActuality[]>>({
      url: "/menu/actuality",
      params: { role }
    })
  }

  fetchRadar(role: string) {
    return requestInstance.get<Response<types.MenuRadar[]>>({
      url: "/menu/radar",
      params: { role }
    })
  }
}

export const menuApi = new API()
export { types as menuApiTypes }
