// Components
import { HeaderLink } from '@/ui'
// Types
import { InternalHeaderLinkProps } from './types'

export const InternalHeaderLink = ({ label, ...props }: InternalHeaderLinkProps) => {
  return <HeaderLink label={label} {...props} />
}
