import { render } from '@testing-library/react'

import { factoryHomePageSpy } from '@/test/main/factories/mocks'

describe('Home Page', () => {
  it('should render loading component on page mount', () => {
    const { getByTestId } = render(factoryHomePageSpy())

    const loadingPage = getByTestId('loading-page')

    expect(loadingPage.childElementCount).toBe(1)
  })
})
