import type { DocumentContext } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const CF_BEACON = {
  token: '1da2080af4aa4458aa31a10b6bcb56f2',
  spa: true,
}

export class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const { renderPage: originalRenderPage } = ctx

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <title>Tasks</title>
          <meta name="Description" content="Tasks" />
          <script
            async
            defer
            data-domain="tasks-app-nextjs.vercel.app"
            src="https://plausible.io/js/plausible.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Cloudflare Web Analytics */}
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify(CF_BEACON)}
          />
          {/* End Cloudflare Web Analytics */}
        </body>
      </Html>
    )
  }
}
