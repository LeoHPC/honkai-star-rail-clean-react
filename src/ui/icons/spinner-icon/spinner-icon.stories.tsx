import { Meta, StoryObj } from '@storybook/react'

import { SpinnerIcon } from './spinner-icon'
import { SpinnerProps } from './types'

export default {
  title: 'Icons/Spinner',
  component: SpinnerIcon,
  args: {
    backgroundColor: '#ccc',
    fillColor: '#19C6D2',
    classNames: 'w-20 h-20'
  }
} as Meta<SpinnerProps>

export const Default: StoryObj<SpinnerProps> = {}
