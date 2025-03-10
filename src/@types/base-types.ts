export type BaseResponse = {
  statusCode: number
  message: string
}

export type BaseResponseWithContent<TContent> = BaseResponse & {
  content: TContent
}
