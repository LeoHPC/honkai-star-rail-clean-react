import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { RootRouter } from '@/config/routes/root-router'
import { QueryClient, QueryClientProvider } from 'react-query'

describe('root router', () => {
  it('should render the home page on default url', () => {
    const route = '/'

    const queryClient = new QueryClient()

    render(
      <MemoryRouter initialEntries={[route]}>
        <QueryClientProvider client={queryClient}>
          <RootRouter />
        </QueryClientProvider>
      </MemoryRouter>
    )

    expect(screen.getByTestId('loading-page')).toBeInTheDocument()
  })
})
