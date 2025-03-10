import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fonts: {
      regular: string
      medium: string
      semiBold: string
      bold: string
    }
  }
}
