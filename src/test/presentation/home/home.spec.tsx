import '@testing-library/jest-dom'
import mediaQuery from 'css-mediaquery'
import * as ReactQuery from 'react-query'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RenderResult, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { factoryHomePage } from '@/main/factory/pages'
import { mockGetCharactersDataResponse } from '@/test/presentation/mocks/response'
import { Header } from '@/shared/components'

type SutTypes = {
  component: RenderResult
}

const makeSut = (): SutTypes => {
  const queryClient = new QueryClient()
  const HomeComponent = <QueryClientProvider client={queryClient}>{factoryHomePage()}</QueryClientProvider>

  const component = render(HomeComponent)

  return { component }
}

function createMatchMedia(width: number) {
  return (query: any) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    }
  }
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width)
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

  it('should toggle the dialog on and off', async () => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn()
      }))

    const { component } = makeSut()

    const dialogOpenButton = await waitFor(() => component.getByTestId('open-dialog-button'))

    fireEvent.click(dialogOpenButton)

    const videoDialog = await waitFor(() => component.getByTestId('video-dialog'))

    expect(videoDialog).toBeInTheDocument()

    const dialogCloseButton = await waitFor(() => component.getByTestId('close-dialog-button'))

    fireEvent.click(dialogCloseButton)

    expect(videoDialog).not.toBeInTheDocument()
  })

  it('renders correctly on mobiles screens', async () => {
    resizeScreenSize(400)

    render(<Header />)

    const button = screen.getByTestId('responsive-menu-button')

    fireEvent.click(button)

    const menuFirstLink = screen.getByTestId('responsive-menu-official-website')
    const menuSecondLink = screen.getByTestId('responsive-menu-register-now')
    const menuThirdLink = screen.getByTestId('responsive-menu-characters')

    userEvent.hover(menuFirstLink)

    expect(menuFirstLink).toHaveStyle('color: rgb(17 24 39)')

    userEvent.hover(menuSecondLink)

    expect(menuSecondLink).toHaveStyle('color: rgb(17 24 39)')

    userEvent.hover(menuThirdLink)

    expect(menuThirdLink).toHaveStyle('color: rgb(17 24 39)')
  })
})
