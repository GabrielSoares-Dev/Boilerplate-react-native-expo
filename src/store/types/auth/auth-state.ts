export type AuthData = {
  token: string
}
export type AuthState = {
  data: AuthData
  setAuthData: (input: AuthData) => void
  isAuthenticated: () => boolean
  cleanAuthData: () => void
}
