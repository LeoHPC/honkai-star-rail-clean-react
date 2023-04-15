import { QueryClient, QueryClientProvider } from 'react-query'
import { Matcher, MatcherOptions, render } from '@testing-library/react'

import { factoryHomePage } from '@/main/factory/pages'

type SutTypes = {
  getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement
}

const makeSut = (): SutTypes => {
  const queryClient = new QueryClient()
  const HomeComponent = <QueryClientProvider client={queryClient}>{factoryHomePage()}</QueryClientProvider>

  const { getByTestId } = render(HomeComponent)

  return { getByTestId }
}

describe('Home Page', () => {
  it('should render loading component on page mount', () => {
    const { getByTestId } = makeSut()

    const loadingPage = getByTestId('loading-page')

    expect(loadingPage.childElementCount).toBe(1)
  })
})
