import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Component
import { Home } from '@/presentation/pages'
// Factories
import { factoryGetCharactersDataUseCase } from '@/main/factory/usecases'

const queryClient = new QueryClient()

export const factoryHomePage = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home getCharactersDataUseCase={factoryGetCharactersDataUseCase()} />
    </QueryClientProvider>
  )
}
