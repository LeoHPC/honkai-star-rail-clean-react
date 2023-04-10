import { faker } from '@faker-js/faker'

import { GetCharactersData } from '@/data/usecases'
import { CharactersGatewaySpy } from '@/test/data/mocks'

type SutTypes = {
  url: string
  sut: GetCharactersData
  charactersGatewaySpy: CharactersGatewaySpy
}

const makeSut = (): SutTypes => {
  const url = faker.internet.url()

  const charactersGatewaySpy = new CharactersGatewaySpy()
  const sut = new GetCharactersData(charactersGatewaySpy)

  return { url, sut, charactersGatewaySpy }
}

describe('get characters data use case', () => {
  it('should be call with the correct url', () => {
    const { url, sut, charactersGatewaySpy } = makeSut()

    sut.execute({ url })

    expect(charactersGatewaySpy.url).toBe(url)
  })

  it('should return with the correct length', async () => {
    const { url, sut } = makeSut()

    const response = await sut.execute({ url })

    expect(response).toHaveLength(1)
  })
})
