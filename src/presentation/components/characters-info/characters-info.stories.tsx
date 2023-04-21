import { Meta, StoryObj } from '@storybook/react'

import { CharactersInfo } from './characters-info'
import { Props } from './types'
import { ElementsEnum } from '@/domain/enum'

export default {
  title: 'Presentation/Characters Info',
  component: CharactersInfo,
  args: {
    characterData: {
      name: 'Diluc',
      description: 'Fire Swordmaster',
      element: ElementsEnum.Fire,
      id: '3',
      rarity: 5,
      va: 'Leonardo',
      avatar: 'https://pbs.twimg.com/profile_images/1511138361896935424/B1AfSM3I_400x400.jpg',
      image: 'https://pbs.twimg.com/profile_images/1511138361896935424/B1AfSM3I_400x400.jpg'
    }
  }
} as Meta<Props>

export const Default: StoryObj<Props> = {}
