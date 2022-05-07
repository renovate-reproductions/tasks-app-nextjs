import { memo } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import type { TaskModel } from '../../../../domain/models/task-model';
import { fetchTasks, taskKeys } from '../../queries/tasks';
import { TaskItem } from '../TaskItem';

type ContainerProps = {};

type Props = {
  isLoading: boolean;
  isError: boolean;
  data: TaskModel[] | undefined;
} & ContainerProps;

const TaskLIMemoized = memo(TaskItem);

export const View: React.FC<Props> = (props) => (
  <>
    {(() => {
      if (props.isLoading) {
        return <p>Loading...</p>;
      }

      if (props.isError) {
        return <p>Error</p>;
      }

      return (
        <UList>
          {props.data?.map((task) => (
            <TaskLIMemoized key={task.id} {...task} />
          ))}
        </UList>
      );
    })()}
  </>
);

export const TaskList: React.FC<ContainerProps> = (props) => {
  const { isLoading, isError, data } = useQuery(taskKeys.list(), fetchTasks);

  return (
    <View isLoading={isLoading} isError={isError} data={data} {...props} />
  );
};

const UList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > :not(:first-child) {
    margin-top: 12px;
  }
`;
