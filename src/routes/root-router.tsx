import { Routes } from '@/routes'
import { RouteObject, useRoutes } from 'react-router-dom'

export const routeList: RouteObject[] = [...Routes]

export const RootRouter: React.FC = () => {
  const element = useRoutes(routeList)
  return <>{element}</>
}
