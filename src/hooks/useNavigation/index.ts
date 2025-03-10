import { useRouter } from 'expo-router'
import { PublicScreens, PrivateScreens } from '@enums'
import type { RelativePathString } from 'expo-router'

export function useNavigation() {
  const router = useRouter()

  const navigate = (screen: PublicScreens | PrivateScreens) => {
    router.navigate(screen as unknown as RelativePathString)
  }

  const goBack = () => {
    router.back()
  }

  return {
    navigate,
    goBack,
  }
}
