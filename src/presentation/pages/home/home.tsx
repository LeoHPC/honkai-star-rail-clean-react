import { useQuery } from '@tanstack/react-query'

// Components
import { LoadingBackground } from './components'
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

  console.log(query)
  return <LoadingBackground />
}
