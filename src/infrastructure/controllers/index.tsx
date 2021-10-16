import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { DehydratedState } from 'react-query';
import { dehydrate, QueryClient } from 'react-query';

import { ListTasks } from '../../application/usecases/list-tasks';
import { api } from '../../interfaces/api';
import { TaskRepository } from '../../interfaces/repositories/task-repository';
import { Page } from '../../interfaces/ui/components/Page';

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState;
}> = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['tasks'], async () => {
    const res = await new ListTasks(new TaskRepository(api)).execute();
    return res.success ? res.data : [];
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const Index: React.VFC<{
  dehydratedState: DehydratedState;
}> = () => (
  <>
    <Head>
      <title>Tasks</title>
    </Head>
    <Page />
  </>
);
