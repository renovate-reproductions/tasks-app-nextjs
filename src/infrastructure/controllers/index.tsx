import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import type { DehydratedState } from 'react-query';
import { dehydrate, QueryClient } from 'react-query';

import { staticPath } from '../../../lib/$path';
import { Page } from '../../interfaces/ui/components/Page';
import { fetchTasks, taskKeys } from '../../interfaces/ui/queries/tasks';

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState;
}> = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(taskKeys.list(), fetchTasks);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const images = Object.values(staticPath.images).filter((path) =>
  path.endsWith('.jpg'),
);

export const Index: React.VFC<{
  dehydratedState: DehydratedState;
}> = () => (
  <>
    <Head>
      <title>Tasks</title>
    </Head>
    <Page />
    {images.map((path) => (
      <Image
        key={path}
        src={path}
        alt=""
        layout="responsive"
        width={5384}
        height={3587}
      />
    ))}
  </>
);
