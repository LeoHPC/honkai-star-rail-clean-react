import { Meta, StoryObj } from '@storybook/react'

import { HeaderLink } from './header-link'
import { HeaderLinkProps } from './types'

export default {
  title: 'UI/Header Link',
  component: HeaderLink,
  args: {
    label: 'Anchor Title With All Anchor Props',
    href: '#'
  }
} as Meta<HeaderLinkProps>

export const Default: StoryObj<HeaderLinkProps> = {}
