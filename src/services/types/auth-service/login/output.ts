import { BaseResponseWithContent } from '@types'

export type LoginResponse = BaseResponseWithContent<{ token: string }>

export type LoginOutput = {
  token: string
}
