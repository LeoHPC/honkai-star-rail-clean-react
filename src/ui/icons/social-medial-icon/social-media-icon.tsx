// Types
import { Props } from './types'

export const SocialMediaIcon = ({ aria, href, icon, name }: Props) => {
  return (
    <a
      href={href}
      aria-label={aria}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      className="outline-none border-none focus-visible:outline-4 focus-visible:outline-fuchsia-500">
      {icon}
    </a>
  )
}
