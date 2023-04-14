import { AxiosHttpClient } from '@/shared/infra/adapters'

export const factoryAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
