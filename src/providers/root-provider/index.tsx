import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@constants'
import type { RootProviderProps } from '@providers'

const queryClient = new QueryClient()

export function RootProvider({ children }: RootProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
