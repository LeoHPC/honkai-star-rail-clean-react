import { Meta, StoryObj } from '@storybook/react'

import { InternalHeaderLink } from './internal-header-link'
import { InternalHeaderLinkProps } from './types'

export default {
  title: 'Components/Internal Header Link',
  component: InternalHeaderLink,
  args: {
    label: 'Characters',
    href: '#characters'
  }
} as Meta<InternalHeaderLinkProps>

export const Default: StoryObj<InternalHeaderLinkProps> = {}
