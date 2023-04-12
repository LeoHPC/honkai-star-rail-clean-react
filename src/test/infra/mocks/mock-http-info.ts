import { faker } from '@faker-js/faker'

import { HttpMethodEnum } from '@/domain/enum'
import { HttpRequest, HttpResponse } from '@/shared/domain/protocols'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  body: faker.datatype.json(),
  method: HttpMethodEnum.GET
})

export const mockHttpResponse = (): HttpResponse => ({
  body: faker.datatype.json(),
  statusCode: faker.datatype.number()
})
