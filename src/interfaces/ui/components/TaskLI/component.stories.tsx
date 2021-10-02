import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useMemo } from 'react';

import { View } from './component';

export default {
  title: 'Component/TaskLI/View',
  component: View,
  args: {
    id: 1,
    createdAt: new Date('2021-01-01 00:00'),
    updatedAt: new Date('2021-01-01 00:00'),
    title: 'TODO_01',
    done: false,
  },
} as ComponentMeta<typeof View>;

const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Done = Template.bind({});
Done.args = {
  done: true,
};
