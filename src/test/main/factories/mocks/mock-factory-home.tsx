import { Home } from '@/presentation/pages'
import { CharactersGatewaySpy } from '@/test/data/mocks'
import { GetCharactersDataUseCase } from '@/data/usecases'

export const factoryHomePageSpy = () => {
  const charactersGatewaySpy = new CharactersGatewaySpy()
  const getCharactersDataUseCase = new GetCharactersDataUseCase(charactersGatewaySpy)

  return <Home getCharactersDataUseCase={getCharactersDataUseCase} />
}
