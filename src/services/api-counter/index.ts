import { requestInstance } from "@/services"
import { Response } from "@/types"

class Api {
  getBanners() {
    return requestInstance.get<Response<string[]>>({
      url: "/pet/1"
    })
  }
}

export const counterApi = new Api()
