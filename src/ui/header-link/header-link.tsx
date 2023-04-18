// Types
import { HeaderLinkProps } from './types'

export const HeaderLink = ({ label, ...props }: HeaderLinkProps) => {
  return (
    <a
      className="text-xl font-semibold tracking-widest uppercase text-yellow-600 hover:brightness-125 transition-all"
      {...props}>
      {label}
    </a>
  )
}
