import { faker } from '@faker-js/faker'

import { HttpStatusCode } from '@/domain/enum'
import { HttpClientSpy } from '@/test/infra/mocks'
import { CharactersHttpGateway } from '@/infra/gateway'

type SutTypes = {
  sut: CharactersHttpGateway
  httpClientSpy: HttpClientSpy
  url: string
}

const makeSut = (): SutTypes => {
  const url = faker.internet.url()

  const httpClientSpy = new HttpClientSpy()
  const sut = new CharactersHttpGateway(httpClientSpy)

  return { sut, httpClientSpy, url }
}

describe('Characters Http Gateway', () => {
  it('should call with the correct url', async () => {
    const { sut, httpClientSpy, url } = makeSut()

    await sut.getCharactersInfo(url)

    expect(httpClientSpy.url).toBe(url)
  })

  it('should return the correct status code', async () => {
    const { sut, url } = makeSut()

    const response = await sut.getCharactersInfo(url)

    expect(response.statusCode).toBe(HttpStatusCode.OK)
  })
})
