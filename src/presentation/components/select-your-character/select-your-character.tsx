// Types
import { Props } from './types'

export const SelectYourCharacter = ({ characters, characterData, setCurrentCharacter }: Props) => {
  return (
    <>
      <h4 className="font-audio font-medium text-xl sm:text-3xl text-gray-200 tracking-widest mt-4 sm:mt-12">
        Select Your Character
      </h4>
      <div className="grid grid-cols-4 w-[262px] md:w-[344px] xl:w-[424px] gap-2">
        {characters.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentCharacter(Number(item.id) - 1)}
            aria-label={`Take a closer look in ${item.name}`}
            className="outline-none border-none focus-visible:outline-4 focus-visible:outline-fuchsia-500"
            data-testid={`change-character-button-${item.id}`}>
            <img
              src={item.avatar}
              alt={`Avatar of ${item.name}`}
              width={120}
              height={120}
              title={item.name}
              className={`${
                characterData === item ? 'grayscale-0' : 'grayscale'
              } border-2 border-yellow-600 hover:grayscale-0 w-[60px] md:w-[80px] xl:w-[100px] h-[60px] md:h-[80px] xl:h-[100px]`}
              draggable="false"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </>
  )
}
