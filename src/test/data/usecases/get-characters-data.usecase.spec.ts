import { faker } from '@faker-js/faker'

import { HttpStatusCode } from '@/domain/enum'
import { GetCharactersDataUseCase } from '@/data/usecases'
import { GenericRequestError } from '@/domain/errors'
import { mockCharacterData } from '@/test/domain/mocks'
import { CharactersGatewaySpy } from '@/test/data/mocks'

type SutTypes = {
  url: string
  sut: GetCharactersDataUseCase
  charactersGatewaySpy: CharactersGatewaySpy
}

const makeSut = (): SutTypes => {
  const url = faker.internet.url()

  const charactersGatewaySpy = new CharactersGatewaySpy()
  const sut = new GetCharactersDataUseCase(charactersGatewaySpy)

  return { url, sut, charactersGatewaySpy }
}

describe('get characters data use case', () => {
  it('should be call with the correct url', () => {
    const { url, sut, charactersGatewaySpy } = makeSut()

    sut.execute({ url })

    expect(charactersGatewaySpy.url).toBe(url)
  })

  it('should return with the correct length', async () => {
    const { url, sut, charactersGatewaySpy } = makeSut()

    charactersGatewaySpy.response = {
      statusCode: HttpStatusCode.OK,
      body: mockCharacterData()
    }

    const response = await sut.execute({ url })

    expect(response).toHaveLength(1)
  })

  it('should return an error with an invalid request', async () => {
    const { sut, charactersGatewaySpy, url } = makeSut()

    charactersGatewaySpy.response = {
      statusCode: HttpStatusCode.FORBIDDEN
    }

    const promise = sut.execute({ url })

    await expect(promise).rejects.toThrow(new GenericRequestError())
  })
})
