import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template: 'input . submit' 32px / 1fr 8px max-content;
  align-items: center;
  width: 100%;

  & > :nth-child(1) {
    grid-area: input;
  }

  & > :nth-child(2) {
    grid-area: submit;
  }
`

export const Input = styled.input`
  height: 24px;
  padding: 0 8px;
`

export const Button = styled.button`
  height: 24px;
`
