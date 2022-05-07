import styled from 'styled-components';

import { NewTaskForm } from '../NewTaskForm';
import { TaskList } from '../TaskList';

export const View: React.FC = () => (
  <Main>
    <h1>Tasks</h1>
    <NewTaskForm />
    <DivUListWrapper>
      <TaskList />
    </DivUListWrapper>
  </Main>
);

export const Page: React.FC = (props) => <View {...props} />;

const Main = styled.main`
  padding: 8px 32px;
`;

const DivUListWrapper = styled.div`
  padding-top: 16px;
`;
