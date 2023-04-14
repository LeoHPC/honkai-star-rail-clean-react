import { GetCharactersDataUseCase } from '@/data/usecases'
import { factoryCharactersHttpGateway } from '@/main/factory/gateway'

export const factoryGetCharactersDataUseCase = (): GetCharactersDataUseCase => {
  return new GetCharactersDataUseCase(factoryCharactersHttpGateway())
}
