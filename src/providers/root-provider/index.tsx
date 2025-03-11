import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@constants'
import type { RootProviderProps } from '@providers'
import Toast from 'react-native-toast-message'
import { useAuthStore } from '@store'
import { useEffect } from 'react'
import { useNavigation } from '@hooks'
import { PublicScreens, PrivateScreens } from '@enums'

const queryClient = new QueryClient()

export function RootProvider({ children }: RootProviderProps) {
  const { replace } = useNavigation()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    replace(isAuthenticated() ? PrivateScreens.HOME : PublicScreens.LOGIN)
  }, [isAuthenticated])
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toast />
    </ThemeProvider>
  )
}
