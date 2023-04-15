// Types
import { HeaderLinkProps } from './types'

export const HeaderLink = ({ label, ...props }: HeaderLinkProps) => {
  return <a {...props}>{label}</a>
}
