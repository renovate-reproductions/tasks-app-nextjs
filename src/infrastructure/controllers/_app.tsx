import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../interfaces/ui/style/global';
import { theme } from '../../interfaces/ui/style/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetConstructorArgs<T> = T extends new (...args: infer U) => any
  ? U
  : never;

export const Provider: FC<{
  queryClientConfig?: GetConstructorArgs<typeof QueryClient>[0];
}> = (props) => {
  const queryClient = useMemo(
    () => new QueryClient(props.queryClientConfig ?? {}),
    [props.queryClientConfig],
  );

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' &&
        process.env.STORYBOOK !== 'true' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}

      <GlobalStyle />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
);
