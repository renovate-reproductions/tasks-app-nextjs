import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { useQueryClient } from 'react-query';

import { useSubmitHandler } from './hook';
import * as Styled from './style';

type ContainerProps = {};

type Props = {
  value: string;
  onFocus(e: FocusEvent<HTMLInputElement>): void;
  onBlur(e: FocusEvent<HTMLInputElement>): void;
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
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={props.onChangeText}
      placeholder="Add task"
      aria-label="New task"
    />
    <Styled.Button type="submit">Add</Styled.Button>
  </Styled.Form>
);

export const NewTaskForm: React.VFC<ContainerProps> = (props) => {
  const queryClient = useQueryClient();

  const [value, setValue] = useState('');

  const handleFocus = useCallback(() => {
    queryClient.invalidateQueries(['tasks']);
  }, [queryClient]);

  const handleBlur = handleFocus;

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
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={handleChangeText}
      onSubmit={handleSubmit}
    />
  );
};
