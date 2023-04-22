import { Meta, StoryObj } from '@storybook/react'

import { CharactersInfo } from './characters-info'
import { Props } from './types'
import { ElementsEnum } from '@/domain/enum'

export default {
  title: 'Presentation/Characters Info',
  component: CharactersInfo,
  args: {
    characterData: {
      name: 'Himeko',
      description:
        'An adventurous scientist who encountered and repaired a stranded train as a child. She now ventures across the universe with her train currently named the Astral Express, operating as its navigator.',
      element: ElementsEnum.Fire,
      id: '3',
      rarity: 5,
      va: 'Cia Court',
      avatar:
        'https://serving.photos.photobox.com/190925631d5bc59964f67d62031b6d0d1a934441c1f30c05b838466d755583cc46c6e254.jpg',
      image: 'https://gcdnb.pbrd.co/images/1b0hCZUUddc0.webp?o=1'
    }
  }
} as Meta<Props>

export const Default: StoryObj<Props> = {}
