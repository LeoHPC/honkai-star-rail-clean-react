import { useQuery } from 'react-query'

// Components
import { Header, LoadingBackground } from '@/shared/components'
import { BackgroundVideo, BannerMessage } from '@/presentation/components'
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
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <BackgroundVideo />

        <div className="z-10">
          <Header />
          <BannerMessage />
        </div>
      </div>
      <div id="characters" className="h-screen w-full">
        <h1 className="z-10">next content</h1>
      </div>
    </div>
  )
}
