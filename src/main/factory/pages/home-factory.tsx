// Component
import { Home } from '@/presentation/pages'
// Factories
import { factoryGetCharactersDataUseCase } from '@/main/factory/usecases'

export const factoryHomePage = (): JSX.Element => {
  return <Home getCharactersDataUseCase={factoryGetCharactersDataUseCase()} />
}
