import Toast from 'react-native-toast-message'
import { showToast } from '@functions'
import { ToastType } from '@enums'

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}))

describe('showToast', () => {
  it('Should call Toast.show with correct parameters', () => {
    const input = {
      type: ToastType.SUCCESS,
      title: 'Test Title',
      description: 'Test Description',
    }

    showToast(input)

    expect(Toast.show).toHaveBeenCalledWith({
      type: ToastType.SUCCESS,
      text1: 'Test Title',
      text2: 'Test Description',
    })
  })

  it('Should call Toast.show with only title when description is not provided', () => {
    const input = {
      type: ToastType.SUCCESS,
      title: 'Test Title',
    }

    showToast(input)

    expect(Toast.show).toHaveBeenCalledWith({
      type: ToastType.SUCCESS,
      text1: 'Test Title',
      text2: undefined,
    })
  })
})
