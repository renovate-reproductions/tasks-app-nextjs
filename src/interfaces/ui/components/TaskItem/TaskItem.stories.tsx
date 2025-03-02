import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { View } from './TaskItem';

const meta: ComponentMeta<typeof View> = {
  title: 'Component/TaskItem',
  component: View,
  args: {
    id: 1,
    createdAt: '2021-01-01 00:00',
    updatedAt: '2021-01-01 00:00',
    title: 'TODO_01',
    done: false,
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'listitem', enabled: false }],
      },
    },
  },
};
export default meta;

const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Done = Template.bind({});
Done.args = {
  done: true,
};

export const Sample = Template.bind({});
Sample.args = {
  done: true,
  title: 'sample',
};
