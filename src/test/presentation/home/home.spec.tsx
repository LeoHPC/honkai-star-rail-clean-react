import { render } from '@testing-library/react'

import { factoryHomePage } from '@/main/factory/pages'

describe('Home Page', () => {
  it('should render loading component on page mount', () => {
    const { getByTestId } = render(factoryHomePage())

    const loadingPage = getByTestId('loading-page')

    expect(loadingPage.childElementCount).toBe(1)
  })
})
