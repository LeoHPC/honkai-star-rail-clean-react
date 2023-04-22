// Types
import { Props } from './types'

export const SelectYourCharacter = ({ characters, characterData, setCurrentCharacter }: Props) => {
  return (
    <div className="flex flex-row items-center gap-2 overflow-auto scrollbar-hide">
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
            width={80}
            height={80}
            title={item.name}
            className={`${
              characterData === item ? 'grayscale-0' : 'grayscale'
            } border-2 border-yellow-600 hover:grayscale-0 min-w-[80px] min-h-[80px]`}
            draggable="false"
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  )
}
