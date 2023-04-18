import { useQuery } from 'react-query'

// Components
import { BackgroundVideo } from '@/presentation/components'
import { Header, LoadingBackground } from '@/shared/components'
// Types
import { HomeProps } from './types'
import { CharactersDataProps } from '@/domain/models'
// Assets
import { PlayButtonIcon } from '@/presentation/assets'

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

          <section className="bg-gray-950 w-screen p-8 flex flex-col items-center justify-center gap-6 bg-opacity-40">
            <button
              aria-label="Watch our gameplay trailer on YouTube!"
              title="Watch our gameplay trailer on YouTube!"
              className="hover:brightness-110 transition-all border-none outline-none focus-visible:outline-red-600 focus-visible:outline-4">
              <PlayButtonIcon />
            </button>
            <h1
              className="lg:text-6xl md:text-4xl text-2xl text-center font-audio text-gray-200 font-medium"
              data-testid="home-message">
              May This Journey Lead Us Starward
            </h1>
          </section>
        </div>
      </div>
      <div id="characters" className="h-screen w-full">
        <h1 className="z-10">next content</h1>
      </div>
    </div>
  )
}
