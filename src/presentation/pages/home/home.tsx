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
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <div className="absolute top-0 left-0 bg-zinc-900 bg-opacity-40 w-full h-screen" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-screen"
            aria-labelledby="video-transcription">
            <source src="./video/background-video.mp4#t=0.1" type="video/mp4" />
          </video>
          <p id="video-transcription" className="text-gray-200 bg-zinc-900 bg-opacity-40 absolute bottom-0 right-2">
            Game engine footage showing character Blade
          </p>
        </div>

        <div className="z-10">
          <div className="absolute left-0 top-0 w-full">
            <Header />
          </div>
          <h1
            className="lg:text-6xl md:text-4xl text-2xl text-center px-4 font-audio text-gray-200 bg-zinc-900 bg-opacity-60 p-8 font-medium w-screen"
            data-testid="home-message">
            May This Journey Lead Us Starward
          </h1>
        </div>
      </div>
      <h1 className="z-10">next content</h1>
    </div>
  )
}
