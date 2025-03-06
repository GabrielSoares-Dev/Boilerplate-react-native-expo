import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Button, ButtonLoading } from '@components'
import { ThemeWrapper } from '@tests/helpers'

describe('Button', () => {
  it('Should be render a button', () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Button label="test" />
      </ThemeWrapper>,
    )

    const button = getByText('test')
    expect(button).toBeVisible()
  })

  it('Should be call onPress', () => {
    const onPress = jest.fn()
    const { getByText } = render(
      <ThemeWrapper>
        <Button label="test" onPress={onPress} />
      </ThemeWrapper>,
    )
    const button = getByText('test')

    fireEvent.press(button)

    expect(onPress).toHaveBeenCalled()
  })

  it('Should be render loading when isLoading is true', () => {
    const { getByText, getByTestId } = render(
      <ThemeWrapper>
        <Button label="Loading Button" isLoading loading={<ButtonLoading />} />
      </ThemeWrapper>,
    )

    const loadingText = getByText('Processando...')
    const loadingIndicator = getByTestId('loading')

    expect(loadingText).toBeVisible()
    expect(loadingIndicator).toBeVisible()
  })
})
