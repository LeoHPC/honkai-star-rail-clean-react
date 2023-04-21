import { faker } from '@faker-js/faker'

import { ElementsEnum } from '@/domain/enum'
import { CharactersDataProps } from '@/domain/models'

export const mockCharacterData = (): CharactersDataProps[] => [
  {
    id: faker.random.numeric(),
    name: faker.internet.userName(),
    description: faker.lorem.sentence(),
    element: ElementsEnum.Imaginary,
    rarity: faker.datatype.number(),
    va: faker.name.firstName(),
    avatar: faker.internet.url(),
    image: faker.internet.url()
  }
]
