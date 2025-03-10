import { Button } from '@components'
import { useNavigation } from '@hooks'
import { PublicScreens } from '@enums'
import { useAuthStore } from '@store'
import * as S from './styles'

export function Home() {
  const { cleanAuthData } = useAuthStore()
  const { navigate } = useNavigation()

  const logout = () => {
    cleanAuthData()
    navigate(PublicScreens.LOGIN)
  }
  return (
    <S.Container>
      <Button label="Sair" onPress={logout} />
    </S.Container>
  )
}
