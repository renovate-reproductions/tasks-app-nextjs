import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';

import { useSubmitHandler } from './hook';
import * as Styled from './style';

type ContainerProps = {};

type Props = {
  value: string;
  onChangeText(e: ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
} & ContainerProps;

export const View: React.VFC<Props> = (props) => (
  <Styled.Form onSubmit={props.onSubmit}>
    <Styled.Input
      type="text"
      name="task"
      value={props.value}
      required
      maxLength={2 ** 16}
      autoFocus
      onChange={props.onChangeText}
      placeholder="Add task"
      aria-label="New task"
    />
    <Styled.Button type="submit">Add</Styled.Button>
  </Styled.Form>
);

export const NewTaskForm: React.VFC<ContainerProps> = (props) => {
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
