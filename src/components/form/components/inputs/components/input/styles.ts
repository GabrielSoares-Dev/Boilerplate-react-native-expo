import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const InputContainer = styled.View<{ hasError?: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ hasError }) => (hasError ? 'red' : '#007bff')};
  border-radius: 5px;
  padding: 0 10px;
  background-color: #fff;
  height: 45px;
`

export const LeftIconContainer = styled.View`
  margin-right: 5px;
`

export const RightIconContainer = styled.View`
  margin-left: 5px;
`

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.medium};
`
