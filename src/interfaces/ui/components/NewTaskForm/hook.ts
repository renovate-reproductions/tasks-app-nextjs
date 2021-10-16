import type { FormEvent } from 'react';
import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { CreateTask } from '../../../../application/usecases/create-task';
import type { TaskModel } from '../../../../domain/models/task-model';
import { api } from '../../../api';
import { TaskRepository } from '../../../repositories/task-repository';

export const useSubmitHandler = (value: string, callback: () => void) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (title: string) =>
      new CreateTask(new TaskRepository(api)).execute(title),
    {
      onMutate: async (title: string) => {
        await queryClient.cancelQueries('todos');

        const now = new Date();
        const newTask: TaskModel = {
          id: Math.random(),
          title,
          done: false,
          createdAt: now,
          updatedAt: now,
        };

        queryClient.setQueryData<TaskModel[]>(['tasks'], (old) => [
          newTask,
          ...(old ?? []),
        ]);

        return newTask;
      },
      onSuccess: async (result, _, newTask) => {
        if (!newTask) {
          return;
        }

        if (!result.success) {
          queryClient.invalidateQueries(['tasks']);
          return;
        }

        queryClient.setQueryData<TaskModel[]>(['tasks'], (tasks) =>
          (tasks ?? []).map((task) =>
            task.id === newTask.id ? result.data : task,
          ),
        );
      },
      retry: 5,
    },
  );

  return useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!value) {
        return;
      }

      mutate(value);
      callback();
    },
    [callback, mutate, value],
  );
};
