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
    colorPrimary: "var(--color-primary)"
  },
  components: {
    Input: {
      hoverBorderColor: "var(--border-primary)",
      activeShadow: "0 0 0 2px var(--border-primary)"
    }
  }
}

export { antdThemeConfig }
