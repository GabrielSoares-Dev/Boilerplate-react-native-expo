import Toast from 'react-native-toast-message'
import type { ShowToastInput } from '@functions'

export function showToast(input: ShowToastInput): void {
  Toast.show({
    type: input.type,
    text1: input.title,
    text2: input.description,
  })
}
