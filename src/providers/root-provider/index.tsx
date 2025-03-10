import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@constants'
import type { RootProviderProps } from '@providers'
import Toast from 'react-native-toast-message'

const queryClient = new QueryClient()

export function RootProvider({ children }: RootProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Toast />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
