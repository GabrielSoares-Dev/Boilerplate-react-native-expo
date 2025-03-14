import { server } from '../mock-requests'
import 'react-native-gesture-handler/jestSetup'
import { load } from '@expo/env'

load(process.cwd(), { silent: true })

jest.mock('expo-font', () => {
  const module: typeof import('expo-font') = {
    ...jest.requireActual('expo-font'),
    isLoaded: jest.fn(() => true),
  }

  return module
})

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  jest.clearAllMocks()
  jest.useRealTimers()
})

afterAll(() => server.close())
