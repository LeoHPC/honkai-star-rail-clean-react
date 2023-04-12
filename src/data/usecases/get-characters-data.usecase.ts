import { UrlInputDTO } from '@/domain/dto'
import { HttpStatusCode } from '@/domain/enum'
import { CharactersGateway } from '@/domain/gateway'
import { CharactersDataProps } from '@/domain/models'
import { GenericRequestError } from '@/domain/errors'

export class GetCharactersData {
  constructor(private readonly charactersGateway: CharactersGateway) {}

  async execute(UrlInputDTO: UrlInputDTO): Promise<CharactersDataProps[]> {
    const response = await this.charactersGateway.getCharactersInfo(UrlInputDTO.url)

    if (response.statusCode !== HttpStatusCode.OK || response.body === undefined) throw new GenericRequestError()

    return response.body
  }
}
