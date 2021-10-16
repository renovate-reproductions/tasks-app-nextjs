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
        queryClient.setQueryData<TaskModel[]>(['tasks'], (old) => {
          if (!old) {
            return [];
          }

          return old.map((task) =>
            task.id === id
              ? {
                  ...task,
                  done: value,
                }
              : task,
          );
        });

        return value;
      },
      onSuccess: async (result, _, value) => {
        if (typeof value === 'undefined') {
          return;
        }

        if (!result.success) {
          queryClient.setQueryData<TaskModel[]>(['tasks'], (old) => {
            if (!old) {
              return [];
            }

            return old.map((task) =>
              task.id === id
                ? {
                    ...task,
                    done: !value,
                  }
                : task,
            );
          });
        }
      },
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
        const target = queryClient
          .getQueryData<TaskModel[]>(['tasks'])
          ?.find((task) => task.id === id);

        queryClient.setQueryData<TaskModel[]>(
          ['tasks'],
          (old) => old?.filter((task) => task.id !== id) ?? [],
        );

        return target;
      },
      onSuccess: async (result, _, target) => {
        if (!target) {
          return;
        }

        if (!result.success) {
          queryClient.setQueryData<TaskModel[]>(['tasks'], (old) =>
            [...(old ?? []), target].sort(
              (a, b) =>
                new Date(b.updatedAt).getTime() -
                new Date(a.updatedAt).getTime(),
            ),
          );
        }
      },
    },
  );

  return useCallback(() => {
    // eslint-disable-next-line no-alert
    if (confirm(`Are you OK to delete "${title || 'NO TITLE'}"`)) {
      mutate();
    }
  }, [mutate, title]);
};
