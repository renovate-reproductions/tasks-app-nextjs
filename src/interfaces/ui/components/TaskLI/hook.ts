import type { ChangeEvent } from 'react';
import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { RemoveTask } from '../../../../application/usecases/remove-task';
import { ReplaceTask } from '../../../../application/usecases/replace-task';
import type { TaskModel } from '../../../../domain/models/task-model';
import { api } from '../../../api';
import { TaskRepository } from '../../../repositories/task-repository';

export const useChangeDoneHandler = (id: number, title: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    id.toString(),
    async (value: boolean) =>
      new ReplaceTask(new TaskRepository(api)).execute({
        id,
        title,
        done: value,
      }),
    {
      onMutate: async (value) => {
        await queryClient.cancelQueries('todos');

        queryClient.setQueryData<TaskModel[]>(
          ['tasks'],
          (tasks) =>
            tasks?.map((task) =>
              task.id === id
                ? {
                    ...task,
                    done: value,
                  }
                : task,
            ) ?? [],
        );
      },
      onSuccess: async (result) => {
        if (!result.success) {
          queryClient.invalidateQueries(['tasks']);
        }
      },
      retry: 5,
    },
  );

  return useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      mutate(e.target.checked);
    },
    [mutate],
  );
};

export const useClickDeleteHandler = (id: number, title: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    id.toString(),
    async () => new RemoveTask(new TaskRepository(api)).execute(id),
    {
      onMutate: async () => {
        await queryClient.cancelQueries('todos');

        queryClient.setQueryData<TaskModel[]>(
          ['tasks'],
          (tasks) => tasks?.filter((task) => task.id !== id) ?? [],
        );
      },
      onSuccess: async (result) => {
        if (!result.success) {
          queryClient.invalidateQueries(['tasks']);
        }
      },
      retry: 5,
    },
  );

  return useCallback(() => {
    // eslint-disable-next-line no-alert
    if (confirm(`Are you OK to delete "${title || 'NO TITLE'}"`)) {
      mutate();
    }
  }, [mutate, title]);
};
