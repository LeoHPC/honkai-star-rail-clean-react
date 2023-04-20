import { Meta, StoryObj } from '@storybook/react'

import { VideoDialog } from './video-dialog'
import { Props } from './types'

export default {
  title: 'Presentation/Video Dialog',
  component: VideoDialog,
  args: {
    closeModal: () => '',
    isOpen: true
  }
} as Meta<Props>

export const Default: StoryObj<Props> = {}
