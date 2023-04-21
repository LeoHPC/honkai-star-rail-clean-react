import { faker } from '@faker-js/faker'

import { ElementsEnum } from '@/domain/enum'
import { CharactersDataProps } from '@/domain/models'

export const mockCharacterData = (): CharactersDataProps[] => [
  {
    id: '1',
    name: faker.internet.userName(),
    description: faker.lorem.sentence(),
    element: ElementsEnum.Imaginary,
    rarity: faker.datatype.number(),
    va: faker.name.firstName(),
    avatar: faker.internet.url(),
    image: faker.internet.url()
  },
  {
    id: '2',
    name: faker.internet.userName(),
    description: faker.lorem.sentence(),
    element: ElementsEnum.Fire,
    rarity: faker.datatype.number(),
    va: faker.name.firstName(),
    avatar: faker.internet.url(),
    image: faker.internet.url()
  }
]
