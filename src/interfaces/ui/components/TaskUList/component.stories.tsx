import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { View } from './component';

const meta: ComponentMeta<typeof View> = {
  title: 'Component/TaskUList/View',
  component: View,
  args: {
    isLoading: false,
    isError: false,
    data: [
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
  },
};
export default meta;

const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
};
