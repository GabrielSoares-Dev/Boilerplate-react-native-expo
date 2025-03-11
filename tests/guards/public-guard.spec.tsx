import React, { act } from 'react'
import { render, renderHook } from '@testing-library/react-native'
import { PublicGuard } from '@guards'
import { PrivateScreens } from '@enums'
import { Redirect } from 'expo-router'
import { Text } from 'react-native'
import { useAuthStore } from '@store'

jest.mock('expo-router', () => ({
  Redirect: jest.fn(() => null),
}))

describe('PublicGuard', () => {
  const { result } = renderHook(() => useAuthStore())

  beforeEach(() => result.current.cleanAuthData())
  it('Should be render children when user is not authenticated', () => {
    const { getByText } = render(
      <PublicGuard>
        <Text>Public text</Text>
      </PublicGuard>,
    )

    const publicText = getByText('Public text')

    expect(publicText).toBeVisible()
  })

  it('Should be redirect to home screen if user is authenticated', () => {
    act(() => result.current.setAuthData({ token: 'test-token' }))
    render(
      <PublicGuard>
        <Text>Public text</Text>
      </PublicGuard>,
    )

    expect(Redirect).toHaveBeenCalledWith({ href: PrivateScreens.HOME }, {})
  })
})
