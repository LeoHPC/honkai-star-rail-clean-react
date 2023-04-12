import { CharactersDataProps } from '@/domain/models'
import { HttpResponse } from '@/shared/domain/protocols'

export interface CharactersGateway {
  getCharactersInfo: (url: string) => Promise<HttpResponse<CharactersDataProps[]>>
}
