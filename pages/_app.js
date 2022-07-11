import Head from 'next/head'

import '/styles/globals.css'

export default ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Next App</title>
      <meta name="description" content="Next App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </>
)
