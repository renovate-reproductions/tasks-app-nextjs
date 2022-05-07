import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { useSubmitHandler } from './hook';

type ContainerProps = {};

type Props = {
  value: string;
  onChangeText(e: ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
} & ContainerProps;

export const View: React.FC<Props> = ({ value, onChangeText, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Input
      type="text"
      name="task"
      value={value}
      required
      maxLength={2 ** 16}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      onChange={onChangeText}
      placeholder="Add task"
      aria-label="New task"
    />
    <Button type="submit">Add</Button>
  </Form>
);

export const NewTaskForm: React.FC<ContainerProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue('');
  }, []);

  const handleSubmit = useSubmitHandler(value, resetValue);

  return (
    <View
      {...props}
      value={value}
      onChangeText={handleChangeText}
      onSubmit={handleSubmit}
    />
  );
};

const Form = styled.form`
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
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 32px;
  padding: 0 8px;
`;

const Button = styled.button`
  height: 32px;
`;
