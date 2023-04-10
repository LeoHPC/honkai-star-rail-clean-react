import { render } from '@testing-library/react'

import { Home } from '@/presentation/pages'

describe('Home Page', () => {
  it('should render loading component on page mount', () => {
    const { getByTestId } = render(<Home />)

    const loadingPage = getByTestId('loading-page')

    expect(loadingPage.childElementCount).toBe(1)
  })
})
