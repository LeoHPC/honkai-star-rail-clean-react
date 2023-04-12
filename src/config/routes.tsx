import { RouteObject } from 'react-router-dom'
import { factoryHomePage } from '@/main/factory/pages'

export const Routes: RouteObject[] = [
  {
    path: '/',
    element: factoryHomePage()
  }
]
