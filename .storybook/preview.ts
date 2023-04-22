import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/react'

import '../src/shared/styles/global.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    previewTabs: { 'storybook/docs/panel': { index: -1 } },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'dark'
    },
    docs: {
      theme: themes.dark
    }
  }
}

export default preview
