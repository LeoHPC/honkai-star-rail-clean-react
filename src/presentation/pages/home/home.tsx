import { useQuery } from 'react-query'

// Components
import { Header, LoadingBackground } from '@/shared/components'
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
      <Header />
      <h1 data-testid="home-message">May this journey lead us starward</h1>
    </div>
  )
}
