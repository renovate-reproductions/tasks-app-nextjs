import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';

import { TaskUList } from './component';

const meta: ComponentMeta<typeof TaskUList> = {
  title: 'Component/TaskUList',
  component: TaskUList,
};
export default meta;

const Template: ComponentStory<typeof TaskUList> = (args) => (
  <TaskUList {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get('*/api/v1/tasks', (req, res, ctx) =>
      res(
        ctx.delay(500),
        ctx.status(200),
        ctx.json({
          items: [
            {
              id: 1,
              createdAt: new Date('2021-01-01 00:00'),
              updatedAt: new Date('2021-01-01 00:00'),
              title: 'TODO_01',
              done: false,
            },
            {
              id: 2,
              createdAt: new Date('2021-01-01 00:00'),
              updatedAt: new Date('2021-01-01 00:00'),
              title: 'TODO_02',
              done: true,
            },
          ],
        }),
      ),
    ),
  ],
};

export const Error = Template.bind({});
Error.parameters = {
  msw: [
    rest.get('*/api/v1/tasks', (req, res, ctx) =>
      res(ctx.delay(500), ctx.status(400), ctx.json({})),
    ),
  ],
};
