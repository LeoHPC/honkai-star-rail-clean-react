import { CharactersHttpGateway } from '@/infra/gateway'
import { factoryAxiosHttpClient } from '@/main/factory/http-client'

export const factoryCharactersHttpGateway = (): CharactersHttpGateway => {
  return new CharactersHttpGateway(factoryAxiosHttpClient())
}
