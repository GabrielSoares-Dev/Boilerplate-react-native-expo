import * as S from './styles'
import type { ButtonProps } from '@components'

export function Button({
  children,
  label = '',
  variant = 'primary',
  isLoading = false,
  loading,
  disabled = false,
  ...restOfProps
}: ButtonProps) {
  return (
    <S.Button
      disabled={disabled || isLoading}
      variant={variant}
      {...restOfProps}
    >
      {isLoading && loading}
      <S.Label variant={variant}>
        {isLoading ? 'Processando...' : label}
      </S.Label>
      {children}
    </S.Button>
  )
}
