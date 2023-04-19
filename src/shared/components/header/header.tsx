// Components
import { ExternalHeaderLink, InternalHeaderLink } from '@/shared/components'

export const Header = () => {
  return (
    <header className="absolute left-0 top-0 w-full bg-gray-900 bg-opacity-50 px-4 py-2">
      <nav>
        <ul className="flex flex-row gap-8 justify-end">
          <li>
            <ExternalHeaderLink
              label="official website"
              href="https://hsr.hoyoverse.com/en-us/home?utm_source=hsrofficalweb&utm_medium=fab&utm_campaign=button"
              aria-label="official website (opens in a new tab)"
            />
          </li>
          <li>
            <ExternalHeaderLink
              label="register now"
              href="https://hsr.hoyoverse.com/en-us/"
              aria-label="register now (opens in a new tab)"
            />
          </li>
          <li>
            <InternalHeaderLink label="characters" href="#characters" aria-label="come see our beautiful characters" />
          </li>
        </ul>
      </nav>
    </header>
  )
}
