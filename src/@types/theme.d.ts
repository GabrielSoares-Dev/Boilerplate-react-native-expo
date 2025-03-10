import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fonts: {
      regular: string
      bold: string
      semiBold: string
      italic: string
      medium: string
    }
  }
}
