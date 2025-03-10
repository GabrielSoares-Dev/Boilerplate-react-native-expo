import { useAuthStore } from '@store'
import { renderHook } from '@testing-library/react-native'
import { act } from 'react'

describe('useAuthStore', () => {
  it('Should be set auth data', () => {
    const { result } = renderHook(() => useAuthStore())

    const mockAuthData = {
      token: 'test-token',
    }

    act(() => result.current.setAuthData(mockAuthData))

    expect(result.current.data).toEqual(mockAuthData)
  })

  it('Should be is authenticated', () => {
    const { result } = renderHook(() => useAuthStore())

    const mockAuthData = {
      token: 'test-token',
    }

    act(() => result.current.setAuthData(mockAuthData))

    expect(result.current.isAuthenticated()).toBeTruthy()
  })

  it('Should be not authenticated', () => {
    const { result } = renderHook(() => useAuthStore())

    const mockAuthData = {
      token: '',
    }

    act(() => result.current.setAuthData(mockAuthData))

    expect(result.current.isAuthenticated()).toBeFalsy()
  })

  it('Should be clean auth data', () => {
    const { result } = renderHook(() => useAuthStore())

    const mockAuthData = {
      token: 'test-token',
    }

    act(() => result.current.setAuthData(mockAuthData))

    act(() => result.current.cleanAuthData())

    const expectedAuthData = {
      token: '',
    }

    expect(result.current.data).toEqual(expectedAuthData)
  })
})
