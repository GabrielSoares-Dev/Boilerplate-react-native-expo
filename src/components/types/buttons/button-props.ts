import { ReactNode } from 'react'
import type { TouchableOpacityProps } from 'react-native'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonProps = TouchableOpacityProps & {
  label: string
  variant?: ButtonVariant
  isLoading?: boolean
  loading?: ReactNode
}
