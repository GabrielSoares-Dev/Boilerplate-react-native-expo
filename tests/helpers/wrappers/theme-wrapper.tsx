import { ThemeProvider } from 'styled-components/native'
import { theme } from '@constants'
import type { ReactNode } from 'react'

export function ThemeWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
