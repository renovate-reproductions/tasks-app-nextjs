import { rest } from 'msw';

import type { TaskModel } from '../src/domain/models/task-model';

export const tasks: TaskModel[] = [
  {
    id: 1,
    createdAt: '2021-01-01 00:00',
    updatedAt: '2021-01-01 00:00',
    title: 'TODO_01',
    done: false,
  },
  {
    id: 2,
    createdAt: '2021-01-01 00:00',
    updatedAt: '2021-01-01 00:00',
    title: 'TODO_02',
    done: true,
  },
];

export const getFetchTaskHandlers = () =>
  rest.get('*/api/v1/tasks/:id', (req, res, ctx) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => task.id === id);
    return task
      ? res(ctx.status(200), ctx.json<TaskModel>(task))
      : res(ctx.status(404), ctx.json({}));
  });

export const getFetchTasksHandlers = () =>
  rest.get('*/api/v1/tasks', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<{ items: TaskModel[] }>({
        items: tasks,
      }),
    ),
  );

export const getFetchTasksErrorHandlers = () =>
  rest.get('*/api/v1/tasks', (_, res, ctx) =>
    res(ctx.status(400), ctx.json({})),
  );
