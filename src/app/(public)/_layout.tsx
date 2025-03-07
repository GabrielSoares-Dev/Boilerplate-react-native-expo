import { Stack } from 'expo-router'

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="(login)/index" options={{ headerShown: false }} />
    </Stack>
  )
}
