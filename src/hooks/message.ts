import { App } from "antd"
import type { MessageInstance } from "antd/es/message/interface"
import type { ModalStaticFunctions } from "antd/es/modal/confirm"
import type { NotificationInstance } from "antd/es/notification/interface"

let appMessage: MessageInstance
let appNotification: NotificationInstance
let appModal: Omit<ModalStaticFunctions, "warn">

export default () => {
  const staticFunction = App.useApp()
  appMessage = staticFunction.message
  appModal = staticFunction.modal
  appNotification = staticFunction.notification
  return null
}

export { appMessage, appNotification, appModal }
