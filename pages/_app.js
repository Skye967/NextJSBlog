import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
