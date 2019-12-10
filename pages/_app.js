
import App from 'next/app';

import Head from '../components/Head';
import Layout from '../hoc/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta httpEquiv='Accept-CH' content='DPR, Width, Viewport-Width, ECT, Device-Memory' />
          <meta httpEquiv='Accept-CH-Lifetime' content='86400' />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
