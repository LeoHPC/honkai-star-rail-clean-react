import { QueryResponse } from '@/test/domain/models'
import { CharactersDataProps } from '@/domain/models'
import { mockCharacterData } from '@/test/domain/mocks'

export const mockGetCharactersDataResponse = (): QueryResponse<CharactersDataProps[]> => ({
  data: mockCharacterData(),
  isLoading: false,
  isSuccess: true
})
