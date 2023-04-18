import { useQuery } from 'react-query'

// Components
import { LoadingBackground } from '@/shared/components'
import { HomeCharactersSection, HomeFirstSection } from '@/presentation/components'
// Types
import { HomeProps } from './types'
import { CharactersDataProps } from '@/domain/models'

const useHome = ({ getCharactersDataUseCase }: HomeProps) => {
  const query = useQuery<CharactersDataProps[], Error>(['charactersData'], async () => {
    return await getCharactersDataUseCase.execute()
  })

  return { query }
}

export const Home = (props: HomeProps): JSX.Element => {
  const { query } = useHome(props)

  if (query.isLoading) return <LoadingBackground />

  return (
    <div>
      <HomeFirstSection />
      <HomeCharactersSection />
    </div>
  )
}
