import { GetCharactersDataUseCase } from '@/data/usecases'
import { CharactersHttpGateway } from '@/infra/gateway'
import { Home } from '@/presentation/pages'
import { AxiosHttpClient } from '@/shared/infra/adapters'

export const factoryHomePage = (): JSX.Element => {
  const httpClient = new AxiosHttpClient()
  const charactersGateway = new CharactersHttpGateway(httpClient)
  const getCharactersUseCase = new GetCharactersDataUseCase(charactersGateway)

  return <Home getCharactersUseCase={getCharactersUseCase} />
}
