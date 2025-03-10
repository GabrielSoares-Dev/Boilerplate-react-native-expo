import axios from 'axios'
import { authService } from '@services'

jest.mock('axios', () => {
  const mockAxiosInstance = {
    post: jest.fn(),
  }
  return {
    create: jest.fn(() => mockAxiosInstance),
  }
})

describe('Login', () => {
  it('Should be logged', async () => {
    const axiosMock = axios.create()

    const mockResponse = {
      statusCode: 200,
      message: 'Authenticated',
      content: {
        token: 'test-token',
      },
    }
    // @ts-expect-error
    axiosMock.post.mockResolvedValue({ data: mockResponse })

    const postRequestSpyOn = jest.spyOn(axiosMock, 'post')

    const input = {
      email: 'test@outlook.com.br',
      password: 'test@123',
    }
    const output = await authService.login(input)
    const expectedOutput = {
      token: 'test-token',
    }
    expect(output).toEqual(expectedOutput)

    const expectedPath = 'v1/auth/login'
    const expectedBody = {
      email: 'test@outlook.com.br',
      password: 'test@123',
    }

    expect(postRequestSpyOn).toHaveBeenCalledWith(expectedPath, expectedBody)
  })
})
