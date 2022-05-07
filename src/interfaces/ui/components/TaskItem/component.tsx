import type { ChangeEvent } from 'react';

import type { TaskModel } from '../../../../domain/models/task-model';
import { useChangeDoneHandler, useClickDeleteHandler } from './hook';
import * as Styled from './style';

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
    <Styled.LI>
      <Styled.Input
        type="checkbox"
        id={htmlId}
        checked={done}
        onChange={onChangeDone}
      />
      <Styled.Label htmlFor={htmlId}>{title}</Styled.Label>
      <Styled.Button type="button" onClick={onClickDelete}>
        Delete
      </Styled.Button>
    </Styled.LI>
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
