import { RootProvider } from '@providers'
import { useAuthStore } from '@store'
import { PublicScreens, PrivateScreens } from '@enums'
import { Stack } from 'expo-router'

export default function RootLayout() {
  const { isAuthenticated } = useAuthStore()
  return (
    <RootProvider>
      <Stack>
        <Stack.Screen
          name={isAuthenticated() ? PrivateScreens.HOME : PublicScreens.LOGIN}
          options={{ headerShown: false }}
        />
      </Stack>
    </RootProvider>
  )
}
