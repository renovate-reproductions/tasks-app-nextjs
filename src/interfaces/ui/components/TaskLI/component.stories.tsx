import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { View } from './component';

const meta: ComponentMeta<typeof View> = {
  title: 'Component/TaskLI/View',
  component: View,
  args: {
    id: 1,
    createdAt: new Date('2021-01-01 00:00'),
    updatedAt: new Date('2021-01-01 00:00'),
    title: 'TODO_01',
    done: false,
  },
};
export default meta;

const Template: ComponentStory<typeof View> = (args) => (
  <Ul>
    <View {...args} />
  </Ul>
);

export const Default = Template.bind({});
Default.args = {};

export const Done = Template.bind({});
Done.args = {
  done: true,
};

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
