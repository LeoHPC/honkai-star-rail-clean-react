// Constants
import { ELEMENT_IMAGES } from '@/utils/constants'
// Types
import { Props } from './types'
// Assets
import { StarIcon } from './assets/star-icon'

export const CharactersInfo = ({ characterData }: Props) => {
  return (
    <>
      <h3
        className="font-audio font-medium text-3xl sm:text-6xl md:text-8xl text-gray-200 tracking-widest"
        data-testid="character-name">
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
      <span className="text-lg sm:text-2xl text-gray-200 tracking-wider font-semibold flex flex-row items-center gap-2">
        <img
          src={ELEMENT_IMAGES[characterData.element].image}
          alt={ELEMENT_IMAGES[characterData.element].alt}
          width={24}
          height={24}
        />
        {characterData.element}
      </span>
      <span className="text-lg sm:text-2xl text-gray-200  tracking-wider font-semibold">VA: {characterData.va}</span>
      <cite className="mt-4 text-base sm:text-xl text-gray-200 font-medium tracking-wide h-32 lg:h-full overflow-y-auto scrollbar-hide">
        - {characterData.description}
      </cite>
      <h4 className="font-audio font-medium text-xl sm:text-3xl text-gray-200 tracking-widest mt-4 sm:mt-12">
        Select Your Character
      </h4>
    </>
  )
}
