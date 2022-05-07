import { expect } from '@storybook/jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import {
  getFetchTasksErrorHandlers,
  getFetchTasksHandlers,
} from '../../../../../msw/handlers';
import { TaskList } from './TaskList';

const meta: ComponentMeta<typeof TaskList> = {
  title: 'Component/TaskList',
  component: TaskList,
};
export default meta;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [getFetchTasksHandlers()],
  },
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [getFetchTasksErrorHandlers()],
  },
};

export const ClickFirstCheckbox = Template.bind({});
ClickFirstCheckbox.parameters = {
  msw: {
    handlers: [getFetchTasksHandlers()],
  },
};
ClickFirstCheckbox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const checkbox = await canvas.findByRole('checkbox', { name: 'TODO_01' });
  await userEvent.click(checkbox);
};

export const TestToggleFirstCheckbox = Template.bind({});
TestToggleFirstCheckbox.parameters = {
  msw: {
    handlers: [getFetchTasksHandlers()],
  },
};
TestToggleFirstCheckbox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const checkbox = await canvas.findByRole('checkbox', { name: 'TODO_01' });
  expect(checkbox).not.toBeChecked();

  await userEvent.click(checkbox);
  await waitFor(async () => {
    await expect(checkbox).toBeChecked();
  });

  await userEvent.click(checkbox);
  await waitFor(async () => {
    await expect(checkbox).not.toBeChecked();
  });
};
