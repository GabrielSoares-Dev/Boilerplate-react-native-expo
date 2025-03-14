import { server } from '../mock-requests'
import 'react-native-gesture-handler/jestSetup'

jest.mock('expo-font', () => {
  const module: typeof import('expo-font') = {
    ...jest.requireActual('expo-font'),
    isLoaded: jest.fn(() => true),
  }

  return module
})
jest.mock('@constants', () => ({
  theme: {
    fonts: {
      regular: 'test',
      medium: 'test',
      semiBold: 'test',
      bold: 'test',
    },
  },
  API_URL: 'https://www.test.com.br',
}))

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  jest.clearAllMocks()
  jest.useRealTimers()
})

afterAll(() => server.close())
