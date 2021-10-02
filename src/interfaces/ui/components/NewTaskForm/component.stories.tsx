import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useMemo } from 'react';

import { View } from './component';

export default {
  title: 'Component/NewTaskForm/View',
  component: View,
  args: {
    value: '',
  },
} as ComponentMeta<typeof View>;

const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Default = Template.bind({});
Default.args = {};
