import React from 'react';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/style.scss';
import 'aos/dist/aos.css';
import Head from 'next/head';

import { AppProps } from 'next/app';
import useWindowSize from '../hooks/useWindowSize';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useWindowSize();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />
        {/* Consider removing or dynamically setting the title */}
        <title>Page Title</title>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
