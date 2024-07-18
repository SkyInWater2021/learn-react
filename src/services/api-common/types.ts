export interface SystemUsersPayload {
  username?: string
}

export interface SystemRolesPayload {
  roleName?: string
}

export interface UserInfoPayload {
  userId: string
}

export interface UserListItem {
  createTime: string
  updateTime: string
  id: string
  roleId: string
  roleName: string
  username: string
  password: string
  area: string
}

export interface RoleListItem {
  createTime: string
  updateTime: string
  id: string
  roleName: string
}

export interface CityItem {
  name: string
  id: string
  regionCode: string
}

export interface AccountLoginPayload {
  password: string
  username: string
}

export interface LoginResponse {
  userId: string
  username: string
  token: string
  uuid: string
}
