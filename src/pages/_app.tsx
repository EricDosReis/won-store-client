import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />

        <meta
          name="description"
          content="A simple project starter to work with NextJS, TypeScript, React and Styled Components"
        />

        <title>NextJS - Boilerplate</title>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
