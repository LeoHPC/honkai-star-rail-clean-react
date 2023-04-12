import { HttpMethodEnum, HttpStatusCode } from '@/domain/enum'

export type HttpRequest = {
  url: string
  method: HttpMethodEnum
  body?: any
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}
