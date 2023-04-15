// Components
import { HeaderLink } from '@/ui'
// Types
import { ExternalHeaderLinkProps } from './types'

export const ExternalHeaderLink = ({ label, ...props }: ExternalHeaderLinkProps) => {
  return <HeaderLink label={label} target="_blank" rel="noopener noreferrer" {...props} />
}
