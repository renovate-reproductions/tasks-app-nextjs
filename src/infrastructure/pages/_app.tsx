import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../interfaces/view/style/global'
import { theme } from '../../interfaces/view/style/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  </>
)
