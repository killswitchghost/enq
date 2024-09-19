import React, { useEffect } from 'react';
import Script from 'next/script';
import Lenis from '@studio-freight/lenis';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '../assets/scss/global.scss';
import AOS from 'aos';
import Head from 'next/head';
import { AppProps } from 'next/app';
import useWindowSize from '@hooks/useWindowSize';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useWindowSize();

  useEffect(() => {
    AOS.init({
      initClassName: 'aos-init',
      easing: 'ease-out-quart',
      offset: 0,
      once: false,
      mirror: true
    });
    interface ExtendedLenis extends Lenis {
      raf: (time: DOMHighResTimeStamp) => void;
      destroy: () => void;
      scrollTo: (
        target: number | string,
        options?: { behavior: string }
      ) => void;
    }
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smooth: true
    }) as unknown as ExtendedLenis;

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'A' &&
        target.getAttribute('href')?.startsWith('#')
      ) {
        event.preventDefault();
        const targetSection = document.querySelector(
          target.getAttribute('href')!
        );
        if (targetSection) {
          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY;
          lenis.scrollTo(targetPosition, { behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://cdn.jsdelivr.net' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css'
        />
        <title>Page Title</title>
      </Head>

      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
        strategy='lazyOnload'
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
