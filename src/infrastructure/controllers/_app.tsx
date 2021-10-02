import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../interfaces/ui/style/global';
import { theme } from '../../interfaces/ui/style/theme';

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     refetchOnWindowFocus: false,
  //   },
  // },
});

export const Provider: FC = (props) => (
  <QueryClientProvider client={queryClient}>
    {process.env.NODE_ENV !== 'production' && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}

    <GlobalStyle />
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  </QueryClientProvider>
);

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
);
