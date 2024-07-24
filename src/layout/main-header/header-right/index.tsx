import { memo } from "react"
import { Dropdown, Space } from "antd"
import { UserOutlined, DownOutlined, RobotOutlined } from "@ant-design/icons"
import { useEqualSelector } from "@/store"
import { isAdmin } from "@/permission"
import { useNavigate } from "react-router-dom"

function getDropMenus(navigate: ReturnType<typeof useNavigate>) {
  const systemAdmin = isAdmin()
  const adminMenus = ["manage"]

  return [
    {
      label: "用户管理",
      key: "manage",
      icon: <RobotOutlined />,
      onClick: () => navigate("/userManage")
    },
    {
      label: "退出登录",
      key: "loginOut",
      icon: <UserOutlined />,
      onClick: () => navigate("/login")
    }
  ].filter(item => !adminMenus.includes(item!.key) || systemAdmin)
}

const HeaderRight = memo(() => {
  const navigate = useNavigate()
  const downMenus = getDropMenus(navigate)

  const { userInfo } = useEqualSelector(({ commonStore }) => ({
    userInfo: commonStore.userInfo
  }))

  return (
    <>
      <div className="w-fit cursor-pointer">
        <Dropdown menu={{ items: downMenus }} placement="bottom">
          <Space>
            <span>{userInfo?.username}</span>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </>
  )
})

export default HeaderRight
