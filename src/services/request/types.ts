import { AxiosRequestConfig, AxiosResponse, Canceler, InternalAxiosRequestConfig } from "axios"

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  responseInterceptor?: (response: T) => T
  requestInterceptorCatch?: (error: unknown) => unknown
  responseInterceptorCatch?: (error: unknown) => unknown
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptorHooks?: HYRequestInterceptors<T>
}

export interface CancelRequest {
  create: (cancel: Canceler) => void
  canceler: Canceler
}
