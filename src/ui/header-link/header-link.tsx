// Types
import { HeaderLinkProps } from './types'

export const HeaderLink = ({ label, children, ...props }: HeaderLinkProps) => {
  return (
    <a
      className="text-xl flex flex-row items-center gap-1 font-semibold tracking-widest uppercase text-yellow-600 hover:brightness-125 transition-all"
      {...props}>
      {label}
      {children}
    </a>
  )
}
