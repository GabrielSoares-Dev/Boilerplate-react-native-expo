import * as S from './styles'
import type { ErrorMessageProps } from '@components'

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <S.ErrorText>{message}</S.ErrorText>
}
