export interface UserDeletePayload {
  id: string
}

export interface UserUpdatePayload {
  id?: string
  roleId: string
  username: string
  password: string
  area: string
}
