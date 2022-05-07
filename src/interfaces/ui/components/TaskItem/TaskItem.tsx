import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import type { TaskModel } from '../../../../domain/models/task-model';
import { useChangeDoneHandler, useClickDeleteHandler } from './hook';

type ContainerProps = TaskModel;

type Props = {
  onChangeDone(e: ChangeEvent<HTMLInputElement>): void;
  onClickDelete(): void;
} & ContainerProps;

export const View: React.FC<Props> = ({
  id,
  title,
  done,
  onChangeDone,
  onClickDelete,
}) => {
  const htmlId = `item_${id}`;

  return (
    <LI>
      <Input
        type="checkbox"
        id={htmlId}
        checked={done}
        onChange={onChangeDone}
      />
      <Label htmlFor={htmlId}>{title}</Label>
      <Button type="button" onClick={onClickDelete}>
        Delete
      </Button>
    </LI>
  );
};

export const TaskItem: React.FC<ContainerProps> = (props) => {
  const handleChangeDone = useChangeDoneHandler(props.id, props.title);
  const handleClickDelete = useClickDeleteHandler(props.id, props.title);

  return (
    <View
      {...props}
      onChangeDone={handleChangeDone}
      onClickDelete={handleClickDelete}
    />
  );
};

const LI = styled.li`
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

const Label = styled.label`
  overflow: hidden;
  color: ${(props) => props.theme.color.black};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Input = styled.input`
  &:checked + ${Label} {
    color: ${(props) => props.theme.color.black70};
    text-decoration: line-through;
  }
`;

const Button = styled.button`
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
