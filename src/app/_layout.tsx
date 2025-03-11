import { RootProvider } from '@providers'
import { Slot } from 'expo-router'

export default function RootLayout() {
  return (
    <RootProvider>
      <Slot />
    </RootProvider>
  )
}
