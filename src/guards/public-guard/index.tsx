import { PrivateScreens } from '@enums'
import { Redirect } from 'expo-router'
import { useAuthStore } from '@store'
import type { PublicGuardProps } from '@guards/types'

export function PublicGuard({ children }: PublicGuardProps) {
  const { isAuthenticated } = useAuthStore()

  if (isAuthenticated()) return <Redirect href={PrivateScreens.HOME} />

  return children
}
