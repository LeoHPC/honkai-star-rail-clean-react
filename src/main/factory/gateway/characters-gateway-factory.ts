import { CharactersHttpGateway } from '@/infra/gateway'
import { factoryAxiosHttpClient } from '@/shared/main/factories/http-client'

export const factoryCharactersHttpGateway = (): CharactersHttpGateway => {
  return new CharactersHttpGateway(factoryAxiosHttpClient())
}
