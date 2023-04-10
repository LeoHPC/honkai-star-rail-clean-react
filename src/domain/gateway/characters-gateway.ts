import { CharactersDataProps } from '@/domain/models'

export interface CharactersGateway {
  getCharactersInfo: (url: string) => Promise<CharactersDataProps[]>
}
