import axios, { AxiosResponse } from 'axios'

import { HttpClient, HttpRequest, HttpResponse } from '@/shared/domain/protocols'

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly baseURL: string) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    const url = `${this.baseURL}${data.url}`

    try {
      axiosResponse = await axios.request({
        url,
        data: data.body,
        method: data.method
      })
    } catch (error) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
