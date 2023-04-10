import { UrlInputDTO } from '@/domain/dto'
import { CharactersGateway } from '@/domain/gateway'
import { CharactersDataProps } from '@/domain/models'

export class GetCharactersData {
  constructor(private readonly charactersGateway: CharactersGateway) {}

  async execute(UrlInputDTO: UrlInputDTO): Promise<CharactersDataProps[]> {
    return await this.charactersGateway.getCharactersInfo(UrlInputDTO.url)
  }
}
