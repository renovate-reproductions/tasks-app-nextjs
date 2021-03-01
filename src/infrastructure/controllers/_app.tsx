import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../interfaces/ui/style/global'
import { theme } from '../../interfaces/ui/style/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ;(async () => {
      ;(await import('@socialgouv/matomo-next')).init({
        url: process.env.NEXT_PUBLIC_MATOMO_URL ?? '',
        siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? '',
      })
    })()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
