import { memo } from 'react'
import { useQuery } from 'react-query'

import { ListTasks } from '../../../../application/usecases/list-tasks'
import { TaskModel } from '../../../../domain/models/task-model'
import { api } from '../../../api'
import { TaskRepository } from '../../../repositories/task-repository'
import { TaskLI } from '../TaskLI'
import * as Styled from './style'

type ContainerProps = {}

type Props = {
  isLoading: boolean
  isError: boolean
  data: TaskModel[] | undefined
} & ContainerProps

const TaskLIMemoized = memo(TaskLI)

export const View: React.VFC<Props> = (props) => (
  <>
    {(() => {
      if (props.isLoading) {
        return <p>Loading...</p>
      }

      if (props.isError) {
        return <p>Error</p>
      }

      return (
        <Styled.UList>
          {props.data?.map((task) => (
            <TaskLIMemoized key={task.id} {...task} />
          ))}
        </Styled.UList>
      )
    })()}
  </>
)

export const TaskUList: React.VFC<ContainerProps> = (props) => {
  const { isLoading, isError, data } = useQuery<TaskModel[]>(
    ['tasks'],
    async () => {
      const res = await new ListTasks(new TaskRepository(api)).execute()

      if (!res.success) {
        throw res.error
      }

      return res.data
    },
  )

  return <View isLoading={isLoading} isError={isError} data={data} {...props} />
}
