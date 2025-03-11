import { PublicGuard } from '@guards'
import { Stack } from 'expo-router'

export default function PublicLayout() {
  return (
    <PublicGuard>
      <Stack screenOptions={{ headerShown: false }} />
    </PublicGuard>
  )
}
