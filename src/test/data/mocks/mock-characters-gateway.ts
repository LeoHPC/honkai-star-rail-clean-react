import { faker } from '@faker-js/faker'

import { HttpStatusCode } from '@/domain/enum'
import { CharactersGateway } from '@/domain/gateway'
import { CharactersDataProps } from '@/domain/models'
import { HttpResponse } from '@/shared/domain/protocols'

export class CharactersGatewaySpy implements CharactersGateway {
  url?: string
  response: HttpResponse = {
    statusCode: HttpStatusCode.OK,
    body: faker.datatype.json()
  }

  async getCharactersInfo(url: string): Promise<HttpResponse<CharactersDataProps[]>> {
    this.url = url

    return this.response
  }
}
