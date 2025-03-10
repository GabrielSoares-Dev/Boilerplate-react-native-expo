import { ToastType } from '@enums'

export type ShowToastInput = {
  type: ToastType
  title: string
  description?: string
}
