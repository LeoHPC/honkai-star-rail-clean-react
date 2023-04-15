import { BASE_URL } from '@/utils/constants'
import { AxiosHttpClient } from '@/shared/infra/adapters'

export const factoryAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient(BASE_URL)
}
