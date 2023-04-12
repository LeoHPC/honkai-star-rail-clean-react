import { faker } from '@faker-js/faker'

import { HttpStatusCode } from '@/domain/enum'
import { HttpClient, HttpRequest, HttpResponse } from '@/shared/domain/protocols'

export class HttpClientSpy implements HttpClient {
  url?: string

  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    this.url = data.url

    return {
      statusCode: HttpStatusCode.OK,
      body: faker.datatype.json()
    }
  }
}
