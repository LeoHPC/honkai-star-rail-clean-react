import { useState } from 'react'
import { useQuery } from 'react-query'

// Components
import { LoadingBackground } from '@/shared/components'
import { HomeCharactersSection, HomeFirstSection } from '@/presentation/components'
// Types
import { HomeProps } from './types'
import { CharactersEnum } from '@/domain/enum'
import { CharactersDataProps } from '@/domain/models'

const useHome = ({ getCharactersDataUseCase }: HomeProps) => {
  const [currentCharacter] = useState<CharactersEnum>(CharactersEnum.WELT)

  const query = useQuery<CharactersDataProps[], Error>(['charactersData'], async () => {
    return await getCharactersDataUseCase.execute()
  })

  return { query, currentCharacter }
}

export const Home = (props: HomeProps): JSX.Element => {
  const { query, currentCharacter } = useHome(props)

  if (query.isLoading || query.data === undefined) return <LoadingBackground />

  return (
    <div className="relative overflow-hidden">
      <a
        href="#characters"
        className="absolute top-0 left-[9999px] focus-visible:left-0 z-30 outline-none border-none focus-visible:outline-4 focus-visible:outline-fuchsia-500">
        <div className="absolute bg-gray-900 w-64 h-64 top-[-8rem] left-[-6rem] rounded-full border-4 border-fuchsia-500" />
        <span className="absolute text-gray-200 w-80 bg-gray-900 bg-opacity-70 border-r-4 py-1 border-r-fuchsia-500 pr-4 top-4 left-4 font-audio text-4xl flex-nowrap">
          Skip to Main Content
        </span>
      </a>
      <HomeFirstSection />
      <HomeCharactersSection characterData={query.data[currentCharacter]} />
    </div>
  )
}
