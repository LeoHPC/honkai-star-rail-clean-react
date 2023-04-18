import { Meta, StoryObj } from '@storybook/react'

import { ExternalLinkIcon } from './external-link-icon'
import { Props } from './types'

export default {
  title: 'Icons/External Link',
  component: ExternalLinkIcon,
  args: {
    fillColor: '#19C6D2',
    classNames: 'w-16 h-16'
  }
} as Meta<Props>

export const Default: StoryObj<Props> = {}
