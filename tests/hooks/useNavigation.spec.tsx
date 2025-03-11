import { renderHook, act } from '@testing-library/react-native'
import { useNavigation } from '@hooks'
import { PublicScreens } from '@enums'

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}))

describe('useNavigation', () => {
  let mockNavigate: jest.Mock
  let mockBack: jest.Mock
  let mockReplace: jest.Mock

  beforeEach(() => {
    mockNavigate = jest.fn()
    mockBack = jest.fn()
    mockReplace = jest.fn()

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('expo-router').useRouter.mockReturnValue({
      navigate: mockNavigate,
      back: mockBack,
      replace: mockReplace,
    })
  })

  it('Should be call navigate function from expo router when use navigate method from hook', () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.navigate(PublicScreens.LOGIN))

    expect(mockNavigate).toHaveBeenCalledWith(PublicScreens.LOGIN)
  })

  it('Should be call replace function from expo router when use navigate method from hook', () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.replace(PublicScreens.LOGIN))

    expect(mockReplace).toHaveBeenCalledWith(PublicScreens.LOGIN)
  })

  it('Should be call back function from expo router when use goBack method from hook', () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.goBack())

    expect(mockBack).toHaveBeenCalled()
  })
})
