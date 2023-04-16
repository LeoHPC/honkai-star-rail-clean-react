import { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './spinner'
import { SpinnerProps } from './types'

export default {
  title: 'UI/Spinner',
  component: Spinner,
  args: {
    backgroundColor: '#ccc',
    fillColor: '#19C6D2',
    classNames: 'w-20 h-20'
  }
} as Meta<SpinnerProps>

export const Default: StoryObj<SpinnerProps> = {}
