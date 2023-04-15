import '@testing-library/jest-dom'
import * as ReactQuery from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RenderResult, cleanup, render, waitFor } from '@testing-library/react'

import { factoryHomePage } from '@/main/factory/pages'
import { mockGetCharactersDataResponse } from '@/test/presentation/mocks/response'

type SutTypes = {
  component: RenderResult
}

const makeSut = (): SutTypes => {
  const queryClient = new QueryClient()
  const HomeComponent = <QueryClientProvider client={queryClient}>{factoryHomePage()}</QueryClientProvider>

  const component = render(HomeComponent)

  return { component }
}

describe('Home Page', () => {
  it('should render loading component on page mount', () => {
    const { component } = makeSut()

    const loadingPage = component.getByTestId('loading-page')

    expect(loadingPage.childElementCount).toBe(1)
    cleanup()
  })

  it('should show a message after request loading', async () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(jest.fn().mockReturnValue(mockGetCharactersDataResponse()))

    const { component } = makeSut()

    const homeMessage = await waitFor(() => component.getByTestId('home-message'))

    expect(homeMessage).toBeInTheDocument()
  })
})
