export type Primitive = string | number | boolean | undefined | null | symbol

export interface SelectItem<T = string | number, K = Record<string, Primitive>> {
  label: string
  value: T
  extra?: K
}

export interface Response<T = unknown> {
  code: number
  msg: string
  data: T
}
