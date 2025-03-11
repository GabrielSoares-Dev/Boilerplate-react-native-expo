import React, { act } from 'react'
import { Login } from '@pages'
import Toast from 'react-native-toast-message'
import {
  fireEvent,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react-native'
import {
  ThemeWrapper,
  ReactQueryWrapper,
  loginSuccessfullyMock,
  loginFailedMock,
} from '@tests/helpers'
import { useAuthStore } from '@store'
import { useNavigation } from '@hooks'
import { PrivateScreens } from '@enums'

jest.mock('@hooks', () => ({
  useNavigation: jest.fn().mockImplementation(() => ({ replace: jest.fn() })),
}))

describe('Login', () => {
  it('Should be render login page', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
        </ThemeWrapper>
      </ReactQueryWrapper>,
    )

    const title = getByText('Login')
    const emailInput = getByPlaceholderText('luis@outlook.com.br')
    const passwordInput = getByPlaceholderText('********')
    const eyeIcon = getByTestId('eye-icon')

    expect(title).toBeVisible()
    expect(emailInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(eyeIcon).toBeVisible()
  })

  it('Should be show password if press eye icon', async () => {
    const { getByTestId } = render(
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
        </ThemeWrapper>
      </ReactQueryWrapper>,
    )

    const eyeIcon = getByTestId('eye-icon')

    fireEvent.press(eyeIcon)

    await waitFor(() => expect(getByTestId('eye-off-icon')).toBeVisible())
  })

  it('Should be login successfully', async () => {
    const mockReplace = jest.fn()
    // @ts-expect-error
    useNavigation.mockReturnValue({ replace: mockReplace })

    loginSuccessfullyMock()
    const { result } = renderHook(() => useAuthStore())
    const setAuthDataSpyOn = jest.spyOn(result.current, 'setAuthData')
    const { getByPlaceholderText, getByText } = render(
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
        </ThemeWrapper>
      </ReactQueryWrapper>,
    )

    const emailInput = getByPlaceholderText('luis@outlook.com.br')
    const passwordInput = getByPlaceholderText('********')
    const loginButton = getByText('Entrar')

    await act(async () => {
      fireEvent.changeText(emailInput, 'luis@outlook.com.br')
      fireEvent.changeText(passwordInput, 'password')
      fireEvent.press(loginButton)
    })

    const expectedSetAuthDataInput = {
      token: 'test-token',
    }
    expect(setAuthDataSpyOn).toHaveBeenCalledWith(expectedSetAuthDataInput)
    expect(mockReplace).toHaveBeenCalledWith(PrivateScreens.HOME)
  })

  it('Should be login failed', async () => {
    const mockReplace = jest.fn()
    // @ts-expect-error
    useNavigation.mockReturnValue({ replace: mockReplace })
    loginFailedMock()
    const { result } = renderHook(() => useAuthStore())
    const setAuthDataSpyOn = jest.spyOn(result.current, 'setAuthData')
    const { getByPlaceholderText, getByText, findByText } = render(
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
          <Toast />
        </ThemeWrapper>
      </ReactQueryWrapper>,
    )

    const emailInput = getByPlaceholderText('luis@outlook.com.br')
    const passwordInput = getByPlaceholderText('********')
    const loginButton = getByText('Entrar')

    await act(async () => {
      fireEvent.changeText(emailInput, 'luis@outlook.com.br')
      fireEvent.changeText(passwordInput, 'password')
      fireEvent.press(loginButton)
    })

    await waitFor(async () => {
      const toast = await findByText('Email ou senha inválida!')
      expect(toast).toBeTruthy()
    })

    expect(setAuthDataSpyOn).not.toHaveBeenCalled()
    expect(mockReplace).not.toHaveBeenCalled()
  })
})
