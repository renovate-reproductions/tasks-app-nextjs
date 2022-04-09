import { NewTaskForm } from '../NewTaskForm';
import { TaskList } from '../TaskList';
import * as Styled from './style';

export const View: React.FC = () => (
  <Styled.Main>
    <h1>Tasks</h1>
    <NewTaskForm />
    <Styled.DivUListWrapper>
      <TaskList />
    </Styled.DivUListWrapper>
  </Styled.Main>
);

export const Page: React.FC = (props) => <View {...props} />;
