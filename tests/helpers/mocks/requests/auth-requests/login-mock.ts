import { server } from '@tests/config/mock-requests'
import { http, HttpResponse } from 'msw'

export const loginSuccessfullyMock = () => {
  server.use(
    http.post('https://www.test.com.br/v1/auth/login', () => {
      return HttpResponse.json(
        {
          statusCode: 200,
          message: 'Authenticated',
          content: {
            token: 'test-token',
          },
        },
        { status: 200 },
      )
    }),
  )
}

export const loginFailedMock = () => {
  server.use(
    http.post('https://www.test.com.br/v1/auth/login', () => {
      return HttpResponse.json(
        {
          statusCode: 401,
          message: 'Invalid credentials',
        },
        { status: 401 },
      )
    }),
  )
}
