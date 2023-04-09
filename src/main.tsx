import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@/shared/styles/global.css'

import { RootRouter } from './routes/root-router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RootRouter />
  </BrowserRouter>
)
