import { Meta, StoryObj } from '@storybook/react'

import { ExternalHeaderLink } from './external-header-link'
import { ExternalHeaderLinkProps } from './types'

export default {
  title: 'Components/External Header Link',
  component: ExternalHeaderLink,
  args: {
    label: 'GitHub Repository',
    href: 'https://github.com/LeoHPC/honkai-star-rail-clean-react'
  }
} as Meta<ExternalHeaderLinkProps>

export const Default: StoryObj<ExternalHeaderLinkProps> = {}
