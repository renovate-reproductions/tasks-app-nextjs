import styled from 'styled-components';

export const LI = styled.li`
  display: grid;
  grid-template: 'input . text . delele' 32px / max-content 8px 1fr 8px max-content;
  align-items: center;
  width: 100%;

  & > :nth-child(1) {
    grid-area: input;
  }

  & > :nth-child(2) {
    grid-area: text;
  }

  & > :nth-child(3) {
    grid-area: delele;
  }
`;

export const Label = styled.label`
  overflow: hidden;
  color: ${(props) => props.theme.color.black};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Input = styled.input`
  &:checked + ${Label} {
    color: ${(props) => props.theme.color.black70};
    text-decoration: line-through;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.white};
  border: solid 1px ${(props) => props.theme.color.black};
  cursor: pointer;

  &:is(:hover, :focus) {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.black};
  }
`;
