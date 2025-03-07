import { Controller } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
import type { InputProps } from '@components'
import * as S from './styles'

export function Input<T extends FieldValues>({
  control,
  name,
  label,
  hasError = false,
  errorMessage,
  leftIcon,
  rightIcon,
  ...restOfProps
}: InputProps<T>) {
  return (
    <S.Container>
      {label && label}
      <S.InputContainer hasError={hasError}>
        {leftIcon && <S.LeftIconContainer>{leftIcon}</S.LeftIconContainer>}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...restOfProps}
            />
          )}
        />
        {rightIcon && <S.RightIconContainer>{rightIcon}</S.RightIconContainer>}
      </S.InputContainer>

      {hasError && errorMessage}
    </S.Container>
  )
}
