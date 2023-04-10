import { CharactersGateway } from '@/domain/gateway'
import { CharactersDataProps } from '@/domain/models'
import { mockCharacterData } from '@/test/domain/mocks'

export class CharactersGatewaySpy implements CharactersGateway {
  url?: string

  getCharactersInfo = async (url: string): Promise<CharactersDataProps[]> => {
    this.url = url

    return mockCharacterData()
  }
}
