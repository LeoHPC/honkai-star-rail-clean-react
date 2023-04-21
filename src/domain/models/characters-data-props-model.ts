import { ElementsEnum } from '@/domain/enum'

export interface CharactersDataProps {
  id: string
  name: string
  image: string
  rarity: number
  avatar: string
  va: string
  element: ElementsEnum
  description: string
}
