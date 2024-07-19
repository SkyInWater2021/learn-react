import { memo } from "react"
import type { MenuProps } from "antd"
import { Dropdown, message, Space } from "antd"
import { UserOutlined, DownOutlined } from "@ant-design/icons"
import { useEqualSelector } from "@/store"

const handleMenuClick: MenuProps["onClick"] = e => {
  message.info("Click on menu item.")
  console.log("click", e)
}

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true
  }
]

const menuProps = {
  items,
  onClick: handleMenuClick
}

const HeaderRight = memo(() => {
  console.log("HeaderRight Render")

  const { userInfo } = useEqualSelector(({ commonStore }) => {
    return {
      userInfo: commonStore.userInfo
    }
  })

  return (
    <div className="flex-right flex-1 pr-10">
      <div className="w-fit cursor-pointer">
        <Dropdown menu={menuProps}>
          <Space>
            <span>{userInfo?.username}</span>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </div>
  )
})

export default HeaderRight
