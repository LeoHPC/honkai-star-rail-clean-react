import { HttpMethodEnum } from '@/domain/enum'
import { CharactersGateway } from '@/domain/gateway'
import { CharactersDataProps } from '@/domain/models'
import { HttpClient, HttpResponse } from '@/shared/domain/protocols'

export class CharactersHttpGateway implements CharactersGateway {
  constructor(private readonly httpClient: HttpClient) {}

  async getCharactersInfo(url: string): Promise<HttpResponse<CharactersDataProps[]>> {
    return await this.httpClient.request({
      url,
      method: HttpMethodEnum.GET
    })
  }
}
