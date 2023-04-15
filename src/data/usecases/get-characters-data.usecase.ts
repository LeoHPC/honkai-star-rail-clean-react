import { HttpStatusCode } from '@/domain/enum'
import { CharactersGateway } from '@/domain/gateway'
import { CharactersDataProps } from '@/domain/models'
import { GenericRequestError } from '@/domain/errors'

export class GetCharactersDataUseCase {
  constructor(private readonly url: string, private readonly charactersGateway: CharactersGateway) {}

  async execute(): Promise<CharactersDataProps[]> {
    const response = await this.charactersGateway.getCharactersInfo(this.url)

    if (response.statusCode !== HttpStatusCode.OK || response.body === undefined) throw new GenericRequestError()

    return response.body
  }
}
