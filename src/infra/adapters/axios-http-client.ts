import axios, { AxiosResponse } from 'axios'

import { HttpClient, HttpResponse } from '@/domain/protocols'

export class AxiosHttpClient implements HttpClient {
  async get(url: string): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.get(url)
    } catch (error) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
