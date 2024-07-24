import { ThemeConfig } from "antd"
import "normalize.css"
import "dayjs/locale/zh-cn"

import "./variables.css"

import "./reset.css"
import "./common.css"

import "./tailwindcss-base.css"
import "./tailwindcss-components.css"
import "./tailwindcss-utilities.css"

const antdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#1c4693"
  },
  components: {
    Button: {
      primaryShadow: "0 1px 0 #E4E7ED"
    },
    Input: {
      activeShadow: "0 1px 0 #E4E7ED"
    }
  }
}

export { antdThemeConfig }
