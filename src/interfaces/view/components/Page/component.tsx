import { NewTaskForm } from '../NewTaskForm'
import { TaskUList } from '../TaskUList'
import * as Styled from './style'

type ContainerProps = {}

type Props = {} & ContainerProps

export const View: React.VFC<Props> = () => (
  <Styled.Main>
    <h1>Tasks</h1>
    <NewTaskForm />
    <Styled.UListWrapper>
      <TaskUList />
    </Styled.UListWrapper>
  </Styled.Main>
)

export const Page: React.VFC<ContainerProps> = (props) => <View {...props} />
