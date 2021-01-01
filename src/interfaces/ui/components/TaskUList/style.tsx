import styled from 'styled-components'

export const UList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > :not(:first-child) {
    margin-top: 12px;
  }
`
