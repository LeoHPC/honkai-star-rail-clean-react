export enum HttpStatusCode {
  ok = 200
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export interface HttpClient<R = any> {
  get(url: string): Promise<HttpResponse<R>>
}
