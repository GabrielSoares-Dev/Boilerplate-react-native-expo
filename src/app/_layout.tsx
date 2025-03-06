import { RootProvider } from '@providers'
import { Stack } from 'expo-router'
import 'react-native-reanimated'

export default function RootLayout() {
  return (
    <RootProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </RootProvider>
  )
}
