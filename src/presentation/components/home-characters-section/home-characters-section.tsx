// Componentes
import { SelectYourCharacter, CharactersInfo } from '@/presentation/components'
// Types
import { Props } from './types'

export const HomeCharactersSection = ({ characterData, characters, setCurrentCharacter }: Props) => {
  return (
    <main
      id="characters"
      className="relative min-h-screen w-full bg-gray-900 bg-characters-background bg-cover bg-no-repeat bg-top flex flex-col lg:flex-row items-center">
      <h2 className="absolute top-0 left-0 p-4 sm:p-0 sm:top-4 sm:left-4 font-audio italic text-4xl sm:text-6xl font-medium text-gray-200">
        Characters
      </h2>
      <section className="w-full h-full py-6 px-2 sm:p-0 sm:min-h-screen flex items-center justify-center">
        <img
          src={characterData.image}
          alt={`Character ${characterData.name} of Honkai Star Rail`}
          width="100%"
          height="100%"
        />
      </section>
      <section className="w-full h-full lg:min-h-screen bg-black bg-opacity-80 flex flex-col justify-center p-6 sm:p-12 md:p-16">
        <CharactersInfo characterData={characterData} />
        <SelectYourCharacter
          characters={characters}
          characterData={characterData}
          setCurrentCharacter={setCurrentCharacter}
        />
      </section>
    </main>
  )
}
