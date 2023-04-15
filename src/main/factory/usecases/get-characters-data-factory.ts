import { GetCharactersDataUseCase } from '@/data/usecases'
import { GET_CHARACTERS_DATA_URL } from '@/utils/constants'
import { factoryCharactersHttpGateway } from '@/main/factory/gateway'

export const factoryGetCharactersDataUseCase = (): GetCharactersDataUseCase => {
  return new GetCharactersDataUseCase(GET_CHARACTERS_DATA_URL, factoryCharactersHttpGateway())
}
