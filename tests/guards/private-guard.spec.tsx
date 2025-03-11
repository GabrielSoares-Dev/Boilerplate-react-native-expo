import React, { act } from 'react'
import { render, renderHook } from '@testing-library/react-native'
import { PrivateGuard } from '@guards'
import { PublicScreens } from '@enums'
import { Redirect } from 'expo-router'
import { Text } from 'react-native'
import { useAuthStore } from '@store'

jest.mock('expo-router', () => ({
  Redirect: jest.fn(() => null),
}))

describe('PrivateGuard', () => {
  const { result } = renderHook(() => useAuthStore())

  beforeEach(() => result.current.cleanAuthData())
  it('Should be render children when user is authenticated', () => {
    act(() => result.current.setAuthData({ token: 'test-token' }))

    const { getByText } = render(
      <PrivateGuard>
        <Text>Private text</Text>
      </PrivateGuard>,
    )

    const privateText = getByText('Private text')

    expect(privateText).toBeVisible()
  })

  it('Should be redirect to login screen if user is not authenticated', () => {
    render(
      <PrivateGuard>
        <Text>Private text</Text>
      </PrivateGuard>,
    )

    expect(Redirect).toHaveBeenCalledWith({ href: PublicScreens.LOGIN }, {})
  })
})
