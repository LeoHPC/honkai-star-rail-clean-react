// Components
import { ExternalLinkIcon, HeaderLink } from '@/ui'
// Types
import { ExternalHeaderLinkProps } from './types'

export const ExternalHeaderLink = ({ label, ...props }: ExternalHeaderLinkProps) => {
  return (
    <HeaderLink label={label} target="_blank" rel="noopener noreferrer" {...props}>
      <ExternalLinkIcon fillColor="rgb(202 138 4)" classNames="w-6 h-6 fill-red-800 md:fill-yellow-600" />
    </HeaderLink>
  )
}
