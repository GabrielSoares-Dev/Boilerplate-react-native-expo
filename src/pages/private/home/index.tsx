import { Button } from '@components'
import { useNavigation } from '@hooks'
import { PublicScreens } from '@enums'
import { useAuthStore } from '@store'
import * as S from './styles'

export function Home() {
  const { cleanAuthData } = useAuthStore()
  const { replace } = useNavigation()

  const logout = () => {
    cleanAuthData()
    replace(PublicScreens.LOGIN)
  }
  return (
    <S.Container>
      <Button label="Sair" onPress={logout} />
    </S.Container>
  )
}
