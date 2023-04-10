import { faker } from '@faker-js/faker'

import { CharactersDataProps } from '@/domain/models'

export const mockCharacterData = (): CharactersDataProps[] => [
  {
    id: faker.random.numeric(),
    name: faker.internet.userName(),
    description: faker.lorem.sentence(),
    element: faker.random.word(),
    rarity: faker.datatype.number(),
    va: faker.name.firstName(),
    avatar: faker.internet.url(),
    image: faker.internet.url()
  }
]
