import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@/shared/styles/global.css'

import { RootRouter } from './config/routes/root-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  </BrowserRouter>
)
