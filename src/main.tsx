import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import '@/shared/styles/global.css'

import { RootRouter } from './config/routes/root-router'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  </BrowserRouter>
)
