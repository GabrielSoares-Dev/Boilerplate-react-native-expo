import type { TextInputProps } from 'react-native'
import type { Control, FieldValues, Path } from 'react-hook-form'
import type { ReactNode } from 'react'

export type InputProps<T extends FieldValues> = TextInputProps & {
  name: Path<T>
  control: Control<T>
  label?: ReactNode
  hasError?: boolean
  errorMessage?: ReactNode
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}
