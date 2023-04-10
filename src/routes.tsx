import { RouteObject } from 'react-router-dom'
import { Home } from './presentation/pages'

export const Routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  }
]
