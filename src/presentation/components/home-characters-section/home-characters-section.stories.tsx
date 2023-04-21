import { Meta, StoryObj } from '@storybook/react'

import { HomeCharactersSection } from './home-characters-section'
import { ElementsEnum } from '@/domain/enum'

export default {
  title: 'Presentation/Home Characters Section',
  component: HomeCharactersSection,
  args: {
    characterData: {
      name: 'Diluc',
      description: 'Fire Swordmaster',
      element: ElementsEnum.Fire,
      id: '3',
      rarity: 5,
      va: 'Leonardo',
      avatar: 'https://pbs.twimg.com/profile_images/1511138361896935424/B1AfSM3I_400x400.jpg',
      image: 'https://mobimg.b-cdn.net/v3/fetch/69/69d09cb8e8605336318cd8351dcc97d3.jpeg'
    },
    setCurrentCharacter: () => '',
    characters: [
      {
        name: 'Diluc',
        description: 'Fire Swordmaster',
        element: ElementsEnum.Fire,
        id: '3',
        rarity: 5,
        va: 'Leonardo',
        avatar: 'https://pbs.twimg.com/profile_images/1511138361896935424/B1AfSM3I_400x400.jpg',
        image: 'https://mobimg.b-cdn.net/v3/fetch/69/69d09cb8e8605336318cd8351dcc97d3.jpeg'
      },
      {
        name: 'Diluc',
        description: 'Fire Swordmaster',
        element: ElementsEnum.Fire,
        id: '3',
        rarity: 5,
        va: 'Leonardo',
        avatar: 'https://pbs.twimg.com/profile_images/1511138361896935424/B1AfSM3I_400x400.jpg',
        image: 'https://mobimg.b-cdn.net/v3/fetch/69/69d09cb8e8605336318cd8351dcc97d3.jpeg'
      }
    ]
  }
} as Meta

export const Default: StoryObj = {}
