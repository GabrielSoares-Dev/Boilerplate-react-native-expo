import type { InputLabelProps } from '@components'
import * as S from './styles'

export function InputLabel({ label }: InputLabelProps) {
  return <S.Label>{label}</S.Label>
}
