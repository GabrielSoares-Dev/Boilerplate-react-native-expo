import { PublicScreens } from '@enums'
import { useAuthStore } from '@store'
import { Redirect } from 'expo-router'
import type { PrivateGuardProps } from '@guards/types'

export function PrivateGuard({ children }: PrivateGuardProps) {
  const { isAuthenticated } = useAuthStore()
  const isNotAuthenticated = !isAuthenticated()

  if (isNotAuthenticated) return <Redirect href={PublicScreens.LOGIN} />

  return children
}
