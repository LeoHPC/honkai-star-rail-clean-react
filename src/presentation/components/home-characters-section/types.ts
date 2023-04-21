import { CharactersEnum } from '@/domain/enum'
import { CharactersDataProps } from '@/domain/models'

export interface Props {
  characters: CharactersDataProps[]
  characterData: CharactersDataProps
  setCurrentCharacter: (character: CharactersEnum) => void
}
