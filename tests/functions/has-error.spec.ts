import { hasError } from '@functions'

describe('hasError', () => {
  it('Should be has error', () => {
    const result = hasError({ error: 'Has error' })

    expect(result).toEqual(true)
  })
  it('Should be not has error', () => {
    const result = hasError(undefined)

    expect(result).toEqual(false)
  })
})
