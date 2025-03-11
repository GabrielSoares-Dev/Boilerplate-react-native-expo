import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { loginSchema } from '@pages/public/login/schemas'
import type { LoginFields } from '@pages/public/login/types'
import { authService } from '@services'
import type { LoginInput, LoginOutput } from '@services'
import { showToast } from '@functions'
import { useAuthStore } from '@store'
import { useNavigation } from '@hooks'
import { PrivateScreens, ToastType } from '@enums'

export function useLogin() {
  const { setAuthData } = useAuthStore()
  const { replace } = useNavigation()
  const [passwordIsEncrypted, setPasswordIsEncrypted] = useState(true)
  const { control, handleSubmit } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  })

  const onSuccess = (input: LoginOutput) => {
    setAuthData(input)
    replace(PrivateScreens.HOME)
  }

  const onError = () => {
    showToast({
      type: ToastType.ERROR,
      title: 'Email ou senha inválida!',
      description: 'Por favor tente novamente!',
    })
  }

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: (input: LoginInput) => authService.login(input),
    onSuccess,
    onError,
  })

  const toggleEncryptedPassword = () =>
    setPasswordIsEncrypted(!passwordIsEncrypted)

  const onSubmit = (input: LoginFields) => {
    login(input)
  }

  return {
    isLoading,
    passwordIsEncrypted,
    control,
    toggleEncryptedPassword,
    handleSubmit,
    onSubmit,
  }
}
