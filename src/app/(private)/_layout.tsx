import { Stack } from 'expo-router'
import { PrivateGuard } from '@guards'

export default function PrivateLayout() {
  return (
    <PrivateGuard>
      <Stack screenOptions={{ headerShown: false }} />
    </PrivateGuard>
  )
}
