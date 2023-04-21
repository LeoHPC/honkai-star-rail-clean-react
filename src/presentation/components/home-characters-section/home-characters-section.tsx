// Constants
import { ELEMENT_IMAGES } from '@/utils/constants'
// Types
import { Props } from './types'
// Assets
import { StarIcon } from './assets/star-icon'

export const HomeCharactersSection = ({ characterData, characters, setCurrentCharacter }: Props) => {
  return (
    <main
      id="characters"
      className="relative min-h-screen w-full bg-gray-900 bg-characters-background bg-cover bg-no-repeat bg-top flex flex-row items-center">
      <h2 className="absolute top-4 left-4 font-audio italic text-6xl font-medium text-gray-200">Characters</h2>
      <section className="w-full min-h-screen flex items-center justify-center">
        <img
          src={characterData.image}
          alt={`Character ${characterData.name} of Honkai Star Rail`}
          width="100%"
          height="100%"
        />
      </section>
      <section className="w-full min-h-screen bg-black bg-opacity-80 flex flex-col justify-center p-16">
        <h3 className="font-audio font-medium text-8xl text-gray-200 tracking-widest" data-testid="character-name">
          {characterData.name}
        </h3>
        <div className="w-48 h-1 bg-gray-200 my-8" />
        <div className="flex flex-row items-center gap-1 mb-2">
          {Array.from(Array(characterData.rarity).keys()).map((item) => (
            <span key={item}>
              <StarIcon />
            </span>
          ))}
        </div>
        <span className="text-2xl text-gray-200 tracking-wider font-semibold flex flex-row items-center gap-2">
          <img
            src={ELEMENT_IMAGES[characterData.element].image}
            alt={ELEMENT_IMAGES[characterData.element].alt}
            width={24}
            height={24}
          />
          {characterData.element}
        </span>
        <span className="text-2xl text-gray-200  tracking-wider font-semibold">VA: {characterData.va}</span>
        <cite className="mt-4 text-xl text-gray-200 font-medium tracking-wide">- {characterData.description}</cite>
        <h4 className="font-audio font-medium text-3xl text-gray-200 tracking-widest mt-12">Select Your Character</h4>
        <div className="flex flex-row items-center gap-2">
          {characters.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentCharacter(Number(item.id) - 1)}
              aria-label={`Take a closer look in ${item.name}`}
              className="outline-none border-none focus-visible:outline-4 focus-visible:outline-fuchsia-500"
              data-testid="change-character-button">
              <img
                src={item.avatar}
                alt={`Avatar of ${item.name}`}
                width={80}
                height={80}
                title={item.name}
                className={`${
                  characterData === item ? 'grayscale-0' : 'grayscale'
                } border-2 border-yellow-600 hover:grayscale-0`}
                draggable="false"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
