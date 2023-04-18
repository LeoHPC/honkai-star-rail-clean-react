// Components
import { ExternalHeaderLink, InternalHeaderLink } from '@/shared/components'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
