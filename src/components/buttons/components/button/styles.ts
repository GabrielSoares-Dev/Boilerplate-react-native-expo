import styled from 'styled-components/native'
import type { ButtonVariant } from '@components'

export const Button = styled.TouchableOpacity<{ variant: ButtonVariant }>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#007bff' : '#fff'};
  border: ${({ variant }) =>
    variant === 'primary' ? 'none' : '1px solid #007bff'};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  flex-direction: row;
  gap: 10px;
`

export const Label = styled.Text<{ variant: ButtonVariant }>`
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#007bff')};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`
