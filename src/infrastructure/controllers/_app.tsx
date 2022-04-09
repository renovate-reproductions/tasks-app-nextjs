import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { useEffect, useMemo } from 'react';
import type { DehydratedState } from 'react-query';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../interfaces/ui/style/global';
import { theme } from '../../interfaces/ui/style/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetConstructorArgs<T> = T extends new (...args: infer U) => any
  ? U
  : never;

export const Provider: FC<
  React.PropsWithChildren<{
    queryClientConfig?: GetConstructorArgs<typeof QueryClient>[0];
    dehydratedState?: DehydratedState;
  }>
> = (props) => {
  const queryClient = useMemo(
    () =>
      new QueryClient(
        props.queryClientConfig ?? {
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
            },
          },
        },
      ),
    [props.queryClientConfig],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={props.dehydratedState}>
        {process.env.NODE_ENV !== 'production' &&
          process.env.STORYBOOK !== 'true' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}

        <GlobalStyle />
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

const allowTracking = async () => true;

const fetchPlausibleOptions = async () => {
  const res = await fetch('/api/plausible-options');
  return (await res.json()) as {
    enabled?: boolean;
    trackLocalhost?: boolean;
    domain?: Location['hostname'];
    apiHost?: string;
  };
};

const useTracker = () => {
  useEffect(() => {
    let destructed = false;
    let cleanup: (() => void) | null = null;

    (async () => {
      if (!(await allowTracking())) {
        return;
      }

      const { enabled, ...plausibleOptions } = await fetchPlausibleOptions();

      if (!enabled) {
        return;
      }

      const plausible = await import('plausible-tracker');

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (destructed) {
        return;
      }

      cleanup = plausible.default(plausibleOptions).enableAutoPageviews();
    })();

    return () => {
      destructed = true;
      cleanup?.();
    };
  }, []);
};

export const MyApp = ({ Component, pageProps }: AppProps) => {
  useTracker();

  return (
    <Provider dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Provider>
  );
};
