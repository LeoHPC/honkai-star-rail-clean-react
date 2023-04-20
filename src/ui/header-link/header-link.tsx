// Types
import { HeaderLinkProps } from './types'

export const HeaderLink = ({ label, children, ...props }: HeaderLinkProps) => {
  return (
    <a
      className="md:text-lg text-base flex flex-row items-center gap-1 border-none outline-none focus-visible:outline-fuchsia-500 focus-visible:outline-4 font-semibold tracking-widest uppercase text-yellow-600 brightness-125 hover:brightness-150 transition-all"
      {...props}>
      {label}
      {children}
    </a>
  )
}
